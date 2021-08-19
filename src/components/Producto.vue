<template>
  <v-card elevation="2" max-width="374" class="mx-auto my-md-12 my-sm-5">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    />

    <v-card-title
      >Cafe Badilico
      <div class="ms-auto text-subtitle-1">25 en stock</div>
    </v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5 (413)</div>
      </v-row>

      <div class="mt-4 text-subtitle-1">$ 2.500</div>
      <div class="mb-4 text-subtitle-1">$ 2.000</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="mx-auto"
        color="primary"
        rounded
        @click="addProducto(producto)"
      >
        Agregar al carrito
      </v-btn>
    </v-card-actions>
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
  methods: {
    ...mapActions("cart", ["addProducto"]),
  },
};
</script>

<style>
</style>