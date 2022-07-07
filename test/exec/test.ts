import path from 'path';
import fs from 'fs';
import { babelTransform } from '../utils'

/**
 * runtime
 */

fs.readdirSync(path.resolve(__dirname, './')).forEach(testName => {
    if (testName != 'test.ts') {
        test(`exec-${testName}`, async () => {
            let code = fs.readFileSync(path.resolve(__dirname, testName, 'code.js')).toString();

            let originFunction = new Function(`
                ${code}
                return test();
            `)

            let babelFunction = new Function(`
                ${babelTransform(code, { import: false })}
                return test();
            `)

            expect(await babelFunction()).toStrictEqual(await originFunction());
        })
    }
})