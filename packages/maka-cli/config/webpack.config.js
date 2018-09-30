'use strict';
const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const getClientEnvironment = require('./env');
const paths = require('./paths');
const env = getClientEnvironment();
const appPackageJson = require(paths.appPackageJson);
const utils = require('../scripts/utils')
const appName = utils.fixName(appPackageJson.name)
const fs = require('fs');

module.exports = function (option) {
    var { isProd, outputPath } = option,
        minimizer = isProd ? [new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }), new OptimizeCSSAssetsPlugin({})] : [],
        outputJsFileName = isProd ? `${appName}.min.js` : `${appName}.js`,
        outputCssFieldName = isProd ? `${appName}.min.css` : `${appName}.css`,
        externals = {
            "react": "react",
            "react-dom": "react-dom",
            "immutable": "immutable",
            "maka": "maka"
        }

    if(appPackageJson.webpack && appPackageJson.webpack.externals){
        externals = {...externals, ...appPackageJson.webpack.externals}
    }

    return {
        mode: 'production',
        optimization: {
            minimizer
        },
        entry: [
            paths.appIndexJs
        ],
        output: {
            filename: outputJsFileName,
            path: outputPath,
            library: "MakaApp-" + appName,
            libraryTarget: "umd"
        },
        resolve: {
            extensions: [".js"]
        },
        externals,
        module: {
            rules: [{
                test: /\.(js|jsx|mjs)$/,
                include: paths.appSrc,
                exclude: paths.appNodeModules,
                loader: path.resolve(__dirname, '..', 'node_modules', 'babel-loader'),
                options: {
                    babelrc: false,
                    "presets": [
                        [path.resolve(__dirname, '..', 'node_modules', "@babel/preset-env"), {
                            "targets": {
                                "browsers": ["ie >= 11", "chrome >= 60"]
                            }
                        }],
                        [path.resolve(__dirname, '..', 'node_modules', "@babel/preset-react")]
                    ],
                    "plugins": [
                        [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-transform-runtime"), {
                            "corejs": false,
                            "helpers": true,
                            "regenerator": true,
                            "useESModules": false,
                            "absoluteRuntime": path.resolve(__dirname)
                        }],
                        [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-proposal-class-properties")],
                        [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-proposal-decorators"), {
                            "legacy": true
                        }]
                    ]
                }
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, path.resolve(__dirname, '..', 'node_modules', 'css-loader')]
            }, {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, path.resolve(__dirname, '..', 'node_modules', 'css-loader'), {
                    loader: path.resolve(__dirname, '..', 'node_modules', 'less-loader'),
                    options: {
                        javascriptEnabled: true
                    }
                }]
            }, {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                use: {
                    loader: path.resolve(__dirname, '..', 'node_modules', 'file-loader'),
                    options: {
                        name: '[name].[ext]',
                        limit: 8192
                    }
                }
            }],
        },
        plugins: [
            new webpack.DefinePlugin(env.stringified),
            new CaseSensitivePathsPlugin(),
            new MiniCssExtractPlugin({ filename: outputCssFieldName })
        ],
        node: {
            dgram: 'empty',
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
            child_process: 'empty',
        }
    }
}
