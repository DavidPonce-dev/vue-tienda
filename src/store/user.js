import { loginSvc, registerSvc, checkTokenSvc } from '../services/user'
import User from "../models/User.js";

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, data) {
      const user = await loginSvc(data);
      const logged = new User(user);
      commit("setUser", logged);
      return user.token;
    },
    async loadToken({ commit }, token) {
      const user = await checkTokenSvc(token);
      commit("setUser", user);
    },
    async register() {
      await registerSvc();
    },
    async logout({ commit }) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      commit("setUser", null);
    },
  },
};
