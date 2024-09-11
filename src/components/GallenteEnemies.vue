<template>
  <div :class="['p-4', themeClass]">
    <h1 :class="['text-3xl', 'font-bold', 'mb-8', 'text-center']" :style="{ color: gallenteAlertColor }">Enemies of the Gallente Federation</h1>
    
    <section v-for="enemy in enemies" :key="enemy.name" :class="['mb-12', 'flex', 'flex-col', 'md:flex-row', 'items-stretch', 'p-6', 'rounded-lg', 'shadow-lg', tileClass]">
      <div :class="['md:w-1/2', 'mb-4', 'md:mb-0', 'md:pr-6', 'border-gallente-green', 'p-4', 'rounded-lg', 'flex', 'flex-col', 'justify-between', 'glow-effect']">
        <div>
          <h2 :class="['text-2xl', 'font-semibold', 'underline', 'mb-2', textClass]">{{ enemy.name }}</h2>
          <p :class="['mb-2', textClass]">{{ enemy.description }}</p>
          <ul :class="['list-disc', 'list-inside', textClass]">
            <li v-for="reason in enemy.reasons" :key="reason">{{ reason }}</li>
          </ul>
        </div>
      </div>
      
      <div class="p-4 flex md:w-1/2 justify-center items-center rounded-lg">
        <img :src="enemy.image" :alt="enemy.name" class="w-auto rounded-lg shadow-md m-8 border-gallente-green glow-effect-green" :class="{ 'hidden': !enemy.imageLoaded }" @load="enemy.imageLoaded = true">
        <div v-if="!enemy.imageLoaded" class="w-auto rounded-lg shadow-md m-8 border-alert-green glow-effect-green" :style="{ height: '100px', width: '100px' }"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { themeState } from '../eventBus.js';

export default {
  name: 'Enemies',
  data() {
    return {
      enemies: []
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
      return this.themeState.theme === 'light' ? 'text-zinc-900' : 'text-zinc-200';
    }
  },
  created() {
    this.themeState = themeState;
    this.fetchEnemies();
  },
  methods: {
    async fetchEnemies() {
      try {
        const response = await fetch('/enemies.json');
        this.enemies = await response.json();
        this.enemies.forEach(enemy => {
          enemy.imageLoaded = false;
        });
      } catch (error) {
        console.error('Error fetching enemies:', error);
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