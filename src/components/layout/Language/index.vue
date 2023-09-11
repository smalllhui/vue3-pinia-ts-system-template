<!--
 * @Author: PanZongHui
 * @Description: 语言切换组件
-->
<template>
  <el-dropdown class="wrapper" @command="handleChangeLanguage">
    <el-icon :size="20" class="icon-box">
      <i class="iconfont icon-duoyuyan"></i>
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(item, index) in languageList"
          :key="index"
          :command="item.language"
          :disabled="currentLanguage === item.language"
          >{{ item.desc }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const currentLanguage = ref('Chinese')
const languageList = reactive([
  { language: 'Chinese', desc: '简体中文' },
  { language: 'English', desc: 'English' },
  { language: 'Japanese', desc: 'Japanese' },
])

const handleChangeLanguage = (newLanguage: string) => {
  console.log('切换语言为：', newLanguage)
  currentLanguage.value = newLanguage
}
</script>

<style scoped>
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}

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
