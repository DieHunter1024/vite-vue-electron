/*
 * @Author: Hunter
 * @Date: 2022-10-21 13:57:05
 * @LastEditTime: 2022-10-21 16:52:06
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \server-monitoring-panel\src\events\invokeEvent.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const electron = require("electron");
const { ipcRenderer } = electron;
const { defer } = require("utils-lib-js");

const eventStr = (exports.eventStr = `@$&#*~`);
const fixKey = (exports.fixKey = (str) => `${eventStr}${str}`);

exports.invoke = (type, ...arg) => {
  const { promise, resolve } = defer();
  ipcRenderer.on(fixKey(type), (e, ...arg) => resolve(...arg));
  ipcRenderer.send(type, ...arg);
  return promise;
};
