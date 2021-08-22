<template>
  <v-container>
    <v-card max-width="500px" :loading="loading" class="mx-auto mt-5">
      <v-card-title primary-title> Registro </v-card-title>
      <form @submit.prevent="submit">
        <div v-if="step == 1">
          <h4 class="ms-4">Informacion personal</h4>
          <v-text-field label="Nombre" v-model="nombre" class="mx-4" />
          <v-text-field label="Apellido" v-model="apellido" class="mx-4" />
          <v-text-field label="Email" v-model="email" class="mx-4" />
          <v-row justify="end">
            <v-spacer></v-spacer>
            <v-btn color="success" @click.prevent="nextStep" class="me-10 my-6"
              >Siguiente</v-btn
            >
          </v-row>
        </div>
        <div v-if="step == 2">
          <h4 class="ms-4">Contraseña</h4>
          <v-text-field label="Contraseña" v-model="password" class="mx-4" />
          <v-text-field
            label="Repetir contraseña"
            v-model="repeat"
            class="mx-4"
          />
          <v-row justify="end">
            <v-btn color="info" @click.prevent="lastStep" class="ms-10 my-6"
              >Anterior</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn color="success" @click.prevent="nextStep" class="me-10 my-6"
              >Siguiente</v-btn
            >
          </v-row>
        </div>
        <div v-if="step == 3">
          <v-row justify="end">
            <v-btn color="info" @click.prevent="lastStep" class="ms-10 my-6"
              >Anterior</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn color="success" type="success" class="me-10 my-6"
              >Enviar</v-btn
            >
          </v-row>
        </div>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repeat: "",
      loading: false,
      step: 1,
    };
  },
  methods: {
    ...mapActions("user", ["register"]),
    ...mapActions("error", ["throwErrorMsg"]),

    nextStep() {
      this.step = this.step + 1;
    },

    lastStep() {
      this.step = this.step - 1;
    },

    submit() {
      const { email, password } = this;
      this.loading = true;
      this.register({ email, password })
        .then(() => {})
        .catch((error) => {
          this.throwErrorMsg(error);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
