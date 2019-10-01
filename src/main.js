import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import Post from './components/Post';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/post', component: Post},
    {path: '/list', component: List}
  ]
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
