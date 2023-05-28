<template>
  <div class="order-link">
    <div class="order-link_cell">
      <Title :title="'Id'" class="mobile-visible" />
      <router-link :to="{name: 'order', params: { type: 'active', id: order.id }}"
                   class="order-link_text"><mark>#{{ order.id }}</mark></router-link>
    </div>
    <div class="order-link_cell">
      <Title :title="'Order'" class="mobile-visible" />
      <div class="upgrade" v-if="order.type === 'rankBoost'">
        <div class="upgrade_icons" v-if="order.type === 'rankBoost'">
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
      <div class="upgrade" v-else-if="order.type === 'coaching'">
        <p class="upgrade_title">
          <strong class="text-center">{{ order.completed }}</strong>
          <mark>from</mark>
          <strong class="text-center">{{ order.hours }}</strong>
        </p>
      </div>
      <div class="upgrade upgrade--games" v-else>
        <div class="upgrade_rank">
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
        <p class="upgrade_title">
          <strong class="text-center">{{ order.played }}</strong>
          <mark>from</mark>
          <strong class="text-center">{{ order.purchased }}</strong>
        </p>
      </div>
    </div>
    <div class="order-link_cell">
      <Title :title="'Status'" class="mobile-visible" />
      <div class="progress" :class="{'progress--paused': order.paused === true}">
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
    background: transparent url("~@/assets/images/panel_long.svg") no-repeat top left / 100%;
    @media screen and (max-width: 640px) {
      height: auto;
      border-radius: 10px;
      border: 2px solid #ff4654;
      background: rgba(18,30,43,.3);
      grid-template-columns: 1fr;
      padding: 18px 18px 30px;
    }
    &_cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px 0 20px;
      height: 200px;
      @media screen and (max-width: 1239px) {
        height: 16.13vw;
        padding: 2.42vw 0 1.61vw;
      }
      @media screen and (max-width: 800px) {
        height: 124px;
        padding: 12px 0;
      }
      @media screen and (max-width: 640px) {
        height: auto;
        padding: 0;
      }
    }
    &_text {
      text-decoration: none;
      text-transform: uppercase;
      font-family: Rajdhani, sans-serif;
      font-size: 26px;
      line-height: 1.269;
      font-weight: bold;
      @media screen and (max-width: 1239px) {
        font-size: 2.1vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 17px;
      }
      &:hover, &:focus {
        mark {
          color: #2efdc5;
        }
      }
    }
    .upgrade {
      &_icon {
        height: 40px;
        width: auto;
        margin: auto 0;
        @media screen and (max-width: 1239px) {
          height: 3.23vw;
        }
        @media screen and (max-width: 800px) {
          height: 26px;
        }
        @media screen and (max-width: 640px) {
          height: 32px;
        }
      }
      &_rank {
        height: 120px;
        @media screen and (max-width: 1239px) {
          height: 9.68vw;
        }
        @media screen and (max-width: 800px) {
          height: 60px;
        }
        @media screen and (max-width: 640px) {
          height: 95px;
        }
      }
    }
  }
  .upgrade {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    &_icons {
      display: grid;
      grid-template-columns: 3fr 1fr 3fr;
      grid-gap: 20px;
      margin-bottom: 7px;
      @media screen and (max-width: 1239px) {
        grid-gap: 1.16vw;
        margin-bottom: .56vw;
      }
      @media screen and (max-width: 800px) {
        grid-gap: 13px;
        margin-bottom: 4px;
      }
      @media screen and (max-width: 640px) {
        margin-bottom: 8px;
      }
    }
    &_icon {
      height: 40px;
      width: auto;
      margin: auto 0;
      @media screen and (max-width: 1239px) {
        height: 3.23vw;
      }
      @media screen and (max-width: 800px) {
        height: 26px;
      }
      @media screen and (max-width: 640px) {
        height: 32px;
      }
    }
    &_rank {
      height: 120px;
      width: auto;
      margin: 0 auto;
      @media screen and (max-width: 1239px) {
        height: 9.68vw;
      }
      @media screen and (max-width: 800px) {
        height: 60px;
      }
      @media screen and (max-width: 640px) {
        height: 95px;
      }
      .label {
        height: 100%;
        g {
          transform: translateY(0);
          opacity: 1;
        }
        .label, #label {
          &-0, &-1, &-2, &-3, &-4, &-5, &-6, &-7, &-8, &-9, &-10, &-11, &-12, &-13 {
            animation: none;
          }
        }
      }
    }
    &_title {
      display: grid;
      grid-template-columns: 3fr 1fr 3fr;
      grid-gap: 20px;
      width: 100%;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.333;
      @media screen and (max-width: 1239px) {
        grid-gap: 1.61vw;
        font-size: 1.45vw;
      }
      @media screen and (max-width: 800px) {
        grid-gap: 13px;
        font-size: 12px;
      }
      strong {
        font-size: 200%;
      }
      mark {
        margin: auto;
      }
    }
    &--games {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 20px;
      @media screen and (max-width: 1239px) {
        grid-gap: 1.61vw;
      }
      @media screen and (max-width: 800px) {
        grid-gap: 13px;
      }
    }
  }
  .progress {
    max-width: 270px;
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1239px) {
      max-width: 21.77vw;
    }
    @media screen and (max-width: 800px) {
      max-width: 180px;
    }
    @media screen and (max-width: 640px) {
      max-width: 100%;
    }
    &_bar {
      background: rgba(255, 70, 84, 0.2);
      height: 20px;
      width: 100%;
      margin-bottom: 10px;
      @media screen and (max-width: 1239px) {
        height: 1.61vw;
        margin-bottom: .81vw;
      }
      @media screen and (max-width: 800px) {
        height: 12px;
        margin-bottom: 9px;
      }
    }
    &_count {
      height: 20px;
      background: #2efdc5;
      @media screen and (max-width: 1239px) {
        height: 1.61vw;
      }
      @media screen and (max-width: 800px) {
        height: 12px;
      }
    }
    &_title {
      justify-content: space-between;
      text-transform: uppercase;
      color: #2efdc5;
      width: 100%;
      font-family: Rajdhani, sans-serif;
      font-size: 20px;
      line-height: 1.3;
      @media screen and (max-width: 1239px) {
        font-size: 1.61vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 14px;
      }
    }
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
</style>