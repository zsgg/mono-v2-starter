const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: __dirname,
    // devtool: 'inline-source-map',
    entry: {
        main: ['./src/index.ts'],
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            projectReferences: true,
                            transpileOnly: false,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        // providedExports: true,
        // usedExports: true,
    },
    output: {
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, './out'),
    },
    plugins: [new CleanWebpackPlugin()],
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
