<!--
 * @Author: PanZongHui
 * @Description: 系统左侧菜单组件
-->
<template>
  <el-menu class="el-menu-vertical" :collapse="isCollapse" :background-color="menuBackColor" :text-color="menuTextColor"
    :active-text-color="menuActiveTextColor" :unique-opened="menuIsUnique" :default-active="activeRoutePath"
    :router="true" :collapse-transition="false">
    <menu-item :menuList="menuList" />
    <!-- <menu-item /> -->
  </el-menu>
</template>

<script lang="ts" setup>
import IMenuProp from '@/types/IMenuProp'
import MenuItem from './MenuItem.vue'

interface IProps {
  isCollapse: boolean
  activeRoutePath: string
  menuBackColor: string
  menuActiveBackColor: string
  menuTextColor: string
  menuActiveTextColor: string
  menuIsUnique: boolean
  menuList: IMenuProp[]
}

const props = defineProps<IProps>()
</script>

<style >
.el-menu-vertical {
  border-right: none;
}

/* :deep(.el-menu) {
  border-right: none;
} */

/* 加上scoped 不生效 */
/* 菜单浮起、有白色边框 */
.el-popper.is-light {
  border-color: v-bind('props.menuBackColor') !important;
}

/* 点中菜单的文字颜色 */
:deep(.el-menu-item.is-active) {
  background-color: v-bind('props.menuActiveBackColor') !important;
}

/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover) {
  background-color: v-bind('props.menuActiveBackColor') !important;
}

/* 鼠标移动子菜单的颜色 */
:deep(.el-sub-menu .el-sub-menu__title:hover) {
  background-color: v-bind('props.menuActiveBackColor') !important;
}
</style>
@/types/IMenuProp
