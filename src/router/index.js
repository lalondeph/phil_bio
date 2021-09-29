import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Bio from '../views/Bio.vue'
import Faq from '../views/FAQ.vue'
import Contact from '../views/Contact.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: 'Bio',
    component: Bio
},
{
    path: '/FAQ',
    name: 'FAQ',
    component: Faq,
},
{
    path: '/Contact',
    name: 'Contact',
    component: Contact
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
