/*
 * @Author: Hunter
 * @Date: 2022-10-21 13:57:05
 * @LastEditTime: 2022-10-24 14:01:53
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \vite-vue-electron\src\events\invokeEvent.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const electron = require("electron");
const { ipcRenderer } = electron;
const { defer } = require("utils-lib-js");

const eventStr = (exports.eventStr = `@$&#*~`);
// 混入一个字符串，用于区别invoke的type
const fixKey = (exports.fixKey = (str) => `${eventStr}${str}`);
// 发送消息，调函数
exports.invoke = (type, ...arg) => {
  const { promise, resolve } = defer();
  ipcRenderer.on(fixKey(type), (e, ...arg) => resolve(...arg));
  ipcRenderer.send(type, ...arg);
  return promise;
};
