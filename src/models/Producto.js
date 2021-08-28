export default class Producto {
  constructor({
    id = 0,
    nombre = "",
    imagen = [],
    descripcion = "",
    rating = 0,
    cantidad = 0,
    stock = 0,
    cantEvaluado = 0,
    precio = 0,
    descuento = 0,
  }) {
    (this.id = id),
      (this.nombre = nombre),
      (this.imagen = imagen),
      (this.cantidad = cantidad),
      (this.descripcion = descripcion),
      (this.rating = rating),
      (this.stock = stock),
      (this.cantEvaluado = cantEvaluado),
      (this.precio = precio),
      (this.descuento = descuento);
  }
}
