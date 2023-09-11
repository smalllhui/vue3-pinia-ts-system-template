import http from '@/utils/http'
import IMenuProp from '@/types/IMenuProp'
import { UserState } from '@/types/IUserProp'

const URL = {
  login: '/user/login',
  menuList: '/user/queryMenuList',
}

/**
 * @description: 用户登录
 */
export const userLogin = (
  userAccount: string,
  userPassword: string,
  captcha: string,
) => http.post<UserState>(URL.login, { userAccount, userPassword, captcha })

/**
 * @description: 查询用户权限菜单列表
 */
export const queryMenuList = () =>
  http.get<{ menuList: IMenuProp[] }>(URL.menuList)
