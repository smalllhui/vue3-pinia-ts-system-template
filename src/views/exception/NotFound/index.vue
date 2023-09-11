<!--
 * @Author: PanZongHui
 * @Description:404资源不存在页面
-->
<template>
  <div class="container">
    <div class="exception-img"></div>
    <div class="exception-content">
      <h1 class="exception-title">404</h1>
      <div class=".exception-desc">抱歉，你访问的页面不存在</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.exception-img {
  flex: 3;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url('@/assets/images/exception-404.svg');
}
.exception-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding-left: 40px;
  box-sizing: border-box;
}
.exception-title {
  margin-bottom: 24px;
  color: #515a6e;
  font-weight: 600;
  font-size: 72px;
  line-height: 72px;
}
.exception-desc {
  margin-bottom: 16px;
  color: #808695;
  font-size: 20px;
  line-height: 28px;
}
</style>
