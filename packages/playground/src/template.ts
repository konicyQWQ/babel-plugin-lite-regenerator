export const defaultCode: Record<string, string> = {
    normal: `// test
function* foo(){
    console.log('Hello generator!');
}
foo().next();
`,
    normal2: `// test
function* foo(){
    console.log('Hello generator2!');
}`,
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
    }`,

}