import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Game from "../views/Game.vue"
import Main from "../views/Main.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main_menu',
      name: 'main_menu',
      component: Main,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})

export default router
