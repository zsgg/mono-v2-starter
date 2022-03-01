const HtmlWebpackPlugin = require('html-webpack-plugin');

const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = {
    context: __dirname,
    devServer: {
        host: 'localhost',
        hot: true,
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
                    require.resolve('babel-loader'),
                    { loader: 'ts-loader', options: { transpileOnly: true } },
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    resolve: {
        alias: {
            'react-dom': require.resolve('@hot-loader/react-dom'),
        },
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [PnpWebpackPlugin],
    },
    resolveLoader: {
        plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },
};
