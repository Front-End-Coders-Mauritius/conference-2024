<script setup lang="ts">
const { toc } = useContent()

</script>


<template>
  <Header />
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid pt-24 grid-cols-8">
    <div class="col-span-5 prose">
      <ContentDoc v-slot="{ doc }">
        <article class="w-full">
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
    <div v-if="toc && toc.links" class="col-span-3">
      <ul class="sticky top-0 space-y-3  pt-12">
        <li v-for="link in toc.links" :key="link.text">
          <a 
            :href="`#${link.id}`" 
            :id="link.id"
            class="block text-blue-600 hover:font-bold target:underline"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>

  </main>
</template>

<style>
html, body {
  scroll-behavior: smooth;
}
</style>