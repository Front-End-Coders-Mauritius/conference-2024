<template>
  <NuxtLayout>
    <Hero />
    <Speakers />
    <Schedule :interval-in-mins="30" />
    <Sponsors />
  </NuxtLayout>
</template>
