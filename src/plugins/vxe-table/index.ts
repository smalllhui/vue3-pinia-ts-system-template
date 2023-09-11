/*
 * @Author: PanZongHui
 * @Description: vxe-table组件需注册
 */
import 'vxe-table/styles/cssvar.scss'
import 'xe-utils'
import {
  // 核心
  // VXETable,

  // 表格功能
  // Filter,
  // Edit,
  // Menu,
  Export,
  // Keyboard,
  // Validator,

  // 可选组件
  // Icon,
  Column,
  // Colgroup,
  // Grid,
  // Tooltip,
  // Toolbar,
  // Pager,
  // Form,
  // FormItem,
  // FormGather,
  // Checkbox,
  // CheckboxGroup,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Switch,
  // Input,
  // Select,
  // Optgroup,
  // Option,
  // Textarea,
  // Button,
  // Modal,
  // List,
  // Pulldown,

  // 表格
  Table,
} from 'vxe-table'

export default {
  install(app: any) {
    // 表格功能
    // app.use(Filter)
    // .use(Edit)
    // .use(Menu)
    app
      .use(Export)
      // .use(Keyboard)
      // .use(Validator)

      // 可选组件
      // .use(Icon)
      .use(Column)
      // .use(Colgroup)
      // .use(Grid)
      // .use(Tooltip)
      // .use(Toolbar)
      // .use(Pager)
      // .use(Form)
      // .use(FormItem)
      // .use(FormGather)
      // .use(Checkbox)
      // .use(CheckboxGroup)
      // .use(Radio)
      // .use(RadioGroup)
      // .use(RadioButton)
      // .use(Switch)
      // .use(Input)
      // .use(Select)
      // .use(Optgroup)
      // .use(Option)
      // .use(Textarea)
      // .use(Button)
      // .use(Modal)
      // .use(List)
      // .use(Pulldown)

      // 安装表格
      .use(Table)
  },
}
