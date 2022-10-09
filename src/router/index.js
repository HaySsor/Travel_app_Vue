import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import data from '../data.json'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        {
            path: '/protected',
            name: 'protected',
            component: () => import('../views/Protected.vue'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },

        {
            path: '/destination/:id/:slug',
            name: 'destination.show',
            component: () => import('../views/DestinationShow.vue'),
            props: route => ({ ...route.params, id: parseInt(route.params.id) }),
            beforeEnter(to, form) {
                const exists = data.destinations.find(destination => destination.id === parseInt(to.params.id)
                )
                if (!exists) return { name: 'NotFound' }
            },
            children: [
                {
                    path: ':experienceSlug:',
                    name: 'experience.show',
                    component: () => import('../views/ExperienceShow.vue'),
                    props: route => ({ ...route.params, id: parseInt(route.params.id) }),
                }
            ]
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },

    ],
    scrollBehavior(to, form, savedPosition) {
        return savedPosition || { top: 0 }
        // return {top:null , left:null , behavior:null}
    }
    // linkActiveClass: 'vue-school-active-link'
    // dodawanie swojego stylkowania aktywnego linku 
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.user) {
        //need to login if not already logged in
        return { name: 'login'}
    }
})

export default router 