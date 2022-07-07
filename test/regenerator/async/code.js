/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let strictEqual = (a, b) => expect(a).toStrictEqual(b);

describe("async functions and await expressions", function () {
    
    describe("no-await async function", function () {
        test("should return a Promise", function (done) {
            var called = false;

            async function noAwait(value) {
                called = true;
                return value;
            }

            var promise = noAwait("asdf");
            strictEqual(called, true);

            promise.then(function (value) {
                strictEqual(called, true);
                strictEqual(value, "asdf");
                done();
            }).catch(err => done(err.toString()));
        });
    });

    describe("one-await async function", function () {
        test("should finish asynchronously", function (done) {
            var flag1 = false;
            var flag2 = false;

            async function oneAwait(value) {
                flag1 = true;
                var result = await value;
                flag2 = true;
                return result;
            }

            var promise = oneAwait("asdf");
            strictEqual(flag1, true);
            strictEqual(flag2, false);

            promise.then(function (value) {
                strictEqual(flag2, true);
                strictEqual(value, "asdf");
                done();
            }).catch(err => done(err.toString()));
        });
    });

    describe("nested async function calls", function () {
        test("should evaluate in the right order", function (done) {
            var markers = [];

            async function innerMost(marker) {
                markers.push(marker);
                return await marker;
            }

            async function inner(marker) {
                markers.push(marker);

                strictEqual(
                    await innerMost(marker + 1),
                    marker + 1
                );

                markers.push(marker + 2);

                strictEqual(
                    await innerMost(marker + 3),
                    marker + 3
                );

                markers.push(marker + 4);
            }

            async function outer() {
                markers.push(0);
                await inner(1);
                markers.push(6);
                await inner(7);
                markers.push(12);
            }

            outer().then(function () {
                var expected = [];
                for (var i = 0; i <= 12; ++i)
                    expected.push(i);
                strictEqual(markers, expected);
                done();
            }).catch(err => done(err.toString()));
        });
    });

    describe("dependent promises", function () {
        test("should be awaitable out of order", function (done) {
            async function outer(value) {
                var resolved = false;
                var p1 = new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve(value + 1);
                        resolved = true;
                    }, 0);
                });

                strictEqual(resolved, false);

                var v2 = await p1.then(function (value) {
                    return value + 1;
                });

                strictEqual(resolved, true);

                var v1 = await p1;

                return [v1, v2];
            }

            outer(1).then(function (pair) {
                strictEqual(pair, [2, 3]);
                done();
            }).catch(err => done(err.toString()));
        });
    });

    describe("rejected promises", function () {
        test("should cause await expressions to throw", function (done) {
            var error = new Error("rejected");

            async function f(arg) {
                try {
                    return await arg;
                } catch (e) {
                    strictEqual(e, error);
                    return "did throw";
                }
            }

            Promise.all([
                f(Promise.reject(error)),
                f(Promise.resolve("did not throw"))
            ]).then(function (results) {
                strictEqual(results, [
                    "did throw",
                    "did not throw"
                ]);
                done();
            }).catch(err => done(err.toString()));
        });

        test("should be returned by exceptional async functions", function (done) {
            var error = new Error("rejected");

            async function e(arg) {
                if (arg) {
                    throw arg;
                }
                return "did not throw";
            }

            async function f(arg) {
                return await e(arg);
            }

            async function g(arg) {
                return await f(arg);
            }

            async function h(arg) {
                return await Promise.all([
                    g(arg),
                    Promise.resolve("dummy")
                ]);
            }

            Promise.all([
                h(error).then(function () {
                    done(new Error("should not have resolved"));
                }, function (e) {
                    strictEqual(e, error);
                    return "ok1";
                }),
                h(null).then(function (result) {
                    strictEqual(result, [
                        "did not throw",
                        "dummy"
                    ]);
                    return "ok2";
                })
            ]).then(function (results) {
                strictEqual(results, ["ok1", "ok2"]);
                done();
            }).catch(err => done(err.toString()));
        });

        test("should propagate failure when returned", function () {
            var rejection = new Error("rejection");

            async function f() {
                return new Promise(function (resolve, reject) {
                    reject(rejection);
                });
            }

            return f().then(function (result) {
                assert.ok(false, "should have been rejected");
            }, function (error) {
                strictEqual(error, rejection);
            });
        });
    });

    describe("async function expressions", function () {
        test("should be allowed", function (done) {
            (async function (arg) {
                return await arg;
            })(Promise.resolve(1234)).then(function (value) {
                strictEqual(value, 1234);
                done();
            }).catch(err => done(err.toString()));
        });
    });

    describe("the this object", function () {
        test("should default to undefined (strict)", function (done) {
            async function f() {
                "use strict";

                return this;
            }

            f().then(function (value) {
                strictEqual(value, undefined);
                done();
            }).catch(err => done(err.toString()));
        });

        test("should respect .call's this", function (done) {
            async function f() {
                return this;
            }

            var self = {};
            f.call(self).then(function (value) {
                strictEqual(value, self);
                done();
            }).catch(err => done(err.toString()));
        });
    });
});

