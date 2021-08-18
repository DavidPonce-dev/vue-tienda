<template>
  <v-app-bar app color="dark" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Store Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <h2>Tienda onLine</h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/">
      <span class="mr-2">Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/cart">
      <span class="mr-2">Carrito</span>
      <v-icon>mdi-cart</v-icon>
      <span class="cantidad" v-if="productos.length > 0">{{productos.length}}</span>
    </v-btn>

    <v-btn v-if="user != null" to="/user">
      <span class="mr-2">Cuenta</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <div v-else>
      <v-btn to="/login">
        <span class="mr-2">Iniciar sesion</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>

      <v-btn to="/register">
        <span class="mr-2">Registrarse</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState('user', ['user']),
		...mapState('cart', ['productos']),
	}
}
</script>
