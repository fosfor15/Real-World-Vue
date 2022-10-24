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

            this.$watch(
                () => this.$route,
                (oldRoute, newRoute) => {
                    console.log('this.$router :>> ', this.$router);
                    console.log('oldRoute :>> ', oldRoute);
                    console.log('newRoute :>> ', newRoute);
                }
            );
        }
    };
</script>

<style>
    body {
        background-color: #f8f8f8;
    }

    .events-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
