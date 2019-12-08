import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/admin/new',
        name: 'admin-new',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/New.vue')
    },
    {
        path: '/logout',
        name: 'logout',
        beforeEnter (to, from, next) {
            window.localStorage.removeItem('apollo-token')
            next({ name: 'login' })
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
