<script setup>
import IconClose from './icons/IconClose.vue'
import Button from './Button.vue'

defineProps({
  title: String,
  showModal: Boolean,
  modalSize: {
    type: String,
    default: 'modal-medium'
  },
  hideModal: Function,
  onSubmitClick: Function
})
</script>

<template>
  <div id="myModal" class="modal" :class="{ opened: showModal }" @click="hideModal">
    <div class="modal-content" :class="modalSize" @click="(e) => e.stopPropagation()">
      <div class="modal-header d-flex j-c-sp-bet al-it-center">
        <span>{{ title }}</span>
        <IconClose :hide-modal="hideModal" />
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer d-flex j-c-end col-gap-10">
        <Button
          title="Cancel"
          btn-type="btn-secondary"
          btn-size="btn-small"
          :on-click="hideModal"
        />
        <Button
          title="Start"
          btn-type="btn-primary"
          btn-size="btn-small"
          :on-click="onSubmitClick"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/styles/components/_modal.scss';
</style>
