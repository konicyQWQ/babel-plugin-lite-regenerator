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
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var strictEqual = (a, b) => expect(a).toStrictEqual(b);

var shared = require("../shared.js");

var check = shared.check;
describe("class methods", function () {
  test("should work if the generator is a class method", function () {
    var Foo = /*#__PURE__*/function () {
      function Foo() {
        _classCallCheck(this, Foo);
      }

      _createClass(Foo, [{
        key: "gen",
        value: function gen(x) {
          return _generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4, x];

              case 1:
                _a.sent();

                return [2];
            }
          });
        }
      }]);

      return Foo;
    }();

    check(new Foo().gen("boom"), ["boom"]);
  });
  test("should work if the generator is a computed class method", function () {
    var fnName = "gen";

    var Foo = /*#__PURE__*/function () {
      function Foo() {
        _classCallCheck(this, Foo);
      }

      _createClass(Foo, [{
        key: fnName,
        value: function (x) {
          return _generator(this, function (_a2) {
            switch (_a2.label) {
              case 0:
                return [4, x];

              case 1:
                _a2.sent();

                return [2];
            }
          });
        }
      }]);

      return Foo;
    }();

    check(new Foo().gen("boom"), ["boom"]);
  });
  test("should work with this", function () {
    var A = /*#__PURE__*/function () {
      function A() {
        _classCallCheck(this, A);
      }

      _createClass(A, [{
        key: "gen",
        value: function gen() {
          return _generator(this, function (_a3) {
            switch (_a3.label) {
              case 0:
                return [4, this];

              case 1:
                _a3.sent();

                return [2];
            }
          });
        }
      }]);

      return A;
    }();

    var a = new A();
    check(a.gen(), [a]);
  });
  test("should work with super", function () {
    var A = /*#__PURE__*/function () {
      function A() {
        _classCallCheck(this, A);
      }

      _createClass(A, [{
        key: "gen",
        value: function gen() {
          return _generator(this, function (_a4) {
            switch (_a4.label) {
              case 0:
                return [4, 1];

              case 1:
                _a4.sent();

                return [2];
            }
          });
        }
      }]);

      return A;
    }();

    var B = /*#__PURE__*/function (_A) {
      _inherits(B, _A);

      var _super = _createSuper(B);

      function B() {
        _classCallCheck(this, B);

        return _super.apply(this, arguments);
      }

      _createClass(B, [{
        key: "gen",
        value: function gen() {
          return _generator(this, function (_a5) {
            switch (_a5.label) {
              case 0:
                return [4, _get(_getPrototypeOf(B.prototype), "gen", this)];

              case 1:
                _a5.sent();

                return [2];
            }
          });
        }
      }]);

      return B;
    }(A);

    check(new B().gen(), [A.prototype.gen]);
  });
  test("should work with arguments", function () {
    var A = /*#__PURE__*/function () {
      function A() {
        _classCallCheck(this, A);
      }

      _createClass(A, [{
        key: "gen",
        value: function gen() {
          var _args6 = arguments;
          return _generator(this, function (_a6) {
            switch (_a6.label) {
              case 0:
                return [4, _args6];

              case 1:
                _a6.sent();

                return [2];
            }
          });
        }
      }]);

      return A;
    }();

    var args = new A().gen(1, 2, 3).next().value;
    strictEqual(args.length, 3);
    strictEqual(args[0], 1);
    strictEqual(args[1], 2);
    strictEqual(args[2], 3);
  });
  test("should allow yield as super expression", function () {
    function gen() {
      var _t;

      return _generator(this, function (_a7) {
        switch (_a7.label) {
          case 0:
            _t = function (_yield) {
              _inherits(_class, _yield);

              var _super2 = _createSuper(_class);

              function _class() {
                _classCallCheck(this, _class);

                return _super2.apply(this, arguments);
              }

              return _createClass(_class);
            };

            return [4];

          case 1:
            return [2, _t.apply(void 0, [_a7.sent()])];
        }
      });
    }

    var B = /*#__PURE__*/_createClass(function B() {
      _classCallCheck(this, B);
    });

    var it = gen();
    it.next();
    var res = it.next(B).value;
    expect(new res() instanceof B).toBeTruthy();
  });
  test("should allow yield as super expression with argument", function () {
    function gen() {
      var _t2;

      return _generator(this, function (_a8) {
        switch (_a8.label) {
          case 0:
            _t2 = function (_yield$) {
              _inherits(_class2, _yield$);

              var _super3 = _createSuper(_class2);

              function _class2() {
                _classCallCheck(this, _class2);

                return _super3.apply(this, arguments);
              }

              return _createClass(_class2);
            };

            return [4, 123];

          case 1:
            return [2, _t2.apply(void 0, [_a8.sent()])];
        }
      });
    }

    var B = /*#__PURE__*/_createClass(function B() {
      _classCallCheck(this, B);
    });

    var it = gen();
    strictEqual(it.next(), {
      value: 123,
      done: false
    });
    var res = it.next(B).value;
    expect(new res() instanceof B).toBeTruthy();
  });
  test("should allow yield as computed key", function () {
    if ( /*#__PURE__*/function () {
      function _class3() {
        _classCallCheck(this, _class3);
      }

      return _createClass(_class3);
    }().toString().indexOf("class") !== 0) {
      return; // The class transform is broken:
      // https://github.com/babel/babel/issues/8300
    }

    function gen() {
      var _t3, _temp;

      return _generator(this, function (_a9) {
        switch (_a9.label) {
          case 0:
            _t3 = function (_yield2, _yield3) {
              function _class4() {
                _classCallCheck(this, _class4);
              }

              _createClass(_class4, [{
                key: _yield2,
                value: function () {
                  return 1;
                }
              }, {
                key: _yield3,
                value: function () {
                  return 2;
                }
              }]);

              return _class4;
            };

            return [4];

          case 1:
            _temp = [_a9.sent()];
            return [4];

          case 2:
            return [2, _t3.apply(void 0, _temp.concat([_a9.sent()]))];
        }
      });
    }

    var it = gen();
    it.next();
    it.next("one");
    var res = it.next("two").value;
    strictEqual(new res().one(), 1);
    strictEqual(new res().two(), 2);
  });
});