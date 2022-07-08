import { _generator } from "babel-plugin-lite-regenerator-runtime";
import { _awaiter } from "babel-plugin-lite-regenerator-runtime";

function withStatement0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      with (x) {
        y;
      }
      return [2];
    });
  });
}

function withStatement1() {
  return _awaiter(this, void 0, void 0, function () {
    var _t;

    return _generator(this, function (_a2) {
      switch (_a2.label) {
        case 0:
          return [4, x];

        case 1:
          _t = _a2.sent();
          _a2.label = 2;

        case 2:
          with (_t) {
            y;
          }
          _a2.label = 3;

        case 3:
          return [2];
      }
    });
  });
}

function withStatement2() {
  return _awaiter(this, void 0, void 0, function () {
    var _t2;

    return _generator(this, function (_a3) {
      switch (_a3.label) {
        case 0:
          _t2 = x;
          _a3.label = 1;

        case 1:
          with (_t2) {
            a;
            return [4, y];
          }

        case 2:
          with (_t2) {
            _a3.sent();

            b;
          }
          _a3.label = 3;

        case 3:
          return [2];
      }
    });
  });
}

function withStatement3() {
  return _awaiter(this, void 0, void 0, function () {
    var _t3, _t4;

    return _generator(this, function (_a4) {
      switch (_a4.label) {
        case 0:
          _t3 = x;
          _a4.label = 1;

        case 1:
          with (_t3) {
            _t4 = z;
          }
          _a4.label = 2;

        case 2:
          with (_t3) {
            with (_t4) {
              a;
              return [4, y];
            }
          }

        case 3:
          with (_t3) {
            with (_t4) {
              _a4.sent();

              b;
            }
          }
          _a4.label = 4;

        case 4:
          return [2];
      }
    });
  });
}