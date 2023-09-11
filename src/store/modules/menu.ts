import { defineStore } from 'pinia'

import IMenuProp, { IMenuState } from '@/types/IMenuProp'
import logoImg from '@/assets/images/logo.svg'

// 系统菜单store
const useMenuStore = defineStore('MenuStore', {
  // 存放模块的变量
  state: (): IMenuState => ({
    isCollapse: false,
    logoSrc: logoImg,
    title: '个人博客管理系统',
    menuBackColor: 'rgb(48, 65, 86)',
    menuTextColor: '#fff',
    menuActiveTextColor: '#409EFF',
    menuActiveBackColor: '#263445',
    menuIsUnique: true,
    menuList: [],
  }),

  // 可以通过actions 方法，改变 state 里面的值。
  actions: {
    /**
     * @description: 切换isCollapse状态
     */
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    /**
     * 保存系统菜单
     * @param menuList
     */
    saveMenuList(menuList: IMenuProp[]) {
      this.menuList = menuList
    },
  },

  // 相当于vue的计算属性，可以缓存数据
  getters: {
    /**
     *获取菜单模块所有信息
     * @param state
     * @returns
     */
    getAllMenuInfo(state: IMenuState): IMenuState {
      return state
    },
    /**
     *获取菜单模块下菜单列表信息
     * @param state
     * @returns
     */
    getMenuList(state: IMenuState) {
      return state.menuList
    },
  },

  // 开启数据缓存 数据默认存在 sessionStorage 里，并且会以 storeId 作为 key
  persist: {
    storage: sessionStorage,
  },
})

export default useMenuStore
