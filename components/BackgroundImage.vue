<script setup>
import { ref } from 'vue'

const className = ref('')
const position = ref('left')

const positionClasses = {
  left: 'blur-md left-0 translate-x-[-55%] translate-y-[-10%] scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]',
  right:
    'left-full -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]',
}
</script>

<template>
  <div class="backdrop absolute z-0 inset-0 overflow-hidden bg-indigo-50" :class="className">
    <img
      class="absolute top-0"
      :class="[positionClasses[position]]"
      src="/assets/images/bg-3.png"
      alt=""
      width="918"
      height="1495"
      priority
      unoptimized
    >
    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
  </div>
</template>

<style scoped>
@keyframes rotate {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
.backdrop {
  /* filter: blur(10px); */
}

.backdrop img {
  animation: rotate 1000s linear infinite;
  transform-origin: center center;
}
</style>
