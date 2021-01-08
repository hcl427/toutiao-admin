import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue')
},
{
  path: '/',
  name: 'loyout',
  component: () => import('@/components/layout/index.vue'),
  children: [
    {
      path: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: 'article',
      component: () => import('@/views/article/index.vue')
    },
    {
      path: 'image',
      component: () => import('@/views/image/index.vue')
    },
    {
      path: 'publish',
      component: () => import('@/views/publish/index.vue')
    },
    {
      path: 'comment',
      component: () => import('@/views/comment/index.vue')
    },
    {
      path: 'fans',
      component: () => import('@/views/fans/index.vue')
    },
    {
      path: 'settings',
      component: () => import('@/views/settings/index.vue')
    }
  ]
}
]

const router = new VueRouter({
  routes
})

// 路由守卫
// to 即将要进入的地址
// from 当前导航正要离开的路由
// next 放行
router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (to.path !== '/login') {
    if (!user) {
      next('/login')
    } else next()
  } else {
    next()
  }
})
export default router
