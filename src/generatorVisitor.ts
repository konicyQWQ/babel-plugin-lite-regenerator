import { Node, NodePath, Visitor } from "@babel/core";
import type {
    Expression, Statement, FunctionDeclaration, FunctionExpression, Identifier, NumericLiteral, SwitchCase, DoWhileStatement, ForStatement,
    ForInStatement, IfStatement, WhileStatement, SwitchStatement, LabeledStatement, VariableDeclaration, ReturnStatement, YieldExpression, BlockStatement, ExpressionStatement,
    VariableDeclarator, AssignmentExpression, ContinueStatement, BreakStatement, WithStatement, ThrowStatement, TryStatement, CatchClause,
    BinaryExpression, SequenceExpression, ConditionalExpression, ObjectExpression, ArrayExpression, MemberExpression, CallExpression, NewExpression, LogicalExpression, SpreadElement,
    ObjectProperty, ObjectMethod
} from "@babel/types";
import * as factory from "@babel/types";
import { FunctionLikeDeclaration, forEach, getNonAssignmentOperatorForCompoundAssignment, isCompoundAssignment, isFunctionLikeDeclaration, lastOrUndefined, visitEachChild, visitNode } from './babel-ts-adapter'
import { generatorHelper } from './helper'

type ExtraData = {
    hasYield?: boolean;
    hasGenerator?: boolean;
}

type Label = number;

const enum OpCode {
    Nop,
    Statement,
    Assign,
    Break,
    BreakWhenTrue,
    BreakWhenFalse,
    Yield,
    YieldStar,
    Return,
    Throw,
    Endfinally
}

type OperationArguments = [Label] | [Label, Expression] | [Statement] | [Expression | undefined] | [Expression, Expression];

const enum BlockAction {
    Open,
    Close,
}


const enum CodeBlockKind {
    Exception,
    With,
    Switch,
    Loop,
    Labeled
}


const enum ExceptionBlockState {
    Try,
    Catch,
    Finally,
    Done
}


type CodeBlock = | ExceptionBlock | LabeledBlock | SwitchBlock | LoopBlock | WithBlock;


interface ExceptionBlock {
    kind: CodeBlockKind.Exception;
    state: ExceptionBlockState;
    startLabel: Label;
    catchVariable?: Identifier;
    catchLabel?: Label;
    finallyLabel?: Label;
    endLabel: Label;
}


interface LabeledBlock {
    kind: CodeBlockKind.Labeled;
    labelText: string;
    isScript: boolean;
    breakLabel: Label;
}


interface SwitchBlock {
    kind: CodeBlockKind.Switch;
    isScript: boolean;
    breakLabel: Label;
}


interface LoopBlock {
    kind: CodeBlockKind.Loop;
    continueLabel: Label;
    isScript: boolean;
    breakLabel: Label;
}


interface WithBlock {
    kind: CodeBlockKind.With;
    expression: Identifier;
    startLabel: Label;
    endLabel: Label;
}


const enum Instruction {
    Next = 0,
    Throw = 1,
    Return = 2,
    Break = 3,
    Yield = 4,
    YieldStar = 5,
    Catch = 6,
    Endfinally = 7,
}

let inGeneratorFunctionBody: boolean;
let inStatementContainingYield: boolean;

let blocks: CodeBlock[] | undefined;
let blockOffsets: number[] | undefined;
let blockActions: BlockAction[] | undefined;
let blockStack: CodeBlock[] | undefined;

let labelOffsets: number[] | undefined;
let labelExpressions: NumericLiteral[][] | undefined;
let nextLabelId = 1;

let operations: OpCode[] | undefined;
let operationArguments: (OperationArguments | undefined)[] | undefined;

let state: Identifier;

let blockIndex = 0;
let labelNumber = 0;
let labelNumbers: number[][] | undefined;
let lastOperationWasAbrupt: boolean;
let lastOperationWasCompletion: boolean;
let clauses: SwitchCase[] | undefined;
let statements: Statement[] | undefined;
let exceptionBlockStack: ExceptionBlock[] | undefined;
let currentExceptionBlock: ExceptionBlock | undefined;
let withBlockStack: WithBlock[] | undefined;

let generatorPath: NodePath;
let hoistVariables: Identifier[] = [];
let hoistFunctions: FunctionDeclaration[] = [];

function hoistVar(path: NodePath<VariableDeclarator>) {
    let newId = generatorPath.scope.generateUidIdentifierBasedOnNode(path.node.id);
    path.scope.rename((path.node.id as Identifier).name, newId.name);
    path.node.id = newId;
    hoistVariables.push(newId);
}

function hoistFun(path: NodePath<FunctionDeclaration>) {
    let newId = generatorPath.scope.generateUidIdentifierBasedOnNode(path.node.id);
    path.scope.rename((path.node.id as Identifier).name, newId.name);
    path.node.id = newId;
    hoistFunctions.push(path.node);
}

function visitJavaScriptInGeneratorFunctionBody(path: NodePath): Node | undefined {
    switch (path.node.type) {
        case 'DoWhileStatement':
            return visitDoStatement(path as NodePath<DoWhileStatement>);
        case 'WhileStatement':
            return visitWhileStatement(path as NodePath<WhileStatement>);
        case 'SwitchStatement':
            return visitSwitchStatement(path as NodePath<SwitchStatement>);
        case 'LabeledStatement':
            return visitLabeledStatement(path as NodePath<LabeledStatement>);
        case 'FunctionDeclaration':
            return visitFunctionDeclaration(path as NodePath<FunctionDeclaration>);
        case 'FunctionExpression':
            return visitFunctionExpression(path as NodePath<FunctionExpression>);
        case 'VariableDeclaration':
            return visitVariableStatement(path as NodePath<VariableDeclaration>);
        case 'ForStatement':
            return visitForStatement(path as NodePath<ForStatement>);
        case 'ForInStatement':
            return visitForInStatement(path as NodePath<ForInStatement>);
        case 'BreakStatement':
            return visitBreakStatement(path as NodePath<BreakStatement>);
        case 'ContinueStatement':
            return visitContinueStatement(path as NodePath<ContinueStatement>);
        case 'ReturnStatement':
            return visitReturnStatement(path as NodePath<ReturnStatement>);
        default:
            if (containsYield(path)) {
                return visitJavaScriptContainingYield(path);
            }
            return visitEachChild(path, visitor);
    }
}

function visitJavaScriptContainingYield(path: NodePath): Node | undefined {
    switch (path.node.type) {
        case 'AssignmentExpression':
            return visitAssignmentExpression(path as NodePath<AssignmentExpression>);
        case 'BinaryExpression':
            return visitBinaryExpression(path as NodePath<BinaryExpression>);
        case 'SequenceExpression':
            return visitSequenceExpression(path as NodePath<SequenceExpression>);
        case 'ConditionalExpression':
            return visitConditionalExpression(path as NodePath<ConditionalExpression>);
        case 'YieldExpression':
            return visitYieldExpression(path as NodePath<YieldExpression>);
        case 'ArrayExpression':
            return visitArrayExpression(path as NodePath<ArrayExpression>);
        case 'ObjectExpression':
            return visitObjectExpression(path as NodePath<ObjectExpression>);
        case 'MemberExpression':
            return visitElementAccessExpression(path as NodePath<MemberExpression>);
        case 'CallExpression':
            return visitCallExpression(path as NodePath<CallExpression>);
        case 'NewExpression':
            return visitNewExpression(path as NodePath<NewExpression>);
        case 'LogicalExpression':
            return visitLogicalExpression(path as NodePath<LogicalExpression>);
        default:
            return visitEachChild(path, visitor);
    }
}

