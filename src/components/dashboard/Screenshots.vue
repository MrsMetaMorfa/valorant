<template>
<div class="screenshots block">
  <h3 class="block_title text-center">Screenshots</h3>
  <div class="screenshots_list container">
    <div class="screenshots_item"></div>
  </div>
  <div class="screenshots_buttons container">
    <button class="btn btn-bg-red screenshots_button" type="button"></button>
    <button class="btn screenshots_button" type="button"></button>
  </div>
</div>
</template>

<script>
export default {
  name: "Screenshots"
}
</script>

<style lang="scss">
.screenshots {
  &_list {
    padding: 30px;
    justify-content: center;
  }
  &_item {
    width: 200px;
    min-width: 200px;
    height: 130px;
    background: transparent url("../../assets/images/screenshot.svg") no-repeat center / contain;
  }
  &_buttons {
    padding: 0 30px 30px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1239px) {
      padding: 0 2.42vw 2.42vw;
    }
    @media screen and (max-width: 800px) {
      padding: 0 20px 30px;
    }
  }
  &_button {
    background: #C5D1DC;
    border-radius: 6px;
    width: 200px;
    height: 60px;
    padding: 10px;
    @media screen and (max-width: 1239px) {
      width: 16.13vw;
      height: 4.84vw;
      padding: .81vw;
    }
    @media screen and (max-width: 800px) {
      min-width: 119px;
      height: 38px;
      padding: 8px;
    }
    &:not(:first-of-type) {
      margin-left: 10px;
      @media screen and (max-width: 1239px) {
        margin-left: .81vw;
      }
      @media screen and (max-width: 800px) {
        margin-left: 6px;
      }
    }
    &.btn-bg-red {
      background: #FF4654;
    }
  }
}
</style>