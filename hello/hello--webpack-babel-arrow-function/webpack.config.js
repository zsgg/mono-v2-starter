const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        main: ['./src/index.ts'],
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader'],
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    output: {
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'out'),
    },
    plugins: [],
};
