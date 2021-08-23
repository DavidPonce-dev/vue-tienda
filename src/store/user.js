//pseudo llamada a un servidor que no existe
const userList = [
  {
    email: "asd@asd.asd",
    password: "asdasdasd",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJhc2RAYXNkLmFzZCIsIm5hbWUiOiJKaG9uIFNtaXRoIn0.sbFoY_efcpAm1DgLGuLmC04RGayffKtIxQUrHhp-IDU",
  },
  {
    email: "qwe@asd.asd",
    password: "qweqweqwe",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JyZW8iOiJxd2VAYXNkLmFzZCIsIm5hbWUiOiJxd2Vxd2UifQ.qCPyUQq_9pXOzi9qUwprQmlkn88wnIFBe_OVE-RRoK8",
  },
];

const runLogin = ({ email, password }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      for (const userOfList of userList) {
        if (userOfList.email == email && userOfList.password == password) {
          res({ email: userOfList.email, token: userOfList.token });
        }
        rej(new Error("Error en los datos ingresados"));
      }
    }, 1000);
  });
};

const runRegister = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
};

const fetchToken = (token) => {
  return new Promise((res, rej) => {
    for (const userOfList of userList) {
      if (userOfList.token == token) {
        res({ email: userOfList.email, token: userOfList.token });
      }
    }
    rej(new Error("La sesion ha expirado"));
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
      return user.token;
    },
    async loadToken({ commit }, token) {
      const user = await fetchToken(token);
      commit("setUser", user);
    },
    async register() {
      await runRegister();
    },
    async logout({ commit }) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      commit("setUser", null);
    },
  },
};
