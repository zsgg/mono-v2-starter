#! ../../node_modules/.bin/ts-node/esm

// const { readFileSync } = require('fs');
// const { PackageJson } = require('type-fest');
// const path = require('path');
// const { $ } = require('zx');
//
// console.log(`< hello >`);
// (async function () {
//     const a = await $`ls`;
//     console.log(`< a >`, a.stdout);
//     const raw: typeof PackageJson = JSON.parse(readFileSync(path.resolve('.', '..', 'package.json'), 'utf8'));
//     console.log(`< raw >`, raw);
// })();

// @ts-ignore
import { $ } from 'zx';
// @ts-ignore
import { readFileSync } from 'fs';
// @ts-ignore
import { PackageJson } from 'type-fest';
// @ts-ignore
import * as path from 'path';

console.log(`< hello >`);
//
//
(async function () {
    const a = await $`ls`;
    console.log(`< a >`, a.stdout);
    const raw: PackageJson = JSON.parse(readFileSync(path.resolve('.', 'package.json'), 'utf8'));
    console.log(`< raw >`, raw);
})();
