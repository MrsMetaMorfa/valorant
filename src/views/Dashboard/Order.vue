<template>
<div class="dashboard_order">
  <OrderInfo :params-id="$route.params.id" />
  <Chat class="dashboard_chat" :person="'Customer'" />
  <Screenshots />
</div>
</template>

<script>
import Chat from "../../components/Chat";
import OrderInfo from "../../components/dashboard/OrderInfo";
import Screenshots from "../../components/dashboard/Screenshots";

export default {
  name: "DashboardOrder",
  components: { Chat, OrderInfo, Screenshots },
}
</script>

<style lang="scss">
.dashboard_order {
  display: grid;
  grid-template-columns: 450px 1fr;
  grid-template-rows: 1fr .6fr;
  grid-gap: 30px;
  @media screen and (max-width: 1239px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 2.42vw;
  }
  @media screen and (max-width: 800px) {
    grid-gap: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
  .block {
    background: #FFFFFF;
    box-shadow: 0 1px 15px rgba(69, 65, 78, 0.08);
    border: none;
    border-radius: 0;
    padding: 0;
    &_title {
      border-bottom-color: #DAE4EF;
      padding: 20px 20px 10px;
      font-size: 24px;
      line-height: 1.292;
      margin-bottom: 0;
      @media screen and (max-width: 1239px) {
        font-size: 1.94vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 18px;
      }
    }
  }
  .chat {
    height: auto;
    padding: 0;
    max-width: calc(100vw - 305px - 450px - 60px);
    @media screen and (max-width: 1239px) {
      max-width: 100%;
    }
    &_input {
      border-top: none;
      padding: 30px;
      @media screen and (max-width: 1239px) {
        padding: 2.42vw;
      }
      @media screen and (max-width: 800px) {
        padding: 20px;
      }
    }
    &_textarea {
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid #8796A5;
      border-radius: 6px;
      color: #8796A5;
      padding-left: 14px;
    }
    &_confirm {
      bottom: 31px;
      right: 31px;
      @media screen and (max-width: 1239px) {
        bottom: 2.5vw;
        right: 2.5vw;
      }
      @media screen and (max-width: 800px) {
        bottom: 21px;
        right: 21px;
      }
      img {
        filter: brightness(.5);
      }
    }
    &_history {
      padding: 20px 50px;
      @media screen and (max-width: 1239px) {
        padding: 1.62vw 4.03vw;
      }
      @media screen and (max-width: 800px) {
        padding: 26px 30px;
      }
      @media screen and (max-width: 800px) {
        padding: 20px;
      }
    }
    &_message {
      &-time mark {
        color: #8796A5;
      }
      &-body {
        background: #FFD8DB;
        color: #19293A;
      }
      &.user {
        .chat_message-body {
          background: #C5D1DC;
        }
        .chat_message-time {
          color: #8796A5;
        }
      }
    }
  }
}
</style>