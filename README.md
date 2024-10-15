# template
cli 模板统一管理




# Q & A
- eslint 和 prettier 冲突怎么办?
1. 安装 eslint-config-prettier
2. 更新 ESLint 配置文件 .eslintrc.js
```js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier'  // 禁用与 Prettier 冲突的 ESLint 规则
  ],
  rules: {
    // 可以自定义其他 ESLint 规则
  }
};
```
3. 更新 Prettier 配置 .prettierrc
```json
{
  "singleQuote": true  // 使用单引号
}
```
4. 安装 eslint-plugin-prettier
```js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier'
  ],
  plugins: ['prettier'],  // 添加 prettier 插件
  rules: {
    'prettier/prettier': 'error',  // 将 Prettier 的错误作为 ESLint 错误展示
  }
};
```
