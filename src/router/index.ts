import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/product',
      name: 'product',
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('@/views/product/ProductView.vue'),
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('@/views/product/ProductForm.vue')
        }
      ]
    },

    {
      path: '/supplier',
      name: 'supplier',
      component: () => import('@/views/supplier/SupplierView.vue')
    },

    {
      path: '/transaction',
      name: 'transaction',
      component: () => import('@/views/transaction/TransactionView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
