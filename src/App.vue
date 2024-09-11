<template>
    <div id="app" class="grayscale-theme min-h-screen" :class="[`bg-${themeState.theme}`]">
      <Navbar :pages="pages" :activePage="activePage" />
      <router-view />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue';
  import PageViewer from './components/PageViewer.vue';
  import CreatePage from './components/CreatePage.vue';
  import { themeState } from './eventBus.js';
  
  export default {
    components: {
      Navbar,
      PageViewer,
      CreatePage
    },
    data() {
      return {
        pages: [], // Assuming pages is a data property
        activePage: null // Assuming activePage is a data property
      };
    },
    methods: {
      pageCreated(pageObj) {
        this.pages.push(pageObj);
      }
    },
    created() {
      this.themeState = themeState;
    }
  };
  </script>