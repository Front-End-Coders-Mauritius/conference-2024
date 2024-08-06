<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="flex-none py-16">
    <Container class="flex flex-col items-center justify-between md:flex-row">
      <Logo class="h-12 w-auto text-blue-600" />
      <p class="mt-6 text-base text-blue-500 md:mt-0">
        {{ currentYear }} | Organized by frontend.mu
      </p>
    </Container>
  </footer>
</template>
