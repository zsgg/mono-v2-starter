import { Rule } from 'eslint';
import path from 'path';

export const meta: Rule.RuleMetaData = {
    fixable: 'code',
    type: 'suggestion',
};

/*
 파일명과 export 되는 이름이 같다면 default export,
 파일이름과 다른 변수가 export default 라면 에러 export 로 제안,
*/
export const create = (context: Rule.RuleContext): Rule.NodeListener => {
    const namePaths = context.getPhysicalFilename().split(path.sep).reverse();
    const fileName = namePaths[0].split('.')[0];
    const folderName = namePaths[1];

    return {
        ExportDefaultDeclaration(node) {
            // @ts-ignore
            const exportName = node.declaration.name;
            if (exportName) {
                if (fileName.toLowerCase() === 'index' && exportName !== folderName) {
                    context.report({
                        message: `'export default ${folderName}' 으로 변경해주세요`,
                        node: node.declaration,
                    });
                }
                if (fileName.toLowerCase() !== 'index' && exportName !== fileName) {
                    context.report({
                        message: `단일로 export default 한다면 파일 이름과 동일하게 맞춰주세요. 또는 export 로 변경해주세요`,
                        node: node.declaration,
                    });
                }
            }
            // @ts-ignore
            const exportProperties = node.declaration.properties;
            if (exportProperties) {
                const values = exportProperties.map((v) => ({ name: v.key.name, node: v }));
                values.forEach((v) => {
                    if (v.name === fileName) {
                        context.report({
                            message: `export default {} 라면 파일이름과 다른 이름으로 export 해주세요`,
                            node: v.node,
                        });
                    }
                });
            }
        },
        ExportNamedDeclaration(node) {
            // @ts-ignore
            const { specifiers, declaration } = node;
            // @ts-ignore
            const exportNames = [
                ...specifiers.map((v) => ({ name: v.exported.name, node: v.exported })),
                // @ts-ignore
                ...(declaration?.declarations ? declaration.declarations.map((v) => ({ name: v.id.name, node: v.id })) : []),
                // @ts-ignore
                ...(declaration?.id?.name ? [{ name: declaration.id.name, node: declaration.id }] : []),
            ];
            exportNames.forEach((value) => {
                if (value.name === fileName) {
                    context.report({
                        message: `export가 파일이름과 동일하다면 파일이름으로 export default 파일이름으로 변경 또는 파일이름과는 다른 이름으로 작명해주세요`,
                        node: value.node,
                    });
                }
            });
        },
    };
};

export default { create, meta };
