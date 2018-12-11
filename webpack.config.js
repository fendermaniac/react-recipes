const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                  }
            }
        ]
    }
};