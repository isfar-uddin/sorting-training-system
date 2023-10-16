<script setup>
import { ref, reactive } from 'vue'
import Checkbox from './Checkbox.vue'

const draggingIndex = ref(null)
const draggingOver = ref(null)

const state = reactive({
  selectedPeople: []
})

const { people } = defineProps({
  people: Array,
  onUpdatePeople: Function
})

const emits = defineEmits('update-people')

function handleDragStart(index) {
  draggingIndex.value = index
}

function handleDrop(event, dropIndex) {
  event.preventDefault()

  if (draggingIndex.value !== dropIndex) {
    emits('update-people', { dropIndex, newIndex: draggingIndex.value })
  }
}

function handleDragEnd() {
  draggingIndex.value = null
}

function handleDragOver(event) {
  event.preventDefault()
}

function handleSelection(id) {
  if (state.selectedPeople.indexOf(id) === -1) {
    state.selectedPeople.push(id)
  } else {
    state.selectedPeople.splice(state.selectedPeople.indexOf(id), 1)
  }
}
</script>

<template>
  <table width="100%">
    <thead>
      <th width="40%">Email</th>
      <th width="20%">Potatoes</th>
      <th width="40%">Full name</th>
    </thead>
    <tbody>
      <tr
        v-for="(person, index) in people"
        :key="person.potatoes"
        draggable="true"
        :class="{
          dragging: index === draggingIndex,
          'drag-over': index === draggingOver,
          selected: state.selectedPeople?.includes(person.potatoes)
        }"
        @dragstart="handleDragStart(index)"
        @dragend="handleDragEnd"
        @dragover="handleDragOver"
        @drop="handleDrop($event, index)"
      >
        <td>
          <Checkbox :on-change="handleSelection" :id="person.potatoes" />
          <span class="email">{{ person.email }}</span>
        </td>
        <td>{{ person.potatoes }}</td>
        <td class="full-name">{{ person.fullName }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import '../assets/styles/components/_table.scss';
</style>
