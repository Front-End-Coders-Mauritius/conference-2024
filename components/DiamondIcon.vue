<template>
    <svg aria-hidden="true" :viewBox="viewBox" :stroke-width="strokeWidth" :stroke-linejoin="strokeLinejoin">
        <path d="M3 0L6 3L3 6L0 3Z" />
    </svg>
</template>

<script setup>
const props = defineProps(['viewBox', 'strokeWidth', 'strokeLinejoin']);
</script>
