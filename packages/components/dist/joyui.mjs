import { defineComponent, openBlock, createElementBlock } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "button",
  setup(__props) {
    defineOptions({ name: "joy-button" });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", null, "测试按钮");
    };
  }
});
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Button = withInstall(_sfc_main);
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button
}, Symbol.toStringTag, { value: "Module" }));
const index = {
  //install方法。这个install方法是插件的安装方法，用于在Vue应用中全局注册组件。
  install: (app) => {
    for (let c in components) {
      app.use(components[c]);
    }
  }
};
export {
  Button,
  index as default
};
