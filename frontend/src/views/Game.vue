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
    mainMenuClick() {
      this.$router.push('/main_menu')
    },
    start() {
      const clock = document.getElementById('time')
      let time: number = -1, intervalId
      function incrementTime() {
        time++
        clock.textContent =
          ('0' + Math.trunc(time / 60)).slice(-2) + ':' + ('0' + (time % 60)).slice(-2)
      }
      incrementTime()
      intervalId = setInterval(incrementTime, 1000)
    },
  },
  mounted: function(){
    this.start()
  },
  setup() {
    const cardList = ref([])
    const userSelection = ref([])
    const lvl = ref(1)

    const remainingPairs = computed(() => {
      const remainingCards: number = cardList.value.filter((card) => card.matched === false).length
      return remainingCards / 2
    })

    const restartGame = () => {
      cardList.value = _.shuffle(cardList.value)
      lvl.value++
      console.log(lvl.value)
      cardList.value = cardList.value.map((card, index) => {
        return {
          ...card,
          matched: false,
          visible: false,
          position: index
        }
      })
    }

    let cardItems = []
    for (let i = 0;  i <= 9; i++) {
      let a = Math.floor(Math.random() * (26 - 1 + 1)) + 1
      let b = a.toString()
      while (cardItems.includes(b)) {
        a = Math.floor(Math.random() * (26 - 1 + 1)) + 1
        b = a.toString()
      }
      cardItems.push(b)
    }

    cardItems.forEach((item) => {
      cardList.value.push({
        value: item,
        variant: 1,
        visible: false,
        position: null,
        matched: false
      })
      cardList.value.push({
        value: item,
        variant: 2,
        visible: false,
        position: null,
        matched: false
      })
    })

    cardList.value = _.shuffle(cardList.value)
    cardList.value = cardList.value.map((card, index) => {
      return {
        ...card,
        position: index
      }
    })

    let count: number = 0
    const flipCard = (payload: any) => {
      if (count != 2) {
        cardList.value[payload.position].visible = true
        if (userSelection.value[0]) {
          if (
              userSelection.value[0].position === payload.position &&
              userSelection.value[0].faceValue === payload.faceValue
          ) {
            return
          } else {
            userSelection.value[1] = payload
            count++
          }
        } else {
          userSelection.value[0] = payload
          count++
        }
      }
    }

    watch(
      userSelection,
      (currentValue) => {
        if (currentValue.length === 2) {
          const cardOne = currentValue[0]
          const cardTwo = currentValue[1]
          if (cardOne.faceValue === cardTwo.faceValue) {
            cardList.value[cardOne.position].matched = true
            cardList.value[cardTwo.position].matched = true
            count = 0
          } else {
            setTimeout(() => {
              cardList.value[cardOne.position].visible = false
              cardList.value[cardTwo.position].visible = false
              count = 0
            }, 1000)
          }
          userSelection.value.length = 0
          if (remainingPairs.value === 0) {
            setTimeout(() => {
              restartGame()
            }, 2000)
          }
        }
      },
      { deep: true }
    )
    return {
      cardList,
      flipCard,
      userSelection,
      restartGame,
      lvl
    }
  }
}
</script>

<template>
  <div class="q-pa-md bg-image">
    <q-layout class="vertical-center">
      <h3 class="level">Уровень {{lvl}}</h3>
      <h4 class="level" id="time">00:00</h4>
      <transition-group tag="section" class="game-board" name="shuffle-card">
        <Card
          v-for="card in cardList"
          :key="`${card.value}-${card.variant}`"
          :value="card.value"
          :matched="card.matched"
          :visible="card.visible"
          :position="card.position"
          @select-card="flipCard"
        />
      </transition-group>
      <div style="text-align: center; margin-top: 10px" @click.prevent="mainMenuClick()">
        <q-btn style="background: #fa3e9c; color: white; border-radius: 15px; margin-top: 15px; width: 100px" label="Выход" />
      </div>

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
  margin-bottom: 0;
}

.bg-image {
  background-color: #c7b3b7;
  background-image: url('/images/background.png');
  background-size: 1000px;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-column-gap: 20px;
  grid-template-rows: repeat(4, 120px);
  grid-row-gap: 20px;
  justify-content: center;
  margin-top: 10px;
}

.shuffle-card-move {
  transition: transform 1s ease-in;
}
</style>