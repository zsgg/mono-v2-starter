import { create } from '@lib/rules/package-import-path';
import { ruleTester } from '../../RuleUtils';

ruleTester.run(
    'packageImportPath',
    // @ts-ignore
    { create, meta: { fixable: 'code' } },
    {
        invalid: [
            {
                code: `import utility from '../../../hello--eslint-mock';`,
                errors: [
                    {
                        message: `'hello--eslint-mock'는 절대경로로 써주세요`,
                    },
                ],
                // options: [{ importNames: ['utility'] }],
                output: `import utility from 'hello--eslint-mock';`,
            },
        ],

        valid: [
            {
                code: `import utility from 'utility';`,
                options: [{ importNames: ['utility'] }],
            },
        ],
    },
);