function visitGenerator(path: NodePath): Node | undefined {
    switch (path.node.type) {
        case 'FunctionDeclaration':
            return visitFunctionDeclaration(path as NodePath<FunctionDeclaration>);

        case 'FunctionExpression':
            return visitFunctionExpression(path as NodePath<FunctionExpression>);

        default:
            throw 'unsupport syntax'
            return undefined;
    }
}

function visitFunctionDeclaration(path: NodePath<FunctionDeclaration>): Statement | undefined {
    let node: Statement | undefined = undefined;
    if (path.node.generator) {
        node = factory.functionDeclaration(
            path.node.id,
            path.node.params, // visitParameterList(path.parameters, visitor, context),
            transformGeneratorFunctionBody(path.get('body'))
        );
        path.replaceWith(node);
    }
    else {
        const savedInGeneratorFunctionBody = inGeneratorFunctionBody;
        const savedInStatementContainingYield = inStatementContainingYield;
        inGeneratorFunctionBody = false;
        inStatementContainingYield = false;
        node = visitEachChild(path, visitor) as Statement;
        inGeneratorFunctionBody = savedInGeneratorFunctionBody;
        inStatementContainingYield = savedInStatementContainingYield;
    }

    if (inGeneratorFunctionBody) {
        hoistFun(path);
        return undefined;
    }
    else {
        return node;
    }
}

function visitFunctionExpression(path: NodePath<FunctionExpression>): Expression {
    let node: Expression;
    if (path.node.generator) {
        node = factory.functionExpression(
            path.node.id,
            path.node.params, // visitParameterList(path.parameters, visitor, context),
            transformGeneratorFunctionBody(path.get('body'))
        );
        path.replaceWith(node);
    }
    else {
        const savedInGeneratorFunctionBody = inGeneratorFunctionBody;
        const savedInStatementContainingYield = inStatementContainingYield;
        inGeneratorFunctionBody = false;
        inStatementContainingYield = false;
        node = visitEachChild(path, visitor) as Expression;
        inGeneratorFunctionBody = savedInGeneratorFunctionBody;
        inStatementContainingYield = savedInStatementContainingYield;
    }

    return node;
}

function transformGeneratorFunctionBody(path: NodePath<BlockStatement>) {
    const statements: Statement[] = [];
    const savedInGeneratorFunctionBody = inGeneratorFunctionBody;
    const savedInStatementContainingYield = inStatementContainingYield;
    const savedBlocks = blocks;
    const savedBlockOffsets = blockOffsets;
    const savedBlockActions = blockActions;
    const savedBlockStack = blockStack;
    const savedLabelOffsets = labelOffsets;
    const savedLabelExpressions = labelExpressions;
    const savedNextLabelId = nextLabelId;
    const savedOperations = operations;
    const savedOperationArguments = operationArguments;
    const savedState = state;
    const savedGeneratorPath = generatorPath;
    const savedHoistVariables = hoistVariables;
    const savedHoistFunctions = hoistFunctions;

    inGeneratorFunctionBody = true;
    inStatementContainingYield = false;
    blocks = undefined;
    blockOffsets = undefined;
    blockActions = undefined;
    blockStack = undefined;
    labelOffsets = undefined;
    labelExpressions = undefined;
    nextLabelId = 1;
    operations = undefined;
    operationArguments = undefined;
    state = path.scope.generateUidIdentifier("a");
    generatorPath = path;
    hoistFunctions = [];
    hoistVariables = []

    transformAndEmitStatements(path.get('body'));

    let hoistVarAndFun: Statement[] = [
        hoistVariables.length > 0
            ? factory.variableDeclaration(
                'var',
                hoistVariables.map(v => factory.variableDeclarator(v))
            )
            : null,
        ...hoistFunctions
    ].filter(Boolean);

    const buildResult = build();

    statements.push(...hoistVarAndFun);
    statements.push(factory.returnStatement(buildResult));

    inGeneratorFunctionBody = savedInGeneratorFunctionBody;
    inStatementContainingYield = savedInStatementContainingYield;
    blocks = savedBlocks;
    blockOffsets = savedBlockOffsets;
    blockActions = savedBlockActions;
    blockStack = savedBlockStack;
    labelOffsets = savedLabelOffsets;
    labelExpressions = savedLabelExpressions;
    nextLabelId = savedNextLabelId;
    operations = savedOperations;
    operationArguments = savedOperationArguments;
    state = savedState;
    generatorPath = savedGeneratorPath;
    hoistFunctions = savedHoistFunctions;
    hoistVariables = savedHoistVariables;

    return factory.blockStatement(statements);
}

function visitVariableStatement(path: NodePath<VariableDeclaration>): Statement | undefined {
    transformAndEmitVariableDeclarationList(path);
    return undefined;
}

function visitBinaryExpression(path: NodePath<BinaryExpression>): Expression {
    return visitLeftAssociativeBinaryExpression(path);
}

function visitAssignmentExpression(path: NodePath<AssignmentExpression>) {
    if (containsYield(path.get('right'))) {
        let left = path.get('left');
        let target: Expression;

        if (left.node.type == 'MemberExpression') {
            const leftPath = left as NodePath<MemberExpression>;
            if (left.node.computed) {
                // a[b]
                target = factory.memberExpression(
                    cacheExpression(visitNode(leftPath.get('object'), visitor) as Expression),
                    cacheExpression(visitNode(leftPath.get('property'), visitor) as Expression),
                    true
                );
                left.replaceWith(target);
            } else {
                // a.b
                target = factory.memberExpression(
                    cacheExpression(visitNode(leftPath.get('object'), visitor) as Expression),
                    visitNode(leftPath.get('property'), visitor) as Expression,
                    false
                );
                left.replaceWith(target);
            }
        } else {
            target = visitNode(left, visitor) as Expression;
        }

        const operator = path.node.operator;
        if (isCompoundAssignment(operator)) {
            return factory.assignmentExpression(
                '=',
                target as factory.LVal,
                factory.binaryExpression(
                    getNonAssignmentOperatorForCompoundAssignment(operator),
                    cacheExpression(target),
                    visitNode(path.get('right'), visitor) as Expression
                ),
            );
        }
        else {
            return factory.assignmentExpression(operator as '=', target as factory.LVal, visitNode(path.get('right'), visitor) as Expression);
        }
    }

    return visitEachChild(path, visitor);
}

function visitLeftAssociativeBinaryExpression(path: NodePath<BinaryExpression>): Expression {
    if (containsYield(path.get('right'))) {
        const node = factory.binaryExpression(
            path.node.operator,
            cacheExpression(visitNode(path.get('left'), visitor) as Expression),
            visitNode(path.get('right'), visitor) as Expression
        );
        path.replaceWith(node);
        return node;
    }

    return visitEachChild(path, visitor) as Expression;
}

function visitSequenceExpression(path: NodePath<SequenceExpression>) {
    let pendingExpressions: Expression[] = [];
    for (const elem of path.get('expressions')) {
        if (containsYield(elem) && pendingExpressions.length > 0) {
            emitWorker(OpCode.Statement, [factory.expressionStatement(factory.sequenceExpression(pendingExpressions))]);
            pendingExpressions = [];
        }
        pendingExpressions.push(visitNode(elem, visitor) as Expression);
    }
    return factory.sequenceExpression(pendingExpressions);
}

function visitLogicalExpression(path: NodePath<LogicalExpression>) {
    const resultLabel = defineLabel();
    const resultLocal = declareLocal();

    emitAssignment(resultLocal, visitNode(path.get('left'), visitor) as Expression);
    if (path.node.operator === '&&') {
        emitBreakWhenFalse(resultLabel, resultLocal);
    }
    else {
        emitBreakWhenTrue(resultLabel, resultLocal);
    }

    emitAssignment(resultLocal, visitNode(path.get('right'), visitor) as Expression);
    markLabel(resultLabel);
    return resultLocal;
}

