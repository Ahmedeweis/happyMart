import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/product/:id',
    name: 'product-details',
    component: () => import('../views/ProductDetailsView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
