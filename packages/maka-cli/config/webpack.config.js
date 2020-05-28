'use strict';
const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const DynamicPublicPathPlugin = require("webpack-dynamic-public-path-2")
const getClientEnvironment = require('./env');
const paths = require('./paths');
const env = getClientEnvironment();
const appPackageJson = require(paths.appPackageJson);
const utils = require('../scripts/utils')
const appName = utils.fixName(appPackageJson.name)
const fs = require('fs');

const windowObj = `(function(){
    return (typeof window !== 'undefined' && window ) ||
    (typeof global !== 'undefined' && global ) 
}())`

module.exports = function (option) {
    var { isProd, outputPath, isStart } = option,
        minimizer = isProd ? [
            new TerserPlugin({
                terserOptions: {
                    ie8: false,
                    //ecma: 8,
                    compress: {
                        unused: false,
                    },
                    output: {
                        comments: false,
                        beautify: false,
                    },
                },
                cache: true, parallel: true, sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ] : [],
        outputJsFileName = isProd ? `${appName}.min.js` : `${appName}.js`,
        outputCssFieldName = isProd ? `${appName}.min.css` : `${appName}.css`,
        externals = {
            "react": "react",
            "react-dom": "react-dom",
            "prop-types": "prop-types",
            "redux": "redux",
            "react-redux": "react-redux",
            "immutable": "immutable",
            "maka": "maka"
        }

    if (appPackageJson.webpack && appPackageJson.webpack.externals) {
        externals = { ...externals, ...appPackageJson.webpack.externals }
    }

    var ext = {}

    if (isStart || !isProd) {
        ext = { devtool: 'source-map' }
    }

    const rules = [{
        test: /\.(js|jsx|mjs)$/,
        include: paths.appSrc,
        exclude: paths.appNodeModules,
        use: [{
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
                    [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-proposal-decorators"), {
                        "legacy": true
                    }],
                    [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-proposal-class-properties")],
                    [path.resolve(__dirname, '..', 'node_modules', "styled-jsx/babel")],
                    [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-syntax-dynamic-import")],
                    
                ]
            }
        },{
            loader:path.resolve(__dirname, '..', 'plugins', 'es5', 'loader'),
        }]
        
    }, {
        test: /\.html$/,
        use: path.resolve(__dirname, '..', 'node_modules', 'html2json-loader')
    }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, path.resolve(__dirname, '..', 'node_modules', 'css-loader')]
    }, {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, path.resolve(__dirname, '..', 'node_modules', 'css-loader'), {
            loader: path.resolve(__dirname, '..', 'node_modules', 'less-loader'),
            options: {
                lessOptions:
                    modifyVars: {
                        'ant-prefix': 'ant',
                    },
                    javascriptEnabled: true
                }
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
    }, {
        test: /\.(ico|icon|)(\?\S*)?$/,
        use: {
            loader: path.resolve(__dirname, '..', 'node_modules', 'file-loader'),
            options: {
                name: '[name].[ext]' 
            }
        }
    },{
        test: /\.(txt|md)$/,
        use: path.resolve(__dirname, '..', 'node_modules', 'raw-loader')
    } /*{
        test: /\.md$/,
        use: [{
            loader: path.resolve(__dirname, '..', 'node_modules', 'html-loader')
        }, {
            loader: path.resolve(__dirname, '..', 'node_modules', 'markdown-loader')
        }]
    }*/]

    return {
        mode: isProd ? 'production' : 'development',
        ...ext,
        optimization: {
            minimizer,
            splitChunks: {
                chunks: 'async',
            },
        },
        entry: [
            paths.appIndexJs
        ],
        output: {
            filename: outputJsFileName,
            path: outputPath,
            library: "maka-app-" + appName,
            libraryTarget: "umd",
            globalObject: windowObj,
            publicPath: "publicPathPlaceholder"
        },
        resolve: {
            extensions: [".js"]
        },
        externals,
        module: {
            rules
        },
        plugins: [
            new webpack.DefinePlugin(env.stringified),
            /*
            new webpack.ProvidePlugin({
                'self': __dirname + '/src/globalObj.js',
                'window': __dirname + '/src/globalObj.js',
            }),*/
            new DynamicPublicPathPlugin({
                externalPublicPath: `window['__pub_${appName}__']`,
            }),
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
