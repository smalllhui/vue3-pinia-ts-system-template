import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import useUserStore from '@/store/modules/user'
import 'nprogress/nprogress.css'

const Layout = () => import('@/layout/index.vue')

// 不需要动态注册的路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title: '用户登录',
    },
  },
  {
    path: '/retrieve/password',
    name: 'RetrievePassword',
    component: () => import('@/views/retrieve-password/RetrievePassword.vue'),
    meta: {
      title: '密码找回',
    },
  },
  {
    path: '/403',
    component: () => import('@/views/exception/NotPermission/index.vue'),
    meta: {
      title: 'NotPermission',
    },
  },
  {
    path: '/404',
    component: () => import('@/views/exception/NotFound/index.vue'),
    meta: {
      title: 'NotFound',
    },
  },
  {
    path: '/500',
    component: () => import('@/views/exception/ServerException/index.vue'),
    meta: {
      title: 'Server Exception',
    },
  },
]

const router = createRouter({
  // vite中使用 import.meta.env.BASE_URL 项目资源路径 /admin/
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/**
 * @description: 根据路由列表动态添加路由
 */
export const initDynamicRouters = (routerList: RouteRecordRaw[]) => {
  // 动态添加路由
  if (routerList.length > 0) {
    // 添加系统布局页面路由
    router.addRoute({
      name: 'Layout',
      path: '/',
      component: Layout,
    })
    // 添加嵌套路由
    routerList.forEach((routerItem: RouteRecordRaw) => {
      router.addRoute('Layout', routerItem)
    })
  }

  // 路径不匹配跳转NotFound页面
  router.addRoute({
    path: '/:pathMatch(.*)',
    component: () => import('@/views/exception/NotFound/index.vue'),
    meta: {
      title: 'NotFound',
    },
  })
}

/**
 * @description:全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
 * @param {*} to 进入到哪个路由去
 * @param {*} from 从哪个路由离开
 * @param {*} next 路由的控制参数，常用的有next(true)和next(false)
 * @return {*}
 */
router.beforeEach(async (to, _from, next) => {
  NProgress.start()
  const userStore = useUserStore()
  const whiteList = ['/login', '/retrieve/password', '/403', '/404', '/500']
  if (whiteList.indexOf(to.path) > -1) {
    // 登录放行
    next()
  } else if (!userStore.getToken) {
    // 无token
    next({ path: '/login' })
  } else {
    next()
  }
})

/**
 * @description: 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
 * @param {*} to 进入到哪个路由去
 * @param {*} from 从哪个路由离开
 */
router.afterEach((to, _from) => {
  NProgress.done()
  document.title =
    (to.meta.title as string) || import.meta.env.VITE_DEFAULT_PAGE_TITLE
})

export default router
