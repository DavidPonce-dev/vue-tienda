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
        carrito[id].cantidad ++
      } else {
        producto.cantidad = 1
        carrito[id] = producto;
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
