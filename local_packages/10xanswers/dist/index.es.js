(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`#root{--chat-background: #202020;--heading-color: #ffeaea;--color: #2e2e2e;--chat-text-color: #ffffff;--chat-gradient: linear-gradient(294deg, rgb(44 44 44 / 85%) 0%, rgb(47 47 47) 100%);--chat-gradient: linear-gradient(294deg, rgb(44 44 44 / 75%) 0%, rgb(47 47 47 / 21%) 100%);--chat-gradient: linear-gradient(180deg, rgba(96, 165, 250, .244) 0%, rgba(29, 79, 216, .283) 100%);--chat-gradient: linear-gradient(180deg, rgb(55 105 166 / 24%) 0%, rgb(53 50 74 / 18%) 100%);--chat-input-option-color: #d6d6d6;--chat-input-option-color-hover: #a7a7a7;--chat-input-option-background: #414141;--textarea-border: #4c4c4c;--textarea-background: #2c2c2c;--search-icon-color: #fff;--search-icon-bg: #2ea61d;--search-icon-bg-hover: #2c911f;--search-icon-bg-disabled: #2c911f4d;--input-option-bg: #2c2c2c;--input-option-color: #ffffff;--input-option-icon-bg: #f2f2f2;--input-option-icon-color: #3a3a3a;--skeleton-icon-gradient: linear-gradient(transparent 50%, rgb(39, 49, 63) 50%) 0% 0% / 18px 144px, linear-gradient(rgb(143, 168, 138), rgba(15, 170, 24, .39)) 0% 0% / 100% 44px;--skeleton-text-gradient: linear-gradient(transparent 50%, rgb(39, 49, 63) 50%) 0% 0% / 18px 20px, linear-gradient(rgb(143, 168, 138), rgba(15, 170, 24, .39)) 0% 0% / 100% 30px}.chat-section{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;box-sizing:border-box;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-radius:1.8rem;padding:.6rem;background-color:#fff;background-color:var(--chat-background);display:flex;align-items:center;justify-content:center;flex-direction:column;justify-content:flex-end;position:relative;width:100%;height:100%;min-width:270px;min-height:300px;z-index:9998}.chat-and-icon-container{display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;height:630px;width:350px;max-width:600px;gap:.8rem;position:fixed;right:4px;bottom:4px}.chatbot-open-icon{border-radius:100%;width:3.8rem;aspect-ratio:1/1;background-size:cover;background-position:center;cursor:pointer;background-color:var(--textarea-background);display:flex;align-items:center;justify-content:center;font-size:2rem}.chatbot-open-icon span{background:linear-gradient(to bottom right,#f4f4f4,#d6d6d6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.chatbot-open-icon:hover{cursor:pointer;filter:grayscale(.2);transition-duration:.2s;transform:rotate(2deg)}.collapse{width:0;height:0;transition-duration:4s}.prompt-input{display:flex;flex-grow:1;height:5rem;border-radius:1.6rem;font-size:1rem;background-color:var(--textarea-background);padding:1rem;resize:none;color:var(--chat-input-option-color);border:none;font-family:inherit}.search-icon{position:absolute;width:2rem;height:2rem;border-radius:100%;background-color:#2e2e2e;background-color:var(--search-icon-bg);color:var(--search-icon-color);font-size:1rem;display:flex;justify-content:center;align-items:center;right:0;top:0;cursor:pointer;margin:.8rem}.disabled{opacity:.2;cursor:not-allowed}.search-icon:hover{background-color:var(--search-icon-bg-hover)}.prompt-input:focus-visible{outline:none}.input-area{width:100%;display:flex;flex-direction:column;border-radius:1.6rem;border:2px solid var(--textarea-border);background-color:var(--chat-input-option-background);position:relative;margin:.8rem 0 0}.input-options{background-color:#f2f2f2;background-color:var(--chat-input-option-background);border-radius:1.6rem;flex-grow:1;display:flex;align-items:center}.input-option{display:flex;align-items:center;gap:6px;border-radius:10rem;background-color:#fff;background-color:var(--textarea-background);color:#828181;color:#2e2e2e;color:var(--chat-text-color);font-size:.7rem;font-weight:500;padding:.3rem .6rem .3rem .3rem;margin:.4rem 0rem .4rem .4rem;cursor:pointer}.option-description{margin:0}.input-option-icon{padding:.4rem;width:8px;height:8px;background-color:#f2f2f2;background-color:var(--input-option-icon-bg);color:#3a3a3a;color:var(--input-option-icon-color);border-radius:100%;display:flex;align-items:center;justify-content:center;font-size:.8rem}.chat-area{flex-grow:1;height:100%;display:flex;flex-direction:column;overflow-y:scroll;padding:4rem 0;border-radius:1.6rem;width:100%;scroll-behavior:smooth;align-items:center;overflow-x:hidden;text-align:center;z-index:998;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.2) transparent}.chat-area::-webkit-scrollbar{width:8px;height:8px}.chat-area::-webkit-scrollbar-track{background:transparent}.chat-area::-webkit-scrollbar-thumb{background:#fff3;border-radius:10px;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.chat-area::-webkit-scrollbar-thumb:hover{background:#fff6}.chat-component-heading{box-sizing:border-box;position:absolute;top:0;color:var(--heading-color);margin:0;width:100%;border-top-left-radius:inherit;border-top-right-radius:inherit;padding:.8rem 2rem;display:flex;justify-content:space-between;z-index:9999;background:var(--chat-background);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.chat-component-heading h3{margin:0;font-size:1rem;display:flex;gap:10px;align-items:center}.chat{background-color:#f0faf9;padding:.8rem;display:flex;gap:.5rem;border-radius:1.6rem;background:#f0faf9;background:linear-gradient(294deg,#f0faf9d8,#e7fffd);background:var(--chat-gradient);flex-grow:1;width:100%}.user-icon img{border-radius:100%;width:2.6rem;aspect-ratio:1/1;-o-object-fit:cover;object-fit:cover}.chat-and-options{margin:0;display:flex;flex-direction:column;width:100%}.chat-content{margin:0;font-size:.875rem;text-align:left;line-height:140%;padding:0 .5rem;color:#3f3f3f;color:var(--chat-text-color);font-family:sans-serif}.chat-options{display:flex;align-items:center;justify-content:flex-end;gap:8px;margin-top:.8rem}.chat-option{font-size:.7rem;display:flex;gap:4px;color:#2e2e2e;color:var(--chat-input-option-color);background-color:#fff;background-color:var(--chat-input-option-background);border-radius:.4rem;padding:.2rem .6rem;cursor:pointer}.chat-option:hover{color:#a7a7a7;color:var(--chat-input-option-color-hover)}.question-container{padding:1rem .8rem;background:transparent;display:flex;flex-direction:column;flex-grow:1;width:100%}.question{display:flex;gap:.5rem;align-items:center;width:100%}.bot-icon img{border-radius:100%;width:2.6rem;aspect-ratio:1/1;-o-object-fit:cover;object-fit:cover}.question-txt{margin:0;font-size:.875rem;text-align:left;line-height:140%;padding:0 .5rem;color:#3f3f3f;color:var(--chat-text-color);font-family:sans-serif}.edit-icon{font-weight:400;cursor:pointer;font-size:.7rem;padding:.2rem .6rem;border-radius:.4rem;background-color:var(--chat-input-option-background)}.edit-options{justify-content:flex-start;margin-left:3.2rem}.editing{background:var(--textarea-background);padding:.8rem;border-radius:1.6rem;flex-grow:1}.hero-section{margin-bottom:2rem;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;cursor:crosshair;width:100%}.floating-icons{position:relative}.icon{padding:.1rem .6rem;background:var(--chat-gradient);border-radius:.6rem;filter:drop-shadow(0 10px 60px #45df09);box-shadow:0 60px 50px #45df09;box-shadow:0 10px 60px #68de44;box-shadow:0 10px 30px -10px #00000080,inset 0 0 0 1px #fff3;background:linear-gradient(to bottom right,#84e14e,transparent);position:absolute;z-index:0}.forward{font-size:2.25rem}.backward{font-size:1.5rem;padding:.3rem .6rem;box-shadow:0 10px 60px #68de44}.forward-first{left:-225px;top:130px;transform:rotate(-13deg);background:linear-gradient(to bottom right,#0078fc,#193fb4)}.forward-second{left:-210px;top:0;transform:rotate(347deg);filter:blur(1.1px);font-size:1rem;padding:.4rem .6rem;background:linear-gradient(to bottom right,#9370db,#1b00bccf);box-shadow:0 10px 60px #3e219f}.backward-first{transform:rotate(13deg);transform:rotate(349deg);filter:blur(.8px);font-size:1.5rem;left:180px;top:110px;background:#e78400;background:linear-gradient(to bottom right,#e78400,#e99c49b0);padding:.2rem .6rem;box-shadow:0 10px 60px #937d02ed}.backward-second{left:80px;top:-30px;transform:rotate(12deg);filter:blur(1px);font-size:1rem;padding:.4rem .6rem}.hero-title,.hero-sub-title,.hero-description,.hero-sup-title{line-height:normal;margin:0}.hero-title{font-size:2.4rem}.stylize{background:linear-gradient(180deg,#e4eaf20a,#007f0f0f);border-radius:.6rem;padding:.1rem .4rem;font-weight:800;margin:.1rem;box-shadow:0 3px #78c94a}.hero-sub-title{font-size:1.2rem;max-width:400px;font-weight:400;width:80%}.hero-description{font-size:.9rem;margin:0rem;font-weight:500}.hero-sub-title,.hero-description,.hero-sup-title{color:#f9fafbe6;background-image:linear-gradient(0deg,#f9fafbe6 28%,#f9fafb99 67%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.hero-sup-title{font-size:.8rem;margin:0}@keyframes loading{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}.skeleton{transition:opacity .5s,height 2s;animation:loading 2s infinite}.icon-placeholder{background:var(--skeleton-icon-gradient);border-radius:100%;width:2.6rem;aspect-ratio:1 / 1}.text-placeholder{background:var(--skeleton-text-gradient);height:7rem;border-radius:.6rem;flex-grow:1}pre{border-radius:.8rem;overflow-x:auto}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-variable,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#79c0ff}.hljs-regexp,.hljs-string,.hljs-meta .hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-comment,.hljs-code,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}`)),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import Zn, { useRef as Me, useState as Vn, useEffect as et } from "react";
import { atomFamily as jn, atom as Zt, useSetRecoilState as Xn, useRecoilState as at, useRecoilValue as kt, selectorFamily as _i, useRecoilStateLoadable as Ei, RecoilRoot as yi } from "recoil";
import { v4 as Je } from "uuid";
import wi from "react-markdown";
import { Rnd as Ni } from "react-rnd";
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ht = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function ki() {
  if (bn) return Xe;
  bn = 1;
  var e = Zn, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, o, l) {
    var d, u = {}, f = null, b = null;
    l !== void 0 && (f = "" + l), o.key !== void 0 && (f = "" + o.key), o.ref !== void 0 && (b = o.ref);
    for (d in o) r.call(o, d) && !c.hasOwnProperty(d) && (u[d] = o[d]);
    if (s && s.defaultProps) for (d in o = s.defaultProps, o) u[d] === void 0 && (u[d] = o[d]);
    return { $$typeof: t, type: s, key: f, ref: b, props: u, _owner: a.current };
  }
  return Xe.Fragment = n, Xe.jsx = i, Xe.jsxs = i, Xe;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn;
