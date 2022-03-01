/*
...
require("core-js/modules/web.timers.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
require("regenerator-runtime");

Promise.resolve().finally();
new Map();
*/
const code = `
import 'core-js';
import 'regenerator-runtime';

Promise.resolve().finally();
new Map();
`;

const core = require('@babel/core');

const out = core.transformSync(code, {
    presets: [
        [
            '@babel/env',
            {
                corejs: '3.6.5',
                targets: {
                    chrome: '67',
                    edge: '17',
                    firefox: '60',
                    ie: '9',
                    safari: '11.1',
                },
                useBuiltIns: 'entry',
            },
        ],
    ],
});

console.log(out.code);
