<!--
 * @Author: PanZongHui
 * @Description: 系统左侧菜单项组件
-->
<template>
  <template v-for="menu in menuList" :key="menu.menuId">
    <!-- 目录 -->
    <el-sub-menu
      v-if="menu.menuType === 1"
      :index="`${menu.menuId}`"
      popper-class="menu-item"
    >
      <template #title>
        <el-icon>
          <i :class="menu.menuIcon"></i>
        </el-icon>
        <span>{{ menu.menuName }}</span>
      </template>
      <!-- 递归调用自己 -->
      <menu-item
        v-if="menu.children && menu.children.length > 0"
        :menuList="menu.children"
      />
    </el-sub-menu>

    <!-- 菜单 -->
    <el-menu-item
      v-if="menu.menuType === 2"
      :index="menu.routeAddress"
      :disabled="menu.menuState === 0"
    >
      <el-icon>
        <i :class="menu.menuIcon"></i>
      </el-icon>
      <template #title>{{ menu.menuName }}</template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import IMenuProp from '@/types/IMenuProp'

interface Props {
  menuList: IMenuProp[]
}
defineProps<Props>()
</script>

<style scoped></style>
@/types/IMenuProp
