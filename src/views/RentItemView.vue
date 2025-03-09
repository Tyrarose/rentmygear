<script setup>
import { reactive, onMounted, ref } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';
import { useToast } from 'vue-toastification';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const router = useRouter();
const toast = useToast();
const isMobile = ref(false);

const state = reactive({
  rentals: [],
  rental: {},
  isLoading: true,
  error: null,
});

onMounted(async () => {
  isMobile.value = /Mobi|Android/i.test(navigator.userAgent);
  try {
    const response = await fetch('/rentals.json');
    if (!response.ok) throw new Error('Failed to load rentals');
    const data = await response.json();
    state.rentals = data.rentals;
    state.rental = state.rentals.find(rental => rental.title === route.params.title) || {};
  } catch (error) {
    state.error = error.message;
    console.error('Error fetching rentals:', error);
  } finally {
    state.isLoading = false;
  }
});

const deleteRental = async () => {
  const confirmDelete = window.confirm('Are you sure you want to delete this rental?');
  if (confirmDelete) {
    toast.success('Rental Deleted');
    router.push('/rentals');
  }
};

const openMessenger = () => {
  const pageId = import.meta.env.VITE_MESSENGER_PAGE_ID;
  if (!pageId) {
    console.error("Messenger Page ID is missing in environment variables.");
    return;
  }
  const messengerLink = `https://m.me/${pageId}`;
  window.open(messengerLink, "_blank");
};
</script>

<template>
  <BackButton />
  <section class="bg-blue-eight">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start">
            <div class="w-full h-full md:w-1/3">
              <img :src="state.rental.image" :alt="state.rental.title" class="object-contain w-full h-auto rounded-lg" />
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

          <RouterLink :to="`/rentals/rentnow/${state.rental.title.replace(/\s+/g, '-').toLowerCase()}`">
            <button class="mt-6 bg-brand-blue text-brand-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit">
              RENT THIS ITEM
            </button>
          </RouterLink>
        </main>

        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Renter Info</h3>
            <h2 class="text-2xl">{{ state.rental.company?.name }}</h2>
            <p class="my-2">{{ state.rental.company?.description }}</p>
            <button @click="openMessenger" class="bg-blue-500 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <img src="/messenger-icon.svg" alt="Messenger" class="w-10 h-10" />
              Chat with us
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
  
  <Footer />
</template>

<style scoped>
button {
  transition: transform 0.3s ease-in-out;
}
button:hover {
  transform: scale(1.1);
}
</style>