describe("update operators", function () {
    test("should read left side before yielding", function () {
        let x = 0;

        function* test() {
            x += yield;
        }

        var gen = test();
        gen.next();
        x += 1;
        strictEqual(x, 1);

        gen.next(2);
        strictEqual(x, 2);
    });

    test("should explode left side before yielding", function () {
        let obj = { count: 0 };

        function* test() {
            obj[yield "key"] += yield "value";
        }

        var gen = test();

        strictEqual(gen.next(), { value: "key", done: false });
        strictEqual(obj.count, 0);

        strictEqual(gen.next("count"), { value: "value", done: false });
        strictEqual(obj.count, 0);

        obj.count += 1;
        strictEqual(obj.count, 1);

        strictEqual(gen.next(2), { value: void 0, done: true });
        strictEqual(obj.count, 2);
    });

    test("should read left side before awaiting", function () {
        let x = 0;

        async function test(val) {
            x += await val;
            return x;
        }

        const promise = test(2);
        x += 1;

        return promise.then(result => {
            strictEqual(result, 2);
        });
    });
});

// describe("async generator functions", function () {
//     test("should return a working AsyncIterator", function () {
//         var markers = [];

//         async function* gen(arg) {
//             markers.push(0);
//             var sent = yield arg;
//             markers.push(1);
//             var result = await sent;
//             markers.push(2);
//             strictEqual(await (yield "second"), "sent after second");
//             markers.push(3);
//             return result;
//         }

//         var iter = gen("initial argument");
//         strictEqual(markers, []);

//         var firstPromise = iter.next();
//         strictEqual(markers, [0]);

//         return firstPromise.then(function (firstResult) {
//             strictEqual(firstResult, {
//                 value: "initial argument",
//                 done: false
//             });

//             strictEqual(markers, [0]);

//             return iter.next(new Promise(function (resolve) {
//                 setTimeout(resolve, 100);
//             }).then(function () {
//                 strictEqual(markers, [0, 1]);
//                 return "will become final result";
//             }));

//         }).then(function (secondResult) {
//             strictEqual(secondResult, {
//                 value: "second",
//                 done: false
//             });

//             strictEqual(markers, [0, 1, 2]);

//             return iter.next("sent after second");

//         }).then(function (finalResult) {
//             strictEqual(markers, [0, 1, 2, 3]);
//             strictEqual(finalResult, {
//                 value: "will become final result",
//                 done: true
//             });
//         });
//     });

//     test("should keep results in order", function () {
//         async function* range(limit) {
//             var before = [];
//             var after = [];
//             for (var i = 0; i < limit; ++i) {
//                 before.push(i);
//                 yield i;
//                 after.push(i);
//             }
//             strictEqual(before, after);
//             return before;
//         }

//         var limit = 10;
//         var iter = range(limit);
//         var promises = [];
//         var results = [];

//         for (var i = 0; i < limit; ++i) {
//             var promise = iter.next();
//             promises.push(promise);

