const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map', // 开发环境不用配置，生产环境可以配置
    mode: 'production',
    plugins: [new CleanWebpackPlugin(['dist'])]
});
