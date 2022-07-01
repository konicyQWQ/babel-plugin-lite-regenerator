async function arrayLiteral0() {
    x = [await y, z];
}

async function arrayLiteral1() {
    x = [y, await z];
}

async function arrayLiteral2() {
    x = [y, await z, a];
}

async function arrayLiteral3() {
    x = [await y, z, await a];
}