import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RankBoost from "../views/Home/RankBoost";
import Placement from "../views/Home/Placement";
import SoloDuoGames from "../views/Home/SoloDuoGames";
import Coaching from "../views/Home/Coaching";
import Profile from "../views/User/Profile";
import Settings from "../views/User/Settings";
import Orders from "../views/User/Orders";
import Order from "../views/User/Order";
import Recent from "../views/Home/Recent";
import Reviews from "../views/Home/Reviews";

import Dashboard from "../views/Dashboard";
import DashboardClear from "../views/Dashboard/Clear";
import DashboardOrder from "../views/Dashboard/Order";
import DashboardOrders from "../views/Dashboard/Orders";
import DashboardReviews from "../views/Dashboard/Reviews";

Vue.use( VueRouter )

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: RankBoost
      },
      {
        path: 'placement',
        component: Placement
      },
      {
        path: 'solo-duo',
        component: SoloDuoGames
      },
      {
        path: 'coaching',
        component: Coaching
      },
      {
        path: 'recent',
        component: Recent
      },
      {
        path: 'reviews',
        component: Reviews
      },
      {
        path: 'user/profile',
        component: Profile
      },
      {
        path: 'user/settings',
        component: Settings
      },
      {
        path: 'user/orders',
        component: Orders
      },
      {
        path: 'user/order/:id',
        name: 'order',
        component: Order
      },
    ]
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '/',
        component: DashboardClear
      },
      {
        path: 'order/:id',
        name: 'dashboardOrder',
        component: DashboardOrder
      },
      {
        path: 'orders',
        component: DashboardOrders
      },
      {
        path: 'reviews',
        component: DashboardReviews
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
