
            function _awaiter (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
            function _generator (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}
            function _values (o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
            /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var strictEqual = (a, b) => expect(a).toStrictEqual(b);

describe("async functions and await expressions", function () {
  describe("no-await async function", function () {
    test("should return a Promise", function (done) {
      var called = false;

      function noAwait(value) {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a) {
            called = true;
            return [2, value];
          });
        });
      }

      var promise = noAwait("asdf");
      strictEqual(called, true);
      promise.then(function (value) {
        strictEqual(called, true);
        strictEqual(value, "asdf");
        done();
      }).catch(err => done(err.toString()));
    });
  });
  describe("one-await async function", function () {
    test("should finish asynchronously", function (done) {
      var flag1 = false;
      var flag2 = false;

      function oneAwait(value) {
        return _awaiter(this, void 0, void 0, function () {
          var result;
          return _generator(this, function (_a2) {
            switch (_a2.label) {
              case 0:
                flag1 = true;
                return [4, value];

              case 1:
                result = _a2.sent();
                flag2 = true;
                return [2, result];
            }
          });
        });
      }

      var promise = oneAwait("asdf");
      strictEqual(flag1, true);
      strictEqual(flag2, false);
      promise.then(function (value) {
        strictEqual(flag2, true);
        strictEqual(value, "asdf");
        done();
      }).catch(err => done(err.toString()));
    });
  });
  describe("nested async function calls", function () {
    test("should evaluate in the right order", function (done) {
      var markers = [];

      function innerMost(marker) {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a3) {
            switch (_a3.label) {
              case 0:
                markers.push(marker);
                return [4, marker];

              case 1:
                return [2, _a3.sent()];
            }
          });
        });
      }

      function inner(marker) {
        return _awaiter(this, void 0, void 0, function () {
          var _t, _t2;

          return _generator(this, function (_a4) {
            switch (_a4.label) {
              case 0:
                markers.push(marker);
                _t = strictEqual;
                return [4, innerMost(marker + 1)];

              case 1:
                _t.apply(void 0, [_a4.sent(), marker + 1]);

                markers.push(marker + 2);
                _t2 = strictEqual;
                return [4, innerMost(marker + 3)];

              case 2:
                _t2.apply(void 0, [_a4.sent(), marker + 3]);

                markers.push(marker + 4);
                return [2];
            }
          });
        });
      }

      function outer() {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a5) {
            switch (_a5.label) {
              case 0:
                markers.push(0);
                return [4, inner(1)];

              case 1:
                _a5.sent();

                markers.push(6);
                return [4, inner(7)];

              case 2:
                _a5.sent();

                markers.push(12);
                return [2];
            }
          });
        });
      }

      outer().then(function () {
        var expected = [];

        for (var i = 0; i <= 12; ++i) {
          expected.push(i);
        }

        strictEqual(markers, expected);
        done();
      }).catch(err => done(err.toString()));
    });
  });
  describe("dependent promises", function () {
    test("should be awaitable out of order", function (done) {
      function outer(value) {
        return _awaiter(this, void 0, void 0, function () {
          var resolved, p1, v2, v1;
          return _generator(this, function (_a6) {
            switch (_a6.label) {
              case 0:
                resolved = false;
                p1 = new Promise(function (resolve) {
                  setTimeout(function () {
                    resolve(value + 1);
                    resolved = true;
                  }, 0);
                });
                strictEqual(resolved, false);
                return [4, p1.then(function (value) {
                  return value + 1;
                })];

              case 1:
                v2 = _a6.sent();
                strictEqual(resolved, true);
                return [4, p1];

              case 2:
                v1 = _a6.sent();
                return [2, [v1, v2]];
            }
          });
        });
      }

      outer(1).then(function (pair) {
        strictEqual(pair, [2, 3]);
        done();
      }).catch(err => done(err.toString()));
    });
  });
  describe("rejected promises", function () {
    test("should cause await expressions to throw", function (done) {
      var error = new Error("rejected");

      function f(arg) {
        return _awaiter(this, void 0, void 0, function () {
          var _e;

          return _generator(this, function (_a7) {
            switch (_a7.label) {
              case 0:
                _a7.trys.push([0, 2,, 3]);

                return [4, arg];

              case 1:
                return [2, _a7.sent()];

              case 2:
                _e = _a7.sent();
                strictEqual(_e, error);
                return [2, "did throw"];

              case 3:
                return [2];
            }
          });
        });
      }

      Promise.all([f(Promise.reject(error)), f(Promise.resolve("did not throw"))]).then(function (results) {
        strictEqual(results, ["did throw", "did not throw"]);
        done();
      }).catch(err => done(err.toString()));
    });
    test("should be returned by exceptional async functions", function (done) {
      var error = new Error("rejected");

      function e(arg) {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a8) {
            if (arg) {
              throw arg;
            }

            return [2, "did not throw"];
          });
        });
      }

      function f(arg) {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a9) {
            switch (_a9.label) {
              case 0:
                return [4, e(arg)];

              case 1:
                return [2, _a9.sent()];
            }
          });
        });
      }

      function g(arg) {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a10) {
            switch (_a10.label) {
              case 0:
                return [4, f(arg)];

              case 1:
                return [2, _a10.sent()];
            }
          });
        });
      }

      function h(arg) {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a11) {
            switch (_a11.label) {
              case 0:
                return [4, Promise.all([g(arg), Promise.resolve("dummy")])];

              case 1:
                return [2, _a11.sent()];
            }
          });
        });
      }

      Promise.all([h(error).then(function () {
        done(new Error("should not have resolved"));
      }, function (e) {
        strictEqual(e, error);
        return "ok1";
      }), h(null).then(function (result) {
        strictEqual(result, ["did not throw", "dummy"]);
        return "ok2";
      })]).then(function (results) {
        strictEqual(results, ["ok1", "ok2"]);
        done();
      }).catch(err => done(err.toString()));
    });
    test("should propagate failure when returned", function () {
      var rejection = new Error("rejection");

      function f() {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a12) {
            return [2, new Promise(function (resolve, reject) {
              reject(rejection);
            })];
          });
        });
      }

      return f().then(function (result) {
        assert.ok(false, "should have been rejected");
      }, function (error) {
        strictEqual(error, rejection);
      });
    });
  });
  describe("async function expressions", function () {
    test("should be allowed", function (done) {
      (function (arg) {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a13) {
            switch (_a13.label) {
              case 0:
                return [4, arg];

              case 1:
                return [2, _a13.sent()];
            }
          });
        });
      })(Promise.resolve(1234)).then(function (value) {
        strictEqual(value, 1234);
        done();
      }).catch(err => done(err.toString()));
    });
  });
  describe("the this object", function () {
    test("should default to undefined (strict)", function (done) {
      function f() {
        "use strict";

        return _awaiter(this, void 0, void 0, function () {
          "use strict";

          return _generator(this, function (_a14) {
            return [2, this];
          });
        });
      }

      f().then(function (value) {
        strictEqual(value, undefined);
        done();
      }).catch(err => done(err.toString()));
    });
    test("should respect .call's this", function (done) {
      function f() {
        return _awaiter(this, void 0, void 0, function () {
          return _generator(this, function (_a15) {
            return [2, this];
          });
        });
      }

      var self = {};
      f.call(self).then(function (value) {
        strictEqual(value, self);
        done();
      }).catch(err => done(err.toString()));
    });
  });
});
describe("update operators", function () {
  test("should read left side before yielding", function () {
    var x = 0;

    function test() {
      var _t3;

      return _generator(this, function (_a16) {
        switch (_a16.label) {
          case 0:
            _t3 = x;
            return [4];

          case 1:
            x = _t3 + _a16.sent();
            return [2];
        }
      });
    }

    var gen = test();
    gen.next();
    x += 1;
    strictEqual(x, 1);
    gen.next(2);
    strictEqual(x, 2);
  });
  test("should explode left side before yielding", function () {
    var obj = {
      count: 0
    };

    function test() {
      var _t4, _t5, _t6;

      return _generator(this, function (_a17) {
        switch (_a17.label) {
          case 0:
            _t4 = obj;
            return [4, "key"];

          case 1:
            _t5 = _a17.sent();
            _t6 = _t4[_t5];
            return [4, "value"];

          case 2:
            _t4[_t5] = _t6 + _a17.sent();
            return [2];
        }
      });
    }

    var gen = test();
    strictEqual(gen.next(), {
      value: "key",
      done: false
    });
    strictEqual(obj.count, 0);
    strictEqual(gen.next("count"), {
      value: "value",
      done: false
    });
    strictEqual(obj.count, 0);
    obj.count += 1;
    strictEqual(obj.count, 1);
    strictEqual(gen.next(2), {
      value: void 0,
      done: true
    });
    strictEqual(obj.count, 2);
  });
  test("should read left side before awaiting", function () {
    var x = 0;

    function test(val) {
      return _awaiter(this, void 0, void 0, function () {
        var _t7;

        return _generator(this, function (_a18) {
          switch (_a18.label) {
            case 0:
              _t7 = x;
              return [4, val];

            case 1:
              x = _t7 + _a18.sent();
              return [2, x];
          }
        });
      });
    }

    var promise = test(2);
    x += 1;
    return promise.then(result => {
      strictEqual(result, 2);
    });
  });
}); // describe("async generator functions", function () {
//     test("should return a working AsyncIterator", function () {
//         var markers = [];
//         async function* gen(arg) {
//             markers.push(0);
//             var sent = yield arg;
//             markers.push(1);
//             var result = await sent;
//             markers.push(2);
//             strictEqual(await (yield "second"), "sent after second");
//             markers.push(3);
//             return result;
//         }
//         var iter = gen("initial argument");
//         strictEqual(markers, []);
//         var firstPromise = iter.next();
//         strictEqual(markers, [0]);
//         return firstPromise.then(function (firstResult) {
//             strictEqual(firstResult, {
//                 value: "initial argument",
//                 done: false
//             });
//             strictEqual(markers, [0]);
//             return iter.next(new Promise(function (resolve) {
//                 setTimeout(resolve, 100);
//             }).then(function () {
//                 strictEqual(markers, [0, 1]);
//                 return "will become final result";
//             }));
//         }).then(function (secondResult) {
//             strictEqual(secondResult, {
//                 value: "second",
//                 done: false
//             });
//             strictEqual(markers, [0, 1, 2]);
//             return iter.next("sent after second");
//         }).then(function (finalResult) {
//             strictEqual(markers, [0, 1, 2, 3]);
//             strictEqual(finalResult, {
//                 value: "will become final result",
//                 done: true
//             });
//         });
//     });
//     test("should keep results in order", function () {
//         async function* range(limit) {
//             var before = [];
//             var after = [];
//             for (var i = 0; i < limit; ++i) {
//                 before.push(i);
//                 yield i;
//                 after.push(i);
//             }
//             strictEqual(before, after);
//             return before;
//         }
//         var limit = 10;
//         var iter = range(limit);
//         var promises = [];
//         var results = [];
//         for (var i = 0; i < limit; ++i) {
//             var promise = iter.next();
//             promises.push(promise);
//             promise.then(function (result) {
//                 strictEqual(result.done, false);
//                 results.push(result);
//             });
//         }
//         strictEqual(results, []);
//         return Promise.all(promises).then(function (promiseResults) {
//             strictEqual(results, promiseResults);
//             return iter.next();
//         }).then(function (finalResult) {
//             strictEqual(results.map(function (result) {
//                 return result.value;
//             }), finalResult.value);
//             strictEqual(finalResult.done, true);
//         });
//     });
//     test("should be able to handle many awaits", function () {
//         var awaitCount = 0;
//         function countAwait(i) {
//             return Promise.resolve(i).then(function () {
//                 ++awaitCount;
//             });
//         }
//         async function* gen(limit) {
//             await countAwait(0);
//             yield 1;
//             await countAwait(2);
//             await countAwait(3);
//             yield 4;
//             await countAwait(5);
//             await countAwait(6);
//             await countAwait(7);
//             yield 8;
//             for (var i = 0; i < limit; ++i) {
//                 await countAwait(i);
//             }
//             return "done";
//         }
//         var iter = gen(100);
//         return iter.next().then(function (result) {
//             strictEqual(awaitCount, 1);
//             strictEqual(result, {
//                 value: 1,
//                 done: false
//             });
//             return iter.next();
//         }).then(function (result) {
//             strictEqual(awaitCount, 3);
//             strictEqual(result, {
//                 value: 4,
//                 done: false
//             });
//             return iter.next();
//         }).then(function (result) {
//             strictEqual(awaitCount, 6);
//             strictEqual(result, {
//                 value: 8,
//                 done: false
//             });
//             return iter.next();
//         }).then(function (result) {
//             strictEqual(awaitCount, 6 + 100);
//             strictEqual(result, {
//                 value: "done",
//                 done: true
//             });
//             return iter.next();
//         }).then(function (result) {
//             strictEqual(result, {
//                 value: void 0,
//                 done: true
//             });
//         });
//     });
//     test("should not propagate exceptions between iterations", function () {
//         async function* gen() {
//             yield 1;
//             yield 2;
//         }
//         var iter = gen();
//         return iter.next().then(function (result) {
//             strictEqual(result, {
//                 value: 1,
//                 done: false
//             });
//             return iter.throw(new Error("thrown from first yield"));
//         }).then(function () {
//             throw new Error("should have thrown");
//         }, function (error) {
//             strictEqual(error.message, "thrown from first yield");
//             return iter.next();
//         }).then(function (result) {
//             strictEqual(result, {
//                 value: void 0,
//                 done: true
//             });
//         });
//     });
//     test("should allow yielding a rejected Promise", function () {
//         var yielded = new Error("yielded rejection");
//         var returned = new Error("returned rejection");
//         async function* gen() {
//             strictEqual(yield "first yielded", "first sent");
//             try {
//                 strictEqual(yield Promise.reject(yielded), "not reached");
//             } catch (e) {
//                 strictEqual(yield e, "second sent");
//                 return Promise.reject(returned);
//             }
//         }
//         var iter = gen();
//         return iter.next().then(function (result) {
//             strictEqual(result, {
//                 value: "first yielded",
//                 done: false
//             });
//             return iter.next("first sent");
//         }).then(function (result) {
//             strictEqual(result, {
//                 value: yielded,
//                 done: false
//             });
//             return iter.next("second sent");
//         }).then(function (result) {
//             assert.ok(false, "should have returned a rejected Promise");
//         }, function (error) {
//             strictEqual(error, returned);
//         });
//     });
//     test("should work with nested arrow functions", async function () {
//         var a = async b => {
//             return await (async () => {
//                 return await b();
//             })();
//         };
//         strictEqual(
//             await a(() => Promise.resolve(1234)),
//             1234
//         );
//     });
//     test("should support super.method(...) in async methods", async function () {
//         class A {
//             async method() {
//                 return "from A";
//             }
//         }
//         class B extends A {
//             async method() {
//                 return "from B " + (await super.method());
//             }
//         }
//         strictEqual(await new B().method(), "from B from A");
//     });
// });
        