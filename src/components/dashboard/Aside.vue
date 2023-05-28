<template>
<div class="aside">
  <ul class="aside_orders" v-if="orders">
    <li class="aside_order" v-for="order in orders" :key="order.id">
      <router-link :to="{name: 'dashboardOrder', params: { type: 'active', id: order.id }}" class="btn btn-link">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5.5L8 12.5L16 2" stroke="#2EFDC5" stroke-width="4"/>
        </svg>
        <span>#{{ order.id }}</span>
      </router-link>
    </li>
  </ul>

  <ul class="aside_menu">
    <li class="aside_menu-item">
      <router-link class="aside_menu-link btn"
                   to="/dashboard/orders">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.39999 0.700195H12.6V13.3002H1.39999V0.700195ZM4.19997 3.5C4.19997 3.8866 3.88657 4.2 3.49997 4.2C3.11337 4.2 2.79997 3.8866 2.79997 3.5C2.79997 3.1134 3.11337 2.8 3.49997 2.8C3.88657 2.8 4.19997 3.1134 4.19997 3.5ZM3.49997 7.7C3.88657 7.7 4.19997 7.3866 4.19997 7C4.19997 6.6134 3.88657 6.3 3.49997 6.3C3.11337 6.3 2.79997 6.6134 2.79997 7C2.79997 7.3866 3.11337 7.7 3.49997 7.7ZM4.19997 10.5C4.19997 10.8866 3.88657 11.2 3.49997 11.2C3.11337 11.2 2.79997 10.8866 2.79997 10.5C2.79997 10.1134 3.11337 9.8 3.49997 9.8C3.88657 9.8 4.19997 10.1134 4.19997 10.5ZM11.2 2.8H4.89997V4.2H11.2V2.8ZM4.89997 6.3H11.2V7.7H4.89997V6.3ZM11.2 9.8H4.89997V11.2H11.2V9.8Z" fill="white"/>
        </svg>
        <span>Orders</span>
      </router-link>
    </li>
    <li class="aside_menu-item">
      <router-link class="aside_menu-link btn"
                   to="/dashboard/reviews">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L9.25886 3.89095L13.6574 4.83688L10.6549 8.18755L11.1145 12.6631L7 10.843L2.8855 12.6631L3.34509 8.18755L0.342604 4.83688L4.74114 3.89095L7 0Z" fill="white"/>
        </svg>
        <span>Reviews</span>
      </router-link>
    </li>
    <li class="aside_menu-item">
      <router-link class="aside_menu-link btn"
                   to="/dashboard">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.39999" y="6.2998" width="11.2" height="7" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.79997 2.1001H1.39999V5.6001H12.6V2.1001H11.2V4.20049H8.39997V2.1001H5.59997V4.20049H2.79997V2.1001Z" fill="white"/>
          <rect x="3.5" y="0.700195" width="1.4" height="2.8" fill="white"/>
          <rect x="9.10001" y="0.700195" width="1.4" height="2.8" fill="white"/>
        </svg>
        <span>Balance History</span>
      </router-link>
    </li>
    <li class="aside_menu-item">
      <router-link class="aside_menu-link btn"
                   to="/dashboard">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.57411 6.35961C8.02473 6.05601 7.44065 5.82469 6.86236 5.5847C6.52695 5.44591 6.206 5.28399 5.92263 5.05845C5.36458 4.61317 5.47157 3.8903 6.12504 3.60405C6.31009 3.52309 6.50382 3.49706 6.70044 3.4855C7.458 3.44502 8.17798 3.58381 8.86325 3.91344C9.20445 4.07825 9.31721 4.0262 9.43287 3.67055C9.55431 3.29466 9.65551 2.91299 9.76828 2.53421C9.84346 2.27976 9.75093 2.11205 9.51094 2.00507C9.07144 1.81134 8.62037 1.67255 8.14617 1.59737C7.5274 1.50195 7.5274 1.49906 7.52451 0.877399C7.52161 0.00128508 7.52161 0.0012851 6.64261 0.0012851C6.51538 0.0012851 6.38816 -0.00160637 6.26094 0.0012851C5.85035 0.012851 5.78095 0.0851375 5.76939 0.498617C5.7636 0.683671 5.76939 0.868724 5.7665 1.05667C5.7636 1.60605 5.76071 1.59737 5.23447 1.78821C3.96222 2.25084 3.17574 3.11828 3.09189 4.50619C3.01671 5.73506 3.65862 6.56491 4.66774 7.16922C5.2894 7.54222 5.97757 7.76197 6.63683 8.05401C6.89417 8.16678 7.13994 8.2969 7.35391 8.47617C7.98714 8.99952 7.87148 9.86985 7.1197 10.1995C6.71779 10.3759 6.29274 10.4192 5.85613 10.3643C5.18242 10.2804 4.53762 10.1041 3.93042 9.78889C3.57477 9.60384 3.47067 9.65299 3.34923 10.0376C3.24514 10.3701 3.15261 10.7055 3.06009 11.0409C2.93575 11.492 2.98202 11.5989 3.41284 11.81C3.96222 12.076 4.54919 12.2119 5.14772 12.3074C5.61614 12.3825 5.6306 12.4028 5.63638 12.8885C5.63927 13.1083 5.63927 13.3309 5.64216 13.5507C5.64505 13.8283 5.77806 13.9902 6.06432 13.996C6.38816 14.0018 6.71489 14.0018 7.03874 13.9931C7.30475 13.9873 7.44065 13.8427 7.44065 13.5738C7.44065 13.2731 7.45511 12.9695 7.44354 12.6688C7.42909 12.3623 7.56209 12.2062 7.85702 12.1252C8.53652 11.9401 9.11481 11.5758 9.5601 11.0322C10.7976 9.52866 10.3263 7.32825 8.57411 6.35961Z" fill="white"/>
        </svg>
        <span>Payouts</span>
      </router-link>
    </li>
    <li class="aside_menu-item">
      <router-link class="aside_menu-link btn"
                   to="/dashboard">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45654 9.08912V11.1941L6.66702 13.2993L10.8775 11.1941V9.08887L6.66684 11.1942L2.45654 9.08912Z" fill="white"/>
          <path d="M6.66693 3.29988L13.2999 6.64992L6.66693 9.96643L1.40067e-05 6.64992L6.66693 3.29988Z" fill="white"/>
          <path d="M12.6 6.6499H13.3V10.4999H12.6V6.6499Z" fill="white"/>
          <circle cx="12.95" cy="10.1501" r="1.04999" fill="white"/>
        </svg>
        <span>Rules</span>
      </router-link>
    </li>
  </ul>

</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Aside",
  computed: {
    ...mapGetters({
      ordersAll: 'getCurrentUserOrders'
    })
  },
  data() {
    return {
      orders: []
    }
  },
  watch: {
    ordersAll: function () {
      this.orders = this.ordersAll.active
    }
  }
}
</script>

<style lang="scss"></style>