import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';
import ShipList from './components/ShipList.vue';
import GallenteEnemies from './components/GallenteEnemies.vue';
import GallenteAllies from './components/GallenteAllies.vue';
import ResearchAndDevelopment from './components/R&D.vue'
import FutureInnovations from './components/FutureInnovations.vue';
import Events from './components/GallenteEvents.vue';
import FAQ from './components/FAQPage.vue';
import Constitution from './components/GallenteConstitution.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/0' },
        { path: '/:index?', component: PageViewer, props: true },
        { path: '/create', component: CreatePage },
        { path: '/ships', component: ShipList },
        { path: '/enemies', component: GallenteEnemies},
        { path: '/allies', component: GallenteAllies},
        { path: '/R&D', component: ResearchAndDevelopment},
        { path: '/futureInnovations', component: FutureInnovations},
        { path: '/events', component: Events},
        { path: '/FAQ', component: FAQ},
        { path: '/constitution', component: Constitution}

    ]
});

export default router;