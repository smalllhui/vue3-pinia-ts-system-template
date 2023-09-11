/*
 * @Author: smallhui
 * @Description:注册指令入口文件
 *
 */
import { App } from 'vue'
import { registerPermissionDirective } from './permission'
/**
 * 注册自定义指令
 * @param app
 */
export const registerDirective = (app: App): void => {
  registerPermissionDirective(app)
}
