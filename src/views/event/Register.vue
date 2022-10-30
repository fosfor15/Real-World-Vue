<template>
    <p>Register for the event here</p>
    <button @click="register">Register Me</button>
</template>

<script>
    export default {
        name: 'EventRegister',
        props: ['event'],

        methods: {
            register() {
                // Call API
                // If registered then redirect to Event details
                this.$router.push({
                    name: 'EventDetails'
                });
            }
        }
    };
</script>
