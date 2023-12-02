<script lang="ts">
import {computed} from "@vue/runtime-core";
import Footer from "./Footer.vue";

export default {
  computed: {
    Footer() {
      return Footer
    }
  },
  props: {
    matched: {
      type: Boolean,
      default: false
    },
    position: {
      type: Number,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
  },
  setup(props: any, context: any) {
    const flippedStyles = computed(() => {
      if (props.visible) {
        return 'is-flipped'
      }
    })
    const selectCard = () : void => {
      context.emit('select-card', {
        position: props.position as number,
        faceValue: props.value as number,
      })
    }
    return {
      flippedStyles,
      selectCard
    }
  }
}
</script>

<template>
  <div class="card" :class="flippedStyles"
       @click="selectCard">
    <div class="card-face is-front" style="text-align: center; color: black">
      <img :src="`/images/${Footer.data().theme.value}${value}.jpg`" :alt="value" style="border-radius: 13px">
      <img v-if="matched" src="/images/checkmark.png" alt="checkmark" class="icon-checkmark">
    </div>
    <div class="card-face is-back">
    </div>
  </div>
</template>

<style scoped>

.card {
  position: relative;
  transition: 0.5s transform ease-in;
  transform-style: preserve-3d;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  width: 105%;
  height: 104%;
  position: absolute;
  border-radius: 15px;
  border: 3px solid #ec62a7;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
}

.card-face.is-front {
  background-image: url('/images/cat1.jpg');
  color: white;
  transform: rotateY(180deg);
}

.card-face.is-back {
  background-image: url('/images/background-for-card.jpg');
  background-size: 121px;
  background-repeat: no-repeat;
  color: white;
}

.icon-checkmark {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
}
</style>