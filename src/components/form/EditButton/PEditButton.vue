<!--
 * @Author: PanZongHui
 * @Description:编辑按钮组件_带权限校验
-->
<template>
  <el-button v-permission="{ action: 'edit' }" icon="Edit" type="primary" link>
    编辑
  </el-button>
</template>

<script setup lang="ts"></script>

<style scoped></style>
