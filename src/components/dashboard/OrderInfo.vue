<template>
<div class="order-info block">
  <h2 class="block_title text-center">Order #{{ paramsId }}</h2>
  <div class="upgrade">
    <div class="order-info_content upgrade_icons" v-if="order.type === 'rankBoost'">
      <div class="upgrade_rank container container--column">
        <h3 class="upgrade_header text-center">Start</h3>
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
        <h3 class="upgrade_header text-center">Current</h3>
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
        <h3 class="upgrade_header text-center">Desired</h3>
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
    <div class="upgrade_icons order-info_content" v-if="order.type === 'placement'">
      <div class="upgrade_rank container container--column">
        <h3 class="upgrade_header text-center">Rank</h3>
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
        <h3 class="upgrade_header text-center">Purchased</h3>
        <p class="upgrade_name upgrade_name--big text-center">{{ order.purchased }}</p>
      </div>
      <div class="upgrade_rank container container--column">
        <h3 class="upgrade_header text-center">Played</h3>
        <p class="upgrade_name upgrade_name--big text-center">{{ order.played }}</p>
      </div>
    </div>
    <div class="upgrade_icons order-info_content" v-if="order.type === 'solo/duo'">
      <div class="upgrade_rank container container--column">
        <h3 class="upgrade_header text-center">Rank</h3>
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
        <h3 class="upgrade_header text-center">Purchased</h3>
        <p class="upgrade_name upgrade_name--big text-center">{{ order.purchased }}</p>
      </div>
      <div class="upgrade_rank container container--column">
        <h3 class="upgrade_header text-center">Played</h3>
        <p class="upgrade_name upgrade_name--big text-center">{{ order.played }}</p>
      </div>
    </div>
    <div class="upgrade_icons order-info_content order-info_content--coaching" v-if="order.type === 'coaching'">
      <div class="upgrade_rank container container--column">
        <h3 class="upgrade_header text-center">Hours</h3>
        <p class="upgrade_name upgrade_name--big text-center">{{ order.hours }}</p>
      </div>
      <div class="upgrade_rank container container--column">
        <h3 class="upgrade_header text-center">Completed</h3>
        <p class="upgrade_name upgrade_name--big text-center">{{ order.completed }}</p>
      </div>
    </div>
  </div>
  <div class="order-info_more">
    <div class="order-info_options">
      <h3 class="order-info_title text-center">Options:</h3>
      <div class="order-info_options-list">
        <img :src="`${'/assets/images/two-men.svg'}`" alt="Duo Queue" class="option_icon" v-if="order.options.duoQueue">
        <img :src="`${'/assets/images/streaming.svg'}`" alt="Streaming" class="option_icon" v-if="order.options.streaming">
        <img :src="`${'/assets/images/flash.svg'}`" alt="Priority Complection" class="option_icon" v-if="order.options.priorityComplection">
        <img :src="`${'/assets/images/settings_icon.svg'}`" alt="Agent preferences" class="option_icon">
        <img :src="`${'/assets/images/shield.svg'}`" alt="vpn protection" class="option_icon">
      </div>
    </div>
    <div class="order-info_region">
      <h3 class="order-info_title text-center">Region:</h3>
      <p class="order-info_region-value text-center">
        {{ $store.state.SERVERS.list.filter(r => r.id === order.region)[0].title }}</p>
    </div>
  </div>
  <div class="order-info_misc">
    <h3 class="order-info_title text-center">Agent:</h3>
    <div class="order-info_agents">
      <p class="order-info_agent" v-for="(agent, index) in order.agentList" :key="index">{{ agent }}</p>
    </div>
    <h3 class="order-info_title text-center">Note:</h3>
    <p class="order-info_note" v-if="order.note.length > 0">{{ order.note }}</p>
    <p class="order-info_note" v-else>None</p>
  </div>
  <p class="order-info_status text-center">Order {{ order.status }}</p>
</div>
</template>

<script>
import Iron_01 from "../labels/Iron_01";
import Iron_02 from "../labels/Iron_02";
import Iron_03 from "../labels/Iron_03";
import Bronze_01 from "../labels/Bronze_01";
import Bronze_02 from "../labels/Bronze_02";
import Bronze_03 from "../labels/Bronze_03";
import Silver_01 from "../labels/Silver_01";
import Silver_02 from "../labels/Silver_02";
import Silver_03 from "../labels/Silver_03";
import Gold_01 from "../labels/Gold_01";
import Gold_02 from "../labels/Gold_02";
import Gold_03 from "../labels/Gold_03";
import Platinum_01 from "../labels/Platinum_01";
import Platinum_02 from "../labels/Platinum_02";
import Platinum_03 from "../labels/Platinum_03";
import Diamond_01 from "../labels/Diamond_01";
import Diamond_02 from "../labels/Diamond_02";
import Diamond_03 from "../labels/Diamond_03";
import Immortal_01 from "../labels/Immortal_01";
import Immortal_02 from "../labels/Immortal_02";
import Immortal_03 from "../labels/Immortal_03";
import Radiant from "../labels/Radiant";

