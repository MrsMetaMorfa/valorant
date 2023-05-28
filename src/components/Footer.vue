<template>
  <footer class="footer">
    <div class="footer_info">
      <div class="footer_column">
        <h2 class="footer_title">Paymant Methods</h2>
        <p class="footer_text">By purchasing on Boosting, you are agreeing to our Terms of Service. Please also read our Privacy Policy and Refund Policy.</p>
        <div class="footer_logos container">
          <div class="footer_logo">
            <img :src="`${'/assets/images/Mastercard-logo.svg'}`" alt="Mastercard">
          </div>
          <div class="footer_logo">
            <img :src="`${'/assets/images/paypal-logo.svg'}`" alt="Paypal">
          </div>
          <div class="footer_logo">
            <img :src="`${'/assets/images/visa-logo.svg'}`" alt="Visa">
          </div>
        </div>
      </div>
      <div class="footer_column">
        <h2 class="footer_title">Contact</h2>
        <p class="footer_text">Need help, or have a specific request for us? Feel free to start a live chat with us or send us an email.</p>
      </div>
      <div class="footer_column">
        <h2 class="footer_title">Jobs</h2>
        <p class="footer_text">Looking for a job? Check out our open positions here.</p>
      </div>
    </div>
    <hr class="footer_line" />
    <p class="footer_copyright">This website is not endorsed or in any way affiliated with Activision Inc, Electronic Arts Inc, Valve Corporation, Riot Games Inc, Respawn Entertainment or Epic Games and does not reflect the views or opinions of the aforementioned entities or anyone officially involved in producing or managing Call of Duty Franchise, League of Legends, Teamfight Tactics, Dota 2, Apex Legends or Valorant.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
  .footer {
    background: transparent linear-gradient(0deg, rgba(19, 29, 41, 0.42) 87.91%, rgba(19, 29, 41, 0) 100%);
    padding: 38px 135px 68px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.357;
    @media screen and (max-width: 1239px) {
      font-size: 1.13vw;
      padding: 3.06vw 0 5.48vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 10px;
      padding: 18px 0 18px;
      max-width: 600px;
      margin: 0 auto;
    }
    &_info {
      margin-bottom: 33px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;
      @media screen and (max-width: 1239px) {
        grid-gap: 2.42vw;
      }
      @media screen and (max-width: 800px) {
        grid-gap: 24px;
        grid-template-columns: 1fr;
      }
    }
    &_title {
      font-weight: bold;
      font-size: 24px;
      line-height: 1.292;
      text-transform: uppercase;
      margin: 0 0 12px;
      @media screen and (max-width: 1239px) {
        font-size: 1.94vw;
      }
      @media screen and (max-width: 800px) {
        font-size: 20px;
        margin-bottom: 6px;
      }
    }
    &_text {
      margin: 0 0 16px;
    }
    &_logos {}
    &_logo {
      margin-right: 12px;
      @media screen and (max-width: 1239px) {
        margin-right: .97vw;
      }
      @media screen and (max-width: 800px) {
        margin-right: 10px;
      }
    }
    &_line {
      border: 1px solid #FF4654;
      margin: 0 0 31px;
      @media screen and (max-width: 800px) {
        margin-bottom: 20px;
      }
    }
    &_copyright {
      text-align: center;
      margin: 0;
    }
  }
</style>