<!--
 * @Author: PanZongHui
 * @Description: 控制左则菜单展开与收缩组件
-->
<template>
  <el-icon :size="20" class="icon-box" @click="toggle">
    <i
      :class="
        isCollapse
          ? 'iconfont icon-zhankaicaidan'
          : 'iconfont icon-zhediecaidan'
      "
    ></i>
  </el-icon>
</template>

<script setup lang="ts">
// 定义事件
interface Emits {
  // 切换状态
  (e: 'toggleCollapse'): void
}
const emits = defineEmits<Emits>()
defineProps<{ isCollapse: boolean }>()

const toggle = () => {
  emits('toggleCollapse')
}
</script>

<style scoped>
.icon-box {
  cursor: pointer;
  color: #303133;
  height: 50px;
  line-height: 50px;
  width: 40px;
}
.icon-box:hover {
  background-color: rgba(0, 0, 0, 0.07);
}
.iconfont {
  font-size: 15px !important;
  box-sizing: border-box;
}
</style>
