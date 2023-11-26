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
  methods: {
    mainMenuClick(){
      this.$router.push('/main_menu');
    }
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

    const cardItems = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8']

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
      <h4 class="level">1-ый уровень</h4>
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
  <div style="text-align: center; margin-top: 15px"><button @click="restartGame">Shuffle Cards</button></div>
      <div style="text-align: center; margin-top: 10px" @click.prevent="mainMenuClick()"><q-btn style="background: #FF0080; color: white;" label="Выход" /></div>
  </q-layout>
  </div>
</template>


<style scoped>

.level {
  color: white;
  font-family: Ebrima, serif;
  text-align: center;
  margin-top: 2px;
  font-weight: bold;
  margin-bottom: 4px;
}

.bg-image {
  background-color: #c7b3b7;
  background-image: url("/images/background.png");
  background-size: 1000px;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-column-gap: 20px;
  grid-template-rows: repeat(4, 120px);
  grid-row-gap: 20px;
  justify-content: center;
  margin-top: 30px;
}
</style>