import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Setting from '@/components/Setting'
import History from '@/components/History'
import ProjectHistory from '@/components/ProjectHistory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/project-history/:projectId',
      name: 'ProjectHistory',
      component: ProjectHistory,
      props: true
    }
  ]
})
