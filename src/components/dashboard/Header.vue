<template>
  <header class="header">
    <nav class="header_top" v-if="!isMobile">
      <div class="header_user container" v-if="userLoggedIn">
        <p class="header_info">Order Volume: <strong>$454.83</strong></p>
        <p class="header_info">Share: <strong>40%</strong></p>
        <p class="header_info">Balance: <strong>$678.83</strong></p>
        <button class="btn header_notifications" type="button" title="Notifications">
          <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9C1 5.13401 4.13401 2 8 2C11.866 2 15 5.13401 15 9V13L16 16H0L1 13V9Z" fill="#C5D1DC"/>
            <path d="M11 17C11 17.394 10.9224 17.7841 10.7716 18.1481C10.6209 18.512 10.3999 18.8427 10.1213 19.1213C9.84274 19.3999 9.51203 19.6209 9.14805 19.7716C8.78407 19.9224 8.39397 20 8 20C7.60603 20 7.21593 19.9224 6.85195 19.7716C6.48797 19.6209 6.15726 19.3999 5.87868 19.1213C5.6001 18.8427 5.37913 18.512 5.22836 18.1481C5.0776 17.7841 5 17.394 5 17L8 17H11Z" fill="#C5D1DC"/>
            <path d="M6 2C6 0.89543 6.89543 0 8 0C9.10457 0 10 0.895431 10 2V4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4V2Z" fill="#C5D1DC"/>
          </svg>
        </button>
        <button class="btn header_button header_button-slide"
                :class="{'open': isUserMenuVisible}" type="button"
                title="Open User Menu" @click="UserMenuOpen">
          <span class="circle">
            <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="9" r="5.5" stroke="#FFFFFF" stroke-width="3"/>
              <path d="M5 23C5 20 7.8 16 13 16C18.2 16 21 20 21 23" stroke="#FFFFFF" stroke-width="3"/>
            </svg>
          </span>
        </button>
        <ul class="header_submenu" v-if="isUserMenuVisible">
          <li class="header_submenu-item">
            <button class="header_submenu-link btn"
                    type="button"
                    @click="UserLogout">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.85714C8.57796 7.85714 9.85714 6.57796 9.85714 5C9.85714 3.42204 8.57796 2.14286 7 2.14286C5.42204 2.14286 4.14286 3.42204 4.14286 5C4.14286 6.57796 5.42204 7.85714 7 7.85714ZM7 10C9.76142 10 12 7.76142 12 5C12 2.23858 9.76142 0 7 0C4.23858 0 2 2.23858 2 5C2 7.76142 4.23858 10 7 10Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.1176C3.79787 10.1176 2.21053 12.4487 2.21053 14H0C0 11.316 2.53897 8 7 8C11.461 8 14 11.316 14 14H11.7895C11.7895 12.4487 10.2021 10.1176 7 10.1176Z" fill="white"/>
              </svg>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
      <button class="btn header_login" type="button" v-else @click="UserLogin">Login</button>
    </nav>
    <nav class="header_top" v-else>
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
      <ul class="header_mobile-menu" v-if="isMobileMenuVisible">
        <li class="header_submenu-item">
          <router-link class="header_submenu-link btn"
                       to="/dashboard/orders"
                       @click="UserMenuOpen">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.39999 0.700195H12.6V13.3002H1.39999V0.700195ZM4.19997 3.5C4.19997 3.8866 3.88657 4.2 3.49997 4.2C3.11337 4.2 2.79997 3.8866 2.79997 3.5C2.79997 3.1134 3.11337 2.8 3.49997 2.8C3.88657 2.8 4.19997 3.1134 4.19997 3.5ZM3.49997 7.7C3.88657 7.7 4.19997 7.3866 4.19997 7C4.19997 6.6134 3.88657 6.3 3.49997 6.3C3.11337 6.3 2.79997 6.6134 2.79997 7C2.79997 7.3866 3.11337 7.7 3.49997 7.7ZM4.19997 10.5C4.19997 10.8866 3.88657 11.2 3.49997 11.2C3.11337 11.2 2.79997 10.8866 2.79997 10.5C2.79997 10.1134 3.11337 9.8 3.49997 9.8C3.88657 9.8 4.19997 10.1134 4.19997 10.5ZM11.2 2.8H4.89997V4.2H11.2V2.8ZM4.89997 6.3H11.2V7.7H4.89997V6.3ZM11.2 9.8H4.89997V11.2H11.2V9.8Z" fill="white"/>
            </svg>
            <span>Orders</span>
          </router-link>
        </li>
        <li class="header_submenu-item">
          <router-link class="header_submenu-link btn"
                       to="/dashboard/reviews"
                       @click="UserMenuOpen">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0L9.25886 3.89095L13.6574 4.83688L10.6549 8.18755L11.1145 12.6631L7 10.843L2.8855 12.6631L3.34509 8.18755L0.342604 4.83688L4.74114 3.89095L7 0Z" fill="white"/>
            </svg>
            <span>Reviews</span>
          </router-link>
        </li>
        <li class="header_submenu-item">
          <router-link class="header_submenu-link btn"
                       to="/dashboard"
                       @click="UserMenuOpen">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.39999" y="6.2998" width="11.2" height="7" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.79997 2.1001H1.39999V5.6001H12.6V2.1001H11.2V4.20049H8.39997V2.1001H5.59997V4.20049H2.79997V2.1001Z" fill="white"/>
              <rect x="3.5" y="0.700195" width="1.4" height="2.8" fill="white"/>
              <rect x="9.10001" y="0.700195" width="1.4" height="2.8" fill="white"/>
            </svg>
            <span>Balance History</span>
          </router-link>
        </li>
        <li class="header_submenu-item">
          <router-link class="header_submenu-link btn"
                       to="/dashboard"
                       @click="UserMenuOpen">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.57411 6.35961C8.02473 6.05601 7.44065 5.82469 6.86236 5.5847C6.52695 5.44591 6.206 5.28399 5.92263 5.05845C5.36458 4.61317 5.47157 3.8903 6.12504 3.60405C6.31009 3.52309 6.50382 3.49706 6.70044 3.4855C7.458 3.44502 8.17798 3.58381 8.86325 3.91344C9.20445 4.07825 9.31721 4.0262 9.43287 3.67055C9.55431 3.29466 9.65551 2.91299 9.76828 2.53421C9.84346 2.27976 9.75093 2.11205 9.51094 2.00507C9.07144 1.81134 8.62037 1.67255 8.14617 1.59737C7.5274 1.50195 7.5274 1.49906 7.52451 0.877399C7.52161 0.00128508 7.52161 0.0012851 6.64261 0.0012851C6.51538 0.0012851 6.38816 -0.00160637 6.26094 0.0012851C5.85035 0.012851 5.78095 0.0851375 5.76939 0.498617C5.7636 0.683671 5.76939 0.868724 5.7665 1.05667C5.7636 1.60605 5.76071 1.59737 5.23447 1.78821C3.96222 2.25084 3.17574 3.11828 3.09189 4.50619C3.01671 5.73506 3.65862 6.56491 4.66774 7.16922C5.2894 7.54222 5.97757 7.76197 6.63683 8.05401C6.89417 8.16678 7.13994 8.2969 7.35391 8.47617C7.98714 8.99952 7.87148 9.86985 7.1197 10.1995C6.71779 10.3759 6.29274 10.4192 5.85613 10.3643C5.18242 10.2804 4.53762 10.1041 3.93042 9.78889C3.57477 9.60384 3.47067 9.65299 3.34923 10.0376C3.24514 10.3701 3.15261 10.7055 3.06009 11.0409C2.93575 11.492 2.98202 11.5989 3.41284 11.81C3.96222 12.076 4.54919 12.2119 5.14772 12.3074C5.61614 12.3825 5.6306 12.4028 5.63638 12.8885C5.63927 13.1083 5.63927 13.3309 5.64216 13.5507C5.64505 13.8283 5.77806 13.9902 6.06432 13.996C6.38816 14.0018 6.71489 14.0018 7.03874 13.9931C7.30475 13.9873 7.44065 13.8427 7.44065 13.5738C7.44065 13.2731 7.45511 12.9695 7.44354 12.6688C7.42909 12.3623 7.56209 12.2062 7.85702 12.1252C8.53652 11.9401 9.11481 11.5758 9.5601 11.0322C10.7976 9.52866 10.3263 7.32825 8.57411 6.35961Z" fill="white"/>
            </svg>
            <span>Payouts</span>
          </router-link>
        </li>
        <li class="header_submenu-item">
          <router-link class="header_submenu-link btn"
                       to="/dashboard"
                       @click="UserMenuOpen">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45654 9.08912V11.1941L6.66702 13.2993L10.8775 11.1941V9.08887L6.66684 11.1942L2.45654 9.08912Z" fill="white"/>
              <path d="M6.66693 3.29988L13.2999 6.64992L6.66693 9.96643L1.40067e-05 6.64992L6.66693 3.29988Z" fill="white"/>
              <path d="M12.6 6.6499H13.3V10.4999H12.6V6.6499Z" fill="white"/>
              <circle cx="12.95" cy="10.1501" r="1.04999" fill="white"/>
            </svg>
            <span>Rules</span>
          </router-link>
        </li>
        <li class="header_submenu-item" v-if="userLoggedIn">
          <div class="header_user">
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
            <div class="header_submenu" v-if="isUserMenuVisible">
              <p class="header_info header_submenu-item">Order Volume: <strong>$454.83</strong></p>
              <p class="header_info header_submenu-item">Share: <strong>40%</strong></p>
              <p class="header_info header_submenu-item">Balance: <strong>$678.83</strong></p>
              <p class="header_info header_submenu-item">
                <button class="header_submenu-link btn header_button container"
                      type="button"
                      @click="UserLogout">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.85714C8.57796 7.85714 9.85714 6.57796 9.85714 5C9.85714 3.42204 8.57796 2.14286 7 2.14286C5.42204 2.14286 4.14286 3.42204 4.14286 5C4.14286 6.57796 5.42204 7.85714 7 7.85714ZM7 10C9.76142 10 12 7.76142 12 5C12 2.23858 9.76142 0 7 0C4.23858 0 2 2.23858 2 5C2 7.76142 4.23858 10 7 10Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.1176C3.79787 10.1176 2.21053 12.4487 2.21053 14H0C0 11.316 2.53897 8 7 8C11.461 8 14 11.316 14 14H11.7895C11.7895 12.4487 10.2021 10.1176 7 10.1176Z" fill="white"/>
                </svg>
                <span>Logout</span>
              </button>
              </p>
            </div>
          </div>
        </li>
        <li class="header_submenu-item" v-else>
          <button class="btn header_login" type="button" @click="UserLogin">Login</button>
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
  font-weight: bold;
  background: #FFFFFF;
  box-shadow: 0 8px 15px rgba(69, 65, 78, 0.15);
  padding: 14px 20px 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #19293A;
  @media screen and (max-width: 1239px) {
    padding: 1.13vw 1.62vw .97vw;
  }
  @media screen and (max-width: 800px) {
    padding: 19px;
  }
  &_top {
    position: relative;
    justify-content: flex-end;
    align-items: center;
  }
  &_button, &_login {
    width: auto;
  }
  &_button {
    display: inline-flex;
    .circle {
      width: 44px;
      min-width: 44px;
      height: 44px;
      border-radius: 22px;
      border: 3px solid #C5D1DC;
      display: block;
      padding: 6px 5px;
      @media screen and (max-width: 1239px) {
        width: 3.55vw;
        min-width: 3.55vw;
        height: 3.55vw;
        border-width: .24vw;
        padding: .48vw .4vw;
      }
      svg path, svg circle {
        stroke: #C5D1DC;
      }
    }
    svg {
      width: 26px;
      max-width: 26px;
      height: 26px;
      margin-right: 0;
      @media screen and (max-width: 1239px) {
        height: 2.1vw;
        width: 2.1vw;
        max-width: 2.1vw;
      }
      @media screen and (max-width: 800px) {
        width: 18px;
        max-width: 18px;
        height: 18px;
      }
    }
    &:hover, &:focus {
      .circle {
        border-color: #19293A;
      }
      svg {
        path, circle, rect {
          stroke: #19293A;
        }
      }
    }
    &-slide {
      @media screen and (max-width: 800px) {
        color: #FFFFFF;
      }
      svg {
        path, circle {
          @media screen and (max-width: 800px) {
            stroke: #FFFFFF;
          }
        }
      }
      &:after {
        content: '';
        display: block;
        border: solid;
        border-width: 6px 6px 0 6px;
        border-color: #C5D1DC transparent transparent transparent;
        margin: 0 0 0 13px;
        align-self: center;
        @media screen and (max-width: 1239px) {
          border-width: .48vw .48vw 0 .48vw;
          margin-left: 1.05vw;
        }
        @media screen and (max-width: 800px) {
          display: none;
        }
      }
      &:hover, &:focus {
        &:after {
          border-top-color: #19293A;
        }
        @media screen and (max-width: 800px) {
          color: #FFFFFF;
          svg {
            path, circle {
              stroke: #FFFFFF;
            }
          }
        }
      }
      &.open {
        color: #19293A;
        @media screen and (max-width: 800px) {
          color: #2efdc5;
        }
        svg {
          path, circle {
            stroke: #19293A;
            @media screen and (max-width: 800px) {
              stroke: #2efdc5;
            }
          }
        }
        &:after {
          border-top-color: #19293A;
          transform: rotate(180deg);
        }
      }
    }
  }
  &_login {
    padding: 7px 16px;
    border: 3px solid #C5D1DC;
    border-radius: 22px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.348;
    color: #C5D1DC;
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
    top: calc(100% + 12px);
    right: -20px;
    background: #111F2F;
    padding: 25px 20px;
    min-width: 160px;
    z-index: 1;
    @media screen and (max-width: 1239px) {
      top: calc(100% + 2.34vw);
      padding: 1.94vw .81vw 1.61vw;
      min-width: 12.9vw;
    }
    @media screen and (max-width: 800px) {
      position: relative;
      top: auto;
      right: auto;
      left: 0;
      padding: 0;
      background: transparent;
    }
    &-item {
      padding: 0;
      &:not(:last-of-type) {
        margin-bottom: 20px;
        @media screen and (max-width: 800px) {
          margin-bottom: 16px;
        }
      }
    }
    &-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.333;
      color: #FFFFFF;
      text-align: left;
      svg {
        width: 20px;
        margin-right: 16px;
        @media screen and (max-width: 800px) {
          width: 18px;
          margin-right: 13px;
        }
      }
      span {
        white-space: nowrap;
      }
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
    align-items: center;
  }
  &_info {
    display: block;
    color: #8796A5;
    font-size: 18px;
    font-weight: 500;
    margin: 0 30px 0 0;
    @media screen and (max-width: 1239px) {
      font-size: 1.45vw;
      margin-right: 2.42vw;
    }
    @media screen and (max-width: 800px) {
      color: #8796A5;
      font-size: 12px;
      margin-right: 16px;
    }
    &:last-of-type {
      margin-right: 20px;
      @media screen and (max-width: 1239px) {
        margin-right: 1.62vw;
      }
      @media screen and (max-width: 800px) {
        margin-right: 16px;
      }
    }
    strong {
      color: #19293A;
      font-weight: bold;
      @media screen and (max-width: 800px) {
        color: #FFFFFF;
      }
    }
  }
  &_notifications {
    margin: 0 20px 0 0;
    padding: 10px;
    @media screen and (max-width: 1239px) {
      margin-right: 1.62vw;
      padding: .81vw;
    }
    svg {
      width: 16px;
      height: 20px;
      @media screen and (max-width: 1239px) {
        height: 1.62vw;
        width: 1.29vw;
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
      @media screen and (max-width: 1239px) {
        top: 4.24vw;
        padding: 1.77vw 2.26vw 1.77vw 1.62vw;
      }
      @media screen and (max-width: 800px) {
        top: 49px;
        width: 220px;
        padding: 25px 20px;
      }
      .header_button, .header_login {
        margin-left: 0;
        margin-bottom: 25px;
        @media screen and (max-width: 1239px) {
          margin-bottom: 2.02vw;
        }
        @media screen and (max-width: 800px) {
          margin-bottom: 16px;
          font-weight: bold;
        }
        svg {
          margin-right: 13px;
        }
      }
    }
  }
}
</style>