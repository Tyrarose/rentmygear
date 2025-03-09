<script setup>
import { defineProps, computed } from 'vue';
import { RouterLink } from 'vue-router';


const props = defineProps({
  rental: {
    type: Object,
    required: true
  }
});

// Generate a simple hash based on title (fallback for ID)
const rentalId = computed(() => {
  return props.rental.title ? props.rental.title.replace(/\s+/g, '-').toLowerCase() : 'no-id';
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
    <div class="flex justify-center items-center">
      <img 
        :src="rental.image || '/products_img/default.png'" 
        :alt="rental.title" 
        class="w-full h-auto object-contain"
      >
    </div>

    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-brand-blue text-xl font-bold mb-4 transition-colors duration-200 hover:text-brand-yellow">
        {{ rental.title }}
      </h3>
      <p class="text-gray-600 mb-2">{{ rental.price }}</p>

      <div class="mt-auto">
        <RouterLink
          :to="`/rentals/${rentalId}`"
          class="bg-brand-blue text-white hover:bg-brand-yellow px-4 py-2 rounded-lg text-sm inline-block transition-colors duration-200 w-full text-center"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
