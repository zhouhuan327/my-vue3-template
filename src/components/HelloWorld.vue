<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store'
import { NButton } from 'naive-ui'

defineProps<{ msg: string }>()

const count = ref(0)
const store = useStore()
</script>

<template>
  <h1>{{ msg }}</h1>
  <NButton @click="store.count++">count is: {{ store.count }}</NButton>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
