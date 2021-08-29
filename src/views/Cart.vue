<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <ProductoCarrito
          v-for="producto in productos"
          :key="producto.id"
          :producto="producto"
        />
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title primary-title> Resumen del pedido </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ProductoCarrito from "../components/ProductoCarrito";
export default {
  components: {
    ProductoCarrito,
  },
  data() {
    return {
      productos: [],
    };
  },
  methods: {
    load () {
      this.productos = this.carrito.filter((producto) => producto != undefined);
    }
  },
  computed: {
    ...mapState("cart", ["carrito"]),
  },
  mounted() {
    this.load();
  },
  watch: {
    carrito() {
      this.load()
    }
  }
};
</script>
