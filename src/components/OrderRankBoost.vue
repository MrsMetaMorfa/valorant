<template>
  <div class="order-panel order-panel--detailed">
    <h2 class="order-panel_title  text-center">Rank Boost</h2>
    <div class="order-panel_row">
      <div class="upgrade">
        <div class="upgrade_icons">
          <div class="upgrade_rank container container--column">
            <h3 class="upgrade_header text-center"><mark>Start</mark></h3>
            <div class="upgrade_label">
              <Iron_01 v-if="order.rank.from === 'I1'" />
              <Iron_02 v-if="order.rank.from === 'I2'" />
              <Iron_03 v-if="order.rank.from === 'I3'" />
              <Bronze_01 v-if="order.rank.from === 'B1'" />
              <Bronze_02 v-if="order.rank.from === 'B2'" />
              <Bronze_03 v-if="order.rank.from === 'B3'" />
              <Silver_01 v-if="order.rank.from === 'S1'" />
              <Silver_02 v-if="order.rank.from === 'S2'" />
              <Silver_03 v-if="order.rank.from === 'S3'" />
              <Gold_01 v-if="order.rank.from === 'G1'" />
              <Gold_02 v-if="order.rank.from === 'G2'" />
              <Gold_03 v-if="order.rank.from === 'G3'" />
              <Platinum_01 v-if="order.rank.from === 'P1'" />
              <Platinum_02 v-if="order.rank.from === 'P2'" />
              <Platinum_03 v-if="order.rank.from === 'P3'" />
              <Diamond_01 v-if="order.rank.from === 'D1'" />
              <Diamond_02 v-if="order.rank.from === 'D2'" />
              <Diamond_03 v-if="order.rank.from === 'D3'" />
              <Immortal_01 v-if="order.rank.from === 'Im1'" />
              <Immortal_02 v-if="order.rank.from === 'Im2'" />
              <Immortal_03 v-if="order.rank.from === 'Im3'" />
              <Radiant v-if="order.rank.from === 'R'" />
            </div>
            <p class="upgrade_name text-center">{{ $store.state.RANK_LIST.filter(r => r.id === order.rank.from)[0].title }}</p>
          </div>
          <div class="upgrade_rank container container--column">
            <h3 class="upgrade_header text-center"><mark>current</mark></h3>
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
            <h3 class="upgrade_header text-center"><mark>desired</mark></h3>
            <div class="upgrade_label">
              <Iron_01 v-if="order.rank.to === 'I1'" />
              <Iron_02 v-if="order.rank.to === 'I2'" />
              <Iron_03 v-if="order.rank.to === 'I3'" />
              <Bronze_01 v-if="order.rank.to === 'B1'" />
              <Bronze_02 v-if="order.rank.to === 'B2'" />
              <Bronze_03 v-if="order.rank.to === 'B3'" />
              <Silver_01 v-if="order.rank.to === 'S1'" />
              <Silver_02 v-if="order.rank.to === 'S2'" />
              <Silver_03 v-if="order.rank.to === 'S3'" />
              <Gold_01 v-if="order.rank.to === 'G1'" />
              <Gold_02 v-if="order.rank.to === 'G2'" />
              <Gold_03 v-if="order.rank.to === 'G3'" />
              <Platinum_01 v-if="order.rank.to === 'P1'" />
              <Platinum_02 v-if="order.rank.to === 'P2'" />
              <Platinum_03 v-if="order.rank.to === 'P3'" />
              <Diamond_01 v-if="order.rank.to === 'D1'" />
              <Diamond_02 v-if="order.rank.to === 'D2'" />
              <Diamond_03 v-if="order.rank.to === 'D3'" />
              <Immortal_01 v-if="order.rank.to === 'Im1'" />
              <Immortal_02 v-if="order.rank.to === 'Im2'" />
              <Immortal_03 v-if="order.rank.to === 'Im3'" />
              <Radiant v-if="order.rank.to === 'R'" />
            </div>
            <p class="upgrade_name text-center">{{ $store.state.RANK_LIST.filter(r => r.id === order.rank.to)[0].title }}</p>
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
  name: "OrderRankBoost",
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
  .order-panel {
    background: transparent url("~@/assets/images/panel_order.svg") no-repeat top left / contain;
    padding: 34px 50px 0 82px;
    height: 678px;
    @media screen and (max-width: 1239px) {
      padding: 2.74vw 4.03vw 0 6.61vw;
      height: 54.68vw;
    }
    @media screen and (max-width: 800px) {
      height: 452px;
      padding: 23px 33px 0 55px;
    }
    @media screen and (max-width: 640px) {
      background-image: url("../assets/images/panel_order_mobile.svg");
      height: 600px;
      padding: 20px 20px 25px;
    }
    &_row{
      padding: 0 0 40px;
      @media screen and (max-width: 1239px) {
        padding-bottom: 3.23vw;
      }
      @media screen and (max-width: 800px) {
        padding-bottom: 20px;
      }
      .title {
        margin-bottom: 50px;
        @media screen and (max-width: 1239px) {
          margin-bottom: 4.03vw;
        }
        @media screen and (max-width: 800px) {
          margin-bottom: 20px;
        }
      }
    }
    &_title {
      padding: 0 0 10px;
      border-bottom: 1px solid #ff4654;
      font-size: 36px;
      line-height: 1.278;
      margin: 0 0 45px;
      @media screen and (max-width: 1239px) {
        padding-bottom: .81vw;
        font-size: 1.9vw;
        margin-bottom: 3.63vw;
      }
      @media screen and (max-width: 800px) {
        padding-bottom: 6px;
        font-size: 26px;
        margin-bottom: 20px;
      }
    }
    .progress {
      max-width: none;
      &--paused {
        .progress {
          &_count {
            background: #E88718;
          }
          &_title {
            color: #E88718;
          }
        }
      }
    }
    &_button {
      margin-top: 26px;
      width: 100%;
      max-width: 364px;
      @media screen and (max-width: 1239px) {
        margin-top: 2.1vw;
        max-width: 29.35vw;
      }
      @media screen and (max-width: 800px) {
        margin-top: auto;
        max-width: 243px;
      }
      @media screen and (max-width: 640px) {
        max-width: 210px;
      }
      &.working {
        border-color: #FF4654;
        .inner {
          background: #FF4654;
          box-shadow: 0 0 13px #FF4654;
          @media screen and (max-width: 1239px) {
            box-shadow: 0 0 1.04vw #ff4654;
          }
          @media screen and (max-width: 800px) {
            box-shadow: 0 0 8px #ff4654;
          }
        }
      }
    }
    &--detailed {
      display: flex;
      flex-direction: column;
      padding-bottom: 35px;
      @media screen and (max-width: 1239px) {
        padding-bottom: 2.82vw;
      }
      @media screen and (max-width: 800px) {
        padding-bottom: 20px;
      }
      .upgrade_icons {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 40px;
        @media screen and (max-width: 1239px) {
          grid-gap: 3.23vw;
        }
        @media screen and (max-width: 800px) {
          grid-gap: 27px;
        }
        @media screen and (max-width: 640px) {
          grid-gap: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      }
      .order-panel_button {
        margin-top: auto;
      }
    }
  }
  .upgrade {
    &_header {
      text-transform: uppercase;
      margin: 0 0 13px;
      font-size: 24px;
      line-height: 1.292;
      @media screen and (max-width: 1239px) {
        margin-bottom: 1.05vw;
        font-size: 1.94vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 16px;
        margin-bottom: 8px;
      }
      @media screen and (max-width: 640px) {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
    &_icons {
      margin-bottom: 0;
    }
    &_rank {
      height: auto;
    }
    &_name {
      font-weight: bold;
      font-size: 14px;
      line-height: 1.357;
      margin-top: 20px;
      @media screen and (max-width: 1239px) {
        font-size: 1.13vw;
        margin-top: 1.61vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 10px;
        margin-top: 13px;
      }
      @media screen and (max-width: 640px) {
        font-size: 14px;
        margin-top: 11px;
      }
    }
    &_label {
      height: 108px;
      @media screen and (max-width: 1239px) {
        height: 8.71vw;
      }
      @media screen and (max-width: 800px) {
        height: 72px;
      }
      @media screen and (max-width: 640px) {
        height: 88px;
      }
      svg {
        margin: 0 auto;
      }
    }
  }
</style>