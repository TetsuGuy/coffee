import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./routes"
import store from "./store"
import PushButton from "./components/PushButton.vue"
Vue.config.productionTip = false;

import "./style/crt.scss"
import "./style/metal.scss"
import "./style.scss"

Vue.component("PushButton", PushButton)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
