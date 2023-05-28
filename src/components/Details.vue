<template>
  <div class="details block">
    <div class="details_header" v-if="type !== 'coaching'">
      <button class="btn details_tab"
              type="button"
              v-for="(tab,index) in detailsTabs"
              :key="index"
              :class="{'current': tab.active}"
              @click="SetActive(tab)">
        {{ tab.title }}
      </button>
    </div>
    <div class="details_header" v-else>
      <button class="btn details_tab"
              type="button"
              v-for="(tab,index) in detailsTabs.slice(1, end)"
              :key="index"
              :class="{'current': tab.active}"
              @click="SetActive(tab)">
        {{ tab.title }}
      </button>
    </div>
    <div class="details_body">
      <div class="details_tab-content" v-if="detailsTabs[0].active && type !== 'coaching'">
        <p class="details_hint text-center">It is not possible to edit your account details after we have started working on your order.</p>
        <Title :title="'Region'" />
        <Currency :current.sync="detailsTabs[0].region"
                  :list="detailsTabs[0].regionList" />
        <Title :title="'Account'" />
        <div class="details_form">
          <Input :color="'#FF4654'"
                 :type="'text'"
                 :icon="'/assets/images/id-card.svg'"
                 :placeholder="'UserName'"
                 :value.sync="detailsTabs[0].currentUserName" />
          <InputPassword :color="'#FF4654'"
                         :placeholder="'UserName'"
                         :value.sync="detailsTabs[0].currentPassword" />
          <p class="details_hint text-center">
            <mark>Important: Change your password after your order is complete.</mark>
          </p>
        </div>
      </div>
      <div class="details_tab-content" v-if="detailsTabs[1].active">
        <p class="details_hint text-center">Please select at least 3 agents. If you won't select any then our booster will choose agents to play by himself.</p>
        <Title :title="'Selected'" />
        <div class="details_selectables container" v-if="detailsTabs[1].selected.length > 0">
          <button class="btn details_selectables-item selected" type="button"
                  v-for="(agent, index) in detailsTabs[1].selected"
                  :key="index"
                  @click="detailsTabs[1].selected.splice(index, 1)">
            {{ agent }}
          </button>
        </div>
        <p class="details_any" v-else><mark>Any agent</mark></p>
        <Title :title="'Available'" />
        <Input class="input_search"
               :color="'#FF4654'"
               :type="'search'"
               :placeholder="'Search'"
               :icon="'/assets/images/search.svg'"
               :value="detailsTabs[1].search"
        />
        <div class="details_selectables container">
          <button class="btn details_selectables-item" type="button"
                  v-for="(agent, index) in detailsTabs[1].list"
                  :key="index"
                  @click="detailsTabs[1].selected.push(agent)">
            {{ agent }}
          </button>
        </div>
      </div>
      <div class="details_tab-content" v-if="detailsTabs[2].active">
        <p class="details_hint text-center">You can leave any additional requests here.</p>
        <div class="details_note"
             contenteditable="true"
             ref="notes"
             @click="SetFocus"
             @input="UpdateMessage">
          {{ detailsTabs[2].notes }}
        </div>
      </div>
      <button class="btn btn-confirm order-panel_button" type="button">
          <span class="inner">Submit</span>
        </button>
    </div>
  </div>
</template>

<script>
import Title from "./elements/Title";
import Currency from "./elements/Currency";
import Input from "./elements/Input";
import InputPassword from "./elements/InputPassword";

export default {
  name: "Details",
  components: { Title, Currency, Input, InputPassword },
  props: ['type'],
  data() {
    return {
      detailsTabs: [
        {
          active: false,
          title: 'Game Account',
          region: { title: 'RU' },
          regionList: [
            { title: 'RU' },
            { title: 'EUR' },
            { title: 'JP' },
            { title: 'USA'}
          ],
          currentUserName: ''
        },
        {
          active: true,
          title: 'Agent',
          selected: [],
          list: ['Breach', 'Brimstorm', 'Cyper', 'Jett', 'Brimstorm', 'Cyper', 'Jett'],
          search: ''
        },
        {
          active: false,
          title: 'Notes',
          notes: 'Notes..',
          evenActive: false
        }
      ]
    }
  },
  methods: {
    SetActive(tab) {
      this.detailsTabs.forEach(t => {
        t.active = false
      })
      this.detailsTabs.find(t => t.title === tab.title).active = true
    },
    UpdateMessage(e) {
      this.detailsTabs[2].notes = e.target.innerText;
    },
    SetFocus() {
      if (this.detailsTabs[2].notes === 'Notes..') {
        this.detailsTabs[2].notes = ''
      }
      this.$refs.notes.focus();
    },
  }
}
</script>

