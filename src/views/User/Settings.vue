<template>
<form class="settings">
  <h1 class="page_title">Settings</h1>
  <Title :title="'email preferences'" />
  <div class="settings_line">
    <h3 class="settings_title">new order</h3>
    <Check :title="CURRENT_USER.settings.newOrder.title"
           :check.sync="newOrderValue" />
  </div>
  <div class="settings_line">
    <h3 class="settings_title">order page notification</h3>
    <Check :title="CURRENT_USER.settings.orderPageNotification.title"
           :check.sync="orderPageNotificationValue" />
  </div>
  <div class="settings_line">
    <h3 class="settings_title">order complection</h3>
    <Check :title="CURRENT_USER.settings.orderComplection.title"
           :check.sync="orderComplectionValue" />
  </div>
</form>
</template>

<script>
import Title from "../../components/elements/Title";
import Check from "../../components/elements/Check";

import {mapState, mapMutations} from "vuex";

export default {
  name: "Settings",
  components: { Title, Check },
  computed: {
    ...mapState(['CURRENT_USER']),
    newOrderValue: {
      get () {
        console.log(this.CURRENT_USER.settings.newOrder)
        return this.CURRENT_USER.settings.newOrder.value
      },
      set (value) {
        this.UpdateNewOrderSettings(value);
      }
    },
    orderPageNotificationValue: {
      get () {
        return this.CURRENT_USER.settings.orderPageNotification.value
      },
      set (value) {
        this.UpdateOrderPageNotificationSettings(value)
      }
    },
    orderComplectionValue: {
      get () {
        return this.CURRENT_USER.settings.orderComplection.value
      },
      set (value) {
        this.UpdateOrderComplectionSettings(value)
      }
    },
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'UpdateNewOrderSettings',
      'UpdateOrderPageNotificationSettings',
      'UpdateOrderComplectionSettings'
    ])
  }
}
</script>

<style lang="scss">
.settings {
  max-width: 390px;
  margin: 0 auto;
  &_line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .switch {
      margin-left: 12px;
    }
  }
  &_title {
    font-size: 20px;
    line-height: 1.3;
    text-transform: uppercase;
    @media screen and (max-width: 1239px) {
      font-size: 1.61vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 14px;
    }
  }
}
</style>