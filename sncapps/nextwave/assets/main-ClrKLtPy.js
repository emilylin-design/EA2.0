import { e as fe, i as Fr, f as zo, a as Vo, b as lu, c as uu, d as Y, q as M, u as Bn, A as v, y as _, g as Et, h as N, s as Kt, j as $o, k as _a, l as qo, m as wt, n as B, r as gr, o as He, p as Uo, t as cu, v as du, w as Ae, x as bn, z as hu, B as mu, C as pu, D as Fu, H as jo, F as Yo, E as Ve, G as gu, I as Si, J as wi, K as yu, L as Zo, M as fu, N as bu, O as Cu, P as Cn, Q as ze, R as vu, S as ku, T as Qn, U as at, V as Ut, W as Au, X as Xn, Y as Su, Z as wu, _ as Eu, $ as wa, a0 as Du, a1 as Bu, a2 as Qo, a3 as ye, a4 as Tu, a5 as Mu, a6 as Ru, a7 as Xo, a8 as s, a9 as Iu, aa as Pu, ab as Tn, ac as Lu, ad as _u, ae as Nu, af as xu, ag as rt, ah as Dt, ai as da, aj as Hu, ak as Wu, al as Ou, am as Gu, an as Ku, ao as Ei, ap as Ju, aq as zu, ar as Vu, as as $u, at as qu, au as Uu, av as Mn, aw as ju, ax as Yu, ay as Zu, az as Qu, aA as Ba, aB as Xu, aC as Tr, aD as xa, aE as Ie, aF as it, aG as Ia, aH as va, aI as Di, aJ as es, aK as Rn, aL as Xe, aM as ec, aN as ac, aO as tc, aP as Ha, aQ as as, aR as Mr, aS as nc, aT as ca, aU as rc, aV as ic, aW as At, aX as oc, aY as sc, aZ as lc, a_ as uc, a$ as cc, b0 as dc, b1 as le, b2 as hc, b3 as te, b4 as he, b5 as oe, b6 as mc, b7 as pc, b8 as Rr, b9 as Ir, ba as Pr, bb as Lr, bc as nt, bd as Bi, be as Fc, bf as se, bg as ts, bh as _r, bi as gc, bj as ns, bk as jt, bl as Ti, bm as Ot, bn as kt, bo as Mi, bp as yc, bq as ka, br as Wa, bs as fc, bt as bc, bu as Nr, bv as xr, bw as ot, bx as rs, by as Cc, bz as is, bA as vc, bB as In, bC as kc, bD as os, bE as Ac, bF as Hr, bG as Sc, bH as wc, bI as Ec, bJ as Dc, bK as Bc, bL as Tc, bM as Mc, bN as ss, bO as Rc, bP as Ic, bQ as ls, bR as Pc, bS as us, bT as Lc, bU as _c, bV as Wr, bW as Nc, bX as ea, bY as vn, bZ as er, b_ as xc, b$ as cs, c0 as Hc, c1 as ds, c2 as yr, c3 as fr, c4 as ar, c5 as Wc, c6 as Oc, c7 as hs, c8 as ms, c9 as Gc, ca as Kc, cb as Or, cc as Pe, cd as Na, ce as Jc, cf as zc, cg as Vc, ch as $c, ci as qc, cj as Uc, ck as jc, cl as Yc, cm as ps, cn as Fs, co as gs, cp as Zc, cq as ys, cr as fs, cs as bs, ct as Cs, cu as Ri, cv as Ii, cw as Pi, cx as Li, cy as _i, cz as Qc, cA as Xc, cB as vs, cC as br, cD as kn, cE as ed, cF as Gr, cG as ad, cH as td, cI as nd, cJ as rd, cK as Ni, cL as id, cM as od, cN as sd, cO as ld, cP as ks, cQ as ud, cR as de, cS as Da, cT as cd, cU as dd, cV as hd, cW as md, cX as As, cY as pd, cZ as Fd, c_ as Kr, c$ as Ss, d0 as ws, d1 as gt, d2 as gd, d3 as Es, d4 as yd, d5 as xi, d6 as fd, d7 as bd, d8 as Cd, d9 as tt, da as vd, db as Ds, dc as Bs, dd as kd, de as Ad, df as An, dg as We, dh as Sd, di as wd, dj as Ed, dk as tr, dl as Dd, dm as Bd, dn as Td, dp as Md, dq as Za, dr as nr, ds as Ts, dt as Rd, du as Id, dv as Hi, dw as yn, dx as Sn, dy as Pd, dz as Ms, dA as Ld, dB as _d, dC as Rs, dD as Nd, dE as xd, dF as Wi, dG as Hd, dH as Wd, dI as Od, dJ as Gd, dK as Kd, dL as Jd, dM as zd, dN as Vd, dO as Jr, dP as $d, dQ as Is, dR as qd, dS as Ud, dT as jd, dU as Yd, dV as Zd, dW as Qd, dX as Xd, dY as eh, dZ as ah, d_ as th, d$ as nh, e0 as rh, e1 as ih, e2 as oh, e3 as sh, e4 as lh, e5 as uh, e6 as ch, e7 as dh, e8 as Oi, e9 as Gi, ea as hh, eb as mh, ec as ph, ed as Ki, ee as Fh, ef as gh, eg as yh, eh as fh, ei as bh, ej as Ch, ek as vh, el as Ji, em as kh, en as zi, eo as Ah, ep as Sh, eq as ue, er as wh, es as Eh } from "./WidgetRenderer-C4Xp1hhZ.js";
const Dh = "now-lbf-chat-client";
function Bh() {
  const e = customElements.get(Dh);
  if (e?.__lbfVersion)
    return {
      version: e.__lbfVersion,
      buildTimestamp: e.__lbfBuildTimestamp
    };
}
function Th({
  existingVersion: e,
  existingBuildTimestamp: a,
  incomingVersion: t,
  incomingBuildTimestamp: n
}) {
  if (e && e !== t)
    throw new Error(
      `[lbf-client] Multiple versions detected on the same page. Existing: ${e} (built ${a ?? "unknown"}). Refusing to load: ${t} (built ${n}). Only one version of lbf-client may load per page; remove duplicate <script> tags or align consumer package versions.`
    );
}
{
  const e = Bh();
  Th({
    existingVersion: e?.version,
    existingBuildTimestamp: e?.buildTimestamp,
    incomingVersion: "1.0.1-rc.35",
    incomingBuildTimestamp: "2026-08-06T18:45:16.853Z"
  });
}
const Mh = 3, Vi = 2;
function Rh(e) {
  return 1 - Math.pow(1 - e, Mh);
}
function Ih(e) {
  const { container: a, targetElement: t, position: n = "start", duration: r = 300 } = e;
  return new Promise((i) => {
    const o = a.getBoundingClientRect(), l = t.getBoundingClientRect();
    let u;
    if (n === "start") {
      const p = parseInt(
        getComputedStyle(a).paddingTop.replace("px", ""),
        0
      ), F = l.top - o.top;
      u = a.scrollTop + F - (isNaN(p) ? 0 : p);
    } else if (n === "center") {
      const p = l.top - o.top, F = o.height / Vi, g = l.height / Vi;
      u = a.scrollTop + p - F + g;
    } else {
      const p = l.bottom - o.bottom;
      u = a.scrollTop + p;
    }
    const d = a.scrollTop, c = u - d;
    if (Math.abs(c) < 1) {
      i();
      return;
    }
    const h = performance.now();
    function m(p) {
      const F = p - h, g = Math.min(F / r, 1), C = Rh(g);
      a.scrollTop = d + c * C, g < 1 ? requestAnimationFrame(m) : (a.scrollTop = u, i());
    }
    requestAnimationFrame(m);
  });
}
function Cr(e) {
  try {
    return new URL(e, window.location.href).href;
  } catch {
    return e;
  }
}
const Yt = 1440, La = {
  FONT: "Calibri",
  FONT_SIZE: 11,
  LINE_HEIGHT: 1.5,
  MARGINS: {
    top: Yt,
    right: Yt,
    bottom: Yt,
    left: Yt
  }
}, Ph = '[data-testid="message-controls"]', Lh = /* @__PURE__ */ new Set([
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "ul",
  "ol",
  "li",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "del",
  "a",
  "br",
  "hr",
  "code",
  "pre",
  "blockquote",
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
  "img",
  "sup",
  "sub",
  "span"
]);
function vr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Pn(e, a) {
  const t = URL.createObjectURL(e), n = document.createElement("a");
  n.href = t, n.download = a, n.click(), URL.revokeObjectURL(t);
}
function _h(e) {
  const a = [...e.attributes];
  for (const t of a)
    t.name.startsWith("data-") && t.name !== "data-badge" && e.removeAttribute(t.name);
}
function Nh(e) {
  const { source: a } = e;
  if (!Vo(a))
    return !0;
  const { entityType: t } = a;
  return !(t === "catalog_item" || t === "kg" || t === "people" || t === "agent");
}
function xh(e) {
  const { source: a } = e;
  if (lu(a) && Fr(a.url))
    return {
      url: Cr(a.url),
      title: a.title || a.url,
      badgeType: "link"
    };
  if (Vo(a)) {
    const t = a.data.url, n = a.data.title;
    if (typeof t == "string" && Fr(t))
      return {
        url: Cr(t),
        title: typeof n == "string" ? n : t,
        badgeType: "doc"
      };
  }
  return uu(a) ? { url: null, title: a.fileName, badgeType: "doc" } : null;
}
function Hh(e) {
  const a = /* @__PURE__ */ new Map();
  for (const t of zo(e)) {
    if (!Nh(t))
      continue;
    const n = xh(t), r = t.index;
    if (!n || r == null)
      continue;
    const i = a.get(r);
    i ? i.push(n) : a.set(r, [n]);
  }
  return a;
}
function Wh(e) {
  if (e.url) {
    const t = document.createElement("a");
    return t.href = e.url, t.setAttribute("data-badge", e.badgeType), t.textContent = e.title, t;
  }
  const a = document.createElement("span");
  return a.setAttribute("data-badge", e.badgeType), a.textContent = e.title, a;
}
function Ps(e, a = []) {
  const t = e.cloneNode(!0);
  if (!(t instanceof HTMLElement))
    return e.innerHTML;
  const n = Hh(a);
  t.querySelector(Ph)?.parentElement?.remove();
  for (const o of t.querySelectorAll('a[data-testid^="citation-"]')) {
    if (!(o instanceof HTMLElement))
      continue;
    const l = o.getAttribute("href");
    if (!l || !Fr(l)) {
      o.remove();
      continue;
    }
    const u = o.textContent?.trim() || o.getAttribute("aria-label") || "source", d = document.createElement("a");
    d.href = Cr(l), d.setAttribute("data-badge", "link"), d.textContent = u, o.replaceWith(d);
  }
  for (const o of t.querySelectorAll("[data-tooltip-id]")) {
    if (!(o instanceof HTMLElement))
      continue;
    const l = o.getAttribute("data-tooltip-id") ?? "", u = /-(\d+)$/.exec(l), d = u ? parseInt(u[1], 10) : NaN, c = Number.isNaN(d) ? void 0 : n.get(d);
    c && c.length > 0 ? o.replaceWith(...c.map(Wh)) : o.remove();
  }
  for (const o of t.querySelectorAll("svg"))
    o.remove();
  for (const o of t.querySelectorAll("button"))
    o.remove();
  for (const o of t.querySelectorAll("[class]"))
    o.removeAttribute("class");
  for (const o of t.querySelectorAll("[style]"))
    o.removeAttribute("style");
  for (const o of t.querySelectorAll("*"))
    o instanceof HTMLElement && _h(o);
  const i = [...t.querySelectorAll("*")].reverse();
  for (const o of i) {
    const l = o.tagName.toLowerCase();
    if (Lh.has(l))
      continue;
    const u = o.parentNode;
    if (u) {
      for (; o.firstChild; )
        u.insertBefore(o.firstChild, o);
      u.removeChild(o);
    }
  }
  return t.innerHTML;
}
const Zt = 2, rr = 12;
function Ls(e) {
  const a = /* @__PURE__ */ new Date(), t = String(a.getMonth() + 1).padStart(Zt, "0"), n = String(a.getDate()).padStart(Zt, "0");
  let r = a.getHours();
  const i = r >= rr ? "PM" : "AM";
  r = r % rr || rr;
  const o = String(a.getMinutes()).padStart(Zt, "0"), l = String(a.getSeconds()).padStart(Zt, "0");
  return `message-${`${a.getFullYear()}-${t}-${n} at ${r}.${o}.${l} ${i}`}.${e}`;
}
async function Oh({
  contentElement: e,
  annotations: a = []
}) {
  const t = Ls("pdf");
  try {
    const [{ jsPDF: n }, r] = await Promise.all([
      import("./jspdf.es.min-CJQ8q3cW.js").then((c) => c.j),
      import("./pdfRenderer-CcNhFbER.js").then((c) => c.p).then(async (c) => (await c.loadIconCache(), c))
    ]), { PDF_CONFIG: i, renderHtmlToPdf: o } = r, l = new n({
      unit: i.UNIT,
      format: i.FORMAT,
      orientation: i.ORIENTATION
    }), u = Ps(e, a);
    await o(l, u);
    const d = l.output("blob");
    Pn(d, t);
  } catch (n) {
    throw fe("Export", "Failed to generate PDF:", n), n;
  }
}
async function Gh({
  contentElement: e,
  annotations: a = []
}) {
  const t = Ls("docx");
  try {
    const { toDocx: n } = await import("./docshift-COFypDoe.js"), r = Ps(e, a), i = await n(r, {
      orientation: "portrait",
      margins: La.MARGINS,
      font: La.FONT,
      fontSize: La.FONT_SIZE,
      lineHeight: La.LINE_HEIGHT
    }), o = new Blob([i], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    });
    Pn(o, t);
  } catch (n) {
    throw fe("Export", "Failed to generate DOCX:", n), n;
  }
}
async function Kh({
  contentElement: e,
  messageId: a,
  precedingText: t
}) {
  const n = `message-${a}.pdf`;
  try {
    const [{ jsPDF: r }, i, { captureWidgetScreenshot: o }] = await Promise.all([
      import("./jspdf.es.min-CJQ8q3cW.js").then((k) => k.j),
      import("./pdfRenderer-CcNhFbER.js").then((k) => k.p).then(async (k) => (await k.loadIconCache(), k)),
      import("./widgetScreenshot-DeMEfWUd.js")
    ]), { PDF_CONFIG: l } = i, u = new r({
      unit: l.UNIT,
      format: l.FORMAT,
      orientation: l.ORIENTATION
    });
    let d;
    t ? d = await i.renderHtmlToPdf(u, `<p>${vr(t)}</p>`) : d = i.createPdfContext(u);
    const c = await o(e), h = d.contentWidth / c.displayWidth, p = (d.pageHeight - l.MARGIN - l.MARGIN) / c.displayHeight, F = Math.min(1, h, p), g = c.displayWidth * F, C = c.displayHeight * F;
    d.y + C > d.pageHeight - l.MARGIN && (u.addPage(), d.y = l.MARGIN), u.addImage(c.dataUrl, "PNG", l.MARGIN, d.y, g, C);
    const E = u.output("blob");
    Pn(E, n);
  } catch (r) {
    throw fe("Export", "Failed to generate widget PDF:", r), r;
  }
}
async function Jh({
  contentElement: e,
  messageId: a,
  precedingText: t
}) {
  const n = `message-${a}.docx`;
  try {
    const [{ toDocx: r }, { captureWidgetScreenshot: i }] = await Promise.all([
      import("./docshift-COFypDoe.js"),
      import("./widgetScreenshot-DeMEfWUd.js")
    ]), o = await i(e), l = t ? `<p>${vr(t)}</p>` : "", u = `<p><img src="${vr(o.dataUrl)}" width="${o.displayWidth}" height="${o.displayHeight}" /></p>`, d = l + u, c = await r(d, {
      orientation: "portrait",
      margins: La.MARGINS,
      font: La.FONT,
      fontSize: La.FONT_SIZE,
      lineHeight: La.LINE_HEIGHT
    }), h = new Blob([c], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    });
    Pn(h, n);
  } catch (r) {
    throw fe("Export", "Failed to generate widget DOCX:", r), r;
  }
}
function zh(e, a) {
  const [t, n] = Y(() => e.current ? e.current.offsetWidth <= a : !1), r = M(
    (i) => {
      const o = i[0]?.contentBoxSize?.[0]?.inlineSize;
      if (o !== void 0) {
        n(o <= a);
        return;
      }
      e.current && n(e.current.offsetWidth <= a);
    },
    [e, a]
  );
  return Bn(e, r), t;
}
function zr({
  intervalMs: e,
  fire: a,
  shouldFire: t,
  resetKey: n
}) {
  const r = v(a);
  r.current = a;
  const i = v(t);
  i.current = t;
  const o = v(e);
  o.current = e;
  const l = v(null), u = M(() => {
    l.current && (clearTimeout(l.current), l.current = null);
    const d = typeof o.current == "function" ? o.current() : o.current;
    l.current = setTimeout(() => {
      try {
        const c = i.current;
        if (c && !c())
          return;
        r.current();
      } finally {
        u();
      }
    }, d);
  }, []);
  _(() => (u(), () => {
    l.current && (clearTimeout(l.current), l.current = null);
  }), [u, n]);
}
const Vh = 1e3 * 5, $h = 1e3 * 20;
function qh(e) {
  const a = Et(), t = N(Kt), n = N($o), r = v(t);
  r.current = t;
  const i = _a(e), o = v(i);
  o.current = i;
  const l = qo(e), u = v(l);
  u.current = l;
  const d = JSON.stringify(n ?? null), c = v(!1), h = v(null), m = M(() => {
    gr({ storeId: a.storeId, dispatch: a.dispatch });
  }, [a]), p = M(() => r.current === "connected" && !o.current && !u.current && !document.hidden, []), F = wt(() => {
    p() && (B("ConversationSync:list", "refreshing after page context change", {
      at: (/* @__PURE__ */ new Date()).toISOString()
    }), m());
  }, Vh);
  _(() => {
    if (!c.current) {
      c.current = !0, h.current = d;
      return;
    }
    const C = h.current === JSON.stringify(null);
    h.current = d, !C && F();
  }, [d, F]), _(() => {
    const C = () => {
      p() && (B("ConversationSync:list", "refreshing after tab became visible", {
        at: (/* @__PURE__ */ new Date()).toISOString()
      }), m());
    };
    return document.addEventListener("visibilitychange", C), () => document.removeEventListener("visibilitychange", C);
  }, [m, p]);
  const g = v(i);
  _(() => {
    const C = g.current;
    g.current = i, !(!C || i || r.current !== "connected") && (B("ConversationSync:list", "refreshing after panel opened", {
      at: (/* @__PURE__ */ new Date()).toISOString()
    }), m());
  }, [i, m]), zr({
    intervalMs: $h,
    fire: () => {
      B("ConversationSync:list", "safety-net refresh", {
        at: (/* @__PURE__ */ new Date()).toISOString()
      }), m();
    },
    shouldFire: p
  });
}
function _s() {
  const e = v(!document.hidden);
  return _(() => {
    const a = () => {
      e.current = !document.hidden;
    };
    return document.addEventListener("visibilitychange", a), () => document.removeEventListener("visibilitychange", a);
  }, []), e;
}
const Uh = 31e3, $i = 3e3, jh = 9e5, Yh = 3e4;
function Zh(e) {
  const { serverLastItemId: a, clientLastItemId: t, fqsn: n, sessionClusterFqsn: r } = e;
  return !a || a !== t || (!n || n !== r);
}
function Qh({
  activeConversationId: e,
  isAgentResponding: a,
  conversationStatus: t,
  mode: n,
  isLiveAgentActive: r = !1,
  reduceItemsListPolling: i = !1
}) {
  const o = He(), l = Et(), u = _s(), d = v(i);
  d.current = i;
  const c = v(e);
  c.current = e;
  const h = v(r);
  h.current = r;
  const m = _a(n), p = v(m);
  p.current = m;
  const F = qo(n), g = v(F);
  g.current = F;
  const C = v(r ? Date.now() : null), E = v(
    r ? e : null
  ), k = v(null), I = v(t);
  I.current = t;
  const f = v(a);
  f.current = a, _(() => {
    if (r)
      C.current = Date.now(), E.current = e, k.current = null;
    else {
      const R = E.current === c.current;
      C.current !== null && R && (k.current = Date.now()), C.current = null, E.current = null;
    }
  }, [r, e]);
  const b = M(() => {
    const R = C.current, y = R !== null && Date.now() - R >= jh, T = k.current, x = T !== null && Date.now() - T < Yh;
    return h.current && !y || x ? $i : Uh;
  }, []), S = M(
    (R, y) => {
      if (!d.current || y === $i)
        return !1;
      const T = l.getState();
      if (Kt(T) !== "connected")
        return !1;
      const x = Uo(T), w = x?.lastItemId, A = cu(T), W = x?.fqsn, P = du(T);
      return Zh({
        serverLastItemId: w,
        clientLastItemId: A,
        fqsn: W,
        sessionClusterFqsn: P
      }) ? !1 : (Ae("ConversationSync:items", "reduced polling: client current, skipping fetch", {
        at: (/* @__PURE__ */ new Date()).toISOString(),
        conversationId: R,
        serverLastItemId: w,
        clientLastItemId: A,
        fqsn: W,
        sessionClusterFqsn: P
      }), !0);
    },
    [l]
  ), D = M(() => {
    try {
      const R = c.current;
      if (!R)
        return;
      const y = b();
      if (S(R, y))
        return;
      B("ConversationSync:items", "dispatching sync", {
        at: (/* @__PURE__ */ new Date()).toISOString(),
        conversationId: R,
        intervalMs: y,
        reducedPolling: d.current
      }), o(bn(R));
    } catch (R) {
      fe("ConversationSync:items", "Error during poll tick:", R);
    }
  }, [o, b, S]), L = M(() => {
    const R = !!u.current && !p.current && !g.current && !!c.current && I.current !== "creating" && !f.current;
    return R || Ae("ConversationSync:items", "poll tick skipped", {
      at: (/* @__PURE__ */ new Date()).toISOString(),
      isVisible: u.current,
      isHero: p.current,
      isFollower: g.current,
      hasConversationId: !!c.current,
      conversationStatus: I.current,
      isAgentResponding: f.current
    }), R;
  }, [u]);
  zr({
    intervalMs: b,
    fire: D,
    shouldFire: L,
    // Reset the in-flight timer when live-agent state or the active
    // conversation changes so the new interval takes effect on the next
    // tick instead of waiting for the current (possibly 31s) one.
    resetKey: `${r}|${e ?? ""}`
  });
}
function Xh(e) {
  const [a, t] = Y(!1), n = wt(() => {
    t(!!e.current?.contains(hu()));
  }, 0);
  return _(() => {
    const r = e.current;
    if (!r)
      return;
    const i = () => {
      n.cancel(), t(!0);
    }, o = () => {
      n();
    };
    return r.addEventListener("focusin", i), r.addEventListener("focusout", o), () => {
      n.cancel(), r.removeEventListener("focusin", i), r.removeEventListener("focusout", o);
    };
  }, [e]), a;
}
function em(e, a) {
  const { dispatch: t, getState: n } = a, { storeId: r } = a, i = (h) => {
    B("ConnectorBridge", "dispatching event to store:", r.description, {
      eventType: "type" in h ? h.type : "unknown",
      itemsInStore: n().conversation.items.length
    }), Fu({ event: h, dispatch: t, getState: n, storeId: r });
  }, o = 401, l = (h) => {
    fe("ConnectorBridge", "ChatKit connector error:", h), (h instanceof jo || h instanceof Yo) && h.status === o && (Ve("ConnectorBridge", "Auth failure (401) on chatkit request, disconnecting"), t(gu())), Si(t, wi.STREAM_DONE), t(yu());
  }, u = () => {
    B("ConnectorBridge", "Stream completed"), t(Zo()), Si(t, wi.STREAM_DONE), t(fu());
  }, d = (h) => {
    h.podAffinity && t(bu(h.podAffinity)), h.clusterAffinity && t(Cu(h.clusterAffinity));
  };
  e.on("event", i), e.on("error", l), e.on("done", u), e.on("affinityUpdate", d);
  let c = "";
  try {
    c = mu({ suppressMissingUrlLog: !0 }).backendUrl;
  } catch (h) {
    if (!(h instanceof pu))
      throw h;
    B(
      "ConnectorBridge",
      "backendUrl not resolvable at connector init (AIEL session_info pending); resolving lazily per-request once window.NOW.nextwaveUri is set"
    );
  }
  return e.initialize({ instanceUrl: c }), () => {
    e.off("event", i), e.off("error", l), e.off("done", u), e.off("affinityUpdate", d);
  };
}
const kr = (e) => ({
  webSearch: {
    enabled: e?.includes(Cn.INCLUDE_WEB) ?? !1
  }
});
var am = [{ name: "Aegean Airlines", iataCode: "A3" }, { name: "Aeroflot", iataCode: "SU" }, { name: "Aerolineas Argentinas", iataCode: "AR" }, { name: "Aeromexico", iataCode: "AM" }, { name: "Air Algerie", iataCode: "AH" }, { name: "Air Arabia", iataCode: "G9" }, { name: "Air Canada", iataCode: "AC" }, { name: "Air China", iataCode: "CA" }, { name: "Air Europa", iataCode: "UX" }, { name: "Air France", iataCode: "AF" }, { name: "Air India", iataCode: "AI" }, { name: "Air Mauritius", iataCode: "MK" }, { name: "Air New Zealand", iataCode: "NZ" }, { name: "Air Niugini", iataCode: "PX" }, { name: "Air Tahiti", iataCode: "VT" }, { name: "Air Tahiti Nui", iataCode: "TN" }, { name: "Air Transat", iataCode: "TS" }, { name: "AirAsia X", iataCode: "D7" }, { name: "AirAsia", iataCode: "AK" }, { name: "Aircalin", iataCode: "SB" }, { name: "Alaska Airlines", iataCode: "AS" }, { name: "Alitalia", iataCode: "AZ" }, { name: "All Nippon Airways", iataCode: "NH" }, { name: "Allegiant Air", iataCode: "G4" }, { name: "American Airlines", iataCode: "AA" }, { name: "Asiana Airlines", iataCode: "OZ" }, { name: "Avianca", iataCode: "AV" }, { name: "Azul Linhas Aereas Brasileiras", iataCode: "AD" }, { name: "Azur Air", iataCode: "ZF" }, { name: "Beijing Capital Airlines", iataCode: "JD" }, { name: "Boliviana de Aviacion", iataCode: "OB" }, { name: "British Airways", iataCode: "BA" }, { name: "Cathay Pacific", iataCode: "CX" }, { name: "Cebu Pacific Air", iataCode: "5J" }, { name: "China Airlines", iataCode: "CI" }, { name: "China Eastern Airlines", iataCode: "MU" }, { name: "China Southern Airlines", iataCode: "CZ" }, { name: "Condor", iataCode: "DE" }, { name: "Copa Airlines", iataCode: "CM" }, { name: "Delta Air Lines", iataCode: "DL" }, { name: "Easyfly", iataCode: "VE" }, { name: "EasyJet", iataCode: "U2" }, { name: "EcoJet", iataCode: "8J" }, { name: "Egyptair", iataCode: "MS" }, { name: "El Al", iataCode: "LY" }, { name: "Emirates Airlines", iataCode: "EK" }, { name: "Ethiopian Airlines", iataCode: "ET" }, { name: "Etihad Airways", iataCode: "EY" }, { name: "EVA Air", iataCode: "BR" }, { name: "Fiji Airways", iataCode: "FJ" }, { name: "Finnair", iataCode: "AY" }, { name: "Flybondi", iataCode: "FO" }, { name: "Flydubai", iataCode: "FZ" }, { name: "FlySafair", iataCode: "FA" }, { name: "Frontier Airlines", iataCode: "F9" }, { name: "Garuda Indonesia", iataCode: "GA" }, { name: "Go First", iataCode: "G8" }, { name: "Gol Linhas Aereas Inteligentes", iataCode: "G3" }, { name: "Hainan Airlines", iataCode: "HU" }, { name: "Hawaiian Airlines", iataCode: "HA" }, { name: "IndiGo Airlines", iataCode: "6E" }, { name: "Japan Airlines", iataCode: "JL" }, { name: "Jeju Air", iataCode: "7C" }, { name: "Jet2", iataCode: "LS" }, { name: "JetBlue Airways", iataCode: "B6" }, { name: "JetSMART", iataCode: "JA" }, { name: "Juneyao Airlines", iataCode: "HO" }, { name: "Kenya Airways", iataCode: "KQ" }, { name: "KLM Royal Dutch Airlines", iataCode: "KL" }, { name: "Korean Air", iataCode: "KE" }, { name: "Kulula.com", iataCode: "MN" }, { name: "LATAM Airlines", iataCode: "LA" }, { name: "Lion Air", iataCode: "JT" }, { name: "LOT Polish Airlines", iataCode: "LO" }, { name: "Lufthansa", iataCode: "LH" }, { name: "Libyan Airlines", iataCode: "LN" }, { name: "Linea Aerea Amaszonas", iataCode: "Z8" }, { name: "Malaysia Airlines", iataCode: "MH" }, { name: "Nordwind Airlines", iataCode: "N4" }, { name: "Norwegian Air Shuttle", iataCode: "DY" }, { name: "Oman Air", iataCode: "WY" }, { name: "Pakistan International Airlines", iataCode: "PK" }, { name: "Pegasus Airlines", iataCode: "PC" }, { name: "Philippine Airlines", iataCode: "PR" }, { name: "Qantas Group", iataCode: "QF" }, { name: "Qatar Airways", iataCode: "QR" }, { name: "Republic Airways", iataCode: "YX" }, { name: "Royal Air Maroc", iataCode: "AT" }, { name: "Ryanair", iataCode: "FR" }, { name: "S7 Airlines", iataCode: "S7" }, { name: "SAS", iataCode: "SK" }, { name: "Satena", iataCode: "9R" }, { name: "Saudia", iataCode: "SV" }, { name: "Shandong Airlines", iataCode: "SC" }, { name: "Sichuan Airlines", iataCode: "3U" }, { name: "Singapore Airlines", iataCode: "SQ" }, { name: "Sky Airline", iataCode: "H2" }, { name: "SkyWest Airlines", iataCode: "OO" }, { name: "South African Airways", iataCode: "SA" }, { name: "Southwest Airlines", iataCode: "WN" }, { name: "SpiceJet", iataCode: "SG" }, { name: "Spirit Airlines", iataCode: "NK" }, { name: "Spring Airlines", iataCode: "9C" }, { name: "SriLankan Airlines", iataCode: "UL" }, { name: "Star Peru", iataCode: "2I" }, { name: "Sun Country Airlines", iataCode: "SY" }, { name: "SunExpress", iataCode: "XQ" }, { name: "TAP Air Portugal", iataCode: "TP" }, { name: "Thai AirAsia", iataCode: "FD" }, { name: "Thai Airways", iataCode: "TG" }, { name: "TUI Airways", iataCode: "BY" }, { name: "Tunisair", iataCode: "TU" }, { name: "Turkish Airlines", iataCode: "TK" }, { name: "Ukraine International", iataCode: "PS" }, { name: "United Airlines", iataCode: "UA" }, { name: "Ural Airlines", iataCode: "U6" }, { name: "VietJet Air", iataCode: "VJ" }, { name: "Vietnam Airlines", iataCode: "VN" }, { name: "Virgin Atlantic Airways", iataCode: "VS" }, { name: "Virgin Australia", iataCode: "VA" }, { name: "VivaAerobus", iataCode: "VB" }, { name: "VOEPASS Linhas Aereas", iataCode: "2Z" }, { name: "Volaris", iataCode: "Y4" }, { name: "WestJet", iataCode: "WS" }, { name: "Wingo", iataCode: "P5" }, { name: "Wizz Air", iataCode: "W6" }], tm = [{ name: "Aerospatiale/BAC Concorde", iataTypeCode: "SSC" }, { name: "Airbus A300", iataTypeCode: "AB3" }, { name: "Airbus A310", iataTypeCode: "310" }, { name: "Airbus A310-200", iataTypeCode: "312" }, { name: "Airbus A310-300", iataTypeCode: "313" }, { name: "Airbus A318", iataTypeCode: "318" }, { name: "Airbus A319", iataTypeCode: "319" }, { name: "Airbus A319neo", iataTypeCode: "31N" }, { name: "Airbus A320", iataTypeCode: "320" }, { name: "Airbus A320neo", iataTypeCode: "32N" }, { name: "Airbus A321", iataTypeCode: "321" }, { name: "Airbus A321neo", iataTypeCode: "32Q" }, { name: "Airbus A330", iataTypeCode: "330" }, { name: "Airbus A330-200", iataTypeCode: "332" }, { name: "Airbus A330-300", iataTypeCode: "333" }, { name: "Airbus A330-800neo", iataTypeCode: "338" }, { name: "Airbus A330-900neo", iataTypeCode: "339" }, { name: "Airbus A340", iataTypeCode: "340" }, { name: "Airbus A340-200", iataTypeCode: "342" }, { name: "Airbus A340-300", iataTypeCode: "343" }, { name: "Airbus A340-500", iataTypeCode: "345" }, { name: "Airbus A340-600", iataTypeCode: "346" }, { name: "Airbus A350", iataTypeCode: "350" }, { name: "Airbus A350-900", iataTypeCode: "359" }, { name: "Airbus A350-1000", iataTypeCode: "351" }, { name: "Airbus A380", iataTypeCode: "380" }, { name: "Airbus A380-800", iataTypeCode: "388" }, { name: "Antonov An-12", iataTypeCode: "ANF" }, { name: "Antonov An-24", iataTypeCode: "AN4" }, { name: "Antonov An-26", iataTypeCode: "A26" }, { name: "Antonov An-28", iataTypeCode: "A28" }, { name: "Antonov An-30", iataTypeCode: "A30" }, { name: "Antonov An-32", iataTypeCode: "A32" }, { name: "Antonov An-72", iataTypeCode: "AN7" }, { name: "Antonov An-124 Ruslan", iataTypeCode: "A4F" }, { name: "Antonov An-140", iataTypeCode: "A40" }, { name: "Antonov An-148", iataTypeCode: "A81" }, { name: "Antonov An-158", iataTypeCode: "A58" }, { name: "Antonov An-225 Mriya", iataTypeCode: "A5F" }, { name: "Boeing 707", iataTypeCode: "703" }, { name: "Boeing 717", iataTypeCode: "717" }, { name: "Boeing 720B", iataTypeCode: "B72" }, { name: "Boeing 727", iataTypeCode: "727" }, { name: "Boeing 727-100", iataTypeCode: "721" }, { name: "Boeing 727-200", iataTypeCode: "722" }, { name: "Boeing 737 MAX 7", iataTypeCode: "7M7" }, { name: "Boeing 737 MAX 8", iataTypeCode: "7M8" }, { name: "Boeing 737 MAX 9", iataTypeCode: "7M9" }, { name: "Boeing 737 MAX 10", iataTypeCode: "7MJ" }, { name: "Boeing 737", iataTypeCode: "737" }, { name: "Boeing 737-100", iataTypeCode: "731" }, { name: "Boeing 737-200", iataTypeCode: "732" }, { name: "Boeing 737-300", iataTypeCode: "733" }, { name: "Boeing 737-400", iataTypeCode: "734" }, { name: "Boeing 737-500", iataTypeCode: "735" }, { name: "Boeing 737-600", iataTypeCode: "736" }, { name: "Boeing 737-700", iataTypeCode: "73G" }, { name: "Boeing 737-800", iataTypeCode: "738" }, { name: "Boeing 737-900", iataTypeCode: "739" }, { name: "Boeing 747", iataTypeCode: "747" }, { name: "Boeing 747-100", iataTypeCode: "741" }, { name: "Boeing 747-200", iataTypeCode: "742" }, { name: "Boeing 747-300", iataTypeCode: "743" }, { name: "Boeing 747-400", iataTypeCode: "744" }, { name: "Boeing 747-400D", iataTypeCode: "74J" }, { name: "Boeing 747-8", iataTypeCode: "748" }, { name: "Boeing 747SP", iataTypeCode: "74L" }, { name: "Boeing 747SR", iataTypeCode: "74R" }, { name: "Boeing 757", iataTypeCode: "757" }, { name: "Boeing 757-200", iataTypeCode: "752" }, { name: "Boeing 757-300", iataTypeCode: "753" }, { name: "Boeing 767", iataTypeCode: "767" }, { name: "Boeing 767-200", iataTypeCode: "762" }, { name: "Boeing 767-300", iataTypeCode: "763" }, { name: "Boeing 767-400", iataTypeCode: "764" }, { name: "Boeing 777", iataTypeCode: "777" }, { name: "Boeing 777-200", iataTypeCode: "772" }, { name: "Boeing 777-200LR", iataTypeCode: "77L" }, { name: "Boeing 777-300", iataTypeCode: "773" }, { name: "Boeing 777-300ER", iataTypeCode: "77W" }, { name: "Boeing 787", iataTypeCode: "787" }, { name: "Boeing 787-8", iataTypeCode: "788" }, { name: "Boeing 787-9", iataTypeCode: "789" }, { name: "Boeing 787-10", iataTypeCode: "781" }, { name: "Canadair Challenger", iataTypeCode: "CCJ" }, { name: "Canadair CL-44", iataTypeCode: "CL4" }, { name: "Canadair Regional Jet 100", iataTypeCode: "CR1" }, { name: "Canadair Regional Jet 200", iataTypeCode: "CR2" }, { name: "Canadair Regional Jet 700", iataTypeCode: "CR7" }, { name: "Canadair Regional Jet 705", iataTypeCode: "CRA" }, { name: "Canadair Regional Jet 900", iataTypeCode: "CR9" }, { name: "Canadair Regional Jet 1000", iataTypeCode: "CRK" }, { name: "De Havilland Canada DHC-2 Beaver", iataTypeCode: "DHP" }, { name: "De Havilland Canada DHC-2 Turbo-Beaver", iataTypeCode: "DHR" }, { name: "De Havilland Canada DHC-3 Otter", iataTypeCode: "DHL" }, { name: "De Havilland Canada DHC-4 Caribou", iataTypeCode: "DHC" }, { name: "De Havilland Canada DHC-6 Twin Otter", iataTypeCode: "DHT" }, { name: "De Havilland Canada DHC-7 Dash 7", iataTypeCode: "DH7" }, { name: "De Havilland Canada DHC-8-100 Dash 8 / 8Q", iataTypeCode: "DH1" }, { name: "De Havilland Canada DHC-8-200 Dash 8 / 8Q", iataTypeCode: "DH2" }, { name: "De Havilland Canada DHC-8-300 Dash 8 / 8Q", iataTypeCode: "DH3" }, { name: "De Havilland Canada DHC-8-400 Dash 8Q", iataTypeCode: "DH4" }, { name: "De Havilland DH.104 Dove", iataTypeCode: "DHD" }, { name: "De Havilland DH.114 Heron", iataTypeCode: "DHH" }, { name: "Douglas DC-3", iataTypeCode: "D3F" }, { name: "Douglas DC-6", iataTypeCode: "D6F" }, { name: "Douglas DC-8-50", iataTypeCode: "D8T" }, { name: "Douglas DC-8-62", iataTypeCode: "D8L" }, { name: "Douglas DC-8-72", iataTypeCode: "D8Q" }, { name: "Douglas DC-9-10", iataTypeCode: "D91" }, { name: "Douglas DC-9-20", iataTypeCode: "D92" }, { name: "Douglas DC-9-30", iataTypeCode: "D93" }, { name: "Douglas DC-9-40", iataTypeCode: "D94" }, { name: "Douglas DC-9-50", iataTypeCode: "D95" }, { name: "Douglas DC-10", iataTypeCode: "D10" }, { name: "Douglas DC-10-10", iataTypeCode: "D1X" }, { name: "Douglas DC-10-30", iataTypeCode: "D1Y" }, { name: "Embraer 170", iataTypeCode: "E70" }, { name: "Embraer 175", iataTypeCode: "E75" }, { name: "Embraer 190", iataTypeCode: "E90" }, { name: "Embraer 195", iataTypeCode: "E95" }, { name: "Embraer E190-E2", iataTypeCode: "290" }, { name: "Embraer E195-E2", iataTypeCode: "295" }, { name: "Embraer EMB.110 Bandeirante", iataTypeCode: "EMB" }, { name: "Embraer EMB.120 Brasilia", iataTypeCode: "EM2" }, { name: "Embraer Legacy 600", iataTypeCode: "ER3" }, { name: "Embraer Phenom 100", iataTypeCode: "EP1" }, { name: "Embraer Phenom 300", iataTypeCode: "EP3" }, { name: "Embraer RJ135", iataTypeCode: "ER3" }, { name: "Embraer RJ140", iataTypeCode: "ERD" }, { name: "Embraer RJ145 Amazon", iataTypeCode: "ER4" }, { name: "Ilyushin IL18", iataTypeCode: "IL8" }, { name: "Ilyushin IL62", iataTypeCode: "IL6" }, { name: "Ilyushin IL76", iataTypeCode: "IL7" }, { name: "Ilyushin IL86", iataTypeCode: "ILW" }, { name: "Ilyushin IL96-300", iataTypeCode: "I93" }, { name: "Ilyushin IL114", iataTypeCode: "I14" }, { name: "Lockheed L-182 / 282 / 382 (L-100) Hercules", iataTypeCode: "LOH" }, { name: "Lockheed L-188 Electra", iataTypeCode: "LOE" }, { name: "Lockheed L-1011 Tristar", iataTypeCode: "L10" }, { name: "Lockheed L-1049 Super Constellation", iataTypeCode: "L49" }, { name: "McDonnell Douglas MD11", iataTypeCode: "M11" }, { name: "McDonnell Douglas MD80", iataTypeCode: "M80" }, { name: "McDonnell Douglas MD81", iataTypeCode: "M81" }, { name: "McDonnell Douglas MD82", iataTypeCode: "M82" }, { name: "McDonnell Douglas MD83", iataTypeCode: "M83" }, { name: "McDonnell Douglas MD87", iataTypeCode: "M87" }, { name: "McDonnell Douglas MD88", iataTypeCode: "M88" }, { name: "McDonnell Douglas MD90", iataTypeCode: "M90" }, { name: "Sukhoi Superjet 100-95", iataTypeCode: "SU9" }, { name: "Tupolev Tu-134", iataTypeCode: "TU3" }, { name: "Tupolev Tu-154", iataTypeCode: "TU5" }, { name: "Tupolev Tu-204", iataTypeCode: "T20" }, { name: "Yakovlev Yak-40", iataTypeCode: "YK4" }, { name: "Yakovlev Yak-42", iataTypeCode: "YK2" }], nm = [{ name: "Adelaide International Airport", iataCode: "ADL" }, { name: "Adolfo Suarez Madrid-Barajas Airport", iataCode: "MAD" }, { name: "Aeroparque Jorge Newbery Airport", iataCode: "AEP" }, { name: "Afonso Pena International Airport", iataCode: "CWB" }, { name: "Alfonso Bonilla Aragon International Airport", iataCode: "CLO" }, { name: "Amsterdam Airport Schiphol", iataCode: "AMS" }, { name: "Arturo Merino Benitez International Airport", iataCode: "SCL" }, { name: "Auckland International Airport", iataCode: "AKL" }, { name: "Beijing Capital International Airport", iataCode: "PEK" }, { name: "Belem Val de Cans International Airport", iataCode: "BEL" }, { name: "Belo Horizonte Tancredo Neves International Airport", iataCode: "CNF" }, { name: "Berlin-Tegel Airport", iataCode: "TXL" }, { name: "Bole International Airport", iataCode: "ADD" }, { name: "Brasilia-Presidente Juscelino Kubitschek International Airport", iataCode: "BSB" }, { name: "Brisbane International Airport", iataCode: "BNE" }, { name: "Brussels Airport", iataCode: "BRU" }, { name: "Cairns Airport", iataCode: "CNS" }, { name: "Cairo International Airport", iataCode: "CAI" }, { name: "Canberra Airport", iataCode: "CBR" }, { name: "Capetown International Airport", iataCode: "CPT" }, { name: "Charles de Gaulle International Airport", iataCode: "CDG" }, { name: "Charlotte Douglas International Airport", iataCode: "CLT" }, { name: "Chengdu Shuangliu International Airport", iataCode: "CTU" }, { name: "Chhatrapati Shivaji International Airport", iataCode: "BOM" }, { name: "Chicago O'Hare International Airport", iataCode: "ORD" }, { name: "Chongqing Jiangbei International Airport", iataCode: "CKG" }, { name: "Christchurch International Airport", iataCode: "CHC" }, { name: "Copenhagen Kastrup Airport", iataCode: "CPH" }, { name: "Dallas Fort Worth International Airport", iataCode: "DFW" }, { name: "Daniel K. Inouye International Airport", iataCode: "HNL" }, { name: "Denver International Airport", iataCode: "DEN" }, { name: "Don Mueang International Airport", iataCode: "DMK" }, { name: "Dubai International Airport", iataCode: "DXB" }, { name: "Dublin Airport", iataCode: "DUB" }, { name: "Dusseldorf Airport", iataCode: "DUS" }, { name: "El Dorado International Airport", iataCode: "BOG" }, { name: "Eleftherios Venizelos International Airport", iataCode: "ATH" }, { name: "Faa'a International Airport", iataCode: "PPT" }, { name: "Fort Lauderdale Hollywood International Airport", iataCode: "FLL" }, { name: "Fortaleza Pinto Martins International Airport", iataCode: "FOR" }, { name: "Frankfurt am Main Airport", iataCode: "FRA" }, { name: "George Bush Intercontinental Houston Airport", iataCode: "IAH" }, { name: "Gold Coast Airport", iataCode: "OOL" }, { name: "Guarulhos - Governador Andre Franco Montoro International Airport", iataCode: "GRU" }, { name: "Hartsfield-Jackson Atlanta International Airport", iataCode: "ATL" }, { name: "Helsinki Vantaa Airport", iataCode: "HEL" }, { name: "Hobart International Airport", iataCode: "HBA" }, { name: "Hong Kong International Airport", iataCode: "HKG" }, { name: "Houari Boumediene Airport", iataCode: "ALG" }, { name: "Hurgada International Airport", iataCode: "HRG" }, { name: "Incheon International Airport", iataCode: "ICN" }, { name: "Indira Gandhi International Airport", iataCode: "DEL" }, { name: "Istanbul Airport", iataCode: "IST" }, { name: "Jacksons International Airport", iataCode: "POM" }, { name: "Jeju International Airport", iataCode: "CJU" }, { name: "John F Kennedy International Airport", iataCode: "JFK" }, { name: "Jorge Chavez International Airport", iataCode: "LIM" }, { name: "Jose Maria Cordova International Airport", iataCode: "MDE" }, { name: "Josep Tarradellas Barcelona-El Prat Airport", iataCode: "BCN" }, { name: "Kahului Airport", iataCode: "OGG" }, { name: "King Abdulaziz International Airport", iataCode: "JED" }, { name: "Kuala Lumpur International Airport", iataCode: "KUL" }, { name: "Kunming Changshui International Airport", iataCode: "KMG" }, { name: "La Tontouta International Airport", iataCode: "NOU" }, { name: "Leonardo da Vinci-Fiumicino Airport", iataCode: "FCO" }, { name: "London Heathrow Airport", iataCode: "LHR" }, { name: "Los Angeles International Airport", iataCode: "LAX" }, { name: "McCarran International Airport", iataCode: "LAS" }, { name: "Melbourne International Airport", iataCode: "MEL" }, { name: "Mexico City International Airport", iataCode: "MEX" }, { name: "Miami International Airport", iataCode: "MIA" }, { name: "Ministro Pistarini International Airport", iataCode: "EZE" }, { name: "Minneapolis-St Paul International/Wold-Chamberlain Airport", iataCode: "MSP" }, { name: "Mohammed V International Airport", iataCode: "CMN" }, { name: "Moscow Domodedovo Airport", iataCode: "DME" }, { name: "Munich Airport", iataCode: "MUC" }, { name: "Murtala Muhammed International Airport", iataCode: "LOS" }, { name: "Nadi International Airport", iataCode: "NAN" }, { name: "Nairobi Jomo Kenyatta International Airport", iataCode: "NBO" }, { name: "Narita International Airport", iataCode: "NRT" }, { name: "Newark Liberty International Airport", iataCode: "EWR" }, { name: "Ninoy Aquino International Airport", iataCode: "MNL" }, { name: "Noumea Magenta Airport", iataCode: "GEA" }, { name: "O. R. Tambo International Airport", iataCode: "JNB" }, { name: "Orlando International Airport", iataCode: "MCO" }, { name: "Oslo Lufthavn", iataCode: "OSL" }, { name: "Perth Airport", iataCode: "PER" }, { name: "Phoenix Sky Harbor International Airport", iataCode: "PHX" }, { name: "Recife Guararapes-Gilberto Freyre International Airport", iataCode: "REC" }, { name: "Rio de Janeiro Galeao International Airport", iataCode: "GIG" }, { name: "Salgado Filho International Airport", iataCode: "POA" }, { name: "Salvador Deputado Luis Eduardo Magalhaes International Airport", iataCode: "SSA" }, { name: "San Francisco International Airport", iataCode: "SFO" }, { name: "Santos Dumont Airport", iataCode: "SDU" }, { name: "Sao Paulo-Congonhas Airport", iataCode: "CGH" }, { name: "Seattle Tacoma International Airport", iataCode: "SEA" }, { name: "Shanghai Hongqiao International Airport", iataCode: "SHA" }, { name: "Shanghai Pudong International Airport", iataCode: "PVG" }, { name: "Shenzhen Bao'an International Airport", iataCode: "SZX" }, { name: "Sheremetyevo International Airport", iataCode: "SVO" }, { name: "Singapore Changi Airport", iataCode: "SIN" }, { name: "Soekarno-Hatta International Airport", iataCode: "CGK" }, { name: 'Stockholm-Arlanda Airport"', iataCode: "ARN" }, { name: "Suvarnabhumi Airport", iataCode: "BKK" }, { name: "Sydney Kingsford Smith International Airport", iataCode: "SYD" }, { name: "Taiwan Taoyuan International Airport", iataCode: "TPE" }, { name: "Tan Son Nhat International Airport", iataCode: "SGN" }, { name: "Tokyo Haneda International Airport", iataCode: "HND" }, { name: "Toronto Pearson International Airport", iataCode: "YYZ" }, { name: "Tunis Carthage International Airport", iataCode: "TUN" }, { name: "Vancouver International Airport", iataCode: "YVR" }, { name: "Vienna International Airport", iataCode: "VIE" }, { name: "Viracopos International Airport", iataCode: "VCP" }, { name: "Vnukovo International Airport", iataCode: "VKO" }, { name: "Wellington International Airport", iataCode: "WLG" }, { name: "Xi'an Xianyang International Airport", iataCode: "XIY" }, { name: "Zhukovsky International Airport", iataCode: "ZIA" }, { name: "Zurich Airport", iataCode: "ZRH" }], rm = { airline: am, airplane: tm, airport: nm }, im = rm, om = ["American black bear", "Asian black bear", "Brown bear", "Giant panda", "Polar bear", "Sloth bear", "Spectacled bear", "Sun bear"], sm = ["Abert's Towhee", "Acadian Flycatcher", "Acorn Woodpecker", "Alder Flycatcher", "Aleutian Tern", "Allen's Hummingbird", "Altamira Oriole", "American Avocet", "American Bittern", "American Black Duck", "American Coot", "American Crow", "American Dipper", "American Golden-Plover", "American Goldfinch", "American Kestrel", "American Oystercatcher", "American Pipit", "American Redstart", "American Robin", "American Tree Sparrow", "American White Pelican", "American Wigeon", "American Woodcock", "Ancient Murrelet", "Anhinga", "Anna's Hummingbird", "Antillean Nighthawk", "Antillean Palm Swift", "Aplomado Falcon", "Arctic Loon", "Arctic Tern", "Arctic Warbler", "Ash-throated Flycatcher", "Ashy Storm-Petrel", "Asian Brown Flycatcher", "Atlantic Puffin", "Audubon's Oriole", "Audubon's Shearwater", "Aztec Thrush", "Azure Gallinule", "Bachman's Sparrow", "Bachman's Warbler", "Bahama Mockingbird", "Bahama Swallow", "Bahama Woodstar", "Baikal Teal", "Baird's Sandpiper", "Baird's Sparrow", "Bald Eagle", "Baltimore Oriole", "Bananaquit", "Band-rumped Storm-Petrel", "Band-tailed Gull", "Band-tailed Pigeon", "Bank Swallow", "Bar-tailed Godwit", "Barn Owl", "Barn Swallow", "Barnacle Goose", "Barred Owl", "Barrow's Goldeneye", "Bay-breasted Warbler", "Bean Goose", "Bell's Vireo", "Belted Kingfisher", "Bendire's Thrasher", "Berylline Hummingbird", "Bewick's Wren", "Bicknell's Thrush", "Black Catbird", "Black Guillemot", "Black Noddy", "Black Oystercatcher", "Black Phoebe", "Black Rail", "Black Rosy-Finch", "Black Scoter", "Black Skimmer", "Black Storm-Petrel", "Black Swift", "Black Tern", "Black Turnstone", "Black Vulture", "Black-and-white Warbler", "Black-backed Wagtail", "Black-backed Woodpecker", "Black-bellied Plover", "Black-bellied Whistling-Duck", "Black-billed Cuckoo", "Black-billed Magpie", "Black-browed Albatross", "Black-capped Chickadee", "Black-capped Gnatcatcher", "Black-capped Petrel", "Black-capped Vireo", "Black-chinned Hummingbird", "Black-chinned Sparrow", "Black-crowned Night-Heron", "Black-faced Grassquit", "Black-footed Albatross", "Black-headed Grosbeak", "Black-headed Gull", "Black-legged Kittiwake", "Black-necked Stilt", "Black-tailed Gnatcatcher", "Black-tailed Godwit", "Black-tailed Gull", "Black-throated Blue Warbler", "Black-throated Gray Warbler", "Black-throated Green Warbler", "Black-throated Sparrow", "Black-vented Oriole", "Black-vented Shearwater", "Black-whiskered Vireo", "Black-winged Stilt", "Blackburnian Warbler", "Blackpoll Warbler", "Blue Bunting", "Blue Grosbeak", "Blue Grouse", "Blue Jay", "Blue Mockingbird", "Blue-footed Booby", "Blue-gray Gnatcatcher", "Blue-headed Vireo", "Blue-throated Hummingbird", "Blue-winged Teal", "Blue-winged Warbler", "Bluethroat", "Boat-tailed Grackle", "Bobolink", "Bohemian Waxwing", "Bonaparte's Gull", "Boreal Chickadee", "Boreal Owl", "Botteri's Sparrow", "Brambling", "Brandt's Cormorant", "Brant", "Brewer's Blackbird", "Brewer's Sparrow", "Bridled Tern", "Bridled Titmouse", "Bristle-thighed Curlew", "Broad-billed Hummingbird", "Broad-billed Sandpiper", "Broad-tailed Hummingbird", "Broad-winged Hawk", "Bronzed Cowbird", "Brown Booby", "Brown Creeper", "Brown Jay", "Brown Noddy", "Brown Pelican", "Brown Shrike", "Brown Thrasher", "Brown-capped Rosy-Finch", "Brown-chested Martin", "Brown-crested Flycatcher", "Brown-headed Cowbird", "Brown-headed Nuthatch", "Budgerigar", "Buff-bellied Hummingbird", "Buff-breasted Flycatcher", "Buff-breasted Sandpiper", "Buff-collared Nightjar", "Bufflehead", "Buller's Shearwater", "Bullock's Oriole", "Bumblebee Hummingbird", "Burrowing Owl", "Bushtit", "Cactus Wren", "California Condor", "California Gnatcatcher", "California Gull", "California Quail", "California Thrasher", "California Towhee", "Calliope Hummingbird", "Canada Goose", "Canada Warbler", "Canvasback", "Canyon Towhee", "Canyon Wren", "Cape May Warbler", "Caribbean Elaenia", "Carolina Chickadee", "Carolina Parakeet", "Carolina Wren", "Caspian Tern", "Cassin's Auklet", "Cassin's Finch", "Cassin's Kingbird", "Cassin's Sparrow", "Cassin's Vireo", "Cattle Egret", "Cave Swallow", "Cedar Waxwing", "Cerulean Warbler", "Chestnut-backed Chickadee", "Chestnut-collared Longspur", "Chestnut-sided Warbler", "Chihuahuan Raven", "Chimney Swift", "Chinese Egret", "Chipping Sparrow", "Chuck-will's-widow", "Chukar", "Cinnamon Hummingbird", "Cinnamon Teal", "Citrine Wagtail", "Clapper Rail", "Clark's Grebe", "Clark's Nutcracker", "Clay-colored Robin", "Clay-colored Sparrow", "Cliff Swallow", "Colima Warbler", "Collared Forest-Falcon", "Collared Plover", "Common Black-Hawk", "Common Chaffinch", "Common Crane", "Common Cuckoo", "Common Eider", "Common Goldeneye", "Common Grackle", "Common Greenshank", "Common Ground-Dove", "Common House-Martin", "Common Loon", "Common Merganser", "Common Moorhen", "Common Murre", "Common Nighthawk", "Common Pauraque", "Common Pochard", "Common Poorwill", "Common Raven", "Common Redpoll", "Common Ringed Plover", "Common Rosefinch", "Common Sandpiper", "Common Snipe", "Common Swift", "Common Tern", "Common Yellowthroat", "Connecticut Warbler", "Cook's Petrel", "Cooper's Hawk", "Cordilleran Flycatcher", "Corn Crake", "Cory's Shearwater", "Costa's Hummingbird", "Couch's Kingbird", "Crane Hawk", "Craveri's Murrelet", "Crescent-chested Warbler", "Crested Auklet", "Crested Caracara", "Crested Myna", "Crimson-collared Grosbeak", "Crissal Thrasher", "Cuban Martin", "Curlew Sandpiper", "Curve-billed Thrasher", "Dark-eyed Junco", "Dickcissel", "Double-crested Cormorant", "Double-striped Thick-knee", "Dovekie", "Downy Woodpecker", "Dunlin", "Dusky Flycatcher", "Dusky Thrush", "Dusky Warbler", "Dusky-capped Flycatcher", "Eared Grebe", "Eared Trogon", "Eastern Bluebird", "Eastern Kingbird", "Eastern Meadowlark", "Eastern Phoebe", "Eastern Screech-Owl", "Eastern Towhee", "Eastern Wood-Pewee", "Elegant Tern", "Elegant Trogon", "Elf Owl", "Emperor Goose", "Eskimo Curlew", "Eurasian Blackbird", "Eurasian Bullfinch", "Eurasian Collared-Dove", "Eurasian Coot", "Eurasian Curlew", "Eurasian Dotterel", "Eurasian Hobby", "Eurasian Jackdaw", "Eurasian Kestrel", "Eurasian Oystercatcher", "Eurasian Siskin", "Eurasian Tree Sparrow", "Eurasian Wigeon", "Eurasian Woodcock", "Eurasian Wryneck", "European Golden-Plover", "European Starling", "European Storm-Petrel", "European Turtle-Dove", "Evening Grosbeak", "Eyebrowed Thrush", "Falcated Duck", "Fan-tailed Warbler", "Far Eastern Curlew", "Ferruginous Hawk", "Ferruginous Pygmy-Owl", "Field Sparrow", "Fieldfare", "Fish Crow", "Five-striped Sparrow", "Flame-colored Tanager", "Flammulated Owl", "Flesh-footed Shearwater", "Florida Scrub-Jay", "Fork-tailed Flycatcher", "Fork-tailed Storm-Petrel", "Fork-tailed Swift", "Forster's Tern", "Fox Sparrow", "Franklin's Gull", "Fulvous Whistling-Duck", "Gadwall", "Gambel's Quail", "Garganey", "Gila Woodpecker", "Gilded Flicker", "Glaucous Gull", "Glaucous-winged Gull", "Glossy Ibis", "Golden Eagle", "Golden-cheeked Warbler", "Golden-crowned Kinglet", "Golden-crowned Sparrow", "Golden-crowned Warbler", "Golden-fronted Woodpecker", "Golden-winged Warbler", "Grace's Warbler", "Grasshopper Sparrow", "Gray Bunting", "Gray Catbird", "Gray Flycatcher", "Gray Hawk", "Gray Jay", "Gray Kingbird", "Gray Partridge", "Gray Silky-flycatcher", "Gray Vireo", "Gray Wagtail", "Gray-breasted Martin", "Gray-cheeked Thrush", "Gray-crowned Rosy-Finch", "Gray-crowned Yellowthroat", "Gray-headed Chickadee", "Gray-spotted Flycatcher", "Gray-tailed Tattler", "Great Auk", "Great Black-backed Gull", "Great Blue Heron", "Great Cormorant", "Great Crested Flycatcher", "Great Egret", "Great Frigatebird", "Great Gray Owl", "Great Horned Owl", "Great Kiskadee", "Great Knot", "Great Skua", "Great Spotted Woodpecker", "Great-tailed Grackle", "Greater Flamingo", "Greater Pewee", "Greater Prairie-chicken", "Greater Roadrunner", "Greater Scaup", "Greater Shearwater", "Greater White-fronted Goose", "Greater Yellowlegs", "Green Heron", "Green Jay", "Green Kingfisher", "Green Sandpiper", "Green Violet-ear", "Green-breasted Mango", "Green-tailed Towhee", "Green-winged Teal", "Greenish Elaenia", "Groove-billed Ani", "Gull-billed Tern", "Gyrfalcon", "Hairy Woodpecker", "Hammond's Flycatcher", "Harlequin Duck", "Harris's Hawk", "Harris's Sparrow", "Hawfinch", "Heermann's Gull", "Henslow's Sparrow", "Hepatic Tanager", "Herald Petrel", "Hermit Thrush", "Hermit Warbler", "Herring Gull", "Himalayan Snowcock", "Hoary Redpoll", "Hooded Merganser", "Hooded Oriole", "Hooded Warbler", "Hook-billed Kite", "Hoopoe", "Horned Grebe", "Horned Lark", "Horned Puffin", "House Finch", "House Sparrow", "House Wren", "Hudsonian Godwit", "Hutton's Vireo", "Iceland Gull", "Inca Dove", "Indigo Bunting", "Island Scrub-Jay", "Ivory Gull", "Ivory-billed Woodpecker", "Jabiru", "Jack Snipe", "Jungle Nightjar", "Juniper Titmouse", "Kentucky Warbler", "Key West Quail-Dove", "Killdeer", "King Eider", "King Rail", "Kirtland's Warbler", "Kittlitz's Murrelet", "La Sagra's Flycatcher", "Labrador Duck", "Ladder-backed Woodpecker", "Lanceolated Warbler", "Lapland Longspur", "Large-billed Tern", "Lark Bunting", "Lark Sparrow", "Laughing Gull", "Lawrence's Goldfinch", "Laysan Albatross", "Lazuli Bunting", "Le Conte's Sparrow", "Le Conte's Thrasher", "Leach's Storm-Petrel", "Least Auklet", "Least Bittern", "Least Flycatcher", "Least Grebe", "Least Sandpiper", "Least Storm-Petrel", "Least Tern", "Lesser Black-backed Gull", "Lesser Frigatebird", "Lesser Goldfinch", "Lesser Nighthawk", "Lesser Prairie-chicken", "Lesser Scaup", "Lesser White-fronted Goose", "Lesser Yellowlegs", "Lewis's Woodpecker", "Limpkin", "Lincoln's Sparrow", "Little Blue Heron", "Little Bunting", "Little Curlew", "Little Egret", "Little Gull", "Little Ringed Plover", "Little Shearwater", "Little Stint", "Loggerhead Kingbird", "Loggerhead Shrike", "Long-billed Curlew", "Long-billed Dowitcher", "Long-billed Murrelet", "Long-billed Thrasher", "Long-eared Owl", "Long-tailed Jaeger", "Long-toed Stint", "Louisiana Waterthrush", "Lucifer Hummingbird", "Lucy's Warbler", "MacGillivray's Warbler", "Magnificent Frigatebird", "Magnificent Hummingbird", "Magnolia Warbler", "Mallard", "Mangrove Cuckoo", "Manx Shearwater", "Marbled Godwit", "Marbled Murrelet", "Marsh Sandpiper", "Marsh Wren", "Masked Booby", "Masked Duck", "Masked Tityra", "McCown's Longspur", "McKay's Bunting", "Merlin", "Mew Gull", "Mexican Chickadee", "Mexican Jay", "Middendorff's Grasshopper-Warbler", "Mississippi Kite", "Mongolian Plover", "Monk Parakeet", "Montezuma Quail", "Mottled Duck", "Mottled Owl", "Mottled Petrel", "Mountain Bluebird", "Mountain Chickadee", "Mountain Plover", "Mountain Quail", "Mourning Dove", "Mourning Warbler", "Mugimaki Flycatcher", "Murphy's Petrel", "Muscovy Duck", "Mute Swan", "Narcissus Flycatcher", "Nashville Warbler", "Nelson's Sharp-tailed Sparrow", "Neotropic Cormorant", "Northern Beardless-Tyrannulet", "Northern Bobwhite", "Northern Cardinal", "Northern Flicker", "Northern Fulmar", "Northern Gannet", "Northern Goshawk", "Northern Harrier", "Northern Hawk Owl", "Northern Jacana", "Northern Lapwing", "Northern Mockingbird", "Northern Parula", "Northern Pintail", "Northern Pygmy-Owl", "Northern Rough-winged Swallow", "Northern Saw-whet Owl", "Northern Shoveler", "Northern Shrike", "Northern Waterthrush", "Northern Wheatear", "Northwestern Crow", "Nuttall's Woodpecker", "Nutting's Flycatcher", "Oak Titmouse", "Oldsquaw", "Olive Sparrow", "Olive Warbler", "Olive-backed Pipit", "Olive-sided Flycatcher", "Orange-crowned Warbler", "Orchard Oriole", "Oriental Cuckoo", "Oriental Greenfinch", "Oriental Pratincole", "Oriental Scops-Owl", "Oriental Turtle-Dove", "Osprey", "Ovenbird", "Pacific Golden-Plover", "Pacific Loon", "Pacific-slope Flycatcher", "Paint-billed Crake", "Painted Bunting", "Painted Redstart", "Pallas's Bunting", "Palm Warbler", "Parakeet Auklet", "Parasitic Jaeger", "Passenger Pigeon", "Pechora Pipit", "Pectoral Sandpiper", "Pelagic Cormorant", "Peregrine Falcon", "Phainopepla", "Philadelphia Vireo", "Pied-billed Grebe", "Pigeon Guillemot", "Pileated Woodpecker", "Pin-tailed Snipe", "Pine Bunting", "Pine Grosbeak", "Pine Siskin", "Pine Warbler", "Pink-footed Goose", "Pink-footed Shearwater", "Pinyon Jay", "Piping Plover", "Plain Chachalaca", "Plain-capped Starthroat", "Plumbeous Vireo", "Pomarine Jaeger", "Prairie Falcon", "Prairie Warbler", "Prothonotary Warbler", "Purple Finch", "Purple Gallinule", "Purple Martin", "Purple Sandpiper", "Pygmy Nuthatch", "Pyrrhuloxia", "Razorbill", "Red Crossbill", "Red Knot", "Red Phalarope", "Red-bellied Woodpecker", "Red-billed Pigeon", "Red-billed Tropicbird", "Red-breasted Flycatcher", "Red-breasted Merganser", "Red-breasted Nuthatch", "Red-breasted Sapsucker", "Red-cockaded Woodpecker", "Red-crowned Parrot", "Red-eyed Vireo", "Red-faced Cormorant", "Red-faced Warbler", "Red-flanked Bluetail", "Red-footed Booby", "Red-headed Woodpecker", "Red-legged Kittiwake", "Red-naped Sapsucker", "Red-necked Grebe", "Red-necked Phalarope", "Red-necked Stint", "Red-shouldered Hawk", "Red-tailed Hawk", "Red-tailed Tropicbird", "Red-throated Loon", "Red-throated Pipit", "Red-whiskered Bulbul", "Red-winged Blackbird", "Reddish Egret", "Redhead", "Redwing", "Reed Bunting", "Rhinoceros Auklet", "Ring-billed Gull", "Ring-necked Duck", "Ring-necked Pheasant", "Ringed Kingfisher", "Roadside Hawk", "Rock Dove", "Rock Ptarmigan", "Rock Sandpiper", "Rock Wren", "Rose-breasted Grosbeak", "Rose-throated Becard", "Roseate Spoonbill", "Roseate Tern", "Ross's Goose", "Ross's Gull", "Rough-legged Hawk", "Royal Tern", "Ruby-crowned Kinglet", "Ruby-throated Hummingbird", "Ruddy Duck", "Ruddy Ground-Dove", "Ruddy Quail-Dove", "Ruddy Turnstone", "Ruff", "Ruffed Grouse", "Rufous Hummingbird", "Rufous-backed Robin", "Rufous-capped Warbler", "Rufous-crowned Sparrow", "Rufous-winged Sparrow", "Rustic Bunting", "Rusty Blackbird", "Sabine's Gull", "Sage Grouse", "Sage Sparrow", "Sage Thrasher", "Saltmarsh Sharp-tailed Sparrow", "Sanderling", "Sandhill Crane", "Sandwich Tern", "Savannah Sparrow", "Say's Phoebe", "Scaled Quail", "Scaly-naped Pigeon", "Scarlet Ibis", "Scarlet Tanager", "Scissor-tailed Flycatcher", "Scott's Oriole", "Seaside Sparrow", "Sedge Wren", "Semipalmated Plover", "Semipalmated Sandpiper", "Sharp-shinned Hawk", "Sharp-tailed Grouse", "Sharp-tailed Sandpiper", "Shiny Cowbird", "Short-billed Dowitcher", "Short-eared Owl", "Short-tailed Albatross", "Short-tailed Hawk", "Short-tailed Shearwater", "Shy Albatross", "Siberian Accentor", "Siberian Blue Robin", "Siberian Flycatcher", "Siberian Rubythroat", "Sky Lark", "Slate-throated Redstart", "Slaty-backed Gull", "Slender-billed Curlew", "Smew", "Smith's Longspur", "Smooth-billed Ani", "Snail Kite", "Snow Bunting", "Snow Goose", "Snowy Egret", "Snowy Owl", "Snowy Plover", "Solitary Sandpiper", "Song Sparrow", "Sooty Shearwater", "Sooty Tern", "Sora", "South Polar Skua", "Southern Martin", "Spectacled Eider", "Spoonbill Sandpiper", "Spot-billed Duck", "Spot-breasted Oriole", "Spotted Dove", "Spotted Owl", "Spotted Rail", "Spotted Redshank", "Spotted Sandpiper", "Spotted Towhee", "Sprague's Pipit", "Spruce Grouse", "Stejneger's Petrel", "Steller's Eider", "Steller's Jay", "Steller's Sea-Eagle", "Stilt Sandpiper", "Stonechat", "Streak-backed Oriole", "Streaked Shearwater", "Strickland's Woodpecker", "Stripe-headed Tanager", "Sulphur-bellied Flycatcher", "Summer Tanager", "Surf Scoter", "Surfbird", "Swainson's Hawk", "Swainson's Thrush", "Swainson's Warbler", "Swallow-tailed Kite", "Swamp Sparrow", "Tamaulipas Crow", "Tawny-shouldered Blackbird", "Temminck's Stint", "Tennessee Warbler", "Terek Sandpiper", "Thayer's Gull", "Thick-billed Kingbird", "Thick-billed Murre", "Thick-billed Parrot", "Thick-billed Vireo", "Three-toed Woodpecker", "Townsend's Solitaire", "Townsend's Warbler", "Tree Pipit", "Tree Swallow", "Tricolored Blackbird", "Tricolored Heron", "Tropical Kingbird", "Tropical Parula", "Trumpeter Swan", "Tufted Duck", "Tufted Flycatcher", "Tufted Puffin", "Tufted Titmouse", "Tundra Swan", "Turkey Vulture", "Upland Sandpiper", "Varied Bunting", "Varied Thrush", "Variegated Flycatcher", "Vaux's Swift", "Veery", "Verdin", "Vermilion Flycatcher", "Vesper Sparrow", "Violet-crowned Hummingbird", "Violet-green Swallow", "Virginia Rail", "Virginia's Warbler", "Wandering Albatross", "Wandering Tattler", "Warbling Vireo", "Wedge-rumped Storm-Petrel", "Wedge-tailed Shearwater", "Western Bluebird", "Western Grebe", "Western Gull", "Western Kingbird", "Western Meadowlark", "Western Reef-Heron", "Western Sandpiper", "Western Screech-Owl", "Western Scrub-Jay", "Western Tanager", "Western Wood-Pewee", "Whimbrel", "Whip-poor-will", "Whiskered Auklet", "Whiskered Screech-Owl", "Whiskered Tern", "White Ibis", "White Wagtail", "White-breasted Nuthatch", "White-cheeked Pintail", "White-chinned Petrel", "White-collared Seedeater", "White-collared Swift", "White-crowned Pigeon", "White-crowned Sparrow", "White-eared Hummingbird", "White-eyed Vireo", "White-faced Ibis", "White-faced Storm-Petrel", "White-headed Woodpecker", "White-rumped Sandpiper", "White-tailed Eagle", "White-tailed Hawk", "White-tailed Kite", "White-tailed Ptarmigan", "White-tailed Tropicbird", "White-throated Needletail", "White-throated Robin", "White-throated Sparrow", "White-throated Swift", "White-tipped Dove", "White-winged Crossbill", "White-winged Dove", "White-winged Parakeet", "White-winged Scoter", "White-winged Tern", "Whooper Swan", "Whooping Crane", "Wild Turkey", "Willet", "Williamson's Sapsucker", "Willow Flycatcher", "Willow Ptarmigan", "Wilson's Phalarope", "Wilson's Plover", "Wilson's Storm-Petrel", "Wilson's Warbler", "Winter Wren", "Wood Duck", "Wood Sandpiper", "Wood Stork", "Wood Thrush", "Wood Warbler", "Worm-eating Warbler", "Worthen's Sparrow", "Wrentit", "Xantus's Hummingbird", "Xantus's Murrelet", "Yellow Bittern", "Yellow Grosbeak", "Yellow Rail", "Yellow Wagtail", "Yellow Warbler", "Yellow-bellied Flycatcher", "Yellow-bellied Sapsucker", "Yellow-billed Cuckoo", "Yellow-billed Loon", "Yellow-billed Magpie", "Yellow-breasted Bunting", "Yellow-breasted Chat", "Yellow-crowned Night-Heron", "Yellow-eyed Junco", "Yellow-faced Grassquit", "Yellow-footed Gull", "Yellow-green Vireo", "Yellow-headed Blackbird", "Yellow-legged Gull", "Yellow-nosed Albatross", "Yellow-rumped Warbler", "Yellow-throated Vireo", "Yellow-throated Warbler", "Yucatan Vireo", "Zenaida Dove", "Zone-tailed Hawk"], lm = ["Abyssinian", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Balinese", "Bengal", "Birman", "Bombay", "British Shorthair", "Burmese", "Chartreux", "Chausie", "Cornish Rex", "Devon Rex", "Donskoy", "Egyptian Mau", "Exotic Shorthair", "Havana", "Highlander", "Himalayan", "Japanese Bobtail", "Korat", "Kurilian Bobtail", "LaPerm", "Maine Coon", "Manx", "Minskin", "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Ojos Azules", "Oriental", "Persian", "Peterbald", "Pixiebob", "Ragdoll", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Serengeti", "Siamese", "Siberian", "Singapura", "Snowshoe", "Sokoke", "Somali", "Sphynx", "Thai", "Tonkinese", "Toyger", "Turkish Angora", "Turkish Van"], um = ["Amazon River Dolphin", "Arnoux's Beaked Whale", "Atlantic Humpbacked Dolphin", "Atlantic Spotted Dolphin", "Atlantic White-Sided Dolphin", "Australian Snubfin Dolphin", "Australian humpback Dolphin", "Blue Whale", "Bottlenose Dolphin", "Bryde’s whale", "Burrunan Dolphin", "Chilean Dolphin", "Chinese River Dolphin", "Chinese White Dolphin", "Clymene Dolphin", "Commerson’s Dolphin", "Costero", "Dusky Dolphin", "False Killer Whale", "Fin Whale", "Fraser’s Dolphin", "Ganges River Dolphin", "Guiana Dolphin", "Heaviside’s Dolphin", "Hector’s Dolphin", "Hourglass Dolphin", "Humpback whale", "Indo-Pacific Bottlenose Dolphin", "Indo-Pacific Hump-backed Dolphin", "Irrawaddy Dolphin", "Killer Whale (Orca)", "La Plata Dolphin", "Long-Beaked Common Dolphin", "Long-finned Pilot Whale", "Longman's Beaked Whale", "Melon-headed Whale", "Northern Rightwhale Dolphin", "Omura’s whale", "Pacific White-Sided Dolphin", "Pantropical Spotted Dolphin", "Peale’s Dolphin", "Pygmy Killer Whale", "Risso’s Dolphin", "Rough-Toothed Dolphin", "Sei Whale", "Short-Beaked Common Dolphin", "Short-finned Pilot Whale", "Southern Bottlenose Whale", "Southern Rightwhale Dolphin", "Sperm Whale", "Spinner Dolphin", "Striped Dolphin", "Tucuxi", "White-Beaked Dolphin"], cm = ["Aberdeen Angus", "Abergele", "Abigar", "Abondance", "Abyssinian Shorthorned Zebu", "Aceh", "Achham", "Adamawa", "Adaptaur", "Afar", "Africangus", "Afrikaner", "Agerolese", "Alambadi", "Alatau", "Albanian", "Albera", "Alderney", "Alentejana", "Aleutian wild cattle", "Aliad Dinka", "Alistana-Sanabresa", "Allmogekor", "Alur", "American", "American Angus", "American Beef Friesian", "American Brown Swiss", "American Milking Devon", "American White Park", "Amerifax", "Amrit Mahal", "Amsterdam Island cattle", "Anatolian Black", "Andalusian Black", "Andalusian Blond", "Andalusian Grey", "Angeln", "Angoni", "Ankina", "Ankole", "Ankole-Watusi", "Aracena", "Arado", "Argentine Criollo", "Argentine Friesian", "Armorican", "Arouquesa", "Arsi", "Asturian Mountain", "Asturian Valley", "Aubrac", "Aulie-Ata", "Aure et Saint-Girons", "Australian Braford", "Australian Brangus", "Australian Charbray", "Australian Friesian Sahiwal", "Australian Lowline", "Australian Milking Zebu", "Australian Shorthorn", "Austrian Simmental", "Austrian Yellow", "Avileña-Negra Ibérica", "Avétonou", "Aweil Dinka", "Ayrshire", "Azaouak", "Azebuado", "Azerbaijan Zebu", "Azores", "Bachaur cattle", "Baherie cattle", "Bakosi cattle", "Balancer", "Baoule", "Bargur cattle", "Barrosã", "Barzona", "Bazadaise", "Beef Freisian", "Beefalo", "Beefmaker", "Beefmaster", "Begayt", "Belgian Blue", "Belgian Red", "Belgian Red Pied", "Belgian White-and-Red", "Belmont Red", "Belted Galloway", "Bernese", "Berrenda cattle", "Betizu", "Bianca Modenese", "Blaarkop", "Black Angus", "Black Baldy", "Black Hereford", "Blanca Cacereña", "Blanco Orejinegro BON", "Blonde d'Aquitaine", "Blue Albion", "Blue Grey", "Bohuskulla", "Bonsmara", "Boran", "Boškarin", "Braford", "Brahman", "Brahmousin", "Brangus", "Braunvieh", "Brava", "Breed", "British Friesian", "British White", "Brown Carpathian", "Brown Caucasian", "Brown Swiss", "Bue Lingo", "Burlina", "Bushuyev", "Butana cattle", "Buša cattle", "Cachena", "Caldelana", "Camargue", "Campbell Island cattle", "Canadian Speckle Park", "Canadienne", "Canaria", "Canchim", "Caracu", "Carinthian Blondvieh", "Carora", "Charbray", "Charolais", "Chateaubriand", "Chiangus", "Chianina", "Chillingham cattle", "Chinese Black Pied", "Cholistani", "Coloursided White Back", "Commercial", "Corriente", "Corsican cattle", "Costeño con Cuernos", "Crioulo Lageano", "Cárdena Andaluza", "Dajal", "Dangi cattle", "Danish Black-Pied", "Danish Jersey", "Danish Red", "Deep Red cattle", "Deoni", "Devon", "Dexter cattle", "Dhanni", "Doayo cattle", "Doela", "Drakensberger", "Droughtmaster", "Dulong'", "Dutch Belted", "Dutch Friesian", "Dwarf Lulu", "Dølafe", "East Anatolian Red", "Eastern Finncattle", "Eastern Red Polled", "Enderby Island cattle", "English Longhorn", "Ennstaler Bergscheck", "Estonian Holstein", "Estonian Native", "Estonian Red cattle", "Finncattle", "Finnish Ayrshire", "Finnish Holstein-Friesian", "Fjäll", "Fleckvieh", "Florida Cracker cattle", "Fogera", "French Simmental", "Fribourgeoise", "Friesian Red and White", "Fulani Sudanese", "Fēng Cattle", "Galician Blond", "Galloway cattle", "Gangatiri", "Gaolao", "Garvonesa", "Gascon cattle", "Gelbvieh", "Georgian Mountain cattle", "German Angus", "German Black Pied Dairy", "German Black Pied cattle", "German Red Pied", "Gir", "Glan cattle", "Gloucester", "Gobra", "Greek Shorthorn", "Greek Steppe", "Greyman cattle", "Gudali", "Guernsey cattle", "Guzerá", "Hallikar4", "Hanwoo", "Hariana cattle", "Hartón del Valle", "Harzer Rotvieh", "Hays Converter", "Heck cattle", "Hereford", "Herens", "Highland cattle", "Hinterwald", "Holando-Argentino", "Holstein Friesian cattle", "Horro", "Hungarian Grey", "Huáng Cattle", "Hybridmaster", "Iberian cattle", "Icelandic", "Illawarra cattle", "Improved Red and White", "Indo-Brazilian", "Irish Moiled", "Israeli Holstein", "Israeli Red", "Istoben cattle", "Istrian cattle", "Jamaica Black", "Jamaica Hope", "Jamaica Red", "Japanese Brown", "Jarmelista", "Javari cattle", "Jersey cattle", "Jutland cattle", "Kabin Buri cattle", "Kalmyk cattle", "Kamphaeng Saen cattle", "Kangayam", "Kankrej", "Karan Swiss", "Kasaragod Dwarf cattle", "Kathiawadi", "Kazakh Whiteheaded", "Kenana cattle", "Kenkatha cattle", "Kerry cattle", "Kherigarh", "Khillari cattle", "Kholomogory", "Korat Wagyu", "Kostroma cattle", "Krishna Valley cattle", "Kurgan cattle", "Kuri", "La Reina cattle", "Lakenvelder cattle", "Lampurger", "Latvian Blue", "Latvian Brown", "Latvian Danish Red", "Lebedyn", "Levantina", "Limia cattle", "Limousin", "Limpurger", "Lincoln Red", "Lineback", "Lithuanian Black-and-White", "Lithuanian Light Grey", "Lithuanian Red", "Lithuanian White-Backed", "Lohani cattle", "Lourdais", "Lucerna cattle", "Luing", "Madagascar Zebu", "Madura", "Maine-Anjou", "Malnad Gidda", "Malvi", "Mandalong Special", "Mantequera Leonesa", "Maramureş Brown", "Marchigiana", "Maremmana", "Marinhoa", "Maronesa", "Masai", "Mashona", "Menorquina", "Mertolenga", "Meuse-Rhine-Issel", "Mewati", "Milking Shorthorn", "Minhota", "Mirandesa", "Mirkadim", "Mocăniţă", "Mollie", "Monchina", "Mongolian", "Montbéliarde", "Morucha", "Murboden", "Murnau-Werdenfels", "Murray Grey", "Muturu", "N'Dama", "Nagori", "Negra Andaluza", "Nelore", "Nguni", "Nimari", "Normande", "North Bengal Grey", "Northern Finncattle", "Northern Shorthorn", "Norwegian Red", "Ongole", "Original Simmental", "Pajuna", "Palmera", "Pantaneiro", "Parda Alpina", "Parthenaise", "Pasiega", "Pembroke", "Philippine Native", "Pie Rouge des Plaines", "Piedmontese cattle", "Pineywoods", "Pinzgauer", "Pirenaica", "Podolac", "Podolica", "Polish Black-and-White", "Polish Red", "Poll Shorthorn", "Polled Hereford", "Polled Shorthorn", "Ponwar", "Preta", "Pulikulam", "Punganur", "Pustertaler Sprinzen", "Qinchaun", "Queensland Miniature Boran", "RX3", "Ramo Grande", "Randall", "Raramuri Criollo", "Rathi", "Raya", "Red Angus", "Red Brangus", "Red Chittagong", "Red Fulani", "Red Gorbatov", "Red Holstein", "Red Kandhari", "Red Mingrelian", "Red Poll", "Red Polled Østland", "Red Sindhi", "Retinta", "Riggit Galloway", "Ringamåla", "Rohjan", "Romagnola", "Romanian Bălţata", "Romanian Steppe Gray", "Romosinuano", "Russian Black Pied", "Rätisches Grauvieh", "Sahiwal", "Salers", "Salorn", "Sanga", "Sanhe", "Santa Cruz", "Santa Gertrudis", "Sayaguesa", "Schwyz", "Selembu", "Senepol", "Serbian Pied", "Serbian Steppe", "Sheko", "Shetland", "Shorthorn", "Siboney de Cuba", "Simbrah", "Simford", "Simmental", "Siri", "South Devon", "Spanish Fighting Bull", "Speckle Park", "Square Meater", "Sussex", "Swedish Friesian", "Swedish Polled", "Swedish Red Pied", "Swedish Red Polled", "Swedish Red-and-White", "Tabapuã", "Tarentaise", "Tasmanian Grey", "Tauros", "Telemark", "Texas Longhorn", "Texon", "Thai Black", "Thai Fighting Bull", "Thai Friesian", "Thai Milking Zebu", "Tharparkar", "Tswana", "Tudanca", "Tuli", "Tulim", "Turkish Grey Steppe", "Tux-Zillertal", "Tyrol Grey", "Ukrainian Grey", "Umblachery", "Valdostana Castana", "Valdostana Pezzata Nera", "Valdostana Pezzata Rossa", "Vaynol", "Vechur8", "Vestland Fjord", "Vestland Red Polled", "Vianesa", "Volinian Beef", "Vorderwald", "Vosgienne", "Väneko", "Waguli", "Wagyu", "Wangus", "Welsh Black", "Western Finncattle", "White Cáceres", "White Fulani", "White Lamphun", "White Park", "Whitebred Shorthorn", "Xingjiang Brown", "Yakutian", "Yanbian", "Yanhuang", "Yurino", "Zebu", "Évolène cattle", "Żubroń"], dm = ["African Slender-snouted Crocodile", "Alligator mississippiensis", "American Crocodile", "Australian Freshwater Crocodile", "Black Caiman", "Broad-snouted Caiman", "Chinese Alligator", "Cuban Crocodile", "Cuvier’s Dwarf Caiman", "Dwarf Crocodile", "Gharial", "Morelet’s Crocodile", "Mugger Crocodile", "New Guinea Freshwater Crocodile", "Nile Crocodile", "Orinoco Crocodile", "Philippine Crocodile", "Saltwater Crocodile", "Schneider’s Smooth-fronted Caiman", "Siamese Crocodile", "Spectacled Caiman", "Tomistoma", "West African Crocodile", "Yacare Caiman"], hm = ["Affenpinscher", "Afghan Hound", "Aidi", "Airedale Terrier", "Akbash", "Akita", "Alano Español", "Alapaha Blue Blood Bulldog", "Alaskan Husky", "Alaskan Klee Kai", "Alaskan Malamute", "Alopekis", "Alpine Dachsbracke", "American Bulldog", "American Bully", "American Cocker Spaniel", "American English Coonhound", "American Foxhound", "American Hairless Terrier", "American Pit Bull Terrier", "American Staffordshire Terrier", "American Water Spaniel", "Andalusian Hound", "Anglo-Français de Petite Vénerie", "Appenzeller Sennenhund", "Ariegeois", "Armant", "Armenian Gampr dog", "Artois Hound", "Australian Cattle Dog", "Australian Kelpie", "Australian Shepherd", "Australian Stumpy Tail Cattle Dog", "Australian Terrier", "Austrian Black and Tan Hound", "Austrian Pinscher", "Azawakh", "Bakharwal dog", "Banjara Hound", "Barbado da Terceira", "Barbet", "Basenji", "Basque Shepherd Dog", "Basset Artésien Normand", "Basset Bleu de Gascogne", "Basset Fauve de Bretagne", "Basset Hound", "Bavarian Mountain Hound", "Beagle", "Beagle-Harrier", "Bearded Collie", "Beauceron", "Bedlington Terrier", "Belgian Shepherd", "Bergamasco Shepherd", "Berger Picard", "Bernese Mountain Dog", "Bhotia", "Bichon Frisé", "Billy", "Black Mouth Cur", "Black Norwegian Elkhound", "Black Russian Terrier", "Black and Tan Coonhound", "Bloodhound", "Blue Lacy", "Blue Picardy Spaniel", "Bluetick Coonhound", "Boerboel", "Bohemian Shepherd", "Bolognese", "Border Collie", "Border Terrier", "Borzoi", "Bosnian Coarse-haired Hound", "Boston Terrier", "Bouvier des Ardennes", "Bouvier des Flandres", "Boxer", "Boykin Spaniel", "Bracco Italiano", "Braque Francais", "Braque Saint-Germain", "Braque d'Auvergne", "Braque de l'Ariège", "Braque du Bourbonnais", "Briard", "Briquet Griffon Vendéen", "Brittany", "Broholmer", "Bruno Jura Hound", "Brussels Griffon", "Bucovina Shepherd Dog", "Bull Arab", "Bull Terrier", "Bulldog", "Bullmastiff", "Bully Kutta", "Burgos Pointer", "Cairn Terrier", "Campeiro Bulldog", "Can de Chira", "Canaan Dog", "Canadian Eskimo Dog", "Cane Corso", "Cane Paratore", "Cane di Oropa", "Cantabrian Water Dog", "Cardigan Welsh Corgi", "Carea Castellano Manchego", "Carolina Dog", "Carpathian Shepherd Dog", "Catahoula Leopard Dog", "Catalan Sheepdog", "Caucasian Shepherd Dog", "Cavalier King Charles Spaniel", "Central Asian Shepherd Dog", "Cesky Fousek", "Cesky Terrier", "Chesapeake Bay Retriever", "Chien Français Blanc et Noir", "Chien Français Blanc et Orange", "Chien Français Tricolore", "Chihuahua", "Chilean Terrier", "Chinese Chongqing Dog", "Chinese Crested Dog", "Chinook", "Chippiparai", "Chongqing dog", "Chortai", "Chow Chow", "Cimarrón Uruguayo", "Cirneco dell'Etna", "Clumber Spaniel", "Colombian fino hound", "Coton de Tulear", "Cretan Hound", "Croatian Sheepdog", "Curly-Coated Retriever", "Cursinu", "Czechoslovakian Wolfdog", "Cão Fila de São Miguel", "Cão da Serra de Aires", "Cão de Castro Laboreiro", "Cão de Gado Transmontano", "Dachshund", "Dalmatian", "Dandie Dinmont Terrier", "Danish-Swedish Farmdog", "Denmark Feist", "Dingo", "Doberman Pinscher", "Dogo Argentino", "Dogo Guatemalteco", "Dogo Sardesco", "Dogue Brasileiro", "Dogue de Bordeaux", "Drentse Patrijshond", "Drever", "Dunker", "Dutch Shepherd", "Dutch Smoushond", "East European Shepherd", "East Siberian Laika", "English Cocker Spaniel", "English Foxhound", "English Mastiff", "English Setter", "English Shepherd", "English Springer Spaniel", "English Toy Terrier", "Entlebucher Mountain Dog", "Estonian Hound", "Estrela Mountain Dog", "Eurasier", "Field Spaniel", "Fila Brasileiro", "Finnish Hound", "Finnish Lapphund", "Finnish Spitz", "Flat-Coated Retriever", "French Bulldog", "French Spaniel", "Galgo Español", "Galician Shepherd Dog", "Garafian Shepherd", "Gascon Saintongeois", "Georgian Shepherd", "German Hound", "German Longhaired Pointer", "German Pinscher", "German Roughhaired Pointer", "German Shepherd Dog", "German Shorthaired Pointer", "German Spaniel", "German Spitz", "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "Gończy Polski", "Grand Anglo-Français Blanc et Noir", "Grand Anglo-Français Blanc et Orange", "Grand Anglo-Français Tricolore", "Grand Basset Griffon Vendéen", "Grand Bleu de Gascogne", "Grand Griffon Vendéen", "Great Dane", "Greater Swiss Mountain Dog", "Greek Harehound", "Greek Shepherd", "Greenland Dog", "Greyhound", "Griffon Bleu de Gascogne", "Griffon Fauve de Bretagne", "Griffon Nivernais", "Gull Dong", "Gull Terrier", "Hamiltonstövare", "Hanover Hound", "Harrier", "Havanese", "Hierran Wolfdog", "Hokkaido", "Hovawart", "Huntaway", "Hygen Hound", "Hällefors Elkhound", "Ibizan Hound", "Icelandic Sheepdog", "Indian Spitz", "Indian pariah dog", "Irish Red and White Setter", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Istrian Coarse-haired Hound", "Istrian Shorthaired Hound", "Italian Greyhound", "Jack Russell Terrier", "Jagdterrier", "Japanese Chin", "Japanese Spitz", "Japanese Terrier", "Jindo", "Jonangi", "Kai Ken", "Kaikadi", "Kangal Shepherd Dog", "Kanni", "Karakachan dog", "Karelian Bear Dog", "Kars", "Karst Shepherd", "Keeshond", "Kerry Beagle", "Kerry Blue Terrier", "King Charles Spaniel", "King Shepherd", "Kintamani", "Kishu", "Kokoni", "Kombai", "Komondor", "Kooikerhondje", "Koolie", "Koyun dog", "Kromfohrländer", "Kuchi", "Kuvasz", "Labrador Retriever", "Lagotto Romagnolo", "Lakeland Terrier", "Lancashire Heeler", "Landseer", "Lapponian Herder", "Large Münsterländer", "Leonberger", "Levriero Sardo", "Lhasa Apso", "Lithuanian Hound", "Lupo Italiano", "Löwchen", "Mackenzie River Husky", "Magyar agár", "Mahratta Greyhound", "Maltese", "Manchester Terrier", "Maremmano-Abruzzese Sheepdog", "McNab dog", "Miniature American Shepherd", "Miniature Bull Terrier", "Miniature Fox Terrier", "Miniature Pinscher", "Miniature Schnauzer", "Molossus of Epirus", "Montenegrin Mountain Hound", "Mountain Cur", "Mountain Feist", "Mucuchies", "Mudhol Hound", "Mudi", "Neapolitan Mastiff", "New Guinea Singing Dog", "New Zealand Heading Dog", "Newfoundland", "Norfolk Terrier", "Norrbottenspets", "Northern Inuit Dog", "Norwegian Buhund", "Norwegian Elkhound", "Norwegian Lundehund", "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old Croatian Sighthound", "Old Danish Pointer", "Old English Sheepdog", "Old English Terrier", "Olde English Bulldogge", "Otterhound", "Pachon Navarro", "Paisley Terrier", "Pampas Deerhound", "Papillon", "Parson Russell Terrier", "Pastore della Lessinia e del Lagorai", "Patagonian Sheepdog", "Patterdale Terrier", "Pekingese", "Pembroke Welsh Corgi", "Perro Majorero", "Perro de Pastor Mallorquin", "Perro de Presa Canario", "Perro de Presa Mallorquin", "Peruvian Inca Orchid", "Petit Basset Griffon Vendéen", "Petit Bleu de Gascogne", "Phalène", "Pharaoh Hound", "Phu Quoc Ridgeback", "Picardy Spaniel", "Plott Hound", "Plummer Terrier", "Podenco Canario", "Podenco Valenciano", "Pointer", "Poitevin", "Polish Greyhound", "Polish Hound", "Polish Lowland Sheepdog", "Polish Tatra Sheepdog", "Pomeranian", "Pont-Audemer Spaniel", "Poodle", "Porcelaine", "Portuguese Podengo", "Portuguese Pointer", "Portuguese Water Dog", "Posavac Hound", "Pražský Krysařík", "Pshdar Dog", "Pudelpointer", "Pug", "Puli", "Pumi", "Pungsan Dog", "Pyrenean Mastiff", "Pyrenean Mountain Dog", "Pyrenean Sheepdog", "Rafeiro do Alentejo", "Rajapalayam", "Rampur Greyhound", "Rat Terrier", "Ratonero Bodeguero Andaluz", "Ratonero Mallorquin", "Ratonero Murciano de Huerta", "Ratonero Valenciano", "Redbone Coonhound", "Rhodesian Ridgeback", "Romanian Mioritic Shepherd Dog", "Romanian Raven Shepherd Dog", "Rottweiler", "Rough Collie", "Russian Spaniel", "Russian Toy", "Russo-European Laika", "Saarloos Wolfdog", "Sabueso Español", "Saint Bernard", "Saint Hubert Jura Hound", "Saint-Usuge Spaniel", "Saluki", "Samoyed", "Sapsali", "Sarabi dog", "Sardinian Shepherd Dog", "Schapendoes", "Schillerstövare", "Schipperke", "Schweizer Laufhund", "Schweizerischer Niederlaufhund", "Scottish Deerhound", "Scottish Terrier", "Sealyham Terrier", "Segugio Italiano", "Segugio Maremmano", "Segugio dell'Appennino", "Seppala Siberian Sleddog", "Serbian Hound", "Serbian Tricolour Hound", "Serrano Bulldog", "Shar Pei", "Shetland Sheepdog", "Shiba Inu", "Shih Tzu", "Shikoku", "Shiloh Shepherd", "Siberian Husky", "Silken Windhound", "Silky Terrier", "Sinhala Hound", "Skye Terrier", "Sloughi", "Slovakian Wirehaired Pointer", "Slovenský Cuvac", "Slovenský Kopov", "Smalandstövare", "Small Greek domestic dog", "Small Münsterländer", "Smooth Collie", "Smooth Fox Terrier", "Soft-Coated Wheaten Terrier", "South Russian Ovcharka", "Spanish Mastiff", "Spanish Water Dog", "Spinone Italiano", "Sporting Lucas Terrier", "Stabyhoun", "Staffordshire Bull Terrier", "Standard Schnauzer", "Stephens Stock", "Styrian Coarse-haired Hound", "Sussex Spaniel", "Swedish Elkhound", "Swedish Lapphund", "Swedish Vallhund", "Swedish White Elkhound", "Taigan", "Taiwan Dog", "Tamaskan Dog", "Teddy Roosevelt Terrier", "Telomian", "Tenterfield Terrier", "Terrier Brasileiro", "Thai Bangkaew Dog", "Thai Ridgeback", "Tibetan Mastiff", "Tibetan Spaniel", "Tibetan Terrier", "Tornjak", "Tosa", "Toy Fox Terrier", "Toy Manchester Terrier", "Transylvanian Hound", "Treeing Cur", "Treeing Feist", "Treeing Tennessee Brindle", "Treeing Walker Coonhound", "Trigg Hound", "Tyrolean Hound", "Vikhan", "Villano de Las Encartaciones", "Villanuco de Las Encartaciones", "Vizsla", "Volpino Italiano", "Weimaraner", "Welsh Sheepdog", "Welsh Springer Spaniel", "Welsh Terrier", "West Highland White Terrier", "West Siberian Laika", "Westphalian Dachsbracke", "Wetterhoun", "Whippet", "White Shepherd", "White Swiss Shepherd Dog", "Wire Fox Terrier", "Wirehaired Pointing Griffon", "Wirehaired Vizsla", "Xiasi Dog", "Xoloitzcuintli", "Yakutian Laika", "Yorkshire Terrier", "Šarplaninac"], mm = ["Alaska pollock", "Albacore", "Amur catfish", "Araucanian herring", "Argentine hake", "Asari", "Asian swamp eel", "Atlantic cod", "Atlantic herring", "Atlantic horse mackerel", "Atlantic mackerel", "Atlantic menhaden", "Atlantic salmon", "Bigeye scad", "Bigeye tuna", "Bighead carp", "Black carp", "Blood cockle", "Blue swimming crab", "Blue whiting", "Bombay-duck", "Bonga shad", "California pilchard", "Cape horse mackerel", "Capelin", "Catla", "Channel catfish", "Chilean jack mackerel", "Chinese perch", "Chinese softshell turtle", "Chub mackerel", "Chum salmon", "Common carp", "Crucian carp", "Daggertooth pike conger", "European anchovy", "European pilchard", "European sprat", "Filipino Venus", "Gazami crab", "Goldstripe sardinella", "Grass carp", "Gulf menhaden", "Haddock", "Hilsa shad", "Indian mackerel", "Indian oil sardine", "Iridescent shark", "Japanese anchovy", "Japanese cockle", "Japanese common catfish", "Japanese flying squid", "Japanese jack mackerel", "Japanese littleneck", "Japanese pilchard", "Jumbo flying squid", "Kawakawa", "Korean bullhead", "Largehead hairtail", "Longtail tuna", "Madeiran sardinella", "Mandarin fish", "Milkfish", "Mrigal carp", "Narrow-barred Spanish mackerel", "Nile perch", "Nile tilapia", "North Pacific hake", "Northern snakehead", "Pacific anchoveta", "Pacific cod", "Pacific herring", "Pacific sand lance", "Pacific sandlance", "Pacific saury", "Pacific thread herring", "Peruvian anchoveta", "Pink salmon", "Pollock", "Pond loach", "Rainbow trout", "Rohu", "Round sardinella", "Short mackerel", "Silver carp", "Silver cyprinid", "Skipjack tuna", "Southern African anchovy", "Southern rough shrimp", "Whiteleg shrimp", "Wuchang bream", "Yellow croaker", "Yellowfin tuna", "Yellowhead catfish", "Yellowstripe scad"], pm = ["Abaco Barb", "Abtenauer", "Abyssinian", "Aegidienberger", "Akhal-Teke", "Albanian Horse", "Altai Horse", "Altèr Real", "American Albino", "American Cream Draft", "American Indian Horse", "American Paint Horse", "American Quarter Horse", "American Saddlebred", "American Warmblood", "Andalusian Horse", "Andravida Horse", "Anglo-Arabian", "Anglo-Arabo-Sardo", "Anglo-Kabarda", "Appaloosa", "AraAppaloosa", "Arabian Horse", "Ardennes Horse", "Arenberg-Nordkirchen", "Argentine Criollo", "Asian wild Horse", "Assateague Horse", "Asturcón", "Augeron", "Australian Brumby", "Australian Draught Horse", "Australian Stock Horse", "Austrian Warmblood", "Auvergne Horse", "Auxois", "Azerbaijan Horse", "Azteca Horse", "Baise Horse", "Bale", "Balearic Horse", "Balikun Horse", "Baluchi Horse", "Banker Horse", "Barb Horse", "Bardigiano", "Bashkir Curly", "Basque Mountain Horse", "Bavarian Warmblood", "Belgian Half-blood", "Belgian Horse", "Belgian Warmblood", "Bhutia Horse", "Black Forest Horse", "Blazer Horse", "Boerperd", "Borana", "Boulonnais Horse", "Brabant", "Brandenburger", "Brazilian Sport Horse", "Breton Horse", "Brumby", "Budyonny Horse", "Burguete Horse", "Burmese Horse", "Byelorussian Harness Horse", "Calabrese Horse", "Camargue Horse", "Camarillo White Horse", "Campeiro", "Campolina", "Canadian Horse", "Canadian Pacer", "Carolina Marsh Tacky", "Carthusian Horse", "Caspian Horse", "Castilian Horse", "Castillonnais", "Catria Horse", "Cavallo Romano della Maremma Laziale", "Cerbat Mustang", "Chickasaw Horse", "Chilean Corralero", "Choctaw Horse", "Cleveland Bay", "Clydesdale Horse", "Cob", "Coldblood Trotter", "Colonial Spanish Horse", "Colorado Ranger", "Comtois Horse", "Corsican Horse", "Costa Rican Saddle Horse", "Cretan Horse", "Criollo Horse", "Croatian Coldblood", "Cuban Criollo", "Cumberland Island Horse", "Curly Horse", "Czech Warmblood", "Daliboz", "Danish Warmblood", "Danube Delta Horse", "Dole Gudbrandsdal", "Don", "Dongola Horse", "Draft Trotter", "Dutch Harness Horse", "Dutch Heavy Draft", "Dutch Warmblood", "Dzungarian Horse", "East Bulgarian", "East Friesian Horse", "Estonian Draft", "Estonian Horse", "Falabella", "Faroese", "Finnhorse", "Fjord Horse", "Fleuve", "Florida Cracker Horse", "Foutanké", "Frederiksborg Horse", "Freiberger", "French Trotter", "Friesian Cross", "Friesian Horse", "Friesian Sporthorse", "Furioso-North Star", "Galiceño", "Galician Pony", "Gelderland Horse", "Georgian Grande Horse", "German Warmblood", "Giara Horse", "Gidran", "Groningen Horse", "Gypsy Horse", "Hackney Horse", "Haflinger", "Hanoverian Horse", "Heck Horse", "Heihe Horse", "Henson Horse", "Hequ Horse", "Hirzai", "Hispano-Bretón", "Holsteiner Horse", "Horro", "Hungarian Warmblood", "Icelandic Horse", "Iomud", "Irish Draught", "Irish Sport Horse sometimes called Irish Hunter", "Italian Heavy Draft", "Italian Trotter", "Jaca Navarra", "Jeju Horse", "Jutland Horse", "Kabarda Horse", "Kafa", "Kaimanawa Horses", "Kalmyk Horse", "Karabair", "Karabakh Horse", "Karachai Horse", "Karossier", "Kathiawari", "Kazakh Horse", "Kentucky Mountain Saddle Horse", "Kiger Mustang", "Kinsky Horse", "Kisber Felver", "Kiso Horse", "Kladruber", "Knabstrupper", "Konik", "Kundudo", "Kustanair", "Kyrgyz Horse", "Latvian Horse", "Lipizzan", "Lithuanian Heavy Draught", "Lokai", "Losino Horse", "Lusitano", "Lyngshest", "M'Bayar", "M'Par", "Mallorquín", "Malopolski", "Mangalarga", "Mangalarga Marchador", "Maremmano", "Marismeño Horse", "Marsh Tacky", "Marwari Horse", "Mecklenburger", "Menorquín", "Messara Horse", "Metis Trotter", "Mezőhegyesi Sport Horse", "Međimurje Horse", "Miniature Horse", "Misaki Horse", "Missouri Fox Trotter", "Monchina", "Mongolian Horse", "Mongolian Wild Horse", "Monterufolino", "Morab", "Morgan Horse", "Mountain Pleasure Horse", "Moyle Horse", "Murakoz Horse", "Murgese", "Mustang Horse", "Mérens Horse", "Namib Desert Horse", "Nangchen Horse", "National Show Horse", "Nez Perce Horse", "Nivernais Horse", "Nokota Horse", "Noma", "Nonius Horse", "Nooitgedachter", "Nordlandshest", "Noriker Horse", "Norman Cob", "North American Single-Footer Horse", "North Swedish Horse", "Norwegian Coldblood Trotter", "Norwegian Fjord", "Novokirghiz", "Oberlander Horse", "Ogaden", "Oldenburg Horse", "Orlov trotter", "Ostfriesen", "Paint", "Pampa Horse", "Paso Fino", "Pentro Horse", "Percheron", "Persano Horse", "Peruvian Paso", "Pintabian", "Pleven Horse", "Poitevin Horse", "Posavac Horse", "Pottok", "Pryor Mountain Mustang", "Przewalski's Horse", "Pura Raza Española", "Purosangue Orientale", "Qatgani", "Quarab", "Quarter Horse", "Racking Horse", "Retuerta Horse", "Rhenish German Coldblood", "Rhinelander Horse", "Riwoche Horse", "Rocky Mountain Horse", "Romanian Sporthorse", "Rottaler", "Russian Don", "Russian Heavy Draft", "Russian Trotter", "Saddlebred", "Salerno Horse", "Samolaco Horse", "San Fratello Horse", "Sarcidano Horse", "Sardinian Anglo-Arab", "Schleswig Coldblood", "Schwarzwälder Kaltblut", "Selale", "Sella Italiano", "Selle Français", "Shagya Arabian", "Shan Horse", "Shire Horse", "Siciliano Indigeno", "Silesian Horse", "Sokolsky Horse", "Sorraia", "South German Coldblood", "Soviet Heavy Draft", "Spanish Anglo-Arab", "Spanish Barb", "Spanish Jennet Horse", "Spanish Mustang", "Spanish Tarpan", "Spanish-Norman Horse", "Spiti Horse", "Spotted Saddle Horse", "Standardbred Horse", "Suffolk Punch", "Swedish Ardennes", "Swedish Warmblood", "Swedish coldblood trotter", "Swiss Warmblood", "Taishū Horse", "Takhi", "Tawleed", "Tchernomor", "Tennessee Walking Horse", "Tersk Horse", "Thoroughbred", "Tiger Horse", "Tinker Horse", "Tolfetano", "Tori Horse", "Trait Du Nord", "Trakehner", "Tsushima", "Tuigpaard", "Ukrainian Riding Horse", "Unmol Horse", "Uzunyayla", "Ventasso Horse", "Virginia Highlander", "Vlaamperd", "Vladimir Heavy Draft", "Vyatka", "Waler", "Waler Horse", "Walkaloosa", "Warlander", "Warmblood", "Welsh Cob", "Westphalian Horse", "Wielkopolski", "Württemberger", "Xilingol Horse", "Yakutian Horse", "Yili Horse", "Yonaguni Horse", "Zaniskari", "Zhemaichu", "Zweibrücker", "Žemaitukas"], Fm = ["Acacia-ants", "Acorn-plum gall", "Aerial yellowjacket", "Africanized honey bee", "Allegheny mound ant", "Almond stone wasp", "Ant", "Arboreal ant", "Argentine ant", "Asian paper wasp", "Baldfaced hornet", "Bee", "Bigheaded ant", "Black and yellow mud dauber", "Black carpenter ant", "Black imported fire ant", "Blue horntail woodwasp", "Blue orchard bee", "Braconid wasp", "Bumble bee", "Carpenter ant", "Carpenter wasp", "Chalcid wasp", "Cicada killer", "Citrus blackfly parasitoid", "Common paper wasp", "Crazy ant", "Cuckoo wasp", "Cynipid gall wasp", "Eastern Carpenter bee", "Eastern yellowjacket", "Elm sawfly", "Encyrtid wasp", "Erythrina gall wasp", "Eulophid wasp", "European hornet", "European imported fire ant", "False honey ant", "Fire ant", "Forest bachac", "Forest yellowjacket", "German yellowjacket", "Ghost ant", "Giant ichneumon wasp", "Giant resin bee", "Giant wood wasp", "Golden northern bumble bee", "Golden paper wasp", "Gouty oak gall", "Grass Carrying Wasp", "Great black wasp", "Great golden digger wasp", "Hackberry nipple gall parasitoid", "Honey bee", "Horned oak gall", "Horse guard wasp", "Hunting wasp", "Ichneumonid wasp", "Keyhole wasp", "Knopper gall", "Large garden bumble bee", "Large oak-apple gall", "Leafcutting bee", "Little fire ant", "Little yellow ant", "Long-horned bees", "Long-legged ant", "Macao paper wasp", "Mallow bee", "Marble gall", "Mossyrose gall wasp", "Mud-daubers", "Multiflora rose seed chalcid", "Oak apple gall wasp", "Oak rough bulletgall wasp", "Oak saucer gall", "Oak shoot sawfly", "Odorous house ant", "Orange-tailed bumble bee", "Orangetailed potter wasp", "Oriental chestnut gall wasp", "Paper wasp", "Pavement ant", "Pigeon tremex", "Pip gall wasp", "Prairie yellowjacket", "Pteromalid wasp", "Pyramid ant", "Raspberry Horntail", "Red ant", "Red carpenter ant", "Red harvester ant", "Red imported fire ant", "Red wasp", "Red wood ant", "Red-tailed wasp", "Reddish carpenter ant", "Rough harvester ant", "Sawfly parasitic wasp", "Scale parasitoid", "Silky ant", "Sirex woodwasp", "Siricid woodwasp", "Smaller yellow ant", "Southeastern blueberry bee", "Southern fire ant", "Southern yellowjacket", "Sphecid wasp", "Stony gall", "Sweat bee", "Texas leafcutting ant", "Tiphiid wasp", "Torymid wasp", "Tramp ant", "Valentine ant", "Velvet ant", "Vespid wasp", "Weevil parasitoid", "Western harvester ant", "Western paper wasp", "Western thatching ant", "Western yellowjacket", "White-horned horntail", "Willow shoot sawfly", "Woodwasp", "Wool sower gall maker", "Yellow Crazy Ant", "Yellow and black potter wasp", "Yellow-horned horntail"], gm = ["Asiatic Lion", "Barbary Lion", "Cape lion", "Masai Lion", "Northeast Congo Lion", "Transvaal lion", "West African Lion"], ym = ["Ace", "Archie", "Bailey", "Bandit", "Bella", "Bentley", "Bruno", "Buddy", "Charlie", "Coco", "Cookie", "Cooper", "Daisy", "Dixie", "Finn", "Ginger", "Gracie", "Gus", "Hank", "Jack", "Jax", "Joey", "Kobe", "Leo", "Lola", "Louie", "Lucy", "Maggie", "Max", "Mia", "Milo", "Molly", "Murphey", "Nala", "Nova", "Ollie", "Oreo", "Rosie", "Scout", "Stella", "Teddy", "Tuffy"], fm = ["American", "American Chinchilla", "American Fuzzy Lop", "American Sable", "Argente Brun", "Belgian Hare", "Beveren", "Blanc de Hotot", "Britannia Petite", "Californian", "Champagne D’Argent", "Checkered Giant", "Cinnamon", "Crème D’Argent", "Dutch", "Dwarf Hotot", "English Angora", "English Lop", "English Spot", "Flemish Giant", "Florida White", "French Angora", "French Lop", "Giant Angora", "Giant Chinchilla", "Harlequin", "Havana", "Himalayan", "Holland Lop", "Jersey Wooly", "Lilac", "Lionhead", "Mini Lop", "Mini Rex", "Mini Satin", "Netherland Dwarf", "New Zealand", "Palomino", "Polish", "Rex", "Rhinelander", "Satin", "Satin Angora", "Silver", "Silver Fox", "Silver Marten", "Standard Chinchilla", "Tan", "Thrianta"], bm = ["Abrocoma", "Abrocoma schistacea", "Aconaemys", "Aconaemys porteri", "African brush-tailed porcupine", "Andean mountain cavy", "Argentine tuco-tuco", "Ashy chinchilla rat", "Asiatic brush-tailed porcupine", "Atherurus", "Azara's agouti", "Azara's tuco-tuco", "Bahia porcupine", "Bathyergus", "Bathyergus janetta", "Bathyergus suillus", "Bennett's chinchilla rat", "Bicolored-spined porcupine", "Black agouti", "Black dwarf porcupine", "Black-rumped agouti", "Black-tailed hairy dwarf porcupine", "Bolivian chinchilla rat", "Bolivian tuco-tuco", "Bonetto's tuco-tuco", "Brandt's yellow-toothed cavy", "Brazilian guinea pig", "Brazilian porcupine", "Brazilian tuco-tuco", "Bridge's degu", "Brown hairy dwarf porcupine", "Budin's chinchilla rat, A. budini", "Cape porcupine", "Catamarca tuco-tuco", "Cavia", "Central American agouti", "Chacoan tuco-tuco", "Chilean rock rat", "Chinchilla", "Coendou", "Coiban agouti", "Colburn's tuco-tuco", "Collared tuco-tuco", "Common degu", "Common yellow-toothed cavy", "Conover's tuco-tuco", "Coruro", "Crested agouti", "Crested porcupine", "Cryptomys", "Cryptomys bocagei", "Cryptomys damarensis", "Cryptomys foxi", "Cryptomys hottentotus", "Cryptomys mechowi", "Cryptomys ochraceocinereus", "Cryptomys zechi", "Ctenomys", "Cuniculus", "Cuscomys", "Cuscomys ashanika", "Dactylomys", "Dactylomys boliviensis", "Dactylomys dactylinus", "Dactylomys peruanus", "Dasyprocta", "Domestic guinea pig", "Emily's tuco-tuco", "Erethizon", "Famatina chinchilla rat", "Frosted hairy dwarf porcupine", "Fukomys", "Fukomys amatus", "Fukomys anselli", "Fukomys bocagei", "Fukomys damarensis", "Fukomys darlingi", "Fukomys foxi", "Fukomys ilariae", "Fukomys kafuensis", "Fukomys mechowii", "Fukomys micklemi", "Fukomys occlusus", "Fukomys ochraceocinereus", "Fukomys whytei", "Fukomys zechi", "Furtive tuco-tuco", "Galea", "Georychus", "Georychus capensis", "Golden viscacha-rat", "Goya tuco-tuco", "Greater guinea pig", "Green acouchi", "Haig's tuco-tuco", "Heliophobius", "Heliophobius argenteocinereus", "Heterocephalus", "Heterocephalus glaber", "Highland tuco-tuco", "Hystrix", "Indian porcupine", "Isla Mocha degu", "Kalinowski agouti", "Kannabateomys", "Kannabateomys amblyonyx", "Lagidium", "Lagostomus", "Lewis' tuco-tuco", "Long-tailed chinchilla", "Long-tailed porcupine", "Los Chalchaleros' viscacha-rat", "Lowland paca", "Magellanic tuco-tuco", "Malayan porcupine", "Maule tuco-tuco", "Mendoza tuco-tuco", "Mexican agouti", "Mexican hairy dwarf porcupine", "Microcavia", "Montane guinea pig", "Moon-toothed degu", "Mottled tuco-tuco", "Mountain degu", "Mountain paca", "Mountain viscacha-rat", "Myoprocta", "Natterer's tuco-tuco", "North American porcupine", "Northern viscacha", "Octodon", "Octodontomys", "Octomys", "Olallamys", "Olallamys albicauda", "Olallamys edax", "Orinoco agouti", "Paraguaian hairy dwarf porcupine", "Pearson's tuco-tuco", "Peruvian tuco-tuco", "Philippine porcupine", "Pipanacoctomys", "Plains viscacha", "Plains viscacha-rat", "Porteous' tuco-tuco", "Punta de Vacas chinchilla rat", "Red acouchi", "Red-rumped agouti", "Reddish tuco-tuco", "Rio Negro tuco-tuco", "Robust tuco-tuco", "Roosmalen's dwarf porcupine", "Rothschild's porcupine", "Ruatan Island agouti", "Sage's rock rat", "Salinoctomys", "Salta tuco-tuco", "San Luis tuco-tuco", "Santa Catarina's guinea pig", "Shiny guinea pig", "Shipton's mountain cavy", "Short-tailed chinchilla", "Silky tuco-tuco", "Social tuco-tuco", "Southern mountain cavy", "Southern tuco-tuco", "Southern viscacha", "Spalacopus", "Spix's yellow-toothed cavy", "Steinbach's tuco-tuco", "Streaked dwarf porcupine", "Strong tuco-tuco", "Stump-tailed porcupine", "Sumatran porcupine", "Sunda porcupine", "Talas tuco-tuco", "Tawny tuco-tuco", "Thick-spined porcupine", "Tiny tuco-tuco", "Trichys", "Tucuman tuco-tuco", "Tympanoctomys", "Uspallata chinchilla rat", "White-toothed tuco-tuco", "Wolffsohn's viscacha"], Cm = ["Abaco Island boa", "Aesculapian snake", "African beaked snake", "African puff adder", "African rock python", "African twig snake", "African wolf snake", "Amazon tree boa", "Amazonian palm viper", "American Vine Snake", "American copperhead", "Amethystine python", "Anaconda", "Andaman cat snake", "Andaman cobra", "Angolan python", "Annulated sea snake", "Arabian cobra", "Arafura file snake", "Arizona black rattlesnake", "Arizona coral snake", "Aruba rattlesnake", "Asian Vine Snake, Whip Snake", "Asian cobra", "Asian keelback", "Asian pipe snake", "Asp", "Asp viper", "Assam keelback", "Australian copperhead", "Australian scrub python", "Baird's rat snake", "Baja California lyresnake", "Ball Python", "Ball python", "Bamboo pitviper", "Bamboo viper", "Banded Flying Snake", "Banded cat-eyed snake", "Banded krait", "Banded pitviper", "Banded water cobra", "Barbour's pit viper", "Barred wolf snake", "Beaked sea snake", "Beauty rat snake", "Beddome's cat snake", "Beddome's coral snake", "Bimini racer", "Bird snake", "Bismarck ringed python", "Black headed python", "Black krait", "Black mamba", "Black rat snake", "Black snake", "Black tree cobra", "Black-banded trinket snake", "Black-headed snake", "Black-necked cobra", "Black-necked spitting cobra", "Black-speckled palm-pitviper", "Black-striped keelback", "Black-tailed horned pit viper", "Blanding's tree snake", "Blind snake", "Blonde hognose snake", "Blood python", "Blue krait", "Blunt-headed tree snake", "Bluntnose viper", "Boa", "Boa constrictor", "Bocourt's water snake", "Boelen python", "Boiga", "Bolivian anaconda", "Boomslang", "Bornean pitviper", "Borneo short-tailed python", "Brahminy blind snake", "Brazilian coral snake", "Brazilian mud Viper", "Brazilian smooth snake", "Bredl's python", "Brongersma's pitviper", "Brown snake", "Brown spotted pitviper[4]", "Brown tree snake", "Brown water python", "Brown white-lipped python", "Buff striped keelback", "Bull snake", "Burmese keelback", "Burmese krait", "Burmese python", "Burrowing cobra", "Burrowing viper", "Bush viper", "Bushmaster", "Buttermilk racer", "Calabar python", "California kingsnake", "Canebrake", "Cantil", "Cantor's pitviper", "Cape cobra", "Cape coral snake", "Cape gopher snake", "Carpet viper", "Cascabel", "Caspian cobra", "Cat snake", "Cat-eyed night snake", "Cat-eyed snake", "Central American lyre snake", "Central ranges taipan", "Centralian carpet python", "Ceylon krait", "Chappell Island tiger snake", "Checkered garter snake", "Checkered keelback", "Chicken snake", "Chihuahuan ridge-nosed rattlesnake", "Children's python", "Chinese tree viper", "Coachwhip snake", "Coastal carpet python", "Coastal taipan", "Cobra", "Collett's snake", "Colorado desert sidewinder", "Common adder", "Common cobra", "Common garter snake", "Common ground snake", "Common keelback", "Common lancehead", "Common tiger snake", "Common worm snake", "Congo snake", "Congo water cobra", "Copperhead", "Coral snake", "Corn snake", "Coronado Island rattlesnake", "Cottonmouth", "Crossed viper", "Crowned snake", "Cuban boa", "Cuban wood snake", "Cyclades blunt-nosed viper", "Dauan Island water python", "De Schauensee's anaconda", "Death Adder", "Desert death adder", "Desert kingsnake", "Desert woma python", "Diamond python", "Dog-toothed cat snake", "Down's tiger snake", "Dubois's sea snake", "Dumeril's boa", "Durango rock rattlesnake", "Dusky pigmy rattlesnake", "Dusty hognose snake", "Dwarf beaked snake", "Dwarf boa", "Dwarf pipe snake", "Dwarf sand adder", "Eastern brown snake", "Eastern coral snake", "Eastern diamondback rattlesnake", "Eastern green mamba", "Eastern hognose snake", "Eastern lyre snake", "Eastern mud snake", "Eastern racer", "Eastern tiger snake", "Eastern water cobra", "Eastern yellowbelly sad racer", "Egg-eater", "Egyptian asp", "Egyptian cobra", "Elegant pitviper", "Emerald tree boa", "Equatorial spitting cobra", "European asp", "European smooth snake", "Eyelash palm-pitviper", "Eyelash pit viper", "Eyelash viper", "False cobra", "False horned viper", "False water cobra", "Fan-Si-Pan horned pitviper", "Fea's viper", "Fer-de-lance", "Fierce snake", "Fifty pacer", "Fishing snake", "Flat-nosed pitviper", "Flinders python", "Flying snake", "Forest cobra", "Forest flame snake", "Forsten's cat snake", "Fox snake, three species of Pantherophis", "Gaboon viper", "Garter snake", "Giant Malagasy hognose snake", "Godman's pit viper", "Gold tree cobra", "Gold-ringed cat snake", "Golden tree snake", "Grand Canyon rattlesnake", "Grass snake", "Gray cat snake", "Great Basin rattlesnake", "Great Lakes bush viper", "Great Plains rat snake", "Green anaconda", "Green cat-eyed snake", "Green mamba", "Green palm viper", "Green rat snake", "Green snake", "Green tree pit viper", "Green tree python", "Grey Lora", "Grey-banded kingsnake", "Ground snake", "Guatemalan palm viper", "Guatemalan tree viper", "Habu", "Habu pit viper", "Hagen's pitviper", "Hairy bush viper", "Halmahera python", "Hardwicke's sea snake", "Harlequin coral snake", "High Woods coral snake", "Hill keelback", "Himalayan keelback", "Hogg Island boa", "Hognose snake", "Hognosed viper", "Honduran palm viper", "Hook Nosed Sea Snake", "Hopi rattlesnake", "Horned adder", "Horned desert viper", "Horned viper", "Horseshoe pitviper", "Hundred pacer", "Hutton's tree viper", "Ikaheka snake", "Indian cobra", "Indian flying snake", "Indian krait", "Indian python", "Indian tree viper", "Indigo snake", "Indochinese spitting cobra", "Indonesian water python", "Inland carpet python", "Inland taipan", "Jamaican Tree Snake", "Jamaican boa", "Jan's hognose snake", "Japanese forest rat snake", "Japanese rat snake", "Japanese striped snake", "Javan spitting cobra", "Jerdon's pitviper", "Jumping viper", "Jungle carpet python", "Kanburian pit viper", "Kaulback's lance-headed pitviper", "Kayaudi dwarf reticulated python", "Kaznakov's viper", "Keelback", "Kham Plateau pitviper", "Khasi Hills keelback", "King Island tiger snake", "King brown", "King cobra", "King rat snake", "King snake", "Krait", "Krefft's tiger snake", "Lance-headed rattlesnake", "Lancehead", "Large shield snake", "Large-eyed pitviper", "Large-scaled tree viper", "Leaf viper", "Leaf-nosed viper", "Lesser black krait", "Levant viper", "Long-nosed adder", "Long-nosed tree snake", "Long-nosed viper", "Long-nosed whip snake", "Long-tailed rattlesnake", "Longnosed worm snake", "Lora", "Lyre snake", "Machete savane", "Macklot's python", "Madagascar ground boa", "Madagascar tree boa", "Malabar rock pitviper", "Malayan krait", "Malayan long-glanded coral snake", "Malayan pit viper", "Malcolm's tree viper", "Mamba", "Mamushi", "Manchurian Black Water Snake", "Mandalay cobra", "Mandarin rat snake", "Mangrove pit viper", "Mangrove snake", "Mangshan pitviper", "Many-banded krait", "Many-banded tree snake", "Many-horned adder", "Many-spotted cat snake", "Massasauga rattlesnake", "McMahon's viper", "Mexican black kingsnake", "Mexican green rattlesnake", "Mexican hognose snake", "Mexican palm-pitviper", "Mexican parrot snake", "Mexican racer", "Mexican vine snake", "Mexican west coast rattlesnake", "Midget faded rattlesnake", "Milk snake", "Moccasin snake", "Modest keelback", "Mojave desert sidewinder", "Mojave rattlesnake", "Mole viper", "Mollucan python", "Moluccan flying snake", "Montpellier snake", "Motuo bamboo pitviper", "Mountain adder", "Mozambique spitting cobra", "Mud adder", "Mud snake", "Mussurana", "Namaqua dwarf adder", "Namib dwarf sand adder", "Narrowhead Garter Snake", "New Guinea carpet python", "Nichell snake", "Nicobar Island keelback", "Nicobar bamboo pitviper", "Night snake", "Nightingale adder", "Nilgiri keelback", "Nitsche's bush viper", "Nitsche's tree viper", "North Philippine cobra", "North eastern king snake", "Northeastern hill krait", "Northern black-tailed rattlesnake", "Northern tree snake", "Northern water snake", "Northern white-lipped python", "Northwestern carpet python", "Nose-horned viper", "Nubian spitting cobra", "Oaxacan small-headed rattlesnake", "Oenpelli python", "Olive python", "Olive sea snake", "Orange-collared keelback", "Ornate flying snake", "Palestine viper", "Pallas' viper", "Palm viper", "Papuan python", "Paradise flying snake", "Parrot snake", "Patchnose snake", "Paupan taipan", "Pelagic sea snake", "Peninsula tiger snake", "Peringuey's adder", "Perrotet's shieldtail snake", "Persian rat snake", "Philippine cobra", "Philippine pitviper", "Pine snake", "Pipe snake", "Pit viper", "Pointed-scaled pit viper[5]", "Pope's tree viper", "Portuguese viper", "Prairie kingsnake", "Puerto Rican boa", "Puff adder", "Pygmy python", "Python", "Queen snake", "Racer", "Raddysnake", "Rainbow boa", "Rat snake", "Rattler", "Rattlesnake", "Red blood python", "Red diamond rattlesnake", "Red spitting cobra", "Red-backed rat snake", "Red-bellied black snake", "Red-headed krait", "Red-necked keelback", "Red-tailed bamboo pitviper", "Red-tailed boa", "Red-tailed pipe snake", "Reticulated python", "Rhinoceros viper", "Rhombic night adder", "Ribbon snake", "Rinkhals", "Rinkhals cobra", "River jack", "Rosy boa", "Rough green snake", "Rough-scaled bush viper", "Rough-scaled python", "Rough-scaled tree viper", "Royal python", "Rubber boa", "Rufous beaked snake", "Rungwe tree viper", "San Francisco garter snake", "Sand adder", "Sand boa", "Savu python", "Saw-scaled viper", "Scarlet kingsnake", "Schlegel's viper", "Schultze's pitviper", "Sea snake", "Sedge viper", "Selayer reticulated python", "Sharp-nosed viper", "Shield-nosed cobra", "Shield-tailed snake", "Siamese palm viper", "Side-striped palm-pitviper", "Sidewinder", "Sikkim keelback", "Sinai desert cobra", "Sind krait", "Small-eyed snake", "Smooth green snake", "Smooth snake", "Snorkel viper", "Snouted cobra", "Sonoran sidewinder", "South American hognose snake", "South eastern corn snake", "Southern Indonesian spitting cobra", "Southern Pacific rattlesnake", "Southern Philippine cobra", "Southern black racer", "Southern white-lipped python", "Southwestern black spitting cobra", "Southwestern blackhead snake", "Southwestern carpet python", "Southwestern speckled rattlesnake", "Speckle-bellied keelback", "Speckled kingsnake", "Spectacled cobra", "Spiny bush viper", "Spitting cobra", "Spotted python", "Sri Lankan pit viper", "Stejneger's bamboo pitviper", "Stiletto snake", "Stimson's python", "Stoke's sea snake", "Storm water cobra", "Striped snake", "Sumatran short-tailed python", "Sumatran tree viper", "Sunbeam snake", "Taipan", "Taiwan cobra", "Tan racer", "Tancitaran dusky rattlesnake", "Tanimbar python", "Tasmanian tiger snake", "Tawny cat snake", "Temple pit viper", "Temple viper", "Tentacled snake", "Texas Coral Snake", "Texas blind snake", "Texas garter snake", "Texas lyre snake", "Texas night snake", "Thai cobra", "Three-lined ground snake", "Tibetan bamboo pitviper", "Tic polonga", "Tiger pit viper", "Tiger rattlesnake", "Tiger snake", "Tigre snake", "Timber rattlesnake", "Timor python", "Titanboa", "Tree boa", "Tree snake", "Tree viper", "Trinket snake", "Tropical rattlesnake", "Twig snake", "Twin Headed King Snake", "Twin-Barred tree snake", "Twin-spotted rat snake", "Twin-spotted rattlesnake", "Undulated pit viper", "Uracoan rattlesnake", "Ursini's viper", "Urutu", "Vine snake", "Viper", "Viper Adder", "Vipera ammodytes", "Wagler's pit viper", "Wart snake", "Water adder", "Water moccasin", "Water snake", "West Indian racer", "Western blind snake", "Western carpet python", "Western coral snake", "Western diamondback rattlesnake", "Western green mamba", "Western ground snake", "Western hog-nosed viper", "Western mud snake", "Western tiger snake", "Western woma python", "Wetar Island python", "Whip snake", "White-lipped keelback", "White-lipped python", "White-lipped tree viper", "Wirot's pit viper", "Wolf snake", "Woma python", "Worm snake", "Wutu", "Wynaad keelback", "Yarara", "Yellow anaconda", "Yellow-banded sea snake", "Yellow-bellied sea snake", "Yellow-lined palm viper", "Yellow-lipped sea snake", "Yellow-striped rat snake", "Yunnan keelback", "Zebra snake", "Zebra spitting cobra"], vm = ["bat", "bear", "bee", "bird", "butterfly", "cat", "cow", "crocodile", "deer", "dog", "dolphin", "eagle", "elephant", "fish", "flamingo", "fox", "frog", "gecko", "giraffe", "gorilla", "hamster", "hippopotamus", "horse", "kangaroo", "koala", "lion", "monkey", "ostrich", "panda", "parrot", "peacock", "penguin", "polar bear", "rabbit", "rhinoceros", "sea lion", "shark", "snake", "squirrel", "tiger", "turtle", "whale", "wolf", "zebra"], km = { bear: om, bird: sm, cat: lm, cetacean: um, cow: cm, crocodilia: dm, dog: hm, fish: mm, horse: pm, insect: Fm, lion: gm, pet_name: ym, rabbit: fm, rodent: bm, snake: Cm, type: vm }, Am = km, Sm = ["{{person.name}}", "{{company.name}}"], wm = ["Redhold", "Treeflex", "Trippledex", "Kanlam", "Bigtax", "Daltfresh", "Toughjoyfax", "Mat Lam Tam", "Otcom", "Tres-Zap", "Y-Solowarm", "Tresom", "Voltsillam", "Biodex", "Greenlam", "Viva", "Matsoft", "Temp", "Zoolab", "Subin", "Rank", "Job", "Stringtough", "Tin", "It", "Home Ing", "Zamit", "Sonsing", "Konklab", "Alpha", "Latlux", "Voyatouch", "Alphazap", "Holdlamis", "Zaam-Dox", "Sub-Ex", "Quo Lux", "Bamity", "Ventosanzap", "Lotstring", "Hatity", "Tempsoft", "Overhold", "Fixflex", "Konklux", "Zontrax", "Tampflex", "Span", "Namfix", "Transcof", "Stim", "Fix San", "Sonair", "Stronghold", "Fintone", "Y-find", "Opela", "Lotlux", "Ronstring", "Zathin", "Duobam", "Keylex"], Em = ["0.#.#", "0.##", "#.##", "#.#", "#.#.#"], Dm = { author: Sm, name: wm, version: Em }, Bm = Dm, Tm = ["A.A. Milne", "Agatha Christie", "Alan Moore and Dave Gibbons", "Albert Camus", "Aldous Huxley", "Alexander Pope", "Alexandre Dumas", "Alice Walker", "Andrew Lang", "Anne Frank", "Anthony Burgess", "Anthony Trollope", "Antoine de Saint-Exupéry", "Anton Chekhov", "Anton Pavlovich Chekhov", "Arthur Conan Doyle", "Arthur Schopenhauer", "Aylmer Maude", "Ayn Rand", "Beatrix Potter", "Benjamin Disraeli", "Benjamin Jowett", "Bernard Shaw", "Bertrand Russell", "Bhagavanlal Indrajit", "Boris Pasternak", "Bram Stoker", "Brian Evenson", "C.E. Brock", "C.S. Lewis", "Carson McCallers", "Charles Dickens", "Charles E. Derbyshire", "Charlotte Brontë", "Charlotte Perkins Gilman", "Chinua Achebe", "Clifford R. Adams", "Constance Garnett", "Cormac McCarthy", "D.H. Lawrence", "Dan Brown", "Daniel Defoe", "Dante Alighieri", "Dashiell Hammett", "David Widger", "David Wyllie", "Dean Koontz", "Don DeLillo", "E.M. Forster", "Edgar Allan Poe", "Edgar Rice Burroughs", "Elizabeth Cleghorn Gaskell", "Elizabeth Von Arnim", "Emily Brontë", "Erich Remarque", "Ernest Hemingway", "Evelyn Waugh", "F. Scott Fitzgerald", "Ford Madox Ford", "Frances Hodgson Burnett", "Frank Herbert", "Frank T. Merrill", "Franz Kafka", "Friedrich Wilhelm Nietzsche", "Fyodor Dostoyevsky", "G.K. Chesterton", "Gabriel Garcia Marquez", "Geoffrey Chaucer", "George Eliot", "George Grossmith", "George Orwell", "George R. R. Martin", "George Saunders", "Grady Ward", "Graham Greene", "Gustave Doré", "Gustave Flaubert", "Guy de Maupassant", "Günter Grass", "H.G. Wells", "H.P. Lovecraft", "Harper Lee", "Harriet Beecher Stowe", "Haruki Murakami", "Henrik Ibsen", "Henry David Thoreau", "Henry Fielding", "Henry James", "Henry Miller", "Henry Morley", "Herman Melville", "Hermann Broch", "Homer", "Honoré de Balzac", "Ian McEwan", "Isabel Florence Hapgood", "Italo Calvino", "J.D. Salinger", "J.K. Rowling", "J.M. Barrie", "J.R.R. Tolkien", "Jack Kerouac", "Jack London", "Jacob Grimm", "Jacqueline Crooks", "James Baldwin", "James Dickey", "James Ellroy", "James Joyce", "James Patterson", "Jane Austen", "Johann Wolfgang von Goethe", "John Bunyan", "John Camden Hotten", "John Dos Passos", "John Green", "John Grisham", "John Kennedy Toole", "John Milton", "John Ormsby", "John Steinbeck", "John Updike", "Jonathan Franzen", "Jonathan Swift", "Joseph Conrad", "Joseph Heller", "José Rizal", "Judy Blume", "Jules Verne", "Junot Diaz", "Karl Marx", "Kazuo Ishiguro", "Ken Follett", "Ken Kesey", "Kenneth Grahame", "Khaled Hosseini", "Kingsley Amis", "Kurt Vonnegut", "L. Frank Baum", "L.M. Montgomery", "Laurence Sterne", "Leo Tolstoy", "Lewis Carroll", "Louisa May Alcott", "Louise Maude", "Malcolm Lowry", "Marcel Proust", "Margaret Atwood", "Margaret Mitchell", "Marilynne Robinson", "Mark Twain", "Martin Amis", "Mary Shelley", "Michael Chabon", "Miguel de Cervantes", "Mikhail Bulgakov", "Muriel Spark", "Nancy Mitford", "Nathanael West", "Nathaniel Hawthorne", "Neil Gaiman", "Niccolo Machiavelli", "Norman Mailer", "Oscar Levy", "Oscar Wilde", "P.G. Wodehouse", "Paulo Coelho", "Peter Carey", "Philip Pullman", "Philip Roth", "Plato", "R.L. Stine", "Rachel Kushner", "Ralph Ellison", "Ray Bradbury", "Raymond Chandler", "Richard Wagner", "Richard Wright", "Richard Yates", "Roald Dahl", "Robert Graves", "Robert Louis Stevenson", "Robert Penn Warren", "Rudyard Kipling", "Salman Rushdie", "Samuel Beckett", "Samuel Butler", "Samuel Richardson", "Saul Bellow", "Shivaram Parashuram Bhide", "Sir Arthur Conan Doyle", "Sir Richard Francis Burton", "Stendhal", "Stephen Hawking", "Stephen King", "Sun Tzu", "Suzanne Collins", "T. Smollett", "T.S. Eliot", "Theodore Alois Buckley", "Theodore Dreiser", "Thomas Hardy", "Thomas Love Peacock", "Thomas Mann", "Toni Morrison", "Truman Capote", "V.S. Naipaul", "Vance Packard", "Vatsyayana", "Victor Hugo", "Virgil", "Virginia Woolf", "Vladimir Nabokov", "Voltaire", "W.G. Sebald", "W.K. Marriott", "Walker Percy", "Walt Whitman", "Walter Scott", "Wilhelm Grimm", "Wilkie Collins", "William Faulkner", "William Gibson", "William Golding", "William Makepeace Thackeray", "William Shakespeare", "Zadie Smith"], Mm = ["Audiobook", "Ebook", "Hardcover", "Paperback"], Rm = ["Adventure", "Biography", "Business", "Children's Literature", "Classic", "Comedy", "Comic", "Detective", "Drama", "Fantasy", "Graphic Novel", "Historical Fiction", "Horror", "Memoir", "Mystery", "Mythology", "Philosophy", "Poetry", "Psychology", "Religion", "Romance", "Science Fiction", "Thriller", "Western", "Young Adult"], Im = ["Academic Press", "Ace Books", "Addison-Wesley", "Adis International", "Airiti Press", "Allen Ltd", "Andrews McMeel Publishing", "Anova Books", "Anvil Press Poetry", "Applewood Books", "Apress", "Athabasca University Press", "Atheneum Books", "Atheneum Publishers", "Atlantic Books", "Atlas Press", "BBC Books", "Ballantine Books", "Banner of Truth Trust", "Bantam Books", "Bantam Spectra", "Barrie & Jenkins", "Basic Books", "Belknap Press", "Bella Books", "Bellevue Literary Press", "Berg Publishers", "Berkley Books", "Bison Books", "Black Dog Publishing", "Black Library", "Black Sparrow Books", "Blackie and Son Limited", "Blackstaff Press", "Blackwell Publishing", "Bloodaxe Books", "Bloomsbury Publishing Plc", "Blue Ribbon Books", "Book League of America", "Book Works", "Booktrope", "Borgo Press", "Bowes & Bowes", "Boydell & Brewer", "Breslov Research Institute", "Brill", "Brimstone Press", "Broadview Press", "Burns & Oates", "Butterworth-Heinemann", "Caister Academic Press", "Cambridge University Press", "Candlewick Press", "Canongate Books", "Carcanet Press", "Carlton Books", "Carlton Publishing Group", "Carnegie Mellon University Press", "Casemate Publishers", "Cengage Learning", "Central European University Press", "Chambers Harrap", "Charles Scribner's Sons", "Chatto and Windus", "Chick Publications", "Chronicle Books", "Churchill Livingstone", "Cisco Press", "City Lights Publishers", "Cloverdale Corporation", "D. Appleton & Company", "D. Reidel", "DAW Books", "Da Capo Press", "Daedalus Publishing", "Dalkey Archive Press", "Darakwon Press", "David & Charles", "Dedalus Books", "Del Rey Books", "E. P. Dutton", "ECW Press", "Earthscan", "Edupedia Publications", "Eel Pie Publishing", "Eerdmans Publishing", "Ellora's Cave", "Elsevier", "Emerald Group Publishing", "Etruscan Press", "FabJob", "Faber and Faber", "Fairview Press", "Farrar, Straus & Giroux", "Fearless Books", "Felony & Mayhem Press", "Firebrand Books", "Flame Tree Publishing", "Focal Press", "G-Unit Books", "G. P. Putnam's Sons", "Gaspereau Press", "Gay Men's Press", "Gefen Publishing House", "George H. Doran Company", "George Newnes", "George Routledge & Sons", "Godwit Press", "Golden Cockerel Press", "HMSO", "Hachette Book Group USA", "Hackett Publishing Company", "Hamish Hamilton", "Happy House", "Harcourt Assessment", "Harcourt Trade Publishers", "Harlequin Enterprises Ltd", "Harper & Brothers", "Harper & Row", "HarperCollins", "HarperPrism", "HarperTrophy", "Harry N. Abrams, Inc.", "Harvard University Press", "Harvest House", "Harvill Press at Random House", "Hawthorne Books", "Hay House", "Haynes Manuals", "Heyday Books", "Hodder & Stoughton", "Hodder Headline", "Hogarth Press", "Holland Park Press", "Holt McDougal", "Horizon Scientific Press", "Ian Allan Publishing", "Ignatius Press", "Imperial War Museum", "Indiana University Press", "J. M. Dent", "Jaico Publishing House", "Jarrolds Publishing", "John Blake Publishing", "Karadi Tales", "Kensington Books", "Kessinger Publishing", "Kodansha", "Kogan Page", "Koren Publishers Jerusalem", "Ladybird Books", "Leaf Books", "Leafwood Publishers", "Left Book Club", "Legend Books", "Lethe Press", "Libertas Academica", "Liberty Fund", "Library of America", "Lion Hudson", "Macmillan Publishers", "Mainstream Publishing", "Manchester University Press", "Mandrake Press", "Mandrake of Oxford", "Manning Publications", "Manor House Publishing", "Mapin Publishing", "Marion Boyars Publishers", "Mark Batty Publisher", "Marshall Cavendish", "Marshall Pickering", "Martinus Nijhoff Publishers", "Mascot Books", "Matthias Media", "McClelland and Stewart", "McFarland & Company", "McGraw Hill Financial", "McGraw-Hill Education", "Medknow Publications", "Naiad Press", "Nauka", "NavPress", "New Directions Publishing", "New English Library", "New Holland Publishers", "New Village Press", "Newnes", "No Starch Press", "Nonesuch Press", "O'Reilly Media", "Oberon Books", "Open Court Publishing Company", "Open University Press", "Orchard Books", "Orion Books", "Packt Publishing", "Palgrave Macmillan", "Pan Books", "Pantheon Books at Random House", "Papadakis Publisher", "Parachute Publishing", "Parragon", "Pathfinder Press", "Paulist Press", "Pavilion Books", "Peace Hill Press", "Pecan Grove Press", "Pen and Sword Books", "Penguin Books", "Random House", "Reed Elsevier", "Reed Publishing", "SAGE Publications", "Salt Publishing", "Sams Publishing", "Schocken Books", "Scholastic Press", "Seagull Books", "Secker & Warburg", "Shambhala Publications", "Shire Books", "Shoemaker & Hoard Publishers", "Shuter & Shooter Publishers", "Sidgwick & Jackson", "Signet Books", "Simon & Schuster", "St. Martin's Press", "T & T Clark", "Tachyon Publications", "Tammi", "Target Books", "Tarpaulin Sky Press", "Tartarus Press", "Tate Publishing & Enterprises", "Taunton Press", "Taylor & Francis", "Ten Speed Press", "UCL Press", "Unfinished Monument Press", "United States Government Publishing Office", "University of Akron Press", "University of Alaska Press", "University of California Press", "University of Chicago Press", "University of Michigan Press", "University of Minnesota Press", "University of Nebraska Press", "Velazquez Press", "Verso Books", "Victor Gollancz Ltd", "Viking Press", "Vintage Books", "Vintage Books at Random House", "Virago Press", "Virgin Publishing", "Voyager Books", "Zed Books", "Ziff Davis Media", "Zondervan"], Pm = ["A Song of Ice and Fire", "Anna Karenina", "Colonel Race", "Discworld", "Dune", "Harry Potter", "Hercule Poirot", "His Dark Materials", "Jane Austen Murder Mysteries", "Little Women", "Outlander", "Percy Jackson", "Sherlock Holmes", "The Arc of a Scythe", "The Bartimaeus Trilogy", "The Border Trilogy", "The Chronicles of Narnia", "The Dark Tower", "The Dresden Files", "The Eighth Life", "The Foundation Series", "The Hitchhiker's Guide to the Galaxy", "The Hunger Games", "The Infinity Cycle", "The Inheritance Cycle", "The Lord of the Rings", "The Maze Runner", "The Prison Healer", "The Red Rising Saga", "The Southern Reach", "The Wheel of Time", "Thursday Next Series", "Twilight", "War and Peace"], Lm = ["1984", "20,000 Leagues Under the Sea", "A Bend in the River", "A Brief History of Time", "A Clockwork Orange", "A Confederacy of Dunces", "A Doll's House", "A Handful of Dust", "A Modest Proposal", "A Passage to India", "A Portrait of the Artist as a Young Man", "A Room with a View", "A Study in Scarlet", "A Tale of Two Cities", "A Wrinkle in Time", "Absalom, Absalom!", "Adventures of Huckleberry Finn", "Alice's Adventures in Wonderland", "All Quiet on the Western Front", "All the King's Men", "American Pastoral", "An American Tragedy", "And Then There Were None", "Animal Farm", "Anna Karenina", "Anne of Green Gables", "Are You There God? It's Me, Margaret", "As I Lay Dying", "Atlas Shrugged", "Atonement", "Austerlitz", "Beloved", "Beyond Good and Evil", "Bible", "Bleak House", "Blood Meridian", "Brave New World", "Brideshead Revisited", "Candide", "Carmilla", "Catch-22", "Charlie and the Chocolate Factory", "Charlotte's Web", "Clarissa", "Cranford", "Crime and Punishment", "Dao De Jing: A Minimalist Translation", "David Copperfield", "Deliverance", "Don Quixote", "Dora", "Dr. Zhivago", "Dracula", "Dubliners", "Dune", "East of Eden", "Emma", "Fahrenheit 451", "Faust", "For Whom the Bell Tolls", "Frankenstein", "Freakonomics", "Go Tell It on the Mountain", "Gone with the Wind", "Great Expectations", "Grimms' Fairy Tales", "Gulliver's Travels", "Hamlet", "Harry Potter and the Sorcerer's Stone", "Heart of Darkness", "Herzog", "His Dark Materials", "Hitting the line", "Housekeeping", "I, Claudius", "If on a Winter's Night a Traveler", "In Cold Blood", "In Search of Lost Time", "Invisible Man", "It", "Jane Eyre", "Josefine Mutzenbacher", "Jude the Obscure", "L.A. Confidential", "Leaves of Grass", "Les Miserables", "Life of Pi", "Little Women", "Lolita", "Long Walk to Freedom", "Lord Jim", "Lord of the Flies", "Lucky Jim", "Madame Bovary", "Malone Dies", "Meditations", "Men Without Women", "Metamorphosis", "Middlemarch", "Midnight's Children", "Moby Dick", "Money", "Mrs. Dalloway", "My Bondage and My Freedom", "My Life", "Native Son", "Neuromancer", "Never Let Me Go", "Nightmare Abbey", "Nineteen Eighty Four", "Nostromo", "Notes from the Underground", "Of Mice and Men", "Oliver Twist", "On the Duty of Civil Disobedience", "On the Road", "One Flew Over the Cuckoo's Nest", "One Hundred Years of Solitude", "One Thousand and One Nights", "Oscar and Lucinda", "Pale Fire", "Paradise Lost", "Peter Pan", "Portnoy's Complaint", "Pride and Prejudice", "Rabbit, Run", "Republic", "Revolutionary Road", "Robinson Crusoe", "Romeo and Juliet", "Ruth Fielding in Alaska", "Scoop", "Second Treatise of Government", "Slaughterhouse Five", "Stories of Anton Chekhov", "Sybil", "Tess of the d'Urbervilles", "The Adventures of Augie March", "The Adventures of Huckleberry Finn", "The Adventures of Sherlock Holmes", "The Adventures of Tom Sawyer", "The Aeneid", "The Alchemist", "The Ambassadors", "The Art of War", "The Big Sleep", "The Black Sheep", "The Blue Castle", "The Brief Wondrous Life of Oscar Wao", "The Brothers Karamazov", "The Call of the Wild", "The Canterbury Tales", "The Catcher in the Rye", "The Color Purple", "The Complete Works of Edgar Allen Poe", "The Corrections", "The Count of Monte Cristo", "The Day of the Locust", "The Diary of a Nobody", "The Diary of a Young Girl", "The Divine Comedy", "The Enchanted April", "The Fountainhead", "The Golden Bowl", "The Golden Notebook", "The Good Soldier", "The Grapes of Wrath", "The Great Gatsby", "The Handmaid's Tale", "The Heart is a Lonely Hunter", "The Heart of the Matter", "The Hobbit", "The Hound of the Baskervilles", "The Idiot", "The Iliad", "The King in Yellow", "The Kite Runner", "The Lion, the Witch, and the Wardrobe", "The Little Prince", "The Lord of the Rings", "The Magic Mountain", "The Maltese Falcon", "The Master and Margarita", "The Moviegoer", "The Naked and the Dead", "The Odyssey", "The Old Man and the Sea", "The Pickwick Papers", "The Picture of Dorian Gray", "The Pilgrim's Progress", "The Pillars of the Earth", "The Plague", "The Portrait of a Lady", "The Prime of Miss Jean Brodie", "The Prince", "The Problems of Philosophy", "The Prophet", "The Pursuit of Love", "The Rainbow", "The Red and the Black", "The Remains of the Day", "The Republic", "The Scarlet Letter", "The Sleepwalkers", "The Sound and the Fury", "The Stand", "The Strange Case of Dr. Jekyll and Mr. Hyde", "The Stranger", "The Sun Also Rises", "The Thirty-Nine Steps", "The Three Musketeers", "The Time Machine", "The Tin Drum", "The Trial", "The War of the Worlds", "The Waste Land", "The Way We Live Now", "The Wind in the Willows", "The Woman in White", "The Wonderful Wizard of Oz", "The Works of Edgar Allan Poe", "The Yellow Wallpaper", "Things Fall Apart", "Tinker, Tailor, Soldier, Spy", "To Kill a Mockingbird", "To the Lighthouse", "Tom Jones", "Treasure Island", "Tristram Shandy", "Tropic of Cancer", "U.S.A. Trilogy", "Ulysses", "Uncle Tom's Cabin", "Under the Volcano", "Underworld", "Vanity Fair", "Walden", "War and Peace", "Watchmen", "Winnie-the-Pooh", "Wuthering Heights"], _m = { author: Tm, format: Mm, genre: Rm, publisher: Im, series: Pm, title: Lm }, Nm = _m, xm = ["###-###-####", "(###) ###-####", "1-###-###-####", "###.###.####"], Hm = { formats: xm }, Wm = Hm, Om = ["azure", "black", "blue", "cyan", "fuchsia", "gold", "green", "grey", "indigo", "ivory", "lavender", "lime", "magenta", "maroon", "mint green", "olive", "orange", "orchid", "pink", "plum", "purple", "red", "salmon", "silver", "sky blue", "tan", "teal", "turquoise", "violet", "white", "yellow"], Gm = { human: Om }, Km = Gm, Jm = ["Automotive", "Baby", "Beauty", "Books", "Clothing", "Computers", "Electronics", "Games", "Garden", "Grocery", "Health", "Home", "Industrial", "Jewelry", "Kids", "Movies", "Music", "Outdoors", "Shoes", "Sports", "Tools", "Toys"], zm = ["Discover the {{animal.type}}-like agility of our {{commerce.product}}, perfect for {{word.adjective}} users", "Discover the {{word.adjective}} new {{commerce.product}} with an exciting mix of {{commerce.productMaterial}} ingredients", "Ergonomic {{commerce.product}} made with {{commerce.productMaterial}} for all-day {{word.adjective}} support", "Experience the {{color.human}} brilliance of our {{commerce.product}}, perfect for {{word.adjective}} environments", "Featuring {{science.chemical_element.name}}-enhanced technology, our {{commerce.product}} offers unparalleled {{word.adjective}} performance", "Innovative {{commerce.product}} featuring {{word.adjective}} technology and {{commerce.productMaterial}} construction", "Introducing the {{location.country}}-inspired {{commerce.product}}, blending {{word.adjective}} style with local craftsmanship", "New {{color.human}} {{commerce.product}} with ergonomic design for {{word.adjective}} comfort", 'New {{commerce.product}} model with {{number.int({"min": 1, "max": 100})}} GB RAM, {{number.int({"min": 1, "max": 1000})}} GB storage, and {{word.adjective}} features', "Our {{animal.type}}-friendly {{commerce.product}} ensures {{word.adjective}} comfort for your pets", "Our {{food.adjective}}-inspired {{commerce.product}} brings a taste of luxury to your {{word.adjective}} lifestyle", "Professional-grade {{commerce.product}} perfect for {{word.adjective}} training and recreational use", "Savor the {{food.adjective}} essence in our {{commerce.product}}, designed for {{word.adjective}} culinary adventures", "Stylish {{commerce.product}} designed to make you stand out with {{word.adjective}} looks", "The sleek and {{word.adjective}} {{commerce.product}} comes with {{color.human}} LED lighting for smart functionality", "The {{color.human}} {{commerce.product}} combines {{location.country}} aesthetics with {{science.chemical_element.name}}-based durability", "The {{company.catchPhrase}} {{commerce.product}} offers reliable performance and {{word.adjective}} design", "The {{person.firstName}} {{commerce.product}} is the latest in a series of {{word.adjective}} products from {{company.name}}", "{{commerce.productAdjective}} {{commerce.product}} designed with {{commerce.productMaterial}} for {{word.adjective}} performance", "{{company.name}}'s most advanced {{commerce.product}} technology increases {{word.adjective}} capabilities"], Vm = { adjective: ["Awesome", "Bespoke", "Electronic", "Elegant", "Ergonomic", "Fantastic", "Fresh", "Frozen", "Generic", "Gorgeous", "Handcrafted", "Handmade", "Incredible", "Intelligent", "Licensed", "Luxurious", "Modern", "Oriental", "Practical", "Recycled", "Refined", "Rustic", "Sleek", "Small", "Soft", "Tasty", "Unbranded"], material: ["Aluminum", "Bamboo", "Bronze", "Ceramic", "Concrete", "Cotton", "Gold", "Granite", "Marble", "Metal", "Plastic", "Rubber", "Silk", "Steel", "Wooden"], product: ["Bacon", "Ball", "Bike", "Car", "Chair", "Cheese", "Chicken", "Chips", "Computer", "Fish", "Gloves", "Hat", "Keyboard", "Mouse", "Pants", "Pizza", "Salad", "Sausages", "Shirt", "Shoes", "Soap", "Table", "Towels", "Tuna"] }, $m = { department: Jm, product_description: zm, product_name: Vm }, qm = $m, Um = ["AI-driven", "Adaptive", "Advanced", "Automated", "Balanced", "Business-focused", "Centralized", "Compatible", "Configurable", "Cross-platform", "Customer-focused", "Customizable", "Decentralized", "Devolved", "Digitized", "Distributed", "Diverse", "Enhanced", "Ergonomic", "Exclusive", "Expanded", "Extended", "Face to face", "Focused", "Front-line", "Fully-configurable", "Fundamental", "Future-proofed", "Grass-roots", "Horizontal", "Immersive", "Implemented", "Innovative", "Integrated", "Intuitive", "Managed", "Monitored", "Multi-tiered", "Networked", "Open-architected", "Open-source", "Operative", "Optimized", "Optional", "Organic", "Organized", "Persevering", "Persistent", "Phased", "Polarised", "Proactive", "Profit-focused", "Profound", "Programmable", "Progressive", "Public-key", "Quality-focused", "Reactive", "Realigned", "Reduced", "Reverse-engineered", "Robust", "Seamless", "Secured", "Self-enabling", "Sharable", "Smart", "Stand-alone", "Streamlined", "Sustainable", "Synchronised", "Team-oriented", "Total", "Triple-buffered", "Universal", "Upgradable", "User-centric", "User-friendly", "Versatile", "Virtual", "Visionary"], jm = ["24/7", "AI-driven", "B2B", "B2C", "back-end", "best-of-breed", "bleeding-edge", "collaborative", "compelling", "cross-media", "cross-platform", "customized", "cutting-edge", "decentralized", "distributed", "dynamic", "efficient", "end-to-end", "enterprise", "extensible", "frictionless", "front-end", "generative", "global", "granular", "holistic", "immersive", "impactful", "innovative", "integrated", "interactive", "intuitive", "killer", "leading-edge", "magnetic", "mission-critical", "next-generation", "one-to-one", "open-source", "out-of-the-box", "plug-and-play", "proactive", "quantum", "real-time", "revolutionary", "rich", "robust", "scalable", "seamless", "smart", "sticky", "strategic", "sustainable", "synergistic", "transparent", "turn-key", "ubiquitous", "user-centric", "value-added", "vertical", "viral", "virtual", "visionary", "world-class"], Ym = ["AI", "ROI", "applications", "architectures", "blockchains", "channels", "communities", "content", "convergence", "deliverables", "e-commerce", "experiences", "functionalities", "infrastructures", "initiatives", "interfaces", "large language models", "lifetime value", "markets", "methodologies", "metrics", "mindshare", "models", "networks", "niches", "paradigms", "partnerships", "platforms", "relationships", "schemas", "smart contracts", "solutions", "supply-chains", "synergies", "systems", "technologies", "users", "web services"], Zm = ["aggregate", "architect", "benchmark", "brand", "collaborate", "cultivate", "deliver", "deploy", "disintermediate", "drive", "embrace", "empower", "enable", "engage", "engineer", "enhance", "evolve", "expedite", "exploit", "extend", "facilitate", "gamify", "generate", "grow", "harness", "implement", "incentivize", "incubate", "innovate", "integrate", "iterate", "leverage", "maximize", "mesh", "monetize", "optimize", "orchestrate", "productize", "redefine", "reinvent", "repurpose", "revolutionize", "scale", "seize", "simplify", "strategize", "streamline", "syndicate", "synthesize", "target", "transform", "transition", "unleash", "utilize", "visualize", "whiteboard"], Qm = ["24 hour", "24/7", "AI-powered", "actuating", "analyzing", "asymmetric", "asynchronous", "attitude-oriented", "bifurcated", "bottom-line", "clear-thinking", "client-driven", "client-server", "cloud-native", "coherent", "cohesive", "composite", "content-based", "context-sensitive", "contextually-based", "data-driven", "dedicated", "demand-driven", "directional", "discrete", "disintermediate", "dynamic", "eco-centric", "empowering", "encompassing", "executive", "explicit", "exuding", "fault-tolerant", "fresh-thinking", "full-range", "global", "heuristic", "high-level", "holistic", "homogeneous", "human-resource", "hybrid", "immersive", "impactful", "incremental", "intangible", "interactive", "intermediate", "leading edge", "local", "logistical", "maximized", "methodical", "mission-critical", "mobile", "modular", "motivating", "national", "needs-based", "neutral", "next generation", "optimal", "optimizing", "radical", "real-time", "reciprocal", "regional", "resilient", "responsive", "scalable", "secondary", "stable", "static", "sustainable", "system-worthy", "systematic", "systemic", "tangible", "tertiary", "transitional", "uniform", "user-facing", "value-added", "well-modulated", "zero administration", "zero defect", "zero tolerance", "zero trust"], Xm = ["Group", "Inc", "LLC", "and Sons"], ep = ["{{person.last_name.generic}} - {{person.last_name.generic}}", "{{person.last_name.generic}} {{company.legal_entity_type}}", "{{person.last_name.generic}}, {{person.last_name.generic}} and {{person.last_name.generic}}"], ap = ["ability", "access", "adapter", "algorithm", "alliance", "analyzer", "application", "approach", "architecture", "archive", "array", "artificial intelligence", "attitude", "benchmark", "budgetary management", "capability", "capacity", "challenge", "circuit", "collaboration", "complexity", "concept", "conglomeration", "contingency", "core", "customer loyalty", "data-warehouse", "database", "definition", "emulation", "encoding", "encryption", "firmware", "flexibility", "focus group", "forecast", "frame", "framework", "function", "functionalities", "generative AI", "hardware", "help-desk", "hierarchy", "hub", "implementation", "infrastructure", "initiative", "installation", "instruction set", "interface", "internet solution", "intranet", "knowledge base", "knowledge user", "leverage", "local area network", "matrices", "matrix", "methodology", "microservice", "middleware", "migration", "model", "moderator", "monitoring", "moratorium", "neural-net", "open architecture", "orchestration", "paradigm", "parallelism", "policy", "portal", "pricing structure", "process improvement", "product", "productivity", "project", "projection", "protocol", "service-desk", "software", "solution", "standardization", "strategy", "structure", "success", "support", "synergy", "system engine", "task-force", "throughput", "time-frame", "toolset", "utilisation", "website", "workforce"], tp = { adjective: Um, buzz_adjective: jm, buzz_noun: Ym, buzz_verb: Zm, descriptor: Qm, legal_entity_type: Xm, name_pattern: ep, noun: ap }, np = tp, rp = ["avatar", "category", "comment", "createdAt", "email", "group", "id", "name", "password", "phone", "status", "title", "token", "updatedAt"], ip = { column: rp }, op = ip, sp = { wide: ["April", "August", "December", "February", "January", "July", "June", "March", "May", "November", "October", "September"], abbr: ["Apr", "Aug", "Dec", "Feb", "Jan", "Jul", "Jun", "Mar", "May", "Nov", "Oct", "Sep"] }, lp = { wide: ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"], abbr: ["Fri", "Mon", "Sat", "Sun", "Thu", "Tue", "Wed"] }, up = { month: sp, weekday: lp }, cp = up, dp = ["Auto Loan", "Checking", "Credit Card", "Home Loan", "Investment", "Money Market", "Personal Loan", "Savings"], hp = ["34##-######-####L", "37##-######-####L"], mp = ["30[0-5]#-######-###L", "36##-######-###L"], pp = ["6011-####-####-###L", "65##-####-####-###L"], Fp = ["3528-####-####-###L", "3529-####-####-###L", "35[3-8]#-####-####-###L"], gp = ["2[221-720]-####-####-###L", "5[1-5]##-####-####-###L"], yp = ["4###########L", "4###-####-####-###L"], fp = { american_express: hp, diners_club: mp, discover: pp, jcb: Fp, mastercard: gp, visa: yp }, bp = fp, Cp = [{ name: "UAE Dirham", code: "AED", symbol: "", numericCode: "784" }, { name: "Afghani", code: "AFN", symbol: "؋", numericCode: "971" }, { name: "Lek", code: "ALL", symbol: "Lek", numericCode: "008" }, { name: "Armenian Dram", code: "AMD", symbol: "", numericCode: "051" }, { name: "Netherlands Antillian Guilder", code: "ANG", symbol: "ƒ", numericCode: "532" }, { name: "Kwanza", code: "AOA", symbol: "", numericCode: "973" }, { name: "Argentine Peso", code: "ARS", symbol: "$", numericCode: "032" }, { name: "Australian Dollar", code: "AUD", symbol: "$", numericCode: "036" }, { name: "Aruban Guilder", code: "AWG", symbol: "ƒ", numericCode: "533" }, { name: "Azerbaijanian Manat", code: "AZN", symbol: "ман", numericCode: "944" }, { name: "Convertible Marks", code: "BAM", symbol: "KM", numericCode: "977" }, { name: "Barbados Dollar", code: "BBD", symbol: "$", numericCode: "052" }, { name: "Taka", code: "BDT", symbol: "", numericCode: "050" }, { name: "Bulgarian Lev", code: "BGN", symbol: "лв", numericCode: "975" }, { name: "Bahraini Dinar", code: "BHD", symbol: "", numericCode: "048" }, { name: "Burundi Franc", code: "BIF", symbol: "", numericCode: "108" }, { name: "Bermudian Dollar (customarily known as Bermuda Dollar)", code: "BMD", symbol: "$", numericCode: "060" }, { name: "Brunei Dollar", code: "BND", symbol: "$", numericCode: "096" }, { name: "Boliviano boliviano", code: "BOB", symbol: "Bs", numericCode: "068" }, { name: "Brazilian Real", code: "BRL", symbol: "R$", numericCode: "986" }, { name: "Bahamian Dollar", code: "BSD", symbol: "$", numericCode: "044" }, { name: "Pula", code: "BWP", symbol: "P", numericCode: "072" }, { name: "Belarusian Ruble", code: "BYN", symbol: "Rbl", numericCode: "933" }, { name: "Belize Dollar", code: "BZD", symbol: "BZ$", numericCode: "084" }, { name: "Canadian Dollar", code: "CAD", symbol: "$", numericCode: "124" }, { name: "Congolese Franc", code: "CDF", symbol: "", numericCode: "976" }, { name: "Swiss Franc", code: "CHF", symbol: "CHF", numericCode: "756" }, { name: "Chilean Peso", code: "CLP", symbol: "$", numericCode: "152" }, { name: "Yuan Renminbi", code: "CNY", symbol: "¥", numericCode: "156" }, { name: "Colombian Peso", code: "COP", symbol: "$", numericCode: "170" }, { name: "Costa Rican Colon", code: "CRC", symbol: "₡", numericCode: "188" }, { name: "Cuban Peso", code: "CUP", symbol: "₱", numericCode: "192" }, { name: "Cape Verde Escudo", code: "CVE", symbol: "", numericCode: "132" }, { name: "Czech Koruna", code: "CZK", symbol: "Kč", numericCode: "203" }, { name: "Djibouti Franc", code: "DJF", symbol: "", numericCode: "262" }, { name: "Danish Krone", code: "DKK", symbol: "kr", numericCode: "208" }, { name: "Dominican Peso", code: "DOP", symbol: "RD$", numericCode: "214" }, { name: "Algerian Dinar", code: "DZD", symbol: "", numericCode: "012" }, { name: "Egyptian Pound", code: "EGP", symbol: "£", numericCode: "818" }, { name: "Nakfa", code: "ERN", symbol: "", numericCode: "232" }, { name: "Ethiopian Birr", code: "ETB", symbol: "", numericCode: "230" }, { name: "Euro", code: "EUR", symbol: "€", numericCode: "978" }, { name: "Fiji Dollar", code: "FJD", symbol: "$", numericCode: "242" }, { name: "Falkland Islands Pound", code: "FKP", symbol: "£", numericCode: "238" }, { name: "Pound Sterling", code: "GBP", symbol: "£", numericCode: "826" }, { name: "Lari", code: "GEL", symbol: "", numericCode: "981" }, { name: "Cedi", code: "GHS", symbol: "", numericCode: "936" }, { name: "Gibraltar Pound", code: "GIP", symbol: "£", numericCode: "292" }, { name: "Dalasi", code: "GMD", symbol: "", numericCode: "270" }, { name: "Guinea Franc", code: "GNF", symbol: "", numericCode: "324" }, { name: "Quetzal", code: "GTQ", symbol: "Q", numericCode: "320" }, { name: "Guyana Dollar", code: "GYD", symbol: "$", numericCode: "328" }, { name: "Hong Kong Dollar", code: "HKD", symbol: "$", numericCode: "344" }, { name: "Lempira", code: "HNL", symbol: "L", numericCode: "340" }, { name: "Gourde", code: "HTG", symbol: "", numericCode: "332" }, { name: "Forint", code: "HUF", symbol: "Ft", numericCode: "348" }, { name: "Rupiah", code: "IDR", symbol: "Rp", numericCode: "360" }, { name: "New Israeli Sheqel", code: "ILS", symbol: "₪", numericCode: "376" }, { name: "Bhutanese Ngultrum", code: "BTN", symbol: "Nu", numericCode: "064" }, { name: "Indian Rupee", code: "INR", symbol: "₹", numericCode: "356" }, { name: "Iraqi Dinar", code: "IQD", symbol: "", numericCode: "368" }, { name: "Iranian Rial", code: "IRR", symbol: "﷼", numericCode: "364" }, { name: "Iceland Krona", code: "ISK", symbol: "kr", numericCode: "352" }, { name: "Jamaican Dollar", code: "JMD", symbol: "J$", numericCode: "388" }, { name: "Jordanian Dinar", code: "JOD", symbol: "", numericCode: "400" }, { name: "Yen", code: "JPY", symbol: "¥", numericCode: "392" }, { name: "Kenyan Shilling", code: "KES", symbol: "", numericCode: "404" }, { name: "Som", code: "KGS", symbol: "лв", numericCode: "417" }, { name: "Riel", code: "KHR", symbol: "៛", numericCode: "116" }, { name: "Comoro Franc", code: "KMF", symbol: "", numericCode: "174" }, { name: "North Korean Won", code: "KPW", symbol: "₩", numericCode: "408" }, { name: "Won", code: "KRW", symbol: "₩", numericCode: "410" }, { name: "Kuwaiti Dinar", code: "KWD", symbol: "", numericCode: "414" }, { name: "Cayman Islands Dollar", code: "KYD", symbol: "$", numericCode: "136" }, { name: "Tenge", code: "KZT", symbol: "лв", numericCode: "398" }, { name: "Kip", code: "LAK", symbol: "₭", numericCode: "418" }, { name: "Lebanese Pound", code: "LBP", symbol: "£", numericCode: "422" }, { name: "Sri Lanka Rupee", code: "LKR", symbol: "₨", numericCode: "144" }, { name: "Liberian Dollar", code: "LRD", symbol: "$", numericCode: "430" }, { name: "Libyan Dinar", code: "LYD", symbol: "", numericCode: "434" }, { name: "Moroccan Dirham", code: "MAD", symbol: "", numericCode: "504" }, { name: "Moldovan Leu", code: "MDL", symbol: "", numericCode: "498" }, { name: "Malagasy Ariary", code: "MGA", symbol: "", numericCode: "969" }, { name: "Denar", code: "MKD", symbol: "ден", numericCode: "807" }, { name: "Kyat", code: "MMK", symbol: "", numericCode: "104" }, { name: "Tugrik", code: "MNT", symbol: "₮", numericCode: "496" }, { name: "Pataca", code: "MOP", symbol: "", numericCode: "446" }, { name: "Ouguiya", code: "MRU", symbol: "", numericCode: "929" }, { name: "Mauritius Rupee", code: "MUR", symbol: "₨", numericCode: "480" }, { name: "Rufiyaa", code: "MVR", symbol: "", numericCode: "462" }, { name: "Kwacha", code: "MWK", symbol: "", numericCode: "454" }, { name: "Mexican Peso", code: "MXN", symbol: "$", numericCode: "484" }, { name: "Malaysian Ringgit", code: "MYR", symbol: "RM", numericCode: "458" }, { name: "Metical", code: "MZN", symbol: "MT", numericCode: "943" }, { name: "Naira", code: "NGN", symbol: "₦", numericCode: "566" }, { name: "Cordoba Oro", code: "NIO", symbol: "C$", numericCode: "558" }, { name: "Norwegian Krone", code: "NOK", symbol: "kr", numericCode: "578" }, { name: "Nepalese Rupee", code: "NPR", symbol: "₨", numericCode: "524" }, { name: "New Zealand Dollar", code: "NZD", symbol: "$", numericCode: "554" }, { name: "Rial Omani", code: "OMR", symbol: "﷼", numericCode: "512" }, { name: "Balboa", code: "PAB", symbol: "B/.", numericCode: "590" }, { name: "Nuevo Sol", code: "PEN", symbol: "S/.", numericCode: "604" }, { name: "Kina", code: "PGK", symbol: "", numericCode: "598" }, { name: "Philippine Peso", code: "PHP", symbol: "Php", numericCode: "608" }, { name: "Pakistan Rupee", code: "PKR", symbol: "₨", numericCode: "586" }, { name: "Zloty", code: "PLN", symbol: "zł", numericCode: "985" }, { name: "Guarani", code: "PYG", symbol: "Gs", numericCode: "600" }, { name: "Qatari Rial", code: "QAR", symbol: "﷼", numericCode: "634" }, { name: "New Leu", code: "RON", symbol: "lei", numericCode: "946" }, { name: "Serbian Dinar", code: "RSD", symbol: "Дин.", numericCode: "941" }, { name: "Russian Ruble", code: "RUB", symbol: "руб", numericCode: "643" }, { name: "Rwanda Franc", code: "RWF", symbol: "", numericCode: "646" }, { name: "Saudi Riyal", code: "SAR", symbol: "﷼", numericCode: "682" }, { name: "Solomon Islands Dollar", code: "SBD", symbol: "$", numericCode: "090" }, { name: "Seychelles Rupee", code: "SCR", symbol: "₨", numericCode: "690" }, { name: "Sudanese Pound", code: "SDG", symbol: "", numericCode: "938" }, { name: "Swedish Krona", code: "SEK", symbol: "kr", numericCode: "752" }, { name: "Singapore Dollar", code: "SGD", symbol: "$", numericCode: "702" }, { name: "Saint Helena Pound", code: "SHP", symbol: "£", numericCode: "654" }, { name: "Leone", code: "SLE", symbol: "", numericCode: "925" }, { name: "Somali Shilling", code: "SOS", symbol: "S", numericCode: "706" }, { name: "Surinam Dollar", code: "SRD", symbol: "$", numericCode: "968" }, { name: "South Sudanese pound", code: "SSP", symbol: "", numericCode: "728" }, { name: "Dobra", code: "STN", symbol: "Db", numericCode: "930" }, { name: "Syrian Pound", code: "SYP", symbol: "£", numericCode: "760" }, { name: "Lilangeni", code: "SZL", symbol: "", numericCode: "748" }, { name: "Baht", code: "THB", symbol: "฿", numericCode: "764" }, { name: "Somoni", code: "TJS", symbol: "", numericCode: "972" }, { name: "Manat", code: "TMT", symbol: "", numericCode: "934" }, { name: "Tunisian Dinar", code: "TND", symbol: "", numericCode: "788" }, { name: "Pa'anga", code: "TOP", symbol: "", numericCode: "776" }, { name: "Turkish Lira", code: "TRY", symbol: "₺", numericCode: "949" }, { name: "Trinidad and Tobago Dollar", code: "TTD", symbol: "TT$", numericCode: "780" }, { name: "New Taiwan Dollar", code: "TWD", symbol: "NT$", numericCode: "901" }, { name: "Tanzanian Shilling", code: "TZS", symbol: "", numericCode: "834" }, { name: "Hryvnia", code: "UAH", symbol: "₴", numericCode: "980" }, { name: "Uganda Shilling", code: "UGX", symbol: "", numericCode: "800" }, { name: "US Dollar", code: "USD", symbol: "$", numericCode: "840" }, { name: "Peso Uruguayo", code: "UYU", symbol: "$U", numericCode: "858" }, { name: "Uzbekistan Sum", code: "UZS", symbol: "лв", numericCode: "860" }, { name: "Venezuelan bolívar", code: "VES", symbol: "Bs", numericCode: "928" }, { name: "Dong", code: "VND", symbol: "₫", numericCode: "704" }, { name: "Vatu", code: "VUV", symbol: "", numericCode: "548" }, { name: "Tala", code: "WST", symbol: "", numericCode: "882" }, { name: "CFA Franc BEAC", code: "XAF", symbol: "", numericCode: "950" }, { name: "East Caribbean Dollar", code: "XCD", symbol: "$", numericCode: "951" }, { name: "CFA Franc BCEAO", code: "XOF", symbol: "", numericCode: "952" }, { name: "CFP Franc", code: "XPF", symbol: "", numericCode: "953" }, { name: "Yemeni Rial", code: "YER", symbol: "﷼", numericCode: "886" }, { name: "Rand", code: "ZAR", symbol: "R", numericCode: "710" }, { name: "Lesotho Loti", code: "LSL", symbol: "", numericCode: "426" }, { name: "Namibia Dollar", code: "NAD", symbol: "N$", numericCode: "516" }, { name: "Zambian Kwacha", code: "ZMW", symbol: "K", numericCode: "967" }, { name: "Zimbabwe Dollar", code: "ZWL", symbol: "", numericCode: "932" }], vp = ["A {{finance.transactionType}} for {{finance.currencyCode}} {{finance.amount}} was made at {{company.name}} via card ending ****{{string.numeric(4)}} on account ***{{string.numeric(4)}}.", "A {{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} occurred at {{company.name}} using a card ending in ****{{string.numeric(4)}} for account ***{{string.numeric(4)}}.", "Payment of {{finance.currencyCode}} {{finance.amount}} for {{finance.transactionType}} at {{company.name}}, processed with card ending ****{{string.numeric(4)}} linked to account ***{{string.numeric(4)}}.", "Transaction alert: {{finance.transactionType}} at {{company.name}} using card ending ****{{string.numeric(4)}} for an amount of {{finance.currencyCode}} {{finance.amount}} on account ***{{string.numeric(4)}}.", "You made a {{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} at {{company.name}} using card ending in ****{{string.numeric(4)}} from account ***{{string.numeric(4)}}.", "Your {{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} at {{company.name}} was successful. Charged via card ****{{string.numeric(4)}} to account ***{{string.numeric(4)}}.", "{{finance.transactionType}} at {{company.name}} with a card ending in ****{{string.numeric(4)}} for {{finance.currencyCode}} {{finance.amount}} from account ***{{string.numeric(4)}}.", "{{finance.transactionType}} confirmed at {{company.name}} for {{finance.currencyCode}} {{finance.amount}}, card ending in ****{{string.numeric(4)}} associated with account ***{{string.numeric(4)}}.", "{{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} at {{company.name}} charged to account ending in {{string.numeric(4)}} using card ending in ****{{string.numeric(4)}}.", "{{finance.transactionType}} processed at {{company.name}} for {{finance.currencyCode}} {{finance.amount}}, using card ending ****{{string.numeric(4)}}. Account: ***{{string.numeric(4)}}.", "{{finance.transactionType}} transaction at {{company.name}} using card ending with ****{{string.numeric(4)}} for {{finance.currencyCode}} {{finance.amount}} in account ***{{string.numeric(4)}}."], kp = ["deposit", "invoice", "payment", "withdrawal"], Ap = { account_type: dp, credit_card: bp, currency: Cp, transaction_description_pattern: vp, transaction_type: kp }, Sp = Ap, wp = ["bitter", "creamy", "crispy", "crunchy", "delicious", "fluffy", "fresh", "golden", "juicy", "moist", "rich", "salty", "savory", "smoky", "sour", "spicy", "sweet", "tangy", "tender", "zesty"], Ep = ["A classic pie filled with delicious {{food.meat}} and {{food.adjective}} {{food.ingredient}}, baked in a {{food.adjective}} pastry crust and topped with a golden-brown lattice.", "A delightful tart combining {{food.adjective}} {{food.vegetable}} and sweet {{food.fruit}}, set in a buttery pastry shell and finished with a hint of {{food.spice}}.", "A heartwarming {{food.ethnic_category}} soup, featuring fresh {{food.ingredient}} and an aromatic blend of traditional spices.", "A robust {{food.adjective}} stew featuring {{food.ethnic_category}} flavors, loaded with {{food.adjective}} meat, {{food.adjective}} vegetables, and a {{food.adjective}}, {{food.adjective}} broth.", "A simple {{food.fruit}} pie. No fancy stuff. Just pie.", "A slow-roasted {{animal.bird}} with a {{food.adjective}}, {{food.adjective}} exterior. Stuffed with {{food.fruit}} and covered in {{food.fruit}} sauce. Sides with {{food.vegetable}} puree and wild {{food.vegetable}}.", "A special {{color.human}} {{food.ingredient}} from {{location.country}}. To support the strong flavor it is sided with a tablespoon of {{food.spice}}.", "A succulent {{food.meat}} steak, encased in a {{food.adjective}} {{food.spice}} crust, served with a side of {{food.spice}} mashed {{food.vegetable}}.", "An exquisite {{food.meat}} roast, infused with the essence of {{food.fruit}}, slow-roasted to bring out its natural flavors and served with a side of creamy {{food.vegetable}}", "Baked {{food.ingredient}}-stuffed {{food.meat}}, seasoned with {{food.spice}} and {{food.adjective}} herbs, accompanied by roasted {{food.vegetable}} medley.", "Crispy fried {{food.meat}} bites, seasoned with {{food.spice}} and served with a tangy {{food.fruit}} dipping sauce.", "Fresh mixed greens tossed with {{food.spice}}-rubbed {{food.meat}}, {{food.vegetable}}, and a light dressing.", "Fresh {{food.ingredient}} with a pinch of {{food.spice}}, topped by a caramelized {{food.fruit}} with whipped cream", "Grilled {{food.meat}} kebabs, marinated in {{food.ethnic_category}} spices and served with a fresh {{food.vegetable}} and {{food.fruit}} salad.", "Hearty {{food.ingredient}} and {{food.meat}} stew, slow-cooked with {{food.spice}} and {{food.vegetable}} for a comforting, flavorful meal.", "Juicy {{food.meat}}, grilled to your liking and drizzled with a bold {{food.spice}} sauce, served alongside roasted {{food.vegetable}}.", "Our {{food.adjective}} {{food.meat}}, slow-cooked to perfection, accompanied by steamed {{food.vegetable}} and a rich, savory gravy.", "Tender {{food.meat}} skewers, glazed with a sweet and tangy {{food.fruit}} sauce, served over a bed of fragrant jasmine rice.", "Tenderly braised {{food.meat}} in a rich {{food.spice}} and {{food.vegetable}} sauce, served with a side of creamy {{food.vegetable}}.", "Three {{food.ingredient}} with {{food.vegetable}}, {{food.vegetable}}, {{food.vegetable}}, {{food.vegetable}} and {{food.ingredient}}. With a side of baked {{food.fruit}}, and your choice of {{food.ingredient}} or {{food.ingredient}}.", '{{number.int({"min":1, "max":99})}}-day aged {{food.meat}} steak, with choice of {{number.int({"min":2, "max":4})}} sides.'], Dp = ["California maki", "Peking duck", "Philadelphia maki", "arepas", "barbecue ribs", "bruschette with tomato", "bunny chow", "caesar salad", "caprese salad", "cauliflower penne", "cheeseburger", "chicken fajitas", "chicken milanese", "chicken parm", "chicken wings", "chilli con carne", "ebiten maki", "fettuccine alfredo", "fish and chips", "french fries with sausages", "french toast", "hummus", "katsu curry", "kebab", "lasagne", "linguine with clams", "massaman curry", "meatballs with sauce", "mushroom risotto", "pappardelle alla bolognese", "pasta and beans", "pasta carbonara", "pasta with tomato and basil", "pho", "pierogi", "pizza", "poke", "pork belly buns", "pork sausage roll", "poutine", "ricotta stuffed ravioli", "risotto with seafood", "salmon nigiri", "scotch eggs", "seafood paella", "som tam", "souvlaki", "stinky tofu", "sushi", "tacos", "teriyaki chicken donburi", "tiramisù", "tuna sashimi", "vegetable soup"], Bp = ["{{food.adjective}} {{food.ethnic_category}} stew", "{{food.adjective}} {{food.meat}} with {{food.vegetable}}", "{{food.ethnic_category}} {{food.ingredient}} soup", "{{food.fruit}} and {{food.fruit}} tart", "{{food.fruit}} pie", "{{food.fruit}}-glazed {{food.meat}} skewers", "{{food.fruit}}-infused {{food.meat}} roast", "{{food.ingredient}} and {{food.meat}} pie", "{{food.ingredient}}-infused {{food.meat}}", "{{food.meat}} steak", "{{food.meat}} with {{food.fruit}} sauce", "{{food.spice}}-crusted {{food.meat}}", "{{food.spice}}-rubbed {{food.meat}} salad", "{{food.vegetable}} salad", "{{person.first_name.generic}}'s special {{food.ingredient}}"], Tp = ["Ainu", "Albanian", "American", "Andhra", "Anglo-Indian", "Arab", "Argentine", "Armenian", "Assyrian", "Awadhi", "Azerbaijani", "Balochi", "Bangladeshi", "Bashkir", "Belarusian", "Bengali", "Berber", "Brazilian", "British", "Buddhist", "Bulgarian", "Cajun", "Cantonese", "Caribbean", "Chechen", "Chinese", "Chinese Islamic", "Circassian", "Crimean Tatar", "Cypriot", "Czech", "Danish", "Egyptian", "English", "Eritrean", "Estonian", "Ethiopian", "Filipino", "French", "Georgian", "German", "Goan", "Goan Catholic", "Greek", "Gujarati", "Hyderabad", "Indian", "Indian Chinese", "Indian Singaporean", "Indonesian", "Inuit", "Irish", "Italian", "Italian-American", "Jamaican", "Japanese", "Jewish - Israeli", "Karnataka", "Kazakh", "Keralite", "Korean", "Kurdish", "Laotian", "Latvian", "Lebanese", "Lithuanian", "Louisiana Creole", "Maharashtrian", "Malay", "Malaysian Chinese", "Malaysian Indian", "Mangalorean", "Mediterranean", "Mennonite", "Mexican", "Mordovian", "Mughal", "Native American", "Nepalese", "New Mexican", "Odia", "Pakistani", "Parsi", "Pashtun", "Pennsylvania Dutch", "Peranakan", "Persian", "Peruvian", "Polish", "Portuguese", "Punjabi", "Québécois", "Rajasthani", "Romani", "Romanian", "Russian", "Sami", "Serbian", "Sindhi", "Slovak", "Slovenian", "Somali", "South Indian", "Soviet", "Spanish", "Sri Lankan", "Taiwanese", "Tamil", "Tatar", "Texan", "Thai", "Turkish", "Udupi", "Ukrainian", "Vietnamese", "Yamal", "Zambian", "Zanzibari"], Mp = ["apple", "apricot", "aubergine", "avocado", "banana", "berry", "blackberry", "blood orange", "blueberry", "bush tomato", "butternut pumpkin", "cantaloupe", "cavalo", "cherry", "corella pear", "cranberry", "cumquat", "currant", "custard apple", "custard apples daikon", "date", "dragonfruit", "dried apricot", "elderberry", "feijoa", "fig", "fingerlime", "goji berry", "grape", "grapefruit", "guava", "honeydew melon", "incaberry", "jarrahdale pumpkin", "juniper berry", "kiwi fruit", "kiwiberry", "lemon", "lime", "longan", "loquat", "lychee", "mandarin", "mango", "mangosteen", "melon", "mulberry", "nashi pear", "nectarine", "olive", "orange", "papaw", "papaya", "passionfruit", "peach", "pear", "pineapple", "plum", "pomegranate", "prune", "rockmelon", "snowpea", "sprout", "starfruit", "strawberry", "sultana", "tangelo", "tomato", "watermelon"], Rp = ["achacha", "adzuki beans", "agar", "agave syrup", "ajowan seed", "albacore tuna", "alfalfa", "allspice", "almond oil", "almonds", "amaranth", "amchur", "anchovies", "aniseed", "annatto seed", "apple cider vinegar", "apple juice", "apple juice concentrate", "apples", "apricots", "arborio rice", "arrowroot", "artichoke", "arugula", "asafoetida", "asian greens", "asian noodles", "asparagus", "aubergine", "avocado", "avocado oil", "avocado spread", "bacon", "baking powder", "baking soda", "balsamic vinegar", "bamboo shoots", "banana", "barberry", "barley", "barramundi", "basil basmati rice", "bay leaves", "bean shoots", "bean sprouts", "beans", "beef", "beef stock", "beetroot", "berries", "besan", "black eyed beans", "blackberries", "blood oranges", "blue cheese", "blue eye trevalla", "blue swimmer crab", "blueberries", "bocconcini", "bok choy", "bonito flakes", "bonza", "borlotti beans", "bran", "brazil nut", "bread", "brie", "broccoli", "broccolini", "brown flour", "brown mushrooms", "brown rice", "brown rice vinegar", "brussels sprouts", "buckwheat", "buckwheat flour", "buckwheat noodles", "bulghur", "bush tomato", "butter", "butter beans", "buttermilk", "butternut lettuce", "butternut pumpkin", "cabbage", "cacao", "cake", "calamari", "camellia tea oil", "camembert", "camomile", "candle nut", "cannellini beans", "canola oil", "cantaloupe", "capers", "capsicum", "caraway seed", "cardamom", "carob carrot", "carrot", "cashews", "cassia bark", "cauliflower", "cavalo", "cayenne", "celery", "celery seed", "cheddar", "cherries", "chestnut", "chia seeds", "chicken", "chicken stock", "chickory", "chickpea", "chilli pepper", "chinese cabbage", "chinese five spice", "chives", "choy sum", "cinnamon", "clams", "cloves", "cocoa powder", "coconut", "coconut oil", "coconut water", "coffee", "common cultivated mushrooms", "corella pear", "coriander leaves", "coriander seed", "corn oil", "corn syrup", "corn tortilla", "cornichons", "cornmeal", "cos lettuce", "cottage cheese", "cous cous", "crabs", "cranberry", "cream", "cream cheese", "cucumber", "cumin", "cumquat", "currants", "curry leaves", "curry powder", "custard apples", "dandelion", "dark chocolate", "dashi", "dates", "dill", "dragonfruit", "dried apricots", "dried chinese broccoli", "duck", "edam", "edamame", "eggplant", "eggs", "elderberry", "endive", "english spinach", "enoki mushrooms", "extra virgin olive oil", "farmed prawns", "feijoa", "fennel", "fennel seeds", "fenugreek", "feta", "figs", "file powder", "fingerlime", "fish sauce", "fish stock", "flat mushrooms", "flathead", "flaxseed", "flaxseed oil", "flounder", "flour", "freekeh", "french eschallots", "fresh chillies", "fromage blanc", "fruit", "galangal", "garam masala", "garlic", "goat cheese", "goat milk", "goji berry", "grape seed oil", "grapefruit", "grapes", "green beans", "green pepper", "green tea", "green tea noodles", "greenwheat freekeh", "gruyere", "guava", "gula melaka", "haloumi", "ham", "haricot beans", "harissa", "hazelnut", "hijiki", "hiramasa kingfish", "hokkien noodles", "honey", "honeydew melon", "horseradish", "hot smoked salmon", "hummus", "iceberg lettuce", "incaberries", "jarrahdale pumpkin", "jasmine rice", "jelly", "jerusalem artichoke", "jewfish", "jicama", "juniper berries", "kale", "kangaroo", "kecap manis", "kenchur", "kidney beans", "kidneys", "kiwi berries", "kiwi fruit", "kohlrabi", "kokam", "kombu", "koshihikari rice", "kudzu", "kumera", "lamb", "lavender flowers", "leeks", "lemon", "lemongrass", "lentils", "lettuce", "licorice", "lime leaves", "limes", "liver", "lobster", "longan", "loquats", "lotus root", "lychees", "macadamia nut", "macadamia oil", "mace", "mackerel", "mahi mahi", "mahlab", "malt vinegar", "mandarins", "mango", "mangosteens", "maple syrup", "margarine", "marigold", "marjoram", "mastic", "melon", "milk", "milk chocolate", "mint", "miso", "molasses", "monkfish", "morwong", "mountain bread", "mozzarella", "muesli", "mulberries", "mullet", "mung beans", "mussels", "mustard", "mustard seed", "nashi pear", "nasturtium", "nectarines", "nori", "nutmeg", "nutritional yeast", "nuts", "oat flour", "oatmeal", "oats", "octopus", "okra", "olive oil", "olives", "omega spread", "onion", "oranges", "oregano", "oyster mushrooms", "oyster sauce", "oysters", "pandanus leaves", "papaw", "papaya", "paprik", "parmesan cheese", "parrotfish", "parsley", "parsnip", "passionfruit", "pasta", "peaches", "peanuts", "pear", "pear juice", "pears", "peas", "pecan nut", "pecorino", "pepitas", "peppercorns", "peppermint", "peppers", "persimmon", "pine nut", "pineapple", "pinto beans", "pistachio nut", "plums", "polenta", "pomegranate", "poppy seed", "porcini mushrooms", "pork", "potato flour", "potatoes", "provolone", "prunes", "pumpkin", "pumpkin seed", "purple carrot", "purple rice", "quark", "quince", "quinoa", "radicchio", "radish", "raisin", "raspberry", "red cabbage", "red lentils", "red pepper", "red wine", "red wine vinegar", "redfish", "rhubarb", "rice flour", "rice noodles", "rice paper", "rice syrup", "ricemilk", "ricotta", "rockmelon", "rose water", "rosemary", "rye", "rye bread", "safflower oil", "saffron", "sage", "sake", "salmon", "sardines", "sausages", "scallops", "sea salt", "semolina", "sesame oil", "sesame seeds", "shark", "shiitake mushrooms", "silverbeet", "slivered almonds", "smoked trout", "snapper", "snowpea sprouts", "snowpeas", "soba", "sour dough bread", "soy", "soy beans", "soy flour", "soy milk", "soy sauce", "soymilk", "spearmint", "spelt", "spelt bread", "spinach", "spring onions", "sprouts", "squash", "squid", "star anise", "star fruit", "starfruit", "stevia", "strawberries", "sugar", "sultanas", "sun-dried tomatoes", "sunflower oil", "sunflower seeds", "sweet chilli sauce", "sweet potato", "swiss chard", "swordfish", "szechuan pepperberry", "tabasco", "tahini", "taleggio cheese", "tamari", "tamarillo", "tangelo", "tapioca", "tapioca flour", "tarragon", "tea", "tea oil", "tempeh", "thyme", "tinned", "tofu", "tom yum", "tomatoes", "trout", "tuna", "turkey", "turmeric", "turnips", "unbleached flour", "vanilla beans", "vegetable oil", "vegetable spaghetti", "vegetable stock", "vermicelli noodles", "vinegar", "wakame", "walnut", "warehou", "wasabi", "water", "watercress", "watermelon", "wattleseed", "wheat", "wheatgrass juice", "white bread", "white flour", "white rice", "white wine", "white wine vinegar", "whiting wild rice", "wholegrain bread", "wholemeal", "wholewheat flour", "william pear", "yeast", "yellow papaw", "yellowtail kingfish", "yoghurt", "yogurt", "zucchini"], Ip = ["beef", "chicken", "crocodile", "duck", "emu", "goose", "kangaroo", "lamb", "ostrich", "pigeon", "pork", "quail", "rabbit", "salmon", "turkey", "venison"], Pp = ["achiote seed", "ajwain seed", "ajwan seed", "allspice", "amchoor", "anise", "anise star", "aniseed", "annatto seed", "arrowroot", "asafoetida", "baharat", "balti masala", "balti stir fry mix", "basil", "bay leaves", "bbq", "caraway seed", "cardamom", "cassia", "cayenne pepper", "celery", "chamomile", "chervil", "chilli", "chilli pepper", "chillies", "china star", "chives", "cinnamon", "cloves", "colombo", "coriander", "cumin", "curly leaf parsley", "curry", "dhansak", "dill", "fennel seed", "fenugreek", "fines herbes", "five spice", "french lavender", "galangal", "garam masala", "garlic", "german chamomile", "ginger", "green cardamom", "herbes de provence", "jalfrezi", "jerk", "kaffir leaves", "korma", "lavender", "lemon grass", "lemon pepper", "lime leaves", "liquorice root", "mace", "mango", "marjoram", "methi", "mint", "mustard", "nutmeg", "onion seed", "orange zest", "oregano", "paprika", "parsley", "pepper", "peppercorns", "pimento", "piri piri", "poppy seed", "pot marjoram", "poudre de colombo", "ras-el-hanout", "rice paper", "rogan josh", "rose baie", "rosemary", "saffron", "sage", "sesame seed", "spearmint", "sumac", "sweet basil", "sweet laurel", "tagine", "tandoori masala", "tarragon", "thyme", "tikka masala", "turmeric", "vanilla", "zahtar"], Lp = ["artichoke", "arugula", "asian greens", "asparagus", "bean shoots", "bean sprouts", "beans", "beetroot", "bok choy", "broccoli", "broccolini", "brussels sprouts", "butternut lettuce", "cabbage", "capers", "carob carrot", "carrot", "cauliflower", "celery", "chilli pepper", "chinese cabbage", "chives", "cornichons", "cos lettuce", "cucumber", "dried chinese broccoli", "eggplant", "endive", "english spinach", "french eschallots", "fresh chillies", "garlic", "green beans", "green pepper", "hijiki", "iceberg lettuce", "jerusalem artichoke", "jicama", "kale", "kohlrabi", "leeks", "lettuce", "okra", "onion", "parsnip", "peas", "peppers", "potatoes", "pumpkin", "purple carrot", "radicchio", "radish", "raspberry", "red cabbage", "red pepper", "rhubarb", "snowpea sprouts", "spinach", "squash", "sun dried tomatoes", "sweet potato", "swiss chard", "turnips", "zucchini"], _p = { adjective: wp, description_pattern: Ep, dish: Dp, dish_pattern: Bp, ethnic_category: Tp, fruit: Mp, ingredient: Rp, meat: Ip, spice: Pp, vegetable: Lp }, Np = _p, xp = ["1080p", "auxiliary", "back-end", "bluetooth", "cross-platform", "digital", "haptic", "mobile", "multi-byte", "neural", "online", "open-source", "optical", "primary", "redundant", "solid state", "virtual", "wireless"], Hp = ["backing up", "bypassing", "calculating", "compressing", "connecting", "copying", "generating", "hacking", "indexing", "navigating", "overriding", "parsing", "programming", "quantifying", "synthesizing", "transmitting"], Wp = ["alarm", "application", "array", "bandwidth", "bus", "capacitor", "card", "circuit", "driver", "feed", "firewall", "hard drive", "interface", "matrix", "microchip", "monitor", "panel", "pixel", "port", "program", "protocol", "sensor", "system", "transmitter"], Op = ["I'll {{verb}} the {{adjective}} {{abbreviation}} {{noun}}, that should {{noun}} the {{abbreviation}} {{noun}}!", "If we {{verb}} the {{noun}}, we can get to the {{abbreviation}} {{noun}} through the {{adjective}} {{abbreviation}} {{noun}}!", "The {{abbreviation}} {{noun}} is down, {{verb}} the {{adjective}} {{noun}} so we can {{verb}} the {{abbreviation}} {{noun}}!", "Try to {{verb}} the {{abbreviation}} {{noun}}, maybe it will {{verb}} the {{adjective}} {{noun}}!", "Use the {{adjective}} {{abbreviation}} {{noun}}, then you can {{verb}} the {{adjective}} {{noun}}!", "We need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!", "You can't {{verb}} the {{noun}} without {{ingverb}} the {{adjective}} {{abbreviation}} {{noun}}!", "{{ingverb}} the {{noun}} won't do anything, we need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!"], Gp = ["back up", "bypass", "calculate", "compress", "connect", "copy", "generate", "hack", "index", "input", "navigate", "override", "parse", "program", "quantify", "reboot", "synthesize", "transmit"], Kp = { adjective: xp, ingverb: Hp, noun: Wp, phrase: Op, verb: Gp }, Jp = Kp, zp = ["biz", "com", "info", "name", "net", "org"], Vp = ["example.com", "example.net", "example.org"], $p = ["gmail.com", "hotmail.com", "yahoo.com"], qp = { domain_suffix: zp, example_email: Vp, free_email: $p }, Up = qp, jp = ["#####", "####", "###"], Yp = ["Abilene", "Akron", "Alafaya", "Alameda", "Albany", "Albuquerque", "Alexandria", "Alhambra", "Aliso Viejo", "Allen", "Allentown", "Aloha", "Alpharetta", "Altadena", "Altamonte Springs", "Altoona", "Amarillo", "Ames", "Anaheim", "Anchorage", "Anderson", "Ankeny", "Ann Arbor", "Annandale", "Antelope", "Antioch", "Apex", "Apopka", "Apple Valley", "Appleton", "Arcadia", "Arden-Arcade", "Arecibo", "Arlington", "Arlington Heights", "Arvada", "Ashburn", "Asheville", "Aspen Hill", "Atascocita", "Athens-Clarke County", "Atlanta", "Attleboro", "Auburn", "Augusta-Richmond County", "Aurora", "Austin", "Avondale", "Azusa", "Bakersfield", "Baldwin Park", "Baltimore", "Barnstable Town", "Bartlett", "Baton Rouge", "Battle Creek", "Bayamon", "Bayonne", "Baytown", "Beaumont", "Beavercreek", "Beaverton", "Bedford", "Bel Air South", "Bell Gardens", "Belleville", "Bellevue", "Bellflower", "Bellingham", "Bend", "Bentonville", "Berkeley", "Berwyn", "Bethesda", "Bethlehem", "Billings", "Biloxi", "Binghamton", "Birmingham", "Bismarck", "Blacksburg", "Blaine", "Bloomington", "Blue Springs", "Boca Raton", "Boise City", "Bolingbrook", "Bonita Springs", "Bossier City", "Boston", "Bothell", "Boulder", "Bountiful", "Bowie", "Bowling Green", "Boynton Beach", "Bozeman", "Bradenton", "Brandon", "Brentwood", "Bridgeport", "Bristol", "Brockton", "Broken Arrow", "Brookhaven", "Brookline", "Brooklyn Park", "Broomfield", "Brownsville", "Bryan", "Buckeye", "Buena Park", "Buffalo", "Buffalo Grove", "Burbank", "Burien", "Burke", "Burleson", "Burlington", "Burnsville", "Caguas", "Caldwell", "Camarillo", "Cambridge", "Camden", "Canton", "Cape Coral", "Carlsbad", "Carmel", "Carmichael", "Carolina", "Carrollton", "Carson", "Carson City", "Cary", "Casa Grande", "Casas Adobes", "Casper", "Castle Rock", "Castro Valley", "Catalina Foothills", "Cathedral City", "Catonsville", "Cedar Hill", "Cedar Park", "Cedar Rapids", "Centennial", "Centreville", "Ceres", "Cerritos", "Champaign", "Chandler", "Chapel Hill", "Charleston", "Charlotte", "Charlottesville", "Chattanooga", "Cheektowaga", "Chesapeake", "Chesterfield", "Cheyenne", "Chicago", "Chico", "Chicopee", "Chino", "Chino Hills", "Chula Vista", "Cicero", "Cincinnati", "Citrus Heights", "Clarksville", "Clearwater", "Cleveland", "Cleveland Heights", "Clifton", "Clovis", "Coachella", "Coconut Creek", "Coeur d'Alene", "College Station", "Collierville", "Colorado Springs", "Colton", "Columbia", "Columbus", "Commerce City", "Compton", "Concord", "Conroe", "Conway", "Coon Rapids", "Coral Gables", "Coral Springs", "Corona", "Corpus Christi", "Corvallis", "Costa Mesa", "Council Bluffs", "Country Club", "Covina", "Cranston", "Cupertino", "Cutler Bay", "Cuyahoga Falls", "Cypress", "Dale City", "Dallas", "Daly City", "Danbury", "Danville", "Davenport", "Davie", "Davis", "Dayton", "Daytona Beach", "DeKalb", "DeSoto", "Dearborn", "Dearborn Heights", "Decatur", "Deerfield Beach", "Delano", "Delray Beach", "Deltona", "Denton", "Denver", "Des Moines", "Des Plaines", "Detroit", "Diamond Bar", "Doral", "Dothan", "Downers Grove", "Downey", "Draper", "Dublin", "Dubuque", "Duluth", "Dundalk", "Dunwoody", "Durham", "Eagan", "East Hartford", "East Honolulu", "East Lansing", "East Los Angeles", "East Orange", "East Providence", "Eastvale", "Eau Claire", "Eden Prairie", "Edina", "Edinburg", "Edmond", "El Cajon", "El Centro", "El Dorado Hills", "El Monte", "El Paso", "Elgin", "Elizabeth", "Elk Grove", "Elkhart", "Ellicott City", "Elmhurst", "Elyria", "Encinitas", "Enid", "Enterprise", "Erie", "Escondido", "Euclid", "Eugene", "Euless", "Evanston", "Evansville", "Everett", "Fairfield", "Fall River", "Fargo", "Farmington", "Farmington Hills", "Fayetteville", "Federal Way", "Findlay", "Fishers", "Flagstaff", "Flint", "Florence-Graham", "Florin", "Florissant", "Flower Mound", "Folsom", "Fond du Lac", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Myers", "Fort Pierce", "Fort Smith", "Fort Wayne", "Fort Worth", "Fountain Valley", "Fountainebleau", "Framingham", "Franklin", "Frederick", "Freeport", "Fremont", "Fresno", "Frisco", "Fullerton", "Gainesville", "Gaithersburg", "Galveston", "Garden Grove", "Gardena", "Garland", "Gary", "Gastonia", "Georgetown", "Germantown", "Gilbert", "Gilroy", "Glen Burnie", "Glendale", "Glendora", "Glenview", "Goodyear", "Grand Forks", "Grand Island", "Grand Junction", "Grand Prairie", "Grand Rapids", "Grapevine", "Great Falls", "Greeley", "Green Bay", "Greensboro", "Greenville", "Greenwood", "Gresham", "Guaynabo", "Gulfport", "Hacienda Heights", "Hackensack", "Haltom City", "Hamilton", "Hammond", "Hampton", "Hanford", "Harlingen", "Harrisburg", "Harrisonburg", "Hartford", "Hattiesburg", "Haverhill", "Hawthorne", "Hayward", "Hemet", "Hempstead", "Henderson", "Hendersonville", "Hesperia", "Hialeah", "Hicksville", "High Point", "Highland", "Highlands Ranch", "Hillsboro", "Hilo", "Hoboken", "Hoffman Estates", "Hollywood", "Homestead", "Honolulu", "Hoover", "Houston", "Huntersville", "Huntington", "Huntington Beach", "Huntington Park", "Huntsville", "Hutchinson", "Idaho Falls", "Independence", "Indianapolis", "Indio", "Inglewood", "Iowa City", "Irondequoit", "Irvine", "Irving", "Jackson", "Jacksonville", "Janesville", "Jefferson City", "Jeffersonville", "Jersey City", "Johns Creek", "Johnson City", "Joliet", "Jonesboro", "Joplin", "Jupiter", "Jurupa Valley", "Kalamazoo", "Kannapolis", "Kansas City", "Kearny", "Keller", "Kendale Lakes", "Kendall", "Kenner", "Kennewick", "Kenosha", "Kent", "Kentwood", "Kettering", "Killeen", "Kingsport", "Kirkland", "Kissimmee", "Knoxville", "Kokomo", "La Crosse", "La Habra", "La Mesa", "La Mirada", "Lacey", "Lafayette", "Laguna Niguel", "Lake Charles", "Lake Elsinore", "Lake Forest", "Lake Havasu City", "Lake Ridge", "Lakeland", "Lakeville", "Lakewood", "Lancaster", "Lansing", "Laredo", "Largo", "Las Cruces", "Las Vegas", "Lauderhill", "Lawrence", "Lawton", "Layton", "League City", "Lee's Summit", "Leesburg", "Lehi", "Lehigh Acres", "Lenexa", "Levittown", "Lewisville", "Lexington-Fayette", "Lincoln", "Linden", "Little Rock", "Littleton", "Livermore", "Livonia", "Lodi", "Logan", "Lombard", "Lompoc", "Long Beach", "Longmont", "Longview", "Lorain", "Los Angeles", "Louisville/Jefferson County", "Loveland", "Lowell", "Lubbock", "Lynchburg", "Lynn", "Lynwood", "Macon-Bibb County", "Madera", "Madison", "Malden", "Manchester", "Manhattan", "Mansfield", "Manteca", "Maple Grove", "Margate", "Maricopa", "Marietta", "Marysville", "Mayaguez", "McAllen", "McKinney", "McLean", "Medford", "Melbourne", "Memphis", "Menifee", "Mentor", "Merced", "Meriden", "Meridian", "Mesa", "Mesquite", "Metairie", "Methuen Town", "Miami", "Miami Beach", "Miami Gardens", "Middletown", "Midland", "Midwest City", "Milford", "Millcreek", "Milpitas", "Milwaukee", "Minneapolis", "Minnetonka", "Minot", "Miramar", "Mishawaka", "Mission", "Mission Viejo", "Missoula", "Missouri City", "Mobile", "Modesto", "Moline", "Monroe", "Montebello", "Monterey Park", "Montgomery", "Moore", "Moreno Valley", "Morgan Hill", "Mount Pleasant", "Mount Prospect", "Mount Vernon", "Mountain View", "Muncie", "Murfreesboro", "Murray", "Murrieta", "Nampa", "Napa", "Naperville", "Nashua", "Nashville-Davidson", "National City", "New Bedford", "New Braunfels", "New Britain", "New Brunswick", "New Haven", "New Orleans", "New Rochelle", "New York", "Newark", "Newport Beach", "Newport News", "Newton", "Niagara Falls", "Noblesville", "Norfolk", "Normal", "Norman", "North Bethesda", "North Charleston", "North Highlands", "North Las Vegas", "North Lauderdale", "North Little Rock", "North Miami", "North Miami Beach", "North Port", "North Richland Hills", "Norwalk", "Novato", "Novi", "O'Fallon", "Oak Lawn", "Oak Park", "Oakland", "Oakland Park", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orland Park", "Orlando", "Oro Valley", "Oshkosh", "Overland Park", "Owensboro", "Oxnard", "Palatine", "Palm Bay", "Palm Beach Gardens", "Palm Coast", "Palm Desert", "Palm Harbor", "Palm Springs", "Palmdale", "Palo Alto", "Paradise", "Paramount", "Parker", "Parma", "Pasadena", "Pasco", "Passaic", "Paterson", "Pawtucket", "Peabody", "Pearl City", "Pearland", "Pembroke Pines", "Pensacola", "Peoria", "Perris", "Perth Amboy", "Petaluma", "Pflugerville", "Pharr", "Philadelphia", "Phoenix", "Pico Rivera", "Pine Bluff", "Pine Hills", "Pinellas Park", "Pittsburg", "Pittsburgh", "Pittsfield", "Placentia", "Plainfield", "Plano", "Plantation", "Pleasanton", "Plymouth", "Pocatello", "Poinciana", "Pomona", "Pompano Beach", "Ponce", "Pontiac", "Port Arthur", "Port Charlotte", "Port Orange", "Port St. Lucie", "Portage", "Porterville", "Portland", "Portsmouth", "Potomac", "Poway", "Providence", "Provo", "Pueblo", "Quincy", "Racine", "Raleigh", "Rancho Cordova", "Rancho Cucamonga", "Rancho Palos Verdes", "Rancho Santa Margarita", "Rapid City", "Reading", "Redding", "Redlands", "Redmond", "Redondo Beach", "Redwood City", "Reno", "Renton", "Reston", "Revere", "Rialto", "Richardson", "Richland", "Richmond", "Rio Rancho", "Riverside", "Riverton", "Riverview", "Roanoke", "Rochester", "Rochester Hills", "Rock Hill", "Rockford", "Rocklin", "Rockville", "Rockwall", "Rocky Mount", "Rogers", "Rohnert Park", "Rosemead", "Roseville", "Roswell", "Round Rock", "Rowland Heights", "Rowlett", "Royal Oak", "Sacramento", "Saginaw", "Salem", "Salina", "Salinas", "Salt Lake City", "Sammamish", "San Angelo", "San Antonio", "San Bernardino", "San Bruno", "San Buenaventura (Ventura)", "San Clemente", "San Diego", "San Francisco", "San Jacinto", "San Jose", "San Juan", "San Leandro", "San Luis Obispo", "San Marcos", "San Mateo", "San Rafael", "San Ramon", "San Tan Valley", "Sandy", "Sandy Springs", "Sanford", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Fe", "Santa Maria", "Santa Monica", "Santa Rosa", "Santee", "Sarasota", "Savannah", "Sayreville", "Schaumburg", "Schenectady", "Scottsdale", "Scranton", "Seattle", "Severn", "Shawnee", "Sheboygan", "Shoreline", "Shreveport", "Sierra Vista", "Silver Spring", "Simi Valley", "Sioux City", "Sioux Falls", "Skokie", "Smyrna", "Somerville", "South Bend", "South Gate", "South Hill", "South Jordan", "South San Francisco", "South Valley", "South Whittier", "Southaven", "Southfield", "Sparks", "Spokane", "Spokane Valley", "Spring", "Spring Hill", "Spring Valley", "Springdale", "Springfield", "St. Charles", "St. Clair Shores", "St. Cloud", "St. George", "St. Joseph", "St. Louis", "St. Louis Park", "St. Paul", "St. Peters", "St. Petersburg", "Stamford", "State College", "Sterling Heights", "Stillwater", "Stockton", "Stratford", "Strongsville", "Suffolk", "Sugar Land", "Summerville", "Sunnyvale", "Sunrise", "Sunrise Manor", "Surprise", "Syracuse", "Tacoma", "Tallahassee", "Tamarac", "Tamiami", "Tampa", "Taunton", "Taylor", "Taylorsville", "Temecula", "Tempe", "Temple", "Terre Haute", "Texas City", "The Hammocks", "The Villages", "The Woodlands", "Thornton", "Thousand Oaks", "Tigard", "Tinley Park", "Titusville", "Toledo", "Toms River", "Tonawanda", "Topeka", "Torrance", "Town 'n' Country", "Towson", "Tracy", "Trenton", "Troy", "Trujillo Alto", "Tuckahoe", "Tucson", "Tulare", "Tulsa", "Turlock", "Tuscaloosa", "Tustin", "Twin Falls", "Tyler", "Union City", "University", "Upland", "Urbana", "Urbandale", "Utica", "Vacaville", "Valdosta", "Vallejo", "Vancouver", "Victoria", "Victorville", "Vineland", "Virginia Beach", "Visalia", "Vista", "Waco", "Waipahu", "Waldorf", "Walnut Creek", "Waltham", "Warner Robins", "Warren", "Warwick", "Washington", "Waterbury", "Waterloo", "Watsonville", "Waukegan", "Waukesha", "Wauwatosa", "Wellington", "Wesley Chapel", "West Allis", "West Babylon", "West Covina", "West Des Moines", "West Hartford", "West Haven", "West Jordan", "West Lafayette", "West New York", "West Palm Beach", "West Sacramento", "West Seneca", "West Valley City", "Westfield", "Westland", "Westminster", "Weston", "Weymouth Town", "Wheaton", "White Plains", "Whittier", "Wichita", "Wichita Falls", "Wilmington", "Wilson", "Winston-Salem", "Woodbury", "Woodland", "Worcester", "Wylie", "Wyoming", "Yakima", "Yonkers", "Yorba Linda", "York", "Youngstown", "Yuba City", "Yucaipa", "Yuma"], Zp = ["{{location.city_prefix}} {{person.first_name.generic}}{{location.city_suffix}}", "{{location.city_prefix}} {{person.first_name.generic}}", "{{person.first_name.generic}}{{location.city_suffix}}", "{{person.last_name.generic}}{{location.city_suffix}}", "{{location.city_name}}"], Qp = ["North", "East", "West", "South", "New", "Lake", "Port", "Fort"], Xp = ["town", "ton", "land", "ville", "berg", "burgh", "boro", "borough", "bury", "view", "port", "mouth", "stad", "stead", "furt", "chester", "cester", "fort", "field", "haven", "side", "shire", "worth"], eF = ["Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"], aF = ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (Chagos Archipelago)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Faroe Islands", "Falkland Islands (Malvinas)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Democratic People's Republic of Korea", "Republic of Korea", "Kuwait", "Kyrgyz Republic", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Macedonia", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard & Jan Mayen Islands", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"], tF = ["Adams County", "Calhoun County", "Carroll County", "Clark County", "Clay County", "Crawford County", "Douglas County", "Fayette County", "Franklin County", "Grant County", "Greene County", "Hamilton County", "Hancock County", "Henry County", "Jackson County", "Jefferson County", "Johnson County", "Lake County", "Lawrence County", "Lee County", "Lincoln County", "Logan County", "Madison County", "Marion County", "Marshall County", "Monroe County", "Montgomery County", "Morgan County", "Perry County", "Pike County", "Polk County", "Scott County", "Union County", "Warren County", "Washington County", "Wayne County", "Avon", "Bedfordshire", "Berkshire", "Borders", "Buckinghamshire", "Cambridgeshire", "Central", "Cheshire", "Cleveland", "Clwyd", "Cornwall", "County Antrim", "County Armagh", "County Down", "County Fermanagh", "County Londonderry", "County Tyrone", "Cumbria", "Derbyshire", "Devon", "Dorset", "Dumfries and Galloway", "Durham", "Dyfed", "East Sussex", "Essex", "Fife", "Gloucestershire", "Grampian", "Greater Manchester", "Gwent", "Gwynedd County", "Hampshire", "Herefordshire", "Hertfordshire", "Highlands and Islands", "Humberside", "Isle of Wight", "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "Lothian", "Merseyside", "Mid Glamorgan", "Norfolk", "North Yorkshire", "Northamptonshire", "Northumberland", "Nottinghamshire", "Oxfordshire", "Powys", "Rutland", "Shropshire", "Somerset", "South Glamorgan", "South Yorkshire", "Staffordshire", "Strathclyde", "Suffolk", "Surrey", "Tayside", "Tyne and Wear", "Warwickshire", "West Glamorgan", "West Midlands", "West Sussex", "West Yorkshire", "Wiltshire", "Worcestershire"], nF = { cardinal: ["North", "East", "South", "West"], cardinal_abbr: ["N", "E", "S", "W"], ordinal: ["Northeast", "Northwest", "Southeast", "Southwest"], ordinal_abbr: ["NE", "NW", "SE", "SW"] }, rF = [{ name: "Afrikaans", alpha2: "af", alpha3: "afr" }, { name: "Azerbaijani", alpha2: "az", alpha3: "aze" }, { name: "Maldivian", alpha2: "dv", alpha3: "div" }, { name: "Farsi/Persian", alpha2: "fa", alpha3: "fas" }, { name: "Latvian", alpha2: "lv", alpha3: "lav" }, { name: "Indonesian", alpha2: "id", alpha3: "ind" }, { name: "Nepali", alpha2: "ne", alpha3: "nep" }, { name: "Thai", alpha2: "th", alpha3: "tha" }, { name: "Uzbek", alpha2: "uz", alpha3: "uzb" }, { name: "Yoruba", alpha2: "yo", alpha3: "yor" }, { name: "Pashto", alpha2: "ps", alpha3: "pus" }, { name: "English", alpha2: "en", alpha3: "eng" }, { name: "Urdu", alpha2: "ur", alpha3: "urd" }, { name: "German", alpha2: "de", alpha3: "deu" }, { name: "French", alpha2: "fr", alpha3: "fra" }, { name: "Spanish", alpha2: "es", alpha3: "spa" }, { name: "Italian", alpha2: "it", alpha3: "ita" }, { name: "Dutch", alpha2: "nl", alpha3: "nld" }, { name: "Russian", alpha2: "ru", alpha3: "rus" }, { name: "Portuguese", alpha2: "pt", alpha3: "por" }, { name: "Polish", alpha2: "pl", alpha3: "pol" }, { name: "Arabic", alpha2: "ar", alpha3: "ara" }, { name: "Japanese", alpha2: "ja", alpha3: "jpn" }, { name: "Chinese", alpha2: "zh", alpha3: "zho" }, { name: "Hindi", alpha2: "hi", alpha3: "hin" }, { name: "Bengali", alpha2: "bn", alpha3: "ben" }, { name: "Gujarati", alpha2: "gu", alpha3: "guj" }, { name: "Tamil", alpha2: "ta", alpha3: "tam" }, { name: "Telugu", alpha2: "te", alpha3: "tel" }, { name: "Punjabi", alpha2: "pa", alpha3: "pan" }, { name: "Vietnamese", alpha2: "vi", alpha3: "vie" }, { name: "Korean", alpha2: "ko", alpha3: "kor" }, { name: "Turkish", alpha2: "tr", alpha3: "tur" }, { name: "Swedish", alpha2: "sv", alpha3: "swe" }, { name: "Greek", alpha2: "el", alpha3: "ell" }, { name: "Czech", alpha2: "cs", alpha3: "ces" }, { name: "Hungarian", alpha2: "hu", alpha3: "hun" }, { name: "Romanian", alpha2: "ro", alpha3: "ron" }, { name: "Ukrainian", alpha2: "uk", alpha3: "ukr" }, { name: "Norwegian", alpha2: "no", alpha3: "nor" }, { name: "Serbian", alpha2: "sr", alpha3: "srp" }, { name: "Croatian", alpha2: "hr", alpha3: "hrv" }, { name: "Slovak", alpha2: "sk", alpha3: "slk" }, { name: "Slovenian", alpha2: "sl", alpha3: "slv" }, { name: "Icelandic", alpha2: "is", alpha3: "isl" }, { name: "Finnish", alpha2: "fi", alpha3: "fin" }, { name: "Danish", alpha2: "da", alpha3: "dan" }, { name: "Swahili", alpha2: "sw", alpha3: "swa" }, { name: "Bashkir", alpha2: "ba", alpha3: "bak" }, { name: "Basque", alpha2: "eu", alpha3: "eus" }, { name: "Catalan", alpha2: "ca", alpha3: "cat" }, { name: "Galician", alpha2: "gl", alpha3: "glg" }, { name: "Esperanto", alpha2: "eo", alpha3: "epo" }, { name: "Fijian", alpha2: "fj", alpha3: "fij" }, { name: "Malagasy", alpha2: "mg", alpha3: "mlg" }, { name: "Maltese", alpha2: "mt", alpha3: "mlt" }, { name: "Albanian", alpha2: "sq", alpha3: "sqi" }, { name: "Armenian", alpha2: "hy", alpha3: "hye" }, { name: "Georgian", alpha2: "ka", alpha3: "kat" }, { name: "Macedonian", alpha2: "mk", alpha3: "mkd" }, { name: "Kazakh", alpha2: "kk", alpha3: "kaz" }, { name: "Haitian Creole", alpha2: "ht", alpha3: "hat" }, { name: "Mongolian", alpha2: "mn", alpha3: "mon" }, { name: "Kyrgyz", alpha2: "ky", alpha3: "kir" }, { name: "Finnish", alpha2: "fi", alpha3: "fin" }, { name: "Tagalog", alpha2: "tl", alpha3: "tgl" }, { name: "Malay", alpha2: "ms", alpha3: "msa" }, { name: "Tajik", alpha2: "tg", alpha3: "tgk" }, { name: "Swati", alpha2: "ss", alpha3: "ssw" }, { name: "Tatar", alpha2: "tt", alpha3: "tat" }, { name: "Zulu", alpha2: "zu", alpha3: "zul" }], iF = ["#####", "#####-####"], oF = ["Apt. ###", "Suite ###"], sF = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], lF = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"], uF = { normal: "{{location.buildingNumber}} {{location.street}}", full: "{{location.buildingNumber}} {{location.street}} {{location.secondaryAddress}}" }, cF = ["10th Street", "11th Street", "12th Street", "13th Street", "14th Street", "15th Street", "16th Street", "1st Avenue", "1st Street", "2nd Avenue", "2nd Street", "3rd Avenue", "3rd Street", "4th Avenue", "4th Street", "5th Avenue", "5th Street", "6th Avenue", "6th Street", "7th Avenue", "7th Street", "8th Avenue", "8th Street", "9th Street", "A Street", "Abbey Road", "Adams Avenue", "Adams Street", "Airport Road", "Albany Road", "Albert Road", "Albion Street", "Alexandra Road", "Alfred Street", "Alma Street", "Ash Close", "Ash Grove", "Ash Road", "Ash Street", "Aspen Close", "Atlantic Avenue", "Avenue Road", "Back Lane", "Baker Street", "Balmoral Road", "Barn Close", "Barton Road", "Bath Road", "Bath Street", "Bay Street", "Beach Road", "Bedford Road", "Beech Close", "Beech Drive", "Beech Grove", "Beech Road", "Beechwood Avenue", "Bell Lane", "Belmont Road", "Birch Avenue", "Birch Close", "Birch Grove", "Birch Road", "Blind Lane", "Bluebell Close", "Boundary Road", "Bramble Close", "Bramley Close", "Bridge Road", "Bridge Street", "Broad Lane", "Broad Street", "Broadway", "Broadway Avenue", "Broadway Street", "Brook Lane", "Brook Road", "Brook Street", "Brookside", "Buckingham Road", "Cambridge Street", "Canal Street", "Castle Close", "Castle Lane", "Castle Road", "Castle Street", "Cavendish Road", "Cedar Avenue", "Cedar Close", "Cedar Grove", "Cedar Road", "Cedar Street", "Cemetery Road", "Center Avenue", "Center Road", "Center Street", "Central Avenue", "Central Street", "Chapel Close", "Chapel Hill", "Chapel Road", "Chapel Street", "Charles Street", "Cherry Close", "Cherry Street", "Cherry Tree Close", "Chester Road", "Chestnut Close", "Chestnut Drive", "Chestnut Grove", "Chestnut Street", "Church Avenue", "Church Close", "Church Hill", "Church Lane", "Church Path", "Church Road", "Church Street", "Church View", "Church Walk", "Claremont Road", "Clarence Road", "Clarence Street", "Clarendon Road", "Clark Street", "Clay Lane", "Cleveland Street", "Cliff Road", "Clifton Road", "Clinton Street", "College Avenue", "College Street", "Columbia Avenue", "Commerce Street", "Commercial Road", "Commercial Street", "Common Lane", "Coronation Avenue", "Coronation Road", "County Line Road", "County Road", "Court Street", "Cow Lane", "Crescent Road", "Cromwell Road", "Cross Lane", "Cross Street", "Crown Street", "Cumberland Street", "Dale Street", "Dark Lane", "Davis Street", "Depot Street", "Derby Road", "Derwent Close", "Devonshire Road", "Division Street", "Douglas Road", "Duke Street", "E 10th Street", "E 11th Street", "E 12th Street", "E 14th Street", "E 1st Street", "E 2nd Street", "E 3rd Street", "E 4th Avenue", "E 4th Street", "E 5th Street", "E 6th Avenue", "E 6th Street", "E 7th Street", "E 8th Street", "E 9th Street", "E Bridge Street", "E Broad Street", "E Broadway", "E Broadway Street", "E Cedar Street", "E Center Street", "E Central Avenue", "E Church Street", "E Elm Street", "E Franklin Street", "E Front Street", "E Grand Avenue", "E High Street", "E Jackson Street", "E Jefferson Street", "E Main", "E Main Street", "E Maple Street", "E Market Street", "E North Street", "E Oak Street", "E Park Avenue", "E Pine Street", "E River Road", "E South Street", "E State Street", "E Union Street", "E Walnut Street", "E Washington Avenue", "E Washington Street", "E Water Street", "East Avenue", "East Road", "East Street", "Edward Street", "Elm Close", "Elm Grove", "Elm Road", "Elm Street", "Euclid Avenue", "Fairfield Road", "Farm Close", "Ferry Road", "Field Close", "Field Lane", "First Avenue", "First Street", "Fore Street", "Forest Avenue", "Forest Road", "Fourth Avenue", "Franklin Avenue", "Franklin Road", "Franklin Street", "Front Street", "Frontage Road", "Garden Close", "Garden Street", "George Street", "Gladstone Road", "Glebe Close", "Gloucester Road", "Gordon Road", "Gordon Street", "Grand Avenue", "Grange Avenue", "Grange Close", "Grange Road", "Grant Street", "Green Close", "Green Lane", "Green Street", "Greenville Road", "Greenway", "Greenwood Road", "Grove Lane", "Grove Road", "Grove Street", "Hall Lane", "Hall Street", "Harrison Avenue", "Harrison Street", "Hawthorn Avenue", "Hawthorn Close", "Hazel Close", "Hazel Grove", "Heath Road", "Heather Close", "Henry Street", "Heron Close", "Hickory Street", "High Road", "High Street", "Highfield Avenue", "Highfield Close", "Highfield Road", "Highland Avenue", "Hill Road", "Hill Street", "Hillside", "Hillside Avenue", "Hillside Close", "Hillside Road", "Holly Close", "Honeysuckle Close", "Howard Road", "Howard Street", "Jackson Avenue", "Jackson Street", "James Street", "Jefferson Avenue", "Jefferson Street", "Johnson Street", "Jubilee Close", "Juniper Close", "Kent Road", "Kestrel Close", "King Street", "King's Road", "Kingfisher Close", "Kings Highway", "Kingsway", "Laburnum Grove", "Lafayette Street", "Lake Avenue", "Lake Drive", "Lake Road", "Lake Street", "Lancaster Road", "Lansdowne Road", "Larch Close", "Laurel Close", "Lawrence Street", "Lee Street", "Liberty Street", "Lime Grove", "Lincoln Avenue", "Lincoln Highway", "Lincoln Road", "Lincoln Street", "Locust Street", "Lodge Close", "Lodge Lane", "London Road", "Long Lane", "Low Road", "Madison Avenue", "Madison Street", "Main", "Main Avenue", "Main Road", "Main Street", "Main Street E", "Main Street N", "Main Street S", "Main Street W", "Manchester Road", "Manor Close", "Manor Drive", "Manor Gardens", "Manor Road", "Manor Way", "Maple Avenue", "Maple Close", "Maple Drive", "Maple Road", "Maple Street", "Market Place", "Market Square", "Market Street", "Marlborough Road", "Marsh Lane", "Martin Luther King Boulevard", "Martin Luther King Drive", "Martin Luther King Jr Boulevard", "Mary Street", "Mayfield Road", "Meadow Close", "Meadow Drive", "Meadow Lane", "Meadow View", "Meadow Way", "Memorial Drive", "Middle Street", "Mill Close", "Mill Lane", "Mill Road", "Mill Street", "Milton Road", "Milton Street", "Monroe Street", "Moor Lane", "Moss Lane", "Mount Pleasant", "Mount Street", "Mulberry Street", "N 1st Street", "N 2nd Street", "N 3rd Street", "N 4th Street", "N 5th Street", "N 6th Street", "N 7th Street", "N 8th Street", "N 9th Street", "N Bridge Street", "N Broad Street", "N Broadway", "N Broadway Street", "N Cedar Street", "N Center Street", "N Central Avenue", "N Chestnut Street", "N Church Street", "N College Street", "N Court Street", "N Division Street", "N East Street", "N Elm Street", "N Franklin Street", "N Front Street", "N Harrison Street", "N High Street", "N Jackson Street", "N Jefferson Street", "N Lincoln Street", "N Locust Street", "N Main", "N Main Avenue", "N Main Street", "N Maple Street", "N Market Street", "N Monroe Street", "N Oak Street", "N Park Street", "N Pearl Street", "N Pine Street", "N Poplar Street", "N Railroad Street", "N State Street", "N Union Street", "N Walnut Street", "N Washington Avenue", "N Washington Street", "N Water Street", "Nelson Road", "Nelson Street", "New Lane", "New Road", "New Street", "Newton Road", "Nightingale Close", "Norfolk Road", "North Avenue", "North Lane", "North Road", "North Street", "Northfield Road", "Oak Avenue", "Oak Drive", "Oak Lane", "Oak Road", "Oak Street", "Oakfield Road", "Oaklands", "Old Lane", "Old Military Road", "Old Road", "Old State Road", "Orchard Drive", "Orchard Lane", "Orchard Road", "Orchard Street", "Oxford Road", "Oxford Street", "Park Avenue", "Park Crescent", "Park Drive", "Park Lane", "Park Place", "Park Road", "Park Street", "Park View", "Parkside", "Pearl Street", "Pennsylvania Avenue", "Pine Close", "Pine Grove", "Pine Street", "Pinfold Lane", "Pleasant Street", "Poplar Avenue", "Poplar Close", "Poplar Road", "Poplar Street", "Post Road", "Pound Lane", "Princes Street", "Princess Street", "Priory Close", "Priory Road", "Prospect Avenue", "Prospect Place", "Prospect Road", "Prospect Street", "Quarry Lane", "Quarry Road", "Queen's Road", "Railroad Avenue", "Railroad Street", "Railway Street", "Rectory Close", "Rectory Lane", "Richmond Close", "Richmond Road", "Ridge Road", "River Road", "River Street", "Riverside", "Riverside Avenue", "Riverside Drive", "Roman Road", "Roman Way", "Rowan Close", "Russell Street", "S 10th Street", "S 14th Street", "S 1st Avenue", "S 1st Street", "S 2nd Street", "S 3rd Street", "S 4th Street", "S 5th Street", "S 6th Street", "S 7th Street", "S 8th Street", "S 9th Street", "S Bridge Street", "S Broad Street", "S Broadway", "S Broadway Street", "S Center Street", "S Central Avenue", "S Chestnut Street", "S Church Street", "S College Street", "S Division Street", "S East Street", "S Elm Street", "S Franklin Street", "S Front Street", "S Grand Avenue", "S High Street", "S Jackson Street", "S Jefferson Street", "S Lincoln Street", "S Main", "S Main Avenue", "S Main Street", "S Maple Street", "S Market Street", "S Mill Street", "S Monroe Street", "S Oak Street", "S Park Street", "S Pine Street", "S Railroad Street", "S State Street", "S Union Street", "S Walnut Street", "S Washington Avenue", "S Washington Street", "S Water Street", "S West Street", "Salisbury Road", "Sandringham Road", "Sandy Lane", "School Close", "School Lane", "School Road", "School Street", "Second Avenue", "Silver Street", "Skyline Drive", "Smith Street", "Somerset Road", "South Avenue", "South Drive", "South Road", "South Street", "South View", "Spring Gardens", "Spring Street", "Springfield Close", "Springfield Road", "Spruce Street", "St Andrew's Road", "St Andrews Close", "St George's Road", "St John's Road", "St Mary's Close", "St Mary's Road", "Stanley Road", "Stanley Street", "State Avenue", "State Line Road", "State Road", "State Street", "Station Road", "Station Street", "Stoney Lane", "Sycamore Avenue", "Sycamore Close", "Sycamore Drive", "Sycamore Street", "Talbot Road", "Tennyson Road", "The Avenue", "The Beeches", "The Causeway", "The Chase", "The Coppice", "The Copse", "The Crescent", "The Croft", "The Dell", "The Drive", "The Fairway", "The Glebe", "The Grange", "The Green", "The Grove", "The Hawthorns", "The Lane", "The Laurels", "The Limes", "The Maltings", "The Meadows", "The Mews", "The Mount", "The Oaks", "The Orchard", "The Oval", "The Paddock", "The Paddocks", "The Poplars", "The Ridgeway", "The Ridings", "The Rise", "The Sidings", "The Spinney", "The Square", "The Willows", "The Woodlands", "Third Avenue", "Third Street", "Tower Road", "Trinity Road", "Tudor Close", "Union Avenue", "Union Street", "University Avenue", "University Drive", "Valley Road", "Veterans Memorial Drive", "Veterans Memorial Highway", "Vicarage Close", "Vicarage Lane", "Vicarage Road", "Victoria Place", "Victoria Road", "Victoria Street", "Vine Street", "W 10th Street", "W 11th Street", "W 12th Street", "W 14th Street", "W 1st Street", "W 2nd Street", "W 3rd Street", "W 4th Avenue", "W 4th Street", "W 5th Street", "W 6th Avenue", "W 6th Street", "W 7th Street", "W 8th Street", "W 9th Street", "W Bridge Street", "W Broad Street", "W Broadway", "W Broadway Avenue", "W Broadway Street", "W Center Street", "W Central Avenue", "W Chestnut Street", "W Church Street", "W Division Street", "W Elm Street", "W Franklin Street", "W Front Street", "W Grand Avenue", "W High Street", "W Jackson Street", "W Jefferson Street", "W Lake Street", "W Main", "W Main Street", "W Maple Street", "W Market Street", "W Monroe Street", "W North Street", "W Oak Street", "W Park Street", "W Pine Street", "W River Road", "W South Street", "W State Street", "W Union Street", "W Walnut Street", "W Washington Avenue", "W Washington Street", "Walnut Close", "Walnut Street", "Warren Close", "Warren Road", "Washington Avenue", "Washington Boulevard", "Washington Road", "Washington Street", "Water Lane", "Water Street", "Waterloo Road", "Waterside", "Watery Lane", "Waverley Road", "Well Lane", "Wellington Road", "Wellington Street", "West Avenue", "West End", "West Lane", "West Road", "West Street", "West View", "Western Avenue", "Western Road", "Westfield Road", "Westgate", "William Street", "Willow Close", "Willow Drive", "Willow Grove", "Willow Road", "Willow Street", "Windermere Road", "Windmill Close", "Windmill Lane", "Windsor Avenue", "Windsor Close", "Windsor Drive", "Wood Lane", "Wood Street", "Woodland Close", "Woodland Road", "Woodlands", "Woodlands Avenue", "Woodlands Close", "Woodlands Road", "Woodside", "Woodside Road", "Wren Close", "Yew Tree Close", "York Road", "York Street"], dF = ["{{person.first_name.generic}} {{location.street_suffix}}", "{{person.last_name.generic}} {{location.street_suffix}}", "{{location.street_name}}"], hF = ["Alley", "Avenue", "Branch", "Bridge", "Brook", "Brooks", "Burg", "Burgs", "Bypass", "Camp", "Canyon", "Cape", "Causeway", "Center", "Centers", "Circle", "Circles", "Cliff", "Cliffs", "Club", "Common", "Corner", "Corners", "Course", "Court", "Courts", "Cove", "Coves", "Creek", "Crescent", "Crest", "Crossing", "Crossroad", "Curve", "Dale", "Dam", "Divide", "Drive", "Drives", "Estate", "Estates", "Expressway", "Extension", "Extensions", "Fall", "Falls", "Ferry", "Field", "Fields", "Flat", "Flats", "Ford", "Fords", "Forest", "Forge", "Forges", "Fork", "Forks", "Fort", "Freeway", "Garden", "Gardens", "Gateway", "Glen", "Glens", "Green", "Greens", "Grove", "Groves", "Harbor", "Harbors", "Haven", "Heights", "Highway", "Hill", "Hills", "Hollow", "Inlet", "Island", "Islands", "Isle", "Junction", "Junctions", "Key", "Keys", "Knoll", "Knolls", "Lake", "Lakes", "Land", "Landing", "Lane", "Light", "Lights", "Loaf", "Lock", "Locks", "Lodge", "Loop", "Mall", "Manor", "Manors", "Meadow", "Meadows", "Mews", "Mill", "Mills", "Mission", "Motorway", "Mount", "Mountain", "Mountains", "Neck", "Orchard", "Oval", "Overpass", "Park", "Parks", "Parkway", "Parkways", "Pass", "Passage", "Path", "Pike", "Pine", "Pines", "Place", "Plain", "Plains", "Plaza", "Point", "Points", "Port", "Ports", "Prairie", "Radial", "Ramp", "Ranch", "Rapid", "Rapids", "Rest", "Ridge", "Ridges", "River", "Road", "Roads", "Route", "Row", "Rue", "Run", "Shoal", "Shoals", "Shore", "Shores", "Skyway", "Spring", "Springs", "Spur", "Spurs", "Square", "Squares", "Station", "Stravenue", "Stream", "Street", "Streets", "Summit", "Terrace", "Throughway", "Trace", "Track", "Trafficway", "Trail", "Tunnel", "Turnpike", "Underpass", "Union", "Unions", "Valley", "Valleys", "Via", "Viaduct", "View", "Views", "Village", "Villages", "Ville", "Vista", "Walk", "Walks", "Wall", "Way", "Ways", "Well", "Wells"], mF = { building_number: jp, city_name: Yp, city_pattern: Zp, city_prefix: Qp, city_suffix: Xp, continent: eF, country: aF, county: tF, direction: nF, language: rF, postcode: iF, secondary_address: oF, state: sF, state_abbr: lF, street_address: uF, street_name: cF, street_pattern: dF, street_suffix: hF }, pF = mF, FF = ["a", "ab", "abbas", "abduco", "abeo", "abscido", "absconditus", "absens", "absorbeo", "absque", "abstergo", "absum", "abundans", "abutor", "accedo", "accendo", "acceptus", "accommodo", "accusamus", "accusantium", "accusator", "acer", "acerbitas", "acervus", "acidus", "acies", "acquiro", "acsi", "ad", "adamo", "adaugeo", "addo", "adduco", "ademptio", "adeo", "adeptio", "adfectus", "adfero", "adficio", "adflicto", "adhaero", "adhuc", "adicio", "adimpleo", "adinventitias", "adipisci", "adipiscor", "adiuvo", "administratio", "admiratio", "admitto", "admoneo", "admoveo", "adnuo", "adopto", "adsidue", "adstringo", "adsuesco", "adsum", "adulatio", "adulescens", "aduro", "advenio", "adversus", "advoco", "aedificium", "aeger", "aegre", "aegrotatio", "aegrus", "aeneus", "aequitas", "aequus", "aer", "aestas", "aestivus", "aestus", "aetas", "aeternus", "ager", "aggero", "aggredior", "agnitio", "agnosco", "ago", "ait", "aiunt", "alias", "alienus", "alii", "alioqui", "aliqua", "aliquam", "aliquid", "alius", "allatus", "alo", "alter", "altus", "alveus", "amaritudo", "ambitus", "ambulo", "amet", "amicitia", "amiculum", "amissio", "amita", "amitto", "amo", "amor", "amoveo", "amplexus", "amplitudo", "amplus", "ancilla", "angelus", "angulus", "angustus", "animadverto", "animi", "animus", "annus", "anser", "ante", "antea", "antepono", "antiquus", "aperiam", "aperio", "aperte", "apostolus", "apparatus", "appello", "appono", "appositus", "approbo", "apto", "aptus", "apud", "aqua", "ara", "aranea", "arbitro", "arbor", "arbustum", "arca", "arceo", "arcesso", "architecto", "arcus", "argentum", "argumentum", "arguo", "arma", "armarium", "aro", "ars", "articulus", "artificiose", "arto", "arx", "ascisco", "ascit", "asper", "asperiores", "aspernatur", "aspicio", "asporto", "assentator", "assumenda", "astrum", "at", "atavus", "ater", "atque", "atqui", "atrocitas", "atrox", "attero", "attollo", "attonbitus", "auctor", "auctus", "audacia", "audax", "audentia", "audeo", "audio", "auditor", "aufero", "aureus", "aurum", "aut", "autem", "autus", "auxilium", "avaritia", "avarus", "aveho", "averto", "baiulus", "balbus", "barba", "bardus", "basium", "beatae", "beatus", "bellicus", "bellum", "bene", "beneficium", "benevolentia", "benigne", "bestia", "bibo", "bis", "blandior", "blanditiis", "bonus", "bos", "brevis", "cado", "caecus", "caelestis", "caelum", "calamitas", "calcar", "calco", "calculus", "callide", "campana", "candidus", "canis", "canonicus", "canto", "capillus", "capio", "capitulus", "capto", "caput", "carbo", "carcer", "careo", "caries", "cariosus", "caritas", "carmen", "carpo", "carus", "casso", "caste", "casus", "catena", "caterva", "cattus", "cauda", "causa", "caute", "caveo", "cavus", "cedo", "celebrer", "celer", "celo", "cena", "cenaculum", "ceno", "censura", "centum", "cerno", "cernuus", "certe", "certus", "cervus", "cetera", "charisma", "chirographum", "cibo", "cibus", "cicuta", "cilicium", "cimentarius", "ciminatio", "cinis", "circumvenio", "cito", "civis", "civitas", "clam", "clamo", "claro", "clarus", "claudeo", "claustrum", "clementia", "clibanus", "coadunatio", "coaegresco", "coepi", "coerceo", "cogito", "cognatus", "cognomen", "cogo", "cohaero", "cohibeo", "cohors", "colligo", "collum", "colo", "color", "coma", "combibo", "comburo", "comedo", "comes", "cometes", "comis", "comitatus", "commemoro", "comminor", "commodi", "commodo", "communis", "comparo", "compello", "complectus", "compono", "comprehendo", "comptus", "conatus", "concedo", "concido", "conculco", "condico", "conduco", "confero", "confido", "conforto", "confugo", "congregatio", "conicio", "coniecto", "conitor", "coniuratio", "conor", "conqueror", "conscendo", "consectetur", "consequatur", "consequuntur", "conservo", "considero", "conspergo", "constans", "consuasor", "contabesco", "contego", "contigo", "contra", "conturbo", "conventus", "convoco", "copia", "copiose", "cornu", "corona", "corporis", "corpus", "correptius", "corrigo", "corroboro", "corrumpo", "corrupti", "coruscus", "cotidie", "crapula", "cras", "crastinus", "creator", "creber", "crebro", "credo", "creo", "creptio", "crepusculum", "cresco", "creta", "cribro", "crinis", "cruciamentum", "crudelis", "cruentus", "crur", "crustulum", "crux", "cubicularis", "cubitum", "cubo", "cui", "cuius", "culpa", "culpo", "cultellus", "cultura", "cum", "cumque", "cunabula", "cunae", "cunctatio", "cupiditas", "cupiditate", "cupio", "cuppedia", "cupressus", "cur", "cura", "curatio", "curia", "curiositas", "curis", "curo", "curriculum", "currus", "cursim", "curso", "cursus", "curto", "curtus", "curvo", "custodia", "damnatio", "damno", "dapifer", "debeo", "debilito", "debitis", "decens", "decerno", "decet", "decimus", "decipio", "decor", "decretum", "decumbo", "dedecor", "dedico", "deduco", "defaeco", "defendo", "defero", "defessus", "defetiscor", "deficio", "defleo", "defluo", "defungo", "degenero", "degero", "degusto", "deinde", "delectatio", "delectus", "delego", "deleniti", "deleo", "delibero", "delicate", "delinquo", "deludo", "demens", "demergo", "demitto", "demo", "demonstro", "demoror", "demulceo", "demum", "denego", "denique", "dens", "denuncio", "denuo", "deorsum", "depereo", "depono", "depopulo", "deporto", "depraedor", "deprecator", "deprimo", "depromo", "depulso", "deputo", "derelinquo", "derideo", "deripio", "deserunt", "desidero", "desino", "desipio", "desolo", "desparatus", "despecto", "dicta", "dignissimos", "distinctio", "dolor", "dolore", "dolorem", "doloremque", "dolores", "doloribus", "dolorum", "ducimus", "ea", "eaque", "earum", "eius", "eligendi", "enim", "eos", "error", "esse", "est", "et", "eum", "eveniet", "ex", "excepturi", "exercitationem", "expedita", "explicabo", "facere", "facilis", "fuga", "fugiat", "fugit", "harum", "hic", "id", "illo", "illum", "impedit", "in", "incidunt", "infit", "inflammatio", "inventore", "ipsa", "ipsam", "ipsum", "iste", "itaque", "iure", "iusto", "labore", "laboriosam", "laborum", "laudantium", "libero", "magnam", "magni", "maiores", "maxime", "minima", "minus", "modi", "molestiae", "molestias", "mollitia", "nam", "natus", "necessitatibus", "nemo", "neque", "nesciunt", "nihil", "nisi", "nobis", "non", "nostrum", "nulla", "numquam", "occaecati", "ocer", "odio", "odit", "officia", "officiis", "omnis", "optio", "paens", "pariatur", "patior", "patria", "patrocinor", "patruus", "pauci", "paulatim", "pauper", "pax", "peccatus", "pecco", "pecto", "pectus", "pecus", "peior", "pel", "perferendis", "perspiciatis", "placeat", "porro", "possimus", "praesentium", "provident", "quae", "quaerat", "quam", "quas", "quasi", "qui", "quia", "quibusdam", "quidem", "quis", "quisquam", "quo", "quod", "quos", "ratione", "recusandae", "reiciendis", "rem", "repellat", "repellendus", "reprehenderit", "repudiandae", "rerum", "saepe", "sapiente", "sed", "sequi", "similique", "sint", "sit", "socius", "sodalitas", "sol", "soleo", "solio", "solitudo", "solium", "sollers", "sollicito", "solum", "solus", "soluta", "solutio", "solvo", "somniculosus", "somnus", "sonitus", "sono", "sophismata", "sopor", "sordeo", "sortitus", "spargo", "speciosus", "spectaculum", "speculum", "sperno", "spero", "spes", "spiculum", "spiritus", "spoliatio", "sponte", "stabilis", "statim", "statua", "stella", "stillicidium", "stipes", "stips", "sto", "strenuus", "strues", "studio", "stultus", "suadeo", "suasoria", "sub", "subito", "subiungo", "sublime", "subnecto", "subseco", "substantia", "subvenio", "succedo", "succurro", "sufficio", "suffoco", "suffragium", "suggero", "sui", "sulum", "sum", "summa", "summisse", "summopere", "sumo", "sumptus", "sunt", "supellex", "super", "suppellex", "supplanto", "suppono", "supra", "surculus", "surgo", "sursum", "suscipio", "suscipit", "suspendo", "sustineo", "suus", "synagoga", "tabella", "tabernus", "tabesco", "tabgo", "tabula", "taceo", "tactus", "taedium", "talio", "talis", "talus", "tam", "tamdiu", "tamen", "tametsi", "tamisium", "tamquam", "tandem", "tantillus", "tantum", "tardus", "tego", "temeritas", "temperantia", "templum", "tempora", "tempore", "temporibus", "temptatio", "tempus", "tenax", "tendo", "teneo", "tener", "tenetur", "tenuis", "tenus", "tepesco", "tepidus", "ter", "terebro", "teres", "terga", "tergeo", "tergiversatio", "tergo", "tergum", "termes", "terminatio", "tero", "terra", "terreo", "territo", "terror", "tersus", "tertius", "testimonium", "texo", "textilis", "textor", "textus", "thalassinus", "theatrum", "theca", "thema", "theologus", "thermae", "thesaurus", "thesis", "thorax", "thymbra", "thymum", "tibi", "timidus", "timor", "titulus", "tolero", "tollo", "tondeo", "tonsor", "torqueo", "torrens", "tot", "totam", "totidem", "toties", "totus", "tracto", "trado", "traho", "trans", "tredecim", "tremo", "trepide", "tres", "tribuo", "tricesimus", "triduana", "tripudio", "tristis", "triumphus", "trucido", "truculenter", "tubineus", "tui", "tum", "tumultus", "tunc", "turba", "turbo", "turpis", "tutamen", "tutis", "tyrannus", "uberrime", "ubi", "ulciscor", "ullam", "ullus", "ulterius", "ultio", "ultra", "umbra", "umerus", "umquam", "una", "unde", "undique", "universe", "unus", "urbanus", "urbs", "uredo", "usitas", "usque", "ustilo", "ustulo", "usus", "ut", "uter", "uterque", "utilis", "utique", "utor", "utpote", "utrimque", "utroque", "utrum", "uxor", "vaco", "vacuus", "vado", "vae", "valde", "valens", "valeo", "valetudo", "validus", "vallum", "vapulus", "varietas", "varius", "vehemens", "vel", "velit", "velociter", "velum", "velut", "venia", "veniam", "venio", "ventito", "ventosus", "ventus", "venustas", "ver", "verbera", "verbum", "vere", "verecundia", "vereor", "vergo", "veritas", "veritatis", "vero", "versus", "verto", "verumtamen", "verus", "vesco", "vesica", "vesper", "vespillo", "vester", "vestigium", "vestrum", "vetus", "via", "vicinus", "vicissitudo", "victoria", "victus", "videlicet", "video", "viduo", "vigilo", "vigor", "vilicus", "vilis", "vilitas", "villa", "vinco", "vinculum", "vindico", "vinitor", "vinum", "vir", "virga", "virgo", "viridis", "viriliter", "virtus", "vis", "viscus", "vita", "vitae", "vitiosus", "vitium", "vito", "vivo", "vix", "vobis", "vociferor", "voco", "volaticus", "volo", "volubilis", "voluntarius", "volup", "voluptas", "voluptate", "voluptatem", "voluptates", "voluptatibus", "voluptatum", "volutabrum", "volva", "vomer", "vomica", "vomito", "vorago", "vorax", "voro", "vos", "votum", "voveo", "vox", "vulariter", "vulgaris", "vulgivagus", "vulgo", "vulgus", "vulnero", "vulnus", "vulpes", "vulticulus", "xiphias"], gF = { word: FF }, yF = gF, fF = { title: "English", code: "en", language: "en", endonym: "English", dir: "ltr", script: "Latn" }, bF = fF, CF = ['"Awaken, My Love!"', "(What's The Story) Morning Glory?", "- Tragedy +", "13 Reasons Why (Season 3)", "21st Century Breakdown", "30 De Febrero", "432 Hz Deep Healing", "5-Star", "528 Hz Meditation Music", "54+1", "8 Mile", "808s & Heartbreak", "9 To 5 And Odd Jobs", "A Beautiful Lie", "A Day At The Races", "A Day Without Rain", "A Fever You Can't Sweat Out", "A Gangsta's Pain", "A Gift & A Curse", "A Hard Day's Night", "A Head Full Of Dreams", "A Kind Of Magic", "A Million Ways To Murder", "A Moment Apart", "A Song For Every Moon", "A Thousand Suns", "A Winter Romance", "ABBA", "AI YoungBoy", "AJ Tracey", "Act One", "After Hours", "Agent Provocateur", "All About You", "All I Know So Far: Setlist", "All Or Nothing", "All Out", "All Over The Place", "All Stand Together", "All The Lost Souls", "All The Things I Never Said", "All Things Must Pass", "Alleen", "Alright, Still", "Alta Suciedad", "America", "American Heartbreak", "American Teen", "And Justice For None", "Animal Songs", "Another Friday Night", "Anything Goes", "Ao Vivo Em São Paulo", "Ao Vivo No Ibirapuera", "Apricot Princess", "Aqui E Agora (Ao Vivo)", "Arcane League Of Legends", "Ardipithecus", "Aretha Now", "Around The Fur", "Arrival", "Artist 2.0", "As She Pleases", "Ascend", "Ashlyn", "Astro Lounge", "At Night, Alone.", "At. Long. Last. ASAP", "Atlas", "Audioslave", "Aura", "Austin", "Awake", "Away From The Sun", "Ayayay!", "Baby On Baby", "Back For Everything", "Back From The Edge", "Back In Black", "Back To Black", "Back To The Game", "Bad", "Bahía Ducati", "Baila", "Barbie The Album", "Battleground", "Bayou Country", "Bcos U Will Never B Free", "Be", "Be Here Now", "Beautiful Mind", "Beautiful Thugger Girls", "Beautiful Trauma", "Beauty And The Beast", "Beggars Banquet", "Being Funny In A Foreign Language", "Berlin Lebt", "Berry Is On Top", "Best White Noise For Baby Sleep - Loopable With No Fade", "Big Baby DRAM", "Bigger, Better, Faster, More!", "Billy Talent II", "Black Star Elephant", "Blackout", "Blank Face LP", "Bleach", "Blizzard Of Ozz", "Blonde", "Blood Sugar Sex Magik", "Bloom", "Blowin' Your Mind!", "Blu Celeste", "Blue", "Blue Banisters", "Blue Hawaii", "Blue Neighbourhood", "Bluebird Days", "Bobby Tarantino", "Bobby Tarantino II", "Bon Iver", "Born Pink", "Born To Run", "Brand New Eyes", "Break The Cycle", "Breakfast In America", "Breakthrough", "Brett Young", "Bridge Over Troubled Water", "Bright: The Album", "Brol", "Buds", "Buena Vista Social Club", "Built On Glass", "Bury Me At Makeout Creek", "Busyhead", "By The Way", "CB6", "CNCO", "California Sunrise", "Californication", "Call Me Irresponsible", "Calm", "Camino Palmero", "Camp", "Caracal", "Carbon Fiber Hits", "Carnival", "Carry On", "Cartel De Santa", "Certified Lover Boy", "Chaaama", "Chama Meu Nome", "Chapter 1: Snake Oil", "Chapter 2: Swamp Savant", "Chapter One", "Charlie's Angels", "Cherry Bomb", "Chief", "Chocolate Factory", "Chosen", "Chris Brown", "Christina Aguilera", "Chromatica", "Church", "City Of Evil", "Clandestino", "Clouds", "Coco", "Collision Course", "Colour Vision", "Combat Rock", "Come Around Sundown", "Come Away With Me", "Come Home The Kids Miss You", "Come What(ever) May", "Commando", "Common Sense", "Communion", "Conditions", "Confident", "Confrontation", "Control The Streets, Volume 2", "Corinne Bailey Rae", "Costello Music", "Cottonwood", "Covers, Vol. 2", "Cozy Tapes Vol. 2: Too Cozy", "Crash Talk", "Crazy Love", "Crazysexycool", "Crowded House", "Cruisin' With Junior H", "Culture", "Current Mood", "DS2", "Dale", "Danger Days: The True Lives Of The Fabulous Killjoys", "Dangerous Woman", "Dangerous: The Double Album", "Dark Horse", "Day69", "Daydream", "De Fiesta", "De Viaje", "DeAnn", "Death Race For Love", "Delirium", "Delta", "Demidevil", "Depression Cherry", "Descendants", "Desgenerados Mixtape", "Destin", "Destiny Fulfilled", "Desvelado", "Detroit 2", "Dex Meets Dexter", "Dharma", "Die A Legend", "Different World", "Dig Your Roots", "Digital Druglord", "Dirt", "Disclaimer I / II", "Discovery", "Disraeli Gears", "Disumano", "Dizzy Up The Girl", "Don't Play That Song", "Donda", "Donde Quiero Estar", "Doo-Wops & Hooligans", "Down The Way", "Dr. Feelgood", "Dream Your Life Away", "Dreaming Out Loud", "Drip Harder", "Drive", "Drones", "Dropped Outta College", "Drowning", "Dua Warna Cinta", "Dulce Beat", "Dusty In Memphis", "Dutty Rock", "Dying To Live", "ENR", "East Atlanta Love Letter", "Editorial", "Edna", "El Abayarde", "El Amor En Los Tiempos Del Perreo", "El Camino", "El Comienzo", "El Dorado", "El Karma", "El Mal Querer", "El Malo", "El Trabajo Es La Suerte", "El Viaje De Copperpot", "Electric Ladyland", "Emotion", "En Tus Planes", "Endless Summer Vacation", "Enter The Wu-Tang (36 Chambers)", "Equals (=)", "Estrella", "Euphoria", "Europop", "Evermore", "Every Kingdom", "Everyday Life", "Evolve", "Expectations", "Face Yourself", "Facelift", "Fallin'", "Fancy You", "Fantasía", "Favourite Worst Nightmare", "Fear Of The Dark", "Fearless", "Feel Something", "Feels Like Home", "Femme Fatale", "Ferxxocalipsis", "Fifty Shades Darker", "Fifty Shades Freed", "Fifty Shades Of Grey", "Final (Vol.1)", "Finding Beauty In Negative Spaces", "Fine Line", "First Impressions Of Earth", "First Steps", "Five Seconds Flat", "Folklore", "For Emma, Forever Ago", "Forajido EP 1", "Forever", "Forever Young", "Formula Of Love: O+T=<3", "Free 6lack", "Freudian", "Frozen II", "Full Moon Fever", "Funhouse", "Funk Wav Bounces Vol.1", "Future History", "FutureSex/LoveSounds", "Fuzzybrain", "Gallery", "Gangsta's Paradise", "Gemini", "Gemini Rights", "Generationwhy", "Get A Grip", "Get Up", "Gettin' Old", "Girl", "Gladiator", "Glisten", "Globalization", "Gloria", "Glory Days", "God's Project", "Gold Skies", "Golden", "Good Evening", "Good Thing", "Goodbye Yellow Brick Road", "Gossip Columns", "Got Your Six", "Graceland", "Graduation", "Grand Champ", "Grandson, Vol. 1", "Green River", "Guerra", "Ha*Ash Primera Fila - Hecho Realidad", "Haiz", "Hamilton", "Happy Endings", "Harry Styles", "Hasta La Raíz", "Hatful Of Hollow", "Head In The Clouds", "Heard It In A Past Life", "Heart Shaped World", "Heartbeat City", "Heartbreak On A Full Moon / Cuffing Season - 12 Days Of Christmas", "Heaven Or Hell", "Heaven knows", "Hellbilly Deluxe", "Hellboy", "Help!", "Her Loss", "Here Comes The Cowboy", "Hey World", "High School Musical", "High Tide In The Snake's Nest", "Historias De Un Capricornio", "Hndrxx", "Hombres G (Devuélveme A Mi Chica)", "Homerun", "Homework", "Hot Fuss", "Hot Pink", "Hot Sauce / Hello Future", "Hot Space", "Hotel Diablo", "Houses Of The Holy", "How Big, How Blue, How Beautiful", "How I'm Feeling", "How To Be Human", "How To Save A Life", "How To: Friend, Love, Freefall", "Hozier", "Human", "Huncho Jack, Jack Huncho", "Hunter Hayes", "Hysteria", "I Am...Sasha Fierce", "I Can't Handle Change", "I Met You When I Was 18. (The Playlist)", "I Never Liked You", "I Never Loved A Man The Way I Love You", "I See You", "I Think You Think Too Much Of Me", "I Used To Know Her", "I Used To Think I Could Fly", "I'm Comin' Over", "Ich & Keine Maske", "If You Can Believe Your Eyes & Ears", "Il Ballo Della Vita", "Ill Communication", "Imagination & The Misfit Kid", "Imagine", "Immortalized", "In A Perfect World...", "In Colour", "In My Own Words", "In Rainbows", "In Return", "In The Lonely Hour", "Infest", "Innuendo", "Inter Shibuya - La Mafia", "Interstellar", "Is This It", "It Was Written", "It's Not Me, It's You", "It's Only Me", "Ivory", "JackBoys", "Jamie", "Jazz", "Jibrail & Iblis", "Jordi", "Jordin Sparks", "Jose", "Just As I Am", "Just Cause Y'all Waited 2", "Just Like You", "Justified", "K-12 / After School", "K.I.D.S.", "K.O.", "K.O.B. Live", "KG0516", "KOD", "Kane Brown", "Kid A", "Kid Krow", "Kids See Ghosts", "Kids in Love", "Kinks (You Really Got Me)", "Know-It-All", "Konvicted", "Kring", "LANY", "LM5", "La Criatura", "La Flaca", "La Melodia De La Calle", "La Revolucion", "Lady Lady", "Lady Wood", "Langit Mong Bughaw", "Las Que No Iban A Salir", "Last Day Of Summer", "Last Year Was Complicated", "Layers", "Layover", "Lazarus", "Led Zeppelin", "Left Of The Middle", "Leftoverture", "Legends Never Die", "Let's Skip To The Wedding", "Let's Talk About Love", "Licensed To Ill", "Life In Cartoon Motion", "Life Thru A Lens", "Lifelines", "Like..?", "Lil Big Pac", "Lil Boat", "Lil Boat 2", "Lil Boat 3.5", "Lil Kiwi", "Lil Pump", "Limon Y Sal", "Listen Without Prejudice", "Little Voice", "Live On Red Barn Radio I & II", "Lo Que Andábamos Buscando", "Lofi Fruits Music 2021", "London Calling", "Los Campeones Del Pueblo", "Los Extraterrestres", "Los Favoritos 2", "Lost", "Lost In Love", "Loud", "Love Sick", "Love Story", "Love Stuff", "Love Yourself: Tear", "Lover", "Luca Brasi 2: Gangsta Grillz", "Lust For Life", "Luv Is Rage", "M!ssundaztood", "Ma Fleur", "Made In Lagos", "Mafia Bidness", "Magazines Or Novels", "Mainstream Sellout", "Majestic", "Make It Big", "Make Yourself", "Making Mirrors", "Mamma Mia! Here We Go Again", "Man Of The Woods", "Manic", "Me And My Gang", "Meduza", "Meet The Orphans", "Meet The Woo", "Melim", "Mellon Collie And The Infinite Sadness", "Melly vs. Melvin", "Memories...Do Not Open", "Menagerie", "Midnights", "Minecraft - Volume Alpha", "Minutes To Midnight", "Mix Pa Llorar En Tu Cuarto", "Modo Avión", "Monkey Business", "Mono.", "Montana", "Montevallo", "Moosetape", "Morning View", "Motivan2", "Moving Pictures", "Mr. Davis", "Mr. Misunderstood", "Mulan", "Mura Masa", "Music From The Edge Of Heaven", "Music Of The Sun", "My House", "My Kinda Party", "My Krazy Life", "My Liver Will Handle What My Heart Can't", "My Moment", "My Own Lane", "My Turn", "My Worlds", "Na Praia (Ao Vivo)", "Nakamura", "Nation Of Two", "Navegando", "Need You Now", "Neon Future III", "Neotheater", "Never Trust A Happy Song", "New English", "News Of The World", "Nicole", "Night & Day", "Nimmerland", "Nimrod", "Nine Track Mind", "No Angel", "No Me Pidas Perdón", "No More Drama", "No Protection", "No Strings Attached", "No Time To Die", "Nobody Is Listening", "Non Stop Erotic Cabaret", "Non-Fiction", "Northsbest", "Nostalgia", "Nostalgia, Ultra", "Notes On A Conditional Form", "Now Or Never", "O Embaixador (Ao Vivo)", "O My Heart", "OK Computer", "Ocean", "Ocean Avenue", "Ocean Eyes", "Odisea", "Oh My My", "Oh, What A Life", "On The 6", "One In A Million", "One More Light", "One Of These Nights", "Open Up And Say...Ahh!", "Ordinary Man", "Origins", "Out Of The Blue", "Over It", "OzuTochi", "PTSD", "Pa Las Baby's Y Belikeada", "Pa Que Hablen", "Pa' Luego Es Tarde", "Pa' Otro La 'O", "Pablo Honey", "Pain Is Love", "Pain Is Temporary", "Painting Pictures", "Palmen Aus Plastik 2", "Para Mi Ex", "Para Siempre", "Partners In Crime", "Pawn Shop", "Pegasus / Neon Shark VS Pegasus", "Pet Sounds", "Piece By Piece", "Pier Pressure", "Pineapple Sunrise", "Piseiro 2020 Ao Vivo", "Planet Pit", "Plans", "Play Deep", "Playa Saturno", "Por Primera Vez", "Por Vida", "Positions", "Post Human: Survival Horror", "Poster Girl", "Prazer, Eu Sou Ferrugem (Ao Vivo)", "Pretty Girls Like Trap Music", "Pretty. Odd.", "Prince Royce", "Prisma", "Prometo", "Providence", "Puberty 2", "Punisher", "Purgatory", "Purple Rain", "Que Bendición", "Queen Of The Clouds", "Quiero Volver", "R&G (Rhythm & Gangsta): The Masterpiece", "Raise!", "Ransom 2", "Rapunzel", "Rare", "Re Mida", "Ready To Die", "Realer", "Rebelde", "Reclassified", "Recovery", "Recuerden Mi Estilo", "Reggatta De Blanc", "Regulate… G Funk Era", "Reik", "Reise, Reise", "Relapse", "Relaxing Piano Lullabies And Natural Sleep Aid For Baby Sleep Music", "Religiously. The Album.", "Replay", "Results May Vary", "Revenge", "Revolve", "Revolver", "Ricky Martin", "Rien 100 Rien", "Ripcord", "Rise And Fall, Rage And Grace", "Rise Of An Empire", "Robin Hood: Prince Of Thieves", "Rock N Roll Jesus", "Romance", "Romances", "Ronan", "Royal Blood", "Rumours", "Sad Boyz 4 Life II", "San Lucas", "Santana World", "Saturation III", "Sauce Boyz", "Savage Mode", "Saxobeats", "Scarlet", "Schwarzes Herz", "Seal The Deal & Let's Boogie", "Section.80", "Segundo Romance", "Sehnsucht", "Shake The Snow Globe", "Shang-Chi And The Legend Of The Ten Rings: The Album", "Sheer Heart Attack", "Shiesty Season", "Shock Value", "Shoot For The Stars, Aim For The Moon", "Signed Sealed And Delivered", "Signos", "Silent Alarm", "Simplemente Gracias", "Sin Bandera", "Sing Me A Lullaby, My Sweet Temptation", "Sinner", "Sirio", "Sit Still, Look Pretty", "Skin", "Slowhand", "Smash", "Smithereens", "Snow Cougar", "Social Cues", "Some Girls", "Song Hits From Holiday Inn", "Songs For Dads", "Songs For The Deaf", "Songs For You, Truths For Me", "Songs In The Key Of Life", "Souled Out", "Sounds Of Silence", "Soy Como Quiero Ser", "Speak Now", "Speak Your Mind", "Speakerboxxx/The Love Below", "Spider-Man: Into The Spider-Verse", "Split Decision", "Square Up", "SremmLife", "Starboy", "Stay +", "Stay Dangerous", "Staying At Tamara's", "Steppenwolf", "Stick Season", "Still Bill", "Straight Outta Compton", "Strange Trails", "Stronger", "Suavemente", "Sublime", "Suck It and See", "Sucker", "Sueños", "Sugar", "Summer Forever", "Summer,", "Sunset Season", "Sunshine On Leith", "Surfer Rosa", "Sweet Talker", "SweetSexySavage", "System Of A Down", "TA13OO", "Talk That Talk", "Talking Heads: 77", "Tangled Up", "Tango In The Night", "Taxi Driver", "Taylor Swift", "Tell Me It's Real", "Ten", "Ten Summoner's Tales", "Terra Sem Cep (Ao Vivo)", "Terral", "Testing", "Tha Carter III", "Thank Me Later", "That's Christmas To Me", "The Academy", "The Adventures Of Bobby Ray", "The Album", "The Andy Williams Christmas Album", "The Aviary", "The Balcony", "The Battle Of Los Angeles", "The Beatles (White Album)", "The Beginning", "The Better Life", "The Big Day", "The Book", "The Breakfast Club", "The Cars", "The Colour And The Shape", "The Death Of Peace Of Mind", "The Diary Of Alicia Keys", "The Documentary", "The Emancipation Of Mimi", "The Eminem Show", "The End Of Everything", "The Final Countdown", "The Forever Story", "The Foundation", "The Goat", "The Golden Child", "The Good Parts", "The Greatest Showman: Reimagined", "The Green Trip", "The Hardest Love", "The Head And The Heart", "The Human Condition", "The Infamous", "The Lady Killer", "The Last Don II", "The Lion King", "The Lockdown Sessions", "The London Sessions", "The Lord Of The Rings: The Fellowship Of The Ring", "The Lost Boy", "The Magic Of Christmas / The Christmas Song", "The Marshall Mathers LP", "The Martin Garrix Collection", "The Melodic Blue", "The Mockingbird & The Crow", "The Pains Of Growing", "The Papercut Chronicles", "The Perfect Luv Tape", "The Pinkprint", "The Predator", "The Queen Is Dead", "The ReVe Festival: Finale", "The Rise And Fall Of Ziggy Stardust And The Spiders From Mars", "The Rising Tied", "The River", "The Stone Roses", "The Story Of Us", "The Stranger", "The Sufferer & The Witness", "The Sun's Tirade", "The Temptations Sing Smokey", "The Time Of Our Lives", "The Way It Is", "The Wonderful World Of Sam Cooke", "The Writing's On The Wall", "The Young And The Hopeless", "Therapy", "Therapy Session", "There Is More (Live)", "There Is Nothing Left To Lose", "These Things Happen", "Third Eye Blind", "This Is Me...Then", "This Unruly Mess I've Made", "Threat to Survival", "Thrill Of The Chase", "Time", "Timelezz", "To Let A Good Thing Die", "To Pimp A Butterfly", "Toast To Our Differences", "Todos Os Cantos, Vol. 1 (Ao Vivo)", "Too Hard", "Torches X", "Total Xanarchy", "Toto IV", "Toulouse Street", "Tourist History", "Toxicity", "Tragic Kingdom", "Tranquility Base Hotel & Casino", "Traumazine", "Traveler", "Tres Hombres", "Trip At Knight", "Tron: Legacy", "True Blue", "True Colors", "Trustfall", "Tu Veneno Mortal", "Tudo Em Paz", "Ubuntu", "Ugly Is Beautiful", "Ultra 2021", "Una Mattina", "Unbroken", "Uncovered", "Under Pressure", "Unsponsored Content", "Unstoppable", "Unwritten", "Urban Flora", "Urban Hymns", "Use Your Illusion I", "Veneer", "Versions Of Me", "Vibes", "Vice Versa", "Vices & Virtues", "Victory", "Vida", "Viejo Marihuano", "Visualízate", "Walk Away", "Walk Me Home...", "Watch The Throne", "Wave", "We Broke The Rules", "We Love You Tecca", "We Love You Tecca 2", "Weezer (Green Album)", "Welcome To The Madhouse", "Westlife", "What A Time To Be Alive", "What Do You Think About The Car?", "What Is Love?", "What Makes You Country", "What Separates Me From You", "What You See Is What You Get / What You See Ain't Always What You Get", "When It's Dark Out", "When We All Fall Asleep, Where Do We Go?", "Where The Light Is", "While The World Was Burning", "White Pony", "Whitney", "Who Really Cares", "Who You Are", "Who's Next", "Wide Open", "Wilder Mind", "Wildfire", "Willy And The Poor Boys", "Wings / You Never Walk Alone", "Wish", "Wish You Were Here", "Without Warning", "Wonder", "X&Y", "XOXO", "Y Que Quede Claro", "YBN: The Mixtape", "Yo Creo", "You Will Regret", "Youngblood", "Younger Now", "Youth"], vF = ["$NOT", "$uicideboy$", "(G)I-DLE", "*NSYNC", "2 Chainz", "21 Savage", "6LACK", "? & The Mysterians", "A Boogie Wit da Hoodie", "A Taste of Honey", "A Tribe Called Quest", "A-Ha", "ABBA", "AC/DC", "AJ Tracey", "ATEEZ", "Ace of Base", "Adele", "Ado", "Aerosmith", "Agust D", "Aitana", "Al Dexter & his Troopers", "Al Green", "Al Jolson", "Al Martino", "Alan Jackson", "Alannah Myles", "Alec Benjamin", "Alejandro Sanz", "Alesso", "Alfredo Olivas", "Ali Gatie", "Alice In Chains", "Alina Baraz", "All Time Low", "All-4-One", "All-American Rejects", "Alok", "America", "American Quartet", "Amii Stewart", "Amitabh Bhattacharya", "Ana Castela", "Anderson .Paak", "Andy Grammer", "Angus & Julia Stone", "Anirudh Ravichander", "Anita Ward", "Anitta", "Anton Karas", "Anuel AA", "Arcade Fire", "Archie Bell & The Drells", "Archies", "Aretha Franklin", "Arizona Zervas", "Armin van Buuren", "Arthur Conley", "Artie Shaw", "Asake", "Asees Kaur", "Association", "Atif Aslam", "Audioslave", "Aventura", "Avril Lavigne", "Aya Nakamura", "B J Thomas", "B.o.B", "BLACKPINK", "BONES", "BROCKHAMPTON", "BTS", "Baby Keem", "Bachman-Turner Overdrive", "Backstreet Boys", "Bad Bunny", "Badshah", "Bailey Zimmerman", "Banda El Recodo", "Barbra Streisand", "Barry White", "Bazzi", "Bebe Rexha", "Becky G", "Becky Hill", "Bee Gees", "Ben Bernie", "Ben Howard", "Ben Selvin", "Berlin", "Bessie Smith", "Bethel Music", "Bette Midler", "Beyonce", "Bibi Blocksberg", "Bibi und Tina", "BigXthaPlug", "Bill Doggett", "Bill Haley & his Comets", "Bill Withers", "Billy Davis Jr", "Billy Joel", "Billy Paul", "Billy Preston", "Billy Swan", "Birdy", "Bizarrap", "Blake Shelton", "Blur", "Bob Marley & The Wailers", "Bob Seger", "Bobby Darin", "Bobby Lewis", "Bobby McFerrin", "Bobby Vinton", "Boney M.", "Bonez MC", "Bonnie Tyler", "Booba", "Boston", "BoyWithUke", "Boyce Avenue", "Bradley Cooper", "Bread", "Brent Faiyaz", "Brett Young", "Bring Me The Horizon", "Britney Spears", "Brooks & Dunn", "Bruce Channel", "Bruno & Marrone", "Bryan Adams", "Bryce Vine", "Buddy Holly", "Burna Boy", "C. Tangana", "CKay", "CRO", "Camilo", "Capital Bra", "Captain & Tennille", "Cardi B", "Carin Leon", "Carlos Vives", "Carly Simon", "Carpenters", "Cavetown", "Celine Dion", "Central Cee", "Chaka Khan", "Champs", "Charlie Rich", "Chayanne", "Cheat Codes", "Cher", "Chic", "Chicago", "Chris Brown", "Chris Isaak", "Chris Young", "Christina Aguilera", "Christina Perri", "Christopher Cross", "Chuck Berry", "Ciara", "Cigarettes After Sex", "Cliff Edwards (Ukelele Ike)", "Cody Johnson", "Colbie Caillat", "Colby O'Donis", "Cole Swindell", "Coleman Hawkins", "Contours", "Coolio", "Count Basie", "Cris Mj", "Culture Club", "Cyndi Lauper", "D-Block Europe", "DAY6", "DJ Khaled", "DJ Luian", "DJ Nelson", "DMX", "DNCE", "DaVido", "Dadju", "Daft Punk", "Dan + Shay", "Daniel Powter", "Danny Ocean", "Darius Rucker", "Dave", "David Bowie", "David Guetta", "Daya", "Dean Martin", "Deee-Lite", "Deep Purple", "Deftones", "Demi Lovato", "Dennis Lloyd", "Denzel Curry", "Dermot Kennedy", "Desiigner", "Devo", "Dewa 19", "Dexys Midnight Runners", "Diddy", "Dido", "Die drei !!!", "Diego & Victor Hugo", "Diljit Dosanjh", "Dimitri Vegas & Like Mike", "Dinah Shore", "Dionne Warwick", "Dire Straits", "Disclosure", "Dixie Cups", "Doja Cat", "Dolly Parton", "Don Diablo", "Don Henley", "Don McLean", "Don Omar", "Donna Summer", "Donovan", "Dr. Dre", "Drake", "Dreamville", "Dua Lipa", "EMF", "ENHYPEN", "Earth, Wind & Fire", "Ed Sheeran", "Eddie Cantor", "Eddie Cochran", "Eddy Howard", "Edgar Winter Group", "Edwin Hawkins Singers", "Edwin Starr", "El Alfa", "Eladio Carrion", "Electric Light Orchestra", "Elevation Worship", "Ella Henderson", "Ellie Goulding", "Elton John", "Elvis Presley", "Empire of the Sun", "En Vogue", "Enrique Iglesias", "Eslabon Armado", "Ethel Waters", "Etta James", "Evanescence", "Exile", "Extreme", "Faith Hill", "Fall Out Boy", "Fanny Brice", "Farruko", "Fats Domino", "Fats Waller", "Feid", "Felix Jaehn", "Fergie", "Fetty Wap", "Fiersa Besari", "Fifth Harmony", "Fine Young Cannibals", "Five Finger Death Punch", "Fleetwood Mac", "Flo-Rida", "Florence + The Machine", "Flume", "Foo Fighters", "Foreigner", "Foster The People", "Four Aces", "Frank Ocean", "Frank Sinatra", "Frankie Avalon", "Frankie Valli", "Fred Astaire", "Freda Payne", "Freddie Dredd", "Freddy Fender", "French Montana", "Fuerza Regida", "Fujii Kaze", "Future", "G-Eazy", "Garfunkel and Oates", "Gary Lewis & The Playboys", "Gary Numan", "Gene Autry", "Gene Chandler", "Gene Vincent", "George Michael", "George Strait", "Gera MX", "Ghost", "Ghostemane", "Gigi D'Agostino", "Gladys Knight & The Pips", "Glass Animals", "Glee Cast", "Gloria Gaynor", "Godsmack", "Gorillaz", "Gotye", "Grand Funk Railroad", "Green Day", "Grouplove", "Grupo Firme", "Grupo Marca Registrada", "Gryffin", "Gucci Mane", "Guess Who", "Gunna", "Gusttavo Lima", "Guy Mitchell", "Gwen Stefani", "Gzuz", "H.E.R.", "HARDY", "Hailee Steinfeld", "Halsey", "Hans Zimmer", "Harris Jayaraj", "Harry Chapin", "Harry James", "Harry Nilsson", "Harry Styles", "Hayley Williams", "Herb Alpert", "Herman's Hermits", "Hillsong UNITED", "Hillsong Worship", "Hollywood Undead", "Honey Cone", "Hoobastank", "Hues Corporation", "I Prevail", "ITZY", "IVE", "Ice Cube", "Ice Spice", "Iggy Azalea", "Imagine Dragons", "Incubus", "Internet Money", "Isaac Hayes", "J Geils Band", "J. Cole", "JAY-Z", "JJ Lin", "JP Saxe", "JVKE", "Jack Harlow", "Jack Johnson", "Jackie Wilson", "Jacquees", "James Arthur", "James Brown", "James TW", "James Taylor", "Jamie Foxx", "Janet Jackson", "Janis Joplin", "Jason Aldean", "Jason Mraz", "Jay Chou", "Jay Sean", "Jay Wheeler", "Jaymes Young", "Jean Knight", "Jeezy", "Jennifer Lopez", "Jennifer Warnes", "Jeremih", "Jeremy Zucker", "Jerry Lee Lewis", "Jerry Murad's Harmonicats", "Jess Glynne", "Jessie J", "Jewel", "Jimi Hendrix", "Jimin", "Jimmie Rodgers", "Jimmy Dean", "Jo Stafford", "Joan Jett & The Blackhearts", "Joao Gilberto", "Joel Corry", "John Fred & The Playboy Band", "John Legend", "John Mayer", "John Williams", "Johnnie Ray", "Johnnie Taylor", "Johnny Cash", "Johnny Horton", "Johnny Mathis", "Johnny Mercer", "Johnny Nash", "Joji", "Jon Bellion", "Jonas Blue", "Jonas Brothers", "Joni James", "Jorja Smith", "Juan Gabriel", "Juan Luis Guerra 4.40", "Juanes", "Juice Newton", "Julia Michaels", "Justin Bieber", "Justin Quiles", "KALEO", "KAROL G", "KAYTRANADA", "KK", "KSI", "KYLE", "Kacey Musgraves", "Kane Brown", "Kanye West", "Karan Aujla", "Kate Smith", "Katy Perry", "Kay Kyser", "Ke$ha", "Kehlani", "Kelly Clarkson", "Kenny Chesney", "Kenny Loggins", "Kenny Rogers", "Kenshi Yonezu", "Kenya Grace", "Kevin Gates", "Key Glock", "Khalid", "Kim Carnes", "Kim Petras", "Kimbra", "Kina", "King Gnu", "Kings of Leon", "Kingsmen", "Kitty Kallen", "Kodak Black", "Kodaline", "Kollegah", "Kool & The Gang", "Kungs", "Kygo", "Kylie Minogue", "LE SSERAFIM", "LISA", "LMFAO", "LUDMILLA", "La Adictiva Banda San José de Mesillas", "La Oreja de Van Gogh", "Labrinth", "Lady Antebellum", "Lady GaGa", "Lainey Wilson", "Lana Del Rey", "Latto", "Lauryn Hill", "Lauv", "League of Legends", "Lee Brice", "Leon Bridges", "Leona Lewis", "Lesley Gore", "Leslie Odom Jr.", "Liam Payne", "Lifehouse", "Lil Baby", "Lil Dicky", "Lil Durk", "Lil Mosey", "Lil Nas X", "Lil Pump", "Lil Skies", "Lil Tjay", "Lil Uzi Vert", "Lil Yachty", "Lil' Kim", "Lil' Wayne", "Lin-Manuel Miranda", "Linkin Park", "Lionel Richie", "Lipps Inc", "Lisa Loeb", "Little Peggy March", "Little Richard", "Lofi Fruits Music", "Lord Huron", "Los Del Rio", "Los Dos Carnales", "Los Lobos", "Los Temerarios", "Los Tigres Del Norte", "Los Tucanes De Tijuana", "Lou Reed", "Loud Luxury", "Louis Jordan", "Louis Tomlinson", "Love Unlimited", "Lovin' Spoonful", "Luan Santana", "Luciano", "Luis Miguel", "Luis R Conriquez", "Lulu", "Lunay", "Lupe Fiasco", "M", "MAX", "MC Hammer", "MC Ryan SP", "MKTO", "Mabel", "Machine Gun Kelly", "Madison Beer", "Madonna", "Mahalini", "Major Lazer", "Mambo Kingz", "Maneskin", "Marco Antonio Solís", "Margaret Whiting", "Maria Becerra", "Mario", "Mario Lanza", "Mark Ronson", "Maroon 5", "Marshmello", "Martin Garrix", "Mary Ford", "Mary J Blige", "Mary J. Blige", "Mary Wells", "Matoma", "Mau y Ricky", "Meek Mill", "Megadeth", "Melanie", "Melanie Martinez", "Melendi", "Men At Work", "Metro Boomin", "Michael Bublé", "Michael Jackson", "Michael McDonald", "Michael Sembello", "Miguel", "Mike Posner", "Miley Cyrus", "Milky Chance", "Minnie Riperton", "Miracle Tones", "Miranda Lambert", "Mohit Chauhan", "Mon Laferte", "Moneybagg Yo", "Monsta X", "Mora", "Morad", "Morat", "Mother Mother", "Motley Crue", "Ms. Lauryn Hill", "Mumford & Sons", "Muse", "Mya", "Myke Towers", "NCT 127", "NCT DREAM", "NEFFEX", "Nadin Amizah", "Nancy Sinatra", "Nat King Cole", "Nate Smith", "Natti Natasha", "Nayer", "Neil Diamond", "Neil Sedaka", "Nekfeu", "Nelly", "New Vaudeville Band", "Next", "Nickelback", "Nicki Minaj", "Nicki Nicole", "Nicky Jam", "Nina Simone", "Ninho", "Nipsey Hussle", "Nirvana", "Niska", "No Doubt", "Norah Jones", "Normani", "OMI", "ONE OK ROCK", "Oasis", "Official HIGE DANdism", "Offset", "Old Dominion", "Oliver Heldens", "Olivia Rodrigo", "Omah Lay", "One Direction", "Otis Redding", "OutKast", "Owl City", "P Diddy", "P!nk", "PLK", "PNL", "Pamungkas", "Passenger", "Pat Boone", "Patsy Cline", "Patti LaBelle", "Patti Page", "Paul & Paula", "Paul Revere & the Raiders", "Paul Robeson", "Paul Russell", "Paul Whiteman", "Paula Abdul", "Peaches & Herb", "Pearl Jam", "Pee Wee Hunt", "Pee Wee King", "Pentatonix", "Percy Faith", "Percy Sledge", "Peso Pluma", "Peter Cetera", "Peter Gabriel", "Peter, Paul & Mary", "Pharrell Williams", "Pierce The Veil", "Pineapple StormTv", "Pink Floyd", "Pink Sweat$", "Piso 21", "Pitbull", "Plan B", "Player", "Polo G", "Pop Smoke", "Portugal. The Man", "Pouya", "Prince", "Prince Royce", "Pusha T", "Quality Control", "Queen", "Quinn XCII", "R. Kelly", "RAF Camora", "RAYE", "REM", "REO Speedwagon", "Radiohead", "Rag'n'Bone Man", "Rage Against The Machine", "Rahat Fateh Ali Khan", "Rainbow Kitten Surprise", "Rammstein", "Rauw Alejandro", "Ray Charles", "Ray Parker Jr", "Ray Stevens", "Red Foley", "Red Hot Chili Peppers", "Red Velvet", "Regard", "Regina Belle", "Reik", "Rels B", "Rema", "Ricardo Arjona", "Rich The Kid", "Rick Astley", "Rick Dees & his Cast of Idiots", "Rick Ross", "Rick Springfield", "Ricky Martin", "Ricky Nelson", "Rihanna", "Rita Ora", "Ritchie Valens", "Rizky Febian", "Rob Thomas", "Roberta Flack", "Robin Schulz", "Robin Thicke", "Rod Stewart", "Rod Wave", "Roddy Ricch", "Roger Miller", "Romeo Santos", "Rosemary Clooney", "Roxette", "Roy Acuff", "Roy Orbison", "Rudimental", "Ruel", "Ruth B.", "Ryan Lewis", "SCH", "SEVENTEEN", "SWV", "Sabaton", "Sabrina Carpenter", "Sachet Tandon", "Sachin-Jigar", "Sade", "Sam Cooke", "Sam Feldt", "Sam Hunt", "Sam Smith", "Sam The Sham & The Pharaohs", "Sammy Davis Jr", "Sammy Kaye", "Santana", "Sasha Alex Sloan", "Savage Garden", "Saweetie", "Scorpions", "Sean Kingston", "Sean Paul", "Sebastian Yatra", "Sech", "Seeb", "Sezen Aksu", "Sfera Ebbasta", "Shaggy", "Shania Twain", "Shawn Mendes", "Sheena Easton", "Shinedown", "Shubh", "Sia", "Sid Sriram", "Sidhu Moose Wala", "Silk", "Silver Convention", "Simon & Garfunkel", "Sinead O'Connor", "Sir Mix-a-Lot", "Sister Sledge", "Ski Mask The Slump God", "Skillet", "Skrillex", "Sleeping At Last", "Smokey Robinson", "Snoop Dogg", "Snow Patrol", "Soda Stereo", "Sonu Nigam", "Sophie Ellis-Bextor", "Spencer Davis Group", "Spice Girls", "Stan Getz", "Starland Vocal Band", "Stephen Sanchez", "Steve Aoki", "Steve Lacy", "Steve Winwood", "Stevie B", "Sting", "Stormzy", "Strawberry Alarm Clock", "Stray Kids", "Stromae", "Sublime", "Sum 41", "Summer Walker", "Supertramp", "Survivor", "Swedish House Mafia", "System Of A Down", "T-Pain", "T.I.", "TAEYEON", "TKKG", "TLC", "TOMORROW X TOGETHER", "TOTO", "TWICE", "Tag Team", "Tainy", "Tammi Terrell", "Tanishk Bagchi", "Tate McRae", "Taylor Swift", "Tears For Fears", "Tems", "Tennessee Ernie Ford", "Terence Trent D'Arby", "Teresa Brewer", "Terry Jacks", "The Ames Brothers", "The Animals", "The B52s", "The Bangles", "The Beatles", "The Black Eyed Peas", "The Black Keys", "The Box Tops", "The Chainsmokers", "The Chiffons", "The Chordettes", "The Clash", "The Coasters", "The Commodores", "The Cowsills", "The Cranberries", "The Crew-Cuts", "The Cure", "The Detroit Spinners", "The Diamonds", "The Doobie Brothers", "The Doors", "The Drifters", "The Emotions", "The Eurythmics", "The Fireballs", "The Flamingos", "The Foundations", "The Four Seasons", "The Fray", "The Game", "The Go Gos", "The Goo Goo Dolls", "The Head And The Heart", "The Hollies", "The Ink Spots", "The Isley Brothers", "The Jackson 5", "The Kid LAROI", "The Killers", "The Kingston Trio", "The Kooks", "The Lemon Pipers", "The Living Tombstone", "The Lumineers", "The Mamas & The Papas", "The Marvelettes", "The McCoys", "The Mills Brothers", "The Miracles", "The Monkees", "The Moody Blues", "The National", "The Neighbourhood", "The Notorious B.I.G.", "The O'Jays", "The Offspring", "The Osmonds", "The Partridge Family", "The Penguins", "The Pet Shop Boys", "The Platters", "The Righteous Brothers", "The Rolling Stones", "The Ronettes", "The Score", "The Script", "The Seekers", "The Shangri-Las", "The Smashing Pumpkins", "The Staple Singers", "The Strokes", "The Supremes", "The Temptations", "The Turtles", "The Vamps", "The Verve", "The Village People", "The Weavers", "The White Stripes", "The Young Rascals", "The Zombies", "Thelma Houston", "Thomas Rhett", "Three Days Grace", "Three Dog Night", "Three Man Down", "Timbaland", "Timmy Trumpet", "Toby Keith", "Tom Jones", "Tom Petty and the Heartbreakers", "Tommy Dorsey", "Tommy Edwards", "Tommy James & the Shondells", "Tone Loc", "Toni Braxton", "Topic", "Tory Lanez", "Tove Lo", "Trevor Daniel", "Trey Songz", "Trippie Redd", "Trueno", "Tulsi Kumar", "Tulus", "Twenty One Pilots", "Two Feet", "Ty Dolla $ign", "Tyga", "Tyler Hubbard", "U2", "UB40", "UZI", "Ufo361", "Upchurch", "V", "Vampire Weekend", "Van McCoy", "Van Morrison", "Vance Joy", "Vanessa Carlton", "Vanessa Williams", "Vera Lynn", "Vernon Dalhart", "Vicente Fernandez", "Vishal-Shekhar", "Volbeat", "WILLOW", "Wale", "Wallows", "Weezer", "Wham!", "Whitney Houston", "Why Don't We", "Wilbert Harrison", "Wilson Phillips", "Wiz Khalifa", "Woody Guthrie", "Wyclef Jean", "XXXTENTACION", "Xavi", "YG", "YNW Melly", "YOASOBI", "Yandel", "Years & Years", "Yeat", "Yo Gotti", "Young Dolph", "Young Miko", "Young Thug", "YoungBoy Never Broke Again", "Yung Gravy", "Yuuri", "Yuvan Shankar Raja", "ZAYN", "ZZ Top", "Zac Brown Band", "Zach Bryan", "Zara Larsson", "aespa", "benny blanco", "blink-182", "d4vd", "deadmau5", "girl in red", "gnash", "iann dior", "will.i.am"], kF = ["Acid House", "Acid Jazz", "Acid Rock", "Acoustic", "Acoustic Blues", "Afro-Pop", "Afrobeat", "Alt-Rock", "Alternative", "Ambient", "American Trad Rock", "Americana", "Anime", "Arena Rock", "Art-Rock", "Avant-Garde", "Avant-Punk", "Baladas y Boleros", "Barbershop", "Baroque", "Bebop", "Big Band", "Black Metal", "Blue Note", "Bluegrass", "Blues", "Boogaloo", "Bop", "Bossa Nova", "Bounce", "Brazilian Funk", "Breakbeat", "Britpop", "CCM", "Cajun", "Cantopop", "Celtic", "Celtic Folk", "Chamber Music", "Chant", "Chanukah", "Chicago Blues", "Chicago House", "Chicano", "Children’s Music", "Chill", "Choral", "Christian", "Christmas", "Classical", "Club", "College Rock", "Conjunto", "Cool Jazz", "Country", "Crunk", "Dance", "Dancehall", "Death Metal", "Deep House", "Delta Blues", "Detroit Techno", "Dirty South", "Disco", "Disney", "Dixieland", "Doo-wop", "Downtempo", "Dream Pop", "Drill", "Drinking Songs", "Drone", "Drum'n'bass", "Dub", "Dubstep", "EDM", "Early Music", "East Coast Rap", "Easter", "Easy Listening", "Eclectic", "Electric Blues", "Electro", "Electronic", "Electronica", "Emo", "Enka", "Environmental", "Ethio-jazz", "Experimental", "Experimental Rock", "Flamenco", "Folk", "Folk-Rock", "Forro", "French Pop", "Funk", "Fusion", "Gangsta Rap", "Garage", "German Folk", "German Pop", "Glam Rock", "Gospel", "Goth", "Grime", "Grindcore", "Groove", "Grunge", "Hair Metal", "Halloween", "Happy", "Hard Bop", "Hard Dance", "Hard Rock", "Hardcore", "Hardcore Punk", "Hardcore Rap", "Hardstyle", "Healing", "Heavy Metal", "High Classical", "Hip Hop", "Holiday", "Honky Tonk", "House", "IDM", "Impressionist", "Indie", "Industrial", "Instrumental", "J-Dance", "J-Idol", "J-Pop", "J-Punk", "J-Rock", "J-Ska", "J-Synth", "Jackin House", "Jam Bands", "Japanese Pop", "Jazz", "Jungle", "K-Pop", "Karaoke", "Kayokyoku", "Kids", "Kitsch", "Klezmer", "Krautrock", "Latin", "Latin Jazz", "Latin Rap", "Local", "Lounge", "Lullabies", "MPB", "Mainstream Jazz", "Malay", "Mandopop", "March", "Mariachi", "Mawwal", "Medieval", "Meditation", "Metal", "Metalcore", "Minimal Techno", "Minimalism", "Modern", "Motown", "Mugham", "Musicals", "Musique Concrète", "Nature", "Neo-Soul", "Nerdcore", "New Acoustic", "New Age", "New Mex", "New Wave", "No Wave", "Noise", "Nordic", "Novelty", "OPM", "Oi!", "Old School Rap", "Opera", "Orchestral", "Original Score", "Outlaw Country", "Pagode", "Party", "Piano", "Polka", "Pop", "Pop Film", "Pop Latino", "Post Dubstep", "Power Pop", "Praise & Worship", "Progressive House", "Progressive Rock", "Proto-punk", "Psych Rock", "Psychedelic", "Punk", "Punk Rock", "Qawwali", "Quiet Storm", "R&B", "Ragtime", "Rainy Day", "Rap", "Reggae", "Reggaeton", "Regional Mexicano", "Relaxation", "Renaissance", "Retro", "Rock", "Rockabilly", "Rocksteady", "Romance", "Romantic", "Roots Reggae", "Roots Rock", "SKA", "Sad", "Salsa", "Samba", "Second Line", "Sertanejo", "Shaabi", "Shoegaze", "Sleep", "Smooth Jazz", "Soft Rock", "Soul", "Soundtrack", "Southern Gospel", "Southern Rock", "Space Rock", "Stage And Screen", "Steampunk", "Summer", "Surf", "Swamp Pop", "Swing", "Synth Pop", "Tango", "Techno", "Teen Pop", "Tejano", "Tex-Mex", "Thanksgiving", "Traditional", "Trance", "Trip Hop", "Tropical", "Underground Rap", "Urban", "Urban Cowboy", "West Coast Rap", "Western Swing", "World", "Worldbeat", "Zydeco"], AF = ["(Everything I Do) I Do it For You", "(Ghost) Riders in the Sky", "(I Can't Get No) Satisfaction", "(I've Got a Gal In) Kalamazoo", "(I've Had) the Time of My Life", "(It's No) Sin", "(Just Like) Starting Over", "(Let Me Be Your) Teddy Bear", "(Put Another Nickel In) Music! Music! Music!", "(Sexual) Healing", "(Sittin' On) the Dock of the Bay", "(They Long to Be) Close to You", "(You Keep Me) Hangin' On", "(You're My) Soul & Inspiration", "(Your Love Keeps Lifting Me) Higher & Higher", "12th Street Rag", "1999", "19th Nervous Breakdown", "50 Ways to Leave Your Lover", "9 to 5", "96 Tears", "A Boy Named Sue", "A Hard Day's Night", "A String of Pearls", "A Thousand Miles", "A Tree in the Meadow", "A Whiter Shade of Pale", "A Whole New World (Aladdin's Theme)", "A Woman in Love", "A-Tisket A-Tasket", "ABC", "Abracadabra", "Ac-cent-tchu-ate the Positive", "Addicted to Love", "After You've Gone", "Afternoon Delight", "Again", "Against All Odds (Take a Look At Me Now)", "Ain't Misbehavin'", "Ain't No Mountain High Enough", "Ain't No Sunshine", "Ain't That a Shame", "Airplanes", "All Along the Watchtower", "All I Have to Do is Dream", "All I Wanna Do", "All My Lovin' (You're Never Gonna Get It)", "All Night Long (All Night)", "All Out of Love", "All Shook Up", "All You Need is Love", "Alone", "Alone Again (Naturally)", "Always On My Mind", "American Pie", "American Woman", "Angie", "Another Brick in the Wall (part 2)", "Another Day in Paradise", "Another Night", "Another One Bites the Dust", "Apologize", "April Showers", "Aquarius/Let The Sunshine In", "Are You Lonesome Tonight?", "Arthur's Theme (Best That You Can Do)", "As Time Goes By", "At Last", "At the Hop", "Auf Wiederseh'n Sweetheart", "Baby Baby", "Baby Come Back", "Baby Got Back", "Baby Love", "Baby One More Time", "Bad Day", "Bad Girls", "Bad Moon Rising", "Bad Romance", "Bad, Bad Leroy Brown", "Baker Street", "Ball of Confusion (That's What the World is Today)", "Ballad of the Green Berets", "Ballerina", "Band On the Run", "Band of Gold", "Battle of New Orleans", "Be Bop a Lula", "Be My Baby", "Be My Love", "Beat It", "Beautiful Day", "Beauty & the Beast", "Because I Love You (The Postman Song)", "Because You Loved Me", "Because of You", "Before The Next Teardrop Falls", "Begin the Beguine", "Behind Closed Doors", "Being With You", "Believe", "Ben", "Bennie & the Jets", "Besame Mucho", "Best of My Love", "Bette Davis Eyes", "Big Bad John", "Big Girls Don't Cry", "Billie Jean", "Bitter Sweet Symphony", "Black Or White", "Black Velvet", "Blaze of Glory", "Bleeding Love", "Blue Suede Shoes", "Blue Tango", "Blueberry Hill", "Blurred Lines", "Body & Soul", "Bohemian Rhapsody", "Boogie Oogie Oogie", "Boogie Woogie Bugle Boy", "Boom Boom Pow", "Born in the USA", "Born to Be Wild", "Born to Run", "Boulevard of Broken Dreams", "Brand New Key", "Brandy (You're A Fine Girl)", "Breaking Up is Hard to Do", "Breathe", "Bridge Over Troubled Water", "Brother Louie", "Brother, Can You Spare a Dime?", "Brown Eyed Girl", "Brown Sugar", "Build Me Up Buttercup", "Burn", "Buttons & Bows", "Bye Bye Love", "Bye Bye, Blackbird", "Bye, Bye, Bye", "Caldonia Boogie (What Makes Your Big Head So Hard)", "California Dreamin'", "California Girls", "Call Me", "Call Me Maybe", "Can You Feel the Love Tonight", "Can't Buy Me Love", "Can't Get Enough of Your Love, Babe", "Can't Help Falling in Love", "Candle in the Wind '97", "Candy Man", "Car Wash", "Careless Whisper", "Cars", "Cat's in the Cradle", "Cathy's Clown", "Celebration", "Centerfold", "Chain of Fools", "Chances Are", "Change the World", "Chapel of Love", "Chattanooga Choo Choo", "Chattanoogie Shoe-Shine Boy", "Check On It", "Cheek to Cheek", "Cherish", "Cherry Pink & Apple Blossom White", "Cold, Cold Heart", "Colors of the Wind", "Come On Eileen", "Come On-a My House", "Come Together", "Coming Up", "Cracklin' Rosie", "Crazy", "Crazy For You", "Crazy Little Thing Called Love", "Crazy in Love", "Creep", "Crimson & Clover", "Crocodile Rock", "Cry", "Cry Like a Baby", "Crying", "Da Doo Ron Ron (When He Walked Me Home)", "Dance to the Music", "Dancing Queen", "Dancing in the Dark", "Dancing in the Street", "Dardanella", "Daydream Believer", "December 1963 (Oh What a Night)", "Delicado", "Dilemma", "Disco Duck", "Disco Lady", "Disturbia", "Dizzy", "Do That to Me One More Time", "Do Wah Diddy Diddy", "Do Ya Think I'm Sexy?", "Do You Love Me?", "Don't Be Cruel", "Don't Fence Me In", "Don't Go Breaking My Heart", "Don't Leave Me This Way", "Don't Let the Stars Get in Your Eyes", "Don't Let the Sun Go Down On Me", "Don't Speak", "Don't Stop 'Til You Get Enough", "Don't Worry Be Happy", "Don't You (Forget About Me)", "Don't You Want Me", "Doo Wop (That Thing)", "Down", "Down Hearted Blues", "Down Under", "Downtown", "Dreamlover", "Dreams", "Drop it Like It's Hot", "Drops of Jupiter (Tell Me)", "Duke of Earl", "E.T.", "Earth Angel", "Ebony & Ivory", "Eight Days a Week", "Empire State Of Mind", "End of the Road", "Endless Love", "Escape (The Pina Colada Song)", "Eve of Destruction", "Every Breath You Take", "Every Little Thing She Does is Magic", "Everybody Loves Somebody", "Everybody Wants to Rule the World", "Everyday People", "Eye of the Tiger", "Faith", "Fallin'", "Fame", "Family Affair", "Fantasy", "Fast Car", "Feel Good Inc", "Feel Like Making Love", "Fire & Rain", "Firework", "Flashdance. What a Feeling", "Fly Robin Fly", "Foolish Games", "Footloose", "For What It's Worth (Stop, Hey What's That Sound)", "Fortunate Son", "Frankenstein", "Freak Me", "Freebird", "Frenesi", "Funkytown", "Gangsta's Paradise", "Georgia On My Mind", "Georgy Girl", "Get Back", "Get Down Tonight", "Get Off of My Cloud", "Ghostbusters", "Gimme Some Lovin'", "Girls Just Wanna Have Fun", "Give Me Everything", "Gives You Hell", "Glamorous", "Glory of Love", "Go Your Own Way", "God Bless America", "God Bless the Child", "Gold Digger", "Gonna Make You Sweat (Everybody Dance Now)", "Good Lovin'", "Good Times", "Good Vibrations", "Goodbye Yellow Brick Road", "Goodnight, Irene", "Got to Give it Up", "Grease", "Great Balls of Fire", "Greatest Love of All", "Green Onions", "Green River", "Green Tambourine", "Grenade", "Groove is in the Heart", "Groovin'", "Gypsies, Tramps & Thieves", "Hair", "Hang On Sloopy", "Hanging by a Moment", "Hanky Panky", "Happy Days Are Here Again", "Happy Together", "Harbour Lights", "Hard to Say I'm Sorry", "Harper Valley PTA", "Have You Ever Really Loved a Woman?", "He'll Have to Go", "He's So Fine", "He's a Rebel", "Heart of Glass", "Heart of Gold", "Heartbreak Hotel", "Hello Dolly", "Hello, I Love You, Won't You Tell Me Your Name?", "Help Me, Rhonda", "Help!", "Here Without You", "Here in My Heart", "Hero", "Hey Baby", "Hey Jude", "Hey Paula", "Hey There", "Hey There Delilah", "Hey Ya!", "Higher Love", "Hips don't lie", "Hit the Road, Jack", "Hold On", "Hollaback Girl", "Honey", "Honky Tonk", "Honky Tonk Woman", "Horse With No Name", "Hot Child In The City", "Hot Stuff", "Hotel California", "Hound Dog", "House of the Rising Sun", "How Deep is Your Love?", "How Do I Live?", "How Do You Mend a Broken Heart", "How High the Moon", "How Much is That Doggy in the Window?", "How Will I Know", "How You Remind Me", "How to Save a Life", "Hungry Heart", "Hurt So Good", "I Believe I Can Fly", "I Can Dream, Can't I?", "I Can Help", "I Can See Clearly Now", "I Can't Get Next to You", "I Can't Get Started", "I Can't Go For That (No Can Do)", "I Can't Help Myself (Sugar Pie, Honey Bunch)", "I Can't Stop Loving You", "I Don't Want to Miss a Thing", "I Fall to Pieces", "I Feel Fine", "I Feel For You", "I Feel Love", "I Get Around", "I Got You (I Feel Good)", "I Got You Babe", "I Gotta Feeling", "I Heard it Through the Grapevine", "I Honestly Love You", "I Just Called to Say I Love You", "I Just Wanna Be Your Everything", "I Kissed A Girl", "I Love Rock 'n' Roll", "I Need You Now", "I Only Have Eyes For You", "I Shot the Sheriff", "I Still Haven't Found What I'm Looking For", "I Swear", "I Think I Love You", "I Walk the Line", "I Wanna Dance With Somebody (Who Loves Me)", "I Wanna Love You", "I Want You Back", "I Want to Hold Your Hand", "I Want to Know What Love Is", "I Went to Your Wedding", "I Will Always Love You", "I Will Follow Him", "I Will Survive", "I Write the Songs", "I'll Be Missing You", "I'll Be There", "I'll Make Love to You", "I'll Never Smile Again", "I'll Take You There", "I'll Walk Alone", "I'll be seeing you", "I'm Looking Over a Four Leaf Clover", "I'm So Lonesome I Could Cry", "I'm Sorry", "I'm Walking Behind You", "I'm Your Boogie Man", "I'm Yours", "I'm a Believer", "I've Heard That Song Before", "If (They Made Me a King)", "If I Didn't Care", "If You Don't Know Me By Now", "If You Leave Me Now", "Imagine", "In Da Club", "In the End", "In the Ghetto", "In the Mood", "In the Summertime", "In the Year 2525 (Exordium & Terminus)", "Incense & Peppermints", "Indian Reservation (The Lament Of The Cherokee Reservation Indian)", "Instant Karma", "Iris", "Ironic", "Irreplaceable", "It Had to Be You", "It's All in the Game", "It's My Party", "It's Now Or Never", "It's Still Rock 'n' Roll to Me", "It's Too Late", "Jack & Diane", "Jailhouse Rock", "Jessie's Girl", "Jive Talkin'", "Johnny B Goode", "Joy to the World", "Judy in Disguise (With Glasses)", "Jump", "Jumpin' Jack Flash", "Just Dance", "Just My Imagination (Running Away With Me)", "Just the Way You Are", "Kansas City", "Karma Chameleon", "Keep On Loving You", "Killing Me Softly With His Song", "King of the Road", "Kiss", "Kiss & Say Goodbye", "Kiss From a Rose", "Kiss Me", "Kiss On My List", "Kiss You All Over", "Knock On Wood", "Knock Three Times", "Kokomo", "Kryptonite", "Kung Fu Fighting", "La Bamba", "Lady", "Lady Marmalade (Voulez-Vous Coucher Aver Moi Ce Soir?)", "Last Train to Clarksville", "Layla", "Le Freak", "Leader of the Pack", "Lean On Me", "Leaving, on a Jet Plane", "Let Me Call You Sweetheart", "Let Me Love You", "Let it Be", "Let it Snow! Let it Snow! Let it Snow!", "Let's Dance", "Let's Get it On", "Let's Groove", "Let's Hear it For the Boy", "Let's Stay Together", "Light My Fire", "Lights", "Like a Prayer", "Like a Rolling Stone", "Like a Virgin", "Little Darlin'", "Little Things Mean a Lot", "Live & Let Die", "Livin' La Vida Loca", "Livin' On a Prayer", "Living For the City", "Locked Out Of Heaven", "Lola", "Lonely Boy", "Long Cool Woman in a Black Dress", "Long Tall Sally", "Look Away", "Lookin' Out My Back Door", "Lose Yourself", "Losing My Religion", "Louie Louie", "Love Child", "Love Hangover", "Love In This Club", "Love Is Blue (L'Amour Est Bleu)", "Love Letters in the Sand", "Love Me Do", "Love Me Tender", "Love Shack", "Love Theme From 'A Star is Born' (Evergreen)", "Love Train", "Love Will Keep Us Together", "Love is a Many Splendoured Thing", "Love to Love You Baby", "Love's Theme", "Loving You", "Low", "Macarena", "Mack the Knife", "Maggie May", "Magic", "Magic Carpet Ride", "Make Love to Me", "Make it With You", "Makin' Whoopee", "Mama Told Me Not to Come", "Man in the Mirror", "Manana (Is Soon Enough For Me)", "Maneater", "Maniac", "Maybellene", "Me & Bobby McGee", "Me & Mrs Jones", "Memories Are Made of This", "Mercy Mercy Me (The Ecology)", "Mickey", "Midnight Train to Georgia", "Minnie the Moocher", "Miss You", "Miss You Much", "Mister Sandman", "Mmmbop", "Mona Lisa", "Monday Monday", "Money For Nothing", "Mony Mony", "Mood Indigo", "Moonlight Cocktail", "Moonlight Serenade", "More Than Words", "More Than a Feeling", "Morning Train (Nine to Five)", "Mr Big Stuff", "Mr Brightside", "Mr Tambourine Man", "Mrs Brown You've Got a Lovely Daughter", "Mrs Robinson", "Mule Train", "Music", "My Blue Heaven", "My Boyfriend's Back", "My Eyes Adored You", "My Girl", "My Guy", "My Heart Will Go On", "My Life", "My Love", "My Man", "My Prayer", "My Sharona", "My Sweet Lord", "Na Na Hey Hey (Kiss Him Goodbye)", "Nature Boy", "Near You", "Need You Now", "Need You Tonight", "Never Gonna Give You Up", "Night & Day", "Night Fever", "Nights in White Satin", "No One", "No Scrubs", "Nobody Does it Better", "Nothin' on You", "Nothing Compares 2 U", "Nothing's Gonna Stop Us Now", "Ode To Billie Joe", "Oh Happy Day", "Oh My Papa (O Mein Papa)", "Oh, Pretty Woman", "Ol' Man River", "Ole Buttermilk Sky", "On Bended Knee", "On My Own", "On the Atchison, Topeka & the Santa Fe", "One", "One Bad Apple", "One More Try", "One O'Clock Jump", "One Sweet Day", "One of These Nights", "One of Us", "Only The Lonely (Know The Way I Feel)", "Only You (And You Alone)", "Open Arms", "Over There", "Over the Rainbow", "Paint it Black", "Papa Don't Preach", "Papa Was a Rolling Stone", "Papa's Got a Brand New Bag", "Paper Doll", "Paper Planes", "Paperback Writer", "Party Rock Anthem", "Peg o' My Heart", "Peggy Sue", "Pennies From Heaven", "Penny Lane", "People", "People Got to Be Free", "Personality", "Philadelphia Freedom", "Physical", "Piano Man", "Pick Up the Pieces", "Pistol Packin' Mama", "Play That Funky Music", "Please Mr Postman", "Poker Face", "Pon De Replay", "Pony Time", "Pop Muzik", "Prisoner of Love", "Private Eyes", "Promiscuous", "Proud Mary", "Purple Haze", "Purple Rain", "Puttin' on the Ritz", "Que sera sera (Whatever will be will be)", "Queen of Hearts", "Rag Doll", "Rag Mop", "Rags to Riches", "Raindrops Keep Falling On My Head", "Rapture", "Ray of Light", "Reach Out (I'll Be There)", "Red Red Wine", "Rehab", "Respect", "Return to Sender", "Reunited", "Revolution", "Rhapsody in Blue", "Rhinestone Cowboy", "Rich Girl", "Riders On the Storm", "Right Back Where We Started From", "Ring My Bell", "Ring of Fire", "Rock Around the Clock", "Rock With You", "Rock Your Baby", "Rock the Boat", "Rock the Casbah", "Roll Over Beethoven", "Roll With It", "Rolling In The Deep", "Rosanna", "Roses Are Red", "Royals", "Ruby Tuesday", "Rudolph, the Red-Nosed Reindeer", "Rum & Coca-Cola", "Runaround Sue", "Runaway", "Running Scared", "Rush Rush", "Sailing", "Save the Best For Last", "Save the Last Dance For Me", "Say It Right", "Say My Name", "Say Say Say", "Say You, Say Me", "School's Out", "Seasons in the Sun", "Secret Love", "Sentimental Journey", "Sexyback", "Sh-Boom (Life Could Be a Dream)", "Shadow Dancing", "Shake Down", "Shake You Down", "She Drives Me Crazy", "She Loves You", "She's a Lady", "Shining Star", "Shop Around", "Shout", "Silly Love Songs", "Since U Been Gone", "Sing, Sing, Sing (With A Swing)", "Singing The Blues", "Single Ladies (Put A Ring On It)", "Sir Duke", "Sixteen Tons", "Sledgehammer", "Sleep Walk", "Sleepy Lagoon", "Slow Poke", "Smells Like Teen Spirit", "Smoke Gets in Your Eyes", "Smoke On the Water", "Smoke! Smoke! Smoke! (That Cigarette)", "Smooth", "So Much in Love", "Soldier Boy", "Some Enchanted Evening", "Some of These Days", "Somebody That I Used to Know", "Somebody to Love", "Someday", "Somethin' Stupid", "Something", "Soul Man", "Spanish Harlem", "Spill the Wine", "Spinning Wheel", "Spirit in the Sky", "St George & the Dragonette", "St Louis Blues", "Stagger Lee", "Stairway to Heaven", "Stand By Me", "Stardust", "Stars & Stripes Forever", "Stay (I Missed You)", "Stayin' Alive", "Stop! in the Name of Love", "Stormy Weather (Keeps Rainin' All the Time)", "Straight Up", "Strange Fruit", "Stranger On the Shore", "Strangers in the Night", "Strawberry Fields Forever", "Streets of Philadelphia", "Stronger", "Stuck On You", "Sugar Shack", "Sugar Sugar", "Summer in the City", "Summertime Blues", "Sunday, Monday or Always", "Sunshine Superman", "Sunshine of Your Love", "Superstar", "Superstition", "Surfin' USA", "Suspicious Minds", "Swanee", "Sweet Caroline (Good Times Never Seemed So Good)", "Sweet Child O' Mine", "Sweet Dreams (Are Made of This)", "Sweet Georgia Brown", "Sweet Home Alabama", "Sweet Soul Music", "Swinging On a Star", "T For Texas (Blue Yodel No 1)", "TSOP (The Sound of Philadelphia)", "Take Me Home, Country Roads", "Take My Breath Away", "Take On Me", "Take The 'A' Train", "Take a Bow", "Tammy", "Tangerine", "Tears in Heaven", "Tears of a Clown", "Temperature", "Tennessee Waltz", "Tequila", "Tha Crossroads", "Thank You (Falettinme be Mice Elf Again)", "That Lucky Old Sun (Just Rolls Around Heaven All Day)", "That Old Black Magic", "That'll Be the Day", "That's Amore", "That's What Friends Are For", "That's the Way (I Like It)", "That's the Way Love Goes", "The Boy is Mine", "The Boys of Summer", "The Christmas Song (Chestnuts Roasting On An Open Fire)", "The End of the World", "The First Time Ever I Saw Your Face", "The Girl From Ipanema", "The Glow-Worm", "The Great Pretender", "The Gypsy", "The Hustle", "The Joker", "The Last Dance", "The Letter", "The Loco-Motion", "The Long & Winding Road", "The Love You Save", "The Morning After", "The Power of Love", "The Prisoner's Song", "The Reason", "The Rose", "The Sign", "The Song From Moulin Rouge (Where Is Your Heart)", "The Sounds of Silence", "The Streak", "The Sweet Escape", "The Thing", "The Tide is High", "The Tracks of My Tears", "The Twist", "The Wanderer", "The Way We Were", "The Way You Look Tonight", "The Way You Move", "Theme From 'A Summer Place'", "Theme From 'Greatest American Hero' (Believe It Or Not)", "Theme From 'Shaft'", "There goes my baby", "These Boots Are Made For Walking", "Third Man Theme", "This Diamond Ring", "This Guy's in Love With You", "This Land is Your Land", "This Love", "This Ole House", "This Used to Be My Playground", "Three Coins in the Fountain", "Three Times a Lady", "Thrift Shop", "Thriller", "Ticket to Ride", "Tie a Yellow Ribbon 'round the Old Oak Tree", "Tiger Rag", "Tighten Up", "Tik-Toc", "Till I Waltz Again With You", "Till The End of Time", "Time After Time", "Time of the Season", "To Sir, with Love", "Tom Dooley", "Tonight's the Night (Gonna Be Alright)", "Too Close", "Too Young", "Tossing & Turning", "Total Eclipse of the Heart", "Touch Me", "Toxic", "Travellin' Band", "Travellin' Man", "Truly Madly Deeply", "Turn! Turn! Turn! (To Everything There is a Season)", "Tutti Frutti", "Twist & Shout", "Two Hearts", "U Can't Touch This", "U Got it Bad", "Umbrella", "Un-Break My Heart", "Unbelievable", "Unchained Melody", "Uncle Albert (Admiral Halsey)", "Under the Boardwalk", "Under the Bridge", "Unforgettable", "Up Around the Bend", "Up Up & Away", "Up Where We Belong", "Upside Down", "Use Somebody", "Vaya Con Dios (may God Be With You)", "Venus", "Vision of Love", "Viva La Vida", "Vogue", "Volare", "Wabash Cannonball", "Waiting For a Girl Like You", "Wake Me Up Before You Go Go", "Wake Up Little Susie", "Walk Don't Run", "Walk Like a Man", "Walk Like an Egyptian", "Walk On By", "Walk On the Wild Side", "Walk This Way", "Wannabe", "Want Ads", "Wanted", "War", "Waterfalls", "Wayward Wind", "We Are Family", "We Are Young", "We Are the Champions", "We Are the World", "We Belong Together", "We Built This City", "We Can Work it Out", "We Didn't Start the Fire", "We Found Love", "We Got The Beat", "We Will Rock You", "We've Only Just Begun", "Weak", "Wedding Bell Blues", "West End Blues", "West End Girls", "What Goes Around Comes Around", "What a Fool Believes", "What'd I Say", "What's Going On?", "What's Love Got to Do With It?", "Whatcha Say", "Wheel of Fortune", "When Doves Cry", "When You Wish Upon a Star", "When a Man Loves a Woman", "Where Did Our Love Go", "Where is the Love?", "Whip It", "Whispering", "White Christmas", "White Rabbit", "Whole Lotta Love", "Whole Lotta Shakin' Goin' On", "Whoomp! (There it Is)", "Why Do Fools Fall in Love?", "Why Don't You Believe Me?", "Wichita Lineman", "Wicked Game", "Wild Thing", "Wild Wild West", "Will It Go Round In Circles", "Will You Love Me Tomorrow", "Winchester Cathedral", "Wind Beneath My Wings", "Wipe Out", "Wishing Well", "With Or Without You", "Without Me", "Without You", "Woman", "Won't Get Fooled Again", "Wooly Bully", "Working My Way Back to You", "YMCA", "Yakety Yak", "Yeah!", "Yellow Rose of Texas", "Yesterday", "You Ain't Seen Nothin' Yet", "You Always Hurt the One You Love", "You Are the Sunshine of My Life", "You Belong With Me", "You Belong to Me", "You Can't Hurry Love", "You Don't Bring Me Flowers", "You Don't Have to Be a Star (To Be in My Show)", "You Light Up My Life", "You Make Me Feel Brand New", "You Make Me Feel Like Dancing", "You Really Got Me", "You Send Me", "You Sexy Thing", "You Were Meant for Me", "You make Me Wanna", "You'll Never Know", "You're Beautiful", "You're So Vain", "You're Still the One", "You're the One That I Want", "You've Got a Friend", "You've Lost That Lovin' Feelin'", "Your Cheatin' Heart", "Your Song"], SF = { album: CF, artist: vF, genre: kF, song_name: AF }, wF = SF, EF = ["activist", "artist", "author", "blogger", "business owner", "coach", "creator", "designer", "developer", "dreamer", "educator", "engineer", "entrepreneur", "environmentalist", "film lover", "filmmaker", "foodie", "founder", "friend", "gamer", "geek", "grad", "inventor", "leader", "model", "musician", "nerd", "parent", "patriot", "person", "philosopher", "photographer", "public speaker", "scientist", "singer", "streamer", "student", "teacher", "traveler", "veteran", "writer"], DF = ["{{person.bio_part}}", "{{person.bio_part}}, {{person.bio_part}}", "{{person.bio_part}}, {{person.bio_part}}, {{person.bio_part}}", "{{person.bio_part}}, {{person.bio_part}}, {{person.bio_part}} {{internet.emoji}}", "{{word.noun}} {{person.bio_supporter}}", "{{word.noun}} {{person.bio_supporter}}  {{internet.emoji}}", "{{word.noun}} {{person.bio_supporter}}, {{person.bio_part}}", "{{word.noun}} {{person.bio_supporter}}, {{person.bio_part}} {{internet.emoji}}"], BF = ["advocate", "devotee", "enthusiast", "fan", "junkie", "lover", "supporter"], TF = { generic: ["Aaliyah", "Aaron", "Abagail", "Abbey", "Abbie", "Abbigail", "Abby", "Abdiel", "Abdul", "Abdullah", "Abe", "Abel", "Abelardo", "Abigail", "Abigale", "Abigayle", "Abner", "Abraham", "Ada", "Adah", "Adalberto", "Adaline", "Adam", "Adan", "Addie", "Addison", "Adela", "Adelbert", "Adele", "Adelia", "Adeline", "Adell", "Adella", "Adelle", "Aditya", "Adolf", "Adolfo", "Adolph", "Adolphus", "Adonis", "Adrain", "Adrian", "Adriana", "Adrianna", "Adriel", "Adrien", "Adrienne", "Afton", "Aglae", "Agnes", "Agustin", "Agustina", "Ahmad", "Ahmed", "Aida", "Aidan", "Aiden", "Aileen", "Aimee", "Aisha", "Aiyana", "Akeem", "Al", "Alaina", "Alan", "Alana", "Alanis", "Alanna", "Alayna", "Alba", "Albert", "Alberta", "Albertha", "Alberto", "Albin", "Albina", "Alda", "Alden", "Alec", "Aleen", "Alejandra", "Alejandrin", "Alek", "Alena", "Alene", "Alessandra", "Alessandro", "Alessia", "Aletha", "Alex", "Alexa", "Alexander", "Alexandra", "Alexandre", "Alexandrea", "Alexandria", "Alexandrine", "Alexandro", "Alexane", "Alexanne", "Alexie", "Alexis", "Alexys", "Alexzander", "Alf", "Alfonso", "Alfonzo", "Alford", "Alfred", "Alfreda", "Alfredo", "Ali", "Alia", "Alice", "Alicia", "Alisa", "Alisha", "Alison", "Alivia", "Aliya", "Aliyah", "Aliza", "Alize", "Allan", "Allen", "Allene", "Allie", "Allison", "Ally", "Alphonso", "Alta", "Althea", "Alva", "Alvah", "Alvena", "Alvera", "Alverta", "Alvina", "Alvis", "Alyce", "Alycia", "Alysa", "Alysha", "Alyson", "Alysson", "Amalia", "Amanda", "Amani", "Amara", "Amari", "Amaya", "Amber", "Ambrose", "Amelia", "Amelie", "Amely", "America", "Americo", "Amie", "Amina", "Amir", "Amira", "Amiya", "Amos", "Amparo", "Amy", "Amya", "Ana", "Anabel", "Anabelle", "Anahi", "Anais", "Anastacio", "Anastasia", "Anderson", "Andre", "Andreane", "Andreanne", "Andres", "Andrew", "Andy", "Angel", "Angela", "Angelica", "Angelina", "Angeline", "Angelita", "Angelo", "Angie", "Angus", "Anibal", "Anika", "Anissa", "Anita", "Aniya", "Aniyah", "Anjali", "Anna", "Annabel", "Annabell", "Annabelle", "Annalise", "Annamae", "Annamarie", "Anne", "Annetta", "Annette", "Annie", "Ansel", "Ansley", "Anthony", "Antoinette", "Antone", "Antonetta", "Antonette", "Antonia", "Antonietta", "Antonina", "Antonio", "Antwan", "Antwon", "Anya", "April", "Ara", "Araceli", "Aracely", "Arch", "Archibald", "Ardella", "Arden", "Ardith", "Arely", "Ari", "Ariane", "Arianna", "Aric", "Ariel", "Arielle", "Arjun", "Arlene", "Arlie", "Arlo", "Armand", "Armando", "Armani", "Arnaldo", "Arne", "Arno", "Arnold", "Arnoldo", "Arnulfo", "Aron", "Art", "Arthur", "Arturo", "Arvel", "Arvid", "Arvilla", "Aryanna", "Asa", "Asha", "Ashlee", "Ashleigh", "Ashley", "Ashly", "Ashlynn", "Ashton", "Ashtyn", "Asia", "Assunta", "Astrid", "Athena", "Aubree", "Aubrey", "Audie", "Audra", "Audreanne", "Audrey", "August", "Augusta", "Augustine", "Augustus", "Aurelia", "Aurelie", "Aurelio", "Aurore", "Austen", "Austin", "Austyn", "Autumn", "Ava", "Avery", "Avis", "Axel", "Ayana", "Ayden", "Ayla", "Aylin", "Baby", "Bailee", "Bailey", "Barbara", "Barney", "Baron", "Barrett", "Barry", "Bart", "Bartholome", "Barton", "Baylee", "Beatrice", "Beau", "Beaulah", "Bell", "Bella", "Belle", "Ben", "Benedict", "Benjamin", "Bennett", "Bennie", "Benny", "Benton", "Berenice", "Bernadette", "Bernadine", "Bernard", "Bernardo", "Berneice", "Bernhard", "Bernice", "Bernie", "Berniece", "Bernita", "Berry", "Bert", "Berta", "Bertha", "Bertram", "Bertrand", "Beryl", "Bessie", "Beth", "Bethany", "Bethel", "Betsy", "Bette", "Bettie", "Betty", "Bettye", "Beulah", "Beverly", "Bianka", "Bill", "Billie", "Billy", "Birdie", "Blair", "Blaise", "Blake", "Blanca", "Blanche", "Blaze", "Bo", "Bobbie", "Bobby", "Bonita", "Bonnie", "Boris", "Boyd", "Brad", "Braden", "Bradford", "Bradley", "Bradly", "Brady", "Braeden", "Brain", "Brandi", "Brando", "Brandon", "Brandt", "Brandy", "Brandyn", "Brannon", "Branson", "Brant", "Braulio", "Braxton", "Brayan", "Breana", "Breanna", "Breanne", "Brenda", "Brendan", "Brenden", "Brendon", "Brenna", "Brennan", "Brennon", "Brent", "Bret", "Brett", "Bria", "Brian", "Briana", "Brianne", "Brice", "Bridget", "Bridgette", "Bridie", "Brielle", "Brigitte", "Brionna", "Brisa", "Britney", "Brittany", "Brock", "Broderick", "Brody", "Brook", "Brooke", "Brooklyn", "Brooks", "Brown", "Bruce", "Bryana", "Bryce", "Brycen", "Bryon", "Buck", "Bud", "Buddy", "Buford", "Bulah", "Burdette", "Burley", "Burnice", "Buster", "Cade", "Caden", "Caesar", "Caitlyn", "Cale", "Caleb", "Caleigh", "Cali", "Calista", "Callie", "Camden", "Cameron", "Camila", "Camilla", "Camille", "Camren", "Camron", "Camryn", "Camylle", "Candace", "Candelario", "Candice", "Candida", "Candido", "Cara", "Carey", "Carissa", "Carlee", "Carleton", "Carley", "Carli", "Carlie", "Carlo", "Carlos", "Carlotta", "Carmel", "Carmela", "Carmella", "Carmelo", "Carmen", "Carmine", "Carol", "Carolanne", "Carole", "Carolina", "Caroline", "Carolyn", "Carolyne", "Carrie", "Carroll", "Carson", "Carter", "Cary", "Casandra", "Casey", "Casimer", "Casimir", "Casper", "Cassandra", "Cassandre", "Cassidy", "Cassie", "Catalina", "Caterina", "Catharine", "Catherine", "Cathrine", "Cathryn", "Cathy", "Cayla", "Ceasar", "Cecelia", "Cecil", "Cecile", "Cecilia", "Cedrick", "Celestine", "Celestino", "Celia", "Celine", "Cesar", "Chad", "Chadd", "Chadrick", "Chaim", "Chance", "Chandler", "Chanel", "Chanelle", "Charity", "Charlene", "Charles", "Charley", "Charlie", "Charlotte", "Chase", "Chasity", "Chauncey", "Chaya", "Chaz", "Chelsea", "Chelsey", "Chelsie", "Chesley", "Chester", "Chet", "Cheyanne", "Cheyenne", "Chloe", "Chris", "Christ", "Christa", "Christelle", "Christian", "Christiana", "Christina", "Christine", "Christop", "Christophe", "Christopher", "Christy", "Chyna", "Ciara", "Cicero", "Cielo", "Cierra", "Cindy", "Citlalli", "Clair", "Claire", "Clara", "Clarabelle", "Clare", "Clarissa", "Clark", "Claud", "Claude", "Claudia", "Claudie", "Claudine", "Clay", "Clemens", "Clement", "Clementina", "Clementine", "Clemmie", "Cleo", "Cleora", "Cleta", "Cletus", "Cleve", "Cleveland", "Clifford", "Clifton", "Clint", "Clinton", "Clotilde", "Clovis", "Cloyd", "Clyde", "Coby", "Cody", "Colby", "Cole", "Coleman", "Colin", "Colleen", "Collin", "Colt", "Colten", "Colton", "Columbus", "Concepcion", "Conner", "Connie", "Connor", "Conor", "Conrad", "Constance", "Constantin", "Consuelo", "Cooper", "Cora", "Coralie", "Corbin", "Cordelia", "Cordell", "Cordia", "Cordie", "Corene", "Corine", "Cornelius", "Cornell", "Corrine", "Cortez", "Cortney", "Cory", "Coty", "Courtney", "Coy", "Craig", "Crawford", "Creola", "Cristal", "Cristian", "Cristina", "Cristobal", "Cristopher", "Cruz", "Crystal", "Crystel", "Cullen", "Curt", "Curtis", "Cydney", "Cynthia", "Cyril", "Cyrus", "D'angelo", "Dagmar", "Dahlia", "Daija", "Daisha", "Daisy", "Dakota", "Dale", "Dallas", "Dallin", "Dalton", "Damaris", "Dameon", "Damian", "Damien", "Damion", "Damon", "Dan", "Dana", "Dandre", "Dane", "Dangelo", "Danial", "Daniela", "Daniella", "Danielle", "Danika", "Dannie", "Danny", "Dante", "Danyka", "Daphne", "Daphnee", "Daphney", "Darby", "Daren", "Darian", "Dariana", "Darien", "Dario", "Darion", "Darius", "Darlene", "Daron", "Darrel", "Darrell", "Darren", "Darrick", "Darrin", "Darrion", "Darron", "Darryl", "Darwin", "Daryl", "Dashawn", "Dasia", "Dave", "David", "Davin", "Davion", "Davon", "Davonte", "Dawn", "Dawson", "Dax", "Dayana", "Dayna", "Dayne", "Dayton", "Dean", "Deangelo", "Deanna", "Deborah", "Declan", "Dedric", "Dedrick", "Dee", "Deion", "Deja", "Dejah", "Dejon", "Dejuan", "Delaney", "Delbert", "Delfina", "Delia", "Delilah", "Dell", "Della", "Delmer", "Delores", "Delpha", "Delphia", "Delphine", "Delta", "Demarco", "Demarcus", "Demario", "Demetris", "Demetrius", "Demond", "Dena", "Denis", "Dennis", "Deon", "Deondre", "Deontae", "Deonte", "Dereck", "Derek", "Derick", "Deron", "Derrick", "Deshaun", "Deshawn", "Desiree", "Desmond", "Dessie", "Destany", "Destin", "Destinee", "Destiney", "Destini", "Destiny", "Devan", "Devante", "Deven", "Devin", "Devon", "Devonte", "Devyn", "Dewayne", "Dewitt", "Dexter", "Diamond", "Diana", "Dianna", "Diego", "Dillan", "Dillon", "Dimitri", "Dina", "Dino", "Dion", "Dixie", "Dock", "Dolly", "Dolores", "Domenic", "Domenica", "Domenick", "Domenico", "Domingo", "Dominic", "Dominique", "Don", "Donald", "Donato", "Donavon", "Donna", "Donnell", "Donnie", "Donny", "Dora", "Dorcas", "Dorian", "Doris", "Dorothea", "Dorothy", "Dorris", "Dortha", "Dorthy", "Doug", "Douglas", "Dovie", "Doyle", "Drake", "Drew", "Duane", "Dudley", "Dulce", "Duncan", "Durward", "Dustin", "Dusty", "Dwight", "Dylan", "Earl", "Earlene", "Earline", "Earnest", "Earnestine", "Easter", "Easton", "Ebba", "Ebony", "Ed", "Eda", "Edd", "Eddie", "Eden", "Edgar", "Edgardo", "Edison", "Edmond", "Edmund", "Edna", "Eduardo", "Edward", "Edwardo", "Edwin", "Edwina", "Edyth", "Edythe", "Effie", "Efrain", "Efren", "Eileen", "Einar", "Eino", "Eladio", "Elaina", "Elbert", "Elda", "Eldon", "Eldora", "Eldred", "Eldridge", "Eleanora", "Eleanore", "Eleazar", "Electa", "Elena", "Elenor", "Elenora", "Eleonore", "Elfrieda", "Eli", "Elian", "Eliane", "Elias", "Eliezer", "Elijah", "Elinor", "Elinore", "Elisa", "Elisabeth", "Elise", "Eliseo", "Elisha", "Elissa", "Eliza", "Elizabeth", "Ella", "Ellen", "Ellie", "Elliot", "Elliott", "Ellis", "Ellsworth", "Elmer", "Elmira", "Elmo", "Elmore", "Elna", "Elnora", "Elody", "Eloisa", "Eloise", "Elouise", "Eloy", "Elroy", "Elsa", "Else", "Elsie", "Elta", "Elton", "Elva", "Elvera", "Elvie", "Elvis", "Elwin", "Elwyn", "Elyse", "Elyssa", "Elza", "Emanuel", "Emelia", "Emelie", "Emely", "Emerald", "Emerson", "Emery", "Emie", "Emil", "Emile", "Emilia", "Emiliano", "Emilie", "Emilio", "Emily", "Emma", "Emmalee", "Emmanuel", "Emmanuelle", "Emmet", "Emmett", "Emmie", "Emmitt", "Emmy", "Emory", "Ena", "Enid", "Enoch", "Enola", "Enos", "Enrico", "Enrique", "Ephraim", "Era", "Eriberto", "Eric", "Erica", "Erich", "Erick", "Ericka", "Erik", "Erika", "Erin", "Erling", "Erna", "Ernest", "Ernestina", "Ernestine", "Ernesto", "Ernie", "Ervin", "Erwin", "Eryn", "Esmeralda", "Esperanza", "Esta", "Esteban", "Estefania", "Estel", "Estell", "Estella", "Estelle", "Estevan", "Esther", "Estrella", "Etha", "Ethan", "Ethel", "Ethelyn", "Ethyl", "Ettie", "Eudora", "Eugene", "Eugenia", "Eula", "Eulah", "Eulalia", "Euna", "Eunice", "Eusebio", "Eva", "Evalyn", "Evan", "Evangeline", "Evans", "Eve", "Eveline", "Evelyn", "Everardo", "Everett", "Everette", "Evert", "Evie", "Ewald", "Ewell", "Ezekiel", "Ezequiel", "Ezra", "Fabian", "Fabiola", "Fae", "Fannie", "Fanny", "Fatima", "Faustino", "Fausto", "Favian", "Fay", "Faye", "Federico", "Felicia", "Felicita", "Felicity", "Felipa", "Felipe", "Felix", "Felton", "Fermin", "Fern", "Fernando", "Ferne", "Fidel", "Filiberto", "Filomena", "Finn", "Fiona", "Flavie", "Flavio", "Fleta", "Fletcher", "Flo", "Florence", "Florencio", "Florian", "Florida", "Florine", "Flossie", "Floy", "Floyd", "Ford", "Forest", "Forrest", "Foster", "Frances", "Francesca", "Francesco", "Francis", "Francisca", "Francisco", "Franco", "Frank", "Frankie", "Franz", "Fred", "Freda", "Freddie", "Freddy", "Frederic", "Frederick", "Frederik", "Frederique", "Fredrick", "Fredy", "Freeda", "Freeman", "Freida", "Frida", "Frieda", "Friedrich", "Fritz", "Furman", "Gabe", "Gabriel", "Gabriella", "Gabrielle", "Gaetano", "Gage", "Gail", "Gardner", "Garett", "Garfield", "Garland", "Garnet", "Garnett", "Garret", "Garrett", "Garrick", "Garrison", "Garry", "Garth", "Gaston", "Gavin", "Gayle", "Gene", "General", "Genesis", "Genevieve", "Gennaro", "Genoveva", "Geo", "Geoffrey", "George", "Georgette", "Georgiana", "Georgianna", "Geovanni", "Geovanny", "Geovany", "Gerald", "Geraldine", "Gerard", "Gerardo", "Gerda", "Gerhard", "Germaine", "German", "Gerry", "Gerson", "Gertrude", "Gia", "Gianni", "Gideon", "Gilbert", "Gilberto", "Gilda", "Giles", "Gillian", "Gina", "Gino", "Giovani", "Giovanna", "Giovanni", "Giovanny", "Gisselle", "Giuseppe", "Gladyce", "Gladys", "Glen", "Glenda", "Glenna", "Glennie", "Gloria", "Godfrey", "Golda", "Golden", "Gonzalo", "Gordon", "Grace", "Gracie", "Graciela", "Grady", "Graham", "Grant", "Granville", "Grayce", "Grayson", "Green", "Greg", "Gregg", "Gregoria", "Gregorio", "Gregory", "Greta", "Gretchen", "Greyson", "Griffin", "Grover", "Guadalupe", "Gudrun", "Guido", "Guillermo", "Guiseppe", "Gunnar", "Gunner", "Gus", "Gussie", "Gust", "Gustave", "Guy", "Gwen", "Gwendolyn", "Hadley", "Hailee", "Hailey", "Hailie", "Hal", "Haleigh", "Haley", "Halie", "Halle", "Hallie", "Hank", "Hanna", "Hannah", "Hans", "Hardy", "Harley", "Harmon", "Harmony", "Harold", "Harrison", "Harry", "Harvey", "Haskell", "Hassan", "Hassie", "Hattie", "Haven", "Hayden", "Haylee", "Hayley", "Haylie", "Hazel", "Hazle", "Heath", "Heather", "Heaven", "Heber", "Hector", "Heidi", "Helen", "Helena", "Helene", "Helga", "Hellen", "Helmer", "Heloise", "Henderson", "Henri", "Henriette", "Henry", "Herbert", "Herman", "Hermann", "Hermina", "Herminia", "Herminio", "Hershel", "Herta", "Hertha", "Hester", "Hettie", "Hilario", "Hilbert", "Hilda", "Hildegard", "Hillard", "Hillary", "Hilma", "Hilton", "Hipolito", "Hiram", "Hobart", "Holden", "Hollie", "Hollis", "Holly", "Hope", "Horace", "Horacio", "Hortense", "Hosea", "Houston", "Howard", "Howell", "Hoyt", "Hubert", "Hudson", "Hugh", "Hulda", "Humberto", "Hunter", "Hyman", "Ian", "Ibrahim", "Icie", "Ida", "Idell", "Idella", "Ignacio", "Ignatius", "Ike", "Ila", "Ilene", "Iliana", "Ima", "Imani", "Imelda", "Immanuel", "Imogene", "Ines", "Irma", "Irving", "Irwin", "Isaac", "Isabel", "Isabell", "Isabella", "Isabelle", "Isac", "Isadore", "Isai", "Isaiah", "Isaias", "Isidro", "Ismael", "Isobel", "Isom", "Israel", "Issac", "Itzel", "Iva", "Ivah", "Ivory", "Ivy", "Izabella", "Izaiah", "Jabari", "Jace", "Jacey", "Jacinthe", "Jacinto", "Jack", "Jackeline", "Jackie", "Jacklyn", "Jackson", "Jacky", "Jaclyn", "Jacquelyn", "Jacques", "Jacynthe", "Jada", "Jade", "Jaden", "Jadon", "Jadyn", "Jaeden", "Jaida", "Jaiden", "Jailyn", "Jaime", "Jairo", "Jakayla", "Jake", "Jakob", "Jaleel", "Jalen", "Jalon", "Jalyn", "Jamaal", "Jamal", "Jamar", "Jamarcus", "Jamel", "Jameson", "Jamey", "Jamie", "Jamil", "Jamir", "Jamison", "Jammie", "Jan", "Jana", "Janae", "Jane", "Janelle", "Janessa", "Janet", "Janice", "Janick", "Janie", "Janis", "Janiya", "Jannie", "Jany", "Jaquan", "Jaquelin", "Jaqueline", "Jared", "Jaren", "Jarod", "Jaron", "Jarred", "Jarrell", "Jarret", "Jarrett", "Jarrod", "Jarvis", "Jasen", "Jasmin", "Jason", "Jasper", "Jaunita", "Javier", "Javon", "Javonte", "Jay", "Jayce", "Jaycee", "Jayda", "Jayde", "Jayden", "Jaydon", "Jaylan", "Jaylen", "Jaylin", "Jaylon", "Jayme", "Jayne", "Jayson", "Jazlyn", "Jazmin", "Jazmyn", "Jazmyne", "Jean", "Jeanette", "Jeanie", "Jeanne", "Jed", "Jedediah", "Jedidiah", "Jeff", "Jefferey", "Jeffery", "Jeffrey", "Jeffry", "Jena", "Jenifer", "Jennie", "Jennifer", "Jennings", "Jennyfer", "Jensen", "Jerad", "Jerald", "Jeramie", "Jeramy", "Jerel", "Jeremie", "Jeremy", "Jermain", "Jermaine", "Jermey", "Jerod", "Jerome", "Jeromy", "Jerrell", "Jerrod", "Jerrold", "Jerry", "Jess", "Jesse", "Jessica", "Jessie", "Jessika", "Jessy", "Jessyca", "Jesus", "Jett", "Jettie", "Jevon", "Jewel", "Jewell", "Jillian", "Jimmie", "Jimmy", "Jo", "Joan", "Joana", "Joanie", "Joanne", "Joannie", "Joanny", "Joany", "Joaquin", "Jocelyn", "Jodie", "Jody", "Joe", "Joel", "Joelle", "Joesph", "Joey", "Johan", "Johann", "Johanna", "Johathan", "John", "Johnathan", "Johnathon", "Johnnie", "Johnny", "Johnpaul", "Johnson", "Jolie", "Jon", "Jonas", "Jonatan", "Jonathan", "Jonathon", "Jordan", "Jordane", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", "Jose", "Josefa", "Josefina", "Joseph", "Josephine", "Josh", "Joshua", "Joshuah", "Josiah", "Josiane", "Josianne", "Josie", "Josue", "Jovan", "Jovani", "Jovanny", "Jovany", "Joy", "Joyce", "Juana", "Juanita", "Judah", "Judd", "Jude", "Judge", "Judson", "Judy", "Jules", "Julia", "Julian", "Juliana", "Julianne", "Julie", "Julien", "Juliet", "Julio", "Julius", "June", "Junior", "Junius", "Justen", "Justice", "Justina", "Justine", "Juston", "Justus", "Justyn", "Juvenal", "Juwan", "Kacey", "Kaci", "Kacie", "Kade", "Kaden", "Kadin", "Kaela", "Kaelyn", "Kaia", "Kailee", "Kailey", "Kailyn", "Kaitlin", "Kaitlyn", "Kale", "Kaleb", "Kaleigh", "Kaley", "Kali", "Kallie", "Kameron", "Kamille", "Kamren", "Kamron", "Kamryn", "Kane", "Kara", "Kareem", "Karelle", "Karen", "Kari", "Kariane", "Karianne", "Karina", "Karine", "Karl", "Karlee", "Karley", "Karli", "Karlie", "Karolann", "Karson", "Kasandra", "Kasey", "Kassandra", "Katarina", "Katelin", "Katelyn", "Katelynn", "Katharina", "Katherine", "Katheryn", "Kathleen", "Kathlyn", "Kathryn", "Kathryne", "Katlyn", "Katlynn", "Katrina", "Katrine", "Kattie", "Kavon", "Kay", "Kaya", "Kaycee", "Kayden", "Kayla", "Kaylah", "Kaylee", "Kayleigh", "Kayley", "Kayli", "Kaylie", "Kaylin", "Keagan", "Keanu", "Keara", "Keaton", "Keegan", "Keeley", "Keely", "Keenan", "Keira", "Keith", "Kellen", "Kelley", "Kelli", "Kellie", "Kelly", "Kelsi", "Kelsie", "Kelton", "Kelvin", "Ken", "Kendall", "Kendra", "Kendrick", "Kenna", "Kennedi", "Kennedy", "Kenneth", "Kennith", "Kenny", "Kenton", "Kenya", "Kenyatta", "Kenyon", "Keon", "Keshaun", "Keshawn", "Keven", "Kevin", "Kevon", "Keyon", "Keyshawn", "Khalid", "Khalil", "Kian", "Kiana", "Kianna", "Kiara", "Kiarra", "Kiel", "Kiera", "Kieran", "Kiley", "Kim", "Kimberly", "King", "Kip", "Kira", "Kirk", "Kirsten", "Kirstin", "Kitty", "Kobe", "Koby", "Kody", "Kolby", "Kole", "Korbin", "Korey", "Kory", "Kraig", "Kris", "Krista", "Kristian", "Kristin", "Kristina", "Kristofer", "Kristoffer", "Kristopher", "Kristy", "Krystal", "Krystel", "Krystina", "Kurt", "Kurtis", "Kyla", "Kyle", "Kylee", "Kyleigh", "Kyler", "Kylie", "Kyra", "Lacey", "Lacy", "Ladarius", "Lafayette", "Laila", "Laisha", "Lamar", "Lambert", "Lamont", "Lance", "Landen", "Lane", "Laney", "Larissa", "Laron", "Larry", "Larue", "Laura", "Laurel", "Lauren", "Laurence", "Lauretta", "Lauriane", "Laurianne", "Laurie", "Laurine", "Laury", "Lauryn", "Lavada", "Lavern", "Laverna", "Laverne", "Lavina", "Lavinia", "Lavon", "Lavonne", "Lawrence", "Lawson", "Layla", "Layne", "Lazaro", "Lea", "Leann", "Leanna", "Leanne", "Leatha", "Leda", "Lee", "Leif", "Leila", "Leilani", "Lela", "Lelah", "Leland", "Lelia", "Lempi", "Lemuel", "Lenna", "Lennie", "Lenny", "Lenora", "Lenore", "Leo", "Leola", "Leon", "Leonard", "Leonardo", "Leone", "Leonel", "Leonie", "Leonor", "Leonora", "Leopold", "Leopoldo", "Leora", "Lera", "Lesley", "Leslie", "Lesly", "Lessie", "Lester", "Leta", "Letha", "Letitia", "Levi", "Lew", "Lewis", "Lexi", "Lexie", "Lexus", "Lia", "Liam", "Liana", "Libbie", "Libby", "Lila", "Lilian", "Liliana", "Liliane", "Lilla", "Lillian", "Lilliana", "Lillie", "Lilly", "Lily", "Lilyan", "Lina", "Lincoln", "Linda", "Lindsay", "Lindsey", "Linnea", "Linnie", "Linwood", "Lionel", "Lisa", "Lisandro", "Lisette", "Litzy", "Liza", "Lizeth", "Lizzie", "Llewellyn", "Lloyd", "Logan", "Lois", "Lola", "Lolita", "Loma", "Lon", "London", "Lonie", "Lonnie", "Lonny", "Lonzo", "Lora", "Loraine", "Loren", "Lorena", "Lorenz", "Lorenza", "Lorenzo", "Lori", "Lorine", "Lorna", "Lottie", "Lou", "Louie", "Louisa", "Lourdes", "Louvenia", "Lowell", "Loy", "Loyal", "Loyce", "Lucas", "Luciano", "Lucie", "Lucienne", "Lucile", "Lucinda", "Lucio", "Lucious", "Lucius", "Lucy", "Ludie", "Ludwig", "Lue", "Luella", "Luigi", "Luis", "Luisa", "Lukas", "Lula", "Lulu", "Luna", "Lupe", "Lura", "Lurline", "Luther", "Luz", "Lyda", "Lydia", "Lyla", "Lynn", "Lyric", "Lysanne", "Mabel", "Mabelle", "Mable", "Mac", "Macey", "Maci", "Macie", "Mack", "Mackenzie", "Macy", "Madaline", "Madalyn", "Maddison", "Madeline", "Madelyn", "Madelynn", "Madge", "Madie", "Madilyn", "Madisen", "Madison", "Madisyn", "Madonna", "Madyson", "Mae", "Maegan", "Maeve", "Mafalda", "Magali", "Magdalen", "Magdalena", "Maggie", "Magnolia", "Magnus", "Maia", "Maida", "Maiya", "Major", "Makayla", "Makenna", "Makenzie", "Malachi", "Malcolm", "Malika", "Malinda", "Mallie", "Mallory", "Malvina", "Mandy", "Manley", "Manuel", "Manuela", "Mara", "Marc", "Marcel", "Marcelina", "Marcelino", "Marcella", "Marcelle", "Marcellus", "Marcelo", "Marcia", "Marco", "Marcos", "Marcus", "Margaret", "Margarete", "Margarett", "Margaretta", "Margarette", "Margarita", "Marge", "Margie", "Margot", "Margret", "Marguerite", "Maria", "Mariah", "Mariam", "Marian", "Mariana", "Mariane", "Marianna", "Marianne", "Mariano", "Maribel", "Marie", "Mariela", "Marielle", "Marietta", "Marilie", "Marilou", "Marilyne", "Marina", "Mario", "Marion", "Marisa", "Marisol", "Maritza", "Marjolaine", "Marjorie", "Marjory", "Mark", "Markus", "Marlee", "Marlen", "Marlene", "Marley", "Marlin", "Marlon", "Marques", "Marquis", "Marquise", "Marshall", "Marta", "Martin", "Martina", "Martine", "Marty", "Marvin", "Mary", "Maryam", "Maryjane", "Maryse", "Mason", "Mateo", "Mathew", "Mathias", "Mathilde", "Matilda", "Matilde", "Matt", "Matteo", "Mattie", "Maud", "Maude", "Maudie", "Maureen", "Maurice", "Mauricio", "Maurine", "Maverick", "Mavis", "Max", "Maxie", "Maxime", "Maximilian", "Maximillia", "Maximillian", "Maximo", "Maximus", "Maxine", "Maxwell", "May", "Maya", "Maybell", "Maybelle", "Maye", "Maymie", "Maynard", "Mayra", "Mazie", "Mckayla", "Mckenna", "Mckenzie", "Meagan", "Meaghan", "Meda", "Megane", "Meggie", "Meghan", "Mekhi", "Melany", "Melba", "Melisa", "Melissa", "Mellie", "Melody", "Melvin", "Melvina", "Melyna", "Melyssa", "Mercedes", "Meredith", "Merl", "Merle", "Merlin", "Merritt", "Mertie", "Mervin", "Meta", "Mia", "Micaela", "Micah", "Michael", "Michaela", "Michale", "Micheal", "Michel", "Michele", "Michelle", "Miguel", "Mikayla", "Mike", "Mikel", "Milan", "Miles", "Milford", "Miller", "Millie", "Milo", "Milton", "Mina", "Minerva", "Minnie", "Miracle", "Mireille", "Mireya", "Misael", "Missouri", "Misty", "Mitchel", "Mitchell", "Mittie", "Modesta", "Modesto", "Mohamed", "Mohammad", "Mohammed", "Moises", "Mollie", "Molly", "Mona", "Monica", "Monique", "Monroe", "Monserrat", "Monserrate", "Montana", "Monte", "Monty", "Morgan", "Moriah", "Morris", "Mortimer", "Morton", "Mose", "Moses", "Moshe", "Mossie", "Mozell", "Mozelle", "Muhammad", "Muriel", "Murl", "Murphy", "Murray", "Mustafa", "Mya", "Myah", "Mylene", "Myles", "Myra", "Myriam", "Myrl", "Myrna", "Myron", "Myrtice", "Myrtie", "Myrtis", "Myrtle", "Nadia", "Nakia", "Name", "Nannie", "Naomi", "Naomie", "Napoleon", "Narciso", "Nash", "Nasir", "Nat", "Natalia", "Natalie", "Natasha", "Nathan", "Nathanael", "Nathanial", "Nathaniel", "Nathen", "Nayeli", "Neal", "Ned", "Nedra", "Neha", "Neil", "Nelda", "Nella", "Nelle", "Nellie", "Nels", "Nelson", "Neoma", "Nestor", "Nettie", "Neva", "Newell", "Newton", "Nia", "Nicholas", "Nicholaus", "Nichole", "Nick", "Nicklaus", "Nickolas", "Nico", "Nicola", "Nicolas", "Nicole", "Nicolette", "Nigel", "Nikita", "Nikki", "Nikko", "Niko", "Nikolas", "Nils", "Nina", "Noah", "Noble", "Noe", "Noel", "Noelia", "Noemi", "Noemie", "Noemy", "Nola", "Nolan", "Nona", "Nora", "Norbert", "Norberto", "Norene", "Norma", "Norris", "Norval", "Norwood", "Nova", "Novella", "Nya", "Nyah", "Nyasia", "Obie", "Oceane", "Ocie", "Octavia", "Oda", "Odell", "Odessa", "Odie", "Ofelia", "Okey", "Ola", "Olaf", "Ole", "Olen", "Oleta", "Olga", "Olin", "Oliver", "Ollie", "Oma", "Omari", "Omer", "Ona", "Onie", "Opal", "Ophelia", "Ora", "Oral", "Oran", "Oren", "Orie", "Orin", "Orion", "Orland", "Orlando", "Orlo", "Orpha", "Orrin", "Orval", "Orville", "Osbaldo", "Osborne", "Oscar", "Osvaldo", "Oswald", "Oswaldo", "Otha", "Otho", "Otilia", "Otis", "Ottilie", "Ottis", "Otto", "Ova", "Owen", "Ozella", "Pablo", "Paige", "Palma", "Pamela", "Pansy", "Paolo", "Paris", "Parker", "Pascale", "Pasquale", "Pat", "Patience", "Patricia", "Patrick", "Patsy", "Pattie", "Paul", "Paula", "Pauline", "Paxton", "Payton", "Pearl", "Pearlie", "Pearline", "Pedro", "Peggie", "Penelope", "Percival", "Percy", "Perry", "Pete", "Peter", "Petra", "Peyton", "Philip", "Phoebe", "Phyllis", "Pierce", "Pierre", "Pietro", "Pink", "Pinkie", "Piper", "Polly", "Porter", "Precious", "Presley", "Preston", "Price", "Prince", "Princess", "Priscilla", "Providenci", "Prudence", "Queen", "Queenie", "Quentin", "Quincy", "Quinn", "Quinten", "Quinton", "Rachael", "Rachel", "Rachelle", "Rae", "Raegan", "Rafael", "Rafaela", "Raheem", "Rahsaan", "Rahul", "Raina", "Raleigh", "Ralph", "Ramiro", "Ramon", "Ramona", "Randal", "Randall", "Randi", "Randy", "Ransom", "Raoul", "Raphael", "Raphaelle", "Raquel", "Rashad", "Rashawn", "Rasheed", "Raul", "Raven", "Ray", "Raymond", "Raymundo", "Reagan", "Reanna", "Reba", "Rebeca", "Rebecca", "Rebeka", "Rebekah", "Reece", "Reed", "Reese", "Regan", "Reggie", "Reginald", "Reid", "Reilly", "Reina", "Reinhold", "Remington", "Rene", "Renee", "Ressie", "Reta", "Retha", "Retta", "Reuben", "Reva", "Rex", "Rey", "Reyes", "Reymundo", "Reyna", "Reynold", "Rhea", "Rhett", "Rhianna", "Rhiannon", "Rhoda", "Ricardo", "Richard", "Richie", "Richmond", "Rick", "Rickey", "Rickie", "Ricky", "Rico", "Rigoberto", "Riley", "Rita", "River", "Robb", "Robbie", "Robert", "Roberta", "Roberto", "Robin", "Robyn", "Rocio", "Rocky", "Rod", "Roderick", "Rodger", "Rodolfo", "Rodrick", "Rodrigo", "Roel", "Rogelio", "Roger", "Rogers", "Rolando", "Rollin", "Roma", "Romaine", "Roman", "Ron", "Ronaldo", "Ronny", "Roosevelt", "Rory", "Rosa", "Rosalee", "Rosalia", "Rosalind", "Rosalinda", "Rosalyn", "Rosamond", "Rosanna", "Rosario", "Roscoe", "Rose", "Rosella", "Roselyn", "Rosemarie", "Rosemary", "Rosendo", "Rosetta", "Rosie", "Rosina", "Roslyn", "Ross", "Rossie", "Rowan", "Rowena", "Rowland", "Roxane", "Roxanne", "Roy", "Royal", "Royce", "Rozella", "Ruben", "Rubie", "Ruby", "Rubye", "Rudolph", "Rudy", "Rupert", "Russ", "Russel", "Russell", "Rusty", "Ruth", "Ruthe", "Ruthie", "Ryan", "Ryann", "Ryder", "Rylan", "Rylee", "Ryleigh", "Ryley", "Sabina", "Sabrina", "Sabryna", "Sadie", "Sadye", "Sage", "Saige", "Sallie", "Sally", "Salma", "Salvador", "Salvatore", "Sam", "Samanta", "Samantha", "Samara", "Samir", "Sammie", "Sammy", "Samson", "Sandra", "Sandrine", "Sandy", "Sanford", "Santa", "Santiago", "Santina", "Santino", "Santos", "Sarah", "Sarai", "Sarina", "Sasha", "Saul", "Savanah", "Savanna", "Savannah", "Savion", "Scarlett", "Schuyler", "Scot", "Scottie", "Scotty", "Seamus", "Sean", "Sebastian", "Sedrick", "Selena", "Selina", "Selmer", "Serena", "Serenity", "Seth", "Shad", "Shaina", "Shakira", "Shana", "Shane", "Shanel", "Shanelle", "Shania", "Shanie", "Shaniya", "Shanna", "Shannon", "Shanny", "Shanon", "Shany", "Sharon", "Shaun", "Shawn", "Shawna", "Shaylee", "Shayna", "Shayne", "Shea", "Sheila", "Sheldon", "Shemar", "Sheridan", "Sherman", "Sherwood", "Shirley", "Shyann", "Shyanne", "Sibyl", "Sid", "Sidney", "Sienna", "Sierra", "Sigmund", "Sigrid", "Sigurd", "Silas", "Sim", "Simeon", "Simone", "Sincere", "Sister", "Skye", "Skyla", "Skylar", "Sofia", "Soledad", "Solon", "Sonia", "Sonny", "Sonya", "Sophia", "Sophie", "Spencer", "Stacey", "Stacy", "Stan", "Stanford", "Stanley", "Stanton", "Stefan", "Stefanie", "Stella", "Stephan", "Stephania", "Stephanie", "Stephany", "Stephen", "Stephon", "Sterling", "Steve", "Stevie", "Stewart", "Stone", "Stuart", "Summer", "Sunny", "Susan", "Susana", "Susanna", "Susie", "Suzanne", "Sven", "Syble", "Sydnee", "Sydney", "Sydni", "Sydnie", "Sylvan", "Sylvester", "Sylvia", "Tabitha", "Tad", "Talia", "Talon", "Tamara", "Tamia", "Tania", "Tanner", "Tanya", "Tara", "Taryn", "Tate", "Tatum", "Tatyana", "Taurean", "Tavares", "Taya", "Taylor", "Teagan", "Ted", "Telly", "Terence", "Teresa", "Terrance", "Terrell", "Terrence", "Terrill", "Terry", "Tess", "Tessie", "Tevin", "Thad", "Thaddeus", "Thalia", "Thea", "Thelma", "Theo", "Theodora", "Theodore", "Theresa", "Therese", "Theresia", "Theron", "Thomas", "Thora", "Thurman", "Tia", "Tiana", "Tianna", "Tiara", "Tierra", "Tiffany", "Tillman", "Timmothy", "Timmy", "Timothy", "Tina", "Tito", "Titus", "Tobin", "Toby", "Tod", "Tom", "Tomas", "Tomasa", "Tommie", "Toney", "Toni", "Tony", "Torey", "Torrance", "Torrey", "Toy", "Trace", "Tracey", "Tracy", "Travis", "Travon", "Tre", "Tremaine", "Tremayne", "Trent", "Trenton", "Tressa", "Tressie", "Treva", "Trever", "Trevion", "Trevor", "Trey", "Trinity", "Trisha", "Tristian", "Tristin", "Triston", "Troy", "Trudie", "Trycia", "Trystan", "Turner", "Twila", "Tyler", "Tyra", "Tyree", "Tyreek", "Tyrel", "Tyrell", "Tyrese", "Tyrique", "Tyshawn", "Tyson", "Ubaldo", "Ulices", "Ulises", "Una", "Unique", "Urban", "Uriah", "Uriel", "Ursula", "Vada", "Valentin", "Valentina", "Valentine", "Valerie", "Vallie", "Van", "Vance", "Vanessa", "Vaughn", "Veda", "Velda", "Vella", "Velma", "Velva", "Vena", "Verda", "Verdie", "Vergie", "Verla", "Verlie", "Vern", "Verna", "Verner", "Vernice", "Vernie", "Vernon", "Verona", "Veronica", "Vesta", "Vicenta", "Vicente", "Vickie", "Vicky", "Victor", "Victoria", "Vida", "Vidal", "Vilma", "Vince", "Vincent", "Vincenza", "Vincenzo", "Vinnie", "Viola", "Violet", "Violette", "Virgie", "Virgil", "Virginia", "Virginie", "Vita", "Vito", "Viva", "Vivian", "Viviane", "Vivianne", "Vivien", "Vivienne", "Vladimir", "Wade", "Waino", "Waldo", "Walker", "Wallace", "Walter", "Walton", "Wanda", "Ward", "Warren", "Watson", "Wava", "Waylon", "Wayne", "Webster", "Weldon", "Wellington", "Wendell", "Wendy", "Werner", "Westley", "Weston", "Whitney", "Wilber", "Wilbert", "Wilburn", "Wiley", "Wilford", "Wilfred", "Wilfredo", "Wilfrid", "Wilhelm", "Wilhelmine", "Will", "Willa", "Willard", "William", "Willie", "Willis", "Willow", "Willy", "Wilma", "Wilmer", "Wilson", "Wilton", "Winfield", "Winifred", "Winnifred", "Winona", "Winston", "Woodrow", "Wyatt", "Wyman", "Xander", "Xavier", "Xzavier", "Yadira", "Yasmeen", "Yasmin", "Yasmine", "Yazmin", "Yesenia", "Yessenia", "Yolanda", "Yoshiko", "Yvette", "Yvonne", "Zachariah", "Zachary", "Zachery", "Zack", "Zackary", "Zackery", "Zakary", "Zander", "Zane", "Zaria", "Zechariah", "Zelda", "Zella", "Zelma", "Zena", "Zetta", "Zion", "Zita", "Zoe", "Zoey", "Zoie", "Zoila", "Zola", "Zora", "Zula"], female: ["Ada", "Adrienne", "Agnes", "Alberta", "Alexandra", "Alexis", "Alice", "Alicia", "Alison", "Allison", "Alma", "Alyssa", "Amanda", "Amber", "Amelia", "Amy", "Ana", "Andrea", "Angel", "Angela", "Angelica", "Angelina", "Angie", "Anita", "Ann", "Anna", "Anne", "Annette", "Annie", "Antoinette", "Antonia", "April", "Arlene", "Ashley", "Audrey", "Barbara", "Beatrice", "Becky", "Belinda", "Bernadette", "Bernice", "Bertha", "Bessie", "Beth", "Bethany", "Betsy", "Betty", "Beulah", "Beverly", "Billie", "Blanca", "Blanche", "Bobbie", "Bonnie", "Brandi", "Brandy", "Brenda", "Bridget", "Brittany", "Brooke", "Camille", "Candace", "Candice", "Carla", "Carmen", "Carol", "Carole", "Caroline", "Carolyn", "Carrie", "Casey", "Cassandra", "Catherine", "Cathy", "Cecelia", "Cecilia", "Celia", "Charlene", "Charlotte", "Chelsea", "Cheryl", "Christie", "Christina", "Christine", "Christy", "Cindy", "Claire", "Clara", "Claudia", "Colleen", "Connie", "Constance", "Cora", "Courtney", "Cristina", "Crystal", "Cynthia", "Daisy", "Dana", "Danielle", "Darla", "Darlene", "Dawn", "Deanna", "Debbie", "Deborah", "Debra", "Delia", "Della", "Delores", "Denise", "Desiree", "Diana", "Diane", "Dianna", "Dianne", "Dixie", "Dolores", "Donna", "Dora", "Doreen", "Doris", "Dorothy", "Ebony", "Edith", "Edna", "Eileen", "Elaine", "Eleanor", "Elena", "Elisa", "Elizabeth", "Ella", "Ellen", "Eloise", "Elsa", "Elsie", "Elvira", "Emily", "Emma", "Erica", "Erika", "Erin", "Erma", "Ernestine", "Essie", "Estelle", "Esther", "Ethel", "Eula", "Eunice", "Eva", "Evelyn", "Faith", "Fannie", "Faye", "Felicia", "Flora", "Florence", "Frances", "Francis", "Freda", "Gail", "Gayle", "Geneva", "Genevieve", "Georgia", "Geraldine", "Gertrude", "Gina", "Ginger", "Gladys", "Glenda", "Gloria", "Grace", "Gretchen", "Guadalupe", "Gwen", "Gwendolyn", "Hannah", "Harriet", "Hattie", "Hazel", "Heather", "Heidi", "Helen", "Henrietta", "Hilda", "Holly", "Hope", "Ida", "Inez", "Irene", "Iris", "Irma", "Isabel", "Jackie", "Jacqueline", "Jacquelyn", "Jaime", "Jamie", "Jan", "Jana", "Jane", "Janet", "Janice", "Janie", "Janis", "Jasmine", "Jean", "Jeanette", "Jeanne", "Jeannette", "Jeannie", "Jenna", "Jennie", "Jennifer", "Jenny", "Jessica", "Jessie", "Jill", "Jo", "Joan", "Joann", "Joanna", "Joanne", "Jodi", "Jody", "Johanna", "Johnnie", "Josefina", "Josephine", "Joy", "Joyce", "Juana", "Juanita", "Judith", "Judy", "Julia", "Julie", "June", "Kara", "Karen", "Kari", "Karla", "Kate", "Katherine", "Kathleen", "Kathryn", "Kathy", "Katie", "Katrina", "Kay", "Kayla", "Kelley", "Kelli", "Kellie", "Kelly", "Kendra", "Kerry", "Kim", "Kimberly", "Krista", "Kristen", "Kristi", "Kristie", "Kristin", "Kristina", "Kristine", "Kristy", "Krystal", "Lana", "Latoya", "Laura", "Lauren", "Laurie", "Laverne", "Leah", "Lee", "Leigh", "Lela", "Lena", "Leona", "Leslie", "Leticia", "Lila", "Lillian", "Lillie", "Linda", "Lindsay", "Lindsey", "Lisa", "Lois", "Lola", "Lora", "Lorena", "Lorene", "Loretta", "Lori", "Lorraine", "Louise", "Lucia", "Lucille", "Lucy", "Lula", "Luz", "Lydia", "Lynda", "Lynette", "Lynn", "Lynne", "Mabel", "Mable", "Madeline", "Mae", "Maggie", "Mamie", "Mandy", "Marcella", "Marcia", "Margaret", "Margarita", "Margie", "Marguerite", "Maria", "Marian", "Marianne", "Marie", "Marilyn", "Marion", "Marjorie", "Marlene", "Marsha", "Marta", "Martha", "Mary", "Maryann", "Mattie", "Maureen", "Maxine", "May", "Megan", "Meghan", "Melanie", "Melba", "Melinda", "Melissa", "Melody", "Mercedes", "Meredith", "Michele", "Michelle", "Mildred", "Mindy", "Minnie", "Miranda", "Miriam", "Misty", "Molly", "Mona", "Monica", "Monique", "Muriel", "Myra", "Myrtle", "Nadine", "Nancy", "Naomi", "Natalie", "Natasha", "Nellie", "Nettie", "Nichole", "Nicole", "Nina", "Nora", "Norma", "Olga", "Olive", "Olivia", "Ollie", "Opal", "Ora", "Pam", "Pamela", "Pat", "Patricia", "Patsy", "Patti", "Patty", "Paula", "Paulette", "Pauline", "Pearl", "Peggy", "Penny", "Phyllis", "Priscilla", "Rachael", "Rachel", "Ramona", "Raquel", "Rebecca", "Regina", "Renee", "Rhonda", "Rita", "Roberta", "Robin", "Robyn", "Rochelle", "Rosa", "Rosalie", "Rose", "Rosemarie", "Rosemary", "Rosie", "Roxanne", "Ruby", "Ruth", "Sabrina", "Sadie", "Sally", "Samantha", "Sandra", "Sandy", "Sara", "Sarah", "Shannon", "Shari", "Sharon", "Shawna", "Sheila", "Shelia", "Shelley", "Shelly", "Sheri", "Sherri", "Sherry", "Sheryl", "Shirley", "Silvia", "Sonia", "Sonja", "Sonya", "Sophia", "Sophie", "Stacey", "Stacy", "Stella", "Stephanie", "Sue", "Susan", "Susie", "Suzanne", "Sylvia", "Tabitha", "Tamara", "Tami", "Tammy", "Tanya", "Tara", "Tasha", "Teresa", "Teri", "Terri", "Terry", "Thelma", "Theresa", "Tiffany", "Tina", "Toni", "Tonya", "Tracey", "Traci", "Tracy", "Tricia", "Valerie", "Vanessa", "Velma", "Vera", "Verna", "Veronica", "Vicki", "Vickie", "Vicky", "Victoria", "Viola", "Violet", "Virginia", "Vivian", "Wanda", "Wendy", "Whitney", "Willie", "Wilma", "Winifred", "Yolanda", "Yvette", "Yvonne"], male: ["Aaron", "Abel", "Abraham", "Adam", "Adrian", "Al", "Alan", "Albert", "Alberto", "Alejandro", "Alex", "Alexander", "Alfonso", "Alfred", "Alfredo", "Allan", "Allen", "Alonzo", "Alton", "Alvin", "Amos", "Andre", "Andres", "Andrew", "Andy", "Angel", "Angelo", "Anthony", "Antonio", "Archie", "Armando", "Arnold", "Arthur", "Arturo", "Aubrey", "Austin", "Barry", "Ben", "Benjamin", "Bennie", "Benny", "Bernard", "Bert", "Bill", "Billy", "Blake", "Bob", "Bobby", "Boyd", "Brad", "Bradford", "Bradley", "Brandon", "Brendan", "Brent", "Brett", "Brian", "Bruce", "Bryan", "Bryant", "Byron", "Caleb", "Calvin", "Cameron", "Carl", "Carlos", "Carlton", "Carroll", "Cary", "Casey", "Cecil", "Cedric", "Cesar", "Chad", "Charles", "Charlie", "Chester", "Chris", "Christian", "Christopher", "Clarence", "Clark", "Claude", "Clay", "Clayton", "Clifford", "Clifton", "Clint", "Clinton", "Clyde", "Cody", "Colin", "Conrad", "Corey", "Cornelius", "Cory", "Courtney", "Craig", "Curtis", "Dale", "Dallas", "Damon", "Dan", "Dana", "Daniel", "Danny", "Darin", "Darnell", "Darrel", "Darrell", "Darren", "Darrin", "Darryl", "Daryl", "Dave", "David", "Dean", "Delbert", "Dennis", "Derek", "Derrick", "Devin", "Dewey", "Dexter", "Domingo", "Dominic", "Dominick", "Don", "Donald", "Donnie", "Doug", "Douglas", "Doyle", "Drew", "Duane", "Dustin", "Dwayne", "Dwight", "Earl", "Earnest", "Ed", "Eddie", "Edgar", "Edmond", "Edmund", "Eduardo", "Edward", "Edwin", "Elbert", "Elias", "Elijah", "Ellis", "Elmer", "Emanuel", "Emilio", "Emmett", "Enrique", "Eric", "Erick", "Erik", "Ernest", "Ernesto", "Ervin", "Eugene", "Evan", "Everett", "Felipe", "Felix", "Fernando", "Floyd", "Forrest", "Francis", "Francisco", "Frank", "Frankie", "Franklin", "Fred", "Freddie", "Frederick", "Fredrick", "Gabriel", "Garrett", "Garry", "Gary", "Gene", "Geoffrey", "George", "Gerald", "Gerard", "Gerardo", "Gilbert", "Gilberto", "Glen", "Glenn", "Gordon", "Grady", "Grant", "Greg", "Gregg", "Gregory", "Guadalupe", "Guillermo", "Gustavo", "Guy", "Harold", "Harry", "Harvey", "Hector", "Henry", "Herbert", "Herman", "Homer", "Horace", "Howard", "Hubert", "Hugh", "Hugo", "Ian", "Ignacio", "Ira", "Irvin", "Irving", "Isaac", "Ismael", "Israel", "Ivan", "Jack", "Jackie", "Jacob", "Jaime", "Jake", "James", "Jamie", "Jan", "Jared", "Jason", "Javier", "Jay", "Jean", "Jeff", "Jeffery", "Jeffrey", "Jerald", "Jeremiah", "Jeremy", "Jermaine", "Jerome", "Jerry", "Jesse", "Jessie", "Jesus", "Jim", "Jimmie", "Jimmy", "Jody", "Joe", "Joel", "Joey", "John", "Johnathan", "Johnnie", "Johnny", "Jon", "Jonathan", "Jonathon", "Jordan", "Jorge", "Jose", "Joseph", "Josh", "Joshua", "Juan", "Julian", "Julio", "Julius", "Justin", "Karl", "Keith", "Kelly", "Kelvin", "Ken", "Kenneth", "Kenny", "Kent", "Kerry", "Kevin", "Kim", "Kirk", "Kristopher", "Kurt", "Kyle", "Lamar", "Lance", "Larry", "Laurence", "Lawrence", "Lee", "Leland", "Leo", "Leon", "Leonard", "Leroy", "Leslie", "Lester", "Levi", "Lewis", "Lionel", "Lloyd", "Lonnie", "Loren", "Lorenzo", "Louis", "Lowell", "Lucas", "Luis", "Luke", "Luther", "Lyle", "Lynn", "Mack", "Malcolm", "Manuel", "Marc", "Marco", "Marcos", "Marcus", "Mario", "Marion", "Mark", "Marlon", "Marshall", "Martin", "Marty", "Marvin", "Mathew", "Matt", "Matthew", "Maurice", "Max", "Melvin", "Merle", "Michael", "Micheal", "Miguel", "Mike", "Milton", "Mitchell", "Morris", "Moses", "Myron", "Nathan", "Nathaniel", "Neal", "Neil", "Nelson", "Nicholas", "Nick", "Nicolas", "Noah", "Noel", "Norman", "Oliver", "Omar", "Orlando", "Orville", "Oscar", "Otis", "Owen", "Pablo", "Pat", "Patrick", "Paul", "Pedro", "Percy", "Perry", "Pete", "Peter", "Phil", "Philip", "Phillip", "Preston", "Rafael", "Ralph", "Ramiro", "Ramon", "Randal", "Randall", "Randolph", "Randy", "Raul", "Ray", "Raymond", "Reginald", "Rene", "Rex", "Ricardo", "Richard", "Rick", "Rickey", "Ricky", "Robert", "Roberto", "Robin", "Roderick", "Rodney", "Rodolfo", "Rogelio", "Roger", "Roland", "Rolando", "Roman", "Ron", "Ronald", "Ronnie", "Roosevelt", "Ross", "Roy", "Ruben", "Rudolph", "Rudy", "Rufus", "Russell", "Ryan", "Salvador", "Salvatore", "Sam", "Sammy", "Samuel", "Santiago", "Santos", "Saul", "Scott", "Sean", "Sergio", "Seth", "Shane", "Shannon", "Shaun", "Shawn", "Sheldon", "Sherman", "Sidney", "Simon", "Spencer", "Stanley", "Stephen", "Steve", "Steven", "Stewart", "Stuart", "Sylvester", "Taylor", "Ted", "Terence", "Terrance", "Terrell", "Terrence", "Terry", "Theodore", "Thomas", "Tim", "Timmy", "Timothy", "Toby", "Todd", "Tom", "Tomas", "Tommie", "Tommy", "Tony", "Tracy", "Travis", "Trevor", "Troy", "Tyler", "Tyrone", "Van", "Vernon", "Victor", "Vincent", "Virgil", "Wade", "Wallace", "Walter", "Warren", "Wayne", "Wendell", "Wesley", "Wilbert", "Wilbur", "Wilfred", "Willard", "William", "Willie", "Willis", "Wilson", "Winston", "Wm", "Woodrow", "Zachary"] }, MF = ["Agender", "Androgyne", "Androgynous", "Bigender", "Cis female", "Cis male", "Cis man", "Cis woman", "Cis", "Cisgender female", "Cisgender male", "Cisgender man", "Cisgender woman", "Cisgender", "Demi-boy", "Demi-girl", "Demi-man", "Demi-woman", "Demiflux", "Demigender", "F2M", "FTM", "Female to male trans man", "Female to male transgender man", "Female to male transsexual man", "Female to male", "Gender fluid", "Gender neutral", "Gender nonconforming", "Gender questioning", "Gender variant", "Genderflux", "Genderqueer", "Hermaphrodite", "Intersex man", "Intersex person", "Intersex woman", "Intersex", "M2F", "MTF", "Male to female trans woman", "Male to female transgender woman", "Male to female transsexual woman", "Male to female", "Man", "Multigender", "Neither", "Neutrois", "Non-binary", "Omnigender", "Other", "Pangender", "Polygender", "T* man", "T* woman", "Trans female", "Trans male", "Trans man", "Trans person", "Trans woman", "Trans", "Transsexual female", "Transsexual male", "Transsexual man", "Transsexual person", "Transsexual woman", "Transsexual", "Transgender female", "Transgender person", "Transmasculine", "Trigender", "Two* person", "Two-spirit person", "Two-spirit", "Woman", "Xenogender"], RF = ["Solutions", "Program", "Brand", "Security", "Research", "Marketing", "Directives", "Implementation", "Integration", "Functionality", "Response", "Paradigm", "Tactics", "Identity", "Markets", "Group", "Division", "Applications", "Optimization", "Operations", "Infrastructure", "Intranet", "Communications", "Web", "Branding", "Quality", "Assurance", "Mobility", "Accounts", "Data", "Creative", "Configuration", "Accountability", "Interactions", "Factors", "Usability", "Metrics"], IF = ["Lead", "Senior", "Direct", "Corporate", "Dynamic", "Future", "Product", "National", "Regional", "District", "Central", "Global", "Customer", "Investor", "International", "Legacy", "Forward", "Internal", "Human", "Chief", "Principal"], PF = ["{{person.jobDescriptor}} {{person.jobArea}} {{person.jobType}}"], LF = ["Supervisor", "Associate", "Executive", "Liaison", "Officer", "Manager", "Engineer", "Specialist", "Director", "Coordinator", "Administrator", "Architect", "Analyst", "Designer", "Planner", "Orchestrator", "Technician", "Developer", "Producer", "Consultant", "Assistant", "Facilitator", "Agent", "Representative", "Strategist"], _F = { generic: ["Abbott", "Abernathy", "Abshire", "Adams", "Altenwerth", "Anderson", "Ankunding", "Armstrong", "Auer", "Aufderhar", "Bahringer", "Bailey", "Balistreri", "Barrows", "Bartell", "Bartoletti", "Barton", "Bashirian", "Batz", "Bauch", "Baumbach", "Bayer", "Beahan", "Beatty", "Bechtelar", "Becker", "Bednar", "Beer", "Beier", "Berge", "Bergnaum", "Bergstrom", "Bernhard", "Bernier", "Bins", "Blanda", "Blick", "Block", "Bode", "Boehm", "Bogan", "Bogisich", "Borer", "Bosco", "Botsford", "Boyer", "Boyle", "Bradtke", "Brakus", "Braun", "Breitenberg", "Brekke", "Brown", "Bruen", "Buckridge", "Carroll", "Carter", "Cartwright", "Casper", "Cassin", "Champlin", "Christiansen", "Cole", "Collier", "Collins", "Conn", "Connelly", "Conroy", "Considine", "Corkery", "Cormier", "Corwin", "Cremin", "Crist", "Crona", "Cronin", "Crooks", "Cruickshank", "Cummerata", "Cummings", "D'Amore", "Dach", "Daniel", "Dare", "Daugherty", "Davis", "Deckow", "Denesik", "Dibbert", "Dickens", "Dicki", "Dickinson", "Dietrich", "Donnelly", "Dooley", "Douglas", "Doyle", "DuBuque", "Durgan", "Ebert", "Effertz", "Emard", "Emmerich", "Erdman", "Ernser", "Fadel", "Fahey", "Farrell", "Fay", "Feeney", "Feest", "Feil", "Ferry", "Fisher", "Flatley", "Frami", "Franecki", "Franey", "Friesen", "Fritsch", "Funk", "Gerhold", "Gerlach", "Gibson", "Gislason", "Gleason", "Gleichner", "Glover", "Goldner", "Goodwin", "Gorczany", "Gottlieb", "Goyette", "Grady", "Graham", "Grant", "Green", "Greenfelder", "Greenholt", "Grimes", "Gulgowski", "Gusikowski", "Gutkowski", "Gutmann", "Haag", "Hackett", "Hagenes", "Hahn", "Haley", "Halvorson", "Hamill", "Hammes", "Hand", "Hane", "Hansen", "Harber", "Harris", "Hartmann", "Harvey", "Hauck", "Hayes", "Heaney", "Heathcote", "Hegmann", "Heidenreich", "Heller", "Herman", "Hermann", "Hermiston", "Herzog", "Hessel", "Hettinger", "Hickle", "Hilll", "Hills", "Hilpert", "Hintz", "Hirthe", "Hodkiewicz", "Hoeger", "Homenick", "Hoppe", "Howe", "Howell", "Hudson", "Huel", "Huels", "Hyatt", "Jacobi", "Jacobs", "Jacobson", "Jakubowski", "Jaskolski", "Jast", "Jenkins", "Jerde", "Johns", "Johnson", "Johnston", "Jones", "Kassulke", "Kautzer", "Keebler", "Keeling", "Kemmer", "Kerluke", "Kertzmann", "Kessler", "Kiehn", "Kihn", "Kilback", "King", "Kirlin", "Klein", "Kling", "Klocko", "Koch", "Koelpin", "Koepp", "Kohler", "Konopelski", "Koss", "Kovacek", "Kozey", "Krajcik", "Kreiger", "Kris", "Kshlerin", "Kub", "Kuhic", "Kuhlman", "Kuhn", "Kulas", "Kunde", "Kunze", "Kuphal", "Kutch", "Kuvalis", "Labadie", "Lakin", "Lang", "Langosh", "Langworth", "Larkin", "Larson", "Leannon", "Lebsack", "Ledner", "Leffler", "Legros", "Lehner", "Lemke", "Lesch", "Leuschke", "Lind", "Lindgren", "Littel", "Little", "Lockman", "Lowe", "Lubowitz", "Lueilwitz", "Luettgen", "Lynch", "MacGyver", "Macejkovic", "Maggio", "Mann", "Mante", "Marks", "Marquardt", "Marvin", "Mayer", "Mayert", "McClure", "McCullough", "McDermott", "McGlynn", "McKenzie", "McLaughlin", "Medhurst", "Mertz", "Metz", "Miller", "Mills", "Mitchell", "Moen", "Mohr", "Monahan", "Moore", "Morar", "Morissette", "Mosciski", "Mraz", "Mueller", "Muller", "Murazik", "Murphy", "Murray", "Nader", "Nicolas", "Nienow", "Nikolaus", "Nitzsche", "Nolan", "O'Connell", "O'Conner", "O'Hara", "O'Keefe", "O'Kon", "O'Reilly", "Oberbrunner", "Okuneva", "Olson", "Ondricka", "Orn", "Ortiz", "Osinski", "Pacocha", "Padberg", "Pagac", "Parisian", "Parker", "Paucek", "Pfannerstill", "Pfeffer", "Pollich", "Pouros", "Powlowski", "Predovic", "Price", "Prohaska", "Prosacco", "Purdy", "Quigley", "Quitzon", "Rath", "Ratke", "Rau", "Raynor", "Reichel", "Reichert", "Reilly", "Reinger", "Rempel", "Renner", "Reynolds", "Rice", "Rippin", "Ritchie", "Robel", "Roberts", "Rodriguez", "Rogahn", "Rohan", "Rolfson", "Romaguera", "Roob", "Rosenbaum", "Rowe", "Ruecker", "Runolfsdottir", "Runolfsson", "Runte", "Russel", "Rutherford", "Ryan", "Sanford", "Satterfield", "Sauer", "Sawayn", "Schaden", "Schaefer", "Schamberger", "Schiller", "Schimmel", "Schinner", "Schmeler", "Schmidt", "Schmitt", "Schneider", "Schoen", "Schowalter", "Schroeder", "Schulist", "Schultz", "Schumm", "Schuppe", "Schuster", "Senger", "Shanahan", "Shields", "Simonis", "Sipes", "Skiles", "Smith", "Smitham", "Spencer", "Spinka", "Sporer", "Stamm", "Stanton", "Stark", "Stehr", "Steuber", "Stiedemann", "Stokes", "Stoltenberg", "Stracke", "Streich", "Stroman", "Strosin", "Swaniawski", "Swift", "Terry", "Thiel", "Thompson", "Tillman", "Torp", "Torphy", "Towne", "Toy", "Trantow", "Tremblay", "Treutel", "Tromp", "Turcotte", "Turner", "Ullrich", "Upton", "Vandervort", "Veum", "Volkman", "Von", "VonRueden", "Waelchi", "Walker", "Walsh", "Walter", "Ward", "Waters", "Watsica", "Weber", "Wehner", "Weimann", "Weissnat", "Welch", "West", "White", "Wiegand", "Wilderman", "Wilkinson", "Will", "Williamson", "Willms", "Windler", "Wintheiser", "Wisoky", "Wisozk", "Witting", "Wiza", "Wolf", "Wolff", "Wuckert", "Wunsch", "Wyman", "Yost", "Yundt", "Zboncak", "Zemlak", "Ziemann", "Zieme", "Zulauf"] }, NF = { generic: [{ value: "{{person.last_name.generic}}", weight: 95 }, { value: "{{person.last_name.generic}}-{{person.last_name.generic}}", weight: 5 }] }, xF = { generic: ["Addison", "Alex", "Anderson", "Angel", "Arden", "August", "Austin", "Avery", "Bailey", "Billie", "Blake", "Bowie", "Brooklyn", "Cameron", "Charlie", "Corey", "Dakota", "Drew", "Elliott", "Ellis", "Emerson", "Finley", "Gray", "Greer", "Harper", "Hayden", "Jaden", "James", "Jamie", "Jordan", "Jules", "Kai", "Kendall", "Kennedy", "Kyle", "Leslie", "Logan", "London", "Marlowe", "Micah", "Nico", "Noah", "North", "Parker", "Phoenix", "Quinn", "Reagan", "Reese", "Reign", "Riley", "River", "Robin", "Rory", "Rowan", "Ryan", "Sage", "Sasha", "Sawyer", "Shawn", "Shiloh", "Skyler", "Taylor"], female: ["Abigail", "Adele", "Alex", "Alice", "Alisha", "Amber", "Amelia", "Amora", "Anaïs", "Angelou", "Anika", "Anise", "Annabel", "Anne", "Aphrodite", "Aretha", "Arya", "Ashton", "Aster", "Audrey", "Avery", "Bailee", "Bay", "Belle", "Beth", "Billie", "Blair", "Blaise", "Blake", "Blanche", "Blue", "Bree", "Brielle", "Brienne", "Brooke", "Caleen", "Candice", "Caprice", "Carelyn", "Caylen", "Celine", "Cerise", "Cia", "Claire", "Claudia", "Clementine", "Coral", "Coraline", "Dahlia", "Dakota", "Dawn", "Della", "Demi", "Denise", "Denver", "Devine", "Devon", "Diana", "Dylan", "Ebony", "Eden", "Eleanor", "Elein", "Elizabeth", "Ellen", "Elodie", "Eloise", "Ember", "Emma", "Erin", "Eyre", "Faith", "Farrah", "Fawn", "Fayre", "Fern", "France", "Francis", "Frida", "Genisis", "Georgia", "Grace", "Gwen", "Harley", "Harper", "Hazel", "Helen", "Hippolyta", "Holly", "Hope", "Imani", "Iowa", "Ireland", "Irene", "Iris", "Isa", "Isla", "Ivy", "Jade", "Jane", "Jazz", "Jean", "Jess", "Jett", "Jo", "Joan", "Jolie", "Jordan", "Josie", "Journey", "Joy", "Jules", "Julien", "Juliet", "Juniper", "Justice", "Kali", "Karma", "Kat", "Kate", "Kennedy", "Keva", "Kylie", "Lake", "Lane", "Lark", "Layla", "Lee", "Leigh", "Leona", "Lexi", "London", "Lou", "Louise", "Love", "Luna", "Lux", "Lynn", "Lyric", "Maddie", "Mae", "Marie", "Matilda", "Maude", "Maybel", "Meadow", "Medusa", "Mercy", "Michelle", "Mirabel", "Monroe", "Morgan", "Nalia", "Naomi", "Nova", "Olive", "Paige", "Parker", "Pax", "Pearl", "Penelope", "Phoenix", "Quinn", "Rae", "Rain", "Raven", "Ray", "Raye", "Rebel", "Reese", "Reeve", "Regan", "Riley", "River", "Robin", "Rory", "Rose", "Royal", "Ruth", "Rylie", "Sage", "Sam", "Saturn", "Scout", "Serena", "Sky", "Skylar", "Sofia", "Sophia", "Storm", "Sue", "Suzanne", "Sydney", "Taylen", "Taylor", "Teagan", "Tempest", "Tenley", "Thea", "Trinity", "Valerie", "Venus", "Vera", "Violet", "Willow", "Winter", "Xena", "Zaylee", "Zion", "Zoe"], male: ["Ace", "Aiden", "Alexander", "Ander", "Anthony", "Asher", "August", "Aziel", "Bear", "Beckham", "Benjamin", "Buddy", "Calvin", "Carter", "Charles", "Christopher", "Clyde", "Cooper", "Daniel", "David", "Dior", "Dylan", "Elijah", "Ellis", "Emerson", "Ethan", "Ezra", "Fletcher", "Flynn", "Gabriel", "Grayson", "Gus", "Hank", "Harrison", "Hendrix", "Henry", "Houston", "Hudson", "Hugh", "Isaac", "Jack", "Jackson", "Jacob", "Jakobe", "James", "Jaxon", "Jaxtyn", "Jayden", "John", "Joseph", "Josiah", "Jude", "Julian", "Karsyn", "Kenji", "Kobe", "Kylo", "Lennon", "Leo", "Levi", "Liam", "Lincoln", "Logan", "Louis", "Lucas", "Lucky", "Luke", "Mason", "Mateo", "Matthew", "Maverick", "Michael", "Monroe", "Nixon", "Ocean", "Oliver", "Otis", "Otto", "Owen", "Ozzy", "Parker", "Rocky", "Samuel", "Sebastian", "Sonny", "Teddy", "Theo", "Theodore", "Thomas", "Truett", "Walter", "Warren", "Watson", "William", "Wison", "Wyatt", "Ziggy", "Zyair"] }, HF = [{ value: "{{person.firstName}} {{person.lastName}}", weight: 49 }, { value: "{{person.prefix}} {{person.firstName}} {{person.lastName}}", weight: 7 }, { value: "{{person.firstName}} {{person.lastName}} {{person.suffix}}", weight: 7 }, { value: "{{person.prefix}} {{person.firstName}} {{person.lastName}} {{person.suffix}}", weight: 1 }], WF = { generic: ["Dr.", "Miss", "Mr.", "Mrs.", "Ms."], female: ["Dr.", "Miss", "Mrs.", "Ms."], male: ["Dr.", "Mr."] }, OF = ["female", "male"], GF = ["Jr.", "Sr.", "I", "II", "III", "IV", "V", "MD", "DDS", "PhD", "DVM"], KF = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"], JF = { bio_part: EF, bio_pattern: DF, bio_supporter: BF, first_name: TF, gender: MF, job_area: RF, job_descriptor: IF, job_title_pattern: PF, job_type: LF, last_name: _F, last_name_pattern: NF, middle_name: xF, name: HF, prefix: WF, sex: OF, suffix: GF, western_zodiac_sign: KF }, zF = JF, VF = ["!##-!##-####", "(!##) !##-####", "1-!##-!##-####", "!##.!##.####", "!##-!##-#### x###", "(!##) !##-#### x###", "1-!##-!##-#### x###", "!##.!##.#### x###", "!##-!##-#### x####", "(!##) !##-#### x####", "1-!##-!##-#### x####", "!##.!##.#### x####", "!##-!##-#### x#####", "(!##) !##-#### x#####", "1-!##-!##-#### x#####", "!##.!##.#### x#####"], $F = ["+1!##!######"], qF = ["(!##) !##-####"], UF = { human: VF, international: $F, national: qF }, jF = UF, YF = { format: jF }, ZF = YF, QF = [{ symbol: "H", name: "Hydrogen", atomicNumber: 1 }, { symbol: "He", name: "Helium", atomicNumber: 2 }, { symbol: "Li", name: "Lithium", atomicNumber: 3 }, { symbol: "Be", name: "Beryllium", atomicNumber: 4 }, { symbol: "B", name: "Boron", atomicNumber: 5 }, { symbol: "C", name: "Carbon", atomicNumber: 6 }, { symbol: "N", name: "Nitrogen", atomicNumber: 7 }, { symbol: "O", name: "Oxygen", atomicNumber: 8 }, { symbol: "F", name: "Fluorine", atomicNumber: 9 }, { symbol: "Ne", name: "Neon", atomicNumber: 10 }, { symbol: "Na", name: "Sodium", atomicNumber: 11 }, { symbol: "Mg", name: "Magnesium", atomicNumber: 12 }, { symbol: "Al", name: "Aluminium", atomicNumber: 13 }, { symbol: "Si", name: "Silicon", atomicNumber: 14 }, { symbol: "P", name: "Phosphorus", atomicNumber: 15 }, { symbol: "S", name: "Sulfur", atomicNumber: 16 }, { symbol: "Cl", name: "Chlorine", atomicNumber: 17 }, { symbol: "Ar", name: "Argon", atomicNumber: 18 }, { symbol: "K", name: "Potassium", atomicNumber: 19 }, { symbol: "Ca", name: "Calcium", atomicNumber: 20 }, { symbol: "Sc", name: "Scandium", atomicNumber: 21 }, { symbol: "Ti", name: "Titanium", atomicNumber: 22 }, { symbol: "V", name: "Vanadium", atomicNumber: 23 }, { symbol: "Cr", name: "Chromium", atomicNumber: 24 }, { symbol: "Mn", name: "Manganese", atomicNumber: 25 }, { symbol: "Fe", name: "Iron", atomicNumber: 26 }, { symbol: "Co", name: "Cobalt", atomicNumber: 27 }, { symbol: "Ni", name: "Nickel", atomicNumber: 28 }, { symbol: "Cu", name: "Copper", atomicNumber: 29 }, { symbol: "Zn", name: "Zinc", atomicNumber: 30 }, { symbol: "Ga", name: "Gallium", atomicNumber: 31 }, { symbol: "Ge", name: "Germanium", atomicNumber: 32 }, { symbol: "As", name: "Arsenic", atomicNumber: 33 }, { symbol: "Se", name: "Selenium", atomicNumber: 34 }, { symbol: "Br", name: "Bromine", atomicNumber: 35 }, { symbol: "Kr", name: "Krypton", atomicNumber: 36 }, { symbol: "Rb", name: "Rubidium", atomicNumber: 37 }, { symbol: "Sr", name: "Strontium", atomicNumber: 38 }, { symbol: "Y", name: "Yttrium", atomicNumber: 39 }, { symbol: "Zr", name: "Zirconium", atomicNumber: 40 }, { symbol: "Nb", name: "Niobium", atomicNumber: 41 }, { symbol: "Mo", name: "Molybdenum", atomicNumber: 42 }, { symbol: "Tc", name: "Technetium", atomicNumber: 43 }, { symbol: "Ru", name: "Ruthenium", atomicNumber: 44 }, { symbol: "Rh", name: "Rhodium", atomicNumber: 45 }, { symbol: "Pd", name: "Palladium", atomicNumber: 46 }, { symbol: "Ag", name: "Silver", atomicNumber: 47 }, { symbol: "Cd", name: "Cadmium", atomicNumber: 48 }, { symbol: "In", name: "Indium", atomicNumber: 49 }, { symbol: "Sn", name: "Tin", atomicNumber: 50 }, { symbol: "Sb", name: "Antimony", atomicNumber: 51 }, { symbol: "Te", name: "Tellurium", atomicNumber: 52 }, { symbol: "I", name: "Iodine", atomicNumber: 53 }, { symbol: "Xe", name: "Xenon", atomicNumber: 54 }, { symbol: "Cs", name: "Caesium", atomicNumber: 55 }, { symbol: "Ba", name: "Barium", atomicNumber: 56 }, { symbol: "La", name: "Lanthanum", atomicNumber: 57 }, { symbol: "Ce", name: "Cerium", atomicNumber: 58 }, { symbol: "Pr", name: "Praseodymium", atomicNumber: 59 }, { symbol: "Nd", name: "Neodymium", atomicNumber: 60 }, { symbol: "Pm", name: "Promethium", atomicNumber: 61 }, { symbol: "Sm", name: "Samarium", atomicNumber: 62 }, { symbol: "Eu", name: "Europium", atomicNumber: 63 }, { symbol: "Gd", name: "Gadolinium", atomicNumber: 64 }, { symbol: "Tb", name: "Terbium", atomicNumber: 65 }, { symbol: "Dy", name: "Dysprosium", atomicNumber: 66 }, { symbol: "Ho", name: "Holmium", atomicNumber: 67 }, { symbol: "Er", name: "Erbium", atomicNumber: 68 }, { symbol: "Tm", name: "Thulium", atomicNumber: 69 }, { symbol: "Yb", name: "Ytterbium", atomicNumber: 70 }, { symbol: "Lu", name: "Lutetium", atomicNumber: 71 }, { symbol: "Hf", name: "Hafnium", atomicNumber: 72 }, { symbol: "Ta", name: "Tantalum", atomicNumber: 73 }, { symbol: "W", name: "Tungsten", atomicNumber: 74 }, { symbol: "Re", name: "Rhenium", atomicNumber: 75 }, { symbol: "Os", name: "Osmium", atomicNumber: 76 }, { symbol: "Ir", name: "Iridium", atomicNumber: 77 }, { symbol: "Pt", name: "Platinum", atomicNumber: 78 }, { symbol: "Au", name: "Gold", atomicNumber: 79 }, { symbol: "Hg", name: "Mercury", atomicNumber: 80 }, { symbol: "Tl", name: "Thallium", atomicNumber: 81 }, { symbol: "Pb", name: "Lead", atomicNumber: 82 }, { symbol: "Bi", name: "Bismuth", atomicNumber: 83 }, { symbol: "Po", name: "Polonium", atomicNumber: 84 }, { symbol: "At", name: "Astatine", atomicNumber: 85 }, { symbol: "Rn", name: "Radon", atomicNumber: 86 }, { symbol: "Fr", name: "Francium", atomicNumber: 87 }, { symbol: "Ra", name: "Radium", atomicNumber: 88 }, { symbol: "Ac", name: "Actinium", atomicNumber: 89 }, { symbol: "Th", name: "Thorium", atomicNumber: 90 }, { symbol: "Pa", name: "Protactinium", atomicNumber: 91 }, { symbol: "U", name: "Uranium", atomicNumber: 92 }, { symbol: "Np", name: "Neptunium", atomicNumber: 93 }, { symbol: "Pu", name: "Plutonium", atomicNumber: 94 }, { symbol: "Am", name: "Americium", atomicNumber: 95 }, { symbol: "Cm", name: "Curium", atomicNumber: 96 }, { symbol: "Bk", name: "Berkelium", atomicNumber: 97 }, { symbol: "Cf", name: "Californium", atomicNumber: 98 }, { symbol: "Es", name: "Einsteinium", atomicNumber: 99 }, { symbol: "Fm", name: "Fermium", atomicNumber: 100 }, { symbol: "Md", name: "Mendelevium", atomicNumber: 101 }, { symbol: "No", name: "Nobelium", atomicNumber: 102 }, { symbol: "Lr", name: "Lawrencium", atomicNumber: 103 }, { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104 }, { symbol: "Db", name: "Dubnium", atomicNumber: 105 }, { symbol: "Sg", name: "Seaborgium", atomicNumber: 106 }, { symbol: "Bh", name: "Bohrium", atomicNumber: 107 }, { symbol: "Hs", name: "Hassium", atomicNumber: 108 }, { symbol: "Mt", name: "Meitnerium", atomicNumber: 109 }, { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110 }, { symbol: "Rg", name: "Roentgenium", atomicNumber: 111 }, { symbol: "Cn", name: "Copernicium", atomicNumber: 112 }, { symbol: "Nh", name: "Nihonium", atomicNumber: 113 }, { symbol: "Fl", name: "Flerovium", atomicNumber: 114 }, { symbol: "Mc", name: "Moscovium", atomicNumber: 115 }, { symbol: "Lv", name: "Livermorium", atomicNumber: 116 }, { symbol: "Ts", name: "Tennessine", atomicNumber: 117 }, { symbol: "Og", name: "Oganesson", atomicNumber: 118 }], XF = [{ name: "meter", symbol: "m" }, { name: "second", symbol: "s" }, { name: "mole", symbol: "mol" }, { name: "ampere", symbol: "A" }, { name: "kelvin", symbol: "K" }, { name: "candela", symbol: "cd" }, { name: "kilogram", symbol: "kg" }, { name: "radian", symbol: "rad" }, { name: "hertz", symbol: "Hz" }, { name: "newton", symbol: "N" }, { name: "pascal", symbol: "Pa" }, { name: "joule", symbol: "J" }, { name: "watt", symbol: "W" }, { name: "coulomb", symbol: "C" }, { name: "volt", symbol: "V" }, { name: "ohm", symbol: "Ω" }, { name: "tesla", symbol: "T" }, { name: "degree Celsius", symbol: "°C" }, { name: "lumen", symbol: "lm" }, { name: "becquerel", symbol: "Bq" }, { name: "gray", symbol: "Gy" }, { name: "sievert", symbol: "Sv" }, { name: "steradian", symbol: "sr" }, { name: "farad", symbol: "F" }, { name: "siemens", symbol: "S" }, { name: "weber", symbol: "Wb" }, { name: "henry", symbol: "H" }, { name: "lux", symbol: "lx" }, { name: "katal", symbol: "kat" }], e1 = { chemical_element: QF, unit: XF }, a1 = e1, t1 = ["ants", "bats", "bears", "bees", "birds", "buffalo", "cats", "chickens", "cattle", "dogs", "dolphins", "ducks", "elephants", "fishes", "foxes", "frogs", "geese", "goats", "horses", "kangaroos", "lions", "monkeys", "owls", "oxen", "penguins", "people", "pigs", "rabbits", "sheep", "tigers", "whales", "wolves", "zebras", "banshees", "crows", "black cats", "chimeras", "ghosts", "conspirators", "dragons", "dwarves", "elves", "enchanters", "exorcists", "sons", "foes", "giants", "gnomes", "goblins", "gooses", "griffins", "lycanthropes", "nemesis", "ogres", "oracles", "prophets", "sorcerors", "spiders", "spirits", "vampires", "warlocks", "vixens", "werewolves", "witches", "worshipers", "zombies", "druids"], n1 = ["{{location.state}} {{team.creature}}"], r1 = { creature: t1, name: n1 }, i1 = r1, o1 = ["Adventure Road Bicycle", "BMX Bicycle", "City Bicycle", "Cruiser Bicycle", "Cyclocross Bicycle", "Dual-Sport Bicycle", "Fitness Bicycle", "Flat-Foot Comfort Bicycle", "Folding Bicycle", "Hybrid Bicycle", "Mountain Bicycle", "Recumbent Bicycle", "Road Bicycle", "Tandem Bicycle", "Touring Bicycle", "Track/Fixed-Gear Bicycle", "Triathlon/Time Trial Bicycle", "Tricycle"], s1 = ["Diesel", "Electric", "Gasoline", "Hybrid"], l1 = ["Aston Martin", "Audi", "BMW", "BYD", "Bentley", "Bugatti", "Cadillac", "Chevrolet", "Chrysler", "Citroën", "Dodge", "Ferrari", "Fiat", "Ford", "Honda", "Hyundai", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "MG", "Mahindra & Mahindra", "Maruti", "Maserati", "Mazda", "Mercedes Benz", "Mini", "Mitsubishi", "NIO", "Nissan", "Peugeot", "Polestar", "Porsche", "Renault", "Rivian", "Rolls Royce", "Skoda", "Smart", "Subaru", "Suzuki", "Tata", "Tesla", "Toyota", "Vauxhall", "Volkswagen", "Volvo"], u1 = ["1", "2", "911", "A4", "A8", "ATS", "Accord", "Alpine", "Altima", "Aventador", "Beetle", "CTS", "CX-9", "Camaro", "Camry", "Challenger", "Charger", "Civic", "Colorado", "Corvette", "Countach", "Cruze", "Durango", "El Camino", "Element", "Escalade", "Expedition", "Explorer", "F-150", "Fiesta", "Focus", "Fortwo", "Golf", "Grand Caravan", "Grand Cherokee", "Impala", "Jetta", "Land Cruiser", "LeBaron", "Malibu", "Mercielago", "Model 3", "Model S", "Model T", "Model X", "Model Y", "Mustang", "PT Cruiser", "Prius", "Ranchero", "Roadster", "Sentra", "Silverado", "Spyder", "Taurus", "V90", "Volt", "Wrangler", "XC90", "XTS"], c1 = ["Cargo Van", "Convertible", "Coupe", "Crew Cab Pickup", "Extended Cab Pickup", "Hatchback", "Minivan", "Passenger Van", "SUV", "Sedan", "Wagon"], d1 = { bicycle_type: o1, fuel: s1, manufacturer: l1, model: u1, type: c1 }, h1 = d1, m1 = ["abandoned", "able", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "actual", "admired", "adolescent", "advanced", "affectionate", "afraid", "aged", "aggravating", "aggressive", "agile", "agitated", "agreeable", "ajar", "alarmed", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "angelic", "anguished", "animated", "annual", "another", "antique", "any", "apprehensive", "appropriate", "apt", "arid", "artistic", "ashamed", "assured", "astonishing", "athletic", "austere", "authentic", "authorized", "avaricious", "average", "aware", "awesome", "awful", "babyish", "back", "bad", "baggy", "bare", "basic", "beloved", "beneficial", "best", "better", "big", "biodegradable", "bitter", "black", "black-and-white", "blank", "blaring", "bleak", "blind", "blond", "blue", "blushing", "bogus", "boiling", "bony", "boring", "bossy", "both", "bouncy", "bowed", "brave", "breakable", "bright", "brilliant", "brisk", "broken", "brown", "bruised", "bulky", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "candid", "carefree", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complicated", "concerned", "concrete", "confused", "considerate", "content", "cool", "cooperative", "coordinated", "corny", "corrupt", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "criminal", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cumbersome", "curly", "cute", "damaged", "damp", "dapper", "dark", "darling", "dazzling", "dead", "deadly", "deafening", "dearest", "decent", "decisive", "deep", "defenseless", "defensive", "deficient", "definite", "definitive", "delectable", "delicious", "delirious", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "direct", "dirty", "discrete", "disloyal", "dismal", "distant", "distinct", "distorted", "doting", "downright", "drab", "dramatic", "dreary", "dual", "dull", "dutiful", "each", "early", "earnest", "easy", "ecstatic", "edible", "educated", "elastic", "elderly", "electric", "elegant", "elementary", "elliptical", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enraged", "entire", "equatorial", "essential", "esteemed", "ethical", "everlasting", "every", "evil", "exalted", "excellent", "excitable", "excited", "exhausted", "exotic", "expensive", "experienced", "expert", "extra-large", "extroverted", "failing", "faint", "fair", "fake", "familiar", "fantastic", "far", "far-flung", "far-off", "faraway", "fat", "fatal", "fatherly", "favorable", "favorite", "fearless", "feline", "filthy", "fine", "finished", "firm", "first", "firsthand", "fixed", "flashy", "flawed", "flawless", "flickering", "flimsy", "flowery", "fluffy", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "formal", "forsaken", "fortunate", "fragrant", "frail", "frank", "free", "french", "frequent", "friendly", "frightened", "frilly", "frivolous", "frizzy", "front", "frozen", "frugal", "fruitful", "functional", "funny", "fussy", "fuzzy", "gaseous", "general", "gentle", "genuine", "gifted", "gigantic", "giving", "glaring", "glass", "gleaming", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good-natured", "gorgeous", "graceful", "gracious", "grandiose", "granular", "grave", "gray", "great", "greedy", "grim", "grimy", "gripping", "grizzled", "grouchy", "grounded", "growing", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "handsome", "handy", "happy", "happy-go-lucky", "hard-to-find", "harmful", "hasty", "hateful", "haunting", "heartfelt", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hoarse", "hollow", "homely", "honorable", "honored", "hopeful", "hospitable", "hot", "huge", "humble", "humiliating", "hungry", "hurtful", "husky", "icy", "ideal", "idealistic", "idolized", "ignorant", "ill", "ill-fated", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immediate", "immense", "impartial", "impassioned", "impeccable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incomplete", "inconsequential", "indelible", "indolent", "inexperienced", "infamous", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "intelligent", "intent", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "jagged", "jam-packed", "jaunty", "jealous", "jittery", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "junior", "juvenile", "kaleidoscopic", "key", "knotty", "knowledgeable", "known", "kooky", "kosher", "lanky", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "lean", "left", "legal", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "lone", "lonely", "long", "long-term", "lost", "lovable", "lovely", "low", "lucky", "lumbering", "lumpy", "lustrous", "mad", "made-up", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "mediocre", "medium", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "minor", "minty", "miserable", "miserly", "misguided", "mixed", "moist", "monstrous", "monthly", "monumental", "moral", "motionless", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "narrow", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "normal", "noted", "noteworthy", "noxious", "numb", "nutritious", "obedient", "oblong", "obvious", "odd", "oddball", "official", "oily", "old", "old-fashioned", "only", "optimal", "optimistic", "orange", "orderly", "ordinary", "ornate", "ornery", "other", "our", "outgoing", "outlandish", "outlying", "outrageous", "outstanding", "oval", "overcooked", "overdue", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "pastel", "peaceful", "peppery", "perfumed", "perky", "personal", "pertinent", "pessimistic", "petty", "phony", "physical", "pink", "pitiful", "plain", "pleasant", "pleased", "pleasing", "plump", "pointed", "pointless", "polished", "polite", "political", "poor", "portly", "posh", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "pricey", "prickly", "primary", "prime", "private", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quixotic", "radiant", "ragged", "rapid", "rare", "raw", "realistic", "reasonable", "recent", "reckless", "rectangular", "red", "reflecting", "regal", "regular", "remarkable", "remorseful", "repentant", "respectful", "responsible", "rewarding", "rich", "right", "rigid", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "ruddy", "rundown", "runny", "rural", "rusty", "sad", "salty", "same", "sandy", "sarcastic", "sardonic", "scaly", "scared", "scary", "scented", "scientific", "scornful", "scratchy", "second", "second-hand", "secondary", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serpentine", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "shimmering", "shiny", "shocked", "shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent", "silky", "silver", "similar", "simple", "simplistic", "sinful", "sizzling", "skeletal", "sleepy", "slight", "slimy", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "somber", "some", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "spanish", "sparkling", "sparse", "specific", "speedy", "spherical", "spiffy", "spirited", "spiteful", "splendid", "spotless", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "stark", "steel", "steep", "sticky", "stiff", "stingy", "stormy", "straight", "strange", "strict", "strident", "striking", "strong", "stunning", "stupendous", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "svelte", "sweet", "swift", "talkative", "tall", "tame", "tangible", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "that", "these", "thick", "thin", "thorny", "thorough", "those", "thrifty", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "tragic", "trained", "triangular", "tricky", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "turbulent", "twin", "ugly", "ultimate", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "uneven", "unfinished", "unfit", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "useless", "utilized", "utter", "vague", "vain", "valuable", "variable", "vast", "velvety", "vengeful", "vibrant", "victorious", "violent", "vivacious", "vivid", "voluminous", "warlike", "warm", "warmhearted", "warped", "wasteful", "waterlogged", "watery", "wavy", "wealthy", "weary", "webbed", "wee", "weekly", "weighty", "weird", "well-documented", "well-groomed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "willing", "wilted", "winding", "windy", "winged", "wise", "witty", "wobbly", "woeful", "wonderful", "wordy", "worldly", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty"], p1 = ["abnormally", "absentmindedly", "accidentally", "acidly", "actually", "adventurously", "afterwards", "almost", "always", "angrily", "annually", "anxiously", "arrogantly", "awkwardly", "badly", "bashfully", "beautifully", "bitterly", "bleakly", "blindly", "blissfully", "boastfully", "boldly", "bravely", "briefly", "brightly", "briskly", "broadly", "busily", "calmly", "carefully", "carelessly", "cautiously", "certainly", "cheerfully", "clearly", "cleverly", "closely", "coaxingly", "colorfully", "commonly", "continually", "coolly", "correctly", "courageously", "crossly", "cruelly", "curiously", "daily", "daintily", "dearly", "deceivingly", "deeply", "defiantly", "deliberately", "delightfully", "diligently", "dimly", "doubtfully", "dreamily", "easily", "elegantly", "energetically", "enormously", "enthusiastically", "equally", "especially", "even", "evenly", "eventually", "exactly", "excitedly", "extremely", "fairly", "faithfully", "famously", "far", "fast", "fatally", "ferociously", "fervently", "fiercely", "fondly", "foolishly", "fortunately", "frankly", "frantically", "freely", "frenetically", "frightfully", "fully", "furiously", "generally", "generously", "gently", "gladly", "gleefully", "gracefully", "gratefully", "greatly", "greedily", "happily", "hastily", "healthily", "heavily", "helpfully", "helplessly", "highly", "honestly", "hopelessly", "hourly", "hungrily", "immediately", "innocently", "inquisitively", "instantly", "intensely", "intently", "interestingly", "inwardly", "irritably", "jaggedly", "jealously", "joshingly", "jovially", "joyfully", "joyously", "jubilantly", "judgementally", "justly", "keenly", "kiddingly", "kindheartedly", "kindly", "kissingly", "knavishly", "knottily", "knowingly", "knowledgeably", "kookily", "lazily", "less", "lightly", "likely", "limply", "lively", "loftily", "longingly", "loosely", "loudly", "lovingly", "loyally", "madly", "majestically", "meaningfully", "mechanically", "merrily", "miserably", "mockingly", "monthly", "more", "mortally", "mostly", "mysteriously", "naturally", "nearly", "neatly", "needily", "nervously", "never", "nicely", "noisily", "not", "obediently", "obnoxiously", "oddly", "offensively", "officially", "often", "only", "openly", "optimistically", "overconfidently", "owlishly", "painfully", "partially", "patiently", "perfectly", "physically", "playfully", "politely", "poorly", "positively", "potentially", "powerfully", "promptly", "properly", "punctually", "quaintly", "quarrelsomely", "queasily", "questionably", "questioningly", "quicker", "quickly", "quietly", "quirkily", "quizzically", "rapidly", "rarely", "readily", "really", "reassuringly", "recklessly", "regularly", "reluctantly", "repeatedly", "reproachfully", "restfully", "righteously", "rightfully", "rigidly", "roughly", "rudely", "sadly", "safely", "scarcely", "scarily", "searchingly", "sedately", "seemingly", "seldom", "selfishly", "separately", "seriously", "shakily", "sharply", "sheepishly", "shrilly", "shyly", "silently", "sleepily", "slowly", "smoothly", "softly", "solemnly", "solidly", "sometimes", "soon", "speedily", "stealthily", "sternly", "strictly", "successfully", "suddenly", "surprisingly", "suspiciously", "sweetly", "swiftly", "sympathetically", "tenderly", "tensely", "terribly", "thankfully", "thoroughly", "thoughtfully", "tightly", "tomorrow", "too", "tremendously", "triumphantly", "truly", "truthfully", "ultimately", "unabashedly", "unaccountably", "unbearably", "unethically", "unexpectedly", "unfortunately", "unimpressively", "unnaturally", "unnecessarily", "upbeat", "upliftingly", "upright", "upside-down", "upward", "upwardly", "urgently", "usefully", "uselessly", "usually", "utterly", "vacantly", "vaguely", "vainly", "valiantly", "vastly", "verbally", "very", "viciously", "victoriously", "violently", "vivaciously", "voluntarily", "warmly", "weakly", "wearily", "well", "wetly", "wholly", "wildly", "willfully", "wisely", "woefully", "wonderfully", "worriedly", "wrongly", "yawningly", "yearly", "yearningly", "yesterday", "yieldingly", "youthfully"], F1 = ["after", "although", "and", "as", "because", "before", "but", "consequently", "even", "finally", "for", "furthermore", "hence", "how", "however", "if", "inasmuch", "incidentally", "indeed", "instead", "lest", "likewise", "meanwhile", "nor", "now", "once", "or", "provided", "since", "so", "supposing", "than", "that", "though", "till", "unless", "until", "what", "when", "whenever", "where", "whereas", "wherever", "whether", "which", "while", "who", "whoever", "whose", "why", "yet"], g1 = ["yuck", "oh", "phooey", "blah", "boo", "whoa", "yowza", "huzzah", "boohoo", "fooey", "geez", "pfft", "ew", "ah", "yum", "brr", "hm", "yahoo", "aha", "woot", "drat", "gah", "meh", "psst", "aw", "ugh", "yippee", "eek", "gee", "bah", "gadzooks", "duh", "ha", "mmm", "ouch", "phew", "ack", "uh-huh", "gosh", "hmph", "pish", "zowie", "er", "ick", "oof", "um"], y1 = ["CD", "SUV", "abacus", "academics", "accelerator", "accompanist", "account", "accountability", "acquaintance", "ad", "adaptation", "address", "adrenalin", "adult", "advancement", "advertisement", "adviser", "affect", "affiliate", "aftermath", "agreement", "airbus", "aircraft", "airline", "airmail", "airman", "airport", "alb", "alert", "allegation", "alliance", "alligator", "allocation", "almighty", "amendment", "amnesty", "analogy", "angle", "annual", "antelope", "anticodon", "apparatus", "appliance", "approach", "apricot", "arcade", "archaeology", "armchair", "armoire", "asset", "assist", "atrium", "attraction", "availability", "avalanche", "awareness", "babushka", "backbone", "backburn", "bakeware", "bandwidth", "bar", "barge", "baritone", "barracks", "baseboard", "basket", "bathhouse", "bathrobe", "battle", "begonia", "behest", "bell", "bench", "bend", "beret", "best-seller", "bid", "bidet", "bin", "birdbath", "birdcage", "birth", "blight", "blossom", "blowgun", "bob", "bog", "bonfire", "bonnet", "bookcase", "bookend", "boulevard", "bourgeoisie", "bowler", "bowling", "boyfriend", "brace", "bracelet", "bran", "breastplate", "brief", "brochure", "brook", "brush", "bug", "bump", "bungalow", "cafe", "cake", "calculus", "cannon", "cantaloupe", "cap", "cappelletti", "captain", "caption", "carboxyl", "cardboard", "carnival", "case", "casement", "cash", "casket", "cassava", "castanet", "catalyst", "cauliflower", "cellar", "celsius", "cemetery", "ceramic", "ceramics", "certification", "chainstay", "chairperson", "challenge", "championship", "chap", "chapel", "character", "characterization", "charlatan", "charm", "chasuble", "cheese", "cheetah", "chiffonier", "chops", "chow", "cinder", "cinema", "circumference", "citizen", "clamp", "clavicle", "cleaner", "climb", "co-producer", "coal", "coast", "cod", "coil", "coin", "coliseum", "collaboration", "collectivization", "colon", "colonialism", "comestible", "commercial", "commodity", "community", "comparison", "completion", "complication", "compromise", "concentration", "configuration", "confusion", "conservation", "conservative", "consistency", "contractor", "contrail", "convection", "conversation", "cook", "coordination", "cop-out", "cope", "cork", "cornet", "corporation", "corral", "cosset", "costume", "couch", "council", "councilman", "countess", "courtroom", "cow", "creator", "creature", "crest", "cricket", "crocodile", "cross-contamination", "cruelty", "cuckoo", "curl", "custody", "custom", "cutlet", "cutover", "cycle", "daddy", "dandelion", "dash", "daughter", "dead", "decision", "deck", "declaration", "decongestant", "decryption", "deduction", "deed", "deer", "defendant", "density", "department", "dependency", "deployment", "depot", "derby", "descendant", "descent", "design", "designation", "desk", "detective", "devastation", "developing", "developmental", "devil", "diagram", "digestive", "digit", "dime", "director", "disadvantage", "disappointment", "disclosure", "disconnection", "discourse", "dish", "disk", "disposer", "distinction", "diver", "diversity", "dividend", "divine", "doing", "doorpost", "doubter", "draft", "draw", "dream", "dredger", "dress", "drive", "drug", "duffel", "dulcimer", "dusk", "duster", "dwell", "e-mail", "earth", "ecliptic", "ectoderm", "edge", "editor", "effector", "eggplant", "electronics", "elevation", "elevator", "elver", "embarrassment", "embossing", "emergent", "encouragement", "entry", "epic", "equal", "essence", "eternity", "ethyl", "euphonium", "event", "exasperation", "excess", "executor", "exhaust", "expansion", "expense", "experience", "exploration", "extension", "extent", "exterior", "eyebrow", "eyeliner", "farm", "farmer", "fat", "fax", "feather", "fedora", "fellow", "fen", "fencing", "ferret", "festival", "fibre", "filter", "final", "finding", "finer", "finger", "fireplace", "fisherman", "fishery", "fit", "flame", "flat", "fledgling", "flight", "flint", "flood", "flu", "fog", "fold", "folklore", "follower", "following", "foodstuffs", "footrest", "forage", "forager", "forgery", "fork", "formamide", "formation", "formula", "fort", "fowl", "fraudster", "freckle", "freezing", "freight", "fuel", "fun", "fund", "fundraising", "futon", "gallery", "galoshes", "gastropod", "gazebo", "gerbil", "ghost", "giant", "gift", "giggle", "glider", "gloom", "goat", "godfather", "godparent", "going", "goodwill", "governance", "government", "gown", "gradient", "graffiti", "grandpa", "grandson", "granny", "grass", "gray", "gripper", "grouper", "guacamole", "guard", "guidance", "guide", "gym", "gymnast", "habit", "haircut", "halt", "hamburger", "hammock", "handful", "handle", "handover", "harp", "haversack", "hawk", "heartache", "heartbeat", "heating", "hello", "help", "hepatitis", "heroine", "hexagon", "hierarchy", "hippodrome", "honesty", "hoof", "hope", "horde", "hornet", "horst", "hose", "hospitalization", "hovel", "hovercraft", "hubris", "humidity", "humor", "hundred", "hunger", "hunt", "husband", "hutch", "hydrant", "hydrocarbon", "hydrolyse", "hydrolyze", "hyena", "hygienic", "hyphenation", "ice-cream", "icebreaker", "igloo", "ignorance", "illusion", "impact", "import", "importance", "impostor", "in-joke", "incandescence", "independence", "individual", "information", "injunction", "innovation", "insolence", "inspection", "instance", "institute", "instruction", "instructor", "integer", "intellect", "intent", "interchange", "interior", "intervention", "interviewer", "invite", "iridescence", "issue", "jacket", "jazz", "jellyfish", "jet", "jogging", "joy", "juggernaut", "jump", "jungle", "junior", "jury", "kettledrum", "kick", "kielbasa", "kinase", "king", "kiss", "kit", "knickers", "knight", "knitting", "knuckle", "label", "labourer", "lace", "lady", "lamp", "language", "larva", "lashes", "laughter", "lava", "lawmaker", "lay", "leading", "league", "legend", "legging", "legislature", "lender", "license", "lid", "lieu", "lifestyle", "lift", "linseed", "litter", "loaf", "lobster", "longboat", "lotion", "lounge", "louse", "lox", "loyalty", "luck", "lyre", "maestro", "mainstream", "maintainer", "majority", "makeover", "making", "mallard", "management", "manner", "mantua", "marathon", "march", "marimba", "marketplace", "marksman", "markup", "marten", "massage", "masterpiece", "mathematics", "meadow", "meal", "meander", "meatloaf", "mechanic", "median", "membership", "mentor", "merit", "metabolite", "metal", "middle", "midwife", "milestone", "millet", "minion", "minister", "minor", "minority", "mixture", "mobility", "molasses", "mom", "moment", "monasticism", "monocle", "monster", "morbidity", "morning", "mortise", "mountain", "mouser", "mousse", "mozzarella", "muscat", "mythology", "napkin", "necklace", "nectarine", "negotiation", "nephew", "nerve", "netsuke", "newsletter", "newsprint", "newsstand", "nightlife", "noon", "nougat", "nucleotidase", "nudge", "numeracy", "numeric", "nun", "obedience", "obesity", "object", "obligation", "ocelot", "octave", "offset", "oil", "omelet", "onset", "opera", "operating", "optimal", "orchid", "order", "ostrich", "other", "outlaw", "outrun", "outset", "overcoat", "overheard", "overload", "ownership", "pacemaker", "packaging", "paintwork", "palate", "pants", "pantyhose", "papa", "parade", "parsnip", "partridge", "passport", "pasta", "patroller", "pear", "pearl", "pecan", "pendant", "peninsula", "pension", "peony", "pepper", "perfection", "permafrost", "perp", "petal", "petticoat", "pharmacopoeia", "phrase", "pick", "piglet", "pigpen", "pigsty", "pile", "pillbox", "pillow", "pilot", "pine", "pinstripe", "place", "plain", "planula", "plastic", "platter", "platypus", "pleasure", "pliers", "plugin", "plumber", "pneumonia", "pocket-watch", "poetry", "polarisation", "polyester", "pomelo", "pop", "poppy", "popularity", "populist", "porter", "possession", "postbox", "precedent", "premeditation", "premier", "premise", "premium", "pressure", "presume", "priesthood", "printer", "privilege", "procurement", "produce", "programme", "prohibition", "promise", "pronoun", "providence", "provider", "provision", "publication", "publicity", "pulse", "punctuation", "pupil", "puppet", "puritan", "quart", "quinoa", "quit", "railway", "range", "rationale", "ravioli", "rawhide", "reach", "reasoning", "reboot", "receptor", "recommendation", "reconsideration", "recovery", "redesign", "relative", "release", "remark", "reorganisation", "repeat", "replacement", "reporter", "representation", "republican", "request", "requirement", "reservation", "resolve", "resource", "responsibility", "restaurant", "retention", "retrospectivity", "reward", "ribbon", "rim", "riser", "roadway", "role", "rosemary", "roundabout", "rubric", "ruin", "rule", "runway", "rust", "safe", "sailor", "saloon", "sand", "sandbar", "sanity", "sarong", "sauerkraut", "saw", "scaffold", "scale", "scarification", "scenario", "schedule", "schnitzel", "scholarship", "scorn", "scorpion", "scout", "scrap", "scratch", "seafood", "seagull", "seal", "season", "secrecy", "secret", "section", "sediment", "self-confidence", "sermon", "sesame", "settler", "shadowbox", "shark", "shipper", "shore", "shoulder", "sideboard", "siege", "sightseeing", "signature", "silk", "simple", "singing", "skean", "skeleton", "skyline", "skyscraper", "slide", "slime", "slipper", "smog", "smoke", "sock", "soliloquy", "solution", "solvency", "someplace", "sonar", "sonata", "sonnet", "soup", "soybean", "space", "spear", "spirit", "spork", "sport", "spring", "sprinkles", "squid", "stall", "starboard", "statue", "status", "stay", "steak", "steeple", "step", "step-mother", "sticker", "stir-fry", "stitcher", "stock", "stool", "story", "strait", "stranger", "strategy", "straw", "stump", "subexpression", "submitter", "subsidy", "substitution", "suitcase", "summary", "summer", "sunbeam", "sundae", "supplier", "surface", "sushi", "suspension", "sustenance", "swanling", "swath", "sweatshop", "swim", "swine", "swing", "switch", "switchboard", "swordfish", "synergy", "t-shirt", "tabletop", "tackle", "tail", "tapioca", "taro", "tarragon", "taxicab", "teammate", "technician", "technologist", "tectonics", "tenant", "tenement", "tennis", "tentacle", "teriyaki", "term", "testimonial", "testing", "thigh", "thongs", "thorn", "thread", "thunderbolt", "thyme", "tinderbox", "toaster", "tomatillo", "tomb", "tomography", "tool", "tooth", "toothbrush", "toothpick", "topsail", "traditionalism", "traffic", "translation", "transom", "transparency", "trash", "travel", "tray", "trench", "tribe", "tributary", "trick", "trolley", "tuba", "tuber", "tune-up", "turret", "tusk", "tuxedo", "typeface", "typewriter", "unblinking", "underneath", "underpants", "understanding", "unibody", "unique", "unit", "utilization", "valentine", "validity", "valley", "valuable", "vanadyl", "vein", "velocity", "venom", "version", "verve", "vestment", "veto", "viability", "vibraphone", "vibration", "vicinity", "video", "violin", "vision", "vista", "vol", "volleyball", "wafer", "waist", "wallaby", "warming", "wasabi", "waterspout", "wear", "wedding", "whack", "whale", "wheel", "widow", "wilderness", "willow", "window", "wombat", "word", "worth", "wriggler", "yak", "yarmulke", "yeast", "yin", "yogurt", "zebra", "zen"], f1 = ["a", "abaft", "aboard", "about", "above", "absent", "across", "afore", "after", "against", "along", "alongside", "amid", "amidst", "among", "amongst", "an", "anenst", "anti", "apropos", "apud", "around", "as", "aside", "astride", "at", "athwart", "atop", "barring", "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "but", "by", "circa", "concerning", "considering", "despite", "down", "during", "except", "excepting", "excluding", "failing", "following", "for", "forenenst", "from", "given", "in", "including", "inside", "into", "lest", "like", "mid", "midst", "minus", "modulo", "near", "next", "notwithstanding", "of", "off", "on", "onto", "opposite", "out", "outside", "over", "pace", "past", "per", "plus", "pro", "qua", "regarding", "round", "sans", "save", "since", "than", "the", "through", "throughout", "till", "times", "to", "toward", "towards", "under", "underneath", "unlike", "until", "unto", "up", "upon", "versus", "via", "vice", "with", "within", "without", "worth"], b1 = ["abnegate", "abscond", "abseil", "absolve", "accentuate", "accept", "access", "accessorise", "accompany", "account", "accredit", "achieve", "acknowledge", "acquire", "adjourn", "adjudge", "admonish", "adumbrate", "advocate", "afford", "airbrush", "ameliorate", "amend", "amount", "anaesthetise", "analyse", "anesthetize", "anneal", "annex", "antagonize", "ape", "apologise", "apostrophize", "appertain", "appreciate", "appropriate", "approximate", "arbitrate", "archive", "arraign", "arrange", "ascertain", "ascribe", "assail", "atomize", "attend", "attest", "attribute", "augment", "avow", "axe", "baa", "banish", "bank", "baptise", "battle", "beard", "beep", "behold", "belabor", "bemuse", "besmirch", "bestride", "better", "bewail", "bicycle", "bide", "bind", "biodegrade", "blacken", "blaspheme", "bleach", "blend", "blink", "bliss", "bloom", "bludgeon", "bobble", "boggle", "bolster", "book", "boom", "bootleg", "border", "bore", "boss", "braid", "brand", "brandish", "break", "breed", "broadcast", "broadside", "brood", "browse", "buck", "burgeon", "bus", "butter", "buzzing", "camouflage", "cannibalise", "canter", "cap", "capitalise", "capitalize", "capsize", "card", "carouse", "carp", "carpool", "catalog", "catalyze", "catch", "categorise", "cease", "celebrate", "censor", "certify", "char", "charter", "chase", "chatter", "chime", "chip", "christen", "chromakey", "chunder", "chunter", "cinch", "circle", "circulate", "circumnavigate", "clamor", "clamour", "claw", "cleave", "clinch", "clinking", "clone", "clonk", "coagulate", "coexist", "coincide", "collaborate", "colligate", "colorize", "colour", "comb", "come", "commandeer", "commemorate", "communicate", "compete", "conceal", "conceptualize", "conclude", "concrete", "condense", "cone", "confide", "confirm", "confiscate", "confound", "confute", "congregate", "conjecture", "connect", "consign", "construe", "contradict", "contrast", "contravene", "controvert", "convalesce", "converse", "convince", "convoke", "coop", "cop", "corner", "covenant", "cow", "crackle", "cram", "crank", "creak", "creaking", "cripple", "croon", "cross", "crumble", "crystallize", "culminate", "culture", "curry", "curse", "customise", "cycle", "dally", "dampen", "darn", "debit", "debut", "decide", "decode", "decouple", "decriminalize", "deduce", "deduct", "deflate", "deflect", "deform", "defrag", "degenerate", "degrease", "delete", "delight", "deliquesce", "demob", "demobilise", "democratize", "demonstrate", "denitrify", "deny", "depart", "depend", "deplore", "deploy", "deprave", "depute", "dereference", "describe", "desecrate", "deselect", "destock", "detain", "develop", "devise", "dial", "dicker", "digitize", "dilate", "disapprove", "disarm", "disbar", "discontinue", "disgorge", "dishearten", "dishonor", "disinherit", "dislocate", "dispense", "display", "dispose", "disrespect", "dissemble", "ditch", "divert", "dock", "doodle", "downchange", "downshift", "dowse", "draft", "drag", "drain", "dramatize", "drowse", "drum", "dwell", "economise", "edge", "efface", "egg", "eke", "electrify", "embalm", "embed", "embody", "emboss", "emerge", "emphasise", "emphasize", "emulsify", "encode", "endow", "enfold", "engage", "engender", "enhance", "enlist", "enrage", "enrich", "enroll", "entice", "entomb", "entrench", "entwine", "equate", "essay", "etch", "eulogise", "even", "evince", "exacerbate", "exaggerate", "exalt", "exempt", "exonerate", "expatiate", "explode", "expostulate", "extract", "extricate", "eyeglasses", "fabricate", "facilitate", "factorise", "factorize", "fail", "fall", "familiarize", "fashion", "father", "fathom", "fax", "federate", "feminize", "fence", "fess", "fictionalize", "fiddle", "fidget", "fill", "flash", "fleck", "flight", "floodlight", "floss", "fluctuate", "fluff", "fly", "focalise", "foot", "forearm", "forecast", "foretell", "forgather", "forgo", "fork", "form", "forswear", "founder", "fraternise", "fray", "frizz", "fumigate", "function", "furlough", "fuss", "gad", "gallivant", "galvanize", "gape", "garage", "garrote", "gasp", "gestate", "give", "glimmer", "glisten", "gloat", "gloss", "glow", "gnash", "gnaw", "goose", "govern", "grade", "graduate", "graft", "grok", "guest", "guilt", "gulp", "gum", "gurn", "gust", "gut", "guzzle", "ham", "harangue", "harvest", "hassle", "haul", "haze", "headline", "hearten", "heighten", "highlight", "hoick", "hold", "hole", "hollow", "holster", "home", "homeschool", "hoot", "horn", "horse", "hotfoot", "house", "hover", "howl", "huddle", "huff", "hunger", "hunt", "husk", "hype", "hypothesise", "hypothesize", "idle", "ignite", "imagineer", "impact", "impanel", "implode", "incinerate", "incline", "inculcate", "industrialize", "ingratiate", "inhibit", "inject", "innovate", "inscribe", "insert", "insist", "inspect", "institute", "institutionalize", "intend", "intermarry", "intermesh", "intermix", "internalise", "internalize", "internationalize", "intrigue", "inure", "inveigle", "inventory", "investigate", "irk", "iterate", "jaywalk", "jell", "jeopardise", "jiggle", "jive", "joint", "jot", "jut", "keel", "knife", "knit", "know", "kowtow", "lack", "lampoon", "large", "leap", "lecture", "legitimize", "lend", "libel", "liberalize", "license", "ligate", "list", "lobotomise", "lock", "log", "loose", "low", "lowball", "machine", "magnetize", "major", "make", "malfunction", "manage", "manipulate", "maroon", "masculinize", "mash", "mask", "masquerade", "massage", "masticate", "materialise", "matter", "maul", "memorise", "merge", "mesh", "metabolise", "microblog", "microchip", "micromanage", "militate", "mill", "minister", "minor", "misappropriate", "miscalculate", "misfire", "misjudge", "miskey", "mismatch", "mispronounce", "misread", "misreport", "misspend", "mob", "mobilise", "mobilize", "moisten", "mooch", "moor", "moralise", "mortar", "mosh", "mothball", "motivate", "motor", "mould", "mount", "muddy", "mummify", "mutate", "mystify", "nab", "narrate", "narrowcast", "nasalise", "nauseate", "navigate", "neaten", "neck", "neglect", "norm", "notarize", "object", "obscure", "observe", "obsess", "obstruct", "obtrude", "offend", "offset", "option", "orchestrate", "orient", "orientate", "outbid", "outdo", "outfit", "outflank", "outfox", "outnumber", "outrank", "outrun", "outsource", "overburden", "overcharge", "overcook", "overdub", "overfeed", "overload", "overplay", "overproduce", "overreact", "override", "overspend", "overstay", "overtrain", "overvalue", "overwork", "own", "oxidise", "oxidize", "oxygenate", "pace", "pack", "pale", "pant", "paralyse", "parody", "part", "pause", "pave", "penalise", "persecute", "personalise", "perspire", "pertain", "peter", "pike", "pillory", "pinion", "pip", "pity", "pivot", "pixellate", "plagiarise", "plait", "plan", "please", "pluck", "ponder", "popularize", "portray", "prance", "preclude", "preheat", "prejudge", "preregister", "presell", "preside", "pretend", "print", "prioritize", "probate", "probe", "proceed", "procrastinate", "profane", "progress", "proliferate", "proofread", "propound", "proselytise", "provision", "pry", "publicize", "puff", "pull", "pulp", "pulverize", "purse", "put", "putrefy", "quadruple", "quaff", "quantify", "quarrel", "quash", "quaver", "question", "quiet", "quintuple", "quip", "quit", "rag", "rally", "ramp", "randomize", "rationalise", "rationalize", "ravage", "ravel", "react", "readies", "readjust", "readmit", "ready", "reapply", "rear", "reassemble", "rebel", "reboot", "reborn", "rebound", "rebuff", "rebuild", "rebuke", "recede", "reckon", "reclassify", "recompense", "reconstitute", "record", "recount", "redact", "redevelop", "redound", "redraw", "redress", "reel", "refer", "reference", "refine", "reflate", "refute", "regulate", "reiterate", "rejigger", "rejoin", "rekindle", "relaunch", "relieve", "remand", "remark", "reopen", "reorient", "replicate", "repossess", "represent", "reprimand", "reproach", "reprove", "repurpose", "requite", "reschedule", "resort", "respray", "restructure", "retool", "retract", "revere", "revitalise", "revoke", "reword", "rewrite", "ride", "ridge", "rim", "ring", "rise", "rival", "roger", "rosin", "rot", "rout", "row", "rue", "rule", "safeguard", "sashay", "sate", "satirise", "satirize", "satisfy", "saturate", "savour", "scale", "scamper", "scar", "scare", "scarper", "scent", "schematise", "scheme", "schlep", "scoff", "scoop", "scope", "scotch", "scowl", "scrabble", "scram", "scramble", "scrape", "screw", "scruple", "scrutinise", "scuffle", "scuttle", "search", "secularize", "see", "segregate", "sell", "sense", "sensitize", "sequester", "serenade", "serialize", "serve", "service", "settle", "sew", "shaft", "sham", "shampoo", "shanghai", "shear", "sheathe", "shell", "shinny", "shirk", "shoot", "shoulder", "shout", "shovel", "showboat", "shred", "shrill", "shudder", "shush", "sidetrack", "sign", "silt", "sin", "singe", "sit", "sizzle", "skateboard", "ski", "slake", "slap", "slather", "sleet", "slink", "slip", "slope", "slump", "smarten", "smuggle", "snack", "sneak", "sniff", "snoop", "snow", "snowplow", "snuggle", "soap", "solace", "solder", "solicit", "source", "spark", "spattering", "spectacles", "spectate", "spellcheck", "spew", "spice", "spirit", "splash", "splay", "split", "splosh", "splurge", "spook", "square", "squirm", "stabilise", "stable", "stack", "stage", "stake", "starch", "state", "statement", "stiffen", "stigmatize", "sting", "stint", "stoop", "store", "storyboard", "stratify", "structure", "stuff", "stunt", "substantiate", "subtract", "suckle", "suffice", "suffocate", "summarise", "sun", "sunbathe", "sunder", "sup", "surge", "surprise", "swat", "swathe", "sway", "swear", "swelter", "swerve", "swill", "swing", "symbolise", "synthesise", "syringe", "table", "tabulate", "tag", "tame", "tank", "tankful", "tarry", "task", "taxicab", "team", "telescope", "tenant", "terraform", "terrorise", "testify", "think", "throbbing", "thump", "tighten", "toady", "toe", "tough", "tousle", "traduce", "train", "transcend", "transplant", "trash", "treasure", "treble", "trek", "trial", "tromp", "trouser", "trust", "tune", "tut", "twine", "twist", "typify", "unbalance", "uncork", "uncover", "underachieve", "undergo", "underplay", "unearth", "unfreeze", "unfurl", "unlearn", "unscramble", "unzip", "uproot", "upsell", "usher", "vacation", "vamoose", "vanish", "vary", "veg", "venture", "verify", "vet", "veto", "volunteer", "vulgarise", "waft", "wallop", "waltz", "warp", "wash", "waver", "weary", "weatherize", "wedge", "weep", "weight", "welcome", "westernise", "westernize", "while", "whine", "whisper", "whistle", "whitewash", "whup", "wilt", "wing", "wire", "wisecrack", "wolf", "wound", "wring", "writ", "yak", "yawn", "yearn", "yuppify"], C1 = { adjective: m1, adverb: p1, conjunction: F1, interjection: g1, noun: y1, preposition: f1, verb: b1 }, v1 = C1, k1 = { airline: im, animal: Am, app: Bm, book: Nm, cell_phone: Wm, color: Km, commerce: qm, company: np, database: op, date: cp, finance: Sp, food: Np, hacker: Jp, internet: Up, location: pF, lorem: yF, metadata: bF, music: wF, person: zF, phone_number: ZF, science: a1, team: i1, vehicle: h1, word: v1 }, A1 = k1, ee = class extends Error {
};
function S1(e) {
  let a = Object.getPrototypeOf(e);
  do {
    for (let t of Object.getOwnPropertyNames(a)) typeof e[t] == "function" && t !== "constructor" && (e[t] = e[t].bind(e));
    a = Object.getPrototypeOf(a);
  } while (a !== Object.prototype);
}
var st = class {
  constructor(e) {
    this.faker = e, S1(this);
  }
}, Ee = class extends st {
  constructor(e) {
    super(e), this.faker = e;
  }
}, Ns = ((e) => (e.Narrowbody = "narrowbody", e.Regional = "regional", e.Widebody = "widebody", e))(Ns || {}), w1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], E1 = ["0", "O", "1", "I", "L"], D1 = { regional: 20, narrowbody: 35, widebody: 60 }, B1 = { regional: ["A", "B", "C", "D"], narrowbody: ["A", "B", "C", "D", "E", "F"], widebody: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"] }, T1 = class extends Ee {
  airport() {
    return this.faker.helpers.arrayElement(this.faker.definitions.airline.airport);
  }
  airline() {
    return this.faker.helpers.arrayElement(this.faker.definitions.airline.airline);
  }
  airplane() {
    return this.faker.helpers.arrayElement(this.faker.definitions.airline.airplane);
  }
  recordLocator(e = {}) {
    let { allowNumerics: a = !1, allowVisuallySimilarCharacters: t = !1 } = e, n = [];
    return a || n.push(...w1), t || n.push(...E1), this.faker.string.alphanumeric({ length: 6, casing: "upper", exclude: n });
  }
  seat(e = {}) {
    let { aircraftType: a = "narrowbody" } = e, t = D1[a], n = B1[a], r = this.faker.number.int({ min: 1, max: t }), i = this.faker.helpers.arrayElement(n);
    return `${r}${i}`;
  }
  aircraftType() {
    return this.faker.helpers.enumValue(Ns);
  }
  flightNumber(e = {}) {
    let { length: a = { min: 1, max: 4 }, addLeadingZeros: t = !1 } = e, n = this.faker.string.numeric({ length: a, allowLeadingZeros: !1 });
    return t ? n.padStart(4, "0") : n;
  }
}, xs = ((e) => (e.SRGB = "sRGB", e.DisplayP3 = "display-p3", e.REC2020 = "rec2020", e.A98RGB = "a98-rgb", e.ProphotoRGB = "prophoto-rgb", e))(xs || {}), Hs = ((e) => (e.RGB = "rgb", e.RGBA = "rgba", e.HSL = "hsl", e.HSLA = "hsla", e.HWB = "hwb", e.CMYK = "cmyk", e.LAB = "lab", e.LCH = "lch", e.COLOR = "color", e))(Hs || {});
function M1(e, a) {
  let { prefix: t, casing: n } = a;
  switch (n) {
    case "upper": {
      e = e.toUpperCase();
      break;
    }
    case "lower": {
      e = e.toLowerCase();
      break;
    }
  }
  return t && (e = t + e), e;
}
function Ws(e) {
  return e.map((a) => {
    if (a % 1 !== 0) {
      let t = new ArrayBuffer(4);
      new DataView(t).setFloat32(0, a);
      let n = new Uint8Array(t);
      return Ws([...n]).replaceAll(" ", "");
    }
    return (a >>> 0).toString(2).padStart(8, "0");
  }).join(" ");
}
function Ze(e) {
  return Math.round(e * 100);
}
function R1(e, a = "rgb", t = "sRGB") {
  switch (a) {
    case "rgba":
      return `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`;
    case "color":
      return `color(${t} ${e[0]} ${e[1]} ${e[2]})`;
    case "cmyk":
      return `cmyk(${Ze(e[0])}%, ${Ze(e[1])}%, ${Ze(e[2])}%, ${Ze(e[3])}%)`;
    case "hsl":
      return `hsl(${e[0]}deg ${Ze(e[1])}% ${Ze(e[2])}%)`;
    case "hsla":
      return `hsl(${e[0]}deg ${Ze(e[1])}% ${Ze(e[2])}% / ${Ze(e[3])})`;
    case "hwb":
      return `hwb(${e[0]} ${Ze(e[1])}% ${Ze(e[2])}%)`;
    case "lab":
      return `lab(${Ze(e[0])}% ${e[1]} ${e[2]})`;
    case "lch":
      return `lch(${Ze(e[0])}% ${e[1]} ${e[2]})`;
    case "rgb":
      return `rgb(${e[0]}, ${e[1]}, ${e[2]})`;
  }
}
function Va(e, a, t = "rgb", n = "sRGB") {
  switch (a) {
    case "css":
      return R1(e, t, n);
    case "binary":
      return Ws(e);
    case "decimal":
      return e;
  }
}
var I1 = class extends Ee {
  human() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.human);
  }
  space() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.space);
  }
  cssSupportedFunction() {
    return this.faker.helpers.enumValue(Hs);
  }
  cssSupportedSpace() {
    return this.faker.helpers.enumValue(xs);
  }
  rgb(e = {}) {
    let { format: a = "hex", includeAlpha: t = !1, prefix: n = "#", casing: r = "lower" } = e, i, o = "rgb";
    return a === "hex" ? (i = this.faker.string.hexadecimal({ length: t ? 8 : 6, prefix: "" }), i = M1(i, { prefix: n, casing: r }), i) : (i = Array.from({ length: 3 }, () => this.faker.number.int(255)), t && (i.push(this.faker.number.float({ multipleOf: 0.01 })), o = "rgba"), Va(i, a, o));
  }
  cmyk(e = {}) {
    let { format: a = "decimal" } = e, t = Array.from({ length: 4 }, () => this.faker.number.float({ multipleOf: 0.01 }));
    return Va(t, a, "cmyk");
  }
  hsl(e = {}) {
    let { format: a = "decimal", includeAlpha: t = !1 } = e, n = [this.faker.number.int(360)];
    for (let r = 0; r < (e?.includeAlpha ? 3 : 2); r++) n.push(this.faker.number.float({ multipleOf: 0.01 }));
    return Va(n, a, t ? "hsla" : "hsl");
  }
  hwb(e = {}) {
    let { format: a = "decimal" } = e, t = [this.faker.number.int(360)];
    for (let n = 0; n < 2; n++) t.push(this.faker.number.float({ multipleOf: 0.01 }));
    return Va(t, a, "hwb");
  }
  lab(e = {}) {
    let { format: a = "decimal" } = e, t = [this.faker.number.float({ multipleOf: 1e-6 })];
    for (let n = 0; n < 2; n++) t.push(this.faker.number.float({ min: -100, max: 100, multipleOf: 1e-4 }));
    return Va(t, a, "lab");
  }
  lch(e = {}) {
    let { format: a = "decimal" } = e, t = [this.faker.number.float({ multipleOf: 1e-6 })];
    for (let n = 0; n < 2; n++) t.push(this.faker.number.float({ max: 230, multipleOf: 0.1 }));
    return Va(t, a, "lch");
  }
  colorByCSSColorSpace(e = {}) {
    let { format: a = "decimal", space: t = "sRGB" } = e, n = Array.from({ length: 3 }, () => this.faker.number.float({ multipleOf: 1e-4 }));
    return Va(n, a, "color", t);
  }
}, Os = ((e) => (e.Legacy = "legacy", e.Segwit = "segwit", e.Bech32 = "bech32", e.Taproot = "taproot", e))(Os || {}), P1 = ((e) => (e.Mainnet = "mainnet", e.Testnet = "testnet", e))(P1 || {}), L1 = { legacy: { prefix: { mainnet: "1", testnet: "m" }, length: { min: 26, max: 34 }, casing: "mixed", exclude: "0OIl" }, segwit: { prefix: { mainnet: "3", testnet: "2" }, length: { min: 26, max: 34 }, casing: "mixed", exclude: "0OIl" }, bech32: { prefix: { mainnet: "bc1", testnet: "tb1" }, length: { min: 42, max: 42 }, casing: "lower", exclude: "1bBiIoO" }, taproot: { prefix: { mainnet: "bc1p", testnet: "tb1p" }, length: { min: 62, max: 62 }, casing: "lower", exclude: "1bBiIoO" } }, Gs = typeof Buffer > "u" || !Ks("base64") ? (e) => {
  let a = new TextEncoder().encode(e), t = Array.from(a, (n) => String.fromCodePoint(n)).join("");
  return btoa(t);
} : (e) => Buffer.from(e).toString("base64"), qi = typeof Buffer > "u" || !Ks("base64url") ? (e) => Gs(e).replaceAll("+", "-").replaceAll("/", "_").replaceAll(/=+$/g, "") : (e) => Buffer.from(e).toString("base64url");
function Ks(e) {
  try {
    return typeof Buffer.from("test").toString(e) == "string";
  } catch {
    return !1;
  }
}
var _1 = Object.fromEntries([["А", "A"], ["а", "a"], ["Б", "B"], ["б", "b"], ["В", "V"], ["в", "v"], ["Г", "G"], ["г", "g"], ["Д", "D"], ["д", "d"], ["ъе", "ye"], ["Ъе", "Ye"], ["ъЕ", "yE"], ["ЪЕ", "YE"], ["Е", "E"], ["е", "e"], ["Ё", "Yo"], ["ё", "yo"], ["Ж", "Zh"], ["ж", "zh"], ["З", "Z"], ["з", "z"], ["И", "I"], ["и", "i"], ["ый", "iy"], ["Ый", "Iy"], ["ЫЙ", "IY"], ["ыЙ", "iY"], ["Й", "Y"], ["й", "y"], ["К", "K"], ["к", "k"], ["Л", "L"], ["л", "l"], ["М", "M"], ["м", "m"], ["Н", "N"], ["н", "n"], ["О", "O"], ["о", "o"], ["П", "P"], ["п", "p"], ["Р", "R"], ["р", "r"], ["С", "S"], ["с", "s"], ["Т", "T"], ["т", "t"], ["У", "U"], ["у", "u"], ["Ф", "F"], ["ф", "f"], ["Х", "Kh"], ["х", "kh"], ["Ц", "Ts"], ["ц", "ts"], ["Ч", "Ch"], ["ч", "ch"], ["Ш", "Sh"], ["ш", "sh"], ["Щ", "Sch"], ["щ", "sch"], ["Ъ", ""], ["ъ", ""], ["Ы", "Y"], ["ы", "y"], ["Ь", ""], ["ь", ""], ["Э", "E"], ["э", "e"], ["Ю", "Yu"], ["ю", "yu"], ["Я", "Ya"], ["я", "ya"]]), N1 = Object.fromEntries([["α", "a"], ["β", "v"], ["γ", "g"], ["δ", "d"], ["ε", "e"], ["ζ", "z"], ["η", "i"], ["θ", "th"], ["ι", "i"], ["κ", "k"], ["λ", "l"], ["μ", "m"], ["ν", "n"], ["ξ", "ks"], ["ο", "o"], ["π", "p"], ["ρ", "r"], ["σ", "s"], ["τ", "t"], ["υ", "y"], ["φ", "f"], ["χ", "x"], ["ψ", "ps"], ["ω", "o"], ["ά", "a"], ["έ", "e"], ["ί", "i"], ["ό", "o"], ["ύ", "y"], ["ή", "i"], ["ώ", "o"], ["ς", "s"], ["ϊ", "i"], ["ΰ", "y"], ["ϋ", "y"], ["ΐ", "i"], ["Α", "A"], ["Β", "B"], ["Γ", "G"], ["Δ", "D"], ["Ε", "E"], ["Ζ", "Z"], ["Η", "I"], ["Θ", "TH"], ["Ι", "I"], ["Κ", "K"], ["Λ", "L"], ["Μ", "M"], ["Ν", "N"], ["Ξ", "KS"], ["Ο", "O"], ["Π", "P"], ["Ρ", "R"], ["Σ", "S"], ["Τ", "T"], ["Υ", "Y"], ["Φ", "F"], ["Χ", "X"], ["Ψ", "PS"], ["Ω", "O"], ["Ά", "A"], ["Έ", "E"], ["Ί", "I"], ["Ό", "O"], ["Ύ", "Y"], ["Ή", "I"], ["Ώ", "O"], ["Ϊ", "I"], ["Ϋ", "Y"]]), x1 = Object.fromEntries([["ء", "e"], ["آ", "a"], ["أ", "a"], ["ؤ", "w"], ["إ", "i"], ["ئ", "y"], ["ا", "a"], ["ب", "b"], ["ة", "t"], ["ت", "t"], ["ث", "th"], ["ج", "j"], ["ح", "h"], ["خ", "kh"], ["د", "d"], ["ذ", "dh"], ["ر", "r"], ["ز", "z"], ["س", "s"], ["ش", "sh"], ["ص", "s"], ["ض", "d"], ["ط", "t"], ["ظ", "z"], ["ع", "e"], ["غ", "gh"], ["ـ", "_"], ["ف", "f"], ["ق", "q"], ["ك", "k"], ["ل", "l"], ["م", "m"], ["ن", "n"], ["ه", "h"], ["و", "w"], ["ى", "a"], ["ي", "y"], ["َ‎", "a"], ["ُ", "u"], ["ِ‎", "i"]]), H1 = Object.fromEntries([["ա", "a"], ["Ա", "A"], ["բ", "b"], ["Բ", "B"], ["գ", "g"], ["Գ", "G"], ["դ", "d"], ["Դ", "D"], ["ե", "ye"], ["Ե", "Ye"], ["զ", "z"], ["Զ", "Z"], ["է", "e"], ["Է", "E"], ["ը", "y"], ["Ը", "Y"], ["թ", "t"], ["Թ", "T"], ["ժ", "zh"], ["Ժ", "Zh"], ["ի", "i"], ["Ի", "I"], ["լ", "l"], ["Լ", "L"], ["խ", "kh"], ["Խ", "Kh"], ["ծ", "ts"], ["Ծ", "Ts"], ["կ", "k"], ["Կ", "K"], ["հ", "h"], ["Հ", "H"], ["ձ", "dz"], ["Ձ", "Dz"], ["ղ", "gh"], ["Ղ", "Gh"], ["ճ", "tch"], ["Ճ", "Tch"], ["մ", "m"], ["Մ", "M"], ["յ", "y"], ["Յ", "Y"], ["ն", "n"], ["Ն", "N"], ["շ", "sh"], ["Շ", "Sh"], ["ո", "vo"], ["Ո", "Vo"], ["չ", "ch"], ["Չ", "Ch"], ["պ", "p"], ["Պ", "P"], ["ջ", "j"], ["Ջ", "J"], ["ռ", "r"], ["Ռ", "R"], ["ս", "s"], ["Ս", "S"], ["վ", "v"], ["Վ", "V"], ["տ", "t"], ["Տ", "T"], ["ր", "r"], ["Ր", "R"], ["ց", "c"], ["Ց", "C"], ["ու", "u"], ["ՈՒ", "U"], ["Ու", "U"], ["փ", "p"], ["Փ", "P"], ["ք", "q"], ["Ք", "Q"], ["օ", "o"], ["Օ", "O"], ["ֆ", "f"], ["Ֆ", "F"], ["և", "yev"]]), W1 = Object.fromEntries([["چ", "ch"], ["ک", "k"], ["گ", "g"], ["پ", "p"], ["ژ", "zh"], ["ی", "y"]]), O1 = Object.fromEntries([["א", "a"], ["ב", "b"], ["ג", "g"], ["ד", "d"], ["ה", "h"], ["ו", "v"], ["ז", "z"], ["ח", "ch"], ["ט", "t"], ["י", "y"], ["כ", "k"], ["ך", "kh"], ["ל", "l"], ["ם", "m"], ["מ", "m"], ["ן", "n"], ["נ", "n"], ["ס", "s"], ["ע", "a"], ["פ", "f"], ["ף", "ph"], ["צ", "ts"], ["ץ", "ts"], ["ק", "k"], ["ר", "r"], ["ש", "sh"], ["ת", "t"], ["ו", "v"]]), Ui = { ..._1, ...N1, ...x1, ...W1, ...H1, ...O1 }, G1 = ((e) => (e.Any = "any", e.Loopback = "loopback", e.PrivateA = "private-a", e.PrivateB = "private-b", e.PrivateC = "private-c", e.TestNet1 = "test-net-1", e.TestNet2 = "test-net-2", e.TestNet3 = "test-net-3", e.LinkLocal = "link-local", e.Multicast = "multicast", e))(G1 || {}), K1 = { any: "0.0.0.0/0", loopback: "127.0.0.0/8", "private-a": "10.0.0.0/8", "private-b": "172.16.0.0/12", "private-c": "192.168.0.0/16", "test-net-1": "192.0.2.0/24", "test-net-2": "198.51.100.0/24", "test-net-3": "203.0.113.0/24", "link-local": "169.254.0.0/16", multicast: "224.0.0.0/4" };
function ji(e) {
  return /^[a-z][a-z-]*[a-z]$/i.exec(e) !== null;
}
function Yi(e, a) {
  let t = e.helpers.slugify(a);
  if (ji(t)) return t;
  let n = e.helpers.slugify(e.lorem.word());
  return ji(n) ? n : e.string.alpha({ casing: "lower", length: e.number.int({ min: 4, max: 8 }) });
}
var J1 = class extends Ee {
  email(e = {}) {
    let { firstName: a, lastName: t, provider: n = this.faker.helpers.arrayElement(this.faker.definitions.internet.free_email), allowSpecialCharacters: r = !1 } = e, i = this.username({ firstName: a, lastName: t });
    if (i = i.replaceAll(/[^A-Za-z0-9._+-]+/g, ""), i = i.substring(0, 50), r) {
      let o = [..."._-"], l = [...".!#$%&'*+-/=?^_`{|}~"];
      i = i.replace(this.faker.helpers.arrayElement(o), this.faker.helpers.arrayElement(l));
    }
    return i = i.replaceAll(/\.{2,}/g, "."), i = i.replace(/^\./, ""), i = i.replace(/\.$/, ""), `${i}@${n}`;
  }
  exampleEmail(e = {}) {
    let { firstName: a, lastName: t, allowSpecialCharacters: n = !1 } = e, r = this.faker.helpers.arrayElement(this.faker.definitions.internet.example_email);
    return this.email({ firstName: a, lastName: t, provider: r, allowSpecialCharacters: n });
  }
  username(e = {}) {
    let { firstName: a = this.faker.person.firstName(), lastName: t = this.faker.person.lastName(), lastName: n } = e, r = this.faker.helpers.arrayElement([".", "_"]), i = this.faker.number.int(99), o = [() => `${a}${r}${t}${i}`, () => `${a}${r}${t}`];
    n || o.push(() => `${a}${i}`);
    let l = this.faker.helpers.arrayElement(o)();
    return l = l.normalize("NFKD").replaceAll(/[\u0300-\u036F]/g, ""), l = [...l].map((u) => {
      if (Ui[u]) return Ui[u];
      let d = u.codePointAt(0) ?? Number.NaN;
      return d < 128 ? u : d.toString(36);
    }).join(""), l = l.replaceAll("'", ""), l = l.replaceAll(" ", ""), l;
  }
  displayName(e = {}) {
    let { firstName: a = this.faker.person.firstName(), lastName: t = this.faker.person.lastName() } = e, n = this.faker.helpers.arrayElement([".", "_"]), r = this.faker.number.int(99), i = [() => `${a}${r}`, () => `${a}${n}${t}`, () => `${a}${n}${t}${r}`], o = this.faker.helpers.arrayElement(i)();
    return o = o.replaceAll("'", ""), o = o.replaceAll(" ", ""), o;
  }
  protocol() {
    let e = ["http", "https"];
    return this.faker.helpers.arrayElement(e);
  }
  httpMethod() {
    let e = ["GET", "POST", "PUT", "DELETE", "PATCH"];
    return this.faker.helpers.arrayElement(e);
  }
  httpStatusCode(e = {}) {
    let { types: a = Object.keys(this.faker.definitions.internet.http_status_code) } = e, t = this.faker.helpers.arrayElement(a);
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.http_status_code[t]);
  }
  url(e = {}) {
    let { appendSlash: a = this.faker.datatype.boolean(), protocol: t = "https" } = e;
    return `${t}://${this.domainName()}${a ? "/" : ""}`;
  }
  domainName() {
    return `${this.domainWord()}.${this.domainSuffix()}`;
  }
  domainSuffix() {
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.domain_suffix);
  }
  domainWord() {
    let e = Yi(this.faker, this.faker.word.adjective()), a = Yi(this.faker, this.faker.word.noun());
    return `${e}-${a}`.toLowerCase();
  }
  ip() {
    return this.faker.datatype.boolean() ? this.ipv4() : this.ipv6();
  }
  ipv4(e = {}) {
    let { network: a = "any", cidrBlock: t = K1[a] } = e;
    if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2}$/.test(t)) throw new ee(`Invalid CIDR block provided: ${t}. Must be in the format x.x.x.x/y.`);
    let [n, r] = t.split("/"), i = 4294967295 >>> Number.parseInt(r), [o, l, u, d] = n.split(".").map(Number), c = (o << 24 | l << 16 | u << 8 | d) & ~i, h = this.faker.number.int(i), m = c | h;
    return [m >>> 24 & 255, m >>> 16 & 255, m >>> 8 & 255, m & 255].join(".");
  }
  ipv6() {
    return Array.from({ length: 8 }, () => this.faker.string.hexadecimal({ length: 4, casing: "lower", prefix: "" })).join(":");
  }
  port() {
    return this.faker.number.int(65535);
  }
  userAgent() {
    return this.faker.helpers.fake(this.faker.definitions.internet.user_agent_pattern);
  }
  mac(e = {}) {
    typeof e == "string" && (e = { separator: e });
    let { separator: a = ":" } = e, t, n = "";
    for ([":", "-", ""].includes(a) || (a = ":"), t = 0; t < 12; t++) n += this.faker.number.hex(15), t % 2 === 1 && t !== 11 && (n += a);
    return n;
  }
  password(e = {}) {
    let a = /[aeiouAEIOU]$/, t = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/, n = (u, d, c, h) => {
      if (h.length >= u) return h;
      d && (c = t.test(h) ? a : t);
      let m = this.faker.number.int(94) + 33, p = String.fromCodePoint(m);
      return d && (p = p.toLowerCase()), c.test(p) ? n(u, d, c, h + p) : n(u, d, c, h);
    }, { length: r = 15, memorable: i = !1, pattern: o = /\w/, prefix: l = "" } = e;
    return n(r, i, o, l);
  }
  emoji(e = {}) {
    let { types: a = Object.keys(this.faker.definitions.internet.emoji) } = e, t = this.faker.helpers.arrayElement(a);
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.emoji[t]);
  }
  jwtAlgorithm() {
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.jwt_algorithm);
  }
  jwt(e = {}) {
    let { refDate: a = this.faker.defaultRefDate() } = e, t = this.faker.date.recent({ refDate: a }), { header: n = { alg: this.jwtAlgorithm(), typ: "JWT" }, payload: r = { iat: Math.round(t.valueOf() / 1e3), exp: Math.round(this.faker.date.soon({ refDate: t }).valueOf() / 1e3), nbf: Math.round(this.faker.date.anytime({ refDate: a }).valueOf() / 1e3), iss: this.faker.company.name(), sub: this.faker.string.uuid(), aud: this.faker.string.uuid(), jti: this.faker.string.uuid() } } = e, i = qi(JSON.stringify(n)), o = qi(JSON.stringify(r)), l = this.faker.string.alphanumeric(64);
    return `${i}.${o}.${l}`;
  }
}, Js = ((e) => (e.Female = "female", e.Male = "male", e))(Js || {});
function _t(e, a, t) {
  let { generic: n, female: r, male: i } = t;
  switch (a) {
    case "female":
      return r ?? n;
    case "male":
      return i ?? n;
    default:
      return n ?? e.helpers.arrayElement([r, i]) ?? [];
  }
}
var z1 = class extends Ee {
  firstName(e) {
    return this.faker.helpers.arrayElement(_t(this.faker, e, this.faker.definitions.person.first_name));
  }
  lastName(e) {
    if (this.faker.rawDefinitions.person?.last_name_pattern != null) {
      let a = this.faker.helpers.weightedArrayElement(_t(this.faker, e, this.faker.rawDefinitions.person.last_name_pattern));
      return this.faker.helpers.fake(a);
    }
    return this.faker.helpers.arrayElement(_t(this.faker, e, this.faker.definitions.person.last_name));
  }
  middleName(e) {
    return this.faker.helpers.arrayElement(_t(this.faker, e, this.faker.definitions.person.middle_name));
  }
  fullName(e = {}) {
    let { sex: a = this.faker.helpers.arrayElement(["female", "male"]), firstName: t = this.firstName(a), lastName: n = this.lastName(a) } = e, r = this.faker.helpers.weightedArrayElement(this.faker.definitions.person.name);
    return this.faker.helpers.mustache(r, { "person.prefix": () => this.prefix(a), "person.firstName": () => t, "person.middleName": () => this.middleName(a), "person.lastName": () => n, "person.suffix": () => this.suffix() });
  }
  gender() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.gender);
  }
  sex() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.sex);
  }
  sexType() {
    return this.faker.helpers.enumValue(Js);
  }
  bio() {
    let { bio_pattern: e } = this.faker.definitions.person;
    return this.faker.helpers.fake(e);
  }
  prefix(e) {
    return this.faker.helpers.arrayElement(_t(this.faker, e, this.faker.definitions.person.prefix));
  }
  suffix() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.suffix);
  }
  jobTitle() {
    return this.faker.helpers.fake(this.faker.definitions.person.job_title_pattern);
  }
  jobDescriptor() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.job_descriptor);
  }
  jobArea() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.job_area);
  }
  jobType() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.job_type);
  }
  zodiacSign() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.western_zodiac_sign);
  }
}, V1 = 23283064365386963e-26, $1 = 1 / 9007199254740992, { imul: Ar, trunc: Sr } = Math;
function Zi(e) {
  return typeof e == "number" ? zs(e) : q1(e);
}
function zs(e) {
  let a = Array.from({ length: 624 });
  a[0] = e;
  for (let t = 1; t !== 624; ++t) {
    let n = a[t - 1] ^ a[t - 1] >>> 30;
    a[t] = Sr(Ar(1812433253, n) + t);
  }
  return a;
}
function q1(e) {
  let a = zs(19650218), t = 1, n = 0;
  for (let r = Math.max(624, e.length); r !== 0; --r) {
    let i = a[t - 1] ^ a[t - 1] >>> 30;
    a[t] = Sr((a[t] ^ Ar(i, 1664525)) + e[n] + n), t++, n++, t >= 624 && (a[0] = a[623], t = 1), n >= e.length && (n = 0);
  }
  for (let r = 623; r !== 0; r--) a[t] = Sr((a[t] ^ Ar(a[t - 1] ^ a[t - 1] >>> 30, 1566083941)) - t), t++, t >= 624 && (a[0] = a[623], t = 1);
  return a[0] = 2147483648, a;
}
function ir(e) {
  for (let t = 0; t !== 227; ++t) {
    let n = (e[t] & 2147483648) + (e[t + 1] & 2147483647);
    e[t] = e[t + 397] ^ n >>> 1 ^ -(n & 1) & 2567483615;
  }
  for (let t = 227; t !== 623; ++t) {
    let n = (e[t] & 2147483648) + (e[t + 1] & 2147483647);
    e[t] = e[t + 397 - 624] ^ n >>> 1 ^ -(n & 1) & 2567483615;
  }
  let a = (e[623] & 2147483648) + (e[0] & 2147483647);
  return e[623] = e[396] ^ a >>> 1 ^ -(a & 1) & 2567483615, e;
}
var U1 = class {
  constructor(e = Math.random() * Number.MAX_SAFE_INTEGER, a = ir(Zi(e)), t = 0) {
    this.states = a, this.index = t;
  }
  nextU32() {
    let e = this.states[this.index];
    return e ^= this.states[this.index] >>> 11, e ^= e << 7 & 2636928640, e ^= e << 15 & 4022730752, e ^= e >>> 18, ++this.index >= 624 && (this.states = ir(this.states), this.index = 0), e >>> 0;
  }
  nextF32() {
    return this.nextU32() * V1;
  }
  nextU53() {
    let e = this.nextU32() >>> 5, a = this.nextU32() >>> 6;
    return e * 67108864 + a;
  }
  nextF53() {
    return this.nextU53() * $1;
  }
  seed(e) {
    this.states = ir(Zi(e)), this.index = 0;
  }
};
function Vs() {
  return Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER);
}
function j1(e = Vs()) {
  let a = new U1(e);
  return { next() {
    return a.nextF53();
  }, seed(t) {
    a.seed(t);
  } };
}
var Y1 = class extends st {
  boolean(e = {}) {
    typeof e == "number" && (e = { probability: e });
    let { probability: a = 0.5 } = e;
    return a <= 0 ? !1 : a >= 1 ? !0 : this.faker.number.float() < a;
  }
};
function Aa(e, a = "refDate") {
  let t = new Date(e);
  if (Number.isNaN(t.valueOf())) throw new ee(`Invalid ${a} date: ${e.toString()}`);
  return t;
}
var wn = () => {
  throw new ee("You cannot edit the locale data on the faker instance");
};
function Z1(e) {
  let a = {};
  return new Proxy(e, { has() {
    return !0;
  }, get(t, n) {
    return typeof n == "symbol" || n === "nodeType" ? t[n] : n in a ? a[n] : a[n] = Q1(n, t[n]);
  }, set: wn, deleteProperty: wn });
}
function wr(e, ...a) {
  if (e === null) throw new ee(`The locale data for '${a.join(".")}' aren't applicable to this locale.
  If you think this is a bug, please report it at: https://github.com/faker-js/faker`);
  if (e === void 0) throw new ee(`The locale data for '${a.join(".")}' are missing in this locale.
  If this is a custom Faker instance, please make sure all required locales are used e.g. '[de_AT, de, en, base]'.
  Please contribute the missing data to the project or use a locale/Faker instance that has these data.
  For more information see https://fakerjs.dev/guide/localization.html`);
}
function Q1(e, a = {}) {
  return new Proxy(a, { has(t, n) {
    return t[n] != null;
  }, get(t, n) {
    let r = t[n];
    return typeof n == "symbol" || n === "nodeType" || wr(r, e, n.toString()), r;
  }, set: wn, deleteProperty: wn });
}
var $s = class extends st {
  anytime(e = {}) {
    let { refDate: a = this.faker.defaultRefDate() } = e, t = Aa(a).getTime();
    return this.between({ from: t - 1e3 * 60 * 60 * 24 * 365, to: t + 1e3 * 60 * 60 * 24 * 365 });
  }
  past(e = {}) {
    let { years: a = 1, refDate: t = this.faker.defaultRefDate() } = e;
    if (a <= 0) throw new ee("Years must be greater than 0.");
    let n = Aa(t).getTime();
    return this.between({ from: n - a * 365 * 24 * 3600 * 1e3, to: n - 1e3 });
  }
  future(e = {}) {
    let { years: a = 1, refDate: t = this.faker.defaultRefDate() } = e;
    if (a <= 0) throw new ee("Years must be greater than 0.");
    let n = Aa(t).getTime();
    return this.between({ from: n + 1e3, to: n + a * 365 * 24 * 3600 * 1e3 });
  }
  between(e) {
    let { from: a, to: t } = e, n = Aa(a, "from").getTime(), r = Aa(t, "to").getTime();
    if (n > r) throw new ee("`from` date must be before `to` date.");
    return new Date(this.faker.number.int({ min: n, max: r }));
  }
  betweens(e) {
    let { from: a, to: t, count: n = 3 } = e;
    return this.faker.helpers.multiple(() => this.between({ from: a, to: t }), { count: n }).sort((r, i) => r.getTime() - i.getTime());
  }
  recent(e = {}) {
    let { days: a = 1, refDate: t = this.faker.defaultRefDate() } = e;
    if (a <= 0) throw new ee("Days must be greater than 0.");
    let n = Aa(t).getTime();
    return this.between({ from: n - a * 24 * 3600 * 1e3, to: n - 1e3 });
  }
  soon(e = {}) {
    let { days: a = 1, refDate: t = this.faker.defaultRefDate() } = e;
    if (a <= 0) throw new ee("Days must be greater than 0.");
    let n = Aa(t).getTime();
    return this.between({ from: n + 1e3, to: n + a * 24 * 3600 * 1e3 });
  }
  birthdate(e = {}) {
    let { mode: a = "age", min: t = 18, max: n = 80, refDate: r = this.faker.defaultRefDate() } = e, i = Aa(r), o = i.getUTCFullYear();
    switch (a) {
      case "age": {
        let l = new Date(i).setUTCFullYear(o - n - 1) + 864e5, u = new Date(i).setUTCFullYear(o - t);
        if (l > u) throw new ee(`Max age ${n} should be greater than or equal to min age ${t}.`);
        return this.between({ from: l, to: u });
      }
      case "year": {
        let l = new Date(Date.UTC(0, 0, 2)).setUTCFullYear(t), u = new Date(Date.UTC(0, 11, 30)).setUTCFullYear(n);
        if (l > u) throw new ee(`Max year ${n} should be greater than or equal to min year ${t}.`);
        return this.between({ from: l, to: u });
      }
    }
  }
}, X1 = class extends $s {
  constructor(e) {
    super(e), this.faker = e;
  }
  month(e = {}) {
    let { abbreviated: a = !1, context: t = !1 } = e, n = this.faker.definitions.date.month, r;
    a ? r = t && n.abbr_context != null ? "abbr_context" : "abbr" : r = t && n.wide_context != null ? "wide_context" : "wide";
    let i = n[r];
    return wr(i, "date.month", r), this.faker.helpers.arrayElement(i);
  }
  weekday(e = {}) {
    let { abbreviated: a = !1, context: t = !1 } = e, n = this.faker.definitions.date.weekday, r;
    a ? r = t && n.abbr_context != null ? "abbr_context" : "abbr" : r = t && n.wide_context != null ? "wide_context" : "wide";
    let i = n[r];
    return wr(i, "date.weekday", r), this.faker.helpers.arrayElement(i);
  }
  timeZone() {
    return this.faker.helpers.arrayElement(this.faker.definitions.date.time_zone);
  }
}, eg = /\.|\(/;
function ag(e, a, t = [a, a.rawDefinitions]) {
  if (e.length === 0) throw new ee("Eval expression cannot be empty.");
  if (t.length === 0) throw new ee("Eval entrypoints cannot be empty.");
  let n = t, r = e;
  do {
    let o;
    r.startsWith("(") ? [o, n] = tg(r, n) : [o, n] = rg(r, n), r = r.substring(o), n = n.filter((l) => l != null).map((l) => Array.isArray(l) ? a.helpers.arrayElement(l) : l);
  } while (r.length > 0 && n.length > 0);
  if (n.length === 0) throw new ee(`Cannot resolve expression '${e}'`);
  let i = n[0];
  return typeof i == "function" ? i() : i;
}
function tg(e, a) {
  let [t, n] = ng(e), r = e[t + 1];
  switch (r) {
    case ".":
    case "(":
    case void 0:
      break;
    default:
      throw new ee(`Expected dot ('.'), open parenthesis ('('), or nothing after function call but got '${r}'`);
  }
  return [t + (r === "." ? 2 : 1), a.map((i) => typeof i == "function" ? i(...n) : void 0)];
}
function ng(e) {
  let a = e.indexOf(")", 1);
  if (a === -1) throw new ee(`Missing closing parenthesis in '${e}'`);
  for (; a !== -1; ) {
    let n = e.substring(1, a);
    try {
      return [a, JSON.parse(`[${n}]`)];
    } catch {
      if (!n.includes("'") && !n.includes('"')) try {
        return [a, JSON.parse(`["${n}"]`)];
      } catch {
      }
    }
    a = e.indexOf(")", a + 1);
  }
  a = e.lastIndexOf(")");
  let t = e.substring(1, a);
  return [a, [t]];
}
function rg(e, a) {
  let t = eg.exec(e), n = (t?.[0] ?? "") === ".", r = t?.index ?? e.length, i = e.substring(0, r);
  if (i.length === 0) throw new ee(`Expression parts cannot be empty in '${e}'`);
  let o = e[r + 1];
  if (n && (o == null || o === "." || o === "(")) throw new ee(`Found dot without property name in '${e}'`);
  return [r + (n ? 1 : 0), a.map((l) => ig(l, i))];
}
function ig(e, a) {
  switch (typeof e) {
    case "function": {
      try {
        e = e();
      } catch {
        return;
      }
      return e?.[a];
    }
    case "object":
      return e?.[a];
    default:
      return;
  }
}
function og(e) {
  let a = sg(e.replace(/L?$/, "0"));
  return a === 0 ? 0 : 10 - a;
}
function sg(e) {
  e = e.replaceAll(/[\s-]/g, "");
  let a = 0, t = !1;
  for (let n = e.length - 1; n >= 0; n--) {
    let r = Number.parseInt(e[n]);
    t && (r *= 2, r > 9 && (r = r % 10 + 1)), a += r, t = !t;
  }
  return a % 10;
}
function Qi(e, a, t, n) {
  let r = 1;
  if (a) switch (a) {
    case "?": {
      r = e.datatype.boolean() ? 0 : 1;
      break;
    }
    case "*": {
      let i = 1;
      for (; e.datatype.boolean(); ) i *= 2;
      r = e.number.int({ min: 0, max: i });
      break;
    }
    case "+": {
      let i = 1;
      for (; e.datatype.boolean(); ) i *= 2;
      r = e.number.int({ min: 1, max: i });
      break;
    }
    default:
      throw new ee("Unknown quantifier symbol provided.");
  }
  else t != null && n != null ? r = e.number.int({ min: Number.parseInt(t), max: Number.parseInt(n) }) : t != null && n == null && (r = Number.parseInt(t));
  return r;
}
function lg(e, a = "") {
  let t = /(.)\{(\d+),(\d+)\}/, n = /(.)\{(\d+)\}/, r = /\[(\d+)-(\d+)\]/, i, o, l, u, d = t.exec(a);
  for (; d != null; ) i = Number.parseInt(d[2]), o = Number.parseInt(d[3]), i > o && (l = o, o = i, i = l), u = e.number.int({ min: i, max: o }), a = a.slice(0, d.index) + d[1].repeat(u) + a.slice(d.index + d[0].length), d = t.exec(a);
  for (d = n.exec(a); d != null; ) u = Number.parseInt(d[2]), a = a.slice(0, d.index) + d[1].repeat(u) + a.slice(d.index + d[0].length), d = n.exec(a);
  for (d = r.exec(a); d != null; ) i = Number.parseInt(d[1]), o = Number.parseInt(d[2]), i > o && (l = o, o = i, i = l), a = a.slice(0, d.index) + e.number.int({ min: i, max: o }).toString() + a.slice(d.index + d[0].length), d = r.exec(a);
  return a;
}
function qs(e, a = "", t = "#") {
  let n = "";
  for (let r = 0; r < a.length; r++) a.charAt(r) === t ? n += e.number.int(9) : a.charAt(r) === "!" ? n += e.number.int({ min: 2, max: 9 }) : n += a.charAt(r);
  return n;
}
var Us = class extends st {
  slugify(e = "") {
    return e.normalize("NFKD").replaceAll(/[\u0300-\u036F]/g, "").replaceAll(" ", "-").replaceAll(/[^\w.-]+/g, "");
  }
  replaceSymbols(e = "") {
    let a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], t = "";
    for (let n = 0; n < e.length; n++) e.charAt(n) === "#" ? t += this.faker.number.int(9) : e.charAt(n) === "?" ? t += this.arrayElement(a) : e.charAt(n) === "*" ? t += this.faker.datatype.boolean() ? this.arrayElement(a) : this.faker.number.int(9) : t += e.charAt(n);
    return t;
  }
  replaceCreditCardSymbols(e = "6453-####-####-####-###L", a = "#") {
    e = lg(this.faker, e), e = qs(this.faker, e, a);
    let t = og(e);
    return e.replace("L", String(t));
  }
  fromRegExp(e) {
    let a = !1;
    e instanceof RegExp && (a = e.flags.includes("i"), e = e.toString(), e = /\/(.+?)\//.exec(e)?.[1] ?? "");
    let t, n, r, i = /([.A-Za-z0-9])(?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+))(?![^[]*]|[^{]*})/, o = i.exec(e);
    for (; o != null; ) {
      let h = o[2], m = o[3], p = o[4];
      r = Qi(this.faker, p, h, m);
      let F;
      o[1] === "." ? F = this.faker.string.alphanumeric(r) : a ? F = this.faker.string.fromCharacters([o[1].toLowerCase(), o[1].toUpperCase()], r) : F = o[1].repeat(r), e = e.slice(0, o.index) + F + e.slice(o.index + o[0].length), o = i.exec(e);
    }
    let l = /(\d-\d|\w-\w|\d|\w|[-!@#$&()`.+,/"])/, u = /\[(\^|)(-|)(.+?)\](?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+)|)/;
    for (o = u.exec(e); o != null; ) {
      let h = o[1] === "^", m = o[2] === "-", p = o[4], F = o[5], g = o[6], C = [], E = o[3], k = l.exec(E);
      for (m && C.push(45); k != null; ) {
        if (k[0].includes("-")) {
          let f = k[0].split("-").map((b) => b.codePointAt(0) ?? Number.NaN);
          if (t = f[0], n = f[1], t > n) throw new ee("Character range provided is out of order.");
          for (let b = t; b <= n; b++) if (a && Number.isNaN(Number(String.fromCodePoint(b)))) {
            let S = String.fromCodePoint(b);
            C.push(S.toUpperCase().codePointAt(0) ?? Number.NaN, S.toLowerCase().codePointAt(0) ?? Number.NaN);
          } else C.push(b);
        } else a && Number.isNaN(Number(k[0])) ? C.push(k[0].toUpperCase().codePointAt(0) ?? Number.NaN, k[0].toLowerCase().codePointAt(0) ?? Number.NaN) : C.push(k[0].codePointAt(0) ?? Number.NaN);
        E = E.substring(k[0].length), k = l.exec(E);
      }
      if (r = Qi(this.faker, g, p, F), h) {
        let f = -1;
        for (let b = 48; b <= 57; b++) {
          if (f = C.indexOf(b), f > -1) {
            C.splice(f, 1);
            continue;
          }
          C.push(b);
        }
        for (let b = 65; b <= 90; b++) {
          if (f = C.indexOf(b), f > -1) {
            C.splice(f, 1);
            continue;
          }
          C.push(b);
        }
        for (let b = 97; b <= 122; b++) {
          if (f = C.indexOf(b), f > -1) {
            C.splice(f, 1);
            continue;
          }
          C.push(b);
        }
      }
      let I = this.multiple(() => String.fromCodePoint(this.arrayElement(C)), { count: r }).join("");
      e = e.slice(0, o.index) + I + e.slice(o.index + o[0].length), o = u.exec(e);
    }
    let d = /(.)\{(\d+),(\d+)\}/;
    for (o = d.exec(e); o != null; ) {
      if (t = Number.parseInt(o[2]), n = Number.parseInt(o[3]), t > n) throw new ee("Numbers out of order in {} quantifier.");
      r = this.faker.number.int({ min: t, max: n }), e = e.slice(0, o.index) + o[1].repeat(r) + e.slice(o.index + o[0].length), o = d.exec(e);
    }
    let c = /(.)\{(\d+)\}/;
    for (o = c.exec(e); o != null; ) r = Number.parseInt(o[2]), e = e.slice(0, o.index) + o[1].repeat(r) + e.slice(o.index + o[0].length), o = c.exec(e);
    return e;
  }
  shuffle(e, a = {}) {
    let { inplace: t = !1 } = a;
    t || (e = [...e]);
    for (let n = e.length - 1; n > 0; --n) {
      let r = this.faker.number.int(n);
      [e[n], e[r]] = [e[r], e[n]];
    }
    return e;
  }
  uniqueArray(e, a) {
    if (Array.isArray(e)) {
      let n = [...new Set(e)];
      return this.shuffle(n).splice(0, a);
    }
    let t = /* @__PURE__ */ new Set();
    try {
      if (typeof e == "function") {
        let n = 1e3 * a, r = 0;
        for (; t.size < a && r < n; ) t.add(e()), r++;
      }
    } catch {
    }
    return [...t];
  }
  mustache(e, a) {
    if (e == null) return "";
    for (let t in a) {
      let n = new RegExp(`{{${t}}}`, "g"), r = a[t];
      typeof r == "string" && (r = r.replaceAll("$", "$$$$")), e = e.replace(n, r);
    }
    return e;
  }
  maybe(e, a = {}) {
    if (this.faker.datatype.boolean(a)) return e();
  }
  objectKey(e) {
    let a = Object.keys(e);
    return this.arrayElement(a);
  }
  objectValue(e) {
    let a = this.faker.helpers.objectKey(e);
    return e[a];
  }
  objectEntry(e) {
    let a = this.faker.helpers.objectKey(e);
    return [a, e[a]];
  }
  arrayElement(e) {
    if (e.length === 0) throw new ee("Cannot get value from empty dataset.");
    let a = e.length > 1 ? this.faker.number.int({ max: e.length - 1 }) : 0;
    return e[a];
  }
  weightedArrayElement(e) {
    if (e.length === 0) throw new ee("weightedArrayElement expects an array with at least one element");
    if (!e.every((r) => r.weight > 0)) throw new ee("weightedArrayElement expects an array of { weight, value } objects where weight is a positive number");
    let a = e.reduce((r, { weight: i }) => r + i, 0), t = this.faker.number.float({ min: 0, max: a }), n = 0;
    for (let { weight: r, value: i } of e) if (n += r, t < n) return i;
    return e.at(-1).value;
  }
  arrayElements(e, a) {
    if (e.length === 0) return [];
    let t = this.rangeToNumber(a ?? { min: 1, max: e.length });
    if (t >= e.length) return this.shuffle(e);
    if (t <= 0) return [];
    let n = [...e], r = e.length, i = r - t, o, l;
    for (; r-- > i; ) l = this.faker.number.int(r), o = n[l], n[l] = n[r], n[r] = o;
    return n.slice(i);
  }
  enumValue(e) {
    let a = Object.keys(e).filter((n) => Number.isNaN(Number(n))), t = this.arrayElement(a);
    return e[t];
  }
  rangeToNumber(e) {
    return typeof e == "number" ? e : this.faker.number.int(e);
  }
  multiple(e, a = {}) {
    let t = this.rangeToNumber(a.count ?? 3);
    return t <= 0 ? [] : Array.from({ length: t }, e);
  }
}, ug = class extends Us {
  constructor(e) {
    super(e), this.faker = e;
  }
  fake(e) {
    e = typeof e == "string" ? e : this.arrayElement(e);
    let a = e.search(/{{[a-z]/), t = e.indexOf("}}", a);
    if (a === -1 || t === -1) return e;
    let n = e.substring(a + 2, t + 2).replace("}}", "").replace("{{", ""), r = ag(n, this.faker), i = String(r), o = e.substring(0, a) + i + e.substring(t + 2);
    return this.fake(o);
  }
}, js = class extends st {
  latitude(e = {}) {
    let { max: a = 90, min: t = -90, precision: n = 4 } = e;
    return this.faker.number.float({ min: t, max: a, fractionDigits: n });
  }
  longitude(e = {}) {
    let { max: a = 180, min: t = -180, precision: n = 4 } = e;
    return this.faker.number.float({ max: a, min: t, fractionDigits: n });
  }
  nearbyGPSCoordinate(e = {}) {
    let { origin: a, radius: t = 10, isMetric: n = !1 } = e;
    if (a == null) return [this.latitude(), this.longitude()];
    let r = this.faker.number.float({ max: 2 * Math.PI, fractionDigits: 5 }), i = n ? t : t * 1.60934, o = this.faker.number.float({ max: i, fractionDigits: 3 }) * 0.995, l = 4e4 / 360, u = o / l, d = [a[0] + Math.sin(r) * u, a[1] + Math.cos(r) * u];
    return d[0] = d[0] % 180, (d[0] < -90 || d[0] > 90) && (d[0] = Math.sign(d[0]) * 180 - d[0], d[1] += 180), d[1] = (d[1] % 360 + 540) % 360 - 180, [d[0], d[1]];
  }
}, cg = class extends js {
  constructor(e) {
    super(e), this.faker = e;
  }
  zipCode(e = {}) {
    typeof e == "string" && (e = { format: e });
    let { state: a } = e;
    if (a != null) {
      let n = this.faker.definitions.location.postcode_by_state[a];
      if (n == null) throw new ee(`No zip code definition found for state "${a}"`);
      return this.faker.helpers.fake(n);
    }
    let { format: t = this.faker.definitions.location.postcode } = e;
    return typeof t == "string" && (t = [t]), t = this.faker.helpers.arrayElement(t), this.faker.helpers.replaceSymbols(t);
  }
  city() {
    return this.faker.helpers.fake(this.faker.definitions.location.city_pattern);
  }
  buildingNumber() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.building_number).replaceAll(/#+/g, (e) => this.faker.string.numeric({ length: e.length, allowLeadingZeros: !1 }));
  }
  street() {
    return this.faker.helpers.fake(this.faker.definitions.location.street_pattern);
  }
  streetAddress(e = {}) {
    typeof e == "boolean" && (e = { useFullAddress: e });
    let { useFullAddress: a } = e, t = this.faker.definitions.location.street_address[a ? "full" : "normal"];
    return this.faker.helpers.fake(t);
  }
  secondaryAddress() {
    return this.faker.helpers.fake(this.faker.definitions.location.secondary_address).replaceAll(/#+/g, (e) => this.faker.string.numeric({ length: e.length, allowLeadingZeros: !1 }));
  }
  county() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.county);
  }
  country() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.country);
  }
  continent() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.continent);
  }
  countryCode(e = {}) {
    typeof e == "string" && (e = { variant: e });
    let { variant: a = "alpha-2" } = e, t = (() => {
      switch (a) {
        case "numeric":
          return "numeric";
        case "alpha-3":
          return "alpha3";
        case "alpha-2":
          return "alpha2";
      }
    })();
    return this.faker.helpers.arrayElement(this.faker.definitions.location.country_code)[t];
  }
  state(e = {}) {
    let { abbreviated: a = !1 } = e, t = a ? this.faker.definitions.location.state_abbr : this.faker.definitions.location.state;
    return this.faker.helpers.arrayElement(t);
  }
  direction(e = {}) {
    let { abbreviated: a = !1 } = e;
    return a ? this.faker.helpers.arrayElement([...this.faker.definitions.location.direction.cardinal_abbr, ...this.faker.definitions.location.direction.ordinal_abbr]) : this.faker.helpers.arrayElement([...this.faker.definitions.location.direction.cardinal, ...this.faker.definitions.location.direction.ordinal]);
  }
  cardinalDirection(e = {}) {
    let { abbreviated: a = !1 } = e;
    return a ? this.faker.helpers.arrayElement(this.faker.definitions.location.direction.cardinal_abbr) : this.faker.helpers.arrayElement(this.faker.definitions.location.direction.cardinal);
  }
  ordinalDirection(e = {}) {
    let { abbreviated: a = !1 } = e;
    return a ? this.faker.helpers.arrayElement(this.faker.definitions.location.direction.ordinal_abbr) : this.faker.helpers.arrayElement(this.faker.definitions.location.direction.ordinal);
  }
  timeZone() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.time_zone);
  }
  language() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.language);
  }
}, dg = class extends st {
  int(e = {}) {
    typeof e == "number" && (e = { max: e });
    let { min: a = 0, max: t = Number.MAX_SAFE_INTEGER, multipleOf: n = 1 } = e;
    if (!Number.isInteger(n)) throw new ee("multipleOf should be an integer.");
    if (n <= 0) throw new ee("multipleOf should be greater than 0.");
    let r = Math.ceil(a / n), i = Math.floor(t / n);
    if (r === i) return r * n;
    if (i < r) throw t >= a ? new ee(`No suitable integer value between ${a} and ${t} found.`) : new ee(`Max ${t} should be greater than min ${a}.`);
    let o = this.faker._randomizer.next(), l = i - r + 1;
    return Math.floor(o * l + r) * n;
  }
  float(e = {}) {
    typeof e == "number" && (e = { max: e });
    let { min: a = 0, max: t = 1, fractionDigits: n, multipleOf: r, multipleOf: i = n == null ? void 0 : 10 ** -n } = e;
    if (t < a) throw new ee(`Max ${t} should be greater than min ${a}.`);
    if (n != null) {
      if (r != null) throw new ee("multipleOf and fractionDigits cannot be set at the same time.");
      if (!Number.isInteger(n)) throw new ee("fractionDigits should be an integer.");
      if (n < 0) throw new ee("fractionDigits should be greater than or equal to 0.");
    }
    if (i != null) {
      if (i <= 0) throw new ee("multipleOf should be greater than 0.");
      let o = Math.log10(i), l = i < 1 && Number.isInteger(o) ? 10 ** -o : 1 / i;
      return this.int({ min: a * l, max: t * l }) / l;
    }
    return this.faker._randomizer.next() * (t - a) + a;
  }
  binary(e = {}) {
    typeof e == "number" && (e = { max: e });
    let { min: a = 0, max: t = 1 } = e;
    return this.int({ max: t, min: a }).toString(2);
  }
  octal(e = {}) {
    typeof e == "number" && (e = { max: e });
    let { min: a = 0, max: t = 7 } = e;
    return this.int({ max: t, min: a }).toString(8);
  }
  hex(e = {}) {
    typeof e == "number" && (e = { max: e });
    let { min: a = 0, max: t = 15 } = e;
    return this.int({ max: t, min: a }).toString(16);
  }
  bigInt(e = {}) {
    (typeof e == "bigint" || typeof e == "number" || typeof e == "string" || typeof e == "boolean") && (e = { max: e });
    let a = BigInt(e.min ?? 0), t = BigInt(e.max ?? a + BigInt(999999999999999)), n = BigInt(e.multipleOf ?? 1);
    if (t < a) throw new ee(`Max ${t} should be larger than min ${a}.`);
    if (n <= BigInt(0)) throw new ee("multipleOf should be greater than 0.");
    let r = a / n + (a % n > 0n ? 1n : 0n), i = t / n - (t % n < 0n ? 1n : 0n);
    if (r === i) return r * n;
    if (i < r) throw new ee(`No suitable bigint value between ${a} and ${t} found.`);
    let o = i - r + 1n, l = BigInt(this.faker.string.numeric({ length: o.toString(10).length, allowLeadingZeros: !0 })) % o;
    return (r + l) * n;
  }
  romanNumeral(e = {}) {
    typeof e == "number" && (e = { max: e });
    let { min: a = 1, max: t = 3999 } = e;
    if (a < 1) throw new ee(`Min value ${a} should be 1 or greater.`);
    if (t > 3999) throw new ee(`Max value ${t} should be 3999 or less.`);
    let n = this.int({ min: a, max: t }), r = [["M", 1e3], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]], i = "";
    for (let [o, l] of r) i += o.repeat(Math.floor(n / l)), n %= l;
    return i;
  }
}, Ys = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
function hg(e) {
  let a = e.valueOf(), t = "";
  for (let n = 10; n > 0; n--) {
    let r = a % 32;
    t = Ys[r] + t, a = (a - r) / 32;
  }
  return t;
}
var Qt = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"], Xt = [..."abcdefghijklmnopqrstuvwxyz"], Xi = [..."0123456789"], mg = class extends st {
  fromCharacters(e, a = 1) {
    if (a = this.faker.helpers.rangeToNumber(a), a <= 0) return "";
    if (typeof e == "string" && (e = [...e]), e.length === 0) throw new ee("Unable to generate string: No characters to select from.");
    return this.faker.helpers.multiple(() => this.faker.helpers.arrayElement(e), { count: a }).join("");
  }
  alpha(e = {}) {
    typeof e == "number" && (e = { length: e });
    let a = this.faker.helpers.rangeToNumber(e.length ?? 1);
    if (a <= 0) return "";
    let { casing: t = "mixed" } = e, { exclude: n = [] } = e;
    typeof n == "string" && (n = [...n]);
    let r;
    switch (t) {
      case "upper": {
        r = [...Qt];
        break;
      }
      case "lower": {
        r = [...Xt];
        break;
      }
      case "mixed": {
        r = [...Xt, ...Qt];
        break;
      }
    }
    return r = r.filter((i) => !n.includes(i)), this.fromCharacters(r, a);
  }
  alphanumeric(e = {}) {
    typeof e == "number" && (e = { length: e });
    let a = this.faker.helpers.rangeToNumber(e.length ?? 1);
    if (a <= 0) return "";
    let { casing: t = "mixed" } = e, { exclude: n = [] } = e;
    typeof n == "string" && (n = [...n]);
    let r = [...Xi];
    switch (t) {
      case "upper": {
        r.push(...Qt);
        break;
      }
      case "lower": {
        r.push(...Xt);
        break;
      }
      case "mixed": {
        r.push(...Xt, ...Qt);
        break;
      }
    }
    return r = r.filter((i) => !n.includes(i)), this.fromCharacters(r, a);
  }
  binary(e = {}) {
    let { prefix: a = "0b" } = e, t = a;
    return t += this.fromCharacters(["0", "1"], e.length ?? 1), t;
  }
  octal(e = {}) {
    let { prefix: a = "0o" } = e, t = a;
    return t += this.fromCharacters(["0", "1", "2", "3", "4", "5", "6", "7"], e.length ?? 1), t;
  }
  hexadecimal(e = {}) {
    let { casing: a = "mixed", prefix: t = "0x" } = e, n = this.faker.helpers.rangeToNumber(e.length ?? 1);
    if (n <= 0) return t;
    let r = this.fromCharacters(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"], n);
    return a === "upper" ? r = r.toUpperCase() : a === "lower" && (r = r.toLowerCase()), `${t}${r}`;
  }
  numeric(e = {}) {
    typeof e == "number" && (e = { length: e });
    let a = this.faker.helpers.rangeToNumber(e.length ?? 1);
    if (a <= 0) return "";
    let { allowLeadingZeros: t = !0 } = e, { exclude: n = [] } = e;
    typeof n == "string" && (n = [...n]);
    let r = Xi.filter((o) => !n.includes(o));
    if (r.length === 0 || r.length === 1 && !t && r[0] === "0") throw new ee("Unable to generate numeric string, because all possible digits are excluded.");
    let i = "";
    return !t && !n.includes("0") && (i += this.faker.helpers.arrayElement(r.filter((o) => o !== "0"))), i += this.fromCharacters(r, a - i.length), i;
  }
  sample(e = 10) {
    e = this.faker.helpers.rangeToNumber(e);
    let a = { min: 33, max: 125 }, t = "";
    for (; t.length < e; ) t += String.fromCodePoint(this.faker.number.int(a));
    return t;
  }
  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll("x", () => this.faker.number.hex({ min: 0, max: 15 })).replaceAll("y", () => this.faker.number.hex({ min: 8, max: 11 }));
  }
  ulid(e = {}) {
    let { refDate: a = this.faker.defaultRefDate() } = e, t = Aa(a);
    return hg(t) + this.fromCharacters(Ys, 16);
  }
  nanoid(e = 21) {
    if (e = this.faker.helpers.rangeToNumber(e), e <= 0) return "";
    let a = [{ value: () => this.alphanumeric(1), weight: 62 }, { value: () => this.faker.helpers.arrayElement(["_", "-"]), weight: 2 }], t = "";
    for (; t.length < e; ) {
      let n = this.faker.helpers.weightedArrayElement(a);
      t += n();
    }
    return t;
  }
  symbol(e = 1) {
    return this.fromCharacters(["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"], e);
  }
}, Zs = class {
  _defaultRefDate = () => /* @__PURE__ */ new Date();
  get defaultRefDate() {
    return this._defaultRefDate;
  }
  setDefaultRefDate(e = () => /* @__PURE__ */ new Date()) {
    typeof e == "function" ? this._defaultRefDate = e : this._defaultRefDate = () => new Date(e);
  }
  _randomizer;
  datatype = new Y1(this);
  date = new $s(this);
  helpers = new Us(this);
  location = new js(this);
  number = new dg(this);
  string = new mg(this);
  constructor(e = {}) {
    let { randomizer: a, seed: t } = e;
    a != null && t != null && a.seed(t), this._randomizer = a ?? j1(t);
  }
  seed(e = Vs()) {
    return this._randomizer.seed(e), e;
  }
};
new Zs();
function pg(e) {
  let a = {};
  for (let t of e) for (let n in t) {
    let r = t[n];
    a[n] === void 0 ? a[n] = { ...r } : a[n] = { ...r, ...a[n] };
  }
  return a;
}
var Fg = class extends Ee {
  dog() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.dog);
  }
  cat() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cat);
  }
  snake() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.snake);
  }
  bear() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.bear);
  }
  lion() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.lion);
  }
  cetacean() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cetacean);
  }
  horse() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.horse);
  }
  bird() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.bird);
  }
  cow() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cow);
  }
  fish() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.fish);
  }
  crocodilia() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.crocodilia);
  }
  insect() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.insect);
  }
  rabbit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.rabbit);
  }
  rodent() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.rodent);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.type);
  }
  petName() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.pet_name);
  }
}, gg = class extends Ee {
  author() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.author);
  }
  format() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.format);
  }
  genre() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.genre);
  }
  publisher() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.publisher);
  }
  series() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.series);
  }
  title() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.title);
  }
}, yg = { 0: [[1999999, 2], [2279999, 3], [2289999, 4], [3689999, 3], [3699999, 4], [6389999, 3], [6397999, 4], [6399999, 7], [6449999, 3], [6459999, 7], [6479999, 3], [6489999, 7], [6549999, 3], [6559999, 4], [6999999, 3], [8499999, 4], [8999999, 5], [9499999, 6], [9999999, 7]], 1: [[99999, 3], [299999, 2], [349999, 3], [399999, 4], [499999, 3], [699999, 2], [999999, 4], [3979999, 3], [5499999, 4], [6499999, 5], [6799999, 4], [6859999, 5], [7139999, 4], [7169999, 3], [7319999, 4], [7399999, 7], [7749999, 5], [7753999, 7], [7763999, 5], [7764999, 7], [7769999, 5], [7782999, 7], [7899999, 5], [7999999, 4], [8004999, 5], [8049999, 5], [8379999, 5], [8384999, 7], [8671999, 5], [8675999, 4], [8697999, 5], [9159999, 6], [9165059, 7], [9168699, 6], [9169079, 7], [9195999, 6], [9196549, 7], [9729999, 6], [9877999, 4], [9911499, 6], [9911999, 7], [9989899, 6], [9999999, 7]] }, fg = class extends Ee {
  department() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.department);
  }
  productName() {
    return `${this.productAdjective()} ${this.productMaterial()} ${this.product()}`;
  }
  price(e = {}) {
    let { dec: a = 2, max: t = 1e3, min: n = 1, symbol: r = "" } = e;
    if (n < 0 || t < 0) return `${r}0`;
    if (n === t) return `${r}${n.toFixed(a)}`;
    let i = this.faker.number.float({ min: n, max: t, fractionDigits: a });
    if (a === 0) return `${r}${i.toFixed(a)}`;
    let o = i * 10 ** a % 10, l = this.faker.helpers.weightedArrayElement([{ weight: 5, value: 9 }, { weight: 3, value: 5 }, { weight: 1, value: 0 }, { weight: 1, value: this.faker.number.int({ min: 0, max: 9 }) }]), u = (1 / 10) ** a, d = o * u, c = l * u, h = i - d + c;
    return n <= h && h <= t ? `${r}${h.toFixed(a)}` : `${r}${i.toFixed(a)}`;
  }
  productAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.adjective);
  }
  productMaterial() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.material);
  }
  product() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.product);
  }
  productDescription() {
    return this.faker.helpers.fake(this.faker.definitions.commerce.product_description);
  }
  isbn(e = {}) {
    typeof e == "number" && (e = { variant: e });
    let { variant: a = 13, separator: t = "-" } = e, n = "978", [r, i] = this.faker.helpers.objectEntry(yg), o = this.faker.string.numeric(8), l = Number.parseInt(o.slice(0, -1)), u = i.find(([F]) => l <= F)?.[1];
    if (!u) throw new ee(`Unable to find a registrant length for the group ${r}`);
    let d = o.slice(0, u), c = o.slice(u), h = [n, r, d, c];
    a === 10 && h.shift();
    let m = h.join(""), p = 0;
    for (let F = 0; F < a - 1; F++) {
      let g = a === 10 ? F + 1 : F % 2 ? 3 : 1;
      p += g * Number.parseInt(m[F]);
    }
    return p = a === 10 ? p % 11 : (10 - p % 10) % 10, h.push(p === 10 ? "X" : p.toString()), h.join(t);
  }
}, bg = class extends Ee {
  name() {
    return this.faker.helpers.fake(this.faker.definitions.company.name_pattern);
  }
  catchPhrase() {
    return [this.catchPhraseAdjective(), this.catchPhraseDescriptor(), this.catchPhraseNoun()].join(" ");
  }
  buzzPhrase() {
    return [this.buzzVerb(), this.buzzAdjective(), this.buzzNoun()].join(" ");
  }
  catchPhraseAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.adjective);
  }
  catchPhraseDescriptor() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.descriptor);
  }
  catchPhraseNoun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.noun);
  }
  buzzAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_adjective);
  }
  buzzVerb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_verb);
  }
  buzzNoun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_noun);
  }
}, Cg = class extends Ee {
  column() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.column);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.type);
  }
  collation() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.collation);
  }
  engine() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.engine);
  }
  mongodbObjectId() {
    return this.faker.string.hexadecimal({ length: 24, casing: "lower", prefix: "" });
  }
}, vg = { alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], formats: [{ country: "AL", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "ALkk bbbs sssx cccc cccc cccc cccc" }, { country: "AD", total: 24, bban: [{ type: "n", count: 8 }, { type: "c", count: 12 }], format: "ADkk bbbb ssss cccc cccc cccc" }, { country: "AT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "ATkk bbbb bccc cccc cccc" }, { country: "AZ", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "AZkk bbbb cccc cccc cccc cccc cccc" }, { country: "BH", total: 22, bban: [{ type: "a", count: 4 }, { type: "c", count: 14 }], format: "BHkk bbbb cccc cccc cccc cc" }, { country: "BE", total: 16, bban: [{ type: "n", count: 3 }, { type: "n", count: 9 }], format: "BEkk bbbc cccc ccxx" }, { country: "BA", total: 20, bban: [{ type: "n", count: 6 }, { type: "n", count: 10 }], format: "BAkk bbbs sscc cccc ccxx" }, { country: "BR", total: 29, bban: [{ type: "n", count: 13 }, { type: "n", count: 10 }, { type: "a", count: 1 }, { type: "c", count: 1 }], format: "BRkk bbbb bbbb ssss sccc cccc ccct n" }, { country: "BG", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "c", count: 8 }], format: "BGkk bbbb ssss ddcc cccc cc" }, { country: "CR", total: 22, bban: [{ type: "n", count: 1 }, { type: "n", count: 3 }, { type: "n", count: 14 }], format: "CRkk xbbb cccc cccc cccc cc" }, { country: "HR", total: 21, bban: [{ type: "n", count: 7 }, { type: "n", count: 10 }], format: "HRkk bbbb bbbc cccc cccc c" }, { country: "CY", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "CYkk bbbs ssss cccc cccc cccc cccc" }, { country: "CZ", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "CZkk bbbb ssss sscc cccc cccc" }, { country: "DK", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "DKkk bbbb cccc cccc cc" }, { country: "DO", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "DOkk bbbb cccc cccc cccc cccc cccc" }, { country: "TL", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "TLkk bbbc cccc cccc cccc cxx" }, { country: "EE", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "EEkk bbss cccc cccc cccx" }, { country: "FO", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "FOkk bbbb cccc cccc cx" }, { country: "FI", total: 18, bban: [{ type: "n", count: 6 }, { type: "n", count: 8 }], format: "FIkk bbbb bbcc cccc cx" }, { country: "FR", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "FRkk bbbb bggg ggcc cccc cccc cxx" }, { country: "GE", total: 22, bban: [{ type: "a", count: 2 }, { type: "n", count: 16 }], format: "GEkk bbcc cccc cccc cccc cc" }, { country: "DE", total: 22, bban: [{ type: "n", count: 8 }, { type: "n", count: 10 }], format: "DEkk bbbb bbbb cccc cccc cc" }, { country: "GI", total: 23, bban: [{ type: "a", count: 4 }, { type: "c", count: 15 }], format: "GIkk bbbb cccc cccc cccc ccc" }, { country: "GR", total: 27, bban: [{ type: "n", count: 7 }, { type: "c", count: 16 }], format: "GRkk bbbs sssc cccc cccc cccc ccc" }, { country: "GL", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "GLkk bbbb cccc cccc cc" }, { country: "GT", total: 28, bban: [{ type: "c", count: 4 }, { type: "c", count: 4 }, { type: "c", count: 16 }], format: "GTkk bbbb mmtt cccc cccc cccc cccc" }, { country: "HU", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "HUkk bbbs sssk cccc cccc cccc cccx" }, { country: "IS", total: 26, bban: [{ type: "n", count: 6 }, { type: "n", count: 16 }], format: "ISkk bbbb sscc cccc iiii iiii ii" }, { country: "IE", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "IEkk aaaa bbbb bbcc cccc cc" }, { country: "IL", total: 23, bban: [{ type: "n", count: 6 }, { type: "n", count: 13 }], format: "ILkk bbbn nncc cccc cccc ccc" }, { country: "IT", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "ITkk xaaa aabb bbbc cccc cccc ccc" }, { country: "JO", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 18 }], format: "JOkk bbbb nnnn cccc cccc cccc cccc cc" }, { country: "KZ", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "KZkk bbbc cccc cccc cccc" }, { country: "XK", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "XKkk bbbb cccc cccc cccc" }, { country: "KW", total: 30, bban: [{ type: "a", count: 4 }, { type: "c", count: 22 }], format: "KWkk bbbb cccc cccc cccc cccc cccc cc" }, { country: "LV", total: 21, bban: [{ type: "a", count: 4 }, { type: "c", count: 13 }], format: "LVkk bbbb cccc cccc cccc c" }, { country: "LB", total: 28, bban: [{ type: "n", count: 4 }, { type: "c", count: 20 }], format: "LBkk bbbb cccc cccc cccc cccc cccc" }, { country: "LI", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "LIkk bbbb bccc cccc cccc c" }, { country: "LT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "LTkk bbbb bccc cccc cccc" }, { country: "LU", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "LUkk bbbc cccc cccc cccc" }, { country: "MK", total: 19, bban: [{ type: "n", count: 3 }, { type: "c", count: 10 }, { type: "n", count: 2 }], format: "MKkk bbbc cccc cccc cxx" }, { country: "MT", total: 31, bban: [{ type: "a", count: 4 }, { type: "n", count: 5 }, { type: "c", count: 18 }], format: "MTkk bbbb ssss sccc cccc cccc cccc ccc" }, { country: "MR", total: 27, bban: [{ type: "n", count: 10 }, { type: "n", count: 13 }], format: "MRkk bbbb bsss sscc cccc cccc cxx" }, { country: "MU", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 15 }, { type: "a", count: 3 }], format: "MUkk bbbb bbss cccc cccc cccc 000d dd" }, { country: "MC", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "MCkk bbbb bsss sscc cccc cccc cxx" }, { country: "MD", total: 24, bban: [{ type: "c", count: 2 }, { type: "c", count: 18 }], format: "MDkk bbcc cccc cccc cccc cccc" }, { country: "ME", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "MEkk bbbc cccc cccc cccc xx" }, { country: "NL", total: 18, bban: [{ type: "a", count: 4 }, { type: "n", count: 10 }], format: "NLkk bbbb cccc cccc cc" }, { country: "NO", total: 15, bban: [{ type: "n", count: 4 }, { type: "n", count: 7 }], format: "NOkk bbbb cccc ccx" }, { country: "PK", total: 24, bban: [{ type: "a", count: 4 }, { type: "n", count: 16 }], format: "PKkk bbbb cccc cccc cccc cccc" }, { country: "PS", total: 29, bban: [{ type: "a", count: 4 }, { type: "n", count: 9 }, { type: "n", count: 12 }], format: "PSkk bbbb xxxx xxxx xccc cccc cccc c" }, { country: "PL", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "PLkk bbbs sssx cccc cccc cccc cccc" }, { country: "PT", total: 25, bban: [{ type: "n", count: 8 }, { type: "n", count: 13 }], format: "PTkk bbbb ssss cccc cccc cccx x" }, { country: "QA", total: 29, bban: [{ type: "a", count: 4 }, { type: "c", count: 21 }], format: "QAkk bbbb cccc cccc cccc cccc cccc c" }, { country: "RO", total: 24, bban: [{ type: "a", count: 4 }, { type: "c", count: 16 }], format: "ROkk bbbb cccc cccc cccc cccc" }, { country: "SM", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "SMkk xaaa aabb bbbc cccc cccc ccc" }, { country: "SA", total: 24, bban: [{ type: "n", count: 2 }, { type: "c", count: 18 }], format: "SAkk bbcc cccc cccc cccc cccc" }, { country: "RS", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "RSkk bbbc cccc cccc cccc xx" }, { country: "SK", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "SKkk bbbb ssss sscc cccc cccc" }, { country: "SI", total: 19, bban: [{ type: "n", count: 5 }, { type: "n", count: 10 }], format: "SIkk bbss sccc cccc cxx" }, { country: "ES", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "ESkk bbbb gggg xxcc cccc cccc" }, { country: "SE", total: 24, bban: [{ type: "n", count: 3 }, { type: "n", count: 17 }], format: "SEkk bbbc cccc cccc cccc cccc" }, { country: "CH", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "CHkk bbbb bccc cccc cccc c" }, { country: "TN", total: 24, bban: [{ type: "n", count: 5 }, { type: "n", count: 15 }], format: "TNkk bbss sccc cccc cccc cccc" }, { country: "TR", total: 26, bban: [{ type: "n", count: 5 }, { type: "n", count: 1 }, { type: "n", count: 16 }], format: "TRkk bbbb bxcc cccc cccc cccc cc" }, { country: "AE", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "AEkk bbbc cccc cccc cccc ccc" }, { country: "GB", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "GBkk bbbb ssss sscc cccc cc" }, { country: "VG", total: 24, bban: [{ type: "a", count: 4 }, { type: "n", count: 16 }], format: "VGkk bbbb cccc cccc cccc cccc" }], iso3166: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"], mod97: (e) => {
  let a = 0;
  for (let t of e) a = (a * 10 + +t) % 97;
  return a;
}, pattern10: ["01", "02", "03", "04", "05", "06", "07", "08", "09"], pattern100: ["001", "002", "003", "004", "005", "006", "007", "008", "009"], toDigitString: (e) => e.replaceAll(/[A-Z]/gi, (a) => String((a.toUpperCase().codePointAt(0) ?? Number.NaN) - 55)) }, fa = vg;
function kg(e) {
  let a = "";
  for (let t = 0; t < e.length; t += 4) a += `${e.substring(t, t + 4)} `;
  return a.trimEnd();
}
var Ag = class extends Ee {
  accountNumber(e = {}) {
    typeof e == "number" && (e = { length: e });
    let { length: a = 8 } = e;
    return this.faker.string.numeric({ length: a, allowLeadingZeros: !0 });
  }
  accountName() {
    return [this.faker.helpers.arrayElement(this.faker.definitions.finance.account_type), "Account"].join(" ");
  }
  routingNumber() {
    let e = this.faker.string.numeric({ length: 8, allowLeadingZeros: !0 }), a = 0;
    for (let t = 0; t < e.length; t += 3) a += Number(e[t]) * 3, a += Number(e[t + 1]) * 7, a += Number(e[t + 2]) || 0;
    return `${e}${Math.ceil(a / 10) * 10 - a}`;
  }
  amount(e = {}) {
    let { autoFormat: a = !1, dec: t = 2, max: n = 1e3, min: r = 0, symbol: i = "" } = e, o = this.faker.number.float({ max: n, min: r, fractionDigits: t }), l = a ? o.toLocaleString(void 0, { minimumFractionDigits: t }) : o.toFixed(t);
    return i + l;
  }
  transactionType() {
    return this.faker.helpers.arrayElement(this.faker.definitions.finance.transaction_type);
  }
  currency() {
    return this.faker.helpers.arrayElement(this.faker.definitions.finance.currency);
  }
  currencyCode() {
    return this.currency().code;
  }
  currencyName() {
    return this.currency().name;
  }
  currencySymbol() {
    let e;
    do
      e = this.currency().symbol;
    while (e.length === 0);
    return e;
  }
  currencyNumericCode() {
    return this.currency().numericCode;
  }
  bitcoinAddress(e = {}) {
    let { type: a = this.faker.helpers.enumValue(Os), network: t = "mainnet" } = e, n = L1[a], r = n.prefix[t], i = this.faker.number.int(n.length), o = this.faker.string.alphanumeric({ length: i - r.length, casing: n.casing, exclude: n.exclude });
    return r + o;
  }
  litecoinAddress() {
    let e = this.faker.number.int({ min: 26, max: 33 });
    return this.faker.string.fromCharacters("LM3") + this.faker.string.fromCharacters("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", e - 1);
  }
  creditCardNumber(e = {}) {
    typeof e == "string" && (e = { issuer: e });
    let { issuer: a = "" } = e, t, n = this.faker.definitions.finance.credit_card, r = a.toLowerCase();
    if (r in n) t = this.faker.helpers.arrayElement(n[r]);
    else if (a.includes("#")) t = a;
    else {
      let i = this.faker.helpers.objectValue(n);
      t = this.faker.helpers.arrayElement(i);
    }
    return t = t.replaceAll("/", ""), this.faker.helpers.replaceCreditCardSymbols(t);
  }
  creditCardCVV() {
    return this.faker.string.numeric({ length: 3, allowLeadingZeros: !0 });
  }
  creditCardIssuer() {
    return this.faker.helpers.objectKey(this.faker.definitions.finance.credit_card);
  }
  pin(e = {}) {
    typeof e == "number" && (e = { length: e });
    let { length: a = 4 } = e;
    if (a < 1) throw new ee("minimum length is 1");
    return this.faker.string.numeric({ length: a, allowLeadingZeros: !0 });
  }
  ethereumAddress() {
    return this.faker.string.hexadecimal({ length: 40, casing: "lower" });
  }
  iban(e = {}) {
    let { countryCode: a, formatted: t = !1 } = e, n = a ? fa.formats.find((u) => u.country === a) : this.faker.helpers.arrayElement(fa.formats);
    if (!n) throw new ee(`Country code ${a} not supported.`);
    let r = "", i = 0;
    for (let u of n.bban) {
      let d = u.count;
      for (i += u.count; d > 0; ) u.type === "a" ? r += this.faker.helpers.arrayElement(fa.alpha) : u.type === "c" ? this.faker.datatype.boolean(0.8) ? r += this.faker.number.int(9) : r += this.faker.helpers.arrayElement(fa.alpha) : d >= 3 && this.faker.datatype.boolean(0.3) ? this.faker.datatype.boolean() ? (r += this.faker.helpers.arrayElement(fa.pattern100), d -= 2) : (r += this.faker.helpers.arrayElement(fa.pattern10), d--) : r += this.faker.number.int(9), d--;
      r = r.substring(0, i);
    }
    let o = 98 - fa.mod97(fa.toDigitString(`${r}${n.country}00`));
    o < 10 && (o = `0${o}`);
    let l = `${n.country}${o}${r}`;
    return t ? kg(l) : l;
  }
  bic(e = {}) {
    let { includeBranchCode: a = this.faker.datatype.boolean() } = e, t = this.faker.string.alpha({ length: 4, casing: "upper" }), n = this.faker.helpers.arrayElement(fa.iso3166), r = this.faker.string.alphanumeric({ length: 2, casing: "upper" }), i = a ? this.faker.datatype.boolean() ? this.faker.string.alphanumeric({ length: 3, casing: "upper" }) : "XXX" : "";
    return `${t}${n}${r}${i}`;
  }
  transactionDescription() {
    return this.faker.helpers.fake(this.faker.definitions.finance.transaction_description_pattern);
  }
};
function eo(e) {
  return e.split(" ").map((a) => a.charAt(0).toUpperCase() + a.slice(1)).join(" ");
}
var Sg = class extends Ee {
  adjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.adjective);
  }
  description() {
    return this.faker.helpers.fake(this.faker.definitions.food.description_pattern);
  }
  dish() {
    return this.faker.datatype.boolean() ? eo(this.faker.helpers.fake(this.faker.definitions.food.dish_pattern)) : eo(this.faker.helpers.arrayElement(this.faker.definitions.food.dish));
  }
  ethnicCategory() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.ethnic_category);
  }
  fruit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.fruit);
  }
  ingredient() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.ingredient);
  }
  meat() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.meat);
  }
  spice() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.spice);
  }
  vegetable() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.vegetable);
  }
}, wg = " ", Eg = class extends Ee {
  branch() {
    let e = this.faker.hacker.noun().replace(" ", "-"), a = this.faker.hacker.verb().replace(" ", "-");
    return `${e}-${a}`;
  }
  commitEntry(e = {}) {
    let { merge: a = this.faker.datatype.boolean({ probability: 0.2 }), eol: t = "CRLF", refDate: n } = e, r = [`commit ${this.faker.git.commitSha()}`];
    a && r.push(`Merge: ${this.commitSha({ length: 7 })} ${this.commitSha({ length: 7 })}`);
    let i = this.faker.person.firstName(), o = this.faker.person.lastName(), l = this.faker.person.fullName({ firstName: i, lastName: o }), u = this.faker.internet.username({ firstName: i, lastName: o }), d = this.faker.helpers.arrayElement([l, u]), c = this.faker.internet.email({ firstName: i, lastName: o });
    d = d.replaceAll(/^[.,:;"\\']|[<>\n]|[.,:;"\\']$/g, ""), r.push(`Author: ${d} <${c}>`, `Date: ${this.commitDate({ refDate: n })}`, "", `${wg.repeat(4)}${this.commitMessage()}`, "");
    let h = t === "CRLF" ? `\r
` : `
`;
    return r.join(h);
  }
  commitMessage() {
    return `${this.faker.hacker.verb()} ${this.faker.hacker.adjective()} ${this.faker.hacker.noun()}`;
  }
  commitDate(e = {}) {
    let { refDate: a = this.faker.defaultRefDate() } = e, t = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], r = this.faker.date.recent({ days: 1, refDate: a }), i = t[r.getUTCDay()], o = n[r.getUTCMonth()], l = r.getUTCDate(), u = r.getUTCHours().toString().padStart(2, "0"), d = r.getUTCMinutes().toString().padStart(2, "0"), c = r.getUTCSeconds().toString().padStart(2, "0"), h = r.getUTCFullYear(), m = this.faker.number.int({ min: -11, max: 12 }), p = Math.abs(m).toString().padStart(2, "0"), F = "00", g = m >= 0 ? "+" : "-";
    return `${i} ${o} ${l} ${u}:${d}:${c} ${h} ${g}${p}${F}`;
  }
  commitSha(e = {}) {
    let { length: a = 40 } = e;
    return this.faker.string.hexadecimal({ length: a, casing: "lower", prefix: "" });
  }
}, Dg = class extends Ee {
  abbreviation() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.abbreviation);
  }
  adjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.adjective);
  }
  noun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.noun);
  }
  verb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.verb);
  }
  ingverb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.ingverb);
  }
  phrase() {
    let e = { abbreviation: this.abbreviation, adjective: this.adjective, ingverb: this.ingverb, noun: this.noun, verb: this.verb }, a = this.faker.helpers.arrayElement(this.faker.definitions.hacker.phrase);
    return this.faker.helpers.mustache(a, e);
  }
};
function Bg(e) {
  let { deprecated: a, since: t, until: n, proposed: r } = e, i = `[@faker-js/faker]: ${a} is deprecated`;
  t && (i += ` since v${t}`), n && (i += ` and will be removed in v${n}`), r && (i += `. Please use ${r} instead`), console.warn(`${i}.`);
}
var Tg = class extends Ee {
  avatar() {
    return this.faker.helpers.arrayElement([this.personPortrait, this.avatarGitHub])();
  }
  avatarGitHub() {
    return `https://avatars.githubusercontent.com/u/${this.faker.number.int(1e8)}`;
  }
  personPortrait(e = {}) {
    let { sex: a = this.faker.person.sexType(), size: t = 512 } = e;
    return `https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/${a}/${t}/${this.faker.number.int({ min: 0, max: 99 })}.jpg`;
  }
  url(e = {}) {
    let { width: a = this.faker.number.int({ min: 1, max: 3999 }), height: t = this.faker.number.int({ min: 1, max: 3999 }) } = e;
    return this.faker.helpers.arrayElement([({ width: n, height: r }) => this.urlPicsumPhotos({ width: n, height: r, grayscale: !1, blur: 0 })])({ width: a, height: t });
  }
  urlLoremFlickr(e = {}) {
    Bg({ deprecated: "faker.image.urlLoremFlickr()", proposed: "faker.image.url()", since: "10.1.0", until: "11.0.0" });
    let { width: a = this.faker.number.int({ min: 1, max: 3999 }), height: t = this.faker.number.int({ min: 1, max: 3999 }), category: n } = e;
    return `https://loremflickr.com/${a}/${t}${n == null ? "" : `/${n}`}?lock=${this.faker.number.int()}`;
  }
  urlPicsumPhotos(e = {}) {
    let { width: a = this.faker.number.int({ min: 1, max: 3999 }), height: t = this.faker.number.int({ min: 1, max: 3999 }), grayscale: n = this.faker.datatype.boolean(), blur: r = this.faker.number.int({ max: 10 }) } = e, i = `https://picsum.photos/seed/${this.faker.string.alphanumeric({ length: { min: 5, max: 10 } })}/${a}/${t}`, o = typeof r == "number" && r >= 1 && r <= 10;
    return (n || o) && (i += "?", n && (i += "grayscale"), n && o && (i += "&"), o && (i += `blur=${r}`)), i;
  }
  dataUri(e = {}) {
    let { width: a = this.faker.number.int({ min: 1, max: 3999 }), height: t = this.faker.number.int({ min: 1, max: 3999 }), color: n = this.faker.color.rgb(), type: r = this.faker.helpers.arrayElement(["svg-uri", "svg-base64"]) } = e, i = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${a}" height="${t}"><rect width="100%" height="100%" fill="${n}"/><text x="${a / 2}" y="${t / 2}" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">${a}x${t}</text></svg>`;
    return r === "svg-uri" ? `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(i)}` : `data:image/svg+xml;base64,${Gs(i)}`;
  }
};
function Mg(e, a, t = (n) => n) {
  let n = {};
  for (let r of e) {
    let i = a(r);
    n[i] === void 0 && (n[i] = []), n[i].push(t(r));
  }
  return n;
}
var or = { fail: () => {
  throw new ee("No words found that match the given length.");
}, closest: (e, a) => {
  let t = Mg(e, (l) => l.length), n = Object.keys(t).map(Number), r = Math.min(...n), i = Math.max(...n), o = Math.min(a.min - r, i - a.max);
  return e.filter((l) => l.length === a.min - o || l.length === a.max + o);
}, shortest: (e) => {
  let a = Math.min(...e.map((t) => t.length));
  return e.filter((t) => t.length === a);
}, longest: (e) => {
  let a = Math.max(...e.map((t) => t.length));
  return e.filter((t) => t.length === a);
}, "any-length": (e) => [...e] };
function Pa(e) {
  let { wordList: a, length: t, strategy: n = "fail" } = e;
  if (t != null) {
    let r = typeof t == "number" ? (o) => o.length === t : (o) => o.length >= t.min && o.length <= t.max, i = a.filter(r);
    return i.length > 0 ? i : typeof t == "number" ? or[n](a, { min: t, max: t }) : or[n](a, t);
  } else if (n === "shortest" || n === "longest") return or[n](a);
  return [...a];
}
var Rg = class extends Ee {
  word(e = {}) {
    return typeof e == "number" && (e = { length: e }), this.faker.helpers.arrayElement(Pa({ ...e, wordList: this.faker.definitions.lorem.word }));
  }
  words(e = 3) {
    return this.faker.helpers.multiple(() => this.word(), { count: e }).join(" ");
  }
  sentence(e = { min: 3, max: 10 }) {
    let a = this.words(e);
    return `${a.charAt(0).toUpperCase() + a.substring(1)}.`;
  }
  slug(e = 3) {
    let a = this.words(e);
    return this.faker.helpers.slugify(a);
  }
  sentences(e = { min: 2, max: 6 }, a = " ") {
    return this.faker.helpers.multiple(() => this.sentence(), { count: e }).join(a);
  }
  paragraph(e = 3) {
    return this.sentences(e);
  }
  paragraphs(e = 3, a = `
`) {
    return this.faker.helpers.multiple(() => this.paragraph(), { count: e }).join(a);
  }
  text() {
    let e = ["sentence", "sentences", "paragraph", "paragraphs", "lines"], a = this.faker.helpers.arrayElement(e);
    return this[a]();
  }
  lines(e = { min: 1, max: 5 }) {
    return this.sentences(e, `
`);
  }
}, Ig = class extends Ee {
  album() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.album);
  }
  artist() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.artist);
  }
  genre() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.genre);
  }
  songName() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.song_name);
  }
}, Pg = class extends Ee {
  number(e = {}) {
    let { style: a = "human" } = e, t = this.faker.definitions.phone_number.format[a];
    if (!t) throw new Error(`No definitions for ${a} in this locale`);
    let n = this.faker.helpers.arrayElement(t);
    return qs(this.faker, n);
  }
  imei() {
    return this.faker.helpers.replaceCreditCardSymbols("##-######-######-L", "#");
  }
}, Lg = class extends Ee {
  chemicalElement() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.chemical_element);
  }
  unit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.unit);
  }
}, _g = ["video", "audio", "image", "text", "application"], Ng = ["application/pdf", "audio/mpeg", "audio/wav", "image/png", "image/jpeg", "image/gif", "video/mp4", "video/mpeg", "text/html"], xg = ["en", "wl", "ww"], ao = { index: "o", slot: "s", mac: "x", pci: "p" }, Hg = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], Wg = class extends Ee {
  fileName(e = {}) {
    let { extensionCount: a = 1 } = e, t = this.faker.word.words().toLowerCase().replaceAll(/\W/g, "_"), n = this.faker.helpers.multiple(() => this.fileExt(), { count: a }).join(".");
    return n.length === 0 ? t : `${t}.${n}`;
  }
  commonFileName(e) {
    return `${this.fileName({ extensionCount: 0 })}.${e || this.commonFileExt()}`;
  }
  mimeType() {
    let e = Object.keys(this.faker.definitions.system.mime_type);
    return this.faker.helpers.arrayElement(e);
  }
  commonFileType() {
    return this.faker.helpers.arrayElement(_g);
  }
  commonFileExt() {
    return this.fileExt(this.faker.helpers.arrayElement(Ng));
  }
  fileType() {
    let e = this.faker.definitions.system.mime_type, a = new Set(Object.keys(e).map((t) => t.split("/")[0]));
    return this.faker.helpers.arrayElement([...a]);
  }
  fileExt(e) {
    let a = this.faker.definitions.system.mime_type;
    if (typeof e == "string") return this.faker.helpers.arrayElement(a[e].extensions);
    let t = new Set(Object.values(a).flatMap(({ extensions: n }) => n));
    return this.faker.helpers.arrayElement([...t]);
  }
  directoryPath() {
    let e = this.faker.definitions.system.directory_path;
    return this.faker.helpers.arrayElement(e);
  }
  filePath() {
    return `${this.directoryPath()}/${this.fileName()}`;
  }
  semver() {
    return [this.faker.number.int(9), this.faker.number.int(20), this.faker.number.int(20)].join(".");
  }
  networkInterface(e = {}) {
    let { interfaceType: a = this.faker.helpers.arrayElement(xg), interfaceSchema: t = this.faker.helpers.objectKey(ao) } = e, n, r = "";
    switch (t) {
      case "index": {
        n = this.faker.string.numeric();
        break;
      }
      case "slot": {
        n = `${this.faker.string.numeric()}${this.faker.helpers.maybe(() => `f${this.faker.string.numeric()}`) ?? ""}${this.faker.helpers.maybe(() => `d${this.faker.string.numeric()}`) ?? ""}`;
        break;
      }
      case "mac": {
        n = this.faker.internet.mac("");
        break;
      }
      case "pci": {
        r = this.faker.helpers.maybe(() => `P${this.faker.string.numeric()}`) ?? "", n = `${this.faker.string.numeric()}s${this.faker.string.numeric()}${this.faker.helpers.maybe(() => `f${this.faker.string.numeric()}`) ?? ""}${this.faker.helpers.maybe(() => `d${this.faker.string.numeric()}`) ?? ""}`;
        break;
      }
    }
    return `${r}${a}${ao[t]}${n}`;
  }
  cron(e = {}) {
    let { includeYear: a = !1, includeNonStandard: t = !1 } = e, n = [this.faker.number.int(59), "*"], r = [this.faker.number.int(23), "*"], i = [this.faker.number.int({ min: 1, max: 31 }), "*", "?"], o = [this.faker.number.int({ min: 1, max: 12 }), "*"], l = [this.faker.number.int(6), this.faker.helpers.arrayElement(Hg), "*", "?"], u = [this.faker.number.int({ min: 1970, max: 2099 }), "*"], d = this.faker.helpers.arrayElement(n), c = this.faker.helpers.arrayElement(r), h = this.faker.helpers.arrayElement(i), m = this.faker.helpers.arrayElement(o), p = this.faker.helpers.arrayElement(l), F = this.faker.helpers.arrayElement(u), g = `${d} ${c} ${h} ${m} ${p}`;
    a && (g += ` ${F}`);
    let C = ["@annually", "@daily", "@hourly", "@monthly", "@reboot", "@weekly", "@yearly"];
    return !t || this.faker.datatype.boolean() ? g : this.faker.helpers.arrayElement(C);
  }
}, Og = class extends Ee {
  vehicle() {
    return `${this.manufacturer()} ${this.model()}`;
  }
  manufacturer() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.manufacturer);
  }
  model() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.model);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.type);
  }
  fuel() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.fuel);
  }
  vin() {
    let e = ["o", "i", "q", "O", "I", "Q"];
    return `${this.faker.string.alphanumeric({ length: 10, casing: "upper", exclude: e })}${this.faker.string.alpha({ length: 1, casing: "upper", exclude: e })}${this.faker.string.alphanumeric({ length: 1, casing: "upper", exclude: e })}${this.faker.string.numeric({ length: 5, allowLeadingZeros: !0 })}`;
  }
  color() {
    return this.faker.color.human();
  }
  vrm() {
    return `${this.faker.string.alpha({ length: 2, casing: "upper" })}${this.faker.string.numeric({ length: 2, allowLeadingZeros: !0 })}${this.faker.string.alpha({ length: 3, casing: "upper" })}`;
  }
  bicycle() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.bicycle_type);
  }
}, Gg = class extends Ee {
  adjective(e = {}) {
    return typeof e == "number" && (e = { length: e }), this.faker.helpers.arrayElement(Pa({ ...e, wordList: this.faker.definitions.word.adjective }));
  }
  adverb(e = {}) {
    return typeof e == "number" && (e = { length: e }), this.faker.helpers.arrayElement(Pa({ ...e, wordList: this.faker.definitions.word.adverb }));
  }
  conjunction(e = {}) {
    return typeof e == "number" && (e = { length: e }), this.faker.helpers.arrayElement(Pa({ ...e, wordList: this.faker.definitions.word.conjunction }));
  }
  interjection(e = {}) {
    return typeof e == "number" && (e = { length: e }), this.faker.helpers.arrayElement(Pa({ ...e, wordList: this.faker.definitions.word.interjection }));
  }
  noun(e = {}) {
    return typeof e == "number" && (e = { length: e }), this.faker.helpers.arrayElement(Pa({ ...e, wordList: this.faker.definitions.word.noun }));
  }
  preposition(e = {}) {
    return typeof e == "number" && (e = { length: e }), this.faker.helpers.arrayElement(Pa({ ...e, wordList: this.faker.definitions.word.preposition }));
  }
  verb(e = {}) {
    return typeof e == "number" && (e = { length: e }), this.faker.helpers.arrayElement(Pa({ ...e, wordList: this.faker.definitions.word.verb }));
  }
  sample(e = {}) {
    let a = this.faker.helpers.shuffle([this.adjective, this.adverb, this.conjunction, this.interjection, this.noun, this.preposition, this.verb]);
    for (let t of a) try {
      return t(e);
    } catch {
      continue;
    }
    throw new ee("No matching word data available for the current locale");
  }
  words(e = {}) {
    typeof e == "number" && (e = { count: e });
    let { count: a = { min: 1, max: 3 } } = e;
    return this.faker.helpers.multiple(() => this.sample(), { count: a }).join(" ");
  }
}, Kg = class extends Zs {
  rawDefinitions;
  definitions;
  airline = new T1(this);
  animal = new Fg(this);
  book = new gg(this);
  color = new I1(this);
  commerce = new fg(this);
  company = new bg(this);
  database = new Cg(this);
  date = new X1(this);
  finance = new Ag(this);
  food = new Sg(this);
  git = new Eg(this);
  hacker = new Dg(this);
  helpers = new ug(this);
  image = new Tg(this);
  internet = new J1(this);
  location = new cg(this);
  lorem = new Rg(this);
  music = new Ig(this);
  person = new z1(this);
  phone = new Pg(this);
  science = new Lg(this);
  system = new Wg(this);
  vehicle = new Og(this);
  word = new Gg(this);
  constructor(e) {
    super({ randomizer: e.randomizer, seed: e.seed });
    let { locale: a } = e;
    if (Array.isArray(a)) {
      if (a.length === 0) throw new ee("The locale option must contain at least one locale definition.");
      a = pg(a);
    }
    this.rawDefinitions = a, this.definitions = Z1(this.rawDefinitions);
  }
  getMetadata() {
    return this.rawDefinitions.metadata ?? {};
  }
}, Jg = ["Academy Color Encoding System (ACES)", "Adobe RGB", "Adobe Wide Gamut RGB", "British Standard Colour (BS)", "CIE 1931 XYZ", "CIELAB", "CIELUV", "CIEUVW", "CMY", "CMYK", "DCI-P3", "Display-P3", "Federal Standard 595C", "HKS", "HSL", "HSLA", "HSLuv", "HSV", "HWB", "LCh", "LMS", "Munsell Color System", "Natural Color System (NSC)", "Pantone Matching System (PMS)", "ProPhoto RGB Color Space", "RAL", "RG", "RGBA", "RGK", "Rec. 2020", "Rec. 2100", "Rec. 601", "Rec. 709", "Uniform Color Spaces (UCSs)", "YDbDr", "YIQ", "YPbPr", "sRGB", "sYCC", "scRGB", "xvYCC"], zg = { space: Jg }, Vg = zg, $g = ["ascii_bin", "ascii_general_ci", "cp1250_bin", "cp1250_general_ci", "utf8_bin", "utf8_general_ci", "utf8_unicode_ci"], qg = ["ARCHIVE", "BLACKHOLE", "CSV", "InnoDB", "MEMORY", "MyISAM"], Ug = ["bigint", "binary", "bit", "blob", "boolean", "date", "datetime", "decimal", "double", "enum", "float", "geometry", "int", "mediumint", "point", "real", "serial", "set", "smallint", "text", "time", "timestamp", "tinyint", "varchar"], jg = { collation: $g, engine: qg, type: Ug }, Yg = jg, Qs = ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Ciudad_Juarez", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kirov", "Europe/Kyiv", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"], Zg = { time_zone: Qs }, Qg = Zg, Xg = ["ADP", "AGP", "AI", "API", "ASCII", "CLI", "COM", "CSS", "DNS", "DRAM", "EXE", "FTP", "GB", "HDD", "HEX", "HTTP", "IB", "IP", "JBOD", "JSON", "OCR", "PCI", "PNG", "RAM", "RSS", "SAS", "SCSI", "SDD", "SMS", "SMTP", "SQL", "SSD", "SSL", "TCP", "THX", "TLS", "UDP", "USB", "UTF8", "VGA", "XML", "XSS"], ey = { abbreviation: Xg }, ay = ey, ty = { smiley: ["☠️", "☹️", "☺️", "❣️", "❤️", "❤️‍🔥", "❤️‍🩹", "👁️‍🗨️", "👹", "👺", "👻", "👽", "👾", "👿", "💀", "💋", "💌", "💓", "💔", "💕", "💖", "💗", "💘", "💙", "💚", "💛", "💜", "💝", "💞", "💟", "💢", "💣", "💤", "💥", "💦", "💨", "💩", "💫", "💬", "💭", "💯", "🕳️", "🖤", "🗨️", "🗯️", "😀", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", "😋", "😌", "😍", "😎", "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬", "😭", "😮", "😮‍💨", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😵‍💫", "😶", "😶‍🌫️", "😷", "😸", "😹", "😺", "😻", "😼", "😽", "😾", "😿", "🙀", "🙁", "🙂", "🙃", "🙄", "🙈", "🙉", "🙊", "🤍", "🤎", "🤐", "🤑", "🤒", "🤓", "🤔", "🤕", "🤖", "🤗", "🤠", "🤡", "🤢", "🤣", "🤤", "🤥", "🤧", "🤨", "🤩", "🤪", "🤫", "🤬", "🤭", "🤮", "🤯", "🥰", "🥱", "🥲", "🥳", "🥴", "🥵", "🥶", "🥸", "🥺", "🧐", "🧡"], body: ["☝🏻", "☝🏼", "☝🏽", "☝🏾", "☝🏿", "☝️", "✊", "✊🏻", "✊🏼", "✊🏽", "✊🏾", "✊🏿", "✋", "✋🏻", "✋🏼", "✋🏽", "✋🏾", "✋🏿", "✌🏻", "✌🏼", "✌🏽", "✌🏾", "✌🏿", "✌️", "✍🏻", "✍🏼", "✍🏽", "✍🏾", "✍🏿", "✍️", "👀", "👁️", "👂", "👂🏻", "👂🏼", "👂🏽", "👂🏾", "👂🏿", "👃", "👃🏻", "👃🏼", "👃🏽", "👃🏾", "👃🏿", "👄", "👅", "👆", "👆🏻", "👆🏼", "👆🏽", "👆🏾", "👆🏿", "👇", "👇🏻", "👇🏼", "👇🏽", "👇🏾", "👇🏿", "👈", "👈🏻", "👈🏼", "👈🏽", "👈🏾", "👈🏿", "👉", "👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿", "👊", "👊🏻", "👊🏼", "👊🏽", "👊🏾", "👊🏿", "👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿", "👌", "👌🏻", "👌🏼", "👌🏽", "👌🏾", "👌🏿", "👍", "👍🏻", "👍🏼", "👍🏽", "👍🏾", "👍🏿", "👎", "👎🏻", "👎🏼", "👎🏽", "👎🏾", "👎🏿", "👏", "👏🏻", "👏🏼", "👏🏽", "👏🏾", "👏🏿", "👐", "👐🏻", "👐🏼", "👐🏽", "👐🏾", "👐🏿", "💅", "💅🏻", "💅🏼", "💅🏽", "💅🏾", "💅🏿", "💪", "💪🏻", "💪🏼", "💪🏽", "💪🏾", "💪🏿", "🖐🏻", "🖐🏼", "🖐🏽", "🖐🏾", "🖐🏿", "🖐️", "🖕", "🖕🏻", "🖕🏼", "🖕🏽", "🖕🏾", "🖕🏿", "🖖", "🖖🏻", "🖖🏼", "🖖🏽", "🖖🏾", "🖖🏿", "🙌", "🙌🏻", "🙌🏼", "🙌🏽", "🙌🏾", "🙌🏿", "🙏", "🙏🏻", "🙏🏼", "🙏🏽", "🙏🏾", "🙏🏿", "🤌", "🤌🏻", "🤌🏼", "🤌🏽", "🤌🏾", "🤌🏿", "🤏", "🤏🏻", "🤏🏼", "🤏🏽", "🤏🏾", "🤏🏿", "🤘", "🤘🏻", "🤘🏼", "🤘🏽", "🤘🏾", "🤘🏿", "🤙", "🤙🏻", "🤙🏼", "🤙🏽", "🤙🏾", "🤙🏿", "🤚", "🤚🏻", "🤚🏼", "🤚🏽", "🤚🏾", "🤚🏿", "🤛", "🤛🏻", "🤛🏼", "🤛🏽", "🤛🏾", "🤛🏿", "🤜", "🤜🏻", "🤜🏼", "🤜🏽", "🤜🏾", "🤜🏿", "🤝", "🤞", "🤞🏻", "🤞🏼", "🤞🏽", "🤞🏾", "🤞🏿", "🤟", "🤟🏻", "🤟🏼", "🤟🏽", "🤟🏾", "🤟🏿", "🤲", "🤲🏻", "🤲🏼", "🤲🏽", "🤲🏾", "🤲🏿", "🤳", "🤳🏻", "🤳🏼", "🤳🏽", "🤳🏾", "🤳🏿", "🦴", "🦵", "🦵🏻", "🦵🏼", "🦵🏽", "🦵🏾", "🦵🏿", "🦶", "🦶🏻", "🦶🏼", "🦶🏽", "🦶🏾", "🦶🏿", "🦷", "🦻", "🦻🏻", "🦻🏼", "🦻🏽", "🦻🏾", "🦻🏿", "🦾", "🦿", "🧠", "🫀", "🫁"], person: ["🎅", "🎅🏻", "🎅🏼", "🎅🏽", "🎅🏾", "🎅🏿", "👦", "👦🏻", "👦🏼", "👦🏽", "👦🏾", "👦🏿", "👧", "👧🏻", "👧🏼", "👧🏽", "👧🏾", "👧🏿", "👨", "👨‍⚕️", "👨‍⚖️", "👨‍✈️", "👨‍🌾", "👨‍🍳", "👨‍🍼", "👨‍🎓", "👨‍🎤", "👨‍🎨", "👨‍🏫", "👨‍🏭", "👨‍💻", "👨‍💼", "👨‍🔧", "👨‍🔬", "👨‍🚀", "👨‍🚒", "👨‍🦰", "👨‍🦱", "👨‍🦲", "👨‍🦳", "👨🏻", "👨🏻‍⚕️", "👨🏻‍⚖️", "👨🏻‍✈️", "👨🏻‍🌾", "👨🏻‍🍳", "👨🏻‍🍼", "👨🏻‍🎓", "👨🏻‍🎤", "👨🏻‍🎨", "👨🏻‍🏫", "👨🏻‍🏭", "👨🏻‍💻", "👨🏻‍💼", "👨🏻‍🔧", "👨🏻‍🔬", "👨🏻‍🚀", "👨🏻‍🚒", "👨🏻‍🦰", "👨🏻‍🦱", "👨🏻‍🦲", "👨🏻‍🦳", "👨🏼", "👨🏼‍⚕️", "👨🏼‍⚖️", "👨🏼‍✈️", "👨🏼‍🌾", "👨🏼‍🍳", "👨🏼‍🍼", "👨🏼‍🎓", "👨🏼‍🎤", "👨🏼‍🎨", "👨🏼‍🏫", "👨🏼‍🏭", "👨🏼‍💻", "👨🏼‍💼", "👨🏼‍🔧", "👨🏼‍🔬", "👨🏼‍🚀", "👨🏼‍🚒", "👨🏼‍🦰", "👨🏼‍🦱", "👨🏼‍🦲", "👨🏼‍🦳", "👨🏽", "👨🏽‍⚕️", "👨🏽‍⚖️", "👨🏽‍✈️", "👨🏽‍🌾", "👨🏽‍🍳", "👨🏽‍🍼", "👨🏽‍🎓", "👨🏽‍🎤", "👨🏽‍🎨", "👨🏽‍🏫", "👨🏽‍🏭", "👨🏽‍💻", "👨🏽‍💼", "👨🏽‍🔧", "👨🏽‍🔬", "👨🏽‍🚀", "👨🏽‍🚒", "👨🏽‍🦰", "👨🏽‍🦱", "👨🏽‍🦲", "👨🏽‍🦳", "👨🏾", "👨🏾‍⚕️", "👨🏾‍⚖️", "👨🏾‍✈️", "👨🏾‍🌾", "👨🏾‍🍳", "👨🏾‍🍼", "👨🏾‍🎓", "👨🏾‍🎤", "👨🏾‍🎨", "👨🏾‍🏫", "👨🏾‍🏭", "👨🏾‍💻", "👨🏾‍💼", "👨🏾‍🔧", "👨🏾‍🔬", "👨🏾‍🚀", "👨🏾‍🚒", "👨🏾‍🦰", "👨🏾‍🦱", "👨🏾‍🦲", "👨🏾‍🦳", "👨🏿", "👨🏿‍⚕️", "👨🏿‍⚖️", "👨🏿‍✈️", "👨🏿‍🌾", "👨🏿‍🍳", "👨🏿‍🍼", "👨🏿‍🎓", "👨🏿‍🎤", "👨🏿‍🎨", "👨🏿‍🏫", "👨🏿‍🏭", "👨🏿‍💻", "👨🏿‍💼", "👨🏿‍🔧", "👨🏿‍🔬", "👨🏿‍🚀", "👨🏿‍🚒", "👨🏿‍🦰", "👨🏿‍🦱", "👨🏿‍🦲", "👨🏿‍🦳", "👩", "👩‍⚕️", "👩‍⚖️", "👩‍✈️", "👩‍🌾", "👩‍🍳", "👩‍🍼", "👩‍🎓", "👩‍🎤", "👩‍🎨", "👩‍🏫", "👩‍🏭", "👩‍💻", "👩‍💼", "👩‍🔧", "👩‍🔬", "👩‍🚀", "👩‍🚒", "👩‍🦰", "👩‍🦱", "👩‍🦲", "👩‍🦳", "👩🏻", "👩🏻‍⚕️", "👩🏻‍⚖️", "👩🏻‍✈️", "👩🏻‍🌾", "👩🏻‍🍳", "👩🏻‍🍼", "👩🏻‍🎓", "👩🏻‍🎤", "👩🏻‍🎨", "👩🏻‍🏫", "👩🏻‍🏭", "👩🏻‍💻", "👩🏻‍💼", "👩🏻‍🔧", "👩🏻‍🔬", "👩🏻‍🚀", "👩🏻‍🚒", "👩🏻‍🦰", "👩🏻‍🦱", "👩🏻‍🦲", "👩🏻‍🦳", "👩🏼", "👩🏼‍⚕️", "👩🏼‍⚖️", "👩🏼‍✈️", "👩🏼‍🌾", "👩🏼‍🍳", "👩🏼‍🍼", "👩🏼‍🎓", "👩🏼‍🎤", "👩🏼‍🎨", "👩🏼‍🏫", "👩🏼‍🏭", "👩🏼‍💻", "👩🏼‍💼", "👩🏼‍🔧", "👩🏼‍🔬", "👩🏼‍🚀", "👩🏼‍🚒", "👩🏼‍🦰", "👩🏼‍🦱", "👩🏼‍🦲", "👩🏼‍🦳", "👩🏽", "👩🏽‍⚕️", "👩🏽‍⚖️", "👩🏽‍✈️", "👩🏽‍🌾", "👩🏽‍🍳", "👩🏽‍🍼", "👩🏽‍🎓", "👩🏽‍🎤", "👩🏽‍🎨", "👩🏽‍🏫", "👩🏽‍🏭", "👩🏽‍💻", "👩🏽‍💼", "👩🏽‍🔧", "👩🏽‍🔬", "👩🏽‍🚀", "👩🏽‍🚒", "👩🏽‍🦰", "👩🏽‍🦱", "👩🏽‍🦲", "👩🏽‍🦳", "👩🏾", "👩🏾‍⚕️", "👩🏾‍⚖️", "👩🏾‍✈️", "👩🏾‍🌾", "👩🏾‍🍳", "👩🏾‍🍼", "👩🏾‍🎓", "👩🏾‍🎤", "👩🏾‍🎨", "👩🏾‍🏫", "👩🏾‍🏭", "👩🏾‍💻", "👩🏾‍💼", "👩🏾‍🔧", "👩🏾‍🔬", "👩🏾‍🚀", "👩🏾‍🚒", "👩🏾‍🦰", "👩🏾‍🦱", "👩🏾‍🦲", "👩🏾‍🦳", "👩🏿", "👩🏿‍⚕️", "👩🏿‍⚖️", "👩🏿‍✈️", "👩🏿‍🌾", "👩🏿‍🍳", "👩🏿‍🍼", "👩🏿‍🎓", "👩🏿‍🎤", "👩🏿‍🎨", "👩🏿‍🏫", "👩🏿‍🏭", "👩🏿‍💻", "👩🏿‍💼", "👩🏿‍🔧", "👩🏿‍🔬", "👩🏿‍🚀", "👩🏿‍🚒", "👩🏿‍🦰", "👩🏿‍🦱", "👩🏿‍🦲", "👩🏿‍🦳", "👮", "👮‍♀️", "👮‍♂️", "👮🏻", "👮🏻‍♀️", "👮🏻‍♂️", "👮🏼", "👮🏼‍♀️", "👮🏼‍♂️", "👮🏽", "👮🏽‍♀️", "👮🏽‍♂️", "👮🏾", "👮🏾‍♀️", "👮🏾‍♂️", "👮🏿", "👮🏿‍♀️", "👮🏿‍♂️", "👰", "👰‍♀️", "👰‍♂️", "👰🏻", "👰🏻‍♀️", "👰🏻‍♂️", "👰🏼", "👰🏼‍♀️", "👰🏼‍♂️", "👰🏽", "👰🏽‍♀️", "👰🏽‍♂️", "👰🏾", "👰🏾‍♀️", "👰🏾‍♂️", "👰🏿", "👰🏿‍♀️", "👰🏿‍♂️", "👱", "👱‍♀️", "👱‍♂️", "👱🏻", "👱🏻‍♀️", "👱🏻‍♂️", "👱🏼", "👱🏼‍♀️", "👱🏼‍♂️", "👱🏽", "👱🏽‍♀️", "👱🏽‍♂️", "👱🏾", "👱🏾‍♀️", "👱🏾‍♂️", "👱🏿", "👱🏿‍♀️", "👱🏿‍♂️", "👲", "👲🏻", "👲🏼", "👲🏽", "👲🏾", "👲🏿", "👳", "👳‍♀️", "👳‍♂️", "👳🏻", "👳🏻‍♀️", "👳🏻‍♂️", "👳🏼", "👳🏼‍♀️", "👳🏼‍♂️", "👳🏽", "👳🏽‍♀️", "👳🏽‍♂️", "👳🏾", "👳🏾‍♀️", "👳🏾‍♂️", "👳🏿", "👳🏿‍♀️", "👳🏿‍♂️", "👴", "👴🏻", "👴🏼", "👴🏽", "👴🏾", "👴🏿", "👵", "👵🏻", "👵🏼", "👵🏽", "👵🏾", "👵🏿", "👶", "👶🏻", "👶🏼", "👶🏽", "👶🏾", "👶🏿", "👷", "👷‍♀️", "👷‍♂️", "👷🏻", "👷🏻‍♀️", "👷🏻‍♂️", "👷🏼", "👷🏼‍♀️", "👷🏼‍♂️", "👷🏽", "👷🏽‍♀️", "👷🏽‍♂️", "👷🏾", "👷🏾‍♀️", "👷🏾‍♂️", "👷🏿", "👷🏿‍♀️", "👷🏿‍♂️", "👸", "👸🏻", "👸🏼", "👸🏽", "👸🏾", "👸🏿", "👼", "👼🏻", "👼🏼", "👼🏽", "👼🏾", "👼🏿", "💁", "💁‍♀️", "💁‍♂️", "💁🏻", "💁🏻‍♀️", "💁🏻‍♂️", "💁🏼", "💁🏼‍♀️", "💁🏼‍♂️", "💁🏽", "💁🏽‍♀️", "💁🏽‍♂️", "💁🏾", "💁🏾‍♀️", "💁🏾‍♂️", "💁🏿", "💁🏿‍♀️", "💁🏿‍♂️", "💂", "💂‍♀️", "💂‍♂️", "💂🏻", "💂🏻‍♀️", "💂🏻‍♂️", "💂🏼", "💂🏼‍♀️", "💂🏼‍♂️", "💂🏽", "💂🏽‍♀️", "💂🏽‍♂️", "💂🏾", "💂🏾‍♀️", "💂🏾‍♂️", "💂🏿", "💂🏿‍♀️", "💂🏿‍♂️", "💆", "💆‍♀️", "💆‍♂️", "💆🏻", "💆🏻‍♀️", "💆🏻‍♂️", "💆🏼", "💆🏼‍♀️", "💆🏼‍♂️", "💆🏽", "💆🏽‍♀️", "💆🏽‍♂️", "💆🏾", "💆🏾‍♀️", "💆🏾‍♂️", "💆🏿", "💆🏿‍♀️", "💆🏿‍♂️", "💇", "💇🏻", "💇🏼", "💇🏽", "🕵🏻", "🕵🏻‍♀️", "🕵🏻‍♂️", "🕵🏼", "🕵🏼‍♀️", "🕵🏼‍♂️", "🕵🏽", "🕵🏽‍♀️", "🕵🏽‍♂️", "🕵🏾", "🕵🏾‍♀️", "🕵🏾‍♂️", "🕵🏿", "🕵🏿‍♀️", "🕵🏿‍♂️", "🕵️", "🕵️‍♀️", "🕵️‍♂️", "🙅", "🙅‍♀️", "🙅‍♂️", "🙅🏻", "🙅🏻‍♀️", "🙅🏻‍♂️", "🙅🏼", "🙅🏼‍♀️", "🙅🏼‍♂️", "🙅🏽", "🙅🏽‍♀️", "🙅🏽‍♂️", "🙅🏾", "🙅🏾‍♀️", "🙅🏾‍♂️", "🙅🏿", "🙅🏿‍♀️", "🙅🏿‍♂️", "🙆", "🙆‍♀️", "🙆‍♂️", "🙆🏻", "🙆🏻‍♀️", "🙆🏻‍♂️", "🙆🏼", "🙆🏼‍♀️", "🙆🏼‍♂️", "🙆🏽", "🙆🏽‍♀️", "🙆🏽‍♂️", "🙆🏾", "🙆🏾‍♀️", "🙆🏾‍♂️", "🙆🏿", "🙆🏿‍♀️", "🙆🏿‍♂️", "🙇", "🙇‍♀️", "🙇‍♂️", "🙇🏻", "🙇🏻‍♀️", "🙇🏻‍♂️", "🙇🏼", "🙇🏼‍♀️", "🙇🏼‍♂️", "🙇🏽", "🙇🏽‍♀️", "🙇🏽‍♂️", "🙇🏾", "🙇🏾‍♀️", "🙇🏾‍♂️", "🙇🏿", "🙇🏿‍♀️", "🙇🏿‍♂️", "🙋", "🙋‍♀️", "🙋‍♂️", "🙋🏻", "🙋🏻‍♀️", "🙋🏻‍♂️", "🙋🏼", "🙋🏼‍♀️", "🙋🏼‍♂️", "🙋🏽", "🙋🏽‍♀️", "🙋🏽‍♂️", "🙋🏾", "🙋🏾‍♀️", "🙋🏾‍♂️", "🙋🏿", "🙋🏿‍♀️", "🙋🏿‍♂️", "🙍", "🙍‍♀️", "🙍‍♂️", "🙍🏻", "🙍🏻‍♀️", "🙍🏻‍♂️", "🙍🏼", "🙍🏼‍♀️", "🙍🏼‍♂️", "🙍🏽", "🙍🏽‍♀️", "🙍🏽‍♂️", "🙍🏾", "🙍🏾‍♀️", "🙍🏾‍♂️", "🙍🏿", "🙍🏿‍♀️", "🙍🏿‍♂️", "🙎", "🙎‍♀️", "🙎‍♂️", "🙎🏻", "🙎🏻‍♀️", "🙎🏻‍♂️", "🙎🏼", "🙎🏼‍♀️", "🙎🏼‍♂️", "🙎🏽", "🙎🏽‍♀️", "🙎🏽‍♂️", "🙎🏾", "🙎🏾‍♀️", "🙎🏾‍♂️", "🙎🏿", "🙎🏿‍♀️", "🙎🏿‍♂️", "🤦", "🤦‍♀️", "🤦‍♂️", "🤦🏻", "🤦🏻‍♀️", "🤦🏻‍♂️", "🤦🏼", "🤦🏼‍♀️", "🤦🏼‍♂️", "🤦🏽", "🤦🏽‍♀️", "🤦🏽‍♂️", "🤦🏾", "🤦🏾‍♀️", "🤦🏾‍♂️", "🤦🏿", "🤦🏿‍♀️", "🤦🏿‍♂️", "🤰", "🤰🏻", "🤰🏼", "🤰🏽", "🤰🏾", "🤰🏿", "🤱", "🤱🏻", "🤱🏼", "🤱🏽", "🤱🏾", "🤱🏿", "🤴", "🤴🏻", "🤴🏼", "🤴🏽", "🤴🏾", "🤴🏿", "🤵", "🤵‍♀️", "🤵‍♂️", "🤵🏻", "🤵🏻‍♀️", "🤵🏻‍♂️", "🤵🏼", "🤵🏼‍♀️", "🤵🏼‍♂️", "🤵🏽", "🤵🏽‍♀️", "🤵🏽‍♂️", "🤵🏾", "🤵🏾‍♀️", "🤵🏾‍♂️", "🤵🏿", "🤵🏿‍♀️", "🤵🏿‍♂️", "🤶", "🤶🏻", "🤶🏼", "🤶🏽", "🤶🏾", "🤶🏿", "🤷", "🤷‍♀️", "🤷‍♂️", "🤷🏻", "🤷🏻‍♀️", "🤷🏻‍♂️", "🤷🏼", "🤷🏼‍♀️", "🤷🏼‍♂️", "🤷🏽", "🤷🏽‍♀️", "🤷🏽‍♂️", "🤷🏾", "🤷🏾‍♀️", "🤷🏾‍♂️", "🤷🏿", "🤷🏿‍♀️", "🤷🏿‍♂️", "🥷", "🥷🏻", "🥷🏼", "🥷🏽", "🥷🏾", "🥷🏿", "🦸", "🦸‍♀️", "🦸‍♂️", "🦸🏻", "🦸🏻‍♀️", "🦸🏻‍♂️", "🦸🏼", "🦸🏼‍♀️", "🦸🏼‍♂️", "🦸🏽", "🦸🏽‍♀️", "🦸🏽‍♂️", "🦸🏾", "🦸🏾‍♀️", "🦸🏾‍♂️", "🦸🏿", "🦸🏿‍♀️", "🦸🏿‍♂️", "🦹", "🦹‍♀️", "🦹‍♂️", "🦹🏻", "🦹🏻‍♀️", "🦹🏻‍♂️", "🦹🏼", "🦹🏼‍♀️", "🦹🏼‍♂️", "🦹🏽", "🦹🏽‍♀️", "🦹🏽‍♂️", "🦹🏾", "🦹🏾‍♀️", "🦹🏾‍♂️", "🦹🏿", "🦹🏿‍♀️", "🦹🏿‍♂️", "🧏", "🧏‍♀️", "🧏‍♂️", "🧏🏻", "🧏🏻‍♀️", "🧏🏻‍♂️", "🧏🏼", "🧏🏼‍♀️", "🧏🏼‍♂️", "🧏🏽", "🧏🏽‍♀️", "🧏🏽‍♂️", "🧏🏾", "🧏🏾‍♀️", "🧏🏾‍♂️", "🧏🏿", "🧏🏿‍♀️", "🧏🏿‍♂️", "🧑", "🧑‍⚕️", "🧑‍⚖️", "🧑‍✈️", "🧑‍🌾", "🧑‍🍳", "🧑‍🍼", "🧑‍🎄", "🧑‍🎓", "🧑‍🎤", "🧑‍🎨", "🧑‍🏫", "🧑‍🏭", "🧑‍💻", "🧑‍💼", "🧑‍🔧", "🧑‍🔬", "🧑‍🚀", "🧑‍🚒", "🧑‍🦰", "🧑‍🦱", "🧑‍🦲", "🧑‍🦳", "🧑🏻", "🧑🏻‍⚕️", "🧑🏻‍⚖️", "🧑🏻‍✈️", "🧑🏻‍🌾", "🧑🏻‍🍳", "🧑🏻‍🍼", "🧑🏻‍🎄", "🧑🏻‍🎓", "🧑🏻‍🎤", "🧑🏻‍🎨", "🧑🏻‍🏫", "🧑🏻‍🏭", "🧑🏻‍💻", "🧑🏻‍💼", "🧑🏻‍🔧", "🧑🏻‍🔬", "🧑🏻‍🚀", "🧑🏻‍🚒", "🧑🏻‍🦰", "🧑🏻‍🦱", "🧑🏻‍🦲", "🧑🏻‍🦳", "🧑🏼", "🧑🏼‍⚕️", "🧑🏼‍⚖️", "🧑🏼‍✈️", "🧑🏼‍🌾", "🧑🏼‍🍳", "🧑🏼‍🍼", "🧑🏼‍🎄", "🧑🏼‍🎓", "🧑🏼‍🎤", "🧑🏼‍🎨", "🧑🏼‍🏫", "🧑🏼‍🏭", "🧑🏼‍💻", "🧑🏼‍💼", "🧑🏼‍🔧", "🧑🏼‍🔬", "🧑🏼‍🚀", "🧑🏼‍🚒", "🧑🏼‍🦰", "🧑🏼‍🦱", "🧑🏼‍🦲", "🧑🏼‍🦳", "🧑🏽", "🧑🏽‍⚕️", "🧑🏽‍⚖️", "🧑🏽‍✈️", "🧑🏽‍🌾", "🧑🏽‍🍳", "🧑🏽‍🍼", "🧑🏽‍🎄", "🧑🏽‍🎓", "🧑🏽‍🎤", "🧑🏽‍🎨", "🧑🏽‍🏫", "🧑🏽‍🏭", "🧑🏽‍💻", "🧑🏽‍💼", "🧑🏽‍🔧", "🧑🏽‍🔬", "🧑🏽‍🚀", "🧑🏽‍🚒", "🧑🏽‍🦰", "🧑🏽‍🦱", "🧑🏽‍🦲", "🧑🏽‍🦳", "🧑🏾", "🧑🏾‍⚕️", "🧑🏾‍⚖️", "🧑🏾‍✈️", "🧑🏾‍🌾", "🧑🏾‍🍳", "🧑🏾‍🍼", "🧑🏾‍🎄", "🧑🏾‍🎓", "🧑🏾‍🎤", "🧑🏾‍🎨", "🧑🏾‍🏫", "🧑🏾‍🏭", "🧑🏾‍💻", "🧑🏾‍💼", "🧑🏾‍🔧", "🧑🏾‍🔬", "🧑🏾‍🚀", "🧑🏾‍🚒", "🧑🏾‍🦰", "🧑🏾‍🦱", "🧑🏾‍🦲", "🧑🏾‍🦳", "🧑🏿", "🧑🏿‍⚕️", "🧑🏿‍⚖️", "🧑🏿‍✈️", "🧑🏿‍🌾", "🧑🏿‍🍳", "🧑🏿‍🍼", "🧑🏿‍🎄", "🧑🏿‍🎓", "🧑🏿‍🎤", "🧑🏿‍🎨", "🧑🏿‍🏫", "🧑🏿‍🏭", "🧑🏿‍💻", "🧑🏿‍💼", "🧑🏿‍🔧", "🧑🏿‍🔬", "🧑🏿‍🚀", "🧑🏿‍🚒", "🧑🏿‍🦰", "🧑🏿‍🦱", "🧑🏿‍🦲", "🧑🏿‍🦳", "🧒", "🧒🏻", "🧒🏼", "🧒🏽", "🧒🏾", "🧒🏿", "🧓", "🧓🏻", "🧓🏼", "🧓🏽", "🧓🏾", "🧓🏿", "🧔", "🧔‍♀️", "🧔‍♂️", "🧔🏻", "🧔🏻‍♀️", "🧔🏻‍♂️", "🧔🏼", "🧔🏼‍♀️", "🧔🏼‍♂️", "🧔🏽", "🧔🏽‍♀️", "🧔🏽‍♂️", "🧔🏾", "🧔🏾‍♀️", "🧔🏾‍♂️", "🧔🏿", "🧔🏿‍♀️", "🧔🏿‍♂️", "🧕", "🧕🏻", "🧕🏼", "🧕🏽", "🧕🏾", "🧕🏿", "🧙", "🧙‍♀️", "🧙‍♂️", "🧙🏻", "🧙🏻‍♀️", "🧙🏻‍♂️", "🧙🏼", "🧙🏼‍♀️", "🧙🏼‍♂️", "🧙🏽", "🧙🏽‍♀️", "🧙🏽‍♂️", "🧙🏾", "🧙🏾‍♀️", "🧙🏾‍♂️", "🧙🏿", "🧙🏿‍♀️", "🧙🏿‍♂️", "🧚", "🧚‍♀️", "🧚‍♂️", "🧚🏻", "🧚🏻‍♀️", "🧚🏻‍♂️", "🧚🏼", "🧚🏼‍♀️", "🧚🏼‍♂️", "🧚🏽", "🧚🏽‍♀️", "🧚🏽‍♂️", "🧚🏾", "🧚🏾‍♀️", "🧚🏾‍♂️", "🧚🏿", "🧚🏿‍♀️", "🧚🏿‍♂️", "🧛", "🧛‍♀️", "🧛‍♂️", "🧛🏻", "🧛🏻‍♀️", "🧛🏻‍♂️", "🧛🏼", "🧛🏼‍♀️", "🧛🏼‍♂️", "🧛🏽", "🧛🏽‍♀️", "🧛🏽‍♂️", "🧛🏾", "🧛🏾‍♀️", "🧛🏾‍♂️", "🧛🏿", "🧛🏿‍♀️", "🧛🏿‍♂️", "🧜", "🧜‍♀️", "🧜‍♂️", "🧜🏻", "🧜🏻‍♀️", "🧜🏻‍♂️", "🧜🏼", "🧜🏼‍♀️", "🧜🏼‍♂️", "🧜🏽", "🧜🏽‍♀️", "🧜🏽‍♂️", "🧜🏾", "🧜🏾‍♀️", "🧜🏾‍♂️", "🧜🏿", "🧜🏿‍♀️", "🧜🏿‍♂️", "🧝", "🧝‍♀️", "🧝‍♂️", "🧝🏻", "🧝🏻‍♀️", "🧝🏻‍♂️", "🧝🏼", "🧝🏼‍♀️", "🧝🏼‍♂️", "🧝🏽", "🧝🏽‍♀️", "🧝🏽‍♂️", "🧝🏾", "🧝🏾‍♀️", "🧝🏾‍♂️", "🧝🏿", "🧝🏿‍♀️", "🧝🏿‍♂️", "🧞", "🧞‍♀️", "🧞‍♂️", "🧟", "🧟‍♀️", "🧟‍♂️"], nature: ["☘️", "🌱", "🌲", "🌳", "🌴", "🌵", "🌷", "🌸", "🌹", "🌺", "🌻", "🌼", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🏵️", "🐀", "🐁", "🐂", "🐃", "🐄", "🐅", "🐆", "🐇", "🐈", "🐈‍⬛", "🐉", "🐊", "🐋", "🐌", "🐍", "🐎", "🐏", "🐐", "🐑", "🐒", "🐓", "🐔", "🐕", "🐕‍🦺", "🐖", "🐗", "🐘", "🐙", "🐚", "🐛", "🐜", "🐝", "🐞", "🐟", "🐠", "🐡", "🐢", "🐣", "🐤", "🐥", "🐦", "🐧", "🐨", "🐩", "🐪", "🐫", "🐬", "🐭", "🐮", "🐯", "🐰", "🐱", "🐲", "🐳", "🐴", "🐵", "🐶", "🐷", "🐸", "🐹", "🐺", "🐻", "🐻‍❄️", "🐼", "🐽", "🐾", "🐿️", "💐", "💮", "🕊️", "🕷️", "🕸️", "🥀", "🦁", "🦂", "🦃", "🦄", "🦅", "🦆", "🦇", "🦈", "🦉", "🦊", "🦋", "🦌", "🦍", "🦎", "🦏", "🦒", "🦓", "🦔", "🦕", "🦖", "🦗", "🦘", "🦙", "🦚", "🦛", "🦜", "🦝", "🦟", "🦠", "🦡", "🦢", "🦣", "🦤", "🦥", "🦦", "🦧", "🦨", "🦩", "🦫", "🦬", "🦭", "🦮", "🪰", "🪱", "🪲", "🪳", "🪴", "🪶"], food: ["☕", "🌭", "🌮", "🌯", "🌰", "🌶️", "🌽", "🍄", "🍅", "🍆", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍠", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🍼", "🍽️", "🍾", "🍿", "🎂", "🏺", "🔪", "🥂", "🥃", "🥄", "🥐", "🥑", "🥒", "🥓", "🥔", "🥕", "🥖", "🥗", "🥘", "🥙", "🥚", "🥛", "🥜", "🥝", "🥞", "🥟", "🥠", "🥡", "🥢", "🥣", "🥤", "🥥", "🥦", "🥧", "🥨", "🥩", "🥪", "🥫", "🥬", "🥭", "🥮", "🥯", "🦀", "🦐", "🦑", "🦞", "🦪", "🧀", "🧁", "🧂", "🧃", "🧄", "🧅", "🧆", "🧇", "🧈", "🧉", "🧊", "🧋", "🫐", "🫑", "🫒", "🫓", "🫔", "🫕", "🫖"], travel: ["⌚", "⌛", "⏰", "⏱️", "⏲️", "⏳", "☀️", "☁️", "☂️", "☃️", "☄️", "☔", "♨️", "⚓", "⚡", "⛄", "⛅", "⛈️", "⛩️", "⛪", "⛰️", "⛱️", "⛲", "⛴️", "⛵", "⛺", "⛽", "✈️", "❄️", "⭐", "🌀", "🌁", "🌂", "🌃", "🌄", "🌅", "🌆", "🌇", "🌈", "🌉", "🌊", "🌋", "🌌", "🌍", "🌎", "🌏", "🌐", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌝", "🌞", "🌟", "🌠", "🌡️", "🌤️", "🌥️", "🌦️", "🌧️", "🌨️", "🌩️", "🌪️", "🌫️", "🌬️", "🎠", "🎡", "🎢", "🎪", "🏍️", "🏎️", "🏔️", "🏕️", "🏖️", "🏗️", "🏘️", "🏙️", "🏚️", "🏛️", "🏜️", "🏝️", "🏞️", "🏟️", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏯", "🏰", "💈", "💒", "💧", "💺", "🔥", "🕋", "🕌", "🕍", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧", "🕰️", "🗺️", "🗻", "🗼", "🗽", "🗾", "🚀", "🚁", "🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚋", "🚌", "🚍", "🚎", "🚏", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🚝", "🚞", "🚟", "🚠", "🚡", "🚢", "🚤", "🚥", "🚦", "🚧", "🚨", "🚲", "🛎️", "🛑", "🛕", "🛖", "🛢️", "🛣️", "🛤️", "🛥️", "🛩️", "🛫", "🛬", "🛰️", "🛳️", "🛴", "🛵", "🛶", "🛸", "🛹", "🛺", "🛻", "🛼", "🦼", "🦽", "🧭", "🧱", "🧳", "🪂", "🪐", "🪨", "🪵"], activity: ["♟️", "♠️", "♣️", "♥️", "♦️", "⚽", "⚾", "⛳", "⛸️", "✨", "🀄", "🃏", "🎀", "🎁", "🎃", "🎄", "🎆", "🎇", "🎈", "🎉", "🎊", "🎋", "🎍", "🎎", "🎏", "🎐", "🎑", "🎖️", "🎗️", "🎟️", "🎣", "🎨", "🎫", "🎭", "🎮", "🎯", "🎰", "🎱", "🎲", "🎳", "🎴", "🎽", "🎾", "🎿", "🏀", "🏅", "🏆", "🏈", "🏉", "🏏", "🏐", "🏑", "🏒", "🏓", "🏸", "🔮", "🕹️", "🖼️", "🛷", "🤿", "🥅", "🥇", "🥈", "🥉", "🥊", "🥋", "🥌", "🥍", "🥎", "🥏", "🧧", "🧨", "🧩", "🧵", "🧶", "🧸", "🧿", "🪀", "🪁", "🪄", "🪅", "🪆", "🪡", "🪢"], object: ["⌨️", "☎️", "⚒️", "⚔️", "⚖️", "⚗️", "⚙️", "⚰️", "⚱️", "⛏️", "⛑️", "⛓️", "✂️", "✉️", "✏️", "✒️", "🎒", "🎓", "🎙️", "🎚️", "🎛️", "🎞️", "🎤", "🎥", "🎧", "🎩", "🎬", "🎵", "🎶", "🎷", "🎸", "🎹", "🎺", "🎻", "🎼", "🏮", "🏷️", "🏹", "👑", "👒", "👓", "👔", "👕", "👖", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "👞", "👟", "👠", "👡", "👢", "💄", "💉", "💊", "💍", "💎", "💡", "💰", "💳", "💴", "💵", "💶", "💷", "💸", "💹", "💻", "💼", "💽", "💾", "💿", "📀", "📁", "📂", "📃", "📄", "📅", "📆", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "📏", "📐", "📑", "📒", "📓", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📜", "📝", "📞", "📟", "📠", "📡", "📢", "📣", "📤", "📥", "📦", "📧", "📨", "📩", "📪", "📫", "📬", "📭", "📮", "📯", "📰", "📱", "📲", "📷", "📸", "📹", "📺", "📻", "📼", "📽️", "📿", "🔇", "🔈", "🔉", "🔊", "🔋", "🔌", "🔍", "🔎", "🔏", "🔐", "🔑", "🔒", "🔓", "🔔", "🔕", "🔖", "🔗", "🔦", "🔧", "🔨", "🔩", "🔫", "🔬", "🔭", "🕯️", "🕶️", "🖇️", "🖊️", "🖋️", "🖌️", "🖍️", "🖥️", "🖨️", "🖱️", "🖲️", "🗂️", "🗃️", "🗄️", "🗑️", "🗒️", "🗓️", "🗜️", "🗝️", "🗞️", "🗡️", "🗳️", "🗿", "🚪", "🚬", "🚽", "🚿", "🛁", "🛋️", "🛍️", "🛏️", "🛒", "🛗", "🛠️", "🛡️", "🥁", "🥻", "🥼", "🥽", "🥾", "🥿", "🦯", "🦺", "🧢", "🧣", "🧤", "🧥", "🧦", "🧪", "🧫", "🧬", "🧮", "🧯", "🧰", "🧲", "🧴", "🧷", "🧹", "🧺", "🧻", "🧼", "🧽", "🧾", "🩰", "🩱", "🩲", "🩳", "🩴", "🩸", "🩹", "🩺", "🪃", "🪑", "🪒", "🪓", "🪔", "🪕", "🪖", "🪗", "🪘", "🪙", "🪚", "🪛", "🪜", "🪝", "🪞", "🪟", "🪠", "🪣", "🪤", "🪥", "🪦", "🪧"], symbol: ["#️⃣", "*️⃣", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "©️", "®️", "‼️", "⁉️", "™️", "ℹ️", "↔️", "↕️", "↖️", "↗️", "↘️", "↙️", "↩️", "↪️", "⏏️", "⏩", "⏪", "⏫", "⏬", "⏭️", "⏮️", "⏯️", "⏸️", "⏹️", "⏺️", "Ⓜ️", "▪️", "▫️", "▶️", "◀️", "◻️", "◼️", "◽", "◾", "☑️", "☢️", "☣️", "☦️", "☪️", "☮️", "☯️", "☸️", "♀️", "♂️", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "♻️", "♾️", "♿", "⚕️", "⚛️", "⚜️", "⚠️", "⚧️", "⚪", "⚫", "⛎", "⛔", "✅", "✔️", "✖️", "✝️", "✡️", "✳️", "✴️", "❇️", "❌", "❎", "❓", "❔", "❕", "❗", "➕", "➖", "➗", "➡️", "➰", "➿", "⤴️", "⤵️", "⬅️", "⬆️", "⬇️", "⬛", "⬜", "⭕", "〰️", "〽️", "㊗️", "㊙️", "🅰️", "🅱️", "🅾️", "🅿️", "🆎", "🆑", "🆒", "🆓", "🆔", "🆕", "🆖", "🆗", "🆘", "🆙", "🆚", "🈁", "🈂️", "🈚", "🈯", "🈲", "🈳", "🈴", "🈵", "🈶", "🈷️", "🈸", "🈹", "🈺", "🉐", "🉑", "🎦", "🏧", "💠", "💱", "💲", "📛", "📳", "📴", "📵", "📶", "🔀", "🔁", "🔂", "🔃", "🔄", "🔅", "🔆", "🔘", "🔙", "🔚", "🔛", "🔜", "🔝", "🔞", "🔟", "🔠", "🔡", "🔢", "🔣", "🔤", "🔯", "🔰", "🔱", "🔲", "🔳", "🔴", "🔵", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔼", "🔽", "🕉️", "🕎", "🚫", "🚭", "🚮", "🚯", "🚰", "🚱", "🚳", "🚷", "🚸", "🚹", "🚺", "🚻", "🚼", "🚾", "🛂", "🛃", "🛄", "🛅", "🛐", "🟠", "🟡", "🟢", "🟣", "🟤", "🟥", "🟦", "🟧", "🟨", "🟩", "🟪", "🟫"], flag: ["🇦🇨", "🇦🇩", "🇦🇪", "🇦🇫", "🇦🇬", "🇦🇮", "🇦🇱", "🇦🇲", "🇦🇴", "🇦🇶", "🇦🇷", "🇦🇸", "🇦🇹", "🇦🇺", "🇦🇼", "🇦🇽", "🇦🇿", "🇧🇦", "🇧🇧", "🇧🇩", "🇧🇪", "🇧🇫", "🇧🇬", "🇧🇭", "🇧🇮", "🇧🇯", "🇧🇱", "🇧🇲", "🇧🇳", "🇧🇴", "🇧🇶", "🇧🇷", "🇧🇸", "🇧🇹", "🇧🇻", "🇧🇼", "🇧🇾", "🇧🇿", "🇨🇦", "🇨🇨", "🇨🇩", "🇨🇫", "🇨🇬", "🇨🇭", "🇨🇮", "🇨🇰", "🇨🇱", "🇨🇲", "🇨🇳", "🇨🇴", "🇨🇵", "🇨🇷", "🇨🇺", "🇨🇻", "🇨🇼", "🇨🇽", "🇨🇾", "🇨🇿", "🇩🇪", "🇩🇬", "🇩🇯", "🇩🇰", "🇩🇲", "🇩🇴", "🇩🇿", "🇪🇦", "🇪🇨", "🇪🇪", "🇪🇬", "🇪🇭", "🇪🇷", "🇪🇸", "🇪🇹", "🇪🇺", "🇫🇮", "🇫🇯", "🇫🇰", "🇫🇲", "🇫🇴", "🇫🇷", "🇬🇦", "🇬🇧", "🇬🇩", "🇬🇪", "🇬🇫", "🇬🇬", "🇬🇭", "🇬🇮", "🇬🇱", "🇬🇲", "🇬🇳", "🇬🇵", "🇬🇶", "🇬🇷", "🇬🇸", "🇬🇹", "🇬🇺", "🇬🇼", "🇬🇾", "🇭🇰", "🇭🇲", "🇭🇳", "🇭🇷", "🇭🇹", "🇭🇺", "🇮🇨", "🇮🇩", "🇮🇪", "🇮🇱", "🇮🇲", "🇮🇳", "🇮🇴", "🇮🇶", "🇮🇷", "🇮🇸", "🇮🇹", "🇯🇪", "🇯🇲", "🇯🇴", "🇯🇵", "🇰🇪", "🇰🇬", "🇰🇭", "🇰🇮", "🇰🇲", "🇰🇳", "🇰🇵", "🇰🇷", "🇰🇼", "🇰🇾", "🇰🇿", "🇱🇦", "🇱🇧", "🇱🇨", "🇱🇮", "🇱🇰", "🇱🇷", "🇱🇸", "🇱🇹", "🇱🇺", "🇱🇻", "🇱🇾", "🇲🇦", "🇲🇨", "🇲🇩", "🇲🇪", "🇲🇫", "🇲🇬", "🇲🇭", "🇲🇰", "🇲🇱", "🇲🇲", "🇲🇳", "🇲🇴", "🇲🇵", "🇲🇶", "🇲🇷", "🇲🇸", "🇲🇹", "🇲🇺", "🇲🇻", "🇲🇼", "🇲🇽", "🇲🇾", "🇲🇿", "🇳🇦", "🇳🇨", "🇳🇪", "🇳🇫", "🇳🇬", "🇳🇮", "🇳🇱", "🇳🇴", "🇳🇵", "🇳🇷", "🇳🇺", "🇳🇿", "🇴🇲", "🇵🇦", "🇵🇪", "🇵🇫", "🇵🇬", "🇵🇭", "🇵🇰", "🇵🇱", "🇵🇲", "🇵🇳", "🇵🇷", "🇵🇸", "🇵🇹", "🇵🇼", "🇵🇾", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇸", "🇷🇺", "🇷🇼", "🇸🇦", "🇸🇧", "🇸🇨", "🇸🇩", "🇸🇪", "🇸🇬", "🇸🇭", "🇸🇮", "🇸🇯", "🇸🇰", "🇸🇱", "🇸🇲", "🇸🇳", "🇸🇴", "🇸🇷", "🇸🇸", "🇸🇹", "🇸🇻", "🇸🇽", "🇸🇾", "🇸🇿", "🇹🇦", "🇹🇨", "🇹🇩", "🇹🇫", "🇹🇬", "🇹🇭", "🇹🇯", "🇹🇰", "🇹🇱", "🇹🇲", "🇹🇳", "🇹🇴", "🇹🇷", "🇹🇹", "🇹🇻", "🇹🇼", "🇹🇿", "🇺🇦", "🇺🇬", "🇺🇲", "🇺🇳", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇦", "🇻🇨", "🇻🇪", "🇻🇬", "🇻🇮", "🇻🇳", "🇻🇺", "🇼🇫", "🇼🇸", "🇽🇰", "🇾🇪", "🇾🇹", "🇿🇦", "🇿🇲", "🇿🇼", "🎌", "🏁", "🏳️", "🏳️‍⚧️", "🏳️‍🌈", "🏴", "🏴‍☠️", "🚩"] }, ny = { informational: [100, 101, 102, 103], success: [200, 201, 202, 203, 204, 205, 206, 207, 208, 226], redirection: [300, 301, 302, 303, 304, 305, 306, 307, 308], clientError: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451], serverError: [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511] }, ry = ["ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "PS256", "PS384", "PS512", "RS256", "RS384", "RS512", "none"], iy = ["FakerBot/{{system.semver}}", "Googlebot/2.1 (+http://www.google.com/bot.html)", 'Mozilla/5.0 (Linux; Android {{number.int({"min":5,"max":13})}}; {{helpers.arrayElement(["SM-G998U","SM-G998B","SM-G998N","SM-G998P","SM-T800"])}}) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Chrome/{{number.int({"min":55,"max":131})}}.{{system.semver}} Mobile Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:{{number.int({"min":75, "max":133})}}.0) Gecko/20100101 Firefox/{{number.int({"min":75, "max":133})}}.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Version/16.1 Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}}', 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_15_7) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Chrome/{{number.int({"min":55,"max":131})}}.{{system.semver}} Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}}', 'Mozilla/5.0 (Windows NT {{helpers.arrayElement(["5.1","5.2","6.0","6.1","6.2","6.3","10.0"])}}; Win64; x64) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Chrome/{{number.int({"min":55,"max":131})}}.{{system.semver}} Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}} Edg/{{number.int({"min":110,"max":131})}}.{{system.semver}}', 'Mozilla/5.0 (X11; Linux x86_64; rv:{{number.int({"min":75,"max":133})}}.0) Gecko/20100101 Firefox/{{number.int({"min":75,"max":133})}}.0', 'Mozilla/5.0 (compatible; MSIE {{number.int({"min":6,"max":10})}}.0; Windows NT {{helpers.arrayElement(["5.1","5.2","6.0","6.1","6.2","6.3","10.0"])}}; Trident/{{number.int({"min":4,"max":7})}}.0)', 'Mozilla/5.0 (iPhone; CPU iPhone OS {{number.int({"min":10,"max":18})}}_{{number.int({"min":0,"max":4})}} like Mac OS X) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Version/{{number.int({"min":10,"max":18})}}_{{number.int({"min":0,"max":4})}} Mobile/15E148 Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}'], oy = { emoji: ty, http_status_code: ny, jwt_algorithm: ry, user_agent_pattern: iy }, sy = oy, ly = [{ alpha2: "AD", alpha3: "AND", numeric: "020" }, { alpha2: "AE", alpha3: "ARE", numeric: "784" }, { alpha2: "AF", alpha3: "AFG", numeric: "004" }, { alpha2: "AG", alpha3: "ATG", numeric: "028" }, { alpha2: "AI", alpha3: "AIA", numeric: "660" }, { alpha2: "AL", alpha3: "ALB", numeric: "008" }, { alpha2: "AM", alpha3: "ARM", numeric: "051" }, { alpha2: "AO", alpha3: "AGO", numeric: "024" }, { alpha2: "AQ", alpha3: "ATA", numeric: "010" }, { alpha2: "AR", alpha3: "ARG", numeric: "032" }, { alpha2: "AS", alpha3: "ASM", numeric: "016" }, { alpha2: "AT", alpha3: "AUT", numeric: "040" }, { alpha2: "AU", alpha3: "AUS", numeric: "036" }, { alpha2: "AW", alpha3: "ABW", numeric: "533" }, { alpha2: "AX", alpha3: "ALA", numeric: "248" }, { alpha2: "AZ", alpha3: "AZE", numeric: "031" }, { alpha2: "BA", alpha3: "BIH", numeric: "070" }, { alpha2: "BB", alpha3: "BRB", numeric: "052" }, { alpha2: "BD", alpha3: "BGD", numeric: "050" }, { alpha2: "BE", alpha3: "BEL", numeric: "056" }, { alpha2: "BF", alpha3: "BFA", numeric: "854" }, { alpha2: "BG", alpha3: "BGR", numeric: "100" }, { alpha2: "BH", alpha3: "BHR", numeric: "048" }, { alpha2: "BI", alpha3: "BDI", numeric: "108" }, { alpha2: "BJ", alpha3: "BEN", numeric: "204" }, { alpha2: "BL", alpha3: "BLM", numeric: "652" }, { alpha2: "BM", alpha3: "BMU", numeric: "060" }, { alpha2: "BN", alpha3: "BRN", numeric: "096" }, { alpha2: "BO", alpha3: "BOL", numeric: "068" }, { alpha2: "BQ", alpha3: "BES", numeric: "535" }, { alpha2: "BR", alpha3: "BRA", numeric: "076" }, { alpha2: "BS", alpha3: "BHS", numeric: "044" }, { alpha2: "BT", alpha3: "BTN", numeric: "064" }, { alpha2: "BV", alpha3: "BVT", numeric: "074" }, { alpha2: "BW", alpha3: "BWA", numeric: "072" }, { alpha2: "BY", alpha3: "BLR", numeric: "112" }, { alpha2: "BZ", alpha3: "BLZ", numeric: "084" }, { alpha2: "CA", alpha3: "CAN", numeric: "124" }, { alpha2: "CC", alpha3: "CCK", numeric: "166" }, { alpha2: "CD", alpha3: "COD", numeric: "180" }, { alpha2: "CF", alpha3: "CAF", numeric: "140" }, { alpha2: "CG", alpha3: "COG", numeric: "178" }, { alpha2: "CH", alpha3: "CHE", numeric: "756" }, { alpha2: "CI", alpha3: "CIV", numeric: "384" }, { alpha2: "CK", alpha3: "COK", numeric: "184" }, { alpha2: "CL", alpha3: "CHL", numeric: "152" }, { alpha2: "CM", alpha3: "CMR", numeric: "120" }, { alpha2: "CN", alpha3: "CHN", numeric: "156" }, { alpha2: "CO", alpha3: "COL", numeric: "170" }, { alpha2: "CR", alpha3: "CRI", numeric: "188" }, { alpha2: "CU", alpha3: "CUB", numeric: "192" }, { alpha2: "CV", alpha3: "CPV", numeric: "132" }, { alpha2: "CW", alpha3: "CUW", numeric: "531" }, { alpha2: "CX", alpha3: "CXR", numeric: "162" }, { alpha2: "CY", alpha3: "CYP", numeric: "196" }, { alpha2: "CZ", alpha3: "CZE", numeric: "203" }, { alpha2: "DE", alpha3: "DEU", numeric: "276" }, { alpha2: "DJ", alpha3: "DJI", numeric: "262" }, { alpha2: "DK", alpha3: "DNK", numeric: "208" }, { alpha2: "DM", alpha3: "DMA", numeric: "212" }, { alpha2: "DO", alpha3: "DOM", numeric: "214" }, { alpha2: "DZ", alpha3: "DZA", numeric: "012" }, { alpha2: "EC", alpha3: "ECU", numeric: "218" }, { alpha2: "EE", alpha3: "EST", numeric: "233" }, { alpha2: "EG", alpha3: "EGY", numeric: "818" }, { alpha2: "EH", alpha3: "ESH", numeric: "732" }, { alpha2: "ER", alpha3: "ERI", numeric: "232" }, { alpha2: "ES", alpha3: "ESP", numeric: "724" }, { alpha2: "ET", alpha3: "ETH", numeric: "231" }, { alpha2: "FI", alpha3: "FIN", numeric: "246" }, { alpha2: "FJ", alpha3: "FJI", numeric: "242" }, { alpha2: "FK", alpha3: "FLK", numeric: "238" }, { alpha2: "FM", alpha3: "FSM", numeric: "583" }, { alpha2: "FO", alpha3: "FRO", numeric: "234" }, { alpha2: "FR", alpha3: "FRA", numeric: "250" }, { alpha2: "GA", alpha3: "GAB", numeric: "266" }, { alpha2: "GB", alpha3: "GBR", numeric: "826" }, { alpha2: "GD", alpha3: "GRD", numeric: "308" }, { alpha2: "GE", alpha3: "GEO", numeric: "268" }, { alpha2: "GF", alpha3: "GUF", numeric: "254" }, { alpha2: "GG", alpha3: "GGY", numeric: "831" }, { alpha2: "GH", alpha3: "GHA", numeric: "288" }, { alpha2: "GI", alpha3: "GIB", numeric: "292" }, { alpha2: "GL", alpha3: "GRL", numeric: "304" }, { alpha2: "GM", alpha3: "GMB", numeric: "270" }, { alpha2: "GN", alpha3: "GIN", numeric: "324" }, { alpha2: "GP", alpha3: "GLP", numeric: "312" }, { alpha2: "GQ", alpha3: "GNQ", numeric: "226" }, { alpha2: "GR", alpha3: "GRC", numeric: "300" }, { alpha2: "GS", alpha3: "SGS", numeric: "239" }, { alpha2: "GT", alpha3: "GTM", numeric: "320" }, { alpha2: "GU", alpha3: "GUM", numeric: "316" }, { alpha2: "GW", alpha3: "GNB", numeric: "624" }, { alpha2: "GY", alpha3: "GUY", numeric: "328" }, { alpha2: "HK", alpha3: "HKG", numeric: "344" }, { alpha2: "HM", alpha3: "HMD", numeric: "334" }, { alpha2: "HN", alpha3: "HND", numeric: "340" }, { alpha2: "HR", alpha3: "HRV", numeric: "191" }, { alpha2: "HT", alpha3: "HTI", numeric: "332" }, { alpha2: "HU", alpha3: "HUN", numeric: "348" }, { alpha2: "ID", alpha3: "IDN", numeric: "360" }, { alpha2: "IE", alpha3: "IRL", numeric: "372" }, { alpha2: "IL", alpha3: "ISR", numeric: "376" }, { alpha2: "IM", alpha3: "IMN", numeric: "833" }, { alpha2: "IN", alpha3: "IND", numeric: "356" }, { alpha2: "IO", alpha3: "IOT", numeric: "086" }, { alpha2: "IQ", alpha3: "IRQ", numeric: "368" }, { alpha2: "IR", alpha3: "IRN", numeric: "364" }, { alpha2: "IS", alpha3: "ISL", numeric: "352" }, { alpha2: "IT", alpha3: "ITA", numeric: "380" }, { alpha2: "JE", alpha3: "JEY", numeric: "832" }, { alpha2: "JM", alpha3: "JAM", numeric: "388" }, { alpha2: "JO", alpha3: "JOR", numeric: "400" }, { alpha2: "JP", alpha3: "JPN", numeric: "392" }, { alpha2: "KE", alpha3: "KEN", numeric: "404" }, { alpha2: "KG", alpha3: "KGZ", numeric: "417" }, { alpha2: "KH", alpha3: "KHM", numeric: "116" }, { alpha2: "KI", alpha3: "KIR", numeric: "296" }, { alpha2: "KM", alpha3: "COM", numeric: "174" }, { alpha2: "KN", alpha3: "KNA", numeric: "659" }, { alpha2: "KP", alpha3: "PRK", numeric: "408" }, { alpha2: "KR", alpha3: "KOR", numeric: "410" }, { alpha2: "KW", alpha3: "KWT", numeric: "414" }, { alpha2: "KY", alpha3: "CYM", numeric: "136" }, { alpha2: "KZ", alpha3: "KAZ", numeric: "398" }, { alpha2: "LA", alpha3: "LAO", numeric: "418" }, { alpha2: "LB", alpha3: "LBN", numeric: "422" }, { alpha2: "LC", alpha3: "LCA", numeric: "662" }, { alpha2: "LI", alpha3: "LIE", numeric: "438" }, { alpha2: "LK", alpha3: "LKA", numeric: "144" }, { alpha2: "LR", alpha3: "LBR", numeric: "430" }, { alpha2: "LS", alpha3: "LSO", numeric: "426" }, { alpha2: "LT", alpha3: "LTU", numeric: "440" }, { alpha2: "LU", alpha3: "LUX", numeric: "442" }, { alpha2: "LV", alpha3: "LVA", numeric: "428" }, { alpha2: "LY", alpha3: "LBY", numeric: "434" }, { alpha2: "MA", alpha3: "MAR", numeric: "504" }, { alpha2: "MC", alpha3: "MCO", numeric: "492" }, { alpha2: "MD", alpha3: "MDA", numeric: "498" }, { alpha2: "ME", alpha3: "MNE", numeric: "499" }, { alpha2: "MF", alpha3: "MAF", numeric: "663" }, { alpha2: "MG", alpha3: "MDG", numeric: "450" }, { alpha2: "MH", alpha3: "MHL", numeric: "584" }, { alpha2: "MK", alpha3: "MKD", numeric: "807" }, { alpha2: "ML", alpha3: "MLI", numeric: "466" }, { alpha2: "MM", alpha3: "MMR", numeric: "104" }, { alpha2: "MN", alpha3: "MNG", numeric: "496" }, { alpha2: "MO", alpha3: "MAC", numeric: "446" }, { alpha2: "MP", alpha3: "MNP", numeric: "580" }, { alpha2: "MQ", alpha3: "MTQ", numeric: "474" }, { alpha2: "MR", alpha3: "MRT", numeric: "478" }, { alpha2: "MS", alpha3: "MSR", numeric: "500" }, { alpha2: "MT", alpha3: "MLT", numeric: "470" }, { alpha2: "MU", alpha3: "MUS", numeric: "480" }, { alpha2: "MV", alpha3: "MDV", numeric: "462" }, { alpha2: "MW", alpha3: "MWI", numeric: "454" }, { alpha2: "MX", alpha3: "MEX", numeric: "484" }, { alpha2: "MY", alpha3: "MYS", numeric: "458" }, { alpha2: "MZ", alpha3: "MOZ", numeric: "508" }, { alpha2: "NA", alpha3: "NAM", numeric: "516" }, { alpha2: "NC", alpha3: "NCL", numeric: "540" }, { alpha2: "NE", alpha3: "NER", numeric: "562" }, { alpha2: "NF", alpha3: "NFK", numeric: "574" }, { alpha2: "NG", alpha3: "NGA", numeric: "566" }, { alpha2: "NI", alpha3: "NIC", numeric: "558" }, { alpha2: "NL", alpha3: "NLD", numeric: "528" }, { alpha2: "NO", alpha3: "NOR", numeric: "578" }, { alpha2: "NP", alpha3: "NPL", numeric: "524" }, { alpha2: "NR", alpha3: "NRU", numeric: "520" }, { alpha2: "NU", alpha3: "NIU", numeric: "570" }, { alpha2: "NZ", alpha3: "NZL", numeric: "554" }, { alpha2: "OM", alpha3: "OMN", numeric: "512" }, { alpha2: "PA", alpha3: "PAN", numeric: "591" }, { alpha2: "PE", alpha3: "PER", numeric: "604" }, { alpha2: "PF", alpha3: "PYF", numeric: "258" }, { alpha2: "PG", alpha3: "PNG", numeric: "598" }, { alpha2: "PH", alpha3: "PHL", numeric: "608" }, { alpha2: "PK", alpha3: "PAK", numeric: "586" }, { alpha2: "PL", alpha3: "POL", numeric: "616" }, { alpha2: "PM", alpha3: "SPM", numeric: "666" }, { alpha2: "PN", alpha3: "PCN", numeric: "612" }, { alpha2: "PR", alpha3: "PRI", numeric: "630" }, { alpha2: "PS", alpha3: "PSE", numeric: "275" }, { alpha2: "PT", alpha3: "PRT", numeric: "620" }, { alpha2: "PW", alpha3: "PLW", numeric: "585" }, { alpha2: "PY", alpha3: "PRY", numeric: "600" }, { alpha2: "QA", alpha3: "QAT", numeric: "634" }, { alpha2: "RE", alpha3: "REU", numeric: "638" }, { alpha2: "RO", alpha3: "ROU", numeric: "642" }, { alpha2: "RS", alpha3: "SRB", numeric: "688" }, { alpha2: "RU", alpha3: "RUS", numeric: "643" }, { alpha2: "RW", alpha3: "RWA", numeric: "646" }, { alpha2: "SA", alpha3: "SAU", numeric: "682" }, { alpha2: "SB", alpha3: "SLB", numeric: "090" }, { alpha2: "SC", alpha3: "SYC", numeric: "690" }, { alpha2: "SD", alpha3: "SDN", numeric: "729" }, { alpha2: "SE", alpha3: "SWE", numeric: "752" }, { alpha2: "SG", alpha3: "SGP", numeric: "702" }, { alpha2: "SH", alpha3: "SHN", numeric: "654" }, { alpha2: "SI", alpha3: "SVN", numeric: "705" }, { alpha2: "SJ", alpha3: "SJM", numeric: "744" }, { alpha2: "SK", alpha3: "SVK", numeric: "703" }, { alpha2: "SL", alpha3: "SLE", numeric: "694" }, { alpha2: "SM", alpha3: "SMR", numeric: "674" }, { alpha2: "SN", alpha3: "SEN", numeric: "686" }, { alpha2: "SO", alpha3: "SOM", numeric: "706" }, { alpha2: "SR", alpha3: "SUR", numeric: "740" }, { alpha2: "SS", alpha3: "SSD", numeric: "728" }, { alpha2: "ST", alpha3: "STP", numeric: "678" }, { alpha2: "SV", alpha3: "SLV", numeric: "222" }, { alpha2: "SX", alpha3: "SXM", numeric: "534" }, { alpha2: "SY", alpha3: "SYR", numeric: "760" }, { alpha2: "SZ", alpha3: "SWZ", numeric: "748" }, { alpha2: "TC", alpha3: "TCA", numeric: "796" }, { alpha2: "TD", alpha3: "TCD", numeric: "148" }, { alpha2: "TF", alpha3: "ATF", numeric: "260" }, { alpha2: "TG", alpha3: "TGO", numeric: "768" }, { alpha2: "TH", alpha3: "THA", numeric: "764" }, { alpha2: "TJ", alpha3: "TJK", numeric: "762" }, { alpha2: "TK", alpha3: "TKL", numeric: "772" }, { alpha2: "TL", alpha3: "TLS", numeric: "626" }, { alpha2: "TM", alpha3: "TKM", numeric: "795" }, { alpha2: "TN", alpha3: "TUN", numeric: "788" }, { alpha2: "TO", alpha3: "TON", numeric: "776" }, { alpha2: "TR", alpha3: "TUR", numeric: "792" }, { alpha2: "TT", alpha3: "TTO", numeric: "780" }, { alpha2: "TV", alpha3: "TUV", numeric: "798" }, { alpha2: "TW", alpha3: "TWN", numeric: "158" }, { alpha2: "TZ", alpha3: "TZA", numeric: "834" }, { alpha2: "UA", alpha3: "UKR", numeric: "804" }, { alpha2: "UG", alpha3: "UGA", numeric: "800" }, { alpha2: "UM", alpha3: "UMI", numeric: "581" }, { alpha2: "US", alpha3: "USA", numeric: "840" }, { alpha2: "UY", alpha3: "URY", numeric: "858" }, { alpha2: "UZ", alpha3: "UZB", numeric: "860" }, { alpha2: "VA", alpha3: "VAT", numeric: "336" }, { alpha2: "VC", alpha3: "VCT", numeric: "670" }, { alpha2: "VE", alpha3: "VEN", numeric: "862" }, { alpha2: "VG", alpha3: "VGB", numeric: "092" }, { alpha2: "VI", alpha3: "VIR", numeric: "850" }, { alpha2: "VN", alpha3: "VNM", numeric: "704" }, { alpha2: "VU", alpha3: "VUT", numeric: "548" }, { alpha2: "WF", alpha3: "WLF", numeric: "876" }, { alpha2: "WS", alpha3: "WSM", numeric: "882" }, { alpha2: "YE", alpha3: "YEM", numeric: "887" }, { alpha2: "YT", alpha3: "MYT", numeric: "175" }, { alpha2: "ZA", alpha3: "ZAF", numeric: "710" }, { alpha2: "ZM", alpha3: "ZMB", numeric: "894" }, { alpha2: "ZW", alpha3: "ZWE", numeric: "716" }], uy = { country_code: ly, time_zone: Qs }, cy = uy, dy = { title: "Base", code: "base" }, hy = dy, my = ["/Applications", "/bin", "/boot", "/boot/defaults", "/dev", "/etc", "/etc/defaults", "/etc/mail", "/etc/namedb", "/etc/periodic", "/etc/ppp", "/home", "/home/user", "/home/user/dir", "/lib", "/Library", "/lost+found", "/media", "/mnt", "/net", "/Network", "/opt", "/opt/bin", "/opt/include", "/opt/lib", "/opt/sbin", "/opt/share", "/private", "/private/tmp", "/private/var", "/proc", "/rescue", "/root", "/sbin", "/selinux", "/srv", "/sys", "/System", "/tmp", "/Users", "/usr", "/usr/X11R6", "/usr/bin", "/usr/include", "/usr/lib", "/usr/libdata", "/usr/libexec", "/usr/local/bin", "/usr/local/src", "/usr/obj", "/usr/ports", "/usr/sbin", "/usr/share", "/usr/src", "/var", "/var/log", "/var/mail", "/var/spool", "/var/tmp", "/var/yp"], py = { "application/epub+zip": { extensions: ["epub"] }, "application/gzip": { extensions: ["gz"] }, "application/java-archive": { extensions: ["jar", "war", "ear"] }, "application/json": { extensions: ["json", "map"] }, "application/ld+json": { extensions: ["jsonld"] }, "application/msword": { extensions: ["doc", "dot"] }, "application/octet-stream": { extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"] }, "application/ogg": { extensions: ["ogx"] }, "application/pdf": { extensions: ["pdf"] }, "application/rtf": { extensions: ["rtf"] }, "application/vnd.amazon.ebook": { extensions: ["azw"] }, "application/vnd.apple.installer+xml": { extensions: ["mpkg"] }, "application/vnd.mozilla.xul+xml": { extensions: ["xul"] }, "application/vnd.ms-excel": { extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"] }, "application/vnd.ms-fontobject": { extensions: ["eot"] }, "application/vnd.ms-powerpoint": { extensions: ["ppt", "pps", "pot"] }, "application/vnd.oasis.opendocument.presentation": { extensions: ["odp"] }, "application/vnd.oasis.opendocument.spreadsheet": { extensions: ["ods"] }, "application/vnd.oasis.opendocument.text": { extensions: ["odt"] }, "application/vnd.openxmlformats-officedocument.presentationml.presentation": { extensions: ["pptx"] }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { extensions: ["xlsx"] }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { extensions: ["docx"] }, "application/vnd.rar": { extensions: ["rar"] }, "application/vnd.visio": { extensions: ["vsd", "vst", "vss", "vsw"] }, "application/x-7z-compressed": { extensions: ["7z"] }, "application/x-abiword": { extensions: ["abw"] }, "application/x-bzip": { extensions: ["bz"] }, "application/x-bzip2": { extensions: ["bz2", "boz"] }, "application/x-csh": { extensions: ["csh"] }, "application/x-freearc": { extensions: ["arc"] }, "application/x-httpd-php": { extensions: ["php"] }, "application/x-sh": { extensions: ["sh"] }, "application/x-tar": { extensions: ["tar"] }, "application/xhtml+xml": { extensions: ["xhtml", "xht"] }, "application/xml": { extensions: ["xml", "xsl", "xsd", "rng"] }, "application/zip": { extensions: ["zip"] }, "audio/3gpp": { extensions: ["3gpp"] }, "audio/3gpp2": { extensions: ["3g2"] }, "audio/aac": { extensions: ["aac"] }, "audio/midi": { extensions: ["mid", "midi", "kar", "rmi"] }, "audio/mpeg": { extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] }, "audio/ogg": { extensions: ["oga", "ogg", "spx", "opus"] }, "audio/opus": { extensions: ["opus"] }, "audio/wav": { extensions: ["wav"] }, "audio/webm": { extensions: ["weba"] }, "font/otf": { extensions: ["otf"] }, "font/ttf": { extensions: ["ttf"] }, "font/woff": { extensions: ["woff"] }, "font/woff2": { extensions: ["woff2"] }, "image/avif": { extensions: ["avif"] }, "image/bmp": { extensions: ["bmp"] }, "image/gif": { extensions: ["gif"] }, "image/jpeg": { extensions: ["jpeg", "jpg", "jpe"] }, "image/png": { extensions: ["png"] }, "image/svg+xml": { extensions: ["svg", "svgz"] }, "image/tiff": { extensions: ["tif", "tiff"] }, "image/vnd.microsoft.icon": { extensions: ["ico"] }, "image/webp": { extensions: ["webp"] }, "text/calendar": { extensions: ["ics", "ifb"] }, "text/css": { extensions: ["css"] }, "text/csv": { extensions: ["csv"] }, "text/html": { extensions: ["html", "htm", "shtml"] }, "text/javascript": { extensions: ["js", "mjs"] }, "text/plain": { extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"] }, "video/3gpp": { extensions: ["3gp", "3gpp"] }, "video/3gpp2": { extensions: ["3g2"] }, "video/mp2t": { extensions: ["ts"] }, "video/mp4": { extensions: ["mp4", "mp4v", "mpg4"] }, "video/mpeg": { extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"] }, "video/ogg": { extensions: ["ogv"] }, "video/webm": { extensions: ["webm"] }, "video/x-msvideo": { extensions: ["avi"] } }, Fy = { directory_path: my, mime_type: py }, gy = Fy, yy = { color: Vg, database: Yg, date: Qg, hacker: ay, internet: sy, location: cy, metadata: hy, system: gy }, fy = yy, pe = new Kg({ locale: [A1, fy] });
const by = 3, Xs = {
  salesOverTime: {
    name: "Sales Over Time",
    description: "Monthly sales data with multiple metrics",
    data: [
      { month: "Jan", sales: 4e3, revenue: 2400, profit: 1600 },
      { month: "Feb", sales: 3e3, revenue: 1398, profit: 1200 },
      { month: "Mar", sales: 2e3, revenue: 9800, profit: 7800 },
      { month: "Apr", sales: 2780, revenue: 3908, profit: 1128 },
      { month: "May", sales: 1890, revenue: 4800, profit: 2910 },
      { month: "Jun", sales: 2390, revenue: 3800, profit: 1410 }
    ],
    series: [
      { type: "bar", dataKey: "sales", name: "Sales", color: "blue" },
      { type: "bar", dataKey: "revenue", name: "Revenue", color: "green" },
      { type: "bar", dataKey: "profit", name: "Profit", color: "orange" }
    ],
    xAxis: "month"
  },
  userGrowth: {
    name: "User Growth",
    description: "User growth over quarters",
    data: [
      { quarter: "Q1 2024", users: 1200, active: 980, premium: 450 },
      { quarter: "Q2 2024", users: 1850, active: 1520, premium: 720 },
      { quarter: "Q3 2024", users: 2400, active: 2100, premium: 1050 },
      { quarter: "Q4 2024", users: 3100, active: 2800, premium: 1500 }
    ],
    series: [
      { type: "area", dataKey: "users", name: "Total Users", color: "purple" },
      { type: "area", dataKey: "active", name: "Active Users", color: "blue" },
      { type: "line", dataKey: "premium", name: "Premium Users", color: "gold" }
    ],
    xAxis: "quarter"
  },
  performanceMetrics: {
    name: "Performance Metrics",
    description: "System performance over time",
    data: [
      { time: "00:00", cpu: 45, memory: 62, network: 23 },
      { time: "04:00", cpu: 32, memory: 58, network: 18 },
      { time: "08:00", cpu: 78, memory: 75, network: 56 },
      { time: "12:00", cpu: 85, memory: 82, network: 68 },
      { time: "16:00", cpu: 72, memory: 70, network: 52 },
      { time: "20:00", cpu: 56, memory: 65, network: 34 }
    ],
    series: [
      { type: "line", dataKey: "cpu", name: "CPU %", color: "red", curveType: "monotone" },
      { type: "line", dataKey: "memory", name: "Memory %", color: "blue", curveType: "monotone" },
      {
        type: "line",
        dataKey: "network",
        name: "Network %",
        color: "green",
        curveType: "monotone"
      }
    ],
    xAxis: "time"
  },
  incidentsByType: {
    name: "Incidents by Type",
    description: "Incident breakdown by category",
    data: [
      { category: "Hardware", p1: 5, p2: 12, p3: 28 },
      { category: "Software", p1: 8, p2: 15, p3: 35 },
      { category: "Network", p1: 3, p2: 7, p3: 18 },
      { category: "Security", p1: 2, p2: 5, p3: 9 }
    ],
    series: [
      { type: "bar", dataKey: "p1", name: "P1 (Critical)", color: "red", stack: "priority" },
      { type: "bar", dataKey: "p2", name: "P2 (High)", color: "orange", stack: "priority" },
      { type: "bar", dataKey: "p3", name: "P3 (Medium)", color: "yellow", stack: "priority" }
    ],
    xAxis: "category"
  },
  departmentBudget: {
    name: "Department Budget",
    description: "Budget allocation and spending by department",
    data: [
      { dept: "Engineering", allocated: 5e5, spent: 45e4 },
      { dept: "Marketing", allocated: 3e5, spent: 285e3 },
      { dept: "Sales", allocated: 4e5, spent: 42e4 },
      { dept: "HR", allocated: 2e5, spent: 18e4 },
      { dept: "Operations", allocated: 35e4, spent: 34e4 }
    ],
    series: [
      { type: "bar", dataKey: "allocated", name: "Allocated", color: "blue" },
      { type: "bar", dataKey: "spent", name: "Spent", color: "green" }
    ],
    xAxis: "dept"
  },
  marketShare: {
    name: "Market Share",
    description: "Market share distribution by company",
    data: [
      { company: "Acme Corp", share: 35 },
      { company: "Globex", share: 25 },
      { company: "Initech", share: 18 },
      { company: "Umbrella", share: 12 },
      { company: "Others", share: 10 }
    ],
    series: [
      {
        type: "pie",
        dataKey: "share",
        nameKey: "company",
        name: "Market Share",
        colors: ["blue", "green", "orange", "purple", "red"]
      }
    ],
    xAxis: "company"
  }
}, Cy = {
  teamSchedule: {
    name: "Team Schedule",
    description: "Weekly team meetings and events",
    current: "2025-02-01",
    events: [
      {
        id: "evt1",
        date: "2025-02-03",
        title: "Sprint Planning",
        description: "Plan the upcoming 2-week sprint",
        startTime: "09:00",
        endTime: "10:30",
        color: "#3b82f6"
      },
      {
        id: "evt2",
        date: "2025-02-03",
        title: "Design Review",
        description: "Review new UI mockups",
        startTime: "14:00",
        endTime: "15:00",
        color: "#8b5cf6"
      },
      {
        id: "evt3",
        date: "2025-02-05",
        title: "Client Demo",
        description: "Present Q1 progress to client",
        startTime: "11:00",
        endTime: "12:00",
        color: "#10b981"
      },
      {
        id: "evt4",
        date: "2025-02-07",
        title: "Team Retro",
        description: "Sprint retrospective meeting",
        startTime: "15:00",
        endTime: "16:00",
        color: "#f59e0b"
      },
      {
        id: "evt5",
        date: "2025-02-10",
        title: "All Hands Meeting",
        description: "Monthly company update",
        startTime: "10:00",
        endTime: "11:00",
        color: "#ef4444"
      },
      {
        id: "evt6",
        date: "2025-02-12",
        title: "Code Review Session",
        description: "Review PRs and discuss architecture",
        startTime: "13:00",
        endTime: "14:30",
        color: "#3b82f6"
      },
      {
        id: "evt7",
        date: "2025-02-14",
        title: "Valentine's Day Team Lunch",
        description: "Team building lunch",
        startTime: "12:00",
        endTime: "13:30",
        color: "#ec4899"
      }
    ],
    markedDates: {
      "2025-02-03": { marked: !0, dotColor: "#3b82f6" },
      "2025-02-05": { marked: !0, dotColor: "#10b981" },
      "2025-02-07": { marked: !0, dotColor: "#f59e0b" },
      "2025-02-10": { marked: !0, dotColor: "#ef4444" },
      "2025-02-12": { marked: !0, dotColor: "#3b82f6" },
      "2025-02-14": { marked: !0, dotColor: "#ec4899" }
    }
  },
  projectDeadlines: {
    name: "Project Deadlines",
    description: "Important project milestones and deadlines",
    current: "2025-02-15",
    events: [
      {
        id: "dl1",
        date: "2025-02-18",
        title: "Feature Freeze",
        description: "No new features after this date",
        startTime: "17:00",
        endTime: "17:00",
        color: "#ef4444"
      },
      {
        id: "dl2",
        date: "2025-02-22",
        title: "QA Testing Complete",
        description: "All QA testing must be finished",
        startTime: "23:59",
        endTime: "23:59",
        color: "#f59e0b"
      },
      {
        id: "dl3",
        date: "2025-02-25",
        title: "UAT Sign-off",
        description: "User acceptance testing approval",
        startTime: "16:00",
        endTime: "17:00",
        color: "#8b5cf6"
      },
      {
        id: "dl4",
        date: "2025-02-28",
        title: "Production Deployment",
        description: "Deploy v2.0 to production",
        startTime: "22:00",
        endTime: "23:59",
        color: "#10b981"
      }
    ],
    markedDates: {
      "2025-02-18": { marked: !0, dotColor: "#ef4444" },
      "2025-02-22": { marked: !0, dotColor: "#f59e0b" },
      "2025-02-25": { marked: !0, dotColor: "#8b5cf6" },
      "2025-02-28": { marked: !0, dotColor: "#10b981" }
    }
  },
  customerMeetings: {
    name: "Customer Meetings",
    description: "Scheduled customer calls and meetings",
    current: "2025-02-10",
    events: [
      {
        id: "cust1",
        date: "2025-02-11",
        title: "Acme Corp - Onboarding",
        description: "Initial onboarding call for new customer",
        startTime: "10:00",
        endTime: "11:00",
        color: "#3b82f6"
      },
      {
        id: "cust2",
        date: "2025-02-11",
        title: "TechStart Inc - Support",
        description: "Troubleshoot integration issues",
        startTime: "14:00",
        endTime: "14:30",
        color: "#ef4444"
      },
      {
        id: "cust3",
        date: "2025-02-13",
        title: "Global Solutions - Quarterly Review",
        description: "Q4 performance review and planning",
        startTime: "15:00",
        endTime: "16:30",
        color: "#10b981"
      },
      {
        id: "cust4",
        date: "2025-02-14",
        title: "StartupXYZ - Demo",
        description: "Product demo for potential customer",
        startTime: "11:00",
        endTime: "12:00",
        color: "#8b5cf6"
      },
      {
        id: "cust5",
        date: "2025-02-17",
        title: "Enterprise Co - Contract Renewal",
        description: "Discuss contract renewal terms",
        startTime: "13:00",
        endTime: "14:00",
        color: "#f59e0b"
      }
    ],
    markedDates: {
      "2025-02-11": { marked: !0, dotColor: "#3b82f6" },
      "2025-02-13": { marked: !0, dotColor: "#10b981" },
      "2025-02-14": { marked: !0, dotColor: "#8b5cf6" },
      "2025-02-17": { marked: !0, dotColor: "#f59e0b" }
    }
  },
  companyHolidays: {
    name: "ServiceNow US Holidays",
    description: "ServiceNow company holidays for US employees (Dec 2025 - Jan 2026)",
    current: "2025-12-25",
    events: [
      // December 2025
      {
        id: "us-christmas-2025",
        date: "2025-12-25",
        title: "Christmas Day",
        description: "Federal Holiday - Office Closed",
        color: "#3b82f6"
      },
      {
        id: "us-company-designated-2025",
        date: "2025-12-26",
        title: "Company Designated Holiday",
        description: "Company Holiday - Office Closed",
        color: "#3b82f6"
      },
      // January 2026
      {
        id: "us-newyear-2026",
        date: "2026-01-01",
        title: "New Year's Day",
        description: "Federal Holiday - Office Closed",
        color: "#3b82f6"
      },
      {
        id: "us-wellbeing-jan-2026",
        date: "2026-01-02",
        title: "Wellbeing Day",
        description: "Company Wellbeing Day - Take time to recharge",
        color: "#10b981"
      },
      {
        id: "us-mlk-2026",
        date: "2026-01-19",
        title: "Martin Luther King, Jr. Day",
        description: "Federal Holiday - Office Closed",
        color: "#3b82f6"
      }
    ],
    markedDates: {
      "2025-12-25": { marked: !0, dotColor: "#3b82f6" },
      "2025-12-26": { marked: !0, dotColor: "#3b82f6" },
      "2026-01-01": { marked: !0, dotColor: "#3b82f6" },
      "2026-01-02": { marked: !0, dotColor: "#10b981" },
      "2026-01-19": { marked: !0, dotColor: "#3b82f6" }
    }
  }
}, yt = {
  greeting: "Hello! How can I help you today?",
  analysis: "I've analyzed the data and found several interesting patterns. The sales data shows a significant increase in Q3, which correlates with the product launch. Let me break this down for you.",
  withChart: "Here's a visualization of the sales data over the past 6 months. As you can see, there's been steady growth with a notable spike in March.",
  error: "I apologize, but I encountered an error while processing your request. Would you like me to try again?",
  thinking: "Let me think about that for a moment... I'm analyzing the data now.",
  multiParagraph: `Based on the information provided, I can offer several insights:

First, the data shows a clear upward trend in user engagement over the past quarter. This is particularly evident in the active user metrics, which have grown by 45% month-over-month.

Second, there are some seasonal patterns worth noting. We typically see dips during holiday periods, but recovery is usually swift.

Finally, I'd recommend focusing on retention strategies for the premium tier, as this segment shows the highest lifetime value.`,
  longResponse: `This is a longer response that will be streamed word by word to demonstrate the streaming functionality.
Notice how each word appears one at a time, creating a more natural and engaging user experience.
This simulates how the real assistant would respond, giving users feedback that their request is being processed
and allowing them to start reading the response before it's complete.
The streaming effect is particularly important for longer responses like this one,
as it prevents users from feeling like the application has frozen or become unresponsive.`,
  complexMarkdown: `# Data Analysis Report

## Executive Summary

Based on the comprehensive analysis of your data, I've identified **three key insights** that warrant immediate attention. Let me walk you through each finding in detail.

## Key Findings

### 1. Revenue Growth Pattern

The analysis reveals a *consistent upward trajectory* in revenue across all quarters:

- **Q1 2024**: $2.4M (+15% YoY)
- **Q2 2024**: $3.1M (+22% YoY)
- **Q3 2024**: $3.8M (+28% YoY)
- **Q4 2024**: $4.5M (+35% YoY)

This growth is primarily driven by:
1. Increased customer acquisition
2. Higher average transaction value
3. Improved retention rates

### 2. Technical Implementation

Here's a sample code snippet showing how to implement the recommended optimization:

\`\`\`typescript
interface MetricsConfig {
  threshold: number;
  interval: string;
  enabled: boolean;
}

function analyzePerformance(config: MetricsConfig): Promise<Report> {
  const { threshold, interval } = config;

  return metrics
    .filter(m => m.value > threshold)
    .groupBy(interval)
    .aggregate();
}
\`\`\`

You can call this function with \`analyzePerformance({ threshold: 100, interval: 'daily', enabled: true })\` to get started.

### 3. Comparative Analysis

Here's how your metrics compare to industry benchmarks:

| Metric           | Your Value | Industry Avg | Difference |
|------------------|------------|--------------|------------|
| Conversion Rate  | 4.2%       | 3.1%         | +35% ✓     |
| Avg Session Time | 8m 45s     | 6m 20s       | +38% ✓     |
| Bounce Rate      | 32%        | 45%          | -29% ✓     |
| Customer LTV     | $1,250     | $890         | +40% ✓     |

> **Note**: All metrics are trending positively compared to industry standards. This indicates strong product-market fit and effective user engagement strategies.

## Recommendations

Based on these findings, I recommend the following action items:

1. **Scale User Acquisition**
   - Allocate 30% more budget to high-performing channels
   - Test new channels with similar demographics
   - Review the [Google Ads Best Practices](https://ads.google.com/home/) guide

2. **Optimize Conversion Funnel**
   - Reduce friction in checkout process
   - Implement A/B testing for key pages
   - See [A/B Testing Guide](https://www.optimizely.com/optimization-glossary/ab-testing/) for methodology

3. **Monitor Technical Performance**
   - Set up alerts for \`response_time > 500ms\`
   - Implement caching strategy for frequently accessed data
   - Refer to the [Web Vitals documentation](https://web.dev/articles/vitals) for benchmarks

## Technical Details

The analysis was performed using the following parameters:

\`\`\`json
{
  "dateRange": {
    "start": "2024-01-01",
    "end": "2024-12-31"
  },
  "metrics": ["revenue", "conversions", "engagement"],
  "segmentation": ["channel", "device", "geography"],
  "confidence_level": 0.95
}
\`\`\`

---

**Questions?** Feel free to ask for clarification on any of these points or request additional analysis on specific metrics. You can also visit our [Knowledge Base](https://support.servicenow.com/kb) for more resources.`,
  multiLineInput: `I can see you've provided a detailed multi-line question. Let me address each part:

**Part 1**: Regarding your first point, this is a common scenario that many users encounter. The best approach is to break down the problem into smaller, manageable steps.

**Part 2**: For the second aspect you mentioned, I'd recommend considering the following factors:
- Context and requirements
- Available resources
- Timeline constraints
- Expected outcomes

**Part 3**: Finally, to address your last question, here's a comprehensive solution that takes into account all the details you've provided.

Feel free to ask follow-up questions about any of these points!`,
  unreadMessage: "This is an unread message, you should see a red dot in the chat history.",
  liveAgentGreeting: "Hello! I'm Abel, a live support agent. I'm here to help you with your issue. How can I assist you today?"
}, vy = {
  sysId: "agent-abel-123",
  displayName: "Abel Tuter",
  name: "Abel Tuter",
  initials: "AT",
  avatarPath: "/example_agent.jpg",
  channel: "live_agent",
  showNameInHeader: "true",
  userName: "abel.tuter",
  email: "abel.tuter@example.com"
}, r2 = {
  withOnClickAction: {
    // index 68 → after "action" (custom tool action)
    // index 127 → after "overlay" (KB iframe action)
    // index 164 → after "interactively" (catalog iframe action)
    // index 199 → after "action." (user profile iframe action)
    text: "Click the citation badge below to trigger a custom client tool action button. You can also open an article in an iframe overlay, browse a catalog form interactively, or view a user profile via action. Each demonstrates a different onClickAction pattern.",
    annotations: [
      // Custom tool action (existing pattern) → CatalogItem bucket
      {
        type: "annotation",
        index: 68,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-action-001",
          data: {
            table: "sc_cat_item",
            id: "cat-action-001",
            title: "Run Custom Action",
            description: "Triggers a client-side tool call"
          }
        },
        onClickAction: {
          type: "citation.custom_action",
          handler: "client",
          payload: {
            actionType: "custom-citation-action",
            message: "Citation custom action triggered!"
          }
        }
      },
      // KB article with iframe interactiveView.show action → Source bucket
      // Real-world pattern from stream.json: opens article in iframe overlay
      {
        type: "annotation",
        index: 127,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-iframe-001",
          data: {
            table: "kb_knowledge",
            id: "kb-iframe-001",
            title: "VPN Configuration Guide",
            description: "Opens in an iframe overlay",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-IFRAME-001"
          }
        },
        onClickAction: {
          type: "interactiveView.show",
          handler: "client",
          payload: {
            type: "iframe",
            url: "https://example.service-now.com/now/embedded/kb_view.do?sys_kb_id=KB-IFRAME-001",
            entity_table: "kb_knowledge",
            entity_sys_id: "kb-iframe-001"
          }
        }
      },
      // Catalog item (interactive) with iframe action → CatalogItem bucket
      // redirectUrl suppressed in favor of iframe action
      {
        type: "annotation",
        index: 164,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-iframe-001",
          data: {
            table: "sc_cat_item",
            id: "cat-iframe-001",
            title: "Request VPN Access (Interactive)",
            url: "https://example.service-now.com/sp?id=sc_cat_item&sys_id=cat-iframe-001",
            cc_render_type: "interactive"
          }
        },
        onClickAction: {
          type: "interactiveView.show",
          handler: "client",
          payload: {
            type: "iframe",
            url: "https://example.service-now.com/now/embedded/sc_cat_item.do?sys_id=cat-iframe-001",
            entity_table: "sc_cat_item",
            entity_sys_id: "cat-iframe-001"
          }
        }
      },
      // User profile with iframe action → UserProfile bucket
      // onClickAction should take precedence over redirectUrl
      {
        type: "annotation",
        index: 199,
        source: {
          type: "entity",
          entityType: "people",
          entityId: "user-iframe-001",
          data: {
            table: "sys_user",
            id: "user-iframe-001",
            title: "Alex Johnson",
            description: "IT Support Specialist",
            url: "https://example.service-now.com/sys_user.do?sys_id=user-iframe-001"
          }
        },
        onClickAction: {
          type: "interactiveView.show",
          handler: "client"
        }
      }
    ]
  },
  stackedSameType: {
    // All 4 KB articles share index 87 (period after "articles")
    // kb_knowledge → Source bucket (supportsLabel: false) → grouped into single badge
    // Tests that multiple same-type annotations collapse into one "Sources and more" badge
    text: "I found several knowledge base articles covering different aspects of your VPN articles. Here is a summary of the key steps.",
    annotations: [
      {
        type: "annotation",
        index: 87,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-stack-001",
          data: {
            table: "kb_knowledge",
            id: "kb-stack-001",
            title: "VPN Initial Setup",
            description: "How to configure VPN for the first time",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-STACK-001"
          }
        }
      },
      {
        type: "annotation",
        index: 87,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-stack-002",
          data: {
            table: "kb_knowledge",
            id: "kb-stack-002",
            title: "VPN Troubleshooting",
            description: "Common VPN connection issues and fixes",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-STACK-002"
          }
        }
      },
      {
        type: "annotation",
        index: 87,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-stack-003",
          data: {
            table: "kb_knowledge",
            id: "kb-stack-003",
            title: "VPN Security Policies",
            description: "Corporate security requirements for VPN usage",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-STACK-003"
          }
        }
      },
      {
        type: "annotation",
        index: 87,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-stack-004",
          data: {
            table: "kb_knowledge",
            id: "kb-stack-004",
            title: "VPN on Mobile Devices",
            description: "Setting up VPN on iOS and Android",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-STACK-004"
          }
        }
      }
    ]
  },
  stackedDifferentTypes: {
    // All annotations share index 74 (period after "at once")
    // Tests multiple different bucket types at one position, producing:
    // - A Source icon whose popover has multiple sections (Article, Public web, Youtube, etc.)
    // - Separate labeled badges for UserProfile, AgentAction, CatalogItem, ActionableCatalog
    text: "Here is everything you need to resolve your VPN connectivity issue at once. Follow the article, contact the specialist, request a token, or use the automated agent.",
    annotations: [
      // ── Source bucket annotations (all grouped behind the link icon) ──
      // KB articles → "Article" section in popover
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-vpn-001",
          data: {
            table: "kb_knowledge",
            id: "kb-vpn-001",
            title: "VPN Troubleshooting Steps",
            description: "Common VPN issues and their fixes",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-VPN-001"
          }
        }
      },
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-vpn-002",
          data: {
            table: "kb_knowledge",
            id: "kb-vpn-002",
            title: "ESPP Guidelines",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-VPN-002"
          }
        }
      },
      // URL sources with attribution: 'web' → "web" / "Public web" section
      {
        type: "annotation",
        index: 74,
        source: {
          type: "url",
          url: "https://docs.servicenow.com/vpn-setup",
          title: "VPN Setup Guide",
          attribution: "web"
        }
      },
      {
        type: "annotation",
        index: 74,
        source: {
          type: "url",
          url: "https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0012345",
          title: "VPN Connection Best Practices",
          attribution: "web"
        }
      },
      // URL source with attribution: 'Youtube' → "Youtube" section
      {
        type: "annotation",
        index: 74,
        source: {
          type: "url",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "VPN Setup Video Tutorial",
          attribution: "external"
        }
      },
      // URL source with attribution: 'Git Hub' → "Git Hub" section
      {
        type: "annotation",
        index: 74,
        source: {
          type: "url",
          url: "https://github.com/example/vpn-scripts",
          title: "VPN Automation Scripts",
          attribution: "external"
        }
      },
      // URL source with attribution: 'Figma' → "Figma" section
      {
        type: "annotation",
        index: 74,
        source: {
          type: "url",
          url: "https://www.figma.com/file/abc123/VPN-Architecture",
          title: "VPN Architecture Diagram",
          attribution: "external"
        }
      },
      // File source → "Attachment" section
      {
        type: "annotation",
        index: 74,
        source: {
          type: "file",
          fileName: "vpn-config-template.ovpn"
        }
      },
      // ── Labeled badge annotations (render as separate inline badges) ──
      // User → UserProfile bucket
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "people",
          entityId: "user-net-001",
          data: {
            table: "sys_user",
            id: "user-net-001",
            title: "Dana Reeves",
            description: "Network Security Specialist",
            url: "https://example.service-now.com/sys_user.do?sys_id=dana001"
          }
        }
      },
      // Agent → AgentAction bucket
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "agent",
          entityId: "agent-vpn-001",
          data: {
            table: "sn_aia_agent",
            id: "agent-vpn-001",
            title: "VPN Auto-Fix Agent",
            buttonLabel: "Run VPN Diagnostics"
          }
        }
      },
      // Catalog item → CatalogItem bucket
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-vpn-token-001",
          data: {
            table: "sc_cat_item",
            id: "cat-vpn-token-001",
            title: "VPN Hardware Token",
            description: "Request a new RSA hardware token for VPN",
            url: "https://example.service-now.com/sp?id=sc_cat_item&sys_id=vpn-token-001"
          }
        }
      },
      // Agentic catalog → ActionableCatalog bucket
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-vpn-agentic-001",
          data: {
            table: "sc_cat_item",
            id: "cat-vpn-agentic-001",
            title: "Auto-Provision VPN Access",
            cc_render_type: "conversational_agentic"
          }
        }
      },
      // KB article → Source bucket (tests kb_article alongside kb_knowledge)
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-article-vpn-001",
          data: {
            table: "kb_article",
            id: "kb-article-vpn-001",
            title: "VPN Architecture Overview",
            description: "Technical overview of VPN infrastructure",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-ART-001"
          }
        }
      },
      // Skill with agentic render type → ActionableCatalog bucket
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "skill",
          entityId: "skill-vpn-diag-001",
          data: {
            table: "sys_gen_ai_skill",
            id: "skill-vpn-diag-001",
            title: "Run VPN Diagnostics Skill",
            cc_render_type: "conversational_agentic"
          }
        }
      },
      // Catalog item with explicit interactive render type → CatalogItem bucket
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-vpn-interactive-001",
          data: {
            table: "sc_cat_item",
            id: "cat-vpn-interactive-001",
            title: "VPN Access Form (Interactive)",
            description: "Interactive form to request VPN access",
            url: "https://example.service-now.com/sp?id=sc_cat_item&sys_id=vpn-interactive-001",
            cc_render_type: "interactive"
          }
        }
      },
      // Catalog item with conversational render type → CatalogItem bucket
      {
        type: "annotation",
        index: 74,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-vpn-convo-001",
          data: {
            table: "sc_cat_item",
            id: "cat-vpn-convo-001",
            title: "VPN Setup Assistant (Conversational)",
            cc_render_type: "conversational"
          }
        }
      }
    ]
  },
  multiSectionPopover: {
    // Focused test for the multi-section Source popover (like the "Multiple" Figma design).
    // All annotations go into the Source bucket → single link icon → popover with grouped sections:
    //   Article, Public web, Youtube, Git Hub, Figma, Attachment
    text: "Here is some information I gathered from various sources to help with your leave request. Please review the resources below.",
    annotations: [
      // "Article" section — kb_knowledge entities
      {
        type: "annotation",
        index: 88,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-multi-001",
          data: {
            table: "kb_knowledge",
            id: "kb-multi-001",
            title: "Parental Leave Program",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-LEAVE-001"
          }
        }
      },
      {
        type: "annotation",
        index: 88,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-multi-002",
          data: {
            table: "kb_knowledge",
            id: "kb-multi-002",
            title: "Leave Policies",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-LEAVE-002"
          }
        }
      },
      // "Public web" section — URL sources with attribution 'web'
      {
        type: "annotation",
        index: 88,
        source: {
          type: "url",
          url: "https://www.dol.gov/agencies/whd/fmla",
          title: "External link to additional information",
          attribution: "web"
        }
      },
      {
        type: "annotation",
        index: 88,
        source: {
          type: "url",
          url: "https://www.shrm.org/topics-tools/tools/policies/leave-policy",
          title: "Another linked source from web",
          attribution: "web"
        }
      },
      // "Youtube" section
      {
        type: "annotation",
        index: 88,
        source: {
          type: "url",
          url: "https://www.youtube.com/watch?v=abc123",
          title: "Like, Share and Subscribe",
          attribution: "external"
        }
      },
      // "Git Hub" section
      {
        type: "annotation",
        index: 88,
        source: {
          type: "url",
          url: "https://github.com/example/leave-calculator",
          title: "Code base",
          attribution: "external"
        }
      },
      // "Figma" section
      {
        type: "annotation",
        index: 88,
        source: {
          type: "url",
          url: "https://www.figma.com/file/xyz789/Leave-Request-Flow",
          title: "Figma Link",
          attribution: "external"
        }
      },
      // "Attachment" section — file source
      {
        type: "annotation",
        index: 88,
        source: {
          type: "file",
          fileName: "leave-request-form.pdf"
        }
      }
    ]
  },
  markdownListStackedCitations: {
    text: `I found multiple resources for each area of your request:

- **Network configuration** — see the documentation and contact the network team.
- **Software installation** — use the catalog or the automated provisioning agent.
- **Account access** — review the KB article, reach out to your admin, or submit a request.

Each resource above is linked for quick access.`,
    annotations: [
      // After first bullet's "team." (index 139) — URL + UserProfile at same position
      {
        type: "annotation",
        index: 139,
        source: {
          type: "url",
          url: "https://docs.servicenow.com/network-config",
          title: "Network Configuration Docs"
        }
      },
      {
        type: "annotation",
        index: 139,
        source: {
          type: "entity",
          entityType: "people",
          entityId: "user-netadmin-001",
          data: {
            table: "sys_user",
            id: "user-netadmin-001",
            title: "Sam Ortiz",
            description: "Network Administrator",
            url: "https://example.service-now.com/sys_user.do?sys_id=sam001"
          }
        }
      },
      // After second bullet's "agent." (index 222) — CatalogItem + ActionableCatalog at same position
      {
        type: "annotation",
        index: 222,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-software-001",
          data: {
            table: "sc_cat_item",
            id: "cat-software-001",
            title: "Software Installation Request",
            url: "https://example.service-now.com/sp?id=sc_cat_item&sys_id=sw001"
          }
        }
      },
      {
        type: "annotation",
        index: 222,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-autoprov-001",
          data: {
            table: "sc_cat_item",
            id: "cat-autoprov-001",
            title: "Auto-Provision Software",
            cc_render_type: "conversational_agentic"
          }
        }
      },
      // After third bullet's "request." (index 314) — KB Source + UserProfile + CatalogItem at same position
      {
        type: "annotation",
        index: 314,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-account-001",
          data: {
            table: "kb_knowledge",
            id: "kb-account-001",
            title: "Account Access Procedures",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-ACCT-001"
          }
        }
      },
      {
        type: "annotation",
        index: 314,
        source: {
          type: "entity",
          entityType: "people",
          entityId: "user-sysadmin-001",
          data: {
            table: "sys_user",
            id: "user-sysadmin-001",
            title: "Jamie Park",
            description: "System Administrator",
            url: "https://example.service-now.com/sys_user.do?sys_id=jamie001"
          }
        }
      },
      {
        type: "annotation",
        index: 314,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-access-req-001",
          data: {
            table: "sc_cat_item",
            id: "cat-access-req-001",
            title: "Account Access Request",
            url: "https://example.service-now.com/sp?id=sc_cat_item&sys_id=access-req-001"
          }
        }
      }
    ]
  },
  streamingWithMarkers: {
    // During streaming, text includes inline markers (doc_1, cat_1) that
    // RehypeCitationMarkers renders as animated placeholder badges.
    // The `text` field holds the FINAL clean text (no markers) used in
    // content_part.done and item.done events. `streamingText` is the
    // marker-bearing version streamed word-by-word via text_delta events.
    // After streaming, annotation_added events deliver real annotations
    // and the marker badges are replaced with proper citation badges.
    streamingText: `I looked into your question and found several useful resources across our knowledge base and service catalog that should help. Let me walk you through them.

First, for the initial VPN setup on your laptop, there are several articles that cover the full process including configuration, security settings, and platform-specific instructions (doc_1, doc_2, doc_3). These should give you everything you need to get started.

If you are experiencing intermittent connection drops or slow speeds, the troubleshooting article has a detailed section on diagnosing common network issues (doc_4). Many users have found it helpful for resolving timeout errors.

For those who need a hardware security token for two-factor authentication, you can submit a request directly through the IT service catalog (doc_5, cat_1). The typical fulfillment time is two to three business days.

Finally, we also have a video walkthrough that covers the entire setup process from start to finish (doc_6). It includes live demonstrations of each configuration step and tips for verifying your connection is working properly.`,
    text: `I looked into your question and found several useful resources across our knowledge base and service catalog that should help. Let me walk you through them.

First, for the initial VPN setup on your laptop, there are several articles that cover the full process including configuration, security settings, and platform-specific instructions. These should give you everything you need to get started.

If you are experiencing intermittent connection drops or slow speeds, the troubleshooting article has a detailed section on diagnosing common network issues. Many users have found it helpful for resolving timeout errors.

For those who need a hardware security token for two-factor authentication, you can submit a request directly through the IT service catalog. The typical fulfillment time is two to three business days.

Finally, we also have a video walkthrough that covers the entire setup process from start to finish. It includes live demonstrations of each configuration step and tips for verifying your connection is working properly.`,
    annotations: [
      // doc_1, doc_2, doc_3 → three KB articles at index 340 (period after "instructions")
      // This is the key test case: (doc_1, doc_2, doc_3) multi-doc group in a single marker.
      // data.id MUST match the marker ID used in streamingText so that
      // tryEnrichMarkerGroup can look up annotations by marker ID.
      {
        type: "annotation",
        index: 340,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-stream-001",
          data: {
            table: "kb_knowledge",
            id: "doc_1",
            title: "VPN Setup Guide",
            description: "Step-by-step VPN configuration",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-STREAM-001"
          }
        }
      },
      {
        type: "annotation",
        index: 340,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-stream-002",
          data: {
            table: "kb_knowledge",
            id: "doc_2",
            title: "VPN Security Settings",
            description: "Corporate security configuration for VPN",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-STREAM-002"
          }
        }
      },
      {
        type: "annotation",
        index: 340,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-stream-003",
          data: {
            table: "kb_knowledge",
            id: "doc_3",
            title: "Platform-Specific VPN Instructions",
            description: "VPN setup for Windows, macOS, and Linux",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-STREAM-003"
          }
        }
      },
      // doc_4 → KB article at index 557 (period after "network issues")
      {
        type: "annotation",
        index: 557,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-stream-004",
          data: {
            table: "kb_knowledge",
            id: "doc_4",
            title: "VPN Troubleshooting Guide",
            description: "Diagnosing common VPN connection problems",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-STREAM-004"
          }
        }
      },
      // doc_5 + cat_1 → stacked at index 763 (period after "service catalog")
      {
        type: "annotation",
        index: 763,
        source: {
          type: "entity",
          entityType: "kb",
          entityId: "kb-stream-005",
          data: {
            table: "kb_knowledge",
            id: "doc_5",
            title: "Hardware Token Policy",
            url: "https://example.service-now.com/kb_view.do?sys_kb_id=KB-STREAM-005"
          }
        }
      },
      {
        type: "annotation",
        index: 763,
        source: {
          type: "entity",
          entityType: "catalog_item",
          entityId: "cat-stream-001",
          data: {
            table: "sc_cat_item",
            id: "cat_1",
            title: "Request Hardware Token",
            url: "https://example.service-now.com/sp?id=sc_cat_item&sys_id=hw-token-001"
          }
        }
      },
      // doc_6 → URL source at index 925 (period after "start to finish")
      {
        type: "annotation",
        index: 925,
        source: {
          type: "url",
          url: "https://www.youtube.com/watch?v=vpn-tutorial-123",
          title: "VPN Setup Video Walkthrough",
          attribution: "external"
        }
      }
    ]
  }
};
function en(e) {
  const { threadId: a, itemId: t, text: n, attachments: r } = e;
  if (n == null)
    throw new Error(
      "generateUserMessageEvent called with undefined/null text. This should not happen. Check calling code."
    );
  return {
    type: "thread.item.added",
    item: {
      id: t ?? pe.string.uuid(),
      threadId: a ?? pe.string.uuid(),
      type: "user_message",
      createdAt: pe.date.recent().toISOString(),
      content: [{ type: "input_text", text: n }],
      attachments: r ?? [],
      quoted_text: null,
      inference_options: {}
    }
  };
}
function to(e) {
  const a = e?.threadId ?? pe.string.uuid(), t = e?.itemId ?? pe.string.uuid(), n = e?.text, r = e?.senderDetails, i = r ? { senderDetails: r } : void 0;
  return {
    type: "thread.item.added",
    item: {
      id: t,
      threadId: a,
      type: "assistant_message",
      createdAt: pe.date.recent().toISOString(),
      mosaicLlmInvocationId: `mosaic-${pe.string.uuid()}`,
      content: n ? [
        {
          type: "output_text",
          text: n,
          annotations: [],
          metadata: i
        }
      ] : []
    }
  };
}
function no(e, a) {
  return {
    type: "thread.item.updated",
    item_id: e ?? pe.string.uuid(),
    update: {
      type: "assistant_message.content_part.text_delta",
      content_index: 0,
      delta: a ?? pe.lorem.words(by)
    }
  };
}
function ro({
  itemId: e,
  text: a,
  senderDetails: t,
  annotations: n
} = {}) {
  const r = t ? { senderDetails: t } : void 0;
  return {
    type: "thread.item.updated",
    item_id: e ?? pe.string.uuid(),
    update: {
      type: "assistant_message.content_part.done",
      content_index: 0,
      content: {
        type: "output_text",
        text: a ?? pe.lorem.paragraph(),
        annotations: n ?? [],
        metadata: r
      }
    }
  };
}
function ky(e, a, t) {
  return {
    type: "thread.item.updated",
    item_id: e,
    update: {
      type: "assistant_message.content_part.annotation_added",
      content_index: 0,
      annotation_index: a,
      annotation: t
    }
  };
}
function Ay(e, a, t) {
  const n = t ?? Xs.salesOverTime;
  return {
    type: "thread.item.added",
    item: {
      id: a ?? pe.string.uuid(),
      threadId: e ?? pe.string.uuid(),
      type: "widget",
      createdAt: pe.date.recent().toISOString(),
      widget: {
        type: "Chart",
        data: n.data,
        series: n.series,
        xAxis: n.xAxis,
        showYAxis: !0,
        showLegend: !0,
        showTooltip: !0
      },
      copy_text: n.description
    }
  };
}
function an(e, a) {
  return {
    type: "thread.item.done",
    itemId: e,
    item: a
  };
}
function tn(e, a) {
  return {
    type: "thread.item.done",
    itemId: e,
    item: a
  };
}
function Sy(e, a) {
  return {
    type: "progress_update",
    text: e ?? pe.lorem.sentence(),
    icon: a ?? null
  };
}
function wy(e, a = !1) {
  return {
    type: "error",
    code: "custom",
    message: e ?? pe.lorem.sentence(),
    allow_retry: a
  };
}
function Ey(e, a = "info", t) {
  return {
    type: "notice",
    level: a,
    message: e ?? pe.lorem.sentence(),
    title: t ?? null
  };
}
function io(e, a, t) {
  return {
    type: "thread.item.added",
    item: {
      id: t ?? pe.string.uuid(),
      threadId: e,
      type: "widget",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      widget: a,
      copy_text: null
    }
  };
}
function sr(e, a) {
  return {
    type: "thread.item.done",
    itemId: e,
    item: {
      id: e,
      threadId: pe.string.uuid(),
      type: "widget",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      widget: a,
      copy_text: null
    }
  };
}
const Dy = [
  { ext: "pdf", mime: "application/pdf" },
  { ext: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" },
  { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
  { ext: "txt", mime: "text/plain" }
], By = [
  { ext: "jpg", mime: "image/jpeg" },
  { ext: "png", mime: "image/png" }
];
function Ty(e = {}) {
  const a = pe.helpers.arrayElement(Dy);
  return {
    id: pe.string.uuid(),
    name: `${pe.system.commonFileName(a.ext)}`,
    mime_type: a.mime,
    // Random file size between 10KB and 5MB
    size: pe.number.int({ min: 10240, max: 5242880 }),
    upload_url: pe.internet.url(),
    type: "file",
    ...e
  };
}
function My(e = {}) {
  const a = pe.helpers.arrayElement(By);
  return {
    id: pe.string.uuid(),
    name: `${pe.system.commonFileName(a.ext)}`,
    mime_type: a.mime,
    // Random image size between 50KB and 10MB
    size: pe.number.int({ min: 51200, max: 10485760 }),
    upload_url: pe.internet.url(),
    preview_url: pe.image.url(),
    type: "image",
    ...e
  };
}
function i2(e) {
  return Array.from({ length: e }, (a, t) => t % 3 === 0 ? My() : Ty());
}
const na = "persisted-", Ry = 20, oo = [
  "Can you help me reset my password?",
  "What is the status of my request REQ0012345?",
  "How do I set up VPN access on my laptop?",
  "I need to order a new monitor for my workstation.",
  "Can you explain our PTO policy?",
  "My Outlook keeps crashing when I open attachments.",
  "How do I add a delegate to my calendar?",
  "What software is available for download in the catalog?",
  "I need access to the finance shared drive.",
  "Can you help me configure my email signature?"
], so = [
  "I can help you with that. To reset your password, go to Settings > Security > Change Password. You will need your current password or a recovery email.",
  'Let me check on that for you. Request REQ0012345 is currently in the "Fulfillment" stage, assigned to the Network team. The expected resolution date is next Friday.',
  "To set up VPN access, download the GlobalProtect client from the IT catalog, then follow the setup wizard. You will need your employee ID and network credentials.",
  "I have created a hardware request for a new monitor. Your order number is RITM0098765. Standard delivery takes 3 to 5 business days.",
  "Our PTO policy provides 15 days of paid time off per year for full-time employees, accrued monthly. You can find the full policy document in the HR Knowledge Base.",
  "That sounds like a known issue with the latest Outlook update. Try clearing the Outlook cache: go to File > Options > Advanced > Clear Cache. If that does not work, I can escalate to desktop support.",
  "To add a calendar delegate, open Outlook, go to File > Account Settings > Delegate Access, then click Add and search for the person you want to delegate to.",
  "We have a wide range of software available. Popular options include VS Code, Slack, Zoom, and Adobe Creative Suite. Visit the IT Service Catalog for the full list.",
  "I have submitted an access request for the finance shared drive. Your manager will need to approve it. Typical turnaround is 24 hours after approval.",
  "To configure your email signature, go to Outlook > File > Options > Mail > Signatures. You can use our company template available on the intranet."
];
class Iy {
  credentials;
  eventListeners = /* @__PURE__ */ new Map();
  currentThreadId = null;
  messageCounter = 0;
  abortFlag = !1;
  // Store threads and their items in memory
  threads = /* @__PURE__ */ new Map();
  // Track if mock session data with contact menu items has been loaded
  hasContactMenuItems = !1;
  /**
   * Initialize the mock connector with credentials.
   */
  async initialize(a) {
    this.credentials = a, B("[MockConnector] Initialized with credentials:", a);
  }
  /**
   * Disposes of the mock connector, cleaning up any active listeners.
   */
  dispose() {
    B("[MockConnector] Disposing connector and clearing event listeners."), this.eventListeners.clear(), this.threads.clear(), this.currentThreadId = null;
  }
  /**
   * Simulate sending a streaming request.
   * Instead of making a real request, this queues up mock events.
   */
  async sendStreamingRequest(a) {
    if (B("[MockConnector] Simulating request:", a), a.type === "threads.create") {
      if ("initiateLiveAgent" in a.params) {
        await this.simulateThreadCreationLiveAgent();
        return;
      }
      const t = a.params.input?.content[0]?.text;
      await this.simulateThreadCreation(t);
    } else a.type === "threads.add_user_message" && await this.simulateAssistantResponseBasedOnUserText(
      a.params.thread_id,
      a.params.input.content[0].text ?? ""
    );
  }
  /**
   * Create a new thread, optionally with an initial message and attachments.
   * Sends empty conversationId in metadata to signal server to create a new thread.
   * @param initialMessage - Optional initial message text
   * @param metadata - Optional message metadata (attachments and conversation options)
   */
  async createThread(a, t) {
    const { attachments: n = [], conversationOptions: r } = t || {}, i = {};
    (a || n.length > 0) && (i.input = {
      content: a ? [{ type: "input_text", text: a }] : [],
      attachments: n,
      quoted_text: null,
      inference_options: {}
    });
    const o = {
      type: "threads.create",
      params: i,
      // Empty conversationId signals server to create a new thread
      metadata: {
        conversationId: "",
        ...kr(r)
      }
    };
    await this.sendStreamingRequest(o);
  }
  /**
   * Simulate sending a text message.
   */
  async sendTextMessage(a, t, n) {
    if (!a || !a.trim()) {
      B("[MockConnector] sendTextMessage called with empty/null/undefined text - ignoring");
      return;
    }
    B("[MockConnector] sendTextMessage called", { text: a, threadId: t, metadata: n }), t ? this.simulateAssistantResponseBasedOnUserText(t, a) : this.simulateThreadCreation(a);
    let r = !1;
    return new Promise((i) => {
      this.on("event", () => {
        r || (r = !0, i());
      });
    });
  }
  /** Simulate sending a user message in live-agent mode; resolves immediately with an ack. */
  async sendLiveAgentUserMessage(a, t, n) {
    return B("[MockConnector] sendLiveAgentUserMessage called", { text: a, threadId: t }), t && this.simulateUserMessage(t, a), { ack: !0, messageId: `msg-${Date.now()}`, itemId: `item-${Date.now()}` };
  }
  /**
   * List threads with pagination (mock implementation).
   */
  async listThreads() {
    B("[MockConnector] listThreads called");
    const t = ze.keys().filter(
      (r) => r.startsWith(`${na}thread`)
    );
    B(
      `[MockConnector] Found ${t.length} threads in localStorage with prefix "LBF_persisted-thread"`
    );
    for (const r of t) {
      const i = ze.getItemJSON(r);
      if (i && i.thread && this.threads) {
        const o = i.thread.id;
        this.threads.set(o, i);
      }
    }
    return {
      data: Array.from(this.threads.values()).map(({ thread: r }) => r).sort((r, i) => {
        const o = new Date(r.createdAt).getTime();
        return new Date(i.createdAt).getTime() - o;
      }),
      has_more: !1,
      after: null
    };
  }
  /**
   * Load items for a specific thread (mock implementation).
   *
   * Supports cursor-based pagination matching the real API behavior:
   * - order 'desc' (default): returns items newest-first; 'after' cursor returns OLDER items
   * - order 'asc': returns items oldest-first; 'after' cursor returns NEWER items
   * - limit: max items per page (default: MOCK_PAGE_SIZE)
   */
  async loadThreadItems(a, t = {}) {
    const { order: n = "desc", after: r = null, limit: i = Ry } = t, o = this.threads.get(a);
    if (B("[MockConnector] loadThreadItems called", { threadId: a, order: n, after: r, limit: i }), !o)
      return Ve("[MockConnector] Thread not found:", a), {
        data: [],
        has_more: !1,
        after: null
      };
    if (o.thread.hasUnreadMessages) {
      o.thread.hasUnreadMessages = !1;
      const F = {
        thread: o.thread,
        items: o.items
      };
      ze.setItemJSON(`${na}${a}`, F), B("[MockConnector] Marked thread as read:", a);
    }
    const l = o.items;
    let u = 0;
    if (r) {
      const F = l.findIndex((g) => g.id === r);
      if (F === -1)
        B("[MockConnector] Cursor item not found, returning from start");
      else if (n === "desc") {
        u = 0;
        const g = l.slice(0, F), C = i ?? g.length, E = g.slice(-C), k = g.length > C, I = E.length > 0 ? E[0].id : null;
        return {
          data: [...E].reverse(),
          has_more: k,
          after: k ? I : null
        };
      } else
        u = F + 1;
    }
    if (n === "desc") {
      const F = i ?? l.length, g = l.slice(-F), C = l.length > F, E = g.length > 0 ? g[0].id : null;
      return {
        data: [...g].reverse(),
        has_more: C,
        after: C ? E : null
      };
    }
    const d = l.slice(u), c = i ?? d.length, h = d.slice(0, c), m = d.length > c, p = h.length > 0 ? h[h.length - 1].id : null;
    return {
      data: h,
      has_more: m,
      after: m ? p : null
    };
  }
  /**
   *	Send a server-define payload to the server
   */
  async sendCustomAction(a, t, n) {
    B("[MockConnector] sendCustomAction called", { action: a, threadId: t, itemId: n });
  }
  /**
   * Add an action to the thread's page history (mock implementation).
   */
  async sendPageHistory(a, t, n) {
    B("[MockConnector] sendPageHistory called", { action: a, threadId: t, itemId: n });
    const r = this.threads.get(t);
    if (r) {
      const i = r.thread.pageHistory ?? [];
      r.thread.pageHistory = [...i, a], ze.setItemJSON(`${na}${t}`, r), this.emit("event", {
        type: "thread.updated",
        thread: r.thread
      }), B("[MockConnector] Page history updated, persisted, and event emitted");
    } else
      Ve("[MockConnector] Thread not found:", t);
  }
  /**
   * Update a thread's title (mock implementation).
   */
  async updateThread(a, t) {
    B("[MockConnector] updateThread called", { threadId: a, title: t });
    const n = this.threads.get(a);
    n ? (n.thread.title = t, ze.setItemJSON(`${na}${a}`, n), this.emit("event", {
      type: "thread.updated",
      thread: n.thread
    }), B("[MockConnector] Thread title updated, persisted, and event emitted")) : Ve("[MockConnector] Thread not found:", a);
  }
  /**
   * Delete a thread (mock implementation).
   */
  async deleteThread(a) {
    B("[MockConnector] deleteThread called", { threadId: a }), ze.removeItem(`${na}${a}`), this.threads.delete(a) ? B("[MockConnector] Thread deleted from memory") : Ve("[MockConnector] Thread not found:", a);
  }
  /**
   * Close a thread (mock implementation).
   */
  async closeThread(a) {
    B("[MockConnector] closeThread called", { threadId: a });
    const t = this.threads.get(a);
    t ? (t.thread.status = { type: "closed" }, t.thread.liveAgentActive = !1, ze.setItemJSON(`${na}${a}`, t), this.emit("event", {
      type: "thread.updated",
      thread: t.thread
    }), B("[MockConnector] Thread closed, persisted, and event emitted")) : Ve("[MockConnector] Thread not found:", a);
  }
  /**
   * Check live agent availability (mock implementation).
   * Returns mock data indicating whether live agents are available and wait time info.
   * Returns agent_available: true if mock session data with contact menu items has been loaded.
   */
  async checkLiveAgentAvailability() {
    return B("[MockConnector] checkLiveAgentAvailability called", {
      hasContactMenuItems: this.hasContactMenuItems
    }), {
      routed: !1,
      agent_available: this.hasContactMenuItems,
      waiting_time: 12e5,
      // milliseconds
      support_queue: "mock-support-queue-1"
    };
  }
  /**
   * Set whether mock session data with contact menu items has been loaded.
   * This affects the return value of checkLiveAgentAvailability.
   */
  setContactMenuItemsAvailability(a) {
    B("[MockConnector] setContactMenuItemsAvailability", { available: a }), this.hasContactMenuItems = a;
  }
  /**
   * Mock requestLiveAgentHandoff
   */
  async requestLiveAgentHandoff() {
    B("[MockConnector] Requesting Live Agent. Does nothing in mock connector");
  }
  /**
   * Mock createThreadForLiveAgent — no-op for mock connector.
   */
  async createThreadForLiveAgent() {
    B("[MockConnector] Creating thread for live agent. Does nothing in mock connector");
  }
  /**
   * Clean up (no-op for mock).
   */
  disconnect() {
    B("[MockConnector] Disconnected"), this.abortFlag = !0, this.currentThreadId = null, this.messageCounter = 0, this.eventListeners.clear(), this.threads.clear(), this.hasContactMenuItems = !1;
  }
  /**
   * Abort the current eventSource
   */
  abort() {
    B("[MockConnector] Abort requested"), this.abortFlag = !0;
  }
  /**
   * Close streaming connections for a specific thread (no-op for mock).
   */
  closeStreamsByThreadId(a) {
    B("[MockConnector] closeStreamsByThreadId:", a), this.abortFlag = !0;
  }
  /**
   * Clear all persisted threads from localStorage and in-memory cache.
   * Returns the number of threads cleared.
   */
  clearPersistedThreads() {
    const t = ze.keys().filter(
      (r) => r.startsWith(`${na}thread`)
    );
    for (const r of t)
      ze.removeItem(r);
    const n = this.threads.size;
    return this.threads.clear(), this.currentThreadId = null, B(
      `[MockConnector] Cleared ${t.length} persisted thread(s) from localStorage and ${n} from memory`
    ), t.length;
  }
  /**
   * Event system
   */
  on(a, t) {
    this.eventListeners.has(a) || this.eventListeners.set(a, /* @__PURE__ */ new Set()), this.eventListeners.get(a).add(t);
    const n = this.eventListeners.get(a).size;
    B(`[MockConnector] Added '${a}' listener. Total listeners: ${n}`);
  }
  off(a, t) {
    const n = this.eventListeners.get(a);
    if (!n)
      return;
    const r = n.has(t);
    n.delete(t), B(
      `[MockConnector] Removed '${a}' listener. Was present: ${r}. Remaining: ${n.size}`
    );
  }
  /**
   * Helper method to create a thread in memory storage and return the created event.
   */
  createThreadAndEvent({
    threadId: a,
    title: t,
    hasUnreadMessages: n = !1,
    liveAgentActive: r = !1
  }) {
    const i = {
      id: a,
      title: t,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: { type: "active" },
      metadata: {},
      items: [],
      hasUnreadMessages: n,
      liveAgentActive: r
    }, o = { thread: i, items: [] };
    return this.threads.set(a, o), ze.setItemJSON(`${na}${a}`, o), B("[MockConnector] Created thread in memory and localStorage:", a), {
      type: "thread.created",
      thread: i
    };
  }
  /**
   * Helper method to add an item to a thread in memory storage.
   */
  addItemToThread(a, t) {
    const n = this.threads.get(a);
    if (!n) {
      Ve("[MockConnector] Cannot add item - thread not found:", a);
      return;
    }
    const r = [...n.items, t];
    n.items = r, n.thread.items = r;
    const i = {
      thread: n.thread,
      items: n.items
    };
    ze.setItemJSON(`${na}${a}`, i), B("[MockConnector] Added item to thread:", { threadId: a, itemId: t.id });
  }
  /**
   * Simulate creating a new thread with a user message and assistant response.
   */
  async simulateThreadCreation(a) {
    const t = `thread-${Date.now()}`;
    this.currentThreadId = t;
    const n = this.createThreadAndEvent({ threadId: t });
    return this.emit("event", n), await this.delay(100), a && (await this.simulateUserMessage(t, a), await this.simulateAppropriateServerResponse(t, a)), t;
  }
  /**
   * Simulate creating a new thread with only a user message (no assistant response).
   * Useful for testing scenarios where you want to manually trigger responses.
   */
  async simulateThreadCreationWithoutResponse(a) {
    const t = `thread-${Date.now()}`;
    this.currentThreadId = t, B("[MockConnector] simulateThreadCreationWithoutResponse", { threadId: t, userText: a });
    const n = this.createThreadAndEvent({ threadId: t });
    return this.emit("event", n), await this.delay(100), await this.simulateUserMessage(t, a), t;
  }
  /**
   * Simulate creating a new empty thread (no user message, no assistant response).
   * Useful for test harness scenarios where you want to manually trigger responses
   * without creating any initial messages.
   */
  async simulateEmptyThreadCreation() {
    return this.simulateThreadCreationWithoutResponse("");
  }
  /**
   * Simulate creating a thread pre-populated with many historical messages.
   * The items are added directly to storage (not via SSE events) to simulate
   * a conversation that already existed on the server. Only the thread.created
   * event is emitted so the UI picks up the thread normally and loads items
   * via loadThreadItems, which now supports pagination.
   *
   * @param messageCount - Number of user/assistant exchange pairs to generate (default: 30,
   *   producing 60 items total, enough for 3 pages at the default page size of 20).
   */
  async simulateThreadWithHistory(a = 30) {
    const t = `thread-${Date.now()}`;
    this.currentThreadId = t, B("[MockConnector] simulateThreadWithHistory", { threadId: t, messageCount: a });
    const n = this.createThreadAndEvent({
      threadId: t,
      title: `History test (${a} exchanges)`
    }), r = Date.now() - a * 2 * 1e3 * 60;
    for (let i = 0; i < a; i++) {
      const o = `item-user-hist-${i}-${t}`, l = `item-assistant-hist-${i}-${t}`, u = new Date(r + i * 2 * 1e3 * 60).toISOString(), d = new Date(r + (i * 2 + 1) * 1e3 * 60).toISOString(), c = {
        id: o,
        threadId: t,
        type: "user_message",
        createdAt: u,
        content: [
          {
            type: "input_text",
            text: `Message ${i + 1}: ${oo[i % oo.length]}`
          }
        ],
        attachments: [],
        quoted_text: null,
        inference_options: {}
      }, h = {
        id: l,
        threadId: t,
        type: "assistant_message",
        createdAt: d,
        content: [
          {
            type: "output_text",
            text: `Response ${i + 1}: ${so[i % so.length]}`,
            annotations: [],
            metadata: {}
          }
        ]
      };
      this.addItemToThread(t, c), this.addItemToThread(t, h);
    }
    return B("[MockConnector] Pre-populated thread with", a * 2, "items"), this.emit("event", {
      ...n,
      thread: { ...n.thread, items: [] }
    }), t;
  }
  /**
   * Simulate creating a new thread with unread messages.
   * Creates a thread with user message, assistant response, and marks it as having unread messages.
   */
  async simulateThreadCreationUnread(a) {
    const t = `thread-${Date.now()}`;
    this.currentThreadId = t, B("[MockConnector] simulateThreadCreationUnread", { threadId: t, userText: a });
    const n = this.createThreadAndEvent({ threadId: t, hasUnreadMessages: !0 });
    this.emit("event", n), await this.delay(100);
    const r = a || "This is an unread thread message";
    return await this.simulateUserMessage(t, r), await this.simulateAppropriateServerResponse(t, r), t;
  }
  /**
   * Simulate creating a new thread with live agent flag.
   * Creates a thread with user message, assistant response, and marks it as a live agent conversation.
   */
  async simulateThreadCreationLiveAgent(a) {
    const t = `thread-${Date.now()}`;
    this.currentThreadId = t, B("[MockConnector] simulateThreadCreationLiveAgent", { threadId: t, userText: a });
    const n = this.createThreadAndEvent({ threadId: t, liveAgentActive: !0 });
    this.emit("event", n), await this.delay(100);
    const r = a || "This is a live agent conversation";
    return await this.simulateUserMessage(t, r), await this.simulateLiveAgentResponse(
      t,
      yt.liveAgentGreeting,
      vy
    ), t;
  }
  async simulateLiveAgentConnect(a) {
    this.simulateThreadUpdated(a, { liveAgentActive: !0 });
    const t = `item-live-agent-0-${Date.now()}`, n = {
      type: "thread.item.added",
      item: {
        id: t,
        threadId: a,
        type: "assistant_message",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        executionMode: "live_agent",
        content: [
          {
            type: "output_text",
            text: `Please stand by while I connect you to a live agent.
<hr>
<center><spinner></spinner></center><center><small>Routing you to a live agent...</small></center>
<center><small>Your expected wait time is about 3 seconds</small></center>`,
            annotations: [],
            metadata: {}
          }
        ]
      }
    };
    this.emit("event", n), await this.delay(3e3);
    const r = {
      type: "thread.item.replaced",
      item: {
        id: t,
        threadId: a,
        type: "assistant_message",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        executionMode: "live_agent",
        content: [
          {
            type: "output_text",
            text: `Please stand by while I connect you to a live agent.
<hr>
<center><small>Live agent has joined the chat</small></center>`,
            annotations: [],
            metadata: {}
          }
        ]
      }
    };
    this.emit("event", r), this.emit("event", {
      type: "thread.item.done",
      itemId: t
    });
  }
  async simulateLiveAgentDisconnect(a) {
    const t = `item-live-agent-0-${Date.now()}`, n = {
      type: "thread.item.added",
      item: {
        id: t,
        threadId: a,
        type: "assistant_message",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        executionMode: "live_agent",
        content: [
          {
            type: "output_text",
            text: "<center><small>Live agent has left the chat</small></center><hr>",
            annotations: [],
            metadata: {}
          }
        ]
      }
    };
    this.emit("event", n), this.emit("event", {
      type: "thread.item.done",
      itemId: t
    });
  }
  /**
   * Simulate a live agent response with sender details.
   * Unlike AI messages, live agent messages are sent directly without streaming.
   */
  async simulateLiveAgentResponse(a, t, n) {
    B("[MockConnector] simulateLiveAgentResponse called", {
      threadId: a,
      fullText: t.substring(0, 50) + "...",
      agentName: n.displayName
    });
    const r = `item-live-agent-${Date.now()}`, i = {
      id: r,
      threadId: a,
      type: "assistant_message",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      executionMode: "live_agent",
      content: [
        {
          type: "output_text",
          text: t,
          annotations: [],
          metadata: { senderDetails: n }
        }
      ]
    }, o = {
      type: "thread.item.added",
      item: i
    };
    this.emit("event", o);
    const l = tn(r, i);
    this.addItemToThread(a, i), this.emit("event", l), await this.delay(100), this.emit("done");
  }
  /**
   * Simulate a complete (non-streaming) assistant message with citation annotations.
   * Used by the test harness to verify citation badge rendering and behavior.
   */
  async simulateCitationResponse(a, t, n) {
    B("[MockConnector] simulateCitationResponse called", {
      threadId: a,
      fullText: t.substring(0, 50) + "...",
      annotationCount: n.length
    });
    const r = `item-citation-${Date.now()}`, i = {
      id: r,
      threadId: a,
      type: "assistant_message",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      content: [
        {
          type: "output_text",
          text: t,
          annotations: n
        }
      ]
    }, o = {
      type: "thread.item.added",
      item: i
    };
    this.emit("event", o);
    const l = tn(r, i);
    this.addItemToThread(a, i), this.emit("event", l), await this.delay(100), this.emit("done");
  }
  /**
   * Simulate a streaming assistant response with citation markers and annotations.
   *
   * Flow:
   * 1. item.added (empty item)
   * 2. text_delta events (streams text WITH markers like "(doc_1, cat_1)")
   * 3. annotation_added events (one per annotation)
   * 4. content_part.done (clean text WITHOUT markers + full annotations)
   * 5. item.done (complete item)
   *
   * During streaming, RehypeCitationMarkers renders the markers as animated
   * placeholder badges. After streaming completes, real citation badges replace them.
   */
  async simulateStreamingCitationResponse({
    threadId: a,
    streamingText: t,
    finalText: n,
    annotations: r
  }) {
    B("[MockConnector] simulateStreamingCitationResponse called", {
      threadId: a,
      streamingTextPreview: t.substring(0, 50) + "...",
      annotationCount: r.length
    }), this.abortFlag = !1;
    const i = `item-citation-stream-${Date.now()}`, o = to({
      threadId: a,
      itemId: i,
      text: void 0
    });
    this.emit("event", o), await this.delay(50);
    const l = t.split(" ");
    for (let h = 0; h < l.length; h++) {
      if (this.abortFlag) {
        B("[MockConnector] simulateStreamingCitationResponse aborted"), this.emit("done");
        return;
      }
      const m = l[h], p = (h > 0 ? " " : "") + m, F = no(i, p);
      this.emit("event", F), await this.delay(80);
    }
    await this.delay(500);
    for (let h = 0; h < r.length; h++) {
      const m = ky(i, h, r[h]);
      this.emit("event", m), await this.delay(200);
    }
    await this.delay(1500);
    const u = ro({ itemId: i, text: n, annotations: r });
    this.emit("event", u), await this.delay(200);
    const d = {
      ...o.item,
      content: [
        {
          type: "output_text",
          text: n,
          annotations: r
        }
      ]
    }, c = tn(i, d);
    this.addItemToThread(a, d), this.emit("event", c), await this.delay(100), this.emit("done");
  }
  // ==================== Test Harness Methods ====================
  /**
   * Simulate adding a message to an existing thread.
   */
  async simulateAssistantResponseBasedOnUserText(a, t) {
    t.trim() && (await this.simulateUserMessage(a, t), await this.simulateAppropriateServerResponse(a, t));
  }
  /**
      * Simulate a user message being added to a thread.
      0	 * If text is empty, null, or undefined, no message is created.
      */
  async simulateUserMessage(a, t) {
    if (!t || !t.trim()) {
      B("[MockConnector] Skipping user message creation - text is empty/null/undefined");
      return;
    }
    const n = `item-user-${Date.now()}`, r = en({
      threadId: a,
      itemId: n,
      text: t
    });
    this.addItemToThread(a, r.item), this.emit("event", r), await this.delay(100);
    const i = an(
      n,
      r.item
    );
    this.emit("event", i);
  }
  /**
   * Simulate a server-defined widget message from the assistant.
   */
  async simulateServerDefinedWidgetMessage(a) {
    const t = `item-widget-server-defined-${Date.now()}`, n = {
      id: t,
      threadId: a,
      type: "widget",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      widget: {
        type: "aix_widget",
        widget_id: "demo_calendar_v1",
        name: "demo-calendar-widget",
        payload: {
          date: (/* @__PURE__ */ new Date()).toISOString(),
          theme: "light"
        }
      },
      copy_text: "Server-defined widget: demo-calendar-widget"
    }, r = {
      type: "thread.item.added",
      item: n
    };
    this.emit("event", r), await this.delay(100);
    const i = {
      type: "thread.item.done",
      itemId: t,
      item: n
    };
    this.addItemToThread(a, n), this.emit("event", i), await this.delay(100), this.emit("done");
  }
  /**
   * Simulate an InteractiveViewButton widget message.
   * Trigger by typing "ivbutton" in the test harness.
   */
  async simulateInteractiveViewButtonMessage(a) {
    const t = `item-iv-button-${Date.now()}`;
    await this.simulateAssistantStreamingResponse(a, "Here is the interactive view button:"), await this.delay(200);
    const n = {
      id: t,
      threadId: a,
      type: "widget",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      widget: {
        type: "InteractiveViewButton",
        label: "View Analysis",
        viewType: "macroponent",
        widget_id: "420850f1ffc76210309fffffffffff54",
        widget_name: "Analysis Widget",
        payload: {
          metaData: {
            executionPlanId: "2da16b7346164f7fb4d39329a3b05552",
            executionTaskId: "d003a23ef5494d458e6d9ee5e365ede8",
            conversationId: "e6546bda3b3f321051a1da6eb5e45ab7"
          }
        }
      },
      copy_text: "InteractiveViewButton: View Analysis"
    }, r = {
      type: "thread.item.added",
      item: n
    };
    this.emit("event", r), await this.delay(100);
    const i = {
      type: "thread.item.done",
      itemId: t,
      item: n
    };
    this.addItemToThread(a, n), this.emit("event", i), await this.delay(100), this.emit("done");
  }
  /**
   * Simulate a server-defined widget that calls onContinueConversation.
   * The rendered element has Confirm/Cancel buttons; clicking either fires the
   * callback so you can verify lbf-client forwards the aix_widget.continue action.
   */
  async simulateAixWidgetContinueDemo(a) {
    const t = `item-aix-widget-demo-${Date.now()}`, n = {
      id: t,
      threadId: a,
      type: "widget",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      widget: {
        type: "aix_widget",
        widget_id: vu,
        name: "aix-widget-demo",
        payload: {
          label: "Demo Widget"
        }
      },
      copy_text: "Server-defined widget: aix-widget-demo"
    }, r = {
      type: "thread.item.added",
      item: n
    };
    this.emit("event", r), await this.delay(100);
    const i = {
      type: "thread.item.done",
      itemId: t,
      item: n
    };
    this.addItemToThread(a, n), this.emit("event", i), await this.delay(100), this.emit("done");
  }
  /**
   * Simulate an assistant response with streaming text.
   */
  async simulateAssistantStreamingResponse(a, t) {
    B("[MockConnector] simulateAssistantResponse called", {
      threadId: a,
      fullText: t.substring(0, 50) + "..."
    }), this.abortFlag = !1;
    const n = `item-assistant-${Date.now()}`, r = to({
      threadId: a,
      itemId: n,
      text: void 0
    });
    this.emit("event", r), await this.delay(50);
    const i = t.split(" ");
    for (let u = 0; u < i.length; u++) {
      if (this.abortFlag) {
        B("[MockConnector] simulateAssistantResponse aborted"), this.emit("done");
        return;
      }
      const d = i[u], c = (u > 0 ? " " : "") + d, h = no(n, c);
      this.emit("event", h), await this.delay(50);
    }
    const o = ro({ itemId: n, text: t });
    this.emit("event", o);
    const l = tn(n, {
      ...r.item,
      content: [
        {
          type: "output_text",
          text: t,
          annotations: []
        }
      ]
    });
    l.item && this.addItemToThread(a, l.item), this.emit("event", l), await this.delay(100), this.emit("done");
  }
  /**
   * Simulate an assistant response with a chart widget.
   * @param threadId - The thread to add the chart to
   * @param chartName - Name of the chart from chartTestData (default: 'salesOverTime')
   */
  async simulateChartResponse(a, t = "salesOverTime") {
    const n = `item-widget-${Date.now()}`, r = Xs[t], i = Ay(
      a,
      n,
      r
    );
    this.emit("event", i), await this.delay(100);
    const o = i.item.widget, l = sr(n, o);
    l.item && (l.item.threadId = a, l.item.copy_text = i.item.copy_text, this.addItemToThread(a, l.item)), this.emit("event", l), await this.delay(100), this.emit("done");
  }
  /**
   * Simulate an assistant response with an agenda calendar widget.
   * @param threadId - The thread to add the calendar to
   * @param calendarName - Name of the calendar from calendarTestData (default: 'teamSchedule')
   */
  async simulateCalendarResponse(a, t = "teamSchedule") {
    const n = `item-widget-calendar-${Date.now()}`, r = Cy[t], i = [...r.events].sort(
      (c, h) => new Date(c.date).getTime() - new Date(h.date).getTime()
    ), o = i.length > 0 ? i[0].date : null, l = {
      id: n,
      threadId: a,
      type: "widget",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      widget: {
        type: "AgendaCalendar",
        name: "servicenow-holiday-calendar",
        current: o,
        // Use the first event date instead of hardcoded current
        events: r.events,
        markedDates: r.markedDates,
        firstDayOfWeek: 1,
        showWeekNumbers: !1,
        accentColor: "#3b82f6"
      },
      copy_text: r.description
    }, u = {
      type: "thread.item.added",
      item: l
    };
    this.emit("event", u), await this.delay(100);
    const d = {
      type: "thread.item.done",
      itemId: n,
      item: l
    };
    this.addItemToThread(a, l), this.emit("event", d), await this.delay(100), this.emit("done");
  }
  /**
   * Simulate a status/thought message using progress_update events.
   * This uses the standard ChatKit progress_update event instead of custom THOUGHT content.
   */
  async simulateThoughtMessage(a) {
    await this.simulateProgressUpdate(a);
  }
  /**
   * Simulate a progress update event.
   */
  async simulateProgressUpdate(a, t) {
    const n = Sy(a, t);
    this.emit("event", n), await this.delay(50);
  }
  /**
   * Simulate a widget response
   */
  async simulateWidgetResponse(a, t) {
    const n = `item-widget-${Date.now()}`, r = io(
      a,
      t,
      n
    );
    this.emit("event", r), await this.delay(100);
    const i = sr(n, t);
    i.item && (i.item.threadId = a, i.item.copy_text = r.item.copy_text, this.addItemToThread(a, i.item)), this.emit("event", i), await this.delay(100), this.emit("done");
  }
  /**
   * Determine the appropriate assistant response based on user text content.
   * This method handles the logic of choosing which response and widgets to send.
   */
  async simulateAppropriateServerResponse(a, t) {
    const n = t.toLowerCase(), r = n.includes("no response please"), i = n.includes("chart") || n.includes("graph") || n.includes("visual"), o = n.includes("error") || n.includes("problem"), l = n.includes("analy"), u = n.includes("longmessage"), d = n.includes("office"), c = n.includes("holiday") || n.includes("holidays") || n.includes("time off") || n.includes("pto"), h = n.includes("litjs"), m = n.includes("ivbutton");
    if (n.includes("attachment") || n.includes("file")) {
      await this.simulateUserMessageWithAttachments(a), await this.delay(500), await this.simulateAssistantStreamingResponse(
        a,
        "I can see your attachments! You uploaded an image and a PDF document. The attachments are displayed above in your message."
      );
      return;
    }
    if (B("[MockConnector] simulateAssistantResponseBasedOnUserText", {
      userText: t,
      lowerText: n
    }), B("[MockConnector] Checking conditions:", {
      isHolidayCalendarRequest: c,
      isChartRequest: i,
      isErrorRequest: o,
      isAnalysisRequest: l,
      isLongMessageRequest: u,
      isMapRequest: d,
      isServerDefinedWidgetRequest: h
    }), c) {
      await this.simulateAssistantStreamingResponse(
        a,
        "Here's the company holiday calendar showing holidays by region from December through January:"
      ), await this.delay(200), await this.simulateCalendarResponse(a, "companyHolidays");
      return;
    }
    if (i) {
      await this.simulateAssistantStreamingResponse(a, yt.withChart), await this.simulateChartResponse(a, "salesOverTime");
      return;
    }
    if (l) {
      await this.simulateAssistantStreamingResponse(a, yt.analysis), await this.simulateChartResponse(a, "userGrowth");
      return;
    }
    const F = Object.keys(yt).find((g) => g.toLowerCase() === n);
    if (F) {
      await this.simulateAssistantStreamingResponse(a, yt[F]);
      return;
    }
    if (d) {
      const { text: g, widget: C } = ku();
      await this.simulateAssistantStreamingResponse(a, g), await this.delay(500), await this.simulateWidgetResponse(a, C);
      return;
    }
    if (m) {
      await this.simulateInteractiveViewButtonMessage(a);
      return;
    }
    if (h) {
      await this.simulateServerDefinedWidgetMessage(a);
      return;
    }
    r || await this.simulateAssistantStreamingResponse(a, yt.greeting);
  }
  /**
   * Simulate user messages with attachments (for testing)
   * Sends each attachment in a separate message, then text in another message
   */
  async simulateUserMessageWithAttachments(a) {
    const t = `item-user-${Date.now()}`, r = en({
      attachments: [
        {
          id: "attach-img-1",
          mime_type: "image/png",
          name: "dashboard-screenshot.png",
          preview_url: "https://picsum.photos/seed/dashboard/600/400",
          type: "image"
        }
      ],
      itemId: t,
      text: "",
      threadId: a
    });
    this.addItemToThread(a, r.item), this.emit("event", r), await this.delay(100);
    const i = an(
      t,
      r.item
    );
    this.emit("event", i), await this.delay(300);
    const o = `item-user-${Date.now()}`, u = en({
      attachments: [
        {
          id: "attach-pdf-1",
          mime_type: "application/pdf",
          name: "quarterly-report.pdf",
          type: "file",
          upload_url: "https://pdfobject.com/pdf/sample.pdf"
        }
      ],
      itemId: o,
      text: "",
      threadId: a
    });
    this.addItemToThread(a, u.item), this.emit("event", u), await this.delay(100);
    const d = an(
      o,
      u.item
    );
    this.emit("event", d), await this.delay(300);
    const c = `item-user-${Date.now()}`, h = en({
      itemId: c,
      text: "Here are the files you requested. The screenshot shows the dashboard and the PDF contains the detailed report.",
      threadId: a
    });
    this.addItemToThread(a, h.item), this.emit("event", h), await this.delay(100);
    const m = an(
      c,
      h.item
    );
    this.emit("event", m);
  }
  /**
   * Simulate an error event.
   */
  simulateError(a, t = !1) {
    const n = wy(a, t);
    this.emit("event", n);
  }
  /**
   * Simulate a notice event.
   */
  simulateNotice(a, t = "info", n) {
    const r = Ey(a, t, n);
    this.emit("event", r);
  }
  /**
   * Simulate a thread.updated event.
   * Useful for testing thread updates like marking as unread.
   */
  simulateThreadUpdated(a, t) {
    const n = this.threads.get(a);
    if (!n)
      return;
    const r = {
      thread: { ...n.thread, ...t },
      items: n.items
    };
    this.threads.set(a, r), this.emit("event", {
      type: "thread.updated",
      thread: r.thread
    }), ze.setItemJSON(`${na}${a}`, r);
  }
  /**
   * Add an interactive page to the current thread and emit a thread.updated event.
   */
  addInteractivePage(a) {
    if (!a) {
      Ve("[MockConnector] No current thread to add interactive page to");
      return;
    }
    const t = this.threads.get(a);
    if (!t) {
      Ve("[MockConnector] Thread not found:", a);
      return;
    }
    const n = [
      {
        type: "interactiveView.show",
        handler: "client",
        payload: {
          tag: "Article",
          title: "Company Policies",
          entity_sys_id: "abc123",
          entity_table: "kb_knowledge",
          type: "iframe",
          url: "/kb_knowledge.do?sys_id=24d9243187032100deddb882a2e3ec33"
        }
      },
      {
        type: "interactiveView.show",
        handler: "client",
        payload: {
          tag: "Catalog",
          title: "Apple iPhone 13 Pro",
          entity_sys_id: "def456",
          entity_table: "sc_cat_item",
          type: "iframe",
          url: "/sc_cat_item.do?sys_id=def456"
        }
      },
      {
        type: "interactiveView.show",
        handler: "client",
        payload: {
          tag: "Org Chart",
          title: "David Lee",
          entity_sys_id: "ghi789",
          entity_table: "sys_user",
          type: "iframe",
          url: "/sys_user.do?sys_id=ghi789"
        }
      },
      {
        type: "interactiveView.show",
        handler: "client",
        payload: {
          tag: "KB",
          title: "Troubleshooting Network Issues",
          entity_sys_id: "jkl012",
          entity_table: "kb_knowledge",
          type: "iframe",
          url: "/kb_knowledge.do?sys_id=jkl012"
        }
      },
      {
        type: "interactiveView.show",
        handler: "client",
        payload: {
          tag: "Request",
          title: "New Badge",
          entity_sys_id: "mno345",
          entity_table: "sc_request",
          type: "iframe",
          url: "/sc_request.do?sys_id=mno345"
        }
      }
    ], r = t.thread.pageHistory ?? [], i = n[r.length % n.length];
    t.thread.pageHistory = [...r, i], ze.setItemJSON(`${na}${a}`, t), this.emit("event", {
      type: "thread.updated",
      thread: t.thread
    }), B("[MockConnector] Interactive page added and event emitted");
  }
  /**
   * Get the current thread ID (for testing).
   */
  getCurrentThreadId() {
    return this.currentThreadId;
  }
  /**
   * Simulate a client tool call from the server.
   * Demonstrates server → client tool execution flow.
   *
   * @param threadId - The thread ID
   * @param config - Configuration for the tool call
   *
   * @example
   * // Highlight a map marker
   * connector.simulateClientToolCall(threadId, {
   *   widgetId: 'restaurant-map',
   *   actionType: 'highlight-marker',
   *   args: { markerId: 'sushi-place' },
   * });
   *
   * @example
   * // Filter a list widget
   * connector.simulateClientToolCall(threadId, {
   *   widgetId: 'ticket-list',
   *   actionType: 'filter',
   *   args: { status: 'open', priority: 'high' },
   * });
   */
  async simulateClientToolCall(a, t) {
    const {
      widgetId: n = "restaurant-map",
      actionType: r = "highlight-marker",
      args: i = { markerId: "marker-1", highlight: !0 }
    } = t ?? {}, o = Date.now(), l = {
      type: "client_tool_call",
      id: `tool-${o}`,
      callId: `call-${o}`,
      threadId: a,
      name: r,
      actionType: r,
      status: "pending",
      widgetId: n,
      args: i,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.emit("event", { type: "thread.item.added", item: l });
  }
  /**
   * Send the result of a client tool execution back to the server.
   * Mock implementation - just logs the result.
   *
   * @param threadId - The thread ID where the tool call originated
   * @param result - The result of the client tool execution
   */
  async sendClientToolOutput(a, t) {
    B("[MockConnector] sendClientToolOutput called", { threadId: a, result: t });
  }
  /**
   * Simulate a complex execution flow with thinking (task items), streaming, and widget creation.
   * This demonstrates the full capability of the system including:
   * - Thought process visualization (task items)
   * - Streaming text responses
   * - Widget/chart generation
   */
  async simulateComplexExecutionFlow(a) {
    const t = `task-${Date.now()}`, r = {
      type: "thread.item.added",
      item: {
        id: t,
        threadId: a,
        type: "task",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        task: {
          type: "thought",
          status_indicator: "loading",
          title: "Identifying top sales data",
          content: "User wants a two-part response: 1) Identify top sales region from Q3 data, and 2) Create a presentation slide. I will start by analyzing the data."
        }
      }
    };
    this.emit("event", r), await this.delay(1e3);
    const i = {
      id: t,
      threadId: a,
      type: "task",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      task: {
        type: "thought",
        status_indicator: "complete",
        title: "Analysis Complete",
        content: "Analysis complete. The North-East region is the top performer. I will now report this finding to the user."
      }
    }, o = {
      type: "thread.item.done",
      itemId: t,
      item: i
    };
    this.addItemToThread(a, i), this.emit("event", o), await this.delay(300), await this.simulateAssistantStreamingResponse(
      a,
      "Based on the Q3 sales data, the top-performing region is the **North-East**, with a 25% year-over-year revenue increase."
    ), await this.delay(500);
    const l = `task-${Date.now()}`, d = {
      type: "thread.item.added",
      item: {
        id: l,
        threadId: a,
        type: "task",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        task: {
          type: "thought",
          status_indicator: "loading",
          title: "Creating presentation",
          content: "Now, as requested, I will create the presentation slide summarizing this information."
        }
      }
    };
    this.emit("event", d), await this.delay(800);
    const c = {
      id: l,
      threadId: a,
      type: "task",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      task: {
        type: "thought",
        title: "Assembling chart",
        status_indicator: "complete",
        content: "Slide components generated. Assembling the widget."
      }
    }, h = {
      type: "thread.item.done",
      itemId: l,
      item: c
    };
    this.addItemToThread(a, c), this.emit("event", h), await this.delay(300);
    const m = `widget-chart-${Date.now()}`, p = {
      type: "Chart",
      data: [
        { region: "North-East", revenue: 125e4 },
        { region: "South", revenue: 1e6 },
        { region: "West", revenue: 95e4 },
        { region: "Midwest", revenue: 88e4 }
      ],
      series: [
        {
          type: "bar",
          dataKey: "revenue",
          name: "Revenue ($)",
          color: "blue"
        }
      ],
      xAxis: "region",
      showYAxis: !0,
      showLegend: !0,
      showTooltip: !0
    }, F = io(
      a,
      p,
      m
    );
    F.item.copy_text = "Q3 Sales Report Chart: North-East", this.emit("event", F), await this.delay(100);
    const g = sr(m, p);
    g.item && (g.item.threadId = a, g.item.copy_text = F.item.copy_text, this.addItemToThread(a, g.item)), this.emit("event", g), await this.delay(100), this.emit("done");
  }
  emit(a, ...t) {
    const n = this.eventListeners.get(a);
    if (n) {
      B(`[MockConnector] Emitting '${a}' to ${n.size} listener(s)`);
      for (const r of n)
        r(...t);
    }
  }
  /**
   * Replay preprocessed SSE events through the connector's event system.
   * Events should already be filtered and have thread IDs rewritten by the
   * caller (see sseReplayHelper.ts for preprocessing utilities).
   *
   * @param events - Array of preprocessed SSE events to replay
   * @param delayMs - Delay between events in milliseconds (default: 50ms)
   */
  async replaySSEEvents(a, t = 50) {
    B("[MockConnector] Starting SSE replay with", a.length, "events"), this.abortFlag = !1;
    for (const n of a) {
      if (this.abortFlag) {
        B("[MockConnector] SSE replay aborted");
        break;
      }
      if (n.eventType === "done") {
        this.emit("done");
        continue;
      }
      this.emit("event", n.data), t > 0 && await this.delay(t);
    }
    B("[MockConnector] SSE replay complete"), this.emit("done");
  }
  /**
   * Utility to add delay for realistic timing.
   */
  delay(a) {
    return new Promise((t) => setTimeout(t, a));
  }
}
class Py {
  instanceId = crypto.randomUUID();
  seqByConversationId = /* @__PURE__ */ new Map();
  /**
   * Returns the stable identifier for this store/tab instance.
   * Generated once at construction time; in-memory only, never persisted.
   */
  currentInstanceId() {
    return this.instanceId;
  }
  /**
   * Returns the next monotonically increasing sequence number scoped to the
   * given conversationId. Independent counters are kept per conversationId so
   * that switching conversations always starts a fresh sub-sequence.
   */
  nextSeq(a) {
    const t = (this.seqByConversationId.get(a) ?? 0) + 1;
    return this.seqByConversationId.set(a, t), t;
  }
  /**
   * Returns a fresh UUID v4 to uniquely identify an individual request.
   * Used by the server to deduplicate retried HTTP requests.
   */
  newRequestId() {
    return crypto.randomUUID();
  }
}
const Ly = 3e5;
function _y(e, a) {
  return (t, n) => {
    n && !(t in a) && (e[t] = n);
  };
}
class En {
  credentials;
  activeEventSources = /* @__PURE__ */ new Map();
  eventListeners = /* @__PURE__ */ new Map();
  httpService;
  getSessionState;
  sequenceTracker = new Py();
  constructor(a) {
    this.httpService = a.httpService, this.getSessionState = a.getSessionState ?? (() => null), this.setupCleanup();
  }
  /**
   * Initialize the connector with credentials.
   * The actual session fetch is now triggered separately by dispatching the `fetchSession` thunk.
   */
  initialize(a) {
    this.credentials = a;
  }
  /**
   * Disposes of the connector, cleaning up any active connections and listeners.
   */
  dispose() {
    for (const a of [...this.activeEventSources.keys()])
      this.closeEventSource(a);
    this.eventListeners.clear();
  }
  /**
   * Send a streaming request to the ChatKit API.
   * This creates a new FetchEventSource for this specific request.
   * Returns a Promise that resolves when the initial response is received.
   */
  async sendStreamingRequest(a) {
    if (!this.credentials) {
      const u = new Error("Connector not initialized. Call initialize() first.");
      if (Qn())
        throw u;
      B("ChatKitConnector", u.message);
      return;
    }
    if (this.activeEventSources.size > 0) {
      const u = [...this.activeEventSources.keys()].map((c) => c.streamId).join(", "), d = "thread_id" in a.params ? String(a.params.thread_id) : "new thread";
      Ve(
        "ChatKitConnector",
        `Closing ${this.activeEventSources.size} active stream(s) [${u}]`,
        `to start ${a.type} for ${d}`
      );
      for (const c of [...this.activeEventSources.keys()])
        this.closeEventSource(c);
    }
    const t = this.getSessionState();
    if (!t || !at(t.phase)) {
      const u = new Error("Cannot send request: Session is not available or connected.");
      if (this.emit("error", u), B("ChatKitConnector", u.message), Qn())
        throw u;
      return;
    }
    const n = this.buildMetadata(t, a.metadata), r = { ...a, metadata: n }, i = Ut("/api/chatkit"), o = a.params && "thread_id" in a.params ? String(a.params.thread_id) : null, l = new Au(i, {
      method: "POST",
      headers: this.httpService.getHeaders(),
      body: JSON.stringify(r),
      onResponseHeaders: (u) => {
        this.emit("perf", { kind: "firstByte", streamId: l.streamId });
        const d = u.get("X-Pod-Affinity") ?? void 0, c = u.get("X-Cluster-Id") ?? void 0;
        (d || c) && this.emit("affinityUpdate", { podAffinity: d, clusterAffinity: c });
      },
      label: "chatkit",
      inactivityTimeoutMs: Ly
    });
    return this.activeEventSources.set(l, o), this.emit("perf", {
      kind: "streamStart",
      streamId: l.streamId,
      requestType: a.type,
      threadId: o
    }), new Promise((u, d) => {
      let c = !1;
      l.onmessage = (h) => {
        try {
          const m = JSON.parse(h.data);
          if (Xn(m))
            this.handleErrorResponse(m);
          else {
            const p = m;
            this.emit("event", p), this.emit("perf", {
              kind: "streamEvent",
              streamId: l.streamId,
              event: p
            });
          }
          c || (c = !0, u());
        } catch (m) {
          B("ChatKitConnector", "Failed to parse streaming event:", m);
        }
      }, l.onerror = (h) => {
        B("ChatKitConnector", "SSE error:", h);
        const m = h instanceof Error ? h : new Error("SSE connection error");
        if (m instanceof Su) {
          Xn(m.data) && this.handleErrorResponse(m.data), this.closeEventSource(l), c || (c = !0, u());
          return;
        }
        m instanceof Yo && m.status === En.HTTP_UNAUTHORIZED && Ve("ChatKitConnector", "Streaming auth failure (401), emitting error event"), this.emit("error", m), this.emit("perf", {
          kind: "streamError",
          streamId: l.streamId,
          error: m
        }), this.closeEventSource(l), c || (c = !0, d(m));
      }, l.addEventListener("done", () => {
        this.emit("done"), this.closeEventSource(l);
      }), l.addEventListener("response", (h) => {
        try {
          const m = JSON.parse(h.data);
          this.reEmitInnerEvents(l.streamId, m), c || (c = !0, u());
        } catch (m) {
          B("ChatKitConnector", "Failed to parse initial response:", m), c || (c = !0, d(m instanceof Error ? m : new Error("Failed to parse initial response")));
        }
      });
    });
  }
  /**
   * Send a non-streaming request to the ChatKit API.
   * Returns the response data directly as JSON.
   */
  async sendNonStreamingRequest(a) {
    if (!this.credentials) {
      const i = new Error("Connector not initialized. Call initialize() first.");
      throw Qn() || B("ChatKitConnector", i.message), i;
    }
    const t = this.getSessionState();
    if (!t || !at(t.phase))
      throw new Error("Cannot send request: Session is not available or connected.");
    const n = this.buildMetadata(t, a.metadata), r = { ...a, metadata: n };
    try {
      const { data: i } = await this.httpService.post("/api/chatkit", {
        body: r
      });
      return i;
    } catch (i) {
      throw this.emitAuthErrorIfApplicable(i), i;
    }
  }
  /**
   * List threads with pagination.
   */
  async listThreads(a = { order: "desc", limit: 50 }) {
    const t = {
      type: "threads.list",
      params: a,
      metadata: {}
    }, n = await this.sendNonStreamingRequest(t);
    return {
      data: (n.data || []).map(wu),
      has_more: n.has_more,
      after: n.after
    };
  }
  /**
   * Load items for a specific thread.
   *
   * Cursor Naming Convention (API compatibility):
   * The cursor name 'after' refers to position in the SORTED list, not time.
   * With DESCENDING order (newest first, which is our default):
   * - 'after' cursor → returns OLDER items (for loading history when scrolling up)
   * With ASCENDING order (oldest first):
   * - 'after' cursor → returns NEWER items (items that come after in chronological order)
   *
   * Usage:
   * - Initial load: no cursor → returns most recent N items
   * - Load history: { after: oldestItemId } → returns older items
   */
  async loadThreadItems(a, t = {}) {
    const n = {
      type: "items.list",
      params: {
        thread_id: a,
        order: "desc",
        limit: null,
        after: null,
        ...t
      },
      metadata: {
        conversationId: a
      }
    }, r = await this.sendNonStreamingRequest(n);
    return {
      data: (r.data || []).map(Eu),
      has_more: r.has_more,
      after: r.after
    };
  }
  /**
   * Update a thread's title.
   */
  async updateThread(a, t) {
    const n = {
      type: "threads.update",
      params: {
        thread_id: a,
        title: t
      },
      metadata: {}
    };
    await this.sendNonStreamingRequest(n);
  }
  /**
   * Delete a thread.
   */
  async deleteThread(a) {
    const t = {
      type: "threads.delete",
      params: {
        thread_id: a
      },
      metadata: {
        conversationId: a
      }
    };
    await this.sendNonStreamingRequest(t);
  }
  /**
   * Close a thread.
   */
  async closeThread(a) {
    const t = {
      type: "threads.close",
      params: {
        thread_id: a
      },
      metadata: {}
    };
    await this.sendNonStreamingRequest(t);
  }
  /**
   * Check live agent availability.
   * Returns whether live agents are available and wait time info.
   */
  async checkLiveAgentAvailability() {
    const a = {
      type: "liveagent.availability",
      metadata: {}
    };
    return this.sendNonStreamingRequest(a);
  }
  /**
   * Request live agent handoff.
   * Initiates a handoff to a live agent.
   */
  async requestLiveAgentHandoff() {
    const a = {
      type: "liveagent.handoff",
      metadata: {}
    };
    return this.sendNonStreamingRequest(a);
  }
  /**
   * Send a text message to create a thread or add to an existing thread.
   * @param text - The message text content
   * @param threadId - Optional thread ID. If not provided, creates a new thread.
   * @param metadata - Optional message metadata (attachments and conversation options)
   */
  async sendTextMessage(a, t, n) {
    t ? await this.sendStreamingRequest(this.buildAddUserMessageRequest(a, t, n)) : await this.createThread(a, n);
  }
  /** Send a user message during live-agent mode via plain fetch instead of SSE. */
  async sendLiveAgentUserMessage(a, t, n) {
    return this.sendNonStreamingRequest(
      this.buildAddUserMessageRequest(a, t, n)
    );
  }
  /**
   * Create an attachment record on the server.
   * Returns an Attachment object with an upload_url for uploading the file content.
   * @param file - The file to create an attachment for
   * @param conversationId - Optional conversation ID to associate the attachment with
   */
  async createAttachment(a, t) {
    const n = {
      type: "attachments.create",
      params: {
        name: a.name,
        size: a.size,
        mime_type: a.type || "application/octet-stream"
      },
      // sendNonStreamingRequest will add session metadata via buildMetadata()
      metadata: t ? { conversationId: t } : {}
    };
    return this.sendNonStreamingRequest(n);
  }
  /**
   * Upload file content to the ChatKit upload API.
   * Sends the file as FormData to /api/chatkit/upload.
   */
  async uploadFileContent(a) {
    const { file: t, conversationId: n } = a;
    if (!this.credentials)
      throw new Error("Connector not initialized. Call initialize() first.");
    const r = this.getSessionState();
    if (!r || !at(r.phase))
      throw new Error("Cannot upload file: Session is not available or connected.");
    const i = Ut("/api/chatkit/upload"), o = new URL(i);
    n && o.searchParams.set("conversationId", n), r?.sessionId && o.searchParams.set("sessionId", r.sessionId);
    const l = new FormData();
    l.append("file", t);
    const u = this.httpService.getHeaders({
      "X-Session-ID": r.sessionId || ""
    });
    delete u["Content-Type"];
    const d = await fetch(o.toString(), {
      method: "POST",
      headers: u,
      body: l
    });
    if (!d.ok)
      throw new Error(`Failed to upload file: ${d.status} ${d.statusText}`);
  }
  /**
   * Upload a file and return the attachment ID.
   * Sends file directly to /api/chatkit/upload or /api/chatkit/dmsupload as FormData.
   * @param params - Upload parameters
   * @param params.file - The file to upload
   * @param params.conversationId - Optional conversation ID to associate the attachment with
   * @param params.source - Optional source of the attachment (local, cloud, external)
   * @param params.isDmsAvailable - Whether DMS is available for file uploads
   * @returns The attachment ID to use when sending a message
   */
  async uploadAttachment(a) {
    const { file: t, conversationId: n, source: r, isDmsAvailable: i } = a;
    if (!this.credentials)
      throw new Error("Connector not initialized. Call initialize() first.");
    const o = this.getSessionState();
    if (!o || !at(o.phase))
      throw new Error("Cannot upload file: Session is not available or connected.");
    const l = n || wa(o.phase);
    if (!l)
      throw new Error("Cannot upload file: conversationId is required but not provided");
    const d = Ut(i ? "/api/chatkit/dmsupload" : "/api/chatkit/upload"), c = new URL(d);
    c.searchParams.set("conversationId", l), o?.sessionId && c.searchParams.set("sessionId", o.sessionId), c.searchParams.set("name", t.name), c.searchParams.set("mimeType", t.type || "application/octet-stream"), r && c.searchParams.set("source", r), B(
      "ChatKitConnector",
      "uploadAttachment",
      `conversationId: ${l},`,
      `fileName: ${t.name},`,
      `fileSize: ${t.size},`,
      `mimeType: ${t.type}`
    );
    const h = new FormData();
    h.append("data", t, t.name);
    const m = this.httpService.getHeaders({
      "X-Session-ID": o.sessionId || ""
    });
    delete m["Content-Type"];
    const p = await fetch(c.toString(), {
      method: "POST",
      headers: m,
      body: h
    });
    if (!p.ok) {
      let g = `${p.status} ${p.statusText}`;
      try {
        const C = await p.json();
        B("ChatKitConnector", "Upload error response:", C), g = C.error || g;
      } catch (C) {
        B("ChatKitConnector", "Failed to parse error response:", C);
      }
      throw new Error(`Failed to upload file: ${g}`);
    }
    const F = await p.json();
    return B("ChatKitConnector", "Upload successful, attachmentId:", F.id), F;
  }
  /**
   * Shared helper for DMS POST requests (link/create cloud documents).
   * Uses httpService for timeout/abort support and proper error handling.
   */
  async postDmsRequest(a, t) {
    const n = this.getSessionState(), r = new URL(Ut(a));
    for (const [o, l] of Object.entries(t))
      r.searchParams.set(o, l);
    n?.sessionId && r.searchParams.set("sessionId", n.sessionId);
    const { data: i } = await this.httpService.post(r.toString(), {
      headers: { "X-Session-ID": n?.sessionId || "" },
      skipBaseUrl: !0
    });
    return i;
  }
  /**
   * Register an external cloud document as an attachment for the conversation.
   * @param params - Cloud document parameters
   * @returns The attachment object
   */
  async registerCloudDocument(a) {
    const { fileId: t, documentName: n, mimeType: r, size: i, conversationId: o, source: l } = a;
    B(
      "ChatKitConnector",
      "registerCloudDocument",
      `conversationId: ${o},`,
      `fileId: ${t},`,
      `documentName: ${n}`
    );
    const u = {
      conversationId: o,
      documentSysId: t,
      documentName: n,
      mimeType: r,
      size: i.toString(),
      ...l && { source: l }
    }, d = await this.postDmsRequest("/api/chatkit/dmslinkdocument", u);
    return B(
      "ChatKitConnector",
      "Cloud document registered successfully, attachmentId:",
      d.id
    ), d;
  }
  /**
   * Create a cloud document as an attachment for the conversation.
   * @param params - Cloud document creation parameters
   * @returns The attachment object
   */
  async createCloudDocument(a) {
    const { providerId: t, providerItemId: n, documentName: r, conversationId: i } = a;
    B(
      "ChatKitConnector",
      "createCloudDocument",
      `conversationId: ${i},`,
      `providerId: ${t},`,
      `providerItemId: ${n},`,
      `documentName: ${r}`
    );
    const o = await this.postDmsRequest("/api/chatkit/dmscloudcreate", {
      conversationId: i,
      providerId: t,
      providerItemId: n,
      documentName: r,
      source: "cloud"
    });
    return B(
      "ChatKitConnector",
      "Cloud document created successfully, attachmentId:",
      o.id
    ), o;
  }
  /**
   * Delete an attachment.
   * @param attachmentId - The ID of the attachment to delete
   */
  async deleteAttachment(a) {
    const t = {
      type: "attachments.delete",
      params: {
        attachment_id: a
      },
      metadata: {}
    };
    await this.sendNonStreamingRequest(t);
  }
  /**
   *    Send a server-define payload to the server
   */
  async sendCustomAction(a, t, n) {
    const r = {
      type: "threads.custom_action",
      params: {
        thread_id: t,
        item_id: n,
        action: a
      },
      metadata: {
        conversationId: t
      }
    };
    await this.sendStreamingRequest(r);
  }
  /**
   * Add an onClickAction or widget entry to the thread's history.
   *
   * @param action: The action config to be saved to page history
   * @param threadId - The thread ID to add page history to
   * @param itemId - The item ID for deduping purposes
   */
  async sendPageHistory(a, t, n) {
    const r = {
      type: "threads.add_page_history",
      params: {
        thread_id: t,
        item_id: n,
        action: a
      },
      metadata: {
        conversationId: t
      }
    };
    await this.sendNonStreamingRequest(r);
  }
  /**
   * Send a stop request to the server to signal that the user wants to stop processing.
   */
  async sendStopRequested(a) {
    const t = {
      type: "threads.stop",
      params: {
        thread_id: a
      },
      metadata: {
        conversationId: a
      }
    };
    await this.sendNonStreamingRequest(t);
  }
  /**
   * Send client tool execution result back to the server.
   * Called after a client tool has been executed to report the result.
   *
   * @param threadId - The thread ID where the tool call originated
   * @param result - The result of the client tool execution
   */
  async sendClientToolOutput(a, t) {
    const n = {
      type: "threads.add_client_tool_output",
      params: {
        thread_id: a,
        result: t
      },
      metadata: {
        conversationId: a
      }
    };
    await this.sendStreamingRequest(n);
  }
  /**
   * Create a new thread, optionally with an initial message and attachments.
   * Sends empty conversationId in metadata to signal server to create a new thread.
   * @param initialMessage - Optional initial message text
   * @param metadata - Optional message metadata (attachments and conversation options)
   */
  async createThread(a, t) {
    const { attachments: n = [], conversationOptions: r, secure: i, quotedText: o } = t || {}, l = {};
    if (a || n.length > 0) {
      const d = o?.trim(), c = typeof d == "string" && d.length > 0;
      l.input = {
        content: a ? [{ type: "input_text", text: a, ...i ? { secure: i } : {} }] : [],
        attachments: n,
        quoted_text: c ? d : null,
        inference_options: {}
      };
    }
    const u = {
      type: "threads.create",
      params: l,
      // Empty conversationId signals server to create a new thread
      metadata: {
        conversationId: "",
        ...kr(r)
      }
    };
    await this.sendStreamingRequest(u);
  }
  /**
   * Create a new thread with live agent handoff.
   * Used when the user requests a live agent and the current conversation is closed,
   * so a new thread must be created with initiateLiveAgent flag.
   */
  async createThreadForLiveAgent() {
    const t = {
      type: "threads.create",
      params: {
        initiateLiveAgent: !0
      },
      metadata: {
        conversationId: ""
      }
    };
    await this.sendStreamingRequest(t);
  }
  /**
   * Clean up all active EventSource connections.
   */
  disconnect() {
    for (const a of [...this.activeEventSources.keys()])
      this.closeEventSource(a);
  }
  /**
   * Abort currently calls disconnect().
   * When multiple eventsources is implemented, we call .close() on a specific event source.
   */
  abort() {
    this.disconnect();
  }
  /**
   * Close only the streaming connections associated with a specific thread.
   * Other active streams (e.g. for a different conversation) are left untouched.
   */
  closeStreamsByThreadId(a) {
    for (const [t, n] of [...this.activeEventSources])
      n === a && (B(
        "ChatKitConnector",
        `Closing stream [${t.streamId}] for thread ${a}`
      ), this.closeEventSource(t));
  }
  /**
   * Handles a response event from the SSE stream.
   * Emits the appropriate events based on whether the response is a ChatKitResponse or ThreadStreamEvent.
   * @private
   */
  reEmitInnerEvents(a, t) {
    if (Xn(t)) {
      this.handleErrorResponse(t);
      return;
    }
    if (Du(t)) {
      this.emit("event", t), this.emit("perf", { kind: "streamEvent", streamId: a, event: t });
      return;
    }
    this.emit("response", t);
    const n = t.events || [];
    for (const r of n)
      this.emit("event", r), this.emit("perf", { kind: "streamEvent", streamId: a, event: r });
  }
  /**
   * Handles an error response from conversation-server.
   * Emits thread_items as individual thread.item.added events (so the user sees the error message),
   * then emits an error event with the error message.
   * @private
   */
  handleErrorResponse(a) {
    if (B("ChatKitConnector", "Error response received:", a.error), a.thread_items)
      for (const t of a.thread_items) {
        const n = {
          type: "thread.item.added",
          item: t
        };
        this.emit("event", n);
      }
    this.emit("error", new Error(a.error));
  }
  buildAddUserMessageRequest(a, t, n) {
    const { attachments: r = [], conversationOptions: i, secure: o, quotedText: l } = n || {}, u = l?.trim(), d = typeof u == "string" && u.length > 0;
    return {
      type: "threads.add_user_message",
      params: {
        thread_id: t,
        input: {
          content: [{ type: "input_text", text: a, ...o ? { secure: o } : {} }],
          attachments: r,
          quoted_text: d ? u : null,
          inference_options: {}
        }
      },
      metadata: {
        conversationId: t,
        ...kr(i)
      }
    };
  }
  /**
   * Builds metadata object with instanceName, userId, and conversationId.
   * Values explicitly set in additionalMetadata take precedence over session defaults.
   * @private
   */
  buildMetadata(a, t = {}) {
    const n = { ...t }, r = _y(n, t);
    r("sessionId", a.sessionId), r("instanceName", a.instanceName), r("userId", a.userId);
    const i = wa(a.phase);
    r("conversationId", i), a.authToken && (n.authToken = a.authToken), r("consumerAccountId", a.consumerAccountId), r("pageContext", a.pageContext);
    const o = {
      ...a.customContext,
      deviceId: a.customContext?.deviceId ?? Bu()
    };
    r("customContext", o), typeof window < "u" && r("locationUrl", window.location.href), n.conversationId === "" && a.newConversationContext && !("newConversationContext" in t) && (n.newConversationContext = a.newConversationContext);
    const l = n.conversationId ?? "";
    return "clientInstanceId" in t || (n.clientInstanceId = this.sequenceTracker.currentInstanceId()), "clientSeq" in t || (n.clientSeq = this.sequenceTracker.nextSeq(l)), n.clientTs = Date.now(), "requestId" in t || (n.requestId = this.sequenceTracker.newRequestId()), "applications" in t || (n.applications = a.applications ?? null), "clientContext" in t || (n.clientContext = a.clientContext ?? null), n;
  }
  /**
   * Event system
   */
  on(a, t) {
    this.eventListeners.has(a) || this.eventListeners.set(a, /* @__PURE__ */ new Set()), this.eventListeners.get(a).add(t);
  }
  off(a, t) {
    const n = this.eventListeners.get(a);
    n && n.delete(t);
  }
  emit(a, ...t) {
    const n = this.eventListeners.get(a);
    if (n)
      for (const r of n)
        r(...t);
  }
  /** HTTP 401 Unauthorized — auth token is expired or invalid. */
  static HTTP_UNAUTHORIZED = 401;
  /**
   * If the error represents an HTTP 401 (unauthorized), emit it through
   * the connector's 'error' event so the bridge can dispatch sessionAuthFailed.
   * This ensures non-streaming and upload 401s are handled identically to
   * streaming 401s (which already flow through onerror → emit → bridge).
   */
  emitAuthErrorIfApplicable(a) {
    !(a instanceof jo) || a.status !== En.HTTP_UNAUTHORIZED || (Ve("ChatKitConnector", "Auth failure (401), emitting error event"), this.emit("error", a));
  }
  /**
   * Close a specific FetchEventSource and remove it from tracking.
   */
  closeEventSource(a) {
    const t = this.activeEventSources.delete(a);
    a.close(), t && this.emit("perf", { kind: "streamClose", streamId: a.streamId });
  }
  /**
   * Set up cleanup on page unload.
   */
  setupCleanup() {
    typeof window > "u" || window.addEventListener("beforeunload", () => {
      this.disconnect();
    });
  }
}
const ba = "RequestPerf", Ny = 50;
class xy {
  connector;
  storeId;
  bufferSize;
  buffer = [];
  streams = /* @__PURE__ */ new Map();
  items = /* @__PURE__ */ new Map();
  handlePerfEvent = (a) => {
    this.onPerf(a);
  };
  constructor(a) {
    this.connector = a.connector, this.storeId = a.storeId, this.bufferSize = a.bufferSize ?? Ny, this.connector.on("perf", this.handlePerfEvent), Ky(this);
  }
  dispose() {
    this.connector.off("perf", this.handlePerfEvent), Jy(this), this.streams.clear(), this.items.clear(), this.buffer.length = 0;
  }
  /** Returns a copy of the ring buffer, oldest first. */
  getBuffer() {
    return [...this.buffer];
  }
  getStoreId() {
    return this.storeId;
  }
  onPerf(a) {
    switch (a.kind) {
      case "streamStart":
        this.onStreamStart(a);
        return;
      case "firstByte":
        this.onFirstByte(a);
        return;
      case "streamEvent":
        this.onStreamEvent(a);
        return;
      case "streamError":
        this.onStreamError(a);
        return;
      case "streamClose":
        this.onStreamClose(a);
        return;
    }
  }
  onStreamStart(a) {
    const t = {
      streamId: a.streamId,
      requestType: a.requestType,
      threadId: a.threadId,
      startedAtEpoch: Date.now(),
      startedAtPerf: performance.now(),
      itemIds: /* @__PURE__ */ new Set()
    };
    this.streams.set(a.streamId, t), Ae(
      ba,
      `[${Ca()}] streamStart ${a.streamId} type=${a.requestType} threadId=${a.threadId ?? "n/a"}`
    );
  }
  onFirstByte(a) {
    const t = this.streams.get(a.streamId);
    t && (t.firstByteAt = performance.now(), Ae(
      ba,
      `[${Ca()}] firstByte ${a.streamId} +${ia(t.firstByteAt - t.startedAtPerf)}ms`
    ));
  }
  onStreamEvent(a) {
    const t = this.streams.get(a.streamId);
    if (!t)
      return;
    t.lastEventAt = performance.now();
    const n = a.event;
    if (Hy(n))
      switch (n.type) {
        case "thread.created":
          this.onThreadCreated(t, n);
          return;
        case "thread.item.added":
          this.onItemAdded(t, n);
          return;
        case "thread.item.updated":
          this.onItemUpdated(t, n);
          return;
        case "thread.item.done":
          this.onItemDone(t, n);
          return;
        case "thread.updated":
        case "thread.item.removed":
        case "thread.item.replaced":
        case "progress_update":
        case "error":
        case "notice":
        case "unified_recommendation":
          return;
      }
  }
  onThreadCreated(a, t) {
    const n = performance.now();
    a.threadCreatedAt = n;
    const r = t.thread?.id;
    r && (a.threadId = r), Ae(
      ba,
      `[${Ca()}] thread.created ${a.streamId} threadId=${r ?? "n/a"} +${ia(
        n - a.startedAtPerf
      )}ms`
    );
  }
  onItemAdded(a, t) {
    const n = t.item?.id;
    if (!n)
      return;
    const r = performance.now(), i = Oy(t.item), o = this.items.get(n);
    if (o && o.streamId === a.streamId) {
      o.reAddCount += 1, o.lastSeenAt = r, i && !o.itemType && (o.itemType = i), Ae(
        ba,
        `[${Ca()}] thread.item.added (re-add #${o.reAddCount}) ${a.streamId}/${n} type=${o.itemType ?? "unknown"} +${ia(r - a.startedAtPerf)}ms`
      );
      return;
    }
    a.firstItemAddedAt === void 0 && (a.firstItemAddedAt = r), a.itemIds.add(n), this.items.set(n, {
      streamId: a.streamId,
      addedAt: r,
      reAddCount: 0,
      lastSeenAt: r,
      itemType: i
    }), Ae(
      ba,
      `[${Ca()}] thread.item.added ${a.streamId}/${n} type=${i ?? "unknown"} +${ia(r - a.startedAtPerf)}ms`
    );
  }
  onItemUpdated(a, t) {
    const n = this.items.get(t.item_id);
    if (!n || n.streamId !== a.streamId)
      return;
    const r = performance.now();
    n.lastSeenAt = r, n.firstDeltaAt === void 0 && (n.firstDeltaAt = r, Ae(
      ba,
      `[${Ca()}] firstDelta ${a.streamId}/${t.item_id} +${ia(r - a.startedAtPerf)}ms`
    )), n.lastDeltaAt = r;
  }
  onItemDone(a, t) {
    const n = this.items.get(t.itemId);
    if (!n || n.streamId !== a.streamId)
      return;
    const r = performance.now();
    n.doneAt = r, n.lastSeenAt = r, Ae(
      ba,
      `[${Ca()}] thread.item.done ${a.streamId}/${t.itemId} +${ia(r - a.startedAtPerf)}ms`
    );
  }
  onStreamError(a) {
    const t = this.streams.get(a.streamId);
    t && (t.errorMessage = a.error.message, Ae(ba, `[${Ca()}] streamError ${a.streamId} ${a.error.message}`));
  }
  onStreamClose(a) {
    const t = this.streams.get(a.streamId);
    if (!t)
      return;
    const n = performance.now(), r = t.errorMessage ? "error" : "completed", i = [];
    for (const l of t.itemIds) {
      const u = this.items.get(l);
      u && (i.push(Gy(l, u, t)), this.items.delete(l));
    }
    const o = {
      streamId: t.streamId,
      requestType: t.requestType,
      threadId: t.threadId,
      startedAt: t.startedAtEpoch,
      outcome: r,
      errorMessage: t.errorMessage,
      durations: {
        total: ia(n - t.startedAtPerf),
        firstByte: St(t.firstByteAt, t.startedAtPerf),
        threadCreated: St(t.threadCreatedAt, t.startedAtPerf),
        timeToFirstItem: St(t.firstItemAddedAt, t.startedAtPerf),
        lastEventToClose: t.lastEventAt === void 0 ? void 0 : ia(n - t.lastEventAt)
      },
      items: i
    };
    this.pushToBuffer(o), B(
      ba,
      `[${Ca()}] streamClose ${t.streamId} startedAt=${Wy(t.startedAtEpoch)} outcome=${r} total=${o.durations.total}ms`,
      o
    ), this.streams.delete(a.streamId);
  }
  pushToBuffer(a) {
    this.buffer.push(a), this.buffer.length > this.bufferSize && this.buffer.shift();
  }
}
function Hy(e) {
  return typeof e.type == "string";
}
function St(e, a) {
  return e === void 0 ? void 0 : ia(e - a);
}
function ia(e) {
  return Math.round(e);
}
function Ca() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
function Wy(e) {
  return new Date(e).toISOString();
}
function Oy(e) {
  if (!e)
    return;
  const a = e.type;
  return typeof a == "string" ? a : void 0;
}
function Gy(e, a, t) {
  return {
    itemId: e,
    itemType: a.itemType,
    addedAt: ia(a.addedAt - t.startedAtPerf),
    reAddCount: a.reAddCount > 0 ? a.reAddCount : void 0,
    firstDeltaAt: St(a.firstDeltaAt, t.startedAtPerf),
    lastDeltaAt: St(a.lastDeltaAt, t.startedAtPerf),
    doneAt: St(a.doneAt, t.startedAtPerf),
    lastSeenAt: ia(a.lastSeenAt - t.startedAtPerf),
    status: a.doneAt === void 0 ? "incomplete" : "completed"
  };
}
const Dn = /* @__PURE__ */ new Set();
function Ky(e) {
  Dn.add(e), zy();
}
function Jy(e) {
  Dn.delete(e), Dn.size === 0 && typeof window < "u" && delete window.__lbfRequestPerf;
}
function zy() {
  typeof window > "u" || window.__lbfRequestPerf || (window.__lbfRequestPerf = {
    dump: () => [...Dn].map((e) => ({
      storeId: e.getStoreId().description ?? "unknown",
      summaries: e.getBuffer()
    }))
  });
}
const Qa = /* @__PURE__ */ new Map(), Vy = 500;
function $y(e) {
  for (const [a, t] of Qa)
    if (wa(t.store.getState().session.phase) === e)
      return a;
}
function lo(e) {
  const a = { current: null }, t = () => a.current?.getState().session ?? null, n = new Lu({
    getDefaultHeaders: () => {
      const c = t();
      if (!c)
        return {};
      const h = {};
      return c.sessionId && (h["X-Session-ID"] = c.sessionId), c.authToken && (h.Authorization = `Bearer ${c.authToken}`), h;
    }
  }), r = Tn ? (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Mock connector implements same interface; cast needed for conditional assignment
    new Iy()
  ) : new En({
    httpService: n,
    getSessionState: t
  }), i = new xu(), o = new Nu(a), l = _u({
    connector: r,
    httpService: n,
    clientToolsRegistry: i,
    componentId: e,
    telemetryService: o
  });
  a.current = l;
  const u = new xy({
    connector: r,
    storeId: l.storeId
  }), d = em(r, l);
  return {
    store: l,
    connector: r,
    httpService: n,
    clientToolsRegistry: i,
    telemetryService: o,
    requestPerfTracker: u,
    componentId: e,
    cleanupEventBridge: d
  };
}
function qy({ children: e, channel: a, componentId: t }) {
  const n = v(!1), r = v(a), i = v(null), o = v(null);
  Qo(() => {
    Ve(
      "Services",
      `Channel prop changed after initialization. This is not supported and will be ignored. Initial: "${r.current}", New: "${a}"`
    );
  });
  const l = r.current, u = ye(() => {
    if (!l)
      return n.current = !0, lo(t);
    if (Qa.has(l)) {
      const m = Qa.get(l);
      return m.refCount++, m.disposalTimer, clearTimeout(m.disposalTimer), m.disposalTimer = void 0, m;
    }
    const h = { ...lo(t), refCount: 1 };
    return Qa.set(l, h), h;
  }, [l, t]), d = M(
    (h) => {
      i.current = h, h && (Tu(u.store.storeId, h), o.current = Mu(u.store.storeId, h), Ru("bootstrap:start", void 0, u.store.storeId));
    },
    [u.store.storeId]
  );
  _(() => () => {
    o.current && (o.current(), o.current = null);
  }, []), _(() => () => {
    if (n.current) {
      u.cleanupEventBridge(), u.requestPerfTracker.dispose(), u.connector.dispose();
      return;
    }
    if (l && Qa.has(l)) {
      const h = Qa.get(l);
      if (h.refCount--, h.refCount > 0)
        return;
      h.disposalTimer = setTimeout(() => {
        h.refCount > 0 || (h.cleanupEventBridge(), h.requestPerfTracker.dispose(), h.connector.dispose(), Qa.delete(l));
      }, Vy);
    }
  }, [
    l,
    u.connector,
    u.cleanupEventBridge,
    u.requestPerfTracker
  ]), _(() => {
    Xo && typeof window < "u" && window.__LBF_TEST_HARNESS__ && (window.__LBF_TEST_HARNESS__.connector = u.connector);
  }, [u.connector]);
  const c = ye(
    () => ({
      connector: u.connector,
      httpService: u.httpService,
      clientToolsRegistry: u.clientToolsRegistry,
      telemetryService: u.telemetryService,
      storeId: u.store.storeId,
      componentId: u.componentId,
      rootRef: i,
      setRootRef: d
    }),
    [
      u.connector,
      u.httpService,
      u.clientToolsRegistry,
      u.telemetryService,
      u.store.storeId,
      u.componentId,
      i,
      d
    ]
  );
  return /* @__PURE__ */ s(Pu, { store: u.store, children: /* @__PURE__ */ s(Iu.Provider, { value: c, children: e }) });
}
function Uy({ children: e, rootRef: a }) {
  const t = He(), n = Et(), r = rt(), { showInteractiveView: i } = Dt(), { clientToolsRegistry: o } = da();
  _(() => {
    Vu(() => Mn(n.getState()));
  }, [n]), _(() => {
    o && o.setUIActions(r);
  }, [o, r]), _(() => {
    o && o.setContextElement(a.current);
  }, [o, a]), _(() => {
    o && o.setShowInteractiveView(i);
  }, [o, i]);
  const l = M(
    (c, h, m) => {
      o.register(c, h, m), $u({
        widgetId: c,
        actions: Object.entries(h).map(([p, F]) => {
          const { description: g, arguments: C } = qu(F);
          return {
            actionType: p,
            description: g,
            parameters: C ? { arguments: C } : void 0
          };
        }),
        description: m?.description,
        bestFor: m?.bestFor,
        enabledForInteractiveView: m?.enabledForInteractiveView
      }), B("ClientToolsProvider", `Registered tools for widget: ${c}`, {
        tools: Object.keys(h)
      });
    },
    [o]
  ), u = M(
    (c) => {
      o.unregister(c), Uu(c), B("ClientToolsProvider", `Unregistered tools for widget: ${c}`);
    },
    [o]
  );
  _(() => {
    B("ClientToolsProvider", "Subscribing to AIEL USER_INTENT_SET events");
    const c = async (m) => {
      const { widgetId: p, actionType: F, args: g } = m;
      Gu(m);
      const C = await Ku(
        {
          widgetId: p,
          actionType: F,
          args: g,
          dispatch: t,
          getState: n.getState,
          contextElement: a.current
        },
        o
      );
      C.handled ? Ei({
        ...m,
        data: C.result ?? null,
        success: C.success,
        errorMessage: C.error
      }) : (Ju(F, g), a.current?.dispatchEvent(
        new CustomEvent(F, {
          detail: g,
          bubbles: !0,
          composed: !0
        })
      ), B(
        "ClientToolsProvider",
        `Dispatched unhandled action to AIEL + DOM: ${F} on widget ${p}`
      ), zu(p) || Ei({
        ...m,
        data: null,
        success: !0
      }));
    }, h = Hu((m) => {
      const p = Ou(m);
      if (!p) {
        Ve("[ClientToolsProvider] Invalid client tool request from AIEL", m);
        return;
      }
      c(p);
    });
    return () => {
      h?.();
    };
  }, [t, n, r, o, a, i]);
  const d = ye(
    () => ({
      registerTools: l,
      unregisterTools: u
    }),
    [l, u]
  );
  return /* @__PURE__ */ s(Wu.Provider, { value: d, children: e });
}
const jy = ({
  children: e,
  initialActiveWidgetId: a
}) => {
  const { rootRef: t, setRootRef: n, storeId: r } = da(), [i, o] = Y(
    a ?? null
  ), [l, u] = Y(a);
  return a !== l && (u(a), o(a ?? null)), ju(t, r, "chat-inline"), Yu(), /* @__PURE__ */ s(
    Zu.Provider,
    {
      value: { rootRef: t, setRootRef: n, activeWidgetId: i, setActiveWidgetId: o },
      children: e
    }
  );
};
function Vr() {
  const e = N(Qu), { isMobileExperience: a } = Ba(), t = N(Xu);
  return e && !a && !t;
}
function Ln({
  itemCount: e,
  onSelect: a,
  onClose: t,
  wrap: n = !1,
  columns: r = 1,
  onBoundaryExit: i,
  handleTab: o = !1
}) {
  const [l, u] = Y(0), d = M(() => {
    u(0);
  }, []), c = M(
    (m) => {
      u((p) => {
        const F = p + m;
        return n ? F < 0 ? e - 1 : F >= e ? 0 : F : Math.min(Math.max(F, 0), e - 1);
      });
    },
    [e, n]
  ), h = M(
    (m) => {
      m.key === "ArrowDown" ? (m.preventDefault(), c(r)) : m.key === "ArrowUp" ? (m.preventDefault(), l < r && i ? i() : c(-r)) : m.key === "ArrowRight" && r > 1 ? (m.preventDefault(), c(1)) : m.key === "ArrowLeft" && r > 1 ? (m.preventDefault(), l === 0 && i ? i() : c(-1)) : m.key === "Enter" ? a && l >= 0 && l < e && (m.preventDefault(), a(l)) : m.key === "Escape" && t ? (m.preventDefault(), m.stopPropagation(), t()) : o && m.key === "Tab" && (m.preventDefault(), m.stopPropagation(), c(m.shiftKey ? -1 : 1));
    },
    [r, e, l, c, a, t, i, o]
  );
  return { selectedIndex: l, resetSelection: d, navigateOnKeyDown: h };
}
const Yy = "400", Zy = {
  animationMedium: Yy
};
function Qy(e, a = []) {
  const [t, n] = Y(!1), r = Tr(e);
  return _(() => {
    t && (r(), n(!1));
  }, [t, ...a]), M(() => {
    n(!0);
  }, []);
}
const Oe = "[useMessageListScrolling]";
var Er = /* @__PURE__ */ ((e) => (e.Idle = "idle", e.Down = "down", e.Up = "up", e))(Er || {});
function Xy(e) {
  if (!e || !(e instanceof Element))
    return 0;
  const a = getComputedStyle(e).paddingBlockStart;
  return parseFloat(a) || 0;
}
function lr(e, a) {
  const t = e.getBoundingClientRect(), n = a.getBoundingClientRect();
  return Math.round(e.scrollTop + n.top - t.top);
}
function uo(e, a, t) {
  const { scrollTop: n, scrollHeight: r, clientHeight: i } = e, o = n + i - r + t;
  return Math.max(a, o);
}
const ef = 8, af = 20, tf = 1.3, nf = (e) => {
  const a = e.firstElementChild;
  return (a ? a.scrollHeight : 0) < tf * e.clientHeight;
};
function rf({
  messagesContainerRef: e,
  lastUserMessageRef: a,
  lastMessageRef: t,
  items: n,
  lastUserMessageId: r,
  threadId: i,
  isAgentResponding: o,
  scrollToTopOnOpen: l = !1,
  onScrollDirectionChange: u
}) {
  const { actions: d, state: c } = xa(), h = Ie(l), m = v(null), p = v(0), F = v(null), [g, C] = Y(0), E = v(0), k = v("ready"), I = M(() => k.current === "ready", []), f = v(!1), b = v({
    containerHeight: 0,
    topOffset: 0,
    lastKnownScrollTop: 0
  }), S = v(i);
  i !== S.current && (S.current = i, b.current.lastKnownScrollTop = 0);
  const D = v(0), L = v(
    "idle"
    /* Idle */
  ), R = v(u);
  R.current = u, it(() => {
    const O = e.current;
    if (!O || !r)
      return;
    const U = b.current.lastKnownScrollTop, j = O.scrollTop;
    if (j >= U)
      return;
    const J = O.scrollHeight - O.clientHeight;
    if (U > J && J >= 0) {
      const H = Math.ceil(U - J), ne = (t.current ?? a.current)?.parentElement;
      if (ne) {
        const ie = (parseFloat(ne.style.minHeight) || 0) + H;
        ne.style.minHeight = `${ie}px`, E.current = ie, C(ie);
      }
    }
    Ia(Oe, va.VERBOSE) && Ae(Oe, "restoreScrollTop", {
      savedTop: U,
      currentTop: j,
      maxScroll: J,
      scrollHeight: O.scrollHeight,
      clientHeight: O.clientHeight
    }), O.scrollTop = U;
  }, [n, g, r]);
  const y = v(c.isMessageListScrolledToTop), T = Di(() => {
    const O = e.current;
    if (!O)
      return;
    const U = O.scrollTop, { topOffset: j } = b.current, J = U < j;
    y.current !== J && (d.setIsMessageListScrolledToTop(J), y.current = J);
  }, [b, e, d]);
  _(() => {
    const O = e.current;
    if (!O)
      return;
    b.current.topOffset === 0 && (b.current.topOffset = Xy(O));
    const U = O.scrollTop;
    b.current.lastKnownScrollTop = U, D.current = U;
    const { topOffset: j } = b.current, J = U < j;
    y.current !== J && (d.setIsMessageListScrolledToTop(J), y.current = J);
    const H = () => {
      const V = O.scrollTop;
      b.current.lastKnownScrollTop = V;
      const ne = V - D.current;
      D.current = V;
      let $ = null;
      V <= af && L.current !== "up" ? $ = "up" : ne <= -6 ? L.current !== "up" && ($ = "up") : ne >= ef && L.current !== "down" && !nf(O) && ($ = "down"), $ !== null && (L.current = $, R.current?.($));
    };
    return O.addEventListener("scroll", H, { passive: !0 }), O.addEventListener("scroll", T, { passive: !0 }), () => {
      O.removeEventListener("scroll", H), O.removeEventListener("scroll", T);
    };
  }, [e, T, d, b]);
  const x = M(() => {
    if (!e.current)
      return;
    const O = e.current.clientHeight;
    Ia(Oe, va.VERBOSE) && Ae(Oe, "updateContainerMeasurements", {
      containerHeight: O
    }), b.current.containerHeight = O;
  }, [b, e]), w = M(() => {
    if (!e.current || !a.current || n.length === 0)
      return Ia(Oe, va.VERBOSE) && Ae(Oe, "computeSpacerHeight.empty", {
        hasContainer: !!e.current,
        hasLastUserMessageRef: !!a.current,
        itemsLength: n.length
      }), 0;
    const O = e.current, { containerHeight: U } = b.current;
    if (r === n[n.length - 1].id) {
      const K = uo(
        O,
        U,
        E.current
      );
      return Ia(Oe, va.VERBOSE) && Ae(Oe, "computeSpacerHeight.userOnlyMessage", {
        containerHeight: U,
        finalHeight: K,
        scrollTop: O.scrollTop,
        scrollHeight: O.scrollHeight,
        appliedSpacer: E.current
      }), K;
    }
    if (!t.current)
      return Ia(Oe, va.VERBOSE) && Ae(Oe, "computeSpacerHeight.noLastMessageRef", {
        scrollTop: O.scrollTop,
        scrollHeight: O.scrollHeight,
        appliedSpacer: E.current
      }), null;
    const J = a.current.offsetHeight, H = lr(O, a.current), V = H + J, ne = lr(O, t.current);
    if (ne === 0 && V > 0)
      return Ia(Oe, va.VERBOSE) && Ae(Oe, "computeSpacerHeight.pendingLayout", {
        lastMessageTop: ne,
        userMessageBottom: V,
        scrollTop: O.scrollTop,
        scrollHeight: O.scrollHeight,
        appliedSpacer: E.current
      }), null;
    const $ = Math.max(
      0,
      ne - V
    ), ie = Math.max(
      0,
      U - J - $
    ), z = uo(
      O,
      ie,
      E.current
    );
    return Ia(Oe, va.VERBOSE) && Ae(Oe, "computeSpacerHeight", {
      userMessageTop: H,
      userMessageHeight: J,
      userMessageBottom: V,
      lastMessageTop: ne,
      gapBetweenUserMessageBottomAndLastMessageTop: $,
      spacerHeight: ie,
      finalHeight: z,
      containerHeight: U,
      scrollTop: O.scrollTop,
      scrollHeight: O.scrollHeight,
      appliedSpacer: E.current,
      clamped: z > ie
    }), z;
  }, [
    E,
    b,
    n,
    t,
    r,
    a,
    e
  ]), A = Di(() => {
    const O = w();
    O !== null && O !== E.current && (E.current = O, C(O));
  }, [w, n.length]), W = M(() => {
    x(), A();
  }, [x, A]);
  Bn(e, W);
  const P = Qy(() => {
    !a.current || !e.current || Ih({
      container: e.current,
      targetElement: a.current,
      position: "start",
      duration: Number(Zy.animationMedium)
    });
  }, [a, e, g]);
  return es(
    function() {
      if (i !== F.current) {
        m.current = null, p.current = 0, F.current = i;
        return;
      }
      const J = n.filter(Rn).filter(Xe).length;
      r !== null && r !== m.current && J > p.current && (A(), h.current || P()), m.current = r, p.current = J;
    },
    [n, r, i, A, P]
  ), _(() => {
    f.current = !0, L.current = "idle";
  }, [i]), _(() => {
    if (!f.current || !i || !r) {
      k.current = "ready";
      return;
    }
    k.current = "scrolling";
    let O = !1;
    const U = 10;
    let j = 0;
    const J = () => {
      if (O)
        return;
      const H = e.current, V = a.current, ne = t.current;
      if (!H || !V) {
        ++j < U ? requestAnimationFrame(J) : (f.current = !1, k.current = "ready");
        return;
      }
      x();
      const $ = o ? null : w();
      if ($ !== null && $ > 0) {
        E.current = $, C($);
        const K = (ne ?? V).parentElement;
        K && (K.style.minHeight = `${$}px`);
      }
      const ie = h.current ? 0 : lr(H, V);
      H.scrollTop = ie, f.current = !1, k.current = "ready", Ia(Oe, va.VERBOSE) && Ae(Oe, "conversationSwitchScroll", {
        targetScrollTop: ie,
        spacerHeight: $,
        scrollTop: H.scrollTop,
        scrollHeight: H.scrollHeight,
        clientHeight: H.clientHeight,
        frameCount: j
      });
    };
    return requestAnimationFrame(J), () => {
      O = !0, k.current = "ready";
    };
  }, [i, r]), {
    spacerMinHeight: g,
    isScrollReady: I
  };
}
const of = "--message-wrapper-height", sf = '[data-testid^="message-wrapper-"]';
function lf(e) {
  if (e.length === 0)
    return null;
  const a = [...e].sort((r, i) => r - i), t = Math.floor(a.length / 2), n = a.length % 2 === 0 ? (a[t - 1] + a[t]) / 2 : a[t];
  return Math.round(n);
}
function uf(e, a, t) {
  const n = v(null), r = v(null);
  _(() => () => {
    r.current?.disconnect();
  }, []), es(() => {
    r.current?.disconnect(), r.current = null;
    const i = e.current;
    if (!i || !t || a === 0)
      return;
    const o = i.querySelectorAll(sf);
    if (o.length === 0)
      return;
    const l = [];
    let u = o.length;
    const d = new IntersectionObserver(
      (c) => {
        for (const m of c) {
          if (!m.isIntersecting)
            continue;
          const p = m.target;
          !(p instanceof HTMLElement) || p.offsetHeight === 0 || l.push(p.offsetHeight);
        }
        if (u -= c.length, u > 0)
          return;
        d.disconnect(), r.current = null;
        const h = lf(l);
        h === null || h === n.current || (n.current = h, i.style.setProperty(of, `${h}px`));
      },
      { root: i, threshold: 0 }
    );
    r.current = d;
    for (const c of o)
      d.observe(c);
  }, [e, a, t]);
}
const cf = 15e3, df = 3e4, hf = 3e5;
function mf({
  activeConversationId: e,
  isAgentResponding: a
}) {
  const t = He(), n = Et(), r = _s(), i = Ie(e), o = Ie(a), l = v(a ? Date.now() : null), u = ec(() => {
    const h = n.getState().conversation;
    return { items: h.items, status: h.statusMessageByThreadItem };
  });
  _(() => {
    if (!a) {
      l.current = null;
      return;
    }
    l.current === null && (l.current = Date.now());
  }, [a]);
  const d = M(() => {
    try {
      const h = l.current, m = i.current;
      if (h === null || !m)
        return;
      const p = n.getState().conversation, F = p.items !== u.current.items || p.statusMessageByThreadItem !== u.current.status;
      if (u.current = {
        items: p.items,
        status: p.statusMessageByThreadItem
      }, F) {
        l.current = Date.now();
        return;
      }
      const g = Date.now() - h;
      if (g >= hf) {
        B("RespondingWatchdog", "hard timeout reached, unblocking input", {
          conversationId: m,
          elapsedMs: g
        }), t(bn(m)), t(ac(!1)), l.current = null;
        return;
      }
      g >= df && (B("RespondingWatchdog", "responding stalled, syncing for recovery", {
        conversationId: m,
        elapsedMs: g
      }), t(bn(m)));
    } catch (h) {
      fe("RespondingWatchdog", "watchdog tick failed:", h);
    }
  }, [t, n, u]), c = M(() => {
    const h = !!r.current, m = o.current, p = !!i.current;
    return h && m && p;
  }, [r]);
  zr({
    intervalMs: cf,
    fire: d,
    shouldFire: c,
    // Restart the window timer when the turn state or active conversation changes.
    resetKey: `${a}|${e ?? ""}`
  });
}
const Ht = {
  /**
   * Databroker endpoint path (relative URL).
   * The httpService will prepend the backend URL from config.
   */
  ENDPOINT: "/api/now/uxf/databroker/exec",
  /**
   * Definition sys_id for the search composite databroker API record in sys_ux_data_broker_composite table.
   * This ID is the same across all environments/experiences.
   * @see https://code.devsnc.com/dev/glide/blob/master/glide-search/src/main/plugins/com.glide.search/update/sys_ux_data_broker_composite_0cac8b3073ad101052c7d5fdbdf6a78a.xml
   */
  DEFINITION_SYS_ID: "0cac8b3073ad101052c7d5fdbdf6a78a",
  /**
   * Request timeout in milliseconds.
   */
  TIMEOUT_MS: 3e4,
  /**
   * HTTP status code indicating successful execution.
   */
  SUCCESS_STATUS: 200
};
function pf(e) {
  const { searchTerm: a, searchContextConfigId: t, sortOptionId: n, portalId: r } = e, i = "JSON_LITERAL", o = n ? JSON.stringify([n]) : "[]", l = {
    disableSpellCheck: {
      type: i,
      value: "true"
    },
    searchTerm: {
      type: i,
      value: a
    },
    sortOptions: {
      type: i,
      value: o
    },
    searchContextConfigId: {
      type: i,
      value: t
    },
    searchPurview: {
      type: i,
      value: "REGULAR"
    }
  };
  return r && (l.additionalContext = {
    type: i,
    value: JSON.stringify({ portalId: r, request_origin: { origin: "portal" } })
  }), [
    {
      definitionSysId: Ht.DEFINITION_SYS_ID,
      type: "GRAPHQL",
      inputValues: l
    }
  ];
}
async function Ff(e) {
  const { searchTerm: a, httpService: t, searchApplicationId: n, sortOptionId: r, portalId: i } = e;
  if (!a)
    throw new Error("[SearchService] searchTerm is required");
  if (!n)
    throw new Error("[SearchService] searchApplicationId is required");
  const o = pf({
    searchTerm: a,
    searchContextConfigId: n,
    sortOptionId: r,
    portalId: i
  });
  B("SearchService", "Fetching search results:", {
    searchTerm: a,
    sortOptionId: r,
    searchApplicationId: n,
    endpoint: Ht.ENDPOINT
  });
  try {
    const u = (await t.post(Ht.ENDPOINT, {
      skipBaseUrl: !0,
      body: o,
      timeout: Ht.TIMEOUT_MS
    })).data;
    if (!u.result || u.result.length === 0)
      return fe("SearchService", "No results in search databroker response"), null;
    const d = u.result[0];
    if (d.errors && d.errors.length > 0)
      return fe("SearchService", "Search Databroker execution errors:", d.errors), null;
    if (d.status !== Ht.SUCCESS_STATUS)
      return fe("SearchService", "Search Databroker returned non-success status:", d.status), null;
    const { searchMetadata: c, searchResultsTemplates: h } = d.executionResult, m = {
      term: c.searchResultMetadata.searchTerm,
      count: c.searchResultMetadata.count,
      searchResults: h.items,
      filters: c.filters,
      sortOptions: c.sortOptions,
      searchAnalyticsPayload: c.searchResultMetadata.searchAnalyticsPayload
    };
    return B("SearchService", "Search results received:", {
      term: m.term,
      count: m.count,
      resultCount: m.searchResults.length,
      sortOptionsCount: m.sortOptions?.length ?? 0,
      filtersCount: m.filters?.length ?? 0
    }), m;
  } catch (l) {
    return l instanceof Error && l.name === "AbortError" ? (fe("SearchService", "Request aborted (timeout)"), null) : l instanceof Error ? (fe("SearchService", "Request failed:", l.message), null) : (fe("SearchService", "Unknown error:", l), null);
  }
}
const el = 1e3, gf = 60, al = 60, tl = 24, nl = 7, rl = 30, il = 365, ol = gf * el, sl = al * ol, _n = tl * sl, yf = nl * _n, ff = rl * _n, bf = il * _n, Cf = 1e12, vf = (e) => {
  const a = typeof e == "number" ? e : Number(e);
  if (!isNaN(a) && a > 0) {
    const t = a < Cf ? a * el : a;
    return new Date(t);
  }
  return new Date(e);
}, kf = /^(Just now|\d+ (minute|hour|day|week|month|year)s? ago)$/, Af = (e) => kf.test(e), ft = (e, a) => e === 1 ? `1 ${a} ago` : `${e} ${a}s ago`, Sf = (e) => {
  const a = Math.floor(e / ol);
  if (a < 1)
    return "Just now";
  if (a < al)
    return ft(a, "minute");
  const t = Math.floor(e / sl);
  if (t < tl)
    return ft(t, "hour");
  const n = Math.floor(e / _n);
  return n < nl ? ft(n, "day") : n < rl ? ft(Math.floor(e / yf), "week") : n < il ? ft(Math.floor(e / ff), "month") : ft(Math.floor(e / bf), "year");
}, wf = (e) => {
  if (e == null || e === "")
    return;
  if (typeof e == "string" && Af(e))
    return e;
  const a = vf(e);
  if (isNaN(a.getTime()))
    return;
  const t = Date.now() - a.getTime();
  return Sf(t);
};
function co(e) {
  if (e)
    return e.replace(/<\/?highlight>/g, "").trim();
}
function Ef(e) {
  const { propValues: a } = e, { model: t, clickAction: n } = a, r = a.titleLabel || a.title || t.ai_search_teaser_title, i = co(r) || t.short_description || t.name || "", o = co(a.summary) || t.description, l = a.textHeaderLabelOne || "", u = wf(t.sys_updated_on), d = n?.actionPayload?.url || "";
  return {
    sysId: t.sysId || t.sys_id || "",
    title: i,
    description: o,
    source: l,
    sourceType: t.table,
    timestamp: u,
    url: d,
    external: !1
  };
}
function Df(e) {
  return e.searchResults.map(Ef);
}
function Bf(e) {
  if (!e || e.length === 0)
    return [];
  const a = {
    sysId: null,
    label: "Most relevant"
  }, t = e.map((n) => ({
    sysId: n.sysId,
    label: n.label
  }));
  return [a, ...t];
}
function Tf(e) {
  if (!e.length)
    return [];
  const a = /* @__PURE__ */ new Map();
  for (const r of e) {
    const i = r.source;
    i && a.set(i, (a.get(i) || 0) + 1);
  }
  const t = {
    sysId: null,
    label: "All",
    count: e.length
  }, n = Array.from(a.entries()).map(
    ([r, i]) => ({
      sysId: r.toLowerCase().replace(/\s+/g, "_"),
      label: r,
      count: i
    })
  );
  return [t, ...n];
}
async function Mf(e) {
  const {
    rewrittenQuery: a,
    httpService: t,
    sourcesWidget: n,
    searchApplicationId: r,
    sortOptionId: i,
    portalId: o
  } = e;
  try {
    const l = await Ff({
      searchTerm: a,
      httpService: t,
      searchApplicationId: r,
      sortOptionId: i,
      portalId: o
    });
    if (!l)
      return { widget: { ...n, relatedSectionLoading: !1 } };
    const u = Df(l), d = Tf(u), c = Bf(l.sortOptions);
    return {
      widget: {
        ...n,
        results: [...n.results, ...u],
        filters: d.length > 0 ? d : n.filters,
        sortOptions: c.length > 0 ? c : n.sortOptions,
        relatedSectionLoading: !1
      },
      searchAnalyticsPayload: l.searchAnalyticsPayload
    };
  } catch (l) {
    return fe("SourcesWidget", "Error fetching search results:", l), { widget: { ...n, relatedSectionLoading: !1 } };
  }
}
const nn = "SearchResultsWidget", $r = /* @__PURE__ */ new Map();
function ho(e) {
  const { storeId: a, widgetId: t, query: n, searchApplicationId: r, sortOptionId: i } = e, o = i ?? "default";
  return `${String(a)}|${t}|${n}|${r}|${o}`;
}
const Wt = /* @__PURE__ */ new Map();
function Rf() {
  $r.clear(), Wt.clear();
}
function mo(e, a) {
  const t = Wt.get(e);
  if (t)
    return t;
  const n = Mf(a).then((r) => {
    const i = {
      widget: r.widget,
      searchAnalyticsPayload: r.searchAnalyticsPayload
    };
    return $r.set(e, i), r.searchAnalyticsPayload && dc(r.searchAnalyticsPayload), i;
  });
  return Wt.set(e, n), n.finally(() => {
    Wt.get(e) === n && Wt.delete(e);
  }), n;
}
function If(e, a) {
  const t = e.findIndex((n) => n.id === a);
  if (t !== -1)
    for (let n = t - 1; n >= 0; n--) {
      const r = e[n];
      if (uc(r) && cc(r.content))
        return r.content.rewrittenQuery;
      if (Xe(r))
        break;
    }
}
const Pf = "sources-panel";
function Lf({
  item: e,
  isStreaming: a,
  renderSearchResults: t
}) {
  const n = `${Pf}-${e.id}`, { showInteractiveView: r, closeInteractiveView: i, isWidgetActive: o } = Dt(), { httpService: l, storeId: u } = da(), d = N(tc), c = N($o), m = c?.deploymentDocumentTable === "sp_portal" && c?.experienceName === "portal" ? c?.deploymentDocumentId : void 0, p = N(Ha), F = N(as), [g, C] = Y(!1), E = v(p);
  _(() => {
    E.current !== p && (E.current = p, Rf());
  }, [p]);
  const k = M(
    (A) => {
      const W = A.payload;
      r({
        type: typeof W?.type == "string" ? W.type : "unknown",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- widgetData shape matches SearchResults when coming from interactiveView.show actions
        widgetData: W,
        widgetId: typeof W?.widget_id == "string" ? W.widget_id : void 0,
        preventPersistToHistory: !0
      });
    },
    [r]
  ), I = ye(
    () => (A) => {
      const W = Mr(A);
      return If(W, e.id) ?? nc(A);
    },
    [e.id]
  ), f = N(I), b = v(!0);
  _(() => () => {
    b.current = !1;
  }, []);
  const S = v(o);
  S.current = o;
  const D = v(null), L = M(
    (A) => {
      const W = f;
      if (!W || !d || !D.current)
        return;
      C(!0);
      const P = ho({
        storeId: u,
        widgetId: n,
        query: W,
        searchApplicationId: d,
        sortOptionId: A
      });
      mo(P, {
        rewrittenQuery: W,
        httpService: l,
        sourcesWidget: {
          ...D.current,
          results: [],
          relatedSectionLoading: !0
        },
        searchApplicationId: d,
        sortOptionId: A,
        portalId: m
      }).then((O) => {
        if (C(!1), !b.current || !S.current(n))
          return;
        const U = {
          ...O.widget,
          onInteractiveViewAction: k,
          onSortChange: L,
          initialSortId: A,
          searchQuery: W,
          searchApplicationId: d,
          searchAnalyticsPayload: O.searchAnalyticsPayload,
          storeId: u
        };
        r({
          type: nn,
          widgetId: n,
          widgetData: U,
          renderCallback: (j) => t(j, U),
          preventPersistToHistory: !0
        });
      });
    },
    [
      f,
      d,
      m,
      l,
      n,
      k,
      r,
      t,
      u
    ]
  ), R = v(F);
  _(() => {
    const A = R.current;
    R.current = F, F && F !== A && o(n) && i();
  }, [F, i, o, n]);
  const y = ye(() => {
    if (a)
      return [];
    if (ca(e))
      return e.content.filter((A) => A.type === "output_text").flatMap((A) => A.annotations || []);
    if (rc(e)) {
      const { payload: A } = e.widget;
      if (A?.type === "output_text")
        return A.annotations || [];
    }
    return [];
  }, [e, a]), T = ye(() => {
    const A = ic(y, { title: At("Sources and more") }), W = oc(y);
    return {
      ...A,
      filters: W
    };
  }, [y]);
  D.current = T;
  const x = M(async () => {
    if (o(n)) {
      i();
      return;
    }
    const A = f, W = A && d, P = W ? ho({
      storeId: u,
      widgetId: n,
      query: A,
      searchApplicationId: d,
      sortOptionId: null
    }) : null, O = P ? $r.get(P) : null;
    if (O) {
      const H = {
        ...O.widget,
        onInteractiveViewAction: k,
        onSortChange: L,
        initialSortId: null,
        searchQuery: A,
        searchApplicationId: d,
        searchAnalyticsPayload: O.searchAnalyticsPayload,
        storeId: u
      };
      r({
        type: nn,
        widgetId: n,
        widgetData: H,
        renderCallback: (V) => t(V, H),
        preventPersistToHistory: !0
      });
      return;
    }
    const U = {
      ...T,
      relatedSectionLoading: !!W,
      onInteractiveViewAction: k,
      onSortChange: L,
      initialSortId: null,
      searchQuery: A,
      searchApplicationId: d,
      storeId: u
    };
    if (r({
      type: nn,
      widgetId: n,
      widgetData: U,
      renderCallback: (H) => t(H, U),
      preventPersistToHistory: !0
    }), !W || !P)
      return;
    C(!0);
    const j = await mo(P, {
      rewrittenQuery: A,
      httpService: l,
      sourcesWidget: T,
      searchApplicationId: d,
      portalId: m
    });
    if (C(!1), !b.current || !S.current(n))
      return;
    const J = {
      ...j.widget,
      onInteractiveViewAction: k,
      onSortChange: L,
      initialSortId: null,
      searchQuery: A,
      searchApplicationId: d,
      searchAnalyticsPayload: j.searchAnalyticsPayload,
      storeId: u
    };
    r({
      type: nn,
      widgetId: n,
      widgetData: J,
      renderCallback: (H) => t(H, J),
      preventPersistToHistory: !0
    });
  }, [
    o,
    n,
    i,
    r,
    T,
    f,
    l,
    d,
    m,
    k,
    L,
    t,
    u
  ]), w = ye(
    () => y.some((A) => !sc(A) && !lc(A)),
    [y]
  );
  return {
    annotations: y,
    hasSources: w,
    showSourcesInInteractiveView: x,
    isLoadingSearchResults: g,
    isSourcesPanelActive: o(n)
  };
}
const po = 1.5;
function _f({
  textareaRef: e,
  inputValue: a
}) {
  const [t, n] = Y(0), [r, i] = Y(!1), o = M(() => {
    const u = e.current;
    if (!u)
      return;
    u.style.height = "auto", u.style.height = `${u.scrollHeight}px`;
    const d = parseFloat(getComputedStyle(u).lineHeight);
    if (!d || isNaN(d))
      return;
    const c = u.scrollHeight / d;
    n(c);
  }, [e]);
  _(() => {
    t > po && !r ? i(!0) : a.length === 0 && r && i(!1);
  }, [t, a, r]), it(() => {
    o();
  }, [a, o]), Bn(e, o);
  const l = t > po;
  return { isExpanded: r, isMultiLine: l };
}
function Nf(e, a) {
  const t = v(0);
  return _(() => () => cancelAnimationFrame(t.current), []), M(
    (n) => {
      const r = e.current;
      if (!r)
        return;
      const i = r.selectionStart ?? r.value.length, o = r.selectionEnd ?? i, l = r.value.substring(0, i), u = r.value.substring(o);
      a(l + n + u), cancelAnimationFrame(t.current), t.current = requestAnimationFrame(() => {
        const d = i + n.length;
        r.selectionStart = d, r.selectionEnd = d, r.focus();
      });
    },
    [e, a]
  );
}
const xf = 80, Fo = { text: "", rect: null };
function Hf(e) {
  const a = e.getRootNode();
  if (!(a instanceof ShadowRoot))
    return document.getSelection();
  const t = a.getSelection;
  return typeof t != "function" ? document.getSelection() : t.call(a) ?? document.getSelection();
}
function Wf(e, a) {
  return e.contains(a.startContainer);
}
function Of(e) {
  const [a, t] = Y(Fo);
  return _(() => {
    let n = !1;
    const r = () => {
      n = !1, t((h) => h.text || h.rect ? Fo : h);
    }, i = () => {
      const h = e.current;
      if (!h || !h.isConnected) {
        r();
        return;
      }
      const m = Hf(h);
      if (!m || m.isCollapsed || !m.rangeCount) {
        r();
        return;
      }
      const p = m.toString().trim(), F = m.getRangeAt(0);
      if (!p || !Wf(h, F)) {
        r();
        return;
      }
      n = !0, B("TextSelection", "detected", {
        textPreview: p.slice(0, xf)
      }), t({ text: p, rect: F.getBoundingClientRect() });
    };
    let o = null;
    const l = () => {
      o === null && (o = requestAnimationFrame(() => {
        o = null, i();
      }));
    }, u = e.current?.getRootNode(), d = u instanceof ShadowRoot ? u : document;
    d.addEventListener("selectionchange", l), d !== document && document.addEventListener("selectionchange", l), document.addEventListener("mouseup", l), document.addEventListener("touchend", l);
    const c = () => {
      n && l();
    };
    return window.addEventListener("scroll", c, { capture: !0, passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), () => {
      o !== null && cancelAnimationFrame(o), d.removeEventListener("selectionchange", l), d !== document && document.removeEventListener("selectionchange", l), document.removeEventListener("mouseup", l), document.removeEventListener("touchend", l), window.removeEventListener("scroll", c, { capture: !0 }), window.removeEventListener("resize", c);
    };
  }, []), a;
}
const Gf = 30, Kf = 12, Jf = 3e3, zf = 4e3;
function Vf() {
  let e = !1, a = !1, t = !1, n = null;
  return {
    observe(r, i) {
      if (e ? r < Kf && (e = !1) : r >= Gf && (e = !0, a = !0, t = !0), e)
        return n = null, { isSilent: !1, autoStop: null };
      n === null && (n = i);
      const o = i - n;
      return t ? {
        isSilent: !0,
        autoStop: o >= Jf ? "trailing-silence" : null
      } : {
        isSilent: !0,
        autoStop: o >= zf ? "no-speech" : null
      };
    },
    heardSpeech: () => a
  };
}
const $f = 64, qf = 100, Uf = 6e4, jf = 30 * 1024 * 1024;
function Yf({
  transcribe: e,
  onTranscription: a,
  onError: t,
  onRecordingStart: n,
  onProcessingStart: r
}) {
  const { t: i } = le(), o = Ie(n), l = Ie(r), [u, d] = Y(!1), [c, h] = Y(!1), [m, p] = Y(!1), F = v(null), g = v(null), C = v(!1), E = M((f) => {
    f.silenceTimer && (clearTimeout(f.silenceTimer), f.silenceTimer = null), f.maxDurationTimer && (clearTimeout(f.maxDurationTimer), f.maxDurationTimer = null), f.audioContext.close().catch((b) => {
      fe("VoiceInput", "Failed to close AudioContext:", b);
    }), g.current = null;
  }, []), k = M(() => {
    const f = F.current;
    !f || f.stopped || f.recorder.state === "inactive" || (f.stopped = !0, E(f), f.recorder.stop(), d(!1), p(!1));
  }, [E]), I = M(async () => {
    if (!C.current) {
      C.current = !0;
      try {
        let f;
        try {
          f = await navigator.mediaDevices.getUserMedia({
            audio: {
              // Suppress background/ambient noise at the browser level before analysis
              echoCancellation: !0,
              noiseSuppression: !0,
              // Disable auto gain control — AGC amplifies distant voices to match near ones,
              // destroying the amplitude difference needed to filter far-field speech
              autoGainControl: !1
            }
          });
        } catch {
          f = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        }
        const b = new AudioContext(), S = b.createAnalyser();
        b.createMediaStreamSource(f).connect(S), S.fftSize = 256, g.current = S;
        const D = new MediaRecorder(f), L = {
          recorder: D,
          stream: f,
          audioContext: b,
          analyser: S,
          frequencyData: new Uint8Array(S.frequencyBinCount),
          detector: Vf(),
          chunks: [],
          byteCount: 0,
          silenceTimer: null,
          maxDurationTimer: null,
          autoStopReason: null,
          stopped: !1
        };
        F.current = L, D.ondataavailable = (y) => {
          y.data.size !== 0 && (L.chunks.push(y.data), L.byteCount += y.data.size, L.byteCount >= jf && k());
        }, D.onstop = async () => {
          const y = () => {
            for (const T of L.stream.getTracks())
              T.stop();
            L.chunks = [], F.current = null;
          };
          if (L.autoStopReason === "no-speech" || L.chunks.length === 0) {
            y();
            return;
          }
          try {
            h(!0), l.current?.();
            const T = await e(new Blob(L.chunks, { type: "audio/webm" }));
            T && a(T);
          } catch (T) {
            fe("VoiceInput", "Failed to transcribe audio:", T), t?.(i("Failed to transcribe audio. Please try again."));
          } finally {
            h(!1), y();
          }
        };
        const R = () => {
          L.silenceTimer = setTimeout(() => {
            if (F.current !== L || L.stopped)
              return;
            L.analyser.getByteFrequencyData(L.frequencyData);
            const y = Math.min(L.frequencyData.length, $f);
            let T = 0;
            for (let A = 0; A < y; A++)
              T += L.frequencyData[A];
            const { isSilent: x, autoStop: w } = L.detector.observe(T / y, Date.now());
            if (p(x), w) {
              L.autoStopReason = w, k();
              return;
            }
            R();
          }, qf);
        };
        R(), L.maxDurationTimer = setTimeout(() => {
          k();
        }, Uf), D.start(), d(!0), o.current?.(), C.current = !1;
      } catch (f) {
        C.current = !1, fe("VoiceInput", "Failed to start recording:", f);
        const b = f instanceof DOMException && (f.name === "NotAllowedError" || f.name === "SecurityError"), S = i(b ? "Microphone permission denied. Please allow microphone access and try again." : "Failed to start recording. Please try again.");
        t?.(S);
      }
    }
  }, [e, a, t, i, k]);
  return _(() => () => {
    const f = F.current;
    if (f) {
      E(f), f.recorder.state !== "inactive" && f.recorder.stop();
      for (const b of f.stream.getTracks())
        b.stop();
    }
  }, [E]), { isRecording: u, isProcessingAudio: c, isMuted: m, analyserRef: g, start: I, stop: k };
}
const Zf = "_bannerContainer_136ut_1", Qf = "_banner_136ut_1", Xf = "_message_136ut_32", ur = {
  bannerContainer: Zf,
  banner: Qf,
  message: Xf
}, ll = ({
  children: e,
  isVisible: a,
  onDismiss: t,
  "data-testid": n,
  className: r
}) => {
  const { t: i } = le();
  return /* @__PURE__ */ s(mc, { show: a, animation: hc.Fade, children: /* @__PURE__ */ s("div", { className: ur.bannerContainer, "data-testid": n, children: /* @__PURE__ */ s("div", { className: te(ur.banner, r), role: "status", children: [
    /* @__PURE__ */ s("span", { className: ur.message, children: e }),
    /* @__PURE__ */ s(
      he,
      {
        action: oe.Dismiss,
        onClick: t,
        ariaLabel: i("Dismiss banner"),
        testId: n ? `${n}-dismiss` : void 0
      }
    )
  ] }) }) });
}, go = "INTRO_BANNER_DISMISSED_VERSION", yo = "1", fo = "/api/now/v1/context_doc_url/now-assist-panel-premium", eb = () => {
  const { t: e } = le(), [a, t] = Y(
    () => ze.getItem(go) === yo
  ), n = N(pc), r = M(() => {
    t(!0), ze.setItem(go, yo);
  }, []), i = Tr(() => {
    a || r();
  });
  return _(() => {
    n && i();
  }, [n]), /* @__PURE__ */ s(ll, { isVisible: !a && !n, onDismiss: r, "data-testid": "onboarding-banner", children: [
    e("You're getting faster answers and better tools with the latest update."),
    " ",
    /* @__PURE__ */ s(
      "a",
      {
        href: fo,
        onClick: (l) => {
          l.preventDefault(), window.open(fo, "_blank", "noopener,noreferrer");
        },
        children: e("Learn more")
      }
    )
  ] });
}, ab = "_attachmentsPreview_5s7b1_1", tb = "_visibleAttachments_5s7b1_15", nb = "_moreButtonWrapper_5s7b1_24", rb = "_moreButton_5s7b1_24", ib = "_dropdown_5s7b1_76", $a = {
  attachmentsPreview: ab,
  visibleAttachments: tb,
  moreButtonWrapper: nb,
  moreButton: rb,
  dropdown: ib
};
function ob({
  containerWidth: e,
  itemWidth: a,
  gap: t,
  buttonWidth: n,
  padding: r,
  totalItems: i
}) {
  if (i <= 0)
    return 0;
  const o = e - r;
  if (i * a + (i - 1) * t <= o)
    return i;
  const u = o - n - t, d = Math.floor((u + t) / (a + t));
  return Math.max(1, d);
}
const sb = () => {
  const { t: e } = le(), {
    state: { attachmentsWithStatus: a, blobUrlsRef: t },
    actions: { removeAttachment: n }
  } = Rr(), { announce: r } = Ir(), i = rt(), o = v(null), [l, u] = Y(a.length), [d, c] = Y(!1), h = v(null), m = v(null), p = v(null), F = v(a), g = v(a);
  g.current = a;
  const C = a.map((A) => `${A.id}:${A.uploading ? "1" : "0"}`).join("|"), E = v(null), [k, I] = Y("");
  Pr({
    isOpen: d,
    popupRef: p,
    triggerRef: m,
    restoreMode: "always"
  });
  const { triggerProps: f, popupProps: b } = Lr({ isOpen: d, role: "menu" }), S = M(() => {
    const A = o.current;
    if (!A || a.length === 0) {
      u(a.length);
      return;
    }
    const W = A.offsetWidth, O = A.querySelector(`.${$a.visibleAttachments}`)?.firstElementChild, U = O instanceof HTMLElement ? O.offsetWidth : 0;
    if (U === 0) {
      u(a.length);
      return;
    }
    const j = getComputedStyle(A), J = parseFloat(j.gap) || 0, H = A.querySelector(`.${$a.moreButton}`), V = H instanceof HTMLElement ? H.offsetWidth : 0, ne = parseFloat(j.paddingLeft) + parseFloat(j.paddingRight), $ = ob({
      containerWidth: W,
      itemWidth: U,
      gap: J,
      buttonWidth: V,
      padding: ne,
      totalItems: a.length
    });
    u($);
  }, [a.length]);
  Bn(o, S), it(() => {
    S();
  }, [S, l]), _(() => {
    const A = F.current, W = g.current, P = W.filter((V) => {
      if (V.uploading)
        return !1;
      const ne = A.find(($) => $.id === V.id);
      return !ne || ne.uploading;
    }), O = new Set(W.map((V) => V.id)), U = new Set(
      W.filter((V) => !V.uploading).map((V) => V.name)
    ), j = A.filter((V) => !(O.has(V.id) || U.has(V.name))), J = P.length, H = j.length;
    J > 0 && H > 0 ? (I(
      e("{0} attachments added, {1} removed", {
        0: String(J),
        1: String(H)
      })
    ), E.current?.focus()) : J === 1 ? (I(e("{0} attached", { 0: P[0].name })), E.current?.focus()) : J > 1 ? (I(e("{0} attachments added", { 0: String(J) })), E.current?.focus()) : H === 1 ? (r(e("{0} removed", { 0: j[0].name })), i.focusTarget("plus-button")) : H > 0 && (r(e("{0} attachments removed", { 0: String(H) })), i.focusTarget("plus-button")), F.current = W;
  }, [C, r, e, i]);
  const D = a.length - l;
  _(() => {
    D > 0 || !d || h.current?.hide();
  }, [D, d]);
  const L = M(() => {
    c(!0), h.current?.show();
  }, []), R = M(() => {
    c(!1);
  }, []);
  if (a.length === 0)
    return null;
  const y = a.slice(0, l), T = a.slice(l), w = T.length > 0 || d ? /* @__PURE__ */ s("div", { className: $a.moreButtonWrapper, children: [
    /* @__PURE__ */ s(
      "button",
      {
        ref: m,
        type: "button",
        className: $a.moreButton,
        onClick: L,
        "aria-label": T.length > 0 ? e("Show {0} more attachments", { 0: T.length }) : void 0,
        ...f,
        children: T.length > 0 ? `+${T.length}` : null
      }
    ),
    /* @__PURE__ */ s(
      nt,
      {
        ref: h,
        dialogAnchorElement: () => m.current,
        onCloseComplete: R,
        title: e("Additional Attachments"),
        contentKey: `${C}:${l}`,
        children: /* @__PURE__ */ s(
          "div",
          {
            ref: p,
            className: $a.dropdown,
            "data-testid": "attachment-overflow-dropdown",
            ...b,
            children: T.map((A) => /* @__PURE__ */ s(
              Bi,
              {
                attachment: A,
                blobUrl: t.current[A.id],
                onRemove: n,
                variant: "dropdown"
              },
              A.id
            ))
          }
        )
      }
    )
  ] }) : null;
  return /* @__PURE__ */ s("div", { className: $a.attachmentsPreview, ref: o, children: [
    /* @__PURE__ */ s(
      "div",
      {
        ref: E,
        tabIndex: -1,
        className: $a.visibleAttachments,
        "aria-label": k || void 0,
        onBlur: () => I(""),
        children: y.map((A) => /* @__PURE__ */ s(
          Bi,
          {
            attachment: A,
            blobUrl: t.current[A.id],
            onRemove: n
          },
          A.id
        ))
      }
    ),
    w
  ] });
}, bt = "AIUXDocumentExplorerModal", lb = ({
  isOpen: e,
  onAddClicked: a,
  onClose: t,
  onUploadLocal: n,
  primaryButtonLabel: r,
  showLinkOnlyCheckbox: i = !1,
  disableDms: o = !1,
  forUpload: l = !1,
  disableUploadFromLocal: u = !0,
  userSysId: d,
  // Passed from system property other wise default to 'pdf,jpeg,jpg,png,csv,txt'
  supportedFileTypes: c = "pdf,jpeg,jpg,png,csv,txt",
  isFolderSelectable: h = !1,
  // maxNumAttachments is passed from lbf-client from system property, otherwise
  // default to 5 as conversation server supports only max 5 attachments per conversation.
  maximumSelectionSupported: m = 5,
  supportUrlType: p = !1
}) => {
  const F = v(null), g = v(null), C = v(a), E = v(t), k = v(n);
  C.current = a, E.current = t, k.current = n;
  const I = v((D) => {
  });
  I.current = (D) => {
    D.primaryButtonLabel = r ?? "Add", D.showLinkOnlyCheckbox = i, D.disableDMS = o, D.forUpload = l, D.disableUploadFromLocal = u, D.supportedFileTypes = c, D.isFolderSelectable = h, D.maximumSelectionSupported = m, D.supportUrlType = p, d && (D.userSysId = d);
  };
  const f = M(
    (D) => {
      B(bt, "add-clicked:", D.detail), C.current?.(D.detail);
    },
    []
  ), b = M(() => {
    B(bt, "picker-closed"), E.current?.();
  }, []), S = M(() => {
    B(bt, "upload-local-document"), k.current?.();
  }, []);
  return _(() => {
    if (!F.current)
      return;
    const D = F.current;
    let L = !1, R = null;
    return (async () => {
      try {
        if (await Fc("aiux-document-explorer"), L || !F.current)
          return;
        R = document.createElement("aiux-document-explorer"), g.current = R, R.isPicker = !0, R.isPickerOpened = !0, I.current(R), R.addEventListener("add-clicked", f), R.addEventListener("picker-closed", b), R.addEventListener("upload-local-document", S), D.appendChild(R), B(bt, "aiux-document-explorer mounted");
      } catch (T) {
        fe(bt, "Failed to load aiux-document-explorer:", T);
      }
    })(), () => {
      L = !0, R && (R.removeEventListener("add-clicked", f), R.removeEventListener("picker-closed", b), R.removeEventListener("upload-local-document", S)), g.current = null, R && D.contains(R) && D.removeChild(R);
    };
  }, [f, b, S]), _(() => {
    B(
      bt,
      e ? "Modal opened — setting isPickerOpened=true" : "Modal closed — setting isPickerOpened=false"
    ), g.current && (g.current.isPickerOpened = e);
  }, [e]), _(() => {
    g.current && I.current(g.current);
  }, [
    r,
    i,
    o,
    l,
    u,
    d,
    c,
    h,
    m,
    p
  ]), /* @__PURE__ */ s("div", { ref: F });
}, ub = ({
  isOpen: e,
  isEnabled: a,
  onClose: t,
  acceptedAttachmentTypes: n,
  maxNumAttachments: r,
  userId: i,
  onAddUploadingAttachments: o,
  onReplaceUploadingAttachment: l,
  onRemoveUploadingAttachment: u,
  onIsUploadCancelled: d,
  onAddAttachment: c,
  onSetError: h,
  t: m,
  onCreateCloudDocument: p,
  onLinkDmsDocument: F
}) => {
  const g = M(
    async (E) => {
      const { doc: k, source: I, tempId: f } = E;
      try {
        let b;
        if (I.type === "cloudDocument") {
          const S = "providerId" in k ? k.providerId : "", D = "fileId" in k ? k.fileId : "";
          b = await p({
            providerId: S,
            providerItemId: D,
            documentName: k.documentName
          });
        } else {
          const S = "documentSysId" in k ? k.documentSysId : "";
          b = await F({
            fileId: S,
            documentName: k.documentName,
            mimeType: k.mimeType,
            size: k.size,
            source: "instance"
          });
        }
        return d(f) ? (B(
          "CloudDocumentExplorer",
          "Upload was cancelled by user, not adding:",
          k.documentName
        ), u(f), !1) : (l(f, { ...b, uploading: !1 }), c(b), B(
          "CloudDocumentExplorer",
          "Cloud document processed successfully:",
          k.documentName
        ), !0);
      } catch (b) {
        return B("CloudDocumentExplorer", "Failed to process cloud document:", b), u(f), !1;
      }
    },
    [
      p,
      F,
      d,
      u,
      l,
      c
    ]
  ), C = M(
    async (E) => {
      if (B("CloudDocumentExplorer", "Cloud documents selected:", E), !a) {
        B("CloudDocumentExplorer", "Cloud documents feature is disabled");
        return;
      }
      if (!E || E.length === 0)
        return;
      const k = E[0], I = Date.now(), { data: f } = k, b = f.map((R, y) => ({
        id: `cloud-temp-${I}-${y}`,
        name: R.documentName,
        mime_type: R.mimeType,
        size: R.size,
        type: "file",
        upload_url: null,
        uploading: !0
      }));
      o(b), t();
      const S = f.map((R, y) => {
        const T = b[y].id;
        return g({ doc: R, source: k, tempId: T }).then((x) => ({
          success: x,
          documentName: R.documentName
        }));
      }), D = await Promise.allSettled(S), L = [];
      for (const R of D)
        R.status === "fulfilled" && !R.value.success ? L.push(R.value.documentName) : R.status === "rejected" && L.push(m("Unknown document"));
      if (L.length > 0) {
        const R = L.length === 1 ? m("Failed to add {0}", { 0: L[0] }) : m("Failed to add {0} document(s)", { 0: L.length });
        h(R);
      }
    },
    [a, o, t, g, h, m]
  );
  return e ? /* @__PURE__ */ s(
    lb,
    {
      isOpen: e,
      supportedFileTypes: n,
      maximumSelectionSupported: r,
      userSysId: i,
      onAddClicked: C,
      onClose: t
    }
  ) : null;
}, cb = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", ...e }, /* @__PURE__ */ se("circle", { cx: 10, cy: 10, r: 9, stroke: "currentColor", strokeWidth: 2 }), /* @__PURE__ */ se("path", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: 2, d: "M10 6v4" }), /* @__PURE__ */ se("circle", { cx: 10, cy: 14, r: 1, fill: "currentColor" })), db = "_errorBanner_fhhgx_1", hb = "_errorContent_fhhgx_11", mb = "_errorIcon_fhhgx_18", pb = "_errorText_fhhgx_25", rn = {
  errorBanner: db,
  errorContent: hb,
  errorIcon: mb,
  errorText: pb
}, ul = ({
  message: e,
  onDismiss: a,
  className: t,
  "data-testid": n
}) => {
  const { t: r } = le();
  return /* @__PURE__ */ s("div", { className: te(rn.errorBanner, t), role: "alert", "data-testid": n, children: [
    /* @__PURE__ */ s("div", { className: rn.errorContent, children: [
      /* @__PURE__ */ s(cb, { className: rn.errorIcon, "aria-hidden": "true" }),
      /* @__PURE__ */ s("span", { className: rn.errorText, children: [
        /* @__PURE__ */ s("strong", { children: r("Error:") }),
        " ",
        e
      ] })
    ] }),
    /* @__PURE__ */ s(
      he,
      {
        action: oe.Dismiss,
        onClick: a,
        ariaLabel: r("Dismiss error"),
        testId: n ? `${n}-dismiss` : void 0
      }
    )
  ] });
}, Fb = "_uploadErrorBanner_19of9_1", gb = {
  uploadErrorBanner: Fb
}, yb = () => {
  const {
    state: { errorMessage: e },
    actions: { clearError: a }
  } = Rr();
  return e ? /* @__PURE__ */ s(
    ul,
    {
      className: gb.uploadErrorBanner,
      message: e,
      onDismiss: a,
      "data-testid": "error-banner"
    }
  ) : null;
}, cl = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ se("path", { fill: "currentColor", d: "M2.5 2c.28 0 .5.22.5.5v4c0 .96 0 1.62.07 2.13.06.49.18.75.37.93.18.19.44.3.93.37S5.54 10 6.5 10h5.8l-2.15-2.15a.5.5 0 1 1 .7-.7l3 3a.5.5 0 0 1 0 .7l-3 3a.5.5 0 1 1-.7-.7L12.29 11H6.5q-1.4.02-2.26-.08c-.6-.08-1.1-.25-1.5-.65s-.58-.9-.66-1.5S2 7.42 2 6.5v-4c0-.28.22-.5.5-.5" })), fb = "_backButton_uqqpv_12", bb = "_inside_uqqpv_35", bo = {
  backButton: fb,
  inside: bb
}, Co = ({
  onClick: e,
  outside: a = !1,
  active: t = !0,
  variant: n = "back"
}) => {
  const r = n === "panel" ? oe.BackPanel : oe.BackChevron, i = te(bo.backButton, { [bo.inside]: !a });
  return /* @__PURE__ */ s(he, { action: r, onClick: e, className: i, hidden: !t });
}, Cb = "_plusButton_16ti2_12", vb = {
  plusButton: Cb
}, kb = ({ onClick: e, buttonRef: a, triggerProps: t }) => /* @__PURE__ */ s(
  he,
  {
    ref: a,
    action: oe.PlusOptions,
    onClick: e,
    className: vb.plusButton,
    triggerProps: t
  }
), Ab = "_includeWeb_1abfe_12", Sb = {
  includeWeb: Ab
}, wb = {
  [Cn.INCLUDE_WEB]: {
    id: Cn.INCLUDE_WEB,
    className: Sb.includeWeb,
    labelKey: "Include Web",
    tooltip: "Web search included",
    menuAction: oe.WebSearchMenu,
    pillAction: oe.WebSearchPill
  }
}, Eb = [
  Cn.INCLUDE_WEB
], dl = (e) => wb[e], Db = "_dropdown_vngdk_1", Bb = "_mobileOptions_vngdk_12", Tb = "_mobile_vngdk_12", Mb = "_tile_vngdk_29", Ct = {
  dropdown: Db,
  mobileOptions: Bb,
  mobile: Tb,
  tile: Mb
}, qa = { role: "menuitem" }, Rb = ({
  onCloseComplete: e,
  availableOptions: a = Eb,
  checkOptions: t,
  onToggleOption: n,
  onUploadClick: r,
  onCloudDocumentsClick: i,
  onPhotoClick: o,
  onCameraClick: l,
  onViewPromptLibrary: u,
  buttonRef: d,
  docQnaEnabled: c = !1,
  cloudDocumentEnabled: h = !1,
  liveAgentActive: m = !1,
  promptLibraryEnabled: p = !1,
  popupProps: F
}) => {
  const { isMobileExperience: g, isTouchDevice: C } = Ba(), { t: E } = le(), k = v(null), I = v(null), [f, b] = Y(!0);
  Pr({
    isOpen: f,
    popupRef: I,
    triggerRef: d,
    restoreMode: "if-lost"
  });
  const S = M(() => {
    b(!1), e();
  }, [e]);
  it(() => {
    f && d.current && k.current?.show();
  }, [f, d]);
  const D = ($) => {
    n($), k.current?.hide();
  }, L = () => {
    r && r(), k.current?.hide();
  }, R = () => {
    i && i(), k.current?.hide();
  }, y = () => {
    o && o(), k.current?.hide();
  }, T = () => {
    l && l(), k.current?.hide();
  }, x = () => {
    u && u(), k.current?.hide();
  }, w = g ? ts.Large : void 0, A = [];
  p && A.push(
    /* @__PURE__ */ s(
      he,
      {
        action: oe.PromptLibrary,
        onClick: x,
        label: E("View prompt library"),
        size: w,
        triggerProps: qa
      },
      "prompt-library"
    )
  );
  const W = [];
  C && (h && c || m) ? W.push(
    /* @__PURE__ */ s(
      he,
      {
        action: oe.Camera,
        onClick: T,
        label: E("Camera"),
        className: Ct.tile,
        size: w,
        triggerProps: qa
      },
      "camera"
    ),
    /* @__PURE__ */ s(
      he,
      {
        action: oe.Photo,
        onClick: y,
        label: E("Photo"),
        className: Ct.tile,
        size: w,
        triggerProps: qa
      },
      "photo"
    ),
    /* @__PURE__ */ s(
      he,
      {
        action: oe.MobileFiles,
        onClick: L,
        label: E("Files"),
        className: Ct.tile,
        size: w,
        triggerProps: qa
      },
      "upload"
    )
  ) : (c || m) && A.push(
    /* @__PURE__ */ s(
      he,
      {
        action: oe.UploadFiles,
        onClick: L,
        label: E("Add files & images"),
        size: w,
        triggerProps: qa
      },
      "upload"
    )
  ), h && !m && A.push(
    /* @__PURE__ */ s(
      he,
      {
        action: oe.CloudDocuments,
        onClick: R,
        label: E("Cloud documents"),
        size: w,
        triggerProps: qa
      },
      "cloud-documents"
    )
  );
  for (const $ of a) {
    const ie = dl($), z = t.includes($);
    A.push(
      /* @__PURE__ */ s(
        he,
        {
          action: ie.menuAction,
          onClick: () => D(ie.id),
          isChecked: z,
          label: E(ie.labelKey),
          size: w,
          testId: `input-options-${ie.id}`,
          triggerProps: qa
        },
        ie.id
      )
    );
  }
  const { selectedIndex: P, resetSelection: O, navigateOnKeyDown: U } = Ln({
    itemCount: A.length + W.length,
    handleTab: !0
  }), j = W.length > 0, J = ye(
    () => j ? void 0 : U,
    [j, U]
  );
  _(() => {
    f ? I.current?.querySelectorAll('[role="menuitem"]')[P]?.focus() : O();
  }, [P, f, O]);
  const H = W.length > 0 ? /* @__PURE__ */ s("div", { className: Ct.mobileOptions, children: W }) : null, V = te(Ct.dropdown, {
    [Ct.mobile]: g
  }), ne = (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- role is added by popupProps
    /* @__PURE__ */ s(
      "div",
      {
        ref: I,
        className: V,
        "data-testid": "input-options-dropdown",
        onKeyDown: J,
        ...F,
        children: [
          H,
          A
        ]
      }
    )
  );
  return /* @__PURE__ */ s(
    nt,
    {
      ref: k,
      dialogAnchorElement: () => d.current,
      title: E("Chat actions"),
      onCloseComplete: S,
      children: ne
    }
  );
}, Ib = ({ optionId: e, isCompact: a, onClick: t }) => {
  const { t: n } = le(), r = dl(e);
  return /* @__PURE__ */ s(
    he,
    {
      action: r.pillAction,
      onClick: () => t(r.id),
      ariaLabel: n(r.labelKey),
      label: a ? void 0 : n(r.labelKey),
      isChecked: !0,
      className: r.className,
      testId: `option-pill-${r.id}`
    }
  );
}, Pb = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 12 12", ...e }, /* @__PURE__ */ se("path", { fill: "currentColor", d: "M6.15 10.15a.5.5 0 0 0 .7.7l4-4a.5.5 0 0 0 0-.7l-4-4a.5.5 0 1 0-.7.7L9.29 6H1.5a.5.5 0 0 0 0 1h7.8z" })), Lb = "var(--transition-slide-omni)", _b = "_messageInput_14diq_23", Nb = "_condensed_14diq_35", xb = "_barAnchor_14diq_64", Hb = "_submit_14diq_75", Wb = "_icon_14diq_93", Ob = "_selected_14diq_109", Gb = "_stop_14diq_130", Kb = "_empty_14diq_180", Jb = "_narrow_14diq_194", zb = "_side_14diq_194", Vb = "_hero_14diq_200", $b = "_compact_14diq_207", qb = "_omni_14diq_210", Ub = "_barWrapper_14diq_221", jb = "_suggestions_14diq_221", Yb = "_suggesting_14diq_225", Zb = "_formWrapper_14diq_231", Qb = "_form_14diq_231", Xb = "_discreet_14diq_256", e0 = "_inputBar_14diq_261", a0 = "_inputBarSurface_14diq_277", t0 = "_dragOverlayContainer_14diq_283", n0 = "_dragOverlay_14diq_283", r0 = "_dragText_14diq_308", i0 = "_innerWrapper_14diq_328", o0 = "_voiceErrorBanner_14diq_348", s0 = "_outsideCtrlWrapper_14diq_354", l0 = "_outsideAnimationCell_14diq_365", u0 = "_ctrlLeft_14diq_374", c0 = "_ctrlWrapper_14diq_386", d0 = "_insideAnimationCell_14diq_396", h0 = "_inputWrapper_14diq_401", m0 = "_input_14diq_261", p0 = "_inputMasked_14diq_441", F0 = "_ctrlRight_14diq_444", g0 = "_optionsMenuAnchor_14diq_457", y0 = "_disclaimer_14diq_476", f0 = "_hidden_14diq_497", b0 = "_backButtonOutside_14diq_501", C0 = "_initializing_14diq_505", v0 = "_hasAttachments_14diq_521", k0 = "_expanded_14diq_524", A0 = "_expandAbove_14diq_550", S0 = "_queuedMessage_14diq_564", w0 = "_queuedMessageContent_14diq_577", E0 = "_queuedLabel_14diq_585", D0 = "_queuedText_14diq_592", B0 = "_queuedActions_14diq_601", T0 = "_queuedButton_14diq_608", M0 = "_quotedContextChip_14diq_626", R0 = "_quotedContextChipContent_14diq_641", I0 = "_quotedContextChipIcon_14diq_648", P0 = "_quotedContextChipText_14diq_655", L0 = "_quotedContextChipDismiss_14diq_671", _0 = "_contentWrapper_14diq_698", N0 = "_content_14diq_698", x0 = "_selectionWrapper_14diq_714", H0 = "_hasSibbling_14diq_714", W0 = "_linksWrapper_14diq_717", O0 = "_header_14diq_742", G0 = "_selection_14diq_714", K0 = "_links_14diq_717", J0 = "_item_14diq_764", z0 = "_label_14diq_775", V0 = "_subHint_14diq_799", $0 = "_subHintText_14diq_804", q0 = "_description_14diq_861", U0 = "_arrow_14diq_871", j0 = "_spin_14diq_1", me = {
  transitionSlideOmni: Lb,
  messageInput: _b,
  condensed: Nb,
  barAnchor: xb,
  submit: Hb,
  icon: Wb,
  selected: Ob,
  stop: Gb,
  empty: Kb,
  narrow: Jb,
  side: zb,
  hero: Vb,
  compact: $b,
  omni: qb,
  barWrapper: Ub,
  suggestions: jb,
  suggesting: Yb,
  formWrapper: Zb,
  form: Qb,
  discreet: Xb,
  inputBar: e0,
  inputBarSurface: a0,
  dragOverlayContainer: t0,
  dragOverlay: n0,
  dragText: r0,
  innerWrapper: i0,
  voiceErrorBanner: o0,
  outsideCtrlWrapper: s0,
  outsideAnimationCell: l0,
  ctrlLeft: u0,
  ctrlWrapper: c0,
  insideAnimationCell: d0,
  inputWrapper: h0,
  input: m0,
  inputMasked: p0,
  ctrlRight: F0,
  optionsMenuAnchor: g0,
  disclaimer: y0,
  hidden: f0,
  backButtonOutside: b0,
  initializing: C0,
  hasAttachments: v0,
  expanded: k0,
  expandAbove: A0,
  queuedMessage: S0,
  queuedMessageContent: w0,
  queuedLabel: E0,
  queuedText: D0,
  queuedActions: B0,
  queuedButton: T0,
  quotedContextChip: M0,
  quotedContextChipContent: R0,
  quotedContextChipIcon: I0,
  quotedContextChipText: P0,
  quotedContextChipDismiss: L0,
  contentWrapper: _0,
  content: N0,
  selectionWrapper: x0,
  hasSibbling: H0,
  linksWrapper: W0,
  header: O0,
  selection: G0,
  links: K0,
  item: J0,
  label: z0,
  subHint: V0,
  subHintText: $0,
  description: q0,
  arrow: U0,
  spin: j0
}, vo = (e, a) => `${e}-option-${a}`, Y0 = _r(
  ({
    listboxId: e,
    onPromptClick: a,
    onWorkflowClick: t,
    onLinkClick: n,
    isSuggesting: r = !1,
    canSubmitSuggestion: i = !0,
    shouldExpandAbove: o = !1
  }, l) => {
    const { t: u } = le(), d = N(gc), c = ye(() => d?.selection ?? [], [d?.selection]), h = ye(() => d?.links ?? [], [d?.links]), m = ye(
      () => c.length > 0 && h.length > 0,
      [c.length, h.length]
    ), [p, F] = Y(-1), g = v(-1), C = v([]), { telemetryService: E } = da(), k = ye(() => {
      let y = -2, T = null;
      return (x) => {
        if (x === y)
          return T;
        if (y = x, x === -1)
          return T = null, null;
        let w;
        return o ? x < h.length ? w = h[x] ?? null : w = c[x - h.length] ?? null : x < c.length ? w = c[x] ?? null : w = h[x - c.length] ?? null, T = w, w;
      };
    }, [c, h, o]);
    ns(
      l,
      () => ({
        moveSelectionUp: () => {
          const y = c.length + h.length;
          y !== 0 && F((T) => {
            let x;
            return T === -1 || T === 0 ? x = y - 1 : x = T - 1, g.current = x, x;
          });
        },
        moveSelectionDown: () => {
          const y = c.length + h.length;
          y !== 0 && F((T) => {
            let x;
            return T === -1 || T === y - 1 ? x = 0 : x = T + 1, g.current = x, x;
          });
        },
        resetSelection: () => {
          F(-1), g.current = -1;
        },
        getSelectedValue: () => {
          const y = k(g.current);
          return !y || y.section !== jt.SELECTION ? null : Ti(y.label);
        },
        getSelectedId: () => {
          const y = k(g.current);
          if (!y || y.section !== jt.SELECTION)
            return null;
          const T = c.indexOf(y);
          return T === -1 ? null : vo(e, T);
        },
        getSelectedLink: () => {
          const y = k(g.current);
          return !y || y.section !== jt.LINK ? null : y;
        },
        clickSelectedLink: () => {
          const y = k(g.current);
          if (!y || y.section !== jt.LINK)
            return;
          const T = h.indexOf(y);
          T !== -1 && C.current[T]?.click();
        }
      }),
      [c, h, e, k]
    );
    const I = k(p), f = te(me.contentWrapper, {
      [me.suggesting]: r,
      [me.expandAbove]: o
    }), b = M(
      (y) => {
        i && a?.(y);
      },
      [i, a]
    ), S = M(
      (y, T) => {
        if (!i)
          return;
        if (E.track("suggestionClicked", { index: T }), !(y.category === "skill")) {
          b(Ti(y.label));
          return;
        }
        t?.(y);
      },
      [i, t, b, E]
    ), D = M(
      ({ category: y, uniqueId: T }) => {
        E.track("suggestionClicked", { type: y, sysId: T }), n?.();
      },
      [n, E]
    ), L = c.length === 0 ? null : /* @__PURE__ */ s(
      "div",
      {
        className: te(me.selectionWrapper, { [me.hasSibbling]: m }),
        children: /* @__PURE__ */ s(
          "ul",
          {
            id: e,
            className: me.selection,
            role: "listbox",
            "aria-label": u("Suggestions"),
            children: c.map((y, T) => {
              const x = I === y, w = te({
                [me[y.category]]: !!me[y.category],
                [me.selected]: x,
                [me.disabled]: !i
              }), A = vo(e, T);
              let W = null, P = null;
              return y.subHint && (W = /* @__PURE__ */ s("span", { className: me.subHintText, "data-testid": "suggestion-subHint", children: y.subHint }), P = /* @__PURE__ */ s(Ot, { position: "top", truncationTargetClassName: me.subHintText, children: y.subHint })), // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Keyboard navigation is handled by the parent textarea in MessageInput
              /* @__PURE__ */ s(
                "li",
                {
                  id: A,
                  className: w,
                  onClick: () => S(y, T),
                  role: "option",
                  "aria-selected": x,
                  "aria-disabled": !i,
                  children: /* @__PURE__ */ s(
                    "div",
                    {
                      className: te(me.item, { [me.subHint]: !!y.subHint }),
                      children: [
                        /* @__PURE__ */ s(kt, { className: me.label, text: y.label }),
                        W,
                        P,
                        /* @__PURE__ */ s(Ot, { position: "top", truncationTargetClassName: me.label, children: /* @__PURE__ */ s(kt, { text: y.label }) })
                      ]
                    }
                  )
                },
                y.uniqueId
              );
            })
          }
        )
      }
    ), R = h.length === 0 ? null : /* @__PURE__ */ s("div", { className: te(me.linksWrapper, { [me.hasSibbling]: m }), children: [
      /* @__PURE__ */ s("label", { className: me.header, children: u("Quick links") }),
      /* @__PURE__ */ s("ul", { className: me.links, children: h.map((y, T) => {
        const x = Mi[y.category] || Mi[yc.KNOWLEDGE], w = /* @__PURE__ */ s("span", { className: me.icon, children: /* @__PURE__ */ s(x, { "aria-hidden": "true" }) }), A = /* @__PURE__ */ s("span", { className: me.arrow, children: /* @__PURE__ */ s(Pb, {}) }), W = I === y, P = te(y.category, {
          [me[y.category]]: !!me[y.category],
          [me.selected]: W,
          [me.disabled]: !i
        });
        return /* @__PURE__ */ s("li", { className: P, children: /* @__PURE__ */ s(
          "a",
          {
            ref: (O) => {
              C.current[T] = O;
            },
            href: y.url,
            className: me.item,
            draggable: !1,
            onDragStart: (O) => {
              O.preventDefault();
            },
            onClick: () => D(y),
            children: [
              w,
              /* @__PURE__ */ s(kt, { text: y.label, className: me.label }),
              /* @__PURE__ */ s(kt, { text: y.description, className: me.description }),
              A,
              /* @__PURE__ */ s(Ot, { position: "top", truncationTargetClassName: me.label, children: /* @__PURE__ */ s(kt, { text: y.label }) })
            ]
          }
        ) }, y.uniqueId);
      }) })
    ] });
    return /* @__PURE__ */ s("div", { className: f, children: /* @__PURE__ */ s("div", { className: me.content, children: [
      L,
      R
    ] }) });
  }
), Z0 = "_skeletonLoader_il0zg_12", Q0 = "_initializing_il0zg_33", X0 = "_skeletonLine_il0zg_38", eC = "_skeletonBubble_il0zg_41", aC = "_size60_il0zg_53", vt = {
  skeletonLoader: Z0,
  initializing: Q0,
  skeletonLine: X0,
  skeletonBubble: eC,
  size60: aC
}, hl = ({ isReadyForInput: e }) => /* @__PURE__ */ s(
  "div",
  {
    className: te(vt.skeletonLoader, { [vt.initializing]: !e }),
    "data-testid": "skeleton-loader",
    children: /* @__PURE__ */ s("div", { className: vt.skeletonBubble, children: [
      /* @__PURE__ */ s("div", { className: vt.skeletonLine }),
      /* @__PURE__ */ s("div", { className: te(vt.skeletonLine, vt.size60) })
    ] })
  }
);
function tC(e) {
  return typeof e == "object" && e !== null && "type" in e && "text" in e && typeof e.type == "string" && typeof e.text == "string" && e.type === "transcript";
}
const nC = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ se("path", { fill: "currentColor", d: "M12.5 7c.28 0 .5.22.5.5v1a4.5 4.5 0 0 1-4 4.47V14h1.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1H8v-1.03A4.5 4.5 0 0 1 4 8.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 1 0 7 0v-1c0-.28.22-.5.5-.5" }), /* @__PURE__ */ se("path", { fill: "currentColor", d: "M8.5 1A2.5 2.5 0 0 1 11 3.5v5a2.5 2.5 0 0 1-5 0v-5A2.5 2.5 0 0 1 8.5 1" })), rC = "_waveContainer_yo7wb_1", iC = "_wave_yo7wb_1", oC = "_waveContainerProcessing_yo7wb_20", Nt = {
  waveContainer: rC,
  wave: iC,
  waveContainerProcessing: oC
}, Ua = 5, on = [21, 23, 26, 23, 21], sn = [5.5, 7.5, 10.5, 7.5, 5.5], ko = [13, 14, 15, 14, 13], sC = [2, 1, 3, 0, 4], lC = [0, 4, 1, 3, 2], uC = 50, Ao = 150, cC = 35, So = 100, dC = 0.15, wo = 3, hC = 2, mC = [0.5, 0.3, 0, 0.3, 0.5], Eo = 1.2, pC = [0.2, 0.1, 0, 0.1, 0.2], FC = 30, gC = 12, yC = 0.12, fC = 0.05, Do = 64, bC = 0.18, ln = 0.01, CC = 3, vC = 2.5, kC = 2.8, AC = 1.6, SC = 4.1, wC = 0.5, EC = 0.35, DC = 0.15, BC = 1.2, TC = 0.5, MC = 0.65, Bo = 0.35, RC = 1.5, IC = 0.6, un = 0.5, PC = 0.5, cr = Math.PI * 2, To = ["bar-0", "bar-1", "bar-2", "bar-3", "bar-4"], Mo = 5, dr = 50, LC = 1e3, _C = ({
  isRecording: e,
  isProcessingAudio: a,
  analyserRef: t,
  onWaveStateReady: n,
  onFullyHidden: r
}) => {
  const i = v([null, null, null, null, null]), o = v(null), l = v(null), u = v(null), [d, c] = Y("idle"), h = v(null), m = Ie(a);
  _(() => {
    const f = i.current;
    let b = "idle", S = null, D = 0, L = 0, R = 0, y = 0;
    const T = [0, 0, 0, 0, 0], x = [1, 1, 1, 1, 1], w = [0, 0, 0, 0, 0];
    let A = 0, W = !1, P = null;
    const O = ko.map((z) => z * dC), U = wo + hC, j = () => {
      for (let z = 0; z < Ua; z++) {
        const K = i.current[z];
        if (!K)
          continue;
        const X = (1 - Math.max(0, T[z]) / on[z]) * dr;
        K.style.clipPath = `inset(${X}% 0 ${X}% 0 round ${Mo}px)`, K.style.opacity = String(x[z]);
      }
    }, J = () => {
      const z = t.current;
      if (!z)
        return;
      P || (P = new Uint8Array(z.frequencyBinCount)), z.getByteFrequencyData(P);
      let K = 0;
      for (let re = 0; re < Do; re++)
        K += P[re];
      const ae = K / Do;
      W = W ? ae > gC : ae > FC;
      const X = W ? 1 : 0, ce = X > A ? yC : fC;
      A += (X - A) * ce, A < ln && (A = 0), A > 1 - ln && (A = 1);
    }, H = (z) => {
      const K = z - R;
      let ae = !0;
      for (let X = 0; X < Ua; X++) {
        const ce = sC[X], re = K - X * uC;
        if (re <= 0)
          T[ce] = 0, ae = !1;
        else if (re < Ao) {
          const De = re / Ao;
          T[ce] = sn[ce] * (1 - Math.pow(1 - De, CC)), ae = !1;
        } else
          T[ce] = sn[ce];
      }
      ae && (b = "listening");
    }, V = () => {
      const z = D % U;
      for (let K = 0; K < Ua; K++) {
        const ae = sn[K], X = on[K], ce = ko[K];
        let re = 0, De = 1;
        const Me = z - wo - mC[K];
        if (Me > 0 && Me < Eo) {
          const Te = Me / Eo;
          re = Math.sin(Te * Math.PI) * O[K], De = Te < un ? 1 - Bo * Math.pow(Te / un, RC) : MC + Bo * Math.pow((Te - un) / un, IC);
        }
        re *= 1 - A, x[K] = A > ln ? 1 : De;
        const Fe = D - pC[K], we = Math.sin(Fe * kC * cr) * wC + Math.sin(Fe * AC * cr + BC) * EC + Math.sin(Fe * SC * cr + TC) * DC, Le = (ae + (we + 1) * PC * ce - ae) * A, _e = Math.max(ae, Math.min(X, ae + re + Le));
        T[K] = A < ln ? _e : T[K] + (_e - T[K]) * bC;
      }
    }, ne = (z) => {
      const K = z - y;
      let ae = !0;
      for (let X = 0; X < Ua; X++) {
        const ce = lC[X], re = K - X * cC;
        if (re <= 0)
          ae = !1;
        else if (re < So) {
          const De = re / So;
          T[ce] = w[ce] * (1 - Math.pow(De, vC)), ae = !1;
        } else
          T[ce] = 0;
      }
      ae && (b = "idle", h.current?.());
    }, $ = () => {
      const z = performance.now(), K = (z - L) / LC;
      L = z, D += K, J(), b === "entering" ? H(z) : b === "listening" ? V() : b === "exiting" && ne(z), j(), b !== "idle" ? S = requestAnimationFrame($) : S = null;
    };
    n?.(() => b), o.current = () => {
      b = "entering";
      const z = performance.now();
      R = z, L = z, D = 0, A = 0, W = !1, P = null;
      for (let K = 0; K < Ua; K++)
        T[K] = 0, x[K] = 1;
      S === null && (S = requestAnimationFrame($));
    };
    const ie = () => {
      b = "exiting", y = performance.now(), A = 0, W = !1;
      for (let z = 0; z < Ua; z++)
        w[z] = T[z], x[z] = 1;
      S === null && (L = performance.now(), S = requestAnimationFrame($));
    };
    return l.current = () => {
      b !== "idle" && ie();
    }, u.current = () => {
      for (let z = 0; z < Ua; z++)
        T[z] = sn[z], x[z] = 1;
      j(), b = "listening", ie();
    }, () => {
      S !== null && (cancelAnimationFrame(S), S = null);
      for (const z of f)
        z && (z.style.clipPath = `inset(${dr}% 0 ${dr}% 0 round ${Mo}px)`, z.style.opacity = "1");
    };
  }, []), h.current = () => {
    m.current ? c("processing") : (c("idle"), r?.());
  };
  const [p, F] = Y(e);
  p !== e && (F(e), e && c("animated"));
  const [g, C] = Y(a);
  g !== a && (C(a), g && !a && !e && c("animated")), d === "idle" && !e && !a && r?.(), _(() => {
    e ? o.current?.() : l.current?.();
  }, [e]);
  const E = v(a);
  return _(() => {
    const f = E.current;
    E.current = a, f && !a && !e && u.current?.();
  }, [a, e]), e || d === "animated" ? /* @__PURE__ */ s("div", { className: Nt.waveContainer, "data-testid": "wave-container", children: on.map((f, b) => /* @__PURE__ */ s(
    "span",
    {
      ref: (S) => {
        i.current[b] = S;
      },
      className: Nt.wave,
      style: { height: `${f}px` }
    },
    To[b]
  )) }) : d === "processing" || a && d === "idle" ? /* @__PURE__ */ s(
    "div",
    {
      className: te(Nt.waveContainer, Nt.waveContainerProcessing),
      "data-testid": "wave-container-processing",
      children: on.map((f, b) => /* @__PURE__ */ s(
        "span",
        {
          className: Nt.wave,
          style: { height: `${f}px` }
        },
        To[b]
      ))
    }
  ) : null;
}, NC = "_micButton_1n85i_12", xC = "_recording_1n85i_48", HC = "_processing_1n85i_51", WC = "_replying_1n85i_64", OC = "_icon_1n85i_75", xt = {
  micButton: NC,
  recording: xC,
  processing: HC,
  replying: WC,
  icon: OC
};
function GC(e) {
  return "startVoiceInput" in e && typeof e.startVoiceInput == "function";
}
const KC = ({
  onTranscription: e,
  onStateChange: a,
  onError: t,
  disabled: n = !1,
  transcribe: r
}) => {
  const { t: i } = le(), { announce: o } = Ir(), l = M(
    () => o(i("Listening..."), "assertive"),
    [o, i]
  ), u = M(
    () => o(i("Processing..."), "assertive"),
    [o, i]
  ), { isRecording: d, isProcessingAudio: c, isMuted: h, analyserRef: m, start: p, stop: F } = Yf({
    transcribe: r,
    onTranscription: e,
    onError: t,
    onRecordingStart: l,
    onProcessingStart: u
  }), g = v(null), C = v(!1), E = v(null), [k, I] = Y(!1), [f, b] = Y(!1);
  f !== c && (b(c), f && !c && !d && I(!0));
  const S = M(() => {
    I(!1);
  }, []);
  _(() => {
    a?.({ isRecording: d, isProcessingAudio: c, isMuted: h });
  }, [d, c, h, a]), _(() => () => {
    a?.({ isRecording: !1, isProcessingAudio: !1, isMuted: !1 });
  }, []);
  const D = M(() => {
    const A = E.current?.();
    A === "entering" || A === "exiting" || (d ? (C.current = !0, F()) : p());
  }, [d, p, F]), L = Ie(p);
  _(() => {
    const A = g.current?.getRootNode();
    if (!(A instanceof ShadowRoot))
      return;
    const W = A.host;
    if (!GC(W))
      return;
    let P = !0;
    return ka(W.startVoiceInput, () => {
      P && L.current();
    }), () => {
      P = !1;
    };
  }, []), _(() => {
    c || n || !C.current || (C.current = !1, g.current?.focus());
  }, [c, n]);
  const R = M((A) => {
    E.current = A;
  }, []), y = d || c || k;
  let T;
  y ? T = /* @__PURE__ */ s(
    _C,
    {
      isRecording: d,
      isProcessingAudio: c,
      analyserRef: m,
      onWaveStateReady: R,
      onFullyHidden: S
    }
  ) : T = /* @__PURE__ */ s(nC, { className: xt.icon, "aria-hidden": "true" });
  let x;
  d ? x = i("Stop Listening") : c ? x = i("Processing audio…") : n ? x = i("Microphone unavailable while agent is responding") : x = i("Start Voice Input");
  const w = x;
  return /* @__PURE__ */ s(
    "button",
    {
      ref: g,
      type: "button",
      className: te(xt.micButton, {
        [xt.recording]: d,
        [xt.processing]: c && !d,
        [xt.replying]: n && !d && !c
      }),
      onClick: D,
      "aria-label": x,
      disabled: c || n,
      "data-testid": "mic-button",
      children: [
        T,
        /* @__PURE__ */ s(Ot, { delay: "short", duration: "medium", children: w })
      ]
    }
  );
};
function cn(e, a, t) {
  for (let n = 0; n < t.length; n++)
    e.setUint8(a + n, t.charCodeAt(n));
}
function JC(e, a, t) {
  for (let n = 0; n < t.length; n++, a += 2) {
    const r = Math.max(-1, Math.min(1, t[n]));
    e.setInt16(a, r < 0 ? r * 32768 : r * 32767, !0);
  }
}
function zC(e, a) {
  const t = new ArrayBuffer(44 + e.length * 2), n = new DataView(t);
  return cn(n, 0, "RIFF"), n.setUint32(4, 36 + e.length * 2, !0), cn(n, 8, "WAVE"), cn(n, 12, "fmt "), n.setUint32(16, 16, !0), n.setUint16(20, 1, !0), n.setUint16(22, 1, !0), n.setUint32(24, a, !0), n.setUint32(28, a * 2, !0), n.setUint16(32, 2, !0), n.setUint16(34, 16, !0), cn(n, 36, "data"), n.setUint32(40, e.length * 2, !0), JC(n, 44, e), t;
}
async function VC(e) {
  const a = await e.arrayBuffer(), t = new AudioContext();
  let n;
  try {
    n = await t.decodeAudioData(a);
  } finally {
    await t.close();
  }
  const r = n.numberOfChannels, i = n.length, o = new Float32Array(i);
  for (let u = 0; u < r; u++) {
    const d = n.getChannelData(u);
    for (let c = 0; c < i; c++)
      o[c] += d[c];
  }
  for (let u = 0; u < i; u++)
    o[u] /= r;
  const l = zC(o, n.sampleRate);
  return new Blob([l], { type: "audio/wav" });
}
const $C = ({
  onTranscription: e,
  onStateChange: a,
  onError: t,
  disabled: n
}) => {
  const { httpService: r, telemetryService: i } = da(), o = N(Ha), l = N(Mn), u = v(!1), d = M(
    (m) => {
      m.isRecording && !u.current && i.track("voiceMicTapped"), u.current = m.isRecording, a?.(m);
    },
    [i, a]
  ), c = M(
    async (m) => {
      const p = await VC(m), F = new FormData();
      F.append("file", p, "recording.wav"), o && F.append("conversationId", o), l && F.append("sessionId", l);
      const { data: g } = await r.post("/api/stt", {
        // FormData body: HttpService omits Content-Type so the browser sets the multipart boundary
        body: F
      });
      return tC(g) ? String(g.text || "") : "";
    },
    [r, o, l]
  ), h = M(
    async (m) => {
      try {
        const p = await c(m);
        return p ? i.track("voiceTranscriptionAttempted", { success: !0 }) : i.track("voiceTranscriptionAttempted", { success: !1 }), p;
      } catch (p) {
        throw i.track("voiceTranscriptionAttempted", { success: !1 }), p;
      }
    },
    [c, i]
  );
  return /* @__PURE__ */ s(
    KC,
    {
      transcribe: h,
      onTranscription: e,
      onStateChange: d,
      onError: t,
      disabled: n
    }
  );
}, qC = Wa(({ shouldTrack: e }) => (fc({ condition: e, eventName: "suggestionsOpened" }), null)), UC = "_buttonSwapGroup_1brkg_1", jC = "_noTransition_1brkg_7", YC = "_swapItem_1brkg_7", ZC = "_isActive_1brkg_19", QC = "_button_1brkg_1", XC = "_swapItemContent_1brkg_26", ev = "_icon_1brkg_27", av = "_isExiting_1brkg_33", tv = "_reset_1brkg_50", Ea = {
  buttonSwapGroup: UC,
  noTransition: jC,
  swapItem: YC,
  isActive: ZC,
  button: QC,
  swapItemContent: XC,
  icon: ev,
  isExiting: av,
  reset: tv
}, nv = (e) => typeof e == "object" && e !== null && "props" in e && e.props !== null, ml = bc(null), rv = ({ activeItem: e, children: a }) => {
  const t = v({
    activeItem: e,
    exitingItem: null
  }), [n, r] = Y(!1), i = v("button"), o = v(e), l = v(
    Array.isArray(a) ? a : [a]
  );
  if (_(() => {
    const u = requestAnimationFrame(() => r(!0));
    return () => cancelAnimationFrame(u);
  }, []), e !== o.current) {
    const u = e, d = o.current, c = l?.current.filter(nv);
    if (!u || c.length === 0)
      return null;
    o.current = u;
    const h = c.find((p) => p.props.item === u)?.props.mode, m = c.find((p) => p.props.item === d)?.props.mode;
    i.current = h === "button" || m === "button" ? "button" : "icon", t.current = { activeItem: u, exitingItem: d };
  }
  return /* @__PURE__ */ s(ml.Provider, { value: t.current, children: /* @__PURE__ */ s(
    "div",
    {
      className: te(Ea.buttonSwapGroup, Ea[i.current], {
        [Ea.noTransition]: !n
      }),
      children: a
    }
  ) });
}, hr = ({ item: e, children: a }) => {
  const t = Nr(ml), n = v(null), { activeItem: r, exitingItem: i } = t, o = e === r, l = e === i, u = !o && !l, d = v(u), c = u !== d.current;
  d.current = u, _(() => {
    if (!c || !o)
      return;
    const p = requestAnimationFrame(() => {
      n.current?.classList.remove(Ea.reset);
    });
    return () => cancelAnimationFrame(p);
  }, [c, o]);
  const h = te(Ea.swapItem, {
    [Ea.isActive]: o,
    [Ea.isExiting]: l,
    [Ea.reset]: c
  }), m = o ? {} : { inert: !0 };
  return /* @__PURE__ */ s("div", { ref: n, className: h, "data-testid": `swap-item-${e}`, ...m, children: /* @__PURE__ */ s("div", { className: Ea.swapItemContent, children: a }) });
}, iv = "var(--transition-slide-omni)", ov = "_messageInput_1m11h_23", sv = "_condensed_1m11h_35", lv = "_barAnchor_1m11h_64", uv = "_submit_1m11h_75", cv = "_stop_1m11h_130", dv = "_empty_1m11h_180", hv = "_narrow_1m11h_194", mv = "_side_1m11h_194", pv = "_hero_1m11h_200", Fv = "_compact_1m11h_207", gv = "_omni_1m11h_210", yv = "_barWrapper_1m11h_221", fv = "_suggestions_1m11h_221", bv = "_suggesting_1m11h_225", Cv = "_formWrapper_1m11h_231", vv = "_form_1m11h_231", kv = "_discreet_1m11h_256", Av = "_inputBar_1m11h_261", Sv = "_inputBarSurface_1m11h_277", wv = "_dragOverlayContainer_1m11h_283", Ev = "_dragOverlay_1m11h_283", Dv = "_dragText_1m11h_308", Bv = "_innerWrapper_1m11h_328", Tv = "_voiceErrorBanner_1m11h_348", Mv = "_outsideCtrlWrapper_1m11h_354", Rv = "_outsideAnimationCell_1m11h_365", Iv = "_ctrlLeft_1m11h_374", Pv = "_ctrlWrapper_1m11h_386", Lv = "_insideAnimationCell_1m11h_396", _v = "_inputWrapper_1m11h_401", Nv = "_input_1m11h_261", xv = "_inputMasked_1m11h_441", Hv = "_ctrlRight_1m11h_444", Wv = "_optionsMenuAnchor_1m11h_457", Ov = "_disclaimer_1m11h_476", Gv = "_hidden_1m11h_497", Kv = "_backButtonOutside_1m11h_501", Jv = "_initializing_1m11h_505", zv = "_hasAttachments_1m11h_521", Vv = "_expanded_1m11h_524", $v = "_expandAbove_1m11h_550", qv = "_queuedMessage_1m11h_564", Uv = "_queuedMessageContent_1m11h_577", jv = "_queuedLabel_1m11h_585", Yv = "_queuedText_1m11h_592", Zv = "_queuedActions_1m11h_601", Qv = "_queuedButton_1m11h_608", Xv = "_quotedContextChip_1m11h_626", ek = "_quotedContextChipContent_1m11h_641", ak = "_quotedContextChipIcon_1m11h_648", tk = "_quotedContextChipText_1m11h_655", Q = {
  transitionSlideOmni: iv,
  messageInput: ov,
  condensed: sv,
  barAnchor: lv,
  submit: uv,
  stop: cv,
  empty: dv,
  narrow: hv,
  side: mv,
  hero: pv,
  compact: Fv,
  omni: gv,
  barWrapper: yv,
  suggestions: fv,
  suggesting: bv,
  formWrapper: Cv,
  form: vv,
  discreet: kv,
  inputBar: Av,
  inputBarSurface: Sv,
  dragOverlayContainer: wv,
  dragOverlay: Ev,
  dragText: Dv,
  innerWrapper: Bv,
  voiceErrorBanner: Tv,
  outsideCtrlWrapper: Mv,
  outsideAnimationCell: Rv,
  ctrlLeft: Iv,
  ctrlWrapper: Pv,
  insideAnimationCell: Lv,
  inputWrapper: _v,
  input: Nv,
  inputMasked: xv,
  ctrlRight: Hv,
  optionsMenuAnchor: Wv,
  disclaimer: Ov,
  hidden: Gv,
  backButtonOutside: Kv,
  initializing: Jv,
  hasAttachments: zv,
  expanded: Vv,
  expandAbove: $v,
  queuedMessage: qv,
  queuedMessageContent: Uv,
  queuedLabel: jv,
  queuedText: Yv,
  queuedActions: Zv,
  queuedButton: Qv,
  quotedContextChip: Xv,
  quotedContextChipContent: ek,
  quotedContextChipIcon: ak,
  quotedContextChipText: tk
}, nk = xr(
  () => import("./index-Rk5BQtFU.js").then((e) => ({ default: e.EmojiPickerButton }))
), rk = 100, ik = 100, ok = 100, sk = 25, lk = 1e3, uk = parseInt(Q.transitionSlideOmni, 10) || 600, Ro = "suggestions-listbox", ck = ({
  backButtonIcon: e = "back",
  isNarrowMainContent: a = !1,
  showChatPanelToggle: t = !1
}) => {
  const { t: n } = le(), r = He(), { state: i, actions: o } = xa(), { isMobileExperience: l } = Ba(), u = ot(), { isAgentMessageActionsEnabled: d } = rs(), c = Cc(), h = i.focusInputTrigger, m = i.attachments, p = i.mode, F = _a(p), g = F ? i.inputLayout : "auto", C = i.density, E = i.isReadyForInput, k = d ? i.quotedContext : void 0, I = N(is), f = N(vc), b = N(In), S = N(kc), D = N(os), L = N(Ac), R = N(Hr), y = N(Ha), T = N(Sc) && i.enableVoiceInput, x = N(wc), w = N(Ec), A = N(Dc), W = N(Bc), P = N(Tc), O = N(Mc), U = Vr(), j = N(Kt), J = N(ss), H = N(Rc), V = N(Ic), ne = N(ls), $ = N(Pc), ie = N(us), z = N(Lc), K = N(Mn), ae = N((G) => G.conversations.list), {
    state: {
      hasUploadingAttachments: X,
      hasPendingUploads: ce,
      errorMessage: re,
      isDragging: De,
      isCloudDocumentExplorerOpen: Me
    },
    actions: {
      triggerFileInput: Fe,
      clearAllAttachments: we,
      clearError: Le,
      flushPendingUploads: _e,
      showDragOverlayOnDragEnter: Te,
      maintainDragStateOnDragOver: Ke,
      hideDragOverlayOnDragLeave: $e,
      uploadFilesOnDrop: oa,
      addUploadingAttachments: qe,
      replaceUploadingAttachment: Ta,
      removeUploadingAttachment: Oa,
      isUploadCancelled: sa,
      openCloudDocumentExplorer: Be,
      closeCloudDocumentExplorer: Ue,
      setError: ha
    }
  } = Rr(), [Bt, lt] = Y(!1), [Ce, ta] = Y(!1), [Ga, ma] = Y(!1), [Ma, Ka] = Y(!1), ut = N(_c), [q, ge] = Y({
    isRecording: !1,
    isProcessingAudio: !1,
    isMuted: !1
  }), Je = wt(ge, ik), ve = M(
    (G) => {
      Je.cancel(), !G.isRecording && !G.isProcessingAudio ? Je(G) : ge(G);
    },
    [Je]
  ), [la, ct] = Y(null), Tt = M(() => {
    ct(null);
  }, []), pa = v(null), Ja = v(null), Mt = v(null), Jt = Xh(Mt), Nn = v(b), dt = v(null), je = v(null);
  Wr("plus-button", dt);
  const Ye = v(null), [zt, Ur] = Y(!1), { triggerProps: El, popupProps: Dl } = Lr(
    { isOpen: zt, role: "menu" }
  ), [jr, Yr] = Nc(
    (G, Z) => Z,
    !1
  ), Zr = v(p);
  it(() => {
    const G = ea(Zr.current), Z = vn(p);
    if (Zr.current = p, !G || !Z)
      return;
    Yr(!0);
    const Re = setTimeout(() => {
      Yr(!1);
    }, uk);
    return () => clearTimeout(Re);
  }, [p]);
  const Qr = v(j);
  _(() => {
    const G = Qr.current === "connected", Z = j === "connected";
    Qr.current = j, !G && Z && !S && r(er(c));
  }, [j, r, c, S]);
  const Xr = v(y);
  _(() => {
    const G = Xr.current, Z = y;
    if (G !== Z && G && Z) {
      c && r(xc({ conversationId: G, input: c }));
      const ke = ae.find((ga) => ga.id === Z)?.unsentInput || "";
      ke ? o.setInputBarValue(ke) : o.clearInput();
    }
    Xr.current = Z;
  }, [y, ae, r, c, o]);
  const ei = !!c.trim(), Fa = m.length > 0 || ce, Bl = !!S && !b, Vt = !!(k && k.trim().length > 0), ai = ei || Fa || Bl || ce, ti = J === "creating", xn = E && !Ce && !X && !ti && ai, ni = E && !Ce && !X && !ti, Hn = v(!1), Wn = v(null), Rt = () => {
    ma(!0), Hn.current = !0, Wn.current && clearTimeout(Wn.current), Wn.current = setTimeout(() => {
      Hn.current = !1;
    }, ok);
  }, It = M(
    (G = 0) => {
      if (G === 0 && Hn.current)
        return;
      Ye.current !== null && (o.setInputBarValue(Ye.current), Ye.current = null);
      const Z = () => {
        ma(!1), je.current?.resetSelection();
      };
      G ? setTimeout(Z, G) : Z();
    },
    [o]
  ), On = M(
    (G = sk) => {
      It(G);
    },
    [It]
  );
  cs({
    ref: Ja,
    onOutsideInteraction: It,
    enabled: Ga
  });
  const ht = M(
    (G) => {
      h === 0 && !G || pa.current?.focus();
    },
    [h]
  );
  _(() => {
    ht();
  }, [h, ht]);
  const ri = v(I === 0);
  _(() => {
    const G = ri.current, Z = I === 0;
    ri.current = Z, G && !Z && ht();
  }, [ht, I]);
  const { isExpanded: $t, isMultiLine: Tl } = _f({ textareaRef: pa, inputValue: c }), Gn = v(!1), Kn = v(!1), ii = M(
    (G) => {
      G && (Gn.current = !0, Kn.current = !0);
      const Z = pa.current?.value || "", Re = Z ? `${Z} ${G}` : G;
      o.setInputBarValue(Re);
    },
    [o]
  );
  _(() => {
    q.isProcessingAudio || !Kn.current || (Kn.current = !1, o.focusInput());
  }, [q.isProcessingAudio, o]);
  const oi = Nf(pa, o.setInputBarValue), Jn = M(
    async (G, Z, Re) => {
      ta(!0);
      const ke = P;
      P && r(Hc(!1));
      let ga = Z;
      if (ce) {
        const ua = await _e();
        ga = [...Z, ...ua];
      }
      try {
        await r(
          ds({
            messageContent: G,
            metadata: {
              attachments: ga,
              conversationOptions: V,
              secure: ke,
              voiceInputUsed: Gn.current,
              quotedText: Re
            }
          })
        ).unwrap();
      } catch (ua) {
        B("MessageInput", "Failed to send message:", ua);
      } finally {
        Gn.current = !1, setTimeout(() => {
          ta(!1);
        }, rk);
      }
    },
    [r, V, P, ce, _e]
  ), Pt = wt((G) => {
    je.current?.resetSelection(), r(er(G));
  }, H), Ml = (G) => {
    const Z = G.clipboardData?.getData("text");
    if (!Z)
      return;
    const Re = Z.trimEnd();
    if (Re === Z)
      return;
    G.preventDefault();
    const ke = G.currentTarget, { selectionStart: ga, selectionEnd: ua } = ke, Ra = ke.value.slice(0, ga), za = ke.value.slice(ua), ya = Ra + Re + za;
    o.setInputBarValue(ya), Ye.current = null, (!Un() || ya.length === 0) && Pt(ya), ya.length === 0 && Rt(), requestAnimationFrame(() => {
      const Lt = Ra.length + Re.length;
      ke.setSelectionRange(Lt, Lt);
    });
  }, Rl = (G) => {
    const Z = G.currentTarget.value;
    o.setInputBarValue(Z), Ye.current = null, (!Un() || Z.length === 0) && Pt(Z), Z.length === 0 && Rt();
  }, si = () => {
    if (je.current?.getSelectedLink()) {
      Ye.current !== null && o.setInputBarValue(Ye.current);
      return;
    }
    const Z = je.current?.getSelectedValue();
    Z != null && (Ye.current === null && (Ye.current = c), o.setInputBarValue(Z));
  }, Il = (G) => {
    if (G.key === "Escape") {
      It();
      return;
    }
    if (G.key === "Enter" && !G.shiftKey && !Bt && !Ce) {
      if (G.preventDefault(), je.current?.getSelectedLink()) {
        je.current?.clickSelectedLink();
        return;
      }
      const ke = je.current?.getSelectedValue();
      ke ? (Ye.current = ke, o.setInputBarValue(ke), zn(ke, !0)) : li(G);
      return;
    }
    const Z = jn();
    Z && G.key === "ArrowUp" && (G.preventDefault(), je.current?.moveSelectionUp(), si()), Z && G.key === "ArrowDown" && (G.preventDefault(), je.current?.moveSelectionDown(), si());
  }, zn = (G, Z = !1, Re = !1) => {
    if (!xn && !Z)
      return;
    const ke = G.trim();
    if (!ke && !S && !Fa && !ce || b)
      return;
    if (!ke && S) {
      Vn();
      return;
    }
    const ga = [...m], ua = k && k.trim().length > 0 ? k : void 0;
    Pt("");
    const Ra = mt && !Re;
    Ra && It(), Ye.current = null;
    const za = !y;
    za || (o.clearInput(), we(), Le()), o.clearQuotedContext(), y && r(zc(y)), setTimeout(() => {
      Ra && Rt(), ht(!0);
    }, lk), l && pa.current?.blur();
    const ya = Jn(ke, ga, ua);
    za && ya.finally(() => {
      o.clearInput(), we(), Le();
    });
  }, li = async (G) => {
    G.preventDefault(), zn(c);
  }, Pl = () => {
    Ka(!0), Rt(), ea(p) && l && $n(), import("./LottieAnimation-iMBMbKbI.js");
  }, Ll = () => {
    Ka(!1);
  }, _l = M(() => {
    Ye.current = null, o.clearInput(), Pt.cancel(), r(er("")), On();
  }, [o, On, r, Pt]), Nl = (G) => {
    ni && (Ye.current = G, o.setInputBarValue(G), On(), zn(G, !0, !0));
  }, xl = M(
    (G) => {
      f || r(
        yr({
          content: G.label,
          attachments: []
        })
      ), r(fr(G)), o.clearInput();
    },
    [r, f, o]
  ), Vn = M(() => {
    if (!S)
      return;
    const G = [...m];
    we(), Le(), Jn(S, G), r(ar());
  }, [
    S,
    m,
    we,
    Le,
    Jn,
    r
  ]);
  _(() => {
    D && ta(!1);
  }, [D]), _(() => {
    const G = Nn.current;
    Nn.current = b, !(!G || b) && ta(!1);
  }, [b, S, D, Vn]);
  const ui = v(E);
  _(() => {
    ui.current, ui.current = E;
  }, [E, S, Vn]);
  const Hl = () => {
    S && (o.setInputBarValue(S), r(ar()), ht(!0));
  }, Wl = () => {
    r(ar());
  }, ci = (G) => {
    V.includes(G) ? r(Vc(G, y ?? void 0)) : r($c(G, y ?? void 0));
  }, Ol = M(() => {
    o.setIsPromptLibraryOpen(!0);
  }, [o]), di = O.length > 0 || x || R || U && !F, Gl = M(() => {
    Ur(!0);
  }, []), Kl = M(() => {
    Ur(!1);
  }, []), Jl = M(() => {
    R ? Fe({ autoSend: !0, isLiveAgent: !0 }) : Fe();
  }, [Fe, R]), zl = M(() => {
    Fe({ fileType: "image" });
  }, [Fe]), Vl = M(() => {
    Fe({ fileType: "image", capture: !0 });
  }, [Fe]), $l = M(
    async (G) => await r(Wc(G)).unwrap(),
    [r]
  ), ql = M(
    async (G) => await r(Oc(G)).unwrap(),
    [r]
  ), $n = M(() => {
    const G = i.isLegacyModeDetected ? "DEFAULT" : "side";
    u("message-input:mode-change", { newMode: G });
  }, [u, i.isLegacyModeDetected]), Ul = N(hs), jl = N(ms), mt = !Ul || jl, pt = M(() => ea(p), [p]), hi = M(() => Gc(p), [p]), Yl = M(() => vn(p), [p]), Zl = te(Q.disclaimer, {
    [Q.hidden]: pt() || F || mt
  }), mi = n("Some answers generated by AI. Be sure to check for accuracy."), Ql = /* @__PURE__ */ s("div", { className: Zl, children: /* @__PURE__ */ s("p", { children: [
    mi,
    /* @__PURE__ */ s(Ot, { onlyIfTruncated: !0, children: mi })
  ] }) }), pi = ye(() => /* @__PURE__ */ s(
    he,
    {
      action: oe.SendMessage,
      className: Q.submit,
      isBusy: Ce,
      disabled: !xn || b || Ce
    }
  ), [Ce, xn, b]), Fi = M(() => {
    r(Kc());
  }, [r]), gi = ye(() => /* @__PURE__ */ s(
    he,
    {
      action: oe.StopResponding,
      className: Q.stop,
      disabled: D || L === "data_collector" || L === "topic_execution",
      onClick: Fi
    }
  ), [D, L, Fi]), yi = ye(() => /* @__PURE__ */ s(
    $C,
    {
      onTranscription: ii,
      onStateChange: ve,
      onError: ct,
      disabled: b
    }
  ), [
    b,
    ii,
    ve,
    ct
  ]), Xl = (Fa || X) && !q.isRecording && !q.isProcessingAudio, eu = ei || Ce || !T || Xl, qn = ye(() => R ? /* @__PURE__ */ s(Or, { fallback: null, children: /* @__PURE__ */ s(nk, { onSelect: oi }) }) : null, [R, oi]), fi = b && W, bi = qn && !fi, Ci = fi ? "stop" : eu ? "send-message" : "voice", au = ye(
    () => /* @__PURE__ */ s(Pe, { children: [
      bi && qn,
      /* @__PURE__ */ s(rv, { activeItem: Ci, children: [
        /* @__PURE__ */ s(hr, { item: "send-message", children: pi }),
        /* @__PURE__ */ s(hr, { item: "stop", children: gi }),
        /* @__PURE__ */ s(hr, { item: "voice", mode: "button", children: yi })
      ] })
    ] }),
    [bi, qn, Ci, pi, gi, yi]
  ), Un = () => Tl || !mt || Fa || X || b || Ce, jn = () => !Un() && Ga && ut, Ft = jn();
  _(() => {
    o.setIsInputBarTall(
      Ft || $t || Fa || X || !!re
    );
  }, [
    Ft,
    $t,
    Fa,
    X,
    re,
    o
  ]), _(() => {
    o.setIsSuggestionsVisible(Ft);
  }, [Ft, o]);
  const Yn = () => $t || g === "expanded" ? !0 : g === "compact" ? !1 : F ? !0 : jr ? !1 : hi() && mt && !a, vi = () => F ? !1 : jr ? !0 : a || pt() || Na(p) || !(hi() && mt), Zn = () => !l && (t || pt()) && !Ma && !zt && !Yn() && !jn() && !Fa && !X && !Vt && !Jt && !re, ki = () => pt() && !Ga && !Ma && !zt && !$t && !ai && !Fa && !X && !Vt && !Jt && !re, tu = () => {
    if (V.length === 0)
      return null;
    const G = !Yn();
    return /* @__PURE__ */ s(Pe, { children: V.map((Z) => /* @__PURE__ */ s(
      Ib,
      {
        optionId: Z,
        isCompact: G,
        onClick: ci
      },
      Z
    )) });
  }, nu = () => {
    const G = je.current?.getSelectedId() ?? void 0;
    let Z;
    q.isProcessingAudio ? Z = n("Processing...") : q.isRecording ? Z = n("Listening...") : Vt ? Z = n("Ask a follow-up...") : Z = z || (K ? n("Ask or search for anything") : "");
    const Re = te(Q.input, {
      [Q.inputMasked]: P
    }), ke = q.isRecording || q.isProcessingAudio ? n("Message input") : Z || n("Message input");
    return /* @__PURE__ */ s(
      "textarea",
      {
        id: "base-input",
        ref: pa,
        name: "user-input-message",
        value: c,
        onChange: Rl,
        onPaste: Ml,
        onKeyDown: Il,
        onFocus: Pl,
        onBlur: Ll,
        onClick: Rt,
        onCompositionStart: () => lt(!0),
        onCompositionEnd: () => lt(!1),
        placeholder: Z,
        className: Re,
        rows: 1,
        "aria-label": ke,
        "aria-controls": Ro,
        "aria-activedescendant": G,
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        disabled: q.isRecording || q.isProcessingAudio,
        "data-testid": "message-input"
      }
    );
  }, ru = () => {
    let G = null;
    la && (G = /* @__PURE__ */ s(
      ul,
      {
        className: Q.voiceErrorBanner,
        message: la,
        onDismiss: Tt,
        "data-testid": "voice-error-banner"
      }
    ));
    let Z = null;
    if (!l && (pt() || t)) {
      const qt = !ki() && !Zn();
      Z = /* @__PURE__ */ s("div", { className: Q.insideAnimationCell, children: /* @__PURE__ */ s(Co, { onClick: $n, active: qt, variant: e }) });
    }
    let Re = null;
    di && (Re = /* @__PURE__ */ s(
      kb,
      {
        onClick: Gl,
        buttonRef: dt,
        triggerProps: El
      }
    ));
    let ke = null;
    di && zt && (ke = /* @__PURE__ */ s(
      Rb,
      {
        onCloseComplete: Kl,
        availableOptions: O,
        checkOptions: V,
        onToggleOption: ci,
        onUploadClick: Jl,
        onCloudDocumentsClick: Be,
        onPhotoClick: zl,
        onCameraClick: Vl,
        onViewPromptLibrary: Ol,
        buttonRef: dt,
        docQnaEnabled: x,
        cloudDocumentEnabled: w && A && x,
        liveAgentActive: R,
        promptLibraryEnabled: U && !F,
        popupProps: Dl
      }
    ));
    let ua = null;
    Vt && (ua = /* @__PURE__ */ s(
      "div",
      {
        className: Q.quotedContextChip,
        "data-testid": "quoted-context-chip",
        role: "region",
        "aria-label": n("Referenced text from prior message"),
        children: [
          /* @__PURE__ */ s("div", { className: Q.quotedContextChipContent, children: [
            /* @__PURE__ */ s(cl, { className: Q.quotedContextChipIcon, "aria-hidden": "true" }),
            /* @__PURE__ */ s("span", { className: Q.quotedContextChipText, children: `“${k}”` })
          ] }),
          /* @__PURE__ */ s(
            he,
            {
              action: oe.Dismiss,
              onClick: o.clearQuotedContext,
              ariaLabel: n("Remove referenced text")
            }
          )
        ]
      }
    ));
    const Ra = /* @__PURE__ */ s("div", { className: Q.inputWrapper, children: nu() }, "input-wrapper"), za = /* @__PURE__ */ s("div", { className: Q.ctrlLeft, children: /* @__PURE__ */ s("div", { className: Q.ctrlWrapper, children: [
      Z,
      Re,
      tu()
    ] }) }, "ctrl-left"), ya = /* @__PURE__ */ s("div", { className: Q.ctrlRight, children: au }, "ctrl-right"), Lt = Yn(), ou = Lt ? /* @__PURE__ */ s(Pe, { children: [
      Ra,
      za,
      ya
    ] }) : /* @__PURE__ */ s(Pe, { children: [
      za,
      Ra,
      ya
    ] }), su = te(Q.barWrapper, {
      // --- while waiting for session to be created
      [Q.initializing]: !E,
      // --- textarea/input field is above the buttons
      [Q.expanded]: Lt,
      // --- suggestions container should position itself above the input
      [Q.expandAbove]: vi(),
      // --- suggestions dropdown is showing
      [Q.suggesting]: Ft,
      // --- adjusts padding/layout when files are attached
      [Q.hasAttachments]: Fa,
      // --- shows the back navigation icon
      [Q.backButtonOutside]: Zn(),
      // --- renders minimal input bar
      [Q.discreet]: ki()
    });
    return /* @__PURE__ */ s("div", { className: Q.barAnchor, children: /* @__PURE__ */ s(
      "div",
      {
        className: su,
        onDragEnter: Te,
        onDragOver: Ke,
        onDragLeave: $e,
        onDrop: oa,
        onMouseDown: (qt) => {
          qt.target !== pa.current && qt.preventDefault();
        },
        role: "presentation",
        "data-testid": "bar-wrapper",
        children: [
          Ql,
          /* @__PURE__ */ s("div", { ref: Ja, className: Q.inputBar, children: [
            /* @__PURE__ */ s("label", { htmlFor: "base-input", className: Q.inputBarSurface }),
            De && x && /* @__PURE__ */ s("div", { className: Q.dragOverlayContainer, children: /* @__PURE__ */ s("div", { className: Q.dragOverlay, "data-testid": "drag-overlay", children: [
              /* @__PURE__ */ s(Jc, { "aria-hidden": "true" }),
              /* @__PURE__ */ s("span", { className: Q.dragText, children: n("Drop a file to add as an attachment") })
            ] }) }),
            /* @__PURE__ */ s("div", { className: Q.outsideCtrlWrapper, children: /* @__PURE__ */ s("div", { className: Q.outsideAnimationCell, children: /* @__PURE__ */ s(
              Co,
              {
                onClick: $n,
                outside: !0,
                active: Zn(),
                variant: e
              }
            ) }) }),
            /* @__PURE__ */ s("div", { ref: Mt, className: Q.innerWrapper, children: [
              /* @__PURE__ */ s(yb, {}),
              G,
              /* @__PURE__ */ s(sb, {}),
              ua,
              ou
            ] }),
            /* @__PURE__ */ s("div", { className: Q.optionsMenuAnchor, children: ke }),
            /* @__PURE__ */ s("div", { className: Q.suggestions, children: [
              /* @__PURE__ */ s(
                Y0,
                {
                  ref: je,
                  isSuggesting: Ga,
                  onPromptClick: Nl,
                  onWorkflowClick: xl,
                  onLinkClick: _l,
                  listboxId: Ro,
                  canSubmitSuggestion: ni,
                  shouldExpandAbove: vi()
                }
              ),
              /* @__PURE__ */ s(qC, { shouldTrack: Ft })
            ] })
          ] })
        ]
      }
    ) });
  };
  let Ai = null;
  Yl() && !F && (Ai = /* @__PURE__ */ s(hl, { isReadyForInput: E }));
  const iu = te(Q.messageInput, {
    // --- hero mode (input only for a home page, no chat messages shown)
    [Q.hero]: F,
    // --- omni mode (chat messages are rendered but hidden)
    [Q.omni]: pt(),
    // --- side mode (chat messages are rendered but hidden)
    [Q.side]: Na(p),
    // --- new conversation (no user messages yet, or only a greeting message)
    [Q.empty]: mt,
    // --- compact layout for shorter bar anchor height in hero mode
    [Q.compact]: F && g === "compact",
    // --- condensed density for tighter spacing
    [Q.condensed]: C === "condensed",
    // --- the input bar is in a narrow container for tighter spacing (regardless of viewport size)
    [Q.narrow]: a
  });
  return /* @__PURE__ */ s("div", { className: iu, children: [
    Ai,
    /* @__PURE__ */ s("div", { className: Q.formWrapper, children: /* @__PURE__ */ s("form", { onSubmit: li, className: Q.form, children: [
      ru(),
      S && /* @__PURE__ */ s("div", { className: Q.queuedMessage, "data-testid": "queued-message", children: [
        /* @__PURE__ */ s("div", { className: Q.queuedMessageContent, children: [
          /* @__PURE__ */ s("span", { className: Q.queuedLabel, children: n("Queued:") }),
          /* @__PURE__ */ s("span", { className: Q.queuedText, children: S })
        ] }),
        /* @__PURE__ */ s("div", { className: Q.queuedActions, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: Hl,
              className: Q.queuedButton,
              "aria-label": n("Edit queued message"),
              "data-testid": "edit-queued-button",
              children: n("Edit")
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              onClick: Wl,
              className: Q.queuedButton,
              "aria-label": n("Cancel queued message"),
              "data-testid": "cancel-queued-button",
              children: n("Cancel")
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ s(
      ub,
      {
        isOpen: Me,
        isEnabled: w && x,
        onClose: Ue,
        acceptedAttachmentTypes: ne,
        maxNumAttachments: $,
        userId: ie,
        onAddUploadingAttachments: qe,
        onReplaceUploadingAttachment: Ta,
        onRemoveUploadingAttachment: Oa,
        onIsUploadCancelled: sa,
        onAddAttachment: o.addAttachment,
        onSetError: ha,
        t: n,
        onCreateCloudDocument: $l,
        onLinkDmsDocument: ql
      }
    )
  ] });
}, Io = ({
  backButtonIcon: e,
  isNarrowMainContent: a = !1,
  showChatPanelToggle: t
}) => /* @__PURE__ */ s(
  ck,
  {
    backButtonIcon: e,
    isNarrowMainContent: a,
    showChatPanelToggle: t
  }
), dk = 2;
function hk({
  messagesContainerRef: e,
  threadId: a,
  visibleItemCount: t,
  isScrollReady: n
}) {
  const r = He(), i = N(qc), o = N(Uc), l = v(0), u = v(!1);
  _(() => {
    l.current = 0, u.current = !1;
  }, [a]);
  const d = Tr(() => {
    !a || o || !i || !n() || (e.current && (l.current = e.current.scrollHeight, u.current = !0), Ae("MessageHistory", "Loading older messages", { threadId: a }), r(jc(a)));
  }), c = v(null), h = v(null);
  return _(() => {
    const m = e.current;
    if (!m || !i || t === 0) {
      c.current && (c.current.disconnect(), c.current = null, h.current = null);
      return;
    }
    const p = m.querySelectorAll('[data-testid^="message-wrapper-"]'), F = Math.min(dk, p.length - 1), g = p[F];
    if (g && !(h.current === g && c.current))
      return c.current && c.current.disconnect(), c.current = new IntersectionObserver(
        (C) => {
          C[0]?.isIntersecting && d();
        },
        {
          root: m,
          threshold: 0
        }
      ), c.current.observe(g), h.current = g, () => {
        c.current && (c.current.disconnect(), c.current = null, h.current = null);
      };
  }, [e, i, t, a]), it(() => {
    const m = e.current;
    if (!m || !u.current)
      return;
    const p = l.current, F = m.scrollHeight, g = F - p;
    g > 0 && (m.scrollTop += g, Ae("MessageHistory", "Scroll position preserved", {
      previousScrollHeight: p,
      newScrollHeight: F,
      scrollHeightDelta: g,
      newScrollTop: m.scrollTop
    })), u.current = !1;
  }, [t, e]), {
    isLoadingHistory: o,
    hasMoreItems: i
  };
}
const mk = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ se("circle", { cx: 8, cy: 8, r: 6, stroke: "currentColor", strokeWidth: 1.5 }), /* @__PURE__ */ se("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M5.5 8.5 7 10l3.5-3.5" })), pl = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ se("circle", { cx: 8, cy: 8, r: 6, stroke: "currentColor", strokeWidth: 1.5 }), /* @__PURE__ */ se("path", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: 1.5, d: "m6 6 4 4m0-4-4 4" })), pk = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ se("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 4v5h.58m15.36 2A8 8 0 0 0 4.58 9m0 0H9m11 11v-5h-.58m0 0a8 8 0 0 1-15.36-2m15.36 2H15" })), Fk = "_snackbar_1zgs0_1", gk = "_snackbarContent_1zgs0_5", yk = "_icon_1zgs0_12", fk = "_viewButton_1zgs0_19", dn = {
  snackbar: Fk,
  snackbarContent: gk,
  icon: yk,
  viewButton: fk
}, bk = 5e3, Ck = ({
  isVisible: e,
  onDismiss: a,
  onView: t
}) => {
  const { t: n } = le(), { announce: r } = Ir(), i = Ie(a);
  return _(() => {
    if (!e)
      return;
    const o = setTimeout(() => i.current(), bk);
    return () => {
      clearTimeout(o);
    };
  }, [e, i]), _(() => {
    e && r(n("Prompt saved"));
  }, [e, r, n]), /* @__PURE__ */ s(ll, { isVisible: e, onDismiss: a, className: dn.snackbar, children: /* @__PURE__ */ s("div", { className: dn.snackbarContent, children: [
    /* @__PURE__ */ s(Yc, { className: dn.icon, "aria-hidden": "true" }),
    /* @__PURE__ */ s("span", { "aria-hidden": "true", children: n("Prompt saved") }),
    /* @__PURE__ */ s("button", { type: "button", className: dn.viewButton, onClick: t, children: n("View") })
  ] }) });
}, vk = "_panel_1jwqs_1", kk = {
  panel: vk
}, Ak = "sys_now_assist_deployment";
function Sk({
  promptText: e,
  deploymentId: a,
  onSave: t,
  onClose: n
}) {
  const r = v(null), i = v(null), o = Ie(t), l = Ie(n), u = Ie(e), d = Ie(a);
  return _(() => {
    const c = r.current;
    if (!c)
      return;
    let h = null, m = !1, p = null, F = null;
    return import("./index-P7TGhTX3.js").then(() => {
      m || (h = document.createElement("pm-save"), p = () => {
        o.current();
      }, F = () => {
        l.current();
      }, h.addEventListener("pm-save-prompt", p), h.addEventListener("pm-save-cancel", F), h.setAttribute("prompt-text", u.current), d.current && h.setAttribute("target-id", d.current), h.setAttribute("target-table", Ak), c.appendChild(h), i.current = h);
    }).catch((g) => {
      fe("SavePromptDialog", "Failed to load prompt management library", g);
    }), () => {
      m = !0, h && (p && h.removeEventListener("pm-save-prompt", p), F && h.removeEventListener("pm-save-cancel", F), i.current = null, c.contains(h) && c.removeChild(h));
    };
  }, [o, l]), _(() => {
    i.current && (i.current.setAttribute("prompt-text", e), a ? i.current.setAttribute("target-id", a) : i.current.removeAttribute("target-id"));
  }, [e, a]), /* @__PURE__ */ s("div", { ref: r, className: kk.panel, "data-testid": "save-prompt-panel" });
}
function wk({
  open: e,
  promptText: a,
  triggerRef: t,
  onSave: n,
  onClose: r
}) {
  const i = v(null), o = N(ps), l = Ie(r);
  _(() => {
    e ? i.current?.show() : i.current?.hide();
  }, [e]);
  const u = M(() => {
    i.current?.hide();
  }, []), d = M(() => {
    l.current();
  }, [l]);
  return /* @__PURE__ */ s(
    nt,
    {
      ref: i,
      dialogAnchorElement: () => t.current,
      onCloseComplete: d,
      children: /* @__PURE__ */ s(
        Sk,
        {
          promptText: a,
          deploymentId: o,
          onSave: n,
          onClose: u
        }
      )
    }
  );
}
const Ek = "_avatarContainer_wi20f_1", Dk = "_profileImage_wi20f_8", Bk = "_initialsCircle_wi20f_15", Tk = "_initials_wi20f_15", Mk = "_onlineIndicator_wi20f_32", ja = {
  avatarContainer: Ek,
  profileImage: Dk,
  initialsCircle: Bk,
  initials: Tk,
  onlineIndicator: Mk
}, Rk = 2, Fl = ({
  url: e,
  initials: a,
  name: t,
  isOnline: n = !1
}) => {
  const [r, i] = Y(!1), o = v(e);
  o.current !== e && (o.current = e, r && i(!1));
  const l = a || t.substring(0, Rk).toUpperCase() || "LA", u = () => {
    i(!0);
  };
  return !e || r ? /* @__PURE__ */ s("div", { className: ja.avatarContainer, children: [
    /* @__PURE__ */ s("div", { className: ja.initialsCircle, children: /* @__PURE__ */ s("span", { className: ja.initials, children: l }) }),
    n && /* @__PURE__ */ s("div", { className: ja.onlineIndicator })
  ] }) : /* @__PURE__ */ s("div", { className: ja.avatarContainer, children: [
    /* @__PURE__ */ s(
      "img",
      {
        src: e,
        alt: `${t}'s profile`,
        className: ja.profileImage,
        "data-testid": "agent-avatar-image",
        onError: u
      }
    ),
    n && /* @__PURE__ */ s("div", { className: ja.onlineIndicator })
  ] });
}, Ik = "_agentMessageHeader_90uyn_1", Pk = "_liveAgentName_90uyn_9", Po = {
  agentMessageHeader: Ik,
  liveAgentName: Pk
};
function Lk({ senderDetails: e }) {
  const a = e.displayName || e.name || "";
  return /* @__PURE__ */ s("div", { className: Po.agentMessageHeader, "data-testid": "agent-message-header", children: [
    /* @__PURE__ */ s(
      Fl,
      {
        url: e.avatarPath,
        name: a,
        initials: e.initials
      }
    ),
    /* @__PURE__ */ s("span", { className: Po.liveAgentName, "data-testid": "live-agent-name", children: a })
  ] });
}
const _k = "8", Nk = "8", xk = "_askFollowUpPill_pstxr_6", qr = {
  askFollowUpPillOffsetPx: _k,
  askFollowUpPillShiftPx: Nk,
  askFollowUpPill: xk
}, Hk = 8, Wk = 8, Ok = parseInt(qr.askFollowUpPillOffsetPx, 10) || Hk, Gk = parseInt(qr.askFollowUpPillShiftPx, 10) || Wk;
function Kk({ containerRef: e }) {
  const { t: a } = le(), t = rt(), { text: n, rect: r } = Of(e), { rootRef: i } = Fs(), o = Ie(r), l = ye(
    () => ({
      getBoundingClientRect: () => o.current ?? new DOMRect(0, 0, 0, 0)
    }),
    [o]
  ), u = i.current ?? void 0, {
    refs: d,
    floatingStyles: c,
    update: h
  } = gs({
    placement: "top",
    whileElementsMounted: Cs,
    middleware: [
      ys(Ok),
      fs({ boundary: u }),
      bs({ padding: Gk, boundary: u })
    ]
  });
  _(() => {
    d.setPositionReference(l);
  }, [d, l]), _(() => {
    h();
  }, [r, h]);
  const m = M(() => {
    if (!n)
      return;
    t.setQuotedContext(n), t.focusInput();
    const p = e.current?.getRootNode();
    ((p instanceof ShadowRoot ? p.getSelection?.() : null) ?? document.getSelection())?.removeAllRanges();
  }, [n, t, e]);
  return !n || !r ? null : /* @__PURE__ */ s(Zc, { root: i.current, children: /* @__PURE__ */ s("div", { ref: d.setFloating, style: c, children: /* @__PURE__ */ s(
    he,
    {
      action: oe.AskFollowUp,
      className: qr.askFollowUpPill,
      onClick: m,
      label: a("Ask a follow-up")
    }
  ) }) });
}
const Jk = "_attachmentsContainer_gg9ef_1", zk = "_imageButton_gg9ef_9", Vk = "_imagePreview_gg9ef_44", $k = "_fileCard_gg9ef_52", qk = "_fileCardUser_gg9ef_81", Uk = "_fileIcon_gg9ef_89", jk = "_fileIconSvg_gg9ef_101", Yk = "_fileInfo_gg9ef_108", Zk = "_fileName_gg9ef_116", Qk = "_fileMeta_gg9ef_125", Xk = "_fileType_gg9ef_135", eA = "_fileSize_gg9ef_140", Ne = {
  attachmentsContainer: Jk,
  imageButton: zk,
  imagePreview: Vk,
  fileCard: $k,
  fileCardUser: qk,
  fileIcon: Uk,
  fileIconSvg: jk,
  fileInfo: Yk,
  fileName: Zk,
  fileMeta: Qk,
  fileType: Xk,
  fileSize: eA
}, gl = ({
  attachments: e,
  isUserMessage: a = !1,
  attachmentFiles: t = {}
}) => {
  const [n, r] = Y({}), i = v({}), { showInteractiveView: o } = Dt();
  if (_(() => {
    const c = i.current, h = {};
    for (const [m, p] of Object.entries(t))
      p && p.type.startsWith("image/") && (h[m] = c[m] ?? URL.createObjectURL(p));
    for (const [m, p] of Object.entries(c))
      h[m] || URL.revokeObjectURL(p);
    i.current = h;
  }, [t]), _(() => () => {
    for (const c of Object.values(i.current))
      URL.revokeObjectURL(c);
  }, []), !e || e.length === 0)
    return null;
  const l = (c) => {
    if (Ri(c)) {
      const h = i.current[c.id];
      return h || (c.preview_url ?? c.upload_url ?? null);
    }
    return _i(c) ? c.upload_url ?? null : null;
  }, u = (c) => {
    const h = c.onClickAction;
    if (h?.payload) {
      o({
        type: "attachment",
        widgetData: h.payload,
        widgetId: h.id ?? c.id
      });
      return;
    }
    o({
      type: "attachment",
      widgetData: { ...c, type: "file" },
      widgetId: c.id
    });
  }, d = (c) => {
    const h = l(c);
    if (Ri(c)) {
      const m = Ii(c.name, c.mime_type), p = typeof c.size == "number" ? Pi(c.size) : null, F = Li(c.name);
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: Ne.imageButton,
          onClick: () => u(c),
          "aria-label": `View ${c.name}`,
          "data-testid": "attachment-image",
          children: [
            /* @__PURE__ */ s(
              "img",
              {
                src: h ?? "",
                alt: c.name,
                className: Ne.imagePreview,
                loading: "lazy",
                onError: () => {
                  n[c.id] || r((g) => ({
                    ...g,
                    [c.id]: !0
                  }));
                }
              }
            ),
            /* @__PURE__ */ s("div", { className: Ne.fileInfo, children: [
              /* @__PURE__ */ s("span", { className: Ne.fileName, title: c.name, children: F }),
              /* @__PURE__ */ s("div", { className: Ne.fileMeta, children: [
                /* @__PURE__ */ s("span", { className: Ne.fileType, children: m }),
                p && /* @__PURE__ */ s("span", { className: Ne.fileSize, children: p })
              ] })
            ] })
          ]
        },
        c.id
      );
    }
    if (_i(c)) {
      const m = Ii(c.name, c.mime_type), p = typeof c.size == "number" ? Pi(c.size) : null, F = Li(c.name), g = te(Ne.fileCard, {
        [Ne.fileCardUser]: a
      });
      return /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: g,
          onClick: () => u(c),
          "aria-label": `Open ${c.name}`,
          "data-testid": "attachment-file",
          children: [
            /* @__PURE__ */ s("div", { className: Ne.fileIcon, children: /* @__PURE__ */ s(Qc, { className: Ne.fileIconSvg }) }),
            /* @__PURE__ */ s("div", { className: Ne.fileInfo, children: [
              /* @__PURE__ */ s("span", { className: Ne.fileName, title: c.name, children: F }),
              /* @__PURE__ */ s("div", { className: Ne.fileMeta, children: [
                /* @__PURE__ */ s("span", { className: Ne.fileType, children: m }),
                p && /* @__PURE__ */ s("span", { className: Ne.fileSize, children: p })
              ] })
            ] })
          ]
        },
        c.id
      );
    }
    return null;
  };
  return /* @__PURE__ */ s("div", { className: Ne.attachmentsContainer, "data-testid": "attachments-container", children: e.map((c) => d(c)) });
}, aA = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 12 12", ...e }, /* @__PURE__ */ se("path", { d: "M5 3.25c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-.5A.25.25 0 0 1 5 3.75zM5 5.25c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25h-.5A.25.25 0 0 1 5 7.75z" }), /* @__PURE__ */ se("path", { fillRule: "evenodd", d: "M11 5.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-1 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0", clipRule: "evenodd" })), tA = "_infoBanner_1b2oz_1", nA = "_info_1b2oz_1", rA = "_error_1b2oz_16", iA = "_icon_1b2oz_24", oA = "_message_1b2oz_30", hn = {
  infoBanner: tA,
  info: nA,
  error: rA,
  icon: iA,
  message: oA
}, Dr = ({ message: e, variant: a = "info", className: t }) => {
  const { t: n } = le();
  return /* @__PURE__ */ s(
    "div",
    {
      className: te(hn.infoBanner, hn[a], t),
      role: "note",
      "aria-label": n("Information notice"),
      children: [
        /* @__PURE__ */ s(aA, { className: hn.icon, "aria-hidden": "true" }),
        /* @__PURE__ */ s("span", { className: hn.message, children: e })
      ]
    }
  );
}, sA = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ se("path", { fill: "currentColor", d: "M5 8.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 10a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" }), /* @__PURE__ */ se("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.5 1C2.67 1 2 1.67 2 2.5v11c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V5.7q-.01-.63-.47-1.1l-3.4-3.2A1.5 1.5 0 0 0 9.1 1zM3 2.5c0-.28.22-.5.5-.5H9v2.5c0 .83.67 1.5 1.5 1.5H13v7.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zM12.49 5 10 2.66V4.5c0 .28.22.5.5.5z", clipRule: "evenodd" })), lA = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ se("path", { fill: "currentColor", d: "M14 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M5 10.75c0 .14-.11.25-.25.25H4v-1h.75c.14 0 .25.11.25.25zM8.75 12q.23-.02.25-.25v-1.5a.25.25 0 0 0-.25-.25H8v2z" }), /* @__PURE__ */ se("path", { fill: "currentColor", fillRule: "evenodd", d: "M2 13.5v-11C2 1.67 2.67 1 3.5 1h5.6q.6.01 1.03.4l3.4 3.2q.46.47.47 1.1v7.8c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5m1-11c0-.28.22-.5.5-.5H9v2.5c0 .83.67 1.5 1.5 1.5H13v2H3zm7 2V2.66L12.49 5H10.5a.5.5 0 0 1-.5-.5M3 9.25c0-.14.11-.25.25-.25H5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4v.75c0 .14-.11.25-.25.25h-.5a.25.25 0 0 1-.25-.25zM7.25 9a.25.25 0 0 0-.25.25v3.5c0 .14.11.25.25.25H9a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm4 0a.25.25 0 0 0-.25.25v3.5q.02.23.25.25h.5q.23-.02.25-.25V12h.75q.23-.02.25-.25v-.5a.25.25 0 0 0-.25-.25H12v-1h1.25q.23-.02.25-.25v-.5a.25.25 0 0 0-.25-.25z", clipRule: "evenodd" })), uA = "_actionMenu_15gce_1", cA = "_menuItem_15gce_16", Lo = {
  actionMenu: uA,
  menuItem: cA
}, yl = _r(
  ({ options: e, anchorElement: a, onCloseComplete: t, title: n }, r) => {
    const { t: i } = le(), o = v(null);
    ns(
      r,
      () => ({
        show: () => o.current?.show(),
        hide: () => o.current?.hide()
      }),
      []
    );
    const l = (u) => {
      try {
        u.onClick(), o.current?.hide();
      } catch (d) {
        fe("ActionMenu", "Error executing onClick:", d);
      }
    };
    return /* @__PURE__ */ s(
      nt,
      {
        ref: o,
        dialogAnchorElement: a,
        title: n,
        onCloseComplete: t,
        children: /* @__PURE__ */ s(
          "ul",
          {
            className: Lo.actionMenu,
            role: "menu",
            "aria-label": i("Actions"),
            "aria-orientation": "vertical",
            "data-testid": "action-menu",
            children: e.map((u) => {
              const d = u.icon;
              let c = null;
              if (d && typeof d == "function")
                try {
                  c = /* @__PURE__ */ s(d, { width: 16, height: 16, "aria-hidden": "true" });
                } catch (h) {
                  fe("ActionMenu", "Icon failed to render:", h);
                }
              return /* @__PURE__ */ s("li", { role: "presentation", children: /* @__PURE__ */ s(
                "button",
                {
                  className: Lo.menuItem,
                  onClick: (h) => {
                    h.stopPropagation(), l(u);
                  },
                  role: "menuitem",
                  type: "button",
                  "data-testid": `action-menu-item-${u.value}`,
                  children: [
                    c,
                    u.label
                  ]
                }
              ) }, u.value);
            })
          }
        )
      }
    );
  }
);
yl.displayName = "ActionMenu";
const dA = Wa(yl), hA = "_feedbackForm_1hjry_1", mA = "_titleContainer_1hjry_9", pA = "_title_1hjry_9", FA = "_form_1hjry_21", gA = "_formContent_1hjry_29", yA = "_options_1hjry_37", fA = "_option_1hjry_37", bA = "_label_1hjry_49", CA = "_checkbox_1hjry_58", vA = "_commentSection_1hjry_106", kA = "_submitContainer_1hjry_112", AA = "_submit_1hjry_112", SA = "_textareaContainer_1hjry_137", wA = "_textarea_1hjry_137", EA = "_characterCount_1hjry_173", DA = "_mobile_1hjry_177", Ge = {
  feedbackForm: hA,
  titleContainer: mA,
  title: pA,
  form: FA,
  formContent: gA,
  options: yA,
  option: fA,
  label: bA,
  checkbox: CA,
  commentSection: vA,
  submitContainer: kA,
  submit: AA,
  textareaContainer: SA,
  textarea: wA,
  characterCount: EA,
  mobile: DA
}, mr = 300, BA = 3, _o = ({ title: e, options: a, onSubmit: t, className: n }) => {
  const { t: r } = le(), { isMobileExperience: i } = Ba(), [o, l] = Y([]), [u, d] = Y(""), [c, h] = Y(!1), m = v(null);
  _(() => {
    const S = m.current;
    if (!S)
      return;
    const D = (L) => L.stopPropagation();
    return S.addEventListener("click", D), () => S.removeEventListener("click", D);
  }, []);
  const p = M((S) => {
    l(
      (D) => D.includes(S) ? D.filter((L) => L !== S) : [...D, S]
    );
  }, []), F = M((S) => {
    const D = S.currentTarget;
    D.value.length > mr && (D.value = D.value.slice(0, mr)), d(D.value);
  }, []), g = M(
    (S) => {
      S.preventDefault(), (u || o.length > 0 && !c) && (h(!0), t(o, u));
    },
    [o, u, c, t]
  ), C = mr - u.length, E = te(Ge.feedbackForm, n, {
    [Ge.mobile]: i
  });
  let k = null;
  i || (k = /* @__PURE__ */ s("div", { className: Ge.titleContainer, children: /* @__PURE__ */ s("h4", { className: Ge.title, children: e }) }));
  const I = /* @__PURE__ */ s("div", { className: Ge.options, children: a.map((S) => /* @__PURE__ */ s("div", { className: Ge.option, children: [
    /* @__PURE__ */ s(
      "input",
      {
        id: `feedback-option-${S.value}`,
        type: "checkbox",
        name: "feedback-options",
        value: S.value,
        checked: o.includes(S.value),
        onChange: () => p(S.value),
        className: Ge.checkbox,
        disabled: c
      }
    ),
    /* @__PURE__ */ s("label", { className: Ge.label, htmlFor: `feedback-option-${S.value}`, children: S.label })
  ] }, S.value)) }), f = /* @__PURE__ */ s("div", { className: Ge.commentSection, children: [
    /* @__PURE__ */ s("div", { className: Ge.textareaContainer, children: /* @__PURE__ */ s(
      "textarea",
      {
        id: "feedback-comment",
        className: Ge.textarea,
        placeholder: r("Add comments or suggestions (optional)"),
        value: u,
        onInput: F,
        rows: BA,
        disabled: c,
        "data-testid": "feedback-comment-textarea"
      }
    ) }),
    /* @__PURE__ */ s("div", { className: te(Ge.characterCount), children: r("Characters left: {0}", { 0: String(C) }) })
  ] }), b = /* @__PURE__ */ s("div", { className: Ge.submitContainer, children: /* @__PURE__ */ s(
    "button",
    {
      type: "submit",
      className: Ge.submit,
      disabled: !u && o.length === 0 || c,
      "data-testid": "feedback-submit-button",
      children: r(c ? "Submitting..." : "Submit Feedback")
    }
  ) });
  return /* @__PURE__ */ s("div", { ref: m, className: E, "data-testid": "feedback-form", children: [
    k,
    /* @__PURE__ */ s("form", { onSubmit: g, className: Ge.form, children: [
      /* @__PURE__ */ s("div", { className: Ge.formContent, children: [
        I,
        f
      ] }),
      b
    ] })
  ] });
}, TA = "_messageControls_189yl_1", MA = {
  messageControls: TA
}, RA = "_sourcesButton_16c1x_1", IA = "_sourcesButtonActive_16c1x_58", PA = "_sourceIconsGroup_16c1x_62", LA = "_sourceIconContainer_16c1x_66", mn = {
  sourcesButton: RA,
  sourcesButtonActive: IA,
  sourceIconsGroup: PA,
  sourceIconContainer: LA
}, _A = 3, NA = {
  kb: kn,
  catalog_item: br,
  people: vs
};
function xA(e) {
  if (Xc(e)) {
    const { entityType: a } = e.source;
    return {
      key: a,
      IconComponent: NA[a] ?? kn
    };
  }
  return ed(e) ? {
    key: e.source.type ?? "url",
    IconComponent: Gr
  } : null;
}
function HA(e) {
  const a = /* @__PURE__ */ new Set(), t = [];
  for (const n of e) {
    if (t.length >= _A)
      break;
    const r = xA(n);
    r && !a.has(r.key) && (a.add(r.key), t.push(r));
  }
  return t;
}
function WA({ onClick: e, annotations: a, isActive: t = !1 }) {
  const { t: n } = le(), r = HA(a), i = r.length > 1 && r.some((l) => l.IconComponent !== r[0].IconComponent), o = te(mn.sourcesButton, {
    [mn.sourcesButtonActive]: t
  });
  return /* @__PURE__ */ s("button", { onClick: e, className: o, "data-testid": "sources-button", children: [
    i && /* @__PURE__ */ s("div", { className: mn.sourceIconsGroup, children: r.map(({ key: l, IconComponent: u }) => /* @__PURE__ */ s("div", { className: mn.sourceIconContainer, children: /* @__PURE__ */ s(u, {}) }, l)) }),
    /* @__PURE__ */ s("span", { children: n("Sources and more") })
  ] });
}
const OA = 2e3, GA = 5e3, KA = "ai_native_chat", JA = ({
  onCopy: e,
  onDownload: a,
  threadItem: t = { threadId: "", threadItemId: "" },
  initialFeedback: n = { value: "" },
  annotations: r = [],
  hasSources: i = !1,
  onSourcesClick: o,
  isSourcesPanelActive: l = !1,
  utterance: u,
  isPinnable: d = !1,
  toolContext: c,
  widget: h,
  hideCopyDownload: m = !1,
  contentRef: p
}) => {
  const [F, g] = Y(
    null
  ), [C, E] = Y(!1), [k, I] = Y(
    null
  ), [f, b] = Y(!1), S = v(null), D = v(null), L = v(null), R = v(null), y = v(null), T = v(null), [x, w] = Y(!1), { httpService: A } = da(), W = Nr(ad), P = ot(), O = He(), { t: U } = le(), { track: j } = td(), J = N(nd), H = N(us), V = N(Mn), ne = J?.positive?.isEnabled ?? !1, $ = J?.negative?.isEnabled ?? !1, ie = m, z = N((q) => rd(q, t.threadItemId)) || n, K = v(null);
  _(() => () => {
    K.current && clearTimeout(K.current);
  }, []);
  const ae = M(() => {
    I(null), W?.hide();
  }, [W]), X = wt(ae, id.medium);
  _(() => {
    if (!k || !W)
      return;
    const q = k === "positive" ? L.current : D.current;
    if (!q)
      return;
    const ge = q.getBoundingClientRect();
    return W.show({
      content: U("Thanks for your feedback!"),
      anchorRect: ge,
      placement: "bottom"
    }), X(), () => {
      X.cancel(), W.hide();
    };
  }, [k, W, U, X]);
  const ce = M(
    async (q, ge, Je) => {
      const ve = {
        Positive: "Accepted",
        Negative: "Rejected",
        "": "Ignored"
      }, la = {
        body: {
          conversationId: ge.threadId,
          messageId: ge.threadItemId,
          ...ge.mosaicLlmInvocationId && {
            mosaicLlmInvocationId: ge.mosaicLlmInvocationId
          },
          experience: KA,
          ...Je && { utterance: Je },
          ...H && { userId: H },
          ...V && { sessionId: V },
          value: ve[q?.value ?? ""] ?? ""
        }
      };
      if (q && (q.reasonCode || q.comment)) {
        const Tt = {};
        if (q.reasonCode) {
          const pa = q.reasonCode.split(",").map((Ja) => {
            const Mt = q.value === "Positive", Jt = Mt ? J?.positive?.questions : J?.negative?.questions, dt = (Mt ? J?.positive?.messageKeys : J?.negative?.messageKeys)?.indexOf(Ja) ?? -1, je = dt >= 0 ? Jt?.[dt] : Ja;
            return {
              messageKey: Ja,
              question: je || Ja
            };
          });
          Tt.selectedQuestions = pa;
        }
        q.comment && (Tt.comments = q.comment), la.body.additionalData = JSON.stringify({ nowAssistGranularFeedback: Tt });
      }
      const ct = await A.post("/api/v1/feedback/update", la);
      return ct.ok || O(Ni({ itemId: ge.threadItemId, feedback: { value: "" } })), ct.data;
    },
    [A, J, O, H, V]
  ), re = wt(ce, GA), De = M(
    (q) => {
      re(q, t, u);
    },
    [re, t, u]
  ), Me = M(
    (q) => {
      re?.cancel?.(), ce(q, t, u);
    },
    [ce, t, u, re]
  ), Fe = M(
    (q, ge = !1) => {
      q && (O(Ni({ itemId: t.threadItemId, feedback: q })), q.value !== "" && j("feedbackSubmitted", {
        feedbackType: q.value === "Positive" ? "positive" : "negative"
      })), ge ? Me(q) : De(q);
    },
    [O, t.threadItemId, De, Me, j]
  ), we = M(
    (q) => {
      const ge = q === "Positive" ? "positive" : "negative", Je = q === "Positive" ? ne : $, ve = q === "Positive" ? R : y, la = q === "Positive" ? y : R;
      if (z?.value === q) {
        Fe({ value: "" }), ve.current?.hide(), g(null), I(null);
        return;
      }
      Fe({ value: q }), Je ? (la.current?.hide(), ve.current?.show(), g(ge), I(null)) : (ve.current?.hide(), g(null), I(ge));
    },
    [z, Fe, ne, $]
  ), Le = () => we("Negative"), _e = () => we("Positive"), Te = M(
    (q, ge) => {
      const Je = q.join(",");
      Fe({ value: "Positive", reasonCode: Je, comment: ge }, !0), R.current?.hide(), g(null), I("positive");
    },
    [Fe]
  ), Ke = M(
    (q, ge) => {
      const Je = q.join(",");
      Fe({ value: "Negative", reasonCode: Je, comment: ge }, !0), y.current?.hide(), g(null), I("negative");
    },
    [Fe]
  ), $e = M(() => {
    if (f)
      return;
    let q;
    const ge = p?.current;
    if (ge) {
      const Je = ge?.firstElementChild;
      if (Je) {
        const ve = document.createElement("div");
        ve.style.position = "absolute", ve.style.visibility = "hidden", ve.style.width = "fit-content", ve.style.height = "fit-content", ve.style.top = "-9999px", ve.style.left = "-9999px", ve.setAttribute("data-measurement-container", "true"), ve.appendChild(Je.cloneNode(!0)), document.body.appendChild(ve);
        const la = ve.getBoundingClientRect();
        q = {
          width: la.width,
          height: la.height
        }, ve.remove();
      } else {
        const ve = ge.getBoundingClientRect();
        q = {
          width: ve.width,
          height: ve.height
        };
      }
    }
    P("widget:pinned", {
      widget: h,
      toolContext: c,
      dimensions: q
    }), j("widgetPinned", {
      widgetId: h?.id ?? (h && "widget_id" in h ? h.widget_id : "") ?? ""
    }), b(!0);
  }, [f, h, c, P, p, j]), oa = M(async () => {
    C || !await e() || (E(!0), j("copyClicked"), K.current && clearTimeout(K.current), K.current = setTimeout(() => {
      E(!1), K.current = null;
    }, OA));
  }, [C, e, j]), qe = M(() => {
    j("sourcesAndMoreClicked"), o?.();
  }, [j, o]), Ta = M(() => {
    T.current && (T.current.show(), w(!0));
  }, []), Oa = M(() => {
    w(!1);
  }, []), sa = M(
    async (q) => {
      j("downloadRequested", { downloadFormat: q });
      try {
        await a(q), j("downloadSucceeded", { downloadFormat: q });
      } catch (ge) {
        fe("MessageControls", `Download failed for format ${q}:`, ge), j("downloadFailed", { downloadFormat: q });
      }
    },
    [a, j]
  ), Be = ye(
    () => [
      {
        label: U("Download as PDF"),
        value: "pdf",
        icon: lA,
        onClick: () => {
          sa("pdf");
        }
      },
      {
        label: U("Download as Doc"),
        value: "docx",
        icon: sA,
        onClick: () => {
          sa("docx");
        }
      }
    ],
    [sa, U]
  ), Ue = z?.value === "Positive" ? oe.ThumbsUpActive : oe.ThumbsUp, ha = z?.value === "Negative" ? oe.ThumbsDownActive : oe.ThumbsDown, Bt = C ? oe.Copied : oe.Copy, lt = f ? oe.Pinned : oe.Pin, Ce = U(f ? "Pinned to My Canvas" : "Pin to Canvas"), ta = F === "positive", Ga = F === "negative", ma = J?.positive?.questions.map((q, ge) => ({
    label: q,
    value: J.positive.messageKeys[ge]
  })) ?? [], Ma = J?.negative?.questions.map((q, ge) => ({
    label: q,
    value: J.negative.messageKeys[ge]
  })) ?? [], Ka = J?.positive?.header ?? "What did you like?", ut = J?.negative?.header ?? "Tell us more to help Now Assist improve";
  return /* @__PURE__ */ s("div", { className: MA.messageControls, "data-testid": "message-controls", children: [
    /* @__PURE__ */ s(
      he,
      {
        action: Ue,
        onClick: _e,
        triggerProps: { "aria-expanded": ta },
        ref: L
      }
    ),
    /* @__PURE__ */ s(
      nt,
      {
        ref: R,
        dialogAnchorElement: () => L.current,
        dialogArrowBackgroundTop: "primary",
        dialogArrowBackgroundBottom: "secondary",
        title: Ka,
        onCloseComplete: () => {
          g(null);
        },
        children: /* @__PURE__ */ s(
          _o,
          {
            title: Ka,
            options: ma,
            onSubmit: Te
          }
        )
      }
    ),
    /* @__PURE__ */ s(
      he,
      {
        action: ha,
        onClick: Le,
        triggerProps: { "aria-expanded": Ga },
        ref: D
      }
    ),
    /* @__PURE__ */ s(
      nt,
      {
        ref: y,
        dialogAnchorElement: () => D.current,
        dialogArrowBackgroundTop: "primary",
        dialogArrowBackgroundBottom: "secondary",
        title: ut,
        onCloseComplete: () => {
          g(null);
        },
        children: /* @__PURE__ */ s(
          _o,
          {
            title: ut,
            options: Ma,
            onSubmit: Ke
          }
        )
      }
    ),
    !ie && /* @__PURE__ */ s(he, { action: Bt, onClick: oa, disabled: C }),
    !ie && /* @__PURE__ */ s(Pe, { children: [
      /* @__PURE__ */ s(
        he,
        {
          action: oe.Download,
          onClick: Ta,
          triggerProps: {
            "aria-expanded": x,
            "aria-haspopup": "menu"
          },
          ref: S
        }
      ),
      /* @__PURE__ */ s(
        dA,
        {
          ref: T,
          options: Be,
          anchorElement: () => S.current,
          title: U("Download options"),
          onCloseComplete: Oa
        }
      )
    ] }),
    d && /* @__PURE__ */ s(
      he,
      {
        action: lt,
        onClick: $e,
        disabled: f,
        label: Ce
      }
    ),
    i && o && /* @__PURE__ */ s(
      WA,
      {
        onClick: qe,
        annotations: zo(r),
        isActive: l
      }
    )
  ] });
}, zA = Wa(JA), VA = "_container_m4bpe_1", $A = "_skipButton_m4bpe_7", No = {
  container: VA,
  skipButton: $A
}, qA = ({ threadId: e, itemId: a }) => {
  const { t } = le(), n = He(), r = N(Ha), [i, o] = Y(!1), l = v(!0);
  _(() => () => {
    l.current = !1;
  }, []);
  const u = M(() => {
    if (i || !r || !e || !a)
      return;
    o(!0), n(od({ action: { type: "topic_node.skip", handler: "server" }, threadId: r, itemId: a })).unwrap().catch(() => {
      fe("SkipButton", "Unable to send topic_node.skip action"), l.current && o(!1);
    });
  }, [i, r, e, a, n]);
  return /* @__PURE__ */ s("div", { className: No.container, children: /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      className: No.skipButton,
      onClick: u,
      disabled: i,
      "data-testid": "skip-button",
      children: t("Skip")
    }
  ) });
}, UA = Wa(qA), jA = ({ itemId: e, workflow: a }) => {
  const { t } = le(), n = He(), r = a.expanded, i = `workflow-panel-${e}`;
  return /* @__PURE__ */ s(
    sd,
    {
      workflow: a,
      isExpanded: r,
      onToggle: () => {
        n(ld({ itemId: e, expanded: !r }));
      },
      panelId: i,
      statusLabel: t("Workflow status")
    }
  );
}, YA = Wa(jA), ZA = pd(Fd);
function QA(e) {
  return !Rn(e) || ks(e);
}
function XA({ isSending: e, isFailed: a, onRetry: t }) {
  return e ? /* @__PURE__ */ s("div", { className: de.statusDots, children: [
    /* @__PURE__ */ s("div", { className: de.statusDot }),
    /* @__PURE__ */ s("div", { className: de.statusDot }),
    /* @__PURE__ */ s("div", { className: de.statusDot })
  ] }) : a ? /* @__PURE__ */ s("button", { onClick: t, className: de.retryButton, "data-testid": "retry-message-button", children: /* @__PURE__ */ s(pk, { className: de.retryIcon, "aria-hidden": "true" }) }) : null;
}
function eS({ item: e, masked: a }) {
  const t = e.attachments && e.attachments.length > 0;
  return /* @__PURE__ */ s(Pe, { children: [
    t && /* @__PURE__ */ s(
      gl,
      {
        attachments: e.attachments,
        isUserMessage: !0
      }
    ),
    e.content.map((n, r) => {
      if (n.type === "input_text") {
        const i = n.text ?? "";
        if (!i.trim())
          return null;
        const o = a ? "•".repeat(i.length) : i;
        return /* @__PURE__ */ s(
          As,
          {
            id: e.id,
            text: o,
            isStreaming: !1
          },
          `${e.id}_${r}`
        );
      }
      return n.type === "input_tag" ? /* @__PURE__ */ s("div", { className: de.tag, children: n.text }, `${e.id}_${r}`) : null;
    })
  ] });
}
function aS({ show: e, text: a, children: t }) {
  const { t: n } = le();
  return e ? /* @__PURE__ */ s("div", { className: de.userStack, children: [
    /* @__PURE__ */ s(
      "blockquote",
      {
        className: de.quotedContextBlock,
        "data-testid": "user-message-quoted-context",
        "aria-label": n("In reference to"),
        children: [
          /* @__PURE__ */ s(cl, { className: de.quotedContextIcon, "aria-hidden": "true" }),
          /* @__PURE__ */ s("div", { className: de.quotedContextText, children: `“${a}”` })
        ]
      }
    ),
    t
  ] }) : t;
}
function tS({
  item: e,
  isStreaming: a,
  isAgentMessageActionsEnabled: t
}) {
  const { t: n } = le(), r = hd(e), i = r !== null, o = e.content.some(
    (d) => d.type === "output_text" && md(d.annotations)
  ), l = t && !!e.attachments?.length, u = /* @__PURE__ */ s(Pe, { children: [
    o && /* @__PURE__ */ s(Dr, { message: n("This may include unofficial info from the web.") }),
    l && // Server messages reference attachments by URL, so no local File objects are passed.
    /* @__PURE__ */ s(gl, { attachments: e.attachments ?? [], isUserMessage: !1 }),
    e.content.map((d, c) => d.type !== "output_text" ? null : /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
      As,
      {
        id: e.id,
        text: d.text,
        isStreaming: a,
        annotations: d.annotations
      }
    ) }, `${e.id}_${c}`))
  ] });
  return i ? /* @__PURE__ */ s(Pe, { children: [
    /* @__PURE__ */ s(Lk, { senderDetails: r }),
    /* @__PURE__ */ s("div", { className: de.liveAgentBubble, children: u })
  ] }) : u;
}
function nS(e) {
  return e.split("-").map((a, t) => t === 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a).join(" ");
}
function rS({ item: e }) {
  const { t: a } = le(), t = nS(e.name), n = () => {
    switch (e.status) {
      case "pending":
        return /* @__PURE__ */ s(Kr, { className: de.clientToolCallSpinner, "aria-hidden": "true" });
      case "completed":
        return /* @__PURE__ */ s(mk, { className: de.clientToolCallComplete, "aria-hidden": "true" });
      case "failed":
        return /* @__PURE__ */ s(pl, { className: de.clientToolCallFailed, "aria-hidden": "true" });
    }
  }, r = () => {
    const i = t ? `: ${t}` : "";
    switch (e.status) {
      case "pending":
        return a("Running action{0}...", { 0: i });
      case "completed":
        return a("Ran action{0}", { 0: i });
      case "failed":
        return a("Action failed{0}", { 0: i });
    }
  };
  return /* @__PURE__ */ s("div", { className: de.clientToolCall, children: [
    /* @__PURE__ */ s("div", { className: de.clientToolCallIcon, children: n() }),
    /* @__PURE__ */ s("span", { className: de.clientToolCallText, children: r() })
  ] });
}
function iS(e, a) {
  return e ? "message-bubble-sending" : a ? "message-bubble-user" : "message-bubble-agent";
}
const oS = _r(
  ({
    item: e,
    onRetry: a,
    isLastAgentMessage: t = !1,
    enablePinnable: n = !1,
    readOnly: r = !1,
    utterance: i,
    precedingAssistantText: o,
    masked: l,
    isLastMessage: u
  }, d) => {
    const { t: c } = le(), { isTouchDevice: h } = Ba(), { isAgentMessageActionsEnabled: m } = rs(), p = rt(), F = Xe(e), g = e.clientStatus === "failed", C = e.clientStatus === "sending", k = N(as) === e.id, I = Vr(), f = v(null), [b, S] = Y(!1), [D, L] = Y(!1), R = ye(() => !F || !Xe(e) ? "" : e.content.filter((Be) => Be.type === "input_text").map((Be) => Be.text ?? "").join(`
`).trim(), [F, e]), y = M(() => {
      S(!0);
    }, []), T = M(() => {
      S(!1);
    }, []), x = M(() => {
      S(!1), L(!0);
    }, []), w = M(() => {
      L(!1);
    }, []), A = M(() => {
      L(!1), p.setIsPromptLibraryOpen(!0);
    }, [p]), W = v(null), {
      annotations: P,
      hasSources: O,
      showSourcesInInteractiveView: U,
      isSourcesPanelActive: j
    } = Lf({ item: e, isStreaming: k, renderSearchResults: ZA }), J = M(async () => {
      let Be;
      if (ca(e))
        Be = Ss(e);
      else if (Da(e)) {
        const Ue = [o, e.copy_text].filter(Boolean).join(`

`);
        Be = Ue ? ws(Ue) : void 0;
      }
      if (!Be)
        return !1;
      try {
        return await navigator.clipboard.writeText(Be), B("MessageBubble", "Copied to clipboard"), !0;
      } catch (Ue) {
        return B("MessageBubble", "Failed to copy:", Ue), !1;
      }
    }, [e, o]), H = M(
      async (Be) => {
        const Ue = W.current;
        if (!Ue)
          throw new Error("Cannot download: message content element is not mounted");
        if (Da(e))
          await (Be === "pdf" ? Kh : Jh)({
            contentElement: Ue,
            messageId: e.id,
            precedingText: o
          });
        else if (ca(e))
          await (Be === "pdf" ? Oh : Gh)({
            contentElement: Ue,
            annotations: P
          });
        else
          throw new Error(`Cannot download: unsupported item type ${e.type}`);
      },
      [e, o, P]
    );
    if (QA(e))
      return Ae("[MessageBubble]", "Skipping item render", {
        id: e.id,
        type: e.type,
        isVisibleItem: Rn(e),
        isTaskItem: ks(e)
      }), null;
    const V = () => {
      switch (e.type) {
        case "user_message":
          return /* @__PURE__ */ s(eS, { item: e, masked: l });
        case "assistant_message":
          return /* @__PURE__ */ s(
            tS,
            {
              item: e,
              isStreaming: k,
              isAgentMessageActionsEnabled: m
            }
          );
        case "widget":
          return /* @__PURE__ */ s(
            dd,
            {
              widget: e.widget,
              isStreaming: k,
              shouldAutoOpen: !e.fromServerApi && e.auto_open !== !1,
              itemId: e.id,
              fallbackText: e.copy_text,
              displayMode: e.display_mode,
              isLastMessage: u,
              isGreeting: e.isGreeting
            }
          );
        case "workflow":
          return /* @__PURE__ */ s(YA, { itemId: e.id, workflow: e.workflow });
        case "client_tool_call":
          return e.skipServerNotification ? null : /* @__PURE__ */ s(rS, { item: e });
        case "end_of_turn":
        case "hidden_context_item":
        case "task":
          return null;
        default:
          return B("MessageBubble", "Unknown item type:", e), null;
      }
    }, ne = ud(e), $ = iS(C, F), ie = !F, z = !C && !g && !k, K = e.type !== "workflow", ae = e.showFeedbackIcon !== !1, X = ca(e) && e.executionMode === "live_agent", ce = ie && z && K && ae && !X && !r, re = te(de.container, {
      [de.end]: F,
      [de.start]: !F,
      [`messageType-${e.type}`]: !0
    }), De = F && Xe(e) ? e.quoted_text?.trim() ?? "" : "", Me = !l && m && De.length > 0, Fe = te(de.bubble, {
      [de.bubbleUser]: F,
      [de.bubbleAgent]: !F,
      [de.bubbleSending]: C,
      [de.bubbleFullWidth]: (ne || Da(e)) && !F
    });
    let we = null;
    g && a && (we = /* @__PURE__ */ s("span", { className: de.failedText, "data-testid": "message-failed-text", children: c("Failed to send") }));
    const _e = new Date(e.createdAt || Date.now());
    let Te = null;
    we && (Te = /* @__PURE__ */ s("div", { className: de.footer, children: [
      /* @__PURE__ */ s("span", { children: _e.toLocaleTimeString() }),
      we
    ] }));
    const Ke = Da(e), $e = Ke && e.is_pinnable, oa = ca(e) && !e.content?.some(
      (Be) => Be.type === "output_text" && !!Be.text?.trim()
    ), qe = te(de.messageControlsWrapper, {
      [de.alwaysVisible]: t || $e || h
    });
    Ae("[MessageBubble]", "Rendering item", { id: e.id, type: e.type, bubbleTestId: $ });
    let Ta = null;
    ie && !k && m && (Ta = /* @__PURE__ */ s(Kk, { containerRef: W }));
    const Oa = F && !C && !g && I && R.length > 0;
    let sa = null;
    return Oa && (sa = /* @__PURE__ */ s(Pe, { children: [
      /* @__PURE__ */ s(
        he,
        {
          ref: f,
          action: oe.SavePrompt,
          onClick: y,
          className: de.bookmarkButton
        }
      ),
      /* @__PURE__ */ s(
        wk,
        {
          open: b,
          promptText: R,
          triggerRef: f,
          onSave: x,
          onClose: T
        }
      ),
      /* @__PURE__ */ s(
        Ck,
        {
          isVisible: D,
          onDismiss: w,
          onView: A
        }
      )
    ] })), /* @__PURE__ */ s(Pe, { children: [
      /* @__PURE__ */ s("div", { className: re, role: "article", ref: d, children: /* @__PURE__ */ s(cd, { boundMetadata: { itemId: e.id }, contentRef: W, children: [
        /* @__PURE__ */ s(aS, { show: Me, text: De, children: /* @__PURE__ */ s("div", { className: Fe, "data-testid": $, children: [
          /* @__PURE__ */ s("div", { className: de.contentWrapper, children: [
            /* @__PURE__ */ s("div", { className: de.content, ref: W, children: [
              V(),
              ce && /* @__PURE__ */ s("div", { className: `text-base-content ${qe}`, children: /* @__PURE__ */ s(
                zA,
                {
                  onCopy: J,
                  onDownload: H,
                  threadItem: {
                    threadId: e.threadId,
                    threadItemId: e.id,
                    mosaicLlmInvocationId: e.mosaicLlmInvocationId
                  },
                  annotations: P,
                  hasSources: O,
                  onSourcesClick: U,
                  isSourcesPanelActive: j,
                  isPinnable: n && $e,
                  toolContext: Ke ? e.tool_context : void 0,
                  widget: Ke ? e.widget : void 0,
                  hideCopyDownload: oa,
                  contentRef: W,
                  utterance: i
                }
              ) })
            ] }),
            /* @__PURE__ */ s("div", { className: de.iconWrapper, children: /* @__PURE__ */ s(
              XA,
              {
                isSending: C,
                isFailed: g,
                onRetry: g && a ? () => a(e) : void 0
              }
            ) })
          ] }),
          Te
        ] }) }),
        sa,
        Ta
      ] }) }),
      e.isSkippable === !0 && /* @__PURE__ */ s(UA, { threadId: e.threadId, itemId: e.id })
    ] });
  }
), sS = Wa(oS), lS = "_messageList_2ijjg_26", uS = "_innerWrapper_2ijjg_46", cS = "_empty_2ijjg_50", dS = "_hasMessages_2ijjg_63", hS = "_isGreeting_2ijjg_72", mS = "_omni_2ijjg_79", pS = "_narrow_2ijjg_86", FS = "_dimmed_2ijjg_90", gS = "_mobile_2ijjg_94", yS = "_side_2ijjg_102", fS = "_messagesContainer_2ijjg_110", bS = "_messageWrapper_2ijjg_116", CS = "_isNew_2ijjg_119", vS = "_priorTurn_2ijjg_123", kS = "_optimizeOffscreen_2ijjg_130", AS = "_lastUserMessageWrapper_2ijjg_135", SS = "_historyLoading_2ijjg_140", wS = "_historyLoadingSpinner_2ijjg_148", ES = "_emptyState_2ijjg_155", DS = "_statusWithAnimation_2ijjg_160", BS = "_typingIndicator_2ijjg_166", TS = "_srOnly_2ijjg_171", MS = "_typingDot_2ijjg_180", be = {
  messageList: lS,
  innerWrapper: uS,
  empty: cS,
  hasMessages: dS,
  isGreeting: hS,
  omni: mS,
  narrow: pS,
  dimmed: FS,
  mobile: gS,
  side: yS,
  messagesContainer: fS,
  messageWrapper: bS,
  isNew: CS,
  priorTurn: vS,
  optimizeOffscreen: kS,
  lastUserMessageWrapper: AS,
  historyLoading: SS,
  historyLoadingSpinner: wS,
  emptyState: ES,
  statusWithAnimation: DS,
  typingIndicator: BS,
  srOnly: TS,
  typingDot: MS
}, RS = ({ statusMessage: e, isStreaming: a = !1 }) => e ? /* @__PURE__ */ s("div", { className: gt.container, children: /* @__PURE__ */ s("div", { className: gt.toggleRow, children: /* @__PURE__ */ s(
  "div",
  {
    className: te(gt.toggleTextWrapper, {
      [gt.streaming]: a,
      [gt.idle]: !a
    }),
    children: /* @__PURE__ */ s("span", { className: gt.toggleTextStatic, children: e.title || e.text })
  }
) }) }) : null, Br = Wa(RS), IS = xr(() => import("./LottieAnimation-iMBMbKbI.js")), PS = () => import("./shimmer-sparkle-Bvd19Jb9.js"), xo = 10, fl = (e) => {
  if (!Xe(e))
    return "";
  let a = "";
  for (const t of e.content)
    t.type === "input_text" ? a += (t.text ?? "") + `
` : t.type === "input_tag" && (a += t.text + `
`);
  return a.trim();
}, LS = (e) => {
  if (!Xe(e))
    return !1;
  const a = e.content.some(
    (n) => (n.type === "input_text" || n.type === "input_tag") && !!n.text?.trim()
  ), t = e.attachments && e.attachments.length > 0;
  return !a && !t;
}, _S = (e, a) => {
  for (let t = a - 1; t >= 0; t--)
    if (Xe(e[t]))
      return fl(e[t]);
}, NS = (e, a) => {
  for (let t = a - 1; t >= 0; t--) {
    const n = e[t];
    if (Da(n))
      return;
    if (ca(n))
      return Ss(n);
    if (Xe(n))
      return;
  }
}, xS = (e, a) => {
  for (let t = a - 1; t >= 0; t--) {
    const n = e[t];
    if (ca(n))
      return n.content.some((r) => r.metadata?.maskInput === !0);
  }
  return !1;
}, HS = Wa(
  ({ item: e, statusMessageByThreadItem: a, isAgentResponding: t }) => {
    const n = a[e.id] || null;
    return n ? /* @__PURE__ */ s(Br, { statusMessage: n, isStreaming: t }) : null;
  }
), WS = ({
  isNarrowMainContent: e = !1,
  onScrollDirectionChange: a
}) => {
  const { t } = le(), { state: n } = xa(), { isMobileExperience: r } = Ba(), i = n.mode, o = n.enablePinnable, l = n.readOnly, u = He(), d = N(Mr), c = N(gd), h = N(In), m = N(os), p = N(Es), F = v(null), g = v(null), C = v(null), E = d.filter(
    (H) => Rn(H) && !LS(H) && !(yd(H) && H.skipServerNotification)
  ), { id: k, index: I } = xi(
    E,
    Xe
  ), { id: f } = xi(
    E,
    (H) => ca(H) || Da(H)
  ), b = N(Ha), S = N(fd), { spacerMinHeight: D, isScrollReady: L } = rf({
    messagesContainerRef: F,
    lastUserMessageRef: g,
    lastMessageRef: C,
    items: d,
    lastUserMessageId: k,
    threadId: b,
    isAgentResponding: h,
    scrollToTopOnOpen: S,
    onScrollDirectionChange: a
  }), R = E.length >= xo;
  uf(F, E.length, R);
  const { isLoadingHistory: y, hasMoreItems: T } = hk({
    messagesContainerRef: F,
    threadId: b,
    visibleItemCount: E.length,
    isScrollReady: L
  });
  bd() >= va.VERBOSE && Ae("[MessageList]", "Rendering", {
    threadId: b,
    totalItems: d.length,
    visibleItemCount: E.length,
    isAgentResponding: h,
    lastUserMessageId: k,
    lastAgentMessageId: f,
    isScrollReady: L,
    spacerMinHeight: D,
    isLoadingHistory: y,
    hasMoreItems: T,
    isOffscreenOptimized: R,
    items: E.map((H) => ({
      id: H.id,
      type: H.type,
      clientStatus: H.clientStatus,
      isGreeting: H.isGreeting,
      widgetType: Da(H) ? H.widget.type : void 0,
      isPinnable: Da(H) ? H.is_pinnable : void 0
    }))
  });
  const x = v(d.length), w = M(
    (H) => {
      if (H.clientStatus !== "failed" || !Xe(H))
        return;
      const V = fl(H);
      V && (u(Cd(H.id)), u(ds({ messageContent: V })));
    },
    [u]
  ), A = E.length === 0, W = E.length === 1 && E[0].isGreeting === !0 && !h;
  let P = null;
  A && h && (P = Object.values(c)[0] ?? null);
  let O = null;
  if (A) {
    let H = null;
    P ? H = /* @__PURE__ */ s(
      Br,
      {
        statusMessage: P,
        isStreaming: h
      }
    ) : p && (H = /* @__PURE__ */ s(hl, { isReadyForInput: n.isReadyForInput })), O = /* @__PURE__ */ s(
      "div",
      {
        className: be.emptyState,
        "data-testid": p ? "message-list-populating" : "message-list-empty",
        children: H
      }
    );
  }
  const U = te(be.messageList, {
    [be.omni]: ea(i),
    [be.side]: Na(i),
    [be.mobile]: r,
    [be.hasMessages]: !A,
    [be.isGreeting]: W,
    [be.empty]: A,
    [be.narrow]: e,
    [be.dimmed]: n.isSuggestionsVisible
  }), j = E.map((H, V) => {
    const ne = V >= x.current, $ = H.id === k, ie = H.id === f, z = V <= I, K = te(be.messageWrapper, {
      [be.isNew]: ne,
      [be.lastUserMessageWrapper]: $,
      [be.priorTurn]: z
    }), ae = V === E.length - 1;
    let X;
    ae && (X = {
      minHeight: D
    });
    let ce;
    $ ? ce = g : ae && (ce = C);
    const re = ca(H) ? _S(E, V) : void 0, De = Da(H) ? NS(E, V) : void 0;
    let Me;
    Xe(H) && (Me = xS(E, V));
    const Fe = ae && m && h, we = Fe ? /* @__PURE__ */ s("div", { "data-testid": "typing-indicator-stopping", children: [
      /* @__PURE__ */ s("span", { className: be.srOnly, children: t("Stopping") }),
      /* @__PURE__ */ s(
        Br,
        {
          statusMessage: {
            id: "stopping",
            text: t("Stopping..."),
            timestamp: ""
          },
          isStreaming: !0
        }
      )
    ] }) : /* @__PURE__ */ s(
      HS,
      {
        item: H,
        statusMessageByThreadItem: c,
        isAgentResponding: h
      }
    ), Le = ae && h && !Fe && Xe(H), _e = !!c[H.id];
    let Te = null;
    Le && (Te = /* @__PURE__ */ s("div", { className: be.typingIndicator, "data-testid": "typing-indicator", children: [
      /* @__PURE__ */ s("span", { className: be.srOnly, children: t("Agent is responding") }),
      /* @__PURE__ */ s(Or, { fallback: null, children: /* @__PURE__ */ s(
        IS,
        {
          src: PS,
          className: be.typingDot,
          "aria-hidden": "true"
        }
      ) })
    ] }));
    let Ke = null;
    return Le && _e && (Ke = /* @__PURE__ */ s("div", { className: be.statusWithAnimation, children: [
      Te,
      we
    ] })), /* @__PURE__ */ s(
      "div",
      {
        className: K,
        style: X,
        "data-testid": `message-wrapper-${H?.id || ""}`,
        children: [
          /* @__PURE__ */ s(
            sS,
            {
              ref: ce,
              item: H,
              onRetry: w,
              isLastAgentMessage: ie,
              enablePinnable: o,
              readOnly: l,
              utterance: re,
              precedingAssistantText: De,
              masked: Me,
              isLastMessage: ae
            }
          ),
          Ke || we,
          !_e && Te
        ]
      },
      H.optimisticKey || H.id
    );
  });
  let J = null;
  return (y || T) && (J = /* @__PURE__ */ s("div", { className: be.historyLoading, "data-testid": "history-loading-indicator", children: y && /* @__PURE__ */ s(Pe, { children: [
    /* @__PURE__ */ s(Kr, { className: be.historyLoadingSpinner, "aria-hidden": "true" }),
    /* @__PURE__ */ s("span", { className: be.srOnly, children: t("Loading older messages") })
  ] }) })), /* @__PURE__ */ s(
    "div",
    {
      className: U,
      ref: F,
      "data-testid": "message-list",
      role: "log",
      "aria-label": t("Chat messages"),
      "aria-busy": y,
      children: /* @__PURE__ */ s("div", { className: be.innerWrapper, children: O || /* @__PURE__ */ s(
        "div",
        {
          className: te(be.messagesContainer, {
            [be.optimizeOffscreen]: E.length >= xo
          }),
          "data-testid": "message-scroll-container",
          children: [
            J,
            j
          ]
        }
      ) })
    }
  );
}, OS = "_newChatContainer_q2m95_1", GS = "_newChat_q2m95_1", Ho = {
  newChatContainer: OS,
  newChat: GS
}, KS = () => {
  const { t: e } = le(), a = He(), { actions: t } = xa(), n = async () => {
    const r = await a(tt());
    r && typeof r == "object" && "meta" in r && typeof r.meta == "object" && r.meta !== null && "requestStatus" in r.meta && r.meta.requestStatus === "fulfilled" && t.focusInput();
  };
  return /* @__PURE__ */ s("div", { className: Ho.newChatContainer, children: /* @__PURE__ */ s(
    he,
    {
      action: oe.NewChat,
      className: Ho.newChat,
      label: e("Start a new chat"),
      onClick: n
    }
  ) });
};
async function bl(e) {
  if (e.trackNewConversationClicked(), e.isNewChatDisabled) {
    e.focusInput();
    return;
  }
  e.dispatch(vd()), await e.dispatch(tt()) && (e.closeInteractiveView(), e.onAfterCreate?.(), e.focusInput());
}
const JS = "_chatHistory_8k1q2_1", zS = "_list_8k1q2_6", VS = "_srOnly_8k1q2_24", $S = "_historyAction_8k1q2_32", qS = "_sectionHeader_8k1q2_39", US = "_status_8k1q2_47", Sa = {
  chatHistory: JS,
  list: zS,
  srOnly: VS,
  historyAction: $S,
  sectionHeader: qS,
  status: US
}, Cl = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 12", ...e }, /* @__PURE__ */ se("path", { fill: "currentColor", fillRule: "evenodd", d: "M6 2a3 3 0 0 0-2.87 2.14c.51.23.87.76.87 1.36v1a1.5 1.5 0 1 1-3 0v-1c0-.7.47-1.28 1.11-1.45a4 4 0 0 1 7.78 0A1.5 1.5 0 0 1 11 5.5v1a1.5 1.5 0 0 1-1.01 1.42c-.07.9-.34 1.64-.89 2.18-.62.63-1.52.9-2.6.9H6a1 1 0 1 1 1-1.03q.96-.1 1.4-.57.48-.47.58-1.5A1.5 1.5 0 0 1 8 6.5v-1c0-.6.36-1.13.87-1.36A3 3 0 0 0 6 2m3 3.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm-7 0a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0z", clipRule: "evenodd" })), jS = "_item_owmhn_1", YS = "_mainAction_owmhn_8", ZS = "_unread_owmhn_12", QS = "_withDelete_owmhn_28", XS = "_active_owmhn_31", ew = "_liveAgentBadge_owmhn_47", Ya = {
  item: jS,
  mainAction: YS,
  unread: ZS,
  withDelete: QS,
  active: XS,
  delete: "_delete_owmhn_34",
  liveAgentBadge: ew
}, Xa = (e) => `chat-list-section-${e}`, pr = ({
  conversation: e,
  isActive: a,
  onClick: t,
  onDelete: n,
  showDelete: r = !1,
  section: i
}) => {
  const { t: o } = le(), l = () => e.title ? e.title : e.backupTitle ? ws(e.backupTitle).replace(/\s+/g, " ").trim() : o("Start a chat..."), u = (E) => {
    E?.stopPropagation(), window.confirm(o("Delete this chat?")) && n();
  }, d = l(), c = e.liveAgentActive ? o("Live Agent") : null, h = e.hasUnreadMessages ? /* @__PURE__ */ s("div", { className: Ya.unread }) : null, m = c ? /* @__PURE__ */ s("span", { className: Ya.liveAgentBadge, children: [
    /* @__PURE__ */ s(Cl, { className: "icon", "aria-hidden": "true" }),
    /* @__PURE__ */ s("span", { children: c })
  ] }) : null, p = c ? `${d}, ${c}` : void 0, F = te(Ya.mainAction, {
    [Ya.withDelete]: r,
    [Ya.active]: a
  }), g = {
    "aria-describedby": Xa(i)
  }, C = r ? /* @__PURE__ */ s(
    he,
    {
      action: oe.DeleteChat,
      className: Ya.delete,
      onClick: u,
      testId: `delete-conversation-button-${e.id}`
    }
  ) : null;
  return /* @__PURE__ */ s("li", { "data-testid": `conversation-item-${i}-${e.id}`, children: /* @__PURE__ */ s("div", { className: Ya.item, "data-nav-item": !0, children: [
    /* @__PURE__ */ s(
      he,
      {
        action: oe.ChatHistoryItem,
        onClick: t,
        className: F,
        isChecked: a,
        isRemovable: !1,
        label: d,
        ariaLabel: p,
        triggerProps: g,
        children: [
          h,
          m
        ]
      }
    ),
    C
  ] }) });
}, aw = "[data-nav-item] > button:first-child:not(:disabled)", tw = ({ children: e, itemHint: a }) => {
  const t = v(null), [n, r] = Y(0), i = () => t.current?.querySelectorAll(aw);
  it(() => {
    r(i()?.length ?? 0);
  }, [a]);
  const { selectedIndex: o, navigateOnKeyDown: l } = Ln({
    itemCount: n
  });
  return _(() => {
    i()?.[o]?.focus();
  }, [o]), // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- keyboard navigation for list items
  /* @__PURE__ */ s(
    "section",
    {
      ref: t,
      className: Sa.list,
      "data-testid": "conversation-list",
      onKeyDown: l,
      children: e
    }
  );
}, vl = ({ onNewChat: e, onSelectConversation: a }) => {
  const { t } = le(), n = He(), { actions: r } = xa(), { closeInteractiveView: i } = Dt(), o = ot(), { telemetryService: l } = da(), u = N((w) => w.conversations.list), d = N((w) => w.conversations.isInitialLoading), c = N(Ha), h = N(Ds), m = N(Bs), p = N(kd), F = t(h ? "Creating a new chat..." : "New Chat"), g = async () => {
    await bl({
      isNewChatDisabled: m,
      dispatch: n,
      trackNewConversationClicked: () => {
        l.track("newConversationClicked");
      },
      closeInteractiveView: i,
      focusInput: r.focusInput,
      onAfterCreate: () => e?.()
    });
  }, C = async (w) => {
    if (o("conversation-list:item:clicked", { conversationId: w }), w === c) {
      a?.();
      return;
    }
    await n(An(w)) && (i(), a?.(), r.focusInput());
  }, E = (w) => {
    n(Ad(w));
  }, k = /* @__PURE__ */ s("div", { className: Sa.historyAction, "data-nav-item": !0, children: /* @__PURE__ */ s(
    he,
    {
      action: oe.NewChat,
      label: F,
      size: ts.Medium,
      onClick: g,
      isBusy: h,
      disabled: m
    }
  ) });
  let I = null;
  d ? I = /* @__PURE__ */ s("div", { className: Sa.status, "data-testid": "conversation-list-loading", children: /* @__PURE__ */ s("p", { children: t("Loading chats...") }) }) : u.length === 0 && (I = /* @__PURE__ */ s("div", { className: Sa.status, "data-testid": "conversation-list-empty", children: /* @__PURE__ */ s("p", { children: t("No chat yet") }) }));
  const f = (w) => p ? w.documentMetadata?.documentSysId === p : !1, b = !d && u.length > 0, S = b && p ? u.filter(f) : [], D = b ? u.filter(
    (w) => w.status.type === "active" || w.status.type === "closing"
  ) : [], L = b ? u.filter((w) => w.status.type === "closed") : [], R = c !== null && S.some((w) => w.id === c), y = S.length > 0 ? /* @__PURE__ */ s("section", { "data-testid": "section-this-record", children: [
    /* @__PURE__ */ s("h3", { id: Xa("this-record"), className: Sa.sectionHeader, children: t("This record") }),
    /* @__PURE__ */ s("ul", { "aria-labelledby": Xa("this-record"), children: S.map((w) => /* @__PURE__ */ s(
      pr,
      {
        conversation: w,
        isActive: w.id === c,
        onClick: () => C(w.id),
        onDelete: () => E(w.id),
        showDelete: w.status.type === "closed",
        section: "this-record"
      },
      `this-record-${w.id}`
    )) })
  ] }) : null, T = D.length > 0 ? /* @__PURE__ */ s("section", { "data-testid": "section-active", children: [
    /* @__PURE__ */ s("h3", { id: Xa("active"), className: Sa.sectionHeader, children: t("Active") }),
    /* @__PURE__ */ s("ul", { "aria-labelledby": Xa("active"), children: D.map((w) => /* @__PURE__ */ s(
      pr,
      {
        conversation: w,
        isActive: !R && w.id === c,
        onClick: () => C(w.id),
        onDelete: () => E(w.id),
        showDelete: !1,
        section: "active"
      },
      `active-${w.id}`
    )) })
  ] }) : null, x = L.length > 0 ? /* @__PURE__ */ s("section", { "data-testid": "section-closed", children: [
    /* @__PURE__ */ s("h3", { id: Xa("closed"), className: Sa.sectionHeader, children: t("Closed") }),
    /* @__PURE__ */ s("ul", { "aria-labelledby": Xa("closed"), children: L.map((w) => /* @__PURE__ */ s(
      pr,
      {
        conversation: w,
        isActive: !R && w.id === c,
        onClick: () => C(w.id),
        onDelete: () => E(w.id),
        showDelete: !0,
        section: "closed"
      },
      `closed-${w.id}`
    )) })
  ] }) : null;
  return /* @__PURE__ */ s("div", { className: Sa.chatHistory, children: [
    /* @__PURE__ */ s(tw, { itemHint: u.length, children: [
      /* @__PURE__ */ s("h2", { className: Sa.srOnly, children: t("Chat History") }),
      k,
      y,
      T,
      x
    ] }),
    I
  ] });
}, nw = "_backdrop_wm3sf_1", rw = "_hidden_wm3sf_9", iw = "_panel_wm3sf_13", ow = "_loadError_wm3sf_20", pn = {
  backdrop: nw,
  hidden: rw,
  panel: iw,
  loadError: ow
}, sw = "sys_now_assist_deployment";
function lw(e) {
  return e instanceof CustomEvent && e.detail !== null && typeof e.detail == "object" && "resource" in e.detail;
}
function uw({
  open: e,
  clientId: a,
  onClose: t,
  onResourceSelected: n,
  hideRecommended: r = !1
}) {
  const i = v(null), o = v(null), l = Ie(t), u = Ie(a), d = Ie(r), c = rt(), [h, m] = Y(!1), { t: p } = le(), F = v(void 0);
  _(() => {
    const k = F.current;
    if (F.current = e, e) {
      Sd(i.current);
      return;
    }
    k === !0 && c.focusTarget("prompt-library-trigger");
  }, [e, c]);
  const g = Ie(n);
  _(() => {
    const k = i.current;
    if (!k)
      return;
    let I = null, f = !1, b = null, S = null;
    return import("./index-P7TGhTX3.js").then(() => {
      f || (I = document.createElement("pm-library"), I.style.height = "100%", b = () => {
        l.current();
      }, S = (D) => {
        if (!lw(D))
          return;
        const { resource: L, tableType: R } = D.detail;
        g.current && g.current(L, R);
      }, I.addEventListener("pm-library-back", b), I.addEventListener("pm-resource-selected", S), u.current && I.setAttribute("target-id", u.current), I.setAttribute("target-table", sw), d.current && I.setAttribute("hide-recommended", ""), k.appendChild(I), o.current = I);
    }).catch((D) => {
      fe("PromptLibrary", "Failed to load prompt management library", D), f || m(!0);
    }), () => {
      f = !0, I && (b && I.removeEventListener("pm-library-back", b), S && I.removeEventListener("pm-resource-selected", S), o.current = null, k.contains(I) && k.removeChild(I));
    };
  }, [l, g]), _(() => {
    o.current && (a ? o.current.setAttribute("target-id", a) : o.current.removeAttribute("target-id"));
  }, [a]), _(() => {
    o.current && (r ? o.current.setAttribute("hide-recommended", "") : o.current.removeAttribute("hide-recommended"));
  }, [r]);
  const C = M(
    (k) => {
      k.target === k.currentTarget && l.current();
    },
    [l]
  ), E = h ? /* @__PURE__ */ s("p", { className: pn.loadError, children: p("Something went wrong. Please try again.") }) : null;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- backdrop dismiss pattern, keyboard handled by pm-library's Escape key
    /* @__PURE__ */ s(
      "div",
      {
        onClick: C,
        "data-testid": "prompt-library-overlay",
        className: te(pn.backdrop, { [pn.hidden]: !e }),
        children: /* @__PURE__ */ s("div", { ref: i, className: pn.panel, children: E })
      }
    )
  );
}
function Wo({
  topics: e,
  onTopicSelect: a,
  mode: t = "primary",
  isVisible: n = !0,
  isNarrowMainContent: r = !1,
  isPromptLibraryOpen: i,
  maxVisibleTopics: o,
  isMobile: l
}) {
  const { t: u } = le(), d = He(), c = N(hs), h = N(ms), m = N(In), p = !c || h, F = N(ps), g = rt(), { triggerProps: C } = Lr({
    isOpen: i,
    role: "dialog"
  }), E = M(() => {
    g.setIsPromptLibraryOpen(!1);
  }, [g]), k = M(
    (w, A) => {
      if (g.setIsPromptLibraryOpen(!1), w.type === "topic") {
        const W = w.prompt ?? "", P = w.sys_id ?? "";
        d(yr({ content: W, attachments: [] })), d(
          fr({ uniqueId: P, label: W, trueTable: A ?? "sys_cs_topic" })
        );
      } else
        g.setInputBarValue(w.prompt ?? ""), g.focusInput();
    },
    [d, g]
  ), I = M(() => {
    g.setIsPromptLibraryOpen(!0);
  }, [g]), f = v(null);
  Wr("prompt-library-trigger", f);
  const b = M(
    (w) => {
      m || (d(
        yr({
          content: w.label,
          attachments: []
        })
      ), d(
        fr({
          uniqueId: w.id,
          label: w.label,
          trueTable: w.type
        })
      ), a?.(w));
    },
    [d, m, a]
  ), S = e.slice(0, o ?? 6), D = o === void 0, L = e.length === 0, R = _a(t) && S.length > 0, y = te(We.promotedTopics, {
    [We.hasMessages]: !p,
    [We.omni]: ea(t),
    [We.mobile]: l,
    [We.visible]: n && p,
    [We.singleRow]: R,
    [We.aboveInput]: r || Na(t) || ea(t)
  }), T = te(We.viewMoreButton, {
    [We.removed]: R
  }), x = D ? /* @__PURE__ */ s(
    he,
    {
      ref: f,
      action: oe.ViewPromptLibrary,
      className: T,
      label: u("View prompt library"),
      onClick: I,
      triggerProps: C
    }
  ) : null;
  return /* @__PURE__ */ s(Pe, { children: [
    /* @__PURE__ */ s("div", { className: y, "data-testid": "prompt-library", children: [
      /* @__PURE__ */ s(
        "nav",
        {
          className: te(We.topicsWrapper, {
            [We.hideAll]: L
          }),
          "aria-label": u("Suggested topics"),
          children: S.map((w) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: te(We.topicButton, {
                [We.singleButton]: S.length === 1,
                [We.singleRow]: R
              }),
              disabled: m,
              onClick: () => b(w),
              "data-testid": `prompt-library-topic-${w.id}`,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: te(We.label, {
                    [We.singleRowLabel]: R
                  }),
                  children: w.label
                }
              )
            },
            w.id
          ))
        }
      ),
      x
    ] }),
    /* @__PURE__ */ s(
      uw,
      {
        open: i,
        clientId: F,
        onClose: E,
        onResourceSelected: k,
        hideRecommended: e.length === 0
      }
    )
  ] });
}
const cw = "_tooltipHoist_3cn36_1", dw = "_tooltip_3cn36_1", hw = "_visible_3cn36_24", mw = "_arrow_3cn36_39", fn = {
  tooltipHoist: cw,
  tooltip: dw,
  visible: hw,
  arrow: mw
}, pw = 0.75, Fw = 0.85, gw = 1.5;
function yw() {
  const e = Nr(wd), { state: a, containerRef: t } = e ?? {}, n = v(null);
  return _(() => {
    if (!n.current || !a)
      return;
    const { anchorRect: r } = a, i = t?.current?.getBoundingClientRect(), o = i?.left ?? 0, l = i?.top ?? 0;
    n.current.style.left = `${r.left - o}px`, n.current.style.top = `${r.top - l}px`, n.current.style.width = `${r.width}px`, n.current.style.height = `${r.height}px`;
  }, [a, t]), /* @__PURE__ */ s(Pe, { children: [
    /* @__PURE__ */ s(
      "div",
      {
        ref: n,
        className: fn.tooltipHoist,
        "data-testid": "top-tooltip-hoist",
        "aria-hidden": "true"
      }
    ),
    a && /* @__PURE__ */ s(fw, { state: a, hoistRef: n })
  ] });
}
function fw({ state: e, hoistRef: a }) {
  const t = v(null), [n, r] = Y({}), [i, o] = Y(!1), l = ye(
    () => [
      ys(tr(pw)),
      fs(),
      bs({ padding: tr(Fw) }),
      Ed({ element: t })
    ],
    []
  ), {
    refs: u,
    floatingStyles: d,
    middlewareData: c,
    placement: h
  } = gs({
    placement: e.placement,
    middleware: l,
    whileElementsMounted: Cs,
    elements: {
      reference: a.current
    }
  });
  _(() => {
    if (!c.arrow)
      return;
    const p = c.arrow, g = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    }[h.split("-")[0]] ?? "bottom", C = {};
    if (p?.x != null) {
      const E = u.floating.current?.offsetWidth ?? 0, k = tr(gw), I = k, f = E - k, b = Math.max(I, Math.min(p.x, f));
      C.left = `${b}px`;
    }
    p?.y != null && (C.top = `${p.y}px`), g && (C[g] = "-0.2rem"), r(C);
  }, [c.arrow, e.placement, u.floating, h]), _(() => {
    const p = u.floating.current;
    if (!p)
      return;
    p.offsetHeight;
    const F = requestAnimationFrame(() => {
      o(!0);
    });
    return () => {
      cancelAnimationFrame(F);
    };
  }, [u.floating]);
  const m = te(fn.tooltip, {
    [fn.visible]: i
  });
  return /* @__PURE__ */ s(
    "div",
    {
      ref: u.setFloating,
      className: m,
      style: d,
      role: "tooltip",
      "data-testid": "top-tooltip-floating",
      children: [
        e.content,
        /* @__PURE__ */ s(
          "div",
          {
            ref: t,
            className: fn.arrow,
            style: n,
            "data-testid": "top-tooltip-arrow"
          }
        )
      ]
    }
  );
}
function bw({
  enableAgentMessageActions: e,
  enableFilePreview: a,
  acceptedAttachmentTypes: t,
  children: n
}) {
  const r = N(Dd), i = N(Bd), o = N(ls), l = ye(
    () => ({
      isAgentMessageActionsEnabled: e ?? r,
      isFilePreviewEnabled: a ?? i,
      acceptedAttachmentTypes: t ?? o
    }),
    [
      e,
      r,
      a,
      i,
      t,
      o
    ]
  );
  return /* @__PURE__ */ s(Td.Provider, { value: l, children: n });
}
const Fn = "ServerActionExecutor", Cw = ({
  children: e
}) => {
  const a = v(/* @__PURE__ */ new Map()), t = M((o, l) => {
    a.current.set(o, l), B(Fn, `Registered executor for action: ${o}`);
  }, []), n = M((o) => {
    a.current.delete(o), B(Fn, `Unregistered executor for action: ${o}`);
  }, []), r = M(async (o, l) => {
    const u = a.current.get(o);
    return u ? (B(Fn, `Executing action: ${o}`, l), await u(l), !0) : (Ve(Fn, `No executor registered for action: ${o}`), !1);
  }, []), i = ye(
    () => ({ register: t, unregister: n, execute: r }),
    [t, n, r]
  );
  return /* @__PURE__ */ s(Md.Provider, { value: i, children: e });
};
function vw(e) {
  return e instanceof HTMLElement && "setSession" in e && typeof e.setSession == "function" && "invokeSkill" in e && typeof e.invokeSkill == "function" && "createConversation" in e && typeof e.createConversation == "function" && "refreshConversationList" in e && typeof e.refreshConversationList == "function" && "startVoiceInput" in e && typeof e.startVoiceInput == "function" && "_focusInputDeferred" in e && typeof e._focusInputDeferred == "function";
}
const Gt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map();
function kl(e, a, t) {
  const n = e.storeId;
  if (Gt.get(n))
    return Gt.delete(n), B("[App]", "Session already connected, preserving conversation (pending transition)"), !0;
  if (t?.preserveIfMidConversation) {
    const i = e.getState().session.phase;
    if (Ts(i) || _d(i))
      return B("[App]", "handleSharedChannelRemount: preserving, session is mid-conversation", {
        phase: i.phase
      }), !0;
  }
  if (t?.forceNewConversation === void 0)
    return B("[App]", "Session already connected, preserving conversation (same-page remount)"), !0;
  B("[App]", "handleSharedChannelRemount: clearing stale conversation", {
    store: n.description,
    forceNewConversation: t?.forceNewConversation
  });
  const r = et.get(n);
  return r && (B("[App]", "Aborting preserved session stream"), r.abort(), et.delete(n)), B("[App]", "handleSharedChannelRemount: disconnecting streams + transitioning to idle"), a(Rs()), a(Sn({ phase: "connected:idle" })), !1;
}
function kw(e, a) {
  return a(Rd(Id())), Hi !== void 0 ? a(yn(Hi)) : window.APP_CONFIG?.forceNewConversation === "true" ? a(yn(!0)) : a(yn(!1)), at(e.getState().session.phase) ? (kl(e, a, {
    forceNewConversation: e.getState().session.forceNewConversation
  }), null) : Tn ? (a(Sn({ phase: "connecting" })), a(
    Pd({
      sessionId: Ms("session"),
      instanceName: "mock-instance",
      userId: "mock-user",
      consumerAccountId: "mock-consumer-account",
      feedbackMetadata: {
        positive: {
          isEnabled: !0,
          questions: [
            "It answered my question",
            "It was easy to understand",
            "The tone felt right",
            "It was helpful"
          ],
          header: "What did you like?",
          messageKeys: [
            "feedback.positive.answered_question",
            "feedback.positive.easy_understand",
            "feedback.positive.tone_right",
            "feedback.positive.helpful"
          ]
        },
        negative: {
          isEnabled: !0,
          questions: [
            "Missed important details",
            "Included irrelevant details",
            "Mixed up who said what",
            "The tone was off"
          ],
          header: "Tell us more to help Now Assist improve",
          messageKeys: [
            "feedback.negative.missing_details",
            "feedback.negative.irrelevant_details",
            "feedback.negative.attribution_error",
            "feedback.negative.tone_off"
          ]
        }
      }
    })
  ), a(Sn({ phase: "connected:idle" })), B("[App]", "Mock session initialized, skipping real session fetch"), null) : a(Ld());
}
function Aw(e, a) {
  const { conversationId: t, forceNewConversation: n, newConversationContext: r, inputOnly: i } = a, o = He(), l = Et(), u = rt(), d = ot(), c = v(null), h = v(t);
  h.current = t;
  const m = v(n);
  m.current = n;
  const p = v(r);
  p.current = r;
  const F = v(i);
  F.current = i;
  const g = v(null);
  _(() => {
    g.current = wa(l.getState().session.phase);
    const C = () => {
      if (!c.current) {
        Gt.delete(l.storeId);
        return;
      }
      const f = l.getState().session.phase, b = wa(f), S = Ts(f);
      if (!g.current && (b || S)) {
        B(
          "[App]",
          "Keeping session stream alive (null → active or creating transition):",
          b ?? "<creating>"
        ), Gt.set(l.storeId, !0), et.set(l.storeId, c.current), c.current = null;
        return;
      }
      B("[App]", "Aborting previous session fetch"), Gt.delete(l.storeId), c.current.abort(), c.current = null;
      const D = et.get(l.storeId);
      D && (D.abort(), et.delete(l.storeId));
    };
    if (window.APP_CONFIG?.isDocker === "true" && !window.APP_CONFIG?.skipAutoSession || Tn) {
      const f = at(l.getState().session.phase);
      if (c.current = kw(l, o), g.current = wa(l.getState().session.phase), f && l.getState().session.forceNewConversation !== void 0) {
        const b = p.current ? Za(p.current) : nr();
        o(b);
      }
    }
    const k = e?.current?.getRootNode();
    if (!(k instanceof ShadowRoot))
      return C;
    const I = k.host;
    return vw(I) && (ka(I.setSession, (f) => {
      const b = Nd(f);
      if (!b.valid) {
        fe("[App] LBF Chat Client: Invalid payload received for setSession.", {
          errors: b.errors,
          payload: f
        });
        const y = b.errors.some(
          (T) => T.includes("authToken") && T.includes("required")
        );
        o(
          xd(
            y ? At(
              "Unable to authenticate. Please verify your session has the required Now Assist permissions and reload the page."
            ) : At("Something went wrong. Please reload the page to reconnect.")
          )
        );
        return;
      }
      const S = b.payload.session, D = {
        ...S,
        // Fall back to conversationId from the web component prop (e.g., ESC portal
        // sets conversation-id prop but may not include it in the setSession payload).
        // conversationId takes precedence over forceNewConversation when both are set.
        conversationId: S.conversationId ?? h.current,
        // If newConversationContext is provided via prop, implicitly force new conversation
        // so the context gets used (unless forceNewConversation was explicitly set)
        forceNewConversation: S.forceNewConversation ?? m.current ?? (p.current ? !0 : void 0),
        newConversationContext: S.newConversationContext ? {
          ...p.current,
          ...S.newConversationContext
        } : p.current
      };
      if (at(l.getState().session.phase)) {
        if (gr({ storeId: l.storeId, dispatch: o }), D.pageContext) {
          const P = D.pageContext;
          o(
            Wi({
              // Preserve sticky deployment-binding fields the navigation payload omits (deploymentDocumentId/Table); without them the server can't resolve the channel.
              ...l.getState().session.pageContext,
              ...P,
              // Record-identity must track the new page even when it has none (list/home/global), or a blanket merge would retain the previous record's sysId and keep "This record" stale.
              sysId: P.sysId,
              table: P.table
            })
          );
        }
        const y = D.conversationId, T = wa(l.getState().session.phase), x = y && y !== T ? y : void 0;
        if (B("[App]", "setSession: already connected, checking conversationId switch:", {
          currentPhase: l.getState().session.phase.phase,
          incomingConversationId: y ?? null,
          currentConversationId: T,
          willSwitch: !!x
        }), x && D.newConversationContext && o(Za(D.newConversationContext)), x && D.newConversationContext?.transferredContext && o(Hd(x)), x) {
          B(
            "[App]",
            "setSession: SWITCHING to new conversationId while connected (DEF0818488 fix)",
            { from: T, to: x }
          ), o(An(x)), g.current = x;
          return;
        }
        if (F.current && !D.conversationId && T && g.current === T) {
          B(
            "[App]",
            "setSession on inputOnly surface: clearing inherited conversation from prior surface",
            { inheritedConversationId: T }
          ), et.get(l.storeId)?.abort(), et.delete(l.storeId), o(Rs()), o(Sn({ phase: "connected:idle" })), g.current = null;
          return;
        }
        const w = D.pageContext?.sysId, A = Uo(l.getState())?.documentMetadata?.documentSysId;
        if (w && w !== A && (A || D.forceNewConversation === !0)) {
          B("[App]", "setSession: record context switch, creating new conversation", {
            from: A ?? "global",
            to: w
          }), o(
            D.newConversationContext ? Za(D.newConversationContext) : nr()
          ), o(tt()), g.current = null;
          return;
        }
        B(
          "[App]",
          "setSession: no conversationId switch needed, proceeding with shared channel remount"
        );
        const W = kl(l, o, {
          forceNewConversation: D.forceNewConversation,
          preserveIfMidConversation: !0
        });
        if (g.current = wa(l.getState().session.phase), D.forceNewConversation !== void 0) {
          const P = D.newConversationContext ? Za(D.newConversationContext) : nr();
          o(P);
        }
        D.forceNewConversation === !0 && !W && (B("[App]", "setSession: forceNewConversation is true, creating new conversation"), o(tt()));
        return;
      }
      C();
      const L = o(Wd(D));
      c.current = L;
      const R = D.conversationId;
      R && L.unwrap().then(() => {
        const y = wa(l.getState().session.phase);
        y !== R && (B(
          "[App]",
          "setSession: server returned different conversation, switching to requested",
          { activeId: y, requestedId: R }
        ), o(An(R)));
      }).catch(() => {
      });
    }), ka(I.invokeSkill, (f) => {
      B("[App]", "invokeSkill called:", f), o(
        Za({ skillId: f.skillId, skillParams: f.skillParams })
      ), o(tt());
    }), ka(I.createConversation, (f) => {
      B("[App]", "createConversation called:", f), f?.context && o(Za(f.context)), o(tt());
    }), ka(I.setClientContext, (f) => {
      B("[App]", "setClientContext called:", f), o(Od(f));
    }), ka(I.setPageContext, (f) => {
      B("[App]", "setPageContext called:", f), o(Wi(f));
    }), ka(I._focusInputDeferred, () => {
      u.focusInput();
    }), ka(I.setInput, (f) => {
      u.setInputBarValue(f);
    }), ka(I.refreshConversationList, () => {
      B("[App]", "refreshConversationList called"), gr({ storeId: l.storeId, dispatch: o });
    }), d("bootstrap:end", void 0)), C;
  }, [o, e, d, u, l]);
}
const Sw = "_appContentWrapper_17yx4_1", ww = "_sheet_17yx4_10", Ew = "_chatArea_17yx4_14", Dw = "_sessionErrorContainer_17yx4_23", Bw = "_sessionError_17yx4_23", Tw = "_container_17yx4_29", Mw = "_mainContent_17yx4_39", Rw = "_hero_17yx4_53", Iw = "_heroContainer_17yx4_59", Pw = "_mobile_17yx4_63", Lw = "_omni_17yx4_69", _w = "_side_17yx4_69", Nw = "_handle_17yx4_91", xw = "_keyboard_17yx4_107", xe = {
  appContentWrapper: Sw,
  sheet: ww,
  chatArea: Ew,
  sessionErrorContainer: Dw,
  sessionError: Bw,
  container: Tw,
  mainContent: Mw,
  hero: Rw,
  heroContainer: Iw,
  mobile: Pw,
  omni: Lw,
  side: _w,
  handle: Nw,
  keyboard: xw
}, Hw = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 18 18", ...e }, /* @__PURE__ */ se("path", { fill: "currentColor", d: "M18 9a1.3 1.3 0 0 1-.84 1.2l-5.1 1.86-1.86 5.1a1.29 1.29 0 0 1-2.4 0l-1.86-5.1-5.1-1.85a1.29 1.29 0 0 1 0-2.42l5.1-1.85L7.79.84a1.29 1.29 0 0 1 2.41 0l1.86 5.1 5.1 1.85A1.3 1.3 0 0 1 18 9" })), Ww = "_bar_141ak_10", Ow = {
  bar: Ww
}, Gw = () => N(Kt) !== "connecting" ? null : /* @__PURE__ */ s("div", { className: Ow.bar }), Kw = "_agentProfile_1hj57_1", Jw = "_agentName_1hj57_9", Oo = {
  agentProfile: Kw,
  agentName: Jw
}, zw = (e) => {
  const a = e.findLast(
    (n) => ca(n) && Kd(n)
  );
  if (!a)
    return;
  const t = a.content[0].metadata.senderDetails;
  if (t.sysId && t.sysId !== "system")
    return t;
}, Vw = () => {
  const { t: e } = le(), a = Gd((o) => Mr(o)), t = zw(a), n = t?.avatarPath, r = t?.name || t?.displayName || e("Live Agent"), i = t?.initials || "LA";
  return /* @__PURE__ */ s("div", { "data-testid": "live-agent-profile", className: Oo.agentProfile, children: [
    /* @__PURE__ */ s(Fl, { url: n, name: r, initials: i, isOnline: !0 }),
    /* @__PURE__ */ s("span", { className: Oo.agentName, "data-testid": "agent-name", children: r })
  ] });
}, $w = "_cancelButton_1u99p_1", qw = "_icon_1u99p_38", Go = {
  cancelButton: $w,
  icon: qw
}, Uw = () => {
  const { t: e } = le(), a = He(), t = N(Ha), n = () => {
    t && a(Jd(t));
  };
  return /* @__PURE__ */ s("button", { className: Go.cancelButton, type: "button", onClick: n, children: [
    /* @__PURE__ */ s(pl, { className: Go.icon }),
    /* @__PURE__ */ s("span", { children: e("End Live Chat") })
  ] });
}, jw = "_header_w6sgh_1", Yw = "_headerContent_w6sgh_13", Zw = "_reduced_w6sgh_21", Qw = "_headerButton_w6sgh_24", Xw = "_conversationTitle_w6sgh_27", eE = "_omni_w6sgh_30", aE = "_mobile_w6sgh_36", tE = "_side_w6sgh_44", nE = "_headerLeft_w6sgh_56", rE = "_nowAssistLabel_w6sgh_80", iE = "_logoContainer_w6sgh_84", oE = "_logoImage_w6sgh_99", sE = "_closedPill_w6sgh_107", lE = "_notificationBadge_w6sgh_121", uE = "_headerRight_w6sgh_132", cE = "_supportContainer_w6sgh_141", Se = {
  header: jw,
  headerContent: Yw,
  reduced: Zw,
  headerButton: Qw,
  conversationTitle: Xw,
  omni: eE,
  mobile: aE,
  side: tE,
  headerLeft: nE,
  nowAssistLabel: rE,
  logoContainer: iE,
  logoImage: oE,
  closedPill: sE,
  notificationBadge: lE,
  headerRight: uE,
  supportContainer: cE
}, Al = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 15 15", ...e }, /* @__PURE__ */ se("path", { fill: "currentColor", d: "M8 4.5a.5.5 0 0 0-1 0v4q0 .26.22.42l3 2a.5.5 0 0 0 .56-.84L8 8.23z" }), /* @__PURE__ */ se("path", { fill: "currentColor", fillRule: "evenodd", d: "M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M1 7.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0", clipRule: "evenodd" })), dE = "_emptyText_1gkdx_1", hE = "_pageList_1gkdx_9", mE = "_pageItem_1gkdx_17", pE = "_pageTitle_1gkdx_56", gn = {
  emptyText: dE,
  pageList: hE,
  pageItem: mE,
  pageTitle: pE
};
function Sl(e) {
  const a = e.widgetId;
  return typeof a == "string" && a.length > 0;
}
const FE = /* @__PURE__ */ new Set(["attachment", "file"]);
function wl(e) {
  return typeof e.type == "string" && FE.has(e.type);
}
function gE(e) {
  if (wl(e))
    return At("Attachment");
  if (e.entityType) {
    const a = Vd(e.entityType);
    if (a)
      return a;
  }
  return Sl(e) ? At("AI Agent") : At("Page");
}
const yE = {
  catalog: br,
  catalog_item: br,
  web_search: Gr,
  people: vs
};
function fE(e) {
  if (wl(e))
    return /* @__PURE__ */ s(kn, { "aria-hidden": "true" });
  if (e.entityType) {
    const a = yE[e.entityType] ?? kn;
    return /* @__PURE__ */ s(a, { "aria-hidden": "true" });
  }
  return Sl(e) ? /* @__PURE__ */ s(Gr, { "aria-hidden": "true" }) : /* @__PURE__ */ s(Al, { "aria-hidden": "true" });
}
const bE = ({
  onClose: e
}) => {
  const { t: a } = le(), { showInteractiveView: t } = Dt(), n = N(zd), r = M(
    (h) => {
      t({
        type: h.type ?? "iframe",
        conversationId: h.conversationId,
        widgetData: h,
        widgetId: h.id,
        preventPersistToHistory: !0
      });
    },
    [t]
  ), i = ye(() => n.slice(0).reverse().filter(
    (h) => h.payload != null
  ), [n]), o = v([]), l = M(
    (h) => {
      const m = i[h];
      m?.payload && r(m.payload);
    },
    [i, r]
  ), { selectedIndex: u, navigateOnKeyDown: d } = Ln({
    itemCount: i.length,
    onSelect: l,
    onClose: e,
    wrap: !0,
    handleTab: !0
  });
  return _(() => {
    i.length > 0 && o.current[u]?.focus();
  }, [u, i.length]), i.length > 0 ? /* @__PURE__ */ s("ul", { className: gn.pageList, role: "menu", onKeyDown: d, children: i.map((h, m) => {
    const { payload: p } = h, F = gE(p), g = p.title || p.name || p.type || a("Untitled"), C = fE(p);
    return /* @__PURE__ */ s("li", { role: "menuitem", children: /* @__PURE__ */ s(
      "button",
      {
        ref: (E) => {
          o.current[m] = E;
        },
        onClick: () => r(p),
        className: gn.pageItem,
        tabIndex: m === u ? 0 : -1,
        children: [
          C,
          /* @__PURE__ */ s(
            "span",
            {
              className: gn.pageTitle,
              title: typeof g == "string" ? g : void 0,
              children: [
                F,
                ": ",
                g
              ]
            }
          )
        ]
      }
    ) }, h.id ?? `${F}-${g}-${m}`);
  }) }) : /* @__PURE__ */ s("p", { className: gn.emptyText, children: a("No pages available") });
}, CE = (e) => /* @__PURE__ */ se("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ se("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.5 2C3.08 2 1 3.73 1 6c0 .96.38 1.84 1 2.52v1.98a.5.5 0 0 0 .82.38l1.3-1.07a5 5 0 0 0 2 .15C6.63 11.74 8.44 13 10.5 13q.72 0 1.39-.2l1.29 1.08a.5.5 0 0 0 .82-.38v-1.98c.62-.68 1-1.56 1-2.52 0-2.27-2.08-4-4.5-4q-.32 0-.63.04C9.38 3.26 7.57 2 5.5 2M2 6c0-1.6 1.5-3 3.5-3S9 4.4 9 6 7.5 9 5.5 9a4 4 0 0 1-1.33-.22.5.5 0 0 0-.49.08L3 9.43V8.32a.5.5 0 0 0-.15-.36A2.8 2.8 0 0 1 2 6m8 .03c-.01 1.73-1.24 3.14-2.9 3.7C7.5 11 8.83 12 10.5 12q.71 0 1.33-.22a.5.5 0 0 1 .49.08l.68.57v-1.11a.5.5 0 0 1 .15-.36c.54-.53.85-1.22.85-1.96 0-1.6-1.5-3-3.5-3q-.26 0-.5.03", clipRule: "evenodd" })), vE = "_supportContent_9fuy1_8", kE = "_requestChatButton_9fuy1_13", AE = "_spinner_9fuy1_56", SE = "_liveChatBlock_9fuy1_60", wE = "_contactInfo_9fuy1_68", EE = "_contactItem_9fuy1_75", DE = "_link_9fuy1_79", BE = "_value_9fuy1_80", TE = "_label_9fuy1_84", ME = "_icon_9fuy1_99", RE = "_waitTime_9fuy1_135", ra = {
  supportContent: vE,
  requestChatButton: kE,
  spinner: AE,
  liveChatBlock: SE,
  contactInfo: wE,
  contactItem: EE,
  link: DE,
  value: BE,
  label: TE,
  icon: ME,
  waitTime: RE
}, aa = {
  PHONE: "phone",
  EMAIL: "email",
  LINK: "link",
  TEXT: "text",
  LIVE_AGENT: "live_agent",
  ICON: "icon"
}, IE = (e) => {
  const { type: a, value: t } = e;
  if (!t)
    return null;
  switch (a) {
    case aa.PHONE:
      return `tel:${t}`;
    case aa.EMAIL:
      return `mailto:${t}`;
    case aa.LINK:
      return t;
    case aa.TEXT:
    case aa.LIVE_AGENT:
    case aa.ICON:
      return null;
  }
}, PE = (e, a) => {
  if (e == null || e <= 0)
    return null;
  const r = Math.round(e / 1e3);
  if (r < 60)
    return r === 1 ? a("1 second") : a("{0} seconds", { 0: String(r) });
  const i = Math.round(r / 60);
  return i === 1 ? a("1 minute") : a("{0} minutes", { 0: String(i) });
}, LE = ({
  contactMenuItems: e,
  onClose: a
}) => {
  const { t } = le(), { connector: n } = da(), r = He(), i = N(Jr), o = N($d), [l, u] = Y(!1), [d, c] = Y(!1), [h, m] = Y(!1), [p, F] = Y(void 0), g = i?.type === "closed", C = ye(() => e ?? [], [e]), E = ye(() => {
    const w = [
      aa.PHONE,
      aa.EMAIL,
      aa.LINK,
      aa.TEXT
    ];
    return C.filter((A) => w.includes(A.type)).map((A) => ({
      label: A.label,
      value: A.value,
      type: A.type,
      href: IE(A),
      opensWindow: A.type === aa.LINK,
      icon: A.icon
    }));
  }, [C]), k = ye(() => C.find((w) => w.type === aa.LIVE_AGENT), [C]);
  _(() => {
    if (g)
      return;
    let w = !1;
    return u(!0), n.checkLiveAgentAvailability().then((A) => {
      w || (c(A.agent_available), F(A.waiting_time));
    }).catch(() => {
      w || c(!1);
    }).finally(() => {
      w || u(!1);
    }), () => {
      w = !0;
    };
  }, [g, n]);
  let I = k?.label ?? t("Request a live chat");
  h ? I = t("Connecting...") : !l && !d && !g && (I = t("No live agents currently available"));
  const f = () => {
    m(!0), (g ? r(qd()).unwrap() : n.requestLiveAgentHandoff()).catch((A) => {
      fe("Support", "Failed to request live agent handoff:", A);
    }).finally(() => {
      m(!1);
    }), a?.();
  }, b = E.map((w) => {
    let A;
    w.href ? A = /* @__PURE__ */ s(
      "a",
      {
        href: w.href,
        className: ra.link,
        target: w.opensWindow ? "_blank" : void 0,
        rel: w.opensWindow ? "noopener noreferrer" : void 0,
        children: w.value
      }
    ) : A = /* @__PURE__ */ s("span", { className: ra.value, children: w.value });
    let W = null;
    if (w.icon) {
      const P = Is(w.icon), U = /\.[a-z0-9]+(\?|$)/i.test(P) ? `/${P}` : `/${P}.iix?t=small`;
      W = /* @__PURE__ */ s("img", { src: U, alt: "", className: ra.icon });
    }
    return /* @__PURE__ */ s("div", { className: ra.contactItem, children: [
      /* @__PURE__ */ s("span", { className: ra.label, children: [
        W,
        w.label
      ] }),
      A
    ] }, `${w.type}-${w.label}`);
  });
  let S = null;
  const D = PE(p, t);
  o && D && d && !g && (S = /* @__PURE__ */ s("div", { className: ra.waitTime, children: [
    /* @__PURE__ */ s("span", { children: [
      t("Estimated wait time:"),
      " "
    ] }),
    /* @__PURE__ */ s("span", { children: D })
  ] }));
  const R = l || h;
  let y;
  R ? y = /* @__PURE__ */ s(Kr, { className: ra.spinner, "aria-hidden": "true" }) : y = /* @__PURE__ */ s(CE, {});
  const T = /* @__PURE__ */ s("div", { className: ra.liveChatBlock, children: [
    /* @__PURE__ */ s(
      "button",
      {
        className: ra.requestChatButton,
        onClick: f,
        type: "button",
        disabled: R || !d || g,
        "aria-busy": R,
        children: [
          y,
          I
        ]
      }
    ),
    S
  ] });
  let x = null;
  return b.length > 0 && (x = /* @__PURE__ */ s("div", { className: ra.contactInfo, children: b })), /* @__PURE__ */ s("div", { className: ra.supportContent, children: [
    T,
    x
  ] });
}, _E = "_popover_1wovx_3", NE = "_menuList_1wovx_18", xE = "_menuItem_1wovx_26", HE = "_menuIcon_1wovx_68", WE = "_submenuHeader_1wovx_74", OE = "_backButton_1wovx_105", GE = "_backIcon_1wovx_119", KE = "_submenuTitle_1wovx_124", JE = "_submenuContent_1wovx_132", Qe = {
  popover: _E,
  menuList: NE,
  menuItem: xE,
  menuIcon: HE,
  submenuHeader: WE,
  backButton: OE,
  backIcon: GE,
  submenuTitle: KE,
  submenuContent: JE
}, Ko = ({
  title: e,
  onBack: a,
  children: t,
  containerRef: n,
  showBackButton: r = !0
}) => {
  const { t: i } = le();
  let o;
  return r ? o = /* @__PURE__ */ s(
    "button",
    {
      className: Qe.submenuHeader,
      onClick: a,
      type: "button",
      "aria-label": i("Go back"),
      children: [
        /* @__PURE__ */ s("span", { className: Qe.backButton, children: /* @__PURE__ */ s(Ud, { className: Qe.backIcon, "aria-hidden": "true" }) }),
        /* @__PURE__ */ s("span", { className: Qe.submenuTitle, children: i(e) })
      ]
    }
  ) : o = /* @__PURE__ */ s("div", { className: Qe.submenuHeader, children: /* @__PURE__ */ s("span", { className: Qe.submenuTitle, children: i(e) }) }), /* @__PURE__ */ s("div", { ref: n, className: Qe.popover, "aria-label": i(e), children: [
    o,
    /* @__PURE__ */ s("div", { className: Qe.submenuContent, children: t })
  ] });
}, Jo = ({
  icon: e,
  label: a,
  onClick: t,
  buttonRef: n
}) => {
  const { t: r } = le();
  return /* @__PURE__ */ s("li", { role: "none", children: /* @__PURE__ */ s(
    "button",
    {
      ref: n,
      className: Qe.menuItem,
      onClick: t,
      type: "button",
      role: "menuitem",
      children: [
        e,
        /* @__PURE__ */ s("span", { children: r(a) })
      ]
    }
  ) });
}, zE = ({
  isOpen: e,
  enablePageHistory: a = !1,
  showContactMenu: t = !1,
  contactMenuItems: n,
  onClose: r,
  triggerRef: i
}) => {
  const { t: o } = le(), l = v(e), u = v([]), d = v(null), c = (a ? 1 : 0) + (t ? 1 : 0), m = c !== 1 ? "main" : a ? "pages" : "support", [p, F] = Y(m), { selectedIndex: g, resetSelection: C, navigateOnKeyDown: E } = Ln({
    itemCount: c,
    onClose: r,
    wrap: !0
  });
  Pr({
    isOpen: e,
    popupRef: d,
    triggerRef: i,
    contentKey: p
  });
  const k = () => {
    F("main");
  }, I = () => {
    F("pages");
  }, f = () => {
    F("support");
  };
  if (_(() => {
    c > 0 && e && p === "main" && u.current[g]?.focus();
  }, [g, c, e, p]), e && !l.current && (p !== m && F(m), C()), l.current = e, !e)
    return null;
  if (p === "main") {
    let S = 0;
    return /* @__PURE__ */ s(
      "div",
      {
        ref: d,
        className: Qe.popover,
        "aria-label": o("More options"),
        onKeyDown: E,
        role: "menu",
        tabIndex: -1,
        children: /* @__PURE__ */ s("ul", { className: Qe.menuList, role: "presentation", children: [
          a && /* @__PURE__ */ s(
            Jo,
            {
              icon: /* @__PURE__ */ s(Al, { className: Qe.menuIcon, "aria-hidden": "true" }),
              label: "Page history",
              onClick: I,
              buttonRef: (D) => {
                u.current[S++] = D;
              }
            }
          ),
          t && /* @__PURE__ */ s(
            Jo,
            {
              icon: /* @__PURE__ */ s(Cl, { className: Qe.menuIcon, "aria-hidden": "true" }),
              label: "Support",
              onClick: f,
              buttonRef: (D) => {
                u.current[S++] = D;
              }
            }
          )
        ] })
      }
    );
  }
  const b = c > 1;
  return p === "pages" ? /* @__PURE__ */ s(
    Ko,
    {
      title: "Page history",
      onBack: k,
      containerRef: d,
      showBackButton: b,
      children: /* @__PURE__ */ s(bE, {})
    }
  ) : p === "support" ? /* @__PURE__ */ s(
    Ko,
    {
      title: "Support",
      onBack: k,
      containerRef: d,
      showBackButton: b,
      children: /* @__PURE__ */ s(LE, { contactMenuItems: n, onClose: r })
    }
  ) : null;
}, VE = ({
  showAgentDetails: e,
  showConversationTitle: a,
  alwaysShowFirstUtterance: t,
  isMessageListScrolledToTop: n,
  icon: r,
  header: i,
  conversationTitle: o,
  isCurrentThreadClosed: l,
  t: u
}) => {
  if (e)
    return /* @__PURE__ */ s(Vw, {});
  const d = (() => {
    if (!a)
      return null;
    if (!t && n) {
      let h;
      if (r) {
        const m = `/${Is(r)}.iix?t=small`;
        h = /* @__PURE__ */ s("div", { className: Se.logoContainer, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: m, alt: "", className: Se.logoImage }) });
      } else
        h = /* @__PURE__ */ s("div", { className: Se.logoContainer, "aria-hidden": "true", children: /* @__PURE__ */ s(Hw, {}) });
      return /* @__PURE__ */ s("div", { className: Se.conversationTitle, children: [
        h,
        /* @__PURE__ */ s("span", { className: Se.nowAssistLabel, children: i })
      ] });
    }
    return o ? /* @__PURE__ */ s(
      kt,
      {
        className: Se.conversationTitle,
        testId: "conversation-title",
        text: o,
        tooltipMode: "overflow"
      }
    ) : null;
  })();
  let c = null;
  return l && (c = /* @__PURE__ */ s("span", { className: Se.closedPill, children: u("Closed") })), /* @__PURE__ */ s(Pe, { children: [
    d,
    c
  ] });
}, $E = ({
  showAgentDetails: e,
  showViewToggleButton: a,
  showCloseButton: t,
  viewExpanded: n,
  ariaConfig: r,
  isNewChatBusy: i,
  isNewChatDisabled: o,
  isMobileExperience: l,
  isLegacyModeDetected: u,
  mode: d,
  createConversationOnClick: c,
  publishViewToggleEventOnClick: h,
  publishCloseEventOnClick: m,
  headerMenuButton: p,
  t: F
}) => {
  if (e)
    return /* @__PURE__ */ s(Uw, {});
  const g = i ? F("Creating a new chat...") : void 0, C = /* @__PURE__ */ s(
    he,
    {
      action: oe.NewChat,
      className: Se.headerButton,
      onClick: c,
      isBusy: i,
      disabled: o,
      ariaLabel: g
    }
  );
  let E = null;
  if (a) {
    const I = n ? oe.ViewCollapse : oe.ViewExpand, f = r?.headerViewToggleButton?.["aria-label"];
    E = /* @__PURE__ */ s(
      he,
      {
        action: I,
        className: Se.headerButton,
        onClick: h,
        ariaLabel: f
      }
    );
  }
  let k = null;
  if (t) {
    let I = oe.Close;
    (u || Na(d)) && (I = l ? oe.CloseSheet : oe.ToggleOmni), k = /* @__PURE__ */ s(
      he,
      {
        action: I,
        className: Se.headerButton,
        onClick: m
      }
    );
  }
  return /* @__PURE__ */ s(Pe, { children: [
    C,
    p,
    E,
    k
  ] });
};
function qE(e) {
  return ea(e) ? null : /* @__PURE__ */ s(Gw, {});
}
const UE = ({
  isReduced: e,
  showHistoryButton: a,
  showContactMenu: t,
  showViewToggleButton: n,
  showCloseButton: r,
  enablePageHistory: i,
  showConversationTitle: o,
  alwaysShowFirstUtterance: l,
  branding: u,
  ariaConfig: d,
  viewExpanded: c,
  leftSidebarOpenedManaged: h,
  leftSidebarOpened: m
}) => {
  const { t: p } = le(), F = He(), { actions: g, state: C } = xa(), { isMobileExperience: E, isShowingVirtualKeyboard: k } = Ba(), { closeInteractiveView: I } = Dt(), f = ot(), { telemetryService: b } = da(), S = N(jd), D = u?.icon || S?.icon, L = u?.header || S?.header || p("Now Assist"), R = u?.menuItem, y = N(Ds), T = N(Bs), x = N(Yd), w = N(Zd), A = N(Hr), W = N(Jr), P = W?.type === "closed", O = P || W?.type === "closing", U = A && !O, j = v(null);
  Wr("sidebar-toggle-button", j);
  const J = v(null), [H, V] = Y(!1), ne = h ? m : H;
  _(() => {
    ne ? J.current?.show() : J.current?.hide();
  }, [ne]);
  const $ = M(
    (qe) => {
      if (h) {
        m !== qe && f("left-sidebar:toggle-requested", void 0);
        return;
      }
      V(qe);
    },
    [h, m, f]
  ), ie = M(() => {
    J.current?.hide(), $(!1);
  }, [$]), [z, K] = Y(!1), ae = v(null), X = v(null);
  cs({
    ref: ae,
    onOutsideInteraction: () => {
      K(!1);
    },
    enabled: z
  });
  const ce = async () => {
    await bl({
      isNewChatDisabled: T,
      dispatch: F,
      trackNewConversationClicked: () => {
        b.track("newConversationClicked");
      },
      closeInteractiveView: I,
      focusInput: g.focusInput
    });
  }, re = () => {
    K(!z);
  }, De = () => {
    f("view-toggle:clicked", void 0);
  }, Me = () => {
    f("close-button:clicked", void 0);
  };
  let Fe = null;
  w && (Fe = /* @__PURE__ */ s("span", { className: Se.notificationBadge }));
  let we = null;
  a && (we = /* @__PURE__ */ s(Pe, { children: [
    /* @__PURE__ */ s(
      he,
      {
        ref: j,
        action: oe.OpenChatHistory,
        className: Se.headerButton,
        onClick: () => $(!ne),
        children: Fe
      }
    ),
    /* @__PURE__ */ s(
      nt,
      {
        ref: J,
        type: Qd.SidePanel,
        title: p("Chat History"),
        sheetInitialSize: 50,
        sheetResize: "[20-100]",
        onCloseComplete: ie,
        children: /* @__PURE__ */ s(vl, { onNewChat: ie, onSelectConversation: ie })
      }
    )
  ] }));
  const Le = i || t;
  let _e = null;
  Le && (_e = /* @__PURE__ */ s("div", { className: Se.supportContainer, ref: ae, children: [
    /* @__PURE__ */ s(
      he,
      {
        ref: X,
        action: oe.MoreOptions,
        className: Se.menuButton,
        onClick: re
      }
    ),
    /* @__PURE__ */ s(
      zE,
      {
        isOpen: z,
        enablePageHistory: i,
        showContactMenu: t,
        contactMenuItems: R,
        onClose: () => {
          K(!1);
        },
        triggerRef: X
      }
    )
  ] }));
  const Te = VE({
    showAgentDetails: U,
    showConversationTitle: o,
    alwaysShowFirstUtterance: l,
    isMessageListScrolledToTop: C.isMessageListScrolledToTop,
    icon: D,
    header: L,
    conversationTitle: x,
    isCurrentThreadClosed: P,
    t: p
  }), Ke = $E({
    showAgentDetails: U,
    showViewToggleButton: n,
    showCloseButton: r,
    viewExpanded: c,
    ariaConfig: d,
    isNewChatBusy: y,
    isNewChatDisabled: T,
    isMobileExperience: E,
    isLegacyModeDetected: C.isLegacyModeDetected,
    mode: C.mode,
    createConversationOnClick: ce,
    publishViewToggleEventOnClick: De,
    publishCloseEventOnClick: Me,
    headerMenuButton: _e,
    t: p
  }), $e = qE(C.mode), oa = te(Se.header, {
    [Se.omni]: ea(C.mode),
    [Se.side]: Na(C.mode),
    [Se.mobile]: E,
    [Se.reduced]: e || k
  });
  return /* @__PURE__ */ s(Pe, { children: [
    /* @__PURE__ */ s("div", { className: oa, children: /* @__PURE__ */ s("div", { className: Se.headerContent, children: [
      /* @__PURE__ */ s("div", { className: Se.headerLeft, children: [
        we,
        Te
      ] }),
      /* @__PURE__ */ s("div", { className: Se.headerRight, children: Ke })
    ] }) }),
    $e
  ] });
};
Xd();
const jE = Xo ? xr(
  () => import("./TestHarness-BbWYAwoY.js").then((e) => ({ default: e.TestHarness }))
) : () => null, YE = parseInt(kh.narrowMainContent, 10) || 768, ZE = [500, 1e3 * 2, 1e3 * 3, 1e3 * 5, 1e3 * 10], QE = ({
  showHeader: e,
  showContactMenu: a,
  leftSidebarOpened: t,
  leftSidebarOpenedManaged: n,
  showViewToggleButton: r,
  viewExpanded: i,
  showCloseButton: o,
  showHistoryButton: l,
  showConversationTitle: u,
  enablePageHistory: d,
  enableIntroBanner: c = !1,
  alwaysShowFirstUtterance: h,
  shouldShowPromotedTopics: m = !1,
  promotedTopics: p = [],
  skillPickerEnabled: F = !1,
  promptLibraryEnabled: g = !1,
  readOnly: C = !1,
  showChatPanelToggle: E,
  sessionError: k,
  hideNewChatOnClosed: I = !1,
  branding: f,
  ariaConfig: b,
  mode: S,
  maxVisibleTopics: D
}) => {
  const L = v(null), R = v(null), y = zh(R, YE), T = f?.backButtonIcon, [x, w] = Y(!1), { state: A } = xa(), { isMobileExperience: W } = Ba(), P = ot();
  _(() => {
    W || w(!1);
  }, [W]);
  const O = W && (Na(S) || ea(S));
  _(() => {
    !O && L.current && (L.current.style.blockSize = "");
  }, [O]);
  const U = M(
    (X) => {
      W && (X === Er.Down ? w(!0) : X === Er.Up && w(!1));
    },
    [W]
  ), J = N(Jr)?.type === "closed", H = J && !I, V = N(Es), ne = m && p.length > 0 && !V, $ = !A.isInputBarTall && A.isReadyForInput && !V, ie = M(() => {
    P("close-button:clicked", void 0);
  }, [P]);
  if (_a(S)) {
    if (k)
      return /* @__PURE__ */ s(Dr, { message: k, variant: "error", className: xe.sessionError });
    let X = null;
    return g && m ? X = /* @__PURE__ */ s(
      Wo,
      {
        topics: p,
        mode: S,
        isVisible: $,
        maxVisibleTopics: D,
        isPromptLibraryOpen: A.isPromptLibraryOpen,
        isMobile: W
      }
    ) : ne && (X = /* @__PURE__ */ s(
      zi,
      {
        topics: p,
        skillPickerEnabled: F,
        mode: S,
        isVisible: $,
        maxVisibleTopics: D
      }
    )), /* @__PURE__ */ s("div", { className: xe.heroContainer, children: /* @__PURE__ */ s(Ji, { children: [
      X,
      /* @__PURE__ */ s(Io, { backButtonIcon: T, showChatPanelToggle: E })
    ] }) });
  }
  if (ea(S) && k)
    return null;
  let z = null;
  O && (z = /* @__PURE__ */ s("div", { className: xe.handle, children: /* @__PURE__ */ s(
    Ah,
    {
      resize: "[20,65,100]",
      initialSize: 65,
      onClose: ie,
      resizableContainerRef: L
    }
  ) }));
  let K = null;
  !J && !C && (K = /* @__PURE__ */ s(
    Io,
    {
      isNarrowMainContent: y,
      backButtonIcon: T,
      showChatPanelToggle: E
    }
  ));
  let ae;
  return g ? ae = /* @__PURE__ */ s(
    Wo,
    {
      topics: p,
      mode: S,
      isVisible: $,
      isNarrowMainContent: y,
      maxVisibleTopics: D,
      isPromptLibraryOpen: A.isPromptLibraryOpen,
      isMobile: W
    }
  ) : ae = /* @__PURE__ */ s(
    zi,
    {
      topics: p,
      skillPickerEnabled: F,
      mode: S,
      isVisible: $,
      isNarrowMainContent: y,
      maxVisibleTopics: D
    }
  ), /* @__PURE__ */ s("div", { className: xe.container, children: /* @__PURE__ */ s("div", { ref: L, className: xe.sheet, children: [
    z,
    /* @__PURE__ */ s("div", { ref: R, className: xe.mainContent, "data-container": "main-content", children: [
      e && /* @__PURE__ */ s(
        UE,
        {
          isReduced: x,
          showHistoryButton: l,
          showContactMenu: a,
          showViewToggleButton: r,
          viewExpanded: i,
          showCloseButton: o,
          enablePageHistory: d,
          showConversationTitle: u,
          alwaysShowFirstUtterance: h,
          branding: f,
          ariaConfig: b,
          leftSidebarOpenedManaged: n,
          leftSidebarOpened: t
        }
      ),
      c && /* @__PURE__ */ s(eb, {}),
      k ? /* @__PURE__ */ s("div", { className: te(xe.chatArea, xe.sessionErrorContainer), children: /* @__PURE__ */ s(Dr, { message: k, variant: "error", className: xe.sessionError }) }) : /* @__PURE__ */ s(Ji, { children: /* @__PURE__ */ s(
        "div",
        {
          className: te(xe.chatArea, {
            [xe.omni]: ea(S)
          }),
          children: [
            /* @__PURE__ */ s(
              WS,
              {
                isNarrowMainContent: y,
                onScrollDirectionChange: U
              }
            ),
            H && /* @__PURE__ */ s(KS, {}),
            ae,
            K
          ]
        }
      ) })
    ] })
  ] }) });
}, XE = ({
  mode: e,
  disableHeader: a,
  disableContactMenu: t,
  conversationId: n,
  forceNewConversation: r,
  leftSidebarOpenedManaged: i,
  leftSidebarOpened: o,
  showViewToggleButton: l,
  viewExpanded: u,
  showCloseButton: d,
  showHistoryButton: c,
  showConversationTitle: h,
  alwaysShowFirstUtterance: m,
  showPromotedTopics: p,
  enablePinnable: F,
  readOnly: g,
  enableVoiceInput: C,
  showChatPanelToggle: E,
  hideNewChatOnClosed: k,
  branding: I,
  ariaConfig: f,
  enablePageHistory: b = !1,
  enableIntroBanner: S = !1,
  newConversationContext: D,
  maxVisibleTopics: L,
  onSwitchOrNewConversation: R
}) => {
  const y = He(), T = Et(), { rootRef: x, setRootRef: w } = Fs(), { storeId: A } = da(), { state: W, actions: P } = xa(), { isMobileExperience: O, isShowingVirtualKeyboard: U, setTopContainerRef: j } = Ba(), J = ot();
  _(() => (T.setSwitchOrNewConversationCallback?.(R), () => {
    T.setSwitchOrNewConversationCallback?.(void 0);
  }), [T, R]);
  const H = oh(p), V = N(sh), ne = Vr(), $ = W.mode, ie = W.disableHeader, z = W.disableContactMenu, K = N(Ha), ae = N(ss), X = N(In), ce = N(lh), re = N(Kt), De = N(uh), Me = N(is), Fe = N(Hr), we = N(ch), Le = v(null);
  Qh({
    activeConversationId: K,
    isAgentResponding: X,
    conversationStatus: ae,
    mode: $,
    isLiveAgentActive: Fe,
    reduceItemsListPolling: we
  }), mf({
    activeConversationId: K,
    isAgentResponding: X
  });
  const _e = Qo(() => {
    B(
      "App",
      'In DEV mode run window.__LBF_TEST_HARNESS__.setDevAuthToken("<token>") to handshake with a real instance token (persists across reloads), or window.__LBF_TEST_HARNESS__.simulateAuthFailure() to simulate a 401 auth failure'
    );
  });
  window.APP_CONFIG?.isDocker === "true" && (Tn || _e(), _(() => {
    window.__LBF_TEST_HARNESS__ && (window.__LBF_TEST_HARNESS__.simulateAuthFailure = dh(y));
  }, [y])), _(() => {
    r !== void 0 && !n && y(yn(r));
  }, [r, n, y]);
  const Te = _a($);
  Aw(x, {
    conversationId: n,
    forceNewConversation: r,
    newConversationContext: D,
    inputOnly: Te
  });
  const Ke = v(D);
  Ke.current = D;
  const $e = JSON.stringify(D) ?? "", oa = v($e);
  _(() => {
    const Ce = oa.current;
    if (oa.current = $e, Ce === $e)
      return;
    const ta = Ke.current;
    ta && re === "connected" && (y(Za(ta)), y(tt()));
  }, [$e, re, y]);
  const qe = v(null);
  _(() => {
    const Ce = Le.current;
    if (Le.current = K, B("[App] conversation loading effect", {
      store: A.description,
      prevConversationId: Ce,
      activeConversationId: K,
      conversationStatus: ae,
      connectionStatus: re,
      itemsInStore: T.getState().conversation.items.length
    }), ae === "creating") {
      P.clearAttachmentFilesOnly(), P.clearQuotedContext(), y(Oi([])), qe.current = null;
      return;
    }
    if (!K) {
      B("[App] clearing items (no conversationId)", {
        store: A.description,
        conversationStatus: ae,
        activeConversationId: K
      }), y(Gi()), P.clearAttachmentFilesOnly(), P.clearQuotedContext(), y(Oi([])), qe.current = null;
      return;
    }
    if (ae === "loading") {
      P.clearAttachmentFilesOnly(), P.clearQuotedContext(), qe.current = K;
      return;
    }
    if (re !== "connected" || qe.current === K)
      return;
    Ce && Ce !== K && (B("[App] clearing items (switching conversations)", {
      store: A.description,
      from: Ce,
      to: K
    }), y(Gi())), P.clearAttachmentFilesOnly(), P.clearQuotedContext(), B("[App] loading conversation items", {
      store: A.description,
      conversationId: K,
      currentItems: T.getState().conversation.items.length
    });
    const ta = y(hh(K));
    qe.current = K, Ce === null || y(mh(K));
    let ma = !1, Ma = null;
    const Ka = async () => {
      for (const ut of ZE) {
        if (ma || (await new Promise((q) => {
          Ma = setTimeout(q, ut);
        }), ma))
          return;
        await y(bn(K));
      }
    };
    return (async () => (await ta, ma || await Ka()))(), () => {
      ma = !0, Ma !== null && clearTimeout(Ma);
    };
  }, [K, ae, re, y, P]), _(() => {
    if (ae === "creating") {
      P.setIsReadyForInput(!1);
      return;
    }
    if (Me > 0) {
      P.setIsReadyForInput(!0);
      return;
    }
    if (re === "connected" && K === null) {
      P.setIsReadyForInput(!0);
      return;
    }
    re === "connected" && K && !ce && P.setIsReadyForInput(!0);
  }, [
    ae,
    Me,
    re,
    K,
    ce,
    P
  ]), _(() => {
    y(Zo()), P.setMode(e);
  }, [e, y, P]), _(() => {
    P.setDisableHeader(a);
  }, [a, P]), _(() => {
    P.setDisableContactMenu(t);
  }, [t, P]), _(() => {
    n && y(An(n)).then((Ce) => {
      ph(Ce) && J("conversation:selected", { conversationId: n });
    });
  }, [n, y, J]), _(() => {
    re === "connected" && !Ki($) && Fh({ storeId: T.storeId, dispatch: y });
  }, [y, T, re, $]), _(() => {
    P.setEnablePinnable(F);
  }, [F, P]), _(() => {
    P.setReadOnly(g);
  }, [g, P]), _(() => {
    P.setEnableVoiceInput(C);
  }, [C, P]);
  const Ta = (vn($) || ea($)) && !ie;
  qh($);
  const Oa = N(gh), sa = z === void 0 ? Oa : !z, Be = N(yh), Ue = L ?? (Be ? 3 : void 0);
  let ha;
  Ki($) ? ha = /* @__PURE__ */ s(vl, {}) : ha = /* @__PURE__ */ s(
    QE,
    {
      showHeader: Ta,
      showContactMenu: sa,
      leftSidebarOpened: o,
      leftSidebarOpenedManaged: i,
      showViewToggleButton: l,
      viewExpanded: u,
      showCloseButton: d,
      showHistoryButton: c,
      showConversationTitle: h,
      enablePageHistory: b,
      enableIntroBanner: S,
      alwaysShowFirstUtterance: m,
      shouldShowPromotedTopics: p,
      promotedTopics: H,
      skillPickerEnabled: V,
      promptLibraryEnabled: ne,
      readOnly: g,
      showChatPanelToggle: E,
      sessionError: De,
      hideNewChatOnClosed: k,
      branding: I,
      ariaConfig: f,
      mode: $,
      maxVisibleTopics: Ue
    }
  );
  const Bt = te(xe.appContentWrapper, {
    [xe.hero]: _a($),
    [xe.omni]: ea($),
    [xe.side]: Na($),
    [xe.mobile]: O,
    [xe.keyboard]: U
  }), lt = M(
    (Ce) => {
      w(Ce), j(Ce);
    },
    [w, j]
  );
  return /* @__PURE__ */ s("div", { ref: lt, className: Bt, children: /* @__PURE__ */ s(fh, { children: /* @__PURE__ */ s(bh, { containerRef: x, children: [
    /* @__PURE__ */ s(Ch, { containerRef: x, children: /* @__PURE__ */ s(Pe, { children: [
      /* @__PURE__ */ s(Cw, { children: /* @__PURE__ */ s(Uy, { rootRef: x, children: [
        ha,
        /* @__PURE__ */ s(Or, { fallback: null, children: /* @__PURE__ */ s(jE, {}) })
      ] }) }),
      /* @__PURE__ */ s(vh, {})
    ] }) }),
    /* @__PURE__ */ s(yw, {})
  ] }) }) });
};
function e2({
  componentId: e,
  mode: a = "primary",
  disableHeader: t = !1,
  // disableContactMenu is intentionally not defaulted to false. Hosts that
  // pass nothing get `undefined`, which routes through the legacy
  // `selectIsContactMenuExperience` sniff in AppContent (DEF0834398).
  disableContactMenu: n,
  conversationId: r,
  forceNewConversation: i,
  channel: o,
  isLegacyModeDetected: l = !1,
  leftSidebarOpenedManaged: u = !1,
  leftSidebarOpened: d = !1,
  showViewToggleButton: c = !1,
  viewExpanded: h = !1,
  showCloseButton: m = !1,
  showHistoryButton: p = !0,
  enablePageHistory: F = !1,
  enableIntroBanner: g = !1,
  activeWidgetId: C,
  showConversationTitle: E = !0,
  alwaysShowFirstUtterance: k = !1,
  showPromotedTopics: I = !1,
  inputLayout: f = "auto",
  density: b = "normal",
  showChatPanelToggle: S = !1,
  enablePinnable: D = !1,
  readOnly: L = !1,
  enableVoiceInput: R = !0,
  enableAgentMessageActions: y,
  enableFilePreview: T,
  acceptedAttachmentTypes: x,
  hideNewChatOnClosed: w = !1,
  branding: A,
  ariaConfig: W,
  language: P,
  newConversationContext: O,
  maxVisibleTopics: U,
  onSwitchOrNewConversation: j
}) {
  const J = e || Ms("client");
  _(() => {
    if (!P)
      return;
    let ie = !1;
    return eh(P).then(() => {
      ie || (ah(P), th.changeLanguage(P));
    }), () => {
      ie = !0;
    };
  }, [P]);
  let H;
  _a(a) ? H = I : H = I || vn(a);
  const V = o ?? (r ? $y(r) : void 0), ne = nh("ENABLE_PAGE_HISTORY"), $ = ne == null ? F : ne === "true";
  return /* @__PURE__ */ s(qy, { channel: V, componentId: J, children: /* @__PURE__ */ s(
    bw,
    {
      enableAgentMessageActions: y,
      enableFilePreview: T,
      acceptedAttachmentTypes: x,
      children: /* @__PURE__ */ s(rh, { isLegacyModeDetected: l, children: /* @__PURE__ */ s(
        ih,
        {
          initialMode: a,
          initialIsLegacyModeDetected: l,
          initialDisableHeader: t,
          initialInputLayout: f,
          initialDensity: b,
          initialEnablePinnable: D,
          initialEnableVoiceInput: R,
          initialReadOnly: L,
          children: /* @__PURE__ */ s(jy, { initialActiveWidgetId: C, children: /* @__PURE__ */ s(
            XE,
            {
              mode: a,
              disableHeader: t,
              disableContactMenu: n,
              conversationId: r,
              forceNewConversation: i,
              leftSidebarOpenedManaged: u,
              leftSidebarOpened: d,
              showViewToggleButton: c,
              viewExpanded: h,
              showCloseButton: m,
              showHistoryButton: p,
              showConversationTitle: E,
              alwaysShowFirstUtterance: k,
              showPromotedTopics: H,
              enablePinnable: D,
              enableVoiceInput: R,
              readOnly: L,
              showChatPanelToggle: S,
              hideNewChatOnClosed: w,
              branding: A,
              ariaConfig: W,
              enablePageHistory: $,
              enableIntroBanner: g,
              newConversationContext: O,
              maxVisibleTopics: U,
              onSwitchOrNewConversation: j
            }
          ) })
        }
      ) })
    }
  ) });
}
class a2 extends Sh {
  /**
   * Build-time identity stamped onto the constructor so that
   * `src/utils/singleInstanceGuard.ts` can read it via
   * `customElements.get('now-lbf-chat-client')` and detect a different
   * version of the bundle attempting to load on the same page.
   *
   * Plain class statics — not declared in `static override properties`, so
   * Lit treats them as inert metadata, not reactive properties.
   */
  static __lbfVersion = "1.0.1-rc.35";
  static __lbfBuildTimestamp = "2026-08-06T18:45:16.853Z";
  static properties = {
    // Inherit base class properties (includes componentId)
    ...super.properties,
    // ─── Core Mode & Layout ───────────────────────────────────────────────────
    mode: ue.string("mode", {
      reflect: !0,
      allowedValues: ["primary", "hero", "side", "omni", "history"],
      deprecatedValues: [
        { value: "DEFAULT", replacement: "primary" },
        { value: "OMNI", replacement: "omni" },
        { value: "HISTORY", replacement: "history" }
      ]
    }),
    /** @deprecated Use mode="hero" instead. Kept for backward compatibility. */
    inputOnly: ue.boolean("inputOnly", {
      deprecatedValues: [{ value: !0, targetProp: "mode", replacement: "hero" }],
      warnWhen: [{ mode: "history" }, { mode: "omni" }]
    }),
    inputLayout: ue.string("inputLayout", {
      allowedValues: ["auto", "expanded", "compact"],
      requires: { mode: "hero" }
    }),
    density: ue.string("density", {
      allowedValues: ["normal", "condensed"]
    }),
    showChatPanelToggle: ue.boolean("showChatPanelToggle", {
      warnWhen: [{ mode: "history" }]
    }),
    // ─── Conversation Management ──────────────────────────────────────────────
    conversationId: ue.string("conversationId", {
      conflictsWith: ["forceNewConversation"]
    }),
    forceNewConversation: ue.optionalBoolean("forceNewConversation", {
      conflictsWith: ["conversationId"]
    }),
    channel: ue.string("channel"),
    // ─── Header Configuration ─────────────────────────────────────────────────
    disableHeader: ue.boolean("disableHeader"),
    // Tristate: attribute absent -> undefined (App.tsx falls back to the
    // legacy `selectIsContactMenuExperience` sniff). Explicit `true` or
    // `false` is honored directly. DEF0834398.
    disableContactMenu: ue.optionalBoolean("disableContactMenu", {
      requiresHeader: !0
    }),
    showViewToggleButton: ue.boolean("showViewToggleButton", {
      requiresHeader: !0
    }),
    viewExpanded: ue.boolean("viewExpanded", {
      requires: { showViewToggleButton: !0 }
    }),
    showCloseButton: ue.boolean("showCloseButton", {
      requiresHeader: !0
    }),
    showHistoryButton: ue.boolean("showHistoryButton", {
      requiresHeader: !0
    }),
    showConversationTitle: ue.boolean("showConversationTitle", {
      requiresHeader: !0
    }),
    alwaysShowFirstUtterance: ue.boolean("alwaysShowFirstUtterance", {
      requires: { showConversationTitle: !0 }
    }),
    activeWidgetId: ue.string("activeWidgetId"),
    // ─── Sidebar Control ──────────────────────────────────────────────────────
    leftSidebarOpenedManaged: ue.boolean("leftSidebarOpenedManaged"),
    leftSidebarOpened: ue.boolean("leftSidebarOpened", {
      requires: { leftSidebarOpenedManaged: !0 }
    }),
    // ─── Promoted Topics (omni mode) ──────────────────────────────────────────
    showPromotedTopics: ue.boolean("showPromotedTopics"),
    // ─── Feature Toggles ──────────────────────────────────────────────────────
    enablePinnable: ue.boolean("enablePinnable"),
    enableVoiceInput: ue.optionalBoolean("enableVoiceInput"),
    enableAgentMessageActions: ue.optionalBoolean("enableAgentMessageActions"),
    enableFilePreview: ue.optionalBoolean("enableFilePreview"),
    acceptedAttachmentTypes: ue.string("acceptedAttachmentTypes"),
    enablePageHistory: ue.boolean("enablePageHistory"),
    enableIntroBanner: ue.boolean("enableIntroBanner"),
    hideNewChatOnClosed: ue.boolean("hideNewChatOnClosed"),
    readOnly: ue.boolean("readOnly"),
    // ─── Internationalization ─────────────────────────────────────────────────
    language: ue.string("language"),
    // ─── Branding ─────────────────────────────────────────────────────────────
    branding: ue.object("branding"),
    // ─── Accessibility ────────────────────────────────────────────────────────
    ariaConfig: ue.object("ariaConfig"),
    // ─── Search Handoff ───────────────────────────────────────────────────────
    newConversationContext: ue.object("newConversationContext"),
    // ─── Layout Overrides ─────────────────────────────────────────────────────
    maxVisibleTopics: ue.number("maxVisibleTopics"),
    // ─── Guard Callbacks ──────────────────────────────────────────────────
    onSwitchOrNewConversation: ue.object("onSwitchOrNewConversation")
  };
  /**
   * Deferred method for setting session data.
   * Can be called before the component renders; calls will be queued.
   * Returns a Promise that resolves when the session is initialized.
   *
   * @example
   * ```ts
   * // Before component renders - calls are queued
   * await element.setSession({ session: { authToken, userId } });
   *
   * // In App.tsx - bind the handler implementation
   * bindMethodHandler(element.setSession, payload => dispatch(initializeSession(payload)));
   * ```
   */
  setSession = this.createDeferredMethod();
  /**
   * Deferred method for pushing a fresh per-turn snapshot of the host
   * application's page/view state. The snapshot is stored and forwarded onto
   * `metadata.clientContext` on every subsequent outbound user message until
   * replaced. Pass `undefined` to clear it.
   *
   * Unlike `setSession` — which only applies context fields on the initial
   * handshake — `setClientContext` takes effect immediately, including
   * mid-conversation. Call it whenever the host view changes (navigation,
   * record selection, sub-tab switch) so the next message carries current
   * context. A generic, host-owned channel; applications may attach their own
   * keys for their orchestrator skills.
   *
   * @example
   * ```ts
   * const el = document.querySelector('now-lbf-chat-client');
   * el.setClientContext({
   *   route: window.location.pathname,
   *   record_table: currentRecord?.table,
   *   record_sys_id: currentRecord?.sysId,
   * });
   * ```
   */
  setClientContext = this.createDeferredMethod();
  /**
   * Deferred method for updating the page context independently of session
   * configuration. The payload replaces the current page context wholesale
   * (no merge), so callers must pass the complete context they want — fields
   * omitted from the payload are dropped. Pass `undefined` to clear it
   * entirely.
   *
   * Unlike `setSession` — which only applies `pageContext` on the initial
   * handshake — `setPageContext` takes effect immediately, including
   * mid-conversation. Call it whenever the host navigates or the selected
   * record changes so the next server request carries current page context.
   *
   * @example
   * ```ts
   * const el = document.querySelector('now-lbf-chat-client');
   * // Replaces the entire page context — pass every field you want to keep
   * el.setPageContext({ sysId, table, route: window.location.pathname });
   * ```
   */
  setPageContext = this.createDeferredMethod();
  /**
   * Deferred method for invoking a skill on an already-connected session.
   * Creates a new conversation with the given skill context.
   *
   * Call this after `setSession` has completed and the session is connected.
   * If called before the session is connected, the call will be queued.
   *
   * **When to use `invokeSkill()` vs `setSession()` with `forceNewConversation`:**
   * - Use `invokeSkill()` when the session is already established and you want to
   *   launch a skill on demand (e.g., from a button click or UI Action). Each call
   *   creates a new conversation without re-authenticating.
   * - Use `setSession({ session: { forceNewConversation: true, newConversationContext } })`
   *   when establishing a new session that should immediately create a conversation
   *   with context (e.g., on page load or page navigation).
   *
   * @example
   * ```ts
   * // Invoke a skill from a UI Action
   * await element.invokeSkill({
   *   skillId: 'abc123',
   *   skillParams: { task_table: 'incident', task_sys_id: 'xyz789' },
   * });
   * ```
   */
  invokeSkill = this.createDeferredMethod();
  /**
   * Deferred method for creating a new conversation on an already-connected session.
   *
   * Call with no arguments to start a blank conversation, or pass context to seed
   * it with a skill, topic, or search text. The context is one-shot: it is cleared
   * automatically after the conversation is created.
   *
   * Call this after `setSession` has completed and the session is connected.
   * If called before the session is connected, the call will be queued.
   *
   * @example
   * ```ts
   * // Start a blank conversation
   * await element.createConversation();
   *
   * // Start a conversation with skill context
   * await element.createConversation({
   *   context: { skillId: 'abc123', skillParams: { task_table: 'incident' } },
   * });
   *
   * // Start a conversation with a VA topic
   * await element.createConversation({ context: { topicId: 'topic-sys-id' } });
   * ```
   */
  createConversation = this.createDeferredMethod();
  /**
   * Deferred method for programmatically setting the message input text.
   *
   * Call this after `setSession` has completed and the session is connected.
   * If called before the session is connected, the call will be queued.
   *
   * @param input - The text to set in the message input field.
   *
   * @example
   * ```ts
   * await element.setInput('Hello, how can I help?');
   * ```
   */
  setInput = this.createDeferredMethod();
  /**
   * Deferred method that programmatically starts voice input recording.
   *
   * Intended for host keyboard shortcuts (e.g. NAP's Opt+Shift+V): the shell
   * detects the keystroke and calls this method instead of toggling a property.
   * Modeled on the other element methods (`setInput`, `invokeSkill`) — the host
   * calls a function that does what it says rather than bumping a counter prop.
   *
   * Gated by `enableVoiceInput`: when voice input is unavailable the mic isn't
   * mounted, so the call is a no-op. A call made before the chat tree has
   * rendered the mic is also dropped (there is nothing to start yet); for a
   * shortcut inside a loaded chat the tree is already mounted.
   *
   * @example
   * ```ts
   * const el = document.querySelector('now-lbf-chat-client');
   * el.startVoiceInput(); // on Opt+Shift+V
   * ```
   */
  startVoiceInput = this.createDeferredMethod();
  /**
   * Deferred method that asks the chat client to refresh its conversation list
   * from the server.
   *
   * Call this when an out-of-band signal (e.g. a Polaris/AIEX notification that
   * the off-glide NAP unread count changed) suggests the server has new
   * conversation state that the chat client hasn't seen via its SSE stream.
   *
   * Calls are coalesced internally with single-flight semantics: the leading
   * call fires immediately, additional calls during the in-flight fetch
   * collapse into one trailing fetch so we never overlap requests against
   * the slow `listThreads` endpoint. Safe to fire repeatedly. The returned
   * promise resolves when the call has been accepted by the chat client,
   * not when the underlying network fetch completes.
   *
   * @example
   * ```ts
   * // In AIEX, after receiving the Polaris unread count event:
   * await lbfClientRef.value?.refreshConversationList();
   * ```
   */
  refreshConversationList = this.createDeferredMethod();
  /**
   * Internal deferred method for focusing the message input.
   * This is bound in App.tsx to the actual focus implementation.
   * @internal
   */
  _focusInputDeferred = this.createDeferredMethod();
  /**
   * Override the native focus() method to focus the message input field inside the shadow root.
   * This provides compatibility with parent components that call .focus() on the web component.
   *
   * @example
   * ```ts
   * // Focus the input from external code
   * const chatClient = document.querySelector('now-lbf-chat-client');
   * chatClient.focus();
   * ```
   */
  focus() {
    this._focusInputDeferred();
  }
  /**
   * Ask the native mobile app (if any) for the search handoff context the
   * user kicked off chat with. Returns `null` on web hosts, on older native
   * apps without the handoff plugin, or when no handoff is stashed.
   *
   * Intended for host pages that bridge between native search and chat
   * (e.g. mobilesky's `sn_nowassist_va_now_assist_mobile_chat.do`). The
   * page calls this once before `setSession` and merges the result into
   * `newConversationContext`, instead of inlining its own Cabrillo shim.
   *
   * Direct call (not deferred) because the bridge talks to native via
   * `webkit.messageHandlers` / `CabrilloClient`, both of which are wired
   * up by the native app before the page loads (no queue needed).
   *
   * @example
   * ```ts
   * const handoff = await element.requestSearchHandoff();
   * await element.setSession({
   *   session: { authToken, userId, newConversationContext: handoff ?? undefined },
   * });
   * ```
   */
  async requestSearchHandoff() {
    return wh.getSearchHandoff();
  }
  /**
   * Render the Preact App component
   */
  renderPreactComponent() {
    const { resolvedValues: a, isLegacyModeDetected: t } = this._constraintResult, n = a.mode ?? "primary", r = {
      // Core Mode & Layout
      componentId: this.componentId,
      mode: n,
      isLegacyModeDetected: t,
      inputLayout: this.inputLayout,
      density: this.density,
      showChatPanelToggle: this.showChatPanelToggle,
      // Conversation Management
      conversationId: this.conversationId,
      forceNewConversation: this.forceNewConversation,
      channel: this.channel,
      // Header Configuration
      disableHeader: this.disableHeader,
      disableContactMenu: this.disableContactMenu,
      showViewToggleButton: this.showViewToggleButton,
      viewExpanded: this.viewExpanded,
      showCloseButton: this.showCloseButton,
      showHistoryButton: this.showHistoryButton,
      showConversationTitle: this.showConversationTitle,
      alwaysShowFirstUtterance: this.alwaysShowFirstUtterance,
      activeWidgetId: this.activeWidgetId,
      // Sidebar Control
      leftSidebarOpenedManaged: this.leftSidebarOpenedManaged,
      leftSidebarOpened: this.leftSidebarOpened,
      // Promoted Topics (omni mode)
      showPromotedTopics: this.showPromotedTopics,
      // Feature Toggles
      enablePinnable: this.enablePinnable ?? !1,
      enableVoiceInput: this.enableVoiceInput ?? !0,
      enableAgentMessageActions: this.enableAgentMessageActions,
      enableFilePreview: this.enableFilePreview,
      acceptedAttachmentTypes: this.acceptedAttachmentTypes,
      enablePageHistory: this.enablePageHistory ?? !1,
      enableIntroBanner: this.enableIntroBanner ?? !1,
      hideNewChatOnClosed: this.hideNewChatOnClosed,
      readOnly: this.readOnly ?? !1,
      // Internationalization
      language: this.language,
      // Branding
      branding: this.branding,
      // Accessibility
      ariaConfig: this.ariaConfig,
      // Search Handoff
      newConversationContext: this.newConversationContext,
      // Layout Overrides
      maxVisibleTopics: this.maxVisibleTopics,
      // Guard Callbacks
      onSwitchOrNewConversation: this.onSwitchOrNewConversation
    };
    return /* @__PURE__ */ s(e2, { ...r });
  }
}
Eh(a2, "now-lbf-chat-client", {
  defaultShadowMode: "closed"
});
B(
  "App",
  `Build Timestamp: 2026-08-06T18:45:16.853Z
Built: ${(/* @__PURE__ */ new Date("2026-08-06T18:45:16.853Z")).toLocaleString()}`
);
export {
  Ph as C,
  vy as a,
  r2 as c,
  i2 as g,
  yt as s,
  Ln as u
};
//# sourceMappingURL=main-ClrKLtPy.js.map
