<template>
<aside class="user-order">
  <h2 class="user-order_title">YOUR ORDER</h2>
  <h3 class="user-order_subtitle">Gold 3 <mark>(0+RR) to</mark> Platinum 3</h3>
  <p class="user-order_description">Approximate complection time: <strong>3 days</strong></p>
  <div class="user-order_options">
    <div class="user-order_option container">
      <img :src="`${'/assets/images/two-men.svg'}`" alt="Duo Queue" class="option_icon">
      <p class="option_title">{{ ORDER.duoQueue.title }}&nbsp;<small>({{ORDER.duoQueue.upPrice}})</small></p>
      <div class="option_switch">
        <Check :title="ORDER.duoQueue.title" :check.sync="duoQueueValue"/>
      </div>
    </div>
    <div class="user-order_option container">
      <img :src="`${'/assets/images/streaming.svg'}`" alt="Streaming" class="option_icon">
      <p class="option_title">{{ ORDER.streaming.title }}&nbsp;<small>({{ ORDER.streaming.upPrice }})</small></p>
      <div class="option_switch">
        <Check :check.sync="streamingValue" :title="ORDER.streaming.title" />
      </div>
    </div>
    <div class="user-order_option container">
      <img :src="`${'/assets/images/flash.svg'}`" alt="Priority Complection" class="option_icon">
      <p class="option_title">{{ ORDER.priorityComplection.title }}&nbsp;<small>({{ ORDER.priorityComplection.upPrice }})</small></p>
      <div class="option_switch">
        <Check :check.sync="priorityComplectionValue" :title="ORDER.priorityComplection.title" />
      </div>
    </div>
    <div class="user-order_option container">
      <img :src="`${'/assets/images/settings_icon.svg'}`" alt="Agent preferences" class="option_icon">
      <p class="option_title">{{ ORDER.agentPreferences.title }}</p>
      <div class="option_switch"><Free /></div>
    </div>
    <div class="user-order_option container">
      <img :src="`${'/assets/images/shield.svg'}`" alt="vpn protection" class="option_icon">
      <p class="option_title">{{ ORDER.vpnProtection.title }}</p>
      <div class="option_switch"><Free /></div>
    </div>
  </div>
  <div class="user-order_discount">
    <Title :title="'Discount'" />
    <Promocode />
  </div>
  <div class="user-order_total">
    <Title :title="'Total'" />
    <div class="user-order_total-price container">
      <p class="user-order_total-text">
        <span v-html="currency.icon"></span>{{ ORDER.total }}
      </p>
      <Currency :current.sync="currency" :list="CURRENCY_LIST" />
    </div>
  </div>
  <div class="user-order_checkout">
    <button class="btn btn-confirm" type="button">
      <span class="inner">CHECKOUT</span>
    </button>
  </div>
</aside>
</template>

<script>
import Check from "../components/elements/Check";
import Free from "./elements/Free";
import Title from "./elements/Title";
import Promocode from "./elements/Promocode";
import Currency from "./elements/Currency";

import {mapState, mapMutations} from 'vuex';

export default {
  name: "UserOrder",
  components: { Check, Free, Title, Promocode, Currency },
  computed: {
    ...mapState(['ORDER', 'CURRENCY_LIST']),
    duoQueueValue: {
      get () {
        return this.ORDER.duoQueue.value
      },
      set (value) {
        this.ChangeOrderSwitchDuoQueue(value)
      }
    },
    streamingValue: {
      get () {
        return this.ORDER.streaming.value
      },
      set (value) {
        this.ChangeOrderSwitchStreaming(value)
      }
    },
    priorityComplectionValue: {
      get () {
        return this.ORDER.priorityComplection.value
      },
      set (value) {
        this.ChangeOrderSwitchPriorityComplection(value)
      }
    },
    currency: {
      get () {
        return this.ORDER.currency
      },
      set (value) {
        this.ChangeCurrency(value);
      }
    },

  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'ChangeOrderSwitchDuoQueue',
      'ChangeOrderSwitchStreaming',
      'ChangeOrderSwitchPriorityComplection',
      'ChangeCurrency'
    ])
  },
}
</script>

