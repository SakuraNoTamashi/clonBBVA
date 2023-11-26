import { h as o, H as e, I as t } from "./68cf8239.js";
import { f as a, c as s } from "./dbc251af.js";
var i = o`
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.full-size {
  height: 100%;
  width: 100%;
}

span {
  position: absolute;
  right: 0;
  color: #fff;
  padding: .4rem;
  background-color: #000;
  opacity: .4;
  border-radius: 0 0 0 .8rem;
}

.kyop-microfrontend {
  position: absolute;
  overflow: hidden;
}
`;
const {
    solution: r,
    origin: n,
    PATH: p,
    HOMES: l,
  } = window.AppConfig.legacySetup,
  _ = {
    class: "kyop-microfrontend",
    style: {},
    title: "bbva-btge-kyop-solution",
  };
class c extends e(a({ solution: r, origin: n, attributes: _ })) {
  static get is() {
    return "legacy-page";
  }
  static get properties() {
    return { url: { type: String }, kyop: { type: String } };
  }
  constructor() {
    super(),
      (this.isKYOP = !0),
      (this.isLoadedKYOP = !1),
      (this.kyop = -1),
      (this.navigateBy = "default"),
      this.subscribe("activity-ping", (o) => {
        console.log(`[FROM-KYOP][activity-ping], ${o.msg}`);
      }),
      this.subscribe("__kyop-execution_plan_created", (o) => {
        console.log("[KYOP] __kyop-execution_plan_created"),
          (this.isLoadedKYOP = !0);
      }),
      this.subscribe("__kyop-main_loaded", (o) => {
        console.log("[KYOP] ___kyop-main_loaded"),
          this._urlNavigationByKyopProcess();
      }),
      this.subscribe("__kyop-menu_loaded", (o) => {
        console.log("[KYOP] ___kyop-menu_loaded");
      }),
      this.subscribe("__kyop-failed_load", (o) => {
        console.log("[KYOP] ___kyop-failed_load"),
          this.runAction(({ GlobalErrorAction: o }) => o.globalError());
      }),
      this.subscribe("ch_navigation_by_kyop_id", (o) => {
        if (!o.params || (o.params && !o.params.kyop))
          this.publish("__kyop-clear-opinator-session-variable");
        else if (
          (console.log("CHANNEL-IN ch_navigation"),
          console.log("data", o),
          (this.navigateBy = "navigateToKyopById"),
          (this.params = o.params),
          this.isLoadedKYOP)
        ) {
          const { kyop: o } = this.params;
          this.publishKyopNavigation("__kyop-load_legacy_menu", { menu: o });
        }
      }),
      this.subscribe("ch_navigation_by_kyop_url", (o) => {
        if (
          (console.log("CHANNEL-IN ch_navigation"),
          console.log("data", o),
          (this.navigateBy = "navigateToKyopByUrl"),
          (this.params = o.params),
          this.isLoadedKYOP)
        ) {
          const { kyop: o } = this.params;
          this.publishKyopNavigation("__kyop-load_legacy_url", { url: o });
        }
      }),
      this.subscribe("ch_navigation_by_kyop_process", (o) => {
        console.log("CHANNEL-IN ch_navigation_by_kyop_process"),
          console.log("data", o),
          (this.navigateBy = "navigateToKyopByProcess"),
          (this.params = o.params),
          this.isLoadedKYOP &&
            this.publishKyopNavigation(
              "__kyop-alt_load_legacy_menu",
              this.params
            );
      }),
      this.subscribe("ch_navigation_legacy_opinator", async () => {
        const o = new t().get("bbvaBtgeUserContext"),
          e = {
            operativeId: "index-senda",
            feedbackId: "exp_senda_web",
            feedbackType: "pull",
            hasGroup: !0,
            businessId:
              "C" !==
              (o && o.relatedPersonId.toUpperCase()).charAt(
                o.relatedPersonId.length - 1
              )
                ? o.relatedPersonId.toUpperCase() + "C"
                : o.relatedPersonId.toUpperCase(),
            responseChannel: "ch_open_opinator_as_modal",
            modalConfig: {
              size: "s",
              defaultIframeHeight: 650,
              resizedIframeHeight: 325,
            },
          };
        console.log("Parametros entrada feedback: ", e);
        try {
          await this.runAction(({ FeedbacksManager: o }) => o.getOpinator(e));
        } catch (o) {
          console.log("Error al ejecutar accion de feedback: ", o);
        }
      }),
      this.subscribe("ch_open_opinator_by_params", async (o) => {
        const e = new t().get("bbvaBtgeUserContext"),
          a =
            "C" !==
            (e && e.relatedPersonId.toUpperCase()).charAt(
              e.relatedPersonId.length - 1
            )
              ? e.relatedPersonId.toUpperCase() + "C"
              : e.relatedPersonId.toUpperCase(),
          s = "&" === o.params.charAt(0) ? o.params.replace("&", "") : o.params,
          i = {
            operativeId: o.idOperativa,
            feedbackId: o.idFeedback,
            feedbackType: o.tipo,
            params: s,
            hasGroup: !0,
            businessId: a,
            responseChannel: "ch_open_opinator_as_modal",
            modalConfig: {
              size: "s",
              defaultIframeHeight: 650,
              resizedIframeHeight: 325,
            },
          };
        console.log("Parametros entrada feedback: ", i);
        try {
          await this.runAction(({ FeedbacksManager: o }) => o.getOpinator(i));
        } catch (o) {
          console.log("Error al ejecutar accion de feedback: ", o);
        }
      }),
      this.subscribe("ch_open_abandonment_opinator", async () => {
        const o = new t(),
          e = o.get("opinatorAbandono");
        e
          ? this._openAbandonmentOpinator(e, o)
          : (this.subscribe(
              "__kyop-get_legacy_session_storage_pushFeedbacksSaturated",
              ({ response: e }) => {
                e && o.set("pushFeedbacksSaturated", e),
                  this.subscribe(
                    "__kyop-get_legacy_session_storage_opinatorExito",
                    ({ response: e }) => {
                      e ||
                        (this.subscribe(
                          "__kyop-get_legacy_session_storage_opinatorAbandono",
                          ({ response: e }) => {
                            e &&
                              this._openAbandonmentOpinator(JSON.parse(e), o);
                          }
                        ),
                        this.publish("__kyop-get_legacy_session_storage", {
                          item: "opinatorAbandono",
                        }));
                    }
                  ),
                  this.publish("__kyop-get_legacy_session_storage", {
                    item: "opinatorExito",
                  });
              }
            ),
            this.publish("__kyop-get_legacy_session_storage", {
              item: "pushFeedbacksSaturated",
            }));
      }),
      this.subscribe("ch_cross_logout_show_legacy_opinator", () => {
        this.isLoadedKYOP &&
          this.publish("__kyop-alt_legacy_opinator_url_request");
      }),
      this.subscribe("__kyop-alt_legacy_opinator_url_response", (o) => {
        o && o.opinatorUrl && o.showOpinator
          ? this.publish("ch_open_opinator_as_modal", {
              url: `https://${o.opinatorUrl}`,
            })
          : this.publish("ch_global_btge_do_logout", { noOpinator: !0 });
      });
  }
  publishKyopNavigation(o, e) {
    this.publish(o, [e]);
  }
  _urlNavigationByKyopProcess() {
    const o = new URLSearchParams(window.location.search),
      e = {};
    for (const [t, a] of o.entries()) {
      const o = (o) => (o ? o.split("/")[0] : null);
      "v" !== t && (e[t] = o(a));
    }
    e.codProceso &&
      e.codServicio &&
      (this.publish("ch_navigation_by_kyop_process", { params: { kyop: e } }),
      window.history.replaceState(
        {},
        "",
        `${window.location.origin}${window.location.pathname}${window.location.hash}`
      ));
  }
  getDefaultKyopURL() {
    const [o] = window.location.hash.split("/").slice(-1);
    return (
      (this.params = { kyop: o }),
      (this.navigateBy = /^https:\/\/eup-grupobbva2\.igrupobbva/.test(o)
        ? "blockDeepLinking"
        : "navigateToKyopById"),
      this.getKyopSrc(this.navigateBy)
    );
  }
  firstUpdated() {
    (this.__iframe__ = this.shadowRoot.querySelector("bbva-core-iframe")),
      (this.cellsPage = this.shadowRoot.querySelector(
        "cells-template-paper-drawer-panel"
      )),
      this.__adaptCoreIframe(this.__iframe__);
    const o = this.getKyopSrc(this.navigateBy);
    o && this.connectWithIsolatedPage(o);
  }
  connectWithIsolatedPage(o) {
    (this.__iframe__.src = o), s(this.__iframe__, this);
  }
  static get styles() {
    return [i];
  }
  getKyopSrc(o) {
    return {
      navigateToKyopByUrl: () => this.navigateToKyopByUrl({ kyop: this.kyop }),
      navigateToKyopById: () => this.navigateToKyopById({ kyop: this.kyop }),
      blockDeepLinking: () => this.error404(),
      default: () => this.getDefaultKyopURL(),
    }[o]();
  }
  navigateToKyopByUrl() {
    const { kyop: o } = this.params;
    return (
      (this.kyop = o),
      (this.navigateBy = "navigateToKyopByUrl"),
      `${n}/${p}?url=${o}`
    );
  }
  navigateToKyopById() {
    const { kyop: o } = this.params;
    this.kyop = o;
    return `${n}/${p}${`?menu=${o}`}`;
  }
  _setErrorSolutionConfiguration() {
    const o = {
      title: this.t("bbva-btge-error-solution-title"),
      description: this.t("bbva-btge-error-solution-subtitle"),
      buttonText: this.t("bbva-btge-side-panel-solution-max-time-btn"),
      withLink: !1,
      buttonPublish: "ch_global_error_accept",
      opinator: !1,
    };
    this.publish("ch-global-config-error-change", o),
      this.publish("ch_cross_portal_hide_progress_content");
  }
  _openAbandonmentOpinator(o, e) {
    this.publish("ch_open_opinator_by_params", o), e.unset("opinatorAbandono");
  }
  error404() {
    return (
      this._setErrorSolutionConfiguration(),
      this.navigate("bbva-btge-side-panel-solution-error"),
      !1
    );
  }
  onPageLeave() {
    super.onPageLeave && super.onPageLeave();
  }
  onPageEnter() {
    super.onPageEnter && super.onPageEnter(),
      this.publish("ch_global_set_app_template_full_screen", !1);
  }
}
window.customElements.define(c.is, c);
