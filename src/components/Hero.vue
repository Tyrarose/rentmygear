<script setup>
defineProps({
    title: {
        type: String,
        default: 'Rent an item'
    },
    subtitle: {
        type: String,
        default: 'Rent your need'
    },
    backgroundImage: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <section class="py-48 mb-4 relative" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <div class="absolute inset-0 bg-brand-blue opacity-70"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
            <div class="text-center">
                <p class="my-4 text-xl text-brand-white">
                    {{ subtitle }}
                </p>
                <h1 class="text-4xl font-extrabold text-brand-white sm:text-5xl md:text-6xl">
                    {{ title }}
                </h1>
            </div>
        </div>
    </section>
</template>