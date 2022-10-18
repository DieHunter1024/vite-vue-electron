
const electron = require("electron");
const { contextBridge } = electron;
exports.mixinGlobal = (api) => {
  Reflect.ownKeys(api).forEach(i =>
    contextBridge.exposeInMainWorld(i, api[i])
  );
};
