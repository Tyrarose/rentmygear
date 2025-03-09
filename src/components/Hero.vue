<script setup>
defineProps({
    title: {
        type: String,
        default: 'Premium Rentals, Hassle-Free'
    },
    subtitle: {
        type: String,
        default: 'Find and rent high-quality essentials for your needs, delivered fast.'
    }
})
const randomCircleStyle = (index) => {
    const size = `${Math.floor(Math.random() * 200) + 50}px`; // 50px - 250px
    const blur = `${Math.floor(Math.random() * 100)}px`; // 0px - 100px
    const opacity = Math.random() * 0.6 + 0.2; // 0.2 - 0.8
    const colors = ['#ffc44d', '#fbfcf1', '#4b5ae4'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const delay = `${Math.random() * 5}s`; // Animation delay variation

    return {
        width: size,
        height: size,
        backgroundColor: color,
        position: 'absolute',
        top,
        left,
        opacity,
        filter: `blur(${blur})`,
        animation: `float ${5 + Math.random() * 5}s infinite ease-in-out`,
        animationDelay: delay
    };
};
</script>

<template>
    <section class="relative h-screen flex flex-col justify-center items-center bg-[#4b5ae4] text-white overflow-hidden">
        <!-- Background Gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#4b5ae4] via-[#3c4ac6] to-[#2e3bb0] opacity-90"></div>

        <!-- MASSIVE Circle Chaos Begins -->
        <div v-for="n in 50" :key="n"
             class="absolute rounded-full"
             :style="randomCircleStyle(n)"></div>

        <!-- Content -->
        <div class="relative z-10 max-w-3xl text-center">
            <h1 class="text-6xl font-bold leading-tight drop-shadow-xl">
                {{ title }}
            </h1>
            <p class="text-2xl opacity-90 mt-6">
                {{ subtitle }}
            </p>

            <!-- CTA -->
            <div class="mt-12">
                <RouterLink
                    to="/rentals"
                    class="px-12 py-5 text-3xl font-semibold bg-[#ffc44d] text-[#4b5ae4] rounded-full shadow-2xl hover:bg-[#fbfcf1] hover:text-[#4b5ae4] transition-all duration-300"
                    >
                    Browse Rentals 🚀
                </RouterLink>
            </div>
        </div>
    </section>
    
</template>

<style>
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}
</style>
