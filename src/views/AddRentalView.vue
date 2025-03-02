<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import router from '@/router';
import {useToast} from 'vue-toastification';

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  price: '',
  location: '',
  company: {
    name: '',
    description: '',
    facebookLink: '',
    contactPhone: ''
  }
})

const toast = useToast();

const handleSubmit = async () => {
  const newRental = {
    type: form.type,
    title: form.title,
    description: form.description,
    price: form.price,
    location: form.location,
    price: form.price,
    company: {
      name: form.company.name,
      description: form.company.description,
      facebookLink: form.company.facebookLink,
      contactPhone: form.company.contactPhone,
    }
  }

  try{
    const response = await axios.post('/api/rentals/', newRental);
    toast.success('Rental Added Successfully')
    router.push(`/rentals/${response.data.id}`)
  } catch (error) {
      console.log('Error fetching rental', error);
    toast.error('Rental Was Not Added')
  }

}

</script>

<template>
  <section class="bg-blue-eight">
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-white px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0"
        >
          <form @submit.prevent="handleSubmit">
            <h2 class="text-3xl text-center font-semibold mb-6">Add Rental</h2>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Rental Type</label
              >
              <select
                v-model="form.type"
                id="type"
                name="type"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="Tech-Gadgets">Tech & Gadgets</option>
                <option value="Office-Study">Office & Study</option>
                <option value="Home-Event">Home & Event</option>
                <option value="Storage-Logistics">Storage & Logistics</option>
                <option value="Gaming-Entertainment">Gaming & Entertainment</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Rental Listing Name</label
              >
              <input
                v-model="form.title"
                type="text"
                id="name"
                name="name"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. PS5 Gaming Console"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                v-model="form.description"
                id="description"
                name="description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any rental item description etc"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Price</label
              >
              <input
                v-model="form.price"
                id="price"
                name="price"
                class="border rounded w-full py-2 px-3"
                type="text"
                placeholder="eg. PS5 Gaming Console"
                required
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                v-model="form.location"
                type="text"
                id="location"
                name="location"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Rental Item Location"
                required
              />
            </div>

            <h3 class="text-2xl mb-5">Renter Info</h3>

            <div class="mb-4">
              <label for="company" class="block text-gray-700 font-bold mb-2"
                >Renter Name</label
              >
              <input
              v-model="form.company.name"
                type="text"
                id="company"
                name="company"
                class="border rounded w-full py-2 px-3"
                placeholder="Renter Name"
              />
            </div>

            <div class="mb-4">
              <label
                for="company_description"
                class="block text-gray-700 font-bold mb-2"
                >Renter Description</label
              >
              <textarea
                v-model="form.company.description"
                id="company_description"
                name="company_description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What types of items you rent out?"
              ></textarea>
            </div>

            <div class="mb-4">
              <label
                for="contact_email"
                class="block text-gray-700 font-bold mb-2"
                >Renter Facebook</label
              >
              <input
                v-model="form.company.facebookLink"
                type="email"
                id="contact_email"
                name="contact_email"
                class="border rounded w-full py-2 px-3"
                placeholder="Facebook account to contact"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="contact_phone"
                class="block text-gray-700 font-bold mb-2"
                >Renter Phone</label
              >
              <input
                v-model="form.company.contactPhone"
                type="tel"
                id="contact_phone"
                name="contact_phone"
                class="border rounded w-full py-2 px-3"
                placeholder="Phone number to be contacted"
              />
            </div>

            <div>
              <button
                class="bg-brand-blue text-brand-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Rental
              </button>
            </div>
          </form>
        </div>
      </div>
  </section>
</template>