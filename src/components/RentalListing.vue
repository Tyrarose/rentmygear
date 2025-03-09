<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  rental: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">

    <!-- Image Section -->
    <div class="flex justify-center items-center">
      <img 
        :src="rental.image || `/products_img/2.png`" 
        :alt="rental.title" 
        class="w-full h-auto object-contain"
      >
    </div>

    <!-- Content Section -->
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-brand-blue text-xl font-bold mb-4 transition-colors duration-200 hover:text-brand-yellow">
        {{ rental.title }}
      </h3>

      <!-- Push the button to the bottom -->
      <div class="mt-auto">
        <RouterLink
          :to="`/rentals/${rental.id}`"
          class="bg-brand-blue text-white hover:bg-brand-yellow px-4 py-2 rounded-lg text-sm inline-block transition-colors duration-200 w-full text-center"
          aria-label="Read more about this rental"
        >
          Read More
        </RouterLink>
      </div>
    </div>

  </div>
</template>
