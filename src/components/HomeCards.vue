<script setup>
import Card from '@/components/Card.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 class="text-2xl font-bold">For Renter</h2>
            <p class="mt-2 mb-4">
              Browse our rental items at the cheapest price!
            </p>
            <RouterLink
              to="/rentals"
              class="inline-block bg-brand-yellow text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Rentals
            </RouterLink>
          </Card>
          <Card bg="bg-brand-blue-transparent">
            <h2 class="text-2xl font-bold">For Owners</h2>
            <p class="mt-2 mb-4">
              Have an item you can rent out to earn money? Rent it here now!
            </p>
            <RouterLink
              to="rentals/add"
              class="inline-block bg-brand-blue text-brand-white rounded-lg px-4 py-2 hover:bg-brand-white hover:text-brand-blue"
            >
              Add Item
            </RouterLink>
          </Card>
        </div>
      </div>
    </section>
</template>