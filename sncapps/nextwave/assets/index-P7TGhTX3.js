import { f2 as Lo, f3 as Mo, f4 as $, f5 as b, f6 as m, f7 as Fo } from "./WidgetRenderer-C4Xp1hhZ.js";
let jt = class extends Event {
  constructor(e, o, r, i) {
    super("context-request", { bubbles: !0, composed: !0 }), this.context = e, this.contextTarget = o, this.callback = r, this.subscribe = i ?? !1;
  }
};
let bt = class {
  constructor(e, o, r, i) {
    if (this.subscribe = !1, this.provided = !1, this.value = void 0, this.t = (a, n) => {
      this.unsubscribe && (this.unsubscribe !== n && (this.provided = !1, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = a, this.host.requestUpdate(), this.provided && !this.subscribe || (this.provided = !0, this.callback && this.callback(a, n)), this.unsubscribe = n;
    }, this.host = e, o.context !== void 0) {
      const a = o;
      this.context = a.context, this.callback = a.callback, this.subscribe = a.subscribe ?? !1;
    } else this.context = o, this.callback = r, this.subscribe = i ?? !1;
    this.host.addController(this);
  }
  hostConnected() {
    this.dispatchRequest();
  }
  hostDisconnected() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0);
  }
  dispatchRequest() {
    this.host.dispatchEvent(new jt(this.context, this.host, this.t, this.subscribe));
  }
};
let No = class {
  get value() {
    return this.o;
  }
  set value(e) {
    this.setValue(e);
  }
  setValue(e, o = !1) {
    const r = o || !Object.is(e, this.o);
    this.o = e, r && this.updateObservers();
  }
  constructor(e) {
    this.subscriptions = /* @__PURE__ */ new Map(), this.updateObservers = () => {
      for (const [o, { disposer: r }] of this.subscriptions) o(this.o, r);
    }, e !== void 0 && (this.value = e);
  }
  addCallback(e, o, r) {
    if (!r) return void e(this.value);
    this.subscriptions.has(e) || this.subscriptions.set(e, { disposer: () => {
      this.subscriptions.delete(e);
    }, consumerHost: o });
    const { disposer: i } = this.subscriptions.get(e);
    e(this.value, i);
  }
  clearCallbacks() {
    this.subscriptions.clear();
  }
};
let jo = class extends Event {
  constructor(e, o) {
    super("context-provider", { bubbles: !0, composed: !0 }), this.context = e, this.contextTarget = o;
  }
}, mt = class extends No {
  constructor(e, o, r) {
    super(o.context !== void 0 ? o.initialValue : r), this.onContextRequest = (i) => {
      if (i.context !== this.context) return;
      const a = i.contextTarget ?? i.composedPath()[0];
      a !== this.host && (i.stopPropagation(), this.addCallback(i.callback, a, i.subscribe));
    }, this.onProviderRequest = (i) => {
      if (i.context !== this.context || (i.contextTarget ?? i.composedPath()[0]) === this.host) return;
      const a = /* @__PURE__ */ new Set();
      for (const [n, { consumerHost: s }] of this.subscriptions) a.has(n) || (a.add(n), s.dispatchEvent(new jt(this.context, s, n, !0)));
      i.stopPropagation();
    }, this.host = e, o.context !== void 0 ? this.context = o.context : this.context = o, this.attachListeners(), this.host.addController?.(this);
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest), this.host.addEventListener("context-provider", this.onProviderRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new jo(this.context, this.host));
  }
};
const Bt = { CHILD: 2 }, Vt = (t) => (...e) => ({ _$litDirective$: t, values: e });
class qt {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, o, r) {
    this._$Ct = e, this._$AM = o, this._$Ci = r;
  }
  _$AS(e, o) {
    return this.update(e, o);
  }
  update(e, o) {
    return this.render(...o);
  }
}
const { I: Bo } = Lo, Vo = (t) => t.strings === void 0, gt = () => document.createComment(""), le = (t, e, o) => {
  const r = t._$AA.parentNode, i = e === void 0 ? t._$AB : e._$AA;
  if (o === void 0) {
    const a = r.insertBefore(gt(), i), n = r.insertBefore(gt(), i);
    o = new Bo(a, n, t, t.options);
  } else {
    const a = o._$AB.nextSibling, n = o._$AM, s = n !== t;
    if (s) {
      let l;
      o._$AQ?.(t), o._$AM = t, o._$AP !== void 0 && (l = t._$AU) !== n._$AU && o._$AP(l);
    }
    if (a !== i || s) {
      let l = o._$AA;
      for (; l !== a; ) {
        const d = l.nextSibling;
        r.insertBefore(l, i), l = d;
      }
    }
  }
  return o;
}, W = (t, e, o = t) => (t._$AI(e, o), t), qo = {}, Ho = (t, e = qo) => t._$AH = e, Uo = (t) => t._$AH, Me = (t) => {
  t._$AR(), t._$AA.remove();
};
const ft = (t, e, o) => {
  const r = /* @__PURE__ */ new Map();
  for (let i = e; i <= o; i++) r.set(t[i], i);
  return r;
}, vt = Vt(class extends qt {
  constructor(t) {
    if (super(t), t.type !== Bt.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(t, e, o) {
    let r;
    o === void 0 ? o = e : e !== void 0 && (r = e);
    const i = [], a = [];
    let n = 0;
    for (const s of t) i[n] = r ? r(s, n) : n, a[n] = o(s, n), n++;
    return { values: a, keys: i };
  }
  render(t, e, o) {
    return this.dt(t, e, o).values;
  }
  update(t, [e, o, r]) {
    const i = Uo(t), { values: a, keys: n } = this.dt(e, o, r);
    if (!Array.isArray(i)) return this.ut = n, a;
    const s = this.ut ??= [], l = [];
    let d, p, h = 0, u = i.length - 1, c = 0, g = a.length - 1;
    for (; h <= u && c <= g; ) if (i[h] === null) h++;
    else if (i[u] === null) u--;
    else if (s[h] === n[c]) l[c] = W(i[h], a[c]), h++, c++;
    else if (s[u] === n[g]) l[g] = W(i[u], a[g]), u--, g--;
    else if (s[h] === n[g]) l[g] = W(i[h], a[g]), le(t, l[g + 1], i[h]), h++, g--;
    else if (s[u] === n[c]) l[c] = W(i[u], a[c]), le(t, i[h], i[u]), u--, c++;
    else if (d === void 0 && (d = ft(n, c, g), p = ft(s, h, u)), d.has(s[h])) if (d.has(s[u])) {
      const v = p.get(n[c]), x = v !== void 0 ? i[v] : null;
      if (x === null) {
        const y = le(t, i[h]);
        W(y, a[c]), l[c] = y;
      } else l[c] = W(x, a[c]), le(t, i[h], x), i[v] = null;
      c++;
    } else Me(i[u]), u--;
    else Me(i[h]), h++;
    for (; c <= g; ) {
      const v = le(t, l[g + 1]);
      W(v, a[c]), l[c++] = v;
    }
    for (; h <= u; ) {
      const v = i[h++];
      v !== null && Me(v);
    }
    return this.ut = n, Ho(t, l), Mo;
  }
});
const Go = (t) => t ?? $;
const de = (t, e) => {
  const o = t._$AN;
  if (o === void 0) return !1;
  for (const r of o) r._$AO?.(e, !1), de(r, e);
  return !0;
}, we = (t) => {
  let e, o;
  do {
    if ((e = t._$AM) === void 0) break;
    o = e._$AN, o.delete(t), t = e;
  } while (o?.size === 0);
}, Ht = (t) => {
  for (let e; e = t._$AM; t = e) {
    let o = e._$AN;
    if (o === void 0) e._$AN = o = /* @__PURE__ */ new Set();
    else if (o.has(t)) break;
    o.add(t), Qo(e);
  }
};
function Ko(t) {
  this._$AN !== void 0 ? (we(this), this._$AM = t, Ht(this)) : this._$AM = t;
}
function Wo(t, e = !1, o = 0) {
  const r = this._$AH, i = this._$AN;
  if (i !== void 0 && i.size !== 0) if (e) if (Array.isArray(r)) for (let a = o; a < r.length; a++) de(r[a], !1), we(r[a]);
  else r != null && (de(r, !1), we(r));
  else de(this, t);
}
const Qo = (t) => {
  t.type == Bt.CHILD && (t._$AP ??= Wo, t._$AQ ??= Ko);
};
class Yo extends qt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, o, r) {
    super._$AT(e, o, r), Ht(this), this.isConnected = e._$AU;
  }
  _$AO(e, o = !0) {
    e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), o && (de(this, e), we(this));
  }
  setValue(e) {
    if (Vo(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const o = [...this._$Ct._$AH];
      o[this._$Ci] = e, this._$Ct._$AI(o, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const Ut = () => new Zo();
class Zo {
}
const Fe = /* @__PURE__ */ new WeakMap(), Gt = Vt(class extends Yo {
  render(t) {
    return $;
  }
  update(t, [e]) {
    const o = e !== this.G;
    return o && this.G !== void 0 && this.rt(void 0), (o || this.lt !== this.ct) && (this.G = e, this.ht = t.options?.host, this.rt(this.ct = t.element)), $;
  }
  rt(t) {
    if (this.isConnected || (t = void 0), typeof this.G == "function") {
      const e = this.ht ?? globalThis;
      let o = Fe.get(e);
      o === void 0 && (o = /* @__PURE__ */ new WeakMap(), Fe.set(e, o)), o.get(this.G) !== void 0 && this.G.call(this.ht, void 0), o.set(this.G, t), t !== void 0 && this.G.call(this.ht, t);
    } else this.G.value = t;
  }
  get lt() {
    return typeof this.G == "function" ? Fe.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
}), wt = `/*! tailwindcss v4.0.17 | MIT License | https://tailwindcss.com */@layer theme{:root,:host{--color-black:#000;--spacing:.25rem;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--radius-md:.375rem;--radius-lg:.5rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:initial;font-variation-settings:initial;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-feature-settings:initial;font-variation-settings:initial;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:color-mix(in oklab,currentColor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E");scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:root:not(span){overflow:var(--page-overflow)}:root{background:var(--page-scroll-bg,var(--root-bg));--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000),var(--root-bg,#0000))color-mix(in srgb,var(--root-bg,#0000),oklch(0% 0 0) calc(var(--page-has-backdrop,0)*40%));--page-scroll-transition-on:background-color .3s ease-out;transition:var(--page-scroll-transition);scrollbar-gutter:var(--page-scroll-gutter,unset);scrollbar-gutter:if(style(--page-has-scroll: 1): var(--page-scroll-gutter,unset); else: unset)}@keyframes set-page-has-scroll{0%,to{--page-has-scroll:1}}:root,[data-theme]{background:var(--page-scroll-bg,var(--root-bg));color:var(--color-base-content)}:where(:root,[data-theme]){--root-bg:var(--color-base-100)}}@layer components;@layer utilities{.\\@container{container-type:inline-size}@layer daisyui.l1.l2.l3{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;scrollbar-gutter:auto;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:clip}.modal::backdrop{display:none}.tooltip{--tt-bg:var(--color-neutral);--tt-off: calc(100% + .5rem) ;--tt-tail: calc(100% + 1px + .25rem) ;display:inline-block;position:relative}.tooltip>.tooltip-content,.tooltip[data-tip]:before{border-radius:var(--radius-field);text-align:center;white-space:normal;max-width:20rem;color:var(--color-neutral-content);opacity:0;background-color:var(--tt-bg);pointer-events:none;z-index:2;--tw-content:attr(data-tip);content:var(--tw-content);width:max-content;padding-block:.25rem;padding-inline:.5rem;font-size:.875rem;line-height:1.25;position:absolute}.tooltip:after{opacity:0;background-color:var(--tt-bg);content:"";pointer-events:none;--mask-tooltip:url("data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.500009 1C3.5 1 3.00001 4 5.00001 4C7 4 6.5 1 9.5 1C10 1 10 0.499897 10 0H0C-1.99338e-08 0.5 0 1 0.500009 1Z' fill='black'/%3E%3C/svg%3E%0A");width:.625rem;height:.25rem;-webkit-mask-position:-1px 0;mask-position:-1px 0;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-image:var(--mask-tooltip);mask-image:var(--mask-tooltip);display:block;position:absolute}@media(prefers-reduced-motion:no-preference){.tooltip>.tooltip-content,.tooltip[data-tip]:before,.tooltip:after{transition:opacity .2s cubic-bezier(.4,0,.2,1) 75ms,transform .2s cubic-bezier(.4,0,.2,1) 75ms}}:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))>.tooltip-content,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))[data-tip]:before,:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible)):after{opacity:1;--tt-pos:0rem}@media(prefers-reduced-motion:no-preference){:is(:is(.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))).tooltip-open,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):hover,.tooltip:is([data-tip]:not([data-tip=""]),:has(.tooltip-content:not(:empty))):has(:focus-visible))>.tooltip-content){transition:opacity .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1)}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;--tab-p:.75rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));--tab-radius-limit:min(var(--radius-field),var(--tab-radius-min));--tab-radius-grad:#0000 calc(69% - var(--border)),var(--tab-border-color)calc(69% - var(--border) + .25px),var(--tab-border-color)69%,var(--tab-bg) calc(69% + .25px) ;flex-wrap:wrap;order:var(--tab-order);height:var(--tab-height);padding-inline:var(--tab-p);border-color:#0000;justify-content:center;align-items:center;font-size:.875rem;display:inline-flex;position:relative}@media(hover:hover){.tab:hover{color:var(--color-base-content)}}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{--tw-content:attr(aria-label);content:var(--tw-content)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]))+.tab-content{display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu details{interpolate-size:allow-keywords;overflow:hidden}.menu details::details-content{block-size:0}@media(prefers-reduced-motion:no-preference){.menu details::details-content{transition-behavior:allow-discrete;transition-property:block-size,content-visibility;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}}.menu details[open]::details-content{block-size:auto}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:color-mix(in oklab,var(--color-base-content)10%,transparent);color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media(forced-colors:active){:is(.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:color-mix(in oklab,var(--color-base-content)10%,transparent);--tw-outline-style:none;outline-style:none;box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}@media(forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);outline-style:none}@media(forced-colors:active){:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active){outline-offset:2px;outline:2px solid #0000}}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:color-mix(in oklab,var(--color-base-content)20%,transparent)}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(:has(~[class*=dropdown-content])):focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.dropdown>:not(:has(~[class*=dropdown-content])):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown.dropdown-close .dropdown-content,.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content,.dropdown.dropdown-hover:not(:hover) [tabindex]:first-child:focus:not(:focus-visible)~.dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999}@media(prefers-reduced-motion:no-preference){:is(.dropdown[popover],.dropdown .dropdown-content){transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within) .dropdown-content,.dropdown:not(.dropdown-close).dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-close{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}:is(.dropdown[popover].dropdown-close,.dropdown[popover]:not(.dropdown-open,:popover-open)){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%));--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000);--btn-noise:var(--fx-noise);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@media(hover:hover){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:focus-visible,.btn:has(:focus-visible){isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%);--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%);--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0);translate:0 .5px}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio])[aria-label]:after{--tw-content:attr(aria-label);content:var(--tw-content)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.list{flex-direction:column;font-size:.875rem;display:flex}.list .list-row{--list-grid-cols:minmax(0,auto)1fr;border-radius:var(--radius-box);word-break:break-word;grid-auto-flow:column;grid-template-columns:var(--list-grid-cols);gap:1rem;padding:1rem;display:grid;position:relative}:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{content:"";border-bottom:var(--border)solid;inset-inline:var(--radius-box);border-color:color-mix(in oklab,var(--color-base-content)5%,transparent);position:absolute;bottom:0}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset;--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000);--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;transition:color .3s,grid-template-columns .2s;display:inline-grid;position:relative}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);width:100%;height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000);background-color:currentColor;background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@media(forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);font-size:max(var(--font-size,.875rem),.875rem);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-field,.25rem)*10);--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;display:inline-flex;position:relative}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){:is(.input :where(input):focus,.input :where(input):focus-within){outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-flex}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000);outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}@media(pointer:coarse){@supports (-webkit-touch-callout:none){.input:focus,.input:focus-within{--font-size:1rem}}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:color-mix(in oklab,var(--color-base-content)40%,transparent);box-shadow:none}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.input:has(>input[type=date]) :where(input[type=date]){webkit-appearance:none;appearance:none;display:inline-flex}.input:has(>input[type=date]) input[type=date]::-webkit-calendar-picker-indicator{cursor:pointer;width:1em;height:1em;position:absolute;inset-inline-end:.75em}.indicator{width:max-content;display:inline-flex;position:relative}.indicator :where(.indicator-item){z-index:1;white-space:nowrap;top:var(--indicator-t,0);bottom:var(--indicator-b,auto);left:var(--indicator-s,auto);right:var(--indicator-e,0);translate:var(--indicator-x,50%)var(--indicator-y,-50%);position:absolute}.table{border-collapse:separate;--tw-border-spacing-x: 0rem ;--tw-border-spacing-y: 0rem ;width:100%;border-spacing:var(--tw-border-spacing-x)var(--tw-border-spacing-y);border-radius:var(--radius-box);text-align:left;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media(hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:color-mix(in oklab,var(--color-base-content)60%,transparent);font-size:.875rem;font-weight:600}.table :where(tfoot tr:first-child :is(td,th)){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr :is(td,th),tbody tr:not(:last-child) :is(td,th)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:color-mix(in oklab,currentColor 10%,#0000);cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media(forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));background-color:var(--range-thumb);height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill));position:relative;top:50%;transform:translateY(-50%)}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100cqw) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100cqw*var(--range-fill));background-color:currentColor;position:relative;top:50%}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;white-space:nowrap;text-overflow:ellipsis;box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-color:var(--input-color);--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000);--size:calc(var(--size-field,.25rem)*10);background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:.75rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative;overflow:hidden}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}[dir=rtl] .select::picker(select){translate:.5rem}[dir=rtl] .select select::picker(select){translate:.5rem}.select[multiple]{background-image:none;height:auto;padding-block:.75rem;padding-inline-end:.75rem;overflow:auto}.select select{appearance:none;width:calc(100% + 2.75rem);height:calc(100% - calc(var(--border)*2));background:inherit;border-radius:inherit;border-style:none;align-items:center;margin-inline:-.75rem -1.75rem;padding-inline:.75rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){:is(.select select:focus,.select select:focus-within){outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000);outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:color-mix(in oklab,var(--color-base-content)40%,transparent)}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}@supports (appearance:base-select){:is(.select,.select select){appearance:base-select}:is(.select,.select select)::picker(select){appearance:base-select}}:is(.select,.select select)::picker(select){color:inherit;border:var(--border)solid var(--color-base-200);border-radius:var(--radius-box);background-color:inherit;max-height:min(24rem,70dvh);box-shadow:0 2px calc(var(--depth)*3px) -2px #0003;box-shadow:0 20px 25px -5px rgb(0 0 0/calc(var(--depth)*.1)),0 8px 10px -6px rgb(0 0 0/calc(var(--depth)*.1));margin-block:.5rem;margin-inline:.5rem;padding:.5rem;translate:-.5rem}:is(.select,.select select)::picker-icon{display:none}:is(.select,.select select) optgroup{padding-top:.5em}:is(.select,.select select) optgroup option:first-child{margin-top:.5em}:is(.select,.select select) option{border-radius:var(--radius-field);white-space:normal;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{cursor:pointer;background-color:color-mix(in oklab,var(--color-base-content)10%,transparent);--tw-outline-style:none;outline-style:none}@media(forced-colors:active){:is(:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible){outline-offset:2px;outline:2px solid #0000}}:is(.select,.select select) option:not(:disabled):active{background-color:var(--color-neutral);color:var(--color-neutral-content);box-shadow:0 2px calc(var(--depth)*3px) -2px var(--color-neutral)}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000));box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor}@media(prefers-reduced-motion:no-preference){:is(.radio:checked,.radio[aria-checked=true]){animation:.2s ease-out radio}}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media(forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.card{border-radius:var(--radius-box);outline-offset:2px;outline:0 solid #0000;flex-direction:column;transition:outline .2s ease-in-out;display:flex;position:relative}.card:focus{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.card:focus{outline-offset:2px;outline:2px solid #0000}}.card:focus-visible{outline-color:currentColor}.card :where(figure:first-child){border-start-start-radius:inherit;border-start-end-radius:inherit;border-end-end-radius:unset;border-end-start-radius:unset;overflow:hidden}.card :where(figure:last-child){border-start-start-radius:unset;border-start-end-radius:unset;border-end-end-radius:inherit;border-end-start-radius:inherit;overflow:hidden}.card figure{justify-content:center;align-items:center;display:flex}.card:has(>input:is(input[type=checkbox],input[type=radio])){cursor:pointer;-webkit-user-select:none;user-select:none}.card:has(>:checked){outline:2px solid}.textarea{border:var(--border)solid #0000;appearance:none;border-radius:var(--radius-field);background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);min-height:5rem;font-size:max(var(--font-size,.875rem),.875rem);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000);flex-shrink:1;padding-block:.5rem;padding-inline:.75rem}.textarea textarea{appearance:none;background-color:#0000;border:none}.textarea textarea:focus,.textarea textarea:focus-within{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){:is(.textarea textarea:focus,.textarea textarea:focus-within){outline-offset:2px;outline:2px solid #0000}}.textarea:focus,.textarea:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000);outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}@media(pointer:coarse){@supports (-webkit-touch-callout:none){.textarea:focus,.textarea:focus-within{--font-size:1rem}}}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:color-mix(in oklab,var(--color-base-content)40%,transparent);box-shadow:none}:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}.textarea:has(>textarea[disabled])>textarea[disabled]{cursor:not-allowed}.stack{grid-template-rows:3px 4px 1fr 4px 3px;grid-template-columns:3px 4px 1fr 4px 3px;display:inline-grid}.stack>*{width:100%;height:100%}.stack>:nth-child(n+2){opacity:.7;width:100%}.stack>:nth-child(2){z-index:2;opacity:.9}.stack>:first-child{z-index:3;width:100%}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{--tw-content:"×";content:var(--tw-content)}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:color-mix(in oklab,currentcolor 60%,transparent);align-items:center;gap:.375rem;display:inline-flex}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000);margin-inline:-.75rem .75rem}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000);margin-inline:.75rem -.75rem}.status{aspect-ratio:1;border-radius:var(--radius-selector);background-color:color-mix(in oklab,var(--color-base-content)20%,transparent);vertical-align:middle;width:.5rem;height:.5rem;color:color-mix(in oklab,var(--color-black)30%,transparent);background-position:50%;background-repeat:no-repeat;background-image:radial-gradient(circle at 35% 30%,oklch(1 0 0/calc(var(--depth)*.5)),#0000);box-shadow:0 2px 3px -1px color-mix(in oklab,currentColor calc(var(--depth)*100%),#0000);display:inline-block}.tabs{--tabs-height:auto;--tabs-direction:row;--tab-height:calc(var(--size-field,.25rem)*10);height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.card-body{padding:var(--card-p,1.5rem);font-size:var(--card-fs,.875rem);flex-direction:column;flex:auto;gap:.5rem;display:flex}.card-body :where(p){flex-grow:1}.alert{--alert-border-color:var(--color-base-200);border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));border-style:solid;grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.card-actions{flex-wrap:wrap;align-items:flex-start;gap:.5rem;display:flex}.skeleton{border-radius:var(--radius-box);background-color:var(--color-base-300);will-change:background-position;background-image:linear-gradient(105deg,#0000 0% 40%,var(--color-base-100)50%,#0000 60% 100%);background-position-x:-50%;background-size:200%}@media(prefers-reduced-motion:reduce){.skeleton{transition-duration:15s}}@media(prefers-reduced-motion:no-preference){.skeleton{animation:1.8s ease-in-out infinite skeleton}}}@layer daisyui.l1.l2{.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal{pointer-events:auto;visibility:visible;opacity:1;transition:visibility 0s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal) .modal-box{opacity:1;translate:0;scale:1}:root:has(:is(.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal)){--page-has-backdrop:1;--page-overflow:hidden;--page-scroll-bg:var(--page-scroll-bg-on);--page-scroll-gutter:stable;--page-scroll-transition:var(--page-scroll-transition-on);animation:forwards set-page-has-scroll;animation-timeline:scroll()}@starting-style{.modal.modal-open,.modal[open],.modal:target,.modal-toggle:checked+.modal{opacity:0}}.tooltip>.tooltip-content,.tooltip[data-tip]:before{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-off)50%}.tooltip:after{transform:translate(-50%)translateY(var(--tt-pos,.25rem));inset:auto auto var(--tt-tail)50%}.btn:disabled{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}.btn:disabled:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent);box-shadow:none}.btn[disabled]{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}.btn[disabled]:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent);box-shadow:none}.list .list-row:has(.list-col-grow:first-child){--list-grid-cols:1fr}.list .list-row:has(.list-col-grow:nth-child(2)){--list-grid-cols:minmax(0,auto)1fr}.list .list-row:has(.list-col-grow:nth-child(3)){--list-grid-cols:minmax(0,auto)minmax(0,auto)1fr}.list .list-row:has(.list-col-grow:nth-child(4)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list .list-row:has(.list-col-grow:nth-child(5)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list .list-row:has(.list-col-grow:nth-child(6)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list .list-row>*{grid-row-start:1}.tabs-border>.tab{--tab-border-color:#0000 #0000 var(--tab-border-color)#0000;border-radius:var(--radius-field);position:relative}.tabs-border>.tab:before{content:"";background-color:var(--tab-border-color);border-radius:var(--radius-field);width:80%;height:3px;transition:background-color .2s;position:absolute;bottom:0;left:10%}:is(.tabs-border>.tab:is(.tab-active,[aria-selected=true],[aria-current=true],[aria-current=page]):not(.tab-disabled,[disabled]),.tabs-border>.tab:is(input:checked),.tabs-border>.tab:is(label:has(:checked))):before{--tab-border-color:currentColor;border-top:3px solid}.radio:disabled{cursor:not-allowed;opacity:.2}:is(.stack,.stack.stack-bottom)>*{grid-area:3/3/6/4}:is(.stack,.stack.stack-bottom)>:nth-child(2){grid-area:2/2/5/5}:is(.stack,.stack.stack-bottom)>:first-child{grid-area:1/1/4/6}.stack.stack-top>*{grid-area:1/3/4/4}.stack.stack-top>:nth-child(2){grid-area:2/2/5/5}.stack.stack-top>:first-child{grid-area:3/1/6/6}.stack.stack-start>*{grid-area:3/1/4/4}.stack.stack-start>:nth-child(2){grid-area:2/2/5/5}.stack.stack-start>:first-child{grid-area:1/3/6/6}.stack.stack-end>*{grid-area:3/3/4/6}.stack.stack-end>:nth-child(2){grid-area:2/2/5/5}.stack.stack-end>:first-child{grid-area:1/1/6/4}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.btn-square{width:var(--size);height:var(--size);padding-inline:0}.loading-sm{width:calc(var(--size-selector,.25rem)*5)}.btn-md{--fontsize:.875rem;--btn-p:1rem;--size:calc(var(--size-field,.25rem)*10)}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-xs{--fontsize:.6875rem;--btn-p:.5rem;--size:calc(var(--size-field,.25rem)*6)}.card-border{border:var(--border)solid var(--color-base-200)}.loading-spinner{-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")}}.prose :where(a.btn:not(.btn-link)):not(:where([class~=not-prose],[class~=not-prose] *)){text-decoration-line:none}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.join{--join-ss:0;--join-se:0;--join-es:0;--join-ee:0;align-items:stretch;display:inline-flex}.join :where(.join-item){border-start-start-radius:var(--join-ss,0);border-start-end-radius:var(--join-se,0);border-end-end-radius:var(--join-ee,0);border-end-start-radius:var(--join-es,0)}.join :where(.join-item) *{--join-ss:var(--radius-field);--join-se:var(--radius-field);--join-es:var(--radius-field);--join-ee:var(--radius-field)}.join>.join-item:where(:first-child),.join :first-child:not(:last-child) :where(.join-item){--join-ss:var(--radius-field);--join-se:0;--join-es:var(--radius-field);--join-ee:0}.join>.join-item:where(:last-child),.join :last-child:not(:first-child) :where(.join-item){--join-ss:0;--join-se:var(--radius-field);--join-es:0;--join-ee:var(--radius-field)}.join>.join-item:where(:only-child),.join :only-child :where(.join-item){--join-ss:var(--radius-field);--join-se:var(--radius-field);--join-es:var(--radius-field);--join-ee:var(--radius-field)}.join>:where(:focus,:has(:focus)){z-index:1}@media(hover:hover){.join>:where(.btn:hover,:has(.btn:hover)){isolation:isolate}}.isolate{isolation:isolate}.container{width:100%}@media(width>=40rem){.container{max-width:40rem}}@media(width>=48rem){.container{max-width:48rem}}@media(width>=64rem){.container{max-width:64rem}}@media(width>=80rem){.container{max-width:80rem}}@media(width>=96rem){.container{max-width:96rem}}.ms-0\\.5{margin-inline-start:calc(var(--spacing)*.5)}.ms-1{margin-inline-start:calc(var(--spacing)*1)}.me-0\\.5{margin-inline-end:calc(var(--spacing)*.5)}.me-1{margin-inline-end:calc(var(--spacing)*1)}.mt-auto{margin-top:auto}.alert{border-width:var(--border);border-color:var(--alert-border-color,var(--color-base-200))}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-px{height:1px}.min-h-0{min-height:calc(var(--spacing)*0)}.w-3\\/4{width:75%}.w-5\\/6{width:83.3333%}.w-16{width:calc(var(--spacing)*16)}.w-20{width:calc(var(--spacing)*20)}.w-24{width:calc(var(--spacing)*24)}.w-28{width:calc(var(--spacing)*28)}.w-32{width:calc(var(--spacing)*32)}.w-40{width:calc(var(--spacing)*40)}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x)var(--tw-rotate-y)var(--tw-rotate-z)var(--tw-skew-x)var(--tw-skew-y)}.resize{resize:both}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.p-0{padding:calc(var(--spacing)*0)}.p-4{padding:calc(var(--spacing)*4)}.px-3{padding-inline:calc(var(--spacing)*3)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-4{padding-block:calc(var(--spacing)*4)}.pt-2{padding-top:calc(var(--spacing)*2)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-wrap{text-wrap:wrap}.whitespace-nowrap{white-space:nowrap}.text-base-content\\/40{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}.text-error{color:var(--color-error)}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentColor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}@layer daisyui.l1{.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn)){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn)):not(:disabled,[disabled],.btn-disabled){--btn-fg:var(--btn-color,currentColor);outline-color:currentColor}@media(hover:none){.btn-ghost:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color,currentColor);--btn-border:#0000;--btn-noise:none;outline-color:currentColor}}}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}}:root{--color-primary:initial;--color-primary-hover:initial;--color-primary-active:initial;--color-primary-content:initial;--color-secondary:initial;--color-secondary-hover:initial;--color-secondary-active:initial;--color-secondary-content:initial}:host([hidden]){display:none}.btn.btn-square{border-radius:var(--pm-border-radius-actionable,var(--radius-selector,var(--now-actionable--border-radius,6px)))}.btn.btn-ghost,.btn.btn-ghost:hover,.btn.btn-ghost:active,.btn.btn-ghost[aria-expanded=true],.btn.btn-ghost[aria-expanded=true]:hover{--btn-border:transparent;border-width:0;border-color:#0000}.btn.btn-ghost:hover,.btn.btn-ghost:focus,.btn.btn-ghost:focus-visible{background-color:var(--pm-bg-ghost-button-hover,var(--color-background-secondary-raised-hover,rgb(var(--now-color_surface--neutral-5,204,217,221))))}.btn.btn-ghost:active{background-color:var(--pm-bg-ghost-button-active,var(--color-background-secondary-raised-active,rgb(var(--now-color_surface--neutral-6,193,207,212))))}.btn.btn-ghost[aria-expanded=true],.btn.btn-ghost[aria-expanded=true]:hover{background-color:var(--pm-bg-ghost-button-trigger-active,var(--color-background-secondary-raised-hover,rgb(var(--now-color_surface--neutral-5,204,217,221))))}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rotator{89.9999%,to{--first-item-position:0 0%}90%,99.9999%{--first-item-position:0 calc(var(--items)*100%)}to{translate:0 -100%}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes menu{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@property --tw-rotate-x{syntax:"*";inherits:false;initial-value:rotateX(0)}@property --tw-rotate-y{syntax:"*";inherits:false;initial-value:rotateY(0)}@property --tw-rotate-z{syntax:"*";inherits:false;initial-value:rotateZ(0)}@property --tw-skew-x{syntax:"*";inherits:false;initial-value:skewX(0)}@property --tw-skew-y{syntax:"*";inherits:false;initial-value:skewY(0)}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}`, Xo = () => {
  if (typeof document > "u")
    return;
  const t = `@scope (:root) to (.pm-wrapper) { ${wt} }`, e = new CSSStyleSheet();
  e.replaceSync(t), document.adoptedStyleSheets.includes(e) || (document.adoptedStyleSheets = [...document.adoptedStyleSheets, e]);
  const o = new CSSStyleSheet();
  return o.replaceSync(wt), o;
}, Ne = Xo();
class S extends Fo {
  connectedCallback() {
    super.connectedCallback(), this.shadowRoot && Ne && (this.shadowRoot.adoptedStyleSheets.includes(Ne) || (this.shadowRoot.adoptedStyleSheets = [
      Ne,
      ...this.shadowRoot.adoptedStyleSheets
    ]));
  }
}
function O(t, e) {
  customElements.get(t) || customElements.define(t, e);
}
const w = Object.freeze({
  RECOMMENDED: "recommended",
  RECENT: "recent",
  FAVORITES: "favorites",
  CUSTOM_PROMPTS: "custom_prompts",
  PROMPTS: "prompts",
  TOPICS: "topics"
}), Kt = Object.freeze({
  [w.RECOMMENDED]: "Recommended",
  [w.RECENT]: "Recently Used",
  [w.FAVORITES]: "Favorites",
  [w.CUSTOM_PROMPTS]: "Custom Prompts",
  [w.PROMPTS]: "Prompts",
  [w.TOPICS]: "Topics"
}), yt = Object.freeze([
  w.RECOMMENDED,
  w.FAVORITES,
  w.RECENT,
  w.CUSTOM_PROMPTS,
  w.PROMPTS,
  w.TOPICS
]), he = w.RECOMMENDED, Jo = Object.freeze(
  /* @__PURE__ */ new Set([w.PROMPTS])
), ge = Object.freeze({
  [w.CUSTOM_PROMPTS]: "saved",
  [w.FAVORITES]: "favorites",
  [w.PROMPTS]: "public",
  [w.RECENT]: "recently-used"
}), te = Object.freeze({
  INPUT: "Unable to process your request. Please review your input and try again.",
  UNAUTHORIZED: "Authentication failed. Please sign in and try again.",
  FORBIDDEN: "You are not authorized to perform this action.",
  NOT_FOUND: "The requested resource was not found.",
  RATE_LIMITED: "Too many requests. Please try again later.",
  SERVER: "Something went wrong. Please try again later."
}), f = Object.freeze({
  PROMPT_LIBRARY_TITLE: "Prompt Library",
  SEARCH_PLACEHOLDER: "Search for a prompt",
  LOADING: "Loading prompts",
  LOADING_MORE: "Loading",
  NO_PROMPTS: "No prompts found",
  ERROR_PREFIX: "Error:",
  ERROR_GENERIC: "Something went wrong. Please try again later.",
  CLEAR_SEARCH: "Clear search",
  PROMPT_CATEGORIES: "Categories",
  SEARCH_PROMPTS: "Search prompts",
  ADD_TO_FAVORITES: "Add to favorites",
  REMOVE_FROM_FAVORITES: "Remove from favorites",
  CARD_ACTIONS: "Card actions",
  DELETE: "Delete prompt",
  SAVE_PROMPT_TITLE: "Save this prompt?",
  SAVE_PROMPT_BUTTON: "Save prompt",
  SAVE_PROMPT_CANCEL: "Cancel",
  SAVE_PROMPT_FIELD_TITLE: "Title",
  SAVE_PROMPT_FIELD_DESCRIPTION: "Description",
  SAVE_PROMPT_FIELD_PROMPT: "Prompt",
  SAVE_PROMPT_PLACEHOLDER_TITLE: "Enter title",
  SAVE_PROMPT_PLACEHOLDER_DESCRIPTION: "Enter description",
  SAVE_PROMPT_SAVING: "Saving…",
  SAVE_PROMPT_ERROR_RESOLVE_CLIENT: "Failed to resolve client. Please try again.",
  SAVE_PROMPT_ERROR_NO_CLIENT: "Client ID is required to save a prompt.",
  SAVE_PROMPT_ERROR_SAVE_FAILED: "Failed to save prompt.",
  SAVE_PROMPT_ERROR_GENERIC: "Something went wrong. Please try again.",
  PROMPT_GRID: "Prompts",
  ROW_LABEL: (t) => `Row ${t}`,
  PROMPTS_LOADED: (t) => `${t} more prompts loaded`,
  MORE_ACTIONS: "More actions",
  CLOSE_MODAL: "Close modal",
  BACK: "Back",
  SCROLL_TABS_BACKWARD: "Scroll tabs backward",
  SCROLL_TABS_FORWARD: "Scroll tabs forward",
  FILTER_SELECTED: "Selected filters",
  DEFAULT_PROMPT_TITLE: "Your Prompt",
  SEARCH_RESULTS: "Showing search results"
}), Wt = "pm-context", Qt = "pm-actions-context", xt = {
  data: null,
  error: null,
  loading: !1,
  loadingMore: !1,
  pagination: {},
  page: 1,
  pageSize: 9,
  filterDimensions: [],
  filterValues: [],
  activeCategory: he,
  searchQuery: "",
  client: null,
  clientLoading: !1
}, er = () => typeof window < "u" && window.g_ck ? window.g_ck : "", A = () => {
  const t = er();
  return t ? { "X-UserToken": t } : {};
}, G = 3e4, Yt = "/api/sn_pm/prompts", tr = "/api/sn_pm/filter_dimensions", or = "/api/sn_pm/clients", rr = "/api/sn_pm/prompts_by_target", ae = "/api/sn_nowassist_va/now_assist_resource_library", Zt = "sys_now_assist_deployment", Xt = /* @__PURE__ */ new Set(["prompt", "topic"]), ir = "/api/now/deployments", ar = "sys_cs_topic", _t = (t) => t === 400 || t === 409 || t === 422 ? te.INPUT : t === 401 ? te.UNAUTHORIZED : t === 403 ? te.FORBIDDEN : t === 404 ? te.NOT_FOUND : t === 429 ? te.RATE_LIMITED : t >= 500 ? te.SERVER : `Request failed (${t}). Please try again.`, Ee = (t) => t === "topic" ? "skill" : t, nr = (t) => t === "skill" ? "topic" : t || "prompt", I = async (t, e = {}) => {
  const { sanitizeErrors: o = !1 } = e;
  if (t.status === 204)
    return {};
  if (!(t.headers.get("content-type") || "").includes("application/json"))
    throw o ? new Error(_t(t.status)) : new Error(`API returned non-JSON response (${t.status}).`);
  const r = await t.json();
  if (!t.ok) {
    if (o)
      throw new Error(_t(t.status));
    const i = r?.result?.error?.message || r?.error?.message || `HTTP ${t.status}: ${t.statusText}`;
    throw new Error(i);
  }
  return r;
}, ue = (t = {}) => {
  const e = AbortSignal.timeout(G);
  return t.signal ? AbortSignal.any([t.signal, e]) : e;
}, Re = (t = {}) => {
  const e = Object.entries(t).filter(
    ([, o]) => o != null && o !== ""
  );
  return e.length === 0 ? "" : `?${new URLSearchParams(e).toString()}`;
}, Jt = async (t) => {
  if (!t)
    throw new Error("targetId is required to fetch the client");
  const e = Re({ targetId: t, targetTable: Zt }), o = await fetch(`${or}${e}`, {
    method: "GET",
    headers: { ...A() },
    signal: AbortSignal.timeout(G)
  });
  return (await I(o)).result?.details ?? {};
}, Te = (t, e = {}) => {
  const o = nr(t.type), r = t.type === "skill", i = o === "topic" ? "Topic" : "", a = t.public !== void 0 && t.public !== null ? t.public === !0 || t.public === "true" : void 0, n = t.prompt || t.title || t.name || "", s = {
    sys_id: t.resource_sys_id || t.sys_id,
    type: o,
    title: r ? i : t.title || i,
    description: r ? "" : t.description || "",
    favorite: t.favorited ?? t.favorite ?? !1,
    public: a,
    prompt: r ? n : t.prompt || "",
    active: t.active !== void 0 && t.active !== null ? t.active === !0 || t.active === "true" : void 0,
    sys_created_on: t.sys_created_on || t.createdOn,
    filters: t.filters,
    enrichedFilters: t.enrichedFilters,
    tableType: t.tableType,
    ...e
  };
  return s.canDelete = s.type === "prompt" && s.public === !1, s;
}, Ye = (t, e) => {
  if (!t)
    throw new Error("Resource sys_id is required");
  if (!Xt.has(e))
    throw new Error("Resource type must be one of: prompt, topic");
  return { sysId: t, type: e };
}, eo = (t, e = {}) => Re({
  now_assist_deployment: t,
  ...e
}), to = (t) => ({
  resources: Array.isArray(t?.result?.result) ? t.result.result : [],
  pagination: t?.result?.pagination ?? {}
}), sr = async (t, e, o, r = {}) => {
  if (!Xt.has(o))
    throw new Error("Resource type must be one of: prompt, topic");
  if (!Array.isArray(e) || e.length === 0)
    return [];
  const i = await fetch(`${ae}/favorites/check`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...A() },
    body: JSON.stringify({
      now_assist_deployment: t,
      type: Ee(o),
      sys_ids: e
    }),
    signal: ue(r)
  });
  return (await I(i)).result?.result?.favorited ?? [];
}, oo = async (t, e, o, r = {}) => {
  const i = e.map((s) => s.sys_id);
  let a = [];
  try {
    a = await sr(t, i, o, r);
  } catch {
    a = [];
  }
  const n = new Set(a);
  return e.map((s) => ({
    ...s,
    favorite: n.has(s.sys_id)
  }));
}, kt = (t) => ({
  page: 1,
  pageSize: t,
  totalCount: t,
  totalPages: t > 0 ? 1 : 0,
  hasNextPage: !1,
  hasPreviousPage: !1
}), Ct = async (t, e = {}, o = {}) => {
  if (!t)
    throw new Error("Please provide a valid targetId to fetch favorites");
  const r = await fetch(`${ae}/favorites${eo(t, e)}`, {
    method: "GET",
    headers: { ...A() },
    signal: ue(o)
  }), i = await I(r, { sanitizeErrors: !0 }), { resources: a, pagination: n } = to(i);
  return {
    data: a.map((s) => Te(s, { favorite: !0 })),
    pagination: n ?? {}
  };
}, $t = async (t, e = {}, o = {}) => {
  if (!t)
    throw new Error("Please provide a valid targetId to fetch execution history");
  const r = ue(o), i = {
    ...e,
    dedup: !0
  }, a = await fetch(`${ae}/execution-history${eo(t, i)}`, {
    method: "GET",
    headers: { ...A() },
    signal: r
  }), n = await I(a, { sanitizeErrors: !0 }), { resources: s, pagination: l } = to(n);
  return {
    data: s.map((d) => Te(d)),
    pagination: l ?? {}
  };
}, lr = (t = {}) => {
  const { result: e } = t ?? {};
  return (Array.isArray(e) ? e : e?.skills ?? []).filter((o) => o.type === ar).map((o) => Te({ sys_id: o.id, prompt: o.name, type: "topic", tableType: o.type }));
}, ro = async (t, e, o = {}) => {
  if (!t)
    throw new Error("Deployment ID is required to fetch topics");
  const r = ue(o), i = await fetch(`${ir}/${t}/${e}`, {
    method: "GET",
    headers: { ...A() },
    signal: r
  });
  if (i.status === 404)
    return { data: [], pagination: kt(0) };
  const a = await I(i), n = lr(a), s = await oo(t, n, "topic", { signal: r });
  return { data: s, pagination: kt(s.length) };
}, Et = async (t, e = {}, o = {}) => ro(t, "skills", o), Rt = async (t, e = {}, o = {}) => ro(t, "promoted-skills", o), je = async (t, e = {}, o = {}) => {
  if (!t)
    throw new Error("targetId is required to fetch prompts by target");
  const { retentionDays: r, ...i } = e, a = Re({
    targetId: t,
    targetTable: Zt,
    ...i
  }), n = ue(o), s = await fetch(`${rr}${a}`, { method: "GET", headers: { ...A() }, signal: n }), l = (await I(s)).result?.details ?? { data: [], pagination: {} }, d = (l.data ?? []).map((p) => Te(p));
  return {
    data: await oo(t, d, "prompt", { signal: n }),
    pagination: l.pagination ?? {}
  };
}, cr = async (t) => {
  const e = await fetch(`${Yt}/${t}`, {
    method: "DELETE",
    headers: { ...A() },
    signal: AbortSignal.timeout(G)
  });
  return I(e);
}, dr = async (t) => {
  const e = await fetch(Yt, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...A() },
    body: JSON.stringify(t),
    signal: AbortSignal.timeout(G)
  });
  return (await I(e)).result ?? {};
}, hr = async (t, e, o) => {
  const r = Ye(e, o);
  if (!t)
    throw new Error("targetId is required to add a favorite");
  const i = await fetch(`${ae}/favorites/${Ee(r.type)}/${r.sysId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...A() },
    body: JSON.stringify({ now_assist_deployment: t }),
    signal: AbortSignal.timeout(G)
  });
  return I(i, { sanitizeErrors: !0 });
}, pr = async (t, e, o) => {
  const r = Ye(e, o);
  if (!t)
    throw new Error("targetId is required to remove a favorite");
  const i = await fetch(`${ae}/favorites/${Ee(r.type)}/${r.sysId}${Re({ now_assist_deployment: t })}`, {
    method: "DELETE",
    headers: { ...A() },
    signal: AbortSignal.timeout(G)
  });
  return I(i, { sanitizeErrors: !0 });
}, ur = async (t) => {
  if (!t)
    throw new Error("Please provide a valid client to fetch the filter dimensions");
  const e = await fetch(`${tr}/${t}`, {
    method: "GET",
    headers: { ...A() },
    signal: AbortSignal.timeout(G)
  });
  return (await I(e)).result?.details ?? { dimensions: [], values: [] };
}, br = async (t, e, o, r) => {
  const i = Ye(e, o);
  if (!t)
    throw new Error("targetId is required to record usage");
  const a = { now_assist_deployment: t };
  r !== void 0 && (a.executed_payload = r);
  const n = await fetch(`${ae}/execution-history/${Ee(i.type)}/${i.sysId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...A() },
    body: JSON.stringify(a),
    signal: AbortSignal.timeout(G)
  });
  return I(n, { sanitizeErrors: !0 });
}, Ze = (t = !1) => t ? yt.filter((e) => e !== w.RECOMMENDED) : yt, Xe = (t, e = !1) => {
  const o = Ze(e);
  return o.includes(t) ? t : e && o.includes(w.PROMPTS) ? w.PROMPTS : o[0] || t || he;
}, io = (t = "", e = !1) => {
  const o = String(t || "").trim().toLowerCase(), r = (o ? Object.values(w).find((i) => i === o) : null) || he;
  return Xe(r, e);
}, mr = (t, e = !1) => {
  const o = Ze(e);
  return !t || o.includes(t) ? null : Xe(t, e);
}, ao = (t = "") => typeof t == "string" ? t.trim() : "", ce = (t = "") => ao(t).length > 0;
class gr extends S {
  static properties = {
    targetId: { type: String, attribute: "target-id" },
    retentionDays: { type: Number, attribute: "retention-days" },
    pageSize: { type: Number, attribute: "page-size" },
    defaultCategory: { type: String, attribute: "default-category" }
  };
  constructor() {
    super(), this.targetId = "", this.retentionDays = 100, this.pageSize = void 0, this.defaultCategory = "", this._state = { ...xt }, this._resolvedClientId = "", this._provider = new mt(this, {
      context: Wt,
      initialValue: this._state
    }), this._actions = {
      setActiveCategory: this.setActiveCategory.bind(this),
      setSearchQuery: this.setSearchQuery.bind(this),
      setFilter: this.setFilter.bind(this),
      addFavorite: this.addFavorite.bind(this),
      removeFavorite: this.removeFavorite.bind(this),
      loadNextPage: this.loadNextPage.bind(this),
      deletePrompt: this.deletePrompt.bind(this),
      logUsage: this.logUsage.bind(this),
      fetchByCategory: this.fetchByCategory.bind(this),
      fetchFilterDimensions: this.fetchFilterDimensions.bind(this)
    }, this._actionsProvider = new mt(this, {
      context: Qt,
      initialValue: this._actions
    }), this._firstLoadedPage = 1, this._lastLoadedPage = 1, this._currentFetchParams = {}, this._fetchController = null, this._loadMoreController = null;
  }
  willUpdate(e) {
    super.willUpdate(e), e.has("pageSize") && Number.isInteger(this.pageSize) && this.pageSize > 0 && this._setState({ pageSize: this.pageSize });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._fetchController && (this._fetchController.abort(), this._fetchController = null), this._loadMoreController && (this._loadMoreController.abort(), this._loadMoreController = null), this._firstLoadedPage = 1, this._lastLoadedPage = 1, this._currentFetchParams = {}, this._resolvedClientId = "", this._setState({ ...xt });
  }
  /* ------------------------------------------------------------------ */
  /*  Internal state helpers                                            */
  /* ------------------------------------------------------------------ */
  /**
   * Merge partial updates into state and push to context consumers.
   * @param {Partial<import('./pm-context.js').PmContextState>} patch
   */
  _setState(e) {
    this._state = { ...this._state, ...e }, this._provider.setValue(this._state);
  }
  /**
   * @param {Error} err
   * @param {string} source - Action source identifier
   */
  _handleError(e, o) {
    const r = (typeof e == "string" ? e : e?.message) || "An error occurred while processing your request.";
    this._setState({
      error: { message: r, source: o },
      loading: !1,
      loadingMore: !1
    });
  }
  /* ------------------------------------------------------------------ */
  /*  Public API              */
  /* ------------------------------------------------------------------ */
  /**
   * Fetch prompts for the configured deployment target.
   *
   * @param {Object} [params] - Additional query parameters (category, search, filters, etc.)
   */
  async fetchPrompts(e = {}) {
    await this._fetchData(je, "FETCH_PROMPTS", e);
  }
  /**
   * Fetch favorited resource-library entries for the configured deployment target.
   *
   * @param {Object} [params] - Resource-library pagination/query parameters
   */
  async fetchResourceFavorites(e = {}) {
    await this._fetchData(Ct, "FETCH_FAVORITES", e);
  }
  /**
   * Fetch resource-library execution history for the configured deployment target.
   *
   * @param {Object} [params] - Resource-library pagination/query parameters
   */
  async fetchExecutionHistory(e = {}) {
    await this._fetchData($t, "FETCH_EXECUTION_HISTORY", {
      days_ago: this.retentionDays,
      ...e
    });
  }
  /**
   * Delete a prompt by sys_id and refetch the current category.
   * Equivalent to dispatching DELETE_PROMPT.
   *
   * @param {Object} payload - { sysId }
   */
  async deletePrompt(e) {
    const { sysId: o } = e;
    this._setState({ loading: !0, error: null });
    try {
      await cr(o), await this._refetchCurrentCategory();
    } catch (r) {
      this._handleError(r, "DELETE_PROMPT");
    }
  }
  /**
   * Add a resource to favorites via the typed resource-library API.
   * On success, locally sets the normalized resource's `favorite` flag for instant UI update.
   * If on Favorites tab, refetches to keep the list in sync.
   *
   * @param {ResourceActionPayload} payload - Favorite action payload with `sysId` and `type`
   */
  async addFavorite(e) {
    const { sysId: o, type: r } = e;
    try {
      await hr(this.targetId, o, r);
      const i = (this._state.data || []).map(
        (a) => a.sys_id === o ? { ...a, favorite: !0 } : a
      );
      this._setState({ data: i, error: null }), this._state.activeCategory === w.FAVORITES && !ce(this._state.searchQuery) && await this._refetchCurrentCategory();
    } catch (i) {
      this._handleError(i, "POST_FAVORITE");
    }
  }
  /**
   * Remove a resource from favorites via the typed resource-library API.
   * On success, locally clears the normalized resource's `favorite` flag for instant UI update.
   * If the active category is Favorites, removes the item from the list and refetches.
   *
   * @param {ResourceActionPayload} payload - Favorite action payload with `sysId` and `type`
   */
  async removeFavorite(e) {
    const { sysId: o, type: r } = e;
    try {
      await pr(this.targetId, o, r);
      const i = this._state.activeCategory === w.FAVORITES, a = ce(this._state.searchQuery), n = this._state.data || [], s = i && !a ? n.filter((l) => l.sys_id !== o) : n.map(
        (l) => l.sys_id === o ? { ...l, favorite: !1 } : l
      );
      this._setState({ data: s, error: null }), i && !a && await this._refetchCurrentCategory();
    } catch (i) {
      this._handleError(i, "DELETE_FAVORITE");
    }
  }
  /**
   * Fetch filter dimensions for the configured client.
   * Equivalent to dispatching FETCH_FILTER_DIMENSIONS.
   */
  async fetchFilterDimensions() {
    try {
      const { dimensions: e, values: o } = await ur(this._effectiveClientId);
      this._setState({
        filterDimensions: e,
        filterValues: o
      });
    } catch (e) {
      this._handleError(e, "FETCH_FILTER_DIMENSIONS");
    }
  }
  /**
   * Fetch the topics visible for the configured deployment target.
   *
   * @param {Object} [params] - Additional query parameters
   */
  async fetchTopics(e = {}) {
    await this._fetchData(Et, "FETCH_TOPICS", e);
  }
  /**
   * Fetch the recommended (promoted) skills for the configured deployment target.
   *
   * @param {Object} [params] - Additional query parameters
   */
  async fetchRecommended(e = {}) {
    await this._fetchData(Rt, "FETCH_RECOMMENDED", e);
  }
  /**
   * Log resource usage through the typed resource-library execution-history API.
   * Equivalent to dispatching POST_USAGE_LOG.
   *
   * @param {LogUsagePayload} payload - Usage log data with `sysId`, `type`, and optional `executedPayload`
   */
  async logUsage(e) {
    try {
      const o = e?.type === "skill" ? "topic" : e?.type;
      await br(
        this.targetId,
        e?.sysId,
        o,
        e?.executedPayload
      );
    } catch (o) {
      console.warn("Usage logging failed", o);
    }
  }
  /**
   * Fetch a client record by target association and store the resolved sys_id.
   * Sets `clientLoading` while in-flight and populates `client` in state on success.
   */
  async _resolveClientByTarget() {
    if (this.targetId) {
      this._resolvedClientId = "", this._setState({ client: null, clientLoading: !0, error: null });
      try {
        const e = await Jt(this.targetId);
        if (!e?.sys_id)
          throw new Error(f.SAVE_PROMPT_ERROR_RESOLVE_CLIENT);
        this._resolvedClientId = e.sys_id, this._setState({ client: e, clientLoading: !1, error: null });
      } catch (e) {
        this._resolvedClientId = "", this._setState({
          client: null,
          clientLoading: !1,
          error: { message: e?.message || "An error occurred while processing your request.", source: "FETCH_CLIENT" },
          loading: !1,
          loadingMore: !1
        });
      }
    }
  }
  /**
   * Bootstrap the provider: set the default category and fetch filter
   * dimensions. Encapsulates the startup sequence so consumers don't
   * need to know which calls are required or in what order.
   *
   * Resolves the configured target to a client sys_id first, then proceeds
   * with the normal startup sequence.
   */
  async init() {
    if (!this.targetId)
      throw new Error("<pm-provider> requires a target-id attribute.");
    await this._resolveClientByTarget(), !this._state.error && (this.setActiveCategory(io(this.defaultCategory)), this.fetchFilterDimensions());
  }
  /* ------------------------------------------------------------------ */
  /*  State + fetch helpers                                             */
  /* ------------------------------------------------------------------ */
  /**
   * Update the search query and trigger a server-side search.
   * Non-empty queries call fetchPromptsByTarget with the `search` param
   * (global search across public + user prompts, ignoring category).
   * An empty query restores the current tab's normal data.
   * @param {string} query
   */
  setSearchQuery(e) {
    const o = ao(e);
    this._setState({ searchQuery: e, page: 1 }), ce(e) ? this.fetchPrompts({ search: o }) : this.fetchByCategory(this._state.activeCategory);
  }
  /**
   * Update the active sidebar category and fetch data from the API
   * if the category has a corresponding API mapping.
   * Resets page to 1. Recommended and Topics fetch from the deployment skills
   * endpoints rather than the prompt-management category query param.
   *
   * @param {string} category - Sidebar category label
   */
  setActiveCategory(e) {
    const o = ge[e];
    if (this._firstLoadedPage = 1, this._lastLoadedPage = 1, this._setState({ activeCategory: e, page: 1, searchQuery: "" }), e === w.TOPICS) {
      this.fetchTopics();
      return;
    }
    if (e === w.RECOMMENDED) {
      this.fetchRecommended();
      return;
    }
    if (!o) {
      this._fetchController && (this._fetchController.abort(), this._fetchController = null), this._loadMoreController && (this._loadMoreController.abort(), this._loadMoreController = null), this._setState({ loading: !1, loadingMore: !1 });
      return;
    }
    this.fetchByCategory(e);
  }
  /**
   * Apply filter selections and refetch prompts.
   * Accepts the full filters map { dimensionId: valueLabel, ... }.
   * Sends as a JSON-encoded `filters` query param for server-side AND filtering.
   * When the map is empty (all cleared), fetches without filters.
   *
   * @param {Object} filterDetail - { filters }
   */
  setFilter({ filters: e = {} }) {
    const o = Object.keys(e).length > 0 ? { filters: JSON.stringify(e) } : {};
    this._setState({ page: 1 });
    const r = ge[this._state.activeCategory];
    r && this.fetchPrompts({ category: r, ...o });
  }
  /**
   * Fetch data for a sidebar category.
   * Maps the UI category label either to a prompt-management category query param
   * or to a resource-library endpoint for target-scoped data:
   *   - Custom Prompts → saved
   *   - Favorites → resource-library favorites
   *   - Prompts → public
   *   - Recent → resource-library execution history
   *   - Recommended → deployment promoted-skills endpoint
   *   - Topics → deployment skills endpoint
   *
   * @param {string} category - Sidebar category label
   * @param {Object} [extraParams] - Additional query params (search, page, etc.)
   */
  async fetchByCategory(e, o = {}) {
    if (e === w.TOPICS) {
      await this.fetchTopics();
      return;
    }
    if (e === w.RECOMMENDED) {
      await this.fetchRecommended();
      return;
    }
    const r = ge[e];
    if (r) {
      if (e === w.FAVORITES) {
        await this.fetchResourceFavorites(o);
        return;
      }
      if (e === w.RECENT) {
        await this.fetchExecutionHistory(o);
        return;
      }
      await this.fetchPrompts({ category: r, ...o });
    }
  }
  /* ------------------------------------------------------------------ */
  /*  Lazy-loading (scroll-based pagination)                             */
  /* ------------------------------------------------------------------ */
  /**
   * Load the next page and append results to existing data.
   * Used for infinite-scroll-down behaviour.
   */
  async loadNextPage() {
    const e = this._state.pagination?.hasNextPage, o = this._totalPages > 0 && this._lastLoadedPage >= this._totalPages;
    if (e === !1 || o || this._state.loadingMore || this._state.loading) return;
    const r = this._lastLoadedPage + 1;
    this._setState({ loadingMore: !0 }), this._loadMoreController && this._loadMoreController.abort(), this._loadMoreController = new AbortController();
    try {
      const i = { ...this._currentFetchParams, page: r }, a = await (ce(this._state.searchQuery) ? je : this._getApiFnForCategory(this._state.activeCategory))(this.targetId, i, { signal: this._loadMoreController.signal });
      this._lastLoadedPage = r, this._loadMoreController = null, this._setState({
        data: [...this._state.data || [], ...a.data],
        pagination: a.pagination,
        error: null,
        loadingMore: !1
      });
    } catch (i) {
      if (this._loadMoreController = null, i?.name === "AbortError") return;
      this._handleError(i, "FETCH_PROMPTS");
    }
  }
  /* ------------------------------------------------------------------ */
  /*  Internal helpers                                                   */
  /* ------------------------------------------------------------------ */
  /**
   * Shared fetch-and-state-update routine used by category-specific fetch methods.
   * Handles abort-controller lifecycle, loading state, pagination tracking,
   * and error handling so each category caller is a thin wrapper.
   *
   * @param {Function} apiFn - API function matching (targetId, queryParams, options) signature.
   *   All routed functions (fetchPromptsByTarget, fetchResourceFavorites, fetchExecutionHistory)
   *   accept targetId as the first parameter.
   * @param {string} errorSource - Identifier for _handleError (e.g. 'FETCH_PROMPTS')
   * @param {Object} [params] - Extra query parameters merged with page/pageSize from state
   * @private
   */
  async _fetchData(e, o, r = {}) {
    this._fetchController && this._fetchController.abort(), this._loadMoreController && (this._loadMoreController.abort(), this._loadMoreController = null), this._fetchController = new AbortController();
    const { signal: i } = this._fetchController;
    this._setState({ loading: !0, loadingMore: !1, error: null });
    try {
      const a = {
        page: this._state.page,
        pageSize: this._state.pageSize,
        ...r
      }, { data: n, pagination: s } = await e(this.targetId, a, { signal: i }), l = a.page;
      this._firstLoadedPage = l, this._lastLoadedPage = l;
      const { page: d, ...p } = a;
      this._currentFetchParams = p, this._setState({
        data: n,
        pagination: s,
        page: l,
        pageSize: a.pageSize,
        error: null,
        loading: !1
      });
    } catch (a) {
      if (a?.name === "AbortError") return;
      this._handleError(a, o);
    } finally {
      this._fetchController = null;
    }
  }
  /**
   * Map a UI category to its corresponding API fetch function.
   * Used by loadNextPage to avoid duplicating the routing logic from fetchByCategory.
   *
   * @param {string} category
   * @returns {Function}
   * @private
   */
  _getApiFnForCategory(e) {
    return e === w.FAVORITES ? Ct : e === w.RECENT ? $t : e === w.TOPICS ? Et : e === w.RECOMMENDED ? Rt : je;
  }
  /**
   * Refetch data for the current active category and page.
   * Used after mutations (favorite toggle, prompt delete, etc.).
   */
  async _refetchCurrentCategory() {
    const { activeCategory: e } = this._state;
    ge[e] && await this.fetchByCategory(e);
  }
  /* ------------------------------------------------------------------ */
  /*  Convenience getters                                               */
  /* ------------------------------------------------------------------ */
  /** @returns {string} The resolved client ID derived from the configured target. */
  get _effectiveClientId() {
    return this._resolvedClientId;
  }
  /** @returns {number} Total pages from pagination metadata. */
  get _totalPages() {
    const { pagination: e } = this._state;
    return e?.totalPages ?? 0;
  }
  /** @returns {import('./pm-context.js').PmContextState} */
  get state() {
    return this._state;
  }
  render() {
    return m`
			<slot></slot>
		`;
  }
}
O("pm-provider", gr);
const fr = () => m`
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
		<path
			d="M13.6464 3.64651C13.8417 3.45125 14.1582 3.45125 14.3535 3.64651C14.5487 3.84177 14.5487 4.15829 14.3535 4.35354L6.35348 12.3535C6.15823 12.5488 5.84171 12.5488 5.64645 12.3535L2.14645 8.85354C1.95118 8.65828 1.95118 8.34177 2.14645 8.14651C2.34171 7.95125 2.65822 7.95125 2.85348 8.14651L5.99996 11.293L13.6464 3.64651Z"
			fill="currentColor"
		/>
	</svg>
`, vr = () => m`
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path d="M9.14649 12.8535C9.34175 13.0488 9.65826 13.0488 9.85352 12.8535C10.0488 12.6583 10.0488 12.3418 9.85352 12.1465L5.70703 8.00002L9.85351 3.85354C10.0488 3.65828 10.0488 3.34177 9.85351 3.14651C9.65825 2.95125 9.34175 2.95125 9.14648 3.14651L4.64648 7.64651C4.55272 7.74028 4.5 7.86742 4.5 8.00002C4.5 8.13263 4.55272 8.25977 4.64648 8.35354L9.14649 12.8535Z" fill="currentColor"/>
	</svg>
`, wr = () => m`
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path d="M6.85347 12.8535C6.65821 13.0488 6.3417 13.0488 6.14644 12.8535C5.95118 12.6583 5.95119 12.3418 6.14644 12.1465L10.2929 8.00002L6.14644 3.85354C5.95119 3.65828 5.95119 3.34177 6.14644 3.14651C6.34171 2.95125 6.65821 2.95125 6.85348 3.14651L11.3535 7.64651C11.4472 7.74028 11.5 7.86742 11.5 8.00002C11.5 8.13263 11.4472 8.25977 11.3535 8.35354L6.85347 12.8535Z" fill="currentColor"/>
	</svg>
`, yr = () => m`
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
		<path
			d="M12.8535 6.85347C13.0487 6.65821 13.0487 6.3417 12.8535 6.14644C12.6582 5.95118 12.3417 5.95119 12.1464 6.14644L7.99996 10.2929L3.85348 6.14644C3.65822 5.95119 3.34171 5.95119 3.14645 6.14644C2.95118 6.34171 2.95119 6.65821 3.14645 6.85348L7.64645 11.3535C7.74021 11.4472 7.86736 11.5 7.99996 11.5C8.13257 11.5 8.25971 11.4472 8.35348 11.3535L12.8535 6.85347Z"
			fill="currentColor"
		/>
	</svg>
`, xr = () => m`
	<svg
		class="search-icon"
		viewBox="0 0 16 16"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		aria-hidden="true"
	>
		<circle cx="6.5" cy="6.5" r="5" />
		<path d="M10.5 10.5L14.5 14.5" />
	</svg>
`, _r = () => m`
	<svg class="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
		<path d="M4 4l8 8M12 4l-8 8" />
	</svg>
`, kr = () => m`
	<svg
		viewBox="0 0 20 20"
		fill="none"
		stroke="currentColor"
		stroke-width="1"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M6 6l8 8M14 6l-8 8" />
	</svg>
`, Cr = () => m`
	<svg fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
	</svg>
`, $r = () => m`
	<svg viewBox="0 0 24 24" fill="currentColor" class="size-4" aria-hidden="true">
		<path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
	</svg>
`, Er = () => m`
	<svg class="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
		<path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334z" />
	</svg>
`, Rr = () => m`
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
		<circle cx="8" cy="3" r="1.5" />
		<circle cx="8" cy="8" r="1.5" />
		<circle cx="8" cy="13" r="1.5" />
	</svg>
`, Tr = () => m`
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M10 12L6 8l4-4" />
	</svg>
`, ye = Math.min, Y = Math.max, xe = Math.round, fe = Math.floor, z = (t) => ({
  x: t,
  y: t
}), Sr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Tt(t, e, o) {
  return Y(t, ye(e, o));
}
function Se(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Z(t) {
  return t.split("-")[0];
}
function Oe(t) {
  return t.split("-")[1];
}
function no(t) {
  return t === "x" ? "y" : "x";
}
function so(t) {
  return t === "y" ? "height" : "width";
}
function q(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function lo(t) {
  return no(q(t));
}
function Or(t, e, o) {
  o === void 0 && (o = !1);
  const r = Oe(t), i = lo(t), a = so(i);
  let n = i === "x" ? r === (o ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[a] > e.floating[a] && (n = _e(n)), [n, _e(n)];
}
function Ar(t) {
  const e = _e(t);
  return [qe(t), e, qe(e)];
}
function qe(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const St = ["left", "right"], Ot = ["right", "left"], Ir = ["top", "bottom"], Pr = ["bottom", "top"];
function Dr(t, e, o) {
  switch (t) {
    case "top":
    case "bottom":
      return o ? e ? Ot : St : e ? St : Ot;
    case "left":
    case "right":
      return e ? Ir : Pr;
    default:
      return [];
  }
}
function zr(t, e, o, r) {
  const i = Oe(t);
  let a = Dr(Z(t), o === "start", r);
  return i && (a = a.map((n) => n + "-" + i), e && (a = a.concat(a.map(qe)))), a;
}
function _e(t) {
  const e = Z(t);
  return Sr[e] + t.slice(e.length);
}
function Lr(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Mr(t) {
  return typeof t != "number" ? Lr(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ke(t) {
  const {
    x: e,
    y: o,
    width: r,
    height: i
  } = t;
  return {
    width: r,
    height: i,
    top: o,
    left: e,
    right: e + r,
    bottom: o + i,
    x: e,
    y: o
  };
}
function At(t, e, o) {
  let {
    reference: r,
    floating: i
  } = t;
  const a = q(e), n = lo(e), s = so(n), l = Z(e), d = a === "y", p = r.x + r.width / 2 - i.width / 2, h = r.y + r.height / 2 - i.height / 2, u = r[s] / 2 - i[s] / 2;
  let c;
  switch (l) {
    case "top":
      c = {
        x: p,
        y: r.y - i.height
      };
      break;
    case "bottom":
      c = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      c = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      c = {
        x: r.x - i.width,
        y: h
      };
      break;
    default:
      c = {
        x: r.x,
        y: r.y
      };
  }
  switch (Oe(e)) {
    case "start":
      c[n] -= u * (o && d ? -1 : 1);
      break;
    case "end":
      c[n] += u * (o && d ? -1 : 1);
      break;
  }
  return c;
}
async function Fr(t, e) {
  var o;
  e === void 0 && (e = {});
  const {
    x: r,
    y: i,
    platform: a,
    rects: n,
    elements: s,
    strategy: l
  } = t, {
    boundary: d = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: h = "floating",
    altBoundary: u = !1,
    padding: c = 0
  } = Se(e, t), g = Mr(c), v = s[u ? h === "floating" ? "reference" : "floating" : h], x = ke(await a.getClippingRect({
    element: (o = await (a.isElement == null ? void 0 : a.isElement(v))) == null || o ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: l
  })), y = h === "floating" ? {
    x: r,
    y: i,
    width: n.floating.width,
    height: n.floating.height
  } : n.reference, _ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), k = await (a.isElement == null ? void 0 : a.isElement(_)) ? await (a.getScale == null ? void 0 : a.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ke(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: _,
    strategy: l
  }) : y);
  return {
    top: (x.top - C.top + g.top) / k.y,
    bottom: (C.bottom - x.bottom + g.bottom) / k.y,
    left: (x.left - C.left + g.left) / k.x,
    right: (C.right - x.right + g.right) / k.x
  };
}
const Nr = 50, jr = async (t, e, o) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: n
  } = o, s = n.detectOverflow ? n : {
    ...n,
    detectOverflow: Fr
  }, l = await (n.isRTL == null ? void 0 : n.isRTL(e));
  let d = await n.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: p,
    y: h
  } = At(d, r, l), u = r, c = 0;
  const g = {};
  for (let v = 0; v < a.length; v++) {
    const x = a[v];
    if (!x)
      continue;
    const {
      name: y,
      fn: _
    } = x, {
      x: k,
      y: C,
      data: J,
      reset: R
    } = await _({
      x: p,
      y: h,
      initialPlacement: r,
      placement: u,
      strategy: i,
      middlewareData: g,
      rects: d,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    p = k ?? p, h = C ?? h, g[y] = {
      ...g[y],
      ...J
    }, R && c < Nr && (c++, typeof R == "object" && (R.placement && (u = R.placement), R.rects && (d = R.rects === !0 ? await n.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : R.rects), {
      x: p,
      y: h
    } = At(d, u, l)), v = -1);
  }
  return {
    x: p,
    y: h,
    placement: u,
    strategy: i,
    middlewareData: g
  };
}, Br = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var o, r;
      const {
        placement: i,
        middlewareData: a,
        rects: n,
        initialPlacement: s,
        platform: l,
        elements: d
      } = e, {
        mainAxis: p = !0,
        crossAxis: h = !0,
        fallbackPlacements: u,
        fallbackStrategy: c = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...x
      } = Se(t, e);
      if ((o = a.arrow) != null && o.alignmentOffset)
        return {};
      const y = Z(i), _ = q(s), k = Z(s) === s, C = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), J = u || (k || !v ? [_e(s)] : Ar(s)), R = g !== "none";
      !u && R && J.push(...zr(s, v, g, C));
      const Do = [s, ...J], ze = await l.detectOverflow(e, x), me = [];
      let ee = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (p && me.push(ze[y]), h) {
        const K = Or(i, n, C);
        me.push(ze[K[0]], ze[K[1]]);
      }
      if (ee = [...ee, {
        placement: i,
        overflows: me
      }], !me.every((K) => K <= 0)) {
        var ht, pt;
        const K = (((ht = a.flip) == null ? void 0 : ht.index) || 0) + 1, Le = Do[K];
        if (Le && (!(h === "alignment" && _ !== q(Le)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        ee.every((N) => q(N.placement) === _ ? N.overflows[0] > 0 : !0)))
          return {
            data: {
              index: K,
              overflows: ee
            },
            reset: {
              placement: Le
            }
          };
        let se = (pt = ee.filter((N) => N.overflows[0] <= 0).sort((N, B) => N.overflows[1] - B.overflows[1])[0]) == null ? void 0 : pt.placement;
        if (!se)
          switch (c) {
            case "bestFit": {
              var ut;
              const N = (ut = ee.filter((B) => {
                if (R) {
                  const V = q(B.placement);
                  return V === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((V) => V > 0).reduce((V, zo) => V + zo, 0)]).sort((B, V) => B[1] - V[1])[0]) == null ? void 0 : ut[0];
              N && (se = N);
              break;
            }
            case "initialPlacement":
              se = s;
              break;
          }
        if (i !== se)
          return {
            reset: {
              placement: se
            }
          };
      }
      return {};
    }
  };
}, Vr = /* @__PURE__ */ new Set(["left", "top"]);
async function qr(t, e) {
  const {
    placement: o,
    platform: r,
    elements: i
  } = t, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), n = Z(o), s = Oe(o), l = q(o) === "y", d = Vr.has(n) ? -1 : 1, p = a && l ? -1 : 1, h = Se(e, t);
  let {
    mainAxis: u,
    crossAxis: c,
    alignmentAxis: g
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return s && typeof g == "number" && (c = s === "end" ? g * -1 : g), l ? {
    x: c * p,
    y: u * d
  } : {
    x: u * d,
    y: c * p
  };
}
const Hr = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var o, r;
      const {
        x: i,
        y: a,
        placement: n,
        middlewareData: s
      } = e, l = await qr(e, t);
      return n === ((o = s.offset) == null ? void 0 : o.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: i + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: n
        }
      };
    }
  };
}, Ur = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: o,
        y: r,
        placement: i,
        platform: a
      } = e, {
        mainAxis: n = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (y) => {
            let {
              x: _,
              y: k
            } = y;
            return {
              x: _,
              y: k
            };
          }
        },
        ...d
      } = Se(t, e), p = {
        x: o,
        y: r
      }, h = await a.detectOverflow(e, d), u = q(Z(i)), c = no(u);
      let g = p[c], v = p[u];
      if (n) {
        const y = c === "y" ? "top" : "left", _ = c === "y" ? "bottom" : "right", k = g + h[y], C = g - h[_];
        g = Tt(k, g, C);
      }
      if (s) {
        const y = u === "y" ? "top" : "left", _ = u === "y" ? "bottom" : "right", k = v + h[y], C = v - h[_];
        v = Tt(k, v, C);
      }
      const x = l.fn({
        ...e,
        [c]: g,
        [u]: v
      });
      return {
        ...x,
        data: {
          x: x.x - o,
          y: x.y - r,
          enabled: {
            [c]: n,
            [u]: s
          }
        }
      };
    }
  };
};
function Ae() {
  return typeof window < "u";
}
function ne(t) {
  return co(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function T(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function F(t) {
  var e;
  return (e = (co(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function co(t) {
  return Ae() ? t instanceof Node || t instanceof T(t).Node : !1;
}
function P(t) {
  return Ae() ? t instanceof Element || t instanceof T(t).Element : !1;
}
function L(t) {
  return Ae() ? t instanceof HTMLElement || t instanceof T(t).HTMLElement : !1;
}
function It(t) {
  return !Ae() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof T(t).ShadowRoot;
}
function be(t) {
  const {
    overflow: e,
    overflowX: o,
    overflowY: r,
    display: i
  } = D(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + o) && i !== "inline" && i !== "contents";
}
function Gr(t) {
  return /^(table|td|th)$/.test(ne(t));
}
function Ie(t) {
  try {
    if (t.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return t.matches(":modal");
  } catch {
    return !1;
  }
}
const Kr = /transform|translate|scale|rotate|perspective|filter/, Wr = /paint|layout|strict|content/, Q = (t) => !!t && t !== "none";
let Be;
function Je(t) {
  const e = P(t) ? D(t) : t;
  return Q(e.transform) || Q(e.translate) || Q(e.scale) || Q(e.rotate) || Q(e.perspective) || !et() && (Q(e.backdropFilter) || Q(e.filter)) || Kr.test(e.willChange || "") || Wr.test(e.contain || "");
}
function Qr(t) {
  let e = H(t);
  for (; L(e) && !ie(e); ) {
    if (Je(e))
      return e;
    if (Ie(e))
      return null;
    e = H(e);
  }
  return null;
}
function et() {
  return Be == null && (Be = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Be;
}
function ie(t) {
  return /^(html|body|#document)$/.test(ne(t));
}
function D(t) {
  return T(t).getComputedStyle(t);
}
function Pe(t) {
  return P(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function H(t) {
  if (ne(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    It(t) && t.host || // Fallback.
    F(t)
  );
  return It(e) ? e.host : e;
}
function ho(t) {
  const e = H(t);
  return ie(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : L(e) && be(e) ? e : ho(e);
}
function pe(t, e, o) {
  var r;
  e === void 0 && (e = []), o === void 0 && (o = !0);
  const i = ho(t), a = i === ((r = t.ownerDocument) == null ? void 0 : r.body), n = T(i);
  if (a) {
    const s = He(n);
    return e.concat(n, n.visualViewport || [], be(i) ? i : [], s && o ? pe(s) : []);
  } else
    return e.concat(i, pe(i, [], o));
}
function He(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function po(t) {
  const e = D(t);
  let o = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const i = L(t), a = i ? t.offsetWidth : o, n = i ? t.offsetHeight : r, s = xe(o) !== a || xe(r) !== n;
  return s && (o = a, r = n), {
    width: o,
    height: r,
    $: s
  };
}
function tt(t) {
  return P(t) ? t : t.contextElement;
}
function oe(t) {
  const e = tt(t);
  if (!L(e))
    return z(1);
  const o = e.getBoundingClientRect(), {
    width: r,
    height: i,
    $: a
  } = po(e);
  let n = (a ? xe(o.width) : o.width) / r, s = (a ? xe(o.height) : o.height) / i;
  return (!n || !Number.isFinite(n)) && (n = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: n,
    y: s
  };
}
const Yr = /* @__PURE__ */ z(0);
function uo(t) {
  const e = T(t);
  return !et() || !e.visualViewport ? Yr : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Zr(t, e, o) {
  return e === void 0 && (e = !1), !o || e && o !== T(t) ? !1 : e;
}
function X(t, e, o, r) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const i = t.getBoundingClientRect(), a = tt(t);
  let n = z(1);
  e && (r ? P(r) && (n = oe(r)) : n = oe(t));
  const s = Zr(a, o, r) ? uo(a) : z(0);
  let l = (i.left + s.x) / n.x, d = (i.top + s.y) / n.y, p = i.width / n.x, h = i.height / n.y;
  if (a) {
    const u = T(a), c = r && P(r) ? T(r) : r;
    let g = u, v = He(g);
    for (; v && r && c !== g; ) {
      const x = oe(v), y = v.getBoundingClientRect(), _ = D(v), k = y.left + (v.clientLeft + parseFloat(_.paddingLeft)) * x.x, C = y.top + (v.clientTop + parseFloat(_.paddingTop)) * x.y;
      l *= x.x, d *= x.y, p *= x.x, h *= x.y, l += k, d += C, g = T(v), v = He(g);
    }
  }
  return ke({
    width: p,
    height: h,
    x: l,
    y: d
  });
}
function De(t, e) {
  const o = Pe(t).scrollLeft;
  return e ? e.left + o : X(F(t)).left + o;
}
function bo(t, e) {
  const o = t.getBoundingClientRect(), r = o.left + e.scrollLeft - De(t, o), i = o.top + e.scrollTop;
  return {
    x: r,
    y: i
  };
}
function Xr(t) {
  let {
    elements: e,
    rect: o,
    offsetParent: r,
    strategy: i
  } = t;
  const a = i === "fixed", n = F(r), s = e ? Ie(e.floating) : !1;
  if (r === n || s && a)
    return o;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = z(1);
  const p = z(0), h = L(r);
  if ((h || !h && !a) && ((ne(r) !== "body" || be(n)) && (l = Pe(r)), L(r))) {
    const c = X(r);
    d = oe(r), p.x = c.x + r.clientLeft, p.y = c.y + r.clientTop;
  }
  const u = n && !h && !a ? bo(n, l) : z(0);
  return {
    width: o.width * d.x,
    height: o.height * d.y,
    x: o.x * d.x - l.scrollLeft * d.x + p.x + u.x,
    y: o.y * d.y - l.scrollTop * d.y + p.y + u.y
  };
}
function Jr(t) {
  return Array.from(t.getClientRects());
}
function ei(t) {
  const e = F(t), o = Pe(t), r = t.ownerDocument.body, i = Y(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), a = Y(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let n = -o.scrollLeft + De(t);
  const s = -o.scrollTop;
  return D(r).direction === "rtl" && (n += Y(e.clientWidth, r.clientWidth) - i), {
    width: i,
    height: a,
    x: n,
    y: s
  };
}
const Pt = 25;
function ti(t, e) {
  const o = T(t), r = F(t), i = o.visualViewport;
  let a = r.clientWidth, n = r.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, n = i.height;
    const p = et();
    (!p || p && e === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  const d = De(r);
  if (d <= 0) {
    const p = r.ownerDocument, h = p.body, u = getComputedStyle(h), c = p.compatMode === "CSS1Compat" && parseFloat(u.marginLeft) + parseFloat(u.marginRight) || 0, g = Math.abs(r.clientWidth - h.clientWidth - c);
    g <= Pt && (a -= g);
  } else d <= Pt && (a += d);
  return {
    width: a,
    height: n,
    x: s,
    y: l
  };
}
const oi = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ri(t, e) {
  const o = X(t, !0, e === "fixed"), r = o.top + t.clientTop, i = o.left + t.clientLeft, a = L(t) ? oe(t) : z(1), n = t.clientWidth * a.x, s = t.clientHeight * a.y, l = i * a.x, d = r * a.y;
  return {
    width: n,
    height: s,
    x: l,
    y: d
  };
}
function Dt(t, e, o) {
  let r;
  if (e === "viewport")
    r = ti(t, o);
  else if (e === "document")
    r = ei(F(t));
  else if (P(e))
    r = ri(e, o);
  else {
    const i = uo(t);
    r = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return ke(r);
}
function mo(t, e) {
  const o = H(t);
  return o === e || !P(o) || ie(o) ? !1 : D(o).position === "fixed" || mo(o, e);
}
function ii(t, e) {
  const o = e.get(t);
  if (o)
    return o;
  let r = pe(t, [], !1).filter((s) => P(s) && ne(s) !== "body"), i = null;
  const a = D(t).position === "fixed";
  let n = a ? H(t) : t;
  for (; P(n) && !ie(n); ) {
    const s = D(n), l = Je(n);
    !l && s.position === "fixed" && (i = null), (a ? !l && !i : !l && s.position === "static" && i && oi.has(i.position) || be(n) && !l && mo(t, n)) ? r = r.filter((d) => d !== n) : i = s, n = H(n);
  }
  return e.set(t, r), r;
}
function ai(t) {
  let {
    element: e,
    boundary: o,
    rootBoundary: r,
    strategy: i
  } = t;
  const a = [...o === "clippingAncestors" ? Ie(e) ? [] : ii(e, this._c) : [].concat(o), r], n = a[0], s = a.reduce((l, d) => {
    const p = Dt(e, d, i);
    return l.top = Y(p.top, l.top), l.right = ye(p.right, l.right), l.bottom = ye(p.bottom, l.bottom), l.left = Y(p.left, l.left), l;
  }, Dt(e, n, i));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function ni(t) {
  const {
    width: e,
    height: o
  } = po(t);
  return {
    width: e,
    height: o
  };
}
function si(t, e, o) {
  const r = L(e), i = F(e), a = o === "fixed", n = X(t, !0, a, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = z(0);
  function d() {
    l.x = De(i);
  }
  if (r || !r && !a)
    if ((ne(e) !== "body" || be(i)) && (s = Pe(e)), r) {
      const c = X(e, !0, a, e);
      l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
    } else i && d();
  a && !r && i && d();
  const p = i && !r && !a ? bo(i, s) : z(0), h = n.left + s.scrollLeft - l.x - p.x, u = n.top + s.scrollTop - l.y - p.y;
  return {
    x: h,
    y: u,
    width: n.width,
    height: n.height
  };
}
function Ve(t) {
  return D(t).position === "static";
}
function zt(t, e) {
  if (!L(t) || D(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let o = t.offsetParent;
  return F(t) === o && (o = o.ownerDocument.body), o;
}
function go(t, e) {
  const o = T(t);
  if (Ie(t))
    return o;
  if (!L(t)) {
    let i = H(t);
    for (; i && !ie(i); ) {
      if (P(i) && !Ve(i))
        return i;
      i = H(i);
    }
    return o;
  }
  let r = zt(t, e);
  for (; r && Gr(r) && Ve(r); )
    r = zt(r, e);
  return r && ie(r) && Ve(r) && !Je(r) ? o : r || Qr(t) || o;
}
const li = async function(t) {
  const e = this.getOffsetParent || go, o = this.getDimensions, r = await o(t.floating);
  return {
    reference: si(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ci(t) {
  return D(t).direction === "rtl";
}
const di = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xr,
  getDocumentElement: F,
  getClippingRect: ai,
  getOffsetParent: go,
  getElementRects: li,
  getClientRects: Jr,
  getDimensions: ni,
  getScale: oe,
  isElement: P,
  isRTL: ci
};
function fo(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function hi(t, e) {
  let o = null, r;
  const i = F(t);
  function a() {
    var s;
    clearTimeout(r), (s = o) == null || s.disconnect(), o = null;
  }
  function n(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const d = t.getBoundingClientRect(), {
      left: p,
      top: h,
      width: u,
      height: c
    } = d;
    if (s || e(), !u || !c)
      return;
    const g = fe(h), v = fe(i.clientWidth - (p + u)), x = fe(i.clientHeight - (h + c)), y = fe(p), _ = {
      rootMargin: -g + "px " + -v + "px " + -x + "px " + -y + "px",
      threshold: Y(0, ye(1, l)) || 1
    };
    let k = !0;
    function C(J) {
      const R = J[0].intersectionRatio;
      if (R !== l) {
        if (!k)
          return n();
        R ? n(!1, R) : r = setTimeout(() => {
          n(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !fo(d, t.getBoundingClientRect()) && n(), k = !1;
    }
    try {
      o = new IntersectionObserver(C, {
        ..._,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(C, _);
    }
    o.observe(t);
  }
  return n(!0), a;
}
function pi(t, e, o, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: n = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = tt(t), p = i || a ? [...d ? pe(d) : [], ...pe(e)] : [];
  p.forEach((y) => {
    i && y.addEventListener("scroll", o, {
      passive: !0
    }), a && y.addEventListener("resize", o);
  });
  const h = d && s ? hi(d, o) : null;
  let u = -1, c = null;
  n && (c = new ResizeObserver((y) => {
    let [_] = y;
    _ && _.target === d && c && (c.unobserve(e), cancelAnimationFrame(u), u = requestAnimationFrame(() => {
      var k;
      (k = c) == null || k.observe(e);
    })), o();
  }), d && !l && c.observe(d), c.observe(e));
  let g, v = l ? X(t) : null;
  l && x();
  function x() {
    const y = X(t);
    v && !fo(v, y) && o(), v = y, g = requestAnimationFrame(x);
  }
  return o(), () => {
    var y;
    p.forEach((_) => {
      i && _.removeEventListener("scroll", o), a && _.removeEventListener("resize", o);
    }), h?.(), (y = c) == null || y.disconnect(), c = null, l && cancelAnimationFrame(g);
  };
}
const ui = Hr, bi = Ur, mi = Br, gi = (t, e, o) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: di,
    ...o
  }, a = {
    ...i.platform,
    _c: r
  };
  return jr(t, e, {
    ...i,
    platform: a
  });
};
function fi(t) {
  let e = t;
  for (; e; ) {
    const o = e.closest?.("dialog");
    if (o) return o;
    if (e.assignedSlot) {
      e = e.assignedSlot;
      continue;
    }
    const r = e.getRootNode();
    if (r === document || r === e) break;
    e = r.host || null;
  }
  return document.body;
}
const j = b`var(--pm-bg-primary, var(--color-background-primary, rgb(var(--now-color_background--primary, 255, 255, 255))))`, E = b`var(--pm-text-primary, var(--color-text-primary, rgb(var(--now-color_text--primary, 23, 43, 49))))`, vo = b`var(--pm-text-secondary, var(--color-text-secondary, rgb(var(--now-color_text--secondary, 41, 65, 73))))`, re = b`var(--pm-text-tertiary, var(--color-text-tertiary, rgb(var(--now-color_text--tertiary, 74, 94, 101))))`, wo = b`var(--pm-shadow-sm, var(--shadow-sm, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)))`, vi = b`var(--pm-shadow-md, var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)))`, yo = b`var(--pm-border-color-primary, var(--color-border-default, rgb(var(--now-color_border--primary-actionable, 140, 164, 172))))`, Ce = b`var(--pm-border-color-tertiary, var(--color-border-subtle, rgb(var(--now-color_border--tertiary, 215, 225, 229))))`, M = b`var(--pm-bg-ghost-button-hover, var(--color-background-secondary-raised-hover, rgb(var(--now-color_surface--neutral-5, 204, 217, 221))))`, ot = b`var(--pm-bg-ghost-button-active, var(--color-background-secondary-raised-active, rgb(var(--now-color_surface--neutral-6, 193, 207, 212))))`, xo = b`var(--pm-bg-ghost-button-trigger-active, var(--color-background-secondary-raised-hover, rgb(var(--now-color_surface--neutral-5, 204, 217, 221))))`, _o = b`var(--pm-bg-menu-item-hover, var(--color-background-primary-raised-hover, rgb(var(--now-color_surface--neutral-5, 204, 217, 221))))`, ko = b`var(--pm-bg-menu-item-active, var(--color-background-primary-raised-active, rgb(var(--now-color_surface--neutral-6, 193, 207, 212))))`, wi = b`var(--pm-bg-skeleton-line, var(--surface-secondary, var(--color-surface-secondary, rgb(var(--now-color_surface--brand-2, 230, 242, 246)))))`, Lt = b`var(--pm-bg-primary-button-default, var(--color-primary, rgb(var(--now-actionable--primary--background-color, 0, 128, 163))))`, Mt = b`var(--pm-bg-primary-button-hover, var(--color-primary-hover, rgb(var(--now-actionable--primary--background-color--hover, 0, 111, 142))))`, yi = b`var(--pm-bg-primary-button-active, var(--color-primary-active, rgb(var(--now-actionable--primary--background-color--active, 0, 96, 122))))`, xi = b`var(--pm-primary-button-text, var(--color-primary-content, rgb(var(--now-actionable_label--primary--color, 255, 255, 255))))`, Ft = b`var(--pm-bg-secondary-button-default, var(--color-secondary, rgb(var(--now-color_surface--neutral-5, 204, 217, 221))))`, Nt = b`var(--pm-bg-secondary-button-hover, var(--color-secondary-hover, rgb(var(--now-color_surface--neutral-6, 193, 207, 212))))`, _i = b`var(--pm-bg-secondary-button-active, var(--color-secondary-active, rgb(var(--now-color_surface--neutral-6, 193, 207, 212))))`, ki = b`var(--pm-secondary-button-text, var(--color-secondary-content, rgb(var(--now-color_text--primary, 23, 43, 49))))`;
b`var(--pm-border-radius-actionable, var(--radius-selector, var(--now-actionable--border-radius, 6px)))`;
const Ci = b`var(--pm-tooltip-bg, var(--color-neutral, rgb(var(--now-menu-contextual_container--primary--background-color, 8, 17, 20))))`, $i = b`var(--pm-tooltip-text, var(--color-neutral-content, rgb(var(--now-menu-contextual_container_label--primary--color, 255, 255, 255))))`, $e = b`var(--pm-focus-ring-border-primary, var(--color-border-default, rgb(var(--now-color--focus-2, 36, 138, 19))))`, Ei = b`var(--pm-focus-ring-border-tertiary, var(--color-border-subtle, rgb(var(--now-color--focus-2, 36, 138, 19))))`, U = b`var(--pm-focus-ring-text-primary, var(--color-text-primary, rgb(var(--now-color--focus-2, 36, 138, 19))))`, Co = b`var(--pm-focus-ring-text-tertiary, var(--color-text-tertiary, rgb(var(--now-color--focus-2, 36, 138, 19))))`, $o = b`var(--pm-modal-header-font-family, var(--font-sans, var(--now-font-family, Lato, Arial, sans-serif)))`, Eo = b`var(--pm-modal-header-font-size, var(--text-xl, var(--now-font-size--lg, 1.25rem)))`, Ro = b`var(--pm-modal-header-font-weight, var(--font-weight-normal, var(--now-window--font-weight, normal)))`, To = b`var(--pm-modal-header-line-height, var(--text-xl--line-height, calc(1.75 / 1.25)))`, rt = b`var(--pm-body-text-font-family, var(--font-sans, var(--now-font-family, Lato, Arial, sans-serif)))`, it = b`var(--pm-body-text-font-size, var(--text-sm, var(--now-font-size--md, 0.875rem)))`, at = b`var(--pm-body-text-font-weight, var(--font-weight-light, var(--now-container--font-weight, normal)))`, nt = b`var(--pm-body-text-line-height, var(--text-sm--line-height, calc(1.25 / 0.875)))`, st = b`var(--pm-button-text-font-family, var(--font-sans, var(--now-font-family, Lato, Arial, sans-serif)))`, lt = b`var(--pm-button-text-font-size, var(--text-sm, var(--now-font-size--md, 0.875rem)))`, ct = b`var(--pm-button-text-font-weight, var(--font-weight-normal, var(--now-menu--font-weight, normal)))`, dt = b`var(--pm-button-text-line-height, var(--text-sm--line-height, calc(1.25 / 0.875)))`, So = b`var(--pm-label-text-md-font-family, var(--font-sans, var(--now-font-family, Lato, Arial, sans-serif)))`, Oo = b`var(--pm-label-text-md-font-size, var(--text-sm, var(--now-font-size--md, 0.875rem)))`, Ao = b`var(--pm-label-text-md-font-weight, var(--font-weight-normal, var(--now-display-type--title-primary--font-weight, 600)))`, Io = b`var(--pm-label-text-md-line-height, var(--text-sm--line-height, calc(1.25 / 0.875)))`, Ue = b`var(--pm-menu-text-font-family, var(--font-sans, var(--now-font-family, Lato, Arial, sans-serif)))`, Ge = b`var(--pm-menu-text-font-size, var(--text-xs, var(--now-font-size--sm, 0.75rem)))`, Ke = b`var(--pm-menu-text-font-weight, var(--font-weight-normal, var(--now-menu--font-weight, normal)))`, We = b`var(--pm-menu-text-line-height, var(--text-xs--line-height, calc(1 / 0.75)))`;
let Ri = 0;
class Ti extends S {
  static properties = {
    text: { type: String },
    placement: { type: String },
    offsetDistance: { type: Number, attribute: "offset-distance" },
    maxWidth: { type: Number, attribute: "max-width" }
  };
  static styles = [
    b`
			:host {
				display: block;
				min-width: 0;
			}

			.trigger-wrapper {
				display: block;
				min-width: 0;
			}
		`
  ];
  constructor() {
    super(), this.text = "", this.placement = "top", this.offsetDistance = 8, this.maxWidth = 250, this._cleanup = null, this._tooltipEl = null, this._visible = !1, this._hovering = !1, this._tooltipId = `pm-tooltip-${Ri++}`;
  }
  /* ------------------------------------------------------------------ */
  /*  Portal element management                                          */
  /* ------------------------------------------------------------------ */
  /**
   * Return the container the tooltip portal should be appended to.
   * Delegates to the shared `findPortalContainer` utility.
   */
  _getPortalContainer() {
    return fi(this);
  }
  /**
   * Lazily create the tooltip DOM node inside the resolved container.
   * This ensures it is never clipped by ancestor overflow rules.
   */
  _ensureTooltipEl() {
    if (!this._tooltipEl) {
      const e = document.createElement("div");
      e.className = "pm-tooltip-portal rounded-md px-3 py-1.5 text-xs shadow-md", e.setAttribute("role", "tooltip"), e.setAttribute("aria-hidden", "true"), e.id = this._tooltipId, Object.assign(e.style, {
        position: "fixed",
        width: "max-content",
        maxWidth: `${this.maxWidth}px`,
        top: "0",
        left: "0",
        pointerEvents: "none",
        zIndex: "9999",
        opacity: "0",
        transition: "opacity 150ms ease",
        whiteSpace: "normal",
        wordWrap: "break-word",
        background: Ci.cssText,
        color: $i.cssText
      }), this._getPortalContainer().appendChild(e), this._tooltipEl = e;
    }
    this._tooltipEl.textContent = this.text;
  }
  /* ------------------------------------------------------------------ */
  /*  Show / Hide                                                        */
  /* ------------------------------------------------------------------ */
  _handleMouseEnter() {
    this._hovering = !0, this._show();
  }
  _handleMouseLeave() {
    this._hovering = !1, this._hide();
  }
  _handleFocusIn(e) {
    e.composedPath()[0]?.matches?.(":focus-visible") && this._show();
  }
  _show() {
    if (!this.text) return;
    this._visible = !0, this._cleanup?.(), this._cleanup = null, this._ensureTooltipEl(), this._tooltipEl.style.opacity = "1", this._tooltipEl.setAttribute("aria-hidden", "false");
    const e = this.shadowRoot.querySelector(".trigger-wrapper");
    this._getTriggerElement()?.setAttribute("aria-describedby", this._tooltipId), this._cleanup = pi(e, this._tooltipEl, () => {
      gi(e, this._tooltipEl, {
        strategy: "fixed",
        placement: this.placement,
        middleware: [
          ui(this.offsetDistance),
          mi(),
          bi({ padding: 8 })
        ]
      }).then(({ x: o, y: r }) => {
        this._tooltipEl && Object.assign(this._tooltipEl.style, {
          left: `${o}px`,
          top: `${r}px`
        });
      });
    });
  }
  _hide() {
    this._visible = !1, this._cleanup && (this._cleanup(), this._cleanup = null), this._tooltipEl && (this._tooltipEl.style.opacity = "0", this._tooltipEl.setAttribute("aria-hidden", "true")), this._getTriggerElement()?.removeAttribute("aria-describedby");
  }
  _handleKeydown(e) {
    e.key === "Escape" && this._visible && this._hide();
  }
  /**
   * Return the first slotted element (the logical trigger) or the
   * wrapper itself when no slotted children exist.
   */
  _getTriggerElement() {
    return this.shadowRoot?.querySelector("slot")?.assignedElements?.({ flatten: !0 })?.[0] ?? this.shadowRoot?.querySelector(".trigger-wrapper");
  }
  /* ------------------------------------------------------------------ */
  /*  Lifecycle                                                          */
  /* ------------------------------------------------------------------ */
  updated(e) {
    super.updated(e), this._visible && (e.has("text") || e.has("placement")) ? this.text ? this._show() : this._hide() : e.has("text") && this.text && !this._visible && this._hovering && this._show(), e.has("maxWidth") && this._tooltipEl && (this._tooltipEl.style.maxWidth = `${this.maxWidth}px`);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._hide(), this._tooltipEl?.remove(), this._tooltipEl = null, this._visible = !1, this._hovering = !1;
  }
  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */
  render() {
    return m`
			<span
				class="trigger-wrapper"
				@mouseenter=${this._handleMouseEnter}
				@mouseleave=${this._handleMouseLeave}
				@focusin=${this._handleFocusIn}
				@focusout=${this._hide}
				@keydown=${this._handleKeydown}
			>
				<slot></slot>
			</span>
		`;
  }
}
O("pm-tooltip", Ti);
class Si extends S {
  static properties = {
    searchQuery: { type: String, attribute: "search-query" },
    loading: { type: Boolean }
  };
  static styles = [
    b`
			:host {
				display: block;
			}

			.search-input {
				width: 100%;
				padding-inline-start: 36px;
				padding-inline-end: 36px;
				padding-block: 12px;
				border-radius: 12px;
				font-family: ${rt};
				font-size: ${it};
				font-weight: ${at};
				line-height: ${nt};
				background: ${j};
				color: ${E};
				border-color: ${yo};
			}

			.search-input:focus {
				outline: none;
				border-color: ${$e};
				box-shadow: 0 0 0 1px ${$e};
			}

			.search-input::placeholder {
				color: ${re};
			}

			.clear-tooltip {
				position: absolute;
				inset-inline-end: 8px;
			}

			.clear-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 20px;
				height: 20px;
				background: transparent;
				border: 0;
				padding: 0;
				cursor: pointer;
				color: ${re};
				transition: color 0.15s ease;
			}

			.clear-btn:hover {
				color: ${vo};
			}

			.clear-btn:focus-visible {
				outline: 2px solid ${Co};
				outline-offset: 2px;
			}

			.search-icon {
				position: absolute;
				inset-inline-start: 12px;
				inset-block-start: 50%;
				transform: translateY(-50%);
				width: 16px;
				height: 16px;
				z-index: 10;
				color: ${re};
				pointer-events: none;
			}

			.search-skeleton {
				height: 40px;
				border-radius: 12px;
			}
		`
  ];
  constructor() {
    super(), this.searchQuery = "", this.loading = !1, this._searchDebounceTimer = null;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearTimeout(this._searchDebounceTimer);
  }
  _handleSearchInput(e) {
    const o = e.target.value;
    clearTimeout(this._searchDebounceTimer), this._searchDebounceTimer = setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent("pm-search-bar-input", {
          detail: { query: o },
          bubbles: !0,
          composed: !0
        })
      );
    }, 300);
  }
  _handleSearchClear() {
    clearTimeout(this._searchDebounceTimer), this.dispatchEvent(
      new CustomEvent("pm-search-bar-clear", {
        bubbles: !0,
        composed: !0
      })
    ), this.renderRoot?.querySelector(".search-input")?.focus();
  }
  render() {
    if (this.loading)
      return m`
				<div>
					<div class="skeleton search-skeleton"></div>
				</div>
			`;
    const e = this.searchQuery.length > 0;
    let o = null;
    return e && (o = m`
				<pm-tooltip class="clear-tooltip" text=${f.CLEAR_SEARCH} placement="bottom">
					<button
						class="clear-btn"
						part="clear-button"
						type="button"
						aria-label=${f.CLEAR_SEARCH}
						@click=${this._handleSearchClear}
					>
						${_r()}
					</button>
				</pm-tooltip>
			`), m`
			<div role="search" part="container">
				<div class="relative flex items-center">
					${xr()}
					<input
						class="input input-bordered search-input"
						part="input"
						type="text"
						placeholder=${f.SEARCH_PLACEHOLDER}
						.value=${this.searchQuery}
						@input=${this._handleSearchInput}
						aria-label=${f.SEARCH_PROMPTS}
					/>
					${o}
				</div>
			</div>
		`;
  }
}
O("pm-search-bar", Si);
const ve = (t) => t.key === "Enter" || t.key === " ", Oi = /* @__PURE__ */ new Set([
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Home",
  "End"
]), Ai = (t) => Oi.has(t.key), Po = (t, e) => e ? !t.composedPath().includes(e) : !0;
class Ii extends S {
  static properties = {
    filterDimensions: { type: Array, attribute: !1 },
    filterValues: { type: Array, attribute: !1 },
    selectedFilters: { type: Object, attribute: !1 },
    multiFilter: { type: Boolean, attribute: "multi-filter" },
    loading: { type: Boolean },
    _openDropdown: { state: !0 },
    _focusedIndex: { state: !0 }
  };
  static styles = [
    b`
			:host {
				display: block;
			}

			.filter-menu {
				min-width: 180px;
				max-height: 260px;
				overflow-y: auto;
				border-radius: 8px;
				background: ${j};
				border: 1px solid ${Ce};
				box-shadow: ${wo};
				z-index: 10;
				margin-block-start: 4px;
				display: flex;
				flex-flow: column wrap;
				padding: 0.5rem;
				font-family: ${Ue};
				font-size: ${Ge};
				font-weight: ${Ke};
				line-height: ${We};
				gap: 0.3rem;
			}

			[data-filter-id] {
				color: ${E};
				font-family: ${st};
				font-size: ${lt};
				font-weight: ${ct};
				line-height: ${dt};
				padding-inline: 16px;
			}

			[data-filter-id]:hover {
				background-color: ${M};
			}

			.trigger-open,
			.trigger-open:hover {
				background-color: ${xo};
			}

			.filter-option {
				text-align: start;
				text-wrap: balance;
				user-select: none;
				display: grid;
				grid-auto-columns: minmax(auto, max-content) auto max-content;
				grid-auto-flow: column;
				align-content: flex-start;
				align-items: center;
				gap: 0.5rem;
				padding-block: 0.5rem;
				padding-inline: 0.625rem;
				font-family: ${Ue};
				font-size: ${Ge};
				font-weight: ${Ke};
				line-height: ${We};
				transition-property: color, background-color, box-shadow;
				transition-duration: 0.2s;
				transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
				border: none;
				background: transparent;
				cursor: pointer;
				width: 100%;
			}

			.checkmark {
				grid-column: 3;
			}
			
			.filter-option:hover:not(.filter-option-selected) {
				background-color: ${_o};
				box-shadow: inset 0 1px oklch(0% 0 0 / 0.01), inset 0 -1px oklch(100% 0 0 / 0.01);
			}

			.filter-option:focus-visible {
				outline: 2px solid ${U};
				outline-offset: 1px;
			}

			[data-filter-id]:focus-visible {
				background-color: ${M};
				outline: 2px solid ${U};
				outline-offset: 1px;
			}

			.filter-option-selected {
				color: ${E};
				background-color: ${ko};
				font-weight: 600;
			}

			.filter-option-unselected {
				color: ${E};
			}

			.skeleton-filters {
				display: flex;
				align-items: center;
				gap: 8px;
				padding-block: 12px;
			}

			.skeleton-filter-btn {
				height: 32px;
				min-width: 100px;
				border-radius: 8px;
			}
		`
  ];
  constructor() {
    super(), this.filterDimensions = [], this.filterValues = [], this.selectedFilters = {}, this.loading = !1, this.multiFilter = !1, this._openDropdown = null, this._focusedIndex = 0, this._boundCloseDropdown = this._closeDropdownOutside.bind(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this._boundCloseDropdown);
  }
  updated(e) {
    super.updated(e), e.has("_openDropdown") && (this._openDropdown !== null ? (document.addEventListener("click", this._boundCloseDropdown), this._focusOpenDropdownOption()) : document.removeEventListener("click", this._boundCloseDropdown));
  }
  _focusOpenDropdownOption() {
    const e = this._getDropdownOptions();
    if (e.length > 0) {
      const o = Math.min(this._focusedIndex, e.length - 1);
      e[o]?.focus();
    }
  }
  _getDropdownOptions() {
    const e = this.renderRoot?.querySelector(".dropdown-open .filter-menu");
    return e ? [...e.querySelectorAll('[role="option"]')] : [];
  }
  _closeDropdownOutside(e) {
    if (this._openDropdown === null) return;
    const o = this.renderRoot?.querySelector(".filter-dropdown.dropdown-open");
    Po(e, o) && (this._openDropdown = null);
  }
  _handleDropdownKeydown(e, o) {
    e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), this._openDropdown = null, this.renderRoot?.querySelector(`[data-filter-id="${o}"]`)?.focus());
  }
  _handleListboxKeydown(e) {
    const o = this._getDropdownOptions();
    if (o.length !== 0)
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault(), e.target?.click();
          break;
        case "ArrowDown":
          e.preventDefault(), this._focusedIndex >= o.length - 1 ? this._focusedIndex = 0 : this._focusedIndex = Math.min(this._focusedIndex + 1, o.length - 1), o[this._focusedIndex]?.focus();
          break;
        case "ArrowUp":
          e.preventDefault(), this._focusedIndex <= 0 ? this._focusedIndex = o.length - 1 : this._focusedIndex = Math.max(this._focusedIndex - 1, 0), o[this._focusedIndex]?.focus();
          break;
        case "Home":
          e.preventDefault(), this._focusedIndex = 0, o[0]?.focus();
          break;
        case "End":
          e.preventDefault(), this._focusedIndex = o.length - 1, o[this._focusedIndex]?.focus();
          break;
        case "Tab":
          this._openDropdown = null;
          break;
      }
  }
  _handleTriggerKeydown(e, o) {
    const r = [...this.renderRoot.querySelectorAll("[data-filter-id]")], i = r.indexOf(e.currentTarget);
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault(), r[(i + 1) % r.length]?.focus();
        break;
      case "ArrowLeft":
        e.preventDefault(), r[(i - 1 + r.length) % r.length]?.focus();
        break;
      case "ArrowDown":
        e.preventDefault(), this._toggleDropdown(e, o);
        break;
    }
  }
  _toggleDropdown(e, o) {
    e.stopPropagation();
    const r = this._openDropdown !== o;
    if (this._openDropdown = r ? o : null, r) {
      const i = this.selectedFilters?.[o] || [], a = this.filterValues.filter((n) => n.dimensionId === o);
      if (i.length > 0) {
        const n = a.findIndex(
          (s) => i.some((l) => l.sysId === s.sysId)
        );
        this._focusedIndex = n >= 0 ? n : 0;
      } else
        this._focusedIndex = 0;
    }
  }
  _handleFilterSelect(e, o) {
    const r = { ...this.selectedFilters }, i = r[e.sysId] || [], a = i.some((n) => n.sysId === o.sysId);
    if (this.multiFilter)
      if (a) {
        const n = i.filter((s) => s.sysId !== o.sysId);
        n.length === 0 ? delete r[e.sysId] : r[e.sysId] = n;
      } else
        r[e.sysId] = [...i, { sysId: o.sysId, label: o.displayLabel || o.label }];
    else
      a ? delete r[e.sysId] : r[e.sysId] = [{ sysId: o.sysId, label: o.displayLabel || o.label }], this.renderRoot?.querySelector(`[data-filter-id="${e.sysId}"]`)?.focus(), this._openDropdown = null;
    this.dispatchEvent(
      new CustomEvent("pm-filter-bar-change", {
        detail: {
          filters: r
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _renderSkeletonFilters() {
    const e = Math.min(3, this.filterDimensions.length || 3), o = ["w-32", "w-40", "w-28"];
    return m`
			<div class="skeleton-filters" role="status" aria-label="Loading filters">
				${Array.from({ length: e }, (r, i) => m`
					<div class="skeleton skeleton-filter-btn ${o[i]}"></div>
				`)}
			</div>
		`;
  }
  render() {
    const e = this.filterDimensions, o = this.filterValues;
    return this.loading ? this._renderSkeletonFilters() : e.length === 0 ? $ : m`
			<div class="flex items-center gap-2" part="container" role="toolbar" aria-label="Filters">
				${e.map((r) => {
      const i = o.filter((c) => c.dimensionId === r.sysId), a = (this.selectedFilters || {})[r.sysId], n = Array.isArray(a) ? a : [], s = new Set(n.map((c) => c.sysId));
      n.length > 0;
      const l = n.length === 1 ? n[0].label : n.length > 1 ? `${r.displayLabel || r.label} (${n.length})` : "", d = this._openDropdown === r.sysId, p = "btn btn-ghost btn-md gap-1.5 rounded-lg", h = m`
						<div
							id="listbox-${r.sysId}"
							class="dropdown-content filter-menu rounded-lg"
							role="listbox"
							aria-multiselectable=${this.multiFilter ? "true" : "false"}
							aria-label=${`${r.displayLabel || r.label} filter options`}
							@keydown=${(c) => this._handleListboxKeydown(c)}
						>
							${i.map(
        (c, g) => m`
									<div
										class="filter-option ${s.has(c.sysId) ? "filter-option-selected" : "filter-option-unselected"} rounded-lg"
										role="option"
										tabindex=${d && this._focusedIndex === g ? "0" : "-1"}
										aria-selected=${s.has(c.sysId) ? "true" : "false"}
										@click=${() => this._handleFilterSelect(r, c)}
										@keydown=${(v) => this._handleDropdownKeydown(v, r.sysId)}
									>
										<span>${c.displayLabel || c.label}</span>
										${s.has(c.sysId) ? m`<span class="checkmark">${fr()}</span>` : $}
									</div>
								`
      )}
						</div>
					`, u = n.length > 1 ? n.map((c) => c.displayLabel || c.label).join(", ") : "";
      return m`
						<div class="dropdown ${d ? "dropdown-open" : "dropdown-close"} filter-dropdown">
							<pm-tooltip .text=${u} placement="bottom">
								<button
									class=${d ? `${p} trigger-open` : p}
									type="button"
									aria-haspopup="listbox"
									aria-expanded=${d}
									aria-controls="listbox-${r.sysId}"
									aria-label=${s.size > 0 ? `${r.displayLabel || r.label} ${s.size} filters selected` : `Filter by ${r.displayLabel || r.label}`}
									data-filter-id=${r.sysId}
									@click=${(c) => this._toggleDropdown(c, r.sysId)}
									@keydown=${(c) => {
        this._handleDropdownKeydown(c, r.sysId), this._handleTriggerKeydown(c, r.sysId);
      }}
								>
									${l || r.displayLabel || r.label} ${yr()}
								</button>
							</pm-tooltip>
							${d ? h : $}
						</div>
					`;
    })}
			</div>
		`;
  }
}
O("pm-filter-bar", Ii);
class Pi extends S {
  static properties = {
    prompt: { type: Object, attribute: !1 },
    showMenu: { type: Boolean, attribute: "show-menu" },
    tabbable: { type: Boolean, attribute: "tabbable" },
    _menuOpen: { state: !0 },
    _titleTruncated: { state: !0 },
    _descTruncated: { state: !0 }
  };
  static styles = [
    b`
			:host {
				display: block;
				min-width: 0;
				--pm-card-height: 128px;
				--pm-card-radius: 12px;
			}

			.card-container {
				height: var(--pm-card-height);
				border-radius: var(--pm-card-radius);
				background: ${j};
				border: 1px solid ${Ce};
				overflow: hidden;
				cursor: pointer;
				transition: box-shadow 0.15s ease;
			}

			.card-container:hover {
				box-shadow: ${vi};
			}

			.card-container .card-body {
				padding: 12px 16px;
				gap: 4px;
				display: flex;
				flex-direction: column;
			}

			.pm-card-title {
				color: ${E};
				font-family: ${So};
				font-size: ${Oo};
				line-height: ${Io};
				min-height: 24px;
				font-weight: ${Ao};
				margin: 0;
				max-width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.card-description {
				color: ${vo};
				font-family: ${rt};
				font-size: ${it};
				line-height: ${nt};
				font-weight: ${at};
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
				margin: 0;
			}

			.card-menu-dropdown {
				position: absolute;
				inset-block-end: 100%;
				inset-inline-end: 0;
				margin-block-end: 4px;
				min-width: 120px;
				border-radius: 8px;
				background: ${j};
				border: 1px solid ${Ce};
				box-shadow: ${wo};
				z-index: 10;
				padding: 8px;
			}

			.card-delete-btn {
				display: flex;
				align-items: center;
				gap: 8px;
				width: 100%;
				white-space: nowrap;
				color: ${E};
				padding: 8px;
				font-family: ${Ue};
				font-size: ${Ge};
				font-weight: ${Ke};
				line-height: ${We};
				background: transparent;
				border: 0;
				text-align: start;
				cursor: pointer;
				transition: background-color 0.15s ease;
			}

			.card-delete-btn:hover {
				background: ${_o};
			}

			.card-delete-btn:active {
				background: ${ko};
			}

			.card-delete-btn:focus-visible {
				outline: 2px solid ${U};
				outline-offset: 2px;
			}

			.favorite-btn,
			.more-menu-wrapper button.btn {
				color: ${E};
			}

			.favorite-btn:hover,
			.more-menu-wrapper button.btn:hover {
				background-color: ${M};
			}

			.favorite-btn:active {
				background-color: ${ot};
			}

			.more-menu-wrapper button.btn[aria-expanded="true"],
			.more-menu-wrapper button.btn[aria-expanded="true"]:hover {
				background-color: ${xo};
			}

			.favorite-btn:focus-visible,
			.more-menu-wrapper button.btn:focus-visible {
				outline: 2px solid ${U};
				outline-offset: 2px;
				background-color: ${M};
			}
		`
  ];
  constructor() {
    super(), this.prompt = null, this.showMenu = !1, this.tabbable = !0, this._menuOpen = !1, this._titleTruncated = !1, this._descTruncated = !1, this._boundCloseMenu = this._closeMenuOutside.bind(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this._boundCloseMenu);
  }
  updated(e) {
    super.updated(e), e.has("_menuOpen") && (this._menuOpen ? document.addEventListener("click", this._boundCloseMenu) : document.removeEventListener("click", this._boundCloseMenu));
  }
  _closeMenuOutside(e) {
    const o = this.shadowRoot?.querySelector(".more-menu-wrapper");
    Po(e, o) && (this._menuOpen = !1);
  }
  _handleCardClick() {
    this.dispatchEvent(
      new CustomEvent("pm-card-click", {
        detail: { sysId: this.prompt?.sys_id, prompt: this.prompt },
        bubbles: !0,
        composed: !0
      })
    );
  }
  activate() {
    this.prompt && this._handleCardClick();
  }
  _handleFavoriteClick(e) {
    e.stopPropagation(), this.dispatchEvent(
      new CustomEvent("pm-card-favorite", {
        detail: { sysId: this.prompt?.sys_id, favorited: !this.prompt?.favorite, prompt: this.prompt },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleFavoriteKeydown(e) {
    ve(e) && (e.preventDefault(), e.stopPropagation(), this._handleFavoriteClick(e));
  }
  _handleTitleHover(e) {
    const o = e.currentTarget;
    this._titleTruncated = o.scrollWidth > o.clientWidth;
  }
  _handleDescriptionHover(e) {
    const o = e.currentTarget;
    this._descTruncated = o.scrollHeight > o.clientHeight;
  }
  _handleMenuToggle(e) {
    e.stopPropagation(), this.prompt?.type !== "topic" && (this._menuOpen = !this._menuOpen);
  }
  _handleMenuKeydown(e) {
    ve(e) ? (e.preventDefault(), e.stopPropagation(), this._handleMenuToggle(e), this._menuOpen && this.updateComplete.then(() => {
      this.shadowRoot?.querySelector('[role="menuitem"]')?.focus();
    })) : e.key === "Escape" && this._menuOpen && (e.preventDefault(), e.stopPropagation(), this._menuOpen = !1, this.shadowRoot?.querySelector(".more-menu-wrapper button")?.focus());
  }
  _handleDeleteClick(e) {
    e.stopPropagation(), this.prompt?.type !== "topic" && (this._menuOpen = !1, this.dispatchEvent(
      new CustomEvent("pm-card-delete", {
        detail: { sysId: this.prompt?.sys_id, prompt: this.prompt },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  _handleDeleteKeydown(e) {
    ve(e) ? (e.preventDefault(), e.stopPropagation(), this._handleDeleteClick(e)) : e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), this._menuOpen = !1, this.shadowRoot?.querySelector(".more-menu-wrapper button")?.focus());
  }
  _renderFavoriteIcon(e) {
    return e ? $r() : Cr();
  }
  _renderMoreMenu() {
    let e = null;
    return this._menuOpen && (e = m`
				<div class="card-menu-dropdown" role="menu" aria-label=${f.CARD_ACTIONS}>
					<button
						class="card-delete-btn"
						type="button"
						role="menuitem"
						@click=${this._handleDeleteClick}
						@keydown=${this._handleDeleteKeydown}
					>
						${Er()}
						${f.DELETE}
					</button>
				</div>
			`), m`
			<div class="more-menu-wrapper relative shrink-0">
				<pm-tooltip text=${f.MORE_ACTIONS} placement="top">
					<button
						class="btn btn-ghost btn-sm btn-square"
						type="button"
						aria-label=${f.MORE_ACTIONS}
						aria-haspopup="menu"
						aria-expanded=${this._menuOpen}
						tabindex=${this.tabbable ? "0" : "-1"}
						@click=${this._handleMenuToggle}
						@keydown=${this._handleMenuKeydown}
					>
						${Rr()}
					</button>
				</pm-tooltip>
				${e}
			</div>
		`;
  }
  render() {
    if (!this.prompt) return $;
    const { title: e, description: o, prompt: r, favorite: i, type: a } = this.prompt, n = e || (a === "prompt" ? f.DEFAULT_PROMPT_TITLE : ""), s = o || r || "", l = this.prompt.type === "topic";
    let d = $;
    s && (d = m`
				<pm-tooltip .text=${this._descTruncated ? s : ""} placement="bottom">
					<p
						class="card-description"
						part="description"
						@mouseenter=${this._handleDescriptionHover}
					>
						${s}
					</p>
				</pm-tooltip>
			`);
    const p = this.showMenu && !l ? this._renderMoreMenu() : $, h = m`
			<pm-tooltip text=${i ? f.REMOVE_FROM_FAVORITES : f.ADD_TO_FAVORITES} placement="top">
				<button
					class="btn btn-ghost btn-sm btn-square favorite-btn transition-transform"
					@click=${this._handleFavoriteClick}
					@keydown=${this._handleFavoriteKeydown}
					aria-label=${i ? f.REMOVE_FROM_FAVORITES : f.ADD_TO_FAVORITES}
					tabindex=${this.tabbable ? "0" : "-1"}
					type="button"
				>
					${this._renderFavoriteIcon(i)}
				</button>
			</pm-tooltip>
		`;
    return m`
			<div
				class="card card-border card-compact card-container"
				part="container"
				@click=${this._handleCardClick}
			>
				<div class="card-body overflow-hidden" part="body">
					<div class="overflow-hidden">
						<pm-tooltip .text=${this._titleTruncated ? n : ""} placement="top">
							<h3
								class="pm-card-title"
								part="title"
								@mouseenter=${this._handleTitleHover}
							>
								${n}
							</h3>
						</pm-tooltip>
					</div>

					${d}

					<slot></slot>

					<div class="card-actions mt-auto justify-end" part="actions">
						${p}
						${h}
					</div>
				</div>
			</div>
		`;
  }
}
O("pm-card", Pi);
class Di extends S {
  static properties = {
    prompts: { type: Array, attribute: !1 },
    activeCategory: { type: String, attribute: "active-category" },
    loading: { type: Boolean },
    loadingMore: { type: Boolean, attribute: "loading-more" },
    hasNextPage: { type: Boolean, attribute: "has-next-page" },
    totalCount: { type: Number, attribute: "total-count" },
    error: { type: Object, attribute: !1 },
    pageSize: { type: Number, attribute: "page-size" },
    _focusedIndex: { state: !0 },
    _columnCount: { state: !0 }
  };
  static styles = [
    b`
			:host {
				display: flex;
				flex-direction: column;
				flex: 1;
				height: 100%;
				overflow: var(--pm-container-overflow, hidden);
				container-type: inline-size;
			}

			.grid-layout {
				display: grid;
				grid-template-columns: repeat(1, minmax(0, 1fr));
			}

			@container (min-width: 481px) {
				.grid-layout {
					grid-template-columns: repeat(2, minmax(0, 1fr));
				}
			}

			@container (min-width: 769px) {
				.grid-layout {
					grid-template-columns: repeat(3, minmax(0, 1fr));
				}
			}

			[role="row"] {
				display: contents;
			}

			[role="gridcell"]:focus {
				outline: none;
			}

			[role="gridcell"]:focus-visible {
				outline: 2px solid ${Ei};
				outline-offset: 2px;
			}

			.empty-state {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 200px;
				color: ${re};
			}

			.cards-area {
				flex: 1;
				overflow-y: var(--pm-container-overflow, auto);
				padding: 4px;
			}

			.cards-area--loading {
				overflow-y: hidden;
			}

			.pm-grid-skeleton-card {
				background: ${j};
				border: 1px solid ${Ce};
			}

			.pm-grid-skeleton-line {
				background-color: ${wi};
			}

		`
  ];
  constructor() {
    super(), this.prompts = [], this.activeCategory = "", this.loading = !1, this.loadingMore = !1, this.hasNextPage = !1, this.totalCount = 0, this.error = null, this.pageSize = 9, this._focusedIndex = 0, this._columnCount = 1, this._pendingFocusTarget = null, this._pendingFocusRaf = null, this._resizeObserver = null, this._columnDetectRaf = null, this._isRtl = !1, this._loadMoreRequested = !1, this._rows = [], this._liveAnnouncement = "", this._prevPromptCount = 0;
  }
  firstUpdated() {
    super.firstUpdated?.();
    const e = this.renderRoot.querySelector(".cards-area");
    e && (this._resizeObserver = new ResizeObserver(() => {
      this._scheduleColumnDetect();
    }), this._resizeObserver.observe(e));
  }
  willUpdate(e) {
    if (super.willUpdate?.(e), (e.has("loadingMore") || e.has("error")) && (this._loadMoreRequested = !1), e.has("loadingMore") && this.loadingMore && (this._liveAnnouncement = f.LOADING_MORE), e.has("loadingMore") && !this.loadingMore && this._liveAnnouncement === f.LOADING_MORE && (this._liveAnnouncement = ""), e.has("activeCategory") && (this._liveAnnouncement = "", this._prevPromptCount = 0), e.has("prompts") && this.prompts?.length > 0) {
      const o = this._prevPromptCount, r = this.prompts.length;
      o > 0 && r > o && (this._liveAnnouncement = f.PROMPTS_LOADED(r - o)), this._prevPromptCount = r;
    }
    (e.has("prompts") || e.has("_columnCount")) && (this._rows = this._computeRows());
  }
  updated(e) {
    super.updated(e), e.has("activeCategory") && this.renderRoot?.querySelector(".cards-area")?.scrollTo(0, 0), e.has("prompts") && this.prompts?.length > 0 && this._scheduleColumnDetect(), (e.has("prompts") || e.has("hasNextPage")) && this._syncSentinel(), this._reconcileFocus(e);
  }
  /**
   * Resolves focus state after property changes. Priority order:
   *  1. Category change resets everything (early return).
   *  2. Data change resolves a pending focus target or clamps the index.
   *  3. loadingMore→false without new data clears a stale pending target.
   */
  _reconcileFocus(e) {
    if (e.has("activeCategory")) {
      this._focusedIndex = 0, this._pendingFocusTarget = null;
      return;
    }
    if (e.has("prompts")) {
      if (!this.prompts?.length) {
        this._focusedIndex = 0, this._pendingFocusTarget = null;
        return;
      }
      const o = this.prompts.length - 1;
      if (this._pendingFocusTarget !== null)
        if (this._pendingFocusTarget <= o) {
          const r = this._pendingFocusTarget;
          this._pendingFocusTarget = null, this._focusedIndex = r, cancelAnimationFrame(this._pendingFocusRaf), this._pendingFocusRaf = requestAnimationFrame(() => this._focusCard(r));
        } else
          this._pendingFocusTarget = null, this._focusedIndex > o && (this._focusedIndex = o);
      else
        this._focusedIndex > o && (this._focusedIndex = o);
    }
    e.has("loadingMore") && !this.loadingMore && !e.has("prompts") && this._pendingFocusTarget !== null && (this._pendingFocusTarget = null);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), cancelAnimationFrame(this._pendingFocusRaf), cancelAnimationFrame(this._columnDetectRaf), this._disconnectScrollObserver(), this._resizeObserver?.disconnect(), this._resizeObserver = null;
  }
  /* ------------------------------------------------------------------ */
  /*  Column count detection                                             */
  /* ------------------------------------------------------------------ */
  _scheduleColumnDetect() {
    cancelAnimationFrame(this._columnDetectRaf), this._columnDetectRaf = requestAnimationFrame(() => this._detectColumnCount());
  }
  _detectColumnCount() {
    const e = this.renderRoot?.querySelector('[role="grid"]');
    if (!e) return;
    const o = getComputedStyle(e);
    this._isRtl = o.direction === "rtl";
    const r = o.getPropertyValue("grid-template-columns");
    if (!r || r === "none") return;
    const i = r.split(/\s+/).filter((a) => a !== "" && a !== "none").length;
    i > 0 && i !== this._columnCount && (this._columnCount = i);
  }
  _computeRows() {
    const e = this.prompts ?? [], o = this._columnCount, r = [];
    for (let i = 0; i < e.length; i += o)
      r.push(e.slice(i, i + o));
    return r;
  }
  /* ------------------------------------------------------------------ */
  /*  Focus management                                                   */
  /* ------------------------------------------------------------------ */
  /**
   * Moves focus to the card at the given flat index.
   * Scrolls the card into view and calls its delegated focus() method.
   */
  _focusCard(e) {
    const o = this.renderRoot?.querySelector(`[role="gridcell"][data-index="${e}"]`);
    o && (o.scrollIntoView?.({ block: "nearest", inline: "nearest" }), o.focus());
  }
  /**
   * Syncs focused index when a card receives focus (e.g. click or Tab).
   * Uses event delegation — a single @focusin on the grid container
   * replaces per-card @focus bindings, avoiding closure re-creation.
   */
  _handleGridFocusIn(e) {
    const o = e.target.closest?.('[role="gridcell"]');
    o && (this._focusedIndex = Number(o.dataset.index));
  }
  /* ------------------------------------------------------------------ */
  /*  Keyboard navigation (WAI-ARIA grid pattern)                        */
  /* ------------------------------------------------------------------ */
  _handleGridKeydown(e) {
    if (e.key === "Escape") {
      const u = e.composedPath().find((c) => c.matches?.('[role="gridcell"]'));
      u && this.shadowRoot?.activeElement !== u && (e.preventDefault(), u.focus());
      return;
    }
    if (ve(e)) {
      const u = this.shadowRoot?.activeElement;
      u?.matches?.('[role="gridcell"]') && (e.preventDefault(), u.querySelector("pm-card")?.activate());
      return;
    }
    if (!Ai(e) || !this.shadowRoot?.activeElement?.matches?.('[role="gridcell"]')) return;
    const o = this.prompts?.length ?? 0;
    if (o === 0) return;
    e.preventDefault();
    const r = this._isRtl;
    let i = e.key;
    r && (i === "ArrowRight" ? i = "ArrowLeft" : i === "ArrowLeft" && (i = "ArrowRight"));
    const a = this._columnCount, n = this._focusedIndex, s = Math.floor(n / a), l = n % a, d = Math.ceil(o / a), p = o - 1;
    let h = n;
    switch (i) {
      case "ArrowRight":
        l < a - 1 && n + 1 <= p && (h = n + 1);
        break;
      case "ArrowLeft":
        l > 0 && (h = n - 1);
        break;
      case "ArrowDown": {
        const u = n + a;
        u <= p ? h = u : s < d - 1 ? h = p : this.hasNextPage && !this.loadingMore && (this._pendingFocusTarget = n + a, this._handleLoadMore());
        break;
      }
      case "ArrowUp":
        n - a >= 0 && (h = n - a);
        break;
      case "Home":
        e.ctrlKey || e.metaKey ? h = 0 : h = s * a;
        break;
      case "End":
        e.ctrlKey || e.metaKey ? h = p : h = Math.min((s + 1) * a - 1, p);
        break;
      default:
        return;
    }
    h !== n && (this._focusedIndex = h, this._focusCard(h));
  }
  /* ------------------------------------------------------------------ */
  /*  Infinite scroll (IntersectionObserver)                             */
  /* ------------------------------------------------------------------ */
  /**
   * Resolves the appropriate IntersectionObserver root for infinite scroll.
   *
   * Normally `.cards-area` is the scroll container and should be used as the
   * root so intersection is detected relative to its visible bounds.
   *
   * When `--pm-container-overflow` is set to `visible` by an ancestor (e.g.
   * the modal at high zoom), `.cards-area` is no longer a scroll container.
   * An element with `overflow: visible` is not a valid IntersectionObserver
   * root, so we fall back to `null` (the viewport) in that case.
   *
   * @returns {Element|null}
   */
  _resolveScrollRoot() {
    const e = this.renderRoot?.querySelector(".cards-area");
    return e ? getComputedStyle(e).overflowY === "visible" ? null : e : null;
  }
  _ensureScrollObserver() {
    const e = this._resolveScrollRoot();
    this._scrollObserver && this._scrollObserverRoot === e || (this._scrollObserver && (this._scrollObserver.disconnect(), this._scrollObserver = null), this._scrollObserverRoot = e, this._scrollObserver = new IntersectionObserver(
      (o) => {
        o[0]?.isIntersecting && this.hasNextPage && !this.loadingMore && this._handleLoadMore();
      },
      { root: e, rootMargin: "0px", threshold: 0 }
    ));
  }
  _syncSentinel() {
    if (!this.hasNextPage) {
      this._scrollObserverTarget && (this._scrollObserver?.unobserve(this._scrollObserverTarget), this._scrollObserverTarget = null);
      return;
    }
    const e = this.renderRoot?.querySelector(".scroll-sentinel");
    this._scrollObserverTarget && (this._scrollObserver?.unobserve(this._scrollObserverTarget), this._scrollObserverTarget = null), e && (this._ensureScrollObserver(), this._scrollObserver.observe(e), this._scrollObserverTarget = e);
  }
  _disconnectScrollObserver() {
    this._scrollObserver && (this._scrollObserver.disconnect(), this._scrollObserver = null, this._scrollObserverRoot = null, this._scrollObserverTarget = null);
  }
  _handleLoadMore() {
    this._loadMoreRequested || (this._loadMoreRequested = !0, this.dispatchEvent(
      new CustomEvent("pm-grid-next-page", {
        bubbles: !0,
        composed: !0
      })
    ));
  }
  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */
  _renderCards() {
    const e = "grid-layout gap-2";
    if (this.error) {
      const s = (typeof this.error == "string" ? this.error : this.error?.message) || f.ERROR_GENERIC;
      return m`
				<div class="empty-state text-error" role="alert">
					${s}
				</div>
			`;
    }
    if (this.loading) {
      const s = this.pageSize;
      return m`
				<div class=${e} role="status" aria-label=${f.LOADING}>
					${Array.from({ length: s }, () => m`
						<div class="card card-border card-compact pm-grid-skeleton-card">
							<div class="card-body p-4 gap-2">
								<div class="skeleton pm-grid-skeleton-line h-4 w-3/4 rounded"></div>
								<div class="skeleton pm-grid-skeleton-line h-3 w-full rounded"></div>
								<div class="skeleton pm-grid-skeleton-line h-3 w-5/6 rounded mt-auto"></div>
							</div>
						</div>
					`)}
				</div>
			`;
    }
    if ((this.prompts ?? []).length === 0)
      return m`
				<div class="empty-state" role="status">${f.NO_PROMPTS}</div>
			`;
    let o = $;
    this.loadingMore && (o = m`
				<div class="flex items-center justify-center gap-2 py-4 text-sm text-base-content/40" aria-hidden="true">
					<span class="loading loading-spinner loading-sm"></span> ${f.LOADING_MORE}
				</div>
			`);
    let r = $;
    this.hasNextPage && (r = m`<div class="scroll-sentinel h-px"></div>`);
    const i = this._columnCount, a = this._rows, n = this.totalCount > 0 ? Math.ceil(this.totalCount / i) : a.length;
    return m`
			<div
				class=${e}
				role="grid"
				aria-label=${Kt[this.activeCategory] ?? f.PROMPT_GRID}
				aria-busy=${this.loadingMore ? "true" : "false"}
				aria-colcount=${i}
				aria-rowcount=${n}
				@keydown=${this._handleGridKeydown}
				@focusin=${this._handleGridFocusIn}
			>
				${vt(a, (s) => s[0]?.sys_id, (s, l) => m`
					<div role="row" aria-rowindex=${l + 1} aria-label=${f.ROW_LABEL(l + 1)}>
						${vt(s, (d) => d.sys_id, (d, p) => {
      const h = l * i + p;
      return m`
								<div role="gridcell" class="min-w-0"
									data-index=${h}
									aria-colindex=${p + 1}
									tabindex=${h === this._focusedIndex ? "0" : "-1"}
								>
									<pm-card
										.prompt=${d}
										.tabbable=${h === this._focusedIndex}
										?show-menu=${d.canDelete === !0}
									></pm-card>
								</div>
							`;
    })}
					</div>
				`)}
			</div>
			<div class="grid-footer">
				${o}${r}
			</div>
		`;
  }
  render() {
    const e = this.loading ? "cards-area cards-area--loading" : "cards-area";
    return m`
			<div class=${e} part="container">
				${this._renderCards()}
			</div>
			<div class="sr-only" role="status" aria-live="polite" aria-atomic="true">
				${this._liveAnnouncement}
			</div>
		`;
  }
}
O("pm-grid", Di);
class zi extends S {
  static properties = {
    activeCategory: { type: String, attribute: "active-category" },
    loading: { type: Boolean },
    hideRecommended: { type: Boolean, attribute: "hide-recommended" },
    _focusedCategory: { state: !0 },
    _hasOverflow: { state: !0 },
    _canScrollLeft: { state: !0 },
    _canScrollRight: { state: !0 }
  };
  static styles = [
    b`
			:host,
			.tab-panel {
				display: flex;
				flex-direction: column;
				flex: 1;
				min-height: 0;
			}

			.tab-panel {
				gap: 8px;
			}

			.tabs-chevron-wrapper {
				display: flex;
				align-items: center;
			}

			.tabs-nav {
				flex-wrap: nowrap;
				overflow-x: auto;
				scrollbar-width: none;
				gap: 16px;
				padding-block: 4px;
				padding-inline: 4px;
			}


			.tabs-nav::-webkit-scrollbar {
				display: none;
			}

			.tabs-chevron-wrapper .tabs-nav {
				flex: 1;
				min-width: 0;
			}

			.skeleton-tabs {
				gap: 0.25rem;
				padding-block: 0.5rem;
				flex-wrap: nowrap;
			}

			.tab {
				color: ${re};
				font-family: ${st};
				font-size: ${lt};
				font-weight: ${ct};
				line-height: ${dt};
				padding-inline: 2px;
			}

			.tab:hover,
			.tab.tab-active {
				color: ${E};
			}

			.tab:focus-visible {
				outline: 2px solid ${Co};
				outline-offset: 2px;
				border-radius: 2px;
			}

			.tab.tab-active:focus-visible {
				outline-color: ${U};
			}

			.chevron-btn {
				color: ${E};
			}

			.chevron-btn:hover {
				background-color: ${M};
			}

			.chevron-btn:active {
				background-color: ${ot};
			}

			.chevron-btn:focus-visible {
				outline: 2px solid ${U};
				outline-offset: 2px;
				background-color: ${M};
			}
		`
  ];
  constructor() {
    super(), this.activeCategory = he, this.loading = !1, this.hideRecommended = !1, this._focusedCategory = he, this._hasOverflow = !1, this._canScrollLeft = !1, this._canScrollRight = !1, this._focusedBeforeRender = null, this._checkOverflowRaf = null, this._observedNav = null, this._navResizeObserver = null;
  }
  /* ------------------------------------------------------------------ */
  /*  Lifecycle                                                          */
  /* ------------------------------------------------------------------ */
  willUpdate(e) {
    (e.has("activeCategory") || e.has("hideRecommended")) && (this._focusedCategory = this._selectedCategory), this._focusedBeforeRender = this.renderRoot?.activeElement ?? null;
  }
  updated(e) {
    const o = this._focusedBeforeRender;
    if (this._focusedBeforeRender = null, !this.loading && (this._ensureNavObserver(), (e.has("activeCategory") || e.has("hideRecommended")) && this._scrollActiveTabIntoView(), o?.classList.contains("chevron-btn") && o.classList.contains("invisible"))) {
      const r = this.renderRoot.querySelector(".chevron-btn:not(.invisible)");
      r ? r.focus() : o.blur();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._teardownNavObserver(), this._checkOverflowRaf && (cancelAnimationFrame(this._checkOverflowRaf), this._checkOverflowRaf = null);
  }
  /* ------------------------------------------------------------------ */
  /*  Category state                                                     */
  /* ------------------------------------------------------------------ */
  get _categories() {
    return Ze(this.hideRecommended);
  }
  get _selectedCategory() {
    return Xe(this.activeCategory, this.hideRecommended);
  }
  _selectCategory(e) {
    this.dispatchEvent(
      new CustomEvent("pm-tabs-category-change", {
        detail: { category: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleTabFocus(e) {
    this._focusedCategory = e;
  }
  _handleTablistFocusout(e) {
    (!e.relatedTarget || !this._nav?.contains(e.relatedTarget)) && (this._focusedCategory = this._selectedCategory);
  }
  /* ------------------------------------------------------------------ */
  /*  Keyboard navigation                                                */
  /* ------------------------------------------------------------------ */
  _handleKeydown(e) {
    const o = this._categories;
    if (!o.length) return;
    const r = o.indexOf(this._focusedCategory), i = r === -1 ? 0 : r, a = this._isRtl;
    let n = e.key;
    a && (n === "ArrowRight" ? n = "ArrowLeft" : n === "ArrowLeft" && (n = "ArrowRight"));
    let s = i;
    switch (n) {
      case "ArrowRight":
        e.preventDefault(), s = (i + 1) % o.length;
        break;
      case "ArrowLeft":
        e.preventDefault(), s = i === 0 ? o.length - 1 : i - 1;
        break;
      case "Home":
        e.preventDefault(), s = 0;
        break;
      case "End":
        e.preventDefault(), s = o.length - 1;
        break;
      case "Enter":
      case " ":
        e.preventDefault(), this._selectCategory(this._focusedCategory);
        return;
      default:
        return;
    }
    if (s !== i) {
      this._focusedCategory = o[s];
      const l = this.renderRoot?.querySelectorAll('[role="tab"]'), d = Array.from(l).find(
        (p) => p.dataset.category === this._focusedCategory
      );
      d && (d.focus(), d.scrollIntoView({ block: "nearest", inline: "nearest" }));
    }
  }
  get _isRtl() {
    return getComputedStyle(this).direction === "rtl";
  }
  get _nav() {
    return this.renderRoot?.querySelector(".tabs-nav");
  }
  /* ------------------------------------------------------------------ */
  /*  Overflow detection                                                 */
  /* ------------------------------------------------------------------ */
  _ensureNavObserver() {
    const e = this._nav;
    !e || e === this._observedNav || (this._teardownNavObserver(), this._navResizeObserver = new ResizeObserver(() => {
      this._scheduleCheckOverflow(), this._scrollActiveTabIntoView();
    }), this._navResizeObserver.observe(e), this._observedNav = e);
  }
  _teardownNavObserver() {
    this._navResizeObserver && (this._navResizeObserver.disconnect(), this._navResizeObserver = null, this._observedNav = null);
  }
  _scrollActiveTabIntoView() {
    const e = this.renderRoot?.querySelector('[role="tab"][aria-selected="true"]');
    e && e.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
  /**
   * Throttle _checkOverflow to at most once per animation frame.
   */
  _scheduleCheckOverflow() {
    this._checkOverflowRaf || (this._checkOverflowRaf = requestAnimationFrame(() => {
      this._checkOverflowRaf = null, this._checkOverflow();
    }));
  }
  _checkOverflow() {
    const e = this._nav, o = e?.querySelectorAll('[role="tab"]');
    if (!e || !o?.length || e.scrollWidth <= e.clientWidth) {
      this._canScrollLeft = !1, this._canScrollRight = !1, this._hasOverflow = !1;
      return;
    }
    const r = e.getBoundingClientRect(), i = o[0].getBoundingClientRect(), a = o[o.length - 1].getBoundingClientRect(), n = Math.min(i.left, a.left) < r.left - 1, s = Math.max(i.right, a.right) > r.right + 1;
    this._canScrollLeft = n, this._canScrollRight = s, this._hasOverflow = n || s;
  }
  _scrollTabs(e) {
    const o = this._nav;
    if (!o) return;
    const r = o.clientWidth, i = e === "left" ? o.scrollLeft - r : o.scrollLeft + r;
    o.scrollTo({ left: i, behavior: "smooth" });
  }
  /* ------------------------------------------------------------------ */
  /*  Tab class                                                          */
  /* ------------------------------------------------------------------ */
  _getTabClass(e) {
    return `tab tab-md whitespace-nowrap w-auto transition-colors ${this._selectedCategory === e ? "tab-active" : ""}`;
  }
  /* ------------------------------------------------------------------ */
  /*  Render helpers                                                     */
  /* ------------------------------------------------------------------ */
  _renderSkeletonTabs() {
    const e = ["w-24", "w-16", "w-20", "w-28"];
    return m`
			<div class="skeleton-tabs tabs" role="status" aria-label=${f.LOADING}>
				${this._categories.map((o, r) => m`<div class="skeleton tab ${e[r % e.length]}"></div>`)}
			</div>
			<slot></slot>
		`;
  }
  _renderTabButtons() {
    return this._categories.map(
      (e) => m`
				<button
					type="button"
					id="pm-tab-${e}"
					class=${this._getTabClass(e)}
					role="tab"
					aria-selected=${this._selectedCategory === e ? "true" : "false"}
					aria-controls="pm-tabpanel"
					tabindex=${this._focusedCategory === e ? "0" : "-1"}
					data-category=${e}
					@click=${() => this._selectCategory(e)}
					@focus=${() => this._handleTabFocus(e)}
				>
					${Kt[e]}
				</button>
			`
    );
  }
  _renderChevronLeft() {
    return vr();
  }
  _renderChevronRight() {
    return wr();
  }
  _renderNav() {
    const e = this._isRtl, o = this._hasOverflow && (e ? this._canScrollRight : this._canScrollLeft), r = this._hasOverflow && (e ? this._canScrollLeft : this._canScrollRight), i = e ? this._renderChevronRight() : this._renderChevronLeft(), a = e ? this._renderChevronLeft() : this._renderChevronRight();
    return m`
			<div class="tabs-chevron-wrapper">
				<pm-tooltip text=${f.SCROLL_TABS_BACKWARD} placement="bottom" ?inert=${!o}>
					<button
						class="btn btn-ghost btn-circle btn-xs chevron-btn transition-colors ms-1 me-0.5 ${o ? "" : "invisible"}"
						type="button"
						aria-label=${f.SCROLL_TABS_BACKWARD}
						tabindex="-1"
						@click=${() => this._scrollTabs(e ? "right" : "left")}
					>
						${i}
					</button>
				</pm-tooltip>
				<nav
					class="tabs-nav tabs tabs-border"
					part="nav"
					role="tablist"
					aria-orientation="horizontal"
					aria-label=${f.PROMPT_CATEGORIES}
					@keydown=${this._handleKeydown}
					@focusout=${this._handleTablistFocusout}
					@scroll=${this._scheduleCheckOverflow}
				>
					${this._renderTabButtons()}
				</nav>
				<pm-tooltip text=${f.SCROLL_TABS_FORWARD} placement="bottom" ?inert=${!r}>
					<button
						class="btn btn-ghost btn-circle btn-xs chevron-btn transition-colors me-1 ms-0.5 ${r ? "" : "invisible"}"
						type="button"
						aria-label=${f.SCROLL_TABS_FORWARD}
						tabindex="-1"
						@click=${() => this._scrollTabs(e ? "left" : "right")}
					>
						${a}
					</button>
				</pm-tooltip>
			</div>
			<div id="pm-tabpanel" class="tab-panel pt-2" role="tabpanel" aria-labelledby="pm-tab-${this._selectedCategory}">
				<slot></slot>
			</div>
		`;
  }
  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */
  render() {
    return this.loading ? this._renderSkeletonTabs() : this._renderNav();
  }
}
O("pm-tabs", zi);
const Li = (t) => t == null ? [] : Array.isArray(t) ? t : typeof t != "string" && t[Symbol.iterator] ? Array.from(t) : [t], Mi = (t) => {
  if (t.nodeType !== Node.ELEMENT_NODE || Hi(t))
    return !1;
  if (t.matches(
    'input:not([type="radio"]), select, textarea, button, object'
  ))
    return t.matches(":not([disabled])");
  if (t.matches('input[type="radio"]:not([disabled])')) {
    if (t.checked)
      return !0;
    {
      const e = t.getAttribute("name"), o = t.getRootNode().querySelectorAll(
        `input[type="radio"][name="${e}"]:not([disabled])`
      ), r = t === o[0], i = !Li(o).some(
        (a) => a.checked
      );
      return r && i;
    }
  }
  return t.matches(
    "a[href], area[href], iframe, [tabindex], [contentEditable]"
  );
}, Fi = (t) => {
  let e;
  return t.localName === "slot" ? e = t.assignedNodes({ flatten: !0 }) : e = (t.shadowRoot || t).children, e ? Array.prototype.slice.call(e) : [];
}, Ni = (t) => {
  if (Mi(t)) {
    const e = t.getAttribute("tabindex") || 0;
    return Number(e);
  }
  return -1;
}, ji = (t) => {
  let e = t.style;
  return e.visibility !== "hidden" && e.display !== "none" ? (e = window.getComputedStyle(t), e.visibility !== "hidden" && e.display !== "none") : !1;
}, Qe = (t) => {
  const e = t.length;
  if (e < 2)
    return t;
  const o = Math.ceil(e / 2), r = Qe(t.slice(0, o)), i = Qe(t.slice(o));
  return Bi(r, i);
}, Bi = (t, e) => {
  const o = [];
  for (; t.length > 0 && e.length > 0; )
    Vi(t[0], e[0]) ? o.push(e.shift()) : o.push(t.shift());
  return o.concat(t, e);
}, Vi = (t, e) => {
  const o = Math.max(t.tabIndex, 0), r = Math.max(e.tabIndex, 0);
  return o === 0 || r === 0 ? r > o : o > r;
}, qi = (t) => {
  const e = [];
  let o = !1, r = [t];
  for (; r.length; ) {
    const i = r.shift();
    if (i.nodeType !== Node.ELEMENT_NODE || !ji(i))
      continue;
    const a = Ni(i);
    a > 0 && (o = !0), a >= 0 && e.push(i), r = [...Fi(i), ...r];
  }
  return o ? Qe(e) : e;
}, Hi = (t) => {
  for (; t; ) {
    if (t.hasAttribute("inert"))
      return !0;
    t = t.parentElement;
  }
  return !1;
};
class Ui extends S {
  static properties = {
    open: { type: Boolean, reflect: !0 },
    size: { type: String, reflect: !0 },
    dialogLabel: { type: String, attribute: "dialog-label" }
  };
  static styles = [
    b`
			:host {
				display: block;
			}

			.modal-box {
				background: ${j};
				padding: 24px;
				max-width: calc(100vw - 32px);
				max-height: calc(100vh - 32px);
			}

			:host([size='sm']) .modal-box {
				width: 480px;
				height: 360px;
			}
			:host([size='md']) .modal-box {
				width: 640px;
				height: 440px;
			}
			:host([size='lg']) .modal-box {
				width: 900px;
				height: 540px;
			}
			:host([size='xl']) .modal-box {
				width: 1040px;
				height: 624px;
			}
			@media (max-width: 425px) or (max-height: 300px) {
				:host([size='sm']) .modal-box,
				:host([size='md']) .modal-box,
				:host([size='lg']) .modal-box,
				:host([size='xl']) .modal-box,
				:host([size='fullscreen']) .modal-box {
					width: 100vw;
					height: 100vh;
					max-width: 100vw;
					max-height: 100vh;
				}
				.dialog-body {
					overflow-y: auto;
					--pm-container-overflow: visible;
				}
			}

			:host([size='fullscreen']) .modal-box {
				width: calc(100vw - 48px);
				height: calc(100vh - 48px);
				max-width: calc(100vw - 48px);
				max-height: calc(100vh - 48px);
			}

			/* ---- Close button (close X top-right) ---- */
			.dialog-close {
				color: ${E};
				flex-shrink: 0;
			}

			.dialog-close:hover {
				color: ${E};
				background: ${M};
			}

			.dialog-close:active {
				background: ${ot};
			}

			.dialog-close:focus-visible {
				outline: 2px solid ${U};
				outline-offset: 2px;
				background: ${M};
			}

			.dialog-close svg {
				width: 32px;
				height: 32px;
			}

			/* ---- Header ---- */
			.dialog-header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: ${E};
				margin-block-end: 16px;
				font-family: ${$o};
				font-size: ${Eo};
				font-weight: ${Ro};
				line-height: ${To};
			}

			/* ---- Body ---- */
			.dialog-body {
				background: ${j};
			}

			/* ---- Entry animation ---- */
			@keyframes modal-enter {
				from {
					opacity: 0;
					transform: translateY(8px) scale(0.98);
				}
				to {
					opacity: 1;
					transform: translateY(0) scale(1);
				}
			}

			@keyframes backdrop-fade {
				from { opacity: 0; }
				to { opacity: 1; }
			}

			dialog[open] .modal-box {
				animation: modal-enter 0.2s ease-out;
			}

			dialog::backdrop {
				background: rgb(0 0 0 / 25%);
				animation: backdrop-fade 0.2s ease-out;
			}
		`
  ];
  _dialogRef = Ut();
  constructor() {
    super(), this.open = !1, this.size = "lg";
  }
  updated(e) {
    if (super.updated(e), e.has("open")) {
      const o = this._dialogRef.value;
      if (!o) return;
      this.open && !o.open ? (o.showModal(), this.dispatchEvent(
        new CustomEvent("pm-modal-open", { bubbles: !0, composed: !0 })
      )) : !this.open && o.open && (o.close(), this.dispatchEvent(
        new CustomEvent("pm-modal-close", { bubbles: !0, composed: !0 })
      ));
    }
  }
  _handleCancel(e) {
    e.preventDefault(), this._requestClose();
  }
  _handleBackdropClick(e) {
    e.target === this._dialogRef.value && this._requestClose();
  }
  _handleCloseClick() {
    this._requestClose();
  }
  _handleKeydown(e) {
    if (e.key !== "Tab") return;
    const o = this.shadowRoot?.querySelector(".modal-box");
    if (!o) return;
    const r = qi(o);
    if (r.length === 0) return;
    const i = r[0], a = r[r.length - 1];
    e.shiftKey && e.composedPath().includes(i) ? (e.preventDefault(), a.focus()) : !e.shiftKey && e.composedPath().includes(a) && (e.preventDefault(), i.focus());
  }
  _requestClose() {
    const e = new CustomEvent("pm-modal-close-request", {
      bubbles: !0,
      composed: !0,
      cancelable: !0
    });
    this.dispatchEvent(e) && (this.open = !1);
  }
  disconnectedCallback() {
    const e = this._dialogRef.value;
    super.disconnectedCallback(), e?.open && e.close();
  }
  _renderCloseIcon() {
    return kr();
  }
  render() {
    return m`
			<dialog
				${Gt(this._dialogRef)}
				class="modal"
				part="backdrop"
				aria-label=${Go(this.dialogLabel)}
				aria-labelledby=${this.dialogLabel ? $ : "modal-title"}
				@cancel=${this._handleCancel}
				@click=${this._handleBackdropClick}
				@keydown=${this._handleKeydown}
			>
				<div class="modal-box relative flex flex-col rounded-3xl shadow-md" part="box">
					<div id="modal-title" class="dialog-header p-0" part="header">
						<slot name="header"></slot>
						<pm-tooltip text=${f.CLOSE_MODAL} placement="bottom">
							<button
								class="dialog-close btn btn-ghost btn-sm btn-square"
								part="close-button"
								@click=${this._handleCloseClick}
								aria-label=${f.CLOSE_MODAL}
								type="button"
							>
								${this._renderCloseIcon()}
							</button>
						</pm-tooltip>
					</div>
					<div class="dialog-body flex-1 min-h-0 rounded-2xl" part="body">
						<slot name="body"></slot>
					</div>
				</div>
			</dialog>
		`;
  }
}
O("pm-modal", Ui);
class Gi extends S {
  static properties = {
    _contextData: { state: !0 },
    _selectedFilters: { state: !0 },
    _hideHeader: { type: Boolean, attribute: "hide-header" },
    hideRecommended: { type: Boolean, attribute: "hide-recommended" },
    multiFilter: { type: Boolean, attribute: "multi-filter" }
  };
  static styles = [
    b`
			:host {
				display: block;
				height: 100%;
			}

			.library-header {
				display: flex;
				align-items: center;
				gap: 8px;
				padding-block-end: 8px;
			}

			.back-button {
				color: ${E};
			}

			.back-button:hover {
				background-color: ${M};
			}

			.back-button:focus-visible {
				outline: 2px solid ${U};
				outline-offset: 2px;
				background-color: ${M};
			}

			.library-title {
				font-family: ${$o};
				font-size: ${Eo};
				font-weight: ${Ro};
				line-height: ${To};
				color: ${E};
				margin: 0;
			}

			.library-layout {
				display: flex;
				flex-direction: column;
				height: 100%;
				background: ${j};
				gap: 8px;
			}
		`
  ];
  constructor() {
    super(), this._contextData = null, this._selectedFilters = {}, this._hideHeader = !1, this.hideRecommended = !1, this.multiFilter = !1, this._contextConsumer = new bt(this, {
      context: Wt,
      subscribe: !0,
      callback: (e) => {
        this._onContextUpdate(e);
      }
    }), this._actions = null, this._actionsConsumer = new bt(this, {
      context: Qt,
      subscribe: !1,
      callback: (e) => {
        this._actions = e;
      }
    });
  }
  /* ------------------------------------------------------------------ */
  /*  Context update                                                     */
  /* ------------------------------------------------------------------ */
  _onContextUpdate(e) {
    this._contextData = e;
  }
  /* ------------------------------------------------------------------ */
  /*  Computed getters                                                    */
  /* ------------------------------------------------------------------ */
  /** @returns {string} */
  get _activeCategory() {
    return this._contextData?.activeCategory ?? "";
  }
  /** @returns {string} */
  get _searchQuery() {
    return this._contextData?.searchQuery ?? "";
  }
  /** @returns {Array} */
  get _filterDimensions() {
    return this._contextData?.filterDimensions ?? [];
  }
  /** @returns {Array} */
  get _filterValues() {
    return this._contextData?.filterValues ?? [];
  }
  /** @returns {boolean} */
  get _isLoading() {
    return this._contextData?.loading ?? !1;
  }
  /** @returns {boolean} */
  get _isInitialLoading() {
    const e = this._contextData?.data === null || this._contextData?.data === void 0;
    return (this._isLoading || (this._contextData?.clientLoading ?? !1)) && e;
  }
  /** @returns {Object|null} */
  get _error() {
    return this._contextData?.error ?? null;
  }
  /** @returns {Object} */
  get _pagination() {
    return this._contextData?.pagination ?? {};
  }
  /** @returns {boolean} */
  get _isLoadingMore() {
    return this._contextData?.loadingMore ?? !1;
  }
  /** @returns {boolean} */
  get _hasNextPage() {
    return this._pagination?.hasNextPage ?? !1;
  }
  /** @returns {number} */
  get _totalCount() {
    return this._pagination?.totalCount ?? 0;
  }
  /** @returns {number} */
  get _pageSize() {
    return this._contextData?.pageSize ?? 9;
  }
  get _filteredPrompts() {
    return this._contextData?.data ?? [];
  }
  /* ------------------------------------------------------------------ */
  /*  Event handlers — call provider actions directly via context         */
  /*  External resource-library actions forward `sysId` + `type`         */
  /* ------------------------------------------------------------------ */
  _handleSearchInput(e) {
    this._actions?.setSearchQuery(e.detail.query);
  }
  _handleSearchClear() {
    this._actions?.setSearchQuery("");
  }
  _handleFilterChange(e) {
    this._selectedFilters = e.detail.filters;
    const o = {};
    for (const r in e.detail.filters)
      o[r] = e.detail.filters[r].map((i) => i.sysId);
    this._actions?.setFilter({ filters: o });
  }
  _handleCardClick(e) {
    const { sysId: o, prompt: r } = e.detail, i = r?.type === "topic" ? "skill" : r?.type, a = {
      sysId: o,
      type: i,
      ...i === "prompt" ? { executedPayload: { prompt: r?.prompt || "" } } : {}
    };
    this._actions?.logUsage(a), this.dispatchEvent(
      new CustomEvent("pm-resource-selected", {
        detail: { resource: r, tableType: r?.tableType },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleFavorite(e) {
    const { sysId: o, favorited: r, prompt: i } = e.detail;
    r ? this._actions?.addFavorite({ sysId: o, type: i?.type }) : this._actions?.removeFavorite({ sysId: o, type: i?.type });
  }
  _handleNextPage() {
    this._actions?.loadNextPage();
  }
  _handleDelete(e) {
    const { sysId: o } = e.detail;
    this._actions?.deletePrompt({ sysId: o });
  }
  _handleCategoryChange(e) {
    const { category: o } = e.detail;
    this._selectedFilters = {}, this._actions?.setActiveCategory(o);
  }
  _handleBack() {
    this.dispatchEvent(
      new CustomEvent("pm-library-back", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  /* ------------------------------------------------------------------ */
  /*  Render helpers                                                     */
  /* ------------------------------------------------------------------ */
  _renderBackIcon() {
    return Tr();
  }
  _renderHeader() {
    return m`
			<div class="library-header">
				<pm-tooltip text=${f.BACK} placement="top">
					<button
						class="back-button btn btn-ghost btn-sm btn-square"
						type="button"
						aria-label=${f.BACK}
						@click=${this._handleBack}
					>
						${this._renderBackIcon()}
					</button>
				</pm-tooltip>
				<h2 class="library-title">${f.PROMPT_LIBRARY_TITLE}</h2>
			</div>
		`;
  }
  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */
  render() {
    const e = ce(this._searchQuery), o = !e && Jo.has(this._activeCategory), r = this._isInitialLoading;
    let i = null;
    o && (i = m`
				<pm-filter-bar
					.filterDimensions=${this._filterDimensions}
					.filterValues=${this._filterValues}
					.selectedFilters=${this._selectedFilters}
					.multiFilter=${this.multiFilter}
					?loading=${r}
					@pm-filter-bar-change=${this._handleFilterChange}
				></pm-filter-bar>
			`);
    const a = m`
			<div class="flex-1 min-h-0" style="overflow: var(--pm-container-overflow, hidden)">
				<pm-grid
					.prompts=${this._filteredPrompts}
					active-category=${this._activeCategory}
					?loading=${this._isLoading}
					?loading-more=${this._isLoadingMore}
					?has-next-page=${this._hasNextPage}
					.totalCount=${this._totalCount}
					.error=${this._error}
					page-size=${this._pageSize}
					@pm-card-click=${this._handleCardClick}
					@pm-card-favorite=${this._handleFavorite}
					@pm-card-delete=${this._handleDelete}
					@pm-grid-next-page=${this._handleNextPage}
				></pm-grid>
			</div>
		`;
    return m`
			<div class="library-layout">
				${this._hideHeader ? null : this._renderHeader()}
				<pm-search-bar
					search-query=${this._searchQuery}
					?loading=${r}
					@pm-search-bar-input=${this._handleSearchInput}
					@pm-search-bar-clear=${this._handleSearchClear}
				></pm-search-bar>
				<div class="sr-only" role="status" aria-live="polite">
					${e ? f.SEARCH_RESULTS : ""}
				</div>
				${e ? a : m`<pm-tabs
							active-category=${this._activeCategory}
							?loading=${r}
							?hide-recommended=${this.hideRecommended}
							@pm-tabs-category-change=${this._handleCategoryChange}
						>${i}${a}</pm-tabs>`}
			</div>
		`;
  }
}
O("pm-library-panel", Gi);
class Ki extends S {
  static properties = {
    targetId: { type: String, attribute: "target-id" },
    retentionDays: { type: Number, attribute: "retention-days" },
    hideHeader: { type: Boolean, attribute: "hide-header" },
    multiFilter: { type: Boolean, attribute: "multi-filter" },
    pageSize: { type: Number, attribute: "page-size" },
    hideRecommended: { type: Boolean, attribute: "hide-recommended" },
    defaultCategory: { type: String, attribute: "default-category" }
  };
  static styles = [
    b`
			:host {
				display: block;
				height: 100%;
			}
		`
  ];
  constructor() {
    super(), this.targetId = "", this.retentionDays = 100, this.hideHeader = !1, this.multiFilter = !1, this.hideRecommended = !1, this.defaultCategory = "";
  }
  _providerRef = Ut();
  get _provider() {
    return this._providerRef.value;
  }
  /**
   * Resolve the effective default category, handling case-insensitivity
   * and falling back when the recommended tab is hidden.
   * @returns {string}
   */
  get _effectiveDefaultCategory() {
    return io(this.defaultCategory, this.hideRecommended);
  }
  _reconcileActiveCategory() {
    const e = this._provider?._state?.activeCategory, o = mr(e, this.hideRecommended);
    o && this._provider.setActiveCategory(o);
  }
  /* ------------------------------------------------------------------ */
  /*  Lifecycle                                                          */
  /* ------------------------------------------------------------------ */
  async updated(e) {
    super.updated(e), e.has("hideRecommended") && !e.has("targetId") && this.hideRecommended && this._provider && this._reconcileActiveCategory(), e.has("targetId") && this._provider && (this.targetId ? await this._provider.init() : console.warn("<pm-library> requires a target-id attribute."));
  }
  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */
  render() {
    return m`
			<pm-provider
				${Gt(this._providerRef)}
				target-id=${this.targetId || $}
				retention-days=${this.retentionDays}
				page-size=${this.pageSize ?? $}
				default-category=${this._effectiveDefaultCategory}
			>
				<pm-library-panel ?hide-header=${this.hideHeader} ?hide-recommended=${this.hideRecommended} ?multi-filter=${this.multiFilter}></pm-library-panel>
			</pm-provider>
		`;
  }
}
O("pm-library", Ki);
class Wi extends S {
  static properties = {
    targetId: { type: String, attribute: "target-id" },
    retentionDays: { type: Number, attribute: "retention-days" },
    pageSize: { type: Number, attribute: "page-size" },
    size: { type: String },
    open: { type: Boolean, reflect: !0 },
    multiFilter: { type: Boolean, attribute: "multi-filter" },
    hideRecommended: { type: Boolean, attribute: "hide-recommended" },
    defaultCategory: { type: String, attribute: "default-category" }
  };
  constructor() {
    super(), this.targetId = "", this.retentionDays = 100, this.size = "xl", this.open = !1, this.multiFilter = !1, this.hideRecommended = !1, this.defaultCategory = "";
  }
  _handleClose() {
    this.open = !1;
  }
  render() {
    return m`
			<pm-modal
				?open=${this.open}
				size=${this.size}
				dialog-label=${f.PROMPT_LIBRARY_TITLE}
				@pm-modal-close=${this._handleClose}
			>
				<h2 slot="header">${f.PROMPT_LIBRARY_TITLE}</h2>
				${this.open ? m`
						<pm-library
							slot="body"
							target-id=${this.targetId || $}
							retention-days=${this.retentionDays}
							hide-header
							?multi-filter=${this.multiFilter}
							?hide-recommended=${this.hideRecommended}
							default-category=${this.defaultCategory || $}
							page-size=${this.pageSize ?? $}
						></pm-library>
					` : null}
			</pm-modal>
		`;
  }
}
O("pm-dialog", Wi);
class Qi extends S {
  static properties = {
    targetId: { type: String, attribute: "target-id" },
    promptText: { type: String, attribute: "prompt-text" },
    embedded: { type: Boolean, reflect: !0 },
    _saving: { state: !0 },
    _error: { state: !0 },
    _title: { state: !0 },
    _description: { state: !0 },
    _prompt: { state: !0 },
    _resolvingClient: { state: !0 }
  };
  static styles = [
    b`
			:host {
				display: block;
			}

			/* Embedded inside pm-save-dialog: fill the modal body slot
			   so the form (fields + actions) becomes the scroll region.
			   The 24px outer padding is provided by pm-modal's .modal-box. */
			:host([embedded]) {
				display: flex;
				flex-direction: column;
				height: 100%;
				min-height: 0;
			}

			.save-form {
				display: flex;
				flex-direction: column;
				gap: 20px;
			}

			:host([embedded]) .save-form {
				flex: 1 1 auto;
				min-height: 0;
				overflow-y: auto;
			}

			.field {
				display: flex;
				flex-direction: column;
				gap: 6px;
			}

			.field-label {
				font-family: ${So};
				font-size: ${Oo};
				font-weight: ${Ao};
				line-height: ${Io};
				color: ${E};
			}

			.field-label--required::before {
				content: '* ';
				color: var(--color-error, #dc2626);
			}

			.field-input {
				width: 100%;
				padding-block: 10px;
				padding-inline: 12px;
				font-family: ${rt};
				font-size: ${it};
				font-weight: ${at};
				line-height: ${nt};
				color: ${E};
				background: ${j};
				border: 1px solid ${yo};
				border-radius: 8px;
				outline: none;
				box-sizing: border-box;
				transition:
					border-color 0.15s ease,
					box-shadow 0.15s ease;
			}

			.field-input:focus {
				border-color: ${$e};
				box-shadow: inset 0 0 0 1px ${$e};
			}

			.field-input::placeholder {
				color: ${re};
			}

			.field-input:disabled {
				opacity: 0.6;
				cursor: not-allowed;
			}

			textarea.field-input {
				resize: vertical;
				min-height: 60px;
			}

			.actions {
				display: flex;
				justify-content: flex-end;
				gap: 12px;
				padding-block-start: 4px;
				padding-block-end: 4px;
				padding-inline-end: 4px;
			}

			.btn {
				padding-block: 10px;
				padding-inline: 24px;
				font-family: ${st};
				font-size: ${lt};
				font-weight: ${ct};
				line-height: ${dt};
				border-radius: 8px;
				border: none;
				box-shadow: none;
				cursor: pointer;
				transition:
					background 0.15s ease,
					opacity 0.15s ease;
			}

			.btn:disabled {
				opacity: 0.6;
				cursor: not-allowed;
			}

			.btn--cancel {
				background: ${Ft};
				color: ${ki};
			}

			.btn--cancel:hover:not(:disabled) {
				background: ${Nt};
			}

			.btn--cancel:active:not(:disabled) {
				background: ${_i};
			}

			.btn--save {
				background: ${Lt};
				color: ${xi};
			}

			.btn--save:hover:not(:disabled) {
				background: ${Mt};
			}

			.btn--save:active:not(:disabled) {
				background: ${yi};
			}

			.btn--cancel:focus-visible {
				outline: 2px solid ${Ft};
				outline-offset: 2px;
				background: ${Nt};
			}

			.btn--save:focus-visible {
				outline: 2px solid ${Lt};
				outline-offset: 2px;
				background: ${Mt};
			}

			.error-banner {
				padding: 10px 12px;
				font-size: 13px;
				line-height: 1.4;
				color: var(--color-error, #dc2626);
				background: var(--color-error-bg, #fef2f2);
				border: 1px solid var(--color-error-border, #fecaca);
				border-radius: 8px;
			}
		`
  ];
  constructor() {
    super(), this.targetId = "", this.promptText = "", this.embedded = !1, this._resolvedClientId = "", this._saving = !1, this._error = "", this._title = "", this._description = "", this._prompt = "", this._resolvingClient = !1;
  }
  /** @private The effective client ID resolved from the configured target. */
  get _effectiveClientId() {
    return this._resolvedClientId;
  }
  /**
   * Resolve targetId to a client sys_id via the API.
   * @private
   */
  async _resolveClientByTarget() {
    this._resolvedClientId = "", this._resolvingClient = !0;
    try {
      const e = await Jt(this.targetId);
      if (!e?.sys_id)
        throw new Error(f.SAVE_PROMPT_ERROR_RESOLVE_CLIENT);
      this._resolvedClientId = e.sys_id, this._error = "";
    } catch {
      const e = f.SAVE_PROMPT_ERROR_RESOLVE_CLIENT;
      this._resolvedClientId = "", this._error = e, this._dispatchError(e);
    } finally {
      this._resolvingClient = !1;
    }
  }
  willUpdate(e) {
    super.willUpdate(e), e.has("promptText") && this.promptText !== void 0 && (this._prompt = this.promptText), e.has("targetId") && (this.targetId ? this._resolveClientByTarget() : (this._resolvedClientId = "", this._error = ""));
  }
  /* ------------------------------------------------------------------ */
  /*  Computed                                                           */
  /* ------------------------------------------------------------------ */
  /** Prompt is the only required field per the design (marked with *). */
  get _isValid() {
    return this._prompt.trim().length > 0;
  }
  /* ------------------------------------------------------------------ */
  /*  Form handlers                                                      */
  /* ------------------------------------------------------------------ */
  _onTitleInput(e) {
    this._title = e.target.value;
  }
  _onDescriptionInput(e) {
    this._description = e.target.value;
  }
  _onPromptInput(e) {
    this._prompt = e.target.value;
  }
  _onKeyDown(e) {
    if (e.key === "Escape") {
      e.preventDefault(), this._onCancel();
      return;
    }
    e.key === "Enter" && !e.shiftKey && e.target.tagName !== "TEXTAREA" && this._isValid && !this._saving && !this._resolvingClient && (e.preventDefault(), this._onSave());
  }
  _onCancel() {
    this.dispatchEvent(
      new CustomEvent("pm-save-cancel", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  /**
   * Reset the form fields to their initial state.
   * Called internally after a successful save.
   */
  reset() {
    this._title = "", this._description = "", this._prompt = this.promptText ?? "", this._error = "";
  }
  /* ------------------------------------------------------------------ */
  /*  Save handler                                                       */
  /* ------------------------------------------------------------------ */
  async _onSave() {
    if (!(!this._isValid || this._saving)) {
      if (!this._effectiveClientId) {
        const e = f.SAVE_PROMPT_ERROR_NO_CLIENT;
        this._error = e, this._dispatchError(e);
        return;
      }
      this._saving = !0, this._error = "";
      try {
        const e = await dr({
          prompt: this._prompt.trim(),
          clientId: this._effectiveClientId,
          title: this._title?.trim() ?? "",
          description: this._description?.trim() ?? ""
        });
        if (this._saving = !1, e && e.details)
          this.reset(), this.dispatchEvent(
            new CustomEvent("pm-save-prompt", {
              detail: e,
              bubbles: !0,
              composed: !0
            })
          );
        else {
          const o = f.SAVE_PROMPT_ERROR_SAVE_FAILED;
          this._error = o, this._dispatchError(o);
        }
      } catch {
        this._saving = !1;
        const e = f.SAVE_PROMPT_ERROR_GENERIC;
        this._error = e, this._dispatchError(e);
      }
    }
  }
  /** @private Dispatch a pm-save-error event so consumers can surface feedback. */
  _dispatchError(e) {
    this.dispatchEvent(
      new CustomEvent("pm-save-error", {
        detail: { message: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */
  render() {
    const e = this._saving || this._resolvingClient;
    return m`
			<form class="save-form" aria-busy=${e ? "true" : "false"} @keydown=${this._onKeyDown} @submit=${(o) => o.preventDefault()}>
				${this._error ? m`<div class="error-banner" role="alert">${this._error}</div>` : null}
				<div class="field">
					<label class="field-label" for="save-title">
						${f.SAVE_PROMPT_FIELD_TITLE}
					</label>
					<input
						id="save-title"
						class="field-input"
						type="text"
						placeholder=${f.SAVE_PROMPT_PLACEHOLDER_TITLE}
						.value=${this._title}
						?disabled=${e}
						@input=${this._onTitleInput}
					/>
				</div>

				<div class="field">
					<label class="field-label" for="save-description">
						${f.SAVE_PROMPT_FIELD_DESCRIPTION}
					</label>
					<input
						id="save-description"
						class="field-input"
						type="text"
						placeholder=${f.SAVE_PROMPT_PLACEHOLDER_DESCRIPTION}
						.value=${this._description}
						?disabled=${e}
						@input=${this._onDescriptionInput}
					/>
				</div>

				<div class="field">
					<label class="field-label field-label--required" for="save-prompt">
						${f.SAVE_PROMPT_FIELD_PROMPT}
					</label>
					<textarea
						id="save-prompt"
						class="field-input"
						rows="3"
						aria-required="true"
						.value=${this._prompt}
						?disabled=${e}
						@input=${this._onPromptInput}
					></textarea>
				</div>

				<div class="actions">
					<button
						class="btn btn--cancel"
						type="button"
						?disabled=${e}
						@click=${this._onCancel}
					>
						${f.SAVE_PROMPT_CANCEL}
					</button>
					<button
						class="btn btn--save"
						type="button"
						?disabled=${e || !this._isValid}
						@click=${this._onSave}
					>
						${this._saving ? f.SAVE_PROMPT_SAVING : f.SAVE_PROMPT_BUTTON}
					</button>
				</div>
			</form>
		`;
  }
}
O("pm-save", Qi);
class Yi extends S {
  static styles = [
    b`
			:host {
				display: block;
			}
		`
  ];
  static properties = {
    targetId: { type: String, attribute: "target-id" },
    promptText: { type: String, attribute: "prompt-text" },
    size: { type: String },
    open: { type: Boolean, reflect: !0 }
  };
  constructor() {
    super(), this.targetId = "", this.promptText = "", this.size = "md", this.open = !1;
  }
  _handleClose() {
    this.open = !1;
  }
  render() {
    return m`
			<pm-modal
				?open=${this.open}
				size=${this.size}
				@pm-modal-close=${this._handleClose}
			>
				<h2 slot="header">${f.SAVE_PROMPT_TITLE}</h2>
				${this.open ? m`
						<pm-save
							slot="body"
							embedded
							target-id=${this.targetId || $}
							prompt-text=${this.promptText}
							@pm-save-cancel=${this._handleClose}
						></pm-save>
					` : null}
			</pm-modal>
		`;
  }
}
O("pm-save-dialog", Yi);
export {
  S as BaseElement,
  xt as INITIAL_STATE,
  O as defineElement,
  Qt as pmActionsContext,
  Wt as pmContext
};
//# sourceMappingURL=index-P7TGhTX3.js.map
