import Vue from 'vue'
import VueRouter from 'vue-router'
import http from './commons/http';
Vue.use(VueRouter, http);

import App from './App.vue'
import Top from './pages/Top.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', component: Top },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;

window.onload = function() {
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  });
}


