<template>
<section class="reviews main_inner">
  <h1 class="page_title">What our clients say about us</h1>
  <p class="page_subtitle text-center">We've compiled all our reviews on this page for you to browse. All reviews are written by customers and updated in real time. If you happen to make a purchase with us and write a review when you're done, you'll see it appear here along with all the others!</p>
  <div class="reviews_content container">
    <aside class="reviews_statistic container container--column-reverse">
      <p class="reviews_sorting text-center">Click to filter by stars</p>
      <button class="btn statistic_line"
              type="button" @click="FilterReviews(index)"
              v-for="index in 5" :key="index"
             :class="{'statistic_line--4': index === 4,
                      'statistic_line--3': index === 3,
                      'statistic_line--2': index === 2,
                      'statistic_line--1': index === 1}">
        <span class="statistic_bar" :class="{'active': isFilteredReviews && (listFilterByStars === index)}">
          <span class="statistic_bar--filled" :style="`width: ${statisticPercent[index - 1]}%`"></span>
        </span>
        <span class="statistic_info container">
          <span class="statistic_stars container" :title="`${index} stars reviews`">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                  v-for="i in index" :key="i">
              <path d="M9 0L11.7455 5.22108L17.5595 6.21885L13.4424 10.4434L14.2901 16.2812L9 13.671L3.70993 16.2812L4.55762 10.4434L0.440492 6.21885L6.25446 5.22108L9 0Z"/>
            </svg>
          </span>
          <span class="statistic_percent">{{ statisticPercent[index - 1] }}%</span>
        </span>
      </button>
    </aside>
    <div class="reviews_table">
      <p class="reviews_show text-center">Showing
        <span>{{ (pageNumber * 10) - 9 }}-</span>
        <span v-if="pageNumber < pageCount">{{ (pageNumber * 10) }}</span>
        <span v-else>{{ reviewList.length }}</span>
        of <span>{{ reviewList.length }}</span> reviews</p>

      <div class="reviews_list container container--column" v-if="reviewList.length > 0">
        <Review v-for="item in paginatedData" :key="item.id" :review="item" />
      </div>
      <p class="orders_none text-center" v-else><mark>You do not have any reviews.</mark></p>

      <div class="reviews_pagination">
        <button class="btn pagination_btn pagination_btn--prev"
                type="button" :disabled="pageNumber === 1"
                @click="prevPage">Prev</button>
        <button class="btn pagination_btn" type="button" v-if="pageNumber > 2" @click="goToPage('-2')">{{ pageNumber - 2 }}</button>
        <button class="btn pagination_btn" type="button" v-if="pageNumber > 1" @click="prevPage">{{ pageNumber - 1 }}</button>
        <span class="btn pagination_btn pagination_btn--current">{{ pageNumber }}</span>
        <button class="btn pagination_btn" type="button" v-if="(pageCount - pageNumber) >= 1" @click="nextPage">{{ pageNumber + 1 }}</button>
        <button class="btn pagination_btn" type="button" v-if="(pageCount - pageNumber) >= 2" @click="goToPage('+2')">{{ pageNumber + 2 }}</button>
        <button class="btn pagination_btn pagination_btn--next"
                type="button" :disabled="pageNumber === pageCount"
                @click="nextPage">Next</button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Review from "../../components/Review";
import {mapGetters} from "vuex";

export default {
  name: "Reviews",
  components: { Review },
  computed: {
    ...mapGetters(['reviewListStatistic', 'unfilteredReviewList']),
    statisticPercent: function () {
      let p = [];
      p.push(Math.round((this.reviewListStatistic.count1 / this.unfilteredReviewList.length)*100));
      p.push(Math.round((this.reviewListStatistic.count2 / this.unfilteredReviewList.length)*100));
      p.push(Math.round((this.reviewListStatistic.count3 / this.unfilteredReviewList.length)*100));
      p.push(Math.round((this.reviewListStatistic.count4 / this.unfilteredReviewList.length)*100));
      p.push(Math.round((this.reviewListStatistic.count5 / this.unfilteredReviewList.length)*100));
      return p
    },
    pageCount() {
      return Math.ceil( this.reviewList.length / 10 )
    },
    paginatedData(){
      const end = this.pageNumber * 10,
        start = end - 10;
      return this.reviewList.slice(start, end);
    }
  },
  data() {
    return {
      reviewList: [],
      pageNumber: 1,
      isFilteredReviews: false,
      listFilterByStars: 0
    }
  },
  mounted() {
    this.reviewList = this.unfilteredReviewList
  },
  methods: {
    FilterReviews(value) {
      console.log('start filtering..');
      if (this.listFilterByStars === 0 || (this.isFilteredReviews && this.listFilterByStars !== value)) {
        let filtering = this.unfilteredReviewList.filter((i) => i.stars === value)
        console.log(filtering)
        this.reviewList = filtering
        this.isFilteredReviews = true
        this.listFilterByStars = value
      } else {
        this.reviewList = this.unfilteredReviewList
        this.isFilteredReviews = false
        this.listFilterByStars = 0
      }
    },
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    },
    goToPage(value) {
      value === '-2'
        ? this.pageNumber = this.pageNumber - 2
        : this.pageNumber = this.pageNumber + 2
    }
  }
}
</script>

