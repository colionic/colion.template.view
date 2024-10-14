module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  plugins: ['prettier'], // 添加 prettier 插件
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error' // 将 Prettier 的错误作为 ESLint 错误展示
  }
};
