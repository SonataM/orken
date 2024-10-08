import { u as k } from "./vue.f36acd1f.44074f53.js";
import {
  N as x,
  O as H,
  Q as b,
  R as P,
  T as q,
  U as L,
  V as U,
  W,
  X as B,
  q as A,
  s as y,
  Y as D,
  k as j,
  f as T,
  Z as C,
} from "./entry.53078840.js";
async function F(e, t) {
  return await G(t).catch(
    (i) => (
      console.error("Failed to get image meta for " + t, i + ""),
      { width: 0, height: 0, ratio: 0 }
    )
  );
}
async function G(e) {
  if (typeof Image > "u") throw new TypeError("Image not supported");
  return new Promise((t, r) => {
    const i = new Image();
    (i.onload = () => {
      const o = { width: i.width, height: i.height, ratio: i.width / i.height };
      t(o);
    }),
      (i.onerror = (o) => r(o)),
      (i.src = e);
  });
}
function I(e) {
  return (t) => (t ? e[t] || t : e.missingValue);
}
function V({ formatter: e, keyMap: t, joinWith: r = "/", valueMap: i } = {}) {
  e || (e = (n, s) => `${n}=${s}`), t && typeof t != "function" && (t = I(t));
  const o = i || {};
  return (
    Object.keys(o).forEach((n) => {
      typeof o[n] != "function" && (o[n] = I(o[n]));
    }),
    (n = {}) =>
      Object.entries(n)
        .filter(([d, c]) => typeof c < "u")
        .map(([d, c]) => {
          const l = o[d];
          return (
            typeof l == "function" && (c = l(n[d])),
            (d = typeof t == "function" ? t(d) : d),
            e(d, c)
          );
        })
        .join(r)
  );
}
function m(e = "") {
  if (typeof e == "number") return e;
  if (typeof e == "string" && e.replace("px", "").match(/^\d+$/g))
    return parseInt(e, 10);
}
function Y(e = "") {
  if (e === void 0 || !e.length) return [];
  const t = new Set();
  for (const r of e.split(" ")) {
    const i = parseInt(r.replace("x", ""));
    i && t.add(i);
  }
  return Array.from(t);
}
function J(e) {
  if (e.length === 0)
    throw new Error(
      "`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)"
    );
}
function Q(e) {
  const t = {};
  if (typeof e == "string")
    for (const r of e.split(/[\s,]+/).filter((i) => i)) {
      const i = r.split(":");
      i.length !== 2
        ? (t["1px"] = i[0].trim())
        : (t[i[0].trim()] = i[1].trim());
    }
  else Object.assign(t, e);
  return t;
}
function X(e) {
  const t = { options: e },
    r = (o, n = {}) => R(t, o, n),
    i = (o, n = {}, s = {}) =>
      r(o, { ...s, modifiers: q(n, s.modifiers || {}) }).url;
  for (const o in e.presets)
    i[o] = (n, s, d) => i(n, s, { ...e.presets[o], ...d });
  return (
    (i.options = e),
    (i.getImage = r),
    (i.getMeta = (o, n) => Z(t, o, n)),
    (i.getSizes = (o, n) => te(t, o, n)),
    (t.$img = i),
    i
  );
}
async function Z(e, t, r) {
  const i = R(e, t, { ...r });
  return typeof i.getMeta == "function" ? await i.getMeta() : await F(e, i.url);
}
function R(e, t, r) {
  var l, f;
  if (typeof t != "string" || t === "")
    throw new TypeError(
      `input must be a string (received ${typeof t}: ${JSON.stringify(t)})`
    );
  if (t.startsWith("data:")) return { url: t };
  const { provider: i, defaults: o } = K(e, r.provider || e.options.provider),
    n = ee(e, r.preset);
  if (((t = x(t) ? t : H(t)), !i.supportsAlias))
    for (const h in e.options.alias)
      t.startsWith(h) && (t = b(e.options.alias[h], t.substr(h.length)));
  if (i.validateDomains && x(t)) {
    const h = P(t).host;
    if (!e.options.domains.find((p) => p === h)) return { url: t };
  }
  const s = q(r, n, o);
  s.modifiers = { ...s.modifiers };
  const d = s.modifiers.format;
  (l = s.modifiers) != null &&
    l.width &&
    (s.modifiers.width = m(s.modifiers.width)),
    (f = s.modifiers) != null &&
      f.height &&
      (s.modifiers.height = m(s.modifiers.height));
  const c = i.getImage(t, s, e);
  return (c.format = c.format || d || ""), c;
}
function K(e, t) {
  const r = e.options.providers[t];
  if (!r) throw new Error("Unknown provider: " + t);
  return r;
}
function ee(e, t) {
  if (!t) return {};
  if (!e.options.presets[t]) throw new Error("Unknown preset: " + t);
  return e.options.presets[t];
}
function te(e, t, r) {
  var u, _, $, S, z;
  const i = m((u = r.modifiers) == null ? void 0 : u.width),
    o = m((_ = r.modifiers) == null ? void 0 : _.height),
    n = Q(r.sizes),
    s =
      ($ = r.densities) != null && $.trim()
        ? Y(r.densities.trim())
        : e.options.densities;
  J(s);
  const d = i && o ? o / i : 0,
    c = [],
    l = [];
  if (Object.keys(n).length >= 1) {
    for (const g in n) {
      const v = M(g, String(n[g]), o, d, e);
      if (v !== void 0) {
        c.push({
          size: v.size,
          screenMaxWidth: v.screenMaxWidth,
          media: `(max-width: ${v.screenMaxWidth}px)`,
        });
        for (const w of s)
          l.push({ width: v._cWidth * w, src: O(e, t, r, v, w) });
      }
    }
    ie(c);
  } else
    for (const g of s) {
      const v = Object.keys(n)[0];
      let w = M(v, String(n[v]), o, d, e);
      w === void 0 &&
        (w = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (S = r.modifiers) == null ? void 0 : S.width,
          _cHeight: (z = r.modifiers) == null ? void 0 : z.height,
        }),
        l.push({ width: g, src: O(e, t, r, w, g) });
    }
  re(l);
  const f = l[l.length - 1],
    h = c.length
      ? c.map((g) => `${g.media ? g.media + " " : ""}${g.size}`).join(", ")
      : void 0,
    p = h ? "w" : "x",
    a = l.map((g) => `${g.src} ${g.width}${p}`).join(", ");
  return { sizes: h, srcset: a, src: f == null ? void 0 : f.src };
}
function M(e, t, r, i, o) {
  const n = (o.options.screens && o.options.screens[e]) || parseInt(e),
    s = t.endsWith("vw");
  if ((!s && /^\d+$/.test(t) && (t = t + "px"), !s && !t.endsWith("px")))
    return;
  let d = parseInt(t);
  if (!n || !d) return;
  s && (d = Math.round((d / 100) * n));
  const c = i ? Math.round(d * i) : r;
  return { size: t, screenMaxWidth: n, _cWidth: d, _cHeight: c };
}
function O(e, t, r, i, o) {
  return e.$img(
    t,
    {
      ...r.modifiers,
      width: i._cWidth ? i._cWidth * o : void 0,
      height: i._cHeight ? i._cHeight * o : void 0,
    },
    r
  );
}
function ie(e) {
  var r;
  e.sort((i, o) => i.screenMaxWidth - o.screenMaxWidth);
  let t = null;
  for (let i = e.length - 1; i >= 0; i--) {
    const o = e[i];
    o.media === t && e.splice(i, 1), (t = o.media);
  }
  for (let i = 0; i < e.length; i++)
    e[i].media = ((r = e[i + 1]) == null ? void 0 : r.media) || "";
}
function re(e) {
  e.sort((r, i) => r.width - i.width);
  let t = null;
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    i.width === t && e.splice(r, 1), (t = i.width);
  }
}
const oe = "https://a.storyblok.com",
  ne = (e, { modifiers: t = {}, baseURL: r = oe } = {}) => {
    const {
        fit: i,
        smart: o,
        width: n = "0",
        height: s = "0",
        filters: d = {},
        format: c,
        quality: l,
      } = t,
      f = e.endsWith(".svg"),
      h = !f && (n !== "0" || s !== "0");
    f || (c && (d.format = c + ""), l && (d.quality = l + ""));
    const p = Object.entries(d || {})
        .map((S) => `${S[0]}(${S[1]})`)
        .join(":"),
      a = b(
        i ? `fit-${i}` : "",
        h ? `${n}x${s}` : "",
        o ? "smart" : "",
        p ? "filters:" + p : ""
      ),
      { pathname: u } = P(e);
    console.log(e);
    return { url: e.endsWith(".png")?e:L(b(u, a ? "/m/" : "", a), r) };
  },
  se = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: ne },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ae = V({
    keyMap: {
      format: "f",
      fit: "fit",
      width: "w",
      height: "h",
      resize: "s",
      quality: "q",
      background: "b",
    },
    joinWith: "&",
    formatter: (e, t) => W(e) + "_" + W(t),
  }),
  de = (e, { modifiers: t = {}, baseURL: r } = {}, i) => {
    t.width &&
      t.height &&
      ((t.resize = `${t.width}x${t.height}`), delete t.width, delete t.height);
    const o = ae(t) || "_";
    return (
      r || (r = b(i.options.nuxt.baseURL, "/_ipx")), { url: b(r, o, U(e)) }
    );
  },
  ce = !0,
  le = !0,
  fe = Object.freeze(
    Object.defineProperty(
      { __proto__: null, getImage: de, supportsAlias: le, validateDomains: ce },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  N = {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    presets: {},
    provider: "ipxStatic",
    domains: [],
    alias: {},
    densities: [1, 2],
    format: ["webp"],
  };
N.providers = {
  storyblok: { provider: se, defaults: { baseURL: "https://a.storyblok.com" } },
  ipxStatic: { provider: fe, defaults: {} },
};
const E = () => {
    const e = B(),
      t = A();
    return (
      t.$img ||
      t._img ||
      (t._img = X({ ...N, nuxt: { baseURL: e.app.baseURL } }))
    );
  },
  ue = {
    src: { type: String, required: !0 },
    format: { type: String, default: void 0 },
    quality: { type: [Number, String], default: void 0 },
    background: { type: String, default: void 0 },
    fit: { type: String, default: void 0 },
    modifiers: { type: Object, default: void 0 },
    preset: { type: String, default: void 0 },
    provider: { type: String, default: void 0 },
    sizes: { type: [Object, String], default: void 0 },
    densities: { type: String, default: void 0 },
    preload: { type: Boolean, default: void 0 },
    width: { type: [String, Number], default: void 0 },
    height: { type: [String, Number], default: void 0 },
    alt: { type: String, default: void 0 },
    referrerpolicy: { type: String, default: void 0 },
    usemap: { type: String, default: void 0 },
    longdesc: { type: String, default: void 0 },
    ismap: { type: Boolean, default: void 0 },
    loading: {
      type: String,
      default: void 0,
      validator: (e) => ["lazy", "eager"].includes(e),
    },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: (e) =>
        ["anonymous", "use-credentials", "", !0, !1].includes(e),
    },
    decoding: {
      type: String,
      default: void 0,
      validator: (e) => ["async", "auto", "sync"].includes(e),
    },
    nonce: { type: [String], default: void 0 },
  },
  ge = (e) => {
    const t = y(() => ({ provider: e.provider, preset: e.preset })),
      r = y(() => ({
        width: m(e.width),
        height: m(e.height),
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        usemap: e.usemap,
        longdesc: e.longdesc,
        ismap: e.ismap,
        crossorigin:
          e.crossorigin === !0 ? "anonymous" : e.crossorigin || void 0,
        loading: e.loading,
        decoding: e.decoding,
        nonce: e.nonce,
      })),
      i = E(),
      o = y(() => ({
        ...e.modifiers,
        width: m(e.width),
        height: m(e.height),
        format: e.format,
        quality: e.quality || i.options.quality,
        background: e.background,
        fit: e.fit,
      }));
    return { options: t, attrs: r, modifiers: o };
  },
  he = {
    ...ue,
    placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  },
  pe = D({
    name: "NuxtImg",
    props: he,
    emits: ["load", "error"],
    setup: (e, t) => {
      const r = E(),
        i = ge(e),
        o = j(!1),
        n = y(() =>
          r.getSizes(e.src, {
            ...i.options.value,
            sizes: e.sizes,
            densities: e.densities,
            modifiers: {
              ...i.modifiers.value,
              width: m(e.width),
              height: m(e.height),
            },
          })
        ),
        s = y(() => {
          const a = { ...i.attrs.value, "data-nuxt-img": "" };
          return (
            (!e.placeholder || o.value) &&
              ((a.sizes = n.value.sizes), (a.srcset = n.value.srcset)),
            a
          );
        }),
        d = y(() => {
          let a = e.placeholder;
          if ((a === "" && (a = !0), !a || o.value)) return !1;
          if (typeof a == "string") return a;
          const u = Array.isArray(a)
            ? a
            : typeof a == "number"
            ? [a, a]
            : [10, 10];
          return r(
            e.src,
            {
              ...i.modifiers.value,
              width: u[0],
              height: u[1],
              quality: u[2] || 50,
              blur: u[3] || 3,
            },
            i.options.value
          );
        }),
        c = y(() =>
          e.sizes ? n.value.src : r(e.src, i.modifiers.value, i.options.value)
        ),
        l = y(() => (d.value ? d.value : c.value));
      if (e.preload) {
        const a = Object.values(n.value).every((u) => u);
        k({
          link: [
            {
              rel: "preload",
              as: "image",
              nonce: e.nonce,
              ...(a
                ? {
                    href: n.value.src,
                    imagesizes: n.value.sizes,
                    imagesrcset: n.value.srcset,
                  }
                : { href: l.value }),
            },
          ],
        });
      }
      const f = j(),
        p = A().isHydrating;
      return (
        T(() => {
          if (d.value) {
            const a = new Image();
            (a.src = c.value),
              e.sizes &&
                ((a.sizes = n.value.sizes || ""), (a.srcset = n.value.srcset)),
              (a.onload = (u) => {
                (o.value = !0), t.emit("load", u);
              });
            return;
          }
          f.value &&
            (f.value.complete &&
              p &&
              (f.value.getAttribute("data-error")
                ? t.emit("error", new Event("error"))
                : t.emit("load", new Event("load"))),
            (f.value.onload = (a) => {
              t.emit("load", a);
            }),
            (f.value.onerror = (a) => {
              t.emit("error", a);
            }));
        }),
        () => C("img", { ref: f, src: l.value, ...s.value, ...t.attrs })
      );
    },
  });
export { pe as _ };
