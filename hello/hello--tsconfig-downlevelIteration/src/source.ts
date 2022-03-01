const str = 'Hello!';
// @ts-ignore
for (const s of str) {
    console.log(s);
}

const missing = [0, , 1];
const spreaded = [...missing];
const concated = [].concat(missing);
export {};
