# React后台管理系统框架

## 基础项目的搭建

``` bash
mkdir react-wk4-cli && cd react-wk4-cli

npm init -y

npm i webpack webpack-cli -D

npm i webpack-dev-server -D

npm i html-webpack-plugin -D
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
