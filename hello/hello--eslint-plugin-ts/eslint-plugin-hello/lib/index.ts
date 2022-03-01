import funcPrefixMatching from './rules/func-prefix-matching';

export = {
    configs: {
        all: {
            rules: {
                'hello/func-prefix-matching': 'error',
            },
        },
    },
    rules: {
        'func-prefix-matching': funcPrefixMatching,
    },
};
