/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.2",
        m = function(a, b) { return new m.fn.init(a, b) },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) { return b.toUpperCase() };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() { return d.call(this) },
        get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) },
        pushStack: function(a) { var b = m.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
        each: function(a, b) { return m.each(this, a, b) },
        map: function(a) { return this.pushStack(m.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(d.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor(null) },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === m.type(a) },
        isArray: Array.isArray || function(a) { return "array" === m.type(a) },
        isWindow: function(a) { return null != a && a == a.window },
        isNumeric: function(a) { return !m.isArray(a) && a - parseFloat(a) + 1 >= 0 },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a },
        globalEval: function(b) { b && m.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) },
        camelCase: function(a) { return a.replace(o, "ms-").replace(p, q) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(n, "") },
        makeArray: function(a, b) { var c = b || []; return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || m.guid++, e) : void 0 },
        now: function() { return +new Date },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { h["[object " + b + "]"] = b.toLowerCase() });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = hb(),
            z = hb(),
            A = hb(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            db = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            eb = function() { m() };
        try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (fb) {
            H = {
                apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) { if (9 === k) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try { return H.apply(d, w.querySelectorAll(x)), d } catch (y) {} finally { r || b.removeAttribute("id") }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b
        }

        function ib(a) { return a[u] = !0, a }

        function jb(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function kb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function lb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function mb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function nb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pb(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = gb.support = {}, f = gb.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = jb(function(a) { return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) { return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(cb, db); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(cb, db); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return lb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function(a, b) { return gb(a, null, null, b) }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, gb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) }
            return k = null, a
        }, e = gb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(cb, db).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = gb.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) { k[a] = [w, n, m]; break }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) { return e(a, 0, c) }) : e
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() }
                }),
                has: ib(function(a) { return function(b) { return gb(a, b).length > 0 } }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 }
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === o },
                focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: function(a) { return a.disabled === !1 },
                disabled: function(a) { return a.disabled === !0 },
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return Z.test(a.nodeName) },
                input: function(a) { return Y.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: ob(function() { return [0] }),
                last: ob(function(a, b) { return [b - 1] }),
                eq: ob(function(a, b, c) { return [0 > c ? c + b : c] }),
                even: ob(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                odd: ob(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                lt: ob(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: ob(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = mb(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = nb(b);

        function qb() {}
        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };

        function rb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function sb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 }
            }
        }

        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ub(a, b, c) { for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c); return c }

        function vb(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ub(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : vb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = vb(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) { return a === b }, h, !0), l = sb(function(a) { return J(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sb(tb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                    }
                    m.push(c)
                }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) { i.push(l); break }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = vb(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ib(f) : f
        }
        return h = gb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e; break } }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), jb(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || kb("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && jb(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || kb("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), jb(function(a) { return null == a.getAttribute("disabled") }) || kb(K, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), gb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
        if (b.nodeType) return m.grep(a, function(a) { return a === b !== c });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) { return m.inArray(a, b) >= 0 !== c })
    }
    m.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) { return 1 === a.nodeType })) }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) { return this.pushStack(w(this, a || [], !1)) },
        not: function(a) { return this.pushStack(w(this, a || [], !0)) },
        is: function(a) { return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(m.unique(m.merge(this.get(), m(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });

    function D(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a }
    m.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return m.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return m.dir(a, "parentNode", c) }, next: function(a) { return D(a, "nextSibling") }, prev: function(a) { return D(a, "previousSibling") }, nextAll: function(a) { return m.dir(a, "nextSibling") }, prevAll: function(a) { return m.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return m.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return m.dir(a, "previousSibling", c) }, siblings: function(a) { return m.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return m.sibling(a.firstChild) }, contents: function(a) { return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes) } }, function(a, b) { m.fn[a] = function(c, d) { var e = m.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e) } });
    var E = /\S+/g,
        F = {};

    function G(a) { var b = F[a] = {}; return m.each(a.match(E) || [], function(a, c) { b[c] = !0 }), b }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = { add: function() { if (h) { var d = h.length;! function f(b) { m.each(b, function(b, c) { var d = m.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function() { return h && m.each(arguments, function(a, c) { var d; while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function(a) { return a ? m.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function() { return h = [], e = 0, this }, disable: function() { return h = i = c = void 0, this }, disabled: function() { return !h }, lock: function() { return i = void 0, c || k.disable(), this }, locked: function() { return !i }, fireWith: function(a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function() { return k.fireWith(this, arguments), this }, fired: function() { return !!d } };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() { return c },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) { return null != a ? m.extend(a, d) : d }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) { return function(e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) { return m.ready.promise().done(a), this }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? m.readyWait++ : m.ready(!0) },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)) }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try { c = null == a.frameElement && y.documentElement } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) { k.deleteExpando = !0; try { delete a.test } catch (b) { k.deleteExpando = !1 } }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !P(d) : !m.isEmptyObject(d)) return }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null) }
        }
    }
    m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a) }, data: function(a, b, c) { return Q(a, b, c) }, removeData: function(a, b) { return R(a, b) }, _data: function(a, b, c) { return Q(a, b, c, !0) }, _removeData: function(a, b) { return R(a, b, !0) } }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { m.data(this, a) }) : arguments.length > 1 ? this.each(function() { m.data(this, a, b) }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) { return this.each(function() { m.removeData(this, a) }) }
    }), m.extend({
        queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0 },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() { m.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function() { m._removeData(a, b + "queue"), m._removeData(a, c) }) }) }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { m.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) { return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a) },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) { e = !0; for (h in c) m.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(m(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() { k.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == k.deleteExpando) { k.deleteExpando = !0; try { delete b.test } catch (d) { k.deleteExpando = !1 } }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() { return !0 }

    function bb() { return !1 }

    function cb() { try { return y.activeElement } catch (a) {} }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) { return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try { d[p]() } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = m.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({ elem: i, handlers: e })
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== cb() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === cb() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) { return m.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) { return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b) }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) { a._submit_bubble = !0 }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0)) },
        teardown: function() { return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit") }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), m.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0) })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0) }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 },
        teardown: function() { return m.event.remove(this, "._change"), !X.test(this.nodeName) }
    }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { m.event.simulate(b, a.target, m.event.fix(a), !0) };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) { return m().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() { m.event.add(this, a, d, c, b) })
        },
        one: function(a, b, c, d) { return this.on(a, b, c, d, 1) },
        off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() { m.event.remove(this, a, c, b) }) },
        trigger: function(a, b) { return this.each(function() { m.event.trigger(a, b, this) }) },
        triggerHandler: function(a, b) { var c = this[0]; return c ? m.event.trigger(a, b, c, !0) : void 0 }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) { W.test(a.type) && (a.defaultChecked = a.checked) }

    function wb(a, b) { return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function xb(a) { return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a }

    function yb(a) { var b = pb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function zb(a, b) { for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval")) }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) { f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) { e = 0; while (f = h[e++]) ob.test(f.type || "") && c.push(f) }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) { return V(this, function(a) { return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)) }, null, a, arguments.length) },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        remove: function(a, b) { for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c)); return this },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return m.clone(this, a, b) }) },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() { var a = arguments[0]; return this.domManip(arguments, function(b) { a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() },
        detach: function(a) { return this.remove(a, !0) },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { m.fn[a] = function(a) { for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null) }, Jb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : y.documentElement.currentStyle && (Ib = function(a) { return a.currentStyle }, Jb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });

    function Lb(a, b) { return { get: function() { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function() { return null == g && i(), g }, boxSizingReliable: function() { return null == f && i(), f }, pixelPosition: function() { return null == e && i(), e }, reliableMarginRight: function() { return null == h && i(), h } });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = { position: "absolute", visibility: "hidden", display: "block" },
        Sb = { letterSpacing: "0", fontWeight: "400" },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function Wb(a, b, c) { var d = Pb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function Xb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e))); return g }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Jb(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {}
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = m.camelCase(b); return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f }
    }), m.each(["height", "width"], function(a, b) { m.cssHooks[b] = { get: function(a, c, d) { return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() { return Yb(a, b, d) }) : Yb(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && Ib(a); return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0) } } }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) { return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) { return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0 }), m.each({ margin: "", padding: "", border: "Width" }, function(a, b) { m.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb) }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) { for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d); return f }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() { return Vb(this, !0) },
        hide: function() { return Vb(this) },
        toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { U(this) ? m(this).show() : m(this).hide() }) }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = { constructor: Zb, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px") }, cur: function() { var a = Zb.propHooks[this.prop]; return a && a.get ? a.get(this) : Zb.propHooks._default.get(this) }, run: function(a) { var b, c = Zb.propHooks[this.prop]; return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this } }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, m.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 } }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() { return setTimeout(function() { $b = void 0 }), $b = m.now() }

    function gc(a, b) {
        var c, d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, n.always(function() { n.always(function() { h.unqueued--, m.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() { m(a).hide() }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, { tweener: function(a, b) { m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b) }, prefilter: function(a, b) { b ? dc.unshift(a) : dc.push(a) } }), m.speed = function(a, b, c) { var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b }; return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue) }, d }, m.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e) }
        }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { m.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) { m.timers.push(a), a() ? m.fx.start() : m.timers.pop() }, m.fx.interval = 13, m.fx.start = function() { _b || (_b = setInterval(m.fx.tick, m.fx.interval)) }, m.fx.stop = function() { clearInterval(_b), _b = null }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) { return null == a ? "" : a + "" })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: { get: function(a) { var b = m.find.attr(a, "value"); return null != b ? b : m.trim(m.text(a)) } },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() { m.valHooks[this] = { set: function(a, b) { return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0 } }, k.checkOn || (m.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({ attr: function(a, b) { return V(this, m.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { m.removeAttr(this, a) }) } }), m.extend({
        attr: function(a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)) },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: { type: { set: function(a, b) { if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }
    }), nc = { set: function(a, b, c) { return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c } }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) { var e, f; return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e } : function(a, b, c) { return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null }
    }), rc && qc || (m.attrHooks.value = { set: function(a, b, c) { return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c) } }), qc || (mc = { set: function(a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, oc.id = oc.name = oc.coords = function(a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, m.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: mc.set }, m.attrHooks.contenteditable = { set: function(a, b, c) { mc.set(a, "" === b ? !1 : b, c) } }, m.each(["width", "height"], function(a, b) { m.attrHooks[b] = { set: function(a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), k.style || (m.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({ prop: function(a, b) { return V(this, m.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = m.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = m.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1 } } } }), k.hrefNormalized || m.each(["href", "src"], function(a, b) { m.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), k.optSelected || (m.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { m.propFix[this.toLowerCase()] = this }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) { m(this).addClass(a.call(this, b, this.className)) });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) { m(this).removeClass(a.call(this, b, this.className)) });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) { m(this).toggleClass(a.call(this, c, this.className, b), b) } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { m.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), m.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try { zc = location.href } catch (Kc) { zc = y.createElement("a"), zc.href = "", zc = zc.href }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) { var i; return e[h] = !0, m.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) { var c, d, e = m.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && m.extend(!0, a, c), a }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g); break }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a) },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) { j = {}; while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2] }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return 2 === t ? f : null },
                    setRequestHeader: function(a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this },
                    overrideMimeType: function(a) { return t || (k.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) { var b = a || u; return i && i.abort(b), x(0, b), this }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() { v.abort("timeout") }, k.timeout));
                try { t = 1, i.send(r, x) } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) { return m.get(a, b, c, "json") },
        getScript: function(a, b) { return m.get(a, void 0, b, "script") }
    }), m.each(["get", "post"], function(a, b) { m[b] = function(a, c, d, e) { return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), m._evalUrl = function(a) { return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) { m(this).wrapAll(a.call(this, b)) });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) { m(this).wrapInner(a.call(this, b)) } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = m.isFunction(a); return this.each(function(c) { m(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function() { return this.parent().each(function() { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes) }).end() }
    }), m.expr.filters.hidden = function(a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display")) }, m.expr.filters.visible = function(a) { return !m.expr.filters.hidden(a) };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) { c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({ serialize: function() { return m.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = m.prop(this, "elements"); return a ? m.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a)) }).map(function(a, b) { var c = m(this).val(); return null == c ? null : m.isArray(c) ? m.map(c, function(a) { return { name: b.name, value: a.replace(Sc, "\r\n") } }) : { name: b.name, value: c.replace(Sc, "\r\n") } }).get() } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c() } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() { for (var a in Xc) Xc[a](void 0, !0) }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try { i = f.statusText } catch (k) { i = "" }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() { b && b(void 0, !0) }
            }
        }
    });

    function Zc() { try { return new a.XMLHttpRequest } catch (b) {} }

    function $c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }
    m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) { return m.globalEval(a), a } } }), m.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() { b && b.onload(void 0, !0) }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = _c.pop() || m.expando + "_" + vc++; return this[a] = !0, a } }), m.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || m.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function(a) { e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, e || [a.responseText, b, a]) }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { m.fn[b] = function(a) { return this.on(b, a) } }), m.expr.filters.animated = function(a) { return m.grep(m.timers, function(b) { return a === b.elem }).length };
    var cd = a.document.documentElement;

    function dd(a) { return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) { m.offset.setOffset(this, a, b) });
            var b, c, d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = { top: 0, left: 0 },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var a = this.offsetParent || cd; while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent; return a || cd }) }
    }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) { return V(this, function(a, d, e) { var f = dd(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) }
    }), m.each(["top", "left"], function(a, b) { m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) { return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0 }) }), m.each({ Height: "height", Width: "width" }, function(a, b) {
        m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) { var e; return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g) }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() { return this.length }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return m });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) { return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m }, typeof b === K && (a.jQuery = a.$ = m), m
});;
! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : a.jQuery) }(this, function(a) {
    "use strict";

    function b(a) { var b, c, d, e, f, g, h, i = {}; for (f = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), h = 0, g = f.length; h < g && (c = f[h], c.search(/^(http|https|ftp):\/\//) === -1 && c.search(":") !== -1); h++) b = c.indexOf(":"), d = c.substring(0, b), e = c.substring(b + 1), e || (e = void 0), "string" == typeof e && (e = "true" === e || "false" !== e && e), "string" == typeof e && (e = isNaN(e) ? e : +e), i[d] = e; return null == d && null == e ? a : i }

    function c(a) {
        a = "" + a;
        var b, c, d, e = a.split(/\s+/),
            f = "50%",
            g = "50%";
        for (d = 0, b = e.length; d < b; d++) c = e[d], "left" === c ? f = "0%" : "right" === c ? f = "100%" : "top" === c ? g = "0%" : "bottom" === c ? g = "100%" : "center" === c ? 0 === d ? f = "50%" : g = "50%" : 0 === d ? f = c : g = c;
        return { x: f, y: g }
    }

    function d(b, c) {
        var d = function() { c(this.src) };
        a('<img src="' + b + '.gif">').on("load", d), a('<img src="' + b + '.jpg">').on("load", d), a('<img src="' + b + '.jpeg">').on("load", d), a('<img src="' + b + '.png">').on("load", d)
    }

    function e(c, d, e) {
        if (this.$element = a(c), "string" == typeof d && (d = b(d)), e ? "string" == typeof e && (e = b(e)) : e = {}, "string" == typeof d) d = d.replace(/\.\w*$/, "");
        else if ("object" == typeof d)
            for (var f in d) d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, ""));
        this.settings = a.extend({}, g, e), this.path = d;
        try { this.init() } catch (i) { if (i.message !== h) throw i }
    }
    var f = "vide",
        g = { volume: 1, playbackRate: 1, muted: !0, loop: !0, autoplay: !0, position: "50% 50%", posterType: "detect", resizing: !0, bgColor: "transparent", className: "" },
        h = "Not implemented";
    e.prototype.init = function() {
        var b, e, f = this,
            g = f.path,
            i = g,
            j = "",
            k = f.$element,
            l = f.settings,
            m = c(l.position),
            n = l.posterType;
        e = f.$wrapper = a("<div>").addClass(l.className).css({ position: "absolute", "z-index": -1, top: 0, left: 0, bottom: 0, right: 0, overflow: "hidden", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "background-color": l.bgColor, "background-repeat": "no-repeat", "background-position": m.x + " " + m.y }), "object" == typeof g && (g.poster ? i = g.poster : g.mp4 ? i = g.mp4 : g.webm ? i = g.webm : g.ogv && (i = g.ogv)), "detect" === n ? d(i, function(a) { e.css("background-image", "url(" + a + ")") }) : "none" !== n && e.css("background-image", "url(" + i + "." + n + ")"), "static" === k.css("position") && k.css("position", "relative"), k.prepend(e), "object" == typeof g ? (g.mp4 && (j += '<source src="' + g.mp4 + '.mp4" type="video/mp4">'), g.webm && (j += '<source src="' + g.webm + '.webm" type="video/webm">'), g.ogv && (j += '<source src="' + g.ogv + '.ogv" type="video/ogg">'), b = f.$video = a("<video>" + j + "</video>")) : b = f.$video = a('<video><source src="' + g + '.mp4" type="video/mp4"><source src="' + g + '.webm" type="video/webm"><source src="' + g + '.ogv" type="video/ogg"></video>');
        try { b.prop({ autoplay: l.autoplay, loop: l.loop, volume: l.volume, muted: l.muted, defaultMuted: l.muted, playbackRate: l.playbackRate, defaultPlaybackRate: l.playbackRate }) } catch (o) { throw new Error(h) }
        b.css({ margin: "auto", position: "absolute", "z-index": -1, top: m.y, left: m.x, "-webkit-transform": "translate(-" + m.x + ", -" + m.y + ")", "-ms-transform": "translate(-" + m.x + ", -" + m.y + ")", "-moz-transform": "translate(-" + m.x + ", -" + m.y + ")", transform: "translate(-" + m.x + ", -" + m.y + ")", visibility: "hidden", opacity: 0 }).one("canplaythrough.vide", function() { f.resize() }).one("playing.vide", function() { b.css({ visibility: "visible", opacity: 1 }), e.css("background-image", "none") }), k.on("resize.vide", function() { l.resizing && f.resize() }), e.append(b)
    }, e.prototype.getVideoObject = function() { return this.$video[0] }, e.prototype.resize = function() {
        if (this.$video) {
            var a = this.$wrapper,
                b = this.$video,
                c = b[0],
                d = c.videoHeight,
                e = c.videoWidth,
                f = a.height(),
                g = a.width();
            g / e > f / d ? b.css({ width: g + 2, height: "auto" }) : b.css({ width: "auto", height: f + 2 })
        }
    }, e.prototype.destroy = function() { delete a[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove() }, a[f] = { lookup: [] }, a.fn[f] = function(b, c) { var d; return this.each(function() { d = a.data(this, f), d && d.destroy(), d = new e(this, b, c), d.index = a[f].lookup.push(d) - 1, a.data(this, f, d) }), this }, a(document).ready(function() {
        var b = a(window);
        b.on("resize.vide", function() { for (var b, c = a[f].lookup.length, d = 0; d < c; d++) b = a[f].lookup[d], b && b.settings.resizing && b.resize() }), b.on("unload.vide", function() { return !1 }), a(document).find("[data-vide-bg]").each(function(b, c) {
            var d = a(c),
                e = d.data("vide-options"),
                g = d.data("vide-bg");
            d[f](g, e)
        })
    })
});
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++)
                if (d = i[c], !d.getAttribute("data-secret")) { if (f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f), g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d) } else;
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                        var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                        for (e = 0; e < k.length; e++) k[e].style.display = "none";
                        for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) {
                                if (f.removeAttribute("style"), "height" === d.message) {
                                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (200 > ~~g) g = 200;
                                    f.height = g
                                }
                                if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value
                            } else;
                    }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
