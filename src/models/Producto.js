export default class Producto {
  constructor(
    id = 0,
    nombre = "",
    fotos = [],
    descripcion = "",
    rating = 0,
    precio = 0,
    descuento = 0
  ) {
    (this.id = id),
    (this.nombre = nombre),
    (this.fotos = fotos),
    (this.descripcion = descripcion),
    (this.rating = rating),
    (this.precio = precio),
    (this.descuento = descuento);
  }
}
