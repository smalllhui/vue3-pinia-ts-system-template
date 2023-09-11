<!--
 * @Author: PanZongHui
 * @Description:查看按钮组件_带权限校验
-->
<template>
  <el-button type="warning" v-permission="{ action: 'view' }" link>
    <template #icon>
      <el-icon :size="20">
        <i class="iconfont icon-chakan1"></i>
      </el-icon>
    </template>
    查看
  </el-button>
</template>

<script setup lang="ts"></script>

<style scoped></style>
