<template>
    <div class="p-8 container mx-auto text-white" :class="[tileHolderClass]">
      <h1 class="text-4xl font-bold mb-6 text-center text-gallente-green">Research and Development</h1>
      <p class="mb-8 text-center" :class="[textClass]">
        Explore the cutting-edge research and development efforts that drive innovation within the Gallente Federation.
      </p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="project in projects" :key="project.title" :class="['p-6', 'rounded-lg', tileClass, 'border-gallente-green', 'glow-effect']">
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded-lg mb-4 shadow-lg">
          <h2 class="text-2xl font-semibold mb-2 text-gallente-green">{{ project.title }}</h2>
          <p :class="textClass">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { themeState } from '../eventBus.js';
  export default {
    name: 'ResearchAndDevelopment',
    data() {
      return {
        projects: []
      };
    },
    created() {
      this.fetchProjects();
    },
    methods: {
      async fetchProjects() {
        try {
          const response = await fetch('research-and-development.json');
          this.projects = await response.json();
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      }
    },
    computed: {
        tileClass() {
          return this.themeState.theme === 'light' ? 'bg-zinc-200 border-emerald-300' : 'bg-zinc-800 border-emerald-600';
        },
        textClass() {
            return this.themeState.theme === 'light' ? 'text-zinc-900' : 'text-gray-200';
        },
        tileHolderClass() {
            return this.themeState.theme === 'light' ? 'bg-zinc-300' : 'bg-zinc-900';
        }
    },
    created() {
        this.themeState = themeState;
        this.fetchProjects();
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