import { e as W } from "./WidgetRenderer-C4Xp1hhZ.js";
import { C as z } from "./main-ClrKLtPy.js";
function j(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const r = document.implementation.createHTMLDocument(), n = r.createElement("base"), o = r.createElement("a");
  return r.head.appendChild(n), r.body.appendChild(o), e && (n.href = e), o.href = t, o.href;
}
const q = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function g(t) {
  const e = [];
  for (let r = 0, n = t.length; r < n; r++)
    e.push(t[r]);
  return e;
}
let m = null;
function k(t = {}) {
  return m || (t.includeStyleProperties ? (m = t.includeStyleProperties, m) : (m = g(window.getComputedStyle(document.documentElement)), m));
}
function w(t, e) {
  const n = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return n ? parseFloat(n.replace("px", "")) : 0;
}
function B(t) {
  const e = w(t, "border-left-width"), r = w(t, "border-right-width");
  return t.clientWidth + e + r;
}
function G(t) {
  const e = w(t, "border-top-width"), r = w(t, "border-bottom-width");
  return t.clientHeight + e + r;
}
function v(t, e = {}) {
  const r = e.width || B(t), n = e.height || G(t);
  return { width: r, height: n };
}
function X() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const r = e && e.env ? e.env.devicePixelRatio : null;
  return r && (t = parseInt(r, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const u = 16384;
function K(t) {
  (t.width > u || t.height > u) && (t.width > u && t.height > u ? t.width > t.height ? (t.height *= u / t.width, t.width = u) : (t.width *= u / t.height, t.height = u) : t.width > u ? (t.height *= u / t.width, t.width = u) : (t.width *= u / t.height, t.height = u));
}
function y(t) {
  return new Promise((e, r) => {
    const n = new Image();
    n.onload = () => {
      n.decode().then(() => {
        requestAnimationFrame(() => e(n));
      });
    }, n.onerror = r, n.crossOrigin = "anonymous", n.decoding = "async", n.src = t;
  });
}
async function J(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Q(t, e, r) {
  const n = "http://www.w3.org/2000/svg", o = document.createElementNS(n, "svg"), i = document.createElementNS(n, "foreignObject");
  return o.setAttribute("width", `${e}`), o.setAttribute("height", `${r}`), o.setAttribute("viewBox", `0 0 ${e} ${r}`), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("x", "0"), i.setAttribute("y", "0"), i.setAttribute("externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(t), J(o);
}
const l = (t, e) => {
  if (t instanceof e)
    return !0;
  const r = Object.getPrototypeOf(t);
  return r === null ? !1 : r.constructor.name === e.name || l(r, e);
};
function Y(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Z(t, e) {
  return k(e).map((r) => {
    const n = t.getPropertyValue(r), o = t.getPropertyPriority(r);
    return `${r}: ${n}${o ? " !important" : ""};`;
  }).join(" ");
}
function N(t, e, r, n) {
  const o = `.${t}:${e}`, i = r.cssText ? Y(r) : Z(r, n);
  return document.createTextNode(`${o}{${i}}`);
}
function C(t, e, r, n) {
  const o = window.getComputedStyle(t, r), i = o.getPropertyValue("content");
  if (i === "" || i === "none")
    return;
  const s = q();
  try {
    e.className = `${e.className} ${s}`;
  } catch {
    return;
  }
  const a = document.createElement("style");
  a.appendChild(N(s, r, o, n)), e.appendChild(a);
}
function tt(t, e, r) {
  C(t, e, ":before", r), C(t, e, ":after", r);
}
const P = "application/font-woff", T = "image/jpeg", et = {
  woff: P,
  woff2: P,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: T,
  jpeg: T,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function rt(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function E(t) {
  const e = rt(t).toLowerCase();
  return et[e] || "";
}
function nt(t) {
  return t.split(/,/)[1];
}
function x(t) {
  return t.search(/^(data:)/) !== -1;
}
function it(t, e) {
  return `data:${e};base64,${t}`;
}
async function A(t, e, r) {
  const n = await fetch(t, e);
  if (n.status === 404)
    throw new Error(`Resource "${n.url}" not found`);
  const o = await n.blob();
  return new Promise((i, s) => {
    const a = new FileReader();
    a.onerror = s, a.onloadend = () => {
      try {
        i(r({ res: n, result: a.result }));
      } catch (c) {
        s(c);
      }
    }, a.readAsDataURL(o);
  });
}
const S = {};
function ot(t, e, r) {
  let n = t.replace(/\?.*/, "");
  return r && (n = t), /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")), e ? `[${e}]${n}` : n;
}
async function R(t, e, r) {
  const n = ot(t, e, r.includeQueryParams);
  if (S[n] != null)
    return S[n];
  r.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const i = await A(t, r.fetchRequestInit, ({ res: s, result: a }) => (e || (e = s.headers.get("Content-Type") || ""), nt(a)));
    o = it(i, e);
  } catch (i) {
    o = r.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${t}`;
    i && (s = typeof i == "string" ? i : i.message), s && console.warn(s);
  }
  return S[n] = o, o;
}
async function st(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : y(e);
}
async function at(t, e) {
  if (t.currentSrc) {
    const i = document.createElement("canvas"), s = i.getContext("2d");
    i.width = t.clientWidth, i.height = t.clientHeight, s?.drawImage(t, 0, 0, i.width, i.height);
    const a = i.toDataURL();
    return y(a);
  }
  const r = t.poster, n = E(r), o = await R(r, n, e);
  return y(o);
}
async function ct(t, e) {
  var r;
  try {
    if (!((r = t?.contentDocument) === null || r === void 0) && r.body)
      return await p(t.contentDocument.body, e, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function lt(t, e) {
  return l(t, HTMLCanvasElement) ? st(t) : l(t, HTMLVideoElement) ? at(t, e) : l(t, HTMLIFrameElement) ? ct(t, e) : t.cloneNode(H(t));
}
const ut = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT", H = (t) => t.tagName != null && t.tagName.toUpperCase() === "SVG";
async function ft(t, e, r) {
  var n, o;
  if (H(e))
    return e;
  let i = [];
  return ut(t) && t.assignedNodes ? i = g(t.assignedNodes()) : l(t, HTMLIFrameElement) && (!((n = t.contentDocument) === null || n === void 0) && n.body) ? i = g(t.contentDocument.body.childNodes) : i = g(((o = t.shadowRoot) !== null && o !== void 0 ? o : t).childNodes), i.length === 0 || l(t, HTMLVideoElement) || await i.reduce((s, a) => s.then(() => p(a, r)).then((c) => {
    c && e.appendChild(c);
  }), Promise.resolve()), e;
}
function ht(t, e, r) {
  const n = e.style;
  if (!n)
    return;
  const o = window.getComputedStyle(t);
  o.cssText ? (n.cssText = o.cssText, n.transformOrigin = o.transformOrigin) : k(r).forEach((i) => {
    let s = o.getPropertyValue(i);
    i === "font-size" && s.endsWith("px") && (s = `${Math.floor(parseFloat(s.substring(0, s.length - 2))) - 0.1}px`), l(t, HTMLIFrameElement) && i === "display" && s === "inline" && (s = "block"), i === "d" && e.getAttribute("d") && (s = `path(${e.getAttribute("d")})`), n.setProperty(i, s, o.getPropertyPriority(i));
  });
}
function gt(t, e) {
  l(t, HTMLTextAreaElement) && (e.innerHTML = t.value), l(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function mt(t, e) {
  if (l(t, HTMLSelectElement)) {
    const n = Array.from(e.children).find((o) => t.value === o.getAttribute("value"));
    n && n.setAttribute("selected", "");
  }
}
function dt(t, e, r) {
  return l(e, Element) && (ht(t, e, r), tt(t, e, r), gt(t, e), mt(t, e)), e;
}
async function wt(t, e) {
  const r = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (r.length === 0)
    return t;
  const n = {};
  for (let i = 0; i < r.length; i++) {
    const a = r[i].getAttribute("xlink:href");
    if (a) {
      const c = t.querySelector(a), f = document.querySelector(a);
      !c && f && !n[a] && (n[a] = await p(f, e, !0));
    }
  }
  const o = Object.values(n);
  if (o.length) {
    const i = "http://www.w3.org/1999/xhtml", s = document.createElementNS(i, "svg");
    s.setAttribute("xmlns", i), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const a = document.createElementNS(i, "defs");
    s.appendChild(a);
    for (let c = 0; c < o.length; c++)
      a.appendChild(o[c]);
    t.appendChild(s);
  }
  return t;
}
async function p(t, e, r) {
  return !r && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((n) => lt(n, e)).then((n) => ft(t, n, e)).then((n) => dt(t, n, e)).then((n) => wt(n, e));
}
const O = /url\((['"]?)([^'"]+?)\1\)/g, yt = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, pt = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function bt(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function St(t) {
  const e = [];
  return t.replace(O, (r, n, o) => (e.push(o), r)), e.filter((r) => !x(r));
}
async function xt(t, e, r, n, o) {
  try {
    const i = r ? j(e, r) : e, s = E(e);
    let a;
    return o || (a = await R(i, s, n)), t.replace(bt(e), `$1${a}$3`);
  } catch {
  }
  return t;
}
function Et(t, { preferredFontFormat: e }) {
  return e ? t.replace(pt, (r) => {
    for (; ; ) {
      const [n, , o] = yt.exec(r) || [];
      if (!o)
        return "";
      if (o === e)
        return `src: ${n};`;
    }
  }) : t;
}
function U(t) {
  return t.search(O) !== -1;
}
async function D(t, e, r) {
  if (!U(t))
    return t;
  const n = Et(t, r);
  return St(n).reduce((i, s) => i.then((a) => xt(a, s, e, r)), Promise.resolve(n));
}
async function d(t, e, r) {
  var n;
  const o = (n = e.style) === null || n === void 0 ? void 0 : n.getPropertyValue(t);
  if (o) {
    const i = await D(o, null, r);
    return e.style.setProperty(t, i, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function Rt(t, e) {
  await d("background", t, e) || await d("background-image", t, e), await d("mask", t, e) || await d("-webkit-mask", t, e) || await d("mask-image", t, e) || await d("-webkit-mask-image", t, e);
}
async function Ct(t, e) {
  const r = l(t, HTMLImageElement);
  if (!(r && !x(t.src)) && !(l(t, SVGImageElement) && !x(t.href.baseVal)))
    return;
  const n = r ? t.src : t.href.baseVal, o = await R(n, E(n), e);
  await new Promise((i, s) => {
    t.onload = i, t.onerror = e.onImageErrorHandler ? (...c) => {
      try {
        i(e.onImageErrorHandler(...c));
      } catch (f) {
        s(f);
      }
    } : s;
    const a = t;
    a.decode && (a.decode = i), a.loading === "lazy" && (a.loading = "eager"), r ? (t.srcset = "", t.src = o) : t.href.baseVal = o;
  });
}
async function Pt(t, e) {
  const n = g(t.childNodes).map((o) => M(o, e));
  await Promise.all(n).then(() => t);
}
async function M(t, e) {
  l(t, Element) && (await Rt(t, e), await Ct(t, e), await Pt(t, e));
}
function Tt(t, e) {
  const { style: r } = t;
  e.backgroundColor && (r.backgroundColor = e.backgroundColor), e.width && (r.width = `${e.width}px`), e.height && (r.height = `${e.height}px`);
  const n = e.style;
  return n != null && Object.keys(n).forEach((o) => {
    r[o] = n[o];
  }), t;
}
const $ = {};
async function L(t) {
  let e = $[t];
  if (e != null)
    return e;
  const n = await (await fetch(t)).text();
  return e = { url: t, cssText: n }, $[t] = e, e;
}
async function F(t, e) {
  let r = t.cssText;
  const n = /url\(["']?([^"')]+)["']?\)/g, i = (r.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let a = s.replace(n, "$1");
    return a.startsWith("https://") || (a = new URL(a, t.url).href), A(a, e.fetchRequestInit, ({ result: c }) => (r = r.replace(s, `url(${c})`), [s, c]));
  });
  return Promise.all(i).then(() => r);
}
function I(t) {
  if (t == null)
    return [];
  const e = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let n = t.replace(r, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const c = o.exec(n);
    if (c === null)
      break;
    e.push(c[0]);
  }
  n = n.replace(o, "");
  const i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", a = new RegExp(s, "gi");
  for (; ; ) {
    let c = i.exec(n);
    if (c === null) {
      if (c = a.exec(n), c === null)
        break;
      i.lastIndex = a.lastIndex;
    } else
      a.lastIndex = i.lastIndex;
    e.push(c[0]);
  }
  return e;
}
async function $t(t, e) {
  const r = [], n = [];
  return t.forEach((o) => {
    if ("cssRules" in o)
      try {
        g(o.cssRules || []).forEach((i, s) => {
          if (i.type === CSSRule.IMPORT_RULE) {
            let a = s + 1;
            const c = i.href, f = L(c).then((h) => F(h, e)).then((h) => I(h).forEach((b) => {
              try {
                o.insertRule(b, b.startsWith("@import") ? a += 1 : o.cssRules.length);
              } catch (_) {
                console.error("Error inserting rule from remote css", {
                  rule: b,
                  error: _
                });
              }
            })).catch((h) => {
              console.error("Error loading remote css", h.toString());
            });
            n.push(f);
          }
        });
      } catch (i) {
        const s = t.find((a) => a.href == null) || document.styleSheets[0];
        o.href != null && n.push(L(o.href).then((a) => F(a, e)).then((a) => I(a).forEach((c) => {
          s.insertRule(c, s.cssRules.length);
        })).catch((a) => {
          console.error("Error loading remote stylesheet", a);
        })), console.error("Error inlining remote css file", i);
      }
  }), Promise.all(n).then(() => (t.forEach((o) => {
    if ("cssRules" in o)
      try {
        g(o.cssRules || []).forEach((i) => {
          r.push(i);
        });
      } catch (i) {
        console.error(`Error while reading CSS rules from ${o.href}`, i);
      }
  }), r));
}
function Lt(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => U(e.style.getPropertyValue("src")));
}
async function Ft(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = g(t.ownerDocument.styleSheets), n = await $t(r, e);
  return Lt(n);
}
function V(t) {
  return t.trim().replace(/["']/g, "");
}
function It(t) {
  const e = /* @__PURE__ */ new Set();
  function r(n) {
    (n.style.fontFamily || getComputedStyle(n).fontFamily).split(",").forEach((i) => {
      e.add(V(i));
    }), Array.from(n.children).forEach((i) => {
      i instanceof HTMLElement && r(i);
    });
  }
  return r(t), e;
}
async function kt(t, e) {
  const r = await Ft(t, e), n = It(t);
  return (await Promise.all(r.filter((i) => n.has(V(i.style.fontFamily))).map((i) => {
    const s = i.parentStyleSheet ? i.parentStyleSheet.href : null;
    return D(i.cssText, s, e);
  }))).join(`
`);
}
async function vt(t, e) {
  const r = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await kt(t, e);
  if (r) {
    const n = document.createElement("style"), o = document.createTextNode(r);
    n.appendChild(o), t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n);
  }
}
async function At(t, e = {}) {
  const { width: r, height: n } = v(t, e), o = await p(t, e, !0);
  return await vt(o, e), await M(o, e), Tt(o, e), await Q(o, r, n);
}
async function Ht(t, e = {}) {
  const { width: r, height: n } = v(t, e), o = await At(t, e), i = await y(o), s = document.createElement("canvas"), a = s.getContext("2d"), c = e.pixelRatio || X(), f = e.canvasWidth || r, h = e.canvasHeight || n;
  return s.width = f * c, s.height = h * c, e.skipAutoScale || K(s), s.style.width = `${f}`, s.style.height = `${h}`, e.backgroundColor && (a.fillStyle = e.backgroundColor, a.fillRect(0, 0, s.width, s.height)), a.drawImage(i, 0, 0, s.width, s.height), s;
}
async function Ot(t, e = {}) {
  return (await Ht(t, e)).toDataURL();
}
const Ut = 5e3, Dt = 2, Mt = [
  // Layout — flex
  "display",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "float",
  "clear",
  "flex-direction",
  "flex-wrap",
  "flex-grow",
  "flex-shrink",
  "flex-basis",
  "justify-content",
  "align-items",
  "align-self",
  "align-content",
  "order",
  "gap",
  "row-gap",
  "column-gap",
  "overflow",
  "overflow-x",
  "overflow-y",
  "z-index",
  "box-sizing",
  "vertical-align",
  // Layout — grid
  "grid-template-columns",
  "grid-template-rows",
  "grid-template-areas",
  "grid-column",
  "grid-column-start",
  "grid-column-end",
  "grid-row",
  "grid-row-start",
  "grid-row-end",
  "grid-auto-flow",
  "grid-auto-columns",
  "grid-auto-rows",
  "place-items",
  "place-content",
  "place-self",
  // Dimensions
  "width",
  "height",
  "min-width",
  "min-height",
  "max-width",
  "max-height",
  "margin",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "padding",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  // Typography
  "font-family",
  "font-size",
  "font-weight",
  "font-style",
  "line-height",
  "letter-spacing",
  "text-align",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-style",
  "text-transform",
  "text-indent",
  "white-space",
  "word-break",
  "word-wrap",
  "word-spacing",
  "color",
  "text-overflow",
  "direction",
  "unicode-bidi",
  // Background & borders
  "background",
  "background-color",
  "background-image",
  "background-size",
  "background-position",
  "background-repeat",
  "background-clip",
  "border",
  "border-top",
  "border-right",
  "border-bottom",
  "border-left",
  "border-width",
  "border-style",
  "border-color",
  "border-radius",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-collapse",
  "border-spacing",
  "box-shadow",
  "outline",
  "outline-color",
  "outline-style",
  "outline-width",
  "outline-offset",
  // Visual
  "opacity",
  "visibility",
  "transform",
  "transform-origin",
  "clip-path",
  "object-fit",
  "object-position",
  "list-style",
  "list-style-type",
  "list-style-position",
  "table-layout",
  "cursor",
  "pointer-events",
  "user-select",
  "fill",
  "stroke",
  "stroke-width"
];
async function Wt(t) {
  const e = t.offsetWidth, r = t.offsetHeight;
  if (e === 0 || r === 0)
    throw new Error(
      `Cannot capture widget screenshot: element has zero dimensions (${e}×${r})`
    );
  const n = new AbortController(), o = setTimeout(() => n.abort(), Ut);
  try {
    return { dataUrl: await Ot(t, {
      pixelRatio: Dt,
      skipFonts: !0,
      imagePlaceholder: "",
      includeStyleProperties: Mt,
      fetchRequestInit: { signal: n.signal },
      // Library types filter param as HTMLElement but invokes with text nodes too — guard is required.
      filter: (s) => s instanceof Element ? !s.matches(z) : !0
    }), displayWidth: e, displayHeight: r };
  } catch (i) {
    throw W("WidgetScreenshot", "Failed to capture widget screenshot:", i), i;
  } finally {
    clearTimeout(o);
  }
}
export {
  Wt as captureWidgetScreenshot
};
//# sourceMappingURL=widgetScreenshot-DeMEfWUd.js.map
