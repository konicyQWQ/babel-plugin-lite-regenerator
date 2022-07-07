const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    webpack: {
        plugins: [
            new MonacoWebpackPlugin(),
            new webpack.ProvidePlugin({
                process: 'process/browser',
                Buffer: ['buffer', 'Buffer'],
                path: 'path-browserify'
            })
        ],
        configure: (webpackConfig, { env, paths }) => {
            return {
                ...webpackConfig,
                resolve: {
                    ...webpackConfig.resolve,
                    fallback: {
                        ...webpackConfig.resolve.fallback,
                        'path': require.resolve('path-browserify'),
                        'buffer': require.resolve("buffer"),
                        'fs': false,
                    },
                }
            };
        }
    }
}