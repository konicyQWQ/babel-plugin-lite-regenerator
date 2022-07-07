class file {
    constructor(filename) {
        this.filename = filename;
        this.openState = false;
    }

    change(state) {
        this.openState = state;
    }

    async getContent() {
        return `${this.filename}: content, ${this.openState}`
    }
}

async function getFile1() {
    return await "111";
}

async function getFile2() {
    return await "222";
}

async function getObjClass() {
    return await {
        a: file,
    }
}

async function getFalse() {
    await false;
}

async function test() {
    let f1 = new file(await getFile1());
    let f2 = new ((await getObjClass()).a)(await getFile2());

    f1.change(await getFalse());
    f2.change(!(await getFalse()));

    return [await f1.getContent(), await f2.getContent()]
}