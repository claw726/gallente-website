<template>
  <div class="relative w-full h-auto">
    <img :src="imageSrc" alt="Hero Image" class="w-full rounded-xl h-auto object-cover" ref="image" @load="imageLoaded = true">
    
        <!-- Enlistment Panel -->
      <div class="absolute top-4 right-4 gallente-primary border-gallente-green glow-effect text-white p-4 rounded-lg glow-effect z-10">
      <h2 class="text-lg font-bold mb-2">Enlist in the Federal Navy</h2>
      <p class="text-sm">Join the ranks and defend the Federation. Your journey begins here!</p>
      <button @click="navigateToEnlist" class="mt-2 gallente-primary border-gallente-green text-white font-bold py-1 px-3 rounded transform transition-transform duration-300 hover:scale-105 hover:gallente-accent hover:glow-effect">
        Enlist Now
      </button>
    </div>

    <div v-if="imageLoaded" class="absolute inset-0 flex items-end justify-center p-4">
      <div class="w-full bg-opacity-50 gallente-primary p-6 px-4 rounded-lg pane">
        
        <h1 class="text-4xl font-bold mb-4 text-center text-gray-200">{{ title }}</h1>
        <h3 class="text-2xl font-bold mb-2 text-center text-gray-200">{{ mainDescription }}</h3>
        
        <div class="flex flex-wrap justify-center -mx-4 pt-6">
          <div
            v-for="(section, index) in sections"
            :key="index"
            :class="['flex-grow', 'flex', 'px-4', 'mb-6', sectionClass]"
          >
            <div class="flex flex-col bg-opacity-50 gallente-primary p-4 rounded-lg shadow-lg w-full">
              <h2 class="text-2xl font-bold mb-2 text-center text-gray-200">{{ section.title }}</h2>
              <div v-html="section.content" class="text-gray-200 text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="absolute inset-0 flex items-end justify-center p-4">
      <!-- Placeholder or blank div until the image is loaded -->
      <div class="w-full bg-opacity-50 gallente-accent p-6 px-4 rounded-lg pane">
        <h1 class="text-4xl font-bold mb-4 text-center text-gray-200 rounded-lg">{{ title }}</h1>
        <div class="flex flex-wrap justify-center -mx-4">
          <div
            v-for="(section, index) in sections"
            :key="index"
            :class="['flex-grow', 'flex', 'px-4', 'mb-6', sectionClass]"
          >
            <div class="flex flex-col bg-opacity-50 gallente-primary p-4 rounded-lg shadow-lg w-full">
              <h2 class="text-2xl font-bold mb-2 text-center text-gray-200">{{ section.title }}</h2>
              <div v-html="section.content" class="text-gray-200 text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { themeState } from '../eventBus.js';
import { useRoute } from 'vue-router';

export default {
  setup() {
      const route = useRoute();
      return { themeState, route };
    },
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    sections: {
      type: Array,
      required: true
    },
    mainDescription: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      imageLoaded: false
    };
  },
  computed: {
    sectionClass() {
      const sectionCount = this.sections.length;
      if (sectionCount === 1) {
        return 'w-full';
      } else if (sectionCount === 2) {
        return 'w-1/2';
      } else {
        return 'w-1/3';
      }
    }
  },
  created() {
    this.themeState = themeState;
  },
  methods: {
    navigateToEnlist() {
      this.$router.push('/enlist');
    }
  }
}
</script>
<style scoped>

.pane {
    border: 2px solid #6DB09E; /* Accent color for the border */
    box-shadow: 0 0 10px #58BF9A, 0 0 20px #58BF9A, 0 0 30px #58BF9A; /* Neon glow effect */
    backdrop-filter: blur(10px); /* Frosted glass effect */
    border-radius: 8px; /* Rounded corners */
    padding: 1.5rem; /* Padding inside the pane */
    margin: 1rem; /* Margin around the pane */
    width: 90%; /* Width of the pane */
}

.gallente-primary {
    background-color: #58BF9A67; /* Primary Gallente color */
}

.gallente-accent {
    background-color: #6DB09E; /* Accent color for Gallente */
}

.border-gallente-green {
    border: 2px solid #58BF9A; /* Gallente green border */
  }
  
.glow-effect {
  box-shadow: 0 0 10px #58BF9A; /* Slight glow effect */
}

.flex-grow {
  flex-grow: 1;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-between {
  justify-content: space-between;
}

.hover\:gallente-accent:hover {
  background-color: #6DB09E; /* Example hover accent color */
}

.hover\:glow-effect:hover {
  box-shadow: 0 0 10px #58BF9A; /* Example hover glow effect */
}
</style>