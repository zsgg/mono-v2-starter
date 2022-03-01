"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.meta = void 0;
const path = __importStar(require("path"));
exports.meta = {
    fixable: 'code',
    type: 'suggestion',
};
const create = (context) => {
    const { componentPaths = [], entryPaths = [], tsconfigPaths = {} } = context.options[0];
    if (componentPaths.length < 0)
        return {};
    const currPath = context.getPhysicalFilename().split(path.sep).slice(0, -1).join(path.sep);
    return {
        ImportDeclaration(node) {
            const [head, ...rest] = node.source.value.toString().split('/');
            let importPath = '';
            if (tsconfigPaths[head]) {
                importPath = path.join(tsconfigPaths[head], ...rest);
            }
            else {
                importPath = path.join(currPath, node.source.value.toString());
            }
            const currPathEntry = entryPaths.find((value) => currPath.includes(value, 0));
            const currImportEntry = entryPaths.find((value) => importPath.includes(value, 0));
            if (currPathEntry && currImportEntry && currPathEntry !== currImportEntry) {
                context.report({
                    message: `entry 는 다른 entry 에 참조될 수 없습니다`,
                    node,
                });
            }
            if (!currPathEntry && currImportEntry) {
                context.report({
                    message: `entry 는 entry 외 다른 곳에 참조될 수 없습니다`,
                    node,
                });
            }
        },
    };
};
exports.create = create;
exports.default = { create: exports.create, meta: exports.meta };
