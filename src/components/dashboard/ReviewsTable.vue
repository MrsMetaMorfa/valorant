<template>
  <div class="table">
    <div class="table_header">
      <h2 class="table_header-title">{{ title }}</h2>
      <div class="table_header-search" v-if="reviews.length > 0 && !$parent.$parent.isMobile">
        <label class="search container">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.84796 9.10842L7.38279 6.63308C8.01662 5.90563 8.36391 4.99035 8.36391 4.0375C8.36391 1.81126 6.48785 0 4.18195 0C1.87606 0 0 1.81126 0 4.0375C0 6.26374 1.87606 8.07499 4.18195 8.07499C5.04762 8.07499 5.87255 7.82291 6.57785 7.34438L9.06175 9.8385C9.16557 9.9426 9.30521 10 9.45485 10C9.59649 10 9.73086 9.94786 9.83287 9.85307C10.0496 9.65172 10.0565 9.31784 9.84796 9.10842ZM4.18195 1.05326C5.88637 1.05326 7.27296 2.39195 7.27296 4.0375C7.27296 5.68304 5.88637 7.02173 4.18195 7.02173C2.47754 7.02173 1.09094 5.68304 1.09094 4.0375C1.09094 2.39195 2.47754 1.05326 4.18195 1.05326Z" fill="#C5D1DC"/>
          </svg>
          <input type="search" name="search" v-model="search" placeholder="Search">
        </label>
      </div>
    </div>
    <div class="table_body" v-if="reviews.length > 0">
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Stars</th>
            <th class="review_message">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="review in paginatedData" :key="review.id">
            <td><strong>{{ review.id }}</strong></td>
            <td>
              <div class="review_stars container">
                <svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-show="review.stars >= 1">
                  <path d="M11 0L14.4785 6.21224L21.4616 7.60081L16.6284 12.8288L17.4656 19.8992L11 16.918L4.53436 19.8992L5.37165 12.8288L0.538379 7.60081L7.52149 6.21224L11 0Z" fill="#FF9900"/>
                </svg>
                <svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-show="review.stars >= 2">
                  <path d="M11 0L14.4785 6.21224L21.4616 7.60081L16.6284 12.8288L17.4656 19.8992L11 16.918L4.53436 19.8992L5.37165 12.8288L0.538379 7.60081L7.52149 6.21224L11 0Z" fill="#FF9900"/>
                </svg>
                <svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-show="review.stars >= 3">
                  <path d="M11 0L14.4785 6.21224L21.4616 7.60081L16.6284 12.8288L17.4656 19.8992L11 16.918L4.53436 19.8992L5.37165 12.8288L0.538379 7.60081L7.52149 6.21224L11 0Z" fill="#FF9900"/>
                </svg>
                <svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-show="review.stars >= 4">
                  <path d="M11 0L14.4785 6.21224L21.4616 7.60081L16.6284 12.8288L17.4656 19.8992L11 16.918L4.53436 19.8992L5.37165 12.8288L0.538379 7.60081L7.52149 6.21224L11 0Z" fill="#FF9900"/>
                </svg>
                <svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-show="review.stars >= 5">
                  <path d="M11 0L14.4785 6.21224L21.4616 7.60081L16.6284 12.8288L17.4656 19.8992L11 16.918L4.53436 19.8992L5.37165 12.8288L0.538379 7.60081L7.52149 6.21224L11 0Z" fill="#FF9900"/>
                </svg>
              </div>
            </td>
            <td><p class="review_message">{{ review.message }}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table_body" v-else>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Stars</th>
            <th class="review_message">Message</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td colspan="6">
            <p class="table_body--empty text-center">No matching records found.</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="table_pagination container">
      <p class="table_pagination-info container">Showing&nbsp;
        <span v-if="reviews.length > 0">{{ (pageNumber * 10) - 9 }}-</span>
        <span v-if="pageNumber < pageCount">{{ (pageNumber * 10) }}</span>
        <span v-else>{{ reviews.length }}</span>
        <span v-if="reviews.length > 0">&nbsp;of {{ reviews.length }}</span>&nbsp;rows
        <span class="table_pagination-per-page" v-if="reviews.length > 0">
          <span class="select">
            <button class="btn select_button"
                    :class="{'select_button--active': isSelectListOpen}"
                    type="button"
                    @click="isSelectListOpen = !isSelectListOpen">{{ perPageNumber }}</button>
            <span class="select_list" v-if="isSelectListOpen">
              <button class="btn select_option" type="button" @click="setPerPage(10)">10</button>
              <button class="btn select_option" type="button" @click="setPerPage(20)">20</button>
              <button class="btn select_option" type="button" @click="setPerPage(30)">30</button>
              <button class="btn select_option" type="button" @click="setPerPage(40)">40</button>
              <button class="btn select_option" type="button" @click="setPerPage(50)">50</button>
            </span>
          </span>
          records per page
        </span>
      </p>
      <div class="table_pagination-controls container" v-if="reviews.length > 0">
        <button class="btn pagination_btn pagination_btn--prev"
                type="button" :disabled="pageNumber === 1"
                @click="prevPage">Previous</button>
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
</template>

<script>
export default {
  name: "Table",
  props: ['reviews', 'title'],
  computed: {
    pageCount() {
      return Math.ceil( this.reviews.length / this.perPageNumber )
    },
    paginatedData(){
      const end = this.pageNumber * this.perPageNumber,
        start = end - this.perPageNumber;
      return this.reviews.slice(start, end);
    }
  },
  data() {
    return {
      pageNumber: 1,
      perPageNumber: 10,
      isSelectListOpen: false,
      search: ''
    }
  },
  methods: {
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
    },
    setPerPage(value) {
      this.perPageNumber = value;
      this.isSelectListOpen = false;
    }
  }
}
</script>

<style lang="scss">
.table {
  &_body {
    .review {
      &_stars {
        display: flex;
        align-items: center;
        margin: auto;
        width: 130px;
        @media screen and (max-width: 1239px) {
          width: 10.48vw;
        }
        @media screen and (max-width: 800px) {
          width: 78px;
        }
        svg {
          width: 22px;
          min-width: 22px;
          height: 22px;
          @media screen and (max-width: 1239px) {
            width: 1.77vw;
            min-width: 1.77vw;
            height: 1.77vw;
          }
          @media screen and (max-width: 800px) {
            width: 14px;
            min-width: 14px;
            height: 14px;
          }
          path {
            fill: #FF9900;
          }
          &:not(:last-child) {
            margin-right: 5px;
            @media screen and (max-width: 1239px) {
              margin-right: .4vw;
            }
            @media screen and (max-width: 800px) {
              margin-right: 2px;
            }
          }
        }
      }
      &_message {
        text-align: left;
      }
    }
  }
}
</style>