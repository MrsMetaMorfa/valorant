<template>
<div class="order">
  <Title :title="'Order'" />
  <div class="order_wrapper container">
    <div class="order_column order_column--center">
      <h3 class="order_title">hours of coaching</h3>
      <Number class="order_number" :number.sync="hours" :max-value="maxHours" />
    </div>
  </div>
  <Ruller class="order_ruller" :number="hours" :max="maxHours" />
</div>
</template>

<script>
import Title from "./elements/Title";
import Number from "./elements/Number";
import Ruller from "./elements/Ruller";

export default {
  name: "Order",
  components: { Title, Number, Ruller },
  data() {
    return {
      hours: 3,
      maxHours: 5
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.order {
  &_column {
    margin: 0 auto;
  }
}
</style>