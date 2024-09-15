<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div :class="['rounded-lg p-6 max-w-sm w-full border-gallente-green glow-effect', paneClass]">
        <h2 :class="['text-xl font-bold mb-4', textClass]">Alert</h2>
        <p :class="['mb-4', textClass]">{{ message }}</p>
        <button @click="close" :class="['gallente-primary hover:gallente-accent border-gallente-green text-white font-bold py-2 px-4 rounded-lg hover:glow-effect hover:scale-105']">
          Close
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { themeState } from '../eventBus.js';
  
  export default {
    props: {
      message: {
        type: String,
        required: true
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      paneClass() {
        return themeState.theme === 'light' ? 'bg-white' : 'bg-zinc-800';
      },
      textClass() {
        return themeState.theme === 'light' ? 'text-zinc-900' : 'text-zinc-100';
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
    .hover\:gallente-accent:hover {
    background-color: #6DB09E; /* Example hover accent color */
    }

    .hover\:glow-effect:hover {
    box-shadow: 0 0 10px #58BF9A; /* Example hover glow effect */
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
  </style>