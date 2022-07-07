import { _generator } from "babel-plugin-generator-runtime";
import { _awaiter } from "babel-plugin-generator-runtime";

function returnStatement0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      return [2];
    });
  });
}

function returnStatement1() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a2) {
      return [2, x];
    });
  });
}

function returnStatement2() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a3) {
      switch (_a3.label) {
        case 0:
          return [4, x];

        case 1:
          return [2, _a3.sent()];
      }
    });
  });
}

function returnStatement3() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a4) {
      {
        return [2];
      }
      return [2];
    });
  });
}

function returnStatement4() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a5) {
      switch (_a5.label) {
        case 0:
          return [4, x];

        case 1:
          _a5.sent();

          {
            return [2];
          }
          return [2];
      }
    });
  });
}

function returnStatement5() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a6) {
      switch (_a6.label) {
        case 0:
          return [4, x];

        case 1:
          return [2, _a6.sent()];
      }
    });
  });
}