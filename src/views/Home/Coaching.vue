<template>
  <section class="rank-boost grid main_inner">
    <h1 class="visibility-hidden">Rank Boost</h1>
    <div class="rank-boost_column grid_column">
      <UserOrderShort />
    </div>
    <div class="rank-boost_column grid_column">
      <Servers />
      <OrderCoaching />
      <div class="coach-list">
        <Title :title="'Coach'" />
        <div class="coach-list_wrapper">
          <Coach v-for="info in coachList" :key="info.id" :info="info" :current-id.sync="currentCoachID" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserOrderShort from "../../components/UserOrderShort";
import Servers from "../../components/Servers";
import OrderCoaching from "../../components/OrderCoaching";
import Title from "../../components/elements/Title";
import Coach from "../../components/Coach";

export default {
  name: "Coaching",
  components: {
    UserOrderShort, Servers, OrderCoaching, Title, Coach
  },
  data() {
    return {
      coachList: [
        {
          id: 0,
          name: 'LegendWho',
          label: 'Radiant',
          description: "I'm a Radiant player with ton of previous FPS Experience. I will point out and help you fix your mistakes, bad habits and give you aiming tips specific to you for your improvement.",
          price: '$25',
          language: 'English, Russian',
          server: {
            "id": "eu2",
            "title": "EU"
          }
        },
        {
          id: 1,
          name: 'LegendWho',
          label: 'Radiant',
          description: "I'm a Radiant player with ton of previous FPS Experience. I will point out and help you fix your mistakes, bad habits and give you aiming tips specific to you for your improvement.",
          price: '$25',
          language: 'English, Russian',
          serverId: 'eu2',
          server: {
            "id": "eu2",
            "title": "EU"
          }
        }
      ],
      currentCoachID: ''
    }
  }
}
</script>

<style lang="scss">
.coach-list {
  margin-top: 65px;
  @media screen and (max-width: 1239px) {
    margin-top: 5.24vw;
  }
  @media screen and (max-width: 800px) {
    margin-top: 70px;
  }
  &_wrapper {
    display: grid;
    grid-gap: 18px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1239px) {
      grid-gap: 1.45vw;
    }
    @media screen and (max-width: 800px) {
      grid-gap: 20px;
    }
    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }
}
</style>