export default {
  name: "OrderInfo",
  components: { Iron_01, Iron_02, Iron_03,
    Bronze_01, Bronze_02, Bronze_03,
    Silver_01, Silver_02, Silver_03,
    Gold_01, Gold_02, Gold_03,
    Platinum_01, Platinum_02, Platinum_03,
    Diamond_01, Diamond_02, Diamond_03,
    Immortal_01, Immortal_02, Immortal_03,
    Radiant
  },
  props: ['paramsId'],
  data() {
    return {
      order: {}
    }
  },
  mounted() {
    this.order = this.$store.state.CURRENT_USER.orders.active.find(x => x.id === this.paramsId)
  },
  watch: {
    paramsId: function () {
      this.order = this.$store.state.CURRENT_USER.orders.active.find(x => x.id === this.paramsId)
    }
  }
}
</script>

<style lang="scss">
.order-info {
  display: flex;
  flex-direction: column;
  &_title {
    color: #95A9BB;
    font-size: 18px;
    line-height: 1.278;
    margin-bottom: 5px;
    @media screen and (max-width: 1239px) {
      font-size: 1.45vw;
      margin-bottom: .4vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 14px;
      margin-bottom: 6px;
    }
  }
  .upgrade {
    width: 100%;
  }
  &_content {
    border-bottom: 1px solid #DAE4EF;
    padding: 20px 20px 16px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    @media screen and (max-width: 1239px) {
      padding: 1.62vw 1.62vw 1.29vw;
    }
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
    &--coaching {
      grid-template-columns: 1fr 1fr;
    }
    .upgrade {
      &_header {
        color: #95A9BB;
        margin-bottom: 10px;
        font-size: 18px;
        @media screen and (max-width: 1239px) {
          margin-bottom: .81vw;
          font-size: 1.45vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
      &_label {
        height: 74px;
        width: 68px;
        @media screen and (max-width: 1239px) {
          width: 5.48vw;
          height: 5.97vw;
        }
        @media screen and (max-width: 800px) {
          width: 50px;
          height: 54px;
        }
      }
      &_name {
        margin-top: 12px;
        font-size: 14px;
        @media screen and (max-width: 1239px) {
          font-size: 1.13vw;
          margin-top: .97vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 12px;
          margin-top: 10px;
        }
        &--big {
          font-size: 48px;
          @media screen and (max-width: 1239px) {
            font-size: 3.87vw;
          }
          @media screen and (max-width: 800px) {
            font-size: 24px;
          }
        }
      }
    }
  }
  &_more {
    border-bottom: 1px solid #DAE4EF;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  &_options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #DAE4EF;
    padding: 10px 20px 12px;
    @media screen and (max-width: 1239px) {
      padding: .81vw 1.62vw .97vw;
    }
    @media screen and (max-width: 800px) {
      padding: 7px 10px 16px;
    }
    &-list {
      display: flex;
      justify-content: center;
      .option_icon {
        width: 20px;
        height: 20px;
        filter: brightness(.1);
        @media screen and (max-width: 1239px) {
          width: 1.62vw;
          height: .162vw;
        }
        @media screen and (max-width: 800px) {
          width: 14px;
          height: 14px;
        }
        &:not(:last-of-type) {
          margin-right: 10px;
          @media screen and (max-width: 1239px) {
            margin-right: .81vw;
          }
          @media screen and (max-width: 800px) {
            margin-right: 10px;
          }
        }
      }
    }
  }
  &_region {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px 12px;
    @media screen and (max-width: 1239px) {
      padding: .81vw 1.62vw .97vw;
    }
    @media screen and (max-width: 800px) {
      padding: 7px 10px 16px;
    }
    &-value {
      font-family: Rajdhani, sans-serif;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.278;
      color: #0c0c0c;
      @media screen and (max-width: 1239px) {
        font-size: 1.45vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 14px;
      }
    }
  }
  &_misc {
    padding: 20px 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1239px) {
      padding: 1.62vw 1.62vw 2.42vw;
    }
    @media screen and (max-width: 800px) {
      padding: 20px 10px 20px;
    }
  }
  &_agents {
    padding: 10px 0 4px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1239px) {
      padding: .81vw 0 .32vw;
      margin-bottom: 1.62vw;
    }
    @media screen and (max-width: 800px) {
      padding: 4px 0 10px;
      margin-bottom: 10px;
    }
  }
  &_agent {
    display: inline-block;
    margin: 0 3px 6px;
    background: #C5D1DC;
    border-radius: 39px;
    font-family: Rajdhani, sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.278;
    text-transform: uppercase;
    color: #19293A;
    padding: 4px 20px 3px;
    @media screen and (max-width: 1239px) {
      margin: 0 .24vw .48vw;
      font-size: 1.45vw;
      padding: .32vw 1.62vw .24vw;
    }
    @media screen and (max-width: 800px) {
      margin: 0 3px 3px;
      padding: 3px 12px 2px;
      font-size: 12px;
    }
  }
  &_note {
    font-family: Rajdhani, sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.278;
    color: #19293A;
    @media screen and (max-width: 1239px) {
      font-size: 1.45vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 14px;
    }
  }
  &_status {
    margin-top: auto;
    width: 100%;
    background: #2EFDC5;
    border: 4px solid rgba(25, 41, 58, 0.07);
    padding: 11px 20px 10px;
    font-family: Rajdhani, sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.292;
    color: #19293A;
    text-transform: uppercase;
    @media screen and (max-width: 1239px) {
      padding: .89vw 1.62vw .81vw;
      font-size: 1.94vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 18px;
      padding: 5px 10px 4px;
    }
  }
}

</style>