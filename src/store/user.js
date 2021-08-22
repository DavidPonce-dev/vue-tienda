//pseudo llamada a un servidor que no existe
const runLogin = ({ email, password }) => {
  const userList = [
    { email: "asd@asd.asd", password: "asdasdasd" },
    { email: "qwe@asd.asd", password: "qweqweqwe" },
  ];
  return new Promise((res, rej) => {
    setTimeout(() => {
      for (const userOfList of userList) {
        if (userOfList.email == email && userOfList.password == password) {
          res({ email });
        }
        rej(new Error("Error en los datos ingresados"));
      }
    }, 1000);
  });
};

const runRegister = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
      rej();
    }, 1000);
  });
};

//desde aqui el codigo "real"
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
      const user = await runLogin(data);
      const logged = new User(user);
      commit("setUser", logged);
    },
    async register() {
      await runRegister()
    },
    async logout({ commit }) {
      commit("setUser", null);
    },
  },
};
