import fs from 'fs';
import path from 'path';
import { transformSync } from '@babel/core';
import { __awaiter, __generator, __values } from 'babel-plugin-generator-runtime'
import { babelPluginGenerator } from 'babel-plugin-generator'
import { deleteImportPlugin } from '../utils'

function convert(file: string, output: string) {
    fs.readFile(file, (_, data) => {
        let ret = transformSync(data.toString(), {
            parserOpts: {
                strictMode: false,
            },
            plugins: [
                '@babel/plugin-transform-destructuring',
                '@babel/plugin-transform-spread',
                '@babel/plugin-transform-parameters',
                '@babel/plugin-transform-classes',
                "@babel/plugin-transform-for-of",
                "@babel/plugin-transform-block-scoping",
                babelPluginGenerator,
                deleteImportPlugin
            ]
        });

        fs.writeFileSync(output, `
            ${__awaiter.toString().replace('__awaiter', '_awaiter')}
            ${__generator.toString().replace('__generator', '_generator')}
            ${__values.toString().replace('__values', '_values')}
            ${ret?.code}
        `);
    })
}

fs.readdir(__dirname, {}, (_, files) => {
    files.forEach(file => {
        let filename = file.toString();
        if (!filename.includes('.ts') && !filename.includes('.js'))
            convert(path.resolve(__dirname, filename, 'code.js'), path.resolve(__dirname, filename, 'test.js'));
    })
})