import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';
import ShipList from './components/ShipList.vue';
import GallenteEnemies from './components/GallenteEnemies.vue';
import GallenteAllies from './components/GallenteAllies.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/0' },
        { path: '/:index?', component: PageViewer, props: true },
        { path: '/create', component: CreatePage },
        { path: '/ships', component: ShipList },
        { path: '/enemies', component: GallenteEnemies},
        { path: '/allies', component: GallenteAllies}
    ]
});

export default router;