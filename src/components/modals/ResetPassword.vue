<template>
  <form class="authorization">
    <svg viewBox="0 0 386 448" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M368 443.002H18C10.268 443.002 4 436.734 4 429.002V54.7994C4 49.4522 6.25317 44.3526 10.2065 40.7521L45.1225 8.95268C48.6214 5.76612 53.1835 4 57.916 4H368C375.732 4 382 10.268 382 18V429.002C382 436.734 375.732 443.002 368 443.002Z" fill="#111F2F"/>
      <g filter="url(#filter0_d_488_8672)">
        <path d="M18 442.5H368C374.904 442.5 380.5 436.904 380.5 430V18C380.5 11.0964 374.904 5.5 368 5.5H57.9283C53.5627 5.5 49.3546 7.13177 46.1303 10.075L11.2019 41.958C7.56952 45.2737 5.5 49.9648 5.5 54.883V430C5.5 436.904 11.0964 442.5 18 442.5Z" stroke="#2EFDC5" stroke-width="3"/>
      </g>
      <defs>
        <filter id="filter0_d_488_8672" x="0" y="0" width="386" height="448" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 0.56 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_488_8672"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_488_8672" result="shape"/>
        </filter>
      </defs>
    </svg>
    <div class="authorization_wrapper">
      <button class="btn btn-close" type="button" @click="$emit('update:openLogin', false)" title="Close form">
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="15.4286" width="21.8193" height="3.63655" transform="rotate(-45 0 15.4286)" fill="#2EFDC5"/>
          <rect x="2.57147" width="21.8193" height="3.63655" transform="rotate(45 2.57147 0)" fill="#2EFDC5"/>
        </svg>
      </button>
      <h2 class="authorization_title">Reset password</h2>
      <div class="authorization_input input" :class="{'focus': emailOnfocus, 'error': error}">
        <svg viewBox="0 0 280 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="input_bg">
          <mask id="path-1-inside-1_1_43157" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M280 0V28L268 40H87.0866H80.8661H0V12L12 0H80.8661H87.0866H280Z"/>
          </mask>
          <g filter="url(#filter0_i_1_43157)">
            <path class="input-bg" fill-rule="evenodd" clip-rule="evenodd" d="M280 0V28L268 40H87.0866H80.8661H0V12L12 0H80.8661H87.0866H280Z" fill-opacity="0.2"/>
          </g>
          <path class="input-bg border" d="M280 28H281C281 28.2652 280.895 28.5196 280.707 28.7071L280 28ZM280 0V-1C280.552 -1 281 -0.552285 281 0L280 0ZM268 40L268.707 40.7071C268.52 40.8946 268.265 41 268 41V40ZM0 40V41C-0.552277 41 -1 40.5523 -1 40H0ZM0 12H-1C-1 11.7348 -0.894653 11.4804 -0.707092 11.2929L0 12ZM12 0L11.2929 -0.707107C11.4804 -0.894643 11.7348 -1 12 -1V0ZM279 28V0H281V28H279ZM267.293 39.2929L279.293 27.2929L280.707 28.7071L268.707 40.7071L267.293 39.2929ZM87.0866 39H268V41H87.0866V39ZM80.8661 39H87.0866V41H80.8661V39ZM0 39H80.8661V41H0V39ZM1 12V40H-1V12H1ZM12.7071 0.707107L0.707092 12.7071L-0.707092 11.2929L11.2929 -0.707107L12.7071 0.707107ZM80.8661 1H12V-1H80.8661V1ZM87.0866 1H80.8661V-1H87.0866V1ZM280 1H87.0866V-1H280V1Z" mask="url(#path-1-inside-1_1_43157)"/>
          <defs>
            <filter id="filter0_i_1_43157" x="0" y="0" width="280" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_43157"/>
            </filter>
          </defs>
        </svg>
        <div class="input_content container">
          <label class="input_label container">
            <img class="input_icon" :src="`${'/assets/images/email.svg'}`" alt="Email icon">
            <input type="text"
                   placeholder="email@email.com"
                   v-model="email"
                   @focusin="emailOnfocus = true"
                   @focusout="emailOnfocus = false">
          </label>
        </div>
      </div>
      <div class="authorization_input input" :class="{'focus': passwordOnfocus, 'error': error}">
        <svg viewBox="0 0 280 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="input_bg">
          <mask id="path-1-inside-1_1_43157" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M280 0V28L268 40H87.0866H80.8661H0V12L12 0H80.8661H87.0866H280Z"/>
          </mask>
          <g filter="url(#filter0_i_1_43157)">
            <path class="input-bg" fill-rule="evenodd" clip-rule="evenodd" d="M280 0V28L268 40H87.0866H80.8661H0V12L12 0H80.8661H87.0866H280Z" fill-opacity="0.2"/>
          </g>
          <path class="input-bg border" d="M280 28H281C281 28.2652 280.895 28.5196 280.707 28.7071L280 28ZM280 0V-1C280.552 -1 281 -0.552285 281 0L280 0ZM268 40L268.707 40.7071C268.52 40.8946 268.265 41 268 41V40ZM0 40V41C-0.552277 41 -1 40.5523 -1 40H0ZM0 12H-1C-1 11.7348 -0.894653 11.4804 -0.707092 11.2929L0 12ZM12 0L11.2929 -0.707107C11.4804 -0.894643 11.7348 -1 12 -1V0ZM279 28V0H281V28H279ZM267.293 39.2929L279.293 27.2929L280.707 28.7071L268.707 40.7071L267.293 39.2929ZM87.0866 39H268V41H87.0866V39ZM80.8661 39H87.0866V41H80.8661V39ZM0 39H80.8661V41H0V39ZM1 12V40H-1V12H1ZM12.7071 0.707107L0.707092 12.7071L-0.707092 11.2929L11.2929 -0.707107L12.7071 0.707107ZM80.8661 1H12V-1H80.8661V1ZM87.0866 1H80.8661V-1H87.0866V1ZM280 1H87.0866V-1H280V1Z" mask="url(#path-1-inside-1_1_43157)"/>
          <defs>
            <filter id="filter0_i_1_43157" x="0" y="0" width="280" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_43157"/>
            </filter>
          </defs>
        </svg>
        <div class="input_content container">
          <label class="input_label container">
            <img class="input_icon" :src="`${'/assets/images/password.svg'}`" alt="Password icon">
            <input :type="passwordType"
                   placeholder="email@email.com"
                   v-model="password"
                   @focusin="passwordOnfocus = true"
                   @focusout="passwordOnfocus = false">
          </label>
          <button class="btn input_show-password"
                  :class="{' active': passwordShow }"
                  type="button"
                  @click="ShowPassword">
            <img :src="`${'/assets/images/visible.svg'}`" alt="Show password" v-if="passwordShow">
            <img :src="`${'/assets/images/invisible.svg'}`" alt="Hide password" v-else>
          </button>
        </div>
      </div>
      <p class="authorization_error" v-show="error">{{ errorMessage }}</p>
      <button class="btn btn-confirm authorization_confirm" @click.prevent="Login">
        <span class="inner">Login</span>
      </button>
      <div class="authorization_switch container">
        <button class="btn btn-link authorization_switch-button" type="button" @click="SwitchToCreateAccount">CREATE ACCOUNT</button>
        <button class="btn btn-link authorization_switch-button" type="button" @click="SwitchToResetPassword">RESET PASSWORD</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignIn",
  components: {},
  props: ['openLogin'],
  data() {
    return {
      email: '',
      emailOnfocus: false,
      password: '',
      passwordOnfocus: false,
      passwordShow: false,
      passwordType: 'password',
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    ShowPassword() {
      this.passwordShow = !this.passwordShow;
      if (this.passwordShow) {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    Login() {
      let user = {};
      user.email = this.email;
      user.password = this.password;
      this.$store.dispatch('AuthorizeUser', user)
        .then(() => {
          console.log(`'Welcome back, ${this.$store.state.CURRENT_USER.userName}!'`);
          this.$emit('update:openLogin', !this.openLogin);
        })
        .catch((err) => {
          console.log('Some error happen: ' + err)
          this.error = true;
          this.errorMessage = err;
        })
    },
    SwitchToCreateAccount() {
      this.$parent.newUser = true;
    },
    SwitchToResetPassword() {
      this.$parent.userForgotPassword = true
    }
  }
}
</script>

<style lang="scss">

</style>