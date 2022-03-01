"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.meta = void 0;
const path_1 = require("../util/path");
exports.meta = {
    fixable: 'code',
    type: 'problem',
};
const create = (context) => {
    // const { options } = context;
    // const { importNames = [] } = options[0] ?? {};
    return {
        ImportDeclaration: (node) => {
            if (node.type === 'ImportDeclaration') {
                const sourceValue = node.source.value.toString();
                const importName = sourceValue.split('/').reverse()[0];
                const matchedName = path_1.helloPackageInfo.find((info) => info.name === importName);
                if (matchedName && sourceValue !== importName) {
                    context.report({
                        fix(fixer) {
                            return fixer.replaceText(node.source, `'${importName}'`);
                        },
                        message: `'${importName}'는 절대경로로 써주세요`,
                        node,
                    });
                }
            }
        },
    };
};
exports.create = create;
exports.default = { create: exports.create, meta: exports.meta };
