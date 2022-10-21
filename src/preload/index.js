/*
 * @Author: Hunter
 * @Date: 2022-10-12 14:43:24
 * @LastEditTime: 2022-10-21 17:01:30
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \vite-vue-electron\src\preload\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const { mixinGlobal } = require("../utils");
const { invoke } = require("../events/invokeEvent");

mixinGlobal({
  version: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
  },
  invoke,//暴露一个消息函数到vue环境中，调用主进程的api
});
