<script setup>
import { reactive, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import RentalListing from '@/components/RentalListing.vue';
import CategorySidebar from '@/components/CategorySidebar.vue';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  rentals: [],
  categories: ['All'],
  selectedCategory: 'All',
  isLoading: true,
  error: null,
});

onMounted(async () => {
  try {
    const response = await fetch('/rentals.json');
    if (!response.ok) throw new Error('Failed to load rentals');
    const data = await response.json();

    // Extract categories and rentals
    state.categories = ['All', ...Object.keys(data)];
    state.rentals = Object.entries(data).flatMap(([category, items]) =>
      items.map(item => ({ ...item, category }))
    );
  } catch (error) {
    state.error = error.message;
    console.error('Error fetching rentals:', error);
  } finally {
    state.isLoading = false;
  }
});

const filteredRentals = computed(() => {
  if (state.selectedCategory === 'All') return state.rentals;
  return state.rentals.filter(rental => rental.category === state.selectedCategory);
});

const selectCategory = (category) => {
  state.selectedCategory = category;
};

const generateKey = (rental) => rental.title ? rental.title.replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).substr(2, 9);
</script>

<template>
  <section class="bg-gray-100 px-4 py-10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">

      <!-- Mobile Category Bar -->
      <div class="md:hidden -mx-4 px-4 overflow-x-auto whitespace-nowrap">
        <ul class="flex space-x-3 pb-2">
          <li
            v-for="category in state.categories"
            :key="category"
            class="cursor-pointer px-4 py-2 rounded-lg transition duration-300 flex-shrink-0"
            :class="{
              'bg-brand-blue text-white': state.selectedCategory === category,
              'text-brand-blue border border-brand-blue hover:bg-brand-blue hover:text-white': state.selectedCategory !== category
            }"
            @click="selectCategory(category)"
          >
            {{ category }}
          </li>
        </ul>
      </div>

      <!-- Sidebar (Desktop Only) -->
      <CategorySidebar
        v-show="!state.isLoading && !state.error"
        class="hidden md:block w-1/4"
        :categories="state.categories"
        :selectedCategory="state.selectedCategory"
        :selectCategory="selectCategory"
      />

      <!-- Right Side: Rental Listings -->
      <div class="w-full md:w-3/4">
        
        <!-- Page Heading -->
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
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
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          <RentalListing
            v-for="rental in filteredRentals.slice(0, limit || filteredRentals.length)"
            :key="generateKey(rental)"
            :rental="rental"
            class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          />
        </div>

        <!-- View All Items Button -->
        <section v-if="showButton" class="flex justify-center mt-8">
          <RouterLink
            to="/rentals"
            class="flex items-center gap-3 bg-brand-blue text-white text-lg md:text-xl font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300"
          >
            <span>Explore More Rentals</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 md:w-6 md:h-6"
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
    </div>
  </section>
</template>

<style scoped>
/* Hide scrollbar for horizontal scrolling */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
