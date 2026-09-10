import { fe as F, ff as $, fg as K, f1 as V } from "./WidgetRenderer-C4Xp1hhZ.js";
function W(l, a) {
  for (var p = 0; p < a.length; p++) {
    const s = a[p];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const i in s)
        if (i !== "default" && !(i in l)) {
          const c = Object.getOwnPropertyDescriptor(s, i);
          c && Object.defineProperty(l, i, c.get ? c : {
            enumerable: !0,
            get: () => s[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
var P, O;
function Y() {
  if (O) return P;
  O = 1;
  var l = Object.create, a = Object.defineProperty, p = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, w = (t, e, r) => e in t ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, L = (t, e) => {
    for (var r in e)
      a(t, r, { get: e[r], enumerable: !0 });
  }, v = (t, e, r, _) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let o of s(e))
        !c.call(t, o) && o !== r && a(t, o, { get: () => e[o], enumerable: !(_ = p(e, o)) || _.enumerable });
    return t;
  }, b = (t, e, r) => (r = t != null ? l(i(t)) : {}, v(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !t || !t.__esModule ? a(r, "default", { value: t, enumerable: !0 }) : r,
    t
  )), D = (t) => v(a({}, "__esModule", { value: !0 }), t), n = (t, e, r) => (w(t, typeof e != "symbol" ? e + "" : e, r), r), g = {};
  L(g, {
    default: () => y
  }), P = D(g);
  var m = b(K), h = /* @__PURE__ */ F(), d = /* @__PURE__ */ $();
  const C = "https://player.twitch.tv/js/embed/v1.js", N = "Twitch", I = "twitch-player-";
  class y extends m.Component {
    constructor() {
      super(...arguments), n(this, "callPlayer", h.callPlayer), n(this, "playerID", this.props.config.playerId || `${I}${(0, h.randomString)()}`), n(this, "mute", () => {
        this.callPlayer("setMuted", !0);
      }), n(this, "unmute", () => {
        this.callPlayer("setMuted", !1);
      });
    }
    componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
    load(e, r) {
      const { playsinline: _, onError: o, config: M, controls: S } = this.props, u = d.MATCH_URL_TWITCH_CHANNEL.test(e), f = u ? e.match(d.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(d.MATCH_URL_TWITCH_VIDEO)[1];
      if (r) {
        u ? this.player.setChannel(f) : this.player.setVideo("v" + f);
        return;
      }
      (0, h.getSDK)(C, N).then((E) => {
        this.player = new E.Player(this.playerID, {
          video: u ? "" : f,
          channel: u ? f : "",
          height: "100%",
          width: "100%",
          playsinline: _,
          autoplay: this.props.playing,
          muted: this.props.muted,
          // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
          controls: u ? !0 : S,
          time: (0, h.parseStartTime)(e),
          ...M.options
        });
        const { READY: j, PLAYING: A, PAUSE: R, ENDED: H, ONLINE: x, OFFLINE: U, SEEK: q } = E.Player;
        this.player.addEventListener(j, this.props.onReady), this.player.addEventListener(A, this.props.onPlay), this.player.addEventListener(R, this.props.onPause), this.player.addEventListener(H, this.props.onEnded), this.player.addEventListener(q, this.props.onSeek), this.player.addEventListener(x, this.props.onLoaded), this.player.addEventListener(U, this.props.onLoaded);
      }, o);
    }
    play() {
      this.callPlayer("play");
    }
    pause() {
      this.callPlayer("pause");
    }
    stop() {
      this.callPlayer("pause");
    }
    seekTo(e, r = !0) {
      this.callPlayer("seek", e), r || this.pause();
    }
    setVolume(e) {
      this.callPlayer("setVolume", e);
    }
    getDuration() {
      return this.callPlayer("getDuration");
    }
    getCurrentTime() {
      return this.callPlayer("getCurrentTime");
    }
    getSecondsLoaded() {
      return null;
    }
    render() {
      const e = {
        width: "100%",
        height: "100%"
      };
      return /* @__PURE__ */ m.default.createElement("div", { style: e, id: this.playerID });
    }
  }
  return n(y, "displayName", "Twitch"), n(y, "canPlay", d.canPlay.twitch), n(y, "loopOnEnded", !0), P;
}
var T = /* @__PURE__ */ Y();
const G = /* @__PURE__ */ V(T), z = /* @__PURE__ */ W({
  __proto__: null,
  default: G
}, [T]);
export {
  z as T
};
//# sourceMappingURL=Twitch-C-Rx8Wrk.js.map
