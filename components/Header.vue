<template>
  <header class="relative z-50 flex-none lg:pt-11">
    <Container class="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
      <NuxtLink to="/" class="mt-10 lg:mt-0 lg:grow lg:basis-0">
        <!-- <Logo class="h-12 w-auto text-blue-600" /> -->
        <img class="h-12 w-auto text-blue-600" src="../assets/images/logos/logo-simple-by-upcode.svg" alt="">
      </NuxtLink>
      <div class="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
        <div class="mx-auto flex items-center gap-4 px-4">
          <p>{{ useAppConfig().conference_dates }}</p>
          <!-- <DiamondIcon
            className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
          /> -->
          <p>MDX, Mauritius</p>
        </div>
      </div>
      <div class="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
        <a class="button" :href="useAppConfig().links.sponsor_us">Become a sponsor</a>
      </div>
    </Container>
  </header>
</template>
