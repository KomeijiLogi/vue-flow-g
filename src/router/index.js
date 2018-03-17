import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '@/views/Index'
import Ftotal from '@/views/Ftotal'
import Fhcard from '@/views/Fhcard'
import Fpcard from '@/views/Fpcard'
import Search from '@/views/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/ftotal',
      name:'Ftotal',
      component:Ftotal
    },
    {
      path:'/fpcard',
      name:'Fpcard',
      component:Fpcard
    },
    {
      path:'/fhcard',
      name:'Fhcard',
      component:Fhcard
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    }
  ]
})
