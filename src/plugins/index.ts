import 'normalize.css' // 初始化样式
import '@/assets/fronts/iconfont/iconfont.css' // iconfont 样式

import elementPlus from './element-plus'
import VXETable from './vxe-table'

export default {
  install(app: any, options?: any) {
    app.use(elementPlus, options)
    app.use(VXETable, options)
  },
}
