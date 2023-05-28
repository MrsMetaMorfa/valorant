import Vue from 'vue'
import Vuex from 'vuex'

import data from './data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ORDER: data.order,
    SERVERS: data.servers,
    USERS: data.users,
    CURRENT_USER: {},
    CURRENCY_LIST: data.currencyList,
    RANK_LIST: data.rankList,
    REVIEW_LIST: data.reviewList,
    RECENT_LIST: data.recentWorkList,
    ORDERS_LIST: data.ordersList,
    REVIEWS_LIST: data.reviewsList
  },
  getters: {
    getCurrentUser (state) {
      return state.CURRENT_USER
    },
    getCurrentUserOrders (state) {
      return state.CURRENT_USER.orders
    },

    reviewListStatistic (state) {
      let statistic = {
        count5: 0,
        count4: 0,
        count3: 0,
        count2: 0,
        count1: 0
      };
      state.REVIEW_LIST.forEach((review) => {
        review.stars === 1
          ? statistic.count1 += 1
          : review.stars === 2
            ? statistic.count2 += 1
            : review.stars === 3
              ? statistic.count3 += 1
              : review.stars === 4
                ? statistic.count4 += 1
                : statistic.count5 += 1
      })
      return statistic
    },
    unfilteredReviewList (state) {
      return state.REVIEW_LIST
    }
  },
  mutations: {
    UpdatePromocode(state, code) {
      state.ORDER.promocode = code;
    },
    ChangeServer(state, id) {
      state.SERVERS.currentID = id;
    },
    ChangeOrderSwitchStreaming(state, value) {
      state.ORDER.streaming.value = value
    },
    ChangeOrderSwitchDuoQueue(state, value) {
      state.ORDER.duoQueue.value = value
    },
    ChangeOrderSwitchPriorityComplection(state, value) {
      state.ORDER.priorityComplection.value = value
    },
    ChangeCurrency(state, value) {
      state.ORDER.currency = value
    },
    UserLogout(state) {
      state.CURRENT_USER = '';
    },
    UpdateUserList(state) {
      let user = state.USERS.find( x => x.id === state.CURRENT_USER.id );
      let u = state.USERS.indexOf(user);
      state.USERS[u] = state.CURRENT_USER
    },
    UpdateUser(state, value) {
      state.CURRENT_USER.userName = value.userName;
      state.CURRENT_USER.password = value.password;
      //this.UpdateUserList;
    },
    UpdateNewOrderSettings(state, value) {
      state.CURRENT_USER.settings.newOrder.value = value;
      //this.UpdateUserList;
    },
    UpdateOrderPageNotificationSettings(state, value) {
      state.CURRENT_USER.settings.orderPageNotification.value = value;
      //this.UpdateUserList;
    },
    UpdateOrderComplectionSettings(state, value) {
      state.CURRENT_USER.settings.orderComplection.value = value;
      //this.UpdateUserList
    },
    PausedOrder(state, payload) {
      const order = state.CURRENT_USER.orders.active.find(i => i.id === payload)
      console.log(state.CURRENT_USER.orders.active.find(i => i.id === payload))
      order.paused = !order.paused
      console.log(state.CURRENT_USER.orders.active.find(i => i.id === payload))
    }
  },
  actions: {
    CreateNewUser(state, value) {
      return new Promise((resolve, reject) => {
        let user = value;
        user.id = state.state.USERS.length;
        let existUser = state.state.USERS.find(x => x.email === value.email);
        if (existUser) {
          reject('User already exist');
        } else {
          state.state.USERS.push(user);
          state.state.CURRENT_USER = user;
          resolve('Welcome!');
        }
      })
    },
    AuthorizeUser(state, value) {
      return new Promise((resolve, reject) => {
        let user = value;
        let currentUser = state.state.USERS.find(x => x.email === value.email);
        if (!currentUser) {
          reject('User do not exist');
        } else if (currentUser.password !== user.password) {
          reject('Incorrect password');
        } else {
          state.state.CURRENT_USER = currentUser;
          resolve('Welcome again!');
        }
      })
    }
  },
  modules: {

  }
})
