async function ifStatement1() {
    if (await x) { y; } else { z; }
}

async function ifStatement2() {
    if (x) { await y; } else { z; }
}

async function ifStatement3() {
    if (x) { y; } else { await z; }
}