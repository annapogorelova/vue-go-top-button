process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('./webpack.lib.conf');

webpack(webpackConfig, function (err, stats) {
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');

    console.log('Build complete');
});