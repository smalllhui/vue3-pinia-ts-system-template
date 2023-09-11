<!--
 * @Author: PanZongHui
 * @Description:刷新插件
-->
<template>
  <el-icon :size="20" class="icon-box" @click="handleRefresh">
    <Refresh />
  </el-icon>
</template>
<script setup lang="ts">
const emits = defineEmits(['onRefresh'])

// 刷新事件
const handleRefresh = () => {
  emits('onRefresh')
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
</style>
