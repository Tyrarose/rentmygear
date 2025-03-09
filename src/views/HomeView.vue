<script setup>
import Hero from '@/components/Hero.vue'
import RentalListings from '@/components/RentalListings.vue'
import ChatButton from '@/components/ChatButton.vue';
import Request from '@/components/Request.vue';
import Footer from '@/components/Footer.vue';

import heroImage from '@/assets/img/hero.jpg';
</script>

<template>
    <Hero subtitle="Welcome to" title="Rent My Gear 2600" :backgroundImage="heroImage"/>
    <RentalListings :limit="4" :show-button="true"/>
    <Request/>
    <ChatButton/>
    <Footer />
</template>