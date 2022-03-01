import { Rule } from 'eslint';
import { getFileInfo } from '../util';
import RuleListener = Rule.RuleListener;
import RuleContext = Rule.RuleContext;

const rulePrefix = ['init', 'is', 'pre', 'on', 'post', 'get', 'set'];

const isValidName = (name, { prefix, exclude }) => {
    // eslint-disable-next-line no-shadow
    const isValid = (prefix) => name.indexOf(prefix) === 0;
    return exclude.some(isValid) || prefix.some(isValid);
};

export const onFuncPrefixMatchingCreate = (
    context: RuleContext,
): RuleListener => {
    const { options } = context;
    const { include = [], exclude = [] } = options[0] || {};

    const a = getFileInfo(context.getFilename());
    console.log(`< a >`, a.fileFullName);

    return {
        ExportDefaultDeclaration: (node) => {
            const sourceCode = context.getSourceCode();
            // console.log(`< source code >`, {
            //     // @ts-ignore
            //     de: node.declaration.value,
            //     // ast: sourceCode.ast.tokens,
            //     text: sourceCode.getText(node, 0, 2),
            // });
            // if(node.declaration['value'] !==)
            return node;
        },

        Identifier: (node) => {
            if (
                // @ts-ignore
                // node.parent.init &&
                // @ts-ignore
                node.parent?.init?.type === 'ArrowFunctionExpression' // You can add more checks here
            ) {
                const { name } = node;
                const allPrefix = [...include, ...rulePrefix].sort(); // Sorting is optional
                if (!isValidName(name, { exclude, prefix: allPrefix })) {
                    context.report({
                        message: `< eslint-plugin-hello > ${name} should start with ${allPrefix.join(
                            ', ',
                        )}.`,
                        node,
                    });
                }
            }
        },

        onCodePathStart(codePath, node) {
            // do something with codePath
            // context.re
        },
    };
};

// createRule({
//     create: (context) => {},
//     defaultOptions: {},
//     meta: {},
//     name: '',
// });

export default {
    create: onFuncPrefixMatchingCreate,
};
