import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Server from './components/Server.vue';
import History from './components/History.vue';
import License from './components/License.vue'; // 새로 추가된 설정 페이지
import Repository from './components/Repository.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Repository },
  { path: '/server', component: Server},
  { path: '/history', component: History },
  { path: '/license', component: License } // 새로 추가된 설정 페이지 라우트
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
