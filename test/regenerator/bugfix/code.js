test("variable declartion not contain yield should in it's origin place", async () => {
  async function f() {
    let form = { a: 1 };

    if (form.err) {
      let err = form = { a: 1, b: 2 };
      form.err = err;
    }

    return form;
  }

  expect(await f()).toStrictEqual({ a: 1 });
})