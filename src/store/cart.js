export default {
    namespaced: true,
    state: {
        productos: []
    },
    mutations:{
        addProducto (state, producto) {
            state.productos.push(producto)
        }
    },
    actions:{
        addProducto ({commit}, producto) {
            commit('addProducto', producto)
        }
    }
}