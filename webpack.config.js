var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin( {
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: "./tic.js",
    output: {
        path: __dirname + '/app',
        filename: "bundle.js"
    },
    module: {
        loaders: [
        { test: /\.css$/, include: __dirname, loader: "style!css"},
        { test: /\.js$/, loader: "babel-loader" }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
};
