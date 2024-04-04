<template>
  <div class="absolute inset-0 overflow-hidden bg-indigo-50" :class="className">
    <img
      class="absolute top-0"
      :class="[positionClasses[position]]"
      src="/assets/images/background.jpg"
      alt=""
      width="918"
      height="1495"
      priority
      unoptimized
    />
    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import clsx from "clsx";

const className = ref("");
const position = ref("left");

const positionClasses = {
  left: "left-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]",
  right:
    "left-full -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]",
};
</script>
