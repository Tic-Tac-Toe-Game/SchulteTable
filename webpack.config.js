var webpack = require('webpack');

var environment = process.env.NODE_ENV || 'development';

var plugins = environment === 'production' ? [
    new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV': JSON.stringify(environment)
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
] : [];

module.exports = {
    context: __dirname + '/js/react',
    entry: {
        'main': './components/main'
    },

    output: {
        path: __dirname + '/js/public',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: __dirname + '/js',
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    plugins: plugins,
    devtool: 'source-map',

    resolve: {
        alias: {
            'st' : __dirname + '/js/react'
        }
    }
};
