<template>
  <div class="dashboard_orders">
    <Table :orders="$store.state.ORDERS_LIST" :title="'Solo Orders'" />
    <Table :orders="ordersEmpty" :title="'Duo Orders'" />
  </div>
</template>

<script>
import Table from "../../components/dashboard/Table";

export default {
  name: "DashboardOrders",
  components: {
    Table
  },
  data() {
    return {
      ordersEmpty: []
    }
  }
}
</script>

<style lang="scss">

</style>