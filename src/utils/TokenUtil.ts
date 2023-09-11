/*
 * @Author: PanZongHui
 * @Description: token简单工具类
 */

// token保存的常量
const TOKEN_KEY = 'tokenKey'

export const saveToken = (token: string) => {
  sessionStorage.setItem(TOKEN_KEY, token)
}
export const getToken = () => {
  const token = sessionStorage.getItem(TOKEN_KEY)
  return token
}

export const clearToken = () => {
  sessionStorage.removeItem(TOKEN_KEY)
}
