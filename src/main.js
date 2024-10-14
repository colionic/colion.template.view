import Vue from 'vue'                  // 引入 Vue 框架
import App from './App.vue'            // 引入根组件

Vue.config.productionTip = false       // 关闭生产环境提示

// 如果使用 Vue 插件或全局组件，可以在此进行注册
// 例如：Vue.use(SomePlugin)

// 创建 Vue 实例并挂载到 #app
new Vue({
    render: h => h(App)  // 渲染根组件 App.vue
}).$mount('#app')
