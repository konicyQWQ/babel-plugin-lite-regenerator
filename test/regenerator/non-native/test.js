
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
var shared = require('../shared');

var Symbol = shared.Symbol;
var check = shared.check;
var assertAlreadyFinished = shared.assertAlreadyFinished;

var strictEqual = (a, b) => expect(a).toStrictEqual(b);

describe("@@iterator", function () {
  it("is defined on Generator.prototype and returns this", function () {
    function gen() {
      return _generator(this, function (_a) {
        return [2];
      });
    }

    var iterator = gen(); // expect(!iterator.hasOwnProperty(Symbol.iterator)).toBeTruthy();
    // expect(!Object.getPrototypeOf(iterator).hasOwnProperty(Symbol.iterator)).toBeTruthy();
    // expect(Object.getPrototypeOf(Object.getPrototypeOf(
    //   Object.getPrototypeOf(iterator)
    // )).hasOwnProperty(Symbol.iterator)).toBeTruthy();

    strictEqual(iterator[Symbol.iterator](), iterator);
  });
});
describe("throw", function () {
  it("should complete throwing generator", function () {
    function gen(x) {
      return _generator(this, function (_a2) {
        throw 1;
      });
    }

    var u = gen();

    try {
      u.next();
    } catch (err) {
      strictEqual(err, 1);
    }

    assertAlreadyFinished(u);
  });
  it("should complete yielding/throwing generator", function () {
    function gen(x) {
      return _generator(this, function (_a3) {
        switch (_a3.label) {
          case 0:
            return [4, 2];

          case 1:
            _a3.sent();

            throw 1;
        }
      });
    }

    var u = gen();
    u.next();

    try {
      u.throw(2);
    } catch (err) {
      strictEqual(err, 2);
    }

    assertAlreadyFinished(u);
  });
});
describe("completed generator", function () {
  function gen() {
    return _generator(this, function (_a4) {
      return [2, "ALL DONE"];
    });
  }

  it("should refuse to resume", function () {
    var g = gen();
    strictEqual(g.next(), {
      value: "ALL DONE",
      done: true
    });
    assertAlreadyFinished(g);
  });
});
describe("delegate yield", function () {
  it("should support any iterable argument", function () {
    function gen() {
      var _temp;

      return _generator(this, function (_a5) {
        switch (_a5.label) {
          case 0:
            return [4, 0];

          case 1:
            _a5.sent();

            return [4, "one"];

          case 2:
            _temp = [_a5.sent()];
            return [4, "two"];

          case 3:
            _temp = _temp.concat([_a5.sent()]);
            return [4, "three"];

          case 4:
            return [5, _values(_temp.concat([_a5.sent()]))];

          case 5:
            _a5.sent();

            return [4, 5];

          case 6:
            _a5.sent();

            return [2];
        }
      });
    }

    check(gen(), [0, "one", "two", "three", 2, 3, 4, 5]);

    function string() {
      return _generator(this, function (_a6) {
        switch (_a6.label) {
          case 0:
            return [5, _values("asdf")];

          case 1:
            return [2, _a6.sent()];
        }
      });
    }

    check(string(), ["a", "s", "d", "f"]);
  });
});
        