let global;

function throwBug() {
    global = 0;
    return new Promise((resolve, reject) => reject('Bug'));    
}

function getNumber() {
    global = 1;
    return new Promise((resolve, reject) => resolve(1));
}

async function testArr() {
    try {
        return [await throwBug(), await getNumber()]
    } catch (e) {
        return [e, global];
    }
}

async function testObj() {
    try {
        return {
            a: await throwBug(),
            b: await getNumber()
        }
    } catch (e) {
        return [e, global];
    }
}

async function testTry() {
    try {
        await getNumber();
    } catch (e) {

    } finally {
        return global;
    }
}

async function testTry1() {
    try {
        await getNumber();
        return await getNumber();
    } catch (e) {

    } finally {
        return global;
    }
}

async function testCatch() {
    try {
        await throwBug();
    } catch (e) {
        return await getNumber();
    } finally {
        return global;
    }
}

async function testFinally() {
    try {
        await getNumber();
    } catch (e) {
        await throwBug();
    } finally {
        return await getNumber();
    }
}

async function test() {
    return [
        await testFinally(),
        await testTry(),
        await testTry1(),
        await testArr(),
        await testCatch(),
        await testObj()
    ]
}

