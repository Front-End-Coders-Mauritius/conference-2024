<script setup>
import { onMounted, ref } from 'vue'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'

import andrewGreeneImage from '@/assets/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/assets/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/assets/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/assets/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/assets/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/assets/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/assets/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/assets/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/assets/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/assets/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/assets/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/assets/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/assets/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/assets/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/assets/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/assets/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/assets/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/assets/images/avatars/waylon-hyden.jpg'

const tabOrientation = ref('horizontal')

onMounted(() => {
  const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

  const onMediaQueryChange = ({ matches }) => {
    tabOrientation.value = matches ? 'vertical' : 'horizontal'
  }

  onMediaQueryChange(lgMediaQuery)
  lgMediaQuery.addEventListener('change', onMediaQueryChange)

  return () => {
    lgMediaQuery.removeEventListener('change', onMediaQueryChange)
  }
})

const days = [
  {
    name: 'Opening Day',
    date: 'April 4',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
        image: stevenMchailImage,
      },
      {
        name: 'Jaquelin Isch',
        role: 'UX Design at InGen',
        image: jaquelinIschImage,
      },
      {
        name: 'Dianne Guilianelli',
        role: 'General Manager at Initech',
        image: dianneGuilianelliImage,
      },
      {
        name: 'Ronni Cantadore',
        role: 'Design Engineer at Weyland-Yutani',
        image: ronniCantadoreImage,
      },
      {
        name: 'Erhart Cockrin',
        role: 'Product Lead at Cyberdyne Systems',
        image: erhartCockrinImage,
      },
      {
        name: 'Parker Johnson',
        role: 'UI Designer at MomCorp',
        image: parkerJohnsonImage,
      },
    ],
  },
  {
    name: 'Speakers & Workshops',
    date: 'April 5',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
        image: damarisKimuraImage,
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer at Umbrella Corp',
        image: ibrahimFraschImage,
      },
      {
        name: 'Cathlene Burrage',
        role: 'Frontend Developer at Buy n Large',
        image: cathleneBurrageImage,
      },
      {
        name: 'Rinaldo Beynon',
        role: 'Data Scientist at Rekall',
        image: rinaldoBeynonImage,
      },
      {
        name: 'Waylon Hyden',
        role: 'DevOps at RDA Corporation',
        image: waylonHydenImage,
      },
      {
        name: 'Giordano Sagucio',
        role: 'Game Developer at Soylent Corp',
        image: giordanoSagucioImage,
      },
    ],
  },
  {
    name: 'Interviews',
    date: 'April 6',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'Frontend Developer at Ultratech',
        image: andrewGreeneImage,
      },
      {
        name: 'Heather Terry',
        role: 'Backend Developer at Xanatos Enterprises',
        image: heatherTerryImage,
      },
      {
        name: 'Piers Wilkins',
        role: 'Full stack Developer at BiffCo',
        image: piersWilkinsImage,
      },
      {
        name: 'Gordon Sanderson',
        role: 'Mobile Developer at Cobra Industries',
        image: gordonSandersonImage,
      },
      {
        name: 'Kimberly Parsons',
        role: 'Game Developer at Tyrell Corporation',
        image: kimberlyParsonsImage,
      },
      {
        name: 'Richard Astley',
        role: 'CEO at Roll Out',
        image: richardAstley,
      },
    ],
  },
]
</script>

<template>
  <section
    aria-labelledby="speakers-title"
    class="py-20 sm:py-32"
  >
    <svg
      aria-hidden="true"
      width="0"
      height="0"
    >
      <defs>
        <clipPath
          v-for="index in [0, 1, 2]"
          :key="index"
          clipPathUnits="objectBoundingBox"
        >
          <template v-if="index === 0">
            <path
              d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0"
            />
          </template>
          <template v-else-if="index === 1">
            <path
              d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7"
            />
          </template>
          <template v-else>
            <path
              d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0"
            />
          </template>
        </clipPath>
      </defs>
    </svg>
    <Container>
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
          Speakers
        </h2>
        <p class="mt-4 font-display text-2xl tracking-tight text-blue-900">
          Learn from the experts on the cutting-edge of deception at the most sinister companies.
        </p>
      </div>
      <TabGroup
        as="div"
        class="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
        :vertical="tabOrientation === 'vertical'"
      >
        <div class="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
          <div class="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
          <TabList
            class="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left"
          >
            <template #default="{ selectedIndex }">
              <template
                v-for="(day, dayIndex) in days"
                :key="day.dateTime"
              >
                <div class="relative lg:pl-8">
                  <DiamondIcon
                    class="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block"
                    :class="{
                      'fill-blue-600 stroke-blue-600': dayIndex === selectedIndex,
                      'fill-transparent stroke-slate-400': dayIndex !== selectedIndex,
                    }"
                  />
                  <div class="relative">
                    <div
                      class="font-mono text-sm"
                      :class="{ 'text-blue-600': dayIndex === selectedIndex, 'text-slate-500': dayIndex !== selectedIndex }"
                    >
                      <Tab class="ui-not-focus-visible:outline-none">
                        <span class="absolute inset-0" />
                        {{ day.name }}
                      </Tab>
                    </div>
                    <time
                      :dateTime="day.dateTime"
                      class="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                    >
                      {{ day.date }}
                    </time>
                  </div>
                </div>
              </template>
            </template>
          </TabList>
        </div>
        <TabPanels class="lg:col-span-3">
          <template
            v-for="day in days"
            :key="day.dateTime"
          >
            <TabPanel
              class="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
              :unmount="false"
            >
              <div
                v-for="(speaker, speakerIndex) in day.speakers"
                :key="speakerIndex"
              >
                <div class="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                  <div
                    class="absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6"
                    :class="[
                      'border-blue-300',
                      'border-indigo-300',
                      'border-sky-300',
                    ][speakerIndex % 3]"
                  />
                  <div
                    class="absolute inset-0 bg-indigo-50"
                    :style="{ clipPath: `url(#${id}-${speakerIndex % 3})` }"
                  >
                    <img
                      class="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                      :src="speaker.image"
                      alt=""
                      priority
                      sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    >
                  </div>
                </div>
                <h3 class="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                  {{ speaker.name }}
                </h3>
                <p class="mt-1 text-base tracking-tight text-slate-500">
                  {{ speaker.role }}
                </p>
              </div>
            </TabPanel>
          </template>
        </TabPanels>
      </TabGroup>
    </Container>
  </section>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
