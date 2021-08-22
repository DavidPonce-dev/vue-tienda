<template>
  <v-container>
    <v-card :loading="loading" class="mx-auto mt-5">
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">
          Informacion personal
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 2" step="2">
          Contraseña
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <form @submit.prevent="submit">
          <v-stepper-content step="1">
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
          </v-stepper-content>
          <v-stepper-content step="2">
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
            </v-row></v-stepper-content
          >
          <v-stepper-content step="3">
            <v-row justify="end">
              <v-btn color="info" @click.prevent="lastStep" class="ms-10 my-6"
                >Anterior</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn color="success" type="success" class="me-10 my-6"
                >Enviar</v-btn
              >
            </v-row>
          </v-stepper-content>
        </form>
      </v-stepper-items>
    </v-stepper>
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
        .then(() => this.$router.push("/"))
        .catch((error) => {
          this.throwErrorMsg(error);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
