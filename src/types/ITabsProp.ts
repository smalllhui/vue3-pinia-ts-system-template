/**
 * @Author: PanZongHui
 * @Description:tab标签表属性
 */

// 定义单个tab的类型
export interface ITab {
  title: string
  path: string
}
// 定义tabs模块下的，state的类型
export interface TabsState {
  tabList: ITab[]
  activePath: string
}
