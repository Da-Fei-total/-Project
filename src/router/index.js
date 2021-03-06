import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Registered.vue'
import Personal from '../views/Personal.vue'
import Focus from '../views/Focus.vue'
import Edit from '../views/Edit.vue'
import Comments from '../views/comments.vue'
import Collection from '../views/collection.vue'
import Column from '../views/column.vue'
import Index from '../views/index.vue'
import TopNav from '../components/Topnav.vue'
import TestPage from '../views/ceShi/testPage.vue'
import postData from '../views/postDeta.vue'
import Comment from '../views/ceShi/Test.vue'
import Text from '../components/digui.vue'
import ComMen from '../views/Digui.vue'
// 搜索页
import Search from '../views/SearchPage.vue' 
Vue.use(VueRouter)


  const routes = [
    {
      path:'/',
      redirect:'/login'
    },
  {
   path:'/login',
   component:Login
  },
  {
    // 注册页面
    path:'/register',
    component:Register
  },
  {
    // 个人主页
    path:'/personal',
    component:Personal
  },
  {
    // 我的关注
    path:'/focus',
    component:Focus
  },
  {
    // 编辑资料
    path:'/edit',
    component:Edit
  },
  {
    // 我的跟帖
    path:'/comments',
    name:'Comments',
    component:Comments 
  },
  {
    // 我的收藏
    path:'/collection',
    component:Collection
  },
  {
    // 栏目管理
    path:'/column',
    component:Column
  },
  {
    // 新闻搜索
    path:'/index',
    component:Index
  },
  {
    path:'/topNav',
    component:TopNav
  },
  {
    path:'/testPage',
    component:TestPage
  },
  // 文章详情
  {
    path:'/postData/:id',
    name:'postData',
    component:postData
  },
  {
    path:'/test/:id',
    name:'Comment',
    component:Comment
  },
  {
    path:'/search',
    name:'Search',
    component:Search
  },
  {
    path:'/diGui',
    name:'ComMen',
    component:ComMen
  }
]
// 解决:在VUE中路由遇到Error: Avoided redundant navigation to current location:报错显示是路由重复，
  const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  
  routes

})

export default router
