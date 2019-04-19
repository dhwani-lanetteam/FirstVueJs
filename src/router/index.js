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
import Login from '../pages/Login/Login';
import Registration from '../pages/Login/Registration';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Registration
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
