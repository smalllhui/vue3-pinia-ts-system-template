<!--
 * @Author: PanZongHui
 * @Description:入口App文件
-->
<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { initDynamicRouters } from '@/router'
import useMenuStore from '@/store/modules/menu'
import { generateRouteList } from '@/utils/RouteMenuUtil'

const menuStore = useMenuStore()

const locale = ref(zhCn)
const route = useRoute()
const router = useRouter()

const routeList = generateRouteList(menuStore.getMenuList)

// 解决刷新路由丢失
initDynamicRouters(routeList)

watch(
  () => route.path,
  newValue => {
    // 解决浏览器输入地址不能跳转问题
    router.push(newValue)
  },
)
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
