import { Rule } from 'eslint';

export const meta: Rule.RuleMetaData = {
    fixable: 'code',
    type: 'suggestion',
};

export const create = (context: Rule.RuleContext): Rule.NodeListener => {
    return {
        Literal(node) {
            if (
                (node.parent.type === 'CallExpression' &&
                    // @ts-ignore
                    node.parent.callee.name === 'useRef') ||
                (node.parent.type === 'CallExpression' &&
                    // @ts-ignore
                    node.parent.callee.object?.name === 'React' &&
                    // @ts-ignore
                    node.parent.callee.property?.name === 'useRef')
            ) {
                return;
            }
            if (node.raw === 'null') {
                context.report({
                    message: `'null'대신 'undefined'를 사용해주세요`,
                    node,
                    suggest: [
                        {
                            desc: 'noNull',
                            fix(fixer) {
                                return fixer.replaceText(node, `undefined`);
                            },
                        },
                    ],
                });
            }
        },
    };
};

export default { create, meta };
