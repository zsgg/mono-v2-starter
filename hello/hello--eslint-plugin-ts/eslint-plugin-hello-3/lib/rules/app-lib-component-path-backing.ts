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

            const isStrictMatchedImportComponentPath = componentPaths.some((value: string) => value === importPath);
            const importComponent = componentPaths.find((value: string) => importPath.includes(value, 0));
            const currPathEntry = entryPaths.find((value: string) => currPath.includes(value, 0));
            const currPathComponent = componentPaths.find((value: string) => currPath.includes(value, 0));

            // import component 가 아닌경우 체크 대상이 아님
            if (!importComponent) return;

            // 현재 파일이 entry 경로이고 import 된 component 경로가 index 가 아니라면
            if (currPathEntry && !isStrictMatchedImportComponentPath) {
                context.report({
                    message: `component 는 index 를 통해 entry 에 참조시켜주세요`,
                    node,
                });
            }

            // 현재 파일, import 경로 모두 component 이고 둘이 다른 컴포넌트라면
            if (currPathComponent && currPathComponent !== importComponent) {
                context.report({
                    message: `component 는 다른 component 를 참조할 수 없습니다`,
                    node,
                });
            }

            // component 를 entry 외 다른곳에 사용
            if (!currPathComponent && !currPathEntry) {
                context.report({
                    message: `component 는 entry 외 다른 곳에 참조될 수 없습니다`,
                    node,
                });
            }
        },
    };
};

export default { create, meta };
