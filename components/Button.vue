<template>
  <component :is="buttonType" :class="computedClasses" v-bind="buttonProps">
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from "vue";
import clsx from "clsx";

const props = defineProps(["className", "href"]);

const buttonType = props.href ? "RouterLink" : "button";
const buttonProps = props.href ? { to: props.href } : {};

const computedClasses = computed(() =>
  clsx(
    "inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70",
    props.className
  )
);
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
