<template>
    <div :class="['flex flex-col min-h-screen p-8', themeClass]">
      <h1 :class="['text-4xl font-bold mb-6', textColor]">Gallente Federation FAQ</h1>
      <div v-for="(item, index) in faqData" :key="index" class="mb-8">
        <h2 :class="['text-2xl font-semibold underline', textColor]">{{ item.question }}</h2>
        <p :class="['text-lg mt-2', textColorSecondary]">{{ item.answer }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { themeState } from '@/eventBus';
  
  export default {
    data() {
      return {
        faqData: []
      };
    },
    computed: {
      themeClass() {
        return themeState.theme === 'dark' ? 'bg-zinc-800' : 'bg-white';
      },
      textColor() {
        return themeState.theme === 'dark' ? 'text-zinc-200' : 'text-black';
      },
      textColorSecondary() {
        return themeState.theme === 'dark' ? 'text-zinc-300' : 'text-gray-700';
      }
    },
    created() {
      this.fetchFAQData();
    },
    methods: {
      async fetchFAQData() {
        try {
          const response = await fetch('./faq.json');
          this.faqData = await response.json();
        } catch (error) {
          console.error('Error fetching FAQ data:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here if needed */
  </style>