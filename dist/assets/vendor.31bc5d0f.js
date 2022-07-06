var OS = Object.defineProperty,
    DS = Object.defineProperties;
var PS = Object.getOwnPropertyDescriptors;
var Tl = Object.getOwnPropertySymbols;
var Eg = Object.prototype.hasOwnProperty,
    Og = Object.prototype.propertyIsEnumerable;
var Dg = (e, t, n) => t in e ? OS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n,
    Et = (e, t) => {
        for (var n in t || (t = {})) Eg.call(t, n) && Dg(e, n, t[n]);
        if (Tl)
            for (var n of Tl(t)) Og.call(t, n) && Dg(e, n, t[n]);
        return e
    },
    mn = (e, t) => DS(e, PS(t));
var Pg = (e, t) => {
    var n = {};
    for (var r in e) Eg.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Tl)
        for (var r of Tl(e)) t.indexOf(r) < 0 && Og.call(e, r) && (n[r] = e[r]);
    return n
};
var RS = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function TS(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }

function AS(e) {
    if (e.__esModule) return e;
    var t = Object.defineProperty({}, "__esModule", { value: !0 });
    return Object.keys(e).forEach(function(n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, r.get ? r : { enumerable: !0, get: function() { return e[n] } })
    }), t
}

function LS(e) { throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.') }
var Z = { exports: {} },
    Xe = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Rg = Object.getOwnPropertySymbols,
    FS = Object.prototype.hasOwnProperty,
    IS = Object.prototype.propertyIsEnumerable;

function NS(e) { if (e == null) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e) }

function jS() { try { if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1; for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n; var r = Object.getOwnPropertyNames(t).map(function(o) { return t[o] }); if (r.join("") !== "0123456789") return !1; var i = {}; return "abcdefghijklmnopqrst".split("").forEach(function(o) { i[o] = o }), Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst" } catch { return !1 } }
var Tg = jS() ? Object.assign : function(e, t) { for (var n, r = NS(e), i, o = 1; o < arguments.length; o++) { n = Object(arguments[o]); for (var s in n) FS.call(n, s) && (r[s] = n[s]); if (Rg) { i = Rg(n); for (var a = 0; a < i.length; a++) IS.call(n, i[a]) && (r[i[a]] = n[i[a]]) } } return r };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Af = Tg,
    uo = 60103,
    Ag = 60106;
Xe.Fragment = 60107;
Xe.StrictMode = 60108;
Xe.Profiler = 60114;
var Lg = 60109,
    Fg = 60110,
    Ig = 60112;
Xe.Suspense = 60113;
var Ng = 60115,
    jg = 60116;
if (typeof Symbol == "function" && Symbol.for) {
    var $n = Symbol.for;
    uo = $n("react.element"), Ag = $n("react.portal"), Xe.Fragment = $n("react.fragment"), Xe.StrictMode = $n("react.strict_mode"), Xe.Profiler = $n("react.profiler"), Lg = $n("react.provider"), Fg = $n("react.context"), Ig = $n("react.forward_ref"), Xe.Suspense = $n("react.suspense"), Ng = $n("react.memo"), jg = $n("react.lazy")
}
var zg = typeof Symbol == "function" && Symbol.iterator;

function zS(e) { return e === null || typeof e != "object" ? null : (e = zg && e[zg] || e["@@iterator"], typeof e == "function" ? e : null) }

function ks(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
var Bg = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
    Wg = {};

function co(e, t, n) { this.props = e, this.context = t, this.refs = Wg, this.updater = n || Bg }
co.prototype.isReactComponent = {};
co.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error(ks(85));
    this.updater.enqueueSetState(this, e, t, "setState")
};
co.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

function Hg() {}
Hg.prototype = co.prototype;

function Lf(e, t, n) { this.props = e, this.context = t, this.refs = Wg, this.updater = n || Bg }
var Ff = Lf.prototype = new Hg;
Ff.constructor = Lf;
Af(Ff, co.prototype);
Ff.isPureReactComponent = !0;
var If = { current: null },
    Yg = Object.prototype.hasOwnProperty,
    $g = { key: !0, ref: !0, __self: !0, __source: !0 };

function Vg(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Yg.call(t, r) && !$g.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return { $$typeof: uo, type: e, key: o, ref: s, props: i, _owner: If.current }
}

function BS(e, t) { return { $$typeof: uo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }

function Nf(e) { return typeof e == "object" && e !== null && e.$$typeof === uo }

function WS(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function(n) { return t[n] }) }
var Ug = /\/+/g;

function jf(e, t) { return typeof e == "object" && e !== null && e.key != null ? WS("" + e.key) : t.toString(36) }

function Al(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case uo:
                case Ag:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + jf(s, 0) : r, Array.isArray(i) ? (n = "", e != null && (n = e.replace(Ug, "$&/") + "/"), Al(i, t, n, "", function(u) { return u })) : i != null && (Nf(i) && (i = BS(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Ug, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Array.isArray(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + jf(o, a);
            s += Al(o, t, n, l, i)
        } else if (l = zS(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(o = e.next()).done;) o = o.value, l = r + jf(o, a++), s += Al(o, t, n, l, i);
        else if (o === "object") throw t = "" + e, Error(ks(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
    return s
}

function Ll(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Al(e, r, "", "", function(o) { return t.call(n, o, i++) }), r
}

function HS(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), e._status = 0, e._result = t, t.then(function(n) { e._status === 0 && (n = n.default, e._status = 1, e._result = n) }, function(n) { e._status === 0 && (e._status = 2, e._result = n) })
    }
    if (e._status === 1) return e._result;
    throw e._result
}
var Gg = { current: null };

function mr() { var e = Gg.current; if (e === null) throw Error(ks(321)); return e }
var YS = { ReactCurrentDispatcher: Gg, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: If, IsSomeRendererActing: { current: !1 }, assign: Af };
Xe.Children = { map: Ll, forEach: function(e, t, n) { Ll(e, function() { t.apply(this, arguments) }, n) }, count: function(e) { var t = 0; return Ll(e, function() { t++ }), t }, toArray: function(e) { return Ll(e, function(t) { return t }) || [] }, only: function(e) { if (!Nf(e)) throw Error(ks(143)); return e } };
Xe.Component = co;
Xe.PureComponent = Lf;
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = YS;
Xe.cloneElement = function(e, t, n) {
    if (e == null) throw Error(ks(267, e));
    var r = Af({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) { if (t.ref !== void 0 && (o = t.ref, s = If.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps; for (l in t) Yg.call(t, l) && !$g.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]) }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return { $$typeof: uo, type: e.type, key: i, ref: o, props: r, _owner: s }
};
Xe.createContext = function(e, t) { return t === void 0 && (t = null), e = { $$typeof: Fg, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: Lg, _context: e }, e.Consumer = e };
Xe.createElement = Vg;
Xe.createFactory = function(e) { var t = Vg.bind(null, e); return t.type = e, t };
Xe.createRef = function() { return { current: null } };
Xe.forwardRef = function(e) { return { $$typeof: Ig, render: e } };
Xe.isValidElement = Nf;
Xe.lazy = function(e) { return { $$typeof: jg, _payload: { _status: -1, _result: e }, _init: HS } };
Xe.memo = function(e, t) { return { $$typeof: Ng, type: e, compare: t === void 0 ? null : t } };
Xe.useCallback = function(e, t) { return mr().useCallback(e, t) };
Xe.useContext = function(e, t) { return mr().useContext(e, t) };
Xe.useDebugValue = function() {};
Xe.useEffect = function(e, t) { return mr().useEffect(e, t) };
Xe.useImperativeHandle = function(e, t, n) { return mr().useImperativeHandle(e, t, n) };
Xe.useLayoutEffect = function(e, t) { return mr().useLayoutEffect(e, t) };
Xe.useMemo = function(e, t) { return mr().useMemo(e, t) };
Xe.useReducer = function(e, t, n) { return mr().useReducer(e, t, n) };
Xe.useRef = function(e) { return mr().useRef(e) };
Xe.useState = function(e) { return mr().useState(e) };
Xe.version = "17.0.2";
Z.exports = Xe;
var Si = Z.exports,
    Xg = { exports: {} },
    On = {},
    qg = { exports: {} },
    Kg = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    var t, n, r, i;
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() { return o.now() }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() { return s.now() - a }
    }
    if (typeof window == "undefined" || typeof MessageChannel != "function") {
        var l = null,
            u = null,
            c = function() {
                if (l !== null) try {
                    var L = e.unstable_now();
                    l(!0, L), l = null
                } catch ($) { throw setTimeout(c, 0), $ }
            };
        t = function(L) { l !== null ? setTimeout(t, 0, L) : (l = L, setTimeout(c, 0)) }, n = function(L, $) { u = setTimeout(L, $) }, r = function() { clearTimeout(u) }, e.unstable_shouldYield = function() { return !1 }, i = e.unstable_forceFrameRate = function() {}
    } else {
        var d = window.setTimeout,
            h = window.clearTimeout;
        if (typeof console != "undefined") {
            var y = window.cancelAnimationFrame;
            typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof y != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
        }
        var w = !1,
            b = null,
            g = -1,
            m = 5,
            S = 0;
        e.unstable_shouldYield = function() { return e.unstable_now() >= S }, i = function() {}, e.unstable_forceFrameRate = function(L) { 0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : m = 0 < L ? Math.floor(1e3 / L) : 5 };
        var k = new MessageChannel,
            E = k.port2;
        k.port1.onmessage = function() {
            if (b !== null) {
                var L = e.unstable_now();
                S = L + m;
                try { b(!0, L) ? E.postMessage(null) : (w = !1, b = null) } catch ($) { throw E.postMessage(null), $ }
            } else w = !1
        }, t = function(L) { b = L, w || (w = !0, E.postMessage(null)) }, n = function(L, $) { g = d(function() { L(e.unstable_now()) }, $) }, r = function() { h(g), g = -1 }
    }

    function P(L, $) {
        var se = L.length;
        L.push($);
        e: for (;;) {
            var ge = se - 1 >>> 1,
                Se = L[ge];
            if (Se !== void 0 && 0 < U(Se, $)) L[ge] = $, L[se] = Se, se = ge;
            else break e
        }
    }

    function T(L) { return L = L[0], L === void 0 ? null : L }

    function I(L) {
        var $ = L[0];
        if ($ !== void 0) {
            var se = L.pop();
            if (se !== $) {
                L[0] = se;
                e: for (var ge = 0, Se = L.length; ge < Se;) {
                    var $e = 2 * (ge + 1) - 1,
                        qe = L[$e],
                        Ht = $e + 1,
                        Yt = L[Ht];
                    if (qe !== void 0 && 0 > U(qe, se)) Yt !== void 0 && 0 > U(Yt, qe) ? (L[ge] = Yt, L[Ht] = se, ge = Ht) : (L[ge] = qe, L[$e] = se, ge = $e);
                    else if (Yt !== void 0 && 0 > U(Yt, se)) L[ge] = Yt, L[Ht] = se, ge = Ht;
                    else break e
                }
            }
            return $
        }
        return null
    }

    function U(L, $) { var se = L.sortIndex - $.sortIndex; return se !== 0 ? se : L.id - $.id }
    var z = [],
        ve = [],
        Ee = 1,
        he = null,
        Re = 3,
        H = !1,
        Y = !1,
        X = !1;

    function te(L) {
        for (var $ = T(ve); $ !== null;) {
            if ($.callback === null) I(ve);
            else if ($.startTime <= L) I(ve), $.sortIndex = $.expirationTime, P(z, $);
            else break;
            $ = T(ve)
        }
    }

    function A(L) {
        if (X = !1, te(L), !Y)
            if (T(z) !== null) Y = !0, t(F);
            else {
                var $ = T(ve);
                $ !== null && n(A, $.startTime - L)
            }
    }

    function F(L, $) {
        Y = !1, X && (X = !1, r()), H = !0;
        var se = Re;
        try {
            for (te($), he = T(z); he !== null && (!(he.expirationTime > $) || L && !e.unstable_shouldYield());) {
                var ge = he.callback;
                if (typeof ge == "function") {
                    he.callback = null, Re = he.priorityLevel;
                    var Se = ge(he.expirationTime <= $);
                    $ = e.unstable_now(), typeof Se == "function" ? he.callback = Se : he === T(z) && I(z), te($)
                } else I(z);
                he = T(z)
            }
            if (he !== null) var $e = !0;
            else {
                var qe = T(ve);
                qe !== null && n(A, qe.startTime - $), $e = !1
            }
            return $e
        } finally { he = null, Re = se, H = !1 }
    }
    var q = i;
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) { L.callback = null }, e.unstable_continueExecution = function() { Y || H || (Y = !0, t(F)) }, e.unstable_getCurrentPriorityLevel = function() { return Re }, e.unstable_getFirstCallbackNode = function() { return T(z) }, e.unstable_next = function(L) {
        switch (Re) {
            case 1:
            case 2:
            case 3:
                var $ = 3;
                break;
            default:
                $ = Re
        }
        var se = Re;
        Re = $;
        try { return L() } finally { Re = se }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = q, e.unstable_runWithPriority = function(L, $) {
        switch (L) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                L = 3
        }
        var se = Re;
        Re = L;
        try { return $() } finally { Re = se }
    }, e.unstable_scheduleCallback = function(L, $, se) {
        var ge = e.unstable_now();
        switch (typeof se == "object" && se !== null ? (se = se.delay, se = typeof se == "number" && 0 < se ? ge + se : ge) : se = ge, L) {
            case 1:
                var Se = -1;
                break;
            case 2:
                Se = 250;
                break;
            case 5:
                Se = 1073741823;
                break;
            case 4:
                Se = 1e4;
                break;
            default:
                Se = 5e3
        }
        return Se = se + Se, L = { id: Ee++, callback: $, priorityLevel: L, startTime: se, expirationTime: Se, sortIndex: -1 }, se > ge ? (L.sortIndex = se, P(ve, L), T(z) === null && L === T(ve) && (X ? r() : X = !0, n(A, se - ge))) : (L.sortIndex = Se, P(z, L), Y || H || (Y = !0, t(F))), L
    }, e.unstable_wrapCallback = function(L) {
        var $ = Re;
        return function() {
            var se = Re;
            Re = $;
            try { return L.apply(this, arguments) } finally { Re = se }
        }
    }
})(Kg);
qg.exports = Kg;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fl = Z.exports,
    pt = Tg,
    At = qg.exports;

function ne(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
if (!Fl) throw Error(ne(227));
var Qg = new Set,
    Cs = {};

function ki(e, t) { fo(e, t), fo(e + "Capture", t) }

function fo(e, t) { for (Cs[e] = t, e = 0; e < t.length; e++) Qg.add(t[e]) }
var gr = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
    $S = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Zg = Object.prototype.hasOwnProperty,
    Jg = {},
    e0 = {};

function VS(e) { return Zg.call(e0, e) ? !0 : Zg.call(Jg, e) ? !1 : $S.test(e) ? e0[e] = !0 : (Jg[e] = !0, !1) }

function US(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function GS(e, t, n, r) {
    if (t === null || typeof t == "undefined" || US(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function tn(e, t, n, r, i, o, s) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s }
var Nt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { Nt[e] = new tn(e, 0, !1, e, null, !1, !1) });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Nt[t] = new tn(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { Nt[e] = new tn(e, 2, !1, e.toLowerCase(), null, !1, !1) });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { Nt[e] = new tn(e, 2, !1, e, null, !1, !1) });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { Nt[e] = new tn(e, 3, !1, e.toLowerCase(), null, !1, !1) });
["checked", "multiple", "muted", "selected"].forEach(function(e) { Nt[e] = new tn(e, 3, !0, e, null, !1, !1) });
["capture", "download"].forEach(function(e) { Nt[e] = new tn(e, 4, !1, e, null, !1, !1) });
["cols", "rows", "size", "span"].forEach(function(e) { Nt[e] = new tn(e, 6, !1, e, null, !1, !1) });
["rowSpan", "start"].forEach(function(e) { Nt[e] = new tn(e, 5, !1, e.toLowerCase(), null, !1, !1) });
var zf = /[\-:]([a-z])/g;

function Bf(e) { return e[1].toUpperCase() }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset strokeLinecap strokeLinejoin stroke-miterlimit stroke-opacity strokeWidth text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(zf, Bf);
    Nt[t] = new tn(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(zf, Bf);
    Nt[t] = new tn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(zf, Bf);
    Nt[t] = new tn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) { Nt[e] = new tn(e, 1, !1, e.toLowerCase(), null, !1, !1) });
Nt.xlinkHref = new tn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) { Nt[e] = new tn(e, 1, !1, e.toLowerCase(), null, !0, !0) });

function Wf(e, t, n, r) {
    var i = Nt.hasOwnProperty(t) ? Nt[t] : null,
        o = i !== null ? i.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
    o || (GS(t, n, i, r) && (n = null), r || i === null ? VS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ci = Fl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ms = 60103,
    Mi = 60106,
    zr = 60107,
    Hf = 60108,
    Es = 60114,
    Yf = 60109,
    $f = 60110,
    Il = 60112,
    Os = 60113,
    Nl = 60120,
    jl = 60115,
    Vf = 60116,
    Uf = 60121,
    Gf = 60128,
    t0 = 60129,
    Xf = 60130,
    qf = 60131;
if (typeof Symbol == "function" && Symbol.for) {
    var Lt = Symbol.for;
    Ms = Lt("react.element"), Mi = Lt("react.portal"), zr = Lt("react.fragment"), Hf = Lt("react.strict_mode"), Es = Lt("react.profiler"), Yf = Lt("react.provider"), $f = Lt("react.context"), Il = Lt("react.forward_ref"), Os = Lt("react.suspense"), Nl = Lt("react.suspense_list"), jl = Lt("react.memo"), Vf = Lt("react.lazy"), Uf = Lt("react.block"), Lt("react.scope"), Gf = Lt("react.opaque.id"), t0 = Lt("react.debug_trace_mode"), Xf = Lt("react.offscreen"), qf = Lt("react.legacy_hidden")
}
var n0 = typeof Symbol == "function" && Symbol.iterator;

function Ds(e) { return e === null || typeof e != "object" ? null : (e = n0 && e[n0] || e["@@iterator"], typeof e == "function" ? e : null) }
var Kf;

function Ps(e) {
    if (Kf === void 0) try { throw Error() } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Kf = t && t[1] || ""
    }
    return `
` + Kf + e
}
var Qf = !1;

function zl(e, t) {
    if (!e || Qf) return "";
    Qf = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) {
                try { Reflect.construct(t, []) } catch (l) { var r = l }
                Reflect.construct(e, [], t)
            } else {
                try { t.call() } catch (l) { r = l }
                e.call(t.prototype)
            }
        else {
            try { throw Error() } catch (l) { r = l }
            e()
        }
    } catch (l) {
        if (l && r && typeof l.stack == "string") {
            for (var i = l.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || i[s] !== o[a]) return `
` + i[s].replace(" at new ", " at ");
                    while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally { Qf = !1, Error.prepareStackTrace = n }
    return (e = e ? e.displayName || e.name : "") ? Ps(e) : ""
}

function XS(e) {
    switch (e.tag) {
        case 5:
            return Ps(e.type);
        case 16:
            return Ps("Lazy");
        case 13:
            return Ps("Suspense");
        case 19:
            return Ps("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = zl(e.type, !1), e;
        case 11:
            return e = zl(e.type.render, !1), e;
        case 22:
            return e = zl(e.type._render, !1), e;
        case 1:
            return e = zl(e.type, !0), e;
        default:
            return ""
    }
}

function ho(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case zr:
            return "Fragment";
        case Mi:
            return "Portal";
        case Es:
            return "Profiler";
        case Hf:
            return "StrictMode";
        case Os:
            return "Suspense";
        case Nl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case $f:
            return (e.displayName || "Context") + ".Consumer";
        case Yf:
            return (e._context.displayName || "Context") + ".Provider";
        case Il:
            var t = e.render;
            return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case jl:
            return ho(e.type);
        case Uf:
            return ho(e._render);
        case Vf:
            t = e._payload, e = e._init;
            try { return ho(e(t)) } catch {}
    }
    return null
}

function Br(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
            return e;
        default:
            return ""
    }
}

function r0(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") }

function qS(e) {
    var t = r0(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, { configurable: !0, get: function() { return i.call(this) }, set: function(s) { r = "" + s, o.call(this, s) } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() { return r }, setValue: function(s) { r = "" + s }, stopTracking: function() { e._valueTracker = null, delete e[t] } }
    }
}

function Bl(e) { e._valueTracker || (e._valueTracker = qS(e)) }

function i0(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = r0(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Wl(e) { if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null; try { return e.activeElement || e.body } catch { return e.body } }

function Zf(e, t) { var n = t.checked; return pt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked }) }

function o0(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Br(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }
}

function s0(e, t) { t = t.checked, t != null && Wf(e, "checked", t, !1) }

function Jf(e, t) {
    s0(e, t);
    var n = Br(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") { e.removeAttribute("value"); return }
    t.hasOwnProperty("value") ? ed(e, t.type, n) : t.hasOwnProperty("defaultValue") && ed(e, t.type, Br(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function a0(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ed(e, t, n) {
    (t !== "number" || Wl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

function KS(e) { var t = ""; return Fl.Children.forEach(e, function(n) { n != null && (t += n) }), t }

function td(e, t) { return e = pt({ children: void 0 }, t), (t = KS(t.children)) && (e.children = t), e }

function po(e, t, n, r) {
    if (e = e.options, t) { t = {}; for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0; for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0) } else {
        for (n = "" + Br(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) { e[i].selected = !0, r && (e[i].defaultSelected = !0); return }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function nd(e, t) { if (t.dangerouslySetInnerHTML != null) throw Error(ne(91)); return pt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

function l0(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(ne(92));
            if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(ne(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = { initialValue: Br(n) }
}

function u0(e, t) {
    var n = Br(t.value),
        r = Br(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function c0(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
var rd = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };

function f0(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function id(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? f0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
var Hl, d0 = function(e) { return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) { MSApp.execUnsafeLocalFunction(function() { return e(t, n, r, i) }) } : e }(function(e, t) {
    if (e.namespaceURI !== rd.svg || "innerHTML" in e) e.innerHTML = t;
    else { for (Hl = Hl || document.createElement("div"), Hl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hl.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) }
});

function Rs(e, t) {
    if (t) { var n = e.firstChild; if (n && n === e.lastChild && n.nodeType === 3) { n.nodeValue = t; return } }
    e.textContent = t
}
var Ts = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    QS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ts).forEach(function(e) { QS.forEach(function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), Ts[t] = Ts[e] }) });

function h0(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ts.hasOwnProperty(e) && Ts[e] ? ("" + t).trim() : t + "px" }

function p0(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = h0(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var ZS = pt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

function od(e, t) { if (t) { if (ZS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(ne(137, e)); if (t.dangerouslySetInnerHTML != null) { if (t.children != null) throw Error(ne(60)); if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(ne(61)) } if (t.style != null && typeof t.style != "object") throw Error(ne(62)) } }

function sd(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}

function ad(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
var ld = null,
    mo = null,
    go = null;

function m0(e) {
    if (e = Qs(e)) {
        if (typeof ld != "function") throw Error(ne(280));
        var t = e.stateNode;
        t && (t = su(t), ld(e.stateNode, e.type, t))
    }
}

function g0(e) { mo ? go ? go.push(e) : go = [e] : mo = e }

function y0() {
    if (mo) {
        var e = mo,
            t = go;
        if (go = mo = null, m0(e), t)
            for (e = 0; e < t.length; e++) m0(t[e])
    }
}

function ud(e, t) { return e(t) }

function v0(e, t, n, r, i) { return e(t, n, r, i) }

function cd() {}
var w0 = ud,
    Ei = !1,
    fd = !1;

function dd() {
    (mo !== null || go !== null) && (cd(), y0())
}

function JS(e, t, n) {
    if (fd) return e(t, n);
    fd = !0;
    try { return w0(e, t, n) } finally { fd = !1, dd() }
}

function As(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = su(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(ne(231, t, typeof n));
    return n
}
var hd = !1;
if (gr) try {
    var Ls = {};
    Object.defineProperty(Ls, "passive", { get: function() { hd = !0 } }), window.addEventListener("test", Ls, Ls), window.removeEventListener("test", Ls, Ls)
} catch { hd = !1 }

function e2(e, t, n, r, i, o, s, a, l) { var u = Array.prototype.slice.call(arguments, 3); try { t.apply(n, u) } catch (c) { this.onError(c) } }
var Fs = !1,
    Yl = null,
    $l = !1,
    pd = null,
    t2 = { onError: function(e) { Fs = !0, Yl = e } };

function n2(e, t, n, r, i, o, s, a, l) { Fs = !1, Yl = null, e2.apply(t2, arguments) }

function r2(e, t, n, r, i, o, s, a, l) {
    if (n2.apply(this, arguments), Fs) {
        if (Fs) {
            var u = Yl;
            Fs = !1, Yl = null
        } else throw Error(ne(198));
        $l || ($l = !0, pd = u)
    }
}

function Oi(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, (t.flags & 1026) != 0 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function x0(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null }

function b0(e) { if (Oi(e) !== e) throw Error(ne(188)) }

function i2(e) {
    var t = e.alternate;
    if (!t) { if (t = Oi(e), t === null) throw Error(ne(188)); return t !== e ? null : e }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) { if (r = i.return, r !== null) { n = r; continue } break }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return b0(i), e;
                if (o === r) return b0(i), t;
                o = o.sibling
            }
            throw Error(ne(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) { s = !0, n = i, r = o; break }
                if (a === r) { s = !0, r = i, n = o; break }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) { s = !0, n = o, r = i; break }
                    if (a === r) { s = !0, r = o, n = i; break }
                    a = a.sibling
                }
                if (!s) throw Error(ne(189))
            }
        }
        if (n.alternate !== r) throw Error(ne(190))
    }
    if (n.tag !== 3) throw Error(ne(188));
    return n.stateNode.current === n ? e : t
}

function _0(e) {
    if (e = i2(e), !e) return null;
    for (var t = e;;) {
        if (t.tag === 5 || t.tag === 6) return t;
        if (t.child) t.child.return = t, t = t.child;
        else {
            if (t === e) break;
            for (; !t.sibling;) {
                if (!t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return null
}

function S0(e, t) {
    for (var n = e.alternate; t !== null;) {
        if (t === e || t === n) return !0;
        t = t.return
    }
    return !1
}
var k0, md, C0, M0, gd = !1,
    Jn = [],
    Wr = null,
    Hr = null,
    Yr = null,
    Is = new Map,
    Ns = new Map,
    js = [],
    E0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function yd(e, t, n, r, i) { return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: i, targetContainers: [r] } }

function O0(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Wr = null;
            break;
        case "dragenter":
        case "dragleave":
            Hr = null;
            break;
        case "mouseover":
        case "mouseout":
            Yr = null;
            break;
        case "pointerover":
        case "pointerout":
            Is.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ns.delete(t.pointerId)
    }
}

function zs(e, t, n, r, i, o) { return e === null || e.nativeEvent !== o ? (e = yd(t, n, r, i, o), t !== null && (t = Qs(t), t !== null && md(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e) }

function o2(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Wr = zs(Wr, e, t, n, r, i), !0;
        case "dragenter":
            return Hr = zs(Hr, e, t, n, r, i), !0;
        case "mouseover":
            return Yr = zs(Yr, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return Is.set(o, zs(Is.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, Ns.set(o, zs(Ns.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function s2(e) {
    var t = Di(e.target);
    if (t !== null) { var n = Oi(t); if (n !== null) { if (t = n.tag, t === 13) { if (t = x0(n), t !== null) { e.blockedOn = t, M0(e.lanePriority, function() { At.unstable_runWithPriority(e.priority, function() { C0(n) }) }); return } } else if (t === 3 && n.stateNode.hydrate) { e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null; return } } }
    e.blockedOn = null
}

function Vl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Sd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null) return t = Qs(n), t !== null && md(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function D0(e, t, n) { Vl(e) && n.delete(t) }

function a2() {
    for (gd = !1; 0 < Jn.length;) {
        var e = Jn[0];
        if (e.blockedOn !== null) { e = Qs(e.blockedOn), e !== null && k0(e); break }
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = Sd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n !== null) { e.blockedOn = n; break }
            t.shift()
        }
        e.blockedOn === null && Jn.shift()
    }
    Wr !== null && Vl(Wr) && (Wr = null), Hr !== null && Vl(Hr) && (Hr = null), Yr !== null && Vl(Yr) && (Yr = null), Is.forEach(D0), Ns.forEach(D0)
}

function Bs(e, t) { e.blockedOn === t && (e.blockedOn = null, gd || (gd = !0, At.unstable_scheduleCallback(At.unstable_NormalPriority, a2))) }

function P0(e) {
    function t(i) { return Bs(i, e) }
    if (0 < Jn.length) {
        Bs(Jn[0], e);
        for (var n = 1; n < Jn.length; n++) {
            var r = Jn[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Wr !== null && Bs(Wr, e), Hr !== null && Bs(Hr, e), Yr !== null && Bs(Yr, e), Is.forEach(t), Ns.forEach(t), n = 0; n < js.length; n++) r = js[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < js.length && (n = js[0], n.blockedOn === null);) s2(n), n.blockedOn === null && js.shift()
}

function Ul(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n }
var yo = { animationend: Ul("Animation", "AnimationEnd"), animationiteration: Ul("Animation", "AnimationIteration"), animationstart: Ul("Animation", "AnimationStart"), transitionend: Ul("Transition", "TransitionEnd") },
    vd = {},
    R0 = {};
gr && (R0 = document.createElement("div").style, "AnimationEvent" in window || (delete yo.animationend.animation, delete yo.animationiteration.animation, delete yo.animationstart.animation), "TransitionEvent" in window || delete yo.transitionend.transition);

function Gl(e) {
    if (vd[e]) return vd[e];
    if (!yo[e]) return e;
    var t = yo[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in R0) return vd[e] = t[n];
    return e
}
var T0 = Gl("animationend"),
    A0 = Gl("animationiteration"),
    L0 = Gl("animationstart"),
    F0 = Gl("transitionend"),
    I0 = new Map,
    wd = new Map,
    l2 = ["abort", "abort", T0, "animationEnd", A0, "animationIteration", L0, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", F0, "transitionEnd", "waiting", "waiting"];

function xd(e, t) {
    for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
            i = e[n + 1];
        i = "on" + (i[0].toUpperCase() + i.slice(1)), wd.set(r, t), I0.set(r, i), ki(i, [r])
    }
}
var u2 = At.unstable_now;
u2();
var ot = 8;

function vo(e) { if ((1 & e) != 0) return ot = 15, 1; if ((2 & e) != 0) return ot = 14, 2; if ((4 & e) != 0) return ot = 13, 4; var t = 24 & e; return t !== 0 ? (ot = 12, t) : (e & 32) != 0 ? (ot = 11, 32) : (t = 192 & e, t !== 0 ? (ot = 10, t) : (e & 256) != 0 ? (ot = 9, 256) : (t = 3584 & e, t !== 0 ? (ot = 8, t) : (e & 4096) != 0 ? (ot = 7, 4096) : (t = 4186112 & e, t !== 0 ? (ot = 6, t) : (t = 62914560 & e, t !== 0 ? (ot = 5, t) : e & 67108864 ? (ot = 4, 67108864) : (e & 134217728) != 0 ? (ot = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (ot = 2, t) : (1073741824 & e) != 0 ? (ot = 1, 1073741824) : (ot = 8, e)))))) }

function c2(e) {
    switch (e) {
        case 99:
            return 15;
        case 98:
            return 10;
        case 97:
        case 96:
            return 8;
        case 95:
            return 2;
        default:
            return 0
    }
}

function f2(e) {
    switch (e) {
        case 15:
        case 14:
            return 99;
        case 13:
        case 12:
        case 11:
        case 10:
            return 98;
        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
            return 97;
        case 3:
        case 2:
        case 1:
            return 95;
        case 0:
            return 90;
        default:
            throw Error(ne(358, e))
    }
}

function Ws(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return ot = 0;
    var r = 0,
        i = 0,
        o = e.expiredLanes,
        s = e.suspendedLanes,
        a = e.pingedLanes;
    if (o !== 0) r = o, i = ot = 15;
    else if (o = n & 134217727, o !== 0) {
        var l = o & ~s;
        l !== 0 ? (r = vo(l), i = ot) : (a &= o, a !== 0 && (r = vo(a), i = ot))
    } else o = n & ~s, o !== 0 ? (r = vo(o), i = ot) : a !== 0 && (r = vo(a), i = ot);
    if (r === 0) return 0;
    if (r = 31 - $r(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && (t & s) == 0) {
        if (vo(t), i <= ot) return t;
        ot = i
    }
    if (t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - $r(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function N0(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 }

function Xl(e, t) {
    switch (e) {
        case 15:
            return 1;
        case 14:
            return 2;
        case 12:
            return e = wo(24 & ~t), e === 0 ? Xl(10, t) : e;
        case 10:
            return e = wo(192 & ~t), e === 0 ? Xl(8, t) : e;
        case 8:
            return e = wo(3584 & ~t), e === 0 && (e = wo(4186112 & ~t), e === 0 && (e = 512)), e;
        case 2:
            return t = wo(805306368 & ~t), t === 0 && (t = 268435456), t
    }
    throw Error(ne(358, e))
}

function wo(e) { return e & -e }

function bd(e) { for (var t = [], n = 0; 31 > n; n++) t.push(e); return t }

function ql(e, t, n) {
    e.pendingLanes |= t;
    var r = t - 1;
    e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - $r(t), e[t] = n
}
var $r = Math.clz32 ? Math.clz32 : p2,
    d2 = Math.log,
    h2 = Math.LN2;

function p2(e) { return e === 0 ? 32 : 31 - (d2(e) / h2 | 0) | 0 }
var m2 = At.unstable_UserBlockingPriority,
    g2 = At.unstable_runWithPriority,
    Kl = !0;

function y2(e, t, n, r) {
    Ei || cd();
    var i = _d,
        o = Ei;
    Ei = !0;
    try { v0(i, e, t, n, r) } finally {
        (Ei = o) || dd()
    }
}

function v2(e, t, n, r) { g2(m2, _d.bind(null, e, t, n, r)) }

function _d(e, t, n, r) {
    if (Kl) {
        var i;
        if ((i = (t & 4) == 0) && 0 < Jn.length && -1 < E0.indexOf(e)) e = yd(null, e, t, n, r), Jn.push(e);
        else {
            var o = Sd(e, t, n, r);
            if (o === null) i && O0(e, r);
            else {
                if (i) {
                    if (-1 < E0.indexOf(e)) { e = yd(o, e, t, n, r), Jn.push(e); return }
                    if (o2(o, e, t, n, r)) return;
                    O0(e, r)
                }
                hy(e, t, r, null, n)
            }
        }
    }
}

function Sd(e, t, n, r) {
    var i = ad(r);
    if (i = Di(i), i !== null) {
        var o = Oi(i);
        if (o === null) i = null;
        else {
            var s = o.tag;
            if (s === 13) {
                if (i = x0(o), i !== null) return i;
                i = null
            } else if (s === 3) {
                if (o.stateNode.hydrate) return o.tag === 3 ? o.stateNode.containerInfo : null;
                i = null
            } else o !== i && (i = null)
        }
    }
    return hy(e, t, r, i, n), null
}
var Vr = null,
    kd = null,
    Ql = null;

function j0() {
    if (Ql) return Ql;
    var e, t = kd,
        n = t.length,
        r, i = "value" in Vr ? Vr.value : Vr.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return Ql = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Zl(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

function Jl() { return !0 }

function z0() { return !1 }

function gn(e) {
    function t(n, r, i, o, s) { this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null; for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Jl : z0, this.isPropagationStopped = z0, this }
    return pt(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Jl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Jl)
        },
        persist: function() {},
        isPersistent: Jl
    }), t
}
var xo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
    Cd = gn(xo),
    Hs = pt({}, xo, { view: 0, detail: 0 }),
    w2 = gn(Hs),
    Md, Ed, Ys, eu = pt({}, Hs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dd, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== Ys && (Ys && e.type === "mousemove" ? (Md = e.screenX - Ys.screenX, Ed = e.screenY - Ys.screenY) : Ed = Md = 0, Ys = e), Md) }, movementY: function(e) { return "movementY" in e ? e.movementY : Ed } }),
    B0 = gn(eu),
    x2 = pt({}, eu, { dataTransfer: 0 }),
    b2 = gn(x2),
    _2 = pt({}, Hs, { relatedTarget: 0 }),
    Od = gn(_2),
    S2 = pt({}, xo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    k2 = gn(S2),
    C2 = pt({}, xo, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
    M2 = gn(C2),
    E2 = pt({}, xo, { data: 0 }),
    W0 = gn(E2),
    O2 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    D2 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    P2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

function R2(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = P2[e]) ? !!t[e] : !1 }

function Dd() { return R2 }
var T2 = pt({}, Hs, { key: function(e) { if (e.key) { var t = O2[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = Zl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? D2[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Dd, charCode: function(e) { return e.type === "keypress" ? Zl(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? Zl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
    A2 = gn(T2),
    L2 = pt({}, eu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    H0 = gn(L2),
    F2 = pt({}, Hs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dd }),
    I2 = gn(F2),
    N2 = pt({}, xo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    j2 = gn(N2),
    z2 = pt({}, eu, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
    B2 = gn(z2),
    W2 = [9, 13, 27, 32],
    Pd = gr && "CompositionEvent" in window,
    $s = null;
gr && "documentMode" in document && ($s = document.documentMode);
var H2 = gr && "TextEvent" in window && !$s,
    Y0 = gr && (!Pd || $s && 8 < $s && 11 >= $s),
    $0 = String.fromCharCode(32),
    V0 = !1;

function U0(e, t) {
    switch (e) {
        case "keyup":
            return W2.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function G0(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null }
var bo = !1;

function Y2(e, t) {
    switch (e) {
        case "compositionend":
            return G0(t);
        case "keypress":
            return t.which !== 32 ? null : (V0 = !0, $0);
        case "textInput":
            return e = t.data, e === $0 && V0 ? null : e;
        default:
            return null
    }
}

function $2(e, t) {
    if (bo) return e === "compositionend" || !Pd && U0(e, t) ? (e = j0(), Ql = kd = Vr = null, bo = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) }
            return null;
        case "compositionend":
            return Y0 && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var V2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

function X0(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!V2[e.type] : t === "textarea" }

function q0(e, t, n, r) { g0(r), t = nu(t, "onChange"), 0 < t.length && (n = new Cd("onChange", "change", null, n, r), e.push({ event: n, listeners: t })) }
var Vs = null,
    Us = null;

function U2(e) { ly(e, 0) }

function tu(e) { var t = Mo(e); if (i0(t)) return e }

function G2(e, t) { if (e === "change") return t }
var K0 = !1;
if (gr) {
    var Rd;
    if (gr) {
        var Td = "oninput" in document;
        if (!Td) {
            var Q0 = document.createElement("div");
            Q0.setAttribute("oninput", "return;"), Td = typeof Q0.oninput == "function"
        }
        Rd = Td
    } else Rd = !1;
    K0 = Rd && (!document.documentMode || 9 < document.documentMode)
}

function Z0() { Vs && (Vs.detachEvent("onpropertychange", J0), Us = Vs = null) }

function J0(e) {
    if (e.propertyName === "value" && tu(Us)) {
        var t = [];
        if (q0(t, Us, e, ad(e)), e = U2, Ei) e(t);
        else { Ei = !0; try { ud(e, t) } finally { Ei = !1, dd() } }
    }
}

function X2(e, t, n) { e === "focusin" ? (Z0(), Vs = t, Us = n, Vs.attachEvent("onpropertychange", J0)) : e === "focusout" && Z0() }

function q2(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return tu(Us) }

function K2(e, t) { if (e === "click") return tu(t) }

function Q2(e, t) { if (e === "input" || e === "change") return tu(t) }

function Z2(e, t) { return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t }
var Dn = typeof Object.is == "function" ? Object.is : Z2,
    J2 = Object.prototype.hasOwnProperty;

function Gs(e, t) {
    if (Dn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++)
        if (!J2.call(t, n[r]) || !Dn(e[n[r]], t[n[r]])) return !1;
    return !0
}

function ey(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

function ty(e, t) {
    var n = ey(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) { n = n.nextSibling; break e }
                n = n.parentNode
            }
            n = void 0
        }
        n = ey(n)
    }
}

function ny(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ny(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1 }

function ry() {
    for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement;) {
        try { var n = typeof t.contentWindow.location.href == "string" } catch { n = !1 }
        if (n) e = t.contentWindow;
        else break;
        t = Wl(e.document)
    }
    return t
}

function Ad(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") }
var ek = gr && "documentMode" in document && 11 >= document.documentMode,
    _o = null,
    Ld = null,
    Xs = null,
    Fd = !1;

function iy(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fd || _o == null || _o !== Wl(r) || (r = _o, "selectionStart" in r && Ad(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Xs && Gs(Xs, r) || (Xs = r, r = nu(Ld, "onSelect"), 0 < r.length && (t = new Cd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = _o)))
}
xd("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
xd("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
xd(l2, 2);
for (var oy = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Id = 0; Id < oy.length; Id++) wd.set(oy[Id], 0);
fo("onMouseEnter", ["mouseout", "mouseover"]);
fo("onMouseLeave", ["mouseout", "mouseover"]);
fo("onPointerEnter", ["pointerout", "pointerover"]);
fo("onPointerLeave", ["pointerout", "pointerover"]);
ki("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ki("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ki("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ki("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ki("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ki("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    sy = new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));

function ay(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, r2(r, t, void 0, e), e.currentTarget = null
}

function ly(e, t) {
    t = (t & 4) != 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
                    ay(i, a, u), o = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                        ay(i, a, u), o = l
                    }
        }
    }
    if ($l) throw e = pd, $l = !1, pd = null, e
}

function lt(e, t) {
    var n = wy(t),
        r = e + "__bubble";
    n.has(r) || (dy(t, e, 2, !1), n.add(r))
}
var uy = "_reactListening" + Math.random().toString(36).slice(2);

function cy(e) { e[uy] || (e[uy] = !0, Qg.forEach(function(t) { sy.has(t) || fy(t, !1, e, null), fy(t, !0, e, null) })) }

function fy(e, t, n, r) {
    var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
        o = n;
    if (e === "selectionchange" && n.nodeType !== 9 && (o = n.ownerDocument), r !== null && !t && sy.has(e)) {
        if (e !== "scroll") return;
        i |= 2, o = r
    }
    var s = wy(o),
        a = e + "__" + (t ? "capture" : "bubble");
    s.has(a) || (t && (i |= 4), dy(o, e, i, t), s.add(a))
}

function dy(e, t, n, r) {
    var i = wd.get(t);
    switch (i === void 0 ? 2 : i) {
        case 0:
            i = y2;
            break;
        case 1:
            i = v2;
            break;
        default:
            i = _d
    }
    n = i.bind(null, t, n, e), i = void 0, !hd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1)
}

function hy(e, t, n, r, i) {
    var o = r;
    if ((t & 1) == 0 && (t & 2) == 0 && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = Di(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) { r = o = s; continue e }
                a = a.parentNode
            }
        }
        r = r.return
    }
    JS(function() {
        var u = o,
            c = ad(n),
            d = [];
        e: {
            var h = I0.get(e);
            if (h !== void 0) {
                var y = Cd,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Zl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = A2;
                        break;
                    case "focusin":
                        w = "focus", y = Od;
                        break;
                    case "focusout":
                        w = "blur", y = Od;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Od;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = B0;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = b2;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = I2;
                        break;
                    case T0:
                    case A0:
                    case L0:
                        y = k2;
                        break;
                    case F0:
                        y = j2;
                        break;
                    case "scroll":
                        y = w2;
                        break;
                    case "wheel":
                        y = B2;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = M2;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = H0
                }
                var b = (t & 4) != 0,
                    g = !b && e === "scroll",
                    m = b ? h !== null ? h + "Capture" : null : h;
                b = [];
                for (var S = u, k; S !== null;) {
                    k = S;
                    var E = k.stateNode;
                    if (k.tag === 5 && E !== null && (k = E, m !== null && (E = As(S, m), E != null && b.push(Ks(S, E, k)))), g) break;
                    S = S.return
                }
                0 < b.length && (h = new y(h, w, null, n, c), d.push({ event: h, listeners: b }))
            }
        }
        if ((t & 7) == 0) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && (t & 16) == 0 && (w = n.relatedTarget || n.fromElement) && (Di(w) || w[Co])) break e;
                if ((y || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = u, w = w ? Di(w) : null, w !== null && (g = Oi(w), w !== g || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = u), y !== w)) {
                    if (b = B0, E = "onMouseLeave", m = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (b = H0, E = "onPointerLeave", m = "onPointerEnter", S = "pointer"), g = y == null ? h : Mo(y), k = w == null ? h : Mo(w), h = new b(E, S + "leave", y, n, c), h.target = g, h.relatedTarget = k, E = null, Di(c) === u && (b = new b(m, S + "enter", w, n, c), b.target = k, b.relatedTarget = g, E = b), g = E, y && w) t: {
                        for (b = y, m = w, S = 0, k = b; k; k = So(k)) S++;
                        for (k = 0, E = m; E; E = So(E)) k++;
                        for (; 0 < S - k;) b = So(b),
                        S--;
                        for (; 0 < k - S;) m = So(m),
                        k--;
                        for (; S--;) {
                            if (b === m || m !== null && b === m.alternate) break t;
                            b = So(b), m = So(m)
                        }
                        b = null
                    }
                    else b = null;
                    y !== null && py(d, h, y, b, !1), w !== null && g !== null && py(d, g, w, b, !0)
                }
            }
            e: {
                if (h = u ? Mo(u) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var P = G2;
                else if (X0(h))
                    if (K0) P = Q2;
                    else { P = q2; var T = X2 }
                else(y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = K2);
                if (P && (P = P(e, u))) { q0(d, P, n, c); break e }
                T && T(e, h, u),
                e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && ed(h, "number", h.value)
            }
            switch (T = u ? Mo(u) : window, e) {
                case "focusin":
                    (X0(T) || T.contentEditable === "true") && (_o = T, Ld = u, Xs = null);
                    break;
                case "focusout":
                    Xs = Ld = _o = null;
                    break;
                case "mousedown":
                    Fd = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Fd = !1, iy(d, n, c);
                    break;
                case "selectionchange":
                    if (ek) break;
                case "keydown":
                case "keyup":
                    iy(d, n, c)
            }
            var I;
            if (Pd) e: {
                switch (e) {
                    case "compositionstart":
                        var U = "onCompositionStart";
                        break e;
                    case "compositionend":
                        U = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        U = "onCompositionUpdate";
                        break e
                }
                U = void 0
            }
            else bo ? U0(e, n) && (U = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");U && (Y0 && n.locale !== "ko" && (bo || U !== "onCompositionStart" ? U === "onCompositionEnd" && bo && (I = j0()) : (Vr = c, kd = "value" in Vr ? Vr.value : Vr.textContent, bo = !0)), T = nu(u, U), 0 < T.length && (U = new W0(U, e, null, n, c), d.push({ event: U, listeners: T }), I ? U.data = I : (I = G0(n), I !== null && (U.data = I)))),
            (I = H2 ? Y2(e, n) : $2(e, n)) && (u = nu(u, "onBeforeInput"), 0 < u.length && (c = new W0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = I))
        }
        ly(d, t)
    })
}

function Ks(e, t, n) { return { instance: e, listener: t, currentTarget: n } }

function nu(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = As(e, n), o != null && r.unshift(Ks(e, o, i)), o = As(e, t), o != null && r.push(Ks(e, o, i))), e = e.return
    }
    return r
}

function So(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function py(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = As(n, o), l != null && s.unshift(Ks(n, l, a))) : i || (l = As(n, o), l != null && s.push(Ks(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({ event: t, listeners: s })
}

function ru() {}
var Nd = null,
    jd = null;

function my(e, t) {
    switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
            return !!t.autoFocus
    }
    return !1
}

function zd(e, t) { return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null }
var gy = typeof setTimeout == "function" ? setTimeout : void 0,
    tk = typeof clearTimeout == "function" ? clearTimeout : void 0;

function Bd(e) { e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = "")) }

function ko(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break } return e }

function yy(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Wd = 0;

function nk(e) { return { $$typeof: Gf, toString: e, valueOf: e } }
var iu = Math.random().toString(36).slice(2),
    Ur = "__reactFiber$" + iu,
    ou = "__reactProps$" + iu,
    Co = "__reactContainer$" + iu,
    vy = "__reactEvents$" + iu;

function Di(e) {
    var t = e[Ur];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Co] || n[Ur]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = yy(e); e !== null;) {
                    if (n = e[Ur]) return n;
                    e = yy(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Qs(e) { return e = e[Ur] || e[Co], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

function Mo(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(ne(33)) }

function su(e) { return e[ou] || null }

function wy(e) { var t = e[vy]; return t === void 0 && (t = e[vy] = new Set), t }
var Hd = [],
    Eo = -1;

function Gr(e) { return { current: e } }

function ut(e) { 0 > Eo || (e.current = Hd[Eo], Hd[Eo] = null, Eo--) }

function yt(e, t) { Eo++, Hd[Eo] = e.current, e.current = t }
var Xr = {},
    $t = Gr(Xr),
    an = Gr(!1),
    Pi = Xr;

function Oo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Xr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function ln(e) { return e = e.childContextTypes, e != null }

function au() { ut(an), ut($t) }

function xy(e, t, n) {
    if ($t.current !== Xr) throw Error(ne(168));
    yt($t, t), yt(an, n)
}

function by(e, t, n) {
    var r = e.stateNode;
    if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e)) throw Error(ne(108, ho(t) || "Unknown", i));
    return pt({}, n, r)
}

function lu(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xr, Pi = $t.current, yt($t, e), yt(an, an.current), !0 }

function _y(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(ne(169));
    n ? (e = by(e, t, Pi), r.__reactInternalMemoizedMergedChildContext = e, ut(an), ut($t), yt($t, e)) : ut(an), yt(an, n)
}
var Yd = null,
    Ri = null,
    rk = At.unstable_runWithPriority,
    $d = At.unstable_scheduleCallback,
    Vd = At.unstable_cancelCallback,
    ik = At.unstable_shouldYield,
    Sy = At.unstable_requestPaint,
    Ud = At.unstable_now,
    ok = At.unstable_getCurrentPriorityLevel,
    uu = At.unstable_ImmediatePriority,
    ky = At.unstable_UserBlockingPriority,
    Cy = At.unstable_NormalPriority,
    My = At.unstable_LowPriority,
    Ey = At.unstable_IdlePriority,
    Gd = {},
    sk = Sy !== void 0 ? Sy : function() {},
    yr = null,
    cu = null,
    Xd = !1,
    Oy = Ud(),
    Vt = 1e4 > Oy ? Ud : function() { return Ud() - Oy };

function Do() {
    switch (ok()) {
        case uu:
            return 99;
        case ky:
            return 98;
        case Cy:
            return 97;
        case My:
            return 96;
        case Ey:
            return 95;
        default:
            throw Error(ne(332))
    }
}

function Dy(e) {
    switch (e) {
        case 99:
            return uu;
        case 98:
            return ky;
        case 97:
            return Cy;
        case 96:
            return My;
        case 95:
            return Ey;
        default:
            throw Error(ne(332))
    }
}

function Ti(e, t) { return e = Dy(e), rk(e, t) }

function Zs(e, t, n) { return e = Dy(e), $d(e, t, n) }

function er() {
    if (cu !== null) {
        var e = cu;
        cu = null, Vd(e)
    }
    Py()
}

function Py() {
    if (!Xd && yr !== null) {
        Xd = !0;
        var e = 0;
        try {
            var t = yr;
            Ti(99, function() {
                for (; e < t.length; e++) {
                    var n = t[e];
                    do n = n(!0); while (n !== null)
                }
            }), yr = null
        } catch (n) { throw yr !== null && (yr = yr.slice(e + 1)), $d(uu, er), n } finally { Xd = !1 }
    }
}
var ak = Ci.ReactCurrentBatchConfig;

function Vn(e, t) { if (e && e.defaultProps) { t = pt({}, t), e = e.defaultProps; for (var n in e) t[n] === void 0 && (t[n] = e[n]); return t } return t }
var fu = Gr(null),
    du = null,
    Po = null,
    hu = null;

function qd() { hu = Po = du = null }

function Kd(e) {
    var t = fu.current;
    ut(fu), e.type._context._currentValue = t
}

function Ry(e, t) {
    for (; e !== null;) {
        var n = e.alternate;
        if ((e.childLanes & t) === t) {
            if (n === null || (n.childLanes & t) === t) break;
            n.childLanes |= t
        } else e.childLanes |= t, n !== null && (n.childLanes |= t);
        e = e.return
    }
}

function Ro(e, t) { du = e, hu = Po = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) != 0 && (Un = !0), e.firstContext = null) }

function Pn(e, t) {
    if (hu !== e && t !== !1 && t !== 0)
        if ((typeof t != "number" || t === 1073741823) && (hu = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, Po === null) {
            if (du === null) throw Error(ne(308));
            Po = t, du.dependencies = { lanes: 0, firstContext: t, responders: null }
        } else Po = Po.next = t;
    return e._currentValue
}
var qr = !1;

function Qd(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null } }

function Ty(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

function Kr(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

function Qr(e, t) {
    if (e = e.updateQueue, e !== null) {
        e = e.shared;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }
}

function Ay(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Js(e, t, n, r) {
    var i = e.updateQueue;
    qr = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? o = u : s.next = u, s = l;
        var c = e.alternate;
        if (c !== null) {
            c = c.updateQueue;
            var d = c.lastBaseUpdate;
            d !== s && (d === null ? c.firstBaseUpdate = u : d.next = u, c.lastBaseUpdate = l)
        }
    }
    if (o !== null) {
        d = i.baseState, s = 0, c = u = l = null;
        do {
            a = o.lane;
            var h = o.eventTime;
            if ((r & a) === a) {
                c !== null && (c = c.next = { eventTime: h, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
                e: {
                    var y = e,
                        w = o;
                    switch (a = t, h = n, w.tag) {
                        case 1:
                            if (y = w.payload, typeof y == "function") { d = y.call(h, d, a); break e }
                            d = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -4097 | 64;
                        case 0:
                            if (y = w.payload, a = typeof y == "function" ? y.call(h, d, a) : y, a == null) break e;
                            d = pt({}, d, a);
                            break e;
                        case 2:
                            qr = !0
                    }
                }
                o.callback !== null && (e.flags |= 32, a = i.effects, a === null ? i.effects = [o] : a.push(o))
            } else h = { eventTime: h, lane: a, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, c === null ? (u = c = h, l = d) : c = c.next = h, s |= a;
            if (o = o.next, o === null) {
                if (a = i.shared.pending, a === null) break;
                o = a.next, a.next = null, i.lastBaseUpdate = a, i.shared.pending = null
            }
        } while (1);
        c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, fa |= s, e.lanes = s, e.memoizedState = d
    }
}

function Ly(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(ne(191, i));
                i.call(r)
            }
        }
}
var Fy = new Fl.Component().refs;

function pu(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : pt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n) }
var mu = {
    isMounted: function(e) { return (e = e._reactInternals) ? Oi(e) === e : !1 },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = yn(),
            i = ei(e),
            o = Kr(r, i);
        o.payload = t, n != null && (o.callback = n), Qr(e, o), ti(e, i, r)
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = yn(),
            i = ei(e),
            o = Kr(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), Qr(e, o), ti(e, i, r)
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = yn(),
            r = ei(e),
            i = Kr(n, r);
        i.tag = 2, t != null && (i.callback = t), Qr(e, i), ti(e, r, n)
    }
};

function Iy(e, t, n, r, i, o, s) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Gs(n, r) || !Gs(i, o) : !0 }

function Ny(e, t, n) {
    var r = !1,
        i = Xr,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = Pn(o) : (i = ln(t) ? Pi : $t.current, r = t.contextTypes, o = (r = r != null) ? Oo(e, i) : Xr), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = mu, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function jy(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mu.enqueueReplaceState(t, t.state, null) }

function Zd(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Fy, Qd(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Pn(o) : (o = ln(t) ? Pi : $t.current, i.context = Oo(e, o)), Js(e, n, i, r), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (pu(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && mu.enqueueReplaceState(i, i.state, null), Js(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4)
}
var gu = Array.isArray;

function ea(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) { if (n.tag !== 1) throw Error(ne(309)); var r = n.stateNode }
            if (!r) throw Error(ne(147, e));
            var i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var s = r.refs;
                s === Fy && (s = r.refs = {}), o === null ? delete s[i] : s[i] = o
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(ne(284));
        if (!n._owner) throw Error(ne(290, e))
    }
    return e
}

function yu(e, t) { if (e.type !== "textarea") throw Error(ne(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t)) }

function zy(e) {
    function t(g, m) {
        if (e) {
            var S = g.lastEffect;
            S !== null ? (S.nextEffect = m, g.lastEffect = m) : g.firstEffect = g.lastEffect = m, m.nextEffect = null, m.flags = 8
        }
    }

    function n(g, m) { if (!e) return null; for (; m !== null;) t(g, m), m = m.sibling; return null }

    function r(g, m) { for (g = new Map; m !== null;) m.key !== null ? g.set(m.key, m) : g.set(m.index, m), m = m.sibling; return g }

    function i(g, m) { return g = ii(g, m), g.index = 0, g.sibling = null, g }

    function o(g, m, S) { return g.index = S, e ? (S = g.alternate, S !== null ? (S = S.index, S < m ? (g.flags = 2, m) : S) : (g.flags = 2, m)) : m }

    function s(g) { return e && g.alternate === null && (g.flags = 2), g }

    function a(g, m, S, k) { return m === null || m.tag !== 6 ? (m = Lh(S, g.mode, k), m.return = g, m) : (m = i(m, S), m.return = g, m) }

    function l(g, m, S, k) { return m !== null && m.elementType === S.type ? (k = i(m, S.props), k.ref = ea(g, m, S), k.return = g, k) : (k = Fu(S.type, S.key, S.props, null, g.mode, k), k.ref = ea(g, m, S), k.return = g, k) }

    function u(g, m, S, k) { return m === null || m.tag !== 4 || m.stateNode.containerInfo !== S.containerInfo || m.stateNode.implementation !== S.implementation ? (m = Fh(S, g.mode, k), m.return = g, m) : (m = i(m, S.children || []), m.return = g, m) }

    function c(g, m, S, k, E) { return m === null || m.tag !== 7 ? (m = zo(S, g.mode, k, E), m.return = g, m) : (m = i(m, S), m.return = g, m) }

    function d(g, m, S) {
        if (typeof m == "string" || typeof m == "number") return m = Lh("" + m, g.mode, S), m.return = g, m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ms:
                    return S = Fu(m.type, m.key, m.props, null, g.mode, S), S.ref = ea(g, null, m), S.return = g, S;
                case Mi:
                    return m = Fh(m, g.mode, S), m.return = g, m
            }
            if (gu(m) || Ds(m)) return m = zo(m, g.mode, S, null), m.return = g, m;
            yu(g, m)
        }
        return null
    }

    function h(g, m, S, k) {
        var E = m !== null ? m.key : null;
        if (typeof S == "string" || typeof S == "number") return E !== null ? null : a(g, m, "" + S, k);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Ms:
                    return S.key === E ? S.type === zr ? c(g, m, S.props.children, k, E) : l(g, m, S, k) : null;
                case Mi:
                    return S.key === E ? u(g, m, S, k) : null
            }
            if (gu(S) || Ds(S)) return E !== null ? null : c(g, m, S, k, null);
            yu(g, S)
        }
        return null
    }

    function y(g, m, S, k, E) {
        if (typeof k == "string" || typeof k == "number") return g = g.get(S) || null, a(m, g, "" + k, E);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Ms:
                    return g = g.get(k.key === null ? S : k.key) || null, k.type === zr ? c(m, g, k.props.children, E, k.key) : l(m, g, k, E);
                case Mi:
                    return g = g.get(k.key === null ? S : k.key) || null, u(m, g, k, E)
            }
            if (gu(k) || Ds(k)) return g = g.get(S) || null, c(m, g, k, E, null);
            yu(m, k)
        }
        return null
    }

    function w(g, m, S, k) {
        for (var E = null, P = null, T = m, I = m = 0, U = null; T !== null && I < S.length; I++) {
            T.index > I ? (U = T, T = null) : U = T.sibling;
            var z = h(g, T, S[I], k);
            if (z === null) { T === null && (T = U); break }
            e && T && z.alternate === null && t(g, T), m = o(z, m, I), P === null ? E = z : P.sibling = z, P = z, T = U
        }
        if (I === S.length) return n(g, T), E;
        if (T === null) { for (; I < S.length; I++) T = d(g, S[I], k), T !== null && (m = o(T, m, I), P === null ? E = T : P.sibling = T, P = T); return E }
        for (T = r(g, T); I < S.length; I++) U = y(T, g, I, S[I], k), U !== null && (e && U.alternate !== null && T.delete(U.key === null ? I : U.key), m = o(U, m, I), P === null ? E = U : P.sibling = U, P = U);
        return e && T.forEach(function(ve) { return t(g, ve) }), E
    }

    function b(g, m, S, k) {
        var E = Ds(S);
        if (typeof E != "function") throw Error(ne(150));
        if (S = E.call(S), S == null) throw Error(ne(151));
        for (var P = E = null, T = m, I = m = 0, U = null, z = S.next(); T !== null && !z.done; I++, z = S.next()) {
            T.index > I ? (U = T, T = null) : U = T.sibling;
            var ve = h(g, T, z.value, k);
            if (ve === null) { T === null && (T = U); break }
            e && T && ve.alternate === null && t(g, T), m = o(ve, m, I), P === null ? E = ve : P.sibling = ve, P = ve, T = U
        }
        if (z.done) return n(g, T), E;
        if (T === null) { for (; !z.done; I++, z = S.next()) z = d(g, z.value, k), z !== null && (m = o(z, m, I), P === null ? E = z : P.sibling = z, P = z); return E }
        for (T = r(g, T); !z.done; I++, z = S.next()) z = y(T, g, I, z.value, k), z !== null && (e && z.alternate !== null && T.delete(z.key === null ? I : z.key), m = o(z, m, I), P === null ? E = z : P.sibling = z, P = z);
        return e && T.forEach(function(Ee) { return t(g, Ee) }), E
    }
    return function(g, m, S, k) {
        var E = typeof S == "object" && S !== null && S.type === zr && S.key === null;
        E && (S = S.props.children);
        var P = typeof S == "object" && S !== null;
        if (P) switch (S.$$typeof) {
            case Ms:
                e: {
                    for (P = S.key, E = m; E !== null;) {
                        if (E.key === P) {
                            switch (E.tag) {
                                case 7:
                                    if (S.type === zr) { n(g, E.sibling), m = i(E, S.props.children), m.return = g, g = m; break e }
                                    break;
                                default:
                                    if (E.elementType === S.type) { n(g, E.sibling), m = i(E, S.props), m.ref = ea(g, E, S), m.return = g, g = m; break e }
                            }
                            n(g, E);
                            break
                        } else t(g, E);
                        E = E.sibling
                    }
                    S.type === zr ? (m = zo(S.props.children, g.mode, k, S.key), m.return = g, g = m) : (k = Fu(S.type, S.key, S.props, null, g.mode, k), k.ref = ea(g, m, S), k.return = g, g = k)
                }
                return s(g);
            case Mi:
                e: {
                    for (E = S.key; m !== null;) {
                        if (m.key === E)
                            if (m.tag === 4 && m.stateNode.containerInfo === S.containerInfo && m.stateNode.implementation === S.implementation) { n(g, m.sibling), m = i(m, S.children || []), m.return = g, g = m; break e } else { n(g, m); break }
                        else t(g, m);
                        m = m.sibling
                    }
                    m = Fh(S, g.mode, k),
                    m.return = g,
                    g = m
                }
                return s(g)
        }
        if (typeof S == "string" || typeof S == "number") return S = "" + S, m !== null && m.tag === 6 ? (n(g, m.sibling), m = i(m, S), m.return = g, g = m) : (n(g, m), m = Lh(S, g.mode, k), m.return = g, g = m), s(g);
        if (gu(S)) return w(g, m, S, k);
        if (Ds(S)) return b(g, m, S, k);
        if (P && yu(g, S), typeof S == "undefined" && !E) switch (g.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
                throw Error(ne(152, ho(g.type) || "Component"))
        }
        return n(g, m)
    }
}
var vu = zy(!0),
    By = zy(!1),
    ta = {},
    tr = Gr(ta),
    na = Gr(ta),
    ra = Gr(ta);

function Ai(e) { if (e === ta) throw Error(ne(174)); return e }

function Jd(e, t) {
    switch (yt(ra, t), yt(na, e), yt(tr, ta), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : id(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = id(t, e)
    }
    ut(tr), yt(tr, t)
}

function To() { ut(tr), ut(na), ut(ra) }

function Wy(e) {
    Ai(ra.current);
    var t = Ai(tr.current),
        n = id(t, e.type);
    t !== n && (yt(na, e), yt(tr, n))
}

function eh(e) { na.current === e && (ut(tr), ut(na)) }
var vt = Gr(0);

function wu(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) { var n = t.memoizedState; if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) { if ((t.flags & 64) != 0) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var vr = null,
    Zr = null,
    nr = !1;

function Hy(e, t) {
    var n = An(5, null, null, 0);
    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
}

function Yy(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
        case 13:
            return !1;
        default:
            return !1
    }
}

function th(e) {
    if (nr) {
        var t = Zr;
        if (t) {
            var n = t;
            if (!Yy(e, t)) {
                if (t = ko(n.nextSibling), !t || !Yy(e, t)) { e.flags = e.flags & -1025 | 2, nr = !1, vr = e; return }
                Hy(vr, n)
            }
            vr = e, Zr = ko(t.firstChild)
        } else e.flags = e.flags & -1025 | 2, nr = !1, vr = e
    }
}

function $y(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    vr = e
}

function xu(e) {
    if (e !== vr) return !1;
    if (!nr) return $y(e), nr = !0, !1;
    var t = e.type;
    if (e.tag !== 5 || t !== "head" && t !== "body" && !zd(t, e.memoizedProps))
        for (t = Zr; t;) Hy(e, t), t = ko(t.nextSibling);
    if ($y(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(ne(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) { Zr = ko(e.nextSibling); break e }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Zr = null
        }
    } else Zr = vr ? ko(e.stateNode.nextSibling) : null;
    return !0
}

function nh() { Zr = vr = null, nr = !1 }
var Ao = [];

function rh() {
    for (var e = 0; e < Ao.length; e++) Ao[e]._workInProgressVersionPrimary = null;
    Ao.length = 0
}
var ia = Ci.ReactCurrentDispatcher,
    Rn = Ci.ReactCurrentBatchConfig,
    oa = 0,
    _t = null,
    Ut = null,
    jt = null,
    bu = !1,
    sa = !1;

function un() { throw Error(ne(321)) }

function ih(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Dn(e[n], t[n])) return !1;
    return !0
}

function oh(e, t, n, r, i, o) {
    if (oa = o, _t = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ia.current = e === null || e.memoizedState === null ? uk : ck, e = n(r, i), sa) {
        o = 0;
        do {
            if (sa = !1, !(25 > o)) throw Error(ne(301));
            o += 1, jt = Ut = null, t.updateQueue = null, ia.current = fk, e = n(r, i)
        } while (sa)
    }
    if (ia.current = Cu, t = Ut !== null && Ut.next !== null, oa = 0, jt = Ut = _t = null, bu = !1, t) throw Error(ne(300));
    return e
}

function Li() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return jt === null ? _t.memoizedState = jt = e : jt = jt.next = e, jt }

function Fi() {
    if (Ut === null) {
        var e = _t.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Ut.next;
    var t = jt === null ? _t.memoizedState : jt.next;
    if (t !== null) jt = t, Ut = e;
    else {
        if (e === null) throw Error(ne(310));
        Ut = e, e = { memoizedState: Ut.memoizedState, baseState: Ut.baseState, baseQueue: Ut.baseQueue, queue: Ut.queue, next: null }, jt === null ? _t.memoizedState = jt = e : jt = jt.next = e
    }
    return jt
}

function rr(e, t) { return typeof t == "function" ? t(e) : t }

function aa(e) {
    var t = Fi(),
        n = t.queue;
    if (n === null) throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = Ut,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        i = i.next, r = r.baseState;
        var a = s = o = null,
            l = i;
        do {
            var u = l.lane;
            if ((oa & u) === u) a !== null && (a = a.next = { lane: 0, action: l.action, eagerReducer: l.eagerReducer, eagerState: l.eagerState, next: null }), r = l.eagerReducer === e ? l.eagerState : e(r, l.action);
            else {
                var c = { lane: u, action: l.action, eagerReducer: l.eagerReducer, eagerState: l.eagerState, next: null };
                a === null ? (s = a = c, o = r) : a = a.next = c, _t.lanes |= u, fa |= u
            }
            l = l.next
        } while (l !== null && l !== i);
        a === null ? o = r : a.next = s, Dn(r, t.memoizedState) || (Un = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r
    }
    return [t.memoizedState, n.dispatch]
}

function la(e) {
    var t = Fi(),
        n = t.queue;
    if (n === null) throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        Dn(o, t.memoizedState) || (Un = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Vy(e, t, n) {
    var r = t._getVersion;
    r = r(t._source);
    var i = t._workInProgressVersionPrimary;
    if (i !== null ? e = i === r : (e = e.mutableReadLanes, (e = (oa & e) === e) && (t._workInProgressVersionPrimary = r, Ao.push(t))), e) return n(t._source);
    throw Ao.push(t), Error(ne(350))
}

function Uy(e, t, n, r) {
    var i = nn;
    if (i === null) throw Error(ne(349));
    var o = t._getVersion,
        s = o(t._source),
        a = ia.current,
        l = a.useState(function() { return Vy(i, t, n) }),
        u = l[1],
        c = l[0];
    l = jt;
    var d = e.memoizedState,
        h = d.refs,
        y = h.getSnapshot,
        w = d.source;
    d = d.subscribe;
    var b = _t;
    return e.memoizedState = { refs: h, source: t, subscribe: r }, a.useEffect(function() {
        h.getSnapshot = n, h.setSnapshot = u;
        var g = o(t._source);
        if (!Dn(s, g)) {
            g = n(t._source), Dn(c, g) || (u(g), g = ei(b), i.mutableReadLanes |= g & i.pendingLanes), g = i.mutableReadLanes, i.entangledLanes |= g;
            for (var m = i.entanglements, S = g; 0 < S;) {
                var k = 31 - $r(S),
                    E = 1 << k;
                m[k] |= g, S &= ~E
            }
        }
    }, [n, t, r]), a.useEffect(function() {
        return r(t._source, function() {
            var g = h.getSnapshot,
                m = h.setSnapshot;
            try {
                m(g(t._source));
                var S = ei(b);
                i.mutableReadLanes |= S & i.pendingLanes
            } catch (k) { m(function() { throw k }) }
        })
    }, [t, r]), Dn(y, n) && Dn(w, t) && Dn(d, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: rr, lastRenderedState: c }, e.dispatch = u = uh.bind(null, _t, e), l.queue = e, l.baseQueue = null, c = Vy(i, t, n), l.memoizedState = l.baseState = c), c
}

function Gy(e, t, n) { var r = Fi(); return Uy(r, e, t, n) }

function ua(e) { var t = Li(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: rr, lastRenderedState: e }, e = e.dispatch = uh.bind(null, _t, e), [t.memoizedState, e] }

function _u(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = _t.updateQueue, t === null ? (t = { lastEffect: null }, _t.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e }

function Xy(e) { var t = Li(); return e = { current: e }, t.memoizedState = e }

function Su() { return Fi().memoizedState }

function sh(e, t, n, r) {
    var i = Li();
    _t.flags |= e, i.memoizedState = _u(1 | t, n, void 0, r === void 0 ? null : r)
}

function ah(e, t, n, r) {
    var i = Fi();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ut !== null) { var s = Ut.memoizedState; if (o = s.destroy, r !== null && ih(r, s.deps)) { _u(t, n, o, r); return } }
    _t.flags |= e, i.memoizedState = _u(1 | t, n, o, r)
}

function qy(e, t) { return sh(516, 4, e, t) }

function ku(e, t) { return ah(516, 4, e, t) }

function Ky(e, t) { return ah(4, 2, e, t) }

function Qy(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() { t(null) };
    if (t != null) return e = e(), t.current = e,
        function() { t.current = null }
}

function Zy(e, t, n) { return n = n != null ? n.concat([e]) : null, ah(4, 2, Qy.bind(null, t, e), n) }

function lh() {}

function Jy(e, t) {
    var n = Fi();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ih(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function ev(e, t) {
    var n = Fi();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ih(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function lk(e, t) {
    var n = Do();
    Ti(98 > n ? 98 : n, function() { e(!0) }), Ti(97 < n ? 97 : n, function() {
        var r = Rn.transition;
        Rn.transition = 1;
        try { e(!1), t() } finally { Rn.transition = r }
    })
}

function uh(e, t, n) {
    var r = yn(),
        i = ei(e),
        o = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null },
        s = t.pending;
    if (s === null ? o.next = o : (o.next = s.next, s.next = o), t.pending = o, s = e.alternate, e === _t || s !== null && s === _t) sa = bu = !0;
    else {
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var a = t.lastRenderedState,
                l = s(a, n);
            if (o.eagerReducer = s, o.eagerState = l, Dn(l, a)) return
        } catch {} finally {}
        ti(e, i, r)
    }
}
var Cu = { readContext: Pn, useCallback: un, useContext: un, useEffect: un, useImperativeHandle: un, useLayoutEffect: un, useMemo: un, useReducer: un, useRef: un, useState: un, useDebugValue: un, useDeferredValue: un, useTransition: un, useMutableSource: un, useOpaqueIdentifier: un, unstable_isNewReconciler: !1 },
    uk = {
        readContext: Pn,
        useCallback: function(e, t) { return Li().memoizedState = [e, t === void 0 ? null : t], e },
        useContext: Pn,
        useEffect: qy,
        useImperativeHandle: function(e, t, n) { return n = n != null ? n.concat([e]) : null, sh(4, 2, Qy.bind(null, t, e), n) },
        useLayoutEffect: function(e, t) { return sh(4, 2, e, t) },
        useMemo: function(e, t) { var n = Li(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e },
        useReducer: function(e, t, n) { var r = Li(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, e = e.dispatch = uh.bind(null, _t, e), [r.memoizedState, e] },
        useRef: Xy,
        useState: ua,
        useDebugValue: lh,
        useDeferredValue: function(e) {
            var t = ua(e),
                n = t[0],
                r = t[1];
            return qy(function() {
                var i = Rn.transition;
                Rn.transition = 1;
                try { r(e) } finally { Rn.transition = i }
            }, [e]), n
        },
        useTransition: function() {
            var e = ua(!1),
                t = e[0];
            return e = lk.bind(null, e[1]), Xy(e), [e, t]
        },
        useMutableSource: function(e, t, n) { var r = Li(); return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, Uy(r, e, t, n) },
        useOpaqueIdentifier: function() {
            if (nr) {
                var e = !1,
                    t = nk(function() { throw e || (e = !0, n("r:" + (Wd++).toString(36))), Error(ne(355)) }),
                    n = ua(t)[1];
                return (_t.mode & 2) == 0 && (_t.flags |= 516, _u(5, function() { n("r:" + (Wd++).toString(36)) }, void 0, null)), t
            }
            return t = "r:" + (Wd++).toString(36), ua(t), t
        },
        unstable_isNewReconciler: !1
    },
    ck = {
        readContext: Pn,
        useCallback: Jy,
        useContext: Pn,
        useEffect: ku,
        useImperativeHandle: Zy,
        useLayoutEffect: Ky,
        useMemo: ev,
        useReducer: aa,
        useRef: Su,
        useState: function() { return aa(rr) },
        useDebugValue: lh,
        useDeferredValue: function(e) {
            var t = aa(rr),
                n = t[0],
                r = t[1];
            return ku(function() {
                var i = Rn.transition;
                Rn.transition = 1;
                try { r(e) } finally { Rn.transition = i }
            }, [e]), n
        },
        useTransition: function() { var e = aa(rr)[0]; return [Su().current, e] },
        useMutableSource: Gy,
        useOpaqueIdentifier: function() { return aa(rr)[0] },
        unstable_isNewReconciler: !1
    },
    fk = {
        readContext: Pn,
        useCallback: Jy,
        useContext: Pn,
        useEffect: ku,
        useImperativeHandle: Zy,
        useLayoutEffect: Ky,
        useMemo: ev,
        useReducer: la,
        useRef: Su,
        useState: function() { return la(rr) },
        useDebugValue: lh,
        useDeferredValue: function(e) {
            var t = la(rr),
                n = t[0],
                r = t[1];
            return ku(function() {
                var i = Rn.transition;
                Rn.transition = 1;
                try { r(e) } finally { Rn.transition = i }
            }, [e]), n
        },
        useTransition: function() { var e = la(rr)[0]; return [Su().current, e] },
        useMutableSource: Gy,
        useOpaqueIdentifier: function() { return la(rr)[0] },
        unstable_isNewReconciler: !1
    },
    dk = Ci.ReactCurrentOwner,
    Un = !1;

function cn(e, t, n, r) { t.child = e === null ? By(t, null, n, r) : vu(t, e.child, n, r) }

function tv(e, t, n, r, i) { n = n.render; var o = t.ref; return Ro(t, i), r = oh(e, t, n, r, o, i), e !== null && !Un ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, wr(e, t, i)) : (t.flags |= 1, cn(e, t, r, i), t.child) }

function nv(e, t, n, r, i, o) { if (e === null) { var s = n.type; return typeof s == "function" && !Th(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, rv(e, t, s, r, i, o)) : (e = Fu(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e) } return s = e.child, (i & o) == 0 && (i = s.memoizedProps, n = n.compare, n = n !== null ? n : Gs, n(i, r) && e.ref === t.ref) ? wr(e, t, o) : (t.flags |= 1, e = ii(s, r), e.ref = t.ref, e.return = t, t.child = e) }

function rv(e, t, n, r, i, o) {
    if (e !== null && Gs(e.memoizedProps, r) && e.ref === t.ref)
        if (Un = !1, (o & i) != 0)(e.flags & 16384) != 0 && (Un = !0);
        else return t.lanes = e.lanes, wr(e, t, o);
    return fh(e, t, n, r, o)
}

function ch(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
        if ((t.mode & 4) == 0) t.memoizedState = { baseLanes: 0 }, Lu(t, n);
        else if ((n & 1073741824) != 0) t.memoizedState = { baseLanes: 0 }, Lu(t, o !== null ? o.baseLanes : n);
    else return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, Lu(t, e), null;
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Lu(t, r);
    return cn(e, t, i, n), t.child
}

function iv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128)
}

function fh(e, t, n, r, i) { var o = ln(n) ? Pi : $t.current; return o = Oo(t, o), Ro(t, i), n = oh(e, t, n, r, o, i), e !== null && !Un ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, wr(e, t, i)) : (t.flags |= 1, cn(e, t, n, i), t.child) }

function ov(e, t, n, r, i) {
    if (ln(n)) {
        var o = !0;
        lu(t)
    } else o = !1;
    if (Ro(t, i), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), Ny(t, n, r), Zd(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Pn(u) : (u = ln(n) ? Pi : $t.current, u = Oo(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && jy(t, s, r, u), qr = !1;
        var h = t.memoizedState;
        s.state = h, Js(t, r, s, i), l = t.memoizedState, a !== r || h !== l || an.current || qr ? (typeof c == "function" && (pu(t, n, c, r), l = t.memoizedState), (a = qr || Iy(t, n, a, r, h, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4)) : (typeof s.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4), r = !1)
    } else {
        s = t.stateNode, Ty(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Vn(t.type, a), s.props = u, d = t.pendingProps, h = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Pn(l) : (l = ln(n) ? Pi : $t.current, l = Oo(t, l));
        var y = n.getDerivedStateFromProps;
        (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || h !== l) && jy(t, s, r, l), qr = !1, h = t.memoizedState, s.state = h, Js(t, r, s, i);
        var w = t.memoizedState;
        a !== d || h !== w || an.current || qr ? (typeof y == "function" && (pu(t, n, y, r), w = t.memoizedState), (u = qr || Iy(t, n, u, r, h, w, l)) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 256), r = !1)
    }
    return dh(e, t, n, r, o, i)
}

function dh(e, t, n, r, i, o) {
    iv(e, t);
    var s = (t.flags & 64) != 0;
    if (!r && !s) return i && _y(t, n, !1), wr(e, t, o);
    r = t.stateNode, dk.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = vu(t, e.child, null, o), t.child = vu(t, null, a, o)) : cn(e, t, a, o), t.memoizedState = r.state, i && _y(t, n, !0), t.child
}

function sv(e) {
    var t = e.stateNode;
    t.pendingContext ? xy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xy(e, t.context, !1), Jd(e, t.containerInfo)
}
var Mu = { dehydrated: null, retryLane: 0 };

function av(e, t, n) {
    var r = t.pendingProps,
        i = vt.current,
        o = !1,
        s;
    return (s = (t.flags & 64) != 0) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0), s ? (o = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (i |= 1), yt(vt, i & 1), e === null ? (r.fallback !== void 0 && th(t), e = r.children, i = r.fallback, o ? (e = lv(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Mu, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = lv(t, e, i, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Mu, t.lanes = 33554432, e) : (n = Ah({ mode: "visible", children: e }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? o ? (r = cv(e, t, r.children, r.fallback, n), o = t.child, i = e.child.memoizedState, o.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, o.childLanes = e.childLanes & ~n, t.memoizedState = Mu, r) : (n = uv(e, t, r.children, n), t.memoizedState = null, n) : o ? (r = cv(e, t, r.children, r.fallback, n), o = t.child, i = e.child.memoizedState, o.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, o.childLanes = e.childLanes & ~n, t.memoizedState = Mu, r) : (n = uv(e, t, r.children, n), t.memoizedState = null, n)
}

function lv(e, t, n, r) {
    var i = e.mode,
        o = e.child;
    return t = { mode: "hidden", children: t }, (i & 2) == 0 && o !== null ? (o.childLanes = 0, o.pendingProps = t) : o = Ah(t, i, 0, null), n = zo(n, i, r, null), o.return = e, n.return = e, o.sibling = n, e.child = o, n
}

function uv(e, t, n, r) { var i = e.child; return e = i.sibling, n = ii(i, { mode: "visible", children: n }), (t.mode & 2) == 0 && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n }

function cv(e, t, n, r, i) {
    var o = t.mode,
        s = e.child;
    e = s.sibling;
    var a = { mode: "hidden", children: n };
    return (o & 2) == 0 && t.child !== s ? (n = t.child, n.childLanes = 0, n.pendingProps = a, s = n.lastEffect, s !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = s, s.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = ii(s, a), e !== null ? r = ii(e, r) : (r = zo(r, o, i, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r
}

function fv(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Ry(e.return, t)
}

function hh(e, t, n, r, i, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i, lastEffect: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i, s.lastEffect = o)
}

function dv(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (cn(e, t, r.children, n), r = vt.current, (r & 2) != 0) r = r & 1 | 2, t.flags |= 64;
    else {
        if (e !== null && (e.flags & 64) != 0) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && fv(e, n);
            else if (e.tag === 19) fv(e, n);
            else if (e.child !== null) { e.child.return = e, e = e.child; continue }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (yt(vt, r), (t.mode & 2) == 0) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && wu(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), hh(t, !1, i, n, o, t.lastEffect);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && wu(e) === null) { t.child = i; break }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            hh(t, !0, n, null, o, t.lastEffect);
            break;
        case "together":
            hh(t, !1, null, null, void 0, t.lastEffect);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function wr(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), fa |= t.lanes, (n & t.childLanes) != 0) {
        if (e !== null && t.child !== e.child) throw Error(ne(153));
        if (t.child !== null) {
            for (e = t.child, n = ii(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ii(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }
    return null
}
var hv, ph, pv, mv;
hv = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) { n.child.return = n, n = n.child; continue }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
ph = function() {};
pv = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Ai(tr.current);
        var o = null;
        switch (n) {
            case "input":
                i = Zf(e, i), r = Zf(e, r), o = [];
                break;
            case "option":
                i = td(e, i), r = td(e, r), o = [];
                break;
            case "select":
                i = pt({}, i, { value: void 0 }), r = pt({}, r, { value: void 0 }), o = [];
                break;
            case "textarea":
                i = nd(e, i), r = nd(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ru)
        }
        od(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") { var a = i[u]; for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "") } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Cs.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) { for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = ""); for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]) } else n || (o || (o = []), o.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Cs.hasOwnProperty(u) ? (l != null && u === "onScroll" && lt("scroll", e), o || a === l || (o = [])) : typeof l == "object" && l !== null && l.$$typeof === Gf ? l.toString() : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
mv = function(e, t, n, r) { n !== r && (t.flags |= 4) };

function ca(e, t) {
    if (!nr) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function hk(e, t, n) {
    var r = t.pendingProps;
    switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return null;
        case 1:
            return ln(t.type) && au(), null;
        case 3:
            return To(), ut(an), ut($t), rh(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xu(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), ph(t), null;
        case 5:
            eh(t);
            var i = Ai(ra.current);
            if (n = t.type, e !== null && t.stateNode != null) pv(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128);
            else {
                if (!r) { if (t.stateNode === null) throw Error(ne(166)); return null }
                if (e = Ai(tr.current), xu(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ur] = t, r[ou] = o, n) {
                        case "dialog":
                            lt("cancel", r), lt("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            lt("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (e = 0; e < qs.length; e++) lt(qs[e], r);
                            break;
                        case "source":
                            lt("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            lt("error", r), lt("load", r);
                            break;
                        case "details":
                            lt("toggle", r);
                            break;
                        case "input":
                            o0(r, o), lt("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = { wasMultiple: !!o.multiple }, lt("invalid", r);
                            break;
                        case "textarea":
                            l0(r, o), lt("invalid", r)
                    }
                    od(n, o), e = null;
                    for (var s in o) o.hasOwnProperty(s) && (i = o[s], s === "children" ? typeof i == "string" ? r.textContent !== i && (e = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (e = ["children", "" + i]) : Cs.hasOwnProperty(s) && i != null && s === "onScroll" && lt("scroll", r));
                    switch (n) {
                        case "input":
                            Bl(r), a0(r, o, !0);
                            break;
                        case "textarea":
                            Bl(r), c0(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = ru)
                    }
                    r = e, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    switch (s = i.nodeType === 9 ? i : i.ownerDocument, e === rd.html && (e = f0(n)), e === rd.html ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ur] = t, e[ou] = r, hv(e, t, !1, !1), t.stateNode = e, s = sd(n, r), n) {
                        case "dialog":
                            lt("cancel", e), lt("close", e), i = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            lt("load", e), i = r;
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < qs.length; i++) lt(qs[i], e);
                            i = r;
                            break;
                        case "source":
                            lt("error", e), i = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            lt("error", e), lt("load", e), i = r;
                            break;
                        case "details":
                            lt("toggle", e), i = r;
                            break;
                        case "input":
                            o0(e, r), i = Zf(e, r), lt("invalid", e);
                            break;
                        case "option":
                            i = td(e, r);
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, i = pt({}, r, { value: void 0 }), lt("invalid", e);
                            break;
                        case "textarea":
                            l0(e, r), i = nd(e, r), lt("invalid", e);
                            break;
                        default:
                            i = r
                    }
                    od(n, i);
                    var a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? p0(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && d0(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Rs(e, l) : typeof l == "number" && Rs(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Cs.hasOwnProperty(o) ? l != null && o === "onScroll" && lt("scroll", e) : l != null && Wf(e, o, l, s))
                        }
                    switch (n) {
                        case "input":
                            Bl(e), a0(e, r, !1);
                            break;
                        case "textarea":
                            Bl(e), c0(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + Br(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, o = r.value, o != null ? po(e, !!r.multiple, o, !1) : r.defaultValue != null && po(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default:
                            typeof i.onClick == "function" && (e.onclick = ru)
                    }
                    my(n, r) && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 128)
            }
            return null;
        case 6:
            if (e && t.stateNode != null) mv(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(ne(166));
                n = Ai(ra.current), Ai(tr.current), xu(t) ? (r = t.stateNode, n = t.memoizedProps, r[Ur] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ur] = t, t.stateNode = r)
            }
            return null;
        case 13:
            return ut(vt), r = t.memoizedState, (t.flags & 64) != 0 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && xu(t) : n = e.memoizedState !== null, r && !n && (t.mode & 2) != 0 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || (vt.current & 1) != 0 ? zt === 0 && (zt = 3) : ((zt === 0 || zt === 3) && (zt = 4), nn === null || (fa & 134217727) == 0 && (Fo & 134217727) == 0 || No(nn, Gt))), (r || n) && (t.flags |= 4), null);
        case 4:
            return To(), ph(t), e === null && cy(t.stateNode.containerInfo), null;
        case 10:
            return Kd(t), null;
        case 17:
            return ln(t.type) && au(), null;
        case 19:
            if (ut(vt), r = t.memoizedState, r === null) return null;
            if (o = (t.flags & 64) != 0, s = r.rendering, s === null)
                if (o) ca(r, !1);
                else {
                    if (zt !== 0 || e !== null && (e.flags & 64) != 0)
                        for (e = t.child; e !== null;) {
                            if (s = wu(e), s !== null) { for (t.flags |= 64, ca(r, !1), o = s.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling; return yt(vt, vt.current & 1 | 2), t.child }
                            e = e.sibling
                        }
                    r.tail !== null && Vt() > Ch && (t.flags |= 64, o = !0, ca(r, !1), t.lanes = 33554432)
                }
            else {
                if (!o)
                    if (e = wu(s), e !== null) { if (t.flags |= 64, o = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ca(r, !0), r.tail === null && r.tailMode === "hidden" && !s.alternate && !nr) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null } else 2 * Vt() - r.renderingStartTime > Ch && n !== 1073741824 && (t.flags |= 64, o = !0, ca(r, !1), t.lanes = 33554432);
                r.isBackwards ? (s.sibling = t.child, t.child = s) : (n = r.last, n !== null ? n.sibling = s : t.child = s, r.last = s)
            }
            return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Vt(), n.sibling = null, t = vt.current, yt(vt, o ? t & 1 | 2 : t & 1), n) : null;
        case 23:
        case 24:
            return Rh(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null
    }
    throw Error(ne(156, t.tag))
}

function pk(e) {
    switch (e.tag) {
        case 1:
            ln(e.type) && au();
            var t = e.flags;
            return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
        case 3:
            if (To(), ut(an), ut($t), rh(), t = e.flags, (t & 64) != 0) throw Error(ne(285));
            return e.flags = t & -4097 | 64, e;
        case 5:
            return eh(e), null;
        case 13:
            return ut(vt), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
        case 19:
            return ut(vt), null;
        case 4:
            return To(), null;
        case 10:
            return Kd(e), null;
        case 23:
        case 24:
            return Rh(), null;
        default:
            return null
    }
}

function mh(e, t) {
    try {
        var n = "",
            r = t;
        do n += XS(r), r = r.return; while (r);
        var i = n
    } catch (o) { i = `
Error generating stack: ` + o.message + `
` + o.stack }
    return { value: e, source: t, stack: i }
}

function gh(e, t) { try { console.error(t.value) } catch (n) { setTimeout(function() { throw n }) } }
var mk = typeof WeakMap == "function" ? WeakMap : Map;

function gv(e, t, n) { n = Kr(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function() { Du || (Du = !0, Mh = r), gh(e, t) }, n }

function yv(e, t, n) {
    n = Kr(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() { return gh(e, t), r(i) }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        typeof r != "function" && (ir === null ? ir = new Set([this]) : ir.add(this), gh(e, t));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" })
    }), n
}
var gk = typeof WeakSet == "function" ? WeakSet : Set;

function vv(e) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function") try { t(null) } catch (n) { ri(e, n) } else t.current = null
}

function yk(e, t) {
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            return;
        case 1:
            if (t.flags & 256 && e !== null) {
                var n = e.memoizedProps,
                    r = e.memoizedState;
                e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : Vn(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
            }
            return;
        case 3:
            t.flags & 256 && Bd(t.stateNode.containerInfo);
            return;
        case 5:
        case 6:
        case 4:
        case 17:
            return
    }
    throw Error(ne(163))
}

function vk(e, t, n) {
    switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
                e = t = t.next;
                do {
                    if ((e.tag & 3) == 3) {
                        var r = e.create;
                        e.destroy = r()
                    }
                    e = e.next
                } while (e !== t)
            }
            if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
                e = t = t.next;
                do {
                    var i = e;
                    r = i.next, i = i.tag, (i & 4) != 0 && (i & 1) != 0 && (Av(n, e), Mk(n, e)), e = r
                } while (e !== t)
            }
            return;
        case 1:
            e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Vn(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), t = n.updateQueue, t !== null && Ly(n, t, e);
            return;
        case 3:
            if (t = n.updateQueue, t !== null) {
                if (e = null, n.child !== null) switch (n.child.tag) {
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                }
                Ly(n, t, e)
            }
            return;
        case 5:
            e = n.stateNode, t === null && n.flags & 4 && my(n.type, n.memoizedProps) && e.focus();
            return;
        case 6:
            return;
        case 4:
            return;
        case 12:
            return;
        case 13:
            n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && P0(n))));
            return;
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
            return
    }
    throw Error(ne(163))
}

function wv(e, t) {
    for (var n = e;;) {
        if (n.tag === 5) {
            var r = n.stateNode;
            if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
            else {
                r = n.stateNode;
                var i = n.memoizedProps.style;
                i = i != null && i.hasOwnProperty("display") ? i.display : null, r.style.display = h0("display", i)
            }
        } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
        else if ((n.tag !== 23 && n.tag !== 24 || n.memoizedState === null || n === e) && n.child !== null) { n.child.return = n, n = n.child; continue }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
}

function xv(e, t) {
    if (Ri && typeof Ri.onCommitFiberUnmount == "function") try { Ri.onCommitFiberUnmount(Yd, t) } catch {}
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
                var n = e = e.next;
                do {
                    var r = n,
                        i = r.destroy;
                    if (r = r.tag, i !== void 0)
                        if ((r & 4) != 0) Av(t, n);
                        else { r = t; try { i() } catch (o) { ri(r, o) } }
                    n = n.next
                } while (n !== e)
            }
            break;
        case 1:
            if (vv(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try { e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount() } catch (o) { ri(t, o) }
            break;
        case 5:
            vv(t);
            break;
        case 4:
            kv(e, t)
    }
}

function bv(e) { e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null }

function _v(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

function Sv(e) {
    e: {
        for (var t = e.return; t !== null;) {
            if (_v(t)) break e;
            t = t.return
        }
        throw Error(ne(160))
    }
    var n = t;
    switch (t = n.stateNode, n.tag) {
        case 5:
            var r = !1;
            break;
        case 3:
            t = t.containerInfo, r = !0;
            break;
        case 4:
            t = t.containerInfo, r = !0;
            break;
        default:
            throw Error(ne(161))
    }
    n.flags & 16 && (Rs(t, ""), n.flags &= -17);e: t: for (n = e;;) {
        for (; n.sibling === null;) {
            if (n.return === null || _v(n.return)) { n = null; break e }
            n = n.return
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
            if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
            n.child.return = n, n = n.child
        }
        if (!(n.flags & 2)) { n = n.stateNode; break e }
    }
    r ? yh(e, n, t) : vh(e, n, t)
}

function yh(e, t, n) {
    var r = e.tag,
        i = r === 5 || r === 6;
    if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ru));
    else if (r !== 4 && (e = e.child, e !== null))
        for (yh(e, t, n), e = e.sibling; e !== null;) yh(e, t, n), e = e.sibling
}

function vh(e, t, n) {
    var r = e.tag,
        i = r === 5 || r === 6;
    if (i) e = i ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (vh(e, t, n), e = e.sibling; e !== null;) vh(e, t, n), e = e.sibling
}

function kv(e, t) {
    for (var n = t, r = !1, i, o;;) {
        if (!r) {
            r = n.return;
            e: for (;;) {
                if (r === null) throw Error(ne(160));
                switch (i = r.stateNode, r.tag) {
                    case 5:
                        o = !1;
                        break e;
                    case 3:
                        i = i.containerInfo, o = !0;
                        break e;
                    case 4:
                        i = i.containerInfo, o = !0;
                        break e
                }
                r = r.return
            }
            r = !0
        }
        if (n.tag === 5 || n.tag === 6) {
            e: for (var s = e, a = n, l = a;;)
                if (xv(s, l), l.child !== null && l.tag !== 4) l.child.return = l, l = l.child;
                else {
                    if (l === a) break e;
                    for (; l.sibling === null;) {
                        if (l.return === null || l.return === a) break e;
                        l = l.return
                    }
                    l.sibling.return = l.return, l = l.sibling
                }o ? (s = i, a = n.stateNode, s.nodeType === 8 ? s.parentNode.removeChild(a) : s.removeChild(a)) : i.removeChild(n.stateNode)
        }
        else if (n.tag === 4) { if (n.child !== null) { i = n.stateNode.containerInfo, o = !0, n.child.return = n, n = n.child; continue } } else if (xv(e, n), n.child !== null) { n.child.return = n, n = n.child; continue }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return, n.tag === 4 && (r = !1)
        }
        n.sibling.return = n.return, n = n.sibling
    }
}

function wh(e, t) {
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            var n = t.updateQueue;
            if (n = n !== null ? n.lastEffect : null, n !== null) {
                var r = n = n.next;
                do(r.tag & 3) == 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next; while (r !== n)
            }
            return;
        case 1:
            return;
        case 5:
            if (n = t.stateNode, n != null) {
                r = t.memoizedProps;
                var i = e !== null ? e.memoizedProps : r;
                e = t.type;
                var o = t.updateQueue;
                if (t.updateQueue = null, o !== null) {
                    for (n[ou] = r, e === "input" && r.type === "radio" && r.name != null && s0(n, r), sd(e, i), t = sd(e, r), i = 0; i < o.length; i += 2) {
                        var s = o[i],
                            a = o[i + 1];
                        s === "style" ? p0(n, a) : s === "dangerouslySetInnerHTML" ? d0(n, a) : s === "children" ? Rs(n, a) : Wf(n, s, a, t)
                    }
                    switch (e) {
                        case "input":
                            Jf(n, r);
                            break;
                        case "textarea":
                            u0(n, r);
                            break;
                        case "select":
                            e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, o = r.value, o != null ? po(n, !!r.multiple, o, !1) : e !== !!r.multiple && (r.defaultValue != null ? po(n, !!r.multiple, r.defaultValue, !0) : po(n, !!r.multiple, r.multiple ? [] : "", !1))
                    }
                }
            }
            return;
        case 6:
            if (t.stateNode === null) throw Error(ne(162));
            t.stateNode.nodeValue = t.memoizedProps;
            return;
        case 3:
            n = t.stateNode, n.hydrate && (n.hydrate = !1, P0(n.containerInfo));
            return;
        case 12:
            return;
        case 13:
            t.memoizedState !== null && (kh = Vt(), wv(t.child, !0)), Cv(t);
            return;
        case 19:
            Cv(t);
            return;
        case 17:
            return;
        case 23:
        case 24:
            wv(t, t.memoizedState !== null);
            return
    }
    throw Error(ne(163))
}

function Cv(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new gk), t.forEach(function(r) {
            var i = Dk.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function wk(e, t) { return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1 }
var xk = Math.ceil,
    Eu = Ci.ReactCurrentDispatcher,
    xh = Ci.ReactCurrentOwner,
    Te = 0,
    nn = null,
    Dt = null,
    Gt = 0,
    Ii = 0,
    bh = Gr(0),
    zt = 0,
    Ou = null,
    Lo = 0,
    fa = 0,
    Fo = 0,
    _h = 0,
    Sh = null,
    kh = 0,
    Ch = 1 / 0;

function Io() { Ch = Vt() + 500 }
var de = null,
    Du = !1,
    Mh = null,
    ir = null,
    Jr = !1,
    da = null,
    ha = 90,
    Eh = [],
    Oh = [],
    xr = null,
    pa = 0,
    Dh = null,
    Pu = -1,
    br = 0,
    Ru = 0,
    ma = null,
    Tu = !1;

function yn() { return (Te & 48) != 0 ? Vt() : Pu !== -1 ? Pu : Pu = Vt() }

function ei(e) { if (e = e.mode, (e & 2) == 0) return 1; if ((e & 4) == 0) return Do() === 99 ? 1 : 2; if (br === 0 && (br = Lo), ak.transition !== 0) { Ru !== 0 && (Ru = Sh !== null ? Sh.pendingLanes : 0), e = br; var t = 4186112 & ~Ru; return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t } return e = Do(), (Te & 4) != 0 && e === 98 ? e = Xl(12, br) : (e = c2(e), e = Xl(e, br)), e }

function ti(e, t, n) {
    if (50 < pa) throw pa = 0, Dh = null, Error(ne(185));
    if (e = Au(e, t), e === null) return null;
    ql(e, t, n), e === nn && (Fo |= t, zt === 4 && No(e, Gt));
    var r = Do();
    t === 1 ? (Te & 8) != 0 && (Te & 48) == 0 ? Ph(e) : (Tn(e, n), Te === 0 && (Io(), er())) : ((Te & 4) == 0 || r !== 98 && r !== 99 || (xr === null ? xr = new Set([e]) : xr.add(e)), Tn(e, n)), Sh = e
}

function Au(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null }

function Tn(e, t) {
    for (var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var a = 31 - $r(s),
            l = 1 << a,
            u = o[a];
        if (u === -1) {
            if ((l & r) == 0 || (l & i) != 0) {
                u = t, vo(l);
                var c = ot;
                o[a] = 10 <= c ? u + 250 : 6 <= c ? u + 5e3 : -1
            }
        } else u <= t && (e.expiredLanes |= l);
        s &= ~l
    }
    if (r = Ws(e, e === nn ? Gt : 0), t = ot, r === 0) n !== null && (n !== Gd && Vd(n), e.callbackNode = null, e.callbackPriority = 0);
    else {
        if (n !== null) {
            if (e.callbackPriority === t) return;
            n !== Gd && Vd(n)
        }
        t === 15 ? (n = Ph.bind(null, e), yr === null ? (yr = [n], cu = $d(uu, Py)) : yr.push(n), n = Gd) : t === 14 ? n = Zs(99, Ph.bind(null, e)) : (n = f2(t), n = Zs(n, Mv.bind(null, e))), e.callbackPriority = t, e.callbackNode = n
    }
}

function Mv(e) {
    if (Pu = -1, Ru = br = 0, (Te & 48) != 0) throw Error(ne(327));
    var t = e.callbackNode;
    if (ni() && e.callbackNode !== t) return null;
    var n = Ws(e, e === nn ? Gt : 0);
    if (n === 0) return null;
    var r = n,
        i = Te;
    Te |= 16;
    var o = Pv();
    (nn !== e || Gt !== r) && (Io(), jo(e, r));
    do try { Sk(); break } catch (a) { Dv(e, a) }
    while (1);
    if (qd(), Eu.current = o, Te = i, Dt !== null ? r = 0 : (nn = null, Gt = 0, r = zt), (Lo & Fo) != 0) jo(e, 0);
    else if (r !== 0) {
        if (r === 2 && (Te |= 64, e.hydrate && (e.hydrate = !1, Bd(e.containerInfo)), n = N0(e), n !== 0 && (r = ga(e, n))), r === 1) throw t = Ou, jo(e, 0), No(e, n), Tn(e, Vt()), t;
        switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
            case 0:
            case 1:
                throw Error(ne(345));
            case 2:
                Ni(e);
                break;
            case 3:
                if (No(e, n), (n & 62914560) === n && (r = kh + 500 - Vt(), 10 < r)) {
                    if (Ws(e, 0) !== 0) break;
                    if (i = e.suspendedLanes, (i & n) !== n) { yn(), e.pingedLanes |= e.suspendedLanes & i; break }
                    e.timeoutHandle = gy(Ni.bind(null, e), r);
                    break
                }
                Ni(e);
                break;
            case 4:
                if (No(e, n), (n & 4186112) === n) break;
                for (r = e.eventTimes, i = -1; 0 < n;) {
                    var s = 31 - $r(n);
                    o = 1 << s, s = r[s], s > i && (i = s), n &= ~o
                }
                if (n = i, n = Vt() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * xk(n / 1960)) - n, 10 < n) { e.timeoutHandle = gy(Ni.bind(null, e), n); break }
                Ni(e);
                break;
            case 5:
                Ni(e);
                break;
            default:
                throw Error(ne(329))
        }
    }
    return Tn(e, Vt()), e.callbackNode === t ? Mv.bind(null, e) : null
}

function No(e, t) {
    for (t &= ~_h, t &= ~Fo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - $r(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ph(e) {
    if ((Te & 48) != 0) throw Error(ne(327));
    if (ni(), e === nn && (e.expiredLanes & Gt) != 0) {
        var t = Gt,
            n = ga(e, t);
        (Lo & Fo) != 0 && (t = Ws(e, t), n = ga(e, t))
    } else t = Ws(e, 0), n = ga(e, t);
    if (e.tag !== 0 && n === 2 && (Te |= 64, e.hydrate && (e.hydrate = !1, Bd(e.containerInfo)), t = N0(e), t !== 0 && (n = ga(e, t))), n === 1) throw n = Ou, jo(e, 0), No(e, t), Tn(e, Vt()), n;
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ni(e), Tn(e, Vt()), null
}

function bk() {
    if (xr !== null) {
        var e = xr;
        xr = null, e.forEach(function(t) { t.expiredLanes |= 24 & t.pendingLanes, Tn(t, Vt()) })
    }
    er()
}

function Ev(e, t) {
    var n = Te;
    Te |= 1;
    try { return e(t) } finally { Te = n, Te === 0 && (Io(), er()) }
}

function Ov(e, t) {
    var n = Te;
    Te &= -2, Te |= 8;
    try { return e(t) } finally { Te = n, Te === 0 && (Io(), er()) }
}

function Lu(e, t) { yt(bh, Ii), Ii |= t, Lo |= t }

function Rh() { Ii = bh.current, ut(bh) }

function jo(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, tk(n)), Dt !== null)
        for (n = Dt.return; n !== null;) {
            var r = n;
            switch (r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && au();
                    break;
                case 3:
                    To(), ut(an), ut($t), rh();
                    break;
                case 5:
                    eh(r);
                    break;
                case 4:
                    To();
                    break;
                case 13:
                    ut(vt);
                    break;
                case 19:
                    ut(vt);
                    break;
                case 10:
                    Kd(r);
                    break;
                case 23:
                case 24:
                    Rh()
            }
            n = n.return
        }
    nn = e, Dt = ii(e.current, null), Gt = Ii = Lo = t, zt = 0, Ou = null, _h = Fo = fa = 0
}

function Dv(e, t) {
    do {
        var n = Dt;
        try {
            if (qd(), ia.current = Cu, bu) {
                for (var r = _t.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                bu = !1
            }
            if (oa = 0, jt = Ut = _t = null, sa = !1, xh.current = null, n === null || n.return === null) { zt = 1, Ou = t, Dt = null; break }
            e: {
                var o = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (t = Gt, a.flags |= 2048, a.firstEffect = a.lastEffect = null, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l;
                    if ((a.mode & 2) == 0) {
                        var c = a.alternate;
                        c ? (a.updateQueue = c.updateQueue, a.memoizedState = c.memoizedState, a.lanes = c.lanes) : (a.updateQueue = null, a.memoizedState = null)
                    }
                    var d = (vt.current & 1) != 0,
                        h = s;
                    do {
                        var y;
                        if (y = h.tag === 13) {
                            var w = h.memoizedState;
                            if (w !== null) y = w.dehydrated !== null;
                            else {
                                var b = h.memoizedProps;
                                y = b.fallback === void 0 ? !1 : b.unstable_avoidThisFallback !== !0 ? !0 : !d
                            }
                        }
                        if (y) {
                            var g = h.updateQueue;
                            if (g === null) {
                                var m = new Set;
                                m.add(u), h.updateQueue = m
                            } else g.add(u);
                            if ((h.mode & 2) == 0) {
                                if (h.flags |= 64, a.flags |= 16384, a.flags &= -2981, a.tag === 1)
                                    if (a.alternate === null) a.tag = 17;
                                    else {
                                        var S = Kr(-1, 1);
                                        S.tag = 2, Qr(a, S)
                                    }
                                a.lanes |= 1;
                                break e
                            }
                            l = void 0, a = t;
                            var k = o.pingCache;
                            if (k === null ? (k = o.pingCache = new mk, l = new Set, k.set(u, l)) : (l = k.get(u), l === void 0 && (l = new Set, k.set(u, l))), !l.has(a)) {
                                l.add(a);
                                var E = Ok.bind(null, o, u, a);
                                u.then(E, E)
                            }
                            h.flags |= 4096, h.lanes = t;
                            break e
                        }
                        h = h.return
                    } while (h !== null);
                    l = Error((ho(a.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)
                }
                zt !== 5 && (zt = 2),
                l = mh(l, a),
                h = s;do {
                    switch (h.tag) {
                        case 3:
                            o = l, h.flags |= 4096, t &= -t, h.lanes |= t;
                            var P = gv(h, o, t);
                            Ay(h, P);
                            break e;
                        case 1:
                            o = l;
                            var T = h.type,
                                I = h.stateNode;
                            if ((h.flags & 64) == 0 && (typeof T.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (ir === null || !ir.has(I)))) {
                                h.flags |= 4096, t &= -t, h.lanes |= t;
                                var U = yv(h, o, t);
                                Ay(h, U);
                                break e
                            }
                    }
                    h = h.return
                } while (h !== null)
            }
            Tv(n)
        } catch (z) { t = z, Dt === n && n !== null && (Dt = n = n.return); continue }
        break
    } while (1)
}

function Pv() { var e = Eu.current; return Eu.current = Cu, e === null ? Cu : e }

function ga(e, t) {
    var n = Te;
    Te |= 16;
    var r = Pv();
    nn === e && Gt === t || jo(e, t);
    do try { _k(); break } catch (i) { Dv(e, i) }
    while (1);
    if (qd(), Te = n, Eu.current = r, Dt !== null) throw Error(ne(261));
    return nn = null, Gt = 0, zt
}

function _k() { for (; Dt !== null;) Rv(Dt) }

function Sk() { for (; Dt !== null && !ik();) Rv(Dt) }

function Rv(e) {
    var t = Fv(e.alternate, e, Ii);
    e.memoizedProps = e.pendingProps, t === null ? Tv(e) : Dt = t, xh.current = null
}

function Tv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, (t.flags & 2048) == 0) {
            if (n = hk(n, t, Ii), n !== null) { Dt = n; return }
            if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || (Ii & 1073741824) != 0 || (n.mode & 4) == 0) {
                for (var r = 0, i = n.child; i !== null;) r |= i.lanes | i.childLanes, i = i.sibling;
                n.childLanes = r
            }
            e !== null && (e.flags & 2048) == 0 && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
        } else {
            if (n = pk(t), n !== null) { n.flags &= 2047, Dt = n; return }
            e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
        }
        if (t = t.sibling, t !== null) { Dt = t; return }
        Dt = t = e
    } while (t !== null);
    zt === 0 && (zt = 5)
}

function Ni(e) { var t = Do(); return Ti(99, kk.bind(null, e, t)), null }

function kk(e, t) {
    do ni(); while (da !== null);
    if ((Te & 48) != 0) throw Error(ne(327));
    var n = e.finishedWork;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(ne(177));
    e.callbackNode = null;
    var r = n.lanes | n.childLanes,
        i = r,
        o = e.pendingLanes & ~i;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= i, e.mutableReadLanes &= i, e.entangledLanes &= i, i = e.entanglements;
    for (var s = e.eventTimes, a = e.expirationTimes; 0 < o;) {
        var l = 31 - $r(o),
            u = 1 << l;
        i[l] = 0, s[l] = -1, a[l] = -1, o &= ~u
    }
    if (xr !== null && (r & 24) == 0 && xr.has(e) && xr.delete(e), e === nn && (Dt = nn = null, Gt = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
        if (i = Te, Te |= 32, xh.current = null, Nd = Kl, s = ry(), Ad(s)) {
            if ("selectionStart" in s) a = { start: s.selectionStart, end: s.selectionEnd };
            else e: if (a = (a = s.ownerDocument) && a.defaultView || window, (u = a.getSelection && a.getSelection()) && u.rangeCount !== 0) {
                    a = u.anchorNode, o = u.anchorOffset, l = u.focusNode, u = u.focusOffset;
                    try { a.nodeType, l.nodeType } catch { a = null; break e }
                    var c = 0,
                        d = -1,
                        h = -1,
                        y = 0,
                        w = 0,
                        b = s,
                        g = null;
                    t: for (;;) {
                        for (var m; b !== a || o !== 0 && b.nodeType !== 3 || (d = c + o), b !== l || u !== 0 && b.nodeType !== 3 || (h = c + u), b.nodeType === 3 && (c += b.nodeValue.length), (m = b.firstChild) !== null;) g = b, b = m;
                        for (;;) {
                            if (b === s) break t;
                            if (g === a && ++y === o && (d = c), g === l && ++w === u && (h = c), (m = b.nextSibling) !== null) break;
                            b = g, g = b.parentNode
                        }
                        b = m
                    }
                    a = d === -1 || h === -1 ? null : { start: d, end: h }
                } else a = null;
            a = a || { start: 0, end: 0 }
        } else a = null;
        jd = { focusedElem: s, selectionRange: a }, Kl = !1, ma = null, Tu = !1, de = r;
        do try { Ck() } catch (z) {
            if (de === null) throw Error(ne(330));
            ri(de, z), de = de.nextEffect
        }
        while (de !== null);
        ma = null, de = r;
        do try {
            for (s = e; de !== null;) {
                var S = de.flags;
                if (S & 16 && Rs(de.stateNode, ""), S & 128) {
                    var k = de.alternate;
                    if (k !== null) {
                        var E = k.ref;
                        E !== null && (typeof E == "function" ? E(null) : E.current = null)
                    }
                }
                switch (S & 1038) {
                    case 2:
                        Sv(de), de.flags &= -3;
                        break;
                    case 6:
                        Sv(de), de.flags &= -3, wh(de.alternate, de);
                        break;
                    case 1024:
                        de.flags &= -1025;
                        break;
                    case 1028:
                        de.flags &= -1025, wh(de.alternate, de);
                        break;
                    case 4:
                        wh(de.alternate, de);
                        break;
                    case 8:
                        a = de, kv(s, a);
                        var P = a.alternate;
                        bv(a), P !== null && bv(P)
                }
                de = de.nextEffect
            }
        } catch (z) {
            if (de === null) throw Error(ne(330));
            ri(de, z), de = de.nextEffect
        }
        while (de !== null);
        if (E = jd, k = ry(), S = E.focusedElem, s = E.selectionRange, k !== S && S && S.ownerDocument && ny(S.ownerDocument.documentElement, S)) { for (s !== null && Ad(S) && (k = s.start, E = s.end, E === void 0 && (E = k), "selectionStart" in S ? (S.selectionStart = k, S.selectionEnd = Math.min(E, S.value.length)) : (E = (k = S.ownerDocument || document) && k.defaultView || window, E.getSelection && (E = E.getSelection(), a = S.textContent.length, P = Math.min(s.start, a), s = s.end === void 0 ? P : Math.min(s.end, a), !E.extend && P > s && (a = s, s = P, P = a), a = ty(S, P), o = ty(S, s), a && o && (E.rangeCount !== 1 || E.anchorNode !== a.node || E.anchorOffset !== a.offset || E.focusNode !== o.node || E.focusOffset !== o.offset) && (k = k.createRange(), k.setStart(a.node, a.offset), E.removeAllRanges(), P > s ? (E.addRange(k), E.extend(o.node, o.offset)) : (k.setEnd(o.node, o.offset), E.addRange(k)))))), k = [], E = S; E = E.parentNode;) E.nodeType === 1 && k.push({ element: E, left: E.scrollLeft, top: E.scrollTop }); for (typeof S.focus == "function" && S.focus(), S = 0; S < k.length; S++) E = k[S], E.element.scrollLeft = E.left, E.element.scrollTop = E.top }
        Kl = !!Nd, jd = Nd = null, e.current = n, de = r;
        do try {
            for (S = e; de !== null;) {
                var T = de.flags;
                if (T & 36 && vk(S, de.alternate, de), T & 128) {
                    k = void 0;
                    var I = de.ref;
                    if (I !== null) {
                        var U = de.stateNode;
                        switch (de.tag) {
                            case 5:
                                k = U;
                                break;
                            default:
                                k = U
                        }
                        typeof I == "function" ? I(k) : I.current = k
                    }
                }
                de = de.nextEffect
            }
        } catch (z) {
            if (de === null) throw Error(ne(330));
            ri(de, z), de = de.nextEffect
        }
        while (de !== null);
        de = null, sk(), Te = i
    } else e.current = n;
    if (Jr) Jr = !1, da = e, ha = t;
    else
        for (de = r; de !== null;) t = de.nextEffect, de.nextEffect = null, de.flags & 8 && (T = de, T.sibling = null, T.stateNode = null), de = t;
    if (r = e.pendingLanes, r === 0 && (ir = null), r === 1 ? e === Dh ? pa++ : (pa = 0, Dh = e) : pa = 0, n = n.stateNode, Ri && typeof Ri.onCommitFiberRoot == "function") try { Ri.onCommitFiberRoot(Yd, n, void 0, (n.current.flags & 64) == 64) } catch {}
    if (Tn(e, Vt()), Du) throw Du = !1, e = Mh, Mh = null, e;
    return (Te & 8) != 0 || er(), null
}

function Ck() {
    for (; de !== null;) {
        var e = de.alternate;
        Tu || ma === null || ((de.flags & 8) != 0 ? S0(de, ma) && (Tu = !0) : de.tag === 13 && wk(e, de) && S0(de, ma) && (Tu = !0));
        var t = de.flags;
        (t & 256) != 0 && yk(e, de), (t & 512) == 0 || Jr || (Jr = !0, Zs(97, function() { return ni(), null })), de = de.nextEffect
    }
}

function ni() { if (ha !== 90) { var e = 97 < ha ? 97 : ha; return ha = 90, Ti(e, Ek) } return !1 }

function Mk(e, t) { Eh.push(t, e), Jr || (Jr = !0, Zs(97, function() { return ni(), null })) }

function Av(e, t) { Oh.push(t, e), Jr || (Jr = !0, Zs(97, function() { return ni(), null })) }

function Ek() {
    if (da === null) return !1;
    var e = da;
    if (da = null, (Te & 48) != 0) throw Error(ne(331));
    var t = Te;
    Te |= 32;
    var n = Oh;
    Oh = [];
    for (var r = 0; r < n.length; r += 2) {
        var i = n[r],
            o = n[r + 1],
            s = i.destroy;
        if (i.destroy = void 0, typeof s == "function") try { s() } catch (l) {
            if (o === null) throw Error(ne(330));
            ri(o, l)
        }
    }
    for (n = Eh, Eh = [], r = 0; r < n.length; r += 2) {
        i = n[r], o = n[r + 1];
        try {
            var a = i.create;
            i.destroy = a()
        } catch (l) {
            if (o === null) throw Error(ne(330));
            ri(o, l)
        }
    }
    for (a = e.current.firstEffect; a !== null;) e = a.nextEffect, a.nextEffect = null, a.flags & 8 && (a.sibling = null, a.stateNode = null), a = e;
    return Te = t, er(), !0
}

function Lv(e, t, n) { t = mh(n, t), t = gv(e, t, 1), Qr(e, t), t = yn(), e = Au(e, 1), e !== null && (ql(e, 1, t), Tn(e, t)) }

function ri(e, t) {
    if (e.tag === 3) Lv(e, e, t);
    else
        for (var n = e.return; n !== null;) {
            if (n.tag === 3) { Lv(n, e, t); break } else if (n.tag === 1) {
                var r = n.stateNode;
                if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ir === null || !ir.has(r))) {
                    e = mh(t, e);
                    var i = yv(n, e, 1);
                    if (Qr(n, i), i = yn(), n = Au(n, 1), n !== null) ql(n, 1, i), Tn(n, i);
                    else if (typeof r.componentDidCatch == "function" && (ir === null || !ir.has(r))) try { r.componentDidCatch(t, e) } catch {}
                    break
                }
            }
            n = n.return
        }
}

function Ok(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = yn(), e.pingedLanes |= e.suspendedLanes & n, nn === e && (Gt & n) === n && (zt === 4 || zt === 3 && (Gt & 62914560) === Gt && 500 > Vt() - kh ? jo(e, 0) : _h |= n), Tn(e, t)
}

function Dk(e, t) {
    var n = e.stateNode;
    n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, (t & 2) == 0 ? t = 1 : (t & 4) == 0 ? t = Do() === 99 ? 1 : 2 : (br === 0 && (br = Lo), t = wo(62914560 & ~br), t === 0 && (t = 4194304))), n = yn(), e = Au(e, t), e !== null && (ql(e, t, n), Tn(e, n))
}
var Fv;
Fv = function(e, t, n) {
    var r = t.lanes;
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || an.current) Un = !0;
        else if ((n & r) != 0) Un = (e.flags & 16384) != 0;
    else {
        switch (Un = !1, t.tag) {
            case 3:
                sv(t), nh();
                break;
            case 5:
                Wy(t);
                break;
            case 1:
                ln(t.type) && lu(t);
                break;
            case 4:
                Jd(t, t.stateNode.containerInfo);
                break;
            case 10:
                r = t.memoizedProps.value;
                var i = t.type._context;
                yt(fu, i._currentValue), i._currentValue = r;
                break;
            case 13:
                if (t.memoizedState !== null) return (n & t.child.childLanes) != 0 ? av(e, t, n) : (yt(vt, vt.current & 1), t = wr(e, t, n), t !== null ? t.sibling : null);
                yt(vt, vt.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) != 0, (e.flags & 64) != 0) {
                    if (r) return dv(e, t, n);
                    t.flags |= 64
                }
                if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), yt(vt, vt.current), r) break;
                return null;
            case 23:
            case 24:
                return t.lanes = 0, ch(e, t, n)
        }
        return wr(e, t, n)
    } else Un = !1;
    switch (t.lanes = 0, t.tag) {
        case 2:
            if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = Oo(t, $t.current), Ro(t, n), i = oh(null, t, r, e, i, n), t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0) {
                if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ln(r)) {
                    var o = !0;
                    lu(t)
                } else o = !1;
                t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Qd(t);
                var s = r.getDerivedStateFromProps;
                typeof s == "function" && pu(t, r, s, e), i.updater = mu, t.stateNode = i, i._reactInternals = t, Zd(t, r, e, n), t = dh(null, t, r, !0, o, n)
            } else t.tag = 0, cn(null, t, i, n), t = t.child;
            return t;
        case 16:
            i = t.elementType;
            e: {
                switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = i._init, i = o(i._payload), t.type = i, o = t.tag = Rk(i), e = Vn(i, e), o) {
                    case 0:
                        t = fh(null, t, i, e, n);
                        break e;
                    case 1:
                        t = ov(null, t, i, e, n);
                        break e;
                    case 11:
                        t = tv(null, t, i, e, n);
                        break e;
                    case 14:
                        t = nv(null, t, i, Vn(i.type, e), r, n);
                        break e
                }
                throw Error(ne(306, i, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vn(r, i), fh(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vn(r, i), ov(e, t, r, i, n);
        case 3:
            if (sv(t), r = t.updateQueue, e === null || r === null) throw Error(ne(282));
            if (r = t.pendingProps, i = t.memoizedState, i = i !== null ? i.element : null, Ty(e, t), Js(t, r, null, n), r = t.memoizedState.element, r === i) nh(), t = wr(e, t, n);
            else {
                if (i = t.stateNode, (o = i.hydrate) && (Zr = ko(t.stateNode.containerInfo.firstChild), vr = t, o = nr = !0), o) {
                    if (e = i.mutableSourceEagerHydrationData, e != null)
                        for (i = 0; i < e.length; i += 2) o = e[i], o._workInProgressVersionPrimary = e[i + 1], Ao.push(o);
                    for (n = By(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 1024, n = n.sibling
                } else cn(e, t, r, n), nh();
                t = t.child
            }
            return t;
        case 5:
            return Wy(t), e === null && th(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, zd(r, i) ? s = null : o !== null && zd(r, o) && (t.flags |= 16), iv(e, t), cn(e, t, s, n), t.child;
        case 6:
            return e === null && th(t), null;
        case 13:
            return av(e, t, n);
        case 4:
            return Jd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = vu(t, null, r, n) : cn(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vn(r, i), tv(e, t, r, i, n);
        case 7:
            return cn(e, t, t.pendingProps, n), t.child;
        case 8:
            return cn(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return cn(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                r = t.type._context,
                i = t.pendingProps,
                s = t.memoizedProps,
                o = i.value;
                var a = t.type._context;
                if (yt(fu, a._currentValue), a._currentValue = o, s !== null)
                    if (a = s.value, o = Dn(a, o) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(a, o) : 1073741823) | 0, o === 0) { if (s.children === i.children && !an.current) { t = wr(e, t, n); break e } } else
                        for (a = t.child, a !== null && (a.return = t); a !== null;) {
                            var l = a.dependencies;
                            if (l !== null) {
                                s = a.child;
                                for (var u = l.firstContext; u !== null;) {
                                    if (u.context === r && (u.observedBits & o) != 0) { a.tag === 1 && (u = Kr(-1, n & -n), u.tag = 2, Qr(a, u)), a.lanes |= n, u = a.alternate, u !== null && (u.lanes |= n), Ry(a.return, n), l.lanes |= n; break }
                                    u = u.next
                                }
                            } else s = a.tag === 10 && a.type === t.type ? null : a.child;
                            if (s !== null) s.return = a;
                            else
                                for (s = a; s !== null;) {
                                    if (s === t) { s = null; break }
                                    if (a = s.sibling, a !== null) { a.return = s.return, s = a; break }
                                    s = s.return
                                }
                            a = s
                        }
                cn(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, o = t.pendingProps, r = o.children, Ro(t, n), i = Pn(i, o.unstable_observedBits), r = r(i), t.flags |= 1, cn(e, t, r, n), t.child;
        case 14:
            return i = t.type, o = Vn(i, t.pendingProps), o = Vn(i.type, o), nv(e, t, i, o, r, n);
        case 15:
            return rv(e, t, t.type, t.pendingProps, r, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vn(r, i), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ln(r) ? (e = !0, lu(t)) : e = !1, Ro(t, n), Ny(t, r, i), Zd(t, r, i, n), dh(null, t, r, !0, e, n);
        case 19:
            return dv(e, t, n);
        case 23:
            return ch(e, t, n);
        case 24:
            return ch(e, t, n)
    }
    throw Error(ne(156, t.tag))
};

function Pk(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null }

function An(e, t, n, r) { return new Pk(e, t, n, r) }

function Th(e) { return e = e.prototype, !(!e || !e.isReactComponent) }

function Rk(e) { if (typeof e == "function") return Th(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === Il) return 11; if (e === jl) return 14 } return 2 }

function ii(e, t) { var n = e.alternate; return n === null ? (n = An(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n }

function Fu(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") Th(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case zr:
            return zo(n.children, i, o, t);
        case t0:
            s = 8, i |= 16;
            break;
        case Hf:
            s = 8, i |= 1;
            break;
        case Es:
            return e = An(12, n, t, i | 8), e.elementType = Es, e.type = Es, e.lanes = o, e;
        case Os:
            return e = An(13, n, t, i), e.type = Os, e.elementType = Os, e.lanes = o, e;
        case Nl:
            return e = An(19, n, t, i), e.elementType = Nl, e.lanes = o, e;
        case Xf:
            return Ah(n, i, o, t);
        case qf:
            return e = An(24, n, t, i), e.elementType = qf, e.lanes = o, e;
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Yf:
                    s = 10;
                    break e;
                case $f:
                    s = 9;
                    break e;
                case Il:
                    s = 11;
                    break e;
                case jl:
                    s = 14;
                    break e;
                case Vf:
                    s = 16, r = null;
                    break e;
                case Uf:
                    s = 22;
                    break e
            }
            throw Error(ne(130, e == null ? e : typeof e, ""))
    }
    return t = An(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function zo(e, t, n, r) { return e = An(7, e, r, t), e.lanes = n, e }

function Ah(e, t, n, r) { return e = An(23, e, r, t), e.elementType = Xf, e.lanes = n, e }

function Lh(e, t, n) { return e = An(6, e, null, t), e.lanes = n, e }

function Fh(e, t, n) { return t = An(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

function Tk(e, t, n) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = bd(0), this.expirationTimes = bd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bd(0), this.mutableSourceEagerHydrationData = null }

function Ak(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Mi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n } }

function Iu(e, t, n, r) {
    var i = t.current,
        o = yn(),
        s = ei(i);
    e: if (n) {
            n = n._reactInternals;
            t: {
                if (Oi(n) !== n || n.tag !== 1) throw Error(ne(170));
                var a = n;do {
                    switch (a.tag) {
                        case 3:
                            a = a.stateNode.context;
                            break t;
                        case 1:
                            if (ln(a.type)) { a = a.stateNode.__reactInternalMemoizedMergedChildContext; break t }
                    }
                    a = a.return
                } while (a !== null);
                throw Error(ne(171))
            }
            if (n.tag === 1) { var l = n.type; if (ln(l)) { n = by(n, l, a); break e } }
            n = a
        } else n = Xr;
    return t.context === null ? t.context = n : t.pendingContext = n, t = Kr(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), Qr(i, t), ti(i, s, o), s
}

function Ih(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Iv(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Nh(e, t) { Iv(e, t), (e = e.alternate) && Iv(e, t) }

function Lk() { return null }

function jh(e, t, n) {
    var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
    if (n = new Tk(e, t, n != null && n.hydrate === !0), t = An(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, Qd(t), e[Co] = n.current, cy(e.nodeType === 8 ? e.parentNode : e), r)
        for (e = 0; e < r.length; e++) {
            t = r[e];
            var i = t._getVersion;
            i = i(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, i] : n.mutableSourceEagerHydrationData.push(t, i)
        }
    this._internalRoot = n
}
jh.prototype.render = function(e) { Iu(e, this._internalRoot, null, null) };
jh.prototype.unmount = function() {
    var e = this._internalRoot,
        t = e.containerInfo;
    Iu(null, e, null, function() { t[Co] = null })
};

function ya(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

function Fk(e, t) {
    if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t)
        for (var n; n = e.lastChild;) e.removeChild(n);
    return new jh(e, 0, t ? { hydrate: !0 } : void 0)
}

function Nu(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o._internalRoot;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var u = Ih(s);
                a.call(u)
            }
        }
        Iu(t, s, e, i)
    } else {
        if (o = n._reactRootContainer = Fk(n, r), s = o._internalRoot, typeof i == "function") {
            var l = i;
            i = function() {
                var u = Ih(s);
                l.call(u)
            }
        }
        Ov(function() { Iu(t, s, e, i) })
    }
    return Ih(s)
}
k0 = function(e) {
    if (e.tag === 13) {
        var t = yn();
        ti(e, 4, t), Nh(e, 4)
    }
};
md = function(e) {
    if (e.tag === 13) {
        var t = yn();
        ti(e, 67108864, t), Nh(e, 67108864)
    }
};
C0 = function(e) {
    if (e.tag === 13) {
        var t = yn(),
            n = ei(e);
        ti(e, n, t), Nh(e, n)
    }
};
M0 = function(e, t) { return t() };
ld = function(e, t, n) {
    switch (t) {
        case "input":
            if (Jf(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = su(r);
                        if (!i) throw Error(ne(90));
                        i0(r), Jf(r, i)
                    }
                }
            }
            break;
        case "textarea":
            u0(e, n);
            break;
        case "select":
            t = n.value, t != null && po(e, !!n.multiple, t, !1)
    }
};
ud = Ev;
v0 = function(e, t, n, r, i) {
    var o = Te;
    Te |= 4;
    try { return Ti(98, e.bind(null, t, n, r, i)) } finally { Te = o, Te === 0 && (Io(), er()) }
};
cd = function() {
    (Te & 49) == 0 && (bk(), ni())
};
w0 = function(e, t) {
    var n = Te;
    Te |= 2;
    try { return e(t) } finally { Te = n, Te === 0 && (Io(), er()) }
};

function Nv(e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!ya(t)) throw Error(ne(200)); return Ak(e, t, null, n) }
var Ik = { Events: [Qs, Mo, su, g0, y0, ni, { current: !1 }] },
    va = { findFiberByHostInstance: Di, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" },
    Nk = { bundleType: va.bundleType, version: va.version, rendererPackageName: va.rendererPackageName, rendererConfig: va.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ci.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return e = _0(e), e === null ? null : e.stateNode }, findFiberByHostInstance: va.findFiberByHostInstance || Lk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") { var ju = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!ju.isDisabled && ju.supportsFiber) try { Yd = ju.inject(Nk), Ri = ju } catch {} }
On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ik;
On.createPortal = Nv;
On.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(ne(188)) : Error(ne(268, Object.keys(e))); return e = _0(t), e = e === null ? null : e.stateNode, e };
On.flushSync = function(e, t) {
    var n = Te;
    if ((n & 48) != 0) return e(t);
    Te |= 1;
    try { if (e) return Ti(99, e.bind(null, t)) } finally { Te = n, er() }
};
On.hydrate = function(e, t, n) { if (!ya(t)) throw Error(ne(200)); return Nu(null, e, t, !0, n) };
On.render = function(e, t, n) { if (!ya(t)) throw Error(ne(200)); return Nu(null, e, t, !1, n) };
On.unmountComponentAtNode = function(e) { if (!ya(e)) throw Error(ne(40)); return e._reactRootContainer ? (Ov(function() { Nu(null, null, e, !1, function() { e._reactRootContainer = null, e[Co] = null }) }), !0) : !1 };
On.unstable_batchedUpdates = Ev;
On.unstable_createPortal = function(e, t) { return Nv(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null) };
On.unstable_renderSubtreeIntoContainer = function(e, t, n, r) { if (!ya(n)) throw Error(ne(200)); if (e == null || e._reactInternals === void 0) throw Error(ne(38)); return Nu(e, t, n, !1, r) };
On.version = "17.0.2";

function jv() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv) } catch (e) { console.error(e) } }
jv(), Xg.exports = On;
var zh = Xg.exports;

function wa() { return wa = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, wa.apply(this, arguments) }
var ji, Bh = ji || (ji = {});
Bh.Pop = "POP";
Bh.Push = "PUSH";
Bh.Replace = "REPLACE";
var zv = function(e) { return e };

function Bv(e) { e.preventDefault(), e.returnValue = "" }

function Wv() {
    var e = [];
    return {get length() { return e.length },
        push: function(t) {
            return e.push(t),
                function() { e = e.filter(function(n) { return n !== t }) }
        },
        call: function(t) { e.forEach(function(n) { return n && n(t) }) }
    }
}

function jk() { return Math.random().toString(36).substr(2, 8) }

function Wh(e) {
    var t = e.pathname;
    t = t === void 0 ? "/" : t;
    var n = e.search;
    return n = n === void 0 ? "" : n, e = e.hash, e = e === void 0 ? "" : e, n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), e && e !== "#" && (t += e.charAt(0) === "#" ? e : "#" + e), t
}

function zi(e) {
    var t = {};
    if (e) {
        var n = e.indexOf("#");
        0 <= n && (t.hash = e.substr(n), e = e.substr(0, n)), n = e.indexOf("?"), 0 <= n && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
    }
    return t
}

function zk(e) {
    function t() {
        var g = l.location,
            m = u.state || {};
        return [m.idx, zv({ pathname: g.pathname, search: g.search, hash: g.hash, state: m.usr || null, key: m.key || "default" })]
    }

    function n(g) { return typeof g == "string" ? g : Wh(g) }

    function r(g, m) { return m === void 0 && (m = null), zv(wa({ pathname: y.pathname, hash: "", search: "" }, typeof g == "string" ? zi(g) : g, { state: m, key: jk() })) }

    function i(g) { d = g, g = t(), h = g[0], y = g[1], w.call({ action: d, location: y }) }

    function o(g, m) {
        function S() { o(g, m) }
        var k = ji.Push,
            E = r(g, m);
        if (!b.length || (b.call({ action: k, location: E, retry: S }), !1)) {
            var P = [{ usr: E.state, key: E.key, idx: h + 1 }, n(E)];
            E = P[0], P = P[1];
            try { u.pushState(E, "", P) } catch { l.location.assign(P) }
            i(k)
        }
    }

    function s(g, m) {
        function S() { s(g, m) }
        var k = ji.Replace,
            E = r(g, m);
        b.length && (b.call({ action: k, location: E, retry: S }), 1) || (E = [{ usr: E.state, key: E.key, idx: h }, n(E)], u.replaceState(E[0], "", E[1]), i(k))
    }

    function a(g) { u.go(g) }
    e === void 0 && (e = {}), e = e.window;
    var l = e === void 0 ? document.defaultView : e,
        u = l.history,
        c = null;
    l.addEventListener("popstate", function() {
        if (c) b.call(c), c = null;
        else {
            var g = ji.Pop,
                m = t(),
                S = m[0];
            if (m = m[1], b.length) {
                if (S != null) {
                    var k = h - S;
                    k && (c = { action: g, location: m, retry: function() { a(-1 * k) } }, a(k))
                }
            } else i(g)
        }
    });
    var d = ji.Pop;
    e = t();
    var h = e[0],
        y = e[1],
        w = Wv(),
        b = Wv();
    return h == null && (h = 0, u.replaceState(wa({}, u.state, { idx: h }), "")), {get action() { return d },
        get location() { return y },
        createHref: n,
        push: o,
        replace: s,
        go: a,
        back: function() { a(-1) },
        forward: function() { a(1) },
        listen: function(g) { return w.push(g) },
        block: function(g) {
            var m = b.push(g);
            return b.length === 1 && l.addEventListener("beforeunload", Bv),
                function() { m(), b.length || l.removeEventListener("beforeunload", Bv) }
        }
    }
}
/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function or(e, t) { if (!e) throw new Error(t) }
const Hh = Z.exports.createContext(null),
    Yh = Z.exports.createContext(null),
    Bo = Z.exports.createContext({ outlet: null, matches: [] });

function Bk(e) { return Uk(e.context) }

function Wk(e) { or(!1) }

function Hk(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: i = ji.Pop, navigator: o, static: s = !1 } = e;
    xa() && or(!1);
    let a = dC(t),
        l = Z.exports.useMemo(() => ({ basename: a, navigator: o, static: s }), [a, o, s]);
    typeof r == "string" && (r = zi(r));
    let { pathname: u = "/", search: c = "", hash: d = "", state: h = null, key: y = "default" } = r, w = Z.exports.useMemo(() => { let b = Vv(u, a); return b == null ? null : { pathname: b, search: c, hash: d, state: h, key: y } }, [a, u, c, d, h, y]);
    return w == null ? null : Z.exports.createElement(Hh.Provider, { value: l }, Z.exports.createElement(Yh.Provider, { children: n, value: { location: w, navigationType: i } }))
}

function eI(e) { let { children: t, location: n } = e; return Gk(Vh(t), n) }

function Yk(e) {
    xa() || or(!1);
    let { basename: t, navigator: n } = Z.exports.useContext(Hh), { hash: r, pathname: i, search: o } = $h(e), s = i;
    if (t !== "/") {
        let a = fC(e),
            l = a != null && a.endsWith("/");
        s = i === "/" ? t + (l ? "/" : "") : oi([t, i])
    }
    return n.createHref({ pathname: s, search: o, hash: r })
}

function xa() { return Z.exports.useContext(Yh) != null }

function ba() { return xa() || or(!1), Z.exports.useContext(Yh).location }

function $k() {
    xa() || or(!1);
    let { basename: e, navigator: t } = Z.exports.useContext(Hh), { matches: n } = Z.exports.useContext(Bo), { pathname: r } = ba(), i = JSON.stringify(n.map(a => a.pathnameBase)), o = Z.exports.useRef(!1);
    return Z.exports.useEffect(() => { o.current = !0 }), Z.exports.useCallback(function(a, l) {
        if (l === void 0 && (l = {}), !o.current) return;
        if (typeof a == "number") { t.go(a); return }
        let u = $v(a, JSON.parse(i), r);
        e !== "/" && (u.pathname = oi([e, u.pathname])), (l.replace ? t.replace : t.push)(u, l.state)
    }, [e, t, i, r])
}
const Vk = Z.exports.createContext(null);

function Uk(e) { let t = Z.exports.useContext(Bo).outlet; return t && Z.exports.createElement(Vk.Provider, { value: e }, t) }

function tI() { let { matches: e } = Z.exports.useContext(Bo), t = e[e.length - 1]; return t ? t.params : {} }

function $h(e) { let { matches: t } = Z.exports.useContext(Bo), { pathname: n } = ba(), r = JSON.stringify(t.map(i => i.pathnameBase)); return Z.exports.useMemo(() => $v(e, JSON.parse(r), n), [e, r, n]) }

function Gk(e, t) {
    xa() || or(!1);
    let { matches: n } = Z.exports.useContext(Bo), r = n[n.length - 1], i = r ? r.params : {};
    r && r.pathname;
    let o = r ? r.pathnameBase : "/";
    r && r.route;
    let s = ba(),
        a;
    if (t) {
        var l;
        let h = typeof t == "string" ? zi(t) : t;
        o === "/" || ((l = h.pathname) == null ? void 0 : l.startsWith(o)) || or(!1), a = h
    } else a = s;
    let u = a.pathname || "/",
        c = o === "/" ? u : u.slice(o.length) || "/",
        d = Xk(e, { pathname: c });
    return oC(d && d.map(h => Object.assign({}, h, { params: Object.assign({}, i, h.params), pathname: oi([o, h.pathname]), pathnameBase: h.pathnameBase === "/" ? o : oi([o, h.pathnameBase]) })), n)
}

function Vh(e) {
    let t = [];
    return Z.exports.Children.forEach(e, n => {
        if (!Z.exports.isValidElement(n)) return;
        if (n.type === Z.exports.Fragment) { t.push.apply(t, Vh(n.props.children)); return }
        n.type !== Wk && or(!1);
        let r = { caseSensitive: n.props.caseSensitive, element: n.props.element, index: n.props.index, path: n.props.path };
        n.props.children && (r.children = Vh(n.props.children)), t.push(r)
    }), t
}

function Xk(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? zi(t) : t,
        i = Vv(r.pathname || "/", n);
    if (i == null) return null;
    let o = Hv(e);
    qk(o);
    let s = null;
    for (let a = 0; s == null && a < o.length; ++a) s = iC(o[a], i);
    return s
}

function Hv(e, t, n, r) {
    return t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""), e.forEach((i, o) => {
        let s = { relativePath: i.path || "", caseSensitive: i.caseSensitive === !0, childrenIndex: o, route: i };
        s.relativePath.startsWith("/") && (s.relativePath.startsWith(r) || or(!1), s.relativePath = s.relativePath.slice(r.length));
        let a = oi([r, s.relativePath]),
            l = n.concat(s);
        i.children && i.children.length > 0 && (i.index === !0 && or(!1), Hv(i.children, t, l, a)), !(i.path == null && !i.index) && t.push({ path: a, score: nC(a, i.index), routesMeta: l })
    }), t
}

function qk(e) { e.sort((t, n) => t.score !== n.score ? n.score - t.score : rC(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))) }
const Kk = /^:\w+$/,
    Qk = 3,
    Zk = 2,
    Jk = 1,
    eC = 10,
    tC = -2,
    Yv = e => e === "*";

function nC(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Yv) && (r += tC), t && (r += Zk), n.filter(i => !Yv(i)).reduce((i, o) => i + (Kk.test(o) ? Qk : o === "" ? Jk : eC), r)
}

function rC(e, t) { return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0 }

function iC(e, t) {
    let { routesMeta: n } = e, r = {}, i = "/", o = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s],
            l = s === n.length - 1,
            u = i === "/" ? t : t.slice(i.length) || "/",
            c = sC({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
        if (!c) return null;
        Object.assign(r, c.params);
        let d = a.route;
        o.push({ params: r, pathname: oi([i, c.pathname]), pathnameBase: oi([i, c.pathnameBase]), route: d }), c.pathnameBase !== "/" && (i = oi([i, c.pathnameBase]))
    }
    return o
}

function oC(e, t) { return t === void 0 && (t = []), e == null ? null : e.reduceRight((n, r, i) => Z.exports.createElement(Bo.Provider, { children: r.route.element !== void 0 ? r.route.element : Z.exports.createElement(Bk, null), value: { outlet: n, matches: t.concat(e.slice(0, i + 1)) } }), null) }

function sC(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = aC(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let o = i[0],
        s = o.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            if (c === "*") {
                let h = a[d] || "";
                s = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1")
            }
            return u[c] = lC(a[d] || ""), u
        }, {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}

function aC(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0);
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (s, a) => (r.push(a), "([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i += n ? "\\/*$" : "(?:\\b|\\/|$)", [new RegExp(i, t ? void 0 : "i"), r]
}

function lC(e, t) { try { return decodeURIComponent(e) } catch { return e } }

function uC(e, t) { t === void 0 && (t = "/"); let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? zi(e) : e; return { pathname: n ? n.startsWith("/") ? n : cC(n, t) : t, search: hC(r), hash: pC(i) } }

function cC(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(i => { i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i) }), n.length > 1 ? n.join("/") : "/" }

function $v(e, t, n) {
    let r = typeof e == "string" ? zi(e) : e,
        i = e === "" || r.pathname === "" ? "/" : r.pathname,
        o;
    if (i == null) o = n;
    else {
        let a = t.length - 1;
        if (i.startsWith("..")) {
            let l = i.split("/");
            for (; l[0] === "..";) l.shift(), a -= 1;
            r.pathname = l.join("/")
        }
        o = a >= 0 ? t[a] : "/"
    }
    let s = uC(r, o);
    return i && i !== "/" && i.endsWith("/") && !s.pathname.endsWith("/") && (s.pathname += "/"), s
}

function fC(e) { return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? zi(e).pathname : e.pathname }

function Vv(e, t) { if (t === "/") return e; if (!e.toLowerCase().startsWith(t.toLowerCase())) return null; let n = e.charAt(t.length); return n && n !== "/" ? null : e.slice(t.length) || "/" }
const oi = e => e.join("/").replace(/\/\/+/g, "/"),
    dC = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    hC = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    pC = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zu() { return zu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, zu.apply(this, arguments) }

function Uv(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
const mC = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
    gC = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

function nI(e) {
    let { basename: t, children: n, window: r } = e, i = Z.exports.useRef();
    i.current == null && (i.current = zk({ window: r }));
    let o = i.current,
        [s, a] = Z.exports.useState({ action: o.action, location: o.location });
    return Z.exports.useLayoutEffect(() => o.listen(a), [o]), Z.exports.createElement(Hk, { basename: t, children: n, location: s.location, navigationType: s.action, navigator: o })
}

function yC(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) }
const vC = Z.exports.forwardRef(function(t, n) {
        let { onClick: r, reloadDocument: i, replace: o = !1, state: s, target: a, to: l } = t, u = Uv(t, mC), c = Yk(l), d = wC(l, { replace: o, state: s, target: a });

        function h(y) { r && r(y), !y.defaultPrevented && !i && d(y) }
        return Z.exports.createElement("a", zu({}, u, { href: c, onClick: h, ref: n, target: a }))
    }),
    rI = Z.exports.forwardRef(function(t, n) {
        let { "aria-current": r = "page", caseSensitive: i = !1, className: o = "", end: s = !1, style: a, to: l, children: u } = t, c = Uv(t, gC), d = ba(), h = $h(l), y = d.pathname, w = h.pathname;
        i || (y = y.toLowerCase(), w = w.toLowerCase());
        let b = y === w || !s && y.startsWith(w) && y.charAt(w.length) === "/",
            g = b ? r : void 0,
            m;
        typeof o == "function" ? m = o({ isActive: b }) : m = [o, b ? "active" : null].filter(Boolean).join(" ");
        let S = typeof a == "function" ? a({ isActive: b }) : a;
        return Z.exports.createElement(vC, zu({}, c, { "aria-current": g, className: m, ref: n, style: S, to: l }), typeof u == "function" ? u({ isActive: b }) : u)
    });

function wC(e, t) {
    let { target: n, replace: r, state: i } = t === void 0 ? {} : t, o = $k(), s = ba(), a = $h(e);
    return Z.exports.useCallback(l => {
        if (l.button === 0 && (!n || n === "_self") && !yC(l)) {
            l.preventDefault();
            let u = !!r || Wh(s) === Wh(a);
            o(e, { replace: u, state: i })
        }
    }, [s, o, a, r, i, n, e])
}
/*!
 * Chart.js v3.7.0
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */
const Gv = function() { return typeof window == "undefined" ? function(e) { return e() } : window.requestAnimationFrame }();

function Xv(e, t, n) {
    const r = n || (s => Array.prototype.slice.call(s));
    let i = !1,
        o = [];
    return function(...s) { o = r(s), i || (i = !0, Gv.call(window, () => { i = !1, e.apply(t, o) })) }
}

function xC(e, t) { let n; return function(...r) { return t ? (clearTimeout(n), n = setTimeout(e, t, r)) : e.apply(this, r), t } }
const qv = e => e === "start" ? "left" : e === "end" ? "right" : "center",
    vn = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2,
    bC = (e, t, n, r) => e === (r ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;

function _r() {}
const _C = function() { let e = 0; return function() { return e++ } }();

function Je(e) { return e === null || typeof e == "undefined" }

function ct(e) { if (Array.isArray && Array.isArray(e)) return !0; const t = Object.prototype.toString.call(e); return t.substr(0, 7) === "[object" && t.substr(-6) === "Array]" }

function He(e) { return e !== null && Object.prototype.toString.call(e) === "[object Object]" }
const St = e => (typeof e == "number" || e instanceof Number) && isFinite(+e);

function Ln(e, t) { return St(e) ? e : t }

function Fe(e, t) { return typeof e == "undefined" ? t : e }
const SC = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : e / t,
    Kv = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;

function st(e, t, n) { if (e && typeof e.call == "function") return e.apply(n, t) }

function et(e, t, n, r) {
    let i, o, s;
    if (ct(e))
        if (o = e.length, r)
            for (i = o - 1; i >= 0; i--) t.call(n, e[i], i);
        else
            for (i = 0; i < o; i++) t.call(n, e[i], i);
    else if (He(e))
        for (s = Object.keys(e), o = s.length, i = 0; i < o; i++) t.call(n, e[s[i]], s[i])
}

function Bu(e, t) {
    let n, r, i, o;
    if (!e || !t || e.length !== t.length) return !1;
    for (n = 0, r = e.length; n < r; ++n)
        if (i = e[n], o = t[n], i.datasetIndex !== o.datasetIndex || i.index !== o.index) return !1;
    return !0
}

function Wu(e) {
    if (ct(e)) return e.map(Wu);
    if (He(e)) {
        const t = Object.create(null),
            n = Object.keys(e),
            r = n.length;
        let i = 0;
        for (; i < r; ++i) t[n[i]] = Wu(e[n[i]]);
        return t
    }
    return e
}

function Qv(e) { return ["__proto__", "prototype", "constructor"].indexOf(e) === -1 }

function kC(e, t, n, r) {
    if (!Qv(e)) return;
    const i = t[e],
        o = n[e];
    He(i) && He(o) ? _a(i, o, r) : t[e] = Wu(o)
}

function _a(e, t, n) {
    const r = ct(t) ? t : [t],
        i = r.length;
    if (!He(e)) return e;
    n = n || {};
    const o = n.merger || kC;
    for (let s = 0; s < i; ++s) { if (t = r[s], !He(t)) continue; const a = Object.keys(t); for (let l = 0, u = a.length; l < u; ++l) o(a[l], e, t, n) }
    return e
}

function Sa(e, t) { return _a(e, t, { merger: CC }) }

function CC(e, t, n) {
    if (!Qv(e)) return;
    const r = t[e],
        i = n[e];
    He(r) && He(i) ? Sa(r, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Wu(i))
}
const MC = "",
    EC = ".";

function Zv(e, t) { const n = e.indexOf(EC, t); return n === -1 ? e.length : n }

function Bi(e, t) {
    if (t === MC) return e;
    let n = 0,
        r = Zv(t, n);
    for (; e && r > n;) e = e[t.substr(n, r - n)], n = r + 1, r = Zv(t, n);
    return e
}

function Uh(e) { return e.charAt(0).toUpperCase() + e.slice(1) }
const Fn = e => typeof e != "undefined",
    si = e => typeof e == "function",
    Jv = (e, t) => {
        if (e.size !== t.size) return !1;
        for (const n of e)
            if (!t.has(n)) return !1;
        return !0
    };

function OC(e) { return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu" }
const wt = Math.PI,
    it = 2 * wt,
    DC = it + wt,
    Hu = Number.POSITIVE_INFINITY,
    PC = wt / 180,
    xt = wt / 2,
    ka = wt / 4,
    e1 = wt * 2 / 3,
    In = Math.log10,
    sr = Math.sign;

function t1(e) {
    const t = Math.round(e);
    e = Ma(e, t, e / 1e3) ? t : e;
    const n = Math.pow(10, Math.floor(In(e))),
        r = e / n;
    return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n
}

function RC(e) {
    const t = [],
        n = Math.sqrt(e);
    let r;
    for (r = 1; r < n; r++) e % r == 0 && (t.push(r), t.push(e / r));
    return n === (n | 0) && t.push(n), t.sort((i, o) => i - o).pop(), t
}

function Ca(e) { return !isNaN(parseFloat(e)) && isFinite(e) }

function Ma(e, t, n) { return Math.abs(e - t) < n }

function TC(e, t) { const n = Math.round(e); return n - t <= e && n + t >= e }

function n1(e, t, n) { let r, i, o; for (r = 0, i = e.length; r < i; r++) o = e[r][n], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o)) }

function Gn(e) { return e * (wt / 180) }

function Gh(e) { return e * (180 / wt) }

function r1(e) {
    if (!St(e)) return;
    let t = 1,
        n = 0;
    for (; Math.round(e * t) / t !== e;) t *= 10, n++;
    return n
}

function i1(e, t) {
    const n = t.x - e.x,
        r = t.y - e.y,
        i = Math.sqrt(n * n + r * r);
    let o = Math.atan2(r, n);
    return o < -.5 * wt && (o += it), { angle: o, distance: i }
}

function Xh(e, t) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) }

function AC(e, t) { return (e - t + DC) % it - wt }

function wn(e) { return (e % it + it) % it }

function Ea(e, t, n, r) {
    const i = wn(e),
        o = wn(t),
        s = wn(n),
        a = wn(o - i),
        l = wn(s - i),
        u = wn(i - o),
        c = wn(i - s);
    return i === o || i === s || r && o === s || a > l && u < c
}

function Xt(e, t, n) { return Math.max(t, Math.min(n, e)) }

function LC(e) { return Xt(e, -32768, 32767) }

function Sr(e, t, n, r = 1e-6) { return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r }
const Yu = e => e === 0 || e === 1,
    o1 = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * it / n)),
    s1 = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * it / n) + 1,
    Oa = {
        linear: e => e,
        easeInQuad: e => e * e,
        easeOutQuad: e => -e * (e - 2),
        easeInOutQuad: e => (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1),
        easeInCubic: e => e * e * e,
        easeOutCubic: e => (e -= 1) * e * e + 1,
        easeInOutCubic: e => (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2),
        easeInQuart: e => e * e * e * e,
        easeOutQuart: e => -((e -= 1) * e * e * e - 1),
        easeInOutQuart: e => (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2),
        easeInQuint: e => e * e * e * e * e,
        easeOutQuint: e => (e -= 1) * e * e * e * e + 1,
        easeInOutQuint: e => (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2),
        easeInSine: e => -Math.cos(e * xt) + 1,
        easeOutSine: e => Math.sin(e * xt),
        easeInOutSine: e => -.5 * (Math.cos(wt * e) - 1),
        easeInExpo: e => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
        easeOutExpo: e => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
        easeInOutExpo: e => Yu(e) ? e : e < .5 ? .5 * Math.pow(2, 10 * (e * 2 - 1)) : .5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
        easeInCirc: e => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
        easeOutCirc: e => Math.sqrt(1 - (e -= 1) * e),
        easeInOutCirc: e => (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
        easeInElastic: e => Yu(e) ? e : o1(e, .075, .3),
        easeOutElastic: e => Yu(e) ? e : s1(e, .075, .3),
        easeInOutElastic(e) {
            const t = .1125,
                n = .45;
            return Yu(e) ? e : e < .5 ? .5 * o1(e * 2, t, n) : .5 + .5 * s1(e * 2 - 1, t, n)
        },
        easeInBack(e) { const t = 1.70158; return e * e * ((t + 1) * e - t) },
        easeOutBack(e) { const t = 1.70158; return (e -= 1) * e * ((t + 1) * e + t) + 1 },
        easeInOutBack(e) { let t = 1.70158; return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2) },
        easeInBounce: e => 1 - Oa.easeOutBounce(1 - e),
        easeOutBounce(e) {
            const t = 7.5625,
                n = 2.75;
            return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        easeInOutBounce: e => e < .5 ? Oa.easeInBounce(e * 2) * .5 : Oa.easeOutBounce(e * 2 - 1) * .5 + .5
    };
/*!
 * @kurkle/color v0.1.9
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */
const Nn = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 },
    qh = "0123456789ABCDEF",
    FC = e => qh[e & 15],
    IC = e => qh[(e & 240) >> 4] + qh[e & 15],
    $u = e => (e & 240) >> 4 == (e & 15);

function NC(e) { return $u(e.r) && $u(e.g) && $u(e.b) && $u(e.a) }

function jC(e) {
    var t = e.length,
        n;
    return e[0] === "#" && (t === 4 || t === 5 ? n = { r: 255 & Nn[e[1]] * 17, g: 255 & Nn[e[2]] * 17, b: 255 & Nn[e[3]] * 17, a: t === 5 ? Nn[e[4]] * 17 : 255 } : (t === 7 || t === 9) && (n = { r: Nn[e[1]] << 4 | Nn[e[2]], g: Nn[e[3]] << 4 | Nn[e[4]], b: Nn[e[5]] << 4 | Nn[e[6]], a: t === 9 ? Nn[e[7]] << 4 | Nn[e[8]] : 255 })), n
}

function zC(e) { var t = NC(e) ? FC : IC; return e && "#" + t(e.r) + t(e.g) + t(e.b) + (e.a < 255 ? t(e.a) : "") }

function Da(e) { return e + .5 | 0 }
const Vu = (e, t, n) => Math.max(Math.min(e, n), t);

function Pa(e) { return Vu(Da(e * 2.55), 0, 255) }

function Ra(e) { return Vu(Da(e * 255), 0, 255) }

function Kh(e) { return Vu(Da(e / 2.55) / 100, 0, 1) }

function a1(e) { return Vu(Da(e * 100), 0, 100) }
const BC = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

function WC(e) {
    const t = BC.exec(e);
    let n = 255,
        r, i, o;
    if (!!t) {
        if (t[7] !== r) {
            const s = +t[7];
            n = 255 & (t[8] ? Pa(s) : s * 255)
        }
        return r = +t[1], i = +t[3], o = +t[5], r = 255 & (t[2] ? Pa(r) : r), i = 255 & (t[4] ? Pa(i) : i), o = 255 & (t[6] ? Pa(o) : o), { r, g: i, b: o, a: n }
    }
}

function HC(e) { return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Kh(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`) }
const YC = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

function l1(e, t, n) {
    const r = t * Math.min(n, 1 - n),
        i = (o, s = (o + e / 30) % 12) => n - r * Math.max(Math.min(s - 3, 9 - s, 1), -1);
    return [i(0), i(8), i(4)]
}

function $C(e, t, n) { const r = (i, o = (i + e / 60) % 6) => n - n * t * Math.max(Math.min(o, 4 - o, 1), 0); return [r(5), r(3), r(1)] }

function VC(e, t, n) { const r = l1(e, 1, .5); let i; for (t + n > 1 && (i = 1 / (t + n), t *= i, n *= i), i = 0; i < 3; i++) r[i] *= 1 - t - n, r[i] += t; return r }

function Qh(e) {
    const t = 255,
        n = e.r / t,
        r = e.g / t,
        i = e.b / t,
        o = Math.max(n, r, i),
        s = Math.min(n, r, i),
        a = (o + s) / 2;
    let l, u, c;
    return o !== s && (c = o - s, u = a > .5 ? c / (2 - o - s) : c / (o + s), l = o === n ? (r - i) / c + (r < i ? 6 : 0) : o === r ? (i - n) / c + 2 : (n - r) / c + 4, l = l * 60 + .5), [l | 0, u || 0, a]
}

function Zh(e, t, n, r) { return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(Ra) }

function Jh(e, t, n) { return Zh(l1, e, t, n) }

function UC(e, t, n) { return Zh(VC, e, t, n) }

function GC(e, t, n) { return Zh($C, e, t, n) }

function u1(e) { return (e % 360 + 360) % 360 }

function XC(e) {
    const t = YC.exec(e);
    let n = 255,
        r;
    if (!t) return;
    t[5] !== r && (n = t[6] ? Pa(+t[5]) : Ra(+t[5]));
    const i = u1(+t[2]),
        o = +t[3] / 100,
        s = +t[4] / 100;
    return t[1] === "hwb" ? r = UC(i, o, s) : t[1] === "hsv" ? r = GC(i, o, s) : r = Jh(i, o, s), { r: r[0], g: r[1], b: r[2], a: n }
}

function qC(e, t) {
    var n = Qh(e);
    n[0] = u1(n[0] + t), n = Jh(n), e.r = n[0], e.g = n[1], e.b = n[2]
}

function KC(e) {
    if (!e) return;
    const t = Qh(e),
        n = t[0],
        r = a1(t[1]),
        i = a1(t[2]);
    return e.a < 255 ? `hsla(${n}, ${r}%, ${i}%, ${Kh(e.a)})` : `hsl(${n}, ${r}%, ${i}%)`
}
const c1 = { x: "dark", Z: "light", Y: "re", X: "blu", W: "gr", V: "medium", U: "slate", A: "ee", T: "ol", S: "or", B: "ra", C: "lateg", D: "ights", R: "in", Q: "turquois", E: "hi", P: "ro", O: "al", N: "le", M: "de", L: "yello", F: "en", K: "ch", G: "arks", H: "ea", I: "ightg", J: "wh" },
    f1 = { OiceXe: "f0f8ff", antiquewEte: "faebd7", aqua: "ffff", aquamarRe: "7fffd4", azuY: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "0", blanKedOmond: "ffebcd", Xe: "ff", XeviTet: "8a2be2", bPwn: "a52a2a", burlywood: "deb887", caMtXe: "5f9ea0", KartYuse: "7fff00", KocTate: "d2691e", cSO: "ff7f50", cSnflowerXe: "6495ed", cSnsilk: "fff8dc", crimson: "dc143c", cyan: "ffff", xXe: "8b", xcyan: "8b8b", xgTMnPd: "b8860b", xWay: "a9a9a9", xgYF: "6400", xgYy: "a9a9a9", xkhaki: "bdb76b", xmagFta: "8b008b", xTivegYF: "556b2f", xSange: "ff8c00", xScEd: "9932cc", xYd: "8b0000", xsOmon: "e9967a", xsHgYF: "8fbc8f", xUXe: "483d8b", xUWay: "2f4f4f", xUgYy: "2f4f4f", xQe: "ced1", xviTet: "9400d3", dAppRk: "ff1493", dApskyXe: "bfff", dimWay: "696969", dimgYy: "696969", dodgerXe: "1e90ff", fiYbrick: "b22222", flSOwEte: "fffaf0", foYstWAn: "228b22", fuKsia: "ff00ff", gaRsbSo: "dcdcdc", ghostwEte: "f8f8ff", gTd: "ffd700", gTMnPd: "daa520", Way: "808080", gYF: "8000", gYFLw: "adff2f", gYy: "808080", honeyMw: "f0fff0", hotpRk: "ff69b4", RdianYd: "cd5c5c", Rdigo: "4b0082", ivSy: "fffff0", khaki: "f0e68c", lavFMr: "e6e6fa", lavFMrXsh: "fff0f5", lawngYF: "7cfc00", NmoncEffon: "fffacd", ZXe: "add8e6", ZcSO: "f08080", Zcyan: "e0ffff", ZgTMnPdLw: "fafad2", ZWay: "d3d3d3", ZgYF: "90ee90", ZgYy: "d3d3d3", ZpRk: "ffb6c1", ZsOmon: "ffa07a", ZsHgYF: "20b2aa", ZskyXe: "87cefa", ZUWay: "778899", ZUgYy: "778899", ZstAlXe: "b0c4de", ZLw: "ffffe0", lime: "ff00", limegYF: "32cd32", lRF: "faf0e6", magFta: "ff00ff", maPon: "800000", VaquamarRe: "66cdaa", VXe: "cd", VScEd: "ba55d3", VpurpN: "9370db", VsHgYF: "3cb371", VUXe: "7b68ee", VsprRggYF: "fa9a", VQe: "48d1cc", VviTetYd: "c71585", midnightXe: "191970", mRtcYam: "f5fffa", mistyPse: "ffe4e1", moccasR: "ffe4b5", navajowEte: "ffdead", navy: "80", Tdlace: "fdf5e6", Tive: "808000", TivedBb: "6b8e23", Sange: "ffa500", SangeYd: "ff4500", ScEd: "da70d6", pOegTMnPd: "eee8aa", pOegYF: "98fb98", pOeQe: "afeeee", pOeviTetYd: "db7093", papayawEp: "ffefd5", pHKpuff: "ffdab9", peru: "cd853f", pRk: "ffc0cb", plum: "dda0dd", powMrXe: "b0e0e6", purpN: "800080", YbeccapurpN: "663399", Yd: "ff0000", Psybrown: "bc8f8f", PyOXe: "4169e1", saddNbPwn: "8b4513", sOmon: "fa8072", sandybPwn: "f4a460", sHgYF: "2e8b57", sHshell: "fff5ee", siFna: "a0522d", silver: "c0c0c0", skyXe: "87ceeb", UXe: "6a5acd", UWay: "708090", UgYy: "708090", snow: "fffafa", sprRggYF: "ff7f", stAlXe: "4682b4", tan: "d2b48c", teO: "8080", tEstN: "d8bfd8", tomato: "ff6347", Qe: "40e0d0", viTet: "ee82ee", JHt: "f5deb3", wEte: "ffffff", wEtesmoke: "f5f5f5", Lw: "ffff00", LwgYF: "9acd32" };

function QC() {
    const e = {},
        t = Object.keys(f1),
        n = Object.keys(c1);
    let r, i, o, s, a;
    for (r = 0; r < t.length; r++) {
        for (s = a = t[r], i = 0; i < n.length; i++) o = n[i], a = a.replace(o, c1[o]);
        o = parseInt(f1[s], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255]
    }
    return e
}
let Uu;

function ZC(e) { Uu || (Uu = QC(), Uu.transparent = [0, 0, 0, 0]); const t = Uu[e.toLowerCase()]; return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 } }

function Gu(e, t, n) {
    if (e) {
        let r = Qh(e);
        r[t] = Math.max(0, Math.min(r[t] + r[t] * n, t === 0 ? 360 : 1)), r = Jh(r), e.r = r[0], e.g = r[1], e.b = r[2]
    }
}

function d1(e, t) { return e && Object.assign(t || {}, e) }

function h1(e) { var t = { r: 0, g: 0, b: 0, a: 255 }; return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = Ra(e[3]))) : (t = d1(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = Ra(t.a)), t }

function JC(e) { return e.charAt(0) === "r" ? WC(e) : XC(e) }
class Xu {
    constructor(t) {
        if (t instanceof Xu) return t;
        const n = typeof t;
        let r;
        n === "object" ? r = h1(t) : n === "string" && (r = jC(t) || ZC(t) || JC(t)), this._rgb = r, this._valid = !!r
    }
    get valid() { return this._valid }
    get rgb() { var t = d1(this._rgb); return t && (t.a = Kh(t.a)), t }
    set rgb(t) { this._rgb = h1(t) }
    rgbString() { return this._valid ? HC(this._rgb) : this._rgb }
    hexString() { return this._valid ? zC(this._rgb) : this._rgb }
    hslString() { return this._valid ? KC(this._rgb) : this._rgb }
    mix(t, n) {
        const r = this;
        if (t) {
            const i = r.rgb,
                o = t.rgb;
            let s;
            const a = n === s ? .5 : n,
                l = 2 * a - 1,
                u = i.a - o.a,
                c = ((l * u == -1 ? l : (l + u) / (1 + l * u)) + 1) / 2;
            s = 1 - c, i.r = 255 & c * i.r + s * o.r + .5, i.g = 255 & c * i.g + s * o.g + .5, i.b = 255 & c * i.b + s * o.b + .5, i.a = a * i.a + (1 - a) * o.a, r.rgb = i
        }
        return r
    }
    clone() { return new Xu(this.rgb) }
    alpha(t) { return this._rgb.a = Ra(t), this }
    clearer(t) { const n = this._rgb; return n.a *= 1 - t, this }
    greyscale() {
        const t = this._rgb,
            n = Da(t.r * .3 + t.g * .59 + t.b * .11);
        return t.r = t.g = t.b = n, this
    }
    opaquer(t) { const n = this._rgb; return n.a *= 1 + t, this }
    negate() { const t = this._rgb; return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this }
    lighten(t) { return Gu(this._rgb, 2, t), this }
    darken(t) { return Gu(this._rgb, 2, -t), this }
    saturate(t) { return Gu(this._rgb, 1, t), this }
    desaturate(t) { return Gu(this._rgb, 1, -t), this }
    rotate(t) { return qC(this._rgb, t), this }
}

function p1(e) { return new Xu(e) }
const m1 = e => e instanceof CanvasGradient || e instanceof CanvasPattern;

function g1(e) { return m1(e) ? e : p1(e) }

function ep(e) { return m1(e) ? e : p1(e).saturate(.5).darken(.1).hexString() }
const Wi = Object.create(null),
    tp = Object.create(null);

function Ta(e, t) {
    if (!t) return e;
    const n = t.split(".");
    for (let r = 0, i = n.length; r < i; ++r) {
        const o = n[r];
        e = e[o] || (e[o] = Object.create(null))
    }
    return e
}

function np(e, t, n) { return typeof t == "string" ? _a(Ta(e, t), n) : _a(Ta(e, ""), t) }
class eM {
    constructor(t) { this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = n => n.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }, this.hover = {}, this.hoverBackgroundColor = (n, r) => ep(r.backgroundColor), this.hoverBorderColor = (n, r) => ep(r.borderColor), this.hoverColor = (n, r) => ep(r.color), this.indexAxis = "x", this.interaction = { mode: "nearest", intersect: !0 }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t) }
    set(t, n) { return np(this, t, n) }
    get(t) { return Ta(this, t) }
    describe(t, n) { return np(tp, t, n) }
    override(t, n) { return np(Wi, t, n) }
    route(t, n, r, i) {
        const o = Ta(this, t),
            s = Ta(this, r),
            a = "_" + n;
        Object.defineProperties(o, {
            [a]: { value: o[n], writable: !0 },
            [n]: {
                enumerable: !0,
                get() {
                    const l = this[a],
                        u = s[i];
                    return He(l) ? Object.assign({}, u, l) : Fe(l, u)
                },
                set(l) { this[a] = l }
            }
        })
    }
}
var Ye = new eM({ _scriptable: e => !e.startsWith("on"), _indexable: e => e !== "events", hover: { _fallback: "interaction" }, interaction: { _scriptable: !1, _indexable: !1 } });

function tM(e) { return !e || Je(e.size) || Je(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family }

function qu(e, t, n, r, i) { let o = t[i]; return o || (o = t[i] = e.measureText(i).width, n.push(i)), o > r && (r = o), r }

function nM(e, t, n, r) {
    r = r || {};
    let i = r.data = r.data || {},
        o = r.garbageCollect = r.garbageCollect || [];
    r.font !== t && (i = r.data = {}, o = r.garbageCollect = [], r.font = t), e.save(), e.font = t;
    let s = 0;
    const a = n.length;
    let l, u, c, d, h;
    for (l = 0; l < a; l++)
        if (d = n[l], d != null && ct(d) !== !0) s = qu(e, i, o, s, d);
        else if (ct(d))
        for (u = 0, c = d.length; u < c; u++) h = d[u], h != null && !ct(h) && (s = qu(e, i, o, s, h));
    e.restore();
    const y = o.length / 2;
    if (y > n.length) {
        for (l = 0; l < y; l++) delete i[o[l]];
        o.splice(0, y)
    }
    return s
}

function Hi(e, t, n) {
    const r = e.currentDevicePixelRatio,
        i = n !== 0 ? Math.max(n / 2, .5) : 0;
    return Math.round((t - i) * r) / r + i
}

function y1(e, t) { t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore() }

function Ku(e, t, n, r) {
    let i, o, s, a, l;
    const u = t.pointStyle,
        c = t.rotation,
        d = t.radius;
    let h = (c || 0) * PC;
    if (u && typeof u == "object" && (i = u.toString(), i === "[object HTMLImageElement]" || i === "[object HTMLCanvasElement]")) { e.save(), e.translate(n, r), e.rotate(h), e.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), e.restore(); return }
    if (!(isNaN(d) || d <= 0)) {
        switch (e.beginPath(), u) {
            default: e.arc(n, r, d, 0, it),
            e.closePath();
            break;
            case "triangle":
                    e.moveTo(n + Math.sin(h) * d, r - Math.cos(h) * d),
                h += e1,
                e.lineTo(n + Math.sin(h) * d, r - Math.cos(h) * d),
                h += e1,
                e.lineTo(n + Math.sin(h) * d, r - Math.cos(h) * d),
                e.closePath();
                break;
            case "rectRounded":
                    l = d * .516,
                a = d - l,
                o = Math.cos(h + ka) * a,
                s = Math.sin(h + ka) * a,
                e.arc(n - o, r - s, l, h - wt, h - xt),
                e.arc(n + s, r - o, l, h - xt, h),
                e.arc(n + o, r + s, l, h, h + xt),
                e.arc(n - s, r + o, l, h + xt, h + wt),
                e.closePath();
                break;
            case "rect":
                    if (!c) { a = Math.SQRT1_2 * d, e.rect(n - a, r - a, 2 * a, 2 * a); break }h += ka;
            case "rectRot":
                    o = Math.cos(h) * d,
                s = Math.sin(h) * d,
                e.moveTo(n - o, r - s),
                e.lineTo(n + s, r - o),
                e.lineTo(n + o, r + s),
                e.lineTo(n - s, r + o),
                e.closePath();
                break;
            case "crossRot":
                    h += ka;
            case "cross":
                    o = Math.cos(h) * d,
                s = Math.sin(h) * d,
                e.moveTo(n - o, r - s),
                e.lineTo(n + o, r + s),
                e.moveTo(n + s, r - o),
                e.lineTo(n - s, r + o);
                break;
            case "star":
                    o = Math.cos(h) * d,
                s = Math.sin(h) * d,
                e.moveTo(n - o, r - s),
                e.lineTo(n + o, r + s),
                e.moveTo(n + s, r - o),
                e.lineTo(n - s, r + o),
                h += ka,
                o = Math.cos(h) * d,
                s = Math.sin(h) * d,
                e.moveTo(n - o, r - s),
                e.lineTo(n + o, r + s),
                e.moveTo(n + s, r - o),
                e.lineTo(n - s, r + o);
                break;
            case "line":
                    o = Math.cos(h) * d,
                s = Math.sin(h) * d,
                e.moveTo(n - o, r - s),
                e.lineTo(n + o, r + s);
                break;
            case "dash":
                    e.moveTo(n, r),
                e.lineTo(n + Math.cos(h) * d, r + Math.sin(h) * d);
                break
        }
        e.fill(), t.borderWidth > 0 && e.stroke()
    }
}

function Yi(e, t, n) { return n = n || .5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n }

function Qu(e, t) { e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip() }

function Zu(e) { e.restore() }

function rM(e, t, n, r, i) {
    if (!t) return e.lineTo(n.x, n.y);
    if (i === "middle") {
        const o = (t.x + n.x) / 2;
        e.lineTo(o, t.y), e.lineTo(o, n.y)
    } else i === "after" != !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
    e.lineTo(n.x, n.y)
}

function iM(e, t, n, r) {
    if (!t) return e.lineTo(n.x, n.y);
    e.bezierCurveTo(r ? t.cp1x : t.cp2x, r ? t.cp1y : t.cp2y, r ? n.cp2x : n.cp1x, r ? n.cp2y : n.cp1y, n.x, n.y)
}

function Wo(e, t, n, r, i, o = {}) {
    const s = ct(t) ? t : [t],
        a = o.strokeWidth > 0 && o.strokeColor !== "";
    let l, u;
    for (e.save(), e.font = i.string, oM(e, o), l = 0; l < s.length; ++l) u = s[l], a && (o.strokeColor && (e.strokeStyle = o.strokeColor), Je(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(u, n, r, o.maxWidth)), e.fillText(u, n, r, o.maxWidth), sM(e, n, r, u, o), r += i.lineHeight;
    e.restore()
}

function oM(e, t) { t.translation && e.translate(t.translation[0], t.translation[1]), Je(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline) }

function sM(e, t, n, r, i) {
    if (i.strikethrough || i.underline) {
        const o = e.measureText(r),
            s = t - o.actualBoundingBoxLeft,
            a = t + o.actualBoundingBoxRight,
            l = n - o.actualBoundingBoxAscent,
            u = n + o.actualBoundingBoxDescent,
            c = i.strikethrough ? (l + u) / 2 : u;
        e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(s, c), e.lineTo(a, c), e.stroke()
    }
}

function Ju(e, t) {
    const { x: n, y: r, w: i, h: o, radius: s } = t;
    e.arc(n + s.topLeft, r + s.topLeft, s.topLeft, -xt, wt, !0), e.lineTo(n, r + o - s.bottomLeft), e.arc(n + s.bottomLeft, r + o - s.bottomLeft, s.bottomLeft, wt, xt, !0), e.lineTo(n + i - s.bottomRight, r + o), e.arc(n + i - s.bottomRight, r + o - s.bottomRight, s.bottomRight, xt, 0, !0), e.lineTo(n + i, r + s.topRight), e.arc(n + i - s.topRight, r + s.topRight, s.topRight, 0, -xt, !0), e.lineTo(n + s.topLeft, r)
}
const aM = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
    lM = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

function uM(e, t) {
    const n = ("" + e).match(aM);
    if (!n || n[1] === "normal") return t * 1.2;
    switch (e = +n[2], n[3]) {
        case "px":
            return e;
        case "%":
            e /= 100;
            break
    }
    return t * e
}
const cM = e => +e || 0;

function rp(e, t) {
    const n = {},
        r = He(t),
        i = r ? Object.keys(t) : t,
        o = He(e) ? r ? s => Fe(e[s], e[t[s]]) : s => e[s] : () => e;
    for (const s of i) n[s] = cM(o(s));
    return n
}

function v1(e) { return rp(e, { top: "y", right: "x", bottom: "y", left: "x" }) }

function Ho(e) { return rp(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]) }

function rn(e) { const t = v1(e); return t.width = t.left + t.right, t.height = t.top + t.bottom, t }

function Bt(e, t) {
    e = e || {}, t = t || Ye.font;
    let n = Fe(e.size, t.size);
    typeof n == "string" && (n = parseInt(n, 10));
    let r = Fe(e.style, t.style);
    r && !("" + r).match(lM) && (console.warn('Invalid font style specified: "' + r + '"'), r = "");
    const i = { family: Fe(e.family, t.family), lineHeight: uM(Fe(e.lineHeight, t.lineHeight), n), size: n, style: r, weight: Fe(e.weight, t.weight), string: "" };
    return i.string = tM(i), i
}

function ec(e, t, n, r) {
    let i = !0,
        o, s, a;
    for (o = 0, s = e.length; o < s; ++o)
        if (a = e[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), i = !1), n !== void 0 && ct(a) && (a = a[n % a.length], i = !1), a !== void 0)) return r && !i && (r.cacheable = !1), a
}

function fM(e, t, n) { const { min: r, max: i } = e, o = Kv(t, (i - r) / 2), s = (a, l) => n && a === 0 ? 0 : a + l; return { min: s(r, -Math.abs(o)), max: s(i, o) } }

function ai(e, t) { return Object.assign(Object.create(e), t) }

function ip(e, t, n) {
    n = n || (s => e[s] < t);
    let r = e.length - 1,
        i = 0,
        o;
    for (; r - i > 1;) o = i + r >> 1, n(o) ? i = o : r = o;
    return { lo: i, hi: r }
}
const $i = (e, t, n) => ip(e, n, r => e[r][t] < n),
    dM = (e, t, n) => ip(e, n, r => e[r][t] >= n);

function hM(e, t, n) {
    let r = 0,
        i = e.length;
    for (; r < i && e[r] < t;) r++;
    for (; i > r && e[i - 1] > n;) i--;
    return r > 0 || i < e.length ? e.slice(r, i) : e
}
const w1 = ["push", "pop", "shift", "splice", "unshift"];

function pM(e, t) {
    if (e._chartjs) { e._chartjs.listeners.push(t); return }
    Object.defineProperty(e, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [t] } }), w1.forEach(n => {
        const r = "_onData" + Uh(n),
            i = e[n];
        Object.defineProperty(e, n, { configurable: !0, enumerable: !1, value(...o) { const s = i.apply(this, o); return e._chartjs.listeners.forEach(a => { typeof a[r] == "function" && a[r](...o) }), s } })
    })
}

function x1(e, t) {
    const n = e._chartjs;
    if (!n) return;
    const r = n.listeners,
        i = r.indexOf(t);
    i !== -1 && r.splice(i, 1), !(r.length > 0) && (w1.forEach(o => { delete e[o] }), delete e._chartjs)
}

function b1(e) { const t = new Set; let n, r; for (n = 0, r = e.length; n < r; ++n) t.add(e[n]); return t.size === r ? e : Array.from(t) }

function op(e, t = [""], n = e, r, i = () => e[0]) {
    Fn(r) || (r = M1("_fallback", e));
    const o = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: e,
        _rootScopes: n,
        _fallback: r,
        _getTarget: i,
        override: s => op([s, ...e], t, n, r)
    };
    return new Proxy(o, { deleteProperty(s, a) { return delete s[a], delete s._keys, delete e[0][a], !0 }, get(s, a) { return S1(s, a, () => _M(a, t, e, s)) }, getOwnPropertyDescriptor(s, a) { return Reflect.getOwnPropertyDescriptor(s._scopes[0], a) }, getPrototypeOf() { return Reflect.getPrototypeOf(e[0]) }, has(s, a) { return E1(s).includes(a) }, ownKeys(s) { return E1(s) }, set(s, a, l) { const u = s._storage || (s._storage = i()); return s[a] = u[a] = l, delete s._keys, !0 } })
}

function Yo(e, t, n, r) { const i = { _cacheable: !1, _proxy: e, _context: t, _subProxy: n, _stack: new Set, _descriptors: _1(e, r), setContext: o => Yo(e, o, n, r), override: o => Yo(e.override(o), t, n, r) }; return new Proxy(i, { deleteProperty(o, s) { return delete o[s], delete e[s], !0 }, get(o, s, a) { return S1(o, s, () => gM(o, s, a)) }, getOwnPropertyDescriptor(o, s) { return o._descriptors.allKeys ? Reflect.has(e, s) ? { enumerable: !0, configurable: !0 } : void 0 : Reflect.getOwnPropertyDescriptor(e, s) }, getPrototypeOf() { return Reflect.getPrototypeOf(e) }, has(o, s) { return Reflect.has(e, s) }, ownKeys() { return Reflect.ownKeys(e) }, set(o, s, a) { return e[s] = a, delete o[s], !0 } }) }

function _1(e, t = { scriptable: !0, indexable: !0 }) { const { _scriptable: n = t.scriptable, _indexable: r = t.indexable, _allKeys: i = t.allKeys } = e; return { allKeys: i, scriptable: n, indexable: r, isScriptable: si(n) ? n : () => n, isIndexable: si(r) ? r : () => r } }
const mM = (e, t) => e ? e + Uh(t) : t,
    sp = (e, t) => He(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);

function S1(e, t, n) { if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]; const r = n(); return e[t] = r, r }

function gM(e, t, n) { const { _proxy: r, _context: i, _subProxy: o, _descriptors: s } = e; let a = r[t]; return si(a) && s.isScriptable(t) && (a = yM(t, a, e, n)), ct(a) && a.length && (a = vM(t, a, e, s.isIndexable)), sp(t, a) && (a = Yo(a, i, o && o[t], s)), a }

function yM(e, t, n, r) { const { _proxy: i, _context: o, _subProxy: s, _stack: a } = n; if (a.has(e)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e); return a.add(e), t = t(o, s || r), a.delete(e), sp(e, t) && (t = ap(i._scopes, i, e, t)), t }

function vM(e, t, n, r) {
    const { _proxy: i, _context: o, _subProxy: s, _descriptors: a } = n;
    if (Fn(o.index) && r(e)) t = t[o.index % t.length];
    else if (He(t[0])) {
        const l = t,
            u = i._scopes.filter(c => c !== l);
        t = [];
        for (const c of l) {
            const d = ap(u, i, e, c);
            t.push(Yo(d, o, s && s[e], a))
        }
    }
    return t
}

function k1(e, t, n) { return si(e) ? e(t, n) : e }
const wM = (e, t) => e === !0 ? t : typeof e == "string" ? Bi(t, e) : void 0;

function xM(e, t, n, r, i) { for (const o of t) { const s = wM(n, o); if (s) { e.add(s); const a = k1(s._fallback, n, i); if (Fn(a) && a !== n && a !== r) return a } else if (s === !1 && Fn(r) && n !== r) return null } return !1 }

function ap(e, t, n, r) {
    const i = t._rootScopes,
        o = k1(t._fallback, n, r),
        s = [...e, ...i],
        a = new Set;
    a.add(r);
    let l = C1(a, s, n, o || n, r);
    return l === null || Fn(o) && o !== n && (l = C1(a, s, o, l, r), l === null) ? !1 : op(Array.from(a), [""], i, o, () => bM(t, n, r))
}

function C1(e, t, n, r, i) { for (; n;) n = xM(e, t, n, r, i); return n }

function bM(e, t, n) {
    const r = e._getTarget();
    t in r || (r[t] = {});
    const i = r[t];
    return ct(i) && He(n) ? n : i
}

function _M(e, t, n, r) {
    let i;
    for (const o of t)
        if (i = M1(mM(o, e), n), Fn(i)) return sp(e, i) ? ap(n, r, e, i) : i
}

function M1(e, t) { for (const n of t) { if (!n) continue; const r = n[e]; if (Fn(r)) return r } }

function E1(e) { let t = e._keys; return t || (t = e._keys = SM(e._scopes)), t }

function SM(e) {
    const t = new Set;
    for (const n of e)
        for (const r of Object.keys(n).filter(i => !i.startsWith("_"))) t.add(r);
    return Array.from(t)
}
const kM = Number.EPSILON || 1e-14,
    $o = (e, t) => t < e.length && !e[t].skip && e[t],
    O1 = e => e === "x" ? "y" : "x";

function CM(e, t, n, r) {
    const i = e.skip ? t : e,
        o = t,
        s = n.skip ? t : n,
        a = Xh(o, i),
        l = Xh(s, o);
    let u = a / (a + l),
        c = l / (a + l);
    u = isNaN(u) ? 0 : u, c = isNaN(c) ? 0 : c;
    const d = r * u,
        h = r * c;
    return { previous: { x: o.x - d * (s.x - i.x), y: o.y - d * (s.y - i.y) }, next: { x: o.x + h * (s.x - i.x), y: o.y + h * (s.y - i.y) } }
}

function MM(e, t, n) {
    const r = e.length;
    let i, o, s, a, l, u = $o(e, 0);
    for (let c = 0; c < r - 1; ++c)
        if (l = u, u = $o(e, c + 1), !(!l || !u)) {
            if (Ma(t[c], 0, kM)) { n[c] = n[c + 1] = 0; continue }
            i = n[c] / t[c], o = n[c + 1] / t[c], a = Math.pow(i, 2) + Math.pow(o, 2), !(a <= 9) && (s = 3 / Math.sqrt(a), n[c] = i * s * t[c], n[c + 1] = o * s * t[c])
        }
}

function EM(e, t, n = "x") {
    const r = O1(n),
        i = e.length;
    let o, s, a, l = $o(e, 0);
    for (let u = 0; u < i; ++u) {
        if (s = a, a = l, l = $o(e, u + 1), !a) continue;
        const c = a[n],
            d = a[r];
        s && (o = (c - s[n]) / 3, a[`cp1${n}`] = c - o, a[`cp1${r}`] = d - o * t[u]), l && (o = (l[n] - c) / 3, a[`cp2${n}`] = c + o, a[`cp2${r}`] = d + o * t[u])
    }
}

function OM(e, t = "x") {
    const n = O1(t),
        r = e.length,
        i = Array(r).fill(0),
        o = Array(r);
    let s, a, l, u = $o(e, 0);
    for (s = 0; s < r; ++s)
        if (a = l, l = u, u = $o(e, s + 1), !!l) {
            if (u) {
                const c = u[t] - l[t];
                i[s] = c !== 0 ? (u[n] - l[n]) / c : 0
            }
            o[s] = a ? u ? sr(i[s - 1]) !== sr(i[s]) ? 0 : (i[s - 1] + i[s]) / 2 : i[s - 1] : i[s]
        }
    MM(e, i, o), EM(e, o, t)
}

function tc(e, t, n) { return Math.max(Math.min(e, n), t) }

function DM(e, t) { let n, r, i, o, s, a = Yi(e[0], t); for (n = 0, r = e.length; n < r; ++n) s = o, o = a, a = n < r - 1 && Yi(e[n + 1], t), !!o && (i = e[n], s && (i.cp1x = tc(i.cp1x, t.left, t.right), i.cp1y = tc(i.cp1y, t.top, t.bottom)), a && (i.cp2x = tc(i.cp2x, t.left, t.right), i.cp2y = tc(i.cp2y, t.top, t.bottom))) }

function PM(e, t, n, r, i) {
    let o, s, a, l;
    if (t.spanGaps && (e = e.filter(u => !u.skip)), t.cubicInterpolationMode === "monotone") OM(e, i);
    else { let u = r ? e[e.length - 1] : e[0]; for (o = 0, s = e.length; o < s; ++o) a = e[o], l = CM(u, a, e[Math.min(o + 1, s - (r ? 0 : 1)) % s], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, u = a }
    t.capBezierPoints && DM(e, n)
}

function D1() { return typeof window != "undefined" && typeof document != "undefined" }

function lp(e) { let t = e.parentNode; return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t }

function nc(e, t, n) { let r; return typeof e == "string" ? (r = parseInt(e, 10), e.indexOf("%") !== -1 && (r = r / 100 * t.parentNode[n])) : r = e, r }
const rc = e => window.getComputedStyle(e, null);

function RM(e, t) { return rc(e).getPropertyValue(t) }
const TM = ["top", "right", "bottom", "left"];

function Vi(e, t, n) {
    const r = {};
    n = n ? "-" + n : "";
    for (let i = 0; i < 4; i++) {
        const o = TM[i];
        r[o] = parseFloat(e[t + "-" + o + n]) || 0
    }
    return r.width = r.left + r.right, r.height = r.top + r.bottom, r
}
const AM = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);

function LM(e, t) {
    const n = e.native || e,
        r = n.touches,
        i = r && r.length ? r[0] : n,
        { offsetX: o, offsetY: s } = i;
    let a = !1,
        l, u;
    if (AM(o, s, n.target)) l = o, u = s;
    else {
        const c = t.getBoundingClientRect();
        l = i.clientX - c.left, u = i.clientY - c.top, a = !0
    }
    return { x: l, y: u, box: a }
}

function P1(e, t) { const { canvas: n, currentDevicePixelRatio: r } = t, i = rc(n), o = i.boxSizing === "border-box", s = Vi(i, "padding"), a = Vi(i, "border", "width"), { x: l, y: u, box: c } = LM(e, n), d = s.left + (c && a.left), h = s.top + (c && a.top); let { width: y, height: w } = t; return o && (y -= s.width + a.width, w -= s.height + a.height), { x: Math.round((l - d) / y * n.width / r), y: Math.round((u - h) / w * n.height / r) } }

function FM(e, t, n) {
    let r, i;
    if (t === void 0 || n === void 0) {
        const o = lp(e);
        if (!o) t = e.clientWidth, n = e.clientHeight;
        else {
            const s = o.getBoundingClientRect(),
                a = rc(o),
                l = Vi(a, "border", "width"),
                u = Vi(a, "padding");
            t = s.width - u.width - l.width, n = s.height - u.height - l.height, r = nc(a.maxWidth, o, "clientWidth"), i = nc(a.maxHeight, o, "clientHeight")
        }
    }
    return { width: t, height: n, maxWidth: r || Hu, maxHeight: i || Hu }
}
const up = e => Math.round(e * 10) / 10;

function IM(e, t, n, r) {
    const i = rc(e),
        o = Vi(i, "margin"),
        s = nc(i.maxWidth, e, "clientWidth") || Hu,
        a = nc(i.maxHeight, e, "clientHeight") || Hu,
        l = FM(e, t, n);
    let { width: u, height: c } = l;
    if (i.boxSizing === "content-box") {
        const d = Vi(i, "border", "width"),
            h = Vi(i, "padding");
        u -= h.width + d.width, c -= h.height + d.height
    }
    return u = Math.max(0, u - o.width), c = Math.max(0, r ? Math.floor(u / r) : c - o.height), u = up(Math.min(u, s, l.maxWidth)), c = up(Math.min(c, a, l.maxHeight)), u && !c && (c = up(u / 2)), { width: u, height: c }
}

function R1(e, t, n) {
    const r = t || 1,
        i = Math.floor(e.height * r),
        o = Math.floor(e.width * r);
    e.height = i / r, e.width = o / r;
    const s = e.canvas;
    return s.style && (n || !s.style.height && !s.style.width) && (s.style.height = `${e.height}px`, s.style.width = `${e.width}px`), e.currentDevicePixelRatio !== r || s.height !== i || s.width !== o ? (e.currentDevicePixelRatio = r, s.height = i, s.width = o, e.ctx.setTransform(r, 0, 0, r, 0, 0), !0) : !1
}
const NM = function() {
    let e = !1;
    try {
        const t = {get passive() { return e = !0, !1 } };
        window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
    } catch {}
    return e
}();

function T1(e, t) {
    const n = RM(e, t),
        r = n && n.match(/^(\d+)(\.\d+)?px$/);
    return r ? +r[1] : void 0
}

function Ui(e, t, n, r) { return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) } }

function jM(e, t, n, r) { return { x: e.x + n * (t.x - e.x), y: r === "middle" ? n < .5 ? e.y : t.y : r === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y } }

function zM(e, t, n, r) {
    const i = { x: e.cp2x, y: e.cp2y },
        o = { x: t.cp1x, y: t.cp1y },
        s = Ui(e, i, n),
        a = Ui(i, o, n),
        l = Ui(o, t, n),
        u = Ui(s, a, n),
        c = Ui(a, l, n);
    return Ui(u, c, n)
}
const A1 = new Map;

function BM(e, t) { t = t || {}; const n = e + JSON.stringify(t); let r = A1.get(n); return r || (r = new Intl.NumberFormat(e, t), A1.set(n, r)), r }

function Aa(e, t, n) { return BM(t, n).format(e) }
const WM = function(e, t) { return { x(n) { return e + e + t - n }, setWidth(n) { t = n }, textAlign(n) { return n === "center" ? n : n === "right" ? "left" : "right" }, xPlus(n, r) { return n - r }, leftForLtr(n, r) { return n - r } } },
    HM = function() { return { x(e) { return e }, setWidth(e) {}, textAlign(e) { return e }, xPlus(e, t) { return e + t }, leftForLtr(e, t) { return e } } };

function Vo(e, t, n) { return e ? WM(t, n) : HM() }

function L1(e, t) {
    let n, r;
    (t === "ltr" || t === "rtl") && (n = e.canvas.style, r = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", t, "important"), e.prevTextDirection = r)
}

function F1(e, t) { t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1])) }

function I1(e) { return e === "angle" ? { between: Ea, compare: AC, normalize: wn } : { between: Sr, compare: (t, n) => t - n, normalize: t => t } }

function N1({ start: e, end: t, count: n, loop: r, style: i }) { return { start: e % n, end: t % n, loop: r && (t - e + 1) % n == 0, style: i } }

function YM(e, t, n) {
    const { property: r, start: i, end: o } = n, { between: s, normalize: a } = I1(r), l = t.length;
    let { start: u, end: c, loop: d } = e, h, y;
    if (d) {
        for (u += l, c += l, h = 0, y = l; h < y && s(a(t[u % l][r]), i, o); ++h) u--, c--;
        u %= l, c %= l
    }
    return c < u && (c += l), { start: u, end: c, loop: d, style: e.style }
}

function j1(e, t, n) {
    if (!n) return [e];
    const { property: r, start: i, end: o } = n, s = t.length, { compare: a, between: l, normalize: u } = I1(r), { start: c, end: d, loop: h, style: y } = YM(e, t, n), w = [];
    let b = !1,
        g = null,
        m, S, k;
    const E = () => l(i, k, m) && a(i, k) !== 0,
        P = () => a(o, m) === 0 || l(o, k, m),
        T = () => b || E(),
        I = () => !b || P();
    for (let U = c, z = c; U <= d; ++U) S = t[U % s], !S.skip && (m = u(S[r]), m !== k && (b = l(m, i, o), g === null && T() && (g = a(m, i) === 0 ? U : z), g !== null && I() && (w.push(N1({ start: g, end: U, loop: h, count: s, style: y })), g = null), z = U, k = m));
    return g !== null && w.push(N1({ start: g, end: d, loop: h, count: s, style: y })), w
}

function z1(e, t) {
    const n = [],
        r = e.segments;
    for (let i = 0; i < r.length; i++) {
        const o = j1(r[i], e.points, t);
        o.length && n.push(...o)
    }
    return n
}

function $M(e, t, n, r) {
    let i = 0,
        o = t - 1;
    if (n && !r)
        for (; i < t && !e[i].skip;) i++;
    for (; i < t && e[i].skip;) i++;
    for (i %= t, n && (o += i); o > i && e[o % t].skip;) o--;
    return o %= t, { start: i, end: o }
}

function VM(e, t, n, r) {
    const i = e.length,
        o = [];
    let s = t,
        a = e[t],
        l;
    for (l = t + 1; l <= n; ++l) {
        const u = e[l % i];
        u.skip || u.stop ? a.skip || (r = !1, o.push({ start: t % i, end: (l - 1) % i, loop: r }), t = s = u.stop ? l : null) : (s = l, a.skip && (t = l)), a = u
    }
    return s !== null && o.push({ start: t % i, end: s % i, loop: r }), o
}

function UM(e, t) {
    const n = e.points,
        r = e.options.spanGaps,
        i = n.length;
    if (!i) return [];
    const o = !!e._loop,
        { start: s, end: a } = $M(n, i, o, r);
    if (r === !0) return B1(e, [{ start: s, end: a, loop: o }], n, t);
    const l = a < s ? a + i : a,
        u = !!e._fullLoop && s === 0 && a === i - 1;
    return B1(e, VM(n, s, l, u), n, t)
}

function B1(e, t, n, r) { return !r || !r.setContext || !n ? t : GM(e, t, n, r) }

function GM(e, t, n, r) {
    const i = e._chart.getContext(),
        o = W1(e.options),
        { _datasetIndex: s, options: { spanGaps: a } } = e,
        l = n.length,
        u = [];
    let c = o,
        d = t[0].start,
        h = d;

    function y(w, b, g, m) {
        const S = a ? -1 : 1;
        if (w !== b) {
            for (w += l; n[w % l].skip;) w -= S;
            for (; n[b % l].skip;) b += S;
            w % l != b % l && (u.push({ start: w % l, end: b % l, loop: g, style: m }), c = m, d = b % l)
        }
    }
    for (const w of t) {
        d = a ? d : w.start;
        let b = n[d % l],
            g;
        for (h = d + 1; h <= w.end; h++) {
            const m = n[h % l];
            g = W1(r.setContext(ai(i, { type: "segment", p0: b, p1: m, p0DataIndex: (h - 1) % l, p1DataIndex: h % l, datasetIndex: s }))), XM(g, c) && y(d, h - 1, w.loop, c), b = m, c = g
        }
        d < h - 1 && y(d, h - 1, w.loop, c)
    }
    return u
}

function W1(e) { return { backgroundColor: e.backgroundColor, borderCapStyle: e.borderCapStyle, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderJoinStyle: e.borderJoinStyle, borderWidth: e.borderWidth, borderColor: e.borderColor } }

function XM(e, t) { return t && JSON.stringify(e) !== JSON.stringify(t) }
/*!
 * Chart.js v3.7.0
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */
class qM {
    constructor() { this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0 }
    _notify(t, n, r, i) {
        const o = n.listeners[i],
            s = n.duration;
        o.forEach(a => a({ chart: t, initial: n.initial, numSteps: s, currentStep: Math.min(r - n.start, s) }))
    }
    _refresh() { this._request || (this._running = !0, this._request = Gv.call(window, () => { this._update(), this._request = null, this._running && this._refresh() })) }
    _update(t = Date.now()) {
        let n = 0;
        this._charts.forEach((r, i) => {
            if (!r.running || !r.items.length) return;
            const o = r.items;
            let s = o.length - 1,
                a = !1,
                l;
            for (; s >= 0; --s) l = o[s], l._active ? (l._total > r.duration && (r.duration = l._total), l.tick(t), a = !0) : (o[s] = o[o.length - 1], o.pop());
            a && (i.draw(), this._notify(i, r, t, "progress")), o.length || (r.running = !1, this._notify(i, r, t, "complete"), r.initial = !1), n += o.length
        }), this._lastDate = t, n === 0 && (this._running = !1)
    }
    _getAnims(t) { const n = this._charts; let r = n.get(t); return r || (r = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }, n.set(t, r)), r }
    listen(t, n, r) { this._getAnims(t).listeners[n].push(r) }
    add(t, n) {!n || !n.length || this._getAnims(t).items.push(...n) }
    has(t) { return this._getAnims(t).items.length > 0 }
    start(t) { const n = this._charts.get(t);!n || (n.running = !0, n.start = Date.now(), n.duration = n.items.reduce((r, i) => Math.max(r, i._duration), 0), this._refresh()) }
    running(t) { if (!this._running) return !1; const n = this._charts.get(t); return !(!n || !n.running || !n.items.length) }
    stop(t) {
        const n = this._charts.get(t);
        if (!n || !n.items.length) return;
        const r = n.items;
        let i = r.length - 1;
        for (; i >= 0; --i) r[i].cancel();
        n.items = [], this._notify(t, n, Date.now(), "complete")
    }
    remove(t) { return this._charts.delete(t) }
}
var kr = new qM;
const H1 = "transparent",
    KM = {
        boolean(e, t, n) { return n > .5 ? t : e },
        color(e, t, n) {
            const r = g1(e || H1),
                i = r.valid && g1(t || H1);
            return i && i.valid ? i.mix(r, n).hexString() : t
        },
        number(e, t, n) { return e + (t - e) * n }
    };
class QM {
    constructor(t, n, r, i) {
        const o = n[r];
        i = ec([t.to, i, o, t.from]);
        const s = ec([t.from, o, i]);
        this._active = !0, this._fn = t.fn || KM[t.type || typeof s], this._easing = Oa[t.easing] || Oa.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = n, this._prop = r, this._from = s, this._to = i, this._promises = void 0
    }
    active() { return this._active }
    update(t, n, r) {
        if (this._active) {
            this._notify(!1);
            const i = this._target[this._prop],
                o = r - this._start,
                s = this._duration - o;
            this._start = r, this._duration = Math.floor(Math.max(s, t.duration)), this._total += o, this._loop = !!t.loop, this._to = ec([t.to, n, i, t.from]), this._from = ec([t.from, i, n])
        }
    }
    cancel() { this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1)) }
    tick(t) {
        const n = t - this._start,
            r = this._duration,
            i = this._prop,
            o = this._from,
            s = this._loop,
            a = this._to;
        let l;
        if (this._active = o !== a && (s || n < r), !this._active) { this._target[i] = a, this._notify(!0); return }
        if (n < 0) { this._target[i] = o; return }
        l = n / r % 2, l = s && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[i] = this._fn(o, a, l)
    }
    wait() { const t = this._promises || (this._promises = []); return new Promise((n, r) => { t.push({ res: n, rej: r }) }) }
    _notify(t) {
        const n = t ? "res" : "rej",
            r = this._promises || [];
        for (let i = 0; i < r.length; i++) r[i][n]()
    }
}
const ZM = ["x", "y", "borderWidth", "radius", "tension"],
    JM = ["color", "borderColor", "backgroundColor"];
Ye.set("animation", { delay: void 0, duration: 1e3, easing: "easeOutQuart", fn: void 0, from: void 0, loop: void 0, to: void 0, type: void 0 });
const eE = Object.keys(Ye.animation);
Ye.describe("animation", { _fallback: !1, _indexable: !1, _scriptable: e => e !== "onProgress" && e !== "onComplete" && e !== "fn" });
Ye.set("animations", { colors: { type: "color", properties: JM }, numbers: { type: "number", properties: ZM } });
Ye.describe("animations", { _fallback: "animation" });
Ye.set("transitions", { active: { animation: { duration: 400 } }, resize: { animation: { duration: 0 } }, show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } }, hide: { animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: e => e | 0 } } } });
class Y1 {
    constructor(t, n) { this._chart = t, this._properties = new Map, this.configure(n) }
    configure(t) {
        if (!He(t)) return;
        const n = this._properties;
        Object.getOwnPropertyNames(t).forEach(r => {
            const i = t[r];
            if (!He(i)) return;
            const o = {};
            for (const s of eE) o[s] = i[s];
            (ct(i.properties) && i.properties || [r]).forEach(s => {
                (s === r || !n.has(s)) && n.set(s, o)
            })
        })
    }
    _animateOptions(t, n) {
        const r = n.options,
            i = nE(t, r);
        if (!i) return [];
        const o = this._createAnimations(i, r);
        return r.$shared && tE(t.options.$animations, r).then(() => { t.options = r }, () => {}), o
    }
    _createAnimations(t, n) {
        const r = this._properties,
            i = [],
            o = t.$animations || (t.$animations = {}),
            s = Object.keys(n),
            a = Date.now();
        let l;
        for (l = s.length - 1; l >= 0; --l) {
            const u = s[l];
            if (u.charAt(0) === "$") continue;
            if (u === "options") { i.push(...this._animateOptions(t, n)); continue }
            const c = n[u];
            let d = o[u];
            const h = r.get(u);
            if (d)
                if (h && d.active()) { d.update(h, c, a); continue } else d.cancel();
            if (!h || !h.duration) { t[u] = c; continue }
            o[u] = d = new QM(h, t, u, c), i.push(d)
        }
        return i
    }
    update(t, n) { if (this._properties.size === 0) { Object.assign(t, n); return } const r = this._createAnimations(t, n); if (r.length) return kr.add(this._chart, r), !0 }
}

function tE(e, t) {
    const n = [],
        r = Object.keys(t);
    for (let i = 0; i < r.length; i++) {
        const o = e[r[i]];
        o && o.active() && n.push(o.wait())
    }
    return Promise.all(n)
}

function nE(e, t) { if (!t) return; let n = e.options; if (!n) { e.options = t; return } return n.$shared && (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n }

function $1(e, t) {
    const n = e && e.options || {},
        r = n.reverse,
        i = n.min === void 0 ? t : 0,
        o = n.max === void 0 ? t : 0;
    return { start: r ? o : i, end: r ? i : o }
}

function rE(e, t, n) {
    if (n === !1) return !1;
    const r = $1(e, n),
        i = $1(t, n);
    return { top: i.end, right: r.end, bottom: i.start, left: r.start }
}

function iE(e) { let t, n, r, i; return He(e) ? (t = e.top, n = e.right, r = e.bottom, i = e.left) : t = n = r = i = e, { top: t, right: n, bottom: r, left: i, disabled: e === !1 } }

function V1(e, t) {
    const n = [],
        r = e._getSortedDatasetMetas(t);
    let i, o;
    for (i = 0, o = r.length; i < o; ++i) n.push(r[i].index);
    return n
}

function U1(e, t, n, r = {}) {
    const i = e.keys,
        o = r.mode === "single";
    let s, a, l, u;
    if (t !== null) {
        for (s = 0, a = i.length; s < a; ++s) {
            if (l = +i[s], l === n) { if (r.all) continue; break }
            u = e.values[l], St(u) && (o || t === 0 || sr(t) === sr(u)) && (t += u)
        }
        return t
    }
}

function oE(e) {
    const t = Object.keys(e),
        n = new Array(t.length);
    let r, i, o;
    for (r = 0, i = t.length; r < i; ++r) o = t[r], n[r] = { x: o, y: e[o] };
    return n
}

function G1(e, t) { const n = e && e.options.stacked; return n || n === void 0 && t.stack !== void 0 }

function sE(e, t, n) { return `${e.id}.${t.id}.${n.stack||n.type}` }

function aE(e) { const { min: t, max: n, minDefined: r, maxDefined: i } = e.getUserBounds(); return { min: r ? t : Number.NEGATIVE_INFINITY, max: i ? n : Number.POSITIVE_INFINITY } }

function lE(e, t, n) { const r = e[t] || (e[t] = {}); return r[n] || (r[n] = {}) }

function X1(e, t, n, r) { for (const i of t.getMatchingVisibleMetas(r).reverse()) { const o = e[i.index]; if (n && o > 0 || !n && o < 0) return i.index } return null }

function q1(e, t) {
    const { chart: n, _cachedMeta: r } = e, i = n._stacks || (n._stacks = {}), { iScale: o, vScale: s, index: a } = r, l = o.axis, u = s.axis, c = sE(o, s, r), d = t.length;
    let h;
    for (let y = 0; y < d; ++y) {
        const w = t[y],
            {
                [l]: b,
                [u]: g
            } = w,
            m = w._stacks || (w._stacks = {});
        h = m[u] = lE(i, c, b), h[a] = g, h._top = X1(h, s, !0, r.type), h._bottom = X1(h, s, !1, r.type)
    }
}

function cp(e, t) { const n = e.scales; return Object.keys(n).filter(r => n[r].axis === t).shift() }

function uE(e, t) { return ai(e, { active: !1, dataset: void 0, datasetIndex: t, index: t, mode: "default", type: "dataset" }) }

function cE(e, t, n) { return ai(e, { active: !1, dataIndex: t, parsed: void 0, raw: void 0, element: n, index: t, mode: "default", type: "data" }) }

function La(e, t) {
    const n = e.controller.index,
        r = e.vScale && e.vScale.axis;
    if (!!r) {
        t = t || e._parsed;
        for (const i of t) {
            const o = i._stacks;
            if (!o || o[r] === void 0 || o[r][n] === void 0) return;
            delete o[r][n]
        }
    }
}
const fp = e => e === "reset" || e === "none",
    K1 = (e, t) => t ? e : Object.assign({}, e),
    fE = (e, t, n) => e && !t.hidden && t._stacked && { keys: V1(n, !0), values: null };
class ar {
    constructor(t, n) { this.chart = t, this._ctx = t.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this._syncList = [], this.initialize() }
    initialize() {
        const t = this._cachedMeta;
        this.configure(), this.linkScales(), t._stacked = G1(t.vScale, t), this.addElements()
    }
    updateIndex(t) { this.index !== t && La(this._cachedMeta), this.index = t }
    linkScales() {
        const t = this.chart,
            n = this._cachedMeta,
            r = this.getDataset(),
            i = (d, h, y, w) => d === "x" ? h : d === "r" ? w : y,
            o = n.xAxisID = Fe(r.xAxisID, cp(t, "x")),
            s = n.yAxisID = Fe(r.yAxisID, cp(t, "y")),
            a = n.rAxisID = Fe(r.rAxisID, cp(t, "r")),
            l = n.indexAxis,
            u = n.iAxisID = i(l, o, s, a),
            c = n.vAxisID = i(l, s, o, a);
        n.xScale = this.getScaleForId(o), n.yScale = this.getScaleForId(s), n.rScale = this.getScaleForId(a), n.iScale = this.getScaleForId(u), n.vScale = this.getScaleForId(c)
    }
    getDataset() { return this.chart.data.datasets[this.index] }
    getMeta() { return this.chart.getDatasetMeta(this.index) }
    getScaleForId(t) { return this.chart.scales[t] }
    _getOtherScale(t) { const n = this._cachedMeta; return t === n.iScale ? n.vScale : n.iScale }
    reset() { this._update("reset") }
    _destroy() {
        const t = this._cachedMeta;
        this._data && x1(this._data, this), t._stacked && La(t)
    }
    _dataCheck() {
        const t = this.getDataset(),
            n = t.data || (t.data = []),
            r = this._data;
        if (He(n)) this._data = oE(n);
        else if (r !== n) {
            if (r) {
                x1(r, this);
                const i = this._cachedMeta;
                La(i), i._parsed = []
            }
            n && Object.isExtensible(n) && pM(n, this), this._syncList = [], this._data = n
        }
    }
    addElements() {
        const t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
    }
    buildOrUpdateElements(t) {
        const n = this._cachedMeta,
            r = this.getDataset();
        let i = !1;
        this._dataCheck();
        const o = n._stacked;
        n._stacked = G1(n.vScale, n), n.stack !== r.stack && (i = !0, La(n), n.stack = r.stack), this._resyncElements(t), (i || o !== n._stacked) && q1(this, n._parsed)
    }
    configure() {
        const t = this.chart.config,
            n = t.datasetScopeKeys(this._type),
            r = t.getOptionScopes(this.getDataset(), n, !0);
        this.options = t.createResolver(r, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
    }
    parse(t, n) {
        const { _cachedMeta: r, _data: i } = this, { iScale: o, _stacked: s } = r, a = o.axis;
        let l = t === 0 && n === i.length ? !0 : r._sorted,
            u = t > 0 && r._parsed[t - 1],
            c, d, h;
        if (this._parsing === !1) r._parsed = i, r._sorted = !0, h = i;
        else {
            ct(i[t]) ? h = this.parseArrayData(r, i, t, n) : He(i[t]) ? h = this.parseObjectData(r, i, t, n) : h = this.parsePrimitiveData(r, i, t, n);
            const y = () => d[a] === null || u && d[a] < u[a];
            for (c = 0; c < n; ++c) r._parsed[c + t] = d = h[c], l && (y() && (l = !1), u = d);
            r._sorted = l
        }
        s && q1(this, h)
    }
    parsePrimitiveData(t, n, r, i) {
        const { iScale: o, vScale: s } = t, a = o.axis, l = s.axis, u = o.getLabels(), c = o === s, d = new Array(i);
        let h, y, w;
        for (h = 0, y = i; h < y; ++h) w = h + r, d[h] = {
            [a]: c || o.parse(u[w], w),
            [l]: s.parse(n[w], w)
        };
        return d
    }
    parseArrayData(t, n, r, i) { const { xScale: o, yScale: s } = t, a = new Array(i); let l, u, c, d; for (l = 0, u = i; l < u; ++l) c = l + r, d = n[c], a[l] = { x: o.parse(d[0], c), y: s.parse(d[1], c) }; return a }
    parseObjectData(t, n, r, i) { const { xScale: o, yScale: s } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, u = new Array(i); let c, d, h, y; for (c = 0, d = i; c < d; ++c) h = c + r, y = n[h], u[c] = { x: o.parse(Bi(y, a), h), y: s.parse(Bi(y, l), h) }; return u }
    getParsed(t) { return this._cachedMeta._parsed[t] }
    getDataElement(t) { return this._cachedMeta.data[t] }
    applyStack(t, n, r) {
        const i = this.chart,
            o = this._cachedMeta,
            s = n[t.axis],
            a = { keys: V1(i, !0), values: n._stacks[t.axis] };
        return U1(a, s, o.index, { mode: r })
    }
    updateRangeFromParsed(t, n, r, i) {
        const o = r[n.axis];
        let s = o === null ? NaN : o;
        const a = i && r._stacks[n.axis];
        i && a && (i.values = a, s = U1(i, o, this._cachedMeta.index)), t.min = Math.min(t.min, s), t.max = Math.max(t.max, s)
    }
    getMinMax(t, n) {
        const r = this._cachedMeta,
            i = r._parsed,
            o = r._sorted && t === r.iScale,
            s = i.length,
            a = this._getOtherScale(t),
            l = fE(n, r, this.chart),
            u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
            { min: c, max: d } = aE(a);
        let h, y;

        function w() { y = i[h]; const b = y[a.axis]; return !St(y[t.axis]) || c > b || d < b }
        for (h = 0; h < s && !(!w() && (this.updateRangeFromParsed(u, t, y, l), o)); ++h);
        if (o) {
            for (h = s - 1; h >= 0; --h)
                if (!w()) { this.updateRangeFromParsed(u, t, y, l); break }
        }
        return u
    }
    getAllParsedValues(t) {
        const n = this._cachedMeta._parsed,
            r = [];
        let i, o, s;
        for (i = 0, o = n.length; i < o; ++i) s = n[i][t.axis], St(s) && r.push(s);
        return r
    }
    getMaxOverflow() { return !1 }
    getLabelAndValue(t) {
        const n = this._cachedMeta,
            r = n.iScale,
            i = n.vScale,
            o = this.getParsed(t);
        return { label: r ? "" + r.getLabelForValue(o[r.axis]) : "", value: i ? "" + i.getLabelForValue(o[i.axis]) : "" }
    }
    _update(t) {
        const n = this._cachedMeta;
        this.update(t || "default"), n._clip = iE(Fe(this.options.clip, rE(n.xScale, n.yScale, this.getMaxOverflow())))
    }
    update(t) {}
    draw() {
        const t = this._ctx,
            n = this.chart,
            r = this._cachedMeta,
            i = r.data || [],
            o = n.chartArea,
            s = [],
            a = this._drawStart || 0,
            l = this._drawCount || i.length - a,
            u = this.options.drawActiveElementsOnTop;
        let c;
        for (r.dataset && r.dataset.draw(t, o, a, l), c = a; c < a + l; ++c) {
            const d = i[c];
            d.hidden || (d.active && u ? s.push(d) : d.draw(t, o))
        }
        for (c = 0; c < s.length; ++c) s[c].draw(t, o)
    }
    getStyle(t, n) { const r = n ? "active" : "default"; return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(r) : this.resolveDataElementOptions(t || 0, r) }
    getContext(t, n, r) {
        const i = this.getDataset();
        let o;
        if (t >= 0 && t < this._cachedMeta.data.length) {
            const s = this._cachedMeta.data[t];
            o = s.$context || (s.$context = cE(this.getContext(), t, s)), o.parsed = this.getParsed(t), o.raw = i.data[t], o.index = o.dataIndex = t
        } else o = this.$context || (this.$context = uE(this.chart.getContext(), this.index)), o.dataset = i, o.index = o.datasetIndex = this.index;
        return o.active = !!n, o.mode = r, o
    }
    resolveDatasetElementOptions(t) { return this._resolveElementOptions(this.datasetElementType.id, t) }
    resolveDataElementOptions(t, n) { return this._resolveElementOptions(this.dataElementType.id, n, t) }
    _resolveElementOptions(t, n = "default", r) {
        const i = n === "active",
            o = this._cachedDataOpts,
            s = t + "-" + n,
            a = o[s],
            l = this.enableOptionSharing && Fn(r);
        if (a) return K1(a, l);
        const u = this.chart.config,
            c = u.datasetElementScopeKeys(this._type, t),
            d = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
            h = u.getOptionScopes(this.getDataset(), c),
            y = Object.keys(Ye.elements[t]),
            w = () => this.getContext(r, i),
            b = u.resolveNamedOptions(h, y, w, d);
        return b.$shared && (b.$shared = l, o[s] = Object.freeze(K1(b, l))), b
    }
    _resolveAnimations(t, n, r) {
        const i = this.chart,
            o = this._cachedDataOpts,
            s = `animation-${n}`,
            a = o[s];
        if (a) return a;
        let l;
        if (i.options.animation !== !1) {
            const c = this.chart.config,
                d = c.datasetAnimationScopeKeys(this._type, n),
                h = c.getOptionScopes(this.getDataset(), d);
            l = c.createResolver(h, this.getContext(t, r, n))
        }
        const u = new Y1(i, l && l.animations);
        return l && l._cacheable && (o[s] = Object.freeze(u)), u
    }
    getSharedOptions(t) { if (!!t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t)) }
    includeOptions(t, n) { return !n || fp(t) || this.chart._animationsDisabled }
    updateElement(t, n, r, i) { fp(i) ? Object.assign(t, r) : this._resolveAnimations(n, i).update(t, r) }
    updateSharedOptions(t, n, r) { t && !fp(n) && this._resolveAnimations(void 0, n).update(t, r) }
    _setStyle(t, n, r, i) {
        t.active = i;
        const o = this.getStyle(n, i);
        this._resolveAnimations(n, r, i).update(t, { options: !i && this.getSharedOptions(o) || o })
    }
    removeHoverStyle(t, n, r) { this._setStyle(t, r, "active", !1) }
    setHoverStyle(t, n, r) { this._setStyle(t, r, "active", !0) }
    _removeDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1)
    }
    _setDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0)
    }
    _resyncElements(t) {
        const n = this._data,
            r = this._cachedMeta.data;
        for (const [a, l, u] of this._syncList) this[a](l, u);
        this._syncList = [];
        const i = r.length,
            o = n.length,
            s = Math.min(o, i);
        s && this.parse(0, s), o > i ? this._insertElements(i, o - i, t) : o < i && this._removeElements(o, i - o)
    }
    _insertElements(t, n, r = !0) {
        const i = this._cachedMeta,
            o = i.data,
            s = t + n;
        let a;
        const l = u => { for (u.length += n, a = u.length - 1; a >= s; a--) u[a] = u[a - n] };
        for (l(o), a = t; a < s; ++a) o[a] = new this.dataElementType;
        this._parsing && l(i._parsed), this.parse(t, n), r && this.updateElements(o, t, n, "reset")
    }
    updateElements(t, n, r, i) {}
    _removeElements(t, n) {
        const r = this._cachedMeta;
        if (this._parsing) {
            const i = r._parsed.splice(t, n);
            r._stacked && La(r, i)
        }
        r.data.splice(t, n)
    }
    _sync(t) {
        if (this._parsing) this._syncList.push(t);
        else {
            const [n, r, i] = t;
            this[n](r, i)
        }
        this.chart._dataChanges.push([this.index, ...t])
    }
    _onDataPush() {
        const t = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - t, t])
    }
    _onDataPop() { this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]) }
    _onDataShift() { this._sync(["_removeElements", 0, 1]) }
    _onDataSplice(t, n) {
        n && this._sync(["_removeElements", t, n]);
        const r = arguments.length - 2;
        r && this._sync(["_insertElements", t, r])
    }
    _onDataUnshift() { this._sync(["_insertElements", 0, arguments.length]) }
}
ar.defaults = {};
ar.prototype.datasetElementType = null;
ar.prototype.dataElementType = null;

function dE(e, t) {
    if (!e._cache.$bar) {
        const n = e.getMatchingVisibleMetas(t);
        let r = [];
        for (let i = 0, o = n.length; i < o; i++) r = r.concat(n[i].controller.getAllParsedValues(e));
        e._cache.$bar = b1(r.sort((i, o) => i - o))
    }
    return e._cache.$bar
}

function hE(e) {
    const t = e.iScale,
        n = dE(t, e.type);
    let r = t._length,
        i, o, s, a;
    const l = () => { s === 32767 || s === -32768 || (Fn(a) && (r = Math.min(r, Math.abs(s - a) || r)), a = s) };
    for (i = 0, o = n.length; i < o; ++i) s = t.getPixelForValue(n[i]), l();
    for (a = void 0, i = 0, o = t.ticks.length; i < o; ++i) s = t.getPixelForTick(i), l();
    return r
}

function pE(e, t, n, r) { const i = n.barThickness; let o, s; return Je(i) ? (o = t.min * n.categoryPercentage, s = n.barPercentage) : (o = i * r, s = 1), { chunk: o / r, ratio: s, start: t.pixels[e] - o / 2 } }

function mE(e, t, n, r) {
    const i = t.pixels,
        o = i[e];
    let s = e > 0 ? i[e - 1] : null,
        a = e < i.length - 1 ? i[e + 1] : null;
    const l = n.categoryPercentage;
    s === null && (s = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - s);
    const u = o - (o - Math.min(s, a)) / 2 * l;
    return { chunk: Math.abs(a - s) / 2 * l / r, ratio: n.barPercentage, start: u }
}

function gE(e, t, n, r) {
    const i = n.parse(e[0], r),
        o = n.parse(e[1], r),
        s = Math.min(i, o),
        a = Math.max(i, o);
    let l = s,
        u = a;
    Math.abs(s) > Math.abs(a) && (l = a, u = s), t[n.axis] = u, t._custom = { barStart: l, barEnd: u, start: i, end: o, min: s, max: a }
}

function Q1(e, t, n, r) { return ct(e) ? gE(e, t, n, r) : t[n.axis] = n.parse(e, r), t }

function Z1(e, t, n, r) {
    const i = e.iScale,
        o = e.vScale,
        s = i.getLabels(),
        a = i === o,
        l = [];
    let u, c, d, h;
    for (u = n, c = n + r; u < c; ++u) h = t[u], d = {}, d[i.axis] = a || i.parse(s[u], u), l.push(Q1(h, d, o, u));
    return l
}

function dp(e) { return e && e.barStart !== void 0 && e.barEnd !== void 0 }

function yE(e, t, n) { return e !== 0 ? sr(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1) }

function vE(e) { let t, n, r, i, o; return e.horizontal ? (t = e.base > e.x, n = "left", r = "right") : (t = e.base < e.y, n = "bottom", r = "top"), t ? (i = "end", o = "start") : (i = "start", o = "end"), { start: n, end: r, reverse: t, top: i, bottom: o } }

function wE(e, t, n, r) {
    let i = t.borderSkipped;
    const o = {};
    if (!i) { e.borderSkipped = o; return }
    const { start: s, end: a, reverse: l, top: u, bottom: c } = vE(e);
    i === "middle" && n && (e.enableBorderRadius = !0, (n._top || 0) === r ? i = u : (n._bottom || 0) === r ? i = c : (o[J1(c, s, a, l)] = !0, i = u)), o[J1(i, s, a, l)] = !0, e.borderSkipped = o
}

function J1(e, t, n, r) { return r ? (e = xE(e, t, n), e = ew(e, n, t)) : e = ew(e, t, n), e }

function xE(e, t, n) { return e === t ? n : e === n ? t : e }

function ew(e, t, n) { return e === "start" ? t : e === "end" ? n : e }

function bE(e, { inflateAmount: t }, n) { e.inflateAmount = t === "auto" ? n === 1 ? .33 : 0 : t }
class hp extends ar {
    parsePrimitiveData(t, n, r, i) { return Z1(t, n, r, i) }
    parseArrayData(t, n, r, i) { return Z1(t, n, r, i) }
    parseObjectData(t, n, r, i) { const { iScale: o, vScale: s } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, u = o.axis === "x" ? a : l, c = s.axis === "x" ? a : l, d = []; let h, y, w, b; for (h = r, y = r + i; h < y; ++h) b = n[h], w = {}, w[o.axis] = o.parse(Bi(b, u), h), d.push(Q1(Bi(b, c), w, s, h)); return d }
    updateRangeFromParsed(t, n, r, i) {
        super.updateRangeFromParsed(t, n, r, i);
        const o = r._custom;
        o && n === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max))
    }
    getMaxOverflow() { return 0 }
    getLabelAndValue(t) {
        const n = this._cachedMeta,
            { iScale: r, vScale: i } = n,
            o = this.getParsed(t),
            s = o._custom,
            a = dp(s) ? "[" + s.start + ", " + s.end + "]" : "" + i.getLabelForValue(o[i.axis]);
        return { label: "" + r.getLabelForValue(o[r.axis]), value: a }
    }
    initialize() {
        this.enableOptionSharing = !0, super.initialize();
        const t = this._cachedMeta;
        t.stack = this.getDataset().stack
    }
    update(t) {
        const n = this._cachedMeta;
        this.updateElements(n.data, 0, n.data.length, t)
    }
    updateElements(t, n, r, i) {
        const o = i === "reset",
            { index: s, _cachedMeta: { vScale: a } } = this,
            l = a.getBasePixel(),
            u = a.isHorizontal(),
            c = this._getRuler(),
            d = this.resolveDataElementOptions(n, i),
            h = this.getSharedOptions(d),
            y = this.includeOptions(i, h);
        this.updateSharedOptions(h, i, d);
        for (let w = n; w < n + r; w++) {
            const b = this.getParsed(w),
                g = o || Je(b[a.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(w),
                m = this._calculateBarIndexPixels(w, c),
                S = (b._stacks || {})[a.axis],
                k = { horizontal: u, base: g.base, enableBorderRadius: !S || dp(b._custom) || s === S._top || s === S._bottom, x: u ? g.head : m.center, y: u ? m.center : g.head, height: u ? m.size : Math.abs(g.size), width: u ? Math.abs(g.size) : m.size };
            y && (k.options = h || this.resolveDataElementOptions(w, t[w].active ? "active" : i));
            const E = k.options || t[w].options;
            wE(k, E, S, s), bE(k, E, c.ratio), this.updateElement(t[w], w, k, i)
        }
    }
    _getStacks(t, n) {
        const i = this._cachedMeta.iScale,
            o = i.getMatchingVisibleMetas(this._type),
            s = i.options.stacked,
            a = o.length,
            l = [];
        let u, c;
        for (u = 0; u < a; ++u)
            if (c = o[u], !!c.controller.options.grouped) { if (typeof n != "undefined") { const d = c.controller.getParsed(n)[c.controller._cachedMeta.vScale.axis]; if (Je(d) || isNaN(d)) continue } if ((s === !1 || l.indexOf(c.stack) === -1 || s === void 0 && c.stack === void 0) && l.push(c.stack), c.index === t) break }
        return l.length || l.push(void 0), l
    }
    _getStackCount(t) { return this._getStacks(void 0, t).length }
    _getStackIndex(t, n, r) {
        const i = this._getStacks(t, r),
            o = n !== void 0 ? i.indexOf(n) : -1;
        return o === -1 ? i.length - 1 : o
    }
    _getRuler() {
        const t = this.options,
            n = this._cachedMeta,
            r = n.iScale,
            i = [];
        let o, s;
        for (o = 0, s = n.data.length; o < s; ++o) i.push(r.getPixelForValue(this.getParsed(o)[r.axis], o));
        const a = t.barThickness;
        return { min: a || hE(n), pixels: i, start: r._startPixel, end: r._endPixel, stackCount: this._getStackCount(), scale: r, grouped: t.grouped, ratio: a ? 1 : t.categoryPercentage * t.barPercentage }
    }
    _calculateBarValuePixels(t) {
        const { _cachedMeta: { vScale: n, _stacked: r }, options: { base: i, minBarLength: o } } = this, s = i || 0, a = this.getParsed(t), l = a._custom, u = dp(l);
        let c = a[n.axis],
            d = 0,
            h = r ? this.applyStack(n, a, r) : c,
            y, w;
        h !== c && (d = h - c, h = c), u && (c = l.barStart, h = l.barEnd - l.barStart, c !== 0 && sr(c) !== sr(l.barEnd) && (d = 0), d += c);
        const b = !Je(i) && !u ? i : d;
        let g = n.getPixelForValue(b);
        if (this.chart.getDataVisibility(t) ? y = n.getPixelForValue(d + h) : y = g, w = y - g, Math.abs(w) < o && (w = yE(w, n, s) * o, c === s && (g -= w / 2), y = g + w), g === n.getPixelForValue(s)) {
            const m = sr(w) * n.getLineWidthForValue(s) / 2;
            g += m, w -= m
        }
        return { size: w, base: g, head: y, center: y + w / 2 }
    }
    _calculateBarIndexPixels(t, n) {
        const r = n.scale,
            i = this.options,
            o = i.skipNull,
            s = Fe(i.maxBarThickness, 1 / 0);
        let a, l;
        if (n.grouped) {
            const u = o ? this._getStackCount(t) : n.stackCount,
                c = i.barThickness === "flex" ? mE(t, n, i, u) : pE(t, n, i, u),
                d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
            a = c.start + c.chunk * d + c.chunk / 2, l = Math.min(s, c.chunk * c.ratio)
        } else a = r.getPixelForValue(this.getParsed(t)[r.axis], t), l = Math.min(s, n.min * n.ratio);
        return { base: a - l / 2, head: a + l / 2, center: a, size: l }
    }
    draw() {
        const t = this._cachedMeta,
            n = t.vScale,
            r = t.data,
            i = r.length;
        let o = 0;
        for (; o < i; ++o) this.getParsed(o)[n.axis] !== null && r[o].draw(this._ctx)
    }
}
hp.id = "bar";
hp.defaults = { datasetElementType: !1, dataElementType: "bar", categoryPercentage: .8, barPercentage: .9, grouped: !0, animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } } };
hp.overrides = { scales: { _index_: { type: "category", offset: !0, grid: { offset: !0 } }, _value_: { type: "linear", beginAtZero: !0 } } };
class pp extends ar {
    initialize() { this.enableOptionSharing = !0, super.initialize() }
    parsePrimitiveData(t, n, r, i) { const o = super.parsePrimitiveData(t, n, r, i); for (let s = 0; s < o.length; s++) o[s]._custom = this.resolveDataElementOptions(s + r).radius; return o }
    parseArrayData(t, n, r, i) {
        const o = super.parseArrayData(t, n, r, i);
        for (let s = 0; s < o.length; s++) {
            const a = n[r + s];
            o[s]._custom = Fe(a[2], this.resolveDataElementOptions(s + r).radius)
        }
        return o
    }
    parseObjectData(t, n, r, i) {
        const o = super.parseObjectData(t, n, r, i);
        for (let s = 0; s < o.length; s++) {
            const a = n[r + s];
            o[s]._custom = Fe(a && a.r && +a.r, this.resolveDataElementOptions(s + r).radius)
        }
        return o
    }
    getMaxOverflow() { const t = this._cachedMeta.data; let n = 0; for (let r = t.length - 1; r >= 0; --r) n = Math.max(n, t[r].size(this.resolveDataElementOptions(r)) / 2); return n > 0 && n }
    getLabelAndValue(t) {
        const n = this._cachedMeta,
            { xScale: r, yScale: i } = n,
            o = this.getParsed(t),
            s = r.getLabelForValue(o.x),
            a = i.getLabelForValue(o.y),
            l = o._custom;
        return { label: n.label, value: "(" + s + ", " + a + (l ? ", " + l : "") + ")" }
    }
    update(t) {
        const n = this._cachedMeta.data;
        this.updateElements(n, 0, n.length, t)
    }
    updateElements(t, n, r, i) {
        const o = i === "reset",
            { iScale: s, vScale: a } = this._cachedMeta,
            l = this.resolveDataElementOptions(n, i),
            u = this.getSharedOptions(l),
            c = this.includeOptions(i, u),
            d = s.axis,
            h = a.axis;
        for (let y = n; y < n + r; y++) {
            const w = t[y],
                b = !o && this.getParsed(y),
                g = {},
                m = g[d] = o ? s.getPixelForDecimal(.5) : s.getPixelForValue(b[d]),
                S = g[h] = o ? a.getBasePixel() : a.getPixelForValue(b[h]);
            g.skip = isNaN(m) || isNaN(S), c && (g.options = this.resolveDataElementOptions(y, w.active ? "active" : i), o && (g.options.radius = 0)), this.updateElement(w, y, g, i)
        }
        this.updateSharedOptions(u, i, l)
    }
    resolveDataElementOptions(t, n) {
        const r = this.getParsed(t);
        let i = super.resolveDataElementOptions(t, n);
        i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
        const o = i.radius;
        return n !== "active" && (i.radius = 0), i.radius += Fe(r && r._custom, o), i
    }
}
pp.id = "bubble";
pp.defaults = { datasetElementType: !1, dataElementType: "point", animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } } };
pp.overrides = { scales: { x: { type: "linear" }, y: { type: "linear" } }, plugins: { tooltip: { callbacks: { title() { return "" } } } } };

function _E(e, t, n) {
    let r = 1,
        i = 1,
        o = 0,
        s = 0;
    if (t < it) {
        const a = e,
            l = a + t,
            u = Math.cos(a),
            c = Math.sin(a),
            d = Math.cos(l),
            h = Math.sin(l),
            y = (k, E, P) => Ea(k, a, l, !0) ? 1 : Math.max(E, E * n, P, P * n),
            w = (k, E, P) => Ea(k, a, l, !0) ? -1 : Math.min(E, E * n, P, P * n),
            b = y(0, u, d),
            g = y(xt, c, h),
            m = w(wt, u, d),
            S = w(wt + xt, c, h);
        r = (b - m) / 2, i = (g - S) / 2, o = -(b + m) / 2, s = -(g + S) / 2
    }
    return { ratioX: r, ratioY: i, offsetX: o, offsetY: s }
}
class Fa extends ar {
    constructor(t, n) {
        super(t, n);
        this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
    }
    linkScales() {}
    parse(t, n) {
        const r = this.getDataset().data,
            i = this._cachedMeta;
        if (this._parsing === !1) i._parsed = r;
        else {
            let o = l => +r[l];
            if (He(r[t])) {
                const { key: l = "value" } = this._parsing;
                o = u => +Bi(r[u], l)
            }
            let s, a;
            for (s = t, a = t + n; s < a; ++s) i._parsed[s] = o(s)
        }
    }
    _getRotation() { return Gn(this.options.rotation - 90) }
    _getCircumference() { return Gn(this.options.circumference) }
    _getRotationExtents() {
        let t = it,
            n = -it;
        for (let r = 0; r < this.chart.data.datasets.length; ++r)
            if (this.chart.isDatasetVisible(r)) {
                const i = this.chart.getDatasetMeta(r).controller,
                    o = i._getRotation(),
                    s = i._getCircumference();
                t = Math.min(t, o), n = Math.max(n, o + s)
            }
        return { rotation: t, circumference: n - t }
    }
    update(t) {
        const n = this.chart,
            { chartArea: r } = n,
            i = this._cachedMeta,
            o = i.data,
            s = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
            a = Math.max((Math.min(r.width, r.height) - s) / 2, 0),
            l = Math.min(SC(this.options.cutout, a), 1),
            u = this._getRingWeight(this.index),
            { circumference: c, rotation: d } = this._getRotationExtents(),
            { ratioX: h, ratioY: y, offsetX: w, offsetY: b } = _E(d, c, l),
            g = (r.width - s) / h,
            m = (r.height - s) / y,
            S = Math.max(Math.min(g, m) / 2, 0),
            k = Kv(this.options.radius, S),
            E = Math.max(k * l, 0),
            P = (k - E) / this._getVisibleDatasetWeightTotal();
        this.offsetX = w * k, this.offsetY = b * k, i.total = this.calculateTotal(), this.outerRadius = k - P * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - P * u, 0), this.updateElements(o, 0, o.length, t)
    }
    _circumference(t, n) {
        const r = this.options,
            i = this._cachedMeta,
            o = this._getCircumference();
        return n && r.animation.animateRotate || !this.chart.getDataVisibility(t) || i._parsed[t] === null || i.data[t].hidden ? 0 : this.calculateCircumference(i._parsed[t] * o / it)
    }
    updateElements(t, n, r, i) {
        const o = i === "reset",
            s = this.chart,
            a = s.chartArea,
            u = s.options.animation,
            c = (a.left + a.right) / 2,
            d = (a.top + a.bottom) / 2,
            h = o && u.animateScale,
            y = h ? 0 : this.innerRadius,
            w = h ? 0 : this.outerRadius,
            b = this.resolveDataElementOptions(n, i),
            g = this.getSharedOptions(b),
            m = this.includeOptions(i, g);
        let S = this._getRotation(),
            k;
        for (k = 0; k < n; ++k) S += this._circumference(k, o);
        for (k = n; k < n + r; ++k) {
            const E = this._circumference(k, o),
                P = t[k],
                T = { x: c + this.offsetX, y: d + this.offsetY, startAngle: S, endAngle: S + E, circumference: E, outerRadius: w, innerRadius: y };
            m && (T.options = g || this.resolveDataElementOptions(k, P.active ? "active" : i)), S += E, this.updateElement(P, k, T, i)
        }
        this.updateSharedOptions(g, i, b)
    }
    calculateTotal() {
        const t = this._cachedMeta,
            n = t.data;
        let r = 0,
            i;
        for (i = 0; i < n.length; i++) {
            const o = t._parsed[i];
            o !== null && !isNaN(o) && this.chart.getDataVisibility(i) && !n[i].hidden && (r += Math.abs(o))
        }
        return r
    }
    calculateCircumference(t) { const n = this._cachedMeta.total; return n > 0 && !isNaN(t) ? it * (Math.abs(t) / n) : 0 }
    getLabelAndValue(t) {
        const n = this._cachedMeta,
            r = this.chart,
            i = r.data.labels || [],
            o = Aa(n._parsed[t], r.options.locale);
        return { label: i[t] || "", value: o }
    }
    getMaxBorderWidth(t) {
        let n = 0;
        const r = this.chart;
        let i, o, s, a, l;
        if (!t) {
            for (i = 0, o = r.data.datasets.length; i < o; ++i)
                if (r.isDatasetVisible(i)) { s = r.getDatasetMeta(i), t = s.data, a = s.controller; break }
        }
        if (!t) return 0;
        for (i = 0, o = t.length; i < o; ++i) l = a.resolveDataElementOptions(i), l.borderAlign !== "inner" && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
        return n
    }
    getMaxOffset(t) {
        let n = 0;
        for (let r = 0, i = t.length; r < i; ++r) {
            const o = this.resolveDataElementOptions(r);
            n = Math.max(n, o.offset || 0, o.hoverOffset || 0)
        }
        return n
    }
    _getRingWeightOffset(t) { let n = 0; for (let r = 0; r < t; ++r) this.chart.isDatasetVisible(r) && (n += this._getRingWeight(r)); return n }
    _getRingWeight(t) { return Math.max(Fe(this.chart.data.datasets[t].weight, 1), 0) }
    _getVisibleDatasetWeightTotal() { return this._getRingWeightOffset(this.chart.data.datasets.length) || 1 }
}
Fa.id = "doughnut";
Fa.defaults = { datasetElementType: !1, dataElementType: "arc", animation: { animateRotate: !0, animateScale: !1 }, animations: { numbers: { type: "number", properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"] } }, cutout: "50%", rotation: 0, circumference: 360, radius: "100%", spacing: 0, indexAxis: "r" };
Fa.descriptors = { _scriptable: e => e !== "spacing", _indexable: e => e !== "spacing" };
Fa.overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(e) { const t = e.data; if (t.labels.length && t.datasets.length) { const { labels: { pointStyle: n } } = e.legend.options; return t.labels.map((r, i) => { const s = e.getDatasetMeta(0).controller.getStyle(i); return { text: r, fillStyle: s.backgroundColor, strokeStyle: s.borderColor, lineWidth: s.borderWidth, pointStyle: n, hidden: !e.getDataVisibility(i), index: i } }) } return [] } }, onClick(e, t, n) { n.chart.toggleDataVisibility(t.index), n.chart.update() } }, tooltip: { callbacks: { title() { return "" }, label(e) { let t = e.label; const n = ": " + e.formattedValue; return ct(t) ? (t = t.slice(), t[0] += n) : t += n, t } } } } };
class ic extends ar {
    initialize() { this.enableOptionSharing = !0, super.initialize() }
    update(t) {
        const n = this._cachedMeta,
            { dataset: r, data: i = [], _dataset: o } = n,
            s = this.chart._animationsDisabled;
        let { start: a, count: l } = SE(n, i, s);
        this._drawStart = a, this._drawCount = l, kE(n) && (a = 0, l = i.length), r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!o._decimated, r.points = i;
        const u = this.resolveDatasetElementOptions(t);
        this.options.showLine || (u.borderWidth = 0), u.segment = this.options.segment, this.updateElement(r, void 0, { animated: !s, options: u }, t), this.updateElements(i, a, l, t)
    }
    updateElements(t, n, r, i) {
        const o = i === "reset",
            { iScale: s, vScale: a, _stacked: l, _dataset: u } = this._cachedMeta,
            c = this.resolveDataElementOptions(n, i),
            d = this.getSharedOptions(c),
            h = this.includeOptions(i, d),
            y = s.axis,
            w = a.axis,
            { spanGaps: b, segment: g } = this.options,
            m = Ca(b) ? b : Number.POSITIVE_INFINITY,
            S = this.chart._animationsDisabled || o || i === "none";
        let k = n > 0 && this.getParsed(n - 1);
        for (let E = n; E < n + r; ++E) {
            const P = t[E],
                T = this.getParsed(E),
                I = S ? P : {},
                U = Je(T[w]),
                z = I[y] = s.getPixelForValue(T[y], E),
                ve = I[w] = o || U ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, T, l) : T[w], E);
            I.skip = isNaN(z) || isNaN(ve) || U, I.stop = E > 0 && T[y] - k[y] > m, g && (I.parsed = T, I.raw = u.data[E]), h && (I.options = d || this.resolveDataElementOptions(E, P.active ? "active" : i)), S || this.updateElement(P, E, I, i), k = T
        }
        this.updateSharedOptions(d, i, c)
    }
    getMaxOverflow() {
        const t = this._cachedMeta,
            n = t.dataset,
            r = n.options && n.options.borderWidth || 0,
            i = t.data || [];
        if (!i.length) return r;
        const o = i[0].size(this.resolveDataElementOptions(0)),
            s = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
        return Math.max(r, o, s) / 2
    }
    draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
    }
}
ic.id = "line";
ic.defaults = { datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1 };
ic.overrides = { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } };

function SE(e, t, n) {
    const r = t.length;
    let i = 0,
        o = r;
    if (e._sorted) {
        const { iScale: s, _parsed: a } = e, l = s.axis, { min: u, max: c, minDefined: d, maxDefined: h } = s.getUserBounds();
        d && (i = Xt(Math.min($i(a, s.axis, u).lo, n ? r : $i(t, l, s.getPixelForValue(u)).lo), 0, r - 1)), h ? o = Xt(Math.max($i(a, s.axis, c).hi + 1, n ? 0 : $i(t, l, s.getPixelForValue(c)).hi + 1), i, r) - i : o = r - i
    }
    return { start: i, count: o }
}

function kE(e) { const { xScale: t, yScale: n, _scaleRanges: r } = e, i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max }; if (!r) return e._scaleRanges = i, !0; const o = r.xmin !== t.min || r.xmax !== t.max || r.ymin !== n.min || r.ymax !== n.max; return Object.assign(r, i), o }
class mp extends ar {
    constructor(t, n) {
        super(t, n);
        this.innerRadius = void 0, this.outerRadius = void 0
    }
    getLabelAndValue(t) {
        const n = this._cachedMeta,
            r = this.chart,
            i = r.data.labels || [],
            o = Aa(n._parsed[t].r, r.options.locale);
        return { label: i[t] || "", value: o }
    }
    update(t) {
        const n = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(n, 0, n.length, t)
    }
    _updateRadius() {
        const t = this.chart,
            n = t.chartArea,
            r = t.options,
            i = Math.min(n.right - n.left, n.bottom - n.top),
            o = Math.max(i / 2, 0),
            s = Math.max(r.cutoutPercentage ? o / 100 * r.cutoutPercentage : 1, 0),
            a = (o - s) / t.getVisibleDatasetCount();
        this.outerRadius = o - a * this.index, this.innerRadius = this.outerRadius - a
    }
    updateElements(t, n, r, i) {
        const o = i === "reset",
            s = this.chart,
            a = this.getDataset(),
            u = s.options.animation,
            c = this._cachedMeta.rScale,
            d = c.xCenter,
            h = c.yCenter,
            y = c.getIndexAngle(0) - .5 * wt;
        let w = y,
            b;
        const g = 360 / this.countVisibleElements();
        for (b = 0; b < n; ++b) w += this._computeAngle(b, i, g);
        for (b = n; b < n + r; b++) {
            const m = t[b];
            let S = w,
                k = w + this._computeAngle(b, i, g),
                E = s.getDataVisibility(b) ? c.getDistanceFromCenterForValue(a.data[b]) : 0;
            w = k, o && (u.animateScale && (E = 0), u.animateRotate && (S = k = y));
            const P = { x: d, y: h, innerRadius: 0, outerRadius: E, startAngle: S, endAngle: k, options: this.resolveDataElementOptions(b, m.active ? "active" : i) };
            this.updateElement(m, b, P, i)
        }
    }
    countVisibleElements() {
        const t = this.getDataset(),
            n = this._cachedMeta;
        let r = 0;
        return n.data.forEach((i, o) => {!isNaN(t.data[o]) && this.chart.getDataVisibility(o) && r++ }), r
    }
    _computeAngle(t, n, r) { return this.chart.getDataVisibility(t) ? Gn(this.resolveDataElementOptions(t, n).angle || r) : 0 }
}
mp.id = "polarArea";
mp.defaults = { dataElementType: "arc", animation: { animateRotate: !0, animateScale: !0 }, animations: { numbers: { type: "number", properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"] } }, indexAxis: "r", startAngle: 0 };
mp.overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(e) { const t = e.data; if (t.labels.length && t.datasets.length) { const { labels: { pointStyle: n } } = e.legend.options; return t.labels.map((r, i) => { const s = e.getDatasetMeta(0).controller.getStyle(i); return { text: r, fillStyle: s.backgroundColor, strokeStyle: s.borderColor, lineWidth: s.borderWidth, pointStyle: n, hidden: !e.getDataVisibility(i), index: i } }) } return [] } }, onClick(e, t, n) { n.chart.toggleDataVisibility(t.index), n.chart.update() } }, tooltip: { callbacks: { title() { return "" }, label(e) { return e.chart.data.labels[e.dataIndex] + ": " + e.formattedValue } } } }, scales: { r: { type: "radialLinear", angleLines: { display: !1 }, beginAtZero: !0, grid: { circular: !0 }, pointLabels: { display: !1 }, startAngle: 0 } } };
class tw extends Fa {}
tw.id = "pie";
tw.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" };
class gp extends ar {
    getLabelAndValue(t) {
        const n = this._cachedMeta.vScale,
            r = this.getParsed(t);
        return { label: n.getLabels()[t], value: "" + n.getLabelForValue(r[n.axis]) }
    }
    update(t) {
        const n = this._cachedMeta,
            r = n.dataset,
            i = n.data || [],
            o = n.iScale.getLabels();
        if (r.points = i, t !== "resize") {
            const s = this.resolveDatasetElementOptions(t);
            this.options.showLine || (s.borderWidth = 0);
            const a = { _loop: !0, _fullLoop: o.length === i.length, options: s };
            this.updateElement(r, void 0, a, t)
        }
        this.updateElements(i, 0, i.length, t)
    }
    updateElements(t, n, r, i) {
        const o = this.getDataset(),
            s = this._cachedMeta.rScale,
            a = i === "reset";
        for (let l = n; l < n + r; l++) {
            const u = t[l],
                c = this.resolveDataElementOptions(l, u.active ? "active" : i),
                d = s.getPointPositionForValue(l, o.data[l]),
                h = a ? s.xCenter : d.x,
                y = a ? s.yCenter : d.y,
                w = { x: h, y, angle: d.angle, skip: isNaN(h) || isNaN(y), options: c };
            this.updateElement(u, l, w, i)
        }
    }
}
gp.id = "radar";
gp.defaults = { datasetElementType: "line", dataElementType: "point", indexAxis: "r", showLine: !0, elements: { line: { fill: "start" } } };
gp.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } };
class yp extends ic {}
yp.id = "scatter";
yp.defaults = { showLine: !1, fill: !1 };
yp.overrides = { interaction: { mode: "point" }, plugins: { tooltip: { callbacks: { title() { return "" }, label(e) { return "(" + e.label + ", " + e.formattedValue + ")" } } } }, scales: { x: { type: "linear" }, y: { type: "linear" } } };

function Gi() { throw new Error("This method is not implemented: Check that a complete date adapter is provided.") }
class vp {
    constructor(t) { this.options = t || {} }
    formats() { return Gi() }
    parse(t, n) { return Gi() }
    format(t, n) { return Gi() }
    add(t, n, r) { return Gi() }
    diff(t, n, r) { return Gi() }
    startOf(t, n, r) { return Gi() }
    endOf(t, n) { return Gi() }
}
vp.override = function(e) { Object.assign(vp.prototype, e) };
var nw = { _date: vp };

function Ia(e, t) { return "native" in e ? { x: e.x, y: e.y } : P1(e, t) }

function CE(e, t) {
    const n = e.getSortedVisibleDatasetMetas();
    let r, i, o;
    for (let s = 0, a = n.length; s < a; ++s) {
        ({ index: r, data: i } = n[s]);
        for (let l = 0, u = i.length; l < u; ++l) o = i[l], o.skip || t(o, r, l)
    }
}

function ME(e, t, n, r) {
    const { controller: i, data: o, _sorted: s } = e, a = i._cachedMeta.iScale;
    if (a && t === a.axis && t !== "r" && s && o.length) {
        const l = a._reversePixels ? dM : $i;
        if (r) {
            if (i._sharedOptions) {
                const u = o[0],
                    c = typeof u.getRange == "function" && u.getRange(t);
                if (c) {
                    const d = l(o, t, n - c),
                        h = l(o, t, n + c);
                    return { lo: d.lo, hi: h.hi }
                }
            }
        } else return l(o, t, n)
    }
    return { lo: 0, hi: o.length - 1 }
}

function wp(e, t, n, r, i) {
    const o = e.getSortedVisibleDatasetMetas(),
        s = n[t];
    for (let a = 0, l = o.length; a < l; ++a) {
        const { index: u, data: c } = o[a], { lo: d, hi: h } = ME(o[a], t, s, i);
        for (let y = d; y <= h; ++y) {
            const w = c[y];
            w.skip || r(w, u, y)
        }
    }
}

function EE(e) {
    const t = e.indexOf("x") !== -1,
        n = e.indexOf("y") !== -1;
    return function(r, i) {
        const o = t ? Math.abs(r.x - i.x) : 0,
            s = n ? Math.abs(r.y - i.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2))
    }
}

function xp(e, t, n, r) { const i = []; return Yi(t, e.chartArea, e._minPadding) && wp(e, n, t, function(s, a, l) { s.inRange(t.x, t.y, r) && i.push({ element: s, datasetIndex: a, index: l }) }, !0), i }

function OE(e, t, n, r) {
    let i = [];

    function o(s, a, l) {
        const { startAngle: u, endAngle: c } = s.getProps(["startAngle", "endAngle"], r), { angle: d } = i1(s, { x: t.x, y: t.y });
        Ea(d, u, c) && i.push({ element: s, datasetIndex: a, index: l })
    }
    return wp(e, n, t, o), i
}

function DE(e, t, n, r, i) {
    let o = [];
    const s = EE(n);
    let a = Number.POSITIVE_INFINITY;

    function l(u, c, d) {
        const h = u.inRange(t.x, t.y, i);
        if (r && !h) return;
        const y = u.getCenterPoint(i);
        if (!Yi(y, e.chartArea, e._minPadding) && !h) return;
        const b = s(t, y);
        b < a ? (o = [{ element: u, datasetIndex: c, index: d }], a = b) : b === a && o.push({ element: u, datasetIndex: c, index: d })
    }
    return wp(e, n, t, l), o
}

function bp(e, t, n, r, i) { return Yi(t, e.chartArea, e._minPadding) ? n === "r" && !r ? OE(e, t, n, i) : DE(e, t, n, r, i) : [] }

function rw(e, t, n, r) {
    const i = Ia(t, e),
        o = [],
        s = n.axis,
        a = s === "x" ? "inXRange" : "inYRange";
    let l = !1;
    return CE(e, (u, c, d) => { u[a](i[s], r) && o.push({ element: u, datasetIndex: c, index: d }), u.inRange(i.x, i.y, r) && (l = !0) }), n.intersect && !l ? [] : o
}
var PE = {
    modes: {
        index(e, t, n, r) {
            const i = Ia(t, e),
                o = n.axis || "x",
                s = n.intersect ? xp(e, i, o, r) : bp(e, i, o, !1, r),
                a = [];
            return s.length ? (e.getSortedVisibleDatasetMetas().forEach(l => {
                const u = s[0].index,
                    c = l.data[u];
                c && !c.skip && a.push({ element: c, datasetIndex: l.index, index: u })
            }), a) : []
        },
        dataset(e, t, n, r) {
            const i = Ia(t, e),
                o = n.axis || "xy";
            let s = n.intersect ? xp(e, i, o, r) : bp(e, i, o, !1, r);
            if (s.length > 0) {
                const a = s[0].datasetIndex,
                    l = e.getDatasetMeta(a).data;
                s = [];
                for (let u = 0; u < l.length; ++u) s.push({ element: l[u], datasetIndex: a, index: u })
            }
            return s
        },
        point(e, t, n, r) {
            const i = Ia(t, e),
                o = n.axis || "xy";
            return xp(e, i, o, r)
        },
        nearest(e, t, n, r) {
            const i = Ia(t, e),
                o = n.axis || "xy";
            return bp(e, i, o, n.intersect, r)
        },
        x(e, t, n, r) { return rw(e, t, { axis: "x", intersect: n.intersect }, r) },
        y(e, t, n, r) { return rw(e, t, { axis: "y", intersect: n.intersect }, r) }
    }
};
const iw = ["left", "top", "right", "bottom"];

function Na(e, t) { return e.filter(n => n.pos === t) }

function ow(e, t) { return e.filter(n => iw.indexOf(n.pos) === -1 && n.box.axis === t) }

function ja(e, t) {
    return e.sort((n, r) => {
        const i = t ? r : n,
            o = t ? n : r;
        return i.weight === o.weight ? i.index - o.index : i.weight - o.weight
    })
}

function RE(e) { const t = []; let n, r, i, o, s, a; for (n = 0, r = (e || []).length; n < r; ++n) i = e[n], { position: o, options: { stack: s, stackWeight: a = 1 } } = i, t.push({ index: n, box: i, pos: o, horizontal: i.isHorizontal(), weight: i.weight, stack: s && o + s, stackWeight: a }); return t }

function TE(e) {
    const t = {};
    for (const n of e) {
        const { stack: r, pos: i, stackWeight: o } = n;
        if (!r || !iw.includes(i)) continue;
        const s = t[r] || (t[r] = { count: 0, placed: 0, weight: 0, size: 0 });
        s.count++, s.weight += o
    }
    return t
}

function AE(e, t) {
    const n = TE(e),
        { vBoxMaxWidth: r, hBoxMaxHeight: i } = t;
    let o, s, a;
    for (o = 0, s = e.length; o < s; ++o) {
        a = e[o];
        const { fullSize: l } = a.box, u = n[a.stack], c = u && a.stackWeight / u.weight;
        a.horizontal ? (a.width = c ? c * r : l && t.availableWidth, a.height = i) : (a.width = r, a.height = c ? c * i : l && t.availableHeight)
    }
    return n
}

function LE(e) {
    const t = RE(e),
        n = ja(t.filter(u => u.box.fullSize), !0),
        r = ja(Na(t, "left"), !0),
        i = ja(Na(t, "right")),
        o = ja(Na(t, "top"), !0),
        s = ja(Na(t, "bottom")),
        a = ow(t, "x"),
        l = ow(t, "y");
    return { fullSize: n, leftAndTop: r.concat(o), rightAndBottom: i.concat(l).concat(s).concat(a), chartArea: Na(t, "chartArea"), vertical: r.concat(i).concat(l), horizontal: o.concat(s).concat(a) }
}

function sw(e, t, n, r) { return Math.max(e[n], t[n]) + Math.max(e[r], t[r]) }

function aw(e, t) { e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right) }

function FE(e, t, n, r) {
    const { pos: i, box: o } = n, s = e.maxPadding;
    if (!He(i)) {
        n.size && (e[i] -= n.size);
        const d = r[n.stack] || { size: 0, count: 1 };
        d.size = Math.max(d.size, n.horizontal ? o.height : o.width), n.size = d.size / d.count, e[i] += n.size
    }
    o.getPadding && aw(s, o.getPadding());
    const a = Math.max(0, t.outerWidth - sw(s, e, "left", "right")),
        l = Math.max(0, t.outerHeight - sw(s, e, "top", "bottom")),
        u = a !== e.w,
        c = l !== e.h;
    return e.w = a, e.h = l, n.horizontal ? { same: u, other: c } : { same: c, other: u }
}

function IE(e) {
    const t = e.maxPadding;

    function n(r) { const i = Math.max(t[r] - e[r], 0); return e[r] += i, i }
    e.y += n("top"), e.x += n("left"), n("right"), n("bottom")
}

function NE(e, t) {
    const n = t.maxPadding;

    function r(i) { const o = { left: 0, top: 0, right: 0, bottom: 0 }; return i.forEach(s => { o[s] = Math.max(t[s], n[s]) }), o }
    return r(e ? ["left", "right"] : ["top", "bottom"])
}

function za(e, t, n, r) {
    const i = [];
    let o, s, a, l, u, c;
    for (o = 0, s = e.length, u = 0; o < s; ++o) {
        a = e[o], l = a.box, l.update(a.width || t.w, a.height || t.h, NE(a.horizontal, t));
        const { same: d, other: h } = FE(t, n, a, r);
        u |= d && i.length, c = c || h, l.fullSize || i.push(a)
    }
    return u && za(i, t, n, r) || c
}

function oc(e, t, n, r, i) { e.top = n, e.left = t, e.right = t + r, e.bottom = n + i, e.width = r, e.height = i }

function lw(e, t, n, r) {
    const i = n.padding;
    let { x: o, y: s } = t;
    for (const a of e) {
        const l = a.box,
            u = r[a.stack] || { count: 1, placed: 0, weight: 1 },
            c = a.stackWeight / u.weight || 1;
        if (a.horizontal) {
            const d = t.w * c,
                h = u.size || l.height;
            Fn(u.start) && (s = u.start), l.fullSize ? oc(l, i.left, s, n.outerWidth - i.right - i.left, h) : oc(l, t.left + u.placed, s, d, h), u.start = s, u.placed += d, s = l.bottom
        } else {
            const d = t.h * c,
                h = u.size || l.width;
            Fn(u.start) && (o = u.start), l.fullSize ? oc(l, o, i.top, h, n.outerHeight - i.bottom - i.top) : oc(l, o, t.top + u.placed, h, d), u.start = o, u.placed += d, o = l.right
        }
    }
    t.x = o, t.y = s
}
Ye.set("layout", { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
var li = {
    addBox(e, t) { e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() { return [{ z: 0, draw(n) { t.draw(n) } }] }, e.boxes.push(t) },
    removeBox(e, t) {
        const n = e.boxes ? e.boxes.indexOf(t) : -1;
        n !== -1 && e.boxes.splice(n, 1)
    },
    configure(e, t, n) { t.fullSize = n.fullSize, t.position = n.position, t.weight = n.weight },
    update(e, t, n, r) {
        if (!e) return;
        const i = rn(e.options.layout.padding),
            o = Math.max(t - i.width, 0),
            s = Math.max(n - i.height, 0),
            a = LE(e.boxes),
            l = a.vertical,
            u = a.horizontal;
        et(e.boxes, b => { typeof b.beforeLayout == "function" && b.beforeLayout() });
        const c = l.reduce((b, g) => g.box.options && g.box.options.display === !1 ? b : b + 1, 0) || 1,
            d = Object.freeze({ outerWidth: t, outerHeight: n, padding: i, availableWidth: o, availableHeight: s, vBoxMaxWidth: o / 2 / c, hBoxMaxHeight: s / 2 }),
            h = Object.assign({}, i);
        aw(h, rn(r));
        const y = Object.assign({ maxPadding: h, w: o, h: s, x: i.left, y: i.top }, i),
            w = AE(l.concat(u), d);
        za(a.fullSize, y, d, w), za(l, y, d, w), za(u, y, d, w) && za(l, y, d, w), IE(y), lw(a.leftAndTop, y, d, w), y.x += y.w, y.y += y.h, lw(a.rightAndBottom, y, d, w), e.chartArea = { left: y.left, top: y.top, right: y.left + y.w, bottom: y.top + y.h, height: y.h, width: y.w }, et(a.chartArea, b => {
            const g = b.box;
            Object.assign(g, e.chartArea), g.update(y.w, y.h, { left: 0, top: 0, right: 0, bottom: 0 })
        })
    }
};
class uw {
    acquireContext(t, n) {}
    releaseContext(t) { return !1 }
    addEventListener(t, n, r) {}
    removeEventListener(t, n, r) {}
    getDevicePixelRatio() { return 1 }
    getMaximumSize(t, n, r, i) { return n = Math.max(0, n || t.width), r = r || t.height, { width: n, height: Math.max(0, i ? Math.floor(n / i) : r) } }
    isAttached(t) { return !0 }
    updateConfig(t) {}
}
class jE extends uw {
    acquireContext(t) { return t && t.getContext && t.getContext("2d") || null }
    updateConfig(t) { t.options.animation = !1 }
}
const sc = "$chartjs",
    zE = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" },
    cw = e => e === null || e === "";

function BE(e, t) {
    const n = e.style,
        r = e.getAttribute("height"),
        i = e.getAttribute("width");
    if (e[sc] = { initial: { height: r, width: i, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", cw(i)) {
        const o = T1(e, "width");
        o !== void 0 && (e.width = o)
    }
    if (cw(r))
        if (e.style.height === "") e.height = e.width / (t || 2);
        else {
            const o = T1(e, "height");
            o !== void 0 && (e.height = o)
        }
    return e
}
const fw = NM ? { passive: !0 } : !1;

function WE(e, t, n) { e.addEventListener(t, n, fw) }

function HE(e, t, n) { e.canvas.removeEventListener(t, n, fw) }

function YE(e, t) {
    const n = zE[e.type] || e.type,
        { x: r, y: i } = P1(e, t);
    return { type: n, chart: t, native: e, x: r !== void 0 ? r : null, y: i !== void 0 ? i : null }
}

function ac(e, t) {
    for (const n of e)
        if (n === t || n.contains(t)) return !0
}

function $E(e, t, n) {
    const r = e.canvas,
        i = new MutationObserver(o => {
            let s = !1;
            for (const a of o) s = s || ac(a.addedNodes, r), s = s && !ac(a.removedNodes, r);
            s && n()
        });
    return i.observe(document, { childList: !0, subtree: !0 }), i
}

function VE(e, t, n) {
    const r = e.canvas,
        i = new MutationObserver(o => {
            let s = !1;
            for (const a of o) s = s || ac(a.removedNodes, r), s = s && !ac(a.addedNodes, r);
            s && n()
        });
    return i.observe(document, { childList: !0, subtree: !0 }), i
}
const Ba = new Map;
let dw = 0;

function hw() {
    const e = window.devicePixelRatio;
    e !== dw && (dw = e, Ba.forEach((t, n) => { n.currentDevicePixelRatio !== e && t() }))
}

function UE(e, t) { Ba.size || window.addEventListener("resize", hw), Ba.set(e, t) }

function GE(e) { Ba.delete(e), Ba.size || window.removeEventListener("resize", hw) }

function XE(e, t, n) {
    const r = e.canvas,
        i = r && lp(r);
    if (!i) return;
    const o = Xv((a, l) => {
            const u = i.clientWidth;
            n(a, l), u < i.clientWidth && n()
        }, window),
        s = new ResizeObserver(a => {
            const l = a[0],
                u = l.contentRect.width,
                c = l.contentRect.height;
            u === 0 && c === 0 || o(u, c)
        });
    return s.observe(i), UE(e, o), s
}

function _p(e, t, n) { n && n.disconnect(), t === "resize" && GE(e) }

function qE(e, t, n) {
    const r = e.canvas,
        i = Xv(o => { e.ctx !== null && n(YE(o, e)) }, e, o => { const s = o[0]; return [s, s.offsetX, s.offsetY] });
    return WE(r, t, i), i
}
class KE extends uw {
    acquireContext(t, n) { const r = t && t.getContext && t.getContext("2d"); return r && r.canvas === t ? (BE(t, n), r) : null }
    releaseContext(t) {
        const n = t.canvas;
        if (!n[sc]) return !1;
        const r = n[sc].initial;
        ["height", "width"].forEach(o => {
            const s = r[o];
            Je(s) ? n.removeAttribute(o) : n.setAttribute(o, s)
        });
        const i = r.style || {};
        return Object.keys(i).forEach(o => { n.style[o] = i[o] }), n.width = n.width, delete n[sc], !0
    }
    addEventListener(t, n, r) {
        this.removeEventListener(t, n);
        const i = t.$proxies || (t.$proxies = {}),
            s = { attach: $E, detach: VE, resize: XE }[n] || qE;
        i[n] = s(t, n, r)
    }
    removeEventListener(t, n) {
        const r = t.$proxies || (t.$proxies = {}),
            i = r[n];
        if (!i) return;
        ({ attach: _p, detach: _p, resize: _p }[n] || HE)(t, n, i), r[n] = void 0
    }
    getDevicePixelRatio() { return window.devicePixelRatio }
    getMaximumSize(t, n, r, i) { return IM(t, n, r, i) }
    isAttached(t) { const n = lp(t); return !!(n && n.isConnected) }
}

function QE(e) { return !D1() || typeof OffscreenCanvas != "undefined" && e instanceof OffscreenCanvas ? jE : KE }
class lr {
    constructor() { this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0 }
    tooltipPosition(t) { const { x: n, y: r } = this.getProps(["x", "y"], t); return { x: n, y: r } }
    hasValue() { return Ca(this.x) && Ca(this.y) }
    getProps(t, n) { const r = this.$animations; if (!n || !r) return this; const i = {}; return t.forEach(o => { i[o] = r[o] && r[o].active() ? r[o]._to : this[o] }), i }
}
lr.defaults = {};
lr.defaultRoutes = void 0;
const pw = {
    values(e) { return ct(e) ? e : "" + e },
    numeric(e, t, n) {
        if (e === 0) return "0";
        const r = this.chart.options.locale;
        let i, o = e;
        if (n.length > 1) {
            const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
            (u < 1e-4 || u > 1e15) && (i = "scientific"), o = ZE(e, n)
        }
        const s = In(Math.abs(o)),
            a = Math.max(Math.min(-1 * Math.floor(s), 20), 0),
            l = { notation: i, minimumFractionDigits: a, maximumFractionDigits: a };
        return Object.assign(l, this.options.ticks.format), Aa(e, r, l)
    },
    logarithmic(e, t, n) { if (e === 0) return "0"; const r = e / Math.pow(10, Math.floor(In(e))); return r === 1 || r === 2 || r === 5 ? pw.numeric.call(this, e, t, n) : "" }
};

function ZE(e, t) { let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value; return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n }
var lc = { formatters: pw };
Ye.set("scale", { display: !0, offset: !1, reverse: !1, beginAtZero: !1, bounds: "ticks", grace: 0, grid: { display: !0, lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickLength: 8, tickWidth: (e, t) => t.lineWidth, tickColor: (e, t) => t.color, offset: !1, borderDash: [], borderDashOffset: 0, borderWidth: 1 }, title: { display: !1, text: "", padding: { top: 4, bottom: 4 } }, ticks: { minRotation: 0, maxRotation: 50, mirror: !1, textStrokeWidth: 0, textStrokeColor: "", padding: 3, display: !0, autoSkip: !0, autoSkipPadding: 3, labelOffset: 0, callback: lc.formatters.values, minor: {}, major: {}, align: "center", crossAlign: "near", showLabelBackdrop: !1, backdropColor: "rgba(255, 255, 255, 0.75)", backdropPadding: 2 } });
Ye.route("scale.ticks", "color", "", "color");
Ye.route("scale.grid", "color", "", "borderColor");
Ye.route("scale.grid", "borderColor", "", "borderColor");
Ye.route("scale.title", "color", "", "color");
Ye.describe("scale", { _fallback: !1, _scriptable: e => !e.startsWith("before") && !e.startsWith("after") && e !== "callback" && e !== "parser", _indexable: e => e !== "borderDash" && e !== "tickBorderDash" });
Ye.describe("scales", { _fallback: "scale" });
Ye.describe("scale.ticks", { _scriptable: e => e !== "backdropPadding" && e !== "callback", _indexable: e => e !== "backdropPadding" });

function JE(e, t) {
    const n = e.options.ticks,
        r = n.maxTicksLimit || eO(e),
        i = n.major.enabled ? nO(t) : [],
        o = i.length,
        s = i[0],
        a = i[o - 1],
        l = [];
    if (o > r) return rO(t, l, i, o / r), l;
    const u = tO(i, t, r);
    if (o > 0) { let c, d; const h = o > 1 ? Math.round((a - s) / (o - 1)) : null; for (uc(t, l, u, Je(h) ? 0 : s - h, s), c = 0, d = o - 1; c < d; c++) uc(t, l, u, i[c], i[c + 1]); return uc(t, l, u, a, Je(h) ? t.length : a + h), l }
    return uc(t, l, u), l
}

function eO(e) {
    const t = e.options.offset,
        n = e._tickSize(),
        r = e._length / n + (t ? 0 : 1),
        i = e._maxLength / n;
    return Math.floor(Math.min(r, i))
}

function tO(e, t, n) {
    const r = iO(e),
        i = t.length / n;
    if (!r) return Math.max(i, 1);
    const o = RC(r);
    for (let s = 0, a = o.length - 1; s < a; s++) { const l = o[s]; if (l > i) return l }
    return Math.max(i, 1)
}

function nO(e) { const t = []; let n, r; for (n = 0, r = e.length; n < r; n++) e[n].major && t.push(n); return t }

function rO(e, t, n, r) {
    let i = 0,
        o = n[0],
        s;
    for (r = Math.ceil(r), s = 0; s < e.length; s++) s === o && (t.push(e[s]), i++, o = n[i * r])
}

function uc(e, t, n, r, i) {
    const o = Fe(r, 0),
        s = Math.min(Fe(i, e.length), e.length);
    let a = 0,
        l, u, c;
    for (n = Math.ceil(n), i && (l = i - r, n = l / Math.floor(l / n)), c = o; c < 0;) a++, c = Math.round(o + a * n);
    for (u = Math.max(o, 0); u < s; u++) u === c && (t.push(e[u]), a++, c = Math.round(o + a * n))
}

function iO(e) {
    const t = e.length;
    let n, r;
    if (t < 2) return !1;
    for (r = e[0], n = 1; n < t; ++n)
        if (e[n] - e[n - 1] !== r) return !1;
    return r
}
const oO = e => e === "left" ? "right" : e === "right" ? "left" : e,
    mw = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n;

function gw(e, t) {
    const n = [],
        r = e.length / t,
        i = e.length;
    let o = 0;
    for (; o < i; o += r) n.push(e[Math.floor(o)]);
    return n
}

function sO(e, t, n) {
    const r = e.ticks.length,
        i = Math.min(t, r - 1),
        o = e._startPixel,
        s = e._endPixel,
        a = 1e-6;
    let l = e.getPixelForTick(i),
        u;
    if (!(n && (r === 1 ? u = Math.max(l - o, s - l) : t === 0 ? u = (e.getPixelForTick(1) - l) / 2 : u = (l - e.getPixelForTick(i - 1)) / 2, l += i < t ? u : -u, l < o - a || l > s + a))) return l
}

function aO(e, t) {
    et(e, n => {
        const r = n.gc,
            i = r.length / 2;
        let o;
        if (i > t) {
            for (o = 0; o < i; ++o) delete n.data[r[o]];
            r.splice(0, i)
        }
    })
}

function Wa(e) { return e.drawTicks ? e.tickLength : 0 }

function yw(e, t) {
    if (!e.display) return 0;
    const n = Bt(e.font, t),
        r = rn(e.padding);
    return (ct(e.text) ? e.text.length : 1) * n.lineHeight + r.height
}

function lO(e, t) { return ai(e, { scale: t, type: "scale" }) }

function uO(e, t, n) { return ai(e, { tick: n, index: t, type: "tick" }) }

function cO(e, t, n) { let r = qv(e); return (n && t !== "right" || !n && t === "right") && (r = oO(r)), r }

function fO(e, t, n, r) {
    const { top: i, left: o, bottom: s, right: a, chart: l } = e, { chartArea: u, scales: c } = l;
    let d = 0,
        h, y, w;
    const b = s - i,
        g = a - o;
    if (e.isHorizontal()) {
        if (y = vn(r, o, a), He(n)) {
            const m = Object.keys(n)[0],
                S = n[m];
            w = c[m].getPixelForValue(S) + b - t
        } else n === "center" ? w = (u.bottom + u.top) / 2 + b - t : w = mw(e, n, t);
        h = a - o
    } else {
        if (He(n)) {
            const m = Object.keys(n)[0],
                S = n[m];
            y = c[m].getPixelForValue(S) - g + t
        } else n === "center" ? y = (u.left + u.right) / 2 - g + t : y = mw(e, n, t);
        w = vn(r, s, i), d = n === "left" ? -xt : xt
    }
    return { titleX: y, titleY: w, maxWidth: h, rotation: d }
}
class Xi extends lr {
    constructor(t) {
        super();
        this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = { left: 0, right: 0, top: 0, bottom: 0 }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
    }
    init(t) { this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax) }
    parse(t, n) { return t }
    getUserBounds() { let { _userMin: t, _userMax: n, _suggestedMin: r, _suggestedMax: i } = this; return t = Ln(t, Number.POSITIVE_INFINITY), n = Ln(n, Number.NEGATIVE_INFINITY), r = Ln(r, Number.POSITIVE_INFINITY), i = Ln(i, Number.NEGATIVE_INFINITY), { min: Ln(t, r), max: Ln(n, i), minDefined: St(t), maxDefined: St(n) } }
    getMinMax(t) { let { min: n, max: r, minDefined: i, maxDefined: o } = this.getUserBounds(), s; if (i && o) return { min: n, max: r }; const a = this.getMatchingVisibleMetas(); for (let l = 0, u = a.length; l < u; ++l) s = a[l].controller.getMinMax(this, t), i || (n = Math.min(n, s.min)), o || (r = Math.max(r, s.max)); return n = o && n > r ? r : n, r = i && n > r ? n : r, { min: Ln(n, Ln(r, n)), max: Ln(r, Ln(n, r)) } }
    getPadding() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } }
    getTicks() { return this.ticks }
    getLabels() { const t = this.chart.data; return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [] }
    beforeLayout() { this._cache = {}, this._dataLimitsCached = !1 }
    beforeUpdate() { st(this.options.beforeUpdate, [this]) }
    update(t, n, r) {
        const { beginAtZero: i, grace: o, ticks: s } = this.options, a = s.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = n, this._margins = r = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + r.left + r.right : this.height + r.top + r.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = fM(this, o, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        const l = a < this.ticks.length;
        this._convertTicksToLabels(l ? gw(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), s.display && (s.autoSkip || s.source === "auto") && (this.ticks = JE(this, this.ticks), this._labelSizes = null), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
    }
    configure() {
        let t = this.options.reverse,
            n, r;
        this.isHorizontal() ? (n = this.left, r = this.right) : (n = this.top, r = this.bottom, t = !t), this._startPixel = n, this._endPixel = r, this._reversePixels = t, this._length = r - n, this._alignToPixels = this.options.alignToPixels
    }
    afterUpdate() { st(this.options.afterUpdate, [this]) }
    beforeSetDimensions() { st(this.options.beforeSetDimensions, [this]) }
    setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0 }
    afterSetDimensions() { st(this.options.afterSetDimensions, [this]) }
    _callHooks(t) { this.chart.notifyPlugins(t, this.getContext()), st(this.options[t], [this]) }
    beforeDataLimits() { this._callHooks("beforeDataLimits") }
    determineDataLimits() {}
    afterDataLimits() { this._callHooks("afterDataLimits") }
    beforeBuildTicks() { this._callHooks("beforeBuildTicks") }
    buildTicks() { return [] }
    afterBuildTicks() { this._callHooks("afterBuildTicks") }
    beforeTickToLabelConversion() { st(this.options.beforeTickToLabelConversion, [this]) }
    generateTickLabels(t) { const n = this.options.ticks; let r, i, o; for (r = 0, i = t.length; r < i; r++) o = t[r], o.label = st(n.callback, [o.value, r, t], this) }
    afterTickToLabelConversion() { st(this.options.afterTickToLabelConversion, [this]) }
    beforeCalculateLabelRotation() { st(this.options.beforeCalculateLabelRotation, [this]) }
    calculateLabelRotation() {
        const t = this.options,
            n = t.ticks,
            r = this.ticks.length,
            i = n.minRotation || 0,
            o = n.maxRotation;
        let s = i,
            a, l, u;
        if (!this._isVisible() || !n.display || i >= o || r <= 1 || !this.isHorizontal()) { this.labelRotation = i; return }
        const c = this._getLabelSizes(),
            d = c.widest.width,
            h = c.highest.height,
            y = Xt(this.chart.width - d, 0, this.maxWidth);
        a = t.offset ? this.maxWidth / r : y / (r - 1), d + 6 > a && (a = y / (r - (t.offset ? .5 : 1)), l = this.maxHeight - Wa(t.grid) - n.padding - yw(t.title, this.chart.options.font), u = Math.sqrt(d * d + h * h), s = Gh(Math.min(Math.asin(Xt((c.highest.height + 6) / a, -1, 1)), Math.asin(Xt(l / u, -1, 1)) - Math.asin(Xt(h / u, -1, 1)))), s = Math.max(i, Math.min(o, s))), this.labelRotation = s
    }
    afterCalculateLabelRotation() { st(this.options.afterCalculateLabelRotation, [this]) }
    beforeFit() { st(this.options.beforeFit, [this]) }
    fit() {
        const t = { width: 0, height: 0 },
            { chart: n, options: { ticks: r, title: i, grid: o } } = this,
            s = this._isVisible(),
            a = this.isHorizontal();
        if (s) {
            const l = yw(i, n.options.font);
            if (a ? (t.width = this.maxWidth, t.height = Wa(o) + l) : (t.height = this.maxHeight, t.width = Wa(o) + l), r.display && this.ticks.length) {
                const { first: u, last: c, widest: d, highest: h } = this._getLabelSizes(), y = r.padding * 2, w = Gn(this.labelRotation), b = Math.cos(w), g = Math.sin(w);
                if (a) {
                    const m = r.mirror ? 0 : g * d.width + b * h.height;
                    t.height = Math.min(this.maxHeight, t.height + m + y)
                } else {
                    const m = r.mirror ? 0 : b * d.width + g * h.height;
                    t.width = Math.min(this.maxWidth, t.width + m + y)
                }
                this._calculatePadding(u, c, g, b)
            }
        }
        this._handleMargins(), a ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom)
    }
    _calculatePadding(t, n, r, i) {
        const { ticks: { align: o, padding: s }, position: a } = this.options, l = this.labelRotation !== 0, u = a !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const c = this.getPixelForTick(0) - this.left,
                d = this.right - this.getPixelForTick(this.ticks.length - 1);
            let h = 0,
                y = 0;
            l ? u ? (h = i * t.width, y = r * n.height) : (h = r * t.height, y = i * n.width) : o === "start" ? y = n.width : o === "end" ? h = t.width : (h = t.width / 2, y = n.width / 2), this.paddingLeft = Math.max((h - c + s) * this.width / (this.width - c), 0), this.paddingRight = Math.max((y - d + s) * this.width / (this.width - d), 0)
        } else {
            let c = n.height / 2,
                d = t.height / 2;
            o === "start" ? (c = 0, d = t.height) : o === "end" && (c = n.height, d = 0), this.paddingTop = c + s, this.paddingBottom = d + s
        }
    }
    _handleMargins() { this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)) }
    afterFit() { st(this.options.afterFit, [this]) }
    isHorizontal() { const { axis: t, position: n } = this.options; return n === "top" || n === "bottom" || t === "x" }
    isFullSize() { return this.options.fullSize }
    _convertTicksToLabels(t) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(t);
        let n, r;
        for (n = 0, r = t.length; n < r; n++) Je(t[n].label) && (t.splice(n, 1), r--, n--);
        this.afterTickToLabelConversion()
    }
    _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
            const n = this.options.ticks.sampleSize;
            let r = this.ticks;
            n < r.length && (r = gw(r, n)), this._labelSizes = t = this._computeLabelSizes(r, r.length)
        }
        return t
    }
    _computeLabelSizes(t, n) {
        const { ctx: r, _longestTextCache: i } = this, o = [], s = [];
        let a = 0,
            l = 0,
            u, c, d, h, y, w, b, g, m, S, k;
        for (u = 0; u < n; ++u) {
            if (h = t[u].label, y = this._resolveTickFontOptions(u), r.font = w = y.string, b = i[w] = i[w] || { data: {}, gc: [] }, g = y.lineHeight, m = S = 0, !Je(h) && !ct(h)) m = qu(r, b.data, b.gc, m, h), S = g;
            else if (ct(h))
                for (c = 0, d = h.length; c < d; ++c) k = h[c], !Je(k) && !ct(k) && (m = qu(r, b.data, b.gc, m, k), S += g);
            o.push(m), s.push(S), a = Math.max(m, a), l = Math.max(S, l)
        }
        aO(i, n);
        const E = o.indexOf(a),
            P = s.indexOf(l),
            T = I => ({ width: o[I] || 0, height: s[I] || 0 });
        return { first: T(0), last: T(n - 1), widest: T(E), highest: T(P), widths: o, heights: s }
    }
    getLabelForValue(t) { return t }
    getPixelForValue(t, n) { return NaN }
    getValueForPixel(t) {}
    getPixelForTick(t) { const n = this.ticks; return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value) }
    getPixelForDecimal(t) { this._reversePixels && (t = 1 - t); const n = this._startPixel + t * this._length; return LC(this._alignToPixels ? Hi(this.chart, n, 0) : n) }
    getDecimalForPixel(t) { const n = (t - this._startPixel) / this._length; return this._reversePixels ? 1 - n : n }
    getBasePixel() { return this.getPixelForValue(this.getBaseValue()) }
    getBaseValue() { const { min: t, max: n } = this; return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0 }
    getContext(t) { const n = this.ticks || []; if (t >= 0 && t < n.length) { const r = n[t]; return r.$context || (r.$context = uO(this.getContext(), t, r)) } return this.$context || (this.$context = lO(this.chart.getContext(), this)) }
    _tickSize() {
        const t = this.options.ticks,
            n = Gn(this.labelRotation),
            r = Math.abs(Math.cos(n)),
            i = Math.abs(Math.sin(n)),
            o = this._getLabelSizes(),
            s = t.autoSkipPadding || 0,
            a = o ? o.widest.width + s : 0,
            l = o ? o.highest.height + s : 0;
        return this.isHorizontal() ? l * r > a * i ? a / r : l / i : l * i < a * r ? l / r : a / i
    }
    _isVisible() { const t = this.options.display; return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0 }
    _computeGridLineItems(t) {
        const n = this.axis,
            r = this.chart,
            i = this.options,
            { grid: o, position: s } = i,
            a = o.offset,
            l = this.isHorizontal(),
            c = this.ticks.length + (a ? 1 : 0),
            d = Wa(o),
            h = [],
            y = o.setContext(this.getContext()),
            w = y.drawBorder ? y.borderWidth : 0,
            b = w / 2,
            g = function(Y) { return Hi(r, Y, w) };
        let m, S, k, E, P, T, I, U, z, ve, Ee, he;
        if (s === "top") m = g(this.bottom), T = this.bottom - d, U = m - b, ve = g(t.top) + b, he = t.bottom;
        else if (s === "bottom") m = g(this.top), ve = t.top, he = g(t.bottom) - b, T = m + b, U = this.top + d;
        else if (s === "left") m = g(this.right), P = this.right - d, I = m - b, z = g(t.left) + b, Ee = t.right;
        else if (s === "right") m = g(this.left), z = t.left, Ee = g(t.right) - b, P = m + b, I = this.left + d;
        else if (n === "x") {
            if (s === "center") m = g((t.top + t.bottom) / 2 + .5);
            else if (He(s)) {
                const Y = Object.keys(s)[0],
                    X = s[Y];
                m = g(this.chart.scales[Y].getPixelForValue(X))
            }
            ve = t.top, he = t.bottom, T = m + b, U = T + d
        } else if (n === "y") {
            if (s === "center") m = g((t.left + t.right) / 2);
            else if (He(s)) {
                const Y = Object.keys(s)[0],
                    X = s[Y];
                m = g(this.chart.scales[Y].getPixelForValue(X))
            }
            P = m - b, I = P - d, z = t.left, Ee = t.right
        }
        const Re = Fe(i.ticks.maxTicksLimit, c),
            H = Math.max(1, Math.ceil(c / Re));
        for (S = 0; S < c; S += H) {
            const Y = o.setContext(this.getContext(S)),
                X = Y.lineWidth,
                te = Y.color,
                A = o.borderDash || [],
                F = Y.borderDashOffset,
                q = Y.tickWidth,
                L = Y.tickColor,
                $ = Y.tickBorderDash || [],
                se = Y.tickBorderDashOffset;
            k = sO(this, S, a), k !== void 0 && (E = Hi(r, k, X), l ? P = I = z = Ee = E : T = U = ve = he = E, h.push({ tx1: P, ty1: T, tx2: I, ty2: U, x1: z, y1: ve, x2: Ee, y2: he, width: X, color: te, borderDash: A, borderDashOffset: F, tickWidth: q, tickColor: L, tickBorderDash: $, tickBorderDashOffset: se }))
        }
        return this._ticksLength = c, this._borderValue = m, h
    }
    _computeLabelItems(t) {
        const n = this.axis,
            r = this.options,
            { position: i, ticks: o } = r,
            s = this.isHorizontal(),
            a = this.ticks,
            { align: l, crossAlign: u, padding: c, mirror: d } = o,
            h = Wa(r.grid),
            y = h + c,
            w = d ? -c : y,
            b = -Gn(this.labelRotation),
            g = [];
        let m, S, k, E, P, T, I, U, z, ve, Ee, he, Re = "middle";
        if (i === "top") T = this.bottom - w, I = this._getXAxisLabelAlignment();
        else if (i === "bottom") T = this.top + w, I = this._getXAxisLabelAlignment();
        else if (i === "left") {
            const Y = this._getYAxisLabelAlignment(h);
            I = Y.textAlign, P = Y.x
        } else if (i === "right") {
            const Y = this._getYAxisLabelAlignment(h);
            I = Y.textAlign, P = Y.x
        } else if (n === "x") {
            if (i === "center") T = (t.top + t.bottom) / 2 + y;
            else if (He(i)) {
                const Y = Object.keys(i)[0],
                    X = i[Y];
                T = this.chart.scales[Y].getPixelForValue(X) + y
            }
            I = this._getXAxisLabelAlignment()
        } else if (n === "y") {
            if (i === "center") P = (t.left + t.right) / 2 - y;
            else if (He(i)) {
                const Y = Object.keys(i)[0],
                    X = i[Y];
                P = this.chart.scales[Y].getPixelForValue(X)
            }
            I = this._getYAxisLabelAlignment(h).textAlign
        }
        n === "y" && (l === "start" ? Re = "top" : l === "end" && (Re = "bottom"));
        const H = this._getLabelSizes();
        for (m = 0, S = a.length; m < S; ++m) {
            k = a[m], E = k.label;
            const Y = o.setContext(this.getContext(m));
            U = this.getPixelForTick(m) + o.labelOffset, z = this._resolveTickFontOptions(m), ve = z.lineHeight, Ee = ct(E) ? E.length : 1;
            const X = Ee / 2,
                te = Y.color,
                A = Y.textStrokeColor,
                F = Y.textStrokeWidth;
            s ? (P = U, i === "top" ? u === "near" || b !== 0 ? he = -Ee * ve + ve / 2 : u === "center" ? he = -H.highest.height / 2 - X * ve + ve : he = -H.highest.height + ve / 2 : u === "near" || b !== 0 ? he = ve / 2 : u === "center" ? he = H.highest.height / 2 - X * ve : he = H.highest.height - Ee * ve, d && (he *= -1)) : (T = U, he = (1 - Ee) * ve / 2);
            let q;
            if (Y.showLabelBackdrop) {
                const L = rn(Y.backdropPadding),
                    $ = H.heights[m],
                    se = H.widths[m];
                let ge = T + he - L.top,
                    Se = P - L.left;
                switch (Re) {
                    case "middle":
                        ge -= $ / 2;
                        break;
                    case "bottom":
                        ge -= $;
                        break
                }
                switch (I) {
                    case "center":
                        Se -= se / 2;
                        break;
                    case "right":
                        Se -= se;
                        break
                }
                q = { left: Se, top: ge, width: se + L.width, height: $ + L.height, color: Y.backdropColor }
            }
            g.push({ rotation: b, label: E, font: z, color: te, strokeColor: A, strokeWidth: F, textOffset: he, textAlign: I, textBaseline: Re, translation: [P, T], backdrop: q })
        }
        return g
    }
    _getXAxisLabelAlignment() { const { position: t, ticks: n } = this.options; if (-Gn(this.labelRotation)) return t === "top" ? "left" : "right"; let i = "center"; return n.align === "start" ? i = "left" : n.align === "end" && (i = "right"), i }
    _getYAxisLabelAlignment(t) { const { position: n, ticks: { crossAlign: r, mirror: i, padding: o } } = this.options, s = this._getLabelSizes(), a = t + o, l = s.widest.width; let u, c; return n === "left" ? i ? (c = this.right + o, r === "near" ? u = "left" : r === "center" ? (u = "center", c += l / 2) : (u = "right", c += l)) : (c = this.right - a, r === "near" ? u = "right" : r === "center" ? (u = "center", c -= l / 2) : (u = "left", c = this.left)) : n === "right" ? i ? (c = this.left + o, r === "near" ? u = "right" : r === "center" ? (u = "center", c -= l / 2) : (u = "left", c -= l)) : (c = this.left + a, r === "near" ? u = "left" : r === "center" ? (u = "center", c += l / 2) : (u = "right", c = this.right)) : u = "right", { textAlign: u, x: c } }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const t = this.chart,
            n = this.options.position;
        if (n === "left" || n === "right") return { top: 0, left: this.left, bottom: t.height, right: this.right };
        if (n === "top" || n === "bottom") return { top: this.top, left: 0, bottom: this.bottom, right: t.width }
    }
    drawBackground() {
        const { ctx: t, options: { backgroundColor: n }, left: r, top: i, width: o, height: s } = this;
        n && (t.save(), t.fillStyle = n, t.fillRect(r, i, o, s), t.restore())
    }
    getLineWidthForValue(t) { const n = this.options.grid; if (!this._isVisible() || !n.display) return 0; const i = this.ticks.findIndex(o => o.value === t); return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0 }
    drawGrid(t) {
        const n = this.options.grid,
            r = this.ctx,
            i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
        let o, s;
        const a = (l, u, c) => {!c.width || !c.color || (r.save(), r.lineWidth = c.width, r.strokeStyle = c.color, r.setLineDash(c.borderDash || []), r.lineDashOffset = c.borderDashOffset, r.beginPath(), r.moveTo(l.x, l.y), r.lineTo(u.x, u.y), r.stroke(), r.restore()) };
        if (n.display)
            for (o = 0, s = i.length; o < s; ++o) {
                const l = i[o];
                n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l), n.drawTicks && a({ x: l.tx1, y: l.ty1 }, { x: l.tx2, y: l.ty2 }, { color: l.tickColor, width: l.tickWidth, borderDash: l.tickBorderDash, borderDashOffset: l.tickBorderDashOffset })
            }
    }
    drawBorder() {
        const { chart: t, ctx: n, options: { grid: r } } = this, i = r.setContext(this.getContext()), o = r.drawBorder ? i.borderWidth : 0;
        if (!o) return;
        const s = r.setContext(this.getContext(0)).lineWidth,
            a = this._borderValue;
        let l, u, c, d;
        this.isHorizontal() ? (l = Hi(t, this.left, o) - o / 2, u = Hi(t, this.right, s) + s / 2, c = d = a) : (c = Hi(t, this.top, o) - o / 2, d = Hi(t, this.bottom, s) + s / 2, l = u = a), n.save(), n.lineWidth = i.borderWidth, n.strokeStyle = i.borderColor, n.beginPath(), n.moveTo(l, c), n.lineTo(u, d), n.stroke(), n.restore()
    }
    drawLabels(t) {
        if (!this.options.ticks.display) return;
        const r = this.ctx,
            i = this._computeLabelArea();
        i && Qu(r, i);
        const o = this._labelItems || (this._labelItems = this._computeLabelItems(t));
        let s, a;
        for (s = 0, a = o.length; s < a; ++s) {
            const l = o[s],
                u = l.font,
                c = l.label;
            l.backdrop && (r.fillStyle = l.backdrop.color, r.fillRect(l.backdrop.left, l.backdrop.top, l.backdrop.width, l.backdrop.height));
            let d = l.textOffset;
            Wo(r, c, 0, d, u, l)
        }
        i && Zu(r)
    }
    drawTitle() {
        const { ctx: t, options: { position: n, title: r, reverse: i } } = this;
        if (!r.display) return;
        const o = Bt(r.font),
            s = rn(r.padding),
            a = r.align;
        let l = o.lineHeight / 2;
        n === "bottom" || n === "center" || He(n) ? (l += s.bottom, ct(r.text) && (l += o.lineHeight * (r.text.length - 1))) : l += s.top;
        const { titleX: u, titleY: c, maxWidth: d, rotation: h } = fO(this, l, n, a);
        Wo(t, r.text, 0, 0, o, { color: r.color, maxWidth: d, rotation: h, textAlign: cO(a, n, i), textBaseline: "middle", translation: [u, c] })
    }
    draw(t) {!this._isVisible() || (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t)) }
    _layers() {
        const t = this.options,
            n = t.ticks && t.ticks.z || 0,
            r = Fe(t.grid && t.grid.z, -1);
        return !this._isVisible() || this.draw !== Xi.prototype.draw ? [{ z: n, draw: i => { this.draw(i) } }] : [{ z: r, draw: i => { this.drawBackground(), this.drawGrid(i), this.drawTitle() } }, { z: r + 1, draw: () => { this.drawBorder() } }, { z: n, draw: i => { this.drawLabels(i) } }]
    }
    getMatchingVisibleMetas(t) {
        const n = this.chart.getSortedVisibleDatasetMetas(),
            r = this.axis + "AxisID",
            i = [];
        let o, s;
        for (o = 0, s = n.length; o < s; ++o) {
            const a = n[o];
            a[r] === this.id && (!t || a.type === t) && i.push(a)
        }
        return i
    }
    _resolveTickFontOptions(t) { const n = this.options.ticks.setContext(this.getContext(t)); return Bt(n.font) }
    _maxDigits() { const t = this._resolveTickFontOptions(0).lineHeight; return (this.isHorizontal() ? this.width : this.height) / t }
}
class cc {
    constructor(t, n, r) { this.type = t, this.scope = n, this.override = r, this.items = Object.create(null) }
    isForType(t) { return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype) }
    register(t) {
        const n = Object.getPrototypeOf(t);
        let r;
        pO(n) && (r = this.register(n));
        const i = this.items,
            o = t.id,
            s = this.scope + "." + o;
        if (!o) throw new Error("class does not have id: " + t);
        return o in i || (i[o] = t, dO(t, s, r), this.override && Ye.override(t.id, t.overrides)), s
    }
    get(t) { return this.items[t] }
    unregister(t) {
        const n = this.items,
            r = t.id,
            i = this.scope;
        r in n && delete n[r], i && r in Ye[i] && (delete Ye[i][r], this.override && delete Wi[r])
    }
}

function dO(e, t, n) {
    const r = _a(Object.create(null), [n ? Ye.get(n) : {}, Ye.get(t), e.defaults]);
    Ye.set(t, r), e.defaultRoutes && hO(t, e.defaultRoutes), e.descriptors && Ye.describe(t, e.descriptors)
}

function hO(e, t) {
    Object.keys(t).forEach(n => {
        const r = n.split("."),
            i = r.pop(),
            o = [e].concat(r).join("."),
            s = t[n].split("."),
            a = s.pop(),
            l = s.join(".");
        Ye.route(o, i, l, a)
    })
}

function pO(e) { return "id" in e && "defaults" in e }
class mO {
    constructor() { this.controllers = new cc(ar, "datasets", !0), this.elements = new cc(lr, "elements"), this.plugins = new cc(Object, "plugins"), this.scales = new cc(Xi, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements] }
    add(...t) { this._each("register", t) }
    remove(...t) { this._each("unregister", t) }
    addControllers(...t) { this._each("register", t, this.controllers) }
    addElements(...t) { this._each("register", t, this.elements) }
    addPlugins(...t) { this._each("register", t, this.plugins) }
    addScales(...t) { this._each("register", t, this.scales) }
    getController(t) { return this._get(t, this.controllers, "controller") }
    getElement(t) { return this._get(t, this.elements, "element") }
    getPlugin(t) { return this._get(t, this.plugins, "plugin") }
    getScale(t) { return this._get(t, this.scales, "scale") }
    removeControllers(...t) { this._each("unregister", t, this.controllers) }
    removeElements(...t) { this._each("unregister", t, this.elements) }
    removePlugins(...t) { this._each("unregister", t, this.plugins) }
    removeScales(...t) { this._each("unregister", t, this.scales) }
    _each(t, n, r) {
        [...n].forEach(i => {
            const o = r || this._getRegistryForType(i);
            r || o.isForType(i) || o === this.plugins && i.id ? this._exec(t, o, i) : et(i, s => {
                const a = r || this._getRegistryForType(s);
                this._exec(t, a, s)
            })
        })
    }
    _exec(t, n, r) {
        const i = Uh(t);
        st(r["before" + i], [], r), n[t](r), st(r["after" + i], [], r)
    }
    _getRegistryForType(t) { for (let n = 0; n < this._typedRegistries.length; n++) { const r = this._typedRegistries[n]; if (r.isForType(t)) return r } return this.plugins }
    _get(t, n, r) { const i = n.get(t); if (i === void 0) throw new Error('"' + t + '" is not a registered ' + r + "."); return i }
}
var Cr = new mO;
class gO {
    constructor() { this._init = [] }
    notify(t, n, r, i) {
        n === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
        const o = i ? this._descriptors(t).filter(i) : this._descriptors(t),
            s = this._notify(o, t, n, r);
        return n === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), s
    }
    _notify(t, n, r, i) {
        i = i || {};
        for (const o of t) {
            const s = o.plugin,
                a = s[r],
                l = [n, i, o.options];
            if (st(a, l, s) === !1 && i.cancelable) return !1
        }
        return !0
    }
    invalidate() { Je(this._cache) || (this._oldCache = this._cache, this._cache = void 0) }
    _descriptors(t) { if (this._cache) return this._cache; const n = this._cache = this._createDescriptors(t); return this._notifyStateChanges(t), n }
    _createDescriptors(t, n) {
        const r = t && t.config,
            i = Fe(r.options && r.options.plugins, {}),
            o = yO(r);
        return i === !1 && !n ? [] : wO(t, o, i, n)
    }
    _notifyStateChanges(t) {
        const n = this._oldCache || [],
            r = this._cache,
            i = (o, s) => o.filter(a => !s.some(l => a.plugin.id === l.plugin.id));
        this._notify(i(n, r), t, "stop"), this._notify(i(r, n), t, "start")
    }
}

function yO(e) {
    const t = [],
        n = Object.keys(Cr.plugins.items);
    for (let i = 0; i < n.length; i++) t.push(Cr.getPlugin(n[i]));
    const r = e.plugins || [];
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        t.indexOf(o) === -1 && t.push(o)
    }
    return t
}

function vO(e, t) { return !t && e === !1 ? null : e === !0 ? {} : e }

function wO(e, t, n, r) {
    const i = [],
        o = e.getContext();
    for (let s = 0; s < t.length; s++) {
        const a = t[s],
            l = a.id,
            u = vO(n[l], r);
        u !== null && i.push({ plugin: a, options: xO(e.config, a, u, o) })
    }
    return i
}

function xO(e, t, n, r) {
    const i = e.pluginScopeKeys(t),
        o = e.getOptionScopes(n, i);
    return e.createResolver(o, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
}

function Sp(e, t) { const n = Ye.datasets[e] || {}; return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x" }

function bO(e, t) { let n = e; return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n }

function _O(e, t) { return e === t ? "_index_" : "_value_" }

function SO(e) { if (e === "top" || e === "bottom") return "x"; if (e === "left" || e === "right") return "y" }

function kp(e, t) { return e === "x" || e === "y" ? e : t.axis || SO(t.position) || e.charAt(0).toLowerCase() }

function kO(e, t) {
    const n = Wi[e.type] || { scales: {} },
        r = t.scales || {},
        i = Sp(e.type, t),
        o = Object.create(null),
        s = Object.create(null);
    return Object.keys(r).forEach(a => {
        const l = r[a];
        if (!He(l)) return console.error(`Invalid scale configuration for scale: ${a}`);
        if (l._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
        const u = kp(a, l),
            c = _O(u, i),
            d = n.scales || {};
        o[u] = o[u] || a, s[a] = Sa(Object.create(null), [{ axis: u }, l, d[u], d[c]])
    }), e.data.datasets.forEach(a => {
        const l = a.type || e.type,
            u = a.indexAxis || Sp(l, t),
            d = (Wi[l] || {}).scales || {};
        Object.keys(d).forEach(h => {
            const y = bO(h, u),
                w = a[y + "AxisID"] || o[y] || y;
            s[w] = s[w] || Object.create(null), Sa(s[w], [{ axis: y }, r[w], d[h]])
        })
    }), Object.keys(s).forEach(a => {
        const l = s[a];
        Sa(l, [Ye.scales[l.type], Ye.scale])
    }), s
}

function vw(e) {
    const t = e.options || (e.options = {});
    t.plugins = Fe(t.plugins, {}), t.scales = kO(e, t)
}

function ww(e) { return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e }

function CO(e) { return e = e || {}, e.data = ww(e.data), vw(e), e }
const xw = new Map,
    bw = new Set;

function fc(e, t) { let n = xw.get(e); return n || (n = t(), xw.set(e, n), bw.add(n)), n }
const Ha = (e, t, n) => {
    const r = Bi(t, n);
    r !== void 0 && e.add(r)
};
class MO {
    constructor(t) { this._config = CO(t), this._scopeCache = new Map, this._resolverCache = new Map }
    get platform() { return this._config.platform }
    get type() { return this._config.type }
    set type(t) { this._config.type = t }
    get data() { return this._config.data }
    set data(t) { this._config.data = ww(t) }
    get options() { return this._config.options }
    set options(t) { this._config.options = t }
    get plugins() { return this._config.plugins }
    update() {
        const t = this._config;
        this.clearCache(), vw(t)
    }
    clearCache() { this._scopeCache.clear(), this._resolverCache.clear() }
    datasetScopeKeys(t) {
        return fc(t, () => [
            [`datasets.${t}`, ""]
        ])
    }
    datasetAnimationScopeKeys(t, n) {
        return fc(`${t}.transition.${n}`, () => [
            [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
            [`datasets.${t}`, ""]
        ])
    }
    datasetElementScopeKeys(t, n) {
        return fc(`${t}-${n}`, () => [
            [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""]
        ])
    }
    pluginScopeKeys(t) {
        const n = t.id,
            r = this.type;
        return fc(`${r}-plugin-${n}`, () => [
            [`plugins.${n}`, ...t.additionalOptionScopes || []]
        ])
    }
    _cachedScopes(t, n) { const r = this._scopeCache; let i = r.get(t); return (!i || n) && (i = new Map, r.set(t, i)), i }
    getOptionScopes(t, n, r) {
        const { options: i, type: o } = this, s = this._cachedScopes(t, r), a = s.get(n);
        if (a) return a;
        const l = new Set;
        n.forEach(c => { t && (l.add(t), c.forEach(d => Ha(l, t, d))), c.forEach(d => Ha(l, i, d)), c.forEach(d => Ha(l, Wi[o] || {}, d)), c.forEach(d => Ha(l, Ye, d)), c.forEach(d => Ha(l, tp, d)) });
        const u = Array.from(l);
        return u.length === 0 && u.push(Object.create(null)), bw.has(n) && s.set(n, u), u
    }
    chartOptionScopes() { const { options: t, type: n } = this; return [t, Wi[n] || {}, Ye.datasets[n] || {}, { type: n }, Ye, tp] }
    resolveNamedOptions(t, n, r, i = [""]) {
        const o = { $shared: !0 },
            { resolver: s, subPrefixes: a } = _w(this._resolverCache, t, i);
        let l = s;
        if (OO(s, n)) {
            o.$shared = !1, r = si(r) ? r() : r;
            const u = this.createResolver(t, r, a);
            l = Yo(s, r, u)
        }
        for (const u of n) o[u] = l[u];
        return o
    }
    createResolver(t, n, r = [""], i) { const { resolver: o } = _w(this._resolverCache, t, r); return He(n) ? Yo(o, n, void 0, i) : o }
}

function _w(e, t, n) {
    let r = e.get(t);
    r || (r = new Map, e.set(t, r));
    const i = n.join();
    let o = r.get(i);
    return o || (o = { resolver: op(t, n), subPrefixes: n.filter(a => !a.toLowerCase().includes("hover")) }, r.set(i, o)), o
}
const EO = e => He(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || si(e[n]), !1);

function OO(e, t) {
    const { isScriptable: n, isIndexable: r } = _1(e);
    for (const i of t) {
        const o = n(i),
            s = r(i),
            a = (s || o) && e[i];
        if (o && (si(a) || EO(a)) || s && ct(a)) return !0
    }
    return !1
}
var DO = "3.7.0";
const PO = ["top", "bottom", "left", "right", "chartArea"];

function Sw(e, t) { return e === "top" || e === "bottom" || PO.indexOf(e) === -1 && t === "x" }

function kw(e, t) { return function(n, r) { return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e] } }

function Cw(e) {
    const t = e.chart,
        n = t.options.animation;
    t.notifyPlugins("afterRender"), st(n && n.onComplete, [e], t)
}

function RO(e) {
    const t = e.chart,
        n = t.options.animation;
    st(n && n.onProgress, [e], t)
}

function Mw(e) { return D1() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e }
const dc = {},
    Ew = e => { const t = Mw(e); return Object.values(dc).filter(n => n.canvas === t).pop() };

function TO(e, t, n) {
    const r = Object.keys(e);
    for (const i of r) {
        const o = +i;
        if (o >= t) {
            const s = e[i];
            delete e[i], (n > 0 || o > t) && (e[o + n] = s)
        }
    }
}

function AO(e, t, n, r) { return !n || e.type === "mouseout" ? null : r ? t : e }
class Ow {
    constructor(t, n) {
        const r = this.config = new MO(n),
            i = Mw(t),
            o = Ew(i);
        if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas can be reused.");
        const s = r.createResolver(r.chartOptionScopes(), this.getContext());
        this.platform = new(r.platform || QE(i)), this.platform.updateConfig(r);
        const a = this.platform.acquireContext(i, s.aspectRatio),
            l = a && a.canvas,
            u = l && l.height,
            c = l && l.width;
        if (this.id = _C(), this.ctx = a, this.canvas = l, this.width = c, this.height = u, this._options = s, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new gO, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = xC(d => this.update(d), s.resizeDelay || 0), this._dataChanges = [], dc[this.id] = this, !a || !l) { console.error("Failed to create chart: can't acquire context from the given item"); return }
        kr.listen(this, "complete", Cw), kr.listen(this, "progress", RO), this._initialize(), this.attached && this.update()
    }
    get aspectRatio() { const { options: { aspectRatio: t, maintainAspectRatio: n }, width: r, height: i, _aspectRatio: o } = this; return Je(t) ? n && o ? o : i ? r / i : null : t }
    get data() { return this.config.data }
    set data(t) { this.config.data = t }
    get options() { return this._options }
    set options(t) { this.config.options = t }
    _initialize() { return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : R1(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this }
    clear() { return y1(this.canvas, this.ctx), this }
    stop() { return kr.stop(this), this }
    resize(t, n) { kr.running(this) ? this._resizeBeforeDraw = { width: t, height: n } : this._resize(t, n) }
    _resize(t, n) {
        const r = this.options,
            i = this.canvas,
            o = r.maintainAspectRatio && this.aspectRatio,
            s = this.platform.getMaximumSize(i, t, n, o),
            a = r.devicePixelRatio || this.platform.getDevicePixelRatio(),
            l = this.width ? "resize" : "attach";
        this.width = s.width, this.height = s.height, this._aspectRatio = this.aspectRatio, !!R1(this, a, !0) && (this.notifyPlugins("resize", { size: s }), st(r.onResize, [this, s], this), this.attached && this._doResize(l) && this.render())
    }
    ensureScalesHaveIDs() {
        const n = this.options.scales || {};
        et(n, (r, i) => { r.id = i })
    }
    buildOrUpdateScales() {
        const t = this.options,
            n = t.scales,
            r = this.scales,
            i = Object.keys(r).reduce((s, a) => (s[a] = !1, s), {});
        let o = [];
        n && (o = o.concat(Object.keys(n).map(s => {
            const a = n[s],
                l = kp(s, a),
                u = l === "r",
                c = l === "x";
            return { options: a, dposition: u ? "chartArea" : c ? "bottom" : "left", dtype: u ? "radialLinear" : c ? "category" : "linear" }
        }))), et(o, s => {
            const a = s.options,
                l = a.id,
                u = kp(l, a),
                c = Fe(a.type, s.dtype);
            (a.position === void 0 || Sw(a.position, u) !== Sw(s.dposition)) && (a.position = s.dposition), i[l] = !0;
            let d = null;
            if (l in r && r[l].type === c) d = r[l];
            else {
                const h = Cr.getScale(c);
                d = new h({ id: l, type: c, ctx: this.ctx, chart: this }), r[d.id] = d
            }
            d.init(a, t)
        }), et(i, (s, a) => { s || delete r[a] }), et(r, s => { li.configure(this, s, s.options), li.addBox(this, s) })
    }
    _updateMetasets() {
        const t = this._metasets,
            n = this.data.datasets.length,
            r = t.length;
        if (t.sort((i, o) => i.index - o.index), r > n) {
            for (let i = n; i < r; ++i) this._destroyDatasetMeta(i);
            t.splice(n, r - n)
        }
        this._sortedMetasets = t.slice(0).sort(kw("order", "index"))
    }
    _removeUnreferencedMetasets() {
        const { _metasets: t, data: { datasets: n } } = this;
        t.length > n.length && delete this._stacks, t.forEach((r, i) => { n.filter(o => o === r._dataset).length === 0 && this._destroyDatasetMeta(i) })
    }
    buildOrUpdateControllers() {
        const t = [],
            n = this.data.datasets;
        let r, i;
        for (this._removeUnreferencedMetasets(), r = 0, i = n.length; r < i; r++) {
            const o = n[r];
            let s = this.getDatasetMeta(r);
            const a = o.type || this.config.type;
            if (s.type && s.type !== a && (this._destroyDatasetMeta(r), s = this.getDatasetMeta(r)), s.type = a, s.indexAxis = o.indexAxis || Sp(a, this.options), s.order = o.order || 0, s.index = r, s.label = "" + o.label, s.visible = this.isDatasetVisible(r), s.controller) s.controller.updateIndex(r), s.controller.linkScales();
            else {
                const l = Cr.getController(a),
                    { datasetElementType: u, dataElementType: c } = Ye.datasets[a];
                Object.assign(l.prototype, { dataElementType: Cr.getElement(c), datasetElementType: u && Cr.getElement(u) }), s.controller = new l(this, r), t.push(s.controller)
            }
        }
        return this._updateMetasets(), t
    }
    _resetElements() { et(this.data.datasets, (t, n) => { this.getDatasetMeta(n).controller.reset() }, this) }
    reset() { this._resetElements(), this.notifyPlugins("reset") }
    update(t) {
        const n = this.config;
        n.update();
        const r = this._options = n.createResolver(n.chartOptionScopes(), this.getContext()),
            i = this._animationsDisabled = !r.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1) return;
        const o = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let s = 0;
        for (let u = 0, c = this.data.datasets.length; u < c; u++) {
            const { controller: d } = this.getDatasetMeta(u), h = !i && o.indexOf(d) === -1;
            d.buildOrUpdateElements(h), s = Math.max(+d.getMaxOverflow(), s)
        }
        s = this._minPadding = r.layout.autoPadding ? s : 0, this._updateLayout(s), i || et(o, u => { u.reset() }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", { mode: t }), this._layers.sort(kw("z", "_idx"));
        const { _active: a, _lastEvent: l } = this;
        l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render()
    }
    _updateScales() { et(this.scales, t => { li.removeBox(this, t) }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales() }
    _checkEventBindings() {
        const t = this.options,
            n = new Set(Object.keys(this._listeners)),
            r = new Set(t.events);
        (!Jv(n, r) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents())
    }
    _updateHiddenIndices() {
        const { _hiddenIndices: t } = this, n = this._getUniformDataChanges() || [];
        for (const { method: r, start: i, count: o }
            of n) {
            const s = r === "_removeElements" ? -o : o;
            TO(t, i, s)
        }
    }
    _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const n = this.data.datasets.length,
            r = o => new Set(t.filter(s => s[0] === o).map((s, a) => a + "," + s.splice(1).join(","))),
            i = r(0);
        for (let o = 1; o < n; o++)
            if (!Jv(i, r(o))) return;
        return Array.from(i).map(o => o.split(",")).map(o => ({ method: o[1], start: +o[2], count: +o[3] }))
    }
    _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
        li.update(this, this.width, this.height, t);
        const n = this.chartArea,
            r = n.width <= 0 || n.height <= 0;
        this._layers = [], et(this.boxes, i => { r && i.position === "chartArea" || (i.configure && i.configure(), this._layers.push(...i._layers())) }, this), this._layers.forEach((i, o) => { i._idx = o }), this.notifyPlugins("afterLayout")
    }
    _updateDatasets(t) {
        if (this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 }) !== !1) {
            for (let n = 0, r = this.data.datasets.length; n < r; ++n) this.getDatasetMeta(n).controller.configure();
            for (let n = 0, r = this.data.datasets.length; n < r; ++n) this._updateDataset(n, si(t) ? t({ datasetIndex: n }) : t);
            this.notifyPlugins("afterDatasetsUpdate", { mode: t })
        }
    }
    _updateDataset(t, n) {
        const r = this.getDatasetMeta(t),
            i = { meta: r, index: t, mode: n, cancelable: !0 };
        this.notifyPlugins("beforeDatasetUpdate", i) !== !1 && (r.controller._update(n), i.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", i))
    }
    render() { this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 && (kr.has(this) ? this.attached && !kr.running(this) && kr.start(this) : (this.draw(), Cw({ chart: this }))) }
    draw() {
        let t;
        if (this._resizeBeforeDraw) {
            const { width: r, height: i } = this._resizeBeforeDraw;
            this._resize(r, i), this._resizeBeforeDraw = null
        }
        if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1) return;
        const n = this._layers;
        for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
        for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw")
    }
    _getSortedDatasetMetas(t) {
        const n = this._sortedMetasets,
            r = [];
        let i, o;
        for (i = 0, o = n.length; i < o; ++i) {
            const s = n[i];
            (!t || s.visible) && r.push(s)
        }
        return r
    }
    getSortedVisibleDatasetMetas() { return this._getSortedDatasetMetas(!0) }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1) return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
        this.notifyPlugins("afterDatasetsDraw")
    }
    _drawDataset(t) {
        const n = this.ctx,
            r = t._clip,
            i = !r.disabled,
            o = this.chartArea,
            s = { meta: t, index: t.index, cancelable: !0 };
        this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (i && Qu(n, { left: r.left === !1 ? 0 : o.left - r.left, right: r.right === !1 ? this.width : o.right + r.right, top: r.top === !1 ? 0 : o.top - r.top, bottom: r.bottom === !1 ? this.height : o.bottom + r.bottom }), t.controller.draw(), i && Zu(n), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s))
    }
    getElementsAtEventForMode(t, n, r, i) { const o = PE.modes[n]; return typeof o == "function" ? o(this, t, r, i) : [] }
    getDatasetMeta(t) {
        const n = this.data.datasets[t],
            r = this._metasets;
        let i = r.filter(o => o && o._dataset === n).pop();
        return i || (i = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: n && n.order || 0, index: t, _dataset: n, _parsed: [], _sorted: !1 }, r.push(i)), i
    }
    getContext() { return this.$context || (this.$context = ai(null, { chart: this, type: "chart" })) }
    getVisibleDatasetCount() { return this.getSortedVisibleDatasetMetas().length }
    isDatasetVisible(t) { const n = this.data.datasets[t]; if (!n) return !1; const r = this.getDatasetMeta(t); return typeof r.hidden == "boolean" ? !r.hidden : !n.hidden }
    setDatasetVisibility(t, n) {
        const r = this.getDatasetMeta(t);
        r.hidden = !n
    }
    toggleDataVisibility(t) { this._hiddenIndices[t] = !this._hiddenIndices[t] }
    getDataVisibility(t) { return !this._hiddenIndices[t] }
    _updateVisibility(t, n, r) {
        const i = r ? "show" : "hide",
            o = this.getDatasetMeta(t),
            s = o.controller._resolveAnimations(void 0, i);
        Fn(n) ? (o.data[n].hidden = !r, this.update()) : (this.setDatasetVisibility(t, r), s.update(o, { visible: r }), this.update(a => a.datasetIndex === t ? i : void 0))
    }
    hide(t, n) { this._updateVisibility(t, n, !1) }
    show(t, n) { this._updateVisibility(t, n, !0) }
    _destroyDatasetMeta(t) {
        const n = this._metasets[t];
        n && n.controller && n.controller._destroy(), delete this._metasets[t]
    }
    _stop() { let t, n; for (this.stop(), kr.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t) this._destroyDatasetMeta(t) }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const { canvas: t, ctx: n } = this;
        this._stop(), this.config.clearCache(), t && (this.unbindEvents(), y1(t, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete dc[this.id], this.notifyPlugins("afterDestroy")
    }
    toBase64Image(...t) { return this.canvas.toDataURL(...t) }
    bindEvents() { this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0 }
    bindUserEvents() {
        const t = this._listeners,
            n = this.platform,
            r = (o, s) => { n.addEventListener(this, o, s), t[o] = s },
            i = (o, s, a) => { o.offsetX = s, o.offsetY = a, this._eventHandler(o) };
        et(this.options.events, o => r(o, i))
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners,
            n = this.platform,
            r = (l, u) => { n.addEventListener(this, l, u), t[l] = u },
            i = (l, u) => { t[l] && (n.removeEventListener(this, l, u), delete t[l]) },
            o = (l, u) => { this.canvas && this.resize(l, u) };
        let s;
        const a = () => { i("attach", a), this.attached = !0, this.resize(), r("resize", o), r("detach", s) };
        s = () => { this.attached = !1, i("resize", o), this._stop(), this._resize(0, 0), r("attach", a) }, n.isAttached(this.canvas) ? a() : s()
    }
    unbindEvents() { et(this._listeners, (t, n) => { this.platform.removeEventListener(this, n, t) }), this._listeners = {}, et(this._responsiveListeners, (t, n) => { this.platform.removeEventListener(this, n, t) }), this._responsiveListeners = void 0 }
    updateHoverStyle(t, n, r) {
        const i = r ? "set" : "remove";
        let o, s, a, l;
        for (n === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + i + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
            s = t[a];
            const u = s && this.getDatasetMeta(s.datasetIndex).controller;
            u && u[i + "HoverStyle"](s.element, s.datasetIndex, s.index)
        }
    }
    getActiveElements() { return this._active || [] }
    setActiveElements(t) {
        const n = this._active || [],
            r = t.map(({ datasetIndex: o, index: s }) => { const a = this.getDatasetMeta(o); if (!a) throw new Error("No dataset found at index " + o); return { datasetIndex: o, element: a.data[s], index: s } });
        !Bu(r, n) && (this._active = r, this._lastEvent = null, this._updateHoverStyles(r, n))
    }
    notifyPlugins(t, n, r) { return this._plugins.notify(this, t, n, r) }
    _updateHoverStyles(t, n, r) {
        const i = this.options.hover,
            o = (l, u) => l.filter(c => !u.some(d => c.datasetIndex === d.datasetIndex && c.index === d.index)),
            s = o(n, t),
            a = r ? t : o(t, n);
        s.length && this.updateHoverStyle(s, i.mode, !1), a.length && i.mode && this.updateHoverStyle(a, i.mode, !0)
    }
    _eventHandler(t, n) {
        const r = { event: t, replay: n, cancelable: !0, inChartArea: Yi(t, this.chartArea, this._minPadding) },
            i = s => (s.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", r, i) === !1) return;
        const o = this._handleEvent(t, n, r.inChartArea);
        return r.cancelable = !1, this.notifyPlugins("afterEvent", r, i), (o || r.changed) && this.render(), this
    }
    _handleEvent(t, n, r) {
        const { _active: i = [], options: o } = this, s = n, a = this._getActiveElements(t, i, r, s), l = OC(t), u = AO(t, this._lastEvent, r, l);
        r && (this._lastEvent = null, st(o.onHover, [t, a, this], this), l && st(o.onClick, [t, a, this], this));
        const c = !Bu(a, i);
        return (c || n) && (this._active = a, this._updateHoverStyles(a, i, n)), this._lastEvent = u, c
    }
    _getActiveElements(t, n, r, i) { if (t.type === "mouseout") return []; if (!r) return n; const o = this.options.hover; return this.getElementsAtEventForMode(t, o.mode, o, i) }
}
const Dw = () => et(Ow.instances, e => e._plugins.invalidate()),
    ui = !0;
Object.defineProperties(Ow, { defaults: { enumerable: ui, value: Ye }, instances: { enumerable: ui, value: dc }, overrides: { enumerable: ui, value: Wi }, registry: { enumerable: ui, value: Cr }, version: { enumerable: ui, value: DO }, getChart: { enumerable: ui, value: Ew }, register: { enumerable: ui, value: (...e) => { Cr.add(...e), Dw() } }, unregister: { enumerable: ui, value: (...e) => { Cr.remove(...e), Dw() } } });

function Pw(e, t, n) {
    const { startAngle: r, pixelMargin: i, x: o, y: s, outerRadius: a, innerRadius: l } = t;
    let u = i / a;
    e.beginPath(), e.arc(o, s, a, r - u, n + u), l > i ? (u = i / l, e.arc(o, s, l, n + u, r - u, !0)) : e.arc(o, s, i, n + xt, r - xt), e.closePath(), e.clip()
}

function LO(e) { return rp(e, ["outerStart", "outerEnd", "innerStart", "innerEnd"]) }

function FO(e, t, n, r) {
    const i = LO(e.options.borderRadius),
        o = (n - t) / 2,
        s = Math.min(o, r * t / 2),
        a = l => { const u = (n - Math.min(o, l)) * r / 2; return Xt(l, 0, Math.min(o, u)) };
    return { outerStart: a(i.outerStart), outerEnd: a(i.outerEnd), innerStart: Xt(i.innerStart, 0, s), innerEnd: Xt(i.innerEnd, 0, s) }
}

function Uo(e, t, n, r) { return { x: n + e * Math.cos(t), y: r + e * Math.sin(t) } }

function Cp(e, t, n, r, i) {
    const { x: o, y: s, startAngle: a, pixelMargin: l, innerRadius: u } = t, c = Math.max(t.outerRadius + r + n - l, 0), d = u > 0 ? u + r + n + l : 0;
    let h = 0;
    const y = i - a;
    if (r) {
        const X = u > 0 ? u - r : 0,
            te = c > 0 ? c - r : 0,
            A = (X + te) / 2,
            F = A !== 0 ? y * A / (A + r) : y;
        h = (y - F) / 2
    }
    const w = Math.max(.001, y * c - n / wt) / c,
        b = (y - w) / 2,
        g = a + b + h,
        m = i - b - h,
        { outerStart: S, outerEnd: k, innerStart: E, innerEnd: P } = FO(t, d, c, m - g),
        T = c - S,
        I = c - k,
        U = g + S / T,
        z = m - k / I,
        ve = d + E,
        Ee = d + P,
        he = g + E / ve,
        Re = m - P / Ee;
    if (e.beginPath(), e.arc(o, s, c, U, z), k > 0) {
        const X = Uo(I, z, o, s);
        e.arc(X.x, X.y, k, z, m + xt)
    }
    const H = Uo(Ee, m, o, s);
    if (e.lineTo(H.x, H.y), P > 0) {
        const X = Uo(Ee, Re, o, s);
        e.arc(X.x, X.y, P, m + xt, Re + Math.PI)
    }
    if (e.arc(o, s, d, m - P / d, g + E / d, !0), E > 0) {
        const X = Uo(ve, he, o, s);
        e.arc(X.x, X.y, E, he + Math.PI, g - xt)
    }
    const Y = Uo(T, g, o, s);
    if (e.lineTo(Y.x, Y.y), S > 0) {
        const X = Uo(T, U, o, s);
        e.arc(X.x, X.y, S, g - xt, U)
    }
    e.closePath()
}

function IO(e, t, n, r) {
    const { fullCircles: i, startAngle: o, circumference: s } = t;
    let a = t.endAngle;
    if (i) {
        Cp(e, t, n, r, o + it);
        for (let l = 0; l < i; ++l) e.fill();
        isNaN(s) || (a = o + s % it, s % it == 0 && (a += it))
    }
    return Cp(e, t, n, r, a), e.fill(), a
}

function NO(e, t, n) { const { x: r, y: i, startAngle: o, pixelMargin: s, fullCircles: a } = t, l = Math.max(t.outerRadius - s, 0), u = t.innerRadius + s; let c; for (n && Pw(e, t, o + it), e.beginPath(), e.arc(r, i, u, o + it, o, !0), c = 0; c < a; ++c) e.stroke(); for (e.beginPath(), e.arc(r, i, l, o, o + it), c = 0; c < a; ++c) e.stroke() }

function jO(e, t, n, r, i) { const { options: o } = t, { borderWidth: s, borderJoinStyle: a } = o, l = o.borderAlign === "inner";!s || (l ? (e.lineWidth = s * 2, e.lineJoin = a || "round") : (e.lineWidth = s, e.lineJoin = a || "bevel"), t.fullCircles && NO(e, t, l), l && Pw(e, t, i), Cp(e, t, n, r, i), e.stroke()) }
class Mp extends lr {
    constructor(t) {
        super();
        this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
    }
    inRange(t, n, r) {
        const i = this.getProps(["x", "y"], r),
            { angle: o, distance: s } = i1(i, { x: t, y: n }),
            { startAngle: a, endAngle: l, innerRadius: u, outerRadius: c, circumference: d } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], r),
            h = this.options.spacing / 2,
            w = Fe(d, l - a) >= it || Ea(o, a, l),
            b = Sr(s, u + h, c + h);
        return w && b
    }
    getCenterPoint(t) { const { x: n, y: r, startAngle: i, endAngle: o, innerRadius: s, outerRadius: a } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t), { offset: l, spacing: u } = this.options, c = (i + o) / 2, d = (s + a + u + l) / 2; return { x: n + Math.cos(c) * d, y: r + Math.sin(c) * d } }
    tooltipPosition(t) { return this.getCenterPoint(t) }
    draw(t) {
        const { options: n, circumference: r } = this, i = (n.offset || 0) / 2, o = (n.spacing || 0) / 2;
        if (this.pixelMargin = n.borderAlign === "inner" ? .33 : 0, this.fullCircles = r > it ? Math.floor(r / it) : 0, r === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        t.save();
        let s = 0;
        if (i) {
            s = i / 2;
            const l = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(l) * s, Math.sin(l) * s), this.circumference >= wt && (s = i)
        }
        t.fillStyle = n.backgroundColor, t.strokeStyle = n.borderColor;
        const a = IO(t, this, s, o);
        jO(t, this, s, o, a), t.restore()
    }
}
Mp.id = "arc";
Mp.defaults = { borderAlign: "center", borderColor: "#fff", borderJoinStyle: void 0, borderRadius: 0, borderWidth: 2, offset: 0, spacing: 0, angle: void 0 };
Mp.defaultRoutes = { backgroundColor: "backgroundColor" };

function Rw(e, t, n = t) { e.lineCap = Fe(n.borderCapStyle, t.borderCapStyle), e.setLineDash(Fe(n.borderDash, t.borderDash)), e.lineDashOffset = Fe(n.borderDashOffset, t.borderDashOffset), e.lineJoin = Fe(n.borderJoinStyle, t.borderJoinStyle), e.lineWidth = Fe(n.borderWidth, t.borderWidth), e.strokeStyle = Fe(n.borderColor, t.borderColor) }

function zO(e, t, n) { e.lineTo(n.x, n.y) }

function BO(e) { return e.stepped ? rM : e.tension || e.cubicInterpolationMode === "monotone" ? iM : zO }

function Tw(e, t, n = {}) {
    const r = e.length,
        { start: i = 0, end: o = r - 1 } = n,
        { start: s, end: a } = t,
        l = Math.max(i, s),
        u = Math.min(o, a),
        c = i < s && o < s || i > a && o > a;
    return { count: r, start: l, loop: t.loop, ilen: u < l && !c ? r + u - l : u - l }
}

function WO(e, t, n, r) { const { points: i, options: o } = t, { count: s, start: a, loop: l, ilen: u } = Tw(i, n, r), c = BO(o); let { move: d = !0, reverse: h } = r || {}, y, w, b; for (y = 0; y <= u; ++y) w = i[(a + (h ? u - y : y)) % s], !w.skip && (d ? (e.moveTo(w.x, w.y), d = !1) : c(e, b, w, h, o.stepped), b = w); return l && (w = i[(a + (h ? u : 0)) % s], c(e, b, w, h, o.stepped)), !!l }

function HO(e, t, n, r) {
    const i = t.points,
        { count: o, start: s, ilen: a } = Tw(i, n, r),
        { move: l = !0, reverse: u } = r || {};
    let c = 0,
        d = 0,
        h, y, w, b, g, m;
    const S = E => (s + (u ? a - E : E)) % o,
        k = () => { b !== g && (e.lineTo(c, g), e.lineTo(c, b), e.lineTo(c, m)) };
    for (l && (y = i[S(0)], e.moveTo(y.x, y.y)), h = 0; h <= a; ++h) {
        if (y = i[S(h)], y.skip) continue;
        const E = y.x,
            P = y.y,
            T = E | 0;
        T === w ? (P < b ? b = P : P > g && (g = P), c = (d * c + E) / ++d) : (k(), e.lineTo(E, P), w = T, d = 0, b = g = P), m = P
    }
    k()
}

function Ep(e) {
    const t = e.options,
        n = t.borderDash && t.borderDash.length;
    return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !n ? HO : WO
}

function YO(e) { return e.stepped ? jM : e.tension || e.cubicInterpolationMode === "monotone" ? zM : Ui }

function $O(e, t, n, r) {
    let i = t._path;
    i || (i = t._path = new Path2D, t.path(i, n, r) && i.closePath()), Rw(e, t.options), e.stroke(i)
}

function VO(e, t, n, r) { const { segments: i, options: o } = t, s = Ep(t); for (const a of i) Rw(e, o, a.style), e.beginPath(), s(e, t, a, { start: n, end: n + r - 1 }) && e.closePath(), e.stroke() }
const UO = typeof Path2D == "function";

function GO(e, t, n, r) { UO && !t.options.segment ? $O(e, t, n, r) : VO(e, t, n, r) }
class qi extends lr {
    constructor(t) {
        super();
        this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
    }
    updateControlPoints(t, n) {
        const r = this.options;
        if ((r.tension || r.cubicInterpolationMode === "monotone") && !r.stepped && !this._pointsUpdated) {
            const i = r.spanGaps ? this._loop : this._fullLoop;
            PM(this._points, r, t, i, n), this._pointsUpdated = !0
        }
    }
    set points(t) { this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1 }
    get points() { return this._points }
    get segments() { return this._segments || (this._segments = UM(this, this.options.segment)) }
    first() {
        const t = this.segments,
            n = this.points;
        return t.length && n[t[0].start]
    }
    last() {
        const t = this.segments,
            n = this.points,
            r = t.length;
        return r && n[t[r - 1].end]
    }
    interpolate(t, n) {
        const r = this.options,
            i = t[n],
            o = this.points,
            s = z1(this, { property: n, start: i, end: i });
        if (!s.length) return;
        const a = [],
            l = YO(r);
        let u, c;
        for (u = 0, c = s.length; u < c; ++u) {
            const { start: d, end: h } = s[u], y = o[d], w = o[h];
            if (y === w) { a.push(y); continue }
            const b = Math.abs((i - y[n]) / (w[n] - y[n])),
                g = l(y, w, b, r.stepped);
            g[n] = t[n], a.push(g)
        }
        return a.length === 1 ? a[0] : a
    }
    pathSegment(t, n, r) { return Ep(this)(t, this, n, r) }
    path(t, n, r) {
        const i = this.segments,
            o = Ep(this);
        let s = this._loop;
        n = n || 0, r = r || this.points.length - n;
        for (const a of i) s &= o(t, this, a, { start: n, end: n + r - 1 });
        return !!s
    }
    draw(t, n, r, i) {
        const o = this.options || {};
        (this.points || []).length && o.borderWidth && (t.save(), GO(t, this, r, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
    }
}
qi.id = "line";
qi.defaults = { borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", borderWidth: 3, capBezierPoints: !0, cubicInterpolationMode: "default", fill: !1, spanGaps: !1, stepped: !1, tension: 0 };
qi.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };
qi.descriptors = { _scriptable: !0, _indexable: e => e !== "borderDash" && e !== "fill" };

function Aw(e, t, n, r) {
    const i = e.options,
        {
            [n]: o
        } = e.getProps([n], r);
    return Math.abs(t - o) < i.radius + i.hitRadius
}
class Op extends lr {
    constructor(t) {
        super();
        this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
    }
    inRange(t, n, r) {
        const i = this.options,
            { x: o, y: s } = this.getProps(["x", "y"], r);
        return Math.pow(t - o, 2) + Math.pow(n - s, 2) < Math.pow(i.hitRadius + i.radius, 2)
    }
    inXRange(t, n) { return Aw(this, t, "x", n) }
    inYRange(t, n) { return Aw(this, t, "y", n) }
    getCenterPoint(t) { const { x: n, y: r } = this.getProps(["x", "y"], t); return { x: n, y: r } }
    size(t) {
        t = t || this.options || {};
        let n = t.radius || 0;
        n = Math.max(n, n && t.hoverRadius || 0);
        const r = n && t.borderWidth || 0;
        return (n + r) * 2
    }
    draw(t, n) {
        const r = this.options;
        this.skip || r.radius < .1 || !Yi(this, n, this.size(r) / 2) || (t.strokeStyle = r.borderColor, t.lineWidth = r.borderWidth, t.fillStyle = r.backgroundColor, Ku(t, r, this.x, this.y))
    }
    getRange() { const t = this.options || {}; return t.radius + t.hitRadius }
}
Op.id = "point";
Op.defaults = { borderWidth: 1, hitRadius: 1, hoverBorderWidth: 1, hoverRadius: 4, pointStyle: "circle", radius: 3, rotation: 0 };
Op.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };

function Lw(e, t) { const { x: n, y: r, base: i, width: o, height: s } = e.getProps(["x", "y", "base", "width", "height"], t); let a, l, u, c, d; return e.horizontal ? (d = s / 2, a = Math.min(n, i), l = Math.max(n, i), u = r - d, c = r + d) : (d = o / 2, a = n - d, l = n + d, u = Math.min(r, i), c = Math.max(r, i)), { left: a, top: u, right: l, bottom: c } }

function ci(e, t, n, r) { return e ? 0 : Xt(t, n, r) }

function XO(e, t, n) {
    const r = e.options.borderWidth,
        i = e.borderSkipped,
        o = v1(r);
    return { t: ci(i.top, o.top, 0, n), r: ci(i.right, o.right, 0, t), b: ci(i.bottom, o.bottom, 0, n), l: ci(i.left, o.left, 0, t) }
}

function qO(e, t, n) { const { enableBorderRadius: r } = e.getProps(["enableBorderRadius"]), i = e.options.borderRadius, o = Ho(i), s = Math.min(t, n), a = e.borderSkipped, l = r || He(i); return { topLeft: ci(!l || a.top || a.left, o.topLeft, 0, s), topRight: ci(!l || a.top || a.right, o.topRight, 0, s), bottomLeft: ci(!l || a.bottom || a.left, o.bottomLeft, 0, s), bottomRight: ci(!l || a.bottom || a.right, o.bottomRight, 0, s) } }

function KO(e) {
    const t = Lw(e),
        n = t.right - t.left,
        r = t.bottom - t.top,
        i = XO(e, n / 2, r / 2),
        o = qO(e, n / 2, r / 2);
    return { outer: { x: t.left, y: t.top, w: n, h: r, radius: o }, inner: { x: t.left + i.l, y: t.top + i.t, w: n - i.l - i.r, h: r - i.t - i.b, radius: { topLeft: Math.max(0, o.topLeft - Math.max(i.t, i.l)), topRight: Math.max(0, o.topRight - Math.max(i.t, i.r)), bottomLeft: Math.max(0, o.bottomLeft - Math.max(i.b, i.l)), bottomRight: Math.max(0, o.bottomRight - Math.max(i.b, i.r)) } } }
}

function Dp(e, t, n, r) {
    const i = t === null,
        o = n === null,
        a = e && !(i && o) && Lw(e, r);
    return a && (i || Sr(t, a.left, a.right)) && (o || Sr(n, a.top, a.bottom))
}

function QO(e) { return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight }

function ZO(e, t) { e.rect(t.x, t.y, t.w, t.h) }

function Pp(e, t, n = {}) {
    const r = e.x !== n.x ? -t : 0,
        i = e.y !== n.y ? -t : 0,
        o = (e.x + e.w !== n.x + n.w ? t : 0) - r,
        s = (e.y + e.h !== n.y + n.h ? t : 0) - i;
    return { x: e.x + r, y: e.y + i, w: e.w + o, h: e.h + s, radius: e.radius }
}
class Rp extends lr {
    constructor(t) {
        super();
        this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
    }
    draw(t) {
        const { inflateAmount: n, options: { borderColor: r, backgroundColor: i } } = this, { inner: o, outer: s } = KO(this), a = QO(s.radius) ? Ju : ZO;
        t.save(), (s.w !== o.w || s.h !== o.h) && (t.beginPath(), a(t, Pp(s, n, o)), t.clip(), a(t, Pp(o, -n, s)), t.fillStyle = r, t.fill("evenodd")), t.beginPath(), a(t, Pp(o, n)), t.fillStyle = i, t.fill(), t.restore()
    }
    inRange(t, n, r) { return Dp(this, t, n, r) }
    inXRange(t, n) { return Dp(this, t, null, n) }
    inYRange(t, n) { return Dp(this, null, t, n) }
    getCenterPoint(t) { const { x: n, y: r, base: i, horizontal: o } = this.getProps(["x", "y", "base", "horizontal"], t); return { x: o ? (n + i) / 2 : n, y: o ? r : (r + i) / 2 } }
    getRange(t) { return t === "x" ? this.width / 2 : this.height / 2 }
}
Rp.id = "bar";
Rp.defaults = { borderSkipped: "start", borderWidth: 0, borderRadius: 0, inflateAmount: "auto", pointStyle: void 0 };
Rp.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };

function JO(e, t) { const n = e.getDatasetMeta(t); return n && e.isDatasetVisible(t) ? n.dataset : null }

function eD(e) {
    const t = e.options,
        n = t.fill;
    let r = Fe(n && n.target, n);
    return r === void 0 && (r = !!t.backgroundColor), r === !1 || r === null ? !1 : r === !0 ? "origin" : r
}

function tD(e, t, n) { const r = eD(e); if (He(r)) return isNaN(r.value) ? !1 : r; let i = parseFloat(r); return St(i) && Math.floor(i) === i ? ((r[0] === "-" || r[0] === "+") && (i = t + i), i === t || i < 0 || i >= n ? !1 : i) : ["origin", "start", "end", "stack", "shape"].indexOf(r) >= 0 && r }

function nD(e) {
    const { scale: t = {}, fill: n } = e;
    let r = null,
        i;
    return n === "start" ? r = t.bottom : n === "end" ? r = t.top : He(n) ? r = t.getPixelForValue(n.value) : t.getBasePixel && (r = t.getBasePixel()), St(r) ? (i = t.isHorizontal(), { x: i ? r : null, y: i ? null : r }) : null
}
class Fw {
    constructor(t) { this.x = t.x, this.y = t.y, this.radius = t.radius }
    pathSegment(t, n, r) { const { x: i, y: o, radius: s } = this; return n = n || { start: 0, end: it }, t.arc(i, o, s, n.end, n.start, !0), !r.bounds }
    interpolate(t) { const { x: n, y: r, radius: i } = this, o = t.angle; return { x: n + Math.cos(o) * i, y: r + Math.sin(o) * i, angle: o } }
}

function rD(e) { const { scale: t, fill: n } = e, r = t.options, i = t.getLabels().length, o = [], s = r.reverse ? t.max : t.min, a = r.reverse ? t.min : t.max; let l, u, c; if (n === "start" ? c = s : n === "end" ? c = a : He(n) ? c = n.value : c = t.getBaseValue(), r.grid.circular) return u = t.getPointPositionForValue(0, s), new Fw({ x: u.x, y: u.y, radius: t.getDistanceFromCenterForValue(c) }); for (l = 0; l < i; ++l) o.push(t.getPointPositionForValue(l, c)); return o }

function iD(e) { return (e.scale || {}).getPointPositionForValue ? rD(e) : nD(e) }

function Iw(e, t, n) { for (; t > e; t--) { const r = n[t]; if (!isNaN(r.x) && !isNaN(r.y)) break } return t }

function oD(e, t) {
    const { x: n = null, y: r = null } = e || {}, i = t.points, o = [];
    return t.segments.forEach(({ start: s, end: a }) => {
        a = Iw(s, a, i);
        const l = i[s],
            u = i[a];
        r !== null ? (o.push({ x: l.x, y: r }), o.push({ x: u.x, y: r })) : n !== null && (o.push({ x: n, y: l.y }), o.push({ x: n, y: u.y }))
    }), o
}

function sD(e) {
    const { scale: t, index: n, line: r } = e, i = [], o = r.segments, s = r.points, a = aD(t, n);
    a.push(Nw({ x: null, y: t.bottom }, r));
    for (let l = 0; l < o.length; l++) { const u = o[l]; for (let c = u.start; c <= u.end; c++) lD(i, s[c], a) }
    return new qi({ points: i, options: {} })
}

function aD(e, t) {
    const n = [],
        r = e.getMatchingVisibleMetas("line");
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        if (o.index === t) break;
        o.hidden || n.unshift(o.dataset)
    }
    return n
}

function lD(e, t, n) {
    const r = [];
    for (let i = 0; i < n.length; i++) {
        const o = n[i],
            { first: s, last: a, point: l } = uD(o, t, "x");
        if (!(!l || s && a)) {
            if (s) r.unshift(l);
            else if (e.push(l), !a) break
        }
    }
    e.push(...r)
}

function uD(e, t, n) {
    const r = e.interpolate(t, n);
    if (!r) return {};
    const i = r[n],
        o = e.segments,
        s = e.points;
    let a = !1,
        l = !1;
    for (let u = 0; u < o.length; u++) {
        const c = o[u],
            d = s[c.start][n],
            h = s[c.end][n];
        if (Sr(i, d, h)) { a = i === d, l = i === h; break }
    }
    return { first: a, last: l, point: r }
}

function cD(e) { const { chart: t, fill: n, line: r } = e; if (St(n)) return JO(t, n); if (n === "stack") return sD(e); if (n === "shape") return !0; const i = iD(e); return i instanceof Fw ? i : Nw(i, r) }

function Nw(e, t) {
    let n = [],
        r = !1;
    return ct(e) ? (r = !0, n = e) : n = oD(e, t), n.length ? new qi({ points: n, options: { tension: 0 }, _loop: r, _fullLoop: r }) : null
}

function fD(e, t, n) {
    let i = e[t].fill;
    const o = [t];
    let s;
    if (!n) return i;
    for (; i !== !1 && o.indexOf(i) === -1;) {
        if (!St(i)) return i;
        if (s = e[i], !s) return !1;
        if (s.visible) return i;
        o.push(i), i = s.fill
    }
    return !1
}

function jw(e, t, n) { e.beginPath(), t.path(e), e.lineTo(t.last().x, n), e.lineTo(t.first().x, n), e.closePath(), e.clip() }

function Tp(e, t, n, r) {
    if (r) return;
    let i = t[e],
        o = n[e];
    return e === "angle" && (i = wn(i), o = wn(o)), { property: e, start: i, end: o }
}

function zw(e, t, n, r) { return e && t ? r(e[n], t[n]) : e ? e[n] : t ? t[n] : 0 }

function dD(e, t, n) {
    const r = e.segments,
        i = e.points,
        o = t.points,
        s = [];
    for (const a of r) {
        let { start: l, end: u } = a;
        u = Iw(l, u, i);
        const c = Tp(n, i[l], i[u], a.loop);
        if (!t.segments) { s.push({ source: a, target: c, start: i[l], end: i[u] }); continue }
        const d = z1(t, c);
        for (const h of d) {
            const y = Tp(n, o[h.start], o[h.end], h.loop),
                w = j1(a, i, y);
            for (const b of w) s.push({
                source: b,
                target: h,
                start: {
                    [n]: zw(c, y, "start", Math.max)
                },
                end: {
                    [n]: zw(c, y, "end", Math.min)
                }
            })
        }
    }
    return s
}

function hD(e, t, n) {
    const { top: r, bottom: i } = t.chart.chartArea, { property: o, start: s, end: a } = n || {};
    o === "x" && (e.beginPath(), e.rect(s, r, a - s, i - r), e.clip())
}

function Bw(e, t, n, r) {
    const i = t.interpolate(n, r);
    i && e.lineTo(i.x, i.y)
}

function Ww(e, t) {
    const { line: n, target: r, property: i, color: o, scale: s } = t, a = dD(n, r, i);
    for (const { source: l, target: u, start: c, end: d }
        of a) {
        const { style: { backgroundColor: h = o } = {} } = l, y = r !== !0;
        e.save(), e.fillStyle = h, hD(e, s, y && Tp(i, c, d)), e.beginPath();
        const w = !!n.pathSegment(e, l);
        let b;
        if (y) {
            w ? e.closePath() : Bw(e, r, d, i);
            const g = !!r.pathSegment(e, u, { move: w, reverse: !0 });
            b = w && g, b || Bw(e, r, c, i)
        }
        e.closePath(), e.fill(b ? "evenodd" : "nonzero"), e.restore()
    }
}

function pD(e, t) {
    const { line: n, target: r, above: i, below: o, area: s, scale: a } = t, l = n._loop ? "angle" : t.axis;
    e.save(), l === "x" && o !== i && (jw(e, r, s.top), Ww(e, { line: n, target: r, color: i, scale: a, property: l }), e.restore(), e.save(), jw(e, r, s.bottom)), Ww(e, { line: n, target: r, color: o, scale: a, property: l }), e.restore()
}

function Ap(e, t, n) {
    const r = cD(t),
        { line: i, scale: o, axis: s } = t,
        a = i.options,
        l = a.fill,
        u = a.backgroundColor,
        { above: c = u, below: d = u } = l || {};
    r && i.points.length && (Qu(e, n), pD(e, { line: i, target: r, above: c, below: d, area: n, scale: o, axis: s }), Zu(e))
}
var iI = {
    id: "filler",
    afterDatasetsUpdate(e, t, n) {
        const r = (e.data.datasets || []).length,
            i = [];
        let o, s, a, l;
        for (s = 0; s < r; ++s) o = e.getDatasetMeta(s), a = o.dataset, l = null, a && a.options && a instanceof qi && (l = { visible: e.isDatasetVisible(s), index: s, fill: tD(a, s, r), chart: e, axis: o.controller.options.indexAxis, scale: o.vScale, line: a }), o.$filler = l, i.push(l);
        for (s = 0; s < r; ++s) l = i[s], !(!l || l.fill === !1) && (l.fill = fD(i, s, n.propagate))
    },
    beforeDraw(e, t, n) {
        const r = n.drawTime === "beforeDraw",
            i = e.getSortedVisibleDatasetMetas(),
            o = e.chartArea;
        for (let s = i.length - 1; s >= 0; --s) { const a = i[s].$filler;!a || (a.line.updateControlPoints(o, a.axis), r && Ap(e.ctx, a, o)) }
    },
    beforeDatasetsDraw(e, t, n) {
        if (n.drawTime !== "beforeDatasetsDraw") return;
        const r = e.getSortedVisibleDatasetMetas();
        for (let i = r.length - 1; i >= 0; --i) {
            const o = r[i].$filler;
            o && Ap(e.ctx, o, e.chartArea)
        }
    },
    beforeDatasetDraw(e, t, n) { const r = t.meta.$filler;!r || r.fill === !1 || n.drawTime !== "beforeDatasetDraw" || Ap(e.ctx, r, e.chartArea) },
    defaults: { propagate: !0, drawTime: "beforeDatasetDraw" }
};
const Hw = (e, t) => { let { boxHeight: n = t, boxWidth: r = t } = e; return e.usePointStyle && (n = Math.min(n, t), r = Math.min(r, t)), { boxWidth: r, boxHeight: n, itemHeight: Math.max(t, n) } },
    mD = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class Yw extends lr {
    constructor(t) {
        super();
        this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
    }
    update(t, n, r) { this.maxWidth = t, this.maxHeight = n, this._margins = r, this.setDimensions(), this.buildLabels(), this.fit() }
    setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height) }
    buildLabels() {
        const t = this.options.labels || {};
        let n = st(t.generateLabels, [this.chart], this) || [];
        t.filter && (n = n.filter(r => t.filter(r, this.chart.data))), t.sort && (n = n.sort((r, i) => t.sort(r, i, this.chart.data))), this.options.reverse && n.reverse(), this.legendItems = n
    }
    fit() {
        const { options: t, ctx: n } = this;
        if (!t.display) { this.width = this.height = 0; return }
        const r = t.labels,
            i = Bt(r.font),
            o = i.size,
            s = this._computeTitleHeight(),
            { boxWidth: a, itemHeight: l } = Hw(r, o);
        let u, c;
        n.font = i.string, this.isHorizontal() ? (u = this.maxWidth, c = this._fitRows(s, o, a, l) + 10) : (c = this.maxHeight, u = this._fitCols(s, o, a, l) + 10), this.width = Math.min(u, t.maxWidth || this.maxWidth), this.height = Math.min(c, t.maxHeight || this.maxHeight)
    }
    _fitRows(t, n, r, i) {
        const { ctx: o, maxWidth: s, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], u = this.lineWidths = [0], c = i + a;
        let d = t;
        o.textAlign = "left", o.textBaseline = "middle";
        let h = -1,
            y = -c;
        return this.legendItems.forEach((w, b) => {
            const g = r + n / 2 + o.measureText(w.text).width;
            (b === 0 || u[u.length - 1] + g + 2 * a > s) && (d += c, u[u.length - (b > 0 ? 0 : 1)] = 0, y += c, h++), l[b] = { left: 0, top: y, row: h, width: g, height: i }, u[u.length - 1] += g + a
        }), d
    }
    _fitCols(t, n, r, i) {
        const { ctx: o, maxHeight: s, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], u = this.columnSizes = [], c = s - t;
        let d = a,
            h = 0,
            y = 0,
            w = 0,
            b = 0;
        return this.legendItems.forEach((g, m) => {
            const S = r + n / 2 + o.measureText(g.text).width;
            m > 0 && y + i + 2 * a > c && (d += h + a, u.push({ width: h, height: y }), w += h + a, b++, h = y = 0), l[m] = { left: w, top: y, col: b, width: S, height: i }, h = Math.max(h, S), y += i + a
        }), d += h, u.push({ width: h, height: y }), d
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const t = this._computeTitleHeight(),
            { legendHitBoxes: n, options: { align: r, labels: { padding: i }, rtl: o } } = this,
            s = Vo(o, this.left, this.width);
        if (this.isHorizontal()) {
            let a = 0,
                l = vn(r, this.left + i, this.right - this.lineWidths[a]);
            for (const u of n) a !== u.row && (a = u.row, l = vn(r, this.left + i, this.right - this.lineWidths[a])), u.top += this.top + t + i, u.left = s.leftForLtr(s.x(l), u.width), l += u.width + i
        } else {
            let a = 0,
                l = vn(r, this.top + t + i, this.bottom - this.columnSizes[a].height);
            for (const u of n) u.col !== a && (a = u.col, l = vn(r, this.top + t + i, this.bottom - this.columnSizes[a].height)), u.top = l, u.left += this.left + i, u.left = s.leftForLtr(s.x(u.left), u.width), l += u.height + i
        }
    }
    isHorizontal() { return this.options.position === "top" || this.options.position === "bottom" }
    draw() {
        if (this.options.display) {
            const t = this.ctx;
            Qu(t, this), this._draw(), Zu(t)
        }
    }
    _draw() {
        const { options: t, columnSizes: n, lineWidths: r, ctx: i } = this, { align: o, labels: s } = t, a = Ye.color, l = Vo(t.rtl, this.left, this.width), u = Bt(s.font), { color: c, padding: d } = s, h = u.size, y = h / 2;
        let w;
        this.drawTitle(), i.textAlign = l.textAlign("left"), i.textBaseline = "middle", i.lineWidth = .5, i.font = u.string;
        const { boxWidth: b, boxHeight: g, itemHeight: m } = Hw(s, h), S = function(I, U, z) {
            if (isNaN(b) || b <= 0 || isNaN(g) || g < 0) return;
            i.save();
            const ve = Fe(z.lineWidth, 1);
            if (i.fillStyle = Fe(z.fillStyle, a), i.lineCap = Fe(z.lineCap, "butt"), i.lineDashOffset = Fe(z.lineDashOffset, 0), i.lineJoin = Fe(z.lineJoin, "miter"), i.lineWidth = ve, i.strokeStyle = Fe(z.strokeStyle, a), i.setLineDash(Fe(z.lineDash, [])), s.usePointStyle) {
                const Ee = { radius: b * Math.SQRT2 / 2, pointStyle: z.pointStyle, rotation: z.rotation, borderWidth: ve },
                    he = l.xPlus(I, b / 2),
                    Re = U + y;
                Ku(i, Ee, he, Re)
            } else {
                const Ee = U + Math.max((h - g) / 2, 0),
                    he = l.leftForLtr(I, b),
                    Re = Ho(z.borderRadius);
                i.beginPath(), Object.values(Re).some(H => H !== 0) ? Ju(i, { x: he, y: Ee, w: b, h: g, radius: Re }) : i.rect(he, Ee, b, g), i.fill(), ve !== 0 && i.stroke()
            }
            i.restore()
        }, k = function(I, U, z) { Wo(i, z.text, I, U + m / 2, u, { strikethrough: z.hidden, textAlign: l.textAlign(z.textAlign) }) }, E = this.isHorizontal(), P = this._computeTitleHeight();
        E ? w = { x: vn(o, this.left + d, this.right - r[0]), y: this.top + d + P, line: 0 } : w = { x: this.left + d, y: vn(o, this.top + P + d, this.bottom - n[0].height), line: 0 }, L1(this.ctx, t.textDirection);
        const T = m + d;
        this.legendItems.forEach((I, U) => {
            i.strokeStyle = I.fontColor || c, i.fillStyle = I.fontColor || c;
            const z = i.measureText(I.text).width,
                ve = l.textAlign(I.textAlign || (I.textAlign = s.textAlign)),
                Ee = b + y + z;
            let he = w.x,
                Re = w.y;
            l.setWidth(this.width), E ? U > 0 && he + Ee + d > this.right && (Re = w.y += T, w.line++, he = w.x = vn(o, this.left + d, this.right - r[w.line])) : U > 0 && Re + T > this.bottom && (he = w.x = he + n[w.line].width + d, w.line++, Re = w.y = vn(o, this.top + P + d, this.bottom - n[w.line].height));
            const H = l.x(he);
            S(H, Re, I), he = bC(ve, he + b + y, E ? he + Ee : this.right, t.rtl), k(l.x(he), Re, I), E ? w.x += Ee + d : w.y += T
        }), F1(this.ctx, t.textDirection)
    }
    drawTitle() {
        const t = this.options,
            n = t.title,
            r = Bt(n.font),
            i = rn(n.padding);
        if (!n.display) return;
        const o = Vo(t.rtl, this.left, this.width),
            s = this.ctx,
            a = n.position,
            l = r.size / 2,
            u = i.top + l;
        let c, d = this.left,
            h = this.width;
        if (this.isHorizontal()) h = Math.max(...this.lineWidths), c = this.top + u, d = vn(t.align, d, this.right - h);
        else {
            const w = this.columnSizes.reduce((b, g) => Math.max(b, g.height), 0);
            c = u + vn(t.align, this.top, this.bottom - w - t.labels.padding - this._computeTitleHeight())
        }
        const y = vn(a, d, d + h);
        s.textAlign = o.textAlign(qv(a)), s.textBaseline = "middle", s.strokeStyle = n.color, s.fillStyle = n.color, s.font = r.string, Wo(s, n.text, y, c, r)
    }
    _computeTitleHeight() {
        const t = this.options.title,
            n = Bt(t.font),
            r = rn(t.padding);
        return t.display ? n.lineHeight + r.height : 0
    }
    _getLegendItemAt(t, n) {
        let r, i, o;
        if (Sr(t, this.left, this.right) && Sr(n, this.top, this.bottom)) {
            for (o = this.legendHitBoxes, r = 0; r < o.length; ++r)
                if (i = o[r], Sr(t, i.left, i.left + i.width) && Sr(n, i.top, i.top + i.height)) return this.legendItems[r]
        }
        return null
    }
    handleEvent(t) {
        const n = this.options;
        if (!gD(t.type, n)) return;
        const r = this._getLegendItemAt(t.x, t.y);
        if (t.type === "mousemove") {
            const i = this._hoveredItem,
                o = mD(i, r);
            i && !o && st(n.onLeave, [t, i, this], this), this._hoveredItem = r, r && !o && st(n.onHover, [t, r, this], this)
        } else r && st(n.onClick, [t, r, this], this)
    }
}

function gD(e, t) { return !!(e === "mousemove" && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup")) }
var oI = {
    id: "legend",
    _element: Yw,
    start(e, t, n) {
        const r = e.legend = new Yw({ ctx: e.ctx, options: n, chart: e });
        li.configure(e, r, n), li.addBox(e, r)
    },
    stop(e) { li.removeBox(e, e.legend), delete e.legend },
    beforeUpdate(e, t, n) {
        const r = e.legend;
        li.configure(e, r, n), r.options = n
    },
    afterUpdate(e) {
        const t = e.legend;
        t.buildLabels(), t.adjustHitBoxes()
    },
    afterEvent(e, t) { t.replay || e.legend.handleEvent(t.event) },
    defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(e, t, n) {
            const r = t.datasetIndex,
                i = n.chart;
            i.isDatasetVisible(r) ? (i.hide(r), t.hidden = !0) : (i.show(r), t.hidden = !1)
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: e => e.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(e) {
                const t = e.data.datasets,
                    { labels: { usePointStyle: n, pointStyle: r, textAlign: i, color: o } } = e.legend.options;
                return e._getSortedDatasetMetas().map(s => {
                    const a = s.controller.getStyle(n ? 0 : void 0),
                        l = rn(a.borderWidth);
                    return { text: t[s.index].label, fillStyle: a.backgroundColor, fontColor: o, hidden: !s.visible, lineCap: a.borderCapStyle, lineDash: a.borderDash, lineDashOffset: a.borderDashOffset, lineJoin: a.borderJoinStyle, lineWidth: (l.width + l.height) / 4, strokeStyle: a.borderColor, pointStyle: r || a.pointStyle, rotation: a.rotation, textAlign: i || a.textAlign, borderRadius: 0, datasetIndex: s.index }
                }, this)
            }
        },
        title: { color: e => e.chart.options.color, display: !1, position: "center", text: "" }
    },
    descriptors: { _scriptable: e => !e.startsWith("on"), labels: { _scriptable: e => !["generateLabels", "filter", "sort"].includes(e) } }
};
const Ya = {
    average(e) {
        if (!e.length) return !1;
        let t, n, r = 0,
            i = 0,
            o = 0;
        for (t = 0, n = e.length; t < n; ++t) {
            const s = e[t].element;
            if (s && s.hasValue()) {
                const a = s.tooltipPosition();
                r += a.x, i += a.y, ++o
            }
        }
        return { x: r / o, y: i / o }
    },
    nearest(e, t) {
        if (!e.length) return !1;
        let n = t.x,
            r = t.y,
            i = Number.POSITIVE_INFINITY,
            o, s, a;
        for (o = 0, s = e.length; o < s; ++o) {
            const l = e[o].element;
            if (l && l.hasValue()) {
                const u = l.getCenterPoint(),
                    c = Xh(t, u);
                c < i && (i = c, a = l)
            }
        }
        if (a) {
            const l = a.tooltipPosition();
            n = l.x, r = l.y
        }
        return { x: n, y: r }
    }
};

function ur(e, t) { return t && (ct(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e }

function Mr(e) { return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e }

function yD(e, t) { const { element: n, datasetIndex: r, index: i } = t, o = e.getDatasetMeta(r).controller, { label: s, value: a } = o.getLabelAndValue(i); return { chart: e, label: s, parsed: o.getParsed(i), raw: e.data.datasets[r].data[i], formattedValue: a, dataset: o.getDataset(), dataIndex: i, datasetIndex: r, element: n } }

function $w(e, t) {
    const n = e.chart.ctx,
        { body: r, footer: i, title: o } = e,
        { boxWidth: s, boxHeight: a } = t,
        l = Bt(t.bodyFont),
        u = Bt(t.titleFont),
        c = Bt(t.footerFont),
        d = o.length,
        h = i.length,
        y = r.length,
        w = rn(t.padding);
    let b = w.height,
        g = 0,
        m = r.reduce((E, P) => E + P.before.length + P.lines.length + P.after.length, 0);
    if (m += e.beforeBody.length + e.afterBody.length, d && (b += d * u.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), m) {
        const E = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
        b += y * E + (m - y) * l.lineHeight + (m - 1) * t.bodySpacing
    }
    h && (b += t.footerMarginTop + h * c.lineHeight + (h - 1) * t.footerSpacing);
    let S = 0;
    const k = function(E) { g = Math.max(g, n.measureText(E).width + S) };
    return n.save(), n.font = u.string, et(e.title, k), n.font = l.string, et(e.beforeBody.concat(e.afterBody), k), S = t.displayColors ? s + 2 + t.boxPadding : 0, et(r, E => { et(E.before, k), et(E.lines, k), et(E.after, k) }), S = 0, n.font = c.string, et(e.footer, k), n.restore(), g += w.width, { width: g, height: b }
}

function vD(e, t) { const { y: n, height: r } = t; return n < r / 2 ? "top" : n > e.height - r / 2 ? "bottom" : "center" }

function wD(e, t, n, r) { const { x: i, width: o } = r, s = n.caretSize + n.caretPadding; if (e === "left" && i + o + s > t.width || e === "right" && i - o - s < 0) return !0 }

function xD(e, t, n, r) { const { x: i, width: o } = n, { width: s, chartArea: { left: a, right: l } } = e; let u = "center"; return r === "center" ? u = i <= (a + l) / 2 ? "left" : "right" : i <= o / 2 ? u = "left" : i >= s - o / 2 && (u = "right"), wD(u, e, t, n) && (u = "center"), u }

function Vw(e, t, n) { const r = n.yAlign || t.yAlign || vD(e, n); return { xAlign: n.xAlign || t.xAlign || xD(e, t, n, r), yAlign: r } }

function bD(e, t) { let { x: n, width: r } = e; return t === "right" ? n -= r : t === "center" && (n -= r / 2), n }

function _D(e, t, n) { let { y: r, height: i } = e; return t === "top" ? r += n : t === "bottom" ? r -= i + n : r -= i / 2, r }

function Uw(e, t, n, r) { const { caretSize: i, caretPadding: o, cornerRadius: s } = e, { xAlign: a, yAlign: l } = n, u = i + o, { topLeft: c, topRight: d, bottomLeft: h, bottomRight: y } = Ho(s); let w = bD(t, a); const b = _D(t, l, u); return l === "center" ? a === "left" ? w += u : a === "right" && (w -= u) : a === "left" ? w -= Math.max(c, h) + i : a === "right" && (w += Math.max(d, y) + i), { x: Xt(w, 0, r.width - t.width), y: Xt(b, 0, r.height - t.height) } }

function hc(e, t, n) { const r = rn(n.padding); return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - r.right : e.x + r.left }

function Gw(e) { return ur([], Mr(e)) }

function SD(e, t, n) { return ai(e, { tooltip: t, tooltipItems: n, type: "tooltip" }) }

function Xw(e, t) { const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks; return n ? e.override(n) : e }
class Lp extends lr {
    constructor(t) {
        super();
        this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
    }
    initialize(t) { this.options = t, this._cachedAnimations = void 0, this.$context = void 0 }
    _resolveAnimations() {
        const t = this._cachedAnimations;
        if (t) return t;
        const n = this.chart,
            r = this.options.setContext(this.getContext()),
            i = r.enabled && n.options.animation && r.animations,
            o = new Y1(this.chart, i);
        return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o
    }
    getContext() { return this.$context || (this.$context = SD(this.chart.getContext(), this, this._tooltipItems)) }
    getTitle(t, n) { const { callbacks: r } = n, i = r.beforeTitle.apply(this, [t]), o = r.title.apply(this, [t]), s = r.afterTitle.apply(this, [t]); let a = []; return a = ur(a, Mr(i)), a = ur(a, Mr(o)), a = ur(a, Mr(s)), a }
    getBeforeBody(t, n) { return Gw(n.callbacks.beforeBody.apply(this, [t])) }
    getBody(t, n) {
        const { callbacks: r } = n, i = [];
        return et(t, o => {
            const s = { before: [], lines: [], after: [] },
                a = Xw(r, o);
            ur(s.before, Mr(a.beforeLabel.call(this, o))), ur(s.lines, a.label.call(this, o)), ur(s.after, Mr(a.afterLabel.call(this, o))), i.push(s)
        }), i
    }
    getAfterBody(t, n) { return Gw(n.callbacks.afterBody.apply(this, [t])) }
    getFooter(t, n) { const { callbacks: r } = n, i = r.beforeFooter.apply(this, [t]), o = r.footer.apply(this, [t]), s = r.afterFooter.apply(this, [t]); let a = []; return a = ur(a, Mr(i)), a = ur(a, Mr(o)), a = ur(a, Mr(s)), a }
    _createItems(t) {
        const n = this._active,
            r = this.chart.data,
            i = [],
            o = [],
            s = [];
        let a = [],
            l, u;
        for (l = 0, u = n.length; l < u; ++l) a.push(yD(this.chart, n[l]));
        return t.filter && (a = a.filter((c, d, h) => t.filter(c, d, h, r))), t.itemSort && (a = a.sort((c, d) => t.itemSort(c, d, r))), et(a, c => {
            const d = Xw(t.callbacks, c);
            i.push(d.labelColor.call(this, c)), o.push(d.labelPointStyle.call(this, c)), s.push(d.labelTextColor.call(this, c))
        }), this.labelColors = i, this.labelPointStyles = o, this.labelTextColors = s, this.dataPoints = a, a
    }
    update(t, n) {
        const r = this.options.setContext(this.getContext()),
            i = this._active;
        let o, s = [];
        if (!i.length) this.opacity !== 0 && (o = { opacity: 0 });
        else {
            const a = Ya[r.position].call(this, i, this._eventPosition);
            s = this._createItems(r), this.title = this.getTitle(s, r), this.beforeBody = this.getBeforeBody(s, r), this.body = this.getBody(s, r), this.afterBody = this.getAfterBody(s, r), this.footer = this.getFooter(s, r);
            const l = this._size = $w(this, r),
                u = Object.assign({}, a, l),
                c = Vw(this.chart, r, u),
                d = Uw(r, u, c, this.chart);
            this.xAlign = c.xAlign, this.yAlign = c.yAlign, o = { opacity: 1, x: d.x, y: d.y, width: l.width, height: l.height, caretX: a.x, caretY: a.y }
        }
        this._tooltipItems = s, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && r.external && r.external.call(this, { chart: this.chart, tooltip: this, replay: n })
    }
    drawCaret(t, n, r, i) {
        const o = this.getCaretPosition(t, r, i);
        n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
    }
    getCaretPosition(t, n, r) { const { xAlign: i, yAlign: o } = this, { caretSize: s, cornerRadius: a } = r, { topLeft: l, topRight: u, bottomLeft: c, bottomRight: d } = Ho(a), { x: h, y } = t, { width: w, height: b } = n; let g, m, S, k, E, P; return o === "center" ? (E = y + b / 2, i === "left" ? (g = h, m = g - s, k = E + s, P = E - s) : (g = h + w, m = g + s, k = E - s, P = E + s), S = g) : (i === "left" ? m = h + Math.max(l, c) + s : i === "right" ? m = h + w - Math.max(u, d) - s : m = this.caretX, o === "top" ? (k = y, E = k - s, g = m - s, S = m + s) : (k = y + b, E = k + s, g = m + s, S = m - s), P = k), { x1: g, x2: m, x3: S, y1: k, y2: E, y3: P } }
    drawTitle(t, n, r) {
        const i = this.title,
            o = i.length;
        let s, a, l;
        if (o) { const u = Vo(r.rtl, this.x, this.width); for (t.x = hc(this, r.titleAlign, r), n.textAlign = u.textAlign(r.titleAlign), n.textBaseline = "middle", s = Bt(r.titleFont), a = r.titleSpacing, n.fillStyle = r.titleColor, n.font = s.string, l = 0; l < o; ++l) n.fillText(i[l], u.x(t.x), t.y + s.lineHeight / 2), t.y += s.lineHeight + a, l + 1 === o && (t.y += r.titleMarginBottom - a) }
    }
    _drawColorBox(t, n, r, i, o) {
        const s = this.labelColors[r],
            a = this.labelPointStyles[r],
            { boxHeight: l, boxWidth: u, boxPadding: c } = o,
            d = Bt(o.bodyFont),
            h = hc(this, "left", o),
            y = i.x(h),
            w = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0,
            b = n.y + w;
        if (o.usePointStyle) {
            const g = { radius: Math.min(u, l) / 2, pointStyle: a.pointStyle, rotation: a.rotation, borderWidth: 1 },
                m = i.leftForLtr(y, u) + u / 2,
                S = b + l / 2;
            t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ku(t, g, m, S), t.strokeStyle = s.borderColor, t.fillStyle = s.backgroundColor, Ku(t, g, m, S)
        } else {
            t.lineWidth = s.borderWidth || 1, t.strokeStyle = s.borderColor, t.setLineDash(s.borderDash || []), t.lineDashOffset = s.borderDashOffset || 0;
            const g = i.leftForLtr(y, u - c),
                m = i.leftForLtr(i.xPlus(y, 1), u - c - 2),
                S = Ho(s.borderRadius);
            Object.values(S).some(k => k !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Ju(t, { x: g, y: b, w: u, h: l, radius: S }), t.fill(), t.stroke(), t.fillStyle = s.backgroundColor, t.beginPath(), Ju(t, { x: m, y: b + 1, w: u - 2, h: l - 2, radius: S }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, b, u, l), t.strokeRect(g, b, u, l), t.fillStyle = s.backgroundColor, t.fillRect(m, b + 1, u - 2, l - 2))
        }
        t.fillStyle = this.labelTextColors[r]
    }
    drawBody(t, n, r) {
        const { body: i } = this, { bodySpacing: o, bodyAlign: s, displayColors: a, boxHeight: l, boxWidth: u, boxPadding: c } = r, d = Bt(r.bodyFont);
        let h = d.lineHeight,
            y = 0;
        const w = Vo(r.rtl, this.x, this.width),
            b = function(U) { n.fillText(U, w.x(t.x + y), t.y + h / 2), t.y += h + o },
            g = w.textAlign(s);
        let m, S, k, E, P, T, I;
        for (n.textAlign = s, n.textBaseline = "middle", n.font = d.string, t.x = hc(this, g, r), n.fillStyle = r.bodyColor, et(this.beforeBody, b), y = a && g !== "right" ? s === "center" ? u / 2 + c : u + 2 + c : 0, E = 0, T = i.length; E < T; ++E) {
            for (m = i[E], S = this.labelTextColors[E], n.fillStyle = S, et(m.before, b), k = m.lines, a && k.length && (this._drawColorBox(n, t, E, w, r), h = Math.max(d.lineHeight, l)), P = 0, I = k.length; P < I; ++P) b(k[P]), h = d.lineHeight;
            et(m.after, b)
        }
        y = 0, h = d.lineHeight, et(this.afterBody, b), t.y -= o
    }
    drawFooter(t, n, r) {
        const i = this.footer,
            o = i.length;
        let s, a;
        if (o) { const l = Vo(r.rtl, this.x, this.width); for (t.x = hc(this, r.footerAlign, r), t.y += r.footerMarginTop, n.textAlign = l.textAlign(r.footerAlign), n.textBaseline = "middle", s = Bt(r.footerFont), n.fillStyle = r.footerColor, n.font = s.string, a = 0; a < o; ++a) n.fillText(i[a], l.x(t.x), t.y + s.lineHeight / 2), t.y += s.lineHeight + r.footerSpacing }
    }
    drawBackground(t, n, r, i) {
        const { xAlign: o, yAlign: s } = this, { x: a, y: l } = t, { width: u, height: c } = r, { topLeft: d, topRight: h, bottomLeft: y, bottomRight: w } = Ho(i.cornerRadius);
        n.fillStyle = i.backgroundColor, n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.beginPath(), n.moveTo(a + d, l), s === "top" && this.drawCaret(t, n, r, i), n.lineTo(a + u - h, l), n.quadraticCurveTo(a + u, l, a + u, l + h), s === "center" && o === "right" && this.drawCaret(t, n, r, i), n.lineTo(a + u, l + c - w), n.quadraticCurveTo(a + u, l + c, a + u - w, l + c), s === "bottom" && this.drawCaret(t, n, r, i), n.lineTo(a + y, l + c), n.quadraticCurveTo(a, l + c, a, l + c - y), s === "center" && o === "left" && this.drawCaret(t, n, r, i), n.lineTo(a, l + d), n.quadraticCurveTo(a, l, a + d, l), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke()
    }
    _updateAnimationTarget(t) {
        const n = this.chart,
            r = this.$animations,
            i = r && r.x,
            o = r && r.y;
        if (i || o) {
            const s = Ya[t.position].call(this, this._active, this._eventPosition);
            if (!s) return;
            const a = this._size = $w(this, t),
                l = Object.assign({}, s, this._size),
                u = Vw(n, t, l),
                c = Uw(t, l, u, n);
            (i._to !== c.x || o._to !== c.y) && (this.xAlign = u.xAlign, this.yAlign = u.yAlign, this.width = a.width, this.height = a.height, this.caretX = s.x, this.caretY = s.y, this._resolveAnimations().update(this, c))
        }
    }
    draw(t) {
        const n = this.options.setContext(this.getContext());
        let r = this.opacity;
        if (!r) return;
        this._updateAnimationTarget(n);
        const i = { width: this.width, height: this.height },
            o = { x: this.x, y: this.y };
        r = Math.abs(r) < .001 ? 0 : r;
        const s = rn(n.padding),
            a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        n.enabled && a && (t.save(), t.globalAlpha = r, this.drawBackground(o, t, i, n), L1(t, n.textDirection), o.y += s.top, this.drawTitle(o, t, n), this.drawBody(o, t, n), this.drawFooter(o, t, n), F1(t, n.textDirection), t.restore())
    }
    getActiveElements() { return this._active || [] }
    setActiveElements(t, n) {
        const r = this._active,
            i = t.map(({ datasetIndex: a, index: l }) => { const u = this.chart.getDatasetMeta(a); if (!u) throw new Error("Cannot find a dataset at index " + a); return { datasetIndex: a, element: u.data[l], index: l } }),
            o = !Bu(r, i),
            s = this._positionChanged(i, n);
        (o || s) && (this._active = i, this._eventPosition = n, this._ignoreReplayEvents = !0, this.update(!0))
    }
    handleEvent(t, n, r = !0) {
        if (n && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const i = this.options,
            o = this._active || [],
            s = this._getActiveElements(t, o, n, r),
            a = this._positionChanged(s, t),
            l = n || !Bu(s, o) || a;
        return l && (this._active = s, (i.enabled || i.external) && (this._eventPosition = { x: t.x, y: t.y }, this.update(!0, n))), l
    }
    _getActiveElements(t, n, r, i) { const o = this.options; if (t.type === "mouseout") return []; if (!i) return n; const s = this.chart.getElementsAtEventForMode(t, o.mode, o, r); return o.reverse && s.reverse(), s }
    _positionChanged(t, n) { const { caretX: r, caretY: i, options: o } = this, s = Ya[o.position].call(this, t, n); return s !== !1 && (r !== s.x || i !== s.y) }
}
Lp.positioners = Ya;
var sI = {
    id: "tooltip",
    _element: Lp,
    positioners: Ya,
    afterInit(e, t, n) { n && (e.tooltip = new Lp({ chart: e, options: n })) },
    beforeUpdate(e, t, n) { e.tooltip && e.tooltip.initialize(n) },
    reset(e, t, n) { e.tooltip && e.tooltip.initialize(n) },
    afterDraw(e) {
        const t = e.tooltip,
            n = { tooltip: t };
        e.notifyPlugins("beforeTooltipDraw", n) !== !1 && (t && t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n))
    },
    afterEvent(e, t) {
        if (e.tooltip) {
            const n = t.replay;
            e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0)
        }
    },
    defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: { weight: "bold" },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: { weight: "bold" },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (e, t) => t.bodyFont.size,
        boxWidth: (e, t) => t.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: { duration: 400, easing: "easeOutQuart" },
        animations: { numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] }, opacity: { easing: "linear", duration: 200 } },
        callbacks: {
            beforeTitle: _r,
            title(e) {
                if (e.length > 0) {
                    const t = e[0],
                        n = t.chart.data.labels,
                        r = n ? n.length : 0;
                    if (this && this.options && this.options.mode === "dataset") return t.dataset.label || "";
                    if (t.label) return t.label;
                    if (r > 0 && t.dataIndex < r) return n[t.dataIndex]
                }
                return ""
            },
            afterTitle: _r,
            beforeBody: _r,
            beforeLabel: _r,
            label(e) {
                if (this && this.options && this.options.mode === "dataset") return e.label + ": " + e.formattedValue || e.formattedValue;
                let t = e.dataset.label || "";
                t && (t += ": ");
                const n = e.formattedValue;
                return Je(n) || (t += n), t
            },
            labelColor(e) { const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex); return { borderColor: n.borderColor, backgroundColor: n.backgroundColor, borderWidth: n.borderWidth, borderDash: n.borderDash, borderDashOffset: n.borderDashOffset, borderRadius: 0 } },
            labelTextColor() { return this.options.bodyColor },
            labelPointStyle(e) { const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex); return { pointStyle: n.pointStyle, rotation: n.rotation } },
            afterLabel: _r,
            afterBody: _r,
            beforeFooter: _r,
            footer: _r,
            afterFooter: _r
        }
    },
    defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
    descriptors: { _scriptable: e => e !== "filter" && e !== "itemSort" && e !== "external", _indexable: !1, callbacks: { _scriptable: !1, _indexable: !1 }, animation: { _fallback: !1 }, animations: { _fallback: "animation" } },
    additionalOptionScopes: ["interaction"]
};
const kD = (e, t, n, r) => (typeof t == "string" ? (n = e.push(t) - 1, r.unshift({ index: n, label: t })) : isNaN(t) && (n = null), n);

function CD(e, t, n, r) { const i = e.indexOf(t); if (i === -1) return kD(e, t, n, r); const o = e.lastIndexOf(t); return i !== o ? n : i }
const MD = (e, t) => e === null ? null : Xt(Math.round(e), 0, t);
class Fp extends Xi {
    constructor(t) {
        super(t);
        this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
    }
    init(t) {
        const n = this._addedLabels;
        if (n.length) {
            const r = this.getLabels();
            for (const { index: i, label: o }
                of n) r[i] === o && r.splice(i, 1);
            this._addedLabels = []
        }
        super.init(t)
    }
    parse(t, n) { if (Je(t)) return null; const r = this.getLabels(); return n = isFinite(n) && r[n] === t ? n : CD(r, t, Fe(n, t), this._addedLabels), MD(n, r.length - 1) }
    determineDataLimits() {
        const { minDefined: t, maxDefined: n } = this.getUserBounds();
        let { min: r, max: i } = this.getMinMax(!0);
        this.options.bounds === "ticks" && (t || (r = 0), n || (i = this.getLabels().length - 1)), this.min = r, this.max = i
    }
    buildTicks() {
        const t = this.min,
            n = this.max,
            r = this.options.offset,
            i = [];
        let o = this.getLabels();
        o = t === 0 && n === o.length - 1 ? o : o.slice(t, n + 1), this._valueRange = Math.max(o.length - (r ? 0 : 1), 1), this._startValue = this.min - (r ? .5 : 0);
        for (let s = t; s <= n; s++) i.push({ value: s });
        return i
    }
    getLabelForValue(t) { const n = this.getLabels(); return t >= 0 && t < n.length ? n[t] : t }
    configure() { super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels) }
    getPixelForValue(t) { return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange) }
    getPixelForTick(t) { const n = this.ticks; return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value) }
    getValueForPixel(t) { return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange) }
    getBasePixel() { return this.bottom }
}
Fp.id = "category";
Fp.defaults = { ticks: { callback: Fp.prototype.getLabelForValue } };

function ED(e, t) {
    const n = [],
        r = 1e-14,
        { bounds: i, step: o, min: s, max: a, precision: l, count: u, maxTicks: c, maxDigits: d, includeBounds: h } = e,
        y = o || 1,
        w = c - 1,
        { min: b, max: g } = t,
        m = !Je(s),
        S = !Je(a),
        k = !Je(u),
        E = (g - b) / (d + 1);
    let P = t1((g - b) / w / y) * y,
        T, I, U, z;
    if (P < r && !m && !S) return [{ value: b }, { value: g }];
    z = Math.ceil(g / P) - Math.floor(b / P), z > w && (P = t1(z * P / w / y) * y), Je(l) || (T = Math.pow(10, l), P = Math.ceil(P * T) / T), i === "ticks" ? (I = Math.floor(b / P) * P, U = Math.ceil(g / P) * P) : (I = b, U = g), m && S && o && TC((a - s) / o, P / 1e3) ? (z = Math.round(Math.min((a - s) / P, c)), P = (a - s) / z, I = s, U = a) : k ? (I = m ? s : I, U = S ? a : U, z = u - 1, P = (U - I) / z) : (z = (U - I) / P, Ma(z, Math.round(z), P / 1e3) ? z = Math.round(z) : z = Math.ceil(z));
    const ve = Math.max(r1(P), r1(I));
    T = Math.pow(10, Je(l) ? ve : l), I = Math.round(I * T) / T, U = Math.round(U * T) / T;
    let Ee = 0;
    for (m && (h && I !== s ? (n.push({ value: s }), I < s && Ee++, Ma(Math.round((I + Ee * P) * T) / T, s, qw(s, E, e)) && Ee++) : I < s && Ee++); Ee < z; ++Ee) n.push({ value: Math.round((I + Ee * P) * T) / T });
    return S && h && U !== a ? n.length && Ma(n[n.length - 1].value, a, qw(a, E, e)) ? n[n.length - 1].value = a : n.push({ value: a }) : (!S || U === a) && n.push({ value: U }), n
}

function qw(e, t, { horizontal: n, minRotation: r }) {
    const i = Gn(r),
        o = (n ? Math.sin(i) : Math.cos(i)) || .001,
        s = .75 * t * ("" + e).length;
    return Math.min(t / o, s)
}
class pc extends Xi {
    constructor(t) {
        super(t);
        this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
    }
    parse(t, n) { return Je(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t }
    handleTickRangeOptions() {
        const { beginAtZero: t } = this.options, { minDefined: n, maxDefined: r } = this.getUserBounds();
        let { min: i, max: o } = this;
        const s = l => i = n ? i : l,
            a = l => o = r ? o : l;
        if (t) {
            const l = sr(i),
                u = sr(o);
            l < 0 && u < 0 ? a(0) : l > 0 && u > 0 && s(0)
        }
        if (i === o) {
            let l = 1;
            (o >= Number.MAX_SAFE_INTEGER || i <= Number.MIN_SAFE_INTEGER) && (l = Math.abs(o * .05)), a(o + l), t || s(i - l)
        }
        this.min = i, this.max = o
    }
    getTickLimit() { const t = this.options.ticks; let { maxTicksLimit: n, stepSize: r } = t, i; return r ? (i = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1, i > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`), i = 1e3)) : (i = this.computeTickLimit(), n = n || 11), n && (i = Math.min(n, i)), i }
    computeTickLimit() { return Number.POSITIVE_INFINITY }
    buildTicks() {
        const t = this.options,
            n = t.ticks;
        let r = this.getTickLimit();
        r = Math.max(2, r);
        const i = { maxTicks: r, bounds: t.bounds, min: t.min, max: t.max, precision: n.precision, step: n.stepSize, count: n.count, maxDigits: this._maxDigits(), horizontal: this.isHorizontal(), minRotation: n.minRotation || 0, includeBounds: n.includeBounds !== !1 },
            o = this._range || this,
            s = ED(i, o);
        return t.bounds === "ticks" && n1(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s
    }
    configure() {
        const t = this.ticks;
        let n = this.min,
            r = this.max;
        if (super.configure(), this.options.offset && t.length) {
            const i = (r - n) / Math.max(t.length - 1, 1) / 2;
            n -= i, r += i
        }
        this._startValue = n, this._endValue = r, this._valueRange = r - n
    }
    getLabelForValue(t) { return Aa(t, this.chart.options.locale, this.options.ticks.format) }
}
class Kw extends pc {
    determineDataLimits() {
        const { min: t, max: n } = this.getMinMax(!0);
        this.min = St(t) ? t : 0, this.max = St(n) ? n : 1, this.handleTickRangeOptions()
    }
    computeTickLimit() {
        const t = this.isHorizontal(),
            n = t ? this.width : this.height,
            r = Gn(this.options.ticks.minRotation),
            i = (t ? Math.sin(r) : Math.cos(r)) || .001,
            o = this._resolveTickFontOptions(0);
        return Math.ceil(n / Math.min(40, o.lineHeight / i))
    }
    getPixelForValue(t) { return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange) }
    getValueForPixel(t) { return this._startValue + this.getDecimalForPixel(t) * this._valueRange }
}
Kw.id = "linear";
Kw.defaults = { ticks: { callback: lc.formatters.numeric } };

function Qw(e) { return e / Math.pow(10, Math.floor(In(e))) === 1 }

function OD(e, t) {
    const n = Math.floor(In(t.max)),
        r = Math.ceil(t.max / Math.pow(10, n)),
        i = [];
    let o = Ln(e.min, Math.pow(10, Math.floor(In(t.min)))),
        s = Math.floor(In(o)),
        a = Math.floor(o / Math.pow(10, s)),
        l = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
    do i.push({ value: o, major: Qw(o) }), ++a, a === 10 && (a = 1, ++s, l = s >= 0 ? 1 : l), o = Math.round(a * Math.pow(10, s) * l) / l; while (s < n || s === n && a < r);
    const u = Ln(e.max, o);
    return i.push({ value: u, major: Qw(o) }), i
}
class Zw extends Xi {
    constructor(t) {
        super(t);
        this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
    }
    parse(t, n) { const r = pc.prototype.parse.apply(this, [t, n]); if (r === 0) { this._zero = !0; return } return St(r) && r > 0 ? r : null }
    determineDataLimits() {
        const { min: t, max: n } = this.getMinMax(!0);
        this.min = St(t) ? Math.max(0, t) : null, this.max = St(n) ? Math.max(0, n) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions()
    }
    handleTickRangeOptions() {
        const { minDefined: t, maxDefined: n } = this.getUserBounds();
        let r = this.min,
            i = this.max;
        const o = l => r = t ? r : l,
            s = l => i = n ? i : l,
            a = (l, u) => Math.pow(10, Math.floor(In(l)) + u);
        r === i && (r <= 0 ? (o(1), s(10)) : (o(a(r, -1)), s(a(i, 1)))), r <= 0 && o(a(i, -1)), i <= 0 && s(a(r, 1)), this._zero && this.min !== this._suggestedMin && r === a(this.min, 0) && o(a(r, -1)), this.min = r, this.max = i
    }
    buildTicks() {
        const t = this.options,
            n = { min: this._userMin, max: this._userMax },
            r = OD(n, this);
        return t.bounds === "ticks" && n1(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r
    }
    getLabelForValue(t) { return t === void 0 ? "0" : Aa(t, this.chart.options.locale, this.options.ticks.format) }
    configure() {
        const t = this.min;
        super.configure(), this._startValue = In(t), this._valueRange = In(this.max) - In(t)
    }
    getPixelForValue(t) { return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (In(t) - this._startValue) / this._valueRange) }
    getValueForPixel(t) { const n = this.getDecimalForPixel(t); return Math.pow(10, this._startValue + n * this._valueRange) }
}
Zw.id = "logarithmic";
Zw.defaults = { ticks: { callback: lc.formatters.logarithmic, major: { enabled: !0 } } };

function Ip(e) { const t = e.ticks; if (t.display && e.display) { const n = rn(t.backdropPadding); return Fe(t.font && t.font.size, Ye.font.size) + n.height } return 0 }

function DD(e, t, n) { return n = ct(n) ? n : [n], { w: nM(e, t.string, n), h: n.length * t.lineHeight } }

function Jw(e, t, n, r, i) { return e === r || e === i ? { start: t - n / 2, end: t + n / 2 } : e < r || e > i ? { start: t - n, end: t } : { start: t, end: t + n } }

function PD(e) {
    const t = { l: e.left + e._padding.left, r: e.right - e._padding.right, t: e.top + e._padding.top, b: e.bottom - e._padding.bottom },
        n = Object.assign({}, t),
        r = [],
        i = [],
        o = e._pointLabels.length,
        s = e.options.pointLabels,
        a = s.centerPointLabels ? wt / o : 0;
    for (let l = 0; l < o; l++) {
        const u = s.setContext(e.getPointLabelContext(l));
        i[l] = u.padding;
        const c = e.getPointPosition(l, e.drawingArea + i[l], a),
            d = Bt(u.font),
            h = DD(e.ctx, d, e._pointLabels[l]);
        r[l] = h;
        const y = wn(e.getIndexAngle(l) + a),
            w = Math.round(Gh(y)),
            b = Jw(w, c.x, h.w, 0, 180),
            g = Jw(w, c.y, h.h, 90, 270);
        RD(n, t, y, b, g)
    }
    e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b), e._pointLabelItems = TD(e, r, i)
}

function RD(e, t, n, r, i) {
    const o = Math.abs(Math.sin(n)),
        s = Math.abs(Math.cos(n));
    let a = 0,
        l = 0;
    r.start < t.l ? (a = (t.l - r.start) / o, e.l = Math.min(e.l, t.l - a)) : r.end > t.r && (a = (r.end - t.r) / o, e.r = Math.max(e.r, t.r + a)), i.start < t.t ? (l = (t.t - i.start) / s, e.t = Math.min(e.t, t.t - l)) : i.end > t.b && (l = (i.end - t.b) / s, e.b = Math.max(e.b, t.b + l))
}

function TD(e, t, n) {
    const r = [],
        i = e._pointLabels.length,
        o = e.options,
        s = Ip(o) / 2,
        a = e.drawingArea,
        l = o.pointLabels.centerPointLabels ? wt / i : 0;
    for (let u = 0; u < i; u++) {
        const c = e.getPointPosition(u, a + s + n[u], l),
            d = Math.round(Gh(wn(c.angle + xt))),
            h = t[u],
            y = FD(c.y, h.h, d),
            w = AD(d),
            b = LD(c.x, h.w, w);
        r.push({ x: c.x, y, textAlign: w, left: b, top: y, right: b + h.w, bottom: y + h.h })
    }
    return r
}

function AD(e) { return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right" }

function LD(e, t, n) { return n === "right" ? e -= t : n === "center" && (e -= t / 2), e }

function FD(e, t, n) { return n === 90 || n === 270 ? e -= t / 2 : (n > 270 || n < 90) && (e -= t), e }

function ID(e, t) {
    const { ctx: n, options: { pointLabels: r } } = e;
    for (let i = t - 1; i >= 0; i--) {
        const o = r.setContext(e.getPointLabelContext(i)),
            s = Bt(o.font),
            { x: a, y: l, textAlign: u, left: c, top: d, right: h, bottom: y } = e._pointLabelItems[i],
            { backdropColor: w } = o;
        if (!Je(w)) {
            const b = rn(o.backdropPadding);
            n.fillStyle = w, n.fillRect(c - b.left, d - b.top, h - c + b.width, y - d + b.height)
        }
        Wo(n, e._pointLabels[i], a, l + s.lineHeight / 2, s, { color: o.color, textAlign: u, textBaseline: "middle" })
    }
}

function ex(e, t, n, r) {
    const { ctx: i } = e;
    if (n) i.arc(e.xCenter, e.yCenter, t, 0, it);
    else {
        let o = e.getPointPosition(0, t);
        i.moveTo(o.x, o.y);
        for (let s = 1; s < r; s++) o = e.getPointPosition(s, t), i.lineTo(o.x, o.y)
    }
}

function ND(e, t, n, r) {
    const i = e.ctx,
        o = t.circular,
        { color: s, lineWidth: a } = t;
    !o && !r || !s || !a || n < 0 || (i.save(), i.strokeStyle = s, i.lineWidth = a, i.setLineDash(t.borderDash), i.lineDashOffset = t.borderDashOffset, i.beginPath(), ex(e, n, o, r), i.closePath(), i.stroke(), i.restore())
}

function jD(e, t, n) { return ai(e, { label: n, index: t, type: "pointLabel" }) }
class mc extends pc {
    constructor(t) {
        super(t);
        this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
    }
    setDimensions() {
        const t = this._padding = rn(Ip(this.options) / 2),
            n = this.width = this.maxWidth - t.width,
            r = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + n / 2 + t.left), this.yCenter = Math.floor(this.top + r / 2 + t.top), this.drawingArea = Math.floor(Math.min(n, r) / 2)
    }
    determineDataLimits() {
        const { min: t, max: n } = this.getMinMax(!1);
        this.min = St(t) && !isNaN(t) ? t : 0, this.max = St(n) && !isNaN(n) ? n : 0, this.handleTickRangeOptions()
    }
    computeTickLimit() { return Math.ceil(this.drawingArea / Ip(this.options)) }
    generateTickLabels(t) { pc.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((n, r) => { const i = st(this.options.pointLabels.callback, [n, r], this); return i || i === 0 ? i : "" }).filter((n, r) => this.chart.getDataVisibility(r)) }
    fit() {
        const t = this.options;
        t.display && t.pointLabels.display ? PD(this) : this.setCenterPoint(0, 0, 0, 0)
    }
    setCenterPoint(t, n, r, i) { this.xCenter += Math.floor((t - n) / 2), this.yCenter += Math.floor((r - i) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, r, i)) }
    getIndexAngle(t) {
        const n = it / (this._pointLabels.length || 1),
            r = this.options.startAngle || 0;
        return wn(t * n + Gn(r))
    }
    getDistanceFromCenterForValue(t) { if (Je(t)) return NaN; const n = this.drawingArea / (this.max - this.min); return this.options.reverse ? (this.max - t) * n : (t - this.min) * n }
    getValueForDistanceFromCenter(t) { if (Je(t)) return NaN; const n = t / (this.drawingArea / (this.max - this.min)); return this.options.reverse ? this.max - n : this.min + n }
    getPointLabelContext(t) { const n = this._pointLabels || []; if (t >= 0 && t < n.length) { const r = n[t]; return jD(this.getContext(), t, r) } }
    getPointPosition(t, n, r = 0) { const i = this.getIndexAngle(t) - xt + r; return { x: Math.cos(i) * n + this.xCenter, y: Math.sin(i) * n + this.yCenter, angle: i } }
    getPointPositionForValue(t, n) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(n)) }
    getBasePosition(t) { return this.getPointPositionForValue(t || 0, this.getBaseValue()) }
    getPointLabelPosition(t) { const { left: n, top: r, right: i, bottom: o } = this._pointLabelItems[t]; return { left: n, top: r, right: i, bottom: o } }
    drawBackground() {
        const { backgroundColor: t, grid: { circular: n } } = this.options;
        if (t) {
            const r = this.ctx;
            r.save(), r.beginPath(), ex(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length), r.closePath(), r.fillStyle = t, r.fill(), r.restore()
        }
    }
    drawGrid() {
        const t = this.ctx,
            n = this.options,
            { angleLines: r, grid: i } = n,
            o = this._pointLabels.length;
        let s, a, l;
        if (n.pointLabels.display && ID(this, o), i.display && this.ticks.forEach((u, c) => {
                if (c !== 0) {
                    a = this.getDistanceFromCenterForValue(u.value);
                    const d = i.setContext(this.getContext(c - 1));
                    ND(this, d, a, o)
                }
            }), r.display) {
            for (t.save(), s = o - 1; s >= 0; s--) {
                const u = r.setContext(this.getPointLabelContext(s)),
                    { color: c, lineWidth: d } = u;
                !d || !c || (t.lineWidth = d, t.strokeStyle = c, t.setLineDash(u.borderDash), t.lineDashOffset = u.borderDashOffset, a = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max), l = this.getPointPosition(s, a), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke())
            }
            t.restore()
        }
    }
    drawBorder() {}
    drawLabels() {
        const t = this.ctx,
            n = this.options,
            r = n.ticks;
        if (!r.display) return;
        const i = this.getIndexAngle(0);
        let o, s;
        t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(i), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
            if (l === 0 && !n.reverse) return;
            const u = r.setContext(this.getContext(l)),
                c = Bt(u.font);
            if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), u.showLabelBackdrop) {
                t.font = c.string, s = t.measureText(a.label).width, t.fillStyle = u.backdropColor;
                const d = rn(u.backdropPadding);
                t.fillRect(-s / 2 - d.left, -o - c.size / 2 - d.top, s + d.width, c.size + d.height)
            }
            Wo(t, a.label, 0, -o, c, { color: u.color })
        }), t.restore()
    }
    drawTitle() {}
}
mc.id = "radialLinear";
mc.defaults = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 }, grid: { circular: !1 }, startAngle: 0, ticks: { showLabelBackdrop: !0, callback: lc.formatters.numeric }, pointLabels: { backdropColor: void 0, backdropPadding: 2, display: !0, font: { size: 10 }, callback(e) { return e }, padding: 5, centerPointLabels: !1 } };
mc.defaultRoutes = { "angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color" };
mc.descriptors = { angleLines: { _fallback: "grid" } };
const gc = { millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 } },
    fn = Object.keys(gc);

function zD(e, t) { return e - t }

function tx(e, t) {
    if (Je(t)) return null;
    const n = e._adapter,
        { parser: r, round: i, isoWeekday: o } = e._parseOpts;
    let s = t;
    return typeof r == "function" && (s = r(s)), St(s) || (s = typeof r == "string" ? n.parse(s, r) : n.parse(s)), s === null ? null : (i && (s = i === "week" && (Ca(o) || o === !0) ? n.startOf(s, "isoWeek", o) : n.startOf(s, i)), +s)
}

function nx(e, t, n, r) {
    const i = fn.length;
    for (let o = fn.indexOf(e); o < i - 1; ++o) {
        const s = gc[fn[o]],
            a = s.steps ? s.steps : Number.MAX_SAFE_INTEGER;
        if (s.common && Math.ceil((n - t) / (a * s.size)) <= r) return fn[o]
    }
    return fn[i - 1]
}

function BD(e, t, n, r, i) { for (let o = fn.length - 1; o >= fn.indexOf(n); o--) { const s = fn[o]; if (gc[s].common && e._adapter.diff(i, r, s) >= t - 1) return s } return fn[n ? fn.indexOf(n) : 0] }

function WD(e) {
    for (let t = fn.indexOf(e) + 1, n = fn.length; t < n; ++t)
        if (gc[fn[t]].common) return fn[t]
}

function rx(e, t, n) {
    if (!n) e[t] = !0;
    else if (n.length) {
        const { lo: r, hi: i } = ip(n, t), o = n[r] >= t ? n[r] : n[i];
        e[o] = !0
    }
}

function HD(e, t, n, r) {
    const i = e._adapter,
        o = +i.startOf(t[0].value, r),
        s = t[t.length - 1].value;
    let a, l;
    for (a = o; a <= s; a = +i.add(a, 1, r)) l = n[a], l >= 0 && (t[l].major = !0);
    return t
}

function ix(e, t, n) {
    const r = [],
        i = {},
        o = t.length;
    let s, a;
    for (s = 0; s < o; ++s) a = t[s], i[a] = s, r.push({ value: a, major: !1 });
    return o === 0 || !n ? r : HD(e, r, i, n)
}
class yc extends Xi {
    constructor(t) {
        super(t);
        this._cache = { data: [], labels: [], all: [] }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
    }
    init(t, n) {
        const r = t.time || (t.time = {}),
            i = this._adapter = new nw._date(t.adapters.date);
        Sa(r.displayFormats, i.formats()), this._parseOpts = { parser: r.parser, round: r.round, isoWeekday: r.isoWeekday }, super.init(t), this._normalized = n.normalized
    }
    parse(t, n) { return t === void 0 ? null : tx(this, t) }
    beforeLayout() { super.beforeLayout(), this._cache = { data: [], labels: [], all: [] } }
    determineDataLimits() {
        const t = this.options,
            n = this._adapter,
            r = t.time.unit || "day";
        let { min: i, max: o, minDefined: s, maxDefined: a } = this.getUserBounds();

        function l(u) {!s && !isNaN(u.min) && (i = Math.min(i, u.min)), !a && !isNaN(u.max) && (o = Math.max(o, u.max)) }(!s || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), i = St(i) && !isNaN(i) ? i : +n.startOf(Date.now(), r), o = St(o) && !isNaN(o) ? o : +n.endOf(Date.now(), r) + 1, this.min = Math.min(i, o - 1), this.max = Math.max(i + 1, o)
    }
    _getLabelBounds() {
        const t = this.getLabelTimestamps();
        let n = Number.POSITIVE_INFINITY,
            r = Number.NEGATIVE_INFINITY;
        return t.length && (n = t[0], r = t[t.length - 1]), { min: n, max: r }
    }
    buildTicks() {
        const t = this.options,
            n = t.time,
            r = t.ticks,
            i = r.source === "labels" ? this.getLabelTimestamps() : this._generate();
        t.bounds === "ticks" && i.length && (this.min = this._userMin || i[0], this.max = this._userMax || i[i.length - 1]);
        const o = this.min,
            s = this.max,
            a = hM(i, o, s);
        return this._unit = n.unit || (r.autoSkip ? nx(n.minUnit, this.min, this.max, this._getLabelCapacity(o)) : BD(this, a.length, n.minUnit, this.min, this.max)), this._majorUnit = !r.major.enabled || this._unit === "year" ? void 0 : WD(this._unit), this.initOffsets(i), t.reverse && a.reverse(), ix(this, a, this._majorUnit)
    }
    initOffsets(t) {
        let n = 0,
            r = 0,
            i, o;
        this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), t.length === 1 ? n = 1 - i : n = (this.getDecimalForValue(t[1]) - i) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? r = o : r = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
        const s = t.length < 3 ? .5 : .25;
        n = Xt(n, 0, s), r = Xt(r, 0, s), this._offsets = { start: n, end: r, factor: 1 / (n + 1 + r) }
    }
    _generate() {
        const t = this._adapter,
            n = this.min,
            r = this.max,
            i = this.options,
            o = i.time,
            s = o.unit || nx(o.minUnit, n, r, this._getLabelCapacity(n)),
            a = Fe(o.stepSize, 1),
            l = s === "week" ? o.isoWeekday : !1,
            u = Ca(l) || l === !0,
            c = {};
        let d = n,
            h, y;
        if (u && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, u ? "day" : s), t.diff(r, n, s) > 1e5 * a) throw new Error(n + " and " + r + " are too far apart with stepSize of " + a + " " + s);
        const w = i.ticks.source === "data" && this.getDataTimestamps();
        for (h = d, y = 0; h < r; h = +t.add(h, a, s), y++) rx(c, h, w);
        return (h === r || i.bounds === "ticks" || y === 1) && rx(c, h, w), Object.keys(c).sort((b, g) => b - g).map(b => +b)
    }
    getLabelForValue(t) {
        const n = this._adapter,
            r = this.options.time;
        return r.tooltipFormat ? n.format(t, r.tooltipFormat) : n.format(t, r.displayFormats.datetime)
    }
    _tickFormatFunction(t, n, r, i) {
        const o = this.options,
            s = o.time.displayFormats,
            a = this._unit,
            l = this._majorUnit,
            u = a && s[a],
            c = l && s[l],
            d = r[n],
            h = l && c && d && d.major,
            y = this._adapter.format(t, i || (h ? c : u)),
            w = o.ticks.callback;
        return w ? st(w, [y, n, r], this) : y
    }
    generateTickLabels(t) { let n, r, i; for (n = 0, r = t.length; n < r; ++n) i = t[n], i.label = this._tickFormatFunction(i.value, n, t) }
    getDecimalForValue(t) { return t === null ? NaN : (t - this.min) / (this.max - this.min) }
    getPixelForValue(t) {
        const n = this._offsets,
            r = this.getDecimalForValue(t);
        return this.getPixelForDecimal((n.start + r) * n.factor)
    }
    getValueForPixel(t) {
        const n = this._offsets,
            r = this.getDecimalForPixel(t) / n.factor - n.end;
        return this.min + r * (this.max - this.min)
    }
    _getLabelSize(t) {
        const n = this.options.ticks,
            r = this.ctx.measureText(t).width,
            i = Gn(this.isHorizontal() ? n.maxRotation : n.minRotation),
            o = Math.cos(i),
            s = Math.sin(i),
            a = this._resolveTickFontOptions(0).size;
        return { w: r * o + a * s, h: r * s + a * o }
    }
    _getLabelCapacity(t) {
        const n = this.options.time,
            r = n.displayFormats,
            i = r[n.unit] || r.millisecond,
            o = this._tickFormatFunction(t, 0, ix(this, [t], this._majorUnit), i),
            s = this._getLabelSize(o),
            a = Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) - 1;
        return a > 0 ? a : 1
    }
    getDataTimestamps() {
        let t = this._cache.data || [],
            n, r;
        if (t.length) return t;
        const i = this.getMatchingVisibleMetas();
        if (this._normalized && i.length) return this._cache.data = i[0].controller.getAllParsedValues(this);
        for (n = 0, r = i.length; n < r; ++n) t = t.concat(i[n].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t)
    }
    getLabelTimestamps() { const t = this._cache.labels || []; let n, r; if (t.length) return t; const i = this.getLabels(); for (n = 0, r = i.length; n < r; ++n) t.push(tx(this, i[n])); return this._cache.labels = this._normalized ? t : this.normalize(t) }
    normalize(t) { return b1(t.sort(zD)) }
}
yc.id = "time";
yc.defaults = { bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { source: "auto", major: { enabled: !1 } } };

function vc(e, t, n) {
    let r = 0,
        i = e.length - 1,
        o, s, a, l;
    n ? (t >= e[r].pos && t <= e[i].pos && ({ lo: r, hi: i } = $i(e, "pos", t)), { pos: o, time: a } = e[r], { pos: s, time: l } = e[i]) : (t >= e[r].time && t <= e[i].time && ({ lo: r, hi: i } = $i(e, "time", t)), { time: o, pos: a } = e[r], { time: s, pos: l } = e[i]);
    const u = s - o;
    return u ? a + (l - a) * (t - o) / u : a
}
class ox extends yc {
    constructor(t) {
        super(t);
        this._table = [], this._minPos = void 0, this._tableRange = void 0
    }
    initOffsets() {
        const t = this._getTimestampsForTable(),
            n = this._table = this.buildLookupTable(t);
        this._minPos = vc(n, this.min), this._tableRange = vc(n, this.max) - this._minPos, super.initOffsets(t)
    }
    buildLookupTable(t) { const { min: n, max: r } = this, i = [], o = []; let s, a, l, u, c; for (s = 0, a = t.length; s < a; ++s) u = t[s], u >= n && u <= r && i.push(u); if (i.length < 2) return [{ time: n, pos: 0 }, { time: r, pos: 1 }]; for (s = 0, a = i.length; s < a; ++s) c = i[s + 1], l = i[s - 1], u = i[s], Math.round((c + l) / 2) !== u && o.push({ time: u, pos: s / (a - 1) }); return o }
    _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        const n = this.getDataTimestamps(),
            r = this.getLabelTimestamps();
        return n.length && r.length ? t = this.normalize(n.concat(r)) : t = n.length ? n : r, t = this._cache.all = t, t
    }
    getDecimalForValue(t) { return (vc(this._table, t) - this._minPos) / this._tableRange }
    getValueForPixel(t) {
        const n = this._offsets,
            r = this.getDecimalForPixel(t) / n.factor - n.end;
        return vc(this._table, r * this._tableRange + this._minPos, !0)
    }
}
ox.id = "timeseries";
ox.defaults = yc.defaults;
var Np = {},
    jp = {},
    zp = {};
Object.defineProperty(zp, "__esModule", { value: !0 });
zp.default = YD;

function YD(e) { if (e = `${e}`, e === "0") return "0"; if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e)) return e.replace(/^[+-]?/, t => t === "-" ? "" : "-"); if (e.includes("var(") || e.includes("calc(")) return `calc(${e} * -1)` }
var wc = {};
Object.defineProperty(wc, "__esModule", { value: !0 });
wc.default = void 0;
var $D = ["preflight", "container", "accessibility", "pointerEvents", "visibility", "position", "inset", "isolation", "zIndex", "order", "gridColumn", "gridColumnStart", "gridColumnEnd", "gridRow", "gridRowStart", "gridRowEnd", "float", "clear", "margin", "boxSizing", "display", "aspectRatio", "height", "maxHeight", "minHeight", "width", "minWidth", "maxWidth", "flex", "flexShrink", "flexGrow", "flexBasis", "tableLayout", "borderCollapse", "transformOrigin", "translate", "rotate", "skew", "scale", "transform", "animation", "cursor", "touchAction", "userSelect", "resize", "scrollSnapType", "scrollSnapAlign", "scrollSnapStop", "scrollMargin", "scrollPadding", "listStylePosition", "listStyleType", "appearance", "columns", "breakBefore", "breakInside", "breakAfter", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "flexDirection", "flexWrap", "placeContent", "placeItems", "alignContent", "alignItems", "justifyContent", "justifyItems", "gap", "space", "divideWidth", "divideStyle", "divideColor", "divideOpacity", "placeSelf", "alignSelf", "justifySelf", "overflow", "overscrollBehavior", "scrollBehavior", "textOverflow", "whitespace", "wordBreak", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderOpacity", "backgroundColor", "backgroundOpacity", "backgroundImage", "gradientColorStops", "boxDecorationBreak", "backgroundSize", "backgroundAttachment", "backgroundClip", "backgroundPosition", "backgroundRepeat", "backgroundOrigin", "fill", "stroke", "strokeWidth", "objectFit", "objectPosition", "padding", "textAlign", "textIndent", "verticalAlign", "fontFamily", "fontSize", "fontWeight", "textTransform", "fontStyle", "fontVariantNumeric", "lineHeight", "letterSpacing", "textColor", "textOpacity", "textDecoration", "textDecorationColor", "textDecorationStyle", "textDecorationThickness", "textUnderlineOffset", "fontSmoothing", "placeholderColor", "placeholderOpacity", "caretColor", "accentColor", "opacity", "backgroundBlendMode", "mixBlendMode", "boxShadow", "boxShadowColor", "outlineStyle", "outlineWidth", "outlineOffset", "outlineColor", "ringWidth", "ringColor", "ringOpacity", "ringOffsetWidth", "ringOffsetColor", "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia", "filter", "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia", "backdropFilter", "transitionProperty", "transitionDelay", "transitionDuration", "transitionTimingFunction", "willChange", "content"];
wc.default = $D;
var Bp = {};
Object.defineProperty(Bp, "__esModule", { value: !0 });
Bp.default = VD;

function VD(e, t) { return e === void 0 ? t : Array.isArray(e) ? e : [...new Set(t.filter(r => e !== !1 && e[r] !== !1).concat(Object.keys(e).filter(r => e[r] !== !1)))] }
var sx = { content: [], presets: [], darkMode: "media", theme: { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: ({ colors: e }) => ({ inherit: e.inherit, current: e.current, transparent: e.transparent, black: e.black, white: e.white, slate: e.slate, gray: e.gray, zinc: e.zinc, neutral: e.neutral, stone: e.stone, red: e.red, orange: e.orange, amber: e.amber, yellow: e.yellow, lime: e.lime, green: e.green, emerald: e.emerald, teal: e.teal, cyan: e.cyan, sky: e.sky, blue: e.blue, indigo: e.indigo, violet: e.violet, purple: e.purple, fuchsia: e.fuchsia, pink: e.pink, rose: e.rose }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", .5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" }, backdropBlur: ({ theme: e }) => e("blur"), backdropBrightness: ({ theme: e }) => e("brightness"), backdropContrast: ({ theme: e }) => e("contrast"), backdropGrayscale: ({ theme: e }) => e("grayscale"), backdropHueRotate: ({ theme: e }) => e("hueRotate"), backdropInvert: ({ theme: e }) => e("invert"), backdropOpacity: ({ theme: e }) => e("opacity"), backdropSaturate: ({ theme: e }) => e("saturate"), backdropSepia: ({ theme: e }) => e("sepia"), backgroundColor: ({ theme: e }) => e("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: e }) => e("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2" }, borderColor: ({ theme: e }) => mn(Et({}, e("colors")), { DEFAULT: e("colors.gray.200", "currentColor") }), borderOpacity: ({ theme: e }) => e("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px" }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: e }) => e("colors"), caretColor: ({ theme: e }) => e("colors"), accentColor: ({ theme: e }) => mn(Et({}, e("colors")), { auto: "auto" }), contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2" }, container: {}, content: { none: "none" }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: e }) => e("borderColor"), divideOpacity: ({ theme: e }) => e("borderOpacity"), divideWidth: ({ theme: e }) => e("borderWidth"), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: e }) => e("colors"), grayscale: { 0: "0", DEFAULT: "100%" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { 0: "0", DEFAULT: "100%" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e }) => mn(Et({ auto: "auto" }, e("spacing")), { "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%" }), flexGrow: { 0: "0", DEFAULT: "1" }, flexShrink: { 0: "0", DEFAULT: "1" }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: e }) => e("spacing"), gradientColorStops: ({ theme: e }) => e("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-full": "1 / -1" }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridTemplateColumns: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))" }, gridTemplateRows: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))" }, height: ({ theme: e }) => mn(Et({ auto: "auto" }, e("spacing")), { "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), inset: ({ theme: e }) => mn(Et({ auto: "auto" }, e("spacing")), { "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, margin: ({ theme: e }) => Et({ auto: "auto" }, e("spacing")), maxHeight: ({ theme: e }) => mn(Et({}, e("spacing")), { full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), maxWidth: ({ theme: e, breakpoints: t }) => Et({ none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }, t(e("screens"))), minHeight: { 0: "0px", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 20: "0.2", 25: "0.25", 30: "0.3", 40: "0.4", 50: "0.5", 60: "0.6", 70: "0.7", 75: "0.75", 80: "0.8", 90: "0.9", 95: "0.95", 100: "1" }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12" }, padding: ({ theme: e }) => e("spacing"), placeholderColor: ({ theme: e }) => e("colors"), placeholderOpacity: ({ theme: e }) => e("opacity"), outlineColor: ({ theme: e }) => e("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringColor: ({ theme: e }) => Et({ DEFAULT: e("colors.blue.500", "#3b82f6") }, e("colors")), ringOffsetColor: ({ theme: e }) => e("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringOpacity: ({ theme: e }) => Et({ DEFAULT: "0.5" }, e("opacity")), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg" }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5" }, scrollMargin: ({ theme: e }) => Et({}, e("spacing")), scrollPadding: ({ theme: e }) => e("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg" }, space: ({ theme: e }) => Et({}, e("spacing")), stroke: ({ theme: e }) => e("colors"), strokeWidth: { 0: "0", 1: "1", 2: "2" }, textColor: ({ theme: e }) => e("colors"), textDecorationColor: ({ theme: e }) => e("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textIndent: ({ theme: e }) => Et({}, e("spacing")), textOpacity: ({ theme: e }) => e("opacity"), transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionDuration: { DEFAULT: "150ms", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: e }) => mn(Et({}, e("spacing")), { "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), width: ({ theme: e }) => mn(Et({ auto: "auto" }, e("spacing")), { "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", min: "min-content", max: "max-content", fit: "fit-content" }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50" } }, variantOrder: ["first", "last", "odd", "even", "visited", "checked", "empty", "read-only", "group-hover", "group-focus", "focus-within", "hover", "focus", "focus-visible", "active", "disabled"], plugins: [] },
    xc = {},
    Ki = {},
    ax = { exports: {} },
    UD = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
const $a = UD,
    lx = {};
for (const e of Object.keys($a)) lx[$a[e]] = e;
const me = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
var ux = me;
for (const e of Object.keys(me)) {
    if (!("channels" in me[e])) throw new Error("missing channels property: " + e);
    if (!("labels" in me[e])) throw new Error("missing channel labels property: " + e);
    if (me[e].labels.length !== me[e].channels) throw new Error("channel and label counts mismatch: " + e);
    const { channels: t, labels: n } = me[e];
    delete me[e].channels, delete me[e].labels, Object.defineProperty(me[e], "channels", { value: t }), Object.defineProperty(me[e], "labels", { value: n })
}
me.rgb.hsl = function(e) {
    const t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        i = Math.min(t, n, r),
        o = Math.max(t, n, r),
        s = o - i;
    let a, l;
    o === i ? a = 0 : t === o ? a = (n - r) / s : n === o ? a = 2 + (r - t) / s : r === o && (a = 4 + (t - n) / s), a = Math.min(a * 60, 360), a < 0 && (a += 360);
    const u = (i + o) / 2;
    return o === i ? l = 0 : u <= .5 ? l = s / (o + i) : l = s / (2 - o - i), [a, l * 100, u * 100]
};
me.rgb.hsv = function(e) {
    let t, n, r, i, o;
    const s = e[0] / 255,
        a = e[1] / 255,
        l = e[2] / 255,
        u = Math.max(s, a, l),
        c = u - Math.min(s, a, l),
        d = function(h) { return (u - h) / 6 / c + 1 / 2 };
    return c === 0 ? (i = 0, o = 0) : (o = c / u, t = d(s), n = d(a), r = d(l), s === u ? i = r - n : a === u ? i = 1 / 3 + t - r : l === u && (i = 2 / 3 + n - t), i < 0 ? i += 1 : i > 1 && (i -= 1)), [i * 360, o * 100, u * 100]
};
me.rgb.hwb = function(e) {
    const t = e[0],
        n = e[1];
    let r = e[2];
    const i = me.rgb.hsl(e)[0],
        o = 1 / 255 * Math.min(t, Math.min(n, r));
    return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [i, o * 100, r * 100]
};
me.rgb.cmyk = function(e) {
    const t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        i = Math.min(1 - t, 1 - n, 1 - r),
        o = (1 - t - i) / (1 - i) || 0,
        s = (1 - n - i) / (1 - i) || 0,
        a = (1 - r - i) / (1 - i) || 0;
    return [o * 100, s * 100, a * 100, i * 100]
};

function GD(e, t) { return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2 }
me.rgb.keyword = function(e) {
    const t = lx[e];
    if (t) return t;
    let n = 1 / 0,
        r;
    for (const i of Object.keys($a)) {
        const o = $a[i],
            s = GD(e, o);
        s < n && (n = s, r = i)
    }
    return r
};
me.keyword.rgb = function(e) { return $a[e] };
me.rgb.xyz = function(e) {
    let t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255;
    t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92, n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92, r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92;
    const i = t * .4124 + n * .3576 + r * .1805,
        o = t * .2126 + n * .7152 + r * .0722,
        s = t * .0193 + n * .1192 + r * .9505;
    return [i * 100, o * 100, s * 100]
};
me.rgb.lab = function(e) {
    const t = me.rgb.xyz(e);
    let n = t[0],
        r = t[1],
        i = t[2];
    n /= 95.047, r /= 100, i /= 108.883, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116, i = i > .008856 ? i ** (1 / 3) : 7.787 * i + 16 / 116;
    const o = 116 * r - 16,
        s = 500 * (n - r),
        a = 200 * (r - i);
    return [o, s, a]
};
me.hsl.rgb = function(e) {
    const t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100;
    let i, o, s;
    if (n === 0) return s = r * 255, [s, s, s];
    r < .5 ? i = r * (1 + n) : i = r + n - r * n;
    const a = 2 * r - i,
        l = [0, 0, 0];
    for (let u = 0; u < 3; u++) o = t + 1 / 3 * -(u - 1), o < 0 && o++, o > 1 && o--, 6 * o < 1 ? s = a + (i - a) * 6 * o : 2 * o < 1 ? s = i : 3 * o < 2 ? s = a + (i - a) * (2 / 3 - o) * 6 : s = a, l[u] = s * 255;
    return l
};
me.hsl.hsv = function(e) {
    const t = e[0];
    let n = e[1] / 100,
        r = e[2] / 100,
        i = n;
    const o = Math.max(r, .01);
    r *= 2, n *= r <= 1 ? r : 2 - r, i *= o <= 1 ? o : 2 - o;
    const s = (r + n) / 2,
        a = r === 0 ? 2 * i / (o + i) : 2 * n / (r + n);
    return [t, a * 100, s * 100]
};
me.hsv.rgb = function(e) {
    const t = e[0] / 60,
        n = e[1] / 100;
    let r = e[2] / 100;
    const i = Math.floor(t) % 6,
        o = t - Math.floor(t),
        s = 255 * r * (1 - n),
        a = 255 * r * (1 - n * o),
        l = 255 * r * (1 - n * (1 - o));
    switch (r *= 255, i) {
        case 0:
            return [r, l, s];
        case 1:
            return [a, r, s];
        case 2:
            return [s, r, l];
        case 3:
            return [s, a, r];
        case 4:
            return [l, s, r];
        case 5:
            return [r, s, a]
    }
};
me.hsv.hsl = function(e) {
    const t = e[0],
        n = e[1] / 100,
        r = e[2] / 100,
        i = Math.max(r, .01);
    let o, s;
    s = (2 - n) * r;
    const a = (2 - n) * i;
    return o = n * i, o /= a <= 1 ? a : 2 - a, o = o || 0, s /= 2, [t, o * 100, s * 100]
};
me.hwb.rgb = function(e) {
    const t = e[0] / 360;
    let n = e[1] / 100,
        r = e[2] / 100;
    const i = n + r;
    let o;
    i > 1 && (n /= i, r /= i);
    const s = Math.floor(6 * t),
        a = 1 - r;
    o = 6 * t - s, (s & 1) != 0 && (o = 1 - o);
    const l = n + o * (a - n);
    let u, c, d;
    switch (s) {
        default:
            case 6:
            case 0:
            u = a,
        c = l,
        d = n;
        break;
        case 1:
                u = l,
            c = a,
            d = n;
            break;
        case 2:
                u = n,
            c = a,
            d = l;
            break;
        case 3:
                u = n,
            c = l,
            d = a;
            break;
        case 4:
                u = l,
            c = n,
            d = a;
            break;
        case 5:
                u = a,
            c = n,
            d = l;
            break
    }
    return [u * 255, c * 255, d * 255]
};
me.cmyk.rgb = function(e) {
    const t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100,
        i = e[3] / 100,
        o = 1 - Math.min(1, t * (1 - i) + i),
        s = 1 - Math.min(1, n * (1 - i) + i),
        a = 1 - Math.min(1, r * (1 - i) + i);
    return [o * 255, s * 255, a * 255]
};
me.xyz.rgb = function(e) {
    const t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100;
    let i, o, s;
    return i = t * 3.2406 + n * -1.5372 + r * -.4986, o = t * -.9689 + n * 1.8758 + r * .0415, s = t * .0557 + n * -.204 + r * 1.057, i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : i * 12.92, o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : o * 12.92, s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : s * 12.92, i = Math.min(Math.max(0, i), 1), o = Math.min(Math.max(0, o), 1), s = Math.min(Math.max(0, s), 1), [i * 255, o * 255, s * 255]
};
me.xyz.lab = function(e) {
    let t = e[0],
        n = e[1],
        r = e[2];
    t /= 95.047, n /= 100, r /= 108.883, t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
    const i = 116 * n - 16,
        o = 500 * (t - n),
        s = 200 * (n - r);
    return [i, o, s]
};
me.lab.xyz = function(e) {
    const t = e[0],
        n = e[1],
        r = e[2];
    let i, o, s;
    o = (t + 16) / 116, i = n / 500 + o, s = o - r / 200;
    const a = o ** 3,
        l = i ** 3,
        u = s ** 3;
    return o = a > .008856 ? a : (o - 16 / 116) / 7.787, i = l > .008856 ? l : (i - 16 / 116) / 7.787, s = u > .008856 ? u : (s - 16 / 116) / 7.787, i *= 95.047, o *= 100, s *= 108.883, [i, o, s]
};
me.lab.lch = function(e) {
    const t = e[0],
        n = e[1],
        r = e[2];
    let i;
    i = Math.atan2(r, n) * 360 / 2 / Math.PI, i < 0 && (i += 360);
    const s = Math.sqrt(n * n + r * r);
    return [t, s, i]
};
me.lch.lab = function(e) {
    const t = e[0],
        n = e[1],
        i = e[2] / 360 * 2 * Math.PI,
        o = n * Math.cos(i),
        s = n * Math.sin(i);
    return [t, o, s]
};
me.rgb.ansi16 = function(e, t = null) { const [n, r, i] = e; let o = t === null ? me.rgb.hsv(e)[2] : t; if (o = Math.round(o / 50), o === 0) return 30; let s = 30 + (Math.round(i / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255)); return o === 2 && (s += 60), s };
me.hsv.ansi16 = function(e) { return me.rgb.ansi16(me.hsv.rgb(e), e[2]) };
me.rgb.ansi256 = function(e) {
    const t = e[0],
        n = e[1],
        r = e[2];
    return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
};
me.ansi16.rgb = function(e) {
    let t = e % 10;
    if (t === 0 || t === 7) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
    const n = (~~(e > 50) + 1) * .5,
        r = (t & 1) * n * 255,
        i = (t >> 1 & 1) * n * 255,
        o = (t >> 2 & 1) * n * 255;
    return [r, i, o]
};
me.ansi256.rgb = function(e) {
    if (e >= 232) { const o = (e - 232) * 10 + 8; return [o, o, o] }
    e -= 16;
    let t;
    const n = Math.floor(e / 36) / 5 * 255,
        r = Math.floor((t = e % 36) / 6) / 5 * 255,
        i = t % 6 / 5 * 255;
    return [n, r, i]
};
me.rgb.hex = function(e) { const n = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase(); return "000000".substring(n.length) + n };
me.hex.rgb = function(e) {
    const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [0, 0, 0];
    let n = t[0];
    t[0].length === 3 && (n = n.split("").map(a => a + a).join(""));
    const r = parseInt(n, 16),
        i = r >> 16 & 255,
        o = r >> 8 & 255,
        s = r & 255;
    return [i, o, s]
};
me.rgb.hcg = function(e) {
    const t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        i = Math.max(Math.max(t, n), r),
        o = Math.min(Math.min(t, n), r),
        s = i - o;
    let a, l;
    return s < 1 ? a = o / (1 - s) : a = 0, s <= 0 ? l = 0 : i === t ? l = (n - r) / s % 6 : i === n ? l = 2 + (r - t) / s : l = 4 + (t - n) / s, l /= 6, l %= 1, [l * 360, s * 100, a * 100]
};
me.hsl.hcg = function(e) {
    const t = e[1] / 100,
        n = e[2] / 100,
        r = n < .5 ? 2 * t * n : 2 * t * (1 - n);
    let i = 0;
    return r < 1 && (i = (n - .5 * r) / (1 - r)), [e[0], r * 100, i * 100]
};
me.hsv.hcg = function(e) {
    const t = e[1] / 100,
        n = e[2] / 100,
        r = t * n;
    let i = 0;
    return r < 1 && (i = (n - r) / (1 - r)), [e[0], r * 100, i * 100]
};
me.hcg.rgb = function(e) {
    const t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100;
    if (n === 0) return [r * 255, r * 255, r * 255];
    const i = [0, 0, 0],
        o = t % 1 * 6,
        s = o % 1,
        a = 1 - s;
    let l = 0;
    switch (Math.floor(o)) {
        case 0:
            i[0] = 1, i[1] = s, i[2] = 0;
            break;
        case 1:
            i[0] = a, i[1] = 1, i[2] = 0;
            break;
        case 2:
            i[0] = 0, i[1] = 1, i[2] = s;
            break;
        case 3:
            i[0] = 0, i[1] = a, i[2] = 1;
            break;
        case 4:
            i[0] = s, i[1] = 0, i[2] = 1;
            break;
        default:
            i[0] = 1, i[1] = 0, i[2] = a
    }
    return l = (1 - n) * r, [(n * i[0] + l) * 255, (n * i[1] + l) * 255, (n * i[2] + l) * 255]
};
me.hcg.hsv = function(e) {
    const t = e[1] / 100,
        n = e[2] / 100,
        r = t + n * (1 - t);
    let i = 0;
    return r > 0 && (i = t / r), [e[0], i * 100, r * 100]
};
me.hcg.hsl = function(e) {
    const t = e[1] / 100,
        r = e[2] / 100 * (1 - t) + .5 * t;
    let i = 0;
    return r > 0 && r < .5 ? i = t / (2 * r) : r >= .5 && r < 1 && (i = t / (2 * (1 - r))), [e[0], i * 100, r * 100]
};
me.hcg.hwb = function(e) {
    const t = e[1] / 100,
        n = e[2] / 100,
        r = t + n * (1 - t);
    return [e[0], (r - t) * 100, (1 - r) * 100]
};
me.hwb.hcg = function(e) {
    const t = e[1] / 100,
        n = e[2] / 100,
        r = 1 - n,
        i = r - t;
    let o = 0;
    return i < 1 && (o = (r - i) / (1 - i)), [e[0], i * 100, o * 100]
};
me.apple.rgb = function(e) { return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255] };
me.rgb.apple = function(e) { return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535] };
me.gray.rgb = function(e) { return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255] };
me.gray.hsl = function(e) { return [0, 0, e[0]] };
me.gray.hsv = me.gray.hsl;
me.gray.hwb = function(e) { return [0, 100, e[0]] };
me.gray.cmyk = function(e) { return [0, 0, 0, e[0]] };
me.gray.lab = function(e) { return [e[0], 0, 0] };
me.gray.hex = function(e) {
    const t = Math.round(e[0] / 100 * 255) & 255,
        r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return "000000".substring(r.length) + r
};
me.rgb.gray = function(e) { return [(e[0] + e[1] + e[2]) / 3 / 255 * 100] };
const bc = ux;

function XD() {
    const e = {},
        t = Object.keys(bc);
    for (let n = t.length, r = 0; r < n; r++) e[t[r]] = { distance: -1, parent: null };
    return e
}

function qD(e) {
    const t = XD(),
        n = [e];
    for (t[e].distance = 0; n.length;) {
        const r = n.pop(),
            i = Object.keys(bc[r]);
        for (let o = i.length, s = 0; s < o; s++) {
            const a = i[s],
                l = t[a];
            l.distance === -1 && (l.distance = t[r].distance + 1, l.parent = r, n.unshift(a))
        }
    }
    return t
}

function KD(e, t) { return function(n) { return t(e(n)) } }

function QD(e, t) {
    const n = [t[e].parent, e];
    let r = bc[t[e].parent][e],
        i = t[e].parent;
    for (; t[i].parent;) n.unshift(t[i].parent), r = KD(bc[t[i].parent][i], r), i = t[i].parent;
    return r.conversion = n, r
}
var ZD = function(e) {
    const t = qD(e),
        n = {},
        r = Object.keys(t);
    for (let i = r.length, o = 0; o < i; o++) {
        const s = r[o];
        t[s].parent !== null && (n[s] = QD(s, t))
    }
    return n
};
const Wp = ux,
    JD = ZD,
    Go = {},
    eP = Object.keys(Wp);

function tP(e) { const t = function(...n) { const r = n[0]; return r == null ? r : (r.length > 1 && (n = r), e(n)) }; return "conversion" in e && (t.conversion = e.conversion), t }

function nP(e) {
    const t = function(...n) {
        const r = n[0];
        if (r == null) return r;
        r.length > 1 && (n = r);
        const i = e(n);
        if (typeof i == "object")
            for (let o = i.length, s = 0; s < o; s++) i[s] = Math.round(i[s]);
        return i
    };
    return "conversion" in e && (t.conversion = e.conversion), t
}
eP.forEach(e => {
    Go[e] = {}, Object.defineProperty(Go[e], "channels", { value: Wp[e].channels }), Object.defineProperty(Go[e], "labels", { value: Wp[e].labels });
    const t = JD(e);
    Object.keys(t).forEach(r => {
        const i = t[r];
        Go[e][r] = nP(i), Go[e][r].raw = tP(i)
    })
});
var rP = Go;
(function(e) {
    const t = (c, d) => (...h) => `[${c(...h)+d}m`,
        n = (c, d) => (...h) => { const y = c(...h); return `[${38+d};5;${y}m` },
        r = (c, d) => (...h) => { const y = c(...h); return `[${38+d};2;${y[0]};${y[1]};${y[2]}m` },
        i = c => c,
        o = (c, d, h) => [c, d, h],
        s = (c, d, h) => { Object.defineProperty(c, d, { get: () => { const y = h(); return Object.defineProperty(c, d, { value: y, enumerable: !0, configurable: !0 }), y }, enumerable: !0, configurable: !0 }) };
    let a;
    const l = (c, d, h, y) => {
        a === void 0 && (a = rP);
        const w = y ? 10 : 0,
            b = {};
        for (const [g, m] of Object.entries(a)) {
            const S = g === "ansi16" ? "ansi" : g;
            g === d ? b[S] = c(h, w) : typeof m == "object" && (b[S] = c(m[d], w))
        }
        return b
    };

    function u() {
        const c = new Map,
            d = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
        d.color.gray = d.color.blackBright, d.bgColor.bgGray = d.bgColor.bgBlackBright, d.color.grey = d.color.blackBright, d.bgColor.bgGrey = d.bgColor.bgBlackBright;
        for (const [h, y] of Object.entries(d)) {
            for (const [w, b] of Object.entries(y)) d[w] = { open: `[${b[0]}m`, close: `[${b[1]}m` }, y[w] = d[w], c.set(b[0], b[1]);
            Object.defineProperty(d, h, { value: y, enumerable: !1 })
        }
        return Object.defineProperty(d, "codes", { value: c, enumerable: !1 }), d.color.close = "[39m", d.bgColor.close = "[49m", s(d.color, "ansi", () => l(t, "ansi16", i, !1)), s(d.color, "ansi256", () => l(n, "ansi256", i, !1)), s(d.color, "ansi16m", () => l(r, "rgb", o, !1)), s(d.bgColor, "ansi", () => l(t, "ansi16", i, !0)), s(d.bgColor, "ansi256", () => l(n, "ansi256", i, !0)), s(d.bgColor, "ansi16m", () => l(r, "rgb", o, !0)), d
    }
    Object.defineProperty(e, "exports", { enumerable: !0, get: u })
})(ax);
var iP = { stdout: !1, stderr: !1 };
const oP = (e, t, n) => {
        let r = e.indexOf(t);
        if (r === -1) return e;
        const i = t.length;
        let o = 0,
            s = "";
        do s += e.substr(o, r - o) + t + n, o = r + i, r = e.indexOf(t, o); while (r !== -1);
        return s += e.substr(o), s
    },
    sP = (e, t, n, r) => {
        let i = 0,
            o = "";
        do {
            const s = e[r - 1] === "\r";
            o += e.substr(i, (s ? r - 1 : r) - i) + t + (s ? `\r
` : `
`) + n, i = r + 1, r = e.indexOf(`
`, i)
        } while (r !== -1);
        return o += e.substr(i), o
    };
var aP = { stringReplaceAll: oP, stringEncaseCRLFWithFirstIndex: sP };
const lP = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    cx = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    uP = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    cP = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
    fP = new Map([
        ["n", `
`],
        ["r", "\r"],
        ["t", "	"],
        ["b", "\b"],
        ["f", "\f"],
        ["v", "\v"],
        ["0", "\0"],
        ["\\", "\\"],
        ["e", ""],
        ["a", "\x07"]
    ]);

function fx(e) {
    const t = e[0] === "u",
        n = e[1] === "{";
    return t && !n && e.length === 5 || e[0] === "x" && e.length === 3 ? String.fromCharCode(parseInt(e.slice(1), 16)) : t && n ? String.fromCodePoint(parseInt(e.slice(2, -1), 16)) : fP.get(e) || e
}

function dP(e, t) {
    const n = [],
        r = t.trim().split(/\s*,\s*/g);
    let i;
    for (const o of r) {
        const s = Number(o);
        if (!Number.isNaN(s)) n.push(s);
        else if (i = o.match(uP)) n.push(i[2].replace(cP, (a, l, u) => l ? fx(l) : u));
        else throw new Error(`Invalid Chalk template style argument: ${o} (in style '${e}')`)
    }
    return n
}

function hP(e) {
    cx.lastIndex = 0;
    const t = [];
    let n;
    for (;
        (n = cx.exec(e)) !== null;) {
        const r = n[1];
        if (n[2]) {
            const i = dP(r, n[2]);
            t.push([r].concat(i))
        } else t.push([r])
    }
    return t
}

function dx(e, t) {
    const n = {};
    for (const i of t)
        for (const o of i.styles) n[o[0]] = i.inverse ? null : o.slice(1);
    let r = e;
    for (const [i, o] of Object.entries(n))
        if (!!Array.isArray(o)) {
            if (!(i in r)) throw new Error(`Unknown Chalk style: ${i}`);
            r = o.length > 0 ? r[i](...o) : r[i]
        }
    return r
}
var pP = (e, t) => {
    const n = [],
        r = [];
    let i = [];
    if (t.replace(lP, (o, s, a, l, u, c) => {
            if (s) i.push(fx(s));
            else if (l) {
                const d = i.join("");
                i = [], r.push(n.length === 0 ? d : dx(e, n)(d)), n.push({ inverse: a, styles: hP(l) })
            } else if (u) {
                if (n.length === 0) throw new Error("Found extraneous } in Chalk template literal");
                r.push(dx(e, n)(i.join(""))), i = [], n.pop()
            } else i.push(c)
        }), r.push(i.join("")), n.length > 0) { const o = `Chalk template literal is missing ${n.length} closing bracket${n.length===1?"":"s"} (\`}\`)`; throw new Error(o) }
    return r.join("")
};
const Va = ax.exports,
    { stdout: Hp, stderr: Yp } = iP,
    { stringReplaceAll: mP, stringEncaseCRLFWithFirstIndex: gP } = aP,
    { isArray: _c } = Array,
    hx = ["ansi", "ansi", "ansi256", "ansi16m"],
    Xo = Object.create(null),
    yP = (e, t = {}) => {
        if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
        const n = Hp ? Hp.level : 0;
        e.level = t.level === void 0 ? n : t.level
    };
class vP { constructor(t) { return px(t) } }
const px = e => { const t = {}; return yP(t, e), t.template = (...n) => yx(t.template, ...n), Object.setPrototypeOf(t, Sc.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = () => { throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.") }, t.template.Instance = vP, t.template };

function Sc(e) { return px(e) }
for (const [e, t] of Object.entries(Va)) Xo[e] = {get() { const n = kc(this, $p(t.open, t.close, this._styler), this._isEmpty); return Object.defineProperty(this, e, { value: n }), n } };
Xo.visible = {get() { const e = kc(this, this._styler, !0); return Object.defineProperty(this, "visible", { value: e }), e } };
const mx = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
for (const e of mx) Xo[e] = {get() { const { level: t } = this; return function(...n) { const r = $p(Va.color[hx[t]][e](...n), Va.color.close, this._styler); return kc(this, r, this._isEmpty) } } };
for (const e of mx) {
    const t = "bg" + e[0].toUpperCase() + e.slice(1);
    Xo[t] = {get() { const { level: n } = this; return function(...r) { const i = $p(Va.bgColor[hx[n]][e](...r), Va.bgColor.close, this._styler); return kc(this, i, this._isEmpty) } } }
}
const wP = Object.defineProperties(() => {}, mn(Et({}, Xo), { level: { enumerable: !0, get() { return this._generator.level }, set(e) { this._generator.level = e } } })),
    $p = (e, t, n) => { let r, i; return n === void 0 ? (r = e, i = t) : (r = n.openAll + e, i = t + n.closeAll), { open: e, close: t, openAll: r, closeAll: i, parent: n } },
    kc = (e, t, n) => { const r = (...i) => _c(i[0]) && _c(i[0].raw) ? gx(r, yx(r, ...i)) : gx(r, i.length === 1 ? "" + i[0] : i.join(" ")); return Object.setPrototypeOf(r, wP), r._generator = e, r._styler = t, r._isEmpty = n, r },
    gx = (e, t) => {
        if (e.level <= 0 || !t) return e._isEmpty ? "" : t;
        let n = e._styler;
        if (n === void 0) return t;
        const { openAll: r, closeAll: i } = n;
        if (t.indexOf("") !== -1)
            for (; n !== void 0;) t = mP(t, n.close, n.open), n = n.parent;
        const o = t.indexOf(`
`);
        return o !== -1 && (t = gP(t, i, r, o)), r + t + i
    };
let Vp;
const yx = (e, ...t) => {
    const [n] = t;
    if (!_c(n) || !_c(n.raw)) return t.join(" ");
    const r = t.slice(1),
        i = [n.raw[0]];
    for (let o = 1; o < n.length; o++) i.push(String(r[o - 1]).replace(/[{}\\]/g, "\\$&"), String(n.raw[o]));
    return Vp === void 0 && (Vp = pP), Vp(e, i.join(""))
};
Object.defineProperties(Sc.prototype, Xo);
const Cc = Sc();
Cc.supportsColor = Hp;
Cc.stderr = Sc({ level: Yp ? Yp.level : 0 });
Cc.stderr.supportsColor = Yp;
var vx = Cc;
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.dim = bP;
Ki.default = void 0;
var Mc = xP(vx);

function xP(e) { return e && e.__esModule ? e : { default: e } }
let wx = new Set;

function Up(e, t, n) { n && wx.has(n) || (n && wx.add(n), console.warn(""), t.forEach(r => console.warn(e, "-", r))) }

function bP(e) { return Mc.default.dim(e) }
var _P = { info(e, t) { Up(Mc.default.bold.cyan("info"), ...Array.isArray(e) ? [e] : [t, e]) }, warn(e, t) { Up(Mc.default.bold.yellow("warn"), ...Array.isArray(e) ? [e] : [t, e]) }, risk(e, t) { Up(Mc.default.bold.magenta("risk"), ...Array.isArray(e) ? [e] : [t, e]) } };
Ki.default = _P;
Object.defineProperty(xc, "__esModule", { value: !0 });
xc.default = void 0;
var SP = kP(Ki);

function kP(e) { return e && e.__esModule ? e : { default: e } }

function Ua({ version: e, from: t, to: n }) { SP.default.warn(`${t}-color-renamed`, [`As of Tailwind CSS ${e}, \`${t}\` has been renamed to \`${n}\`.`, "Update your configuration file to silence this warning."]) }
var CP = { inherit: "inherit", current: "currentColor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, get lightBlue() { return Ua({ version: "v2.2", from: "lightBlue", to: "sky" }), this.sky }, get warmGray() { return Ua({ version: "v3.0", from: "warmGray", to: "stone" }), this.stone }, get trueGray() { return Ua({ version: "v3.0", from: "trueGray", to: "neutral" }), this.neutral }, get coolGray() { return Ua({ version: "v3.0", from: "coolGray", to: "gray" }), this.gray }, get blueGray() { return Ua({ version: "v3.0", from: "blueGray", to: "slate" }), this.slate } };
xc.default = CP;
var Gp = {};
Object.defineProperty(Gp, "__esModule", { value: !0 });
Gp.defaults = MP;

function MP(e, ...t) {
    for (let i of t) {
        for (let o in i) {
            var n;
            (e == null || (n = e.hasOwnProperty) === null || n === void 0 ? void 0 : n.call(e, o)) || (e[o] = i[o])
        }
        for (let o of Object.getOwnPropertySymbols(i)) {
            var r;
            (e == null || (r = e.hasOwnProperty) === null || r === void 0 ? void 0 : r.call(e, o)) || (e[o] = i[o])
        }
    }
    return e
}
var Xp = {};
Object.defineProperty(Xp, "__esModule", { value: !0 });
Xp.toPath = EP;

function EP(e) {
    if (Array.isArray(e)) return e;
    let t = e.split("[").length - 1,
        n = e.split("]").length - 1;
    if (t !== n) throw new Error(`Path is invalid. Has unbalanced brackets: ${e}`);
    return e.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean)
}
var qp = {};
Object.defineProperty(qp, "__esModule", { value: !0 });
qp.normalizeConfig = DP;
var qo = OP(Ki);

function OP(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) {
        for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
            }
    }
    return t.default = e, t
}

function DP(e) {
    if ((() => {
            if (e.purge || !e.content || !Array.isArray(e.content) && !(typeof e.content == "object" && e.content !== null)) return !1;
            if (Array.isArray(e.content)) return e.content.every(r => typeof r == "string" ? !0 : !(typeof(r == null ? void 0 : r.raw) != "string" || (r == null ? void 0 : r.extension) && typeof(r == null ? void 0 : r.extension) != "string"));
            if (typeof e.content == "object" && e.content !== null) {
                if (Object.keys(e.content).some(r => !["files", "extract", "transform"].includes(r))) return !1;
                if (Array.isArray(e.content.files)) {
                    if (!e.content.files.every(r => typeof r == "string" ? !0 : !(typeof(r == null ? void 0 : r.raw) != "string" || (r == null ? void 0 : r.extension) && typeof(r == null ? void 0 : r.extension) != "string"))) return !1;
                    if (typeof e.content.extract == "object") {
                        for (let r of Object.values(e.content.extract))
                            if (typeof r != "function") return !1
                    } else if (!(e.content.extract === void 0 || typeof e.content.extract == "function")) return !1;
                    if (typeof e.content.transform == "object") {
                        for (let r of Object.values(e.content.transform))
                            if (typeof r != "function") return !1
                    } else if (!(e.content.transform === void 0 || typeof e.content.transform == "function")) return !1
                }
                return !0
            }
            return !1
        })() || qo.default.warn("purge-deprecation", ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", "Update your configuration file to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"]), e.safelist = (() => { var r; let { content: i, purge: o, safelist: s } = e; return Array.isArray(s) ? s : Array.isArray(i == null ? void 0 : i.safelist) ? i.safelist : Array.isArray(o == null ? void 0 : o.safelist) ? o.safelist : Array.isArray(o == null || (r = o.options) === null || r === void 0 ? void 0 : r.safelist) ? o.options.safelist : [] })(), typeof e.prefix == "function") qo.default.warn("prefix-function", ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"]), e.prefix = "";
    else {
        var n;
        e.prefix = (n = e.prefix) !== null && n !== void 0 ? n : ""
    }
    e.content = {
        files: (() => { let { content: r, purge: i } = e; return Array.isArray(i) ? i : Array.isArray(i == null ? void 0 : i.content) ? i.content : Array.isArray(r) ? r : Array.isArray(r == null ? void 0 : r.content) ? r.content : Array.isArray(r == null ? void 0 : r.files) ? r.files : [] })(),
        extract: (() => {
            let r = (() => { var s, a, l, u, c, d, h, y, w, b; return ((s = e.purge) === null || s === void 0 ? void 0 : s.extract) ? e.purge.extract : ((a = e.content) === null || a === void 0 ? void 0 : a.extract) ? e.content.extract : ((l = e.purge) === null || l === void 0 || (u = l.extract) === null || u === void 0 ? void 0 : u.DEFAULT) ? e.purge.extract.DEFAULT : ((c = e.content) === null || c === void 0 || (d = c.extract) === null || d === void 0 ? void 0 : d.DEFAULT) ? e.content.extract.DEFAULT : ((h = e.purge) === null || h === void 0 || (y = h.options) === null || y === void 0 ? void 0 : y.extractors) ? e.purge.options.extractors : ((w = e.content) === null || w === void 0 || (b = w.options) === null || b === void 0 ? void 0 : b.extractors) ? e.content.options.extractors : {} })(),
                i = {},
                o = (() => { var s, a, l, u; if ((s = e.purge) === null || s === void 0 || (a = s.options) === null || a === void 0 ? void 0 : a.defaultExtractor) return e.purge.options.defaultExtractor; if ((l = e.content) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.defaultExtractor) return e.content.options.defaultExtractor })();
            if (o !== void 0 && (i.DEFAULT = o), typeof r == "function") i.DEFAULT = r;
            else if (Array.isArray(r))
                for (let { extensions: s, extractor: a }
                    of r != null ? r : [])
                    for (let l of s) i[l] = a;
            else typeof r == "object" && r !== null && Object.assign(i, r);
            return i
        })(),
        transform: (() => {
            let r = (() => { var o, s, a, l, u, c; return ((o = e.purge) === null || o === void 0 ? void 0 : o.transform) ? e.purge.transform : ((s = e.content) === null || s === void 0 ? void 0 : s.transform) ? e.content.transform : ((a = e.purge) === null || a === void 0 || (l = a.transform) === null || l === void 0 ? void 0 : l.DEFAULT) ? e.purge.transform.DEFAULT : ((u = e.content) === null || u === void 0 || (c = u.transform) === null || c === void 0 ? void 0 : c.DEFAULT) ? e.content.transform.DEFAULT : {} })(),
                i = {};
            return typeof r == "function" && (i.DEFAULT = r), typeof r == "object" && r !== null && Object.assign(i, r), i
        })()
    };
    for (let r of e.content.files)
        if (typeof r == "string" && /{([^,]*?)}/g.test(r)) { qo.default.warn("invalid-glob-braces", [`The glob pattern ${qo.dim(r)} in your Tailwind CSS configuration is invalid.`, `Update it to ${qo.dim(r.replace(/{([^,]*?)}/g,"$1"))} to silence this warning.`]); break }
    return e.content.files.length === 0 && qo.default.warn("content-problems", ["The `content` option in your Tailwind CSS configuration is missing or empty.", "Configure your content sources or your generated CSS will be missing styles.", "https://tailwindcss.com/docs/content-configuration"]), e
}
var Kp = {};
Object.defineProperty(Kp, "__esModule", { value: !0 });
Kp.default = PP;

function PP(e) { if (Object.prototype.toString.call(e) !== "[object Object]") return !1; const t = Object.getPrototypeOf(e); return t === null || t === Object.prototype }
var Qp = {};
Object.defineProperty(Qp, "__esModule", { value: !0 });
Qp.cloneDeep = Zp;

function Zp(e) { return Array.isArray(e) ? e.map(t => Zp(t)) : typeof e == "object" && e !== null ? Object.fromEntries(Object.entries(e).map(([t, n]) => [t, Zp(n)])) : e }
Object.defineProperty(jp, "__esModule", { value: !0 });
jp.default = GP;
var RP = Ko(zp),
    TP = Ko(wc),
    AP = Ko(Bp),
    LP = Ko(sx),
    FP = Ko(xc),
    xx = Gp,
    IP = Xp,
    NP = qp,
    jP = Ko(Kp),
    zP = Qp;

function Ko(e) { return e && e.__esModule ? e : { default: e } }

function Qo(e) { return typeof e == "function" }

function Ga(e) { return typeof e == "object" && e !== null }

function Xa(e, ...t) {
    let n = t.pop();
    for (let r of t)
        for (let i in r) {
            let o = n(e[i], r[i]);
            o === void 0 ? Ga(e[i]) && Ga(r[i]) ? e[i] = Xa(e[i], r[i], n) : e[i] = r[i] : e[i] = o
        }
    return e
}
const Ec = {
    colors: FP.default,
    negative(e) { return Object.keys(e).filter(t => e[t] !== "0").reduce((t, n) => { let r = RP.default(e[n]); return r !== void 0 && (t[`-${n}`] = r), t }, {}) },
    breakpoints(e) {
        return Object.keys(e).filter(t => typeof e[t] == "string").reduce((t, n) => mn(Et({}, t), {
            [`screen-${n}`]: e[n]
        }), {})
    }
};

function BP(e, ...t) { return Qo(e) ? e(...t) : e }

function WP(e) { return e.reduce((t, { extend: n }) => Xa(t, n, (r, i) => r === void 0 ? [i] : Array.isArray(r) ? [i, ...r] : [i, r]), {}) }

function HP(e) { return mn(Et({}, e.reduce((t, n) => xx.defaults(t, n), {})), { extend: WP(e) }) }

function bx(e, t) { if (Array.isArray(e) && Ga(e[0])) return e.concat(t); if (Array.isArray(t) && Ga(t[0]) && Ga(e)) return [e, ...t]; if (Array.isArray(t)) return t }

function YP(n) {
    var r = n,
        { extend: e } = r,
        t = Pg(r, ["extend"]);
    return Xa(t, e, (i, o) => !Qo(i) && !o.some(Qo) ? Xa({}, i, ...o, bx) : (s, a) => Xa({}, ...[i, ...o].map(l => BP(l, s, a)), bx))
}

function $P(e) {
    const t = (n, r) => {
        const i = IP.toPath(n);
        let o = 0,
            s = e;
        for (; s != null && o < i.length;) s = s[i[o++]], s = Qo(s) ? s(t, Ec) : s;
        return s === void 0 ? r : jP.default(s) ? zP.cloneDeep(s) : s
    };
    t.theme = t;
    for (let n in Ec) t[n] = Ec[n];
    return Object.keys(e).reduce((n, r) => mn(Et({}, n), {
        [r]: Qo(e[r]) ? e[r](t, Ec) : e[r]
    }), {})
}

function _x(e) {
    let t = [];
    return e.forEach(n => {
        t = [...t, n];
        var r;
        const i = (r = n == null ? void 0 : n.plugins) !== null && r !== void 0 ? r : [];
        i.length !== 0 && i.forEach(o => {
            o.__isOptionsFunction && (o = o());
            var s;
            t = [...t, ..._x([(s = o == null ? void 0 : o.config) !== null && s !== void 0 ? s : {}])]
        })
    }), t
}

function VP(e) { return [...e].reduceRight((n, r) => Qo(r) ? r({ corePlugins: n }) : AP.default(r, n), TP.default) }

function UP(e) { return [...e].reduceRight((n, r) => [...n, ...r], []) }

function GP(e) { let t = [..._x(e), { prefix: "", important: !1, separator: ":", variantOrder: LP.default.variantOrder }]; var n, r; return NP.normalizeConfig(xx.defaults({ theme: $P(YP(HP(t.map(i => (n = i == null ? void 0 : i.theme) !== null && n !== void 0 ? n : {})))), corePlugins: VP(t.map(i => i.corePlugins)), plugins: UP(e.map(i => (r = i == null ? void 0 : i.plugins) !== null && r !== void 0 ? r : [])) }, ...t)) }
var Jp = {},
    Zo = {};
Object.defineProperty(Zo, "__esModule", { value: !0 });
Zo.flagEnabled = KP;
Zo.issueFlagNotices = QP;
Zo.default = void 0;
var XP = Sx(vx),
    qP = Sx(Ki);

function Sx(e) { return e && e.__esModule ? e : { default: e } }
let kx = { optimizeUniversalDefaults: !1 },
    qa = { future: [], experimental: ["optimizeUniversalDefaults"] };

function KP(e, t) { if (qa.future.includes(t)) { var n, r, i; return e.future === "all" || ((i = (r = e == null || (n = e.future) === null || n === void 0 ? void 0 : n[t]) !== null && r !== void 0 ? r : kx[t]) !== null && i !== void 0 ? i : !1) } if (qa.experimental.includes(t)) { var o, s, a; return e.experimental === "all" || ((a = (s = e == null || (o = e.experimental) === null || o === void 0 ? void 0 : o[t]) !== null && s !== void 0 ? s : kx[t]) !== null && a !== void 0 ? a : !1) } return !1 }

function Cx(e) { if (e.experimental === "all") return qa.experimental; var t; return Object.keys((t = e == null ? void 0 : e.experimental) !== null && t !== void 0 ? t : {}).filter(n => qa.experimental.includes(n) && e.experimental[n]) }

function QP(e) {
    if (Cx(e).length > 0) {
        let t = Cx(e).map(n => XP.default.yellow(n)).join(", ");
        qP.default.warn("experimental-flags-enabled", [`You have enabled experimental features: ${t}`, "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."])
    }
}
var ZP = qa;
Zo.default = ZP;
Object.defineProperty(Jp, "__esModule", { value: !0 });
Jp.default = Mx;
var JP = tR(sx),
    eR = Zo;

function tR(e) { return e && e.__esModule ? e : { default: e } }

function Mx(e) {
    var t;
    const n = ((t = e == null ? void 0 : e.presets) !== null && t !== void 0 ? t : [JP.default]).slice().reverse().flatMap(o => Mx(o instanceof Function ? o() : o)),
        r = {},
        i = Object.keys(r).filter(o => eR.flagEnabled(e, o)).map(o => r[o]);
    return [e, ...i, ...n]
}
Object.defineProperty(Np, "__esModule", { value: !0 });
Np.default = iR;
var nR = Ex(jp),
    rR = Ex(Jp);

function Ex(e) { return e && e.__esModule ? e : { default: e } }

function iR(...e) { let [, ...t] = rR.default(e[0]); return nR.default([...e, ...t]) }
let em = Np;
var aI = (em.__esModule ? em : { default: em }).default,
    oR = { exports: {} },
    Ka = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sR = Z.exports,
    Ox = 60103;
Ka.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
    var Dx = Symbol.for;
    Ox = Dx("react.element"), Ka.Fragment = Dx("react.fragment")
}
var aR = sR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    lR = Object.prototype.hasOwnProperty,
    uR = { key: !0, ref: !0, __self: !0, __source: !0 };

function Px(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) lR.call(t, r) && !uR.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: Ox, type: e, key: o, ref: s, props: i, _owner: aR.current }
}
Ka.jsx = Px;
Ka.jsxs = Px;
oR.exports = Ka;

function Rx(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function tm(e, t) { return tm = Object.setPrototypeOf || function(r, i) { return r.__proto__ = i, r }, tm(e, t) }

function Tx(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, tm(e, t) }
var Ax = { exports: {} },
    cR = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    fR = cR,
    dR = fR;

function Lx() {}

function Fx() {}
Fx.resetWarningCache = Lx;
var hR = function() {
    function e(r, i, o, s, a, l) { if (l !== dR) { var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw u.name = "Invariant Violation", u } }
    e.isRequired = e;

    function t() { return e }
    var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Fx, resetWarningCache: Lx };
    return n.PropTypes = n, n
};
Ax.exports = hR();

function pR(e, t) { return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1 }

function mR(e, t) { e.classList ? e.classList.add(t) : pR(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t)) }

function Ix(e, t) { return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "") }

function gR(e, t) { e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Ix(e.className, t) : e.setAttribute("class", Ix(e.className && e.className.baseVal || "", t)) }
var Nx = { disabled: !1 },
    jx = Si.createContext(null),
    Qa = "unmounted",
    Qi = "exited",
    Zi = "entering",
    Jo = "entered",
    nm = "exiting",
    Er = function(e) {
        Tx(t, e);

        function t(r, i) {
            var o;
            o = e.call(this, r, i) || this;
            var s = i,
                a = s && !s.isMounting ? r.enter : r.appear,
                l;
            return o.appearStatus = null, r.in ? a ? (l = Qi, o.appearStatus = Zi) : l = Jo : r.unmountOnExit || r.mountOnEnter ? l = Qa : l = Qi, o.state = { status: l }, o.nextCallback = null, o
        }
        t.getDerivedStateFromProps = function(i, o) { var s = i.in; return s && o.status === Qa ? { status: Qi } : null };
        var n = t.prototype;
        return n.componentDidMount = function() { this.updateStatus(!0, this.appearStatus) }, n.componentDidUpdate = function(i) {
            var o = null;
            if (i !== this.props) {
                var s = this.state.status;
                this.props.in ? s !== Zi && s !== Jo && (o = Zi) : (s === Zi || s === Jo) && (o = nm)
            }
            this.updateStatus(!1, o)
        }, n.componentWillUnmount = function() { this.cancelNextCallback() }, n.getTimeouts = function() {
            var i = this.props.timeout,
                o, s, a;
            return o = s = a = i, i != null && typeof i != "number" && (o = i.exit, s = i.enter, a = i.appear !== void 0 ? i.appear : s), { exit: o, enter: s, appear: a }
        }, n.updateStatus = function(i, o) { i === void 0 && (i = !1), o !== null ? (this.cancelNextCallback(), o === Zi ? this.performEnter(i) : this.performExit()) : this.props.unmountOnExit && this.state.status === Qi && this.setState({ status: Qa }) }, n.performEnter = function(i) {
            var o = this,
                s = this.props.enter,
                a = this.context ? this.context.isMounting : i,
                l = this.props.nodeRef ? [a] : [zh.findDOMNode(this), a],
                u = l[0],
                c = l[1],
                d = this.getTimeouts(),
                h = a ? d.appear : d.enter;
            if (!i && !s || Nx.disabled) { this.safeSetState({ status: Jo }, function() { o.props.onEntered(u) }); return }
            this.props.onEnter(u, c), this.safeSetState({ status: Zi }, function() { o.props.onEntering(u, c), o.onTransitionEnd(h, function() { o.safeSetState({ status: Jo }, function() { o.props.onEntered(u, c) }) }) })
        }, n.performExit = function() {
            var i = this,
                o = this.props.exit,
                s = this.getTimeouts(),
                a = this.props.nodeRef ? void 0 : zh.findDOMNode(this);
            if (!o || Nx.disabled) { this.safeSetState({ status: Qi }, function() { i.props.onExited(a) }); return }
            this.props.onExit(a), this.safeSetState({ status: nm }, function() { i.props.onExiting(a), i.onTransitionEnd(s.exit, function() { i.safeSetState({ status: Qi }, function() { i.props.onExited(a) }) }) })
        }, n.cancelNextCallback = function() { this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null) }, n.safeSetState = function(i, o) { o = this.setNextCallback(o), this.setState(i, o) }, n.setNextCallback = function(i) {
            var o = this,
                s = !0;
            return this.nextCallback = function(a) { s && (s = !1, o.nextCallback = null, i(a)) }, this.nextCallback.cancel = function() { s = !1 }, this.nextCallback
        }, n.onTransitionEnd = function(i, o) {
            this.setNextCallback(o);
            var s = this.props.nodeRef ? this.props.nodeRef.current : zh.findDOMNode(this),
                a = i == null && !this.props.addEndListener;
            if (!s || a) { setTimeout(this.nextCallback, 0); return }
            if (this.props.addEndListener) {
                var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
                    u = l[0],
                    c = l[1];
                this.props.addEndListener(u, c)
            }
            i != null && setTimeout(this.nextCallback, i)
        }, n.render = function() {
            var i = this.state.status;
            if (i === Qa) return null;
            var o = this.props,
                s = o.children;
            o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
            var a = Rx(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return Si.createElement(jx.Provider, { value: null }, typeof s == "function" ? s(i, a) : Si.cloneElement(Si.Children.only(s), a))
        }, t
    }(Si.Component);
Er.contextType = jx;
Er.propTypes = {};

function es() {}
Er.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: es, onEntering: es, onEntered: es, onExit: es, onExiting: es, onExited: es };
Er.UNMOUNTED = Qa;
Er.EXITED = Qi;
Er.ENTERING = Zi;
Er.ENTERED = Jo;
Er.EXITING = nm;
var yR = Er,
    vR = function(t, n) { return t && n && n.split(" ").forEach(function(r) { return mR(t, r) }) },
    rm = function(t, n) { return t && n && n.split(" ").forEach(function(r) { return gR(t, r) }) },
    im = function(e) {
        Tx(t, e);

        function t() {
            for (var r, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
            return r = e.call.apply(e, [this].concat(o)) || this, r.appliedClasses = { appear: {}, enter: {}, exit: {} }, r.onEnter = function(a, l) {
                var u = r.resolveArguments(a, l),
                    c = u[0],
                    d = u[1];
                r.removeClasses(c, "exit"), r.addClass(c, d ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(a, l)
            }, r.onEntering = function(a, l) {
                var u = r.resolveArguments(a, l),
                    c = u[0],
                    d = u[1],
                    h = d ? "appear" : "enter";
                r.addClass(c, h, "active"), r.props.onEntering && r.props.onEntering(a, l)
            }, r.onEntered = function(a, l) {
                var u = r.resolveArguments(a, l),
                    c = u[0],
                    d = u[1],
                    h = d ? "appear" : "enter";
                r.removeClasses(c, h), r.addClass(c, h, "done"), r.props.onEntered && r.props.onEntered(a, l)
            }, r.onExit = function(a) {
                var l = r.resolveArguments(a),
                    u = l[0];
                r.removeClasses(u, "appear"), r.removeClasses(u, "enter"), r.addClass(u, "exit", "base"), r.props.onExit && r.props.onExit(a)
            }, r.onExiting = function(a) {
                var l = r.resolveArguments(a),
                    u = l[0];
                r.addClass(u, "exit", "active"), r.props.onExiting && r.props.onExiting(a)
            }, r.onExited = function(a) {
                var l = r.resolveArguments(a),
                    u = l[0];
                r.removeClasses(u, "exit"), r.addClass(u, "exit", "done"), r.props.onExited && r.props.onExited(a)
            }, r.resolveArguments = function(a, l) { return r.props.nodeRef ? [r.props.nodeRef.current, a] : [a, l] }, r.getClassNames = function(a) {
                var l = r.props.classNames,
                    u = typeof l == "string",
                    c = u && l ? l + "-" : "",
                    d = u ? "" + c + a : l[a],
                    h = u ? d + "-active" : l[a + "Active"],
                    y = u ? d + "-done" : l[a + "Done"];
                return { baseClassName: d, activeClassName: h, doneClassName: y }
            }, r
        }
        var n = t.prototype;
        return n.addClass = function(i, o, s) {
            var a = this.getClassNames(o)[s + "ClassName"],
                l = this.getClassNames("enter"),
                u = l.doneClassName;
            o === "appear" && s === "done" && u && (a += " " + u), s === "active" && i && i.scrollTop, a && (this.appliedClasses[o][s] = a, vR(i, a))
        }, n.removeClasses = function(i, o) {
            var s = this.appliedClasses[o],
                a = s.base,
                l = s.active,
                u = s.done;
            this.appliedClasses[o] = {}, a && rm(i, a), l && rm(i, l), u && rm(i, u)
        }, n.render = function() {
            var i = this.props;
            i.classNames;
            var o = Rx(i, ["classNames"]);
            return Si.createElement(yR, wa({}, o, { onEnter: this.onEnter, onEntered: this.onEntered, onEntering: this.onEntering, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited }))
        }, t
    }(Si.Component);
im.defaultProps = { classNames: "" };
im.propTypes = {};
var lI = im,
    zx = {};
const om = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
    ts = {
        _disable: [],
        allowInput: !1,
        allowInvalidPreload: !1,
        altFormat: "F j, Y",
        altInput: !1,
        altInputClass: "form-control input",
        animate: typeof window == "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: !0,
        clickOpens: !0,
        closeOnSelect: !0,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: !1,
        enableSeconds: !1,
        enableTime: !1,
        errorHandler: e => typeof console != "undefined" && console.warn(e),
        getWeek: e => {
            const t = new Date(e.getTime());
            t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
            var n = new Date(t.getFullYear(), 0, 4);
            return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: !1,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: !1,
        now: new Date,
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: void 0,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: !1,
        showMonths: 1,
        static: !1,
        time_24hr: !1,
        weekNumbers: !1,
        wrap: !1
    },
    Za = {
        weekdays: { shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] },
        months: { shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: e => {
            const t = e % 100;
            if (t > 3 && t < 21) return "th";
            switch (t % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th"
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: !1
    },
    dn = (e, t = 2) => `000${e}`.slice(t * -1),
    jn = e => e === !0 ? 1 : 0;

function Bx(e, t) { let n; return function() { clearTimeout(n), n = setTimeout(() => e.apply(this, arguments), t) } }
const sm = e => e instanceof Array ? e : [e];

function on(e, t, n) {
    if (n === !0) return e.classList.add(t);
    e.classList.remove(t)
}

function Ze(e, t, n) { const r = window.document.createElement(e); return t = t || "", n = n || "", r.className = t, n !== void 0 && (r.textContent = n), r }

function Oc(e) { for (; e.firstChild;) e.removeChild(e.firstChild) }

function Wx(e, t) { if (t(e)) return e; if (e.parentNode) return Wx(e.parentNode, t) }

function Dc(e, t) {
    const n = Ze("div", "numInputWrapper"),
        r = Ze("input", "numInput " + e),
        i = Ze("span", "arrowUp"),
        o = Ze("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? r.type = "number" : (r.type = "text", r.pattern = "\\d*"), t !== void 0)
        for (const s in t) r.setAttribute(s, t[s]);
    return n.appendChild(r), n.appendChild(i), n.appendChild(o), n
}

function xn(e) { try { return typeof e.composedPath == "function" ? e.composedPath()[0] : e.target } catch { return e.target } }
const am = () => {},
    Pc = (e, t, n) => n.months[t ? "shorthand" : "longhand"][e],
    wR = {
        D: am,
        F: function(e, t, n) { e.setMonth(n.months.longhand.indexOf(t)) },
        G: (e, t) => { e.setHours(parseFloat(t)) },
        H: (e, t) => { e.setHours(parseFloat(t)) },
        J: (e, t) => { e.setDate(parseFloat(t)) },
        K: (e, t, n) => { e.setHours(e.getHours() % 12 + 12 * jn(new RegExp(n.amPM[1], "i").test(t))) },
        M: function(e, t, n) { e.setMonth(n.months.shorthand.indexOf(t)) },
        S: (e, t) => { e.setSeconds(parseFloat(t)) },
        U: (e, t) => new Date(parseFloat(t) * 1e3),
        W: function(e, t, n) {
            const r = parseInt(t),
                i = new Date(e.getFullYear(), 0, 2 + (r - 1) * 7, 0, 0, 0, 0);
            return i.setDate(i.getDate() - i.getDay() + n.firstDayOfWeek), i
        },
        Y: (e, t) => { e.setFullYear(parseFloat(t)) },
        Z: (e, t) => new Date(t),
        d: (e, t) => { e.setDate(parseFloat(t)) },
        h: (e, t) => { e.setHours(parseFloat(t)) },
        i: (e, t) => { e.setMinutes(parseFloat(t)) },
        j: (e, t) => { e.setDate(parseFloat(t)) },
        l: am,
        m: (e, t) => { e.setMonth(parseFloat(t) - 1) },
        n: (e, t) => { e.setMonth(parseFloat(t) - 1) },
        s: (e, t) => { e.setSeconds(parseFloat(t)) },
        u: (e, t) => new Date(parseFloat(t)),
        w: am,
        y: (e, t) => { e.setFullYear(2e3 + parseFloat(t)) }
    },
    lm = { D: "(\\w+)", F: "(\\w+)", G: "(\\d\\d|\\d)", H: "(\\d\\d|\\d)", J: "(\\d\\d|\\d)\\w+", K: "", M: "(\\w+)", S: "(\\d\\d|\\d)", U: "(.+)", W: "(\\d\\d|\\d)", Y: "(\\d{4})", Z: "(.+)", d: "(\\d\\d|\\d)", h: "(\\d\\d|\\d)", i: "(\\d\\d|\\d)", j: "(\\d\\d|\\d)", l: "(\\w+)", m: "(\\d\\d|\\d)", n: "(\\d\\d|\\d)", s: "(\\d\\d|\\d)", u: "(.+)", w: "(\\d\\d|\\d)", y: "(\\d{2})" },
    Ja = { Z: e => e.toISOString(), D: function(e, t, n) { return t.weekdays.shorthand[Ja.w(e, t, n)] }, F: function(e, t, n) { return Pc(Ja.n(e, t, n) - 1, !1, t) }, G: function(e, t, n) { return dn(Ja.h(e, t, n)) }, H: e => dn(e.getHours()), J: function(e, t) { return t.ordinal !== void 0 ? e.getDate() + t.ordinal(e.getDate()) : e.getDate() }, K: (e, t) => t.amPM[jn(e.getHours() > 11)], M: function(e, t) { return Pc(e.getMonth(), !0, t) }, S: e => dn(e.getSeconds()), U: e => e.getTime() / 1e3, W: function(e, t, n) { return n.getWeek(e) }, Y: e => dn(e.getFullYear(), 4), d: e => dn(e.getDate()), h: e => e.getHours() % 12 ? e.getHours() % 12 : 12, i: e => dn(e.getMinutes()), j: e => e.getDate(), l: function(e, t) { return t.weekdays.longhand[e.getDay()] }, m: e => dn(e.getMonth() + 1), n: e => e.getMonth() + 1, s: e => e.getSeconds(), u: e => e.getTime(), w: e => e.getDay(), y: e => String(e.getFullYear()).substring(2) },
    Hx = ({ config: e = ts, l10n: t = Za, isMobile: n = !1 }) => (r, i, o) => { const s = o || t; return e.formatDate !== void 0 && !n ? e.formatDate(r, i, s) : i.split("").map((a, l, u) => Ja[a] && u[l - 1] !== "\\" ? Ja[a](r, s, e) : a !== "\\" ? a : "").join("") },
    um = ({ config: e = ts, l10n: t = Za }) => (n, r, i, o) => {
        if (n !== 0 && !n) return;
        const s = o || t;
        let a;
        const l = n;
        if (n instanceof Date) a = new Date(n.getTime());
        else if (typeof n != "string" && n.toFixed !== void 0) a = new Date(n);
        else if (typeof n == "string") {
            const u = r || (e || ts).dateFormat,
                c = String(n).trim();
            if (c === "today") a = new Date, i = !0;
            else if (/Z$/.test(c) || /GMT$/.test(c)) a = new Date(n);
            else if (e && e.parseDate) a = e.parseDate(n, u);
            else {
                a = !e || !e.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
                let d, h = [];
                for (let y = 0, w = 0, b = ""; y < u.length; y++) {
                    const g = u[y],
                        m = g === "\\",
                        S = u[y - 1] === "\\" || m;
                    if (lm[g] && !S) {
                        b += lm[g];
                        const k = new RegExp(b).exec(n);
                        k && (d = !0) && h[g !== "Y" ? "push" : "unshift"]({ fn: wR[g], val: k[++w] })
                    } else m || (b += ".");
                    h.forEach(({ fn: k, val: E }) => a = k(a, E, s) || a)
                }
                a = d ? a : void 0
            }
        }
        if (!(a instanceof Date && !isNaN(a.getTime()))) { e.errorHandler(new Error(`Invalid date provided: ${l}`)); return }
        return i === !0 && a.setHours(0, 0, 0, 0), a
    };

function bn(e, t, n = !0) { return n !== !1 ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime() }
const xR = (e, t, n) => e > Math.min(t, n) && e < Math.max(t, n),
    bR = { DAY: 864e5 };

function cm(e) {
    let t = e.defaultHour,
        n = e.defaultMinute,
        r = e.defaultSeconds;
    if (e.minDate !== void 0) {
        const i = e.minDate.getHours(),
            o = e.minDate.getMinutes(),
            s = e.minDate.getSeconds();
        t < i && (t = i), t === i && n < o && (n = o), t === i && n === o && r < s && (r = e.minDate.getSeconds())
    }
    if (e.maxDate !== void 0) {
        const i = e.maxDate.getHours(),
            o = e.maxDate.getMinutes();
        t = Math.min(t, i), t === i && (n = Math.min(o, n)), t === i && n === o && (r = e.maxDate.getSeconds())
    }
    return { hours: t, minutes: n, seconds: r }
}
typeof Object.assign != "function" && (Object.assign = function(e, ...t) { if (!e) throw TypeError("Cannot convert undefined or null to object"); for (const n of t) n && Object.keys(n).forEach(r => e[r] = n[r]); return e });
const _R = 300;

function SR(e, t) {
    const n = { config: Object.assign(Object.assign({}, ts), Ot.defaultConfig), l10n: Za };
    n.parseDate = um({ config: n.config, l10n: n.l10n }), n._handlers = [], n.pluginElements = [], n.loadedPlugins = [], n._bind = w, n._setHoursFromDate = d, n._positionCalendar = oo, n.changeMonth = q, n.changeYear = $e, n.clear = L, n.close = $, n._createElement = Ze, n.destroy = se, n.isEnabled = qe, n.jumpToDate = m, n.open = pl, n.redraw = vl, n.set = xl, n.setDate = wf, n.toggle = Sf;

    function r() { n.utils = { getDaysInMonth(_ = n.currentMonth, M = n.currentYear) { return _ === 1 && (M % 4 == 0 && M % 100 != 0 || M % 400 == 0) ? 29 : n.l10n.daysInMonth[_] } } }

    function i() { n.element = n.input = e, n.isOpen = !1, gf(), yl(), bf(), xf(), r(), n.isMobile || E(), g(), (n.selectedDates.length || n.config.noCalendar) && (n.config.enableTime && d(n.config.noCalendar ? n.latestSelectedDateObj : void 0), Yn(!1)), s(); const _ = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);!n.isMobile && _ && oo(), at("onReady") }

    function o(_) { return _.bind(n) }

    function s() {
        const _ = n.config;
        _.weekNumbers === !1 && _.showMonths === 1 || _.noCalendar !== !0 && window.requestAnimationFrame(function() {
            if (n.calendarContainer !== void 0 && (n.calendarContainer.style.visibility = "hidden", n.calendarContainer.style.display = "block"), n.daysContainer !== void 0) {
                const M = (n.days.offsetWidth + 1) * _.showMonths;
                n.daysContainer.style.width = M + "px", n.calendarContainer.style.width = M + (n.weekWrapper !== void 0 ? n.weekWrapper.offsetWidth : 0) + "px", n.calendarContainer.style.removeProperty("visibility"), n.calendarContainer.style.removeProperty("display")
            }
        })
    }

    function a(_) {
        if (n.selectedDates.length === 0) {
            const R = n.config.minDate === void 0 || bn(new Date, n.config.minDate) >= 0 ? new Date : new Date(n.config.minDate.getTime()),
                B = cm(n.config);
            R.setHours(B.hours, B.minutes, B.seconds, R.getMilliseconds()), n.selectedDates = [R], n.latestSelectedDateObj = R
        }
        _ !== void 0 && _.type !== "blur" && Sl(_);
        const M = n._input.value;
        c(), Yn(), n._input.value !== M && n._debouncedChange()
    }

    function l(_, M) { return _ % 12 + 12 * jn(M === n.l10n.amPM[1]) }

    function u(_) {
        switch (_ % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return _ % 12
        }
    }

    function c() {
        if (n.hourElement === void 0 || n.minuteElement === void 0) return;
        let _ = (parseInt(n.hourElement.value.slice(-2), 10) || 0) % 24,
            M = (parseInt(n.minuteElement.value, 10) || 0) % 60,
            R = n.secondElement !== void 0 ? (parseInt(n.secondElement.value, 10) || 0) % 60 : 0;
        n.amPM !== void 0 && (_ = l(_, n.amPM.textContent));
        const B = n.config.minTime !== void 0 || n.config.minDate && n.minDateHasTime && n.latestSelectedDateObj && bn(n.latestSelectedDateObj, n.config.minDate, !0) === 0;
        if (n.config.maxTime !== void 0 || n.config.maxDate && n.maxDateHasTime && n.latestSelectedDateObj && bn(n.latestSelectedDateObj, n.config.maxDate, !0) === 0) {
            const G = n.config.maxTime !== void 0 ? n.config.maxTime : n.config.maxDate;
            _ = Math.min(_, G.getHours()), _ === G.getHours() && (M = Math.min(M, G.getMinutes())), M === G.getMinutes() && (R = Math.min(R, G.getSeconds()))
        }
        if (B) {
            const G = n.config.minTime !== void 0 ? n.config.minTime : n.config.minDate;
            _ = Math.max(_, G.getHours()), _ === G.getHours() && M < G.getMinutes() && (M = G.getMinutes()), M === G.getMinutes() && (R = Math.max(R, G.getSeconds()))
        }
        h(_, M, R)
    }

    function d(_) {
        const M = _ || n.latestSelectedDateObj;
        M && h(M.getHours(), M.getMinutes(), M.getSeconds())
    }

    function h(_, M, R) { n.latestSelectedDateObj !== void 0 && n.latestSelectedDateObj.setHours(_ % 24, M, R || 0, 0), !(!n.hourElement || !n.minuteElement || n.isMobile) && (n.hourElement.value = dn(n.config.time_24hr ? _ : (12 + _) % 12 + 12 * jn(_ % 12 == 0)), n.minuteElement.value = dn(M), n.amPM !== void 0 && (n.amPM.textContent = n.l10n.amPM[jn(_ >= 12)]), n.secondElement !== void 0 && (n.secondElement.value = dn(R))) }

    function y(_) {
        const M = xn(_),
            R = parseInt(M.value) + (_.delta || 0);
        (R / 1e3 > 1 || _.key === "Enter" && !/[^\d]/.test(R.toString())) && $e(R)
    }

    function w(_, M, R, B) {
        if (M instanceof Array) return M.forEach(ae => w(_, ae, R, B));
        if (_ instanceof Array) return _.forEach(ae => w(ae, M, R, B));
        _.addEventListener(M, R, B), n._handlers.push({ remove: () => _.removeEventListener(M, R) })
    }

    function b() { at("onChange") }

    function g() {
        if (n.config.wrap && ["open", "close", "toggle", "clear"].forEach(M => { Array.prototype.forEach.call(n.element.querySelectorAll(`[data-${M}]`), R => w(R, "click", n[M])) }), n.isMobile) { _f(); return }
        const _ = Bx(mf, 50);
        if (n._debouncedChange = Bx(b, _R), n.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && w(n.daysContainer, "mouseover", M => { n.config.mode === "range" && ys(xn(M)) }), w(window.document.body, "keydown", Hn), !n.config.inline && !n.config.static && w(window, "resize", _), window.ontouchstart !== void 0 ? w(window.document, "touchstart", Se) : w(window.document, "mousedown", Se), w(window.document, "focus", Se, { capture: !0 }), n.config.clickOpens === !0 && (w(n._input, "focus", n.open), w(n._input, "click", n.open)), n.daysContainer !== void 0 && (w(n.monthNav, "click", _l), w(n.monthNav, ["keyup", "increment"], y), w(n.daysContainer, "click", wl)), n.timeContainer !== void 0 && n.minuteElement !== void 0 && n.hourElement !== void 0) {
            const M = R => xn(R).select();
            w(n.timeContainer, ["increment"], a), w(n.timeContainer, "blur", a, { capture: !0 }), w(n.timeContainer, "click", S), w([n.hourElement, n.minuteElement], ["focus", "click"], M), n.secondElement !== void 0 && w(n.secondElement, "focus", () => n.secondElement && n.secondElement.select()), n.amPM !== void 0 && w(n.amPM, "click", R => { a(R), b() })
        }
        n.config.allowInput && w(n._input, "blur", Yt)
    }

    function m(_, M) {
        const R = _ !== void 0 ? n.parseDate(_) : n.latestSelectedDateObj || (n.config.minDate && n.config.minDate > n.now ? n.config.minDate : n.config.maxDate && n.config.maxDate < n.now ? n.config.maxDate : n.now),
            B = n.currentYear,
            ae = n.currentMonth;
        try { R !== void 0 && (n.currentYear = R.getFullYear(), n.currentMonth = R.getMonth()) } catch (G) { G.message = "Invalid date supplied: " + R, n.config.errorHandler(G) }
        M && n.currentYear !== B && (at("onYearChange"), he()), M && (n.currentYear !== B || n.currentMonth !== ae) && at("onMonthChange"), n.redraw()
    }

    function S(_) { const M = xn(_);~M.className.indexOf("arrow") && k(_, M.classList.contains("arrowUp") ? 1 : -1) }

    function k(_, M, R) {
        const B = _ && xn(_),
            ae = R || B && B.parentNode && B.parentNode.firstChild,
            G = ao("increment");
        G.delta = M, ae && ae.dispatchEvent(G)
    }

    function E() {
        const _ = window.document.createDocumentFragment();
        if (n.calendarContainer = Ze("div", "flatpickr-calendar"), n.calendarContainer.tabIndex = -1, !n.config.noCalendar) {
            if (_.appendChild(Y()), n.innerContainer = Ze("div", "flatpickr-innerContainer"), n.config.weekNumbers) {
                const { weekWrapper: R, weekNumbers: B } = F();
                n.innerContainer.appendChild(R), n.weekNumbers = B, n.weekWrapper = R
            }
            n.rContainer = Ze("div", "flatpickr-rContainer"), n.rContainer.appendChild(te()), n.daysContainer || (n.daysContainer = Ze("div", "flatpickr-days"), n.daysContainer.tabIndex = -1), Ee(), n.rContainer.appendChild(n.daysContainer), n.innerContainer.appendChild(n.rContainer), _.appendChild(n.innerContainer)
        }
        n.config.enableTime && _.appendChild(X()), on(n.calendarContainer, "rangeMode", n.config.mode === "range"), on(n.calendarContainer, "animate", n.config.animate === !0), on(n.calendarContainer, "multiMonth", n.config.showMonths > 1), n.calendarContainer.appendChild(_);
        const M = n.config.appendTo !== void 0 && n.config.appendTo.nodeType !== void 0;
        if ((n.config.inline || n.config.static) && (n.calendarContainer.classList.add(n.config.inline ? "inline" : "static"), n.config.inline && (!M && n.element.parentNode ? n.element.parentNode.insertBefore(n.calendarContainer, n._input.nextSibling) : n.config.appendTo !== void 0 && n.config.appendTo.appendChild(n.calendarContainer)), n.config.static)) {
            const R = Ze("div", "flatpickr-wrapper");
            n.element.parentNode && n.element.parentNode.insertBefore(R, n.element), R.appendChild(n.element), n.altInput && R.appendChild(n.altInput), R.appendChild(n.calendarContainer)
        }!n.config.static && !n.config.inline && (n.config.appendTo !== void 0 ? n.config.appendTo : window.document.body).appendChild(n.calendarContainer)
    }

    function P(_, M, R, B) {
        const ae = qe(M, !0),
            G = Ze("span", "flatpickr-day " + _, M.getDate().toString());
        return G.dateObj = M, G.$i = B, G.setAttribute("aria-label", n.formatDate(M, n.config.ariaDateFormat)), _.indexOf("hidden") === -1 && bn(M, n.now) === 0 && (n.todayDateElem = G, G.classList.add("today"), G.setAttribute("aria-current", "date")), ae ? (G.tabIndex = -1, lo(M) && (G.classList.add("selected"), n.selectedDateElem = G, n.config.mode === "range" && (on(G, "startRange", n.selectedDates[0] && bn(M, n.selectedDates[0], !0) === 0), on(G, "endRange", n.selectedDates[1] && bn(M, n.selectedDates[1], !0) === 0), _ === "nextMonthDay" && G.classList.add("inRange")))) : G.classList.add("flatpickr-disabled"), n.config.mode === "range" && bl(M) && !lo(M) && G.classList.add("inRange"), n.weekNumbers && n.config.showMonths === 1 && _ !== "prevMonthDay" && R % 7 == 1 && n.weekNumbers.insertAdjacentHTML("beforeend", "<span className='flatpickr-day'>" + n.config.getWeek(M) + "</span>"), at("onDayCreate", G), G
    }

    function T(_) { _.focus(), n.config.mode === "range" && ys(_) }

    function I(_) {
        const M = _ > 0 ? 0 : n.config.showMonths - 1,
            R = _ > 0 ? n.config.showMonths : -1;
        for (let B = M; B != R; B += _) {
            const ae = n.daysContainer.children[B],
                G = _ > 0 ? 0 : ae.children.length - 1,
                we = _ > 0 ? ae.children.length : -1;
            for (let pe = G; pe != we; pe += _) { const Le = ae.children[pe]; if (Le.className.indexOf("hidden") === -1 && qe(Le.dateObj)) return Le }
        }
    }

    function U(_, M) {
        const R = _.className.indexOf("Month") === -1 ? _.dateObj.getMonth() : n.currentMonth,
            B = M > 0 ? n.config.showMonths : -1,
            ae = M > 0 ? 1 : -1;
        for (let G = R - n.currentMonth; G != B; G += ae) {
            const we = n.daysContainer.children[G],
                pe = R - n.currentMonth === G ? _.$i + M : M < 0 ? we.children.length - 1 : 0,
                Le = we.children.length;
            for (let Ne = pe; Ne >= 0 && Ne < Le && Ne != (M > 0 ? Le : -1); Ne += ae) { const tt = we.children[Ne]; if (tt.className.indexOf("hidden") === -1 && qe(tt.dateObj) && Math.abs(_.$i - Ne) >= Math.abs(M)) return T(tt) }
        }
        n.changeMonth(ae), z(I(ae), 0)
    }

    function z(_, M) {
        const R = Ht(document.activeElement || document.body),
            B = _ !== void 0 ? _ : R ? document.activeElement : n.selectedDateElem !== void 0 && Ht(n.selectedDateElem) ? n.selectedDateElem : n.todayDateElem !== void 0 && Ht(n.todayDateElem) ? n.todayDateElem : I(M > 0 ? 1 : -1);
        B === void 0 ? n._input.focus() : R ? U(B, M) : T(B)
    }

    function ve(_, M) {
        const R = (new Date(_, M, 1).getDay() - n.l10n.firstDayOfWeek + 7) % 7,
            B = n.utils.getDaysInMonth((M - 1 + 12) % 12, _),
            ae = n.utils.getDaysInMonth(M, _),
            G = window.document.createDocumentFragment(),
            we = n.config.showMonths > 1,
            pe = we ? "prevMonthDay hidden" : "prevMonthDay",
            Le = we ? "nextMonthDay hidden" : "nextMonthDay";
        let Ne = B + 1 - R,
            tt = 0;
        for (; Ne <= B; Ne++, tt++) G.appendChild(P(pe, new Date(_, M - 1, Ne), Ne, tt));
        for (Ne = 1; Ne <= ae; Ne++, tt++) G.appendChild(P("", new Date(_, M, Ne), Ne, tt));
        for (let Rt = ae + 1; Rt <= 42 - R && (n.config.showMonths === 1 || tt % 7 != 0); Rt++, tt++) G.appendChild(P(Le, new Date(_, M + 1, Rt % ae), Rt, tt));
        const sn = Ze("div", "dayContainer");
        return sn.appendChild(G), sn
    }

    function Ee() {
        if (n.daysContainer === void 0) return;
        Oc(n.daysContainer), n.weekNumbers && Oc(n.weekNumbers);
        const _ = document.createDocumentFragment();
        for (let M = 0; M < n.config.showMonths; M++) {
            const R = new Date(n.currentYear, n.currentMonth, 1);
            R.setMonth(n.currentMonth + M), _.appendChild(ve(R.getFullYear(), R.getMonth()))
        }
        n.daysContainer.appendChild(_), n.days = n.daysContainer.firstChild, n.config.mode === "range" && n.selectedDates.length === 1 && ys()
    }

    function he() {
        if (n.config.showMonths > 1 || n.config.monthSelectorType !== "dropdown") return;
        const _ = function(M) { return n.config.minDate !== void 0 && n.currentYear === n.config.minDate.getFullYear() && M < n.config.minDate.getMonth() ? !1 : !(n.config.maxDate !== void 0 && n.currentYear === n.config.maxDate.getFullYear() && M > n.config.maxDate.getMonth()) };
        n.monthsDropdownContainer.tabIndex = -1, n.monthsDropdownContainer.innerHTML = "";
        for (let M = 0; M < 12; M++) {
            if (!_(M)) continue;
            const R = Ze("option", "flatpickr-monthDropdown-month");
            R.value = new Date(n.currentYear, M).getMonth().toString(), R.textContent = Pc(M, n.config.shorthandCurrentMonth, n.l10n), R.tabIndex = -1, n.currentMonth === M && (R.selected = !0), n.monthsDropdownContainer.appendChild(R)
        }
    }

    function Re() {
        const _ = Ze("div", "flatpickr-month"),
            M = window.document.createDocumentFragment();
        let R;
        n.config.showMonths > 1 || n.config.monthSelectorType === "static" ? R = Ze("span", "cur-month") : (n.monthsDropdownContainer = Ze("select", "flatpickr-monthDropdown-months"), n.monthsDropdownContainer.setAttribute("aria-label", n.l10n.monthAriaLabel), w(n.monthsDropdownContainer, "change", we => {
            const pe = xn(we),
                Le = parseInt(pe.value, 10);
            n.changeMonth(Le - n.currentMonth), at("onMonthChange")
        }), he(), R = n.monthsDropdownContainer);
        const B = Dc("cur-year", { tabindex: "-1" }),
            ae = B.getElementsByTagName("input")[0];
        ae.setAttribute("aria-label", n.l10n.yearAriaLabel), n.config.minDate && ae.setAttribute("min", n.config.minDate.getFullYear().toString()), n.config.maxDate && (ae.setAttribute("max", n.config.maxDate.getFullYear().toString()), ae.disabled = !!n.config.minDate && n.config.minDate.getFullYear() === n.config.maxDate.getFullYear());
        const G = Ze("div", "flatpickr-current-month");
        return G.appendChild(R), G.appendChild(B), M.appendChild(G), _.appendChild(M), { container: _, yearElement: ae, monthElement: R }
    }

    function H() {
        Oc(n.monthNav), n.monthNav.appendChild(n.prevMonthNav), n.config.showMonths && (n.yearElements = [], n.monthElements = []);
        for (let _ = n.config.showMonths; _--;) {
            const M = Re();
            n.yearElements.push(M.yearElement), n.monthElements.push(M.monthElement), n.monthNav.appendChild(M.container)
        }
        n.monthNav.appendChild(n.nextMonthNav)
    }

    function Y() { return n.monthNav = Ze("div", "flatpickr-months"), n.yearElements = [], n.monthElements = [], n.prevMonthNav = Ze("span", "flatpickr-prev-month"), n.prevMonthNav.innerHTML = n.config.prevArrow, n.nextMonthNav = Ze("span", "flatpickr-next-month"), n.nextMonthNav.innerHTML = n.config.nextArrow, H(), Object.defineProperty(n, "_hidePrevMonthArrow", { get: () => n.__hidePrevMonthArrow, set(_) { n.__hidePrevMonthArrow !== _ && (on(n.prevMonthNav, "flatpickr-disabled", _), n.__hidePrevMonthArrow = _) } }), Object.defineProperty(n, "_hideNextMonthArrow", { get: () => n.__hideNextMonthArrow, set(_) { n.__hideNextMonthArrow !== _ && (on(n.nextMonthNav, "flatpickr-disabled", _), n.__hideNextMonthArrow = _) } }), n.currentYearElement = n.yearElements[0], yi(), n.monthNav }

    function X() {
        n.calendarContainer.classList.add("hasTime"), n.config.noCalendar && n.calendarContainer.classList.add("noCalendar");
        const _ = cm(n.config);
        n.timeContainer = Ze("div", "flatpickr-time"), n.timeContainer.tabIndex = -1;
        const M = Ze("span", "flatpickr-time-separator", ":"),
            R = Dc("flatpickr-hour", { "aria-label": n.l10n.hourAriaLabel });
        n.hourElement = R.getElementsByTagName("input")[0];
        const B = Dc("flatpickr-minute", { "aria-label": n.l10n.minuteAriaLabel });
        if (n.minuteElement = B.getElementsByTagName("input")[0], n.hourElement.tabIndex = n.minuteElement.tabIndex = -1, n.hourElement.value = dn(n.latestSelectedDateObj ? n.latestSelectedDateObj.getHours() : n.config.time_24hr ? _.hours : u(_.hours)), n.minuteElement.value = dn(n.latestSelectedDateObj ? n.latestSelectedDateObj.getMinutes() : _.minutes), n.hourElement.setAttribute("step", n.config.hourIncrement.toString()), n.minuteElement.setAttribute("step", n.config.minuteIncrement.toString()), n.hourElement.setAttribute("min", n.config.time_24hr ? "0" : "1"), n.hourElement.setAttribute("max", n.config.time_24hr ? "23" : "12"), n.hourElement.setAttribute("maxlength", "2"), n.minuteElement.setAttribute("min", "0"), n.minuteElement.setAttribute("max", "59"), n.minuteElement.setAttribute("maxlength", "2"), n.timeContainer.appendChild(R), n.timeContainer.appendChild(M), n.timeContainer.appendChild(B), n.config.time_24hr && n.timeContainer.classList.add("time24hr"), n.config.enableSeconds) {
            n.timeContainer.classList.add("hasSeconds");
            const ae = Dc("flatpickr-second");
            n.secondElement = ae.getElementsByTagName("input")[0], n.secondElement.value = dn(n.latestSelectedDateObj ? n.latestSelectedDateObj.getSeconds() : _.seconds), n.secondElement.setAttribute("step", n.minuteElement.getAttribute("step")), n.secondElement.setAttribute("min", "0"), n.secondElement.setAttribute("max", "59"), n.secondElement.setAttribute("maxlength", "2"), n.timeContainer.appendChild(Ze("span", "flatpickr-time-separator", ":")), n.timeContainer.appendChild(ae)
        }
        return n.config.time_24hr || (n.amPM = Ze("span", "flatpickr-am-pm", n.l10n.amPM[jn((n.latestSelectedDateObj ? n.hourElement.value : n.config.defaultHour) > 11)]), n.amPM.title = n.l10n.toggleTitle, n.amPM.tabIndex = -1, n.timeContainer.appendChild(n.amPM)), n.timeContainer
    }

    function te() {
        n.weekdayContainer ? Oc(n.weekdayContainer) : n.weekdayContainer = Ze("div", "flatpickr-weekdays");
        for (let _ = n.config.showMonths; _--;) {
            const M = Ze("div", "flatpickr-weekdaycontainer");
            n.weekdayContainer.appendChild(M)
        }
        return A(), n.weekdayContainer
    }

    function A() {
        if (!n.weekdayContainer) return;
        const _ = n.l10n.firstDayOfWeek;
        let M = [...n.l10n.weekdays.shorthand];
        _ > 0 && _ < M.length && (M = [...M.splice(_, M.length), ...M.splice(0, _)]);
        for (let R = n.config.showMonths; R--;) n.weekdayContainer.children[R].innerHTML = `
      <span className='flatpickr-weekday'>
        ${M.join("</span><span className='flatpickr-weekday'>")}
      </span>
      `
    }

    function F() {
        n.calendarContainer.classList.add("hasWeeks");
        const _ = Ze("div", "flatpickr-weekwrapper");
        _.appendChild(Ze("span", "flatpickr-weekday", n.l10n.weekAbbreviation));
        const M = Ze("div", "flatpickr-weeks");
        return _.appendChild(M), { weekWrapper: _, weekNumbers: M }
    }

    function q(_, M = !0) {
        const R = M ? _ : _ - n.currentMonth;
        R < 0 && n._hidePrevMonthArrow === !0 || R > 0 && n._hideNextMonthArrow === !0 || (n.currentMonth += R, (n.currentMonth < 0 || n.currentMonth > 11) && (n.currentYear += n.currentMonth > 11 ? 1 : -1, n.currentMonth = (n.currentMonth + 12) % 12, at("onYearChange"), he()), Ee(), at("onMonthChange"), yi())
    }

    function L(_ = !0, M = !0) {
        if (n.input.value = "", n.altInput !== void 0 && (n.altInput.value = ""), n.mobileInput !== void 0 && (n.mobileInput.value = ""), n.selectedDates = [], n.latestSelectedDateObj = void 0, M === !0 && (n.currentYear = n._initialDate.getFullYear(), n.currentMonth = n._initialDate.getMonth()), n.config.enableTime === !0) {
            const { hours: R, minutes: B, seconds: ae } = cm(n.config);
            h(R, B, ae)
        }
        n.redraw(), _ && at("onChange")
    }

    function $() { n.isOpen = !1, n.isMobile || (n.calendarContainer !== void 0 && n.calendarContainer.classList.remove("open"), n._input !== void 0 && n._input.classList.remove("active")), at("onClose") }

    function se() {
        n.config !== void 0 && at("onDestroy");
        for (let _ = n._handlers.length; _--;) n._handlers[_].remove();
        if (n._handlers = [], n.mobileInput) n.mobileInput.parentNode && n.mobileInput.parentNode.removeChild(n.mobileInput), n.mobileInput = void 0;
        else if (n.calendarContainer && n.calendarContainer.parentNode)
            if (n.config.static && n.calendarContainer.parentNode) {
                const _ = n.calendarContainer.parentNode;
                if (_.lastChild && _.removeChild(_.lastChild), _.parentNode) {
                    for (; _.firstChild;) _.parentNode.insertBefore(_.firstChild, _);
                    _.parentNode.removeChild(_)
                }
            } else n.calendarContainer.parentNode.removeChild(n.calendarContainer);
        n.altInput && (n.input.type = "text", n.altInput.parentNode && n.altInput.parentNode.removeChild(n.altInput), delete n.altInput), n.input && (n.input.type = n.input._type, n.input.classList.remove("flatpickr-input"), n.input.removeAttribute("readonly")), ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(_ => { try { delete n[_] } catch {} })
    }

    function ge(_) { return n.config.appendTo && n.config.appendTo.contains(_) ? !0 : n.calendarContainer.contains(_) }

    function Se(_) {
        if (n.isOpen && !n.config.inline) {
            const M = xn(_),
                R = ge(M),
                B = M === n.input || M === n.altInput || n.element.contains(M) || _.path && _.path.indexOf && (~_.path.indexOf(n.input) || ~_.path.indexOf(n.altInput)),
                ae = _.type === "blur" ? B && _.relatedTarget && !ge(_.relatedTarget) : !B && !R && !ge(_.relatedTarget),
                G = !n.config.ignoredFocusElements.some(we => we.contains(M));
            ae && G && (n.timeContainer !== void 0 && n.minuteElement !== void 0 && n.hourElement !== void 0 && n.input.value !== "" && n.input.value !== void 0 && a(), n.close(), n.config && n.config.mode === "range" && n.selectedDates.length === 1 && (n.clear(!1), n.redraw()))
        }
    }

    function $e(_) {
        if (!_ || n.config.minDate && _ < n.config.minDate.getFullYear() || n.config.maxDate && _ > n.config.maxDate.getFullYear()) return;
        const M = _,
            R = n.currentYear !== M;
        n.currentYear = M || n.currentYear, n.config.maxDate && n.currentYear === n.config.maxDate.getFullYear() ? n.currentMonth = Math.min(n.config.maxDate.getMonth(), n.currentMonth) : n.config.minDate && n.currentYear === n.config.minDate.getFullYear() && (n.currentMonth = Math.max(n.config.minDate.getMonth(), n.currentMonth)), R && (n.redraw(), at("onYearChange"), he())
    }

    function qe(_, M = !0) {
        var R;
        const B = n.parseDate(_, void 0, M);
        if (n.config.minDate && B && bn(B, n.config.minDate, M !== void 0 ? M : !n.minDateHasTime) < 0 || n.config.maxDate && B && bn(B, n.config.maxDate, M !== void 0 ? M : !n.maxDateHasTime) > 0) return !1;
        if (!n.config.enable && n.config.disable.length === 0) return !0;
        if (B === void 0) return !1;
        const ae = !!n.config.enable,
            G = (R = n.config.enable) !== null && R !== void 0 ? R : n.config.disable;
        for (let we = 0, pe; we < G.length; we++) { if (pe = G[we], typeof pe == "function" && pe(B)) return ae; if (pe instanceof Date && B !== void 0 && pe.getTime() === B.getTime()) return ae; if (typeof pe == "string") { const Le = n.parseDate(pe, void 0, !0); return Le && Le.getTime() === B.getTime() ? ae : !ae } else if (typeof pe == "object" && B !== void 0 && pe.from && pe.to && B.getTime() >= pe.from.getTime() && B.getTime() <= pe.to.getTime()) return ae }
        return !ae
    }

    function Ht(_) { return n.daysContainer !== void 0 ? _.className.indexOf("hidden") === -1 && _.className.indexOf("flatpickr-disabled") === -1 && n.daysContainer.contains(_) : !1 }

    function Yt(_) { _.target === n._input && (n.selectedDates.length > 0 || n._input.value.length > 0) && !(_.relatedTarget && ge(_.relatedTarget)) && n.setDate(n._input.value, !0, _.target === n.altInput ? n.config.altFormat : n.config.dateFormat) }

    function Hn(_) {
        const M = xn(_),
            R = n.config.wrap ? e.contains(M) : M === n._input,
            B = n.config.allowInput,
            ae = n.isOpen && (!B || !R),
            G = n.config.inline && R && !B;
        if (_.keyCode === 13 && R) {
            if (B) return n.setDate(n._input.value, !0, M === n.altInput ? n.config.altFormat : n.config.dateFormat), M.blur();
            n.open()
        } else if (ge(M) || ae || G) {
            const we = !!n.timeContainer && n.timeContainer.contains(M);
            switch (_.keyCode) {
                case 13:
                    we ? (_.preventDefault(), a(), vs()) : wl(_);
                    break;
                case 27:
                    _.preventDefault(), vs();
                    break;
                case 8:
                case 46:
                    R && !n.config.allowInput && (_.preventDefault(), n.clear());
                    break;
                case 37:
                case 39:
                    if (!we && !R) {
                        if (_.preventDefault(), n.daysContainer !== void 0 && (B === !1 || document.activeElement && Ht(document.activeElement))) {
                            const Le = _.keyCode === 39 ? 1 : -1;
                            _.ctrlKey ? (_.stopPropagation(), q(Le), z(I(1), 0)) : z(void 0, Le)
                        }
                    } else n.hourElement && n.hourElement.focus();
                    break;
                case 38:
                case 40:
                    _.preventDefault();
                    const pe = _.keyCode === 40 ? 1 : -1;
                    n.daysContainer && M.$i !== void 0 || M === n.input || M === n.altInput ? _.ctrlKey ? (_.stopPropagation(), $e(n.currentYear - pe), z(I(1), 0)) : we || z(void 0, pe * 7) : M === n.currentYearElement ? $e(n.currentYear - pe) : n.config.enableTime && (!we && n.hourElement && n.hourElement.focus(), a(_), n._debouncedChange());
                    break;
                case 9:
                    if (we) {
                        const Le = [n.hourElement, n.minuteElement, n.secondElement, n.amPM].concat(n.pluginElements).filter(tt => tt),
                            Ne = Le.indexOf(M);
                        if (Ne !== -1) {
                            const tt = Le[Ne + (_.shiftKey ? -1 : 1)];
                            _.preventDefault(), (tt || n._input).focus()
                        }
                    } else !n.config.noCalendar && n.daysContainer && n.daysContainer.contains(M) && _.shiftKey && (_.preventDefault(), n._input.focus());
                    break
            }
        }
        if (n.amPM !== void 0 && M === n.amPM) switch (_.key) {
            case n.l10n.amPM[0].charAt(0):
            case n.l10n.amPM[0].charAt(0).toLowerCase():
                n.amPM.textContent = n.l10n.amPM[0], c(), Yn();
                break;
            case n.l10n.amPM[1].charAt(0):
            case n.l10n.amPM[1].charAt(0).toLowerCase():
                n.amPM.textContent = n.l10n.amPM[1], c(), Yn();
                break
        }(R || ge(M)) && at("onKeyDown", _)
    }

    function ys(_) {
        if (n.selectedDates.length !== 1 || _ && (!_.classList.contains("flatpickr-day") || _.classList.contains("flatpickr-disabled"))) return;
        const M = _ ? _.dateObj.getTime() : n.days.firstElementChild.dateObj.getTime(),
            R = n.parseDate(n.selectedDates[0], void 0, !0).getTime(),
            B = Math.min(M, n.selectedDates[0].getTime()),
            ae = Math.max(M, n.selectedDates[0].getTime());
        let G = !1,
            we = 0,
            pe = 0;
        for (let Le = B; Le < ae; Le += bR.DAY) qe(new Date(Le), !0) || (G = G || Le > B && Le < ae, Le < R && (!we || Le > we) ? we = Le : Le > R && (!pe || Le < pe) && (pe = Le));
        for (let Le = 0; Le < n.config.showMonths; Le++) {
            const Ne = n.daysContainer.children[Le];
            for (let tt = 0, sn = Ne.children.length; tt < sn; tt++) {
                const Rt = Ne.children[tt],
                    Mn = Rt.dateObj.getTime(),
                    wi = we > 0 && Mn < we || pe > 0 && Mn > pe;
                if (wi) { Rt.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(xi => { Rt.classList.remove(xi) }); continue } else if (G && !wi) continue;
                ["startRange", "inRange", "endRange", "notAllowed"].forEach(xi => { Rt.classList.remove(xi) }), _ !== void 0 && (_.classList.add(M <= n.selectedDates[0].getTime() ? "startRange" : "endRange"), R < M && Mn === R ? Rt.classList.add("startRange") : R > M && Mn === R && Rt.classList.add("endRange"), Mn >= we && (pe === 0 || Mn <= pe) && xR(Mn, R, M) && Rt.classList.add("inRange"))
            }
        }
    }

    function mf() { n.isOpen && !n.config.static && !n.config.inline && oo() }

    function pl(_, M = n._positionElement) {
        if (n.isMobile === !0) {
            if (_) {
                _.preventDefault();
                const B = xn(_);
                B && B.blur()
            }
            n.mobileInput !== void 0 && (n.mobileInput.focus(), n.mobileInput.click()), at("onOpen");
            return
        } else if (n._input.disabled || n.config.inline) return;
        const R = n.isOpen;
        n.isOpen = !0, R || (n.calendarContainer.classList.add("open"), n._input.classList.add("active"), at("onOpen"), oo(M)), n.config.enableTime === !0 && n.config.noCalendar === !0 && n.config.allowInput === !1 && (_ === void 0 || !n.timeContainer.contains(_.relatedTarget)) && setTimeout(() => n.hourElement.select(), 50)
    }

    function ml(_) {
        return M => {
            const R = n.config[`_${_}Date`] = n.parseDate(M, n.config.dateFormat),
                B = n.config[`_${_==="min"?"max":"min"}Date`];
            R !== void 0 && (n[_ === "min" ? "minDateHasTime" : "maxDateHasTime"] = R.getHours() > 0 || R.getMinutes() > 0 || R.getSeconds() > 0), n.selectedDates && (n.selectedDates = n.selectedDates.filter(ae => qe(ae)), !n.selectedDates.length && _ === "min" && d(R), Yn()), n.daysContainer && (vl(), R !== void 0 ? n.currentYearElement[_] = R.getFullYear().toString() : n.currentYearElement.removeAttribute(_), n.currentYearElement.disabled = !!B && R !== void 0 && B.getFullYear() === R.getFullYear())
        }
    }

    function gf() {
        const _ = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
            M = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(e.dataset || {}))), t),
            R = {};
        n.config.parseDate = M.parseDate, n.config.formatDate = M.formatDate, Object.defineProperty(n.config, "enable", { get: () => n.config._enable, set: G => { n.config._enable = xs(G) } }), Object.defineProperty(n.config, "disable", { get: () => n.config._disable, set: G => { n.config._disable = xs(G) } });
        const B = M.mode === "time";
        if (!M.dateFormat && (M.enableTime || B)) {
            const G = Ot.defaultConfig.dateFormat || ts.dateFormat;
            R.dateFormat = M.noCalendar || B ? "H:i" + (M.enableSeconds ? ":S" : "") : G + " H:i" + (M.enableSeconds ? ":S" : "")
        }
        if (M.altInput && (M.enableTime || B) && !M.altFormat) {
            const G = Ot.defaultConfig.altFormat || ts.altFormat;
            R.altFormat = M.noCalendar || B ? "h:i" + (M.enableSeconds ? ":S K" : " K") : G + ` h:i${M.enableSeconds?":S":""} K`
        }
        Object.defineProperty(n.config, "minDate", { get: () => n.config._minDate, set: ml("min") }), Object.defineProperty(n.config, "maxDate", { get: () => n.config._maxDate, set: ml("max") });
        const ae = G => we => { n.config[G === "min" ? "_minTime" : "_maxTime"] = n.parseDate(we, "H:i:S") };
        Object.defineProperty(n.config, "minTime", { get: () => n.config._minTime, set: ae("min") }), Object.defineProperty(n.config, "maxTime", { get: () => n.config._maxTime, set: ae("max") }), M.mode === "time" && (n.config.noCalendar = !0, n.config.enableTime = !0), Object.assign(n.config, R, M);
        for (let G = 0; G < _.length; G++) n.config[_[G]] = n.config[_[G]] === !0 || n.config[_[G]] === "true";
        om.filter(G => n.config[G] !== void 0).forEach(G => { n.config[G] = sm(n.config[G] || []).map(o) }), n.isMobile = !n.config.disableMobile && !n.config.inline && n.config.mode === "single" && !n.config.disable.length && !n.config.enable && !n.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (let G = 0; G < n.config.plugins.length; G++) { const we = n.config.plugins[G](n) || {}; for (const pe in we) om.indexOf(pe) > -1 ? n.config[pe] = sm(we[pe]).map(o).concat(n.config[pe]) : typeof M[pe] == "undefined" && (n.config[pe] = we[pe]) }
        M.altInputClass || (n.config.altInputClass = gl().className + " " + n.config.altInputClass), at("onParseConfig")
    }

    function gl() { return n.config.wrap ? e.querySelector("[data-input]") : e }

    function yl() { typeof n.config.locale != "object" && typeof Ot.l10ns[n.config.locale] == "undefined" && n.config.errorHandler(new Error(`flatpickr: invalid locale ${n.config.locale}`)), n.l10n = Object.assign(Object.assign({}, Ot.l10ns.default), typeof n.config.locale == "object" ? n.config.locale : n.config.locale !== "default" ? Ot.l10ns[n.config.locale] : void 0), lm.K = `(${n.l10n.amPM[0]}|${n.l10n.amPM[1]}|${n.l10n.amPM[0].toLowerCase()}|${n.l10n.amPM[1].toLowerCase()})`, Object.assign(Object.assign({}, t), JSON.parse(JSON.stringify(e.dataset || {}))).time_24hr === void 0 && Ot.defaultConfig.time_24hr === void 0 && (n.config.time_24hr = n.l10n.time_24hr), n.formatDate = Hx(n), n.parseDate = um({ config: n.config, l10n: n.l10n }) }

    function oo(_) {
        if (typeof n.config.position == "function") return void n.config.position(n, _);
        if (n.calendarContainer === void 0) return;
        at("onPreCalendarPosition");
        const M = _ || n._positionElement,
            R = Array.prototype.reduce.call(n.calendarContainer.children, (bi, _s) => bi + _s.offsetHeight, 0),
            B = n.calendarContainer.offsetWidth,
            ae = n.config.position.split(" "),
            G = ae[0],
            we = ae.length > 1 ? ae[1] : null,
            pe = M.getBoundingClientRect(),
            Le = window.innerHeight - pe.bottom,
            Ne = G === "above" || G !== "below" && Le < R && pe.top > R,
            tt = window.pageYOffset + pe.top + (Ne ? -R - 2 : M.offsetHeight + 2);
        if (on(n.calendarContainer, "arrowTop", !Ne), on(n.calendarContainer, "arrowBottom", Ne), n.config.inline) return;
        let sn = window.pageXOffset + pe.left,
            Rt = !1,
            vi = !1;
        we === "center" ? (sn -= (B - pe.width) / 2, Rt = !0) : we === "right" && (sn -= B - pe.width, vi = !0), on(n.calendarContainer, "arrowLeft", !Rt && !vi), on(n.calendarContainer, "arrowCenter", Rt), on(n.calendarContainer, "arrowRight", vi);
        const Mn = window.document.body.offsetWidth - (window.pageXOffset + pe.right),
            wi = sn + B > window.document.body.offsetWidth,
            xi = Mn + B > window.document.body.offsetWidth;
        if (on(n.calendarContainer, "rightMost", wi), !n.config.static)
            if (n.calendarContainer.style.top = `${tt}px`, !wi) n.calendarContainer.style.left = `${sn}px`, n.calendarContainer.style.right = "auto";
            else if (!xi) n.calendarContainer.style.left = "auto", n.calendarContainer.style.right = `${Mn}px`;
        else {
            const bi = yf();
            if (bi === void 0) return;
            const _s = window.document.body.offsetWidth,
                kf = Math.max(0, _s / 2 - B / 2),
                kl = ".flatpickr-calendar.centerMost:before",
                Cl = ".flatpickr-calendar.centerMost:after",
                Ss = bi.cssRules.length,
                _i = `{left:${pe.left}px;right:auto;}`;
            on(n.calendarContainer, "rightMost", !1), on(n.calendarContainer, "centerMost", !0), bi.insertRule(`${kl},${Cl}${_i}`, Ss), n.calendarContainer.style.left = `${kf}px`, n.calendarContainer.style.right = "auto"
        }
    }

    function yf() {
        let _ = null;
        for (let M = 0; M < document.styleSheets.length; M++) {
            const R = document.styleSheets[M];
            try { R.cssRules } catch { continue }
            _ = R;
            break
        }
        return _ != null ? _ : vf()
    }

    function vf() { const _ = document.createElement("style"); return document.head.appendChild(_), _.sheet }

    function vl() { n.config.noCalendar || n.isMobile || (he(), yi(), Ee()) }

    function vs() { n._input.focus(), window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? setTimeout(n.close, 0) : n.close() }

    function wl(_) {
        _.preventDefault(), _.stopPropagation();
        const M = we => we.classList && we.classList.contains("flatpickr-day") && !we.classList.contains("flatpickr-disabled") && !we.classList.contains("notAllowed"),
            R = Wx(xn(_), M);
        if (R === void 0) return;
        const B = R,
            ae = n.latestSelectedDateObj = new Date(B.dateObj.getTime()),
            G = (ae.getMonth() < n.currentMonth || ae.getMonth() > n.currentMonth + n.config.showMonths - 1) && n.config.mode !== "range";
        if (n.selectedDateElem = B, n.config.mode === "single") n.selectedDates = [ae];
        else if (n.config.mode === "multiple") {
            const we = lo(ae);
            we ? n.selectedDates.splice(parseInt(we), 1) : n.selectedDates.push(ae)
        } else n.config.mode === "range" && (n.selectedDates.length === 2 && n.clear(!1, !1), n.latestSelectedDateObj = ae, n.selectedDates.push(ae), bn(ae, n.selectedDates[0], !0) !== 0 && n.selectedDates.sort((we, pe) => we.getTime() - pe.getTime()));
        if (c(), G) {
            const we = n.currentYear !== ae.getFullYear();
            n.currentYear = ae.getFullYear(), n.currentMonth = ae.getMonth(), we && (at("onYearChange"), he()), at("onMonthChange")
        }
        if (yi(), Ee(), Yn(), !G && n.config.mode !== "range" && n.config.showMonths === 1 ? T(B) : n.selectedDateElem !== void 0 && n.hourElement === void 0 && n.selectedDateElem && n.selectedDateElem.focus(), n.hourElement !== void 0 && n.hourElement !== void 0 && n.hourElement.focus(), n.config.closeOnSelect) {
            const we = n.config.mode === "single" && !n.config.enableTime,
                pe = n.config.mode === "range" && n.selectedDates.length === 2 && !n.config.enableTime;
            (we || pe) && vs()
        }
        b()
    }
    const so = { locale: [yl, A], showMonths: [H, s, te], minDate: [m], maxDate: [m], clickOpens: [() => { n.config.clickOpens === !0 ? (w(n._input, "focus", n.open), w(n._input, "click", n.open)) : (n._input.removeEventListener("focus", n.open), n._input.removeEventListener("click", n.open)) }] };

    function xl(_, M) {
        if (_ !== null && typeof _ == "object") { Object.assign(n.config, _); for (const R in _) so[R] !== void 0 && so[R].forEach(B => B()) } else n.config[_] = M, so[_] !== void 0 ? so[_].forEach(R => R()) : om.indexOf(_) > -1 && (n.config[_] = sm(M));
        n.redraw(), Yn(!0)
    }

    function ws(_, M) {
        let R = [];
        if (_ instanceof Array) R = _.map(B => n.parseDate(B, M));
        else if (_ instanceof Date || typeof _ == "number") R = [n.parseDate(_, M)];
        else if (typeof _ == "string") switch (n.config.mode) {
            case "single":
            case "time":
                R = [n.parseDate(_, M)];
                break;
            case "multiple":
                R = _.split(n.config.conjunction).map(B => n.parseDate(B, M));
                break;
            case "range":
                R = _.split(n.l10n.rangeSeparator).map(B => n.parseDate(B, M));
                break
        } else n.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(_)}`));
        n.selectedDates = n.config.allowInvalidPreload ? R : R.filter(B => B instanceof Date && qe(B, !1)), n.config.mode === "range" && n.selectedDates.sort((B, ae) => B.getTime() - ae.getTime())
    }

    function wf(_, M = !1, R = n.config.dateFormat) {
        if (_ !== 0 && !_ || _ instanceof Array && _.length === 0) return n.clear(M);
        ws(_, R), n.latestSelectedDateObj = n.selectedDates[n.selectedDates.length - 1], n.redraw(), m(void 0, M), d(), n.selectedDates.length === 0 && n.clear(!1), Yn(M), M && at("onChange")
    }

    function xs(_) { return _.slice().map(M => typeof M == "string" || typeof M == "number" || M instanceof Date ? n.parseDate(M, void 0, !0) : M && typeof M == "object" && M.from && M.to ? { from: n.parseDate(M.from, void 0), to: n.parseDate(M.to, void 0) } : M).filter(M => M) }

    function xf() {
        n.selectedDates = [], n.now = n.parseDate(n.config.now) || new Date;
        const _ = n.config.defaultDate || ((n.input.nodeName === "INPUT" || n.input.nodeName === "TEXTAREA") && n.input.placeholder && n.input.value === n.input.placeholder ? null : n.input.value);
        _ && ws(_, n.config.dateFormat), n._initialDate = n.selectedDates.length > 0 ? n.selectedDates[0] : n.config.minDate && n.config.minDate.getTime() > n.now.getTime() ? n.config.minDate : n.config.maxDate && n.config.maxDate.getTime() < n.now.getTime() ? n.config.maxDate : n.now, n.currentYear = n._initialDate.getFullYear(), n.currentMonth = n._initialDate.getMonth(), n.selectedDates.length > 0 && (n.latestSelectedDateObj = n.selectedDates[0]), n.config.minTime !== void 0 && (n.config.minTime = n.parseDate(n.config.minTime, "H:i")), n.config.maxTime !== void 0 && (n.config.maxTime = n.parseDate(n.config.maxTime, "H:i")), n.minDateHasTime = !!n.config.minDate && (n.config.minDate.getHours() > 0 || n.config.minDate.getMinutes() > 0 || n.config.minDate.getSeconds() > 0), n.maxDateHasTime = !!n.config.maxDate && (n.config.maxDate.getHours() > 0 || n.config.maxDate.getMinutes() > 0 || n.config.maxDate.getSeconds() > 0)
    }

    function bf() {
        if (n.input = gl(), !n.input) { n.config.errorHandler(new Error("Invalid input element specified")); return }
        n.input._type = n.input.type, n.input.type = "text", n.input.classList.add("flatpickr-input"), n._input = n.input, n.config.altInput && (n.altInput = Ze(n.input.nodeName, n.config.altInputClass), n._input = n.altInput, n.altInput.placeholder = n.input.placeholder, n.altInput.disabled = n.input.disabled, n.altInput.required = n.input.required, n.altInput.tabIndex = n.input.tabIndex, n.altInput.type = "text", n.input.setAttribute("type", "hidden"), !n.config.static && n.input.parentNode && n.input.parentNode.insertBefore(n.altInput, n.input.nextSibling)), n.config.allowInput || n._input.setAttribute("readonly", "readonly"), n._positionElement = n.config.positionElement || n._input
    }

    function _f() {
        const _ = n.config.enableTime ? n.config.noCalendar ? "time" : "datetime-local" : "date";
        n.mobileInput = Ze("input", n.input.className + " flatpickr-mobile"), n.mobileInput.tabIndex = 1, n.mobileInput.type = _, n.mobileInput.disabled = n.input.disabled, n.mobileInput.required = n.input.required, n.mobileInput.placeholder = n.input.placeholder, n.mobileFormatStr = _ === "datetime-local" ? "Y-m-d\\TH:i:S" : _ === "date" ? "Y-m-d" : "H:i:S", n.selectedDates.length > 0 && (n.mobileInput.defaultValue = n.mobileInput.value = n.formatDate(n.selectedDates[0], n.mobileFormatStr)), n.config.minDate && (n.mobileInput.min = n.formatDate(n.config.minDate, "Y-m-d")), n.config.maxDate && (n.mobileInput.max = n.formatDate(n.config.maxDate, "Y-m-d")), n.input.getAttribute("step") && (n.mobileInput.step = String(n.input.getAttribute("step"))), n.input.type = "hidden", n.altInput !== void 0 && (n.altInput.type = "hidden");
        try { n.input.parentNode && n.input.parentNode.insertBefore(n.mobileInput, n.input.nextSibling) } catch {}
        w(n.mobileInput, "change", M => { n.setDate(xn(M).value, !1, n.mobileFormatStr), at("onChange"), at("onClose") })
    }

    function Sf(_) {
        if (n.isOpen === !0) return n.close();
        n.open(_)
    }

    function at(_, M) {
        if (n.config === void 0) return;
        const R = n.config[_];
        if (R !== void 0 && R.length > 0)
            for (let B = 0; R[B] && B < R.length; B++) R[B](n.selectedDates, n.input.value, n, M);
        _ === "onChange" && (n.input.dispatchEvent(ao("change")), n.input.dispatchEvent(ao("input")))
    }

    function ao(_) { const M = document.createEvent("Event"); return M.initEvent(_, !0, !0), M }

    function lo(_) {
        for (let M = 0; M < n.selectedDates.length; M++)
            if (bn(n.selectedDates[M], _) === 0) return "" + M;
        return !1
    }

    function bl(_) { return n.config.mode !== "range" || n.selectedDates.length < 2 ? !1 : bn(_, n.selectedDates[0]) >= 0 && bn(_, n.selectedDates[1]) <= 0 }

    function yi() {
        n.config.noCalendar || n.isMobile || !n.monthNav || (n.yearElements.forEach((_, M) => {
            const R = new Date(n.currentYear, n.currentMonth, 1);
            R.setMonth(n.currentMonth + M), n.config.showMonths > 1 || n.config.monthSelectorType === "static" ? n.monthElements[M].textContent = Pc(R.getMonth(), n.config.shorthandCurrentMonth, n.l10n) + " " : n.monthsDropdownContainer.value = R.getMonth().toString(), _.value = R.getFullYear().toString()
        }), n._hidePrevMonthArrow = n.config.minDate !== void 0 && (n.currentYear === n.config.minDate.getFullYear() ? n.currentMonth <= n.config.minDate.getMonth() : n.currentYear < n.config.minDate.getFullYear()), n._hideNextMonthArrow = n.config.maxDate !== void 0 && (n.currentYear === n.config.maxDate.getFullYear() ? n.currentMonth + 1 > n.config.maxDate.getMonth() : n.currentYear > n.config.maxDate.getFullYear()))
    }

    function bs(_) { return n.selectedDates.map(M => n.formatDate(M, _)).filter((M, R, B) => n.config.mode !== "range" || n.config.enableTime || B.indexOf(M) === R).join(n.config.mode !== "range" ? n.config.conjunction : n.l10n.rangeSeparator) }

    function Yn(_ = !0) { n.mobileInput !== void 0 && n.mobileFormatStr && (n.mobileInput.value = n.latestSelectedDateObj !== void 0 ? n.formatDate(n.latestSelectedDateObj, n.mobileFormatStr) : ""), n.input.value = bs(n.config.dateFormat), n.altInput !== void 0 && (n.altInput.value = bs(n.config.altFormat)), _ !== !1 && at("onValueUpdate") }

    function _l(_) {
        const M = xn(_),
            R = n.prevMonthNav.contains(M),
            B = n.nextMonthNav.contains(M);
        R || B ? q(R ? -1 : 1) : n.yearElements.indexOf(M) >= 0 ? M.select() : M.classList.contains("arrowUp") ? n.changeYear(n.currentYear + 1) : M.classList.contains("arrowDown") && n.changeYear(n.currentYear - 1)
    }

    function Sl(_) {
        _.preventDefault();
        const M = _.type === "keydown",
            R = xn(_),
            B = R;
        n.amPM !== void 0 && R === n.amPM && (n.amPM.textContent = n.l10n.amPM[jn(n.amPM.textContent === n.l10n.amPM[0])]);
        const ae = parseFloat(B.getAttribute("min")),
            G = parseFloat(B.getAttribute("max")),
            we = parseFloat(B.getAttribute("step")),
            pe = parseInt(B.value, 10),
            Le = _.delta || (M ? _.which === 38 ? 1 : -1 : 0);
        let Ne = pe + we * Le;
        if (typeof B.value != "undefined" && B.value.length === 2) {
            const tt = B === n.hourElement,
                sn = B === n.minuteElement;
            Ne < ae ? (Ne = G + Ne + jn(!tt) + (jn(tt) && jn(!n.amPM)), sn && k(void 0, -1, n.hourElement)) : Ne > G && (Ne = B === n.hourElement ? Ne - G - jn(!n.amPM) : ae, sn && k(void 0, 1, n.hourElement)), n.amPM && tt && (we === 1 ? Ne + pe === 23 : Math.abs(Ne - pe) > we) && (n.amPM.textContent = n.l10n.amPM[jn(n.amPM.textContent === n.l10n.amPM[0])]), B.value = dn(Ne)
        }
    }
    return i(), n
}

function ns(e, t) {
    const n = Array.prototype.slice.call(e).filter(i => i instanceof HTMLElement),
        r = [];
    for (let i = 0; i < n.length; i++) {
        const o = n[i];
        try {
            if (o.getAttribute("data-fp-omit") !== null) continue;
            o._flatpickr !== void 0 && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = SR(o, t || {}), r.push(o._flatpickr)
        } catch (s) { console.error(s) }
    }
    return r.length === 1 ? r[0] : r
}
typeof HTMLElement != "undefined" && typeof HTMLCollection != "undefined" && typeof NodeList != "undefined" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) { return ns(this, e) }, HTMLElement.prototype.flatpickr = function(e) { return ns([this], e) });
var Ot = function(e, t) { return typeof e == "string" ? ns(window.document.querySelectorAll(e), t) : e instanceof Node ? ns([e], t) : ns(e, t) };
Ot.defaultConfig = {};
Ot.l10ns = { en: Object.assign({}, Za), default: Object.assign({}, Za) };
Ot.localize = e => { Ot.l10ns.default = Object.assign(Object.assign({}, Ot.l10ns.default), e) };
Ot.setDefaults = e => { Ot.defaultConfig = Object.assign(Object.assign({}, Ot.defaultConfig), e) };
Ot.parseDate = um({});
Ot.formatDate = Hx({});
Ot.compareDates = bn;
typeof jQuery != "undefined" && typeof jQuery.fn != "undefined" && (jQuery.fn.flatpickr = function(e) { return ns(this, e) });
Date.prototype.fp_incr = function(e) { return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof e == "string" ? parseInt(e, 10) : e)) };
typeof window != "undefined" && (window.flatpickr = Ot);
var kR = Object.freeze({ __proto__: null, [Symbol.toStringTag]: "Module", default: Ot }),
    CR = AS(kR);
(function(e) {
    function t(H) { return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(X) { return typeof X } : t = function(X) { return X && typeof Symbol == "function" && X.constructor === Symbol && X !== Symbol.prototype ? "symbol" : typeof X }, t(H) }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var n = a(Z.exports),
        r = o(Ax.exports),
        i = o(CR);

    function o(H) { return H && H.__esModule ? H : { default: H } }

    function s() { if (typeof WeakMap != "function") return null; var H = new WeakMap; return s = function() { return H }, H }

    function a(H) {
        if (H && H.__esModule) return H;
        if (H === null || t(H) !== "object" && typeof H != "function") return { default: H };
        var Y = s();
        if (Y && Y.has(H)) return Y.get(H);
        var X = {},
            te = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var A in H)
            if (Object.prototype.hasOwnProperty.call(H, A)) {
                var F = te ? Object.getOwnPropertyDescriptor(H, A) : null;
                F && (F.get || F.set) ? Object.defineProperty(X, A, F) : X[A] = H[A]
            }
        return X.default = H, Y && Y.set(H, X), X
    }

    function l() { return l = Object.assign || function(H) { for (var Y = 1; Y < arguments.length; Y++) { var X = arguments[Y]; for (var te in X) Object.prototype.hasOwnProperty.call(X, te) && (H[te] = X[te]) } return H }, l.apply(this, arguments) }

    function u(H, Y) {
        if (H == null) return {};
        var X = c(H, Y),
            te, A;
        if (Object.getOwnPropertySymbols) { var F = Object.getOwnPropertySymbols(H); for (A = 0; A < F.length; A++) te = F[A], !(Y.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(H, te) || (X[te] = H[te])) }
        return X
    }

    function c(H, Y) {
        if (H == null) return {};
        var X = {},
            te = Object.keys(H),
            A, F;
        for (F = 0; F < te.length; F++) A = te[F], !(Y.indexOf(A) >= 0) && (X[A] = H[A]);
        return X
    }

    function d(H, Y) {
        var X = Object.keys(H);
        if (Object.getOwnPropertySymbols) {
            var te = Object.getOwnPropertySymbols(H);
            Y && (te = te.filter(function(A) { return Object.getOwnPropertyDescriptor(H, A).enumerable })), X.push.apply(X, te)
        }
        return X
    }

    function h(H) {
        for (var Y = 1; Y < arguments.length; Y++) {
            var X = arguments[Y] != null ? arguments[Y] : {};
            Y % 2 ? d(Object(X), !0).forEach(function(te) { I(H, te, X[te]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(X)) : d(Object(X)).forEach(function(te) { Object.defineProperty(H, te, Object.getOwnPropertyDescriptor(X, te)) })
        }
        return H
    }

    function y(H, Y) { if (!(H instanceof Y)) throw new TypeError("Cannot call a class as a function") }

    function w(H, Y) {
        for (var X = 0; X < Y.length; X++) {
            var te = Y[X];
            te.enumerable = te.enumerable || !1, te.configurable = !0, "value" in te && (te.writable = !0), Object.defineProperty(H, te.key, te)
        }
    }

    function b(H, Y, X) { return Y && w(H.prototype, Y), X && w(H, X), H }

    function g(H, Y) {
        if (typeof Y != "function" && Y !== null) throw new TypeError("Super expression must either be null or a function");
        H.prototype = Object.create(Y && Y.prototype, { constructor: { value: H, writable: !0, configurable: !0 } }), Y && m(H, Y)
    }

    function m(H, Y) { return m = Object.setPrototypeOf || function(te, A) { return te.__proto__ = A, te }, m(H, Y) }

    function S(H) {
        var Y = P();
        return function() {
            var te = T(H),
                A;
            if (Y) {
                var F = T(this).constructor;
                A = Reflect.construct(te, arguments, F)
            } else A = te.apply(this, arguments);
            return k(this, A)
        }
    }

    function k(H, Y) { return Y && (t(Y) === "object" || typeof Y == "function") ? Y : E(H) }

    function E(H) { if (H === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return H }

    function P() { if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1; if (typeof Proxy == "function") return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch { return !1 } }

    function T(H) { return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(X) { return X.__proto__ || Object.getPrototypeOf(X) }, T(H) }

    function I(H, Y, X) { return Y in H ? Object.defineProperty(H, Y, { value: X, enumerable: !0, configurable: !0, writable: !0 }) : H[Y] = X, H }
    var U = ["onChange", "onOpen", "onClose", "onMonthChange", "onYearChange", "onReady", "onValueUpdate", "onDayCreate"],
        z = r.default.oneOfType([r.default.func, r.default.arrayOf(r.default.func)]),
        ve = ["onCreate", "onDestroy"],
        Ee = r.default.func,
        he = function(H) {
            g(X, H);
            var Y = S(X);

            function X() {
                var te;
                y(this, X);
                for (var A = arguments.length, F = new Array(A), q = 0; q < A; q++) F[q] = arguments[q];
                return te = Y.call.apply(Y, [this].concat(F)), I(E(te), "createFlatpickrInstance", function() {
                    var L = h({ onClose: function() { te.node.blur && te.node.blur() } }, te.props.options);
                    U.forEach(function(se) { te.props[se] && (L[se] = te.props[se]) }), te.flatpickr = (0, i.default)(te.node, L), te.props.hasOwnProperty("value") && te.flatpickr.setDate(te.props.value, !1);
                    var $ = te.props.onCreate;
                    $ && $(te.flatpickr)
                }), I(E(te), "destroyFlatpickrInstance", function() {
                    var L = te.props.onDestroy;
                    L && L(te.flatpickr), te.flatpickr.destroy(), te.flatpickr = null
                }), I(E(te), "handleNodeChange", function(L) { te.node = L, te.flatpickr && (te.destroyFlatpickrInstance(), te.createFlatpickrInstance()) }), te
            }
            return b(X, [{
                key: "componentDidUpdate",
                value: function(A) {
                    var F = this,
                        q = this.props.options,
                        L = A.options;
                    U.forEach(function($e) { F.props.hasOwnProperty($e) && (q[$e] = F.props[$e]), A.hasOwnProperty($e) && (L[$e] = A[$e]) });
                    for (var $ = Object.getOwnPropertyNames(q), se = $.length - 1; se >= 0; se--) {
                        var ge = $[se],
                            Se = q[ge];
                        Se !== L[ge] && (U.indexOf(ge) !== -1 && !Array.isArray(Se) && (Se = [Se]), this.flatpickr.set(ge, Se))
                    }
                    this.props.hasOwnProperty("value") && this.props.value !== A.value && this.flatpickr.setDate(this.props.value, !1)
                }
            }, { key: "componentDidMount", value: function() { this.createFlatpickrInstance() } }, { key: "componentWillUnmount", value: function() { this.destroyFlatpickrInstance() } }, {
                key: "render",
                value: function() {
                    var A = this.props,
                        F = A.options,
                        q = A.defaultValue,
                        L = A.value,
                        $ = A.children,
                        se = A.render,
                        ge = u(A, ["options", "defaultValue", "value", "children", "render"]);
                    return U.forEach(function(Se) { delete ge[Se] }), ve.forEach(function(Se) { delete ge[Se] }), se ? se(h(h({}, ge), {}, { defaultValue: q, value: L }), this.handleNodeChange) : F.wrap ? n.default.createElement("div", l({}, ge, { ref: this.handleNodeChange }), $) : n.default.createElement("input", l({}, ge, { defaultValue: q, ref: this.handleNodeChange }))
                }
            }]), X
        }(n.Component);
    I(he, "propTypes", { defaultValue: r.default.string, options: r.default.object, onChange: z, onOpen: z, onClose: z, onMonthChange: z, onYearChange: z, onReady: z, onValueUpdate: z, onDayCreate: z, onCreate: Ee, onDestroy: Ee, value: r.default.oneOfType([r.default.string, r.default.array, r.default.object, r.default.number]), children: r.default.node, className: r.default.string, render: r.default.func }), I(he, "defaultProps", { options: {} });
    var Re = he;
    e.default = Re
})(zx);
var uI = TS(zx); //! moment.js
//! version : 2.29.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Yx;

function oe() { return Yx.apply(null, arguments) }

function MR(e) { Yx = e }

function Xn(e) { return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]" }

function Ji(e) { return e != null && Object.prototype.toString.call(e) === "[object Object]" }

function Ke(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }

function fm(e) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
        if (Ke(e, t)) return !1;
    return !0
}

function hn(e) { return e === void 0 }

function Or(e) { return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]" }

function el(e) { return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]" }

function $x(e, t) {
    var n = [],
        r, i = e.length;
    for (r = 0; r < i; ++r) n.push(t(e[r], r));
    return n
}

function fi(e, t) { for (var n in t) Ke(t, n) && (e[n] = t[n]); return Ke(t, "toString") && (e.toString = t.toString), Ke(t, "valueOf") && (e.valueOf = t.valueOf), e }

function cr(e, t, n, r) { return yb(e, t, n, r, !0).utc() }

function ER() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidEra: null, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], era: null, meridiem: null, rfc2822: !1, weekdayMismatch: !1 } }

function Ie(e) { return e._pf == null && (e._pf = ER()), e._pf }
var dm;
Array.prototype.some ? dm = Array.prototype.some : dm = function(e) {
    var t = Object(this),
        n = t.length >>> 0,
        r;
    for (r = 0; r < n; r++)
        if (r in t && e.call(this, t[r], r, t)) return !0;
    return !1
};

function hm(e) {
    if (e._isValid == null) {
        var t = Ie(e),
            n = dm.call(t.parsedDateParts, function(i) { return i != null }),
            r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
        if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = r;
        else return r
    }
    return e._isValid
}

function Rc(e) { var t = cr(NaN); return e != null ? fi(Ie(t), e) : Ie(t).userInvalidated = !0, t }
var Vx = oe.momentProperties = [],
    pm = !1;

function mm(e, t) {
    var n, r, i, o = Vx.length;
    if (hn(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), hn(t._i) || (e._i = t._i), hn(t._f) || (e._f = t._f), hn(t._l) || (e._l = t._l), hn(t._strict) || (e._strict = t._strict), hn(t._tzm) || (e._tzm = t._tzm), hn(t._isUTC) || (e._isUTC = t._isUTC), hn(t._offset) || (e._offset = t._offset), hn(t._pf) || (e._pf = Ie(t)), hn(t._locale) || (e._locale = t._locale), o > 0)
        for (n = 0; n < o; n++) r = Vx[n], i = t[r], hn(i) || (e[r] = i);
    return e
}

function tl(e) { mm(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), pm === !1 && (pm = !0, oe.updateOffset(this), pm = !1) }

function qn(e) { return e instanceof tl || e != null && e._isAMomentObject != null }

function Ux(e) { oe.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + e) }

function zn(e, t) {
    var n = !0;
    return fi(function() {
        if (oe.deprecationHandler != null && oe.deprecationHandler(null, e), n) {
            var r = [],
                i, o, s, a = arguments.length;
            for (o = 0; o < a; o++) {
                if (i = "", typeof arguments[o] == "object") {
                    i += `
[` + o + "] ";
                    for (s in arguments[0]) Ke(arguments[0], s) && (i += s + ": " + arguments[0][s] + ", ");
                    i = i.slice(0, -2)
                } else i = arguments[o];
                r.push(i)
            }
            Ux(e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack), n = !1
        }
        return t.apply(this, arguments)
    }, t)
}
var Gx = {};

function Xx(e, t) { oe.deprecationHandler != null && oe.deprecationHandler(e, t), Gx[e] || (Ux(t), Gx[e] = !0) }
oe.suppressDeprecationWarnings = !1;
oe.deprecationHandler = null;

function fr(e) { return typeof Function != "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]" }

function OR(e) {
    var t, n;
    for (n in e) Ke(e, n) && (t = e[n], fr(t) ? this[n] = t : this["_" + n] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
}

function gm(e, t) {
    var n = fi({}, e),
        r;
    for (r in t) Ke(t, r) && (Ji(e[r]) && Ji(t[r]) ? (n[r] = {}, fi(n[r], e[r]), fi(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
    for (r in e) Ke(e, r) && !Ke(t, r) && Ji(e[r]) && (n[r] = fi({}, n[r]));
    return n
}

function ym(e) { e != null && this.set(e) }
var vm;
Object.keys ? vm = Object.keys : vm = function(e) { var t, n = []; for (t in e) Ke(e, t) && n.push(t); return n };
var DR = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" };

function PR(e, t, n) { var r = this._calendar[e] || this._calendar.sameElse; return fr(r) ? r.call(t, n) : r }

function dr(e, t, n) {
    var r = "" + Math.abs(e),
        i = t - r.length,
        o = e >= 0;
    return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
}
var wm = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Tc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    xm = {},
    rs = {};

function _e(e, t, n, r) {
    var i = r;
    typeof r == "string" && (i = function() { return this[r]() }), e && (rs[e] = i), t && (rs[t[0]] = function() { return dr(i.apply(this, arguments), t[1], t[2]) }), n && (rs[n] = function() { return this.localeData().ordinal(i.apply(this, arguments), e) })
}

function RR(e) { return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "") }

function TR(e) {
    var t = e.match(wm),
        n, r;
    for (n = 0, r = t.length; n < r; n++) rs[t[n]] ? t[n] = rs[t[n]] : t[n] = RR(t[n]);
    return function(i) {
        var o = "",
            s;
        for (s = 0; s < r; s++) o += fr(t[s]) ? t[s].call(i, e) : t[s];
        return o
    }
}

function Ac(e, t) { return e.isValid() ? (t = qx(t, e.localeData()), xm[t] = xm[t] || TR(t), xm[t](e)) : e.localeData().invalidDate() }

function qx(e, t) {
    var n = 5;

    function r(i) { return t.longDateFormat(i) || i }
    for (Tc.lastIndex = 0; n >= 0 && Tc.test(e);) e = e.replace(Tc, r), Tc.lastIndex = 0, n -= 1;
    return e
}
var AR = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };

function LR(e) {
    var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
    return t || !n ? t : (this._longDateFormat[e] = n.match(wm).map(function(r) { return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r }).join(""), this._longDateFormat[e])
}
var FR = "Invalid date";

function IR() { return this._invalidDate }
var NR = "%d",
    jR = /\d{1,2}/;

function zR(e) { return this._ordinal.replace("%d", e) }
var BR = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };

function WR(e, t, n, r) { var i = this._relativeTime[n]; return fr(i) ? i(e, t, n, r) : i.replace(/%d/i, e) }

function HR(e, t) { var n = this._relativeTime[e > 0 ? "future" : "past"]; return fr(n) ? n(t) : n.replace(/%s/i, t) }
var nl = {};

function qt(e, t) {
    var n = e.toLowerCase();
    nl[n] = nl[n + "s"] = nl[t] = e
}

function Bn(e) { return typeof e == "string" ? nl[e] || nl[e.toLowerCase()] : void 0 }

function bm(e) {
    var t = {},
        n, r;
    for (r in e) Ke(e, r) && (n = Bn(r), n && (t[n] = e[r]));
    return t
}
var Kx = {};

function Kt(e, t) { Kx[e] = t }

function YR(e) {
    var t = [],
        n;
    for (n in e) Ke(e, n) && t.push({ unit: n, priority: Kx[n] });
    return t.sort(function(r, i) { return r.priority - i.priority }), t
}

function Lc(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 }

function Wn(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

function ze(e) {
    var t = +e,
        n = 0;
    return t !== 0 && isFinite(t) && (n = Wn(t)), n
}

function is(e, t) { return function(n) { return n != null ? (Qx(this, e, n), oe.updateOffset(this, t), this) : Fc(this, e) } }

function Fc(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

function Qx(e, t, n) { e.isValid() && !isNaN(n) && (t === "FullYear" && Lc(e.year()) && e.month() === 1 && e.date() === 29 ? (n = ze(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Hc(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) }

function $R(e) { return e = Bn(e), fr(this[e]) ? this[e]() : this }

function VR(e, t) {
    if (typeof e == "object") {
        e = bm(e);
        var n = YR(e),
            r, i = n.length;
        for (r = 0; r < i; r++) this[n[r].unit](e[n[r].unit])
    } else if (e = Bn(e), fr(this[e])) return this[e](t);
    return this
}
var Zx = /\d/,
    _n = /\d\d/,
    Jx = /\d{3}/,
    _m = /\d{4}/,
    Ic = /[+-]?\d{6}/,
    ft = /\d\d?/,
    eb = /\d\d\d\d?/,
    tb = /\d\d\d\d\d\d?/,
    Nc = /\d{1,3}/,
    Sm = /\d{1,4}/,
    jc = /[+-]?\d{1,6}/,
    os = /\d+/,
    zc = /[+-]?\d+/,
    UR = /Z|[+-]\d\d:?\d\d/gi,
    Bc = /Z|[+-]\d\d(?::?\d\d)?/gi,
    GR = /[+-]?\d+(\.\d{1,3})?/,
    rl = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Wc;
Wc = {};

function ce(e, t, n) { Wc[e] = fr(t) ? t : function(r, i) { return r && n ? n : t } }

function XR(e, t) { return Ke(Wc, e) ? Wc[e](t._strict, t._locale) : new RegExp(qR(e)) }

function qR(e) { return Sn(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, n, r, i, o) { return n || r || i || o })) }

function Sn(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
var km = {};

function rt(e, t) {
    var n, r = t,
        i;
    for (typeof e == "string" && (e = [e]), Or(t) && (r = function(o, s) { s[t] = ze(o) }), i = e.length, n = 0; n < i; n++) km[e[n]] = r
}

function il(e, t) { rt(e, function(n, r, i, o) { i._w = i._w || {}, t(n, i._w, i, o) }) }

function KR(e, t, n) { t != null && Ke(km, e) && km[e](t, n._a, n, e) }
var Qt = 0,
    Dr = 1,
    hr = 2,
    Pt = 3,
    Kn = 4,
    Pr = 5,
    eo = 6,
    QR = 7,
    ZR = 8;

function JR(e, t) { return (e % t + t) % t }
var kt;
Array.prototype.indexOf ? kt = Array.prototype.indexOf : kt = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
        if (this[t] === e) return t;
    return -1
};

function Hc(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n = JR(t, 12); return e += (t - n) / 12, n === 1 ? Lc(e) ? 29 : 28 : 31 - n % 7 % 2 }
_e("M", ["MM", 2], "Mo", function() { return this.month() + 1 });
_e("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) });
_e("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) });
qt("month", "M");
Kt("month", 8);
ce("M", ft);
ce("MM", ft, _n);
ce("MMM", function(e, t) { return t.monthsShortRegex(e) });
ce("MMMM", function(e, t) { return t.monthsRegex(e) });
rt(["M", "MM"], function(e, t) { t[Dr] = ze(e) - 1 });
rt(["MMM", "MMMM"], function(e, t, n, r) {
    var i = n._locale.monthsParse(e, r, n._strict);
    i != null ? t[Dr] = i : Ie(n).invalidMonth = e
});
var eT = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    nb = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    rb = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    tT = rl,
    nT = rl;

function rT(e, t) { return e ? Xn(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || rb).test(t) ? "format" : "standalone"][e.month()] : Xn(this._months) ? this._months : this._months.standalone }

function iT(e, t) { return e ? Xn(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[rb.test(t) ? "format" : "standalone"][e.month()] : Xn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }

function oT(e, t, n) {
    var r, i, o, s = e.toLocaleLowerCase();
    if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) o = cr([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
    return n ? t === "MMM" ? (i = kt.call(this._shortMonthsParse, s), i !== -1 ? i : null) : (i = kt.call(this._longMonthsParse, s), i !== -1 ? i : null) : t === "MMM" ? (i = kt.call(this._shortMonthsParse, s), i !== -1 ? i : (i = kt.call(this._longMonthsParse, s), i !== -1 ? i : null)) : (i = kt.call(this._longMonthsParse, s), i !== -1 ? i : (i = kt.call(this._shortMonthsParse, s), i !== -1 ? i : null))
}

function sT(e, t, n) { var r, i, o; if (this._monthsParseExact) return oT.call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) { if (i = cr([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), !n && !this._monthsParse[r] && (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e)) return r; if (n && t === "MMM" && this._shortMonthsParse[r].test(e)) return r; if (!n && this._monthsParse[r].test(e)) return r } }

function ib(e, t) {
    var n;
    if (!e.isValid()) return e;
    if (typeof t == "string") {
        if (/^\d+$/.test(t)) t = ze(t);
        else if (t = e.localeData().monthsParse(t), !Or(t)) return e
    }
    return n = Math.min(e.date(), Hc(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
}

function ob(e) { return e != null ? (ib(this, e), oe.updateOffset(this, !0), this) : Fc(this, "Month") }

function aT() { return Hc(this.year(), this.month()) }

function lT(e) { return this._monthsParseExact ? (Ke(this, "_monthsRegex") || sb.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ke(this, "_monthsShortRegex") || (this._monthsShortRegex = tT), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }

function uT(e) { return this._monthsParseExact ? (Ke(this, "_monthsRegex") || sb.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Ke(this, "_monthsRegex") || (this._monthsRegex = nT), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }

function sb() {
    function e(s, a) { return a.length - s.length }
    var t = [],
        n = [],
        r = [],
        i, o;
    for (i = 0; i < 12; i++) o = cr([2e3, i]), t.push(this.monthsShort(o, "")), n.push(this.months(o, "")), r.push(this.months(o, "")), r.push(this.monthsShort(o, ""));
    for (t.sort(e), n.sort(e), r.sort(e), i = 0; i < 12; i++) t[i] = Sn(t[i]), n[i] = Sn(n[i]);
    for (i = 0; i < 24; i++) r[i] = Sn(r[i]);
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
}
_e("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? dr(e, 4) : "+" + e });
_e(0, ["YY", 2], 0, function() { return this.year() % 100 });
_e(0, ["YYYY", 4], 0, "year");
_e(0, ["YYYYY", 5], 0, "year");
_e(0, ["YYYYYY", 6, !0], 0, "year");
qt("year", "y");
Kt("year", 1);
ce("Y", zc);
ce("YY", ft, _n);
ce("YYYY", Sm, _m);
ce("YYYYY", jc, Ic);
ce("YYYYYY", jc, Ic);
rt(["YYYYY", "YYYYYY"], Qt);
rt("YYYY", function(e, t) { t[Qt] = e.length === 2 ? oe.parseTwoDigitYear(e) : ze(e) });
rt("YY", function(e, t) { t[Qt] = oe.parseTwoDigitYear(e) });
rt("Y", function(e, t) { t[Qt] = parseInt(e, 10) });

function ol(e) { return Lc(e) ? 366 : 365 }
oe.parseTwoDigitYear = function(e) { return ze(e) + (ze(e) > 68 ? 1900 : 2e3) };
var ab = is("FullYear", !0);

function cT() { return Lc(this.year()) }

function fT(e, t, n, r, i, o, s) { var a; return e < 100 && e >= 0 ? (a = new Date(e + 400, t, n, r, i, o, s), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, t, n, r, i, o, s), a }

function sl(e) { var t, n; return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t }

function Yc(e, t, n) {
    var r = 7 + t - n,
        i = (7 + sl(e, 0, r).getUTCDay() - t) % 7;
    return -i + r - 1
}

function lb(e, t, n, r, i) {
    var o = (7 + n - r) % 7,
        s = Yc(e, r, i),
        a = 1 + 7 * (t - 1) + o + s,
        l, u;
    return a <= 0 ? (l = e - 1, u = ol(l) + a) : a > ol(e) ? (l = e + 1, u = a - ol(e)) : (l = e, u = a), { year: l, dayOfYear: u }
}

function al(e, t, n) {
    var r = Yc(e.year(), t, n),
        i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1,
        o, s;
    return i < 1 ? (s = e.year() - 1, o = i + Rr(s, t, n)) : i > Rr(e.year(), t, n) ? (o = i - Rr(e.year(), t, n), s = e.year() + 1) : (s = e.year(), o = i), { week: o, year: s }
}

function Rr(e, t, n) {
    var r = Yc(e, t, n),
        i = Yc(e + 1, t, n);
    return (ol(e) - r + i) / 7
}
_e("w", ["ww", 2], "wo", "week");
_e("W", ["WW", 2], "Wo", "isoWeek");
qt("week", "w");
qt("isoWeek", "W");
Kt("week", 5);
Kt("isoWeek", 5);
ce("w", ft);
ce("ww", ft, _n);
ce("W", ft);
ce("WW", ft, _n);
il(["w", "ww", "W", "WW"], function(e, t, n, r) { t[r.substr(0, 1)] = ze(e) });

function dT(e) { return al(e, this._week.dow, this._week.doy).week }
var hT = { dow: 0, doy: 6 };

function pT() { return this._week.dow }

function mT() { return this._week.doy }

function gT(e) { var t = this.localeData().week(this); return e == null ? t : this.add((e - t) * 7, "d") }

function yT(e) { var t = al(this, 1, 4).week; return e == null ? t : this.add((e - t) * 7, "d") }
_e("d", 0, "do", "day");
_e("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) });
_e("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) });
_e("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) });
_e("e", 0, 0, "weekday");
_e("E", 0, 0, "isoWeekday");
qt("day", "d");
qt("weekday", "e");
qt("isoWeekday", "E");
Kt("day", 11);
Kt("weekday", 11);
Kt("isoWeekday", 11);
ce("d", ft);
ce("e", ft);
ce("E", ft);
ce("dd", function(e, t) { return t.weekdaysMinRegex(e) });
ce("ddd", function(e, t) { return t.weekdaysShortRegex(e) });
ce("dddd", function(e, t) { return t.weekdaysRegex(e) });
il(["dd", "ddd", "dddd"], function(e, t, n, r) {
    var i = n._locale.weekdaysParse(e, r, n._strict);
    i != null ? t.d = i : Ie(n).invalidWeekday = e
});
il(["d", "e", "E"], function(e, t, n, r) { t[r] = ze(e) });

function vT(e, t) { return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10) }

function wT(e, t) { return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }

function Cm(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) }
var xT = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    ub = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    bT = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    _T = rl,
    ST = rl,
    kT = rl;

function CT(e, t) { var n = Xn(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return e === !0 ? Cm(n, this._week.dow) : e ? n[e.day()] : n }

function MT(e) { return e === !0 ? Cm(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }

function ET(e) { return e === !0 ? Cm(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }

function OT(e, t, n) {
    var r, i, o, s = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = cr([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
    return n ? t === "dddd" ? (i = kt.call(this._weekdaysParse, s), i !== -1 ? i : null) : t === "ddd" ? (i = kt.call(this._shortWeekdaysParse, s), i !== -1 ? i : null) : (i = kt.call(this._minWeekdaysParse, s), i !== -1 ? i : null) : t === "dddd" ? (i = kt.call(this._weekdaysParse, s), i !== -1 || (i = kt.call(this._shortWeekdaysParse, s), i !== -1) ? i : (i = kt.call(this._minWeekdaysParse, s), i !== -1 ? i : null)) : t === "ddd" ? (i = kt.call(this._shortWeekdaysParse, s), i !== -1 || (i = kt.call(this._weekdaysParse, s), i !== -1) ? i : (i = kt.call(this._minWeekdaysParse, s), i !== -1 ? i : null)) : (i = kt.call(this._minWeekdaysParse, s), i !== -1 || (i = kt.call(this._weekdaysParse, s), i !== -1) ? i : (i = kt.call(this._shortWeekdaysParse, s), i !== -1 ? i : null))
}

function DT(e, t, n) { var r, i, o; if (this._weekdaysParseExact) return OT.call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) { if (i = cr([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e)) return r; if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e)) return r; if (n && t === "dd" && this._minWeekdaysParse[r].test(e)) return r; if (!n && this._weekdaysParse[r].test(e)) return r } }

function PT(e) { if (!this.isValid()) return e != null ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return e != null ? (e = vT(e, this.localeData()), this.add(e - t, "d")) : t }

function RT(e) { if (!this.isValid()) return e != null ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return e == null ? t : this.add(e - t, "d") }

function TT(e) { if (!this.isValid()) return e != null ? this : NaN; if (e != null) { var t = wT(e, this.localeData()); return this.day(this.day() % 7 ? t : t - 7) } else return this.day() || 7 }

function AT(e) { return this._weekdaysParseExact ? (Ke(this, "_weekdaysRegex") || Mm.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ke(this, "_weekdaysRegex") || (this._weekdaysRegex = _T), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }

function LT(e) { return this._weekdaysParseExact ? (Ke(this, "_weekdaysRegex") || Mm.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ke(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ST), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }

function FT(e) { return this._weekdaysParseExact ? (Ke(this, "_weekdaysRegex") || Mm.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ke(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = kT), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }

function Mm() {
    function e(c, d) { return d.length - c.length }
    var t = [],
        n = [],
        r = [],
        i = [],
        o, s, a, l, u;
    for (o = 0; o < 7; o++) s = cr([2e3, 1]).day(o), a = Sn(this.weekdaysMin(s, "")), l = Sn(this.weekdaysShort(s, "")), u = Sn(this.weekdays(s, "")), t.push(a), n.push(l), r.push(u), i.push(a), i.push(l), i.push(u);
    t.sort(e), n.sort(e), r.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
}

function Em() { return this.hours() % 12 || 12 }

function IT() { return this.hours() || 24 }
_e("H", ["HH", 2], 0, "hour");
_e("h", ["hh", 2], 0, Em);
_e("k", ["kk", 2], 0, IT);
_e("hmm", 0, 0, function() { return "" + Em.apply(this) + dr(this.minutes(), 2) });
_e("hmmss", 0, 0, function() { return "" + Em.apply(this) + dr(this.minutes(), 2) + dr(this.seconds(), 2) });
_e("Hmm", 0, 0, function() { return "" + this.hours() + dr(this.minutes(), 2) });
_e("Hmmss", 0, 0, function() { return "" + this.hours() + dr(this.minutes(), 2) + dr(this.seconds(), 2) });

function cb(e, t) { _e(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }
cb("a", !0);
cb("A", !1);
qt("hour", "h");
Kt("hour", 13);

function fb(e, t) { return t._meridiemParse }
ce("a", fb);
ce("A", fb);
ce("H", ft);
ce("h", ft);
ce("k", ft);
ce("HH", ft, _n);
ce("hh", ft, _n);
ce("kk", ft, _n);
ce("hmm", eb);
ce("hmmss", tb);
ce("Hmm", eb);
ce("Hmmss", tb);
rt(["H", "HH"], Pt);
rt(["k", "kk"], function(e, t, n) {
    var r = ze(e);
    t[Pt] = r === 24 ? 0 : r
});
rt(["a", "A"], function(e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e });
rt(["h", "hh"], function(e, t, n) { t[Pt] = ze(e), Ie(n).bigHour = !0 });
rt("hmm", function(e, t, n) {
    var r = e.length - 2;
    t[Pt] = ze(e.substr(0, r)), t[Kn] = ze(e.substr(r)), Ie(n).bigHour = !0
});
rt("hmmss", function(e, t, n) {
    var r = e.length - 4,
        i = e.length - 2;
    t[Pt] = ze(e.substr(0, r)), t[Kn] = ze(e.substr(r, 2)), t[Pr] = ze(e.substr(i)), Ie(n).bigHour = !0
});
rt("Hmm", function(e, t, n) {
    var r = e.length - 2;
    t[Pt] = ze(e.substr(0, r)), t[Kn] = ze(e.substr(r))
});
rt("Hmmss", function(e, t, n) {
    var r = e.length - 4,
        i = e.length - 2;
    t[Pt] = ze(e.substr(0, r)), t[Kn] = ze(e.substr(r, 2)), t[Pr] = ze(e.substr(i))
});

function NT(e) { return (e + "").toLowerCase().charAt(0) === "p" }
var jT = /[ap]\.?m?\.?/i,
    zT = is("Hours", !0);

function BT(e, t, n) { return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }
var db = { calendar: DR, longDateFormat: AR, invalidDate: FR, ordinal: NR, dayOfMonthOrdinalParse: jR, relativeTime: BR, months: eT, monthsShort: nb, week: hT, weekdays: xT, weekdaysMin: bT, weekdaysShort: ub, meridiemParse: jT },
    mt = {},
    ll = {},
    ul;

function WT(e, t) {
    var n, r = Math.min(e.length, t.length);
    for (n = 0; n < r; n += 1)
        if (e[n] !== t[n]) return n;
    return r
}

function hb(e) { return e && e.toLowerCase().replace("_", "-") }

function HT(e) {
    for (var t = 0, n, r, i, o; t < e.length;) {
        for (o = hb(e[t]).split("-"), n = o.length, r = hb(e[t + 1]), r = r ? r.split("-") : null; n > 0;) {
            if (i = $c(o.slice(0, n).join("-")), i) return i;
            if (r && r.length >= n && WT(o, r) >= n - 1) break;
            n--
        }
        t++
    }
    return ul
}

function YT(e) { return e.match("^[^/\\\\]*$") != null }

function $c(e) {
    var t = null,
        n;
    if (mt[e] === void 0 && !0 && module && module.exports && YT(e)) try { t = ul._abbr, n = LS, n("./locale/" + e), di(t) } catch { mt[e] = null }
    return mt[e]
}

function di(e, t) { var n; return e && (hn(t) ? n = Tr(e) : n = Om(e, t), n ? ul = n : typeof console != "undefined" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ul._abbr }

function Om(e, t) {
    if (t !== null) {
        var n, r = db;
        if (t.abbr = e, mt[e] != null) Xx("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = mt[e]._config;
        else if (t.parentLocale != null)
            if (mt[t.parentLocale] != null) r = mt[t.parentLocale]._config;
            else if (n = $c(t.parentLocale), n != null) r = n._config;
        else return ll[t.parentLocale] || (ll[t.parentLocale] = []), ll[t.parentLocale].push({ name: e, config: t }), null;
        return mt[e] = new ym(gm(r, t)), ll[e] && ll[e].forEach(function(i) { Om(i.name, i.config) }), di(e), mt[e]
    } else return delete mt[e], null
}

function $T(e, t) {
    if (t != null) {
        var n, r, i = db;
        mt[e] != null && mt[e].parentLocale != null ? mt[e].set(gm(mt[e]._config, t)) : (r = $c(e), r != null && (i = r._config), t = gm(i, t), r == null && (t.abbr = e), n = new ym(t), n.parentLocale = mt[e], mt[e] = n), di(e)
    } else mt[e] != null && (mt[e].parentLocale != null ? (mt[e] = mt[e].parentLocale, e === di() && di(e)) : mt[e] != null && delete mt[e]);
    return mt[e]
}

function Tr(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ul;
    if (!Xn(e)) {
        if (t = $c(e), t) return t;
        e = [e]
    }
    return HT(e)
}

function VT() { return vm(mt) }

function Dm(e) { var t, n = e._a; return n && Ie(e).overflow === -2 && (t = n[Dr] < 0 || n[Dr] > 11 ? Dr : n[hr] < 1 || n[hr] > Hc(n[Qt], n[Dr]) ? hr : n[Pt] < 0 || n[Pt] > 24 || n[Pt] === 24 && (n[Kn] !== 0 || n[Pr] !== 0 || n[eo] !== 0) ? Pt : n[Kn] < 0 || n[Kn] > 59 ? Kn : n[Pr] < 0 || n[Pr] > 59 ? Pr : n[eo] < 0 || n[eo] > 999 ? eo : -1, Ie(e)._overflowDayOfYear && (t < Qt || t > hr) && (t = hr), Ie(e)._overflowWeeks && t === -1 && (t = QR), Ie(e)._overflowWeekday && t === -1 && (t = ZR), Ie(e).overflow = t), e }
var UT = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    GT = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    XT = /Z|[+-]\d\d(?::?\d\d)?/,
    Vc = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, !1],
        ["YYYY", /\d{4}/, !1]
    ],
    Pm = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
    ],
    qT = /^\/?Date\((-?\d+)/i,
    KT = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    QT = { UT: 0, GMT: 0, EDT: -4 * 60, EST: -5 * 60, CDT: -5 * 60, CST: -6 * 60, MDT: -6 * 60, MST: -7 * 60, PDT: -7 * 60, PST: -8 * 60 };

function pb(e) {
    var t, n, r = e._i,
        i = UT.exec(r) || GT.exec(r),
        o, s, a, l, u = Vc.length,
        c = Pm.length;
    if (i) {
        for (Ie(e).iso = !0, t = 0, n = u; t < n; t++)
            if (Vc[t][1].exec(i[1])) { s = Vc[t][0], o = Vc[t][2] !== !1; break }
        if (s == null) { e._isValid = !1; return }
        if (i[3]) {
            for (t = 0, n = c; t < n; t++)
                if (Pm[t][1].exec(i[3])) { a = (i[2] || " ") + Pm[t][0]; break }
            if (a == null) { e._isValid = !1; return }
        }
        if (!o && a != null) { e._isValid = !1; return }
        if (i[4])
            if (XT.exec(i[4])) l = "Z";
            else { e._isValid = !1; return }
        e._f = s + (a || "") + (l || ""), Tm(e)
    } else e._isValid = !1
}

function ZT(e, t, n, r, i, o) { var s = [JT(e), nb.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)]; return o && s.push(parseInt(o, 10)), s }

function JT(e) { var t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t }

function e5(e) { return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }

function t5(e, t, n) {
    if (e) {
        var r = ub.indexOf(e),
            i = new Date(t[0], t[1], t[2]).getDay();
        if (r !== i) return Ie(n).weekdayMismatch = !0, n._isValid = !1, !1
    }
    return !0
}

function n5(e, t, n) {
    if (e) return QT[e];
    if (t) return 0;
    var r = parseInt(n, 10),
        i = r % 100,
        o = (r - i) / 100;
    return o * 60 + i
}

function mb(e) {
    var t = KT.exec(e5(e._i)),
        n;
    if (t) {
        if (n = ZT(t[4], t[3], t[2], t[5], t[6], t[7]), !t5(t[1], n, e)) return;
        e._a = n, e._tzm = n5(t[8], t[9], t[10]), e._d = sl.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Ie(e).rfc2822 = !0
    } else e._isValid = !1
}

function r5(e) {
    var t = qT.exec(e._i);
    if (t !== null) { e._d = new Date(+t[1]); return }
    if (pb(e), e._isValid === !1) delete e._isValid;
    else return;
    if (mb(e), e._isValid === !1) delete e._isValid;
    else return;
    e._strict ? e._isValid = !1 : oe.createFromInputFallback(e)
}
oe.createFromInputFallback = zn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) });

function ss(e, t, n) { return e != null ? e : t != null ? t : n }

function i5(e) { var t = new Date(oe.now()); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()] }

function Rm(e) {
    var t, n, r = [],
        i, o, s;
    if (!e._d) {
        for (i = i5(e), e._w && e._a[hr] == null && e._a[Dr] == null && o5(e), e._dayOfYear != null && (s = ss(e._a[Qt], i[Qt]), (e._dayOfYear > ol(s) || e._dayOfYear === 0) && (Ie(e)._overflowDayOfYear = !0), n = sl(s, 0, e._dayOfYear), e._a[Dr] = n.getUTCMonth(), e._a[hr] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = r[t] = i[t];
        for (; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        e._a[Pt] === 24 && e._a[Kn] === 0 && e._a[Pr] === 0 && e._a[eo] === 0 && (e._nextDay = !0, e._a[Pt] = 0), e._d = (e._useUTC ? sl : fT).apply(null, r), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Pt] = 24), e._w && typeof e._w.d != "undefined" && e._w.d !== o && (Ie(e).weekdayMismatch = !0)
    }
}

function o5(e) {
    var t, n, r, i, o, s, a, l, u;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (o = 1, s = 4, n = ss(t.GG, e._a[Qt], al(dt(), 1, 4).year), r = ss(t.W, 1), i = ss(t.E, 1), (i < 1 || i > 7) && (l = !0)) : (o = e._locale._week.dow, s = e._locale._week.doy, u = al(dt(), o, s), n = ss(t.gg, e._a[Qt], u.year), r = ss(t.w, u.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (l = !0)) : t.e != null ? (i = t.e + o, (t.e < 0 || t.e > 6) && (l = !0)) : i = o), r < 1 || r > Rr(n, o, s) ? Ie(e)._overflowWeeks = !0 : l != null ? Ie(e)._overflowWeekday = !0 : (a = lb(n, r, i, o, s), e._a[Qt] = a.year, e._dayOfYear = a.dayOfYear)
}
oe.ISO_8601 = function() {};
oe.RFC_2822 = function() {};

function Tm(e) {
    if (e._f === oe.ISO_8601) { pb(e); return }
    if (e._f === oe.RFC_2822) { mb(e); return }
    e._a = [], Ie(e).empty = !0;
    var t = "" + e._i,
        n, r, i, o, s, a = t.length,
        l = 0,
        u, c;
    for (i = qx(e._f, e._locale).match(wm) || [], c = i.length, n = 0; n < c; n++) o = i[n], r = (t.match(XR(o, e)) || [])[0], r && (s = t.substr(0, t.indexOf(r)), s.length > 0 && Ie(e).unusedInput.push(s), t = t.slice(t.indexOf(r) + r.length), l += r.length), rs[o] ? (r ? Ie(e).empty = !1 : Ie(e).unusedTokens.push(o), KR(o, r, e)) : e._strict && !r && Ie(e).unusedTokens.push(o);
    Ie(e).charsLeftOver = a - l, t.length > 0 && Ie(e).unusedInput.push(t), e._a[Pt] <= 12 && Ie(e).bigHour === !0 && e._a[Pt] > 0 && (Ie(e).bigHour = void 0), Ie(e).parsedDateParts = e._a.slice(0), Ie(e).meridiem = e._meridiem, e._a[Pt] = s5(e._locale, e._a[Pt], e._meridiem), u = Ie(e).era, u !== null && (e._a[Qt] = e._locale.erasConvertYear(u, e._a[Qt])), Rm(e), Dm(e)
}

function s5(e, t, n) { var r; return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t) }

function a5(e) {
    var t, n, r, i, o, s, a = !1,
        l = e._f.length;
    if (l === 0) { Ie(e).invalidFormat = !0, e._d = new Date(NaN); return }
    for (i = 0; i < l; i++) o = 0, s = !1, t = mm({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], Tm(t), hm(t) && (s = !0), o += Ie(t).charsLeftOver, o += Ie(t).unusedTokens.length * 10, Ie(t).score = o, a ? o < r && (r = o, n = t) : (r == null || o < r || s) && (r = o, n = t, s && (a = !0));
    fi(e, n || t)
}

function l5(e) {
    if (!e._d) {
        var t = bm(e._i),
            n = t.day === void 0 ? t.date : t.day;
        e._a = $x([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function(r) { return r && parseInt(r, 10) }), Rm(e)
    }
}

function u5(e) { var t = new tl(Dm(gb(e))); return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t }

function gb(e) {
    var t = e._i,
        n = e._f;
    return e._locale = e._locale || Tr(e._l), t === null || n === void 0 && t === "" ? Rc({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), qn(t) ? new tl(Dm(t)) : (el(t) ? e._d = t : Xn(n) ? a5(e) : n ? Tm(e) : c5(e), hm(e) || (e._d = null), e))
}

function c5(e) {
    var t = e._i;
    hn(t) ? e._d = new Date(oe.now()) : el(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? r5(e) : Xn(t) ? (e._a = $x(t.slice(0), function(n) { return parseInt(n, 10) }), Rm(e)) : Ji(t) ? l5(e) : Or(t) ? e._d = new Date(t) : oe.createFromInputFallback(e)
}

function yb(e, t, n, r, i) { var o = {}; return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Ji(e) && fm(e) || Xn(e) && e.length === 0) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = i, o._l = n, o._i = e, o._f = t, o._strict = r, u5(o) }

function dt(e, t, n, r) { return yb(e, t, n, r, !1) }
var f5 = zn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = dt.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : Rc() }),
    d5 = zn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = dt.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : Rc() });

function vb(e, t) { var n, r; if (t.length === 1 && Xn(t[0]) && (t = t[0]), !t.length) return dt(); for (n = t[0], r = 1; r < t.length; ++r)(!t[r].isValid() || t[r][e](n)) && (n = t[r]); return n }

function h5() { var e = [].slice.call(arguments, 0); return vb("isBefore", e) }

function p5() { var e = [].slice.call(arguments, 0); return vb("isAfter", e) }
var m5 = function() { return Date.now ? Date.now() : +new Date },
    cl = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

function g5(e) {
    var t, n = !1,
        r, i = cl.length;
    for (t in e)
        if (Ke(e, t) && !(kt.call(cl, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1;
    for (r = 0; r < i; ++r)
        if (e[cl[r]]) {
            if (n) return !1;
            parseFloat(e[cl[r]]) !== ze(e[cl[r]]) && (n = !0)
        }
    return !0
}

function y5() { return this._isValid }

function v5() { return Qn(NaN) }

function Uc(e) {
    var t = bm(e),
        n = t.year || 0,
        r = t.quarter || 0,
        i = t.month || 0,
        o = t.week || t.isoWeek || 0,
        s = t.day || 0,
        a = t.hour || 0,
        l = t.minute || 0,
        u = t.second || 0,
        c = t.millisecond || 0;
    this._isValid = g5(t), this._milliseconds = +c + u * 1e3 + l * 6e4 + a * 1e3 * 60 * 60, this._days = +s + o * 7, this._months = +i + r * 3 + n * 12, this._data = {}, this._locale = Tr(), this._bubble()
}

function Gc(e) { return e instanceof Uc }

function Am(e) { return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e) }

function w5(e, t, n) {
    var r = Math.min(e.length, t.length),
        i = Math.abs(e.length - t.length),
        o = 0,
        s;
    for (s = 0; s < r; s++)(n && e[s] !== t[s] || !n && ze(e[s]) !== ze(t[s])) && o++;
    return o + i
}

function wb(e, t) {
    _e(e, 0, 0, function() {
        var n = this.utcOffset(),
            r = "+";
        return n < 0 && (n = -n, r = "-"), r + dr(~~(n / 60), 2) + t + dr(~~n % 60, 2)
    })
}
wb("Z", ":");
wb("ZZ", "");
ce("Z", Bc);
ce("ZZ", Bc);
rt(["Z", "ZZ"], function(e, t, n) { n._useUTC = !0, n._tzm = Lm(Bc, e) });
var x5 = /([\+\-]|\d\d)/gi;

function Lm(e, t) {
    var n = (t || "").match(e),
        r, i, o;
    return n === null ? null : (r = n[n.length - 1] || [], i = (r + "").match(x5) || ["-", 0, 0], o = +(i[1] * 60) + ze(i[2]), o === 0 ? 0 : i[0] === "+" ? o : -o)
}

function Fm(e, t) { var n, r; return t._isUTC ? (n = t.clone(), r = (qn(e) || el(e) ? e.valueOf() : dt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), oe.updateOffset(n, !1), n) : dt(e).local() }

function Im(e) { return -Math.round(e._d.getTimezoneOffset()) }
oe.updateOffset = function() {};

function b5(e, t, n) {
    var r = this._offset || 0,
        i;
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) { if (typeof e == "string") { if (e = Lm(Bc, e), e === null) return this } else Math.abs(e) < 16 && !n && (e = e * 60); return !this._isUTC && t && (i = Im(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? Sb(this, Qn(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, oe.updateOffset(this, !0), this._changeInProgress = null)), this } else return this._isUTC ? r : Im(this)
}

function _5(e, t) { return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }

function S5(e) { return this.utcOffset(0, e) }

function k5(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Im(this), "m")), this }

function C5() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
        var e = Lm(UR, this._i);
        e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
}

function M5(e) { return this.isValid() ? (e = e ? dt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) : !1 }

function E5() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }

function O5() {
    if (!hn(this._isDSTShifted)) return this._isDSTShifted;
    var e = {},
        t;
    return mm(e, this), e = gb(e), e._a ? (t = e._isUTC ? cr(e._a) : dt(e._a), this._isDSTShifted = this.isValid() && w5(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
}

function D5() { return this.isValid() ? !this._isUTC : !1 }

function P5() { return this.isValid() ? this._isUTC : !1 }

function xb() { return this.isValid() ? this._isUTC && this._offset === 0 : !1 }
var R5 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    T5 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function Qn(e, t) {
    var n = e,
        r = null,
        i, o, s;
    return Gc(e) ? n = { ms: e._milliseconds, d: e._days, M: e._months } : Or(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = R5.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = { y: 0, d: ze(r[hr]) * i, h: ze(r[Pt]) * i, m: ze(r[Kn]) * i, s: ze(r[Pr]) * i, ms: ze(Am(r[eo] * 1e3)) * i }) : (r = T5.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = { y: to(r[2], i), M: to(r[3], i), w: to(r[4], i), d: to(r[5], i), h: to(r[6], i), m: to(r[7], i), s: to(r[8], i) }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (s = A5(dt(n.from), dt(n.to)), n = {}, n.ms = s.milliseconds, n.M = s.months), o = new Uc(n), Gc(e) && Ke(e, "_locale") && (o._locale = e._locale), Gc(e) && Ke(e, "_isValid") && (o._isValid = e._isValid), o
}
Qn.fn = Uc.prototype;
Qn.invalid = v5;

function to(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t }

function bb(e, t) { var n = {}; return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

function A5(e, t) { var n; return e.isValid() && t.isValid() ? (t = Fm(t, e), e.isBefore(t) ? n = bb(e, t) : (n = bb(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 } }

function _b(e, t) { return function(n, r) { var i, o; return r !== null && !isNaN(+r) && (Xx(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = r, r = o), i = Qn(n, r), Sb(this, i, e), this } }

function Sb(e, t, n, r) {
    var i = t._milliseconds,
        o = Am(t._days),
        s = Am(t._months);
    !e.isValid() || (r = r == null ? !0 : r, s && ib(e, Fc(e, "Month") + s * n), o && Qx(e, "Date", Fc(e, "Date") + o * n), i && e._d.setTime(e._d.valueOf() + i * n), r && oe.updateOffset(e, o || s))
}
var L5 = _b(1, "add"),
    F5 = _b(-1, "subtract");

function kb(e) { return typeof e == "string" || e instanceof String }

function I5(e) { return qn(e) || el(e) || kb(e) || Or(e) || j5(e) || N5(e) || e === null || e === void 0 }

function N5(e) {
    var t = Ji(e) && !fm(e),
        n = !1,
        r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
        i, o, s = r.length;
    for (i = 0; i < s; i += 1) o = r[i], n = n || Ke(e, o);
    return t && n
}

function j5(e) {
    var t = Xn(e),
        n = !1;
    return t && (n = e.filter(function(r) { return !Or(r) && kb(e) }).length === 0), t && n
}

function z5(e) {
    var t = Ji(e) && !fm(e),
        n = !1,
        r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
        i, o;
    for (i = 0; i < r.length; i += 1) o = r[i], n = n || Ke(e, o);
    return t && n
}

function B5(e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }

function W5(e, t) {
    arguments.length === 1 && (arguments[0] ? I5(arguments[0]) ? (e = arguments[0], t = void 0) : z5(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var n = e || dt(),
        r = Fm(n, this).startOf("day"),
        i = oe.calendarFormat(this, r) || "sameElse",
        o = t && (fr(t[i]) ? t[i].call(this, n) : t[i]);
    return this.format(o || this.localeData().calendar(i, this, dt(n)))
}

function H5() { return new tl(this) }

function Y5(e, t) { var n = qn(e) ? e : dt(e); return this.isValid() && n.isValid() ? (t = Bn(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1 }

function $5(e, t) { var n = qn(e) ? e : dt(e); return this.isValid() && n.isValid() ? (t = Bn(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1 }

function V5(e, t, n, r) {
    var i = qn(e) ? e : dt(e),
        o = qn(t) ? t : dt(t);
    return this.isValid() && i.isValid() && o.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(i, n) : !this.isBefore(i, n)) && (r[1] === ")" ? this.isBefore(o, n) : !this.isAfter(o, n))) : !1
}

function U5(e, t) {
    var n = qn(e) ? e : dt(e),
        r;
    return this.isValid() && n.isValid() ? (t = Bn(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1
}

function G5(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }

function X5(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }

function q5(e, t, n) {
    var r, i, o;
    if (!this.isValid()) return NaN;
    if (r = Fm(e, this), !r.isValid()) return NaN;
    switch (i = (r.utcOffset() - this.utcOffset()) * 6e4, t = Bn(t), t) {
        case "year":
            o = Xc(this, r) / 12;
            break;
        case "month":
            o = Xc(this, r);
            break;
        case "quarter":
            o = Xc(this, r) / 3;
            break;
        case "second":
            o = (this - r) / 1e3;
            break;
        case "minute":
            o = (this - r) / 6e4;
            break;
        case "hour":
            o = (this - r) / 36e5;
            break;
        case "day":
            o = (this - r - i) / 864e5;
            break;
        case "week":
            o = (this - r - i) / 6048e5;
            break;
        default:
            o = this - r
    }
    return n ? o : Wn(o)
}

function Xc(e, t) {
    if (e.date() < t.date()) return -Xc(t, e);
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()),
        r = e.clone().add(n, "months"),
        i, o;
    return t - r < 0 ? (i = e.clone().add(n - 1, "months"), o = (t - r) / (r - i)) : (i = e.clone().add(n + 1, "months"), o = (t - r) / (i - r)), -(n + o) || 0
}
oe.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
oe.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

function K5() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }

function Q5(e) {
    if (!this.isValid()) return null;
    var t = e !== !0,
        n = t ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999 ? Ac(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : fr(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ac(n, "Z")) : Ac(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}

function Z5() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
        t = "",
        n, r, i, o;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", o = t + '[")]', this.format(n + r + i + o)
}

function J5(e) { e || (e = this.isUtc() ? oe.defaultFormatUtc : oe.defaultFormat); var t = Ac(this, e); return this.localeData().postformat(t) }

function eA(e, t) { return this.isValid() && (qn(e) && e.isValid() || dt(e).isValid()) ? Qn({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }

function tA(e) { return this.from(dt(), e) }

function nA(e, t) { return this.isValid() && (qn(e) && e.isValid() || dt(e).isValid()) ? Qn({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }

function rA(e) { return this.to(dt(), e) }

function Cb(e) { var t; return e === void 0 ? this._locale._abbr : (t = Tr(e), t != null && (this._locale = t), this) }
var Mb = zn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return e === void 0 ? this.localeData() : this.locale(e) });

function Eb() { return this._locale }
var qc = 1e3,
    as = 60 * qc,
    Kc = 60 * as,
    Ob = (365 * 400 + 97) * 24 * Kc;

function ls(e, t) { return (e % t + t) % t }

function Db(e, t, n) { return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Ob : new Date(e, t, n).valueOf() }

function Pb(e, t, n) { return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Ob : Date.UTC(e, t, n) }

function iA(e) {
    var t, n;
    if (e = Bn(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
    switch (n = this._isUTC ? Pb : Db, e) {
        case "year":
            t = n(this.year(), 0, 1);
            break;
        case "quarter":
            t = n(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            t = n(this.year(), this.month(), 1);
            break;
        case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            t = n(this.year(), this.month(), this.date());
            break;
        case "hour":
            t = this._d.valueOf(), t -= ls(t + (this._isUTC ? 0 : this.utcOffset() * as), Kc);
            break;
        case "minute":
            t = this._d.valueOf(), t -= ls(t, as);
            break;
        case "second":
            t = this._d.valueOf(), t -= ls(t, qc);
            break
    }
    return this._d.setTime(t), oe.updateOffset(this, !0), this
}

function oA(e) {
    var t, n;
    if (e = Bn(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
    switch (n = this._isUTC ? Pb : Db, e) {
        case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            t = this._d.valueOf(), t += Kc - ls(t + (this._isUTC ? 0 : this.utcOffset() * as), Kc) - 1;
            break;
        case "minute":
            t = this._d.valueOf(), t += as - ls(t, as) - 1;
            break;
        case "second":
            t = this._d.valueOf(), t += qc - ls(t, qc) - 1;
            break
    }
    return this._d.setTime(t), oe.updateOffset(this, !0), this
}

function sA() { return this._d.valueOf() - (this._offset || 0) * 6e4 }

function aA() { return Math.floor(this.valueOf() / 1e3) }

function lA() { return new Date(this.valueOf()) }

function uA() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }

function cA() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }

function fA() { return this.isValid() ? this.toISOString() : null }

function dA() { return hm(this) }

function hA() { return fi({}, Ie(this)) }

function pA() { return Ie(this).overflow }

function mA() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }
_e("N", 0, 0, "eraAbbr");
_e("NN", 0, 0, "eraAbbr");
_e("NNN", 0, 0, "eraAbbr");
_e("NNNN", 0, 0, "eraName");
_e("NNNNN", 0, 0, "eraNarrow");
_e("y", ["y", 1], "yo", "eraYear");
_e("y", ["yy", 2], 0, "eraYear");
_e("y", ["yyy", 3], 0, "eraYear");
_e("y", ["yyyy", 4], 0, "eraYear");
ce("N", Nm);
ce("NN", Nm);
ce("NNN", Nm);
ce("NNNN", MA);
ce("NNNNN", EA);
rt(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, n, r) {
    var i = n._locale.erasParse(e, r, n._strict);
    i ? Ie(n).era = i : Ie(n).invalidEra = e
});
ce("y", os);
ce("yy", os);
ce("yyy", os);
ce("yyyy", os);
ce("yo", OA);
rt(["y", "yy", "yyy", "yyyy"], Qt);
rt(["yo"], function(e, t, n, r) {
    var i;
    n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Qt] = n._locale.eraYearOrdinalParse(e, i) : t[Qt] = parseInt(e, 10)
});

function gA(e, t) {
    var n, r, i, o = this._eras || Tr("en")._eras;
    for (n = 0, r = o.length; n < r; ++n) {
        switch (typeof o[n].since) {
            case "string":
                i = oe(o[n].since).startOf("day"), o[n].since = i.valueOf();
                break
        }
        switch (typeof o[n].until) {
            case "undefined":
                o[n].until = 1 / 0;
                break;
            case "string":
                i = oe(o[n].until).startOf("day").valueOf(), o[n].until = i.valueOf();
                break
        }
    }
    return o
}

function yA(e, t, n) {
    var r, i, o = this.eras(),
        s, a, l;
    for (e = e.toUpperCase(), r = 0, i = o.length; r < i; ++r)
        if (s = o[r].name.toUpperCase(), a = o[r].abbr.toUpperCase(), l = o[r].narrow.toUpperCase(), n) switch (t) {
            case "N":
            case "NN":
            case "NNN":
                if (a === e) return o[r];
                break;
            case "NNNN":
                if (s === e) return o[r];
                break;
            case "NNNNN":
                if (l === e) return o[r];
                break
        } else if ([s, a, l].indexOf(e) >= 0) return o[r]
}

function vA(e, t) { var n = e.since <= e.until ? 1 : -1; return t === void 0 ? oe(e.since).year() : oe(e.since).year() + (t - e.offset) * n }

function wA() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
        if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return r[e].name;
    return ""
}

function xA() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
        if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return r[e].narrow;
    return ""
}

function bA() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
        if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return r[e].abbr;
    return ""
}

function _A() {
    var e, t, n, r, i = this.localeData().eras();
    for (e = 0, t = i.length; e < t; ++e)
        if (n = i[e].since <= i[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[e].since <= r && r <= i[e].until || i[e].until <= r && r <= i[e].since) return (this.year() - oe(i[e].since).year()) * n + i[e].offset;
    return this.year()
}

function SA(e) { return Ke(this, "_erasNameRegex") || jm.call(this), e ? this._erasNameRegex : this._erasRegex }

function kA(e) { return Ke(this, "_erasAbbrRegex") || jm.call(this), e ? this._erasAbbrRegex : this._erasRegex }

function CA(e) { return Ke(this, "_erasNarrowRegex") || jm.call(this), e ? this._erasNarrowRegex : this._erasRegex }

function Nm(e, t) { return t.erasAbbrRegex(e) }

function MA(e, t) { return t.erasNameRegex(e) }

function EA(e, t) { return t.erasNarrowRegex(e) }

function OA(e, t) { return t._eraYearOrdinalRegex || os }

function jm() {
    var e = [],
        t = [],
        n = [],
        r = [],
        i, o, s = this.eras();
    for (i = 0, o = s.length; i < o; ++i) t.push(Sn(s[i].name)), e.push(Sn(s[i].abbr)), n.push(Sn(s[i].narrow)), r.push(Sn(s[i].name)), r.push(Sn(s[i].abbr)), r.push(Sn(s[i].narrow));
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i")
}
_e(0, ["gg", 2], 0, function() { return this.weekYear() % 100 });
_e(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 });

function Qc(e, t) { _e(0, [e, e.length], 0, t) }
Qc("gggg", "weekYear");
Qc("ggggg", "weekYear");
Qc("GGGG", "isoWeekYear");
Qc("GGGGG", "isoWeekYear");
qt("weekYear", "gg");
qt("isoWeekYear", "GG");
Kt("weekYear", 1);
Kt("isoWeekYear", 1);
ce("G", zc);
ce("g", zc);
ce("GG", ft, _n);
ce("gg", ft, _n);
ce("GGGG", Sm, _m);
ce("gggg", Sm, _m);
ce("GGGGG", jc, Ic);
ce("ggggg", jc, Ic);
il(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) { t[r.substr(0, 2)] = ze(e) });
il(["gg", "GG"], function(e, t, n, r) { t[r] = oe.parseTwoDigitYear(e) });

function DA(e) { return Rb.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }

function PA(e) { return Rb.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }

function RA() { return Rr(this.year(), 1, 4) }

function TA() { return Rr(this.isoWeekYear(), 1, 4) }

function AA() { var e = this.localeData()._week; return Rr(this.year(), e.dow, e.doy) }

function LA() { var e = this.localeData()._week; return Rr(this.weekYear(), e.dow, e.doy) }

function Rb(e, t, n, r, i) { var o; return e == null ? al(this, r, i).year : (o = Rr(e, r, i), t > o && (t = o), FA.call(this, e, t, n, r, i)) }

function FA(e, t, n, r, i) {
    var o = lb(e, t, n, r, i),
        s = sl(o.year, 0, o.dayOfYear);
    return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
}
_e("Q", 0, "Qo", "quarter");
qt("quarter", "Q");
Kt("quarter", 7);
ce("Q", Zx);
rt("Q", function(e, t) { t[Dr] = (ze(e) - 1) * 3 });

function IA(e) { return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3) }
_e("D", ["DD", 2], "Do", "date");
qt("date", "D");
Kt("date", 9);
ce("D", ft);
ce("DD", ft, _n);
ce("Do", function(e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient });
rt(["D", "DD"], hr);
rt("Do", function(e, t) { t[hr] = ze(e.match(ft)[0]) });
var Tb = is("Date", !0);
_e("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
qt("dayOfYear", "DDD");
Kt("dayOfYear", 4);
ce("DDD", Nc);
ce("DDDD", Jx);
rt(["DDD", "DDDD"], function(e, t, n) { n._dayOfYear = ze(e) });

function NA(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return e == null ? t : this.add(e - t, "d") }
_e("m", ["mm", 2], 0, "minute");
qt("minute", "m");
Kt("minute", 14);
ce("m", ft);
ce("mm", ft, _n);
rt(["m", "mm"], Kn);
var jA = is("Minutes", !1);
_e("s", ["ss", 2], 0, "second");
qt("second", "s");
Kt("second", 15);
ce("s", ft);
ce("ss", ft, _n);
rt(["s", "ss"], Pr);
var zA = is("Seconds", !1);
_e("S", 0, 0, function() { return ~~(this.millisecond() / 100) });
_e(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) });
_e(0, ["SSS", 3], 0, "millisecond");
_e(0, ["SSSS", 4], 0, function() { return this.millisecond() * 10 });
_e(0, ["SSSSS", 5], 0, function() { return this.millisecond() * 100 });
_e(0, ["SSSSSS", 6], 0, function() { return this.millisecond() * 1e3 });
_e(0, ["SSSSSSS", 7], 0, function() { return this.millisecond() * 1e4 });
_e(0, ["SSSSSSSS", 8], 0, function() { return this.millisecond() * 1e5 });
_e(0, ["SSSSSSSSS", 9], 0, function() { return this.millisecond() * 1e6 });
qt("millisecond", "ms");
Kt("millisecond", 16);
ce("S", Nc, Zx);
ce("SS", Nc, _n);
ce("SSS", Nc, Jx);
var hi, Ab;
for (hi = "SSSS"; hi.length <= 9; hi += "S") ce(hi, os);

function BA(e, t) { t[eo] = ze(("0." + e) * 1e3) }
for (hi = "S"; hi.length <= 9; hi += "S") rt(hi, BA);
Ab = is("Milliseconds", !1);
_e("z", 0, 0, "zoneAbbr");
_e("zz", 0, 0, "zoneName");

function WA() { return this._isUTC ? "UTC" : "" }

function HA() { return this._isUTC ? "Coordinated Universal Time" : "" }
var K = tl.prototype;
K.add = L5;
K.calendar = W5;
K.clone = H5;
K.diff = q5;
K.endOf = oA;
K.format = J5;
K.from = eA;
K.fromNow = tA;
K.to = nA;
K.toNow = rA;
K.get = $R;
K.invalidAt = pA;
K.isAfter = Y5;
K.isBefore = $5;
K.isBetween = V5;
K.isSame = U5;
K.isSameOrAfter = G5;
K.isSameOrBefore = X5;
K.isValid = dA;
K.lang = Mb;
K.locale = Cb;
K.localeData = Eb;
K.max = d5;
K.min = f5;
K.parsingFlags = hA;
K.set = VR;
K.startOf = iA;
K.subtract = F5;
K.toArray = uA;
K.toObject = cA;
K.toDate = lA;
K.toISOString = Q5;
K.inspect = Z5;
typeof Symbol != "undefined" && Symbol.for != null && (K[Symbol.for("nodejs.util.inspect.custom")] = function() { return "Moment<" + this.format() + ">" });
K.toJSON = fA;
K.toString = K5;
K.unix = aA;
K.valueOf = sA;
K.creationData = mA;
K.eraName = wA;
K.eraNarrow = xA;
K.eraAbbr = bA;
K.eraYear = _A;
K.year = ab;
K.isLeapYear = cT;
K.weekYear = DA;
K.isoWeekYear = PA;
K.quarter = K.quarters = IA;
K.month = ob;
K.daysInMonth = aT;
K.week = K.weeks = gT;
K.isoWeek = K.isoWeeks = yT;
K.weeksInYear = AA;
K.weeksInWeekYear = LA;
K.isoWeeksInYear = RA;
K.isoWeeksInISOWeekYear = TA;
K.date = Tb;
K.day = K.days = PT;
K.weekday = RT;
K.isoWeekday = TT;
K.dayOfYear = NA;
K.hour = K.hours = zT;
K.minute = K.minutes = jA;
K.second = K.seconds = zA;
K.millisecond = K.milliseconds = Ab;
K.utcOffset = b5;
K.utc = S5;
K.local = k5;
K.parseZone = C5;
K.hasAlignedHourOffset = M5;
K.isDST = E5;
K.isLocal = D5;
K.isUtcOffset = P5;
K.isUtc = xb;
K.isUTC = xb;
K.zoneAbbr = WA;
K.zoneName = HA;
K.dates = zn("dates accessor is deprecated. Use date instead.", Tb);
K.months = zn("months accessor is deprecated. Use month instead", ob);
K.years = zn("years accessor is deprecated. Use year instead", ab);
K.zone = zn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", _5);
K.isDSTShifted = zn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", O5);

function YA(e) { return dt(e * 1e3) }

function $A() { return dt.apply(null, arguments).parseZone() }

function Lb(e) { return e }
var Qe = ym.prototype;
Qe.calendar = PR;
Qe.longDateFormat = LR;
Qe.invalidDate = IR;
Qe.ordinal = zR;
Qe.preparse = Lb;
Qe.postformat = Lb;
Qe.relativeTime = WR;
Qe.pastFuture = HR;
Qe.set = OR;
Qe.eras = gA;
Qe.erasParse = yA;
Qe.erasConvertYear = vA;
Qe.erasAbbrRegex = kA;
Qe.erasNameRegex = SA;
Qe.erasNarrowRegex = CA;
Qe.months = rT;
Qe.monthsShort = iT;
Qe.monthsParse = sT;
Qe.monthsRegex = uT;
Qe.monthsShortRegex = lT;
Qe.week = dT;
Qe.firstDayOfYear = mT;
Qe.firstDayOfWeek = pT;
Qe.weekdays = CT;
Qe.weekdaysMin = ET;
Qe.weekdaysShort = MT;
Qe.weekdaysParse = DT;
Qe.weekdaysRegex = AT;
Qe.weekdaysShortRegex = LT;
Qe.weekdaysMinRegex = FT;
Qe.isPM = NT;
Qe.meridiem = BT;

function Zc(e, t, n, r) {
    var i = Tr(),
        o = cr().set(r, t);
    return i[n](o, e)
}

function Fb(e, t, n) { if (Or(e) && (t = e, e = void 0), e = e || "", t != null) return Zc(e, t, n, "month"); var r, i = []; for (r = 0; r < 12; r++) i[r] = Zc(e, r, n, "month"); return i }

function zm(e, t, n, r) {
    typeof e == "boolean" ? (Or(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Or(t) && (n = t, t = void 0), t = t || "");
    var i = Tr(),
        o = e ? i._week.dow : 0,
        s, a = [];
    if (n != null) return Zc(t, (n + o) % 7, r, "day");
    for (s = 0; s < 7; s++) a[s] = Zc(t, (s + o) % 7, r, "day");
    return a
}

function VA(e, t) { return Fb(e, t, "months") }

function UA(e, t) { return Fb(e, t, "monthsShort") }

function GA(e, t, n) { return zm(e, t, n, "weekdays") }

function XA(e, t, n) { return zm(e, t, n, "weekdaysShort") }

function qA(e, t, n) { return zm(e, t, n, "weekdaysMin") }
di("en", {
    eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
        var t = e % 10,
            n = ze(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
        return e + n
    }
});
oe.lang = zn("moment.lang is deprecated. Use moment.locale instead.", di);
oe.langData = zn("moment.langData is deprecated. Use moment.localeData instead.", Tr);
var Ar = Math.abs;

function KA() { var e = this._data; return this._milliseconds = Ar(this._milliseconds), this._days = Ar(this._days), this._months = Ar(this._months), e.milliseconds = Ar(e.milliseconds), e.seconds = Ar(e.seconds), e.minutes = Ar(e.minutes), e.hours = Ar(e.hours), e.months = Ar(e.months), e.years = Ar(e.years), this }

function Ib(e, t, n, r) { var i = Qn(t, n); return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble() }

function QA(e, t) { return Ib(this, e, t, 1) }

function ZA(e, t) { return Ib(this, e, t, -1) }

function Nb(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

function JA() {
    var e = this._milliseconds,
        t = this._days,
        n = this._months,
        r = this._data,
        i, o, s, a, l;
    return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Nb(Bm(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, i = Wn(e / 1e3), r.seconds = i % 60, o = Wn(i / 60), r.minutes = o % 60, s = Wn(o / 60), r.hours = s % 24, t += Wn(s / 24), l = Wn(jb(t)), n += l, t -= Nb(Bm(l)), a = Wn(n / 12), n %= 12, r.days = t, r.months = n, r.years = a, this
}

function jb(e) { return e * 4800 / 146097 }

function Bm(e) { return e * 146097 / 4800 }

function e3(e) {
    if (!this.isValid()) return NaN;
    var t, n, r = this._milliseconds;
    if (e = Bn(e), e === "month" || e === "quarter" || e === "year") switch (t = this._days + r / 864e5, n = this._months + jb(t), e) {
        case "month":
            return n;
        case "quarter":
            return n / 3;
        case "year":
            return n / 12
    } else switch (t = this._days + Math.round(Bm(this._months)), e) {
        case "week":
            return t / 7 + r / 6048e5;
        case "day":
            return t + r / 864e5;
        case "hour":
            return t * 24 + r / 36e5;
        case "minute":
            return t * 1440 + r / 6e4;
        case "second":
            return t * 86400 + r / 1e3;
        case "millisecond":
            return Math.floor(t * 864e5) + r;
        default:
            throw new Error("Unknown unit " + e)
    }
}

function t3() { return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ze(this._months / 12) * 31536e6 : NaN }

function Lr(e) { return function() { return this.as(e) } }
var n3 = Lr("ms"),
    r3 = Lr("s"),
    i3 = Lr("m"),
    o3 = Lr("h"),
    s3 = Lr("d"),
    a3 = Lr("w"),
    l3 = Lr("M"),
    u3 = Lr("Q"),
    c3 = Lr("y");

function f3() { return Qn(this) }

function d3(e) { return e = Bn(e), this.isValid() ? this[e + "s"]() : NaN }

function no(e) { return function() { return this.isValid() ? this._data[e] : NaN } }
var h3 = no("milliseconds"),
    p3 = no("seconds"),
    m3 = no("minutes"),
    g3 = no("hours"),
    y3 = no("days"),
    v3 = no("months"),
    w3 = no("years");

function x3() { return Wn(this.days() / 7) }
var Fr = Math.round,
    us = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };

function b3(e, t, n, r, i) { return i.relativeTime(t || 1, !!n, e, r) }

function _3(e, t, n, r) {
    var i = Qn(e).abs(),
        o = Fr(i.as("s")),
        s = Fr(i.as("m")),
        a = Fr(i.as("h")),
        l = Fr(i.as("d")),
        u = Fr(i.as("M")),
        c = Fr(i.as("w")),
        d = Fr(i.as("y")),
        h = o <= n.ss && ["s", o] || o < n.s && ["ss", o] || s <= 1 && ["m"] || s < n.m && ["mm", s] || a <= 1 && ["h"] || a < n.h && ["hh", a] || l <= 1 && ["d"] || l < n.d && ["dd", l];
    return n.w != null && (h = h || c <= 1 && ["w"] || c < n.w && ["ww", c]), h = h || u <= 1 && ["M"] || u < n.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d], h[2] = t, h[3] = +e > 0, h[4] = r, b3.apply(null, h)
}

function S3(e) { return e === void 0 ? Fr : typeof e == "function" ? (Fr = e, !0) : !1 }

function k3(e, t) { return us[e] === void 0 ? !1 : t === void 0 ? us[e] : (us[e] = t, e === "s" && (us.ss = t - 1), !0) }

function C3(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var n = !1,
        r = us,
        i, o;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, us, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), i = this.localeData(), o = _3(this, !n, r, i), n && (o = i.pastFuture(+this, o)), i.postformat(o)
}
var Wm = Math.abs;

function cs(e) { return (e > 0) - (e < 0) || +e }

function Jc() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e = Wm(this._milliseconds) / 1e3,
        t = Wm(this._days),
        n = Wm(this._months),
        r, i, o, s, a = this.asSeconds(),
        l, u, c, d;
    return a ? (r = Wn(e / 60), i = Wn(r / 60), e %= 60, r %= 60, o = Wn(n / 12), n %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = a < 0 ? "-" : "", u = cs(this._months) !== cs(a) ? "-" : "", c = cs(this._days) !== cs(a) ? "-" : "", d = cs(this._milliseconds) !== cs(a) ? "-" : "", l + "P" + (o ? u + o + "Y" : "") + (n ? u + n + "M" : "") + (t ? c + t + "D" : "") + (i || r || e ? "T" : "") + (i ? d + i + "H" : "") + (r ? d + r + "M" : "") + (e ? d + s + "S" : "")) : "P0D"
}
var Ue = Uc.prototype;
Ue.isValid = y5;
Ue.abs = KA;
Ue.add = QA;
Ue.subtract = ZA;
Ue.as = e3;
Ue.asMilliseconds = n3;
Ue.asSeconds = r3;
Ue.asMinutes = i3;
Ue.asHours = o3;
Ue.asDays = s3;
Ue.asWeeks = a3;
Ue.asMonths = l3;
Ue.asQuarters = u3;
Ue.asYears = c3;
Ue.valueOf = t3;
Ue._bubble = JA;
Ue.clone = f3;
Ue.get = d3;
Ue.milliseconds = h3;
Ue.seconds = p3;
Ue.minutes = m3;
Ue.hours = g3;
Ue.days = y3;
Ue.weeks = x3;
Ue.months = v3;
Ue.years = w3;
Ue.humanize = C3;
Ue.toISOString = Jc;
Ue.toString = Jc;
Ue.toJSON = Jc;
Ue.locale = Cb;
Ue.localeData = Eb;
Ue.toIsoString = zn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Jc);
Ue.lang = Mb;
_e("X", 0, 0, "unix");
_e("x", 0, 0, "valueOf");
ce("x", zc);
ce("X", GR);
rt("X", function(e, t, n) { n._d = new Date(parseFloat(e) * 1e3) });
rt("x", function(e, t, n) { n._d = new Date(ze(e)) }); //! moment.js
oe.version = "2.29.3";
MR(dt);
oe.fn = K;
oe.min = h5;
oe.max = p5;
oe.now = m5;
oe.utc = cr;
oe.unix = YA;
oe.months = VA;
oe.isDate = el;
oe.locale = di;
oe.invalid = Rc;
oe.duration = Qn;
oe.isMoment = qn;
oe.weekdays = GA;
oe.parseZone = $A;
oe.localeData = Tr;
oe.isDuration = Gc;
oe.monthsShort = UA;
oe.weekdaysMin = qA;
oe.defineLocale = Om;
oe.updateLocale = $T;
oe.locales = VT;
oe.weekdaysShort = XA;
oe.normalizeUnits = Bn;
oe.relativeTimeRounding = S3;
oe.relativeTimeThreshold = k3;
oe.calendarFormat = B5;
oe.prototype = K;
oe.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" };
/*!
 * chartjs-adapter-moment v1.0.0
 * https://www.chartjs.org
 * (c) 2021 chartjs-adapter-moment Contributors
 * Released under the MIT license
 */
const M3 = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
nw._date.override(typeof oe == "function" ? { _id: "moment", formats: function() { return M3 }, parse: function(e, t) { return typeof e == "string" && typeof t == "string" ? e = oe(e, t) : e instanceof oe || (e = oe(e)), e.isValid() ? e.valueOf() : null }, format: function(e, t) { return oe(e).format(t) }, add: function(e, t, n) { return oe(e).add(t, n).valueOf() }, diff: function(e, t, n) { return oe(e).diff(oe(t), n) }, startOf: function(e, t, n) { return e = oe(e), t === "isoWeek" ? (n = Math.trunc(Math.min(Math.max(0, n), 6)), e.isoWeekday(n).startOf("day").valueOf()) : e.startOf(t).valueOf() }, endOf: function(e, t) { return oe(e).endOf(t).valueOf() } } : {});
var Hm = { exports: {} },
    zb = function(t, n) { return function() { for (var i = new Array(arguments.length), o = 0; o < i.length; o++) i[o] = arguments[o]; return t.apply(n, i) } },
    E3 = zb,
    Ym = Object.prototype.toString,
    $m = function(e) { return function(t) { var n = Ym.call(t); return e[n] || (e[n] = n.slice(8, -1).toLowerCase()) } }(Object.create(null));

function ro(e) {
    return e = e.toLowerCase(),
        function(n) { return $m(n) === e }
}

function Vm(e) { return Array.isArray(e) }

function ef(e) { return typeof e == "undefined" }

function O3(e) { return e !== null && !ef(e) && e.constructor !== null && !ef(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e) }
var Bb = ro("ArrayBuffer");

function D3(e) { var t; return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Bb(e.buffer), t }

function P3(e) { return typeof e == "string" }

function R3(e) { return typeof e == "number" }

function Wb(e) { return e !== null && typeof e == "object" }

function tf(e) { if ($m(e) !== "object") return !1; var t = Object.getPrototypeOf(e); return t === null || t === Object.prototype }
var T3 = ro("Date"),
    A3 = ro("File"),
    L3 = ro("Blob"),
    F3 = ro("FileList");

function Um(e) { return Ym.call(e) === "[object Function]" }

function I3(e) { return Wb(e) && Um(e.pipe) }

function N3(e) { var t = "[object FormData]"; return e && (typeof FormData == "function" && e instanceof FormData || Ym.call(e) === t || Um(e.toString) && e.toString() === t) }
var j3 = ro("URLSearchParams");

function z3(e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") }

function B3() { return typeof navigator != "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window != "undefined" && typeof document != "undefined" }

function Gm(e, t) {
    if (!(e === null || typeof e == "undefined"))
        if (typeof e != "object" && (e = [e]), Vm(e))
            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
}

function Xm() {
    var e = {};

    function t(i, o) { tf(e[o]) && tf(i) ? e[o] = Xm(e[o], i) : tf(i) ? e[o] = Xm({}, i) : Vm(i) ? e[o] = i.slice() : e[o] = i }
    for (var n = 0, r = arguments.length; n < r; n++) Gm(arguments[n], t);
    return e
}

function W3(e, t, n) { return Gm(t, function(i, o) { n && typeof i == "function" ? e[o] = E3(i, n) : e[o] = i }), e }

function H3(e) { return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e }

function Y3(e, t, n, r) { e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, n && Object.assign(e.prototype, n) }

function $3(e, t, n) {
    var r, i, o, s = {};
    t = t || {};
    do {
        for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0;) o = r[i], s[o] || (t[o] = e[o], s[o] = !0);
        e = Object.getPrototypeOf(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}

function V3(e, t, n) { e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length; var r = e.indexOf(t, n); return r !== -1 && r === n }

function U3(e) { if (!e) return null; var t = e.length; if (ef(t)) return null; for (var n = new Array(t); t-- > 0;) n[t] = e[t]; return n }
var G3 = function(e) { return function(t) { return e && t instanceof e } }(typeof Uint8Array != "undefined" && Object.getPrototypeOf(Uint8Array)),
    Wt = { isArray: Vm, isArrayBuffer: Bb, isBuffer: O3, isFormData: N3, isArrayBufferView: D3, isString: P3, isNumber: R3, isObject: Wb, isPlainObject: tf, isUndefined: ef, isDate: T3, isFile: A3, isBlob: L3, isFunction: Um, isStream: I3, isURLSearchParams: j3, isStandardBrowserEnv: B3, forEach: Gm, merge: Xm, extend: W3, trim: z3, stripBOM: H3, inherits: Y3, toFlatObject: $3, kindOf: $m, kindOfTest: ro, endsWith: V3, toArray: U3, isTypedArray: G3, isFileList: F3 },
    fs = Wt;

function Hb(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
var Yb = function(t, n, r) {
        if (!n) return t;
        var i;
        if (r) i = r(n);
        else if (fs.isURLSearchParams(n)) i = n.toString();
        else {
            var o = [];
            fs.forEach(n, function(l, u) { l === null || typeof l == "undefined" || (fs.isArray(l) ? u = u + "[]" : l = [l], fs.forEach(l, function(d) { fs.isDate(d) ? d = d.toISOString() : fs.isObject(d) && (d = JSON.stringify(d)), o.push(Hb(u) + "=" + Hb(d)) })) }), i = o.join("&")
        }
        if (i) {
            var s = t.indexOf("#");
            s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i
        }
        return t
    },
    X3 = Wt;

function nf() { this.handlers = [] }
nf.prototype.use = function(t, n, r) { return this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1 };
nf.prototype.eject = function(t) { this.handlers[t] && (this.handlers[t] = null) };
nf.prototype.forEach = function(t) { X3.forEach(this.handlers, function(r) { r !== null && t(r) }) };
var q3 = nf,
    K3 = Wt,
    Q3 = function(t, n) { K3.forEach(t, function(i, o) { o !== n && o.toUpperCase() === n.toUpperCase() && (t[n] = i, delete t[o]) }) },
    $b = Wt;

function ds(e, t, n, r, i) { Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i) }
$b.inherits(ds, Error, { toJSON: function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code, status: this.response && this.response.status ? this.response.status : null } } });
var Vb = ds.prototype,
    Ub = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach(function(e) { Ub[e] = { value: e } });
Object.defineProperties(ds, Ub);
Object.defineProperty(Vb, "isAxiosError", { value: !0 });
ds.from = function(e, t, n, r, i, o) { var s = Object.create(Vb); return $b.toFlatObject(e, s, function(l) { return l !== Error.prototype }), ds.call(s, e.message, t, n, r, i), s.name = e.name, o && Object.assign(s, o), s };
var hs = ds,
    Gb = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    Zn = Wt;

function Z3(e, t) {
    t = t || new FormData;
    var n = [];

    function r(o) { return o === null ? "" : Zn.isDate(o) ? o.toISOString() : Zn.isArrayBuffer(o) || Zn.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o }

    function i(o, s) {
        if (Zn.isPlainObject(o) || Zn.isArray(o)) {
            if (n.indexOf(o) !== -1) throw Error("Circular reference detected in " + s);
            n.push(o), Zn.forEach(o, function(l, u) {
                if (!Zn.isUndefined(l)) {
                    var c = s ? s + "." + u : u,
                        d;
                    if (l && !s && typeof l == "object") {
                        if (Zn.endsWith(u, "{}")) l = JSON.stringify(l);
                        else if (Zn.endsWith(u, "[]") && (d = Zn.toArray(l))) { d.forEach(function(h) {!Zn.isUndefined(h) && t.append(c, r(h)) }); return }
                    }
                    i(l, c)
                }
            }), n.pop()
        } else t.append(s, r(o))
    }
    return i(e), t
}
var Xb = Z3,
    qm = hs,
    J3 = function(t, n, r) { var i = r.config.validateStatus;!r.status || !i || i(r.status) ? t(r) : n(new qm("Request failed with status code " + r.status, [qm.ERR_BAD_REQUEST, qm.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r)) },
    rf = Wt,
    eL = rf.isStandardBrowserEnv() ? function() {
        return {
            write: function(n, r, i, o, s, a) {
                var l = [];
                l.push(n + "=" + encodeURIComponent(r)), rf.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()), rf.isString(o) && l.push("path=" + o), rf.isString(s) && l.push("domain=" + s), a === !0 && l.push("secure"), document.cookie = l.join("; ")
            },
            read: function(n) { var r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")); return r ? decodeURIComponent(r[3]) : null },
            remove: function(n) { this.write(n, "", Date.now() - 864e5) }
        }
    }() : function() { return { write: function() {}, read: function() { return null }, remove: function() {} } }(),
    tL = function(t) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) },
    nL = function(t, n) { return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t },
    rL = tL,
    iL = nL,
    qb = function(t, n) { return t && !rL(n) ? iL(t, n) : n },
    Km = Wt,
    oL = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
    sL = function(t) {
        var n = {},
            r, i, o;
        return t && Km.forEach(t.split(`
`), function(a) {
            if (o = a.indexOf(":"), r = Km.trim(a.substr(0, o)).toLowerCase(), i = Km.trim(a.substr(o + 1)), r) {
                if (n[r] && oL.indexOf(r) >= 0) return;
                r === "set-cookie" ? n[r] = (n[r] ? n[r] : []).concat([i]) : n[r] = n[r] ? n[r] + ", " + i : i
            }
        }), n
    },
    Kb = Wt,
    aL = Kb.isStandardBrowserEnv() ? function() {
        var t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a"),
            r;

        function i(o) { var s = o; return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname } }
        return r = i(window.location.href),
            function(s) { var a = Kb.isString(s) ? i(s) : s; return a.protocol === r.protocol && a.host === r.host }
    }() : function() { return function() { return !0 } }(),
    Qm = hs,
    lL = Wt;

function Qb(e) { Qm.call(this, e == null ? "canceled" : e, Qm.ERR_CANCELED), this.name = "CanceledError" }
lL.inherits(Qb, Qm, { __CANCEL__: !0 });
var of = Qb,
    uL = function(t) { var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t); return n && n[1] || "" },
    fl = Wt,
    cL = J3,
    fL = eL,
    dL = Yb,
    hL = qb,
    pL = sL,
    mL = aL,
    gL = Gb,
    Ir = hs,
    yL = of,
    vL = uL,
    Zb = function(t) {
        return new Promise(function(r, i) {
            var o = t.data,
                s = t.headers,
                a = t.responseType,
                l;

            function u() { t.cancelToken && t.cancelToken.unsubscribe(l), t.signal && t.signal.removeEventListener("abort", l) }
            fl.isFormData(o) && fl.isStandardBrowserEnv() && delete s["Content-Type"];
            var c = new XMLHttpRequest;
            if (t.auth) {
                var d = t.auth.username || "",
                    h = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                s.Authorization = "Basic " + btoa(d + ":" + h)
            }
            var y = hL(t.baseURL, t.url);
            c.open(t.method.toUpperCase(), dL(y, t.params, t.paramsSerializer), !0), c.timeout = t.timeout;

            function w() {
                if (!!c) {
                    var m = "getAllResponseHeaders" in c ? pL(c.getAllResponseHeaders()) : null,
                        S = !a || a === "text" || a === "json" ? c.responseText : c.response,
                        k = { data: S, status: c.status, statusText: c.statusText, headers: m, config: t, request: c };
                    cL(function(P) { r(P), u() }, function(P) { i(P), u() }, k), c = null
                }
            }
            if ("onloadend" in c ? c.onloadend = w : c.onreadystatechange = function() {!c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(w) }, c.onabort = function() {!c || (i(new Ir("Request aborted", Ir.ECONNABORTED, t, c)), c = null) }, c.onerror = function() { i(new Ir("Network Error", Ir.ERR_NETWORK, t, c, c)), c = null }, c.ontimeout = function() {
                    var S = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                        k = t.transitional || gL;
                    t.timeoutErrorMessage && (S = t.timeoutErrorMessage), i(new Ir(S, k.clarifyTimeoutError ? Ir.ETIMEDOUT : Ir.ECONNABORTED, t, c)), c = null
                }, fl.isStandardBrowserEnv()) {
                var b = (t.withCredentials || mL(y)) && t.xsrfCookieName ? fL.read(t.xsrfCookieName) : void 0;
                b && (s[t.xsrfHeaderName] = b)
            }
            "setRequestHeader" in c && fl.forEach(s, function(S, k) { typeof o == "undefined" && k.toLowerCase() === "content-type" ? delete s[k] : c.setRequestHeader(k, S) }), fl.isUndefined(t.withCredentials) || (c.withCredentials = !!t.withCredentials), a && a !== "json" && (c.responseType = t.responseType), typeof t.onDownloadProgress == "function" && c.addEventListener("progress", t.onDownloadProgress), typeof t.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", t.onUploadProgress), (t.cancelToken || t.signal) && (l = function(m) {!c || (i(!m || m && m.type ? new yL : m), c.abort(), c = null) }, t.cancelToken && t.cancelToken.subscribe(l), t.signal && (t.signal.aborted ? l() : t.signal.addEventListener("abort", l))), o || (o = null);
            var g = vL(y);
            if (g && ["http", "https", "file"].indexOf(g) === -1) { i(new Ir("Unsupported protocol " + g + ":", Ir.ERR_BAD_REQUEST, t)); return }
            c.send(o)
        })
    },
    wL = null,
    Ft = Wt,
    Jb = Q3,
    e_ = hs,
    xL = Gb,
    bL = Xb,
    _L = { "Content-Type": "application/x-www-form-urlencoded" };

function t_(e, t) {!Ft.isUndefined(e) && Ft.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) }

function SL() { var e; return (typeof XMLHttpRequest != "undefined" || typeof process != "undefined" && Object.prototype.toString.call(process) === "[object process]") && (e = Zb), e }

function kL(e, t, n) {
    if (Ft.isString(e)) try { return (t || JSON.parse)(e), Ft.trim(e) } catch (r) { if (r.name !== "SyntaxError") throw r }
    return (n || JSON.stringify)(e)
}
var sf = {
    transitional: xL,
    adapter: SL(),
    transformRequest: [function(t, n) {
        if (Jb(n, "Accept"), Jb(n, "Content-Type"), Ft.isFormData(t) || Ft.isArrayBuffer(t) || Ft.isBuffer(t) || Ft.isStream(t) || Ft.isFile(t) || Ft.isBlob(t)) return t;
        if (Ft.isArrayBufferView(t)) return t.buffer;
        if (Ft.isURLSearchParams(t)) return t_(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
        var r = Ft.isObject(t),
            i = n && n["Content-Type"],
            o;
        if ((o = Ft.isFileList(t)) || r && i === "multipart/form-data") { var s = this.env && this.env.FormData; return bL(o ? { "files[]": t } : t, s && new s) } else if (r || i === "application/json") return t_(n, "application/json"), kL(t);
        return t
    }],
    transformResponse: [function(t) {
        var n = this.transitional || sf.transitional,
            r = n && n.silentJSONParsing,
            i = n && n.forcedJSONParsing,
            o = !r && this.responseType === "json";
        if (o || i && Ft.isString(t) && t.length) try { return JSON.parse(t) } catch (s) { if (o) throw s.name === "SyntaxError" ? e_.from(s, e_.ERR_BAD_RESPONSE, this, null, this.response) : s }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: wL },
    validateStatus: function(t) { return t >= 200 && t < 300 },
    headers: { common: { Accept: "application/json, text/plain, */*" } }
};
Ft.forEach(["delete", "get", "head"], function(t) { sf.headers[t] = {} });
Ft.forEach(["post", "put", "patch"], function(t) { sf.headers[t] = Ft.merge(_L) });
var Zm = sf,
    CL = Wt,
    ML = Zm,
    EL = function(t, n, r) { var i = this || ML; return CL.forEach(r, function(s) { t = s.call(i, t, n) }), t },
    n_ = function(t) { return !!(t && t.__CANCEL__) },
    r_ = Wt,
    Jm = EL,
    OL = n_,
    DL = Zm,
    PL = of;

function eg(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new PL }
var RL = function(t) { eg(t), t.headers = t.headers || {}, t.data = Jm.call(t, t.data, t.headers, t.transformRequest), t.headers = r_.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), r_.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(i) { delete t.headers[i] }); var n = t.adapter || DL.adapter; return n(t).then(function(i) { return eg(t), i.data = Jm.call(t, i.data, i.headers, t.transformResponse), i }, function(i) { return OL(i) || (eg(t), i && i.response && (i.response.data = Jm.call(t, i.response.data, i.response.headers, t.transformResponse))), Promise.reject(i) }) },
    kn = Wt,
    i_ = function(t, n) {
        n = n || {};
        var r = {};

        function i(c, d) { return kn.isPlainObject(c) && kn.isPlainObject(d) ? kn.merge(c, d) : kn.isPlainObject(d) ? kn.merge({}, d) : kn.isArray(d) ? d.slice() : d }

        function o(c) { if (kn.isUndefined(n[c])) { if (!kn.isUndefined(t[c])) return i(void 0, t[c]) } else return i(t[c], n[c]) }

        function s(c) { if (!kn.isUndefined(n[c])) return i(void 0, n[c]) }

        function a(c) { if (kn.isUndefined(n[c])) { if (!kn.isUndefined(t[c])) return i(void 0, t[c]) } else return i(void 0, n[c]) }

        function l(c) { if (c in n) return i(t[c], n[c]); if (c in t) return i(void 0, t[c]) }
        var u = { url: s, method: s, data: s, baseURL: a, transformRequest: a, transformResponse: a, paramsSerializer: a, timeout: a, timeoutMessage: a, withCredentials: a, adapter: a, responseType: a, xsrfCookieName: a, xsrfHeaderName: a, onUploadProgress: a, onDownloadProgress: a, decompress: a, maxContentLength: a, maxBodyLength: a, beforeRedirect: a, transport: a, httpAgent: a, httpsAgent: a, cancelToken: a, socketPath: a, responseEncoding: a, validateStatus: l };
        return kn.forEach(Object.keys(t).concat(Object.keys(n)), function(d) {
            var h = u[d] || o,
                y = h(d);
            kn.isUndefined(y) && h !== l || (r[d] = y)
        }), r
    },
    o_ = { version: "0.27.2" },
    TL = o_.version,
    pi = hs,
    tg = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) { tg[e] = function(r) { return typeof r === e || "a" + (t < 1 ? "n " : " ") + e } });
var s_ = {};
tg.transitional = function(t, n, r) {
    function i(o, s) { return "[Axios v" + TL + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "") }
    return function(o, s, a) { if (t === !1) throw new pi(i(s, " has been removed" + (n ? " in " + n : "")), pi.ERR_DEPRECATED); return n && !s_[s] && (s_[s] = !0, console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, s, a) : !0 }
};

function AL(e, t, n) {
    if (typeof e != "object") throw new pi("options must be an object", pi.ERR_BAD_OPTION_VALUE);
    for (var r = Object.keys(e), i = r.length; i-- > 0;) {
        var o = r[i],
            s = t[o];
        if (s) {
            var a = e[o],
                l = a === void 0 || s(a, o, e);
            if (l !== !0) throw new pi("option " + o + " must be " + l, pi.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new pi("Unknown option " + o, pi.ERR_BAD_OPTION)
    }
}
var LL = { assertOptions: AL, validators: tg },
    a_ = Wt,
    FL = Yb,
    l_ = q3,
    u_ = RL,
    af = i_,
    IL = qb,
    c_ = LL,
    ps = c_.validators;

function ms(e) { this.defaults = e, this.interceptors = { request: new l_, response: new l_ } }
ms.prototype.request = function(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = af(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
    var r = n.transitional;
    r !== void 0 && c_.assertOptions(r, { silentJSONParsing: ps.transitional(ps.boolean), forcedJSONParsing: ps.transitional(ps.boolean), clarifyTimeoutError: ps.transitional(ps.boolean) }, !1);
    var i = [],
        o = !0;
    this.interceptors.request.forEach(function(y) { typeof y.runWhen == "function" && y.runWhen(n) === !1 || (o = o && y.synchronous, i.unshift(y.fulfilled, y.rejected)) });
    var s = [];
    this.interceptors.response.forEach(function(y) { s.push(y.fulfilled, y.rejected) });
    var a;
    if (!o) { var l = [u_, void 0]; for (Array.prototype.unshift.apply(l, i), l = l.concat(s), a = Promise.resolve(n); l.length;) a = a.then(l.shift(), l.shift()); return a }
    for (var u = n; i.length;) {
        var c = i.shift(),
            d = i.shift();
        try { u = c(u) } catch (h) { d(h); break }
    }
    try { a = u_(u) } catch (h) { return Promise.reject(h) }
    for (; s.length;) a = a.then(s.shift(), s.shift());
    return a
};
ms.prototype.getUri = function(t) { t = af(this.defaults, t); var n = IL(t.baseURL, t.url); return FL(n, t.params, t.paramsSerializer) };
a_.forEach(["delete", "get", "head", "options"], function(t) { ms.prototype[t] = function(n, r) { return this.request(af(r || {}, { method: t, url: n, data: (r || {}).data })) } });
a_.forEach(["post", "put", "patch"], function(t) {
    function n(r) { return function(o, s, a) { return this.request(af(a || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: o, data: s })) } }
    ms.prototype[t] = n(), ms.prototype[t + "Form"] = n(!0)
});
var NL = ms,
    jL = of;

function gs(e) {
    if (typeof e != "function") throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function(i) { t = i });
    var n = this;
    this.promise.then(function(r) {
        if (!!n._listeners) {
            var i, o = n._listeners.length;
            for (i = 0; i < o; i++) n._listeners[i](r);
            n._listeners = null
        }
    }), this.promise.then = function(r) { var i, o = new Promise(function(s) { n.subscribe(s), i = s }).then(r); return o.cancel = function() { n.unsubscribe(i) }, o }, e(function(i) { n.reason || (n.reason = new jL(i), t(n.reason)) })
}
gs.prototype.throwIfRequested = function() { if (this.reason) throw this.reason };
gs.prototype.subscribe = function(t) {
    if (this.reason) { t(this.reason); return }
    this._listeners ? this._listeners.push(t) : this._listeners = [t]
};
gs.prototype.unsubscribe = function(t) {
    if (!!this._listeners) {
        var n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
};
gs.source = function() { var t, n = new gs(function(i) { t = i }); return { token: n, cancel: t } };
var zL = gs,
    BL = function(t) { return function(r) { return t.apply(null, r) } },
    WL = Wt,
    HL = function(t) { return WL.isObject(t) && t.isAxiosError === !0 },
    f_ = Wt,
    YL = zb,
    lf = NL,
    $L = i_,
    VL = Zm;

function d_(e) {
    var t = new lf(e),
        n = YL(lf.prototype.request, t);
    return f_.extend(n, lf.prototype, t), f_.extend(n, t), n.create = function(i) { return d_($L(e, i)) }, n
}
var pn = d_(VL);
pn.Axios = lf;
pn.CanceledError = of;
pn.CancelToken = zL;
pn.isCancel = n_;
pn.VERSION = o_.version;
pn.toFormData = Xb;
pn.AxiosError = hs;
pn.Cancel = pn.CanceledError;
pn.all = function(t) { return Promise.all(t) };
pn.spread = BL;
pn.isAxiosError = HL;
Hm.exports = pn;
Hm.exports.default = pn;
var cI = Hm.exports;
let UL = { data: "" },
    GL = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || UL,
    XL = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    qL = /\/\*[^]*?\*\/|  +/g,
    h_ = /\n+/g,
    mi = (e, t) => {
        let n = "",
            r = "",
            i = "";
        for (let o in e) {
            let s = e[o];
            o[0] == "@" ? o[1] == "i" ? n = o + " " + s + ";" : r += o[1] == "f" ? mi(s, o) : o + "{" + mi(s, o[1] == "k" ? "" : t) + "}" : typeof s == "object" ? r += mi(s, t ? t.replace(/([^,])+/g, a => o.replace(/(^:.*)|([^,])+/g, l => /&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l)) : o) : s != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), i += mi.p ? mi.p(o, s) : o + ":" + s + ";")
        }
        return n + (t && i ? t + "{" + i + "}" : i) + r
    },
    dl = {},
    p_ = e => { if (typeof e == "object") { let t = ""; for (let n in e) t += n + p_(e[n]); return t } return e },
    KL = (e, t, n, r, i) => {
        let o = p_(e),
            s = dl[o] || (dl[o] = (a => {
                let l = 0,
                    u = 11;
                for (; l < a.length;) u = 101 * u + a.charCodeAt(l++) >>> 0;
                return "go" + u
            })(o));
        if (!dl[s]) {
            let a = o !== e ? e : (l => { let u, c, d = [{}]; for (; u = XL.exec(l.replace(qL, ""));) u[4] ? d.shift() : u[3] ? (c = u[3].replace(h_, " ").trim(), d.unshift(d[0][c] = d[0][c] || {})) : d[0][u[1]] = u[2].replace(h_, " ").trim(); return d[0] })(e);
            dl[s] = mi(i ? {
                ["@keyframes " + s]: a
            } : a, n ? "" : "." + s)
        }
        return ((a, l, u) => { l.data.indexOf(a) == -1 && (l.data = u ? a + l.data : l.data + a) })(dl[s], t, r), s
    },
    QL = (e, t, n) => e.reduce((r, i, o) => {
        let s = t[o];
        if (s && s.call) {
            let a = s(n),
                l = a && a.props && a.props.className || /^go/.test(a) && a;
            s = l ? "." + l : a && typeof a == "object" ? a.props ? "" : mi(a, "") : a === !1 ? "" : a
        }
        return r + i + (s == null ? "" : s)
    }, "");

function uf(e) {
    let t = this || {},
        n = e.call ? e(t.p) : e;
    return KL(n.unshift ? n.raw ? QL(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {}) : n, GL(t.target), t.g, t.o, t.k)
}
let m_, ng, rg;
uf.bind({ g: 1 });
let Nr = uf.bind({ k: 1 });

function ZL(e, t, n, r) { mi.p = t, m_ = e, ng = n, rg = r }

function gi(e, t) {
    let n = this || {};
    return function() {
        let r = arguments;

        function i(o, s) {
            let a = Object.assign({}, o),
                l = a.className || i.className;
            n.p = Object.assign({ theme: ng && ng() }, a), n.o = / *go\d+/.test(l), a.className = uf.apply(n, r) + (l ? " " + l : ""), t && (a.ref = s);
            let u = e;
            return e[0] && (u = a.as || e, delete a.as), rg && u[0] && rg(a), m_(u, a)
        }
        return t ? t(i) : i
    }
}

function bt() { return bt = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, bt.apply(this, arguments) }

function Zt(e, t) { return t || (t = e.slice(0)), e.raw = t, e }
var JL = function(t) { return typeof t == "function" },
    cf = function(t, n) { return JL(t) ? t(n) : t },
    eF = function() { var e = 0; return function() { return (++e).toString() } }(),
    tF = function(t) {
        return function(n) {
            n && setTimeout(function() {
                var r = n.getBoundingClientRect();
                t(r)
            })
        }
    },
    g_ = function() {
        var e = void 0;
        return function() {
            if (e === void 0 && typeof window != "undefined") {
                var t = matchMedia("(prefers-reduced-motion: reduce)");
                e = !t || t.matches
            }
            return e
        }
    }(),
    nF = 20,
    It;
(function(e) { e[e.ADD_TOAST = 0] = "ADD_TOAST", e[e.UPDATE_TOAST = 1] = "UPDATE_TOAST", e[e.UPSERT_TOAST = 2] = "UPSERT_TOAST", e[e.DISMISS_TOAST = 3] = "DISMISS_TOAST", e[e.REMOVE_TOAST = 4] = "REMOVE_TOAST", e[e.START_PAUSE = 5] = "START_PAUSE", e[e.END_PAUSE = 6] = "END_PAUSE" })(It || (It = {}));
var ff = new Map,
    y_ = function(t) {
        if (!ff.has(t)) {
            var n = setTimeout(function() { ff.delete(t), io({ type: It.REMOVE_TOAST, toastId: t }) }, 1e3);
            ff.set(t, n)
        }
    },
    rF = function(t) {
        var n = ff.get(t);
        n && clearTimeout(n)
    },
    iF = function e(t, n) {
        switch (n.type) {
            case It.ADD_TOAST:
                return bt({}, t, { toasts: [n.toast].concat(t.toasts).slice(0, nF) });
            case It.UPDATE_TOAST:
                return n.toast.id && rF(n.toast.id), bt({}, t, { toasts: t.toasts.map(function(s) { return s.id === n.toast.id ? bt({}, s, n.toast) : s }) });
            case It.UPSERT_TOAST:
                var r = n.toast;
                return t.toasts.find(function(s) { return s.id === r.id }) ? e(t, { type: It.UPDATE_TOAST, toast: r }) : e(t, { type: It.ADD_TOAST, toast: r });
            case It.DISMISS_TOAST:
                var i = n.toastId;
                return i ? y_(i) : t.toasts.forEach(function(s) { y_(s.id) }), bt({}, t, { toasts: t.toasts.map(function(s) { return s.id === i || i === void 0 ? bt({}, s, { visible: !1 }) : s }) });
            case It.REMOVE_TOAST:
                return n.toastId === void 0 ? bt({}, t, { toasts: [] }) : bt({}, t, { toasts: t.toasts.filter(function(s) { return s.id !== n.toastId }) });
            case It.START_PAUSE:
                return bt({}, t, { pausedAt: n.time });
            case It.END_PAUSE:
                var o = n.time - (t.pausedAt || 0);
                return bt({}, t, { pausedAt: void 0, toasts: t.toasts.map(function(s) { return bt({}, s, { pauseDuration: s.pauseDuration + o }) }) })
        }
    },
    df = [],
    hf = { toasts: [], pausedAt: void 0 },
    io = function(t) { hf = iF(hf, t), df.forEach(function(n) { n(hf) }) },
    oF = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
    sF = function(t) {
        t === void 0 && (t = {});
        var n = Z.exports.useState(hf),
            r = n[0],
            i = n[1];
        Z.exports.useEffect(function() {
            return df.push(i),
                function() {
                    var s = df.indexOf(i);
                    s > -1 && df.splice(s, 1)
                }
        }, [r]);
        var o = r.toasts.map(function(s) { var a, l, u; return bt({}, t, t[s.type], s, { duration: s.duration || ((a = t[s.type]) == null ? void 0 : a.duration) || ((l = t) == null ? void 0 : l.duration) || oF[s.type], style: bt({}, t.style, (u = t[s.type]) == null ? void 0 : u.style, s.style) }) });
        return bt({}, r, { toasts: o })
    },
    aF = function(t, n, r) { return n === void 0 && (n = "blank"), bt({ createdAt: Date.now(), visible: !0, type: n, ariaProps: { role: "status", "aria-live": "polite" }, message: t, pauseDuration: 0 }, r, { id: (r == null ? void 0 : r.id) || eF() }) },
    hl = function(t) { return function(n, r) { var i = aF(n, t, r); return io({ type: It.UPSERT_TOAST, toast: i }), i.id } },
    Cn = function(t, n) { return hl("blank")(t, n) };
Cn.error = hl("error");
Cn.success = hl("success");
Cn.loading = hl("loading");
Cn.custom = hl("custom");
Cn.dismiss = function(e) { io({ type: It.DISMISS_TOAST, toastId: e }) };
Cn.remove = function(e) { return io({ type: It.REMOVE_TOAST, toastId: e }) };
Cn.promise = function(e, t, n) { var r = Cn.loading(t.loading, bt({}, n, n == null ? void 0 : n.loading)); return e.then(function(i) { return Cn.success(cf(t.success, i), bt({ id: r }, n, n == null ? void 0 : n.success)), i }).catch(function(i) { Cn.error(cf(t.error, i), bt({ id: r }, n, n == null ? void 0 : n.error)) }), e };
var lF = function(t) {
    var n = sF(t),
        r = n.toasts,
        i = n.pausedAt;
    Z.exports.useEffect(function() {
        if (!i) {
            var s = Date.now(),
                a = r.map(function(l) { if (l.duration !== 1 / 0) { var u = (l.duration || 0) + l.pauseDuration - (s - l.createdAt); if (u < 0) { l.visible && Cn.dismiss(l.id); return } return setTimeout(function() { return Cn.dismiss(l.id) }, u) } });
            return function() { a.forEach(function(l) { return l && clearTimeout(l) }) }
        }
    }, [r, i]);
    var o = Z.exports.useMemo(function() {
        return {
            startPause: function() { io({ type: It.START_PAUSE, time: Date.now() }) },
            endPause: function() { i && io({ type: It.END_PAUSE, time: Date.now() }) },
            updateHeight: function(a, l) { return io({ type: It.UPDATE_TOAST, toast: { id: a, height: l } }) },
            calculateOffset: function(a, l) {
                var u, c = l || {},
                    d = c.reverseOrder,
                    h = d === void 0 ? !1 : d,
                    y = c.gutter,
                    w = y === void 0 ? 8 : y,
                    b = c.defaultPosition,
                    g = r.filter(function(E) { return (E.position || b) === (a.position || b) && E.height }),
                    m = g.findIndex(function(E) { return E.id === a.id }),
                    S = g.filter(function(E, P) { return P < m && E.visible }).length,
                    k = (u = g.filter(function(E) { return E.visible })).slice.apply(u, h ? [S + 1] : [0, S]).reduce(function(E, P) { return E + (P.height || 0) + w }, 0);
                return k
            }
        }
    }, [r, i]);
    return { toasts: r, handlers: o }
};

function v_() { var e = Zt([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `, `;
  position: relative;
  transform: rotate(45deg);

  animation: `, ` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: `, ` 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: `, `;
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: `, ` 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`]); return v_ = function() { return e }, e }

function w_() { var e = Zt([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]); return w_ = function() { return e }, e }

function x_() { var e = Zt([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]); return x_ = function() { return e }, e }

function b_() { var e = Zt([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]); return b_ = function() { return e }, e }
var uF = Nr(b_()),
    cF = Nr(x_()),
    fF = Nr(w_()),
    dF = gi("div")(v_(), function(e) { return e.primary || "#ff4b4b" }, uF, cF, function(e) { return e.secondary || "#fff" }, fF);

function __() { var e = Zt([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `, `;
  border-right-color: `, `;
  animation: `, ` 1s linear infinite;
`]); return __ = function() { return e }, e }

function S_() { var e = Zt([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]); return S_ = function() { return e }, e }
var hF = Nr(S_()),
    pF = gi("div")(__(), function(e) { return e.secondary || "#e0e0e0" }, function(e) { return e.primary || "#616161" }, hF);

function k_() { var e = Zt([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `, `;
  position: relative;
  transform: rotate(45deg);

  animation: `, ` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: `, ` 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: `, `;
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`]); return k_ = function() { return e }, e }

function C_() { var e = Zt([`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`]); return C_ = function() { return e }, e }

function M_() { var e = Zt([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]); return M_ = function() { return e }, e }
var mF = Nr(M_()),
    gF = Nr(C_()),
    yF = gi("div")(k_(), function(e) { return e.primary || "#61d345" }, mF, gF, function(e) { return e.secondary || "#fff" });

function E_() { var e = Zt([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `, ` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]); return E_ = function() { return e }, e }

function O_() { var e = Zt([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]); return O_ = function() { return e }, e }

function D_() { var e = Zt([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]); return D_ = function() { return e }, e }

function P_() { var e = Zt([`
  position: absolute;
`]); return P_ = function() { return e }, e }
var vF = gi("div")(P_()),
    wF = gi("div")(D_()),
    xF = Nr(O_()),
    bF = gi("div")(E_(), xF),
    _F = function(t) {
        var n = t.toast,
            r = n.icon,
            i = n.type,
            o = n.iconTheme;
        return r !== void 0 ? typeof r == "string" ? Z.exports.createElement(bF, null, r) : r : i === "blank" ? null : Z.exports.createElement(wF, null, Z.exports.createElement(pF, Object.assign({}, o)), i !== "loading" && Z.exports.createElement(vF, null, i === "error" ? Z.exports.createElement(dF, Object.assign({}, o)) : Z.exports.createElement(yF, Object.assign({}, o))))
    };

function R_() { var e = Zt([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]); return R_ = function() { return e }, e }

function T_() { var e = Zt([`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`]); return T_ = function() { return e }, e }
var SF = function(t) { return `
0% {transform: translate3d(0,` + t * -200 + `%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
` },
    kF = function(t) { return `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,` + t * -150 + `%,-1px) scale(.6); opacity:0;}
` },
    CF = "0%{opacity:0;} 100%{opacity:1;}",
    MF = "0%{opacity:1;} 100%{opacity:0;}",
    EF = gi("div", Z.exports.forwardRef)(T_()),
    OF = gi("div")(R_()),
    DF = function(t, n) {
        var r = t.includes("top"),
            i = r ? 1 : -1,
            o = g_() ? [CF, MF] : [SF(i), kF(i)],
            s = o[0],
            a = o[1];
        return { animation: n ? Nr(s) + " 0.35s cubic-bezier(.21,1.02,.73,1) forwards" : Nr(a) + " 0.4s forwards cubic-bezier(.06,.71,.55,1)" }
    },
    PF = Z.exports.memo(function(e) {
        var t = e.toast,
            n = e.position,
            r = e.style,
            i = e.children,
            o = t != null && t.height ? DF(t.position || n || "top-center", t.visible) : { opacity: 0 },
            s = Z.exports.createElement(_F, { toast: t }),
            a = Z.exports.createElement(OF, Object.assign({}, t.ariaProps), cf(t.message, t));
        return Z.exports.createElement(EF, { className: t.className, style: bt({}, o, r, t.style) }, typeof i == "function" ? i({ icon: s, message: a }) : Z.exports.createElement(Z.exports.Fragment, null, s, a))
    });

function A_() { var e = Zt([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]); return A_ = function() { return e }, e }
ZL(Z.exports.createElement);
var RF = function(t, n) {
        var r = t.includes("top"),
            i = r ? { top: 0 } : { bottom: 0 },
            o = t.includes("center") ? { justifyContent: "center" } : t.includes("right") ? { justifyContent: "flex-end" } : {};
        return bt({ left: 0, right: 0, display: "flex", position: "absolute", transition: g_() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: "translateY(" + n * (r ? 1 : -1) + "px)" }, i, o)
    },
    TF = uf(A_()),
    pf = 16,
    fI = function(t) {
        var n = t.reverseOrder,
            r = t.position,
            i = r === void 0 ? "top-center" : r,
            o = t.toastOptions,
            s = t.gutter,
            a = t.children,
            l = t.containerStyle,
            u = t.containerClassName,
            c = lF(o),
            d = c.toasts,
            h = c.handlers;
        return Z.exports.createElement("div", { style: bt({ position: "fixed", zIndex: 9999, top: pf, left: pf, right: pf, bottom: pf, pointerEvents: "none" }, l), className: u, onMouseEnter: h.startPause, onMouseLeave: h.endPause }, d.map(function(y) {
            var w = y.position || i,
                b = h.calculateOffset(y, { reverseOrder: n, gutter: s, defaultPosition: i }),
                g = RF(w, b),
                m = y.height ? void 0 : tF(function(S) { h.updateHeight(y.id, S.height) });
            return Z.exports.createElement("div", { ref: m, className: y.visible ? TF : "", key: y.id, style: g }, y.type === "custom" ? cf(y.message, y) : a ? a(y) : Z.exports.createElement(PF, { toast: y, position: w }))
        }))
    },
    dI = Cn,
    AF = { exports: {} };
(function(e) {
    var t = function(n) {
        var r = Object.prototype,
            i = r.hasOwnProperty,
            o, s = typeof Symbol == "function" ? Symbol : {},
            a = s.iterator || "@@iterator",
            l = s.asyncIterator || "@@asyncIterator",
            u = s.toStringTag || "@@toStringTag";

        function c(A, F, q) { return Object.defineProperty(A, F, { value: q, enumerable: !0, configurable: !0, writable: !0 }), A[F] }
        try { c({}, "") } catch { c = function(F, q, L) { return F[q] = L } }

        function d(A, F, q, L) {
            var $ = F && F.prototype instanceof S ? F : S,
                se = Object.create($.prototype),
                ge = new Y(L || []);
            return se._invoke = Ee(A, q, ge), se
        }
        n.wrap = d;

        function h(A, F, q) { try { return { type: "normal", arg: A.call(F, q) } } catch (L) { return { type: "throw", arg: L } } }
        var y = "suspendedStart",
            w = "suspendedYield",
            b = "executing",
            g = "completed",
            m = {};

        function S() {}

        function k() {}

        function E() {}
        var P = {};
        c(P, a, function() { return this });
        var T = Object.getPrototypeOf,
            I = T && T(T(X([])));
        I && I !== r && i.call(I, a) && (P = I);
        var U = E.prototype = S.prototype = Object.create(P);
        k.prototype = E, c(U, "constructor", E), c(E, "constructor", k), k.displayName = c(E, u, "GeneratorFunction");

        function z(A) {
            ["next", "throw", "return"].forEach(function(F) { c(A, F, function(q) { return this._invoke(F, q) }) })
        }
        n.isGeneratorFunction = function(A) { var F = typeof A == "function" && A.constructor; return F ? F === k || (F.displayName || F.name) === "GeneratorFunction" : !1 }, n.mark = function(A) { return Object.setPrototypeOf ? Object.setPrototypeOf(A, E) : (A.__proto__ = E, c(A, u, "GeneratorFunction")), A.prototype = Object.create(U), A }, n.awrap = function(A) { return { __await: A } };

        function ve(A, F) {
            function q(se, ge, Se, $e) {
                var qe = h(A[se], A, ge);
                if (qe.type === "throw") $e(qe.arg);
                else {
                    var Ht = qe.arg,
                        Yt = Ht.value;
                    return Yt && typeof Yt == "object" && i.call(Yt, "__await") ? F.resolve(Yt.__await).then(function(Hn) { q("next", Hn, Se, $e) }, function(Hn) { q("throw", Hn, Se, $e) }) : F.resolve(Yt).then(function(Hn) { Ht.value = Hn, Se(Ht) }, function(Hn) { return q("throw", Hn, Se, $e) })
                }
            }
            var L;

            function $(se, ge) {
                function Se() { return new F(function($e, qe) { q(se, ge, $e, qe) }) }
                return L = L ? L.then(Se, Se) : Se()
            }
            this._invoke = $
        }
        z(ve.prototype), c(ve.prototype, l, function() { return this }), n.AsyncIterator = ve, n.async = function(A, F, q, L, $) { $ === void 0 && ($ = Promise); var se = new ve(d(A, F, q, L), $); return n.isGeneratorFunction(F) ? se : se.next().then(function(ge) { return ge.done ? ge.value : se.next() }) };

        function Ee(A, F, q) {
            var L = y;
            return function(se, ge) {
                if (L === b) throw new Error("Generator is already running");
                if (L === g) { if (se === "throw") throw ge; return te() }
                for (q.method = se, q.arg = ge;;) {
                    var Se = q.delegate;
                    if (Se) { var $e = he(Se, q); if ($e) { if ($e === m) continue; return $e } }
                    if (q.method === "next") q.sent = q._sent = q.arg;
                    else if (q.method === "throw") {
                        if (L === y) throw L = g, q.arg;
                        q.dispatchException(q.arg)
                    } else q.method === "return" && q.abrupt("return", q.arg);
                    L = b;
                    var qe = h(A, F, q);
                    if (qe.type === "normal") { if (L = q.done ? g : w, qe.arg === m) continue; return { value: qe.arg, done: q.done } } else qe.type === "throw" && (L = g, q.method = "throw", q.arg = qe.arg)
                }
            }
        }

        function he(A, F) {
            var q = A.iterator[F.method];
            if (q === o) {
                if (F.delegate = null, F.method === "throw") {
                    if (A.iterator.return && (F.method = "return", F.arg = o, he(A, F), F.method === "throw")) return m;
                    F.method = "throw", F.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return m
            }
            var L = h(q, A.iterator, F.arg);
            if (L.type === "throw") return F.method = "throw", F.arg = L.arg, F.delegate = null, m;
            var $ = L.arg;
            if (!$) return F.method = "throw", F.arg = new TypeError("iterator result is not an object"), F.delegate = null, m;
            if ($.done) F[A.resultName] = $.value, F.next = A.nextLoc, F.method !== "return" && (F.method = "next", F.arg = o);
            else return $;
            return F.delegate = null, m
        }
        z(U), c(U, u, "Generator"), c(U, a, function() { return this }), c(U, "toString", function() { return "[object Generator]" });

        function Re(A) {
            var F = { tryLoc: A[0] };
            1 in A && (F.catchLoc = A[1]), 2 in A && (F.finallyLoc = A[2], F.afterLoc = A[3]), this.tryEntries.push(F)
        }

        function H(A) {
            var F = A.completion || {};
            F.type = "normal", delete F.arg, A.completion = F
        }

        function Y(A) { this.tryEntries = [{ tryLoc: "root" }], A.forEach(Re, this), this.reset(!0) }
        n.keys = function(A) {
            var F = [];
            for (var q in A) F.push(q);
            return F.reverse(),
                function L() { for (; F.length;) { var $ = F.pop(); if ($ in A) return L.value = $, L.done = !1, L } return L.done = !0, L }
        };

        function X(A) {
            if (A) {
                var F = A[a];
                if (F) return F.call(A);
                if (typeof A.next == "function") return A;
                if (!isNaN(A.length)) {
                    var q = -1,
                        L = function $() {
                            for (; ++q < A.length;)
                                if (i.call(A, q)) return $.value = A[q], $.done = !1, $;
                            return $.value = o, $.done = !0, $
                        };
                    return L.next = L
                }
            }
            return { next: te }
        }
        n.values = X;

        function te() { return { value: o, done: !0 } }
        return Y.prototype = {
            constructor: Y,
            reset: function(A) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = o, this.done = !1, this.delegate = null, this.method = "next", this.arg = o, this.tryEntries.forEach(H), !A)
                    for (var F in this) F.charAt(0) === "t" && i.call(this, F) && !isNaN(+F.slice(1)) && (this[F] = o)
            },
            stop: function() {
                this.done = !0;
                var A = this.tryEntries[0],
                    F = A.completion;
                if (F.type === "throw") throw F.arg;
                return this.rval
            },
            dispatchException: function(A) {
                if (this.done) throw A;
                var F = this;

                function q($e, qe) { return se.type = "throw", se.arg = A, F.next = $e, qe && (F.method = "next", F.arg = o), !!qe }
                for (var L = this.tryEntries.length - 1; L >= 0; --L) {
                    var $ = this.tryEntries[L],
                        se = $.completion;
                    if ($.tryLoc === "root") return q("end");
                    if ($.tryLoc <= this.prev) {
                        var ge = i.call($, "catchLoc"),
                            Se = i.call($, "finallyLoc");
                        if (ge && Se) { if (this.prev < $.catchLoc) return q($.catchLoc, !0); if (this.prev < $.finallyLoc) return q($.finallyLoc) } else if (ge) { if (this.prev < $.catchLoc) return q($.catchLoc, !0) } else if (Se) { if (this.prev < $.finallyLoc) return q($.finallyLoc) } else throw new Error("try statement without catch or finally")
                    }
                }
            },
            abrupt: function(A, F) {
                for (var q = this.tryEntries.length - 1; q >= 0; --q) { var L = this.tryEntries[q]; if (L.tryLoc <= this.prev && i.call(L, "finallyLoc") && this.prev < L.finallyLoc) { var $ = L; break } }
                $ && (A === "break" || A === "continue") && $.tryLoc <= F && F <= $.finallyLoc && ($ = null);
                var se = $ ? $.completion : {};
                return se.type = A, se.arg = F, $ ? (this.method = "next", this.next = $.finallyLoc, m) : this.complete(se)
            },
            complete: function(A, F) { if (A.type === "throw") throw A.arg; return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && F && (this.next = F), m },
            finish: function(A) { for (var F = this.tryEntries.length - 1; F >= 0; --F) { var q = this.tryEntries[F]; if (q.finallyLoc === A) return this.complete(q.completion, q.afterLoc), H(q), m } },
            catch: function(A) {
                for (var F = this.tryEntries.length - 1; F >= 0; --F) {
                    var q = this.tryEntries[F];
                    if (q.tryLoc === A) {
                        var L = q.completion;
                        if (L.type === "throw") {
                            var $ = L.arg;
                            H(q)
                        }
                        return $
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(A, F, q) { return this.delegate = { iterator: X(A), resultName: F, nextLoc: q }, this.method === "next" && (this.arg = o), m }
        }, n
    }(e.exports);
    try { regeneratorRuntime = t } catch { typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t) }
})(AF);
var LF = { exports: {} },
    ig = { exports: {} };
(function(e, t) {
    (function(n, r) { r(t, Z.exports) })(RS, function(n, r) {
        function i(f, p, v, x, O, C, D) {
            try {
                var N = f[C](D),
                    j = N.value
            } catch (W) { return void v(W) }
            N.done ? p(j) : Promise.resolve(j).then(x, O)
        }

        function o(f) {
            return function() {
                var p = this,
                    v = arguments;
                return new Promise(function(x, O) {
                    var C = f.apply(p, v);

                    function D(j) { i(C, x, O, D, N, "next", j) }

                    function N(j) { i(C, x, O, D, N, "throw", j) }
                    D(void 0)
                })
            }
        }

        function s() { return (s = Object.assign || function(f) { for (var p = 1; p < arguments.length; p++) { var v = arguments[p]; for (var x in v) Object.prototype.hasOwnProperty.call(v, x) && (f[x] = v[x]) } return f }).apply(this, arguments) }

        function a(f, p) {
            if (f == null) return {};
            var v, x, O = {},
                C = Object.keys(f);
            for (x = 0; x < C.length; x++) v = C[x], p.indexOf(v) >= 0 || (O[v] = f[v]);
            return O
        }

        function l(f) { var p = function(v, x) { if (typeof v != "object" || v === null) return v; var O = v[Symbol.toPrimitive]; if (O !== void 0) { var C = O.call(v, x || "default"); if (typeof C != "object") return C; throw new TypeError("@@toPrimitive must return a primitive value.") } return (x === "string" ? String : Number)(v) }(f, "string"); return typeof p == "symbol" ? p : String(p) }
        r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
        var u = { init: "init" },
            c = function(f) { var p = f.value; return p === void 0 ? "" : p },
            d = function() { return r.createElement(r.Fragment, null, "\xA0") },
            h = { Cell: c, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };

        function y() {
            for (var f = arguments.length, p = new Array(f), v = 0; v < f; v++) p[v] = arguments[v];
            return p.reduce(function(x, O) {
                var C = O.style,
                    D = O.className;
                return x = s({}, x, {}, a(O, ["style", "className"])), C && (x.style = x.style ? s({}, x.style || {}, {}, C || {}) : C), D && (x.className = x.className ? x.className + " " + D : D), x.className === "" && delete x.className, x
            }, {})
        }
        var w = function(f, p) {
                return p === void 0 && (p = {}),
                    function(v) { return v === void 0 && (v = {}), [].concat(f, [v]).reduce(function(x, O) { return function C(D, N, j) { return typeof N == "function" ? C({}, N(D, j)) : Array.isArray(N) ? y.apply(void 0, [D].concat(N)) : y(D, N) }(x, O, s({}, p, { userProps: v })) }, {}) }
            },
            b = function(f, p, v, x) { return v === void 0 && (v = {}), f.reduce(function(O, C) { return C(O, v) }, p) },
            g = function(f, p, v) { return v === void 0 && (v = {}), f.forEach(function(x) { x(p, v) }) };

        function m(f, p, v, x) { f.findIndex(function(O) { return O.pluginName === v }), p.forEach(function(O) { f.findIndex(function(C) { return C.pluginName === O }) }) }

        function S(f, p) { return typeof f == "function" ? f(p) : f }

        function k(f) { var p = r.useRef(); return p.current = f, r.useCallback(function() { return p.current }, []) }
        var E = typeof document != "undefined" ? r.useLayoutEffect : r.useEffect;

        function P(f, p) {
            var v = r.useRef(!1);
            E(function() { v.current && f(), v.current = !0 }, p)
        }

        function T(f, p, v) {
            return v === void 0 && (v = {}),
                function(x, O) { O === void 0 && (O = {}); var C = typeof x == "string" ? p[x] : x; if (C === void 0) throw console.info(p), new Error("Renderer Error \u261D\uFE0F"); return I(C, s({}, f, { column: p }, v, {}, O)) }
        }

        function I(f, p) { return function(x) { return typeof x == "function" && (O = Object.getPrototypeOf(x)).prototype && O.prototype.isReactComponent; var O }(v = f) || typeof v == "function" || function(x) { return typeof x == "object" && typeof x.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(x.$$typeof.description) }(v) ? r.createElement(f, p) : f; var v }

        function U(f, p, v) { return v === void 0 && (v = 0), f.map(function(x) { return ve(x = s({}, x, { parent: p, depth: v })), x.columns && (x.columns = U(x.columns, x, v + 1)), x }) }

        function z(f) { return X(f, "columns") }

        function ve(f) {
            var p = f.id,
                v = f.accessor,
                x = f.Header;
            if (typeof v == "string") {
                p = p || v;
                var O = v.split(".");
                v = function(C) {
                    return function(D, N, j) {
                        if (!N) return D;
                        var W, re = typeof N == "function" ? N : JSON.stringify(N),
                            Q = Re.get(re) || function() {
                                var J = function(V) {
                                    return function ee(le, ue) {
                                        if (ue === void 0 && (ue = []), Array.isArray(le))
                                            for (var xe = 0; xe < le.length; xe += 1) ee(le[xe], ue);
                                        else ue.push(le);
                                        return ue
                                    }(V).map(function(ee) { return String(ee).replace(".", "_") }).join(".").replace($, ".").replace(se, "").split(".")
                                }(N);
                                return Re.set(re, J), J
                            }();
                        try { W = Q.reduce(function(J, V) { return J[V] }, D) } catch {}
                        return W !== void 0 ? W : j
                    }(C, O)
                }
            }
            if (!p && typeof x == "string" && x && (p = x), !p && f.columns) throw console.error(f), new Error('A column ID (or unique "Header" value) is required!');
            if (!p) throw console.error(f), new Error("A column ID (or string accessor) is required!");
            return Object.assign(f, { id: p, accessor: v }), f
        }

        function Ee(f, p) { if (!p) throw new Error; return Object.assign(f, s({ Header: d, Footer: d }, h, {}, p, {}, f)), Object.assign(f, { originalWidth: f.width }), f }

        function he(f, p, v) {
            v === void 0 && (v = function() { return {} });
            for (var x = [], O = f, C = 0, D = function() { return C++ }, N = function() {
                    var j = { headers: [] },
                        W = [],
                        re = O.some(function(Q) { return Q.parent });
                    O.forEach(function(Q) {
                        var J, V = [].concat(W).reverse()[0];
                        re && (Q.parent ? J = s({}, Q.parent, { originalId: Q.parent.id, id: Q.parent.id + "_" + D(), headers: [Q] }, v(Q)) : J = Ee(s({ originalId: Q.id + "_placeholder", id: Q.id + "_placeholder_" + D(), placeholderOf: Q, headers: [Q] }, v(Q)), p), V && V.originalId === J.originalId ? V.headers.push(Q) : W.push(J)), j.headers.push(Q)
                    }), x.push(j), O = W
                }; O.length;) N();
            return x.reverse()
        }
        var Re = new Map;

        function H() {
            for (var f = arguments.length, p = new Array(f), v = 0; v < f; v++) p[v] = arguments[v];
            for (var x = 0; x < p.length; x += 1)
                if (p[x] !== void 0) return p[x]
        }

        function Y(f) { if (typeof f == "function") return f }

        function X(f, p) { var v = []; return function x(O) { O.forEach(function(C) { C[p] ? x(C[p]) : v.push(C) }) }(f), v }

        function te(f, p) {
            var v = p.manualExpandedKey,
                x = p.expanded,
                O = p.expandSubRows,
                C = O === void 0 || O,
                D = [];
            return f.forEach(function(N) { return function j(W, re) { re === void 0 && (re = !0), W.isExpanded = W.original && W.original[v] || x[W.id], W.canExpand = W.subRows && !!W.subRows.length, re && D.push(W), W.subRows && W.subRows.length && W.isExpanded && W.subRows.forEach(function(Q) { return j(Q, C) }) }(N) }), D
        }

        function A(f, p, v) { return Y(f) || p[f] || v[f] || v.text }

        function F(f, p, v) { return f ? f(p, v) : p === void 0 }

        function q() { throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.") }
        var L = null,
            $ = /\[/g,
            se = /\]/g,
            ge = function(f) { return s({ role: "table" }, f) },
            Se = function(f) { return s({ role: "rowgroup" }, f) },
            $e = function(f, p) { var v = p.column; return s({ key: "header_" + v.id, colSpan: v.totalVisibleHeaderCount, role: "columnheader" }, f) },
            qe = function(f, p) { var v = p.column; return s({ key: "footer_" + v.id, colSpan: v.totalVisibleHeaderCount }, f) },
            Ht = function(f, p) { return s({ key: "headerGroup_" + p.index, role: "row" }, f) },
            Yt = function(f, p) { return s({ key: "footerGroup_" + p.index }, f) },
            Hn = function(f, p) { return s({ key: "row_" + p.row.id, role: "row" }, f) },
            ys = function(f, p) { var v = p.cell; return s({ key: "cell_" + v.row.id + "_" + v.column.id, role: "cell" }, f) };

        function mf() { return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [ge], getTableBodyProps: [Se], getHeaderGroupProps: [Ht], getFooterGroupProps: [Yt], getHeaderProps: [$e], getFooterProps: [qe], getRowProps: [Hn], getCellProps: [ys], useFinalInstance: [] } }
        u.resetHiddenColumns = "resetHiddenColumns", u.toggleHideColumn = "toggleHideColumn", u.setHiddenColumns = "setHiddenColumns", u.toggleHideAllColumns = "toggleHideAllColumns";
        var pl = function(f) { f.getToggleHiddenProps = [ml], f.getToggleHideAllColumnsProps = [gf], f.stateReducers.push(gl), f.useInstanceBeforeDimensions.push(yl), f.headerGroupsDeps.push(function(p, v) { var x = v.instance; return [].concat(p, [x.state.hiddenColumns]) }), f.useInstance.push(oo) };
        pl.pluginName = "useColumnVisibility";
        var ml = function(f, p) { var v = p.column; return [f, { onChange: function(x) { v.toggleHidden(!x.target.checked) }, style: { cursor: "pointer" }, checked: v.isVisible, title: "Toggle Column Visible" }] },
            gf = function(f, p) { var v = p.instance; return [f, { onChange: function(x) { v.toggleHideAllColumns(!x.target.checked) }, style: { cursor: "pointer" }, checked: !v.allColumnsHidden && !v.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !v.allColumnsHidden && v.state.hiddenColumns.length }] };

        function gl(f, p, v, x) { if (p.type === u.init) return s({ hiddenColumns: [] }, f); if (p.type === u.resetHiddenColumns) return s({}, f, { hiddenColumns: x.initialState.hiddenColumns || [] }); if (p.type === u.toggleHideColumn) { var O = (p.value !== void 0 ? p.value : !f.hiddenColumns.includes(p.columnId)) ? [].concat(f.hiddenColumns, [p.columnId]) : f.hiddenColumns.filter(function(C) { return C !== p.columnId }); return s({}, f, { hiddenColumns: O }) } return p.type === u.setHiddenColumns ? s({}, f, { hiddenColumns: S(p.value, f.hiddenColumns) }) : p.type === u.toggleHideAllColumns ? s({}, f, { hiddenColumns: (p.value !== void 0 ? p.value : !f.hiddenColumns.length) ? x.allColumns.map(function(C) { return C.id }) : [] }) : void 0 }

        function yl(f) {
            var p = f.headers,
                v = f.state.hiddenColumns;
            r.useRef(!1).current;
            var x = 0;
            p.forEach(function(O) { return x += function C(D, N) { D.isVisible = N && !v.includes(D.id); var j = 0; return D.headers && D.headers.length ? D.headers.forEach(function(W) { return j += C(W, D.isVisible) }) : j = D.isVisible ? 1 : 0, D.totalVisibleHeaderCount = j, j }(O, !0) })
        }

        function oo(f) {
            var p = f.columns,
                v = f.flatHeaders,
                x = f.dispatch,
                O = f.allColumns,
                C = f.getHooks,
                D = f.state.hiddenColumns,
                N = f.autoResetHiddenColumns,
                j = N === void 0 || N,
                W = k(f),
                re = O.length === D.length,
                Q = r.useCallback(function(ue, xe) { return x({ type: u.toggleHideColumn, columnId: ue, value: xe }) }, [x]),
                J = r.useCallback(function(ue) { return x({ type: u.setHiddenColumns, value: ue }) }, [x]),
                V = r.useCallback(function(ue) { return x({ type: u.toggleHideAllColumns, value: ue }) }, [x]),
                ee = w(C().getToggleHideAllColumnsProps, { instance: W() });
            v.forEach(function(ue) { ue.toggleHidden = function(xe) { x({ type: u.toggleHideColumn, columnId: ue.id, value: xe }) }, ue.getToggleHiddenProps = w(C().getToggleHiddenProps, { instance: W(), column: ue }) });
            var le = k(j);
            P(function() { le() && x({ type: u.resetHiddenColumns }) }, [x, p]), Object.assign(f, { allColumnsHidden: re, toggleHideColumn: Q, setHiddenColumns: J, toggleHideAllColumns: V, getToggleHideAllColumnsProps: ee })
        }
        var yf = {},
            vf = {},
            vl = function(f, p, v) { return f },
            vs = function(f, p) { return f.subRows || [] },
            wl = function(f, p, v) { return "" + (v ? [v.id, p].join(".") : p) },
            so = function(f) { return f };

        function xl(f) {
            var p = f.initialState,
                v = p === void 0 ? yf : p,
                x = f.defaultColumn,
                O = x === void 0 ? vf : x,
                C = f.getSubRows,
                D = C === void 0 ? vs : C,
                N = f.getRowId,
                j = N === void 0 ? wl : N,
                W = f.stateReducer,
                re = W === void 0 ? vl : W,
                Q = f.useControlledState,
                J = Q === void 0 ? so : Q;
            return s({}, a(f, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: v, defaultColumn: O, getSubRows: D, getRowId: j, stateReducer: re, useControlledState: J })
        }

        function ws(f, p) {
            p === void 0 && (p = 0);
            var v = 0,
                x = 0,
                O = 0,
                C = 0;
            return f.forEach(function(D) {
                var N = D.headers;
                if (D.totalLeft = p, N && N.length) {
                    var j = ws(N, p),
                        W = j[0],
                        re = j[1],
                        Q = j[2],
                        J = j[3];
                    D.totalMinWidth = W, D.totalWidth = re, D.totalMaxWidth = Q, D.totalFlexWidth = J
                } else D.totalMinWidth = D.minWidth, D.totalWidth = Math.min(Math.max(D.minWidth, D.width), D.maxWidth), D.totalMaxWidth = D.maxWidth, D.totalFlexWidth = D.canResize ? D.totalWidth : 0;
                D.isVisible && (p += D.totalWidth, v += D.totalMinWidth, x += D.totalWidth, O += D.totalMaxWidth, C += D.totalFlexWidth)
            }), [v, x, O, C]
        }

        function wf(f) {
            var p = f.data,
                v = f.rows,
                x = f.flatRows,
                O = f.rowsById,
                C = f.column,
                D = f.getRowId,
                N = f.getSubRows,
                j = f.accessValueHooks,
                W = f.getInstance;
            p.forEach(function(re, Q) {
                return function J(V, ee, le, ue, xe) {
                    le === void 0 && (le = 0);
                    var Ae = V,
                        ye = D(V, ee, ue),
                        ie = O[ye];
                    if (ie) ie.subRows && ie.originalSubRows.forEach(function(fe, Oe) { return J(fe, Oe, le + 1, ie) });
                    else if ((ie = { id: ye, original: Ae, index: ee, depth: le, cells: [{}] }).cells.map = q, ie.cells.filter = q, ie.cells.forEach = q, ie.cells[0].getCellProps = q, ie.values = {}, xe.push(ie), x.push(ie), O[ye] = ie, ie.originalSubRows = N(V, ee), ie.originalSubRows) {
                        var Pe = [];
                        ie.originalSubRows.forEach(function(fe, Oe) { return J(fe, Oe, le + 1, ie, Pe) }), ie.subRows = Pe
                    }
                    C.accessor && (ie.values[C.id] = C.accessor(V, ee, ie, xe, p)), ie.values[C.id] = b(j, ie.values[C.id], { row: ie, column: C, instance: W() })
                }(re, Q, 0, void 0, v)
            })
        }
        u.resetExpanded = "resetExpanded", u.toggleRowExpanded = "toggleRowExpanded", u.toggleAllRowsExpanded = "toggleAllRowsExpanded";
        var xs = function(f) { f.getToggleAllRowsExpandedProps = [xf], f.getToggleRowExpandedProps = [bf], f.stateReducers.push(_f), f.useInstance.push(Sf), f.prepareRow.push(at) };
        xs.pluginName = "useExpanded";
        var xf = function(f, p) { var v = p.instance; return [f, { onClick: function(x) { v.toggleAllRowsExpanded() }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }] },
            bf = function(f, p) { var v = p.row; return [f, { onClick: function() { v.toggleRowExpanded() }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }] };

        function _f(f, p, v, x) {
            if (p.type === u.init) return s({ expanded: {} }, f);
            if (p.type === u.resetExpanded) return s({}, f, { expanded: x.initialState.expanded || {} });
            if (p.type === u.toggleAllRowsExpanded) {
                var O = p.value,
                    C = x.rowsById,
                    D = Object.keys(C).length === Object.keys(f.expanded).length;
                if (O !== void 0 ? O : !D) { var N = {}; return Object.keys(C).forEach(function(ee) { N[ee] = !0 }), s({}, f, { expanded: N }) }
                return s({}, f, { expanded: {} })
            }
            if (p.type === u.toggleRowExpanded) {
                var j, W = p.id,
                    re = p.value,
                    Q = f.expanded[W],
                    J = re !== void 0 ? re : !Q;
                if (!Q && J) return s({}, f, { expanded: s({}, f.expanded, (j = {}, j[W] = !0, j)) });
                if (Q && !J) { var V = f.expanded; return V[W], s({}, f, { expanded: a(V, [W].map(l)) }) }
                return f
            }
        }

        function Sf(f) {
            var p = f.data,
                v = f.rows,
                x = f.rowsById,
                O = f.manualExpandedKey,
                C = O === void 0 ? "expanded" : O,
                D = f.paginateExpandedRows,
                N = D === void 0 || D,
                j = f.expandSubRows,
                W = j === void 0 || j,
                re = f.autoResetExpanded,
                Q = re === void 0 || re,
                J = f.getHooks,
                V = f.plugins,
                ee = f.state.expanded,
                le = f.dispatch;
            m(V, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
            var ue = k(Q),
                xe = Boolean(Object.keys(x).length && Object.keys(ee).length);
            xe && Object.keys(x).some(function(je) { return !ee[je] }) && (xe = !1), P(function() { ue() && le({ type: u.resetExpanded }) }, [le, p]);
            var Ae = r.useCallback(function(je, ke) { le({ type: u.toggleRowExpanded, id: je, value: ke }) }, [le]),
                ye = r.useCallback(function(je) { return le({ type: u.toggleAllRowsExpanded, value: je }) }, [le]),
                ie = r.useMemo(function() { return N ? te(v, { manualExpandedKey: C, expanded: ee, expandSubRows: W }) : v }, [N, v, C, ee, W]),
                Pe = r.useMemo(function() {
                    return function(je) {
                        var ke = 0;
                        return Object.keys(je).forEach(function(Me) {
                            var Ge = Me.split(".");
                            ke = Math.max(ke, Ge.length)
                        }), ke
                    }(ee)
                }, [ee]),
                fe = k(f),
                Oe = w(J().getToggleAllRowsExpandedProps, { instance: fe() });
            Object.assign(f, { preExpandedRows: v, expandedRows: ie, rows: ie, expandedDepth: Pe, isAllRowsExpanded: xe, toggleRowExpanded: Ae, toggleAllRowsExpanded: ye, getToggleAllRowsExpandedProps: Oe })
        }

        function at(f, p) {
            var v = p.instance.getHooks,
                x = p.instance;
            f.toggleRowExpanded = function(O) { return x.toggleRowExpanded(f.id, O) }, f.getToggleRowExpandedProps = w(v().getToggleRowExpandedProps, { instance: x, row: f })
        }
        var ao = function(f, p, v) { return f = f.filter(function(x) { return p.some(function(O) { var C = x.values[O]; return String(C).toLowerCase().includes(String(v).toLowerCase()) }) }) };
        ao.autoRemove = function(f) { return !f };
        var lo = function(f, p, v) { return f.filter(function(x) { return p.some(function(O) { var C = x.values[O]; return C === void 0 || String(C).toLowerCase() === String(v).toLowerCase() }) }) };
        lo.autoRemove = function(f) { return !f };
        var bl = function(f, p, v) { return f.filter(function(x) { return p.some(function(O) { var C = x.values[O]; return C === void 0 || String(C) === String(v) }) }) };
        bl.autoRemove = function(f) { return !f };
        var yi = function(f, p, v) { return f.filter(function(x) { return p.some(function(O) { return x.values[O].includes(v) }) }) };
        yi.autoRemove = function(f) { return !f || !f.length };
        var bs = function(f, p, v) { return f.filter(function(x) { return p.some(function(O) { var C = x.values[O]; return C && C.length && v.every(function(D) { return C.includes(D) }) }) }) };
        bs.autoRemove = function(f) { return !f || !f.length };
        var Yn = function(f, p, v) { return f.filter(function(x) { return p.some(function(O) { var C = x.values[O]; return C && C.length && v.some(function(D) { return C.includes(D) }) }) }) };
        Yn.autoRemove = function(f) { return !f || !f.length };
        var _l = function(f, p, v) { return f.filter(function(x) { return p.some(function(O) { var C = x.values[O]; return v.includes(C) }) }) };
        _l.autoRemove = function(f) { return !f || !f.length };
        var Sl = function(f, p, v) { return f.filter(function(x) { return p.some(function(O) { return x.values[O] === v }) }) };
        Sl.autoRemove = function(f) { return f === void 0 };
        var _ = function(f, p, v) { return f.filter(function(x) { return p.some(function(O) { return x.values[O] == v }) }) };
        _.autoRemove = function(f) { return f == null };
        var M = function(f, p, v) {
            var x = v || [],
                O = x[0],
                C = x[1];
            if ((O = typeof O == "number" ? O : -1 / 0) > (C = typeof C == "number" ? C : 1 / 0)) {
                var D = O;
                O = C, C = D
            }
            return f.filter(function(N) { return p.some(function(j) { var W = N.values[j]; return W >= O && W <= C }) })
        };
        M.autoRemove = function(f) { return !f || typeof f[0] != "number" && typeof f[1] != "number" };
        var R = Object.freeze({ __proto__: null, text: ao, exactText: lo, exactTextCase: bl, includes: yi, includesAll: bs, includesSome: Yn, includesValue: _l, exact: Sl, equals: _, between: M });
        u.resetFilters = "resetFilters", u.setFilter = "setFilter", u.setAllFilters = "setAllFilters";
        var B = function(f) { f.stateReducers.push(ae), f.useInstance.push(G) };

        function ae(f, p, v, x) {
            if (p.type === u.init) return s({ filters: [] }, f);
            if (p.type === u.resetFilters) return s({}, f, { filters: x.initialState.filters || [] });
            if (p.type === u.setFilter) {
                var O = p.columnId,
                    C = p.filterValue,
                    D = x.allColumns,
                    N = x.filterTypes,
                    j = D.find(function(le) { return le.id === O });
                if (!j) throw new Error("React-Table: Could not find a column with id: " + O);
                var W = A(j.filter, N || {}, R),
                    re = f.filters.find(function(le) { return le.id === O }),
                    Q = S(C, re && re.value);
                return F(W.autoRemove, Q, j) ? s({}, f, { filters: f.filters.filter(function(le) { return le.id !== O }) }) : s({}, f, re ? { filters: f.filters.map(function(le) { return le.id === O ? { id: O, value: Q } : le }) } : { filters: [].concat(f.filters, [{ id: O, value: Q }]) })
            }
            if (p.type === u.setAllFilters) {
                var J = p.filters,
                    V = x.allColumns,
                    ee = x.filterTypes;
                return s({}, f, { filters: S(J, f.filters).filter(function(le) { var ue = V.find(function(xe) { return xe.id === le.id }); return !F(A(ue.filter, ee || {}, R).autoRemove, le.value, ue) }) })
            }
        }

        function G(f) {
            var p = f.data,
                v = f.rows,
                x = f.flatRows,
                O = f.rowsById,
                C = f.allColumns,
                D = f.filterTypes,
                N = f.manualFilters,
                j = f.defaultCanFilter,
                W = j !== void 0 && j,
                re = f.disableFilters,
                Q = f.state.filters,
                J = f.dispatch,
                V = f.autoResetFilters,
                ee = V === void 0 || V,
                le = r.useCallback(function(fe, Oe) { J({ type: u.setFilter, columnId: fe, filterValue: Oe }) }, [J]),
                ue = r.useCallback(function(fe) { J({ type: u.setAllFilters, filters: fe }) }, [J]);
            C.forEach(function(fe) {
                var Oe = fe.id,
                    je = fe.accessor,
                    ke = fe.defaultCanFilter,
                    Me = fe.disableFilters;
                fe.canFilter = je ? H(Me !== !0 && void 0, re !== !0 && void 0, !0) : H(ke, W, !1), fe.setFilter = function(De) { return le(fe.id, De) };
                var Ge = Q.find(function(De) { return De.id === Oe });
                fe.filterValue = Ge && Ge.value
            });
            var xe = r.useMemo(function() {
                    if (N || !Q.length) return [v, x, O];
                    var fe = [],
                        Oe = {};
                    return [function je(ke, Me) {
                        Me === void 0 && (Me = 0);
                        var Ge = ke;
                        return (Ge = Q.reduce(function(De, Ve) {
                            var We = Ve.id,
                                nt = Ve.value,
                                be = C.find(function(gt) { return gt.id === We });
                            if (!be) return De;
                            Me === 0 && (be.preFilteredRows = De);
                            var Be = A(be.filter, D || {}, R);
                            return Be ? (be.filteredRows = Be(De, [We], nt), be.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + be.id + "."), De)
                        }, ke)).forEach(function(De) { fe.push(De), Oe[De.id] = De, De.subRows && (De.subRows = De.subRows && De.subRows.length > 0 ? je(De.subRows, Me + 1) : De.subRows) }), Ge
                    }(v), fe, Oe]
                }, [N, Q, v, x, O, C, D]),
                Ae = xe[0],
                ye = xe[1],
                ie = xe[2];
            r.useMemo(function() { C.filter(function(fe) { return !Q.find(function(Oe) { return Oe.id === fe.id }) }).forEach(function(fe) { fe.preFilteredRows = Ae, fe.filteredRows = Ae }) }, [Ae, Q, C]);
            var Pe = k(ee);
            P(function() { Pe() && J({ type: u.resetFilters }) }, [J, N ? null : p]), Object.assign(f, { preFilteredRows: v, preFilteredFlatRows: x, preFilteredRowsById: O, filteredRows: Ae, filteredFlatRows: ye, filteredRowsById: ie, rows: Ae, flatRows: ye, rowsById: ie, setFilter: le, setAllFilters: ue })
        }
        B.pluginName = "useFilters", u.resetGlobalFilter = "resetGlobalFilter", u.setGlobalFilter = "setGlobalFilter";
        var we = function(f) { f.stateReducers.push(pe), f.useInstance.push(Le) };

        function pe(f, p, v, x) {
            if (p.type === u.resetGlobalFilter) return s({}, f, { globalFilter: x.initialState.globalFilter || void 0 });
            if (p.type === u.setGlobalFilter) {
                var O = p.filterValue,
                    C = x.userFilterTypes,
                    D = A(x.globalFilter, C || {}, R),
                    N = S(O, f.globalFilter);
                return F(D.autoRemove, N) ? (f.globalFilter, a(f, ["globalFilter"])) : s({}, f, { globalFilter: N })
            }
        }

        function Le(f) {
            var p = f.data,
                v = f.rows,
                x = f.flatRows,
                O = f.rowsById,
                C = f.allColumns,
                D = f.filterTypes,
                N = f.globalFilter,
                j = f.manualGlobalFilter,
                W = f.state.globalFilter,
                re = f.dispatch,
                Q = f.autoResetGlobalFilter,
                J = Q === void 0 || Q,
                V = f.disableGlobalFilter,
                ee = r.useCallback(function(ie) { re({ type: u.setGlobalFilter, filterValue: ie }) }, [re]),
                le = r.useMemo(function() {
                    if (j || W === void 0) return [v, x, O];
                    var ie = [],
                        Pe = {},
                        fe = A(N, D || {}, R);
                    if (!fe) return console.warn("Could not find a valid 'globalFilter' option."), v;
                    C.forEach(function(je) {
                        var ke = je.disableGlobalFilter;
                        je.canFilter = H(ke !== !0 && void 0, V !== !0 && void 0, !0)
                    });
                    var Oe = C.filter(function(je) { return je.canFilter === !0 });
                    return [function je(ke) { return (ke = fe(ke, Oe.map(function(Me) { return Me.id }), W)).forEach(function(Me) { ie.push(Me), Pe[Me.id] = Me, Me.subRows = Me.subRows && Me.subRows.length ? je(Me.subRows) : Me.subRows }), ke }(v), ie, Pe]
                }, [j, W, N, D, C, v, x, O, V]),
                ue = le[0],
                xe = le[1],
                Ae = le[2],
                ye = k(J);
            P(function() { ye() && re({ type: u.resetGlobalFilter }) }, [re, j ? null : p]), Object.assign(f, { preGlobalFilteredRows: v, preGlobalFilteredFlatRows: x, preGlobalFilteredRowsById: O, globalFilteredRows: ue, globalFilteredFlatRows: xe, globalFilteredRowsById: Ae, rows: ue, flatRows: xe, rowsById: Ae, setGlobalFilter: ee, disableGlobalFilter: V })
        }

        function Ne(f, p) { return p.reduce(function(v, x) { return v + (typeof x == "number" ? x : 0) }, 0) }
        we.pluginName = "useGlobalFilter";
        var tt = Object.freeze({
                __proto__: null,
                sum: Ne,
                min: function(f) { var p = f[0] || 0; return f.forEach(function(v) { typeof v == "number" && (p = Math.min(p, v)) }), p },
                max: function(f) { var p = f[0] || 0; return f.forEach(function(v) { typeof v == "number" && (p = Math.max(p, v)) }), p },
                minMax: function(f) {
                    var p = f[0] || 0,
                        v = f[0] || 0;
                    return f.forEach(function(x) { typeof x == "number" && (p = Math.min(p, x), v = Math.max(v, x)) }), p + ".." + v
                },
                average: function(f) { return Ne(0, f) / f.length },
                median: function(f) {
                    if (!f.length) return null;
                    var p = Math.floor(f.length / 2),
                        v = [].concat(f).sort(function(x, O) { return x - O });
                    return f.length % 2 != 0 ? v[p] : (v[p - 1] + v[p]) / 2
                },
                unique: function(f) { return Array.from(new Set(f).values()) },
                uniqueCount: function(f) { return new Set(f).size },
                count: function(f) { return f.length }
            }),
            sn = [],
            Rt = {};
        u.resetGroupBy = "resetGroupBy", u.setGroupBy = "setGroupBy", u.toggleGroupBy = "toggleGroupBy";
        var vi = function(f) { f.getGroupByToggleProps = [Mn], f.stateReducers.push(wi), f.visibleColumnsDeps.push(function(p, v) { var x = v.instance; return [].concat(p, [x.state.groupBy]) }), f.visibleColumns.push(xi), f.useInstance.push(_s), f.prepareRow.push(kf) };
        vi.pluginName = "useGroupBy";
        var Mn = function(f, p) { var v = p.header; return [f, { onClick: v.canGroupBy ? function(x) { x.persist(), v.toggleGroupBy() } : void 0, style: { cursor: v.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }] };

        function wi(f, p, v, x) {
            if (p.type === u.init) return s({ groupBy: [] }, f);
            if (p.type === u.resetGroupBy) return s({}, f, { groupBy: x.initialState.groupBy || [] });
            if (p.type === u.setGroupBy) return s({}, f, { groupBy: p.value });
            if (p.type === u.toggleGroupBy) {
                var O = p.columnId,
                    C = p.value,
                    D = C !== void 0 ? C : !f.groupBy.includes(O);
                return s({}, f, D ? { groupBy: [].concat(f.groupBy, [O]) } : { groupBy: f.groupBy.filter(function(N) { return N !== O }) })
            }
        }

        function xi(f, p) {
            var v = p.instance.state.groupBy,
                x = v.map(function(C) { return f.find(function(D) { return D.id === C }) }).filter(Boolean),
                O = f.filter(function(C) { return !v.includes(C.id) });
            return (f = [].concat(x, O)).forEach(function(C) { C.isGrouped = v.includes(C.id), C.groupedIndex = v.indexOf(C.id) }), f
        }
        var bi = {};

        function _s(f) {
            var p = f.data,
                v = f.rows,
                x = f.flatRows,
                O = f.rowsById,
                C = f.allColumns,
                D = f.flatHeaders,
                N = f.groupByFn,
                j = N === void 0 ? kl : N,
                W = f.manualGroupBy,
                re = f.aggregations,
                Q = re === void 0 ? bi : re,
                J = f.plugins,
                V = f.state.groupBy,
                ee = f.dispatch,
                le = f.autoResetGroupBy,
                ue = le === void 0 || le,
                xe = f.disableGroupBy,
                Ae = f.defaultCanGroupBy,
                ye = f.getHooks;
            m(J, ["useColumnOrder", "useFilters"], "useGroupBy");
            var ie = k(f);
            C.forEach(function(be) {
                var Be = be.accessor,
                    gt = be.defaultGroupBy,
                    Jt = be.disableGroupBy;
                be.canGroupBy = Be ? H(be.canGroupBy, Jt !== !0 && void 0, xe !== !0 && void 0, !0) : H(be.canGroupBy, gt, Ae, !1), be.canGroupBy && (be.toggleGroupBy = function() { return f.toggleGroupBy(be.id) }), be.Aggregated = be.Aggregated || be.Cell
            });
            var Pe = r.useCallback(function(be, Be) { ee({ type: u.toggleGroupBy, columnId: be, value: Be }) }, [ee]),
                fe = r.useCallback(function(be) { ee({ type: u.setGroupBy, value: be }) }, [ee]);
            D.forEach(function(be) { be.getGroupByToggleProps = w(ye().getGroupByToggleProps, { instance: ie(), header: be }) });
            var Oe = r.useMemo(function() {
                    if (W || !V.length) return [v, x, O, sn, Rt, x, O];
                    var be = V.filter(function(Tt) { return C.find(function(jr) { return jr.id === Tt }) }),
                        Be = [],
                        gt = {},
                        Jt = [],
                        Ce = {},
                        ht = [],
                        Ct = {},
                        en = function Tt(jr, pr, bg) {
                            if (pr === void 0 && (pr = 0), pr === be.length) return jr.map(function(El) { return s({}, El, { depth: pr }) });
                            var Pf = be[pr],
                                bS = j(jr, Pf);
                            return Object.entries(bS).map(function(El, _S) {
                                var _g = El[0],
                                    Ol = El[1],
                                    Dl = Pf + ":" + _g,
                                    Sg = Tt(Ol, pr + 1, Dl = bg ? bg + ">" + Dl : Dl),
                                    kg = pr ? X(Ol, "leafRows") : Ol,
                                    SS = function(En, Rf, CS) {
                                        var Pl = {};
                                        return C.forEach(function(Mt) {
                                            if (be.includes(Mt.id)) Pl[Mt.id] = Rf[0] ? Rf[0].values[Mt.id] : null;
                                            else {
                                                var Cg = typeof Mt.aggregate == "function" ? Mt.aggregate : Q[Mt.aggregate] || tt[Mt.aggregate];
                                                if (Cg) {
                                                    var MS = Rf.map(function(Rl) { return Rl.values[Mt.id] }),
                                                        ES = En.map(function(Rl) {
                                                            var Tf = Rl.values[Mt.id];
                                                            if (!CS && Mt.aggregateValue) {
                                                                var Mg = typeof Mt.aggregateValue == "function" ? Mt.aggregateValue : Q[Mt.aggregateValue] || tt[Mt.aggregateValue];
                                                                if (!Mg) throw console.info({ column: Mt }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                                                                Tf = Mg(Tf, Rl, Mt)
                                                            }
                                                            return Tf
                                                        });
                                                    Pl[Mt.id] = Cg(ES, MS)
                                                } else {
                                                    if (Mt.aggregate) throw console.info({ column: Mt }), new Error("React Table: Invalid column.aggregate option for column listed above");
                                                    Pl[Mt.id] = null
                                                }
                                            }
                                        }), Pl
                                    }(kg, Ol, pr),
                                    kS = { id: Dl, isGrouped: !0, groupByID: Pf, groupByVal: _g, values: SS, subRows: Sg, leafRows: kg, depth: pr, index: _S };
                                return Sg.forEach(function(En) { Be.push(En), gt[En.id] = En, En.isGrouped ? (Jt.push(En), Ce[En.id] = En) : (ht.push(En), Ct[En.id] = En) }), kS
                            })
                        }(v);
                    return en.forEach(function(Tt) { Be.push(Tt), gt[Tt.id] = Tt, Tt.isGrouped ? (Jt.push(Tt), Ce[Tt.id] = Tt) : (ht.push(Tt), Ct[Tt.id] = Tt) }), [en, Be, gt, Jt, Ce, ht, Ct]
                }, [W, V, v, x, O, C, Q, j]),
                je = Oe[0],
                ke = Oe[1],
                Me = Oe[2],
                Ge = Oe[3],
                De = Oe[4],
                Ve = Oe[5],
                We = Oe[6],
                nt = k(ue);
            P(function() { nt() && ee({ type: u.resetGroupBy }) }, [ee, W ? null : p]), Object.assign(f, { preGroupedRows: v, preGroupedFlatRow: x, preGroupedRowsById: O, groupedRows: je, groupedFlatRows: ke, groupedRowsById: Me, onlyGroupedFlatRows: Ge, onlyGroupedRowsById: De, nonGroupedFlatRows: Ve, nonGroupedRowsById: We, rows: je, flatRows: ke, rowsById: Me, toggleGroupBy: Pe, setGroupBy: fe })
        }

        function kf(f) {
            f.allCells.forEach(function(p) {
                var v;
                p.isGrouped = p.column.isGrouped && p.column.id === f.groupByID, p.isPlaceholder = !p.isGrouped && p.column.isGrouped, p.isAggregated = !p.isGrouped && !p.isPlaceholder && ((v = f.subRows) == null ? void 0 : v.length)
            })
        }

        function kl(f, p) { return f.reduce(function(v, x, O) { var C = "" + x.values[p]; return v[C] = Array.isArray(v[C]) ? v[C] : [], v[C].push(x), v }, {}) }
        var Cl = /([0-9]+)/gm;

        function Ss(f, p) { return f === p ? 0 : f > p ? 1 : -1 }

        function _i(f, p, v) { return [f.values[v], p.values[v]] }

        function og(f) { return typeof f == "number" ? isNaN(f) || f === 1 / 0 || f === -1 / 0 ? "" : String(f) : typeof f == "string" ? f : "" }
        var L_ = Object.freeze({
            __proto__: null,
            alphanumeric: function(f, p, v) {
                var x = _i(f, p, v),
                    O = x[0],
                    C = x[1];
                for (O = og(O), C = og(C), O = O.split(Cl).filter(Boolean), C = C.split(Cl).filter(Boolean); O.length && C.length;) {
                    var D = O.shift(),
                        N = C.shift(),
                        j = parseInt(D, 10),
                        W = parseInt(N, 10),
                        re = [j, W].sort();
                    if (isNaN(re[0])) { if (D > N) return 1; if (N > D) return -1 } else { if (isNaN(re[1])) return isNaN(j) ? -1 : 1; if (j > W) return 1; if (W > j) return -1 }
                }
                return O.length - C.length
            },
            datetime: function(f, p, v) {
                var x = _i(f, p, v),
                    O = x[0],
                    C = x[1];
                return Ss(O = O.getTime(), C = C.getTime())
            },
            basic: function(f, p, v) { var x = _i(f, p, v); return Ss(x[0], x[1]) },
            string: function(f, p, v) {
                var x = _i(f, p, v),
                    O = x[0],
                    C = x[1];
                for (O = O.split("").filter(Boolean), C = C.split("").filter(Boolean); O.length && C.length;) {
                    var D = O.shift(),
                        N = C.shift(),
                        j = D.toLowerCase(),
                        W = N.toLowerCase();
                    if (j > W) return 1;
                    if (W > j) return -1;
                    if (D > N) return 1;
                    if (N > D) return -1
                }
                return O.length - C.length
            },
            number: function(f, p, v) {
                var x = _i(f, p, v),
                    O = x[0],
                    C = x[1],
                    D = /[^0-9.]/gi;
                return Ss(O = Number(String(O).replace(D, "")), C = Number(String(C).replace(D, "")))
            }
        });
        u.resetSortBy = "resetSortBy", u.setSortBy = "setSortBy", u.toggleSortBy = "toggleSortBy", u.clearSortBy = "clearSortBy", h.sortType = "alphanumeric", h.sortDescFirst = !1;
        var sg = function(f) { f.getSortByToggleProps = [F_], f.stateReducers.push(I_), f.useInstance.push(N_) };
        sg.pluginName = "useSortBy";
        var F_ = function(f, p) {
            var v = p.instance,
                x = p.column,
                O = v.isMultiSortEvent,
                C = O === void 0 ? function(D) { return D.shiftKey } : O;
            return [f, { onClick: x.canSort ? function(D) { D.persist(), x.toggleSortBy(void 0, !v.disableMultiSort && C(D)) } : void 0, style: { cursor: x.canSort ? "pointer" : void 0 }, title: x.canSort ? "Toggle SortBy" : void 0 }]
        };

        function I_(f, p, v, x) {
            if (p.type === u.init) return s({ sortBy: [] }, f);
            if (p.type === u.resetSortBy) return s({}, f, { sortBy: x.initialState.sortBy || [] });
            if (p.type === u.clearSortBy) return s({}, f, { sortBy: f.sortBy.filter(function(ie) { return ie.id !== p.columnId }) });
            if (p.type === u.setSortBy) return s({}, f, { sortBy: p.sortBy });
            if (p.type === u.toggleSortBy) {
                var O, C = p.columnId,
                    D = p.desc,
                    N = p.multi,
                    j = x.allColumns,
                    W = x.disableMultiSort,
                    re = x.disableSortRemove,
                    Q = x.disableMultiRemove,
                    J = x.maxMultiSortColCount,
                    V = J === void 0 ? Number.MAX_SAFE_INTEGER : J,
                    ee = f.sortBy,
                    le = j.find(function(ie) { return ie.id === C }).sortDescFirst,
                    ue = ee.find(function(ie) { return ie.id === C }),
                    xe = ee.findIndex(function(ie) { return ie.id === C }),
                    Ae = D != null,
                    ye = [];
                return (O = !W && N ? ue ? "toggle" : "add" : xe !== ee.length - 1 || ee.length !== 1 ? "replace" : ue ? "toggle" : "replace") !== "toggle" || re || Ae || N && Q || !(ue && ue.desc && !le || !ue.desc && le) || (O = "remove"), O === "replace" ? ye = [{ id: C, desc: Ae ? D : le }] : O === "add" ? (ye = [].concat(ee, [{ id: C, desc: Ae ? D : le }])).splice(0, ye.length - V) : O === "toggle" ? ye = ee.map(function(ie) { return ie.id === C ? s({}, ie, { desc: Ae ? D : !ue.desc }) : ie }) : O === "remove" && (ye = ee.filter(function(ie) { return ie.id !== C })), s({}, f, { sortBy: ye })
            }
        }

        function N_(f) {
            var p = f.data,
                v = f.rows,
                x = f.flatRows,
                O = f.allColumns,
                C = f.orderByFn,
                D = C === void 0 ? ag : C,
                N = f.sortTypes,
                j = f.manualSortBy,
                W = f.defaultCanSort,
                re = f.disableSortBy,
                Q = f.flatHeaders,
                J = f.state.sortBy,
                V = f.dispatch,
                ee = f.plugins,
                le = f.getHooks,
                ue = f.autoResetSortBy,
                xe = ue === void 0 || ue;
            m(ee, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
            var Ae = r.useCallback(function(ke) { V({ type: u.setSortBy, sortBy: ke }) }, [V]),
                ye = r.useCallback(function(ke, Me, Ge) { V({ type: u.toggleSortBy, columnId: ke, desc: Me, multi: Ge }) }, [V]),
                ie = k(f);
            Q.forEach(function(ke) {
                var Me = ke.accessor,
                    Ge = ke.canSort,
                    De = ke.disableSortBy,
                    Ve = ke.id,
                    We = Me ? H(De !== !0 && void 0, re !== !0 && void 0, !0) : H(W, Ge, !1);
                ke.canSort = We, ke.canSort && (ke.toggleSortBy = function(be, Be) { return ye(ke.id, be, Be) }, ke.clearSortBy = function() { V({ type: u.clearSortBy, columnId: ke.id }) }), ke.getSortByToggleProps = w(le().getSortByToggleProps, { instance: ie(), column: ke });
                var nt = J.find(function(be) { return be.id === Ve });
                ke.isSorted = !!nt, ke.sortedIndex = J.findIndex(function(be) { return be.id === Ve }), ke.isSortedDesc = ke.isSorted ? nt.desc : void 0
            });
            var Pe = r.useMemo(function() {
                    if (j || !J.length) return [v, x];
                    var ke = [],
                        Me = J.filter(function(Ge) { return O.find(function(De) { return De.id === Ge.id }) });
                    return [function Ge(De) {
                        var Ve = D(De, Me.map(function(We) {
                            var nt = O.find(function(gt) { return gt.id === We.id });
                            if (!nt) throw new Error("React-Table: Could not find a column with id: " + We.id + " while sorting");
                            var be = nt.sortType,
                                Be = Y(be) || (N || {})[be] || L_[be];
                            if (!Be) throw new Error("React-Table: Could not find a valid sortType of '" + be + "' for column '" + We.id + "'.");
                            return function(gt, Jt) { return Be(gt, Jt, We.id, We.desc) }
                        }), Me.map(function(We) { var nt = O.find(function(be) { return be.id === We.id }); return nt && nt.sortInverted ? We.desc : !We.desc }));
                        return Ve.forEach(function(We) { ke.push(We), We.subRows && We.subRows.length !== 0 && (We.subRows = Ge(We.subRows)) }), Ve
                    }(v), ke]
                }, [j, J, v, x, O, D, N]),
                fe = Pe[0],
                Oe = Pe[1],
                je = k(xe);
            P(function() { je() && V({ type: u.resetSortBy }) }, [j ? null : p]), Object.assign(f, { preSortedRows: v, preSortedFlatRows: x, sortedRows: fe, sortedFlatRows: Oe, rows: fe, flatRows: Oe, setSortBy: Ae, toggleSortBy: ye })
        }

        function ag(f, p, v) {
            return [].concat(f).sort(function(x, O) {
                for (var C = 0; C < p.length; C += 1) {
                    var D = p[C],
                        N = v[C] === !1 || v[C] === "desc",
                        j = D(x, O);
                    if (j !== 0) return N ? -j : j
                }
                return v[0] ? x.index - O.index : O.index - x.index
            })
        }
        u.resetPage = "resetPage", u.gotoPage = "gotoPage", u.setPageSize = "setPageSize";
        var lg = function(f) { f.stateReducers.push(j_), f.useInstance.push(z_) };

        function j_(f, p, v, x) {
            if (p.type === u.init) return s({ pageSize: 10, pageIndex: 0 }, f);
            if (p.type === u.resetPage) return s({}, f, { pageIndex: x.initialState.pageIndex || 0 });
            if (p.type === u.gotoPage) {
                var O = x.pageCount,
                    C = x.page,
                    D = S(p.pageIndex, f.pageIndex),
                    N = !1;
                return D > f.pageIndex ? N = O === -1 ? C.length >= f.pageSize : D < O : D < f.pageIndex && (N = D > -1), N ? s({}, f, { pageIndex: D }) : f
            }
            if (p.type === u.setPageSize) {
                var j = p.pageSize,
                    W = f.pageSize * f.pageIndex;
                return s({}, f, { pageIndex: Math.floor(W / j), pageSize: j })
            }
        }

        function z_(f) {
            var p = f.rows,
                v = f.autoResetPage,
                x = v === void 0 || v,
                O = f.manualExpandedKey,
                C = O === void 0 ? "expanded" : O,
                D = f.plugins,
                N = f.pageCount,
                j = f.paginateExpandedRows,
                W = j === void 0 || j,
                re = f.expandSubRows,
                Q = re === void 0 || re,
                J = f.state,
                V = J.pageSize,
                ee = J.pageIndex,
                le = J.expanded,
                ue = J.globalFilter,
                xe = J.filters,
                Ae = J.groupBy,
                ye = J.sortBy,
                ie = f.dispatch,
                Pe = f.data,
                fe = f.manualPagination;
            m(D, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
            var Oe = k(x);
            P(function() { Oe() && ie({ type: u.resetPage }) }, [ie, fe ? null : Pe, ue, xe, Ae, ye]);
            var je = fe ? N : Math.ceil(p.length / V),
                ke = r.useMemo(function() { return je > 0 ? [].concat(new Array(je)).fill(null).map(function(Be, gt) { return gt }) : [] }, [je]),
                Me = r.useMemo(function() {
                    var Be;
                    if (fe) Be = p;
                    else {
                        var gt = V * ee,
                            Jt = gt + V;
                        Be = p.slice(gt, Jt)
                    }
                    return W ? Be : te(Be, { manualExpandedKey: C, expanded: le, expandSubRows: Q })
                }, [Q, le, C, fe, ee, V, W, p]),
                Ge = ee > 0,
                De = je === -1 ? Me.length >= V : ee < je - 1,
                Ve = r.useCallback(function(Be) { ie({ type: u.gotoPage, pageIndex: Be }) }, [ie]),
                We = r.useCallback(function() { return Ve(function(Be) { return Be - 1 }) }, [Ve]),
                nt = r.useCallback(function() { return Ve(function(Be) { return Be + 1 }) }, [Ve]),
                be = r.useCallback(function(Be) { ie({ type: u.setPageSize, pageSize: Be }) }, [ie]);
            Object.assign(f, { pageOptions: ke, pageCount: je, page: Me, canPreviousPage: Ge, canNextPage: De, gotoPage: Ve, previousPage: We, nextPage: nt, setPageSize: be })
        }
        lg.pluginName = "usePagination", u.resetPivot = "resetPivot", u.togglePivot = "togglePivot";
        var ug = function(f) { f.getPivotToggleProps = [B_], f.stateReducers.push(W_), f.useInstanceAfterData.push(H_), f.allColumns.push(Y_), f.accessValue.push($_), f.materializedColumns.push(V_), f.materializedColumnsDeps.push(U_), f.visibleColumns.push(G_), f.visibleColumnsDeps.push(X_), f.useInstance.push(q_), f.prepareRow.push(K_) };
        ug.pluginName = "usePivotColumns";
        var cg = [],
            B_ = function(f, p) { var v = p.header; return [f, { onClick: v.canPivot ? function(x) { x.persist(), v.togglePivot() } : void 0, style: { cursor: v.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }] };

        function W_(f, p, v, x) {
            if (p.type === u.init) return s({ pivotColumns: cg }, f);
            if (p.type === u.resetPivot) return s({}, f, { pivotColumns: x.initialState.pivotColumns || cg });
            if (p.type === u.togglePivot) {
                var O = p.columnId,
                    C = p.value,
                    D = C !== void 0 ? C : !f.pivotColumns.includes(O);
                return s({}, f, D ? { pivotColumns: [].concat(f.pivotColumns, [O]) } : { pivotColumns: f.pivotColumns.filter(function(N) { return N !== O }) })
            }
        }

        function H_(f) { f.allColumns.forEach(function(p) { p.isPivotSource = f.state.pivotColumns.includes(p.id) }) }

        function Y_(f, p) { var v = p.instance; return f.forEach(function(x) { x.isPivotSource = v.state.pivotColumns.includes(x.id), x.uniqueValues = new Set }), f }

        function $_(f, p) { var v = p.column; return v.uniqueValues && f !== void 0 && v.uniqueValues.add(f), f }

        function V_(f, p) {
            var v = p.instance,
                x = v.allColumns,
                O = v.state;
            if (!O.pivotColumns.length || !O.groupBy || !O.groupBy.length) return f;
            var C = O.pivotColumns.map(function(j) { return x.find(function(W) { return W.id === j }) }).filter(Boolean),
                D = x.filter(function(j) { return !j.isPivotSource && !O.groupBy.includes(j.id) && !O.pivotColumns.includes(j.id) }),
                N = z(function j(W, re, Q) { W === void 0 && (W = 0), Q === void 0 && (Q = []); var J = C[W]; return J ? Array.from(J.uniqueValues).sort().map(function(V) { var ee = s({}, J, { Header: J.PivotHeader || typeof J.header == "string" ? J.Header + ": " + V : V, isPivotGroup: !0, parent: re, depth: W, id: re ? re.id + "." + J.id + "." + V : J.id + "." + V, pivotValue: V }); return ee.columns = j(W + 1, ee, [].concat(Q, [function(le) { return le.values[J.id] === V }])), ee }) : D.map(function(V) { return s({}, V, { canPivot: !1, isPivoted: !0, parent: re, depth: W, id: "" + (re ? re.id + "." + V.id : V.id), accessor: function(ee, le, ue) { if (Q.every(function(xe) { return xe(ue) })) return ue.values[V.id] } }) }) }());
            return [].concat(f, N)
        }

        function U_(f, p) {
            var v = p.instance.state,
                x = v.pivotColumns,
                O = v.groupBy;
            return [].concat(f, [x, O])
        }

        function G_(f, p) { var v = p.instance.state; return f = f.filter(function(x) { return !x.isPivotSource }), v.pivotColumns.length && v.groupBy && v.groupBy.length && (f = f.filter(function(x) { return x.isGrouped || x.isPivoted })), f }

        function X_(f, p) { var v = p.instance; return [].concat(f, [v.state.pivotColumns, v.state.groupBy]) }

        function q_(f) {
            var p = f.columns,
                v = f.allColumns,
                x = f.flatHeaders,
                O = f.getHooks,
                C = f.plugins,
                D = f.dispatch,
                N = f.autoResetPivot,
                j = N === void 0 || N,
                W = f.manaulPivot,
                re = f.disablePivot,
                Q = f.defaultCanPivot;
            m(C, ["useGroupBy"], "usePivotColumns");
            var J = k(f);
            v.forEach(function(ee) {
                var le = ee.accessor,
                    ue = ee.defaultPivot,
                    xe = ee.disablePivot;
                ee.canPivot = le ? H(ee.canPivot, xe !== !0 && void 0, re !== !0 && void 0, !0) : H(ee.canPivot, ue, Q, !1), ee.canPivot && (ee.togglePivot = function() { return f.togglePivot(ee.id) }), ee.Aggregated = ee.Aggregated || ee.Cell
            }), x.forEach(function(ee) { ee.getPivotToggleProps = w(O().getPivotToggleProps, { instance: J(), header: ee }) });
            var V = k(j);
            P(function() { V() && D({ type: u.resetPivot }) }, [D, W ? null : p]), Object.assign(f, { togglePivot: function(ee, le) { D({ type: u.togglePivot, columnId: ee, value: le }) } })
        }

        function K_(f) { f.allCells.forEach(function(p) { p.isPivoted = p.column.isPivoted }) }
        u.resetSelectedRows = "resetSelectedRows", u.toggleAllRowsSelected = "toggleAllRowsSelected", u.toggleRowSelected = "toggleRowSelected", u.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
        var fg = function(f) { f.getToggleRowSelectedProps = [Q_], f.getToggleAllRowsSelectedProps = [Z_], f.getToggleAllPageRowsSelectedProps = [J_], f.stateReducers.push(eS), f.useInstance.push(tS), f.prepareRow.push(nS) };
        fg.pluginName = "useRowSelect";
        var Q_ = function(f, p) {
                var v = p.instance,
                    x = p.row,
                    O = v.manualRowSelectedKey,
                    C = O === void 0 ? "isSelected" : O;
                return [f, { onChange: function(D) { x.toggleRowSelected(D.target.checked) }, style: { cursor: "pointer" }, checked: !(!x.original || !x.original[C]) || x.isSelected, title: "Toggle Row Selected", indeterminate: x.isSomeSelected }]
            },
            Z_ = function(f, p) { var v = p.instance; return [f, { onChange: function(x) { v.toggleAllRowsSelected(x.target.checked) }, style: { cursor: "pointer" }, checked: v.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: Boolean(!v.isAllRowsSelected && Object.keys(v.state.selectedRowIds).length) }] },
            J_ = function(f, p) { var v = p.instance; return [f, { onChange: function(x) { v.toggleAllPageRowsSelected(x.target.checked) }, style: { cursor: "pointer" }, checked: v.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: Boolean(!v.isAllPageRowsSelected && v.page.some(function(x) { var O = x.id; return v.state.selectedRowIds[O] })) }] };

        function eS(f, p, v, x) {
            if (p.type === u.init) return s({ selectedRowIds: {} }, f);
            if (p.type === u.resetSelectedRows) return s({}, f, { selectedRowIds: x.initialState.selectedRowIds || {} });
            if (p.type === u.toggleAllRowsSelected) {
                var O = p.value,
                    C = x.isAllRowsSelected,
                    D = x.rowsById,
                    N = x.nonGroupedRowsById,
                    j = N === void 0 ? D : N,
                    W = O !== void 0 ? O : !C,
                    re = Object.assign({}, f.selectedRowIds);
                return W ? Object.keys(j).forEach(function(Ve) { re[Ve] = !0 }) : Object.keys(j).forEach(function(Ve) { delete re[Ve] }), s({}, f, { selectedRowIds: re })
            }
            if (p.type === u.toggleRowSelected) {
                var Q = p.id,
                    J = p.value,
                    V = x.rowsById,
                    ee = x.selectSubRows,
                    le = ee === void 0 || ee,
                    ue = x.getSubRows,
                    xe = f.selectedRowIds[Q],
                    Ae = J !== void 0 ? J : !xe;
                if (xe === Ae) return f;
                var ye = s({}, f.selectedRowIds);
                return function Ve(We) { var nt = V[We]; if (nt && (nt.isGrouped || (Ae ? ye[We] = !0 : delete ye[We]), le && ue(nt))) return ue(nt).forEach(function(be) { return Ve(be.id) }) }(Q), s({}, f, { selectedRowIds: ye })
            }
            if (p.type === u.toggleAllPageRowsSelected) {
                var ie = p.value,
                    Pe = x.page,
                    fe = x.rowsById,
                    Oe = x.selectSubRows,
                    je = Oe === void 0 || Oe,
                    ke = x.isAllPageRowsSelected,
                    Me = x.getSubRows,
                    Ge = ie !== void 0 ? ie : !ke,
                    De = s({}, f.selectedRowIds);
                return Pe.forEach(function(Ve) { return function We(nt) { var be = fe[nt]; if (be.isGrouped || (Ge ? De[nt] = !0 : delete De[nt]), je && Me(be)) return Me(be).forEach(function(Be) { return We(Be.id) }) }(Ve.id) }), s({}, f, { selectedRowIds: De })
            }
            return f
        }

        function tS(f) {
            var p = f.data,
                v = f.rows,
                x = f.getHooks,
                O = f.plugins,
                C = f.rowsById,
                D = f.nonGroupedRowsById,
                N = D === void 0 ? C : D,
                j = f.autoResetSelectedRows,
                W = j === void 0 || j,
                re = f.state.selectedRowIds,
                Q = f.selectSubRows,
                J = Q === void 0 || Q,
                V = f.dispatch,
                ee = f.page,
                le = f.getSubRows;
            m(O, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
            var ue = r.useMemo(function() {
                    var Me = [];
                    return v.forEach(function(Ge) {
                        var De = J ? function Ve(We, nt, be) {
                            if (nt[We.id]) return !0;
                            var Be = be(We);
                            if (Be && Be.length) {
                                var gt = !0,
                                    Jt = !1;
                                return Be.forEach(function(Ce) { Jt && !gt || (Ve(Ce, nt, be) ? Jt = !0 : gt = !1) }), !!gt || !!Jt && null
                            }
                            return !1
                        }(Ge, re, le) : !!re[Ge.id];
                        Ge.isSelected = !!De, Ge.isSomeSelected = De === null, De && Me.push(Ge)
                    }), Me
                }, [v, J, re, le]),
                xe = Boolean(Object.keys(N).length && Object.keys(re).length),
                Ae = xe;
            xe && Object.keys(N).some(function(Me) { return !re[Me] }) && (xe = !1), xe || ee && ee.length && ee.some(function(Me) { var Ge = Me.id; return !re[Ge] }) && (Ae = !1);
            var ye = k(W);
            P(function() { ye() && V({ type: u.resetSelectedRows }) }, [V, p]);
            var ie = r.useCallback(function(Me) { return V({ type: u.toggleAllRowsSelected, value: Me }) }, [V]),
                Pe = r.useCallback(function(Me) { return V({ type: u.toggleAllPageRowsSelected, value: Me }) }, [V]),
                fe = r.useCallback(function(Me, Ge) { return V({ type: u.toggleRowSelected, id: Me, value: Ge }) }, [V]),
                Oe = k(f),
                je = w(x().getToggleAllRowsSelectedProps, { instance: Oe() }),
                ke = w(x().getToggleAllPageRowsSelectedProps, { instance: Oe() });
            Object.assign(f, { selectedFlatRows: ue, isAllRowsSelected: xe, isAllPageRowsSelected: Ae, toggleRowSelected: fe, toggleAllRowsSelected: ie, getToggleAllRowsSelectedProps: je, getToggleAllPageRowsSelectedProps: ke, toggleAllPageRowsSelected: Pe })
        }

        function nS(f, p) {
            var v = p.instance;
            f.toggleRowSelected = function(x) { return v.toggleRowSelected(f.id, x) }, f.getToggleRowSelectedProps = w(v.getHooks().getToggleRowSelectedProps, { instance: v, row: f })
        }
        var dg = function(f) { return {} },
            hg = function(f) { return {} };
        u.setRowState = "setRowState", u.setCellState = "setCellState", u.resetRowState = "resetRowState";
        var pg = function(f) { f.stateReducers.push(rS), f.useInstance.push(iS), f.prepareRow.push(oS) };

        function rS(f, p, v, x) {
            var O = x.initialRowStateAccessor,
                C = O === void 0 ? dg : O,
                D = x.initialCellStateAccessor,
                N = D === void 0 ? hg : D,
                j = x.rowsById;
            if (p.type === u.init) return s({ rowState: {} }, f);
            if (p.type === u.resetRowState) return s({}, f, { rowState: x.initialState.rowState || {} });
            if (p.type === u.setRowState) {
                var W, re = p.rowId,
                    Q = p.value,
                    J = f.rowState[re] !== void 0 ? f.rowState[re] : C(j[re]);
                return s({}, f, { rowState: s({}, f.rowState, (W = {}, W[re] = S(Q, J), W)) })
            }
            if (p.type === u.setCellState) {
                var V, ee, le, ue, xe, Ae = p.rowId,
                    ye = p.columnId,
                    ie = p.value,
                    Pe = f.rowState[Ae] !== void 0 ? f.rowState[Ae] : C(j[Ae]),
                    fe = (Pe == null || (V = Pe.cellState) == null ? void 0 : V[ye]) !== void 0 ? Pe.cellState[ye] : N((ee = j[Ae]) == null || (le = ee.cells) == null ? void 0 : le.find(function(Oe) { return Oe.column.id === ye }));
                return s({}, f, { rowState: s({}, f.rowState, (xe = {}, xe[Ae] = s({}, Pe, { cellState: s({}, Pe.cellState || {}, (ue = {}, ue[ye] = S(ie, fe), ue)) }), xe)) })
            }
        }

        function iS(f) {
            var p = f.autoResetRowState,
                v = p === void 0 || p,
                x = f.data,
                O = f.dispatch,
                C = r.useCallback(function(j, W) { return O({ type: u.setRowState, rowId: j, value: W }) }, [O]),
                D = r.useCallback(function(j, W, re) { return O({ type: u.setCellState, rowId: j, columnId: W, value: re }) }, [O]),
                N = k(v);
            P(function() { N() && O({ type: u.resetRowState }) }, [x]), Object.assign(f, { setRowState: C, setCellState: D })
        }

        function oS(f, p) {
            var v = p.instance,
                x = v.initialRowStateAccessor,
                O = x === void 0 ? dg : x,
                C = v.initialCellStateAccessor,
                D = C === void 0 ? hg : C,
                N = v.state.rowState;
            f && (f.state = N[f.id] !== void 0 ? N[f.id] : O(f), f.setState = function(j) { return v.setRowState(f.id, j) }, f.cells.forEach(function(j) { f.state.cellState || (f.state.cellState = {}), j.state = f.state.cellState[j.column.id] !== void 0 ? f.state.cellState[j.column.id] : D(j), j.setState = function(W) { return v.setCellState(f.id, j.column.id, W) } }))
        }
        pg.pluginName = "useRowState", u.resetColumnOrder = "resetColumnOrder", u.setColumnOrder = "setColumnOrder";
        var mg = function(f) { f.stateReducers.push(sS), f.visibleColumnsDeps.push(function(p, v) { var x = v.instance; return [].concat(p, [x.state.columnOrder]) }), f.visibleColumns.push(aS), f.useInstance.push(lS) };

        function sS(f, p, v, x) { return p.type === u.init ? s({ columnOrder: [] }, f) : p.type === u.resetColumnOrder ? s({}, f, { columnOrder: x.initialState.columnOrder || [] }) : p.type === u.setColumnOrder ? s({}, f, { columnOrder: S(p.columnOrder, f.columnOrder) }) : void 0 }

        function aS(f, p) {
            var v = p.instance.state.columnOrder;
            if (!v || !v.length) return f;
            for (var x = [].concat(v), O = [].concat(f), C = [], D = function() {
                    var N = x.shift(),
                        j = O.findIndex(function(W) { return W.id === N });
                    j > -1 && C.push(O.splice(j, 1)[0])
                }; O.length && x.length;) D();
            return [].concat(C, O)
        }

        function lS(f) {
            var p = f.dispatch;
            f.setColumnOrder = r.useCallback(function(v) { return p({ type: u.setColumnOrder, columnOrder: v }) }, [p])
        }
        mg.pluginName = "useColumnOrder", h.canResize = !0, u.columnStartResizing = "columnStartResizing", u.columnResizing = "columnResizing", u.columnDoneResizing = "columnDoneResizing", u.resetResize = "resetResize";
        var gg = function(f) { f.getResizerProps = [uS], f.getHeaderProps.push({ style: { position: "relative" } }), f.stateReducers.push(cS), f.useInstance.push(dS), f.useInstanceBeforeDimensions.push(fS) },
            uS = function(f, p) {
                var v = p.instance,
                    x = p.header,
                    O = v.dispatch,
                    C = function(D, N) {
                        var j = !1;
                        if (D.type === "touchstart") {
                            if (D.touches && D.touches.length > 1) return;
                            j = !0
                        }
                        var W, re, Q = function(ye) { var ie = []; return function Pe(fe) { fe.columns && fe.columns.length && fe.columns.map(Pe), ie.push(fe) }(ye), ie }(N).map(function(ye) { return [ye.id, ye.totalWidth] }),
                            J = j ? Math.round(D.touches[0].clientX) : D.clientX,
                            V = function() { window.cancelAnimationFrame(W), W = null, O({ type: u.columnDoneResizing }) },
                            ee = function() { window.cancelAnimationFrame(W), W = null, O({ type: u.columnResizing, clientX: re }) },
                            le = function(ye) { re = ye, W || (W = window.requestAnimationFrame(ee)) },
                            ue = { mouse: { moveEvent: "mousemove", moveHandler: function(ye) { return le(ye.clientX) }, upEvent: "mouseup", upHandler: function(ye) { document.removeEventListener("mousemove", ue.mouse.moveHandler), document.removeEventListener("mouseup", ue.mouse.upHandler), V() } }, touch: { moveEvent: "touchmove", moveHandler: function(ye) { return ye.cancelable && (ye.preventDefault(), ye.stopPropagation()), le(ye.touches[0].clientX), !1 }, upEvent: "touchend", upHandler: function(ye) { document.removeEventListener(ue.touch.moveEvent, ue.touch.moveHandler), document.removeEventListener(ue.touch.upEvent, ue.touch.moveHandler), V() } } },
                            xe = j ? ue.touch : ue.mouse,
                            Ae = !! function() {
                                if (typeof L == "boolean") return L;
                                var ye = !1;
                                try {
                                    var ie = {get passive() { return ye = !0, !1 } };
                                    window.addEventListener("test", null, ie), window.removeEventListener("test", null, ie)
                                } catch { ye = !1 }
                                return L = ye
                            }() && { passive: !1 };
                        document.addEventListener(xe.moveEvent, xe.moveHandler, Ae), document.addEventListener(xe.upEvent, xe.upHandler, Ae), O({ type: u.columnStartResizing, columnId: N.id, columnWidth: N.totalWidth, headerIdWidths: Q, clientX: J })
                    };
                return [f, { onMouseDown: function(D) { return D.persist() || C(D, x) }, onTouchStart: function(D) { return D.persist() || C(D, x) }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }]
            };

        function cS(f, p) {
            if (p.type === u.init) return s({ columnResizing: { columnWidths: {} } }, f);
            if (p.type === u.resetResize) return s({}, f, { columnResizing: { columnWidths: {} } });
            if (p.type === u.columnStartResizing) {
                var v = p.clientX,
                    x = p.columnId,
                    O = p.columnWidth,
                    C = p.headerIdWidths;
                return s({}, f, { columnResizing: s({}, f.columnResizing, { startX: v, headerIdWidths: C, columnWidth: O, isResizingColumn: x }) })
            }
            if (p.type === u.columnResizing) {
                var D = p.clientX,
                    N = f.columnResizing,
                    j = N.startX,
                    W = N.columnWidth,
                    re = N.headerIdWidths,
                    Q = (D - j) / W,
                    J = {};
                return (re === void 0 ? [] : re).forEach(function(V) {
                    var ee = V[0],
                        le = V[1];
                    J[ee] = Math.max(le + le * Q, 0)
                }), s({}, f, { columnResizing: s({}, f.columnResizing, { columnWidths: s({}, f.columnResizing.columnWidths, {}, J) }) })
            }
            return p.type === u.columnDoneResizing ? s({}, f, { columnResizing: s({}, f.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0
        }
        gg.pluginName = "useResizeColumns";
        var fS = function(f) {
            var p = f.flatHeaders,
                v = f.disableResizing,
                x = f.getHooks,
                O = f.state.columnResizing,
                C = k(f);
            p.forEach(function(D) {
                var N = H(D.disableResizing !== !0 && void 0, v !== !0 && void 0, !0);
                D.canResize = N, D.width = O.columnWidths[D.id] || D.originalWidth || D.width, D.isResizing = O.isResizingColumn === D.id, N && (D.getResizerProps = w(x().getResizerProps, { instance: C(), header: D }))
            })
        };

        function dS(f) {
            var p = f.plugins,
                v = f.dispatch,
                x = f.autoResetResize,
                O = x === void 0 || x,
                C = f.columns;
            m(p, ["useAbsoluteLayout"], "useResizeColumns");
            var D = k(O);
            P(function() { D() && v({ type: u.resetResize }) }, [C]);
            var N = r.useCallback(function() { return v({ type: u.resetResize }) }, [v]);
            Object.assign(f, { resetResizing: N })
        }
        var Cf = { position: "absolute", top: 0 },
            yg = function(f) { f.getTableBodyProps.push(Ml), f.getRowProps.push(Ml), f.getHeaderGroupProps.push(Ml), f.getFooterGroupProps.push(Ml), f.getHeaderProps.push(function(p, v) { var x = v.column; return [p, { style: s({}, Cf, { left: x.totalLeft + "px", width: x.totalWidth + "px" }) }] }), f.getCellProps.push(function(p, v) { var x = v.cell; return [p, { style: s({}, Cf, { left: x.column.totalLeft + "px", width: x.column.totalWidth + "px" }) }] }), f.getFooterProps.push(function(p, v) { var x = v.column; return [p, { style: s({}, Cf, { left: x.totalLeft + "px", width: x.totalWidth + "px" }) }] }) };
        yg.pluginName = "useAbsoluteLayout";
        var Ml = function(f, p) { return [f, { style: { position: "relative", width: p.instance.totalColumnsWidth + "px" } }] },
            Mf = { display: "inline-block", boxSizing: "border-box" },
            Ef = function(f, p) { return [f, { style: { display: "flex", width: p.instance.totalColumnsWidth + "px" } }] },
            vg = function(f) { f.getRowProps.push(Ef), f.getHeaderGroupProps.push(Ef), f.getFooterGroupProps.push(Ef), f.getHeaderProps.push(function(p, v) { var x = v.column; return [p, { style: s({}, Mf, { width: x.totalWidth + "px" }) }] }), f.getCellProps.push(function(p, v) { var x = v.cell; return [p, { style: s({}, Mf, { width: x.column.totalWidth + "px" }) }] }), f.getFooterProps.push(function(p, v) { var x = v.column; return [p, { style: s({}, Mf, { width: x.totalWidth + "px" }) }] }) };

        function wg(f) { f.getTableProps.push(hS), f.getRowProps.push(Of), f.getHeaderGroupProps.push(Of), f.getFooterGroupProps.push(Of), f.getHeaderProps.push(pS), f.getCellProps.push(mS), f.getFooterProps.push(gS) }
        vg.pluginName = "useBlockLayout", wg.pluginName = "useFlexLayout";
        var hS = function(f, p) { return [f, { style: { minWidth: p.instance.totalColumnsMinWidth + "px" } }] },
            Of = function(f, p) { return [f, { style: { display: "flex", flex: "1 0 auto", minWidth: p.instance.totalColumnsMinWidth + "px" } }] },
            pS = function(f, p) { var v = p.column; return [f, { style: { boxSizing: "border-box", flex: v.totalFlexWidth ? v.totalFlexWidth + " 0 auto" : void 0, minWidth: v.totalMinWidth + "px", width: v.totalWidth + "px" } }] },
            mS = function(f, p) { var v = p.cell; return [f, { style: { boxSizing: "border-box", flex: v.column.totalFlexWidth + " 0 auto", minWidth: v.column.totalMinWidth + "px", width: v.column.totalWidth + "px" } }] },
            gS = function(f, p) { var v = p.column; return [f, { style: { boxSizing: "border-box", flex: v.totalFlexWidth ? v.totalFlexWidth + " 0 auto" : void 0, minWidth: v.totalMinWidth + "px", width: v.totalWidth + "px" } }] };

        function xg(f) { f.stateReducers.push(xS), f.getTableProps.push(yS), f.getHeaderProps.push(vS), f.getRowProps.push(wS) }
        u.columnStartResizing = "columnStartResizing", u.columnResizing = "columnResizing", u.columnDoneResizing = "columnDoneResizing", u.resetResize = "resetResize", xg.pluginName = "useGridLayout";
        var yS = function(f, p) { var v = p.instance; return [f, { style: { display: "grid", gridTemplateColumns: v.visibleColumns.map(function(x) { var O; return v.state.gridLayout.columnWidths[x.id] ? v.state.gridLayout.columnWidths[x.id] + "px" : ((O = v.state.columnResizing) == null ? void 0 : O.isResizingColumn) ? v.state.gridLayout.startWidths[x.id] + "px" : typeof x.width == "number" ? x.width + "px" : x.width }).join(" ") } }] },
            vS = function(f, p) { var v = p.column; return [f, { id: "header-cell-" + v.id, style: { position: "sticky", gridColumn: "span " + v.totalVisibleHeaderCount } }] },
            wS = function(f, p) { var v = p.row; return v.isExpanded ? [f, { style: { gridColumn: "1 / " + (v.cells.length + 1) } }] : [f, {}] };

        function xS(f, p, v, x) {
            if (p.type === u.init) return s({ gridLayout: { columnWidths: {} } }, f);
            if (p.type === u.resetResize) return s({}, f, { gridLayout: { columnWidths: {} } });
            if (p.type === u.columnStartResizing) {
                var O = p.columnId,
                    C = p.headerIdWidths,
                    D = Df(O);
                if (D !== void 0) {
                    var N = x.visibleColumns.reduce(function(ie, Pe) { var fe; return s({}, ie, ((fe = {})[Pe.id] = Df(Pe.id), fe)) }, {}),
                        j = x.visibleColumns.reduce(function(ie, Pe) { var fe; return s({}, ie, ((fe = {})[Pe.id] = Pe.minWidth, fe)) }, {}),
                        W = x.visibleColumns.reduce(function(ie, Pe) { var fe; return s({}, ie, ((fe = {})[Pe.id] = Pe.maxWidth, fe)) }, {}),
                        re = C.map(function(ie) { var Pe = ie[0]; return [Pe, Df(Pe)] });
                    return s({}, f, { gridLayout: s({}, f.gridLayout, { startWidths: N, minWidths: j, maxWidths: W, headerIdGridWidths: re, columnWidth: D }) })
                }
                return f
            }
            if (p.type === u.columnResizing) {
                var Q = p.clientX,
                    J = f.columnResizing.startX,
                    V = f.gridLayout,
                    ee = V.columnWidth,
                    le = V.minWidths,
                    ue = V.maxWidths,
                    xe = V.headerIdGridWidths,
                    Ae = (Q - J) / ee,
                    ye = {};
                return (xe === void 0 ? [] : xe).forEach(function(ie) {
                    var Pe = ie[0],
                        fe = ie[1];
                    ye[Pe] = Math.min(Math.max(le[Pe], fe + fe * Ae), ue[Pe])
                }), s({}, f, { gridLayout: s({}, f.gridLayout, { columnWidths: s({}, f.gridLayout.columnWidths, {}, ye) }) })
            }
            return p.type === u.columnDoneResizing ? s({}, f, { gridLayout: s({}, f.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0
        }

        function Df(f) { var p, v = (p = document.getElementById("header-cell-" + f)) == null ? void 0 : p.offsetWidth; if (v !== void 0) return v }
        n._UNSTABLE_usePivotColumns = ug, n.actions = u, n.defaultColumn = h, n.defaultGroupByFn = kl, n.defaultOrderByFn = ag, n.defaultRenderer = c, n.emptyRenderer = d, n.ensurePluginOrder = m, n.flexRender = I, n.functionalUpdate = S, n.loopHooks = g, n.makePropGetter = w, n.makeRenderer = T, n.reduceHooks = b, n.safeUseLayoutEffect = E, n.useAbsoluteLayout = yg, n.useAsyncDebounce = function(f, p) {
            p === void 0 && (p = 0);
            var v = r.useRef({}),
                x = k(f),
                O = k(p);
            return r.useCallback(function() {
                var C = o(regeneratorRuntime.mark(function D() {
                    var N, j, W, re = arguments;
                    return regeneratorRuntime.wrap(function(Q) {
                        for (;;) switch (Q.prev = Q.next) {
                            case 0:
                                for (N = re.length, j = new Array(N), W = 0; W < N; W++) j[W] = re[W];
                                return v.current.promise || (v.current.promise = new Promise(function(J, V) { v.current.resolve = J, v.current.reject = V })), v.current.timeout && clearTimeout(v.current.timeout), v.current.timeout = setTimeout(o(regeneratorRuntime.mark(function J() {
                                    return regeneratorRuntime.wrap(function(V) {
                                        for (;;) switch (V.prev = V.next) {
                                            case 0:
                                                return delete v.current.timeout, V.prev = 1, V.t0 = v.current, V.next = 5, x().apply(void 0, j);
                                            case 5:
                                                V.t1 = V.sent, V.t0.resolve.call(V.t0, V.t1), V.next = 12;
                                                break;
                                            case 9:
                                                V.prev = 9, V.t2 = V.catch(1), v.current.reject(V.t2);
                                            case 12:
                                                return V.prev = 12, delete v.current.promise, V.finish(12);
                                            case 15:
                                            case "end":
                                                return V.stop()
                                        }
                                    }, J, null, [
                                        [1, 9, 12, 15]
                                    ])
                                })), O()), Q.abrupt("return", v.current.promise);
                            case 5:
                            case "end":
                                return Q.stop()
                        }
                    }, D)
                }));
                return function() { return C.apply(this, arguments) }
            }(), [x, O])
        }, n.useBlockLayout = vg, n.useColumnOrder = mg, n.useExpanded = xs, n.useFilters = B, n.useFlexLayout = wg, n.useGetLatest = k, n.useGlobalFilter = we, n.useGridLayout = xg, n.useGroupBy = vi, n.useMountedLayoutEffect = P, n.usePagination = lg, n.useResizeColumns = gg, n.useRowSelect = fg, n.useRowState = pg, n.useSortBy = sg, n.useTable = function(f) {
            for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), x = 1; x < p; x++) v[x - 1] = arguments[x];
            f = xl(f), v = [pl].concat(v);
            var O = r.useRef({}),
                C = k(O.current);
            Object.assign(C(), s({}, f, { plugins: v, hooks: mf() })), v.filter(Boolean).forEach(function(Ce) { Ce(C().hooks) });
            var D = k(C().hooks);
            C().getHooks = D, delete C().hooks, Object.assign(C(), b(D().useOptions, xl(f)));
            var N = C(),
                j = N.data,
                W = N.columns,
                re = N.initialState,
                Q = N.defaultColumn,
                J = N.getSubRows,
                V = N.getRowId,
                ee = N.stateReducer,
                le = N.useControlledState,
                ue = k(ee),
                xe = r.useCallback(function(Ce, ht) { if (!ht.type) throw console.info({ action: ht }), new Error("Unknown Action \u{1F446}"); return [].concat(D().stateReducers, Array.isArray(ue()) ? ue() : [ue()]).reduce(function(Ct, en) { return en(Ct, ht, Ce, C()) || Ct }, Ce) }, [D, ue, C]),
                Ae = r.useReducer(xe, void 0, function() { return xe(re, { type: u.init }) }),
                ye = Ae[0],
                ie = Ae[1],
                Pe = b([].concat(D().useControlledState, [le]), ye, { instance: C() });
            Object.assign(C(), { state: Pe, dispatch: ie });
            var fe = r.useMemo(function() { return U(b(D().columns, W, { instance: C() })) }, [D, C, W].concat(b(D().columnsDeps, [], { instance: C() })));
            C().columns = fe;
            var Oe = r.useMemo(function() { return b(D().allColumns, z(fe), { instance: C() }).map(ve) }, [fe, D, C].concat(b(D().allColumnsDeps, [], { instance: C() })));
            C().allColumns = Oe;
            var je = r.useMemo(function() {
                    for (var Ce = [], ht = [], Ct = {}, en = [].concat(Oe); en.length;) {
                        var Tt = en.shift();
                        wf({ data: j, rows: Ce, flatRows: ht, rowsById: Ct, column: Tt, getRowId: V, getSubRows: J, accessValueHooks: D().accessValue, getInstance: C })
                    }
                    return [Ce, ht, Ct]
                }, [Oe, j, V, J, D, C]),
                ke = je[0],
                Me = je[1],
                Ge = je[2];
            Object.assign(C(), { rows: ke, initialRows: [].concat(ke), flatRows: Me, rowsById: Ge }), g(D().useInstanceAfterData, C());
            var De = r.useMemo(function() { return b(D().visibleColumns, Oe, { instance: C() }).map(function(Ce) { return Ee(Ce, Q) }) }, [D, Oe, C, Q].concat(b(D().visibleColumnsDeps, [], { instance: C() })));
            Oe = r.useMemo(function() { var Ce = [].concat(De); return Oe.forEach(function(ht) { Ce.find(function(Ct) { return Ct.id === ht.id }) || Ce.push(ht) }), Ce }, [Oe, De]), C().allColumns = Oe;
            var Ve = r.useMemo(function() { return b(D().headerGroups, he(De, Q), C()) }, [D, De, Q, C].concat(b(D().headerGroupsDeps, [], { instance: C() })));
            C().headerGroups = Ve;
            var We = r.useMemo(function() { return Ve.length ? Ve[0].headers : [] }, [Ve]);
            C().headers = We, C().flatHeaders = Ve.reduce(function(Ce, ht) { return [].concat(Ce, ht.headers) }, []), g(D().useInstanceBeforeDimensions, C());
            var nt = De.filter(function(Ce) { return Ce.isVisible }).map(function(Ce) { return Ce.id }).sort().join("_");
            De = r.useMemo(function() { return De.filter(function(Ce) { return Ce.isVisible }) }, [De, nt]), C().visibleColumns = De;
            var be = ws(We),
                Be = be[0],
                gt = be[1],
                Jt = be[2];
            return C().totalColumnsMinWidth = Be, C().totalColumnsWidth = gt, C().totalColumnsMaxWidth = Jt, g(D().useInstance, C()), [].concat(C().flatHeaders, C().allColumns).forEach(function(Ce) { Ce.render = T(C(), Ce), Ce.getHeaderProps = w(D().getHeaderProps, { instance: C(), column: Ce }), Ce.getFooterProps = w(D().getFooterProps, { instance: C(), column: Ce }) }), C().headerGroups = r.useMemo(function() { return Ve.filter(function(Ce, ht) { return Ce.headers = Ce.headers.filter(function(Ct) { return Ct.headers ? function en(Tt) { return Tt.filter(function(jr) { return jr.headers ? en(jr.headers) : jr.isVisible }).length }(Ct.headers) : Ct.isVisible }), !!Ce.headers.length && (Ce.getHeaderGroupProps = w(D().getHeaderGroupProps, { instance: C(), headerGroup: Ce, index: ht }), Ce.getFooterGroupProps = w(D().getFooterGroupProps, { instance: C(), headerGroup: Ce, index: ht }), !0) }) }, [Ve, C, D]), C().footerGroups = [].concat(C().headerGroups).reverse(), C().prepareRow = r.useCallback(function(Ce) {
                Ce.getRowProps = w(D().getRowProps, { instance: C(), row: Ce }), Ce.allCells = Oe.map(function(ht) {
                    var Ct = Ce.values[ht.id],
                        en = { column: ht, row: Ce, value: Ct };
                    return en.getCellProps = w(D().getCellProps, { instance: C(), cell: en }), en.render = T(C(), ht, { row: Ce, cell: en, value: Ct }), en
                }), Ce.cells = De.map(function(ht) { return Ce.allCells.find(function(Ct) { return Ct.column.id === ht.id }) }), g(D().prepareRow, Ce, { instance: C() })
            }, [D, C, Oe, De]), C().getTableProps = w(D().getTableProps, { instance: C() }), C().getTableBodyProps = w(D().getTableBodyProps, { instance: C() }), g(D().useFinalInstance, C()), C()
        }, Object.defineProperty(n, "__esModule", { value: !0 })
    })
})(ig, ig.exports);
LF.exports = ig.exports;

function FF(e, t) { return Z.exports.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", "aria-hidden": "true", ref: t }, e), Z.exports.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 19l-7-7 7-7m8 14l-7-7 7-7" })) }
const IF = Z.exports.forwardRef(FF);
var hI = IF;

function NF(e, t) { return Z.exports.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", "aria-hidden": "true", ref: t }, e), Z.exports.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13 5l7 7-7 7M5 5l7 7-7 7" })) }
const jF = Z.exports.forwardRef(NF);
var pI = jF;

function zF(e, t) { return Z.exports.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", "aria-hidden": "true", ref: t }, e), Z.exports.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19l-7-7 7-7" })) }
const BF = Z.exports.forwardRef(zF);
var mI = BF;

function WF(e, t) { return Z.exports.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", "aria-hidden": "true", ref: t }, e), Z.exports.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" })) }
const HF = Z.exports.forwardRef(WF);
var gI = HF;

function YF(e, t) { return Z.exports.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", "aria-hidden": "true", ref: t }, e), Z.exports.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" })) }
const $F = Z.exports.forwardRef(YF);
var yI = $F;

function VF(e, t) { return Z.exports.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", "aria-hidden": "true", ref: t }, e), Z.exports.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" })) }
const UF = Z.exports.forwardRef(VF);
var vI = UF;

function GF(e, t) { return Z.exports.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", "aria-hidden": "true", ref: t }, e), Z.exports.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" })) }
const XF = Z.exports.forwardRef(GF);
var wI = XF;

function qF(e, t) { return Z.exports.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", "aria-hidden": "true", ref: t }, e), Z.exports.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" })) }
const KF = Z.exports.forwardRef(qF);
var xI = KF;

function QF(e, t) { return Z.exports.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", ref: t }, e), Z.exports.createElement("path", { fillRule: "evenodd", d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z", clipRule: "evenodd" })) }
const ZF = Z.exports.forwardRef(QF);
var bI = ZF;
export { Mp as A, hp as B, Ow as C, Fa as D, bI as E, uI as F, eI as G, Wk as H, zh as I, nI as J, vC as L, rI as N, Op as P, Si as R, yc as T, Z as a, lI as b, $k as c, ic as d, qi as e, iI as f, Kw as g, cI as h, Rp as i, oR as j, oI as k, fI as l, tI as m, LF as n, yI as o, sI as p, wI as q, aI as r, xI as s, dI as t, ba as u, vI as v, hI as w, mI as x, gI as y, pI as z };