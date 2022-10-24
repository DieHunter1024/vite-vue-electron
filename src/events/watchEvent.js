/*
 * @Author: Hunter
 * @Date: 2022-10-21 13:56:46
 * @LastEditTime: 2022-10-24 14:03:08
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \vite-vue-electron\src\events\watchEvent.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const electron = require("electron");
const { ipcMain } = electron;
const { eventStr, fixKey } = require("./invokeEvent");

const removeKey = (exports.removeKey = (str) =>
  str.includes(eventStr) ? str.split(eventStr)[1] : str);
// 注册消息，绑定函数
exports.watch = (type, fn) => {
  ipcMain.on(
    type,
    (event, ...arg) =>
      event.sender.send(
        fixKey(type),
        typeof fn === "function" ? fn(...arg) : fn
      ) //兼容属性或函数
  );
};
