import Vue from 'vue'
// needed to add routes
import Router from 'vue-router'
// various components
import HelloWorld from '@/components/HelloWorld'
import SingleTemplate from '../components/SingleTemplate';
// separate route file for admin module
import AdminRoute from './admin-route';
import Details from '../pages/Details';
import Cart from '../pages/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/single',
      name: 'SingleTemplate',
      component: SingleTemplate
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    // admin module routes
    AdminRoute,
  ]
})
