<template>
  <q-page-container>
    <q-page class="flex flex-center bg-grey-2">
      <q-card class="shadow-2 my_card" bordered>
        <q-card-section class="text-center">
          <div class="text-grey-9 text-h5 text-weight-bold">Добро пожаловать, игрок!</div>
          <div class="text-grey-8">Введи свое имя и пароль, чтобы начать игру</div>
        </q-card-section>
        <q-card-section>
          <q-input dense outlined v-model="email" label="Имя"></q-input>
          <q-input dense outlined class="q-mt-md" v-model="password" type="password" label="Пароль"></q-input>
        </q-card-section>
        <q-card-section>
          <q-btn style="border-radius: 8px;" color="dark" rounded size="md" label="Продолжить" no-caps class="full-width"></q-btn>
        </q-card-section>

      </q-card>
    </q-page>
  </q-page-container>
</template>

<script lang="ts">
export default {
  name: 'Login'
}
</script>