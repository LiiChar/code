import Main from '@/pages/Main.vue'
import PostPage from '@/pages/PostPage.vue'
import PostPageWith from '@/pages/PostPageWith.vue'
import PostIdPage from '@/pages/PostIdPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/post',
      component: PostPage
    },
    {
      path: '/store',
      component: PostPageWith
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/post/:id',
      component: PostIdPage
    }  
  ]   
})

export default router
  