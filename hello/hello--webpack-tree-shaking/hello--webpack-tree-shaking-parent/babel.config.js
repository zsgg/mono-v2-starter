module.exports = function (api) {
    api.cache(true);

    const presets = [
        ['@babel/preset-env', { targets: { ie: 9 } }],
        '@babel/preset-typescript',
    ];
    const plugins = [
        ['@babel/plugin-transform-runtime', { corejs: 3, regenerator: true }],
        '@babel/plugin-transform-typescript',
    ];

    // const presets = [
    //     [
    //         "@babel/env",
    //         {
    //             "targets": {
    //                 "edge": "17",
    //                 "firefox": "60",
    //                 "chrome": "67",
    //                 "safari": "11.1"
    //             },
    //             "useBuiltIns": "usage",
    //             "corejs": "3.6.5"
    //         }
    //     ]
    // ];
    // const plugins = [];

    // const presets = [
    // ];
    // const plugins = [
    // ];

    return {
        babelrcRoots: ['.', './**/*'],
        plugins,
        presets,
    };
};
