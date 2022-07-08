import { _generator } from "babel-plugin-lite-regenerator-runtime";
import { _awaiter } from "babel-plugin-lite-regenerator-runtime";

function nestedLoops() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!x) return [3, 2];
          return [4, y];

        case 1:
          _a.sent();

          while (z) {
            return [3, 0];
          }

          while (a) {
            continue;
          }

          return [3, 0];

        case 2:
          return [2];
      }
    });
  });
}