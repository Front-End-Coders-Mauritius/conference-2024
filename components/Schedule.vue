<template>
    <section aria-label="Schedule" class="py-20 sm:py-32">
        <Container class="relative z-10">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
                <h2 class="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                    Our three day schedule is jam-packed with brilliant, creative, evil geniuses.
                </h2>
                <p class="mt-4 font-display text-2xl tracking-tight text-blue-900">
                    The worst people in our industry giving the best talks you’ve ever seen.
                    Nothing will be recorded, and every attendee has to sign an NDA to watch the talks.
                </p>
            </div>
        </Container>
        <div class="relative mt-14 sm:mt-24">
            <BackgroundImage position="right" class="-bottom-32 -top-40" />
            <Container class="relative">
                <Tab.Group as="div" class="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
                    :vertical="tabOrientation === 'vertical'">
                    <Tab.List
                        class="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
                        <div v-for="(day, dayIndex) in schedule" :key="day.dateTime"
                            :class="clsx('relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0', dayIndex !== selectedIndex && 'opacity-70')">
                            <h3 class="text-2xl font-semibold tracking-tight text-blue-900">
                                <time :dateTime="day.dateTime">{{ day.date }}</time>
                            </h3>
                            <p class="mt-1.5 text-base tracking-tight text-blue-900">{{ day.summary }}</p>
                        </div>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel v-for="day in schedule" :key="day.dateTime" class="ui-not-focus-visible:outline-none">
                            <ol role="list"
                                class="space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur">
                                <li v-for="(timeSlot, timeSlotIndex) in day.timeSlots" :key="timeSlot.start"
                                    aria-label="...">
                                    <div v-if="timeSlotIndex > 0" class="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                                    <h4 class="text-lg font-semibold tracking-tight text-blue-900">{{ timeSlot.name }}</h4>
                                    <p v-if="timeSlot.description" class="mt-1 tracking-tight text-blue-900">{{
                                        timeSlot.description }}</p>
                                    <p class="mt-1 font-mono text-sm text-slate-500">
                                        <time :dateTime="`${day.dateTime}T${timeSlot.start}-08:00`">
                                            {{ timeSlot.start }}
                                        </time>
                                        -
                                        <time :dateTime="`${day.dateTime}T${timeSlot.end}-08:00`">
                                            {{ timeSlot.end }}
                                        </time>
                                        PST
                                    </p>
                                </li>
                            </ol>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                <div class="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <section v-for="day in schedule" :key="day.dateTime">
                        <h3 class="text-2xl font-semibold tracking-tight text-blue-900">
                            <time :dateTime="day.dateTime">{{ day.date }}</time>
                        </h3>
                        <p class="mt-1.5 text-base tracking-tight text-blue-900">{{ day.summary }}</p>
                        <ol role="list"
                            class="space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur mt-10">
                            <li v-for="(timeSlot, timeSlotIndex) in day.timeSlots" :key="timeSlot.start" aria-label="...">
                                <div v-if="timeSlotIndex > 0" class="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                                <h4 class="text-lg font-semibold tracking-tight text-blue-900">{{ timeSlot.name }}</h4>
                                <p v-if="timeSlot.description" class="mt-1 tracking-tight text-blue-900">{{
                                    timeSlot.description }}</p>
                                <p class="mt-1 font-mono text-sm text-slate-500">
                                    <time :dateTime="`${day.dateTime}T${timeSlot.start}-08:00`">
                                        {{ timeSlot.start }}
                                    </time>
                                    -
                                    <time :dateTime="`${day.dateTime}T${timeSlot.end}-08:00`">
                                        {{ timeSlot.end }}
                                    </time>
                                    PST
                                </p>
                            </li>
                        </ol>
                    </section>
                </div>
            </Container>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import clsx from 'clsx';

interface TimeSlot {
    name: string;
    description: string | null;
    start: string;
    end: string;
}

interface Day {
    date: string;
    dateTime: string;
    summary: string;
    timeSlots: TimeSlot[];
}


