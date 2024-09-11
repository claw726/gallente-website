<template>
    <div :class="[tileHolderClass, 'p-8', 'container', 'mx-auto', 'text-white']">
      <h1 :class="['text-4xl', 'font-bold', 'mb-6', 'text-center', 'text-gallente-green']">Future Innovations</h1>
      <p :class="[textClass, 'mb-8', 'text-center']">
        Discover the groundbreaking innovations that are set to shape the future of the Gallente Federation.
      </p>
    
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="innovation in innovations" :key="innovation.title" :class="[tileClass, 'p-6', 'rounded-lg', 'border-gallente-green', 'glow-effect']">
          <img :src="innovation.image" :alt="innovation.title" class="w-full h-48 object-cover rounded-lg mb-4">
          <h2 :class="['text-2xl', 'font-semibold', 'mb-2', 'text-gallente-green']">{{ innovation.title }}</h2>
          <p :class="[textClass, 'text-gray-300']">{{ innovation.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { themeState } from '../eventBus.js';
  
  export default {
    name: 'FutureInnovations',
    data() {
      return {
        innovations: []
      };
    },
    created() {
      this.themeState = themeState;
      this.fetchInnovations();
    },
    methods: {
      async fetchInnovations() {
        try {
          const response = await fetch('future-innovations.json');
          this.innovations = await response.json();
        } catch (error) {
          console.error('Error fetching innovations:', error);
        }
      }
    },
    computed: {
      tileClass() {
        return this.themeState.theme === 'light' ? 'bg-zinc-100 border-emerald-300' : 'bg-zinc-800 border-emerald-600';
      },
      textClass() {
        return this.themeState.theme === 'light' ? 'text-zinc-900' : 'text-gray-200';
      },
      tileHolderClass() {
        return this.themeState.theme === 'light' ? 'bg-zinc-200' : 'bg-zinc-900';
      }
    }
  }
  </script>
  
  <style scoped>
  .text-gallente-green {
    color: #58BF9A; /* Example Gallente green color */
  }
  .border-gallente-green {
    border: 2px solid #58BF9A; /* Gallente green border */
  }
  
  .glow-effect {
    box-shadow: 0 0 10px #58BF9A; /* Slight glow effect */
  }
  </style>