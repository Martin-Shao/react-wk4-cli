# React后台管理系统框架

## 基础项目的搭建

``` bash
mkdir react-wk4-cli && cd react-wk4-cli

npm init -y

npm i webpack webpack-cli -D

npm i webpack-dev-server -D

npm i html-webpack-plugin -D

npm i style-loader css-loader -D
# 引入less文件的话，也需要安装对应的loader
npm i less less-loader -D
npm i node-sass sass-loader -D

# @next表示可以支持webpack4版本的插件
npm i extract-text-webpack-plugin@next -D

npm i mini-css-extract-plugin -D

# 引用图片
npm i file-loader url-loader -D

# 页面img引用图片
npm i html-withimg-loader -D

# 添加CSS3前缀
npm i postcss-loader autoprefixer -D
```

``` js
module.exports = {
    entry: '',               // 入口文件
    output: {},              // 出口文件
    module: {},              // 处理对应模块
    plugins: [],             // 对应的插件
    devServer: {},           // 开发服务器配置
    mode: 'development'      // 模式配置
}
```

``` js
rules: [
      {
        test: /\.css$/,     // 解析css
        use: ['style-loader', 'css-loader'] // 从右向左解析
        /*
            也可以这样写，这种方式方便写一些配置参数
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'}
            ]
        */
      }
    ]
  }
```

``` js
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/a.css'   // 指定打包后的css
        })
    ]
}
```
