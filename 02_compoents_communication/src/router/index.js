import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HeroDetail from '../components/HeroDetail.vue'
import PageNotFound from '../views/page-not-found.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/hreo/:id',
      name: 'HeroDetail',
      component: HeroDetail,
      props: r => ({ id: parseInt(r.params.id) }),
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