function visitConditionalExpression(path: NodePath<ConditionalExpression>): Expression {
    if (containsYield(path.get('consequent')) || containsYield(path.get('alternate'))) {
        const whenFalseLabel = defineLabel();
        const resultLabel = defineLabel();
        const resultLocal = declareLocal();
        emitBreakWhenFalse(whenFalseLabel, visitNode(path.get('test'), visitor) as Expression);
        emitAssignment(resultLocal, visitNode(path.get('consequent'), visitor) as Expression);
        emitBreak(resultLabel);
        markLabel(whenFalseLabel);
        emitAssignment(resultLocal, visitNode(path.get('alternate'), visitor) as Expression);
        markLabel(resultLabel);
        return resultLocal;
    }

    return visitEachChild(path, visitor) as Expression;
}

function visitYieldExpression(path: NodePath<YieldExpression>): Expression {
    const resumeLabel = defineLabel();
    const expression = visitNode(path.get('argument'), visitor) as Expression;

    emitYield(expression);

    markLabel(resumeLabel);
    return createGeneratorResume();
}

function visitArrayExpression(path: NodePath<ArrayExpression>) {
    return visitElements(path.get('elements'));
}

function visitElements(elements: NodePath<Expression | SpreadElement>[], leadingElement?: Expression) {
    const numInitialElements = countInitialNodesWithoutYield(elements);

    let temp: Identifier | undefined;
    if (numInitialElements > 0) {
        temp = declareLocal();

        const initialElements = [];
        for (let i = 0; i < numInitialElements; i++) {
            initialElements.push(visitNode(elements[i], visitor) as Expression);
        }

        emitAssignment(temp,
            factory.arrayExpression(
                leadingElement
                    ? [leadingElement, ...initialElements]
                    : initialElements
            )
        );
        leadingElement = undefined;
    }

    const expressions = elements.slice(numInitialElements).reduce(reduceElement, [] as (Expression | SpreadElement)[]);
    return temp
        ? factory.callExpression(
            factory.memberExpression(temp, factory.identifier("concat")),
            [factory.arrayExpression(expressions)]
        )
        : factory.arrayExpression(leadingElement ? [leadingElement, ...expressions] : expressions);

    function reduceElement(expressions: (Expression | SpreadElement)[], element: NodePath<Expression | SpreadElement>) {
        if (containsYield(element) && expressions.length > 0) {
            const hasAssignedTemp = temp !== undefined;
            if (!temp) {
                temp = declareLocal();
            }

            emitAssignment(
                temp,
                hasAssignedTemp
                    ? factory.callExpression(
                        factory.memberExpression(temp, factory.identifier("concat")),
                        [factory.arrayExpression(expressions)]
                    )
                    : factory.arrayExpression(
                        leadingElement ? [leadingElement, ...expressions] : expressions,
                    )
            );
            leadingElement = undefined;
            expressions = [];
        }

        expressions.push(visitNode(element, visitor) as Expression);
        return expressions;
    }
}

function visitObjectExpression(path: NodePath<ObjectExpression>) {
    const properties = path.get('properties');
    const numInitialProperties = countInitialNodesWithoutYield(properties);

    const initialElements = [];
    for (let i = 0; i < numInitialProperties; i++) {
        initialElements.push(visitNode(properties[i], visitor) as Expression);
    }

    const temp = declareLocal();
    emitAssignment(temp,
        factory.objectExpression(
            initialElements
        )
    );

    const expressions = properties.slice(numInitialProperties).reduce(reduceProperty, [] as Expression[]);

    expressions.push(temp);
    return factory.sequenceExpression(expressions);

    function reduceProperty(expressions: Expression[], property: NodePath<ObjectMethod | ObjectProperty | SpreadElement>) {
        if (containsYield(property) && expressions.length > 0) {
            emitStatement(factory.expressionStatement(factory.sequenceExpression(expressions)));
            expressions = [];
        }

        let visited: Expression;
        if (property.isObjectProperty()) {
            visited = factory.assignmentExpression(
                "=",
                property.node.computed
                    ? factory.memberExpression(temp, cacheExpression(visitNode(property.get('key'), visitor) as Expression), true)
                    : factory.memberExpression(temp, visitNode(property.get('key'), visitor) as Expression),
                visitNode(property.get('value'), visitor) as Expression
            )
        }

        if (visited) {
            expressions.push(visited);
        }
        return expressions;
    }
}

function visitElementAccessExpression(path: NodePath<MemberExpression>) {
    if (containsYield(path.get('property'))) {
        const node = factory.memberExpression(
            cacheExpression(visitNode(path.get('object'), visitor) as Expression),
            visitNode(path.get('property'), visitor) as Expression,
            path.node.computed
        )
        path.replaceWith(node);
        return node;
    }

    return visitEachChild(path, visitor);
}

function visitCallExpression(path: NodePath<CallExpression>) {
    if (forEach(path.get('arguments'), containsYield)) {

        let callee = path.get('callee');
        let thisArg: Expression;
        if (callee.isMemberExpression()) {
            thisArg = declareLocal();
            callee.get('object').replaceWith(
                factory.assignmentExpression(
                    '=',
                    thisArg,
                    callee.get('object').node
                )
            )
        } else {
            thisArg = factory.unaryExpression("void", factory.numericLiteral(0))
        }

        return factory.callExpression(
            factory.memberExpression(cacheExpression(visitNode(callee, visitor) as Expression), factory.identifier("apply")),
            [thisArg, visitElements(path.get('arguments') as NodePath<Expression | SpreadElement>[])]
        );
    }

    return visitEachChild(path, visitor);
}

function visitNewExpression(path: NodePath<NewExpression>) {
    if (forEach(path.get('arguments'), containsYield)) {

        path.get('callee').replaceWith(factory.memberExpression(path.node.callee as Expression, factory.identifier('bind')));

        let callee = path.get('callee') as NodePath<MemberExpression>;
        let thisArg: Expression;
        thisArg = declareLocal();
        callee.get('object').replaceWith(
            factory.assignmentExpression(
                '=',
                thisArg,
                callee.get('object').node
            )
        )

        return factory.newExpression(
            factory.callExpression(
                factory.memberExpression(cacheExpression(visitNode(callee, visitor) as Expression), factory.identifier("apply")),
                [
                    thisArg,
                    visitElements(path.get('arguments') as NodePath<Expression | SpreadElement>[], factory.unaryExpression("void", factory.numericLiteral(0)))
                ]
            ),
            []
        )
    }

    return visitEachChild(path, visitor);
}

function transformAndEmitStatements(statements: NodePath<Statement>[]) {
    const numStatements = statements.length;
    for (let i = 0; i < numStatements; i++) {
        transformAndEmitStatement(statements[i]);
    }
}

function transformAndEmitEmbeddedStatement(path: NodePath<Statement>) {
    if (path.isBlockStatement()) {
        transformAndEmitStatements(path.get('body'));
    }
    else {
        transformAndEmitStatement(path);
    }
}

function transformAndEmitStatement(path: NodePath<Statement>): void {
    const savedInStatementContainingYield = inStatementContainingYield;
    if (!inStatementContainingYield) {
        inStatementContainingYield = containsYield(path);
    }

    transformAndEmitStatementWorker(path);
    inStatementContainingYield = savedInStatementContainingYield;
}

