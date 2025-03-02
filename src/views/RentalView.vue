<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';
import { useToast } from 'vue-toastification';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const rentalId = route.params.id;
const state = reactive({
  rental: {},
  isLoading: true,
});

const deleteRental = async () => {
  const confirmDelete = window.confirm('Are you sure you want to delete this rental?');
  if (confirmDelete) {
    toast.success('Rental Deleted');
    router.push('/rentals');
  }
};

onMounted(async () => {
  try {
    const response = await fetch('/rentals.json');
    const data = await response.json();
    state.rental = data.rentals.find(rental => rental.id === rentalId) || {};
  } catch (error) {
    console.error('Error fetching rental:', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton/>
  <section v-if="!state.isLoading" class="bg-blue-eight">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start">
            <div class="w-full h-full md:w-1/3">
              <img 
                :src="state.rental.image" 
                :alt="state.rental.title" 
                class="object-contain w-full h-auto rounded-lg"
              />
            </div>

            <div class="w-full md:w-2/3 md:pl-6 text-center md:text-left">
              <h1 class="text-brand-blue text-3xl font-bold mb-4"> {{ state.rental.title }} </h1>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-brand-blue text-lg font-bold mb-6">Category</h3>
            <div class="text-gray-500 mb-4"> {{ state.rental.type }} </div>
            <h3 class="text-brand-blue text-lg font-bold mb-6">Rental Description</h3>
            <p class="mb-4">{{ state.rental.description }}</p>
            <h3 class="text-brand-blue text-lg font-bold mb-2">Price</h3>
            <p class="mb-4">{{ state.rental.price }} / Hour</p>
          </div>

          <RouterLink :to="`/rentals/rentnow/${state.rental.id}`">
            <button
              class="mt-6 bg-brand-blue text-brand-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              RENT THIS ITEM
            </button>
          </RouterLink>
        </main>

        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Renter Info</h3>
            <h2 class="text-2xl">{{ state.rental.company?.name }}</h2>
            <p class="my-2">{{ state.rental.company?.description }}</p>

            <hr class="my-4" />

            <h3 class="mb-3 text-xl">Message Us</h3>
            <a :href="state.rental.company?.facebookLink" target="_blank" class="my-4 bg-blue-eight p-2 font-bold">
              {{ state.rental.company?.facebookLink }}
            </a>

            <h3 class="mt-6 text-xl">Call Us:</h3>
            <p class="my-2 bg-blue-eight p-2 font-bold">{{ state.rental.company?.contactPhone }}</p>
          </div>
        </aside>
      </div>
    </div>
  </section>
  
  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader/>
  </div>
</template>
