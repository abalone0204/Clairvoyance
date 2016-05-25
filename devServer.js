var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require('./webpack.config.js');
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    contentBase: "./dist",
    stats: {
        colors: true,
    }
});


server.listen(8080, '0.0.0.0', (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://0.0.0.0:8080/');
});