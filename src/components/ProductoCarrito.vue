<template>
  <v-card class="mb-4">
    <v-card-title primary-title>
      {{ producto.nombre }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    producto: {
      required: true,
    },
  },
};
</script>

<style>
</style>