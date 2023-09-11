/*
 * @Author: smallhui
 * @Description: 状态管理
 */
import { createPinia } from 'pinia'
// pinia 持久化插件
// https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/config.html
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
