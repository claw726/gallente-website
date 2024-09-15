<template>
    <div class="relative min-h-screen flex flex-col items-center justify-center">
      <!-- Background Image with Blur Effect -->
      <div class="absolute inset-0 bg-cover bg-center filter blur-sm" :style="{ backgroundImage: `url(${backgroundImageUrl})` }"></div>
  
      <!-- Content -->
      <div :class="['relative z-10 w-full max-w-md p-8 rounded-lg glow-effect border-gallente-green', paneClass]">
        <h1 :class="['text-3xl font-bold mb-6 text-center', textClass]">Enlist in the Federal Navy</h1>
        <p :class="['mb-4 text-center', textClass]">
          Join the ranks of the Federal Navy and serve the Gallente Federation with honor and pride. Fill out the form below to start your journey.
        </p>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label :class="['block mb-2', textClass]" for="name">Name</label>
            <input type="text" id="name" v-model="form.name" :class="['w-full p-2 border rounded', inputClass]" required>
          </div>
          <div class="mb-4">
            <label :class="['block mb-2', textClass]" for="email">Email</label>
            <input type="email" id="email" v-model="form.email" :class="['w-full p-2 border rounded', inputClass]" required>
          </div>
          <div class="mb-6">
            <label :class="['block mb-2', textClass]" for="message">Why do you want to enlist?</label>
            <textarea id="message" v-model="form.message" :class="['w-full p-2 border rounded', inputClass]" rows="4" required></textarea>
          </div>
          <button type="submit" :class="['w-full py-2 border-gallente-green gallente-primary hover:gallente-accent hover:glow-effect hover:scale-105 text-white font-bold rounded transition duration-300']">
            Submit
          </button>
        </form>
      </div>
  
      <!-- Custom Alert Modal -->
      <Modal :message="alertMessage" :visible="isAlertVisible" @close="isAlertVisible = false" />
    </div>
  </template>
  
  <script>
  import { themeState } from '../eventBus.js';
  import Modal from './ModalComponent.vue'; // Adjust the path as necessary
  
  export default {
    components: {
      Modal
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        backgroundImageUrl: 'https://cdn.wallpapersafari.com/63/25/lVTmcJ.jpg', // Replace with your image path
        isAlertVisible: false,
        alertMessage: ''
      };
    },
    computed: {
      themeClass() {
        return themeState.theme === 'light' ? 'bg-zinc-100' : 'bg-zinc-900';
      },
      textClass() {
        return themeState.theme === 'light' ? 'text-zinc-900' : 'text-zinc-100';
      },
      paneClass() {
        return themeState.theme === 'light' ? 'bg-white' : 'bg-zinc-800';
      },
      inputClass() {
        return themeState.theme === 'light' ? 'border-zinc-300' : 'border-zinc-700 bg-zinc-700 text-zinc-100';
      }
    },
    methods: {
      submitForm() {
        this.alertMessage = 'Error Submitting form. You must be in the Gallente Region to enlist. Your current location: Earth';
        this.isAlertVisible = true;
      }
    },
    created() {
      this.themeState = themeState;
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