/*
 * @Author: PanZongHui
 * @Description:eslint配置文件
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      // 解决引入问题及别名
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    /**
     * 常规配置
     */
    // 0:关闭 1:警告 2:报错
    quotes: [2, 'single'], // 强制使用一致的单引号
    semi: [2, 'never'], // 强制是否使用分号
    'symbol-description': 0,
    'no-shadow': 0, // 关闭:函数参数名与全局作用域名重复
    'no-console': 0, // 允许使用console
    'prefer-const': 0, // 关闭建议使用const
    'max-len': 0, // 关闭最大长度校验
    'no-useless-escape': 0, // 关闭正则表达式中不规则数据校验
    'implicit-arrow-linebreak': 0, // 关闭在箭头函数体之前不允许换行
    'object-curly-newline': 0, // 关闭在对象文字或解构赋值的大括号内强制执行一致的换行符
    'arrow-parens': 0, // 关闭箭头函数只有一个参数时要带括号
    'max-classes-per-file': 0, // 关闭只能暴露一个类
    'no-plusplus': 0, // 关闭i++报错
    'prefer-destructuring': 0, // 关闭强制执行解构
    'no-param-reassign': 0, // 关闭不能修改函数参数 setCount(state: State, count: number) state.count = count
    'no-use-before-define': [1, 'nofunc'], // 未定义前不能使用
    'vue/no-unused-components': 'off', // 当存在定义而未使用的组件时，关闭报错
    'no-lonely-if': 'off', // if过多
    'no-else-return': 'off', // 取消最后一个else
    'no-unused-vars': [
      // 变量未使用设为警告
      'warn',
      {
        // 本地变量
        vars: 'local',
        // 参数不检查
        args: 'none',
        // 参数可以使用_
        argsIgnorePattern: '^_',
        // 忽略catch中的error
        caughtErrors: 'none',
      },
    ],

    // 关闭vue3文件命名规则校验
    'vue/multi-word-component-names': 0,
    'vue/no-mutating-props': 0, // `eslint`不建议子元素通过v-model修改父元素传的props值
    'operator-linebreak': ['warn', 'after'],
    /**
     * 报错处理
     */
    // 报错：Prefer default export.eslint
    'import/prefer-default-export': 'off',
    // not devDependencies.eslintimport/no-extraneous-dependencies
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      // Missing file extension "ts" for "@/plugins"eslintimport/extensions
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