<style lang="scss">
.user-order {
  background: transparent url("../assets/images/panel.svg") no-repeat top left / 100%;
  padding: 9px 34px 35px 66px;
  height: 756px;
  width: 532px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1239px) {
    padding: .73vw 2.74vw 2.82vw 5.32vw;
    height: 60.97vw;
    width: 42.9vw;
  }
  @media screen and (max-width: 800px) {
    margin: 0 auto;
    width: 354px;
    height: 504px;
    padding: 9px 23px 23px 44px;
  }
  @media screen and (max-width: 640px) {
    width: 284px;
    height: 591px;
    padding: 8px 20px 25px;
    background-image: url("../assets/images/panel_mobile.svg");
  }
  &_title {
    padding: 0 0 0 24px;
    margin-bottom: 31px;
    font-weight: bold;
    font-size: 42px;
    line-height: 1.286;
    text-transform: uppercase;
    @media screen and (max-width: 1239px) {
      padding-left: 1.94vw;
      margin-bottom: 2.5vw;
      font-size: 3.39vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 22px;
      padding-left: 16px;
      margin-bottom: 16px;
   }
    @media screen and (max-width: 640px) {
      margin-bottom: 20px;
    }
  }
  &_subtitle {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.292;
    margin: 0 0 5px;
    @media screen and (max-width: 1239px) {
      font-size: 1.94vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 18px;
      margin-bottom: 2px;
    }
    mark {
      background: transparent;
      font-family: Exo, sans-serif;
      font-weight: normal;
      color: #FF4654;
    }
  }
  &_description {
    font-size: 14px;
    line-height: 1.357;
    margin: 0 0 33px;
    text-align: center;
    @media screen and (max-width: 1239px) {
      font-size: 1.13vw;
      margin-bottom: 2.66vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 12px;
      margin-bottom: 16px;
    }
    @media screen and (max-width: 640px) {
      margin-bottom: 30px;
    }
  }
  &_options {
    align-items: center;
  }
  &_option {
    margin-bottom: 20px;
    align-items: center;
    @media screen and (max-width: 1239px) {
      margin-bottom: 1.61vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 12px;
    }
    @media screen and (max-width: 640px) {
      margin-bottom: 20px;
    }
    .option {
      &_icon {
        height: 26px;
        width: 26px;
        min-width: 26px;
        margin: 0 16px 0 0;
        @media screen and (max-width: 1239px) {
          height: 2.1vw;
          width: 2.1vw;
          min-width: 2.1vw;
          margin-right: 1.29vw;
        }
        @media screen and (max-width: 800px) {
          height: 14px;
          width: 14px;
          min-width: 14px;
          margin-right: 8px;
        }
      }
      &_title {
        font-family: Rajdhani, sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 20px;
        line-height: 1.3;
        margin: 0 16px 0 0;
        white-space: nowrap;
        @media screen and (max-width: 1239px) {
          margin-right: 1.29vw;
          font-size: 1.61vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 16px;
          margin-right: 8px;
          white-space: normal;
          max-width: 160px;
        }
        @media screen and (max-width: 640px) {
          font-size: 14px;
          margin-right: 4px;
        }
        small {
          display: inline-block;
          margin: 0 0 0 6px;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.357;
          font-family: Exo, sans-serif;
          @media screen and (max-width: 1239px) {
            font-size: 1.13vw;
          }
          @media screen and (max-width: 800px) {
            font-size: 9px;
          }
        }
      }
      &_switch {
        margin: 0 0 0 auto;
      }
    }
  }
  &_discount {
    margin-bottom: 20px;
    @media screen and (max-width: 1239px) {
      margin-bottom: 1.61vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 16px;
    }
    @media screen and (max-width: 640px) {
      margin-bottom: 24px;
    }
  }
  &_total {
    margin-bottom: 25px;
    @media screen and (max-width: 1239px) {
      margin-bottom: 2.02vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 16px;
    }
    @media screen and (max-width: 640px) {
      margin-bottom: 30px;
    }
    &-price {
      justify-content: center;
    }
    &-text {
      margin: 0 13px 0 0;
      font-weight: bold;
      font-size: 30px;
      line-height: 1;
      text-transform: uppercase;
      font-family: Rajdhani, sans-serif;
      @media screen and (max-width: 1239px) {
        font-size: 2.42vw;
        margin-right: 1.05vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 24px;
        margin-right: 19px;
      }
    }
  }
  &_checkout {
    width: 100%;
    max-width: 350px;
    margin-top: auto;
    @media screen and (max-width: 1239px) {
      max-width: 28.23vw;
    }
    @media screen and (max-width: 800px) {
      max-width: 233px;
    }
    @media screen and (max-width: 640px) {
      max-width: 210px;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>