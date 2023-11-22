
<template>
  <q-layout view="hHh LpR fFr">

    <Header />
      <Login />
    <Footer />

  </q-layout>
</template>

<script >
  import Header from './components/Header.vue'
  import Footer from "./components/Footer.vue";
  import Login from "./views/Login.vue";

  export default {
    name: 'App',
    components: {
      Header, Footer, Login
    }
  }
</script>

<style scoped>
.my_card {
  width: 25rem;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>