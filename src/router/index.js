import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')


//创建routes
const routes=[
  //配置对应映射关系
   { 
     path:'',
     redirect:'/home'
   },
   {
     path:'/home',
     component:Home
   },
   {
     path:'/cart',
     component:Cart
   },
   {
     path:'/category',
     component:Category
   },
   {
     path:'/profile',
     component:Profile
   }

]

//创建路由对象
const router=new VueRouter({
  routes,
  mode:'history'
})

//导出对象
export default router