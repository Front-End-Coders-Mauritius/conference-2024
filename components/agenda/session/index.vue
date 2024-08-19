<script lang="ts" setup>
defineProps({
  href: {
    required: false,
    type: String,
  },
})
</script>

<template>
  <NuxtLink
    :href="href"
    tabindex="0"
  >
    <slot></slot>
  </NuxtLink>
</template>
