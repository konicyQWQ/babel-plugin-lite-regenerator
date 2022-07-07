
let global;

async function getNumber() {
    global = 1;
    return 123.45;
}

async function getString() {
    global = 2;
    return "abc";
}

async function arr1() {
    return [await getNumber(), global, await getString()];
}

async function arr2() {
    return [global, await getNumber(), 4];
}

async function arr3() {
    return [global, await getNumber()];
}

async function arr4() {
    return [await getString(), 1];
}

async function test() {
    return {
        arr1: await arr1(),
        arr2: await arr2(),
        arr3: await arr3(),
        arr4: await arr4()
    }
}