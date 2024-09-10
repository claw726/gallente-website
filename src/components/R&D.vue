<template>
    <div class="p-8 container mx-auto bg-zinc-900 text-white">
      <h1 class="text-4xl font-bold mb-6 text-center text-gallente-green">Research and Development</h1>
      <p class="mb-8 text-center text-gray-300">
        Explore the cutting-edge research and development efforts that drive innovation within the Gallente Federation.
      </p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="project in projects" :key="project.title" class="bg-zinc-800 p-6 rounded-lg shadow-lg">
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded-lg mb-4">
          <h2 class="text-2xl font-semibold mb-2 text-gallente-green">{{ project.title }}</h2>
          <p class="text-gray-300">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
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
    }
  }
  </script>
  
  <style scoped>
  .text-gallente-green {
    color: #58BF9A; /* Example Gallente green color */
  }
  </style>