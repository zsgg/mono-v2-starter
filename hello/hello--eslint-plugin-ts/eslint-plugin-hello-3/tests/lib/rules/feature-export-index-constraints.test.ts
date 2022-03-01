import { create } from '@lib/rules/feature-export-index-constraints';
import path from 'path';
import { ruleTester } from '../../RuleUtils';

const getMessage = (featureName) => `feature 의 main 파일의 export 는 export { ${featureName}Preset?, ${featureName}Lib? } 만 허용됩니다`;

// @ts-ignore
ruleTester.run('featureExportConstraints', create, {
    invalid: [
        {
            code: `export const a = 10;`,
            errors: [
                {
                    message: `feature 의 main 파일의 export 는 export const 를 지원하지 않습니다`,
                },
            ],
            filename: path.join('a', 'b', 'c', 'index.ts'),
            options: [path.join('c', 'index.ts')],
        },
        {
            code: `const c = 1; export { c }`,
            errors: [
                {
                    message: getMessage('C'),
                },
            ],
            filename: path.join('a', 'b', 'c', 'index.ts'),
            options: [path.join('c', 'index.ts')],
        },
        {
            code: `export default { A, B, C, D };`,
            errors: [
                {
                    message: `feature 의 main 파일의 export 는 default 를 지원하지 않습니다`,
                },
            ],
            filename: path.join('a', 'b', 'c', 'index.ts'),
            options: [path.join('c', 'index.ts')],
        },
    ],
    valid: [
        {
            code: `export { };`,
            filename: path.join('a', 'b', 'c', 'index.ts'),
            options: [path.join('c', 'index.ts')],
        },
        {
            code: `export { CLib };`,
            filename: path.join('a', 'b', 'c', 'index.ts'),
            options: [path.join('c', 'index.ts')],
        },
        {
            code: `export { CPreset };`,
            filename: path.join('a', 'b', 'c', 'index.ts'),
            options: [path.join('c', 'index.ts')],
        },
        {
            code: `export { CLib, CPreset };`,
            filename: path.join('a', 'b', 'c', 'index.ts'),
            options: [path.join('c', 'index.ts')],
        },
    ],
});
