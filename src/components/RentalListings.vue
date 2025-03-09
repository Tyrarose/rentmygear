<script setup>
import { reactive, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import RentalListing from '@/components/RentalListing.vue';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  rentals: [],
  isLoading: true,
  error: null,
});

onMounted(async () => {
  try {
    const response = await fetch('/rentals.json');
    if (!response.ok) throw new Error('Failed to load rentals');
    const data = await response.json();
    state.rentals = data.rentals;
  } catch (error) {
    state.error = error.message;
    console.error('Error fetching rentals:', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-gray-100 px-4 py-10">
    <div class="max-w-7xl mx-auto">
      <!-- Page Heading -->
      <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">
        Browse Rentals
      </h2>

      <!-- Loading Indicator -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Error Message -->
      <div v-else-if="state.error" class="text-center text-red-500 py-6">
        {{ state.error }}
      </div>

      <!-- Rental Listings -->
      <div 
        v-else 
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <RentalListing
          v-for="rental in state.rentals.slice(0, limit || state.rentals.length)"
          :key="rental.id"
          :rental="rental"
          class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
        />
      </div>

      <!-- View All Items Button -->
      <section v-if="showButton" class="flex justify-center mt-10">
        <RouterLink
          to="/rentals"
          class="flex items-center gap-3 bg-brand-blue text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300"
        >
          <span>Explore More Rentals</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </RouterLink>
      </section>

    </div>
  </section>
</template>
