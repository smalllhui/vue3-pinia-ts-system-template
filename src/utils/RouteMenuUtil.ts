/*
 * @Author: PanZongHui
 * @Description: 路由菜单工具类
 */
import { RouteRecordRaw } from 'vue-router'
import ISystemMenuProp from '@/types/IMenuProp'

// 引入所有views下.vue文件
const modules = import.meta.glob('../views/**/**.vue')

/**
 * @description: 根据菜单列表生成路由并添加到路由列表
 * @param {ISystemMenuProp[]} menuList 菜单列表
 * @param {string[]} paths 路径
 * @param {RouteRecordRaw[]} routeList 路由列表
 * @return {*}
 */
const generateRoute = (
  menuList: ISystemMenuProp[],
  paths: string[],
  routeList: RouteRecordRaw[],
): void => {
  menuList.forEach((menuItem: ISystemMenuProp) => {
    if (menuItem.menuType === 1) {
      // 目录
      paths.push(menuItem.menuName)
      // 继续生成菜单
      generateRoute(
        menuItem.children ? menuItem.children : [],
        paths,
        routeList,
      )
    } else if (menuItem.menuType === 2) {
      // 菜单名称
      let routerName = ''
      if (menuItem.componentPath) {
        let componentPath = menuItem.componentPath.substring(
          0,
          menuItem.componentPath.lastIndexOf('/index.vue'),
        )
        routerName = componentPath.substring(componentPath.lastIndexOf('/') + 1)
      }
      // 按钮权限
      const authList: string[] = []
      menuItem.children?.forEach((btnMenu: ISystemMenuProp) => {
        if (btnMenu.menuType === 3) {
          authList.push(btnMenu.permissionsCode || '')
        }
      })

      // 生成路由
      const routerItem: RouteRecordRaw = {
        component: modules[`../views${menuItem.componentPath}`],
        path: menuItem.routeAddress || '',
        name: routerName,
        meta: {
          paths: [...paths, menuItem.menuName],
          title: menuItem.menuName,
          icon: menuItem.menuIcon,
          keepAlive: menuItem.cacheState,
          authList,
        },
      }

      // 添加到路由表中
      routeList.push(routerItem)
    }
  })
}

/**
 * @description: 根据菜单列表生成路由列表
 * @param {SystemMenuProp} menuList 菜单列表
 * @return {RouteRecordRaw[]} routeList
 */
export const generateRouteList = (
  menuList: ISystemMenuProp[],
): RouteRecordRaw[] => {
  const routeList: RouteRecordRaw[] = []
  if (menuList !== null) {
    menuList.forEach((menuItem: ISystemMenuProp) => {
      generateRoute([menuItem], [], routeList)
    })
  }
  return routeList
}
