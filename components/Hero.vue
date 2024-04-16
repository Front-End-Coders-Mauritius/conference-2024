<template>
  <div class="relative py-20 sm:pb-24 sm:pt-36">
    <Container class="relative z-10">
      <div class="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <h1
          class="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl"
        >
          <span class="sr-only">frontend & friends - </span> {{  appConfig.title }}
        </h1>
        <div
          class="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900"
        >
          <p>
            After more than <a class="wave" target="_blank" href="https://frontend.mu/meetups">50 succesful meetups organized</a> in Mauritius, we are
            proud to announce the first ever frontend & friends conference.
          </p>
          <p>
            A two day event where you can learn from the best in the industry,
            meet other frontend developers and make new connections.
          </p>
        </div>
        <!-- <Button href="#" class="mt-10 w-full sm:hidden">
          Get your tickets
        </Button> -->
        <dl
          class="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left"
        >
          <div v-for="(value, key) of appConfig.statistics" :key="key">
            <dt class="font-mono text-sm capitalize text-blue-600">{{ key }}</dt>
            <dd
              class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900"
            >
              {{ value }}
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  </div>
</template>

<script setup>
const props = defineProps();
const appConfig = useAppConfig();
</script>

<style scoped lang="postcss">
/* Add any scoped styles if needed */


:root {
  --thetransition : all .5s cubic-bezier(1,.25,0,.75) 0s;
}

a.wave {
  border-bottom: 2px solid theme(colors.blue.500);
  &:hover {
    border-bottom:none;
    padding-bottom: 2px;
    background-repeat: repeat;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 10 18'%3E%3Cstyle type='text/css'%3E.squiggle%7Banimation:shift .5s linear infinite;%7D@keyframes shift %7Bfrom %7Btransform:translateX(-10px);%7Dto %7Btransform:translateX(0);%7D%7D%3C/style%3E%3Cpath fill='none' stroke='skyblue' stroke-width='1' class='squiggle' d='M0,17.5 c 2.5,0,2.5,-1.5,5,-1.5 s 2.5,1.5,5,1.5 c 2.5,0,2.5,-1.5,5,-1.5 s 2.5,1.5,5,1.5' /%3E%3C/svg%3E");
  }
}

</style>