//             promise.then(function (result) {
//                 strictEqual(result.done, false);
//                 results.push(result);
//             });
//         }

//         strictEqual(results, []);

//         return Promise.all(promises).then(function (promiseResults) {
//             strictEqual(results, promiseResults);

//             return iter.next();

//         }).then(function (finalResult) {
//             strictEqual(results.map(function (result) {
//                 return result.value;
//             }), finalResult.value);

//             strictEqual(finalResult.done, true);
//         });
//     });

//     test("should be able to handle many awaits", function () {
//         var awaitCount = 0;

//         function countAwait(i) {
//             return Promise.resolve(i).then(function () {
//                 ++awaitCount;
//             });
//         }

//         async function* gen(limit) {
//             await countAwait(0);
//             yield 1;
//             await countAwait(2);
//             await countAwait(3);
//             yield 4;
//             await countAwait(5);
//             await countAwait(6);
//             await countAwait(7);
//             yield 8;
//             for (var i = 0; i < limit; ++i) {
//                 await countAwait(i);
//             }
//             return "done";
//         }

//         var iter = gen(100);

//         return iter.next().then(function (result) {
//             strictEqual(awaitCount, 1);

//             strictEqual(result, {
//                 value: 1,
//                 done: false
//             });

//             return iter.next();

//         }).then(function (result) {
//             strictEqual(awaitCount, 3);

//             strictEqual(result, {
//                 value: 4,
//                 done: false
//             });

//             return iter.next();

//         }).then(function (result) {
//             strictEqual(awaitCount, 6);

//             strictEqual(result, {
//                 value: 8,
//                 done: false
//             });

//             return iter.next();

//         }).then(function (result) {
//             strictEqual(awaitCount, 6 + 100);

//             strictEqual(result, {
//                 value: "done",
//                 done: true
//             });

//             return iter.next();

//         }).then(function (result) {
//             strictEqual(result, {
//                 value: void 0,
//                 done: true
//             });
//         });
//     });

//     test("should not propagate exceptions between iterations", function () {
//         async function* gen() {
//             yield 1;
//             yield 2;
//         }

//         var iter = gen();

//         return iter.next().then(function (result) {
//             strictEqual(result, {
//                 value: 1,
//                 done: false
//             });

//             return iter.throw(new Error("thrown from first yield"));

//         }).then(function () {
//             throw new Error("should have thrown");

//         }, function (error) {
//             strictEqual(error.message, "thrown from first yield");
//             return iter.next();

//         }).then(function (result) {
//             strictEqual(result, {
//                 value: void 0,
//                 done: true
//             });
//         });
//     });

//     test("should allow yielding a rejected Promise", function () {
//         var yielded = new Error("yielded rejection");
//         var returned = new Error("returned rejection");

//         async function* gen() {
//             strictEqual(yield "first yielded", "first sent");
//             try {
//                 strictEqual(yield Promise.reject(yielded), "not reached");
//             } catch (e) {
//                 strictEqual(yield e, "second sent");
//                 return Promise.reject(returned);
//             }
//         }

//         var iter = gen();

//         return iter.next().then(function (result) {
//             strictEqual(result, {
//                 value: "first yielded",
//                 done: false
//             });
//             return iter.next("first sent");
//         }).then(function (result) {
//             strictEqual(result, {
//                 value: yielded,
//                 done: false
//             });
//             return iter.next("second sent");
//         }).then(function (result) {
//             assert.ok(false, "should have returned a rejected Promise");
//         }, function (error) {
//             strictEqual(error, returned);
//         });
//     });

//     test("should work with nested arrow functions", async function () {
//         var a = async b => {
//             return await (async () => {
//                 return await b();
//             })();
//         };

//         strictEqual(
//             await a(() => Promise.resolve(1234)),
//             1234
//         );
//     });

//     test("should support super.method(...) in async methods", async function () {
//         class A {
//             async method() {
//                 return "from A";
//             }
//         }

//         class B extends A {
//             async method() {
//                 return "from B " + (await super.method());
//             }
//         }

//         strictEqual(await new B().method(), "from B from A");
//     });
// });