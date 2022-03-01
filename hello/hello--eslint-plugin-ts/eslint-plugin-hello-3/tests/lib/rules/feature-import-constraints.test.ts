import { create } from '@lib/rules/feature-import-constraints';
import { ruleTester } from '../../RuleUtils';

ruleTester.run(
    'packageImportConstraints',
    // @ts-ignore
    { create, meta: { fixable: 'code' } },
    {
        invalid: [
            {
                code: `import utility from 'hello--ts-class';`,
                errors: [
                    {
                        message: `의존성 룰
- feature 와 feature 는 서로 dependency 를 가지지 않습니다
- feature 와 feature 가 필요하다면 App 에서 해결해주세요
`,
                    },
                ],
                filename: 'feature\\file.ts',
                output: ``,
            },
        ],

        valid: [],
    },
);
