import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import sabittanitim from '@/modules/sabittanitim/router'
import mezarlik from '@/modules/mezarlik/router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...sabittanitim,
    ...mezarlik
  ]
})

export default router
