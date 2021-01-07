import Vue from 'vue';
import VueRouter from 'vue-router';
import {lazyLoadHelper, ROUTE_CONFIGS} from '@/config';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: lazyLoadHelper('home')},
    ...ROUTE_CONFIGS,
    {
        path: '*',
        component: () => import('@/components/robo-403-404/index.vue')
    }
];

const router = new VueRouter({routes});

export default router;
