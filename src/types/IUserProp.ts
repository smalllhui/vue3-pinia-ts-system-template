/**
 * @Author: PanZongHui
 * @Description:user模块属性
 */
// 定义user的类型
export interface IUser {
  userNick: string
  userAvatar: string
}

// 定义user模块下的，state的类型
export interface UserState {
  userInfo: IUser
  token: string
}
