const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname , 'src/index.js') ,
    output: {
        filename: '[name].bundle.js' ,
        path: path.resolve(__dirname , 'dist')
    } ,
    module: {
        rules: [
            {
                test: /\.css$/ ,
                use: [ 'style-loader' , 'css-loader' ]
            } ,
            {
                test: /\.less$/ ,
                use: [ 'style-loader' , 'css-loader' , 'less-loader' ]
            } ,
            {
                test: /\.(js|jsx)$/ ,
                use: [ 'babel-loader' ] ,
                exclude: /node_modules/
            } , {
                test: /\.(png|svg|jpg|gif)$/ ,
                use: [ 'file-loader' ]
            }
        ]
    } ,
    plugins: [
        new HtmlWebpackPlugin({
            title: '吊炸天' ,
            template: path.resolve('./template/dev.html') ,
            filename: 'index.html' ,
        }) ,
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};