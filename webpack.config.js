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
        dev: [
                'webpack/hot/dev-server',
                'webpack-dev-server/client?http://localhost:8080',
                './front-end/dev.js'
            ]
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
            jobHelper: 'front-end/jobHelper'
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
            test: /font-awesome\.css$/,
            loaders: [
                'style?sourceMap',
                'css?importLoaders=1',
                'postcss'
            ]
        },{
            test: /^((?!font-awesome).)*\.[s]?css$/,
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'postcss'
            ]
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpg|jpeg|gif|woff)$/,
            loader: 'url-loader?limit=8192?name=[name].[ext]'
        }]
    },
    postcss: [
        postcssNested,
        require('postcss-cssnext'),
        require('postcss-simple-vars'),
        require('postcss-nested')
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
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