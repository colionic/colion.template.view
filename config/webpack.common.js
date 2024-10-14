const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 用于生成 HTML 文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.js',  // 应用入口
    output: {
        filename: '[name].bundle.js',  // 输出的文件名
        path: path.resolve(__dirname, '../dist'),  // 输出路径
    },
    resolve: {
        alias: {  // 设置别名
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,  // 处理 .vue 文件
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,  // 处理 JavaScript 文件
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,  // 处理 CSS 文件
                use: ['style-loader', 'css-loader',  {
                    loader: 'postcss-loader',  // 使用 postcss-loader
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('autoprefixer'),  // 自动添加前缀
                            ],
                        },
                    },
                },]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',  // 生成 HTML 文件
        }),
        new VueLoaderPlugin()
    ]
};
