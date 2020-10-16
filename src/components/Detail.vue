<template>
  <div class="bg-dark white-text">
    <div v-if="isShowContent" class="container-profile">
      <div class="reponse">
         <img :src="hero.img" class="profile-img" alt="hero">
      </div>
      <div class="reponse">
        <span> {{ hero.name }} </span>
      </div>
      <div class="reponse">
        <span> {{ data }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Detail',
  props: {
    data: {
      type: Object
    }
  },
  setup (props) {
    const isShowContent = computed(() => {
      if (props.data?.name) return true
      return false
    })

    const hero = computed(() => {
      return {
        name: props.data?.name,
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png'
      }
    })
    return {
      hero,
      isShowContent
    }
  }
})
</script>

<style lang="scss" scoped>
.container-profile {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.profile-img {
  border-radius: 50%;
  object-fit: contain;
  width: 50%;
}
.reponse {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
