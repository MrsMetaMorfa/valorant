<template>
  <div class="dashboard">
    <div class="page dashboard_grid">
      <Aside v-if="!isMobile" />
      <Header :open-login.sync="openLogin" :is-mobile="isMobile" />
      <main class="main">
        <router-view />
      </main>
    </div>
    <div class="popup" v-if="openLogin" @click.self="$emit('update:openLogin', false)">
      <transition type="fade-in">
        <ResetPassword :open-login.sync="openLogin" v-if="userForgotPassword" />
        <Register :open-login.sync="openLogin" v-else-if="newUser" />
        <SignIn :open-login.sync="openLogin" v-else />
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/dashboard/Header";
import Aside from "../components/dashboard/Aside";
import Register from "../components/modals/Register";
import SignIn from "../components/modals/SignIn";
import ResetPassword from "../components/modals/ResetPassword";

export default {
  name: 'Dashboard',
  components: {
    Header, Aside, Register, SignIn, ResetPassword
  },
  data() {
    return {
      newUser: false,
      userForgotPassword:false,
      openLogin: false,
      windowWidth: 0,
      isMobile: false
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.isMobile = this.windowWidth <= 800

    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      this.isMobile = this.windowWidth <= 800
    }
  }
}
</script>

<style lang="scss">
.dashboard {
  .page {
    color: #19293A;
  }
  &_grid {
    display: grid;
    grid-template:  "nav  head" 70px
                    "nav  main" 1fr
                    / 305px 1fr;
    @media screen and (max-width: 1239px) {
      grid-template:  "nav head" 5.65vw
                      "nav main" 1fr
                      / 24.6vw 1fr;
    }
    @media screen and (max-width: 800px) {
      grid-template:  "head" 50px
                      "main" 1fr
                      / 1fr;
    }
  }
  .aside {
    grid-area: nav;
    background: #19293A;
    display: block;
    padding: 84px 0;
    @media screen and (max-width: 1239px) {
      padding: 6.77vw 0;
    }
    &_orders {
      margin-bottom: 20px;
      @media screen and (max-width: 1239px) {
        margin-bottom: 1.62vw;
      }
    }
    &_order {
      .btn-link {
        display: flex;
        align-items: center;
        padding: 10px 40px;
        font-family: Rajdhani, sans-serif;
        font-weight: bold;
        font-size: 18px;
        line-height: 1.278;
        color: #FFFFFF;
        text-decoration: none;
        @media screen and (max-width: 1239px) {
          padding: .81vw 3.23vw;
          font-size: 1.45vw;
        }
        svg {
          width: 20px;
          margin-right: 20px;
          @media screen and (max-width: 1239px) {
            width: 1.62vw;
            margin-right: 1.62vw;
          }
        }
        &.router-link-active {
          background: rgba(197, 209, 220, 0.14);
        }
      }
    }
    &_menu {
      display: block;
      &-item {}
      &-link {
        display: flex;
        align-items: center;
        padding: 10px 40px;
        font-family: Rajdhani, sans-serif;
        font-weight: bold;
        font-size: 18px;
        line-height: 1.278;
        color: #FFFFFF;
        text-decoration: none;
        @media screen and (max-width: 1239px) {
          padding: .81vw 3.23vw;
          font-size: 1.45vw;
        }
        svg {
          width: 20px;
          margin-right: 20px;
          @media screen and (max-width: 1239px) {
            width: 1.62vw;
            margin-right: 1.62vw;
          }
        }
        &.router-link-active {
          background: rgba(197, 209, 220, 0.14);
        }
      }
    }
  }
  .header {
    grid-area: head;
    @media screen and (max-width: 800px) {
      background: #19293A;
    }
  }
  .main {
    grid-area: main;
    background: #E6EAEE;
    padding: 30px;
    margin: 0;
    max-width: calc(100vw - 305px);
    @media screen and (max-width: 1239px) {
      padding: 2.42vw;
      max-width: 75.4vw;
    }
    @media screen and (max-width: 800px) {
      max-width: 100%;
      padding: 20px 18px 48px;
    }
  }
}
.page {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  @media screen and (max-width: 1239px) {
    padding: 0;
  }
  @media screen and (max-width: 640px) {
    padding: 0;
  }
  &_title {
    font-size: 42px;
    line-height: 1.286;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 40px;
    @media screen and (max-width: 1239px) {
      font-size: 3.39vw;
      margin-bottom: 3.23vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 26px;
      margin-bottom: 8px;
    }
  }
  &_subtitle {
    margin: 0 0 40px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.357;
    @media screen and (max-width: 1239px) {
      font-size: 1.13vw;
      margin-bottom: 3.23vw;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 20px;
      font-size: 12px;
    }
  }
}
</style>

