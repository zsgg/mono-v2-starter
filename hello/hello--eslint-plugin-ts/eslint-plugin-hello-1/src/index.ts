import { onFuncPrefixMatchingCreate } from './func-prefix-matching';

module.exports = {
    rules: {
        'func-prefix-matching-1': {
            create: onFuncPrefixMatchingCreate,
        },
    },
};

console.log(`< ?????aaa aa>`);
