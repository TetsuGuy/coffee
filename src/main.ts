import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./routes"
import store from "./store";

Vue.config.productionTip = false;

import "./style.scss"

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
