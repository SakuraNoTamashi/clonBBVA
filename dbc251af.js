import {
  aT as e,
  T as t,
  aU as n,
  U as o,
  a1 as r,
  aV as i,
  aW as s,
  aX as a,
  aY as l,
  aZ as c,
  a_ as u,
  a$ as _,
  b0 as g,
  b1 as f,
  b2 as p,
  b3 as h,
  b4 as d,
  b5 as b,
  b6 as m,
  b7 as v,
  b8 as P,
  b9 as S,
  ba as w,
  bb as A,
  bc as O,
  bd as y,
  be as C,
  H as I,
  aS as E,
  V as T,
  bf as j,
  bg as R,
  bh as N,
  bi as M,
  $ as L,
  bj as $,
  bk as z,
  bl as D,
  D as U,
  X as x,
  bm as B,
  bn as k,
  g as F,
  bo as W,
  W as H,
  h as G,
} from "./68cf8239.js";
const q = (t) => e("navigator.userAgent", t),
  Y = (t) =>
    ((t) => Boolean(e("cordova", t)))(t) ||
    ((e) => /(android)/i.test(q(e)))(t) ||
    ((e) => /iPad|iPhone|iPod/.test(q(e)) && !e.MSStream)(t),
  V = () => window.sessionStorage.getItem("debugempresas") || !1,
  X = (e) => `[MICROFRONTEND: ISOLATED_CORE] ${e.join("\n")}`,
  Z = (...e) => {
    V() &&
      console.warn(
        `%c${X(e)}`,
        "color: gray; font-family: monospace; font-size: 20px;"
      );
  },
  J = (...e) => {
    V() && console.warn(`%c${X(e)}`, "color: gray; font-family: monospace;");
  },
  Q = new WeakMap(),
  K = t((e) => (t) => {
    const o = Q.get(t);
    if (o !== e) {
      if ((Q.set(t, e), e))
        for (const r in e) {
          const i = e[r];
          if (i === n) continue;
          const s = r[0],
            { element: a } = t.committer;
          if ("@" !== s)
            if ("." !== s) {
              if ("?" !== s)
                (o && o[r] === i) ||
                  (null != i
                    ? a.setAttribute(r, String(i))
                    : a.removeAttribute(r));
              else if (!o || o[r] !== i) {
                const e = r.slice(1);
                i ? a.setAttribute(e, "") : a.removeAttribute(e);
              }
            } else (o && o[r] === i) || (a[r.slice(1)] = i);
          else {
            const e = o && o[r];
            if (!e || e !== i) {
              const t = r.slice(1);
              e && a.removeEventListener(t, e), a.addEventListener(t, i);
            }
          }
        }
      if (o)
        for (const n in o)
          if (!e || !(n in e)) {
            const e = n[0],
              { element: r } = t.committer;
            if ("@" === e) {
              r.removeEventListener(n.slice(1), o[n]);
              continue;
            }
            if ("." === e) {
              r[n.slice(1)] = void 0;
              continue;
            }
            if ("?" === e) {
              r.removeAttribute(n.slice(1));
              continue;
            }
            r.removeAttribute(n);
          }
    }
  }),
  ee = new WeakMap(),
  te = t((e) => (t) => {
    if (
      !(t instanceof o) ||
      t instanceof r ||
      "style" !== t.committer.name ||
      t.committer.parts.length > 1
    )
      throw new Error(
        "The `styleMap` directive must be used in the style attribute and must be the only part in the attribute."
      );
    const { committer: n } = t,
      { style: i } = n.element;
    let s = ee.get(t);
    void 0 === s &&
      ((i.cssText = n.strings.join(" ")), ee.set(t, (s = new Set()))),
      s.forEach((t) => {
        t in e ||
          (s.delete(t),
          -1 === t.indexOf("-") ? (i[t] = null) : i.removeProperty(t));
      });
    for (const t in e)
      s.add(t), -1 === t.indexOf("-") ? (i[t] = e[t]) : i.setProperty(t, e[t]);
  }),
  ne = (e, t, n) => {
    e.sendMessageToIframe({ event: t, detail: { data: n } });
  },
  oe = (e) => {
    const t = O(e);
    if (!t) return;
    const { observer: n, listener: o } = t;
    window.removeEventListener("message", o), n.unsubscribe(), y(e);
  },
  re = (e, t, n = []) => {
    e.sendMessageToIframe({ event: p, detail: { method: t, args: n } });
  },
  ie = (e, t, n) => {
    const { microfrontendUid: o } = t,
      r = i(t),
      u = s(t),
      _ = a(t);
    l(e, o, r, u, _),
      c(e, o, t, r),
      ((e, t, n = {}) => {
        const o = f(t);
        e.addEventListener(`iframe-event-${p}`, (e) => {
          const { method: r, args: s, microfrontendUid: a } = e.detail,
            l = n[r] ? n[r](s) : s;
          if (a && t.microfrontendUid !== a) return !1;
          (i(t) || h(o) || d(t) || b(t)) && t[r] && t[r](...l);
        });
      })(e, t, n),
      ((e, t) => {
        const n = m.subscribe((t) => {
          if (
            t.type &&
            "postMessage" === t.type &&
            e.__messageTargetOrigin &&
            e.iframe.contentWindow
          )
            return e.iframe.contentWindow.postMessage(
              t,
              e.__messageTargetOrigin
            );
          const { channel: n, data: o } = t,
            r = t[v];
          e.sendMessageToIframe({ event: n, detail: { data: o, [v]: r } });
        });
        P(t, n);
      })(e, o),
      se(t);
  },
  se = (e) => u({ page: e, requestChannel: _, responseChannel: g }),
  ae = (e, t, n) =>
    S({ page: e, method: t, params: n, requestChannel: w, responseChannel: A }),
  le = ({
    solution: e,
    origin: t,
    attributes: n,
    feature: o,
    forceToNotCache: r,
    forceDisableCache: i,
    allowGelocation: s,
  }) =>
    class extends C(I(E)) {
      static get properties() {
        return {
          _isPageReady: {
            type: Boolean,
            reflect: !0,
            attribute: "is-page-ready",
          },
          microfrontendPage: {
            type: String,
            reflect: !0,
            attribute: "current-isolated-page",
          },
          origin: { type: String, reflect: !0, attribute: "origin" },
          iframeAttributes: { type: Object },
          showApplicationSpinner: {
            type: Boolean,
            reflect: !0,
            attribute: "show-spinner",
          },
          currentFeatureSection: String,
          previousFeatureSection: String,
        };
      }
      static get is() {
        return `${e}-page`;
      }
      static get PAGE_NAME() {
        return `${e}-page`;
      }
      static get SOLUTION_NAME() {
        return e;
      }
      get SOLUTION_NAME() {
        return e;
      }
      static define() {
        window.customElements.define(this.is, this);
      }
      get PAGE_NAME() {
        return this.microfrontendPage;
      }
      static get LOCAL_SOLUTIONS_BASE_PATH() {
        return "resources/solutions/";
      }
      static get PAGE_SECTIONS() {
        return {
          APP__HEADER: "appHeader",
          APP__FOOTER: "appFooter",
          APP__MAIN: "appMain",
          APP__COMPLEMENTARY: "appComplementary",
          APP__OVERLAY: "appOverlay",
          PAGE__SPINNER: "pageSpinner",
        };
      }
      constructor() {
        super(),
          (this.iframeAttributes = Object.assign(
            {
              style:
                "overflow:hidden; height:100%; width:100%; position:absolute;",
              class: "microfrontend-iframe",
              "iframe-title": this.SOLUTION_NAME,
            },
            n
          )),
          (this.microfrontendUid = T()),
          (this.__iframe__ = null),
          (this._isPageReady = !1),
          (this.currentPage = "/"),
          (this.fromPage = null),
          (this.origin = this._resolveHost(e, t)),
          (this.enableNotifyOnPageEnterToIsolatedPage = !1),
          (this.showApplicationSpinner = !0),
          (this.currentFeatureSection = "home"),
          (this.previousFeatureSection = "home"),
          (this.featureParams = {}),
          (this.__currentContext__ = {}),
          (this.__hourNumberToNonCache__ = Math.floor(Date.now() / 108e5)),
          this.subscribeCellsBridgeApp(),
          this.notifySessionStorageChangedToIsolatedPage(),
          this.notifySessionLocalChangedToIsolatedPage(),
          this.subscribe("isolate_core_context_changed_response", (e) => {
            this.__currentContext__ = e;
          });
      }
      subscribeCellsBridgeApp() {
        this.subscribe(
          "__bridge_app",
          ({ value: { currentPage: t, fromPage: n } }) => {
            (this.currentPage = t),
              (this.fromPage = n),
              o
                ? ((this.fromPage === this.currentPage || j(this.fromPage)) &&
                    ((this.previousFeatureSection = this.currentFeatureSection),
                    (this.featureParams = R(
                      e,
                      this.getCurrentRoute().subroute
                    )),
                    (this.currentFeatureSection = N(
                      e,
                      this.getCurrentRoute().subroute
                    )),
                    this.executeOnIsolatedPage("locationReplace", [
                      `${this.origin}/index.html#!${
                        this.getCurrentRoute().subroute || "/"
                      }`,
                    ])),
                  this.fromPage !== this.currentPage &&
                    this.fromPage &&
                    this.fromPage.startsWith(e) &&
                    ((this.previousFeatureSection = "home"),
                    this.__onPageLeave__()))
                : (this.currentPage.startsWith(e) &&
                    (ne(this.__iframe__, H, !0), this.__onPageEnter__()),
                  this.fromPage &&
                    this.fromPage.startsWith(e) &&
                    this.__onPageLeave__());
          }
        );
      }
      executeOnIsolatedPage(e, t) {
        re(this.__iframe__, e, t);
      }
      executeOnMicrofrontendPageWithAsyncResponse(e, t) {
        return ae(this, e, t);
      }
      __onPageEnter__() {
        this._isPageReady &&
          this.fromPage &&
          !this.fromPage.startsWith(e) &&
          re(this.__iframe__, "onPageEnter", [
            `${this.microfrontendPage}-page`,
            this._getIframeSrc(),
          ]),
          this.__iframe__ &&
            re(this.__iframe__, "locationReplace", [this._getIframeSrc()]);
      }
      ___pageSolutionLeaved___() {
        delete this.___isCellsPageSolutionLeaved___;
      }
      __onPageLeave__() {
        this.currentPage.startsWith(e) ||
          ((this.___isCellsPageSolutionLeaved___ = !0),
          re(this.__iframe__, "__beginPageLeave__", [
            `${this.microfrontendPage}-page`,
          ]),
          ne(this.__iframe__, H, !1));
      }
      _resolveHost(e, t) {
        return t && t.startsWith("http")
          ? t
          : `${this.constructor.LOCAL_SOLUTIONS_BASE_PATH}${e}`;
      }
      _getIframeSrc() {
        const t = M(e)
            ? `#!${this.getCurrentRoute().subroute || "/"}`
            : L(window.location.hash),
          n = `${this.origin}/index.html${t}`;
        return decodeURIComponent(this.__getIframeSolutionUrl__(n));
      }
      _getIsolatedID() {
        return "isolated-".concat(e);
      }
      __getIframeSolutionUrl__(e) {
        return this.___isForcedToHaveCache___()
          ? this.___appendDcQueryParamBeforeHashUrl__(e)
          : e;
      }
      ___hasLocalCacheDefined___() {
        return $(z)(r) || $(z)(i);
      }
      ___isForcedToHaveCache___() {
        return this.___hasLocalCacheDefined___()
          ? r || i
          : window.AppConfig.forceToNotCacheAllSolutions ||
              window.AppConfig.forceDisableCacheAllSolutions ||
              !1;
      }
      ___appendDcQueryParamBeforeHashUrl__(e) {
        const t = `?___dc___=${this.__hourNumberToNonCache__}`;
        return e.replace(/(#!\/|#!\%)/g, `${t}$1`);
      }
      getCleanSubroute() {
        return D(this.getCurrentRoute().subroute);
      }
      firstUpdated(e) {
        super.firstUpdated(e),
          (this.__iframe__ = this.shadowRoot.querySelector("bbva-core-iframe")),
          this.__adaptCoreIframe(this.__iframe__);
        const t = o
          ? `${this._getIframeSrc()}${this.getCleanSubroute()}`
          : this._getIframeSrc();
        (this.__iframe__.src = t),
          (this.__iframe__.microfrontendUid = this.microfrontendUid),
          ne(this.__iframe__, H, !0),
          this._notifyLangChangesToIsolatedPage(),
          ie(this.__iframe__, this, {
            navigate: ([e, t]) => ((this.microfrontendParams = t), [e, t]),
          });
      }
      pageSpinner() {
        return U` <div
        style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);"
      >
        ${
          Y()
            ? U`<bbva-progress-content></bbva-progress-content>`
            : U`<bbva-web-progress-content></bbva-web-progress-content>`
        }
      </div>`;
      }
      __onPageIsolatedReady__() {
        this._isPageReady = !0;
      }
      _sectionTemplateOr(t, n) {
        return this[t]
          ? this[t]({
              page: this.microfrontendPage,
              solution: e,
              solutionTemplate: this._solutionTemplateIsolated({
                inAppMainSlot: !1,
              }),
            })
          : n;
      }
      _sectionTemplateIfIsDefined(t) {
        return this[t]
          ? this[t]({
              page: this.microfrontendPage,
              solution: e,
              section: this.currentFeatureSection,
            })
          : "";
      }
      _solutionTemplateIsolated({ inAppMainSlot: e }) {
        const t = U` ${
          this._isPageReady && this.showApplicationSpinner
            ? ""
            : this.pageSpinner()
        }
        <bbva-core-iframe
          ...="${K(this.iframeAttributes)}"
          style="${this.__getStyleIframe()}"
          src="about:blank"
          loaded-event-name="__bridge-ready"
          frameborder="0"
          height="100%"
          width="100%"
          message-target-origin="${this.origin}"
          allow="${s ? "geolocation" : ""}"
        ></bbva-core-iframe>`;
        return e
          ? U`<div slot="app__main" class="container">
            ${t}
          </div>`
          : t;
      }
      __getStyleIframe() {
        return "string" == typeof this.iframeAttributes.style ||
          this.iframeAttributes.style instanceof String
          ? this.iframeAttributes.style
          : te(this.iframeAttributes.style);
      }
      templateDrawerPanelAttributes() {
        return { mode: "seamed" };
      }
      render() {
        const { PAGE_SECTIONS: e } = this.constructor;
        return U` <cells-template-paper-drawer-panel
        ...="${K(this.templateDrawerPanelAttributes())}"
      >
        ${this._sectionTemplateIfIsDefined(e.APP__HEADER)}
        ${this._sectionTemplateOr(
          e.APP__MAIN,
          this._solutionTemplateIsolated({ inAppMainSlot: !0 })
        )}
        ${this._sectionTemplateIfIsDefined(e.APP__COMPLEMENTARY)}
        ${this._sectionTemplateIfIsDefined(e.APP__OVERLAY)}
        ${this._sectionTemplateIfIsDefined(e.APP__FOOTER)}
      </cells-template-paper-drawer-panel>`;
      }
      _notifyLangChangesToIsolatedPage() {
        this.subscribe(x, ({ language: e }) =>
          re(this.__iframe__, "updateLanguage", [e])
        );
      }
      notifySessionLocalChangedToIsolatedPage() {
        this.subscribe(B, ([e, t]) => localStorage.setItem(e, t));
      }
      notifySessionStorageChangedToIsolatedPage() {
        this.subscribe(k, ([e, t]) => sessionStorage.setItem(e, t));
      }
      __adaptCoreIframe(e) {
        const t = e._onIframeReady,
          n = e._dispatchPostMessageToIframe;
        (e._onIframeReady = () => {
          t.call(e),
            (this._isPageReady = !0),
            this.onMicrofrontendReady && this.onMicrofrontendReady();
        }),
          (e._dispatchPostMessageToIframe = function (...t) {
            try {
              return n.call(e, ...t);
            } catch (e) {
              Z("ISOLATE-CORE ERROR SENDING DATA"),
                J(
                  "ERROR: YOU ARE TRYING TO SEND DATA THAT IS NOT SERIALIZABLE, MICROFRONTEND USES POST-MESSAGE TO COMMUNICATE"
                ),
                console.warn(t, e);
            }
          });
      }
      sendAnalytics(e, t) {
        const n = F();
        if (n) return n[e](...t);
      }
      __onMicrofrontendPageChangeState__({ page: t }) {
        this.microfrontendPage = t.includes(e) ? t : this.microfrontendPage;
      }
      async getMicrofrontEndCurrentPage() {
        return ae(this, "__getWithAsyncCurrentPageName__", []);
      }
      flush(e) {
        return window.cells.flush(e);
      }
      ___toggleSpinner___(e) {
        this.showApplicationSpinner = e;
      }
      __getInterceptorNavigationContext__() {
        return {
          href: document.location.href,
          interceptorContext: window.cells.getInterceptorContext(),
        };
      }
      disconnectedCallback() {
        super.disconnectedCallback(), oe(this.microfrontendUid);
      }
      ___getCurrentContext___() {
        return this.__currentContext__;
      }
      onFeatureNavigationGoForward(n) {
        W(this.getCurrentRoute().subroute)((t) =>
          this.navigate(e, { route: t })
        )((e) =>
          this.executeOnIsolatedPage("locationReplace", [
            `${t}/index.html#!${e}`,
          ])
        )(n);
      }
      createSpans(e, t) {
        return t
          ? e.map(({ span: e, log: t }) => ({
              span: this.createSpan(e),
              log: t,
            }))
          : e.map((e) => this.createSpan(e));
      }
      backStepMicrofrontend() {
        window.history.back();
      }
    },
  ce = { "@functional/placeholder": !0 },
  ue = (e) => e === ce,
  _e = (e, t) =>
    function n(...o) {
      return ((e, t) => t.length >= e && !t.some(ue))(e, o)
        ? t(...o)
        : (...e) =>
            n(
              ...((e, t) =>
                e
                  .map((e) => (ue(e) && Boolean(t.length) ? t.shift() : e))
                  .concat(t))(o, e)
            );
    },
  ge = (e) => _e(e.length, e),
  fe =
    (e, t) =>
    (...n) =>
      t(e(...n)),
  pe = (...e) => e.reduce(fe);
ge((e, t) =>
  _e(t.length, (...n) => {
    try {
      return t(...n);
    } catch (t) {
      return e(t, ...n);
    }
  })
),
  ge(
    (e, t) =>
      (...n) =>
        t(n[e])
  );
const he = ge((e, t) => {
    const n = [];
    let o = 0;
    for (; o < t.length; ) n.push(t.slice(o, (o += e)));
    return n;
  }),
  de = ge((e) => e.reduce((e, t) => e.concat(t), []));
ge((e, t) => t.join(e));
const be = ge((e, t) => t.slice(0, e < 0 ? 1 / 0 : e));
ge((e, t) => t.some(e));
const me = ge((e, t) => t.slice(-e));
ge((e, t, n) => {
  const o = [];
  let r = 0;
  const i = Math.min(t.length, n.length);
  for (; r < i; ) (o[r] = e(t[r], n[r])), (r += 1);
  return o;
}),
  ge((e, t) => t.filter(e)),
  ge((e, t) =>
    [...t].sort((t, n) => {
      const o = e(t),
        r = e(n);
      return o < r ? -1 : o > r ? 1 : 0;
    })
  ),
  ge((e, t, n) => {
    var o = e(t),
      r = e(n);
    return o < r ? -1 : o > r ? 1 : 0;
  }),
  ge((e, t, n) => {
    var o = e(t),
      r = e(n);
    return o > r ? -1 : o < r ? 1 : 0;
  }),
  ge((e, t) => [...t].sort(e));
const ve = (e) => !Pe(e) && e.constructor === Object,
  Pe = (e) => null == e,
  Se = Array.isArray,
  we = (e) => "function" == typeof e,
  Ae = (e) => "string" == typeof e,
  Oe = Number.isInteger || ((e) => e << 0 === e);
ge((e, t) => (!Pe(t) && t.constructor === e) || t instanceof e);
const ye = ge((e, t) => {
  if (e === t) return !0;
  if (
    "object" == typeof e &&
    null !== e &&
    "object" == typeof t &&
    null !== t
  ) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var n in e) {
      if (!t.hasOwnProperty(n)) return !1;
      if (!ye(e[n], t[n])) return !1;
    }
    return !0;
  }
  return !1;
});
ge((e, t) => {
  const n = e.find(([e]) => e(t));
  return n ? n[1](t) : void 0;
}),
  ge((e, t, n) => {
    const o = Math.max(e.length, t.length, n.length);
    return _e(o, (...o) => (e(...o) ? t(...o) : n(...o)));
  });
