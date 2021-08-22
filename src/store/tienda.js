import Producto from "../models/Producto";

const productoEjemplo = new Producto({
  id:0,
  nombre:"Cafe Badilico",
  imagen:"https://cdn.vuetifyjs.com/images/cards/cooking.png",
  descripcion:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
  rating:4.5,
  cantEvaluado:15,
  stock:20,
  precio:2000,
  descuento:0
});

export default {
  namespaced: true,
  state: {
    productos: [
      productoEjemplo,
      { ...productoEjemplo, id: 1, stock: 0, rating: 2.5, descuento: 500 },
      { ...productoEjemplo, id: 2, descuento: 1000 },
      {
        ...productoEjemplo,
        id: 3,
        imagen: [
          "https://i0.wp.com/esferacreativa.com/wp-content/uploads/2017/05/fichas-tecnicas-de-productos-ecommerce-Teresa-Alba-MadridNYC.png?w=640&ssl=1",
          "https://www.ecommercenews.pe/wp-content/uploads/2017/07/tienda-online-1024x512.png",
        ],
      },
      { ...productoEjemplo, id: 4 },
      { ...productoEjemplo, id: 5 },
    ],
  },
};
