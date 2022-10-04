<template>
  <article>
    <div>
      <img
        :src="props.image"
        :alt="props.title"
      >
    </div>
    <div>
      <h2>{{ props.title }}</h2>
      <p>{{ props.description }}</p>
    </div>
    <div>
      <button @click="$emit('close')">
        Tutup
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">

  defineEmits(['close'])

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  })
</script>

<style scoped>

</style>