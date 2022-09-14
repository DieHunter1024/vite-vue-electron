// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow } = require("electron");
const path = require("path");
require('electron-reload')(path.join(__dirname, "/dist/"), {
  electron: require(`${__dirname}/node_modules/electron`)
});
function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadFile("dist/index.html"); // 此处跟electron官网路径不同，需要注意
  mainWindow.webContents.openDevTools();
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
