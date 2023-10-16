<script setup>
import Button from './Button.vue'

const { score } = defineProps({
  score: Number,
  onBackBtnClick: Function
})
</script>

<template>
  <div class="d-flex flex-dir-col al-it-center">
    <div class="d-flex d-flex-center flex-dir-col score-container">
      <span class="congrats">Congratulations</span>
      <span class="score">
        You completed the sorting in <span>{{ score }} sec</span>
      </span>
    </div>
    <Button
      title="Back to home"
      btn-type="btn-primary"
      btn-size="btn-large"
      :on-click="onBackBtnClick"
    />
  </div>
</template>

<style scoped>
@import './../assets/styles/components/_score.scss';
</style>
