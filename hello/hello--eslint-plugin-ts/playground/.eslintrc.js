module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
    },
    // plugins: ["hello3"],
    extends: ['plugin:hello3/all'],
    root: true,
    rules: {
        // "hello/func-prefix-matching": "error",
        // "hello-1/func-prefix-matching-1": "error",
        // "hello-2/func-prefix-matching-2": "error",
        // "hello3/func-prefix-matching-3": "error",
        // "hello-3/func-prefix-matching-3-1": "error"
    },
    parser: '@typescript-eslint/parser',
};
