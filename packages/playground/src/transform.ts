//@ts-nocheck
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
            presets: [
                require('babel-plugin-lite-regenerator').babelPresetLiteRegenerator
            ],
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