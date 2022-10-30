import { createRouter, createWebHistory } from 'vue-router';

import EventList from '@/views/EventList.vue';
import EventLayout from '@/views/event/Layout.vue';
import EventDetails from '@/views/event/Details.vue';
import EventRegister from '@/views/event/Register.vue';
import EventEdit from '@/views/event/Edit.vue';
import About from '@/views/About.vue';

const routes = [
    // Props passing
    {
        path: '/',
        name: 'EventList',
        component: EventList,
        props: route => ({ page: parseInt(route.query.page) || 1 })
    },

    // Nested routes
    {
        path: '/events/:id',
        name: 'EventLayout',
        props: true,
        component: EventLayout,
        children: [
            {
                path: '',
                name: 'EventDetails',
                component: EventDetails
            },
            {
                path: 'register',
                name: 'EventRegister',
                component: EventRegister
            },
            {
                path: 'edit',
                name: 'EventEdit',
                component: EventEdit
            }
        ]
    },

    {
        // path: '/event/:id',

        // Redirect with params
        /* redirect: to => ({
            name: 'EventDetails',
            params: {
                id: to.params.id
            }
        }), */
        // redirect: to => `/events/${to.params.id}`,

        // Redirect without params
        // redirect: () => ({ name: 'EventDetails' }),

        // Redirect nested routes
        /* children: [
            {
                path: 'register',
                redirect: () => ({ name: 'EventRegister' })
            },
            {
                path: 'edit',
                redirect: () => ({ name: 'EventEdit' })
            }
        ], */

        // Redirect with RegExp
        path: '/event/:afterEvent(.*)',

        /* redirect: to => ({
            path: `/events/${ to.params.afterEvent }`
        }), */

        redirect: to => `/events/${to.params.afterEvent}`
    },

    {
        path: '/about-us',
        name: 'About',
        component: About,

        // Alias
        alias: '/about'
    }

    // Redirect simple
    /* {
        path: '/about',
        redirect: {
            name: 'About'
        }
    } */
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
