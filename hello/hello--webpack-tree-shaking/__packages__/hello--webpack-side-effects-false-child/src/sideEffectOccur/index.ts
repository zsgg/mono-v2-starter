// eslint-disable-next-line import/no-named-default
import { default as a } from './a';
// eslint-disable-next-line import/no-named-default
import { default as b } from './b';
// eslint-disable-next-line import/no-named-default
import { default as c } from './c';

// @ts-ignore
c = a + b;

export { a, b, c };
export default 222;
