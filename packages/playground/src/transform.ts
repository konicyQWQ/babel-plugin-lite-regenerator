//@ts-nocheck
import { babelPluginGenerator } from 'babel-plugin-generator';
import { transformSync } from '@babel/core';
import { __awaiter, __generator } from 'babel-plugin-generator-runtime'

interface Config {
    import: boolean;
}

function deleteImportPlugin() {
    return {
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
}

export function babelTransform(code: string, config: Config): string {
    const res = transformSync(code, {
        parserOpts: {
            strictMode: false
        },
        presets: [],
        plugins: [
            '@babel/plugin-transform-destructuring',
            '@babel/plugin-transform-spread',
            '@babel/plugin-transform-parameters',
            '@babel/plugin-transform-classes',
            "@babel/plugin-transform-for-of",
            "@babel/plugin-transform-block-scoping",
            babelPluginGenerator,
            deleteImportPlugin
        ].filter(Boolean),
    })!;

    let helperFunctionInline = '';
    if (!config.import) {
        helperFunctionInline = __awaiter.toString().replace('__awaiter', '_awaiter') 
                            + '\n'
                            + __generator.toString().replace('__generator', '_generator');
    }

    return `${helperFunctionInline}\n${res.code}`;
}