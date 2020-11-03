import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '_v/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    redirect : '/index',
    children : [
      {
        path : 'index',
        component : ()=>import(/* webpackChunkName: "index" */'_v/home/index'),
        name : "晶晶音乐"
      },
      {
        path : 'my',
        component : ()=>import(/* webpackChunkName: "my" */'_v/my/index'),
        name : "晶晶音乐-我的"
      },
      {
        path : 'video',
        component : ()=>import(/* webpackChunkName: "video" */'_v/video/index'),
        name : "晶晶音乐-视频中心"
      },
       {
        path : 'yuncun',
        component : ()=>import(/* webpackChunkName: "yuncun" */'_v/yuncun/index'),
        name : "晶晶音乐-云村"
      }
    ]
  },
  {
    path : "/login",
    component : ()=>import(/* webpackChunkName: "login" */'_v/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
