<template>
  <v-container>
    <v-card max-width="500px" :loading="loading" class="mx-auto mt-5">
      <v-card-title primary-title> Inicio de sesion </v-card-title>
      <form @submit.prevent="submit">
        <v-text-field
          name="email"
          label="Correo electronico"
          v-model="email"
          class="mx-4"
        />
        <v-text-field
          name="password"
          label="Contraseña"
          v-model="password"
          class="mx-4"
        />
        <v-checkbox
          label="Mantener sesion inicidada"
          v-model="checkbox"
          class="mx-2"
        />
        <v-btn color="success" type="submit" class="ms-2 mb-4">Enviar</v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      checkbox: false,
      loading: true,
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    ...mapActions("error", ["throwErrorMsg"]),

    submit() {
      const { email, password } = this;
      this.loading = true;
      this.login({ email, password })
        .then(() => this.$router.push('/'))
        .catch((error) => {this.throwErrorMsg(error)})
        .finally(() => this.loading = false);
    },
  },
};
</script>
