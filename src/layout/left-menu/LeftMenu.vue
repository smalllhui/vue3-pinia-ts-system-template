<!--
 * @Author: PanZongHui
 * @Description: 系统左侧侧边栏组件
-->
<template>
  <el-aside
    class="left-menu-container"
    :class="isCollapse ? 'w64' : 'w200'"
    :style="{ backgroundColor: menuBackColor }"
  >
    <sys-logo :isCollapse="isCollapse" :logoSrc="logoSrc" :title="sysTitle" />
    <el-scrollbar style="height: calc(100% - 50px)">
      <sys-menu
        :isCollapse="isCollapse"
        :activeRoutePath="activeRoutePath"
        :menuBackColor="menuBackColor"
        :menuActiveBackColor="menuActiveBackColor"
        :menuTextColor="menuTextColor"
        :menuActiveTextColor="menuActiveTextColor"
        :menuIsUnique="menuIsUnique"
        :menuList="menuList"
      />
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import { SysMenu } from '@/components/layout'
import IMenuProp from '@/types/IMenuProp'

interface IProps {
  isCollapse: boolean
  logoSrc: string
  sysTitle: string
  menuBackColor: string
  activeRoutePath: string
  menuActiveBackColor: string
  menuTextColor: string
  menuActiveTextColor: string
  menuIsUnique: boolean
  menuList: IMenuProp[]
}

defineProps<IProps>()
</script>

<style scoped>
.left-menu-container {
  height: 100vh;
}
.w64 {
  width: 64px;
  transition: all 0.3s;
}

.w200 {
  width: 200px;
  transition: all 0.2s;
  /* transition: all 0.5s; */
}
</style>
