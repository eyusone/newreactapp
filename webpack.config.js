var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, 'public'), 
        publicPath: '/',
        filename: "bundle.js"       
    },

    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx']
    },

    //devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,

    module:{
        rules:[   
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules)/,  
                loader:
                    "babel-loader",
                options: {
                    presets:["env", "react"]
                    //eslint: { configFile: '.eslintrc' }    
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif',exclude: /(node_modules)/ },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg',exclude: /(node_modules)/ },
            { test: /\.png$/, loader: 'file-loader?name=/img/[name].[ext]',exclude: /(node_modules)/ },
            { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml',exclude: /(node_modules)/ },
            { test: /\.html$/, loader: 'file?name=[name].[ext]',exclude: /(node_modules)/ }
            /*{
                test: /\.json$/,
                loader: 'json-loader'
            }*/
        ]
    },

    devServer: {
        historyApiFallback: true
        //headers: { 'Access-Control-Allow-Origin': '*' } //different ports, CORS problem
    },
    
    plugins: [
            /*new webpack.ProvidePlugin({
                $: "jquery/dist/jquery.min.js",
                jQuery: "jquery/dist/jquery.min.js",
                "window.jQuery": "jquery/dist/jquery.min.js"
            }),*/
            //new webpack.optimize.UglifyJsPlugin(), //for production
            new webpack.DefinePlugin({
                'process.env': {
                    BROWSER:  JSON.stringify(true),
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
                }
            }),
            new webpack.LoaderOptionsPlugin({
                //debug: true                       //for development
                /*'options': {
                    eslint: { configFile: '.eslintrc' }
                }*/
            }),
            new ExtractTextPlugin('styles.css')

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