import { ScriptTarget, transpileModule } from 'typescript';
import { babelPluginGenerator } from '../index';
import { transformSync } from '@babel/core'

export function babelTransform(code: string): string {
    const res = transformSync(code, {
        parserOpts: {
            strictMode: false
        },
        presets: [],
        plugins: [
            [babelPluginGenerator, { helper: true }]
        ],
    });

    return res?.code || '';
}

export function tsTransform(code: string): string {
    const res = transpileModule(code, {
        compilerOptions: {
            target: ScriptTarget.ES5
        }
    })

    return res.outputText;
}