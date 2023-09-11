<!--
 * @Author: PanZongHui
 * @Description:删除按钮组件_带权限校验
-->
<template>
  <el-button
    v-permission="{ action: 'delete' }"
    icon="DeleteFilled"
    type="danger"
    link
  >
    删除
  </el-button>
</template>

<script setup lang="ts"></script>

<style scoped></style>
