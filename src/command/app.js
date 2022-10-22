const electron = require("electron");

const nameSpace = "app";
const moduleItem = electron[nameSpace];

exports[nameSpace] = {
  name: moduleItem.name,
  getAppMetrics: (...arg) => moduleItem.getAppMetrics(...arg),
  getGPUFeatureStatus: (...arg) => moduleItem.getGPUFeatureStatus(...arg),
};
