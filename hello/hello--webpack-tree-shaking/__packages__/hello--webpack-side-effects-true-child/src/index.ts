// eslint-disable-next-line import/no-named-default
import { default as a } from './a';
// eslint-disable-next-line import/no-named-default
import { default as b } from './b';
// eslint-disable-next-line import/no-named-default
import { default as c } from './c';

c.current += a;

export { c, a, b };
export default 101;
