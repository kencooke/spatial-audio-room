var createAudioEngine = (()=>{
    var gt = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0;
    return function(n) {
        var v, e, i;
        n = n || {},
        (v = (v = "function" == typeof AudioWorkletGlobalScope ? globalThis.Module : v) || (void 0 !== n ? n : {})).ready = new Promise(function(n, t) {
            e = n,
            i = t
        }
        );
        var t, r = Object.assign({}, v), a = "./this.program", o = "object" == typeof window, u = "function" == typeof importScripts, c = "";
        (o || u) && (u ? c = self.location.href : "undefined" != typeof document && document.currentScript && (c = document.currentScript.src),
        c = 0 !== (c = gt ? gt : c).indexOf("blob:") ? c.substr(0, c.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
        u && (t = n=>{
            var t = new XMLHttpRequest;
            return t.open("GET", n, !1),
            t.responseType = "arraybuffer",
            t.send(null),
            new Uint8Array(t.response)
        }
        ));
        var f, l = v.print || console.log.bind(console), h = v.printErr || console.warn.bind(console);
        Object.assign(v, r),
        v.thisProgram && (a = v.thisProgram),
        v.wasmBinary && (f = v.wasmBinary);
        v.noExitRuntime;
        "object" != typeof WebAssembly && G("no native wasm support detected");
        var s, p = !1, d = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function y(n, t, e) {
            var r = t + e;
            for (e = t; n[e] && !(r <= e); )
                ++e;
            if (16 < e - t && n.subarray && d)
                return d.decode(n.subarray(t, e));
            for (r = ""; t < e; ) {
                var a, i, o = n[t++];
                128 & o ? (a = 63 & n[t++],
                192 == (224 & o) ? r += String.fromCharCode((31 & o) << 6 | a) : (i = 63 & n[t++],
                (o = 224 == (240 & o) ? (15 & o) << 12 | a << 6 | i : (7 & o) << 18 | a << 12 | i << 6 | 63 & n[t++]) < 65536 ? r += String.fromCharCode(o) : (o -= 65536,
                r += String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o)))) : r += String.fromCharCode(o)
            }
            return r
        }
        function g(n, t, e, r) {
            if (0 < r) {
                r = e + r - 1;
                for (var a = 0; a < n.length; ++a) {
                    var i = n.charCodeAt(a);
                    if ((i = 55296 <= i && i <= 57343 ? 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++a) : i) <= 127) {
                        if (r <= e)
                            break;
                        t[e++] = i
                    } else {
                        if (i <= 2047) {
                            if (r <= e + 1)
                                break;
                            t[e++] = 192 | i >> 6
                        } else {
                            if (i <= 65535) {
                                if (r <= e + 2)
                                    break;
                                t[e++] = 224 | i >> 12
                            } else {
                                if (r <= e + 3)
                                    break;
                                t[e++] = 240 | i >> 18,
                                t[e++] = 128 | i >> 12 & 63
                            }
                            t[e++] = 128 | i >> 6 & 63
                        }
                        t[e++] = 128 | 63 & i
                    }
                }
                t[e] = 0
            }
        }
        function m(n) {
            for (var t = 0, e = 0; e < n.length; ++e) {
                var r = n.charCodeAt(e);
                (r = 55296 <= r && r <= 57343 ? 65536 + ((1023 & r) << 10) | 1023 & n.charCodeAt(++e) : r) <= 127 ? ++t : t = r <= 2047 ? t + 2 : r <= 65535 ? t + 3 : t + 4
            }
            return t
        }
        var b, w, A, T, C, _, j, E, W, P = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
        function k(n, t) {
            for (var e = n >> 1, r = e + t / 2; !(r <= e) && C[e]; )
                ++e;
            if (32 < (e <<= 1) - n && P)
                return P.decode(A.subarray(n, e));
            for (e = "",
            r = 0; !(t / 2 <= r); ++r) {
                var a = T[n + 2 * r >> 1];
                if (0 == a)
                    break;
                e += String.fromCharCode(a)
            }
            return e
        }
        function D(n, t, e) {
            if ((e = void 0 === e ? 2147483647 : e) < 2)
                return 0;
            var r = t;
            e = (e -= 2) < 2 * n.length ? e / 2 : n.length;
            for (var a = 0; a < e; ++a)
                T[t >> 1] = n.charCodeAt(a),
                t += 2;
            return T[t >> 1] = 0,
            t - r
        }
        function F(n) {
            return 2 * n.length
        }
        function O(n, t) {
            for (var e = 0, r = ""; !(t / 4 <= e); ) {
                var a = _[n + 4 * e >> 2];
                if (0 == a)
                    break;
                ++e,
                65536 <= a ? (a -= 65536,
                r += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)) : r += String.fromCharCode(a)
            }
            return r
        }
        function S(n, t, e) {
            if ((e = void 0 === e ? 2147483647 : e) < 4)
                return 0;
            var r = t;
            e = r + e - 4;
            for (var a = 0; a < n.length; ++a) {
                var i = n.charCodeAt(a);
                if (55296 <= i && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++a)),
                _[t >> 2] = i,
                e < (t += 4) + 4)
                    break
            }
            return _[t >> 2] = 0,
            t - r
        }
        function M(n) {
            for (var t = 0, e = 0; e < n.length; ++e) {
                var r = n.charCodeAt(e);
                55296 <= r && r <= 57343 && ++e,
                t += 4
            }
            return t
        }
        function I() {
            var n = s.buffer;
            b = n,
            v.HEAP8 = w = new Int8Array(n),
            v.HEAP16 = T = new Int16Array(n),
            v.HEAP32 = _ = new Int32Array(n),
            v.HEAPU8 = A = new Uint8Array(n),
            v.HEAPU16 = C = new Uint16Array(n),
            v.HEAPU32 = j = new Uint32Array(n),
            v.HEAPF32 = E = new Float32Array(n),
            v.HEAPF64 = W = new Float64Array(n)
        }
        var R, U = [], x = [], Y = [];
        var H, V = 0, B = null, z = null;
        function G(n) {
            throw v.onAbort && v.onAbort(n),
            h(n = "Aborted(" + n + ")"),
            p = !0,
            n = new WebAssembly.RuntimeError(n + ". Build with -s ASSERTIONS=1 for more info."),
            i(n),
            n
        }
        function N() {
            return H.startsWith("data:application/octet-stream;base64,")
        }
        function q() {
            var n = H;
            try {
                if (n == H && f)
                    return new Uint8Array(f);
                if (t)
                    return t(n);
                throw "both async and sync fetching of the wasm failed"
            } catch (n) {
                G(n)
            }
        }
        function L(n) {
            for (; 0 < n.length; ) {
                var t, e = n.shift();
                "function" == typeof e ? e(v) : "number" == typeof (t = e.gb) ? void 0 === e.za ? X(t)() : X(t)(e.za) : t(void 0 === e.za ? null : e.za)
            }
        }
        v.preloadedImages = {},
        v.preloadedAudios = {},
        H = "audio_denoiser.wasm",
        N() || (r = H,
        H = v.locateFile ? v.locateFile(r, c) : c + r);
        var J = [];
        function X(n) {
            var t = J[n];
            return t || (n >= J.length && (J.length = n + 1),
            J[n] = t = R.get(n)),
            t
        }
        function Z(n) {
            this.ca = n - 16,
            this.Sa = function(n) {
                _[this.ca + 4 >> 2] = n
            }
            ,
            this.Na = function(n) {
                _[this.ca + 8 >> 2] = n
            }
            ,
            this.Pa = function() {
                _[this.ca >> 2] = 0
            }
            ,
            this.Ma = function() {
                w[this.ca + 12 >> 0] = 0
            }
            ,
            this.Ra = function() {
                w[this.ca + 13 >> 0] = 0
            }
            ,
            this.La = function(n, t) {
                this.Sa(n),
                this.Na(t),
                this.Pa(),
                this.Ma(),
                this.Ra()
            }
        }
        var K = {};
        function $(n) {
            for (; n.length; ) {
                var t = n.pop();
                n.pop()(t)
            }
        }
        function Q(n) {
            return this.fromWireType(j[n >> 2])
        }
        var nn = {}
          , tn = {}
          , en = {};
        function rn(n) {
            if (void 0 === n)
                return "_unknown";
            var t = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return 48 <= t && t <= 57 ? "_" + n : n
        }
        function an(n, t) {
            return n = rn(n),
            function() {
                return t.apply(this, arguments)
            }
        }
        function on(t) {
            var n = Error
              , e = an(t, function(n) {
                this.name = t,
                this.message = n,
                void 0 !== (n = Error(n).stack) && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
            });
            return e.prototype = Object.create(n.prototype),
            (e.prototype.constructor = e).prototype.toString = function() {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }
            ,
            e
        }
        var un = void 0;
        function cn(n) {
            throw new un(n)
        }
        function fn(e, t, r) {
            function a(n) {
                (n = r(n)).length !== e.length && cn("Mismatched type converter count");
                for (var t = 0; t < e.length; ++t)
                    yn(e[t], n[t])
            }
            e.forEach(function(n) {
                en[n] = t
            });
            var i = Array(t.length)
              , o = []
              , u = 0;
            t.forEach(function(n, t) {
                tn.hasOwnProperty(n) ? i[t] = tn[n] : (o.push(n),
                nn.hasOwnProperty(n) || (nn[n] = []),
                nn[n].push(function() {
                    i[t] = tn[n],
                    ++u === o.length && a(i)
                }))
            }),
            0 === o.length && a(i)
        }
        var sn = {};
        function ln(n) {
            switch (n) {
            case 1:
                return 0;
            case 2:
                return 1;
            case 4:
                return 2;
            case 8:
                return 3;
            default:
                throw new TypeError("Unknown type size: " + n)
            }
        }
        var hn = void 0;
        function pn(n) {
            for (var t = ""; A[n]; )
                t += hn[A[n++]];
            return t
        }
        var dn = void 0;
        function vn(n) {
            throw new dn(n)
        }
        function yn(n, t, e={}) {
            if (!("argPackAdvance"in t))
                throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var r = t.name;
            if (n || vn('type "' + r + '" must have a positive integer typeid pointer'),
            tn.hasOwnProperty(n)) {
                if (e.Wa)
                    return;
                vn("Cannot register type '" + r + "' twice")
            }
            tn[n] = t,
            delete en[n],
            nn.hasOwnProperty(n) && (t = nn[n],
            delete nn[n],
            t.forEach(function(n) {
                n()
            }))
        }
        function gn(n) {
            vn(n.aa.da.ba.name + " instance already deleted")
        }
        var mn = !1;
        function bn() {}
        function wn(n) {
            --n.count.value,
            0 === n.count.value && (n.ea ? n.ia.ha(n.ea) : n.da.ba.ha(n.ca))
        }
        var An = {}
          , Tn = [];
        function Cn() {
            for (; Tn.length; ) {
                var n = Tn.pop();
                n.aa.na = !1,
                n.delete()
            }
        }
        var _n = void 0
          , jn = {};
        function En(n, t) {
            return t.da && t.ca || cn("makeClassHandle requires ptr and ptrType"),
            !!t.ia != !!t.ea && cn("Both smartPtrType and smartPtr must be specified"),
            t.count = {
                value: 1
            },
            Wn(Object.create(n, {
                aa: {
                    value: t
                }
            }))
        }
        function Wn(n) {
            return "undefined" == typeof FinalizationRegistry ? (Wn = n=>n,
            n) : (mn = new FinalizationRegistry(n=>{
                wn(n.aa)
            }
            ),
            bn = n=>{
                mn.unregister(n)
            }
            ,
            (Wn = n=>{
                var t = n.aa;
                return t.ea && mn.register(n, {
                    aa: t
                }, n),
                n
            }
            )(n))
        }
        function Pn() {}
        function kn(n, t, e) {
            var r;
            void 0 === n[t].ka && (r = n[t],
            n[t] = function() {
                return n[t].ka.hasOwnProperty(arguments.length) || vn("Function '" + e + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[t].ka + ")!"),
                n[t].ka[arguments.length].apply(this, arguments)
            }
            ,
            n[t].ka = [],
            n[t].ka[r.ta] = r)
        }
        function Dn(n, t) {
            v.hasOwnProperty(n) ? (vn("Cannot register public name '" + n + "' twice"),
            kn(v, n, n),
            v.hasOwnProperty(void 0) && vn("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),
            v[n].ka[void 0] = t) : v[n] = t
        }
        function Fn(n, t, e, r, a, i, o, u) {
            this.name = n,
            this.constructor = t,
            this.la = e,
            this.ha = r,
            this.ja = a,
            this.Ua = i,
            this.sa = o,
            this.Qa = u,
            this.Ya = []
        }
        function On(n, t, e) {
            for (; t !== e; )
                t.sa || vn("Expected null or instance of " + e.name + ", got an instance of " + t.name),
                n = t.sa(n),
                t = t.ja;
            return n
        }
        function Sn(n, t) {
            return null === t ? (this.Da && vn("null is not a valid " + this.name),
            0) : (t.aa || vn('Cannot pass "' + Zn(t) + '" as a ' + this.name),
            t.aa.ca || vn("Cannot pass deleted object as a pointer of type " + this.name),
            On(t.aa.ca, t.aa.da.ba, this.ba))
        }
        function Mn(n, t) {
            if (null === t) {
                if (this.Da && vn("null is not a valid " + this.name),
                this.va) {
                    var e = this.qa();
                    return null !== n && n.push(this.ha, e),
                    e
                }
                return 0
            }
            if (t.aa || vn('Cannot pass "' + Zn(t) + '" as a ' + this.name),
            t.aa.ca || vn("Cannot pass deleted object as a pointer of type " + this.name),
            !this.ua && t.aa.da.ua && vn("Cannot convert argument of type " + (t.aa.ia || t.aa.da).name + " to parameter type " + this.name),
            e = On(t.aa.ca, t.aa.da.ba, this.ba),
            this.va)
                switch (void 0 === t.aa.ea && vn("Passing raw pointer to smart pointer is illegal"),
                this.$a) {
                case 0:
                    t.aa.ia === this ? e = t.aa.ea : vn("Cannot convert argument of type " + (t.aa.ia || t.aa.da).name + " to parameter type " + this.name);
                    break;
                case 1:
                    e = t.aa.ea;
                    break;
                case 2:
                    var r;
                    t.aa.ia === this ? e = t.aa.ea : (r = t.clone(),
                    e = this.Za(e, Jn(function() {
                        r.delete()
                    })),
                    null !== n && n.push(this.ha, e));
                    break;
                default:
                    vn("Unsupporting sharing policy")
                }
            return e
        }
        function In(n, t) {
            return null === t ? (this.Da && vn("null is not a valid " + this.name),
            0) : (t.aa || vn('Cannot pass "' + Zn(t) + '" as a ' + this.name),
            t.aa.ca || vn("Cannot pass deleted object as a pointer of type " + this.name),
            t.aa.da.ua && vn("Cannot convert argument of type " + t.aa.da.name + " to parameter type " + this.name),
            On(t.aa.ca, t.aa.da.ba, this.ba))
        }
        function Rn(n, t, e, r) {
            this.name = n,
            this.ba = t,
            this.Da = e,
            this.ua = r,
            this.va = !1,
            (this.ha = this.Za = this.qa = this.Ka = this.$a = this.Xa = void 0) !== t.ja ? this.toWireType = Mn : (this.toWireType = r ? Sn : In,
            this.ga = null)
        }
        function Un(n, t) {
            var e, r, a, i = (n = pn(n)).includes("j") ? (e = n,
            r = t,
            a = [],
            function() {
                var n;
                return a.length = 0,
                Object.assign(a, arguments),
                n = e.includes("j") ? (n = v["dynCall_" + e],
                a && a.length ? n.apply(null, [r].concat(a)) : n.call(null, r)) : X(r).apply(null, a)
            }
            ) : X(t);
            return "function" != typeof i && vn("unknown function pointer with signature " + n + ": " + t),
            i
        }
        var xn = void 0;
        function Yn(n) {
            var t = pn(n = vt(n));
            return dt(n),
            t
        }
        function Hn(n, t) {
            var e = []
              , r = {};
            throw t.forEach(function n(t) {
                r[t] || tn[t] || (en[t] ? en[t].forEach(n) : (e.push(t),
                r[t] = !0))
            }),
            new xn(n + ": " + e.map(Yn).join([", "]))
        }
        function Vn(n, t) {
            for (var e = [], r = 0; r < n; r++)
                e.push(_[(t >> 2) + r]);
            return e
        }
        function Bn(a, i, n, o, u) {
            var t = i.length;
            t < 2 && vn("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var c = null !== i[1] && null !== n
              , f = !1;
            for (n = 1; n < i.length; ++n)
                if (null !== i[n] && void 0 === i[n].ga) {
                    f = !0;
                    break
                }
            var s = "void" !== i[0].name
              , l = t - 2
              , h = Array(l)
              , p = []
              , d = [];
            return function() {
                var n;
                arguments.length !== l && vn("function " + a + " called with " + arguments.length + " arguments, expected " + l + " args!"),
                d.length = 0,
                p.length = c ? 2 : 1,
                p[0] = u,
                c && (n = i[1].toWireType(d, this),
                p[1] = n);
                for (var t = 0; t < l; ++t)
                    h[t] = i[t + 2].toWireType(d, arguments[t]),
                    p.push(h[t]);
                if (t = o.apply(null, p),
                f)
                    $(d);
                else
                    for (var e = c ? 1 : 2; e < i.length; e++) {
                        var r = 1 === e ? n : h[e - 2];
                        null !== i[e].ga && i[e].ga(r)
                    }
                return n = s ? i[0].fromWireType(t) : void 0
            }
        }
        function zn(n, t, e) {
            return n instanceof Object || vn(e + ' with invalid "this": ' + n),
            n instanceof t.ba.constructor || vn(e + ' incompatible with "this" of type ' + n.constructor.name),
            n.aa.ca || vn("cannot call emscripten binding method " + e + " on deleted object"),
            On(n.aa.ca, n.aa.da.ba, t.ba)
        }
        var Gn = []
          , Nn = [{}, {
            value: void 0
        }, {
            value: null
        }, {
            value: !0
        }, {
            value: !1
        }];
        function qn(n) {
            4 < n && 0 == --Nn[n].Ea && (Nn[n] = void 0,
            Gn.push(n))
        }
        function Ln(n) {
            return n || vn("Cannot use deleted val. handle = " + n),
            Nn[n].value
        }
        function Jn(n) {
            switch (n) {
            case void 0:
                return 1;
            case null:
                return 2;
            case !0:
                return 3;
            case !1:
                return 4;
            default:
                var t = Gn.length ? Gn.pop() : Nn.length;
                return Nn[t] = {
                    Ea: 1,
                    value: n
                },
                t
            }
        }
        function Xn(n, t) {
            var e = tn[n];
            return void 0 === e && vn(t + " has unknown type " + Yn(n)),
            e
        }
        function Zn(n) {
            if (null === n)
                return "null";
            var t = typeof n;
            return "object" == t || "array" == t || "function" == t ? n.toString() : "" + n
        }
        var Kn = {}
          , $n = {};
        function Qn() {
            if (!nt) {
                var n, t = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: a || "./this.program"
                };
                for (n in $n)
                    void 0 === $n[n] ? delete t[n] : t[n] = $n[n];
                var e = [];
                for (n in t)
                    e.push(n + "=" + t[n]);
                nt = e
            }
            return nt
        }
        var nt, tt = [null, [], []], et = {};
        function rt(n) {
            return 0 == n % 4 && (0 != n % 100 || 0 == n % 400)
        }
        function at(n, t) {
            for (var e = 0, r = 0; r <= t; e += n[r++])
                ;
            return e
        }
        var it = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          , ot = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function ut(n, t) {
            for (n = new Date(n.getTime()); 0 < t; ) {
                var e = n.getMonth()
                  , r = (rt(n.getFullYear()) ? it : ot)[e];
                if (!(t > r - n.getDate())) {
                    n.setDate(n.getDate() + t);
                    break
                }
                t -= r - n.getDate() + 1,
                n.setDate(1),
                e < 11 ? n.setMonth(e + 1) : (n.setMonth(0),
                n.setFullYear(n.getFullYear() + 1))
            }
            return n
        }
        function ct(n, t, e, r) {
            function a(n, t, e) {
                for (n = "number" == typeof n ? n.toString() : n || ""; n.length < t; )
                    n = e[0] + n;
                return n
            }
            function i(n, t) {
                return a(n, t, "0")
            }
            function o(n, t) {
                function e(n) {
                    return n < 0 ? -1 : 0 < n ? 1 : 0
                }
                var r;
                return r = 0 === (r = e(n.getFullYear() - t.getFullYear())) && 0 === (r = e(n.getMonth() - t.getMonth())) ? e(n.getDate() - t.getDate()) : r
            }
            function u(n) {
                switch (n.getDay()) {
                case 0:
                    return new Date(n.getFullYear() - 1,11,29);
                case 1:
                    return n;
                case 2:
                    return new Date(n.getFullYear(),0,3);
                case 3:
                    return new Date(n.getFullYear(),0,2);
                case 4:
                    return new Date(n.getFullYear(),0,1);
                case 5:
                    return new Date(n.getFullYear() - 1,11,31);
                case 6:
                    return new Date(n.getFullYear() - 1,11,30)
                }
            }
            function c(n) {
                n = ut(new Date(n.fa + 1900,0,1), n.ya);
                var t = new Date(n.getFullYear() + 1,0,4)
                  , e = u(new Date(n.getFullYear(),0,4))
                  , t = u(t);
                return o(e, n) <= 0 ? o(t, n) <= 0 ? n.getFullYear() + 1 : n.getFullYear() : n.getFullYear() - 1
            }
            var f, s = _[r + 40 >> 2];
            for (f in r = {
                cb: _[r >> 2],
                bb: _[r + 4 >> 2],
                wa: _[r + 8 >> 2],
                ra: _[r + 12 >> 2],
                oa: _[r + 16 >> 2],
                fa: _[r + 20 >> 2],
                xa: _[r + 24 >> 2],
                ya: _[r + 28 >> 2],
                jb: _[r + 32 >> 2],
                ab: _[r + 36 >> 2],
                eb: s ? y(A, s, void 0) : ""
            },
            e = e ? y(A, e, void 0) : "",
            s = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y"
            })
                e = e.replace(new RegExp(f,"g"), s[f]);
            var l, h, p = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), d = "January February March April May June July August September October November December".split(" "), s = {
                "%a": function(n) {
                    return p[n.xa].substring(0, 3)
                },
                "%A": function(n) {
                    return p[n.xa]
                },
                "%b": function(n) {
                    return d[n.oa].substring(0, 3)
                },
                "%B": function(n) {
                    return d[n.oa]
                },
                "%C": function(n) {
                    return i((n.fa + 1900) / 100 | 0, 2)
                },
                "%d": function(n) {
                    return i(n.ra, 2)
                },
                "%e": function(n) {
                    return a(n.ra, 2, " ")
                },
                "%g": function(n) {
                    return c(n).toString().substring(2)
                },
                "%G": c,
                "%H": function(n) {
                    return i(n.wa, 2)
                },
                "%I": function(n) {
                    return 0 == (n = n.wa) ? n = 12 : 12 < n && (n -= 12),
                    i(n, 2)
                },
                "%j": function(n) {
                    return i(n.ra + at(rt(n.fa + 1900) ? it : ot, n.oa - 1), 3)
                },
                "%m": function(n) {
                    return i(n.oa + 1, 2)
                },
                "%M": function(n) {
                    return i(n.bb, 2)
                },
                "%n": function() {
                    return "\n"
                },
                "%p": function(n) {
                    return 0 <= n.wa && n.wa < 12 ? "AM" : "PM"
                },
                "%S": function(n) {
                    return i(n.cb, 2)
                },
                "%t": function() {
                    return "\t"
                },
                "%u": function(n) {
                    return n.xa || 7
                },
                "%U": function(n) {
                    var t = new Date(n.fa + 1900,0,1)
                      , e = 0 === t.getDay() ? t : ut(t, 7 - t.getDay());
                    return o(e, n = new Date(n.fa + 1900,n.oa,n.ra)) < 0 ? i(Math.ceil((31 - e.getDate() + (at(rt(n.getFullYear()) ? it : ot, n.getMonth() - 1) - 31) + n.getDate()) / 7), 2) : 0 === o(e, t) ? "01" : "00"
                },
                "%V": function(n) {
                    var t = new Date(n.fa + 1901,0,4)
                      , e = u(new Date(n.fa + 1900,0,4))
                      , t = u(t)
                      , r = ut(new Date(n.fa + 1900,0,1), n.ya);
                    return o(r, e) < 0 ? "53" : o(t, r) <= 0 ? "01" : i(Math.ceil((e.getFullYear() < n.fa + 1900 ? n.ya + 32 - e.getDate() : n.ya + 1 - e.getDate()) / 7), 2)
                },
                "%w": function(n) {
                    return n.xa
                },
                "%W": function(n) {
                    var t = new Date(n.fa,0,1)
                      , e = 1 === t.getDay() ? t : ut(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1);
                    return o(e, n = new Date(n.fa + 1900,n.oa,n.ra)) < 0 ? i(Math.ceil((31 - e.getDate() + (at(rt(n.getFullYear()) ? it : ot, n.getMonth() - 1) - 31) + n.getDate()) / 7), 2) : 0 === o(e, t) ? "01" : "00"
                },
                "%y": function(n) {
                    return (n.fa + 1900).toString().substring(2)
                },
                "%Y": function(n) {
                    return n.fa + 1900
                },
                "%z": function(n) {
                    var t = 0 <= (n = n.ab);
                    return n = Math.abs(n) / 60,
                    (t ? "+" : "-") + String("0000" + (n / 60 * 100 + n % 60)).slice(-4)
                },
                "%Z": function(n) {
                    return n.eb
                },
                "%%": function() {
                    return "%"
                }
            };
            for (f in e = e.replace(/%%/g, "\0\0"),
            s)
                e.includes(f) && (e = e.replace(new RegExp(f,"g"), s[f](r)));
            return e = e.replace(/\0\0/g, "%"),
            l = e,
            h = Array(m(l) + 1),
            g(l, h, 0, h.length),
            (f = h).length > t ? 0 : (w.set(f, n),
            f.length - 1)
        }
        for (var un = v.InternalError = on("InternalError"), ft = Array(256), st = 0; st < 256; ++st)
            ft[st] = String.fromCharCode(st);
        hn = ft,
        dn = v.BindingError = on("BindingError"),
        Pn.prototype.isAliasOf = function(n) {
            if (!(this instanceof Pn && n instanceof Pn))
                return !1;
            var t = this.aa.da.ba
              , e = this.aa.ca
              , r = n.aa.da.ba;
            for (n = n.aa.ca; t.ja; )
                e = t.sa(e),
                t = t.ja;
            for (; r.ja; )
                n = r.sa(n),
                r = r.ja;
            return t === r && e === n
        }
        ,
        Pn.prototype.clone = function() {
            if (this.aa.ca || gn(this),
            this.aa.pa)
                return this.aa.count.value += 1,
                this;
            var n = Wn
              , t = Object
              , e = t.create
              , r = Object.getPrototypeOf(this)
              , a = this.aa;
            return (n = n(e.call(t, r, {
                aa: {
                    value: {
                        count: a.count,
                        na: a.na,
                        pa: a.pa,
                        ca: a.ca,
                        da: a.da,
                        ea: a.ea,
                        ia: a.ia
                    }
                }
            }))).aa.count.value += 1,
            n.aa.na = !1,
            n
        }
        ,
        Pn.prototype.delete = function() {
            this.aa.ca || gn(this),
            this.aa.na && !this.aa.pa && vn("Object already scheduled for deletion"),
            bn(this),
            wn(this.aa),
            this.aa.pa || (this.aa.ea = void 0,
            this.aa.ca = void 0)
        }
        ,
        Pn.prototype.isDeleted = function() {
            return !this.aa.ca
        }
        ,
        Pn.prototype.deleteLater = function() {
            return this.aa.ca || gn(this),
            this.aa.na && !this.aa.pa && vn("Object already scheduled for deletion"),
            Tn.push(this),
            1 === Tn.length && _n && _n(Cn),
            this.aa.na = !0,
            this
        }
        ,
        v.getInheritedInstanceCount = function() {
            return Object.keys(jn).length
        }
        ,
        v.getLiveInheritedInstances = function() {
            var n, t = [];
            for (n in jn)
                jn.hasOwnProperty(n) && t.push(jn[n]);
            return t
        }
        ,
        v.flushPendingDeletes = Cn,
        v.setDelayFunction = function(n) {
            _n = n,
            Tn.length && _n && _n(Cn)
        }
        ,
        Rn.prototype.Va = function(n) {
            return n = this.Ka ? this.Ka(n) : n
        }
        ,
        Rn.prototype.Ia = function(n) {
            this.ha && this.ha(n)
        }
        ,
        Rn.prototype.argPackAdvance = 8,
        Rn.prototype.readValueFromPointer = Q,
        Rn.prototype.deleteObject = function(n) {
            null !== n && n.delete()
        }
        ,
        Rn.prototype.fromWireType = function(n) {
            function t() {
                return this.va ? En(this.ba.la, {
                    da: this.Xa,
                    ca: e,
                    ia: this,
                    ea: n
                }) : En(this.ba.la, {
                    da: this,
                    ca: n
                })
            }
            var e = this.Va(n);
            if (!e)
                return this.Ia(n),
                null;
            if (void 0 !== (r = function(n, t) {
                for (void 0 === t && vn("ptr should not be undefined"); n.ja; )
                    t = n.sa(t),
                    n = n.ja;
                return jn[t]
            }(this.ba, e)))
                return 0 === r.aa.count.value ? (r.aa.ca = e,
                r.aa.ea = n,
                r.clone()) : (r = r.clone(),
                this.Ia(n),
                r);
            if (r = this.ba.Ua(e),
            !(r = An[r]))
                return t.call(this);
            var r = this.ua ? r.Oa : r.pointerType
              , a = function n(t, e, r) {
                return e === r ? t : void 0 === r.ja || null === (t = n(t, e, r.ja)) ? null : r.Qa(t)
            }(e, this.ba, r.ba);
            return null === a ? t.call(this) : this.va ? En(r.ba.la, {
                da: r,
                ca: a,
                ia: this,
                ea: n
            }) : En(r.ba.la, {
                da: r,
                ca: a
            })
        }
        ,
        xn = v.UnboundTypeError = on("UnboundTypeError"),
        v.count_emval_handles = function() {
            for (var n = 0, t = 5; t < Nn.length; ++t)
                void 0 !== Nn[t] && ++n;
            return n
        }
        ,
        v.get_first_emval = function() {
            for (var n = 5; n < Nn.length; ++n)
                if (void 0 !== Nn[n])
                    return Nn[n];
            return null
        }
        ;
        var lt = {
            j: function(n) {
                return pt(n + 16) + 16
            },
            i: function(n, t, e) {
                throw new Z(n).La(t, e),
                n
            },
            N: function(n) {
                var a = K[n];
                delete K[n];
                var i = a.elements
                  , f = i.length
                  , t = i.map(function(n) {
                    return n.Ca
                }).concat(i.map(function(n) {
                    return n.Ga
                }))
                  , o = a.qa
                  , u = a.ha;
                fn([n], t, function(c) {
                    return i.forEach(function(n, t) {
                        var e = c[t]
                          , r = n.Aa
                          , a = n.Ba
                          , i = c[t + f]
                          , o = n.Fa
                          , u = n.Ha;
                        n.read = n=>e.fromWireType(r(a, n)),
                        n.write = (n,t)=>{
                            var e = [];
                            o(u, n, i.toWireType(e, t)),
                            $(e)
                        }
                    }),
                    [{
                        name: a.name,
                        fromWireType: function(n) {
                            for (var t = Array(f), e = 0; e < f; ++e)
                                t[e] = i[e].read(n);
                            return u(n),
                            t
                        },
                        toWireType: function(n, t) {
                            if (f !== t.length)
                                throw new TypeError("Incorrect number of tuple elements for " + a.name + ": expected=" + f + ", actual=" + t.length);
                            for (var e = o(), r = 0; r < f; ++r)
                                i[r].write(e, t[r]);
                            return null !== n && n.push(u, e),
                            e
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Q,
                        ga: u
                    }]
                })
            },
            P: function(n) {
                var t = sn[n];
                delete sn[n];
                var a = t.qa
                  , i = t.ha
                  , s = t.Ja;
                fn([n], s.map(function(n) {
                    return n.Ca
                }).concat(s.map(function(n) {
                    return n.Ga
                })), function(c) {
                    var f = {};
                    return s.forEach(function(n, t) {
                        var e = c[t]
                          , r = n.Aa
                          , a = n.Ba
                          , i = c[t + s.length]
                          , o = n.Fa
                          , u = n.Ha;
                        f[n.Ta] = {
                            read: function(n) {
                                return e.fromWireType(r(a, n))
                            },
                            write: function(n, t) {
                                var e = [];
                                o(u, n, i.toWireType(e, t)),
                                $(e)
                            }
                        }
                    }),
                    [{
                        name: t.name,
                        fromWireType: function(n) {
                            var t, e = {};
                            for (t in f)
                                e[t] = f[t].read(n);
                            return i(n),
                            e
                        },
                        toWireType: function(n, t) {
                            for (var e in f)
                                if (!(e in t))
                                    throw new TypeError('Missing field:  "' + e + '"');
                            var r = a();
                            for (e in f)
                                f[e].write(r, t[e]);
                            return null !== n && n.push(i, r),
                            r
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Q,
                        ga: i
                    }]
                })
            },
            B: function() {},
            K: function(n, e, r, a, i) {
                var o = ln(r);
                yn(n, {
                    name: e = pn(e),
                    fromWireType: function(n) {
                        return !!n
                    },
                    toWireType: function(n, t) {
                        return t ? a : i
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(n) {
                        if (1 === r)
                            var t = w;
                        else if (2 === r)
                            t = T;
                        else {
                            if (4 !== r)
                                throw new TypeError("Unknown boolean type size: " + e);
                            t = _
                        }
                        return this.fromWireType(t[n >> o])
                    },
                    ga: null
                })
            },
            x: function(u, n, t, c, e, f, r, s, a, l, h, i, p) {
                h = pn(h),
                f = Un(e, f),
                s = s && Un(r, s),
                l = l && Un(a, l),
                p = Un(i, p);
                var d = rn(h);
                Dn(d, function() {
                    Hn("Cannot construct " + h + " due to unbound types", [c])
                }),
                fn([u, n, t], c ? [c] : [], function(n) {
                    n = n[0],
                    i = c ? (a = n.ba).la : Pn.prototype,
                    n = an(d, function() {
                        if (Object.getPrototypeOf(this) !== t)
                            throw new dn("Use 'new' to construct " + h);
                        if (void 0 === r.ma)
                            throw new dn(h + " has no accessible constructor");
                        var n = r.ma[arguments.length];
                        if (void 0 === n)
                            throw new dn("Tried to invoke ctor of " + h + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(r.ma).toString() + ") parameters instead!");
                        return n.apply(this, arguments)
                    });
                    var t = Object.create(i, {
                        constructor: {
                            value: n
                        }
                    });
                    n.prototype = t;
                    var e, r = new Fn(h,n,t,p,a,f,s,l), a = new Rn(h,r,!0,!1), i = new Rn(h + "*",r,!1,!1), o = new Rn(h + " const*",r,!1,!0);
                    return An[u] = {
                        pointerType: i,
                        Oa: o
                    },
                    e = d,
                    n = n,
                    v.hasOwnProperty(e) || cn("Replacing nonexistant public symbol"),
                    v[e] = n,
                    v[e].ta = void 0,
                    [a, i, o]
                })
            },
            u: function(n, r, t, e, a, i) {
                0 < r || G(void 0);
                var o = Vn(r, t);
                a = Un(e, a),
                fn([], [n], function(t) {
                    var e = "constructor " + (t = t[0]).name;
                    if (void 0 === t.ba.ma && (t.ba.ma = []),
                    void 0 !== t.ba.ma[r - 1])
                        throw new dn("Cannot register multiple constructors with identical number of parameters (" + (r - 1) + ") for class '" + t.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                    return t.ba.ma[r - 1] = ()=>{
                        Hn("Cannot construct " + t.name + " due to unbound types", o)
                    }
                    ,
                    fn([], o, function(n) {
                        return n.splice(1, 0, null),
                        t.ba.ma[r - 1] = Bn(e, n, null, a, i),
                        []
                    }),
                    []
                })
            },
            m: function(n, i, o, t, e, u, c, f) {
                var s = Vn(o, t);
                i = pn(i),
                u = Un(e, u),
                fn([], [n], function(t) {
                    function n() {
                        Hn("Cannot call " + e + " due to unbound types", s)
                    }
                    var e = (t = t[0]).name + "." + i;
                    i.startsWith("@@") && (i = Symbol[i.substring(2)]),
                    f && t.ba.Ya.push(i);
                    var r = t.ba.la
                      , a = r[i];
                    return void 0 === a || void 0 === a.ka && a.className !== t.name && a.ta === o - 2 ? (n.ta = o - 2,
                    n.className = t.name,
                    r[i] = n) : (kn(r, i, e),
                    r[i].ka[o - 2] = n),
                    fn([], s, function(n) {
                        return n = Bn(e, n, t, u, c),
                        void 0 === r[i].ka ? (n.ta = o - 2,
                        r[i] = n) : r[i].ka[o - 2] = n,
                        []
                    }),
                    []
                })
            },
            o: function(n, o, t, e, u, c, r, f, s, l) {
                o = pn(o),
                u = Un(e, u),
                fn([], [n], function(a) {
                    var i = (a = a[0]).name + "." + o
                      , n = {
                        get: function() {
                            Hn("Cannot access " + i + " due to unbound types", [t, r])
                        },
                        enumerable: !0,
                        configurable: !0
                    };
                    return n.set = s ? ()=>{
                        Hn("Cannot access " + i + " due to unbound types", [t, r])
                    }
                    : ()=>{
                        vn(i + " is a read-only property")
                    }
                    ,
                    Object.defineProperty(a.ba.la, o, n),
                    fn([], s ? [t, r] : [t], function(n) {
                        var r, t = n[0], e = {
                            get: function() {
                                var n = zn(this, a, i + " getter");
                                return t.fromWireType(u(c, n))
                            },
                            enumerable: !0
                        };
                        return s && (s = Un(f, s),
                        r = n[1],
                        e.set = function(n) {
                            var t = zn(this, a, i + " setter")
                              , e = [];
                            s(l, t, r.toWireType(e, n)),
                            $(e)
                        }
                        ),
                        Object.defineProperty(a.ba.la, o, e),
                        []
                    }),
                    []
                })
            },
            J: function(n, t) {
                yn(n, {
                    name: t = pn(t),
                    fromWireType: function(n) {
                        var t = Ln(n);
                        return qn(n),
                        t
                    },
                    toWireType: function(n, t) {
                        return Jn(t)
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Q,
                    ga: null
                })
            },
            M: function(n, t, e, r) {
                function a() {}
                e = ln(e),
                t = pn(t),
                a.values = {},
                yn(n, {
                    name: t,
                    constructor: a,
                    fromWireType: function(n) {
                        return this.constructor.values[n]
                    },
                    toWireType: function(n, t) {
                        return t.value
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(n, t, e) {
                        switch (t) {
                        case 0:
                            return function(n) {
                                return this.fromWireType((e ? w : A)[n])
                            }
                            ;
                        case 1:
                            return function(n) {
                                return this.fromWireType((e ? T : C)[n >> 1])
                            }
                            ;
                        case 2:
                            return function(n) {
                                return this.fromWireType((e ? _ : j)[n >> 2])
                            }
                            ;
                        default:
                            throw new TypeError("Unknown integer type: " + n)
                        }
                    }(t, e, r),
                    ga: null
                }),
                Dn(t, a)
            },
            n: function(n, t, e) {
                var r = Xn(n, "enum");
                t = pn(t),
                n = r.constructor,
                r = Object.create(r.constructor.prototype, {
                    value: {
                        value: e
                    },
                    constructor: {
                        value: an(r.name + "_" + t, function() {})
                    }
                }),
                n.values[e] = r,
                n[t] = r
            },
            v: function(n, t, e) {
                e = ln(e),
                yn(n, {
                    name: t = pn(t),
                    fromWireType: function(n) {
                        return n
                    },
                    toWireType: function(n, t) {
                        return t
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(n, t) {
                        switch (t) {
                        case 2:
                            return function(n) {
                                return this.fromWireType(E[n >> 2])
                            }
                            ;
                        case 3:
                            return function(n) {
                                return this.fromWireType(W[n >> 3])
                            }
                            ;
                        default:
                            throw new TypeError("Unknown float type: " + n)
                        }
                    }(t, e),
                    ga: null
                })
            },
            l: function(n, t, e, r, a) {
                t = pn(t),
                -1 === a && (a = 4294967295),
                a = ln(e);
                var i, o = n=>n;
                0 === r && (i = 32 - 8 * e,
                o = n=>n << i >>> i),
                e = t.includes("unsigned") ? function(n, t) {
                    return t >>> 0
                }
                : function(n, t) {
                    return t
                }
                ,
                yn(n, {
                    name: t,
                    fromWireType: o,
                    toWireType: e,
                    argPackAdvance: 8,
                    readValueFromPointer: function(n, t, e) {
                        switch (t) {
                        case 0:
                            return e ? function(n) {
                                return w[n]
                            }
                            : function(n) {
                                return A[n]
                            }
                            ;
                        case 1:
                            return e ? function(n) {
                                return T[n >> 1]
                            }
                            : function(n) {
                                return C[n >> 1]
                            }
                            ;
                        case 2:
                            return e ? function(n) {
                                return _[n >> 2]
                            }
                            : function(n) {
                                return j[n >> 2]
                            }
                            ;
                        default:
                            throw new TypeError("Unknown integer type: " + n)
                        }
                    }(t, a, 0 !== r),
                    ga: null
                })
            },
            h: function(n, t, e) {
                function r(n) {
                    var t = j;
                    return new a(b,t[(n >>= 2) + 1],t[n])
                }
                var a = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];
                yn(n, {
                    name: e = pn(e),
                    fromWireType: r,
                    argPackAdvance: 8,
                    readValueFromPointer: r
                }, {
                    Wa: !0
                })
            },
            w: function(n, t) {
                var o = "std::string" === (t = pn(t));
                yn(n, {
                    name: t,
                    fromWireType: function(n) {
                        var t = j[n >> 2];
                        if (o)
                            for (var e = n + 4, r = 0; r <= t; ++r) {
                                var a, i = n + 4 + r;
                                r != t && 0 != A[i] || (e = e ? y(A, e, i - e) : "",
                                void 0 === a ? a = e : (a += String.fromCharCode(0),
                                a += e),
                                e = i + 1)
                            }
                        else {
                            for (a = Array(t),
                            r = 0; r < t; ++r)
                                a[r] = String.fromCharCode(A[n + 4 + r]);
                            a = a.join("")
                        }
                        return dt(n),
                        a
                    },
                    toWireType: function(n, t) {
                        var e = "string" == typeof (t = t instanceof ArrayBuffer ? new Uint8Array(t) : t);
                        e || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || vn("Cannot pass non-string to std::string");
                        var r = (o && e ? ()=>m(t) : ()=>t.length)()
                          , a = pt(4 + r + 1);
                        if (j[a >> 2] = r,
                        o && e)
                            g(t, A, a + 4, r + 1);
                        else if (e)
                            for (e = 0; e < r; ++e) {
                                var i = t.charCodeAt(e);
                                255 < i && (dt(a),
                                vn("String has UTF-16 code units that do not fit in 8 bits")),
                                A[a + 4 + e] = i
                            }
                        else
                            for (e = 0; e < r; ++e)
                                A[a + 4 + e] = t[e];
                        return null !== n && n.push(dt, a),
                        a
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Q,
                    ga: function(n) {
                        dt(n)
                    }
                })
            },
            r: function(n, u, a) {
                var c, i, o, f, s;
                a = pn(a),
                2 === u ? (c = k,
                i = D,
                o = F,
                f = ()=>C,
                s = 1) : 4 === u && (c = O,
                i = S,
                o = M,
                f = ()=>j,
                s = 2),
                yn(n, {
                    name: a,
                    fromWireType: function(n) {
                        for (var t, e = j[n >> 2], r = f(), a = n + 4, i = 0; i <= e; ++i) {
                            var o = n + 4 + i * u;
                            i != e && 0 != r[o >> s] || (a = c(a, o - a),
                            void 0 === t ? t = a : (t += String.fromCharCode(0),
                            t += a),
                            a = o + u)
                        }
                        return dt(n),
                        t
                    },
                    toWireType: function(n, t) {
                        "string" != typeof t && vn("Cannot pass non-string to C++ string type " + a);
                        var e = o(t)
                          , r = pt(4 + e + u);
                        return j[r >> 2] = e >> s,
                        i(t, r + 4, e + u),
                        null !== n && n.push(dt, r),
                        r
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: Q,
                    ga: function(n) {
                        dt(n)
                    }
                })
            },
            O: function(n, t, e, r, a, i) {
                K[n] = {
                    name: pn(t),
                    qa: Un(e, r),
                    ha: Un(a, i),
                    elements: []
                }
            },
            s: function(n, t, e, r, a, i, o, u, c) {
                K[n].elements.push({
                    Ca: t,
                    Aa: Un(e, r),
                    Ba: a,
                    Ga: i,
                    Fa: Un(o, u),
                    Ha: c
                })
            },
            y: function(n, t, e, r, a, i) {
                sn[n] = {
                    name: pn(t),
                    qa: Un(e, r),
                    ha: Un(a, i),
                    Ja: []
                }
            },
            p: function(n, t, e, r, a, i, o, u, c, f) {
                sn[n].Ja.push({
                    Ta: pn(t),
                    Ca: e,
                    Aa: Un(r, a),
                    Ba: i,
                    Ga: o,
                    Fa: Un(u, c),
                    Ha: f
                })
            },
            L: function(n, t) {
                yn(n, {
                    ib: !0,
                    name: t = pn(t),
                    argPackAdvance: 0,
                    fromWireType: function() {},
                    toWireType: function() {}
                })
            },
            d: function(n, t, e) {
                n = Ln(n),
                t = Xn(t, "emval::as");
                var r = []
                  , a = Jn(r);
                return _[e >> 2] = a,
                t.toWireType(r, n)
            },
            a: qn,
            g: function(n, t) {
                return Jn((n = Ln(n))[t = Ln(t)])
            },
            b: function(n) {
                4 < n && (Nn[n].Ea += 1)
            },
            e: function(n) {
                return "number" == typeof (n = Ln(n))
            },
            f: function(n) {
                var t = Kn[n];
                return Jn(void 0 === t ? pn(n) : t)
            },
            c: function(n) {
                $(Ln(n)),
                qn(n)
            },
            z: function(n, t) {
                return Jn(n = (n = Xn(n, "_emval_take_value")).readValueFromPointer(t))
            },
            k: function() {
                G("")
            },
            I: function(n, t, e) {
                A.copyWithin(n, t, t + e)
            },
            q: function(n) {
                var t = A.length;
                if (2147483648 < (n >>>= 0))
                    return !1;
                for (var e = 1; e <= 4; e *= 2) {
                    var r = t * (1 + .2 / e)
                      , r = Math.min(r, n + 100663296)
                      , a = Math;
                    r = Math.max(n, r),
                    a = a.min.call(a, 2147483648, r + (65536 - r % 65536) % 65536);
                    n: {
                        try {
                            s.grow(a - b.byteLength + 65535 >>> 16),
                            I();
                            var i = 1;
                            break n
                        } catch (n) {}
                        i = void 0
                    }
                    if (i)
                        return !0
                }
                return !1
            },
            E: function(r, a) {
                var i = 0;
                return Qn().forEach(function(n, t) {
                    var e = a + i;
                    for (t = _[r + 4 * t >> 2] = e,
                    e = 0; e < n.length; ++e)
                        w[t++ >> 0] = n.charCodeAt(e);
                    w[t >> 0] = 0,
                    i += n.length + 1
                }),
                0
            },
            F: function(n, t) {
                var e = Qn();
                _[n >> 2] = e.length;
                var r = 0;
                return e.forEach(function(n) {
                    r += n.length + 1
                }),
                _[t >> 2] = r,
                0
            },
            H: function() {
                return 0
            },
            G: function(n, t, e, r) {
                return n = et.hb(n),
                t = et.fb(n, t, e),
                _[r >> 2] = t,
                0
            },
            A: function() {},
            t: function(n, t, e, r) {
                for (var a = 0, i = 0; i < e; i++) {
                    var o = _[t >> 2]
                      , u = _[t + 4 >> 2];
                    t += 8;
                    for (var c = 0; c < u; c++) {
                        var f = A[o + c]
                          , s = tt[n];
                        0 === f || 10 === f ? ((1 === n ? l : h)(y(s, 0)),
                        s.length = 0) : s.push(f)
                    }
                    a += u
                }
                return _[r >> 2] = a,
                0
            },
            C: function() {},
            D: ct
        };
        !function() {
            function t(n) {
                v.asm = n.exports,
                s = v.asm.Q,
                I(),
                R = v.asm.U,
                x.unshift(v.asm.R),
                V--,
                v.monitorRunDependencies && v.monitorRunDependencies(V),
                0 == V && (null !== B && (clearInterval(B),
                B = null),
                z && (n = z,
                z = null,
                n()))
            }
            function e(n) {
                t(n.instance)
            }
            function r(n) {
                return (f || !o && !u || "function" != typeof fetch ? Promise.resolve().then(q) : fetch(H, {
                    credentials: "same-origin"
                }).then(function(n) {
                    if (!n.ok)
                        throw "failed to load wasm binary file at '" + H + "'";
                    return n.arrayBuffer()
                }).catch(q)).then(function(n) {
                    return WebAssembly.instantiate(n, a)
                }).then(function(n) {
                    return n
                }).then(n, function(n) {
                    h("failed to asynchronously prepare wasm: " + n),
                    G(n)
                })
            }
            var a = {
                a: lt
            };
            if (V++,
            v.monitorRunDependencies && v.monitorRunDependencies(V),
            v.instantiateWasm)
                try {
                    return v.instantiateWasm(a, t)
                } catch (n) {
                    return h("Module.instantiateWasm callback failed with error: " + n)
                }
            (f || "function" != typeof WebAssembly.instantiateStreaming || N() || "function" != typeof fetch ? r(e) : fetch(H, {
                credentials: "same-origin"
            }).then(function(n) {
                return WebAssembly.instantiateStreaming(n, a).then(e, function(n) {
                    return h("wasm streaming compile failed: " + n),
                    h("falling back to ArrayBuffer instantiation"),
                    r(e)
                })
            })).catch(i)
        }(),
        v.___wasm_call_ctors = function() {
            return (v.___wasm_call_ctors = v.asm.R).apply(null, arguments)
        }
        ;
        var ht, pt = v._malloc = function() {
            return (pt = v._malloc = v.asm.S).apply(null, arguments)
        }
        , dt = v._free = function() {
            return (dt = v._free = v.asm.T).apply(null, arguments)
        }
        , vt = v.___getTypeName = function() {
            return (vt = v.___getTypeName = v.asm.V).apply(null, arguments)
        }
        ;
        function yt() {
            function n() {
                if (!ht && (ht = !0,
                v.calledRun = !0,
                !p)) {
                    if (L(x),
                    e(v),
                    v.onRuntimeInitialized && v.onRuntimeInitialized(),
                    v.postRun)
                        for ("function" == typeof v.postRun && (v.postRun = [v.postRun]); v.postRun.length; ) {
                            var n = v.postRun.shift();
                            Y.unshift(n)
                        }
                    L(Y)
                }
            }
            if (!(0 < V)) {
                if (v.preRun)
                    for ("function" == typeof v.preRun && (v.preRun = [v.preRun]); v.preRun.length; )
                        t = void 0,
                        t = v.preRun.shift(),
                        U.unshift(t);
                L(U),
                0 < V || (v.setStatus ? (v.setStatus("Running..."),
                setTimeout(function() {
                    setTimeout(function() {
                        v.setStatus("")
                    }, 1),
                    n()
                }, 1)) : n())
            }
            var t
        }
        if (v.___embind_register_native_and_builtin_types = function() {
            return (v.___embind_register_native_and_builtin_types = v.asm.W).apply(null, arguments)
        }
        ,
        v.dynCall_jiji = function() {
            return (v.dynCall_jiji = v.asm.X).apply(null, arguments)
        }
        ,
        v.dynCall_viijii = function() {
            return (v.dynCall_viijii = v.asm.Y).apply(null, arguments)
        }
        ,
        v.dynCall_iiiiij = function() {
            return (v.dynCall_iiiiij = v.asm.Z).apply(null, arguments)
        }
        ,
        v.dynCall_iiiiijj = function() {
            return (v.dynCall_iiiiijj = v.asm._).apply(null, arguments)
        }
        ,
        v.dynCall_iiiiiijj = function() {
            return (v.dynCall_iiiiiijj = v.asm.$).apply(null, arguments)
        }
        ,
        z = function n() {
            ht || yt(),
            ht || (z = n)
        }
        ,
        v.run = yt,
        v.preInit)
            for ("function" == typeof v.preInit && (v.preInit = [v.preInit]); 0 < v.preInit.length; )
                v.preInit.pop()();
        return yt(),
        n.ready
    }
}
)();
"object" == typeof exports && "object" == typeof module ? module.exports = createAudioEngine : "function" == typeof define && define.amd ? define([], function() {
    return createAudioEngine
}) : "object" == typeof exports && (exports.createAudioEngine = createAudioEngine),
"function" == typeof AudioWorkletGlobalScope && (globalThis.createAudioEngine = createAudioEngine);
const RENDER_QUANTUM_FRAMES = 128;
let AudioEngine = null;
class AudioEngineWasmLoader extends AudioWorkletProcessor {
    constructor({processorOptions: {wasmBinary: s}}) {
        super(),
        null !== AudioEngine ? this.port.postMessage({
            message: "onload"
        }) : createAudioEngine({
            wasmBinary: s
        }).then(s=>{
            null === AudioEngine ? (AudioEngine = s,
            this.port.postMessage({
                message: "onfirstload"
            })) : this.port.postMessage({
                message: "onload"
            })
        }
        )
    }
    process() {
        return !1
    }
}
registerProcessor("audio-engine-wasm-loader", AudioEngineWasmLoader);
class AudioDenoiserWorkletProcessor extends AudioWorkletProcessor {
    constructor({processorOptions: s}) {
        super(),
        this._enabled = !0,
        this._frameCount = 0,
        this._processorOptions = s,
        this._sampleRate = s.sampleRate,
        this._buffer = new AudioEngine.AudioBuffer(1,RENDER_QUANTUM_FRAMES),
        this._kernel = new AudioEngine.AudioDenoiser(s.sampleRate,s.ains,s.agc,s.bufferTime),
        this._last_status = AudioEngine.AudioDenoiserStatus.UNCERTAIN,
        this._bufferTime = s.bufferTime,
        this._monitorInterval = s.monitorInterval || 5e3,
        this._monitorThreshold = s.monitorThreshold || .05,
        this._overloadCount = 0,
        this._processMonitor = !0,
        this._isDumping = !1,
        this._dumpBundleFrames = this._bufferTime * this._sampleRate,
        this._dumpBundleFrameCount = 0,
        this._dumpBundleNums = s.dumpBundleNums || 3,
        this._dumpBundleNumCount = 0,
        this._processCounts = 0,
        this._log(`[denoiser-processor] kernel version: ${this._kernel.version}-` + this._kernel.buildInfo, "info"),
        this.port.onmessage = this._handleMessage.bind(this)
    }
    process(s, e) {
        var [[s]] = s;
        if (!s)
            return !0;
        const [[t]] = e;
        try {
            if (this._enabled) {
                this._buffer.getChannelData(0).set(s);
                var o = this._kernel.process(this._buffer, this._buffer);
                for (t.set(this._buffer.getChannelData(0)),
                this._monitor(),
                o !== this._last_status && (this._statusChanged(o),
                this._last_status = o),
                this._frameCount += RENDER_QUANTUM_FRAMES; this._frameCount >= this._sampleRate / 2; )
                    this._getStats(),
                    this._frameCount -= this._sampleRate / 2;
                this._isDumping && (this._dumpBundleFrameCount += RENDER_QUANTUM_FRAMES,
                this._dumpBundleFrameCount >= this._dumpBundleFrames && (this._dumpBundleFrameCount = 0,
                this._dump()))
            } else
                t.set(s)
        } catch (s) {
            this._log(s.toString(), "error")
        }
        return !0
    }
    _monitor() {
        if (this._processMonitor) {
            var s = Date.now();
            if (!this._processCountInitTime)
                return this._processCountInitTime = s,
                void (this._processCounts = 1);
            this._processCounts += 1;
            var e = s - this._processCountInitTime;
            e >= this._monitorInterval && (s = this._sampleRate * (e / 1e3) / RENDER_QUANTUM_FRAMES,
            Math.abs(s - this._processCounts) > s * this._monitorThreshold ? this._overloadCount += 1 : this._overloadCount = 0,
            3 <= this._overloadCount && (this._overloadCount = 0,
            this.port.postMessage({
                message: "onoverload",
                count: this._processCounts,
                expectedCount: s,
                elapse: e
            })),
            this._processCountInitTime = Date.now(),
            this._processCounts = 0)
        }
    }
    _statusChanged(s) {
        switch (s) {
        case AudioEngine.AudioDenoiserStatus.UNCERTAIN:
            this._log("[denoiser-processor] kernel status changed to UNCERTAIN", "info");
            break;
        case AudioEngine.AudioDenoiserStatus.NORMAL:
            this._log("[denoiser-processor] kernel status changed to NORMAL", "info");
            break;
        case AudioEngine.AudioDenoiserStatus.DANGLY:
            this._log("[denoiser-processor] kernel status changed to DANGLY", "info");
            break;
        case AudioEngine.AudioDenoiserStatus.STRONGBAD:
            this._log("[denoiser-processor] kernel status changed to STRONGBAD", "warning");
            break;
        case AudioEngine.AudioDenoiserStatus.NOINPUT:
            this._log("[denoiser-processor] kernel status changed to NOINPUT", "warning");
            break;
        case AudioEngine.AudioDenoiserStatus.NOOUTPUT:
            this._log("[denoiser-processor] kernel status changed to NOOUTPUT", "warning");
            break;
        default:
            this._log("[denoiser-processor] kernel status changed to UNKNOWN", "warning")
        }
    }
    _startMonitor() {
        this._overloadCount = 0,
        this._processCountInitTime = void 0,
        this._processMonitor = !0
    }
    _stopMonitor() {
        this._processMonitor = !1,
        this._processCounts = 0
    }
    _enable() {
        this._enabled = !0,
        this._startMonitor(),
        this.port.postMessage({
            message: "onenable"
        })
    }
    _disable() {
        this._enabled = !1,
        this._frameCount = 0,
        this._kernel.reset(),
        this._last_status = AudioEngine.AudioDenoiserStatus.UNCERTAIN,
        this.port.postMessage({
            message: "ondisable"
        }),
        this._stopMonitor(),
        this._isDumping && (this._dump(),
        this._endDump())
    }
    _getStats() {
        var s = this._kernel.getStats();
        this.port.postMessage({
            message: "ongetStats",
            stats: s
        })
    }
    _log(s, e) {
        this.port.postMessage({
            message: "onlog",
            log: s,
            level: e
        })
    }
    _dump() {
        const [s,e,t] = Array.from(this._kernel.dump(this._bufferTime))
          , o = new Float32Array(s.numberOfFrames)
          , i = new Float32Array(e.numberOfFrames)
          , r = new Float32Array(t.numberOfFrames);
        o.set(s.getChannelData(0)),
        i.set(e.getChannelData(0)),
        r.set(t.getChannelData(0)),
        s.delete(),
        e.delete(),
        t.delete(),
        this.port.postMessage({
            message: "ondump",
            dump: {
                inputPCM: o,
                nsOutPCM: i,
                agcOutPCM: r
            }
        }),
        this._dumpBundleNumCount += 1,
        this._dumpBundleNumCount >= this._dumpBundleNums && this._endDump()
    }
    _endDump() {
        this._isDumping && (this._log("end dump in processor"),
        this._isDumping = !1,
        this.port.postMessage({
            message: "ondumpend"
        }))
    }
    _startDump() {
        this._isDumping || (this._isDumping = !0,
        this._dumpBundleFrameCount = 0,
        this._dumpBundleNumCount = 0,
        this._dump())
    }
    _setNsParams(s) {
        this._kernel.setNsParams(s),
        this.port.postMessage({
            message: "onsetNsParams"
        })
    }
    _setAgcParams(s) {
        this._kernel.setAgcParams(s),
        this.port.postMessage({
            message: "onsetAgcParams"
        })
    }
    _destroy() {
        this._disable(),
        this._buffer.delete(),
        this._kernel.delete(),
        this.port.onmessage = void 0
    }
    _handleMessage(s) {
        var e = s.data;
        switch (e.message) {
        case "enable":
            this._enable();
            break;
        case "disable":
            this._disable();
            break;
        case "dump":
            this._startDump();
            break;
        case "setNsParams":
            this._setNsParams(e.nsParams);
            break;
        case "setAgcParams":
            this._setAgcParams(e.agcParams);
            break;
        case "destroy":
            this._destroy()
        }
    }
}
registerProcessor("audio-denoiser-worklet-processor", AudioDenoiserWorkletProcessor);
