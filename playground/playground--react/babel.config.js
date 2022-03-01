/* eslint-disable prettier/prettier */
module.exports = function (api) {
    api.cache(true);

    const presets = [
        '@babel/preset-env',
        ['@babel/preset-react', { importSource: '@emotion/react', runtime: 'automatic' }],
        '@emotion/babel-preset-css-prop',
    ];
    const plugins = [
        '@emotion/babel-plugin',
    ];

    return {
        env: {
          development: {
              plugins: ["react-hot-loader/babel"],
          },
        },
        plugins,
        presets,
    };
};
