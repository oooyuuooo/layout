import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/BaseLayOut.vue'
import IndexView from '../views/IndexView.vue'
import EventList from '../components/EventList.vue'
import Contact from '../views/ContactView.vue'
import FlightSearch from '../views/FlightSearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children:[{
        path: '/Index',
        name: 'Index',
        component:IndexView
      },
      {
        path:'/Event',
        name:'Event',
        component:EventList
      },
      {
        path:'/Contact',
        name:'Contact',
        component:Contact
      },
      {
        path:'/FlightSearch',
        name:'FlightSearch',
        component:FlightSearch
      },
    ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: () => import('../components/SignUp.vue')
    }
  ]
})

export default router