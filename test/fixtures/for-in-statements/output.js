import { _generator } from "babel-plugin-generator-runtime";
import { _awaiter } from "babel-plugin-generator-runtime";

function forInStatement0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      for (x in y) {
        z;
      }

      return [2];
    });
  });
}

function forInStatement1() {
  return _awaiter(this, void 0, void 0, function () {
    var _temp, _temp2, _temp3;

    return _generator(this, function (_a2) {
      switch (_a2.label) {
        case 0:
          _temp = [];
          return [4, y];

        case 1:
          for (_temp2 in _a2.sent()) _temp.push(_temp2);

          _temp3 = 0;
          _a2.label = 2;

        case 2:
          if (!(_temp3 < _temp.length)) return [3, 4];
          x = _temp[_temp3];
          z;
          _a2.label = 3;

        case 3:
          _temp3++;
          return [3, 2];

        case 4:
          return [2];
      }
    });
  });
}

function forInStatement2() {
  return _awaiter(this, void 0, void 0, function () {
    var _temp4, _temp5, _temp6;

    return _generator(this, function (_a3) {
      switch (_a3.label) {
        case 0:
          _temp4 = [];

          for (_temp5 in y) _temp4.push(_temp5);

          _temp6 = 0;
          _a3.label = 1;

        case 1:
          if (!(_temp6 < _temp4.length)) return [3, 4];
          x = _temp4[_temp6];
          return [4, z];

        case 2:
          _a3.sent();

          _a3.label = 3;

        case 3:
          _temp6++;
          return [3, 1];

        case 4:
          return [2];
      }
    });
  });
}

function forInStatement3() {
  return _awaiter(this, void 0, void 0, function () {
    var _temp7, _temp8, _temp9;

    return _generator(this, function (_a4) {
      switch (_a4.label) {
        case 0:
          _temp7 = [];

          for (_temp8 in y) _temp7.push(_temp8);

          _temp9 = 0;
          _a4.label = 1;

        case 1:
          if (!(_temp9 < _temp7.length)) return [3, 4];
          return [4, x];

        case 2:
          _a4.sent().a = _temp7[_temp9];
          z;
          _a4.label = 3;

        case 3:
          _temp9++;
          return [3, 1];

        case 4:
          return [2];
      }
    });
  });
}

function forInStatement4() {
  return _awaiter(this, void 0, void 0, function () {
    var _temp10, _temp11, _temp12;

    return _generator(this, function (_a5) {
      switch (_a5.label) {
        case 0:
          _temp10 = [];
          return [4, y];

        case 1:
          for (_temp11 in _a5.sent()) _temp10.push(_temp11);

          _temp12 = 0;
          _a5.label = 2;

        case 2:
          if (!(_temp12 < _temp10.length)) return [3, 4];
          x.a = _temp10[_temp12];
          z;
          _a5.label = 3;

        case 3:
          _temp12++;
          return [3, 2];

        case 4:
          return [2];
      }
    });
  });
}

function forInStatement5() {
  return _awaiter(this, void 0, void 0, function () {
    var _temp13, _temp14, _temp15;

    return _generator(this, function (_a6) {
      switch (_a6.label) {
        case 0:
          _temp13 = [];

          for (_temp14 in y) _temp13.push(_temp14);

          _temp15 = 0;
          _a6.label = 1;

        case 1:
          if (!(_temp15 < _temp13.length)) return [3, 4];
          x.a = _temp13[_temp15];
          return [4, z];

        case 2:
          _a6.sent();

          _a6.label = 3;

        case 3:
          _temp15++;
          return [3, 1];

        case 4:
          return [2];
      }
    });
  });
}

function forInStatement6() {
  return _awaiter(this, void 0, void 0, function () {
    var a;
    return _generator(this, function (_a7) {
      for (a in y) {
        z;
      }

      return [2];
    });
  });
}

function forInStatement7() {
  return _awaiter(this, void 0, void 0, function () {
    var _temp16, _temp17, _temp18, b;

    return _generator(this, function (_a8) {
      switch (_a8.label) {
        case 0:
          _temp16 = [];
          return [4, y];

        case 1:
          for (_temp17 in _a8.sent()) _temp16.push(_temp17);

          _temp18 = 0;
          _a8.label = 2;

        case 2:
          if (!(_temp18 < _temp16.length)) return [3, 4];
          b = _temp16[_temp18];
          z;
          _a8.label = 3;

        case 3:
          _temp18++;
          return [3, 2];

        case 4:
          return [2];
      }
    });
  });
}

function forInStatement8() {
  return _awaiter(this, void 0, void 0, function () {
    var _temp19, _temp20, _temp21, c;

    return _generator(this, function (_a9) {
      switch (_a9.label) {
        case 0:
          _temp19 = [];

          for (_temp20 in y) _temp19.push(_temp20);

          _temp21 = 0;
          _a9.label = 1;

        case 1:
          if (!(_temp21 < _temp19.length)) return [3, 4];
          c = _temp19[_temp21];
          return [4, z];

        case 2:
          _a9.sent();

          _a9.label = 3;

        case 3:
          _temp21++;
          return [3, 1];

        case 4:
          return [2];
      }
    });
  });
}