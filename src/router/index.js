import { createRouter, createWebHistory } from 'vue-router'
import Bio from '../views/Bio.vue'
import Faq from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [

  {
    path: '/',
    name: 'Bio',
    component: Bio
},
{
    path: '/About',
    name: 'About',
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
