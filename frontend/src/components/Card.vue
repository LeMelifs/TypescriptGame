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
      {{ value }} - {{ position }}
    </div>
    <div v-else class="card-face is-back">
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 5px solid #ccc;
  text-align: center;
  position: relative;
}

.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
}

.card-face.is-front {
  background-color: red;
  color: white;
}

.card-face.is-back {
  background-image: url('/images/heart.png');
  background-size: 90px;
  background-repeat: no-repeat;
  background-color: whitesmoke;
  color: white;
}
</style>