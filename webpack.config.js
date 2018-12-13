const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: ['whatwg-fetch','./index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/, 
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
            },
            {
                test: /\.m?css$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.?(png|jpeg)$/,
                use: {
                   loader: 'file-loader',
                   options: {}
                }
                
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL)
        })
    ]
};