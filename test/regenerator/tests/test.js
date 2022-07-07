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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var assert = require('assert');

var shared = require("../shared.js");

var _Symbol = shared.Symbol;
var check = shared.check;
var assertAlreadyFinished = shared.assertAlreadyFinished;
var fullCompatibility = true; // A version of `throw` whose behavior can't be statically analyzed.
// Useful for testing dynamic exception dispatching.

function raise(argument) {
  throw argument;
}

describe("simple argument yielder", function () {
  it("should yield only its first argument", function () {
    function gen(x) {
      return _generator(this, function (_a3) {
        switch (_a3.label) {
          case 0:
            return [4, x];

          case 1:
            _a3.sent();

            return [2];
        }
      });
    }

    check(gen("oyez"), ["oyez"]);
    check(gen("foo", "bar"), ["foo"]);
  });
  it("should support multiple yields in expression", function () {
    function gen() {
      var _t;

      return _generator(this, function (_a4) {
        switch (_a4.label) {
          case 0:
            return [4, 0];

          case 1:
            _t = _a4.sent();
            return [4, 0];

          case 2:
            return [2, _t + _a4.sent()];
        }
      });
    }

    var itr = gen();
    itr.next();
    itr.next(1);
    assert.equal(itr.next(2).value, 3);
  });
});

function range(n) {
  var i;
  return _generator(this, function (_a5) {
    switch (_a5.label) {
      case 0:
        i = 0;
        _a5.label = 1;

      case 1:
        if (!(i < n)) return [3, 4];
        return [4, i];

      case 2:
        _a5.sent();

        _a5.label = 3;

      case 3:
        ++i;
        return [3, 1];

      case 4:
        return [2];
    }
  });
}

