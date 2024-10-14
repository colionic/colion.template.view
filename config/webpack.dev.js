const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require("path");


module.exports = merge(common, {
    mode: 'development',  // 开发模式
    devtool: 'inline-source-map',  // 启用 source map 以便调试
    devServer: {
        contentBase: './dist',
        hot: true,  // 热更新
        open: true,  // 自动打开浏览器
        port: 8080
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()  // 启用热模块替换
    ]
});
