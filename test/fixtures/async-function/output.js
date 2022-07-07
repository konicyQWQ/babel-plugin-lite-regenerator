import { _generator } from "babel-plugin-generator-runtime";
import { _awaiter } from "babel-plugin-generator-runtime";

function empty() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      return [2];
    });
  });
}

function singleAwait() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a2) {
      switch (_a2.label) {
        case 0:
          return [4, x];

        case 1:
          _a2.sent();

          return [2];
      }
    });
  });
}