import Producto from "../models/Producto";

export default {
    namespaced: true,
    state: {
        productos: [new Producto(0), new Producto(1), new Producto(2), new Producto(3), new Producto(4)]
    }
}