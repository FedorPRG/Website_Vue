import Vue from 'vue'
import VueRouter from 'vue-router'
import indexComp from '../pages/indexComp.vue'
import projectComp from '../pages/projectComp.vue'
import projectDetailsComp from '../pages/projectDetailsComp.vue'
import blogComp from '../pages/blogComp.vue'
import blogDetailsComp from '../pages/blogDetailsComp.vue'
import NotFound from '../pages/404Comp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: indexComp
  },
  {
    path: '/project',
    name: 'project',
    component: projectComp
  },
  {
    path: '/projectDetails',
    name: 'projectDetails',
    component: projectDetailsComp
  },
  {
    path: '/blog',
    name: 'blog',
    component: blogComp
  },
  {
    path: '/blogDetails',
    name: 'blogDetails',
    component: blogDetailsComp
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
