var __awaiter = this && this.__awaiter || function(t, o, c, u) {
    return new (c = c || Promise)(function(n, e) {
        function r(t) {
            try {
                i(u.next(t));
            } catch (t) {
                e(t);
            }
        }
        function a(t) {
            try {
                i(u.throw(t));
            } catch (t) {
                e(t);
            }
        }
        function i(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof c ? e : new c(function(t) {
                t(e);
            })).then(r, a);
        }
        i((u = u.apply(t, o || [])).next());
    });
}, __generator = this && this.__generator || function(r, a) {
    var i, o, c, u = {
        label: 0,
        sent: function() {
            if (1 & c[0]) throw c[1];
            return c[1];
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
            for (;u; ) try {
                if (i = 1, o && (c = 2 & e[0] ? o.return : e[0] ? o.throw || ((c = o.return) && c.call(o), 
                0) : o.next) && !(c = c.call(o, e[1])).done) return c;
                switch (o = 0, (e = c ? [ 2 & e[0], c.value ] : e)[0]) {
                  case 0:
                  case 1:
                    c = e;
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
                    if (!(c = 0 < (c = u.trys).length && c[c.length - 1]) && (6 === e[0] || 2 === e[0])) {
                        u = 0;
                        continue;
                    }
                    if (3 === e[0] && (!c || e[1] > c[0] && e[1] < c[3])) {
                        u.label = e[1];
                        break;
                    }
                    if (6 === e[0] && u.label < c[1]) {
                        u.label = c[1], c = e;
                        break;
                    }
                    if (c && u.label < c[2]) {
                        u.label = c[2], u.ops.push(e);
                        break;
                    }
                    c[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                e = a.call(r, u);
            } catch (t) {
                e = [ 6, t ], o = 0;
            } finally {
                i = c = 0;
            }
            if (5 & e[0]) throw e[1];
            return {
                value: e[0] ? e[1] : void 0,
                done: !0
            };
        };
    }
};

function propertyAccess0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x.a ];

              case 1:
                return y = t.sent(), [ 2 ];
            }
        });
    });
}

function propertyAccess1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return y = t.sent().a, [ 2 ];
            }
        });
    });
}

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