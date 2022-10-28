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

        <nav class="pagination">
            <RouterLink
                :to="{ name: 'EventList', query: { page: page - 1 } }"
                rel="prev"
                v-if="page != 1"
            >
                Prev
            </RouterLink>

            <RouterLink
                :to="{ name: 'EventList', query: { page: page + 1 } }"
                rel="next"
                v-if="hasNextPage"
            >
                Next
            </RouterLink>
        </nav>
    </div>
    
</template>

<script>
    import EventCard from '@/components/EventCard.vue';
    import EventsService from '@/services/EventsService';
    import { watchEffect } from 'vue';

    export default {
        name: 'EventList',

        props: [
            'page'
        ],

        components: {
            EventCard
        },

        data() {
            return {
                events: [],
                totalEvents: 0
            };
        },

        created() {
            watchEffect(() => {
                EventsService.getEvents(2, this.page)
                    .then(response => {
                        this.events = response.data;
                        this.totalEvents = response.headers['x-total-count'];
                    })
                    .catch(error => console.log(error));
            })    
        },

        computed: {
            hasNextPage() {
                return this.page < Math.ceil( this.totalEvents / 2 );
            }
        }
    };
</script>

<style scoped>
    .events-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pagination {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .pagination a + a {
        margin-left: 20px;
    }
</style>
