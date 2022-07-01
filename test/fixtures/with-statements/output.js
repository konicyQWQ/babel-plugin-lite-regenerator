var __awaiter = this && this.__awaiter || function(t, o, u, c) {
    return new (u = u || Promise)(function(n, e) {
        function a(t) {
            try {
                i(c.next(t));
            } catch (t) {
                e(t);
            }
        }
        function r(t) {
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
            })).then(a, r);
        }
        i((c = c.apply(t, o || [])).next());
    });
}, __generator = this && this.__generator || function(a, r) {
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
                e = r.call(a, c);
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

function withStatement0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
            with (x) y;
            return [ 2 ];
        });
    });
}

function withStatement1() {
    return __awaiter(this, void 0, void 0, function() {
        var _t;
        return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [ 4, x ];

              case 1:
                _t = _a2.sent(), _a2.label = 2;

              case 2:
                with (_t) y;
                _a2.label = 3;

              case 3:
                return [ 2 ];
            }
        });
    });
}

function withStatement2() {
    return __awaiter(this, void 0, void 0, function() {
        var _t2;
        return __generator(this, function(_a3) {
            switch (_a3.label) {
              case 0:
                _t2 = x, _a3.label = 1;

              case 1:
                with (_t2) return a, [ 4, y ];

              case 2:
                with (_t2) _a3.sent(), b;
                _a3.label = 3;

              case 3:
                return [ 2 ];
            }
        });
    });
}

function withStatement3() {
    return __awaiter(this, void 0, void 0, function() {
        var _t3, _t4;
        return __generator(this, function(_a4) {
            switch (_a4.label) {
              case 0:
                _t3 = x, _a4.label = 1;

              case 1:
                with (_t3) _t4 = z;
                _a4.label = 2;

              case 2:
                with (_t3) with (_t4) return a, [ 4, y ];

              case 3:
                with (_t3) with (_t4) _a4.sent(), b;
                _a4.label = 4;

              case 4:
                return [ 2 ];
            }
        });
    });
}