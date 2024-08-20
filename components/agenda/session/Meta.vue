<script lang="ts" setup>
defineProps({
  startTime: {
    required: true,
    type: String,
  },
  endTime: {
    required: true,
    type: String,
  },
  location: {
    required: false,
    type: String,
  },
})
</script>

<template>
  <p>
    <time>{{ startTime }} - {{ endTime }}</time>
    <span v-if="location"> @ {{ location }}</span>
  </p>
</template>
