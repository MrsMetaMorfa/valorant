<template>
  <div class="order_column">
    <h3 class="order_title">{{ title }}</h3>
    <div class="order_label">
      <Iron_01 v-if="rank.id === 'I1'" />
      <Iron_02 v-if="rank.id === 'I2'" />
      <Iron_03 v-if="rank.id === 'I3'" />
      <Bronze_01 v-if="rank.id === 'B1'" />
      <Bronze_02 v-if="rank.id === 'B2'" />
      <Bronze_03 v-if="rank.id === 'B3'" />
      <Silver_01 v-if="rank.id === 'S1'" />
      <Silver_02 v-if="rank.id === 'S2'" />
      <Silver_03 v-if="rank.id === 'S3'" />
      <Gold_01 v-if="rank.id === 'G1'" />
      <Gold_02 v-if="rank.id === 'G2'" />
      <Gold_03 v-if="rank.id === 'G3'" />
      <Platinum_01 v-if="rank.id === 'P1'" />
      <Platinum_02 v-if="rank.id === 'P2'" />
      <Platinum_03 v-if="rank.id === 'P3'" />
      <Diamond_01 v-if="rank.id === 'D1'" />
      <Diamond_02 v-if="rank.id === 'D2'" />
      <Diamond_03 v-if="rank.id === 'D3'" />
      <Immortal_01 v-if="rank.id === 'Im1'" />
      <Immortal_02 v-if="rank.id === 'Im2'" />
      <Immortal_03 v-if="rank.id === 'Im3'" />
      <Radiant v-if="rank.id === 'R'" />
    </div>
    <div class="order_current">
      <div class="order_select">
        <button class="btn btn-select order_select-button" :class="{'active': isOpen}"
                type="button" @click="openRank">
          <span class="btn-select_input order_select-input">
            <svg viewBox="0 0 210 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M204.646 27.3536C204.553 27.2598 204.5 27.1326 204.5 27V20V13C204.5 12.8674 204.553 12.7402 204.646 12.6464L209.5 7.7929V0.5H12.2071L0.5 12.2071V39.5H209.5V32.2071L204.646 27.3536Z"
                    fill="#2EFDC5" fill-opacity="0.2" stroke="#2EFDC5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ rank.title }}</span>
          </span>
          <span class="btn-select_arrow order_select-arrow">
            <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 27V0H5V9L1.52588e-05 14V20V26L5 31V40H47L60 27Z"
                    fill="#2EFDC5"/>
            </svg>
          </span>
        </button>
        <ul class="order_select-list list" v-if="isOpen">
          <li class="order_select-item list_item" v-for="(item, index) in RANK_LIST" :key="index">
            <button class="btn order_select-button list_value" type="button"
                    @click="setRank(item)">{{ item.title }}</button>
          </li>
        </ul>
      </div>
      <ul class="order_group container">
        <li class="order_group-item" v-for="(item, index) in groupList" :key="index">
          <button class="btn order_group-button btn-bg-red"
                  :class="{'active': item === group}"
                  type="button" @click="setGroup(item)">
            <svg viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                 v-if="index === 0">
              <path d="M0 12V40H90V32L85 27V20V13L90 8V0H12L0 12Z"/>
            </svg>
            <svg viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                 v-else-if="index === (groupList.length - 1)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9V0H12H71H90V28L78 40H71H12H5V31L0 26V14L5 9Z"/>
            </svg>
            <svg viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
              <path d="M5 0V9L0 14V26L5 31V40H90V32L85 27V13L90 8V0H5Z"/>
            </svg>
            <span>{{ item }}</span>
          </button>
        </li>
      </ul>
      <ul class="order_rr container">
        <li class="order_rr-item" v-for="(item, index) in rrList" :key="index">
          <button class="btn order_rr-button btn-bg-red"
                  :class="{'active': item === rr}"
                  type="button" @click="setRR(item)">
            <svg viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                 v-if="index === 0">
              <path d="M0 9V30H90V24L86 20V15V10L90 6V0H9L0 9Z"/>
            </svg>
            <svg viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                 v-else-if="index === (rrList.length - 1)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7V0H10H75H90V21L81 30H75H10H4V23L0 19V11L4 7Z"/>
            </svg>
            <svg viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
              <path d="M4 0V7L0 11V19L4 23V30H90V24L86 20V10L90 6V0H4Z"/>
            </svg>
            <span>{{ item }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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

import {mapState} from 'vuex';

export default {
  name: "Order",
  components: {
    Iron_01, Iron_02, Iron_03,
    Bronze_01, Bronze_02, Bronze_03,
    Silver_01, Silver_02, Silver_03,
    Gold_01, Gold_02, Gold_03,
    Platinum_01, Platinum_02, Platinum_03,
    Diamond_01, Diamond_02, Diamond_03,
    Immortal_01, Immortal_02, Immortal_03,
    Radiant
  },
  computed: mapState(['RANK_LIST']),
  props: ['groupList', 'rrList', 'rank', 'group', 'rr', 'title'],
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    openRank() {
      this.isOpen = !this.isOpen
    },
    setRank(item) {
      let rank = {
        id: item.id,
        title: item.title
      }
      console.log(rank)
      this.$emit('update:rank', rank);
      this.isOpen = !this.isOpen
    },
    setGroup(value) {
      this.$emit('update:group', value)
    },
    setRR(value) {
      this.$emit('update:rr', value)
    }
  }
}
</script>

<style lang="scss">
</style>