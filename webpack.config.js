const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackDevServer = require('webpack-dev-server');


module.exports = {  //导出一个具有特殊属性的对象
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
     mode: 'none',
    devServer: {
        contentBase: './',
        hot: true,
    },
    // resolve: {
    //     extensions: ['.js', '.vue', '.json'],
    //     alias: {
    //         'vue$': 'vue/dist/vue.esm.js',
    //         '@': resolve('src'),
    //     }
    // },
    externals : {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'

                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};  //node模块