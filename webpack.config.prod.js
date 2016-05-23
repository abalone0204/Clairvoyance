const path = require('path')
const config = require('./webpack.config.js')
const webpack = require('webpack')

module.exports = {
    entry: config.entry,
    output: config.output,
    module: config.module,
    postcss: config.postcss,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ].concat(config.plugins)
}