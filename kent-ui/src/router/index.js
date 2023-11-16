import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/for',
      name: 'for',
      component: () => import('../views/For.vue')
    },
    {
      path: '/componet',
      name: 'componet',
      component: () => import('../views/Componet.vue')
    }
    ,
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormControl/index.vue')
    }
  ]
})

export default router
