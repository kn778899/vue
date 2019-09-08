import Vue from 'vue'
import Router from 'vue-router'
import shouye from '../pages/shouye'
import denglu from '../pages/denglu'
import zhuce from '../pages/zhuce'
import dianying from '../pages/dianying'
import book from '../pages/book'
import xiaozu from '../pages/xiaozu'
import guangbo from '../pages/guangbo'
import liebiao from '../pages/liebiao'
import syxq from '../pages/syxq'
import dyxq from '../pages/dyxq'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/shouye',
      name:'shouye',
      component:shouye,
      
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path:'/zhuce',
      name:'zhuce',
      component:zhuce
    },
    {
      path:'/dianying',
      name:'dianying',
      component:dianying,
      // beforeEnter: (to, from, next) => {
      //   var token= window.localStorage.getItem('token');
      //   if(token){
      //     next()
      //   }else{
      //     next('/denglu')
      //   }
      // }
    },
    {
      path:'/book',
      name:'book',
      component:book,
      // beforeEnter: (to, from, next) => {
      //   var token= window.localStorage.getItem('token');
      //   if(token){
      //     next()
      //   }else{
      //     next('/denglu')
      //   }
      // }
    },
    {
      path:'/xiaozu',
      name:'xiaozu',
      component:xiaozu 
    },
    {
      path:'/guangbo',
      name:'guangbo',
      component:guangbo 
    },
    {
      path:'/liebiao',
      name:'liebiao',
      component:liebiao 
    },
    {
      path:'/syxq',
      name:'syxq',
      component:syxq 
    },
    {
      path:'/dyxq',
      name:'dyxq',
      component:dyxq
    },
    {
      path:"/*",
      redirect:"/shouye"
    }
  ]
})

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  