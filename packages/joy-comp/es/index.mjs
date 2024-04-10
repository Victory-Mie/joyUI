import * as t from "./src/index.mjs";
import { Button as s } from "./src/button/index.mjs";
const n = {
  //install方法。这个install方法是插件的安装方法，用于在Vue应用中全局注册组件。
  install: (o) => {
    for (let e in t)
      o.use(t[e]);
  }
};
export {
  s as Button,
  n as default
};
