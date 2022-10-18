const electron = require("electron");
const { mixinGlobal } = require("./utils");
const { clipboard } = electron;
mixinGlobal({
  version: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    // 能暴露的不仅仅是函数，我们还可以暴露变量
  },
  clipboard,
});
