"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.meta = void 0;
const path_1 = __importDefault(require("path"));
exports.meta = {
    fixable: 'code',
    type: 'suggestion',
};
const create = (context) => {
    const emotionNotDirectPackage = context.options[0]?.emotionNotDirectPackage ?? [];
    const currFilePathSep = context.getPhysicalFilename().split(path_1.default.sep);
    return {
        ImportDeclaration: (node) => {
            if (node.type === 'ImportDeclaration') {
                const importName = node.source.value.toString();
                if (!/^@emotion/.test(importName))
                    return;
                if (!currFilePathSep.some((p) => emotionNotDirectPackage.includes(p)))
                    return;
                context.report({
                    message: `emotion 은 직접 사용하지 말고 ui-system 의 emotion 을 사용하여 구현해주세요`,
                    node,
                });
            }
        },
        MemberExpression(node) {
            // @ts-ignore
            const { name: expressionName } = node.object;
            if (expressionName !== 'styled')
                return;
            // @ts-ignore
            const declareName = node.parent?.parent?.id?.name;
            if (declareName && declareName[0] !== declareName[0].toUpperCase()) {
                context.report({
                    message: `css in js 의 styled 는 카멜케이스만 허용됩니다`,
                    node: node.parent.parent,
                });
            }
        },
    };
};
exports.create = create;
exports.default = { create: exports.create, meta: exports.meta };
