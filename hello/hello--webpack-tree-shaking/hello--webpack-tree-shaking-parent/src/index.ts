/* eslint-disable */
console.log(`< hello webpack >`);

// case 1
// import {a} from 'hello--webpack-side-effects-true-child'
// console.log(`< side effect false >`,  a);

// case 2
// import module1, {a, b, c} from './module1'
// a.aInA();
// console.log(`< module1 false >`, module1);

// case 3
import { c, a, b } from 'hello--webpack-side-effects-true-child';
console.log(`< side effect true >`, c.current);
//
// // case 4
// import {sideEffectOccur, d} from 'hello--webpack-side-effects-false-child'
// console.log(`< side effect false >`, sideEffectOccur.c, d);

// case 5
// import(/* webpackExports: ["a"] */ './dynamic').then(({ a }) => {
//     // Only module.a is available
//     // No other export is available...
//     // Chunk size & network latency are reduced...
//     console.log(`< dynamic import >`, a);
// });

// --- babel
// const arr = ()=>{}
// console.log(`< arr hello >`, arr);
// for (const arrayElement of "hellooooo") {
//     console.log(`<  >`, arrayElement);
// }
// Promise.resolve().finally();
// new Map();
// new Set();
// new WeakRef();
// new WeakMap();
// const  a = async()=>{}
//
// import('./dynamicModule.ts').then(value => {
//     value.default();
// })

export {};