function transformAndEmitStatementWorker(path: NodePath<Statement>): void {
    switch (path.node.type) {
        case 'BlockStatement':
            return transformAndEmitBlock(path as NodePath<BlockStatement>);
        case 'ExpressionStatement':
            return transformAndEmitExpressionStatement(path as NodePath<ExpressionStatement>);
        case 'IfStatement':
            return transformAndEmitIfStatement(path as NodePath<IfStatement>);
        case 'DoWhileStatement':
            return transformAndEmitDoStatement(path as NodePath<DoWhileStatement>);
        case 'WhileStatement':
            return transformAndEmitWhileStatement(path as NodePath<WhileStatement>);
        case 'ForStatement':
            return transformAndEmitForStatement(path as NodePath<ForStatement>);
        case 'ForInStatement':
            return transformAndEmitForInStatement(path as NodePath<ForInStatement>);
        case 'ContinueStatement':
            return transformAndEmitContinueStatement(path as NodePath<ContinueStatement>);
        case 'BreakStatement':
            return transformAndEmitBreakStatement(path as NodePath<BreakStatement>);
        case 'ReturnStatement':
            return transformAndEmitReturnStatement(path as NodePath<ReturnStatement>);
        case 'WithStatement':
            return transformAndEmitWithStatement(path as NodePath<WithStatement>);
        case 'SwitchStatement':
            return transformAndEmitSwitchStatement(path as NodePath<SwitchStatement>);
        case 'LabeledStatement':
            return transformAndEmitLabeledStatement(path as NodePath<LabeledStatement>);
        case 'ThrowStatement':
            return transformAndEmitThrowStatement(path as NodePath<ThrowStatement>);
        case 'TryStatement':
            return transformAndEmitTryStatement(path as NodePath<TryStatement>);
        default:
            return emitStatement(visitNode(path, visitor) as Statement);
    }
}

function transformAndEmitBlock(path: NodePath<BlockStatement>): void {
    if (containsYield(path)) {
        transformAndEmitStatements(path.get('body'));
    }
    else {
        emitStatement(visitNode(path, visitor) as Statement);
    }
}

function transformAndEmitExpressionStatement(path: NodePath<ExpressionStatement>) {
    emitStatement(visitNode(path, visitor) as Statement);
}

function transformAndEmitVariableDeclarationList(path: NodePath<VariableDeclaration>): VariableDeclaration | undefined {
    const variablePaths = path.get('declarations');

    for (let variablePath of variablePaths) {
        hoistVar(variablePath);
    }

    const numVariables = variablePaths.length;
    let variablesWritten = 0;
    let expressions: (Expression | undefined)[] = [];
    while (variablesWritten < numVariables) {
        for (let i = variablesWritten; i < numVariables; i++) {
            const variablePath = variablePaths[i];
            if (containsYield(variablePath) && expressions.length > 0) {
                break;
            }

            expressions.push(transformInitializedVariable(variablePath));
        }

        if (expressions.length) {
            variablesWritten += expressions.length;
            if (expressions.filter(Boolean).length)
                emitStatement(factory.expressionStatement(factory.sequenceExpression(expressions.filter(Boolean))));
            expressions = [];
        }
    }

    return undefined;
}

function transformInitializedVariable(path: NodePath<VariableDeclarator>): Expression | undefined {
    if (path.node.init) {
        return factory.assignmentExpression(
            '=',
            path.node.id,
            visitNode(path.get('init'), visitor) as Expression
        );
    } else {
        return undefined;
    }
}

function transformAndEmitIfStatement(path: NodePath<IfStatement>) {
    if (containsYield(path)) {
        if (containsYield(path.get('consequent')) || containsYield(path.get('alternate'))) {
            const endLabel = defineLabel();
            const elseLabel = path.node.alternate ? defineLabel() : undefined;
            emitBreakWhenFalse(path.node.alternate ? elseLabel! : endLabel, visitNode(path.get('test'), visitor) as Expression);
            transformAndEmitEmbeddedStatement(path.get('consequent'));
            if (elseLabel) {
                emitBreak(endLabel);
                markLabel(elseLabel!);
                transformAndEmitEmbeddedStatement(path.get('alternate'));
            }
            markLabel(endLabel);
        }
        else {
            emitStatement(visitNode(path, visitor) as Statement);
        }
    }
    else {
        emitStatement(visitNode(path, visitor) as Statement);
    }
}

function transformAndEmitDoStatement(path: NodePath<DoWhileStatement>) {
    if (containsYield(path)) {
        const conditionLabel = defineLabel();
        const loopLabel = defineLabel();
        beginLoopBlock(conditionLabel);
        markLabel(loopLabel);
        transformAndEmitEmbeddedStatement(path.get('body'));
        markLabel(conditionLabel);
        emitBreakWhenTrue(loopLabel, visitNode(path.get('test'), visitor) as Expression);
        endLoopBlock();
    }
    else {
        emitStatement(visitNode(path, visitor) as Statement);
    }
}

function visitDoStatement(path: NodePath<DoWhileStatement>) {
    if (inStatementContainingYield) {
        beginScriptLoopBlock();
        const node = visitEachChild(path, visitor);
        endLoopBlock();
        return node;
    }
    else {
        return visitEachChild(path, visitor);
    }
}

function transformAndEmitWhileStatement(path: NodePath<WhileStatement>) {
    if (containsYield(path)) {
        const loopLabel = defineLabel();
        const endLabel = beginLoopBlock(loopLabel);
        markLabel(loopLabel);
        emitBreakWhenFalse(endLabel, visitNode(path.get('test'), visitor) as Expression);
        transformAndEmitEmbeddedStatement(path.get('body'));
        emitBreak(loopLabel);
        endLoopBlock();
    }
    else {
        emitStatement(visitNode(path, visitor) as Statement);
    }
}

function visitWhileStatement(path: NodePath<WhileStatement>) {
    if (inStatementContainingYield) {
        beginScriptLoopBlock();
        const node = visitEachChild(path, visitor);
        endLoopBlock();
        return node;
    }
    else {
        return visitEachChild(path, visitor);
    }
}

function transformAndEmitForStatement(path: NodePath<ForStatement>) {
    if (containsYield(path)) {
        const conditionLabel = defineLabel();
        const incrementLabel = defineLabel();
        const endLabel = beginLoopBlock(incrementLabel);
        if (path.node.init) {
            const initializer = path.get('init');
            if (initializer.isVariableDeclaration()) {
                transformAndEmitVariableDeclarationList(initializer as NodePath<VariableDeclaration>);
            }
            else {
                emitStatement(
                    factory.expressionStatement(
                        visitNode(initializer, visitor) as Expression
                    ),
                );
            }
        }

        markLabel(conditionLabel);
        if (path.node.test) {
            emitBreakWhenFalse(endLabel, visitNode(path.get('test'), visitor) as Expression);
        }

        transformAndEmitEmbeddedStatement(path.get('body'));

        markLabel(incrementLabel);
        if (path.node.update) {
            emitStatement(
                factory.expressionStatement(
                    visitNode(path.get('update'), visitor) as Expression
                ),
            );
        }
        emitBreak(conditionLabel);
        endLoopBlock();
    }
    else {
        emitStatement(visitNode(path, visitor) as Statement);
    }
}

function visitForStatement(path: NodePath<ForStatement>) {
    if (inStatementContainingYield) {
        beginScriptLoopBlock();
    }

    const initializer = path.get('init');
    let node: Node;
    if (initializer && initializer.isVariableDeclaration()) {
        for (const variable of initializer.get('declarations')) {
            hoistVar(variable);
        }

        const variables = initializer.get('declarations');

        node = factory.forStatement(
            variables.length > 0
                ? factory.sequenceExpression(variables.map(transformInitializedVariable).filter(Boolean))
                : undefined,
            visitNode(path.get('test'), visitor) as Expression,
            visitNode(path.get('update'), visitor) as Expression,
            visitNode(path.get('body'), visitor) as Statement
        );

        path.replaceWith(node);
    }
    else {
        node = visitEachChild(path, visitor);
    }

    if (inStatementContainingYield) {
        endLoopBlock();
    }

    return node;
}

