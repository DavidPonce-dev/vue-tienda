<template>
  <v-container>
    <h1>Vista Tienda</h1>
    <v-row>
      <v-col
        v-for="producto in productos"
        :key="producto.id"  
        md="4"
      >
        <Producto :producto="producto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Producto from "../components/Producto.vue";
export default {
  components: {
    Producto,
  },
  computed: {
    ...mapState('tienda', ['productos'])
  }
};
</script>
