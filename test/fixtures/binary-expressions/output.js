import { _generator } from "babel-plugin-generator-runtime";
import { _awaiter } from "babel-plugin-generator-runtime";

function binaryPlus0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, x];

        case 1:
          _a.sent() + y;
          return [2];
      }
    });
  });
}

function binaryPlus1() {
  return _awaiter(this, void 0, void 0, function () {
    var _t;

    return _generator(this, function (_a2) {
      switch (_a2.label) {
        case 0:
          _t = x;
          return [4, y];

        case 1:
          _t + _a2.sent();
          return [2];
      }
    });
  });
}

function binaryLogicalAnd0() {
  return _awaiter(this, void 0, void 0, function () {
    var _temp;

    return _generator(this, function (_a3) {
      switch (_a3.label) {
        case 0:
          return [4, x];

        case 1:
          _temp = _a3.sent();
          if (!_temp) return [3, 2];
          _temp = y;
          _a3.label = 2;

        case 2:
          _temp;
          return [2];
      }
    });
  });
}

function binaryLogicalAnd1() {
  return _awaiter(this, void 0, void 0, function () {
    var _temp2;

    return _generator(this, function (_a4) {
      switch (_a4.label) {
        case 0:
          _temp2 = x;
          if (!_temp2) return [3, 2];
          return [4, y];

        case 1:
          _temp2 = _a4.sent();
          _a4.label = 2;

        case 2:
          _temp2;
          return [2];
      }
    });
  });
}

function binaryAssignment0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a5) {
      switch (_a5.label) {
        case 0:
          return [4, y];

        case 1:
          x = _a5.sent();
          return [2];
      }
    });
  });
}

function binaryAssignment1() {
  return _awaiter(this, void 0, void 0, function () {
    var _t2;

    return _generator(this, function (_a6) {
      switch (_a6.label) {
        case 0:
          _t2 = x;
          return [4, y];

        case 1:
          _t2.a = _a6.sent();
          return [2];
      }
    });
  });
}

function binaryAssignment2() {
  return _awaiter(this, void 0, void 0, function () {
    var _t3;

    return _generator(this, function (_a7) {
      switch (_a7.label) {
        case 0:
          _t3 = x.a;
          return [4, y];

        case 1:
          _t3.b = _a7.sent();
          return [2];
      }
    });
  });
}

function binaryAssignment3() {
  return _awaiter(this, void 0, void 0, function () {
    var _t4, _t5;

    return _generator(this, function (_a8) {
      switch (_a8.label) {
        case 0:
          _t4 = x;
          _t5 = z;
          return [4, y];

        case 1:
          _t4[_t5] = _a8.sent();
          return [2];
      }
    });
  });
}

function binaryAssignment4() {
  return _awaiter(this, void 0, void 0, function () {
    var _t6;

    return _generator(this, function (_a9) {
      switch (_a9.label) {
        case 0:
          _t6 = x[z];
          return [4, y];

        case 1:
          _t6.b = _a9.sent();
          return [2];
      }
    });
  });
}

function binaryAssignment5() {
  return _awaiter(this, void 0, void 0, function () {
    var _t7, _t8;

    return _generator(this, function (_a10) {
      switch (_a10.label) {
        case 0:
          _t7 = x.a;
          _t8 = z;
          return [4, y];

        case 1:
          _t7[_t8] = _a10.sent();
          return [2];
      }
    });
  });
}

function binaryAssignment6() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a11) {
      switch (_a11.label) {
        case 0:
          return [4, x];

        case 1:
          _a11.sent().a = y;
          return [2];
      }
    });
  });
}

function binaryAssignment7() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a12) {
      switch (_a12.label) {
        case 0:
          return [4, x.a];

        case 1:
          _a12.sent().b = y;
          return [2];
      }
    });
  });
}

function binaryAssignment8() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a13) {
      switch (_a13.label) {
        case 0:
          return [4, x];

        case 1:
          _a13.sent()[z] = y;
          return [2];
      }
    });
  });
}

function binaryAssignment9() {
  return _awaiter(this, void 0, void 0, function () {
    var _t9;

    return _generator(this, function (_a14) {
      switch (_a14.label) {
        case 0:
          _t9 = x;
          return [4, z];

        case 1:
          _t9[_a14.sent()] = y;
          return [2];
      }
    });
  });
}

function binaryAssignment10() {
  return _awaiter(this, void 0, void 0, function () {
    var _t10;

    return _generator(this, function (_a15) {
      switch (_a15.label) {
        case 0:
          _t10 = x;
          return [4, z];

        case 1:
          _t10[_a15.sent()].b = y;
          return [2];
      }
    });
  });
}

