<script setup>
const emits = defineEmits('on-blur')

defineProps({
  value: String,
  placeholderText: String,
  inputTitle: String,
  showInputError: Boolean,
  onInputChange: Function
})
</script>

<template>
  <label class="input-title">{{ inputTitle }}</label>
  <input
    class="input"
    :placeholder="placeholderText"
    :value="value"
    @change="onInputChange"
    @blur="emits('on-blur')"
  />
  <div v-if="showInputError" class="input-error">Number of people must be between 20 and 100</div>
</template>

<style scoped>
@import './../assets/styles/components/_input.scss';
</style>
