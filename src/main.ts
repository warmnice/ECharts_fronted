// 定义属性 __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__
declare global {
    interface Window {
      __VUE_OPTIONS_API__: boolean;
      __VUE_PROD_DEVTOOLS__: boolean;
    }
  }
import { createApp } from "vue"
import { createPinia } from "pinia"
// 导入根组件
import App from "@/App.vue"
// 导入路由实例
import router from "@/router/router"
// 在浏览器环境中模拟一个简单的 process 对象
const process = {
    env: {
      VUE_OPTIONS_API: 'true',
      VUE_PROD_DEVTOOLS: 'true', // 设置你的环境变量的值
    },
  };
// 设置特性标志为全局变量
window.__VUE_OPTIONS_API__ = process.env.VUE_OPTIONS_API === 'true';
window.__VUE_PROD_DEVTOOLS__ = process.env.VUE_PROD_DEVTOOLS === 'true';

// 创建 vue 应用实例
const app = createApp(App)
// 创建 pinia 应用实例
const pinia = createPinia()
// 注册路由实例、pinia应用实例
app.use(router).use(pinia)
// 挂载 vue 应用实例
app.mount("#app")
