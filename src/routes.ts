import Vue from "vue";
import VueRouter, {Route, RouteConfig} from "vue-router";

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
  }
];

const router = new VueRouter({
  routes,
});

export default router;


export function routeToText(route: Route): string {
  switch (route.name) {
    case "ROUTE_COFFEE_BREW_METHOD":
      return "SELECT BREW METHOD"
    case "ROUTE_COFFEE_STRENGTH":
      return "SELECT STRENGTH"
    case "ROUTE_COFFEE_AMOUNT":
      return "HOW MANY CUPS"
    default:
      return ""
  }
}
