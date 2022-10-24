/*
 * @Author: Hunter
 * @Date: 2022-10-13 17:37:06
 * @LastEditTime: 2022-10-24 11:46:39
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \vite-vue-electron\src\utils\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

const electron = require("electron");
const { contextBridge } = electron;
//  将exposeInMainWorld配置化
exports.mixinGlobal = (api) => {
  Reflect.ownKeys(api).forEach(i =>
    contextBridge.exposeInMainWorld(i, api[i])
  );
};
