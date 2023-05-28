<template>
  <div class="rank-boost main_inner">
    <section class="section">
      <h1 class="page_title">ORDER #{{ $route.params.id }}</h1>
      <div class="grid grid--details">
        <div class="rank-boost_column grid_column">
          <OrderRankBoost :order="order" v-if="order.type === 'rankBoost'" />
          <OrderInfoPlacement :order="order" v-if="order.type === 'placement'" />
          <OrderInfoSoloDuo :order="order" v-if="order.type === 'solo/duo'" />
          <OrderInfoCoaching :order="order" v-if="order.type === 'coaching'" />
        </div>
        <div class="rank-boost_column grid_column">
          <PaymentDue v-if="order.paused" />
          <Details :type="order.type" v-if="order.paused" />
          <Chat :person="'Booster'" />
        </div>
      </div>
    </section>
    <section class="section" v-if="order.paused">
      <h2 class="page_title">Order History</h2>
      <p class="orders_none text-center"><mark>No games played.</mark></p>
    </section>
  </div>
</template>

<script>
import OrderRankBoost from "../../components/OrderRankBoost";
import OrderInfoPlacement from "../../components/OrderInfoPlacement";
import OrderInfoSoloDuo from "../../components/OrderInfoSoloDuo";
import OrderInfoCoaching from "../../components/OrderInfoCoaching";

import Chat from "../../components/Chat";
import PaymentDue from "../../components/PaymentDue";
import Details from "../../components/Details";
import {mapGetters} from 'vuex';

export default {
  name: "Order",
  components: { OrderRankBoost, OrderInfoSoloDuo, OrderInfoCoaching, OrderInfoPlacement, Chat, PaymentDue, Details },
  computed: {
    ...mapGetters({
      orders: "getCurrentUserOrders",
    }),
    order: function () {
      return this.orders.active.find(x => x.id === this.$route.params.id);
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.grid--details {
  grid-gap: 30px;
  grid-template-columns: 572px 1fr;
  margin: 0 auto;
  max-width: 1202px;
  @media screen and (max-width: 1239px) {
    grid-gap: 2.42vw;
    grid-template-columns: 46.13vw 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
  .grid_column {
    &:first-of-type {
      width: 572px;
      @media screen and (max-width: 1239px) {
        width: 46.13vw;
      }
      @media screen and (max-width: 800px) {
        margin: 0 auto;
        order: 0;
        width: 381px;
      }
      @media screen and (max-width: 640px) {
        width: 284px;
      }
    }
  }
}
</style>