import { q as a, fb as o, fc as p, a3 as f, a8 as d, fd as l } from "./WidgetRenderer-C4Xp1hhZ.js";
function b(t) {
  return t !== null && typeof t == "object" && "type" in t && t.type === "Map";
}
const M = ({ widget: t, store: e }) => {
  const r = t.id, s = a(
    (i) => e.subscribe(i),
    [e]
  ), c = a(() => r ? o(e.getState(), r) : null, [e, r]), n = p(s, c), u = f(() => n && b(n) ? n : t, [n, t]);
  return /* @__PURE__ */ d(l, { widget: u });
};
export {
  M as default
};
//# sourceMappingURL=InteractiveMapRenderer-CZ3udkBT.js.map
