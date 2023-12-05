<template>
  <q-layout view="hHh LpR fFr">
    <PageLoader></PageLoader>
    <router-view />
  </q-layout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PageLoader from "./views/PageLoader.vue";

export default defineComponent({
  components: {PageLoader}
})
</script>

<style>
</style>