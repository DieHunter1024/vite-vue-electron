/*
 * @Author: Hunter
 * @Date: 2022-10-13 17:37:06
 * @LastEditTime: 2022-10-21 11:07:28
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \server-monitoring-panel\src\utils\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

const electron = require("electron");
const { contextBridge } = electron;
exports.mixinGlobal = (api) => {
  Reflect.ownKeys(api).forEach(i =>
    contextBridge.exposeInMainWorld(i, api[i])
  );
};
