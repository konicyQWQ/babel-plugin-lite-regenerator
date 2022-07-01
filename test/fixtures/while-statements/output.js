var __awaiter = this && this.__awaiter || function(t, u, o, c) {
    return new (o = o || Promise)(function(n, e) {
        function r(t) {
            try {
                a(c.next(t));
            } catch (t) {
                e(t);
            }
        }
        function i(t) {
            try {
                a(c.throw(t));
            } catch (t) {
                e(t);
            }
        }
        function a(t) {
            var e;
            t.done ? n(t.value) : ((e = t.value) instanceof o ? e : new o(function(t) {
                t(e);
            })).then(r, i);
        }
        a((c = c.apply(t, u || [])).next());
    });
}, __generator = this && this.__generator || function(r, i) {
    var a, u, o, c = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
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
            if (a) throw new TypeError("Generator is already executing.");
            for (;c; ) try {
                if (a = 1, u && (o = 2 & e[0] ? u.return : e[0] ? u.throw || ((o = u.return) && o.call(u), 
                0) : u.next) && !(o = o.call(u, e[1])).done) return o;
                switch (u = 0, (e = o ? [ 2 & e[0], o.value ] : e)[0]) {
                  case 0:
                  case 1:
                    o = e;
                    break;

                  case 4:
                    return c.label++, {
                        value: e[1],
                        done: !1
                    };

                  case 5:
                    c.label++, u = e[1], e = [ 0 ];
                    continue;

                  case 7:
                    e = c.ops.pop(), c.trys.pop();
                    continue;

                  default:
                    if (!(o = 0 < (o = c.trys).length && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                        c = 0;
                        continue;
                    }
                    if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                        c.label = e[1];
                        break;
                    }
                    if (6 === e[0] && c.label < o[1]) {
                        c.label = o[1], o = e;
                        break;
                    }
                    if (o && c.label < o[2]) {
                        c.label = o[2], c.ops.push(e);
                        break;
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                e = i.call(r, c);
            } catch (t) {
                e = [ 6, t ], u = 0;
            } finally {
                a = o = 0;
            }
            if (5 & e[0]) throw e[1];
            return {
                value: e[0] ? e[1] : void 0,
                done: !0
            };
        };
    }
};

function whileStatement0() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            for (;x; ) y;
            return [ 2 ];
        });
    });
}

function whileStatement1() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent() ? (y, [ 3, 0 ]) : [ 3, 2 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement2() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x ? [ 4, y ] : [ 3, 2 ];

              case 1:
                return t.sent(), [ 3, 0 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement3() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            for (;x; );
            return [ 2 ];
        });
    });
}

function whileStatement4() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent() ? [ 3, 0 ] : [ 3, 2 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement5() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x ? [ 4, y ] : [ 3, 2 ];

              case 1:
                return t.sent(), [ 3, 0 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement6() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x ? [ 3, 0 ] : [ 3, 2 ];

              case 1:
                return t.sent(), [ 3, 0 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement7() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            for (;x; );
            return [ 2 ];
        });
    });
}

function whileStatement8() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent() ? [ 3, 0 ] : [ 3, 2 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement9() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x ? [ 4, y ] : [ 3, 2 ];

              case 1:
                return t.sent(), [ 3, 0 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement10() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x ? [ 3, 0 ] : [ 3, 2 ];

              case 1:
                return t.sent(), [ 3, 0 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement11() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return x, [ 2 ];
        });
    });
}

function whileStatement12() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent() ? [ 3, 2 ] : [ 3, 2 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement13() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x ? [ 4, y ] : [ 3, 2 ];

              case 1:
                return t.sent(), [ 3, 2 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement14() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x ? [ 3, 2 ] : [ 3, 2 ];

              case 1:
                return t.sent(), [ 3, 0 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement15() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            return x, [ 2 ];
        });
    });
}

function whileStatement16() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return [ 4, x ];

              case 1:
                return t.sent() ? [ 3, 2 ] : [ 3, 2 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement17() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x ? [ 4, y ] : [ 3, 2 ];

              case 1:
                return t.sent(), [ 3, 2 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}

function whileStatement18() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
              case 0:
                return x ? [ 3, 2 ] : [ 3, 2 ];

              case 1:
                return t.sent(), [ 3, 0 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}