<template>
  <q-header reveal class="bg-purple-2 text-black" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        <div class="row justify-center text-weight-bold q-ml-xl">
          Главное меню
        </div>
      </q-toolbar-title>
      <q-separator black vertical inset class="q-ma-sm"/>
      <q-btn dense flat round icon="menu" />
    </q-toolbar>
  </q-header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>