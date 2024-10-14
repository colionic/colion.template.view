const { merge } = require('webpack-merge');
const path = require('path')
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 清理 dist 目录
const TerserPlugin = require('terser-webpack-plugin');  // 压缩 JavaScript 文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // 将 CSS 提取到单独文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');  // 压缩 CSS

module.exports = merge(common, {
    mode: 'production',  // 生产模式
    devtool: 'source-map',  // 生成 source map 以便调试（可选）
    output: {
        filename: '[name].[contenthash].js',  // 输出文件带上哈希，便于缓存控制
        path: path.resolve(__dirname, 'dist'),  // 输出路径
    },
    optimization: {
        minimize: true,  // 启用压缩
        minimizer: [
            new TerserPlugin(),  // 压缩 JavaScript
            new CssMinimizerPlugin(),  // 压缩 CSS
        ],
        splitChunks: {
            chunks: 'all',  // 分离第三方库到单独的文件
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,  // 处理 CSS 文件
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),  // 清理 dist 目录
        new MiniCssExtractPlugin({  // 提取 CSS 到单独文件
            filename: '[name].[contenthash].css'
        })
    ]
});
