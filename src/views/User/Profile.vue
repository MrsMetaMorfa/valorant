<template>
<form class="profile">
  <h1 class="page_title">Profile</h1>
  <Title :title="'display name'" />
  <div class="profile_input">
    <Input :color="'#FF4654'"
           :type="'text'"
           :icon="'/assets/images/id-card.svg'"
           :placeholder="'UserName'"
           :value.sync="currentUserName" />
  </div>
  <Title :title="'change password'" />
  <div class="profile_input">
    <InputPassword :color="'#FF4654'"
           :placeholder="'UserName'"
           :value.sync="currentPassword" />

    <Input :color="'#FF4654'"
           :type="'password'"
           :icon="'/assets/images/password.svg'"
           :placeholder="'Password'"
           :value.sync="newPassword" />
    <InputReset :color="'#FF4654'" />
  </div>
  <button class="btn btn-confirm profile_confirm" type="submit" @click.prevent="SaveChanges">
    <span class="inner">Save changes</span>
  </button>
</form>
</template>

<script>
import Title from "../../components/elements/Title";
import Input from "../../components/elements/Input";
import InputPassword from "../../components/elements/InputPassword";
import InputReset from "../../components/elements/InputReset";

export default {
  name: "Profile",
  components: { Title, Input, InputPassword, InputReset },
  data() {
    return {
      currentUserName: '',
      currentPassword: '',
      newPassword: '',
    }
  },
  mounted() {
    this.currentUserName = this.$store.state.CURRENT_USER.userName
    this.currentPassword = this.$store.state.CURRENT_USER.password
  },
  methods: {
    SaveChanges() {
      let user = {};
      user.password = this.newPassword;
      user.userName = this.userName;
      this.$store.dispatch('UpdateUser', user);
    }
  }
}
</script>

<style lang="scss">
.profile {
  max-width: 390px;
  margin: 0 auto;
  &_input {
    width: 280px;
    margin: 0 auto 50px;
    @media screen and (max-width: 640px) {
      width: 210px;
    }
    .input {
      &:not(:last-of-type) {
        margin-bottom: 24px;
        @media screen and (max-width: 640px) {
          margin-bottom: 20px;
        }
      }
    }
  }
  &_confirm {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    @media screen and (max-width: 640px) {
      max-width: 210px;
    }
  }
}
</style>