function binaryAssignment11() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a16) {
      switch (_a16.label) {
        case 0:
          return [4, x[z]];

        case 1:
          _a16.sent().b = y;
          return [2];
      }
    });
  });
}

function binaryAssignment12() {
  return _awaiter(this, void 0, void 0, function () {
    var _t11;

    return _generator(this, function (_a17) {
      switch (_a17.label) {
        case 0:
          _t11 = x.a;
          return [4, z];

        case 1:
          _t11[_a17.sent()] = y;
          return [2];
      }
    });
  });
}

function binaryAssignment13() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a18) {
      switch (_a18.label) {
        case 0:
          return [4, x.a];

        case 1:
          _a18.sent()[z] = y;
          return [2];
      }
    });
  });
}

function binaryCompoundAssignment0() {
  return _awaiter(this, void 0, void 0, function () {
    var _t12;

    return _generator(this, function (_a19) {
      switch (_a19.label) {
        case 0:
          _t12 = x;
          return [4, y];

        case 1:
          x = _t12 + _a19.sent();
          return [2];
      }
    });
  });
}

function binaryCompoundAssignment1() {
  return _awaiter(this, void 0, void 0, function () {
    var _t13, _t14;

    return _generator(this, function (_a20) {
      switch (_a20.label) {
        case 0:
          _t13 = x;
          _t14 = _t13.a;
          return [4, y];

        case 1:
          _t13.a = _t14 + _a20.sent();
          return [2];
      }
    });
  });
}

function binaryCompoundAssignment2() {
  return _awaiter(this, void 0, void 0, function () {
    var _t15, _t16, _t17;

    return _generator(this, function (_a21) {
      switch (_a21.label) {
        case 0:
          _t15 = x;
          _t16 = a;
          _t17 = _t15[_t16];
          return [4, y];

        case 1:
          _t15[_t16] = _t17 + _a21.sent();
          return [2];
      }
    });
  });
}

function binaryCompoundAssignment3() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a22) {
      switch (_a22.label) {
        case 0:
          return [4, x];

        case 1:
          _a22.sent().a += y;
          return [2];
      }
    });
  });
}

function binaryCompoundAssignment4() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a23) {
      switch (_a23.label) {
        case 0:
          return [4, x];

        case 1:
          _a23.sent()[a] += y;
          return [2];
      }
    });
  });
}

function binaryCompoundAssignment5() {
  return _awaiter(this, void 0, void 0, function () {
    var _t18;

    return _generator(this, function (_a24) {
      switch (_a24.label) {
        case 0:
          _t18 = x;
          return [4, a];

        case 1:
          _t18[_a24.sent()] += y;
          return [2];
      }
    });
  });
}

function binaryCompoundAssignment6() {
  return _awaiter(this, void 0, void 0, function () {
    var _t19, _t20;

    return _generator(this, function (_a25) {
      switch (_a25.label) {
        case 0:
          return [4, x];

        case 1:
          _t19 = _a25.sent();
          _t20 = _t19.a;
          return [4, y];

        case 2:
          _t19.a = _t20 + _a25.sent();
          return [2];
      }
    });
  });
}

function binaryCompoundAssignment7() {
  return _awaiter(this, void 0, void 0, function () {
    var _t21, _t22, _t23;

    return _generator(this, function (_a26) {
      switch (_a26.label) {
        case 0:
          return [4, x];

        case 1:
          _t21 = _a26.sent();
          _t22 = a;
          _t23 = _t21[_t22];
          return [4, y];

        case 2:
          _t21[_t22] = _t23 + _a26.sent();
          return [2];
      }
    });
  });
}

function binaryCompoundAssignment8() {
  return _awaiter(this, void 0, void 0, function () {
    var _t24, _t25, _t26;

    return _generator(this, function (_a27) {
      switch (_a27.label) {
        case 0:
          _t24 = x;
          return [4, a];

        case 1:
          _t25 = _a27.sent();
          _t26 = _t24[_t25];
          return [4, y];

        case 2:
          _t24[_t25] = _t26 + _a27.sent();
          return [2];
      }
    });
  });
}

function binaryComma0() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a28) {
      switch (_a28.label) {
        case 0:
          return [4, x];

        case 1:
          return [2, (_a28.sent(), y)];
      }
    });
  });
}

function binaryComma1() {
  return _awaiter(this, void 0, void 0, function () {
    return _generator(this, function (_a29) {
      switch (_a29.label) {
        case 0:
          x;
          return [4, y];

        case 1:
          return [2, (_a29.sent())];
      }
    });
  });
}