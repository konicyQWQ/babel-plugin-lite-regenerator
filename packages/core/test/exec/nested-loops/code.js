async function getData() {
    return await 1;
}

async function test() {
    let num = 1;

    A: while (num > 1) {
        num += await getData();
        for (let i = 1; i < num; i++) {
            if (i >= 10) {
                continue A;
            }
        }
        while (num < 5) {
            if (num > 5) {
                break;
            } else {
                break A;
            }
        }
    }

    return num;
}