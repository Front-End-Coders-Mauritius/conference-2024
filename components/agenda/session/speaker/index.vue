<script lang="ts" setup>
defineProps({
  href: {
    required: true,
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
