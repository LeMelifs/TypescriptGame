<template>
  <q-header reveal class="bg-purple-2 text-black shadow-2" height-hint="98" style="border-bottom: 4px solid #d4abe1">
    <q-toolbar>
      <q-toolbar-title>
        <div class="row justify-center text-grey-9 text-h5 text-weight-bold q-ml-xl">
          Главное меню
        </div>
      </q-toolbar-title>
      <q-separator black vertical inset class="q-ma-sm"/>
      <q-btn @click="drawerRight = !drawerRight" dense flat round icon="menu" />
    </q-toolbar>
  </q-header>
  <q-drawer style="border-left: 4px solid #e1d3ea" class="shadow-20"
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
  <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }" >
    <q-list padding>

      <q-item >
        <q-item-section avatar>
          <q-icon name="star" />
        </q-item-section>

        <q-item-section class="text-grey-9 text-weight-bold flex-center q-pr-lg" style="font-size: 20px">
          Таблица рекордов
        </q-item-section>
      </q-item>

      <q-separator />
      <q-item >
        <q-item-section class="flex-center" v-html="results"></q-item-section>
      </q-item>

    </q-list>
  </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts">

import { ref } from 'vue'
import backend from '../services/backend'

export default {
  name: 'Header',
  setup () {
    const results = ref('')
    backend.results().then(serverResults => {
      results.value = serverResults
        .map(result => {
          const minutes = Math.trunc(result.result / 60)
          const seconds = result.result % 60
          const formattedNum = (num) => (num < 10 ? '0' : '') + num.toString()
          return result.username + ' // ' + formattedNum(minutes) + ':' + formattedNum(seconds)
        })
        .join('<br>')
    });

    return {
      drawerRight: ref(false),
      miniState: ref(true),
      results: results
    }
  }
}
</script>