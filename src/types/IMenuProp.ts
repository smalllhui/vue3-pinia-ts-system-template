/**
 * @Author: PanZongHui
 * @Description:权限菜单表属性
 */

export default interface IMenuProp {
  /** 菜单id */
  menuId?: number

  /** 权限菜单名称 */
  menuName: string

  /** 菜单类型  目录：1 菜单：2 按钮：3 */
  menuType: number

  /** 显示排序 */
  // menuSort: number

  /** 菜单icon图标 */
  menuIcon?: string | undefined

  /** 路由访问地址 */
  routeAddress?: string | undefined

  /** 菜单状态 正常：1 停用：0 */
  menuState?: number | undefined

  /** 组件地址 */
  componentPath?: string | undefined

  /** 权限码 */
  permissionsCode?: string | undefined

  /** 缓存状态  缓存：1  不缓存：0 */
  cacheState: boolean

  /** 父及菜单id */
  parentMenuId: number

  /** 创建时间 */
  createTime?: string

  /** 子菜单 */
  children?: IMenuProp[]
}

/**
 * 系统左侧菜单数据类型接口
 */
export interface IMenuState {
  /**
   * 标题显隐状态
   */
  isCollapse: boolean
  /**
   * 系统logo
   */
  logoSrc: string
  /**
   * 系统标题
   */
  title: string
  /**
   * 菜单背景颜色
   */
  menuBackColor: string
  /**
   * 激活菜单背景颜色
   */
  menuActiveBackColor: string
  /**
   * 菜单字体颜色
   */
  menuTextColor: string
  /**
   *  激活菜单的字体颜色
   */
  menuActiveTextColor: string
  /**
   * 是否唯一展开
   */
  menuIsUnique: boolean
  /**
   * 菜单列表
   */
  menuList: IMenuProp[]
}
