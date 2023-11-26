var e,
  t = [],
  n = "ResizeObserver loop completed with undelivered notifications.";
!(function (e) {
  (e.BORDER_BOX = "border-box"),
    (e.CONTENT_BOX = "content-box"),
    (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
})(e || (e = {}));
var r,
  i = function (e) {
    return Object.freeze(e);
  },
  o = function (e, t) {
    (this.inlineSize = e), (this.blockSize = t), i(this);
  },
  s = (function () {
    function e(e, t, n, r) {
      return (
        (this.x = e),
        (this.y = t),
        (this.width = n),
        (this.height = r),
        (this.top = this.y),
        (this.left = this.x),
        (this.bottom = this.top + this.height),
        (this.right = this.left + this.width),
        i(this)
      );
    }
    return (
      (e.prototype.toJSON = function () {
        var e = this;
        return {
          x: e.x,
          y: e.y,
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          width: e.width,
          height: e.height,
        };
      }),
      (e.fromRect = function (t) {
        return new e(t.x, t.y, t.width, t.height);
      }),
      e
    );
  })(),
  a = function (e) {
    return e instanceof SVGElement && "getBBox" in e;
  },
  c = function (e) {
    if (a(e)) {
      var t = e.getBBox(),
        n = t.width,
        r = t.height;
      return !n && !r;
    }
    var i = e,
      o = i.offsetWidth,
      s = i.offsetHeight;
    return !(o || s || e.getClientRects().length);
  },
  u = function (e) {
    var t;
    if (e instanceof Element) return !0;
    var n =
      null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t
        ? void 0
        : t.defaultView;
    return !!(n && e instanceof n.Element);
  },
  h = "undefined" != typeof window ? window : {},
  f = new WeakMap(),
  d = /auto|scroll/,
  v = /^tb|vertical/,
  l = /msie|trident/i.test(h.navigator && h.navigator.userAgent),
  p = function (e) {
    return parseFloat(e || "0");
  },
  g = function (e, t, n) {
    return (
      void 0 === e && (e = 0),
      void 0 === t && (t = 0),
      void 0 === n && (n = !1),
      new o((n ? t : e) || 0, (n ? e : t) || 0)
    );
  },
  b = i({
    devicePixelContentBoxSize: g(),
    borderBoxSize: g(),
    contentBoxSize: g(),
    contentRect: new s(0, 0, 0, 0),
  }),
  w = function (e, t) {
    if ((void 0 === t && (t = !1), f.has(e) && !t)) return f.get(e);
    if (c(e)) return f.set(e, b), b;
    var n = getComputedStyle(e),
      r = a(e) && e.ownerSVGElement && e.getBBox(),
      o = !l && "border-box" === n.boxSizing,
      u = v.test(n.writingMode || ""),
      h = !r && d.test(n.overflowY || ""),
      w = !r && d.test(n.overflowX || ""),
      x = r ? 0 : p(n.paddingTop),
      E = r ? 0 : p(n.paddingRight),
      T = r ? 0 : p(n.paddingBottom),
      m = r ? 0 : p(n.paddingLeft),
      y = r ? 0 : p(n.borderTopWidth),
      z = r ? 0 : p(n.borderRightWidth),
      B = r ? 0 : p(n.borderBottomWidth),
      S = m + E,
      O = x + T,
      R = (r ? 0 : p(n.borderLeftWidth)) + z,
      C = y + B,
      k = w ? e.offsetHeight - C - e.clientHeight : 0,
      N = h ? e.offsetWidth - R - e.clientWidth : 0,
      D = o ? S + R : 0,
      M = o ? O + C : 0,
      P = r ? r.width : p(n.width) - D - N,
      _ = r ? r.height : p(n.height) - M - k,
      F = P + S + N + R,
      I = _ + O + k + C,
      L = i({
        devicePixelContentBoxSize: g(
          Math.round(P * devicePixelRatio),
          Math.round(_ * devicePixelRatio),
          u
        ),
        borderBoxSize: g(F, I, u),
        contentBoxSize: g(P, _, u),
        contentRect: new s(m, x, P, _),
      });
    return f.set(e, L), L;
  },
  x = function (t, n, r) {
    var i = w(t, r),
      o = i.borderBoxSize,
      s = i.contentBoxSize,
      a = i.devicePixelContentBoxSize;
    switch (n) {
      case e.DEVICE_PIXEL_CONTENT_BOX:
        return a;
      case e.BORDER_BOX:
        return o;
      default:
        return s;
    }
  },
  E = function (e) {
    var t = w(e);
    (this.target = e),
      (this.contentRect = t.contentRect),
      (this.borderBoxSize = i([t.borderBoxSize])),
      (this.contentBoxSize = i([t.contentBoxSize])),
      (this.devicePixelContentBoxSize = i([t.devicePixelContentBoxSize]));
  },
  T = function (e) {
    if (c(e)) return 1 / 0;
    for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
    return t;
  },
  m = function () {
    var e = 1 / 0,
      n = [];
    t.forEach(function (t) {
      if (0 !== t.activeTargets.length) {
        var r = [];
        t.activeTargets.forEach(function (t) {
          var n = new E(t.target),
            i = T(t.target);
          r.push(n),
            (t.lastReportedSize = x(t.target, t.observedBox)),
            i < e && (e = i);
        }),
          n.push(function () {
            t.callback.call(t.observer, r, t.observer);
          }),
          t.activeTargets.splice(0, t.activeTargets.length);
      }
    });
    for (var r = 0, i = n; r < i.length; r++) {
      (0, i[r])();
    }
    return e;
  },
  y = function (e) {
    t.forEach(function (t) {
      t.activeTargets.splice(0, t.activeTargets.length),
        t.skippedTargets.splice(0, t.skippedTargets.length),
        t.observationTargets.forEach(function (n) {
          n.isActive() &&
            (T(n.target) > e
              ? t.activeTargets.push(n)
              : t.skippedTargets.push(n));
        });
    });
  },
  z = function () {
    var e,
      r = 0;
    for (
      y(r);
      t.some(function (e) {
        return e.activeTargets.length > 0;
      });

    )
      (r = m()), y(r);
    return (
      t.some(function (e) {
        return e.skippedTargets.length > 0;
      }) &&
        ("function" == typeof ErrorEvent
          ? (e = new ErrorEvent("error", { message: n }))
          : ((e = document.createEvent("Event")).initEvent("error", !1, !1),
            (e.message = n)),
        window.dispatchEvent(e)),
      r > 0
    );
  },
  B = [],
  S = function (e) {
    if (!r) {
      var t = 0,
        n = document.createTextNode("");
      new MutationObserver(function () {
        return B.splice(0).forEach(function (e) {
          return e();
        });
      }).observe(n, { characterData: !0 }),
        (r = function () {
          n.textContent = "".concat(t ? t-- : t++);
        });
    }
    B.push(e), r();
  },
  O = 0,
  R = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
  C = [
    "resize",
    "load",
    "transitionend",
    "animationend",
    "animationstart",
    "animationiteration",
    "keyup",
    "keydown",
    "mouseup",
    "mousedown",
    "mouseover",
    "mouseout",
    "blur",
    "focus",
  ],
  k = function (e) {
    return void 0 === e && (e = 0), Date.now() + e;
  },
  N = !1,
  D = new ((function () {
    function e() {
      var e = this;
      (this.stopped = !0),
        (this.listener = function () {
          return e.schedule();
        });
    }
    return (
      (e.prototype.run = function (e) {
        var t = this;
        if ((void 0 === e && (e = 250), !N)) {
          N = !0;
          var n,
            r = k(e);
          (n = function () {
            var n = !1;
            try {
              n = z();
            } finally {
              if (((N = !1), (e = r - k()), !O)) return;
              n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
            }
          }),
            S(function () {
              requestAnimationFrame(n);
            });
        }
      }),
      (e.prototype.schedule = function () {
        this.stop(), this.run();
      }),
      (e.prototype.observe = function () {
        var e = this,
          t = function () {
            return e.observer && e.observer.observe(document.body, R);
          };
        document.body ? t() : h.addEventListener("DOMContentLoaded", t);
      }),
      (e.prototype.start = function () {
        var e = this;
        this.stopped &&
          ((this.stopped = !1),
          (this.observer = new MutationObserver(this.listener)),
          this.observe(),
          C.forEach(function (t) {
            return h.addEventListener(t, e.listener, !0);
          }));
      }),
      (e.prototype.stop = function () {
        var e = this;
        this.stopped ||
          (this.observer && this.observer.disconnect(),
          C.forEach(function (t) {
            return h.removeEventListener(t, e.listener, !0);
          }),
          (this.stopped = !0));
      }),
      e
    );
  })())(),
  M = function (e) {
    !O && e > 0 && D.start(), !(O += e) && D.stop();
  },
  P = (function () {
    function t(t, n) {
      (this.target = t),
        (this.observedBox = n || e.CONTENT_BOX),
        (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
    }
    return (
      (t.prototype.isActive = function () {
        var e,
          t = x(this.target, this.observedBox, !0);
        return (
          (e = this.target),
          a(e) ||
            (function (e) {
              switch (e.tagName) {
                case "INPUT":
                  if ("image" !== e.type) break;
                case "VIDEO":
                case "AUDIO":
                case "EMBED":
                case "OBJECT":
                case "CANVAS":
                case "IFRAME":
                case "IMG":
                  return !0;
              }
              return !1;
            })(e) ||
            "inline" !== getComputedStyle(e).display ||
            (this.lastReportedSize = t),
          this.lastReportedSize.inlineSize !== t.inlineSize ||
            this.lastReportedSize.blockSize !== t.blockSize
        );
      }),
      t
    );
  })(),
  _ = function (e, t) {
    (this.activeTargets = []),
      (this.skippedTargets = []),
      (this.observationTargets = []),
      (this.observer = e),
      (this.callback = t);
  },
  F = new WeakMap(),
  I = function (e, t) {
    for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
    return -1;
  },
  L = (function () {
    function e() {}
    return (
      (e.connect = function (e, t) {
        var n = new _(e, t);
        F.set(e, n);
      }),
      (e.observe = function (e, n, r) {
        var i = F.get(e),
          o = 0 === i.observationTargets.length;
        I(i.observationTargets, n) < 0 &&
          (o && t.push(i),
          i.observationTargets.push(new P(n, r && r.box)),
          M(1),
          D.schedule());
      }),
      (e.unobserve = function (e, n) {
        var r = F.get(e),
          i = I(r.observationTargets, n),
          o = 1 === r.observationTargets.length;
        i >= 0 &&
          (o && t.splice(t.indexOf(r), 1),
          r.observationTargets.splice(i, 1),
          M(-1));
      }),
      (e.disconnect = function (e) {
        var t = this,
          n = F.get(e);
        n.observationTargets.slice().forEach(function (n) {
          return t.unobserve(e, n.target);
        }),
          n.activeTargets.splice(0, n.activeTargets.length);
      }),
      e
    );
  })(),
  W = (function () {
    function e(e) {
      if (0 === arguments.length)
        throw new TypeError(
          "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
        );
      if ("function" != typeof e)
        throw new TypeError(
          "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
        );
      L.connect(this, e);
    }
    return (
      (e.prototype.observe = function (e, t) {
        if (0 === arguments.length)
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!u(e))
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        L.observe(this, e, t);
      }),
      (e.prototype.unobserve = function (e) {
        if (0 === arguments.length)
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!u(e))
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        L.unobserve(this, e);
      }),
      (e.prototype.disconnect = function () {
        L.disconnect(this);
      }),
      (e.toString = function () {
        return "function ResizeObserver () { [polyfill code] }";
      }),
      e
    );
  })();
export { W as R, E as a, o as b };
