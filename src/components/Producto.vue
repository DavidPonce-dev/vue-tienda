<template>
  <v-card elevation="2" max-width="374" class="mx-auto my-md-12 my-sm-5">
    <v-carousel height="250" v-if="typeof producto.imagen === 'object'">
      <v-carousel-item v-for="(imagen, i) in producto.imagen" :key="i">
        <v-sheet color="primary" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-img height="100%" :src="imagen" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-img v-else height="250" :src="producto.imagen" />

    <v-card-title>
      {{ producto.nombre }}
      <div v-if="producto.stock > 0" class="ms-auto text-subtitle-1">
        {{ producto.stock }} en stock}
      </div>
      <div v-else class="ms-auto text-subtitle-1">no hay stock</div>
    </v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="producto.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">{{ producto.rating }} ({{producto.cantEvaluado}})</div>
      </v-row>

      <div
        class="mt-4 text-subtitle-1"
        :class="producto.descuento > 0 ? 'descuento-aplicado' : ''"
      >
        $ {{ producto.precio }}
      </div>
      <div v-if="producto.descuento > 0" class="mb-4 text-subtitle-1">
        $ {{ producto.precio - producto.descuento }}
      </div>
      {{producto.descripcion}}
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="mx-auto"
        color="primary"
        rounded
        @click="addToCart(producto)"
        :disabled="producto.stock <= 0"
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
    ...mapActions("cart", ["addToCart"]),
  },
};
</script>

<style scoped>
.descuento-aplicado {
  color: red;
  text-decoration: line-through;
}
</style>