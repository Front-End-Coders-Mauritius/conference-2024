<script lang="ts" setup>
import { Dayjs } from 'dayjs'

defineProps({
  currentDateTime: {
    required: true,
    type: Dayjs,
  },
})
</script>

<template>
  <div :title="`Current time: ${currentDateTime.format('HH:mm')}`"></div>
</template>
