import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {
  createStyleImportPlugin,
  VxeTableResolve,
} from 'vite-plugin-style-import'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  // console.log('command', command)
  // console.log('env', env)
  return {
    base: env.VITE_BASE, // 项目路径 /admin/
    plugins: [
      vue(),
      // 配置vite在运行的时候自动检测eslint规范
      eslintPlugin({
        include: [
          'src/**/*.ts',
          'src/**/*.js',
          'src/**/*.vue',
          'src/*.ts',
          'src/*.js',
          'src/*.vue',
        ],
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // VxeTable按需加载
      createStyleImportPlugin({
        resolves: [VxeTableResolve()],
      }),
    ],

    server: {
      https: false, // 是否开启https
      open: false, // 是否自动在浏览器打开
      port: 8088, // 端口号
      host: '0.0.0.0', // 可以使用ip打开
      strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true, // 换源
          //   secure: false, // 如果是https接口，需要配置这个参数
          //   ws: true, // websocket支持
          rewrite: path => path.replace(/^\/api/, ''), // 将请求中/api用空值替换重写，根据实际业务修改
        },
      },
    },

    // 与plugins同级
    css: {
      // css预处理器
      preprocessorOptions: {
        // 配scss
        scss: {
          charset: false, // 关闭编译时 字符编码 报错问题
          additionalData: '@use "@/assets/styles/scss/global.scss" as *;', // 添加公共样式
        },
      },
    },

    // 配置别名 与plugins同级
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      // 导入时想要省略的扩展名列表
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },
  }
})