const { entries: Ce, fromEntries: Ie } = Object,
  Ee = ge((e, t) =>
    ve(t)
      ? ((e, t) =>
          Promise.all(Ce(t).map(([t, n]) => e(n).then((e) => [t, e]))).then(
            Ie
          ))(e, t)
      : Promise.all(t.map(e))
  ),
  Te = ge(async (e, t) => {
    const n = ve(t) ? {} : [];
    for (const [o, r] of Ce(t)) n[o] = await e(r);
    return n;
  });
ge((e, t, n) => {
  const o = Math.ceil(n.length / e),
    r = he(o, n);
  return Ee(Te(t), r).then(de);
}),
  ge((e, t) => new Promise((n) => setTimeout(() => n(t), e))),
  ge((e, t) => new Promise((n, o) => setTimeout(() => o(t), e)));
const je = ge((e, t) => {
    let n = t,
      o = 0;
    const r = Ae(e) ? e.split(".") : e;
    for (; o < r.length; ) {
      if (Pe(n)) return;
      (n = n[r[o]]), (o += 1);
    }
    return n;
  }),
  Re = ge((e, t) => {
    return ve(t)
      ? Object.entries(t).reduce((t, [n, o]) => ({ ...t, [n]: Re(e, o) }), {})
      : !Pe((n = t)) && we(n.map)
      ? t.map((t) => Re(e, t))
      : e(t);
    var n;
  });
