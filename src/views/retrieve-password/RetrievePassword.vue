<!--
 * @Author: PanZongHui
 * @Description:用户密码找回页面
-->
<template>
  <div class="container">
    <div class="login-container">
      <div class="title-wrapper">
        <el-image
          style="width: 50px; height: 50px"
          :src="loginInfo.logo"
          fit="cover"
        />
        <h1 class="login-title">{{ loginInfo.title }}</h1>
      </div>
      <div class="form">
        <el-form
          ref="ruleFormRef"
          :model="userFrom"
          :rules="rules"
          status-icon
          size="large"
        >
          <el-form-item prop="userAccount">
            <el-input
              prefix-icon="User"
              v-model.number="userFrom.userAccount"
              placeholder="账户"
            />
          </el-form-item>

          <el-form-item prop="captcha">
            <el-input
              prefix-icon="CircleCheck"
              v-model="userFrom.captcha"
              placeholder="验证码"
            >
              <template #append>
                <el-button> 发送验证码</el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="userPassword">
            <el-input
              prefix-icon="Lock"
              v-model="userFrom.userPassword"
              type="password"
              autocomplete="off"
              placeholder="新密码"
            />
          </el-form-item>

          <el-form-item prop="isRemember">
            <div class="tool-wrapper">
              <span> </span>
              <el-button type="primary" link @click="goLoginPage"
                >返回登录页面</el-button
              >
            </div>
          </el-form-item>

          <el-form-item>
            <el-button
              class="login-btn"
              type="primary"
              @click="submitForm(ruleFormRef)"
              >确认</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import logoImg from '@/assets/images/logo.svg'

/**
 * ! 表单规则校验
 */
const validateUserAccount = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}
const validateUserPassword = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入新密码'))
  } else {
    callback()
  }
}
const validateCaptcha = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else {
    callback()
  }
}

/**
 *数据部分
 */
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const loginInfo = reactive({
  logo: logoImg,
  title: '用户密码找回',
})
const userFrom = reactive({
  userAccount: '',
  userPassword: '',
  captcha: '',
})
const rules = reactive<FormRules<typeof userFrom>>({
  userAccount: [{ validator: validateUserAccount, trigger: 'blur' }],
  userPassword: [{ validator: validateUserPassword, trigger: 'blur' }],
  captcha: [{ validator: validateCaptcha, trigger: 'blur' }],
})

function goLoginPage() {
  router.replace('/login')
}
/**
 * 事件部分
 */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid): Promise<boolean | undefined> => {
    if (valid) {
      console.log('校验通过')
      console.log(userFrom)
      return undefined
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url('@/assets/images/login-background.svg');
}
.login-container {
  width: 480px;
  box-shadow: 0px 0px 30px #eee;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  .title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    user-select: none;
    .login-title {
      padding-left: 20px;
      box-sizing: border-box;
      color: #515a6e;
    }
  }
  .form {
    padding: 0 40px;
    padding-top: 20px;
    box-sizing: border-box;
    .captcha-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      .captcha-input {
        flex: 1;
      }
      .captcha-image {
        margin-left: 20px;
        background-color: pink;
        cursor: pointer;

        .img_text {
          width: 100px;
          font-size: 30px;
          font-weight: 600;
          color: orangered;
          letter-spacing: 4px;
          text-align: center;
        }
      }
    }

    .tool-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
