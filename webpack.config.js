const webpack = require('webpack')
const postcssNested = require('postcss-nested')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: {
        popup: './front-end/popup.js',
        content: './front-end/content.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name]-bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.[s]?css$/,
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'postcss'
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif|woff)$/,
            loader: 'url-loader?limit=8192?name=[name].[ext]'
        }],

    },
    postcss: [
        postcssNested,
        require('postcss-cssnext')
    ],
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom"
        }),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
}