<!--
 * @Author: PanZongHui
 * @Description:导出按钮组件_带权限校验
-->
<template>
  <el-button v-permission="{ action: 'export' }" type="warning">
    <template #icon>
      <el-icon :size="20">
        <i class="iconfont icon-daochu1"></i>
      </el-icon>
    </template>
    导出
  </el-button>
</template>

<script setup lang="ts"></script>

<style scoped></style>
