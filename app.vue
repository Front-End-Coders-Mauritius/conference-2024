<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster />
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

useHead({
  title: appConfig.title + " | " + appConfig.domain,
  meta: [
    {
      name: "description",
      content: appConfig.description,
    },
  ],
});
</script>
