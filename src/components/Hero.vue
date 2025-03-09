<script setup>
import AnimatedBackground from '@/components/AnimatedBackground.vue';

defineProps({
    title: {
        type: String,
        default: 'Premium Rentals, Hassle-Free'
    },
    subtitle: {
        type: String,
        default: 'Find and rent high-quality essentials for your needs, delivered fast.'
    }
});
</script>

<template>
    <section class="relative h-screen p-6 sm:p-[80px] flex flex-col justify-center items-center text-white overflow-hidden">
        <AnimatedBackground />

        <!-- Content -->
        <div class="relative z-10 max-w-3xl text-center px-4">
            <p class="text-lg sm:text-2xl opacity-90 sm:mt-6">
                {{ subtitle }}
            </p>
            <h1 class="text-4xl sm:text-6xl font-bold mt-4  leading-tight drop-shadow-xl">
                {{ title }}
            </h1>

            <!-- CTA -->
            <div class="mt-8 sm:mt-12">
                <RouterLink
                    to="/rentals"
                    class="relative inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-5 text-lg sm:text-3xl font-semibold text-brand-blue rounded-full shadow-lg transition-all duration-300
                    bg-gradient-to-r from-brand-yellow to-brand-orange animate-[gradientAnimation_3s_infinite]
                    hover:bg-brand-blue hover:text-brand-white
                    transform hover:scale-105
                    before:absolute before:inset-0 before:rounded-full before:shadow-[0px_0px_20px_2px_rgba(75,90,228,0.5)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                >
                    Browse Rentals
                </RouterLink>
            </div>
        </div>
    </section>
</template>


<style>
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-1000px); }
    100% { transform: translateY(0px); }
}
@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
</style>
