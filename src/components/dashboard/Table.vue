<template>
  <div class="table">
    <div class="table_header">
      <h2 class="table_header-title">{{ title }}</h2>
      <div class="table_header-search" v-if="orders.length > 0 && !$parent.$parent.isMobile">
        <label class="search container">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.84796 9.10842L7.38279 6.63308C8.01662 5.90563 8.36391 4.99035 8.36391 4.0375C8.36391 1.81126 6.48785 0 4.18195 0C1.87606 0 0 1.81126 0 4.0375C0 6.26374 1.87606 8.07499 4.18195 8.07499C5.04762 8.07499 5.87255 7.82291 6.57785 7.34438L9.06175 9.8385C9.16557 9.9426 9.30521 10 9.45485 10C9.59649 10 9.73086 9.94786 9.83287 9.85307C10.0496 9.65172 10.0565 9.31784 9.84796 9.10842ZM4.18195 1.05326C5.88637 1.05326 7.27296 2.39195 7.27296 4.0375C7.27296 5.68304 5.88637 7.02173 4.18195 7.02173C2.47754 7.02173 1.09094 5.68304 1.09094 4.0375C1.09094 2.39195 2.47754 1.05326 4.18195 1.05326Z" fill="#C5D1DC"/>
          </svg>
          <input type="search" name="search" v-model="search" placeholder="Search">
        </label>
      </div>
    </div>
    <div class="table_body" v-if="orders.length > 0">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Option</th>
            <th>Region</th>
            <th>Details</th>
            <th>Reward</th>
            <th>Take Order</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in paginatedData" :key="order.id">
            <td><strong>{{ order.id }}</strong></td>
            <td>
              <div class="order_info container">
                <img :src="`${'/assets/images/two-men.svg'}`" alt="Duo Queue" class="option_icon" v-if="order.options.duoQueue">
                <img :src="`${'/assets/images/streaming.svg'}`" alt="Streaming" class="option_icon" v-if="order.options.streaming">
                <img :src="`${'/assets/images/flash.svg'}`" alt="Priority Complection" class="option_icon" v-if="order.options.priorityComplection">
              </div>
            </td>
            <td>{{ $store.state.SERVERS.list.filter(r => r.id === order.region)[0].title }}</td>
            <td>
              <p class="order_details container">
                <strong>{{ $store.state.RANK_LIST.filter(r => r.id === order.rank.from)[0].title }}</strong>
                <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L8 8L2 14" stroke="#C5D1DC" stroke-width="3"/>
                </svg>
                <strong>{{ $store.state.RANK_LIST.filter(r => r.id === order.rank.to)[0].title }}</strong>
              </p>
            </td>
            <td><strong>${{ order.reward }}</strong></td>
            <td>
              <button class="btn order_button"
                      :class="{'order_button--disabled': order.isTaken}"
                      :disabled="order.isTaken"
                      type="button">
                <strong v-if="order.isTaken">Order is accepted</strong>
                <strong v-else>Take order</strong>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table_body" v-else>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Option</th>
          <th>Region</th>
          <th>Details</th>
          <th>Reward</th>
          <th>Take Order</th>
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
        <span v-if="orders.length > 0">{{ (pageNumber * 10) - 9 }}-</span>
        <span v-if="pageNumber < pageCount">{{ (pageNumber * 10) }}</span>
        <span v-else>{{ orders.length }}</span>
        <span v-if="orders.length > 0">&nbsp;of {{ orders.length }}</span>&nbsp;rows
        <span class="table_pagination-per-page" v-if="orders.length > 0">
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
      <div class="table_pagination-controls container" v-if="orders.length > 0">
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
  props: ['orders', 'title'],
  computed: {
    pageCount() {
      return Math.ceil( this.orders.length / this.perPageNumber )
    },
    paginatedData(){
      const end = this.pageNumber * this.perPageNumber,
        start = end - this.perPageNumber;
      return this.orders.slice(start, end);
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
  background: #FFFFFF;
  box-shadow: 0 1px 15px rgba(69, 65, 78, 0.08);
  margin: 0 auto 30px;
  width: 100%;
  @media screen and (max-width: 1239px) {
    margin-bottom: 2.42vw;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
  &_header {
    padding: 20px 20px 10px;
    text-align: center;
    position: relative;
    @media screen and (max-width: 1239px) {
      padding: 1.62vw 1.62vw .81vw;
    }
    @media screen and (max-width: 800px) {
      padding: 20px;
    }
    &-title {
      font-weight: bold;
      font-size: 24px;
      line-height: 1.292;
      @media screen and (max-width: 1239px) {
        font-size: 1.94vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 18px;
      }
    }
    &-search {
      position: absolute;
      top: 20px;
      right: 30px;
      @media screen and (max-width: 1239px) {
        top: 1.62vw;
        right: 2.42vw;
      }
      .search {
        display: flex;
        align-items: center;
        border: 1px solid #DCE5EE;
        border-radius: 6px;
        max-width: 160px;
        padding: 5px 8px;
        @media screen and (max-width: 1239px) {
          max-width: 12.9vw;
          padding: .4vw .65vw;
        }
        svg {
          width: 10px;
          min-width: 10px;
          height: 10px;
          margin-right: 7px;
          @media screen and (max-width: 1239px) {
            width: .81vw;
            min-width: .81vw;
            height: .81vw;
            margin-right: .56vw;
          }
        }
        input {
          width: 100%;
          outline: none;
          padding: 0;
          margin: 0;
          border: 0;
          border-radius: 0;
          background: transparent;
          font-weight: 600;
          font-size: 12px;
          line-height: 1.333;
          color: #C5D1DC;
          @media screen and (max-width: 1239px) {
            font-size: .97vw;
          }
        }
      }
    }
  }
  &_body {
    border-bottom: 1px solid #DAE4EF;
    overflow-x: auto;
    max-width: 100vw;
    @media screen and (max-width: 800px) {
      max-width: calc(100vw - 36px);
    }
    table {
      width: 100%;
      font-size: 14px;
      line-height: 1.357;
      th, td {
        padding: 12px 20px;
        border-left: 1px solid #DAE4EF;
        text-align: center;
        vertical-align: top;
        white-space: nowrap;
        @media screen and (max-width: 1239px) {
          padding: .97vw 1.62vw;
        }
        @media screen and (max-width: 800px) {
          padding: 10px 12px;
        }
        &:first-child {
          border-left: none;
        }
      }
      thead tr {
        background: #C5D1DC;
        th {
          padding: 16px 20px 15px;
          font-weight: 800;
          @media screen and (max-width: 1239px) {
            padding: 1.29vw 1.62vw 1.21vw;
          }
          @media screen and (max-width: 800px) {
            padding: 12px 12px 11px;
          }
        }
      }
      tbody tr {
        &:nth-child(odd) {
          background: #EEF2F7;
        }
        td {
          strong {
            font-weight: bold;
          }
          .order {
            &_info {
              align-items: center;
              justify-content: center;
              .option_icon {
                width: 20px;
                min-width: 20px;
                height: 20px;
                filter: brightness(.1);
                @media screen and (max-width: 1239px) {
                  width: 1.62vw;
                  min-width: 1.62vw;
                  height: 1.62vw;
                }
                @media screen and (max-width: 800px) {
                  width: 14px;
                  min-width: 14px;
                  height: 14px;
                }
                &:not(:last-of-type) {
                  margin-right: 10px;
                  @media screen and (max-width: 1239px) {
                    margin: .81vw;
                  }
                  @media screen and (max-width: 800px) {
                    margin-right: 6px;
                  }
                }
              }
            }
            &_details {
              align-items: center;
              justify-content: center;
              svg {
                width: 11px;
                min-width: 11px;
                height: 16px;
                margin: 0 30px;
                @media screen and (max-width: 1239px) {
                  width: .89vw;
                  min-width: .89vw;
                  height: 1.29vw;
                  margin: 0 2.42vw;
                }
                @media screen and (max-width: 800px) {
                  width: 6px;
                  min-width: 6px;
                  height: 12px;
                  margin: 0 10px;
                }
              }
            }
            &_button {
              background: #2EFDC5;
              border: 4px solid rgba(25, 41, 58, 0.07);
              border-radius: 6px;
              align-items: center;
              min-width: 170px;
              font-family: Rajdhani, sans-serif;
              font-size: 16px;
              line-height: 1.25;
              padding: 4px;
              @media screen and (max-width: 1239px) {
                padding: .32vw;
                font-size: 1.29vw;
                min-width: 13.71vw;
              }
              @media screen and (max-width: 800px) {
                padding: 0;
                font-size: 14px;
                min-width: 110px;
              }
              &--disabled {
                background: #C5D1DC;
                border-color: rgba(255, 255, 255, 0.34);
                cursor: not-allowed;
                color: #71879A;
              }
            }
          }
        }
      }
    }
    &--empty {
      font-weight: 500;
      padding: 20px;
    }
  }
  &_pagination {
    padding: 30px;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1239px) {
      padding: 2.42vw;
    }
    @media screen and (max-width: 800px) {
      padding: 20px 18px;
    }
    @media screen and (max-width: 640px) {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
    &-info {
      margin-right: 30px;
      align-items: center;
      @media screen and (max-width: 1239px) {
        margin-right: 2.42vw;
      }
      @media screen and (max-width: 800px) {
        margin-right: 10px;
      }
      @media screen and (max-width: 640px) {
        margin: 0 auto;
        justify-content: center;
      }
    }
    &-per-page {
      margin-left: 15px;
      @media screen and (max-width: 1239px) {
        margin-left: 1.21vw;
      }
      @media screen and (max-width: 800px) {
        margin-left: 8px;
      }
      @media screen and (max-width: 640px) {
        display: none;
      }
      .select {
        display: inline-block;
        position: relative;
        margin-right: 15px;
        @media screen and (max-width: 1239px) {
          margin-right: 1.21vw;
        }
        @media screen and (max-width: 800px) {
          margin-right: 8px;
        }
        &_button {
          background: #EEF2F6;
          display: inline-flex;
          align-items: center;
          padding: 6px 11px 5px;
          border-radius: 8px;
          @media screen and (max-width: 1239px) {
            padding: .48vw .89vw .4vw;
          }
          @media screen and (max-width: 800px) {
            padding: 4px 8px 4px;
          }
          &:after {
            content: '';
            display: inline-block;
            border: solid;
            border-width: 0 6px 6px 6px;
            border-color: transparent transparent #C5D1DC transparent;
            margin-left: 8px;
            @media screen and (max-width: 1239px) {
              border-width: 0 .48vw .48vw .48vw;
              margin-left: .65vw;
            }
            @media screen and (max-width: 800px) {
              border-width: 0 4px 4px 4px;
              margin-left: 6px;
            }
          }
          &--active {
            &:after {
              transform: rotate(180deg);
            }
          }
        }
        &_list {
          background: #EEF2F6;
          position: absolute;
          left: 0;
          right: 0;
          top: calc(100% + 4px);
          display: flex;
          flex-direction: column;
          z-index: 1;
        }
        &_option {
          padding: 4px 10px;
          text-align: center;
          width: 100%;
          @media screen and (max-width: 1239px) {
            padding: .32vw .81vw;
          }
          @media screen and (max-width: 800px) {
            padding: 4px 6px;
          }
          &:not(:last-child) {
            border-bottom: 1px solid #DAE4EF;
          }
        }
      }
    }
    &-controls {
      margin-left: auto;
      justify-content: flex-end;
      width: auto;
      @media screen and (max-width: 640px) {
        justify-content: center;
        margin-bottom: 20px;
        margin-right: auto;
      }
      .pagination_btn {
        padding: 8px 16px 6px;
        align-items: center;
        background: #C5D1DC;
        margin-left: 1px;
        color: #FFFFFF;
        @media screen and (max-width: 1239px) {
          padding: .65vw 1.29vw .48vw;
        }
        @media screen and (max-width: 800px) {
          padding: 4px 12px 3px;
        }
        &:hover, &:focus, &--current {
          background: #8FA5BA;
        }
        &--prev, &--next {
          &:disabled {
            background: #EEF2F6;
          }
        }
        &--prev {
          border-radius: 8px 0 0 8px;
        }
        &--next {
          border-radius: 0 8px 8px 0;
        }
      }
    }
  }
}
</style>