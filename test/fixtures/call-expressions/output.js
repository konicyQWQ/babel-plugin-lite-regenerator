var __awaiter = this && this.__awaiter || function(t, o, c, s) {
    return new (c = c || Promise)(function(e, n) {
        function r(t) {
            try {
                a(s.next(t));
            } catch (t) {
                n(t);
            }
        }
        function i(t) {
            try {
                a(s.throw(t));
            } catch (t) {
                n(t);
            }
        }
        function a(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof c ? n : new c(function(t) {
                t(n);
            })).then(r, i);
        }
        a((s = s.apply(t, o || [])).next());
    });
}, __generator = this && this.__generator || function(r, i) {
    var a, o, c, s = {
        label: 0,
        sent: function() {
            if (1 & c[0]) throw c[1];
            return c[1];
        },
        trys: [],
        ops: []
    }, t = {
        next: n(0),
        throw: n(1),
        return: n(2)
    };
    return "function" == typeof Symbol && (t[Symbol.iterator] = function() {
        return this;
    }), t;
    function n(e) {
        return function(t) {
            var n = [ e, t ];
            if (a) throw new TypeError("Generator is already executing.");
            for (;s; ) try {
                if (a = 1, o && (c = 2 & n[0] ? o.return : n[0] ? o.throw || ((c = o.return) && c.call(o), 
                0) : o.next) && !(c = c.call(o, n[1])).done) return c;
                switch (o = 0, (n = c ? [ 2 & n[0], c.value ] : n)[0]) {
                  case 0:
                  case 1:
                    c = n;
                    break;

                  case 4:
                    return s.label++, {
                        value: n[1],
                        done: !1
                    };

                  case 5:
                    s.label++, o = n[1], n = [ 0 ];
                    continue;

                  case 7:
                    n = s.ops.pop(), s.trys.pop();
                    continue;

                  default:
                    if (!(c = 0 < (c = s.trys).length && c[c.length - 1]) && (6 === n[0] || 2 === n[0])) {
                        s = 0;
                        continue;
                    }
                    if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                        s.label = n[1];
                        break;
                    }
                    if (6 === n[0] && s.label < c[1]) {
                        s.label = c[1], c = n;
                        break;
                    }
                    if (c && s.label < c[2]) {
                        s.label = c[2], s.ops.push(n);
                        break;
                    }
                    c[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                n = i.call(r, s);
            } catch (t) {
                n = [ 6, t ], o = 0;
            } finally {
                a = c = 0;
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            };
        };
    }
};

function callExpression0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x(y, z) ];

              case 1:
                return t.sent(), [ 2 ];
            }
        });
    });
}

function callExpression1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent()(y, z), [ 2 ];
            }
        });
    });
}

function callExpression2() {
    return __awaiter(this, void 0, void 0, function() {
        var n;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return n = x, [ 4, y ];

              case 1:
                return n.apply(void 0, [ t.sent(), z ]), [ 2 ];
            }
        });
    });
}

function callExpression3() {
    return __awaiter(this, void 0, void 0, function() {
        var n, e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return n = x, e = [ y ], [ 4, z ];

              case 1:
                return n.apply(void 0, e.concat([ t.sent() ])), [ 2 ];
            }
        });
    });
}

function callExpression10() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x.a(y, z) ];

              case 1:
                return t.sent(), [ 2 ];
            }
        });
    });
}

function callExpression11() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x.a ];

              case 1:
                return t.sent()(y, z), [ 2 ];
            }
        });
    });
}

function callExpression12() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent().a(y, z), [ 2 ];
            }
        });
    });
}

function callExpression13() {
    return __awaiter(this, void 0, void 0, function() {
        var n, e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = (n = x).a, [ 4, y ];

              case 1:
                return e.apply(n, [ t.sent(), z ]), [ 2 ];
            }
        });
    });
}

function callExpression14() {
    return __awaiter(this, void 0, void 0, function() {
        var n, e, r;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = (n = x).a, r = [ y ], [ 4, z ];

              case 1:
                return e.apply(n, r.concat([ t.sent() ])), [ 2 ];
            }
        });
    });
}

function callExpression15() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x[a](y, z) ];

              case 1:
                return t.sent(), [ 2 ];
            }
        });
    });
}

function callExpression16() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x[a] ];

              case 1:
                return t.sent()(y, z), [ 2 ];
            }
        });
    });
}

function callExpression17() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent()[a](y, z), [ 2 ];
            }
        });
    });
}

function callExpression18() {
    return __awaiter(this, void 0, void 0, function() {
        var n;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return n = x, [ 4, a ];

              case 1:
                return n[t.sent()](y, z), [ 2 ];
            }
        });
    });
}

function callExpression19() {
    return __awaiter(this, void 0, void 0, function() {
        var n, e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = (n = x)[a], [ 4, y ];

              case 1:
                return e.apply(n, [ t.sent(), z ]), [ 2 ];
            }
        });
    });
}

function callExpression20() {
    return __awaiter(this, void 0, void 0, function() {
        var n, e, r;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = (n = x)[a], r = [ y ], [ 4, z ];

              case 1:
                return e.apply(n, r.concat([ t.sent() ])), [ 2 ];
            }
        });
    });
}