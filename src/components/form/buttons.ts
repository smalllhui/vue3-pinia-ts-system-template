/*
 * @Author: PanZongHui
 * @Description:系统按钮组件管理文件
 */
import SearchButton from './SearchButton/index.vue'
import ResetButton from './ResetButton/index.vue'

// 不带权限的功能按钮
import ExportButton from './ExportButton/ExportButton.vue'
import DeleteButtonAll from './DeleteButtonAll/DeleteButtonAll.vue'
import AddButton from './AddButton/AddButton.vue'
import DeleteButton from './DeleteButton/DeleteButton.vue'
import EditButton from './EditButton/EditButton.vue'
import ViewButton from './ViewButton/ViewButton.vue'

// 下面功能按钮带有权限
import PExportButton from './ExportButton/PExportButton.vue'
import PDeleteButtonAll from './DeleteButtonAll/PDeleteButtonAll.vue'
import PAddButton from './AddButton/PAddButton.vue'
import PDeleteButton from './DeleteButton/PDeleteButton.vue'
import PEditButton from './EditButton/PEditButton.vue'
import PViewButton from './ViewButton/PViewButton.vue'

export {
  SearchButton,
  ResetButton,
  AddButton,
  DeleteButton,
  DeleteButtonAll,
  EditButton,
  ViewButton,
  ExportButton,
  // 权限按钮
  PAddButton,
  PDeleteButton,
  PDeleteButtonAll,
  PEditButton,
  PViewButton,
  PExportButton,
}