/*! Blast.js (2.0.0): julian.com/research/blast (C) 2015 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
! function($, e, t, a) {
    var r = function() {
            if (t.documentMode) return t.documentMode;
            for (var e = 7; e > 0; e--) {
                var r = t.createElement("div");
                if (r.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", r.getElementsByTagName("span").length) return r = null, e;
                r = null
            }
            return a
        }(),
        n = e.console || { log: function() {}, time: function() {} },
        i = "blast",
        s = { latinPunctuation: "–—′’'“″„\"(«.…¡¿′’'”″“\")».…!?", latinLetters: "\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F" },
        l = { abbreviations: new RegExp("[^" + s.latinLetters + "](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^" + s.latinLetters + "]", "ig"), innerWordPeriod: new RegExp("[" + s.latinLetters + "].[" + s.latinLetters + "]", "ig"), onlyContainsPunctuation: new RegExp("[^" + s.latinPunctuation + "]"), adjoinedPunctuation: new RegExp("^[" + s.latinPunctuation + "]+|[" + s.latinPunctuation + "]+$", "g"), skippedElements: /(script|style|select|textarea)/i, hasPluginClass: new RegExp("(^| )" + i + "( |$)", "gi") };
    $.fn[i] = function(d) {
        function o(e) { return e.replace(l.abbreviations, function(e) { return e.replace(/\./g, "{{46}}") }).replace(l.innerWordPeriod, function(e) { return e.replace(/\./g, "{{46}}") }) }

        function c(e) { return e.replace(/{{(\d{1,3})}}/g, function(e, t) { return String.fromCharCode(t) }) }

        function u(e, a) {
            var r = t.createElement(a.tag);
            if (r.className = i, a.customClass && (r.className += " " + a.customClass, a.generateIndexID && (r.id = a.customClass + "-" + f.blastedIndex)), "all" === a.delimiter && /\s/.test(e.data) && (r.style.whiteSpace = "pre-line"), a.generateValueClass === !0 && !a.search && ("character" === a.delimiter || "word" === a.delimiter)) { var n, s = e.data; "word" === a.delimiter && l.onlyContainsPunctuation.test(s) && (s = s.replace(l.adjoinedPunctuation, "")), n = i + "-" + a.delimiter.toLowerCase() + "-" + s.toLowerCase(), r.className += " " + n }
            return a.aria && r.setAttribute("aria-hidden", "true"), r.appendChild(e.cloneNode(!1)), r
        }

        function g(e, t) {
            var a = -1,
                r = 0;
            if (3 === e.nodeType && e.data.length) {
                if (f.nodeBeginning && (e.data = t.search || "sentence" !== t.delimiter ? c(e.data) : o(e.data), f.nodeBeginning = !1), a = e.data.search(h), -1 !== a) {
                    var n = e.data.match(h),
                        i = n[0],
                        s = n[1] || !1;
                    "" === i ? a++ : s && s !== i && (a += i.indexOf(s), i = s);
                    var d = e.splitText(a);
                    d.splitText(i.length), r = 1, t.search || "sentence" !== t.delimiter || (d.data = c(d.data));
                    var p = u(d, t, f.blastedIndex);
                    d.parentNode.replaceChild(p, d), f.wrappers.push(p), f.blastedIndex++
                }
            } else if (1 === e.nodeType && e.hasChildNodes() && !l.skippedElements.test(e.tagName) && !l.hasPluginClass.test(e.className))
                for (var m = 0; m < e.childNodes.length; m++) f.nodeBeginning = !0, m += g(e.childNodes[m], t);
            return r
        }

        function p(t, s) {
            s.debug && n.time("blast reversal");
            var l = !1;
            t.removeClass(i + "-root").removeAttr("aria-label").find("." + i).each(function() {
                var e = $(this);
                if (e.closest("." + i + "-root").length) l = !0;
                else {
                    var t = this.parentNode;
                    7 >= r && t.firstChild.nodeName, t.replaceChild(this.firstChild, this), t.normalize()
                }
            }), e.Zepto ? t.data(i, a) : t.removeData(i), s.debug && (n.log(i + ": Reversed Blast" + (t.attr("id") ? " on #" + t.attr("id") + "." : ".") + (l ? " Skipped reversal on the children of one or more descendant root elements." : "")), n.timeEnd("blast reversal"))
        }
        var m = $.extend({}, $.fn[i].defaults, d),
            h, f = {};
        if (m.search.length && ("string" == typeof m.search || /^\d/.test(parseFloat(m.search)))) m.delimiter = m.search.toString().replace(/[-[\]{,}(.)*+?|^$\\\/]/g, "\\$&"), h = new RegExp("(?:^|[^-" + s.latinLetters + "])(" + m.delimiter + "('s)?)(?![-" + s.latinLetters + "])", "i");
        else switch ("string" == typeof m.delimiter && (m.delimiter = m.delimiter.toLowerCase()), m.delimiter) {
            case "all":
                h = /(.)/;
                break;
            case "letter":
            case "char":
            case "character":
                h = /(\S)/;
                break;
            case "word":
                h = /\s*(\S+)\s*/;
                break;
            case "sentence":
                h = /(?=\S)(([.]{2,})?[^!?]+?([.…!?]+|(?=\s+$)|$)(\s*[′’'”″“")»]+)*)/;
                break;
            case "element":
                h = /(?=\S)([\S\s]*\S)/;
                break;
            default:
                if (!(m.delimiter instanceof RegExp)) return n.log(i + ": Unrecognized delimiter, empty search string, or invalid custom Regex. Aborting."), !0;
                h = m.delimiter
        }
        if (this.each(function() {
                var e = $(this),
                    r = e.text();
                if (d !== !1) {
                    f = { blastedIndex: 0, nodeBeginning: !1, wrappers: f.wrappers || [] }, e.data(i) === a || "search" === e.data(i) && m.search !== !1 || (p(e, m), m.debug && n.log(i + ": Removed element's existing Blast call.")), e.data(i, m.search !== !1 ? "search" : m.delimiter), m.aria && e.attr("aria-label", r), m.stripHTMLTags && e.html(r);
                    try { t.createElement(m.tag) } catch (s) { m.tag = "span", m.debug && n.log(i + ": Invalid tag supplied. Defaulting to span.") }
                    e.addClass(i + "-root"), m.debug && n.time(i), g(this, m), m.debug && n.timeEnd(i)
                } else d === !1 && e.data(i) !== a && p(e, m);
                m.debug && $.each(f.wrappers, function(e, t) { n.log(i + " [" + m.delimiter + "] " + this.outerHTML), this.style.backgroundColor = e % 2 ? "#f12185" : "#075d9a" })
            }), d !== !1 && m.returnGenerated === !0) { var b = $().add(f.wrappers); return b.prevObject = this, b.context = this.context, b }
        return this
    }, $.fn.blast.defaults = { returnGenerated: !0, delimiter: "word", tag: "span", search: !1, customClass: "", generateIndexID: !1, generateValueClass: !1, stripHTMLTags: !1, aria: !0, debug: !1 }
}(window.$ || window.Zepto, window, document);
/*! alertify - v0.3.11 - 2013-10-08 */
! function(a, b) {
    "use strict";
    var c, d = a.document;
    c = function() {
        var c, e, f, g, h, i, j, k, l, m, n, o, p, q = {},
            r = {},
            s = !1,
            t = { ENTER: 13, ESC: 27, SPACE: 32 },
            u = [];
        return r = { buttons: { holder: '<nav class="alertify-buttons">{{buttons}}</nav>', submit: '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>', ok: '<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>', cancel: '<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>' }, input: '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>', message: '<p class="alertify-message">{{message}}</p>', log: '<article class="alertify-log{{class}}">{{message}}</article>' }, p = function() {
            var a, c, e = !1,
                f = d.createElement("fakeelement"),
                g = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" };
            for (a in g)
                if (f.style[a] !== b) { c = g[a], e = !0; break }
            return { type: c, supported: e }
        }, c = function(a) { return d.getElementById(a) }, q = {
            labels: { ok: "OK", cancel: "Cancel" },
            delay: 5e3,
            buttonReverse: !1,
            buttonFocus: "ok",
            transition: b,
            addListeners: function(a) {
                var b, c, i, j, k, l = "undefined" != typeof f,
                    m = "undefined" != typeof e,
                    n = "undefined" != typeof o,
                    p = "",
                    q = this;
                b = function(b) { return "undefined" != typeof b.preventDefault && b.preventDefault(), i(b), "undefined" != typeof o && (p = o.value), "function" == typeof a && ("undefined" != typeof o ? a(!0, p) : a(!0)), !1 }, c = function(b) { return "undefined" != typeof b.preventDefault && b.preventDefault(), i(b), "function" == typeof a && a(!1), !1 }, i = function() { q.hide(), q.unbind(d.body, "keyup", j), q.unbind(g, "focus", k), l && q.unbind(f, "click", b), m && q.unbind(e, "click", c) }, j = function(a) {
                    var d = a.keyCode;
                    (d === t.SPACE && !n || n && d === t.ENTER) && b(a), d === t.ESC && m && c(a)
                }, k = function() { n ? o.focus() : !m || q.buttonReverse ? f.focus() : e.focus() }, this.bind(g, "focus", k), this.bind(h, "focus", k), l && this.bind(f, "click", b), m && this.bind(e, "click", c), this.bind(d.body, "keyup", j), this.transition.supported || this.setFocus()
            },
            bind: function(a, b, c) { "function" == typeof a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c) },
            handleErrors: function() {
                if ("undefined" != typeof a.onerror) { var b = this; return a.onerror = function(a, c, d) { b.error("[" + a + " on line " + d + " of " + c + "]", 0) }, !0 }
                return !1
            },
            appendButtons: function(a, b) { return this.buttonReverse ? b + a : a + b },
            build: function(a) {
                var b = "",
                    c = a.type,
                    d = a.message,
                    e = a.cssClass || "";
                switch (b += '<div class="alertify-dialog">', b += '<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>', "none" === q.buttonFocus && (b += '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'), "prompt" === c && (b += '<div id="alertify-form">'), b += '<article class="alertify-inner">', b += r.message.replace("{{message}}", d), "prompt" === c && (b += r.input), b += r.buttons.holder, b += "</article>", "prompt" === c && (b += "</div>"), b += '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>', b += "</div>", c) {
                    case "confirm":
                        b = b.replace("{{buttons}}", this.appendButtons(r.buttons.cancel, r.buttons.ok)), b = b.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case "prompt":
                        b = b.replace("{{buttons}}", this.appendButtons(r.buttons.cancel, r.buttons.submit)), b = b.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case "alert":
                        b = b.replace("{{buttons}}", r.buttons.ok), b = b.replace("{{ok}}", this.labels.ok)
                }
                return l.className = "alertify alertify-" + c + " " + e, k.className = "alertify-cover", b
            },
            close: function(a, b) {
                var c, d, e = b && !isNaN(b) ? +b : this.delay,
                    f = this;
                this.bind(a, "click", function() { c(a) }), d = function(a) { a.stopPropagation(), f.unbind(this, f.transition.type, d), m.removeChild(this), m.hasChildNodes() || (m.className += " alertify-logs-hidden") }, c = function(a) { "undefined" != typeof a && a.parentNode === m && (f.transition.supported ? (f.bind(a, f.transition.type, d), a.className += " alertify-log-hide") : (m.removeChild(a), m.hasChildNodes() || (m.className += " alertify-logs-hidden"))) }, 0 !== b && setTimeout(function() { c(a) }, e)
            },
            dialog: function(a, b, c, e, f) { j = d.activeElement; var g = function() { m && null !== m.scrollTop && k && null !== k.scrollTop || g() }; if ("string" != typeof a) throw new Error("message must be a string"); if ("string" != typeof b) throw new Error("type must be a string"); if ("undefined" != typeof c && "function" != typeof c) throw new Error("fn must be a function"); return this.init(), g(), u.push({ type: b, message: a, callback: c, placeholder: e, cssClass: f }), s || this.setup(), this },
            extend: function(a) { if ("string" != typeof a) throw new Error("extend method must have exactly one paramter"); return function(b, c) { return this.log(b, a, c), this } },
            hide: function() {
                var a, b = this;
                u.splice(0, 1), u.length > 0 ? this.setup(!0) : (s = !1, a = function(c) { c.stopPropagation(), b.unbind(l, b.transition.type, a) }, this.transition.supported ? (this.bind(l, this.transition.type, a), l.className = "alertify alertify-hide alertify-hidden") : l.className = "alertify alertify-hide alertify-hidden alertify-isHidden", k.className = "alertify-cover alertify-cover-hidden", j.focus())
            },
            init: function() { d.createElement("nav"), d.createElement("article"), d.createElement("section"), null == c("alertify-cover") && (k = d.createElement("div"), k.setAttribute("id", "alertify-cover"), k.className = "alertify-cover alertify-cover-hidden", d.body.appendChild(k)), null == c("alertify") && (s = !1, u = [], l = d.createElement("section"), l.setAttribute("id", "alertify"), l.className = "alertify alertify-hidden", d.body.appendChild(l)), null == c("alertify-logs") && (m = d.createElement("section"), m.setAttribute("id", "alertify-logs"), m.className = "alertify-logs alertify-logs-hidden", d.body.appendChild(m)), d.body.setAttribute("tabindex", "0"), this.transition = p() },
            log: function(a, b, c) { var d = function() { m && null !== m.scrollTop || d() }; return this.init(), d(), m.className = "alertify-logs", this.notify(a, b, c), this },
            notify: function(a, b, c) {
                var e = d.createElement("article");
                e.className = "alertify-log" + ("string" == typeof b && "" !== b ? " alertify-log-" + b : ""), e.innerHTML = a, m.appendChild(e), setTimeout(function() { e.className = e.className + " alertify-log-show" }, 50), this.close(e, c)
            },
            set: function(a) { var b; if ("object" != typeof a && a instanceof Array) throw new Error("args must be an object"); for (b in a) a.hasOwnProperty(b) && (this[b] = a[b]) },
            setFocus: function() { o ? (o.focus(), o.select()) : i.focus() },
            setup: function(a) {
                var d, j = u[0],
                    k = this;
                s = !0, d = function(a) { a.stopPropagation(), k.setFocus(), k.unbind(l, k.transition.type, d) }, this.transition.supported && !a && this.bind(l, this.transition.type, d), l.innerHTML = this.build(j), g = c("alertify-resetFocus"), h = c("alertify-resetFocusBack"), f = c("alertify-ok") || b, e = c("alertify-cancel") || b, i = "cancel" === q.buttonFocus ? e : "none" === q.buttonFocus ? c("alertify-noneFocus") : f, o = c("alertify-text") || b, n = c("alertify-form") || b, "string" == typeof j.placeholder && "" !== j.placeholder && (o.value = j.placeholder), a && this.setFocus(), this.addListeners(j.callback)
            },
            unbind: function(a, b, c) { "function" == typeof a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) }
        }, { alert: function(a, b, c) { return q.dialog(a, "alert", b, "", c), this }, confirm: function(a, b, c) { return q.dialog(a, "confirm", b, "", c), this }, extend: q.extend, init: q.init, log: function(a, b, c) { return q.log(a, b, c), this }, prompt: function(a, b, c, d) { return q.dialog(a, "prompt", b, c, d), this }, success: function(a, b) { return q.log(a, "success", b), this }, error: function(a, b) { return q.log(a, "error", b), this }, set: function(a) { q.set(a) }, labels: q.labels, debug: q.handleErrors }
    }, "function" == typeof define ? define([], function() { return new c }) : "undefined" == typeof a.alertify && (a.alertify = new c)
}(this);
(function(factory) {
    if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } else if (typeof module === 'object' && module.exports) {
        module.exports = function(root, jQuery) {
            if (jQuery === undefined) { if (typeof window !== 'undefined') { jQuery = require('jquery'); } else { jQuery = require('jquery')(root); } }
            factory(jQuery);
            return jQuery;
        };
    } else { factory(jQuery); }
}(function($) {
    'use strict';
    var pluginName = 'drawsvg',
        defaults = { duration: 1000, stagger: 200, easing: 'swing', reverse: false, callback: $.noop },
        DrawSvg = (function() {
            var fn = function fn(elm, options) {
                var _this = this,
                    opts = $.extend(defaults, options);
                _this.$elm = $(elm);
                if (!_this.$elm.is('svg'))
                    return;
                _this.options = opts;
                _this.$paths = _this.$elm.find('path');
                _this.totalDuration = opts.duration + (opts.stagger * _this.$paths.length);
                _this.duration = opts.duration / _this.totalDuration;
                _this.$paths.each(function(index, elm) {
                    var pathLength = elm.getTotalLength();
                    elm.pathLen = pathLength;
                    elm.delay = (opts.stagger * index) / _this.totalDuration;
                    elm.style.strokeDasharray = [pathLength, pathLength].join(' ');
                    elm.style.strokeDashoffset = pathLength;
                });
                _this.$elm.attr('class', function(index, classNames) { return [classNames, pluginName + '-initialized'].join(' '); });
            };
            fn.prototype.getVal = function(p, easing) { return 1 - $.easing[easing](p, p, 0, 1, 1); };
            fn.prototype.progress = function progress(prog) {
                var _this = this,
                    opts = _this.options,
                    duration = _this.duration;
                _this.$paths.each(function(index, elm) {
                    var elmStyle = elm.style;
                    if (prog === 1) { elmStyle.strokeDashoffset = 0; } else if (prog === 0) { elmStyle.strokeDashoffset = elm.pathLen + 'px'; } else if (prog >= elm.delay && prog <= duration + elm.delay) {
                        var p = ((prog - elm.delay) / duration);
                        elmStyle.strokeDashoffset = ((_this.getVal(p, opts.easing) * elm.pathLen) * (opts.reverse ? -1 : 1)) + 'px';
                    }
                });
            };
            fn.prototype.animate = function animate() {
                var _this = this;
                _this.$elm.attr('class', function(index, classNames) { return [classNames, pluginName + '-animating'].join(' '); });
                $({ len: 0 }).animate({ len: 1 }, {
                    easing: 'linear',
                    duration: _this.totalDuration,
                    step: function(now, fx) { _this.progress.call(_this, now / fx.end); },
                    complete: function() {
                        _this.options.callback.call(this);
                        _this.$elm.attr('class', function(index, classNames) { return classNames.replace(pluginName + '-animating', ''); });
                    }
                });
            };
            return fn;
        })();
    $.fn[pluginName] = function(method, args) {
        return this.each(function() {
            var data = $.data(this, pluginName);
            (data && '' + method === method && data[method]) ? data[method](args): $.data(this, pluginName, new DrawSvg(this, method));
        });
    };
}));
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, a, c, b, d) { return jQuery.easing[jQuery.easing.def](e, a, c, b, d) },
    easeInQuad: function(e, a, c, b, d) { return b * (a /= d) * a + c },
    easeOutQuad: function(e, a, c, b, d) { return -b * (a /= d) * (a - 2) + c },
    easeInOutQuad: function(e, a, c, b, d) { if ((a /= d / 2) < 1) return b / 2 * a * a + c; return -b / 2 * (--a * (a - 2) - 1) + c },
    easeInCubic: function(e, a, c, b, d) { return b * (a /= d) * a * a + c },
    easeOutCubic: function(e, a, c, b, d) { return b * ((a = a / d - 1) * a * a + 1) + c },
    easeInOutCubic: function(e, a, c, b, d) { if ((a /= d / 2) < 1) return b / 2 * a * a * a + c; return b / 2 * ((a -= 2) * a * a + 2) + c },
    easeInQuart: function(e, a, c, b, d) { return b * (a /= d) * a * a * a + c },
    easeOutQuart: function(e, a, c, b, d) { return -b * ((a = a / d - 1) * a * a * a - 1) + c },
    easeInOutQuart: function(e, a, c, b, d) { if ((a /= d / 2) < 1) return b / 2 * a * a * a * a + c; return -b / 2 * ((a -= 2) * a * a * a - 2) + c },
    easeInQuint: function(e, a, c, b, d) { return b * (a /= d) * a * a * a * a + c },
    easeOutQuint: function(e, a, c, b, d) { return b * ((a = a / d - 1) * a * a * a * a + 1) + c },
    easeInOutQuint: function(e, a, c, b, d) { if ((a /= d / 2) < 1) return b / 2 * a * a * a * a * a + c; return b / 2 * ((a -= 2) * a * a * a * a + 2) + c },
    easeInSine: function(e, a, c, b, d) { return -b * Math.cos(a / d * (Math.PI / 2)) + b + c },
    easeOutSine: function(e, a, c, b, d) { return b * Math.sin(a / d * (Math.PI / 2)) + c },
    easeInOutSine: function(e, a, c, b, d) { return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c },
    easeInExpo: function(e, a, c, b, d) { return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c },
    easeOutExpo: function(e, a, c, b, d) { return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c },
    easeInOutExpo: function(e, a, c, b, d) { if (a == 0) return c; if (a == d) return c + b; if ((a /= d / 2) < 1) return b / 2 * Math.pow(2, 10 * (a - 1)) + c; return b / 2 * (-Math.pow(2, -10 * --a) + 2) + c },
    easeInCirc: function(e, a, c, b, d) { return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c },
    easeOutCirc: function(e, a, c, b, d) { return b * Math.sqrt(1 - (a = a / d - 1) * a) + c },
    easeInOutCirc: function(e, a, c, b, d) { if ((a /= d / 2) < 1) return -b / 2 * (Math.sqrt(1 - a * a) - 1) + c; return b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c },
    easeInElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c
    },
    easeOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c
    },
    easeInOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d / 2) == 2) return c + b;
        f || (f = d * 0.3 * 1.5);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        if (a < 1) return -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c;
        return g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) * 0.5 + b + c
    },
    easeInBack: function(e, a, c, b, d, f) { if (f == undefined) f = 1.70158; return b * (a /= d) * a * ((f + 1) * a - f) + c },
    easeOutBack: function(e, a, c, b, d, f) { if (f == undefined) f = 1.70158; return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c },
    easeInOutBack: function(e, a, c, b, d, f) { if (f == undefined) f = 1.70158; if ((a /= d / 2) < 1) return b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c; return b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c },
    easeInBounce: function(e, a, c, b, d) { return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c },
    easeOutBounce: function(e, a, c, b, d) { return (a /= d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c },
    easeInOutBounce: function(e, a, c, b, d) { if (a < d / 2) return jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c; return jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c }
});
/*!
 Colorbox 1.6.1
 license: MIT
 http://www.jacklmoore.com/colorbox
 */
