<template>
  <q-footer reveal class="bg-grey-4 text-grey-9  shadow-5" style="border-top: 4px solid #d8c9e1">
    <q-toolbar >
      <q-btn dense flat round icon="arrow_upward" @click="open('bottom')"/>
      <q-separator black vertical inset class="q-ma-sm" />
      <q-toolbar-title>
        <div class="text-h6 text-weight-bold">Выбор темы</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
  <q-dialog v-model="dialog" :position="position" >
    <q-card style="width: 700px; max-width: 80vw; height: 270px; border-start-start-radius: 15px; border-start-end-radius: 15px">
      <q-card-actions class="bg-purple-1" style="border-top: 4px solid #d6bde5; border-left: 4px solid #d6bde5; border-right: 4px solid #d6bde5">
        <div class="text-h6 text-weight-bold text-grey-9 q-px-md" >Выбор темы</div>
        <q-space></q-space>
        <q-btn icon="close" flat  round dense v-close-popup></q-btn>
      </q-card-actions>


      <q-separator />

      <q-card-actions align="center" style="border-left: 4px solid #e1d3ea; border-right: 4px solid #e1d3ea">
        <div @mouseenter="hover1 = true" @mouseleave="hover1 = false" :class="{ 'cat-hover': hover1 }" class="row items-start  justify-center cat_card shadow-2">
          <q-card class="my-card q-ma-xl"> </q-card>
        </div>

        <div @mouseenter="hover2 = true" @mouseleave="hover2 = false" :class="{ 'bunny-hover': hover2}" class="row items-start  justify-center bunny_card shadow-2">
          <q-card class="my-card q-ma-xl"> </q-card>
        </div>

        <div @mouseenter="hover3 = true" @mouseleave="hover3 = false" :class="{ 'seal-hover': hover3 }" class="row items-start  justify-center seal_card shadow-2">
          <q-card class="my-card q-ma-xl"> </q-card>
        </div>

      </q-card-actions>

      <q-separator />

      <q-card-actions align="center" class="bg-purple-1" style="height: 73px; border-left: 4px solid #d6bde5; border-right: 4px solid #d6bde5">
        <q-btn @click="changeTheme('cat', 'Котики')" push text-color="purple-8" label="Котики" color="white" style="width: 155px; border-radius: 15px" v-close-popup />
        <q-btn @click="changeTheme('hare', 'Зайчики')" push text-color="purple-8" label="Зайчики" color="white" style="width: 155px; border-radius: 15px" v-close-popup />
        <q-btn @click="changeTheme('seal', 'Нерпы')" push text-color="purple-8" label="Нерпы" color="white" style="width: 155px; border-radius: 15px" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
let theme = ref('cat')
let rus_theme = ref('Котики')
export default {
  name: 'Footer',
  methods: {
    changeTheme(chosen_theme, rus) {
      theme.value = chosen_theme
      rus_theme.value = rus
    }
  },
  data() {
    return {
      theme: theme,
      rus_theme: rus_theme,
      hover1: false,
      hover2: false,
      hover3: false,
    }
  },
  setup () {
    const dialog = ref(false)
    const position = ref('top')
    return {
      dialog,
      position,
      open (pos) {
        position.value = pos
        dialog.value = true
      },
    }
  }
}
</script>

<style>
  .cat_card {
    background-image: url('/images/footer_images/cat.jpg');
    background-size: 95px;
    border-radius: 20px;
    position: relative;
    border: 2px solid #d6bbf8;
    margin-right: 52px;
  }

  .bunny_card {
    background-image: url('/images/footer_images/hare.jpg');
    background-size: 98px;
    border-radius: 20px;
    position: relative;
    border: 2px solid #d6bbf8;
    margin-top: 12px;
    margin-bottom: 13px;
  }

  .seal_card {
    background-image: url('/images/footer_images/seal.jpg');
    background-size: 95px;
    border-radius: 20px;
    position: relative;
    border: 2px solid #d6bbf8;
    margin-left: 52px;
  }

  .cat-hover {
    border: 4px solid #d6bbf8;
    margin-top: 1px;
    margin-right: 48px;
    box-shadow: 0 0 30px rgba(214, 187, 248, 0.5);
  }
  .bunny-hover {
    border: 4px solid #d6bbf8;
    margin: 10px -2px 11px;
    box-shadow: 0 0 30px rgba(214, 187, 248, 0.6);
  }

  .seal-hover {
    border: 4px solid #d6bbf8;
    margin-top: 1px;
    margin-left: 48px;
    box-shadow: 0 0 30px rgba(214, 187, 248, 0.6);
  }
</style>