<script lang="ts">
import Card from '../components/Card.vue'
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { computed } from '@vue/runtime-core'
import _ from 'lodash'
export default {
  name: 'Game',
  components: {
    Card
  },
  setup() {
    const cardList = ref([])
    const userSelection = ref([])
    const status = computed(() => {
      if (remainingPairs.value === 0) {
        return 'Player wins!'
      } else {
        return `Remaining pairs: ${remainingPairs.value}`
      }
    })

    const remainingPairs = computed(() => {
      const remainingCards = cardList.value.filter(card => card.matched === false).length
      return remainingCards / 2
    })

    const shuffleCards = () => {
      cardList.value = _.shuffle(cardList.value)
    }

    const restartGame = () => {
      shuffleCards()

      cardList.value = cardList.value.map((card, index) => {
        return {
          ...card,
          matched: false,
          visible: false,
          position: index
        }
      })
    }

    for (let i = 0; i < 16; i++) {
      cardList.value.push({
        value: i,
        visible: false,
        position: i,
        matched: false
      })
    }

    const flipCard = (payload: any) => {
      cardList.value[payload.position].visible = true
      if (userSelection.value[0]) {
        userSelection.value[1] = payload
      }
      else {
        userSelection.value[0] = payload
      }
    }
    watch(userSelection, currentValue => {
      if (currentValue.length === 2) {
        const cardOne = currentValue[0]
        const cardTwo = currentValue[1]
        if (cardOne.faceValue === cardTwo.faceValue) {
          cardList.value[cardOne.position].matched = true
          cardList.value[cardTwo.position].matched = true
        }
        else {
          cardList.value[cardOne.position].visible = false
          cardList.value[cardTwo.position].visible = false
        }
        userSelection.value.length = 0
      }
    }, { deep: true })
    return {
      cardList,
      flipCard,
      userSelection,
      status,
      shuffleCards,
      restartGame
    }
  }
}
</script>

<template>
  <section class="game-board">
    <Card v-for="(card, index) in cardList"
          :key="`card-${index}`"
          :value="card.value"
          :matched="card.matched"
          :visible="card.visible"
          :position="card.position"
          @select-card="flipCard"
    />
  </section>
  <h2 style="text-align: center">{{ status }}</h2>
  <button @click="restartGame">Shuffle Cards</button>
</template>

<style scoped>
.game-board {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-column-gap: 30px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-row-gap: 30px;
  justify-content: center;
}
</style>