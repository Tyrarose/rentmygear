import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import RentalsView from '@/views/RentalsView.vue';
import RentalView from '@/views/RentalView.vue';

import AddRentalView from '@/views/AddRentalView.vue';
import EditRentalView from '@/views/EditRentalView.vue';
import RentItemView from '@/views/RentItemView.vue';

import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/rentals',
            name: 'rentals',
            component: RentalsView,
        },
        {
            path: '/rentals/:id',
            name: 'rental',
            component: RentalView,
        },
        {
            path: '/rentals/add',
            name: 'rental-add',
            component: AddRentalView,
        },
        {
            path: '/rentals/edit/:id',
            name: 'rental-edit',
            component: EditRentalView,
        },
        {
            path: '/rentals/rentnow/:id',
            name: 'rental-rentnow',
            component: RentItemView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        }
    ]
})

export default router