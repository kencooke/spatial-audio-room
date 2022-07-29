!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).AIDenoiser = {})
}(this, (function(t) {
    "use strict";
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function e(t, e, r, n) {
        return new (r || (r = Promise))((function(o, i) {
            function s(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function a(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value,
                e instanceof r ? e : new r((function(t) {
                    t(e)
                }
                ))).then(s, a)
            }
            c((n = n.apply(t, e || [])).next())
        }
        ))
    }
    var r = {
        exports: {}
    };
    function n(t, e) {
        e = e || {};
        const r = t.numberOfChannels
          , n = t.sampleRate
          , i = e.float32 ? 3 : 1
          , s = 3 === i ? 32 : 16;
        let a;
        return a = 2 === r ? function(t, e) {
            const r = t.length + e.length
              , n = new Float32Array(r);
            let o = 0
              , i = 0;
            for (; o < r; )
                n[o++] = t[i],
                n[o++] = e[i],
                i++;
            return n
        }(t.getChannelData(0), t.getChannelData(1)) : t.getChannelData(0),
        function(t, e, r, n, i) {
            const s = i / 8
              , a = n * s
              , c = new ArrayBuffer(44 + t.length * s)
              , u = new DataView(c);
            o(u, 0, "RIFF"),
            u.setUint32(4, 36 + t.length * s, !0),
            o(u, 8, "WAVE"),
            o(u, 12, "fmt "),
            u.setUint32(16, 16, !0),
            u.setUint16(20, e, !0),
            u.setUint16(22, n, !0),
            u.setUint32(24, r, !0),
            u.setUint32(28, r * a, !0),
            u.setUint16(32, a, !0),
            u.setUint16(34, i, !0),
            o(u, 36, "data"),
            u.setUint32(40, t.length * s, !0),
            1 === e ? function(t, e, r) {
                for (let n = 0; n < r.length; n++,
                e += 2) {
                    const o = 32768 * r[n];
                    t.setInt16(e, Math.round(Math.max(-32768, Math.min(32767, o))), !0)
                }
            }(u, 44, t) : function(t, e, r) {
                for (let n = 0; n < r.length; n++,
                e += 4)
                    t.setFloat32(e, r[n], !0)
            }(u, 44, t);
            return c
        }(a, i, n, r, s)
    }
    function o(t, e, r) {
        for (let n = 0; n < r.length; n++)
            t.setUint8(e + n, r.charCodeAt(n))
    }
    !function(t, e) {
        self,
        t.exports = (()=>{
            var t = {
                3476: (t,e,r)=>{
                    t.exports = r(7460)
                }
                ,
                4341: (t,e,r)=>{
                    t.exports = r(3685)
                }
                ,
                3536: (t,e,r)=>{
                    var n = r(1910);
                    t.exports = n
                }
                ,
                8171: (t,e,r)=>{
                    r(6450);
                    var n = r(4058).Object
                      , o = t.exports = function(t, e, r) {
                        return n.defineProperty(t, e, r)
                    }
                    ;
                    n.defineProperty.sham && (o.sham = !0)
                }
                ,
                2956: (t,e,r)=>{
                    r(7627),
                    r(6274),
                    r(5967),
                    r(8881),
                    r(4560),
                    r(7206),
                    r(4349),
                    r(7971);
                    var n = r(4058);
                    t.exports = n.Promise
                }
                ,
                3685: (t,e,r)=>{
                    var n = r(3536);
                    t.exports = n
                }
                ,
                4883: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(7475)
                      , i = r(9826)
                      , s = n.TypeError;
                    t.exports = function(t) {
                        if (o(t))
                            return t;
                        throw s(i(t) + " is not a function")
                    }
                }
                ,
                174: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(4284)
                      , i = r(9826)
                      , s = n.TypeError;
                    t.exports = function(t) {
                        if (o(t))
                            return t;
                        throw s(i(t) + " is not a constructor")
                    }
                }
                ,
                1851: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(7475)
                      , i = n.String
                      , s = n.TypeError;
                    t.exports = function(t) {
                        if ("object" == typeof t || o(t))
                            return t;
                        throw s("Can't set " + i(t) + " as a prototype")
                    }
                }
                ,
                8479: t=>{
                    t.exports = function() {}
                }
                ,
                5743: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(7046)
                      , i = n.TypeError;
                    t.exports = function(t, e) {
                        if (o(e, t))
                            return t;
                        throw i("Incorrect invocation")
                    }
                }
                ,
                6059: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(941)
                      , i = n.String
                      , s = n.TypeError;
                    t.exports = function(t) {
                        if (o(t))
                            return t;
                        throw s(i(t) + " is not an object")
                    }
                }
                ,
                1692: (t,e,r)=>{
                    var n = r(4529)
                      , o = r(9413)
                      , i = r(623)
                      , s = function(t) {
                        return function(e, r, s) {
                            var a, c = n(e), u = i(c), p = o(s, u);
                            if (t && r != r) {
                                for (; u > p; )
                                    if ((a = c[p++]) != a)
                                        return !0
                            } else
                                for (; u > p; p++)
                                    if ((t || p in c) && c[p] === r)
                                        return t || p || 0;
                            return !t && -1
                        }
                    };
                    t.exports = {
                        includes: s(!0),
                        indexOf: s(!1)
                    }
                }
                ,
                3765: (t,e,r)=>{
                    var n = r(5329);
                    t.exports = n([].slice)
                }
                ,
                1385: (t,e,r)=>{
                    var n = r(9813)("iterator")
                      , o = !1;
                    try {
                        var i = 0
                          , s = {
                            next: function() {
                                return {
                                    done: !!i++
                                }
                            },
                            return: function() {
                                o = !0
                            }
                        };
                        s[n] = function() {
                            return this
                        }
                        ,
                        Array.from(s, (function() {
                            throw 2
                        }
                        ))
                    } catch (t) {}
                    t.exports = function(t, e) {
                        if (!e && !o)
                            return !1;
                        var r = !1;
                        try {
                            var i = {};
                            i[n] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: r = !0
                                        }
                                    }
                                }
                            }
                            ,
                            t(i)
                        } catch (t) {}
                        return r
                    }
                }
                ,
                2532: (t,e,r)=>{
                    var n = r(5329)
                      , o = n({}.toString)
                      , i = n("".slice);
                    t.exports = function(t) {
                        return i(o(t), 8, -1)
                    }
                }
                ,
                9697: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(2885)
                      , i = r(7475)
                      , s = r(2532)
                      , a = r(9813)("toStringTag")
                      , c = n.Object
                      , u = "Arguments" == s(function() {
                        return arguments
                    }());
                    t.exports = o ? s : function(t) {
                        var e, r, n;
                        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function(t, e) {
                            try {
                                return t[e]
                            } catch (t) {}
                        }(e = c(t), a)) ? r : u ? s(e) : "Object" == (n = s(e)) && i(e.callee) ? "Arguments" : n
                    }
                }
                ,
                8694: (t,e,r)=>{
                    var n = r(5329)("".replace)
                      , o = String(Error("zxcasd").stack)
                      , i = /\n\s*at [^:]*:[^\n]*/
                      , s = i.test(o);
                    t.exports = function(t, e) {
                        if (s && "string" == typeof t)
                            for (; e--; )
                                t = n(t, i, "");
                        return t
                    }
                }
                ,
                3489: (t,e,r)=>{
                    var n = r(953)
                      , o = r(1136)
                      , i = r(9677)
                      , s = r(5988);
                    t.exports = function(t, e, r) {
                        for (var a = o(e), c = s.f, u = i.f, p = 0; p < a.length; p++) {
                            var l = a[p];
                            n(t, l) || r && n(r, l) || c(t, l, u(e, l))
                        }
                    }
                }
                ,
                4160: (t,e,r)=>{
                    var n = r(5981);
                    t.exports = !n((function() {
                        function t() {}
                        return t.prototype.constructor = null,
                        Object.getPrototypeOf(new t) !== t.prototype
                    }
                    ))
                }
                ,
                1046: (t,e,r)=>{
                    var n = r(5143).IteratorPrototype
                      , o = r(9290)
                      , i = r(1887)
                      , s = r(904)
                      , a = r(2077)
                      , c = function() {
                        return this
                    };
                    t.exports = function(t, e, r, u) {
                        var p = e + " Iterator";
                        return t.prototype = o(n, {
                            next: i(+!u, r)
                        }),
                        s(t, p, !1, !0),
                        a[p] = c,
                        t
                    }
                }
                ,
                2029: (t,e,r)=>{
                    var n = r(5746)
                      , o = r(5988)
                      , i = r(1887);
                    t.exports = n ? function(t, e, r) {
                        return o.f(t, e, i(1, r))
                    }
                    : function(t, e, r) {
                        return t[e] = r,
                        t
                    }
                }
                ,
                1887: t=>{
                    t.exports = function(t, e) {
                        return {
                            enumerable: !(1 & t),
                            configurable: !(2 & t),
                            writable: !(4 & t),
                            value: e
                        }
                    }
                }
                ,
                7771: (t,e,r)=>{
                    var n = r(6887)
                      , o = r(8834)
                      , i = r(2529)
                      , s = r(9417)
                      , a = r(7475)
                      , c = r(1046)
                      , u = r(249)
                      , p = r(8929)
                      , l = r(904)
                      , f = r(2029)
                      , h = r(9754)
                      , d = r(9813)
                      , v = r(2077)
                      , g = r(5143)
                      , y = s.PROPER
                      , m = s.CONFIGURABLE
                      , b = g.IteratorPrototype
                      , x = g.BUGGY_SAFARI_ITERATORS
                      , w = d("iterator")
                      , O = "keys"
                      , S = "values"
                      , E = "entries"
                      , A = function() {
                        return this
                    };
                    t.exports = function(t, e, r, s, d, g, P) {
                        c(r, e, s);
                        var k, _, j, I = function(t) {
                            if (t === d && M)
                                return M;
                            if (!x && t in N)
                                return N[t];
                            switch (t) {
                            case O:
                            case S:
                            case E:
                                return function() {
                                    return new r(this,t)
                                }
                            }
                            return function() {
                                return new r(this)
                            }
                        }, T = e + " Iterator", R = !1, N = t.prototype, L = N[w] || N["@@iterator"] || d && N[d], M = !x && L || I(d), C = "Array" == e && N.entries || L;
                        if (C && (k = u(C.call(new t))) !== Object.prototype && k.next && (i || u(k) === b || (p ? p(k, b) : a(k[w]) || h(k, w, A)),
                        l(k, T, !0, !0),
                        i && (v[T] = A)),
                        y && d == S && L && L.name !== S && (!i && m ? f(N, "name", S) : (R = !0,
                        M = function() {
                            return o(L, this)
                        }
                        )),
                        d)
                            if (_ = {
                                values: I(S),
                                keys: g ? M : I(O),
                                entries: I(E)
                            },
                            P)
                                for (j in _)
                                    (x || R || !(j in N)) && h(N, j, _[j]);
                            else
                                n({
                                    target: e,
                                    proto: !0,
                                    forced: x || R
                                }, _);
                        return i && !P || N[w] === M || h(N, w, M, {
                            name: d
                        }),
                        v[e] = M,
                        _
                    }
                }
                ,
                5746: (t,e,r)=>{
                    var n = r(5981);
                    t.exports = !n((function() {
                        return 7 != Object.defineProperty({}, 1, {
                            get: function() {
                                return 7
                            }
                        })[1]
                    }
                    ))
                }
                ,
                1333: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(941)
                      , i = n.document
                      , s = o(i) && o(i.createElement);
                    t.exports = function(t) {
                        return s ? i.createElement(t) : {}
                    }
                }
                ,
                3281: t=>{
                    t.exports = {
                        CSSRuleList: 0,
                        CSSStyleDeclaration: 0,
                        CSSValueList: 0,
                        ClientRectList: 0,
                        DOMRectList: 0,
                        DOMStringList: 0,
                        DOMTokenList: 1,
                        DataTransferItemList: 0,
                        FileList: 0,
                        HTMLAllCollection: 0,
                        HTMLCollection: 0,
                        HTMLFormElement: 0,
                        HTMLSelectElement: 0,
                        MediaList: 0,
                        MimeTypeArray: 0,
                        NamedNodeMap: 0,
                        NodeList: 1,
                        PaintRequestList: 0,
                        Plugin: 0,
                        PluginArray: 0,
                        SVGLengthList: 0,
                        SVGNumberList: 0,
                        SVGPathSegList: 0,
                        SVGPointList: 0,
                        SVGStringList: 0,
                        SVGTransformList: 0,
                        SourceBufferList: 0,
                        StyleSheetList: 0,
                        TextTrackCueList: 0,
                        TextTrackList: 0,
                        TouchList: 0
                    }
                }
                ,
                3321: t=>{
                    t.exports = "object" == typeof window
                }
                ,
                4470: (t,e,r)=>{
                    var n = r(2861)
                      , o = r(1899);
                    t.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== o.Pebble
                }
                ,
                2749: (t,e,r)=>{
                    var n = r(2861);
                    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
                }
                ,
                6049: (t,e,r)=>{
                    var n = r(2532)
                      , o = r(1899);
                    t.exports = "process" == n(o.process)
                }
                ,
                8045: (t,e,r)=>{
                    var n = r(2861);
                    t.exports = /web0s(?!.*chrome)/i.test(n)
                }
                ,
                2861: (t,e,r)=>{
                    var n = r(626);
                    t.exports = n("navigator", "userAgent") || ""
                }
                ,
                3385: (t,e,r)=>{
                    var n, o, i = r(1899), s = r(2861), a = i.process, c = i.Deno, u = a && a.versions || c && c.version, p = u && u.v8;
                    p && (o = (n = p.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
                    !o && s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (o = +n[1]),
                    t.exports = o
                }
                ,
                6759: t=>{
                    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
                }
                ,
                8780: (t,e,r)=>{
                    var n = r(5981)
                      , o = r(1887);
                    t.exports = !n((function() {
                        var t = Error("a");
                        return !("stack"in t) || (Object.defineProperty(t, "stack", o(1, 7)),
                        7 !== t.stack)
                    }
                    ))
                }
                ,
                6887: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(9730)
                      , i = r(5329)
                      , s = r(7475)
                      , a = r(9677).f
                      , c = r(7252)
                      , u = r(4058)
                      , p = r(6843)
                      , l = r(2029)
                      , f = r(953)
                      , h = function(t) {
                        var e = function(r, n, i) {
                            if (this instanceof e) {
                                switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(r);
                                case 2:
                                    return new t(r,n)
                                }
                                return new t(r,n,i)
                            }
                            return o(t, this, arguments)
                        };
                        return e.prototype = t.prototype,
                        e
                    };
                    t.exports = function(t, e) {
                        var r, o, d, v, g, y, m, b, x = t.target, w = t.global, O = t.stat, S = t.proto, E = w ? n : O ? n[x] : (n[x] || {}).prototype, A = w ? u : u[x] || l(u, x, {})[x], P = A.prototype;
                        for (d in e)
                            r = !c(w ? d : x + (O ? "." : "#") + d, t.forced) && E && f(E, d),
                            g = A[d],
                            r && (y = t.noTargetGet ? (b = a(E, d)) && b.value : E[d]),
                            v = r && y ? y : e[d],
                            r && typeof g == typeof v || (m = t.bind && r ? p(v, n) : t.wrap && r ? h(v) : S && s(v) ? i(v) : v,
                            (t.sham || v && v.sham || g && g.sham) && l(m, "sham", !0),
                            l(A, d, m),
                            S && (f(u, o = x + "Prototype") || l(u, o, {}),
                            l(u[o], d, v),
                            t.real && P && !P[d] && l(P, d, v)))
                    }
                }
                ,
                5981: t=>{
                    t.exports = function(t) {
                        try {
                            return !!t()
                        } catch (t) {
                            return !0
                        }
                    }
                }
                ,
                9730: (t,e,r)=>{
                    var n = r(8285)
                      , o = Function.prototype
                      , i = o.apply
                      , s = o.call;
                    t.exports = "object" == typeof Reflect && Reflect.apply || (n ? s.bind(i) : function() {
                        return s.apply(i, arguments)
                    }
                    )
                }
                ,
                6843: (t,e,r)=>{
                    var n = r(5329)
                      , o = r(4883)
                      , i = r(8285)
                      , s = n(n.bind);
                    t.exports = function(t, e) {
                        return o(t),
                        void 0 === e ? t : i ? s(t, e) : function() {
                            return t.apply(e, arguments)
                        }
                    }
                }
                ,
                8285: (t,e,r)=>{
                    var n = r(5981);
                    t.exports = !n((function() {
                        var t = function() {}
                        .bind();
                        return "function" != typeof t || t.hasOwnProperty("prototype")
                    }
                    ))
                }
                ,
                8834: (t,e,r)=>{
                    var n = r(8285)
                      , o = Function.prototype.call;
                    t.exports = n ? o.bind(o) : function() {
                        return o.apply(o, arguments)
                    }
                }
                ,
                9417: (t,e,r)=>{
                    var n = r(5746)
                      , o = r(953)
                      , i = Function.prototype
                      , s = n && Object.getOwnPropertyDescriptor
                      , a = o(i, "name")
                      , c = a && "something" === function() {}
                    .name
                      , u = a && (!n || n && s(i, "name").configurable);
                    t.exports = {
                        EXISTS: a,
                        PROPER: c,
                        CONFIGURABLE: u
                    }
                }
                ,
                5329: (t,e,r)=>{
                    var n = r(8285)
                      , o = Function.prototype
                      , i = o.bind
                      , s = o.call
                      , a = n && i.bind(s, s);
                    t.exports = n ? function(t) {
                        return t && a(t)
                    }
                    : function(t) {
                        return t && function() {
                            return s.apply(t, arguments)
                        }
                    }
                }
                ,
                626: (t,e,r)=>{
                    var n = r(4058)
                      , o = r(1899)
                      , i = r(7475)
                      , s = function(t) {
                        return i(t) ? t : void 0
                    };
                    t.exports = function(t, e) {
                        return arguments.length < 2 ? s(n[t]) || s(o[t]) : n[t] && n[t][e] || o[t] && o[t][e]
                    }
                }
                ,
                2902: (t,e,r)=>{
                    var n = r(9697)
                      , o = r(4229)
                      , i = r(2077)
                      , s = r(9813)("iterator");
                    t.exports = function(t) {
                        if (null != t)
                            return o(t, s) || o(t, "@@iterator") || i[n(t)]
                    }
                }
                ,
                429: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(8834)
                      , i = r(4883)
                      , s = r(6059)
                      , a = r(9826)
                      , c = r(2902)
                      , u = n.TypeError;
                    t.exports = function(t, e) {
                        var r = arguments.length < 2 ? c(t) : e;
                        if (i(r))
                            return s(o(r, t));
                        throw u(a(t) + " is not iterable")
                    }
                }
                ,
                4229: (t,e,r)=>{
                    var n = r(4883);
                    t.exports = function(t, e) {
                        var r = t[e];
                        return null == r ? void 0 : n(r)
                    }
                }
                ,
                1899: (t,e,r)=>{
                    var n = function(t) {
                        return t && t.Math == Math && t
                    };
                    t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function() {
                        return this
                    }() || Function("return this")()
                }
                ,
                953: (t,e,r)=>{
                    var n = r(5329)
                      , o = r(9678)
                      , i = n({}.hasOwnProperty);
                    t.exports = Object.hasOwn || function(t, e) {
                        return i(o(t), e)
                    }
                }
                ,
                7748: t=>{
                    t.exports = {}
                }
                ,
                4845: (t,e,r)=>{
                    var n = r(1899);
                    t.exports = function(t, e) {
                        var r = n.console;
                        r && r.error && (1 == arguments.length ? r.error(t) : r.error(t, e))
                    }
                }
                ,
                5463: (t,e,r)=>{
                    var n = r(626);
                    t.exports = n("document", "documentElement")
                }
                ,
                2840: (t,e,r)=>{
                    var n = r(5746)
                      , o = r(5981)
                      , i = r(1333);
                    t.exports = !n && !o((function() {
                        return 7 != Object.defineProperty(i("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }
                    ))
                }
                ,
                7026: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(5329)
                      , i = r(5981)
                      , s = r(2532)
                      , a = n.Object
                      , c = o("".split);
                    t.exports = i((function() {
                        return !a("z").propertyIsEnumerable(0)
                    }
                    )) ? function(t) {
                        return "String" == s(t) ? c(t, "") : a(t)
                    }
                    : a
                }
                ,
                1302: (t,e,r)=>{
                    var n = r(5329)
                      , o = r(7475)
                      , i = r(3030)
                      , s = n(Function.toString);
                    o(i.inspectSource) || (i.inspectSource = function(t) {
                        return s(t)
                    }
                    ),
                    t.exports = i.inspectSource
                }
                ,
                3794: (t,e,r)=>{
                    var n = r(941)
                      , o = r(2029);
                    t.exports = function(t, e) {
                        n(e) && "cause"in e && o(t, "cause", e.cause)
                    }
                }
                ,
                5402: (t,e,r)=>{
                    var n, o, i, s = r(8019), a = r(1899), c = r(5329), u = r(941), p = r(2029), l = r(953), f = r(3030), h = r(4262), d = r(7748), v = "Object already initialized", g = a.TypeError, y = a.WeakMap;
                    if (s || f.state) {
                        var m = f.state || (f.state = new y)
                          , b = c(m.get)
                          , x = c(m.has)
                          , w = c(m.set);
                        n = function(t, e) {
                            if (x(m, t))
                                throw new g(v);
                            return e.facade = t,
                            w(m, t, e),
                            e
                        }
                        ,
                        o = function(t) {
                            return b(m, t) || {}
                        }
                        ,
                        i = function(t) {
                            return x(m, t)
                        }
                    } else {
                        var O = h("state");
                        d[O] = !0,
                        n = function(t, e) {
                            if (l(t, O))
                                throw new g(v);
                            return e.facade = t,
                            p(t, O, e),
                            e
                        }
                        ,
                        o = function(t) {
                            return l(t, O) ? t[O] : {}
                        }
                        ,
                        i = function(t) {
                            return l(t, O)
                        }
                    }
                    t.exports = {
                        set: n,
                        get: o,
                        has: i,
                        enforce: function(t) {
                            return i(t) ? o(t) : n(t, {})
                        },
                        getterFor: function(t) {
                            return function(e) {
                                var r;
                                if (!u(e) || (r = o(e)).type !== t)
                                    throw g("Incompatible receiver, " + t + " required");
                                return r
                            }
                        }
                    }
                }
                ,
                6782: (t,e,r)=>{
                    var n = r(9813)
                      , o = r(2077)
                      , i = n("iterator")
                      , s = Array.prototype;
                    t.exports = function(t) {
                        return void 0 !== t && (o.Array === t || s[i] === t)
                    }
                }
                ,
                7475: t=>{
                    t.exports = function(t) {
                        return "function" == typeof t
                    }
                }
                ,
                4284: (t,e,r)=>{
                    var n = r(5329)
                      , o = r(5981)
                      , i = r(7475)
                      , s = r(9697)
                      , a = r(626)
                      , c = r(1302)
                      , u = function() {}
                      , p = []
                      , l = a("Reflect", "construct")
                      , f = /^\s*(?:class|function)\b/
                      , h = n(f.exec)
                      , d = !f.exec(u)
                      , v = function(t) {
                        if (!i(t))
                            return !1;
                        try {
                            return l(u, p, t),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }
                      , g = function(t) {
                        if (!i(t))
                            return !1;
                        switch (s(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                        }
                        try {
                            return d || !!h(f, c(t))
                        } catch (t) {
                            return !0
                        }
                    };
                    g.sham = !0,
                    t.exports = !l || o((function() {
                        var t;
                        return v(v.call) || !v(Object) || !v((function() {
                            t = !0
                        }
                        )) || t
                    }
                    )) ? g : v
                }
                ,
                7252: (t,e,r)=>{
                    var n = r(5981)
                      , o = r(7475)
                      , i = /#|\.prototype\./
                      , s = function(t, e) {
                        var r = c[a(t)];
                        return r == p || r != u && (o(e) ? n(e) : !!e)
                    }
                      , a = s.normalize = function(t) {
                        return String(t).replace(i, ".").toLowerCase()
                    }
                      , c = s.data = {}
                      , u = s.NATIVE = "N"
                      , p = s.POLYFILL = "P";
                    t.exports = s
                }
                ,
                941: (t,e,r)=>{
                    var n = r(7475);
                    t.exports = function(t) {
                        return "object" == typeof t ? null !== t : n(t)
                    }
                }
                ,
                2529: t=>{
                    t.exports = !0
                }
                ,
                6664: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(626)
                      , i = r(7475)
                      , s = r(7046)
                      , a = r(2302)
                      , c = n.Object;
                    t.exports = a ? function(t) {
                        return "symbol" == typeof t
                    }
                    : function(t) {
                        var e = o("Symbol");
                        return i(e) && s(e.prototype, c(t))
                    }
                }
                ,
                3091: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(6843)
                      , i = r(8834)
                      , s = r(6059)
                      , a = r(9826)
                      , c = r(6782)
                      , u = r(623)
                      , p = r(7046)
                      , l = r(429)
                      , f = r(2902)
                      , h = r(7609)
                      , d = n.TypeError
                      , v = function(t, e) {
                        this.stopped = t,
                        this.result = e
                    }
                      , g = v.prototype;
                    t.exports = function(t, e, r) {
                        var n, y, m, b, x, w, O, S = r && r.that, E = !(!r || !r.AS_ENTRIES), A = !(!r || !r.IS_ITERATOR), P = !(!r || !r.INTERRUPTED), k = o(e, S), _ = function(t) {
                            return n && h(n, "normal", t),
                            new v(!0,t)
                        }, j = function(t) {
                            return E ? (s(t),
                            P ? k(t[0], t[1], _) : k(t[0], t[1])) : P ? k(t, _) : k(t)
                        };
                        if (A)
                            n = t;
                        else {
                            if (!(y = f(t)))
                                throw d(a(t) + " is not iterable");
                            if (c(y)) {
                                for (m = 0,
                                b = u(t); b > m; m++)
                                    if ((x = j(t[m])) && p(g, x))
                                        return x;
                                return new v(!1)
                            }
                            n = l(t, y)
                        }
                        for (w = n.next; !(O = i(w, n)).done; ) {
                            try {
                                x = j(O.value)
                            } catch (t) {
                                h(n, "throw", t)
                            }
                            if ("object" == typeof x && x && p(g, x))
                                return x
                        }
                        return new v(!1)
                    }
                }
                ,
                7609: (t,e,r)=>{
                    var n = r(8834)
                      , o = r(6059)
                      , i = r(4229);
                    t.exports = function(t, e, r) {
                        var s, a;
                        o(t);
                        try {
                            if (!(s = i(t, "return"))) {
                                if ("throw" === e)
                                    throw r;
                                return r
                            }
                            s = n(s, t)
                        } catch (t) {
                            a = !0,
                            s = t
                        }
                        if ("throw" === e)
                            throw r;
                        if (a)
                            throw s;
                        return o(s),
                        r
                    }
                }
                ,
                5143: (t,e,r)=>{
                    var n, o, i, s = r(5981), a = r(7475), c = r(9290), u = r(249), p = r(9754), l = r(9813), f = r(2529), h = l("iterator"), d = !1;
                    [].keys && ("next"in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (n = o) : d = !0),
                    null == n || s((function() {
                        var t = {};
                        return n[h].call(t) !== t
                    }
                    )) ? n = {} : f && (n = c(n)),
                    a(n[h]) || p(n, h, (function() {
                        return this
                    }
                    )),
                    t.exports = {
                        IteratorPrototype: n,
                        BUGGY_SAFARI_ITERATORS: d
                    }
                }
                ,
                2077: t=>{
                    t.exports = {}
                }
                ,
                623: (t,e,r)=>{
                    var n = r(3057);
                    t.exports = function(t) {
                        return n(t.length)
                    }
                }
                ,
                6132: (t,e,r)=>{
                    var n, o, i, s, a, c, u, p, l = r(1899), f = r(6843), h = r(9677).f, d = r(2941).set, v = r(2749), g = r(4470), y = r(8045), m = r(6049), b = l.MutationObserver || l.WebKitMutationObserver, x = l.document, w = l.process, O = l.Promise, S = h(l, "queueMicrotask"), E = S && S.value;
                    E || (n = function() {
                        var t, e;
                        for (m && (t = w.domain) && t.exit(); o; ) {
                            e = o.fn,
                            o = o.next;
                            try {
                                e()
                            } catch (t) {
                                throw o ? s() : i = void 0,
                                t
                            }
                        }
                        i = void 0,
                        t && t.enter()
                    }
                    ,
                    v || m || y || !b || !x ? !g && O && O.resolve ? ((u = O.resolve(void 0)).constructor = O,
                    p = f(u.then, u),
                    s = function() {
                        p(n)
                    }
                    ) : m ? s = function() {
                        w.nextTick(n)
                    }
                    : (d = f(d, l),
                    s = function() {
                        d(n)
                    }
                    ) : (a = !0,
                    c = x.createTextNode(""),
                    new b(n).observe(c, {
                        characterData: !0
                    }),
                    s = function() {
                        c.data = a = !a
                    }
                    )),
                    t.exports = E || function(t) {
                        var e = {
                            fn: t,
                            next: void 0
                        };
                        i && (i.next = e),
                        o || (o = e,
                        s()),
                        i = e
                    }
                }
                ,
                9297: (t,e,r)=>{
                    var n = r(1899);
                    t.exports = n.Promise
                }
                ,
                2497: (t,e,r)=>{
                    var n = r(3385)
                      , o = r(5981);
                    t.exports = !!Object.getOwnPropertySymbols && !o((function() {
                        var t = Symbol();
                        return !String(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && n && n < 41
                    }
                    ))
                }
                ,
                8019: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(7475)
                      , i = r(1302)
                      , s = n.WeakMap;
                    t.exports = o(s) && /native code/.test(i(s))
                }
                ,
                9520: (t,e,r)=>{
                    var n = r(4883)
                      , o = function(t) {
                        var e, r;
                        this.promise = new t((function(t, n) {
                            if (void 0 !== e || void 0 !== r)
                                throw TypeError("Bad Promise constructor");
                            e = t,
                            r = n
                        }
                        )),
                        this.resolve = n(e),
                        this.reject = n(r)
                    };
                    t.exports.f = function(t) {
                        return new o(t)
                    }
                }
                ,
                4649: (t,e,r)=>{
                    var n = r(5803);
                    t.exports = function(t, e) {
                        return void 0 === t ? arguments.length < 2 ? "" : e : n(t)
                    }
                }
                ,
                9290: (t,e,r)=>{
                    var n, o = r(6059), i = r(9938), s = r(6759), a = r(7748), c = r(5463), u = r(1333), p = r(4262)("IE_PROTO"), l = function() {}, f = function(t) {
                        return "<script>" + t + "<\/script>"
                    }, h = function(t) {
                        t.write(f("")),
                        t.close();
                        var e = t.parentWindow.Object;
                        return t = null,
                        e
                    }, d = function() {
                        try {
                            n = new ActiveXObject("htmlfile")
                        } catch (t) {}
                        var t, e;
                        d = "undefined" != typeof document ? document.domain && n ? h(n) : ((e = u("iframe")).style.display = "none",
                        c.appendChild(e),
                        e.src = String("javascript:"),
                        (t = e.contentWindow.document).open(),
                        t.write(f("document.F=Object")),
                        t.close(),
                        t.F) : h(n);
                        for (var r = s.length; r--; )
                            delete d.prototype[s[r]];
                        return d()
                    };
                    a[p] = !0,
                    t.exports = Object.create || function(t, e) {
                        var r;
                        return null !== t ? (l.prototype = o(t),
                        r = new l,
                        l.prototype = null,
                        r[p] = t) : r = d(),
                        void 0 === e ? r : i.f(r, e)
                    }
                }
                ,
                9938: (t,e,r)=>{
                    var n = r(5746)
                      , o = r(3937)
                      , i = r(5988)
                      , s = r(6059)
                      , a = r(4529)
                      , c = r(4771);
                    e.f = n && !o ? Object.defineProperties : function(t, e) {
                        s(t);
                        for (var r, n = a(e), o = c(e), u = o.length, p = 0; u > p; )
                            i.f(t, r = o[p++], n[r]);
                        return t
                    }
                }
                ,
                5988: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(5746)
                      , i = r(2840)
                      , s = r(3937)
                      , a = r(6059)
                      , c = r(3894)
                      , u = n.TypeError
                      , p = Object.defineProperty
                      , l = Object.getOwnPropertyDescriptor;
                    e.f = o ? s ? function(t, e, r) {
                        if (a(t),
                        e = c(e),
                        a(r),
                        "function" == typeof t && "prototype" === e && "value"in r && "writable"in r && !r.writable) {
                            var n = l(t, e);
                            n && n.writable && (t[e] = r.value,
                            r = {
                                configurable: "configurable"in r ? r.configurable : n.configurable,
                                enumerable: "enumerable"in r ? r.enumerable : n.enumerable,
                                writable: !1
                            })
                        }
                        return p(t, e, r)
                    }
                    : p : function(t, e, r) {
                        if (a(t),
                        e = c(e),
                        a(r),
                        i)
                            try {
                                return p(t, e, r)
                            } catch (t) {}
                        if ("get"in r || "set"in r)
                            throw u("Accessors not supported");
                        return "value"in r && (t[e] = r.value),
                        t
                    }
                }
                ,
                9677: (t,e,r)=>{
                    var n = r(5746)
                      , o = r(8834)
                      , i = r(6760)
                      , s = r(1887)
                      , a = r(4529)
                      , c = r(3894)
                      , u = r(953)
                      , p = r(2840)
                      , l = Object.getOwnPropertyDescriptor;
                    e.f = n ? l : function(t, e) {
                        if (t = a(t),
                        e = c(e),
                        p)
                            try {
                                return l(t, e)
                            } catch (t) {}
                        if (u(t, e))
                            return s(!o(i.f, t, e), t[e])
                    }
                }
                ,
                946: (t,e,r)=>{
                    var n = r(5629)
                      , o = r(6759).concat("length", "prototype");
                    e.f = Object.getOwnPropertyNames || function(t) {
                        return n(t, o)
                    }
                }
                ,
                7857: (t,e)=>{
                    e.f = Object.getOwnPropertySymbols
                }
                ,
                249: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(953)
                      , i = r(7475)
                      , s = r(9678)
                      , a = r(4262)
                      , c = r(4160)
                      , u = a("IE_PROTO")
                      , p = n.Object
                      , l = p.prototype;
                    t.exports = c ? p.getPrototypeOf : function(t) {
                        var e = s(t);
                        if (o(e, u))
                            return e[u];
                        var r = e.constructor;
                        return i(r) && e instanceof r ? r.prototype : e instanceof p ? l : null
                    }
                }
                ,
                7046: (t,e,r)=>{
                    var n = r(5329);
                    t.exports = n({}.isPrototypeOf)
                }
                ,
                5629: (t,e,r)=>{
                    var n = r(5329)
                      , o = r(953)
                      , i = r(4529)
                      , s = r(1692).indexOf
                      , a = r(7748)
                      , c = n([].push);
                    t.exports = function(t, e) {
                        var r, n = i(t), u = 0, p = [];
                        for (r in n)
                            !o(a, r) && o(n, r) && c(p, r);
                        for (; e.length > u; )
                            o(n, r = e[u++]) && (~s(p, r) || c(p, r));
                        return p
                    }
                }
                ,
                4771: (t,e,r)=>{
                    var n = r(5629)
                      , o = r(6759);
                    t.exports = Object.keys || function(t) {
                        return n(t, o)
                    }
                }
                ,
                6760: (t,e)=>{
                    var r = {}.propertyIsEnumerable
                      , n = Object.getOwnPropertyDescriptor
                      , o = n && !r.call({
                        1: 2
                    }, 1);
                    e.f = o ? function(t) {
                        var e = n(this, t);
                        return !!e && e.enumerable
                    }
                    : r
                }
                ,
                8929: (t,e,r)=>{
                    var n = r(5329)
                      , o = r(6059)
                      , i = r(1851);
                    t.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
                        var t, e = !1, r = {};
                        try {
                            (t = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []),
                            e = r instanceof Array
                        } catch (t) {}
                        return function(r, n) {
                            return o(r),
                            i(n),
                            e ? t(r, n) : r.__proto__ = n,
                            r
                        }
                    }() : void 0)
                }
                ,
                5623: (t,e,r)=>{
                    var n = r(2885)
                      , o = r(9697);
                    t.exports = n ? {}.toString : function() {
                        return "[object " + o(this) + "]"
                    }
                }
                ,
                9811: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(8834)
                      , i = r(7475)
                      , s = r(941)
                      , a = n.TypeError;
                    t.exports = function(t, e) {
                        var r, n;
                        if ("string" === e && i(r = t.toString) && !s(n = o(r, t)))
                            return n;
                        if (i(r = t.valueOf) && !s(n = o(r, t)))
                            return n;
                        if ("string" !== e && i(r = t.toString) && !s(n = o(r, t)))
                            return n;
                        throw a("Can't convert object to primitive value")
                    }
                }
                ,
                1136: (t,e,r)=>{
                    var n = r(626)
                      , o = r(5329)
                      , i = r(946)
                      , s = r(7857)
                      , a = r(6059)
                      , c = o([].concat);
                    t.exports = n("Reflect", "ownKeys") || function(t) {
                        var e = i.f(a(t))
                          , r = s.f;
                        return r ? c(e, r(t)) : e
                    }
                }
                ,
                4058: t=>{
                    t.exports = {}
                }
                ,
                2: t=>{
                    t.exports = function(t) {
                        try {
                            return {
                                error: !1,
                                value: t()
                            }
                        } catch (t) {
                            return {
                                error: !0,
                                value: t
                            }
                        }
                    }
                }
                ,
                6584: (t,e,r)=>{
                    var n = r(6059)
                      , o = r(941)
                      , i = r(9520);
                    t.exports = function(t, e) {
                        if (n(t),
                        o(e) && e.constructor === t)
                            return e;
                        var r = i.f(t);
                        return (0,
                        r.resolve)(e),
                        r.promise
                    }
                }
                ,
                8397: t=>{
                    var e = function() {
                        this.head = null,
                        this.tail = null
                    };
                    e.prototype = {
                        add: function(t) {
                            var e = {
                                item: t,
                                next: null
                            };
                            this.head ? this.tail.next = e : this.head = e,
                            this.tail = e
                        },
                        get: function() {
                            var t = this.head;
                            if (t)
                                return this.head = t.next,
                                this.tail === t && (this.tail = null),
                                t.item
                        }
                    },
                    t.exports = e
                }
                ,
                7524: (t,e,r)=>{
                    var n = r(9754);
                    t.exports = function(t, e, r) {
                        for (var o in e)
                            r && r.unsafe && t[o] ? t[o] = e[o] : n(t, o, e[o], r);
                        return t
                    }
                }
                ,
                9754: (t,e,r)=>{
                    var n = r(2029);
                    t.exports = function(t, e, r, o) {
                        o && o.enumerable ? t[e] = r : n(t, e, r)
                    }
                }
                ,
                8219: (t,e,r)=>{
                    var n = r(1899).TypeError;
                    t.exports = function(t) {
                        if (null == t)
                            throw n("Can't call method on " + t);
                        return t
                    }
                }
                ,
                4911: (t,e,r)=>{
                    var n = r(1899)
                      , o = Object.defineProperty;
                    t.exports = function(t, e) {
                        try {
                            o(n, t, {
                                value: e,
                                configurable: !0,
                                writable: !0
                            })
                        } catch (r) {
                            n[t] = e
                        }
                        return e
                    }
                }
                ,
                4431: (t,e,r)=>{
                    var n = r(626)
                      , o = r(5988)
                      , i = r(9813)
                      , s = r(5746)
                      , a = i("species");
                    t.exports = function(t) {
                        var e = n(t)
                          , r = o.f;
                        s && e && !e[a] && r(e, a, {
                            configurable: !0,
                            get: function() {
                                return this
                            }
                        })
                    }
                }
                ,
                904: (t,e,r)=>{
                    var n = r(2885)
                      , o = r(5988).f
                      , i = r(2029)
                      , s = r(953)
                      , a = r(5623)
                      , c = r(9813)("toStringTag");
                    t.exports = function(t, e, r, u) {
                        if (t) {
                            var p = r ? t : t.prototype;
                            s(p, c) || o(p, c, {
                                configurable: !0,
                                value: e
                            }),
                            u && !n && i(p, "toString", a)
                        }
                    }
                }
                ,
                4262: (t,e,r)=>{
                    var n = r(8726)
                      , o = r(9418)
                      , i = n("keys");
                    t.exports = function(t) {
                        return i[t] || (i[t] = o(t))
                    }
                }
                ,
                3030: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(4911)
                      , i = "__core-js_shared__"
                      , s = n[i] || o(i, {});
                    t.exports = s
                }
                ,
                8726: (t,e,r)=>{
                    var n = r(2529)
                      , o = r(3030);
                    (t.exports = function(t, e) {
                        return o[t] || (o[t] = void 0 !== e ? e : {})
                    }
                    )("versions", []).push({
                        version: "3.20.3",
                        mode: n ? "pure" : "global",
                        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                        license: "https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",
                        source: "https://github.com/zloirock/core-js"
                    })
                }
                ,
                487: (t,e,r)=>{
                    var n = r(6059)
                      , o = r(174)
                      , i = r(9813)("species");
                    t.exports = function(t, e) {
                        var r, s = n(t).constructor;
                        return void 0 === s || null == (r = n(s)[i]) ? e : o(r)
                    }
                }
                ,
                4620: (t,e,r)=>{
                    var n = r(5329)
                      , o = r(2435)
                      , i = r(5803)
                      , s = r(8219)
                      , a = n("".charAt)
                      , c = n("".charCodeAt)
                      , u = n("".slice)
                      , p = function(t) {
                        return function(e, r) {
                            var n, p, l = i(s(e)), f = o(r), h = l.length;
                            return f < 0 || f >= h ? t ? "" : void 0 : (n = c(l, f)) < 55296 || n > 56319 || f + 1 === h || (p = c(l, f + 1)) < 56320 || p > 57343 ? t ? a(l, f) : n : t ? u(l, f, f + 2) : p - 56320 + (n - 55296 << 10) + 65536
                        }
                    };
                    t.exports = {
                        codeAt: p(!1),
                        charAt: p(!0)
                    }
                }
                ,
                2941: (t,e,r)=>{
                    var n, o, i, s, a = r(1899), c = r(9730), u = r(6843), p = r(7475), l = r(953), f = r(5981), h = r(5463), d = r(3765), v = r(1333), g = r(2749), y = r(6049), m = a.setImmediate, b = a.clearImmediate, x = a.process, w = a.Dispatch, O = a.Function, S = a.MessageChannel, E = a.String, A = 0, P = {};
                    try {
                        n = a.location
                    } catch (t) {}
                    var k = function(t) {
                        if (l(P, t)) {
                            var e = P[t];
                            delete P[t],
                            e()
                        }
                    }
                      , _ = function(t) {
                        return function() {
                            k(t)
                        }
                    }
                      , j = function(t) {
                        k(t.data)
                    }
                      , I = function(t) {
                        a.postMessage(E(t), n.protocol + "//" + n.host)
                    };
                    m && b || (m = function(t) {
                        var e = d(arguments, 1);
                        return P[++A] = function() {
                            c(p(t) ? t : O(t), void 0, e)
                        }
                        ,
                        o(A),
                        A
                    }
                    ,
                    b = function(t) {
                        delete P[t]
                    }
                    ,
                    y ? o = function(t) {
                        x.nextTick(_(t))
                    }
                    : w && w.now ? o = function(t) {
                        w.now(_(t))
                    }
                    : S && !g ? (s = (i = new S).port2,
                    i.port1.onmessage = j,
                    o = u(s.postMessage, s)) : a.addEventListener && p(a.postMessage) && !a.importScripts && n && "file:" !== n.protocol && !f(I) ? (o = I,
                    a.addEventListener("message", j, !1)) : o = "onreadystatechange"in v("script") ? function(t) {
                        h.appendChild(v("script")).onreadystatechange = function() {
                            h.removeChild(this),
                            k(t)
                        }
                    }
                    : function(t) {
                        setTimeout(_(t), 0)
                    }
                    ),
                    t.exports = {
                        set: m,
                        clear: b
                    }
                }
                ,
                9413: (t,e,r)=>{
                    var n = r(2435)
                      , o = Math.max
                      , i = Math.min;
                    t.exports = function(t, e) {
                        var r = n(t);
                        return r < 0 ? o(r + e, 0) : i(r, e)
                    }
                }
                ,
                4529: (t,e,r)=>{
                    var n = r(7026)
                      , o = r(8219);
                    t.exports = function(t) {
                        return n(o(t))
                    }
                }
                ,
                2435: t=>{
                    var e = Math.ceil
                      , r = Math.floor;
                    t.exports = function(t) {
                        var n = +t;
                        return n != n || 0 === n ? 0 : (n > 0 ? r : e)(n)
                    }
                }
                ,
                3057: (t,e,r)=>{
                    var n = r(2435)
                      , o = Math.min;
                    t.exports = function(t) {
                        return t > 0 ? o(n(t), 9007199254740991) : 0
                    }
                }
                ,
                9678: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(8219)
                      , i = n.Object;
                    t.exports = function(t) {
                        return i(o(t))
                    }
                }
                ,
                6935: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(8834)
                      , i = r(941)
                      , s = r(6664)
                      , a = r(4229)
                      , c = r(9811)
                      , u = r(9813)
                      , p = n.TypeError
                      , l = u("toPrimitive");
                    t.exports = function(t, e) {
                        if (!i(t) || s(t))
                            return t;
                        var r, n = a(t, l);
                        if (n) {
                            if (void 0 === e && (e = "default"),
                            r = o(n, t, e),
                            !i(r) || s(r))
                                return r;
                            throw p("Can't convert object to primitive value")
                        }
                        return void 0 === e && (e = "number"),
                        c(t, e)
                    }
                }
                ,
                3894: (t,e,r)=>{
                    var n = r(6935)
                      , o = r(6664);
                    t.exports = function(t) {
                        var e = n(t, "string");
                        return o(e) ? e : e + ""
                    }
                }
                ,
                2885: (t,e,r)=>{
                    var n = {};
                    n[r(9813)("toStringTag")] = "z",
                    t.exports = "[object z]" === String(n)
                }
                ,
                5803: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(9697)
                      , i = n.String;
                    t.exports = function(t) {
                        if ("Symbol" === o(t))
                            throw TypeError("Cannot convert a Symbol value to a string");
                        return i(t)
                    }
                }
                ,
                9826: (t,e,r)=>{
                    var n = r(1899).String;
                    t.exports = function(t) {
                        try {
                            return n(t)
                        } catch (t) {
                            return "Object"
                        }
                    }
                }
                ,
                9418: (t,e,r)=>{
                    var n = r(5329)
                      , o = 0
                      , i = Math.random()
                      , s = n(1..toString);
                    t.exports = function(t) {
                        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++o + i, 36)
                    }
                }
                ,
                2302: (t,e,r)=>{
                    var n = r(2497);
                    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
                }
                ,
                3937: (t,e,r)=>{
                    var n = r(5746)
                      , o = r(5981);
                    t.exports = n && o((function() {
                        return 42 != Object.defineProperty((function() {}
                        ), "prototype", {
                            value: 42,
                            writable: !1
                        }).prototype
                    }
                    ))
                }
                ,
                9813: (t,e,r)=>{
                    var n = r(1899)
                      , o = r(8726)
                      , i = r(953)
                      , s = r(9418)
                      , a = r(2497)
                      , c = r(2302)
                      , u = o("wks")
                      , p = n.Symbol
                      , l = p && p.for
                      , f = c ? p : p && p.withoutSetter || s;
                    t.exports = function(t) {
                        if (!i(u, t) || !a && "string" != typeof u[t]) {
                            var e = "Symbol." + t;
                            a && i(p, t) ? u[t] = p[t] : u[t] = c && l ? l(e) : f(e)
                        }
                        return u[t]
                    }
                }
                ,
                7627: (t,e,r)=>{
                    var n = r(6887)
                      , o = r(1899)
                      , i = r(7046)
                      , s = r(249)
                      , a = r(8929)
                      , c = r(3489)
                      , u = r(9290)
                      , p = r(2029)
                      , l = r(1887)
                      , f = r(8694)
                      , h = r(3794)
                      , d = r(3091)
                      , v = r(4649)
                      , g = r(9813)
                      , y = r(8780)
                      , m = g("toStringTag")
                      , b = o.Error
                      , x = [].push
                      , w = function(t, e) {
                        var r, n = arguments.length > 2 ? arguments[2] : void 0, o = i(O, this);
                        a ? r = a(new b, o ? s(this) : O) : (r = o ? this : u(O),
                        p(r, m, "Error")),
                        void 0 !== e && p(r, "message", v(e)),
                        y && p(r, "stack", f(r.stack, 1)),
                        h(r, n);
                        var c = [];
                        return d(t, x, {
                            that: c
                        }),
                        p(r, "errors", c),
                        r
                    };
                    a ? a(w, b) : c(w, b, {
                        name: !0
                    });
                    var O = w.prototype = u(b.prototype, {
                        constructor: l(1, w),
                        message: l(1, ""),
                        name: l(1, "AggregateError")
                    });
                    n({
                        global: !0
                    }, {
                        AggregateError: w
                    })
                }
                ,
                6274: (t,e,r)=>{
                    var n = r(4529)
                      , o = r(8479)
                      , i = r(2077)
                      , s = r(5402)
                      , a = r(5988).f
                      , c = r(7771)
                      , u = r(2529)
                      , p = r(5746)
                      , l = "Array Iterator"
                      , f = s.set
                      , h = s.getterFor(l);
                    t.exports = c(Array, "Array", (function(t, e) {
                        f(this, {
                            type: l,
                            target: n(t),
                            index: 0,
                            kind: e
                        })
                    }
                    ), (function() {
                        var t = h(this)
                          , e = t.target
                          , r = t.kind
                          , n = t.index++;
                        return !e || n >= e.length ? (t.target = void 0,
                        {
                            value: void 0,
                            done: !0
                        }) : "keys" == r ? {
                            value: n,
                            done: !1
                        } : "values" == r ? {
                            value: e[n],
                            done: !1
                        } : {
                            value: [n, e[n]],
                            done: !1
                        }
                    }
                    ), "values");
                    var d = i.Arguments = i.Array;
                    if (o("keys"),
                    o("values"),
                    o("entries"),
                    !u && p && "values" !== d.name)
                        try {
                            a(d, "name", {
                                value: "values"
                            })
                        } catch (t) {}
                }
                ,
                6450: (t,e,r)=>{
                    var n = r(6887)
                      , o = r(5746)
                      , i = r(5988).f;
                    n({
                        target: "Object",
                        stat: !0,
                        forced: Object.defineProperty !== i,
                        sham: !o
                    }, {
                        defineProperty: i
                    })
                }
                ,
                5967: ()=>{}
                ,
                4560: (t,e,r)=>{
                    var n = r(6887)
                      , o = r(8834)
                      , i = r(4883)
                      , s = r(9520)
                      , a = r(2)
                      , c = r(3091);
                    n({
                        target: "Promise",
                        stat: !0
                    }, {
                        allSettled: function(t) {
                            var e = this
                              , r = s.f(e)
                              , n = r.resolve
                              , u = r.reject
                              , p = a((function() {
                                var r = i(e.resolve)
                                  , s = []
                                  , a = 0
                                  , u = 1;
                                c(t, (function(t) {
                                    var i = a++
                                      , c = !1;
                                    u++,
                                    o(r, e, t).then((function(t) {
                                        c || (c = !0,
                                        s[i] = {
                                            status: "fulfilled",
                                            value: t
                                        },
                                        --u || n(s))
                                    }
                                    ), (function(t) {
                                        c || (c = !0,
                                        s[i] = {
                                            status: "rejected",
                                            reason: t
                                        },
                                        --u || n(s))
                                    }
                                    ))
                                }
                                )),
                                --u || n(s)
                            }
                            ));
                            return p.error && u(p.value),
                            r.promise
                        }
                    })
                }
                ,
                7206: (t,e,r)=>{
                    var n = r(6887)
                      , o = r(4883)
                      , i = r(626)
                      , s = r(8834)
                      , a = r(9520)
                      , c = r(2)
                      , u = r(3091)
                      , p = "No one promise resolved";
                    n({
                        target: "Promise",
                        stat: !0
                    }, {
                        any: function(t) {
                            var e = this
                              , r = i("AggregateError")
                              , n = a.f(e)
                              , l = n.resolve
                              , f = n.reject
                              , h = c((function() {
                                var n = o(e.resolve)
                                  , i = []
                                  , a = 0
                                  , c = 1
                                  , h = !1;
                                u(t, (function(t) {
                                    var o = a++
                                      , u = !1;
                                    c++,
                                    s(n, e, t).then((function(t) {
                                        u || h || (h = !0,
                                        l(t))
                                    }
                                    ), (function(t) {
                                        u || h || (u = !0,
                                        i[o] = t,
                                        --c || f(new r(i,p)))
                                    }
                                    ))
                                }
                                )),
                                --c || f(new r(i,p))
                            }
                            ));
                            return h.error && f(h.value),
                            n.promise
                        }
                    })
                }
                ,
                4349: (t,e,r)=>{
                    var n = r(6887)
                      , o = r(2529)
                      , i = r(9297)
                      , s = r(5981)
                      , a = r(626)
                      , c = r(7475)
                      , u = r(487)
                      , p = r(6584)
                      , l = r(9754);
                    if (n({
                        target: "Promise",
                        proto: !0,
                        real: !0,
                        forced: !!i && s((function() {
                            i.prototype.finally.call({
                                then: function() {}
                            }, (function() {}
                            ))
                        }
                        ))
                    }, {
                        finally: function(t) {
                            var e = u(this, a("Promise"))
                              , r = c(t);
                            return this.then(r ? function(r) {
                                return p(e, t()).then((function() {
                                    return r
                                }
                                ))
                            }
                            : t, r ? function(r) {
                                return p(e, t()).then((function() {
                                    throw r
                                }
                                ))
                            }
                            : t)
                        }
                    }),
                    !o && c(i)) {
                        var f = a("Promise").prototype.finally;
                        i.prototype.finally !== f && l(i.prototype, "finally", f, {
                            unsafe: !0
                        })
                    }
                }
                ,
                8881: (t,e,r)=>{
                    var n, o, i, s, a = r(6887), c = r(2529), u = r(1899), p = r(626), l = r(8834), f = r(9297), h = r(9754), d = r(7524), v = r(8929), g = r(904), y = r(4431), m = r(4883), b = r(7475), x = r(941), w = r(5743), O = r(1302), S = r(3091), E = r(1385), A = r(487), P = r(2941).set, k = r(6132), _ = r(6584), j = r(4845), I = r(9520), T = r(2), R = r(8397), N = r(5402), L = r(7252), M = r(9813), C = r(3321), D = r(6049), F = r(3385), U = M("species"), G = "Promise", B = N.getterFor(G), W = N.set, V = N.getterFor(G), z = f && f.prototype, $ = f, q = z, H = u.TypeError, J = u.document, Y = u.process, K = I.f, Q = K, X = !!(J && J.createEvent && u.dispatchEvent), Z = b(u.PromiseRejectionEvent), tt = "unhandledrejection", et = !1, rt = L(G, (function() {
                        var t = O($)
                          , e = t !== String($);
                        if (!e && 66 === F)
                            return !0;
                        if (c && !q.finally)
                            return !0;
                        if (F >= 51 && /native code/.test(t))
                            return !1;
                        var r = new $((function(t) {
                            t(1)
                        }
                        ))
                          , n = function(t) {
                            t((function() {}
                            ), (function() {}
                            ))
                        };
                        return (r.constructor = {})[U] = n,
                        !(et = r.then((function() {}
                        ))instanceof n) || !e && C && !Z
                    }
                    )), nt = rt || !E((function(t) {
                        $.all(t).catch((function() {}
                        ))
                    }
                    )), ot = function(t) {
                        var e;
                        return !(!x(t) || !b(e = t.then)) && e
                    }, it = function(t, e) {
                        var r, n, o, i = e.value, s = 1 == e.state, a = s ? t.ok : t.fail, c = t.resolve, u = t.reject, p = t.domain;
                        try {
                            a ? (s || (2 === e.rejection && pt(e),
                            e.rejection = 1),
                            !0 === a ? r = i : (p && p.enter(),
                            r = a(i),
                            p && (p.exit(),
                            o = !0)),
                            r === t.promise ? u(H("Promise-chain cycle")) : (n = ot(r)) ? l(n, r, c, u) : c(r)) : u(i)
                        } catch (t) {
                            p && !o && p.exit(),
                            u(t)
                        }
                    }, st = function(t, e) {
                        t.notified || (t.notified = !0,
                        k((function() {
                            for (var r, n = t.reactions; r = n.get(); )
                                it(r, t);
                            t.notified = !1,
                            e && !t.rejection && ct(t)
                        }
                        )))
                    }, at = function(t, e, r) {
                        var n, o;
                        X ? ((n = J.createEvent("Event")).promise = e,
                        n.reason = r,
                        n.initEvent(t, !1, !0),
                        u.dispatchEvent(n)) : n = {
                            promise: e,
                            reason: r
                        },
                        !Z && (o = u["on" + t]) ? o(n) : t === tt && j("Unhandled promise rejection", r)
                    }, ct = function(t) {
                        l(P, u, (function() {
                            var e, r = t.facade, n = t.value;
                            if (ut(t) && (e = T((function() {
                                D ? Y.emit("unhandledRejection", n, r) : at(tt, r, n)
                            }
                            )),
                            t.rejection = D || ut(t) ? 2 : 1,
                            e.error))
                                throw e.value
                        }
                        ))
                    }, ut = function(t) {
                        return 1 !== t.rejection && !t.parent
                    }, pt = function(t) {
                        l(P, u, (function() {
                            var e = t.facade;
                            D ? Y.emit("rejectionHandled", e) : at("rejectionhandled", e, t.value)
                        }
                        ))
                    }, lt = function(t, e, r) {
                        return function(n) {
                            t(e, n, r)
                        }
                    }, ft = function(t, e, r) {
                        t.done || (t.done = !0,
                        r && (t = r),
                        t.value = e,
                        t.state = 2,
                        st(t, !0))
                    }, ht = function(t, e, r) {
                        if (!t.done) {
                            t.done = !0,
                            r && (t = r);
                            try {
                                if (t.facade === e)
                                    throw H("Promise can't be resolved itself");
                                var n = ot(e);
                                n ? k((function() {
                                    var r = {
                                        done: !1
                                    };
                                    try {
                                        l(n, e, lt(ht, r, t), lt(ft, r, t))
                                    } catch (e) {
                                        ft(r, e, t)
                                    }
                                }
                                )) : (t.value = e,
                                t.state = 1,
                                st(t, !1))
                            } catch (e) {
                                ft({
                                    done: !1
                                }, e, t)
                            }
                        }
                    };
                    if (rt && (q = ($ = function(t) {
                        w(this, q),
                        m(t),
                        l(n, this);
                        var e = B(this);
                        try {
                            t(lt(ht, e), lt(ft, e))
                        } catch (t) {
                            ft(e, t)
                        }
                    }
                    ).prototype,
                    (n = function(t) {
                        W(this, {
                            type: G,
                            done: !1,
                            notified: !1,
                            parent: !1,
                            reactions: new R,
                            rejection: !1,
                            state: 0,
                            value: void 0
                        })
                    }
                    ).prototype = d(q, {
                        then: function(t, e) {
                            var r = V(this)
                              , n = K(A(this, $));
                            return r.parent = !0,
                            n.ok = !b(t) || t,
                            n.fail = b(e) && e,
                            n.domain = D ? Y.domain : void 0,
                            0 == r.state ? r.reactions.add(n) : k((function() {
                                it(n, r)
                            }
                            )),
                            n.promise
                        },
                        catch: function(t) {
                            return this.then(void 0, t)
                        }
                    }),
                    o = function() {
                        var t = new n
                          , e = B(t);
                        this.promise = t,
                        this.resolve = lt(ht, e),
                        this.reject = lt(ft, e)
                    }
                    ,
                    I.f = K = function(t) {
                        return t === $ || t === i ? new o(t) : Q(t)
                    }
                    ,
                    !c && b(f) && z !== Object.prototype)) {
                        s = z.then,
                        et || (h(z, "then", (function(t, e) {
                            var r = this;
                            return new $((function(t, e) {
                                l(s, r, t, e)
                            }
                            )).then(t, e)
                        }
                        ), {
                            unsafe: !0
                        }),
                        h(z, "catch", q.catch, {
                            unsafe: !0
                        }));
                        try {
                            delete z.constructor
                        } catch (t) {}
                        v && v(z, q)
                    }
                    a({
                        global: !0,
                        wrap: !0,
                        forced: rt
                    }, {
                        Promise: $
                    }),
                    g($, G, !1, !0),
                    y(G),
                    i = p(G),
                    a({
                        target: G,
                        stat: !0,
                        forced: rt
                    }, {
                        reject: function(t) {
                            var e = K(this);
                            return l(e.reject, void 0, t),
                            e.promise
                        }
                    }),
                    a({
                        target: G,
                        stat: !0,
                        forced: c || rt
                    }, {
                        resolve: function(t) {
                            return _(c && this === i ? $ : this, t)
                        }
                    }),
                    a({
                        target: G,
                        stat: !0,
                        forced: nt
                    }, {
                        all: function(t) {
                            var e = this
                              , r = K(e)
                              , n = r.resolve
                              , o = r.reject
                              , i = T((function() {
                                var r = m(e.resolve)
                                  , i = []
                                  , s = 0
                                  , a = 1;
                                S(t, (function(t) {
                                    var c = s++
                                      , u = !1;
                                    a++,
                                    l(r, e, t).then((function(t) {
                                        u || (u = !0,
                                        i[c] = t,
                                        --a || n(i))
                                    }
                                    ), o)
                                }
                                )),
                                --a || n(i)
                            }
                            ));
                            return i.error && o(i.value),
                            r.promise
                        },
                        race: function(t) {
                            var e = this
                              , r = K(e)
                              , n = r.reject
                              , o = T((function() {
                                var o = m(e.resolve);
                                S(t, (function(t) {
                                    l(o, e, t).then(r.resolve, n)
                                }
                                ))
                            }
                            ));
                            return o.error && n(o.value),
                            r.promise
                        }
                    })
                }
                ,
                7971: (t,e,r)=>{
                    var n = r(4620).charAt
                      , o = r(5803)
                      , i = r(5402)
                      , s = r(7771)
                      , a = "String Iterator"
                      , c = i.set
                      , u = i.getterFor(a);
                    s(String, "String", (function(t) {
                        c(this, {
                            type: a,
                            string: o(t),
                            index: 0
                        })
                    }
                    ), (function() {
                        var t, e = u(this), r = e.string, o = e.index;
                        return o >= r.length ? {
                            value: void 0,
                            done: !0
                        } : (t = n(r, o),
                        e.index += t.length,
                        {
                            value: t,
                            done: !1
                        })
                    }
                    ))
                }
                ,
                7634: (t,e,r)=>{
                    r(6274);
                    var n = r(3281)
                      , o = r(1899)
                      , i = r(9697)
                      , s = r(2029)
                      , a = r(2077)
                      , c = r(9813)("toStringTag");
                    for (var u in n) {
                        var p = o[u]
                          , l = p && p.prototype;
                        l && i(l) !== c && s(l, c, u),
                        a[u] = a.Array
                    }
                }
                ,
                1910: (t,e,r)=>{
                    var n = r(8171);
                    t.exports = n
                }
                ,
                7460: (t,e,r)=>{
                    var n = r(2956);
                    r(7634),
                    t.exports = n
                }
                ,
                9662: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(614)
                      , i = r(6330)
                      , s = n.TypeError;
                    t.exports = function(t) {
                        if (o(t))
                            return t;
                        throw s(i(t) + " is not a function")
                    }
                }
                ,
                6077: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(614)
                      , i = n.String
                      , s = n.TypeError;
                    t.exports = function(t) {
                        if ("object" == typeof t || o(t))
                            return t;
                        throw s("Can't set " + i(t) + " as a prototype")
                    }
                }
                ,
                1223: (t,e,r)=>{
                    var n = r(5112)
                      , o = r(30)
                      , i = r(3070)
                      , s = n("unscopables")
                      , a = Array.prototype;
                    null == a[s] && i.f(a, s, {
                        configurable: !0,
                        value: o(null)
                    }),
                    t.exports = function(t) {
                        a[s][t] = !0
                    }
                }
                ,
                9670: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(111)
                      , i = n.String
                      , s = n.TypeError;
                    t.exports = function(t) {
                        if (o(t))
                            return t;
                        throw s(i(t) + " is not an object")
                    }
                }
                ,
                1318: (t,e,r)=>{
                    var n = r(5656)
                      , o = r(1400)
                      , i = r(6244)
                      , s = function(t) {
                        return function(e, r, s) {
                            var a, c = n(e), u = i(c), p = o(s, u);
                            if (t && r != r) {
                                for (; u > p; )
                                    if ((a = c[p++]) != a)
                                        return !0
                            } else
                                for (; u > p; p++)
                                    if ((t || p in c) && c[p] === r)
                                        return t || p || 0;
                            return !t && -1
                        }
                    };
                    t.exports = {
                        includes: s(!0),
                        indexOf: s(!1)
                    }
                }
                ,
                4326: (t,e,r)=>{
                    var n = r(1702)
                      , o = n({}.toString)
                      , i = n("".slice);
                    t.exports = function(t) {
                        return i(o(t), 8, -1)
                    }
                }
                ,
                648: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(1694)
                      , i = r(614)
                      , s = r(4326)
                      , a = r(5112)("toStringTag")
                      , c = n.Object
                      , u = "Arguments" == s(function() {
                        return arguments
                    }());
                    t.exports = o ? s : function(t) {
                        var e, r, n;
                        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function(t, e) {
                            try {
                                return t[e]
                            } catch (t) {}
                        }(e = c(t), a)) ? r : u ? s(e) : "Object" == (n = s(e)) && i(e.callee) ? "Arguments" : n
                    }
                }
                ,
                7741: (t,e,r)=>{
                    var n = r(1702)("".replace)
                      , o = String(Error("zxcasd").stack)
                      , i = /\n\s*at [^:]*:[^\n]*/
                      , s = i.test(o);
                    t.exports = function(t, e) {
                        if (s && "string" == typeof t)
                            for (; e--; )
                                t = n(t, i, "");
                        return t
                    }
                }
                ,
                9920: (t,e,r)=>{
                    var n = r(2597)
                      , o = r(3887)
                      , i = r(1236)
                      , s = r(3070);
                    t.exports = function(t, e, r) {
                        for (var a = o(e), c = s.f, u = i.f, p = 0; p < a.length; p++) {
                            var l = a[p];
                            n(t, l) || r && n(r, l) || c(t, l, u(e, l))
                        }
                    }
                }
                ,
                8544: (t,e,r)=>{
                    var n = r(7293);
                    t.exports = !n((function() {
                        function t() {}
                        return t.prototype.constructor = null,
                        Object.getPrototypeOf(new t) !== t.prototype
                    }
                    ))
                }
                ,
                4994: (t,e,r)=>{
                    var n = r(3383).IteratorPrototype
                      , o = r(30)
                      , i = r(9114)
                      , s = r(8003)
                      , a = r(7497)
                      , c = function() {
                        return this
                    };
                    t.exports = function(t, e, r, u) {
                        var p = e + " Iterator";
                        return t.prototype = o(n, {
                            next: i(+!u, r)
                        }),
                        s(t, p, !1, !0),
                        a[p] = c,
                        t
                    }
                }
                ,
                8880: (t,e,r)=>{
                    var n = r(9781)
                      , o = r(3070)
                      , i = r(9114);
                    t.exports = n ? function(t, e, r) {
                        return o.f(t, e, i(1, r))
                    }
                    : function(t, e, r) {
                        return t[e] = r,
                        t
                    }
                }
                ,
                9114: t=>{
                    t.exports = function(t, e) {
                        return {
                            enumerable: !(1 & t),
                            configurable: !(2 & t),
                            writable: !(4 & t),
                            value: e
                        }
                    }
                }
                ,
                654: (t,e,r)=>{
                    var n = r(2109)
                      , o = r(6916)
                      , i = r(1913)
                      , s = r(6530)
                      , a = r(614)
                      , c = r(4994)
                      , u = r(9518)
                      , p = r(7674)
                      , l = r(8003)
                      , f = r(8880)
                      , h = r(1320)
                      , d = r(5112)
                      , v = r(7497)
                      , g = r(3383)
                      , y = s.PROPER
                      , m = s.CONFIGURABLE
                      , b = g.IteratorPrototype
                      , x = g.BUGGY_SAFARI_ITERATORS
                      , w = d("iterator")
                      , O = "keys"
                      , S = "values"
                      , E = "entries"
                      , A = function() {
                        return this
                    };
                    t.exports = function(t, e, r, s, d, g, P) {
                        c(r, e, s);
                        var k, _, j, I = function(t) {
                            if (t === d && M)
                                return M;
                            if (!x && t in N)
                                return N[t];
                            switch (t) {
                            case O:
                            case S:
                            case E:
                                return function() {
                                    return new r(this,t)
                                }
                            }
                            return function() {
                                return new r(this)
                            }
                        }, T = e + " Iterator", R = !1, N = t.prototype, L = N[w] || N["@@iterator"] || d && N[d], M = !x && L || I(d), C = "Array" == e && N.entries || L;
                        if (C && (k = u(C.call(new t))) !== Object.prototype && k.next && (i || u(k) === b || (p ? p(k, b) : a(k[w]) || h(k, w, A)),
                        l(k, T, !0, !0),
                        i && (v[T] = A)),
                        y && d == S && L && L.name !== S && (!i && m ? f(N, "name", S) : (R = !0,
                        M = function() {
                            return o(L, this)
                        }
                        )),
                        d)
                            if (_ = {
                                values: I(S),
                                keys: g ? M : I(O),
                                entries: I(E)
                            },
                            P)
                                for (j in _)
                                    (x || R || !(j in N)) && h(N, j, _[j]);
                            else
                                n({
                                    target: e,
                                    proto: !0,
                                    forced: x || R
                                }, _);
                        return i && !P || N[w] === M || h(N, w, M, {
                            name: d
                        }),
                        v[e] = M,
                        _
                    }
                }
                ,
                9781: (t,e,r)=>{
                    var n = r(7293);
                    t.exports = !n((function() {
                        return 7 != Object.defineProperty({}, 1, {
                            get: function() {
                                return 7
                            }
                        })[1]
                    }
                    ))
                }
                ,
                317: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(111)
                      , i = n.document
                      , s = o(i) && o(i.createElement);
                    t.exports = function(t) {
                        return s ? i.createElement(t) : {}
                    }
                }
                ,
                8324: t=>{
                    t.exports = {
                        CSSRuleList: 0,
                        CSSStyleDeclaration: 0,
                        CSSValueList: 0,
                        ClientRectList: 0,
                        DOMRectList: 0,
                        DOMStringList: 0,
                        DOMTokenList: 1,
                        DataTransferItemList: 0,
                        FileList: 0,
                        HTMLAllCollection: 0,
                        HTMLCollection: 0,
                        HTMLFormElement: 0,
                        HTMLSelectElement: 0,
                        MediaList: 0,
                        MimeTypeArray: 0,
                        NamedNodeMap: 0,
                        NodeList: 1,
                        PaintRequestList: 0,
                        Plugin: 0,
                        PluginArray: 0,
                        SVGLengthList: 0,
                        SVGNumberList: 0,
                        SVGPathSegList: 0,
                        SVGPointList: 0,
                        SVGStringList: 0,
                        SVGTransformList: 0,
                        SourceBufferList: 0,
                        StyleSheetList: 0,
                        TextTrackCueList: 0,
                        TextTrackList: 0,
                        TouchList: 0
                    }
                }
                ,
                8509: (t,e,r)=>{
                    var n = r(317)("span").classList
                      , o = n && n.constructor && n.constructor.prototype;
                    t.exports = o === Object.prototype ? void 0 : o
                }
                ,
                8113: (t,e,r)=>{
                    var n = r(5005);
                    t.exports = n("navigator", "userAgent") || ""
                }
                ,
                7392: (t,e,r)=>{
                    var n, o, i = r(7854), s = r(8113), a = i.process, c = i.Deno, u = a && a.versions || c && c.version, p = u && u.v8;
                    p && (o = (n = p.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
                    !o && s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (o = +n[1]),
                    t.exports = o
                }
                ,
                748: t=>{
                    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
                }
                ,
                2914: (t,e,r)=>{
                    var n = r(7293)
                      , o = r(9114);
                    t.exports = !n((function() {
                        var t = Error("a");
                        return !("stack"in t) || (Object.defineProperty(t, "stack", o(1, 7)),
                        7 !== t.stack)
                    }
                    ))
                }
                ,
                2109: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(1236).f
                      , i = r(8880)
                      , s = r(1320)
                      , a = r(3505)
                      , c = r(9920)
                      , u = r(4705);
                    t.exports = function(t, e) {
                        var r, p, l, f, h, d = t.target, v = t.global, g = t.stat;
                        if (r = v ? n : g ? n[d] || a(d, {}) : (n[d] || {}).prototype)
                            for (p in e) {
                                if (f = e[p],
                                l = t.noTargetGet ? (h = o(r, p)) && h.value : r[p],
                                !u(v ? p : d + (g ? "." : "#") + p, t.forced) && void 0 !== l) {
                                    if (typeof f == typeof l)
                                        continue;
                                    c(f, l)
                                }
                                (t.sham || l && l.sham) && i(f, "sham", !0),
                                s(r, p, f, t)
                            }
                    }
                }
                ,
                7293: t=>{
                    t.exports = function(t) {
                        try {
                            return !!t()
                        } catch (t) {
                            return !0
                        }
                    }
                }
                ,
                2104: (t,e,r)=>{
                    var n = r(4374)
                      , o = Function.prototype
                      , i = o.apply
                      , s = o.call;
                    t.exports = "object" == typeof Reflect && Reflect.apply || (n ? s.bind(i) : function() {
                        return s.apply(i, arguments)
                    }
                    )
                }
                ,
                4374: (t,e,r)=>{
                    var n = r(7293);
                    t.exports = !n((function() {
                        var t = function() {}
                        .bind();
                        return "function" != typeof t || t.hasOwnProperty("prototype")
                    }
                    ))
                }
                ,
                6916: (t,e,r)=>{
                    var n = r(4374)
                      , o = Function.prototype.call;
                    t.exports = n ? o.bind(o) : function() {
                        return o.apply(o, arguments)
                    }
                }
                ,
                6530: (t,e,r)=>{
                    var n = r(9781)
                      , o = r(2597)
                      , i = Function.prototype
                      , s = n && Object.getOwnPropertyDescriptor
                      , a = o(i, "name")
                      , c = a && "something" === function() {}
                    .name
                      , u = a && (!n || n && s(i, "name").configurable);
                    t.exports = {
                        EXISTS: a,
                        PROPER: c,
                        CONFIGURABLE: u
                    }
                }
                ,
                1702: (t,e,r)=>{
                    var n = r(4374)
                      , o = Function.prototype
                      , i = o.bind
                      , s = o.call
                      , a = n && i.bind(s, s);
                    t.exports = n ? function(t) {
                        return t && a(t)
                    }
                    : function(t) {
                        return t && function() {
                            return s.apply(t, arguments)
                        }
                    }
                }
                ,
                5005: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(614)
                      , i = function(t) {
                        return o(t) ? t : void 0
                    };
                    t.exports = function(t, e) {
                        return arguments.length < 2 ? i(n[t]) : n[t] && n[t][e]
                    }
                }
                ,
                8173: (t,e,r)=>{
                    var n = r(9662);
                    t.exports = function(t, e) {
                        var r = t[e];
                        return null == r ? void 0 : n(r)
                    }
                }
                ,
                7854: (t,e,r)=>{
                    var n = function(t) {
                        return t && t.Math == Math && t
                    };
                    t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function() {
                        return this
                    }() || Function("return this")()
                }
                ,
                2597: (t,e,r)=>{
                    var n = r(1702)
                      , o = r(7908)
                      , i = n({}.hasOwnProperty);
                    t.exports = Object.hasOwn || function(t, e) {
                        return i(o(t), e)
                    }
                }
                ,
                3501: t=>{
                    t.exports = {}
                }
                ,
                490: (t,e,r)=>{
                    var n = r(5005);
                    t.exports = n("document", "documentElement")
                }
                ,
                4664: (t,e,r)=>{
                    var n = r(9781)
                      , o = r(7293)
                      , i = r(317);
                    t.exports = !n && !o((function() {
                        return 7 != Object.defineProperty(i("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }
                    ))
                }
                ,
                8361: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(1702)
                      , i = r(7293)
                      , s = r(4326)
                      , a = n.Object
                      , c = o("".split);
                    t.exports = i((function() {
                        return !a("z").propertyIsEnumerable(0)
                    }
                    )) ? function(t) {
                        return "String" == s(t) ? c(t, "") : a(t)
                    }
                    : a
                }
                ,
                9587: (t,e,r)=>{
                    var n = r(614)
                      , o = r(111)
                      , i = r(7674);
                    t.exports = function(t, e, r) {
                        var s, a;
                        return i && n(s = e.constructor) && s !== r && o(a = s.prototype) && a !== r.prototype && i(t, a),
                        t
                    }
                }
                ,
                2788: (t,e,r)=>{
                    var n = r(1702)
                      , o = r(614)
                      , i = r(5465)
                      , s = n(Function.toString);
                    o(i.inspectSource) || (i.inspectSource = function(t) {
                        return s(t)
                    }
                    ),
                    t.exports = i.inspectSource
                }
                ,
                8340: (t,e,r)=>{
                    var n = r(111)
                      , o = r(8880);
                    t.exports = function(t, e) {
                        n(e) && "cause"in e && o(t, "cause", e.cause)
                    }
                }
                ,
                9909: (t,e,r)=>{
                    var n, o, i, s = r(8536), a = r(7854), c = r(1702), u = r(111), p = r(8880), l = r(2597), f = r(5465), h = r(6200), d = r(3501), v = "Object already initialized", g = a.TypeError, y = a.WeakMap;
                    if (s || f.state) {
                        var m = f.state || (f.state = new y)
                          , b = c(m.get)
                          , x = c(m.has)
                          , w = c(m.set);
                        n = function(t, e) {
                            if (x(m, t))
                                throw new g(v);
                            return e.facade = t,
                            w(m, t, e),
                            e
                        }
                        ,
                        o = function(t) {
                            return b(m, t) || {}
                        }
                        ,
                        i = function(t) {
                            return x(m, t)
                        }
                    } else {
                        var O = h("state");
                        d[O] = !0,
                        n = function(t, e) {
                            if (l(t, O))
                                throw new g(v);
                            return e.facade = t,
                            p(t, O, e),
                            e
                        }
                        ,
                        o = function(t) {
                            return l(t, O) ? t[O] : {}
                        }
                        ,
                        i = function(t) {
                            return l(t, O)
                        }
                    }
                    t.exports = {
                        set: n,
                        get: o,
                        has: i,
                        enforce: function(t) {
                            return i(t) ? o(t) : n(t, {})
                        },
                        getterFor: function(t) {
                            return function(e) {
                                var r;
                                if (!u(e) || (r = o(e)).type !== t)
                                    throw g("Incompatible receiver, " + t + " required");
                                return r
                            }
                        }
                    }
                }
                ,
                614: t=>{
                    t.exports = function(t) {
                        return "function" == typeof t
                    }
                }
                ,
                4705: (t,e,r)=>{
                    var n = r(7293)
                      , o = r(614)
                      , i = /#|\.prototype\./
                      , s = function(t, e) {
                        var r = c[a(t)];
                        return r == p || r != u && (o(e) ? n(e) : !!e)
                    }
                      , a = s.normalize = function(t) {
                        return String(t).replace(i, ".").toLowerCase()
                    }
                      , c = s.data = {}
                      , u = s.NATIVE = "N"
                      , p = s.POLYFILL = "P";
                    t.exports = s
                }
                ,
                111: (t,e,r)=>{
                    var n = r(614);
                    t.exports = function(t) {
                        return "object" == typeof t ? null !== t : n(t)
                    }
                }
                ,
                1913: t=>{
                    t.exports = !1
                }
                ,
                2190: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(5005)
                      , i = r(614)
                      , s = r(7976)
                      , a = r(3307)
                      , c = n.Object;
                    t.exports = a ? function(t) {
                        return "symbol" == typeof t
                    }
                    : function(t) {
                        var e = o("Symbol");
                        return i(e) && s(e.prototype, c(t))
                    }
                }
                ,
                3383: (t,e,r)=>{
                    var n, o, i, s = r(7293), a = r(614), c = r(30), u = r(9518), p = r(1320), l = r(5112), f = r(1913), h = l("iterator"), d = !1;
                    [].keys && ("next"in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (n = o) : d = !0),
                    null == n || s((function() {
                        var t = {};
                        return n[h].call(t) !== t
                    }
                    )) ? n = {} : f && (n = c(n)),
                    a(n[h]) || p(n, h, (function() {
                        return this
                    }
                    )),
                    t.exports = {
                        IteratorPrototype: n,
                        BUGGY_SAFARI_ITERATORS: d
                    }
                }
                ,
                7497: t=>{
                    t.exports = {}
                }
                ,
                6244: (t,e,r)=>{
                    var n = r(7466);
                    t.exports = function(t) {
                        return n(t.length)
                    }
                }
                ,
                133: (t,e,r)=>{
                    var n = r(7392)
                      , o = r(7293);
                    t.exports = !!Object.getOwnPropertySymbols && !o((function() {
                        var t = Symbol();
                        return !String(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && n && n < 41
                    }
                    ))
                }
                ,
                8536: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(614)
                      , i = r(2788)
                      , s = n.WeakMap;
                    t.exports = o(s) && /native code/.test(i(s))
                }
                ,
                6277: (t,e,r)=>{
                    var n = r(1340);
                    t.exports = function(t, e) {
                        return void 0 === t ? arguments.length < 2 ? "" : e : n(t)
                    }
                }
                ,
                30: (t,e,r)=>{
                    var n, o = r(9670), i = r(6048), s = r(748), a = r(3501), c = r(490), u = r(317), p = r(6200)("IE_PROTO"), l = function() {}, f = function(t) {
                        return "<script>" + t + "<\/script>"
                    }, h = function(t) {
                        t.write(f("")),
                        t.close();
                        var e = t.parentWindow.Object;
                        return t = null,
                        e
                    }, d = function() {
                        try {
                            n = new ActiveXObject("htmlfile")
                        } catch (t) {}
                        var t, e;
                        d = "undefined" != typeof document ? document.domain && n ? h(n) : ((e = u("iframe")).style.display = "none",
                        c.appendChild(e),
                        e.src = String("javascript:"),
                        (t = e.contentWindow.document).open(),
                        t.write(f("document.F=Object")),
                        t.close(),
                        t.F) : h(n);
                        for (var r = s.length; r--; )
                            delete d.prototype[s[r]];
                        return d()
                    };
                    a[p] = !0,
                    t.exports = Object.create || function(t, e) {
                        var r;
                        return null !== t ? (l.prototype = o(t),
                        r = new l,
                        l.prototype = null,
                        r[p] = t) : r = d(),
                        void 0 === e ? r : i.f(r, e)
                    }
                }
                ,
                6048: (t,e,r)=>{
                    var n = r(9781)
                      , o = r(3353)
                      , i = r(3070)
                      , s = r(9670)
                      , a = r(5656)
                      , c = r(1956);
                    e.f = n && !o ? Object.defineProperties : function(t, e) {
                        s(t);
                        for (var r, n = a(e), o = c(e), u = o.length, p = 0; u > p; )
                            i.f(t, r = o[p++], n[r]);
                        return t
                    }
                }
                ,
                3070: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(9781)
                      , i = r(4664)
                      , s = r(3353)
                      , a = r(9670)
                      , c = r(4948)
                      , u = n.TypeError
                      , p = Object.defineProperty
                      , l = Object.getOwnPropertyDescriptor;
                    e.f = o ? s ? function(t, e, r) {
                        if (a(t),
                        e = c(e),
                        a(r),
                        "function" == typeof t && "prototype" === e && "value"in r && "writable"in r && !r.writable) {
                            var n = l(t, e);
                            n && n.writable && (t[e] = r.value,
                            r = {
                                configurable: "configurable"in r ? r.configurable : n.configurable,
                                enumerable: "enumerable"in r ? r.enumerable : n.enumerable,
                                writable: !1
                            })
                        }
                        return p(t, e, r)
                    }
                    : p : function(t, e, r) {
                        if (a(t),
                        e = c(e),
                        a(r),
                        i)
                            try {
                                return p(t, e, r)
                            } catch (t) {}
                        if ("get"in r || "set"in r)
                            throw u("Accessors not supported");
                        return "value"in r && (t[e] = r.value),
                        t
                    }
                }
                ,
                1236: (t,e,r)=>{
                    var n = r(9781)
                      , o = r(6916)
                      , i = r(5296)
                      , s = r(9114)
                      , a = r(5656)
                      , c = r(4948)
                      , u = r(2597)
                      , p = r(4664)
                      , l = Object.getOwnPropertyDescriptor;
                    e.f = n ? l : function(t, e) {
                        if (t = a(t),
                        e = c(e),
                        p)
                            try {
                                return l(t, e)
                            } catch (t) {}
                        if (u(t, e))
                            return s(!o(i.f, t, e), t[e])
                    }
                }
                ,
                8006: (t,e,r)=>{
                    var n = r(6324)
                      , o = r(748).concat("length", "prototype");
                    e.f = Object.getOwnPropertyNames || function(t) {
                        return n(t, o)
                    }
                }
                ,
                5181: (t,e)=>{
                    e.f = Object.getOwnPropertySymbols
                }
                ,
                9518: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(2597)
                      , i = r(614)
                      , s = r(7908)
                      , a = r(6200)
                      , c = r(8544)
                      , u = a("IE_PROTO")
                      , p = n.Object
                      , l = p.prototype;
                    t.exports = c ? p.getPrototypeOf : function(t) {
                        var e = s(t);
                        if (o(e, u))
                            return e[u];
                        var r = e.constructor;
                        return i(r) && e instanceof r ? r.prototype : e instanceof p ? l : null
                    }
                }
                ,
                7976: (t,e,r)=>{
                    var n = r(1702);
                    t.exports = n({}.isPrototypeOf)
                }
                ,
                6324: (t,e,r)=>{
                    var n = r(1702)
                      , o = r(2597)
                      , i = r(5656)
                      , s = r(1318).indexOf
                      , a = r(3501)
                      , c = n([].push);
                    t.exports = function(t, e) {
                        var r, n = i(t), u = 0, p = [];
                        for (r in n)
                            !o(a, r) && o(n, r) && c(p, r);
                        for (; e.length > u; )
                            o(n, r = e[u++]) && (~s(p, r) || c(p, r));
                        return p
                    }
                }
                ,
                1956: (t,e,r)=>{
                    var n = r(6324)
                      , o = r(748);
                    t.exports = Object.keys || function(t) {
                        return n(t, o)
                    }
                }
                ,
                5296: (t,e)=>{
                    var r = {}.propertyIsEnumerable
                      , n = Object.getOwnPropertyDescriptor
                      , o = n && !r.call({
                        1: 2
                    }, 1);
                    e.f = o ? function(t) {
                        var e = n(this, t);
                        return !!e && e.enumerable
                    }
                    : r
                }
                ,
                7674: (t,e,r)=>{
                    var n = r(1702)
                      , o = r(9670)
                      , i = r(6077);
                    t.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
                        var t, e = !1, r = {};
                        try {
                            (t = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []),
                            e = r instanceof Array
                        } catch (t) {}
                        return function(r, n) {
                            return o(r),
                            i(n),
                            e ? t(r, n) : r.__proto__ = n,
                            r
                        }
                    }() : void 0)
                }
                ,
                2140: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(6916)
                      , i = r(614)
                      , s = r(111)
                      , a = n.TypeError;
                    t.exports = function(t, e) {
                        var r, n;
                        if ("string" === e && i(r = t.toString) && !s(n = o(r, t)))
                            return n;
                        if (i(r = t.valueOf) && !s(n = o(r, t)))
                            return n;
                        if ("string" !== e && i(r = t.toString) && !s(n = o(r, t)))
                            return n;
                        throw a("Can't convert object to primitive value")
                    }
                }
                ,
                3887: (t,e,r)=>{
                    var n = r(5005)
                      , o = r(1702)
                      , i = r(8006)
                      , s = r(5181)
                      , a = r(9670)
                      , c = o([].concat);
                    t.exports = n("Reflect", "ownKeys") || function(t) {
                        var e = i.f(a(t))
                          , r = s.f;
                        return r ? c(e, r(t)) : e
                    }
                }
                ,
                1320: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(614)
                      , i = r(2597)
                      , s = r(8880)
                      , a = r(3505)
                      , c = r(2788)
                      , u = r(9909)
                      , p = r(6530).CONFIGURABLE
                      , l = u.get
                      , f = u.enforce
                      , h = String(String).split("String");
                    (t.exports = function(t, e, r, c) {
                        var u, l = !!c && !!c.unsafe, d = !!c && !!c.enumerable, v = !!c && !!c.noTargetGet, g = c && void 0 !== c.name ? c.name : e;
                        o(r) && ("Symbol(" === String(g).slice(0, 7) && (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                        (!i(r, "name") || p && r.name !== g) && s(r, "name", g),
                        (u = f(r)).source || (u.source = h.join("string" == typeof g ? g : ""))),
                        t !== n ? (l ? !v && t[e] && (d = !0) : delete t[e],
                        d ? t[e] = r : s(t, e, r)) : d ? t[e] = r : a(e, r)
                    }
                    )(Function.prototype, "toString", (function() {
                        return o(this) && l(this).source || c(this)
                    }
                    ))
                }
                ,
                2261: (t,e,r)=>{
                    var n, o, i = r(6916), s = r(1702), a = r(1340), c = r(7066), u = r(2999), p = r(2309), l = r(30), f = r(9909).get, h = r(9441), d = r(7168), v = p("native-string-replace", String.prototype.replace), g = RegExp.prototype.exec, y = g, m = s("".charAt), b = s("".indexOf), x = s("".replace), w = s("".slice), O = (o = /b*/g,
                    i(g, n = /a/, "a"),
                    i(g, o, "a"),
                    0 !== n.lastIndex || 0 !== o.lastIndex), S = u.BROKEN_CARET, E = void 0 !== /()??/.exec("")[1];
                    (O || E || S || h || d) && (y = function(t) {
                        var e, r, n, o, s, u, p, h = this, d = f(h), A = a(t), P = d.raw;
                        if (P)
                            return P.lastIndex = h.lastIndex,
                            e = i(y, P, A),
                            h.lastIndex = P.lastIndex,
                            e;
                        var k = d.groups
                          , _ = S && h.sticky
                          , j = i(c, h)
                          , I = h.source
                          , T = 0
                          , R = A;
                        if (_ && (j = x(j, "y", ""),
                        -1 === b(j, "g") && (j += "g"),
                        R = w(A, h.lastIndex),
                        h.lastIndex > 0 && (!h.multiline || h.multiline && "\n" !== m(A, h.lastIndex - 1)) && (I = "(?: " + I + ")",
                        R = " " + R,
                        T++),
                        r = new RegExp("^(?:" + I + ")",j)),
                        E && (r = new RegExp("^" + I + "$(?!\\s)",j)),
                        O && (n = h.lastIndex),
                        o = i(g, _ ? r : h, R),
                        _ ? o ? (o.input = w(o.input, T),
                        o[0] = w(o[0], T),
                        o.index = h.lastIndex,
                        h.lastIndex += o[0].length) : h.lastIndex = 0 : O && o && (h.lastIndex = h.global ? o.index + o[0].length : n),
                        E && o && o.length > 1 && i(v, o[0], r, (function() {
                            for (s = 1; s < arguments.length - 2; s++)
                                void 0 === arguments[s] && (o[s] = void 0)
                        }
                        )),
                        o && k)
                            for (o.groups = u = l(null),
                            s = 0; s < k.length; s++)
                                u[(p = k[s])[0]] = o[p[1]];
                        return o
                    }
                    ),
                    t.exports = y
                }
                ,
                7066: (t,e,r)=>{
                    var n = r(9670);
                    t.exports = function() {
                        var t = n(this)
                          , e = "";
                        return t.global && (e += "g"),
                        t.ignoreCase && (e += "i"),
                        t.multiline && (e += "m"),
                        t.dotAll && (e += "s"),
                        t.unicode && (e += "u"),
                        t.sticky && (e += "y"),
                        e
                    }
                }
                ,
                2999: (t,e,r)=>{
                    var n = r(7293)
                      , o = r(7854).RegExp
                      , i = n((function() {
                        var t = o("a", "y");
                        return t.lastIndex = 2,
                        null != t.exec("abcd")
                    }
                    ))
                      , s = i || n((function() {
                        return !o("a", "y").sticky
                    }
                    ))
                      , a = i || n((function() {
                        var t = o("^r", "gy");
                        return t.lastIndex = 2,
                        null != t.exec("str")
                    }
                    ));
                    t.exports = {
                        BROKEN_CARET: a,
                        MISSED_STICKY: s,
                        UNSUPPORTED_Y: i
                    }
                }
                ,
                9441: (t,e,r)=>{
                    var n = r(7293)
                      , o = r(7854).RegExp;
                    t.exports = n((function() {
                        var t = o(".", "s");
                        return !(t.dotAll && t.exec("\n") && "s" === t.flags)
                    }
                    ))
                }
                ,
                7168: (t,e,r)=>{
                    var n = r(7293)
                      , o = r(7854).RegExp;
                    t.exports = n((function() {
                        var t = o("(?<a>b)", "g");
                        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
                    }
                    ))
                }
                ,
                4488: (t,e,r)=>{
                    var n = r(7854).TypeError;
                    t.exports = function(t) {
                        if (null == t)
                            throw n("Can't call method on " + t);
                        return t
                    }
                }
                ,
                3505: (t,e,r)=>{
                    var n = r(7854)
                      , o = Object.defineProperty;
                    t.exports = function(t, e) {
                        try {
                            o(n, t, {
                                value: e,
                                configurable: !0,
                                writable: !0
                            })
                        } catch (r) {
                            n[t] = e
                        }
                        return e
                    }
                }
                ,
                8003: (t,e,r)=>{
                    var n = r(3070).f
                      , o = r(2597)
                      , i = r(5112)("toStringTag");
                    t.exports = function(t, e, r) {
                        t && !r && (t = t.prototype),
                        t && !o(t, i) && n(t, i, {
                            configurable: !0,
                            value: e
                        })
                    }
                }
                ,
                6200: (t,e,r)=>{
                    var n = r(2309)
                      , o = r(9711)
                      , i = n("keys");
                    t.exports = function(t) {
                        return i[t] || (i[t] = o(t))
                    }
                }
                ,
                5465: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(3505)
                      , i = "__core-js_shared__"
                      , s = n[i] || o(i, {});
                    t.exports = s
                }
                ,
                2309: (t,e,r)=>{
                    var n = r(1913)
                      , o = r(5465);
                    (t.exports = function(t, e) {
                        return o[t] || (o[t] = void 0 !== e ? e : {})
                    }
                    )("versions", []).push({
                        version: "3.20.3",
                        mode: n ? "pure" : "global",
                        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                        license: "https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",
                        source: "https://github.com/zloirock/core-js"
                    })
                }
                ,
                1400: (t,e,r)=>{
                    var n = r(9303)
                      , o = Math.max
                      , i = Math.min;
                    t.exports = function(t, e) {
                        var r = n(t);
                        return r < 0 ? o(r + e, 0) : i(r, e)
                    }
                }
                ,
                5656: (t,e,r)=>{
                    var n = r(8361)
                      , o = r(4488);
                    t.exports = function(t) {
                        return n(o(t))
                    }
                }
                ,
                9303: t=>{
                    var e = Math.ceil
                      , r = Math.floor;
                    t.exports = function(t) {
                        var n = +t;
                        return n != n || 0 === n ? 0 : (n > 0 ? r : e)(n)
                    }
                }
                ,
                7466: (t,e,r)=>{
                    var n = r(9303)
                      , o = Math.min;
                    t.exports = function(t) {
                        return t > 0 ? o(n(t), 9007199254740991) : 0
                    }
                }
                ,
                7908: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(4488)
                      , i = n.Object;
                    t.exports = function(t) {
                        return i(o(t))
                    }
                }
                ,
                7593: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(6916)
                      , i = r(111)
                      , s = r(2190)
                      , a = r(8173)
                      , c = r(2140)
                      , u = r(5112)
                      , p = n.TypeError
                      , l = u("toPrimitive");
                    t.exports = function(t, e) {
                        if (!i(t) || s(t))
                            return t;
                        var r, n = a(t, l);
                        if (n) {
                            if (void 0 === e && (e = "default"),
                            r = o(n, t, e),
                            !i(r) || s(r))
                                return r;
                            throw p("Can't convert object to primitive value")
                        }
                        return void 0 === e && (e = "number"),
                        c(t, e)
                    }
                }
                ,
                4948: (t,e,r)=>{
                    var n = r(7593)
                      , o = r(2190);
                    t.exports = function(t) {
                        var e = n(t, "string");
                        return o(e) ? e : e + ""
                    }
                }
                ,
                1694: (t,e,r)=>{
                    var n = {};
                    n[r(5112)("toStringTag")] = "z",
                    t.exports = "[object z]" === String(n)
                }
                ,
                1340: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(648)
                      , i = n.String;
                    t.exports = function(t) {
                        if ("Symbol" === o(t))
                            throw TypeError("Cannot convert a Symbol value to a string");
                        return i(t)
                    }
                }
                ,
                6330: (t,e,r)=>{
                    var n = r(7854).String;
                    t.exports = function(t) {
                        try {
                            return n(t)
                        } catch (t) {
                            return "Object"
                        }
                    }
                }
                ,
                9711: (t,e,r)=>{
                    var n = r(1702)
                      , o = 0
                      , i = Math.random()
                      , s = n(1..toString);
                    t.exports = function(t) {
                        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++o + i, 36)
                    }
                }
                ,
                3307: (t,e,r)=>{
                    var n = r(133);
                    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
                }
                ,
                3353: (t,e,r)=>{
                    var n = r(9781)
                      , o = r(7293);
                    t.exports = n && o((function() {
                        return 42 != Object.defineProperty((function() {}
                        ), "prototype", {
                            value: 42,
                            writable: !1
                        }).prototype
                    }
                    ))
                }
                ,
                5112: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(2309)
                      , i = r(2597)
                      , s = r(9711)
                      , a = r(133)
                      , c = r(3307)
                      , u = o("wks")
                      , p = n.Symbol
                      , l = p && p.for
                      , f = c ? p : p && p.withoutSetter || s;
                    t.exports = function(t) {
                        if (!i(u, t) || !a && "string" != typeof u[t]) {
                            var e = "Symbol." + t;
                            a && i(p, t) ? u[t] = p[t] : u[t] = c && l ? l(e) : f(e)
                        }
                        return u[t]
                    }
                }
                ,
                9191: (t,e,r)=>{
                    var n = r(5005)
                      , o = r(2597)
                      , i = r(8880)
                      , s = r(7976)
                      , a = r(7674)
                      , c = r(9920)
                      , u = r(9587)
                      , p = r(6277)
                      , l = r(8340)
                      , f = r(7741)
                      , h = r(2914)
                      , d = r(1913);
                    t.exports = function(t, e, r, v) {
                        var g = v ? 2 : 1
                          , y = t.split(".")
                          , m = y[y.length - 1]
                          , b = n.apply(null, y);
                        if (b) {
                            var x = b.prototype;
                            if (!d && o(x, "cause") && delete x.cause,
                            !r)
                                return b;
                            var w = n("Error")
                              , O = e((function(t, e) {
                                var r = p(v ? e : t, void 0)
                                  , n = v ? new b(t) : new b;
                                return void 0 !== r && i(n, "message", r),
                                h && i(n, "stack", f(n.stack, 2)),
                                this && s(x, this) && u(n, this, O),
                                arguments.length > g && l(n, arguments[g]),
                                n
                            }
                            ));
                            if (O.prototype = x,
                            "Error" !== m && (a ? a(O, w) : c(O, w, {
                                name: !0
                            })),
                            c(O, b),
                            !d)
                                try {
                                    x.name !== m && i(x, "name", m),
                                    x.constructor = O
                                } catch (t) {}
                            return O
                        }
                    }
                }
                ,
                6992: (t,e,r)=>{
                    var n = r(5656)
                      , o = r(1223)
                      , i = r(7497)
                      , s = r(9909)
                      , a = r(3070).f
                      , c = r(654)
                      , u = r(1913)
                      , p = r(9781)
                      , l = "Array Iterator"
                      , f = s.set
                      , h = s.getterFor(l);
                    t.exports = c(Array, "Array", (function(t, e) {
                        f(this, {
                            type: l,
                            target: n(t),
                            index: 0,
                            kind: e
                        })
                    }
                    ), (function() {
                        var t = h(this)
                          , e = t.target
                          , r = t.kind
                          , n = t.index++;
                        return !e || n >= e.length ? (t.target = void 0,
                        {
                            value: void 0,
                            done: !0
                        }) : "keys" == r ? {
                            value: n,
                            done: !1
                        } : "values" == r ? {
                            value: e[n],
                            done: !1
                        } : {
                            value: [n, e[n]],
                            done: !1
                        }
                    }
                    ), "values");
                    var d = i.Arguments = i.Array;
                    if (o("keys"),
                    o("values"),
                    o("entries"),
                    !u && p && "values" !== d.name)
                        try {
                            a(d, "name", {
                                value: "values"
                            })
                        } catch (t) {}
                }
                ,
                1703: (t,e,r)=>{
                    var n = r(2109)
                      , o = r(7854)
                      , i = r(2104)
                      , s = r(9191)
                      , a = o.WebAssembly
                      , c = 7 !== Error("e", {
                        cause: 7
                    }).cause
                      , u = function(t, e) {
                        var r = {};
                        r[t] = s(t, e, c),
                        n({
                            global: !0,
                            forced: c
                        }, r)
                    }
                      , p = function(t, e) {
                        if (a && a[t]) {
                            var r = {};
                            r[t] = s("WebAssembly." + t, e, c),
                            n({
                                target: "WebAssembly",
                                stat: !0,
                                forced: c
                            }, r)
                        }
                    };
                    u("Error", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    )),
                    u("EvalError", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    )),
                    u("RangeError", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    )),
                    u("ReferenceError", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    )),
                    u("SyntaxError", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    )),
                    u("TypeError", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    )),
                    u("URIError", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    )),
                    p("CompileError", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    )),
                    p("LinkError", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    )),
                    p("RuntimeError", (function(t) {
                        return function(e) {
                            return i(t, this, arguments)
                        }
                    }
                    ))
                }
                ,
                4916: (t,e,r)=>{
                    var n = r(2109)
                      , o = r(2261);
                    n({
                        target: "RegExp",
                        proto: !0,
                        forced: /./.exec !== o
                    }, {
                        exec: o
                    })
                }
                ,
                3948: (t,e,r)=>{
                    var n = r(7854)
                      , o = r(8324)
                      , i = r(8509)
                      , s = r(6992)
                      , a = r(8880)
                      , c = r(5112)
                      , u = c("iterator")
                      , p = c("toStringTag")
                      , l = s.values
                      , f = function(t, e) {
                        if (t) {
                            if (t[u] !== l)
                                try {
                                    a(t, u, l)
                                } catch (e) {
                                    t[u] = l
                                }
                            if (t[p] || a(t, p, e),
                            o[e])
                                for (var r in s)
                                    if (t[r] !== s[r])
                                        try {
                                            a(t, r, s[r])
                                        } catch (e) {
                                            t[r] = s[r]
                                        }
                        }
                    };
                    for (var h in o)
                        f(n[h] && n[h].prototype, h);
                    f(i, "DOMTokenList")
                }
            }
              , e = {};
            function r(n) {
                var o = e[n];
                if (void 0 !== o)
                    return o.exports;
                var i = e[n] = {
                    exports: {}
                };
                return t[n](i, i.exports, r),
                i.exports
            }
            r.n = t=>{
                var e = t && t.__esModule ? ()=>t.default : ()=>t;
                return r.d(e, {
                    a: e
                }),
                e
            }
            ,
            r.d = (t,e)=>{
                for (var n in e)
                    r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: e[n]
                    })
            }
            ,
            r.g = function() {
                if ("object" == typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" == typeof window)
                        return window
                }
            }(),
            r.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
            r.r = t=>{
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ;
            var n = {};
            return (()=>{
                r.r(n),
                r.d(n, {
                    AudioExtension: ()=>w,
                    AudioProcessor: ()=>b,
                    Extension: ()=>x,
                    Ticker: ()=>S,
                    VideoProcessor: ()=>m,
                    logger: ()=>l,
                    reporter: ()=>d
                });
                var t = r(4341);
                function e(e, r, n) {
                    return r in e ? t(e, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = n,
                    e
                }
                r(1703),
                r(6992),
                r(3948);
                var o = r(3476)
                  , i = r.n(o);
                function s() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7
                      , e = arguments.length > 1 ? arguments[1] : void 0;
                    const r = Math.random().toString(16).substr(2, t).toLowerCase();
                    return r.length === t ? "".concat(e).concat(r) : "".concat(e).concat(r) + s(t - r.length, "")
                }
                r(4916);
                const a = Date.now()
                  , c = {
                    DEBUG: 0,
                    INFO: 1,
                    WARNING: 2,
                    ERROR: 3,
                    NONE: 4
                };
                function u() {
                    const t = new Date;
                    return t.toTimeString().split(" ")[0] + ":" + t.getMilliseconds()
                }
                const p = t=>{
                    for (const e in c)
                        if (Object.prototype.hasOwnProperty.call(c, e) && c[e] === t)
                            return e;
                    return "DEFAULT"
                }
                  , l = new class {
                    constructor() {
                        e(this, "logLevel", c.DEBUG),
                        e(this, "hookLog", void 0)
                    }
                    debug() {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                            e[r] = arguments[r];
                        const n = [c.DEBUG].concat(e);
                        this.log.apply(this, n)
                    }
                    info() {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                            e[r] = arguments[r];
                        const n = [c.INFO].concat(e);
                        this.log.apply(this, n)
                    }
                    warning() {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                            e[r] = arguments[r];
                        const n = [c.WARNING].concat(e);
                        this.log.apply(this, n)
                    }
                    error() {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                            e[r] = arguments[r];
                        const n = [c.ERROR].concat(e);
                        this.log.apply(this, n)
                    }
                    log() {
                        for (var t, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                            r[n] = arguments[n];
                        if (Date.now() - a < 100)
                            return void setTimeout((()=>{
                                this.log(...r)
                            }
                            ), Date.now() - a);
                        const o = Math.max(0, Math.min(4, r[0]));
                        if (r[0] = u() + " Agora-Extension [".concat(p(o), "]:"),
                        o < this.logLevel)
                            return;
                        const i = u() + " %cAgora-Extension [".concat(p(o), "]:");
                        let s = [];
                        switch (o) {
                        case c.DEBUG:
                            s = [i, "color: #64B5F6;"].concat(r.slice(1)),
                            console.log.apply(console, s);
                            break;
                        case c.INFO:
                            s = [i, "color: #1E88E5; font-weight: bold;"].concat(r.slice(1)),
                            console.log.apply(console, s);
                            break;
                        case c.WARNING:
                            s = [i, "color: #FB8C00; font-weight: bold;"].concat(r.slice(1)),
                            console.warn.apply(console, s);
                            break;
                        case c.ERROR:
                            s = [i, "color: #B00020; font-weight: bold;"].concat(r.slice(1)),
                            console.error.apply(console, s)
                        }
                        null === (t = this.hookLog) || void 0 === t || t.call(this, o, s)
                    }
                }
                ;
                function f(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }
                        ))),
                        r.push.apply(r, n)
                    }
                    return r
                }
                function h(t) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? f(Object(n), !0).forEach((function(r) {
                            e(t, r, n[r])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }
                        ))
                    }
                    return t
                }
                const d = new class {
                    constructor() {
                        e(this, "apiInvokeMsgQueue", []),
                        e(this, "hookApiInvoke", void 0)
                    }
                    reportApiInvoke(t) {
                        t.timeout = t.timeout || 6e4,
                        t.reportResult = void 0 === t.reportResult || t.reportResult;
                        const e = Date.now()
                          , r = ()=>({
                            name: t.name,
                            apiInvokeTime: e,
                            options: t.options
                        });
                        let n = !1;
                        var o;
                        (o = t.timeout,
                        new (i())((t=>{
                            window.setTimeout(t, o)
                        }
                        ))).then((()=>{
                            n || (this.sendApiInvoke(h(h({}, r()), {}, {
                                error: "API_INVOKE_TIMEOUT",
                                success: !1
                            })),
                            l.debug("".concat(t.name, " timeout")))
                        }
                        ));
                        const s = new Error("".concat(t.name, ": this api invoke is end"));
                        return {
                            onSuccess: e=>{
                                if (n)
                                    throw s;
                                n = !0,
                                this.sendApiInvoke(h(h({}, r()), {}, {
                                    success: !0
                                }, t.reportResult && {
                                    result: e
                                }))
                            }
                            ,
                            onError: t=>{
                                if (n)
                                    throw t;
                                n = !0,
                                this.sendApiInvoke(h(h({}, r()), {}, {
                                    success: !1,
                                    error: t.toString()
                                }))
                            }
                        }
                    }
                    sendApiInvoke(t) {
                        this.hookApiInvoke ? (this.hookApiInvoke([...this.apiInvokeMsgQueue, t]),
                        this.apiInvokeMsgQueue = []) : this.apiInvokeMsgQueue.push(t)
                    }
                }
                ;
                function v(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }
                        ))),
                        r.push.apply(r, n)
                    }
                    return r
                }
                function g(t) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? v(Object(n), !0).forEach((function(r) {
                            e(t, r, n[r])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }
                        ))
                    }
                    return t
                }
                class y extends class {
                    constructor() {
                        e(this, "_events", {}),
                        e(this, "addListener", this.on)
                    }
                    getListeners(t) {
                        return this._events[t] ? this._events[t].map((t=>t.listener)) : []
                    }
                    on(t, e) {
                        this._events[t] || (this._events[t] = []);
                        const r = this._events[t];
                        -1 === this._indexOfListener(r, e) && r.push({
                            listener: e,
                            once: !1
                        })
                    }
                    once(t, e) {
                        this._events[t] || (this._events[t] = []);
                        const r = this._events[t];
                        -1 === this._indexOfListener(r, e) && r.push({
                            listener: e,
                            once: !0
                        })
                    }
                    off(t, e) {
                        if (!this._events[t])
                            return;
                        const r = this._events[t]
                          , n = this._indexOfListener(r, e);
                        -1 !== n && r.splice(n, 1),
                        0 === this._events[t].length && delete this._events[t]
                    }
                    removeAllListeners(t) {
                        t ? delete this._events[t] : this._events = {}
                    }
                    emit(t) {
                        this._events[t] || (this._events[t] = []);
                        const e = this._events[t].map((t=>t));
                        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                            n[o - 1] = arguments[o];
                        for (let r = 0; r < e.length; r += 1) {
                            const o = e[r];
                            o.once && this.off(t, o.listener),
                            o.listener.apply(this, n || [])
                        }
                    }
                    _indexOfListener(t, e) {
                        let r = t.length;
                        for (; r--; )
                            if (t[r].listener === e)
                                return r;
                        return -1
                    }
                    emitAsPromise(t) {
                        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                            r[n - 1] = arguments[n];
                        return 0 === this.getListeners(t).length ? i().reject(new Error("No promise event handler.")) : new (i())(((e,n)=>{
                            this.emit(t, ...r, e, n)
                        }
                        ))
                    }
                    emitAsPromiseNoResponse(t) {
                        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                            r[n - 1] = arguments[n];
                        return 0 === this.getListeners(t).length ? i().resolve() : new (i())(((e,n)=>{
                            this.emit(t, ...r, e, n)
                        }
                        ))
                    }
                }
                {
                    get enabled() {
                        return this._enabled
                    }
                    output(t, e) {
                        if (this.outputTrack === t)
                            return;
                        const r = d.reportApiInvoke({
                            name: "".concat(this.name, ".output"),
                            options: {
                                track: null == t ? void 0 : t.toString()
                            }
                        });
                        this.outputTrack = t,
                        this.destination && this.destination.updateInput({
                            track: t,
                            context: e
                        }),
                        r.onSuccess()
                    }
                    constructor() {
                        super(),
                        e(this, "inputTrack", void 0),
                        e(this, "outputTrack", void 0),
                        e(this, "_enabled", !0),
                        e(this, "_source", void 0),
                        e(this, "ID", s(6, "")),
                        e(this, "destination", void 0),
                        e(this, "context", void 0),
                        e(this, "name", void 0)
                    }
                    enable() {
                        if (this._enabled)
                            return;
                        const t = d.reportApiInvoke({
                            name: "".concat(this.name, ".setEnabled"),
                            options: !0
                        });
                        l.info("".concat(this.name, "-").concat(this.ID, " enabled")),
                        this._enabled = !0;
                        try {
                            var e;
                            const r = null === (e = this.onEnableChange) || void 0 === e ? void 0 : e.call(this, this._enabled);
                            if (r instanceof i())
                                return r.then((()=>{
                                    t.onSuccess()
                                }
                                )).catch((e=>{
                                    throw t.onError(e),
                                    e
                                }
                                ));
                            t.onSuccess()
                        } catch (e) {
                            throw t.onError(e),
                            e
                        }
                    }
                    disable() {
                        if (!this._enabled)
                            return;
                        const t = d.reportApiInvoke({
                            name: "".concat(this.name, ".setEnabled"),
                            options: !1
                        });
                        l.info("".concat(this.name, "-").concat(this.ID, " disabled")),
                        this._enabled = !1;
                        try {
                            var e;
                            const r = null === (e = this.onEnableChange) || void 0 === e ? void 0 : e.call(this, this._enabled);
                            if (r instanceof i())
                                return r.then((()=>{
                                    t.onSuccess()
                                }
                                )).catch((e=>{
                                    throw t.onError(e),
                                    e
                                }
                                ));
                            t.onSuccess()
                        } catch (e) {
                            throw t.onError(e),
                            e
                        }
                    }
                }
                class m extends y {
                    get kind() {
                        return "video"
                    }
                    pipe(t) {
                        const e = d.reportApiInvoke({
                            name: "".concat(this.name, ".pipe"),
                            options: {
                                processor: t.name
                            }
                        });
                        if (this.destination === t)
                            return e.onSuccess(),
                            t;
                        if (t._source) {
                            const r = new Error("Processor ".concat(t.name, " already piped, please call unpipe beforehand."));
                            throw e.onError(r),
                            r
                        }
                        return this.destination && this.unpipe(),
                        this.destination = t,
                        t._source = this,
                        this.context && this.destination.updateInput({
                            track: this.outputTrack,
                            context: this.context
                        }),
                        e.onSuccess(),
                        t
                    }
                    unpipe() {
                        if (!this.destination)
                            return;
                        const t = d.reportApiInvoke({
                            name: "".concat(this.name, ".unpipe"),
                            options: {
                                processor: this.destination.name
                            }
                        });
                        l.info("unpiping processor ".concat(this.destination.name, "-").concat(this.destination.ID));
                        try {
                            const e = this.destination;
                            this.destination._source = void 0,
                            this.destination = void 0,
                            e.reset()
                        } finally {
                            t.onSuccess()
                        }
                    }
                    updateInput(t) {
                        var e, r;
                        t.context !== this.context && (this.context = t.context,
                        null === (e = this.onPiped) || void 0 === e || e.call(this, this.context),
                        this.destination && this.destination.updateInput({
                            track: this.outputTrack,
                            context: t.context
                        })),
                        t.track && this.inputTrack !== t.track && (this.inputTrack = t.track,
                        null === (r = this.onTrack) || void 0 === r || r.call(this, t.track, this.context))
                    }
                    reset() {
                        var t;
                        this.context && this.context.requestRevertConstraints(this),
                        this.inputTrack = void 0,
                        this.context = void 0,
                        null === (t = this.onUnpiped) || void 0 === t || t.call(this),
                        this.destination && this.destination.reset()
                    }
                }
                class b extends y {
                    constructor() {
                        super(...arguments),
                        e(this, "inputNode", void 0),
                        e(this, "outputNode", void 0),
                        e(this, "destination", void 0),
                        e(this, "context", void 0)
                    }
                    get kind() {
                        return "audio"
                    }
                    pipe(t) {
                        const e = d.reportApiInvoke({
                            name: "".concat(this.name, ".pipe"),
                            options: {
                                processor: t.name
                            }
                        });
                        if (this.destination === t)
                            return e.onSuccess(),
                            t;
                        if (t._source) {
                            const r = new Error("Processor ".concat(t.name, " already piped, please call unpipe beforehand."));
                            throw e.onError(r),
                            r
                        }
                        return this.destination && this.unpipe(),
                        this.destination = t,
                        t._source = this,
                        this.context && this.destination.updateInput({
                            track: this.outputTrack,
                            node: this.outputNode,
                            context: this.context
                        }),
                        e.onSuccess(),
                        t
                    }
                    unpipe() {
                        if (!this.destination)
                            return;
                        l.info("unpiping processor ".concat(this.destination.name, "-").concat(this.destination.ID));
                        const t = d.reportApiInvoke({
                            name: "".concat(this.name, ".unpipe"),
                            options: {
                                processor: this.destination.name
                            }
                        });
                        try {
                            var e;
                            let r = this.destination;
                            null === (e = this.outputNode) || void 0 === e || e.disconnect(),
                            this.destination._source = void 0,
                            this.destination = void 0,
                            r.reset()
                        } finally {
                            t.onSuccess()
                        }
                    }
                    output(t, e) {
                        if (t instanceof MediaStreamTrack)
                            super.output(t, e);
                        else if (t instanceof AudioNode) {
                            if (this.outputNode === t)
                                return;
                            const r = d.reportApiInvoke({
                                name: "".concat(this.name, ".output"),
                                options: g(g({}, t instanceof MediaStreamTrack && {
                                    track: t.toString()
                                }), t instanceof AudioNode && {
                                    audioNode: t.toString()
                                })
                            });
                            this.outputNode = t,
                            this.destination && this.destination.updateInput({
                                node: t,
                                context: e
                            }),
                            r.onSuccess()
                        }
                    }
                    updateInput(t) {
                        var e, r, n;
                        t.context !== this.context && (this.context = t.context,
                        null === (e = this.onPiped) || void 0 === e || e.call(this, this.context),
                        this.destination && this.destination.updateInput({
                            track: this.outputTrack,
                            node: this.outputNode,
                            context: t.context
                        })),
                        t.track && this.inputTrack !== t.track && (this.inputTrack = t.track,
                        null === (r = this.onTrack) || void 0 === r || r.call(this, t.track, this.context)),
                        t.node && this.inputNode !== t.node && (this.inputNode = t.node,
                        null === (n = this.onNode) || void 0 === n || n.call(this, t.node, this.context))
                    }
                    reset() {
                        var t;
                        this.context && this.context.requestRevertConstraints(this),
                        this.inputTrack = void 0,
                        this.inputNode = void 0,
                        this.context = void 0,
                        null === (t = this.onUnpiped) || void 0 === t || t.call(this),
                        this.destination && this.destination.reset()
                    }
                }
                class x {
                    constructor() {
                        e(this, "__registered__", !1),
                        e(this, "logger", l),
                        e(this, "reporter", d),
                        e(this, "parameters", {})
                    }
                    createProcessor() {
                        if (!this.__registered__)
                            throw new Error("Extension not registered yet!");
                        return this._createProcessor()
                    }
                }
                class w extends x {
                }
                let O;
                class S {
                    get running() {
                        return this._running
                    }
                    constructor(t, r) {
                        if (e(this, "type", void 0),
                        e(this, "interval", void 0),
                        e(this, "fn", void 0),
                        e(this, "_running", !1),
                        e(this, "_osc", void 0),
                        !t)
                            throw new Error;
                        if (r <= 0)
                            throw new Error;
                        this.type = t,
                        this.interval = r
                    }
                    add(t) {
                        this.fn = t
                    }
                    remove() {
                        this.fn = void 0
                    }
                    start() {
                        if (!this._running)
                            switch (this._running = !0,
                            this.type) {
                            case "Timer":
                                {
                                    const t = ()=>{
                                        setTimeout((()=>{
                                            this.fn && this.fn(),
                                            this._running && t()
                                        }
                                        ), this.interval)
                                    }
                                    ;
                                    t();
                                    break
                                }
                            case "RAF":
                                {
                                    const t = e=>{
                                        requestAnimationFrame((r=>{
                                            r - e < this.interval ? this._running && t(e) : (this.fn && this.fn(),
                                            this._running && t(r))
                                        }
                                        ))
                                    }
                                    ;
                                    t(performance.now());
                                    break
                                }
                            case "Oscillator":
                                {
                                    O || (O = new AudioContext);
                                    const t = O.createGain();
                                    let e;
                                    t.gain.value = 0,
                                    t.connect(O.destination);
                                    const r = ()=>{
                                        this.fn && this.fn(),
                                        e && e.disconnect(),
                                        e = O.createOscillator(),
                                        this._osc = e,
                                        e.connect(t),
                                        this._running && (e.onended = r,
                                        e.start(0),
                                        e.stop(O.currentTime + this.interval / 1e3))
                                    }
                                    ;
                                    r();
                                    break
                                }
                            }
                    }
                    stop() {
                        this._running = !1,
                        this._osc && (this._osc.onended = null,
                        this._osc = void 0)
                    }
                }
            }
            )(),
            n
        }
        )()
    }(r);
    const i = {
        logger: void 0,
        report: void 0,
        pluginCenter: void 0,
        parameters: void 0,
        getParameter: void 0
    }
      , s = {
        sampleRate: 48e3,
        enabled: !1,
        ains: !0,
        agc: !0,
        bufferTime: 30,
        blockInstall: !1
    };
    class a extends r.exports.AudioProcessor {
        constructor() {
            super(),
            this.name = "AIDenoiserProcessor",
            this.engineLoaded = !1,
            this.statsAppendCount = 0,
            this.getStats = ()=>{
                const t = this.stats;
                return this.stats = void 0,
                t
            }
            ,
            this.constraintsRequest = i.parameters.ADJUST_3A_FROM_PLUGINS ? {
                echoCancellation: !0,
                autoGainControl: !0,
                noiseSuppression: !1
            } : void 0,
            i.parameters.AI_DENOISER_PARAMETERS && !0 === i.parameters.AI_DENOISER_PARAMETERS.enabled ? this._enabled = !0 : this._enabled = !1,
            r.exports.logger.debug(`[denoiser-processor] construct denoiser processor, enabled: ${this.enabled}`)
        }
        onPiped(t) {
            t.registerStats(this, "denoiser_stats", this.getStats);
            const e = t.getAudioContext();
            this.audioContext !== e && (this.audioContext = e,
            this.initializeNode(e, t).then((()=>{
                this.inputNode && this.onNode(this.inputNode, t)
            }
            )))
        }
        setNsParams(t) {
            var e;
            const n = r.exports.reporter.reportApiInvoke({
                name: `${this.name}.setNsParams`,
                options: [t]
            });
            try {
                null === (e = this.workletNode) || void 0 === e || e.setNsParams(Object.assign({}, t)),
                n.onSuccess()
            } catch (t) {
                n.onError(t)
            }
        }
        setAgcParams(t) {
            var e;
            const n = r.exports.reporter.reportApiInvoke({
                name: `${this.name}.setAgcParams`,
                options: [t]
            });
            try {
                null === (e = this.workletNode) || void 0 === e || e.setAgcParams(Object.assign({}, t)),
                n.onSuccess()
            } catch (t) {
                n.onError(t)
            }
        }
        onTrack(t) {
            this.workletNode && (this.workletNode.track = t)
        }
        onNode(t, e) {
            this.workletNode && (t.connect(this.workletNode),
            this.output(this.workletNode, e))
        }
        initializeNode(t, n) {
            return e(this, void 0, void 0, (function*() {
                yield this.emitAsPromiseNoResponse("audio-context", t),
                this.engineLoaded = !0;
                const e = {
                    processorOptions: {
                        options: Object.assign(Object.assign({}, (n = i.parameters.AI_DENOISER_PARAMETERS,
                        Object.assign(Object.assign({}, s), n))), {
                            sampleRate: t.sampleRate
                        }),
                        track: this.inputTrack
                    }
                };
                var n;
                r.exports.logger.debug(`[denoiser-processor] denoiser node init ${JSON.stringify(e)}`),
                this.workletNode = function(t, e) {
                    if (window.AudioWorkletNode) {
                        class n extends AudioWorkletNode {
                            constructor(t, e) {
                                super(t, "audio-denoiser-worklet-processor", {
                                    numberOfInputs: 1,
                                    numberOfOutputs: 1,
                                    outputChannelCount: [1],
                                    processorOptions: null == e ? void 0 : e.processorOptions.options
                                }),
                                this.track = e && e.processorOptions && e.processorOptions.track,
                                this.port.onmessage = this.handleMessage.bind(this)
                            }
                            enable() {
                                this.port.postMessage({
                                    message: "enable"
                                })
                            }
                            disable() {
                                this.port.postMessage({
                                    message: "disable"
                                })
                            }
                            setNsParams(t) {
                                r.exports.logger.debug(`[denoiser-worklet-node] set ns params ${JSON.stringify(t)}`),
                                this.port.postMessage({
                                    message: "setNsParams",
                                    nsParams: t
                                })
                            }
                            setAgcParams(t) {
                                r.exports.logger.debug(`[denoiser-worklet-node] set agc params ${JSON.stringify(t)}`),
                                this.port.postMessage({
                                    message: "setAgcParams",
                                    agcParams: t
                                })
                            }
                            dump() {
                                this.port.postMessage({
                                    message: "dump"
                                })
                            }
                            destroy() {
                                this.port.postMessage({
                                    message: "destroy"
                                })
                            }
                            handleMessage(t) {
                                const e = t.data;
                                switch (e.message) {
                                case "onenable":
                                    r.exports.logger.debug("[denoiser-worklet-node] AudioDenoiser was enabled");
                                    break;
                                case "ondisable":
                                    r.exports.logger.debug("[denoiser-worklet-node] AudioDenoiser was disabled");
                                    break;
                                case "ongetStats":
                                    this.dispatchEvent(new CustomEvent("stats",{
                                        detail: {
                                            stats: e.stats
                                        }
                                    }));
                                    break;
                                case "onlog":
                                    if (e.level) {
                                        const t = e.level;
                                        r.exports.logger[t] && r.exports.logger[t](e.log);
                                        break
                                    }
                                    r.exports.logger.debug(e.log);
                                    break;
                                case "ondump":
                                    this.dispatchEvent(new CustomEvent("dump",{
                                        detail: {
                                            dump: e.dump
                                        }
                                    }));
                                    break;
                                case "ondumpend":
                                    this.dispatchEvent(new CustomEvent("dumpend"));
                                    break;
                                case "onoverload":
                                    if (this.track && (this.track.muted || !this.track.enabled || "ended" === this.track.readyState))
                                        break;
                                    r.exports.logger.warning("[denoiser-worklet-node] denoiser overload, process count: " + e.count + ", excepted count: " + e.expectedCount + ", elapse: " + e.elapse),
                                    this.dispatchEvent(new CustomEvent("overload"))
                                }
                            }
                        }
                        return new n(t,e)
                    }
                }(t, e),
                r.exports.logger.debug("[denoiser-processor] denoiser node initialized"),
                yield this.onEnableChange(),
                this.workletNode && (i.parameters.AI_DENOISER_PARAMETERS && i.parameters.AI_DENOISER_PARAMETERS.nsParameters && this.setNsParams(i.parameters.AI_DENOISER_PARAMETERS.nsParameters),
                i.parameters.AI_DENOISER_PARAMETERS && i.parameters.AI_DENOISER_PARAMETERS.agcParameters && this.setAgcParams(i.parameters.AI_DENOISER_PARAMETERS.agcParameters),
                this.workletNode.addEventListener("stats", this.handleAudioNodeStatsEvent.bind(this)),
                this.workletNode.addEventListener("dump", this.handleAudioNodeDumpEvent.bind(this, t)),
                this.workletNode.addEventListener("overload", (()=>{
                    this.onoverload && this.onoverload()
                }
                )),
                this.workletNode.addEventListener("dumpend", (()=>{
                    this.ondumpend && this.ondumpend()
                }
                )))
            }
            ))
        }
        onEnableChange() {
            var t, n;
            return e(this, void 0, void 0, (function*() {
                this.workletNode && (this.enabled ? (this.workletNode.enable(),
                this.constraintsRequest && i.parameters.ADJUST_3A_FROM_PLUGINS && (yield null === (t = this.context) || void 0 === t ? void 0 : t.requestApplyConstraints(this.constraintsRequest, this)),
                r.exports.logger.debug("[denoiser-processor] denoiser node enabled")) : (this.workletNode.disable(),
                this.constraintsRequest && i.parameters.ADJUST_3A_FROM_PLUGINS && (yield null === (n = this.context) || void 0 === n ? void 0 : n.requestRevertConstraints(this)),
                r.exports.logger.debug("[denoiser-processor] denoiser node disabled")))
            }
            ))
        }
        dump() {
            var t;
            const e = r.exports.reporter.reportApiInvoke({
                name: `${this.name}.dump`,
                options: []
            });
            try {
                null === (t = this.workletNode) || void 0 === t || t.dump(),
                e.onSuccess()
            } catch (t) {
                e.onError(t)
            }
        }
        handleAudioNodeStatsEvent(t) {
            const e = Object.assign({}, t.detail.stats);
            (++this.statsAppendCount >= 4 || !this.stats) && (this.statsAppendCount = 0,
            this.stats = {
                ean: 0,
                ebn: 0,
                ns: 0,
                vl: 0
            }),
            e.energy_af_ns && (this.stats.ean = (this.stats.ean << 8) + e.energy_af_ns),
            e.energy_bf_ns && (this.stats.ebn = (this.stats.ebn << 8) + e.energy_bf_ns),
            e.ns_state && (this.stats.ns = (this.stats.ns << 8) + e.ns_state),
            e.vad_loss && (this.stats.vl = (this.stats.vl << 8) + e.vad_loss)
        }
        handleAudioNodeDumpEvent(t, e) {
            const r = Object.assign({}, e.detail.dump);
            r.inputPCM && r.inputPCM.length && this._dumpCallback(r.inputPCM, "input"),
            r.nsOutPCM && r.nsOutPCM.length && this._dumpCallback(r.nsOutPCM, "ns_out"),
            r.agcOutPCM && r.agcOutPCM.length && this._dumpCallback(r.agcOutPCM, "agc_out")
        }
        _dumpCallback(t, e) {
            if (!this.audioContext)
                return;
            const r = n(function(t, e, r) {
                const n = t.createBuffer(1, e.length, r);
                return n.copyToChannel(e, 0),
                n
            }(this.audioContext, t, 16e3), {})
              , o = new Blob([r],{
                type: "audio/wav"
            })
              , i = (e + "_" + (new Date).toLocaleString("en-US", {
                hour12: !1
            })).replace(/\s/g, "_");
            this.ondump && this.ondump(o, i)
        }
    }
    const c = {
        files: {
            js: "/denoiser-wasm.js",
            wasm: "/denoiser-wasm.wasm",
            simdWasm: "/denoiser-wasm-simd.wasm"
        },
        path: "./vendor",
        setPath: function(t) {
            "/" === t[t.length - 1] && (t = t.substring(0, t.length - 1)),
            this.path = t
        },
        getPaths: function() {
            return {
                js: this.path + this.files.js,
                wasm: this.path + this.files.wasm,
                simdWasm: this.path + this.files.simdWasm
            }
        }
    };
    function u() {
        return (async()=>WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])))().then((t=>(r.exports.logger.info("[wasm-fetcher] simd supported:", t),
        t ? c.getPaths().simdWasm : c.getPaths().wasm))).then((t=>fetch(t))).then((t=>{
            if (r.exports.logger.info(`[wasm-fetcher] wasm loaded, ${t.status}`),
            !t.ok)
                throw Error(`fetch wasm failed, status: ${t.status}`);
            return t
        }
        )).then((t=>t.arrayBuffer()))
    }
    const p = function() {
        let t;
        return ()=>(t || (t = u()),
        t)
    }();
    let l = !1;
    class f extends r.exports.AudioExtension {
        constructor(t) {
            if (super(),
            this.BUILD = "v1.0.0-0-gc6cc89f(7/27/2022, 4:00:16 PM)",
            this.VERSION = "1.0.0",
            this.parameters = {
                AI_DENOISER_PARAMETERS: {},
                ADJUST_3A_FROM_PLUGINS: !0
            },
            this.onloaderror = void 0,
            l)
                throw Error("Dulplicate initialization AI denoiser extension");
            c.setPath(t.assetsPath),
            i.parameters = this.parameters,
            p(),
            l = !0,
            r.exports.logger.debug(`[ai-denoiser-extension] ${this.VERSION}, ${this.BUILD} constructor ${JSON.stringify(t)}`),
            r.exports.reporter.reportApiInvoke({
                name: "AIDenoiserExtension.constructor",
                options: [this.VERSION + "_" + this.BUILD]
            }).onSuccess()
        }
        _createProcessor() {
            const t = new a;
            return r.exports.logger.debug("[ai-denoiser-extension] start create processor"),
            t.on("audio-context", ((t,n,o)=>e(this, void 0, void 0, (function*() {
                try {
                    yield function(t) {
                        return e(this, void 0, void 0, (function*() {
                            return new Promise(((e,n)=>{
                                t.audioWorklet.addModule(c.getPaths().js).then((()=>(r.exports.logger.debug("[load-denoiser-module] start load wasm"),
                                p()))).then((o=>{
                                    const i = new AudioWorkletNode(t,"audio-engine-wasm-loader",{
                                        processorOptions: {
                                            wasmBinary: o
                                        }
                                    });
                                    i.port.onmessage = t=>{
                                        const n = t.data.message;
                                        "onfirstload" === n ? (r.exports.logger.debug("[load-denoiser-module] AudioEngine was loaded"),
                                        e()) : "onload" === n && (r.exports.logger.debug("[load-denoiser-module] AudioEngine was already loaded"),
                                        e())
                                    }
                                    ,
                                    i.onprocessorerror = ()=>{
                                        n(new Error("An error from AudioEngineWasmLoader was detected"))
                                    }
                                }
                                )).catch((t=>{
                                    n(new Error("An error from fetch was detected. " + t))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }(t),
                    n()
                } catch (t) {
                    this.onloaderror && this.onloaderror(t),
                    r.exports.logger.error(new Error("AudioEngine load error. " + t))
                }
            }
            )))),
            t
        }
        isAvailable() {
            return !!window.AudioWorkletNode
        }
    }
    t.AIDenoiserExtension = f,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));
