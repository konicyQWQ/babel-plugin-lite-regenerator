import { PluginItem } from "@babel/core";
import { getVisitor as asyncVisitor } from './asyncVisitor'
import { hasYieldPrepareVisitor, getVisitor as generatorVisitor } from './generatorVisitor';
import { visitEachChild } from './babel-ts-adapter'
import TransformBlockScoping from '@babel/plugin-transform-block-scoping'

export default function babelPluginGenerator(): PluginItem {
    return {
        name: "babel-plugin-generator",
        inherits: TransformBlockScoping,
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