ge((e, t, n) => (e(n) ? t(n) : n)),
  ge((e, t) => Re((e) => (we(e) ? e(t) : je(e, t)), e));
const Ne = (e) => e;
ge((e, t) => (e(t), t));
const Me = ge((e, t, n) =>
    Object.entries(n).reduce((t, [o, r]) => e(t, r, o, n), t)
  ),
  Le = ge((e, t, n) =>
    Se(n) ? n.reduce(e, t) : ve(n) ? Me(e, t, n) : n.reduce(e, t)
  ),
  $e = ge((e, t) =>
    t.map || Se(t)
      ? t.map(e)
      : ve(t)
      ? Le((t, n, o) => ({ ...t, [o]: e(n) }), {}, t)
      : void 0
  );
ge((e, t, n) => n.bimap(e, t)),
  ge((e, t) => t.bimap(e, Ne)),
  ge((e, t) => t.chain(e));
const ze = ge((e, t, n) =>
    Le(
      (e, n, o, r) => {
        const i = $e((e) => (t) => e.concat(t), e),
          s = t(n, o, r);
        return i.ap(s);
      },
      e([]),
      n
    )
  ),
  De = ge((e, t, n) =>
    Le(
      (e, o, r) => {
        const i = $e((e) => (t) => ({ ...e, [r]: t }), e),
          s = t(o, r, n);
        return i.ap(s);
      },
      e({}),
      n
    )
  ),
  Ue = ge((e, t, n) =>
    Se(n)
      ? ze(e, t, n)
      : ve(n)
      ? De(e, t, n)
      : n.traverse
      ? n.traverse(e, t)
      : void 0
  );
