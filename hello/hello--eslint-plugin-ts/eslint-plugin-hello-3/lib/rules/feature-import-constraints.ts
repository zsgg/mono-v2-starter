import { Rule } from 'eslint';
import path from 'path';
import { helloPackageInfo } from '../util/path';

export const meta: Rule.RuleMetaData = {
    fixable: 'code',
    type: 'problem',
};

// 현재 위치 어떻게 얻지?
export const create = (context: Rule.RuleContext): Rule.NodeListener => {
    const isRuleApply = context
        .getPhysicalFilename()
        .split(path.sep)
        .some((name) => name.match(/feature|shared/));

    return {
        ImportDeclaration: (node) => {
            if (node.type === 'ImportDeclaration') {
                const importName = node.source.value.toString();
                if (!isRuleApply) return;
                if (!helloPackageInfo.map((value) => value.name).includes(importName)) return;
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

export default { create, meta };
