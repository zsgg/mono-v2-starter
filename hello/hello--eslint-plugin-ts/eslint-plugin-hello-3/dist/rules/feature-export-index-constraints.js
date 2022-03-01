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
    type: 'suggestion',
};
function toPascalCase(string) {
    return `${string}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(new RegExp(/\s+(.)(\w*)/, 'g'), ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
        .replace(new RegExp(/\w/), (s) => s.toUpperCase());
}
const create = (context) => {
    const { options = [] } = context;
    const featureMainFileList = [...path_2.helloPackageInfo.filter((v) => v.main).map((value) => path_1.default.join(value.name, value.main)), ...options];
    const currFilePathSep = context.getPhysicalFilename().split(path_1.default.sep);
    const featurePath = featureMainFileList.find((mainPath) => {
        const mainPathSep = mainPath.split(path_1.default.sep);
        for (let i = mainPathSep.length - 1, cnt = 0; i >= 0; i--, cnt++) {
            if (mainPathSep[i] !== currFilePathSep[currFilePathSep.length - 1 - cnt])
                return false;
        }
        return true;
    });
    if (!featurePath)
        return {};
    const featureName = featurePath.split(path_1.default.sep)[0];
    const prefix = toPascalCase(featureName);
    const validNames = ['Preset', 'Lib'].map((value) => `${prefix}${value}`);
    return {
        ExportDefaultDeclaration(node) {
            // @ts-ignore
            context.report({
                message: `feature 의 main 파일의 export 는 default 를 지원하지 않습니다`,
                node,
            });
        },
        ExportNamedDeclaration(node) {
            // @ts-ignore
            const { specifiers, declaration } = node;
            if (declaration) {
                context.report({
                    message: `feature 의 main 파일의 export 는 export const 를 지원하지 않습니다`,
                    node,
                });
            }
            if (specifiers) {
                const exportNames = specifiers.map((v) => v.exported.name);
                if (exportNames.every((name) => validNames.some((validName) => validName === name)))
                    return;
                context.report({
                    message: `feature 의 main 파일의 export 는 export { ${validNames
                        .map((value) => `${value}?`)
                        .join(', ')} } 만 허용됩니다`,
                    node,
                });
            }
        },
    };
};
exports.create = create;
exports.default = { create: exports.create, meta: exports.meta };
