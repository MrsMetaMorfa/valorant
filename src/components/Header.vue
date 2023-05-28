<template>
  <header class="header">
    <nav class="header_top container" v-if="!isMobile">
      <router-link class="header_button container" to="/recent">
        <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="11.5" y="9.5" width="4" height="13" stroke="white" stroke-width="3"/>
          <rect x="2.5" y="15.5" width="4" height="7" stroke="white" stroke-width="3"/>
          <rect x="20.5" y="3.5" width="4" height="19" stroke="white" stroke-width="3"/>
        </svg>
        REСENT WORK
      </router-link>
      <router-link class="header_button container" to="/reviews">
        <svg viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2.7884L16.1521 7.72796L16.4693 8.22494L17.0399 8.37298L22.7118 9.84444L18.9881 14.3687L18.6134 14.8239L18.649 15.4124L19.0022 21.2614L13.5487 19.118L13 18.9023L12.4513 19.118L6.99777 21.2614L7.35103 15.4124L7.38657 14.8239L7.01193 14.3687L3.28819 9.84444L8.96006 8.37298L9.53071 8.22494L9.84785 7.72796L13 2.7884Z" stroke="white" stroke-width="3"/>
        </svg>
        REVIEWS
      </router-link>
      <div class="header_user" v-if="userLoggedIn">
        <button class="btn header_button header_button-slide"
                :class="{'open': isUserMenuVisible}" type="button"
                title="Open User Menu" @click="UserMenuOpen">
          <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="9" r="5.5" stroke="#FFFFFF" stroke-width="3"/>
            <path d="M5 23C5 20 7.8 16 13 16C18.2 16 21 20 21 23" stroke="#FFFFFF" stroke-width="3"/>
          </svg>
          {{ this.$store.state.CURRENT_USER.userName }}
        </button>
        <ul class="header_submenu" v-if="isUserMenuVisible">
          <li class="header_submenu-item">
            <router-link class="header_submenu-link btn" to="/user/orders" @click="UserMenuOpen">Order</router-link>
          </li>
          <li class="header_submenu-item">
            <router-link class="header_submenu-link btn" to="/user/profile" @click="UserMenuOpen">Profile</router-link>
          </li>
          <li class="header_submenu-item">
            <router-link class="header_submenu-link btn" to="/user/settings" @click="UserMenuOpen">Settings</router-link>
          </li>
          <li class="header_submenu-item">
            <button class="header_submenu-link btn" type="button" @click="UserLogout">Logout</button>
          </li>
        </ul>
      </div>
      <button class="btn header_login" type="button" v-else @click="UserLogin">Login</button>
    </nav>
    <nav class="header_top container" v-else>
      <button class="btn header_mobile-switch"
              type="button" title="Open mobile menu"
              @click="isMobileMenuVisible = !isMobileMenuVisible">
        <svg viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="!isMobileMenuVisible">
          <rect width="18" height="3" fill="white"/>
          <rect y="9" width="18" height="3" fill="white"/>
        </svg>
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
          <rect y="15.4286" width="21.8193" height="3.63655" transform="rotate(-45 0 15.4286)" fill="white"/>
          <rect x="2.57147" width="21.8193" height="3.63655" transform="rotate(45 2.57147 0)" fill="white"/>
        </svg>
      </button>
      <div class="header_mobile-menu" v-if="isMobileMenuVisible">
        <router-link class="header_button container" to="/recent">
          <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="11.5" y="9.5" width="4" height="13" stroke="white" stroke-width="3"/>
            <rect x="2.5" y="15.5" width="4" height="7" stroke="white" stroke-width="3"/>
            <rect x="20.5" y="3.5" width="4" height="19" stroke="white" stroke-width="3"/>
          </svg>
          REСENT WORK
        </router-link>
        <router-link class="header_button container" to="/reviews">
          <svg viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2.7884L16.1521 7.72796L16.4693 8.22494L17.0399 8.37298L22.7118 9.84444L18.9881 14.3687L18.6134 14.8239L18.649 15.4124L19.0022 21.2614L13.5487 19.118L13 18.9023L12.4513 19.118L6.99777 21.2614L7.35103 15.4124L7.38657 14.8239L7.01193 14.3687L3.28819 9.84444L8.96006 8.37298L9.53071 8.22494L9.84785 7.72796L13 2.7884Z" stroke="white" stroke-width="3"/>
          </svg>
          REVIEWS
        </router-link>
        <div class="header_user" v-if="userLoggedIn">
          <button class="btn header_button header_button-slide"
                  :class="{'open': isUserMenuVisible}"
                  type="button" title="Open User Menu"
                  @click="UserMenuOpen">
            <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="9" r="5.5" stroke="#FFFFFF" stroke-width="3"/>
              <path d="M5 23C5 20 7.8 16 13 16C18.2 16 21 20 21 23" stroke="#FFFFFF" stroke-width="3"/>
            </svg>
            {{ this.$store.state.CURRENT_USER.userName }}
          </button>
          <ul class="header_submenu" v-if="isUserMenuVisible">
            <li class="header_submenu-item">
              <router-link class="header_submenu-link btn" to="/user/orders" @click="UserMenuOpen">Order</router-link>
            </li>
            <li class="header_submenu-item">
              <router-link class="header_submenu-link btn" to="/user/profile" @click="UserMenuOpen">Profile</router-link>
            </li>
            <li class="header_submenu-item">
              <router-link class="header_submenu-link btn" to="/user/settings" @click="UserMenuOpen">Settings</router-link>
            </li>
            <li class="header_submenu-item">
              <button class="header_submenu-link btn" type="button" @click="UserLogout">Logout</button>
            </li>
          </ul>
        </div>
        <button class="btn header_login" type="button" v-else @click="UserLogin">Login</button>
      </div>
    </nav>
    <nav class="header_nav">
      <ul class="header_nav-list container">
        <li class="header_nav-item">
          <router-link to="/" class="header_nav-link btn" exact>RANK BOOST</router-link>
        </li>
        <li class="header_nav-item">
          <router-link to="/placement" class="header_nav-link btn">PLACEMENT</router-link>
        </li>
        <li class="header_nav-item">
          <router-link to="/solo-duo" class="header_nav-link btn">SOLO/DUO GAMES</router-link>
        </li>
        <li class="header_nav-item">
          <router-link to="/coaching" class="header_nav-link btn">COACHING</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['openLogin', 'isMobile'],
  data () {
    return {
      userName: '',
      userLoggedIn: false,
      isUserMenuVisible: false,
      isMobileMenuVisible: false
    }
  },
  methods: {
    UserLogin() {
      this.$emit('update:openLogin', true);
      this.isUserMenuVisible = false
    },
    UserLogout() {
      this.$store.commit('UserLogout');
      this.UpdateUser('', false);
      this.isUserMenuVisible = false
    },
    UserMenuOpen() {
      this.isUserMenuVisible = !this.isUserMenuVisible
    },
    UpdateUser(value, bool) {
      this.userName = value;
      this.userLoggedIn = bool;
    }
  },
  watch: {
    openLogin: function() {
      if (this.$store.state.CURRENT_USER.id >= 0) {
        this.UpdateUser(this.$store.state.CURRENT_USER.userName, true);
      }
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.header {
  color: #FFFFFF;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8000;
  &_top {
    border-bottom: 3px solid #FF4654;
    background: rgba(255, 70, 84, 0.5);
    position: relative;
    justify-content: flex-end;
    align-items: center;
    padding: 12px 40px;
    @media screen and (max-width: 1239px) {
      padding: .97vw 3.23vw;
    }
    @media screen and (max-width: 800px) {
      padding: 16px 18px;
    }
  }
  &_button, &_login {
    width: auto;
    margin: 0 0 0 20px;
    @media screen and (max-width: 1239px) {
      margin-left: 1.61vw;
    }
  }
  &_button {
    padding: 7px 10px;
    display: inline-flex;
    align-items: flex-end;
    color: inherit;
    font-weight: 800;
    font-size: 18px;
    line-height: 1.333;
    text-decoration: none;
    @media screen and (max-width: 1239px) {
      padding: .56vw .81vw;
      font-size: 1.45vw;
    }
    @media screen and (max-width: 800px) {
      padding: 0 0;
      font-size: 14px;
    }
    svg {
      margin-right: 10px;
      width: 26px;
      max-width: 26px;
      height: 26px;
      @media screen and (max-width: 1239px) {
        margin-right: .81vw;
        height: 2.1vw;
        width: 2.1vw;
        max-width: 2.1vw;
      }
      @media screen and (max-width: 800px) {
        margin-right: 12px;
        width: 18px;
        max-width: 18px;
        height: 18px;
      }
    }
    &:hover, &:focus {
      color: #2EFDC5;
      svg {
        path, circle, rect {
          stroke: #2EFDC5;
        }
      }
    }
    &-slide {
      &:after {
        content: '';
        display: block;
        border: solid;
        border-width: 6px 6px 0 6px;
        border-color: #FFFFFF transparent transparent transparent;
        margin: 0 0 0 13px;
        align-self: center;
        @media screen and (max-width: 1239px) {
          border-width: .48vw .48vw 0 .48vw;
          margin-left: 1.05vw;
        }
      }
      &:hover, &:focus {
        &:after {
          border-top-color: #2EFDC5;
        }
      }
      &.open {
        color: #2EFDC5;
        svg {
          path, circle {
            stroke: #2EFDC5;
          }
        }
        &:after {
          border-top-color: #2EFDC5;
          transform: rotate(180deg);
        }
      }
    }
  }
  &_login {
    padding: 6px 16px;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid #FFFFFF;
    border-radius: 14px;
    font-weight: 600;
    font-size: 18px;
    line-height: 134.77%;
    color: #FFFFFF;
    min-width: 140px;
    @media screen and (max-width: 1239px) {
      padding: .48vw 1.29vw;
      font-size: 1.45vw;
      min-width: 11.29vw;
    }
    @media screen and (max-width: 800px) {
      padding: 4px 12px;
      font-size: 14px;
      width: 100%;
    }
  }
  &_submenu {
    position: absolute;
    top: calc(100% + 29px);
    right: 10px;
    background: transparent url("../assets/images/panel_user_menu.svg") no-repeat top center / 100% 100%;
    padding: 24px 10px 20px;
    min-width: 160px;
    @media screen and (max-width: 1239px) {
      top: calc(100% + 2.34vw);
      padding: 1.94vw .81vw 1.61vw;
      min-width: 12.9vw;
    }
    @media screen and (max-width: 800px) {
      position: relative;
      top: auto;
      right: auto;
      left: 30px;
      padding: 0;
      background: transparent;
    }
    &-item {
      padding: 10px 13px;
      @media screen and (max-width: 1239px) {
        padding: .81vw 1.05vw;
      }
      @media screen and (max-width: 800px) {
        padding: 0 0 12px;
      }
      &:not(:last-of-type) {
        border-bottom: 1px solid rgba(46, 253, 197, 0.06);
        @media screen and (max-width: 800px) {
          margin-bottom: 13px;
        }
      }
    }
    &-link {
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.333;
      color: #FFFFFF;
      text-align: left;
      @media screen and (max-width: 1239px) {
        font-size: 1.45vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 14px;
      }
    }
  }
  &_user {
    position: relative;
  }
  &_nav {
    background: rgba(18, 30, 43, 0.54);
    border-bottom: 1px solid rgba(46, 253, 197, .54);
    padding: 15px 40px 0;
    @media screen and (max-width: 1239px) {
      padding: 1.21vw 3.23vw 0;
    }
    @media screen and (max-width: 800px) {
      padding: 7px 3px 0;
      max-width: 600px;
      margin: 0 auto;
    }
    &-list {
      justify-content: center;
      @media screen and (max-width: 800px) {
        justify-content: flex-start;
        overflow-x: auto;
      }
    }
    &-item {
      padding: 0 15px;
    }
    &-link {
      border-bottom: 5px solid transparent;
      font-weight: bold;
      font-size: 24px;
      line-height: 1.292;
      font-family: Rajdhani, sans-serif;
      text-decoration: none;
      color: #FFFFFF;
      padding: 19px 0;
      white-space: nowrap;
      @media screen and (max-width: 1239px) {
        font-size: 1.94vw;
        padding: 1.53vw 0;
        border-bottom: .4vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 18px;
        padding: 11px 0;
        border-bottom: 3px;
        color: rgba(255,255,255,.5);
      }
      &.router-link-active {
        border-bottom-color: #2EFDC5;
        @media screen and (max-width: 800px) {
          order: 0;
          color: #FFFFFF;
        }
      }
    }
  }

  // Mobile
  &_mobile {
    &-switch {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      svg {
        width: 100%;
      }
    }
    &-menu {
      flex-direction: column;
      position: fixed;
      top: 53px;
      right: 0;
      bottom: 0;
      z-index: 500;
      padding: 22px 28px 22px 20px;
      background: #111F2F;
      max-width: 220px;
      .header_button, .header_login {
        margin-left: 0;
        margin-bottom: 25px;
      }
    }
  }
}
</style>