ge((e, t) => Ue(e, Ne, t)),
  ge((e, t) => {
    const n = (e, t, o) => {
      for (const [r, i] of Object.entries(t))
        e(i, r) ? o.push(i) : "object" == typeof i && n(e, i, o);
      return o;
    };
    return n(e, t, []);
  });
const xe = ge((e, t) => {
  let n;
  for (const [o, r] of Object.entries(t)) {
    if (e(r, o, t)) return r;
    if ("object" == typeof r && null !== r && ((n = xe(e, r)), null !== n))
      return n;
  }
  return null;
});
ge((e, t) => ((...e) => Object.assign({}, ...e))(e, t)),
  ge((e, t) => $e((e) => (we(e) ? e(t) : je(e, t)), e));
const Be = ge((e, t, n) => {
    const o = {};
    for (const e in n) o[e] = n[e];
    return (o[e] = t), o;
  }),
  ke = ge((e, t, n) => {
    const o = Ae(e)
      ? e.split(".").map((e) => (Oe(Number(e)) ? Number(e) : e))
      : e;
    if (0 === o.length) return t;
    let r = o[0];
    if (o.length > 1) {
      let e =
        !Pe(n) && ((e, t) => Object.prototype.hasOwnProperty.call(t, e))(r, n)
          ? n[r]
          : Oe(o[1])
          ? []
          : {};
      t = ke(Array.prototype.slice.call(o, 1), t, e);
    }
    if (Oe(r) && Se(n)) {
      let e = [].concat(n);
      return (e[r] = t), e;
    }
    return Be(r, t, n);
  });
