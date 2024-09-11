<template>
  <div :class="['flex', 'flex-col', 'min-h-screen', 'p-8', `bg-${themeState.theme}`]">
    <h1 :class="['text-2xl', 'font-bold', 'mb-4', 'text-4xl', titleColorClass]">Gallente Spaceships</h1>
    <table class="min-w-full bg-zinc-800 border border-zinc-700">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b border-gray-600 text-white text-xl">Icon</th>
          <th class="py-2 px-4 border-b border-gray-600 text-white text-xl">Name</th>
          <th @click="sortBySize" class="py-2 px-4 border-b border-gray-600 text-white text-xl cursor-pointer">Size</th>
          <th class="py-2 px-4 border-b border-gray-600 text-white text-xl">Speed</th>
          <th class="py-2 px-4 border-b border-gray-600 text-white text-xl">Classification</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ship, index) in sortedSpaceships" :key="index" :class="index % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'">
          <td class="py-2 px-4 border-b border-zinc-600">
            <div class="relative inline-block ship-icon">
              <img :src="ship.icon" :alt="`${ship.name} icon`" class="rounded" />
              <img v-if="ship.techLevel === 'T2'" src="https://wiki.eveuniversity.org/images/9/9d/CornerT2h.png" alt="T2 Ribbon" class="absolute top-0 left-0 w-12 h-12 rounded" />
              <img v-if="ship.techLevel === 'T3'" src="https://wiki.eveuniversity.org/images/f/f6/CornerT3h.png" alt="T3 Ribbon" class="absolute top-0 left-0 w-12 h-12 rounded" />
            </div>
          </td>
          <td class="py-2 px-4 border-b border-gray-600 text-white text-lg">{{ ship.name }}</td>
          <td class="py-2 px-4 border-b border-gray-600 text-white text-lg">{{ ship.size }}</td>
          <td class="py-2 px-4 border-b border-gray-600 text-white text-lg">{{ ship.speed }}</td>
          <td class="py-2 px-4 border-b border-gray-600">
            <img :src="getClassificationIcon(ship.classification)" :alt="ship.classification" class="classification-icon overlay-green" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { themeState } from '../eventBus.js';

export default {
  data() {
    return {
      spaceships: [],
      themeState,
      sortAscending: false // Track sorting order
    };
  },
  created() {
    this.fetchSpaceships();
  },
  computed: {
    titleColorClass() {
      return this.themeState.theme === 'light' ? 'text-zinc-800' : 'text-zinc-200';
    },
    sortedSpaceships() {
      return this.spaceships.sort((a, b) => {
        const sizeOrder = ['Shuttle', 'Corvette', 'Frigate', 'Destroyer', 'Cruiser', 'Hauler', 'Battlecruiser', 'Battleship', 'Carrier', 'Dreadnought', 'Force Auxiliary', 'Supercarrier', 'Titan', 'Freighter',]; // Define size order
        const comparison = sizeOrder.indexOf(a.classification) - sizeOrder.indexOf(b.classification);
        return this.sortAscending ? comparison : -comparison;
      });
    }
  },
  methods: {
    async fetchSpaceships() {
      try {
        const response = await fetch('/ships.json');
        this.spaceships = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    getClassificationIcon(classification) {
      const icons = {
        titan: 'https://wiki.eveuniversity.org/images/e/e5/Isis_titan.png',
        freighter: 'https://wiki.eveuniversity.org/images/a/a1/Isis_freighter.png',
        supercarrier: 'https://wiki.eveuniversity.org/images/1/1d/Isis_supercarrier.png',
        carrier: 'https://wiki.eveuniversity.org/images/4/49/Isis_supercapital.png',
        dreadnought: 'https://wiki.eveuniversity.org/images/7/7c/Isis_capital.png',
        battleship: 'https://wiki.eveuniversity.org/images/e/eb/Isis_battleship.png',
        battlecruiser: 'https://wiki.eveuniversity.org/images/6/65/Isis_battlecruiser.png',
        hauler: 'https://wiki.eveuniversity.org/images/3/33/Isis_industrial.png',
        cruiser: 'https://wiki.eveuniversity.org/images/9/91/Isis_cruiser.png',
        destroyer: 'https://wiki.eveuniversity.org/images/a/ab/Isis_destroyer.png',
        frigate: 'https://wiki.eveuniversity.org/images/8/88/Isis_frigate.png',
        corvette: 'https://wiki.eveuniversity.org/images/b/b3/Isis_rookie.png',
        shuttle: 'https://wiki.eveuniversity.org/images/0/01/Isis_shuttle.png',
        // Add more mappings as needed
      };
      return icons[classification.toLowerCase()] || 'https://example.com/path/to/default.png'; // Fallback image
    },
    sortBySize() {
      this.sortAscending = !this.sortAscending; // Toggle sorting order
    }
  }
}
</script>

<style scoped>
.ship-icon {
  @apply w-32 h-32 rounded-lg border-2 border-[#58BF9A] shadow-lg transition-transform duration-300;
}

.ship-icon:hover {
  @apply transform scale-110;
  box-shadow: 0 0 15px #58BF9A, 0 0 30px #58BF9A, 0 0 45px #58BF9A; /* Stronger glow on hover */
}

.classification-icon {
  @apply w-8 h-8;
}

.overlay-green {
  position: relative;
}

.overlay-green::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #58BF9A; /* Gallente green */
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 0;
}
</style>