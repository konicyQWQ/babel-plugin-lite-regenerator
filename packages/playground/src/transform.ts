//@ts-nocheck
import { babelPluginGenerator } from 'babel-plugin-generator';
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