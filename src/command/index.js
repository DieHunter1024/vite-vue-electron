/*
 * @Author: Hunter
 * @Date: 2022-10-21 16:55:37
 * @LastEditTime: 2022-10-21 17:01:41
 * @LastEditors: Hunter
 * @Description: 
 * @FilePath: \vite-vue-electron\src\command\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// const { getAppMetrics } = require("./app");
const electron = require("electron");
const { app } = electron;
const { watch } = require("../events/watchEvent");
exports.initApi = () => {
  watch("getAppMetrics", (...arg) => app.getAppMetrics(...arg));
  watch("getGPUFeatureStatus", (...arg) => app.getGPUFeatureStatus(...arg));
};
