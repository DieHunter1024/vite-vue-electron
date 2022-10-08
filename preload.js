const electron = require("electron");
const { contextBridge, ipcRenderer } = electron;
console.log(electron);
contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 能暴露的不仅仅是函数，我们还可以暴露变量
});
contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer); //app模块
