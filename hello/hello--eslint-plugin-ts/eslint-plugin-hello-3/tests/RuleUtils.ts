import { ESLintUtils } from '@typescript-eslint/experimental-utils';

export const ruleTester = new ESLintUtils.RuleTester({
    parser: '@typescript-eslint/parser',
});
