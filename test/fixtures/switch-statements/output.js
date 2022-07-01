var __awaiter = this && this.__awaiter || function(t, c, u, s) {
    return new (u = u || Promise)(function(r, e) {
        function n(t) {
            try {
                i(s.next(t));
            } catch (t) {
                e(t);
            }
        }
        function a(t) {
            try {
                i(s.throw(t));
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
        i((s = s.apply(t, c || [])).next());
    });
}, __generator = this && this.__generator || function(n, a) {
    var i, c, u, s = {
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
            for (;s; ) try {
                if (i = 1, c && (u = 2 & e[0] ? c.return : e[0] ? c.throw || ((u = c.return) && u.call(c), 
                0) : c.next) && !(u = u.call(c, e[1])).done) return u;
                switch (c = 0, (e = u ? [ 2 & e[0], u.value ] : e)[0]) {
                  case 0:
                  case 1:
                    u = e;
                    break;

                  case 4:
                    return s.label++, {
                        value: e[1],
                        done: !1
                    };

                  case 5:
                    s.label++, c = e[1], e = [ 0 ];
                    continue;

                  case 7:
                    e = s.ops.pop(), s.trys.pop();
                    continue;

                  default:
                    if (!(u = 0 < (u = s.trys).length && u[u.length - 1]) && (6 === e[0] || 2 === e[0])) {
                        s = 0;
                        continue;
                    }
                    if (3 === e[0] && (!u || e[1] > u[0] && e[1] < u[3])) {
                        s.label = e[1];
                        break;
                    }
                    if (6 === e[0] && s.label < u[1]) {
                        s.label = u[1], u = e;
                        break;
                    }
                    if (u && s.label < u[2]) {
                        s.label = u[2], s.ops.push(e);
                        break;
                    }
                    u[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                e = a.call(n, s);
            } catch (t) {
                e = [ 6, t ], c = 0;
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

function switchStatement0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return x === y ? a : b, [ 2 ];
        });
    });
}

function switchStatement1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent() === y ? a : b, [ 2 ];
            }
        });
    });
}

function switchStatement2() {
    return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = x, [ 4, y ];

              case 1:
                return e === t.sent() ? [ 3, 2 ] : [ 3, 3 ];

              case 2:
                return a, [ 3, 4 ];

              case 3:
                return b, [ 3, 4 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function switchStatement3() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x === y ? [ 3, 1 ] : [ 3, 3 ];

              case 1:
                return [ 4, a ];

              case 2:
                return t.sent(), [ 3, 4 ];

              case 3:
                return b, [ 3, 4 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function switchStatement4() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x === y ? [ 3, 1 ] : [ 3, 2 ];

              case 1:
                return a, [ 3, 4 ];

              case 2:
                return [ 4, b ];

              case 3:
                return t.sent(), [ 3, 4 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function switchStatement5() {
    return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return (e = x) === y ? [ 3, 2 ] : [ 4, z ];

              case 1:
                return e === t.sent() ? [ 3, 3 ] : [ 3, 4 ];

              case 2:
                return a, [ 3, 4 ];

              case 3:
                return b, [ 3, 4 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function switchStatement6() {
    return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return e = x, [ 4, y ];

              case 1:
                switch (e) {
                  case t.sent():
                    return [ 3, 3 ];

                  case z:
                    return [ 3, 4 ];
                }
                return [ 3, 2 ];

              case 2:
                return c, [ 3, 5 ];

              case 3:
                return a, [ 3, 5 ];

              case 4:
                return b, [ 3, 5 ];

              case 5:
                return [ 2 ];
            }
        });
    });
}

function switchStatement7() {
    return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return (e = x) === y ? [ 3, 3 ] : [ 4, z ];

              case 1:
                return e === t.sent() ? [ 3, 4 ] : [ 3, 2 ];

              case 2:
                return c, [ 3, 5 ];

              case 3:
                return a, [ 3, 5 ];

              case 4:
                return b, [ 3, 5 ];

              case 5:
                return [ 2 ];
            }
        });
    });
}

function switchStatement8() {
    return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return (e = x) === y ? [ 3, 3 ] : [ 4, z ];

              case 1:
                return e === t.sent() ? [ 3, 4 ] : [ 3, 2 ];

              case 2:
                c, t.label = 3;

              case 3:
                return a, [ 3, 5 ];

              case 4:
                return b, [ 3, 5 ];

              case 5:
                return [ 2 ];
            }
        });
    });
}