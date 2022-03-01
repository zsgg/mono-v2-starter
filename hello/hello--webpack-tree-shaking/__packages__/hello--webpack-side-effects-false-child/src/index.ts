// eslint-disable-next-line import/no-named-default
import { default as a } from './a';
// eslint-disable-next-line import/no-named-default
import { default as b } from './b';
// eslint-disable-next-line import/no-named-default
import { default as c } from './c';

// @ts-ignore
c = a + b;

export { default as a } from './a';
export { default as b } from './b';
export { default as c } from './c';
export { default as d } from './d';
export * as Atom from './Atom';
export * as sideEffectOccur from './sideEffectOccur';
export default 11;
