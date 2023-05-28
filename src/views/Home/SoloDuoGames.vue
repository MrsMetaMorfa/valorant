<template>
  <section class="rank-boost grid main_inner">
    <h1 class="visibility-hidden">Rank Boost</h1>
    <div class="rank-boost_column grid_column">
      <UserOrder />
    </div>
    <div class="rank-boost_column grid_column">
      <Servers />
      <OrderSoloDuo />
    </div>
  </section>
</template>

<script>
import UserOrder from "../../components/UserOrder";
import Servers from "../../components/Servers";
import OrderSoloDuo from "../../components/OrderSoloDuo";

export default {
  name: "SoloDuoGames",
  components: {
    UserOrder, Servers, OrderSoloDuo
  }
}
</script>

<style lang="scss">
</style>