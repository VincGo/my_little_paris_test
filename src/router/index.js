import { createRouter, createWebHistory } from 'vue-router'
import Result from "@/views/Result";

const routes = [
  {
    path: '/result',
    name: 'result',
    component: Result
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
