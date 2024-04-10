import { defineComponent as o, computed as u, openBlock as s, createElementBlock as l, normalizeClass as p, unref as c, renderSlot as a } from "vue";
import "./style/index.less.mjs";
const m = o({ name: "joy-button" }), b = /* @__PURE__ */ o({
  ...m,
  props: {
    type: null
  },
  setup(e) {
    const t = e, n = u(() => ({ [`joy-button--${t.type}`]: t.type }));
    return (r, f) => (s(), l("button", {
      class: p(["joy-button", c(n)])
    }, [
      a(r.$slots, "default")
    ], 2));
  }
});
export {
  b as default
};
