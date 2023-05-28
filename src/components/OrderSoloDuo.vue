<template>
<div class="order">
  <Title :title="'Order'" />
  <div class="order_wrapper container">
    <div class="order_column">
      <h3 class="order_title">Current rank</h3>
      <div class="order_current">
        <div class="order_select">
          <button class="btn btn-select order_select-button" :class="{'active': isCurrentOpen}"
                  type="button" @click="openCurrentRank">
            <span class="btn-select_input order_select-input">
              <svg width="210" height="40" viewBox="0 0 210 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M204.646 27.3536C204.553 27.2598 204.5 27.1326 204.5 27V20V13C204.5 12.8674 204.553 12.7402 204.646 12.6464L209.5 7.7929V0.5H12.2071L0.5 12.2071V39.5H209.5V32.2071L204.646 27.3536Z"
                      fill="#2EFDC5" fill-opacity="0.2" stroke="#2EFDC5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ currentRank }}</span>
            </span>
            <span class="btn-select_arrow order_select-arrow">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 27V0H5V9L1.52588e-05 14V20V26L5 31V40H47L60 27Z"
                      fill="#2EFDC5"/>
              </svg>
            </span>
          </button>
          <ul class="order_select-list list" v-if="isCurrentOpen">
            <li class="order_select-item list_item" v-for="(item, index) in rankList" :key="index">
              <button class="btn order_select-button list_value" type="button"
                      @click="setCurrentRank(item)">{{ item }}</button>
            </li>
          </ul>
        </div>
        <ul class="order_group container">
          <li class="order_group-item" v-for="(item, index) in groupList" :key="index">
            <button class="btn order_group-button btn-bg-red"
                    :class="{'active': item === currentGroup}"
                    type="button" @click="currentGroup = item">
              <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="index === 0">
                <path d="M0 12V40H90V32L85 27V20V13L90 8V0H12L0 12Z"/>
              </svg>
              <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg" v-else-if="index === (groupList.length - 1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9V0H12H71H90V28L78 40H71H12H5V31L0 26V14L5 9Z"/>
              </svg>
              <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                <path d="M5 0V9L0 14V26L5 31V40H90V32L85 27V13L90 8V0H5Z"/>
              </svg>
              <span>{{ item }}</span>
            </button>
          </li>
        </ul>
        <ul class="order_rr container">
          <li class="order_rr-item" v-for="(item, index) in rrList" :key="index">
            <button class="btn order_rr-button btn-bg-red"
                    :class="{'active': item === currentRR}"
                    type="button" @click="currentRR = item">
              <svg width="90" height="30" viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="index === 0">
                <path d="M0 9V30H90V24L86 20V15V10L90 6V0H9L0 9Z"/>
              </svg>
              <svg width="90" height="30" viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg" v-else-if="index === (rrList.length - 1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7V0H10H75H90V21L81 30H75H10H4V23L0 19V11L4 7Z"/>
              </svg>
              <svg width="90" height="30" viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                <path d="M4 0V7L0 11V19L4 23V30H90V24L86 20V10L90 6V0H4Z"/>
              </svg>
              <span>{{ item }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="order_column">
      <h3 class="order_title">number of wins</h3>
      <Number class="order_number" :number.sync="numberOfWins" :max-value="maxWins" />
    </div>
  </div>
  <Ruller class="order_ruller" :number="numberOfWins" :max="maxWins" />
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
      groupList: [1, 2, 3],
      rrList: ['0-29RR', '30-59RR', '60-99RR'],
      rankList: ['Gold', 'Platinum', 'Diamond', 'Immortal+'],
      isCurrentOpen: false,
      currentRank: 'Gold',
      currentGroup: 2,
      currentRR: '0-29RR',
      numberOfWins: 5,
      maxWins: 10
    }
  },
  methods: {
    openCurrentRank() {
      this.isCurrentOpen = !this.isCurrentOpen
    },
    setCurrentRank(item) {
      this.currentRank = item;
      this.isCurrentOpen = !this.isCurrentOpen
    },
    openDesuredRank() {
      this.isDesuredOpen = !this.isDesuredOpen
    },
    setDesuredRank(item) {
      this.desuredRank = item;
      this.isDesuredOpen = !this.isDesuredOpen
    }
  }
}
</script>

<style lang="scss">

</style>