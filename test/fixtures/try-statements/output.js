var __awaiter = this && this.__awaiter || function(t, u, o, s) {
    return new (o = o || Promise)(function(n, r) {
        function e(t) {
            try {
                a(s.next(t));
            } catch (t) {
                r(t);
            }
        }
        function i(t) {
            try {
                a(s.throw(t));
            } catch (t) {
                r(t);
            }
        }
        function a(t) {
            var r;
            t.done ? n(t.value) : ((r = t.value) instanceof o ? r : new o(function(t) {
                t(r);
            })).then(e, i);
        }
        a((s = s.apply(t, u || [])).next());
    });
}, __generator = this && this.__generator || function(e, i) {
    var a, u, o, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    }, t = {
        next: r(0),
        throw: r(1),
        return: r(2)
    };
    return "function" == typeof Symbol && (t[Symbol.iterator] = function() {
        return this;
    }), t;
    function r(n) {
        return function(t) {
            var r = [ n, t ];
            if (a) throw new TypeError("Generator is already executing.");
            for (;s; ) try {
                if (a = 1, u && (o = 2 & r[0] ? u.return : r[0] ? u.throw || ((o = u.return) && o.call(u), 
                0) : u.next) && !(o = o.call(u, r[1])).done) return o;
                switch (u = 0, (r = o ? [ 2 & r[0], o.value ] : r)[0]) {
                  case 0:
                  case 1:
                    o = r;
                    break;

                  case 4:
                    return s.label++, {
                        value: r[1],
                        done: !1
                    };

                  case 5:
                    s.label++, u = r[1], r = [ 0 ];
                    continue;

                  case 7:
                    r = s.ops.pop(), s.trys.pop();
                    continue;

                  default:
                    if (!(o = 0 < (o = s.trys).length && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                        s = 0;
                        continue;
                    }
                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                        s.label = r[1];
                        break;
                    }
                    if (6 === r[0] && s.label < o[1]) {
                        s.label = o[1], o = r;
                        break;
                    }
                    if (o && s.label < o[2]) {
                        s.label = o[2], s.ops.push(r);
                        break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                r = i.call(e, s);
            } catch (t) {
                r = [ 6, t ], u = 0;
            } finally {
                a = o = 0;
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            };
        };
    }
};

function tryCatch0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [ 2 ];
        });
    });
}

function tryCatch1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return t.trys.push([ 0, 2, , 3 ]), [ 4, void 0 ];

              case 1:
                return t.sent(), [ 3, 3 ];

              case 2:
                return t.sent(), [ 3, 3 ];

              case 3:
                return [ 2 ];
            }
        });
    });
}

function tryCatch2() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return t.trys.push([ 0, 1, , 3 ]), [ 3, 3 ];

              case 1:
                return t.sent(), [ 4, void 0 ];

              case 2:
                return t.sent(), [ 3, 3 ];

              case 3:
                return [ 2 ];
            }
        });
    });
}

function tryCatch3() {
    return __awaiter(this, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return t.trys.push([ 0, 2, , 3 ]), [ 4, void 0 ];

              case 1:
                return t.sent(), [ 3, 3 ];

              case 2:
                return r = t.sent(), [ 2, () => r ];

              case 3:
                return [ 2 ];
            }
        });
    });
}

function tryFinally0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [ 2 ];
        });
    });
}

function tryFinally1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return t.trys.push([ 0, , 2, 3 ]), [ 4, void 0 ];

              case 1:
                return t.sent(), [ 3, 3 ];

              case 2:
                return [ 7 ];

              case 3:
                return [ 2 ];
            }
        });
    });
}

function tryFinally2() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return t.trys.push([ 0, , 1, 3 ]), [ 3, 3 ];

              case 1:
                return [ 4, void 0 ];

              case 2:
                return t.sent(), [ 7 ];

              case 3:
                return [ 2 ];
            }
        });
    });
}

function tryCatchFinally0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [ 2 ];
        });
    });
}

function tryCatchFinally1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return t.trys.push([ 0, 2, 3, 4 ]), [ 4, void 0 ];

              case 1:
                return t.sent(), [ 3, 4 ];

              case 2:
                return t.sent(), [ 3, 4 ];

              case 3:
                return [ 7 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function tryCatchFinally2() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return t.trys.push([ 0, 1, 3, 4 ]), [ 3, 4 ];

              case 1:
                return t.sent(), [ 4, void 0 ];

              case 2:
                return t.sent(), [ 3, 4 ];

              case 3:
                return [ 7 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}

function tryCatchFinally3() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return t.trys.push([ 0, 1, 2, 4 ]), [ 3, 4 ];

              case 1:
                return t.sent(), [ 3, 4 ];

              case 2:
                return [ 4, void 0 ];

              case 3:
                return t.sent(), [ 7 ];

              case 4:
                return [ 2 ];
            }
        });
    });
}