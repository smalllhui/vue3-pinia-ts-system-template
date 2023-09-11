<!--
 * @Author: PanZongHui
 * @Description:删除按钮组件_带权限校验
-->
<template>
  <el-button
    v-permission="{ action: 'patchdel' }"
    type="danger"
    icon="DeleteFilled"
  >
    删除
  </el-button>
</template>

<script setup lang="ts"></script>

<style scoped></style>
