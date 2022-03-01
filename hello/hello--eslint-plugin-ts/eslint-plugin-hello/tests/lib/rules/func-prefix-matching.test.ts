import funcPrefixMatching from '@lib/rules/func-prefix-matching';
import { RuleTester } from '../../RuleUtils';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
});

jest.mock('@lib/util', () => {
    return {
        getFileInfo: jest.fn,
    };
});

// @ts-ignore
ruleTester.run('my-rule', funcPrefixMatching, {
    invalid: [
        {
            code: `var excludeSomeFunction = () => { console.log("Hello"); }`,
            errors: [
                {
                    message:
                        '< eslint-plugin-hello > excludeSomeFunction should start with get, init, is, on, post, pre, set.',
                },
            ],
        },
    ],

    valid: [
        {
            code: `var getA = () => { console.log("Hello"); }`,
        },
    ],
});
