const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['./app.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: "/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 80,
        historyApiFallback: true,
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader' 
            },
            {
                test: /\.(jpg|png)$/,
                use: 'url-loader'
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/static/template/index.tpl'
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false, 
                output: {
                    beautify: false,
                    comments: false
                }         
            }
        })
    ]
}