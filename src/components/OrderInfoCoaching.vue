<template>
  <div class="order-panel order-panel--detailed">
    <h2 class="order-panel_title  text-center">Coaching</h2>
    <div class="order-panel_row">
      <div class="upgrade">
        <div class="upgrade_icons upgrade_icons--shorter">
          <div class="upgrade_rank container container--column">
            <h3 class="upgrade_header text-center"><mark>Hours</mark></h3>
            <p class="upgrade_name upgrade_name--big text-center">{{ order.hours }}</p>
          </div>
          <div class="upgrade_rank container container--column">
            <h3 class="upgrade_header text-center"><mark>Completed</mark></h3>
            <p class="upgrade_name upgrade_name--big text-center">{{ order.completed }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="order-panel_row">
      <Title :title="'Status'" />
      <div class="progress" :class="{'progress--paused': order.paused === true}">
        <div class="progress_bar">
          <div class="progress_count" :style="`width: ${ order.percent }%`"></div>
        </div>
        <p class="progress_title container">
          <strong>{{ order.status }}</strong>
          <strong>{{ order.percent }}%</strong>
        </p>
      </div>
    </div>
    <button class="btn btn-confirm order-panel_button working" type="button" @click="PausedOrder(order.id)">
      <span class="inner">Pause</span>
    </button>
  </div>

</template>

<script>
import Title from "./elements/Title";

import {mapMutations} from 'vuex'

export default {
  name: "OrderInfoCoaching",
  components: { Title },
  props: ['order'],
  methods: {
    ...mapMutations(['PausedOrder']),

  }
}
</script>

<style lang="scss">
  .order-panel {
    .upgrade {
      &_icons--shorter{
        grid-template-columns: 1fr 1fr;
      }
    }
  }
</style>