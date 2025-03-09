<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { reactive, onMounted, ref } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';
import { useToast } from 'vue-toastification';
import Footer from '@/components/Footer.vue';

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

const isMobile = ref(false);

const openMessenger = () => {
  const pageId = import.meta.env.VITE_MESSENGER_PAGE_ID;
  if (!pageId) {
    console.error("Messenger Page ID is missing in environment variables.");
    return;
  }

  const messengerLink = `https://m.me/${pageId}`;

  if (isMobile.value) {
    window.location.href = `fb://messaging/${pageId}`;
  } else {
    window.open(messengerLink, "_blank");
  }
};

onMounted(async () => {
  isMobile.value = /Mobi|Android/i.test(navigator.userAgent);

  try {
    const response = await fetch('/rentals.json');
    const data = await response.json();
    
    // Flatten all rentals into a single array
    const allRentals = Object.values(data).flat();

    // Find the rental based on the title or another unique property
    state.rental = allRentals.find(rental => 
      rental.title.replace(/\s+/g, '-').toLowerCase() === rentalId
    ) || {};
  } catch (error) {
    console.error('Error fetching rental:', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton />
  <section v-if="!state.isLoading" class="bg-blue-eight px-4 py-6 md:py-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-70/30 gap-6">
        <main class="flex flex-col">
          <div class="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start">
            <div class="w-full md:w-1/3 flex justify-center">
              <img 
                :src="state.rental.image" 
                :alt="state.rental.title" 
                class="object-contain w-full md:max-w-xs h-auto rounded-lg"
              />
            </div>

            <div class="w-full md:w-2/3 md:pl-6 text-center md:text-left mt-4 md:mt-0">
              <h1 class="text-brand-blue text-2xl md:text-3xl font-bold">{{ state.rental.title }}</h1>
            </div>
          </div>

          <div class="bg-white p-4 md:p-6 rounded-lg shadow-md mt-4 md:mt-6">
            <h3 class="text-brand-blue text-lg font-bold mb-2">Category</h3>
            <div class="text-gray-500 mb-4">{{ state.rental.type }}</div>
            
            <h3 class="text-brand-blue text-lg font-bold mb-2">Rental Description</h3>
            <p class="mb-4">{{ state.rental.description }}</p>
            
            <h3 class="text-brand-blue text-lg font-bold mb-2">Price</h3>
            <p class="mb-4">{{ state.rental.price }} / Hour</p>
          </div>

          <RouterLink :to="`/rentals/rentnow/${state.rental.id}`">
            <button
              class="mt-4 md:mt-6 bg-brand-blue text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            >
              RENT THIS ITEM
            </button>
          </RouterLink>
        </main>

        <aside class="w-full lg:w-auto">
          <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4 md:mb-6">Talk to Us Now</h3>
            <h2 class="text-2xl">{{ state.rental.company?.name }}</h2>
            <p class="my-2">{{ state.rental.company?.description }}</p>
            <button
              @click="openMessenger"
              class="bg-blue-500 text-black px-4 py-2 rounded-full shadow-lg flex items-center justify-center md:justify-start gap-2 w-full md:w-auto"
            >
              <img src="/messenger-icon.svg" alt="Messenger" class="w-8 h-8 md:w-10 md:h-10" />
              Chat with us
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
  
  <Footer />
</template>

<style scoped>
button {
  transition: transform 0.3s ease-in-out;
}
button:hover {
  transform: scale(1.05);
}
</style>
