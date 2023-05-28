<template>
<button class="btn switch" type="button" :class="{'active': check}" @click="$emit('update:check', !check)">
  <input type="checkbox" class="visibility-hidden" :title="title" :checked="check">
  <span class="switch_on">
    <svg class="" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 9V30H60V24L56 20V15V10L60 6V0H9L0 9Z" fill="white" fill-opacity="0.41"/>
    </svg>
    <strong class="switch_text">ON</strong>
  </span>
  <span class="switch_off">
    <svg viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 23V30H10H46H51L60 21V0H46H10H4V7L0 11V19L4 23Z" fill="white" fill-opacity="0.12"/>
    </svg>
    <strong class="switch_text">OFF</strong>
  </span>
</button>
</template>

<script>
export default {
  name: "Check",
  props: ['check', 'title']
}
</script>

<style lang="scss">
.switch {
  display: flex;
  &_on, &_off {
    display: block;
    position: relative;
    min-width: 60px;
    @media screen and (max-width: 1239px) {
      min-width: 4.84vw;
    }
    @media screen and (max-width: 800px) {
      min-width: 40px;
    }
  }
  &_on .switch_text {
      opacity: 0;
    }
  &_text {
    display: block;
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
    color: #FFF;
    font-family: Rajdhani, sans-serif;
    font-size: 20px;
    line-height: 1.3;
    text-transform: uppercase;
    @media screen and (max-width: 1239px) {
      font-size: 1.61vw;
      top: .16vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 13px;
      top: 1px;
    }
  }
  &.active {
      .switch {
        &_on {
          svg path {
            fill: #2EFDC5;
            fill-opacity: .2;
          }
          .switch_text {
            opacity: 1;
          }
        }
        &_off {
          svg path {
            fill: #2EFDC5;
            fill-opacity: 1;
          }
          .switch_text {
            opacity: 0;
          }
        }
      }
    }
}
</style>