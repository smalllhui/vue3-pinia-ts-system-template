<!--
 * @Author: PanZongHui
 * @Description:全屏插件
-->
<template>
  <el-icon @click="click" :size="20" class="icon-box">
    <i
      :class="
        isFullscreen ? 'iconfont icon-quxiaoquanping' : 'iconfont icon-quanping'
      "
    ></i>
  </el-icon>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from 'vue'
import screenfull from 'screenfull'
import MessageUtil from '@/utils/MessageUtil'

const isFullscreen = ref<boolean>(false)

const click = () => {
  if (!screenfull.isEnabled) {
    MessageUtil.showMessage('你的浏览器不支持该功能.', 'error')
    return
  }
  screenfull.toggle()
}
const chage = () => {
  isFullscreen.value = !isFullscreen.value
}
const init = () => {
  if (screenfull.isEnabled) {
    screenfull.on('change', chage)
  }
}
onMounted(() => {
  init()
})
onBeforeUnmount(() => {
  if (screenfull.isEnabled) {
    screenfull.off('change', chage)
  }
})
</script>

<style scoped>
.icon-box {
  cursor: pointer;
  color: #606266;
  height: 50px;
  line-height: 50px;
  width: 40px;
}
.iconfont {
  font-size: 20px !important;
}
.icon-box:hover {
  background-color: rgba(0, 0, 0, 0.07);
}
</style>