const schedule = [
    {
        date: 'April 4',
        dateTime: '2022-04-04',
        summary:
            'The first day of the conference is focused on dark patterns for ecommerce.',
        timeSlots: [
            {
                name: 'Steven McHail',
                description: 'Not so one-time payments',
                start: '9:00AM',
                end: '10:00AM',
            },
            {
                name: 'Jaquelin Isch',
                description: 'The finer print',
                start: '10:00AM',
                end: '11:00AM',
            },
            {
                name: 'Dianne Guilianelli',
                description: 'Post-purchase blackmail',
                start: '11:00AM',
                end: '12:00PM',
            },
            {
                name: 'Lunch',
                description: null,
                start: '12:00PM',
                end: '1:00PM',
            },
            {
                name: 'Ronni Cantadore',
                description: 'Buy or die',
                start: '1:00PM',
                end: '2:00PM',
            },
            {
                name: 'Erhart Cockrin',
                description: 'In-person cancellation',
                start: '2:00PM',
                end: '3:00PM',
            },
            {
                name: 'Parker Johnson',
                description: 'The pay/cancel switcheroo',
                start: '3:00PM',
                end: '4:00PM',
            },
        ],
    },
    {
        date: 'April 5',
        dateTime: '2022-04-05',
        summary:
            'Next we spend the day talking about deceiving people with technology.',
        timeSlots: [
            {
                name: 'Damaris Kimura',
                description: 'The invisible card reader',
                start: '9:00AM',
                end: '10:00AM',
            },
            {
                name: 'Ibrahim Frasch',
                description: 'Stealing fingerprints',
                start: '10:00AM',
                end: '11:00AM',
            },
            {
                name: 'Cathlene Burrage',
                description: 'Voting machines',
                start: '11:00AM',
                end: '12:00PM',
            },
            {
                name: 'Lunch',
                description: null,
                start: '12:00PM',
                end: '1:00PM',
            },
            {
                name: 'Rinaldo Beynon',
                description: 'Blackhat SEO that works',
                start: '1:00PM',
                end: '2:00PM',
            },
            {
                name: 'Waylon Hyden',
                description: 'Turning your audience into a botnet',
                start: '2:00PM',
                end: '3:00PM',
            },
            {
                name: 'Giordano Sagucio',
                description: 'Fly phishing',
                start: '3:00PM',
                end: '4:00PM',
            },
        ],
    },
    {
        date: 'April 6',
        dateTime: '2022-04-06',
        summary:
            'We close out the event previewing new techniques that are still in development.',
        timeSlots: [
            {
                name: 'Andrew Greene',
                description: 'Neuralink dark patterns',
                start: '9:00AM',
                end: '10:00AM',
            },
            {
                name: 'Heather Terry',
                description: 'DALL-E for passports',
                start: '10:00AM',
                end: '11:00AM',
            },
            {
                name: 'Piers Wilkins',
                description: 'Quantum password cracking',
                start: '11:00AM',
                end: '12:00PM',
            },
            {
                name: 'Lunch',
                description: null,
                start: '12:00PM',
                end: '1:00PM',
            },
            {
                name: 'Gordon Sanderson',
                description: 'SkyNet is coming',
                start: '1:00PM',
                end: '2:00PM',
            },
            {
                name: 'Kimberly Parsons',
                description: 'Dark patterns for the metaverse',
                start: '2:00PM',
                end: '3:00PM',
            },
            {
                name: 'Richard Astley',
                description: 'Knowing the game and playing it',
                start: '3:00PM',
                end: '4:00PM',
            },
        ],
    },
];

const tabOrientation = ref('horizontal');

onMounted(() => {
    const smMediaQuery = window.matchMedia('(min-width: 640px)');

    const onMediaQueryChange = ({ matches }) => {
        tabOrientation.value = matches ? 'vertical' : 'horizontal';
    };

    onMediaQueryChange(smMediaQuery);
    smMediaQuery.addEventListener('change', onMediaQueryChange);

    onBeforeUnmount(() => {
        smMediaQuery.removeEventListener('change', onMediaQueryChange);
    });
});
</script>


