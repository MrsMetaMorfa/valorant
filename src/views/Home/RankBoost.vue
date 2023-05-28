<template>
  <section class="rank-boost grid main_inner">
    <h1 class="visibility-hidden">Rank Boost</h1>
    <div class="rank-boost_column grid_column">
      <UserOrder />
    </div>
    <div class="rank-boost_column grid_column">
      <Servers />
      <Order />
    </div>
  </section>
</template>

<script>
import UserOrder from "../../components/UserOrder";
import Servers from "../../components/Servers";
import Order from "../../components/Order";

export default {
  name: "RankBoost",
  components: {
    UserOrder, Servers, Order
  }
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-gap: 100px;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1239px) {
    grid-gap: 4vw;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
}
.rank-boost_column {
  @media screen and (max-width: 800px) {
    &:first-of-type {
      order: 1;
    }
  }
}

.main_inner {
  margin: 0 auto;
  max-width: 1240px;
  min-width: 1240px;
  @media screen and (max-width: 1239px) {
    min-width: auto;
  }
}
</style>