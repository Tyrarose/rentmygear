<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import AnimatedBackground from '@/components/AnimatedBackground.vue';


const toast = useToast();
const requestItem = ref('');
const isLoading = ref(false);

// Replace with your bot token & chat/channel IDs
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_CHAT_ID;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

const sendRequest = async () => {
  if (!requestItem.value.trim()) {
    toast.error('Please enter an item name first.');
    return;
  }

  isLoading.value = true;

  const message = `🛒 *New Rental Request:*\n\nUser is looking for: *${requestItem.value}*`;
  const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    // Send message to the private channel
    const sendToChannel = fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHANNEL_ID, text: message, parse_mode: 'Markdown' }),
    });

    // Send message to your personal chat/group
    // const sendToChat = fetch(apiUrl, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'Markdown' }),
    // });

    // Wait for both requests to complete
    await Promise.all([sendToChannel]);


    toast.success('✅ Request sent! We’ll consider adding this item.');
    requestItem.value = '';
  } catch (error) {
    console.error('Error sending request:', error);
    toast.error('❌ Failed to send request. Try again later.');
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section class="relative bg-brand-blue flex flex-col items-center justify-center p-6 overflow-hidden">
    <AnimatedBackground />
    
    <div class="relative z-10 bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
      <!-- Content -->
      <h2 class="text-2xl font-bold text-gray-800 mb-4">
        🔍 Can't Find What You're Looking For?
      </h2>
      <p class="text-gray-600 mb-6">
        Let us know what you're looking for, and we might add it to our rental shop!  
        Your request helps us improve. 📢
      </p>

      <!-- Input Field -->
      <input
        v-model="requestItem"
        type="text"
        placeholder="Enter the item you need..."
        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <!-- Send Request Button -->
      <button
        @click="sendRequest"
        class="w-full bg-brand-blue text-white font-bold py-3 px-6 mt-4 rounded-lg transition duration-300 flex items-center justify-center"
        :disabled="isLoading"
      >
        <svg v-if="isLoading" class="animate-spin h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        {{ isLoading ? 'Sending...' : 'Send Request' }}
      </button>
    </div>
  </section>
</template>
