#! ../../node_modules/.bin/ts-node/esm
// @ts-ignore
import { $ } from 'zx';
// const { $ } = require('zx');

console.log(`< hello >`);
//
//
(async function () {
    const a = await $`ls`;
    console.log(`< a >`, a.stdout);
})();
