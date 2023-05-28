<template>
<aside class="user-order user-order--short">
  <h2 class="user-order_title">YOUR ORDER</h2>
  <h3 class="user-order_subtitle">5 <mark>Placement Games</mark></h3>
  <p class="user-order_description">Approximate complection time: <strong>3 days</strong></p>
  <div class="user-order_options">
    <div class="user-order_option container">
      <img :src="`${'/assets/images/flash.svg'}`" alt="Priority Complection" class="option_icon">
      <p class="option_title">{{ ORDER.priorityComplection.title }} <small>({{ ORDER.priorityComplection.upPrice }})</small></p>
      <div class="option_switch">
        <Check :check.sync="priorityComplectionValue" :title="ORDER.priorityComplection.title" />
      </div>
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
import Title from "./elements/Title";
import Promocode from "./elements/Promocode";
import Currency from "./elements/Currency";

import {mapState, mapMutations} from 'vuex';

export default {
  name: "UserOrder",
  components: { Check, Title, Promocode, Currency },
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
  &--short {
    background-image: url("../assets/images/panel-short.svg");
    @media screen and (max-width: 640px) {
      background-image: url("../assets/images/panel_short_mobile.svg");
      height: 453px;
    }
    .user-order_total {
      margin-bottom: 40px;
      @media screen and (max-width: 1239px) {
        margin-bottom: 3.23vw;
      }
      @media screen and (max-width: 800px) {
        margin-bottom: 16px;
      }
    }
  }
}
</style>