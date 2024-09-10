<template class="bg-zinc-800">
    <div v-if="page" :class="['flex', 'flex-col', 'min-h-screen', 'p-8', `bg-${themeState.theme}`]">
      <HeroImage
        :imageSrc="page.image"
        :title="page.pageTitle"
        :sections="page.sections"
      />
    </div>
  </template>
  
  <script>
  import HeroImage from './HeroImage.vue'
  import { themeState } from '../eventBus.js'
  import DOMPurify from 'dompurify';
  
  export default {
    components: {
      HeroImage
    },
    props: ['index'],
    setup() {
      return { themeState };
    },
    data() {
      return {
        page: null
      };
    },
    created() {
      this.loadPage(this.index);
    },
    watch: {
      index(newIndex) {
        this.loadPage(newIndex);
      }
    },
    methods: {
      loadPage(index) {
        const rawPage = this.$pages.getSinglePage(index);
        this.page = {
          ...rawPage,
          sections: rawPage.sections.map(section => ({
            ...section,
            content: this.sanitizeContent(section.content)
          }))
        };
      },
      sanitizeContent(content) {
        return DOMPurify.sanitize(content);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any specific styles for the PageViewer page here */
  </style>