<template>
  <q-header reveal class="bg-purple-2 text-black" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        <div class="row justify-center text-weight-bold q-ml-xl">
          Главное меню
        </div>
      </q-toolbar-title>
      <q-separator black vertical inset class="q-ma-sm"/>
      <q-btn @click="drawerRight = !drawerRight" dense flat round icon="menu" />
    </q-toolbar>
  </q-header>
  <q-drawer
      side="right"
      v-model="drawerRight"

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"

      :width="300"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
  <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
    <q-list padding>

      <q-item >
        <q-item-section avatar>
          <q-icon name="star" />
        </q-item-section>

        <q-item-section class="text-weight-bold flex-center q-pr-lg">
          Таблица рекордов
        </q-item-section>
      </q-item>

      <q-separator />
      <q-item >
        <q-item-section class="flex-center">
          username // time
        </q-item-section>
      </q-item>

    </q-list>
  </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts">

import { ref } from 'vue'

export default {
  name: 'Header',
  setup () {
    return {
      drawerRight: ref(false),
      miniState: ref(true)
    }
  }
}
</script>