<template>
  <section class="rank-boost grid main_inner">
    <h1 class="visibility-hidden">Placement</h1>
    <div class="rank-boost_column grid_column">
      <UserOrder />
    </div>
    <div class="rank-boost_column grid_column">
      <Servers />
      <OrderPlacement />
    </div>
  </section>
</template>

<script>
import UserOrder from "../../components/UserOrder";
import Servers from "../../components/Servers";
import OrderPlacement from "../../components/OrderPlacement";

export default {
  name: "Placement",
  components: {
    UserOrder, Servers, OrderPlacement
  }
}
</script>

<style lang="scss">
</style>