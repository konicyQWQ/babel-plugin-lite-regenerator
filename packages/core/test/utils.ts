import { ScriptTarget, transpileModule } from 'typescript';
import { babelPluginGenerator } from '../index';
import { transformSync } from '@babel/core';
import { __awaiter, __generator } from 'babel-plugin-generator-runtime'

interface Config {
    import: boolean;
}

export function babelTransform(code: string, config: Config): string {
    const res = transformSync(code, {
        parserOpts: {
            strictMode: false
        },
        presets: [],
        plugins: [
            babelPluginGenerator,
            !config.import && {
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
        ].filter(Boolean),
    });

    let helperFunctionInline = '';
    if (!config.import) {
        helperFunctionInline = __awaiter.toString().replace('__awaiter', '_awaiter') 
                            + '\n'
                            + __generator.toString().replace('__generator', '_generator');
    }

    return `${helperFunctionInline}\n${res.code}`;
}

export function tsTransform(code: string): string {
    const res = transpileModule(code, {
        compilerOptions: {
            target: ScriptTarget.ES5
        }
    })

    return res.outputText;
}