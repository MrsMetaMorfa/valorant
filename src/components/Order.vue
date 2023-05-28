<template>
<div class="order order--labeled">
  <Title :title="'Order'" />
  <div class="order_wrapper container">
    <OrderColumn :group-list="groupList"
                 :rr-list="rrList"
                 :rank.sync="current.rank"
                 :group.sync="current.group"
                 :rr.sync="current.rr"
                 :title="'Current rank'"
    />
    <OrderColumn :group-list="groupList"
                 :rr-list="rrList"
                 :rank.sync="desured.rank"
                 :group.sync="desured.group"
                 :rr.sync="desured.rr"
                 :title="'Desured rank'"
    />
  </div>
</div>
</template>

<script>
import Title from "./elements/Title";
import OrderColumn from "./OrderColumn";

import {mapState} from 'vuex';

export default {
  name: "Order",
  components: { Title, OrderColumn },
  computed: mapState(['RANK_LIST']),
  data() {
    return {
      groupList: [1, 2, 3],
      rrList: ['0-29RR', '30-59RR', '60-99RR'],
      current: {
        rank: {
          id: 'I3',
          title: 'Iron 3'
        },
        group: 2,
        rr: '0-29RR',
      },
      desured: {
        rank: {
          id: 'G1',
          title: 'Gold 1'
        },
        group: 2,
        rr: '0-29RR',
      }
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
.order {
  &--labeled {
    .order_wrapper {
      position: relative;
      z-index: 10;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        top: 58px;
        right: -23px;
        width: 680px;
        height: 300px;
        background: transparent url("~@/assets/images/rank-bg.svg") no-repeat top right / cover;
        @media screen and (max-width: 1239px) {
          top: 4.68vw;
          right: 0;
          width: calc(100% + 4.88vw);
          height: 24.19vw;
        }
        @media screen and (max-width: 800px) {
          top: 31px;
          right: 0;
          width: 600px;
          height: 264px;
        }
        @media screen and (max-width: 640px) {
          content: none;
        }
      }
    }
  }

  &_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    @media screen and (max-width: 1239px) {
      grid-gap: 2.42vw;
    }
    @media screen and (max-width: 800px) {
      grid-gap: 30px;
    }
    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  &_column {
    text-align: center;
    &:first-of-type {
      .order_label {
        padding-left: 8px;
        @media screen and (max-width: 1239px) {
          padding-left: .86vw;
        }
        @media screen and (max-width: 800px) {
          padding-left: 0;
          padding-right: 7px;
        }
        @media screen and (max-width: 640px) {
          padding-right: 0;
        }
      }
    }
    &:last-of-type {
      @media screen and (max-width: 1239px) {
        padding-right: 1.86vw;
      }
      @media screen and (max-width: 800px) {
        padding-right: 0;
        .order_label {
          padding-left: 5px;
        }
      }
      @media screen and (max-width: 640px) {
        .order_label {
          padding-left: 0;
        }
      }
    }
    @media screen and (max-width: 640px) {
      .order_label {
        padding-left: 10px!important;
      }
    }
  }

  &_title {
    font-weight: bold;
    font-size: 30px;
    line-height: 1.267;
    text-transform: uppercase;
    margin: 0 0 20px;
    @media screen and (max-width: 1239px) {
      font-size: 2.42vw;
      margin-bottom: 1.61vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 20px;
      margin-bottom: 6px;
    }
  }

  &_label {
    height: 300px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 1239px) {
      margin-bottom: 1.61vw;
      height: 24.19vw;
    }
    @media screen and (max-width: 800px) {
      height: 264px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 640px) {
      height: 194px;
    }
    &:before {
      @media screen and (max-width: 640px) {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        top: 0;
        right: 50%;
        width: 440px;
        height: 194px;
        transform: translateX(50%);
        background: transparent url("~@/assets/images/rank-bg.svg") no-repeat top center / cover;
      }
    }
  }
  &_current {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &_select {
    position: relative;
    margin: 0 auto 16px;
    display: inline-flex;
    @media screen and (max-width: 1239px) {
      margin-bottom: 1.29vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 10px;
    }

    &-arrow {
      &:after {
        border-top-color: #19293A;
      }
    }

    &-list {
      width: 220px;
      max-height: 320px;
      overflow: auto;
      @media screen and (max-width: 1239px) {
        width: 17.74vw;
        max-height: 25.8vw;
      }
      @media screen and (max-width: 800px) {
        width: 158px;
        max-height: 200px;
      }
    }

    &-button {
      &.active {
        .order_select-input {
          svg path {
            fill: #FF4654;
            fill-opacity: .2;
            stroke: #FF4654;
          }
        }
      }
    }
  }

  &_group {
    margin: 0 auto 10px;
    width: auto;
    @media screen and (max-width: 1239px) {
      margin-bottom: .81vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 6px;
    }
    &-button {
      width: 90px;
      min-width: 90px;
      height: 40px;
      display: block;
      @media screen and (max-width: 1239px) {
        width: 7.26vw;
        min-width: 7.26vw;
        height: 3.23vw;
      }
      @media screen and (max-width: 800px) {
        width: 68px;
        min-width: 68px;
        height: 30px;
      }
      svg {
        width: 100%;
        height: 100%;
      }
      span {
        font-size: 24px;
        line-height: 1.292;
        @media screen and (max-width: 1239px) {
          font-size: 1.94vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 18px;
        }
      }
    }
  }

  &_rr {
    width: auto;
    margin: 0 auto;
    &-button {
      width: 90px;
      min-width: 90px;
      height: 30px;
      display: block;
      @media screen and (max-width: 1239px) {
        width: 7.26vw;
        min-width: 7.26vw;
        height: 2.42vw;
      }
      @media screen and (max-width: 800px) {
        width: 68px;
        min-width: 68px;
        height: 23px;
      }
      svg {
        width: 100%;
        height: 100%;
      }
      span {
        font-size: 16px;
        line-height: 1.25;
        white-space: nowrap;
        @media screen and (max-width: 1239px) {
          font-size: 1.29vw;
        }
        @media screen and (max-width: 800px) {
          font-size: 13px;
          top: 50%;
        }
      }
    }
  }
}

.label {
  overflow: visible;
  height: 224px;
  @media screen and (max-width: 1239px) {
    height: 18.06vw;
  }
  @media screen and (max-width: 800px) {
    height: 198px;
  }
  @media screen and (max-width: 640px) {
    height: 144px;
  }
  svg {
    overflow: visible;
  }
  g {
    transform: translateY(-150%);
    opacity: 0;
  }
  .label-0, #label-0 {
    animation: label 12s ease-in-out 0s infinite;
  }
  .label-1, #label-1 {
    animation: label 12s ease-in-out .2s infinite;
  }
  .label-2, #label-2 {
    animation: label 12s ease-in-out .4s infinite;
  }
  .label-3, #label-3 {
    animation: label 12s ease-in-out .6s infinite;
  }
  .label-4, #label-4 {
    animation: label 12s ease-in-out .8s infinite;
  }
  .label-5, #label-5 {
    animation: label 12s ease-in-out 1s infinite;
  }
  .label-6, #label-6 {
    animation: label 12s ease-in-out 1.2s infinite;
  }
  .label-7, #label-7 {
    animation: label 12s ease-in-out 1.4s infinite;
  }
  .label-8, #label-8 {
    animation: label 12s ease-in-out 1.6s infinite;
  }
  .label-9, #label-9 {
    animation: label 12s ease-in-out 1.8s infinite;
  }
  .label-10, #label-10 {
    animation: label 12s ease-in-out 2s infinite;
  }
  .label-11, #label-11 {
    animation: label 12s ease-in-out 2.2s infinite;
  }
  .label-12, #label-12 {
    animation: label 12s ease-in-out 2.4s infinite;
  }
  .d {
    animation: blink 12s ease-in-out infinite;
    &-0 {
      animation-delay: 0s;
    }
    &-1 {
      animation-delay: .2s;
    }
    &-2 {
      animation-delay: .4s;
    }
    &-3 {
      animation-delay: .6s;
    }
    &-4 {
      animation-delay: .8s;
    }
    &-5 {
      animation-delay: 1s;
    }
    &-6 {
      animation-delay: 1.2s;
    }
    &-7 {
      animation-delay: 1.4s;
    }
    &-8 {
      animation-delay: 1.6s;
    }
    &-9 {
      animation-delay: 1.8s;
    }
    &-10 {
      animation-delay: 2s;
    }
    &-11 {
      animation-delay: 2.2s;
    }
    &-12 {
      animation-delay: 2.4s;
    }
    &-13 {
      animation-delay: 2.6s;
    }
    &-14 {
      animation-delay: 2.8s;
    }
    &-15 {
      animation-delay: 3s;
    }
    &-16 {
      animation-delay: 3.2s;
    }
    &-17 {
      animation-delay: 3.4s;
    }
    &-18 {
      animation-delay: 3.6s;
    }
    &-19 {
      animation-delay: 3.8s;
    }
  }
}

@keyframes label {
  from {
    transform: translateY(-150%);
    opacity: 0;
  }
  2% {
    transform: translateY(-150%);
    opacity: .25;
  }
  8% {
    transform: translateY(2%);
    opacity: .75;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  70% {
    transform: translateY(0);
    opacity: 1;
  }
  72% {
    transform: translateY(-2%);
    opacity: 1;
  }
  78% {
    transform: translateY(100%);
    opacity: .25;
  }
  80% {
    transform: translateY(150%);
    opacity: 0;
  }
  to {
    transform: translateY(150%);
    opacity: 0;
  }
}

@keyframes blink {
  0%, 41%, 49%, 100% {
    filter: brightness(1);
  }
  45% {
    filter: brightness(1.75);
  }
}
</style>