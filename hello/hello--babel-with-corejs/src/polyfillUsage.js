/*
"use strict";
require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.finally.js");
require("core-js/modules/web.dom-collections.iterator.js");
Promise.resolve().finally();
*/
const core = require('@babel/core');

const code = `
Promise.resolve().finally();
new Map();
`;
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
                    safari: '11.1',
                },
                useBuiltIns: 'usage',
            },
        ],
    ],
});

console.log(out.code);
