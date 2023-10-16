<script setup>
defineProps({
  hideModal: Function
})
</script>

<template>
  <span class="close" @click="hideModal">&times;</span>
</template>

<style scoped>
@import '../../assets/styles/components/_close-icon.scss';
</style>
