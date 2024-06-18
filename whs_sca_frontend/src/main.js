import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Home from './components/Home.vue'
import History from './components/History.vue'
import Setting from './components/Setting.vue'
import ProjectHistory from './components/ProjectHistory.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/history', component: History },
  { path: '/setting', component: Setting },
  { path: '/project-history/:projectId', component: ProjectHistory, props: true }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
