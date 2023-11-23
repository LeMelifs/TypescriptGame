import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Header from "../components/Header.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/main_menu',
      name: 'main_menu',
      component: Header,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
