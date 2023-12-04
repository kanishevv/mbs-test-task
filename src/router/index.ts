import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        const store = useAppStore()

        return `/${store.codes[0]}`
      }
    },
    {
      path: '/:code',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to) => {
  const store = useAppStore()

  if (typeof to.params.code === 'string')
    store.getCocktailData(to.params.code)
})

export default router
