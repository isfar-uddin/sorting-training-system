<script setup>
defineProps({
  title: String,
  btnType: {
    type: String,
    default: 'btn-primary'
  },
  btnSize: {
    type: String,
    default: 'btn-small'
  },
  onClick: Function
})
</script>

<template>
  <button class="btn-default" :class="[btnType, btnSize]" @click="onClick">{{ title }}</button>
</template>

<style scoped>
@import './../assets/styles/components/_button.scss';
</style>
