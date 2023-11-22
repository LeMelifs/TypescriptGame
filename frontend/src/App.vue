
<template>
  <q-layout view="hHh LpR fFr">
    <section v-if="curState === 'Login'">
      <Login />
    </section>
    <section v-else-if="curState === 'MainMenu'">
      <Header />
      <Footer />
    </section>
  </q-layout>
</template>

<script >
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