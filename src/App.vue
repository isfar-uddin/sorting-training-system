<script setup>
import { reactive } from 'vue'

import Table from './components/Table.vue'
import Modal from './components/Modal.vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'
import Score from './components/Score.vue'

import { uniqueNumberGenerator } from './utils/uniqueNumberGenerator'
import { isArraySorted } from './utils/common'

const state = reactive({
  showModal: false,
  peopleCount: null,
  people: [],
  score: null,
  isFinished: false,
  startTime: null,
  showInputError: false
})

function handleAddPeople() {
  state.showModal = true
}

function hideModal() {
  state.showModal = false
  resetInput()
}

function handleInputChange(e) {
  state.peopleCount = e.target.value
}

function handleBlur() {
  if (state.peopleCount < 20 || state.peopleCount > 100) {
    state.showInputError = true
  } else {
    state.showInputError = false
  }
}

function handleUpdatePeople({ dropIndex, newIndex }) {
  const [movedItem] = state.people.splice(newIndex, 1)
  state.people.splice(dropIndex, 0, movedItem)
  handleSortingFinished()
}

function handleStartClick() {
  if (state.peopleCount < 20 || state.peopleCount > 100) {
    state.showInputError = true
    return
  }

  state.showInputError = false
  state.people = uniqueNumberGenerator(state.peopleCount)
  state.startTime = Date.now()
  state.peopleCount = null

  hideModal()
}

function handleSortingFinished() {
  if (isArraySorted(state.people)) {
    const timeDiff = Date.now() - state.startTime
    state.score = Math.floor(timeDiff / 1000)
    state.isFinished = true

    resetState()
    resetInput()
  }
}

function resetState() {
  state.people = []
  state.startTime = null
}

function resetInput() {
  state.peopleCount = null
  state.showInputError = false
}

function resetScore() {
  state.score = 0
  state.isFinished = false
}
</script>

<template>
  <header class="d-flex al-it-center j-c-sp-bet" v-if="!state.isFinished">
    <h1>Sorting Training System</h1>

    <Button
      title="Start Sorting!"
      btn-type="btn-primary"
      btn-size="btn-large"
      :on-click="handleAddPeople"
    />

    <Modal
      title="How many people?"
      :show-modal="state.showModal"
      :hide-modal="hideModal"
      :on-submit-click="handleStartClick"
    >
      <Input
        placeholder-text="Number of people you want to sort"
        input-title="Enter a number of how many people you want to add to the list."
        @on-blur="handleBlur"
        :on-input-change="handleInputChange"
        :value="state.peopleCount"
        :show-input-error="state.showInputError"
      />
    </Modal>
  </header>

  <main class="d-flex flex-dir-col al-it-end container" v-if="state.people.length">
    <div class="d-inline-flex al-it-center j-c-end table-info">
      {{ state.people.length }} people in the list
    </div>

    <Table :people="state.people" @update-people="handleUpdatePeople"></Table>
  </main>

  <Score v-if="state.isFinished" :score="state.score" :on-back-btn-click="resetScore" />
</template>

<style scoped>
@import './assets/styles/components/_app.scss';
</style>
