<!--
 * @Author: PanZongHui
 * @Description:全屏插件
-->
<template>
  <a :href="repositoryLinkHref" target="blank">
    <el-icon :size="20" class="icon-box">
      <i class="iconfont icon-github"></i>
    </el-icon>
  </a>
</template>

<script setup lang="ts">
const repositoryLinkHref = 'https://element-plus.gitee.io/'
</script>

<style scoped>
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
