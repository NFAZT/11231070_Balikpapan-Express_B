// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactView from '../views/ContactView.vue'
import TrackView from '../views/TrackView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/products', name: 'products', component: ProductsView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/track', name: 'track', component: TrackView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router