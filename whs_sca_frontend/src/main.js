import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Home from './components/Home.vue';
import History from './components/History.vue';
import Settings from './components/Settings.vue'; // 새로 추가된 설정 페이지

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/history', component: History },
  { path: '/settings', component: Settings } // 새로 추가된 설정 페이지 라우트
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
