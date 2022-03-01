const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    cache: {
        type: 'filesystem',
    },
    context: __dirname,
    devServer: {
        compress: true,
        historyApiFallback: true,
        host: 'localhost',
        hot: true,
        hotOnly: true,
        https: false,
        open: false,
        overlay: true,
    },
    devtool: 'inline-source-map',
    entry: [require.resolve('react-hot-loader/patch'), './src/index.tsx'],
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /\.spec.(ts|tsx)/,
                test: /\.(ts|tsx)$/,
                use: [
                    require.resolve('react-hot-loader/webpack'),
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            cacheCompression: false,
                            cacheDirectory: true,
                        },
                    },
                    { loader: 'ts-loader', options: { transpileOnly: true } },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new CaseSensitivePathsPlugin({}),
        new ForkTsCheckerWebpackPlugin({
            typescript: { configFile: './src/tsconfig.json' },
        }),
        new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true }),
        new ESLintPlugin({ cache: true }),
    ],
    resolve: {
        alias: {
            'react-dom': require.resolve('@hot-loader/react-dom'),
        },
        extensions: ['.tsx', '.ts', '.scss', '.js', '.jsx'],
        plugins: [PnpWebpackPlugin],
    },
    resolveLoader: {
        plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },
};
