/*
 * @Author: PanZongHui
 * @Description: 信息提示工具,主要用于可以全局处理提示消息的显示与隐藏
 */
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
import 'element-plus/theme-chalk/src/notification.scss'

// 全局消息提示
const MessageUtil = {
  addSuccess: () => {
    ElMessage({
      message: '添加成功',
      type: 'success',
    })
  },
  updateSuccess: () => {
    ElMessage({
      message: '修改成功',
      type: 'success',
    })
  },
  deleteSuccess: () => {
    ElMessage({
      message: '删除成功',
      type: 'success',
    })
  },
  addError: () => {
    ElMessage({
      message: '添加失败',
      type: 'error',
    })
  },
  deleteError: () => {
    ElMessage({
      message: '删除失败',
      type: 'error',
    })
  },
  updateError: () => {
    ElMessage({
      message: '修改失败',
      type: 'error',
    })
  },

  confirm: (title: string, message: string, type: any = 'warning') =>
    new Promise<boolean>((resolve, reject) => {
      ElMessageBox.confirm(`${message}`, `${title}`, {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type,
      })
        .then(() => {
          resolve(true)
        })
        .catch(error => {
          reject(error)
        })
    }),

  showMessage: (message: string, type: any = 'success') => {
    ElMessage({ message, type })
  },

  loginFailInfo: (message: string) => {
    ElNotification({
      message,
      type: 'error',
    })
  },
}

export default MessageUtil
