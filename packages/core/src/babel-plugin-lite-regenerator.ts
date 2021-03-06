import type { PluginItem } from "@babel/core";
import { getVisitor as asyncVisitor } from './asyncVisitor'
import { hasYieldPrepareVisitor, getVisitor as generatorVisitor } from './generatorVisitor';
import { visitEachChild } from './babel-ts-adapter'

export default function babelPluginLiteRegenerator(): PluginItem {
    return {
        name: "babel-plugin-lite-regenerator",
        visitor: {
            Program: {
                exit(path) {
                    // async -> generator
                    visitEachChild(path, asyncVisitor(path));
                    // mark hasYield and hasGeneratorFunction
                    path.traverse(hasYieldPrepareVisitor);
                    // generator -> state machine
                    visitEachChild(path, generatorVisitor(path));
                }
            }
        }
    }
}