function Si() {
  return mn || (mn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Zn, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), p = Symbol.iterator, h = "@@iterator";
    function _(g) {
      if (g === null || typeof g != "object")
        return null;
      var N = p && g[p] || g[h];
      return typeof N == "function" ? N : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(g) {
      {
        for (var N = arguments.length, x = new Array(N > 1 ? N - 1 : 0), D = 1; D < N; D++)
          x[D - 1] = arguments[D];
        T("error", g, x);
      }
    }
    function T(g, N, x) {
      {
        var D = y.ReactDebugCurrentFrame, W = D.getStackAddendum();
        W !== "" && (N += "%s", x = x.concat([W]));
        var X = x.map(function($) {
          return String($);
        });
        X.unshift("Warning: " + N), Function.prototype.apply.call(console[g], console, X);
      }
    }
    var A = !1, M = !1, O = !1, B = !1, j = !1, Z;
    Z = Symbol.for("react.module.reference");
    function m(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === c || j || g === a || g === l || g === d || B || g === b || A || M || O || typeof g == "object" && g !== null && (g.$$typeof === f || g.$$typeof === u || g.$$typeof === i || g.$$typeof === s || g.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === Z || g.getModuleId !== void 0));
    }
    function ne(g, N, x) {
      var D = g.displayName;
      if (D)
        return D;
      var W = N.displayName || N.name || "";
      return W !== "" ? x + "(" + W + ")" : x;
    }
    function se(g) {
      return g.displayName || "Context";
    }
    function K(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case s:
            var N = g;
            return se(N) + ".Consumer";
          case i:
            var x = g;
            return se(x._context) + ".Provider";
          case o:
            return ne(g, g.render, "ForwardRef");
          case u:
            var D = g.displayName || null;
            return D !== null ? D : K(g.type) || "Memo";
          case f: {
            var W = g, X = W._payload, $ = W._init;
            try {
              return K($(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, Q = 0, pe, w, k, C, L, F, H;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function Se() {
      {
        if (Q === 0) {
          pe = console.log, w = console.info, k = console.warn, C = console.error, L = console.group, F = console.groupCollapsed, H = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        Q++;
      }
    }
    function ae() {
      {
        if (Q--, Q === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, g, {
              value: pe
            }),
            info: G({}, g, {
              value: w
            }),
            warn: G({}, g, {
              value: k
            }),
            error: G({}, g, {
              value: C
            }),
            group: G({}, g, {
              value: L
            }),
            groupCollapsed: G({}, g, {
              value: F
            }),
            groupEnd: G({}, g, {
              value: H
            })
          });
        }
        Q < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = y.ReactCurrentDispatcher, Te;
    function _e(g, N, x) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (W) {
            var D = W.stack.trim().match(/\n( *(at )?)/);
            Te = D && D[1] || "";
          }
        return `
` + Te + g;
      }
    }
    var xe = !1, Ae;
    {
      var je = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new je();
    }
    function Be(g, N) {
      if (!g || xe)
        return "";
      {
        var x = Ae.get(g);
        if (x !== void 0)
          return x;
      }
      var D;
      xe = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = ce.current, ce.current = null, Se();
      try {
        if (N) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (ue) {
              D = ue;
            }
            Reflect.construct(g, [], $);
          } else {
            try {
              $.call();
            } catch (ue) {
              D = ue;
            }
            g.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ue) {
            D = ue;
          }
          g();
        }
      } catch (ue) {
        if (ue && D && typeof ue.stack == "string") {
          for (var U = ue.stack.split(`
`), le = D.stack.split(`
`), J = U.length - 1, te = le.length - 1; J >= 1 && te >= 0 && U[J] !== le[te]; )
            te--;
          for (; J >= 1 && te >= 0; J--, te--)
            if (U[J] !== le[te]) {
              if (J !== 1 || te !== 1)
                do
                  if (J--, te--, te < 0 || U[J] !== le[te]) {
                    var be = `
` + U[J].replace(" at new ", " at ");
                    return g.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", g.displayName)), typeof g == "function" && Ae.set(g, be), be;
                  }
                while (J >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        xe = !1, ce.current = X, ae(), Error.prepareStackTrace = W;
      }
      var Ge = g ? g.displayName || g.name : "", Oe = Ge ? _e(Ge) : "";
      return typeof g == "function" && Ae.set(g, Oe), Oe;
    }
    function q(g, N, x) {
      return Be(g, !1);
    }
    function me(g) {
      var N = g.prototype;
      return !!(N && N.isReactComponent);
    }
    function fe(g, N, x) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return Be(g, me(g));
      if (typeof g == "string")
        return _e(g);
      switch (g) {
        case l:
          return _e("Suspense");
        case d:
          return _e("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case o:
            return q(g.render);
          case u:
            return fe(g.type, N, x);
          case f: {
            var D = g, W = D._payload, X = D._init;
            try {
              return fe(X(W), N, x);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, lt = {}, Fe = y.ReactDebugCurrentFrame;
    function I(g) {
      if (g) {
        var N = g._owner, x = fe(g.type, g._source, N ? N.type : null);
        Fe.setExtraStackFrame(x);
      } else
        Fe.setExtraStackFrame(null);
    }
    function ut(g, N, x, D, W) {
      {
        var X = Function.call.bind(oe);
        for (var $ in g)
          if (X(g, $)) {
            var U = void 0;
            try {
              if (typeof g[$] != "function") {
                var le = Error((D || "React class") + ": " + x + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              U = g[$](N, $, D, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              U = J;
            }
            U && !(U instanceof Error) && (I(W), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", x, $, typeof U), I(null)), U instanceof Error && !(U.message in lt) && (lt[U.message] = !0, I(W), v("Failed %s type: %s", x, U.message), I(null));
          }
      }
    }
    var ie = Array.isArray;
    function Y(g) {
      return ie(g);
    }
    function Ue(g) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, x = N && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return x;
      }
    }
    function ye(g) {
      try {
        return $e(g), !1;
      } catch {
        return !0;
      }
    }
    function $e(g) {
      return "" + g;
    }
    function ze(g) {
      if (ye(g))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(g)), $e(g);
    }
    var S = y.ReactCurrentOwner, R = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, P, z, ee;
    ee = {};
    function he(g) {
      if (oe.call(g, "ref")) {
        var N = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Rt(g) {
      if (oe.call(g, "key")) {
        var N = Object.getOwnPropertyDescriptor(g, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Ot(g, N) {
      if (typeof g.ref == "string" && S.current && N && S.current.stateNode !== N) {
        var x = K(S.current.type);
        ee[x] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(S.current.type), g.ref), ee[x] = !0);
      }
    }
    function ii(g, N) {
      {
        var x = function() {
          P || (P = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        x.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function ai(g, N) {
      {
        var x = function() {
          z || (z = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        x.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var oi = function(g, N, x, D, W, X, $) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: N,
        ref: x,
        props: $,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function si(g, N, x, D, W) {
      {
        var X, $ = {}, U = null, le = null;
        x !== void 0 && (ze(x), U = "" + x), Rt(N) && (ze(N.key), U = "" + N.key), he(N) && (le = N.ref, Ot(N, W));
        for (X in N)
          oe.call(N, X) && !R.hasOwnProperty(X) && ($[X] = N[X]);
        if (g && g.defaultProps) {
          var J = g.defaultProps;
          for (X in J)
            $[X] === void 0 && ($[X] = J[X]);
        }
        if (U || le) {
          var te = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          U && ii($, te), le && ai($, te);
        }
        return oi(g, U, le, W, D, S.current, $);
      }
    }
    var Ct = y.ReactCurrentOwner, cn = y.ReactDebugCurrentFrame;
    function Ke(g) {
      if (g) {
        var N = g._owner, x = fe(g.type, g._source, N ? N.type : null);
        cn.setExtraStackFrame(x);
      } else
        cn.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function It(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function ln() {
      {
        if (Ct.current) {
          var g = K(Ct.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function ci(g) {
      return "";
    }
    var un = {};
    function li(g) {
      {
        var N = ln();
        if (!N) {
          var x = typeof g == "string" ? g : g.displayName || g.name;
          x && (N = `

Check the top-level render call using <` + x + ">.");
        }
        return N;
      }
    }
    function dn(g, N) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var x = li(N);
        if (un[x])
          return;
        un[x] = !0;
        var D = "";
        g && g._owner && g._owner !== Ct.current && (D = " It was passed a child from " + K(g._owner.type) + "."), Ke(g), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, D), Ke(null);
      }
    }
    function gn(g, N) {
      {
        if (typeof g != "object")
          return;
        if (Y(g))
          for (var x = 0; x < g.length; x++) {
            var D = g[x];
            It(D) && dn(D, N);
          }
        else if (It(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var W = _(g);
          if (typeof W == "function" && W !== g.entries)
            for (var X = W.call(g), $; !($ = X.next()).done; )
              It($.value) && dn($.value, N);
        }
      }
    }
    function ui(g) {
      {
        var N = g.type;
        if (N == null || typeof N == "string")
          return;
        var x;
        if (typeof N == "function")
          x = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === u))
          x = N.propTypes;
        else
          return;
        if (x) {
          var D = K(N);
          ut(x, g.props, "prop", D, g);
        } else if (N.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var W = K(N);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function di(g) {
      {
        for (var N = Object.keys(g.props), x = 0; x < N.length; x++) {
          var D = N[x];
          if (D !== "children" && D !== "key") {
            Ke(g), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Ke(null);
            break;
          }
        }
        g.ref !== null && (Ke(g), v("Invalid attribute `ref` supplied to `React.Fragment`."), Ke(null));
      }
    }
    var fn = {};
    function pn(g, N, x, D, W, X) {
      {
        var $ = m(g);
        if (!$) {
          var U = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = ci();
          le ? U += le : U += ln();
          var J;
          g === null ? J = "null" : Y(g) ? J = "array" : g !== void 0 && g.$$typeof === t ? (J = "<" + (K(g.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : J = typeof g, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, U);
        }
        var te = si(g, N, x, W, X);
        if (te == null)
          return te;
        if ($) {
          var be = N.children;
          if (be !== void 0)
            if (D)
              if (Y(be)) {
                for (var Ge = 0; Ge < be.length; Ge++)
                  gn(be[Ge], g);
                Object.freeze && Object.freeze(be);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gn(be, g);
        }
        if (oe.call(N, "key")) {
          var Oe = K(g), ue = Object.keys(N).filter(function(hi) {
            return hi !== "key";
          }), Dt = ue.length > 0 ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fn[Oe + Dt]) {
            var mi = ue.length > 0 ? "{" + ue.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Dt, Oe, mi, Oe), fn[Oe + Dt] = !0;
          }
        }
        return g === r ? di(te) : ui(te), te;
      }
    }
    function gi(g, N, x) {
      return pn(g, N, x, !0);
    }
    function fi(g, N, x) {
      return pn(g, N, x, !1);
    }
    var pi = fi, bi = gi;
    Qe.Fragment = r, Qe.jsx = pi, Qe.jsxs = bi;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? Ht.exports = ki() : Ht.exports = Si();
var E = Ht.exports;
let Vt = jn({
  key: "questionFamily",
  default: (e) => ({
    id: e,
    question: "Ask whatever you want"
  })
}), jt = Zt({
  key: "allChat",
  default: []
});
function hn() {
  let e = Me(), t = Me(), n = Me(Je()), r = Xn(Vt(n.current)), [a, c] = at(jt);
  let [attachedImage, setAttachedImage] = at(attachedImageState);
  let [recording, setRecording] = at(recordingState);

  function i(o) {
    e.current.value.trim().length != 0 ? t.current.classList.remove("disabled") : t.current.classList.add("disabled"), o.key === "shiftKey" && (o.preventDefault(), e.current.value.trim().length != 0 && (r((l) => ({ ...l, question: e.current.value })), c((l) => [...l, { question: n.current, answer: null }]), n.current = Je(), e.current.value = "", t.current.classList.add("disabled"), setAttachedImage(null))), o.key === "Enter" && (o.preventDefault(), e.current.value.trim().length != 0 && (r((l) => ({ ...l, question: e.current.value })), c((l) => [...l, { question: n.current, answer: null }]), n.current = Je(), e.current.value = "", t.current.classList.add("disabled"), setAttachedImage(null)));
  }
  function s() {
    e.current.value != "" && (r((o) => ({ ...o, question: e.current.value })), c((o) => [...o, { question: n.current, answer: null }]), n.current = Je(), e.current.value = "", t.current.classList.add("disabled"), setAttachedImage(null));
  }

  const handleAddMediaClick = () => {
    document.getElementById("chatbot-image-input").click();
  };

  const handleVoiceChat = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.");
      return;
    }
    if (recording) {
      if (window.chatbotRecognition) {
        window.chatbotRecognition.stop();
      }
      setRecording(false);
      return;
    }

    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = 'en-US';
    window.chatbotRecognition = rec;

    rec.onstart = () => {
      setRecording(true);
    };

    rec.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (e.current) {
        e.current.value = transcript;
        t.current.classList.remove("disabled");
        setTimeout(() => {
          s();
        }, 100);
      }
    };

    rec.onend = () => {
      setRecording(false);
    };

    rec.onerror = () => {
      setRecording(false);
    };

    rec.start();
  };

  return /* @__PURE__ */ E.jsxs("div", { className: "input-area", children: [
    /* @__PURE__ */ E.jsx("input", {
      type: "file",
      accept: "image/*",
      style: { display: "none" },
      id: "chatbot-image-input",
      onChange: (o) => {
        const file = o.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setAttachedImage({
              mimeType: file.type,
              data: reader.result.split(',')[1],
              name: file.name
            });
          };
          reader.readAsDataURL(file);
        }
      }
    }),
    attachedImage && /* @__PURE__ */ E.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "5px 10px",
        backgroundColor: "#1f1f23",
        borderRadius: "8px",
        margin: "5px 10px",
        width: "fit-content",
        zIndex: 10
      },
      children: [
        /* @__PURE__ */ E.jsx("img", {
          src: `data:${attachedImage.mimeType};base64,${attachedImage.data}`,
          style: { width: "30px", height: "30px", borderRadius: "4px", objectFit: "cover" }
        }),
        /* @__PURE__ */ E.jsx("span", {
          style: { fontSize: "0.8rem", color: "#ccc" },
          children: attachedImage.name
        }),
        /* @__PURE__ */ E.jsx("span", {
          style: { cursor: "pointer", color: "#f43f5e", fontWeight: "bold", marginLeft: "5px" },
          onClick: () => setAttachedImage(null),
          children: "✕"
        })
      ]
    }),
    /* @__PURE__ */ E.jsx("textarea", { ref: e, onKeyUp: i, placeholder: recording ? "Listening..." : "Ask or search anything and press Enter", className: "prompt-input", style: recording ? { color: "#f43f5e" } : {} }),
    /* @__PURE__ */ E.jsx("span", { ref: t, onClick: s, className: "search-icon disabled", title: "Send", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-square-arrow-up-right" }) }),
    /* @__PURE__ */ E.jsxs("div", { className: "input-options", children: [
      /* @__PURE__ */ E.jsxs("div", { className: "input-option", onClick: handleAddMediaClick, children: [
        /* @__PURE__ */ E.jsx("span", { className: "input-option-icon", children: /* @__PURE__ */ E.jsx("i", { className: "fa-regular fa-file" }) }),
        /* @__PURE__ */ E.jsx("p", { className: "option-description", children: "Add Media" })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { className: "input-option", style: recording ? { backgroundColor: "#f43f5e", color: "white" } : {}, onClick: handleVoiceChat, children: [
        /* @__PURE__ */ E.jsx("span", { className: "input-option-icon", children: /* @__PURE__ */ E.jsx("i", { className: recording ? "fa-solid fa-microphone" : "fa-solid fa-microphone-slash" }) }),
        /* @__PURE__ */ E.jsx("p", { className: "option-description", children: recording ? "Listening..." : "Voice Chat" })
      ] })
    ] })
  ] });
}
function Ti() {
  return null;
}
function xi() {
  let [e, t] = Vn(navigator.onLine);
  return et(() => {
    function n() {
      t(navigator.onLine);
    }
    return window.addEventListener("online", n), window.addEventListener("offline", n), () => {
      window.removeEventListener("online", n), window.removeEventListener("offline", n);
    };
  }, []), e;
}
function Ai() {
  let e = xi(), t = {
    padding: "0.3rem 1.1rem",
    borderRadius: "1rem",
    backgroundColor: "#15161d",
    fontSize: ".8rem",
    display: "flex",
    width: "max-content",
    justifyContents: "center",
    alignItems: "center",
    gap: "6px",
    color: "white",
    fontWeight: 500
  };
  return /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "center" }, children: [
    e && /* @__PURE__ */ E.jsxs("span", { style: t, children: [
      /* @__PURE__ */ E.jsx("span", { style: {
        backgroundColor: "lightgreen",
        borderRadius: "100%",
        height: "8px",
        width: "8px",
        boxShadow: "0px 0px 216px 49px rgba(45,255,196,0.31)"
      } }),
      "Online"
    ] }),
    !e && /* @__PURE__ */ E.jsxs("span", { style: t, children: [
      /* @__PURE__ */ E.jsx("span", { style: {
        backgroundColor: "red",
        borderRadius: "100%",
        height: "8px",
        width: "8px",
        boxShadow: "0px 0px 216px 49px rgb(255 99 45 / 31%)"
      } }),
      "OffLine"
    ] })
  ] });
}
let ot = Zt({
  key: "chatBotAttributes",
  default: {}
  //default: {backendUrl:null,geminiApi:null,title:null,prompt:null,theme:null,botIcon:null,userIcon:null,stylizeTitle:null,description:null,cta:null}
});
function Ri(e) {
  let { userIcon: t } = kt(ot), [n, r] = at(Vt(e.id)), [a, c] = Vn(!1), i = Me(), s = Me();
  function o() {
    i.current.contentEditable = "true", i.current.classList.add("editing"), c((u) => !u), s.current = i.current.innerText;
  }
  function l() {
    i.current.contentEditable = "false", i.current.classList.remove("editing"), c((u) => !u), r((u) => ({ ...u, question: i.current.innerText }));
  }
  function d() {
    i.current.contentEditable = "false", i.current.classList.remove("editing"), c((u) => !u), i.current.innerText = s.current;
  }
  return /* @__PURE__ */ E.jsxs("div", { className: "question-container", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "question", children: [
      /* @__PURE__ */ E.jsx("span", { className: "bot-icon", children: /* @__PURE__ */ E.jsx("img", { src: t || "/node_modules/10xanswers/dist/logoImg.jpg" }) }),
      /* @__PURE__ */ E.jsx("p", { className: "question-txt", ref: i, children: n.question }),
      !a && /* @__PURE__ */ E.jsx("span", { className: "edit-icon", onClick: o, children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-pen" }) })
    ] }),
    a && /* @__PURE__ */ E.jsxs("div", { className: "chat-options edit-options", children: [
      /* @__PURE__ */ E.jsxs("span", { onClick: l, className: "copy chat-option", children: [
        /* @__PURE__ */ E.jsx("span", { className: "copy-icon", children: /* @__PURE__ */ E.jsx("i", { className: "fa-regular fa-clipboard" }) }),
        "Save"
      ] }),
      /* @__PURE__ */ E.jsxs("span", { onClick: d, className: "collection chat-option", children: [
        /* @__PURE__ */ E.jsx("span", { className: "collection-icon", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-xmark" }) }),
        "Cancel"
      ] })
    ] })
  ] });
}
const st = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Ii;
    if (typeof e == "function")
      return St(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Oi(e) : Ci(e);
    if (typeof e == "string")
      return Mi(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Oi(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = st(e[n]);
  return St(r);
  function r(...a) {
    let c = -1;
    for (; ++c < t.length; )
      if (t[c].apply(this, a)) return !0;
    return !1;
  }
}
function Ci(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return St(n);
  function n(r) {
    const a = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let c;
    for (c in e)
      if (a[c] !== t[c]) return !1;
    return !0;
  }
}
function Mi(e) {
  return St(t);
  function t(n) {
    return n && n.type === e;
  }
}
function St(e) {
  return t;
  function t(n, r, a) {
    return !!(Di(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      a || void 0
    ));
  }
}
function Ii() {
  return !0;
}
function Di(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const _n = (
  // Note: overloads like this are needed to support optional generics.
  /**
   * @type {(
   *   (<Kind extends UnistParent, Check extends Test>(parent: Kind, index: Child<Kind> | number, test: Check) => Matches<Child<Kind>, Check> | undefined) &
   *   (<Kind extends UnistParent>(parent: Kind, index: Child<Kind> | number, test?: null | undefined) => Child<Kind> | undefined)
   * )}
   */
  /**
   * @param {UnistParent} parent
   * @param {UnistNode | number} index
   * @param {Test} [test]
   * @returns {UnistNode | undefined}
   */
  function(e, t, n) {
    const r = st(n);
    if (!e || !e.type || !e.children)
      throw new Error("Expected parent node");
    if (typeof t == "number") {
      if (t < 0 || t === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (t = e.children.indexOf(t), t < 0)
      throw new Error("Expected child node or index");
    for (; ++t < e.children.length; )
      if (r(e.children[t], t, e))
        return e.children[t];
  }
), Le = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends TestFunction>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & Predicate<Condition, Element>) &
   *   (<Condition extends string>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & {tagName: Condition}) &
   *   ((test?: null | undefined) => (element?: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test | null | undefined} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Bi;
    if (typeof e == "string")
      return Pi(e);
    if (typeof e == "object")
      return Li(e);
    if (typeof e == "function")
      return Xt(e);
    throw new Error("Expected function, string, or array as `test`");
  }
);
function Li(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Le(e[n]);
  return Xt(r);
  function r(...a) {
    let c = -1;
    for (; ++c < t.length; )
      if (t[c].apply(this, a)) return !0;
    return !1;
  }
}
function Pi(e) {
  return Xt(t);
  function t(n) {
    return n.tagName === e;
  }
}
function Xt(e) {
  return t;
  function t(n, r, a) {
    return !!(Fi(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      a || void 0
    ));
  }
}
function Bi(e) {
  return !!(e && typeof e == "object" && "type" in e && e.type === "element" && "tagName" in e && typeof e.tagName == "string");
}
function Fi(e) {
  return e !== null && typeof e == "object" && "type" in e && "tagName" in e;
}
const En = /\n/g, yn = /[\t ]+/g, qt = Le("br"), wn = Le(qi), Ui = Le("p"), Nn = Le("tr"), $i = Le([
  // List from: <https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements>
  "datalist",
  "head",
  "noembed",
  "noframes",
  "noscript",
  // Act as if we support scripting.
  "rp",
  "script",
  "style",
  "template",
  "title",
  // Hidden attribute.
  Hi,
  // From: <https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3>
  Wi
]), Qn = Le([
  "address",
  // Flow content
  "article",
  // Sections and headings
  "aside",
  // Sections and headings
  "blockquote",
  // Flow content
  "body",
  // Page
  "caption",
  // `table-caption`
  "center",
  // Flow content (legacy)
  "dd",
  // Lists
  "dialog",
  // Flow content
  "dir",
  // Lists (legacy)
  "dl",
  // Lists
  "dt",
  // Lists
  "div",
  // Flow content
  "figure",
  // Flow content
  "figcaption",
  // Flow content
  "footer",
  // Flow content
  "form,",
  // Flow content
  "h1",
  // Sections and headings
  "h2",
  // Sections and headings
  "h3",
  // Sections and headings
  "h4",
  // Sections and headings
  "h5",
  // Sections and headings
  "h6",
  // Sections and headings
  "header",
  // Flow content
  "hgroup",
  // Sections and headings
  "hr",
  // Flow content
  "html",
  // Page
  "legend",
  // Flow content
  "li",
  // Lists (as `display: list-item`)
  "listing",
  // Flow content (legacy)
  "main",
  // Flow content
  "menu",
  // Lists
  "nav",
  // Sections and headings
  "ol",
  // Lists
  "p",
  // Flow content
  "plaintext",
  // Flow content (legacy)
  "pre",
  // Flow content
  "section",
  // Sections and headings
  "ul",
  // Lists
  "xmp"
  // Flow content (legacy)
]);
function vn(e, t) {
  const n = {}, r = "children" in e ? e.children : [], a = Qn(e), c = tr(e, {
    whitespace: n.whitespace || "normal",
    breakBefore: !1,
    breakAfter: !1
  }), i = [];
  (e.type === "text" || e.type === "comment") && i.push(
    ...er(e, {
      whitespace: c,
      breakBefore: !0,
      breakAfter: !0
    })
  );
  let s = -1;
  for (; ++s < r.length; )
    i.push(
      ...Jn(
        r[s],
        // @ts-expect-error: `tree` is a parent if we’re here.
        e,
        {
          whitespace: c,
          breakBefore: s ? void 0 : a,
          breakAfter: s < r.length - 1 ? qt(r[s + 1]) : a
        }
      )
    );
  const o = [];
  let l;
  for (s = -1; ++s < i.length; ) {
    const d = i[s];
    typeof d == "number" ? l !== void 0 && d > l && (l = d) : d && (l !== void 0 && l > -1 && o.push(`
`.repeat(l) || " "), l = -1, o.push(d));
  }
  return o.join("");
}
function Jn(e, t, n) {
  return e.type === "element" ? zi(e, t, n) : e.type === "text" ? n.whitespace === "normal" ? er(e, n) : Ki(e) : [];
}
function zi(e, t, n) {
  const r = tr(e, n), a = e.children || [];
  let c = -1, i = [];
  if ($i(e))
    return i;
  let s, o;
  for (qt(e) || Nn(e) && // @ts-expect-error: something up with types of parents.
  _n(t, e, Nn) ? o = `
` : Ui(e) ? (s = 2, o = 2) : Qn(e) && (s = 1, o = 1); ++c < a.length; )
    i = i.concat(
      Jn(a[c], e, {
        whitespace: r,
        breakBefore: c ? void 0 : s,
        breakAfter: c < a.length - 1 ? qt(a[c + 1]) : o
      })
    );
  return wn(e) && // @ts-expect-error: something up with types of parents.
  _n(t, e, wn) && i.push("	"), s && i.unshift(s), o && i.push(o), i;
}
function er(e, t) {
  const n = String(e.value), r = [], a = [];
  let c = 0;
  for (; c <= n.length; ) {
    En.lastIndex = c;
    const o = En.exec(n), l = o && "index" in o ? o.index : n.length;
    r.push(
      // Any sequence of collapsible spaces and tabs immediately preceding or
      // following a segment break is removed.
      Gi(
        // […] ignoring bidi formatting characters (characters with the
        // Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
        // they were not there.
        n.slice(c, l).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        c === 0 ? t.breakBefore : !0,
        l === n.length ? t.breakAfter : !0
      )
    ), c = l + 1;
  }
  let i = -1, s;
  for (; ++i < r.length; )
    r[i].charCodeAt(r[i].length - 1) === 8203 || i < r.length - 1 && r[i + 1].charCodeAt(0) === 8203 ? (a.push(r[i]), s = void 0) : r[i] ? (typeof s == "number" && a.push(s), a.push(r[i]), s = 0) : (i === 0 || i === r.length - 1) && a.push(0);
  return a;
}
function Ki(e) {
  return [String(e.value)];
}
function Gi(e, t, n) {
  const r = [];
  let a = 0, c;
  for (; a < e.length; ) {
    yn.lastIndex = a;
    const i = yn.exec(e);
    c = i ? i.index : e.length, !a && !c && i && !t && r.push(""), a !== c && r.push(e.slice(a, c)), a = i ? c + i[0].length : c;
  }
  return a !== c && !n && r.push(""), r.join(" ");
}
function tr(e, t) {
  if (e.type === "element") {
    const n = e.properties || {};
    switch (e.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return n.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return n.noWrap ? "nowrap" : t.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  }
  return t.whitespace;
}
function Hi(e) {
  return !!(e.properties || {}).hidden;
}
function qi(e) {
  return e.tagName === "td" || e.tagName === "th";
}
function Wi(e) {
  return e.tagName === "dialog" && !(e.properties || {}).open;
}
function Yi(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", a = "[a-zA-Z_]\\w*::", i = "(?!struct)(" + r + "|" + t.optional(a) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", s = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  }, l = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, d = {
    className: "number",
    variants: [
      { begin: "\\b(0b[01']+)" },
      { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
      { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
    ],
    relevance: 0
  }, u = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(l, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      n,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, f = {
    className: "title",
    begin: t.optional(a) + e.IDENT_RE,
    relevance: 0
  }, b = t.optional(a) + e.IDENT_RE + "\\s*\\(", p = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ], h = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ], _ = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ], y = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ], A = {
    type: h,
    keyword: p,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: _
  }, M = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: y
    },
    begin: t.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      e.IDENT_RE,
      t.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  }, O = [
    M,
    u,
    s,
    n,
    e.C_BLOCK_COMMENT_MODE,
    d,
    l
  ], B = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: A,
    contains: O.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: A,
        contains: O.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, j = {
    className: "function",
    begin: "(" + i + "[\\*&\\s]+)+" + b,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: A,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: A,
        relevance: 0
      },
      {
        begin: b,
        returnBegin: !0,
        contains: [f],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: !0,
        contains: [
          l,
          d
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: A,
        relevance: 0,
        contains: [
          n,
          e.C_BLOCK_COMMENT_MODE,
          l,
          d,
          s,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: A,
            relevance: 0,
            contains: [
              "self",
              n,
              e.C_BLOCK_COMMENT_MODE,
              l,
              d,
              s
            ]
          }
        ]
      },
      s,
      n,
      e.C_BLOCK_COMMENT_MODE,
      u
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: A,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      B,
      j,
      M,
      O,
      [
        u,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
          end: ">",
          keywords: A,
          contains: [
            "self",
            s
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: A
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}
function Zi(e) {
  const t = {
    type: [
      "boolean",
      "byte",
      "word",
      "String"
    ],
    built_in: [
      "KeyboardController",
      "MouseController",
      "SoftwareSerial",
      "EthernetServer",
      "EthernetClient",
      "LiquidCrystal",
      "RobotControl",
      "GSMVoiceCall",
      "EthernetUDP",
      "EsploraTFT",
      "HttpClient",
      "RobotMotor",
      "WiFiClient",
      "GSMScanner",
      "FileSystem",
      "Scheduler",
      "GSMServer",
      "YunClient",
      "YunServer",
      "IPAddress",
      "GSMClient",
      "GSMModem",
      "Keyboard",
      "Ethernet",
      "Console",
      "GSMBand",
      "Esplora",
      "Stepper",
      "Process",
      "WiFiUDP",
      "GSM_SMS",
      "Mailbox",
      "USBHost",
      "Firmata",
      "PImage",
      "Client",
      "Server",
      "GSMPIN",
      "FileIO",
      "Bridge",
      "Serial",
      "EEPROM",
      "Stream",
      "Mouse",
      "Audio",
      "Servo",
      "File",
      "Task",
      "GPRS",
      "WiFi",
      "Wire",
      "TFT",
      "GSM",
      "SPI",
      "SD"
    ],
    _hints: [
      "setup",
      "loop",
      "runShellCommandAsynchronously",
      "analogWriteResolution",
      "retrieveCallingNumber",
      "printFirmwareVersion",
      "analogReadResolution",
      "sendDigitalPortPair",
      "noListenOnLocalhost",
      "readJoystickButton",
      "setFirmwareVersion",
      "readJoystickSwitch",
      "scrollDisplayRight",
      "getVoiceCallStatus",
      "scrollDisplayLeft",
      "writeMicroseconds",
      "delayMicroseconds",
      "beginTransmission",
      "getSignalStrength",
      "runAsynchronously",
      "getAsynchronously",
      "listenOnLocalhost",
      "getCurrentCarrier",
      "readAccelerometer",
      "messageAvailable",
      "sendDigitalPorts",
      "lineFollowConfig",
      "countryNameWrite",
      "runShellCommand",
      "readStringUntil",
      "rewindDirectory",
      "readTemperature",
      "setClockDivider",
      "readLightSensor",
      "endTransmission",
      "analogReference",
      "detachInterrupt",
      "countryNameRead",
      "attachInterrupt",
      "encryptionType",
      "readBytesUntil",
      "robotNameWrite",
      "readMicrophone",
      "robotNameRead",
      "cityNameWrite",
      "userNameWrite",
      "readJoystickY",
      "readJoystickX",
      "mouseReleased",
      "openNextFile",
      "scanNetworks",
      "noInterrupts",
      "digitalWrite",
      "beginSpeaker",
      "mousePressed",
      "isActionDone",
      "mouseDragged",
      "displayLogos",
      "noAutoscroll",
      "addParameter",
      "remoteNumber",
      "getModifiers",
      "keyboardRead",
      "userNameRead",
      "waitContinue",
      "processInput",
      "parseCommand",
      "printVersion",
      "readNetworks",
      "writeMessage",
      "blinkVersion",
      "cityNameRead",
      "readMessage",
      "setDataMode",
      "parsePacket",
      "isListening",
      "setBitOrder",
      "beginPacket",
      "isDirectory",
      "motorsWrite",
      "drawCompass",
      "digitalRead",
      "clearScreen",
      "serialEvent",
      "rightToLeft",
      "setTextSize",
      "leftToRight",
      "requestFrom",
      "keyReleased",
      "compassRead",
      "analogWrite",
      "interrupts",
      "WiFiServer",
      "disconnect",
      "playMelody",
      "parseFloat",
      "autoscroll",
      "getPINUsed",
      "setPINUsed",
      "setTimeout",
      "sendAnalog",
      "readSlider",
      "analogRead",
      "beginWrite",
      "createChar",
      "motorsStop",
      "keyPressed",
      "tempoWrite",
      "readButton",
      "subnetMask",
      "debugPrint",
      "macAddress",
      "writeGreen",
      "randomSeed",
      "attachGPRS",
      "readString",
      "sendString",
      "remotePort",
      "releaseAll",
      "mouseMoved",
      "background",
      "getXChange",
      "getYChange",
      "answerCall",
      "getResult",
      "voiceCall",
      "endPacket",
      "constrain",
      "getSocket",
      "writeJSON",
      "getButton",
      "available",
      "connected",
      "findUntil",
      "readBytes",
      "exitValue",
      "readGreen",
      "writeBlue",
      "startLoop",
      "IPAddress",
      "isPressed",
      "sendSysex",
      "pauseMode",
      "gatewayIP",
      "setCursor",
      "getOemKey",
      "tuneWrite",
      "noDisplay",
      "loadImage",
      "switchPIN",
      "onRequest",
      "onReceive",
      "changePIN",
      "playFile",
      "noBuffer",
      "parseInt",
      "overflow",
      "checkPIN",
      "knobRead",
      "beginTFT",
      "bitClear",
      "updateIR",
      "bitWrite",
      "position",
      "writeRGB",
      "highByte",
      "writeRed",
      "setSpeed",
      "readBlue",
      "noStroke",
      "remoteIP",
      "transfer",
      "shutdown",
      "hangCall",
      "beginSMS",
      "endWrite",
      "attached",
      "maintain",
      "noCursor",
      "checkReg",
      "checkPUK",
      "shiftOut",
      "isValid",
      "shiftIn",
      "pulseIn",
      "connect",
      "println",
      "localIP",
      "pinMode",
      "getIMEI",
      "display",
      "noBlink",
      "process",
      "getBand",
      "running",
      "beginSD",
      "drawBMP",
      "lowByte",
      "setBand",
      "release",
      "bitRead",
      "prepare",
      "pointTo",
      "readRed",
      "setMode",
      "noFill",
      "remove",
      "listen",
      "stroke",
      "detach",
      "attach",
      "noTone",
      "exists",
      "buffer",
      "height",
      "bitSet",
      "circle",
      "config",
      "cursor",
      "random",
      "IRread",
      "setDNS",
      "endSMS",
      "getKey",
      "micros",
      "millis",
      "begin",
      "print",
      "write",
      "ready",
      "flush",
      "width",
      "isPIN",
      "blink",
      "clear",
      "press",
      "mkdir",
      "rmdir",
      "close",
      "point",
      "yield",
      "image",
      "BSSID",
      "click",
      "delay",
      "read",
      "text",
      "move",
      "peek",
      "beep",
      "rect",
      "line",
      "open",
      "seek",
      "fill",
      "size",
      "turn",
      "stop",
      "home",
      "find",
      "step",
      "tone",
      "sqrt",
      "RSSI",
      "SSID",
      "end",
      "bit",
      "tan",
      "cos",
      "sin",
      "pow",
      "map",
      "abs",
      "max",
      "min",
      "get",
      "run",
      "put"
    ],
    literal: [
      "DIGITAL_MESSAGE",
      "FIRMATA_STRING",
      "ANALOG_MESSAGE",
      "REPORT_DIGITAL",
      "REPORT_ANALOG",
      "INPUT_PULLUP",
      "SET_PIN_MODE",
      "INTERNAL2V56",
      "SYSTEM_RESET",
      "LED_BUILTIN",
      "INTERNAL1V1",
      "SYSEX_START",
      "INTERNAL",
      "EXTERNAL",
      "DEFAULT",
      "OUTPUT",
      "INPUT",
      "HIGH",
      "LOW"
    ]
  }, n = Yi(e), r = (
    /** @type {Record<string,any>} */
    n.keywords
  );
  return r.type = [
    ...r.type,
    ...t.type
  ], r.literal = [
    ...r.literal,
    ...t.literal
  ], r.built_in = [
    ...r.built_in,
    ...t.built_in
  ], r._hints = t._hints, n.name = "Arduino", n.aliases = ["ino"], n.supersetOf = "cpp", n;
}
function Vi(e) {
  const t = e.regex, n = {}, r = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      r
    ]
  });
  const a = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, c = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, i = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      a
    ]
  };
  a.contains.push(i);
  const s = {
    match: /\\"/
  }, o = {
    className: "string",
    begin: /'/,
    end: /'/
  }, l = {
    match: /\\'/
  }, d = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, u = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], f = e.SHEBANG({
    binary: `(${u.join("|")})`,
    relevance: 10
  }), b = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, p = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "function",
    "select"
  ], h = [
    "true",
    "false"
  ], _ = { match: /(\/[a-z._-]+)+/ }, y = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], v = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], T = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], A = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: ["sh"],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: p,
      literal: h,
      built_in: [
        ...y,
        ...v,
        // Shell modifiers
        "set",
        "shopt",
        ...T,
        ...A
      ]
    },
    contains: [
      f,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      b,
      d,
      e.HASH_COMMENT_MODE,
      c,
      _,
      i,
      s,
      o,
      l,
      n
    ]
  };
}
function ji(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", a = "[a-zA-Z_]\\w*::", i = "(" + r + "|" + t.optional(a) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", s = {
    className: "type",
    variants: [
      { begin: "\\b[a-z\\d_]*_t\\b" },
      { match: /\batomic_[a-z]{3,6}\b/ }
    ]
  }, l = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, d = {
    className: "number",
    variants: [
      { begin: "\\b(0b[01']+)" },
      { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
      { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
    ],
    relevance: 0
  }, u = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(l, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      n,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, f = {
    className: "title",
    begin: t.optional(a) + e.IDENT_RE,
    relevance: 0
  }, b = t.optional(a) + e.IDENT_RE + "\\s*\\(", _ = {
    keyword: [
      "asm",
      "auto",
      "break",
      "case",
      "continue",
      "default",
      "do",
      "else",
      "enum",
      "extern",
      "for",
      "fortran",
      "goto",
      "if",
      "inline",
      "register",
      "restrict",
      "return",
      "sizeof",
      "struct",
      "switch",
      "typedef",
      "union",
      "volatile",
      "while",
      "_Alignas",
      "_Alignof",
      "_Atomic",
      "_Generic",
      "_Noreturn",
      "_Static_assert",
      "_Thread_local",
      // aliases
      "alignas",
      "alignof",
      "noreturn",
      "static_assert",
      "thread_local",
      // not a C keyword but is, for all intents and purposes, treated exactly like one.
      "_Pragma"
    ],
    type: [
      "float",
      "double",
      "signed",
      "unsigned",
      "int",
      "short",
      "long",
      "char",
      "void",
      "_Bool",
      "_Complex",
      "_Imaginary",
      "_Decimal32",
      "_Decimal64",
      "_Decimal128",
      // modifiers
      "const",
      "static",
      // aliases
      "complex",
      "bool",
      "imaginary"
    ],
    literal: "true false NULL",
    // TODO: apply hinting work similar to what was done in cpp.js
    built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
  }, y = [
    u,
    s,
    n,
    e.C_BLOCK_COMMENT_MODE,
    d,
    l
  ], v = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: _,
    contains: y.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: _,
        contains: y.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, T = {
    begin: "(" + i + "[\\*&\\s]+)+" + b,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: _,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: _,
        relevance: 0
      },
      {
        begin: b,
        returnBegin: !0,
        contains: [e.inherit(f, { className: "title.function" })],
        relevance: 0
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: _,
        relevance: 0,
        contains: [
          n,
          e.C_BLOCK_COMMENT_MODE,
          l,
          d,
          s,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: _,
            relevance: 0,
            contains: [
              "self",
              n,
              e.C_BLOCK_COMMENT_MODE,
              l,
              d,
              s
            ]
          }
        ]
      },
      s,
      n,
      e.C_BLOCK_COMMENT_MODE,
      u
    ]
  };
  return {
    name: "C",
    aliases: ["h"],
    keywords: _,
    // Until differentiations are added between `c` and `cpp`, `c` will
    // not be auto-detected to avoid auto-detect conflicts between C and C++
    disableAutodetect: !0,
    illegal: "</",
    contains: [].concat(
      v,
      T,
      y,
      [
        u,
        {
          begin: e.IDENT_RE + "::",
          keywords: _
        },
        {
          className: "class",
          beginKeywords: "enum class struct union",
          end: /[{;:<>=]/,
          contains: [
            { beginKeywords: "final class struct" },
            e.TITLE_MODE
          ]
        }
      ]
    ),
    exports: {
      preprocessor: u,
      strings: l,
      keywords: _
    }
  };
}
function Xi(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", a = "[a-zA-Z_]\\w*::", i = "(?!struct)(" + r + "|" + t.optional(a) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", s = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  }, l = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, d = {
    className: "number",
    variants: [
      { begin: "\\b(0b[01']+)" },
      { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
      { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
    ],
    relevance: 0
  }, u = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(l, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      n,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, f = {
    className: "title",
    begin: t.optional(a) + e.IDENT_RE,
    relevance: 0
  }, b = t.optional(a) + e.IDENT_RE + "\\s*\\(", p = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ], h = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ], _ = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ], y = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ], A = {
    type: h,
    keyword: p,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: _
  }, M = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: y
    },
    begin: t.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      e.IDENT_RE,
      t.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  }, O = [
    M,
    u,
    s,
    n,
    e.C_BLOCK_COMMENT_MODE,
    d,
    l
  ], B = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: A,
    contains: O.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: A,
        contains: O.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, j = {
    className: "function",
    begin: "(" + i + "[\\*&\\s]+)+" + b,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: A,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: A,
        relevance: 0
      },
      {
        begin: b,
        returnBegin: !0,
        contains: [f],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: !0,
        contains: [
          l,
          d
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: A,
        relevance: 0,
        contains: [
          n,
          e.C_BLOCK_COMMENT_MODE,
          l,
          d,
          s,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: A,
            relevance: 0,
            contains: [
              "self",
              n,
              e.C_BLOCK_COMMENT_MODE,
              l,
              d,
              s
            ]
          }
        ]
      },
      s,
      n,
      e.C_BLOCK_COMMENT_MODE,
      u
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: A,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      B,
      j,
      M,
      O,
      [
        u,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
          end: ">",
          keywords: A,
          contains: [
            "self",
            s
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: A
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}
function Qi(e) {
  const t = [
    "bool",
    "byte",
    "char",
    "decimal",
    "delegate",
    "double",
    "dynamic",
    "enum",
    "float",
    "int",
    "long",
    "nint",
    "nuint",
    "object",
    "sbyte",
    "short",
    "string",
    "ulong",
    "uint",
    "ushort"
  ], n = [
    "public",
    "private",
    "protected",
    "static",
    "internal",
    "protected",
    "abstract",
    "async",
    "extern",
    "override",
    "unsafe",
    "virtual",
    "new",
    "sealed",
    "partial"
  ], r = [
    "default",
    "false",
    "null",
    "true"
  ], a = [
    "abstract",
    "as",
    "base",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "do",
    "else",
    "event",
    "explicit",
    "extern",
    "finally",
    "fixed",
    "for",
    "foreach",
    "goto",
    "if",
    "implicit",
    "in",
    "interface",
    "internal",
    "is",
    "lock",
    "namespace",
    "new",
    "operator",
    "out",
    "override",
    "params",
    "private",
    "protected",
    "public",
    "readonly",
    "record",
    "ref",
    "return",
    "scoped",
    "sealed",
    "sizeof",
    "stackalloc",
    "static",
    "struct",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "unchecked",
    "unsafe",
    "using",
    "virtual",
    "void",
    "volatile",
    "while"
  ], c = [
    "add",
    "alias",
    "and",
    "ascending",
    "async",
    "await",
    "by",
    "descending",
    "equals",
    "from",
    "get",
    "global",
    "group",
    "init",
    "into",
    "join",
    "let",
    "nameof",
    "not",
    "notnull",
    "on",
    "or",
    "orderby",
    "partial",
    "remove",
    "select",
    "set",
    "unmanaged",
    "value|0",
    "var",
    "when",
    "where",
    "with",
    "yield"
  ], i = {
    keyword: a.concat(c),
    built_in: t,
    literal: r
  }, s = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), o = {
    className: "number",
    variants: [
      { begin: "\\b(0b[01']+)" },
      { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
      { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
    ],
    relevance: 0
  }, l = {
    className: "string",
    begin: '@"',
    end: '"',
    contains: [{ begin: '""' }]
  }, d = e.inherit(l, { illegal: /\n/ }), u = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: i
  }, f = e.inherit(u, { illegal: /\n/ }), b = {
    className: "string",
    begin: /\$"/,
    end: '"',
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, p = {
    className: "string",
    begin: /\$@"/,
    end: '"',
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      u
    ]
  }, h = e.inherit(p, {
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      f
    ]
  });
  u.contains = [
    p,
    b,
    l,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    o,
    e.C_BLOCK_COMMENT_MODE
  ], f.contains = [
    h,
    b,
    d,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    o,
    e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
  ];
  const _ = { variants: [
    p,
    b,
    l,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ] }, y = {
    begin: "<",
    end: ">",
    contains: [
      { beginKeywords: "in out" },
      s
    ]
  }, v = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", T = {
    // prevents expressions like `@class` from incorrect flagging
    // `class` as a keyword
    begin: "@" + e.IDENT_RE,
    relevance: 0
  };
  return {
    name: "C#",
    aliases: [
      "cs",
      "c#"
    ],
    keywords: i,
    illegal: /::/,
    contains: [
      e.COMMENT(
        "///",
        "$",
        {
          returnBegin: !0,
          contains: [
            {
              className: "doctag",
              variants: [
                {
                  begin: "///",
                  relevance: 0
                },
                { begin: "<!--|-->" },
                {
                  begin: "</?",
                  end: ">"
                }
              ]
            }
          ]
        }
      ),
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
      },
      _,
      o,
      {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [
          { beginKeywords: "where class" },
          s,
          y,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          s,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "record",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          s,
          y,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // [Attributes("")]
        className: "meta",
        begin: "^\\s*\\[(?=[\\w])",
        excludeBegin: !0,
        end: "\\]",
        excludeEnd: !0,
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/
          }
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new return throw await else",
        relevance: 0
      },
      {
        className: "function",
        begin: "(" + v + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: i,
        contains: [
          // prevents these from being highlighted `title`
          {
            beginKeywords: n.join(" "),
            relevance: 0
          },
          {
            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: !0,
            contains: [
              e.TITLE_MODE,
              y
            ],
            relevance: 0
          },
          { match: /\(\)/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: i,
            relevance: 0,
            contains: [
              _,
              o,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      T
    ]
  };
}
const Ji = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), ea = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "p",
  "q",
  "quote",
  "samp",
  "section",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], ta = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
], na = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
], ra = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
], ia = [
  "align-content",
  "align-items",
  "align-self",
  "all",
  "animation",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-timing-function",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-decoration-break",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "direction",
  "display",
  "empty-cells",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-variant",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "gap",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "inline-size",
  "isolation",
  "justify-content",
  "left",
  "letter-spacing",
  "line-break",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "pointer-events",
  "position",
  "quotes",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "row-gap",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-transform",
  "text-underline-position",
  "top",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "z-index"
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();
function aa(e) {
  const t = e.regex, n = Ji(e), r = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, a = "and or not only", c = /@-?\w[\w]*(-\w+)*/, i = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      n.BLOCK_COMMENT,
      r,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      n.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + i,
        relevance: 0
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + na.join("|") + ")" },
          { begin: ":(:)?(" + ra.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + ia.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...s,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...s,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          n.FUNCTION_DISPATCH
        ]
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: c
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: a,
              attribute: ta.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...s,
              n.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + ea.join("|") + ")\\b"
      }
    ]
  };
}
function oa(e) {
  const t = e.regex;
  return {
    name: "Diff",
    aliases: ["patch"],
    contains: [
      {
        className: "meta",
        relevance: 10,
        match: t.either(
          /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
          /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
          /^--- +\d+,\d+ +----$/
        )
      },
      {
        className: "comment",
        variants: [
          {
            begin: t.either(
              /Index: /,
              /^index/,
              /={3,}/,
              /^-{3}/,
              /^\*{3} /,
              /^\+{3}/,
              /^diff --git/
            ),
            end: /$/
          },
          { match: /^\*{15}$/ }
        ]
      },
      {
        className: "addition",
        begin: /^\+/,
        end: /$/
      },
      {
        className: "deletion",
        begin: /^-/,
        end: /$/
      },
      {
        className: "addition",
        begin: /^!/,
        end: /$/
      }
    ]
  };
}
function sa(e) {
  const c = {
    keyword: [
      "break",
      "case",
      "chan",
      "const",
      "continue",
      "default",
      "defer",
      "else",
      "fallthrough",
      "for",
      "func",
      "go",
      "goto",
      "if",
      "import",
      "interface",
      "map",
      "package",
      "range",
      "return",
      "select",
      "struct",
      "switch",
      "type",
      "var"
    ],
    type: [
      "bool",
      "byte",
      "complex64",
      "complex128",
      "error",
      "float32",
      "float64",
      "int8",
      "int16",
      "int32",
      "int64",
      "string",
      "uint8",
      "uint16",
      "uint32",
      "uint64",
      "int",
      "uint",
      "uintptr",
      "rune"
    ],
    literal: [
      "true",
      "false",
      "iota",
      "nil"
    ],
    built_in: [
      "append",
      "cap",
      "close",
      "complex",
      "copy",
      "imag",
      "len",
      "make",
      "new",
      "panic",
      "print",
      "println",
      "real",
      "recover",
      "delete"
    ]
  };
  return {
    name: "Go",
    aliases: ["golang"],
    keywords: c,
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "string",
        variants: [
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          {
            begin: "`",
            end: "`"
          }
        ]
      },
      {
        className: "number",
        variants: [
          {
            begin: e.C_NUMBER_RE + "[i]",
            relevance: 1
          },
          e.C_NUMBER_MODE
        ]
      },
      {
        begin: /:=/
        // relevance booster
      },
      {
        className: "function",
        beginKeywords: "func",
        end: "\\s*(\\{|$)",
        excludeEnd: !0,
        contains: [
          e.TITLE_MODE,
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: !0,
            keywords: c,
            illegal: /["']/
          }
        ]
      }
    ]
  };
}
function ca(e) {
  const t = e.regex, n = /[_A-Za-z][_0-9A-Za-z]*/;
  return {
    name: "GraphQL",
    aliases: ["gql"],
    case_insensitive: !0,
    disableAutodetect: !1,
    keywords: {
      keyword: [
        "query",
        "mutation",
        "subscription",
        "type",
        "input",
        "schema",
        "directive",
        "interface",
        "union",
        "scalar",
        "fragment",
        "enum",
        "on"
      ],
      literal: [
        "true",
        "false",
        "null"
      ]
    },
    contains: [
      e.HASH_COMMENT_MODE,
      e.QUOTE_STRING_MODE,
      e.NUMBER_MODE,
      {
        scope: "punctuation",
        match: /[.]{3}/,
        relevance: 0
      },
      {
        scope: "punctuation",
        begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
        relevance: 0
      },
      {
        scope: "variable",
        begin: /\$/,
        end: /\W/,
        excludeEnd: !0,
        relevance: 0
      },
      {
        scope: "meta",
        match: /@\w+/,
        excludeEnd: !0
      },
      {
        scope: "symbol",
        begin: t.concat(n, t.lookahead(/\s*:/)),
        relevance: 0
      }
    ],
    illegal: [
      /[;<']/,
      /BEGIN/
    ]
  };
}
function la(e) {
  const t = e.regex, n = {
    className: "number",
    relevance: 0,
    variants: [
      { begin: /([+-]+)?[\d]+_[\d_]+/ },
      { begin: e.NUMBER_RE }
    ]
  }, r = e.COMMENT();
  r.variants = [
    {
      begin: /;/,
      end: /$/
    },
    {
      begin: /#/,
      end: /$/
    }
  ];
  const a = {
    className: "variable",
    variants: [
      { begin: /\$[\w\d"][\w\d_]*/ },
      { begin: /\$\{(.*?)\}/ }
    ]
  }, c = {
    className: "literal",
    begin: /\bon|off|true|false|yes|no\b/
  }, i = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: "'''",
        end: "'''",
        relevance: 10
      },
      {
        begin: '"""',
        end: '"""',
        relevance: 10
      },
      {
        begin: '"',
        end: '"'
      },
      {
        begin: "'",
        end: "'"
      }
    ]
  }, s = {
    begin: /\[/,
    end: /\]/,
    contains: [
      r,
      c,
      a,
      i,
      n,
      "self"
    ],
    relevance: 0
  }, o = /[A-Za-z0-9_-]+/, l = /"(\\"|[^"])*"/, d = /'[^']*'/, u = t.either(
    o,
    l,
    d
  ), f = t.concat(
    u,
    "(\\s*\\.\\s*",
    u,
    ")*",
    t.lookahead(/\s*=\s*[^#\s]/)
  );
  return {
    name: "TOML, also INI",
    aliases: ["toml"],
    case_insensitive: !0,
    illegal: /\S/,
    contains: [
      r,
      {
        className: "section",
        begin: /\[+/,
        end: /\]+/
      },
      {
        begin: f,
        className: "attr",
        starts: {
          end: /$/,
          contains: [
            r,
            s,
            c,
            a,
            i,
            n
          ]
        }
      }
    ]
  };
}
var qe = "[0-9](_*[0-9])*", dt = `\\.(${qe})`, gt = "[0-9a-fA-F](_*[0-9a-fA-F])*", kn = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${qe})((${dt})|\\.)?|(${dt}))[eE][+-]?(${qe})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${qe})((${dt})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${dt})[fFdD]?\\b` },
    { begin: `\\b(${qe})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${gt})\\.?|(${gt})?\\.(${gt}))[pP][+-]?(${qe})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${gt})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function nr(e, t, n) {
  return n === -1 ? "" : e.replace(t, (r) => nr(e, t, n - 1));
}
function ua(e) {
  const t = e.regex, n = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", r = n + nr("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2), o = {
    keyword: [
      "synchronized",
      "abstract",
      "private",
      "var",
      "static",
      "if",
      "const ",
      "for",
      "while",
      "strictfp",
      "finally",
      "protected",
      "import",
      "native",
      "final",
      "void",
      "enum",
      "else",
      "break",
      "transient",
      "catch",
      "instanceof",
      "volatile",
      "case",
      "assert",
      "package",
      "default",
      "public",
      "try",
      "switch",
      "continue",
      "throws",
      "protected",
      "public",
      "private",
      "module",
      "requires",
      "exports",
      "do",
      "sealed",
      "yield",
      "permits"
    ],
    literal: [
      "false",
      "true",
      "null"
    ],
    type: [
      "char",
      "boolean",
      "long",
      "float",
      "int",
      "byte",
      "short",
      "double"
    ],
    built_in: [
      "super",
      "this"
    ]
  }, l = {
    className: "meta",
    begin: "@" + n,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  }, d = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: o,
    relevance: 0,
    contains: [e.C_BLOCK_COMMENT_MODE],
    endsParent: !0
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: o,
    illegal: /<\/|#/,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/,
              relevance: 0
            },
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      // relevance boost
      {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      },
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [e.BACKSLASH_ESCAPE]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          n
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        // Exceptions for hyphenated keywords
        match: /non-sealed/,
        scope: "keyword"
      },
      {
        begin: [
          t.concat(/(?!else)/, n),
          /\s+/,
          n,
          /\s+/,
          /=(?!=)/
        ],
        className: {
          1: "type",
          3: "variable",
          5: "operator"
        }
      },
      {
        begin: [
          /record/,
          /\s+/,
          n
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          d,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new throw return else",
        relevance: 0
      },
      {
        begin: [
          "(?:" + r + "\\s+)",
          e.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: o,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: o,
            relevance: 0,
            contains: [
              l,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              kn,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      kn,
      l
    ]
  };
}
const Sn = "[A-Za-z$_][0-9A-Za-z$_]*", da = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
], ga = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], rr = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], ir = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], ar = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], fa = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], pa = [].concat(
  ar,
  rr,
  ir
);
function ba(e) {
  const t = e.regex, n = (k, { after: C }) => {
    const L = "</" + k[0].slice(1);
    return k.input.indexOf(L, C) !== -1;
  }, r = Sn, a = {
    begin: "<>",
    end: "</>"
  }, c = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (k, C) => {
      const L = k[0].length + k.index, F = k.input[L];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        F === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        F === ","
      ) {
        C.ignoreMatch();
        return;
      }
      F === ">" && (n(k, { after: L }) || C.ignoreMatch());
      let H;
      const re = k.input.substring(L);
      if (H = re.match(/^\s*=/)) {
        C.ignoreMatch();
        return;
      }
      if ((H = re.match(/^\s+extends\s+/)) && H.index === 0) {
        C.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: Sn,
    keyword: da,
    literal: ga,
    built_in: pa,
    "variable.language": fa
  }, o = "[0-9](_?[0-9])*", l = `\\.(${o})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${o})\\b` },
      { begin: `\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, f = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, b = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "xml"
    }
  }, p = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "css"
    }
  }, h = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "graphql"
    }
  }, _ = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, v = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, T = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    b,
    p,
    h,
    _,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    u
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  f.contains = T.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(T)
  });
  const A = [].concat(v, f.contains), M = A.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(A)
    }
  ]), O = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: M
  }, B = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, j = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...rr,
        ...ir
      ]
    }
  }, Z = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, m = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [O],
    illegal: /%/
  }, ne = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function se(k) {
    return t.concat("(?!", k.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      se([
        ...ar,
        "super",
        "import"
      ]),
      r,
      t.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, G = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, Q = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      O
    ]
  }, pe = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", w = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(pe)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      O
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: M, CLASS_REFERENCE: j },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      Z,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      b,
      p,
      h,
      _,
      v,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      u,
      j,
      {
        className: "attr",
        begin: r + t.lookahead(":"),
        relevance: 0
      },
      w,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          v,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: pe,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: M
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: a.begin, end: a.end },
              { match: c },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      m,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          O,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      G,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [O]
      },
      K,
      ne,
      B,
      Q,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function ma(e) {
  const t = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, n = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, r = [
    "true",
    "false",
    "null"
  ], a = {
    scope: "literal",
    beginKeywords: r.join(" ")
  };
  return {
    name: "JSON",
    keywords: {
      literal: r
    },
    contains: [
      t,
      n,
      e.QUOTE_STRING_MODE,
      a,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
var We = "[0-9](_*[0-9])*", ft = `\\.(${We})`, pt = "[0-9a-fA-F](_*[0-9a-fA-F])*", ha = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${We})((${ft})|\\.)?|(${ft}))[eE][+-]?(${We})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${We})((${ft})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${ft})[fFdD]?\\b` },
    { begin: `\\b(${We})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${pt})\\.?|(${pt})?\\.(${pt}))[pP][+-]?(${We})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${pt})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function _a(e) {
  const t = {
    keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
    built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
    literal: "true false null"
  }, n = {
    className: "keyword",
    begin: /\b(break|continue|return|this)\b/,
    starts: { contains: [
      {
        className: "symbol",
        begin: /@\w+/
      }
    ] }
  }, r = {
    className: "symbol",
    begin: e.UNDERSCORE_IDENT_RE + "@"
  }, a = {
    className: "subst",
    begin: /\$\{/,
    end: /\}/,
    contains: [e.C_NUMBER_MODE]
  }, c = {
    className: "variable",
    begin: "\\$" + e.UNDERSCORE_IDENT_RE
  }, i = {
    className: "string",
    variants: [
      {
        begin: '"""',
        end: '"""(?=[^"])',
        contains: [
          c,
          a
        ]
      },
      // Can't use built-in modes easily, as we want to use STRING in the meta
      // context as 'meta-string' and there's no syntax to remove explicitly set
      // classNames in built-in modes.
      {
        begin: "'",
        end: "'",
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: '"',
        end: '"',
        illegal: /\n/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c,
          a
        ]
      }
    ]
  };
  a.contains.push(i);
  const s = {
    className: "meta",
    begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
  }, o = {
    className: "meta",
    begin: "@" + e.UNDERSCORE_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          e.inherit(i, { className: "string" }),
          "self"
        ]
      }
    ]
  }, l = ha, d = e.COMMENT(
    "/\\*",
    "\\*/",
    { contains: [e.C_BLOCK_COMMENT_MODE] }
  ), u = { variants: [
    {
      className: "type",
      begin: e.UNDERSCORE_IDENT_RE
    },
    {
      begin: /\(/,
      end: /\)/,
      contains: []
      // defined later
    }
  ] }, f = u;
  return f.variants[1].contains = [u], u.variants[1].contains = [f], {
    name: "Kotlin",
    aliases: [
      "kt",
      "kts"
    ],
    keywords: t,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      e.C_LINE_COMMENT_MODE,
      d,
      n,
      r,
      s,
      o,
      {
        className: "function",
        beginKeywords: "fun",
        end: "[(]|$",
        returnBegin: !0,
        excludeEnd: !0,
        keywords: t,
        relevance: 5,
        contains: [
          {
            begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
            returnBegin: !0,
            relevance: 0,
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          {
            className: "type",
            begin: /</,
            end: />/,
            keywords: "reified",
            relevance: 0
          },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: !0,
            keywords: t,
            relevance: 0,
            contains: [
              {
                begin: /:/,
                end: /[=,\/]/,
                endsWithParent: !0,
                contains: [
                  u,
                  e.C_LINE_COMMENT_MODE,
                  d
                ],
                relevance: 0
              },
              e.C_LINE_COMMENT_MODE,
              d,
              s,
              o,
              i,
              e.C_NUMBER_MODE
            ]
          },
          d
        ]
      },
      {
        begin: [
          /class|interface|trait/,
          /\s+/,
          e.UNDERSCORE_IDENT_RE
        ],
        beginScope: {
          3: "title.class"
        },
        keywords: "class interface trait",
        end: /[:\{(]|$/,
        excludeEnd: !0,
        illegal: "extends implements",
        contains: [
          { beginKeywords: "public protected internal private constructor" },
          e.UNDERSCORE_TITLE_MODE,
          {
            className: "type",
            begin: /</,
            end: />/,
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0
          },
          {
            className: "type",
            begin: /[,:]\s*/,
            end: /[<\(,){\s]|$/,
            excludeBegin: !0,
            returnEnd: !0
          },
          s,
          o
        ]
      },
      i,
      {
        className: "meta",
        begin: "^#!/usr/bin/env",
        end: "$",
        illegal: `
`
      },
      l
    ]
  };
}
const Ea = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), ya = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "p",
  "q",
  "quote",
  "samp",
  "section",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], wa = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
], or = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
], sr = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
], Na = [
  "align-content",
  "align-items",
  "align-self",
  "all",
  "animation",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-timing-function",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-decoration-break",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "direction",
  "display",
  "empty-cells",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-variant",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "gap",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "inline-size",
  "isolation",
  "justify-content",
  "left",
  "letter-spacing",
  "line-break",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "pointer-events",
  "position",
  "quotes",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "row-gap",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-transform",
  "text-underline-position",
  "top",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "z-index"
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse(), va = or.concat(sr);
function ka(e) {
  const t = Ea(e), n = va, r = "and or not only", a = "[\\w-]+", c = "(" + a + "|@\\{" + a + "\\})", i = [], s = [], o = function(T) {
    return {
      // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
      className: "string",
      begin: "~?" + T + ".*?" + T
    };
  }, l = function(T, A, M) {
    return {
      className: T,
      begin: A,
      relevance: M
    };
  }, d = {
    $pattern: /[a-z-]+/,
    keyword: r,
    attribute: wa.join(" ")
  }, u = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: "\\(",
    end: "\\)",
    contains: s,
    keywords: d,
    relevance: 0
  };
  s.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    o("'"),
    o('"'),
    t.CSS_NUMBER_MODE,
    // fixme: it does not include dot for numbers like .5em :(
    {
      begin: "(url|data-uri)\\(",
      starts: {
        className: "string",
        end: "[\\)\\n]",
        excludeEnd: !0
      }
    },
    t.HEXCOLOR,
    u,
    l("variable", "@@?" + a, 10),
    l("variable", "@\\{" + a + "\\}"),
    l("built_in", "~?`[^`]*?`"),
    // inline javascript (or whatever host language) *multiline* string
    {
      // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
      className: "attribute",
      begin: a + "\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0
    },
    t.IMPORTANT,
    { beginKeywords: "and not" },
    t.FUNCTION_DISPATCH
  );
  const f = s.concat({
    begin: /\{/,
    end: /\}/,
    contains: i
  }), b = {
    beginKeywords: "when",
    endsWithParent: !0,
    contains: [{ beginKeywords: "and not" }].concat(s)
    // using this form to override VALUE’s 'function' match
  }, p = {
    begin: c + "\\s*:",
    returnBegin: !0,
    end: /[;}]/,
    relevance: 0,
    contains: [
      { begin: /-(webkit|moz|ms|o)-/ },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Na.join("|") + ")\\b",
        end: /(?=:)/,
        starts: {
          endsWithParent: !0,
          illegal: "[<=$]",
          relevance: 0,
          contains: s
        }
      }
    ]
  }, h = {
    className: "keyword",
    begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
    starts: {
      end: "[;{}]",
      keywords: d,
      returnEnd: !0,
      contains: s,
      relevance: 0
    }
  }, _ = {
    className: "variable",
    variants: [
      // using more strict pattern for higher relevance to increase chances of Less detection.
      // this is *the only* Less specific statement used in most of the sources, so...
      // (we’ll still often loose to the css-parser unless there's '//' comment,
      // simply because 1 variable just can't beat 99 properties :)
      {
        begin: "@" + a + "\\s*:",
        relevance: 15
      },
      { begin: "@" + a }
    ],
    starts: {
      end: "[;}]",
      returnEnd: !0,
      contains: f
    }
  }, y = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [
      {
        begin: "[\\.#:&\\[>]",
        end: "[;{}]"
        // mixin calls end with ';'
      },
      {
        begin: c,
        end: /\{/
      }
    ],
    returnBegin: !0,
    returnEnd: !0,
    illegal: `[<='$"]`,
    relevance: 0,
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      b,
      l("keyword", "all\\b"),
      l("variable", "@\\{" + a + "\\}"),
      // otherwise it’s identified as tag
      {
        begin: "\\b(" + ya.join("|") + ")\\b",
        className: "selector-tag"
      },
      t.CSS_NUMBER_MODE,
      l("selector-tag", c, 0),
      l("selector-id", "#" + c),
      l("selector-class", "\\." + c, 0),
      l("selector-tag", "&", 0),
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        begin: ":(" + or.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + sr.join("|") + ")"
      },
      {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        contains: f
      },
      // argument list of parametric mixins
      { begin: "!important" },
      // eat !important after mixin call or it will be colored as tag
      t.FUNCTION_DISPATCH
    ]
  }, v = {
    begin: a + `:(:)?(${n.join("|")})`,
    returnBegin: !0,
    contains: [y]
  };
  return i.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    h,
    _,
    v,
    p,
    y,
    b,
    t.FUNCTION_DISPATCH
  ), {
    name: "Less",
    case_insensitive: !0,
    illegal: `[=>'/<($"]`,
    contains: i
  };
}
function Sa(e) {
  const t = "\\[=*\\[", n = "\\]=*\\]", r = {
    begin: t,
    end: n,
    contains: ["self"]
  }, a = [
    e.COMMENT("--(?!" + t + ")", "$"),
    e.COMMENT(
      "--" + t,
      n,
      {
        contains: [r],
        relevance: 10
      }
    )
  ];
  return {
    name: "Lua",
    keywords: {
      $pattern: e.UNDERSCORE_IDENT_RE,
      literal: "true false nil",
      keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in: (
        // Metatags and globals:
        "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
      )
    },
    contains: a.concat([
      {
        className: "function",
        beginKeywords: "function",
        end: "\\)",
        contains: [
          e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
          {
            className: "params",
            begin: "\\(",
            endsWithParent: !0,
            contains: a
          }
        ].concat(a)
      },
      e.C_NUMBER_MODE,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        className: "string",
        begin: t,
        end: n,
        contains: [r],
        relevance: 5
      }
    ])
  };
}
function Ta(e) {
  const t = {
    className: "variable",
    variants: [
      {
        begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
        contains: [e.BACKSLASH_ESCAPE]
      },
      { begin: /\$[@%<?\^\+\*]/ }
    ]
  }, n = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      t
    ]
  }, r = {
    className: "variable",
    begin: /\$\([\w-]+\s/,
    end: /\)/,
    keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
    contains: [t]
  }, a = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, c = {
    className: "meta",
    begin: /^\.PHONY:/,
    end: /$/,
    keywords: {
      $pattern: /[\.\w]+/,
      keyword: ".PHONY"
    }
  }, i = {
    className: "section",
    begin: /^[^\s]+:/,
    end: /$/,
    contains: [t]
  };
  return {
    name: "Makefile",
    aliases: [
      "mk",
      "mak",
      "make"
    ],
    keywords: {
      $pattern: /[\w-]+/,
      keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
    },
    contains: [
      e.HASH_COMMENT_MODE,
      t,
      n,
      r,
      a,
      c,
      i
    ]
  };
}
function xa(e) {
  const t = e.regex, n = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, r = {
    begin: "^[-\\*]{3,}",
    end: "$"
  }, a = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      { begin: "`.+?`" },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  }, c = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: !0
  }, i = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: !0,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: !0
      }
    ]
  }, s = /[A-Za-z][A-Za-z0-9+.-]*/, o = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: t.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: !0,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/
      },
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: !0,
        returnEnd: !0
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: !0,
        excludeEnd: !0
      }
    ]
  }, l = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      },
      {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }
    ]
  }, d = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?![*\s])/,
        end: /\*/
      },
      {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }
    ]
  }, u = e.inherit(l, { contains: [] }), f = e.inherit(d, { contains: [] });
  l.contains.push(f), d.contains.push(u);
  let b = [
    n,
    o
  ];
  return [
    l,
    d,
    u,
    f
  ].forEach((_) => {
    _.contains = _.contains.concat(b);
  }), b = b.concat(l, d), {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: b
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: b
              }
            ]
          }
        ]
      },
      n,
      c,
      l,
      d,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: b,
        end: "$"
      },
      a,
      r,
      o,
      i
    ]
  };
}
function Aa(e) {
  const t = {
    className: "built_in",
    begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
  }, n = /[a-zA-Z@][a-zA-Z0-9_]*/, s = {
    "variable.language": [
      "this",
      "super"
    ],
    $pattern: n,
    keyword: [
      "while",
      "export",
      "sizeof",
      "typedef",
      "const",
      "struct",
      "for",
      "union",
      "volatile",
      "static",
      "mutable",
      "if",
      "do",
      "return",
      "goto",
      "enum",
      "else",
      "break",
      "extern",
      "asm",
      "case",
      "default",
      "register",
      "explicit",
      "typename",
      "switch",
      "continue",
      "inline",
      "readonly",
      "assign",
      "readwrite",
      "self",
      "@synchronized",
      "id",
      "typeof",
      "nonatomic",
      "IBOutlet",
      "IBAction",
      "strong",
      "weak",
      "copy",
      "in",
      "out",
      "inout",
      "bycopy",
      "byref",
      "oneway",
      "__strong",
      "__weak",
      "__block",
      "__autoreleasing",
      "@private",
      "@protected",
      "@public",
      "@try",
      "@property",
      "@end",
      "@throw",
      "@catch",
      "@finally",
      "@autoreleasepool",
      "@synthesize",
      "@dynamic",
      "@selector",
      "@optional",
      "@required",
      "@encode",
      "@package",
      "@import",
      "@defs",
      "@compatibility_alias",
      "__bridge",
      "__bridge_transfer",
      "__bridge_retained",
      "__bridge_retain",
      "__covariant",
      "__contravariant",
      "__kindof",
      "_Nonnull",
      "_Nullable",
      "_Null_unspecified",
      "__FUNCTION__",
      "__PRETTY_FUNCTION__",
      "__attribute__",
      "getter",
      "setter",
      "retain",
      "unsafe_unretained",
      "nonnull",
      "nullable",
      "null_unspecified",
      "null_resettable",
      "class",
      "instancetype",
      "NS_DESIGNATED_INITIALIZER",
      "NS_UNAVAILABLE",
      "NS_REQUIRES_SUPER",
      "NS_RETURNS_INNER_POINTER",
      "NS_INLINE",
      "NS_AVAILABLE",
      "NS_DEPRECATED",
      "NS_ENUM",
      "NS_OPTIONS",
      "NS_SWIFT_UNAVAILABLE",
      "NS_ASSUME_NONNULL_BEGIN",
      "NS_ASSUME_NONNULL_END",
      "NS_REFINED_FOR_SWIFT",
      "NS_SWIFT_NAME",
      "NS_SWIFT_NOTHROW",
      "NS_DURING",
      "NS_HANDLER",
      "NS_ENDHANDLER",
      "NS_VALUERETURN",
      "NS_VOIDRETURN"
    ],
    literal: [
      "false",
      "true",
      "FALSE",
      "TRUE",
      "nil",
      "YES",
      "NO",
      "NULL"
    ],
    built_in: [
      "dispatch_once_t",
      "dispatch_queue_t",
      "dispatch_sync",
      "dispatch_async",
      "dispatch_once"
    ],
    type: [
      "int",
      "float",
      "char",
      "unsigned",
      "signed",
      "short",
      "long",
      "double",
      "wchar_t",
      "unichar",
      "void",
      "bool",
      "BOOL",
      "id|0",
      "_Bool"
    ]
  }, o = {
    $pattern: n,
    keyword: [
      "@interface",
      "@class",
      "@protocol",
      "@implementation"
    ]
  };
  return {
    name: "Objective-C",
    aliases: [
      "mm",
      "objc",
      "obj-c",
      "obj-c++",
      "objective-c++"
    ],
    keywords: s,
    illegal: "</",
    contains: [
      t,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      e.C_NUMBER_MODE,
      e.QUOTE_STRING_MODE,
      e.APOS_STRING_MODE,
      {
        className: "string",
        variants: [
          {
            begin: '@"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
          }
        ]
      },
      {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
          {
            className: "string",
            begin: /<.*?>/,
            end: /$/,
            illegal: "\\n"
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        className: "class",
        begin: "(" + o.keyword.join("|") + ")\\b",
        end: /(\{|$)/,
        excludeEnd: !0,
        keywords: o,
        contains: [e.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: "\\." + e.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };
}
function Ra(e) {
  const t = e.regex, n = [
    "abs",
    "accept",
    "alarm",
    "and",
    "atan2",
    "bind",
    "binmode",
    "bless",
    "break",
    "caller",
    "chdir",
    "chmod",
    "chomp",
    "chop",
    "chown",
    "chr",
    "chroot",
    "close",
    "closedir",
    "connect",
    "continue",
    "cos",
    "crypt",
    "dbmclose",
    "dbmopen",
    "defined",
    "delete",
    "die",
    "do",
    "dump",
    "each",
    "else",
    "elsif",
    "endgrent",
    "endhostent",
    "endnetent",
    "endprotoent",
    "endpwent",
    "endservent",
    "eof",
    "eval",
    "exec",
    "exists",
    "exit",
    "exp",
    "fcntl",
    "fileno",
    "flock",
    "for",
    "foreach",
    "fork",
    "format",
    "formline",
    "getc",
    "getgrent",
    "getgrgid",
    "getgrnam",
    "gethostbyaddr",
    "gethostbyname",
    "gethostent",
    "getlogin",
    "getnetbyaddr",
    "getnetbyname",
    "getnetent",
    "getpeername",
    "getpgrp",
    "getpriority",
    "getprotobyname",
    "getprotobynumber",
    "getprotoent",
    "getpwent",
    "getpwnam",
    "getpwuid",
    "getservbyname",
    "getservbyport",
    "getservent",
    "getsockname",
    "getsockopt",
    "given",
    "glob",
    "gmtime",
    "goto",
    "grep",
    "gt",
    "hex",
    "if",
    "index",
    "int",
    "ioctl",
    "join",
    "keys",
    "kill",
    "last",
    "lc",
    "lcfirst",
    "length",
    "link",
    "listen",
    "local",
    "localtime",
    "log",
    "lstat",
    "lt",
    "ma",
    "map",
    "mkdir",
    "msgctl",
    "msgget",
    "msgrcv",
    "msgsnd",
    "my",
    "ne",
    "next",
    "no",
    "not",
    "oct",
    "open",
    "opendir",
    "or",
    "ord",
    "our",
    "pack",
    "package",
    "pipe",
    "pop",
    "pos",
    "print",
    "printf",
    "prototype",
    "push",
    "q|0",
    "qq",
    "quotemeta",
    "qw",
    "qx",
    "rand",
    "read",
    "readdir",
    "readline",
    "readlink",
    "readpipe",
    "recv",
    "redo",
    "ref",
    "rename",
    "require",
    "reset",
    "return",
    "reverse",
    "rewinddir",
    "rindex",
    "rmdir",
    "say",
    "scalar",
    "seek",
    "seekdir",
    "select",
    "semctl",
    "semget",
    "semop",
    "send",
    "setgrent",
    "sethostent",
    "setnetent",
    "setpgrp",
    "setpriority",
    "setprotoent",
    "setpwent",
    "setservent",
    "setsockopt",
    "shift",
    "shmctl",
    "shmget",
    "shmread",
    "shmwrite",
    "shutdown",
    "sin",
    "sleep",
    "socket",
    "socketpair",
    "sort",
    "splice",
    "split",
    "sprintf",
    "sqrt",
    "srand",
    "stat",
    "state",
    "study",
    "sub",
    "substr",
    "symlink",
    "syscall",
    "sysopen",
    "sysread",
    "sysseek",
    "system",
    "syswrite",
    "tell",
    "telldir",
    "tie",
    "tied",
    "time",
    "times",
    "tr",
    "truncate",
    "uc",
    "ucfirst",
    "umask",
    "undef",
    "unless",
    "unlink",
    "unpack",
    "unshift",
    "untie",
    "until",
    "use",
    "utime",
    "values",
    "vec",
    "wait",
    "waitpid",
    "wantarray",
    "warn",
    "when",
    "while",
    "write",
    "x|0",
    "xor",
    "y|0"
  ], r = /[dualxmsipngr]{0,12}/, a = {
    $pattern: /[\w.]+/,
    keyword: n.join(" ")
  }, c = {
    className: "subst",
    begin: "[$@]\\{",
    end: "\\}",
    keywords: a
  }, i = {
    begin: /->\{/,
    end: /\}/
    // contains defined later
  }, s = { variants: [
    { begin: /\$\d/ },
    { begin: t.concat(
      /[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
      // negative look-ahead tries to avoid matching patterns that are not
      // Perl at all like $ident$, @ident@, etc.
      "(?![A-Za-z])(?![@$%])"
    ) },
    {
      begin: /[$%@][^\s\w{]/,
      relevance: 0
    }
  ] }, o = [
    e.BACKSLASH_ESCAPE,
    c,
    s
  ], l = [
    /!/,
    /\//,
    /\|/,
    /\?/,
    /'/,
    /"/,
    // valid but infrequent and weird
    /#/
    // valid but infrequent and weird
  ], d = (b, p, h = "\\1") => {
    const _ = h === "\\1" ? h : t.concat(h, p);
    return t.concat(
      t.concat("(?:", b, ")"),
      p,
      /(?:\\.|[^\\\/])*?/,
      _,
      /(?:\\.|[^\\\/])*?/,
      h,
      r
    );
  }, u = (b, p, h) => t.concat(
    t.concat("(?:", b, ")"),
    p,
    /(?:\\.|[^\\\/])*?/,
    h,
    r
  ), f = [
    s,
    e.HASH_COMMENT_MODE,
    e.COMMENT(
      /^=\w/,
      /=cut/,
      { endsWithParent: !0 }
    ),
    i,
    {
      className: "string",
      contains: o,
      variants: [
        {
          begin: "q[qwxr]?\\s*\\(",
          end: "\\)",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\[",
          end: "\\]",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\{",
          end: "\\}",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\|",
          end: "\\|",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*<",
          end: ">",
          relevance: 5
        },
        {
          begin: "qw\\s+q",
          end: "q",
          relevance: 5
        },
        {
          begin: "'",
          end: "'",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "`",
          end: "`",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: /\{\w+\}/,
          relevance: 0
        },
        {
          begin: "-?\\w+\\s*=>",
          relevance: 0
        }
      ]
    },
    {
      className: "number",
      begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      relevance: 0
    },
    {
      // regexp container
      begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
      keywords: "split return print reverse grep",
      relevance: 0,
      contains: [
        e.HASH_COMMENT_MODE,
        {
          className: "regexp",
          variants: [
            // allow matching common delimiters
            { begin: d("s|tr|y", t.either(...l, { capture: !0 })) },
            // and then paired delmis
            { begin: d("s|tr|y", "\\(", "\\)") },
            { begin: d("s|tr|y", "\\[", "\\]") },
            { begin: d("s|tr|y", "\\{", "\\}") }
          ],
          relevance: 2
        },
        {
          className: "regexp",
          variants: [
            {
              // could be a comment in many languages so do not count
              // as relevant
              begin: /(m|qr)\/\//,
              relevance: 0
            },
            // prefix is optional with /regex/
            { begin: u("(?:m|qr)?", /\//, /\//) },
            // allow matching common delimiters
            { begin: u("m|qr", t.either(...l, { capture: !0 }), /\1/) },
            // allow common paired delmins
            { begin: u("m|qr", /\(/, /\)/) },
            { begin: u("m|qr", /\[/, /\]/) },
            { begin: u("m|qr", /\{/, /\}/) }
          ]
        }
      ]
    },
    {
      className: "function",
      beginKeywords: "sub",
      end: "(\\s*\\(.*?\\))?[;{]",
      excludeEnd: !0,
      relevance: 5,
      contains: [e.TITLE_MODE]
    },
    {
      begin: "-\\w\\b",
      relevance: 0
    },
    {
      begin: "^__DATA__$",
      end: "^__END__$",
      subLanguage: "mojolicious",
      contains: [
        {
          begin: "^@@.*",
          end: "$",
          className: "comment"
        }
      ]
    }
  ];
  return c.contains = f, i.contains = f, {
    name: "Perl",
    aliases: [
      "pl",
      "pm"
    ],
    keywords: a,
    contains: f
  };
}
function Oa(e) {
  const t = e.regex, n = /(?![A-Za-z0-9])(?![$])/, r = t.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    n
  ), a = t.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    n
  ), c = {
    scope: "variable",
    match: "\\$+" + r
  }, i = {
    scope: "meta",
    variants: [
      { begin: /<\?php/, relevance: 10 },
      // boost for obvious PHP
      { begin: /<\?=/ },
      // less relevant per PSR-1 which says not to use short-tags
      { begin: /<\?/, relevance: 0.1 },
      { begin: /\?>/ }
      // end php tag
    ]
  }, s = {
    scope: "subst",
    variants: [
      { begin: /\$\w+/ },
      {
        begin: /\{\$/,
        end: /\}/
      }
    ]
  }, o = e.inherit(e.APOS_STRING_MODE, { illegal: null }), l = e.inherit(e.QUOTE_STRING_MODE, {
    illegal: null,
    contains: e.QUOTE_STRING_MODE.contains.concat(s)
  }), d = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(s),
    "on:begin": (K, G) => {
      G.data._beginMatch = K[1] || K[2];
    },
    "on:end": (K, G) => {
      G.data._beginMatch !== K[1] && G.ignoreMatch();
    }
  }, u = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), f = `[ 	
]`, b = {
    scope: "string",
    variants: [
      l,
      o,
      d,
      u
    ]
  }, p = {
    scope: "number",
    variants: [
      { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
      // Binary w/ underscore support
      { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
      // Octals w/ underscore support
      { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
      // Hex w/ underscore support
      // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
      { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
    ],
    relevance: 0
  }, h = [
    "false",
    "null",
    "true"
  ], _ = [
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    "__CLASS__",
    "__DIR__",
    "__FILE__",
    "__FUNCTION__",
    "__COMPILER_HALT_OFFSET__",
    "__LINE__",
    "__METHOD__",
    "__NAMESPACE__",
    "__TRAIT__",
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    "die",
    "echo",
    "exit",
    "include",
    "include_once",
    "print",
    "require",
    "require_once",
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    "array",
    "abstract",
    "and",
    "as",
    "binary",
    "bool",
    "boolean",
    "break",
    "callable",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "do",
    "double",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "enum",
    "eval",
    "extends",
    "final",
    "finally",
    "float",
    "for",
    "foreach",
    "from",
    "global",
    "goto",
    "if",
    "implements",
    "instanceof",
    "insteadof",
    "int",
    "integer",
    "interface",
    "isset",
    "iterable",
    "list",
    "match|0",
    "mixed",
    "new",
    "never",
    "object",
    "or",
    "private",
    "protected",
    "public",
    "readonly",
    "real",
    "return",
    "string",
    "switch",
    "throw",
    "trait",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield"
  ], y = [
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    "Error|0",
    "AppendIterator",
    "ArgumentCountError",
    "ArithmeticError",
    "ArrayIterator",
    "ArrayObject",
    "AssertionError",
    "BadFunctionCallException",
    "BadMethodCallException",
    "CachingIterator",
    "CallbackFilterIterator",
    "CompileError",
    "Countable",
    "DirectoryIterator",
    "DivisionByZeroError",
    "DomainException",
    "EmptyIterator",
    "ErrorException",
    "Exception",
    "FilesystemIterator",
    "FilterIterator",
    "GlobIterator",
    "InfiniteIterator",
    "InvalidArgumentException",
    "IteratorIterator",
    "LengthException",
    "LimitIterator",
    "LogicException",
    "MultipleIterator",
    "NoRewindIterator",
    "OutOfBoundsException",
    "OutOfRangeException",
    "OuterIterator",
    "OverflowException",
    "ParentIterator",
    "ParseError",
    "RangeException",
    "RecursiveArrayIterator",
    "RecursiveCachingIterator",
    "RecursiveCallbackFilterIterator",
    "RecursiveDirectoryIterator",
    "RecursiveFilterIterator",
    "RecursiveIterator",
    "RecursiveIteratorIterator",
    "RecursiveRegexIterator",
    "RecursiveTreeIterator",
    "RegexIterator",
    "RuntimeException",
    "SeekableIterator",
    "SplDoublyLinkedList",
    "SplFileInfo",
    "SplFileObject",
    "SplFixedArray",
    "SplHeap",
    "SplMaxHeap",
    "SplMinHeap",
    "SplObjectStorage",
    "SplObserver",
    "SplPriorityQueue",
    "SplQueue",
    "SplStack",
    "SplSubject",
    "SplTempFileObject",
    "TypeError",
    "UnderflowException",
    "UnexpectedValueException",
    "UnhandledMatchError",
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    "ArrayAccess",
    "BackedEnum",
    "Closure",
    "Fiber",
    "Generator",
    "Iterator",
    "IteratorAggregate",
    "Serializable",
    "Stringable",
    "Throwable",
    "Traversable",
    "UnitEnum",
    "WeakReference",
    "WeakMap",
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    "Directory",
    "__PHP_Incomplete_Class",
    "parent",
    "php_user_filter",
    "self",
    "static",
    "stdClass"
  ], T = {
    keyword: _,
    literal: ((K) => {
      const G = [];
      return K.forEach((Q) => {
        G.push(Q), Q.toLowerCase() === Q ? G.push(Q.toUpperCase()) : G.push(Q.toLowerCase());
      }), G;
    })(h),
    built_in: y
  }, A = (K) => K.map((G) => G.replace(/\|\d+$/, "")), M = { variants: [
    {
      match: [
        /new/,
        t.concat(f, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", A(y).join("\\b|"), "\\b)"),
        a
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, O = t.concat(r, "\\b(?!\\()"), B = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        O
      ],
      scope: { 2: "variable.constant" }
    },
    {
      match: [
        /::/,
        /class/
      ],
      scope: { 2: "variable.language" }
    },
    {
      match: [
        a,
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        O
      ],
      scope: {
        1: "title.class",
        3: "variable.constant"
      }
    },
    {
      match: [
        a,
        t.concat(
          "::",
          t.lookahead(/(?!class\b)/)
        )
      ],
      scope: { 1: "title.class" }
    },
    {
      match: [
        a,
        /::/,
        /class/
      ],
      scope: {
        1: "title.class",
        3: "variable.language"
      }
    }
  ] }, j = {
    scope: "attr",
    match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, Z = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: T,
    contains: [
      j,
      c,
      B,
      e.C_BLOCK_COMMENT_MODE,
      b,
      p,
      M
    ]
  }, m = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", A(_).join("\\b|"), "|", A(y).join("\\b|"), "\\b)"),
      r,
      t.concat(f, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [Z]
  };
  Z.contains.push(m);
  const ne = [
    j,
    B,
    e.C_BLOCK_COMMENT_MODE,
    b,
    p,
    M
  ], se = {
    begin: t.concat(/#\[\s*/, a),
    beginScope: "meta",
    end: /]/,
    endScope: "meta",
    keywords: {
      literal: h,
      keyword: [
        "new",
        "array"
      ]
    },
    contains: [
      {
        begin: /\[/,
        end: /]/,
        keywords: {
          literal: h,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...ne
        ]
      },
      ...ne,
      {
        scope: "meta",
        match: a
      }
    ]
  };
  return {
    case_insensitive: !1,
    keywords: T,
    contains: [
      se,
      e.HASH_COMMENT_MODE,
      e.COMMENT("//", "$"),
      e.COMMENT(
        "/\\*",
        "\\*/",
        { contains: [
          {
            scope: "doctag",
            match: "@[A-Za-z]+"
          }
        ] }
      ),
      {
        match: /__halt_compiler\(\);/,
        keywords: "__halt_compiler",
        starts: {
          scope: "comment",
          end: e.MATCH_NOTHING_RE,
          contains: [
            {
              match: /\?>/,
              scope: "meta",
              endsParent: !0
            }
          ]
        }
      },
      i,
      {
        scope: "variable.language",
        match: /\$this\b/
      },
      c,
      m,
      B,
      {
        match: [
          /const/,
          /\s/,
          r
        ],
        scope: {
          1: "keyword",
          3: "variable.constant"
        }
      },
      M,
      {
        scope: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [
          { beginKeywords: "use" },
          e.UNDERSCORE_TITLE_MODE,
          {
            begin: "=>",
            // No markup, just a relevance booster
            endsParent: !0
          },
          {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: T,
            contains: [
              "self",
              c,
              B,
              e.C_BLOCK_COMMENT_MODE,
              b,
              p
            ]
          }
        ]
      },
      {
        scope: "class",
        variants: [
          {
            beginKeywords: "enum",
            illegal: /[($"]/
          },
          {
            beginKeywords: "class interface trait",
            illegal: /[:($"]/
          }
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [
          { beginKeywords: "extends implements" },
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      // both use and namespace still use "old style" rules (vs multi-match)
      // because the namespace name can include `\` and we still want each
      // element to be treated as its own *individual* title
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [
          // TODO: title.function vs title.class
          {
            match: /\b(as|const|function)\b/,
            scope: "keyword"
          },
          // TODO: could be title.class or title.function
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      b,
      p
    ]
  };
}
function Ca(e) {
  return {
    name: "PHP template",
    subLanguage: "xml",
    contains: [
      {
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: "php",
        contains: [
          // We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {
            begin: "/\\*",
            end: "\\*/",
            skip: !0
          },
          {
            begin: 'b"',
            end: '"',
            skip: !0
          },
          {
            begin: "b'",
            end: "'",
            skip: !0
          },
          e.inherit(e.APOS_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0
          }),
          e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0
          })
        ]
      }
    ]
  };
}
function Ma(e) {
  return {
    name: "Plain text",
    aliases: [
      "text",
      "txt"
    ],
    disableAutodetect: !0
  };
}
function Ia(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), r = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], s = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: r,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, o = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, l = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: s,
    illegal: /#/
  }, d = {
    begin: /\{\{/,
    relevance: 0
  }, u = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          o
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          o
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          o,
          d,
          l
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          o,
          d,
          l
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          l
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          l
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, f = "[0-9](_?[0-9])*", b = `(\\b(${f}))?\\.(${f})|\\b(${f})\\.`, p = `\\b|${r.join("|")}`, h = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${f})|(${b}))[eE][+-]?(${f})[jJ]?(?=${p})`
      },
      {
        begin: `(${b})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${p})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${p})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${p})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${p})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${f})[jJ](?=${p})`
      }
    ]
  }, _ = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: s,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, y = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: s,
        contains: [
          "self",
          o,
          h,
          u,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return l.contains = [
    u,
    h,
    o
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: s,
    illegal: /(<\/|\?)|=>/,
    contains: [
      o,
      h,
      {
        // very common convention
        begin: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      u,
      _,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [y]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          h,
          y,
          u
        ]
      }
    ]
  };
}
function Da(e) {
  return {
    aliases: ["pycon"],
    contains: [
      {
        className: "meta.prompt",
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: "$",
            subLanguage: "python"
          }
        },
        variants: [
          { begin: /^>>>(?=[ ]|$)/ },
          { begin: /^\.\.\.(?=[ ]|$)/ }
        ]
      }
    ]
  };
}
function La(e) {
  const t = e.regex, n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, r = t.either(
    // Special case: only hexadecimal binary powers can contain fractions
    /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
    // Hexadecimal numbers without fraction and optional binary power
    /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
    // Decimal numbers
    /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
  ), a = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, c = t.either(
    /[()]/,
    /[{}]/,
    /\[\[/,
    /[[\]]/,
    /\\/,
    /,/
  );
  return {
    name: "R",
    keywords: {
      $pattern: n,
      keyword: "function if in break next repeat else for while",
      literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
      built_in: (
        // Builtin constants
        "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
      )
    },
    contains: [
      // Roxygen comments
      e.COMMENT(
        /#'/,
        /$/,
        { contains: [
          {
            // Handle `@examples` separately to cause all subsequent code
            // until the next `@`-tag on its own line to be kept as-is,
            // preventing highlighting. This code is example R code, so nested
            // doctags shouldn’t be treated as such. See
            // `test/markup/r/roxygen.txt` for an example.
            scope: "doctag",
            match: /@examples/,
            starts: {
              end: t.lookahead(t.either(
                // end if another doc comment
                /\n^#'\s*(?=@[a-zA-Z]+)/,
                // or a line with no comment
                /\n^(?!#')/
              )),
              endsParent: !0
            }
          },
          {
            // Handle `@param` to highlight the parameter name following
            // after.
            scope: "doctag",
            begin: "@param",
            end: /$/,
            contains: [
              {
                scope: "variable",
                variants: [
                  { match: n },
                  { match: /`(?:\\.|[^`\\])+`/ }
                ],
                endsParent: !0
              }
            ]
          },
          {
            scope: "doctag",
            match: /@[a-zA-Z]+/
          },
          {
            scope: "keyword",
            match: /\\[a-zA-Z]+/
          }
        ] }
      ),
      e.HASH_COMMENT_MODE,
      {
        scope: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\(/,
            end: /\)(-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\{/,
            end: /\}(-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\[/,
            end: /\](-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\(/,
            end: /\)(-*)'/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\{/,
            end: /\}(-*)'/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\[/,
            end: /\](-*)'/
          }),
          {
            begin: '"',
            end: '"',
            relevance: 0
          },
          {
            begin: "'",
            end: "'",
            relevance: 0
          }
        ]
      },
      // Matching numbers immediately following punctuation and operators is
      // tricky since we need to look at the character ahead of a number to
      // ensure the number is not part of an identifier, and we cannot use
      // negative look-behind assertions. So instead we explicitly handle all
      // possible combinations of (operator|punctuation), number.
      // TODO: replace with negative look-behind when available
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
      // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
      {
        relevance: 0,
        variants: [
          {
            scope: {
              1: "operator",
              2: "number"
            },
            match: [
              a,
              r
            ]
          },
          {
            scope: {
              1: "operator",
              2: "number"
            },
            match: [
              /%[^%]*%/,
              r
            ]
          },
          {
            scope: {
              1: "punctuation",
              2: "number"
            },
            match: [
              c,
              r
            ]
          },
          {
            scope: { 2: "number" },
            match: [
              /[^a-zA-Z0-9._]|^/,
              // not part of an identifier, or start of document
              r
            ]
          }
        ]
      },
      // Operators/punctuation when they're not directly followed by numbers
      {
        // Relevance boost for the most common assignment form.
        scope: { 3: "operator" },
        match: [
          n,
          /\s+/,
          /<-/,
          /\s+/
        ]
      },
      {
        scope: "operator",
        relevance: 0,
        variants: [
          { match: a },
          { match: /%[^%]*%/ }
        ]
      },
      {
        scope: "punctuation",
        relevance: 0,
        match: c
      },
      {
        // Escaped identifier
        begin: "`",
        end: "`",
        contains: [{ begin: /\\./ }]
      }
    ]
  };
}
function Pa(e) {
  const t = e.regex, n = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", r = t.either(
    /\b([A-Z]+[a-z0-9]+)+/,
    // ends in caps
    /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
  ), a = t.concat(r, /(::\w+)*/), i = {
    "variable.constant": [
      "__FILE__",
      "__LINE__",
      "__ENCODING__"
    ],
    "variable.language": [
      "self",
      "super"
    ],
    keyword: [
      "alias",
      "and",
      "begin",
      "BEGIN",
      "break",
      "case",
      "class",
      "defined",
      "do",
      "else",
      "elsif",
      "end",
      "END",
      "ensure",
      "for",
      "if",
      "in",
      "module",
      "next",
      "not",
      "or",
      "redo",
      "require",
      "rescue",
      "retry",
      "return",
      "then",
      "undef",
      "unless",
      "until",
      "when",
      "while",
      "yield",
      ...[
        "include",
        "extend",
        "prepend",
        "public",
        "private",
        "protected",
        "raise",
        "throw"
      ]
    ],
    built_in: [
      "proc",
      "lambda",
      "attr_accessor",
      "attr_reader",
      "attr_writer",
      "define_method",
      "private_constant",
      "module_function"
    ],
    literal: [
      "true",
      "false",
      "nil"
    ]
  }, s = {
    className: "doctag",
    begin: "@[A-Za-z]+"
  }, o = {
    begin: "#<",
    end: ">"
  }, l = [
    e.COMMENT(
      "#",
      "$",
      { contains: [s] }
    ),
    e.COMMENT(
      "^=begin",
      "^=end",
      {
        contains: [s],
        relevance: 10
      }
    ),
    e.COMMENT("^__END__", e.MATCH_NOTHING_RE)
  ], d = {
    className: "subst",
    begin: /#\{/,
    end: /\}/,
    keywords: i
  }, u = {
    className: "string",
    contains: [
      e.BACKSLASH_ESCAPE,
      d
    ],
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /`/,
        end: /`/
      },
      {
        begin: /%[qQwWx]?\(/,
        end: /\)/
      },
      {
        begin: /%[qQwWx]?\[/,
        end: /\]/
      },
      {
        begin: /%[qQwWx]?\{/,
        end: /\}/
      },
      {
        begin: /%[qQwWx]?</,
        end: />/
      },
      {
        begin: /%[qQwWx]?\//,
        end: /\//
      },
      {
        begin: /%[qQwWx]?%/,
        end: /%/
      },
      {
        begin: /%[qQwWx]?-/,
        end: /-/
      },
      {
        begin: /%[qQwWx]?\|/,
        end: /\|/
      },
      // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
      // where ? is the last character of a preceding identifier, as in: `func?4`
      { begin: /\B\?(\\\d{1,3})/ },
      { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
      { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
      { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
      { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
      { begin: /\B\?\\?\S/ },
      // heredocs
      {
        // this guard makes sure that we have an entire heredoc and not a false
        // positive (auto-detect, etc.)
        begin: t.concat(
          /<<[-~]?'?/,
          t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
        ),
        contains: [
          e.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [
              e.BACKSLASH_ESCAPE,
              d
            ]
          })
        ]
      }
    ]
  }, f = "[1-9](_?[0-9])*|0", b = "[0-9](_?[0-9])*", p = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal integer/float, optionally exponential or rational, optionally imaginary
      { begin: `\\b(${f})(\\.(${b}))?([eE][+-]?(${b})|r)?i?\\b` },
      // explicit decimal/binary/octal/hexadecimal integer,
      // optionally rational and/or imaginary
      { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
      // 0-prefixed implicit octal integer, optionally rational and/or imaginary
      { begin: "\\b0(_?[0-7])+r?i?\\b" }
    ]
  }, h = {
    variants: [
      {
        match: /\(\)/
      },
      {
        className: "params",
        begin: /\(/,
        end: /(?=\))/,
        excludeBegin: !0,
        endsParent: !0,
        keywords: i
      }
    ]
  }, O = [
    u,
    {
      variants: [
        {
          match: [
            /class\s+/,
            a,
            /\s+<\s+/,
            a
          ]
        },
        {
          match: [
            /\b(class|module)\s+/,
            a
          ]
        }
      ],
      scope: {
        2: "title.class",
        4: "title.class.inherited"
      },
      keywords: i
    },
    {
      match: [
        /(include|extend)\s+/,
        a
      ],
      scope: {
        2: "title.class"
      },
      keywords: i
    },
    {
      relevance: 0,
      match: [
        a,
        /\.new[. (]/
      ],
      scope: {
        1: "title.class"
      }
    },
    {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    },
    {
      relevance: 0,
      match: r,
      scope: "title.class"
    },
    {
      match: [
        /def/,
        /\s+/,
        n
      ],
      scope: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        h
      ]
    },
    {
      // swallow namespace qualifiers before symbols
      begin: e.IDENT_RE + "::"
    },
    {
      className: "symbol",
      begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
      relevance: 0
    },
    {
      className: "symbol",
      begin: ":(?!\\s)",
      contains: [
        u,
        { begin: n }
      ],
      relevance: 0
    },
    p,
    {
      // negative-look forward attempts to prevent false matches like:
      // @ident@ or $ident$ that might indicate this is not ruby at all
      className: "variable",
      begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
    },
    {
      className: "params",
      begin: /\|/,
      end: /\|/,
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0,
      // this could be a lot of things (in other languages) other than params
      keywords: i
    },
    {
      // regexp container
      begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
      keywords: "unless",
      contains: [
        {
          className: "regexp",
          contains: [
            e.BACKSLASH_ESCAPE,
            d
          ],
          illegal: /\n/,
          variants: [
            {
              begin: "/",
              end: "/[a-z]*"
            },
            {
              begin: /%r\{/,
              end: /\}[a-z]*/
            },
            {
              begin: "%r\\(",
              end: "\\)[a-z]*"
            },
            {
              begin: "%r!",
              end: "![a-z]*"
            },
            {
              begin: "%r\\[",
              end: "\\][a-z]*"
            }
          ]
        }
      ].concat(o, l),
      relevance: 0
    }
  ].concat(o, l);
  d.contains = O, h.contains = O;
  const m = [
    {
      begin: /^\s*=>/,
      starts: {
        end: "$",
        contains: O
      }
    },
    {
      className: "meta.prompt",
      begin: "^(" + "[>?]>" + "|" + "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]" + "|" + "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>" + ")(?=[ ])",
      starts: {
        end: "$",
        keywords: i,
        contains: O
      }
    }
  ];
  return l.unshift(o), {
    name: "Ruby",
    aliases: [
      "rb",
      "gemspec",
      "podspec",
      "thor",
      "irb"
    ],
    keywords: i,
    illegal: /\/\*/,
    contains: [e.SHEBANG({ binary: "ruby" })].concat(m).concat(l).concat(O)
  };
}
function Ba(e) {
  const t = e.regex, n = {
    className: "title.function.invoke",
    relevance: 0,
    begin: t.concat(
      /\b/,
      /(?!let|for|while|if|else|match\b)/,
      e.IDENT_RE,
      t.lookahead(/\s*\(/)
    )
  }, r = "([ui](8|16|32|64|128|size)|f(32|64))?", a = [
    "abstract",
    "as",
    "async",
    "await",
    "become",
    "box",
    "break",
    "const",
    "continue",
    "crate",
    "do",
    "dyn",
    "else",
    "enum",
    "extern",
    "false",
    "final",
    "fn",
    "for",
    "if",
    "impl",
    "in",
    "let",
    "loop",
    "macro",
    "match",
    "mod",
    "move",
    "mut",
    "override",
    "priv",
    "pub",
    "ref",
    "return",
    "self",
    "Self",
    "static",
    "struct",
    "super",
    "trait",
    "true",
    "try",
    "type",
    "typeof",
    "unsafe",
    "unsized",
    "use",
    "virtual",
    "where",
    "while",
    "yield"
  ], c = [
    "true",
    "false",
    "Some",
    "None",
    "Ok",
    "Err"
  ], i = [
    // functions
    "drop ",
    // traits
    "Copy",
    "Send",
    "Sized",
    "Sync",
    "Drop",
    "Fn",
    "FnMut",
    "FnOnce",
    "ToOwned",
    "Clone",
    "Debug",
    "PartialEq",
    "PartialOrd",
    "Eq",
    "Ord",
    "AsRef",
    "AsMut",
    "Into",
    "From",
    "Default",
    "Iterator",
    "Extend",
    "IntoIterator",
    "DoubleEndedIterator",
    "ExactSizeIterator",
    "SliceConcatExt",
    "ToString",
    // macros
    "assert!",
    "assert_eq!",
    "bitflags!",
    "bytes!",
    "cfg!",
    "col!",
    "concat!",
    "concat_idents!",
    "debug_assert!",
    "debug_assert_eq!",
    "env!",
    "eprintln!",
    "panic!",
    "file!",
    "format!",
    "format_args!",
    "include_bytes!",
    "include_str!",
    "line!",
    "local_data_key!",
    "module_path!",
    "option_env!",
    "print!",
    "println!",
    "select!",
    "stringify!",
    "try!",
    "unimplemented!",
    "unreachable!",
    "vec!",
    "write!",
    "writeln!",
    "macro_rules!",
    "assert_ne!",
    "debug_assert_ne!"
  ], s = [
    "i8",
    "i16",
    "i32",
    "i64",
    "i128",
    "isize",
    "u8",
    "u16",
    "u32",
    "u64",
    "u128",
    "usize",
    "f32",
    "f64",
    "str",
    "char",
    "bool",
    "Box",
    "Option",
    "Result",
    "String",
    "Vec"
  ];
  return {
    name: "Rust",
    aliases: ["rs"],
    keywords: {
      $pattern: e.IDENT_RE + "!?",
      type: s,
      keyword: a,
      literal: c,
      built_in: i
    },
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
      e.inherit(e.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }),
      {
        className: "string",
        variants: [
          { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
          { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
        ]
      },
      {
        className: "symbol",
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
      },
      {
        className: "number",
        variants: [
          { begin: "\\b0b([01_]+)" + r },
          { begin: "\\b0o([0-7_]+)" + r },
          { begin: "\\b0x([A-Fa-f0-9_]+)" + r },
          { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + r }
        ],
        relevance: 0
      },
      {
        begin: [
          /fn/,
          /\s+/,
          e.UNDERSCORE_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "title.function"
        }
      },
      {
        className: "meta",
        begin: "#!?\\[",
        end: "\\]",
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/
          }
        ]
      },
      {
        begin: [
          /let/,
          /\s+/,
          /(?:mut\s+)?/,
          e.UNDERSCORE_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "keyword",
          4: "variable"
        }
      },
      // must come before impl/for rule later
      {
        begin: [
          /for/,
          /\s+/,
          e.UNDERSCORE_IDENT_RE,
          /\s+/,
          /in/
        ],
        className: {
          1: "keyword",
          3: "variable",
          5: "keyword"
        }
      },
      {
        begin: [
          /type/,
          /\s+/,
          e.UNDERSCORE_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: [
          /(?:trait|enum|struct|union|impl|for)/,
          /\s+/,
          e.UNDERSCORE_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: e.IDENT_RE + "::",
        keywords: {
          keyword: "Self",
          built_in: i,
          type: s
        }
      },
      {
        className: "punctuation",
        begin: "->"
      },
      n
    ]
  };
}
const Fa = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), Ua = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "p",
  "q",
  "quote",
  "samp",
  "section",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], $a = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
], za = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
], Ka = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
], Ga = [
  "align-content",
  "align-items",
  "align-self",
  "all",
  "animation",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-timing-function",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-repeat",
  "background-size",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-decoration-break",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "direction",
  "display",
  "empty-cells",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-size",
  "font-size-adjust",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-variant",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "gap",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "inline-size",
  "isolation",
  "justify-content",
  "left",
  "letter-spacing",
  "line-break",
  "line-height",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "pointer-events",
  "position",
  "quotes",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "row-gap",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-transform",
  "text-underline-position",
  "top",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "unicode-bidi",
  "vertical-align",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "z-index"
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();
function Ha(e) {
  const t = Fa(e), n = Ka, r = za, a = "@[a-z-]+", c = "and or not only", s = {
    className: "variable",
    begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
    relevance: 0
  };
  return {
    name: "SCSS",
    case_insensitive: !0,
    illegal: "[=/|']",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      t.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: "#[A-Za-z0-9_-]+",
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\.[A-Za-z0-9_-]+",
        relevance: 0
      },
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-tag",
        begin: "\\b(" + Ua.join("|") + ")\\b",
        // was there, before, but why?
        relevance: 0
      },
      {
        className: "selector-pseudo",
        begin: ":(" + r.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + n.join("|") + ")"
      },
      s,
      {
        // pseudo-selector params
        begin: /\(/,
        end: /\)/,
        contains: [t.CSS_NUMBER_MODE]
      },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Ga.join("|") + ")\\b"
      },
      { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
      {
        begin: /:/,
        end: /[;}{]/,
        relevance: 0,
        contains: [
          t.BLOCK_COMMENT,
          s,
          t.HEXCOLOR,
          t.CSS_NUMBER_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          t.IMPORTANT,
          t.FUNCTION_DISPATCH
        ]
      },
      // matching these here allows us to treat them more like regular CSS
      // rules so everything between the {} gets regular rule highlighting,
      // which is what we want for page and font-face
      {
        begin: "@(page|font-face)",
        keywords: {
          $pattern: a,
          keyword: "@page @font-face"
        }
      },
      {
        begin: "@",
        end: "[{;]",
        returnBegin: !0,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: c,
          attribute: $a.join(" ")
        },
        contains: [
          {
            begin: a,
            className: "keyword"
          },
          {
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          },
          s,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          t.HEXCOLOR,
          t.CSS_NUMBER_MODE
        ]
      },
      t.FUNCTION_DISPATCH
    ]
  };
}
function qa(e) {
  return {
    name: "Shell Session",
    aliases: [
      "console",
      "shellsession"
    ],
    contains: [
      {
        className: "meta.prompt",
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }
    ]
  };
}
function Wa(e) {
  const t = e.regex, n = e.COMMENT("--", "$"), r = {
    className: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [{ begin: /''/ }]
      }
    ]
  }, a = {
    begin: /"/,
    end: /"/,
    contains: [{ begin: /""/ }]
  }, c = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ], i = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ], s = [
    "bigint",
    "binary",
    "blob",
    "boolean",
    "char",
    "character",
    "clob",
    "date",
    "dec",
    "decfloat",
    "decimal",
    "float",
    "int",
    "integer",
    "interval",
    "nchar",
    "nclob",
    "national",
    "numeric",
    "real",
    "row",
    "smallint",
    "time",
    "timestamp",
    "varchar",
    "varying",
    // modifier (character varying)
    "varbinary"
  ], o = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ], l = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year"
  ], d = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket"
  ], u = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ], f = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ], b = d, p = [
    ...l,
    ...o
  ].filter((T) => !d.includes(T)), h = {
    className: "variable",
    begin: /@[a-z0-9][a-z0-9_]*/
  }, _ = {
    className: "operator",
    begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, y = {
    begin: t.concat(/\b/, t.either(...b), /\s*\(/),
    relevance: 0,
    keywords: { built_in: b }
  };
  function v(T, {
    exceptions: A,
    when: M
  } = {}) {
    const O = M;
    return A = A || [], T.map((B) => B.match(/\|\d+$/) || A.includes(B) ? B : O(B) ? `${B}|0` : B);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: v(p, { when: (T) => T.length < 3 }),
      literal: c,
      type: s,
      built_in: u
    },
    contains: [
      {
        begin: t.either(...f),
        relevance: 0,
        keywords: {
          $pattern: /[\w\.]+/,
          keyword: p.concat(f),
          literal: c,
          type: s
        }
      },
      {
        className: "type",
        begin: t.either(...i)
      },
      y,
      h,
      r,
      a,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      n,
      _
    ]
  };
}
function cr(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function bt(e) {
  return V("(?=", e, ")");
}
function V(...e) {
  return e.map((n) => cr(n)).join("");
}
function Ya(e) {
  const t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function de(...e) {
  return "(" + (Ya(e).capture ? "" : "?:") + e.map((r) => cr(r)).join("|") + ")";
}
const Qt = (e) => V(
  /\b/,
  e,
  /\w$/.test(e) ? /\b/ : /\B/
), Za = [
  "Protocol",
  // contextual
  "Type"
  // contextual
].map(Qt), Tn = [
  "init",
  "self"
].map(Qt), Va = [
  "Any",
  "Self"
], Lt = [
  // strings below will be fed into the regular `keywords` engine while regex
  // will result in additional modes being created to scan for those keywords to
  // avoid conflicts with other rules
  "actor",
  "any",
  // contextual
  "associatedtype",
  "async",
  "await",
  /as\?/,
  // operator
  /as!/,
  // operator
  "as",
  // operator
  "borrowing",
  // contextual
  "break",
  "case",
  "catch",
  "class",
  "consume",
  // contextual
  "consuming",
  // contextual
  "continue",
  "convenience",
  // contextual
  "copy",
  // contextual
  "default",
  "defer",
  "deinit",
  "didSet",
  // contextual
  "distributed",
  "do",
  "dynamic",
  // contextual
  "each",
  "else",
  "enum",
  "extension",
  "fallthrough",
  /fileprivate\(set\)/,
  "fileprivate",
  "final",
  // contextual
  "for",
  "func",
  "get",
  // contextual
  "guard",
  "if",
  "import",
  "indirect",
  // contextual
  "infix",
  // contextual
  /init\?/,
  /init!/,
  "inout",
  /internal\(set\)/,
  "internal",
  "in",
  "is",
  // operator
  "isolated",
  // contextual
  "nonisolated",
  // contextual
  "lazy",
  // contextual
  "let",
  "macro",
  "mutating",
  // contextual
  "nonmutating",
  // contextual
  /open\(set\)/,
  // contextual
  "open",
  // contextual
  "operator",
  "optional",
  // contextual
  "override",
  // contextual
  "postfix",
  // contextual
  "precedencegroup",
  "prefix",
  // contextual
  /private\(set\)/,
  "private",
  "protocol",
  /public\(set\)/,
  "public",
  "repeat",
  "required",
  // contextual
  "rethrows",
  "return",
  "set",
  // contextual
  "some",
  // contextual
  "static",
  "struct",
  "subscript",
  "super",
  "switch",
  "throws",
  "throw",
  /try\?/,
  // operator
  /try!/,
  // operator
  "try",
  // operator
  "typealias",
  /unowned\(safe\)/,
  // contextual
  /unowned\(unsafe\)/,
  // contextual
  "unowned",
  // contextual
  "var",
  "weak",
  // contextual
  "where",
  "while",
  "willSet"
  // contextual
], xn = [
  "false",
  "nil",
  "true"
], ja = [
  "assignment",
  "associativity",
  "higherThan",
  "left",
  "lowerThan",
  "none",
  "right"
], Xa = [
  "#colorLiteral",
  "#column",
  "#dsohandle",
  "#else",
  "#elseif",
  "#endif",
  "#error",
  "#file",
  "#fileID",
  "#fileLiteral",
  "#filePath",
  "#function",
  "#if",
  "#imageLiteral",
  "#keyPath",
  "#line",
  "#selector",
  "#sourceLocation",
  "#warning"
], An = [
  "abs",
  "all",
  "any",
  "assert",
  "assertionFailure",
  "debugPrint",
  "dump",
  "fatalError",
  "getVaList",
  "isKnownUniquelyReferenced",
  "max",
  "min",
  "numericCast",
  "pointwiseMax",
  "pointwiseMin",
  "precondition",
  "preconditionFailure",
  "print",
  "readLine",
  "repeatElement",
  "sequence",
  "stride",
  "swap",
  "swift_unboxFromSwiftValueWithType",
  "transcode",
  "type",
  "unsafeBitCast",
  "unsafeDowncast",
  "withExtendedLifetime",
  "withUnsafeMutablePointer",
  "withUnsafePointer",
  "withVaList",
  "withoutActuallyEscaping",
  "zip"
], lr = de(
  /[/=\-+!*%<>&|^~?]/,
  /[\u00A1-\u00A7]/,
  /[\u00A9\u00AB]/,
  /[\u00AC\u00AE]/,
  /[\u00B0\u00B1]/,
  /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
  /[\u2016-\u2017]/,
  /[\u2020-\u2027]/,
  /[\u2030-\u203E]/,
  /[\u2041-\u2053]/,
  /[\u2055-\u205E]/,
  /[\u2190-\u23FF]/,
  /[\u2500-\u2775]/,
  /[\u2794-\u2BFF]/,
  /[\u2E00-\u2E7F]/,
  /[\u3001-\u3003]/,
  /[\u3008-\u3020]/,
  /[\u3030]/
), ur = de(
  lr,
  /[\u0300-\u036F]/,
  /[\u1DC0-\u1DFF]/,
  /[\u20D0-\u20FF]/,
  /[\uFE00-\uFE0F]/,
  /[\uFE20-\uFE2F]/
  // TODO: The following characters are also allowed, but the regex isn't supported yet.
  // /[\u{E0100}-\u{E01EF}]/u
), Pt = V(lr, ur, "*"), dr = de(
  /[a-zA-Z_]/,
  /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
  /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
  /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
  /[\u1E00-\u1FFF]/,
  /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
  /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
  /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
  /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
  /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
  /[\uFE47-\uFEFE\uFF00-\uFFFD]/
  // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
  // The following characters are also allowed, but the regexes aren't supported yet.
  // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
  // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
  // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
  // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
), Et = de(
  dr,
  /\d/,
  /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
), we = V(dr, Et, "*"), Bt = V(/[A-Z]/, Et, "*"), Qa = [
  "attached",
  "autoclosure",
  V(/convention\(/, de("swift", "block", "c"), /\)/),
  "discardableResult",
  "dynamicCallable",
  "dynamicMemberLookup",
  "escaping",
  "freestanding",
  "frozen",
  "GKInspectable",
  "IBAction",
  "IBDesignable",
  "IBInspectable",
  "IBOutlet",
  "IBSegueAction",
  "inlinable",
  "main",
  "nonobjc",
  "NSApplicationMain",
  "NSCopying",
  "NSManaged",
  V(/objc\(/, we, /\)/),
  "objc",
  "objcMembers",
  "propertyWrapper",
  "requires_stored_property_inits",
  "resultBuilder",
  "Sendable",
  "testable",
  "UIApplicationMain",
  "unchecked",
  "unknown",
  "usableFromInline",
  "warn_unqualified_access"
], Ja = [
  "iOS",
  "iOSApplicationExtension",
  "macOS",
  "macOSApplicationExtension",
  "macCatalyst",
  "macCatalystApplicationExtension",
  "watchOS",
  "watchOSApplicationExtension",
  "tvOS",
  "tvOSApplicationExtension",
  "swift"
];
function eo(e) {
  const t = {
    match: /\s+/,
    relevance: 0
  }, n = e.COMMENT(
    "/\\*",
    "\\*/",
    { contains: ["self"] }
  ), r = [
    e.C_LINE_COMMENT_MODE,
    n
  ], a = {
    match: [
      /\./,
      de(...Za, ...Tn)
    ],
    className: { 2: "keyword" }
  }, c = {
    // Consume .keyword to prevent highlighting properties and methods as keywords.
    match: V(/\./, de(...Lt)),
    relevance: 0
  }, i = Lt.filter((q) => typeof q == "string").concat(["_|0"]), s = Lt.filter((q) => typeof q != "string").concat(Va).map(Qt), o = { variants: [
    {
      className: "keyword",
      match: de(...s, ...Tn)
    }
  ] }, l = {
    $pattern: de(
      /\b\w+/,
      // regular keywords
      /#\w+/
      // number keywords
    ),
    keyword: i.concat(Xa),
    literal: xn
  }, d = [
    a,
    c,
    o
  ], u = {
    // Consume .built_in to prevent highlighting properties and methods.
    match: V(/\./, de(...An)),
    relevance: 0
  }, f = {
    className: "built_in",
    match: V(/\b/, de(...An), /(?=\()/)
  }, b = [
    u,
    f
  ], p = {
    // Prevent -> from being highlighting as an operator.
    match: /->/,
    relevance: 0
  }, h = {
    className: "operator",
    relevance: 0,
    variants: [
      { match: Pt },
      {
        // dot-operator: only operators that start with a dot are allowed to use dots as
        // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
        // characters that may also include dots.
        match: `\\.(\\.|${ur})+`
      }
    ]
  }, _ = [
    p,
    h
  ], y = "([0-9]_*)+", v = "([0-9a-fA-F]_*)+", T = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal floating-point-literal (subsumes decimal-literal)
      { match: `\\b(${y})(\\.(${y}))?([eE][+-]?(${y}))?\\b` },
      // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
      { match: `\\b0x(${v})(\\.(${v}))?([pP][+-]?(${y}))?\\b` },
      // octal-literal
      { match: /\b0o([0-7]_*)+\b/ },
      // binary-literal
      { match: /\b0b([01]_*)+\b/ }
    ]
  }, A = (q = "") => ({
    className: "subst",
    variants: [
      { match: V(/\\/, q, /[0\\tnr"']/) },
      { match: V(/\\/, q, /u\{[0-9a-fA-F]{1,8}\}/) }
    ]
  }), M = (q = "") => ({
    className: "subst",
    match: V(/\\/, q, /[\t ]*(?:[\r\n]|\r\n)/)
  }), O = (q = "") => ({
    className: "subst",
    label: "interpol",
    begin: V(/\\/, q, /\(/),
    end: /\)/
  }), B = (q = "") => ({
    begin: V(q, /"""/),
    end: V(/"""/, q),
    contains: [
      A(q),
      M(q),
      O(q)
    ]
  }), j = (q = "") => ({
    begin: V(q, /"/),
    end: V(/"/, q),
    contains: [
      A(q),
      O(q)
    ]
  }), Z = {
    className: "string",
    variants: [
      B(),
      B("#"),
      B("##"),
      B("###"),
      j(),
      j("#"),
      j("##"),
      j("###")
    ]
  }, m = [
    e.BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [e.BACKSLASH_ESCAPE]
    }
  ], ne = {
    begin: /\/[^\s](?=[^/\n]*\/)/,
    end: /\//,
    contains: m
  }, se = (q) => {
    const me = V(q, /\//), fe = V(/\//, q);
    return {
      begin: me,
      end: fe,
      contains: [
        ...m,
        {
          scope: "comment",
          begin: `#(?!.*${fe})`,
          end: /$/
        }
      ]
    };
  }, K = {
    scope: "regexp",
    variants: [
      se("###"),
      se("##"),
      se("#"),
      ne
    ]
  }, G = { match: V(/`/, we, /`/) }, Q = {
    className: "variable",
    match: /\$\d+/
  }, pe = {
    className: "variable",
    match: `\\$${Et}+`
  }, w = [
    G,
    Q,
    pe
  ], k = {
    match: /(@|#(un)?)available/,
    scope: "keyword",
    starts: { contains: [
      {
        begin: /\(/,
        end: /\)/,
        keywords: Ja,
        contains: [
          ..._,
          T,
          Z
        ]
      }
    ] }
  }, C = {
    scope: "keyword",
    match: V(/@/, de(...Qa))
  }, L = {
    scope: "meta",
    match: V(/@/, we)
  }, F = [
    k,
    C,
    L
  ], H = {
    match: bt(/\b[A-Z]/),
    relevance: 0,
    contains: [
      {
        // Common Apple frameworks, for relevance boost
        className: "type",
        match: V(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, Et, "+")
      },
      {
        // Type identifier
        className: "type",
        match: Bt,
        relevance: 0
      },
      {
        // Optional type
        match: /[?!]+/,
        relevance: 0
      },
      {
        // Variadic parameter
        match: /\.\.\./,
        relevance: 0
      },
      {
        // Protocol composition
        match: V(/\s+&\s+/, bt(Bt)),
        relevance: 0
      }
    ]
  }, re = {
    begin: /</,
    end: />/,
    keywords: l,
    contains: [
      ...r,
      ...d,
      ...F,
      p,
      H
    ]
  };
  H.contains.push(re);
  const Se = {
    match: V(we, /\s*:/),
    keywords: "_|0",
    relevance: 0
  }, ae = {
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    keywords: l,
    contains: [
      "self",
      Se,
      ...r,
      K,
      ...d,
      ...b,
      ..._,
      T,
      Z,
      ...w,
      ...F,
      H
    ]
  }, ce = {
    begin: /</,
    end: />/,
    keywords: "repeat each",
    contains: [
      ...r,
      H
    ]
  }, Te = {
    begin: de(
      bt(V(we, /\s*:/)),
      bt(V(we, /\s+/, we, /\s*:/))
    ),
    end: /:/,
    relevance: 0,
    contains: [
      {
        className: "keyword",
        match: /\b_\b/
      },
      {
        className: "params",
        match: we
      }
    ]
  }, _e = {
    begin: /\(/,
    end: /\)/,
    keywords: l,
    contains: [
      Te,
      ...r,
      ...d,
      ..._,
      T,
      Z,
      ...F,
      H,
      ae
    ],
    endsParent: !0,
    illegal: /["']/
  }, xe = {
    match: [
      /(func|macro)/,
      /\s+/,
      de(G.match, we, Pt)
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      ce,
      _e,
      t
    ],
    illegal: [
      /\[/,
      /%/
    ]
  }, Ae = {
    match: [
      /\b(?:subscript|init[?!]?)/,
      /\s*(?=[<(])/
    ],
    className: { 1: "keyword" },
    contains: [
      ce,
      _e,
      t
    ],
    illegal: /\[|%/
  }, je = {
    match: [
      /operator/,
      /\s+/,
      Pt
    ],
    className: {
      1: "keyword",
      3: "title"
    }
  }, Be = {
    begin: [
      /precedencegroup/,
      /\s+/,
      Bt
    ],
    className: {
      1: "keyword",
      3: "title"
    },
    contains: [H],
    keywords: [
      ...ja,
      ...xn
    ],
    end: /}/
  };
  for (const q of Z.variants) {
    const me = q.contains.find((oe) => oe.label === "interpol");
    me.keywords = l;
    const fe = [
      ...d,
      ...b,
      ..._,
      T,
      Z,
      ...w
    ];
    me.contains = [
      ...fe,
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          "self",
          ...fe
        ]
      }
    ];
  }
  return {
    name: "Swift",
    keywords: l,
    contains: [
      ...r,
      xe,
      Ae,
      {
        beginKeywords: "struct protocol class extension enum actor",
        end: "\\{",
        excludeEnd: !0,
        keywords: l,
        contains: [
          e.inherit(e.TITLE_MODE, {
            className: "title.class",
            begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
          }),
          ...d
        ]
      },
      je,
      Be,
      {
        beginKeywords: "import",
        end: /$/,
        contains: [...r],
        relevance: 0
      },
      K,
      ...d,
      ...b,
      ..._,
      T,
      Z,
      ...w,
      ...F,
      H,
      ae
    ]
  };
}
const yt = "[A-Za-z$_][0-9A-Za-z$_]*", gr = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
], fr = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], pr = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], br = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], mr = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], hr = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], _r = [].concat(
  mr,
  pr,
  br
);
function to(e) {
  const t = e.regex, n = (k, { after: C }) => {
    const L = "</" + k[0].slice(1);
    return k.input.indexOf(L, C) !== -1;
  }, r = yt, a = {
    begin: "<>",
    end: "</>"
  }, c = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (k, C) => {
      const L = k[0].length + k.index, F = k.input[L];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        F === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        F === ","
      ) {
        C.ignoreMatch();
        return;
      }
      F === ">" && (n(k, { after: L }) || C.ignoreMatch());
      let H;
      const re = k.input.substring(L);
      if (H = re.match(/^\s*=/)) {
        C.ignoreMatch();
        return;
      }
      if ((H = re.match(/^\s+extends\s+/)) && H.index === 0) {
        C.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: yt,
    keyword: gr,
    literal: fr,
    built_in: _r,
    "variable.language": hr
  }, o = "[0-9](_?[0-9])*", l = `\\.(${o})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${o})\\b` },
      { begin: `\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, f = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, b = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "xml"
    }
  }, p = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "css"
    }
  }, h = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "graphql"
    }
  }, _ = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, v = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, T = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    b,
    p,
    h,
    _,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    u
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  f.contains = T.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(T)
  });
  const A = [].concat(v, f.contains), M = A.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(A)
    }
  ]), O = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: M
  }, B = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, j = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...pr,
        ...br
      ]
    }
  }, Z = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, m = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [O],
    illegal: /%/
  }, ne = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function se(k) {
    return t.concat("(?!", k.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      se([
        ...mr,
        "super",
        "import"
      ]),
      r,
      t.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, G = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, Q = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      O
    ]
  }, pe = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", w = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(pe)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      O
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: M, CLASS_REFERENCE: j },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      Z,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      b,
      p,
      h,
      _,
      v,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      u,
      j,
      {
        className: "attr",
        begin: r + t.lookahead(":"),
        relevance: 0
      },
      w,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          v,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: pe,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: M
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: a.begin, end: a.end },
              { match: c },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      m,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          O,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      G,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [O]
      },
      K,
      ne,
      B,
      Q,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function no(e) {
  const t = to(e), n = yt, r = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], a = {
    beginKeywords: "namespace",
    end: /\{/,
    excludeEnd: !0,
    contains: [t.exports.CLASS_REFERENCE]
  }, c = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: r
    },
    contains: [t.exports.CLASS_REFERENCE]
  }, i = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, s = [
    "type",
    "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override"
  ], o = {
    $pattern: yt,
    keyword: gr.concat(s),
    literal: fr,
    built_in: _r.concat(r),
    "variable.language": hr
  }, l = {
    className: "meta",
    begin: "@" + n
  }, d = (f, b, p) => {
    const h = f.contains.findIndex((_) => _.label === b);
    if (h === -1)
      throw new Error("can not find mode to replace");
    f.contains.splice(h, 1, p);
  };
  Object.assign(t.keywords, o), t.exports.PARAMS_CONTAINS.push(l), t.contains = t.contains.concat([
    l,
    a,
    c
  ]), d(t, "shebang", e.SHEBANG()), d(t, "use_strict", i);
  const u = t.contains.find((f) => f.label === "func.def");
  return u.relevance = 0, Object.assign(t, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), t;
}
function ro(e) {
  const t = e.regex, n = {
    className: "string",
    begin: /"(""|[^/n])"C\b/
  }, r = {
    className: "string",
    begin: /"/,
    end: /"/,
    illegal: /\n/,
    contains: [
      {
        // double quote escape
        begin: /""/
      }
    ]
  }, a = /\d{1,2}\/\d{1,2}\/\d{4}/, c = /\d{4}-\d{1,2}-\d{1,2}/, i = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, s = /\d{1,2}(:\d{1,2}){1,2}/, o = {
    className: "literal",
    variants: [
      {
        // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
        begin: t.concat(/# */, t.either(c, a), / *#/)
      },
      {
        // #H:mm[:ss]# (24h Time)
        begin: t.concat(/# */, s, / *#/)
      },
      {
        // #h[:mm[:ss]] A# (12h Time)
        begin: t.concat(/# */, i, / *#/)
      },
      {
        // date plus time
        begin: t.concat(
          /# */,
          t.either(c, a),
          / +/,
          t.either(i, s),
          / *#/
        )
      }
    ]
  }, l = {
    className: "number",
    relevance: 0,
    variants: [
      {
        // Float
        begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
      },
      {
        // Integer (base 10)
        begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 16)
        begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 8)
        begin: /&O[0-7_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 2)
        begin: /&B[01_]+((U?[SIL])|[%&])?/
      }
    ]
  }, d = {
    className: "label",
    begin: /^\w+:/
  }, u = e.COMMENT(/'''/, /$/, { contains: [
    {
      className: "doctag",
      begin: /<\/?/,
      end: />/
    }
  ] }), f = e.COMMENT(null, /$/, { variants: [
    { begin: /'/ },
    {
      // TODO: Use multi-class for leading spaces
      begin: /([\t ]|^)REM(?=\s)/
    }
  ] });
  return {
    name: "Visual Basic .NET",
    aliases: ["vb"],
    case_insensitive: !0,
    classNameAliases: { label: "symbol" },
    keywords: {
      keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
      built_in: (
        // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
        "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
      ),
      type: (
        // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
        "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
      ),
      literal: "true false nothing"
    },
    illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
    contains: [
      n,
      r,
      o,
      l,
      d,
      u,
      f,
      {
        className: "meta",
        // TODO: Use multi-class for indentation once available
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
        contains: [f]
      }
    ]
  };
}
function io(e) {
  e.regex;
  const t = e.COMMENT(/\(;/, /;\)/);
  t.contains.push("self");
  const n = e.COMMENT(/;;/, /$/), r = [
    "anyfunc",
    "block",
    "br",
    "br_if",
    "br_table",
    "call",
    "call_indirect",
    "data",
    "drop",
    "elem",
    "else",
    "end",
    "export",
    "func",
    "global.get",
    "global.set",
    "local.get",
    "local.set",
    "local.tee",
    "get_global",
    "get_local",
    "global",
    "if",
    "import",
    "local",
    "loop",
    "memory",
    "memory.grow",
    "memory.size",
    "module",
    "mut",
    "nop",
    "offset",
    "param",
    "result",
    "return",
    "select",
    "set_global",
    "set_local",
    "start",
    "table",
    "tee_local",
    "then",
    "type",
    "unreachable"
  ], a = {
    begin: [
      /(?:func|call|call_indirect)/,
      /\s+/,
      /\$[^\s)]+/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    }
  }, c = {
    className: "variable",
    begin: /\$[\w_]+/
  }, i = {
    match: /(\((?!;)|\))+/,
    className: "punctuation",
    relevance: 0
  }, s = {
    className: "number",
    relevance: 0,
    // borrowed from Prism, TODO: split out into variants
    match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
  }, o = {
    // look-ahead prevents us from gobbling up opcodes
    match: /(i32|i64|f32|f64)(?!\.)/,
    className: "type"
  }, l = {
    className: "keyword",
    // borrowed from Prism, TODO: split out into variants
    match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
  };
  return {
    name: "WebAssembly",
    keywords: {
      $pattern: /[\w.]+/,
      keyword: r
    },
    contains: [
      n,
      t,
      {
        match: [
          /(?:offset|align)/,
          /\s*/,
          /=/
        ],
        className: {
          1: "keyword",
          3: "operator"
        }
      },
      c,
      i,
      a,
      e.QUOTE_STRING_MODE,
      o,
      l,
      s
    ]
  };
}
function ao(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, a = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, c = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, i = e.inherit(c, {
    begin: /\(/,
    end: /\)/
  }), s = e.inherit(e.APOS_STRING_MODE, { className: "string" }), o = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), l = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [a]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [a]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          c,
          o,
          s,
          i,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  c,
                  i,
                  o,
                  s
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      a,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              o
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [l],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [l],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: l
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
function oo(e) {
  const t = "true false yes no null", n = "[\\w#;/?:@&=+$,.~*'()[\\]]+", r = {
    className: "attr",
    variants: [
      { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
      {
        // double quoted keys
        begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)'
      },
      {
        // single quoted keys
        begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)"
      }
    ]
  }, a = {
    className: "template-variable",
    variants: [
      {
        // jinja templates Ansible
        begin: /\{\{/,
        end: /\}\}/
      },
      {
        // Ruby i18n
        begin: /%\{/,
        end: /\}/
      }
    ]
  }, c = {
    className: "string",
    relevance: 0,
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      { begin: /\S+/ }
    ],
    contains: [
      e.BACKSLASH_ESCAPE,
      a
    ]
  }, i = e.inherit(c, { variants: [
    {
      begin: /'/,
      end: /'/
    },
    {
      begin: /"/,
      end: /"/
    },
    { begin: /[^\s,{}[\]]+/ }
  ] }), u = {
    className: "number",
    begin: "\\b" + "[0-9]{4}(-[0-9][0-9]){0,2}" + "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" + "(\\.[0-9]*)?" + "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" + "\\b"
  }, f = {
    end: ",",
    endsWithParent: !0,
    excludeEnd: !0,
    keywords: t,
    relevance: 0
  }, b = {
    begin: /\{/,
    end: /\}/,
    contains: [f],
    illegal: "\\n",
    relevance: 0
  }, p = {
    begin: "\\[",
    end: "\\]",
    contains: [f],
    illegal: "\\n",
    relevance: 0
  }, h = [
    r,
    {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    },
    {
      // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    },
    {
      // Ruby/Rails erb
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0
    },
    {
      // named tags
      className: "type",
      begin: "!\\w+!" + n
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    {
      // verbatim tags
      className: "type",
      begin: "!<" + n + ">"
    },
    {
      // primary tags
      className: "type",
      begin: "!" + n
    },
    {
      // secondary tags
      className: "type",
      begin: "!!" + n
    },
    {
      // fragment id &ref
      className: "meta",
      begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // fragment reference *ref
      className: "meta",
      begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // array listing
      className: "bullet",
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: "-(?=[ ]|$)",
      relevance: 0
    },
    e.HASH_COMMENT_MODE,
    {
      beginKeywords: t,
      keywords: { literal: t }
    },
    u,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: "number",
      begin: e.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    b,
    p,
    c
  ], _ = [...h];
  return _.pop(), _.push(i), f.contains = _, {
    name: "YAML",
    case_insensitive: !0,
    aliases: ["yml"],
    contains: h
  };
}
const so = {
  arduino: Zi,
  bash: Vi,
  c: ji,
  cpp: Xi,
  csharp: Qi,
  css: aa,
  diff: oa,
  go: sa,
  graphql: ca,
  ini: la,
  java: ua,
  javascript: ba,
  json: ma,
  kotlin: _a,
  less: ka,
  lua: Sa,
  makefile: Ta,
  markdown: xa,
  objectivec: Aa,
  perl: Ra,
  php: Oa,
  "php-template": Ca,
  plaintext: Ma,
  python: Ia,
  "python-repl": Da,
  r: La,
  ruby: Pa,
  rust: Ba,
  scss: Ha,
  shell: qa,
  sql: Wa,
  swift: eo,
  typescript: no,
  vbnet: ro,
  wasm: io,
  xml: ao,
  yaml: oo
};
function Er(e) {
  return e instanceof Map ? e.clear = e.delete = e.set = function() {
    throw new Error("map is read-only");
  } : e instanceof Set && (e.add = e.clear = e.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
    const n = e[t], r = typeof n;
    (r === "object" || r === "function") && !Object.isFrozen(n) && Er(n);
  }), e;
}
class Rn {
  /**
   * @param {CompiledMode} mode
   */
  constructor(t) {
    t.data === void 0 && (t.data = {}), this.data = t.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function yr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function Re(e, ...t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    n[r] = e[r];
  return t.forEach(function(r) {
    for (const a in r)
      n[a] = r[a];
  }), /** @type {T} */
  n;
}
const co = "</span>", On = (e) => !!e.scope, lo = (e, { prefix: t }) => {
  if (e.startsWith("language:"))
    return e.replace("language:", "language-");
  if (e.includes(".")) {
    const n = e.split(".");
    return [
      `${t}${n.shift()}`,
      ...n.map((r, a) => `${r}${"_".repeat(a + 1)}`)
    ].join(" ");
  }
  return `${t}${e}`;
};
class uo {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(t, n) {
    this.buffer = "", this.classPrefix = n.classPrefix, t.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(t) {
    this.buffer += yr(t);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(t) {
    if (!On(t)) return;
    const n = lo(
      t.scope,
      { prefix: this.classPrefix }
    );
    this.span(n);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(t) {
    On(t) && (this.buffer += co);
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
  span(t) {
    this.buffer += `<span class="${t}">`;
  }
}
const Cn = (e = {}) => {
  const t = { children: [] };
  return Object.assign(t, e), t;
};
class Jt {
  constructor() {
    this.rootNode = Cn(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(t) {
    this.top.children.push(t);
  }
  /** @param {string} scope */
  openNode(t) {
    const n = Cn({ scope: t });
    this.add(n), this.stack.push(n);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); ) ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(t) {
    return this.constructor._walk(t, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(t, n) {
    return typeof n == "string" ? t.addText(n) : n.children && (t.openNode(n), n.children.forEach((r) => this._walk(t, r)), t.closeNode(n)), t;
  }
  /**
   * @param {Node} node
   */
  static _collapse(t) {
    typeof t != "string" && t.children && (t.children.every((n) => typeof n == "string") ? t.children = [t.children.join("")] : t.children.forEach((n) => {
      Jt._collapse(n);
    }));
  }
}
class go extends Jt {
  /**
   * @param {*} options
   */
  constructor(t) {
    super(), this.options = t;
  }
  /**
   * @param {string} text
   */
  addText(t) {
    t !== "" && this.add(t);
  }
  /** @param {string} scope */
  startScope(t) {
    this.openNode(t);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(t, n) {
    const r = t.root;
    n && (r.scope = `language:${n}`), this.add(r);
  }
  toHTML() {
    return new uo(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function tt(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function wr(e) {
  return Pe("(?=", e, ")");
}
function fo(e) {
  return Pe("(?:", e, ")*");
}
function po(e) {
  return Pe("(?:", e, ")?");
}
function Pe(...e) {
  return e.map((n) => tt(n)).join("");
}
function bo(e) {
  const t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function en(...e) {
  return "(" + (bo(e).capture ? "" : "?:") + e.map((r) => tt(r)).join("|") + ")";
}
function Nr(e) {
  return new RegExp(e.toString() + "|").exec("").length - 1;
}
function mo(e, t) {
  const n = e && e.exec(t);
  return n && n.index === 0;
}
const ho = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function tn(e, { joinWith: t }) {
  let n = 0;
  return e.map((r) => {
    n += 1;
    const a = n;
    let c = tt(r), i = "";
    for (; c.length > 0; ) {
      const s = ho.exec(c);
      if (!s) {
        i += c;
        break;
      }
      i += c.substring(0, s.index), c = c.substring(s.index + s[0].length), s[0][0] === "\\" && s[1] ? i += "\\" + String(Number(s[1]) + a) : (i += s[0], s[0] === "(" && n++);
    }
    return i;
  }).map((r) => `(${r})`).join(t);
}
const _o = /\b\B/, vr = "[a-zA-Z]\\w*", nn = "[a-zA-Z_]\\w*", kr = "\\b\\d+(\\.\\d+)?", Sr = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Tr = "\\b(0b[01]+)", Eo = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", yo = (e = {}) => {
  const t = /^#![ ]*\//;
  return e.binary && (e.begin = Pe(
    t,
    /.*\b/,
    e.binary,
    /\b.*/
  )), Re({
    scope: "meta",
    begin: t,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (n, r) => {
      n.index !== 0 && r.ignoreMatch();
    }
  }, e);
}, nt = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, wo = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [nt]
}, No = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [nt]
}, vo = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, Tt = function(e, t, n = {}) {
  const r = Re(
    {
      scope: "comment",
      begin: e,
      end: t,
      contains: []
    },
    n
  );
  r.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: !0,
    relevance: 0
  });
  const a = en(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  return r.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: Pe(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        a,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  ), r;
}, ko = Tt("//", "$"), So = Tt("/\\*", "\\*/"), To = Tt("#", "$"), xo = {
  scope: "number",
  begin: kr,
  relevance: 0
}, Ao = {
  scope: "number",
  begin: Sr,
  relevance: 0
}, Ro = {
  scope: "number",
  begin: Tr,
  relevance: 0
}, Oo = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    nt,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [nt]
    }
  ]
}, Co = {
  scope: "title",
  begin: vr,
  relevance: 0
}, Mo = {
  scope: "title",
  begin: nn,
  relevance: 0
}, Io = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + nn,
  relevance: 0
}, Do = function(e) {
  return Object.assign(
    e,
    {
      /** @type {ModeCallback} */
      "on:begin": (t, n) => {
        n.data._beginMatch = t[1];
      },
      /** @type {ModeCallback} */
      "on:end": (t, n) => {
        n.data._beginMatch !== t[1] && n.ignoreMatch();
      }
    }
  );
};
var mt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: wo,
  BACKSLASH_ESCAPE: nt,
  BINARY_NUMBER_MODE: Ro,
  BINARY_NUMBER_RE: Tr,
  COMMENT: Tt,
  C_BLOCK_COMMENT_MODE: So,
  C_LINE_COMMENT_MODE: ko,
  C_NUMBER_MODE: Ao,
  C_NUMBER_RE: Sr,
  END_SAME_AS_BEGIN: Do,
  HASH_COMMENT_MODE: To,
  IDENT_RE: vr,
  MATCH_NOTHING_RE: _o,
  METHOD_GUARD: Io,
  NUMBER_MODE: xo,
  NUMBER_RE: kr,
  PHRASAL_WORDS_MODE: vo,
  QUOTE_STRING_MODE: No,
  REGEXP_MODE: Oo,
  RE_STARTERS_RE: Eo,
  SHEBANG: yo,
  TITLE_MODE: Co,
  UNDERSCORE_IDENT_RE: nn,
  UNDERSCORE_TITLE_MODE: Mo
});
function Lo(e, t) {
  e.input[e.index - 1] === "." && t.ignoreMatch();
}
function Po(e, t) {
  e.className !== void 0 && (e.scope = e.className, delete e.className);
}
function Bo(e, t) {
  t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = Lo, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
}
function Fo(e, t) {
  Array.isArray(e.illegal) && (e.illegal = en(...e.illegal));
}
function Uo(e, t) {
  if (e.match) {
    if (e.begin || e.end) throw new Error("begin & end are not supported with match");
    e.begin = e.match, delete e.match;
  }
}
function $o(e, t) {
  e.relevance === void 0 && (e.relevance = 1);
}
const zo = (e, t) => {
  if (!e.beforeMatch) return;
  if (e.starts) throw new Error("beforeMatch cannot be used with starts");
  const n = Object.assign({}, e);
  Object.keys(e).forEach((r) => {
    delete e[r];
  }), e.keywords = n.keywords, e.begin = Pe(n.beforeMatch, wr(n.begin)), e.starts = {
    relevance: 0,
    contains: [
      Object.assign(n, { endsParent: !0 })
    ]
  }, e.relevance = 0, delete n.beforeMatch;
}, Ko = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
], Go = "keyword";
function xr(e, t, n = Go) {
  const r = /* @__PURE__ */ Object.create(null);
  return typeof e == "string" ? a(n, e.split(" ")) : Array.isArray(e) ? a(n, e) : Object.keys(e).forEach(function(c) {
    Object.assign(
      r,
      xr(e[c], t, c)
    );
  }), r;
  function a(c, i) {
    t && (i = i.map((s) => s.toLowerCase())), i.forEach(function(s) {
      const o = s.split("|");
      r[o[0]] = [c, Ho(o[0], o[1])];
    });
  }
}
function Ho(e, t) {
  return t ? Number(t) : qo(e) ? 0 : 1;
}
function qo(e) {
  return Ko.includes(e.toLowerCase());
}
const Mn = {}, Ie = (e) => {
  console.error(e);
}, In = (e, ...t) => {
  console.log(`WARN: ${e}`, ...t);
}, He = (e, t) => {
  Mn[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), Mn[`${e}/${t}`] = !0);
}, wt = new Error();
function Ar(e, t, { key: n }) {
  let r = 0;
  const a = e[n], c = {}, i = {};
  for (let s = 1; s <= t.length; s++)
    i[s + r] = a[s], c[s + r] = !0, r += Nr(t[s - 1]);
  e[n] = i, e[n]._emit = c, e[n]._multi = !0;
}
function Wo(e) {
  if (Array.isArray(e.begin)) {
    if (e.skip || e.excludeBegin || e.returnBegin)
      throw Ie("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), wt;
    if (typeof e.beginScope != "object" || e.beginScope === null)
      throw Ie("beginScope must be object"), wt;
    Ar(e, e.begin, { key: "beginScope" }), e.begin = tn(e.begin, { joinWith: "" });
  }
}
function Yo(e) {
  if (Array.isArray(e.end)) {
    if (e.skip || e.excludeEnd || e.returnEnd)
      throw Ie("skip, excludeEnd, returnEnd not compatible with endScope: {}"), wt;
    if (typeof e.endScope != "object" || e.endScope === null)
      throw Ie("endScope must be object"), wt;
    Ar(e, e.end, { key: "endScope" }), e.end = tn(e.end, { joinWith: "" });
  }
}
function Zo(e) {
  e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
}
function Vo(e) {
  Zo(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), Wo(e), Yo(e);
}
function jo(e) {
  function t(i, s) {
    return new RegExp(
      tt(i),
      "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (s ? "g" : "")
    );
  }
  class n {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(s, o) {
      o.position = this.position++, this.matchIndexes[this.matchAt] = o, this.regexes.push([o, s]), this.matchAt += Nr(s) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const s = this.regexes.map((o) => o[1]);
      this.matcherRe = t(tn(s, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const o = this.matcherRe.exec(s);
      if (!o)
        return null;
      const l = o.findIndex((u, f) => f > 0 && u !== void 0), d = this.matchIndexes[l];
      return o.splice(0, l), Object.assign(o, d);
    }
  }
  class r {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(s) {
      if (this.multiRegexes[s]) return this.multiRegexes[s];
      const o = new n();
      return this.rules.slice(s).forEach(([l, d]) => o.addRule(l, d)), o.compile(), this.multiRegexes[s] = o, o;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(s, o) {
      this.rules.push([s, o]), o.type === "begin" && this.count++;
    }
    /** @param {string} s */
    exec(s) {
      const o = this.getMatcher(this.regexIndex);
      o.lastIndex = this.lastIndex;
      let l = o.exec(s);
      if (this.resumingScanAtSamePosition() && !(l && l.index === this.lastIndex)) {
        const d = this.getMatcher(0);
        d.lastIndex = this.lastIndex + 1, l = d.exec(s);
      }
      return l && (this.regexIndex += l.position + 1, this.regexIndex === this.count && this.considerAll()), l;
    }
  }
  function a(i) {
    const s = new r();
    return i.contains.forEach((o) => s.addRule(o.begin, { rule: o, type: "begin" })), i.terminatorEnd && s.addRule(i.terminatorEnd, { type: "end" }), i.illegal && s.addRule(i.illegal, { type: "illegal" }), s;
  }
  function c(i, s) {
    const o = (
      /** @type CompiledMode */
      i
    );
    if (i.isCompiled) return o;
    [
      Po,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      Uo,
      Vo,
      zo
    ].forEach((d) => d(i, s)), e.compilerExtensions.forEach((d) => d(i, s)), i.__beforeBegin = null, [
      Bo,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      Fo,
      // default to 1 relevance if not specified
      $o
    ].forEach((d) => d(i, s)), i.isCompiled = !0;
    let l = null;
    return typeof i.keywords == "object" && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords), l = i.keywords.$pattern, delete i.keywords.$pattern), l = l || /\w+/, i.keywords && (i.keywords = xr(i.keywords, e.case_insensitive)), o.keywordPatternRe = t(l, !0), s && (i.begin || (i.begin = /\B|\b/), o.beginRe = t(o.begin), !i.end && !i.endsWithParent && (i.end = /\B|\b/), i.end && (o.endRe = t(o.end)), o.terminatorEnd = tt(o.end) || "", i.endsWithParent && s.terminatorEnd && (o.terminatorEnd += (i.end ? "|" : "") + s.terminatorEnd)), i.illegal && (o.illegalRe = t(
      /** @type {RegExp | string} */
      i.illegal
    )), i.contains || (i.contains = []), i.contains = [].concat(...i.contains.map(function(d) {
      return Xo(d === "self" ? i : d);
    })), i.contains.forEach(function(d) {
      c(
        /** @type Mode */
        d,
        o
      );
    }), i.starts && c(i.starts, s), o.matcher = a(o), o;
  }
  if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return e.classNameAliases = Re(e.classNameAliases || {}), c(
    /** @type Mode */
    e
  );
}
function Rr(e) {
  return e ? e.endsWithParent || Rr(e.starts) : !1;
}
function Xo(e) {
  return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
    return Re(e, { variants: null }, t);
  })), e.cachedVariants ? e.cachedVariants : Rr(e) ? Re(e, { starts: e.starts ? Re(e.starts) : null }) : Object.isFrozen(e) ? Re(e) : e;
}
var Qo = "11.9.0";
class Jo extends Error {
  constructor(t, n) {
    super(t), this.name = "HTMLInjectionError", this.html = n;
  }
}
const Ft = yr, Dn = Re, Ln = Symbol("nomatch"), es = 7, Or = function(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = [];
  let a = !0;
  const c = "Could not find the language '{}', did you forget to load/include a language module?", i = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let s = {
    ignoreUnescapedHTML: !1,
    throwUnescapedHTML: !1,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: go
  };
  function o(w) {
    return s.noHighlightRe.test(w);
  }
  function l(w) {
    let k = w.className + " ";
    k += w.parentNode ? w.parentNode.className : "";
    const C = s.languageDetectRe.exec(k);
    if (C) {
      const L = Z(C[1]);
      return L || (In(c.replace("{}", C[1])), In("Falling back to no-highlight mode for this block.", w)), L ? C[1] : "no-highlight";
    }
    return k.split(/\s+/).find((L) => o(L) || Z(L));
  }
  function d(w, k, C) {
    let L = "", F = "";
    typeof k == "object" ? (L = w, C = k.ignoreIllegals, F = k.language) : (He("10.7.0", "highlight(lang, code, ...args) has been deprecated."), He("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), F = w, L = k), C === void 0 && (C = !0);
    const H = {
      code: L,
      language: F
    };
    Q("before:highlight", H);
    const re = H.result ? H.result : u(H.language, H.code, C);
    return re.code = H.code, Q("after:highlight", re), re;
  }
  function u(w, k, C, L) {
    const F = /* @__PURE__ */ Object.create(null);
    function H(S, R) {
      return S.keywords[R];
    }
    function re() {
      if (!I.keywords) {
        ie.addText(Y);
        return;
      }
      let S = 0;
      I.keywordPatternRe.lastIndex = 0;
      let R = I.keywordPatternRe.exec(Y), P = "";
      for (; R; ) {
        P += Y.substring(S, R.index);
        const z = oe.case_insensitive ? R[0].toLowerCase() : R[0], ee = H(I, z);
        if (ee) {
          const [he, Rt] = ee;
          if (ie.addText(P), P = "", F[z] = (F[z] || 0) + 1, F[z] <= es && (Ue += Rt), he.startsWith("_"))
            P += R[0];
          else {
            const Ot = oe.classNameAliases[he] || he;
            ce(R[0], Ot);
          }
        } else
          P += R[0];
        S = I.keywordPatternRe.lastIndex, R = I.keywordPatternRe.exec(Y);
      }
      P += Y.substring(S), ie.addText(P);
    }
    function Se() {
      if (Y === "") return;
      let S = null;
      if (typeof I.subLanguage == "string") {
        if (!t[I.subLanguage]) {
          ie.addText(Y);
          return;
        }
        S = u(I.subLanguage, Y, !0, ut[I.subLanguage]), ut[I.subLanguage] = /** @type {CompiledMode} */
        S._top;
      } else
        S = b(Y, I.subLanguage.length ? I.subLanguage : null);
      I.relevance > 0 && (Ue += S.relevance), ie.__addSublanguage(S._emitter, S.language);
    }
    function ae() {
      I.subLanguage != null ? Se() : re(), Y = "";
    }
    function ce(S, R) {
      S !== "" && (ie.startScope(R), ie.addText(S), ie.endScope());
    }
    function Te(S, R) {
      let P = 1;
      const z = R.length - 1;
      for (; P <= z; ) {
        if (!S._emit[P]) {
          P++;
          continue;
        }
        const ee = oe.classNameAliases[S[P]] || S[P], he = R[P];
        ee ? ce(he, ee) : (Y = he, re(), Y = ""), P++;
      }
    }
    function _e(S, R) {
      return S.scope && typeof S.scope == "string" && ie.openNode(oe.classNameAliases[S.scope] || S.scope), S.beginScope && (S.beginScope._wrap ? (ce(Y, oe.classNameAliases[S.beginScope._wrap] || S.beginScope._wrap), Y = "") : S.beginScope._multi && (Te(S.beginScope, R), Y = "")), I = Object.create(S, { parent: { value: I } }), I;
    }
    function xe(S, R, P) {
      let z = mo(S.endRe, P);
      if (z) {
        if (S["on:end"]) {
          const ee = new Rn(S);
          S["on:end"](R, ee), ee.isMatchIgnored && (z = !1);
        }
        if (z) {
          for (; S.endsParent && S.parent; )
            S = S.parent;
          return S;
        }
      }
      if (S.endsWithParent)
        return xe(S.parent, R, P);
    }
    function Ae(S) {
      return I.matcher.regexIndex === 0 ? (Y += S[0], 1) : (ze = !0, 0);
    }
    function je(S) {
      const R = S[0], P = S.rule, z = new Rn(P), ee = [P.__beforeBegin, P["on:begin"]];
      for (const he of ee)
        if (he && (he(S, z), z.isMatchIgnored))
          return Ae(R);
      return P.skip ? Y += R : (P.excludeBegin && (Y += R), ae(), !P.returnBegin && !P.excludeBegin && (Y = R)), _e(P, S), P.returnBegin ? 0 : R.length;
    }
    function Be(S) {
      const R = S[0], P = k.substring(S.index), z = xe(I, S, P);
      if (!z)
        return Ln;
      const ee = I;
      I.endScope && I.endScope._wrap ? (ae(), ce(R, I.endScope._wrap)) : I.endScope && I.endScope._multi ? (ae(), Te(I.endScope, S)) : ee.skip ? Y += R : (ee.returnEnd || ee.excludeEnd || (Y += R), ae(), ee.excludeEnd && (Y = R));
      do
        I.scope && ie.closeNode(), !I.skip && !I.subLanguage && (Ue += I.relevance), I = I.parent;
      while (I !== z.parent);
      return z.starts && _e(z.starts, S), ee.returnEnd ? 0 : R.length;
    }
    function q() {
      const S = [];
      for (let R = I; R !== oe; R = R.parent)
        R.scope && S.unshift(R.scope);
      S.forEach((R) => ie.openNode(R));
    }
    let me = {};
    function fe(S, R) {
      const P = R && R[0];
      if (Y += S, P == null)
        return ae(), 0;
      if (me.type === "begin" && R.type === "end" && me.index === R.index && P === "") {
        if (Y += k.slice(R.index, R.index + 1), !a) {
          const z = new Error(`0 width match regex (${w})`);
          throw z.languageName = w, z.badRule = me.rule, z;
        }
        return 1;
      }
      if (me = R, R.type === "begin")
        return je(R);
      if (R.type === "illegal" && !C) {
        const z = new Error('Illegal lexeme "' + P + '" for mode "' + (I.scope || "<unnamed>") + '"');
        throw z.mode = I, z;
      } else if (R.type === "end") {
        const z = Be(R);
        if (z !== Ln)
          return z;
      }
      if (R.type === "illegal" && P === "")
        return 1;
      if ($e > 1e5 && $e > R.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return Y += P, P.length;
    }
    const oe = Z(w);
    if (!oe)
      throw Ie(c.replace("{}", w)), new Error('Unknown language: "' + w + '"');
    const lt = jo(oe);
    let Fe = "", I = L || lt;
    const ut = {}, ie = new s.__emitter(s);
    q();
    let Y = "", Ue = 0, ye = 0, $e = 0, ze = !1;
    try {
      if (oe.__emitTokens)
        oe.__emitTokens(k, ie);
      else {
        for (I.matcher.considerAll(); ; ) {
          $e++, ze ? ze = !1 : I.matcher.considerAll(), I.matcher.lastIndex = ye;
          const S = I.matcher.exec(k);
          if (!S) break;
          const R = k.substring(ye, S.index), P = fe(R, S);
          ye = S.index + P;
        }
        fe(k.substring(ye));
      }
      return ie.finalize(), Fe = ie.toHTML(), {
        language: w,
        value: Fe,
        relevance: Ue,
        illegal: !1,
        _emitter: ie,
        _top: I
      };
    } catch (S) {
      if (S.message && S.message.includes("Illegal"))
        return {
          language: w,
          value: Ft(k),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: S.message,
            index: ye,
            context: k.slice(ye - 100, ye + 100),
            mode: S.mode,
            resultSoFar: Fe
          },
          _emitter: ie
        };
      if (a)
        return {
          language: w,
          value: Ft(k),
          illegal: !1,
          relevance: 0,
          errorRaised: S,
          _emitter: ie,
          _top: I
        };
      throw S;
    }
  }
  function f(w) {
    const k = {
      value: Ft(w),
      illegal: !1,
      relevance: 0,
      _top: i,
      _emitter: new s.__emitter(s)
    };
    return k._emitter.addText(w), k;
  }
  function b(w, k) {
    k = k || s.languages || Object.keys(t);
    const C = f(w), L = k.filter(Z).filter(ne).map(
      (ae) => u(ae, w, !1)
    );
    L.unshift(C);
    const F = L.sort((ae, ce) => {
      if (ae.relevance !== ce.relevance) return ce.relevance - ae.relevance;
      if (ae.language && ce.language) {
        if (Z(ae.language).supersetOf === ce.language)
          return 1;
        if (Z(ce.language).supersetOf === ae.language)
          return -1;
      }
      return 0;
    }), [H, re] = F, Se = H;
    return Se.secondBest = re, Se;
  }
  function p(w, k, C) {
    const L = k && n[k] || C;
    w.classList.add("hljs"), w.classList.add(`language-${L}`);
  }
  function h(w) {
    let k = null;
    const C = l(w);
    if (o(C)) return;
    if (Q(
      "before:highlightElement",
      { el: w, language: C }
    ), w.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", w);
      return;
    }
    if (w.children.length > 0 && (s.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(w)), s.throwUnescapedHTML))
      throw new Jo(
        "One of your code blocks includes unescaped HTML.",
        w.innerHTML
      );
    k = w;
    const L = k.textContent, F = C ? d(L, { language: C, ignoreIllegals: !0 }) : b(L);
    w.innerHTML = F.value, w.dataset.highlighted = "yes", p(w, C, F.language), w.result = {
      language: F.language,
      // TODO: remove with version 11.0
      re: F.relevance,
      relevance: F.relevance
    }, F.secondBest && (w.secondBest = {
      language: F.secondBest.language,
      relevance: F.secondBest.relevance
    }), Q("after:highlightElement", { el: w, result: F, text: L });
  }
  function _(w) {
    s = Dn(s, w);
  }
  const y = () => {
    A(), He("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function v() {
    A(), He("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let T = !1;
  function A() {
    if (document.readyState === "loading") {
      T = !0;
      return;
    }
    document.querySelectorAll(s.cssSelector).forEach(h);
  }
  function M() {
    T && A();
  }
  typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", M, !1);
  function O(w, k) {
    let C = null;
    try {
      C = k(e);
    } catch (L) {
      if (Ie("Language definition for '{}' could not be registered.".replace("{}", w)), a)
        Ie(L);
      else
        throw L;
      C = i;
    }
    C.name || (C.name = w), t[w] = C, C.rawDefinition = k.bind(null, e), C.aliases && m(C.aliases, { languageName: w });
  }
  function B(w) {
    delete t[w];
    for (const k of Object.keys(n))
      n[k] === w && delete n[k];
  }
  function j() {
    return Object.keys(t);
  }
  function Z(w) {
    return w = (w || "").toLowerCase(), t[w] || t[n[w]];
  }
  function m(w, { languageName: k }) {
    typeof w == "string" && (w = [w]), w.forEach((C) => {
      n[C.toLowerCase()] = k;
    });
  }
  function ne(w) {
    const k = Z(w);
    return k && !k.disableAutodetect;
  }
  function se(w) {
    w["before:highlightBlock"] && !w["before:highlightElement"] && (w["before:highlightElement"] = (k) => {
      w["before:highlightBlock"](
        Object.assign({ block: k.el }, k)
      );
    }), w["after:highlightBlock"] && !w["after:highlightElement"] && (w["after:highlightElement"] = (k) => {
      w["after:highlightBlock"](
        Object.assign({ block: k.el }, k)
      );
    });
  }
  function K(w) {
    se(w), r.push(w);
  }
  function G(w) {
    const k = r.indexOf(w);
    k !== -1 && r.splice(k, 1);
  }
  function Q(w, k) {
    const C = w;
    r.forEach(function(L) {
      L[C] && L[C](k);
    });
  }
  function pe(w) {
    return He("10.7.0", "highlightBlock will be removed entirely in v12.0"), He("10.7.0", "Please use highlightElement now."), h(w);
  }
  Object.assign(e, {
    highlight: d,
    highlightAuto: b,
    highlightAll: A,
    highlightElement: h,
    // TODO: Remove with v12 API
    highlightBlock: pe,
    configure: _,
    initHighlighting: y,
    initHighlightingOnLoad: v,
    registerLanguage: O,
    unregisterLanguage: B,
    listLanguages: j,
    getLanguage: Z,
    registerAliases: m,
    autoDetection: ne,
    inherit: Dn,
    addPlugin: K,
    removePlugin: G
  }), e.debugMode = function() {
    a = !1;
  }, e.safeMode = function() {
    a = !0;
  }, e.versionString = Qo, e.regex = {
    concat: Pe,
    lookahead: wr,
    either: en,
    optional: po,
    anyNumberOfTimes: fo
  };
  for (const w in mt)
    typeof mt[w] == "object" && Er(mt[w]);
  return Object.assign(e, mt), e;
}, Ve = Or({});
Ve.newInstance = () => Or({});
var ts = Ve;
Ve.HighlightJS = Ve;
Ve.default = Ve;
const ns = /* @__PURE__ */ vi(ts), Pn = {}, rs = "hljs-";
function is(e) {
  const t = ns.newInstance();
  return e && c(e), {
    highlight: n,
    highlightAuto: r,
    listLanguages: a,
    register: c,
    registerAlias: i,
    registered: s
  };
  function n(o, l, d) {
    const u = d || Pn, f = typeof u.prefix == "string" ? u.prefix : rs;
    if (!t.getLanguage(o))
      throw new Error("Unknown language: `" + o + "` is not registered");
    t.configure({ __emitter: as, classPrefix: f });
    const b = (
      /** @type {HighlightResult & {_emitter: HastEmitter}} */
      t.highlight(l, { ignoreIllegals: !0, language: o })
    );
    if (b.errorRaised)
      throw new Error("Could not highlight with `Highlight.js`", {
        cause: b.errorRaised
      });
    const p = b._emitter.root, h = (
      /** @type {RootData} */
      p.data
    );
    return h.language = b.language, h.relevance = b.relevance, p;
  }
  function r(o, l) {
    const u = (l || Pn).subset || a();
    let f = -1, b = 0, p;
    for (; ++f < u.length; ) {
      const h = u[f];
      if (!t.getLanguage(h)) continue;
      const _ = n(h, o, l);
      _.data && _.data.relevance !== void 0 && _.data.relevance > b && (b = _.data.relevance, p = _);
    }
    return p || {
      type: "root",
      children: [],
      data: { language: void 0, relevance: b }
    };
  }
  function a() {
    return t.listLanguages();
  }
  function c(o, l) {
    if (typeof o == "string")
      t.registerLanguage(o, l);
    else {
      let d;
      for (d in o)
        Object.hasOwn(o, d) && t.registerLanguage(d, o[d]);
    }
  }
  function i(o, l) {
    if (typeof o == "string")
      t.registerAliases(
        // Note: copy needed because hljs doesn’t accept readonly arrays yet.
        typeof l == "string" ? l : [...l],
        { languageName: o }
      );
    else {
      let d;
      for (d in o)
        if (Object.hasOwn(o, d)) {
          const u = o[d];
          t.registerAliases(
            // Note: copy needed because hljs doesn’t accept readonly arrays yet.
            typeof u == "string" ? u : [...u],
            { languageName: d }
          );
        }
    }
  }
  function s(o) {
    return !!t.getLanguage(o);
  }
}
class as {
  /**
   * @param {Readonly<HljsOptions>} options
   *   Configuration.
   * @returns
   *   Instance.
   */
  constructor(t) {
    this.options = t, this.root = {
      type: "root",
      children: [],
      data: { language: void 0, relevance: 0 }
    }, this.stack = [this.root];
  }
  /**
   * @param {string} value
   *   Text to add.
   * @returns {undefined}
   *   Nothing.
   *
   */
  addText(t) {
    if (t === "") return;
    const n = this.stack[this.stack.length - 1], r = n.children[n.children.length - 1];
    r && r.type === "text" ? r.value += t : n.children.push({ type: "text", value: t });
  }
  /**
   *
   * @param {unknown} rawName
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  startScope(t) {
    this.openNode(String(t));
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  endScope() {
    this.closeNode();
  }
  /**
   * @param {HastEmitter} other
   *   Other emitter.
   * @param {string} name
   *   Name of the sublanguage.
   * @returns {undefined}
   *   Nothing.
   */
  __addSublanguage(t, n) {
    const r = this.stack[this.stack.length - 1], a = (
      /** @type {Array<ElementContent>} */
      t.root.children
    );
    n ? r.children.push({
      type: "element",
      tagName: "span",
      properties: { className: [n] },
      children: a
    }) : r.children.push(...a);
  }
  /**
   * @param {string} name
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  openNode(t) {
    const n = this, r = t.split(".").map(function(i, s) {
      return s ? i + "_".repeat(s) : n.options.classPrefix + i;
    }), a = this.stack[this.stack.length - 1], c = {
      type: "element",
      tagName: "span",
      properties: { className: r },
      children: []
    };
    a.children.push(c), this.stack.push(c);
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  closeNode() {
    this.stack.pop();
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  finalize() {
  }
  /**
   * @returns {string}
   *   Nothing.
   */
  toHTML() {
    return "";
  }
}
const Cr = [], os = !0, Wt = !1, ss = "skip";
function Mr(e, t, n, r) {
  let a;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : a = t;
  const c = st(a), i = r ? -1 : 1;
  s(e, void 0, [])();
  function s(o, l, d) {
    const u = (
      /** @type {Record<string, unknown>} */
      o && typeof o == "object" ? o : {}
    );
    if (typeof u.type == "string") {
      const b = (
        // `hast`
        typeof u.tagName == "string" ? u.tagName : (
          // `xast`
          typeof u.name == "string" ? u.name : void 0
        )
      );
      Object.defineProperty(f, "name", {
        value: "node (" + (o.type + (b ? "<" + b + ">" : "")) + ")"
      });
    }
    return f;
    function f() {
      let b = Cr, p, h, _;
      if ((!t || c(o, l, d[d.length - 1] || void 0)) && (b = cs(n(o, d)), b[0] === Wt))
        return b;
      if ("children" in o && o.children) {
        const y = (
          /** @type {UnistParent} */
          o
        );
        if (y.children && b[0] !== ss)
          for (h = (r ? y.children.length : -1) + i, _ = d.concat(y); h > -1 && h < y.children.length; ) {
            const v = y.children[h];
            if (p = s(v, h, _)(), p[0] === Wt)
              return p;
            h = typeof p[1] == "number" ? p[1] : h + i;
          }
      }
      return b;
    }
  }
}
function cs(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [os, e] : e == null ? Cr : [e];
}
function Ir(e, t, n, r) {
  let a, c, i;
  typeof t == "function" && typeof n != "function" ? (c = void 0, i = t, a = n) : (c = t, i = n, a = r), Mr(e, c, s, a);
  function s(o, l) {
    const d = l[l.length - 1], u = d ? d.children.indexOf(o) : void 0;
    return i(o, u, d);
  }
}
const ls = {};
function us(e) {
  const t = e || ls, n = t.aliases, r = t.detect || !1, a = t.languages || so, c = t.plainText, i = t.prefix, s = t.subset;
  let o = "hljs";
  const l = is(a);
  if (n && l.registerAlias(n), i) {
    const d = i.indexOf("-");
    o = d > -1 ? i.slice(0, d) : i;
  }
  return function(d, u) {
    Ir(d, "element", function(f, b, p) {
      if (f.tagName !== "code" || !p || p.type !== "element" || p.tagName !== "pre")
        return;
      const h = ds(f);
      if (h === !1 || !h && !r || h && c && c.includes(h))
        return;
      Array.isArray(f.properties.className) || (f.properties.className = []), f.properties.className.includes(o) || f.properties.className.unshift(o);
      let _;
      try {
        _ = h ? l.highlight(h, vn(p), { prefix: i }) : l.highlightAuto(vn(p), { prefix: i, subset: s });
      } catch (y) {
        const v = (
          /** @type {Error} */
          y
        );
        if (h && /Unknown language/.test(v.message)) {
          u.message(
            "Cannot highlight as `" + h + "`, it’s not registered",
            {
              ancestors: [p, f],
              cause: v,
              place: f.position,
              ruleId: "missing-language",
              source: "rehype-highlight"
            }
          );
          return;
        }
        throw v;
      }
      !h && _.data && _.data.language && f.properties.className.push("language-" + _.data.language), _.children.length > 0 && (f.children = /** @type {Array<ElementContent>} */
      _.children);
    });
  };
}
function ds(e) {
  const t = e.properties.className;
  let n = -1;
  if (!Array.isArray(t))
    return;
  let r;
  for (; ++n < t.length; ) {
    const a = String(t[n]);
    if (a === "no-highlight" || a === "nohighlight")
      return !1;
    !r && a.slice(0, 5) === "lang-" && (r = a.slice(5)), !r && a.slice(0, 9) === "language-" && (r = a.slice(9));
  }
  return r;
}
function Bn(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, a = n.indexOf(t);
  for (; a !== -1; )
    r++, a = n.indexOf(t, a + t.length);
  return r;
}
const rt = At(/[A-Za-z]/), rn = At(/[\dA-Za-z]/);
function gs(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
function Ze(e) {
  return e !== null && e < -2;
}
function ge(e) {
  return e !== null && (e < 0 || e === 32);
}
function Ne(e) {
  return e === -2 || e === -1 || e === 32;
}
const xt = At(new RegExp("\\p{P}|\\p{S}", "u")), De = At(/\s/);
function At(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function fs(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function ps(e, t, n) {
  const a = st((n || {}).ignore || []), c = bs(t);
  let i = -1;
  for (; ++i < c.length; )
    Mr(e, "text", s);
  function s(l, d) {
    let u = -1, f;
    for (; ++u < d.length; ) {
      const b = d[u], p = f ? f.children : void 0;
      if (a(
        b,
        p ? p.indexOf(b) : void 0,
        f
      ))
        return;
      f = b;
    }
    if (f)
      return o(l, d);
  }
  function o(l, d) {
    const u = d[d.length - 1], f = c[i][0], b = c[i][1];
    let p = 0;
    const _ = u.children.indexOf(l);
    let y = !1, v = [];
    f.lastIndex = 0;
    let T = f.exec(l.value);
    for (; T; ) {
      const A = T.index, M = {
        index: T.index,
        input: T.input,
        stack: [...d, l]
      };
      let O = b(...T, M);
      if (typeof O == "string" && (O = O.length > 0 ? { type: "text", value: O } : void 0), O === !1 ? f.lastIndex = A + 1 : (p !== A && v.push({
        type: "text",
        value: l.value.slice(p, A)
      }), Array.isArray(O) ? v.push(...O) : O && v.push(O), p = A + T[0].length, y = !0), !f.global)
        break;
      T = f.exec(l.value);
    }
    return y ? (p < l.value.length && v.push({ type: "text", value: l.value.slice(p) }), u.children.splice(_, 1, ...v)) : v = [l], _ + v.length;
  }
}
function bs(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const a = n[r];
    t.push([ms(a[0]), hs(a[1])]);
  }
  return t;
}
function ms(e) {
  return typeof e == "string" ? new RegExp(fs(e), "g") : e;
}
function hs(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Ut = "phrasing", $t = ["autolink", "link", "image", "label"];
function _s() {
  return {
    transforms: [Ss],
    enter: {
      literalAutolink: ys,
      literalAutolinkEmail: zt,
      literalAutolinkHttp: zt,
      literalAutolinkWww: zt
    },
    exit: {
      literalAutolink: ks,
      literalAutolinkEmail: vs,
      literalAutolinkHttp: ws,
      literalAutolinkWww: Ns
    }
  };
}
function Es() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Ut,
        notInConstruct: $t
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Ut,
        notInConstruct: $t
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Ut,
        notInConstruct: $t
      }
    ]
  };
}
function ys(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function zt(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function ws(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Ns(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function vs(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function ks(e) {
  this.exit(e);
}
function Ss(e) {
  ps(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Ts],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), xs]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Ts(e, t, n, r, a) {
  let c = "";
  if (!Dr(a) || (/^w/i.test(t) && (n = t + n, t = "", c = "http://"), !As(n)))
    return !1;
  const i = Rs(n + r);
  if (!i[0]) return !1;
  const s = {
    type: "link",
    title: null,
    url: c + t + i[0],
    children: [{ type: "text", value: t + i[0] }]
  };
  return i[1] ? [s, { type: "text", value: i[1] }] : s;
}
function xs(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Dr(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function As(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Rs(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const a = Bn(e, "(");
  let c = Bn(e, ")");
  for (; r !== -1 && a > c; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), c++;
  return [e, n];
}
function Dr(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || De(n) || xt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
function ct(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
Lr.peek = $s;
function Os() {
  return {
    enter: {
      gfmFootnoteDefinition: Ms,
      gfmFootnoteDefinitionLabelString: Is,
      gfmFootnoteCall: Ps,
      gfmFootnoteCallString: Bs
    },
    exit: {
      gfmFootnoteDefinition: Ls,
      gfmFootnoteDefinitionLabelString: Ds,
      gfmFootnoteCall: Us,
      gfmFootnoteCallString: Fs
    }
  };
}
function Cs() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: zs, footnoteReference: Lr }
  };
}
function Ms(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function Is() {
  this.buffer();
}
function Ds(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = ct(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Ls(e) {
  this.exit(e);
}
function Ps(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Bs() {
  this.buffer();
}
function Fs(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = ct(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function Us(e) {
  this.exit(e);
}
function Lr(e, t, n, r) {
  const a = n.createTracker(r);
  let c = a.move("[^");
  const i = n.enter("footnoteReference"), s = n.enter("reference");
  return c += a.move(
    n.safe(n.associationId(e), {
      ...a.current(),
      before: c,
      after: "]"
    })
  ), s(), i(), c += a.move("]"), c;
}
function $s() {
  return "[";
}
function zs(e, t, n, r) {
  const a = n.createTracker(r);
  let c = a.move("[^");
  const i = n.enter("footnoteDefinition"), s = n.enter("label");
  return c += a.move(
    n.safe(n.associationId(e), {
      ...a.current(),
      before: c,
      after: "]"
    })
  ), s(), c += a.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), a.shift(4), c += a.move(
    n.indentLines(n.containerFlow(e, a.current()), Ks)
  ), i(), c;
}
function Ks(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
const Gs = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Pr.peek = Zs;
function Hs() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Ws },
    exit: { strikethrough: Ys }
  };
}
function qs() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Gs
      }
    ],
    handlers: { delete: Pr }
  };
}
function Ws(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Ys(e) {
  this.exit(e);
}
function Pr(e, t, n, r) {
  const a = n.createTracker(r), c = n.enter("strikethrough");
  let i = a.move("~~");
  return i += n.containerPhrasing(e, {
    ...a.current(),
    before: i,
    after: "~"
  }), i += a.move("~~"), c(), i;
}
function Zs() {
  return "~";
}
function Vs(e) {
  return e.length;
}
function js(e, t) {
  const n = t || {}, r = (n.align || []).concat(), a = n.stringLength || Vs, c = [], i = [], s = [], o = [];
  let l = 0, d = -1;
  for (; ++d < e.length; ) {
    const h = [], _ = [];
    let y = -1;
    for (e[d].length > l && (l = e[d].length); ++y < e[d].length; ) {
      const v = Xs(e[d][y]);
      if (n.alignDelimiters !== !1) {
        const T = a(v);
        _[y] = T, (o[y] === void 0 || T > o[y]) && (o[y] = T);
      }
      h.push(v);
    }
    i[d] = h, s[d] = _;
  }
  let u = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++u < l; )
      c[u] = Fn(r[u]);
  else {
    const h = Fn(r);
    for (; ++u < l; )
      c[u] = h;
  }
  u = -1;
  const f = [], b = [];
  for (; ++u < l; ) {
    const h = c[u];
    let _ = "", y = "";
    h === 99 ? (_ = ":", y = ":") : h === 108 ? _ = ":" : h === 114 && (y = ":");
    let v = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      o[u] - _.length - y.length
    );
    const T = _ + "-".repeat(v) + y;
    n.alignDelimiters !== !1 && (v = _.length + v + y.length, v > o[u] && (o[u] = v), b[u] = v), f[u] = T;
  }
  i.splice(1, 0, f), s.splice(1, 0, b), d = -1;
  const p = [];
  for (; ++d < i.length; ) {
    const h = i[d], _ = s[d];
    u = -1;
    const y = [];
    for (; ++u < l; ) {
      const v = h[u] || "";
      let T = "", A = "";
      if (n.alignDelimiters !== !1) {
        const M = o[u] - (_[u] || 0), O = c[u];
        O === 114 ? T = " ".repeat(M) : O === 99 ? M % 2 ? (T = " ".repeat(M / 2 + 0.5), A = " ".repeat(M / 2 - 0.5)) : (T = " ".repeat(M / 2), A = T) : A = " ".repeat(M);
      }
      n.delimiterStart !== !1 && !u && y.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && v === "") && (n.delimiterStart !== !1 || u) && y.push(" "), n.alignDelimiters !== !1 && y.push(T), y.push(v), n.alignDelimiters !== !1 && y.push(A), n.padding !== !1 && y.push(" "), (n.delimiterEnd !== !1 || u !== l - 1) && y.push("|");
    }
    p.push(
      n.delimiterEnd === !1 ? y.join("").replace(/ +$/, "") : y.join("")
    );
  }
  return p.join(`
`);
}
function Xs(e) {
  return e == null ? "" : String(e);
}
function Fn(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Qs(e, t, n, r) {
  const a = n.enter("blockquote"), c = n.createTracker(r);
  c.move("> "), c.shift(2);
  const i = n.indentLines(
    n.containerFlow(e, c.current()),
    Js
  );
  return a(), i;
}
function Js(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function ec(e, t) {
  return Un(e, t.inConstruct, !0) && !Un(e, t.notInConstruct, !1);
}
function Un(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function $n(e, t, n, r) {
  let a = -1;
  for (; ++a < n.unsafe.length; )
    if (n.unsafe[a].character === `
` && ec(n.stack, n.unsafe[a]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function tc(e, t) {
  const n = String(e);
  let r = n.indexOf(t), a = r, c = 0, i = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === a ? ++c > i && (i = c) : c = 1, a = r + t.length, r = n.indexOf(t, a);
  return i;
}
function nc(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function rc(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function ic(e, t, n, r) {
  const a = rc(n), c = e.value || "", i = a === "`" ? "GraveAccent" : "Tilde";
  if (nc(e, n)) {
    const u = n.enter("codeIndented"), f = n.indentLines(c, ac);
    return u(), f;
  }
  const s = n.createTracker(r), o = a.repeat(Math.max(tc(c, a) + 1, 3)), l = n.enter("codeFenced");
  let d = s.move(o);
  if (e.lang) {
    const u = n.enter(`codeFencedLang${i}`);
    d += s.move(
      n.safe(e.lang, {
        before: d,
        after: " ",
        encode: ["`"],
        ...s.current()
      })
    ), u();
  }
  if (e.lang && e.meta) {
    const u = n.enter(`codeFencedMeta${i}`);
    d += s.move(" "), d += s.move(
      n.safe(e.meta, {
        before: d,
        after: `
`,
        encode: ["`"],
        ...s.current()
      })
    ), u();
  }
  return d += s.move(`
`), c && (d += s.move(c + `
`)), d += s.move(o), l(), d;
}
function ac(e, t, n) {
  return (n ? "" : "    ") + e;
}
function an(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function oc(e, t, n, r) {
  const a = an(n), c = a === '"' ? "Quote" : "Apostrophe", i = n.enter("definition");
  let s = n.enter("label");
  const o = n.createTracker(r);
  let l = o.move("[");
  return l += o.move(
    n.safe(n.associationId(e), {
      before: l,
      after: "]",
      ...o.current()
    })
  ), l += o.move("]: "), s(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(
    n.safe(e.url, { before: l, after: ">", ...o.current() })
  ), l += o.move(">")) : (s = n.enter("destinationRaw"), l += o.move(
    n.safe(e.url, {
      before: l,
      after: e.title ? " " : `
`,
      ...o.current()
    })
  )), s(), e.title && (s = n.enter(`title${c}`), l += o.move(" " + a), l += o.move(
    n.safe(e.title, {
      before: l,
      after: a,
      ...o.current()
    })
  ), l += o.move(a), s()), i(), l;
}
function sc(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function it(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Nt(e) {
  if (e === null || ge(e) || De(e))
    return 1;
  if (xt(e))
    return 2;
}
function vt(e, t, n) {
  const r = Nt(e), a = Nt(t);
  return r === void 0 ? a === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : a === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? a === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : a === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : a === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : a === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
Br.peek = cc;
function Br(e, t, n, r) {
  const a = sc(n), c = n.enter("emphasis"), i = n.createTracker(r), s = i.move(a);
  let o = i.move(
    n.containerPhrasing(e, {
      after: a,
      before: s,
      ...i.current()
    })
  );
  const l = o.charCodeAt(0), d = vt(
    r.before.charCodeAt(r.before.length - 1),
    l,
    a
  );
  d.inside && (o = it(l) + o.slice(1));
  const u = o.charCodeAt(o.length - 1), f = vt(r.after.charCodeAt(0), u, a);
  f.inside && (o = o.slice(0, -1) + it(u));
  const b = i.move(a);
  return c(), n.attentionEncodeSurroundingInfo = {
    after: f.outside,
    before: d.outside
  }, s + o + b;
}
function cc(e, t, n) {
  return n.options.emphasis || "*";
}
const lc = {};
function Fr(e, t) {
  const n = lc, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, a = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Ur(e, r, a);
}
function Ur(e, t, n) {
  if (uc(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return zn(e.children, t, n);
  }
  return Array.isArray(e) ? zn(e, t, n) : "";
}
function zn(e, t, n) {
  const r = [];
  let a = -1;
  for (; ++a < e.length; )
    r[a] = Ur(e[a], t, n);
  return r.join("");
}
function uc(e) {
  return !!(e && typeof e == "object");
}
function dc(e, t) {
  let n = !1;
  return Ir(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, Wt;
  }), !!((!e.depth || e.depth < 3) && Fr(e) && (t.options.setext || n));
}
function gc(e, t, n, r) {
  const a = Math.max(Math.min(6, e.depth || 1), 1), c = n.createTracker(r);
  if (dc(e, n)) {
    const d = n.enter("headingSetext"), u = n.enter("phrasing"), f = n.containerPhrasing(e, {
      ...c.current(),
      before: `
`,
      after: `
`
    });
    return u(), d(), f + `
` + (a === 1 ? "=" : "-").repeat(
      // The whole size…
      f.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(f.lastIndexOf("\r"), f.lastIndexOf(`
`)) + 1)
    );
  }
  const i = "#".repeat(a), s = n.enter("headingAtx"), o = n.enter("phrasing");
  c.move(i + " ");
  let l = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...c.current()
  });
  return /^[\t ]/.test(l) && (l = it(l.charCodeAt(0)) + l.slice(1)), l = l ? i + " " + l : i, n.options.closeAtx && (l += " " + i), o(), s(), l;
}
$r.peek = fc;
function $r(e) {
  return e.value || "";
}
function fc() {
  return "<";
}
zr.peek = pc;
function zr(e, t, n, r) {
  const a = an(n), c = a === '"' ? "Quote" : "Apostrophe", i = n.enter("image");
  let s = n.enter("label");
  const o = n.createTracker(r);
  let l = o.move("![");
  return l += o.move(
    n.safe(e.alt, { before: l, after: "]", ...o.current() })
  ), l += o.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(
    n.safe(e.url, { before: l, after: ">", ...o.current() })
  ), l += o.move(">")) : (s = n.enter("destinationRaw"), l += o.move(
    n.safe(e.url, {
      before: l,
      after: e.title ? " " : ")",
      ...o.current()
    })
  )), s(), e.title && (s = n.enter(`title${c}`), l += o.move(" " + a), l += o.move(
    n.safe(e.title, {
      before: l,
      after: a,
      ...o.current()
    })
  ), l += o.move(a), s()), l += o.move(")"), i(), l;
}
function pc() {
  return "!";
}
Kr.peek = bc;
function Kr(e, t, n, r) {
  const a = e.referenceType, c = n.enter("imageReference");
  let i = n.enter("label");
  const s = n.createTracker(r);
  let o = s.move("![");
  const l = n.safe(e.alt, {
    before: o,
    after: "]",
    ...s.current()
  });
  o += s.move(l + "]["), i();
  const d = n.stack;
  n.stack = [], i = n.enter("reference");
  const u = n.safe(n.associationId(e), {
    before: o,
    after: "]",
    ...s.current()
  });
  return i(), n.stack = d, c(), a === "full" || !l || l !== u ? o += s.move(u + "]") : a === "shortcut" ? o = o.slice(0, -1) : o += s.move("]"), o;
}
function bc() {
  return "!";
}
Gr.peek = mc;
function Gr(e, t, n) {
  let r = e.value || "", a = "`", c = -1;
  for (; new RegExp("(^|[^`])" + a + "([^`]|$)").test(r); )
    a += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++c < n.unsafe.length; ) {
    const i = n.unsafe[c], s = n.compilePattern(i);
    let o;
    if (i.atBreak)
      for (; o = s.exec(r); ) {
        let l = o.index;
        r.charCodeAt(l) === 10 && r.charCodeAt(l - 1) === 13 && l--, r = r.slice(0, l) + " " + r.slice(o.index + 1);
      }
  }
  return a + r + a;
}
function mc() {
  return "`";
}
function Hr(e, t) {
  const n = Fr(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
qr.peek = hc;
function qr(e, t, n, r) {
  const a = an(n), c = a === '"' ? "Quote" : "Apostrophe", i = n.createTracker(r);
  let s, o;
  if (Hr(e, n)) {
    const d = n.stack;
    n.stack = [], s = n.enter("autolink");
    let u = i.move("<");
    return u += i.move(
      n.containerPhrasing(e, {
        before: u,
        after: ">",
        ...i.current()
      })
    ), u += i.move(">"), s(), n.stack = d, u;
  }
  s = n.enter("link"), o = n.enter("label");
  let l = i.move("[");
  return l += i.move(
    n.containerPhrasing(e, {
      before: l,
      after: "](",
      ...i.current()
    })
  ), l += i.move("]("), o(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (o = n.enter("destinationLiteral"), l += i.move("<"), l += i.move(
    n.safe(e.url, { before: l, after: ">", ...i.current() })
  ), l += i.move(">")) : (o = n.enter("destinationRaw"), l += i.move(
    n.safe(e.url, {
      before: l,
      after: e.title ? " " : ")",
      ...i.current()
    })
  )), o(), e.title && (o = n.enter(`title${c}`), l += i.move(" " + a), l += i.move(
    n.safe(e.title, {
      before: l,
      after: a,
      ...i.current()
    })
  ), l += i.move(a), o()), l += i.move(")"), s(), l;
}
function hc(e, t, n) {
  return Hr(e, n) ? "<" : "[";
}
Wr.peek = _c;
function Wr(e, t, n, r) {
  const a = e.referenceType, c = n.enter("linkReference");
  let i = n.enter("label");
  const s = n.createTracker(r);
  let o = s.move("[");
  const l = n.containerPhrasing(e, {
    before: o,
    after: "]",
    ...s.current()
  });
  o += s.move(l + "]["), i();
  const d = n.stack;
  n.stack = [], i = n.enter("reference");
  const u = n.safe(n.associationId(e), {
    before: o,
    after: "]",
    ...s.current()
  });
  return i(), n.stack = d, c(), a === "full" || !l || l !== u ? o += s.move(u + "]") : a === "shortcut" ? o = o.slice(0, -1) : o += s.move("]"), o;
}
function _c() {
  return "[";
}
function on(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Ec(e) {
  const t = on(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function yc(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Yr(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function wc(e, t, n, r) {
  const a = n.enter("list"), c = n.bulletCurrent;
  let i = e.ordered ? yc(n) : on(n);
  const s = e.ordered ? i === "." ? ")" : "." : Ec(n);
  let o = t && n.bulletLastUsed ? i === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const d = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (i === "*" || i === "-") && // Empty first list item:
      d && (!d.children || !d.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (o = !0), Yr(n) === i && d
    ) {
      let u = -1;
      for (; ++u < e.children.length; ) {
        const f = e.children[u];
        if (f && f.type === "listItem" && f.children && f.children[0] && f.children[0].type === "thematicBreak") {
          o = !0;
          break;
        }
      }
    }
  }
  o && (i = s), n.bulletCurrent = i;
  const l = n.containerFlow(e, r);
  return n.bulletLastUsed = i, n.bulletCurrent = c, a(), l;
}
function Nc(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function vc(e, t, n, r) {
  const a = Nc(n);
  let c = n.bulletCurrent || on(n);
  t && t.type === "list" && t.ordered && (c = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + c);
  let i = c.length + 1;
  (a === "tab" || a === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (i = Math.ceil(i / 4) * 4);
  const s = n.createTracker(r);
  s.move(c + " ".repeat(i - c.length)), s.shift(i);
  const o = n.enter("listItem"), l = n.indentLines(
    n.containerFlow(e, s.current()),
    d
  );
  return o(), l;
  function d(u, f, b) {
    return f ? (b ? "" : " ".repeat(i)) + u : (b ? c : c + " ".repeat(i - c.length)) + u;
  }
}
function kc(e, t, n, r) {
  const a = n.enter("paragraph"), c = n.enter("phrasing"), i = n.containerPhrasing(e, r);
  return c(), a(), i;
}
const Sc = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  st([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function Tc(e, t, n, r) {
  return (e.children.some(function(i) {
    return Sc(i);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function xc(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Zr.peek = Ac;
function Zr(e, t, n, r) {
  const a = xc(n), c = n.enter("strong"), i = n.createTracker(r), s = i.move(a + a);
  let o = i.move(
    n.containerPhrasing(e, {
      after: a,
      before: s,
      ...i.current()
    })
  );
  const l = o.charCodeAt(0), d = vt(
    r.before.charCodeAt(r.before.length - 1),
    l,
    a
  );
  d.inside && (o = it(l) + o.slice(1));
  const u = o.charCodeAt(o.length - 1), f = vt(r.after.charCodeAt(0), u, a);
  f.inside && (o = o.slice(0, -1) + it(u));
  const b = i.move(a + a);
  return c(), n.attentionEncodeSurroundingInfo = {
    after: f.outside,
    before: d.outside
  }, s + o + b;
}
function Ac(e, t, n) {
  return n.options.strong || "*";
}
function Rc(e, t, n, r) {
  return n.safe(e.value, r);
}
function Oc(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Cc(e, t, n) {
  const r = (Yr(n) + (n.options.ruleSpaces ? " " : "")).repeat(Oc(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Vr = {
  blockquote: Qs,
  break: $n,
  code: ic,
  definition: oc,
  emphasis: Br,
  hardBreak: $n,
  heading: gc,
  html: $r,
  image: zr,
  imageReference: Kr,
  inlineCode: Gr,
  link: qr,
  linkReference: Wr,
  list: wc,
  listItem: vc,
  paragraph: kc,
  root: Tc,
  strong: Zr,
  text: Rc,
  thematicBreak: Cc
};
function Mc() {
  return {
    enter: {
      table: Ic,
      tableData: Kn,
      tableHeader: Kn,
      tableRow: Lc
    },
    exit: {
      codeText: Pc,
      table: Dc,
      tableData: Kt,
      tableHeader: Kt,
      tableRow: Kt
    }
  };
}
function Ic(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function Dc(e) {
  this.exit(e), this.data.inTable = void 0;
}
function Lc(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Kt(e) {
  this.exit(e);
}
function Kn(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Pc(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, Bc));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function Bc(e, t) {
  return t === "|" ? t : e;
}
function Fc(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, a = t.stringLength, c = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: f,
      table: i,
      tableCell: o,
      tableRow: s
    }
  };
  function i(b, p, h, _) {
    return l(d(b, h, _), b.align);
  }
  function s(b, p, h, _) {
    const y = u(b, h, _), v = l([y]);
    return v.slice(0, v.indexOf(`
`));
  }
  function o(b, p, h, _) {
    const y = h.enter("tableCell"), v = h.enter("phrasing"), T = h.containerPhrasing(b, {
      ..._,
      before: c,
      after: c
    });
    return v(), y(), T;
  }
  function l(b, p) {
    return js(b, {
      align: p,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: a
    });
  }
  function d(b, p, h) {
    const _ = b.children;
    let y = -1;
    const v = [], T = p.enter("table");
    for (; ++y < _.length; )
      v[y] = u(_[y], p, h);
    return T(), v;
  }
  function u(b, p, h) {
    const _ = b.children;
    let y = -1;
    const v = [], T = p.enter("tableRow");
    for (; ++y < _.length; )
      v[y] = o(_[y], b, p, h);
    return T(), v;
  }
  function f(b, p, h) {
    let _ = Vr.inlineCode(b, p, h);
    return h.stack.includes("tableCell") && (_ = _.replace(/\|/g, "\\$&")), _;
  }
}
function Uc() {
  return {
    exit: {
      taskListCheckValueChecked: Gn,
      taskListCheckValueUnchecked: Gn,
      paragraph: zc
    }
  };
}
function $c() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Kc }
  };
}
function Gn(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function zc(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const a = t.children;
      let c = -1, i;
      for (; ++c < a.length; ) {
        const s = a[c];
        if (s.type === "paragraph") {
          i = s;
          break;
        }
      }
      i === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Kc(e, t, n, r) {
  const a = e.children[0], c = typeof e.checked == "boolean" && a && a.type === "paragraph", i = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
  c && s.move(i);
  let o = Vr.listItem(e, t, n, {
    ...r,
    ...s.current()
  });
  return c && (o = o.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), o;
  function l(d) {
    return d + i;
  }
}
function Gc() {
  return [
    _s(),
    Os(),
    Hs(),
    Mc(),
    Uc()
  ];
}
function Hc(e) {
  return {
    extensions: [
      Es(),
      Cs(),
      qs(),
      Fc(e),
      $c()
    ]
  };
}
function _t(e, t, n, r) {
  const a = e.length;
  let c = 0, i;
  if (t < 0 ? t = -t > a ? 0 : a + t : t = t > a ? a : t, n = n > 0 ? n : 0, r.length < 1e4)
    i = Array.from(r), i.unshift(t, n), e.splice(...i);
  else
    for (n && e.splice(t, n); c < r.length; )
      i = r.slice(c, c + 1e4), i.unshift(t, 0), e.splice(...i), c += 1e4, t += 1e4;
}
const Hn = {}.hasOwnProperty;
function qc(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Wc(t, e[n]);
  return t;
}
function Wc(e, t) {
  let n;
  for (n in t) {
    const a = (Hn.call(e, n) ? e[n] : void 0) || (e[n] = {}), c = t[n];
    let i;
    if (c)
      for (i in c) {
        Hn.call(a, i) || (a[i] = []);
        const s = c[i];
        Yc(
          // @ts-expect-error Looks like a list.
          a[i],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function Yc(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  _t(e, 0, 0, r);
}
const Zc = {
  tokenize: el,
  partial: !0
}, jr = {
  tokenize: tl,
  partial: !0
}, Xr = {
  tokenize: nl,
  partial: !0
}, Qr = {
  tokenize: rl,
  partial: !0
}, Vc = {
  tokenize: il,
  partial: !0
}, Jr = {
  name: "wwwAutolink",
  tokenize: Qc,
  previous: ti
}, ei = {
  name: "protocolAutolink",
  tokenize: Jc,
  previous: ni
}, ke = {
  name: "emailAutolink",
  tokenize: Xc,
  previous: ri
}, Ee = {};
function jc() {
  return {
    text: Ee
  };
}
let Ce = 48;
for (; Ce < 123; )
  Ee[Ce] = ke, Ce++, Ce === 58 ? Ce = 65 : Ce === 91 && (Ce = 97);
Ee[43] = ke;
Ee[45] = ke;
Ee[46] = ke;
Ee[95] = ke;
Ee[72] = [ke, ei];
Ee[104] = [ke, ei];
Ee[87] = [ke, Jr];
Ee[119] = [ke, Jr];
function Xc(e, t, n) {
  const r = this;
  let a, c;
  return i;
  function i(u) {
    return !Yt(u) || !ri.call(r, r.previous) || sn(r.events) ? n(u) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(u));
  }
  function s(u) {
    return Yt(u) ? (e.consume(u), s) : u === 64 ? (e.consume(u), o) : n(u);
  }
  function o(u) {
    return u === 46 ? e.check(Vc, d, l)(u) : u === 45 || u === 95 || rn(u) ? (c = !0, e.consume(u), o) : d(u);
  }
  function l(u) {
    return e.consume(u), a = !0, o;
  }
  function d(u) {
    return c && a && rt(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(u)) : n(u);
  }
}
function Qc(e, t, n) {
  const r = this;
  return a;
  function a(i) {
    return i !== 87 && i !== 119 || !ti.call(r, r.previous) || sn(r.events) ? n(i) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Zc, e.attempt(jr, e.attempt(Xr, c), n), n)(i));
  }
  function c(i) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(i);
  }
}
function Jc(e, t, n) {
  const r = this;
  let a = "", c = !1;
  return i;
  function i(u) {
    return (u === 72 || u === 104) && ni.call(r, r.previous) && !sn(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), a += String.fromCodePoint(u), e.consume(u), s) : n(u);
  }
  function s(u) {
    if (rt(u) && a.length < 5)
      return a += String.fromCodePoint(u), e.consume(u), s;
    if (u === 58) {
      const f = a.toLowerCase();
      if (f === "http" || f === "https")
        return e.consume(u), o;
    }
    return n(u);
  }
  function o(u) {
    return u === 47 ? (e.consume(u), c ? l : (c = !0, o)) : n(u);
  }
  function l(u) {
    return u === null || gs(u) || ge(u) || De(u) || xt(u) ? n(u) : e.attempt(jr, e.attempt(Xr, d), n)(u);
  }
  function d(u) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(u);
  }
}
function el(e, t, n) {
  let r = 0;
  return a;
  function a(i) {
    return (i === 87 || i === 119) && r < 3 ? (r++, e.consume(i), a) : i === 46 && r === 3 ? (e.consume(i), c) : n(i);
  }
  function c(i) {
    return i === null ? n(i) : t(i);
  }
}
function tl(e, t, n) {
  let r, a, c;
  return i;
  function i(l) {
    return l === 46 || l === 95 ? e.check(Qr, o, s)(l) : l === null || ge(l) || De(l) || l !== 45 && xt(l) ? o(l) : (c = !0, e.consume(l), i);
  }
  function s(l) {
    return l === 95 ? r = !0 : (a = r, r = void 0), e.consume(l), i;
  }
  function o(l) {
    return a || r || !c ? n(l) : t(l);
  }
}
function nl(e, t) {
  let n = 0, r = 0;
  return a;
  function a(i) {
    return i === 40 ? (n++, e.consume(i), a) : i === 41 && r < n ? c(i) : i === 33 || i === 34 || i === 38 || i === 39 || i === 41 || i === 42 || i === 44 || i === 46 || i === 58 || i === 59 || i === 60 || i === 63 || i === 93 || i === 95 || i === 126 ? e.check(Qr, t, c)(i) : i === null || ge(i) || De(i) ? t(i) : (e.consume(i), a);
  }
  function c(i) {
    return i === 41 && r++, e.consume(i), a;
  }
}
function rl(e, t, n) {
  return r;
  function r(s) {
    return s === 33 || s === 34 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 63 || s === 95 || s === 126 ? (e.consume(s), r) : s === 38 ? (e.consume(s), c) : s === 93 ? (e.consume(s), a) : (
      // `<` is an end.
      s === 60 || // So is whitespace.
      s === null || ge(s) || De(s) ? t(s) : n(s)
    );
  }
  function a(s) {
    return s === null || s === 40 || s === 91 || ge(s) || De(s) ? t(s) : r(s);
  }
  function c(s) {
    return rt(s) ? i(s) : n(s);
  }
  function i(s) {
    return s === 59 ? (e.consume(s), r) : rt(s) ? (e.consume(s), i) : n(s);
  }
}
function il(e, t, n) {
  return r;
  function r(c) {
    return e.consume(c), a;
  }
  function a(c) {
    return rn(c) ? n(c) : t(c);
  }
}
function ti(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || ge(e);
}
function ni(e) {
  return !rt(e);
}
function ri(e) {
  return !(e === 47 || Yt(e));
}
function Yt(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || rn(e);
}
function sn(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
function al(e, t, n) {
  const r = [];
  let a = -1;
  for (; ++a < e.length; ) {
    const c = e[a].resolveAll;
    c && !r.includes(c) && (t = c(t, n), r.push(c));
  }
  return t;
}
function ve(e, t, n, r) {
  const a = r ? r - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return i;
  function i(o) {
    return Ne(o) ? (e.enter(n), s(o)) : t(o);
  }
  function s(o) {
    return Ne(o) && c++ < a ? (e.consume(o), s) : (e.exit(n), t(o));
  }
}
const ol = {
  partial: !0,
  tokenize: sl
};
function sl(e, t, n) {
  return r;
  function r(c) {
    return Ne(c) ? ve(e, a, "linePrefix")(c) : a(c);
  }
  function a(c) {
    return c === null || Ze(c) ? t(c) : n(c);
  }
}
const cl = {
  tokenize: ml,
  partial: !0
};
function ll() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: fl,
        continuation: {
          tokenize: pl
        },
        exit: bl
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: gl
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: ul,
        resolveTo: dl
      }
    }
  };
}
function ul(e, t, n) {
  const r = this;
  let a = r.events.length;
  const c = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i;
  for (; a--; ) {
    const o = r.events[a][1];
    if (o.type === "labelImage") {
      i = o;
      break;
    }
    if (o.type === "gfmFootnoteCall" || o.type === "labelLink" || o.type === "label" || o.type === "image" || o.type === "link")
      break;
  }
  return s;
  function s(o) {
    if (!i || !i._balanced)
      return n(o);
    const l = ct(r.sliceSerialize({
      start: i.end,
      end: r.now()
    }));
    return l.codePointAt(0) !== 94 || !c.includes(l.slice(1)) ? n(o) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(o), e.exit("gfmFootnoteCallLabelMarker"), t(o));
  }
}
function dl(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, a = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  a.end.column++, a.end.offset++, a.end._bufferIndex++;
  const c = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, a.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, i = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, c.start),
    end: Object.assign({}, c.end)
  }, s = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", a, t],
    ["exit", a, t],
    // Everything in between.
    ["enter", c, t],
    ["enter", i, t],
    ["exit", i, t],
    ["exit", c, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...s), e;
}
function gl(e, t, n) {
  const r = this, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let c = 0, i;
  return s;
  function s(u) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), o;
  }
  function o(u) {
    return u !== 94 ? n(u) : (e.enter("gfmFootnoteCallMarker"), e.consume(u), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l);
  }
  function l(u) {
    if (
      // Too long.
      c > 999 || // Closing brace with nothing.
      u === 93 && !i || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      u === null || u === 91 || ge(u)
    )
      return n(u);
    if (u === 93) {
      e.exit("chunkString");
      const f = e.exit("gfmFootnoteCallString");
      return a.includes(ct(r.sliceSerialize(f))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(u);
    }
    return ge(u) || (i = !0), c++, e.consume(u), u === 92 ? d : l;
  }
  function d(u) {
    return u === 91 || u === 92 || u === 93 ? (e.consume(u), c++, l) : l(u);
  }
}
function fl(e, t, n) {
  const r = this, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let c, i = 0, s;
  return o;
  function o(p) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
  }
  function l(p) {
    return p === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", d) : n(p);
  }
  function d(p) {
    if (
      // Too long.
      i > 999 || // Closing brace with nothing.
      p === 93 && !s || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      p === null || p === 91 || ge(p)
    )
      return n(p);
    if (p === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteDefinitionLabelString");
      return c = ct(r.sliceSerialize(h)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
    }
    return ge(p) || (s = !0), i++, e.consume(p), p === 92 ? u : d;
  }
  function u(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), i++, d) : d(p);
  }
  function f(p) {
    return p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), a.includes(c) || a.push(c), ve(e, b, "gfmFootnoteDefinitionWhitespace")) : n(p);
  }
  function b(p) {
    return t(p);
  }
}
function pl(e, t, n) {
  return e.check(ol, t, e.attempt(cl, t, n));
}
function bl(e) {
  e.exit("gfmFootnoteDefinition");
}
function ml(e, t, n) {
  const r = this;
  return ve(e, a, "gfmFootnoteDefinitionIndent", 5);
  function a(c) {
    const i = r.events[r.events.length - 1];
    return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(c) : n(c);
  }
}
function hl(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: c,
    resolveAll: a
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function a(i, s) {
    let o = -1;
    for (; ++o < i.length; )
      if (i[o][0] === "enter" && i[o][1].type === "strikethroughSequenceTemporary" && i[o][1]._close) {
        let l = o;
        for (; l--; )
          if (i[l][0] === "exit" && i[l][1].type === "strikethroughSequenceTemporary" && i[l][1]._open && // If the sizes are the same:
          i[o][1].end.offset - i[o][1].start.offset === i[l][1].end.offset - i[l][1].start.offset) {
            i[o][1].type = "strikethroughSequence", i[l][1].type = "strikethroughSequence";
            const d = {
              type: "strikethrough",
              start: Object.assign({}, i[l][1].start),
              end: Object.assign({}, i[o][1].end)
            }, u = {
              type: "strikethroughText",
              start: Object.assign({}, i[l][1].end),
              end: Object.assign({}, i[o][1].start)
            }, f = [["enter", d, s], ["enter", i[l][1], s], ["exit", i[l][1], s], ["enter", u, s]], b = s.parser.constructs.insideSpan.null;
            b && _t(f, f.length, 0, al(b, i.slice(l + 1, o), s)), _t(f, f.length, 0, [["exit", u, s], ["enter", i[o][1], s], ["exit", i[o][1], s], ["exit", d, s]]), _t(i, l - 1, o - l + 3, f), o = l + f.length - 2;
            break;
          }
      }
    for (o = -1; ++o < i.length; )
      i[o][1].type === "strikethroughSequenceTemporary" && (i[o][1].type = "data");
    return i;
  }
  function c(i, s, o) {
    const l = this.previous, d = this.events;
    let u = 0;
    return f;
    function f(p) {
      return l === 126 && d[d.length - 1][1].type !== "characterEscape" ? o(p) : (i.enter("strikethroughSequenceTemporary"), b(p));
    }
    function b(p) {
      const h = Nt(l);
      if (p === 126)
        return u > 1 ? o(p) : (i.consume(p), u++, b);
      if (u < 2 && !n) return o(p);
      const _ = i.exit("strikethroughSequenceTemporary"), y = Nt(p);
      return _._open = !y || y === 2 && !!h, _._close = !h || h === 2 && !!y, s(p);
    }
  }
}
class _l {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    El(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(c, i) {
      return c[0] - i[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push([...t]), t.length = 0;
    let a = r.pop();
    for (; a; )
      t.push(...a), a = r.pop();
    this.map.length = 0;
  }
}
function El(e, t, n, r) {
  let a = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; a < e.map.length; ) {
      if (e.map[a][0] === t) {
        e.map[a][1] += n, e.map[a][2].push(...r);
        return;
      }
      a += 1;
    }
    e.map.push([t, n, r]);
  }
}
function yl(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const a = e[t];
    if (n) {
      if (a[0] === "enter")
        a[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (a[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const c = r.length - 1;
          r[c] = r[c] === "left" ? "center" : "right";
        }
      } else if (a[1].type === "tableDelimiterRow")
        break;
    } else a[0] === "enter" && a[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function wl() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Nl,
        resolveAll: vl
      }
    }
  };
}
function Nl(e, t, n) {
  const r = this;
  let a = 0, c = 0, i;
  return s;
  function s(m) {
    let ne = r.events.length - 1;
    for (; ne > -1; ) {
      const G = r.events[ne][1].type;
      if (G === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      G === "linePrefix") ne--;
      else break;
    }
    const se = ne > -1 ? r.events[ne][1].type : null, K = se === "tableHead" || se === "tableRow" ? O : o;
    return K === O && r.parser.lazy[r.now().line] ? n(m) : K(m);
  }
  function o(m) {
    return e.enter("tableHead"), e.enter("tableRow"), l(m);
  }
  function l(m) {
    return m === 124 || (i = !0, c += 1), d(m);
  }
  function d(m) {
    return m === null ? n(m) : Ze(m) ? c > 1 ? (c = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), b) : n(m) : Ne(m) ? ve(e, d, "whitespace")(m) : (c += 1, i && (i = !1, a += 1), m === 124 ? (e.enter("tableCellDivider"), e.consume(m), e.exit("tableCellDivider"), i = !0, d) : (e.enter("data"), u(m)));
  }
  function u(m) {
    return m === null || m === 124 || ge(m) ? (e.exit("data"), d(m)) : (e.consume(m), m === 92 ? f : u);
  }
  function f(m) {
    return m === 92 || m === 124 ? (e.consume(m), u) : u(m);
  }
  function b(m) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(m) : (e.enter("tableDelimiterRow"), i = !1, Ne(m) ? ve(e, p, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : p(m));
  }
  function p(m) {
    return m === 45 || m === 58 ? _(m) : m === 124 ? (i = !0, e.enter("tableCellDivider"), e.consume(m), e.exit("tableCellDivider"), h) : M(m);
  }
  function h(m) {
    return Ne(m) ? ve(e, _, "whitespace")(m) : _(m);
  }
  function _(m) {
    return m === 58 ? (c += 1, i = !0, e.enter("tableDelimiterMarker"), e.consume(m), e.exit("tableDelimiterMarker"), y) : m === 45 ? (c += 1, y(m)) : m === null || Ze(m) ? A(m) : M(m);
  }
  function y(m) {
    return m === 45 ? (e.enter("tableDelimiterFiller"), v(m)) : M(m);
  }
  function v(m) {
    return m === 45 ? (e.consume(m), v) : m === 58 ? (i = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(m), e.exit("tableDelimiterMarker"), T) : (e.exit("tableDelimiterFiller"), T(m));
  }
  function T(m) {
    return Ne(m) ? ve(e, A, "whitespace")(m) : A(m);
  }
  function A(m) {
    return m === 124 ? p(m) : m === null || Ze(m) ? !i || a !== c ? M(m) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(m)) : M(m);
  }
  function M(m) {
    return n(m);
  }
  function O(m) {
    return e.enter("tableRow"), B(m);
  }
  function B(m) {
    return m === 124 ? (e.enter("tableCellDivider"), e.consume(m), e.exit("tableCellDivider"), B) : m === null || Ze(m) ? (e.exit("tableRow"), t(m)) : Ne(m) ? ve(e, B, "whitespace")(m) : (e.enter("data"), j(m));
  }
  function j(m) {
    return m === null || m === 124 || ge(m) ? (e.exit("data"), B(m)) : (e.consume(m), m === 92 ? Z : j);
  }
  function Z(m) {
    return m === 92 || m === 124 ? (e.consume(m), j) : j(m);
  }
}
function vl(e, t) {
  let n = -1, r = !0, a = 0, c = [0, 0, 0, 0], i = [0, 0, 0, 0], s = !1, o = 0, l, d, u;
  const f = new _l();
  for (; ++n < e.length; ) {
    const b = e[n], p = b[1];
    b[0] === "enter" ? p.type === "tableHead" ? (s = !1, o !== 0 && (qn(f, t, o, l, d), d = void 0, o = 0), l = {
      type: "table",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, f.add(n, 0, [["enter", l, t]])) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (r = !0, u = void 0, c = [0, 0, 0, 0], i = [0, n + 1, 0, 0], s && (s = !1, d = {
      type: "tableBody",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, f.add(n, 0, [["enter", d, t]])), a = p.type === "tableDelimiterRow" ? 2 : d ? 3 : 1) : a && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") ? (r = !1, i[2] === 0 && (c[1] !== 0 && (i[0] = i[1], u = ht(f, t, c, a, void 0, u), c = [0, 0, 0, 0]), i[2] = n)) : p.type === "tableCellDivider" && (r ? r = !1 : (c[1] !== 0 && (i[0] = i[1], u = ht(f, t, c, a, void 0, u)), c = i, i = [c[1], n, 0, 0])) : p.type === "tableHead" ? (s = !0, o = n) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (o = n, c[1] !== 0 ? (i[0] = i[1], u = ht(f, t, c, a, n, u)) : i[1] !== 0 && (u = ht(f, t, i, a, n, u)), a = 0) : a && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") && (i[3] = n);
  }
  for (o !== 0 && qn(f, t, o, l, d), f.consume(t.events), n = -1; ++n < t.events.length; ) {
    const b = t.events[n];
    b[0] === "enter" && b[1].type === "table" && (b[1]._align = yl(t.events, n));
  }
  return e;
}
function ht(e, t, n, r, a, c) {
  const i = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", s = "tableContent";
  n[0] !== 0 && (c.end = Object.assign({}, Ye(t.events, n[0])), e.add(n[0], 0, [["exit", c, t]]));
  const o = Ye(t.events, n[1]);
  if (c = {
    type: i,
    start: Object.assign({}, o),
    // Note: correct end is set later.
    end: Object.assign({}, o)
  }, e.add(n[1], 0, [["enter", c, t]]), n[2] !== 0) {
    const l = Ye(t.events, n[2]), d = Ye(t.events, n[3]), u = {
      type: s,
      start: Object.assign({}, l),
      end: Object.assign({}, d)
    };
    if (e.add(n[2], 0, [["enter", u, t]]), r !== 2) {
      const f = t.events[n[2]], b = t.events[n[3]];
      if (f[1].end = Object.assign({}, b[1].end), f[1].type = "chunkText", f[1].contentType = "text", n[3] > n[2] + 1) {
        const p = n[2] + 1, h = n[3] - n[2] - 1;
        e.add(p, h, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", u, t]]);
  }
  return a !== void 0 && (c.end = Object.assign({}, Ye(t.events, a)), e.add(a, 0, [["exit", c, t]]), c = void 0), c;
}
function qn(e, t, n, r, a) {
  const c = [], i = Ye(t.events, n);
  a && (a.end = Object.assign({}, i), c.push(["exit", a, t])), r.end = Object.assign({}, i), c.push(["exit", r, t]), e.add(n + 1, 0, c);
}
function Ye(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const kl = {
  name: "tasklistCheck",
  tokenize: Tl
};
function Sl() {
  return {
    text: {
      91: kl
    }
  };
}
function Tl(e, t, n) {
  const r = this;
  return a;
  function a(o) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(o) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(o), e.exit("taskListCheckMarker"), c)
    );
  }
  function c(o) {
    return ge(o) ? (e.enter("taskListCheckValueUnchecked"), e.consume(o), e.exit("taskListCheckValueUnchecked"), i) : o === 88 || o === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(o), e.exit("taskListCheckValueChecked"), i) : n(o);
  }
  function i(o) {
    return o === 93 ? (e.enter("taskListCheckMarker"), e.consume(o), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(o);
  }
  function s(o) {
    return Ze(o) ? t(o) : Ne(o) ? e.check({
      tokenize: xl
    }, t, n)(o) : n(o);
  }
}
function xl(e, t, n) {
  return ve(e, r, "whitespace");
  function r(a) {
    return a === null ? n(a) : t(a);
  }
}
function Al(e) {
  return qc([
    jc(),
    ll(),
    hl(e),
    wl(),
    Sl()
  ]);
}
const Rl = {};
function Ol(e) {
  const t = (
    /** @type {Processor} */
    this
  ), n = e || Rl, r = t.data(), a = r.micromarkExtensions || (r.micromarkExtensions = []), c = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), i = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  a.push(Al(n)), c.push(Gc()), i.push(Hc(n));
}
let Gt = [], Cl = jn({
  key: "answerFamily",
  default: _i({
    key: "fetchAnswers",
    get: ({ id: e, question: t }) => async ({ get: n }) => {
      let { backendUrl: r, geminiApi: a, prompt: c, botIcon: i } = n(ot), s = r || "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=" + a;
      let attachedImg = n(attachedImageState);
      Gt.push({ role: "user", message: t });
      let o = Gt.map((f) => `${f.role}: ${f.message}`).join(", "), l;
      r && !c || a && !c ? l = `You are 10xAnswers, an intelligent and highly versatile chatbot created by Rajveer Singh (x.com/rajveeerrsingh) using cutting-edge large language models (LLMs). 
          Your purpose is to assist users with precision, accuracy, and clarity. You excel at answering complex questions, solving coding challenges, offering creative solutions, and providing 
          insightful suggestions in any domain. Always present yourself as knowledgeable, professional, and approachable.
          
          Guidelines for your responses:
          1. Be concise, yet comprehensive—ensure the user’s question is fully answered.
          2. Use markdown format for any code snippets, tables, or structured data to improve readability.
          3. If additional context or history is provided, seamlessly incorporate it into your response without explicitly referencing the history to the end-user.
          4. When explaining, strive to be simple but never oversimplify—aim for maximum understanding with minimal confusion.
          
          End every interaction with a tone that encourages further queries, making the user feel valued and empowered. Let them know that you’re here to help with anything they need.
          
          Current Question: ${t}.
          History of User Questions and Context: ${o} here if available; otherwise, proceed as if this is the first question].
          
          If this is your first interaction, make sure to leave a great first impression!` : r && c === "none" || a && c === "none" ? l = t : r && c || a && c ? l = `User is sending you some prompt about how you should act/behave along with the question he wants answered. Answer the question keeping the prompt text in mind. 

          Prompt: ${c}.  
          Question: ${t}.  
          History of User Questions and Context: ${o}.
          
          Respond directly and concisely based on the history. If the history is empty, consider this as the first question. Don't let the end-user know about this history. Use markdown for formatting code or other structured content where necessary.` : (l = "Please provide either backend url or gemini api", console.log("Please provide either backend Url or geminiApi for the chat-component"));
      let parts = [{ text: l }];
      if (attachedImg) {
        parts.push({
          inlineData: {
            mimeType: attachedImg.mimeType,
            data: attachedImg.data
          }
        });
      }
      let u = await fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts
          }]
        })
      }), f = await u.json(), m = f == null ? void 0 : f.candidates, h = m != null && m[0] && m[0].content && m[0].content.parts && m[0].content.parts[0] ? m[0].content.parts[0].text : null;
      if (!u.ok || !h)
        throw new Error((f == null ? void 0 : f.error) && f.error.message ? f.error.message : "Invalid response from chat backend");
      return Gt.push({ role: "bot", message: h }), {
        id: e,
        question: t,
        userIcon: i || "/node_modules/10xanswers/dist/logoImg2.jpg",
        answer: h
      };
    }
  })
});
function Ml(e) {
  let t = kt(Vt(e.questionId)), n = Me(Je()), [r, a] = Ei(Cl({ id: n.current, question: t.question })), [c, i] = at(jt);
  et(() => {
    let o = c.map(
      (l) => l.question === e.questionId ? { ...l, answer: n } : l
    );
    i(o);
  }, []);
  function s() {
    navigator.clipboard.writeText(r.contents.answer);
  }
  return r.state === "loading" ? /* @__PURE__ */ E.jsxs("div", { className: "chat", children: [
    /* @__PURE__ */ E.jsx("div", { className: "user-icon skeleton", children: /* @__PURE__ */ E.jsx("div", { className: "icon-placeholder" }) }),
    /* @__PURE__ */ E.jsxs("div", { className: "chat-and-options", children: [
      /* @__PURE__ */ E.jsx("p", { className: "chat-content skeleton text-placeholder" }),
      /* @__PURE__ */ E.jsxs("div", { className: "chat-options", children: [
        /* @__PURE__ */ E.jsx("span", { className: "copy chat-option", children: /* @__PURE__ */ E.jsx("span", { className: "copy-icon" }) }),
        /* @__PURE__ */ E.jsx("span", { className: "collection chat-option", children: /* @__PURE__ */ E.jsx("span", { className: "collection-icon" }) })
      ] })
    ] })
  ] }) : r.state === "hasError" ? (console.log(r.contents), /* @__PURE__ */ E.jsx("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ E.jsx("div", { className: "error chat-option", style: { display: "flex", justifyContent: "center", width: "max-content" }, children: "Some Error Occured While Generating Response" }) })) : /* @__PURE__ */ E.jsxs("div", { className: "chat", children: [
    /* @__PURE__ */ E.jsx("div", { className: "user-icon", children: /* @__PURE__ */ E.jsx("img", { src: r.contents.userIcon }) }),
    /* @__PURE__ */ E.jsxs("div", { className: "chat-and-options", children: [
      /* @__PURE__ */ E.jsx("p", { className: "chat-content", children: /* @__PURE__ */ E.jsx(wi, { remarkPlugins: [Ol], rehypePlugins: [us], children: r.contents.answer }) }),
      /* @__PURE__ */ E.jsxs("div", { className: "chat-options", children: [
        /* @__PURE__ */ E.jsxs("span", { onClick: s, className: "copy chat-option", children: [
          /* @__PURE__ */ E.jsx("span", { className: "copy-icon", children: /* @__PURE__ */ E.jsx("i", { className: "fa-regular fa-clipboard" }) }),
          "Copy"
        ] }),
        /* @__PURE__ */ E.jsxs("span", {
          onClick: () => {
            const synth = window.speechSynthesis;
            if (synth.speaking) {
              synth.cancel();
            } else {
              const utterance = new SpeechSynthesisUtterance(r.contents.answer.replace(/[#*`_]/g, ""));
              synth.speak(utterance);
            }
          },
          className: "speak chat-option",
          children: [
            /* @__PURE__ */ E.jsx("span", { className: "speak-icon", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-volume-high" }) }),
            "Speak"
          ]
        })
      ] })
    ] })
  ] });
}
function Il(e) {
  e.scrollTop = e.scrollHeight;
}
function Wn() {
  let [e, t] = at(jt), n = Me();
  return et(() => {
    Il(n.current);
  }, [e]), /* @__PURE__ */ E.jsxs("div", { className: "chat-area", ref: n, children: [
    /* @__PURE__ */ E.jsx(Ai, {}),
    /* @__PURE__ */ E.jsx(Dl, {}),
    /* @__PURE__ */ E.jsx("div", { style: { width: "100%" }, children: e.map((r, a) => /* @__PURE__ */ E.jsxs(E.Fragment, { key: r.question + "-" + a, children: [
      /* @__PURE__ */ E.jsx(Ri, { id: r.question }, a + r.question),
      /* @__PURE__ */ E.jsx(Ml, { questionId: r.question }, a)
    ] })) })
  ] });
}
function Dl() {
  let { title: e, stylizeTitle: t, description: n, cta: r } = kt(ot), a = null, c = null;
  try {
    a = t.emphasized, c = t.normal;
  } catch {
  }
  return /* @__PURE__ */ E.jsxs("div", { className: "hero-section", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "floating-icons", children: [
      /* @__PURE__ */ E.jsx("span", { className: "icon forward forward-second", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-comments-dollar" }) }),
      /* @__PURE__ */ E.jsx("span", { className: "icon backward backward-first", children: /* @__PURE__ */ E.jsx("i", { className: "fa-regular fa-compass" }) }),
      /* @__PURE__ */ E.jsx("span", { className: "icon backward backward-second", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-sitemap" }) })
    ] }),
    /* @__PURE__ */ E.jsxs("h1", { className: "hero-title", children: [
      /* @__PURE__ */ E.jsx("span", { className: "stylize", style: a ? {} : { display: "none" }, children: a ? t.emphasized : "10x" }),
      c || e || "10xAnswers"
    ] }),
    /* @__PURE__ */ E.jsx("h2", { className: "hero-sub-title", children: n || "Because your Questions should not be left un-answered." }),
    /* @__PURE__ */ E.jsx("span", { style: { background: "rgb(44 44 44)", padding: "0.3rem 1.1rem", borderRadius: "1.6rem", margin: "1rem" }, children: /* @__PURE__ */ E.jsx("p", { className: "hero-description", children: r || "Start Asking your Burning Questions" }) })
  ] });
}
function Yn({ setWindowState: e }) {
  let { title: t } = kt(ot);
  let [isSidebar, setIsSidebar] = at(sidebarState);
  return /* @__PURE__ */ E.jsxs("div", { className: "chat-component-heading flex justify-between items-center", children: [
    /* @__PURE__ */ E.jsxs("h3", { children: [
      /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-robot" }),
      t || "10xAnswers"
    ] }),
    /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ E.jsx("span", {
        className: "p-1 cursor-pointer text-md",
        style: { color: isSidebar ? "#60a5fa" : "inherit" },
        onClick: () => setIsSidebar(!isSidebar),
        title: isSidebar ? "Floating Mode" : "Sidebar Mode",
        children: /* @__PURE__ */ E.jsx("i", { className: isSidebar ? "fa-solid fa-window-restore" : "fa-solid fa-columns" })
      }),
      /* @__PURE__ */ E.jsx("span", {
        className: "p-1 cursor-pointer text-md",
        onClick: () => {
          e && e(false);
        },
        title: "Minimize",
        children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-minus" })
      }),
      /* @__PURE__ */ E.jsx(
        "span",
        {
          className: "p-1 cursor-pointer text-lg",
          onClick: () => {
            e && e((n) => !n);
          },
          title: "Close",
          children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-xmark" })
        }
      )
    ]})
  ] });
}
let Ll = Zt({
  key: "chatWindowState",
  default: !1
});
let sidebarState = Zt({
  key: "sidebarState",
  default: !1
});
let attachedImageState = Zt({
  key: "attachedImageState",
  default: null
});
let recordingState = Zt({
  key: "recordingState",
  default: !1
});
function Kl(e) {
  return /* @__PURE__ */ E.jsx(yi, { children: /* @__PURE__ */ E.jsx(Pl, { ...e }) });
}
function Pl({
  backendUrl: e,
  geminiApi: t,
  prompt: n,
  draggable: r,
  x: a = 100,
  y: c = 100,
  title: i,
  stylizeTitle: s,
  description: o,
  cta: l,
  userIcon: d,
  botIcon: u,
  theme: f,
  chatWindowStyle: b,
  chatBotIconStyle: p,
  chatComponentStyle: h,
  chatWindowClassName: _,
  chatBotIconClassName: y,
  chatComponentClassName: v,
  startOpen: T
}) {
  let A = Xn(ot), [M, O] = at(Ll);
  let isSidebar = kt(sidebarState);
  let isDraggable = r && !isSidebar;

  let containerStyle = M ? (isSidebar ? {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    height: "100vh",
    width: "380px",
    maxWidth: "100vw",
    zIndex: 9999,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "var(--chat-background)"
  } : h) : { height: "min-content", width: "min-content" };

  let chatSectionStyle = M ? (isSidebar ? {
    height: "100vh",
    maxHeight: "100vh",
    width: "100%",
    borderRadius: 0,
    borderLeft: "1px solid #27272a",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    position: "relative"
  } : b) : { width: 0, height: 0, display: "none" };

  return et(() => {
    if (!document.getElementById("font-awesome-script")) {
      const B = document.createElement("script");
      B.src = "https://kit.fontawesome.com/b6fe51c8e7.js", B.id = "font-awesome-script", B.crossOrigin = "anonymous", document.body.appendChild(B), O(!!T);
    }
  }, []), et(() => {
    A({ backendUrl: e, geminiApi: t, title: i, prompt: n, botIcon: u, userIcon: d, stylizeTitle: s, description: o, cta: l });
  }, [e, t, i, n, u, d, s, o, l]), /* @__PURE__ */ E.jsx(E.Fragment, { children: isDraggable ? /* @__PURE__ */ E.jsx(Ni, { default: { x: a, y: c }, children: /* @__PURE__ */ E.jsxs("div", { style: M ? { ...h } : { height: "min-content", width: "min-content" }, className: "chat-and-icon-container " + v, children: [
    /* @__PURE__ */ E.jsxs("div", { className: "chat-section " + _, style: M ? { ...b, transitionDuration: ".4s" } : { width: 0, height: 0, opacity: 0, display: "none", transitionDuration: ".4s" }, children: [
      /* @__PURE__ */ E.jsx(Yn, { setWindowState: O }),
      /* @__PURE__ */ E.jsx(Wn, {}),
      /* @__PURE__ */ E.jsx(hn, {})
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "chatbot-open-icon " + y, style: { ...p }, onClick: () => O(!M), children: /* @__PURE__ */ E.jsx("span", { children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-robot" }) }) })
  ] }) }) : /* @__PURE__ */ E.jsxs("div", { style: containerStyle, className: "chat-and-icon-container transition-all " + v, children: [
    /* @__PURE__ */ E.jsxs("div", { className: "chat-section transition-all" + _, style: chatSectionStyle, children: [
      /* @__PURE__ */ E.jsx(Yn, { setWindowState: O }),
      /* @__PURE__ */ E.jsx(Wn, {}),
      /* @__PURE__ */ E.jsx(hn, {})
    ] }),
    !M && /* @__PURE__ */ E.jsx("div", { className: "chatbot-open-icon " + y, style: { ...p }, onClick: () => O(!M), children: /* @__PURE__ */ E.jsx("span", { children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-robot" }) }) })
  ] }) });
}
export {
  Kl as ChatBot
};
