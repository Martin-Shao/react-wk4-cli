const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 出口文件
  output: {
    filename: 'bundle.js',      // 打包后的文件名称
    path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
  },
  // 处理对应模块
  module: {
    rules: [
      {
        test: /\.less$/,     // 解析less
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析
        })
      },
      {
        test: /\.scss$/,     // 解析scss
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'sass-loader'] // 从右向左解析
        })
      },
      {
        test: /\.css$/,     // 解析css
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/'   // 图片打包后存放的目录
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  // 对应的插件
  plugins: [
    // 通过new一下这个类来使用插件
    new HtmlWebpackPlugin({
      // 用哪个html作为模板
      // 在src目录下创建一个index.html页面当做模板来用
      template: './public/index.html',
      hash: true, // 会在打包好的bundle.js后面加上hash串
    }),
    // 拆分后会把css文件放到dist目录下的css/style.css
    new ExtractTextWebpackPlugin('css/style.css')
  ],
  // 开发服务器配置
  devServer: {},
  resolve: {
    // 别名
    alias: {
      Pages: path.join(__dirname, 'src/pages'),
      Component: path.join(__dirname, 'src/component'),
      Actions: path.join(__dirname, 'src/redux/actions'),
      Reducers: path.join(__dirname, 'src/redux/reducers'),
    },
    // 省略后缀
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
  },
  // 模式配置
  mode: 'development'
}