/* eslint-disable prettier/prettier */
module.exports = function (api) {
    api.cache(true);

    const presets = [
        '@babel/preset-env',
        ['@babel/preset-react', { importSource: '@emotion/react', runtime: 'automatic' }],
        '@emotion/babel-preset-css-prop',
    ];
    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        '@emotion/babel-plugin',
        "@babel/plugin-transform-arrow-functions"
    ];

    return {
        env: {
          development: {
              plugins: ["react-hot-loader/babel"],
          },
          production: {
              plugins: [
                  ['transform-remove-console', { exclude: ['error', 'warn'] }],
                  ['react-remove-properties', { properties: ['data-testid', 'data-de'] }],
              ],
          }
        },
        plugins,
        presets,
    };
};
