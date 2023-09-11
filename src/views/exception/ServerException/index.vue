<!--
 * @Author: PanZongHui
 * @Description:500服务器出错页面
-->
<template>
  <div class="container">
    <div class="exception-img"></div>
    <div class="exception-content">
      <h1 class="exception-title">500</h1>
      <div class=".exception-desc">抱歉，服务器出错了</div>
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
  background-image: url('@/assets/images/exception-500.svg');
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
