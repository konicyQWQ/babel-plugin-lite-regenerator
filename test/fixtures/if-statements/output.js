import { _generator } from "babel-plugin-generator-runtime";
import { _awaiter } from "babel-plugin-generator-runtime";

function ifStatement1() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, x];

        case 1:
          if (_a.sent()) {
            y;
          } else {
            z;
          }

          return [2];
      }
    });
  });
}

function ifStatement2() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a2) {
      switch (_a2.label) {
        case 0:
          if (!x) return [3, 2];
          return [4, y];

        case 1:
          _a2.sent();

          return [3, 3];

        case 2:
          z;
          _a2.label = 3;

        case 3:
          return [2];
      }
    });
  });
}

function ifStatement3() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a3) {
      switch (_a3.label) {
        case 0:
          if (!x) return [3, 1];
          y;
          return [3, 3];

        case 1:
          return [4, z];

        case 2:
          _a3.sent();

          _a3.label = 3;

        case 3:
          return [2];
      }
    });
  });
}