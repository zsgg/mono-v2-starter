import { create } from '@lib/rules/no-null';
import { ruleTester } from '../../RuleUtils';

// @ts-ignore
ruleTester.run('noNull', create, {
    invalid: [
        {
            code: `var a = null;`,
            errors: [
                {
                    message: `'null'대신 'undefined'를 사용해주세요`,
                    suggestions: [
                        {
                            output: `var a = undefined;`,
                        },
                    ],
                },
            ],
        },
    ],
    valid: [
        { code: `var useRef = (arg) => 0; useRef(null);` },
        {
            code: `var useRef = (arg) => 0; var React = {useRef}; React.useRef(null);`,
        },
    ],
});
