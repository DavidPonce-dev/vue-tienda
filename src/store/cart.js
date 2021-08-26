export default {
  namespaced: true,
  state: {
    carrito: [],
  },
  mutations: {
    addToCart(state, producto) {
      const { carrito } = state;
      const { hasOwnProperty } = Object.prototype;
      const { id } = producto

      if (hasOwnProperty.call(carrito, id)) {
        carrito[id].cantidad += 1
      } else {
        producto.cantidad = 1
        carrito[id] = producto;
      }
      state.carrito = [...carrito]
    },
  },
  actions: {
    addToCart({ commit }, producto) {
      commit("addToCart", producto);
    },
  },
};