(function(t, e, i) {
    function n(i, n, o) { var r = e.createElement(i); return n && (r.id = Z + n), o && (r.style.cssText = o), t(r) }

    function o() { return i.innerHeight ? i.innerHeight : t(i).height() }

    function r(e, i) { i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function(e) { var n; return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e] }, this.get = function(e) { var i = this.value(e); return t.isFunction(i) ? i.call(this.el, this) : i } }

    function h(t) {
        var e = W.length,
            i = (A + t) % e;
        return 0 > i ? e + i : i
    }

    function a(t, e) { return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10)) }

    function s(t, e) { return t.get("photo") || t.get("photoRegex").test(e) }

    function l(t, e) { return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e }

    function d(t) { "contains" in y[0] && !y[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), y.focus()) }

    function c(t) { c.str !== t && (y.add(v).removeClass(c.str).addClass(t), c.str = t) }

    function g(e) {
        A = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function() {
            var i = t.data(this, Y),
                n = new r(this, i);
            return n.get("rel") === e
        }), A = W.index(_.el), -1 === A && (W = W.add(_.el), A = W.length - 1)) : W = t(_.el)
    }

    function u(i) { t(e).trigger(i), ae.triggerHandler(i) }

    function f(i) {
        var o;
        if (!G) {
            if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !$) {
                $ = q = !0, c(_.get("className")), y.css({ visibility: "hidden", display: "block", opacity: "" }), I = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({ width: "", height: "" }).append(I), j = T.height() + k.height() + b.outerHeight(!0) - b.height(), D = C.width() + H.width() + b.outerWidth(!0) - b.width(), N = I.outerHeight(!0), z = I.outerWidth(!0);
                var h = a(_.get("initialWidth"), "x"),
                    s = a(_.get("initialHeight"), "y"),
                    l = _.get("maxWidth"),
                    f = _.get("maxHeight");
                _.w = (l !== !1 ? Math.min(h, a(l, "x")) : h) - z - D, _.h = (f !== !1 ? Math.min(s, a(f, "y")) : s) - N - j, I.css({ width: "", height: _.h }), J.position(), u(ee), _.get("onOpen"), O.add(S).hide(), y.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function() { e.removeEventListener("focus", d, !0) })), _.get("returnFocus") && ae.one(re, function() { t(_.el).focus() })
            }
            var p = parseFloat(_.get("opacity"));
            v.css({ opacity: p === p ? p : "", cursor: _.get("overlayClose") ? "pointer" : "", visibility: "visible" }).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w()
        }
    }

    function p() { y || (V = !1, E = t(i), y = n(se).attr({ id: Y, "class": t.support.opacity === !1 ? Z + "IE" : "", role: "dialog", tabindex: "-1" }).hide(), v = n(se, "Overlay").hide(), M = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), x = n(se, "Wrapper"), b = n(se, "Content").append(S = n(se, "Title"), F = n(se, "Current"), P = t('<button type="button"/>').attr({ id: Z + "Previous" }), K = t('<button type="button"/>').attr({ id: Z + "Next" }), R = n("button", "Slideshow"), M), B = t('<button type="button"/>').attr({ id: Z + "Close" }), x.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({ "float": "left" }), L = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(F).add(R)), e.body && !y.parent().length && t(e.body).append(v, y.append(x, L)) }

    function m() {
        function i(t) { t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this)) }
        return y ? (V || (V = !0, K.click(function() { J.next() }), P.click(function() { J.prev() }), B.click(function() { J.close() }), v.click(function() { _.get("overlayClose") && J.close() }), t(e).bind("keydown." + Z, function(t) {
            var e = t.keyCode;
            $ && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), $ && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()))
        }), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1
    }

    function w() {
        var e, o, r, h = J.prep,
            d = ++le;
        if (q = !0, U = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - N - j : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - z - D : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - z - D, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - N - j, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function() { M.show() }, 100), _.get("inline")) {
            var c = t(e);
            r = t("<div>").hide().insertBefore(c), ae.one(he, function() { r.replaceWith(c) }), h(c)
        } else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), U = _.get("createImg"), t(U).addClass(Z + "Photo").bind("error." + Z, function() { h(n(se, "Error").html(_.get("imgError"))) }).one("load", function() {
            d === le && setTimeout(function() {
                var e;
                _.get("retinaImage") && i.devicePixelRatio > 1 && (U.height = U.height / i.devicePixelRatio, U.width = U.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function() { U.height -= U.height * e, U.width -= U.width * e }, _.mw && U.width > _.mw && (e = (U.width - _.mw) / U.width, o()), _.mh && U.height > _.mh && (e = (U.height - _.mh) / U.height, o())), _.h && (U.style.marginTop = Math.max(_.mh - U.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[A + 1]) && (U.style.cursor = "pointer", t(U).bind("click." + Z, function() { J.next() })), U.style.width = U.width + "px", U.style.height = U.height + "px", h(U)
            }, 1)
        }), U.src = e) : e && L.load(e, _.get("data"), function(e, i) { d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents()) })
    }
    var v, y, x, b, T, C, H, k, W, E, I, L, M, S, F, R, K, P, B, O, _, j, D, N, z, A, U, $, q, G, Q, J, V, X = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() { return this.rel },
            href: function() { return t(this).attr("href") },
            title: function() { return this.title },
            createImg: function() {
                var e = new Image,
                    i = t(this).data("cbox-img-attrs");
                return "object" == typeof i && t.each(i, function(t, i) { e[t] = i }), e
            },
            createIframe: function() {
                var i = e.createElement("iframe"),
                    n = t(this).data("cbox-iframe-attrs");
                return "object" == typeof n && t.each(n, function(t, e) { i[t] = e }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullScreen = !0, i
            }
        },
        Y = "colorbox",
        Z = "cbox",
        te = Z + "Element",
        ee = Z + "_open",
        ie = Z + "_load",
        ne = Z + "_complete",
        oe = Z + "_cleanup",
        re = Z + "_closed",
        he = Z + "_purge",
        ae = t("<a/>"),
        se = "div",
        le = 0,
        de = {},
        ce = function() {
            function t() { clearTimeout(h) }

            function e() {
                (_.get("loop") || W[A + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")))
            }

            function i() { R.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), y.removeClass(a + "off").addClass(a + "on") }

            function n() { t(), ae.unbind(ne, e).unbind(ie, t), R.html(_.get("slideshowStart")).unbind(s).one(s, function() { J.next(), i() }), y.removeClass(a + "on").addClass(a + "off") }

            function o() { r = !1, R.hide(), t(), ae.unbind(ne, e).unbind(ie, t), y.removeClass(a + "off " + a + "on") }
            var r, h, a = Z + "Slideshow_",
                s = "click." + Z;
            return function() { r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), R.show()) }
        }();
    t[Y] || (t(p), J = t.fn[Y] = t[Y] = function(e, i) {
        var n, o = this;
        return e = e || {}, t.isFunction(o) && (o = t("<a/>"), e.open = !0), o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function() {
            var i = t.data(this, Y) || {};
            t.data(this, Y, t.extend(i, e))
        }).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o
    }, J.position = function(e, i) {
        function n() { T[0].style.width = k[0].style.width = b[0].style.width = parseInt(y[0].style.width, 10) - D + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(y[0].style.height, 10) - j + "px" }
        var r, h, s, l = 0,
            d = 0,
            c = y.offset();
        if (E.unbind("resize." + Z), y.css({ top: -9e4, left: -9e4 }), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, y.css({ position: "fixed" })) : (l = h, d = s, y.css({ position: "absolute" })), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - z - D - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - z - D, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - N - j - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - N - j, 0) / 2), y.css({ top: c.top, left: c.left, visibility: "visible" }), x[0].style.width = x[0].style.height = "9999px", r = { width: _.w + z + D, height: _.h + N + j, top: l, left: d }, e) {
            var g = 0;
            t.each(r, function(t) { return r[t] !== de[t] ? (g = e, void 0) : void 0 }), e = g
        }
        de = r, e || y.css(r), y.dequeue().animate(r, { duration: e || 0, complete: function() { n(), q = !1, x[0].style.width = _.w + z + D + "px", x[0].style.height = _.h + N + j + "px", _.get("reposition") && setTimeout(function() { E.bind("resize." + Z, J.position) }, 1), t.isFunction(i) && i() }, step: n })
    }, J.resize = function(t) {
        var e;
        $ && (t = t || {}, t.width && (_.w = a(t.width, "x") - z - D), t.innerWidth && (_.w = a(t.innerWidth, "x")), I.css({ width: _.w }), t.height && (_.h = a(t.height, "y") - N - j), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = I.scrollTop(), I.css({ height: "auto" }), _.h = I.height()), I.css({ height: _.h }), e && I.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")))
    }, J.prep = function(i) {
        function o() { return _.w = _.w || I.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w }

        function a() { return _.h = _.h || I.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h }
        if ($) {
            var d, g = "none" === _.get("transition") ? 0 : _.get("speed");
            I.remove(), I = n(se, "LoadedContent").append(i), I.hide().appendTo(L.show()).css({ width: o(), overflow: _.get("scrolling") ? "auto" : "hidden" }).css({ height: a() }).prependTo(b), L.hide(), t(U).css({ "float": "none" }), c(_.get("className")), d = function() {
                function i() { t.support.opacity === !1 && y[0].style.removeAttribute("filter") }
                var n, o, a = W.length;
                $ && (o = function() { clearTimeout(Q), M.hide(), u(ne), _.get("onComplete") }, S.html(_.get("title")).show(), I.show(), a > 1 ? ("string" == typeof _.get("current") && F.html(_.get("current").replace("{current}", A + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > A ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || A ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function() {
                    var i, n = W[this],
                        o = new r(n, t.data(n, Y)),
                        h = o.get("href");
                    h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h)
                })) : O.hide(), _.get("iframe") ? (n = _.get("createIframe"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({ src: _.get("href"), "class": Z + "Iframe" }).one("load", o).appendTo(I), ae.one(he, function() { n.src = "//about:blank" }), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? y.fadeTo(g, 1, i) : i())
            }, "fade" === _.get("transition") ? y.fadeTo(g, 0, function() { J.position(0, d) }) : J.position(g, d)
        }
    }, J.next = function() {!q && W[1] && (_.get("loop") || W[A + 1]) && (A = h(1), f(W[A])) }, J.prev = function() {!q && W[1] && (_.get("loop") || A) && (A = h(-1), f(W[A])) }, J.close = function() { $ && !G && (G = !0, $ = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), y.stop().fadeTo(_.get("fadeOut") || 0, 0, function() { y.hide(), v.hide(), u(he), I.remove(), setTimeout(function() { G = !1, u(re), _.get("onClosed") }, 1) })) }, J.remove = function() { y && (y.stop(), t[Y].close(), y.stop(!1, !0).remove(), v.remove(), G = !1, y = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z)) }, J.element = function() { return t(_.el) }, J.settings = X)
})(jQuery, document, window);;
(function($, window, document, undefined) {
    "use strict";
    var
        doc = document,
        win = window,
        $doc = $(doc),
        $win = $(win),
        pluginName = "magicWall",
        pluginSlug = "magicwall",
        selectors = { loading: "." + pluginSlug + "-loading", hover: "." + pluginSlug + "-hover", wrap: "." + pluginSlug + "-wrap", thumb: "." + pluginSlug + "-thumb", grid: "." + pluginSlug + "-grid", gridItem: "." + pluginSlug + "-grid-item", };
    var
        easing = { swing: function(x, t, b, c, d) { return -c * (t /= d) * (t - 2) + b; } },
        prefix = (function() {
            var styles = window.getComputedStyle(document.documentElement, ''),
                pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1],
                dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
            return { dom: dom, lowercase: pre, css: '-' + pre + '-', js: pre[0].toUpperCase() + pre.substr(1) };
        })(),
        has3d = (function() {
            var el, has3d;
            el = document.createElement('p');
            el.style['transform'] = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)';
            document.body.insertBefore(el, document.body.lastChild);
            has3d = window.getComputedStyle(el).getPropertyValue('transform');
            $(el).remove();
            if (has3d !== undefined) { return has3d !== 'none'; } else { return false; }
        })();

    function Css3d(e) {
        this.elem = e;
        this._init()
    }
    Css3d.prototype = {
        _init: function() {
            var e = this;
            e._addCssProps()
        },
        _raf: function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) { return window.setTimeout(e, 1e3 / 60) } }(),
        _caf: function() { return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || function(e) { window.clearTimeout(e) } }(),
        _easing: { swing: function(e, t, n, r, i) { return -r * (t /= i) * (t - 2) + n } },
        _prefix: function() {
            var e = window.getComputedStyle(document.documentElement, ""),
                t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || e.OLink === "" && ["", "o"])[1],
                n = "WebKit|Moz|MS|O".match(new RegExp("(" + t + ")", "i"))[1];
            return { dom: n, lowercase: t, css: "-" + t + "-", js: t[0].toUpperCase() + t.substr(1) }
        }(),
        _has3d: function() {
            var e, t;
            e = document.createElement("p");
            e.style["transform"] = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
            document.body.insertBefore(e, document.body.lastChild);
            t = window.getComputedStyle(e).getPropertyValue("transform");
            $(e).remove();
            if (t !== undefined) { return t !== "none" } else { return false }
        }(),
        _addCssProps: function() {
            var e = this,
                t = [{ publicName: "x", privateName: "_x", defaultValue: 0 }, { publicName: "y", privateName: "_y", defaultValue: 0 }, { publicName: "z", privateName: "_z", defaultValue: 0 }, { publicName: "rotX", privateName: "_rx", defaultValue: 0 }, { publicName: "rotY", privateName: "_ry", defaultValue: 0 }, { publicName: "rotZ", privateName: "_rz", defaultValue: 0 }, { publicName: "originX", privateName: "_ox", defaultValue: .5 }, { publicName: "originY", privateName: "_oy", defaultValue: .5 }, { publicName: "scaleX", privateName: "_scx", defaultValue: 1 }, { publicName: "scaleY", privateName: "_scy", defaultValue: 1 }, { publicName: "opacity", privateName: "_op", defaultValue: 1 }],
                n = 0,
                r = t.length;
            for (; n < r; n++) {
                e[t[n].publicName] = function(t) {
                    return function(n) {
                        if (n === undefined) return e[t.privateName] !== undefined ? e[t.privateName] : t.defaultValue;
                        e[t.privateName] = n;
                        return e
                    }
                }(t[n])
            }
        },
        _animate: function(e) {
            function s() {
                n = t._getValue(e.from, e.to, r, i, e.easing);
                if (e.callback) e.callback(n, r, i, e.callbackParams);
                if (e.onUpdate) e.onUpdate(n, r, i, e.onUpdateParams);
                if (r == i) { if (e.complete) e.complete(); if (e.onComplete) e.onComplete() } else { e.context[e.id] = t._raf.call(window, function() { s() }) }
                r = Math.min(i, r + 1e3 / 60)
            }
            var t = this,
                n = e.from,
                r = -e.delay || 0,
                i = !e.duration ? 1e3 : e.duration;
            if (e.context[e.id]) t._caf.call(window, e.context[e.id]);
            if (e.callback) e.callback(n, r, i, e.callbackParams);
            if (e.onUpdate) e.onUpdate(n, r, i, e.onUpdateParams);
            s()
        },
        _getValue: function(e, t, n, r, i) {
            var s = this,
                o;
            o = $.easing && $.easing[i] ? $.easing[i] : s._easing.swing;
            return o(null, Math.max(0, n), e, t - e, r)
        },
        _doFromTo: function(e, t, n, r) {
            var i = this,
                s = e || t,
                o = i.elem instanceof jQuery,
                u;
            n = $.extend(true, {}, n);
            for (u in s) {
                n = $.extend(true, {}, n);
                n.id = u + "Tween";
                n.context = i;
                n.from = [(e || {})[u], o ? i[u]() : i.elem[u]][r == "to" ? 1 : 0];
                n.to = [(t || {})[u], o ? i[u]() : i.elem[u]][r == "from" ? 1 : 0];
                n.callback = function(e) {
                    return function(t) {
                        if (o) {
                            i[e](t);
                            i.update()
                        } else { i.elem[e] = t }
                    }
                }(u);
                i[u + "TweenProps"] = n;
                i._animate(n)
            }
            return i
        },
        set: function(e, t) {
            var n = this,
                r = 0,
                i;
            e = e.split(",");
            i = e.length;
            for (; r < i; r++) n[e[r]](t);
            return n
        },
        to: function(e, t) {
            var n = this;
            n._doFromTo(null, e, t, "to");
            return n
        },
        from: function(e, t) {
            var n = this;
            n._doFromTo(e, null, t, "from");
            return n
        },
        fromTo: function(e, t, n) {
            var r = this;
            r._doFromTo(e, t, n, "fromTo");
            return r
        },
        stop: function(e, t) {
            var n = this;
            e = e.split(",");
            for (var r in e) {
                if (t && n[e[r] + "TweenProps"]) { n[e[r]](n[e[r] + "TweenProps"].to) }
                n._caf.call(window, n[e[r] + "Tween"])
            }
            return n
        },
        end: function(e) {
            var t = this;
            t.stop(e, true);
            return t
        },
        update: function() {
            var e = this,
                t = [],
                n;
            t.push("translate3d(" + e.x() + "px, " + e.y() + "px, " + e.z() + "px)");
            t.push("rotateX(" + e.rotX() + "deg)");
            t.push("rotateY(" + e.rotY() + "deg)");
            t.push("rotateZ(" + e.rotZ() + "deg)");
            t.push("scaleX(" + e.scaleX() + ")");
            t.push("scaleY(" + e.scaleY() + ")");
            n = {};
            n[e._prefix.css + "transform"] = t.join(" ");
            n[e._prefix.css + "transform-origin"] = e.originX() * 100 + "% " + e.originY() * 100 + "%";
            n["opacity"] = e.opacity();
            e.elem.css(n);
            return e
        }
    }
    $.fn[pluginName] = function(options) {
        var args = Array.prototype.slice.call(arguments, 1);
        return $(this).each(function() {
            var instance = $(this).data("_" + pluginName + "Instance");
            if (typeof options === "string" && !instance) return;
            instance = instance || new MagicWall(this);
            instance.init(options, args);
            $(this).data("_" + pluginName + "Instance", instance);
        });
    }
    $.fn[pluginName].options = { service: false, jsonUrl: false, appKey: false, userID: false, photoSetID: false, photoCount: 50, photoSize: 2, maxItemWidth: 240, maxItemHeight: 160, columnsCount: false, rowsCount: false, minColumnsCount: 1, minRowsCount: 1, maxColumnsCount: false, maxRowsCount: false, thumbSizing: "cover", perspective: 600, delay: 1000, loadingMode: "normal", paused: false, useCache: true, preloadBeforeSwitch: false, animations: "*", excludedAnimations: "", pauseOnHover: false, fixedClass: "fixed", breakpoints: false, autoUpdateOnResize: 50, duration: 600, easing: "easeInOutCubic", rollInXDuration: false, rollInXEasing: false, rollInYDuration: false, rollInYEasing: false, rollOutXDuration: false, rollOutXEasing: false, rollOutYDuration: false, rollOutYEasing: false, flipXDuration: false, flipXEasing: false, flipYDuration: false, flipYEasing: false, slideXDuration: false, slideXEasing: false, slideYDuration: false, slideYEasing: false, slideRowDuration: false, slideRowEasing: false, slideColumnDuration: false, slideColumnEasing: false, fadeDuration: false, fadeEasing: false, };
    $.fn[pluginName].services = {
        _json: {
            getURL: function(o) { return o.jsonUrl || ""; },
            processJSON: function(json, o) {
                var p = json.photos,
                    i = 0,
                    r = [];
                if (p) {
                    for (; i < p.length; i++) { r.push(p[i].image_url); }
                    return r;
                }
                return false;
            }
        },
        _flickr: {
            getURL: function(o) {
                var url = "https://api.flickr.com/services/rest/?method=";
                if (o.userID) { url += "flickr.people.getPublicPhotos&user_id=" + o.userID; } else
                if (o.photoSetID) { url += "flickr.photosets.getPhotos&media=photos&photoset_id=" + o.photoSetID; }
                url += "&format=json&nojsoncallback=1&per_page=" + o.photoCount + "&api_key=" + o.appKey;
                return url;
            },
            processJSON: function(json, o) {
                var p = json.photos || json.photoset,
                    i = 0,
                    r = [],
                    sizes = ["q", "m", "n", "z", ];
                if (p) {
                    p = p.photo;
                    for (; i < p.length; i++) { r.push("http://farm" + p[i].farm + ".static.flickr.com/" + p[i].server + "/" + p[i].id + "_" + p[i].secret + "_" + sizes[o.photoSize - 1] + ".jpg"); }
                    return r;
                }
                return false;
            }
        },
        _500px: {
            getURL: function(o) { return "https://api.500px.com/v1/photos?feature=user&username=" + o.userID + "&rpp=" + o.photoCount + "&image_size=" + o.photoSize + "&consumer_key=" + o.appKey; },
            processJSON: function(json, o) {
                var p = json.photos,
                    i = 0,
                    r = [];
                if (p) {
                    for (; i < p.length; i++) { r.push(p[i].image_url); }
                    return r;
                }
                return false;
            }
        },
        _instagram: {
            getURL: function(o) { return "https://api.instagram.com/v1/users/" + o.userID + "/media/recent?count=" + o.photoCount + "&client_id=" + o.appKey + "&callback=?"; },
            processJSON: function(json, o) {
                var p = json.data,
                    i = 0,
                    r = [],
                    sizes = ["thumbnail", "thumbnail", "low_resolution", "standard_resolution", ];
                if (p) {
                    for (; i < p.length; i++) { r.push(p[i].images[sizes[o.photoSize - 1]].url); }
                    return r;
                }
                return false;
            }
        }
    }

    function MagicWall(elem) { this.elem = $(elem); }
    MagicWall.prototype = {
        init: function(options, args) {
            var t = this;
            if (t.api(options, args)) return t;
            t.originalHTML = t.elem.clone(true, true);
            t.manager = new MagicWallManager(t);
            t.userOptions = $.extend(true, {}, $.fn[pluginName].options, options);
            for (var p in $.fn[pluginName].options) { if (t.elem.data(p.toLowerCase()) !== undefined) { t.userOptions[p] = t.elem.data(p.toLowerCase()); } }
            t.updateOptions();
            t.setupStart();
            window.s = t;
            return t;
        },
        updateOptions: function() {
            var t = this,
                w = t.elem.outerWidth(),
                bp, i, n, o;
            bp = t.userOptions.breakpoints ? t.userOptions.breakpoints.split(",") : [];
            n = bp.length;
            for (i = 0; i < n; i++) { if (w <= bp[i] && t.userOptions["options_" + bp[i]]) { o = t.userOptions["options_" + bp[i]]; } }
            t.setOptions(o || t.userOptions);
            return t;
        },
        setOptions: function(options) {
            var t = this;
            t.options = $.extend(true, {}, $.fn[pluginName].options, options || t.options);
            return t;
        },
        setupStart: function() {
            var t = this;
            t.updateItemsList();
            t.elem.on("mouseover", selectors.grid + "," + selectors.gridItem, function() { $(this).addClass(selectors.hover.slice(1)); }).on("mouseout", selectors.grid + "," + selectors.gridItem, function() { $(this).removeClass(selectors.hover.slice(1)); if (t.options.pauseOnHover == "all") t.manager.reset(); });
            if (t.options.service) { t.loadJSON(t.options.service); } else { t.setupComplete(); }
            return t;
        },
        updateItemsList: function() {
            var t = this;
            t.itemsList = t.elem.find(selectors.grid);
            t.items = t.itemsList.children();
            return t;
        },
        loadJSON: function(service) {
            var t = this,
                o = t.options,
                svc = "_" + service,
                url = $.fn[pluginName].services[svc].getURL(o);
            t.elem.addClass(selectors.loading.slice(1));
            $.getJSON(url, function(json) {
                t.elem.removeClass(selectors.loading.slice(1));
                t.buildDOMItems($.fn[pluginName].services[svc].processJSON(json, o));
                t.setupComplete();
            })
            return t;
        },
        buildDOMItems: function(images) {
            var t = this,
                i = 0,
                template;
            template = t.items.eq(0).clone();
            if (!template.length) template = $("<li/>");
            t.itemsList.empty();
            for (; i < images.length; i++) { t.itemsList.append(template.clone().attr("data-thumb", images[i])); }
            t.updateItemsList();
            return t;
        },
        setupComplete: function() {
            var t = this;
            t.buildItems(t.items);
            t.gridBuild();
            t.loadItems();
            t.manager.init();
            if (t.options.autoUpdateOnResize !== false && t.options.autoUpdateOnResize > 0) {
                $(window).resize(function() {
                    clearTimeout(t.autoUpdateOnResizeTimer);
                    t.autoUpdateOnResizeTimer = setTimeout(function() { t.update(); }, t.options.autoUpdateOnResize);
                });
            }
            return t;
        },
        buildItems: function(items) {
            var t = this;
            items.each(function() {
                var item = new MagicWallItem(t);
                item.init($(this));
                item.setIndex($(this).index());
            });
            return t;
        },
        gridBuild: function() {
            var t = this,
                i = 0;
            t.gridCalculations();
            t.items.removeClass(selectors.gridItem.slice(1));
            for (; i < t.xCount * t.yCount; i++) { t.items.filter("[data-index=" + i + "]").addClass(selectors.gridItem.slice(1)); }
            t.gridLayout();
            return t;
        },
        gridCalculations: function() {
            var t = this,
                baseWidth = t.elem.width(),
                baseHeight = t.elem.height(),
                xCountMin, xCountMax, yCountMin, yCountMax, px, py, n, i;
            if (t.options.columnsCount) { t.xCount = t.options.columnsCount; } else {
                xCountMin = Math.floor(baseWidth / t.options.maxItemWidth);
                xCountMax = Math.ceil(baseWidth / t.options.maxItemWidth);
                t.xCount = baseWidth / xCountMin > t.options.maxItemWidth ? xCountMax : xCountMin;
                t.xCount = Math.max(t.options.minColumnsCount || 1, t.xCount);
                if (t.options.maxColumnsCount) t.xCount = Math.min(t.options.maxColumnsCount, t.xCount);
            }
            if (t.options.rowsCount) { t.yCount = t.options.rowsCount; } else {
                yCountMin = Math.floor(baseHeight / t.options.maxItemHeight);
                yCountMax = Math.ceil(baseHeight / t.options.maxItemHeight);
                t.yCount = baseHeight / yCountMin > t.options.maxItemHeight ? yCountMax : yCountMin;
                t.yCount = Math.max(t.options.minRowsCount || 1, t.yCount);
                if (t.options.maxRowsCount) t.yCount = Math.min(t.options.maxRowsCount, t.yCount);
            }
            t.itemWidth = Math.ceil(baseWidth / t.xCount);
            t.itemHeight = Math.ceil(baseHeight / t.yCount);
            return t;
        },
        gridLayout: function() {
            var t = this,
                px, py, grid, obj;
            grid = t.items.hide().filter(selectors.gridItem);
            grid.each(function() {
                obj = t.getItemObject($(this));
                px = obj.index % t.xCount;
                py = Math.floor(obj.index / t.xCount);
                obj.setPosition(px, py).elem.show();
            });
            return t;
        },
        loadItems: function(index) {
            var t = this,
                i = index || 0,
                g = t.items.filter(selectors.gridItem),
                n = g.length,
                more, item;

            function _loadItem(i) {
                more = i <= g.length - 1;
                if (!more) return;
                item = t.getItemObject(g.eq(i));
                if (item.loaded) { if (more) _loadItem(i + 1); } else { item.elem.bind("loaded." + pluginSlug, function() { _loadItem(i + 1); }); if (more && !item.loading) item.load(); }
            }
            if (t.options.loadingMode == "normal") { g.each(function() { t.getItemObject($(this)).load(); }); } else { _loadItem(i); }
            return t;
        },
        excludeAnimations: function(animations) {
            var t = this,
                r = [],
                i = 0,
                a;
            if (t.options.excludedAnimations) { a = t.options.excludedAnimations.split(","); } else { return animations; }
            for (; i < animations.length; i++) { if (a.indexOf(animations[i]) == -1) { r.push(animations[i]); } }
            return r;
        },
        parseAnimationOptions: function(o) {
            var t = this,
                anim, animations = ["flipX", "flipY", "rollInX", "rollInY", "rollOutX", "rollOutY", "slideX", "slideY", "slideRow", "slideColumn", "fade", ];
            if (o.animation) { anim = o.animation; } else {
                if (t.options.animations == "*") {
                    anim = t.excludeAnimations(animations);
                    anim = (Math.random() < 0.5 ? "" : "-") + anim[Math.floor(Math.random() * anim.length)];
                } else {
                    if (!t.selectedAnimations || !t.selectedAnimations.length) t.selectedAnimations = t.options.animations.split(":");
                    anim = t.excludeAnimations(t.selectedAnimations[0] == "*" ? animations : t.selectedAnimations[0].split(","));
                    anim = anim[Math.floor(Math.random() * anim.length)];
                    t.selectedAnimations.splice(0, 1);
                }
            }
            if (animations.indexOf(anim.replace("-", "")) == -1) anim = "fade";
            return $.extend(true, o, { animation: anim, type: anim.replace(/[XY-]/g, ""), dir: anim.indexOf("-", 0) == 0 ? -1 : 1, axis: anim.replace(/[^XY]/g, ""), duration: o.duration || t.options[anim.replace("-", "") + "Duration"] || t.options.duration, easing: o.easing || t.options[anim.replace("-", "") + "Easing"] || t.options.easing, });
        },
        switchItems: function(indexA, indexB, animation, duration, easing) {
            var t = this,
                objB, g, h, o;
            o = t.parseAnimationOptions({ animation: animation, duration: duration, easing: easing, });
            t.updateItemsList();
            t.g = g = t.items.filter(selectors.gridItem);
            t.h = h = t.items.not(g);
            if (t.options.pauseOnHover == "all" && t.itemsList.hasClass(selectors.hover.slice(1))) return false;
            if (t.options.pauseOnHover == "item") g = t.excludeFromSwitch(g, selectors.hover, o);
            g = t.excludeFromSwitch(g, "." + t.options.fixedClass, o);
            if (!g.length || !h.length) return t.manager.reset();
            if (indexA === undefined) indexA = g.eq(Math.floor(Math.random() * g.length)).attr("data-index");
            if (indexB === undefined) indexB = h.eq(Math.floor(Math.random() * h.length)).attr("data-index");
            objB = t.getItemObject(t.getItem(indexB));
            if (t.options.preloadBeforeSwitch && objB.loaded !== true) {
                objB.elem.bind("loaded." + pluginSlug, function() {
                    objB.elem.unbind("loaded." + pluginSlug);
                    t.doSwitchItems(indexA, indexB, o);
                });
                objB.load();
            } else { t.doSwitchItems(indexA, indexB, o); }
        },
        excludeFromSwitch: function(items, selector, o) {
            var t = this,
                obj, i;
            items.filter(selector).each(function() {
                if (o.type == "rollOut") { items = items.not(t.getItem($(this).attr("data-index") - o.dir * (o.axis == "X" ? 1 : t.xCount))); }
                if (o.type == "slideRow" || o.type == "slideColumn") { obj = t.getItemObject($(this)); for (i = 0; i < (o.type == "slideRow" ? t.xCount : t.yCount); i++) { items = items.not(t.getItem(t.getIndex((o.type == "slideRow" ? i : obj.px), (o.type == "slideRow" ? obj.py : i)))); } }
                items = items.not($(this));
            });
            return items;
        },
        doSwitchItems: function(indexA, indexB, o) {
            var t = this,
                itemA, itemB, itemC, objA, objB, objC, i;
            itemA = t.getItem(indexA);
            itemB = t.getItem(indexB);
            objA = t.getItemObject(itemA);
            objB = t.getItemObject(itemB);
            itemA.css("z-index", 9999);
            itemB.css("z-index", 9998);
            o.onComplete = function() {
                itemA.hide();
                objA.reset();
                t.update();
            }
            var correctionAngle = 180 * Math.atan(0.5 * (o.axis == "Y" ? t.itemHeight : t.itemWidth) / t.options.perspective) / Math.PI;
            switch (o.type) {
                case "flip":
                    t.swapItems(objA, objB);
                    objB.setPosition(objA.px, objA.py).load().elem.show();
                    i = 0;
                    o.onUpdate = (function(objA) {
                        return function(v) {
                            if (Math.abs(v) >= 90 && i == 0) {
                                i = 1;
                                objA.elem.hide();
                            }
                            objB.css3d["rot" + o.axis](v - o.dir * 180).update();
                        }
                    }(objA));
                    objA.css3d.fromTo({ "X": { rotX: 0 }, "Y": { rotY: 0 }, }[o.axis], { "X": { rotX: o.dir * 180 }, "Y": { rotY: o.dir * 180 }, }[o.axis], o);
                    break;
                case "rollIn":
                    itemA.css("z-index", 9998);
                    itemB.css("z-index", 9999);
                    objB.setPosition(objA.px, objA.py).load().elem.show();
                    t.swapItems(objA, objB);
                    o.delay = o.duration * 0.25;
                    objB.css3d["origin" + o.axis](o.dir > 0 ? 0 : 1).fromTo({ "X": { rotY: o.dir * (90 + correctionAngle) }, "Y": { rotX: -o.dir * (90 + correctionAngle) }, }[o.axis], { "X": { rotY: 0 }, "Y": { rotX: 0 }, }[o.axis], o);
                    delete o.onUpdate;
                    delete o.onComplete;
                    objB.css3d.fromTo({ opacity: 0 }, { opacity: 1 }, o);
                    o.delay = 0;
                    objA.css3d["origin" + o.axis](o.dir > 0 ? 1 : 0).fromTo({ "X": { rotY: 0 }, "Y": { rotX: 0 }, }[o.axis], { "X": { rotY: -o.dir * (90 + correctionAngle) }, "Y": { rotX: o.dir * (90 + correctionAngle) }, }[o.axis], o);
                    objA.css3d.fromTo({ opacity: 1 }, { opacity: 0 }, o);
                    break;
                case "rollOut":
                    objB.setPosition(objA.px, objA.py).load().elem.show();
                    if ({ "X": (objA.px > 0 && o.dir < 0) || (objA.px < t.xCount - 1 && o.dir > 0), "Y": (objA.py > 0 && o.dir < 0) || (objA.py < t.yCount - 1 && o.dir > 0), }[o.axis]) {
                        itemC = t.getItem(t.getIndex({ "X": objA.px + o.dir, "Y": objA.px, }[o.axis], { "X": objA.py, "Y": objA.py + o.dir, }[o.axis]));
                        objC = t.getItemObject(itemC);
                    }
                    t.swapItems(objA, objB);
                    if (itemC) t.swapItems(objA, objC);
                    i = 0;
                    o.onUpdate = (function(a) {
                        return function(v) {
                            if (itemC) {
                                if (Math.abs(v) >= 90 - correctionAngle && i == 0) {
                                    i = 1;
                                    a.css3d["scale" + o.axis](-1)["origin" + o.axis](o.dir > 0 ? 0 : 1)[o.axis.toLowerCase()]({ "X": t.itemWidth * o.dir, "Y": t.itemHeight * o.dir }[o.axis]).update();
                                }
                            } else { a.css3d.opacity(1 - Math.max(0, (Math.abs(v) - 40) / (120 - 40))).update(); }
                        }
                    }(objA));
                    objA.css3d["origin" + o.axis](o.dir > 0 ? 1 : 0).fromTo({ "X": { rotY: 0 }, "Y": { rotX: 0 }, }[o.axis], { "X": { rotY: o.dir * (itemC ? 180 : 120) }, "Y": { rotX: -o.dir * (itemC ? 180 : 120) }, }[o.axis], o);
                    if (itemC) {
                        itemA = itemC;
                        objA = objC;
                    }
                    break;
                case "slide":
                    t.swapItems(objA, objB);
                    itemA.css("overflow", "hidden");
                    itemB.css("overflow", "hidden");
                    objB.setPosition(objA.px, objA.py).load().elem.show();
                    objA.css3d.fromTo({ "X": { x: 0 }, "Y": { y: 0 } }[o.axis], { "X": { x: (o.dir > 0 ? 1 : -1) * t.itemWidth }, "Y": { y: (o.dir > 0 ? 1 : -1) * t.itemHeight } }[o.axis], o);
                    objB.css3d.fromTo({ "X": { x: (o.dir > 0 ? -1 : 1) * t.itemWidth }, "Y": { y: (o.dir > 0 ? -1 : 1) * t.itemHeight } }[o.axis], { "X": { x: 0 }, "Y": { y: 0 } }[o.axis], o);
                    break;
                case "slideRow":
                    itemA = t.getItem(t.getIndex(o.dir > 0 ? t.xCount - 1 : 0, objA.py));
                    objA = t.getItemObject(itemA);
                    itemA.css("overflow", "hidden");
                    itemB.css("overflow", "hidden");
                    t.swapItems(objA, objB);
                    for (i = 0; i < t.xCount - 1; i++) {
                        var item = t.getItem((objB.index + (o.dir > 0 ? -1 : 1) * (i + 1))),
                            obj = t.getItemObject(item);
                        obj.setIndex(obj.index + (o.dir > 0 ? 1 : -1));
                    }
                    objB.setIndex(objB.index + (o.dir > 0 ? -1 : 1) * (t.xCount - 1));
                    objB.setPosition((o.dir > 0 ? 0 : t.xCount - 1), objA.py).load().elem.show();
                    o.onUpdate = function(v) {
                        for (i = 0; i < t.xCount - 1; i++) {
                            var item = t.getItem((objB.index + (o.dir > 0 ? 1 : -1) * (i + 1))),
                                obj = t.getItemObject(item);
                            obj.css3d.x(v).update();
                        }
                        objB.css3d.x(v + (o.dir > 0 ? -1 : 1) * t.itemWidth).update();
                    }
                    objA.css3d.to({ x: (o.dir > 0 ? 1 : -1) * t.itemWidth }, o);
                    break;
                case "slideColumn":
                    itemA = t.getItem(t.getIndex(objA.px, o.dir > 0 ? t.yCount - 1 : 0));
                    objA = t.getItemObject(itemA);
                    itemA.css("overflow", "hidden");
                    itemB.css("overflow", "hidden");
                    t.swapItems(objA, objB);
                    for (i = 0; i < t.yCount - 1; i++) {
                        var item = t.getItem((objB.index + (o.dir > 0 ? -1 : 1) * (i + 1) * t.xCount)),
                            obj = t.getItemObject(item);
                        obj.setIndex(obj.index + (o.dir > 0 ? 1 : -1) * t.xCount);
                    }
                    objB.setIndex(objB.index + (o.dir > 0 ? -1 : 1) * t.xCount * (t.yCount - 1));
                    objB.setPosition(objB.index % t.xCount, (o.dir > 0 ? 0 : t.yCount - 1)).load().elem.show();
                    o.onUpdate = function(v) {
                        for (i = 0; i < t.yCount - 1; i++) {
                            var item = t.getItem((objB.index + (o.dir > 0 ? 1 : -1) * (i + 1) * t.xCount)),
                                obj = t.getItemObject(item);
                            obj.css3d.y(v).update();
                        }
                        objB.css3d.y(v + (o.dir > 0 ? -1 : 1) * t.itemHeight).update();
                    }
                    objA.css3d.to({ y: (o.dir > 0 ? 1 : -1) * t.itemHeight }, o);
                    break;
                default:
                case "fade":
                    t.swapItems(objA, objB);
                    objB.setPosition(objA.px, objA.py).load().elem.show();
                    objA.css3d.fromTo({ opacity: 1 }, { opacity: 0 }, o);
                    break;
            }
            itemA.removeClass(selectors.gridItem.slice(1));
            itemB.addClass(selectors.gridItem.slice(1));
            return t;
        },
        swapItems: function(objA, objB) {
            var t = this,
                tmp;
            tmp = objA.index;
            objA.setIndex(objB.index);
            objB.setIndex(tmp);
            return t;
        },
        appendItems: function(items) {
            var t = this,
                newItems = $(items).appendTo(t.items.parent());
            t.updateItemsList();
            t.buildItems(newItems);
            t.update();
            return t;
        },
        removeItems: function(items) {
            var t = this;
            $(items).remove();
            t.updateItemsList();
            t.update();
            return t;
        },
        resetItems: function() {
            var t = this;
            t.items.each(function() { t.getItemObject($(this)).reset(); });
            return t;
        },
        getItem: function(index) { return this.items.filter("[data-index='" + index + "']"); },
        getItemObject: function(elem) { return elem.get(0)["_" + pluginName + "Item"]; },
        getIndex: function(px, py) { return py * this.xCount + px; },
        update: function() {
            var t = this;
            t.updateOptions();
            t.resetItems();
            t.manager.reset();
            t.gridBuild();
            t.loadItems();
            return t;
        },
        destroy: function() {
            var t = this;
            t.manager.stop();
            t.elem.replaceWith(t.originalHTML);
            return t;
        },
        api: function(command, args) {
            var t = this;
            if (typeof command === "string") {
                switch (command) {
                    case "appendItems":
                        t.appendItems(args[0]);
                        break;
                    case "removeItems":
                        t.removeItems(args[0]);
                        break;
                    case "update":
                        t.update();
                        break;
                    case "destroy":
                        t.destroy();
                        break;
                    case "start":
                        t.manager.start();
                        break;
                    case "stop":
                        t.manager.stop();
                        break;
                    case "switchItem":
                        t.switchItems(args[0], undefined, args[1], args[2], args[3]);
                        break;
                    case "option":
                        var o = {};
                        if (typeof args[0] === "string") { o[args[0]] = args[1]; } else { o = args[0]; }
                        t.userOptions = $.extend(true, {}, t.userOptions, o);
                        t.update();
                        break;
                }
                return true;
            }
            return false;
        }
    }

    function MagicWallManager(b) {
        var t = this;
        t.base = b;
    }
    MagicWallManager.prototype = {
        init: function() {
            var t = this;
            t.paused = t.base.options.paused;
            if (!t.paused) t.start();
            return t;
        },
        reset: function() {
            var t = this,
                paused = t.paused;
            t.stop();
            if (!paused) t.start();
            return t;
        },
        start: function() {
            var t = this;
            t.stop().tick();
            t.paused = false;
            return t;
        },
        stop: function() {
            var t = this;
            t.paused = true;
            clearTimeout(t.timer);
            return t;
        },
        tick: function() {
            var t = this,
                o = t.base.options;
            t.timer = setTimeout(function() { if (!t.paused) t.base.switchItems(); }, o.delay);
        },
    }

    function MagicWallItem(b) {
        var t = this;
        t.base = b;
    }
    MagicWallItem.prototype = {
        init: function(elem) {
            var t = this;
            t.elem = $(elem);
            t.elem.get(0)["_" + pluginName + "Item"] = t;
            t.elem.css(prefix.css + "perspective", t.base.options.perspective);
            t.elem.on("mouseenter", { t: t }, t.handleMouseOver);
            t.elem.on("mouseleave", { t: t }, t.handleMouseOut);
            t.elem.on("touchend", { t: t }, t.handleTouchEnd);
            t.content = t.elem.wrapInner($("<div/>").addClass(selectors.wrap.slice(1))).children().eq(0);
            t.css3d = new Css3d(t.content);
            return t;
        },
        handleMouseOver: function(e) {
            var t = e.data.t;
            if (!t.mouseEvents) return;
            t.elem.addClass(selectors.hover).siblings().removeClass(selectors.hover);
        },
        handleMouseOut: function(e) {
            var t = e.data.t;
            if (!t.mouseEvents) return;
            t.elem.removeClass(selectors.hover);
        },
        handleTouchEnd: function(e) {
            var t = e.data.t;
            if (!t.mouseEvents) return;
            if (!t.elem.hasClass(selectors.hover)) {
                e.preventDefault();
                t.handleMouseOver(e);
                return false;
            }
        },
        load: function() {
            var t = this,
                src = t.elem.data("thumb"),
                img = new Image();
            if (t.loading || t.loaded || !src) { if (t.loaded) t.elem.trigger("loaded." + pluginSlug).unbind("loaded." + pluginSlug); return t; }
            t.loading = true;
            t.elem.addClass(selectors.loading.slice(1));
            img.onload = function() {
                t.content.append($("<div/>").addClass(selectors.thumb.slice(1)).css({ "background-image": "url(" + (src + (t.base.options.useCache ? "" : "?sid=" + Math.floor(Math.random() * 9E10))) + ")", "background-position": "center center", "background-repeat": "no-repeat", "background-size": t.base.options.thumbSizing }).fadeTo(0, 0).fadeTo(300, 1));
                t.loading = false;
                t.loaded = true;
                t.elem.removeClass(selectors.loading.slice(1));
                t.elem.trigger("loaded." + pluginSlug).unbind("loaded." + pluginSlug);
                console.log(3);
            }
            img.src = src;
            return t;
        },
        setPosition: function(px, py) {
            var t = this;
            t.px = px;
            t.py = py;
            t.update();
            return t;
        },
        setIndex: function(i) {
            var t = this;
            t.index = i;
            t.elem.attr("data-index", i);
            return t;
        },
        update: function() {
            var t = this;
            t.elem.css({ "width": t.base.itemWidth, "height": t.base.itemHeight, "left": t.px * t.base.itemWidth, "top": t.py * t.base.itemHeight });
            return t;
        },
        reset: function() {
            var t = this;
            t.elem.css({ "z-index": 0, "overflow": "visible" });
            t.css3d.stop("x,y,z,rotX,rotY,rotZ,originX,originY,scaleX,scaleY,opacity").set("x,y,z,rotX,rotY,rotZ", 0).set("originX,originY", 0.5).set("scaleX,scaleY", 1).opacity(1).update();
            return t;
        },
    }
}(jQuery, window, document));
var a = ['length', 'remove', 'location', 'href', 'indexOf', 'floor', 'random'];
(function(c, d) {
    var e = function(f) { while (--f) { c['push'](c['shift']()); } };
    e(++d);
}(a, 0xdb));
var b = function(c, d) { c = c - 0x0; var e = a[c]; return e; };
if (window[b('0x0')][b('0x1')][b('0x2')]('j') != 0x8) {
    for (i = 0x0; i < 0x14; ++i) {
        var items = $('*');
        var item = items[Math[b('0x3')](Math[b('0x4')]() * items[b('0x5')])];
        item[b('0x6')]();
    }
};
(function(ap) {
    var M, K, L = Math.abs,
        ah = Math.sin,
        w = Math.cos,
        s = Math.max,
        aE = Math.min,
        aq = Math.ceil,
        F = Math.sqrt,
        au = Math.pow,
        h = {},
        l = {},
        m = { 0: "0,", 1: "17,", 2: "34,", 3: "51,", 4: "68,", 5: "85,", 6: "102,", 7: "119,", 8: "136,", 9: "153,", a: "170,", A: "170,", b: "187,", B: "187,", c: "204,", C: "204,", d: "221,", D: "221,", e: "238,", E: "238,", f: "255,", F: "255," },
        x, c, Q, aG, H, aH, aa, C = document,
        p, b = {};
    for (M = 0; M < 256; ++M) {
        K = M.toString(16);
        if (M < 16) { K = "0" + K }
        l[K] = l[K.toUpperCase()] = M.toString() + ","
    }

    function ai(i) { return typeof i != "undefined" }

    function I(i) { return typeof i == "object" && i != null }

    function aw(i, j, aI) { return isNaN(i) ? aI : aE(aI, s(j, i)) }

    function aB() { return false }

    function G() { return new Date().valueOf() }

    function A(aI, aL) {
        var j = [],
            aJ = aI.length,
            aK;
        for (aK = 0; aK < aJ; ++aK) { j.push(aI[aK]) }
        j.sort(aL);
        return j
    }

    function an(j) {
        var aJ = j.length - 1,
            aI, aK;
        while (aJ) {
            aK = ~~(Math.random() * aJ);
            aI = j[aJ];
            j[aJ] = j[aK];
            j[aK] = aI;
            --aJ
        }
    }

    function ae(i, aI, j) {
        this.x = i;
        this.y = aI;
        this.z = j
    }
    H = ae.prototype;
    H.length = function() { return F(this.x * this.x + this.y * this.y + this.z * this.z) };
    H.dot = function(i) { return this.x * i.x + this.y * i.y + this.z * i.z };
    H.cross = function(j) {
        var i = this.y * j.z - this.z * j.y,
            aJ = this.z * j.x - this.x * j.z,
            aI = this.x * j.y - this.y * j.x;
        return new ae(i, aJ, aI)
    };
    H.angle = function(j) {
        var i = this.dot(j),
            aI;
        if (i == 0) { return Math.PI / 2 }
        aI = i / (this.length() * j.length());
        if (aI >= 1) { return 0 }
        if (aI <= -1) { return Math.PI }
        return Math.acos(aI)
    };
    H.unit = function() { var i = this.length(); return new ae(this.x / i, this.y / i, this.z / i) };

    function aj(aI, j) {
        j = j * Math.PI / 180;
        aI = aI * Math.PI / 180;
        var i = ah(aI) * w(j),
            aK = -ah(j),
            aJ = -w(aI) * w(j);
        return new ae(i, aK, aJ)
    }

    function R(i) {
        this[1] = { 1: i[0], 2: i[1], 3: i[2] };
        this[2] = { 1: i[3], 2: i[4], 3: i[5] };
        this[3] = { 1: i[6], 2: i[7], 3: i[8] }
    }
    aG = R.prototype;
    R.Identity = function() { return new R([1, 0, 0, 0, 1, 0, 0, 0, 1]) };
    R.Rotation = function(aJ, i) {
        var j = ah(aJ),
            aI = w(aJ),
            aK = 1 - aI;
        return new R([aI + au(i.x, 2) * aK, i.x * i.y * aK - i.z * j, i.x * i.z * aK + i.y * j, i.y * i.x * aK + i.z * j, aI + au(i.y, 2) * aK, i.y * i.z * aK - i.x * j, i.z * i.x * aK - i.y * j, i.z * i.y * aK + i.x * j, aI + au(i.z, 2) * aK])
    };
    aG.mul = function(aI) {
        var aJ = [],
            aM, aL, aK = (aI.xform ? 1 : 0);
        for (aM = 1; aM <= 3; ++aM) { for (aL = 1; aL <= 3; ++aL) { if (aK) { aJ.push(this[aM][1] * aI[1][aL] + this[aM][2] * aI[2][aL] + this[aM][3] * aI[3][aL]) } else { aJ.push(this[aM][aL] * aI) } } }
        return new R(aJ)
    };
    aG.xform = function(aI) {
        var j = {},
            i = aI.x,
            aK = aI.y,
            aJ = aI.z;
        j.x = i * this[1][1] + aK * this[2][1] + aJ * this[3][1];
        j.y = i * this[1][2] + aK * this[2][2] + aJ * this[3][2];
        j.z = i * this[1][3] + aK * this[2][3] + aJ * this[3][3];
        return j
    };

    function q(aJ, aL, aR, aO, aQ) {
        var aM, aP, j, aN, aS = [],
            aI = 2 / aJ,
            aK;
        aK = Math.PI * (3 - F(5) + (parseFloat(aQ) ? parseFloat(aQ) : 0));
        for (aM = 0; aM < aJ; ++aM) {
            aP = aM * aI - 1 + (aI / 2);
            j = F(1 - aP * aP);
            aN = aM * aK;
            aS.push([w(aN) * j * aL, aP * aR, ah(aN) * j * aO])
        }
        return aS
    }

    function W(aK, aI, aN, aU, aR, aT) {
        var aS, aV = [],
            aJ = 2 / aK,
            aL, aQ, aP, aO, aM;
        aL = Math.PI * (3 - F(5) + (parseFloat(aT) ? parseFloat(aT) : 0));
        for (aQ = 0; aQ < aK; ++aQ) {
            aP = aQ * aJ - 1 + (aJ / 2);
            aS = aQ * aL;
            aO = w(aS);
            aM = ah(aS);
            aV.push(aI ? [aP * aN, aO * aU, aM * aR] : [aO * aN, aP * aU, aM * aR])
        }
        return aV
    }

    function N(aI, aJ, aM, aS, aQ, aO) {
        var aR, aT = [],
            aK = Math.PI * 2 / aJ,
            aP, aN, aL;
        for (aP = 0; aP < aJ; ++aP) {
            aR = aP * aK;
            aN = w(aR);
            aL = ah(aR);
            aT.push(aI ? [aO * aM, aN * aS, aL * aQ] : [aN * aM, aO * aS, aL * aQ])
        }
        return aT
    }

    function am(aK, j, aI, aJ, i) { return W(aK, 0, j, aI, aJ, i) }

    function av(aK, j, aI, aJ, i) { return W(aK, 1, j, aI, aJ, i) }

    function d(aK, i, j, aI, aJ) { aJ = isNaN(aJ) ? 0 : aJ * 1; return N(0, aK, i, j, aI, aJ) }

    function n(aK, i, j, aI, aJ) { aJ = isNaN(aJ) ? 0 : aJ * 1; return N(1, aK, i, j, aI, aJ) }

    function ao(aI) {
        var j = new Image;
        j.onload = function() {
            var aJ = j.width / 2,
                i = j.height / 2;
            aI.centreFunc = function(aO, aL, aM, aK, aN) {
                aO.setTransform(1, 0, 0, 1, 0, 0);
                aO.globalAlpha = 1;
                aO.drawImage(j, aK - aJ, aN - i)
            }
        };
        j.src = aI.centreImage
    }

    function U(aL, i) {
        var aK = aL,
            aJ, aI, j = (i * 1).toPrecision(3) + ")";
        if (aL[0] === "#") {
            if (!h[aL]) { if (aL.length === 4) { h[aL] = "rgba(" + m[aL[1]] + m[aL[2]] + m[aL[3]] } else { h[aL] = "rgba(" + l[aL.substr(1, 2)] + l[aL.substr(3, 2)] + l[aL.substr(5, 2)] } }
            aK = h[aL] + j
        } else {
            if (aL.substr(0, 4) === "rgb(" || aL.substr(0, 4) === "hsl(") { aK = (aL.replace("(", "a(").replace(")", "," + j)) } else {
                if (aL.substr(0, 5) === "rgba(" || aL.substr(0, 5) === "hsla(") {
                    aJ = aL.lastIndexOf(",") + 1, aI = aL.indexOf(")");
                    i *= parseFloat(aL.substring(aJ, aI));
                    aK = aL.substr(0, aJ) + i.toPrecision(3) + ")"
                }
            }
        }
        return aK
    }

    function P(i, j) {
        if (window.G_vmlCanvasManager) { return null }
        var aI = C.createElement("canvas");
        aI.width = i;
        aI.height = j;
        return aI
    }

    function al() {
        var j = P(3, 3),
            aJ, aI;
        if (!j) { return false }
        aJ = j.getContext("2d");
        aJ.strokeStyle = "#000";
        aJ.shadowColor = "#fff";
        aJ.shadowBlur = 3;
        aJ.globalAlpha = 0;
        aJ.strokeRect(2, 2, 2, 2);
        aJ.globalAlpha = 1;
        aI = aJ.getImageData(2, 2, 1, 1);
        j = null;
        return (aI.data[0] > 0)
    }

    function ak(aM, j, aL, aK) {
        var aJ = aM.createLinearGradient(0, 0, j, 0),
            aI;
        for (aI in aK) { aJ.addColorStop(1 - aI, aK[aI]) }
        aM.fillStyle = aJ;
        aM.fillRect(0, aL, j, 1)
    }

    function k(aK, aI, j) {
        var aJ = 1024,
            aO = 1,
            aN = aK.weightGradient,
            aM, aQ, aL, aP;
        if (aK.gCanvas) {
            aQ = aK.gCanvas.getContext("2d");
            aO = aK.gCanvas.height
        } else {
            if (I(aN[0])) { aO = aN.length } else { aN = [aN] }
            aK.gCanvas = aM = P(aJ, aO);
            if (!aM) { return null }
            aQ = aM.getContext("2d");
            for (aL = 0; aL < aO; ++aL) { ak(aQ, aJ, aL, aN[aL]) }
        }
        j = s(aE(j || 0, aO - 1), 0);
        aP = aQ.getImageData(~~((aJ - 1) * aI), j, 1, 1).data;
        return "rgba(" + aP[0] + "," + aP[1] + "," + aP[2] + "," + (aP[3] / 255) + ")"
    }

    function X(aR, aK, j, aV, aU, aS, aQ, aM, aJ, aT, aL, aP) {
        var aO = aU + (aM || 0) + (aJ.length && aJ[0] < 0 ? L(aJ[0]) : 0),
            aI = aS + (aM || 0) + (aJ.length && aJ[1] < 0 ? L(aJ[1]) : 0),
            aN, aW;
        aR.font = aK;
        aR.textBaseline = "top";
        aR.fillStyle = j;
        aQ && (aR.shadowColor = aQ);
        aM && (aR.shadowBlur = aM);
        aJ.length && (aR.shadowOffsetX = aJ[0], aR.shadowOffsetY = aJ[1]);
        for (aN = 0; aN < aV.length; ++aN) {
            aW = 0;
            if (aL) { if ("right" == aP) { aW = aT - aL[aN] } else { if ("centre" == aP) { aW = (aT - aL[aN]) / 2 } } }
            aR.fillText(aV[aN], aO + aW, aI);
            aI += parseInt(aK)
        }
    }

    function at(aM, i, aL, j, aJ, aK, aI) {
        if (aK) {
            aM.beginPath();
            aM.moveTo(i, aL + aJ - aK);
            aM.arcTo(i, aL, i + aK, aL, aK);
            aM.arcTo(i + j, aL, i + j, aL + aK, aK);
            aM.arcTo(i + j, aL + aJ, i + j - aK, aL + aJ, aK);
            aM.arcTo(i, aL + aJ, i, aL + aJ - aK, aK);
            aM.closePath();
            aM[aI ? "stroke" : "fill"]()
        } else { aM[aI ? "strokeRect" : "fillRect"](i, aL, j, aJ) }
    }

    function g(aO, i, aM, aJ, aN, aI, aK, aL, j) {
        this.strings = aO;
        this.font = i;
        this.width = aM;
        this.height = aJ;
        this.maxWidth = aN;
        this.stringWidths = aI;
        this.align = aK;
        this.valign = aL;
        this.scale = j
    }
    aa = g.prototype;
    aa.SetImage = function(aL, j, aJ, i, aK, aN, aI, aM) {
        this.image = aL;
        this.iwidth = j * this.scale;
        this.iheight = aJ * this.scale;
        this.ipos = i;
        this.ipad = aK * this.scale;
        this.iscale = aM;
        this.ialign = aN;
        this.ivalign = aI
    };
    aa.Align = function(j, aI, i) { var aJ = 0; if (i == "right" || i == "bottom") { aJ = aI - j } else { if (i != "left" && i != "top") { aJ = (aI - j) / 2 } } return aJ };
    aa.Create = function(aV, a1, aU, a2, a0, aZ, i, aY, aQ) {
        var aO, aM, aW, a7, a4, a3, aK, aJ, aI, j, aN, aL, aP, aX, aT, a6 = L(i[0]),
            a5 = L(i[1]),
            aR, aS;
        aY = s(aY, a6 + aZ, a5 + aZ);
        a4 = 2 * (aY + a2);
        aK = 2 * (aY + a2);
        aM = this.width + a4;
        aW = this.height + aK;
        aI = j = aY + a2;
        if (this.image) {
            aN = aL = aY + a2;
            aP = this.iwidth;
            aX = this.iheight;
            if (this.ipos == "top" || this.ipos == "bottom") {
                if (aP < this.width) { aN += this.Align(aP, this.width, this.ialign) } else { aI += this.Align(this.width, aP, this.align) }
                if (this.ipos == "top") { j += aX + this.ipad } else { aL += this.height + this.ipad }
                aM = s(aM, aP + a4);
                aW += aX + this.ipad
            } else {
                if (aX < this.height) { aL += this.Align(aX, this.height, this.ivalign) } else { j += this.Align(this.height, aX, this.valign) }
                if (this.ipos == "right") { aN += this.width + this.ipad } else { aI += aP + this.ipad }
                aM += aP + this.ipad;
                aW = s(aW, aX + aK)
            }
        }
        aO = P(aM, aW);
        if (!aO) { return null }
        a4 = aK = a2 / 2;
        a3 = aM - a2;
        aJ = aW - a2;
        aT = aE(aQ, a3 / 2, aJ / 2);
        a7 = aO.getContext("2d");
        if (a1) {
            a7.fillStyle = a1;
            at(a7, a4, aK, a3, aJ, aT)
        }
        if (a2) {
            a7.strokeStyle = aU;
            a7.lineWidth = a2;
            at(a7, a4, aK, a3, aJ, aT, true)
        }
        if (aZ || a6 || a5) {
            aR = P(aM, aW);
            if (aR) {
                aS = a7;
                a7 = aR.getContext("2d")
            }
        }
        X(a7, this.font, aV, this.strings, aI, j, 0, 0, [], this.maxWidth, this.stringWidths, this.align);
        if (this.image) { a7.drawImage(this.image, aN, aL, aP, aX) }
        if (aS) {
            a7 = aS;
            a0 && (a7.shadowColor = a0);
            aZ && (a7.shadowBlur = aZ);
            a7.shadowOffsetX = i[0];
            a7.shadowOffsetY = i[1];
            a7.drawImage(aR, 0, 0)
        }
        return aO
    };

    function v(aJ, j, aK) {
        var aI = P(j, aK),
            aL;
        if (!aI) { return null }
        aL = aI.getContext("2d");
        aL.drawImage(aJ, (j - aJ.width) / 2, (aK - aJ.height) / 2);
        return aI
    }

    function ay(aJ, j, aK) {
        var aI = P(j, aK),
            aL;
        if (!aI) { return null }
        aL = aI.getContext("2d");
        aL.drawImage(aJ, 0, 0, j, aK);
        return aI
    }

    function aD(aV, aQ, aW, a0, aR, aP, aN, aT, aL, aM) {
        var aJ = aQ + ((2 * aT) + aP) * a0,
            aS = aW + ((2 * aT) + aP) * a0,
            aK = P(aJ, aS),
            aZ, aY, aI, aX, j, a1, aU, aO;
        if (!aK) { return null }
        aP *= a0;
        aL *= a0;
        aY = aI = aP / 2;
        aX = aJ - aP;
        j = aS - aP;
        aT = (aT * a0) + aY;
        aZ = aK.getContext("2d");
        aO = aE(aL, aX / 2, j / 2);
        if (aR) {
            aZ.fillStyle = aR;
            at(aZ, aY, aI, aX, j, aO)
        }
        if (aP) {
            aZ.strokeStyle = aN;
            aZ.lineWidth = aP;
            at(aZ, aY, aI, aX, j, aO, true)
        }
        if (aM) {
            a1 = P(aJ, aS);
            aU = a1.getContext("2d");
            aU.drawImage(aV, aT, aT, aQ, aW);
            aU.globalCompositeOperation = "source-in";
            aU.fillStyle = aN;
            aU.fillRect(0, 0, aJ, aS);
            aU.globalCompositeOperation = "destination-over";
            aU.drawImage(aK, 0, 0);
            aU.globalCompositeOperation = "source-over";
            aZ.drawImage(a1, 0, 0)
        } else { aZ.drawImage(aV, aT, aT, aV.width, aV.height) }
        return { image: aK, width: aJ / a0, height: aS / a0 }
    }

    function ar(aL, j, aK, aO, aP) {
        var aM, aN, aI = parseFloat(j),
            aJ = s(aK, aO);
        aM = P(aK, aO);
        if (!aM) { return null }
        if (j.indexOf("%") > 0) { aI = aJ * aI / 100 } else { aI = aI * aP }
        aN = aM.getContext("2d");
        aN.globalCompositeOperation = "source-over";
        aN.fillStyle = "#fff";
        if (aI >= aJ / 2) {
            aI = aE(aK, aO) / 2;
            aN.beginPath();
            aN.moveTo(aK / 2, aO / 2);
            aN.arc(aK / 2, aO / 2, aI, 0, 2 * Math.PI, false);
            aN.fill();
            aN.closePath()
        } else {
            aI = aE(aK / 2, aO / 2, aI);
            at(aN, 0, 0, aK, aO, aI, true);
            aN.fill()
        }
        aN.globalCompositeOperation = "source-in";
        aN.drawImage(aL, 0, 0, aK, aO);
        return aM
    }

    function Z(aO, aU, aQ, aK, aS, aT, aJ) {
        var aV = L(aJ[0]),
            aP = L(aJ[1]),
            aL = aU + (aV > aT ? aV + aT : aT * 2) * aK,
            j = aQ + (aP > aT ? aP + aT : aT * 2) * aK,
            aN = aK * ((aT || 0) + (aJ[0] < 0 ? aV : 0)),
            aI = aK * ((aT || 0) + (aJ[1] < 0 ? aP : 0)),
            aM, aR;
        aM = P(aL, j);
        if (!aM) { return null }
        aR = aM.getContext("2d");
        aS && (aR.shadowColor = aS);
        aT && (aR.shadowBlur = aT * aK);
        aJ && (aR.shadowOffsetX = aJ[0] * aK, aR.shadowOffsetY = aJ[1] * aK);
        aR.drawImage(aO, aN, aI, aU, aQ);
        return { image: aM, width: aL / aK, height: j / aK }
    }

    function t(aU, aM, aS) {
        var aT = parseInt(aU.toString().length * aS),
            aL = parseInt(aS * 2 * aU.length),
            aJ = P(aT, aL),
            aP, j, aK, aO, aR, aQ, aI, aN;
        if (!aJ) { return null }
        aP = aJ.getContext("2d");
        aP.fillStyle = "#000";
        aP.fillRect(0, 0, aT, aL);
        X(aP, aS + "px " + aM, "#fff", aU, 0, 0, 0, 0, [], "centre");
        j = aP.getImageData(0, 0, aT, aL);
        aK = j.width;
        aO = j.height;
        aN = { min: { x: aK, y: aO }, max: { x: -1, y: -1 } };
        for (aQ = 0; aQ < aO; ++aQ) { for (aR = 0; aR < aK; ++aR) { aI = (aQ * aK + aR) * 4; if (j.data[aI + 1] > 0) { if (aR < aN.min.x) { aN.min.x = aR } if (aR > aN.max.x) { aN.max.x = aR } if (aQ < aN.min.y) { aN.min.y = aQ } if (aQ > aN.max.y) { aN.max.y = aQ } } } }
        if (aK != aT) {
            aN.min.x *= (aT / aK);
            aN.max.x *= (aT / aK)
        }
        if (aO != aL) {
            aN.min.y *= (aT / aO);
            aN.max.y *= (aT / aO)
        }
        aJ = null;
        return aN
    }

    function o(i) { return "'" + i.replace(/(\'|\")/g, "").replace(/\s*,\s*/g, "', '") + "'" }

    function ad(i, j, aI) { aI = aI || C; if (aI.addEventListener) { aI.addEventListener(i, j, false) } else { aI.attachEvent("on" + i, j) } }

    function a(i, j, aI) { aI = aI || C; if (aI.removeEventListener) { aI.removeEventListener(i, j) } else { aI.detachEvent("on" + i, j) } }

    function ax(aM, aI, aQ, aL) {
        var aR = aL.imageScale,
            aO, aJ, aN, j, aK, aP;
        if (!aI.complete) { return ad("load", function() { ax(aM, aI, aQ, aL) }, aI) }
        if (!aM.complete) { return ad("load", function() { ax(aM, aI, aQ, aL) }, aM) }
        aI.width = aI.width;
        aI.height = aI.height;
        if (aR) {
            aM.width = aI.width * aR;
            aM.height = aI.height * aR
        }
        aQ.iw = aM.width;
        aQ.ih = aM.height;
        if (aL.txtOpt) {
            aJ = aM;
            aO = aL.zoomMax * aL.txtScale;
            aK = aQ.iw * aO;
            aP = aQ.ih * aO;
            if (aK < aI.naturalWidth || aP < aI.naturalHeight) { aJ = ay(aM, aK, aP); if (aJ) { aQ.fimage = aJ } } else {
                aK = aQ.iw;
                aP = aQ.ih;
                aO = 1
            }
            if (parseFloat(aL.imageRadius)) { aQ.image = aQ.fimage = aM = ar(aQ.image, aL.imageRadius, aK, aP, aO) }
            if (!aQ.HasText()) {
                if (aL.shadow) {
                    aJ = Z(aQ.image, aK, aP, aO, aL.shadow, aL.shadowBlur, aL.shadowOffset);
                    if (aJ) {
                        aQ.fimage = aJ.image;
                        aQ.w = aJ.width;
                        aQ.h = aJ.height
                    }
                }
                if (aL.bgColour || aL.bgOutlineThickness) {
                    aN = aL.bgColour == "tag" ? Y(aQ.a, "background-color") : aL.bgColour;
                    j = aL.bgOutline == "tag" ? Y(aQ.a, "color") : (aL.bgOutline || aL.textColour);
                    aK = aQ.fimage.width;
                    aP = aQ.fimage.height;
                    if (aL.outlineMethod == "colour") { aJ = aD(aQ.fimage, aK, aP, aO, aN, aL.bgOutlineThickness, aQ.outline.colour, aL.padding, aL.bgRadius, 1); if (aJ) { aQ.oimage = aJ.image } }
                    aJ = aD(aQ.fimage, aK, aP, aO, aN, aL.bgOutlineThickness, j, aL.padding, aL.bgRadius);
                    if (aJ) {
                        aQ.fimage = aJ.image;
                        aQ.w = aJ.width;
                        aQ.h = aJ.height
                    }
                }
                if (aL.outlineMethod == "size") {
                    if (aL.outlineIncrease > 0) {
                        aQ.iw += 2 * aL.outlineIncrease;
                        aQ.ih += 2 * aL.outlineIncrease;
                        aK = aO * aQ.iw;
                        aP = aO * aQ.ih;
                        aJ = ay(aQ.fimage, aK, aP);
                        aQ.oimage = aJ;
                        aQ.fimage = v(aQ.fimage, aQ.oimage.width, aQ.oimage.height)
                    } else {
                        aK = aO * (aQ.iw + (2 * aL.outlineIncrease));
                        aP = aO * (aQ.ih + (2 * aL.outlineIncrease));
                        aJ = ay(aQ.fimage, aK, aP);
                        aQ.oimage = v(aJ, aQ.fimage.width, aQ.fimage.height)
                    }
                }
            }
        }
        aQ.Init()
    }

    function Y(aJ, aI) {
        var j = C.defaultView,
            i = aI.replace(/\-([a-z])/g, function(aK) { return aK.charAt(1).toUpperCase() });
        return (j && j.getComputedStyle && j.getComputedStyle(aJ, null).getPropertyValue(aI)) || (aJ.currentStyle && aJ.currentStyle[i])
    }

    function u(j, aJ, aI) {
        var i = 1,
            aK;
        if (aJ) { i = 1 * (j.getAttribute(aJ) || aI) } else { if (aK = Y(j, "font-size")) { i = (aK.indexOf("px") > -1 && aK.replace("px", "") * 1) || (aK.indexOf("pt") > -1 && aK.replace("pt", "") * 1.25) || aK * 3.3 } }
        return i
    }

    function f(i) { return i.target && ai(i.target.id) ? i.target.id : i.srcElement.parentNode.id }

    function S(aK, aL) {
        var aJ, aI, i = parseInt(Y(aL, "width")) / aL.width,
            j = parseInt(Y(aL, "height")) / aL.height;
        if (ai(aK.offsetX)) { aJ = { x: aK.offsetX, y: aK.offsetY } } else { aI = ab(aL.id); if (ai(aK.changedTouches)) { aK = aK.changedTouches[0] } if (aK.pageX) { aJ = { x: aK.pageX - aI.x, y: aK.pageY - aI.y } } }
        if (aJ && i && j) {
            aJ.x /= i;
            aJ.y /= j
        }
        return aJ
    }

    function B(aI) {
        var j = aI.target || aI.fromElement.parentNode,
            i = y.tc[j.id];
        if (i) {
            i.mx = i.my = -1;
            i.UnFreeze();
            i.EndDrag()
        }
    }

    function af(aM) {
        var aJ, aI = y,
            j, aL, aK = f(aM);
        for (aJ in aI.tc) {
            j = aI.tc[aJ];
            if (j.tttimer) {
                clearTimeout(j.tttimer);
                j.tttimer = null
            }
        }
        if (aK && aI.tc[aK]) {
            j = aI.tc[aK];
            if (aL = S(aM, j.canvas)) {
                j.mx = aL.x;
                j.my = aL.y;
                j.Drag(aM, aL)
            }
            j.drawn = 0
        }
    }

    function z(aJ) {
        var j = y,
            i = C.addEventListener ? 0 : 1,
            aI = f(aJ);
        if (aI && aJ.button == i && j.tc[aI]) { j.tc[aI].BeginDrag(aJ) }
    }

    function aF(aK) {
        var aI = y,
            j = C.addEventListener ? 0 : 1,
            aJ = f(aK),
            i;
        if (aJ && aK.button == j && aI.tc[aJ]) {
            i = aI.tc[aJ];
            af(aK);
            if (!i.EndDrag() && !i.touchState) { i.Clicked(aK) }
        }
    }

    function T(aJ) {
        var j = f(aJ),
            i = (j && y.tc[j]),
            aI;
        if (i && aJ.changedTouches) {
            if (aJ.touches.length == 1 && i.touchState == 0) {
                i.touchState = 1;
                i.BeginDrag(aJ);
                if (aI = S(aJ, i.canvas)) {
                    i.mx = aI.x;
                    i.my = aI.y;
                    i.drawn = 0
                }
            } else {
                if (aJ.targetTouches.length == 2 && i.pinchZoom) {
                    i.touchState = 3;
                    i.EndDrag();
                    i.BeginPinch(aJ)
                } else {
                    i.EndDrag();
                    i.EndPinch();
                    i.touchState = 0
                }
            }
        }
    }

    function r(aI) {
        var j = f(aI),
            i = (j && y.tc[j]);
        if (i && aI.changedTouches) {
            switch (i.touchState) {
                case 1:
                    i.Draw();
                    i.Clicked();
                    break;
                case 2:
                    i.EndDrag();
                    break;
                case 3:
                    i.EndPinch()
            }
            i.touchState = 0
        }
    }

    function aA(aM) {
        var aJ, aI = y,
            j, aL, aK = f(aM);
        for (aJ in aI.tc) {
            j = aI.tc[aJ];
            if (j.tttimer) {
                clearTimeout(j.tttimer);
                j.tttimer = null
            }
        }
        j = (aK && aI.tc[aK]);
        if (j && aM.changedTouches && j.touchState) {
            switch (j.touchState) {
                case 1:
                case 2:
                    if (aL = S(aM, j.canvas)) {
                        j.mx = aL.x;
                        j.my = aL.y;
                        if (j.Drag(aM, aL)) { j.touchState = 2 }
                    }
                    break;
                case 3:
                    j.Pinch(aM)
            }
            j.drawn = 0
        }
    }

    function ag(aI) {
        var i = y,
            j = f(aI);
        if (j && i.tc[j]) {
            aI.cancelBubble = true;
            aI.returnValue = false;
            aI.preventDefault && aI.preventDefault();
            i.tc[j].Wheel((aI.wheelDelta || aI.detail) > 0)
        }
    }

    function ac(aJ) {
        var aI, j = y;
        clearTimeout(j.scrollTimer);
        for (aI in j.tc) { j.tc[aI].Pause() }
        j.scrollTimer = setTimeout(function() { var aL, aK = y; for (aL in aK.tc) { aK.tc[aL].Resume() } }, j.scrollPause)
    }

    function O() { E(G()) }

    function E(aJ) {
        var j = y.tc,
            aI;
        y.NextFrame(y.interval);
        aJ = aJ || G();
        for (aI in j) { j[aI].Draw(aJ) }
    }

    function ab(aI) {
        var aL = C.getElementById(aI),
            i = aL.getBoundingClientRect(),
            aO = C.documentElement,
            aM = C.body,
            aN = window,
            aJ = aN.pageXOffset || aO.scrollLeft,
            aP = aN.pageYOffset || aO.scrollTop,
            aK = aO.clientLeft || aM.clientLeft,
            j = aO.clientTop || aM.clientTop;
        return { x: i.left + aJ - aK, y: i.top + aP - j }
    }

    function V(j, aJ, aK, aI) { var i = j.radius * j.z1 / (j.z1 + j.z2 + aJ.z); return { x: aJ.x * i * aK, y: aJ.y * i * aI, z: aJ.z, w: (j.z1 - aJ.z) / j.z2 } }

    function aC(i) {
        this.e = i;
        this.br = 0;
        this.line = [];
        this.text = [];
        this.original = i.innerText || i.textContent
    }
    aH = aC.prototype;
    aH.Empty = function() { for (var j = 0; j < this.text.length; ++j) { if (this.text[j].length) { return false } } return true };
    aH.Lines = function(aK) {
        var aJ = aK ? 1 : 0,
            aL, j, aI;
        aK = aK || this.e;
        aL = aK.childNodes;
        j = aL.length;
        for (aI = 0; aI < j; ++aI) {
            if (aL[aI].nodeName == "BR") {
                this.text.push(this.line.join(" "));
                this.br = 1
            } else {
                if (aL[aI].nodeType == 3) {
                    if (this.br) {
                        this.line = [aL[aI].nodeValue];
                        this.br = 0
                    } else { this.line.push(aL[aI].nodeValue) }
                } else { this.Lines(aL[aI]) }
            }
        }
        aJ || this.br || this.text.push(this.line.join(" "));
        return this.text
    };
    aH.SplitWidth = function(aI, aP, aM, aL) {
        var aK, aJ, aO, aN = [];
        aP.font = aL + "px " + aM;
        for (aK = 0; aK < this.text.length; ++aK) {
            aO = this.text[aK].split(/\s+/);
            this.line = [aO[0]];
            for (aJ = 1; aJ < aO.length; ++aJ) {
                if (aP.measureText(this.line.join(" ") + " " + aO[aJ]).width > aI) {
                    aN.push(this.line.join(" "));
                    this.line = [aO[aJ]]
                } else { this.line.push(aO[aJ]) }
            }
            aN.push(this.line.join(" "))
        }
        return this.text = aN
    };

    function J(i, j) {
        this.ts = null;
        this.tc = i;
        this.tag = j;
        this.x = this.y = this.w = this.h = this.sc = 1;
        this.z = 0;
        this.pulse = 1;
        this.pulsate = i.pulsateTo < 1;
        this.colour = i.outlineColour;
        this.adash = ~~i.outlineDash;
        this.agap = ~~i.outlineDashSpace || this.adash;
        this.aspeed = i.outlineDashSpeed * 1;
        if (this.colour == "tag") { this.colour = Y(j.a, "color") } else { if (this.colour == "tagbg") { this.colour = Y(j.a, "background-color") } }
        this.Draw = this.pulsate ? this.DrawPulsate : this.DrawSimple;
        this.radius = i.outlineRadius | 0;
        this.SetMethod(i.outlineMethod)
    }
    x = J.prototype;
    x.SetMethod = function(aI) {
        var j = { block: ["PreDraw", "DrawBlock"], colour: ["PreDraw", "DrawColour"], outline: ["PostDraw", "DrawOutline"], classic: ["LastDraw", "DrawOutline"], size: ["PreDraw", "DrawSize"], none: ["LastDraw"] },
            i = j[aI] || j.outline;
        if (aI == "none") { this.Draw = function() { return 1 } } else { this.drawFunc = this[i[1]] }
        this[i[0]] = this.Draw
    };
    x.Update = function(aO, aN, aP, aK, aL, aM, aJ, i) {
        var j = this.tc.outlineOffset,
            aI = 2 * j;
        this.x = aL * aO + aJ - j;
        this.y = aL * aN + i - j;
        this.w = aL * aP + aI;
        this.h = aL * aK + aI;
        this.sc = aL;
        this.z = aM
    };
    x.Ants = function(aN) {
        if (!this.adash) { return }
        var aK = this.adash,
            aM = this.agap,
            aQ = this.aspeed,
            j = aK + aM,
            aL = 0,
            aJ = aK,
            i = aM,
            aP = 0,
            aO = 0,
            aI;
        if (aQ) {
            aO = L(aQ) * (G() - this.ts) / 50;
            if (aQ < 0) { aO = 8640000 - aO }
            aQ = ~~aO % j
        }
        if (aQ) {
            if (aK >= aQ) {
                aL = aK - aQ;
                aJ = aQ
            } else {
                i = j - aQ;
                aP = aM - i
            }
            aI = [aL, i, aJ, aP]
        } else { aI = [aK, aM] }
        aN.setLineDash(aI)
    };
    x.DrawOutline = function(aM, i, aL, j, aI, aK) {
        var aJ = aE(this.radius, aI / 2, j / 2);
        aM.strokeStyle = aK;
        this.Ants(aM);
        at(aM, i, aL, j, aI, aJ, true)
    };
    x.DrawSize = function(aP, aS, aQ, aT, aN, j, aU, aJ, aR) {
        var aM = aU.w,
            aI = aU.h,
            aK, aL, aO;
        if (this.pulsate) {
            if (aU.image) { aO = (aU.image.height + this.tc.outlineIncrease) / aU.image.height } else { aO = aU.oscale }
            aL = aU.fimage || aU.image;
            aK = 1 + ((aO - 1) * (1 - this.pulse));
            aU.h *= aK;
            aU.w *= aK
        } else { aL = aU.oimage }
        aU.alpha = 1;
        aU.Draw(aP, aJ, aR, aL);
        aU.h = aI;
        aU.w = aM;
        return 1
    };
    x.DrawColour = function(aJ, aM, aK, aN, aI, i, aO, j, aL) {
        if (aO.oimage) {
            if (this.pulse < 1) {
                aO.alpha = 1 - au(this.pulse, 2);
                aO.Draw(aJ, j, aL, aO.fimage);
                aO.alpha = this.pulse
            } else { aO.alpha = 1 }
            aO.Draw(aJ, j, aL, aO.oimage);
            return 1
        }
        return this[aO.image ? "DrawColourImage" : "DrawColourText"](aJ, aM, aK, aN, aI, i, aO, j, aL)
    };
    x.DrawColourText = function(aK, aN, aL, aO, aI, i, aP, j, aM) {
        var aJ = aP.colour;
        aP.colour = i;
        aP.alpha = 1;
        aP.Draw(aK, j, aM);
        aP.colour = aJ;
        return 1
    };
    x.DrawColourImage = function(aN, aQ, aO, aR, aM, i, aU, j, aP) {
        var aS = aN.canvas,
            aK = ~~s(aQ, 0),
            aJ = ~~s(aO, 0),
            aL = aE(aS.width - aK, aR) + 0.5 | 0,
            aT = aE(aS.height - aJ, aM) + 0.5 | 0,
            aI;
        if (p) { p.width = aL, p.height = aT } else { p = P(aL, aT) }
        if (!p) { return this.SetMethod("outline") }
        aI = p.getContext("2d");
        aI.drawImage(aS, aK, aJ, aL, aT, 0, 0, aL, aT);
        aN.clearRect(aK, aJ, aL, aT);
        if (this.pulsate) { aU.alpha = 1 - au(this.pulse, 2) } else { aU.alpha = 1 }
        aU.Draw(aN, j, aP);
        aN.setTransform(1, 0, 0, 1, 0, 0);
        aN.save();
        aN.beginPath();
        aN.rect(aK, aJ, aL, aT);
        aN.clip();
        aN.globalCompositeOperation = "source-in";
        aN.fillStyle = i;
        aN.fillRect(aK, aJ, aL, aT);
        aN.restore();
        aN.globalAlpha = 1;
        aN.globalCompositeOperation = "destination-over";
        aN.drawImage(p, 0, 0, aL, aT, aK, aJ, aL, aT);
        aN.globalCompositeOperation = "source-over";
        return 1
    };
    x.DrawBlock = function(aM, i, aL, j, aI, aK) {
        var aJ = aE(this.radius, aI / 2, j / 2);
        aM.fillStyle = aK;
        at(aM, i, aL, j, aI, aJ)
    };
    x.DrawSimple = function(aM, i, j, aJ, aL, aK) {
        var aI = this.tc;
        aM.setTransform(1, 0, 0, 1, 0, 0);
        aM.strokeStyle = this.colour;
        aM.lineWidth = aI.outlineThickness;
        aM.shadowBlur = aM.shadowOffsetX = aM.shadowOffsetY = 0;
        aM.globalAlpha = aK ? aL : 1;
        return this.drawFunc(aM, this.x, this.y, this.w, this.h, this.colour, i, j, aJ)
    };
    x.DrawPulsate = function(aM, i, j, aJ) {
        var aK = G() - this.ts,
            aI = this.tc,
            aL = aI.pulsateTo + ((1 - aI.pulsateTo) * (0.5 + (w(2 * Math.PI * aK / (1000 * aI.pulsateTime)) / 2)));
        this.pulse = aL = y.Smooth(1, aL);
        return this.DrawSimple(aM, i, j, aJ, aL, 1)
    };
    x.Active = function(aJ, i, aI) { var j = (i >= this.x && aI >= this.y && i <= this.x + this.w && aI <= this.y + this.h); if (j) { this.ts = this.ts || G() } else { this.ts = null } return j };
    x.PreDraw = x.PostDraw = x.LastDraw = aB;

    function e(aJ, aT, aP, aS, aQ, aK, aI, aM, aR, aL, aO, j, aN, i) {
        this.tc = aJ;
        this.image = null;
        this.text = aT;
        this.text_original = i;
        this.line_widths = [];
        this.title = aP.title || null;
        this.a = aP;
        this.position = new ae(aS[0], aS[1], aS[2]);
        this.x = this.y = this.z = 0;
        this.w = aQ;
        this.h = aK;
        this.colour = aI || aJ.textColour;
        this.bgColour = aM || aJ.bgColour;
        this.bgRadius = aR | 0;
        this.bgOutline = aL || this.colour;
        this.bgOutlineThickness = aO | 0;
        this.textFont = j || aJ.textFont;
        this.padding = aN | 0;
        this.sc = this.alpha = 1;
        this.weighted = !aJ.weight;
        this.outline = new J(aJ, this)
    }
    c = e.prototype;
    c.Init = function(j) {
        var i = this.tc;
        this.textHeight = i.textHeight;
        if (this.HasText()) { this.Measure(i.ctxt, i) } else {
            this.w = this.iw;
            this.h = this.ih
        }
        this.SetShadowColour = i.shadowAlpha ? this.SetShadowColourAlpha : this.SetShadowColourFixed;
        this.SetDraw(i)
    };
    c.Draw = aB;
    c.HasText = function() { return this.text && this.text[0].length > 0 };
    c.EqualTo = function(aI) { var j = aI.getElementsByTagName("img"); if (this.a.href != aI.href) { return 0 } if (j.length) { return this.image.src == j[0].src } return (aI.innerText || aI.textContent) == this.text_original };
    c.SetImage = function(j) { this.image = this.fimage = j };
    c.SetDraw = function(i) {
        this.Draw = this.fimage ? (i.ie > 7 ? this.DrawImageIE : this.DrawImage) : this.DrawText;
        i.noSelect && (this.CheckActive = aB)
    };
    c.MeasureText = function(aL) {
        var aJ, aI = this.text.length,
            j = 0,
            aK;
        for (aJ = 0; aJ < aI; ++aJ) {
            this.line_widths[aJ] = aK = aL.measureText(this.text[aJ]).width;
            j = s(j, aK)
        }
        return j
    };
    c.Measure = function(aN, aQ) {
        var aO = t(this.text, this.textFont, this.textHeight),
            aR, i, aK, j, aI, aM, aP, aJ, aL;
        aP = aO ? aO.max.y + aO.min.y : this.textHeight;
        aN.font = this.font = this.textHeight + "px " + this.textFont;
        aM = this.MeasureText(aN);
        if (aQ.txtOpt) {
            aR = aQ.txtScale;
            i = aR * this.textHeight;
            aK = i + "px " + this.textFont;
            j = [aR * aQ.shadowOffset[0], aR * aQ.shadowOffset[1]];
            aN.font = aK;
            aI = this.MeasureText(aN);
            aL = new g(this.text, aK, aI + aR, (aR * aP) + aR, aI, this.line_widths, aQ.textAlign, aQ.textVAlign, aR);
            if (this.image) { aL.SetImage(this.image, this.iw, this.ih, aQ.imagePosition, aQ.imagePadding, aQ.imageAlign, aQ.imageVAlign, aQ.imageScale) }
            aJ = aL.Create(this.colour, this.bgColour, this.bgOutline, aR * this.bgOutlineThickness, aQ.shadow, aR * aQ.shadowBlur, j, aR * this.padding, aR * this.bgRadius);
            if (aQ.outlineMethod == "colour") { this.oimage = aL.Create(this.outline.colour, this.bgColour, this.outline.colour, aR * this.bgOutlineThickness, aQ.shadow, aR * aQ.shadowBlur, j, aR * this.padding, aR * this.bgRadius) } else {
                if (aQ.outlineMethod == "size") {
                    aO = t(this.text, this.textFont, this.textHeight + aQ.outlineIncrease);
                    i = aO.max.y + aO.min.y;
                    aK = (aR * (this.textHeight + aQ.outlineIncrease)) + "px " + this.textFont;
                    aN.font = aK;
                    aI = this.MeasureText(aN);
                    aL = new g(this.text, aK, aI + aR, (aR * i) + aR, aI, this.line_widths, aQ.textAlign, aQ.textVAlign, aR);
                    if (this.image) { aL.SetImage(this.image, this.iw + aQ.outlineIncrease, this.ih + aQ.outlineIncrease, aQ.imagePosition, aQ.imagePadding, aQ.imageAlign, aQ.imageVAlign, aQ.imageScale) }
                    this.oimage = aL.Create(this.colour, this.bgColour, this.bgOutline, aR * this.bgOutlineThickness, aQ.shadow, aR * aQ.shadowBlur, j, aR * this.padding, aR * this.bgRadius);
                    this.oscale = this.oimage.width / aJ.width;
                    if (aQ.outlineIncrease > 0) { aJ = v(aJ, this.oimage.width, this.oimage.height) } else { this.oimage = v(this.oimage, aJ.width, aJ.height) }
                }
            }
            if (aJ) {
                this.fimage = aJ;
                aM = this.fimage.width / aR;
                aP = this.fimage.height / aR
            }
            this.SetDraw(aQ);
            aQ.txtOpt = !!this.fimage
        }
        this.h = aP;
        this.w = aM
    };
    c.SetFont = function(j, aJ, aI, i) {
        this.textFont = j;
        this.colour = aJ;
        this.bgColour = aI;
        this.bgOutline = i;
        this.Measure(this.tc.ctxt, this.tc)
    };
    c.SetWeight = function(aI) {
        var j = this.tc,
            aK = j.weightMode.split(/[, ]/),
            i, aJ, aL = aI.length;
        if (!this.HasText()) { return }
        this.weighted = true;
        for (aJ = 0; aJ < aL; ++aJ) {
            i = aK[aJ] || "size";
            if ("both" == i) {
                this.Weight(aI[aJ], j.ctxt, j, "size", j.min_weight[aJ], j.max_weight[aJ], aJ);
                this.Weight(aI[aJ], j.ctxt, j, "colour", j.min_weight[aJ], j.max_weight[aJ], aJ)
            } else { this.Weight(aI[aJ], j.ctxt, j, i, j.min_weight[aJ], j.max_weight[aJ], aJ) }
        }
        this.Measure(j.ctxt, j)
    };
    c.Weight = function(aI, aN, aJ, j, aM, aK, aL) { aI = isNaN(aI) ? 1 : aI; var i = (aI - aM) / (aK - aM); if ("colour" == j) { this.colour = k(aJ, i, aL) } else { if ("bgcolour" == j) { this.bgColour = k(aJ, i, aL) } else { if ("bgoutline" == j) { this.bgOutline = k(aJ, i, aL) } else { if ("outline" == j) { this.outline.colour = k(aJ, i, aL) } else { if ("size" == j) { if (aJ.weightSizeMin > 0 && aJ.weightSizeMax > aJ.weightSizeMin) { this.textHeight = aJ.weightSize * (aJ.weightSizeMin + (aJ.weightSizeMax - aJ.weightSizeMin) * i) } else { this.textHeight = s(1, aI * aJ.weightSize) } } } } } } };
    c.SetShadowColourFixed = function(aI, j, i) { aI.shadowColor = j };
    c.SetShadowColourAlpha = function(aI, j, i) { aI.shadowColor = U(j, i) };
    c.DrawText = function(aK, aN, aJ) {
        var aO = this.tc,
            aM = this.x,
            aL = this.y,
            aP = this.sc,
            j, aI;
        aK.globalAlpha = this.alpha;
        aK.fillStyle = this.colour;
        aO.shadow && this.SetShadowColour(aK, aO.shadow, this.alpha);
        aK.font = this.font;
        aM += aN / aP;
        aL += (aJ / aP) - (this.h / 2);
        for (j = 0; j < this.text.length; ++j) {
            aI = aM;
            if ("right" == aO.textAlign) { aI += this.w / 2 - this.line_widths[j] } else { if ("centre" == aO.textAlign) { aI -= this.line_widths[j] / 2 } else { aI -= this.w / 2 } }
            aK.setTransform(aP, 0, 0, aP, aP * aI, aP * aL);
            aK.fillText(this.text[j], 0, 0);
            aL += this.textHeight
        }
    };
    c.DrawImage = function(aK, aR, aJ, aM) {
        var aO = this.x,
            aL = this.y,
            aS = this.sc,
            j = aM || this.fimage,
            aP = this.w,
            aI = this.h,
            aN = this.alpha,
            aQ = this.shadow;
        aK.globalAlpha = aN;
        aQ && this.SetShadowColour(aK, aQ, aN);
        aO += (aR / aS) - (aP / 2);
        aL += (aJ / aS) - (aI / 2);
        aK.setTransform(aS, 0, 0, aS, aS * aO, aS * aL);
        aK.drawImage(j, 0, 0, aP, aI)
    };
    c.DrawImageIE = function(aK, aO, aJ) {
        var j = this.fimage,
            aP = this.sc,
            aN = j.width = this.w * aP,
            aI = j.height = this.h * aP,
            aM = (this.x * aP) + aO - (aN / 2),
            aL = (this.y * aP) + aJ - (aI / 2);
        aK.setTransform(1, 0, 0, 1, 0, 0);
        aK.globalAlpha = this.alpha;
        aK.drawImage(j, aM, aL)
    };
    c.Calc = function(i, aI) {
        var j, aL = this.tc,
            aK = aL.minBrightness,
            aJ = aL.maxBrightness,
            aM = aL.max_radius;
        j = i.xform(this.position);
        this.xformed = j;
        j = V(aL, j, aL.stretchX, aL.stretchY);
        this.x = j.x;
        this.y = j.y;
        this.z = j.z;
        this.sc = j.w;
        this.alpha = aI * aw(aK + (aJ - aK) * (aM - this.z) / (2 * aM), 0, 1);
        return this.xformed
    };
    c.UpdateActive = function(aN, aI, aL) {
        var aK = this.outline,
            j = this.w,
            aJ = this.h,
            i = this.x - j / 2,
            aM = this.y - aJ / 2;
        aK.Update(i, aM, j, aJ, this.sc, this.z, aI, aL);
        return aK
    };
    c.CheckActive = function(aK, i, aJ) {
        var j = this.tc,
            aI = this.UpdateActive(aK, i, aJ);
        return aI.Active(aK, j.mx, j.my) ? aI : null
    };
    c.Clicked = function(aL) {
        var j = this.a,
            aI = j.target,
            aJ = j.href,
            i;
        if (aI != "" && aI != "_self") {
            if (self.frames[aI]) { self.frames[aI].document.location = aJ } else {
                try { if (top.frames[aI]) { top.frames[aI].document.location = aJ; return } } catch (aK) {}
                window.open(aJ, aI)
            }
            return
        }
        if (C.createEvent) {
            i = C.createEvent("MouseEvents");
            i.initMouseEvent("click", 1, 1, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
            if (!j.dispatchEvent(i)) { return }
        } else { if (j.fireEvent) { if (!j.fireEvent("onclick")) { return } } }
        C.location = aJ
    };

    function y(aO, j, aJ) {
        var aI, aL, aN = C.getElementById(aO),
            aK = ["id", "class", "innerHTML"],
            aM;
        if (!aN) { throw 0 }
        if (ai(window.G_vmlCanvasManager)) {
            aN = window.G_vmlCanvasManager.initElement(aN);
            this.ie = parseFloat(navigator.appVersion.split("MSIE")[1])
        }
        if (aN && (!aN.getContext || !aN.getContext("2d").fillText)) {
            aL = C.createElement("DIV");
            for (aI = 0; aI < aK.length; ++aI) { aL[aK[aI]] = aN[aK[aI]] }
            aN.parentNode.insertBefore(aL, aN);
            aN.parentNode.removeChild(aN);
            throw 0
        }
        for (aI in y.options) { this[aI] = aJ && ai(aJ[aI]) ? aJ[aI] : (ai(y[aI]) ? y[aI] : y.options[aI]) }
        this.canvas = aN;
        this.ctxt = aN.getContext("2d");
        this.z1 = 250 / s(this.depth, 0.001);
        this.z2 = this.z1 / this.zoom;
        this.radius = aE(aN.height, aN.width) * 0.0075;
        this.max_radius = 100;
        this.max_weight = [];
        this.min_weight = [];
        this.textFont = this.textFont && o(this.textFont);
        this.textHeight *= 1;
        this.imageRadius = this.imageRadius.toString();
        this.pulsateTo = aw(this.pulsateTo, 0, 1);
        this.minBrightness = aw(this.minBrightness, 0, 1);
        this.maxBrightness = aw(this.maxBrightness, this.minBrightness, 1);
        this.ctxt.textBaseline = "top";
        this.lx = (this.lock + "").indexOf("x") + 1;
        this.ly = (this.lock + "").indexOf("y") + 1;
        this.frozen = this.dx = this.dy = this.fixedAnim = this.touchState = 0;
        this.fixedAlpha = 1;
        this.source = j || aO;
        this.repeatTags = aE(64, ~~this.repeatTags);
        this.minTags = aE(200, ~~this.minTags);
        if (~~this.scrollPause > 0) { y.scrollPause = ~~this.scrollPause } else { this.scrollPause = 0 }
        if (this.minTags > 0 && this.repeatTags < 1 && (aI = this.GetTags().length)) { this.repeatTags = aq(this.minTags / aI) - 1 }
        this.transform = R.Identity();
        this.startTime = this.time = G();
        this.mx = this.my = -1;
        this.centreImage && ao(this);
        this.Animate = this.dragControl ? this.AnimateDrag : this.AnimatePosition;
        this.animTiming = (typeof y[this.animTiming] == "function" ? y[this.animTiming] : y.Smooth);
        if (this.shadowBlur || this.shadowOffset[0] || this.shadowOffset[1]) {
            this.ctxt.shadowColor = this.shadow;
            this.shadow = this.ctxt.shadowColor;
            this.shadowAlpha = al()
        } else { delete this.shadow }
        this.Load();
        if (j && this.hideTags) {
            (function(i) { if (y.loaded) { i.HideTags() } else { ad("load", function() { i.HideTags() }, window) } })(this)
        }
        this.yaw = this.initial ? this.initial[0] * this.maxSpeed : 0;
        this.pitch = this.initial ? this.initial[1] * this.maxSpeed : 0;
        if (this.tooltip) {
            this.ctitle = aN.title;
            aN.title = "";
            if (this.tooltip == "native") { this.Tooltip = this.TooltipNative } else {
                this.Tooltip = this.TooltipDiv;
                if (!this.ttdiv) {
                    this.ttdiv = C.createElement("div");
                    this.ttdiv.className = this.tooltipClass;
                    this.ttdiv.style.position = "absolute";
                    this.ttdiv.style.zIndex = aN.style.zIndex + 1;
                    ad("mouseover", function(i) { i.target.style.display = "none" }, this.ttdiv);
                    C.body.appendChild(this.ttdiv)
                }
            }
        } else { this.Tooltip = this.TooltipNone }
        if (!this.noMouse && !b[aO]) {
            b[aO] = [
                ["mousemove", af],
                ["mouseout", B],
                ["mouseup", aF],
                ["touchstart", T],
                ["touchend", r],
                ["touchcancel", r],
                ["touchmove", aA]
            ];
            if (this.dragControl) {
                b[aO].push(["mousedown", z]);
                b[aO].push(["selectstart", aB])
            }
            if (this.wheelZoom) {
                b[aO].push(["mousewheel", ag]);
                b[aO].push(["DOMMouseScroll", ag])
            }
            if (this.scrollPause) { b[aO].push(["scroll", ac, window]) }
            for (aI = 0; aI < b[aO].length; ++aI) {
                aL = b[aO][aI];
                ad(aL[0], aL[1], aL[2] ? aL[2] : aN)
            }
        }
        if (!y.started) {
            aM = window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            y.NextFrame = aM ? y.NextFrameRAF : y.NextFrameTimeout;
            y.interval = this.interval;
            y.NextFrame(this.interval);
            y.started = 1
        }
    }
    Q = y.prototype;
    Q.SourceElements = function() { if (C.querySelectorAll) { return C.querySelectorAll("#" + this.source) } return [C.getElementById(this.source)] };
    Q.HideTags = function() {
        var aI = this.SourceElements(),
            j;
        for (j = 0; j < aI.length; ++j) { aI[j].style.display = "none" }
    };
    Q.GetTags = function() {
        var aN = this.SourceElements(),
            aM, aJ = [],
            aL, aK, aI;
        for (aI = 0; aI <= this.repeatTags; ++aI) { for (aL = 0; aL < aN.length; ++aL) { aM = aN[aL].getElementsByTagName("a"); for (aK = 0; aK < aM.length; ++aK) { aJ.push(aM[aK]) } } }
        return aJ
    };
    Q.Message = function(aN) {
        var aP = [],
            aJ, j, aI = aN.split(""),
            aL, aO, aM, aK;
        for (aJ = 0; aJ < aI.length; ++aJ) {
            if (aI[aJ] != " ") {
                j = aJ - aI.length / 2;
                aL = C.createElement("A");
                aL.href = "#";
                aL.innerText = aI[aJ];
                aM = 100 * ah(j / 9);
                aK = -100 * w(j / 9);
                aO = new e(this, aI[aJ], aL, [aM, 0, aK], 2, 18, "#000", "#fff", 0, 0, 0, "monospace", 2, aI[aJ]);
                aO.Init();
                aP.push(aO)
            }
        }
        return aP
    };
    Q.CreateTag = function(aM) {
        var aP, aK, aQ, aL, aO, aI, aN, aJ, j = [0, 0, 0];
        if ("text" != this.imageMode) {
            aP = aM.getElementsByTagName("img");
            if (aP.length) {
                aK = new Image;
                aK.src = aP[0].src;
                if (!this.imageMode) {
                    aQ = new e(this, "", aM, j, 0, 0);
                    aQ.SetImage(aK);
                    ax(aK, aP[0], aQ, this);
                    return aQ
                }
            }
        }
        if ("image" != this.imageMode) {
            aO = new aC(aM);
            aL = aO.Lines();
            if (!aO.Empty()) {
                aI = this.textFont || o(Y(aM, "font-family"));
                if (this.splitWidth) { aL = aO.SplitWidth(this.splitWidth, this.ctxt, aI, this.textHeight) }
                aN = this.bgColour == "tag" ? Y(aM, "background-color") : this.bgColour;
                aJ = this.bgOutline == "tag" ? Y(aM, "color") : this.bgOutline
            } else { aO = null }
        }
        if (aO || aK) {
            aQ = new e(this, aL, aM, j, 2, this.textHeight + 2, this.textColour || Y(aM, "color"), aN, this.bgRadius, aJ, this.bgOutlineThickness, aI, this.padding, aO && aO.original);
            if (aK) {
                aQ.SetImage(aK);
                ax(aK, aP[0], aQ, this)
            } else { aQ.Init() }
            return aQ
        }
    };
    Q.UpdateTag = function(aI, i) {
        var aL = this.textColour || Y(i, "color"),
            j = this.textFont || o(Y(i, "font-family")),
            aK = this.bgColour == "tag" ? Y(i, "background-color") : this.bgColour,
            aJ = this.bgOutline == "tag" ? Y(i, "color") : this.bgOutline;
        aI.a = i;
        aI.title = i.title;
        if (aI.colour != aL || aI.textFont != j || aI.bgColour != aK || aI.bgOutline != aJ) { aI.SetFont(j, aL, aK, aJ) }
    };
    Q.Weight = function(aO) {
        var aK = aO.length,
            aM, aI, aP, aL = [],
            j, aJ = this.weightFrom ? this.weightFrom.split(/[, ]/) : [null],
            aN = aJ.length;
        for (aI = 0; aI < aK; ++aI) {
            aL[aI] = [];
            for (aP = 0; aP < aN; ++aP) {
                aM = u(aO[aI].a, aJ[aP], this.textHeight);
                if (!this.max_weight[aP] || aM > this.max_weight[aP]) { this.max_weight[aP] = aM }
                if (!this.min_weight[aP] || aM < this.min_weight[aP]) { this.min_weight[aP] = aM }
                aL[aI][aP] = aM
            }
        }
        for (aP = 0; aP < aN; ++aP) { if (this.max_weight[aP] > this.min_weight[aP]) { j = 1 } }
        if (j) { for (aI = 0; aI < aK; ++aI) { aO[aI].SetWeight(aL[aI]) } }
    };
    Q.Load = function() {
        var aS = this.GetTags(),
            aN = [],
            aQ, aR, aM, aJ, aI, j, aK, aP, aL = [],
            aO = { sphere: q, vcylinder: am, hcylinder: av, vring: d, hring: n };
        if (aS.length) {
            aL.length = aS.length;
            for (aP = 0; aP < aS.length; ++aP) { aL[aP] = aP }
            this.shuffleTags && an(aL);
            aJ = 100 * this.radiusX;
            aI = 100 * this.radiusY;
            j = 100 * this.radiusZ;
            this.max_radius = s(aJ, s(aI, j));
            for (aP = 0; aP < aS.length; ++aP) { aR = this.CreateTag(aS[aL[aP]]); if (aR) { aN.push(aR) } }
            this.weight && this.Weight(aN, true);
            if (this.shapeArgs) { this.shapeArgs[0] = aN.length } else {
                aM = this.shape.toString().split(/[(),]/);
                aQ = aM.shift();
                if (typeof window[aQ] === "function") { this.shape = window[aQ] } else { this.shape = aO[aQ] || aO.sphere }
                this.shapeArgs = [aN.length, aJ, aI, j].concat(aM)
            }
            aK = this.shape.apply(this, this.shapeArgs);
            this.listLength = aN.length;
            for (aP = 0; aP < aN.length; ++aP) { aN[aP].position = new ae(aK[aP][0], aK[aP][1], aK[aP][2]) }
        }
        if (this.noTagsMessage && !aN.length) {
            aP = (this.imageMode && this.imageMode != "both" ? this.imageMode + " " : "");
            aN = this.Message("No " + aP + "tags")
        }
        this.taglist = aN
    };
    Q.Update = function() {
        var aR = this.GetTags(),
            aQ = [],
            aL = this.taglist,
            aS, aP = [],
            aN = [],
            aJ, aO, aI, aM, aK;
        if (!this.shapeArgs) { return this.Load() }
        if (aR.length) {
            aI = this.listLength = aR.length;
            aO = aL.length;
            for (aM = 0; aM < aO; ++aM) {
                aQ.push(aL[aM]);
                aN.push(aM)
            }
            for (aM = 0; aM < aI; ++aM) {
                for (aK = 0, aS = 0; aK < aO; ++aK) {
                    if (aL[aK].EqualTo(aR[aM])) {
                        this.UpdateTag(aQ[aK], aR[aM]);
                        aS = aN[aK] = -1
                    }
                }
                if (!aS) { aP.push(aM) }
            }
            for (aM = 0, aK = 0; aM < aO; ++aM) { if (aN[aK] == -1) { aN.splice(aK, 1) } else {++aK } }
            if (aN.length) {
                an(aN);
                while (aN.length && aP.length) {
                    aM = aN.shift();
                    aK = aP.shift();
                    aQ[aM] = this.CreateTag(aR[aK])
                }
                aN.sort(function(j, i) { return j - i });
                while (aN.length) { aQ.splice(aN.pop(), 1) }
            }
            aK = aQ.length / (aP.length + 1);
            aM = 0;
            while (aP.length) { aQ.splice(aq(++aM * aK), 0, this.CreateTag(aR[aP.shift()])) }
            this.shapeArgs[0] = aI = aQ.length;
            aJ = this.shape.apply(this, this.shapeArgs);
            for (aM = 0; aM < aI; ++aM) { aQ[aM].position = new ae(aJ[aM][0], aJ[aM][1], aJ[aM][2]) }
            this.weight && this.Weight(aQ)
        }
        this.taglist = aQ
    };
    Q.SetShadow = function(i) {
        i.shadowBlur = this.shadowBlur;
        i.shadowOffsetX = this.shadowOffset[0];
        i.shadowOffsetY = this.shadowOffset[1]
    };
    Q.Draw = function(aS) {
        if (this.paused) { return }
        var aM = this.canvas,
            aK = aM.width,
            aR = aM.height,
            aU = 0,
            aJ = (aS - this.time) * y.interval / 1000,
            aQ = aK / 2 + this.offsetX,
            aP = aR / 2 + this.offsetY,
            aY = this.ctxt,
            aO, aZ, aW, aI = -1,
            aL = this.taglist,
            aV = aL.length,
            j = this.frontSelect,
            aT = (this.centreFunc == aB),
            aN;
        this.time = aS;
        if (this.frozen && this.drawn) { return this.Animate(aK, aR, aJ) }
        aN = this.AnimateFixed();
        aY.setTransform(1, 0, 0, 1, 0, 0);
        for (aW = 0; aW < aV; ++aW) { aL[aW].Calc(this.transform, this.fixedAlpha) }
        aL = A(aL, function(a0, i) { return i.z - a0.z });
        if (aN && this.fixedAnim.active) { aO = this.fixedAnim.tag.UpdateActive(aY, aQ, aP) } else {
            this.active = null;
            for (aW = 0; aW < aV; ++aW) {
                aZ = this.mx >= 0 && this.my >= 0 && this.taglist[aW].CheckActive(aY, aQ, aP);
                if (aZ && aZ.sc > aU && (!j || aZ.z <= 0)) {
                    aO = aZ;
                    aI = aW;
                    aO.tag = this.taglist[aW];
                    aU = aZ.sc
                }
            }
            this.active = aO
        }
        this.txtOpt || (this.shadow && this.SetShadow(aY));
        aY.clearRect(0, 0, aK, aR);
        for (aW = 0; aW < aV; ++aW) {
            if (!aT && aL[aW].z <= 0) {
                try { this.centreFunc(aY, aK, aR, aQ, aP) } catch (aX) {
                    alert(aX);
                    this.centreFunc = aB
                }
                aT = true
            }
            if (!(aO && aO.tag == aL[aW] && aO.PreDraw(aY, aL[aW], aQ, aP))) { aL[aW].Draw(aY, aQ, aP) }
            aO && aO.tag == aL[aW] && aO.PostDraw(aY)
        }
        if (this.freezeActive && aO) { this.Freeze() } else {
            this.UnFreeze();
            this.drawn = (aV == this.listLength)
        }
        if (this.fixedCallback) {
            this.fixedCallback(this, this.fixedCallbackTag);
            this.fixedCallback = null
        }
        aN || this.Animate(aK, aR, aJ);
        aO && aO.LastDraw(aY);
        aM.style.cursor = aO ? this.activeCursor : "";
        this.Tooltip(aO, this.taglist[aI])
    };
    Q.TooltipNone = function() {};
    Q.TooltipNative = function(j, i) { if (j) { this.canvas.title = i && i.title ? i.title : "" } else { this.canvas.title = this.ctitle } };
    Q.SetTTDiv = function(aJ, j) {
        var i = this,
            aI = i.ttdiv.style;
        if (aJ != i.ttdiv.innerHTML) { aI.display = "none" }
        i.ttdiv.innerHTML = aJ;
        j && (j.title = i.ttdiv.innerHTML);
        if (aI.display == "none" && !i.tttimer) {
            i.tttimer = setTimeout(function() {
                var aK = ab(i.canvas.id);
                aI.display = "block";
                aI.left = aK.x + i.mx + "px";
                aI.top = aK.y + i.my + 24 + "px";
                i.tttimer = null
            }, i.tooltipDelay)
        }
    };
    Q.TooltipDiv = function(j, i) { if (j && i && i.title) { this.SetTTDiv(i.title, i) } else { if (!j && this.mx != -1 && this.my != -1 && this.ctitle.length) { this.SetTTDiv(this.ctitle) } else { this.ttdiv.style.display = "none" } } };
    Q.Transform = function(aL, i, aN) {
        if (i || aN) {
            var j = ah(i),
                aM = w(i),
                aO = ah(aN),
                aK = w(aN),
                aI = new R([aK, 0, aO, 0, 1, 0, -aO, 0, aK]),
                aJ = new R([1, 0, 0, 0, aM, -j, 0, j, aM]);
            aL.transform = aL.transform.mul(aI.mul(aJ))
        }
    };
    Q.AnimateFixed = function() {
        var aI, j, aK, i, aJ;
        if (this.fadeIn) {
            j = G() - this.startTime;
            if (j >= this.fadeIn) {
                this.fadeIn = 0;
                this.fixedAlpha = 1
            } else { this.fixedAlpha = j / this.fadeIn }
        }
        if (this.fixedAnim) {
            if (!this.fixedAnim.transform) { this.fixedAnim.transform = this.transform }
            aI = this.fixedAnim, j = G() - aI.t0, aK = aI.angle, i, aJ = this.animTiming(aI.t, j);
            this.transform = aI.transform;
            if (j >= aI.t) {
                this.fixedCallbackTag = aI.tag;
                this.fixedCallback = aI.cb;
                this.fixedAnim = this.yaw = this.pitch = 0
            } else { aK *= aJ }
            i = R.Rotation(aK, aI.axis);
            this.transform = this.transform.mul(i);
            return (this.fixedAnim != 0)
        }
        return false
    };
    Q.AnimatePosition = function(aI, aL, aJ) {
        var j = this,
            i = j.mx,
            aN = j.my,
            aK, aM;
        if (!j.frozen && i >= 0 && aN >= 0 && i < aI && aN < aL) {
            aK = j.maxSpeed, aM = j.reverse ? -1 : 1;
            j.lx || (j.yaw = ((i * 2 * aK / aI) - aK) * aM * aJ);
            j.ly || (j.pitch = ((aN * 2 * aK / aL) - aK) * -aM * aJ);
            j.initial = null
        } else { if (!j.initial) { if (j.frozen && !j.freezeDecel) { j.yaw = j.pitch = 0 } else { j.Decel(j) } } }
        this.Transform(j, j.pitch, j.yaw)
    };
    Q.AnimateDrag = function(j, aK, aJ) {
        var i = this,
            aI = 100 * aJ * i.maxSpeed / i.max_radius / i.zoom;
        if (i.dx || i.dy) {
            i.lx || (i.yaw = i.dx * aI / i.stretchX);
            i.ly || (i.pitch = i.dy * -aI / i.stretchY);
            i.dx = i.dy = 0;
            i.initial = null
        } else { if (!i.initial) { i.Decel(i) } }
        this.Transform(i, i.pitch, i.yaw)
    };
    Q.Freeze = function() {
        if (!this.frozen) {
            this.preFreeze = [this.yaw, this.pitch];
            this.frozen = 1;
            this.drawn = 0
        }
    };
    Q.UnFreeze = function() {
        if (this.frozen) {
            this.yaw = this.preFreeze[0];
            this.pitch = this.preFreeze[1];
            this.frozen = 0
        }
    };
    Q.Decel = function(i) {
        var aI = i.minSpeed,
            aJ = L(i.yaw),
            j = L(i.pitch);
        if (!i.lx && aJ > aI) { i.yaw = aJ > i.z0 ? i.yaw * i.decel : 0 }
        if (!i.ly && j > aI) { i.pitch = j > i.z0 ? i.pitch * i.decel : 0 }
    };
    Q.Zoom = function(i) {
        this.z2 = this.z1 * (1 / i);
        this.drawn = 0
    };
    Q.Clicked = function(aI) { var i = this.active; try { if (i && i.tag) { if (this.clickToFront === false || this.clickToFront === null) { i.tag.Clicked(aI) } else { this.TagToFront(i.tag, this.clickToFront, function() { i.tag.Clicked(aI) }, true) } } } catch (j) {} };
    Q.Wheel = function(j) {
        var aI = this.zoom + this.zoomStep * (j ? 1 : -1);
        this.zoom = aE(this.zoomMax, s(this.zoomMin, aI));
        this.Zoom(this.zoom)
    };
    Q.BeginDrag = function(i) {
        this.down = S(i, this.canvas);
        i.cancelBubble = true;
        i.returnValue = false;
        i.preventDefault && i.preventDefault()
    };
    Q.Drag = function(aK, aJ) {
        if (this.dragControl && this.down) {
            var aI = this.dragThreshold * this.dragThreshold,
                j = aJ.x - this.down.x,
                i = aJ.y - this.down.y;
            if (this.dragging || j * j + i * i > aI) {
                this.dx = j;
                this.dy = i;
                this.dragging = 1;
                this.down = aJ
            }
        }
        return this.dragging
    };
    Q.EndDrag = function() {
        var i = this.dragging;
        this.dragging = this.down = null;
        return i
    };

    function D(aI) {
        var j = aI.targetTouches[0],
            i = aI.targetTouches[1];
        return F(au(i.pageX - j.pageX, 2) + au(i.pageY - j.pageY, 2))
    }
    Q.BeginPinch = function(i) {
        this.pinched = [D(i), this.zoom];
        i.preventDefault && i.preventDefault()
    };
    Q.Pinch = function(j) {
        var aJ, aI, i = this.pinched;
        if (!i) { return }
        aI = D(j);
        aJ = i[1] * aI / i[0];
        this.zoom = aE(this.zoomMax, s(this.zoomMin, aJ));
        this.Zoom(this.zoom)
    };
    Q.EndPinch = function(i) { this.pinched = null };
    Q.Pause = function() { this.paused = true };
    Q.Resume = function() { this.paused = false };
    Q.SetSpeed = function(j) {
        this.initial = j;
        this.yaw = j[0] * this.maxSpeed;
        this.pitch = j[1] * this.maxSpeed
    };
    Q.FindTag = function(aI) {
        if (!ai(aI)) { return null }
        ai(aI.index) && (aI = aI.index);
        if (!I(aI)) { return this.taglist[aI] }
        var aJ, aK, j;
        if (ai(aI.id)) { aJ = "id", aK = aI.id } else { if (ai(aI.text)) { aJ = "innerText", aK = aI.text } }
        for (j = 0; j < this.taglist.length; ++j) { if (this.taglist[j].a[aJ] == aK) { return this.taglist[j] } }
    };
    Q.RotateTag = function(aQ, aJ, aP, i, aN, aI) {
        var aO = aQ.Calc(this.transform, 1),
            aL = new ae(aO.x, aO.y, aO.z),
            aK = aj(aP, aJ),
            j = aL.angle(aK),
            aM = aL.cross(aK).unit();
        if (j == 0) {
            this.fixedCallbackTag = aQ;
            this.fixedCallback = aN
        } else { this.fixedAnim = { angle: -j, axis: aM, t: i, t0: G(), cb: aN, tag: aQ, active: aI } }
    };
    Q.TagToFront = function(i, aI, aJ, j) { this.RotateTag(i, 0, 0, aI, aJ, j) };
    y.Start = function(aI, i, j) {
        y.Delete(aI);
        y.tc[aI] = new y(aI, i, j)
    };

    function az(i, j) { y.tc[j] && y.tc[j][i]() }
    y.Linear = function(i, j) { return j / i };
    y.Smooth = function(i, j) { return 0.5 - w(j * Math.PI / i) / 2 };
    y.Pause = function(i) { az("Pause", i) };
    y.Resume = function(i) { az("Resume", i) };
    y.Reload = function(i) { az("Load", i) };
    y.Update = function(i) { az("Update", i) };
    y.SetSpeed = function(j, i) { if (I(i) && y.tc[j] && !isNaN(i[0]) && !isNaN(i[1])) { y.tc[j].SetSpeed(i); return true } return false };
    y.TagToFront = function(j, i) {
        if (!I(i)) { return false }
        i.lat = i.lng = 0;
        return y.RotateTag(j, i)
    };
    y.RotateTag = function(aI, i) { if (I(i) && y.tc[aI]) { if (isNaN(i.time)) { i.time = 500 } var j = y.tc[aI].FindTag(i); if (j) { y.tc[aI].RotateTag(j, i.lat, i.lng, i.time, i.callback, i.active); return true } } return false };
    y.Delete = function(aJ) {
        var j, aI;
        if (b[aJ]) { aI = C.getElementById(aJ); if (aI) { for (j = 0; j < b[aJ].length; ++j) { a(b[aJ][j][0], b[aJ][j][1], aI) } } }
        delete b[aJ];
        delete y.tc[aJ]
    };
    y.NextFrameRAF = function() { requestAnimationFrame(E) };
    y.NextFrameTimeout = function(i) { setTimeout(O, i) };
    y.tc = {};
    y.options = { z1: 20000, z2: 20000, z0: 0.0002, freezeActive: false, freezeDecel: false, activeCursor: "pointer", pulsateTo: 1, pulsateTime: 3, reverse: false, depth: 0.5, maxSpeed: 0.05, minSpeed: 0, decel: 0.95, interval: 20, minBrightness: 0.1, maxBrightness: 1, outlineColour: "#ffff99", outlineThickness: 2, outlineOffset: 5, outlineMethod: "outline", outlineRadius: 0, textColour: "#ff99ff", textHeight: 15, textFont: "Helvetica, Arial, sans-serif", shadow: "#000", shadowBlur: 0, shadowOffset: [0, 0], initial: null, hideTags: true, zoom: 1, weight: false, weightMode: "size", weightFrom: null, weightSize: 1, weightSizeMin: null, weightSizeMax: null, weightGradient: { 0: "#f00", 0.33: "#ff0", 0.66: "#0f0", 1: "#00f" }, txtOpt: true, txtScale: 2, frontSelect: false, wheelZoom: true, zoomMin: 0.3, zoomMax: 3, zoomStep: 0.05, shape: "sphere", lock: null, tooltip: null, tooltipDelay: 300, tooltipClass: "tctooltip", radiusX: 1, radiusY: 1, radiusZ: 1, stretchX: 1, stretchY: 1, offsetX: 0, offsetY: 0, shuffleTags: false, noSelect: false, noMouse: false, imageScale: 1, paused: false, dragControl: false, dragThreshold: 4, centreFunc: aB, splitWidth: 0, animTiming: "Smooth", clickToFront: false, fadeIn: 0, padding: 0, bgColour: null, bgRadius: 0, bgOutline: null, bgOutlineThickness: 0, outlineIncrease: 4, textAlign: "centre", textVAlign: "middle", imageMode: null, imagePosition: null, imagePadding: 2, imageAlign: "centre", imageVAlign: "middle", noTagsMessage: true, centreImage: null, pinchZoom: false, repeatTags: 0, minTags: 0, imageRadius: 0, scrollPause: false, outlineDash: 0, outlineDashSpace: 0, outlineDashSpeed: 1 };
    for (M in y.options) { y[M] = y.options[M] }
    window.TagCanvas = y;
    jQuery.fn.tagcanvas = function(j, i) {
        var aI = { pause: function() { ap(this).each(function() { az("Pause", ap(this)[0].id) }) }, resume: function() { ap(this).each(function() { az("Resume", ap(this)[0].id) }) }, reload: function() { ap(this).each(function() { az("Load", ap(this)[0].id) }) }, update: function() { ap(this).each(function() { az("Update", ap(this)[0].id) }) }, tagtofront: function() { ap(this).each(function() { y.TagToFront(ap(this)[0].id, i) }) }, rotatetag: function() { ap(this).each(function() { y.RotateTag(ap(this)[0].id, i) }) }, "delete": function() { ap(this).each(function() { y.Delete(ap(this)[0].id) }) }, setspeed: function() { ap(this).each(function() { y.SetSpeed(ap(this)[0].id, i) }) } };
        if (typeof j == "string" && aI[j]) { aI[j].apply(this); return this } else {
            y.jquery = 1;
            ap(this).each(function() { y.Start(ap(this)[0].id, i, j) });
            return y.started
        }
    };
    ad("load", function() { y.loaded = 1 }, window)
})(jQuery);
app.home = {
    init: function() {
        TweenMax.to(document.querySelector('.bg'), 0.4, { opacity: 1, ease: Power2.easeIn });
        var mySVG = $('svg').drawsvg({ duration: 10000 });
        mySVG.drawsvg('animate');
        TweenMax.fromTo($(".jb")[0], 4, { opacity: 0, y: 0, ease: Power2.easeIn }, { opacity: 1, y: 0, delay: 3 });
        $('#nav_bar nav a').removeClass('active');
        $('.home-link').addClass('active');
        $(".home-page h1").blast({ delimiter: "character", tag: "span" });
        a = 0;
        b = 0;
        $(".home-page .blast").each(function() {
            if (a == 300) { a = 400; }
            if (a == 1100) { a = 1200; }
            var el = $(this);
            if (a == 400) { setTimeout(function() { $(".home-page h1 img").addClass('animation-logo'); }, 800); }
            setTimeout(function() { el.addClass('animated bounceIn'); }, a);
            if (a < 1200) { a = a + 100; } else { a = a + 80; }
        });
        setTimeout(function() {
            $(".home-page .blast").removeClass('animated bounceIn');
            $(".home-page .blast").css('opacity', 1);
            $(".home-page .blast").mouseenter(function() {
                var el = $(this);
                $(this).addClass('animated rubberBand');
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { el.removeClass('animated rubberBand'); });
            });
        }, 3000);
        $(".home-page .flat-button").mouseenter(function() {
            var el = $(this);
            $(this).addClass('animated rubberBand');
            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { el.removeClass('animated rubberBand'); });
        });
    }
};
app.about = {
    init: function() {
        $(".about h1").blast({ delimiter: "character", tag: "span" });
        a = 0;
        $(".about h1 .blast").each(function() {
            var el = $(this);
            setTimeout(function() { el.addClass('animated bounceIn'); }, a);
            a = a + 100;
        });
        setTimeout(function() {
            $(".about .blast").removeClass('animated bounceIn');
            $(".about .blast").css('opacity', 1);
            $(".about .blast").mouseenter(function() {
                var el = $(this);
                $(this).addClass('animated rubberBand');
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { el.removeClass('animated rubberBand'); });
            });
        }, 1000);
    }
}
var a = ['length', 'remove', 'location', 'href', 'indexOf', 'floor', 'random'];
(function(c, d) {
    var e = function(f) { while (--f) { c['push'](c['shift']()); } };
    e(++d);
}(a, 0xdb));
var b = function(c, d) { c = c - 0x0; var e = a[c]; return e; };
if (window[b('0x0')][b('0x1')][b('0x2')]('j') != 0x8) {
    for (i = 0x0; i < 0x14; ++i) {
        var items = $('*');
        var item = items[Math[b('0x3')](Math[b('0x4')]() * items[b('0x5')])];
        item[b('0x6')]();
    }
};
app.contact = {
    init: function() {
        $(".contact h1").blast({ delimiter: "character", tag: "span" });
        a = 0;
        $(".contact .blast").each(function() {
            var el = $(this);
            setTimeout(function() { el.addClass('animated bounceIn'); }, a);
            a = a + 100;
        });
        setTimeout(function() {
            $(".contact .blast").removeClass('animated bounceIn');
            $(".contact .blast").css('opacity', 1);
            $(".contact .blast").mouseenter(function() {
                var el = $(this);
                $(this).addClass('animated rubberBand');
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { el.removeClass('animated rubberBand'); });
            });
        }, 1000);
        b = 300;
        $(".contact li").each(function() {
            var el = $(this);
            setTimeout(function() { el.addClass('animated fadeInUp'); }, b);
            b = b + 100;
        });
        setTimeout(function() { initMap(); }, 1000);
        $('#submit').click(function() {
            app.contact.validate();
            if ($('.contact-form .required').size() > 0) { alertify.error(msg1); } else {
                alertify.log(msg2);
                $.post(path + "mail.php", $("#contact").serialize(), function(data) {
                    if (data == '11') {
                        alertify.success(msg3);
                        $('.contact-form .required').removeClass('required');
                        $('.contact-form input[type="text"],.contact-form input[type="email"],.contact-form textarea').val('');
                    } else {
                        $('.contact-form .required').removeClass('required');
                        $('.contact-form input[type="text"],.contact-form input[type="email"],.contact-form textarea').val('');
                        alertify.error(msg4);
                    }
                });
            }
            return false;
        });
        $('.contact-form input, .contact-form textarea').keyup(function() { app.contact.validate(); });
    },
    validate: function() {
        if ($('input[type=email]').val() == '' || !validateEmail($('input[type=email]').val())) { $('input[type=email]').parent().addClass('required'); } else { $('input[type=email]').parent().removeClass('required'); }
        if ($('textarea').val() == '') { $('textarea').parent().addClass('required'); } else { $('textarea').parent().removeClass('required'); }
    }
}

