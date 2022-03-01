const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        main: ['./src/index.ts'],
    },
    mode: 'production',
    optimization: {
        minimize: false,
    },
    output: {
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'out'),
    },
    plugins: [],
    resolve: {
        alias: {},
        extensions: ['.tsx', '.ts', '.js'],
    },
    target: ['web'],
};
