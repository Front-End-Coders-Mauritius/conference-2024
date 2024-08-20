<script lang="ts" setup>
defineProps({
  href: {
    required: false,
    type: String,
  },
})
</script>

<template>
  <div class="relative">
    <NuxtLink :to="href" class="absolute inset-0 z-0" tabindex="0">
    </NuxtLink>
    <slot></slot>
  </div>
</template>
