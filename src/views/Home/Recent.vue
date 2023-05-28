<template>
<section class="orders main_inner">
  <h1 class="page_title">Our work</h1>
  <p class="page_subtitle text-center">Here are some of our recent boosting orders. <br />
    You can practically watch us doing the work and see how we fulfil our orders from this page.</p>
  <div class="orders_table work" v-if="Orders.length > 0">
    <div class="orders_table-head mobile-hidden">
      <h3 class="orders_table-headcell text-center">Order</h3>
      <h3 class="orders_table-headcell text-center">Latest games</h3>
      <h3 class="orders_table-headcell text-center">Status</h3>
    </div>
    <OrderWork class="orders_table-row"
               :order="order"
               v-for="order in Orders"
               :key="order.id" />
  </div>
  <p class="orders_none text-center" v-else><mark>You do not have any recent works.</mark></p>
</section>
</template>

<script>
import OrderWork from "../../components/OrderWork";
import {mapState} from "vuex";

export default {
  name: "Recent",
  components: { OrderWork },
  computed: {
    ...mapState({
      Orders: state => state.RECENT_LIST,
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
</style>