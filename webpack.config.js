const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 出口文件
  output: {
    filename: 'bundle.js',      // 打包后的文件名称
    path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
  },
  // 处理对应模块
  module: {},
  // 对应的插件
  plugins: [
    // 通过new一下这个类来使用插件
    new HtmlWebpackPlugin({
      // 用哪个html作为模板
      // 在src目录下创建一个index.html页面当做模板来用
      template: './public/index.html',
      hash: true, // 会在打包好的bundle.js后面加上hash串
    })
  ],
  // 开发服务器配置
  devServer: {},
  // 模式配置
  mode: 'development'
}