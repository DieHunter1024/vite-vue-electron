/*
 * @Author: Hunter
 * @Date: 2022-10-21 16:55:37
 * @LastEditTime: 2022-10-21 17:01:41
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \vite-vue-electron\src\command\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const { watch } = require("../events/watchEvent");
const { app } = require("./app");
exports.initApi = () => {
  Reflect.ownKeys(electronApi).forEach((moduleName) => {
    const moduleItem = electronApi[moduleName];
    Reflect.ownKeys(moduleItem).forEach((key) =>
      watch(`${moduleName}:${key}`, moduleItem[key])
    );
  });
};

const electronApi = { app };
