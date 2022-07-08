import { _generator } from "babel-plugin-lite-regenerator-runtime";
import { _awaiter } from "babel-plugin-lite-regenerator-runtime";

function propertyAccess0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, x.a];

        case 1:
          y = _a.sent();
          return [2];
      }
    });
  });
}

function propertyAccess1() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a2) {
      switch (_a2.label) {
        case 0:
          return [4, x];

        case 1:
          y = _a2.sent().a;
          return [2];
      }
    });
  });
}

function callExpression0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a3) {
      switch (_a3.label) {
        case 0:
          return [4, x(y, z)];

        case 1:
          _a3.sent();

          return [2];
      }
    });
  });
}