import { fe as S, ff as q, fg as E, f1 as L } from "./WidgetRenderer-C4Xp1hhZ.js";
function T(u, i) {
  for (var p = 0; p < i.length; p++) {
    const a = i[p];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const n in a)
        if (n !== "default" && !(n in u)) {
          const c = Object.getOwnPropertyDescriptor(a, n);
          c && Object.defineProperty(u, n, c.get ? c : {
            enumerable: !0,
            get: () => a[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var f, v;
function C() {
  if (v) return f;
  v = 1;
  var u = Object.create, i = Object.defineProperty, p = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, n = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, O = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, M = (r, e) => {
    for (var t in e)
      i(r, t, { get: e[t], enumerable: !0 });
  }, y = (r, e, t, l) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let s of a(e))
        !c.call(r, s) && s !== t && i(r, s, { get: () => e[s], enumerable: !(l = p(e, s)) || l.enumerable });
    return r;
  }, b = (r, e, t) => (t = r != null ? u(n(r)) : {}, y(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !r || !r.__esModule ? i(t, "default", { value: r, enumerable: !0 }) : t,
    r
  )), x = (r) => y(i({}, "__esModule", { value: !0 }), r), o = (r, e, t) => (O(r, typeof e != "symbol" ? e + "" : e, t), t), _ = {};
  M(_, {
    default: () => d
  }), f = x(_);
  var m = b(E), h = /* @__PURE__ */ S(), g = /* @__PURE__ */ q();
  const w = "https://widget.mixcloud.com/media/js/widgetApi.js", j = "Mixcloud";
  class d extends m.Component {
    constructor() {
      super(...arguments), o(this, "callPlayer", h.callPlayer), o(this, "duration", null), o(this, "currentTime", null), o(this, "secondsLoaded", null), o(this, "mute", () => {
      }), o(this, "unmute", () => {
      }), o(this, "ref", (e) => {
        this.iframe = e;
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e) {
      (0, h.getSDK)(w, j).then((t) => {
        this.player = t.PlayerWidget(this.iframe), this.player.ready.then(() => {
          this.player.events.play.on(this.props.onPlay), this.player.events.pause.on(this.props.onPause), this.player.events.ended.on(this.props.onEnded), this.player.events.error.on(this.props.error), this.player.events.progress.on((l, s) => {
            this.currentTime = l, this.duration = s;
          }), this.props.onReady();
        });
      }, this.props.onError);
    }
    play() {
      this.callPlayer("play");
    }
    pause() {
      this.callPlayer("pause");
    }
    stop() {
    }
    seekTo(e, t = !0) {
      this.callPlayer("seek", e), t || this.pause();
    }
    setVolume(e) {
    }
    getDuration() {
      return this.duration;
    }
    getCurrentTime() {
      return this.currentTime;
    }
    getSecondsLoaded() {
      return null;
    }
    render() {
      const { url: e, config: t } = this.props, l = e.match(g.MATCH_URL_MIXCLOUD)[1], s = {
        width: "100%",
        height: "100%"
      }, D = (0, h.queryString)({
        ...t.options,
        feed: `/${l}/`
      });
      return /* @__PURE__ */ m.default.createElement(
        "iframe",
        {
          key: l,
          ref: this.ref,
          style: s,
          src: `https://player-widget.mixcloud.com/widget/iframe/?${D}`,
          frameBorder: "0",
          allow: "autoplay"
        }
      );
    }
  }
  return o(d, "displayName", "Mixcloud"), o(d, "canPlay", g.canPlay.mixcloud), o(d, "loopOnEnded", !0), f;
}
var P = /* @__PURE__ */ C();
const N = /* @__PURE__ */ L(P), $ = /* @__PURE__ */ T({
  __proto__: null,
  default: N
}, [P]);
export {
  $ as M
};
//# sourceMappingURL=Mixcloud-FGAeF5AR.js.map
