import { _generator } from "babel-plugin-generator-runtime";
import { _awaiter } from "babel-plugin-generator-runtime";

function elementAccess0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, x[y]];

        case 1:
          z = _a.sent();
          return [2];
      }
    });
  });
}

function elementAccess1() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a2) {
      switch (_a2.label) {
        case 0:
          return [4, x];

        case 1:
          z = _a2.sent()[y];
          return [2];
      }
    });
  });
}

function elementAccess2() {
  return _awaiter(this, void 0, void 0, function () {
    var _t;

    return _generator(this, function (_a3) {
      switch (_a3.label) {
        case 0:
          _t = x;
          return [4, y];

        case 1:
          z = _t[_a3.sent()];
          return [2];
      }
    });
  });
}