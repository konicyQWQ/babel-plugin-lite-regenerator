import { NodePath, Node } from '@babel/core';
import type { AwaitExpression, Expression, FunctionDeclaration, FunctionExpression, ClassMethod, ArrowFunctionExpression, BlockStatement } from '@babel/types'
import * as factory from '@babel/types'
import { visitEachChild, visitNode } from './babel-ts-adapter'
import { awaiterHelper } from './helper'

function transformAsyncFunctionBody(path: NodePath<BlockStatement>, arrow: boolean) {
    return factory.blockStatement([
        factory.returnStatement(
            awaiterHelper(
                !arrow,
                false,
                undefined,
                factory.functionExpression(
                    null,
                    [],
                    visitNode(path, visitor) as BlockStatement,
                    true /* generator */
                )
            )
        )
    ])
}

function visitAwaitExpression(path: NodePath<AwaitExpression>) {
    return factory.yieldExpression(visitNode(path.get('argument'), visitor) as Expression);
}

function visitFunctionDeclaration(path: NodePath<FunctionDeclaration>) {
    if (path.node.async) {
        return factory.functionDeclaration(
            path.node.id,
            path.node.params,
            transformAsyncFunctionBody(path.get('body'), false)
        )
    }
    return visitEachChild(path, visitor);
}

function visitFunctionExpression(path: NodePath<FunctionExpression>) {
    if (path.node.async) {
        return factory.functionExpression(
            path.node.id,
            path.node.params,
            transformAsyncFunctionBody(path.get('body'), false)
        )
    }
    return visitEachChild(path, visitor);
}

function visitArrowFunctionExpression(path: NodePath<ArrowFunctionExpression>) {
    if (path.node.async) {
        // () => xxx  ---->  function () { return xxx }

        if (path.get('body').type != 'BlockStatement') {
            path.get('body').replaceWith(
                factory.blockStatement([
                    factory.returnStatement(path.node.body as Expression)
                ])
            );
        }

        return factory.functionExpression(
            undefined,
            path.node.params,
            transformAsyncFunctionBody(path.get('body') as NodePath<BlockStatement>, true)
        )
    }
    return visitEachChild(path, visitor);
}

function visitClassMethod(path: NodePath<ClassMethod>) {
    if (path.node.async) {
        return factory.classMethod(
            path.node.kind,
            path.node.key,
            path.node.params,
            transformAsyncFunctionBody(path.get('body'), false)
        )
    }
    return visitEachChild(path, visitor);
}

export function visitor(path: NodePath): Node | undefined {
    switch (path.node.type) {
        case 'AwaitExpression':
            return visitAwaitExpression(path as NodePath<AwaitExpression>);
        case 'FunctionDeclaration':
            return visitFunctionDeclaration(path as NodePath<FunctionDeclaration>);
        case 'FunctionExpression':
            return visitFunctionExpression(path as NodePath<FunctionExpression>);
        case 'ArrowFunctionExpression':
            return visitArrowFunctionExpression(path as NodePath<ArrowFunctionExpression>);
        case 'ClassMethod':
            return visitClassMethod(path as NodePath<ClassMethod>);
        default:
            return visitEachChild(path, visitor);
    }
}