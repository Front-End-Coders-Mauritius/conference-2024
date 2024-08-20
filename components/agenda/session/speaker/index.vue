<script lang="ts" setup>
const props = defineProps({
  href: {
    required: true,
    type: String,
  },
})

const router = useRouter()

function navigateToHref() {
  router.push(props.href)
}
</script>

<template>
  <span
    :data-href="href"
    tabindex="0"
    role="link"
    @click.prevent="navigateToHref"
    @keyup.enter.prevent="navigateToHref"
  >
    <slot></slot>
  </span>
</template>
