<!--
 * @Author: small hui
 * @Description: 系统logo标题组件
 *
-->
<template>
  <div v-cloak class="logo-container" :class="{ collapse: isCollapse }">
    <div class="logo-link">
      <img v-if="logoSrc" :src="logoSrc" :alt="title" class="logo" />
      <h1 v-show="!isCollapse" class="title">{{ title }}</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  isCollapse: boolean // 标题显隐状态
  logoSrc: string // 系统logo
  title: string // 系统标题
}
defineProps<IProps>()
</script>

<style scoped>
.logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
}

.logo-link {
  height: 100%;
  width: 100%;
  padding-left: 20px;
  padding-right: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.logo-link .logo {
  width: 32px;
  height: 32px;
}

.logo-link .title {
  flex: 1;
  padding-left: 10px;
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  white-space: nowrap;
  overflow: hidden;
}

[v-cloak] {
  display: none;
}
</style>
