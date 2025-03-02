<script setup>
import logo from '@/assets/img/logo.png'
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;

}
</script>

<template>
    <nav class="bg-brand-blue">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img class="h-10 w-auto" :src="logo" alt="Vue rentals" />
              <span class="hidden md:block text-brand-white text-2xl font-bold ml-2"
                >Rent My Gear 2600</span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                    to="/"
                    :class="[
                        isActiveLink('/') ? 'border' 
                        : '','text-brand-white', 'px-3', 'py-2', 'rounded-md', 
                        'hover:bg-brand-white hover:text-brand-blue'              
                    ]"
                >
                    Home
                </RouterLink>
                <RouterLink
                  to="/rentals"
                  :class="[
                        isActiveLink('/rentals') ? 'border' 
                        : '','text-brand-white', 'px-3', 'py-2', 'rounded-md', 
                        'hover:bg-brand-white hover:text-brand-blue'              
                    ]"
                  >Rentals</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>