<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section>
      <div class="container m-auto py-6 px-6">
        <RouterLink
          to="/rentals"
          class="text-brand-blue hover:text-blue-six flex items-center"
        >
          <i class="pi pi-arrow-circle-left mr-3"></i> Back to Rental Listings
        </RouterLink>
      </div>
    </section>
</template>