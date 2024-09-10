<template>
    <div class="p-8 container mx-auto bg-zinc-900 text-white">
      <h1 class="text-4xl font-bold mb-6 text-center text-gallente-green">Future Innovations</h1>
      <p class="mb-8 text-center text-gray-300">
        Discover the groundbreaking innovations that are set to shape the future of the Gallente Federation.
      </p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="innovation in innovations" :key="innovation.title" class="bg-zinc-800 p-6 rounded-lg shadow-lg">
          <img :src="innovation.image" :alt="innovation.title" class="w-full h-48 object-cover rounded-lg mb-4">
          <h2 class="text-2xl font-semibold mb-2 text-gallente-green">{{ innovation.title }}</h2>
          <p class="text-gray-300">{{ innovation.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FutureInnovations',
    data() {
      return {
        innovations: []
      };
    },
    created() {
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
    }
  }
  </script>
  
  <style scoped>
  .text-gallente-green {
    color: #58BF9A; /* Example Gallente green color */
  }
  </style>