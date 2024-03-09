<template>
    <div :class="computedClasses">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import clsx from 'clsx';

const props = defineProps(['className']);

const computedClasses = computed(() =>
    clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', props.className)
);
</script>
