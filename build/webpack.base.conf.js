const path = require("path");
const utils = require("./utils");
const config = require("../config");
const isProduction = process.env.NODE_ENV === "production";

function resolve(dir) {
    return path.join(__dirname, "..", dir)
}

module.exports = {
    entry: {
        ["vue-go-top-button"]: "./src/lib.js"
    },
    output: {
        path: config.build.assetsRoot,
        filename: "[name].js",
        publicPath: process.env.NODE_ENV === "production"
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            "@": resolve("src")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: utils.cssLoaders({
                        sourceMap: isProduction
                            ? config.build.productionSourceMap
                            : config.dev.cssSourceMap,
                        extract: isProduction
                    }),
                    transformToRequire: {
                        video: "src",
                        source: "src",
                        img: "src",
                        image: "xlink:href"
                    }
                }
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              include: [resolve('src')]
            }
        ]
    }
};
