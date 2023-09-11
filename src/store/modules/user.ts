import { defineStore } from 'pinia'
// 定义user的类型
import { IUser, UserState } from '@/types/IUserProp'

// 系统菜单store
const useUserStore = defineStore('UserStore', {
  state: (): UserState => ({
    userInfo: {
      userNick: '',
      userAvatar: '',
    },
    token: '',
  }),

  actions: {
    /**
     * todo 保存用户信息
     * @param user
     */
    saveUserInfo(user: UserState): void {
      this.userInfo = user.userInfo
      this.token = user.token
    },
  },

  getters: {
    getToken(state: UserState): string {
      return state.token
    },
    /**
     *
     * @param state 获取用户信息
     * @returns
     */
    getUserInfo(state: UserState): IUser {
      return state.userInfo
    },
  },
  persist: {
    storage: sessionStorage,
  },
})

export default useUserStore
