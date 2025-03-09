<template>
    <section class="bg-[#2e3bb0] text-white py-24 text-center">
        <div class="max-w-4xl mx-auto px-6">
            <h1 class="text-4xl font-bold">About Us</h1>
            <p class="mt-4 text-lg opacity-80">
                We are committed to providing high-quality rentals at affordable prices. Whether you need tech gadgets, storage solutions, or party essentials, we make renting easy and hassle-free.
            </p>
        </div>
    </section>

    <section class="py-16 max-w-7xl mx-auto px-6 lg:px-12 text-gray-700">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-semibold text-[#2e3bb0]">Our Mission</h2>
                <p class="mt-4 leading-relaxed">
                    Our mission is to make high-quality rentals accessible and convenient. Whether you need an item for a day or a month, we ensure a seamless rental experience.
                </p>
            </div>
            <div>
                <img src="/android-chrome-512x512.png" alt="Our Mission" class="rounded-lg shadow-lg w-full">
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-100">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 class="text-3xl font-semibold text-[#2e3bb0]">Find Us Online</h2>
            <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <img src="/android-chrome-192x192.png" alt="Team Member" class="w-32 h-32 mx-auto rounded-full shadow-md">
                    <h3 class="mt-4 text-xl font-semibold">Online Shop</h3>
                    <a href="https://twitter.com" target="_blank" class="hover:text-[#ffc44d] transition">
                        <i class="fa-solid fa-globe pr-3"></i>www.rentmygear2600.shop
                    </a>
                </div>
                <div class="text-center">
                    <img src="/android-chrome-192x192.png" alt="Team Member" class="w-32 h-32 mx-auto rounded-full shadow-md">
                    <h3 class="mt-4 text-xl font-semibold">Facebook</h3>
                    <a href="https://www.facebook.com/people/Rent-My-Gear-2600/100083677266038/" target="_blank" class="hover:text-[#ffc44d] transition">
                        <i class="fa-brands fa-facebook pr-3"></i>Rent My Gear 2600
                    </a>
                </div>
                <div class="text-center">
                    <img src="/android-chrome-192x192.png" alt="Team Member" class="w-32 h-32 mx-auto rounded-full shadow-md">
                    <h3 class="mt-4 text-xl font-semibold">Instagram</h3>
                    <a href="https://instagram.com" target="_blank" class="hover:text-[#ffc44d] transition">
                        <i class="fa-brands fa-instagram pr-3"></i>RentMyGear2600
                    </a>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
</script>
