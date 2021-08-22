export default {
  namespaced: true,
  state: {
    errorMsg: "",
    tout: null,
  },
  mutations: {
    throwErrorMsg(state, message) {
      state.errorMsg = message;

      clearTimeout(state.tout);
      state.tout = setTimeout(() => {
        state.errorMsg = "";
      }, 3000);
    },
  },
  actions: {
    throwErrorMsg({ commit }, message) {
      commit("throwErrorMsg", message);
    },
  },
};
