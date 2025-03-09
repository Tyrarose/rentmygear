<script setup>
defineProps({
  categories: Array,
  selectedCategory: String,
  selectCategory: Function,
});
</script>

<template>
  <aside class="bg-white p-6 shadow-lg rounded-lg">
    <h3 class="text-xl font-semibold mb-4 text-gray-800">Categories</h3>

    <!-- Desktop (Vertical Sidebar) -->
    <ul class="hidden md:block space-y-2">
      <li
        v-for="category in categories"
        :key="category"
        class="cursor-pointer px-4 py-2 rounded-lg transition duration-300"
        :class="{
          'bg-brand-blue text-white': selectedCategory === category,
          'text-brand-blue hover:bg-gray-200': selectedCategory !== category
        }"
        @click="selectCategory(category)"
      >
        {{ category }}
      </li>
    </ul>

    <!-- Mobile (Horizontal Scroll) -->
    <div class="md:hidden overflow-x-auto whitespace-nowrap -mx-6 px-6">
      <ul class="flex space-x-3 pb-2">
        <li
          v-for="category in categories"
          :key="category"
          class="cursor-pointer px-4 py-2 rounded-lg transition duration-300 flex-shrink-0"
          :class="{
            'bg-brand-blue text-white': selectedCategory === category,
            'text-brand-blue border border-brand-blue hover:bg-brand-blue hover:text-white': selectedCategory !== category
          }"
          @click="selectCategory(category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
/* Smooth scrolling for mobile */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
