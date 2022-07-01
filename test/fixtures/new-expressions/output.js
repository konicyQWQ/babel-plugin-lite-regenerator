var __awaiter = this && this.__awaiter || function(n, o, s, u) {
    return new (s = s || Promise)(function(t, e) {
        function r(n) {
            try {
                a(u.next(n));
            } catch (n) {
                e(n);
            }
        }
        function i(n) {
            try {
                a(u.throw(n));
            } catch (n) {
                e(n);
            }
        }
        function a(n) {
            var e;
            n.done ? t(n.value) : ((e = n.value) instanceof s ? e : new s(function(n) {
                n(e);
            })).then(r, i);
        }
        a((u = u.apply(n, o || [])).next());
    });
}, __generator = this && this.__generator || function(r, i) {
    var a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
        },
        trys: [],
        ops: []
    }, n = {
        next: e(0),
        throw: e(1),
        return: e(2)
    };
    return "function" == typeof Symbol && (n[Symbol.iterator] = function() {
        return this;
    }), n;
    function e(t) {
        return function(n) {
            var e = [ t, n ];
            if (a) throw new TypeError("Generator is already executing.");
            for (;u; ) try {
                if (a = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 
                0) : o.next) && !(s = s.call(o, e[1])).done) return s;
                switch (o = 0, (e = s ? [ 2 & e[0], s.value ] : e)[0]) {
                  case 0:
                  case 1:
                    s = e;
                    break;

                  case 4:
                    return u.label++, {
                        value: e[1],
                        done: !1
                    };

                  case 5:
                    u.label++, o = e[1], e = [ 0 ];
                    continue;

                  case 7:
                    e = u.ops.pop(), u.trys.pop();
                    continue;

                  default:
                    if (!(s = 0 < (s = u.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                        u = 0;
                        continue;
                    }
                    if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                        u.label = e[1];
                        break;
                    }
                    if (6 === e[0] && u.label < s[1]) {
                        u.label = s[1], s = e;
                        break;
                    }
                    if (s && u.label < s[2]) {
                        u.label = s[2], u.ops.push(e);
                        break;
                    }
                    s[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                e = i.call(r, u);
            } catch (n) {
                e = [ 6, n ], o = 0;
            } finally {
                a = s = 0;
            }
            if (5 & e[0]) throw e[1];
            return {
                value: e[0] ? e[1] : void 0,
                done: !0
            };
        };
    }
};

function newExpression0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, new x(y, z) ];

              case 1:
                return n.sent(), [ 2 ];
            }
        });
    });
}

function newExpression1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return new (n.sent())(y, z), [ 2 ];
            }
        });
    });
}

function newExpression2() {
    return __awaiter(this, void 0, void 0, function() {
        var e, t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = (e = x).bind, [ 4, y ];

              case 1:
                return new (t.apply(e, [ void 0, n.sent(), z ]))(), [ 2 ];
            }
        });
    });
}

function newExpression3() {
    return __awaiter(this, void 0, void 0, function() {
        var e, t, r;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = (e = x).bind, r = [ void 0, y ], [ 4, z ];

              case 1:
                return new (t.apply(e, r.concat([ n.sent() ])))(), [ 2 ];
            }
        });
    });
}

function newExpression10() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, new x.a(y, z) ];

              case 1:
                return n.sent(), [ 2 ];
            }
        });
    });
}

function newExpression11() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x.a ];

              case 1:
                return new (n.sent())(y, z), [ 2 ];
            }
        });
    });
}

function newExpression12() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return new (n.sent().a)(y, z), [ 2 ];
            }
        });
    });
}

function newExpression13() {
    return __awaiter(this, void 0, void 0, function() {
        var e, t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = (e = x.a).bind, [ 4, y ];

              case 1:
                return new (t.apply(e, [ void 0, n.sent(), z ]))(), [ 2 ];
            }
        });
    });
}

function newExpression14() {
    return __awaiter(this, void 0, void 0, function() {
        var e, t, r;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = (e = x.a).bind, r = [ void 0, y ], [ 4, z ];

              case 1:
                return new (t.apply(e, r.concat([ n.sent() ])))(), [ 2 ];
            }
        });
    });
}

function newExpression15() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, new x[a](y, z) ];

              case 1:
                return n.sent(), [ 2 ];
            }
        });
    });
}

function newExpression16() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x[a] ];

              case 1:
                return new (n.sent())(y, z), [ 2 ];
            }
        });
    });
}

function newExpression17() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return new (n.sent()[a])(y, z), [ 2 ];
            }
        });
    });
}

function newExpression18() {
    return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return e = x, [ 4, a ];

              case 1:
                return new e[n.sent()](y, z), [ 2 ];
            }
        });
    });
}

function newExpression19() {
    return __awaiter(this, void 0, void 0, function() {
        var e, t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = (e = x[a]).bind, [ 4, y ];

              case 1:
                return new (t.apply(e, [ void 0, n.sent(), z ]))(), [ 2 ];
            }
        });
    });
}

function newExpression20() {
    return __awaiter(this, void 0, void 0, function() {
        var e, t, r;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = (e = x[a]).bind, r = [ void 0, y ], [ 4, z ];

              case 1:
                return new (t.apply(e, r.concat([ n.sent() ])))(), [ 2 ];
            }
        });
    });
}