ge((e, t) => {
  const n = (e, o, r) => {
    let i,
      s,
      a,
      l,
      c = o instanceof Array ? [] : {};
    for (s in e)
      (l = r ? `${r}.${s}` : s),
        (i = e[s]),
        (a = typeof i),
        (c[s] =
          "function" === a
            ? i(o ? o[s] : o, l, t, s)
            : i && "object" === a
            ? n(i, o ? o[s] : o, l)
            : o[s]);
    return c;
  };
  return n(e, t, "");
});
const Fe = ge((e, t) => {
  const n = {};
  for (let i in t)
    if (t.hasOwnProperty(i))
      if ("object" != typeof t[i] || null === t[i] || e(t[i])) n[i] = t[i];
      else {
        var o = Fe(e, t[i]);
        for (var r in o) o.hasOwnProperty(r) && (n[i + "." + r] = o[r]);
      }
  return n;
});
pe(JSON.stringify, JSON.parse),
  ge((e, t) =>
    e.reduce((e, n) => {
      const o = t[n];
      return ((e) => void 0 === e)(o) ? e : { ...e, [n]: o };
    }, {})
  );
const We = ge((e, t) => {
  if (!ve(t) && !Se(t)) return t;
  let n,
    o,
    r,
    i = t instanceof Array ? [] : {};
  for (o in t)
    (n = e[o]),
      (r = typeof n),
      (i[o] =
        "function" === r ? n(t[o]) : n && "object" === r ? We(n, t[o]) : t[o]);
  return i;
});
ge((e, t) => {
  const n = {};
  for (let o in t) e(t[o], o, t) && (n[o] = t[o]);
  return n;
});
const He = (e, t) => Object.prototype.hasOwnProperty.call(t, e),
  Ge = ge((e, t, n) => {
    var o,
      r = {};
    for (o in t) He(o, t) && (r[o] = He(o, n) ? e(o, t[o], n[o]) : t[o]);
    for (o in n) He(o, n) && !He(o, r) && (r[o] = n[o]);
    return r;
  }),
  qe = (e) => "[object Object]" === Object.prototype.toString.call(e),
  Ye = ge((e, t, n) =>
    Ge((t, n, o) => (qe(n) && qe(o) ? Ye(e, n, o) : e(t, n, o)), t, n)
  );
