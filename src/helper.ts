import type { NodePath } from '@babel/core';
import type { Expression, Identifier, FunctionExpression, BlockStatement } from '@babel/types'
import * as factory from '@babel/types'
import { addNamed } from '@babel/helper-module-imports'

const runtimePkg = 'babel-plugin-generator-runtime';

export function createVoid0 () {
    return factory.unaryExpression('void', factory.numericLiteral(0));
}

export function generatorHelper(thisArg: boolean, state: Identifier, body: BlockStatement, programPath?: NodePath) {
    if (!programPath.state?.generatorImport) {
        if (!programPath.state) {
            programPath.state = {}
        }
        programPath.state.generatorImport = addNamed(programPath, "__generator", runtimePkg);
    }
    return factory.callExpression(
        programPath.state.generatorImport,
        [
            thisArg ? factory.thisExpression() : createVoid0(),
            factory.functionExpression(
                null,
                [
                    state
                ],
                body
            )
        ]
    );
}

export function awaiterHelper(thisArg: boolean, args: boolean, promise: Expression | Identifier | undefined, body: FunctionExpression, programPath?: NodePath) {
    if (programPath && !programPath.state?.awaiterImport) {
        if (!programPath.state) {
            programPath.state = {}
        }
        programPath.state.awaiterImport = addNamed(programPath, "__awaiter", runtimePkg);
    }
    return factory.callExpression(
        programPath.state.awaiterImport,
        [
            thisArg ? factory.thisExpression() : createVoid0(),
            createVoid0(),
            promise || createVoid0(),
            body
        ]
    )
}