<template>
<div class="order">
  <Title :title="'Order'" />
  <div class="order_wrapper container">
    <div class="order_column">
      <h3 class="order_title order_title--placement">Precious season rank</h3>
      <div class="order_select">
        <button class="btn btn-select order_select-button" :class="{'active': isRankOpen}"
                type="button" @click="openCurrentRank">
          <span class="btn-select_input order_select-input">
            <svg viewBox="0 0 210 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M204.646 27.3536C204.553 27.2598 204.5 27.1326 204.5 27V20V13C204.5 12.8674 204.553 12.7402 204.646 12.6464L209.5 7.7929V0.5H12.2071L0.5 12.2071V39.5H209.5V32.2071L204.646 27.3536Z"
                    fill="#2EFDC5" fill-opacity="0.2" stroke="#2EFDC5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ rank }}</span>
          </span>
          <span class="btn-select_arrow order_select-arrow">
            <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 27V0H5V9L1.52588e-05 14V20V26L5 31V40H47L60 27Z"
                    fill="#2EFDC5"/>
            </svg>
          </span>
        </button>
        <ul class="order_select-list list" v-if="isRankOpen">
          <li class="order_select-item list_item" v-for="(item, index) in rankList" :key="index">
            <button class="btn order_select-button list_value" type="button"
                    @click="setCurrentRank(item)">{{ item }}</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="order_column">
      <h3 class="order_title order_title--placement">Number of games</h3>
      <Number class="order_number" :number.sync="number" :max-value="maxGames" />
    </div>
  </div>
  <Ruller class="order_ruller" :number="number" :max="maxGames" />
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
      rankList: ['Gold', 'Platinum', 'Diamond', 'Immortal+'],
      isRankOpen: false,
      rank: 'Gold',
      number: 1,
      maxGames: 5
    }
  },
  methods: {
    openCurrentRank() {
      this.isRankOpen = !this.isRankOpen
    },
    setCurrentRank(item) {
      this.rank = item;
      this.isRankOpen = !this.isRankOpen
    },
  }
}
</script>

<style lang="scss">
.order_title--placement {
  font-size: 26px;
  @media screen and (max-width: 1239px) {
    font-size: 2.1vw;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
}
.order_ruller {
  padding-top: 34px;
  @media screen and (max-width: 1239px) {
    padding-top: 2.74vw;
  }
  @media screen and (max-width: 800px) {
    padding-top: 40px;
  }
}
</style>