<script setup>
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
    <div class="absolute inset-0 overflow-hidden">
        <!-- Background Gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#4b5ae4] via-[#3c4ac6] to-[#2e3bb0] opacity-90"></div>

        <!-- Floating Circles -->
        <div v-for="n in 50" :key="n" class="absolute rounded-full" :style="randomCircleStyle(n)"></div>
    </div>
</template>

<style>
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-800px); }
    100% { transform: translateY(0px); }
}
</style>
