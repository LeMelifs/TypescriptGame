<template>
  <q-layout view="hHh LpR fFr">

    <Header />
    <div class="q-pa-md row items-start q-gutter-md fixed-center">
      <q-card class="my-card ">
        <q-card-section class="bg-purple-2 text-weight-bolder text-black ">
          <div class="text-h5 q-px-md">Ваш рекорд: 00:00</div>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-btn flat class="full-width">Играть</q-btn>
          <q-btn flat class="full-width">Сменить игрока</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <Footer />

  </q-layout>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>