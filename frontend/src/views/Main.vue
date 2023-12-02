<template>
  <q-layout view="hHh LpR fFr" class="bg-image">

    <Header />
    <div class="row items-start q-gutter-md fixed-center" >
      <q-card style=" border-radius: 15px" class="my-card shadow-24 flex-center" >
        <q-card-section class="bg-purple-2" style="border-top: 4px solid #d4abe1; border-left: 4px solid #d4abe1; border-right: 4px solid #d4abe1">
          <div class="text-grey-9 text-h5 text-weight-bold " style="margin-bottom: 10px; margin-right: 30px; margin-left: 30px">Ваш рекорд: 00:00</div>
          <div class="text-grey-8" style="margin-top: 8px; margin-left: 30px">Выбранная тема: {{ Footer.data().rus_theme.value }}</div>
        </q-card-section>

        <q-card-actions vertical align="center" style="border-bottom: 4px solid #d8c9e1; border-left: 4px solid #d8c9e1; border-right: 4px solid #d8c9e1;">
          <q-btn @click.prevent="onGameClick()" flat class="full-width" style="border-radius: 15px">Играть</q-btn>
          <q-btn @click.prevent="onLoginClick()" flat class="full-width" style="border-radius: 15px">Сменить игрока</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <Footer />

  </q-layout>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import {computed} from "@vue/runtime-core";
import {ref} from "vue";

export default {
  name: 'Main',
  computed: {
    Footer() {
      return Footer
    }
  },
  components: { Header, Footer },
  methods: {
    onGameClick(){
      this.$router.push('/game')
    },
    onLoginClick(){
      this.$router.push('/')
    },
  }
}
</script>

<style>
.bg-image {
  background-image: url('/images/footer_images/bd_main.jpg');
  background-size: 1600px;
}
</style>