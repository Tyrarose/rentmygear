<script setup>
import { reactive, computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import BackButton from '@/components/BackButton.vue';

const route = useRoute();
const toast = useToast();

const form = reactive({
  renterName: '',
  renterLocation: '',
  renterPhone: '',
});

const state = reactive({
  rental: {},
});

const rentalId = computed(() => route.params.id);

const fetchRentalItem = async () => {
  try {
    const response = await fetch('/rentals.json'); 
    const data = await response.json(); // `data` is the full object containing `rentals`

    console.log('Fetched data:', data); // Debugging line to inspect structure

    // Access the `rentals` array and find the matching item
    state.rental = data.rentals.find(rental => rental.id === rentalId.value) || {};
  } catch (error) {
    console.error('Error fetching rental item:', error);
  }
};


onMounted(fetchRentalItem);

const rentalRequestMessage = computed(() => {
  return `Hello RentMyGear2600, my name is <strong>${form.renterName}</strong> and I want to request to rent <strong>${state.rental.title || 'an item'}</strong>. I am from <strong>${form.renterLocation}</strong> and my phone number is <strong>${form.renterPhone}</strong>.`;
});

const handleCopyToClipboard = () => {
  if (!form.renterName || !form.renterLocation || !form.renterPhone) {
    toast.error('Please fill in all fields before submitting.');
    return;
  }

  navigator.clipboard.writeText(rentalRequestMessage.value).then(() => {
    toast.success('Rental request copied to clipboard!');
  }).catch(() => {
    toast.error('Failed to copy to clipboard.');
  });
};

// Detect if the user is on mobile
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
});

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

</script>

<template>
  <BackButton />
  <section class="bg-blue-eight">
    <div class="container m-auto max-w-2xl pt-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">
        <form @submit.prevent="handleCopyToClipboard">
          <h2 class="text-3xl text-center font-semibold mb-6">Rent an Item</h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">
              Rental Listing Name
            </label>
            <h1 class="text-brand-blue text-3xl font-bold mb-4">
              {{ state.rental.title || 'Loading...' }}
            </h1>
          </div>

          <h3 class="text-2xl mb-5">Renter Info</h3>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Renter Name</label>
            <input
              v-model="form.renterName"
              type="text"
              class="border rounded w-full py-2 px-3"
              placeholder="Renter Name"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Location</label>
            <input
              v-model="form.renterLocation"
              type="text"
              class="border rounded w-full py-2 px-3"
              placeholder="Rental Item Location"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Renter Phone</label>
            <input
              v-model="form.renterPhone"
              type="tel"
              class="border rounded w-full py-2 px-3"
              placeholder="Phone number to be contacted"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Rental Request Preview</label>
            <h4 class="bg-brand-yellow-transparent p-3 rounded text-black-seven italic" v-html="rentalRequestMessage"></h4>
          </div>

          <button
            class="bg-brand-blue text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Copy Order to Clipboard
          </button>
        </form>
      </div>
      <div class="flex justify-center mt-6">
        <svg
          class="w-10 h-10 text-brand-blue animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>

  <section class="bg-blue-eight">
    <div class="m-auto max-w-2xl pb-24">
      <div class="bg-white px-6 py-8 shadow-md rounded-md m-4 md:m-0">
        <div class="text-center">
          <h3 class="text-2xl font-semibold mb-4">Ready to Place Request?</h3>
          <button
            @click="openMessenger"
            class="bg-blue-500 text-black m-auto rounded-full shadow-lg flex items-center gap-2 px-4 py-2"
          >
            <img src="/messenger-icon.svg" alt="Messenger" class="w-10 h-10" />
            Chat with us
          </button>
          <p class="bg-brand-yellow-transparent p-3 rounded text-gray-600 text-sm mt-2 italic">
            Open Messenger and paste the copied message in the chat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