<style lang="scss">
.reviews {
  .page_subtitle {
    width: 590px;
    margin: 0 auto 40px;
    @media screen and (max-width: 1239px) {
      width: 47.58vw;
      margin-bottom: 3.23vw;
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      margin-bottom: 26px;
    }
  }
  &_content {
    display: grid;
    grid-template-columns: 280px 770px;
    grid-gap: 120px;
    max-width: 1170px;
    margin: 0 auto;
    @media screen and (max-width: 1239px) {
      grid-gap: 4.84vw;
      grid-template-columns: 22.58vw 62.1vw;
      max-width: 89.52vw;
    }
    @media screen and (max-width: 800px) {
      grid-gap: 0;
      grid-template-columns: 1fr;
      max-width: 100%;
    }
  }
  &_statistic {
    max-width: 280px;
    margin-bottom: auto;
    @media screen and (max-width: 1239px) {
      max-width: 22.58vw;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
    .statistic {
      &_bar {
        display: block;
        background: rgba(255, 70, 84, 0.2);
        margin-bottom: 10px;
        height: 20px;
        width: 100%;
        @media screen and (max-width: 1239px) {
          height: 1.61vw;
          margin-bottom: .81vw;
        }
        &--filled {
          display: block;
          height: 100%;
          background: #2EFDC5;
          width: 0;
        }
        &.active {
          border: 2px solid #2efdc5;
        }
      }
      &_stars {
        svg:not(:last-child) {
          margin-right: 6px;
          @media screen and (max-width: 1239px) {
            margin-right: .48vw;
          }
        }
        svg path {
          fill: #2EFDC5;
        }
      }
      &_percent {
        color: #2EFDC5;
        font-family: Rajdhani, sans-serif;
        font-weight: bold;
        font-size: 20px;
        line-height: 1.3;
        @media screen and (max-width: 1239px) {
          font-size: 1.61vw;
        }
      }
      &_line {
        margin-bottom: 20px;
        @media screen and (max-width: 800px) {
          margin-bottom: 1.62vw;
        }
        &:not(:last-of-type) {
          padding-top: 10px;
          @media screen and (max-width: 1239px) {
            padding-top: .81vw;
          }
        }
        &--4 {
          .statistic {
            &_bar {
              &.active {
                border-color: #BDB83D;
              }
              &--filled {
                background: #BDB83D;
              }
            }
            &_stars {
              svg path {
                fill: #BDB83D;
              }
            }
            &_percent {
              color: #BDB83D;
            }
          }
        }
        &--3 {
          .statistic {
            &_bar {
              &.active {
                border-color: #FFB628;
              }
              &--filled {
                background: #FFB628;
              }
            }
            &_stars {
              svg path {
                fill: #FFB628;
              }
            }
            &_percent {
              color: #FFB628;
            }
          }
        }
        &--2 {
          .statistic {
            &_bar {
              &.active {
                border-color: #FF783E;
              }
              &--filled {
                background: #FF783E;
              }
            }
            &_stars {
              svg path {
                fill: #FF783E;
              }
            }
            &_percent {
              color: #FF783E;
            }
          }
        }
        &--1 {
          .statistic {
            &_bar {
              &.active {
                border-color: #FF4654;
              }
              &--filled {
                background: #FF4654;
              }
            }
            &_stars {
              svg path {
                fill: #FF4654;
              }
            }
            &_percent {
              color: #FF4654;
            }
          }
        }
      }
    }
  }
  &_sorting {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.357;
    color: #FF4654;
    @media screen and (max-width: 1239px) {
      font-size: 1.13vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 10px;
    }
  }
  &_show {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.333;
    color: #FF4654;
    margin-bottom: 20px;
    @media screen and (max-width: 1239px) {
      font-size: 1.45vw;
      margin-bottom: 1.61vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 14px;
      margin-bottom: 20px;
    }
    span {
      color: white;
    }
  }
  &_list {
    margin-bottom: 40px;
    @media screen and (max-width: 1239px) {
      margin-bottom: 3.23vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 26px;
    }
    .review {
      margin-bottom: 20px;
      @media screen and (max-width: 1239px) {
        margin-bottom: 1.61vw;
      }
      @media screen and (max-width: 800px) {
        margin-bottom: 13px;
      }
      @media screen and (max-width: 640px) {
        margin: 0 auto 13px;
      }
    }
  }
  &_pagination {
    display: flex;
    justify-content: center;
    .pagination_btn {
      display: block;
      padding: 6px 16px;
      background: rgba(255, 70, 84, 0.2);
      min-width: 40px;
      text-align: center;
      font-family: Rajdhani, sans-serif;
      font-weight: bold;
      font-size: 14px;
      line-height: 1.286;
      color: #FF4654;
      margin-left: 1px;
      @media screen and (max-width: 1239px) {
        min-width: 3.23vw;
        font-size: 1.13vw;
        padding: .48vw 1.29vw;
      }
      @media screen and (max-width: 800px) {
        padding: 4px 11px;
        min-width: 26px;
        font-size: 10px;
      }
      &:hover, &:focus, &--current {
        background: #ff4654;
        color: #471216;
      }
      &:disabled {
        opacity: .75;
        cursor: default;
        &:hover, &:focus {
          background: rgba(255, 70, 84, 0.2);
          color: #ff4654;
        }
      }
      &--prev {
        border-radius: 4px 0 0 4px;
        text-align: left;
      }
      &--next {
        border-radius: 0 4px 4px 0;
        text-align: right;
      }
      &--prev, &--next {
        @media screen and (max-width: 1239px) {
          width: 7.26vw;
        }
        @media screen and (max-width: 800px) {
          width: 60px;
        }
      }
    }
  }
}
</style>