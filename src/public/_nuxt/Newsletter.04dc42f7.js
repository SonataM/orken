import { _ as B } from "./OrkenIcon.6dd711a5.js";
import { _ as E } from "./nuxt-img.e986aced.js";
import {
  k as r,
  f as F,
  o as g,
  c as b,
  a as e,
  F as U,
  m as Z,
  t as p,
  h as i,
  y as $,
  x,
  z as k,
  A as w,
  B as M,
  j as S,
  b as f,
  n as T,
  S as N,
} from "./entry.53078840.js";
import { f as c } from "./elements.5547b51a.js";
import "./vue.f36acd1f.44074f53.js";
const D = { class: "newsletter" },
  I = e("div", { class: "scrollto nlscrollto" }, null, -1),
  J = { class: "nl-scaler" },
  L = { class: "nl-hl-box" },
  P = { class: "nl-hl-word" },
  W = { class: "nl-hl-word" },
  G = { class: "nl-grid" },
  R = { class: "nl-subline" },
  Y = { class: "nl-subcount" },
  H = { class: "nl-sublines-box" },
  K = { key: 0, class: "nl-form", action: "#" },
  Q = ["onClick"],
  X = e("span", { class: "button-txt" }, "Sign me up!", -1),
  ee = [X],
  se = { key: 0, class: "form-error-msg" },
  te = { key: 1, class: "success-message nl-form" },
  ne = e(
    "span",
    { class: "success-thanks-msg" },
    "Thanks for subscribing!",
    -1
  ),
  oe = e(
    "span",
    { class: "success-check-msg" },
    " Check your email for confirmation message. ",
    -1
  ),
  ae = [ne, oe],
  le = { class: "nl-images-box" },
  ie = { class: "nl-img-positioner" },
  pe = {
    __name: "Newsletter",
    props: { blok: Object },
    setup(t) {
      const z = (n) =>
          String(n)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ),
        m = r(""),
        d = r(""),
        v = r(""),
        y = r(!1),
        _ = r(!1),
        h = r(!1),
        u = r(""),
        C = r(0);
      async function A() {
        try {
          const s = await (
            await fetch(
              `${window.location.origin}/.netlify/functions/subscriberCount`
            )
          ).json();
          C.value = s.count + 3103;
        } catch (n) {
          console.error("Failed to fetch subscriber count", n);
        }
      }
      function q() {
        const n = c(".newsletter")[0],
          s = c(".nl-hl"),
          o = c(".nl-hl-icon"),
          a = T.timeline({ paused: !1, repeat: -1 })
            .fromTo(s, { x: 0 }, { duration: 12, x: "-100%", ease: "none" }, 0)
            .fromTo(
              o,
              { rotationZ: 0 },
              { duration: 12, rotationZ: "-720deg", ease: "none" },
              0
            );
        N.create({
          animation: a,
          trigger: n,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause",
        });
      }
      function V() {
        const n = c(".nl-images-box")[0],
          s = c(".nl-img")[3],
          o = c(".nl-img")[2],
          a = c(".nl-img")[1],
          l = c(".nl-img")[0],
          O = T.timeline({ paused: !1 })
            .fromTo(l, { y: 0 }, { duration: 1, y: "20%", ease: "none" }, 0)
            .fromTo(
              a,
              { y: 0 },
              { duration: 1, y: "10%", scale: 1.1, ease: "none" },
              0
            )
            .fromTo(
              o,
              { y: 0 },
              { duration: 1, y: "5%", scale: 1.05, ease: "none" },
              0
            )
            .fromTo(
              s,
              { y: 0 },
              { duration: 1, y: "-15%", scale: 1.15, ease: "none" },
              0
            );
        N.create({
          animation: O,
          trigger: n,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause",
          scrub: 0.5,
        });
      }
      async function j() {
        if (y.value) return;
        if (((u.value = ""), (h.value = !1), !z(d.value))) {
          (u.value = "Not a valid email"), (h.value = !0);
          return;
        }
        if (m.value === "") {
          (u.value = "What's your name buddy?"), (h.value = !0);
          return;
        }
        if (v.value !== "") return;
        y.value = !0;
        const n = `${window.location.origin}/.netlify/functions/signup`,
          s = await $fetch(n, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: d.value, first_name: m.value }),
          }).catch((a) => ({ status: "error" })),
          { status: o } = JSON.parse(s);
        if (o === "error") {
          (h.value = !0), (u.value = "Something went wrong"), (y.value = !1);
          return;
        }
        o === "success" &&
          ((d.value = ""),
          (m.value = ""),
          (u.value = "Yay, welcome aboard."),
          (_.value = !0)),
          (y.value = !1);
      }
      return (
        F(() => {
          A(),
            document.fonts.ready.then(() => {
              q(), V();
            });
        }),
        (n, s) => {
          const o = B,
            a = E;
          return (
            g(),
            b("div", D, [
              I,
              e("div", J, [
                e("div", L, [
                  (g(),
                  b(
                    U,
                    null,
                    Z(2, (l) =>
                      e("div", { class: "nl-hl", key: l }, [
                        e("span", P, p(t.blok.headline_word1), 1),
                        f(o, { class: "nl-hl-icon" }),
                        e("span", W, p(t.blok.headline_word2), 1),
                        f(o, { class: "nl-hl-icon" }),
                      ])
                    ),
                    64
                  )),
                ]),
                e("div", G, [
                  e("h2", R, [
                    e("span", Y, p(i(C)) + " ", 1),
                    e("span", H, [
                      e("span", null, p(t.blok.subline), 1),
                      e("span", null, p(t.blok.subline2), 1),
                    ]),
                  ]),
                ]),
                i(_)
                  ? S("", !0)
                  : (g(),
                    b("form", K, [
                      e(
                        "div",
                        { class: $(["nl-form-fields", { hasError: i(h) }]) },
                        [
                          x(
                            e(
                              "input",
                              {
                                class: "catch",
                                type: "text",
                                "onUpdate:modelValue":
                                  s[0] ||
                                  (s[0] = (l) => (w(v) ? (v.value = l) : null)),
                                name: "misc",
                                placeholder: "Got ya!",
                              },
                              null,
                              512
                            ),
                            [[k, i(v)]]
                          ),
                          
                          i(u) ? (g(), b("span", se, p(i(u)), 1)) : S("", !0),
                        ],
                        2
                      ),
                    ])),
                i(_) ? (g(), b("div", te, ae)) : S("", !0),
                e("div", le, [
                  f(
                    a,
                    {
                      class: "nl-img",
                      provider: "storyblok",
                      width: "1920",
                      quality: "50",
                      sizes: "sm:640px md:1240px xxl:1920px",
                      placeholder: [10, 0, 50, 5],
                      src: t.blok.image4.filename,
                      alt: t.blok.image4.alt,
                    },
                    null,
                    8,
                    ["src", "alt"]
                  ),
                  f(
                    a,
                    {
                      class: "nl-img",
                      provider: "storyblok",
                      width: "1920",
                      quality: "60",
                      sizes: "sm:640px md:1240px xxl:1920px",
                      placeholder: [10, 0, 50, 5],
                      src: t.blok.image3.filename,
                      alt: t.blok.image3.alt,
                    },
                    null,
                    8,
                    ["src", "alt"]
                  ),
                  f(
                    a,
                    {
                      class: "nl-img",
                      provider: "storyblok",
                      width: "1920",
                      quality: "60",
                      sizes: "sm:640px md:1240px xxl:1920px",
                      placeholder: [10, 0, 50, 5],
                      src: t.blok.image2.filename,
                      alt: t.blok.image2.alt,
                    },
                    null,
                    8,
                    ["src", "alt"]
                  ),
                  e("div", ie, [
                    f(
                      a,
                      {
                        class: "nl-img",
                        provider: "storyblok",
                        width: "1920",
                        quality: "60",
                        sizes: "sm:640px md:1240px xxl:1920px",
                        placeholder: [10, 0, 50, 5],
                        src: t.blok.image1.filename,
                        alt: t.blok.image1.alt,
                      },
                      null,
                      8,
                      ["src", "alt"]
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
export { pe as default };
