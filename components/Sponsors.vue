<template>
    <section aria-label="Sponsors" class="py-20 sm:py-32">
        <Container>
            <h2
                class="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Current sponsorships for our workshops and speakers.
            </h2>
            <div
                class="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
                <div v-for="sponsor in sponsors" :key="sponsor.name" class="flex items-center justify-center">
                    <nuxtImg :src="sponsor.logo" :alt="sponsor.name" unoptimized class="h-12" />
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup>
const sponsors = [
    { name: 'Transistor', logo: 'images/logos/transistor.svg' },
    { name: 'Tuple', logo: 'images/logos/tuple.svg' },
    { name: 'StaticKit', logo: 'images/logos/staticKit.svg' },
    { name: 'Mirage', logo: 'images/logos/mirage.svg' },
    { name: 'Laravel', logo: 'images/logos/laravel.svg' },
    { name: 'Statamic', logo: 'images/logos/statamic.svg' },
];
</script>
