import { createRouter, createWebHistory } from "vue-router"

// 定义路由配置
const routes = [
    { path: '/', component: () => import("@/views/Home.vue") }
]
// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 指定路由的历史管理模式
    routes // 定义路由配置
})
// 导出路由实例
export default router
