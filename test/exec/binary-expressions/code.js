let global;

async function xxx() {
    global = 1;
    return await 1;
}

async function yyy() {
    global = 0;
    return await 2;
}

async function zzz() {
    return await {};
}

async function test() {
    let a = (await xxx()) + global - (await yyy()) - global;
    let b = (await xxx()) && global;
    let c = global && (await yyy());
    let d = global || (await xxx()) && global;
    let e = {

    };
    e.a = await xxx();
    e.b = {

    }
    e.b.c = await yyy();
    e[e.a] = await xxx();
    
    let f = [];
    f[await xxx()] = await yyy();
    f[global, await xxx()] = (await yyy(), global);
    
    let g = (await zzz()).a = await xxx();
    
    return [a, b, c, d, e, f, g];
}