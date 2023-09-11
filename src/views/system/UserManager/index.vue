<!--
 * @Author: PanZongHui
 * @Description:系统用户管理页面
-->
<template>
  <div class="container" ref="containerRef">
    <!-- 查询表单 -->
    <div class="search-container" ref="searchContainerRef">
      <el-form
        class="search-form"
        ref="ruleFormRef"
        :model="searchFormData"
        label-suffix=":"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="searchFormData.userName" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" prop="gender">
              <el-select v-model="searchFormData.gender" clearable>
                <el-option label="男" value="man" />
                <el-option label="女" value="woman" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="入职时间" prop="hireDate">
              <el-date-picker
                v-model="searchFormData.hireDate"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <search-button @click="handleSearch" />
          <reset-button @click="handleResetForm" />
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格工具栏 -->
    <div class="tool-bar">
      <el-space>
        <p-add-button />
        <p-delete-button-all />
        <p-export-button @click="handleExportTableData" />
      </el-space>
    </div>
    <!-- 表格 -->
    <vxe-table
      align="center"
      border
      ref="xTableInstance"
      :row-config="{ isCurrent: true, isHover: true }"
      :data="tableObj.records"
      :loading="tableObj.loadingState"
    >
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
      <vxe-column fixed="right" title="操作" width="250">
        <template #default="{ row }">
          <p-edit-button @click="handleEdit(row)" />
          <p-view-button />
          <p-delete-button />
        </template>
      </vxe-column>
    </vxe-table>

    <!-- 底部分页模块 -->
    <div class="page">
      <el-pagination
        small
        background
        layout="total, sizes, prev, pager, next, jumper"
        v-model:currentPage="tableObj.current"
        v-model:page-size="tableObj.size"
        :page-sizes="[100, 200, 500, 800, 1000]"
        :total="tableObj.total"
        @size-change="queryTableAllList"
        @current-change="queryTableAllList"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import type { VxeTableInstance } from 'vxe-table'
import { ITableProp } from '@/types/FormType'
// 消息提示工具
import message from '@/utils/MessageUtil'
import {
  SearchButton,
  ResetButton,
  PAddButton,
  PDeleteButton,
  PDeleteButtonAll,
  PEditButton,
  PViewButton,
  PExportButton,
} from '@/components/form/buttons'

interface RowVO {
  id: number | string
  name: string
  role: string
  sex: string
  age: number
  address: string
}

// 当前页面盒子实例
const containerRef = ref<HTMLDivElement>()
// 查询表格盒子实例
const searchContainerRef = ref<HTMLDivElement>()
// 查询表单实例
const ruleFormRef = ref<FormInstance>()
// 表格实例
const xTableInstance = ref<VxeTableInstance>()

// 查询表单数据
const searchFormData = reactive({
  userName: '',
  gender: '',
  hireDate: '',
})

// 表格列表数据
const tableObj = reactive<ITableProp<RowVO>>({
  // 查询返回的数据列表
  records: [],
  // 表格数据加载状态
  loadingState: false,
  // 总条数
  total: 0,
  // 总页数
  pages: 0,
  // 当前页
  current: 1,
  // 页大小
  size: 10,
})

const handleSearch = () => {
  console.log('handleSearch!')
}

const handleEdit = (row: any) => {
  console.log('handleEdit!', row)
}

// 重置表单
const handleResetForm = () => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.resetFields()
}
// ? 处理数据导出
const handleExportTableData = () => {
  const $tableRef = xTableInstance.value
  if (!$tableRef) {
    return
  }
  // const selectRecords: RowVO[] = $tableRef.getCheckboxRecords()
  const selectRecords: RowVO[] = tableObj.records
  if (!selectRecords.length) {
    message.showMessage('请先勾选你要导出的数据')
    return
  }
  const filename: string = '角色列表'
  const columns: any[] = [
    { field: 'seq' },
    { field: 'name' },
    { field: 'sex' },
    { field: 'age' },
    { field: 'address' },
  ]
  $tableRef.exportData({
    filename,
    columns,
    data: selectRecords,
  })
}

// !查询角色列表
const queryTableAllList = async () => {
  const { current, size } = tableObj
  console.log('查询表格列表')
  console.log(` current:${current}, size:${size} `)
  tableObj.loadingState = true
  setTimeout(() => {
    const total = 100
    tableObj.records = Array.from({ length: size }).map((_, item) => ({
      id: `1000${item}`,
      name: `Test${item}`,
      role: 'Designer',
      sex: 'Women',
      age: 24,
      address: `Shanghai${item}`,
    }))
    tableObj.total = total
    tableObj.loadingState = false
  }, 2000)
}

onMounted(() => {
  queryTableAllList()
})
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.search-container {
  padding: 0 10px;
  box-sizing: border-box;
}
.search-form .el-input {
  --el-input-width: 220px;
}
.tool-bar {
  padding: 10px;
  box-sizing: 'border-box';
}
.page {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
</style>
