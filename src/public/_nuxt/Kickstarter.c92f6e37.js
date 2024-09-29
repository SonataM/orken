import { _ as h } from "./nuxt-img.e986aced.js";
import {
  s as m,
  f as p,
  o as u,
  c as b,
  a as t,
  b as g,
  t as a,
  C as x,
  n as f,
  S as v,
  q as y,
} from "./entry.53078840.js";
import { f as o } from "./elements.5547b51a.js";
import "./vue.f36acd1f.44074f53.js";
const T = { class: "kickstarter" },
  Y = t("div", { class: "scrollto ks-scrollto" }, null, -1),
  w = { class: "ks-box" },
  A = t("div", { class: "ks-pic-darkener" }, null, -1),
  O = { class: "ks-textbox" },
  S = { class: "ks-hl-mask" },
  C = { class: "ks-mini-hl ks-splt" },
  N = { class: "ks-hl-mask" },
  B = { class: "ks-hl ks-splt" },
  q = { class: "ks-btn-box" },
  K = ["href"],
  V = t("div", { class: "ks-btn-bg" }, null, -1),
  j = { class: "ks-btn-text" },
  M = {
    __name: "Kickstarter",
    props: { blok: Object },
    setup(s) {
      const r = s;
      m(() => x(r.blok.text));
      function c() {
        const e = o(".ks-mini-hl")[0],
          i = o(".char", e),
          n = o(".ks-hl")[0],
          l = o(".char", n),
          d = o(".ks-btn-bg")[0],
          k = o(".ks-btn-text")[0],
          _ = f
            .timeline({ paused: !0 })
            .fromTo(
              i,
              { x: "50%", rotationY: "90deg", opacity: 0 },
              {
                duration: 0.5,
                opacity: 1,
                rotationY: "0deg",
                x: 0,
                stagger: 0.05,
                ease: "power2.inOut",
              },
              0
            )
            .fromTo(
              l,
              { x: "50%", rotationY: "90deg", opacity: 0 },
              {
                duration: 0.5,
                opacity: 1,
                rotationY: "0deg",
                x: 0,
                stagger: 0.05,
                ease: "power2.inOut",
              },
              ">-0.6"
            )
            .fromTo(
              d,
              { scaleY: 0 },
              {
                duration: 0.5,
                transformOrigin: "bottom",
                scaleY: 1,
                ease: "power2.out",
              },
              ">-0.4"
            )
            .fromTo(
              k,
              { y: "200%" },
              {
                duration: 0.5,
                transformOrigin: "bottom",
                y: "0%",
                ease: "power2.out",
              },
              ">-0.4"
            );
        v.create({
          animation: _,
          trigger: n,
          start: "top bottom",
          end: "top 70%",
          toggleActions: "restart none resume pause",
        });
      }
      return (
        p(() => {
          document.fonts.ready.then(() => {
            const { $splitting: e } = y();
            e({ target: ".ks-splt" }), c();
          });
        }),
        (e, i) => {
          const n = h;
          return (
            u(),
            b("div", T, [
              Y,
              t("div", w, [
                g(
                  n,
                  {
                    class: "ks-pic",
                    provider: "storyblok",
                    width: "1920",
                    quality: "50",
                    sizes: "sm:800px md:1300px xxl:1920px",
                    placeholder: [10, 0, 50, 5],
                    src: s.blok.ks_pic.filename,
                    alt: s.blok.ks_pic.alt,
                  },
                  null,
                  8,
                  ["src", "alt"]
                ),
                A,
                t("div", O, [
                  t("div", S, [t("h2", C, a(s.blok.ks_minihl), 1)]),
                  t("div", N, [t("h1", B, a(s.blok.ks_hl), 1)]),
                  t("div", q, [
                    t(
                      "a",
                      {
                        href: s.blok.ks_link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "ks-btn",
                      },
                      [V, t("span", j, a(s.blok.ks_buttontext), 1)],
                      8,
                      K
                    ),
                  ]),
                ]),
              ]),
            ])
          );
        }
      );
    },
  };
export { M as default };
