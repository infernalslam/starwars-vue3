<template>
  <div class="container mt-10 white-text">
    <div>
      <span> https://swapi.dev/api/ </span>
      <input type="text" v-model="text">
      <button @click="submit"> request </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Search',
  setup (props, { emit }) {
    const text = ref('')
    text.value = 'people/1/'

    const submit = () => {
      emit('on-submit', text.value)
    }

    return {
      text,
      submit
    }
  }
})
</script>
