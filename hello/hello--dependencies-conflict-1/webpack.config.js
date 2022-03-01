const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        main: ['./src/App.tsx'],
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
                            configFile: 'tsconfig.json',
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
    resolve: {
        alias: {},
        extensions: ['.tsx', '.ts', '.js'],
    },
    target: ['web'],
};
