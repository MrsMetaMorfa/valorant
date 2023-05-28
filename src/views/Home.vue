<template>
  <div class="wrapper">
    <Background />
    <div class="page">
      <Header :open-login.sync="openLogin" :is-mobile="isMobile" />
      <main class="main">
        <router-view />
      </main>
      <Footer />
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
import Background from '../components/Background.vue'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Register from "../components/modals/Register";
import SignIn from "../components/modals/SignIn";
import ResetPassword from "../components/modals/ResetPassword";

export default {
  name: 'Home',
  components: {
    Background, Header, Footer, Register, SignIn, ResetPassword
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
 .wrapper {
   display: block;
   position: relative;
   min-height: 100vh;
   width: 100vw;
   background: #101C28 radial-gradient(50% 50% at 50% 50%, #4A1623 0%, #101C28 100%);
   max-width: 100%;
   overflow-x: hidden;
 }
 .background {
   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   height: 87.1vw;
   width: 210.32vw;
 }
 .page {
   position: relative;
   z-index: 10;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   color: #FFFFFF;
   @media screen and (max-width: 1239px) {
     padding: 0 2.14vw;
   }
   @media screen and (max-width: 640px) {
     padding: 0 4.8vw;
   }
   .main {
     margin-top: 158px;
     padding: 45px 0 80px;
     position: relative;
     @media screen and (max-width: 1239px) {
       margin-top: 13.38vw;
       padding-top: 3.63vw;
       padding-bottom: 6.45vw;
     }
     @media screen and (max-width: 800px) {
       padding: 27px 0 40px;
       margin: 106px auto 0;
       max-width: 600px;
       width: 100%;
     }
   }
   .footer {
     margin-top: auto;
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
