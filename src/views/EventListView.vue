<template>
    <h1>Events For Good</h1>
    <div
        v-if="events.length"
        class="events-list"
    >
        <EventCard
            v-for="event in events"
            :key="event.id"
            :event="event"
        />
    </div>
</template>

<script>
    import EventCard from '@/components/EventCard.vue';
    import EventsService from '@/services/EventsService';

    export default {
        name: 'EventList',

        components: {
            EventCard
        },

        data() {
            return {
                events: []
            };
        },

        created() {
            EventsService.getEvents()
                .then(response => {
                    this.events = response.data;
                })
                .catch(error => console.log(error));
        }
    };
</script>

<style>
    .events-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
