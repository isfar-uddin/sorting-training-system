<script setup>
const { onChange, id } = defineProps({
  onChange: Function,
  id: Number
})

function handleChange(event) {
  event.preventDefault()
  console.log('changing')
  onChange(id)
}
</script>
<template>
  <label class="checkmark-container">
    <input type="checkbox" @change="handleChange" />
    <span>
      <img src="/src/assets/images/check-mark.svg" class="checkmark-icon" />
    </span>
  </label>
</template>

<style scoped>
@import '../assets/styles/components/_checkbox.scss';
</style>
