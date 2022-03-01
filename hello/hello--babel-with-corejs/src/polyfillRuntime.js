/*
"use strict";
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));
var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));
_promise.default.resolve().finally();

new _map.default();
new _set.default();
*/
const code = `
Promise.resolve().finally();
new Map();
new Set();
new WeakRef();
new WeakMap();
const  a = async()=>{}
`;

const core = require('@babel/core');

const out = core.transformSync(code, {
    plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
    presets: [['@babel/preset-env', { targets: { ie: 9 } }]],
});

console.log(out.code);