function transformAndEmitForInStatement(path: NodePath<ForInStatement>) {
    if (containsYield(path)) {
        const keysArray = declareLocal();
        const key = declareLocal();
        const keysIndex = declareLocal();
        const initializer = path.get('left');
        emitAssignment(keysArray, factory.arrayExpression([]));

        emitStatement(
            factory.forInStatement(
                key,
                visitNode(path.get('right'), visitor) as Expression,
                factory.expressionStatement(
                    factory.callExpression(
                        factory.memberExpression(keysArray, factory.identifier('push')),
                        [key]
                    )
                )
            )
        );

        emitAssignment(keysIndex, factory.numericLiteral(0));

        const conditionLabel = defineLabel();
        const incrementLabel = defineLabel();
        const endLabel = beginLoopBlock(incrementLabel);

        markLabel(conditionLabel);
        emitBreakWhenFalse(endLabel, factory.binaryExpression('<', keysIndex, factory.memberExpression(keysArray, factory.identifier('length'))));

        let variable: Expression;
        if (initializer.isVariableDeclaration()) {
            for (const variable of initializer.get('declarations')) {
                hoistVar(variable);
            }

            variable = factory.cloneNode(initializer.node.declarations[0].id) as Identifier;
        }
        else {
            variable = visitNode(initializer, visitor) as Expression;
        }

        emitAssignment(variable, factory.memberExpression(keysArray, keysIndex, true));
        transformAndEmitEmbeddedStatement(path.get('body'));

        markLabel(incrementLabel);
        emitStatement(factory.expressionStatement(factory.updateExpression("++", keysIndex)));

        emitBreak(conditionLabel);
        endLoopBlock();
    }
    else {
        emitStatement(visitNode(path, visitor) as Statement);
    }
}

function visitForInStatement(path: NodePath<ForInStatement>) {
    if (inStatementContainingYield) {
        beginScriptLoopBlock();
    }

    let node: Node;
    const initializer = path.get('left');
    if (initializer.isVariableDeclaration()) {
        for (const variable of initializer.get('declarations')) {
            hoistVar(variable);
        }

        node = factory.forInStatement(
            initializer.node.declarations[0].id,
            visitNode(path.get('right'), visitor) as Expression,
            visitNode(path.get('body'), visitor) as Statement
        );

        path.replaceWith(node);
    }
    else {
        node = visitEachChild(path, visitor);
    }

    if (inStatementContainingYield) {
        endLoopBlock();
    }

    return node;
}

function transformAndEmitContinueStatement(path: NodePath<ContinueStatement>): void {
    const label = findContinueTarget(path.node.label ? path.node.label.name : undefined);
    if (label > 0) {
        emitBreak(label);
    }
    else {
        emitStatement(path);
    }
}

function visitContinueStatement(path: NodePath<ContinueStatement>): Statement {
    if (inStatementContainingYield) {
        const label = findContinueTarget(path.node.label && path.node.label.name);
        if (label > 0) {
            return createInlineBreak(label);
        }
    }
    return visitEachChild(path, visitor) as Statement;
}

function transformAndEmitBreakStatement(path: NodePath<BreakStatement>): void {
    const label = findBreakTarget(path.node.label ? path.node.label.name : undefined);
    if (label > 0) {
        emitBreak(label);
    }
    else {
        emitStatement(path);
    }
}

function visitBreakStatement(path: NodePath<BreakStatement>): Statement {
    if (inStatementContainingYield) {
        const label = findBreakTarget(path.node.label && path.node.label.name);
        if (label > 0) {
            return createInlineBreak(label);
        }
    }
    return visitEachChild(path, visitor) as Statement;
}

function transformAndEmitReturnStatement(path: NodePath<ReturnStatement>): void {
    emitReturn(visitNode(path.get('argument') as NodePath, visitor) as Expression);
}

function visitReturnStatement(path: NodePath<ReturnStatement>) {
    return createInlineReturn(visitNode(path.get('argument') as NodePath, visitor) as Expression);
}

function transformAndEmitWithStatement(path: NodePath<WithStatement>) {
    if (containsYield(path)) {
        beginWithBlock(cacheExpression(visitNode(path.get('object'), visitor) as Expression));
        transformAndEmitEmbeddedStatement(path.get('body'));
        endWithBlock();
    }
    else {
        emitStatement(visitNode(path, visitor) as Statement);
    }
}

function transformAndEmitSwitchStatement(path: NodePath<SwitchStatement>) {
    const caseBlock = path.get('cases');
    const numClauses = caseBlock.length;

    let containYield = false;
    for (let i = 0; i < numClauses; i++)
        containYield = containYield || containsYield(caseBlock[i]);

    if (containYield) {
        const endLabel = beginSwitchBlock();
        const expression = cacheExpression(visitNode(path.get('discriminant'), visitor) as Expression);

        const clauseLabels: Label[] = [];
        let defaultClauseIndex = -1;
        for (let i = 0; i < numClauses; i++) {
            const clause = caseBlock[i];
            clauseLabels.push(defineLabel());
            if (!clause.node.test && defaultClauseIndex === -1) {
                defaultClauseIndex = i;
            }
        }

        let clausesWritten = 0;
        let pendingClauses: SwitchCase[] = [];
        while (clausesWritten < numClauses) {
            let defaultClausesSkipped = 0;
            for (let i = clausesWritten; i < numClauses; i++) {
                const clause = caseBlock[i];
                if (clause.node.test) {
                    if (containsYield(clause.get('test')) && pendingClauses.length > 0) {
                        break;
                    }

                    pendingClauses.push(
                        factory.switchCase(
                            visitNode(clause.get('test'), visitor) as Expression,
                            [
                                createInlineBreak(clauseLabels[i])
                            ]
                        )
                    );
                }
                else {
                    defaultClausesSkipped++;
                }
            }

            if (pendingClauses.length) {
                emitStatement(factory.switchStatement(expression, pendingClauses));
                clausesWritten += pendingClauses.length;
                pendingClauses = [];
            }
            if (defaultClausesSkipped > 0) {
                clausesWritten += defaultClausesSkipped;
                defaultClausesSkipped = 0;
            }
        }

        if (defaultClauseIndex >= 0) {
            emitBreak(clauseLabels[defaultClauseIndex]);
        }
        else {
            emitBreak(endLabel);
        }

        for (let i = 0; i < numClauses; i++) {
            markLabel(clauseLabels[i]);
            transformAndEmitStatements(caseBlock[i].get('consequent'));
        }

        endSwitchBlock();
    }
    else {
        emitStatement(visitNode(path, visitor) as Statement);
    }
}

function visitSwitchStatement(path: NodePath<SwitchStatement>) {
    if (inStatementContainingYield) {
        beginScriptSwitchBlock();
    }

    let node = visitEachChild(path, visitor);

    if (inStatementContainingYield) {
        endSwitchBlock();
    }

    return node;
}

function transformAndEmitLabeledStatement(path: NodePath<LabeledStatement>) {
    if (containsYield(path)) {
        beginLabeledBlock(path.node.label.name);
        transformAndEmitEmbeddedStatement(path.get('body'));
        endLabeledBlock();
    }
    else {
        emitStatement(visitNode(path, visitor) as Statement);
    }
}

function visitLabeledStatement(path: NodePath<LabeledStatement>): Node {
    if (inStatementContainingYield) {
        beginScriptLabeledBlock(path.node.label.name);
    }

    let node = visitEachChild(path, visitor);

    if (inStatementContainingYield) {
        endLabeledBlock();
    }

    return node;
}

function transformAndEmitThrowStatement(path: NodePath<ThrowStatement>): void {
    if (path.get('argument')) {
        emitThrow(
            visitNode(path.get('argument'), visitor) as Expression,
        );
    } else {
        emitThrow(
            factory.unaryExpression('void', factory.numericLiteral(0))
        );
    }
}

