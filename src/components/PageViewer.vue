<template class="bg-zinc-800">
  <div v-if="page" class="min-h-screen">
    <div v-if="page" :class="['flex', 'flex-col', 'min-h-screen', 'p-8', `bg-${themeState.theme}`]">
      <HeroImage
        :imageSrc="page.image"
        :title="page.pageTitle"
        :mainDescription="page.mainDescription"
        :sections="page.sections"
      />
    </div>
  </div>
</template>
  
  <script>
  import HeroImage from './HeroImage.vue'
  import { themeState } from '../eventBus.js'
  import DOMPurify from 'dompurify';
  
  export default {
    name: 'PageComponent',
    components: {
      HeroImage
    },
    props: {
      index: {
        type: Number,
        required: true
      }
    },
    setup() {
      return { themeState };
    },
    data() {
      return {
        page: null
      };
    },
    created() {
      this.fetchPage(this.index);
    },
    computed: {
      themeClass() {
        return this.page ? 'bg-${this.page.theme}' : '';
      }
    },
    watch: {
      index: {
        immediate: true,
        handler: 'fetchPage'
      }
    },
    methods: {
      fetchPage(index) {
        const pageData = this.$pages.getSinglePage(index);
        this.page = {
          ...pageData,
          sections: pageData.sections.map(section => ({
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