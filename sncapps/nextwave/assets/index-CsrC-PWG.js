const h = (e) => ({
  userSessionId: _(),
  userLanguage: R(),
  browserInfo: k(),
  latitude: e.hasOwnProperty("latitude") ? e.latitude : null,
  longitude: e.hasOwnProperty("longitude") ? e.longitude : null
}), _ = () => window.NOW && window.NOW.session_id ? window.NOW.session_id : "", R = () => window.NOW && window.NOW.language && window.NOW.language != "" ? window.NOW.language : "", k = () => window.navigator.userAgent;
async function O() {
  return new Promise((e, n) => {
    const s = (o) => {
      e({
        latitude: o.coords.latitude,
        longitude: o.coords.longitude
      });
    }, t = () => {
      n({ latitude: null, longitude: null });
    };
    window.navigator.geolocation.getCurrentPosition(s, t, {
      enableHighAccuracy: !0,
      timeout: 6e4
    });
  });
}
const v = "/api/now/analytics/events", m = 100, N = 1e3;
let u = [], p = null, c = [], l = [];
const w = () => {
  u.forEach(function(e) {
    g(e);
  }), u = [], p = null;
}, P = (e, n) => {
  c.splice(c.indexOf(e), 1), l.forEach((o) => {
    let r = !1;
    o.precedingCalls.forEach((a) => {
      c.includes(a) && (r = !0);
    }), r || (l.splice(
      l.indexOf(o),
      1
    ), g(o));
  });
  const { config: s } = e, { callback: t } = s;
  t && t(n);
}, g = (e, n = !1) => {
  const { eventAction: s, eventPriority: t, eventBody: o, config: r } = e, { requirePrecedingEventCompletion: a, callback: C, trackAsync: y } = r;
  if (a && c.length > 0) {
    e.precedingCalls = [...c], l.push(e);
    return;
  }
  const i = new XMLHttpRequest(), f = `?sysparm_event_action=${s}&sysparm_event_priority=${t}&sysparm_track_async=${y}`;
  i.open("POST", v + f), i.setRequestHeader("Content-Type", "application/json"), window.g_ck && i.setRequestHeader("X-UserToken", g_ck), i.onreadystatechange = () => {
    if (i.readyState === XMLHttpRequest.DONE) {
      if (i.status === 401)
        if (n)
          console.warn("Received 401 on retry attempt. Aborting retry for event:", s);
        else {
          const d = i.getResponseHeader("X-UserToken-Response");
          if (d)
            if (d !== window.g_ck) {
              console.warn("Received 401 while posting event. Updating token and retrying request"), window.g_ck = d, g({ ...e }, !0);
              return;
            } else
              console.warn("Received 401 while posting event but token in response matches current token. Will not retry.");
          else
            console.warn("Received 401 without a new token in X-UserToken-Response header while posting event. Will not retry.");
        }
      P(e, i);
    }
  }, n || c.push(e), i.send(JSON.stringify(o));
}, x = (e, n = N) => {
  if (u.push(e), u.length === m || n <= 0)
    w();
  else {
    if (p) return;
    p = setTimeout(function() {
      w();
    }, n);
  }
}, T = {
  _location: {},
  priority: {
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR"
  },
  postContextProperty(e, n, s = !1) {
    const t = new XMLHttpRequest(), o = "/api/now/analytics/updateContext", r = {
      sys_context_property_name: e,
      sys_context_property_value: n
    };
    t.open("POST", o), t.setRequestHeader("Content-Type", "application/json"), window.g_ck && t.setRequestHeader("X-UserToken", g_ck), t.onreadystatechange = () => {
      if (t.readyState === XMLHttpRequest.DONE && t.status === 401)
        if (s)
          console.warn("Received 401 on retry attempt while updating context property:", e);
        else {
          const a = t.getResponseHeader("X-UserToken-Response");
          if (a)
            if (a !== window.g_ck) {
              console.warn("Received 401 while updating context property. Updating token and retrying request"), window.g_ck = a, this.postContextProperty(e, n, !0);
              return;
            } else
              console.warn("Received 401 while updating context property but token in response matches current token. Will not retry.");
          else
            console.warn("Received 401 without a new token in X-UserToken-Response header while updating context property. Will not retry.");
        }
    }, t.send(JSON.stringify(r));
  },
  /**
   * Post an event to the back end Signals REST API
   *
   * @param eventAction {string} the name of the event (e.g. SEARCH_EVENT, GENIUS_RESULT_EVENT)
   * @param eventPriority {string} The priority - see the #priority object above
   * @param eventModel {Object} the payload containing attributes describing the event being logged
   * @param config {Object} Optional param to control when and how the event is logged. You can set
   *                  the following on the config:
   *                      requirePrecedingEventCompletion: boolean - event should only be logged once all
   *                          preceding events have finishing being logged
   *                      trackAsync: boolean - Insert the event in the backend staging table (sys_signal_event_queue)
   *                          to be fully processed later by a scheduled job
   *                      callback: function - Provides a way to be notified when the event has been logged. The
   *                          XMLHttpRequest will be passed to the callback.
   *                      delayInMs: int - Duration to queue the event before processing - default is 1000
   */
  trackEvent(e, n, s, t = {}) {
    const o = h(this._location), { delay: r } = t;
    x(
      {
        eventAction: e,
        eventPriority: n,
        eventBody: {
          ...s,
          ...o
        },
        config: t || {}
      },
      r
    );
  },
  async init() {
    try {
      this._location = await O(), this._location.hasOwnProperty("latitude") && this.postContextProperty("latitude", this._location.latitude), this._location.hasOwnProperty("longitude") && this.postContextProperty("longitude", this._location.longitude);
    } catch {
    }
  }
};
export {
  T as default
};
//# sourceMappingURL=index-CsrC-PWG.js.map
