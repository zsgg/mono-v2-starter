"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.meta = void 0;
exports.meta = {
    fixable: 'code',
    type: 'suggestion',
};
const create = (context) => {
    return {
        Literal(node) {
            if ((node.parent.type === 'CallExpression' &&
                // @ts-ignore
                node.parent.callee.name === 'useRef') ||
                (node.parent.type === 'CallExpression' &&
                    // @ts-ignore
                    node.parent.callee.object?.name === 'React' &&
                    // @ts-ignore
                    node.parent.callee.property?.name === 'useRef')) {
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
exports.create = create;
exports.default = { create: exports.create, meta: exports.meta };
