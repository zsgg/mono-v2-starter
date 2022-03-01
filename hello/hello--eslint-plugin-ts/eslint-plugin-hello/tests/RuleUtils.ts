import { ESLintUtils } from '@typescript-eslint/experimental-utils';

const { RuleTester } = ESLintUtils;
const createRule = ESLintUtils.RuleCreator((name) => ``);
export { RuleTester, createRule };
