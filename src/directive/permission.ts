/*
 * @Author: smallhui
 * @Description:自定义按钮权限指令，作用于按钮上
 * 使用
 *    v-permission="{ action: 'add' }" 按钮没有权限将会移除按钮
 *    v-permission="{ action: 'add',disable:true }" 按钮没有权限将会禁用按钮
 *
 */
import { App } from 'vue'
import router from '@/router'

/**
 * @description: 注册自定义按钮权限指令
 * @param {App} app
 */
export const registerPermissionDirective = (app: App): void => {
  app.directive('permission', {
    mounted(el, binding) {
      // 权限状态
      let result: string | undefined
      // 获取按钮需要的权限
      const { action, disable } = binding.value
      // 获取当前路由权限
      const authList: string[] = router.currentRoute.value.meta
        .authList as string[]
      // 当前路由有权限
      if (authList && authList.length > 0) {
        // 找到按钮对应权限
        result = authList.find(
          (element: string) => element.indexOf(action) > -1,
        )
      }

      // 无权限
      if (!result) {
        if (disable) {
          // 无权限 禁用按钮
          el.disabled = true
          el.classList.add('is-disabled')
        } else {
          // 无权限 移除按钮
          el.parentNode.removeChild(el)
        }
      }
    },
  })
}
