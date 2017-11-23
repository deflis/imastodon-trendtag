const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "dev"
}

const titleExt = process.env.NODE_ENV == "production" ? "" : `(${process.env.NODE_ENV})`;

const commonPligin = [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
        title: `トレンドタグ${titleExt}`,
        filename: 'index.html',
        template: 'src/index.ejs'
    }),
    new webpack.DefinePlugin({
        __PRODUCTION__: JSON.stringify(process.env.NODE_ENV == "production"),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
];

const config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.ts',
    ],
    output: {
        filename: "bundle.js",
        publicPath: "/",
        path: path.resolve(process.cwd() + "/docs_dev")
    },
    devtool: "source-map",
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        compilerOptions: {
                            "module": "es2015",
                        },
                    },
                },],
                exclude: /node_modules/,
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                enforce: "post",
                test: /\.[js|tsx?]$/,
                use: [{
                    loader: 'buble-loader',
                    options: {
                        target: { chrome: 50, firefox: 48 },
                        transforms: {
                            modules: false
                        },
                    },
                },],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    },
                    { loader: "sass-loader" }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    },
                ],
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: commonPligin.concat([
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
    ]),
    devServer: {
        contentBase: path.join(__dirname, "docs"),
        compress: true,
        port: 8080,
        hot: true,
        historyApiFallback: true,
        inline: true,
    }
};

if (process.env.NODE_ENV == "production") {
    config.entry = {
        "app": './src/index.ts',
    };
    config.output.publicPath = "./";
    config.output.path = path.resolve(process.cwd() + "/docs");
    config.devtool = false;
    config.plugins = commonPligin.concat([
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: false,
        }),
        new UglifyJSPlugin({
            sourceMap: config.devtool && (config.devtool.indexOf("sourcemap") >= 0 || config.devtool.indexOf("source-map") >= 0),
            uglifyOptions: {
                ecma: 8,
                output: {
                    beautify: false
                },
            }
        }),
    ])
}

module.exports = config;
