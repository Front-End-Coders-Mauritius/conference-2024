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
  <!-- <BackgroundImage class="-bottom-14 -top-36" /> -->
  <div class="relative z-10 bg-gradient-to-b from-white to-blue-100 min-h-screen px-4">
    <Header />
    <slot />
    <Footer />
    <Toaster />
  </div>
</template>