ge((e, t) => Ye((n, o, r) => (we(r) ? r(o, e, t, n) : r), e, t)),
  ge((e, t) => {
    const n = {},
      o = {};
    let r = 0;
    const i = e.length;
    for (; r < i; ) (o[e[r]] = 1), (r += 1);
    for (var s in t) o.hasOwnProperty(s) || (n[s] = t[s]);
    return n;
  }),
  ge((e, t) => (Se(t) ? ye(be(e.length, t), e) : t.startsWith(e))),
  ge((e, t) => (Se(t) ? ye(me(e.length, t), e) : t.endsWith(e))),
  ge((e, t, n) => {
    if (e >= n.length || e < -n.length) return n;
    const o = [...n];
    return (o[e] = t(n[e])), o;
  }),
  ge((e, t) => t.includes(e));
ge((e, t) => t[e < 0 ? t.length + e : e])(0),
  ge((e, t) => t.split(e)),
  ge((e, t, n) => n.replace(e, t));
const Ve =
    (e = !1) =>
    (t) =>
      class extends t {
        onPageEnter() {
          super.onPageEnter && super.onPageEnter(),
            this.publish("ch_global_set_app_template_full_screen", e);
        }
      },
  Xe = (e) => {
    const { PAGE_NAME: t, SOLUTION_NAME: n } = e,
      o = pe(Ve(!0)),
      r = pe(Ve(!1));
    switch (n) {
      case "bbva-btge-transfers-solution":
      case "ecs-adviser-solution":
        return o(e);
      default:
        return r(e);
    }
  };