function transformAndEmitTryStatement(path: NodePath<TryStatement>) {
    if (containsYield(path)) {
        beginExceptionBlock();
        transformAndEmitEmbeddedStatement(path.get('block'));
        if (path.get('handler').node) {
            beginCatchBlock(path.get('handler'));
            transformAndEmitEmbeddedStatement(path.get('handler').get('body'));
        }

        if (path.get('finalizer').node) {
            beginFinallyBlock();
            transformAndEmitEmbeddedStatement(path.get('finalizer'));
        }

        endExceptionBlock();
    }
    else {
        emitStatement(visitEachChild(path, visitor) as Statement);
    }
}

function countInitialNodesWithoutYield(paths: NodePath[]) {
    const numNodes = paths.length;
    for (let i = 0; i < numNodes; i++) {
        if (containsYield(paths[i])) {
            return i;
        }
    }
    return -1;
}

function cacheExpression(node: Expression): Identifier {
    // if (node.type == 'Identifier') {
    //     return node as Identifier;
    // }

    const t = generatorPath.scope.generateUidIdentifier("t");
    hoistVariables.push(t);
    emitAssignment(t, node);
    return t;
}

function declareLocal(name?: string): Identifier {
    const t = generatorPath.scope.generateUidIdentifier(name);
    hoistVariables.push(t);
    return t;
}

function defineLabel(): Label {
    if (!labelOffsets) {
        labelOffsets = [];
    }

    const label = nextLabelId;
    nextLabelId++;
    labelOffsets[label] = -1;
    return label;
}

function markLabel(label: Label): void {
    if (labelOffsets)
        labelOffsets[label] = operations ? operations.length : 0;
}

function beginBlock(block: CodeBlock): number {
    if (!blocks) {
        blocks = [];
        blockActions = [];
        blockOffsets = [];
        blockStack = [];
    }

    const index = blockActions!.length;
    blockActions![index] = BlockAction.Open;
    blockOffsets![index] = operations ? operations.length : 0;
    blocks[index] = block;
    blockStack!.push(block);
    return index;
}

function endBlock(): CodeBlock {
    const block = peekBlock();

    const index = blockActions!.length;
    blockActions![index] = BlockAction.Close;
    blockOffsets![index] = operations ? operations.length : 0;
    blocks![index] = block;
    blockStack!.pop();
    return block;
}

function peekBlock() {
    return lastOrUndefined(blockStack);
}

function peekBlockKind(): CodeBlockKind | undefined {
    const block = peekBlock();
    return block && block.kind;
}

function beginWithBlock(expression: Identifier): void {
    const startLabel = defineLabel();
    const endLabel = defineLabel();
    markLabel(startLabel);
    beginBlock({
        kind: CodeBlockKind.With,
        expression,
        startLabel,
        endLabel
    });
}

function endWithBlock(): void {
    const block = endBlock() as WithBlock;
    markLabel(block.endLabel);
}

function beginExceptionBlock(): Label {
    const startLabel = defineLabel();
    const endLabel = defineLabel();
    markLabel(startLabel);
    beginBlock({
        kind: CodeBlockKind.Exception,
        state: ExceptionBlockState.Try,
        startLabel,
        endLabel
    });
    emitNop();
    return endLabel;
}

function beginCatchBlock(path: NodePath<CatchClause>): void {
    let variable = path.get('param');
    let name: Identifier;
    if (variable.node.type == 'Identifier') {
        name = generatorPath.scope.generateUidIdentifier(variable.node.name);
        path.scope.rename(variable.node.name, name.name);
        hoistVariables.push(name);
    }
    else {
        // catch ({a : d, b, c}) => d = name.a, b = name.b, c = name.c
        // name = declareLocal();

        // if (variable.node.type == 'ObjectPattern') {
        //     const properties = variable.node.properties;

        // }

        // const text = idText(variable.name as Identifier);
        // if (!renamedCatchVariables) {
        //     renamedCatchVariables = new Map<string, boolean>();
        //     renamedCatchVariableDeclarations = [];
        //     context.enableSubstitution(SyntaxKind.Identifier);
        // }

        // renamedCatchVariables.set(text, true);
        // renamedCatchVariableDeclarations[getOriginalNodeId(variable)] = name;
    }

    const exception = peekBlock() as ExceptionBlock;

    const endLabel = exception.endLabel;
    emitBreak(endLabel);

    const catchLabel = defineLabel();
    markLabel(catchLabel);
    exception.state = ExceptionBlockState.Catch;
    exception.catchVariable = name;
    exception.catchLabel = catchLabel;

    emitAssignment(name, factory.callExpression(factory.memberExpression(state, factory.identifier("sent")), []));
    emitNop();
}

function beginFinallyBlock(): void {
    const exception = peekBlock() as ExceptionBlock;

    const endLabel = exception.endLabel;
    emitBreak(endLabel);

    const finallyLabel = defineLabel();
    markLabel(finallyLabel);
    exception.state = ExceptionBlockState.Finally;
    exception.finallyLabel = finallyLabel;
}

function endExceptionBlock(): void {
    const exception = endBlock() as ExceptionBlock;
    const state = exception.state;
    if (state < ExceptionBlockState.Finally) {
        emitBreak(exception.endLabel);
    }
    else {
        emitEndfinally();
    }

    markLabel(exception.endLabel);
    emitNop();
    exception.state = ExceptionBlockState.Done;
}

function beginScriptLoopBlock(): void {
    beginBlock({
        kind: CodeBlockKind.Loop,
        isScript: true,
        breakLabel: -1,
        continueLabel: -1
    });
}

function beginLoopBlock(continueLabel: Label): Label {
    const breakLabel = defineLabel();
    beginBlock({
        kind: CodeBlockKind.Loop,
        isScript: false,
        breakLabel,
        continueLabel,
    });
    return breakLabel;
}

function endLoopBlock(): void {
    const block = endBlock() as SwitchBlock;
    const breakLabel = block.breakLabel;
    if (!block.isScript) {
        markLabel(breakLabel);
    }
}

function beginScriptSwitchBlock(): void {
    beginBlock({
        kind: CodeBlockKind.Switch,
        isScript: true,
        breakLabel: -1
    });
}

function beginSwitchBlock(): Label {
    const breakLabel = defineLabel();
    beginBlock({
        kind: CodeBlockKind.Switch,
        isScript: false,
        breakLabel,
    });
    return breakLabel;
}

function endSwitchBlock(): void {
    const block = endBlock() as SwitchBlock;
    const breakLabel = block.breakLabel;
    if (!block.isScript) {
        markLabel(breakLabel);
    }
}

function beginScriptLabeledBlock(labelText: string) {
    beginBlock({
        kind: CodeBlockKind.Labeled,
        isScript: true,
        labelText,
        breakLabel: -1
    });
}

function beginLabeledBlock(labelText: string) {
    const breakLabel = defineLabel();
    beginBlock({
        kind: CodeBlockKind.Labeled,
        isScript: false,
        labelText,
        breakLabel
    });
}

function endLabeledBlock() {
    const block = endBlock() as LabeledBlock;
    if (!block.isScript) {
        markLabel(block.breakLabel);
    }
}

function supportsUnlabeledBreak(block: CodeBlock): block is SwitchBlock | LoopBlock {
    return block.kind === CodeBlockKind.Switch
        || block.kind === CodeBlockKind.Loop;
}

function supportsLabeledBreakOrContinue(block: CodeBlock): block is LabeledBlock {
    return block.kind === CodeBlockKind.Labeled;
}

function supportsUnlabeledContinue(block: CodeBlock): block is LoopBlock {
    return block.kind === CodeBlockKind.Loop;
}

