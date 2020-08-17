import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'ROUTE_COFFEE_HOME',
    component: () => import(/* webpackChunkName: "coffee" */ '../views/Home.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
