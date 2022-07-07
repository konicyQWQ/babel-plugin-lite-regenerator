import fs from 'fs';
import path from 'path';
import { transformSync } from '@babel/core';
import { babelPluginGenerator } from '../../index'
import { __awaiter, __generator, __values } from 'babel-plugin-generator-runtime'

function convert(file, output) {
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
                babelPluginGenerator,
                {
                    name: 'delete-import',
                    visitor: {
                        Program: {
                            exit(path) {
                                path.traverse({
                                    ImportDeclaration(path) {
                                        path.remove();
                                    }
                                })
                            }
                        }
                    }
                }
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
        if (!file.includes('.ts') && !file.includes('.js'))
            convert(path.resolve(__dirname, file, 'code.js'), path.resolve(__dirname, file, 'test.js'));
    })
})