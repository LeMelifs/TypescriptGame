
<template>
  <q-layout view="hHh LpR fFr">
    <router-view />
    <nav>
      <router-link :to="{ name: 'main_menu' }">Main menu</router-link><br>
      <router-link :to="{ name: 'game' }">Game</router-link>
    </nav>
  </q-layout>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Footer from "./components/Footer.vue";
import Login from "./views/Login.vue";

let curState = 'Login'
export default {
  name: 'App',
  components: {
    Header, Footer, Login
  },
  data() {
    return {
      curState
    };
  }
}
</script>