import { createRouter, createWebHistory } from 'vue-router';

import EventListView from '../views/EventListView.vue';
import EventDetailsView from '@/views/EventDetailsView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
    {
        path: '/',
        name: 'EventList',
        component: EventListView
    },
    {
        path: '/event/:id',
        name: 'EventDetails',
        props: true,
        component: EventDetailsView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
