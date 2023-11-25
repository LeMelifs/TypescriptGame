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
    <q-card style="width: 700px; max-width: 80vw; height: 300px;">
      <q-card-section >
        <div class="text-h6 text-weight-bold" >Выбор темы</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" >

      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn flat label="Котики" color="purple-5" class="q-mx-xl" v-close-popup />
        <q-btn flat label="Зайчики" color="purple-5" class="q-mx-xl" v-close-popup />
        <q-btn flat label="Нерпы" color="purple-5" class="q-mx-xl" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Footer',

  setup () {
    const dialog = ref(false)
    const position = ref('top')

    return {
      dialog,
      position,

      open (pos) {
        position.value = pos
        dialog.value = true
      }
    }
  }
}
</script>