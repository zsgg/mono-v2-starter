import { Rule } from 'eslint';
import * as path from 'path';

export const meta: Rule.RuleMetaData = {
    fixable: 'code',
    type: 'suggestion',
};

export const create = (context: Rule.RuleContext): Rule.NodeListener => {
    const { componentPaths = [], entryPaths = [], tsconfigPaths = {} } = context.options[0];
    if (componentPaths.length < 0) return {};
    const currPath = context.getPhysicalFilename().split(path.sep).slice(0, -1).join(path.sep);

    return {
        ImportDeclaration(node) {
            const [head, ...rest] = node.source.value.toString().split('/');
            let importPath = '';
            if (tsconfigPaths[head]) {
                importPath = path.join(tsconfigPaths[head], ...rest);
            } else {
                importPath = path.join(currPath, node.source.value.toString());
            }

            const currPathEntry = entryPaths.find((value: string) => currPath.includes(value, 0));
            const currImportEntry = entryPaths.find((value: string) => importPath.includes(value, 0));

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

export default { create, meta };
