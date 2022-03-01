/*
const a = function () {};
*/
const core = require('@babel/core');

const code = `
const a = () => {};
`;
const out = core.transformSync(code, {
    plugins: ['@babel/plugin-transform-arrow-functions'],
});

console.log(out.code);
