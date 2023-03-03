const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        card: './src/blocks/card/card.ts',
        grid: './src/blocks/grid/grid.ts',
    },
    module: {
        rules: [
            // typescript loader
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // file loader
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            // sass/css loader
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "card.html",
            template: "./src/blocks/card/card.html",
            chunks: ['card']
        }),
        new HtmlWebpackPlugin({
            filename: "grid.html",
            template: "./src/blocks/grid/grid.html",
            chunks: ['grid']
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
    },
};