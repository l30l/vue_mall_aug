import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home.vue')
const Detail = () => import('@/views/detail/Detail.vue')
const Cart = () => import('@/views/cart/Cart.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      flag: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      flag: true
    }
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      flag: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
