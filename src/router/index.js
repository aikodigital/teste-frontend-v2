import Vue from 'vue';
import Home from '@/views/Home';
import Landing from '@/views/Landing';
import PageNotFound from '@/views/PageNotFound';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter ({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'landing',
            path: '/',
            component: Landing
        },
        {   
            name: 'not_found',
            path: "*",
            component: PageNotFound
        }
    ]
});
   
export default router
