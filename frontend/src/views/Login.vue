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
        <q-card-section>
          <q-btn @click.prevent="mainMenuClick()" style="border-radius: 15px;" color="dark" rounded size="md" label="Продолжить" no-caps class="full-width" ></q-btn>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: 'Login',
  methods: {
    mainMenuClick(){
      this.$router.push('/main_menu');
    }
  },
  setup () {
    return {
      username: ref(''),
      password: ref('')
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