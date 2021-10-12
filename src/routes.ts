import Vue from "vue";
import VueRouter, {Route, RouteConfig} from "vue-router";

Vue.use(VueRouter);
export const ROUTE_COFFEE_BREW_METHOD = "ROUTE_COFFEE_BREW_METHOD"
export const ROUTE_COFFEE_STRENGTH = "ROUTE_COFFEE_STRENGTH"
export const ROUTE_COFFEE_AMOUNT = "ROUTE_COFFEE_AMOUNT"
export const ROUTE_COFFEE_RESULT = "ROUTE_COFFEE_RESULT"

const routes: RouteConfig[] = [
  {
    path: "/",
    name: ROUTE_COFFEE_BREW_METHOD,
    component: () => import(/* webpackChunkName: "coffee" */ "./views/BrewMethod.vue"),
  },
  {
    path: "/strength",
    name: ROUTE_COFFEE_STRENGTH,
    component: () => import(/* webpackChunkName: "coffee" */ "./views/Strength.vue"),
  },
  {
    path: "/amount",
    name: ROUTE_COFFEE_AMOUNT,
    component: () => import(/* webpackChunkName: "coffee" */ "./views/CupSelection.vue"),
  },
  {
    path: "/result",
    name: ROUTE_COFFEE_RESULT,
    component: () => import(/* webpackChunkName: "coffee" */ "./views/Result.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;


export function getTextFromRoute(route: Route): string {
  switch (route.name) {
    case ROUTE_COFFEE_BREW_METHOD:
      return "SELECT BREW METHOD"
    case ROUTE_COFFEE_STRENGTH:
      return "SELECT STRENGTH"
    case ROUTE_COFFEE_AMOUNT:
      return "HOW MANY CUPS"
    default:
      return ""
  }
}
