<template>
<div class="input" :class="{'focus': inputOnfocus}" >
  <svg viewBox="0 0 280 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_414_8696" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M280 0V28L268 40H87.0866H80.8661H0V12L12 0H80.8661H87.0866H280Z"/>
    </mask>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M280 0V28L268 40H87.0866H80.8661H0V12L12 0H80.8661H87.0866H280Z"
          :fill="color" fill-opacity="0.2"/>
    <path class="input-bg border" :fill="color" d="M280 28H281C281 28.2652 280.895 28.5196 280.707 28.7071L280 28ZM280 0V-1C280.552 -1 281 -0.552285 281 0L280 0ZM268 40L268.707 40.7071C268.52 40.8946 268.265 41 268 41V40ZM0 40V41C-0.552277 41 -1 40.5523 -1 40H0ZM0 12H-1C-1 11.7348 -0.894653 11.4804 -0.707092 11.2929L0 12ZM12 0L11.2929 -0.707107C11.4804 -0.894643 11.7348 -1 12 -1V0ZM279 28V0H281V28H279ZM267.293 39.2929L279.293 27.2929L280.707 28.7071L268.707 40.7071L267.293 39.2929ZM87.0866 39H268V41H87.0866V39ZM80.8661 39H87.0866V41H80.8661V39ZM0 39H80.8661V41H0V39ZM1 12V40H-1V12H1ZM12.7071 0.707107L0.707092 12.7071L-0.707092 11.2929L11.2929 -0.707107L12.7071 0.707107ZM80.8661 1H12V-1H80.8661V1ZM87.0866 1H80.8661V-1H87.0866V1ZM280 1H87.0866V-1H280V1Z"
          mask="url(#path-1-inside-1_414_8696)"/>
  </svg>
  <div class="input_content container">
    <label class="input_label container">
      <img class="input_icon" :src="`${icon}`" :alt="`${placeholder} icon`">
      <input :type="type"
             :placeholder="placeholder"
             v-model="model"
             @focusin="inputOnfocus = true"
             @focusout="inputOnfocus = false">
    </label>
  </div>
</div>
</template>

<script>
export default {
  name: "Input",
  props: ['value', 'color', 'placeholder', 'icon', 'type'],
  data() {
    return {
      model: '',
      inputOnfocus: false
    }
  },
  mounted() {
    this.model = this.value
  },
  watch: {
    model() {
      this.$emit('update:value', this.model);
    }
  }
}
</script>

<style scoped>

</style>