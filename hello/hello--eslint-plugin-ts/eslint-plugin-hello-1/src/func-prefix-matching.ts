import { Rule } from 'eslint';

const rulePrefix = ['init', 'is', 'pre', 'on', 'post', 'get', 'set'];

const isValidName = (name, { prefix, exclude }) => {
    const isValid = (prefix) => name.indexOf(prefix) === 0;
    return exclude.some(isValid) || prefix.some(isValid);
};

export const onFuncPrefixMatchingCreate = (context) => {
    const { options } = context;
    const { include = [], exclude = [] } = options[0] || {};

    return {
        Identifier: (node) => {
            if (
                node.parent.init &&
                node.parent.init.type === 'ArrowFunctionExpression' // You can add more checks here
            ) {
                const { name } = node;
                const allPrefix = [...include, ...rulePrefix].sort(); // Sorting is optional
                if (!isValidName(name, { exclude, prefix: allPrefix })) {
                    context.report(
                        node,
                        `< eslint-plugin-hello-1 > ${name} should start with ${allPrefix.join(
                            ', ',
                        )}.`,
                    );
                }
            }
        },
    };
};

// export function myAwesomeRule(context: Rule.RuleContext): Rule.RuleListener {
//     return {
//         Identifier(node) {
//             if (node.name === 'foo') {
//                 context.report({
//                     data: {
//                         name: 'foo',
//                     },
//                     messageId: 'avoidName',
//                     node,
//                 });
//             }
//         },
//     };
// }
