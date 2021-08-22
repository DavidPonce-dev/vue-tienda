<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Error />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Error from "./components/Error";
export default {
  components:{
    Navbar,
    Error
  }
};
</script>