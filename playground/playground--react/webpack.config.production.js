const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: {
        main: ['./src/index.tsx'],
    },
    mode: 'production',
    module: {
        rules: [
            {
                exclude: /\.spec.(ts|tsx)/,
                test: /\.(ts|tsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.build.json',
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    output: {
        chunkFilename: '[name].chunk.js',
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    resolve: {
        alias: {},
        extensions: ['.tsx', '.ts', '.js'],
    },
    target: ['web'],
};
