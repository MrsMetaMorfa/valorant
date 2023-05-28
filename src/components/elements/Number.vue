<template>
  <div class="order_number input_number container">
    <button class="btn input_number-button input_number-button--less"
            type="button" @click="count = count - 1" title="Set less">
      <svg viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="3.75" width="3.5" height="14" transform="rotate(-90 0 3.75)" fill="#471216"/>
      </svg>
    </button>
    <label class="input_number-label">
      <input type="text" v-model="count" />
    </label>
    <button class="btn input_number-button input_number-button--more"
            type="button" @click="count = count + 1" title="Set more">
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5.24951" width="3.5" height="14" fill="#471216"/>
        <rect x="13.9995" y="5.25" width="3.5" height="14" transform="rotate(90 13.9995 5.25)" fill="#471216"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Number",
  props: ['number', 'maxValue'],
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    this.count = this.number
  },
  watch: {
    count(newValue) {
      console.log(newValue, typeof newValue, typeof newValue !== "number", newValue === '');
      if (typeof newValue !== "number") {
        if (newValue === '') {
          this.count = ''
        } else if (typeof +newValue === 'number') {
          this.count = isNaN(newValue) ? '' : +newValue
        } else {
          this.count = ''
        }
      } else if (+newValue < 1) {
        this.count = 1
      } else if (+newValue > this.maxValue) {
        this.count = this.maxValue
      } else {
        this.count = +newValue
      }
      this.$emit('update:number', this.count);
    }
  }
}
</script>

<style lang="scss">

.input_number {
  &-button {
    svg {
      width: 14px;
      @media screen and (max-width: 1239px) {
        width: 1.13vw;
      }
      @media screen and (max-width: 800px) {
        width: 10px;
      }
    }
  }
}

</style>