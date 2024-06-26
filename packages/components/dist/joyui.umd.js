(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.joyui = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    name: "button",
    setup(__props) {
      defineOptions({ name: "joy-button" });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", null, "测试按钮");
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
  exports2.Button = Button;
  exports2.default = index;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
