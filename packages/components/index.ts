import * as components from "./src/index";
//将一个模块中的所有导出项作为一个命名空间对象components导入
export * from "./src/index";
//将./src/index模块中的所有导出项重新导出。这意味着在使用该插件时，可以通过插件名称直接访问./src/index模块中的导出项。
import { App } from "vue";

export default {
    //install方法。这个install方法是插件的安装方法，用于在Vue应用中全局注册组件。
    install:(app: App)=> {
    for (let c in components) {
      app.use(components[c]);
    }
  },
};
