<script setup lang="ts">
const { toc } = useContent()

</script>


<template>
  <Header />
     <div v-if="toc && toc.links" class="bg-white shadow-sm sticky top-0 block md:hidden w-full">
      <ul class="list-none flex items-center p-4 gap-2">
        <li v-for="link in toc.links" :key="link.text">
          <a 
            :href="`#${link.id}`" 
            :id="link.id"
            class=" text-blue-600 hover:font-bold target:underline block no-underline target:text-blue-700"
          >
            {{ link.text.replace('Sponsorship', '') }}
          </a>

        </li>
      </ul>
    </div>
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:grid md:pt-24 pt-4 grid-cols-8">
    <div class="col-span-5 prose">
      <ContentDoc v-slot="{ doc }">
        <article class="w-full">
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>


    <div v-if="toc && toc.links" class="col-span-3 hidden md:block">
      <ul class="sticky top-0 space-y-3  pt-12">
        <li v-for="link in toc.links" :key="link.text">
          <a 
            :href="`#${link.id}`" 
            :id="link.id"
            class="text-blue-600 hover:font-bold target:underline block"
          >
            {{ link.text }}
          </a>
           <!-- mobile -->

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