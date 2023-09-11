<!--
 * @Author: PanZongHui
 * @Description: 系统顶部组件
-->
<template>
  <div class="header-container">
    <div>
      <collapse :is-collapse="isCollapse" @toggle-collapse="toggleCollapse" />
      <refresh @on-refresh="handleRefresh" />
      <breadcrumb
        :current-path-list="currentPathList"
        class="hidden-md-and-down"
      />
    </div>
    <div>
      <screen-full />
      <git-hub />
      <new-message :message-count="1" />
      <language />
      <login-user
        :avatar="avatar"
        :user-nick="userNick"
        :operation-list="operationList"
        @on-command="handleCommand"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Collapse,
  Refresh,
  Breadcrumb,
  ScreenFull,
  GitHub,
  NewMessage,
  Language,
  LoginUser,
} from '@/components/layout'

// 操作列表
interface UserOperation {
  icon?: string
  title: string
  command: string
}

interface IProps {
  isCollapse: boolean // 菜单收缩状态
  avatar: string // 用户头像
  userNick: string // 用户昵称
  currentPathList: string[] // 当前路径列表
  operationList: UserOperation[] // 操作列表
  // searchMenuList: any[] // 搜索框查询菜单列表
}

// 定义事件
interface Emits {
  // 切换菜单收缩状态事件
  (e: 'toggleCollapse'): void
  // 刷新事件
  (e: 'onRefresh'): void
  // 用户操作处理事件
  (e: 'onCommand', command: string): void
}
defineProps<IProps>()
const emits = defineEmits<Emits>()

// 切换状态
const toggleCollapse = () => {
  emits('toggleCollapse')
}

const handleRefresh = () => {
  emits('onRefresh')
}
// 用户操作处理事件
const handleCommand = (command: string) => {
  emits('onCommand', command)
}
</script>

<style scoped>
.header-container {
  display: flex;
  height: 100%;
  justify-content: space-between;
}
.header-container > div {
  display: flex;
}
</style>
