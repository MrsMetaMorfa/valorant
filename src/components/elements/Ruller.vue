<template>
  <div class="ruller">
    <div class="ruller_bar">
      <div class="ruller_bar-item" v-for="n in max" :key="n">
        <span :class="{ 'active': n <= number }">{{ n }}</span>
      </div>
    </div>
    <div class="ruller_legend">
      <div class="ruller_legend-divider" :class="{'show': (n % 5) === 0 || n === 1 }" v-for="n in max" :key="n">
        <span>{{ n }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ruller",
  props: ['number', 'max']
}
</script>

<style lang="scss">
.ruller {
  display: block;
  &_bar {
    display: grid;
    grid-auto-flow: column;
    margin-bottom: 10px;
    @media screen and (max-width: 1239px) {
      margin-bottom: .81vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 6px;
    }
    &-item {
      padding: 0 2px;
      @media screen and (max-width: 800px) {
        padding: 0 3px;
      }
      span {
        display: block;
        width: 100%;
        height: 20px;
        font-size: 0;
        line-height: 0;
        background: rgba(255, 70, 84, 0.2);
        @media screen and (max-width: 1239px) {
          height: 1.61vw;
        }
        @media screen and (max-width: 800px) {
          height: 16px;
        }
        &.active {
          background: #2EFDC5;
        }
      }
    }
  }
  &_legend {
    display: grid;
    grid-auto-flow: column;
    &-divider {
      display: block;
      position: relative;
      span {
        position: absolute;
        top: calc(100% + 4px);
        right: 0;
        transform: translateX(50%);
        opacity: 0;
        font-weight: bold;
        font-size: 24px;
        line-height: 1.25;
        font-family: Rajdhani, sans-serif;
        color: #FF4654;
        @media screen and (max-width: 1239px) {
          top: calc(100% + .32vw);
          font-size: 1.94vw;
        }
        @media screen and (max-width: 800px) {
          top: 100%;
          font-size: 18px;
        }
      }
      &:after {
        content: '';
        display: block;
        margin: 0 0 0 auto;
        width: 1px;
        background: #FF4654;
        height: 10px;
        @media screen and (max-width: 1239px) {
          height: .81vw;
        }
        @media screen and (max-width: 800px) {
          height: 5px;
        }
      }
      &.show {
        span {
          opacity: 1;
        }
        &:after {
          height: 20px;
          @media screen and (max-width: 1239px) {
            height: 1.61vw;
          }
          @media screen and (max-width: 800px) {
            height: 10px;
          }
        }
      }
      &:first-child {
        display: flex;
        &:before {
          content: '';
          display: block;
          margin: 0;
          width: 1px;
          background: #FF4654;
          height: 20px;
          @media screen and (max-width: 1239px) {
            height: 1.61vw;
          }
          @media screen and (max-width: 800px) {
            height: 10px;
          }
        }
        &:after {
          height: 10px;
          @media screen and (max-width: 1239px) {
            height: .81vw;
          }
          @media screen and (max-width: 800px) {
            height: 5px;
          }
        }
        span {
          left: 0;
          right: auto;
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>