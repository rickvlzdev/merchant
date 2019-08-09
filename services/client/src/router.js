import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('./views/Inventory.vue'),
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('./views/Customers.vue'),
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('./views/Sales.vue'),
    },
  ],
});
