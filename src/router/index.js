import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Addsubscribe from '@/components/Addsubscribe'
import Dashboard from '@/components/Dashboard'
import ViewBot from '@/components/ViewBot'
import EditBot from '@/components/EditBot'
import Indicator from '@/components/Indicator'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/addsubscribe',
      name: 'Addsubscribe',
      component: Addsubscribe,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/indicator',
      name: 'Indicator',
      component: Indicator
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('addsubscribe')
  else next()
})

export default router
