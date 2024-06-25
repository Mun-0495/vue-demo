import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import RepoDashboard from './components/Repo_dashboard.vue'; // 변경된 파일명으로 업데이트
import Home from './components/Home.vue';
import History from './components/History.vue';
import Settings from './components/Settings.vue';
import ProjectHistory from './components/ProjectHistory.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/repo-dashboard/:repoName', name: 'RepoDashboard', component: RepoDashboard, props: true }, // 변경된 파일명으로 업데이트
  { path: '/history', component: History },
  { path: '/settings', component: Settings },
  { path: '/project-history/:projectId', component: ProjectHistory, props: true }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
