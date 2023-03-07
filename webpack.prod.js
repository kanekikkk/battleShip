const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

    mode: 'production',
    entry: './src/index.js',
    output: {

        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true

    },
    plugins: [new HtmlWebpackPlugin({title: 'caching', template: './src/index.html'}),
        new MiniCssExtractPlugin({filename: "[name].[contenhash].css"}),
    ],
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }

        ]
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ],
    },
}
