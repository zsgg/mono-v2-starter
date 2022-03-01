import { create } from '@lib/rules/app-lib-entry-path-backing';
import path from 'path';
import { ruleTester } from '../../RuleUtils';

const options = [
    {
        componentPaths: [path.join('component', 'A'), path.join('component', 'B'), path.join('component', 'C')],
        entryPaths: [path.join('entry', 'core'), path.join('entry', 'page')],
        tsconfigPaths: { '@componentPath': 'component', '@entryPath': 'entry' },
    },
];

// @ts-ignore
ruleTester.run('appLibComponentPathBacking', create, {
    invalid: [
        {
            code: `import componentA from '../core/service/coreApi';`,
            errors: [{ message: `entry 는 다른 entry 에 참조될 수 없습니다` }],
            filename: path.join('entry', 'page', 'Card.ts'),
            options,
        },
        {
            code: `import componentA from '@entryPath/core/service/coreApi';`,
            errors: [{ message: `entry 는 다른 entry 에 참조될 수 없습니다` }],
            filename: path.join('entry', 'page', 'Card.ts'),
            options,
        },
        {
            code: `import componentA from '../../entry/core/service/coreApi';`,
            errors: [{ message: `entry 는 entry 외 다른 곳에 참조될 수 없습니다` }],
            filename: path.join('service', 'common', 'commonApi.ts'),
            options,
        },
    ],
    valid: [
        {
            code: `import componentA from './service/pageApi';`,
            filename: path.join('entry', 'page', 'Card.ts'),
            options,
        },
    ],
});
