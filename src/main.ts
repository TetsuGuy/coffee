import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./routes"
import store from "./store";

Vue.config.productionTip = false;

import "./style.scss"

import vuetify from './plugins/vuetify';

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
