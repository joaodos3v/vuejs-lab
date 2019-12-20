import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Porfolio from "../views/Porfolio.vue"
import Stocks from "../views/Stocks.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Porfolio
  },
  {
    path: "/stocks",
    name: "stocks",
    component: Stocks
  },


  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
