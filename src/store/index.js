import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import tienda from './tienda'
import cart from './cart'
import error from './error'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    tienda,
    error,
    cart
  }
})
