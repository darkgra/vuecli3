import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginuser: sessionStorage.getItem("loginuser")
      ? JSON.parse(sessionStorage.getItem("loginuser"))
      : null
  },
  mutations: {
    inituser(state, payload) {
      state.loginuser = payload;
    }
  },
  actions: {},
  getters: {
    getloginuser(state) {
      return state.loginuser;
    }
  }
});
