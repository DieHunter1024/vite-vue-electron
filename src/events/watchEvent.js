/*
 * @Author: Hunter
 * @Date: 2022-10-21 13:56:46
 * @LastEditTime: 2022-10-21 16:46:27
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \server-monitoring-panel\src\events\watchEvent.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const electron = require("electron");
const { ipcMain } = electron;
const { eventStr, fixKey } = require("./invokeEvent");

const removeKey = (exports.removeKey = (str) =>
  str.includes(eventStr) ? str.split(eventStr)[1] : str);
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
