var __awaiter = this && this.__awaiter || function(t, u, a, c) {
    return new (a = a || Promise)(function(e, n) {
        function r(t) {
            try {
                o(c.next(t));
            } catch (t) {
                n(t);
            }
        }
        function i(t) {
            try {
                o(c.throw(t));
            } catch (t) {
                n(t);
            }
        }
        function o(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof a ? n : new a(function(t) {
                t(n);
            })).then(r, i);
        }
        o((c = c.apply(t, u || [])).next());
    });
}, __generator = this && this.__generator || function(r, i) {
    var o, u, a, c = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1];
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
            if (o) throw new TypeError("Generator is already executing.");
            for (;c; ) try {
                if (o = 1, u && (a = 2 & n[0] ? u.return : n[0] ? u.throw || ((a = u.return) && a.call(u), 
                0) : u.next) && !(a = a.call(u, n[1])).done) return a;
                switch (u = 0, (n = a ? [ 2 & n[0], a.value ] : n)[0]) {
                  case 0:
                  case 1:
                    a = n;
                    break;

                  case 4:
                    return c.label++, {
                        value: n[1],
                        done: !1
                    };

                  case 5:
                    c.label++, u = n[1], n = [ 0 ];
                    continue;

                  case 7:
                    n = c.ops.pop(), c.trys.pop();
                    continue;

                  default:
                    if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                        c = 0;
                        continue;
                    }
                    if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                        c.label = n[1];
                        break;
                    }
                    if (6 === n[0] && c.label < a[1]) {
                        c.label = a[1], a = n;
                        break;
                    }
                    if (a && c.label < a[2]) {
                        c.label = a[2], c.ops.push(n);
                        break;
                    }
                    a[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                n = i.call(r, c);
            } catch (t) {
                n = [ 6, t ], u = 0;
            } finally {
                o = a = 0;
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            };
        };
    }
};

function returnStatement0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [ 2 ];
        });
    });
}

function returnStatement1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [ 2, x ];
        });
    });
}

function returnStatement2() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return [ 2, t.sent() ];
            }
        });
    });
}

function returnStatement3() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [ 2 ];
        });
    });
}

function returnStatement4() {
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

function returnStatement5() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return [ 2, t.sent() ];
            }
        });
    });
}