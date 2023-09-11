<!--
 * @Author: PanZongHui
 * @Description:消息插件
-->
<template>
  <el-icon :size="20" class="icon-box" :style="{ paddingRight: paddingRight }">
    <el-badge :value="messageCount" :max="99" :hidden="isHidden">
      <i class="iconfont icon-tongzhi"></i>
    </el-badge>
  </el-icon>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ messageCount: number }>()

// 偏移值
const paddingRight = computed(() => {
  if (props.messageCount < 1) {
    return '0px'
  } else if (props.messageCount < 10) {
    return '8px'
  } else if (props.messageCount < 100) {
    return '16px'
  }
  return '20px'
})
// 是否隐藏小圆点
const isHidden = computed(() => props.messageCount < 1)
</script>

<style scoped>
:deep(.el-badge__content.is-fixed) {
  top: 15px;
}

.icon-box {
  cursor: pointer;
  color: #303133;
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
a {
  text-decoration: none;
}
</style>
