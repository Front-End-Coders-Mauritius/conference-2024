<script lang="ts" setup>
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button
    type="button"
    variant="secondary"
    @click.prevent="console.log('clicked bookmark button')"
  >
    <slot></slot>
  </Button>
</template>
