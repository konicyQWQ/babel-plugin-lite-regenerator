//@ts-nocheck
import { babelPluginLiteRegenerator } from 'babel-plugin-lite-regenerator';
import { transform } from '@babel/standalone';

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

export function babelTransform(code: string): string {

    try {
        const res = transform(code, {
            parserOpts: {
                strictMode: false
            },
            presets: [],
            plugins: [
                require('@babel/plugin-transform-destructuring').default,
                require('@babel/plugin-transform-spread').default,
                require('@babel/plugin-transform-parameters').default,
                require('@babel/plugin-transform-classes').default,
                require("@babel/plugin-transform-for-of").default,
                require("@babel/plugin-transform-block-scoping").default,
                babelPluginLiteRegenerator,
                // deleteImportPlugin
            ].filter(Boolean),
        })!;

        return res.code;
    } catch (e) {
        console.log(e);
        return code;
    }
}

export function deleteImportTransform(code: string): string {

    try {
        const res = transform(code, {
            parserOpts: {
                strictMode: false
            },
            presets: [],
            plugins: [
                deleteImportPlugin
            ].filter(Boolean),
        })!;

        return res.code;
    } catch (e) {
        console.log(e);
        return code;
    }
}