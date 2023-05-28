<template>
<section class="orders main_inner">
  <h1 class="visibility-hidden">Orders</h1>
  <!-- Active Orders -->
  <h2 class="page_title">Active Orders</h2>
  <div class="orders_table" v-if="Orders.active.length > 0">
    <div class="orders_table-head mobile-hidden">
      <h3 class="orders_table-headcell text-center">id</h3>
      <h3 class="orders_table-headcell text-center">order</h3>
      <h3 class="orders_table-headcell text-center">status</h3>
    </div>
    <OrderLink class="orders_table-row"
               :order="order"
               v-for="order in Orders.active"
               :key="order.id" />
  </div>
  <p class="orders_none text-center" v-else><mark>You do not have any active orders.</mark></p>
  <!-- Recent Orders -->
  <h2 class="page_title">Recent Orders</h2>
  <div class="orders_table" v-if="Orders.recent.length > 0">
    <OrderWork class="orders_table-row"
               :order="order"
               v-for="order in Orders.recent"
               :key="order.id" />
  </div>
  <p class="orders_none text-center" v-else><mark>You do not have any completed orders.</mark></p>
</section>
</template>

<script>
import OrderLink from "../../components/OrderLink";
import OrderWork from "../../components/OrderWork";
import {mapState} from "vuex";

export default {
  name: "Orders",
  components: { OrderLink, OrderWork },
  computed: {
    ...mapState({
      Orders: state => state.CURRENT_USER.orders,
    }),
  },
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.orders {
  &_none {
    margin: 0 0 80px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.357;
    @media screen and (max-width: 1239px) {
      margin-bottom: 6.45vw;
      font-size: 1.13vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 40px;
      font-size: 12px;
    }
  }
  &_table {
    margin: 0 auto 120px;
    max-width: 970px;
    @media screen and (max-width: 1239px) {
      margin-bottom: 9.68vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 60px;
    }
    &-head, &-row {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 2fr 2fr;
      margin: 0 0 40px;
      @media screen and (max-width: 1239px) {
        grid-gap: 1.61vw;
        margin-bottom: 3.23vw;
      }
      @media screen and (max-width: 800px) {
        grid-gap: 20px;
        margin-bottom: 20px;
      }
      @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
    &-head {
      border-bottom: 1px solid;
      color: #ff4654;
      text-transform: uppercase;
      @media screen and (max-width: 640px) {
        display: none;
      }
      &cell {
        padding: 10px;
        font-size: 26px;
        line-height: 1.269;
        @media screen and (max-width: 1239px) {
          padding: .81vw;
          font-size: 2.1vw;
        }
        @media screen and (max-width: 800px) {
          padding: 8px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>