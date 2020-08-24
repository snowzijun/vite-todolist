/*
 * @Author: 子君
 * @Date: 2020-08-24 12:29:59
 * @LastEditors: 子君
 * @LastEditTime: 2020-08-24 12:54:19
 * @Description: 文件说明
 * @FilePath: \my-vue3\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')