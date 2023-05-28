<template>
<div class="currency">
  <button class="currency_button btn btn-select" :class="{'active': isListOpen}" type="button" @click="isListOpen = !isListOpen">
    <span class="currency_input btn-select_input">{{ current.title }}</span>
    <span class="currency_arrow btn-select_arrow"></span>
  </button>
  <ul class="currency_list list" v-if="isListOpen">
    <li class="currency_list-item list_item" v-for="(item, index) in list" :key="index">
      <button class="currency_list-value btn list_value" type="button" @click="UpdateValue(item)">{{ item.title }}</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Currency",
  props: ['current', 'list'],
  data() {
    return {
      isListOpen: false
    }
  },
  methods: {
    UpdateValue(item) {
      this.$emit('update:current', item);
      this.isListOpen = false
    }
  }
}
</script>

<style lang="scss">
.currency {
  position: relative;
  &_input {
    width: 100px;
    min-width: 100px;
    height: 30px;
    background: transparent url("../../assets/images/100x30-noframe.svg") no-repeat top left / 100%;
    font-size: 20px;
    line-height: 1.3;
    color: #FFF;
    padding: 2px 20px;
    @media screen and (max-width: 1239px) {
      font-size: 1.61vw;
      padding: .16vw 1.61vw;
      width: 8.06vw;
      min-width: 8.06vw;
      height: 2.42vw;
    }
    @media screen and (max-width: 800px) {
      height: 25px;
      width: 83px;
      min-width: 83px;
      font-size: 16px;
      padding: 2px 5px;
    }
  }
  &_arrow {
    width: 50px;
    min-width: 50px;
    height: 30px;
    background: transparent url("../../assets/images/50x30.svg") no-repeat top center / 100%;
    @media screen and (max-width: 1239px) {
      width: 4.03vw;
      min-width: 4.03vw;
      height: 2.42vw;
    }
    @media screen and (max-width: 800px) {
      height: 25px;
      width: 42px;
      min-width: 42px;
    }
    &:after {
      border-top-color: #5E191E;
    }
  }
  &_list {
    width: 100px;
    @media screen and (max-width: 1239px) {
      width: 8.06vw;
    }
    @media screen and (max-width: 800px) {
      width: 83px;
    }
  }
}
</style>