describe("range generator", function () {
  it("should yield the empty range", function () {
    check(range(0), []);
  });
  it("should yield the range 0..n-1", function () {
    check(range(5), [0, 1, 2, 3, 4]);
  });
});
describe("collatz generator", function () {
  function gen(n) {
    var count;
    return _generator(this, function (_a6) {
      switch (_a6.label) {
        case 0:
          count = 0;
          return [4, n];

        case 1:
          _a6.sent();

          _a6.label = 2;

        case 2:
          if (!(n !== 1)) return [3, 7];
          count += 1;
          if (!(n % 2)) return [3, 4];
          return [4, n = n * 3 + 1];

        case 3:
          _a6.sent();

          return [3, 6];

        case 4:
          return [4, n >>= 1];

        case 5:
          _a6.sent();

          _a6.label = 6;

        case 6:
          return [3, 2];

        case 7:
          return [2, count];
      }
    });
  }

  function collatz(n) {
    var result = [n];

    while (n !== 1) {
      if (n % 2) {
        n *= 3;
        n += 1;
      } else {
        n >>= 1;
      }

      result.push(n);
    }

    return result;
  }

  var seven = collatz(7);
  var fiftyTwo = seven.slice(seven.indexOf(52));
  var eightyTwo = collatz(82);
  it("seven", function () {
    check(gen(7), seven, 16);
  });
  it("fifty two", function () {
    check(gen(52), fiftyTwo, 11);
  });
  it("eighty two", function () {
    check(gen(82), eightyTwo, 110);
  });
});
describe("try-catch generator", function () {
  function usingThrow(x) {
    var _x2;

    return _generator(this, function (_a7) {
      switch (_a7.label) {
        case 0:
          return [4, 0];

        case 1:
          _a7.sent();

          _a7.label = 2;

        case 2:
          _a7.trys.push([2, 5,, 7]);

          return [4, 1];

        case 3:
          _a7.sent();

          if (x % 2 === 0) throw 2;
          return [4, x];

        case 4:
          _a7.sent();

          return [3, 7];

        case 5:
          _x2 = _a7.sent();
          return [4, _x2];

        case 6:
          _a7.sent();

          return [3, 7];

        case 7:
          return [4, 3];

        case 8:
          _a7.sent();

          return [2];
      }
    });
  }

  function usingRaise(x) {
    var _x3;

    return _generator(this, function (_a8) {
      switch (_a8.label) {
        case 0:
          return [4, 0];

        case 1:
          _a8.sent();

          _a8.label = 2;

        case 2:
          _a8.trys.push([2, 5,, 7]);

          return [4, 1];

        case 3:
          _a8.sent();

          if (x % 2 === 0) raise(2);
          return [4, x];

        case 4:
          _a8.sent();

          return [3, 7];

        case 5:
          _x3 = _a8.sent();
          return [4, _x3];

        case 6:
          _a8.sent();

          return [3, 7];

        case 7:
          return [4, 3];

        case 8:
          _a8.sent();

          return [2];
      }
    });
  }

  it("should catch static exceptions properly", function () {
    check(usingThrow(4), [0, 1, 2, 3]);
    check(usingThrow(5), [0, 1, 5, 3]);
  });
  it("should catch dynamic exceptions properly", function () {
    check(usingRaise(4), [0, 1, 2, 3]);
    check(usingRaise(5), [0, 1, 5, 3]);
  });
});
describe("nested generators in try-catch", function () {
  function gen() {
    var _e;

    return _generator(this, function (_a9) {
      switch (_a9.label) {
        case 0:
          _a9.trys.push([0, 1,, 3]);

          nonExistent;
          return [3, 3];

        case 1:
          _e = _a9.sent();
          return [4, function () {
            return _generator(this, function (_a10) {
              switch (_a10.label) {
                case 0:
                  return [4, _e];

                case 1:
                  _a10.sent();

                  return [2];
              }
            });
          }];

        case 2:
          _a9.sent();

          return [3, 3];

        case 3:
          return [2];
      }
    });
  }

  it('should get a reference to the caught error', function () {
    var genFun2 = gen().next().value;
    var gen2 = genFun2();
    var res = gen2.next();
    assert.ok(res.value instanceof ReferenceError); // Note that we don't do strict equality over the message because it varies
    // across browsers (if we ever want to run tests in browsers).

    assert.ok(res.value.message.match(/nonExistent/));
  });
});
describe("try-finally generator", function () {
  function usingThrow(condition) {
    return _generator(this, function (_a11) {
      switch (_a11.label) {
        case 0:
          return [4, 0];

        case 1:
          _a11.sent();

          _a11.label = 2;

        case 2:
          _a11.trys.push([2,, 5, 9]);

          return [4, 1];

        case 3:
          _a11.sent();

          throw 2;

        case 4:
          _a11.sent();

          return [3, 9];

        case 5:
          if (!condition) return [3, 7];
          return [4, 4];

        case 6:
          _a11.sent();

          return [2, 5];

        case 7:
          return [4, 6];

        case 8:
          _a11.sent();

          return [2, 7];

        case 9:
          return [2];
      }
    });
  }

  function usingRaise(condition) {
    return _generator(this, function (_a12) {
      switch (_a12.label) {
        case 0:
          return [4, 0];

        case 1:
          _a12.sent();

          _a12.label = 2;

        case 2:
          _a12.trys.push([2,, 5, 9]);

          return [4, 1];

        case 3:
          _a12.sent();

          raise(2);
          return [4, 3];

        case 4:
          _a12.sent();

          return [3, 9];

        case 5:
          if (!condition) return [3, 7];
          return [4, 4];

        case 6:
          _a12.sent();

          return [2, 5];

        case 7:
          return [4, 6];

        case 8:
          _a12.sent();

          return [2, 7];

        case 9:
          return [2];
      }
    });
  }

  function usingAbrupt(abruptType, finallyAbruptType) {
    return _generator(this, function (_a13) {
      switch (_a13.label) {
        case 0:
          return [4, 0];

        case 1:
          _a13.sent();

          _a13.label = 2;

        case 2:
          _a13.trys.push([2,, 4, 6]);

          return [4, 1];

        case 3:
          _a13.sent();

          if (abruptType === "return") {
            return [2, 2];
          } else if (abruptType === "break") {
            return [3, 7];
          } else if (abruptType === "continue") {
            abruptType = "return";
            return [3, 6];
          }

          return [3, 6];

        case 4:
          return [4, 3];

        case 5:
          _a13.sent();

          if (finallyAbruptType === "return") {
            return [2, 4];
          } else if (finallyAbruptType === "break") {
            return [3, 7];
          } else if (finallyAbruptType === "continue") {
            finallyAbruptType = null;
            return [3, 6];
          }

          return [7];

        case 6:
          return [3, 2];

        case 7:
          return [2, 5];
      }
    });
  }

  it("should honor return", function () {
    check(usingAbrupt("return", null), [0, 1, 3], 2);
  });
  it("should honor break", function () {
    check(usingAbrupt("break", null), [0, 1, 3], 5);
  });
  it("should honor continue", function () {
    check(usingAbrupt("continue", null), [0, 1, 3, 1, 3], 2);
  });
  it("should override abrupt with return", function () {
    check(usingAbrupt("return", "return"), [0, 1, 3], 4);
    check(usingAbrupt("break", "return"), [0, 1, 3], 4);
    check(usingAbrupt("continue", "return"), [0, 1, 3], 4);
  });
  it("should override abrupt with break", function () {
    check(usingAbrupt("return", "break"), [0, 1, 3], 5);
    check(usingAbrupt("break", "break"), [0, 1, 3], 5);
    check(usingAbrupt("continue", "break"), [0, 1, 3], 5);
  });
  it("should override abrupt with continue", function () {
    check(usingAbrupt("return", "continue"), [0, 1, 3, 1, 3], 2);
    check(usingAbrupt("break", "continue"), [0, 1, 3, 1, 3], 5);
    check(usingAbrupt("continue", "continue"), [0, 1, 3, 1, 3], 2);
  });
  it("should execute finally blocks statically", function () {
    check(usingThrow(true), [0, 1, 4], 5);
    check(usingThrow(false), [0, 1, 6], 7);
  });
  it("should execute finally blocks dynamically", function () {
    check(usingRaise(true), [0, 1, 4], 5);
    check(usingRaise(false), [0, 1, 6], 7);
  });
  it("should execute finally blocks before throwing", function () {
    var uncaughtError = new Error("uncaught");

    function uncaught(condition) {
      return _generator(this, function (_a14) {
        switch (_a14.label) {
          case 0:
            _a14.trys.push([0,, 5, 7]);

            return [4, 0];

          case 1:
            _a14.sent();

            if (!condition) return [3, 3];
            return [4, 1];

          case 2:
            _a14.sent();

            raise(uncaughtError);
            _a14.label = 3;

          case 3:
            return [4, 2];

          case 4:
            _a14.sent();

            return [3, 7];

          case 5:
            return [4, 3];

          case 6:
            _a14.sent();

            return [7];

          case 7:
            return [4, 4];

          case 8:
            _a14.sent();

            return [2];
        }
      });
    }

    check(uncaught(false), [0, 2, 3, 4]);
    var u = uncaught(true);
    assert.deepEqual(u.next(), {
      value: 0,
      done: false
    });
    assert.deepEqual(u.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(u.next(), {
      value: 3,
      done: false
    });

    try {
      u.next();
      assert.ok(false, "should have thrown an exception");
    } catch (err) {
      assert.strictEqual(err, uncaughtError);
    }
  });
  it("should throw correct error when finally contains catch", function () {
    var right = new Error("right");
    var wrong = new Error("wrong");

    function gen() {
      var _err;

      return _generator(this, function (_a15) {
        switch (_a15.label) {
          case 0:
            _a15.trys.push([0,, 2, 8]);

            return [4, 0];

          case 1:
            _a15.sent();

            raise(right);
            return [3, 8];

          case 2:
            return [4, 1];

          case 3:
            _a15.sent();

            _a15.label = 4;

          case 4:
            _a15.trys.push([4, 5,, 7]);

            raise(wrong);
            return [3, 7];

          case 5:
            _err = _a15.sent();
            assert.strictEqual(_err, wrong);
            return [4, 2];

          case 6:
            _a15.sent();

            return [3, 7];

          case 7:
            return [7];

          case 8:
            return [2];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: 0,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 2,
      done: false
    });

    try {
      g.next();
      assert.ok(false, "should have thrown an exception");
    } catch (err) {
      assert.strictEqual(err, right);
    }
  });
  it("should run finally after break within try", function () {
    function gen() {
      return _generator(this, function (_a16) {
        switch (_a16.label) {
          case 0:
            _a16.trys.push([0,, 5, 7]);

            return [4, 0];

          case 1:
            _a16.sent();

            _a16.label = 2;

          case 2:
            if (!true) return [3, 4];
            return [4, 1];

          case 3:
            _a16.sent();

            return [3, 4];

          case 4:
            return [3, 7];

          case 5:
            return [4, 2];

          case 6:
            _a16.sent();

            return [7];

          case 7:
            return [4, 3];

          case 8:
            _a16.sent();

            return [2];
        }
      });
    }

    check(gen(), [0, 1, 2, 3]);
  });
  it("should return the correct value when overridden by finally", function () {
    function gen() {
      return _generator(this, function (_a17) {
        switch (_a17.label) {
          case 0:
            _a17.trys.push([0,, 2, 3]);

            return [4, 1];

          case 1:
            return [2, _a17.sent()];

          case 2:
            return [2, 3];

          case 3:
            return [2];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    });

    if (typeof g.return === "function") {
      assert.deepEqual(g.return(5), {
        value: 3,
        done: true
      });
    } else {
      assert.deepEqual(g.next(5), {
        value: 3,
        done: true
      });
    }
  });
  it("should let the last finally block override all others", function () {
    function gen(condition) {
      return _generator(this, function (_a18) {
        switch (_a18.label) {
          case 0:
            _a18.trys.push([0,, 5, 6]);

            _a18.label = 1;

          case 1:
            _a18.trys.push([1,, 3, 4]);

            return [4, 1];

          case 2:
            return [2, _a18.sent()];

          case 3:
            return [2, 2];

          case 4:
            return [3, 6];

          case 5:
            try {
              return [2, 3];
            } finally {
              if (condition) {
                return [2, 4];
              }
            }

            return [7];

          case 6:
            return [2];
        }
      });
    }

    var g1 = gen(true);
    assert.deepEqual(g1.next(), {
      value: 1,
      done: false
    }); // The generator function has been carefully constructed so that .next
    // and .return have the same effect, so that these tests should pass
    // in versions of Node that do not support .return.

    var method = g1.return || g1.next;
    assert.deepEqual(method.call(g1, 5), {
      value: 4,
      done: true
    });
    var g2 = gen(false);
    assert.deepEqual(g2.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(method.call(g2, 5), {
      value: 3,
      done: true
    });
  });
  it("should allow additional yields during finally propagation", function () {
    function gen(condition) {
      return _generator(this, function (_a19) {
        switch (_a19.label) {
          case 0:
            _a19.trys.push([0,, 5, 9]);

            _a19.label = 1;

          case 1:
            _a19.trys.push([1,, 3, 4]);

            return [4, 1];

          case 2:
            return [2, _a19.sent()];

          case 3:
            return [2, 2];

          case 4:
            return [3, 9];

          case 5:
            _a19.trys.push([5,, 7, 8]);

            return [4, "oyez"];

          case 6:
            return [2, _a19.sent()];

          case 7:
            if (condition) {
              return [2, 4];
            }

            return [7];

          case 8:
            return [7];

          case 9:
            return [2];
        }
      });
    }

    var g1 = gen(true);
    assert.deepEqual(g1.next(), {
      value: 1,
      done: false
    }); // The generator function has been carefully constructed so that .next
    // and .return have the same effect, so that these tests should pass
    // in versions of Node that do not support .return.

    var method = g1.return || g1.next;
    assert.deepEqual(method.call(g1, 5), {
      value: "oyez",
      done: false
    });
    assert.deepEqual(method.call(g1, 5), {
      value: 4,
      done: true
    });
    var g2 = gen(false);
    assert.deepEqual(g2.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(method.call(g2, 5), {
      value: "oyez",
      done: false
    });
    assert.deepEqual(method.call(g2, 5), {
      value: 5,
      done: true
    });
  });
});
describe("try-catch-finally generator", function () {
  function usingThrow() {
    var _x4, _thrown;

    return _generator(this, function (_a20) {
      switch (_a20.label) {
        case 0:
          return [4, 0];

        case 1:
          _a20.sent();

          _a20.label = 2;

        case 2:
          _a20.trys.push([2, 11,, 13]);

          _a20.label = 3;

        case 3:
          _a20.trys.push([3, 6, 8, 10]);

          return [4, 1];

        case 4:
          _a20.sent();

          throw 2;

        case 5:
          _a20.sent();

          return [3, 10];

        case 6:
          _x4 = _a20.sent();
          return [4, _x4];

        case 7:
          throw _a20.sent();

        case 8:
          return [4, 5];

        case 9:
          _a20.sent();

          return [7];

        case 10:
          return [3, 13];

        case 11:
          _thrown = _a20.sent();
          return [4, _thrown];

        case 12:
          _a20.sent();

          return [3, 13];

        case 13:
          return [4, 6];

        case 14:
          _a20.sent();

          return [2];
      }
    });
  }

  function usingRaise() {
    var _x5, _thrown2;

    return _generator(this, function (_a21) {
      switch (_a21.label) {
        case 0:
          return [4, 0];

        case 1:
          _a21.sent();

          _a21.label = 2;

        case 2:
          _a21.trys.push([2, 11,, 13]);

          _a21.label = 3;

        case 3:
          _a21.trys.push([3, 6, 8, 10]);

          return [4, 1];

        case 4:
          _a21.sent();

          raise(2);
          return [4, 3];

        case 5:
          _a21.sent();

          return [3, 10];

        case 6:
          _x5 = _a21.sent();
          return [4, _x5];

        case 7:
          throw _a21.sent();

        case 8:
          return [4, 5];

        case 9:
          _a21.sent();

          return [7];

        case 10:
          return [3, 13];

        case 11:
          _thrown2 = _a21.sent();
          return [4, _thrown2];

        case 12:
          _a21.sent();

          return [3, 13];

        case 13:
          return [4, 6];

        case 14:
          _a21.sent();

          return [2];
      }
    });
  }

  it("should statically catch and then finalize", function () {
    check(usingThrow(), [0, 1, 2, 5, 3, 6]);
  });
  it("should dynamically catch and then finalize", function () {
    check(usingRaise(), [0, 1, 2, 5, 3, 6]);
  });
  it("should execute catch and finally blocks at most once", function () {
    var error = new Error();

    function gen() {
      var _t2, _e2;

      return _generator(this, function (_a22) {
        switch (_a22.label) {
          case 0:
            _a22.trys.push([0, 5, 15, 17]);

            _t2 = 1;

            switch (_t2) {
              case 1:
                return [3, 1];
            }

            return [3, 3];

          case 1:
            return [4, "a"];

          case 2:
            _a22.sent();

            return [3, 4];

          case 3:
            return [3, 4];

          case 4:
            throw error;

          case 5:
            _e2 = _a22.sent();
            assert.strictEqual(_e2, error);
            return [4, "b"];

          case 6:
            _a22.sent();

            _a22.label = 7;

          case 7:
            return [4, "c"];

          case 8:
            _a22.sent();

            return [3, 10];

          case 9:
            if (false) return [3, 7];
            _a22.label = 10;

          case 10:
            return [4, "d"];

          case 11:
            _a22.sent();

            return [3, 13];

          case 12:
            if (false) return [3, 7];
            _a22.label = 13;

          case 13:
            return [4, "e"];

          case 14:
            _a22.sent();

            return [3, 17];

          case 15:
            return [4, "f"];

          case 16:
            _a22.sent();

            return [7];

          case 17:
            return [2];
        }
      });
    }

    check(gen(), ["a", "b", "c", "d", "e", "f"]);
  });
  it("should handle backwards jumps in labeled loops", function () {
    function gen() {
      var firstTime;
      return _generator(this, function (_a23) {
        switch (_a23.label) {
          case 0:
            firstTime = true;
            _a23.label = 1;

          case 1:
            if (!true) return [3, 16];
            return [4, 0];

          case 2:
            _a23.sent();

            _a23.label = 3;

          case 3:
            _a23.trys.push([3,, 12, 14]);

            _a23.label = 4;

          case 4:
            if (!true) return [3, 10];
            return [4, 1];

          case 5:
            _a23.sent();

            if (!firstTime) return [3, 7];
            firstTime = false;
            return [4, 2];

          case 6:
            _a23.sent();

            return [3, 1];

          case 7:
            return [4, 3];

          case 8:
            _a23.sent();

            return [3, 10];

          case 9:
            return [3, 4];

          case 10:
            return [4, 4];

          case 11:
            _a23.sent();

            return [3, 16];

          case 12:
            return [4, 5];

          case 13:
            _a23.sent();

            return [7];

          case 14:
            return [4, 6];

          case 15:
            _a23.sent();

            return [3, 1];

          case 16:
            return [4, 7];

          case 17:
            _a23.sent();

            return [2];
        }
      });
    }

    check(gen(), [0, 1, 2, 5, 0, 1, 3, 4, 5, 7]);
  });
  it("should handle loop continue statements properly", function () {
    var error = new Error("thrown");
    var markers = [];

    function gen() {
      var c, _e3;

      return _generator(this, function (_a24) {
        switch (_a24.label) {
          case 0:
            c = 2;
            _a24.label = 1;

          case 1:
            if (!(c > 0)) return [3, 7];
            _a24.label = 2;

          case 2:
            _a24.trys.push([2, 4, 5, 6]);

            markers.push("try");
            return [4, c];

          case 3:
            _a24.sent();

            return [3, 6];

          case 4:
            _e3 = _a24.sent();
            assert.strictEqual(_e3, error);
            markers.push("catch");
            return [3, 1];

          case 5:
            markers.push("finally");
            return [7];

          case 6:
            markers.push("decrement");
            --c;
            return [3, 1];

          case 7:
            return [2];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: 2,
      done: false
    });
    assert.deepEqual(g.throw(error), {
      value: 2,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: void 0,
      done: true
    });
    assert.deepEqual(markers, ["try", "catch", "finally", "try", "finally", "decrement", "try", "finally", "decrement"]);
  });
});
describe("dynamic exception", function () {
  function gen(x, fname) {
    var _thrown3;

    return _generator(this, function (_a25) {
      switch (_a25.label) {
        case 0:
          _a25.trys.push([0, 1,, 3]);

          return [2, fns[fname](x)];

        case 1:
          _thrown3 = _a25.sent();
          return [4, _thrown3];

        case 2:
          _a25.sent();

          return [3, 3];

        case 3:
          return [2];
      }
    });
  }

  var fns = {
    f: function (x) {
      throw x;
    },
    g: function (x) {
      return x;
    }
  };
  it("should be dispatched correctly", function () {
    check(gen("asdf", "f"), ["asdf"]);
    check(gen("asdf", "g"), [], "asdf");
  });
});
describe("nested finally blocks", function () {
  function usingThrow() {
    var _thrown4;

    return _generator(this, function (_a26) {
      switch (_a26.label) {
        case 0:
          _a26.trys.push([0,, 11, 13]);

          _a26.label = 1;

        case 1:
          _a26.trys.push([1, 6, 8, 10]);

          _a26.label = 2;

        case 2:
          _a26.trys.push([2,, 3, 5]);

          throw "thrown";

        case 3:
          return [4, 1];

        case 4:
          _a26.sent();

          return [7];

        case 5:
          return [3, 10];

        case 6:
          _thrown4 = _a26.sent();
          return [4, _thrown4];

        case 7:
          _a26.sent();

          return [3, 10];

        case 8:
          return [4, 2];

        case 9:
          _a26.sent();

          return [7];

        case 10:
          return [3, 13];

        case 11:
          return [4, 3];

        case 12:
          _a26.sent();

          return [7];

        case 13:
          return [2];
      }
    });
  }

  function usingRaise() {
    var _thrown5;

    return _generator(this, function (_a27) {
      switch (_a27.label) {
        case 0:
          _a27.trys.push([0,, 11, 13]);

          _a27.label = 1;

        case 1:
          _a27.trys.push([1, 6, 8, 10]);

          _a27.label = 2;

        case 2:
          _a27.trys.push([2,, 3, 5]);

          raise("thrown");
          return [3, 5];

        case 3:
          return [4, 1];

        case 4:
          _a27.sent();

          return [7];

        case 5:
          return [3, 10];

        case 6:
          _thrown5 = _a27.sent();
          return [4, _thrown5];

        case 7:
          _a27.sent();

          return [3, 10];

        case 8:
          return [4, 2];

        case 9:
          _a27.sent();

          return [7];

        case 10:
          return [3, 13];

        case 11:
          return [4, 3];

        case 12:
          _a27.sent();

          return [7];

        case 13:
          return [2];
      }
    });
  }

  it("should statically execute in order", function () {
    check(usingThrow(), [1, "thrown", 2, 3]);
  });
  it("should dynamically execute in order", function () {
    check(usingRaise(), [1, "thrown", 2, 3]);
  });
});
describe("for-in loop generator", function () {
  it("should handle the simple case", function () {
    function gen() {
      var count, obj, _temp, _temp2, _temp3, key;

      return _generator(this, function (_a28) {
        switch (_a28.label) {
          case 0:
            count = 0;
            obj = {
              foo: 1,
              bar: 2
            };
            _temp = [];

            for (_temp2 in obj) _temp.push(_temp2);

            _temp3 = 0;
            _a28.label = 1;

          case 1:
            if (!(_temp3 < _temp.length)) return [3, 4];
            key = _temp[_temp3];
            assert(obj.hasOwnProperty(key), key + " must be own property");
            return [4, [key, obj[key]]];

          case 2:
            _a28.sent();

            count += 1;
            _a28.label = 3;

          case 3:
            _temp3++;
            return [3, 1];

          case 4:
            return [2, count];
        }
      });
    }

    check(gen(), [["foo", 1], ["bar", 2]], 2);
  });
  it("should handle break in loop", function () {
    function gen(obj) {
      var count, _temp4, _temp5, _temp6, key;

      return _generator(this, function (_a29) {
        switch (_a29.label) {
          case 0:
            count = 0;
            _temp4 = [];
            return [4, "why not"];

          case 1:
            for (_temp5 in _a29.sent(), obj) _temp4.push(_temp5);

            _temp6 = 0;
            _a29.label = 2;

          case 2:
            if (!(_temp6 < _temp4.length)) return [3, 5];
            key = _temp4[_temp6];
            if (!obj.hasOwnProperty(key)) return [3, 4];

            if (key === "skip") {
              return [3, 5];
            }

            count += 1;
            return [4, [key, obj[key]]];

          case 3:
            _a29.sent();

            _a29.label = 4;

          case 4:
            _temp6++;
            return [3, 2];

          case 5:
            return [2, count];
        }
      });
    }

    check(gen({
      a: 1,
      b: 2,
      skip: 3,
      c: 4
    }), ["why not", ["a", 1], ["b", 2]], 2);
  });
  it("should handle property deletion in loop", function () {
    function gen() {
      var count, obj, _temp7, _temp8, _temp9, key;

      return _generator(this, function (_a30) {
        switch (_a30.label) {
          case 0:
            count = 0;
            obj = {
              foo: 1,
              bar: 2
            };
            _temp7 = [];

            for (_temp8 in obj) _temp7.push(_temp8);

            _temp9 = 0;
            _a30.label = 1;

          case 1:
            if (!(_temp9 < _temp7.length)) return [3, 4];
            key = _temp7[_temp9];
            assert(obj.hasOwnProperty(key), key + " must be own property");
            return [4, [key, obj[key]]];

          case 2:
            _a30.sent();

            delete obj.bar;
            count += 1;
            _a30.label = 3;

          case 3:
            _temp9++;
            return [3, 1];

          case 4:
            return [2, count];
        }
      });
    }

    check(gen(), [["foo", 1]], 1);
  });
  it("should loop over inherited properties", function () {
    function gen() {
      var count, foo, _temp10, _temp11, _temp12, key;

      function Foo() {
        this.baz = 1;
      }

      return _generator(this, function (_a31) {
        switch (_a31.label) {
          case 0:
            count = 0;
            Foo.prototype.bar = 2;
            foo = new Foo();
            _temp10 = [];

            for (_temp11 in foo) _temp10.push(_temp11);

            _temp12 = 0;
            _a31.label = 1;

          case 1:
            if (!(_temp12 < _temp10.length)) return [3, 4];
            key = _temp10[_temp12];
            return [4, [key, foo[key]]];

          case 2:
            _a31.sent();

            count += 1;
            _a31.label = 3;

          case 3:
            _temp12++;
            return [3, 1];

          case 4:
            return [2, count];
        }
      });
    }

    check(gen(), [["baz", 1], ["bar", 2]], 2);
  });
  it("should handle risky object expressions", function () {
    function a(sent) {
      assert.strictEqual(sent, 1);
      a.called = true;
    }

    function b(sent) {
      assert.strictEqual(sent, 2);
      b.called = true;
      return {
        callee: b
      };
    }

    function gen() {
      var _temp13, _temp14, _temp15, _t3, _t4, key, _temp16, _t5, _temp17, _temp18, _temp19, key;

      return _generator(this, function (_a32) {
        switch (_a32.label) {
          case 0:
            assert.ok(!a.called);
            assert.ok(!b.called);
            _temp13 = [];
            _t3 = a;
            return [4, 0];

          case 1:
            _t3.apply(void 0, [_a32.sent()]);
            _t4 = b;
            return [4, 1];

          case 2:
            for (_temp14 in _t4.apply(void 0, [_a32.sent()])) _temp13.push(_temp14);

            _temp15 = 0;
            _a32.label = 3;

          case 3:
            if (!(_temp15 < _temp13.length)) return [3, 6];
            key = _temp13[_temp15];
            assert.ok(a.called);
            assert.ok(b.called);
            _t5 = (_temp16 = assert).strictEqual;
            return [4, key];

          case 4:
            _t5.apply(_temp16, [_a32.sent(), 3]);

            _a32.label = 5;

          case 5:
            _temp15++;
            return [3, 3];

          case 6:
            _temp17 = [];

            for (_temp18 in a(1), {
              foo: "foo",
              bar: "bar"
            }) _temp17.push(_temp18);

            _temp19 = 0;
            _a32.label = 7;

          case 7:
            if (!(_temp19 < _temp17.length)) return [3, 10];
            key = _temp17[_temp19];
            return [4, key];

          case 8:
            _a32.sent();

            _a32.label = 9;

          case 9:
            _temp19++;
            return [3, 7];

          case 10:
            return [2];
        }
      });
    }

    check(gen(), [0, 1, "callee", "foo", "bar"]);
  });
  it("should allow non-Identifier left-hand expressions", function () {
    var obj = {};
    var baz = {
      a: 1,
      b: 2,
      c: 3
    };
    var markers = [];

    function foo() {
      markers.push("called foo");
      return obj;
    }

    function gen() {
      var _temp20, _temp21, _temp22;

      return _generator(this, function (_a33) {
        switch (_a33.label) {
          case 0:
            _temp20 = [];

            for (_temp21 in baz) _temp20.push(_temp21);

            _temp22 = 0;
            _a33.label = 1;

          case 1:
            if (!(_temp22 < _temp20.length)) return [3, 4];
            foo().bar = _temp20[_temp22];
            markers.push(obj.bar);
            return [4, obj.bar];

          case 2:
            _a33.sent();

            _a33.label = 3;

          case 3:
            _temp22++;
            return [3, 1];

          case 4:
            return [2];
        }
      });
    }

    check(gen(), ["a", "b", "c"]);
    assert.deepEqual(markers, ["called foo", "a", "called foo", "b", "called foo", "c"]);
  });
});
describe("yield chain", function () {
  function gen(n) {
    return _generator(this, function (_a34) {
      switch (_a34.label) {
        case 0:
          return [4, n];

        case 1:
          return [4, _a34.sent()];

        case 2:
          return [4, _a34.sent()];

        case 3:
          return [4, _a34.sent()];

        case 4:
          return [2, _a34.sent()];
      }
    });
  }

  it("should have correct associativity", function () {
    check(gen(5), [5, 1, 2, 3], 4);
    check(gen("asdf"), ["asdf", 1, 2, 3], 4);
  });
});
describe("call expression ordering", function test() {
  it("should be correct with chained calls (#244)", function () {
    var g = function gen() {
      var _t6, _t7;

      return _generator(this, function (_a35) {
        switch (_a35.label) {
          case 0:
            return [4, 1];

          case 1:
            _t6 = _a35.sent();
            return [4, 2];

          case 2:
            _t7 = _t6.apply(void 0, [_a35.sent()]);
            return [4, 3];

          case 3:
            return [2, _t7.apply(void 0, [_a35.sent()])];
        }
      });
    }();

    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(g.next(function (sent2) {
      assert.strictEqual(sent2, "sent 2");
      return function (sent3) {
        assert.strictEqual(sent3, "sent 3");
        return "done";
      };
    }), {
      value: 2,
      done: false
    });
    assert.deepEqual(g.next("sent 2"), {
      value: 3,
      done: false
    });
    assert.deepEqual(g.next("sent 3"), {
      value: "done",
      done: true
    });
  });
  describe("when the callee is a member expression", function () {
    it("should allow vars assigned in the callee to be used in the args (#379)", function () {
      var g = function fn() {
        var _ref;

        return _generator(this, function (_a36) {
          switch (_a36.label) {
            case 0:
              return [4];

            case 1:
              (_ref = _a36.sent()).method(_ref);

              return [2];
          }
        });
      }();

      var res;
      var obj = {
        method(arg) {
          res = arg;
        }

      };
      g.next();
      g.next(obj);
      assert.strictEqual(obj, res);
    });
    it("should be correct when only the callee contains yield", function () {
      var order = [];

      function step(n) {
        order.push(n);
        return {
          method() {}

        };
      }

      var g = function fn() {
        return _generator(this, function (_a37) {
          switch (_a37.label) {
            case 0:
              return [4];

            case 1:
              (_a37.sent(), step(1)).method(step(2));
              return [2];
          }
        });
      }();

      g.next();
      g.next();
      assert.deepStrictEqual(order, [1, 2]);
    });
    it("should be correct when only the arguments contains yield", function () {
      var order = [];

      function step(n) {
        order.push(n);
        return {
          method() {}

        };
      }

      var g = function fn() {
        var _temp23, _t8, _temp24;

        return _generator(this, function (_a38) {
          switch (_a38.label) {
            case 0:
              _t8 = (_temp23 = step(1)).method;
              _temp24 = [step(2)];
              return [4];

            case 1:
              _t8.apply(_temp23, _temp24.concat([_a38.sent(), step(3)]));

              return [2];
          }
        });
      }();

      g.next();
      g.next();
      assert.deepStrictEqual(order, [1, 2, 3]);
    });
    it("should be correct when the callee and the arguments contain yield", function () {
      var order = [];

      function step(n) {
        order.push(n);
        return {
          method() {}

        };
      }

      var g = function fn() {
        var _temp25, _t9, _temp26;

        return _generator(this, function (_a39) {
          switch (_a39.label) {
            case 0:
              return [4];

            case 1:
              _t9 = (_temp25 = (_a39.sent(), step(1))).method;
              _temp26 = [step(2)];
              return [4];

            case 2:
              _t9.apply(_temp25, _temp26.concat([_a39.sent(), step(3)]));

              return [2];
          }
        });
      }();

      g.next();
      g.next();
      g.next();
      assert.deepStrictEqual(order, [1, 2, 3]);
    });
  });
});
describe("object literal generator", function () {
  function gen(a, b) {
    var _temp27, _t10;

    return _generator(this, function (_a40) {
      switch (_a40.label) {
        case 0:
          _temp27 = {};
          _t10 = a;
          return [4, a];

        case 1:
          _temp27.a = _t10 - _a40.sent();
          return [4, b];

        case 2:
          return [4, (_temp27.b = _a40.sent(), _temp27)];

        case 3:
          _a40.sent();

          return [2];
      }
    });
  }

  it("should yield the correct object", function () {
    check(gen(1, 2), [1, 2, {
      a: 0,
      b: 2
    }]);
    check(gen(4, 2), [4, 2, {
      a: 3,
      b: 2
    }]);
  });
});
describe("switch statement generator", function () {
  function gen(a) {
    var _t11;

    return _generator(this, function (_a41) {
      switch (_a41.label) {
        case 0:
          return [4, a];

        case 1:
          _t11 = _a41.sent();
          return [4, "x"];

        case 2:
          switch (_t11) {
            case _a41.sent() - a:
              return [3, 4];
          }

          return [4, "y"];

        case 3:
          switch (_t11) {
            case _a41.sent() - a:
              return [3, 5];
          }

          return [3, 6];

        case 4:
          return [2, "first case"];

        case 5:
          return [2, "second case"];

        case 6:
          return [2];
      }
    });
  }

  it("should jump to the correct cases", function () {
    check(gen(1), [1, "x"], "first case");
    check(gen(2), [2, "x", "y"], "second case");
  });
});
describe("infinite sequence generator", function () {
  function gen(start, step) {
    return _generator(this, function (_a42) {
      switch (_a42.label) {
        case 0:
          step = step || 1;
          _a42.label = 1;

        case 1:
          if (!true) return [3, 3];
          return [4, start];

        case 2:
          _a42.sent();

          start += step;
          return [3, 1];

        case 3:
          return [2];
      }
    });
  }

  function limit(g, stop) {
    var info;
    return _generator(this, function (_a43) {
      switch (_a43.label) {
        case 0:
          if (!true) return [3, 5];
          info = g.next();
          if (!info.done) return [3, 1];
          return [2];

        case 1:
          if (!(info.value < stop)) return [3, 3];
          return [4, info.value];

        case 2:
          _a43.sent();

          return [3, 4];

        case 3:
          return [2];

        case 4:
          return [3, 0];

        case 5:
          return [2];
      }
    });
  }

  it("should generate a lot of plausible values", function () {
    var g = gen(10, 2);
    assert.deepEqual(g.next(), {
      value: 10,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 12,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 14,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 16,
      done: false
    });
    var sum = 10 + 12 + 14 + 16;

    for (var n = 0; n < 1000; ++n) {
      var info = g.next();
      sum += info.value;
      assert.strictEqual(info.done, false);
    }

    assert.strictEqual(sum, 1017052);
  });
  it("should allow limiting", function () {
    check(limit(gen(10, 3), 20), [10, 13, 16, 19]);
  });
});
describe("generator function expression", function () {
  it("should behave just like a declared generator", function () {
    check(function (x, y) {
      return _generator(this, function (_a44) {
        switch (_a44.label) {
          case 0:
            return [4, x];

          case 1:
            _a44.sent();

            return [4, y];

          case 2:
            _a44.sent();

            return [4, x + y];

          case 3:
            _a44.sent();

            return [2, x * y];
        }
      });
    }(3, 7), [3, 7, 10], 21);
  });
});
describe("generator reentry attempt", function () {
  function gen(x) {
    var _err2;

    return _generator(this, function (_a45) {
      switch (_a45.label) {
        case 0:
          _a45.trys.push([0, 2,, 4]);

          return [4, x];

        case 1:
          _a45.sent().next(x);

          return [3, 4];

        case 2:
          _err2 = _a45.sent();
          return [4, _err2];

        case 3:
          _a45.sent();

          return [3, 4];

        case 4:
          return [2, x + 1];
      }
    });
  }

  it("should complain with a TypeError", function () {
    var g = gen(3);
    assert.deepEqual(g.next(), {
      value: 3,
      done: false
    });
    var complaint = g.next(g); // Sending the generator to itself.

    assert.ok(complaint.value instanceof Error);
    assert.strictEqual(complaint.value.message, "Generator is already executing.");
    assert.deepEqual(g.next(), {
      value: 4,
      done: true
    });
  });
});
describe("delegated yield", function () {
  it("should delegate correctly", function () {
    function gen(condition) {
      return _generator(this, function (_a46) {
        switch (_a46.label) {
          case 0:
            return [4, 0];

          case 1:
            _a46.sent();

            if (!condition) return [3, 5];
            return [4, 1];

          case 2:
            _a46.sent();

            return [5, _values(gen(false))];

          case 3:
            _a46.sent();

            return [4, 2];

          case 4:
            _a46.sent();

            _a46.label = 5;

          case 5:
            return [4, 3];

          case 6:
            _a46.sent();

            return [2];
        }
      });
    }

    check(gen(true), [0, 1, 0, 3, 2, 3]);
    check(gen(false), [0, 3]);
  });
  it("should cope with empty delegatees", function () {
    function gen(condition) {
      return _generator(this, function (_a47) {
        switch (_a47.label) {
          case 0:
            if (!condition) return [3, 4];
            return [4, 0];

          case 1:
            _a47.sent();

            return [5, _values(gen(false))];

          case 2:
            _a47.sent();

            return [4, 1];

          case 3:
            _a47.sent();

            _a47.label = 4;

          case 4:
            return [2];
        }
      });
    }

    check(gen(true), [0, 1]);
    check(gen(false), []);
  });
  it("should support deeper nesting", function () {
    function outer(n) {
      return _generator(this, function (_a48) {
        switch (_a48.label) {
          case 0:
            return [4, n];

          case 1:
            _a48.sent();

            return [5, _values(middle(n - 1, inner(n + 10)))];

          case 2:
            _a48.sent();

            return [4, n + 1];

          case 3:
            _a48.sent();

            return [2];
        }
      });
    }

    function middle(n, plusTen) {
      return _generator(this, function (_a49) {
        switch (_a49.label) {
          case 0:
            return [4, n];

          case 1:
            _a49.sent();

            return [5, _values(inner(n - 1))];

          case 2:
            _a49.sent();

            return [4, n + 1];

          case 3:
            _a49.sent();

            return [5, _values(plusTen)];

          case 4:
            _a49.sent();

            return [2];
        }
      });
    }

    function inner(n) {
      return _generator(this, function (_a50) {
        switch (_a50.label) {
          case 0:
            return [4, n];

          case 1:
            _a50.sent();

            return [2];
        }
      });
    }

    check(outer(5), [5, 4, 3, 5, 15, 6]);
  });
  it("should pass sent values through", function () {
    function outer(n) {
      return _generator(this, function (_a51) {
        switch (_a51.label) {
          case 0:
            return [5, _values(inner(n << 1))];

          case 1:
            _a51.sent();

            return [4, "zxcv"];

          case 2:
            _a51.sent();

            return [2];
        }
      });
    }

    function inner(n) {
      return _generator(this, function (_a52) {
        switch (_a52.label) {
          case 0:
            return [4, n];

          case 1:
            return [4, _a52.sent()];

          case 2:
            return [4, _a52.sent()];

          case 3:
            return [2, _a52.sent()];
        }
      });
    }

    var g = outer(3);
    assert.deepEqual(g.next(), {
      value: 6,
      done: false
    });
    assert.deepEqual(g.next(1), {
      value: 1,
      done: false
    });
    assert.deepEqual(g.next(2), {
      value: 2,
      done: false
    });
    assert.deepEqual(g.next(4), {
      value: "zxcv",
      done: false
    });
    assert.deepEqual(g.next(5), {
      value: void 0,
      done: true
    });
  });
  it("should be governed by enclosing try statements", function () {
    var error = new Error("thrown");

    function outer(n) {
      var _err3;

      return _generator(this, function (_a53) {
        switch (_a53.label) {
          case 0:
            _a53.trys.push([0, 4,, 6]);

            return [4, 0];

          case 1:
            _a53.sent();

            return [5, _values(inner(n))];

          case 2:
            _a53.sent();

            return [4, 1];

          case 3:
            _a53.sent();

            return [3, 6];

          case 4:
            _err3 = _a53.sent();
            return [4, _err3.message];

          case 5:
            _a53.sent();

            return [3, 6];

          case 6:
            return [4, 4];

          case 7:
            _a53.sent();

            return [2];
        }
      });
    }

    function inner(n) {
      return _generator(this, function (_a54) {
        switch (_a54.label) {
          case 0:
            if (!(n-- > 0)) return [3, 5];
            _a54.label = 1;

          case 1:
            _a54.trys.push([1,, 2, 4]);

            if (n === 3) {
              raise(error);
            }

            return [3, 4];

          case 2:
            return [4, n];

          case 3:
            _a54.sent();

            return [7];

          case 4:
            return [3, 0];

          case 5:
            return [2];
        }
      });
    }

    check(outer(3), [0, 2, 1, 0, 1, 4]);
    check(outer(5), [0, 4, 3, "thrown", 4]);
  });
  it("should dispatch .thrown exceptions correctly", function () {
    var count = 0;

    function gen() {
      var _err4;

      return _generator(this, function (_a55) {
        switch (_a55.label) {
          case 0:
            return [5, _values(inner())];

          case 1:
            _a55.sent();

            _a55.label = 2;

          case 2:
            _a55.trys.push([2, 4,, 5]);

            return [5, _values(inner())];

          case 3:
            _a55.sent();

            return [3, 5];

          case 4:
            _err4 = _a55.sent();
            return [3, 5];

          case 5:
            return [5, _values(inner())];

          case 6:
            return [2, _a55.sent()];
        }
      });
    }

    function inner() {
      return _generator(this, function (_a56) {
        switch (_a56.label) {
          case 0:
            return [4, count++];

          case 1:
            return [2, _a56.sent()];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: 0,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(g.throw(new Error("lol")), {
      value: 2,
      done: false
    });
    assert.deepEqual(g.next("sent"), {
      value: "sent",
      done: true
    });
  });
  it("should call .return methods of delegate iterators", function () {
    var throwee = new Error("argument to gen.throw");
    var thrownFromThrow = new Error("thrown from throw method");
    var thrownFromReturn = new Error("thrown from return method");

    function gen(delegate) {
      var _err5;

      return _generator(this, function (_a57) {
        switch (_a57.label) {
          case 0:
            _a57.trys.push([0, 2,, 3]);

            return [5, _values(delegate)];

          case 1:
            return [2, _a57.sent()];

          case 2:
            _err5 = _a57.sent();
            return [2, _err5];

          case 3:
            return [2];
        }
      });
    }

    function check(throwMethod, returnMethod) {
      var throwCalled = false;
      var returnCalled = false;
      var count = 0;
      var iterator = {
        next: function () {
          return {
            value: count++,
            done: false
          };
        }
      };

      iterator[_Symbol.iterator] = function () {
        return this;
      };

      if (throwMethod) {
        iterator["throw"] = function () {
          throwCalled = true;
          return throwMethod.apply(this, arguments);
        };
      }

      if (returnMethod) {
        iterator["return"] = function () {
          returnCalled = true;
          return returnMethod.apply(this, arguments);
        };
      }

      var g = gen(iterator);
      assert.deepEqual(g.next(), {
        value: 0,
        done: false
      });
      assert.deepEqual(g.next(), {
        value: 1,
        done: false
      });
      assert.deepEqual(g.next(), {
        value: 2,
        done: false
      });
      assert.deepEqual(g.next(), {
        value: 3,
        done: false
      });
      assert.strictEqual(throwCalled, false);
      assert.strictEqual(returnCalled, false);
      var result = {};
      result.throwResult = g.throw(throwee);
      result.throwCalled = throwCalled;
      result.returnCalled = returnCalled;
      return result;
    }

    var checkResult = check(undefined, function () {
      throw thrownFromReturn;
    });

    if (fullCompatibility) {
      // BUG: Nodes <v6 neglect to call .return here.
      assert.strictEqual(checkResult.throwResult.value, thrownFromReturn);
      assert.strictEqual(checkResult.returnCalled, true);
    } else {
      // This is the Error that results from trying to call the undefined
      // .throw method of the iterator.
      assert.ok(checkResult.throwResult.value instanceof Error);
    }

    assert.strictEqual(checkResult.throwResult.done, true);
    assert.strictEqual(checkResult.throwCalled, false);
    checkResult = check(undefined, function () {
      return {
        value: "from return",
        done: true
      };
    });
    assert.notStrictEqual(checkResult.throwResult.value, throwee); // This is the TypeError that results from trying to call the
    // undefined .throw method of the iterator.

    assert.ok(checkResult.throwResult.value instanceof TypeError);
    assert.strictEqual(checkResult.throwResult.done, true);
    assert.strictEqual(checkResult.throwCalled, false);

    if (fullCompatibility) {
      // BUG: Nodes <v6 neglect to call .return here.
      assert.strictEqual(checkResult.returnCalled, true);
    }

    var checkResult = check(function (thrown) {
      return {
        value: "from throw",
        done: true
      };
    }, function () {
      throw thrownFromReturn;
    });
    assert.strictEqual(checkResult.throwResult.value, "from throw");
    assert.strictEqual(checkResult.throwResult.done, true);
    assert.strictEqual(checkResult.throwCalled, true);
    assert.strictEqual(checkResult.returnCalled, false);
    var checkResult = check(function (thrown) {
      throw thrownFromThrow;
    }, function () {
      throw thrownFromReturn;
    });
    assert.strictEqual(checkResult.throwResult.value, thrownFromThrow);
    assert.strictEqual(checkResult.throwResult.done, true);
    assert.strictEqual(checkResult.throwCalled, true);
    assert.strictEqual(checkResult.returnCalled, false);
    var checkResult = check(undefined, undefined);

    if (fullCompatibility) {
      assert.notStrictEqual(checkResult.throwResult.value, throwee); // This is the TypeError that results from trying to call the
      // undefined .throw method of the iterator.

      assert.ok(checkResult.throwResult.value instanceof Error);
      assert.strictEqual(checkResult.throwResult.done, true);
    }

    assert.strictEqual(checkResult.throwCalled, false);
    assert.strictEqual(checkResult.returnCalled, false);
  });
  it("should not be required to have a .return method", function () {
    function gen(delegate) {
      return _generator(this, function (_a58) {
        switch (_a58.label) {
          case 0:
            return [5, _values(delegate)];

          case 1:
            return [2, _a58.sent()];
        }
      });
    }

    var inner = range(5);
    var iterator = {
      next: inner.next.bind(inner)
    };

    iterator[_Symbol.iterator] = function () {
      return this;
    };

    var g = gen(iterator);
    assert.deepEqual(g.next(), {
      value: 0,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 2,
      done: false
    });

    if (typeof g.return === "function") {
      var returnResult = g.return(-1);

      if (fullCompatibility) {
        assert.deepEqual(returnResult, {
          value: -1,
          done: true
        });
      }

      assert.deepEqual(g.next(), {
        value: void 0,
        done: true
      });
    }
  });
  it("should execute finally blocks of delegate generators", function () {
    var markers = [];

    function parent() {
      return _generator(this, function (_a59) {
        switch (_a59.label) {
          case 0:
            _a59.trys.push([0,, 2, 3]);

            return [5, _values(child())];

          case 1:
            return [2, _a59.sent()];

          case 2:
            markers.push("parent");
            return [7];

          case 3:
            return [2];
        }
      });
    }

    function child() {
      return _generator(this, function (_a60) {
        switch (_a60.label) {
          case 0:
            _a60.trys.push([0,, 2, 4]);

            return [4, 1];

          case 1:
            return [2, _a60.sent()];

          case 2:
            return [4, 2];

          case 3:
            _a60.sent();

            markers.push("child");
            return [7];

          case 4:
            return [2];
        }
      });
    }

    var g = parent();
    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    }); // The generator function has been carefully constructed so that .next
    // and .return have the same effect, so that these tests should pass
    // in versions of Node that do not support .return.

    assert.deepEqual((g.return || g.next).call(g, 3), {
      value: 2,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 3,
      done: true
    });
    assert.deepEqual(markers, ["child", "parent"]);
  });
  it("should evaluate to the return value of the delegate", function () {
    function inner() {
      return _generator(this, function (_a61) {
        switch (_a61.label) {
          case 0:
            return [4, 1];

          case 1:
            _a61.sent();

            return [2, 2];
        }
      });
    }

    function outer(delegate) {
      return _generator(this, function (_a62) {
        switch (_a62.label) {
          case 0:
            return [5, _values(delegate)];

          case 1:
            return [2, _a62.sent()];
        }
      });
    }

    check(outer(inner()), [1], 2);
    var arrayDelegate = [3, 4];

    if (!fullCompatibility) {
      // Node v0.11 doesn't know how to turn arrays into iterators over
      // their elements without a little help.
      arrayDelegate = regeneratorRuntime.values(arrayDelegate);
    }

    check(outer(arrayDelegate), [3, 4], void 0); // See issue #143.

    if (!fullCompatibility) {
      return;
    }

    var iterator = {
      next: function () {
        return {
          value: "oyez",
          done: true
        };
      }
    };

    iterator[_Symbol.iterator] = function () {
      return this;
    };

    check(outer(iterator), [], "oyez");
  });
  it("should work as a subexpression", function () {
    function inner(arg) {
      return _generator(this, function (_a63) {
        return [2, arg];
      });
    }

    function gen(delegate) {
      var _t12;

      return _generator(this, function (_a64) {
        switch (_a64.label) {
          case 0:
            _t12 = 1;
            return [5, _values(delegate)];

          case 1:
            return [2, _t12 + _a64.sent()];
        }
      });
    }

    check(gen(inner(2)), [], 3);
    check(gen(inner(3)), [], 4);

    if (!fullCompatibility) {
      return;
    }

    var iterator = {
      next: function () {
        return {
          value: "foo",
          done: true
        };
      }
    };

    iterator[_Symbol.iterator] = function () {
      return this;
    };

    check(gen(iterator), [], "1foo");
  });
});
(fullCompatibility ? describe // run these tests
: xdescribe // skip running these tests
)("generator return method", function () {
  it("should work with newborn generators", function () {
    function gen() {
      return _generator(this, function (_a65) {
        switch (_a65.label) {
          case 0:
            return [4, 0];

          case 1:
            _a65.sent();

            return [2];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.return("argument"), {
      value: "argument",
      done: true
    });
    assertAlreadyFinished(g);
  });
  it("should behave as if generator actually returned", function () {
    var executedFinally = false;

    function gen() {
      var _err6;

      return _generator(this, function (_a66) {
        switch (_a66.label) {
          case 0:
            _a66.trys.push([0, 2, 3, 4]);

            return [4, 0];

          case 1:
            _a66.sent();

            return [3, 4];

          case 2:
            _err6 = _a66.sent();
            assert.ok(false, "should not have executed the catch handler");
            return [3, 4];

          case 3:
            executedFinally = true;
            return [7];

          case 4:
            return [2];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: 0,
      done: false
    });
    assert.deepEqual(g.return("argument"), {
      value: "argument",
      done: true
    });
    assert.strictEqual(executedFinally, true);
    assertAlreadyFinished(g);
  });
  it("should return both delegate and delegator", function () {
    var checkpoints = [];

    function callee(errorToThrow) {
      return _generator(this, function (_a67) {
        switch (_a67.label) {
          case 0:
            _a67.trys.push([0,, 3, 4]);

            return [4, 1];

          case 1:
            _a67.sent();

            return [4, 2];

          case 2:
            _a67.sent();

            return [3, 4];

          case 3:
            checkpoints.push("callee finally");

            if (errorToThrow) {
              throw errorToThrow;
            }

            return [7];

          case 4:
            return [2];
        }
      });
    }

    function caller(errorToThrow) {
      return _generator(this, function (_a68) {
        switch (_a68.label) {
          case 0:
            _a68.trys.push([0,, 4, 5]);

            return [4, 0];

          case 1:
            _a68.sent();

            return [5, _values(callee(errorToThrow))];

          case 2:
            _a68.sent();

            return [4, 3];

          case 3:
            _a68.sent();

            return [3, 5];

          case 4:
            checkpoints.push("caller finally");
            return [7];

          case 5:
            return [2];
        }
      });
    }

    var g1 = caller();
    assert.deepEqual(g1.next(), {
      value: 0,
      done: false
    });
    assert.deepEqual(g1.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(g1.return(-1), {
      value: -1,
      done: true
    });
    assert.deepEqual(checkpoints, ["callee finally", "caller finally"]);
    var error = new Error("thrown from callee");
    var g2 = caller(error);
    assert.deepEqual(g2.next(), {
      value: 0,
      done: false
    });
    assert.deepEqual(g2.next(), {
      value: 1,
      done: false
    });

    try {
      g2.return(-1);
      assert.ok(false, "should have thrown an exception");
    } catch (thrown) {
      assert.strictEqual(thrown, error);
    }

    assert.deepEqual(checkpoints, ["callee finally", "caller finally", "callee finally", "caller finally"]);
  });
});
describe("function declaration hoisting", function () {
  it("should work even if the declarations are out of order", function () {
    function gen(n) {
      function increment(x) {
        return x + 1;
      }

      function _halve(x) {
        return x >> 1;
      }

      function decrement(x) {
        return x - 1;
      }

      return _generator(this, function (_a69) {
        switch (_a69.label) {
          case 0:
            return [4, increment(n)];

          case 1:
            _a69.sent();

            if (!(n % 2)) return [3, 3];
            return [4, _halve(decrement(n))];

          case 2:
            _a69.sent();

            return [3, 4];

          case 3:
            // The behavior of function declarations nested inside conditional
            // blocks is notoriously underspecified, and in V8 it appears the
            // halve function is still defined when we take this branch, so
            // "undefine" it for consistency with regenerator semantics.
            halve = void 0;
            _a69.label = 4;

          case 4:
            return [4, increment(increment(n))];

          case 5:
            _a69.sent();

            return [2];
        }
      });
    }

    check(gen(3), [4, 1, 5]);
    check(gen(4), [5, 6]);
  });
  it("should work for nested generator function declarations", function () {
    function outer(n) {
      // Note that this function declaration comes after everything else
      // in the outer function, but needs to be fully available above.
      function inner(n) {
        return _generator(this, function (_a71) {
          switch (_a71.label) {
            case 0:
              return [4, n - 1];

            case 1:
              _a71.sent();

              return [4, n];

            case 2:
              _a71.sent();

              return [4, n + 1];

            case 3:
              return [2, _a71.sent()];
          }
        });
      }

      return _generator(this, function (_a70) {
        switch (_a70.label) {
          case 0:
            return [4, 0];

          case 1:
            _a70.sent();

            return [5, _values(inner(n))];

          case 2:
            return [2, _a70.sent()];
        }
      });
    }

    check(outer(2), [0, 1, 2, 3], 4);
  });
  it("should not interfere with function rebinding", function () {
    function rebindTo(value) {
      var oldValue = toBeRebound;
      toBeRebound = value;
      return oldValue;
    }

    function toBeRebound() {
      var originalValue;
      return _generator(this, function (_a72) {
        switch (_a72.label) {
          case 0:
            originalValue = toBeRebound;
            return [4, toBeRebound];

          case 1:
            _a72.sent();

            assert.strictEqual(rebindTo(42), originalValue);
            return [4, toBeRebound];

          case 2:
            _a72.sent();

            assert.strictEqual(rebindTo("asdf"), 42);
            return [4, toBeRebound];

          case 3:
            _a72.sent();

            return [2];
        }
      });
    }

    var original = toBeRebound;
    check(toBeRebound(), [original, 42, "asdf"]);

    function attemptToRebind(value) {
      var oldValue = safe;
      safe = value;
      return oldValue;
    }

    var safe = function safe() {
      var originalValue;
      return _generator(this, function (_a73) {
        switch (_a73.label) {
          case 0:
            originalValue = safe;
            return [4, safe];

          case 1:
            _a73.sent();

            assert.strictEqual(attemptToRebind(42), originalValue);
            return [4, safe];

          case 2:
            _a73.sent();

            assert.strictEqual(attemptToRebind("asdf"), 42);
            return [4, safe];

          case 3:
            _a73.sent();

            return [2];
        }
      });
    };

    original = safe;
    check(safe(), [safe, safe, safe]);
  });
  it("should not interfere with nested function rebinding itself", function () {
    function parent() {
      function toBeRebound() {
        toBeRebound = 42;
      }

      return _generator(this, function (_a74) {
        switch (_a74.label) {
          case 0:
            toBeRebound();
            return [4, toBeRebound];

          case 1:
            _a74.sent();

            return [2];
        }
      });
    }

    check(parent(), [42]);
  });
});
describe("the arguments object", function () {
  it("should work in simple variadic functions", function () {
    function sum() {
      var _args73 = arguments;
      var result, i;
      return _generator(this, function (_a75) {
        switch (_a75.label) {
          case 0:
            result = 0;
            i = 0;
            _a75.label = 1;

          case 1:
            if (!(i < _args73.length)) return [3, 4];
            return [4, result += _args73[i]];

          case 2:
            _a75.sent();

            _a75.label = 3;

          case 3:
            ++i;
            return [3, 1];

          case 4:
            return [2, result];
        }
      });
    }

    check(sum(1, 2, 3), [1, 3, 6], 6);
    check(sum(9, -5, 3, 0, 2), [9, 4, 7, 7, 9], 9);
  });
  it("should alias function parameters", function () {
    function gen(x, y) {
      var _args74 = arguments;
      var temp;
      return _generator(this, function (_a76) {
        switch (_a76.label) {
          case 0:
            return [4, x];

          case 1:
            _a76.sent();

            ++_args74[0];
            return [4, x];

          case 2:
            _a76.sent();

            return [4, y];

          case 3:
            _a76.sent();

            --_args74[1];
            return [4, y];

          case 4:
            _a76.sent();

            temp = y;
            y = x;
            x = temp;
            return [4, x];

          case 5:
            _a76.sent();

            return [4, y];

          case 6:
            _a76.sent();

            return [2];
        }
      });
    }

    check(gen(3, 7), [3, 4, 7, 6, 6, 4]);
    check(gen(10, -5), [10, 11, -5, -6, -6, 11]);
  });
  it("should be shadowable by explicit declarations (sloppy)", function () {
    function asParameter(x, arguments) {
      var _args75 = arguments;
      return _generator(this, function (_a77) {
        switch (_a77.label) {
          case 0:
            _args75 = _args75 + 1;
            return [4, x + _args75];

          case 1:
            _a77.sent();

            return [2];
        }
      });
    }

    check(asParameter(4, 5), [10]);
    check(asParameter("asdf", "zxcv"), ["asdfzxcv1"]);

    function asVariable(x) {
      var _args76 = arguments;
      var arguments;
      return _generator(this, function (_a78) {
        switch (_a78.label) {
          case 0:
            arguments = x + 1;
            return [4, _args76];

          case 1:
            _a78.sent();

            return [2];
        }
      });
    }

    check(asVariable(4), [5]);
    check(asVariable("asdf"), ["asdf1"]);
  });
  it("should not get confused by properties", function () {
    function gen(args) {
      var obj;
      return _generator(this, function (_a79) {
        switch (_a79.label) {
          case 0:
            obj = {
              arguments: args
            };
            return [4, obj.arguments];

          case 1:
            _a79.sent();

            obj.arguments = "oyez";
            return [4, obj];

          case 2:
            _a79.sent();

            return [2];
        }
      });
    }

    check(gen(42), [42, {
      arguments: "oyez"
    }]);
  });
  it("supports .callee", function () {
    function gen(doYield) {
      var _args78 = arguments;
      return _generator(this, function (_a80) {
        switch (_a80.label) {
          case 0:
            return [4, 1];

          case 1:
            _a80.sent();

            if (!doYield) return [3, 3];
            return [4, 2];

          case 2:
            _a80.sent();

            return [3, 7];

          case 3:
            return [4, 3];

          case 4:
            _a80.sent();

            return [5, _values(_args78.callee(true))];

          case 5:
            _a80.sent();

            return [4, 4];

          case 6:
            _a80.sent();

            _a80.label = 7;

          case 7:
            return [4, 5];

          case 8:
            _a80.sent();

            return [2];
        }
      });
    }

    check(gen(false), [1, 3, 1, 2, 5, 4, 5]);
  });
});
describe("the this object", function () {
  it("should default to undefined (strict)", function () {
    function gen() {
      "use strict";

      return _generator(this, function (_a81) {
        switch (_a81.label) {
          case 0:
            return [4, this];

          case 1:
            _a81.sent();

            return [2, this];
        }
      });
    }

    var it = gen();
    assert.strictEqual(it.next().value, undefined);
    assert.strictEqual(it.next().value, undefined);
  });
  it("should respect .call's this", function () {
    function gen() {
      return _generator(this, function (_a82) {
        switch (_a82.label) {
          case 0:
            return [4, this];

          case 1:
            _a82.sent();

            return [2, this];
        }
      });
    }

    var self = {};
    var it = gen.call(self);
    assert.strictEqual(it.next().value, self);
    assert.strictEqual(it.next().value, self);
  });
});
describe("directive strings", function () {
  function strict() {
    "use strict";

    return _generator(this, function (_a83) {
      switch (_a83.label) {
        case 0:
          return [4, !this];

        case 1:
          _a83.sent();

          return [2];
      }
    });
  }

  function sloppy() {
    return _generator(this, function (_a84) {
      switch (_a84.label) {
        case 0:
          return [4, !this];

        case 1:
          _a84.sent();

          return [2];
      }
    });
  }

  it("should be kept at top of outer function", function () {
    var strictCode = String(strict);
    var useStrictIndex = strictCode.indexOf("use strict");
    var thisIndex = strictCode.indexOf("this");
    assert.notStrictEqual(useStrictIndex, -1);
    assert.ok(thisIndex > useStrictIndex);
    assert.strictEqual(String(sloppy).indexOf("use strict"), -1);
    check(strict(), [true]);
    check(sloppy(), [false]);
  });
});
describe("catch parameter shadowing", function () {
  it("should leave outer variables unmodified", function () {
    function gen(x) {
      var y, _x6, _y;

      return _generator(this, function (_a85) {
        switch (_a85.label) {
          case 0:
            y = x + 1;
            _a85.label = 1;

          case 1:
            _a85.trys.push([1, 2,, 5]);

            throw x + 2;

          case 2:
            _x6 = _a85.sent();
            return [4, _x6];

          case 3:
            _a85.sent();

            _x6 += 1;
            return [4, _x6];

          case 4:
            _a85.sent();

            return [3, 5];

          case 5:
            return [4, x];

          case 6:
            _a85.sent();

            _a85.label = 7;

          case 7:
            _a85.trys.push([7, 8,, 11]);

            throw x + 3;

          case 8:
            _y = _a85.sent();
            return [4, _y];

          case 9:
            _a85.sent();

            _y *= 2;
            return [4, _y];

          case 10:
            _a85.sent();

            return [3, 11];

          case 11:
            return [4, y];

          case 12:
            _a85.sent();

            return [2];
        }
      });
    }

    check(gen(1), [3, 4, 1, 4, 8, 2]);
    check(gen(2), [4, 5, 2, 5, 10, 3]);
  }); // This test will be fixed by https://github.com/babel/babel/pull/4880.

  (fullCompatibility ? xit : it)("should not replace variables defined in inner scopes", function () {
    function gen(x) {
      var _x7;

      return _generator(this, function (_a86) {
        switch (_a86.label) {
          case 0:
            _a86.trys.push([0, 1,, 7]);

            throw x;

          case 1:
            _x7 = _a86.sent();
            return [4, _x7];

          case 2:
            _a86.sent();

            return [4, function (x) {
              return x += 1;
            }(_x7 + 1)];

          case 3:
            _a86.sent();

            return [4, function () {
              var x = arguments[0];
              return x * 2;
            }(_x7 + 2)];

          case 4:
            _a86.sent();

            return [4, function () {
              function notCalled(x) {
                throw x;
              }

              _x7 >>= 1;
              return _x7;
            }()];

          case 5:
            _a86.sent();

            return [4, _x7 -= 1];

          case 6:
            _a86.sent();

            return [3, 7];

          case 7:
            return [4, x];

          case 8:
            _a86.sent();

            return [2];
        }
      });
    }

    check(gen(10), [10, 12, 24, 5, 4, 10]);
    check(gen(11), [11, 13, 26, 5, 4, 11]);
  });
  it("should allow nested catch parameters of the same name", function () {
    function gen() {
      var _e4, _e5;

      return _generator(this, function (_a87) {
        switch (_a87.label) {
          case 0:
            _a87.trys.push([0, 1,, 8]);

            raise("e1");
            return [3, 8];

          case 1:
            _e4 = _a87.sent();
            return [4, _e4];

          case 2:
            _a87.sent();

            _a87.label = 3;

          case 3:
            _a87.trys.push([3, 4,, 6]);

            raise("e2");
            return [3, 6];

          case 4:
            _e5 = _a87.sent();
            return [4, _e5];

          case 5:
            _a87.sent();

            return [3, 6];

          case 6:
            return [4, _e4];

          case 7:
            _a87.sent();

            return [3, 8];

          case 8:
            return [2];
        }
      });
    }

    check(gen(), ["e1", "e2", "e1"]);
  });
  it("should not interfere with non-referential identifiers", function () {
    function gen() {
      var _e6;

      return _generator(this, function (_a88) {
        switch (_a88.label) {
          case 0:
            _a88.trys.push([0, 3,, 5]);

            return [4, 1];

          case 1:
            _a88.sent();

            raise(new Error("oyez"));
            return [4, 2];

          case 2:
            _a88.sent();

            return [3, 5];

          case 3:
            _e6 = _a88.sent();
            return [4, 3];

          case 4:
            _a88.sent();

            _e6.e = "e.e";
            _e6[_e6.message] = "e.oyez";
            return [2, {
              e: _e6,
              identity: function (x) {
                var e = x;
                return e;
              }
            }];

          case 5:
            return [4, 4];

          case 6:
            _a88.sent();

            return [2];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 3,
      done: false
    });
    var info = g.next();
    assert.strictEqual(info.done, true);
    assert.strictEqual(info.value.e.message, "oyez");
    assert.strictEqual(info.value.e.e, "e.e");
    assert.strictEqual(info.value.e.oyez, "e.oyez");
    assert.strictEqual(info.value.identity("same"), "same");
  });
});
describe("empty while loops", function () {
  it("should be preserved in generated code", function () {
    function gen(x) {
      return _generator(this, function (_a89) {
        while (x) {// empty while loop
        }

        do {// empty do-while loop
        } while (x);

        return [2, gen.toString()];
      });
    }

    var info = gen(false).next();
    assert.strictEqual(info.done, true);
    assert.ok(/empty while loop/.test(info.value));
    assert.ok(/empty do-while loop/.test(info.value));
  });
});
describe("object literals with multiple yields", function () {
  it("should receive different sent values", function () {
    function gen(fn) {
      var _temp28, _t13, _temp29, _temp30;

      return _generator(this, function (_a90) {
        switch (_a90.label) {
          case 0:
            _temp28 = {};
            return [4, "a"];

          case 1:
            _temp28.a = _a90.sent();
            return [4, "b"];

          case 2:
            _temp28.b = _a90.sent();
            _t13 = fn;
            return [4, "c"];

          case 3:
            _temp29 = [_a90.sent()];
            return [4, "d"];

          case 4:
            _temp28.c = _t13.apply(void 0, _temp29.concat([_a90.sent()]));
            return [4, "e"];

          case 5:
            _temp30 = [_a90.sent()];
            return [4, "f"];

          case 6:
            return [2, (_temp28.d = _temp30.concat([_a90.sent()]), _temp28)];
        }
      });
    }

    check(gen(function sum(x, y) {
      return x + y;
    }), ["a", "b", "c", "d", "e", "f"], {
      a: 1,
      b: 2,
      c: 3 + 4,
      d: [5, 6]
    });
  });
});
describe("generator .throw method", function () {
  it("should work after the final call to .next", function () {
    function gen() {
      return _generator(this, function (_a91) {
        switch (_a91.label) {
          case 0:
            return [4, 1];

          case 1:
            _a91.sent();

            return [2];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    });
    var exception = new Error("unhandled exception");

    try {
      g.throw(exception);
      assert.ok(false, "should have thrown an exception");
    } catch (err) {
      assert.strictEqual(err, exception);
    }
  });
  it("should immediately complete a new-born generator", function () {
    var began = false;

    function gen() {
      return _generator(this, function (_a92) {
        switch (_a92.label) {
          case 0:
            began = true;
            return [4, 1];

          case 1:
            _a92.sent();

            return [2];
        }
      });
    }

    var g = gen();
    var exception = new Error("unhandled exception");

    try {
      g.throw(exception);
      assert.ok(false, "should have thrown an exception");
    } catch (err) {
      assert.strictEqual(err, exception);
      assert.strictEqual(began, false);
    }
  });
  it("should not propagate errors handled inside a delegate", function () {
    function outer() {
      var _err7;

      return _generator(this, function (_a93) {
        switch (_a93.label) {
          case 0:
            _a93.trys.push([0, 2,, 3]);

            return [5, _values(inner())];

          case 1:
            _a93.sent();

            return [3, 3];

          case 2:
            _err7 = _a93.sent();
            return [2, -1];

          case 3:
            return [2, 1];
        }
      });
    }

    function inner() {
      var _e7;

      return _generator(this, function (_a94) {
        switch (_a94.label) {
          case 0:
            _a94.trys.push([0, 2,, 3]);

            return [4, void 0];

          case 1:
            _a94.sent();

            return [3, 3];

          case 2:
            _e7 = _a94.sent();
            return [2];

          case 3:
            return [2];
        }
      });
    }

    var g = outer();
    g.next();
    assert.equal(g.throw(new Error('foo')).value, 1);
  });
  it("should propagate errors unhandled inside a delegate", function () {
    function outer() {
      var _err8;

      return _generator(this, function (_a95) {
        switch (_a95.label) {
          case 0:
            _a95.trys.push([0, 2,, 3]);

            return [5, _values(inner())];

          case 1:
            _a95.sent();

            return [3, 3];

          case 2:
            _err8 = _a95.sent();
            return [2, -1];

          case 3:
            return [2, 1];
        }
      });
    }

    function inner() {
      return _generator(this, function (_a96) {
        switch (_a96.label) {
          case 0:
            return [4, void 0];

          case 1:
            _a96.sent();

            return [2];
        }
      });
    }

    var g = outer();
    g.next();
    assert.equal(g.throw(new Error('foo')).value, -1);
  });
});
describe("unqualified function calls", function () {
  it("should have a global `this` object", function () {
    function getThis() {
      return this;
    } // This is almost certainly the global object, but there's a chance it
    // might be null or undefined (in strict mode).


    var unqualifiedThis = getThis();

    function invoke() {
      return _generator(this, function (_a97) {
        switch (_a97.label) {
          case 0:
            return [4, "dummy"];

          case 1:
            return [2, _a97.sent()()];
        }
      });
    }

    var g = invoke();
    var info = g.next();
    assert.deepEqual(info, {
      value: "dummy",
      done: false
    });
    info = g.next(getThis); // Avoid using assert.strictEqual when the arguments might equal the
    // global object, since JSON.stringify chokes on circular structures.

    assert.ok(info.value === unqualifiedThis);
    assert.strictEqual(info.done, true);
  });
});
describe("yield* expression results", function () {
  it("have correct values", function () {
    function foo() {
      return _generator(this, function (_a98) {
        switch (_a98.label) {
          case 0:
            return [4, 0];

          case 1:
            _a98.sent();

            return [5, _values(bar())];

          case 2:
            return [2, _a98.sent()];
        }
      });
    }

    function bar() {
      return _generator(this, function (_a99) {
        switch (_a99.label) {
          case 0:
            return [4, 1];

          case 1:
            _a99.sent();

            return [2, 2];
        }
      });
    }

    check(foo(), [0, 1], 2);
  });
  it("can be used in complex expressions", function () {
    function pumpNumber(gen) {
      var n = 0;

      while (true) {
        var res = n > 0 ? gen.next(n) : gen.next();
        n = res.value;

        if (res.done) {
          return n;
        }
      }
    }

    function foo() {
      var _t14;

      return _generator(this, function (_a100) {
        switch (_a100.label) {
          case 0:
            return [5, _values(bar())];

          case 1:
            _t14 = _a100.sent();
            return [5, _values(bar())];

          case 2:
            return [2, _t14 + _a100.sent()];
        }
      });
    }

    function bar() {
      var _t15;

      return _generator(this, function (_a101) {
        switch (_a101.label) {
          case 0:
            return [4, 2];

          case 1:
            _t15 = _a101.sent();
            return [4, 3];

          case 2:
            return [2, _t15 + _a101.sent()];
        }
      });
    }

    assert.strictEqual(pumpNumber(bar()), 5);
    assert.strictEqual(pumpNumber(foo()), 10);
  });
});
describe("new expressions", function () {
  it("should be able to contain yield sub-expressions", function () {
    function A(first, second) {
      this.first = first;
      this.second = second;
    }

    function gen() {
      var _temp31, _t16, _temp32;

      return _generator(this, function (_a102) {
        switch (_a102.label) {
          case 0:
            return [4, 0];

          case 1:
            _t16 = (_temp31 = _a102.sent()).bind;
            return [4, 1];

          case 2:
            _temp32 = [void 0, _a102.sent()];
            return [4, 2];

          case 3:
            return [4, new (_t16.apply(_temp31, _temp32.concat([_a102.sent()])))()];

          case 4:
            return [2, _a102.sent()];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: 0,
      done: false
    });
    assert.deepEqual(g.next(A), {
      value: 1,
      done: false
    });
    assert.deepEqual(g.next("asdf"), {
      value: 2,
      done: false
    });
    var info = g.next("zxcv");
    assert.strictEqual(info.done, false);
    assert.ok(info.value instanceof A);
    assert.strictEqual(info.value.first, "asdf");
    assert.strictEqual(info.value.second, "zxcv");
    assert.deepEqual(g.next("qwer"), {
      value: "qwer",
      done: true
    });
  });
});
describe("block binding", function () {
  it("should translate block binding correctly", function () {
    "use strict";

    function gen() {
      var a$0, a$1, a, _a, _a2;

      return _generator(this, function (_a103) {
        switch (_a103.label) {
          case 0:
            a$0 = 0, a$1 = 1;
            a = 3;
            _a = 1;
            return [4, _a + a$0];

          case 1:
            _a103.sent();

            _a2 = 2;
            return [4, _a2 - 1 + a$1];

          case 2:
            _a103.sent();

            return [4, a];

          case 3:
            _a103.sent();

            return [2];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: 1,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 2,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: 3,
      done: false
    });
    assert.deepEqual(g.next(), {
      value: void 0,
      done: true
    });
  });
  it("should translate block binding with iife correctly", function () {
    "use strict";

    function gen() {
      var arr, _loop, x, _x;

      return _generator(this, function (_a104) {
        switch (_a104.label) {
          case 0:
            arr = [];
            _loop = function (x) {
              var y = x;
              arr.push(function () {
                return y;
              });
            };

            for (x = 0; x < 3; x++) {
              _loop(x);
            }

            _a104.label = 1;

          case 1:
            if (!(_x = arr.pop())) return [3, 3];
            return [4, _x];

          case 2:
            _a104.sent();

            return [3, 1];

          case 3:
            return [2];
        }
      });
    }

    var g = gen();
    assert.equal(g.next().value(), 2);
    assert.equal(g.next().value(), 1);
    assert.equal(g.next().value(), 0);
    assert.deepEqual(g.next(), {
      value: void 0,
      done: true
    });
  });
});
describe("newborn generators", function () {
  it("should be able to yield* non-newborn generators", function () {
    function inner() {
      var _temp33;

      return _generator(this, function (_a105) {
        switch (_a105.label) {
          case 0:
            return [4, 1];

          case 1:
            _temp33 = [_a105.sent()];
            return [4, 2];

          case 2:
            return [2, _temp33.concat([_a105.sent()])];
        }
      });
    }

    function outer(delegate) {
      return _generator(this, function (_a106) {
        switch (_a106.label) {
          case 0:
            return [5, _values(delegate)];

          case 1:
            return [2, _a106.sent()];
        }
      });
    }

    var n = inner();
    assert.deepEqual(n.next(), {
      value: 1,
      done: false
    });
    var g = outer(n); // I would really like to be able to pass 3 to g.next here, but V8
    // ignores values sent to newborn generators, and SpiderMonkey throws
    // a TypeError.

    assert.deepEqual(g.next(), {
      value: 2,
      done: false
    });
    assert.deepEqual(g.next(4), {
      value: [void 0, 4],
      done: true
    });
  });
  it("should support the ignore-initial-yield wrapper idiom", function () {
    var markers = [];

    function inner() {
      var sent1, sent2;
      return _generator(this, function (_a107) {
        switch (_a107.label) {
          case 0:
            markers.push(0);
            return [4, 1];

          case 1:
            sent1 = _a107.sent();
            markers.push(2);
            return [4, 2];

          case 2:
            sent2 = _a107.sent();
            markers.push(3);
            return [2, [sent1, sent2]];
        }
      });
    }

    function wrapper(delegate) {
      var gen = function () {
        var sent, info;
        return _generator(this, function (_a108) {
          switch (_a108.label) {
            case 0:
              return [4, "ignored"];

            case 1:
              sent = _a108.sent();
              markers.push(1);
              _a108.label = 2;

            case 2:
              if (!!(info = delegate.next(sent)).done) return [3, 4];
              return [4, info.value];

            case 3:
              sent = _a108.sent();
              return [3, 2];

            case 4:
              markers.push(4);
              return [2, info.value];
          }
        });
      }(); // Ensure that gen is not newborn and that the next invocation of
      // gen.next(value) can send value to the initial yield expression.


      gen.next();
      return gen;
    }

    var n = inner();
    assert.deepEqual(n.next(), {
      value: 1,
      done: false
    });
    var g = wrapper(n); // Unlike in the previous spec, it's fine to pass 3 to g.next here,
    // because g is not newborn, because g.next was already called once
    // before g was returned from the wrapper function.

    assert.deepEqual(g.next(3), {
      value: 2,
      done: false
    });
    assert.deepEqual(g.next(4), {
      value: [3, 4],
      done: true
    }); // Ensure we encountered the marker points in the expected order.

    assert.deepEqual(markers, [0, 1, 2, 3, 4]);
  });
  it("should allow chaining newborn and non-newborn generators", function () {
    function range(n) {
      var i;
      return _generator(this, function (_a109) {
        switch (_a109.label) {
          case 0:
            i = 0;
            _a109.label = 1;

          case 1:
            if (!(i < n)) return [3, 4];
            return [4, i];

          case 2:
            _a109.sent();

            _a109.label = 3;

          case 3:
            ++i;
            return [3, 1];

          case 4:
            return [2];
        }
      });
    }

    function chain(a, b) {
      return _generator(this, function (_a110) {
        switch (_a110.label) {
          case 0:
            return [5, _values(a)];

          case 1:
            _a110.sent();

            return [5, _values(b)];

          case 2:
            _a110.sent();

            return [2];
        }
      });
    }

    check(chain(range(3), range(5)), [0, 1, 2, 0, 1, 2, 3, 4]);

    function y3(x) {
      return _generator(this, function (_a111) {
        switch (_a111.label) {
          case 0:
            return [4, x];

          case 1:
            return [4, _a111.sent()];

          case 2:
            return [4, _a111.sent()];

          case 3:
            return [2, _a111.sent()];
        }
      });
    }

    function y5(x) {
      return _generator(this, function (_a112) {
        switch (_a112.label) {
          case 0:
            return [4, x];

          case 1:
            return [4, _a112.sent()];

          case 2:
            return [4, _a112.sent()];

          case 3:
            return [4, _a112.sent()];

          case 4:
            return [4, _a112.sent()];

          case 5:
            return [2, _a112.sent()];
        }
      });
    }

    check(chain(y3("foo"), y5("bar")), ["foo", 1, 2, "bar", 4, 5, 6, 7]);
    var g3 = y3("three");
    assert.deepEqual(g3.next(), {
      value: "three",
      done: false
    });
    var g5 = y5("five");
    assert.deepEqual(g5.next(), {
      value: "five",
      done: false
    });
    var undef; // A little easier to read than void 0.

    check(chain(g3, g5), [undef, 1, undef, 3, 4, 5]);
  });
});
describe("labeled break and continue statements", function () {
  it("should be able to exit multiple try statements", function () {
    var e1 = "first";
    var e2 = "second";
    var e3 = "third";
    var e4 = "fourth";

    function gen(n, which) {
      var i;
      return _generator(this, function (_a113) {
        switch (_a113.label) {
          case 0:
            _a113.trys.push([0,, 2, 25]);

            return [4, 0];

          case 1:
            _a113.sent();

            raise(e1);
            return [3, 25];

          case 2:
            return [4, 1];

          case 3:
            _a113.sent();

            i = 0;
            _a113.label = 4;

          case 4:
            if (!(i < n)) return [3, 23];
            return [4, i];

          case 5:
            _a113.sent();

            _a113.label = 6;

          case 6:
            _a113.trys.push([6,, 7, 22]);

            raise(e2);
            return [3, 22];

          case 7:
            return [4, 2];

          case 8:
            _a113.sent();

            _a113.label = 9;

          case 9:
            _a113.trys.push([9,, 10, 21]);

            raise(e3);
            return [3, 21];

          case 10:
            return [4, 3];

          case 11:
            _a113.sent();

            _a113.label = 12;

          case 12:
            _a113.trys.push([12,, 13, 20]);

            raise(e4);
            return [3, 20];

          case 13:
            return [4, 4];

          case 14:
            _a113.sent();

            if (!(which === "break")) return [3, 16];
            return [4, "breaking"];

          case 15:
            _a113.sent();

            return [3, 23];

          case 16:
            if (!(which === "continue")) return [3, 18];
            return [4, "continuing"];

          case 17:
            _a113.sent();

            return [3, 22];

          case 18:
            return [4, 5];

          case 19:
            _a113.sent();

            return [7];

          case 20:
            return [7];

          case 21:
            return [7];

          case 22:
            ++i;
            return [3, 4];

          case 23:
            return [4, 6];

          case 24:
            _a113.sent();

            return [7];

          case 25:
            return [2];
        }
      });
    }

    try {
      check(gen(1, "break"), [0, 1, 0, 2, 3, 4, "breaking", 6]);
      assert.ok(false, "should have thrown an exception");
    } catch (err) {
      assert.strictEqual(err, e1);
    }

    try {
      check(gen(3, "continue"), [0, 1, 0, 2, 3, 4, "continuing", 1, 2, 3, 4, "continuing", 2, 2, 3, 4, "continuing", 6 // Loop finished naturally.
      ]);
      assert.ok(false, "should have thrown an exception");
    } catch (err) {
      assert.strictEqual(err, e1);
    }

    try {
      check(gen(3, "neither"), [0, 1, 0, 2, 3, 4, 5]);
      assert.ok(false, "should have thrown an exception");
    } catch (err) {
      assert.strictEqual(err, e4);
    }
  });
  it("should allow breaking from any labeled statement", function () {
    function gen(limit) {
      var i;
      return _generator(this, function (_a114) {
        switch (_a114.label) {
          case 0:
            return [4, 0];

          case 1:
            _a114.sent();

            i = 0;
            _a114.label = 2;

          case 2:
            if (!(i < limit)) return [3, 15];
            return [4, 1];

          case 3:
            _a114.sent();

            return [4, 2];

          case 4:
            _a114.sent();

            return [3, 6];

          case 5:
            _a114.sent();

            _a114.label = 6;

          case 6:
            if (!(limit === 3)) return [3, 12];
            return [4, 4];

          case 7:
            _a114.sent();

            if (i === 0) return [3, 12];
            return [4, 5];

          case 8:
            _a114.sent();

            if (i === 1) return [3, 12];
            return [4, 6];

          case 9:
            _a114.sent();

            _a114.label = 10;

          case 10:
            // This should break from the for-loop.
            if (i === 2) xxx: return [3, 15];
            return [4, 7];

          case 11:
            _a114.sent();

            _a114.label = 12;

          case 12:
            // This should be a no-op.
            xxx: break xxx;

            return [4, 8];

          case 13:
            _a114.sent();

            _a114.label = 14;

          case 14:
            ++i;
            return [3, 2];

          case 15:
            return [4, 9];

          case 16:
            _a114.sent();

            return [2];
        }
      });
    }

    check(gen(0), [0, 9]);
    check(gen(1), [0, 1, 2, 8, 9]);
    check(gen(2), [0, 1, 2, 8, 1, 2, 8, 9]);
    check(gen(3), [0, 1, 2, 4, 8, 1, 2, 4, 5, 8, 1, 2, 4, 5, 6, 9]);
  });
});
describe("for loop with var decl and no update expression", function () {
  // https://github.com/facebook/regenerator/issues/103
  function range() {
    var i;
    return _generator(this, function (_a115) {
      for (i = 0; false;) {}

      return [2];
    });
  }

  it("should compile and run", function () {
    check(range(), []);
  });
}); // describe("generator function prototype", function () {
//     function getProto(obj) {
//         return Object.getPrototypeOf
//             ? Object.getPrototypeOf(obj)
//             : obj.__proto__;
//     }
//     it("should follow the expected object model", function () {
//         var GeneratorFunctionPrototype = getProto(f);
//         var GeneratorFunction = GeneratorFunctionPrototype.constructor;
//         assert.strictEqual(GeneratorFunction.name, 'GeneratorFunction');
//         assert.strictEqual(GeneratorFunction.prototype,
//             GeneratorFunctionPrototype);
//         assert.strictEqual(GeneratorFunctionPrototype.prototype.constructor,
//             GeneratorFunctionPrototype);
//         assert.strictEqual(GeneratorFunctionPrototype.prototype,
//             getProto(f.prototype));
//         assert.strictEqual(getProto(GeneratorFunctionPrototype),
//             Function.prototype);
//         if (typeof process === "undefined" ||
//             process.version.slice(1, 3) === "0.") {
//             // Node version strings start with 0.
//             assert.strictEqual(GeneratorFunctionPrototype.name,
//                 "GeneratorFunctionPrototype");
//         } else if (process.version.slice(1, 3) === "1.") {
//             // iojs version strings start with 1., and iojs gets this .name
//             // property wrong. TODO report this?
//             assert.strictEqual(GeneratorFunctionPrototype.name, "");
//         }
//         assert.strictEqual(typeof f2, "function");
//         assert.strictEqual(f2.constructor, GeneratorFunction);
//         assert.ok(f2 instanceof GeneratorFunction);
//         assert.strictEqual(f2.name, "f2");
//         var g = f();
//         assert.ok(g instanceof f);
//         assert.strictEqual(getProto(g), f.prototype);
//         assert.deepEqual([], Object.getOwnPropertyNames(f.prototype));
//         // assert.deepEqual([], Object.getOwnPropertyNames(g));
//         f.prototype.x = 42;
//         var g2 = f();
//         assert.strictEqual(g2.x, 42);
//         function* f2() {
//             yield 1;
//         }
//         assert.strictEqual(getProto(f), getProto(f2));
//         assert.strictEqual(f.hasOwnProperty('constructor'), false);
//         assert.strictEqual(getProto(f).constructor.name, 'GeneratorFunction');
//         // Intentionally at the end to test hoisting.
//         function* f() {
//             yield this;
//         }
//         function* f() {
//             yield 1;
//         }
//         var f2 = f;
//         f = 42;
//         var g = f2();
//         assert.deepEqual(g.next(), { value: 1, done: false });
//         assert.deepEqual(g.next(), { value: void 0, done: true });
//         assert.ok(g instanceof f2);
//     });
// });

describe("for-of loops", function () {
  var arraysAreIterable = typeof Array.prototype[_Symbol.iterator] === "function";
  (fullCompatibility && arraysAreIterable ? it : xit)("should work for Arrays", function () {
    var sum = 0;

    var _iterator = _createForOfIteratorHelper([1, 2].concat(3)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var x = _step.value;
        sum += x;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    assert.strictEqual(sum, 6);
  });
  it("should work for generators", function () {
    var value,
        values = [];

    var _iterator2 = _createForOfIteratorHelper(range(3)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        value = _step2.value;
        values.push(value);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    assert.deepEqual(values, [0, 1, 2]);
  });
  it("should work inside of generators", function () {
    function yieldPermutations(list) {
      var count, first, genRest, _iterator3, _step3, perm, i, prefix, suffix, _err9;

      return _generator(this, function (_a116) {
        switch (_a116.label) {
          case 0:
            if (!(list.length < 2)) return [3, 2];
            return [4, list];

          case 1:
            _a116.sent();

            return [2, 1];

          case 2:
            count = 0;
            first = list.slice(0, 1);
            genRest = yieldPermutations(list.slice(1));
            _iterator3 = _createForOfIteratorHelper(genRest);
            _a116.label = 3;

          case 3:
            _a116.trys.push([3, 11, 12, 13]);

            _iterator3.s();

            _a116.label = 4;

          case 4:
            if (!!(_step3 = _iterator3.n()).done) return [3, 10];
            perm = _step3.value;
            i = 0;
            _a116.label = 5;

          case 5:
            if (!(i < list.length)) return [3, 8];
            prefix = perm.slice(0, i);
            suffix = perm.slice(i);
            return [4, prefix.concat(first, suffix)];

          case 6:
            _a116.sent();

            _a116.label = 7;

          case 7:
            ++i;
            return [3, 5];

          case 8:
            count += i;
            _a116.label = 9;

          case 9:
            return [3, 4];

          case 10:
            return [3, 13];

          case 11:
            _err9 = _a116.sent();

            _iterator3.e(_err9);

            return [3, 13];

          case 12:
            _iterator3.f();

            return [7];

          case 13:
            return [2, count];
        }
      });
    }

    var count = 0;

    var _iterator4 = _createForOfIteratorHelper(yieldPermutations([])),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var perm = _step4.value;
        assert.deepEqual(perm, []);
        ++count;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    assert.strictEqual(count, 1);
    check(yieldPermutations([1]), [[1]], 1);
    check(yieldPermutations([2, 1]), [[2, 1], [1, 2]], 2);
    check(yieldPermutations([1, 3, 2]), [[1, 3, 2], [3, 1, 2], [3, 2, 1], [1, 2, 3], [2, 1, 3], [2, 3, 1]], 6);
  });
});
describe("expressions containing yield subexpressions", function () {
  it("should evaluate all subexpressions before yielding", function () {
    function gen(x) {
      var _t17;

      return _generator(this, function (_a117) {
        switch (_a117.label) {
          case 0:
            _t17 = x;
            return [4, function (y) {
              x = y;
            }];

          case 1:
            return [2, _t17 * _a117.sent()];
        }
      });
    }

    var g = gen(2);
    var result = g.next();
    assert.strictEqual(result.done, false);
    result.value(5);
    assert.deepEqual(g.next(5), {
      value: 10,
      done: true
    });
  });
  it("should work even with getter member expressions", function () {
    function gen() {
      var _t18;

      return _generator(this, function (_a118) {
        switch (_a118.label) {
          case 0:
            _t18 = a.b;
            return [4, "asdf"];

          case 1:
            return [2, _t18 + _a118.sent()];
        }
      });
    }

    var a = {};
    var b = 0;
    Object.defineProperty(a, "b", {
      get: function () {
        return ++b;
      }
    });
    var g = gen();
    assert.strictEqual(a.b, 1);
    assert.deepEqual(g.next(), {
      value: "asdf",
      done: false
    });
    assert.strictEqual(a.b, 3);
    assert.deepEqual(g.next(2), {
      value: 4,
      done: true
    });
  });
  it("should evaluate all array elements before yielding", function () {
    function gen() {
      var _temp34;

      return _generator(this, function (_a119) {
        switch (_a119.label) {
          case 0:
            _temp34 = [a];
            return [4, "asdf"];

          case 1:
            return [2, _temp34.concat([_a119.sent(), a])];
        }
      });
    }

    var a = 1;
    var g = gen();
    assert.deepEqual(g.next(), {
      value: "asdf",
      done: false
    });
    a = 3;
    assert.deepEqual(g.next(2), {
      value: [1, 2, 3],
      done: true
    });
  });
  it("should handle callee member expressions correctly", function () {
    function gen() {
      var _temp35, _t19;

      return _generator(this, function (_a120) {
        switch (_a120.label) {
          case 0:
            _t19 = (_temp35 = a.slice(0)).concat;
            return [4, "asdf"];

          case 1:
            a = _t19.apply(_temp35, [_a120.sent()]);
            return [2, a];
        }
      });
    }

    var a = [];
    var g = gen();
    assert.deepEqual(g.next(), {
      value: "asdf",
      done: false
    });
    a.push(1);
    assert.deepEqual(g.next(2), {
      value: [2],
      done: true
    });
  });
  it("should handle implicit stringification correctly", function () {
    function gen() {
      var _t20;

      return _generator(this, function (_a121) {
        switch (_a121.label) {
          case 0:
            _t20 = a;
            return [4, "asdf"];

          case 1:
            return [2, _t20 + _a121.sent()];
        }
      });
    }

    var a = [1, 2];
    var g = gen();
    assert.deepEqual(g.next(), {
      value: "asdf",
      done: false
    });
    a = [4, 5];
    assert.deepEqual(g.next(",3"), {
      value: "1,2,3",
      done: true
    });
  });
  it("should work when yield is in an array spread", function () {
    function gen() {
      var _temp36, _t21, _t22;

      return _generator(this, function (_a122) {
        switch (_a122.label) {
          case 0:
            _t21 = (_temp36 = [0]).concat;
            _t22 = _toConsumableArray;
            return [4, "foo"];

          case 1:
            return [2, _t21.apply(_temp36, [_t22.apply(void 0, [_a122.sent()]), [3]])];
        }
      });
    }

    var g = gen();
    assert.deepEqual(g.next(), {
      value: "foo",
      done: false
    });
    assert.deepEqual(g.next([1, 2]), {
      value: [0, 1, 2, 3],
      done: true
    });
  });
});