async function propertyAccess0() {
    y = await x.a;
}

async function propertyAccess1() {
    y = (await x).a;
}

async function callExpression0() {
    await x(y, z);
}