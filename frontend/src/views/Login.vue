<template>
  <q-page-container>
    <q-page class="flex flex-center bg-image">
      <q-card class="shadow-2 my_card q-pa-sm shadow-20 " style="border-radius: 15px; border: 4px solid #d4abe1">
        <q-card-section class="text-center">
          <div class="text-grey-9 text-h5 text-weight-bold">Добро пожаловать, игрок!</div>
          <div class="text-grey-8">Введи свое имя и пароль, чтобы начать игру</div>
        </q-card-section>
        <q-card-section>
          <q-input dense outlined v-model="username" label="Имя"></q-input>
          <q-input dense outlined class="q-mt-md" v-model="password" type="password" label="Пароль"></q-input>
        </q-card-section>
          <q-card-section class="text-center" style="margin-bottom: -20px; margin-top: -20px">
          <span class="text-black-8" style="font-size: 1em; margin-left: 3px" v-if="error">Неверные данные</span>
          </q-card-section>
        <q-card-section>
          <q-btn @click.prevent="mainMenuClick()" style="border-radius: 15px;" color="dark" rounded size="md" label="Продолжить" no-caps class="full-width" ></q-btn>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</template>

<script lang="ts">
import {ref} from "vue";
import backend from "../services/backend.ts";

export default {
  name: 'Login',
  methods: {
    async mainMenuClick() {
      this.error = false
      let result: Boolean = await backend.login(this.username, this.password)
      if (result)
        this.$router.push('/main_menu')
      else
        this.error = true
    }
  },
  setup () {
    return {
      username: ref(''),
      password: ref(''),
      error: ref(false)
    }
  }
};
</script>

<style>
.bg-image {
  background-image: url('/images/footer_images/bd_main.jpg');
  background-size: 1600px;
}

div {
  user-select: none;
}
</style>