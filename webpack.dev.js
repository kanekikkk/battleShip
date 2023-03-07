const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {

        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: false

    },
    plugins: [new HtmlWebpackPlugin({title: 'caching',
        template: "./src/index.html"
    }),new MiniCssExtractPlugin({filename: "[name].[contenhash].css"})],
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },{
                test: /\.html$/,
                use: ["html-loader"]
            },{
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            }
        ]
    }
};