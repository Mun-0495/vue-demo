import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Dashboard from '@/components/Dashboard.vue';
import History from '@/components/History.vue';
import Setting from '@/components/Setting.vue';

Vue.use(Router);

export default new Router({
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
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
});
