import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "ROUTE_COFFEE_BREW_METHOD",
    component: () => import(/* webpackChunkName: "coffee" */ "./views/BrewMethod.vue"),
  },
  {
    path: "/strength",
    name: "ROUTE_COFFEE_STRENGTH",
    component: () => import(/* webpackChunkName: "coffee" */ "./views/Strength.vue"),
  },
  {
    path: "/amount",
    name: "ROUTE_COFFEE_AMOUNT",
    component: () => import(/* webpackChunkName: "coffee" */ "./views/CupSelection.vue"),
  },
  {
    path: "/amount",
    name: "ROUTE_COFFEE_RESULT",
    component: () => import(/* webpackChunkName: "coffee" */ "./views/Result.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
