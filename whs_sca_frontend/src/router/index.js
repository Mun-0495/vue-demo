import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Server from './components/Server.vue';
import RepoDashboard from './components/Repo_dashboard.vue'; // 변경된 파일명으로 업데이트
import History from './components/History.vue';
import License from './components/license.vue';
import ProjectHistory from './components/ProjectHistory.vue';
import Repository from '../components/Repository.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Repository },
  { path: '/server', component: Server },
  { path: '/repo-dashboard/:repoName', name: 'RepoDashboard', component: RepoDashboard, props: true }, // 변경된 파일명으로 업데이트
  { path: '/history', component: History },
  { path: '/license', component: License },
  { path: '/project-history/:projectId', component: ProjectHistory, props: true }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
