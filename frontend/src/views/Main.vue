<template>
  <q-layout view="hHh LpR fFr" class="bg-image">

    <Header />
    <div class="q-pa-md row items-start q-gutter-md fixed-center" >
      <q-card style=" border-radius: 15px" class="my-card" >
        <q-card-section class="bg-purple-2 text-weight-bolder text-black" style="border: 4px solid #d4abe1">
          <div class="text-h5 q-px-md">Ваш рекорд: 00:00</div>
        </q-card-section>

        <q-card-actions vertical align="center" style="border-bottom: 4px solid #d8c9e1; border-left: 4px solid #d8c9e1; border-right: 4px solid #d8c9e1;">
          <q-btn @click.prevent="onGameClick()" flat class="full-width">Играть</q-btn>
          <q-btn @click.prevent="onLoginClick()" flat class="full-width">Сменить игрока</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <Footer />

  </q-layout>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'Main',
  components: { Header, Footer },
  methods: {
    onGameClick(){
      this.$router.push('/game')
    },
    onLoginClick(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
.bg-image {
  background-image: url('/images/footer_imgages/bd_main.jpg');
  background-size: 1600px;
}
</style>