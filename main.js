/*
 * @Author: Hunter
 * @Date: 2022-10-18 14:20:01
 * @LastEditTime: 2022-10-18 18:00:04
 * @LastEditors: Hunter
 * @Description: 
 * @FilePath: \vite-vue-electron\main.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow } = require("electron");
const path = require("path");
const { NODE_ENV } = process.env;
// require("electron-reload")(path.join(__dirname, ""), {
//   electron: require(`${__dirname}/node_modules/electron`),
// });
function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, //允许使用node
      preload: path.join(__dirname, "preload.js"),
    },
  });
  if (NODE_ENV !== "production") {
    mainWindow.loadURL(`${"http://127.0.0.1"}:${2048}/`);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile("./packages/app/dist/index.html");
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
