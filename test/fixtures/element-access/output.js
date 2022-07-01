var __awaiter = this && this.__awaiter || function(e, o, c, u) {
    return new (c = c || Promise)(function(n, t) {
        function r(e) {
            try {
                a(u.next(e));
            } catch (e) {
                t(e);
            }
        }
        function i(e) {
            try {
                a(u.throw(e));
            } catch (e) {
                t(e);
            }
        }
        function a(e) {
            var t;
            e.done ? n(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                e(t);
            })).then(r, i);
        }
        a((u = u.apply(e, o || [])).next());
    });
}, __generator = this && this.__generator || function(r, i) {
    var a, o, c, u = {
        label: 0,
        sent: function() {
            if (1 & c[0]) throw c[1];
            return c[1];
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
            if (a) throw new TypeError("Generator is already executing.");
            for (;u; ) try {
                if (a = 1, o && (c = 2 & t[0] ? o.return : t[0] ? o.throw || ((c = o.return) && c.call(o), 
                0) : o.next) && !(c = c.call(o, t[1])).done) return c;
                switch (o = 0, (t = c ? [ 2 & t[0], c.value ] : t)[0]) {
                  case 0:
                  case 1:
                    c = t;
                    break;

                  case 4:
                    return u.label++, {
                        value: t[1],
                        done: !1
                    };

                  case 5:
                    u.label++, o = t[1], t = [ 0 ];
                    continue;

                  case 7:
                    t = u.ops.pop(), u.trys.pop();
                    continue;

                  default:
                    if (!(c = 0 < (c = u.trys).length && c[c.length - 1]) && (6 === t[0] || 2 === t[0])) {
                        u = 0;
                        continue;
                    }
                    if (3 === t[0] && (!c || t[1] > c[0] && t[1] < c[3])) {
                        u.label = t[1];
                        break;
                    }
                    if (6 === t[0] && u.label < c[1]) {
                        u.label = c[1], c = t;
                        break;
                    }
                    if (c && u.label < c[2]) {
                        u.label = c[2], u.ops.push(t);
                        break;
                    }
                    c[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                t = i.call(r, u);
            } catch (e) {
                t = [ 6, e ], o = 0;
            } finally {
                a = c = 0;
            }
            if (5 & t[0]) throw t[1];
            return {
                value: t[0] ? t[1] : void 0,
                done: !0
            };
        };
    }
};

function elementAccess0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                return [ 4, x[y] ];

              case 1:
                return z = e.sent(), [ 2 ];
            }
        });
    });
}

function elementAccess1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return z = e.sent()[y], [ 2 ];
            }
        });
    });
}

function elementAccess2() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                return t = x, [ 4, y ];

              case 1:
                return z = t[e.sent()], [ 2 ];
            }
        });
    });
}