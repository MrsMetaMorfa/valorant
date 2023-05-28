<template>
<div class="block chat container container--column">
  <h3 class="block_title chat_title text-center">Chat with {{ person }}</h3>
  <div class="chat_history">
    <div class="chat_message"
         :class="{'user': message.sender === 'User'}"
         v-for="message in messageList"
         :key="message.id">
      <div class="chat_message-header container">
        <h4 class="chat_message-sender" v-show="message.sender !== 'User'">{{ message.sender }}</h4>
        <p class="chat_message-time"><mark>{{ message.time }}</mark></p>
      </div>
      <p class="chat_message-body">{{ message.message }}</p>
    </div>
  </div>
  <div class="chat_input">
    <p class="chat_textarea"
       ref="message"
       contenteditable="true"
       @input="UpdateMessage"
       @click="SetFocus">{{ message }}</p>
    <button class="btn btn-icon chat_confirm"
            type="button" @click="SendMessage">
      <img :src="`${'/assets/images/send.svg'}`" alt="Send message">
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "Chat",
  props: ['person'],
  data() {
    return {
      message: 'Type a message here',
      messageList: [
        {
          id: 0,
          sender: this.person,
          time: '12:30',
          message: 'Need help, or have a specific request for us? Feel free to start a live chat'
        },
        {
          id: 1,
          sender: 'User',
          time: '12:30',
          message: 'Need help, or have a specific request for us? Feel free to start a live chat'
        },
        {
          id: 2,
          sender: this.person,
          time: '12:30',
          message: 'Need help, or have a specific'
        },
      ]
    }
  },
  methods: {
    UpdateMessage(e) {
      this.message = e.target.innerText;
    },
    SetFocus() {
      if (this.message === 'Type a message here') {
        this.message = ''
      }
      this.$refs.message.focus();
    },
    SendMessage() {
      if (this.message !== 'Type a message here' && this.message !== '') {
        let now = Date.now();
        this.messageList.push({
          id: this.messageList.length,
          sender: 'User',
          time: `${now.getHours}:${now.getMinutes}`,
          message: this.message
        })
      }
    }
  }
}
</script>

<style lang="scss">
.block {
  background: rgba(18, 30, 43, 0.3);
  border: 3px solid #FF4654;
  border-radius: 16px;
  padding: 34px 30px;
  @media screen and (max-width: 1239px) {
    border-width: .24vw;
    border-radius: 1.29vw;
    padding: 2.74vw 2.42vw;
  }
  @media screen and (max-width: 800px) {
    border-width: 2px;
    border-radius: 10px;
    padding: 20px;
  }
  &_title {
    padding: 0 0 10px;
    border-bottom: 1px solid #FF4654;
    font-size: 36px;
    line-height: 1.278;
    margin: 0 0 40px;
    @media screen and (max-width: 1239px) {
      padding-bottom: .81vw;
      font-size: 2.9vw;
      margin-bottom: 3.23vw;
    }
    @media screen and (max-width: 800px) {
      padding-bottom: 6px;
      font-size: 26px;
      margin-bottom: 20px;
    }
  }
}
.chat {
  height: 678px;
  @media screen and (max-width: 1239px) {
    height: 54.68vw;
  }
  @media screen and (max-width: 800px) {
    height: 460px;
  }
  &_input {
    padding: 30px 0 0;
    border-top: 1px solid #FF4654;
    margin: auto 0 0;
    position: relative;
    @media screen and (max-width: 1239px) {
      padding-top: 2.42vw;
    }
    @media screen and (max-width: 800px) {
      padding-top: 20px;
    }
  }
  &_textarea {
    background: rgba(255, 70, 84, 0.2);
    border: 1px solid #FF4654;
    padding: 10px 50px 10px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.357;
    max-height: 172px;
    min-height: 42px;
    outline: none;
    overflow-y: auto;
    @media screen and (max-width: 1239px) {
      padding: .81vw 4.03vw .81vw .81vw;
      font-size: 1.13vw;
      min-height: 3.39vw;
      max-height: 13.87vw;
    }
    @media screen and (max-width: 800px) {
      min-height: 30px;
      max-height: 120px;
      font-size: 12px;
    }
  }
  &_history {
    height: 100%;
    overflow: auto;
  }
  &_message {
    max-width: 370px;
    margin-bottom: 6px;
    @media screen and (max-width: 1239px) {
      max-width: 29.84vw;
      margin-bottom: .48vw;
    }
    @media screen and (max-width: 800px) {
      max-width: 370px;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 640px) {
      width: 95%;
    }
    &-header {
      margin-bottom: 8px;
      display: flex;
      align-items: baseline;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.357;
      @media screen and (max-width: 1239px) {
        margin-bottom: .65vw;
        font-size: 1.13vw;
      }
      @media screen and (max-width: 800px) {
        margin-bottom: 6px;
        font-size: 12px;
      }
    }
    &-sender {}
    &-time {
      margin-left: 8px;
      @media screen and (max-width: 1239px) {
        margin-left: .65vw;
      }
      @media screen and (max-width: 800px) {
        margin-left: 6px;
      }
    }
    &-body {
      background: rgba(255, 70, 84, 0.5);
      border-radius: 6px;
      padding: 9px 14px;
      @media screen and (max-width: 1239px) {
        padding: .73vw 1.13vw;
      }
      @media screen and (max-width: 800px) {
        padding: 7px 14px;
      }
    }
    &.user {
      margin-left: auto;
      .chat_message-header {
        justify-content: flex-end;
        mark {
          color: #FFFFFF;
        }
      }
      .chat_message-body {
        background: rgba(39, 59, 81, 0.5);
      }
    }
  }
  &_confirm {
    position: absolute;
    right: 1px;
    bottom: 1px;
    padding: 10px;
    width: 40px;
    height: 40px;
    @media screen and (max-width: 1239px) {
      padding: .81vw;
      width: 3.23vw;
      height: 3.23vw;
    }
    @media screen and (max-width: 800px) {
      width: 28px;
      height: 28px;
      padding: 5px;
    }
  }
}
</style>