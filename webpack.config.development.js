const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { outputConfig, entryConfig, devServer } = require("./env.config");

module.exports = (env, options) => {
    return {
        mode: options.mode,
        entry: entryConfig,
        devServer,
        target: "web",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(s?)css$/i,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    mode: "local",
                                    auto: true,
                                    exportGlobals: true,
                                    localIdentName: "[path]_[name]__[local]--[hash:base64:5]",
                                    localIdentContext: path.resolve(__dirname, "src"),
                                },
                            },
                        },
                        "sass-loader"
                    ],
                },
            ],
        },
        resolve: { extensions: [".tsx", ".ts", ".js"],
        alias: {
            pages: path.resolve(__dirname, 'src/pages/'),
            components: path.resolve(__dirname, 'src/components/'),
        }, },
        output: {
            filename: "js/[name].bundle.js",
            path: path.resolve(__dirname, outputConfig.destPath),
            publicPath: "",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                inject: true,
                minify: false
            }),
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        name: 'vendors',
                        test: /node_modules/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        }
    };
};