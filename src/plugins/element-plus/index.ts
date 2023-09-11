// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入基于断点的隐藏类
import 'element-plus/theme-chalk/display.css'

export default {
  install(app: any) {
    // app.use(ElementPlus) // 可配置按需加载
    // 全局注册element-plus icons插件
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
