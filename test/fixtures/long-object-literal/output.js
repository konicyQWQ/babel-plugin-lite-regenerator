var __awaiter = this && this.__awaiter || function(e, a, i, u) {
    return new (i = i || Promise)(function(t, r) {
        function n(e) {
            try {
                s(u.next(e));
            } catch (e) {
                r(e);
            }
        }
        function o(e) {
            try {
                s(u.throw(e));
            } catch (e) {
                r(e);
            }
        }
        function s(e) {
            var r;
            e.done ? t(e.value) : ((r = e.value) instanceof i ? r : new i(function(e) {
                e(r);
            })).then(n, o);
        }
        s((u = u.apply(e, a || [])).next());
    });
}, __generator = this && this.__generator || function(n, o) {
    var s, a, i, u = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
        },
        trys: [],
        ops: []
    }, e = {
        next: r(0),
        throw: r(1),
        return: r(2)
    };
    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
        return this;
    }), e;
    function r(t) {
        return function(e) {
            var r = [ t, e ];
            if (s) throw new TypeError("Generator is already executing.");
            for (;u; ) try {
                if (s = 1, a && (i = 2 & r[0] ? a.return : r[0] ? a.throw || ((i = a.return) && i.call(a), 
                0) : a.next) && !(i = i.call(a, r[1])).done) return i;
                switch (a = 0, (r = i ? [ 2 & r[0], i.value ] : r)[0]) {
                  case 0:
                  case 1:
                    i = r;
                    break;

                  case 4:
                    return u.label++, {
                        value: r[1],
                        done: !1
                    };

                  case 5:
                    u.label++, a = r[1], r = [ 0 ];
                    continue;

                  case 7:
                    r = u.ops.pop(), u.trys.pop();
                    continue;

                  default:
                    if (!(i = 0 < (i = u.trys).length && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                        u = 0;
                        continue;
                    }
                    if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                        u.label = r[1];
                        break;
                    }
                    if (6 === r[0] && u.label < i[1]) {
                        u.label = i[1], i = r;
                        break;
                    }
                    if (i && u.label < i[2]) {
                        u.label = i[2], u.ops.push(r);
                        break;
                    }
                    i[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                r = o.call(n, u);
            } catch (e) {
                r = [ 6, e ], a = 0;
            } finally {
                s = i = 0;
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            };
        };
    }
};

const fooShort = function() {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                return r = {}, [ 4, Promise.resolve(0) ];

              case 1:
                return r.a = e.sent(), [ 4, Promise.resolve(1) ];

              case 2:
                return r.b = e.sent(), [ 4, Promise.resolve(2) ];

              case 3:
                return r.c = e.sent(), [ 4, Promise.resolve(3) ];

              case 4:
                return r.d = e.sent(), [ 4, Promise.resolve(4) ];

              case 5:
                return [ 2, (r.e = e.sent(), r) ];
            }
        });
    });
}, fooLong = function() {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                return r = {}, [ 4, Promise.resolve(0) ];

              case 1:
                return r.a = e.sent(), [ 4, Promise.resolve(1) ];

              case 2:
                return r.b = e.sent(), [ 4, Promise.resolve(2) ];

              case 3:
                return r.c = e.sent(), [ 4, Promise.resolve(3) ];

              case 4:
                return r.d = e.sent(), [ 4, Promise.resolve(4) ];

              case 5:
                return r.e = e.sent(), [ 4, Promise.resolve(5) ];

              case 6:
                return r.f = e.sent(), [ 4, Promise.resolve(6) ];

              case 7:
                return r.g = e.sent(), [ 4, Promise.resolve(7) ];

              case 8:
                return r.h = e.sent(), [ 4, Promise.resolve(8) ];

              case 9:
                return r.i = e.sent(), [ 4, Promise.resolve(9) ];

              case 10:
                return [ 2, (r.j = e.sent(), r) ];
            }
        });
    });
};