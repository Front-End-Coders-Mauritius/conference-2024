<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineProps({
  href: {
    required: false,
    type: String,
  },
  linkClass: {
    required: false,
    type: String,
  },
})
</script>

<template>
  <div>
    <NuxtLink
      :to="href"
      :class="cn('absolute inset-0 z-0', linkClass)"
      tabindex="0"
    >
    </NuxtLink>
    <slot></slot>
  </div>
</template>
