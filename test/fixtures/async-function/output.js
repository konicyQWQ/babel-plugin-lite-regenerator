var __awaiter = this && this.__awaiter || function(t, a, u, c) {
    return new (u = u || Promise)(function(n, e) {
        function r(t) {
            try {
                o(c.next(t));
            } catch (t) {
                e(t);
            }
        }
        function i(t) {
            try {
                o(c.throw(t));
            } catch (t) {
                e(t);
            }
        }
        function o(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof u ? e : new u(function(t) {
                t(e);
            })).then(r, i);
        }
        o((c = c.apply(t, a || [])).next());
    });
}, __generator = this && this.__generator || function(r, i) {
    var o, a, u, c = {
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
            if (o) throw new TypeError("Generator is already executing.");
            for (;c; ) try {
                if (o = 1, a && (u = 2 & e[0] ? a.return : e[0] ? a.throw || ((u = a.return) && u.call(a), 
                0) : a.next) && !(u = u.call(a, e[1])).done) return u;
                switch (a = 0, (e = u ? [ 2 & e[0], u.value ] : e)[0]) {
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
                    c.label++, a = e[1], e = [ 0 ];
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
                e = i.call(r, c);
            } catch (t) {
                e = [ 6, t ], a = 0;
            } finally {
                o = u = 0;
            }
            if (5 & e[0]) throw e[1];
            return {
                value: e[0] ? e[1] : void 0,
                done: !0
            };
        };
    }
};

function empty() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [ 2 ];
        });
    });
}

function singleAwait() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent(), [ 2 ];
            }
        });
    });
}