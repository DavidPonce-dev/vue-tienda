export default {
  namespaced: true,
  state: {
    carrito: [],
  },
  mutations: {
    addToCart(state, producto) {
      const { carrito } = state;
      const { id } = producto

      if (typeof carrito[id] == 'undefined') {
        producto.cantidad = 1
        carrito[id] = producto;
      } else {
        carrito[id].cantidad ++
      }
      state.carrito = [...carrito]
    },

    remToCart(state, producto) {
      const { carrito } = state;
      const { id } = producto

      if (carrito[id].cantidad > 1){
        carrito[id].cantidad --
      }else{
        delete carrito[id]
      }

      state.carrito = [...carrito]
    },
  },
  actions: {
    addToCart({ commit }, producto) {
      commit("addToCart", producto);
    },
    remToCart({ commit }, producto) {
      commit("remToCart", producto);
    },
  },
};
