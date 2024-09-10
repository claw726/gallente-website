<template>
    <div id="app" class="grayscale-theme min-h-screen">
        <navbar
            :pages="pages"
            :activePage="activePage"
        ></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import PageViewer from './components/PageViewer.vue';
    import CreatePage from './components/CreatePage.vue';

    export default {
        components: {
            Navbar,
            PageViewer,
            CreatePage
        },
        methods: {
            pageCreated(pageObj) {
                this.pages.push(pageObj);
            }
        }
    }
</script>

<style>
    #app {
        background-color: rgb(39 39 42);
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }
</style>