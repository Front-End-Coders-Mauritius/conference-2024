<script setup>
const sponsors = [
  { dar: true, name: 'MDX', logo: 'images/logos/mdx-logo.png' },
  { dar: true, name: 'Honoris', logo: 'images/logos/honoris.webp' },
  { dar: false, name: 'Upcode', logo: 'images/logos/upcode-log.svg' },
]
</script>

<template>
  <section
    aria-label="Sponsors"
    class="py-20 sm:py-32"
  >
    <Container>
      <h2
        class="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl"
      >
        Proudly sponsored by
      </h2>
      <div
        class="mx-auto mt-20 justify-center grid max-w-4xl grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32"
      >
        <div
          v-for="sponsor in sponsors"
          :key="sponsor.name"
          class="flex items-center justify-center p-3 rounded-md"
          :class="sponsor.dar ? 'bg-black' : ''"
        >
          <nuxtImg
            :src="sponsor.logo"
            :alt="sponsor.name"
            unoptimized
            class="h-12"
          />
        </div>
        <a
          :href="useAppConfig().links.sponsor_us"
          class="flex items-center justify-center p-3 rounded-md bg-yellow-300 text-black outline-dotted outline-4 hover:outline-gray-500 hover:scale-110 transition-all"
        >
          Your Logo Here ?
        </a>
      </div>

      <div class="mx-auto w-full grid place-items-center py-16">
        <Button :href="useAppConfig().links.sponsor_us">
          I would like to sponsor this event
        </Button>
      </div>
    </Container>
  </section>
</template>
