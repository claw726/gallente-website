<template>
    <nav :class="['flex', 'items-center', 'justify-between', 'p-4', 'shadow-lg', navbarClasses]">
        <div class="flex items-center space-x-4">
            <a href="#">
                <img src="https://wiki.eveuniversity.org/images/4/49/Logo_faction_gallente_federation_clean.png" alt="Gallente Logo" class="h-12 w-auto" />
            </a>
            <ul class="flex space-x-4">
                <li v-for="(page, index) in publishedPages" :key="index">
                    <router-link
                        :to="page.link.url"
                        class="nav-link"
                        :class="[linkClasses, { 'active-link': isActive(page.link.url) }]"
                    >{{ page.link.text }}</router-link>
                </li>
                <li>
                    <router-link
                        class="nav-link"
                        aria-current="page"
                        active-class="active"
                        to="/ships"
                        :class="[linkClasses, { 'active-link': isActive('/ships') }]"
                    >Ships</router-link>
                </li>
            </ul>
        </div>
        <button
            class="neon-button px-4 py-2 rounded-full transition-transform transform hover:scale-105"
            @click.prevent="changeTheme()"
        >Toggle Theme</button>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue'
import { themeState } from '../eventBus.js'
import { useRoute } from 'vue-router'

export default {
    components: {
        NavbarLink
    },
    setup() {
        const route = useRoute();
        return { themeState, route };
    },
    created() {
        this.getThemeSetting();
        this.pages = this.$pages.getAllPages();
    },
    computed: {
        publishedPages() {
            return this.pages.filter(p => p.published);
        },
        navbarClasses() {
            return themeState.theme === 'light' ? 'bg-gradient-to-t from-slate-200 to-slate-100 text-midnight-black' : 'bg-gradient-to-b from-emerald-950 to-emerald-900 text-gray-300';
        },
        brandClasses() {
            return themeState.theme === 'light' ? 'text-midnight-black' : 'text-gray-200';
        },
        linkClasses() {
            return themeState.theme === 'light' ? 'text-midnight-black' : 'text-gray-300';
        },
        buttonClasses() {
            return themeState.theme === 'light' ? 'bg-midnight-black text-gray-200' : 'gallente-primary text-midnight-black';
        }
    },
    data() {
        return {
            pages: []
        }
    },
    methods: {
        changeTheme() {
            themeState.theme = themeState.theme === 'light' ? 'dark' : 'light';
            this.storeThemeSetting();
        },
        storeThemeSetting() {
            localStorage.setItem('theme', themeState.theme);
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme');
            if (theme) {
                themeState.theme = theme;
            }
        },
        isActive(url) {
            return this.route.path === url || this.route.path === `/${url}`;
        }
    }
}
</script>

<style scoped>
.neon-button {
    border: 2px solid #58BF9A;
    color: inherit;
    background-color: transparent;
    transition: box-shadow 0.3s, color 0.3s;
}

.neon-button:hover {
    box-shadow: 0 0 10px #58BF9A, 0 0 20px #58BF9A, 0 0 30px #58BF9A; /* Glow effect */
    color: #58BF9A; /* Change text color on hover */
}

.dark-mode .neon-button:hover {
    box-shadow: 0 0 10px #58BF9A, 0 0 20px #58BF9A, 0 0 40px #58BF9A; /* Stronger glow effect for dark mode */
}   

.active-link {
    font-weight: bold;
    border-bottom: 2px solid #F39058; /* Underline effect for active link */
}

.nav-link:hover {
    @apply transform scale-105;
    color: #F39058; /* Change text color on hover */
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
    background-color: #58BF9A;
}

.gallente-accent {
    background-color: #6DB09E;
}
</style>