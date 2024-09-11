<template>
  <div class="relative w-full h-auto">
    <img :src="imageSrc" alt="Hero Image" class="w-full rounded-xl h-auto object-cover" ref="image" @load="imageLoaded = true">
    
    <div v-if="imageLoaded" class="absolute inset-0 flex items-end justify-center p-4">
      <div class="w-full bg-opacity-50 gallente-primary p-6 px-4 rounded-lg pane">
        
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
    <div v-else class="absolute inset-0 flex items-end justify-center p-4">
      <!-- Placeholder or blank div until the image is loaded -->
      <div class="w-full bg-opacity-50 gallente-primary p-6 px-4 rounded-lg pane">
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

export default {
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
</style>