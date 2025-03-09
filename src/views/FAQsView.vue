<script setup>
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';

const faqs = ref([
    { 
        question: 'How do I rent an item?', 
        answer: 'Simply browse our catalog, select the item you need, and complete the rental form. Once confirmed, you can pick it up or arrange for delivery.', 
        open: false
    },
    { 
        question: 'What are the rental payment options?', 
        answer: 'We accept payments via GCash, PayMaya, bank transfers, and cash upon pickup.', 
        open: false
    },
    { 
        question: 'Is there a deposit required?', 
        answer: 'Yes, some high-value items require a refundable deposit, which will be returned upon item return.', 
        open: false
    },
    { 
        question: 'How long can I rent an item?', 
        answer: 'Our standard rental period is 24 hours, but you can extend your rental at an additional cost.', 
        open: false
    },
    { 
        question: 'What happens if I damage the rented item?', 
        answer: 'In case of damage, you may be required to pay for repairs or replacement, depending on the severity of the damage.', 
        open: false
    }
]);

// Toggle FAQ
const toggleFAQ = (index) => {
    faqs.value[index].open = !faqs.value[index].open;
};
</script>

<template>
    <section class="max-w-4xl mx-auto py-16 px-6 lg:px-12">
        <h1 class="text-4xl font-bold text-center text-[#2e3bb0]">Frequently Asked Questions</h1>
        <p class="text-center text-gray-600 mt-2">Find answers to common questions about our rental services.</p>

        <div class="mt-8 space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                <button @click="toggleFAQ(index)" class="w-full text-left flex justify-between items-center">
                    <span class="text-lg font-medium text-[#2e3bb0]">{{ faq.question }}</span>
                    <span class="text-gray-500">{{ faq.open ? '−' : '+' }}</span>
                </button>
                <p v-if="faq.open" class="mt-2 text-gray-700">{{ faq.answer }}</p>
            </div>
        </div>
    </section>
    <Footer />
</template>

<style scoped>
button {
    transition: all 0.2s ease-in-out;
}
button:hover {
    color: #ffc44d;
}
</style>
