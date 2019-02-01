const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: 'localhost',
        port: 8080,
        hot: true,
        noInfo: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrors({
            compilationSuccessInfo: {
                messages: [`编译成功`],
                notes: [`运行于 http://localhost:8080`]
            }
        })
    ],
    mode: 'development'
});
