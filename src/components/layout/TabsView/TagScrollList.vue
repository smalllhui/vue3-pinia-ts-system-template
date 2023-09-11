<!--
 * @Author: PanZongHui
 * @Description:tag滚动标签列表组件
-->
<template>
  <div class="tags-main">
    <div class="icon-btn" v-show="isShowBtn" @click="back">
      <el-icon :size="18"><ArrowLeft /></el-icon>
    </div>

    <el-scrollbar
      style="height: 100%"
      ref="scrollPane"
      @scroll="({ scrollLeft: left } : any) => (scrollLeft = left)"
    >
      <div class="tag-view-scrollbar" ref="listRef">
        <span v-for="(item, index) in tagList" :key="item.path">
          <el-tag
            class="tag"
            :class="{ isActive: activePath === item.path }"
            size="large"
            ref="tagsRef"
            color="#fff"
            :closable="tagList.length > 1"
            :effect="activePath === item.path ? 'dark' : 'light'"
            @click="handleTagClick(item, index)"
            @close="handleClose(item)"
          >
            {{ item.title }}
          </el-tag>
        </span>
      </div>
    </el-scrollbar>

    <div class="icon-btn" v-show="isShowBtn" @click="go">
      <el-icon :size="18"><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ITab } from '@/types/ITabsProp'

interface IPros {
  tagList: Array<ITab>
  activePath: string
}
// 定义事件
interface Emits {
  // 根据path关闭
  (e: 'onCloseTagByPath', path: string): void
}
const props = defineProps<IPros>()
const emits = defineEmits<Emits>()

const scrollLeft = ref(0)
const scrollPane = ref()
const listRef = ref<HTMLDivElement>()
const tagsRef = ref<any[]>([])
const isShowBtn = ref(false)

const router = useRouter()

function setScrollLeft(left: number, isAdd = false) {
  if (isAdd) {
    left += scrollLeft.value
  }
  scrollPane.value?.setScrollLeft(left)
}

const back = () => {
  setScrollLeft(0 - scrollPane.value.wrapRef.clientWidth / 2, true)
}
const go = () => {
  setScrollLeft(scrollPane.value.wrapRef.clientWidth / 2, true)
}
function handleClose(tabObj: ITab) {
  emits('onCloseTagByPath', tabObj.path)
}
function handleTagClick(tabObj: ITab, index: number) {
  // https://github.com/meadmin-cn/meadmin-template/blob/main/src/layout/components/header/components/tagBar/index.vue
  nextTick(() => {
    if (!tagsRef.value[index]) {
      return
    }
    router.push(tabObj.path) // 切换路由
    if (index === 0) {
      setScrollLeft(0)
      return
    }
    if (index === tagsRef.value.length - 1) {
      setScrollLeft(tagsRef.value[tagsRef.value.length - 1].$el.offsetLeft)
      return
    }

    // 获取scrollPane可视区宽度
    let parentWidth = scrollPane.value.wrapRef.offsetWidth
    // 获取scrollPane已经滚出距离
    let parentLeft = scrollPane.value.wrapRef.scrollLeft
    // 滚出距离+可视区宽度
    const parentRight = parentWidth + parentLeft

    // 前一个tag的偏移
    const lastLeft = tagsRef.value[index - 1].$el.offsetLeft

    // 当前tag的偏移
    const offsetLeft = tagsRef.value[index].$el.offsetLeft
    // 当前tag的宽度
    const offsetRight = offsetLeft + tagsRef.value[index].$el.offsetWidth

    // 下一个tag的偏移
    const nextLeft = tagsRef.value[index + 1].$el.offsetLeft
    // 下一个tag的宽度
    const nextWidth = tagsRef.value[index + 1].$el.offsetWidth
    // 下一个tag滚出距离+可视区宽度
    const nextRight = nextLeft + nextWidth

    if (
      parentWidth <= offsetRight - lastLeft ||
      parentWidth <= nextRight - offsetLeft
    ) {
      setScrollLeft(offsetLeft)
    } else if (lastLeft < parentLeft) {
      setScrollLeft(lastLeft)
    } else if (nextRight > parentRight) {
      setScrollLeft(nextRight - parentWidth)
    }
  })
}

// 监听activePath变化
watch(
  () => props.activePath,
  newPath => {
    const index = props.tagList.findIndex(item => item.path === newPath)
    if (index > -1) {
      handleTagClick(props.tagList[index], index)
    }
  },
  { immediate: true, deep: true },
)
onMounted(() => {
  watchEffect(() => {
    // 父盒子可视区大小
    let parentWidth = scrollPane.value.wrapRef.offsetWidth
    // tag列表盒子的大小含滚动区域
    let tagListWidth = listRef.value?.scrollWidth || 0
    isShowBtn.value = tagListWidth > parentWidth
  })
})
</script>

<style scoped lang="scss">
:deep(.el-scrollbar__thumb) {
  background-color: transparent;
}
:deep(.el-tag__close) {
  color: #909399;
  &:hover {
    background-color: transparent;
    color: black;
  }
}

.icon-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 5px;
  box-sizing: border-box;
}
.tag-view-scrollbar {
  display: flex;
}
.tag {
  cursor: pointer;
  margin: 0 3px;
  user-select: none;
  border: none;
  color: rgb(31, 34, 37);
}
.isActive {
  color: #2d8cf0;
}
</style>
