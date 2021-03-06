import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Tienda from '../views/Tienda.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tienda',
    name: 'Tienda',
    component: Tienda
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
