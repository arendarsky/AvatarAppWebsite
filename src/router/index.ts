import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rating from '@/views/Rating.vue'
import Casting from '@/views/Casting.vue'
import ProfileSettings from '@/views/ProfileSettings.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/casting',
    name: 'Casting',
    component: Casting
  },
  {
    path: '/rating',
    name: 'Rating',
    component: Casting
  },
  {
    path: '/settings',
    name: 'ProfileSettings',
    component: ProfileSettings
  }
]

const router = new VueRouter({
  routes
})

export default router
