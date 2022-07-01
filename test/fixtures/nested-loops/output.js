var __awaiter = this && this.__awaiter || function(e, i, u, c) {
    return new (u = u || Promise)(function(n, t) {
        function r(e) {
            try {
                a(c.next(e));
            } catch (e) {
                t(e);
            }
        }
        function o(e) {
            try {
                a(c.throw(e));
            } catch (e) {
                t(e);
            }
        }
        function a(e) {
            var t;
            e.done ? n(e.value) : ((t = e.value) instanceof u ? t : new u(function(e) {
                e(t);
            })).then(r, o);
        }
        a((c = c.apply(e, i || [])).next());
    });
}, __generator = this && this.__generator || function(r, o) {
    var a, i, u, c = {
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
            if (a) throw new TypeError("Generator is already executing.");
            for (;c; ) try {
                if (a = 1, i && (u = 2 & t[0] ? i.return : t[0] ? i.throw || ((u = i.return) && u.call(i), 
                0) : i.next) && !(u = u.call(i, t[1])).done) return u;
                switch (i = 0, (t = u ? [ 2 & t[0], u.value ] : t)[0]) {
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
                    c.label++, i = t[1], t = [ 0 ];
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
                t = o.call(r, c);
            } catch (e) {
                t = [ 6, e ], i = 0;
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

function nestedLoops() {
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
              case 0:
                return x ? [ 4, y ] : [ 3, 2 ];

              case 1:
                if (e.sent(), z) return [ 3, 0 ];
                for (;a; );
                return [ 3, 0 ];

              case 2:
                return [ 2 ];
            }
        });
    });
}