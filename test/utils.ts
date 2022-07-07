import { babelPluginGenerator } from 'babel-plugin-generator';
import { transformSync, PluginItem } from '@babel/core';
import { __awaiter, __generator, __values } from 'babel-plugin-generator-runtime'

interface Config {
    import: boolean;
}

export function deleteImportPlugin(): PluginItem {
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

    const plugins = [babelPluginGenerator];
    if (!config.import)
        plugins.push(deleteImportPlugin);

    const res = transformSync(code, {
        parserOpts: {
            strictMode: false
        },
        presets: [],
        plugins
    });

    let helperFunctionInline = '';
    if (!config.import) {
        helperFunctionInline = __awaiter.toString().replace('__awaiter', '_awaiter') 
                            + '\n'
                            + __generator.toString().replace('__generator', '_generator')
                            + '\n'
                            + __values.toString().replace('__values', '_values');
    }

    return `${helperFunctionInline}\n${res?.code}`;
}