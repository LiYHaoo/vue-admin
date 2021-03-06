import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import routerBase from './router-base'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "Login" */ '../views/About.vue')
        }
    ].concat(routerBase)
})