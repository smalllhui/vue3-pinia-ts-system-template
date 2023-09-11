<!--
 * @Author: PanZongHui
 * @Description:新增按钮组件_带权限校验
-->
<template>
  <el-button v-permission="{ action: 'add' }" type="primary" icon="Plus">
    新增
  </el-button>
</template>

<script setup lang="ts">
// // 定义事件
// interface IEmits {
//   // 查询事件
//   (e: 'onAdd'): void
// }
// const emits = defineEmits<IEmits>()
// const handleAddBtnClick = () => {
//   emits('onAdd')
// }
</script>

<style scoped></style>
