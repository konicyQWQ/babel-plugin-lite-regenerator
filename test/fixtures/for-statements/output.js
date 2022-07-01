var __awaiter = this && this.__awaiter || function(t, o, u, c) {
    return new (u = u || Promise)(function(n, e) {
        function r(t) {
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
            t.done ? n(t.value) : ((e = t.value) instanceof u ? e : new u(function(t) {
                t(e);
            })).then(r, a);
        }
        i((c = c.apply(t, o || [])).next());
    });
}, __generator = this && this.__generator || function(r, a) {
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
    function e(n) {
        return function(t) {
            var e = [ n, t ];
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
                e = a.call(r, c);
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

function forStatement0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            for (x; y; z) a;
            return [ 2 ];
        });
    });
}

function forStatement1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                if (!y) return [ 3, 4 ];
                a, t.label = 3;

              case 3:
                return z, [ 3, 2 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forStatement2() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                x, t.label = 1;

              case 1:
                return [ 4, y ];

              case 2:
                if (!t.sent()) return [ 3, 4 ];
                a, t.label = 3;

              case 3:
                return z, [ 3, 1 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forStatement3() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                x, t.label = 1;

              case 1:
                if (!y) return [ 3, 4 ];
                a, t.label = 2;

              case 2:
                return [ 4, z ];

              case 3:
                return t.sent(), [ 3, 1 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forStatement4() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                x, t.label = 1;

              case 1:
                return y ? [ 4, a ] : [ 3, 4 ];

              case 2:
                t.sent(), t.label = 3;

              case 3:
                return z, [ 3, 1 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forStatement5() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            for (;y; z) a;
            return [ 2 ];
        });
    });
}

function forStatement6() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            for (x; y; z) a;
            return [ 2 ];
        });
    });
}