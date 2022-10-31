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
                id="page-prev"
                rel="prev"
                v-if="page != 1"
            >
                &lt; Prev
            </RouterLink>

            <RouterLink
                :to="{ name: 'EventList', query: { page: page + 1 } }"
                id="page-next"
                rel="next"
                v-if="hasNextPage"
            >
                Next &gt;
            </RouterLink>
        </nav>
    </div>
</template>

<script>
    import EventCard from '@/components/EventCard.vue';
    import EventsService from '@/services/EventsService';

    import Nprogres from 'nprogress';

    export default {
        name: 'EventList',

        props: ['page'],

        components: {
            EventCard
        },

        data() {
            return {
                events: [],
                totalEvents: 0
            };
        },

        beforeRouteEnter(routeTo, routeFrom, next) {
            Nprogres.start();

            EventsService.getEvents(2, parseInt(routeTo.query.page) || 1)
                .then(response => {
                    next(comp => {
                        comp.events = response.data;
                        comp.totalEvents = response.headers['x-total-count'];
                    });
                })
                .catch(() => {
                    next({ name: 'NetworkError' });
                })
                .finally(() => {
                    Nprogres.done();
                });
        },

        beforeRouteUpdate(routeTo) {
            Nprogres.start();

            EventsService.getEvents(2, parseInt(routeTo.query.page) || 1)
                .then(response => {
                    this.events = response.data;
                    this.totalEvents = response.headers['x-total-count'];
                })
                .catch(() => {
                    return { name: 'NetworkError' };
                })
                .finally(() => {
                    Nprogres.done();
                });
        },

        computed: {
            hasNextPage() {
                return this.page < Math.ceil(this.totalEvents / 2);
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

        width: 270px;
        margin-top: 10px;
        padding: 0;
    }

    .pagination a {
        flex: 1;
        text-decoration: none;
        color: #2c3e50;
    }

    #page-prev {
        text-align: left;
    }

    #page-next {
        text-align: right;
    }
</style>
