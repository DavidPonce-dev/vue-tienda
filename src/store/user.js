//pseudo llamada a un servidor que no existe

const userList = [
  { email: "asd@asd.asd", password: "asdasdasd" },
  { email: "qwe@asd.asd", password: "qweqweqwe" },
];

const runLogin = ({ email, password }) => {
  return new Promise((res, rej) => {
    for (const once of userList) {
      if (once.email == email && once.password == password) res({email});
    }
    rej(new Error("Error en los datos ingresados"));
  });
};

//desde aqui el codigo "real"

import User from '../models/User.js'

export default {
  namespaced: true,
  state:{
    user: null
  }
  ,
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, data) {
      try {
          const user = await runLogin(data)
          commit('setUser', new User(user))
      } catch (error) {
          console.log(error)
      }
    },
    async logout({ commit }) {
      commit("setUser", null);
    },
  },
};
