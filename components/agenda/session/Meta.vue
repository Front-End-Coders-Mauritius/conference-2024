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
    {{ startTime }} - {{ endTime }}
    <span v-if="location">@ {{ location }}</span>
  </p>
</template>
