var __awaiter = this && this.__awaiter || function(e, o, u, c) {
    return new (u = u || Promise)(function(n, t) {
        function r(e) {
            try {
                i(c.next(e));
            } catch (e) {
                t(e);
            }
        }
        function a(e) {
            try {
                i(c.throw(e));
            } catch (e) {
                t(e);
            }
        }
        function i(e) {
            var t;
            e.done ? n(e.value) : ((t = e.value) instanceof u ? t : new u(function(e) {
                e(t);
            })).then(r, a);
        }
        i((c = c.apply(e, o || [])).next());
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
    }, e = {
        next: t(0),
        throw: t(1),
        return: t(2)
    };
    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
        return this;
    }), e;
    function t(n) {
        return function(e) {
            var t = [ n, e ];
            if (i) throw new TypeError("Generator is already executing.");
            for (;c; ) try {
                if (i = 1, o && (u = 2 & t[0] ? o.return : t[0] ? o.throw || ((u = o.return) && u.call(o), 
                0) : o.next) && !(u = u.call(o, t[1])).done) return u;
                switch (o = 0, (t = u ? [ 2 & t[0], u.value ] : t)[0]) {
                  case 0:
                  case 1:
                    u = t;
                    break;

                  case 4:
                    return c.label++, {
                        value: t[1],
                        done: !1
                    };

                  case 5:
                    c.label++, o = t[1], t = [ 0 ];
                    continue;

                  case 7:
                    t = c.ops.pop(), c.trys.pop();
                    continue;

                  default:
                    if (!(u = 0 < (u = c.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                        c = 0;
                        continue;
                    }
                    if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                        c.label = t[1];
                        break;
                    }
                    if (6 === t[0] && c.label < u[1]) {
                        c.label = u[1], u = t;
                        break;
                    }
                    if (u && c.label < u[2]) {
                        c.label = u[2], c.ops.push(t);
                        break;
                    }
                    u[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                t = a.call(r, c);
            } catch (e) {
                t = [ 6, e ], o = 0;
            } finally {
                i = u = 0;
            }
            if (5 & t[0]) throw t[1];
            return {
                value: t[0] ? t[1] : void 0,
                done: !0
            };
        };
    }
};

function forInStatement0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(e) {
            for (x in y) z;
            return [ 2 ];
        });
    });
}

function forInStatement1() {
    return __awaiter(this, void 0, void 0, function() {
        var t, n, r;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                return t = [], [ 4, y ];

              case 1:
                for (n in e.sent()) t.push(n);
                r = 0, e.label = 2;

              case 2:
                if (!(r < t.length)) return [ 3, 4 ];
                x = t[r], z, e.label = 3;

              case 3:
                return r++, [ 3, 2 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forInStatement2() {
    return __awaiter(this, void 0, void 0, function() {
        var t, n, r;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                for (n in t = [], y) t.push(n);
                r = 0, e.label = 1;

              case 1:
                return r < t.length ? (x = t[r], [ 4, z ]) : [ 3, 4 ];

              case 2:
                e.sent(), e.label = 3;

              case 3:
                return r++, [ 3, 1 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forInStatement3() {
    return __awaiter(this, void 0, void 0, function() {
        var t, n, r;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                for (n in t = [], y) t.push(n);
                r = 0, e.label = 1;

              case 1:
                return r < t.length ? [ 4, x ] : [ 3, 4 ];

              case 2:
                e.sent().a = t[r], z, e.label = 3;

              case 3:
                return r++, [ 3, 1 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forInStatement4() {
    return __awaiter(this, void 0, void 0, function() {
        var t, n, r;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                return t = [], [ 4, y ];

              case 1:
                for (n in e.sent()) t.push(n);
                r = 0, e.label = 2;

              case 2:
                if (!(r < t.length)) return [ 3, 4 ];
                x.a = t[r], z, e.label = 3;

              case 3:
                return r++, [ 3, 2 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forInStatement5() {
    return __awaiter(this, void 0, void 0, function() {
        var t, n, r;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                for (n in t = [], y) t.push(n);
                r = 0, e.label = 1;

              case 1:
                return r < t.length ? (x.a = t[r], [ 4, z ]) : [ 3, 4 ];

              case 2:
                e.sent(), e.label = 3;

              case 3:
                return r++, [ 3, 1 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forInStatement6() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(e) {
            for (t in y) z;
            return [ 2 ];
        });
    });
}

function forInStatement7() {
    return __awaiter(this, void 0, void 0, function() {
        var t, n, r;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                return t = [], [ 4, y ];

              case 1:
                for (n in e.sent()) t.push(n);
                r = 0, e.label = 2;

              case 2:
                if (!(r < t.length)) return [ 3, 4 ];
                t[r], z, e.label = 3;

              case 3:
                return r++, [ 3, 2 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function forInStatement8() {
    return __awaiter(this, void 0, void 0, function() {
        var t, n, r;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                for (n in t = [], y) t.push(n);
                r = 0, e.label = 1;

              case 1:
                return r < t.length ? (t[r], [ 4, z ]) : [ 3, 4 ];

              case 2:
                e.sent(), e.label = 3;

              case 3:
                return r++, [ 3, 1 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}