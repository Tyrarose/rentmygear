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
  <section class="bg-blue-eight px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-brand-blue mb-6 text-center">
        Browse Rentals
      </h2>

      <!-- Show loading spinner while data is loading -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show error message if fetching failed -->
      <div v-else-if="state.error" class="text-center text-red-500 py-6">
        {{ state.error }}
      </div>

      <!-- Display rentals -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RentalListing
          v-for="rental in state.rentals.slice(0, limit || state.rentals.length)"
          :key="rental.id"
          :rental="rental"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/rentals"
      class="block bg-brand-blue text-brand-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Items
    </RouterLink>
  </section>
</template>
