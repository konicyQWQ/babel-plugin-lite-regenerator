/// <reference path="./global.d.ts" />

import type { NodePath, Visitor } from '@babel/core';
import type { Expression, Identifier, FunctionExpression, BlockStatement } from '@babel/types'
import * as factory from '@babel/types'
import { addNamed } from '@babel/helper-module-imports'

const runtimePkg = 'babel-plugin-generator-runtime';

export function createVoid0() {
    return factory.unaryExpression('void', factory.numericLiteral(0));
}

export function generatorHelper(thisArg: boolean, state: Identifier, body: BlockStatement, programPath: NodePath) {
    if (!programPath.state?.generatorImport) {
        if (!programPath.state) {
            programPath.state = {}
        }
        programPath.state.generatorImport = addNamed(programPath, "_generator", runtimePkg);
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

export function awaiterHelper(thisArg: boolean, args: boolean, promise: Expression | Identifier | undefined, body: FunctionExpression, programPath: NodePath) {
    if (!programPath.state?.awaiterImport) {
        if (!programPath.state) {
            programPath.state = {}
        }
        programPath.state.awaiterImport = addNamed(programPath, "_awaiter", runtimePkg);
    }
    return factory.callExpression(
        programPath.state.awaiterImport,
        [
            thisArg ? factory.thisExpression() : createVoid0(),
            args ? factory.identifier('arguments') : createVoid0(),
            promise || createVoid0(),
            body
        ]
    )
}

export function valuesHelper(expression: Expression, programPath: NodePath) {
    if (!programPath.state?.valuesImport) {
        if (!programPath.state) {
            programPath.state = {}
        }
        programPath.state.valuesImport = addNamed(programPath, "_values", runtimePkg);
    }
    return factory.callExpression(
        programPath.state.valuesImport,
        [
            expression
        ]
    )
}

export const argumentsVisitor: Visitor<{ useArguments: boolean; args: () => Identifier }> = {
    FunctionExpression(path) {
        path.skip();
    },
    FunctionDeclaration(path) {
        path.skip();
    },
    Method(path) {
        path.skip();
    },
    Identifier(path, state) {
        if (path.node.name === "arguments" && (path.isReferenced() || path.parentPath.isAssignmentExpression({ left: path.node }))) {
            state.useArguments = true;
            path.replaceWith(state.args());
        }
    },
};