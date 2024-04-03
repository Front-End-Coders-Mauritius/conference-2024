<template>
    <div class="relative py-20 sm:pb-24 sm:pt-36">
        <BackgroundImage class="-bottom-14 -top-36" />
        <Container class="relative">
            <div class="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
                <h1 class="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
                    <span class="sr-only">frontend & friends - </span>frontend & friends conference
                </h1>
                <div class="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
                    <p>
                        After more than 50 succesful meetups organized in Mauritius, we are proud to announce the first ever frontend & friends conference.
                    </p>
                    <p>
                        A two day event where you can learn from the best in the industry, meet other frontend developers and make new connections.
                    </p>
                </div>
                <Button href="#" class="mt-10 w-full sm:hidden">
                    Get your tickets
                </Button>
                <dl
                    class="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                    <div v-for="[name, value] in data" :key="name">
                        <dt class="font-mono text-sm text-blue-600">{{ name }}</dt>
                        <dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">{{ value }}</dd>
                    </div>
                </dl>
            </div>
        </Container>
    </div>
</template>

<script setup>

const props = defineProps();
const data = [
    ['Speakers', '24'],
    ['People Attending', '300'],
    ['Venue', 'Middlesex University'],
    ['Location', 'Flic-en-Flac, Mauritius'],
];
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
