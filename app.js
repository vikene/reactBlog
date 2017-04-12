var path = require('path');
var express = require('express');
var app = express();
var webpack = require('webpack');
var reload = require('reload');
var http = require('http');
var BundleUpdateHookPlugin = require('webpack-bundle-update-hook-plugin');

var server = http.createServer(app);

// webpack Configuration
const config = {};

config.entry = "./src/js/index.jsx";
config.output = {
    path: path.join(__dirname , 'dist'),
    filename: 'bundle.js',
};

config.module = {};
config.module.loaders = [
    {
        test: /.css?$/,
        loader: 'style-loader',

    },
    {
        test: /.css?$/,
        loader: 'css-loader'
    },
    {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=images/[name].[ext]'
    },
    {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
            presets:['es2015','react']
        }
    },
    {
        test: /.html?$/,
        loader: "file-loader?name=[name].[ext]",
    }

];

const compiler = webpack(config);

const watching = compiler.watch({
    aggregateTimeout: 300,
    poll: 1000
},function(err,stats){
});

app.get('/api',function (req,res) {
    res.send("Hellow world")
})
app.use(express.static('dist'));

app.set('port', 3000);
reload(server,app);


server.listen(app.get('port'), function () {
    console.log("Server Listening at "+app.get('port'))
    
});