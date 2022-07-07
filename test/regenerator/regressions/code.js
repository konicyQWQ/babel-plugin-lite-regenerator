/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

test("should correctly hoist arguments", async function () {
    function test(fn) {
        return async (...args) => {
            return fn(...args);
        };
    }
    const result = [];
    await test((arg1, arg2) => { result.push(arg1, arg2); })(1, "foo");

    expect(result).toStrictEqual([1, "foo"]);
});