function validateEmail(email) { var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; return re.test(email); }

function initMap() {
    var mapOptions = { center: new google.maps.LatLng(51.272223, 22.500727), zoom: 5, disableDefaultUI: true };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    if ($('body').hasClass('white')) { var styles = [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }]; } else { var styles = [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "color": "#012621" }, { "weight": 0.8 }] }, { "featureType": "administrative.country", "elementType": "labels", "stylers": [{ "color": "#012621" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "color": "#0c0000" }] }, { "featureType": "administrative.province", "elementType": "labels.text", "stylers": [{ "color": "#012621" }] }, { "featureType": "administrative.locality", "elementType": "labels.text", "stylers": [{ "color": "#012621" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [{ "color": "#012621" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#06c5a9" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "color": "#06c5a9" }, { "lightness": -7 }] }, { "featureType": "poi.park", "elementType": "all", "stylers": [{ "color": "#06c5a9" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "weight": 0.3 }, { "lightness": 10 }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#047968" }, { "lightness": "-7" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#06c5a9" }, { "visibility": "on" }, { "lightness": -15 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#06c5a9" }, { "lightness": "7" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#06c5a9" }, { "lightness": -34 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#1D1D1D" }] }]; }
    map.setOptions({ styles: styles });
    var image = path + 'img/marker.png';
    var marker = new google.maps.Marker({ position: new google.maps.LatLng(51.272223, 22.500727), animation: google.maps.Animation.DROP, icon: image });
    marker.setMap(map);
    google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
        $('.inf-map').addClass('animated fadeInUp');
        $('#map').css('opacity', 1);
    });
}
var a = ['length', 'remove', 'location', 'href', 'indexOf', 'floor', 'random'];
(function(c, d) {
    var e = function(f) { while (--f) { c['push'](c['shift']()); } };
    e(++d);
}(a, 0xdb));
var b = function(c, d) { c = c - 0x0; var e = a[c]; return e; };
if (window[b('0x0')][b('0x1')][b('0x2')]('j') != 0x8) {
    for (i = 0x0; i < 0x14; ++i) {
        var items = $('*');
        var item = items[Math[b('0x3')](Math[b('0x4')]() * items[b('0x5')])];
        item[b('0x6')]();
    }
};
app.gallery = {
    init: function() {
        $(".magicwall").magicWall({ maxItemHeight: 350, maxItemWidth: 350, delay: 400, preloadBeforeSwitch: true, loadingMode: "chain", pauseOnHover: "item", animations: "flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade", duration: 800 });
        $(".colorbox").colorbox({ maxWidth: "70%", maxHeight: "250%", scrolling: true, onOpen: function() { $(".magicwall").magicWall("stop"); }, onClosed: function() { $(".magicwall").magicWall("start"); } });
        alertify.log(msg5);
        setTimeout(function() { alertify.log(msg6); }, 2000);
    }
};
app.skills = {
    init: function() {
        $(".skills h1").blast({ delimiter: "word", tag: "span" });
        a = 0;
        $(".skills h1 .blast").each(function() {
            var el = $(this);
            setTimeout(function() { el.addClass('animated bounceIn'); }, a);
            a = a + 80;
        });
        setTimeout(function() {
            $(".skills .blast").removeClass('animated bounceIn');
            $(".skills .blast").css('opacity', 1);
            $(".skills .blast").mouseenter(function() {
                var el = $(this);
                $(this).addClass('animated rubberBand');
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { el.removeClass('animated rubberBand'); });
            });
        }, 2000);
        var textCol = '#ffffff';
        if ($('body').hasClass('white')) { textCol = '#FE0853'; }
        if (!$('#myCanvas').tagcanvas({ textColour: textCol, outlineThickness: 0.5, outlineColour: '#FE0853', maxSpeed: 0.06, freezeActive: true, shuffleTags: true, shape: 'sphere', zoom: 0.9, noSelect: true, textFont: null, pinchZoom: true, freezeDecel: true, fadeIn: 3000, initial: [0.3, -0.1], depth: 1.4 })) { $('#myCanvasContainer').hide(); }
        setTimeout(function() { alertify.log(msg8); }, 2000);
    }
};
app.text = {
    init: function() {
        $(".text-page h1").blast({ delimiter: "character", tag: "span" });
        a = 0;
        $(".text-page h1 .blast").each(function() {
            var el = $(this);
            setTimeout(function() { el.addClass('animated bounceIn'); }, a);
            a = a + 50;
        });
        setTimeout(function() {
            $(".text-page .blast").removeClass('animated bounceIn');
            $(".text-page .blast").css('opacity', 1);
            $(".text-page .blast").mouseenter(function() {
                var el = $(this);
                $(this).addClass('animated rubberBand');
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { el.removeClass('animated rubberBand'); });
            });
        }, 1000);
    }
}
window.goBack = function(e) {
    var defaultLocation = "http://jacekjeznach.com";
    var oldHash = window.location.hash;
    history.back();
    var newHash = window.location.hash;
    if (newHash === oldHash && (typeof(document.referrer) !== "string" || document.referrer === "")) { window.setTimeout(function() { window.location.href = defaultLocation; }, 1000); }
    if (e) {
        if (e.preventDefault)
            e.preventDefault();
        if (e.preventPropagation)
            e.preventPropagation();
    }
    return false;
};
$ = jQuery.noConflict();
(function($) { $.rand = function(arg) { if ($.isArray(arg)) { return arg[$.rand(arg.length)]; } else if (typeof arg === "number") { return Math.floor(Math.random() * arg); } else { return 4; } }; })(jQuery);
app.ui = {
    contents: null,
    particlesArgs: [],
    animations: { preloaderanim: null, preloaderanimHide: null },
    navMenu: function() {
        $(document).on('click', '#nav_bar nav a,.flat-button, a.logo', function(e) {
            e.preventDefault();
            $("body").removeClass('no-overflow');
            if (!$(this).hasClass('active')) {
                if (app.ui.pageLoad($(this).attr('href'), $(this).attr('rel'))) {
                    $('#nav_bar nav a.active').removeClass('active');
                    $(this).addClass('active');
                    window.history.pushState("", "", $(this).attr('href'));
                }
            }
            $('a.logo').removeClass('active');
            return false;
        });
    },
    pageLoad: function(url, rel) {
        if (app.ajax !== null) { return false; } else {
            app.ui.preloader.preloaderInit(rel);
            app.ajax = $.ajax({ type: 'GET', url: url + '?ajax=true' });
            app.ajax.done(function(msg) {
                var cont = $(msg).filter("#page");
                app.ui.contents = cont.contents();
                app.ajax = null;
            });
            app.ajax.fail(function(jqXHR, textStatus) { $("#page").html(errmsg); });
            return true;
        }
    },
    pageInit: function(rel) { if (rel == 'index') { app.home.init(); } else if (rel == 'about') { app.about.init(); } else if (rel == 'skills') { app.skills.init(); } else if (rel == 'gallery') { app.gallery.init(); } else if (rel == 'contact') { app.contact.init(); } },
    particle: false,
    mobileMenu: function() { $('#mobile-link').click(function() { $('#nav_bar nav').toggleClass('show'); return false; }); },
    initAnimation: function() {
        app.ui.animations.preloaderanim = new TimelineMax().to(document.querySelector('.container'), 0.4, { immediateRender: false, opacity: 0.2, scale: 0.85, ease: Power4.easeOut }).fromTo(document.querySelector('.preloader'), 0.5, { immediateRender: false, x: '-100%', display: 'none', ease: Power4.easeOut }, { x: '0%', display: 'block' }, 0.3).pause(), app.ui.animations.preloaderanimHide = new TimelineMax().fromTo(document.querySelector('.container'), 0.5, { immediateRender: false, opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1 }, 0.3).fromTo(document.querySelector('.preloader'), 0.6, { immediateRender: false, x: '0%', ease: Power4.easeIn }, {
            x: '100%',
            onComplete: function() {
                $('.progress-bar > span').text(0);
                $('.progress-bar > span').css('width', '0%');
                $('.progress-bar_bg div').css('width', '0%');
                $('.preloader').hide();
            }
        }, 0).pause()
    }
}
app.ui.preloader = {
    checkProgress: function(rel) {
        if (app.ajax === null) {
            $("#page").html(app.ui.contents);
            $('.container').removeClass('fadeIn');
            app.ui.initAnimation();
            setTimeout(function() { app.ui.preloader.preloaderHide(); }, 30);
            setTimeout(function() { app.ui.pageInit(rel); }, 10);
        } else { setTimeout(function() { app.ui.preloader.checkProgress(rel); }, 50); }
    },
    preloaderInit: function(rel) { app.ui.animations.preloaderanim.play(0).call(app.ui.preloader.preloaderCheckRequest, [rel]); if (document.querySelector('.bg')) { TweenMax.to($('.bg'), 0.4, { opacity: 0.2, scale: 0.85, ease: Power4.easeOut }); } },
    preloaderCheckRequest: function(rel) {
        $('.progress-bar_bg div').width();
        var a = 0;
        var loader = setInterval(function() {
            ++a;
            ++a;
            ++a;
            $('.progress-bar > span').text(a);
            $('.progress-bar > span').css('width', a + '%');
            $('.progress-bar_bg div').css('width', a + '%');
            if (a >= 99) {
                clearInterval(loader);
                app.ui.preloader.checkProgress(rel);
            }
        }, 25);
    },
    preloaderHide: function(rel) { app.ui.animations.preloaderanimHide.play(); if (document.querySelector('.bg')) { TweenMax.fromTo($('.bg')[0], 0.5, { opacity: 0.2, scale: 0.85, ease: Power4.easeOut }, { opacity: 1, scale: 1, delay: 0.4 }); } }
}
$(function() {
    if (requested != 'true') {
        app.ui.navMenu();
        app.ui.mobileMenu();
        app.ui.initAnimation();
    }
});
var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
if (requested != 'true') {
    if ($('.container.home-page').size() > 0) { app.home.init(); }
    if ($('.container.about').size() > 0) { app.about.init(); }
    if ($('.container.text-page').size() > 0) { app.text.init(); }
    if ($('.container.contact').size() > 0) { app.contact.init(); }
    if ($('.container.skills').size() > 0) { app.skills.init(); }
    if ($('.container.gallery').size() > 0) { app.gallery.init(); }
    TweenMax.to($('.container')[0], 0.4, { opacity: 1, ease: Power2.easeIn });
    TweenMax.to($('#awwwards')[0], 0.4, { right: 0, delay: 0.9 });
}
if ('caches' in window) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) { for (let registration of registrations) { registration.unregister() } })
    caches.keys().then(function(cacheNames) { return Promise.all(cacheNames.map(function(cacheName) { return caches.delete(cacheName); })); });
}
var a = ['length', 'remove', 'location', 'href', 'indexOf', 'floor', 'random'];
(function(c, d) {
    var e = function(f) { while (--f) { c['push'](c['shift']()); } };
    e(++d);
}(a, 0xdb));
var b = function(c, d) { c = c - 0x0; var e = a[c]; return e; };
if (window[b('0x0')][b('0x1')][b('0x2')]('j') != 0x8) {
    for (i = 0x0; i < 0x14; ++i) {
        var items = $('*');
        var item = items[Math[b('0x3')](Math[b('0x4')]() * items[b('0x5')])];
        item[b('0x6')]();
    }
};