import { defineStore } from 'pinia'
import { TabsState, ITab } from '@/types/ITabsProp'

// 系统菜单store
const useTabNavStore = defineStore('TabNavStore', {
  // 存放模块的变量
  state: (): TabsState => ({
    tabList: [],
    activePath: '',
  }),

  // 可以通过actions 方法，改变 state 里面的值。
  actions: {
    /**
     * 添加新tab到tabList中 并更新激活路径
     * @param state
     * @param tab
     */
    addTab(tab: ITab): void {
      const tabItem = this.tabList.find((item: ITab) => item.path === tab.path)
      if (tabItem) {
        this.activePath = tabItem.path
      } else {
        this.tabList.push(tab)
        this.activePath = tab.path
      }
    },
    /**
     * 根据path从tabList中移除 并更新激活路径
     * @param state
     * @param tab
     */
    removeCurrentTab(path: string): void {
      if (this.tabList.length > 1) {
        this.tabList = this.tabList.filter((item: ITab) => item.path !== path)
        this.activePath = this.tabList[this.tabList.length - 1].path
      }
    },
    /**
     * 根据path从tabList中移除 并更新激活路径
     * @param state
     * @param tab
     */
    closeOtherTab(path: string): void {
      const find = this.tabList.find(item => item.path === path)
      if (find) {
        this.activePath = find.path
        this.tabList = [find]
      }
    },
  },

  // 相当于vue的计算属性，可以缓存数据
  getters: {
    getActivePath(state) {
      return state.activePath
    },
    getTabList(state) {
      return state.tabList
    },
  },

  // 开启数据缓存 数据默认存在 sessionStorage 里，并且会以 storeId 作为 key
  persist: {
    storage: sessionStorage,
  },
})

export default useTabNavStore
