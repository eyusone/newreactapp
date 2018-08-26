var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, 'public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets:["env", "react"]    // используемые плагины
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'file-loader?name=/img/[name].[ext]' },
            { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
            { test: /\.html$/, loader: 'file?name=[name].[ext]' },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    
    plugins: [
            new webpack.ProvidePlugin({
                $: "jquery/dist/jquery.min.js",
                jQuery: "jquery/dist/jquery.min.js",
                "window.jQuery": "jquery/dist/jquery.min.js"
            }),
            //new webpack.optimize.UglifyJsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    BROWSER:  JSON.stringify(true),
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
                }
            })
            //new webpack.EnvironmentPlugin(['NODE_ENV'])
            //new HtmlWebpackPlugin({
                //template: 'public/index.html'
                //inject: "body"
            //})
        ]
};

if (process.env.NODE_ENV === 'production') {
                    plugins.push(new webpack.optimize.DedupePlugin());
                    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
            }