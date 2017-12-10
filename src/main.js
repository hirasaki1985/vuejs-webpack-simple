import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Top from './pages/Top.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

 Vue.use(VueRouter);
//Vue.use(http, { store });

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

/*
var Content1 = Vue.extend(require('./components/content1.vue'));
var Content2 = Vue.extend(require('./components/content2.vue'));
*/

//var App = Vue.extend({});
//var router = new VueRouter();

/*
window.onload = function() {
  const Home = { template: '<div>home</div>' }
  const Foo = { template: '<div>foo</div>' }
  const Bar = { template: '<div>bar</div>' }

  const routes = [
    { path: '/content1', component: Content1 },
    { path: '/content2', component: Content2 }
  ];

  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes // `routes: routes` の短縮表記
  });

  const app = new Vue({
    router,
    template: `
      <div id="app">
        <h1>Basic</h1>
        <ul>
          <li><router-link to="/">/</router-link></li>
          <li><router-link to="/content1">/content1</router-link></li>
          <li><router-link to="/content2">/content2</router-link></li>
          <router-link tag="li" to="/content2" :event="['mousedown', 'touchstart']">
            <a>/content2</a>
          </router-link>
        </ul>
        <router-view class="view"></router-view>
      </div>
    `
  }).$mount('#app');

  /*
  new Vue({
    el: '#app',
    render: h => h(App)
  })
  */

  /*
  router.map({
    '/content1': {
      component: content1
    },
    '/content2': {
      component: content2
    }
  });

  router.start(App, '#app')
  */


