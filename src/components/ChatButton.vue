<script setup>
import { onMounted, ref } from "vue";

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = /Mobi|Android/i.test(navigator.userAgent);
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
  <section>
    <div class="">
      <button
        @click="openMessenger"
        class="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
      >
        <img src="/messenger-icon.svg" alt="Messenger" class="w-14 h-14" />
        Chat with us
      </button>
    </div>
  </section>
</template>

<style scoped>
button {
  transition: transform 0.3s ease-in-out;
}
button:hover {
  transform: scale(1.1);
}
</style>
