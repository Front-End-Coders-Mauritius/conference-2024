<script lang="ts" setup>
defineProps({
  src: {
    required: false,
    type: String,
  },
})
</script>

<template>
  <NuxtImg
    :src="src ?? ''"
    alt="avatar"
    aria-hidden="true"
  />
</template>
