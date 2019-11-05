import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Helloworld from '../components/HelloWorld'
import Oneson from '../components/routerr/one'
import Twoson from '../components/routerr/two'
import Threeson from '../components/routerr/three'
import Fourson from '../components/routerr/four'

import Leftson from '../components/routerr/page_one/left'
import Rightson from '../components/routerr/page_one/right'

import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path:'/Helloworld',
    name:'Helloworld',
    component:Helloworld,
    children:[
      {
        path: 'oneson',
        name: 'oneson',
        component: Oneson,
        children:[
          {
            path:'leftson',
            name:'leftson',
            component:Leftson
          },
          {
            path:'rightson',
            name:'rightson',
            component:Rightson
          }
        ]
      },
      {
        path: 'twoson',
        name: 'twoson',
        component: Twoson
      },
      {
        path: 'threeson',
        name: 'threeson',
        component: Threeson
      },
      {
        path: 'fourson',
        name: 'fourson',
        component: Fourson
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
