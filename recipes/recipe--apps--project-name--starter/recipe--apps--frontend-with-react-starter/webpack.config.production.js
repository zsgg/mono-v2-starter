const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
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
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
    },
    output: {
        chunkFilename: '[name].chunk.js',
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new CaseSensitivePathsPlugin({}),
        new ForkTsCheckerWebpackPlugin({
            typescript: { configFile: './src/tsconfig.json' },
        }),
        new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true }),
    ],
    resolve: {
        alias: {},
        extensions: ['.tsx', '.ts', '.scss', '.js'],
    },
    target: ['web'],
};
