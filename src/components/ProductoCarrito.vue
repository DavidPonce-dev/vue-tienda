<template>
  <v-card class="mb-4 d-flex" height="140px" max-width="766px">
    <v-img :src="imagen" max-width="140px" />
    <div class="d-block">
      <v-card-title primary-title>
        {{ producto.nombre }}
      </v-card-title>
      <v-card-text>
        cantidad: 
        <v-btn-toggle rounded>
          <v-btn small @click="remToCart(producto)">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn small disabled>
            <h3>{{producto.cantidad}}</h3>
          </v-btn>
          <v-btn small @click="addToCart(producto)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    producto: {
      required: true,
    },
  },
  methods: mapActions("cart", ["addToCart", "remToCart"]),
  computed: {
    imagen() {
      const { imagen } = this.producto;
      if (typeof imagen == "object") return imagen[0];
      return imagen;
    },
  },
};
</script>

<style>
</style>