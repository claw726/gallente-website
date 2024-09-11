<template>
    <div :class="['p-4', themeClass]">
      <h1 :class="['text-3xl', 'font-bold', 'mb-8', 'text-center']" :style="{ color: gallenteAlertColor }">Gallente Federation Events</h1>
      
      <section v-for="event in events" :key="event.name" :class="['mb-12', 'flex', 'flex-col', 'md:flex-row', 'items-start', 'p-6', 'rounded-lg', 'glow-effect', 'border-gallente-green', tileClass]">
        <div :class="['flex-grow', 'mb-4', 'md:mb-0', 'md:pr-6', 'shadow-lg', 'p-4', 'rounded-lg', 'flex', 'flex-col', 'justify-between']">
          <h2 :class="['text-2xl', 'font-semibold', 'mb-2', textClass, 'underline']">{{ event.name }}</h2>
          <p :class="['mb-2', textClass]">{{ event.description }}</p>
          <p :class="['mb-2', textClass]"><strong>Dates:</strong> {{ event.dates }}</p>
          <h3 :class="['text-xl', 'font-semibold', 'mb-2', textClass]">Activities</h3>
          <ul :class="['list-disc', 'list-inside', textClass]">
            <li v-for="activity in event.activities" :key="activity">{{ activity }}</li>
          </ul>
          <h3 :class="['text-xl', 'font-semibold', 'mt-4', 'mb-2', textClass]">How to Participate</h3>
          <ul :class="['list-disc', 'list-inside', textClass]">
            <li v-for="instruction in event.howToParticipate" :key="instruction">{{ instruction }}</li>
          </ul>
        </div>
        
        <div class="p-4 flex justify-center items-center rounded-lg md:w-1/3">
          <img v-if="event.image" :src="event.image" :alt="event.name" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { themeState } from '../eventBus.js';
  
  export default {
    name: 'GallenteEvents',
    data() {
      return {
        events: [] // Changed from a single event object to an array of events
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
      this.fetchEvents();
    },
    methods: {
      async fetchEvents() {
        try {
          const response = await fetch('/events.json');
          this.events = await response.json(); // Store the entire array of events
        } catch (error) {
          console.error('Error fetching events:', error);
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