<template>
<div class="servers">
  <Title :title="'Server'" />
  <ul class="servers_list container">
    <li class="servers_item" v-for="(server, index) in SERVERS.list" :key="server.id">
      <button class="btn servers_button"
              :class="{'current': SERVERS.currentID === server.id }"
              type="button" @click="ChangeServer(server.id)">
        <svg viewBox="0 0 60 30"
             fill="none" xmlns="http://www.w3.org/2000/svg"
             v-if="index === 0">
          <path d="M0 9V30H60V24L56 20V15V10L60 6V0H9L0 9Z"/>
        </svg>
        <svg viewBox="0 0 60 30"
             fill="none" xmlns="http://www.w3.org/2000/svg"
             v-else-if="index === (SERVERS.list.length - 1)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 23V30H10H46H51L60 21V0H46H10H4V7L0 11V19L4 23Z"/>
        </svg>
        <svg viewBox="0 0 60 30"
             fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
          <path d="M4 0V7L0 11V19L4 23V30H60V24L56 20V10L60 6V0H4Z"/>
        </svg>
        <span>{{ server.title }}</span>
      </button>
    </li>
  </ul>
</div>
</template>

<script>
import Title from "./elements/Title";
import {mapState, mapMutations} from 'vuex';

export default {
  name: "Servers",
  components: { Title },
  computed: {...mapState(['SERVERS'])},
  methods: {
    ...mapMutations(['ChangeServer']),
  }
}
</script>

<style lang="scss">
.servers {
  margin-bottom: 40px;
  @media screen and (max-width: 1239px) {
    margin-bottom: 3.23vw;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 27px;
  }
  &_list {
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 640px) {
      flex-wrap: wrap;
      max-width: 240px;
      margin: 0 auto;
    }
  }
  &_item {
  }
  &_button {
    position: relative;
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-family: Rajdhani, sans-serif;
      font-weight: bold;
      font-size: 20px;
      line-height: 1.5;
      color: #FFFFFF;
    }
    svg {
      width: 60px;
      min-width: 60px;
      height: 30px;
    }
    svg path {
      fill: #FF4654;
      fill-opacity: 0.2;
    }
    &.current {
      span {
        color: #19293A;
      }
      svg path {
        fill: #2EFDC5;
        fill-opacity: 1;
      }
    }
  }
}
</style>