module.exports = {
    env: {
        es2020: true,
        'jest/globals': true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
    ],
    ignorePatterns: ['dist', 'out', '@types', '*.json'],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'import', 'jsx-a11y', 'react-hooks', 'jest-dom', 'sort-keys-fix', 'unused-imports'],
    rules: {
        /*
        ts-ignore 선언하면 경고 나오는거 해제
        // @ts-ignore
            ESLint: Do not use "@ts-ignore" because it alters compilation errors.(@typescript-eslint/ban-ts-comment)
        */
        '@typescript-eslint/ban-ts-comment': 0,

        /*
        const Sample = () => (
            ESLint: Missing return type on function.(@typescript-eslint/explicit-module-boundary-types)
        */
        '@typescript-eslint/explicit-module-boundary-types': 0,

        /*
        const index = () => {};
            ESLint: Unexpected empty arrow function.(@typescript-eslint/no-empty-function)
        */
        '@typescript-eslint/no-empty-function': 0,

        '@typescript-eslint/no-unused-vars': 'off',

        /*
        const MiniCssExtractPlugin = require('mini-css-extract-plugin');
            ESLint: Require statement not part of import statement.(@typescript-eslint/no-var-requires)
         */
        '@typescript-eslint/no-var-requires': 0,

        /*
        getA() {}
            ESLint: Expected 'this' to be used by class method 'getA'.(class-methods-use-this)
        */
        'class-methods-use-this': 0,

        /*
        return () => {
            ESLint: Arrow function expected no return value.(consistent-return)
        */
        'consistent-return': 0,

        /*
        it('should', function () {
        ESLint: Unexpected unnamed function.(func-names)
        */
        'func-names': 0,

        /*
        require('autoprefixer'),
            ESLint: Unexpected require().(global-require)
         */
        'global-require': 0,

        /*
        // eslint-disable-prev-line import/extensions
        import App from './App';
        */
        'import/extensions': 0,

        /*
        import { a, A } from 'apps--project-name--util-starter';
            ESLint: A not found in 'apps--project-name--util-starter'(import/named)
       */
        'import/named': 0,

        /*
        import { aaa } from 'hello--tsconfig-paths-parent1-child1';
            ESLint: Resolve error: unable to load resolver "node".(import/named)
        */
        // 'import/named': 0,
        /*
        const MiniCssExtractPlugin = require('mini-css-extract-plugin');
            ESLint: 'mini-css-extract-plugin' should be listed in the project's dependencies. Run 'npm i -S mini-css-extract-plugin' to add it(import/no-extraneous-dependencies)
         */
        'import/no-extraneous-dependencies': 0,

        /*
        import { a as aa } from '@parentSub1/parentSub1-Sub1/helloSub1Sub1';
            ESLint: Unable to resolve path to module '@parentSub1/parentSub1-Sub1/helloSub1Sub1'.(import/no-unresolved)
        */
        'import/no-unresolved': 0,

        /*
        export const meaningOfLife = 42;
            ESLint: Prefer default export.(import/prefer-default-export)
         */
        'import/prefer-default-export': 0,

        'jest/no-commented-out-tests': 0,

        /*
        it.skip('spy 사용 const 0는 0', () => {
            ESLint: Skipped test(jest/no-disabled-tests)
        */
        'jest/no-disabled-tests': 0,

        /*
        class A {}
        class B {}
            ESLint: File has too many classes (2). Maximum allowed is 1.(max-classes-per-file)
        */
        'max-classes-per-file': 0,

        /*
        chain 줄바꿈 설정
            https://eslint.org/docs/rules/newline-per-chained-call
        */
        // 'newline-per-chained-call': [1, { ignoreChainWithDepth: 1 }],
        /*
        console.log(`< ${__filename} > \n`, red(JSON.stringify(config, null, 4)), '\n');
            ESLint: Unexpected console statement.(no-console)
        */
        'no-console': 0,

        /*
        while (true) {
            ESLint: Unexpected constant condition.(no-constant-condition)
        */
        'no-constant-condition': 0,

        /*
        continue;
            ESLint: Unexpected use of continue statement.(no-continue)
        */
        'no-continue': 0,

        /* unknown */
        /*
        new AwsCdkStack(app, 'AwsCdkStack');
            ESLint: Do not use 'new' for side effects.(no-new)
        */
        'no-new': 0,

        /*
        c.fillStyle = 'red';
            ESLint: Assignment to property of function parameter 'c'.(no-param-reassign)
        */
        'no-param-reassign': 0,

        /*
        for (let i = 1; i < splitRowCol.length; i++) {
            ESLint: Unary operator '++' used.(no-plusplus)
        */
        'no-plusplus': 0,

        /*
        for (const line of lines) {
            ESLint: iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.(no-restricted-syntax)
        */
        'no-restricted-syntax': 0,

        /*
        // eslint-disable-prev-line no-use-before-define
        import React from 'react';
        */
        'no-use-before-define': 0,

        /*
        constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
            ESLint: Useless constructor.(no-useless-constructor)
        */
        'no-useless-constructor': 0,

        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],

        /*
        <div>.</div>
            ESLint: Delete `␍`(prettier/prettier)
        */
        // 'prettier/prettier': 1,

        /*
        <button onClick={(event) => dispatchState({ type: 'up' })}>
            ESLint: Missing an explicit type attribute for button(react/button-has-type)
        */
        'react/button-has-type': 0,

        /*
        export default () => {
            ESLint: Component definition is missing display name(react/display-name)
        */
        'react/display-name': 0,

        /*
        // eslint-disable-prev-line react/jsx-filename-extension
        const app = () => <div>.</div>;
        */
        'react/jsx-filename-extension': 0,

        /*
        <Fragment
            ESLint: Prefer fragment shorthand over jsx.Fragment(react/jsx-fragments)
        */
        'react/jsx-fragments': 0,

        /*
        {...props}
            ESLint: Prop spreading is forbidden(react/jsx-props-no-spreading)
        */
        'react/jsx-props-no-spreading': 0,

        /*
        "args"
            ESLint: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.(react/no-unescaped-entities)
        */
        'react/no-unescaped-entities': 0,

        /*
        export const Button: React.FC<ButtonProps> = ({
            primary = false,
                ESLint: 'primary' is missing in props validation(react/prop-types)
        */
        'react/prop-types': 0,

        /*
        const App = () => (
            <div>
                <h1>hello world</h1>
                <div>
                    <Sample />
                </div>
            </div>
        );
            ESLint: 'React' must be in scope when using JSX(react/react-in-jsx-scope)
            import React from "react" 안나오게 되도록 한 후 린트도 설정해줌
        */
        'react/react-in-jsx-scope': 0,

        /*
        const a = { a: 1, cc: 2, b: 3 };
        -> const a = { a: 1, b: 3, cc: 2 };
        */
        'sort-keys-fix/sort-keys-fix': 'warn',

        'unused-imports/no-unused-imports-ts': 'error',

        'unused-imports/no-unused-vars-ts': [
            'warn',
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                vars: 'all',
                varsIgnorePattern: '^_',
            },
        ],
    },

    settings: {
        /*
        https://www.npmjs.com/package/eslint-import-resolver-typescript
        */
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: ['apps/**/*/tsconfig.json'],
            },
        },

        react: {
            version: 'detect',
        },
    },
};
