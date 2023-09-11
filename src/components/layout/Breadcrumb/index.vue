<!--
 * @Author: PanZongHui
 * @Description: 面包屑【路径组件】
-->
<template>
  <el-breadcrumb separator="/" class="wrapper">
    <el-breadcrumb-item v-for="item in currentPathList" :key="item">{{
      item
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
defineProps<{ currentPathList: string[] }>()
</script>

<style scoped>
.wrapper {
  height: 50px;
  line-height: 50px;
  margin-left: 10px;
  user-select: none;
}
</style>
