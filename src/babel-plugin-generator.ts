import { PluginItem } from "@babel/core";
import { generatorHelperDefine, awaiterHelperDefine } from './helper'
import { visitor as asyncVisitor } from './asyncVisitor'
import { hasYieldPrepareVisitor, visitor as generatorVisitor } from './generatorVisitor';
import { visitEachChild } from './babel-ts-adapter'

type Config = {
    opts: {
        helper?: boolean;
    }
}

export default function babelPluginGenerator(): PluginItem {
    return {
        visitor: {
            Program(path, state: Config) {
                if (state?.opts.helper) {
                    path.node.body.unshift(generatorHelperDefine());
                    path.node.body.unshift(awaiterHelperDefine());
                }

                // async -> generator
                visitEachChild(path, asyncVisitor);
                // mark hasYield and hasGeneratorFunction
                path.traverse(hasYieldPrepareVisitor);
                // generator -> state machine
                visitEachChild(path, generatorVisitor);
            }
        }
    }
}