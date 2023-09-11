<!--
 * @Author: PanZongHui
 * @Description:用户登录页面 不用与后端交互
-->
<template>
  <div class="container">
    <div class="login-container">
      <div class="title-wrapper">
        <el-image
          style="width: 50px; height: 50px"
          :src="LOGIN_INFO.logo"
          fit="cover"
        />
        <h1 class="login-title">{{ LOGIN_INFO.title }}</h1>
      </div>
      <div class="form">
        <el-form
          ref="ruleFormRef"
          :model="loginForm"
          :rules="rules"
          status-icon
          size="large"
        >
          <el-form-item prop="userAccount">
            <el-input
              prefix-icon="User"
              v-model.number="loginForm.userAccount"
              placeholder="账户"
            />
          </el-form-item>

          <el-form-item prop="userPassword">
            <el-input
              prefix-icon="Lock"
              v-model="loginForm.userPassword"
              type="password"
              autocomplete="off"
              placeholder="密码"
            />
          </el-form-item>

          <el-form-item prop="captcha">
            <div class="captcha-wrapper">
              <div class="captcha-input">
                <el-input
                  prefix-icon="CircleCheck"
                  v-model="loginForm.captcha"
                  placeholder="验证码"
                />
              </div>

              <div class="captcha-image">
                <div class="img_text">7777</div>
              </div>
            </div>
          </el-form-item>

          <el-form-item prop="isRemember">
            <div class="tool-wrapper">
              <span>
                <el-checkbox v-model="loginForm.isRemember" label="自动登录" />
              </span>
              <span>
                <el-button type="primary" link @click="goRetrievePasswordPage"
                  >忘记密码了?</el-button
                >
              </span>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login-btn"
              type="primary"
              @click="handleLogin(ruleFormRef)"
              >登录</el-button
            >
          </el-form-item>

          <el-form-item>
            <el-space :size="10">
              <span>演示账号登录:</span>
              <el-button
                type="primary"
                size="small"
                @click="setLoginUser('admin')"
              >
                admin
              </el-button>
              <el-button
                type="primary"
                size="small"
                @click="setLoginUser('user')"
              >
                user
              </el-button>
              <el-button
                type="primary"
                size="small"
                @click="setLoginUser('guest')"
              >
                guest
              </el-button>
            </el-space>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, shallowReactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import logoImg from '@/assets/images/logo.svg'
import { generateRouteList } from '@/utils/RouteMenuUtil'
import { initDynamicRouters } from '@/router'
import { routerTestData } from '@/temp/routerTestData'
import { saveToken } from '@/utils/TokenUtil'
import useMenuStore from '@/store/modules/menu'
import useUserStore from '@/store/modules/user'

/**
 * todo 表单规则校验
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
    callback(new Error('请输入密码'))
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
 *! 数据部分
 */
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const menuStore = useMenuStore()
const userStore = useUserStore()
const LOGIN_INFO = shallowReactive({
  logo: logoImg,
  title: '系统用户登录',
})
const loginForm = reactive({
  userAccount: '',
  userPassword: '',
  captcha: '7777',
  isRemember: false,
})
const rules = reactive<FormRules<typeof loginForm>>({
  userAccount: [{ validator: validateUserAccount, trigger: 'blur' }],
  userPassword: [{ validator: validateUserPassword, trigger: 'blur' }],
  captcha: [{ validator: validateCaptcha, trigger: 'blur' }],
})

// todo设置登录用户账号密码
const setLoginUser = (userAccount: string) => {
  loginForm.userAccount = userAccount
  loginForm.userPassword = userAccount
}
// todo 跳转找回密码页面
function goRetrievePasswordPage() {
  router.replace('/retrieve/password')
}
// ! 用户登录
const handleLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid): Promise<boolean | undefined> => {
    if (valid) {
      const resultUser = {
        data: {
          userInfo: {
            userNick: '追忆似水年华',
            userAvatar:
              'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          },
          token: 'token-123',
        },
      }
      // 保存用户信息
      userStore.saveUserInfo(resultUser.data)
      saveToken(resultUser.data.token)

      // 保存系统菜单
      menuStore.saveMenuList(routerTestData)

      // 生成路由菜单
      const routeList = generateRouteList(routerTestData)
      console.log('routeList')
      console.log(routeList)

      if (routeList.length > 0) {
        // 动态导入路由
        initDynamicRouters(routeList)
        router.replace(routeList[0].path)
      } else {
        router.push('/403')
      }
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
