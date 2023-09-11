<!--
 * @Author: PanZongHui
 * @Description:tag标签组件
-->
<template>
  <div class="tabs-wrapper">
    <tag-scroll-list
      :tag-list="tagList"
      :active-path="activeTagPath"
      @on-close-tag-by-path="handleCloseTagByPath"
    />
    <div class="tool">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-tag class="tag-arrow-down" size="large">
            <el-icon>
              <ArrowDown />
            </el-icon>
          </el-tag>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="RefreshRight" command="refresh">
              刷新当前
            </el-dropdown-item>
            <el-dropdown-item icon="Close" command="closeCurrent">
              关闭当前
            </el-dropdown-item>
            <el-dropdown-item icon="Operation" command="closeOther">
              关闭其它
            </el-dropdown-item>
            <!-- <el-dropdown-item icon="SemiSelect" command="closeAll">
              关闭全部
            </el-dropdown-item> -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITab } from '@/types/ITabsProp'
import TagScrollList from './TagScrollList.vue'

interface IPros {
  tagList: Array<ITab>
  activeTagPath: string
}
// 定义事件
interface Emits {
  // 刷新当前
  (e: 'onRefresh'): void
  // 关闭当前
  (e: 'onCloseCurrent'): void
  // 根据path关闭
  (e: 'onCloseTagByPath', path: string): void
  // 关闭其它
  (e: 'onCloseOther'): void
}
defineProps<IPros>()
const emits = defineEmits<Emits>()

function handleCommand(command: string) {
  if (command === 'refresh') {
    emits('onRefresh')
  } else if (command === 'closeCurrent') {
    emits('onCloseCurrent')
  } else if (command === 'closeOther') {
    emits('onCloseOther')
  }
}

function handleCloseTagByPath(path: string) {
  emits('onCloseTagByPath', path)
}
</script>

<style scoped lang="scss">
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}

.tabs-wrapper {
  background: #f5f7f9;
  padding: 6px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tags-main {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.tool {
  padding-left: 5px;
  box-sizing: border-box;
  .tag-arrow-down {
    background-color: #fff;
    color: rgb(51, 54, 57);
  }
}
</style>
