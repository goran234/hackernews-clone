import { createRouter, createWebHistory } from 'vue-router'
import Homepage from "@/homepage/components/Homepage.vue";
import ShowPost from "@/show-post/components/ShowPost.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/show/:id',
      name: 'show-post',
      component: ShowPost,
    },
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },

  ],
})

export default router
