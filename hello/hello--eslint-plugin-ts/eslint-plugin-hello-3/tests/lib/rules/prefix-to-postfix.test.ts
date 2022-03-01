import { create } from '@lib/rules/prefix-to-postfix';
import { ruleTester } from '../../RuleUtils';

// @ts-ignore
ruleTester.run('prefixToPostfix', create, {
    invalid: [
        {
            code: `var modelA = 12;`,
            errors: [
                {
                    message: "'model'는 postFix 로 사용해주세요",
                    suggestions: [
                        {
                            output: `var aModel = 12;`,
                        },
                    ],
                },
            ],
            options: [{ words: ['model'] }],
        },
        {
            code: `const modelA = 12;`,
            errors: [
                {
                    message: "'model'는 postFix 로 사용해주세요",
                    suggestions: [
                        {
                            output: `const aModel = 12;`,
                        },
                    ],
                },
            ],
            options: [{ words: ['model'] }],
        },
        {
            code: `let modelA = 12;`,
            errors: [
                {
                    message: "'model'는 postFix 로 사용해주세요",
                    suggestions: [
                        {
                            output: `let aModel = 12;`,
                        },
                    ],
                },
            ],
            options: [{ words: ['model'] }],
        },
        {
            code: `type modelA = string;`,
            errors: [
                {
                    message: "'model'는 postFix 로 사용해주세요",
                    suggestions: [
                        {
                            output: `type aModel = string;`,
                        },
                    ],
                },
            ],
            options: [{ words: ['model'] }],
        },
        {
            code: `interface modelA {};`,
            errors: [
                {
                    message: "'model'는 postFix 로 사용해주세요",
                    suggestions: [
                        {
                            output: `interface aModel {};`,
                        },
                    ],
                },
            ],
            options: [{ words: ['model'] }],
        },
        {
            code: `class modelA {};`,
            errors: [
                {
                    message: "'model'는 postFix 로 사용해주세요",
                    suggestions: [
                        {
                            output: `class aModel {};`,
                        },
                    ],
                },
            ],
            options: [{ words: ['model'] }],
        },
    ],

    valid: [
        {
            code: `var a = 12;`,
            options: [{ words: [] }],
        },
        {
            code: `const a = 12;`,
            options: [{ words: [] }],
        },
        {
            code: `type a = 12;`,
            options: [{ words: [] }],
        },
        {
            code: `interface a {};`,
            options: [{ words: [] }],
        },
        {
            code: `class a {};`,
            options: [{ words: [] }],
        },
    ],
});
