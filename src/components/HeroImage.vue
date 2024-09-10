<template>
    <div class="relative w-full h-auto">
      <!-- Hero Image -->
      <img :src="imageSrc" alt="Hero Image" class="w-full rounded-xl h-auto object-cover" ref="image">
  
      <!-- Content Container Positioned in the Lower Third -->
      <div class="absolute inset-0 flex items-end justify-center p-4">
        <div class="w-full bg-opacity-50 gallente-primary p-6 px-4 rounded-lg" :class="['pane', paneClasses]">
          <!-- Page Title -->
          <h1 class="text-4xl font-bold mb-4 text-center text-gray-200 rounded-lg">{{ title }}</h1>
  
          <!-- Content Sections -->
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
            paneColor: "#58BF9A67   " // Default color
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

.bg-deep-space-blue {
    background-color: #0C2A4D;
}

.text-deep-space-blue {
    color: #0C2A4D;
}

.bg-vibrant-green {
    background-color: #2A7454;
}

.text-vibrant-green {
    color: #2A7454;
}

.bg-gold-accent {
    background-color: #C8A348;
}

.text-gold-accent {
    color: #C8A348;
}

.bg-silver-gray {
    background-color: #8B8C8F;
}

.text-silver-gray {
    color: #8B8C8F;
}

.bg-midnight-black {
    background-color: #1C1C1E;
}

.text-midnight-black {
    color: #1C1C1E;
}
.gallente-primary {
    background-color: #58BF9A67; /* Primary Gallente color */
}
.flex {
  display: flex;
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