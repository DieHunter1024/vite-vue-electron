/*
 * @Author: Hunter
 * @Date: 2022-10-12 14:43:24
 * @LastEditTime: 2022-10-21 15:33:41
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \server-monitoring-panel\main.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const electron = require("electron");
const { initApi } = require("./src/command");
const { app, BrowserWindow } = electron;
const path = require("path");

initApi();
function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, //允许使用node
      preload: path.join(__dirname, "/src/preload"),
    },
  });
  if (app.isPackaged) {
    mainWindow.loadFile("./packages/app/dist/index.html");
  } else {
    require("electron-reload")("./", {
      electron: require(`${__dirname}/node_modules/electron`),
    });
    mainWindow.loadURL(`${"http://localhost"}:${2048}/`);
    mainWindow.webContents.openDevTools();
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
