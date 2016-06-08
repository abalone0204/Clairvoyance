const webpack = require('webpack')
const postcssNested = require('postcss-nested')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: {
        eventPage: './front-end/eventPage.js',
        popup: './front-end/popup.js',
        content: './front-end/content.js',
        options: './front-end/options.js',
        dev: './front-end/dev.js'
            // app: './front-end/app/index.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name]-bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            app: 'front-end/app',
            components: 'front-end/app/components',
            actions: 'front-end/app/actions',
        }
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                plugins: [
                    'transform-runtime',
                    'add-module-exports',
                    'transform-decorators-legacy',
                ],
                presets: ['es2015', 'react', 'stage-1'],
            }
        }, {
            test: /\.[s]?css$/,
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'postcss'
            ]
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpg|jpeg|gif|woff)$/,
            loader: 'url-loader?limit=8192?name=[name].[ext]'
        }],

    },
    postcss: [
        postcssNested,
        require('postcss-cssnext'),
        require('postcss-simple-vars')
    ],
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
            CSSModules: "react-css-modules"
        }),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
}