import { create } from '@lib/rules/app-lib-component-path-backing';
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
            code: `import componentA from '../../component/A/service/aApi.ts';`,
            errors: [{ message: `component 는 index 를 통해 entry 에 참조시켜주세요` }],
            filename: path.join('entry', 'page', 'Card.ts'),
            options,
        },
        {
            code: `import componentA from '@componentPath/A/service/aApi.ts';`,
            errors: [{ message: `component 는 index 를 통해 entry 에 참조시켜주세요` }],
            filename: path.join('entry', 'page', 'Card.ts'),
            options,
        },
        {
            code: `import componentB from '../B';`,
            errors: [{ message: `component 는 다른 component 를 참조할 수 없습니다` }],
            filename: path.join('component', 'A', 'Card.ts'),
            options,
        },
        {
            code: `import componentA from '../../component/A';`,
            errors: [{ message: `component 는 entry 외 다른 곳에 참조될 수 없습니다` }],
            filename: path.join('service', 'model', 'Card.ts'),
            options,
        },
    ],
    valid: [
        {
            code: `import componentA from './service/cardApi.ts';`,
            filename: path.join('component', 'A', 'Card.ts'),
            options,
        },
    ],
});