function hasImmediateContainingLabeledBlock(labelText: string, start: number) {
    for (let j = start; j >= 0; j--) {
        const containingBlock = blockStack![j];
        if (supportsLabeledBreakOrContinue(containingBlock)) {
            if (containingBlock.labelText === labelText) {
                return true;
            }
        }
        else {
            break;
        }
    }

    return false;
}

function findBreakTarget(labelText?: string): Label {
    if (blockStack) {
        if (labelText) {
            for (let i = blockStack.length - 1; i >= 0; i--) {
                const block = blockStack[i];
                if (supportsLabeledBreakOrContinue(block) && block.labelText === labelText) {
                    return block.breakLabel;
                }
                else if (supportsUnlabeledBreak(block) && hasImmediateContainingLabeledBlock(labelText, i - 1)) {
                    return block.breakLabel;
                }
            }
        }
        else {
            for (let i = blockStack.length - 1; i >= 0; i--) {
                const block = blockStack[i];
                if (supportsUnlabeledBreak(block)) {
                    return block.breakLabel;
                }
            }
        }
    }
    return 0;
}

function findContinueTarget(labelText?: string): Label {
    if (blockStack) {
        if (labelText) {
            for (let i = blockStack.length - 1; i >= 0; i--) {
                const block = blockStack[i];
                if (supportsUnlabeledContinue(block) && hasImmediateContainingLabeledBlock(labelText, i - 1)) {
                    return block.continueLabel;
                }
            }
        }
        else {
            for (let i = blockStack.length - 1; i >= 0; i--) {
                const block = blockStack[i];
                if (supportsUnlabeledContinue(block)) {
                    return block.continueLabel;
                }
            }
        }
    }
    return 0;
}

function createLabel(label: Label | undefined): Expression {
    if (label !== undefined && label > 0) {
        if (labelExpressions === undefined) {
            labelExpressions = [];
        }

        const expression = factory.numericLiteral(-1);
        if (labelExpressions[label] === undefined) {
            labelExpressions[label] = [expression];
        }
        else {
            labelExpressions[label].push(expression);
        }

        return expression;
    }

    return null;
}

function createInstruction(instruction: Instruction): NumericLiteral {
    const literal = factory.numericLiteral(instruction);
    return literal;
}

function createInlineBreak(label: Label): ReturnStatement {
    return factory.returnStatement(
        factory.arrayExpression([
            createInstruction(Instruction.Break),
            createLabel(label)
        ])
    );
}

function createInlineReturn(expression?: Expression): ReturnStatement {
    return factory.returnStatement(
        factory.arrayExpression(
            expression
                ? [createInstruction(Instruction.Return), expression]
                : [createInstruction(Instruction.Return)]
        )
    )
}

function createGeneratorResume(): Expression {
    return factory.callExpression(
        factory.memberExpression(
            state,
            factory.identifier('sent')
        ),
        []
    )
}

function emitNop() {
    emitWorker(OpCode.Nop);
}

function emitStatement(node: Statement): void {
    if (node) {
        emitWorker(OpCode.Statement, [node]);
    }
    else {
        emitNop();
    }
}

function emitAssignment(left: Expression, right: Expression): void {
    emitWorker(OpCode.Assign, [left, right]);
}

function emitBreak(label: Label): void {
    emitWorker(OpCode.Break, [label]);
}

function emitBreakWhenTrue(label: Label, condition: Expression): void {
    emitWorker(OpCode.BreakWhenTrue, [label, condition]);
}

function emitBreakWhenFalse(label: Label, condition: Expression): void {
    emitWorker(OpCode.BreakWhenFalse, [label, condition]);
}

function emitYieldStar(expression?: Expression): void {
    emitWorker(OpCode.YieldStar, [expression]);
}

function emitYield(expression?: Expression): void {
    emitWorker(OpCode.Yield, [expression]);
}

function emitReturn(expression?: Expression): void {
    emitWorker(OpCode.Return, [expression]);
}

function emitThrow(expression: Expression): void {
    emitWorker(OpCode.Throw, [expression]);
}

function emitEndfinally(): void {
    emitWorker(OpCode.Endfinally);
}

function emitWorker(code: OpCode, args?: OperationArguments): void {
    if (operations === undefined) {
        operations = [];
        operationArguments = [];
    }

    if (labelOffsets === undefined) {
        markLabel(defineLabel());
    }

    const operationIndex = operations.length;
    operations[operationIndex] = code;
    operationArguments![operationIndex] = args;
}

function build() {
    blockIndex = 0;
    labelNumber = 0;
    labelNumbers = undefined;
    lastOperationWasAbrupt = false;
    lastOperationWasCompletion = false;
    clauses = undefined;
    statements = undefined;
    exceptionBlockStack = undefined;
    currentExceptionBlock = undefined;
    withBlockStack = undefined;

    const buildResult = buildStatements();

    return generatorHelper(true, state, buildResult);
}

function buildStatements(): BlockStatement {
    if (operations) {
        for (let operationIndex = 0; operationIndex < operations.length; operationIndex++) {
            writeOperation(operationIndex);
        }

        flushFinalLabel(operations.length);
    }
    else {
        flushFinalLabel(0);
    }

    if (clauses) {
        return factory.blockStatement([
            factory.switchStatement(
                factory.memberExpression(state, factory.identifier('label')),
                clauses
            )
        ]);
    }
    if (statements) {
        return factory.blockStatement(statements);
    }

    return factory.blockStatement([]);
}

function flushLabel(): void {
    if (!statements) {
        return;
    }

    appendLabel(!lastOperationWasAbrupt);

    lastOperationWasAbrupt = false;
    lastOperationWasCompletion = false;
    labelNumber++;
}

function flushFinalLabel(operationIndex: number): void {
    if (isFinalLabelReachable(operationIndex)) {
        tryEnterLabel(operationIndex);
        withBlockStack = undefined;
        writeReturn(undefined);
    }

    if (statements && clauses) {
        appendLabel(false);
    }

    updateLabelExpressions();
}

function isFinalLabelReachable(operationIndex: number) {
    if (!lastOperationWasCompletion) {
        return true;
    }

    if (!labelOffsets || !labelExpressions) {
        return false;
    }

    for (let label = 0; label < labelOffsets.length; label++) {
        if (labelOffsets[label] === operationIndex && labelExpressions[label]) {
            return true;
        }
    }

    return false;
}

function appendLabel(markLabelEnd: boolean): void {
    if (!clauses) {
        clauses = [];
    }

    if (statements) {
        if (withBlockStack) {
            for (let i = withBlockStack.length - 1; i >= 0; i--) {
                const withBlock = withBlockStack[i];
                statements = [factory.withStatement(withBlock.expression, factory.blockStatement(statements))];
            }
        }

        if (currentExceptionBlock) {
            const { startLabel, catchLabel, finallyLabel, endLabel } = currentExceptionBlock;
            statements.unshift(
                factory.expressionStatement(
                    factory.callExpression(
                        factory.memberExpression(factory.memberExpression(state, factory.identifier("trys")), factory.identifier("push")),
                        [
                            factory.arrayExpression([
                                createLabel(startLabel),
                                createLabel(catchLabel),
                                createLabel(finallyLabel),
                                createLabel(endLabel)
                            ])
                        ]
                    )
                )
            );

            currentExceptionBlock = undefined;
        }

        if (markLabelEnd) {
            statements.push(
                factory.expressionStatement(
                    factory.assignmentExpression(
                        "=",
                        factory.memberExpression(state, factory.identifier("label")),
                        factory.numericLiteral(labelNumber + 1)
                    )
                )
            );
        }
    }

    clauses.push(
        factory.switchCase(
            factory.numericLiteral(labelNumber),
            statements || []
        )
    );

    statements = undefined;
}

