<template>
<div class="review" :class="{
  'review--4': review.stars === 4,
  'review--3': review.stars === 3,
  'review--2': review.stars === 2,
  'review--1': review.stars === 1}">
  <p class="review_text">{{ review.text }}</p>
  <div class="review_info container">
    <div class="review_author">
      <h4 class="review_username">{{ review.author }}</h4>
      <p class="review_best container">
        <span>Best from &nbsp;<strong>{{ rankFrom[0].title }}</strong>&nbsp; to &nbsp;<strong>{{ rankTo[0].title }}</strong></span>
        <span class="review_platform">
          <svg width="47" height="20" viewBox="0 0 47 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.668 0V14L40.7538 20H37.5597H34.4567H0.667038V6L6.58124 0H34.4567H37.5597H46.668Z"/>
          </svg>
          <span>{{ review.platform }}</span>
        </span>
      </p>
    </div>
    <div class="review_stars container" :title="`${review.stars} stars review`">
      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"
           v-for="i in review.stars" :key="i">
        <path d="M9 0L11.7455 5.22108L17.5595 6.21885L13.4424 10.4434L14.2901 16.2812L9 13.671L3.70993 16.2812L4.55762 10.4434L0.440492 6.21885L6.25446 5.22108L9 0Z"/>
      </svg>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Review",
  props: ['review'],
  computed: {
    ...mapState({
      rankList: 'RANK_LIST'
    }),
    rankFrom: function () {
      let r = this.rankList.filter(i => i.id === this.review.bestFrom)
      return r
    },
    rankTo: function () {
      let r = this.rankList.filter(i => i.id === this.review.bestTo)
      return r
    }
  }
}
</script>

<style lang="scss">
.review {
  background: transparent url("../assets/images/panel_review.svg") no-repeat top center / 100% 100%;
  padding: 30px;
  width: 770px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  @media screen and (max-width: 1239px) {
    padding: 2.42vw;
    width: 62.1vw;
    height: 16.13vw;
    grid-gap: .81vw;
  }
  @media screen and (max-width: 800px) {
    width: 600px;
    height: 156px;
    grid-gap: 8px;
    padding: 23px;
  }
  @media screen and (max-width: 640px) {
    background-image: url("../assets/images/panel_review_mobile.svg");
    width: 280px;
    height: 278px;
    padding: 30px 20px;
  }
  &_text {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.333;
    margin-bottom: auto;
    @media screen and (max-width: 1239px) {
      font-size: 1.45vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 14px;
    }
    @media screen and (max-width: 640px) {
      font-size: 13px;
    }
  }
  &_info {
    justify-content: space-between;
    @media screen and (max-width: 640px) {
      flex-wrap: wrap-reverse;
    }
  }
  &_author {
    white-space: nowrap;
    margin-right: auto;
  }
  &_username {
    font-family: Exo, sans-serif;
    font-size: 18px;
    line-height: 1.333;
    margin-bottom: 6px;
    @media screen and (max-width: 1239px) {
      font-size: 1.45vw;
      margin-bottom: .48vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 14px;
      margin-bottom: 4px;
    }
    @media screen and (max-width: 640px) {
      font-size: 14px;
      margin-bottom: 6px;
    }
  }
  &_best {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.357;
    color: #2efdc5;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1239px) {
      font-size: 1.13vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 12px;
    }
    strong {
      color: white;
    }
  }
  &_platform {
    display: block;
    position: relative;
    margin-left: 10px;
    span {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: Rajdhani, sans-serif;
      font-weight: bold;
      font-size: 14px;
      line-height: 1.256;
      color: #19293A;
    }
    svg path {
      fill: #2efdc5;
    }
  }
  &_stars {
    display: flex;
    width: auto;
    margin-left: 10px;
    @media screen and (max-width: 640px) {
      margin-left: 0;
      margin-bottom: 14px;
    }
    svg {
      &:not(:last-child) {
        margin-right: 7px;
        @media screen and (max-width: 640px) {
          margin-right: 6px;
        }
      }
    }
    svg path {
      fill: #2efdc5;
    }
  }
  &.review--4{
    .review_best {
      color: #BDB83D;
    }
    .review_platform, .review_stars {
      svg path {
        fill: #BDB83D;
      }
    }
  }
  &.review--3 {
    .review_best {
      color: #FFB628;
    }
    .review_platform, .review_stars {
      svg path {
        fill: #FFB628;
      }
    }
  }
  &.review--2 {
    .review_best {
      color: #FF783E;
    }
    .review_platform, .review_stars {
      svg path {
        fill: #FF783E;
      }
    }
  }
  &.review--1 {
    .review_best {
      color: #FF4654;
    }
    .review_platform, .review_stars {
      svg path {
        fill: #FF4654;
      }
    }
  }
}
</style>