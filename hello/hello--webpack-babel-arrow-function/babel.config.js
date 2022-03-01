module.exports = function (api) {
    api.cache(true);

    const presets = [];
    const plugins = ['@babel/plugin-transform-arrow-functions'];

    return {
        babelrcRoots: ['.', './**/*'],
        plugins,
        presets,
    };
};
