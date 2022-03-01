module.exports = function (api) {
    console.log(`< api.env >`, api.env);
    console.log(`< api.caller >`, api.caller);
    api.cache(true);

    const presets = [];
    const plugins = [];

    return {
        presets,
        plugins
    };
}
