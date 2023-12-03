<script lang="ts">
import Card from '../components/Card.vue'
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { computed } from '@vue/runtime-core'
import _ from 'lodash'
import Footer from "../components/Footer.vue";

export default {
  name: 'Game',
  computed: {
    Footer() {
      return Footer
    }
  },
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
    const levels = [3, 5, 7, 9, 11]
    let cardItems = []
    let record = ref('')

    const remainingPairs = computed(() => {
      const remainingCards: number = cardList.value.filter((card) => card.matched === false).length
      return remainingCards / 2
    })

    const restartGame = () => {
      cardList.value = _.shuffle(cardList.value)
      lvl.value++
      cardItems.length = 0
      cardList.value.length = 0
      if (lvl.value <= 5) {
        for (let i: number = 0; i <= levels[lvl.value - 1]; i++) {
          let a: number = Math.floor(Math.random() * 20) + 1
          let b: string = a.toString()
          while (cardItems.includes(b)) {
            a = Math.floor(Math.random() * 20) + 1
            b = a.toString()
          }
          cardItems.push(b)
        }
        cardItems.forEach((item: any) => {
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
            matched: false,
            visible: false,
            position: index
          }
        })
      }
      else {
        let time = document.getElementById('time')
        record.value = time.textContent
      }
    }

    for (let i: number = 0;  i <= levels[lvl.value - 1]; i++) {
      let a: number = Math.floor(Math.random() * 20) + 1
      let b: string = a.toString()
      while (cardItems.includes(b)) {
        a = Math.floor(Math.random() * 20) + 1
        b = a.toString()
      }
      cardItems.push(b)
    }

    cardItems.forEach((item: any) => {
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
    const flipCard = (payload: any) : void => {
      if (count != 2) {
        if (!cardList.value[payload.position].matched) {
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
      lvl,
      record
    }
  }
}
</script>

<template>
  <div class="q-pa-md bg-image">
    <q-layout class="vertical-center">
      <h3 class="level" v-if="lvl <= 5">Уровень {{lvl}}</h3>
      <div v-else>
        <h2 class="record">Вы справились за <br>{{ record }}!</h2>
        <img class="image" :src="`/images/${Footer.data().theme.value}_final.jpg`">
      </div>
      <h4 class="level" id="time" v-if="lvl <= 5">00:00</h4>
      <transition-group v-if="lvl === 1" tag="section" class="game-board1" name="shuffle-card">
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
      <transition-group v-if="lvl === 2" tag="section" class="game-board2" name="shuffle-card">
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
      <transition-group v-if="lvl === 3" tag="section" class="game-board3" name="shuffle-card">
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
      <transition-group v-if="lvl === 4" tag="section" class="game-board4" name="shuffle-card">
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
      <transition-group v-if="lvl === 5" tag="section" class="game-board5" name="shuffle-card">
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
        <q-btn style="background: #fa3e9c; color: white; border-radius: 15px; top: 15px; width: 100px" label="Выход" />
      </div>
    </q-layout>
  </div>
</template>

<style scoped>
.level {
  color: white;
  font-family: Ebrima, serif;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 4px;
  font-weight: bold;
  text-shadow: 2px 1px 1px #ec62a7;
}

.bg-image {
  background-color: #c7b3b7;
  background-image: url('/images/footer_images/bd_main.jpg');
  background-size: 1600px;
  background-repeat: no-repeat;
}

.game-board1 {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-column-gap: 20px;
  grid-template-rows: repeat(2, 120px);
  grid-row-gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.game-board2 {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-column-gap: 20px;
  grid-template-rows: repeat(3, 120px);
  grid-row-gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.game-board3 {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-column-gap: 20px;
  grid-template-rows: repeat(4, 120px);
  grid-row-gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.game-board4 {
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-column-gap: 20px;
  grid-template-rows: repeat(4, 120px);
  grid-row-gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.game-board5 {
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-column-gap: 20px;
  grid-template-rows: repeat(4, 120px);
  grid-row-gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.shuffle-card-move {
  transition: transform 1s ease-in;
}

.record {
  text-align: center;
  color: white;
  font-family: Ebrima, serif;
  font-weight: bold;
  text-shadow: 2px 1px 1px #ec62a7;
}

.image {
  margin: 10px auto 20px;
  display: block;
  width: 300px;
  border: solid #fff;
  border-radius: 15px;
}
</style>