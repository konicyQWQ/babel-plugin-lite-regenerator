/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const shared = require('../shared')

var Symbol = shared.Symbol;
var check = shared.check;
var assertAlreadyFinished = shared.assertAlreadyFinished;

let strictEqual = (a, b) => expect(a).toStrictEqual(b);

describe("@@iterator", function() {
  it("is defined on Generator.prototype and returns this", function() {
    function *gen(){}
    var iterator = gen();
    // expect(!iterator.hasOwnProperty(Symbol.iterator)).toBeTruthy();
    // expect(!Object.getPrototypeOf(iterator).hasOwnProperty(Symbol.iterator)).toBeTruthy();
    // expect(Object.getPrototypeOf(Object.getPrototypeOf(
    //   Object.getPrototypeOf(iterator)
    // )).hasOwnProperty(Symbol.iterator)).toBeTruthy();
    strictEqual(iterator[Symbol.iterator](), iterator);
  });
});

describe("throw", function() {
  it("should complete throwing generator", function() {
    function *gen(x) {
      throw 1;
    }

    var u = gen();

    try {
      u.next();
    } catch (err) {
      strictEqual(err, 1);
    }

    assertAlreadyFinished(u);
  });

  it("should complete yielding/throwing generator", function () {
    function *gen(x) {
      yield 2;
      throw 1;
    }

    var u = gen();

    u.next();

    try {
      u.throw(2);
    } catch (err) {
      strictEqual(err, 2);
    }

    assertAlreadyFinished(u);
  });
});

describe("completed generator", function() {
  function *gen() {
    return "ALL DONE";
  }

  it("should refuse to resume", function() {
    var g = gen();

    strictEqual(g.next(), {
      value: "ALL DONE", done: true
    });

    assertAlreadyFinished(g);
  });
});

describe("delegate yield", function() {
  it("should support any iterable argument", function() {
    function *gen() {
      yield 0;
      yield* [
        yield "one",
        yield "two",
        yield "three"
      ];
      yield 5;
    }

    check(gen(), [0, "one", "two", "three", 2, 3, 4, 5]);

    function *string() {
      return yield* "asdf";
    }

    check(string(), ["a", "s", "d", "f"]);
  });
});
