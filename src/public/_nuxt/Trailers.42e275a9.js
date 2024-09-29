import { _ as R } from "./TrianglePattern.96e97c96.js";
import {
  _ as G,
  o as l,
  c,
  a as e,
  F as f,
  m as y,
  k as d,
  f as J,
  h as E,
  j as B,
  b as O,
  t as g,
  d as L,
  D as S,
  n as _,
  L as h,
  E as z,
  S as m,
  q as K,
  y as Q,
} from "./entry.53078840.js";
import { i as A, f as a } from "./elements.5547b51a.js";
const U = {},
  X = { class: "triangles-mask" },
  Z = { class: "triangles-areas triangles-all" },
  ee = e(
    "svg",
    { class: "triangle triangle-up", viewBox: "0 0 100 100.1" },
    [e("polygon", { points: "50 15, 100 100, 0 100" })],
    -1
  ),
  te = e(
    "svg",
    { class: "triangle triangle-down", viewBox: "0 0 100 100" },
    [e("polygon", { points: "100 15, 50 100, 0 15" })],
    -1
  ),
  se = [ee, te];
function ae(u, b) {
  return (
    l(),
    c("div", X, [
      e("div", Z, [
        (l(),
        c(
          f,
          null,
          y(4, (p) =>
            e("div", { class: "triangle-line", key: p }, [
              (l(),
              c(
                f,
                null,
                y(7, (v) => e("div", { class: "triangle-duo", key: v }, se)),
                64
              )),
            ])
          ),
          64
        )),
      ]),
    ])
  );
}
const oe = G(U, [["render", ae]]);
const ie = { class: "trailers" },
  re = e("div", { class: "scrollto" }, null, -1),
  ne = { class: "trailers-iframe-overlay" },
  le = e("span", null, "CLOSE", -1),
  ce = [le],
  de = ["src"],
  ue = { class: "trailers-fakescroller" },
  _e = { class: "trailers-fakescroller-part1" },
  me = e("div", { class: "trailers-fakespacer" }, null, -1),
  pe = e("div", { class: "trailers-fakescroller-part2" }, null, -1),
  ge = { class: "trailers-scaler" },
  ve = { class: "trailers-stickytainer" },
  he = { class: "trailers-videocontainer" },
  fe = {
    autoplay: "",
    playsinline: "",
    muted: "",
    loop: "",
    class: "trailer-bg-vid",
  },
  ye = ["src"],
  Te = e("div", { class: "trailers-darkener" }, null, -1),
  be = { class: "trailers-hl", id: "trailers-hl" },
  ke = { class: "trailers-splt" },
  xe = e("br", null, null, -1),
  we = { class: "trailers-amount" },
  Ce = { key: 0, class: "trailers-amount-0" },
  Le = { class: "trailers-camera" },
  $e = { class: "trailers-slider" },
  Ne = e("div", { class: "trailers-spacer" }, null, -1),
  Ve = { class: "trailer-container" },
  We = ["onClick"],
  Ee = { class: "trailer-vid-box" },
  Be = {
    autoplay: "",
    playsinline: "",
    muted: "",
    loop: "",
    class: "trailer-vid",
  },
  Oe = ["src"],
  Se = { class: "trailer-info-box" },
  ze = { class: "trailer-name" },
  Ae = { class: "trailer-info" },
  Pe = { class: "trailer-info-teaser" },
  He = { class: "trailer-info-length" },
  Me = { class: "trailer-info-platform" },
  Ye = { class: "trailers-stickytainer" },
  De = { class: "trailers-videocontainer" },
  qe = {
    __name: "Trailers",
    props: { blok: Object },
    setup(u) {
      const b = u;
      d(null);
      const p = d(null),
        v = d(null),
        P = d(null),
        k = d(!1),
        x = d(!1),
        w = d(!1);
      d(null), d(0);
      const $ = d(null),
        H = d(!0);
      function N() {
        V(), W();
      }
      function V() {
        (v.value = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        )),
          (P.value = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
          ));
      }
      function C(t) {
        if (w.value) return;
        t !== void 0 && ($.value = b.blok.teasers[t].link),
          (k.value = !k.value);
        const o = a(".header")[0],
          i = a(".trailers-iframe-overlay")[0],
          r = a(".trailers-iframe-bg")[0],
          s = a(".trailers-iframe-close")[0];
        k.value
          ? ((x.value = !0),
            S(() => {
              const n = a(".trailers-iframe")[0];
              Y(n),
                i.classList.add("showoverlay"),
                _.timeline({ paused: !0 })
                  .set(o, { display: "none" })
                  .fromTo(
                    r,
                    { opacity: 0 },
                    { duration: 0.4, opacity: 1, ease: h.easeNone },
                    0
                  )
                  .fromTo(
                    n,
                    { y: "100vh" },
                    { duration: 0.4, y: 0, ease: z.easeOut },
                    0.2
                  )
                  .fromTo(
                    s,
                    { opacity: 0 },
                    { duration: 0.4, opacity: 1, ease: h.easeNone },
                    0.2
                  )
                  .play(0);
            }))
          : S(() => {
              const n = a(".trailers-iframe")[0];
              M(n),
                _.timeline({
                  paused: !0,
                  onComplete: () => {
                    i.classList.remove("showoverlay"), (x.value = !1);
                  },
                })
                  .to(r, { duration: 0.4, opacity: 0, ease: h.easeNone }, 0.2)
                  .to(n, { duration: 0.4, y: "-100vh", ease: z.easeOut }, 0)
                  .set(s, { opacity: 0 }, 0)
                  .set(o, { display: "flex" }, 0)
                  .play(0);
            }),
          (w.value = !0),
          setTimeout(() => {
            w.value = !1;
          }, 400);
      }
      function M(t) {
        t.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
      function Y(t) {
        setTimeout(() => {
          t.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }, 500);
      }
      function D() {
        const t = a(".trailers-hl")[0],
          o = a(".char", t),
          i = a(".trailers")[0],
          r = a(".trailers-amount")[0],
          s = _.timeline({ paused: !0 })
            .fromTo(
              o,
              { opacity: 1, rotationY: "0deg", x: "0%" },
              {
                opacity: 0,
                rotationY: "90deg",
                x: "-70%",
                stagger: 0.1,
                ease: "power2.inOut",
              },
              0
            )
            .fromTo(
              r,
              { opacity: 1, rotationY: "0deg", x: "0%" },
              {
                opacity: 0,
                rotationY: "90deg",
                x: "-200%",
                ease: "power2.inOut",
              },
              0
            );
        m.create({
          animation: s,
          trigger: i,
          start: "top top",
          end: "top -35%",
          scrub: 0.5,
        });
      }
      function W() {
        const t = a(".trailers-slider")[0],
          o = a(".trailers-fakescroller-part1")[0],
          i = a(".trailer-box")[0],
          r = a(".triangles-all");
        p.value !== null && (_.set(t, { clearProps: "all" }), p.value.kill()),
          m.getById("horst") && m.getById("horst").kill();
        const s = t.clientWidth,
          n = i.clientWidth,
          T = s - v.value / 2 - n / 2,
          F = v.value / 2 + n / 2;
        (p.value = _.fromTo(t, { x: "0%" }, { x: -T, ease: h.easeNone }, 0)),
          m.create({
            animation: p.value,
            trigger: o,
            start: "top top",
            end: () => "bottom " + F,
            scrub: 0.5,
            id: "horst",
          });
        const q = _.fromTo(r, { x: "0" }, { x: "-10vw", ease: h.easeNone }, 0);
        m.create({
          animation: q,
          trigger: o,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        });
      }
      function j() {
        const t = a(".triangles-areas")[0],
          o = a(".triangle", t),
          i = a(".trailers-fakescroller-part2")[0],
          r = a(".info-bg")[0],
          s = _.timeline({ paused: !0 })
            .fromTo(
              o,
              { opacity: 0, scale: 0 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.1,
                stagger: { from: "random", amount: 0.6 },
                ease: "power2.inOut",
              },
              0
            )
            .fromTo(r, { opacity: 0 }, { opacity: 1, duration: 1e-6 }, 0.9);
        m.create({
          animation: s,
          trigger: i,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0,
        });
      }
      function I() {
        for (let t = 0; t < b.blok.teasers.length - 1; t++) {
          const o = a(".trailers-faketeaser")[t + 1],
            i = a(".trailers-videobox")[t],
            r = _.fromTo(
              i,
              { opacity: 1 },
              { opacity: 0, duration: 1, ease: "none" },
              0
            );
          m.create({
            animation: r,
            trigger: o,
            start: "top 40%",
            end: "top 30%",
            scrub: 0.5,
          });
        }
      }
      return (
        J(() => {
          (H.value = A()),
            document.fonts.ready.then(() => {
              const { $splitting: t } = K();
              t({ target: ".trailers-splt" }),
                V(),
                I(),
                W(),
                j(),
                setTimeout(D, 100);
              var o;
              A() == !1
                ? window.addEventListener("resize", () => {
                    clearTimeout(o), (o = setTimeout(N, 100));
                  })
                : window.addEventListener("orientationchange", () => {
                    var i = () => {
                      N(), window.removeEventListener("resize", i);
                    };
                    window.addEventListener("resize", i);
                  });
            });
        }),
        (t, o) => {
          const i = R,
            r = oe;
          return (
            l(),
            c("div", ie, [
              re,
              e("div", ne, [
                e("div", {
                  class: "trailers-iframe-bg",
                  onClick: o[0] || (o[0] = (s) => C()),
                }),
                e(
                  "div",
                  {
                    class: "trailers-iframe-close",
                    onClick: o[1] || (o[1] = (s) => C()),
                  },
                  ce
                ),
                E(x)
                  ? (l(),
                    c(
                      "iframe",
                      {
                        key: 0,
                        class: "trailers-iframe",
                        width: "90%",
                        height: "90%",
                        src: E($) + "?enablejsapi=1",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        allowfullscreen: "",
                      },
                      null,
                      8,
                      de
                    ))
                  : B("", !0),
              ]),
              e("div", ue, [
                e("div", _e, [
                  me,
                  (l(!0),
                  c(
                    f,
                    null,
                    y(
                      u.blok.teasers,
                      (s) => (
                        l(),
                        c("div", { class: "trailers-faketeaser", key: s.uuid })
                      )
                    ),
                    128
                  )),
                ]),
                pe,
              ]),
              e("div", ge, [
                e("div", ve, [
                  e("div", he, [
                    O(i, { class: "triangles-gutter" }),
                    (l(!0),
                    c(
                      f,
                      null,
                      y(
                        u.blok.teasers,
                        (s, n) => (
                          l(),
                          c(
                            "div",
                            {
                              class: Q(["trailers-videobox", "videobox" + n]),
                              key: s.uuid,
                            },
                            [
                              e("video", fe, [
                                e(
                                  "source",
                                  { src: s.video.filename, type: "video/mp4" },
                                  null,
                                  8,
                                  ye
                                ),
                              ]),
                            ],
                            2
                          )
                        )
                      ),
                      128
                    )),
                    Te,
                    e("h2", be, [
                      e("span", ke, g(u.blok.headline), 1),
                      xe,
                      e("span", we, [
                        u.blok.teasers.length < 10
                          ? (l(), c("span", Ce, "0"))
                          : B("", !0),
                        L(g(u.blok.teasers.length), 1),
                      ]),
                    ]),
                  ]),
                ]),
                e("div", Le, [
                  e("div", $e, [
                    Ne,
                    (l(!0),
                    c(
                      f,
                      null,
                      y(
                        u.blok.teasers,
                        (s, n) => (
                          l(),
                          c("div", { class: "trailer", key: s.uuid }, [
                            e("div", Ve, [
                              e(
                                "div",
                                { class: "trailer-box" },
                                [
                                  e("div", Ee, [
                                    e("video", Be, [
                                      e(
                                        "source",
                                        {
                                          src: s.video.filename,
                                          type: "video/mp4",
                                        },
                                        null,
                                        8,
                                        Oe
                                      ),
                                    ]),
                                  ]),
                                  e("div", Se, [
                                    e("h2", ze, g(s.name), 1),
                                    e("div", Ae, [
                                      e("span", He, g(s.length), 1)
                                    ]),
                                  ]),
                                ],
                                8,
                                We
                              ),
                            ]),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                e("div", Ye, [e("div", De, [O(r)])]),
              ]),
            ])
          );
        }
      );
    },
  };
export { qe as default };
