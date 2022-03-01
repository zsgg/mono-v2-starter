import { create } from '@lib/rules/export-naming';
import path from 'path';
import { ruleTester } from '../../RuleUtils';

// @ts-ignore
ruleTester.run('featureExportConstraints', create, {
    invalid: [
        {
            code: `export default invalidAAAA`,
            errors: [
                {
                    message: `단일로 export default 한다면 파일 이름과 동일하게 맞춰주세요. 또는 export 로 변경해주세요`,
                },
            ],
            filename: path.join('a', 'b', 'c', 'invalidAA.ts'),
        },
        {
            code: `export { invalidAA }`,
            errors: [
                {
                    message: `export가 파일이름과 동일하다면 파일이름으로 export default 파일이름으로 변경 또는 파일이름과는 다른 이름으로 작명해주세요`,
                },
            ],
            filename: path.join('a', 'b', 'c', 'invalidAA.ts'),
        },
        {
            code: `export const invalidAAA`,
            errors: [
                {
                    message: `export가 파일이름과 동일하다면 파일이름으로 export default 파일이름으로 변경 또는 파일이름과는 다른 이름으로 작명해주세요`,
                },
            ],
            filename: path.join('a', 'b', 'c', 'invalidAAA.ts'),
        },
        {
            code: `export default invalidAAAA`,
            errors: [
                {
                    message: `단일로 export default 한다면 파일 이름과 동일하게 맞춰주세요. 또는 export 로 변경해주세요`,
                },
            ],
            filename: path.join('a', 'b', 'c', 'invalidAAA.ts'),
        },
        {
            code: `export default { invalidAAAAA }`,
            errors: [
                {
                    message: `export default {} 라면 파일이름과 다른 이름으로 export 해주세요`,
                },
            ],
            filename: path.join('a', 'b', 'c', 'invalidAAAAA.ts'),
        },
        {
            code: `export default invalidFolderName`,
            errors: [
                {
                    message: `'export default folderName' 으로 변경해주세요`,
                },
            ],
            filename: path.join('a', 'b', 'folderName', 'index.ts'),
        },
    ],
    valid: [
        {
            code: `export default validB;`,
            filename: path.join('a', 'b', 'c', 'validB.ts'),
        },
        {
            code: `export const validBB;`,
            filename: path.join('a', 'b', 'c', 'validB.ts'),
        },
        {
            code: `export default { validBB };`,
            filename: path.join('a', 'b', 'c', 'validB.ts'),
        },
        {
            code: `export const { validBB };`,
            filename: path.join('a', 'b', 'c', 'validB.ts'),
        },
        {
            code: `export default folderName`,
            filename: path.join('a', 'b', 'folderName', 'index.ts'),
        },
    ],
});
