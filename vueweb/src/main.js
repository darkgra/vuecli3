import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";
import helper from "./lib/helper";

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import "./lib/hotcss/hotcss.js";
Vue.config.productionTip = false;
Vue.use(VeeValidate);

router.beforeEach((to, from, next) => {
  //路由的全局守卫
  if (to.path != "/") {
    if (helper.gettype(store.getters.getloginuser) === "Object") {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
