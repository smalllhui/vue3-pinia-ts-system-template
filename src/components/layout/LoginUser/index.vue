<!--
 * @Author: PanZongHui
 * @Description: 用户头像模块
 *
-->
<template>
  <el-dropdown class="wrapper" @command="handleCommand">
    <div class="user-wrapper">
      <el-avatar :size="25" :src="avatar" class="avatar" />
      <el-link class="user-name" type="primary" :underline="false">
        {{ userNick }}
        <el-icon class="arrow">
          <arrow-down />
        </el-icon>
      </el-link>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <!-- <el-dropdown-item command="user/center" icon="UserFilled">
          个人中心
        </el-dropdown-item>
        <el-dropdown-item command="user/setting" icon="Setting">
          个人设置
        </el-dropdown-item>
        <el-dropdown-item divided command="user/logout" icon="SwitchButton">
          退出登录
        </el-dropdown-item> -->
        <el-dropdown-item
          :command="item.command"
          :icon="item.icon"
          v-for="item in operationList"
          :key="item.command"
        >
          {{ item.title }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
// 操作列表
interface UserOperation {
  icon?: string
  title: string
  command: string
}

interface IProps {
  avatar: string
  userNick: string
  operationList: UserOperation[]
}

// 定义事件
interface Emits {
  // 用户操作处理事件
  (e: 'onCommand', command: string): void
}
const emits = defineEmits<Emits>()
defineProps<IProps>()

// 用户操作事件
const handleCommand = (command: string) => {
  emits('onCommand', command)
}
</script>

<style scoped lang="scss">
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}

.wrapper {
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.user-wrapper {
  margin-left: 5px;
  height: 50px;
  line-height: 50px;
}

.avatar {
  vertical-align: middle;
  cursor: pointer;
}
.user-name {
  display: inline-block;
  margin-left: 10px;
}
.arrow {
  margin-left: 3px;
}
</style>
