<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>

        <nav>
            <RouterLink :to="{ name: 'EventDetails' }">Details</RouterLink> |
            <RouterLink :to="{ name: 'EventRegister' }">Register</RouterLink> |
            <RouterLink :to="{ name: 'EventEdit' }">Edit</RouterLink>
        </nav>

        <RouterView :event="event"></RouterView>
    </div>
</template>

<script>
    import EventsService from '@/services/EventsService';

    export default {
        name: 'EventDetails',

        props: ['id'],

        data() {
            return {
                event: null
            };
        },

        created() {
            EventsService.getEventDetails(this.id)
                .then(response => {
                    this.event = response.data;
                })
                .catch(error => console.log(error));
        }
    };
</script>
