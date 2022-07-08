export const defaultCode: Record<string, string> = {
    generator: `// test
function* foo(){
    console.log('Hello generator!');
}
foo().next();
`,


    async: `let global;

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
    
    test().then((v) => console.log(v));`,


    "async-try": `class file {
        constructor(filename) {
            this.filename = filename;
            this.openState = false;
        }
    
        change(state) {
            this.openState = state;
        }
    
        async getContent() {
            return \`\${this.filename}: content, \${this.openState}\`
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
    
    test().then(console.log)`,


    "nested-loops": `async function getData() {
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
    
    getData().then(console.log)`,

}