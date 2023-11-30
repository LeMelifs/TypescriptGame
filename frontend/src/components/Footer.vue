<template>
  <q-footer reveal class="bg-grey-4 text-black">
    <q-toolbar>
      <q-btn dense flat round icon="arrow_upward" @click="open('bottom')"/>
      <q-separator black vertical inset class="q-ma-sm" />
      <q-toolbar-title>
        <div>Выбор темы</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
  <q-dialog v-model="dialog" :position="position">
    <q-card style="width: 700px; max-width: 80vw; height: 265px;">
      <q-card-actions class="bg-purple-1">
        <div class="text-h6 text-weight-bold q-px-md" >Выбор темы</div>
        <q-space></q-space>
        <q-btn icon="close" flat  round dense v-close-popup></q-btn>
      </q-card-actions>


      <q-separator />

      <q-card-actions align="center">
        <div class="q-ma-md row items-start q-gutter-md justify-center cat_card shadow-2">
          <q-card class="my-card q-ma-xl">
          </q-card>
        </div>

        <div class="q-ma-md row items-start q-gutter-md justify-center seal_card shadow-2" style="margin-left: 40px; margin-right: 40px">
          <q-card class="my-card q-ma-xl" bordered: true>
          </q-card>
        </div>

        <div class="q-ma-md row items-start q-gutter-md justify-center bunny_card shadow-2">
          <q-card class="my-card q-ma-xl">
          </q-card>
        </div>

      </q-card-actions>

      <q-separator />

      <q-card-actions align="center" class="bg-purple-1" style="height: 65px;">
        <q-btn @click="changeTheme('cat')" push text-color="purple-5" label="Котики" color="white" style="width: 155px" v-close-popup />
        <q-btn @click="changeTheme('hare')" push text-color="purple-5" label="Зайчики" color="white" style="width: 155px" v-close-popup />
        <q-btn @click="changeTheme('seal')" push text-color="purple-5" label="Нерпы" color="white" style="width: 155px" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
let theme = 'cat'
export default {
  name: 'Footer',
  methods: {
    changeTheme(chosen_theme) {
      theme = chosen_theme
      console.log(theme)
      debugger;
    }
  },
  data() {
    return {
      theme: theme
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
    background-image: url('/images/footer_imgages/cat.jpg');
    background-size: 95px;
    border-radius: 20px;
    position: relative;
    border: 2px solid #d6bbf8;
  }
  .bunny_card {
    background-image: url('/images/footer_imgages/bunny.jpg');
    background-size: 95px;
    border-radius: 20px;
    position: relative;
    border: 2px solid #d6bbf8;
  }
  .seal_card {
    background-image: url('/images/footer_imgages/seal.jpg');
    background-size: 98px;
    border-radius: 20px;
    position: relative;
    border: 2px solid #d6bbf8;
  }
</style>