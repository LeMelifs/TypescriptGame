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

    const cardItems = [1, 2, 3, 4, 5, 6, 7, 8]

    cardItems.forEach(item => {
      cardList.value.push({
        value: item,
        visible: false,
        position: null,
        matched: false
      })
      cardList.value.push({
        value: item,
        visible: false,
        position: null,
        matched: false
      })
    })

    cardList.value = cardList.value.map((card, index) => {
      return {
        ...card,
        position: index
      }
    })

    const flipCard = (payload: any) => {
      cardList.value[payload.position].visible = true
      if (userSelection.value[0]) {
        if ((userSelection.value[0].position === payload.position) &&
            (userSelection.value[0].faceValue === payload.faceValue)) {
          return
        } else {
          userSelection.value[1] = payload
        }
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
          setTimeout(() => {
          cardList.value[cardOne.position].visible = false
          cardList.value[cardTwo.position].visible = false}, 1000)
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

  <div class="q-pa-md bg-image">
    <q-layout class="vertical-center">
  <div class="game-board">
    <Card v-for="(card, index) in cardList"
          :key="`card-${index}`"
          :value="card.value"
          :matched="card.matched"
          :visible="card.visible"
          :position="card.position"
          @select-card="flipCard"
    />
  </div>
  <div style="text-align: center; margin-top: 30px"><button @click="restartGame">Shuffle Cards</button></div>
  </q-layout>
  </div>
</template>


<style scoped>
.bg-image {
  background-color: #c7b3b7;
  background-image: url("/images/background.png");
  background-size: 1000px;
}

.game-board {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-column-gap: 30px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-row-gap: 30px;
  justify-content: center;
  margin-top: 30px;
}
</style>