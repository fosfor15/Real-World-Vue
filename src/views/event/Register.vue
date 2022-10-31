<template>
    <p>Register for the event here</p>
    <button @click="register">Register Me</button>
</template>

<script>
    export default {
        name: 'EventRegister',
        inject: ['GStore'],
        props: ['event'],

        methods: {
            register() {
                // Call API

                // Set flash message
                this.GStore.flashMessage =
                    'You are successfully registered for ' + this.event.title;

                // Reset flash message
                setTimeout(() => {
                    this.GStore.flashMessage = '';
                }, 3e3);

                // Redirect to Event details
                this.$router.push({
                    name: 'EventDetails'
                });
            }
        }
    };
</script>
