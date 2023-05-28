<template>
<div class="coach" :class="{'current': currentId === info.id}" @click="$emit('update:currentId', info.id)">
  <div class="coach_bg">
    <svg width="276" height="274" viewBox="0 0 276 274" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M262 272.5H14C7.09644 272.5 1.5 266.904 1.5 260V14C1.5 7.09644 7.09644 1.5 14 1.5H220.947C225.41 1.5 229.705 3.20528 232.952 6.26701L269.005 40.2586C272.512 43.5651 274.5 48.1717 274.5 52.9916V260C274.5 266.904 268.904 272.5 262 272.5Z" fill="#121E2B" fill-opacity="0.3" stroke-width="3"/>
    </svg>
  </div>
  <div class="coach_wrapper">
    <div class="coach_header container">
      <div class="coach_icon">
        <img  :src="`${'/assets/images/couch-label.svg'}`" alt="Coach label icon">
      </div>
      <div class="coach_title">
        <h4 class="coach_name">{{ info.name }}</h4>
        <p class="coach_label">{{ info.label }}</p>
      </div>
    </div>
    <p class="coach_description">{{ info.description }}</p>
    <div class="coach_footer container">
      <p class="coach_price">{{ info.price }}</p>
      <p class="coach_language">{{ info.language }}</p>
      <div class="coach_server">{{ info.server.title }}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Coach",
  props: ['info', 'currentId']
}
</script>

<style lang="scss">
.coach {
  position: relative;
  display: flex;
  &_bg {
    margin: 0 auto;
    min-width: 276px;
    width: 276px;
    @media screen and (max-width: 1239px) {
      width: 22.26vw;
      min-width: 22.26vw;
    }
    @media screen and (max-width: 800px) {
      width: 276px;
      min-width: 276px;
    }
    svg path {
      stroke: #FF4654;
    }
  }
  &_wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    padding: 24px 15px;
    width: 276px;
    transform: translateX(-50%);
    @media screen and (max-width: 1239px) {
      padding: 1.94vw 1.21vw;
      width: 22.26vw;
    }
    @media screen and (max-width: 800px) {
      padding: 27px 18px;
      width: 276px;
    }
  }
  &_header {
    align-items: center;
    margin-bottom: 18px;
    @media screen and (max-width: 1239px) {
      margin-bottom: 1.45vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 18px;
    }
  }
  &_icon {
    margin: 0 12px 0 0;
    @media screen and (max-width: 1239px) {
      margin-right: .97vw;
    }
    @media screen and (max-width: 800px) {
      margin-right: 12px;
    }
  }
  &_name {
    font-family: Exo, sans-serif;
    font-size: 18px;
    line-height: 1.333;
    margin-bottom: 4px;
    @media screen and (max-width: 1239px) {
      font-size: 1.45vw;
      margin-bottom: .32vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 18px;
      margin-bottom: 4px;
    }
  }
  &_label {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.357;
    padding-left: 1px;
    color: #2EFDC5;
    @media screen and (max-width: 1239px) {
      font-size: 1.13vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 14px;
    }
  }
  &_description {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.357;
    margin-bottom: 16px;
    @media screen and (max-width: 1239px) {
      font-size: 1.13vw;
      margin-bottom: 1.29vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 14px;
      margin-bottom: 16px;
    }
  }
  &_footer {
    align-items: center;
  }
  &_price {
    margin: 0 auto 0 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.333;
    @media screen and (max-width: 1239px) {
      font-size: 1.94vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 24px;
    }
  }
  &_language {
    margin-left: 8px;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.333;
    color: #FF4654;
    @media screen and (max-width: 1239px) {
      font-size:.97vw;
      margin-left: .65vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 12px;
      margin-left: 8px;
    }
  }
  &_server {
    margin-left: 8px;
    background: transparent url("~@/assets/images/server-label.svg") no-repeat center / 100%;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.429;
    color: #19293A;
    text-align: center;
    font-family: Rajdhani, sans-serif;
    width: 46px;
    min-width: 46px;
    @media screen and (max-width: 1239px) {
      margin-left: .65vw;
      font-size: 1.13vw;
      width: 3.71vw;
      min-width: 3.71vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 14px;
      margin-left: 8px;
      width: 46px;
      min-width: 46px;
    }
  }

  &.current {
    .coach_bg svg path {
      stroke: #2EFDC5;
    }
  }
}
</style>