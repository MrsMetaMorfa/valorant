<template>
<div class="promocode container">
  <label class="promocode_input">
    <input type="text" name="promocode" placeholder="Promo code" v-model="code">
  </label>
  <button class="promocode_apply btn" type="button" @click="Apply">Apply</button>
</div>
</template>

<script>
import { mapMutations} from 'vuex';

export default {
  name: "Promocode",
  data() {
    return {
      code: this.$store.state.ORDER.promocode
    }
  },
  methods: {
    ...mapMutations(['UpdatePromocode']),
    Apply() {
      this.UpdatePromocode(this.code);
    }
  }
}
</script>

<style lang="scss">
.promocode {
  margin: 0 auto;
  width: 240px;
  @media screen and (max-width: 1239px) {
    width: 19.35vw;
  }
  @media screen and (max-width: 800px) {
    width: 188px;
  }
  &_input {
    display: block;
    width: 140px;
    background: transparent url("../../assets/images/140x30.svg") no-repeat top left / 100%;
    @media screen and (max-width: 1239px) {
      width: 11.29vw;
    }
    @media screen and (max-width: 800px) {
      width: 188px;
    }
    input {
      padding: 6px 20px;
      margin: 0;
      display: block;
      width: 100%;
      border: none;
      outline: none;
      text-align: center;
      background: transparent;
      color: #FFF;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.357;
      @media screen and (max-width: 1239px) {
        font-size: 1.13vw;
        padding: .48vw 1.61vw;
      }
      @media screen and (max-width: 800px) {
        padding: 4px 10px;
        font-size: 12px;
      }
    }
  }
  &_apply {
    display: block;
    width: 100px;
    background: transparent url("../../assets/images/100x30.svg") no-repeat top left / 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.3;
    font-family: Rajdhani, sans-serif;
    padding: 2px 8px;
    color: #471216;
    @media screen and (max-width: 1239px) {
      width: 8.06vw;
      font-size: 1.161vw;
      padding: .16vw .65vw;
    }
    @media screen and (max-width: 800px) {
      width: 77px;
      min-width: 77px;
      font-size: 13px;
      padding: 4px;
    }
    &:hover, &:focus {
      color: #FFF;
    }
  }
}
</style>