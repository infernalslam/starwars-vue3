<template>
  <div class="container">
    <span class="yellow-text bold font-20"> SWAPI </span>
    <span class="yellow-text font-16"> The Star Wars API </span>
    <span class="white-text font-20 mt-10"> Try it now! </span>
  </div>
  <search @on-submit=onSubmit />
  <detail class="mt-10" :data="hero" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Search from '@/components/Search.vue'
import Detail from '@/components/Detail.vue'
import StrawarsProvider from '@/resources/starwars.provider'

export default defineComponent({
  name: 'Index',
  components: {
    Search,
    Detail
  },
  setup () {
    const hero = ref({})
    const strawarsProvider = new StrawarsProvider()

    const onSubmit = async (text: string) => {
      try {
        const { data } = await strawarsProvider.getHero(text)
        hero.value = data
      } catch (err) {
        alert(err)
      }
    }

    return {
      onSubmit,
      hero
    }
  }
})
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.yellow-text {
  color: #ffe300;
}
.bold {
  font-weight: bold;
}
.font-20 {
  font-size: 20px;
}
.font-16 {
  font-size: 16px;
}
.white-text {
  color: #fff;
}
.mt-10 {
  margin-top: 10px;
}
.bg-dark {
  background-color: #272b30;
}
</style>