function tryEnterLabel(operationIndex: number): void {
    if (!labelOffsets) {
        return;
    }

    for (let label = 0; label < labelOffsets.length; label++) {
        if (labelOffsets[label] === operationIndex) {
            flushLabel();
            if (labelNumbers === undefined) {
                labelNumbers = [];
            }
            if (labelNumbers[labelNumber] === undefined) {
                labelNumbers[labelNumber] = [label];
            }
            else {
                labelNumbers[labelNumber].push(label);
            }
        }
    }
}

function updateLabelExpressions() {
    if (labelExpressions !== undefined && labelNumbers !== undefined) {
        for (let labelNumber = 0; labelNumber < labelNumbers.length; labelNumber++) {
            const labels = labelNumbers[labelNumber];
            if (labels !== undefined) {
                for (const label of labels) {
                    const expressions = labelExpressions[label];
                    if (expressions !== undefined) {
                        for (const expression of expressions) {
                            expression.value = labelNumber;
                        }
                    }
                }
            }
        }
    }
}

function tryEnterOrLeaveBlock(operationIndex: number): void {
    if (blocks) {
        for (; blockIndex < blockActions!.length && blockOffsets![blockIndex] <= operationIndex; blockIndex++) {
            const block: CodeBlock = blocks[blockIndex];
            const blockAction = blockActions![blockIndex];
            switch (block.kind) {
                case CodeBlockKind.Exception:
                    if (blockAction === BlockAction.Open) {
                        if (!exceptionBlockStack) {
                            exceptionBlockStack = [];
                        }

                        if (!statements) {
                            statements = [];
                        }

                        exceptionBlockStack.push(currentExceptionBlock!);
                        currentExceptionBlock = block;
                    }
                    else if (blockAction === BlockAction.Close) {
                        currentExceptionBlock = exceptionBlockStack!.pop();
                    }
                    break;
                case CodeBlockKind.With:
                    if (blockAction === BlockAction.Open) {
                        if (!withBlockStack) {
                            withBlockStack = [];
                        }

                        withBlockStack.push(block);
                    }
                    else if (blockAction === BlockAction.Close) {
                        withBlockStack!.pop();
                    }
                    break;

            }
        }
    }
}

function writeOperation(operationIndex: number): void {
    tryEnterLabel(operationIndex);
    tryEnterOrLeaveBlock(operationIndex);


    if (lastOperationWasAbrupt) {
        return;
    }

    lastOperationWasAbrupt = false;
    lastOperationWasCompletion = false;

    const opcode = operations![operationIndex];
    if (opcode === OpCode.Nop) {
        return;
    }
    else if (opcode === OpCode.Endfinally) {
        return writeEndfinally();
    }

    const args = operationArguments![operationIndex]!;
    if (opcode === OpCode.Statement) {
        return writeStatement(args[0] as Statement);
    }

    switch (opcode) {
        case OpCode.Assign:
            return writeAssign(args[0] as Expression, args[1] as Expression);
        case OpCode.Yield:
            return writeYield(args[0] as Expression);
        case OpCode.Return:
            return writeReturn(args[0] as Expression);
        case OpCode.Break:
            return writeBreak(args[0] as Label);
        case OpCode.BreakWhenTrue:
            return writeBreakWhenTrue(args[0] as Label, args[1] as Expression);
        case OpCode.BreakWhenFalse:
            return writeBreakWhenFalse(args[0] as Label, args[1] as Expression);
        case OpCode.Throw:
            return writeThrow(args[0] as Expression);
        case OpCode.YieldStar:
            return writeYieldStar(args[0] as Expression);
    }
}

function writeStatement(statement: Statement): void {
    if (statement) {
        if (!statements) {
            statements = [statement];
        }
        else {
            statements.push(statement);
        }
    }
}

function writeAssign(left: Expression, right: Expression): void {
    writeStatement(factory.expressionStatement(factory.assignmentExpression('=', left as factory.LVal, right)));
}

function writeThrow(expression: Expression): void {
    lastOperationWasAbrupt = true;
    lastOperationWasCompletion = true;
    writeStatement(factory.throwStatement(expression));
}

function writeReturn(expression: Expression | undefined): void {
    lastOperationWasAbrupt = true;
    lastOperationWasCompletion = true;
    writeStatement(
        factory.returnStatement(
            factory.arrayExpression(
                expression
                    ? [createInstruction(Instruction.Return), expression]
                    : [createInstruction(Instruction.Return)]
            )
        )
    );
}

function writeBreak(label: Label): void {
    lastOperationWasAbrupt = true;
    writeStatement(
        factory.returnStatement(
            factory.arrayExpression([
                createInstruction(Instruction.Break),
                createLabel(label)
            ])
        ),
    );
}

function writeBreakWhenTrue(label: Label, condition: Expression): void {
    writeStatement(
        factory.ifStatement(
            condition,
            factory.returnStatement(
                factory.arrayExpression([
                    createInstruction(Instruction.Break),
                    createLabel(label)
                ])
            ),
        )
    );
}

function writeBreakWhenFalse(label: Label, condition: Expression): void {
    writeStatement(
        factory.ifStatement(
            factory.unaryExpression('!', condition),
            factory.returnStatement(
                factory.arrayExpression([
                    createInstruction(Instruction.Break),
                    createLabel(label)
                ])
            )
        )
    );
}

function writeYield(expression: Expression): void {
    lastOperationWasAbrupt = true;
    writeStatement(
        factory.returnStatement(
            factory.arrayExpression(
                expression
                    ? [createInstruction(Instruction.Yield), expression]
                    : [createInstruction(Instruction.Yield)]
            )
        )
    );
}

function writeYieldStar(expression: Expression): void {
    lastOperationWasAbrupt = true;
    writeStatement(
        factory.returnStatement(
            factory.arrayExpression([
                createInstruction(Instruction.YieldStar),
                expression
            ])
        ),
    );
}

function writeEndfinally(): void {
    lastOperationWasAbrupt = true;
    writeStatement(
        factory.returnStatement(
            factory.arrayExpression([
                createInstruction(Instruction.Endfinally)
            ])
        )
    );
}

function containsYield(path?: NodePath): boolean {
    if (!path || !path.node)
        return false;
    return Boolean((path.node.extra as ExtraData)?.hasYield);
}

function containsGeneratorFunction(path: NodePath): boolean {
    if (!path || !path.node)
        return false;
    return Boolean((path.node.extra as ExtraData)?.hasGenerator);
}

export const hasYieldPrepareVisitor: Visitor = {
    exit(path) {
        if (!path.node.extra)
            path.node.extra = {}
        if (path.node.type == 'YieldExpression') {
            (path.node.extra as ExtraData).hasYield = true;
        } else if (isFunctionLikeDeclaration(path) && (path.node as FunctionDeclaration).generator) {
            (path.node.extra as ExtraData).hasGenerator = true;
        } else {
            let hasYield = false, hasGenerator = false;
            path.traverse({
                enter(path) {
                    const extra = path.node.extra as ExtraData;
                    if (extra.hasYield) hasYield = true;
                    if (extra.hasGenerator) hasGenerator = true;
                    path.skip();
                }
            })
            path.node.extra.hasYield = hasYield;
            path.node.extra.hasGenerator = hasGenerator;
        }
    }
}

export function visitor(path: NodePath): Node | undefined {
    if (!path.hasNode()) return undefined;

    if (inGeneratorFunctionBody) {
        return visitJavaScriptInGeneratorFunctionBody(path);
    }
    else if (isFunctionLikeDeclaration(path) && (path.node as FunctionLikeDeclaration).generator) {
        return visitGenerator(path);
    }
    else if (containsGeneratorFunction(path)) {
        return visitEachChild(path, visitor);
    }
    else {
        return path.node;
    }
}