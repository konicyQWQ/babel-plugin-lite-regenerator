import { _generator } from "babel-plugin-generator-runtime";
import { _awaiter } from "babel-plugin-generator-runtime";

function switchStatement0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      switch (x) {
        case y:
          a;
          break;

        default:
          b;
          break;
      }

      return [2];
    });
  });
}

function switchStatement1() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a2) {
      switch (_a2.label) {
        case 0:
          return [4, x];

        case 1:
          switch (_a2.sent()) {
            case y:
              a;
              break;

            default:
              b;
              break;
          }

          return [2];
      }
    });
  });
}

function switchStatement2() {
  return _awaiter(this, void 0, void 0, function () {
    var _t;

    return _generator(this, function (_a3) {
      switch (_a3.label) {
        case 0:
          _t = x;
          return [4, y];

        case 1:
          switch (_t) {
            case _a3.sent():
              return [3, 2];
          }

          return [3, 3];

        case 2:
          a;
          return [3, 4];

        case 3:
          b;
          return [3, 4];

        case 4:
          return [2];
      }
    });
  });
}

function switchStatement3() {
  return _awaiter(this, void 0, void 0, function () {
    var _t2;

    return _generator(this, function (_a4) {
      switch (_a4.label) {
        case 0:
          _t2 = x;

          switch (_t2) {
            case y:
              return [3, 1];
          }

          return [3, 3];

        case 1:
          return [4, a];

        case 2:
          _a4.sent();

          return [3, 4];

        case 3:
          b;
          return [3, 4];

        case 4:
          return [2];
      }
    });
  });
}

function switchStatement4() {
  return _awaiter(this, void 0, void 0, function () {
    var _t3;

    return _generator(this, function (_a5) {
      switch (_a5.label) {
        case 0:
          _t3 = x;

          switch (_t3) {
            case y:
              return [3, 1];
          }

          return [3, 2];

        case 1:
          a;
          return [3, 4];

        case 2:
          return [4, b];

        case 3:
          _a5.sent();

          return [3, 4];

        case 4:
          return [2];
      }
    });
  });
}

function switchStatement5() {
  return _awaiter(this, void 0, void 0, function () {
    var _t4;

    return _generator(this, function (_a6) {
      switch (_a6.label) {
        case 0:
          _t4 = x;

          switch (_t4) {
            case y:
              return [3, 2];
          }

          return [4, z];

        case 1:
          switch (_t4) {
            case _a6.sent():
              return [3, 3];
          }

          return [3, 4];

        case 2:
          a;
          return [3, 4];

        case 3:
          b;
          return [3, 4];

        case 4:
          return [2];
      }
    });
  });
}

function switchStatement6() {
  return _awaiter(this, void 0, void 0, function () {
    var _t5;

    return _generator(this, function (_a7) {
      switch (_a7.label) {
        case 0:
          _t5 = x;
          return [4, y];

        case 1:
          switch (_t5) {
            case _a7.sent():
              return [3, 3];

            case z:
              return [3, 4];
          }

          return [3, 2];

        case 2:
          c;
          return [3, 5];

        case 3:
          a;
          return [3, 5];

        case 4:
          b;
          return [3, 5];

        case 5:
          return [2];
      }
    });
  });
}

function switchStatement7() {
  return _awaiter(this, void 0, void 0, function () {
    var _t6;

    return _generator(this, function (_a8) {
      switch (_a8.label) {
        case 0:
          _t6 = x;

          switch (_t6) {
            case y:
              return [3, 3];
          }

          return [4, z];

        case 1:
          switch (_t6) {
            case _a8.sent():
              return [3, 4];
          }

          return [3, 2];

        case 2:
          c;
          return [3, 5];

        case 3:
          a;
          return [3, 5];

        case 4:
          b;
          return [3, 5];

        case 5:
          return [2];
      }
    });
  });
}

function switchStatement8() {
  return _awaiter(this, void 0, void 0, function () {
    var _t7;

    return _generator(this, function (_a9) {
      switch (_a9.label) {
        case 0:
          _t7 = x;

          switch (_t7) {
            case y:
              return [3, 3];
          }

          return [4, z];

        case 1:
          switch (_t7) {
            case _a9.sent():
              return [3, 4];
          }

          return [3, 2];

        case 2:
          c;
          _a9.label = 3;

        case 3:
          a;
          return [3, 5];

        case 4:
          b;
          return [3, 5];

        case 5:
          return [2];
      }
    });
  });
}