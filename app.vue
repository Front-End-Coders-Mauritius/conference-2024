<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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