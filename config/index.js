// see http://vuejs-templates.github.io/webpack for documentation.
const path = require("path");

module.exports = {
    build: {
        env: {
            NODE_ENV: "\"production\""
        },
        index: path.resolve(__dirname, "../index.html"),
        assetsRoot: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: "docs",
        assetsPublicPath: "/vue-go-top-button/dist",
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ["js", "css"],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    lib: {
        env: {
            NODE_ENV: "\"production\""
        },
        assetsRoot: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: "lib",
        assetsPublicPath: "/",
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ["js", "css"],
        bundleAnalyzerReport: process.env.npm_config_report
    }
};
