<script lang="ts" setup>
const props = defineProps({
  href: {
    required: true,
    type: String,
  },
})
</script>

<template>
  <a :href="href" tabindex="0">
    <slot></slot>
  </a>
</template>
