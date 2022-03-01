"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.meta = void 0;
const path_1 = __importDefault(require("path"));
const path_2 = require("../util/path");
exports.meta = {
    fixable: 'code',
    type: 'problem',
};
// 현재 위치 어떻게 얻지?
const create = (context) => {
    const isRuleApply = context
        .getPhysicalFilename()
        .split(path_1.default.sep)
        .some((name) => name.match(/feature|shared/));
    return {
        ImportDeclaration: (node) => {
            if (node.type === 'ImportDeclaration') {
                const importName = node.source.value.toString();
                if (!isRuleApply)
                    return;
                if (!path_2.helloPackageInfo.map((value) => value.name).includes(importName))
                    return;
                context.report({
                    fix(fixer) {
                        return fixer.remove(node);
                    },
                    message: `의존성 룰
- feature 와 feature 는 서로 dependency 를 가지지 않습니다
- feature 와 feature 가 필요하다면 App 에서 해결해주세요
`,
                    node,
                });
            }
        },
    };
};
exports.create = create;
exports.default = { create: exports.create, meta: exports.meta };
