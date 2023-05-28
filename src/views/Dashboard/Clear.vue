<template>
  <div class="dashboard_clear">
    <p class="dashboard_clear-message text-center" v-if="!$store.state.CURRENT_USER.hasOwnProperty('id')">You need to login</p>
    <ul class="aside_orders" v-if="orders">
      <li class="aside_order" v-for="order in orders" :key="order.id">
        <router-link :to="{name: 'dashboardOrder', params: { type: 'active', id: order.id }}" class="btn btn-link">
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5.5L8 12.5L16 2" stroke="#2EFDC5" stroke-width="4"/>
          </svg>
          <span>#{{ order.id }}</span>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "DashboardClear",
  computed: {
    ...mapGetters({
      ordersAll: 'getCurrentUserOrders'
    })
  },
  data() {
    return {
      orders: []
    }
  },
  watch: {
    ordersAll: function () {
      this.orders = this.ordersAll.active
    }
  }

}
</script>

<style lang="scss">
.dashboard_clear {
  display: flex;
  align-items: center;
  justify-content: center;
  .aside_order .btn-link {
    color: #19293A;
    font-size: 20px;
  }
}
</style>