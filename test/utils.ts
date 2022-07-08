import { babelPluginLiteRegenerator } from 'babel-plugin-lite-regenerator';
import { transformSync, PluginItem } from '@babel/core';
import { _awaiter, _generator, _values } from 'babel-plugin-lite-regenerator-runtime'

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

    const plugins = [
        '@babel/plugin-transform-destructuring',
        '@babel/plugin-transform-spread',
        '@babel/plugin-transform-parameters',
        '@babel/plugin-transform-classes',
        "@babel/plugin-transform-for-of",
        "@babel/plugin-transform-block-scoping",
        babelPluginLiteRegenerator
    ];
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
        helperFunctionInline = _awaiter.toString() 
                            + '\n'
                            + _generator.toString()
                            + '\n'
                            + _values.toString();
    }

    return `${helperFunctionInline}\n${res?.code}`;
}