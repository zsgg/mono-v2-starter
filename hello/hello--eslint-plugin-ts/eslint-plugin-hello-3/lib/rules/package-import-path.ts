import { Rule } from 'eslint';
import { helloPackageInfo } from '../util/path';

export const meta: Rule.RuleMetaData = {
    fixable: 'code',
    type: 'problem',
};

export const create = (context: Rule.RuleContext): Rule.NodeListener => {
    // const { options } = context;
    // const { importNames = [] } = options[0] ?? {};

    return {
        ImportDeclaration: (node) => {
            if (node.type === 'ImportDeclaration') {
                const sourceValue = node.source.value.toString();
                const importName = sourceValue.split('/').reverse()[0];

                const matchedName = helloPackageInfo.find((info) => info.name === importName);
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

export default { create, meta };
