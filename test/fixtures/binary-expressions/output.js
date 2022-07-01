var __awaiter = this && this.__awaiter || function(n, s, u, o) {
    return new (u = u || Promise)(function(r, t) {
        function e(n) {
            try {
                a(o.next(n));
            } catch (n) {
                t(n);
            }
        }
        function i(n) {
            try {
                a(o.throw(n));
            } catch (n) {
                t(n);
            }
        }
        function a(n) {
            var t;
            n.done ? r(n.value) : ((t = n.value) instanceof u ? t : new u(function(n) {
                n(t);
            })).then(e, i);
        }
        a((o = o.apply(n, s || [])).next());
    });
}, __generator = this && this.__generator || function(e, i) {
    var a, s, u, o = {
        label: 0,
        sent: function() {
            if (1 & u[0]) throw u[1];
            return u[1];
        },
        trys: [],
        ops: []
    }, n = {
        next: t(0),
        throw: t(1),
        return: t(2)
    };
    return "function" == typeof Symbol && (n[Symbol.iterator] = function() {
        return this;
    }), n;
    function t(r) {
        return function(n) {
            var t = [ r, n ];
            if (a) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
                if (a = 1, s && (u = 2 & t[0] ? s.return : t[0] ? s.throw || ((u = s.return) && u.call(s), 
                0) : s.next) && !(u = u.call(s, t[1])).done) return u;
                switch (s = 0, (t = u ? [ 2 & t[0], u.value ] : t)[0]) {
                  case 0:
                  case 1:
                    u = t;
                    break;

                  case 4:
                    return o.label++, {
                        value: t[1],
                        done: !1
                    };

                  case 5:
                    o.label++, s = t[1], t = [ 0 ];
                    continue;

                  case 7:
                    t = o.ops.pop(), o.trys.pop();
                    continue;

                  default:
                    if (!(u = 0 < (u = o.trys).length && u[u.length - 1]) && (6 === t[0] || 2 === t[0])) {
                        o = 0;
                        continue;
                    }
                    if (3 === t[0] && (!u || t[1] > u[0] && t[1] < u[3])) {
                        o.label = t[1];
                        break;
                    }
                    if (6 === t[0] && o.label < u[1]) {
                        o.label = u[1], u = t;
                        break;
                    }
                    if (u && o.label < u[2]) {
                        o.label = u[2], o.ops.push(t);
                        break;
                    }
                    u[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                t = i.call(e, o);
            } catch (n) {
                t = [ 6, n ], s = 0;
            } finally {
                a = u = 0;
            }
            if (5 & t[0]) throw t[1];
            return {
                value: t[0] ? t[1] : void 0,
                done: !0
            };
        };
    }
};

function binaryPlus0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return n.sent(), y, [ 2 ];
            }
        });
    });
}

function binaryPlus1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return x, [ 4, y ];

              case 1:
                return n.sent(), [ 2 ];
            }
        });
    });
}

function binaryLogicalAnd0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                if (!n.sent()) return [ 3, 2 ];
                y, n.label = 2;

              case 2:
                return [ 2 ];
            }
        });
    });
}

function binaryLogicalAnd1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return x ? [ 4, y ] : [ 3, 2 ];

              case 1:
                n.sent(), n.label = 2;

              case 2:
                return [ 2 ];
            }
        });
    });
}

function binaryAssignment0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, y ];

              case 1:
                return x = n.sent(), [ 2 ];
            }
        });
    });
}

function binaryAssignment1() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x, [ 4, y ];

              case 1:
                return t.a = n.sent(), [ 2 ];
            }
        });
    });
}

function binaryAssignment2() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x.a, [ 4, y ];

              case 1:
                return t.b = n.sent(), [ 2 ];
            }
        });
    });
}

function binaryAssignment3() {
    return __awaiter(this, void 0, void 0, function() {
        var t, r;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x, r = z, [ 4, y ];

              case 1:
                return t[r] = n.sent(), [ 2 ];
            }
        });
    });
}

function binaryAssignment4() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x[z], [ 4, y ];

              case 1:
                return t.b = n.sent(), [ 2 ];
            }
        });
    });
}

function binaryAssignment5() {
    return __awaiter(this, void 0, void 0, function() {
        var t, r;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x.a, r = z, [ 4, y ];

              case 1:
                return t[r] = n.sent(), [ 2 ];
            }
        });
    });
}

function binaryAssignment6() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return n.sent().a = y, [ 2 ];
            }
        });
    });
}

function binaryAssignment7() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x.a ];

              case 1:
                return n.sent().b = y, [ 2 ];
            }
        });
    });
}

function binaryAssignment8() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return n.sent()[z] = y, [ 2 ];
            }
        });
    });
}

function binaryAssignment9() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x, [ 4, z ];

              case 1:
                return t[n.sent()] = y, [ 2 ];
            }
        });
    });
}

function binaryAssignment10() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x, [ 4, z ];

              case 1:
                return t[n.sent()].b = y, [ 2 ];
            }
        });
    });
}

function binaryAssignment11() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x[z] ];

              case 1:
                return n.sent().b = y, [ 2 ];
            }
        });
    });
}

function binaryAssignment12() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x.a, [ 4, z ];

              case 1:
                return t[n.sent()] = y, [ 2 ];
            }
        });
    });
}

function binaryAssignment13() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x.a ];

              case 1:
                return n.sent()[z] = y, [ 2 ];
            }
        });
    });
}

function binaryCompoundAssignment0() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x, [ 4, y ];

              case 1:
                return x = t + n.sent(), [ 2 ];
            }
        });
    });
}

function binaryCompoundAssignment1() {
    return __awaiter(this, void 0, void 0, function() {
        var t, r;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x, r = t.a, [ 4, y ];

              case 1:
                return t.a = r + n.sent(), [ 2 ];
            }
        });
    });
}

function binaryCompoundAssignment2() {
    return __awaiter(this, void 0, void 0, function() {
        var t, r, e;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x, r = a, e = t[r], [ 4, y ];

              case 1:
                return t[r] = e + n.sent(), [ 2 ];
            }
        });
    });
}

function binaryCompoundAssignment3() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return n.sent().a += y, [ 2 ];
            }
        });
    });
}

function binaryCompoundAssignment4() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return n.sent()[a] += y, [ 2 ];
            }
        });
    });
}

function binaryCompoundAssignment5() {
    return __awaiter(this, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x, [ 4, a ];

              case 1:
                return t[n.sent()] += y, [ 2 ];
            }
        });
    });
}

function binaryCompoundAssignment6() {
    return __awaiter(this, void 0, void 0, function() {
        var t, r;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t = n.sent(), r = t.a, [ 4, y ];

              case 2:
                return t.a = r + n.sent(), [ 2 ];
            }
        });
    });
}

function binaryCompoundAssignment7() {
    return __awaiter(this, void 0, void 0, function() {
        var t, r, e;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t = n.sent(), r = a, e = t[r], [ 4, y ];

              case 2:
                return t[r] = e + n.sent(), [ 2 ];
            }
        });
    });
}

function binaryCompoundAssignment8() {
    return __awaiter(this, void 0, void 0, function() {
        var t, r, e;
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return t = x, [ 4, a ];

              case 1:
                return r = n.sent(), e = t[r], [ 4, y ];

              case 2:
                return t[r] = e + n.sent(), [ 2 ];
            }
        });
    });
}

function binaryComma0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return [ 2, (n.sent(), y) ];
            }
        });
    });
}

function binaryComma1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
              case 0:
                return x, [ 4, y ];

              case 1:
                return [ 2, n.sent() ];
            }
        });
    });
}