Xe(
  le({
    solution: "bbva-btge-side-panel-solution",
    origin: window.AppConfig.bbvaBtgeSidePanelSolution.origin,
  })
).define();
var Ze = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-transfers-solution",
    origin: window.AppConfig.bbvaBtgeTransfersSolution.origin,
  })
).define();
var Je = Object.freeze({ __proto__: null });
le({
  solution: "ecs-demo-solution",
  origin: window.AppConfig.ecsDemoSolution.origin,
}).define();
var Qe = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-online-signature-solution",
    origin: window.AppConfig.bbvaBtgeOnlineSignatureSolution.origin,
  })
).define();
var Ke = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "ecs-faqs-solution",
    origin: window.AppConfig.ecsFaqsSolution.origin,
  })
).define();
var et = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "ecs-documents-solution",
    origin: window.AppConfig.ecsDocumentsSolution.origin,
  })
).define();
var tt = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-tasks-solution",
    origin: window.AppConfig.bbvaBtgeTasksSolution.origin,
  })
).define();
var nt = Object.freeze({ __proto__: null });
class ot extends E {
  static get is() {
    return "feedback-page";
  }
  render() {
    return U`
      <cells-template-paper-drawer-panel>
        <div slot="app__main">
          <div></div>
        </div>
      </cells-template-paper-drawer-panel>
    `;
  }
}
window.customElements.define(ot.is, ot);
var rt = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-accounts-solution",
    origin: window.AppConfig.bbvaBtgeAccountsSolution.origin,
  })
).define();
var it = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-tracking-solution",
    origin: window.AppConfig.bbvaBtgeTrackingSolution.origin,
  })
).define();
var st = Object.freeze({ __proto__: null });
const { solution: at, origin: lt } = window.AppConfig.legacySetup;
class ct extends I(
  le({ solution: at, origin: lt, attributes: { class: "url-loader" } })
) {
  static get is() {
    return "url-page";
  }
  static get styles() {
    return G`
      .url-loader {
        position: absolute;
        overflow: hidden;
      }
    `;
  }
  connectWithIsolatedPage(e) {
    (this.__iframe__.src = e), ie(this.__iframe__, this);
  }
  onPageEnter() {
    super.onPageEnter && super.onPageEnter(),
      this.publish("ch_global_set_app_template_full_screen", !1),
      this.subscribe(
        "ch_navigate_from_menu",
        function (e) {
          e.iframe_url && this.connectWithIsolatedPage(e.iframe_url);
        }.bind(this)
      );
  }
  onPageLeave() {
    super.onPageLeave && super.onPageLeave(),
      this.unsubscribe(["ch_navigate_from_menu"]);
  }
  firstUpdated() {
    (this.__iframe__ = this.shadowRoot.querySelector("bbva-core-iframe")),
      this.__adaptCoreIframe(this.__iframe__),
      this.connectWithIsolatedPage("https://empty");
  }
}
window.customElements.define(ct.is, ct);
var ut = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "ecs-adviser-solution",
    origin: window.AppConfig.ecsAdviserSolution.origin,
  })
).define();
var _t = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-operation-signature-list-solution",
    origin: window.AppConfig.bbvaBtgeOperationSignatureListSolution.origin,
  })
).define();
var gt = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "ecs-boilerplate-solution",
    origin: window.AppConfig.ecsBoilerplateSolution.origin,
  })
).define();
var ft = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "ecs-funding-zone-solution",
    origin: window.AppConfig.ecsFundingZoneSolution.origin,
  })
).define();
var pt = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "ecs-finance-solution",
    origin: window.AppConfig.ecsFinanceSolution.origin,
  })
).define();
var ht = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-notifications-solution",
    origin: window.AppConfig.bbvaBtgeNotificationsSolution.origin,
  })
).define();
var dt = Object.freeze({ __proto__: null });
le({
  solution: "ecs-solarpanels-solution",
  origin: window.AppConfig.ecsSolarpanelsSolution.origin,
}).define();
var bt = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-streaming-solution",
    origin: window.AppConfig.bbvaBtgeStreamingSolution.origin,
  })
).define();
var mt = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-rtp-request-solution",
    origin: window.AppConfig.bbvaBtgeRtpRequestSolution.origin,
  })
).define();
var vt = Object.freeze({ __proto__: null });
le({
  solution: "ecs-electriccars-solution",
  origin: window.AppConfig.ecsElectriccarsSolution.origin,
}).define();
var Pt = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "bbva-btge-spark-landing-solution",
    origin: window.AppConfig.bbvaBtgeSparkLandingSolution.origin,
  })
).define();
var St = Object.freeze({ __proto__: null });
Xe(
  le({
    solution: "ecs-correspondence-solution",
    origin: window.AppConfig.ecsCorrespondenceSolution.origin,
  })
).define();
var wt = Object.freeze({ __proto__: null });
window.loadCellsPage = (e) =>
  "bbva-btge-accounts-solution" === e
    ? Promise.resolve().then(function () {
        return it;
      })
    : "bbva-btge-notifications-solution" === e
    ? Promise.resolve().then(function () {
        return dt;
      })
    : "bbva-btge-online-signature-solution" === e
    ? Promise.resolve().then(function () {
        return Ke;
      })
    : "bbva-btge-operation-signature-list-solution" === e
    ? Promise.resolve().then(function () {
        return gt;
      })
    : "bbva-btge-rtp-request-solution" === e
    ? Promise.resolve().then(function () {
        return vt;
      })
    : "bbva-btge-side-panel-solution" === e
    ? Promise.resolve().then(function () {
        return Ze;
      })
    : "bbva-btge-spark-landing-solution" === e
    ? Promise.resolve().then(function () {
        return St;
      })
    : "bbva-btge-streaming-solution" === e
    ? Promise.resolve().then(function () {
        return mt;
      })
    : "bbva-btge-tasks-solution" === e
    ? Promise.resolve().then(function () {
        return nt;
      })
    : "bbva-btge-tracking-solution" === e
    ? Promise.resolve().then(function () {
        return st;
      })
    : "bbva-btge-transfers-solution" === e
    ? Promise.resolve().then(function () {
        return Je;
      })
    : "ecs-adviser-solution" === e
    ? Promise.resolve().then(function () {
        return _t;
      })
    : "ecs-boilerplate-solution" === e
    ? Promise.resolve().then(function () {
        return ft;
      })
    : "ecs-correspondence-solution" === e
    ? Promise.resolve().then(function () {
        return wt;
      })
    : "ecs-demo-solution" === e
    ? Promise.resolve().then(function () {
        return Qe;
      })
    : "ecs-documents-solution" === e
    ? Promise.resolve().then(function () {
        return tt;
      })
    : "ecs-electriccars-solution" === e
    ? Promise.resolve().then(function () {
        return Pt;
      })
    : "ecs-faqs-solution" === e
    ? Promise.resolve().then(function () {
        return et;
      })
    : "ecs-finance-solution" === e
    ? Promise.resolve().then(function () {
        return ht;
      })
    : "ecs-funding-zone-solution" === e
    ? Promise.resolve().then(function () {
        return pt;
      })
    : "ecs-solarpanels-solution" === e
    ? Promise.resolve().then(function () {
        return bt;
      })
    : "feedback" === e
    ? Promise.resolve().then(function () {
        return rt;
      })
    : "legacy" === e
    ? import("./c3a7488d.js")
    : "url" === e
    ? Promise.resolve().then(function () {
        return ut;
      })
    : void 0;
var At = Object.freeze({ __proto__: null });
export {
  re as a,
  J as b,
  ie as c,
  te as d,
  ne as e,
  le as f,
  At as l,
  Z as n,
  K as s,
  oe as u,
};
