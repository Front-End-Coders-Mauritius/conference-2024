<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  title: `${appConfig.title} | ${appConfig.domain}`,
  meta: [
    {
      name: 'description',
      content: appConfig.description,
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
