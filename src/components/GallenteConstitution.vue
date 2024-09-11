<template>
    <div :class="['flex flex-col min-h-screen p-8', themeClass]">
      <h1 :class="['text-4xl font-bold mb-6', textColor]">Gallente Federation Constitution</h1>
      <section v-if="constitution.introduction" class="mb-8">
        <h2 :class="['text-2xl font-semibold underline', textColor]">Introduction</h2>
        <p :class="['text-lg mt-2', textColor]">{{ constitution.introduction }}</p>
      </section>
      <section v-for="(section, index) in constitution.sections" :key="index" class="mb-8">
        <h2 :class="['text-2xl font-semibold underline', textColor]">{{ section.title }}</h2>
        <p :class="['text-lg mt-2', textColor]">{{ section.content }}</p>
      </section>
      <div class="mt-auto">
      <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/8500/38808de913d67ec9b4960aa81bc094db89f8b8b7.gif" alt="Gallente Federation Emblem" class="w-auto h-auto mx-auto mt-8" />
      <p :class="['mt-4 italic text-center', textColor]">Celes Aguard</p>
    </div>
    </div>
  </template>
  
  <script>
  import { themeState } from '../eventBus.js';
  
  export default {
    data() {
      return {
        constitution: {
          introduction: '',
          sections: []
        }
      };
    },
    computed: {
      themeClass() {
        return themeState.theme === 'dark' ? 'bg-zinc-800' : 'bg-white';
      },
      textColor() {
        return themeState.theme === 'dark' ? 'text-zinc-200' : 'text-black';
      }
    },
    methods: {
      async fetchConstitution() {
        try {
          const response = await fetch('constitution.json');
          if (!response.ok) {
            throw new Error('Failed to fetch constitution');
          }
          this.constitution = await response.json();
        } catch (error) {
          console.error(error);
        }
      }
    },
    created() {
      this.fetchConstitution();
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here if needed */
  </style>