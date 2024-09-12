<template>
    <div :class="['p-4', themeClass]">
      <h1 :class="['text-3xl', 'font-bold', 'mb-8', 'text-center']" :style="{ color: gallenteAlertColor }">Featured Initiatives</h1>
      
      <section v-for="initiative in initiatives" :key="initiative.name" :class="['mb-12', 'flex', 'flex-col', 'md:flex-row', 'items-start', 'p-6', 'rounded-lg', 'glow-effect', 'border-gallente-green', tileClass]">
        <div :class="['flex-grow', 'mb-4', 'md:mb-0', 'md:pr-6', 'shadow-lg', 'p-4', 'rounded-lg', 'flex', 'flex-col', 'justify-between']">
          <h2 :class="['text-2xl', 'font-semibold', 'mb-2', textClass, 'underline']">{{ initiative.name }}</h2>
          <p :class="['mb-2', textClass]">{{ initiative.description }}</p>
          <p :class="['mb-2', textClass]"><strong>Goals:</strong> {{ initiative.goals }}</p>
          <h3 :class="['text-xl', 'font-semibold', 'mb-2', textClass]">Key Features</h3>
          <ul :class="['list-disc', 'list-inside', textClass]">
            <li v-for="feature in initiative.features" :key="feature">{{ feature }}</li>
          </ul>
          <h3 :class="['text-xl', 'font-semibold', 'mt-4', 'mb-2', textClass]">Progress</h3>
          <ul :class="['list-disc', 'list-inside', textClass]">
            <li v-for="progress in initiative.progress" :key="progress">{{ progress }}</li>
          </ul>
        </div>
        
        <div class="p-4 flex justify-center items-center rounded-lg md:w-1/3">
          <img v-if="initiative.image" :src="initiative.image" :alt="initiative.name" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { themeState } from '../eventBus.js';
  
  export default {
    name: 'FeaturedInitiatives',
    data() {
      return {
        initiatives: [] // Array of initiatives
      };
    },
    computed: {
      themeClass() {
        return this.themeState.theme === 'light' ? 'bg-white text-black' : 'bg-zinc-900 text-white';
      },
      gallenteAlertColor() {
        return this.themeState.theme === 'light' ? '#58BF9A' : '#58BF9A'; // Example color for Gallente Alert
      },
      tileClass() {
        return this.themeState.theme === 'light' ? 'bg-zinc-100 border-emerald-300' : 'bg-zinc-800 border-emerald-600';
      },
      textClass() {
        return this.themeState.theme === 'light' ? 'text-zinc-900' : 'text-gray-200';
      }
    },
    created() {
      this.themeState = themeState;
      this.fetchInitiatives();
    },
    methods: {
      async fetchInitiatives() {
        try {
          const response = await fetch('./initiatives.json');
          this.initiatives = await response.json(); // Store the entire array of initiatives
        } catch (error) {
          console.error('Error fetching initiatives:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .border-gallente-green {
    border: 2px solid #58BF9A; /* Gallente green border */
  }
  
  .glow-effect {
    box-shadow: 0 0 10px #58BF9A; /* Slight glow effect */
  }
  
  .glow-effect-green {
    box-shadow: 0 0 10px #58BF9A; /* Glow effect for allies */
  }
  </style>