<style lang="scss">
.details {
  margin-bottom: 30px;
  padding: 42px 30px;
  @media screen and (max-width: 1239px) {
    margin-bottom: 2.42vw;
    padding: 3.39vw 2.42vw;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
    padding: 14px 30px 38px;
  }
  @media screen and (max-width: 640px) {
    padding: 14px 20px 30px;
  }
  &_header {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-bottom: 1px solid #2EFDC5;
    margin-bottom: 40px;
    @media screen and (max-width: 1239px) {
      margin-bottom: 3.23vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 20px;
    }
  }
  &_tab {
    display: block;
    border-bottom: 5px solid transparent;
    padding: 3px 0 9px;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.292;
    font-family: Rajdhani, sans-serif;
    color: #FFFFFF;
    @media screen and (max-width: 1239px) {
      border-bottom-width: .4vw;
      padding: .24vw 0 .73vw;
      font-size: 1.94vw;
    }
    @media screen and (max-width: 800px) {
      border-bottom-width: 3px;
      padding: 6px 0;
      font-size: 12px;
    }
    &:not(:last-child) {
      margin-right: 30px;
      @media screen and (max-width: 1239px) {
        margin-right: 2.42vw;
      }
      @media screen and (max-width: 800px) {
        margin-right: 20px;
      }
    }
    &:hover, &:focus {
      color: #2efdc5;
    }
    &.current {
      border-bottom-color: #2efdc5;
    }
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .title {
        @media screen and (max-width: 800px) {
          margin-bottom: 10px;
        }
      }
    }
  }
  &_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      width: 100%;
    }
    .currency {
      margin-bottom: 26px;
      @media screen and (max-width: 1239px) {
        margin-bottom: 2.1vw;
      }
      @media screen and (max-width: 800px) {
        margin-bottom: 16px;
      }
    }
    .input_search {
      margin-bottom: 20px;
      width: 280px;
      height: 40px;
      @media screen and (max-width: 640px) {
        width: 210px;
        height: 30px;
      }
    }
  }
  &_hint {
    max-width: 356px;
    margin: 0 auto 34px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.357;
    @media screen and (max-width: 1239px) {
      margin-bottom: 2.74vw;
      font-size: 1.13vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 20px;
      font-size: 12px;
    }
  }
  &_form {
    max-width: 280px;
    @media screen and (max-width: 800px) {
      max-width: 280px;
      padding-top: 10px;
    }
    .input {
      width: 280px;
      height: 40px;
      margin: 0 auto 24px;
      @media screen and (max-width: 1239px) {
        margin-bottom: 1.94vw;
      }
      @media screen and (max-width: 800px) {
        margin-bottom: 20px;
        width: 210px;
        height: 30px;
      }
      &:last-of-type {
        margin-bottom: 16px;
        @media screen and (max-width: 1239px) {
          margin-bottom: 1.29vw;
        }
        @media screen and (max-width: 800px) {
          margin-bottom: 6px;
        }
      }
    }
    .details_hint {
      margin-bottom: 16px;
      @media screen and (max-width: 800px) {
        text-align: left;
      }
    }
  }
  &_any {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.333;
    margin-bottom: 32px;
    @media screen and (max-width: 1239px) {
      font-size: 1.45vw;
      margin-bottom: 2.58vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 12px;
      margin-bottom: 16px;
    }
  }
  &_selectables {
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 16px;
    @media screen and (max-width: 1239px) {
      margin-bottom: 1.29vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 30px;
    }
    &-item {
      background: rgba(255, 70, 84, 0.2);
      border: 1px solid #FF4654;
      border-radius: 39px;
      padding: 4px 20px 3px;
      text-transform: uppercase;
      color: #FFFFFF;
      font-family: Rajdhani, sans-serif;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.278;
      margin: 0 8px 6px;
      @media screen and (max-width: 1239px) {
        padding: .32vw 1.61vw .24vw;
        font-size: 1.45vw;
      }
      @media screen and (max-width: 800px) {
        padding: 2px 13px;
        font-size: 12px;
        margin: 0 5px 6px;
      }
      &.selected {
        background: rgba(46, 253, 197, 0.2);
        border-color: #2efdc5;
      }
    }
  }
  &_note {
    background: rgba(255, 70, 84, 0.2);
    border: 1px solid #FF4654;
    padding: 14px;
    height: 190px;
    max-height: 190px;
    overflow: auto;
    width: 100%;
    color: #FFFFFF;
    outline: none;
    margin-bottom: 16px;
    @media screen and (max-width: 1239px) {
      padding: 1.13vw;
      margin-bottom: 1.29vw;
      height: 15.32vw;
      max-height: 15.32vw;
    }
    @media screen and (max-width: 800px) {
      padding: 14px;
      font-size: 12px;
      height: 228px;
      max-height: 228px;
    }
  }
}
</style>