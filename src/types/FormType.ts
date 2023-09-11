/**
 * @Author: PanZongHui
 * @Description: 分页查询数据返回格式
 */

export interface IPageProp<T> {
  // 查询返回的数据列表
  records: T[]
  // 总条数
  total: number
  // 总页数
  pages: number
  // 当前页
  current: number
  // 页大小
  size: number
}

/**
 * 表格列表数据类型
 */
export interface ITableProp<T> extends IPageProp<T> {
  // 表格数据加载状态
  loadingState: boolean
  // 表格高度
  // tableHeight: number
}
