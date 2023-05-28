<template>
  <div class="order-link work">
    <div class="order-link_cell">
      <Title :title="'Order'" class="mobile-visible" />
      <div class="upgrade">
        <div class="upgrade_icons">
          <div class="upgrade_rank">
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
          <img class="upgrade_icon" :src="`${'/assets/images/upgrade.svg'}`" alt="Upgrade to">
          <div class="upgrade_rank">
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
        </div>
        <p class="upgrade_title">
          <span class="text-center">{{ $store.state.RANK_LIST.filter(r => r.id === order.rank.from)[0].title }}</span>
          <span></span>
          <span class="text-center">{{ $store.state.RANK_LIST.filter(r => r.id === order.rank.to)[0].title }}</span>
        </p>
      </div>
    </div>
    <div class="order-link_cell">
      <Title :title="'Latest Games'" class="mobile-visible" />
      <div class="latest">
        <p class="latest_item" v-for="item in order.latestGames" :key="item.id">
          <span class="latest_title">Retouch</span>
          <span class="latest_result" :class="{'win': item.result === 'Win', 'loss': item.result === 'Loss'}">
            <svg viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M50 0V14L44.0858 20H36.8917H33.7887H-0.000930786V6L5.91327 0H33.7887H36.8917H50Z"/>
            </svg>
            <span>{{ item.result }}</span>
          </span>
        </p>
      </div>
    </div>
    <div class="order-link_cell">
      <Title :title="'Status'" class="mobile-visible" />
      <div class="progress">
        <div class="progress_bar">
          <div class="progress_count" :style="`width: ${order.percent}%`"></div>
        </div>
        <p class="progress_title container">
          <strong>{{ order.status }}</strong>
          <strong>{{ order.percent}}%</strong>
        </p>
      </div>
    </div>
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


export default {
  name: "OrderLink",
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
  props: ['order']
}
</script>

<style lang="scss">
  .order-link {
    .latest {
      margin: auto;

      &_item {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 18px;
        line-height: 1.278;
        @media screen and (max-width: 1239px) {
          font-size: 1.45vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 12px;
        }
        @media screen and (max-width: 640px) {
          font-size: 18px;
        }
        span {
          display: block;
        }

        &:not(:last-of-type) {
          margin-bottom: 20px;
          @media screen and (max-width: 1239px) {
            margin-bottom: 1.61vw;
          }
          @media screen and (max-width: 800px) {
            margin-bottom: 13px;
          }
          @media screen and (max-width: 640px) {
            margin-bottom: 19px;
          }
        }
      }

      &_result {
        position: relative;
        margin-left: 12px;
        width: 50px;
        min-width: 50px;
        height: 20px;
        @media screen and (max-width: 1239px) {
          margin-left: .97vw;
          height: 1.61vw;
          width: 4.03vw;
          min-width: 4.03vw;
        }
        @media screen and (max-width: 800px) {
          height: 20px;
          margin-left: 12px;
          width: 50px;
          min-width: 50px;
        }
        &.win {
          svg path {
            fill: #2efdc5;
          }
        }

        &.loss {
          svg path {
            fill: #ff4654;
          }
        }

        span {
          font-family: Rajdhani, sans-serif;
          font-weight: bold;
          font-size: 14px;
          line-height: 1;
          color: #19293A;
          position: absolute;
          top: calc(50% + 2px);
          left: 50%;
          transform: translate(-50%, -50%);
          text-transform: uppercase;
          @media screen and (max-width: 1239px) {
            font-size: 1.13vw;
          }
          @media screen and (max-width: 800px) {
            font-size: 10px;
            top: calc(50% + 2px);
          }
        }
      }
    }

    &.work {
      grid-template-columns: 2fr 1fr 2fr;
      @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>