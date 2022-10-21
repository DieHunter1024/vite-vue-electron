/*
 * @Author: Hunter
 * @Date: 2022-10-18 14:20:01
 * @LastEditTime: 2022-10-21 16:57:15
 * @LastEditors: Hunter
 * @Description: 
 * @FilePath: \vite-vue-electron\packages\app\src\main.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import '../global'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 调用主进程api
invoke("getAppMetrics").then((a) => {
    console.log(a)
})
invoke("getGPUFeatureStatus").then((a) => {
    console.log(a)
})
createApp(App).mount('#app')


