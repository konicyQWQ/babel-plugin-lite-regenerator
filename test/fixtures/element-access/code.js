async function elementAccess0() {
    z = await x[y];
}

async function elementAccess1() {
    z = (await x)[y];
}

async function elementAccess2() {
    z = x[await y];
}
