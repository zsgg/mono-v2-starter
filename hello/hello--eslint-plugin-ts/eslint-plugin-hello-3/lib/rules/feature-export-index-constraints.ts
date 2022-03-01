import { Rule } from 'eslint';
import path from 'path';
import { helloPackageInfo } from '../util/path';

export const meta: Rule.RuleMetaData = {
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

export const create = (context: Rule.RuleContext): Rule.NodeListener => {
    const { options = [] } = context;
    const featureMainFileList = [...helloPackageInfo.filter((v) => v.main).map((value) => path.join(value.name, value.main)), ...options];

    const currFilePathSep = context.getPhysicalFilename().split(path.sep);
    const featurePath = featureMainFileList.find((mainPath: string) => {
        const mainPathSep = mainPath.split(path.sep);
        for (let i = mainPathSep.length - 1, cnt = 0; i >= 0; i--, cnt++) {
            if (mainPathSep[i] !== currFilePathSep[currFilePathSep.length - 1 - cnt]) return false;
        }
        return true;
    });
    if (!featurePath) return {};

    const featureName = featurePath.split(path.sep)[0];
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
                if (exportNames.every((name) => validNames.some((validName) => validName === name))) return;
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

export default { create, meta };
