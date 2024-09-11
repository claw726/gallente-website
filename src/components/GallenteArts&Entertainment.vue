<template>
    <div :class="['p-4', themeClass]">
      <h1 :class="['text-3xl', 'font-bold', 'mb-8', 'text-center']" :style="{ color: gallenteAlertColor }">Gallente Arts and Entertainment</h1>
      
      <section v-for="art in arts" :key="art.name" :class="['mb-12', 'flex', 'flex-col', 'md:flex-row', 'items-start', 'p-6', 'rounded-lg', 'glow-effect', 'border-gallente-green', tileClass]">
        <div :class="['flex-grow', 'mb-4', 'md:mb-0', 'md:pr-6', 'shadow-lg', 'p-4', 'rounded-lg', 'flex', 'flex-col', 'justify-between']">
          <h2 :class="['text-2xl', 'font-semibold', 'mb-2', textClass, 'underline']">{{ art.name }}</h2>
          <p :class="['mb-2', textClass]">{{ art.description }}</p>
          <p :class="['mb-2', textClass]"><strong>Category:</strong> {{ art.category }}</p>
          <h3 :class="['text-xl', 'font-semibold', 'mb-2', textClass]">Artists</h3>
          <ul :class="['list-disc', 'list-inside', textClass]">
            <li v-for="artist in art.artists" :key="artist">{{ artist }}</li>
          </ul>
          <h3 :class="['text-xl', 'font-semibold', 'mt-4', 'mb-2', textClass]">Notable Works</h3>
          <ul :class="['list-disc', 'list-inside', textClass]">
            <li v-for="work in art.notableWorks" :key="work">{{ work }}</li>
          </ul>
        </div>
        
        <div class="p-4 flex justify-center items-center rounded-lg md:w-1/3">
          <img v-if="art.image" :src="art.image" :alt="art.name" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { themeState } from '../eventBus.js';
  
  export default {
    name: 'GallenteArts',
    data() {
      return {
        arts: [] // Array of arts and entertainment data
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
      this.fetchArts();
    },
    methods: {
      async fetchArts() {
        try {
          const response = await fetch('/arts.json');
          this.arts = await response.json(); // Store the entire array of arts data
        } catch (error) {
          console.error('Error fetching arts data:', error);
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