import Vue from 'vue'
// needed to add rooutes
import Router from 'vue-router'
// various components
import HelloWorld from '@/components/HelloWorld'
import SingleTemplate from "../components/SingleTemplate";

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

  ]
})
