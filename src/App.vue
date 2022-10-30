<template>
    <nav>
        <RouterLink :to="{ name: 'EventList' }">Events</RouterLink> |
        <RouterLink :to="{ name: 'About' }">About</RouterLink>
    </nav>
    <RouterView />
</template>

<!-- <script>
export default {
    created() {
        this.$watch(
            () => this.$route,
            (newRoute, oldRoute) => {
                console.log('this.$router :>> ', this.$router);
                console.log('this.$route :>> ', this.$route);
                // console.log('newRoute :>> ', newRoute);
                // console.log('oldRoute :>> ', oldRoute);
            }
        );
    }
}
</script> -->

<style>
    body {
        background-color: #f8f8f8;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }

    h4 {
        font-size: 20px;
    }
</style>
