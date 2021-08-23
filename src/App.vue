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
import { mapActions } from 'vuex';
export default {
  components:{
    Navbar,
    Error
  },
  methods:{
    ...mapActions('user', ['loadToken', 'logout']),
    ...mapActions("error", ["throwErrorMsg"]),
  },
  
  mounted(){
    const token = sessionStorage.getItem('token') || localStorage.getItem('token')
    if(token) this.loadToken(token).catch((error) => {
      this.logout()
      this.throwErrorMsg(error)
    })
  }
};
</script>

<style>
.v-application--wrap{
  background: rgb(161,161,161);
background: linear-gradient(29deg, rgba(161,161,161,1) 0%, rgba(255,255,255,1) 66%, rgba(255,255,255,1) 78%, rgba(143,143,143,1) 100%);
}
</style>