import { A as m, a3 as I, y as S, a5 as f, aw as C, ax as b, a8 as r, et as v, ad as W, ac as k, af as R, ae as w, n as h, aN as A, cU as y, a9 as E, ay as P, eh as x, e0 as K, aa as O, ep as T, eq as u, es as M } from "./WidgetRenderer-C4Xp1hhZ.js";
const B = (e, t) => ({
  sendCustomAction: async (s, a, o) => {
    h("WidgetRenderer", s, a, o);
    const c = new CustomEvent("widget-action", {
      detail: s,
      bubbles: !0,
      composed: !0
      // Allow event to cross shadow DOM boundary
    });
    (e.current?.parentElement || e.current)?.dispatchEvent(c), h("WidgetRenderer", "Widget action triggered:", s), t();
  }
}), H = ({
  rootRef: e,
  componentId: t,
  activeConversationId: i = "standalone-demo",
  useKarunaWorkload: s = !1
}) => {
  const a = { current: null }, o = B(e, () => {
    a.current?.dispatch(A(!1));
  }), c = new R(), n = new k(), p = new w({ current: null }), d = {
    ...v,
    phase: { phase: "connected:active", conversationId: i },
    assistantConfig: {
      ...v.assistantConfig,
      useKarunaWorkload: s
    }
  }, l = W({
    connector: o,
    httpService: n,
    clientToolsRegistry: c,
    componentId: t,
    telemetryService: p,
    preloadedState: { session: d }
  });
  a.current = l;
  const g = {
    connector: o,
    clientToolsRegistry: c,
    httpService: n,
    storeId: l.storeId,
    telemetryService: p,
    componentId: t,
    rootRef: e,
    setRootRef: () => {
    }
  };
  return { store: l, appServices: g };
}, L = () => ({
  rootRef: { current: null },
  setRootRef: () => {
  },
  activeWidgetId: null,
  setActiveWidgetId: () => {
  }
});
function V({
  store: e,
  appServices: t,
  children: i
}) {
  return /* @__PURE__ */ r(O, { store: e, children: /* @__PURE__ */ r(E.Provider, { value: t, children: /* @__PURE__ */ r(P.Provider, { value: L(), children: /* @__PURE__ */ r(x, { children: /* @__PURE__ */ r(K, { children: i }) }) }) }) });
}
function j({
  componentId: e = "widget-renderer-standalone",
  widget: t,
  shouldAutoOpen: i = !1,
  conversationId: s,
  itemId: a,
  useKarunaWorkload: o = !1,
  linkClickSource: c = "standalone-widget"
}) {
  const n = m(null), { store: p, appServices: d } = I(
    () => H({
      rootRef: n,
      componentId: e,
      activeConversationId: s,
      useKarunaWorkload: o
    }),
    [e, s, o]
  );
  if (S(() => n.current ? f(d.storeId, n.current) : void 0, [d.storeId]), C(n, d.storeId, c), b(), !t)
    return null;
  let l = null;
  return t.type && (l = /* @__PURE__ */ r(V, { store: p, appServices: d, children: /* @__PURE__ */ r(
    y,
    {
      widget: t,
      shouldAutoOpen: i,
      itemId: a,
      forceInlineInteractiveWidgets: !0
    }
  ) })), // height: 100% allows child widgets (like Map) with height: 100% to fill the container
  /* @__PURE__ */ r("div", { ref: n, style: { height: "100%" }, children: l });
}
class q extends T {
  // Note: No constraints needed for this component - properties are independent
  static properties = {
    // Inherit base class properties (includes componentId)
    ...super.properties,
    widget: u.object(),
    shouldAutoOpen: u.boolean("shouldAutoOpen"),
    conversationId: u.string("conversationId"),
    itemId: u.string("itemId"),
    useKarunaWorkload: u.boolean("useKarunaWorkload"),
    linkClickSource: u.string("linkClickSource")
  };
  /**
   * Render the Preact WidgetRendererWebComponent
   */
  renderPreactComponent() {
    return /* @__PURE__ */ r(
      j,
      {
        componentId: this.componentId,
        widget: this.widget,
        shouldAutoOpen: this.shouldAutoOpen,
        conversationId: this.conversationId,
        itemId: this.itemId,
        useKarunaWorkload: this.useKarunaWorkload,
        linkClickSource: this.linkClickSource
      }
    );
  }
}
M(q, "chatkit-widget-renderer", {
  defaultShadowMode: "open"
});
//# sourceMappingURL=chatkit-widget-renderer.js.map
