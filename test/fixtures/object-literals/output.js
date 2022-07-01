var __awaiter = this && this.__awaiter || function(t, o, u, c) {
    return new (u = u || Promise)(function(r, e) {
        function n(t) {
            try {
                i(c.next(t));
            } catch (t) {
                e(t);
            }
        }
        function a(t) {
            try {
                i(c.throw(t));
            } catch (t) {
                e(t);
            }
        }
        function i(t) {
            var e;
            t.done ? r(t.value) : ((e = t.value) instanceof u ? e : new u(function(t) {
                t(e);
            })).then(n, a);
        }
        i((c = c.apply(t, o || [])).next());
    });
}, __generator = this && this.__generator || function(n, a) {
    var i, o, u, c = {
        label: 0,
        sent: function() {
            if (1 & u[0]) throw u[1];
            return u[1];
        },
        trys: [],
        ops: []
    }, t = {
        next: e(0),
        throw: e(1),
        return: e(2)
    };
    return "function" == typeof Symbol && (t[Symbol.iterator] = function() {
        return this;
    }), t;
    function e(r) {
        return function(t) {
            var e = [ r, t ];
            if (i) throw new TypeError("Generator is already executing.");
            for (;c; ) try {
                if (i = 1, o && (u = 2 & e[0] ? o.return : e[0] ? o.throw || ((u = o.return) && u.call(o), 
                0) : o.next) && !(u = u.call(o, e[1])).done) return u;
                switch (o = 0, (e = u ? [ 2 & e[0], u.value ] : e)[0]) {
                  case 0:
                  case 1:
                    u = e;
                    break;

                  case 4:
                    return c.label++, {
                        value: e[1],
                        done: !1
                    };

                  case 5:
                    c.label++, o = e[1], e = [ 0 ];
                    continue;

                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;

                  default:
                    if (!(u = 0 < (u = c.trys).length && u[u.length - 1]) && (6 === e[0] || 2 === e[0])) {
                        c = 0;
                        continue;
                    }
                    if (3 === e[0] && (!u || e[1] > u[0] && e[1] < u[3])) {
                        c.label = e[1];
                        break;
                    }
                    if (6 === e[0] && c.label < u[1]) {
                        c.label = u[1], u = e;
                        break;
                    }
                    if (u && c.label < u[2]) {
                        c.label = u[2], c.ops.push(e);
                        break;
                    }
                    u[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = a.call(n, c);
            } catch (t) {
                e = [ 6, t ], o = 0;
            } finally {
                i = u = 0;
            }
            if (5 & e[0]) throw e[1];
            return {
                value: e[0] ? e[1] : void 0,
                done: !0
            };
        };
    }
};

function objectLiteral0() {
    return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = {}, [ 4, y ];

              case 1:
                return x = (e.a = t.sent(), e.b = z, e), [ 2 ];
            }
        });
    });
}

function objectLiteral1() {
    return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = {
                    a: y
                }, [ 4, z ];

              case 1:
                return x = (e.b = t.sent(), e), [ 2 ];
            }
        });
    });
}

function objectLiteral2() {
    return __awaiter(this, void 0, void 0, function() {
        var e, r;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = {}, [ 4, a ];

              case 1:
                return r = t.sent(), x = (e[r] = y, e.b = z, e), [ 2 ];
            }
        });
    });
}

function objectLiteral3() {
    return __awaiter(this, void 0, void 0, function() {
        var e, r;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = {}, r = a, [ 4, y ];

              case 1:
                return x = (e[r] = t.sent(), e.b = z, e), [ 2 ];
            }
        });
    });
}

function objectLiteral4() {
    return __awaiter(this, void 0, void 0, function() {
        var e, r;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = {}, [ 4, y ];

              case 1:
                return r = b, x = (e.a = t.sent(), e[r] = z, e), [ 2 ];
            }
        });
    });
}

function objectLiteral5() {
    return __awaiter(this, void 0, void 0, function() {
        var e, r;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = {
                    a: y
                }, [ 4, b ];

              case 1:
                return r = t.sent(), x = (e[r] = z, e), [ 2 ];
            }
        });
    });
}

function objectLiteral6() {
    return __awaiter(this, void 0, void 0, function() {
        var e, r;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = {
                    a: y
                }, r = b, [ 4, z ];

              case 1:
                return x = (e[r] = t.sent(), e), [ 2 ];
            }
        });
    });
}