const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        hot: true,
        open: true,
        compress: true,
        historyApiFallback: true,

    },
    module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ]
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                ],
            },
        },
    },
    {
        test:  /\.(png|jpe?g|gif|svg|jfif)$/i,
        type: 'asset/resource',
    }
]
},
plugins: [
    new HtmlWebpackPlugin({
        title: "Webpack 5 Starter",
        filename: "index.html",
        template: path.resolve(__dirname, "src/template.html"),
    }),
    new BundleAnalyzerPlugin(),
]
}