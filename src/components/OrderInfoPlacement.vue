<template>
  <div class="order-panel order-panel--detailed">
    <h2 class="order-panel_title  text-center">Placement</h2>
    <div class="order-panel_row">
      <div class="upgrade">
        <div class="upgrade_icons">
          <div class="upgrade_rank container container--column">
            <h3 class="upgrade_header text-center"><mark>rank</mark></h3>
            <div class="upgrade_label">
              <Iron_01 v-if="order.rank.current === 'I1'" />
              <Iron_02 v-if="order.rank.current === 'I2'" />
              <Iron_03 v-if="order.rank.current === 'I3'" />
              <Bronze_01 v-if="order.rank.current === 'B1'" />
              <Bronze_02 v-if="order.rank.current === 'B2'" />
              <Bronze_03 v-if="order.rank.current === 'B3'" />
              <Silver_01 v-if="order.rank.current === 'S1'" />
              <Silver_02 v-if="order.rank.current === 'S2'" />
              <Silver_03 v-if="order.rank.current === 'S3'" />
              <Gold_01 v-if="order.rank.current === 'G1'" />
              <Gold_02 v-if="order.rank.current === 'G2'" />
              <Gold_03 v-if="order.rank.current === 'G3'" />
              <Platinum_01 v-if="order.rank.current === 'P1'" />
              <Platinum_02 v-if="order.rank.current === 'P2'" />
              <Platinum_03 v-if="order.rank.current === 'P3'" />
              <Diamond_01 v-if="order.rank.current === 'D1'" />
              <Diamond_02 v-if="order.rank.current === 'D2'" />
              <Diamond_03 v-if="order.rank.current === 'D3'" />
              <Immortal_01 v-if="order.rank.current === 'Im1'" />
              <Immortal_02 v-if="order.rank.current === 'Im2'" />
              <Immortal_03 v-if="order.rank.current === 'Im3'" />
              <Radiant v-if="order.rank.current === 'R'" />
            </div>
            <p class="upgrade_name text-center">{{ $store.state.RANK_LIST.filter(r => r.id === order.rank.current)[0].title }}</p>
          </div>
          <div class="upgrade_rank container container--column">
            <h3 class="upgrade_header text-center"><mark>Purchased</mark></h3>
            <p class="upgrade_name upgrade_name--big text-center">{{ order.purchased }}</p>
          </div>
          <div class="upgrade_rank container container--column">
            <h3 class="upgrade_header text-center"><mark>Played</mark></h3>
            <p class="upgrade_name upgrade_name--big text-center">{{ order.played }}</p>
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
import Iron_01 from "./labels/Iron_01";
import Iron_02 from "./labels/Iron_02";
import Iron_03 from "./labels/Iron_03";
import Bronze_01 from "./labels/Bronze_01";
import Bronze_02 from "./labels/Bronze_02";
import Bronze_03 from "./labels/Bronze_03";
import Silver_01 from "./labels/Silver_01";
import Silver_02 from "./labels/Silver_02";
import Silver_03 from "./labels/Silver_03";
import Gold_01 from "./labels/Gold_01";
import Gold_02 from "./labels/Gold_02";
import Gold_03 from "./labels/Gold_03";
import Platinum_01 from "./labels/Platinum_01";
import Platinum_02 from "./labels/Platinum_02";
import Platinum_03 from "./labels/Platinum_03";
import Diamond_01 from "./labels/Diamond_01";
import Diamond_02 from "./labels/Diamond_02";
import Diamond_03 from "./labels/Diamond_03";
import Immortal_01 from "./labels/Immortal_01";
import Immortal_02 from "./labels/Immortal_02";
import Immortal_03 from "./labels/Immortal_03";
import Radiant from "./labels/Radiant";

import {mapMutations} from 'vuex'

export default {
  name: "OrderInfoPlacement",
  components: { Title,
    Iron_01, Iron_02, Iron_03,
    Bronze_01, Bronze_02, Bronze_03,
    Silver_01, Silver_02, Silver_03,
    Gold_01, Gold_02, Gold_03,
    Platinum_01, Platinum_02, Platinum_03,
    Diamond_01, Diamond_02, Diamond_03,
    Immortal_01, Immortal_02, Immortal_03,
    Radiant
  },
  props: ['order'],
  methods: {
    ...mapMutations(['PausedOrder']),

  }
}
</script>

<style lang="scss">
  .upgrade {
    &_name--big {
      margin: auto;
      font-weight: bold;
      font-size: 48px;
      line-height: 1.333;
      @media screen and (max-width: 1239px) {
        font-size: 3.87vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 32px;
      }
    }
  }
</style>