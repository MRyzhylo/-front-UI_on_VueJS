import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Post from './components/Post';
import List from './components/List';

Vue.use(VueRouter)
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
