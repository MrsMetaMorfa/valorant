<template>
  <div class="payment-due block">
    <h3 class="block_title payment-due_title text-center"><mark>Payment due -</mark> <strong>{{ paymentDue }}</strong></h3>
    <div class="payment-due_list">
      <button class="btn payment-due_button" type="button"
              v-for="(item, index) in paymentList" :key="index">
        <span class="payment-due_button-icon"></span>
        <mark class="payment-due_button-title text-center">{{ item.title }}</mark>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentDue",
  data() {
    return {
      paymentDue: "28.35 UDS",
      paymentList: [
        { title: 'Card payment' },
        { title: 'PayPal or card payment' },
        { title: 'Cryptocurrency' }
      ]
    }
  }
}
</script>

<style lang="scss">
.payment-due {
  margin-bottom: 30px;
  padding: 42px 30px;
  @media screen and (max-width: 1239px) {
    margin-bottom: 2.42vw;
    padding: 3.39vw 2.42vw;
  }
  @media screen and (max-width: 800px) {
    padding: 30px 49px;
  }
  @media screen and (max-width: 640px) {
    padding: 20px;
  }
  &_title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.292;
    @media screen and (max-width: 1239px) {
      font-size: 1.94vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 18px;
    }
  }
  &_list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    @media screen and (max-width: 1239px) {
      grid-gap: 2.42vw;
    }
    @media screen and (max-width: 800px) {
      grid-gap: 18px;
    }
    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
  &_button {
    margin-bottom: auto;
    &-icon {
      display: block;
      width: 100%;
      min-height: 50px;
      background: rgba(255, 70, 84, 0.2);
      border-radius: 58px;
      margin: 0 auto 16px;
      max-width: 160px;
      @media screen and (max-width: 1239px) {
        min-height: 4.03vw;
        margin-bottom: 1.29vw;
      }
      @media screen and (max-width: 800px) {
        min-height: 40px;
        margin-bottom: 6px;
        max-width: 128px;
      }
    }
    &-title {
      font-weight: 500;
      font-size: 14px;
      line-height: 1.357;
      @media screen and (max-width: 1239px) {
        font-size: 1.13vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 12px;
      }
    }
  }
}
</style>