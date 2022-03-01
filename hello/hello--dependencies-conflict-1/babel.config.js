/* eslint-disable prettier/prettier */
module.exports = function (api) {
    api.cache(true);

    const presets = [
        '@babel/preset-env',
        '@babel/preset-react',
    ];
    const plugins = [
        '@emotion/babel-plugin',
    ];

    return {
        plugins,
        presets,
    };
};
