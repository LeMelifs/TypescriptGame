<script lang="ts">
export default {
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
      type: Number,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
  },
  setup(props: any, context: any) {
    const selectCard = () : void => {
      context.emit('select-card', {
        position: props.position as number,
        faceValue: props.value as number,
      })
    }
    return {
      selectCard
    }
  }
}
</script>

<template>
  <div class="card" @click="selectCard">
    <div v-if="visible" class="card-face is-front">
      {{ value }}
      <img v-if="matched" src="/images/checkmark.png" alt="checkmark" class="icon-checkmark">
    </div>
    <div v-else class="card-face is-back">
    </div>
  </div>
</template>

<style scoped>
.icon-checkmark {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
}

.card {
  position: relative;
}

.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
}

.card-face.is-front {
  background-color: white;
  color: white;
}

.card-face.is-back {
  background-image: url('/images/background-for-card.jpg');
  background-size: 121px;
  background-repeat: no-repeat;
  background-color: whitesmoke;
  color: white;
}
</style>