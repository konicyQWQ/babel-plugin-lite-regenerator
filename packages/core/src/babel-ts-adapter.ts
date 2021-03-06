import type { NodePath, Node } from '@babel/core'
import type { FunctionDeclaration, FunctionExpression, ClassMethod, ArrowFunctionExpression, BinaryExpression } from '@babel/types'

export type TSLikeVistor = (NodePath: NodePath) => Node | null | undefined;

export type FunctionLikeDeclaration = FunctionDeclaration | FunctionExpression | ClassMethod | ArrowFunctionExpression;

export function isFunctionLikeDeclaration(path: NodePath) {
    let checkArr: Node['type'][] = ["FunctionDeclaration", "ClassMethod", "FunctionExpression", "ArrowFunctionExpression"];
    return checkArr.includes(path.node.type);
}

export function isCompoundAssignment(operator: string): boolean {
    return ["+=", "-=", "*=", "/=", "%=", "**=", "<<=", ">>=", ">>>=", "&=", "^=", "|="].includes(operator);
}

export function getNonAssignmentOperatorForCompoundAssignment(operator: string): BinaryExpression['operator'] {
    return operator.split('=')[0] as BinaryExpression['operator'];
}

export function visitEachChild(path: NodePath<Node | null | undefined>, visitor: TSLikeVistor): Node | null | undefined {
    path.traverse({
        enter(path) {
            const newNode = visitor(path);
            if (newNode)
                path.replaceWith(newNode);
            else
                path.remove();
            path.skip(); 
        }
    });
    return path.node;
}

export function visitNode(path: NodePath<Node | null | undefined>, visitor: TSLikeVistor): Node | null | undefined {
    return path.node && visitor(path as NodePath<Node>);
}

export function lastOrUndefined<T>(array: readonly T[] | undefined): T | undefined {
    return array === undefined || array.length === 0 ? undefined : array[array.length - 1];
}

export function forEach<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined {
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const result = callback(array[i], i);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
}
