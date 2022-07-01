async function returnStatement0() {
    return;
}

async function returnStatement1() {
    return x;
}

async function returnStatement2() {
    return await x;
}

async function returnStatement3() {
    { return; }
}

async function returnStatement4() {
    await x;
    { return; }
}

async function returnStatement5() {
    { return await x; }
}