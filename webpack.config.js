var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].chunk-[chunkhash:8].js',
    publicPath: '/static/'
    //sourceMapFilename: '[file].map'
  },
  plugins: [
    //new webpack.ProvidePlugin({  //我们在JS中，就不需要引入jQuery等常用模块了，直接使用配置的这些变量，webpack就会自动引入配置的库
    //  $: 'zepto',
    //  zepto: 'zepto',
    //  'window.zepto': 'zepto'
    //}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
    //new ExtractTextPlugin('styles/[name]-[contenthash:8].css', {
    //  // 当allChunks指定为false时，css loader必须指定怎么处理
    //  // additional chunk所依赖的css，即指定`ExtractTextPlugin.extract()`
    //  // 第一个参数`notExtractLoader`，一般是使用style-loader
    //  // @see https://github.com/webpack/extract-text-webpack-plugin
    //  allChunks: true
    //}), //css单独生成文件
    //new webpack.NoErrorsPlugin()
  ],
  resolve: {//文件路径的指向
    extensions: ["",".js",".jsx",".es6","css","scss","png","jpg","jpeg"]//引入时可以省略后缀
    //alias: {
    ////如果不介意将react打包到一起，请在alias中直接指向react的文件。可以提高webpack搜索的速度。准备部署上线时记得将换成react.min，能减少文件大小(减少约600kb)
    //  'zepto': path.join('/zepto/zepto.min')
    //}
    //  'react': path.join(nodeModulesPath, '/react/dist/react'),
    //  'react-dom': path.join(nodeModulesPath, '/react-dom/dist/react-dom'),
    //  'redux': path.join(nodeModulesPath, '/redux/dist/redux'),
    //  'react-redux': path.join(nodeModulesPath, '/react-redux/dist/react-redux'),
    //  'react-router': path.join(nodeModulesPath, '/react-router/dist/react-router'),
    //  'react-router-redux': path.join(nodeModulesPath, '/react-router-redux/dist/react-router-redux')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },{
        test: /\.css/,
        //loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
        loader: 'style!css!postcss!less'
      }
      //,{
      //  test:'./lib/zepto/zepto.min.js',
      //  loader: ['expose?zepto']
      //}
    ]
  }
}
