<!--
 * @Author: PanZongHui
 * @Description:系统布局页面
-->
<template>
  <el-container class="layout-container">
    <left-menu
      :isCollapse="isCollapse"
      :activeRoutePath="activeRoutePath"
      :logoSrc="menuInfo.logoSrc"
      :sysTitle="menuInfo.title"
      :menuBackColor="menuInfo.menuBackColor"
      :menuActiveBackColor="menuInfo.menuActiveBackColor"
      :menuTextColor="menuInfo.menuTextColor"
      :menuActiveTextColor="menuInfo.menuActiveTextColor"
      :menuIsUnique="menuInfo.menuIsUnique"
      :menuList="menuInfo.menuList"
    />
    <el-container class="right-container">
      <el-header class="header-wrapper">
        <top-header
          :isCollapse="isCollapse"
          :currentPathList="currentPathList"
          :avatar="userInfo.userAvatar"
          :user-nick="userInfo.userNick"
          :operation-list="operationList"
          @toggle-collapse="handleToggleCollapse"
          @on-refresh="handleRefresh"
          @on-command="handleCommand"
        />
      </el-header>
      <tabs-view
        :active-tag-path="activeTagPath"
        :tag-list="tagList"
        @on-refresh="handleRefresh"
        @on-close-current="handleCloseCurrentTag"
        @on-close-other="handleCloseOtherTab"
        @on-close-tag-by-path="handleCloseTagByPath"
      />
      <el-main
        class="content-wrapper"
        v-loading="isRefresh"
        element-loading-text="页面加载中"
        element-loading-background="rgba(0,0,0,0.5)"
      >
        <!-- vue3.0配置 Component是固定写法 必须加上key--->
        <router-view v-slot="{ Component }" v-if="!isRefresh">
          <transition name="fade">
            <keep-alive v-if="route.meta.keepAlive">
              <component :is="Component" :key="route.path" />
            </keep-alive>
            <component v-else :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useTabNavStore from '@/store/modules/tab-nav'
import useMenuStore from '@/store/modules/menu'
import useUserStore from '@/store/modules/user'

import { TabsView } from '@/components/layout'
import { clearToken } from '@/utils/TokenUtil'
import LeftMenu from './left-menu/LeftMenu.vue'
import TopHeader from './top-header/TopHeader.vue'

const route = useRoute()
const router = useRouter()
const tabNavStore = useTabNavStore()
const menuStore = useMenuStore()
const userStore = useUserStore()

const userInfo = computed(() => userStore.getUserInfo)

const menuInfo = computed(() => menuStore.getAllMenuInfo)
const isCollapse = computed(() => menuStore.isCollapse)

const tagList = computed(() => tabNavStore.tabList)
const activeTagPath = computed(() => tabNavStore.activePath)

const activeRoutePath = computed(() => route.path)
const isRefresh = ref(false)
const operationList = reactive([
  {
    icon: 'UserFilled',
    command: 'user/center',
    title: '个人中心',
  },
  {
    icon: 'Setting',
    command: 'user/setting',
    title: '个人设置',
  },
  {
    icon: 'SwitchButton',
    command: 'user/logout',
    title: '退出登录',
  },
])
// 当前面包屑路径
const currentPathList = computed<string[]>(
  () => (route.meta.paths as string[]) || [],
)

// 监听tagViews变化
watch(
  () => route.path,
  () => {
    const tabItem = { path: route.path, title: route.meta.title as string }
    // 添加新tag到store中
    tabNavStore.addTab(tabItem)
  },
  { immediate: true, deep: true },
)
/**
 * 事件
 */
function handleToggleCollapse() {
  menuStore.toggleCollapse()
}
// 根据path指定关闭
function handleCloseTagByPath(path: string) {
  tabNavStore.removeCurrentTab(path)
}
// 用户操作处理事件
const handleCommand = (command: string) => {
  console.log('command', command)

  if (command === 'user/logout') {
    // 用户退出
    // 清除user模块数据
    userStore.$reset()
    // 清除tab模块数据
    tabNavStore.$reset()
    // 清除菜单列表
    menuStore.$reset()
    // 清除token
    clearToken()
    // 跳转登录页面
    router.replace('/login')
  }
}
// 关闭当前tag
function handleCloseCurrentTag() {
  tabNavStore.removeCurrentTab(activeTagPath.value)
}
// 其它tag
function handleCloseOtherTab() {
  tabNavStore.closeOtherTab(activeTagPath.value)
}
function handleRefresh() {
  // window.location.reload()
  isRefresh.value = true
  setTimeout(() => {
    isRefresh.value = false
  }, 200)
}
</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.right-container {
  display: flex;
  flex-direction: column;

  .header-wrapper {
    height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 0;
    background-color: #fff;
  }

  .content-wrapper {
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
}
</style>
